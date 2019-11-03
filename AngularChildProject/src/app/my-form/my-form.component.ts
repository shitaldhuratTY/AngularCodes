import { Component, OnInit } from '@angular/core';
import { FormMy } from '../form-my';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  powers = ['Beautiful', 'Brave', 'Intelligent','Cuite'];
 
 model = new FormMy(18,'Shital',this.powers[0],1996);
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  addName(){
    this.model = new FormMy(40, '','',1992);
  }

  constructor() { }

  ngOnInit() {
  }

}
