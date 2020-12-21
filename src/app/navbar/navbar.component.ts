import { Component, OnInit } from '@angular/core';
import {Role} from '../Enums/role';
import {JwtResponse} from '../Models/jwtResponse';
import {UserService} from '../Services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private role: Role;
  private user: JwtResponse;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
  }

}
