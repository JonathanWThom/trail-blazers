import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayerService]
})
export class PlayerListComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  
  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  goToPlayerPage(player) {
    this.router.navigate(['players', player.$key]);
  }

}
