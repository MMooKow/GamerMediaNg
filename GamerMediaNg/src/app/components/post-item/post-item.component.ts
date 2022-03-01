import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Post } from '../../Posts';
import { Comment } from '../../Comment';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @ViewChild('comments') comment: Comment;
  @Input() post: Post;
  
  constructor() { }

  ngOnInit(): void {
  }

  incrementLikes() {
    this.post.likes++;
    // add logic to stop both like and dislike on one account. posible database parameter toa dd
  }

  incrementDislikes() {
    this.post.dislikes++;
  }

}
