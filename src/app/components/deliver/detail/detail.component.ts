import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliverService } from 'src/app/services/deliver.service.client';
import { User } from 'src/app/model/user.client.model';
import { Order } from 'src/app/model/order.client.model';
import { SharedService } from 'src/app/services/shared.service';
import { OrderService } from '../../../services/order.service.client';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  userId: string;
  orderId: string;
  user: User;
  order: Order;
  status: string;
  distance: String;

  //initial center position
  lat: Number = 24.799448;
  lng: Number = 120.979021;
  //google maps zoom
  zoom: Number = 14;

    //Get Directions
  dir = undefined;

  markerOptions = {
    orgin: {
      infoWindow: 'You are here',
      draggable: false
    },
    destination: {
      label: 'Destination',
      draggable: false
    }
  };

  renderOptions = {
    supperssMarkers: true,
    draggable: false
  };

  constructor(private _activatedRoute: ActivatedRoute,
    private _deliverService: DeliverService,
    private _sharedService: SharedService,
    private _orderService: OrderService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.orderId = params['oid'];
      console.log('user id: ' + this.userId);

      this.user = this._sharedService.user;
      this.order = this._sharedService.selectedOrder;
      if (this.order.status === 3) {
        this.status = 'in transit';
      } else if (this.order.status === 2) {
        this.status = 'active';
      }
      this.getDirection();
    });
  }

  acceptOrder() {
    this._orderService.acceptOrder(this.userId, this.orderId).subscribe(
      data => {
          console.log(data);
          this.order.status = 3;
          this.status = 'in transit';
      },
      error =>{

      }
    );
  }

  completeOrder() {
    this._orderService.completeOrder(this.userId, this.orderId).subscribe(
      data => {
        console.log(data);
        this.order.status = 4;
        this.status = 'completed';
      },
      error =>{

      }
    );
  }

  cancelOrder() {
    this._orderService.cancelOrder(this.userId, this.orderId).subscribe(
      data => {
        console.log(data);
        this.order.status = 5;
        this.status = 'cancelled';
      },
      error =>{

      }
    );
  }

  calculateDistance(lat: Number, lng: Number, destination: String) {
    this._deliverService.calculate(lat.toString(), lng.toString(), destination).subscribe(
      (data: any) => {
        console.log('distance: ' + data.distance.text);
        this.distance = data.distance.text;
      }
    );
  }

  getDirection() {
    console.log(this.lat);
    console.log(this.lng);
    navigator.geolocation.getCurrentPosition( pos => {
      console.log(pos);
        this.lng = pos.coords.longitude;
        this.lat = pos.coords.latitude;
        this.dir = {
          origin: { lat: this.lat, lng: this.lng },
          destination: this.order.userAddress// { lat: 24.799524, lng: 120.975017 }
        };
        this.calculateDistance(this.lat, this.lng, this.order.userAddress);
      });
  }

}
