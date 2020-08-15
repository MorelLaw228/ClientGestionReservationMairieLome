import { Component, OnInit } from '@angular/core';
import {View,EventSettingsModel} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-scheduler',
  template : `
  <mat-toolbar color="primary">
  <div [style]="{'margin-bottom':'30px' }">
    PLANNING DE RESERVATION
  </div>
  </mat-toolbar>
  '<ejs-schedule height=850 width=1050 [eventSettings]=eventObject [selectedDate]="setDate" [currentView]="setView" ></ejs-schedule>
  ',
  `,
//  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {

  public setView:View='Month';
  public setDate:Date=new Date(2020,8,13);
  public eventObject:EventSettingsModel={

    dataSource:[{

      Subject:"Testing",
      StartTime:new Date(2020,0,17,4,0),
      EndTime:new Date(2020,0,17,6,0)

    }]

  }

  constructor() { }

  ngOnInit(): void {
  }

}
