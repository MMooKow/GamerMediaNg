import { TestBed } from '@angular/core/testing';

import { Post.ServiceService } from './post.service.service';

describe('Post.ServiceService', () => {
  let service: Post.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Post.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
