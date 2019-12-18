import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../../services/book.service';
import { GenreService } from '../../services/genre.service';
import { Book } from '../../interfaces/book.interface';
import { Observable } from 'rxjs';

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

  book: Observable<Book>;

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.book = this.bookService.loadBook(id);
    });
  }

  onUpdateGenre(genre: string) {
    this.genreService.updateGenre(genre);
  }
}
