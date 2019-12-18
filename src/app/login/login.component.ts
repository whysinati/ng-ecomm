import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //create new instance of User object
  user:User = new User();

  //instantiate an errors array
  error: any;

  constructor(private userService: UserService) { 
    // console.log(this.userService.test());
    //update the constructor to subscribe to the test method
    // this.userService.test().subscribe(
    //   (response)=>{
    //     console.log(response);
    //   }
    // )
    // this.login();
  }

  ngOnInit() {
  }

  login(): void{

    // this.user.username = 'xxxxx';
    // this.user.password = 'xxxxx';

    this.userService.login(this.user).subscribe(
      // (response)=>{
      //add :any to also accept errors (otherwise the success property gets angry)
      (response:any)=>{
        // console.log(response); //use for confirming submission
        //for the new error array instantiation
        if(response.success == false){
          this.error=true;
        }
      }
    );
  }

}
