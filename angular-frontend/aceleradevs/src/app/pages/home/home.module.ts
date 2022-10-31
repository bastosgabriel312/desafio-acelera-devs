import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
    MatListModule,
    BrowserModule,
  ],
  declarations: [
    HomeComponent,
  ],
  exports:[
    HomeComponent,
    ]
})
export class HomeModule { }
