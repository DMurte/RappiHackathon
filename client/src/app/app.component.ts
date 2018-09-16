import { Component } from '@angular/core';
import { storeKeeperService } from './services/storekeepers.service';
import { OrderService } from './services/orders.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [storeKeeperService, OrderService ]
})

export class AppComponent {
  markers = [];
  ordersType = '';
  vehicleType = '';
  loading = false;
  mainSelect = true;
  resetButtom = false;
  vehicleSelect = false;
  orderTypeSelect = false;
  coordinates = {
    north :'',
    south :'',
    east :'',
    west :''
  }


  constructor(
    private storeKeeperService: storeKeeperService,
    private OrderService: OrderService,

    ) { }


   showFilter(e){
    switch(e) {
      case '1': this.vehicleSelect = true, this.mainSelect = false, this.resetButtom = true;
          break;
      case '2': this.orderTypeSelect = true, this.mainSelect = false, this.resetButtom = true;
          break;
      case '3': this.ordersSaturation();
          break;
      case '4': this.vehiclesSaturation();
          break;
      default: console.log('err',e)
    }
  }



  async getMarkers(coordinates){
    if(!this.resetButtom){
      const store_keepers = await this.storeKeeperService.getStoreKeepers(coordinates);
      this.markers = store_keepers.data;

    }else{
      if(this.ordersType == ''){
        const store_keepers = await this.storeKeeperService.getStorekeepersByVehicle({type : this.vehicleType, coordinates : this.coordinates})
        this.markers = store_keepers.data;

      }else{
        const orders = await this.OrderService.getOrdersByType({type : this.ordersType, coordinates : this.coordinates});
        this.markers = orders.data;

      }
    }

    this.coordinates.north = coordinates.f.f
    this.coordinates.south = coordinates.f.b
    this.coordinates.east = coordinates.b.f
    this.coordinates.west = coordinates.b.b

  }

  resetFilter(){
    this.vehicleType = '';
    this.ordersType = '';
    this.mainSelect = true;
    this.resetButtom = false;
    this.vehicleSelect = false;
    this.orderTypeSelect = false;

  }

  async getOrders(coordinates){
    const orders = await this.OrderService.getOrders(coordinates);
    this.markers = orders.data;

  }

  async getStorekeepersByVehicle(type){
    this.markers = [];
    const store_keepers = await this.storeKeeperService.getStorekeepersByVehicle({type, coordinates : this.coordinates});
    this.vehicleType = type
    this.markers = store_keepers.data;

  }

  async getOrdersByType(type){
    const orders = await this.OrderService.getOrdersByType({type, coordinates : this.coordinates});
    this.markers = orders.data
    this.ordersType = type;

  }

  async ordersSaturation(){
    console.log('ordersSaturation');

  }

  async vehiclesSaturation(){
    console.log('vehiclesSaturation');


  }

}
