import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WykZadanie3AngularComponent } from './wyk-zadanie3-angular/wyk-zadanie3-angular.component';

@NgModule({
  declarations: [AppComponent, WykZadanie3AngularComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
