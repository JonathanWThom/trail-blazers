import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Http } from '@angular/http';
import { nbaKey } from './api-keys';

@Injectable()
export class StatsService {
  standings: any = {};
  constructor(private http: Http) { }
  getStandings() {
    return this.http.get("https://api.sportradar.us/nba-t3/seasontd/2016/REG/standings.json?api_key=" + nbaKey.apiKey);
  }

}
