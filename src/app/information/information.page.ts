import {AfterContentInit, Component} from '@angular/core';
import {TranslateKeeperService} from "../translate/translate-keeper.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-tab3',
  templateUrl: 'information.page.html',
  styleUrls: ['information.page.scss']
})
export class InformationPage implements AfterContentInit {

  segment = 'about';

  constructor(
    private translateKeeper: TranslateKeeperService,
    private translate: TranslateService) {}

  ngAfterContentInit(): void {
    if (this.translateKeeper.getSelectedLanguage()) {
      this.translate.use(this.translateKeeper.getSelectedLanguage()!);
    }
  }

  showAbout() {
    this.segment = 'about';
  }

  showImprint() {
    this.segment = 'imprint';
  }

  showPrivacy() {
    this.segment = 'privacy';
  }
}
