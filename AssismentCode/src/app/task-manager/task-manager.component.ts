import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  constructor() { }



  submitted = false;     
  onSubmit(){
    this.submitted = true;
  }

  ngOnInit() {
  }

}
