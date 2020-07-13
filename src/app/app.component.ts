import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsonEditor';

  jsonObj = [];
  jsonOut = [];
  public onJsonInput(jsonObj){
    // console.log(jsonObj)
    this.jsonObj = jsonObj;
  }
  public onJsonOut(jsonOut){
    // console.log(jsonObj)
    this.jsonOut = jsonOut;
  }
}
