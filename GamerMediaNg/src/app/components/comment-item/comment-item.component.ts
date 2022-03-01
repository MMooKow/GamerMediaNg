import { Component, OnInit, Input} from '@angular/core';
import { Comment } from '../../Comment';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  @Input() comment: Comment;
  constructor() { }

  ngOnInit(): void {
  }


  incrementLikes() {
    this.comment.likes++;
    // add logic to stop both like and dislike on one account. posible database parameter toa dd
  }

  incrementDislikes() {
    this.comment.dislikes++;
  }

}
