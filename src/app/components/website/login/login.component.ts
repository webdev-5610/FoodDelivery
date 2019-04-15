import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {UserService} from "../../../services/user.service.client";
import {Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service";


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
  roles: string[] = ['Customer', 'Employee', 'Admin'];

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {
    // this.username = 'hello world!';
  }

  ngOnInit() {
    console.log('Login page!' + this.username);
  }
  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    console.log('data', this.username);
    this.userService.login(this.username, this.password).subscribe(
        (data: any) => {
          this.sharedService.user = data;
          this.router.navigate(['/home']);
        }, (error: any) => {
          this.errorFlag = true;
          // this.errorMsg = error;
          // console.log(this.errorMsg);
        } );
  }

}
