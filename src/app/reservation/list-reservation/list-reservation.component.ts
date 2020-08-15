import { Component, OnInit, Inject } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { FormControl, FormBuilder } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { ReservationService } from 'src/app/services/reservation.service';
import { CreateReservationComponent } from '../create-reservation/create-reservation.component';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.scss']
})
export class ListReservationComponent implements OnInit {

 /* constructor() { }

  ngOnInit(): void {
  }*/



   reservation: Reservation;
  control: FormControl = new FormControl('');
  constructor(public crudApi: ReservationService,public toastr: ToastrService,
    private router : Router,public fb: FormBuilder/*,
   private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef:MatDialogRef<CreateReservationComponent>*/) { }
 
  ngOnInit() {
    
    this.getData();
  }
  addReservation()
  {
    this.crudApi.choixmenu = "A";
   const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    //dialogConfig.data="gdddd";
    //this.matDialog.open(CreateReservationComponent, dialogConfig);
  }
 
  

  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.listData = response;}
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Etes-vous sûr de vouloir supprimer cette demande ?')) {
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
  selectData(item : Reservation) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    
    //this.matDialog.open(CreateReservationComponent, dialogConfig);
  }

}
