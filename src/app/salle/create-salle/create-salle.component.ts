import { Component, OnInit, Inject } from '@angular/core';
import { SalleService } from 'src/app/services/salle.service';
import { FormBuilder, Validators ,ReactiveFormsModule} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-salle',
  templateUrl: './create-salle.component.html',
  styleUrls: ['./create-salle.component.scss']
})
export class CreateSalleComponent implements OnInit {

  //CategorieList: Categorie[];
 // ScategorieList: any;
 // scategorie : any={};
  userFile ;
  public imagePath;
  imgURL: any;
  public message: string;
  constructor(public crudApi: SalleService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,@Inject(MAT_DIALOG_DATA)  public data,
    public dialogRef:MatDialogRef<CreateSalleComponent>) { }
    get f() { return this.crudApi.dataForm.controls; }
 
    ngOnInit() {
   if (this.crudApi.choixmenu == "A")
    {this.infoForm()};
  /*  this.categorieService.getAll().subscribe(
      response =>{this.CategorieList = response;}
     );*/
   }
  
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
        id: null,
        nom: ['', [Validators.required]],
        adresse: ['', [Validators.required]],
        capaciteMin: [0, [Validators.required]],
        capaciteMax: [0, [Validators.required]],
        prixAsso: [0, [Validators.required]],
        prixParticulier: [0, [Validators.required]],
        surface: [0, [Validators.required]],
        description: ['', [Validators.required]],
        etat: ['', [Validators.required]],
      
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
  
/*onSelectCateg(id_categ: string)
{
  this.scategorieService.listScateg(id_categ).subscribe(
    response =>{this.ScategorieList = response;}
   );  
} 

onSelectScateg(id_scateg: string)
{
 this.scategorieService.getData(id_scateg).subscribe(
    response =>{
      this.scategorie = response;
      this.wcode = (10000 + this.scategorie.rang).toString().substring(1);
      this.wcode = this.scategorie.id_categ+this.scategorie.code+this.wcode;
      this.f['code'].setValue(this.wcode);
      }
   );  
} */

addData() {
  const formData = new  FormData();
  const salle = this.crudApi.dataForm.value;
  formData.append('salle',JSON.stringify(salle));
  formData.append('file',this.userFile);
  this.crudApi.createData(formData).subscribe( data => {
  
    this.router.navigate(['/list-salle']); 
  });
}
  updateData()
  {
    this.crudApi.updatedata(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).
    subscribe( data => {
     //this.dialogRef.close();
      this.router.navigate(['/list-salle']); 
    });
  }

  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
    //  this.f['profile'].setValue(file);
 
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
