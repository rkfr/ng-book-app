import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

import { Author } from '../interfaces/author.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthorsService {
    private _authors = new BehaviorSubject<Author[]>([]);
    private baseUrl = 'http://localhost:3004';

    constructor(private http: HttpClient) { };

    get todos() {
        return this._authors.asObservable();
    }

    fetchAuthors() {
        this.http.get(`${this.baseUrl}/authors`).subscribe((data: Author[]) => {
            this._authors.next(data);
        }, err => console.log(`loading error: ${err}`));
    }
}