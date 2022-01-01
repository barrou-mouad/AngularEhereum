import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-get-count',
  templateUrl: './get-count.component.html',
  styleUrls: ['./get-count.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class GetCountComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  testAuth(){
    return this.http.get('http://localhost:8084/get').subscribe(
      (arg:any)=>{
        console.log(arg)
        },
      (erreur)=>{console.log("hhh")}
      );
   }
}
