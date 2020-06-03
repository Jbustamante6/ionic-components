import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  
  @Input() firstName;
  @Input() lastName;
  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  
  salirSinData(){
    this.modalCtrl.dismiss();
  }
  salirConData(){
    this.modalCtrl.dismiss({
      firstName: 'Jefersson',
      lastName: 'Bustamante'
    })
  }
}
