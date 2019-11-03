import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  businessNews:any[]=[];
  indianNews: any[]=[];
  
  constructor(private http:HttpClient) {

      this.http.get<any>(`https://newsapi.org/v2/top-headlines?category=business&apiKey=95558809e8ea48798907bdacdaff0006`)
          .subscribe(resData =>{
            this.businessNews = resData.articles;
            console.log(this.businessNews);
          })

          this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=in&apiKey=95558809e8ea48798907bdacdaff0006`)
          .subscribe(resData =>{
            this.indianNews = resData.articles;
            console.log(this.indianNews);
          })
   }

  ngOnInit() {
  }

}
