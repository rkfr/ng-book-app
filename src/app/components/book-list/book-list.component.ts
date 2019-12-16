import { Component, OnInit } from '@angular/core';

import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) { }

  private isLoading: boolean = true;
  private booksMap: Book[];

  private displayedColumns: string[] = ['title', 'author'];

  ngOnInit() {
    this.bookService.loadBooks();

    this.bookService.books.subscribe(books => {
      this.booksMap = books;
      this.isLoading = false;
    })
  }

}
