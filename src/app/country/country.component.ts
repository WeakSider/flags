import { Component, DoCheck, OnInit, } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SearchHandlerService } from '../search-handler.service';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit, DoCheck{
  constructor(private http: HttpClient, private _search:SearchHandlerService, private countryService:CountryService){
    
  }
  search:string=this._search.search
  region:string=this._search.region

  ngOnInit(): void {
    this.loadCountries();
    this.search = ""
    this.region = ""
    
  }
  countries:any[]=[]
  shownCountries:any[]=[]

  loadCountries(){
    this.countryService.getCountry("all")
    .subscribe((countries: any)=>{
      this.countries = countries
      this.shownCountries = countries
      // this.shownCountries.sort((a:Country,b:Country)=> a.name.common.localeCompare(b.name.common))
    });
    
  }
  searching(){
    let filteredArr = []
    for(let i=0; i<this.countries.length; i++){
      if(this.countries[i].name.common.toLowerCase().includes(this.search.toLowerCase())){
        filteredArr.push(this.countries[i])
      }
    }
    this.shownCountries = filteredArr
  }
  regioning(){
    let filteredArr = []
    for(let i=0; i<this.countries.length; i++){
      if(this.countries[i].region.includes(this.region)){
        filteredArr.push(this.countries[i])
      }
    }
    this.shownCountries = filteredArr
  }
  filtering(){
    let filteredArr = []
    for(let i=0; i<this.countries.length; i++){
      if(this.countries[i].region.includes(this.region) && this.countries[i].name.common.toLowerCase().includes(this.search.toLocaleLowerCase())){
        filteredArr.push(this.countries[i])
      }
    }
    this.shownCountries=filteredArr
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    if(this.search!==this._search.search || this.region!==this._search.region){
      this.search=this._search.search
      this.region=this._search.region
      if(this.search !=="" && this.region == ""){
      this.searching()
    }else if(this.search=="" && this.region !==""){
      this.regioning()
    }else if(this.search !=="" && this.region !==""){
      this.filtering()
    }else{
      this.shownCountries = this.countries
    }
    }
    
  }
}
