import { Component, OnInit } from '@angular/core';
import { RestaurantApiService } from '../restaurant-api.service';


@Component({
  providers:  [ RestaurantApiService ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:any = [];

  constructor(private restaurantApiService: RestaurantApiService) { }

  ngOnInit() {
    this.products = [];
    this.restaurantApiService.getRestaurants().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    });
  }

}
