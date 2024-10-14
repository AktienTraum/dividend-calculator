import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {CalculationIF} from "../../interfaces/calculation-if";
import {TranslateService} from "@ngx-translate/core";
import {TranslateKeeperService} from "../../translate/translate-keeper.service";

@Component({
  selector: 'app-calculator-csv',
  templateUrl: './calculator-csv.component.html',
  styleUrls: ['./calculator-csv.component.scss'],
})
export class CalculatorCsvComponent implements AfterContentInit  {

  @Input()
  result: CalculationIF[] = [];

  @Input()
  currentYear: number = 0;

  constructor(private translate: TranslateService,
              private translateKeeper: TranslateKeeperService) { }

  ngAfterContentInit(): void {
    if (this.translateKeeper.getSelectedLanguage()) {
      this.translate.use(this.translateKeeper.getSelectedLanguage()!);
    }
  }
}
