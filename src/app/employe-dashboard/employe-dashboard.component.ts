import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-employe-dashboard',
  templateUrl: './employe-dashboard.component.html',
  styleUrls: ['./employe-dashboard.component.scss']
})
export class EmployeDashboardComponent implements OnInit {

  currentUser: any;
  content = '';
  name  = '';
   annee = 0;

  constructor(private token: TokenStorageService, public userService : UserService) { }


  ngOnInit() {
    // this.name=this.token.getUser;
    this.currentUser=this.token.getUser;
     this.userService.getEmployeDashboard().subscribe(
       data => {
         this.content = data;
       },
       err => {
         this.content = JSON.parse(err.error).message;
       }
     );
   }
 
 

}
