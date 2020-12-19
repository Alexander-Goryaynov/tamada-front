import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {slideInAnimation} from './route-animation';
import {Database} from './DataStorage/Database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'tamada-front';
  static database = Database.getInstance();
}
