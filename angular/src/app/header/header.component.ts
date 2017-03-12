import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	showTitle = false;

	toggleTitle(event) {
		event.stopPropagation()
		this.showTitle = !this.showTitle;
		console.log(this.showTitle)
	}

	// CLose dropdown responsive window when selecting page.
	@HostListener('click', ['$event.target']) onClick(target) {
		console.log(target)
		if (target != "i")
		{
			if (this.showTitle)
			{
				this.showTitle = !this.showTitle;
			}
		}
  	}



}
