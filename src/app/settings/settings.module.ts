import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsPage} from "./settings.page";
import {IonicModule} from "@ionic/angular";
import {SettingsRoutingModule} from "./settings-routing.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {StaticTranslationLoader} from "../translate/static-translations-loader";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SettingsRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useClass: StaticTranslationLoader,
      },
    })
  ],
  declarations: [SettingsPage]
})
export class SettingsModule { }
