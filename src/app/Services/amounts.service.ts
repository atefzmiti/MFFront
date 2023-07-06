import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Amounts } from '../models/amounts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmountsService {

  public reasonsURL = 'http://localhost:8080/mefin-webapp/allamounts';

  constructor(private http: HttpClient) {
    
  }

  public findAll(): Observable<Amounts[]> {
    return this.http.get<Amounts[]>(this.reasonsURL);
  }
}
