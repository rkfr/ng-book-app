import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Book } from '../interfaces/book.interface';
import { switchMapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:3004';

  constructor(private http: HttpClient) { };

  public books: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  loadBooks() {
    return this.http.get(`${this.baseUrl}/books`)
      .pipe(
        tap((data: Book[]) => this.books.next(data)),
        switchMapTo(this.books)
      );
  }

  loadBook(bookId: string) {
    return this.http.get<Book>(`${this.baseUrl}/books/${bookId}`);
  }
};
