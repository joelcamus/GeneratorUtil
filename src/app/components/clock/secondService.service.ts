import { Injectable } from '@angular/core';
import { timer, Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValueClock {
  hour: number;
  minutes: string;
  ampm: string;
  day: string;
  date: string;
  seconds: string;
}
export class SecondService {
  clock: Observable<Date>;
  infofecha$ = new Subject<ValueClock>();
  vr: ValueClock;
  ampm: string;
  hours: number;
  minute: string;
  weekday: string;
  months: string;


  constructor() {
    this.clock = timer(0, 1000).pipe(map(t => new Date()), shareReplay(1));

  }
  getInfoClock(): Observable<ValueClock> {
    this.clock.subscribe(t => {
      this.hours = t.getHours();
      this.vr = {
        hour: this.hours,
        minutes: (t.getMinutes() < 10) ? '0' + t.getMinutes() : t.getMinutes().toString(),
        ampm: t.getHours() > 11 ? 'PM' : 'AM',
        date: t.toLocaleString('es-ES', { day: '2-digit', month: 'long' }).replace('.', '').replace('-', ' '),
        day: t.toLocaleString('es-ES', { weekday: 'long' }).replace('.', ''),
        seconds: t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds().toString()

      };
      this.infofecha$.next(this.vr);
    });
    return this.infofecha$.asObservable();

  }
}
