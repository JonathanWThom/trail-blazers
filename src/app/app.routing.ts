import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { AdminComponent } from './admin/admin.component';
import { StandingsComponent } from './standings/standings.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'players/:id',
    component: PlayerDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'standings',
    component: StandingsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
