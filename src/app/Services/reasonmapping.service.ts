import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppliedDiscountReasonMapping } from '../models/applied-discount-reason-mapping';

@Injectable({
  providedIn: 'root'
})
export class ReasonmappingService {

  constructor(private http: HttpClient) {}

  getReasonsByType(type: number) {
    const url = 'http://localhost:8080/mefin-webapp/allreasonsbytype'; 
    return this.http.get<AppliedDiscountReasonMapping[]>(`${url}/${type}`);
  }
}
