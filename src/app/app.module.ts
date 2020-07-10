import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JsonInputComponent } from './jsonInput/jsonInput.component';
import { JsonEditorComponent } from './json-editor/json-editor.component'

@NgModule({
  declarations: [
    AppComponent,
    JsonInputComponent,
    JsonEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
