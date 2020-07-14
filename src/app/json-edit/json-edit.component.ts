import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jsonEdit',
  templateUrl: './json-edit.component.html',
  styleUrls: ['./json-edit.component.css']
})
export class JsonEditComponent implements OnInit {
  @Input() tmpJson;

  @Output() jsonOut: EventEmitter<object> = new EventEmitter();
  // BreakException = "Td has no value"
  
  public jsonToOut() {
    let alert = document.getElementById('alertInputRow');
    alert.style.display = "none";
    // try{
    //   this.tmpJson.forEach(element => {
    //     if ((Object.keys(element)).length < (Object.keys(this.tmpJson[0])).length) {
    //       alert.style.display = "block";
    //       throw this.BreakException;
    //     }
    //   });
      let tmp: string = JSON.stringify(this.tmpJson);
      this.jsonOut.emit({ text: tmp });
    // }
    // catch(err){
    //   if (err !== this.BreakException) throw err;
    // }
    
  }
  trackByFn(index: any, item: any) {
    return index;
 }
  tmpObj: object = {};
  

  addRow(obj) {
    let alert = document.getElementById('alertInputRow');
    alert.style.display = "none";
    if ((Object.keys(obj)).length < (Object.keys(this.tmpJson[0])).length) {
      alert.style.display = "block";
    }
    else {
      //console.log((Object.keys(this.tmpJson[0])).length)
      this.tmpJson.push(obj);
      this.tmpObj = {};
    }
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
