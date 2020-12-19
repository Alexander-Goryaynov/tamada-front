import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user.service';

@Component({
  selector: 'app-verify-phone',
  templateUrl: './verify-phone.component.html',
  styleUrls: ['./verify-phone.component.css']
})
export class VerifyPhoneComponent implements OnInit {

  constructor(private userService: UserService) {
    // todo
  }

  ngOnInit(): void {
    // todo
  }

  verify(): boolean {
    // todo
    return false;
  }

}
