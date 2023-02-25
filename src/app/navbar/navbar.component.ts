import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isDarkMode!:boolean
  ngOnInit(): void {
    this.checkMode()
    
  }
  checkMode(){
    if(localStorage.getItem('theme')=='dark'){
      this.isDarkMode=true
    }else{
      this.isDarkMode=false
    }
  }
  toggleMode(){
    if(localStorage.getItem('theme')=='dark'){
      this.isDarkMode=true
    }
    this.isDarkMode = !this.isDarkMode
    if(this.isDarkMode){
      localStorage.setItem('theme', 'dark')
      document.documentElement.setAttribute('data-theme', 'dark')
  }else{
     localStorage.setItem('theme', 'light')
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
}
