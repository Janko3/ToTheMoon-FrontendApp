import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { ProfilePageComponent } from './pages/profile/profile-page/profile-page.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LoginPageComponent,
    HomeComponent,
    ProfilePageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
