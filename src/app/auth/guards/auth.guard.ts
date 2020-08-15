import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { state } from '@angular/animations';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService:AuthService,/*private userService: UserService,*/private token: TokenStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    return true;
   {
      //  const currentUser=this.token.currentUserValue;
        const currentUser=this.token.getUser();
        if(currentUser){
          if(route.data.roles && route.data.roles.indexOf(currentUser.roles)===-1){
            this.authService.logout();
            this.router.navigate(['/login']);
            return false;
          }
          return true;
        }

      this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
       return false;
}
}
}
