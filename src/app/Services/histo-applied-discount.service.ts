import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistoAppliedDiscount } from '../models/histo-applied-discount';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoAppliedDiscountService {


  public  histoUrl = 'http://localhost:8080/mefin-webapp/appliedDiscountsByNumeroClient';

  constructor(private http: HttpClient) { }

  getHistoAds(id: String): Observable<HistoAppliedDiscount[]> {
    
    
    return this.http.get<HistoAppliedDiscount[]>(`${this.histoUrl}/${id}`);
  }


}
