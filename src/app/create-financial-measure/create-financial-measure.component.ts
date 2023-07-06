import { Component } from '@angular/core';
import { Createfm } from '../Createfm';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReasonService } from '../Services/reason.service';
import { AppliedDiscountReason } from '../models/applied-discount-reason';
import { TypeService } from '../Services/type.service';
import { AppliedDiscountType } from '../models/applied-discount-type';
import { HistoAppliedDiscountService } from '../Services/histo-applied-discount.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HistoAppliedDiscount } from '../models/histo-applied-discount';
import { AmountsService } from '../Services/amounts.service';
import { Amounts } from '../models/amounts';
import { AppliedDiscountReasonMapping } from '../models/applied-discount-reason-mapping';
import { ReasonmappingService } from '../Services/reasonmapping.service';

@Component({
  selector: 'app-create-financial-measure',
  templateUrl: './create-financial-measure.component.html',
  styleUrls: ['./create-financial-measure.component.css']
})
export class CreateFinancialMeasureComponent {


  selectedOption: string | undefined;
  isInputDisabled: boolean | undefined;

  handleOptionChange() {
    if (this.selectedOption !== '1') {
      this.isInputDisabled = true;
    } else  {
      this.isInputDisabled = false;
    }
    
  }
  reasons : AppliedDiscountReason[] | undefined;
  types: AppliedDiscountType[] = [];
  amounts : Amounts[] | undefined;

  lastName!: string;

  histoAds!: Observable<HistoAppliedDiscount[]>;

  constructor ( private amountsService:AmountsService, private reasonms:ReasonmappingService, private reasonService: ReasonService, private typeService:TypeService, private histoService: HistoAppliedDiscountService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.reasonService.findAll().subscribe(data => {
      console.log(data);
      this.reasons = data;
    });

    this.typeService.findAll().subscribe(data => {
      console.log(data);
      this.types = data;
    });
    
    this.amountsService.findAll().subscribe(data => {
      console.log(data);
      this.amounts = data;
    });


  /*   this.route.paramMap.subscribe(params => {
      const lastname = params.get('lastname');
      if (lastname !== null) {

      this.histoAds = this.histoService.getHistoAds(lastname);}
    }); */
  }


  submitted = false;

  onSubmit(){this.submitted = true;}




showFormControls(form: any) {
  return form && form.controls['name'] &&
  form.controls['name'].value; // Dr. IQ
}


typess: number[] = [1, 2, 3,4];
idList: number[] = [];

typeDictionary: { [key: number]: String } = {
  1: 'Geste co',
  2: 'Indispo',
  3: 'Régul',
  4:'Remise'
};



  selectedType!: number;
  selectedReason!: string;
  reasonss: AppliedDiscountReasonMapping[] = [];


  selectedContactMethod: string = 'phone';

  disableEmail() {
    this.selectedContactMethod = 'email';
  }

  disablePhone() {
    this.selectedContactMethod = 'phone';
  }
  onTypeSelected() {
    const typeNumber = Number(this.selectedType);
  
    if (!isNaN(typeNumber)) {
      this.reasonms.getReasonsByType(typeNumber)
        .subscribe((reasons: AppliedDiscountReasonMapping[]) => {
          this.reasonss = reasons;
        });
    }
  }


}
