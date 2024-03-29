import { Component, OnInit, Output, OnChanges, HostListener, EventEmitter } from '@angular/core';

import { IconsMenu } from '../../models/iconsMenu.model';

import { Utils } from '../../utils/utils.util';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {

  @Output()
  page = new EventEmitter<string>();

  iconsMenu?: Array<IconsMenu> = new Array<IconsMenu>();

  constructor() {
    this.iconsMenu.push(new IconsMenu('home', 'fa-fw fa-home', 'Inicio', true));
    this.iconsMenu.push(new IconsMenu('nifNieCif', 'fa-id-card', 'NIF, NIE, CIF', false));
    this.iconsMenu.push(new IconsMenu('validateNifNieCif', 'fa-id-card', 'Validar NIF, NIE, CIF', false));
    this.iconsMenu.push(new IconsMenu('bank', 'fa-credit-card', 'Datos bancarios', false));
    this.iconsMenu.push(new IconsMenu('licensePlate', 'fa-car fa-motorcycle', 'Matriculas', false));
    
  }

  @HostListener('click', ['$event']) onClick(event): void {
    const id: string = event.target.id;
	if (!Utils.isBlank(id)) {
		for (const iconsMenu of this.iconsMenu) {
		  if (id === iconsMenu.id) {
			for (const iconsMenu2 of this.iconsMenu) {
			  iconsMenu2.active = false;
			}
			iconsMenu.active = true;
		  }
		}
		this.page.emit(id);
	}
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

}
