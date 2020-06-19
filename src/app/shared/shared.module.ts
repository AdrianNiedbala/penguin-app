import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PenguinModule } from './penguin/penguin.module';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PenguinModule
  ],
  exports: [
    HeaderComponent,
    RouterModule
  ]
})
export class SharedModule { }
