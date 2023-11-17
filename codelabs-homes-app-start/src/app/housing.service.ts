import { Injectable } from '@angular/core';
import { MoviesList } from './movies-list';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() { }

  async getAllMoviesList() : Promise<MoviesList[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getMoviesListById(id: Number): Promise<MoviesList | undefined>{
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
}
