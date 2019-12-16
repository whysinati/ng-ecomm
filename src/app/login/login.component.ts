import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { 
    // console.log(this.userService.test());
    //update the constructor to subscribe to the test method
    this.userService.test().subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }

  ngOnInit() {
  }

}
