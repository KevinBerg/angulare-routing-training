import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoffeeComponent } from './coffee/coffee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { TeaComponent } from './tea/tea.component';
import { EditCoffeeComponent } from './coffee/edit-coffee/edit-coffee.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'coffee', component: CoffeeComponent, children: [
    { path: 'edit/:name', component: EditCoffeeComponent }
  ] },
  { path: 'tea', component: TeaComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
