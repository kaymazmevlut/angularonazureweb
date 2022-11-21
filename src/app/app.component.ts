import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = '';

  constructor(public http:HttpClient){

  }

  ngOnInit(): void {
    this.http.get<{greeting:string}>("/api/greeting").subscribe(x=>{
      console.log(x);
      this.title=x.greeting;
    })
    this.getUserInfo();
  }

  getUserInfo() {
    const response = this.http.get<userDetails>('/.auth/me');
    console.log("Response:"+response);
  }
}

interface userDetails {
  "identityProvider": string,
  "userId": string,
  "userDetails": string,
  "userRoles": userRoles,
  "claims": claims[]
}
enum userRoles {
  anonymous="ANONYMOUS",
  authenticated="AUTHENTICATED"
}

interface claims{
  "typ": string,
  "val": string
}