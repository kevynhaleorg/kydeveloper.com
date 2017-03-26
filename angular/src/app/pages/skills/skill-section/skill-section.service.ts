import {Injectable} from '@angular/core'
import {Observer} from 'rxjs/Observer'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SkillSectionService {

	set: string;
	setChange$: any;
	private _setObserver: Observer<any>;

	constructor() {
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

}