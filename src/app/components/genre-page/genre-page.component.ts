import { Component, OnInit } from '@angular/core';

import { BookService } from '../../services/book.service';
import { Book } from '../../services/book.interface';

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.scss']
})
export class GenrePageComponent implements OnInit {
  constructor(private bookService: BookService) { }

  private books: Book[];

  private displayedColumns: string[] = ['title', 'author'];

  ngOnInit() {
    this.bookService.books.subscribe(books => {
      this.books = books;
    });
  }
}
