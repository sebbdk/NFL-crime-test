import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopCrimesPageComponent } from './pages/top-crimes-page/top-crimes-page.component';
import { TopPlayersForCrimePageComponent } from './pages/top-players-for-crime-page/top-players-for-crime-page.component';
import { TopTeamsForCrimePageComponent } from './pages/top-teams-for-crime-page/top-teams-for-crime-page.component';

const routes: Routes = [
  { path: '', component: TopCrimesPageComponent },
  { path: 'player/:crimeid', component: TopPlayersForCrimePageComponent },
  { path: 'team/:crimeid', component: TopTeamsForCrimePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
