import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-character-component',
  templateUrl: './marvel-character.component.html',
  styleUrls: ['./marvel-character.component.css']
})
export class MarvelCharacterComponent {

getCharactersWithPageLength($event: Event) {
throw new Error('Method not implemented.');
}

  @Input() characters: any[] | null = [];
  
}