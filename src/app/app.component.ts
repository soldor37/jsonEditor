import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsonEditor';

  jsonObj = {};
  public onJsonInput(jsonObj){
    // console.log(jsonObj)
    this.jsonObj = jsonObj;
  }
}
