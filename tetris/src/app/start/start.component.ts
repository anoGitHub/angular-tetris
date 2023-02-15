import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  @Output() playerName = new EventEmitter();
	@Output() playerMail = new EventEmitter();

  public sendingIntroFormData(form: FormGroup) {
    this.playerName.emit(form.value.name);
		this.playerMail.emit(form.value.email);

  }

}
