import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap, switchMapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Author } from '../interfaces/author.interface';
import { URL } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  public authors: BehaviorSubject<Author[]> = new BehaviorSubject([]);

  loadAuthors() {
    return this.http.get(`${URL}/authors`)
      .pipe(
        tap((data: Author[]) => this.authors.next(data)),
        switchMapTo(this.authors)
      );
  }

  loadAuthor(authorId: string) {
    return this.http.get<Author>(`${URL}/authors/${authorId}`);
  }
}
