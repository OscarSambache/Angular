import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
/*events: any[];
   header: any;
   event: MyEvent;*/
  constructor() { }
  /*constructor(private eventService: EventService) { }*/
  ngOnInit() {
    /*this.eventService.getEvents().then(events => {this.events = events;});

    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };*/
  }

}
/*export class MyEvent {
  id: number;
  title: string;
  start: string;
  end: string;
  allDay: boolean = true;
}
@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>('assets/showcase/data/scheduleevents.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
  }
}*/
