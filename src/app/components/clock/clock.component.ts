import { Component, OnInit } from '@angular/core';
import { SecondService } from '../../service/clock/secondService.service';
import { ValueClock } from '../../models/clock/valueClock.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  data$: Observable<ValueClock>;
  hour: number;
  minutes: string;
  seconds: string;
  day: string;
  date: string;
  ampm: string;

  constructor(private secondService: SecondService) { }

  ngOnInit(): void {
    this.data$ = this.secondService.getInfoClock();
    this.data$.subscribe(x => {
      this.hour = x.hour;
      this.minutes = x.minutes;
      this.day = x.day;
      this.date = x.date;
      this.ampm = x.ampm;
      this.seconds = x.seconds;
    });
  }

}
