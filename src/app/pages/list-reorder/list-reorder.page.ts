import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  
  personajes:string[] = ['Aquaman', 'Superman', 'Batman', 'Spiderman', 'Ironman', 'Cap. America'];
  constructor() { }

  ngOnInit() {
  }

  reorder(e){
    // console.log(e);

    const moverItem = this.personajes.splice(e.detail.from, 1)[0];
    this.personajes.splice(e.detail.to, 0, moverItem);
    e.detail.complete();
  }

  onClick(){
    console.log(this.personajes);
  }

}
