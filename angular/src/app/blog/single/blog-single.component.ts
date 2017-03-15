import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {BlogService} from '../blog.service'
import {Post} from '../post'
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent {

	private subscription:any;
	private id: string;
	private post: Post;
	private invalid: boolean = false;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private blogService: BlogService) {
	}

	ngOnInit() {
		this.subscription = this.route.params.subscribe(params => {
			this.id = String(params['id'])
			this.blogService.getPostById(this.id)
				.subscribe(
					post => this.setPost(post),
					err => this.setInvalid())
		})
	}

	setPost(post) {
		this.post = post;
	}

	setInvalid() {
		this.invalid = true;
	}

}
