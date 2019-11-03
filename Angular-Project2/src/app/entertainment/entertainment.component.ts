import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  entertainmentNews:any[]=[];
  indianNews: any[]=[];

  constructor(private http:HttpClient) {

    this.http.get<any>(`https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=95558809e8ea48798907bdacdaff0006`)
        .subscribe(resData =>{
          this.entertainmentNews = resData.articles;
          console.log(this.entertainmentNews);
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
