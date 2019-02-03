import { Component } from '@angular/core';
import { UserForm } from './UserForm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    userForm:UserForm

    constructor(){
      this.userForm = new UserForm();
    }
}
