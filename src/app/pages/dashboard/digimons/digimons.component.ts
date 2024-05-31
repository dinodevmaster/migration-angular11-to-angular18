import { Component } from '@angular/core';
import { IDeactiveComponent } from 'src/app/commons/models/animes';

@Component({
	standalone: true,
	selector: 'app-digimons',
	templateUrl: './digimons.component.html',
	styleUrls: ['./digimons.component.scss']
})
export default class DigimonsComponent implements IDeactiveComponent {
	canExit(): boolean {
		if (confirm('¿Estas seguro que deseas de DIGIMONS salir?')) {
			return true;
		} else {
			return false;
		}
	}
}
