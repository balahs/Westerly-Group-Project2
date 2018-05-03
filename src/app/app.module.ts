import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {myRoute} from './app.routing';
import {DirectiveComponent} from './directive/directive.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {PipesComponent} from './pipes/pipes.component';
import {StringInterpolationComponent} from './string-interpolation/string-interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    NavbarComponent,
    HomeComponent,
    WelcomeComponent,
    PipesComponent,
    StringInterpolationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
