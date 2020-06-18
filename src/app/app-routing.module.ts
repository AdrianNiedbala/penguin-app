import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home/home.component';
import { PenguinComponent } from './shared/penguin/penguin/penguin.component';


const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'penguin', component: PenguinComponent},
{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: '**', component: HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
