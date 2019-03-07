import { Component, OnInit } from '@angular/core';
import { RestaurantApiService } from '../restaurant-api.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  providers:  [ RestaurantApiService ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurants:any = [];
  headers:any = [];

  constructor(private restaurantApiService: RestaurantApiService,
              private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.restaurants = [];
    this.restaurantApiService.getRestaurants().subscribe((result: []) => {
      this.headers = result['data'][0];
      this.restaurants = result['data'].slice(1, result.length);
      this.spinnerService.hide();
    });
  }

}
