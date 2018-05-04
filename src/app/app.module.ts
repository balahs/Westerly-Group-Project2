import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RichardComponent } from './richard/richard.component';
import { CuongComponent } from './cuong/cuong.component';
import { NickComponent } from './nick/nick.component';
import { MichaelComponent } from './michael/michael.component';
import { BalaComponent } from './bala/bala.component';


@NgModule({
  declarations: [
    AppComponent,
    RichardComponent,
    CuongComponent,
    NickComponent,
    MichaelComponent,
    BalaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
