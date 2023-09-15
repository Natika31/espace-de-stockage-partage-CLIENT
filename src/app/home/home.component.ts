import { Component, OnInit } from '@angular/core';
import { myUser } from './myUser';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentUser: myUser = {
    recipient_id: '1',
    name: 'user name',
    mail: 'user@me',
    item_type: 'user',
    root: {
      item_id: '1',
      item_local_path: './home',
      name: 'home',
      item_type: 'folder',
      children: [],
    },
    children: [],
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  getUserData(): void {
    this.userService
      .getUserById(this.currentUser.recipient_id)
      .subscribe((user) => {
        this.setCurrentUser(user);
      });
  }

  public getCurrentUser(): myUser {
    return this.currentUser;
  }
  public setCurrentUser(value: myUser) {
    this.currentUser = value;
  }

  ngOnInit(): void {
    this.getUserData();
  }
}
