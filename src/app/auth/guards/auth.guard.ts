import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

 /* constructor(private router: Router, private userService: UserService) {
  }
*/
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    return true;
   /*{
        const currentUser=this.authenticationService.currentUserValue;
        if(currentUser){
          if(route.data.roles && route.data.roles.indexOf(currentUser.roles)===-1){
            this.authenticationService.logout();
            this.router.navigate(['/login']);
            return false;
          }
          return true;
        }

      this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
       return false;
}*/
}
}
