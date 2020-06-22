import { Injectable } from '@angular/core';
import { PenguinModel } from '../models/penguin.class';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PenguinService {

  routes = {
    penguin: `${environment.API_URL}/penguins`
  };

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<PenguinModel[]> {
    return this.httpClient.get<PenguinModel[]>(this.routes.penguin);
  }
}
