import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Author } from '../interfaces/author.interface';
import { tap, switchMapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private baseUrl = 'http://localhost:3004';

  constructor(private http: HttpClient) { };

  public authors: BehaviorSubject<Author[]> = new BehaviorSubject([]);

  // loadAuthors() {
  //   this.http.get(`${this.baseUrl}/authors`).subscribe((data: Author[]) => {
  //     this.authors.next(data);
  //   });
  // }

  loadAuthors() {
    return this.http.get(`${this.baseUrl}/authors`)
      .pipe(
        tap((data: Author[]) => this.authors.next(data)),
        switchMapTo(this.authors)
      )
  }

  loadAuthor(authorId: string) {
    return this.http.get<Author>(`${this.baseUrl}/authors/${authorId}`);
  }
}
