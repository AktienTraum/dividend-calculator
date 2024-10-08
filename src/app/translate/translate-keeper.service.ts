import {Injectable} from '@angular/core';
import {CalculationIF} from "../interfaces/calculation-if";
import {LineseriesIf} from "../interfaces/lineseries-if";

@Injectable({
  providedIn: 'root'
})
export class TranslateKeeperService {

  private selectedLanguage = 'de';

  constructor() {
  }

  setSelectedLanguage(lang: string) {
    this.selectedLanguage = lang;
  }

  getSelectedLanguage() {
    return this.selectedLanguage;
  }
}
