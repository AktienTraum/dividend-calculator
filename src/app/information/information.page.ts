import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'information.page.html',
  styleUrls: ['information.page.scss']
})
export class InformationPage {

  segment = 'about';

  constructor() {}

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
