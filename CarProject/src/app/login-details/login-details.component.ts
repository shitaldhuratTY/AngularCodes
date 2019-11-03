import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent implements OnInit {

  constructor(private service : UserService) { }

  ngOnInit() {
  }
  selectedUser = {
    email : '',
    password : ''
  }
  deleteUser(user){
    let u = this.service.Users.indexOf(user.email);
    this.service.Users.splice(u,1);
  }
  getUser(user){
    this.selectedUser = user;
    console.log(this.selectedUser);
  }
  updateUser(form){
    let user = form.value;
    console.log(user);
    let index = this.service.Users.indexOf(user.email);
    this.service.Users.splice(index, 1 , form.value);
    console.log(this.service.Users);
  }

}
