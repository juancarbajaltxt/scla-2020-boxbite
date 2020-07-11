import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 data:any; 

  constructor() { }
  setData(data ){
    this.data = data;
    console.log(this.data);

  }
  getData(){
    return this.data;
    console.log(this.data);
  }
}
