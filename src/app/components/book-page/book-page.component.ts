import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SharedService } from '../../services/shared.service';
import { Book } from '../../services/book.interface';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private shared: SharedService
  ) { }

  private loading: boolean = true;

  book: Book;
  bookId: string = this.route.snapshot.params.id;

  ngOnInit() {
    this.shared.getBook(this.bookId).subscribe((book: Book) => {
      this.book = book;
      this.loading = false;
    });
  }

  onUpdateGenre(genre: string) {
    this.shared.setGenre(genre);
  }
}
