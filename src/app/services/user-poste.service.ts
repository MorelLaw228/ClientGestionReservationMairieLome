import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { UserPoste } from '../models/user-poste';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';

const httpOptions ={ headers:new HttpHeaders({'Content-Type':'application/json'}) };

@Injectable({
  providedIn: 'root'
})
export class UserPosteService {
  private baseUrl = '/api/users';
  private baseUrl2='/api/auth/signup'
  private baseUrl1 = '/api/saveUserServer';
  host :string = "http://localhost:8080";

  choixmenu : string  = 'A';
  listData : UserPoste;
  public dataForm:  FormGroup; 
  constructor(private http: HttpClient) { }
 


  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createData(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl2}`, formData);
  }
  
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  deleteAll()
  {
    return this.http.delete(`${this.baseUrl}`);
  }
  getAll(): Observable<any> {
   
    return this.http.get(`${this.baseUrl}`);
  }


  uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
		return this.http.request(req);
   }

   findByName(nom){
     
    return this.http.get(`${this.baseUrl}?nom=$(nom)`);
   }
}

