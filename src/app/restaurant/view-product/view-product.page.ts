import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {
  public form = {
    val: 'classicHamburger', isChecked:false, val1: 'lol ', isChecked1: false,
    val2: ' llol', isChecked2:false,
    val3: 'lol ', isChecked3:false,
    val4: ' ccccc', isChecked4:false,
    
};
  classicHamburger: any;
  check() { 
    // if (this.classicHamburger.isChecked != "false"){ 
    //   this.dataService.setData(this.classicHamburger)
    // }
    console.log(this.form);
    this.dataService.setData(this.form)
  };
  constructor(private dataService:DataService) { 
   }
  
   ngOnInit() {
     
   }
   
};
