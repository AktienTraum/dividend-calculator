import {AfterContentInit, Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {TranslateKeeperService} from "../translate/translate-keeper.service";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements AfterContentInit {

  constructor(private translate: TranslateService,
              private translateKeeper: TranslateKeeperService) {}

  ngAfterContentInit(): void {
    if (this.translateKeeper.getSelectedLanguage()) {
      this.translate.use(this.translateKeeper.getSelectedLanguage()!);
    }
  }
}
