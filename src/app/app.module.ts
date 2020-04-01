import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


export const firebaseConfig = {
  apiKey: 'AIzaSyCTM-B7vFTIYeKl1Kgix7zPgnI9E60jZ1w',
  authDomain: 'songlist-e19bb.firebaseapp.com',
  databaseURL: 'https://songlist-e19bb.firebaseio.com',
  projectId: 'songlist-e19bb',
  storageBucket: 'songlist-e19bb.appspot.com',
  messagingSenderId: '349314866617',
  appId: '1:349314866617:web:62e4b57ee15c978d8d6a68',
  measurementId: 'G-5V1ZQGE1JL'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
