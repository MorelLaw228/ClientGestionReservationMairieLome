import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'app-create-materiel',
  templateUrl: './create-materiel.component.html',
  styleUrls: ['./create-materiel.component.scss']
})
export class CreateMaterielComponent implements OnInit {

  userFile ;
  public imagePath;
  imgURL: any;
  public message: string;
  constructor(public crudApi: MaterielService ,public fb: FormBuilder/*,public toastr: ToastrService*/,
    private router : Router,@Inject(MAT_DIALOG_DATA)  public data,
    public dialogRef:MatDialogRef<CreateMaterielComponent>) { }
    get f() { return this.crudApi.dataForm.controls; }
 
    ngOnInit() {
   if (this.crudApi.choixmenu == "A")
    {this.infoForm()};
   }
  
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
        id: null,
        nomMat: ['', [Validators.required]],
        prixMat: [0, [Validators.required]],
        referenceMat:[0,[Validators.required]],
        etatMat: ['', [Validators.required]],
      
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
  const materiel= this.crudApi.dataForm.value;
  formData.append('materiel',JSON.stringify(materiel));
  formData.append('file',this.userFile);
  this.crudApi.createData(formData).subscribe( data => {
  
    this.router.navigate(['/list-materiel']); 
  });
}
 updateData()
  {
    this.crudApi.updatedata(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).
    subscribe( data => {
     // this.dialogRef.close();
      this.router.navigate(['/list-materiel']); 
    });
  }

  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
     this.f['profile'].setValue(file);
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
     this.message = "Only images are supported.";
      return;
    }
 
   var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
     
      
    }

}
