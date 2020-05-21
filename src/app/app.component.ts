import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  date = new Date();


  constructor() {
    console.log("Constructor called");

  }

  doSomething(val: string): void {
    val = "Awesome";
  }

}
