import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPageRoutingModule } from './popover-routing.module';

import { PopoverPage } from './popover.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PopComponent } from 'src/app/components/pop/pop.component';

@NgModule({
  entryComponents: [
    PopComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [PopoverPage]
})
export class PopoverPageModule {}
