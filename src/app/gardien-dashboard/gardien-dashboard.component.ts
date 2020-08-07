import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-gardien-dashboard',
  templateUrl: './gardien-dashboard.component.html',
  styleUrls: ['./gardien-dashboard.component.scss']
})
export class GardienDashboardComponent implements OnInit {
  currentUser: any;

  content = '';
  name  = '';
   annee = 0;
   
  constructor(private token: TokenStorageService, public userService : UserService) { }


  ngOnInit() {
    // this.name=this.token.getUser;
    this.currentUser=this.token.getUser;
     this.userService.getGardienDashboard().subscribe(
       data => {
         this.content = data;
       },
       err => {
         this.content = JSON.parse(err.error).message;
       }
     );
   }
}