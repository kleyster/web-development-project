import { Component, OnInit } from '@angular/core';
import { LOG } from '../fake-db';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : string = "";
  password : string = "";
  logged : boolean = false;
  log_m : boolean [] = [];

  constructor() { }

  ngOnInit(): void {
    this.log_m = LOG;
  }
  
  log() {
    if (this.login === "admin" && this.password === "admin123") {
      this.logged = true;
      window.alert("You are logged in!");
    }
      for (var i = 0; i < 1; i++) {
        if (this.log_m[i] != this.logged) {
          this.log_m.push(this.logged);
        }
      }
      console.log(this.log_m[0]); 
  }
}


