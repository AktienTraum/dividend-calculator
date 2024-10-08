import {AfterContentInit, Component} from '@angular/core';
import {TranslateKeeperService} from "../translate/translate-keeper.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements AfterContentInit {

  constructor(private translate: TranslateService,
              private translateKeeper: TranslateKeeperService) {
  }

  ngAfterContentInit(): void {
    if (this.translateKeeper.getSelectedLanguage()) {
      this.translate.use(this.translateKeeper.getSelectedLanguage()!);
    }
  }

  switchToGerman() {
    this.translate.use('de');
    this.translateKeeper.setSelectedLanguage('de');
  }

  switchToEnglish() {
    this.translate.use('en');
    this.translateKeeper.setSelectedLanguage('en');
  }
}
