import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  data:Observable<any>;
  @ViewChild('lista',{static:false}) lista: IonList;
  constructor( private ds:DataService, public toastController: ToastController) { }

  ngOnInit() {
    this.data = this.ds.getUsers();
  }
  
  favorite( user ){
    this.presentToast('Add to Favorites');
    this.lista.closeSlidingItems();
  }
  share( user ){
    this.presentToast('Add to Shares');
    this.lista.closeSlidingItems();
  }
  delete( user ){
    this.presentToast('Delete of Favorites');
    this.lista.closeSlidingItems();
  }

  async presentToast(message:string, ) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
