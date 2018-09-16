import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { storeKeeperService } from './services/storekeepers.service';
import { OrderService } from './services/orders.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [storeKeeperService, OrderService ]
})
export class AppComponent {
  store_keepers = [];
  orders = [];
  mainSelect = true;
  vehicleSelect = false;
  orderTypeSelect = false;
  resetButtom = false;
  coordinates = { north :'', south :'', east :'', west :'' }
  url =   {  url: './assets/images/1.png' }



  constructor(
    private http: HttpClient,
    private storeKeeperService: storeKeeperService,
    private OrderService: OrderService,


    ) { }

  ngOnInit() {

  }

   showFilter(e){
    switch(e) {
      case '1': this.vehicleSelect = true, this.mainSelect = false, this.resetButtom = true;
          break;
      case '2': this.orderTypeSelect = true, this.mainSelect = false, this.resetButtom = true;
          break;
      case 3: console.log('Call function')
          break;
      case 4: console.log('Call function')
          break;
      default: console.log('err',e)
    }
  }

  resetFilter(){
    this.resetButtom = false;
    this.mainSelect = true;
    this.orderTypeSelect = false;
    this.vehicleSelect = false;

  }

  coors(coors){
    console.log(coors)

  }

  async getStorekeepers(coordinates){
    const store_keepers = await this.storeKeeperService.getStoreKeepers(coordinates);
    this.store_keepers = store_keepers.data;

    this.coordinates.north = coordinates.f.f
    this.coordinates.south = coordinates.f.b
    this.coordinates.east = coordinates.b.f
    this.coordinates.west = coordinates.b.b


  }

  async getOrders(){
    this.orders = await this.OrderService.getOrders();

  }

  async getStorekeepersByVehicle(type){
     await this.storeKeeperService.getStorekeepersByVehicle({type, coordinates : this.coordinates});

  }

  async getOrdersByType(type){
    this.orders = await this.OrderService.getOrdersByType(type);

  }

}
