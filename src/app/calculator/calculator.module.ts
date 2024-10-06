import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CalculatorPage } from './calculator.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './calculator-routing.module';
import {NgxTranslateModule} from "../translate/translate.module";
import {MatTooltip} from "@angular/material/tooltip";
import {MatFormField} from "@angular/material/form-field";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatInput} from "@angular/material/input";
import {MatFabButton} from "@angular/material/button";
import {LineChartModule} from "@swimlane/ngx-charts";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    NgxTranslateModule,
    ReactiveFormsModule,
    MatTooltip,
    MatFormField,
    MatCard,
    MatCardHeader,
    MatSlider,
    MatCardContent,
    MatIcon,
    MatMenuTrigger,
    MatMenu,
    MatSliderThumb,
    MatInput,
    MatMenuItem,
    MatFabButton,
    LineChartModule
  ],
  declarations: [CalculatorPage]
})
export class Tab1PageModule {}
