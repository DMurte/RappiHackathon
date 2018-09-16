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
  markers = [];
  orders = [];
  mainSelect = true;
  loading = false
  resetButtom = false;
  vehicleSelect = false;
  orderTypeSelect = false;
  vehicleType = ''
  ordersType = ''
  url = {  url: './assets/images/1.png' }
  coordinates = { north :'', south :'', east :'', west :'' }



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



  coors(coors){
    console.log(coors)

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
    this.resetButtom = false;
    this.mainSelect = true;
    this.orderTypeSelect = false;
    this.vehicleSelect = false;
    this.vehicleType = '';
    this.ordersType = '';


  }

  async getOrders(){
    const orders = await this.OrderService.getOrders();
    this.orders = orders.data

  }

  async getStorekeepersByVehicle(type){
    this.markers = [];
    this.vehicleType = type
    const store_keepers = await this.storeKeeperService.getStorekeepersByVehicle({type, coordinates : this.coordinates});
    this.markers = store_keepers.data;

  }

  async getOrdersByType(type){
    const orders = await this.OrderService.getOrdersByType({type, coordinates : this.coordinates});
    this.markers = orders.data
    this.ordersType = type;
  }

}
