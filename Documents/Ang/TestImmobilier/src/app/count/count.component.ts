import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
ath(){
  this.http.post('http://localhost:9191/connexion/auth',{
    "username":"mouha",
    "password" :"12345bb",
    "email" :"mouad"

}).subscribe(
    (arg:any)=>{
      console.log(arg)
      },
    (erreur)=>{console.log("hhh")}
    );
}

}
