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
  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.standings = this.statsService.getStandings();
  }

}
