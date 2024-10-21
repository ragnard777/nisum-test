import { PersistenceService } from '../../adapter/persistence.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Movie } from '../interfaces/movies.interface';
import { environments } from '../../../../environments';
import { UtilsService } from '../../utils/utils.service';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private endpoint:string = environments.url;

  constructor(private http:HttpClient, private persistence:PersistenceService,private utils:UtilsService) { }

  getMovies():Observable<Movie[]>{

    const headers = new HttpHeaders({
      'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com',
      'x-rapidapi-key': '2602acfc8bmsh466cfd967cba0b2p11b344jsn99e99fc77688'
    });

    return this.http.get<Movie[]>(`${this.endpoint}`,{headers});
  }

  validarSiExisteMovie():boolean{
    const moviesLocal = this.persistence.getItem('movies');
    if(!this.utils.validarRespuesta(moviesLocal)){
      this.getMovies().subscribe(observer => {
        this.persistence.setItem("movie", observer);
      })
    }
    return true;
  }

}
