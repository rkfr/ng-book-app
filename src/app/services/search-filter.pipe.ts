import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book.interface';

@Pipe({
    name: 'booksSearch',
})
export class SearchFilter implements PipeTransform {
    transform(books: Book[], search: string = ''): Book[] {
        if (!search.trim()) return books;

        return books.filter(book => {
            return book.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
    }
}