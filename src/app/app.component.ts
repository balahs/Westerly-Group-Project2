import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  name: string;
  email: string;
  address;
  hobbies: string[];
  
  constructor() {
    this.title = 'Team Angular';
    this.email = 'cduynguyen95@gmail.com';
    this.address = {
      street: '123 Maple Street',
      city: 'Charlotte',
      state: 'North Carolina'
    }
    this.hobbies = ['Dance', 'Eat', 'Sleep'];
  }  
}

