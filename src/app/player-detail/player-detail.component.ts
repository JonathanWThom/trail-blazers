import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2';
import { PlayerService } from '../player.service';
import { Http } from '@angular/http';
import { nbaKey } from '../api-keys';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [ PlayerService ]
})
export class PlayerDetailComponent implements OnInit {
  playerId: string;
  playerToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService, private http: Http) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.playerId = urlParameters['id'];
   });
   this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
   console.log(this.playerToDisplay.name);
   this.playerStats();
  }

  playerStats() {
    this.http.get("https://api.sportradar.us/nba-t3/players/56ff7cb8-4828-4aaa-8f95-0bf569a0786d/profile.json?api_key=" + nbaKey.apiKey).subscribe(result => console.log(result));

    //add fail condition
  }

}
