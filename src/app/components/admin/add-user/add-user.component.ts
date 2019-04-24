import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../model/user.client.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @ViewChild('form') signupForm: NgForm;
  newUsername: String;
  newPassword: String;
  regVerifiedPassword: String;
  user: any = {_id: '', username: '', password: '', userType: ''};
  userErrorMsg: String;
  userErrorFlag: boolean;
  registerRole: string;
  roles: string[] = ['Customer', 'Employee', 'Delivery', 'Admin'];


  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userErrorFlag = false;
    this.userErrorMsg = 'The username already exists! Please use a different name.';
  }

  register() {
    this.userService.findUserByUsername(this.newUsername).subscribe(
        (data: any) => {
          this.user = data;
        }
    );
    console.log(this.user._id);
      if (this.user._id !== '') {
          this.userErrorFlag = true;
          return;
      }
    this.user.username = this.newUsername;
    this.user.password = this.newPassword;
    console.log(this.registerRole);

    this.userService.register(this.user.username, this.user.password, this.registerRole)
        .subscribe(
            (data: any) => {
              console.log('input: ' + data);
              if (data) {
                // if (this.registerRole === 'Customer') {
                //   this.router.navigate(['menu']);
                // } else if (this.registerRole === 'Employee') {
                //   this.router.navigate(['restaurant/home']);
                // } else if (this.registerRole === 'Admin') {
                //   this.router.navigate(['admin/home']);
                // } else if (this.registerRole === 'Delivery') {
                //   this.router.navigate(['diliver']); // need edit
                // }
                  this.router.navigate(['admin/home']);

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
