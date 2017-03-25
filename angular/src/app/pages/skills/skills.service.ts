import {Injectable} from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observer} from 'rxjs/Observer'

@Injectable()
export class SkillsService {

	url_base: String = 'http://blog.kydeveloper.com/wp-json/kyskills/v1/'
	skills: any[];

	skillsChange$: any;
	private _skillsObserver: Observer<any>;

	constructor(private http: Http) {
		this.skillsChange$ = new Observable(observer =>
		this._skillsObserver = observer).share();
	}

	getSkills(): Observable<any> {
		let url = this.url_base + "skills"

		let headers    = new Headers({'Content-Type': 'application/json'})
		let options    = new RequestOptions({ headers: headers })			
		return this.http.get(url, options)
			.map(response => this.setSkills(response.json()))

	}

	setSkills(skills:any) {
		this.skills = skills;
		this._skillsObserver.next(this.skills);
	}

}