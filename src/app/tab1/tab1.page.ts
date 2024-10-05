import {Component, numberAttribute, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CalculationIF} from "../interfaces/calculation-if";
import {StorageIf} from "../storage/storage-if";
import {FunctionsService} from "../services/functions.service";
import {TranslateService} from "@ngx-translate/core";
import {CalculatorService} from "../services/calculator.service";
import {StorageService} from "../storage/storage.service";
import {ViewportScroller} from "@angular/common";
import {ParameterIF} from "../interfaces/parameter-if";
import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material/dialog";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {panelClass: 'mat-field-inside-dialog-workaround'}},
  ]
})
export class Tab1Page {

  segment = 'input';

  calculatorForm!: FormGroup;
  showStockColumns = false;

  currentYear!: number;

  result: CalculationIF[] = [];

  dataPayments: any;
  dataTotalAssets: any;
  view: [number, number] = [900, 450];

  storageData: StorageIf[];

  constructor(
    functions: FunctionsService,
    private translate: TranslateService,
    private calculatorService: CalculatorService,
    //private graphService: GraphService,
    private storageService: StorageService,
    private viewportScroller: ViewportScroller,
    //private toaster: NgToastService
    ) {

    this.currentYear = functions.currentYear();
    this.initForm();
    this.storageData = this.storageService.load();

  }

  initForm() {
    this.calculatorForm = new FormGroup({
      initialInvestment: new FormControl(numberAttribute(10000)),
      initialDividends: new FormControl(numberAttribute(350)),
      initialPriceGains: new FormControl(numberAttribute(300)),
      yearlyInvestment: new FormControl(numberAttribute(1000)),
      yearlyInvestmentIncrease: new FormControl(numberAttribute(100)),
      dividendReinvestmentPercentage: new FormControl(numberAttribute(100)),
      initialDividendPercentage: new FormControl(numberAttribute(3.5)),
      yearlyDividendPercentageIncrease: new FormControl(numberAttribute(5)),
      years: new FormControl(numberAttribute(10)),
      priceGainPercentage: new FormControl(numberAttribute(3)),
      taxPercentage: new FormControl(numberAttribute(26.375)),
      yearlyTaxFreeSum: new FormControl(numberAttribute(1000)),
    });
  }

  doCalculate() {
    this.showResult();

    this.result = this.calculatorService.calculate(this.getFormValues());

    /*this.dataPayments = this.graphService.getPaymentData(this.result,
      this.currentYear,
      this.translate.instant('calculator.graph.investing.value-1'),
      this.translate.instant('calculator.graph.investing.value-2'),
      this.translate.instant('calculator.graph.investing.value-3'));
    this.dataTotalAssets = this.graphService.getTotalAssetsData(this.result,
      this.currentYear,
      this.translate.instant('calculator.graph.totalassets.value-1'),
      this.translate.instant('calculator.graph.totalassets.value-2'),
      this.translate.instant('calculator.graph.totalassets.value-3'));*/

    this.viewportScroller.scrollToPosition([0, 0]);
  }

  getUntilYear() {
    return this.currentYear + this.getYears();
  }

  getYears(): number {
    return this.calculatorForm.controls['years'].value;
  }

  getAccumulatedDividends() {
    let sum = 0;
    this.result.forEach(y => sum += y.kpis.dividendPayout);
    return sum;
  }

  getAccumulatedDividendsReinvested() {
    let sum = 0;
    this.result.forEach(y => sum += y.kpis.dividendPayoutReinvested);
    return sum;
  }

  getFinalDividendPercentage() {
    return this.result[this.getYears()].kpis.dividendPercentage;
  }

  getFinalDividendIncome() {
    return this.result[this.getYears()].kpis.dividendPayout;
  }

