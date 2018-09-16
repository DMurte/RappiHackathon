import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class storeKeeperService {
  endPoint = 'http://localhost:3678/api/storekeepers/';

  constructor( private http: HttpClient ) { }


  async getStoreKeepers(coordinates) {
    const url = `${this.endPoint}`
    return this.http.post<any>(url, coordinates).toPromise();

  }

  async getStorekeepersByVehicle(params) {
    const url = `${this.endPoint}vehicle/`
    return this.http.post<any>(url, params).toPromise();

  }

}
