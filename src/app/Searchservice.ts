import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class SerachService{
    private searchsubject = new BehaviorSubject<string>('');
    search$ = this.searchsubject.asObservable();

    upadateSearch(term: string): void{
        this.searchsubject.next(term);
    }
}