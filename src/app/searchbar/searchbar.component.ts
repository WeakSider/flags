import { Component } from '@angular/core';
import { SearchHandlerService } from '../search-handler.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  constructor(private _search:SearchHandlerService){}
  searchBox(event:any){
    this._search.search=event.target.value
  }
  selectRegion(e:any){
    this._search.region=e.target.value
  }
}
