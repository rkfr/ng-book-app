import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { };

  public books: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  loadBooks() {
    this.http.get(`http://localhost:3004/books`).subscribe((data: Book[]) => {
      this.books.next(data);
    });
  }
};
