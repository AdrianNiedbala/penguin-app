import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PenguinComponent } from './penguin/penguin.component';
import { PenguinListComponent } from './penguin-list/penguin-list.component';
import { PenguinDetailsComponent } from './penguin-details/penguin-details.component';
import { PenguinModel } from './models/penguin.class';



@NgModule({
  declarations: [PenguinComponent, PenguinListComponent, PenguinDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class PenguinModule { }
