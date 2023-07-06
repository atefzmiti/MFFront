import { Component } from '@angular/core';
import { ReasonmappingService } from '../Services/reasonmapping.service';
import { HttpClient } from '@angular/common/http';
import { AppliedDiscountReasonMapping } from '../models/applied-discount-reason-mapping';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  constructor(private reasonms: ReasonmappingService, private http: HttpClient) {}

  types: number[] = [1, 2, 3];
  selectedType!: number;
  selectedReason!: string;
  reasons: AppliedDiscountReasonMapping[] = [];


  onTypeSelected() {
    const typeNumber = Number(this.selectedType);
  
    if (!isNaN(typeNumber)) {
      this.reasonms.getReasonsByType(typeNumber)
        .subscribe((reasons: AppliedDiscountReasonMapping[]) => {
          this.reasons = reasons;
        });
    }
  }
}
