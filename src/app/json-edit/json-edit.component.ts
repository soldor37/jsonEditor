import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsonEdit',
  templateUrl: './json-edit.component.html',
  styleUrls: ['./json-edit.component.css']
})
export class JsonEditComponent implements OnInit {
  tmpJson = [
    {
      "name": "Name 1",
      "year": "2001"
    },
    {
      "name": "Name 2",
      "year": "2002"
    },
    {
      "name": "Name 3",
      "year": "2003"
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
