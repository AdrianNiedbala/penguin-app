import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PenguinComponent } from './penguin/penguin.component';
import { PenguinListComponent } from './penguin-list/penguin-list.component';
import { PenguinDetailsComponent } from './penguin-details/penguin-details.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PenguinComponent, PenguinListComponent, PenguinDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PenguinModule { }
