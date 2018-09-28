import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  providers: [EventService]
})
export class EventDetailsComponent implements OnInit {

  tags: any;

  //  constructor() { }
    constructor(private eventService: EventService) { }

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
