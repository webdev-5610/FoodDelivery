import {Component} from '@angular/core';
import {User} from "./model/user.client.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web5610';
  user: User;
}
