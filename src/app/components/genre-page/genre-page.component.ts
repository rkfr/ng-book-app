import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { BookService } from '../../services/book.service';
import { GenreService } from '../../services/genre.service';
import { Book } from '../../interfaces/book.interface';
import { Genre } from '../../interfaces/genre.interface';
import { combineLatest } from 'rxjs';

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



  books = new MatTableDataSource<Book>();
  genresList: Genre[];
  genre: string;

  displayedColumns: string[] = ['title', 'author'];

  ngOnInit() {

        combineLatest(
          this.bookService.books,
          this.genreService.genresList,
          this.route.params
          )
          .subscribe(([books, genresList, genre]) => {

            this.genresList = genresList;
            this.genre = genre.id;

            this.books.data = books.filter(({ genre: genres }) => (
              genres
                .map(genreName => genreName.toLowerCase())
                .includes(genre.id)
            ));
          });
  }

}
