import { Component, OnInit } from '@angular/core';

import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.loadBooks();
  }
}
