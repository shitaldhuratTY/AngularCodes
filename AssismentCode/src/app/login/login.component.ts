import { Component, OnInit } from '@angular/core';
import { Temp } from '../temp';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }

  constructor() { }

  submitted = false;     
  onSubmit(){
    this.submitted = true;
  }

  
  model = new Temp('shital@123','shital');

 
  newDetails(){
    this.model = new Temp('','');
  }

  ngOnInit(){
    
  }

 
}
