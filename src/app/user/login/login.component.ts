import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';



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

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }


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
        this.reloadPage();
        //this.redirectUser(data.role);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }


/*redirectUser(userRole){
  if(userRole==this.roles.USER){
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
