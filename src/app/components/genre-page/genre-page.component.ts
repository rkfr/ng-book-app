import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../services/shared.service';
import { Book } from '../../services/Book.interface';

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.scss']
})
export class GenrePageComponent implements OnInit {
  constructor(private shared: SharedService) { }

  private isLoading: boolean = true;

  books: Book[];
  displayedColumns: string[] = ['title', 'author'];
  displayedGenres: string[];

  ngOnInit() {
    const genre = this.shared.getGenre();

    this.books = this.shared.books.filter((book: Book) => book.genre.includes(genre));
    
    this.displayedGenres = this.books.reduce((genres, book) => {
      const { genre } = book;
      genres = [...genre];
      return genres;
    }, [])

    this.isLoading = false;
  }
}
