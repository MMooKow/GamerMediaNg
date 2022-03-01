import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => this.users = users );
  }

  delistUser(user: User) {
    this.userService.delistUser(user).subscribe(() => this.users = this.users.filter(u => u.id !== user.id) );
  }


}
