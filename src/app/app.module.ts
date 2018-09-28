import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventService } from './event.service';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [EventService, AngularFireDatabase, AngularFireDatabaseModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
