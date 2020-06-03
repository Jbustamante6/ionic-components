import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopComponent } from 'src/app/components/pop/pop.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(e){
    const popover = await this.popoverCtrl.create({
      component: PopComponent,
      event: e,
    });
  
    await popover.present();
    const { data } = await popover.onWillDismiss();
    console.log(data);

  }
}
