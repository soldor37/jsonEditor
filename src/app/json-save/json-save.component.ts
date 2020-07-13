import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jsonSave',
  templateUrl: './json-save.component.html',
  styleUrls: ['./json-save.component.css']
})
export class JsonSaveComponent implements OnInit {
  @Input() jsonOut;

  constructor() { }

  ngOnInit(): void {
  }

}
