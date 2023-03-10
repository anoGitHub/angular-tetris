import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  text: string = '';

  public constructor(
    private _router: Router,
    private _userCredentialsService: UserInfoService
  ) {}

  public sendUserData(form: FormGroup) {
    this._userCredentialsService.credentialsPassed();
    this._userCredentialsService.showUserData(form.value.name);
    this._router.navigate(['game']);
  }
}
