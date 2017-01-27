import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css'],
  providers: [ PlayerService ]
})
export class NewPlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  newPlayer(name: string, position: string, number: string, height: string, experience: string, image: string) {
    var newPlayer: Player = new Player(name, position, parseInt(number), parseInt(height), parseInt(experience), image);
    this.playerService.addPlayer(newPlayer);
  }

}
