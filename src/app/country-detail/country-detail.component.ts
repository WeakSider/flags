import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../country.service';
import { Country } from '../country';


@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit{
  country!: Country;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.getCountry();
  }

  nativeName:any
  languages:any
  currencies:any
  borders!:Country[]
  getCountry():void{
    const name=String(this.route.snapshot.paramMap.get('name'))
    this.countryService.getCountry(`name/${name}`)
    .subscribe(country => {
      this.country = country[0]; 
      this.nativeName= Object.values(this.country.name.nativeName)[0]
      this.languages = Object.values(this.country.languages)
      this.currencies = Object.values(this.country.currencies)[0]
      if(this.country.borders){
      this.countryService.getCountry(`alpha?codes=${this.country.borders}`)
    .subscribe(borders =>{
      this.borders = borders;
    })}
    })
    
  }
  goToPage(item:string){
    this.router.navigate(['/country/', item])
        .then(() => {
          window.location.reload();
        });
  }
}
