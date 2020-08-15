import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
//import {router} from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  loading:boolean=false;
  returnUrl:string;
  roles: string[] = [];
  userRoles:string[]=[];

  constructor(private router:Router,private authService: AuthService, private tokenStorage: TokenStorageService) { }


  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    
    this.authService.login(this.form)
    .subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigateByUrl('/admin-dashboard');
        //this.reloadPage();
        //this.redirectUser(this.roles);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }


  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
    this.router.navigateByUrl('/admin-dashoard');
  }


redirectUser(userRoles){
  if(userRoles=="ROLE_ADMIN"){
    this.router.navigateByUrl('/admin-dashoard');
   // this.router.navigate(['/admin-dashoard']);
  }else if(userRoles=="ROLE_GARDIEN"){
    this.router.navigateByUrl('/gardien-dashboard');
    //this.router.navigate(['/gardien-dashboard']);
       
  }else if(userRoles == "ROLE_EMPLOYE"){
    this.router.navigateByUrl('/employe-dashboard');
    //this.router.navigate(['/employe-dashboard']);
       
  }
}
/* if(userRole==this.roles.USER){
    this.router.navigate(['/admin-dashoard']);
  }else if(userRole==Role.gardien){
    this.router.navigate(['/gardien-dashboard']);
       
  }else if(userRole ==Role.Admin){
    this.router.navigate(['/employe-dashboard']);
       
  }
}  */


  reloadPage() {
    window.location.reload();
  }
}
