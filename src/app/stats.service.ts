import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Http } from '@angular/http';
import { nbaKey } from './api-keys';

@Injectable()
export class StatsService {

  constructor(private http: Http) { }
  getStandings() {
    this.http.get("https://api.sportradar.us/nba-t3/seasontd/2016/REG/standings.json?api_key=" + nbaKey.apiKey).subscribe(result => console.log(result));
  }

}
