import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6o5OyV-vgXK4dj1M0KTqYhpkHKc9D5f4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
