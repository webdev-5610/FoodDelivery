import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service.client";
import {NgForm} from "@angular/forms";
import {User} from "../../../model/user.client.model";
import {RestaurantService} from "../../../services/restaurant.service.client";
import {EmployeeService} from "../../../services/employee.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('form') signupForm: NgForm;
  newUsername: String;
  newPassword: String;
  regVerifiedPassword: String;
  user: any = {_id: '', username: '', password: ''};
  userErrorMsg: String;
  userErrorFlag: boolean;
  registerRole: string;
  roles: string[] = ['Customer', 'Employee','Delivery'];
  //roleErrorFlag: boolean

  constructor(private userService: UserService, private router: Router,
              private  employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.userErrorFlag = false;
    this.userErrorMsg = 'The username already exists! Please use a different name.';
  }

  register() {
    this.user.username = this.newUsername;
    this.user.password = this.newPassword;
    console.log(this.registerRole);
    if(this.registerRole === 'Customer'){
      this.userService.register(this.user.username, this.user.password)
          .subscribe(
              (data: any) => {
                  console.log('input: ' + data);
                if (data) {
                  this.router.navigate(['user/home']);
                } else {
                  this.userErrorFlag = true;
                  console.log(this.userErrorFlag);
                }
              },
              (error: any) => {
                if (error) {
                  console.log(error);
                }
              }
          );
    }else if ( this.registerRole === 'Employee'){
      this.employeeService.register(this.user.username, this.user.password)
          .subscribe(
              (data: any) => {
                if (data) {
                  this.router.navigate(['restaurant/home']);
                } else {
                  this.userErrorFlag = true;
                  console.log(this.userErrorFlag);
                }
              },
              (error: any) => {
                if (error) {
                  console.log(error);
                }
              }
          );
    }


  }

  onCancel() {
    this.router.navigate(['/login']);
  }

}
