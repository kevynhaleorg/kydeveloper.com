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

	private postsSubscription: any;

	constructor(
  	private blogService: BlogService) {
  	
  	}

  	ngOnInit() {
  		this.blogService.getPosts()
      		.subscribe(posts => this.setPosts())

      	this.postsSubscription = this.blogService.postsChange$.subscribe(
      		content => this.setPosts());

  	}

  	setPosts() {
  		this.posts = this.blogService.retPosts()
  	}


}
