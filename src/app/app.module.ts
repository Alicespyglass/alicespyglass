import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { routing }      from './app.routing';
import { VideoSectionComponent } from './video-section/video-section.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoSectionComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
