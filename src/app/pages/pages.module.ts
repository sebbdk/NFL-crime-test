import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { TopCrimesPageComponent } from './top-crimes-page/top-crimes-page.component';
import { TopPlayersForCrimePageComponent } from './top-players-for-crime-page/top-players-for-crime-page.component';
import { TopTeamsForCrimePageComponent } from './top-teams-for-crime-page/top-teams-for-crime-page.component';
import { LibModule } from '../lib/lib.module';

@NgModule({
  declarations: [
    HomeComponent,
    TopCrimesPageComponent,
    TopPlayersForCrimePageComponent,
    TopTeamsForCrimePageComponent
  ],
  imports: [
    CommonModule,
    LibModule
  ]
})
export class PagesModule { }
