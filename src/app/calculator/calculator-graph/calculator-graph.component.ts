import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {CalculationIF} from "../../interfaces/calculation-if";
import {LegendPosition} from "@swimlane/ngx-charts";
import {TranslateService} from "@ngx-translate/core";
import {TranslateKeeperService} from "../../translate/translate-keeper.service";
import {GraphService} from "../../services/graph.service";

@Component({
  selector: 'app-calculator-graph',
  templateUrl: './calculator-graph.component.html',
  styleUrls: ['./calculator-graph.component.scss'],
})
export class CalculatorGraphComponent implements OnInit, AfterContentInit  {

  @Input()
  result: CalculationIF[] = [];

  @Input()
  currentYear: number = 0;

  dataPayments: any;
  dataTotalAssets: any;
  view: [number, number] = [800, 500];

  constructor(private translate: TranslateService,
              private translateKeeper: TranslateKeeperService,
              private graphService: GraphService) {
  }

  ngOnInit(): void {
    this.dataPayments = this.graphService.getPaymentData(this.result,
      this.currentYear,
      this.translate.instant('calculator.graph.investing.value-1'),
      this.translate.instant('calculator.graph.investing.value-2'),
      this.translate.instant('calculator.graph.investing.value-3'));

    this.dataTotalAssets = this.graphService.getTotalAssetsData(this.result,
      this.currentYear,
      this.translate.instant('calculator.graph.totalassets.value-1'),
      this.translate.instant('calculator.graph.totalassets.value-2'),
      this.translate.instant('calculator.graph.totalassets.value-3'));
  }

  ngAfterContentInit(): void {
    if (this.translateKeeper.getSelectedLanguage()) {
      this.translate.use(this.translateKeeper.getSelectedLanguage()!);
    }
  }

  currencyFormatterLC(moneyAmount: any): string {
    const currencyFormat = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    });
    return currencyFormat.format(moneyAmount);
  }

  graphLegend() {
    return this.translate.instant('calculator.graph.legend');
  }

  protected readonly LegendPosition = LegendPosition;
}
