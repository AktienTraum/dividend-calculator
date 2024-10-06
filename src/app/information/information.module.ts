import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InformationPage } from './information.page';

import {InformationRoutingModule} from './information-routing.module';
import {TranslateModule} from "@ngx-translate/core";
import {AboutComponent} from "./about/about.component";
import {ImprintComponent} from "./imprint/imprint.component";
import {PrivacyComponent} from "./privacy/privacy.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InformationRoutingModule,
    TranslateModule
  ],
  declarations: [InformationPage, AboutComponent, ImprintComponent, PrivacyComponent]
})
export class InformationModule {}
