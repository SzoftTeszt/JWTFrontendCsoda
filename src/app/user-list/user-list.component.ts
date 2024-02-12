import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users:any
  constructor(private auth:AuthService){
    this.auth.getUsers().subscribe(
      (res)=> {        
        this.users=res

        for (let i = 0; i < this.users.length; i++) {
          console.log("Felhasználó",this.users[i])

          this.auth.getUserClaims(this.users[i].id).subscribe(
            (res)=> this.users[i].claims=res
          )
        }       
      }
    )
  }
  changeClaims(user:any,claims:any){
    let i = this.users.findIndex(
      (e:any)=>e==user
    )

    console.log("i",i)
    if (this.users[i].claims.includes(claims)) {
      this.users[i].claims=this.users[i].claims.filter(
        (e:any)=> e!=claims
      )
    }
    else {
      this.users[i].claims.push(claims)
    }

    this.auth.setUserClaims(this.users[i].id,this.users[i].claims).subscribe(
      {
        next:(res)=>console.log("Sikeres Claims"),
        error:(res)=>console.log("Sikertelen Claims"),
      }
    )
  }
}
