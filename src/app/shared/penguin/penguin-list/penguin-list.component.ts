import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PenguinModel } from '../models/penguin.class';


@Component({
  selector: 'app-penguin-list',
  templateUrl: './penguin-list.component.html',
  styleUrls: ['./penguin-list.component.css']
})
export class PenguinListComponent implements OnInit {

  penguins: PenguinModel[] = [
    {name: 'Rex', gender: 'M', age: 2, genus: 'African'},
    {name: 'Bobo', gender: 'M', age: 5, genus: 'King'},
    {name: 'Lea', gender: 'F', age: 2, genus: 'Gentoo'}
  ];

  @Output() penguinSelected = new EventEmitter<PenguinModel>();

  selectPenguin(penguin: PenguinModel) {
    this.penguinSelected.emit(penguin);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
