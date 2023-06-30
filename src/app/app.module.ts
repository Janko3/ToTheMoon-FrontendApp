import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HttpClient } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { ProfilePageComponent } from './pages/profile/profile-page/profile-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './service/interceptor/token-interceptor.service';
import { PostComponent } from './components/post/post.component';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LoginPageComponent,
    HomeComponent,
    ProfilePageComponent,
    PostComponent,
    LogoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
