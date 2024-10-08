import {AfterContentInit, Component} from '@angular/core';
import {TranslateKeeperService} from "../translate/translate-keeper.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-tab2',
  templateUrl: 'community.page.html',
  styleUrls: ['community.page.scss']
})
export class CommunityPage implements AfterContentInit{

  segment = 'community';

  constructor(
    private translateKeeper: TranslateKeeperService,
    private translate: TranslateService) {}

  ngAfterContentInit(): void {
    if (this.translateKeeper.getSelectedLanguage()) {
      this.translate.use(this.translateKeeper.getSelectedLanguage()!);
    }
  }

  showCommunity() {
    this.segment = 'community';
  }

  showNews() {
    this.segment = 'news';
  }
}
