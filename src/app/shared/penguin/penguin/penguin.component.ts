import { Component, OnInit } from '@angular/core';
import { PenguinModel } from '../models/penguin.class';

@Component({
  selector: 'app-penguin',
  templateUrl: './penguin.component.html',
  styleUrls: ['./penguin.component.css']
})
export class PenguinComponent implements OnInit {

  selectedPenguin: PenguinModel;

  onPenguinSelected(penguin: PenguinModel) {
    this.selectedPenguin = penguin;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
