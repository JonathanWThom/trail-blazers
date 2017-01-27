import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [ PlayerService ]
})
export class PlayerDetailComponent implements OnInit {
  playerId: string;
  playerToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.playerId = urlParameters['id'];
   });
   this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
   this.playerService.getStats(this.playerToDisplay);
  }

  // playerStats(player) {
  //   this.playerService.getStats(player);
  // }

}
