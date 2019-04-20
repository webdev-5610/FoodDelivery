import { Component, OnInit } from '@angular/core';
import {Menu} from '../../../model/restaurant.client.model';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {MenuService} from '../../../services/menu.service.client';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userId: String;
  dishes: Menu[];
  startIndex: Number;
  endIndex: Number;
  constructor(private  menuService: MenuService,
              private sharedService: SharedService,
              private router: Router,
              private route: ActivatedRoute) {
    this.startIndex = 0;
    this.endIndex = 0;
  }

  ngOnInit() {
    // this.userId = this.sharedService.user._id;
    this.menuService.findAllDishesForRestaurant().subscribe(
        (dishes: any) => {
          this.dishes = dishes;
          console.log(this.dishes);
        }
    );
  }

  onNewIndexes(newIndexes) {
    this.startIndex = newIndexes.startIndex;
    this.endIndex = newIndexes.endIndex;
    this.menuService.reorderDishes(this.startIndex, this.endIndex, this.dishes)
        .subscribe();
  }

  refresh() {
    this.router.navigate(['restaurant/menu']);

  }

}
