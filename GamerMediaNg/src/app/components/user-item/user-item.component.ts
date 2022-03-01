import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../User';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Output() onClickDelistUser: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delistUser(user: User) {
    this.onClickDelistUser.emit(this.user);
  }

}
