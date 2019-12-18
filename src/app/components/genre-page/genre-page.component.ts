import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
  ) { }

  books: Book[];
  booksByGenre: Book[];
  genre: string = '';
  genresList: Genre[];
  isLoading: boolean = false;

  displayedColumns: string[] = ['title', 'author'];

  ngOnInit() {
    this.isLoading = true;

    this.bookService.books.subscribe(books => {
      this.books = books;
      this.setFilterByGenre();
      this.isLoading = false;
    });

    this.route.params.subscribe(({ id }) => {
      this.genre = id;
      this.setFilterByGenre();
    });

    this.genreService.genresList.subscribe(genres => {
      this.genresList = genres;
      this.setFilterByGenre();
    });

  }

  onGenreSelected(genre) {
    this.genre = genre.toLowerCase();
    this.setFilterByGenre();
  }

  private setFilterByGenre() {
    try {
      this.booksByGenre = this.books.filter(({ genre: genres }) => (
        genres
          .map(genre => genre.toLowerCase())
          .includes(this.genre.toLowerCase())
      ));
    }
    catch(err) {
      console.log(err);
    }
  }

}
