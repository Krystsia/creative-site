import { Component, OnInit, ReflectiveKey } from '@angular/core';
import { GetDateService } from './services/get-date.service';

const someDate = 'kirill';

@Component({
  selector: 'app-works-component',
  providers: [
    {provide: GetDateService, useClass: GetDateService, multi: true},
    {provide: GetDateService, useValue: someDate, multi: true}
    ],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor(private getDate: GetDateService ) { }

  ngOnInit() {
    console.log(ReflectiveKey.get(GetDateService));
  }

  getNow() {
    return this.getDate[0].now();
  }
}
