import { Component, OnInit, Inject } from '@angular/core';
import { Salle } from 'src/app/models/salle';
import { FormControl, FormBuilder } from '@angular/forms';
import { SalleService } from 'src/app/services/salle.service';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';
import { CreateSalleComponent } from '../create-salle/create-salle.component';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
//import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-liste-salle',
  templateUrl: './liste-salle.component.html',
  styleUrls: ['./liste-salle.component.scss']
})
export class ListeSalleComponent implements OnInit {

  salle : Salle;
  control: FormControl = new FormControl('');
  constructor(public crudApi: SalleService,public toastr: ToastrService,
    private router : Router,public fb: FormBuilder/*,
  private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef:MatDialogRef<CreateSalleComponent>*/) { }
 
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
   // this.matDialog.open(CreateSalleComponent, dialogConfig);
  }
 
  

  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.listData = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Article ?')) {
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
  selectData(item : Salle) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
   const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    
    //this.matDialog.open(CreateSalleComponent, dialogConfig);
  }


}
