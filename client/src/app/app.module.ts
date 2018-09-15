import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AgmCoreModule } from '@agm/core'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyA00lwQQgWZXTKZ_UV4V9o3yT1XRdnEAlY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
