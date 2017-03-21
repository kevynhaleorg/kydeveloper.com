import {Injectable} from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observer} from 'rxjs/Observer'

import { ParseWordpressJSON } from '../../util/parseWordpressJSON'
import { Post } from '../../classes/wordpress/post'

@Injectable()
export class BlogService {

	_wpBase = "http://blog.kydeveloper.com/wp-json/wp/v2/"

	post: Post;
	posts: Post[];
	filter: string;
	blogNav: boolean = true;
	blogfilter: string = "categories=7";

	postsChange$: any;
	private _postsObserver: Observer<any>;

	postChange$: any;
	private _postObserver: Observer<any>;

	filterChange$: any;
	private _filterObserver: Observer<any>;

	blogNavChange$: any;
	private _blogNavObserver: Observer<any>;

	filterLoadingChange$: any;
	private _filterLoadingObserver: Observer<any>;

	constructor(private http: Http) {
		this.postsChange$ = new Observable(observer =>
		this._postsObserver = observer).share();

		this.postChange$ = new Observable(observer =>
		this._postObserver = observer).share();

		this.filterChange$ = new Observable(observer =>
		this._filterObserver = observer).share();

		this.blogNavChange$ = new Observable(observer =>
		this._blogNavObserver = observer).share();

		this.filterLoadingChange$ = new Observable(observer =>
		this._filterLoadingObserver = observer).share();
	}

	getPosts(): Observable<any> {
		let url =  this._wpBase + "posts?" + this.blogfilter + "&_embed"
		let headers    = new Headers({'Content-Type': 'application/json'})
		let options    = new RequestOptions({ headers: headers })			
		return this.http.get(url, options)
			.map(response => this.setPosts(response.json()))

	}

	setPosts(posts: any) {
		console.log(posts)
		this.posts = posts.map(post => new ParseWordpressJSON().convertPost(post))
		this._postsObserver.next(this.posts);
	}

	retPosts() {
		return this.posts;
	}

	getPostById(id: string): Observable<any> {
		let url =  this._wpBase + "posts/" + id + "?" + this.blogfilter + "&_embed"
		let headers    = new Headers({'Content-Type': 'application/json'})
		let options    = new RequestOptions({ headers: headers })			
		return this.http.get(url, options)
				.map((res:Response) => res.json())

	}

	setFilter(filter: string) {
		this.filter = filter;
		console.log(this.filter)
		this._filterObserver.next(this.filter);
	}

	getPostsFiltered(filter: string) {
		console.log(filter)
		let url =  this._wpBase + "posts?" + this.blogfilter + "&search=" + filter +"&_embed"
		let headers    = new Headers({'Content-Type': 'application/json'})
		let options    = new RequestOptions({ headers: headers })			
		return this.http.get(url, options)
			.map(response => this.setPosts(response.json()),
				this._filterLoadingObserver.next(true)
				)
	}

	toggleBlogNav() {
		this.blogNav = !this.blogNav
		this._blogNavObserver.next(this.blogNav);
	}

	getBlogNav() {
		return this.blogNav;
	}

}