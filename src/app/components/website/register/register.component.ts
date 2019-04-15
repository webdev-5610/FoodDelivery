import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service.client";
import {NgForm} from "@angular/forms";
import {User} from "../../../model/user.client.model";

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

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userErrorFlag = false;
    this.userErrorMsg = 'The username already exists! Please use a different name.';
  }

  register() {
    this.user.username = this.newUsername;
    this.user.password = this.newPassword;
    this.userService.register(this.user.username, this.user.password)
        .subscribe(
            (data: any) => {
              if (data) {
                this.router.navigate(['/profile']);
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

  onCancel() {
    this.router.navigate(['/login']);
  }

}
