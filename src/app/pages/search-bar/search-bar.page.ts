import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {
  showSeach = false;
  albumes:any[] = [];
  text: string = '';
  constructor(public platform: Platform, private ds:DataService) { 
  }

  
  ngOnInit() {
    this.ds.getAlbums().subscribe(data => {
      this.albumes = data
    });
  }

  buscar(e){
    this.text = e.detail.value;
  }

}
