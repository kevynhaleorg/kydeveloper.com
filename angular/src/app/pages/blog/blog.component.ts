import { Component } from '@angular/core';
import { BlogService } from './blog.service'
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {

	filterChanged: Subject<string> = new Subject<string>();	
	showNav: boolean = true;
	hideLoading: boolean = true;

	constructor(
		private blogService: BlogService) {

	}

	ngOnInit() {
		// debounce keystroke events
	    this.filterChanged
	      .debounceTime(500)
	      .subscribe(filter => this.searchPosts(filter));

	      this.showNav = this.blogService.getBlogNav();

	      this.blogService.blogNavChange$.subscribe(
	          state => this.showNav = state
          );

          this.blogService.filterLoadingChange$.subscribe(
	          state => setTimeout(this.setHideLoading, 500, state, this)
          );

	}

	searchPostsChange(filter:string) {
		this.filterChanged.next(filter)
	}

	searchPosts(filter:string) {
		this.setHideLoading(false, this);
		this.blogService.setFilter(filter)
	}

	toggleBlogNav() {
		this.blogService.toggleBlogNav()
	}

	inputFocus(input) {
		input.select()
	}

	setHideLoading(state: boolean, scope) {
		scope.hideLoading = state;
	}


}
