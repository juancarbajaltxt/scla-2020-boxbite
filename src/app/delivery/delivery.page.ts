import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
  providers:[DataService],
})
export class DeliveryPage implements OnInit {
 lol:any;
  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.lol= this.dataService.getData();
    console.log(this.lol);
  }
  

}
