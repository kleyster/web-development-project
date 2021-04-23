import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  logged = false;
  username = '';
  password = '';

  login() {
    console.log(this.username, this.password);
  }
}
