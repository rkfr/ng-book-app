import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { BookService } from '../../services/book.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private searchService: SearchService
  ) { }

  isLoading: boolean = true;
  booksMap;

  displayedColumns: string[] = ['title', 'author'];

  ngOnInit() {
    this.bookService.books.subscribe(books => {
      this.booksMap = new MatTableDataSource(books);
      this.isLoading = false;
    });

    this.searchService.searchQuery.subscribe(query => {
      this.applyFilter(query);
    });
  }

  applyFilter(filterValue: string) {
    this.booksMap.filter = filterValue;
  }

}
