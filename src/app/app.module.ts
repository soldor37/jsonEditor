import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { JsonInputComponent } from './jsonInput/jsonInput.component';
import { JsonEditComponent } from './json-edit/json-edit.component';
import { JsonSaveComponent } from './json-save/json-save.component'

@NgModule({
  declarations: [
    AppComponent,
    JsonInputComponent,
    JsonEditComponent,
    JsonSaveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
