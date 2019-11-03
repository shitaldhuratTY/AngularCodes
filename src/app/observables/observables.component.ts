import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from "rxjs/operators";
import { UserService } from '../user.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
// mySubscription: Subscription;
  constructor( private userService: UserService) { }


  ngOnInit() {
  //   this.mySubscription= interval(1000).pipe(map(data=>{
  //     return data*10;

  //   })).subscribe(data=>{
  //     console.log(data);
  //   }, error=>{
  //     console.log(error);
  //   }, ()=>{
  //     console.log('subscription complete');
  //   });
  this.userService.printDetails()
  }
}
