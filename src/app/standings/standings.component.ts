import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
  providers: [StatsService]
})
export class StandingsComponent implements OnInit {
  standings;
  result;
  conferences = [];
  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.statsService.getStandings().subscribe(standings => {
      this.standings = standings;
      this.result = this.standings._body;
      console.log(JSON.parse(this.result));
      this.result = JSON.parse(this.result);
      this.conferences.push(this.result.conferences[0]);
      this.conferences.push(this.result.conferences[1]);
    });

  }

}
