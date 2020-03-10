import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { BookService } from './services/book.service';
import { AuthorsService } from './services/authors.service';
import { GenreService } from './services/genre.service';
import { Book } from './interfaces/book.interface';
import { Author } from './interfaces/author.interface';
import { Genre } from './interfaces/genre.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authorsService: AuthorsService,
    private bookService: BookService,
    private genreService: GenreService
  ) { }


  formControl = new FormControl();

  booksOptions: Observable<Book[]>;
  authorsOptions: Observable<Author[]>;
  genresOptions: Observable<Genre[]>;

  ngOnInit() {
    this.bookService.loadBooks().subscribe(books => {
      this.booksOptions = this.formControl.valueChanges.pipe(
        startWith(''),
        map(value => books.filter(book => book.title.toLowerCase().includes(value)))
      );
    });

    this.authorsService.loadAuthors().subscribe(authors => {
      this.authorsOptions = this.formControl.valueChanges.pipe(
        startWith(''),
        map(value => authors.filter(book => book.name.toLowerCase().includes(value)))
      );
    });

    this.genreService.loadGenresList().subscribe(genres => {
      this.genresOptions = this.formControl.valueChanges.pipe(
        startWith(''),
        map(value => genres.filter(genre => genre.name.toLowerCase().includes(value)))
      );
    });
  }
}
