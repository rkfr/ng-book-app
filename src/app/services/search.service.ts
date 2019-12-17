import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    public searchQuery: BehaviorSubject<string> = new BehaviorSubject('');

    ubdateSearchQuery(query: string) {
        return this.searchQuery.next(query);
    }
}