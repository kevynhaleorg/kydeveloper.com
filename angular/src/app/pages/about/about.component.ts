import { Component } from '@angular/core';

import { AboutService } from './about.service'
import { Page } from '../../classes/wordpress/page'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

	about: Page = new Page();

	constructor(
		private aboutService: AboutService) {

	}

	ngOnInit() {
		this.aboutService.getAbout().subscribe(
			result => console.log(result))

		this.aboutService.aboutChange$.subscribe(
			about => this.about = about)
	}

}
