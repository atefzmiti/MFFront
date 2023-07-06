import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppliedDiscountType } from '../models/applied-discount-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {


  public reasonsURL = 'http://localhost:8080/mefin-webapp/alltypes';

  constructor(private http: HttpClient) {
    
  }

  public findAll(): Observable<AppliedDiscountType[]> {
    return this.http.get<AppliedDiscountType[]>(this.reasonsURL);
  }
}
