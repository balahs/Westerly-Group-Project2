<<<<<<< HEAD
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BalaComponent} from './bala/bala.component';
import {CuongComponent} from './cuong/cuong.component';
import {MichaelComponent} from './michael/michael.component';
import {NickComponent} from './nick/nick.component';
import {RichardComponent} from './richard/richard.component';
import {AppRoutingModule} from './/app-routing.module';
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RichardComponent } from './richard/richard.component';
import { CuongComponent } from './cuong/cuong.component';
import { NickComponent } from './nick/nick.component';
import { MichaelComponent } from './michael/michael.component';
import { BalaComponent } from './bala/bala.component';

>>>>>>> 078292cc937b2b4157bb54449646b95863a2cb41

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarComponent,
    BalaComponent,
    CuongComponent,
    MichaelComponent,
    NickComponent,
    RichardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
=======
    RichardComponent,
    CuongComponent,
    NickComponent,
    MichaelComponent,
    BalaComponent
  ],
  imports: [
    BrowserModule
>>>>>>> 078292cc937b2b4157bb54449646b95863a2cb41
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
