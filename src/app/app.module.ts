import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinesscardComponent } from './businesscard/businesscard.component';
import { BusinesscardsComponent } from './businesscards/businesscards.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ServerService } from './server.service';

const appRoutes: Routes = [
  { path: '', canActivate: [AuthGuard], component: BusinesscardsComponent },
  { path: 'bcard', canActivate: [AuthGuard], component: BusinesscardsComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'notfound', component: NotfoundComponent }, 
  { path: '**', redirectTo: '/notfound' }  
]

@NgModule({
  declarations: [
    AppComponent,
    BusinesscardComponent,
    BusinesscardsComponent,
    NotfoundComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuard, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
