import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookListComponent } from './components/book-list/book-list.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { AuthorPageComponent } from './components/author-page/author-page.component';
import { GenrePageComponent } from './components/genre-page/genre-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AuthorsListComponent,
    BookPageComponent,
    AuthorPageComponent,
    GenrePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
