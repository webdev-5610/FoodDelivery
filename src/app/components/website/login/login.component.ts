import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {UserService} from "../../../services/user.service.client";
import {Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service";
import {EmployeeService} from "../../../services/employee.service.client";


@Component({
  selector: 'app-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  baseUrl = environment.baseUrl;
  loginrole: string;
  roles: string[] = ['Customer', 'Employee','Delivery', 'Admin'];

  constructor(private userService: UserService,
              private employeeService: EmployeeService,
  private router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
    console.log('Login page!' + this.username);
  }
  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    console.log('data', this.username);
    if(this.loginrole === 'Customer'){
      this.userService.login(this.username, this.password).subscribe(
          (data: any) => {
            this.sharedService.user = data;
            this.router.navigate(['user/home']);
          }, (error: any) => {
            this.errorFlag = true;
          } )
    } else if( this.loginrole ==='Employee'){
      this.employeeService.login(this.username,this.password).subscribe(
          (data: any) => {
            this.sharedService.user = data;
            this.router.navigate(['restaurant/home']);
          }, (error: any) => {
            this.errorFlag = true;
          }
      )
    }

  }

}
