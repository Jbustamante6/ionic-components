import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/componente';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  

  components:Observable<Componente[]>;

  constructor(private menuCtrl: MenuController, private ds:DataService) { }

  ngOnInit() {
     this.components = this.ds.getMenuOpts();
  }

  toogleMenu(){
    this.menuCtrl.toggle()
  }

}
