import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { Router } from '@angular/router';
import { HistoAppliedDiscountService } from '../Services/histo-applied-discount.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss'],
})
export class RechercheComponent {

  isSubmitted = false;
  value2: string | undefined;
  searchTerm!: string;


  constructor(private histoService: HistoAppliedDiscountService, private router: Router) {
  }

  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if(!form.valid) {
      return false;
    } else {
    alert(JSON.stringify(form.value))
    }
  }

  searchName!: string;
 

  searchid!: string;
  searchbyid(): void {

    this.histoService.getHistoAds(this.searchTerm).subscribe((data) => {
      // Redirect to another component with the fetched data
      this.router.navigate(['/mesures'], { state: { data } });
    });

  }
  userId!: string;

  redirectToUserHistoryOfCustomerProblems(): void {
    this.router.navigateByUrl(`/mesures/${this.userId}`);
  }
}



