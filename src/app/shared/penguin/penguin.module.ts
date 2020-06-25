import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PenguinComponent } from './penguin/penguin.component';
import { PenguinListComponent } from './penguin-list/penguin-list.component';
import { PenguinDetailsComponent } from './penguin-details/penguin-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NewPenguinComponent } from './new-penguin/new-penguin.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PenguinComponent, PenguinListComponent, PenguinDetailsComponent, NewPenguinComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PenguinModule { }
