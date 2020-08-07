import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-gardien-profile',
  templateUrl: './gardien-profile.component.html',
  styleUrls: ['./gardien-profile.component.scss']
})
export class GardienProfileComponent implements OnInit {
  currentUser: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }
}
