import { Component, OnInit, Inject } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent implements OnInit {

  /*constructor(private notifyService : NotificationService) { }

  ngOnInit(): void {
  }*/

    
  form = new FormGroup({
    tgypeDemandeur: new FormControl('', [Validators.required]),
    nomAssociation: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dateReservation:new FormControl('', [Validators.required]),
    nomResponsable:new FormControl('', [Validators.required]),
    adresseComplete: new FormControl('', Validators.required),
    telephone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    adressePostale:new FormControl('', [Validators.required, Validators.minLength(5)]),
    intituleManif:new FormControl('', [Validators.required]),
    dateDebutReserv:new FormControl('', [Validators.required]),
    heureDebut:new FormControl('', [Validators.required]),
    dateFinReserv:new FormControl('', [Validators.required]),
    heureFin:new FormControl('', [Validators.required]),
    nbrePersonnes:new FormControl('', [Validators.required]),
    descriptif:new FormControl(''),
    salle:new FormControl('', [Validators.required])

   
  });
  
 /* get f(){
    return this.form.controls;
  }*/
  showToasterSuccess(){
    this.notifyService.showSuccess("Demande de réservation enrégistrée avec succès !!", "ItSolutionStuff.com")
}

submit(){
  console.log(this.form.value);
}

  

public message: string;
constructor(private notifyService : NotificationService,public crudApi: ReservationService ,public fb: FormBuilder,public toastr: ToastrService,
  private router : Router,@Inject(MAT_DIALOG_DATA)  public data,
  public dialogRef:MatDialogRef<CreateReservationComponent>) { }

  get f() { 
    return this.crudApi.dataForm.controls; 
  }

  ngOnInit() {
 if (this.crudApi.choixmenu == "A")
  {this.infoForm()};
 }

infoForm() {
  this.crudApi.dataForm = this.fb.group({

    tgypeDemandeur: new FormControl('', [Validators.required]),
    nomAssociation: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dateReservation:new FormControl('', [Validators.required]),
    nomResponsable:new FormControl('', [Validators.required]),
    adresseComplete: new FormControl('', Validators.required),
    telephone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    adressePostale:new FormControl('', [Validators.required, Validators.minLength(5)]),
    intituleManif:new FormControl('', [Validators.required]),
    dateDebutReserv:new FormControl('', [Validators.required]),
    heureDebut:new FormControl('', [Validators.required]),
    dateFinReserv:new FormControl('', [Validators.required]),
    heureFin:new FormControl('', [Validators.required]),
    nbrePersonnes:new FormControl('', [Validators.required]),
    descriptif:new FormControl(''),
    salle:new FormControl('', [Validators.required])
    
    });
  }

ResetForm() {
    this.crudApi.dataForm.reset();
}
onSubmit() {
  if (this.crudApi.choixmenu == "A")
  {
    this.addData();
  }
  else
  {
  this.updateData()
  }   
}

addData() {
const formData = new  FormData();
const reservation= this.crudApi.dataForm.value;
formData.append('materiel',JSON.stringify(reservation));
this.crudApi.createData(formData).subscribe( data => {

  this.router.navigate(['/acceuil']); 
});
}
updateData()
{
  this.crudApi.updatedata(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).
  subscribe( data => {
   // this.dialogRef.close();
    this.router.navigate(['/list-reservation']); 
  });
}

}
