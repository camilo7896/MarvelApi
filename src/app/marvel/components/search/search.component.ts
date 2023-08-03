import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'marvel-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() startSearch = new EventEmitter();
  inputValue = ''

  emitValue(form: NgForm) {
    this.startSearch.emit(this.inputValue);
  }
}
