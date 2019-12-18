import { Component, OnInit } from '@angular/core';

import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService, ) { }

  books: BehaviorSubject<Book[]>;
  displayedColumns: string[] = ['title', 'author'];

  ngOnInit() {
    this.books = this.bookService.books;
  }
}
