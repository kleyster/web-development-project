import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : string = "";
  password : string = "";
  logged : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  log() {
    if (this.login === "admin" && this.password === "admin123")
      this.logged = true;
      console.log(this.logged); 
  }
}


