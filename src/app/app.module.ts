import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//router
import {RouterModule,Router} from '@angular/router';


import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { BooksComponent } from './view1/books/books.component';
//httpservice
import { HttpServiceService } from './http-service.service';
//http client module
import { HttpClientModule } from '@angular/common/http';
import { HousesComponent } from './view1/houses/houses.component';
import { CharacterComponent } from './view1/character/character.component';


@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    BooksComponent,
    HousesComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'view1',component:View1Component},
      {path:'',redirectTo:'view1',pathMatch:'full'},
      {path:'book/:url',component:BooksComponent},
      {path:'houses/:url',component:HousesComponent},
      {path:'character/:url',component:CharacterComponent}
    
    ])
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
