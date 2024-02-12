import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mindenfele',
  templateUrl: './mindenfele.component.html',
  styleUrls: ['./mindenfele.component.css']
})
export class MindenfeleComponent {
  companies:any
  newCompany:any
  constructor(private auth:AuthService){
   
  }

  getCompanies(){
    this.auth.getCompanies().subscribe(
      (res)=>this.companies=res
    )
  }

  addCompany(){
    let body = {name:this.newCompany}
    this.auth.addCompany(body)
  }
  registration(){
    let body={
      username:"Admin",
      firstname:"Admin",
      lastName:"Admin",
      email:"admin@ceg.hu",
      password:"AlmafA12;"
    }
    this.auth.register(body)

  }
  login(){
    let body={
      username:"Admin",    
      password:"AlmafA12;"
    }
    this.auth.login(body)
  }
}
