import { Component, OnInit,Injectable } from '@angular/core';
import { CategoryService } from '../categories.service';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {
  login : string = "";
  password : string = "";
  logged = this.checkLog();

  constructor(private categoryService:CategoryService,
    // private head : HeaderComponent
    ) { }

  ngOnInit(): void {
    
  }
  checkLog(){
    if (localStorage.getItem('token')){
      return true;
    }
    return false;
  }
  log(){
    this.categoryService.loginToken(this.login,this.password).subscribe((data)=>{
      console.log(data.token)
      localStorage.setItem('token',data.token);
      this.logged=true;
      this.login='';
      this.password='';
      // this.head.loggs=true;

    })
  }

  getLog(){
    return this.logged;
  }
  logout(){
    this.logged=false;
    localStorage.removeItem('token');
  }
}


