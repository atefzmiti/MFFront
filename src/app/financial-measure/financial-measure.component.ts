import { Component, OnInit } from '@angular/core';
import { Createfm } from '../Createfm';
import { Financialmeasure } from '../models/Financialmeasure';
import { TypeService } from '../Services/type.service';
import { HistoAppliedDiscountService } from '../Services/histo-applied-discount.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HistoAppliedDiscount } from '../models/histo-applied-discount';

@Component({
  selector: 'app-financial-measure',
  templateUrl: './financial-measure.component.html',
  styleUrls: ['./financial-measure.component.css']
})
export class FinancialMeasureComponent implements OnInit {


  
  fms: Financialmeasure[] = [
    new Financialmeasure("N2 C/L", "10/12/2022","E", "Indisponibilité service","Dysfonctionnement technique","+0.01$","15$", "1256627","UI", "NBH","R"),
    new Financialmeasure("N2 C/L", "10/12/2022","E", "Indisponibilité service","Dysfonctionnement technique","+0.01$","15$", "1256627","UI", "NBH","R"),
    new Financialmeasure("N2 C/L", "10/12/2022","E", "Indisponibilité service","Dysfonctionnement technique","+0.01$","15$", "1256627","UI", "NBH","R"),


  ];


  lastName!: string;

  histoAds!: HistoAppliedDiscount[];

  constructor(  private histoService: HistoAppliedDiscountService, private route: ActivatedRoute) {
  }

  userId!: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.getCustomerProblem();
    });
   

/* 
    this.route.paramMap.subscribe(params => {
      const lastname = params.get('id');
      if (lastname !== null) {

      this.histoAds = this.histoService.getHistoAds(lastname);}
    }); */
  }

  getCustomerProblem(): void {
    this.histoService.getHistoAds(this.userId)
      .subscribe(
        (histoAds: HistoAppliedDiscount[]) => {
          this.histoAds = histoAds;
        },
        (error: any) => {
          // Handle error
          console.error(error);
        }
      );
  }
  

}
