import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  open;
  constructor() {

  }

  openModal() {
    this.open = true;
  }

  result(res) {
    this.open = false;
    console.log(res);
  }
}


