import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../model/user.client.model';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  //user: User;
  customers: any = [];
  admins: any = [];
  employee: any = [];
  delivers: any = [];

  constructor(private userService: UserService, private  sharedService: SharedService,
              private router: Router, private activeroute: ActivatedRoute) { }

  ngOnInit() {
    //this.sharedService.user = this.user;
    this.userService.findAllUsersByType('Admin').subscribe(
        (users: any) => {
          this.admins = users;
        }
    );
    this.userService.findAllUsersByType('Employee').subscribe(
        (users: any) => {
          this.employee = users;
        }
    );
    this.userService.findAllUsersByType('Customer').subscribe(
        (users: any) => {
          this.customers = users;
        }
    );
    this.userService.findAllUsersByType('Delivery').subscribe(
        (users: any) => {
          this.delivers = users;
        }
    );
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user._id).subscribe(
        () => {
        }
    );
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return true;
    };
  }

}
