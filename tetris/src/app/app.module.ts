import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { FormsModule } from '@angular/forms';
import { TetrisCoreComponent, TetrisCoreModule } from 'ngx-tetris';
import { GameComponent } from './game/game.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TetrisCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
