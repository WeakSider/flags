import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchHandlerService {
  public search:string=""
  public region:string=""
  public countries:any
  constructor() { }
}
