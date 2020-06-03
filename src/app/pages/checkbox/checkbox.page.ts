import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  data:any[] = [
    {
      name: 'primary',
      selected : false
    },
    {
      name: 'secondary',
      selected : true
    },
    {
      name: 'tertiary',
      selected : true
    },
    {
      name: 'success',
      selected : false
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  onClick(item){
    console.log(item);
  }

}
