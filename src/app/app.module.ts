import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayMoviesDirective } from './display-movies.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DisplayMoviesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
