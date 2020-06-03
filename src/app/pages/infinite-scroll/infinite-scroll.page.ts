import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  data:any = Array(20)
  constructor() { }

  ngOnInit() {
  }

  loadData(e){
    console.log('loading-content');
    if (this.data.length > 50){
      e.target.complete();
      this.infiniteScroll.disabled = true;
      return;
    }
    setTimeout(() => {
      const nuevoArr = Array(20)
      this.data.push(...nuevoArr);
      e.target.complete();
    }, 1000);
  }

}
