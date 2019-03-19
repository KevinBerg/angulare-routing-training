import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoffeeComponent } from './coffee/coffee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { TeaComponent } from './tea/tea.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'coffee', component: CoffeeComponent },
  { path: 'tea', component: TeaComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
