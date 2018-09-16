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
  latitude = 4.70551625403494;
  longitude = -74.03951118339762;
  mainSelect = true;
  vehicleSelect = false;
  orderTypeSelect = false;
  resetButtom = false;

  url =   {  url: './assets/images/1.png' }



  constructor(
    private http: HttpClient,
    private storeKeeperService: storeKeeperService,
    private OrderService: OrderService,


    ) { }

  ngOnInit() {
    const coordinates =  {
      north : 4.720485837123973,
      south : 4.690546349010519,
      east : -74.06423042167887,
      west : -74.01487777580485

    }

    this.getStorekeepers(coordinates);


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

  bounds(bounds){
    console.log(bounds)
  }

  async getStorekeepers(coordinates){
    const store_keepers = await this.storeKeeperService.getStoreKeepers(coordinates);
    this.store_keepers = store_keepers.data


  }

  async getOrders(){
    this.orders = await this.OrderService.getOrders();

  }

  async getStorekeepersByVehicle(type){
    console.log(type)
    // this.store_keepers = await this.storeKeeperService.getStorekeepersByVehicle(type);

  }

  async getOrdersByType(type){
    console.log(type)
    // this.orders = await this.OrderService.getOrdersByType(type);

  }

  async getByGeoHash(hash){

  }

}
