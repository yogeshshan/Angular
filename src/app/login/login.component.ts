import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = 'Yogesh';
  password : string = '1234';

  inValidLogin = false;


  constructor(private router : Router) { 
    
  }

  ngOnInit(){

  }

  doLogin() {
    if(this.username === 'Yogesh' && this.password === '1234')
    {
      this.router.navigate(['welcome',this.username]);
      this.inValidLogin= false;
    }

    else {
      this.inValidLogin= true;
    }
  }

}
