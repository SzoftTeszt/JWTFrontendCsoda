import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  oszlopok=[
    {key:"username", text:"User name", type:"text"},
    {key:"firstname", text:"First name", type:"text"},
    {key:"lastname", text:"Last name", type:"text"},
    {key:"address", text:"Address", type:"text"},
    {key:"email", text:"Email", type:"email"},
    {key:"password", text:"Password", type:"password"},
  ]
  newUser:any={}
  constructor(private auth:AuthService){   
  }

  registration(){
    // let body={
    //   username:"Admin",
    //   firstname:"Admin",
    //   lastName:"Admin",
    //   email:"admin@ceg.hu",
    //   password:"AlmafA12;"
    // }
    this.auth.register(this.newUser)

  }
}
