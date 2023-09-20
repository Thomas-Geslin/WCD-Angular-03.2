import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Movies List';

  showMovies: boolean = true;
  
  displayMovies() {
    this.showMovies = !this.showMovies;
  }

}
