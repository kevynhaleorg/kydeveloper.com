import { Component, Inject, HostListener } from '@angular/core';
import { SkillsService} from './skills.service'
import { ActivatedRoute } from '@angular/router';
import {PageScrollService} from 'ng2-page-scroll';
import {PageScrollInstance} from 'ng2-page-scroll';
import {PageScrollConfig} from 'ng2-page-scroll';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

	skills: any[] = [];
	start: boolean = true;
	private routeFragmentSubscription;
	private tempSub;
	stickySearch: boolean;
	hideLoading: boolean = true;
	skillNav: boolean = true;

	constructor(
		private skillsService: SkillsService,
		private route: ActivatedRoute,
		private scroll: PageScrollService,
		@Inject(DOCUMENT) private document: any) {

		PageScrollConfig.defaultScrollOffset = 160;
        PageScrollConfig.defaultEasingLogic = {
            ease: (t: number, b: number, c: number, d: number): number => {
                // easeInOutExpo easing 
                if (t === 0) return b;
                if (t === d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
	}

	ngOnInit() {

		this.skillsService.getSkills().subscribe()

	}

	ngAfterViewChecked() {

		if (this.start) {
			console.log('check')
			this.routeFragmentSubscription = this.route.fragment.subscribe ( f => {
		      let element = document.querySelector ( "#" + f )
		      let pageScrollInstance: PageScrollInstance = 
		      	PageScrollInstance.simpleInstance(this.document, '#'+ f);
		      	this.scroll.start(pageScrollInstance);
		    });
		    this.start = false;
		}

	}

	ngOnDestroy() {
    	this.routeFragmentSubscription.unsubscribe();
  	}

  	anchorClick() {
  		this.tempSub = this.route.fragment.subscribe ( f => {
	    	let element = document.querySelector ( "#" + f )
	    	let pageScrollInstance: PageScrollInstance = 
	      	PageScrollInstance.simpleInstance(this.document, '#'+ f);
	      	this.scroll.start(pageScrollInstance);
	    });

	    this.tempSub.unsubscribe();
  	}

  	@HostListener("window:scroll", ["$event"])
	onWindowScroll() {
		let current = document.getElementById("skill-search").getBoundingClientRect().top
		this.stickySearch = current < 47 ? true : false;
		console.log(this.stickySearch)
	}

	toggleBlogNav() {
		this.skillNav = !this.skillNav;
		console.log(this.skillNav)
	}

	inputFocus(input) {
		input.select()
	}

	setHideLoading(state: boolean, scope) {
		scope.hideLoading = state;
	}

	searchSkills(event) {
		console.log(event)
	}


}
