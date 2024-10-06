import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InformationPage } from './information.page';

import {InformationRoutingModule} from './information-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InformationRoutingModule
  ],
  declarations: [InformationPage]
})
export class InformationModule {}
