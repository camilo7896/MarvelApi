import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MarvelCharacterComponent } from './components/character/marvel-character/marvel-character.component';
import { FormsModule } from '@angular/forms';
import { AsideComponent } from './components/aside/aside.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    MarvelCharacterComponent,
    AsideComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    HomeComponent,
    SearchComponent,
    AsideComponent
  ],
  providers: [
    MarvelCharacterComponent
  ]
})
export class MarvelModule { }
