import { Component } from '@angular/core';

import { BlogService } from '../blog.service'

import { Post } from '../post'

@Component({
  selector: 'app-blog-all',
  templateUrl: './blog-all.component.html',
  styleUrls: ['./blog-all.component.scss']
})
export class BlogAllComponent {

	private posts: Post[] = [];

	constructor(
  	private blogService: BlogService) {
  	
  	}

  	ngOnInit() {
  		this.setPosts()

  		this.blogService.getPosts()
      		.subscribe(posts => this.setPosts())

      	this.blogService.postsChange$.subscribe(
      		content => this.setPosts());

        this.blogService.filterChange$.subscribe(
          filter => this.blogService.getPostsFiltered(filter)
                      .subscribe(posts => this.setPosts())
          );

  	}

  	setPosts() {
  		this.posts = this.blogService.retPosts()
  	}


}
