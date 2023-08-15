import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelModule } from './marvel/marvel.module';
import environment from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MarvelModule
  ],
  providers: [
    {provide: 'publicKey', useValue: environment.publicKey },
    {provide: 'urlApi', useValue: environment.urlApi},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
