import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type: "application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private Http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getBikes() {
    return this.Http.get('/server/api/v1/bikes');
  }
}
