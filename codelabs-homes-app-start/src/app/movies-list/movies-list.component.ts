import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesList } from '../movies-list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section>
      <a [routerLink]="['/details', moviesList.id]">
        <img class="listing-photo" [src]="moviesList.imgPath" alt="Exterior photo of {{moviesList.name}}">
      </a>  
      <h4 class="listing-name">{{ moviesList.name }}</h4>
      <p class="listing-duration">{{ moviesList.duration }} min</p>
      <p class="listing-rating">User Rating: {{ moviesList.userRating }}</p>
      
    </section>
  `,
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  @Input() moviesList!:MoviesList;

}
