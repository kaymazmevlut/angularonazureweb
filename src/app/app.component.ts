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
    this.http.get<{greeting:string}>("http://localhost:8080/greeting").subscribe(x=>{
      console.log(x);
      this.title=x.greeting;
    })
  }
}
