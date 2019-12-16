import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './components/book-list/book-list.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { AuthorPageComponent } from './components/author-page/author-page.component';
import { GenrePageComponent } from './components/genre-page/genre-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookPageComponent },
  { path: 'authors', component: AuthorsListComponent },
  { path: 'authors/:id', component: AuthorPageComponent },
  { path: 'genre', component: GenrePageComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: './books', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
