import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrls: ['./api1.component.css']
})
export class Api1Component implements OnInit {

 git: any[] =[];
    constructor(private http:HttpClient){
        http.get<any>('https://api.github.com/users')
        .subscribe(resData=>{
            this.git=resData.articles;
            // console.log(this.git);
        })
    }
  ngOnInit() {
  }

}
