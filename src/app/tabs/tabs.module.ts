import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {NgxTranslateModule} from "../translate/translate.module";
import {TooltipDirective} from "@babybeet/angular-tooltip";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        NgxTranslateModule,
        TooltipDirective
    ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
