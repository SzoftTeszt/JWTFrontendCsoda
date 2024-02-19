import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  oszlopok=[
    {key:"username", text:"User name", type:"text"},
    {key:"password", text:"Password", type:"password"},
  ]
  user:any={}
  constructor(private auth:AuthService){   
  }

  login(){
    this.auth.login(this.user)
  }
}
