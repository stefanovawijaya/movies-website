import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { MoviesList } from '../movies-list';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MoviesListComponent],
  template: `
    <section>

      <form>
        <input type="text" placeholder="Search Movies..." #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>

      

      
    </section>
    
    <h3>Popular Movies this month</h3>
    <section class="results">
      <app-movies-list *ngFor="let moviesList of filteredLocationList" [moviesList] ="moviesList"></app-movies-list>
    </section>
    
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  moviesListList: MoviesList[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList:MoviesList[] = [];

  constructor(){
    this.housingService.getAllMoviesList().then((moviesListList: MoviesList[]) => {this.moviesListList = moviesListList;
    this.filteredLocationList = moviesListList;
    });
  }

  filterResults(text: string){
    if (!text) this.filteredLocationList = this.moviesListList;

    this.filteredLocationList = this.moviesListList.filter(
      moviesList => moviesList?.name.toLowerCase().includes(text.toLowerCase()));
  }
}
