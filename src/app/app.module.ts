import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeaComponent } from './tea/tea.component';
import { HomeComponent } from './home/home.component';
import { EditCoffeeComponent } from './coffee/edit-coffee/edit-coffee.component';
import { CoffeeService } from './coffee.service';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    PageNotFoundComponent,
    TeaComponent,
    HomeComponent,
    EditCoffeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
