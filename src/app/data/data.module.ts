import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopCrimesService } from './top-crimes.service';
import { TopPlayersService } from './top-players.service';
import { TopTeamsService } from './top-teams.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TopCrimesService,
    TopPlayersService,
    TopTeamsService
  ],
  imports: [
    CommonModule
  ],
  providers: [
    HttpClientModule
  ]
})
export class DataModule { }
