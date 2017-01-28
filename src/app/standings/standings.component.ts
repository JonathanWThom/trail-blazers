import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
  providers: [StatsService]
})
export class StandingsComponent implements OnInit {
  result;
  conferences;
  teams;
  constructor(private statsService: StatsService) { }

  ngOnInit() {
    var that = this;
    this.statsService.getStandings().subscribe(x => {
      this.result = x;
      this.conferences = this.result.conferences;
    });
  }

}
