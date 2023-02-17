import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  @Output() userName = new EventEmitter();
	@Output() userEmail = new EventEmitter();
	@Output() logOn = new EventEmitter();

	public sendUserData(form: FormGroup) {
		this.userName.emit(form.value.name);
		this.userEmail.emit(form.value.email);
		this.logOn.emit();
	}
}

