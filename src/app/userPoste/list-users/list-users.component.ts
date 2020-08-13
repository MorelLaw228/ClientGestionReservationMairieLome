import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { UserPoste } from 'src/app/models/user-poste';
import { FormControl, FormBuilder } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserPosteService } from 'src/app/services/user-poste.service';
import { AddUserComponent } from 'src/app/userPoste/add-user/add-user.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

 /* constructor() { }

  ngOnInit(): void {
  }*/

  user : UserPoste;
  control: FormControl = new FormControl('');
  constructor(public crudApi: UserPosteService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder,
   private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef:MatDialogRef< AddUserComponent>) { }
 
  ngOnInit() {
    
    this.getData();
  }
  addarticle()
  {
    this.crudApi.choixmenu = "A";
   const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    //dialogConfig.data="gdddd";
    this.matDialog.open(AddUserComponent, dialogConfig);
  }
 
  

  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.listData = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Etes-vous sûr de vouloir supprimer cet utilisateur ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
         this.toastr.warning(' data successfully deleted!'); 
          this.getData();
        },
        error => console.log(error));
  }
  }
  selectData(item : UserPoste) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
   const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    
    this.matDialog.open(AddUserComponent, dialogConfig);
  }

}
