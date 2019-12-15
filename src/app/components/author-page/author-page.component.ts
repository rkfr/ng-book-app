import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SharedService } from '../../services/shared.service';
import { Author } from '../../services/Author.interface';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss']
})
export class AuthorPageComponent implements OnInit {
  constructor(
    private shared: SharedService,
    private route: ActivatedRoute
  ) { }

  private loading: boolean = true;

  author: Author;
  authorId: string = this.route.snapshot.params.id;

  ngOnInit() {
    this.shared.getAuthor(this.authorId).subscribe((author: Author) => {
      this.author = author;
      this.loading = false;
    });
  }

}
