import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StoreKeepersService } from './services/storekeepers.service';
import { OrdersService } from './services/orders.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StoreKeepersService]
})
export class AppComponent {
  store_keepers = [];
  orders = [];
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(
    private http: HttpClient,
    private storeKeepersService: StoreKeepersService,
    private ordersService: OrdersService,


    ) { }

  ngOnInit() {
    this.getStorekeepers();
    this.getOrders();


  }

  async getStorekeepers(){
    this.store_keepers = await this.storeKeepersService.getStoreKeepers();


  }

  async getOrders(){
    this.orders = await this.ordersService.getOrders();

  }


  async getStorekeepersByVehicle(type){
    this.store_keepers = await this.storeKeepersService.getStorekeepersByVehicle(type);

  }

  async getOrdersByType(type){
    this.orders = await this.ordersService.getOrdersByType(type);

  }

  async getByGeoHash(hash){

  }

}
