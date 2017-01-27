import { Component, OnInit, Input } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [ PlayerService ]
})
export class EditPlayerComponent implements OnInit {
  @Input() player: FirebaseObjectObservable<any>;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  updatePlayer(player) {
    this.playerService.updatePlayer(player);
  }

  deletePlayer(player){
    if(confirm("Are you sure you want to remove this player from the team?")){
      this.playerService.deletePlayer(player);
    }
  }

}
