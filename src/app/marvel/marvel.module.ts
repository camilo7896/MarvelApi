import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MarvelCharacterComponent } from './components/character/marvel-character/marvel-character.component';
import { FormsModule } from '@angular/forms';
import { AsideComponent } from './components/aside/aside.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    MarvelCharacterComponent,
    AsideComponent,
    ModalComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    HomeComponent,
    SearchComponent,
    AsideComponent,
    ModalComponent
  ],
  providers: [
    MarvelCharacterComponent
  ]
})
export class MarvelModule { }
