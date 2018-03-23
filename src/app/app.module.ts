import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Base64inputComponent } from './base64input/base64input.component';

@NgModule({
  declarations: [
    AppComponent,
    Base64inputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    Base64inputComponent
  ]
})
export class AppModule { }
