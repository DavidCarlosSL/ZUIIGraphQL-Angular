import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  selectedComponent: string = "signInComponent";

  constructor(private router: Router) {}

  public isAuthenticated(): boolean {
    const userToken = localStorage.getItem('userToken')
    if(!userToken) return false;
    else return true;
  }

  ngAfterViewInit(): void {
    if(this.isAuthenticated())
    this.router.navigateByUrl("/library")
  } 

  changeComponent(nameComponent: string){
    this.selectedComponent = nameComponent;
  }

}
