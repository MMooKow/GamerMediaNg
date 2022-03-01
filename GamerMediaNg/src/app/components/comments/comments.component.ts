import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Post } from '../../Posts';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from '../../Comment'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() post: Post;


  comments: Comment[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe((comments) => this.comments = comments );
  }



}
