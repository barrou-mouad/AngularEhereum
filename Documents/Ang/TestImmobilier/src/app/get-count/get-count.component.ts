import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
const Web3 = require('web3');
const web3 =new Web3()
declare let require: any;
declare let window: any;
@Component({
  selector: 'app-get-count',
  templateUrl: './get-count.component.html',
  styleUrls: ['./get-count.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class GetCountComponent implements OnInit {
  data={id:"",cout:""}
  contracts:any=[];
  accounts:any=[];
  constructor(private http:HttpClient,private auth1:AuthService) { }

  ngOnInit(): void {
    this.getall()

  }
  async auth(){
    if (window.ethereum === undefined) {
      alert('Non-Ethereum browser detected. Install MetaMask');
    } else {
      if (typeof window.web3 !== 'undefined') {
        if (window.ethereum) {
          try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

          } catch (error:any) {
            if (error.code === 4001) {
              // User rejected request
            }


          }
        }

    }
   }
  }

isloged(){
  console.log("hello is loged")
   window.ethereum.getAccounts(function(err:any, accounts:any){
    if (err != null) console.error("An error occurred: "+err);
    else if (accounts.length == 0) console.log("User is not logged in to MetaMask");
    else console.log("User is logged in to MetaMask");
});
}

  getall(){

    this.http.get('http://localhost:8084/getmy').subscribe(
      (arg:any)=>{
       this.contracts=arg;

        },
      (erreur)=>{console.log("hhh")}
      );
  }
  testAuth(){
      this.http.get('http://localhost:8084/get').subscribe(
      (arg:any)=>{
        console.log(arg)
        },
      (erreur)=>{console.log("hhh")}
      );
   }
   send(data:NgForm){

        console.log(data.value)
    this.http.post('http://localhost:8084/add',data.value).subscribe(
      (arg:any)=>{
        console.log(arg)
        this.getall()
        },
      (erreur)=>{console.log("hhh")}
      );
    }


}
