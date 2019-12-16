import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../../services/book.service';
import { GenreService } from '../../services/genre.service';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private genreService: GenreService
  ) { }

  private loading: boolean = true;

  book: Book;
  bookId: string;

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.bookId = id;
    });

    this.bookService.loadBook(this.bookId).subscribe((book: Book) => {
      this.book = book;
      this.loading = false;
    });
  }

  onUpdateGenre(genre: string) {
    this.genreService.updateGenre(genre);
  }
}
