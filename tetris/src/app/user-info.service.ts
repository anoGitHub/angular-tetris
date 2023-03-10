import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  private _credentialsProvided: boolean = false;

  private _nameSource = new BehaviorSubject<string>('');
  name = this._nameSource.asObservable();
  //private _email = new BehaviorSubject('');

  constructor() {}

  showUserData(name: string) {
    this._nameSource.next(name);
  }

  public credentialsPassed() {
    this._credentialsProvided = true;
  }

  public isUserDataPassed() {
    return this._credentialsProvided === true;
  }
}
