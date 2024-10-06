import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  focusSegment(segment: string) {
    const element = document.getElementById(segment);
    element!.click();

    document.getElementById(segment)!.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }
}
