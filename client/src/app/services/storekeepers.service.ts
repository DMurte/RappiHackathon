import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class StoreKeepersService {
  endPoint = 'http://localhost:3678/api/storekeepers/'

  constructor( private http: HttpClient ) { }


  async getStoreKeepers() {
    const url = `${this.endPoint}`
    return this.http.get<any>(url).toPromise();

  }

  async getStorekeepersByVehicle(type) {
    const url = `${this.endPoint}vehicle/${type}`
    return this.http.get<any>(url).toPromise();

  }



}
