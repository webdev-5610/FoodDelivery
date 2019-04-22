import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {UserService} from "../../../services/user.service.client";
import {Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-login',
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
  private router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
    console.log('Login page!' + this.username);
  }
  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    console.log('data:' + this.username +  this.loginrole);
    this.userService.login(this.username, this.password,this.loginrole).subscribe(
        (data: any) => {
            this.sharedService.user = data;
            if(this.loginrole === 'Customer'){
                this.router.navigate(['/menu']);
            }else if(this.loginrole === 'Delivery'){
                this.router.navigate(['/deliver/' + data._id + '/home']);
            }else if(this.loginrole === 'Employee'){
                this.router.navigate(['restaurant/home']);
            }else if(this.loginrole === 'Admin') {
                this.router.navigate( ['admin/home']);
            }
            }, (error: any) => {
            this.errorFlag = true;
        } );
  }

}
