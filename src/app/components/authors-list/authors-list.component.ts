import { Component, OnInit } from '@angular/core';

import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../interfaces/author.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {

  constructor(private authorsService: AuthorsService) { }

  authors: BehaviorSubject<Author[]>;

  ngOnInit() {
    this.authors = this.authorsService.authors;
  }
}
