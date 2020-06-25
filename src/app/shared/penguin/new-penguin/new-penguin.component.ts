import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PenguinModel } from '../models/penguin.class';
import { Router } from '@angular/router';
import { PenguinService } from '../services/penguin.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-penguin',
  templateUrl: './new-penguin.component.html',
  styleUrls: ['./new-penguin.component.css']
})
export class NewPenguinComponent implements OnInit {
  routes = {
    penguin: '/penguin',
  };

  genders = ['M', 'F'];
  newPenguin: PenguinModel;
  genus: string[];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: PenguinService,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
    this.getGenus();
  }

  buildForm(){
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      gender: ['M', [Validators.required]],
      genus: [null, [Validators.required]],
      age: [1, [Validators.required]]
    });
  }

  getGenus(){
    this.service.getGenus().subscribe(res => {
      this.genus = res;
    },
    (err) => {
      console.log('Could not download penguin genus');
    });
  }

  onSubmit() {
    this.service.addPenguin(this.form.value).subscribe(res => {
      console.log('Penguin created');
      this.router.navigate([this.routes.penguin]);
    },
    (err: HttpErrorResponse) => {
      console.log(err);
    })
  }

  onCancel() {
    this.router.navigate([this.routes.penguin]);
  }

}
