import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { tap, switchMapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Genre } from '../interfaces/genre.interface';
import { URL } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  constructor(private http: HttpClient) { }

  public genresList: BehaviorSubject<Genre[]> = new BehaviorSubject([]);

  loadGenresList() {
    return this.http.get(`${URL}/genres`)
      .pipe(
        tap((data: Genre[]) => this.genresList.next(data)),
        switchMapTo(this.genresList)
      )
  }
}