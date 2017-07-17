import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// AngularFire database config
export const firebaseConfig = {
  apiKey: 'AIzaSyA6m_Uo6vxDQr4vZJwbagsltEoztVaJx4k',
  authDomain: 'lfgamers-4ade1.firebaseapp.com',
  databaseURL: 'https://lfgamers-4ade1.firebaseio.com',
  projectId: "lfgamers-4ade1",
  storageBucket: 'lfgamers-4ade1.appspot.com',
  messagingSenderId: '928460245100'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
