import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  constructor(private shared: SharedService) { }

  private isLoading: boolean = true;

  displayedColumns: string[] = ['title', 'author', 'genre'];

  ngOnInit() {
    this.shared.fetchBookList().subscribe(() => {
      this.isLoading = false;
    });
  }

}
