import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';


const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public formData :  FormGroup; 


  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getGardienDashboard(): Observable<any> {
    return this.http.get(API_URL + 'gardien', { responseType: 'text' });
  }

  getEmployeDashboard(): Observable<any> {
    return this.http.get(API_URL + 'employe', { responseType: 'text' });
  }

  getAdminDashBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
