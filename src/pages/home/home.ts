import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodServiceProvider } from '../../providers/food-service/food-service';  
import { Observable } from 'rxjs';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private foodService: FoodServiceProvider) {
   this.getFoodList();
  }

  getFoodList() {
    this.foodService.getFood().subscribe(data => console.log(data));
  }

}
