import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  fechaNaci: Date = new Date();
  customPickerOptions;
  customDate: Date;


  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (e) => {
          console.log('Clicked Save!')
          console.log(e);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  cambioFecha(e){
    console.log('ionChage', e);
    console.log('Date', new Date(e.detail.value));
  }
}
