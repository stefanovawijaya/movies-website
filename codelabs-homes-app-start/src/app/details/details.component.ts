import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { MoviesList } from '../movies-list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header>
      <a [routerLink]="['/home']"><button class="primary" type="button">Back</button></a>
      
      <h3>{{moviesList?.name}}</h3>
      <p>({{moviesList?.mpaaRating}})<p>
      <hr>
    </header>
    <article>
      <img class="listing-photo" [src]="moviesList?.imgPath">
      <section class="listing-features">
        <h3>Details</h3>
        <ul>
          <li>Genre: {{moviesList?.genre}}</li>
          <li>Language: {{moviesList?.language}}</li>
          <li>Duration: {{moviesList?.duration}}</li>
          <li>User Rating: {{moviesList?.userRating}}</li>
        </ul>
      </section>
      <section class="synop">
        <h3>Synopsis</h3>
        <p>{{moviesList?.description}}</p>
      </section>
      

      </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  moviesList: MoviesList | undefined;

  constructor(){
    const moviesListId = Number(this.route.snapshot.params['id']);
    this.housingService.getMoviesListById(moviesListId).then(moviesList => {this.moviesList = moviesList;});
  }
}
