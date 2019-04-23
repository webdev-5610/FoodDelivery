import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {User} from '../../../model/user.client.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  errorMsg = 'Invalid email address !';

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) {
    this.user = new User('11', '1', '11', '11', '11', '11', '11', '11');
  }

  userId: String;
  user: User;
  username: String;
  updateFlag: boolean;
  updateMsg: String;
  userErrorFlag: boolean;
  userErrorMsg: String;

  updateUser(user: User) {
    this.updateFlag = false;
    this.userErrorFlag = false;
    if (this.username !== this.user.username) {
      this.userService.findUserByUsername(this.username).subscribe(
          (user: User) => {
            if (typeof user._id !== 'undefined') {
              this.userErrorFlag = true;
            } else {
              this.user.username = this.username;
              this.updateProfile();
            }
          },
          (error: any) => console.log(error)
      );
    } else {
      this.updateProfile();
    }
  }

  updateProfile() {
    this.userService.updateUser(this.user._id, this.user).subscribe(
        (user: User) => {
          console.log(user);
          this.user = user;
          this.updateFlag = true;
        },
        (error: any) => {
          console.log(error);
        }
    );
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.sharedService.user._id;
    this.route.params.subscribe(params => {
      this.updateFlag = false;
      this.userErrorFlag = false;
      this.updateMsg = 'Profile updated!';
      this.userErrorMsg = 'The username already exists! Please use a different name.';
      this.userService.findUserById(this.userId).subscribe(
          (user: User) => {
            console.log((user));
            this.user = user;
            this.username = this.user.username;
          },
          (error: any) => console.log(error)
      );
    });
  }
    logout() {
        this.userService.logout().subscribe(
            (data: any) => this.router.navigate(['../']));
    }

}
