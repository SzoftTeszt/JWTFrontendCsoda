import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="https://localhost:5001/api/"
  compUrl="Companies/"
  authUrl="Authentication/"
  userUrl="userlist/"
  token:any
  constructor(private http:HttpClient) { }
  
  getCompanies(){
    let headers= new HttpHeaders().set('Authorization','Bearer '+this.token)
    console.log("Headers:",headers)
    return this.http.get(this.url+this.compUrl, {headers:headers})
  }

  getUsers(){
    let headers= new HttpHeaders().set('Authorization','Bearer '+this.token)
    return this.http.get(this.url+this.userUrl, {headers:headers})
  }

  getUserClaims(id:any){
    let headers= new HttpHeaders().set('Authorization','Bearer '+this.token)
    return this.http.get(this.url+"userClaims/"+id, {headers:headers})
  }
  setUserClaims(id:any, claims:any){
    let headers= new HttpHeaders().set('Authorization','Bearer '+this.token)
    let body={
      id:id,
      roles:claims
    }
    console.log(body)
    return this.http.post(this.url+"userClaims/", body, {headers:headers})
  }

  addCompany(company:any){
    let headers= new HttpHeaders().set('Authorization','Bearer '+this.token)
    this.http.post(this.url+this.compUrl,company, {headers:headers}).subscribe(
      ()=>console.log("Cége felvéve")
    )
  }
  register(user:any){
    this.http.post(this.url+this.authUrl+"register",user,{responseType:'text'}).subscribe(
      {
        next:(res)=>console.log("Reg ok"),
        error:(res)=>console.log("Hibás Regisztráció :(", res),
      }
    )
  }

  login(user:any){
    this.http.post(this.url+this.authUrl+"login",user)
    .subscribe({
      next:(res:any)=>
      {
        console.log("Login OK:", res.token)
        this.token=res.token
        
      },
      error:(res)=>console.log("Login Error :(", res)
      }
    )

  }
}
