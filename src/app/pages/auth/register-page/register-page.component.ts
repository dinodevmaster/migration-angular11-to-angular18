import { Component } from '@angular/core';
import { RegisterComponent } from '@components/register/register.component';

@Component({
	standalone: true,
	imports: [RegisterComponent],
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {}
