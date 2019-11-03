import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  
  nNews: any[] =[];
  constructor(private http:HttpClient){
      http.get<any>('https://newsapi.org/v2/top-headlines?country=us&apiKey=95558809e8ea48798907bdacdaff0006')
      .subscribe(resData=>{
          this.nNews=resData.articles;
          console.log(this.nNews);
      })
  }

  ngOnInit() {
  }

}
