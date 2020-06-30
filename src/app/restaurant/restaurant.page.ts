import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit { burgerProducts = [ 
  { imgPath: "https://www.thewholesomedish.com/wp-content/uploads/2019/04/The-Best-Classic-Hamburgers-550-500x500.jpg" , price :12.50 , name : 'burger'}
];
  
  onRestaurantClick() {
    this ._router.navigate([ 'view-product']);
  }
  viewProducts = [];
  constructor(private _router : Router  ) { }
  ngOnInit() {
    this.viewProducts = this.burgerProducts;
  }

}
var restaurant = [{
  name: 'adelmo', 
 address: '1114 los angeles',
 category: 'salvadoran'
}]; 

 function checkout (){ 

 };