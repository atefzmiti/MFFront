import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppliedDiscountReason } from '../models/applied-discount-reason';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReasonService {


  public reasonsURL = 'http://localhost:8080/mefin-webapp/allreasons';

  constructor(private http: HttpClient) {
    
  }

  public findAll(): Observable<AppliedDiscountReason[]> {
    return this.http.get<AppliedDiscountReason[]>(this.reasonsURL);
  }

  /* public save(user: User) {
    return this.http.post<User>(this.reasonsURL, user);
  } */
}
