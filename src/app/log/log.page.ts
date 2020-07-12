import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../services/data.service';
import { User } from 'src/app/shared/user.class';
@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})
export class LogPage implements OnInit {
  user: User = new User();

  constructor( private authSvc : AuthService, private router : Router ) { }

  ngOnInit() {
  }
async onRegister (){
  const user = await this.authSvc.onRegister(this.user);
  if ( user ){
    console.log ( 'succes created user'); 
    this.router.navigateByUrl('/driver')
  }
}
}
