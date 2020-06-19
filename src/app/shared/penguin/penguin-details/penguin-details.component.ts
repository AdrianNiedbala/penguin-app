import { Component, OnInit, Input } from '@angular/core';
import { PenguinModel } from '../models/penguin.class';

@Component({
  selector: 'app-penguin-details',
  templateUrl: './penguin-details.component.html',
  styleUrls: ['./penguin-details.component.css']
})
export class PenguinDetailsComponent implements OnInit {

  @Input()
  selectedPenguin: PenguinModel;

  constructor() { }

  ngOnInit(): void {
  }

}
