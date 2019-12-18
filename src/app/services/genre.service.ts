import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Genre } from '../interfaces/genre.interface';
import { tap, switchMapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  constructor(private http: HttpClient) { }

  public genre: BehaviorSubject<string> = new BehaviorSubject('');

  public genresList: BehaviorSubject<Genre[]> = new BehaviorSubject([]);

  updateGenre(genre: string) {
    return this.genre.next(genre);
  }

  loadGenresList() {
    return this.http.get('http://localhost:3004/genres')
      .pipe(
        tap((data: Genre[]) => this.genresList.next(data)),
        switchMapTo(this.genresList)
      )
  }
}