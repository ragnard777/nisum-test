import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';
import { HttpClient } from '@angular/common/http';
import { ListMovieComponent } from '../../list-movie/list-movie.component';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,CommonModule, MatToolbarModule,ListMovieComponent,MatCardModule, MatDivider],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {

  constructor(private movies:MoviesService){}

  ngOnInit(): void {

  }

}
