import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 sAdmin:any=false 
 user:any
 constructor(private auth:AuthService){
  this.auth.getSadmin().subscribe(
    (res)=> this.sAdmin=res
  )
 
  this.auth.getUser().subscribe(
    (res)=> this.user=res
  )
 }

 logout(){
  this.auth.logout()
 }
}
