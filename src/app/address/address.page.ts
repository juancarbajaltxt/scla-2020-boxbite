import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
  providers:[DataService],
})
export class AddressPage implements OnInit {

  add: string = "";
  sendAddress(){
    var payload = this.add;
    console.log(payload);
    this.dataService.setAddress(payload);
    // this.mirrorData = { mirrordata: ""}
    
  }
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
  }

}
