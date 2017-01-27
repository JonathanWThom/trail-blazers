import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { nbaKey } from './api-keys';

@Injectable()
  export class StatsService {
    private statsUrl = 'https://api.sportradar.us/nba-t3/seasontd/2016/REG/standings.json?api_key=' + nbaKey.apiKey;
    constructor (private http: Http) {}

    getStandings() {
      return this.http.get(this.statsUrl)
      .map(res => {
      return <any[]> res.json();
    });
  }
}
