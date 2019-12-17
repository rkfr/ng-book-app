import { Component, OnInit } from '@angular/core';

import { BookService } from './services/book.service';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.bookService.loadBooks();
  }

  onUpdateQuery(query: string) {
    this.searchService.ubdateSearchQuery(
      query.trim().toLowerCase()
    );
  }
}
