import {Injectable} from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observer} from 'rxjs/Observer'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SkillSectionService {

	set: string;
	setChange$: any;
	private _setObserver: Observer<any>;

	url_base: String = 'http://blog.kydeveloper.com/wp-json/kyskills/v1/'

	constructor(private http: Http) {
		this.setChange$ = new Observable(observer =>
		this._setObserver = observer).share();
	}

	setSet(set) {
		this.set = set;
		this._setObserver.next(this.set);
	}

	getSet() {
		return this.set;
	}

	getSkill($slug, $type) {
		let url = this.url_base + "skill" + "?slug=" + $slug + "&type=" + $type
		let headers    = new Headers({'Content-Type': 'application/json'})
		let options    = new RequestOptions({ headers: headers })			
		return this.http.get(url, options)
			.map(response => response.json())
	}

}