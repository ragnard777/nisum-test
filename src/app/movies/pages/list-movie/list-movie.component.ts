import { Movie } from './../../interfaces/movies.interface';
import { CommonModule } from '@angular/common';
import { PersistenceService } from './../../../adapter/persistence.service';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MatDividerModule } from '@angular/material/divider';
import { CardComponent } from '../../components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-list-movie',
  standalone: true,
  imports: [CommonModule,MatDividerModule, CardComponent,MatCardModule,RouterOutlet,MatButtonModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatIconModule,ReactiveFormsModule],
  templateUrl: './list-movie.component.html',
  styleUrl: './list-movie.component.css'
})
export class ListMovieComponent implements OnInit {

  public movieForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    status: new FormControl('',[Validators.required]),
  });

  public movies:Movie[] = [];
  isModalVisible=false;
  movieActualizada:any;

  constructor(private moviesService:MoviesService, private persistence:PersistenceService){}

  ngOnInit(): void {
    this.getMovies();
  }


   getMovies(){
    if(!this.moviesService.validarSiExisteMovie()){
      this.moviesService.getMovies().subscribe(observer => {
        this.movies = observer;
        this.persistence.setItem("movie", observer);
      })
    }
    this.movies = this.persistence.getItem("movie");
  }

  deleteItem(item:any) {
    this.movies = this.movies.filter(i => i !== item);
  }

  actualizadoItem(data:any){
    console.log(' actualizadoItem:',data);
    if(data){
      this.movieActualizada = data;
      this.openModal();
    }
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  onSubmit(){
  console.log(this.movieActualizada);
    if(this.movieForm.valid && this.movieActualizada){
      const index = this.movies.findIndex(i => i === this.movieActualizada);
    if (index !== -1) {
      this.movies[index].title = this.movieForm.value.title;
      this.movies[index].status = this.movieForm.value.status;
    }
    this.closeModal();
    }
    if(!this.movieActualizada && this.movieForm.valid){
      this.movies.push({title:this.movieForm.value.title, status:this.movieForm.value.status});
      this.closeModal();
    }
  }


}
