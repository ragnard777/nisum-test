import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MovieNoImagePipe } from "../../pipes/movie-no-image.pipe";
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movies-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDivider, MatChipsModule, MatIconModule, MovieNoImagePipe,MatButtonModule,RouterOutlet,RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input()
  public movie!:Movie;

  @Output() itemDeleted = new EventEmitter<any>();
  @Output() itemActualizado = new EventEmitter<any>();

  ngOnInit(): void {
    if(!this.movie) throw new Error("Las peliculas son requeridas");
  }

  onAction1(){
    this.itemDeleted.emit(this.movie);
  }

  openDialog(){
    this.itemActualizado.emit(this.movie);
  }
  onDataSaved(item:any){}

}
