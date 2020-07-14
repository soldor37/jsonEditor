import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'app-jsonInput',
    templateUrl: './jsonInput.component.html',
    styleUrls: ['./jsonInput.component.css']
})
export class JsonInputComponent {
    @Input() textInput: string;
     //textInput: string = '';

    jsonObj = [];
    @Output() jsonIn: EventEmitter<object> = new EventEmitter();

    public jsonToObj(textVar){
        this.jsonObj = [];
        this.jsonObj = JSON.parse(textVar);
        this.jsonIn.emit(this.jsonObj);
    }

    public changeListener(files: FileList){
        console.log(files);
        if(files && files.length > 0) {
           let file : File = files.item(0); 
            //  console.log(file.name);
            //  console.log(file.size);
            //  console.log(file.type);
             let reader: FileReader = new FileReader();
             reader.readAsText(file);
             reader.onload = (e) => {
                let txt: string = reader.result as string;
                this.textInput = txt;
                // console.log(txt);
             }
          }
      }
    // jsonObj = {};
    // jsonToObg(textVar): void{
    //     this.jsonObj = {};
    //     this.jsonObj = JSON.parse(textVar);
    // }
}