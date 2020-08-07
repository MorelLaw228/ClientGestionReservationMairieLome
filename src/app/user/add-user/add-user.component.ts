import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {UserService} from 'src/app/services/user.service';
import { Router } from '@angular/router';
import {Role} from 'src/app/models/role';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {


  constructor(public crudApi: UserService ,public fb: FormBuilder,private router : Router/*,public toastr: ToastrService*/) { }
    roleList:Role[];
  //directionList: Direction[];
  //  residenceList: Residence[];
    get f() { return this.crudApi.formData.controls; }
    
  ngOnInit() {
  
   
    this.infoForm();
   // this.directionService.getAll().subscribe(
    //  response =>{this.directionList = response;}
   //  );
   }

  
  infoForm() {
    this.crudApi.formData = this.fb.group({
        id: null,
        nom: ['', [Validators.required, Validators.minLength(5)]],
        prenom: ['', [Validators.required, Validators.minLength(8)]],
        username: [0, [Validators.required, Validators.minLength(5)]],
        password: [0, [Validators.required]],
        });
    }
   
  

  ResetForm() {
      this.crudApi.formData.reset();
  }
  onSubmit() {
   
    if (this.crudApi.formData.value.pwd == this.crudApi.formData.value.pwdd)
    {
      if (this.crudApi.choixmenu == "A")
      {
        this.addData();
      }
      else
      {
       this.updateData()
      }
    }
    else
    {
      //this.toastr.warning( 'Vérifiet votre de passe ...');  
    }
}
  
   

addData() {
  this.crudApi.createData(this.crudApi.formData.value).
  subscribe( data => {
   // this.toastr.success( 'Validation Faite avec Success'); 
    this.router.navigate(['/users']);
  });
}
  updateData()
  {
  
    this.crudApi.updatedata(this.crudApi.formData.value.id,this.crudApi.formData.value).
    subscribe( data => {
     // this.toastr.success( 'Modification Faite avec Success');

      this.router.navigate(['/userss']);
    });
  }

  onSelectDir(ctrl)
  {
     if(ctrl.selectedIndex == 0){
      this.f['lib_direction'].setValue('');
     }
     else{
       alert("ddddd");
      /*   this.f['lib_direction'].setValue(this.directionList[ctrl.selectedIndex - 1].libelle);
        this.f['code_dir'].setValue(this.directionList[ctrl.selectedIndex - 1].code);
        this.residenceService.listResidence(this.crudApi.formData.value.code_dir).subscribe(
          response =>{
            alert ("dddddddddddd");
            this.residenceList = response;}
         );  */
     }
   }


onSelectRes(ctrl)
    {
      if(ctrl.selectedIndex == 0){
        this.f['lib_residence'].setValue('');
       }
       else{
         // this.f['lib_residence'].setValue(this.residenceList[ctrl.selectedIndex - 1].libelle);
         // this.f['code_res'].setValue(this.residenceList[ctrl.selectedIndex - 1].code);
        }  
    } 
}
