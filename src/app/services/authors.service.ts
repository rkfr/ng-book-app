import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Author } from '../interfaces/author.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private baseUrl = 'http://localhost:3004';

  constructor(private http: HttpClient) { };

  public authors: BehaviorSubject<Author[]> = new BehaviorSubject([]);

  loadAuthors() {
    this.http.get(`${this.baseUrl}/authors`).subscribe((data: Author[]) => {
      this.authors.next(data);
    });
  }

  loadAuthor(authorId) {
    return this.http.get<Author>(`${this.baseUrl}/authors/${authorId}`);
  }
}
