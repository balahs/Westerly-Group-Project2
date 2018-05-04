import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BalaComponent} from './bala/bala.component';
import {CuongComponent} from './cuong/cuong.component';
import {MichaelComponent} from './michael/michael.component';
import {NickComponent} from './nick/nick.component';
import {RichardComponent} from './richard/richard.component';

const routes: Routes = [
  {path: 'bala', component: BalaComponent},
  {path: 'cuong', component: CuongComponent},
  {path: 'michael', component: MichaelComponent},
  {path: 'nick', component: NickComponent},
  {path: 'richard', component: RichardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
