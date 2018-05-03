import {DirectiveComponent} from './directive/directive.component';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {Routes} from '@angular/router';

export const myRoute: Routes = [
  {
    path: 'directives',
    component: DirectiveComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'app-string-interpolation',
    component: StringInterpolationComponent
  }
]

export let myvariable : number = 10;
