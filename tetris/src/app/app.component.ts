import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  public playerLogged: boolean = false;
  public userName: string = '';
  public userEmail: string = '';

  public userNameFunction($event: string) { this.userName = $event }
  public userEmailFunction($event: string) { this.userEmail = $event }
  public logSwitchFunction() {this.playerLogged = !this.playerLogged}

}