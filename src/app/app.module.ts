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
import { DeleteBtnComponent } from './components/deleteBtn/delete-btn/delete-btn.component';
import { HeaderComponent } from './components/header/header/header.component';
import { UpdateBtnComponent } from './components/updateBtn/update-btn/update-btn.component';
import { ReactionsComponent } from './components/reactions/reactions/reactions.component';
import { CommentComponent } from './components/comment/comment/comment.component';
import { GroupComponent } from './components/group/group/group.component';
import { GroupPageComponent } from './pages/group-page/group-page/group-page.component';
import { UpdateProfilComponent } from './pages/update-profil/update-profil/update-profil.component';


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
    DeleteBtnComponent,
    HeaderComponent,
    UpdateBtnComponent,
    ReactionsComponent,
    CommentComponent,
    GroupComponent,
    GroupPageComponent,
    UpdateProfilComponent,
    
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
