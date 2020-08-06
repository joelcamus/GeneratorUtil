import { Component, OnInit, Output, OnChanges, HostListener, EventEmitter } from '@angular/core';

import { IconsMenu } from '../../models/iconsMenu.model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {

  iconsMenu?: Array<IconsMenu> = new Array<IconsMenu>();

  constructor() {
    this.iconsMenu.push(new IconsMenu('home', 'fa-fw fa-home', 'Inicio', true, '/home'));
    this.iconsMenu.push(new IconsMenu('nifNieCif', 'fa-id-card', 'NIF, NIE, CIF', false, '/nifNieCif'));
    this.iconsMenu.push(new IconsMenu('bank', 'fa-credit-card', 'Datos bancarios', false, '/bank'));
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

}
