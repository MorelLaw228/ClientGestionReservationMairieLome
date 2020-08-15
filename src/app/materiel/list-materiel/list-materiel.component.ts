import { Component, OnInit, Inject } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { FormControl, FormBuilder } from '@angular/forms';
import { MaterielService } from 'src/app/services/materiel.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateMaterielComponent } from '../create-materiel/create-materiel.component';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-list-materiel',
  templateUrl: './list-materiel.component.html',
  styleUrls: ['./list-materiel.component.scss']
})
export class ListMaterielComponent implements OnInit {


  materiel : Materiel;
  control: FormControl = new FormControl('');
  constructor(public crudApi: MaterielService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder/*,private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef:MatDialogRef<CreateMaterielComponent>*/) { }
 
  ngOnInit() {
    
    this.getData();
  }
  addMateriel()
  {
    this.crudApi.choixmenu = "A";
   const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    //dialogConfig.data="gdddd";
   // this.matDialog.open(CreateMaterielComponent, dialogConfig);
  }
 
  

  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.listData = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Etes-vous sûr que vous voulez supprimer ce matériel ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
         this.toastr.warning(' Matéreil supprimé avec succès !'); 
          this.getData();
        },
        error => console.log(error));
  }
  }
  selectData(item : Materiel) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    
   // this.matDialog.open(CreateMaterielComponent, dialogConfig);
  }

}
