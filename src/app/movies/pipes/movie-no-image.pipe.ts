import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/movies.interface';

@Pipe({
  name: 'movieNoImage',
  standalone: true
})
export class MovieNoImagePipe implements PipeTransform {

  transform(movie:Movie): string {
    if(!movie.poster_path || !movie){
      return "./assets/no-image.png";
    }
    return movie.poster_path!;
  }

}
