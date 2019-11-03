import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  condition = false;

  users = [
    {
      id : 53556,
      name : 'Shital',
      city : 'Nagpur'
    },
    {
      id : 12354,
      name : 'Deeksha',
      city : 'Udupi'
    },
    {
      id : 22354,
      name : 'Farhad',
      city : 'Bangalore'
    },
    {
      id : 66325,
      name : 'Ayush',
      city : 'Jaypur'
    },
    {
      id : 78531,
      name : 'Saurabh',
      city : 'Raypur'
    }
];

  constructor() {}

    removeUser(user){
        let index = this.users.indexOf(user);
        this.users.splice(index, 1);
        this.condition = true;
 
   }

  ngOnInit() {
  }

}
