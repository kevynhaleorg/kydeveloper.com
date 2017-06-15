import {Injectable} from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observer} from 'rxjs/Observer'

import { ParseWordpressJSON } from '../../util/parseWordpressJSON'
import { Page } from '../../classes/wordpress/page'


@Injectable()
export class AboutService {

	_wpBase = "http://blog.kydeveloper.com/wp-json/wp/v2/"

	_wpAboutPageId = "65"

	about: Page;

	tempPage: any;

	aboutChange$: any;
	private _aboutObserver: Observer<any>;

	constructor(private http: Http) {
		this.aboutChange$ = new Observable(observer =>
		this._aboutObserver = observer).share();
	}


	getAbout() {
		let url =  this._wpBase + "pages/" + this._wpAboutPageId
		let headers    = new Headers({'Content-Type': 'application/json'})
		let options    = new RequestOptions({ headers: headers })			
		return this.http.get(url, options)
			.map(
				page => this.getImage(page.json())
					.subscribe(
							image => this.setAbout(this.tempPage, image.source_url)))
				
	}

	getImage(page: any) {
		this.tempPage = page;
		let url = page._links['wp:featuredmedia'][0].href
		console.log(url)
		let headers    = new Headers({'Content-Type': 'application/json'})
		let options    = new RequestOptions({ headers: headers })			
		return this.http.get(url, options)
			.map(response => response.json())
	}

	setAbout(page: any, image: any) {
		console.log(image)
		this.about = new ParseWordpressJSON().convertPage(page, image);
		this._aboutObserver.next(this.about)
	}


}