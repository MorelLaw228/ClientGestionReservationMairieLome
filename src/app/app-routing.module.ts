import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { CreateReservationComponent } from './reservation/create-reservation/create-reservation.component';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ListeSalleComponent } from './salle/liste-salle/liste-salle.component';
import { CreateSalleComponent } from './salle/create-salle/create-salle.component';
import { SalleDetailComponent } from './salle/salle-detail/salle-detail.component';
import { ListMaterielComponent } from './materiel/list-materiel/list-materiel.component';
import { MaterielDetailComponent } from './materiel/materiel-detail/materiel-detail.component';
import { CreateMaterielComponent } from './materiel/create-materiel/create-materiel.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListReservationComponent } from './reservation/list-reservation/list-reservation.component';
import { ReservationDetailComponent } from './reservation/reservation-detail/reservation-detail.component';
import { EmployeDashboardComponent } from './employe-dashboard/employe-dashboard.component';
import { GardienDashboardComponent } from './gardien-dashboard/gardien-dashboard.component';
import {NavbarComponent} from '../app/shared/navbar/navbar.component';
import {FooterComponent} from '../app/shared/footer/footer.component';
import {SidemenuComponent} from '../app/shared/sidemenu/sidemenu.component';
import {AdminProfileComponent} from '../app/admin-profile/admin-profile.component';
import {EmployeProfileComponent} from '../app/employe-profile/employe-profile.component';
import {GardienProfileComponent} from '../app/gardien-profile/gardien-profile.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import {ListSalleVisiteurComponent} from '../app/salle-visiteur/list-salle-visiteur/list-salle-visiteur.component';
import {  ListUsersComponent} from '../app/userPoste/list-users/list-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'acceuil',component:AcceuilComponent},
  { path: 'home', component:HomeComponent },
  { path: 'login',component:LoginComponent },
  {path:'create-reservation',component:CreateReservationComponent},
  {path:'contact',component:ContactComponent},
  {path:'apropos',component:AproposComponent},
  {path:'add-materiel',component:CreateMaterielComponent},
  {path:'notfound',component:NotfoundComponent},

  
 
  {path:'list-salle-visiteur',component:ListSalleVisiteurComponent},
  
  {path:'admin-dashboard',component:AdminDashboardComponent,children:[

    {path:'list-salle',component:ListeSalleComponent},
    {path:'add-salle',component:CreateSalleComponent},
    {path:'detail-salle',component:SalleDetailComponent},
    {path:'list-materiel',component:ListMaterielComponent},
    {path:'detail-materiel',component:MaterielDetailComponent},
    {path:'add-materiel',component:CreateMaterielComponent},
    {path:'list-user',component:ListUserComponent},
    {path:'add-user',component:AddUserComponent},
    {path:'list-reservation',component:ListReservationComponent},
    {path:'detail-reservation',component:ReservationDetailComponent},
    {path:'profile-admin',component:AdminProfileComponent},
    {path:'profile-employe',component:EmployeProfileComponent},
    {path:'profile-gardien',component:GardienDashboardComponent},
    {path:'list-utilisateur',component:ListUsersComponent}
  ]},

  {path:'employe-dashboard',component:EmployeDashboardComponent,children:[

    
    {path:'add-salle',component:CreateSalleComponent},
    {path:'detail-salle',component:SalleDetailComponent},
    {path:'list-materiel',component:ListMaterielComponent},
    {path:'detail-materiel',component:MaterielDetailComponent},
    {path:'add-materiel',component:CreateMaterielComponent},
    {path:'list-reservation',component:ListReservationComponent},
    {path:'detail-reservation',component:ReservationDetailComponent}

  ]},

  {path:'gardien-dashboard',component:GardienDashboardComponent,children:[

    {path:'list-salle',component:ListeSalleComponent},
    {path:'detail-salle',component:SalleDetailComponent},
    {path:'list-materiel',component:ListMaterielComponent},
    {path:'detail-materiel',component:MaterielDetailComponent},
    {path:'list-reservation',component:ListReservationComponent},
    {path:'detail-reservation',component:ReservationDetailComponent}

  ]},

  {path:'foot',component:FooterComponent},
  {path:'navb',component:NavbarComponent},
  {path:'sidemenu',component:SidemenuComponent},
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