  currencyFormatterLC(moneyAmount: any): string {
    const currencyFormat = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    });
    return currencyFormat.format(moneyAmount);
  }

  contentRowTooltip(rowNum: number) {
    if (rowNum == 0) {
      return this.translate.instant('calculator.result.firstrow-tt');
    } else {
      return '';
    }
  }

  graphLegend() {
    return this.translate.instant('calculator.graph.legend');
  }

  doSave(id: number) {
    this.storageService.save(id, this.getFormValues());
    //this.toaster.info(this.translate.instant('messages.parameterssaved'), '', 5000);
  }

 /* doLoadStorage() {
    this.storageData = this.storageService.load();
  }

  doLoadItem(id: number) {
    if (this.storageData[id].params != null) {
      let parameters = this.storageData[id].params;
      this.setFormValues(parameters);
      //this.toaster.info(this.translate.instant('messages.parametersloaded'), '', 5000);
    } else {
      //this.toaster.danger(this.translate.instant('messages.parametersloadederror'), '', 5000);
    }
  }*/

  getFormValues() {
    return {
      initialInvestment: this.calculatorForm.controls['initialInvestment'].value,
      initialDividends: this.calculatorForm.controls['initialDividends'].value,
      initialPriceGains: this.calculatorForm.controls['initialPriceGains'].value,
      yearlyInvestment: this.calculatorForm.controls['yearlyInvestment'].value,
      yearlyInvestmentIncrease: this.calculatorForm.controls['yearlyInvestmentIncrease'].value,
      dividendReinvestmentPercentage: this.calculatorForm.controls['dividendReinvestmentPercentage'].value,
      initialDividendPercentage: this.calculatorForm.controls['initialDividendPercentage'].value,
      yearlyDividendPercentageIncrease: this.calculatorForm.controls['yearlyDividendPercentageIncrease'].value,
      years: this.calculatorForm.controls['years'].value,
      currentYear: this.currentYear,
      priceGainPercentage: this.calculatorForm.controls['priceGainPercentage'].value,
      taxPercentage: this.calculatorForm.controls['taxPercentage'].value,
      yearlyTaxFreeSum: this.calculatorForm.controls['yearlyTaxFreeSum'].value,
    } as ParameterIF;
  }

  setFormValues(parameters: ParameterIF) {
    this.calculatorForm.controls['initialInvestment'].setValue(parameters.initialInvestment)
    this.calculatorForm.controls['initialDividends'].setValue(parameters.initialDividends);
    this.calculatorForm.controls['initialPriceGains'].setValue(parameters.initialPriceGains);
    this.calculatorForm.controls['yearlyInvestment'].setValue(parameters.yearlyInvestment);
    this.calculatorForm.controls['yearlyInvestmentIncrease'].setValue(parameters.yearlyInvestmentIncrease);
    this.calculatorForm.controls['dividendReinvestmentPercentage'].setValue(parameters.dividendReinvestmentPercentage);
    this.calculatorForm.controls['initialDividendPercentage'].setValue(parameters.initialDividendPercentage);
    this.calculatorForm.controls['yearlyDividendPercentageIncrease'].setValue(parameters.yearlyDividendPercentageIncrease);
    this.calculatorForm.controls['years'].setValue(parameters.years);
    this.calculatorForm.controls['priceGainPercentage'].setValue(parameters.priceGainPercentage);
    this.calculatorForm.controls['taxPercentage'].setValue(parameters.taxPercentage);
    this.calculatorForm.controls['yearlyTaxFreeSum'].setValue(parameters.yearlyTaxFreeSum);
  }

  initialGainsPercentageTooltip() {
    let result = 0;
    if (this.calculatorForm.controls['initialInvestment'].value > 0 &&
      this.calculatorForm.controls['initialPriceGains'].value > 0) {
      result = this.calculatorForm.controls['initialPriceGains'].value /
        this.calculatorForm.controls['initialInvestment'].value * 100;
    }
    return this.translate.instant('calculator.form.initialPriceGains-percentage') + ': ' + result.toFixed(2) + '%';
  }

  showInput() {
    this.segment = 'input';

    const element = document.getElementById('input');
    element!.click();
    this.focusSegment('input');
  }

  showResult() {
    this.segment = 'results';

    const element = document.getElementById('results');
    element!.click();
    this.focusSegment('results');
  }

  focusSegment(segment: string) {
    document.getElementById(segment)!.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }
}
