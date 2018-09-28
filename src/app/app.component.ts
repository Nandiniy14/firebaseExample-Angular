import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  tags: any

  constructor( private eventService:EventService){}

  
  ngOnInit() {
    const x = this.eventService.getEvents();
      x.snapshotChanges().subscribe(item => {
        this.tags = [];
        //console.log(item);
        //this.tags.push(item);
        
        item.forEach(element => {
        const y = element.payload.toJSON();
        //console.log(y);
        this.tags.push(y);
       // y['$key'] = element.key;
        //this.tags.push(element);
      });
      });
      console.log(this.tags);
    }
        
  
}
