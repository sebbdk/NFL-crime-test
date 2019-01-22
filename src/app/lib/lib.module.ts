import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopCrimesComponent } from './top-crimes/top-crimes.component';
import { TopPlayersForCrimeComponent } from './top-players-for-crime/top-players-for-crime.component';
import { TopTeamsForCrimeComponent } from './top-teams-for-crime/top-teams-for-crime.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { StrPosPipe } from './str-pos.pipe';

@NgModule({
  declarations: [
    TopCrimesComponent,
    TopPlayersForCrimeComponent,
    TopTeamsForCrimeComponent,
    NavComponent,
    StrPosPipe
  ],
  exports: [
    TopCrimesComponent,
    TopPlayersForCrimeComponent,
    TopTeamsForCrimeComponent,
    NavComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class LibModule { }
