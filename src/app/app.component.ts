import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Generator Util';
  page = 'home';	
  getPage($event: string): void {	
    this.page = $event;	
  }	

}
