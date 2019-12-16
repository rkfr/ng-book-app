import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
    public genre: BehaviorSubject<string> = new BehaviorSubject('');

    updateGenre(genre: string) {
        this.genre.next(genre);
    }
}