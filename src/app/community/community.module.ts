import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommunityPage } from './community.page';

import {CommunityRoutingModule} from './community-routing.module';
import {TranslateModule} from "@ngx-translate/core";
import {CommunityContentComponent} from "./community-content/community-content.component";
import {CommunityNewsComponent} from "./community-news/community-news.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CommunityRoutingModule,
    TranslateModule
  ],
  declarations: [CommunityPage, CommunityContentComponent, CommunityNewsComponent]
})
export class CommunityModule {}
