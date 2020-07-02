import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {

  constructor(private router : Router ) { 
   }
  onProductClick() {
    this.router.navigate ([ './view-product/info-product'])
   }
   ngOnInit() {
   }

}
