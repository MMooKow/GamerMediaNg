import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/Posts';
import { Comment } from '../../Comment';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {

  @Input() comment: Comment;
  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
