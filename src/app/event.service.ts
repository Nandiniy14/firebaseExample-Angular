import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 

@Injectable()
export class EventService {
  tags: AngularFireList<any[]>;
  constructor(public database: AngularFireDatabase) { 
    this.tags = database.list('/tags')
    console.log(this.tags);
    console.log("111111111111111111111111111")
  }
  getEvents(){
    // console.log("sevices");
    // console.log(this.tags);
    return this.tags;
    
  }

}
