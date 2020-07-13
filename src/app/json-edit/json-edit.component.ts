import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jsonEdit',
  templateUrl: './json-edit.component.html',
  styleUrls: ['./json-edit.component.css']
})
export class JsonEditComponent implements OnInit {
  @Input() tmpJson;

  @Output() jsonOut: EventEmitter<object> = new EventEmitter();
  public jsonToOut() {
    let tmp: string = JSON.stringify(this.tmpJson);
    this.jsonOut.emit({text: tmp});
  }

  constructor() { }

  ngOnInit(): void {

  }

}
