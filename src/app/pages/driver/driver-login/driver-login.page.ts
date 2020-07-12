import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from 'src/app/services/data.service';
import { User } from 'src/app/shared/user.class';


@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.page.html',
  styleUrls: ['./driver-login.page.scss'],
})
export class DriverLoginPage   implements OnInit{
user: User = new User();
  constructor( private router: Router, private authSvc: AuthService ) { }
 
 ngOnInit(){

 }

 async  onLogin() {  
   const user = await this.authSvc.onLogin (this.user)
   if (user){ 
     console.log ( 'successfully logged in' );
     this.router.navigateByUrl('/driver');
   }

  }
  

}
