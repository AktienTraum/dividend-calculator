import {Component} from '@angular/core';
import {TranslateKeeperService} from "../translate/translate-keeper.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  constructor(private translate: TranslateService,
              private translateKeeperService: TranslateKeeperService) {
  }

  switchToGerman() {
    this.translate.use('de');
    this.translateKeeperService.setSelectedLanguage('de');
  }

  switchToEnglish() {
    this.translate.use('en');
    this.translateKeeperService.setSelectedLanguage('en');
  }
}
