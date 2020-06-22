import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PenguinModel } from '../models/penguin.class';
import { PenguinService } from '../services/penguin.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-penguin-list',
  templateUrl: './penguin-list.component.html',
  styleUrls: ['./penguin-list.component.css']
})
export class PenguinListComponent implements OnInit {

  penguins$: Observable<PenguinModel[]>;

  @Output() penguinSelected = new EventEmitter<PenguinModel>();

  selectPenguin(penguin: PenguinModel) {
    this.penguinSelected.emit(penguin);
  }

  constructor(private penguinService: PenguinService) { }

  ngOnInit(): void {
    this.penguins$ = this.penguinService.getAll();
  }

}
