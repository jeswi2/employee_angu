import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { RouterModule,Routes } from '@angular/router';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const appRoutes:Routes=[
  
  {
    path:"",component:ViewemployeeComponent
  },
  {
    path:"add",component:AddemployeeComponent
  }
  
  

  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddemployeeComponent,
    ViewemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
