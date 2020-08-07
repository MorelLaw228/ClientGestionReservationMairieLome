import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 

  title = 'ClientGestionReservationMairieLome';

  private roles:string[];
  isLoggedIn=false;
  showAdminDashboard=false;
  showEmployeDashboard=false;
  showGardienDashboard=false;
  username:String;

  constructor(private tokenStorage:TokenStorageService){}

  ngOnInit(){
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.roles = user.roles;

      this.showAdminDashboard = this.roles.includes('ROLE_ADMIN');
      this.showEmployeDashboard = this.roles.includes('ROLE_EMPLOYE');
      this.showGardienDashboard=this.roles.includes('ROLE_GARDIEN');

      this.username = user.username;
    }
  }
  logout(){
    this.tokenStorage.signOut();
    window.location.reload();
  }

}