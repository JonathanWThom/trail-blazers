import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
  export class StatsService {
    private statsUrl = 'https://api.sportradar.us/nba-t3/seasontd/2016/REG/standings.json?api_key=heqgxh8yv5q2suv2yjrrynr3';  // URL to web API
    constructor (private http: Http) {}

    getStandings() {
      return this.http.get(this.statsUrl)
      .map(res => {
      return <any[]> res.json(); //return mapped object from here
    });
  }
}
