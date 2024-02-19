import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="https://localhost:5001/api/"
  compUrl="Companies/"
  authUrl="Authentication/"
  userUrl="userlist/"
  private token:any
  user:any={}
  private userSub=new BehaviorSubject(null);
  private SadminSub=new Subject();

  constructor(private http:HttpClient) { }
  
  getSadmin(){
    return this.SadminSub
  }

  getUser(){
    return this.userSub
  }


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
    console.log("user", user)
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
        console.log("Login OK:", res.user)
        this.token=res.token
        this.user=res.user
        this.user.token=this.token
        console.log("User: ",this.user)
        this.getUserClaims(this.user.id).subscribe(
          (claims)=>{ 
            this.user.claims=claims
            this.userSub.next(this.user)
            // console.log("sadmin", this.user.claims.includes['SAdmin'])
            console.log("sadmin", this.user.claims.includes('SAdmin'))
            this.SadminSub.next(this.user.claims.includes('SAdmin'))
          }
        )

      },
      error:(res)=>console.log("Login Error :(", res)
      }
    )

  }
  logout(){
    this.user={}
    this.userSub.next(null)
    this.SadminSub.next(false)
  }

  updateUser(user:any){

    const headers:any={
      headers: 
      new HttpHeaders({'Authorization':'Bearer '+this.token}),
      'responseType':'text'
    }

    return this.http.post(this.url+'update',user, headers)

  }
}
