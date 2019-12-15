import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {
  constructor(private shared: SharedService) { }

  private isLoading: boolean = true;

  ngOnInit() {
    this.shared.fetchAuthorsList().subscribe(() => {
      this.isLoading = false;
    });
  }

}
