import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { WebcamModule } from 'ngx-webcam';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


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
import { WebcamComponent } from './webcam/webcam.component';

const appRoutes: Routes = [
  { path: '', component: BusinesscardsComponent, canActivate: [AuthGuard] },
  { path: 'bcard', component: BusinesscardsComponent, canActivate: [AuthGuard] },
  { path: 'webcam', component: WebcamComponent, canActivate: [AuthGuard] },
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
    SigninComponent,
    WebcamComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'bcards-ver-num01'),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features
    AppRoutingModule,
    WebcamModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuard, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
