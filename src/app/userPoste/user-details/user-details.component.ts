import { Component, OnInit } from '@angular/core';
import { UserPosteService } from 'src/app/services/user-poste.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  currentUserPoste=null;
  message='';
  constructor(
    private userPostService:UserPosteService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.message='';
  
  }

  updateUserPoste(){
    this.userPostService.updatedata(this.currentUserPoste.id,this.currentUserPoste)
    .subscribe(
      response=> {
        console.log(response);
        this.message="L'utilisateur a été modifié avec succès"
      },
      error =>{
        console.log(error);
      }
    )
  }

}
