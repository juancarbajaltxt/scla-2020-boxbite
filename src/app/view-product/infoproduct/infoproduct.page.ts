import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoproduct',
  templateUrl: './infoproduct.page.html',
  styleUrls: ['./infoproduct.page.scss'],
})
export class InfoproductPage implements OnInit {
 variants = [ {
   name : "burger ", 
   price : 10
  
 }
//  addOns = [ 
//    {
//      name : "curly fries ", price : 10 
//    }
//  ]
 ]
  constructor() { }

  ngOnInit() {
  }

}
