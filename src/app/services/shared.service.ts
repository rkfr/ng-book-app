import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Book } from './Book.interface';
import { Author } from './Author.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private url = 'http://localhost:3004';

  constructor(private http: HttpClient) { }

  public books: Book[] = [];
  public authors: Author[] = [];
  public filteredBooks: Book[] = [];
  public search: string = '';

  private genre: string = '';

  setGenre(genre: string) {
    this.genre = genre;
  }

  getGenre() {
    return this.genre;
  }

  fetchBookList() {
    return this.http.get<Book[]>(`${this.url}/books`)
      .pipe(tap(books => {
        this.books = books;
        this.filteredBooks = books;
      }));
  }

  fetchAuthorsList() {
    return this.http.get<Author[]>(`${this.url}/authors`)
      .pipe(tap(authors => this.authors = authors));
  }

  getAuthor(authorId: string) {
    return this.http.get<Author>(`${this.url}/authors/${authorId}`);
  }

  getBook(bookId: string) {
    return this.http.get<Book>(`${this.url}/books/${bookId}`);
  }
}
