import { Component, OnInit } from '@angular/core';

import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../interfaces/author.interface';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {

  constructor(private authorsService: AuthorsService) { }

  private isLoading = true;
  private authors: Author[];

  ngOnInit() {
    this.authorsService.loadAuthors();

    this.authorsService.authors.subscribe(authors => {
      this.authors = authors;
      this.isLoading = false;
    })
  }
}
