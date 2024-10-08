import {Injectable} from '@angular/core';
import {CalculationIF} from "../interfaces/calculation-if";
import {LineseriesIf} from "../interfaces/lineseries-if";

@Injectable({
  providedIn: 'root'
})
export class TranslateKeeperService {


  constructor() {
  }

  setSelectedLanguage(lang: string) {
    localStorage.setItem('dividendentraum-language', lang);
  }

  getSelectedLanguage() {
    return localStorage.getItem('dividendentraum-language');
  }
}
