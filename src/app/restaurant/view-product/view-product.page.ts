import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {
  public form = [ 
    {val: 'classicHamburger', isChecked:false},
    {val: ' ', isChecked: false},
    {val: ' ', isChecked:false},
    {val: ' ', isChecked:false},
    {val: ' ', isChecked:false},
  ]
  dataService: any;
  classicHamburger: any;
  check() { 
    if (this.classicHamburger.isChecked != "false"){ 
      this.dataService.setData(this.classicHamburger)
    }
  };
  constructor( ) { 
   }
  
   ngOnInit() {
     
   }
   
  
}
