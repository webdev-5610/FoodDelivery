import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {User} from '../../../model/user.client.model';
import {Restaurant} from '../../../model/restaurant.client.model';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  admin: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.admin = this.sharedService.user;
  }

  deleteUser() {
    this.userService.deleteUser(this.admin._id).subscribe(
        (restaurant: Restaurant) => {
          console.log('delete admin: ' + this.admin._id);
          this.router.navigate(['/login']);
        },
        (error: any) => console.log(error)
    );
  }

  logout() {
    this.userService.logout().subscribe((data: any) => {
      this.sharedService.user = null;
      this.router.navigate(['/login']);
    });
  }

}
