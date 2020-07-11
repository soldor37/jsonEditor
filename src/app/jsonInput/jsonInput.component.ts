import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'app-jsonInput',
    templateUrl: './jsonInput.component.html',
    styleUrls: ['./jsonInput.component.css']
})
export class JsonInputComponent {
    @Input() textInput: string;
     //textInput: string = '';

    jsonObj = {};
    @Output() jsonIn: EventEmitter<object> = new EventEmitter();

    public jsonToObj(textVar){
        this.jsonObj = {};
        this.jsonObj = JSON.parse(textVar);
        this.jsonIn.emit(this.jsonObj);
    }
    // jsonObj = {};
    // jsonToObg(textVar): void{
    //     this.jsonObj = {};
    //     this.jsonObj = JSON.parse(textVar);
    // }
}