import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { User } from '../shared/user.class';
@Injectable({
  providedIn: 'root'
})
export class AuthService{
  [x: string]: any;
  
   public isLogged: any = false;
  constructor (public afAuth: AngularFireAuth){
  afAuth.authState.subscribe(user => (this.isLogged = user ));
  }
  async onLogin( user:User ){
    try{
      return await this.afAuth.signInWithEmailAndPassword( user.email,user.password);
    } catch (error ){
      console.log ( "error on login", error);
    }
  }
  async onRegister ( user: User){
    try{
      return await this.afAuth.createUserWithEmailAndPassword( user.email,user.password);
    } catch (error ){
      console.log ( "error on REGISTER", error);
    } 
  }
} 

export class DataService  {
 data:any; 
 address:any;

  constructor() { }
  setData(data){
    this.data = data;
    console.log(this.data);
  }
  setAddress(address){
    this.address = address;
    console.log(this.address);
  }

  getData(){
    var payload = {data: this.data, address: this.address};
    console.log(payload);
    return payload;
  }
}
