import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/componente';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  
  components:Observable<Componente[]>;


  constructor(private ds:DataService) { }

  ngOnInit() {
    this.components = this.ds.getMenuOpts()
  }

}
