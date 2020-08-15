import { Component, OnInit, Inject } from '@angular/core';
import { UserPosteService } from 'src/app/services/user-poste.service';
import { ReactiveFormsModule, FormGroup,FormsModule, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

 /* constructor() { }

  ngOnInit(): void {
  }*/


  userFile ;
  public imagePath;
  imgURL: any;
  public message: string;
  dataForm:FormGroup;
  constructor(public crudApi: UserPosteService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,@Inject(MAT_DIALOG_DATA)  public data,
    public dialogRef:MatDialogRef<AddUserComponent>) { }

   /* dataForm=new FormGroup({
      id: null,
      nom=new FormControl(''),
      prenom=new FormControl(''),
      adresse=new FormControl(''),
      username=new FormControl(''),
      mdp=new FormControl(''),
      role=new FormControl(''),
    
    })*/
    get f() { 
      return this.crudApi.dataForm.controls; 
    }
 
    ngOnInit() {
   if (this.crudApi.choixmenu == "A")
    {this.infoForm()};
   }
  
  infoForm() {
   // this.crudApi.dataForm
    this.dataForm = this.fb.group({
        id: null,
        nom: ['', [Validators.required]],
        prenom: [0, [Validators.required]],
        adresse:[0,[Validators.required]],
        username: ['', [Validators.required]],
        mdp: ['', [Validators.required]],
        role:['',[Validators.required]]
      
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
  const userPoste= this.crudApi.dataForm.value;
  formData.append('userPoste',JSON.stringify(userPoste));
  formData.append('file',this.userFile);
  this.crudApi.createData(formData).subscribe( data => {
  
    this.router.navigate(['/list-utilisateur']); 
  });
}
  updateData()
  {
    this.crudApi.updatedata(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).
    subscribe( data => {
     // this.dialogRef.close();
      this.router.navigate(['/list-utilisateur']); 
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
