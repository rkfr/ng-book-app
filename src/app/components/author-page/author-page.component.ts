import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../interfaces/author.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss']
})
export class AuthorPageComponent implements OnInit {
  constructor(
    private authorsService: AuthorsService,
    private route: ActivatedRoute
  ) { }

  author: Observable<Author>;

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.author = this.authorsService.loadAuthor(id);
    });
  }

}
