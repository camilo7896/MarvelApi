import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../../services/marvel-service.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'marvel-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
[x: string]: any;
  limit = 10;
  search = '';
  characters$: Observable<any[]> = of([]);

  constructor(private marvelApiService: MarvelApiService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  searchCharactersByTerm(term: string) {
    this.search = term;
    this.getCharacters();
  }

  getCharactersWithPageLength(event: any) {
    this.limit = event.target.value;
    this.getCharacters();
  }

  getCharacters(): void {
    this.characters$ = this.marvelApiService.search({ limit: this.limit, search: this.search });
  }

}
