import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { FormsModule } from '@angular/forms';
import { TetrisCoreComponent, TetrisCoreModule } from 'ngx-tetris';
import { GameComponent } from './game/game.component';
import { FilterPipe } from './filter.pipe';
import { RouterModule } from '@angular/router';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TetrisCoreModule,
    RouterModule.forRoot([
      //przyjmuje pary ściezka komponent
      {path:'start', component: StartComponent},
      {path:'game', component: GameComponent},
      {path:'**', redirectTo: '/start'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
