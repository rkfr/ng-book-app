import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { switchMapTo, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Book } from '../interfaces/book.interface';
import { URL } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { };

  public books: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  loadBooks() {
    return this.http.get(`${URL}/books`)
      .pipe(
        tap((data: Book[]) => this.books.next(data)),
        switchMapTo(this.books)
      );
  }

  loadBook(bookId: string) {
    return this.http.get<Book>(`${URL}/books/${bookId}`);
  }
};
