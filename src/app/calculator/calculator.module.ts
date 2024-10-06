import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CalculatorPage } from './calculator.page';

import {NgxTranslateModule} from "../translate/translate.module";
import {LineChartModule} from "@swimlane/ngx-charts";
import {TooltipDirective} from "@babybeet/angular-tooltip";
import {CalculatorRoutingModule} from "./calculator-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CalculatorRoutingModule,
    NgxTranslateModule,
    ReactiveFormsModule,
    LineChartModule,
    TooltipDirective
  ],
  declarations: [CalculatorPage]
})
export class CalculatorModule {}
