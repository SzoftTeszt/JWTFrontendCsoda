import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  oszlopok=[
    {key:"userName", text:"User name", type:"text"},
    {key:"firstName", text:"First name", type:"text"},
    {key:"lastName", text:"Last name", type:"text"},
    {key:"address", text:"Address", type:"text"},
    {key:"email", text:"Email", type:"email"},
  ]
  updateUser:any={}
  constructor(private auth:AuthService, private router: Router){
    this.auth.getUser().subscribe(
      (user:any)=> {
        this.updateUser.id=user.id;
        this.updateUser.userName=user.userName;
        this.updateUser.firstName=user.firstName;
        this.updateUser.lastName=user.lastName;
        this.updateUser.address=user.address;
        this.updateUser.email=user.email;
      }
    )   
  }

  update(){
    this.auth.updateUser(this.updateUser).subscribe(
      {
        next:(res)=>{
          console.log("Sikeres Update")
          this.auth.logout()
          this.router.navigate(['/signin'])
        },
        error:(err)=>console.log(err)
      }
    )
    // this.auth.register(this.newUser)
  }
}
