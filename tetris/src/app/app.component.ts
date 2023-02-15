import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tetris';
  public playerLogged:boolean = false;

  public logInFunction() {
    this.playerLogged = !this.playerLogged;
  }
}
