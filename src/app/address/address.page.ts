import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  add: string = "";
   mirrorData = {}
  sendAddress(){
    this.mirrorData = {mirrodata: this.add};
    this.dataService.setData( this.mirrorData);
    // this.mirrorData = { mirrordata: ""}
    
  }
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
  }

}
