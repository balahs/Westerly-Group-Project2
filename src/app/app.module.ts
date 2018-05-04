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

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
