import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class OrderService {
  endPoint = 'http://localhost:3678/api/orders/'

  constructor( private http: HttpClient ) { }


  async getOrders() {
    const url = `${this.endPoint}`
    return this.http.get<any>(url).toPromise();

  }

  async getOrdersByType(params) {
    const url = `${this.endPoint}type/`
    return this.http.post<any>(url, params).toPromise();

  }



}



