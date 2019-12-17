import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { BookService } from './services/book.service';
import { AuthorsService } from './services/authors.service';
import { GenreService } from './services/genre.service';

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

  searchOptions = [];

  searchControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit(): void {
    this.bookService.loadBooks();
    this.authorsService.loadAuthors();
    this.genreService.loadGenresList();

    this.subscribeOnBooks();
    this.subscribeOnAuthors();
    this.subscribeOnGenres();

    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterSearchInput(value))
    );

  }

  displayWith(subject) {
    return subject ? subject.name : undefined;
  }

  subscribeOnBooks() {
    this.bookService.books.subscribe(books => {
      this.setOptions(books, 'title', 'Books');
    });
  }

  subscribeOnAuthors() {
    this.authorsService.authors.subscribe(authors => {
      this.setOptions(authors, 'name', 'Authors');
    })
  }

  subscribeOnGenres() {
    this.genreService.genresList.subscribe(genres => {
      this.searchOptions = [
        ...this.searchOptions,
        ...genres.map(genre => ({
          title: genre.name,
          pagePath: '/genre',
          pageName: 'Genre'
        }))
      ]
    })
  }

  onUpdateGenre(option: string) {
    this.genreService.updateGenre(option);
  }

  private setOptions(dataMap, type: string, categoryName: string) {
    this.searchOptions = [...this.searchOptions, ...dataMap.map(data => ({
      title: data[type],
      pagePath: `/${categoryName.toLowerCase()}/${data.id}`,
      pageName: categoryName
    }))];
  }

  private filterSearchInput(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.searchOptions.filter(option => {
      const optionText = option.title.toLowerCase();
      return optionText.includes(filterValue);
    });
  }
}
