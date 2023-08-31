import { Component } from '@angular/core';
import { myUser } from './myUser';
import { UserService } from './user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  currentUser: myUser = {
    user_id: '1',
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
  };

  constructor(private userService: UserService) {}

  getUserData(): void {
    this.userService.getUserById(this.currentUser.user_id).subscribe((user) => {
      this.setCurrentUser(user);
    });
  }

  public getCurrentUser(): myUser {
    return this.currentUser;
  }
  public setCurrentUser(value: myUser) {
    this.currentUser = value;
    console.log(
      'HomeComponent > setCurrentUser(value: myUser) > user: ',
      this.currentUser
    );
  }

  ngOnInit(): void {
    this.getUserData();
  }
}
