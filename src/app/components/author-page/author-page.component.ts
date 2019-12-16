import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../interfaces/author.interface';

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

  private loading: boolean = true;

  author: Author;
  authorId: string;

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.authorId = id;
    });

    this.authorsService.loadAuthor(this.authorId).subscribe((author: Author) => {
      this.author = author;
      this.loading = false;
    });
  }

}
