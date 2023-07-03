import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './pages/home/home.component';
import { ProfilePageComponent } from './pages/profile/profile-page/profile-page.component';
import { GroupPageComponent } from './pages/group-page/group-page/group-page.component';
import { UpdateProfilComponent } from './pages/update-profil/update-profil/update-profil.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile/:id',component:ProfilePageComponent},
  {path: 'groups',component:GroupPageComponent},
  {path: 'users/edit',component: UpdateProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

