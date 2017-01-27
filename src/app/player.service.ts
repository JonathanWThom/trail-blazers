import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Player } from './player.model';
import { Http } from '@angular/http';
import { nbaKey } from './api-keys';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire, private http: Http) {
    this.players = angularFire.database.list('players');
  }

  getPlayers() {
    return this.players
  }

  getPlayerById(playerId: string){
   return this.angularFire.database.object('players/' + playerId);
  }

  updatePlayer(player){
    var playerFB = this.getPlayerById(player.$key);
    playerFB.update({
      name: player.name,
      artist: player.position,
      number: parseInt(player.number),
      height: parseInt(player.height),
      experience: parseInt(player.experience),
      apiID: player.apiID
    });
  }

  deletePlayer(player) {
    var playerFB = this.getPlayerById(player.$key);
    playerFB.remove();
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  getStats(player) {
    this.getPlayerById(player.$key).subscribe(playerFB => {
      console.log(playerFB.name);
    });

    // console.log(playerFB)
    // playerFB.subscribe(x => {
    //   console.log(playerFB.name)});
    // console.log(playerFB.apiId);
    // this.http.get("https://api.sportradar.us/nba-t3/players/" + playerFB.apiId + "/profile.json?api_key=" + nbaKey.apiKey).subscribe(result => console.log(result));
    // //add fail condition
  }


}
