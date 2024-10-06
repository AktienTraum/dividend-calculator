import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'community.page.html',
  styleUrls: ['community.page.scss']
})
export class CommunityPage {

  segment = 'community';

  constructor() {}

  showCommunity() {
    this.segment = 'community';
  }

  showNews() {
    this.segment = 'news';
  }
}
