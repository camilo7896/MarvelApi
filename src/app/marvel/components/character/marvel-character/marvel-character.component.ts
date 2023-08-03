import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-character-component',
  templateUrl: './marvel-character.component.html',
  styleUrls: ['./marvel-character.component.css']
})
export class MarvelCharacterComponent {
  @Input() characters: any[] | null = [];
  selectedCharacter: any;

modal: any;
closeModal() {
throw new Error('Method not implemented.');
}
showModal: any;

getCharactersWithPageLength($event: Event) {
throw new Error('Method not implemented.');
}

 

}