import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http:HttpClient) { }
  apiUrl = "https://restcountries.com/v3.1/"
  getCountry(suffix:string): Observable<Country[]>{
    return this.http.get<Country[]>(this.apiUrl + suffix)
  }
}
