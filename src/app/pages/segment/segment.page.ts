import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  
  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  heroes:Observable<any>;
  publisher:string = '';
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.segment.value = 'Todos'
    this.heroes = this.ds.getHeros();
  }

  segmentChanged(e){
    if(e.detail.value === 'Todos'){
      this.publisher = '';
      return;
    }
    this.publisher = e.detail.value;
  }
}
