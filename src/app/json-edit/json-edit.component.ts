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
    this.jsonOut.emit({ text: tmp });
  }

  tmpObj: object = {};

  addRow(obj) {
    this.tmpJson.push(obj);
    this.tmpObj = {};
  }
  deleteRow(item: string) {
    const index: number = this.tmpJson.indexOf(item);
    if (index !== -1) {
      this.tmpJson.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit(): void {

  }

}
