import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private firbaseService: FirebaseService, 
    private router: Router ) { }
    postUser(form : NgForm){
      if(form.value.id){
        this.firbaseService.updateData(form.value).subscribe((resData) =>{
          console.log(resData);
          this.firbaseService.getData();
          form.reset();
          this.router.navigateByUrl('/users');
        }, err =>{
          console.log(err);
        })
      }else{
        this.firbaseService.postData(form.value).subscribe((data) =>{
          console.log(data);
          this.firbaseService.getData();
          form.reset();
          this.router.navigateByUrl('/users');
        }, err =>{
          console.log(err);
        })
      }
    }

  ngOnInit() {
  }

}
