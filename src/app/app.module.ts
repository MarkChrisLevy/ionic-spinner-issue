import {NgModule, ModuleWithProviders} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule, FirestoreSettingsToken} from "@angular/fire/firestore";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyACkS2lYh-KO9YGPfEVDfrIvHlB8QrWr00",
      authDomain: "dev-test-17b7a.firebaseapp.com",
      databaseURL: "https://dev-test-17b7a.firebaseio.com",
      projectId: "dev-test-17b7a",
      storageBucket: "dev-test-17b7a.appspot.com",
      messagingSenderId: "35542723106"
    }),
    {
      ngModule: AngularFirestoreModule, providers: [
        {provide: FirestoreSettingsToken, useValue: {}}
      ]
    } as ModuleWithProviders
  ],
  providers: [
      StatusBar,
      SplashScreen,
      {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
