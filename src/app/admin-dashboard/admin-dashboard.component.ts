import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  currentUser: any
  content = '';
  name  = '';
   annee = 0;

  constructor(private userService: UserService,private token: TokenStorageService) { }

  ngOnInit() {
   // this.name=this.token.getUser;
   this.currentUser=this.token.getUser;
    this.userService.getAdminDashBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }


}
