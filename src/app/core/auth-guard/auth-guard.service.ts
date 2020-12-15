import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  public isAuthenticated(): boolean {
    const userToken = localStorage.getItem('userToken')
    if(!userToken) return false;
    else return true;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.isAuthenticated()) return true;
    else {
      this.router.navigateByUrl('/')
      return false;
    } 
  }
}
