import { Component, OnInit } from '@angular/core';

import { BookService } from '../../services/book.service';
import { GenreService } from '../../services/genre.service';
import { Book } from '../../interfaces/book.interface';
import { Genre } from '../../interfaces/genre.interface';

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.scss']
})
export class GenrePageComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private genreService: GenreService,
  ) { }

  books: Book[];
  booksByGenre: Book[];
  genre: string;
  genresList: Genre[];
  isLoading: boolean = true;

  displayedColumns: string[] = ['title', 'author'];

  ngOnInit() {
    this.genreService.genresList.subscribe(genres => {
      this.genresList = genres;
    });

    this.bookService.books.subscribe(books => {
      this.books = books;
      this.setFilterByGenre();

      this.isLoading = false;
    });

    this.genreService.genre.subscribe(genre => {
      this.genre = genre;
      this.setFilterByGenre();
    });
  }

  onSelectGenre(genre) {
    this.genreService.updateGenre(genre);
    this.setFilterByGenre();
  }

  setFilterByGenre() {
    this.booksByGenre = this.books.filter(({ genre }) => genre.includes(this.genre));
  }

}
