import {Component} from '@angular/core';
import {User} from './models/user.model.client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web5610';
  user: User;
}
