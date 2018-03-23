import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base64input',
  templateUrl: './base64input.component.html',
  styleUrls: ['./base64input.component.css']
})
export class Base64inputComponent implements OnInit {
  base64textString: string;

  constructor() { }

  ngOnInit() {
  }

  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if(files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }

/*  onUpload(readerEvt){
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
 //   console.log(btoa(binaryString));
  }*/

}
