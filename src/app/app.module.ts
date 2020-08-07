import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './user/login/login.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
//import { ReservationComponent } from '../reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { CreateReservationComponent } from './reservation/create-reservation/create-reservation.component';
import { ListReservationComponent } from './reservation/list-reservation/list-reservation.component';
import { ReservationDetailComponent } from './reservation/reservation-detail/reservation-detail.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeDashboardComponent } from './employe-dashboard/employe-dashboard.component';
import { GardienDashboardComponent } from './gardien-dashboard/gardien-dashboard.component';
//import { MaterielComponent } from './materiel/materiel.component';
import { ListMaterielComponent } from './materiel/list-materiel/list-materiel.component';
import { CreateMaterielComponent } from './materiel/create-materiel/create-materiel.component';
import { MaterielDetailComponent } from './materiel/materiel-detail/materiel-detail.component';
import { CreateSalleComponent } from './salle/create-salle/create-salle.component';
import { ListeSalleComponent } from './salle/liste-salle/liste-salle.component';
import { SalleDetailComponent } from './salle/salle-detail/salle-detail.component';
import { ListSalleVisiteurComponent } from './salle-visiteur/list-salle-visiteur/list-salle-visiteur.component';
import { DetailSalleVisiteurComponent } from './salle-visiteur/detail-salle-visiteur/detail-salle-visiteur.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { EmployeProfileComponent } from './employe-profile/employe-profile.component';
import { GardienProfileComponent } from './gardien-profile/gardien-profile.component';

import {MaterialModule} from '../app/shared/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

import { NavbarComponent } from '../app/shared/navbar/navbar.component';
import { FooterComponent } from '../app/shared/footer/footer.component';
import {FormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import {SidemenuComponent} from '../app/shared/sidemenu/sidemenu.component';

import { authInterceptorProviders} from '../app/_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    HomeComponent,
    NotfoundComponent,
   // ReservationComponent,
    ContactComponent,
    AproposComponent,
    CreateReservationComponent,
    ListReservationComponent,
    ReservationDetailComponent,
    AdminDashboardComponent,
    EmployeDashboardComponent,
    GardienDashboardComponent,
  //  MaterielComponent,
    ListMaterielComponent,
    CreateMaterielComponent,
    MaterielDetailComponent,
    CreateSalleComponent,
    ListeSalleComponent,
    SalleDetailComponent,
    ListSalleVisiteurComponent,
    DetailSalleVisiteurComponent,
    AdminProfileComponent,
    EmployeProfileComponent,
    GardienProfileComponent,
    NavbarComponent,
    SidemenuComponent,
    FooterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports:[RouterModule],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
