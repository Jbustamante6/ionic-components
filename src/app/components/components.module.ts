import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PopComponent } from './pop/pop.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PopComponent
  ],
  exports:[
    HeaderComponent,
    MenuComponent,
    PopComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
