import { Component, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent {
	@Input() skills;

	data: any = [];

	constructor(private el:ElementRef){

  	}

  	ngOnInit() {
  		if (this.skills) {
  			this.setData()
  		}
  	}

  	ngOnChanges() {

  		this.setData()
  	}

  	@HostListener('window:resize', ['$event'])
  	setData() {
  		let itemWidth;
  		let width = this.el.nativeElement.firstElementChild.clientWidth
  		let upper = width - 147
  		let lower = 2
  		let highest = this.getHighestCount(this.skills)	

  		let data = []
  		this.skills.forEach(function(skill, scope) {
  			itemWidth = this.getBarWidth(highest, upper, skill.count, lower)
  			console.log(itemWidth)
  			data.push({
  				'name': skill.name,
  				'count': skill.count,
  				'width': itemWidth,
  				'image': skill.image
  			})
  		}, this)

  		this.data = data;
  	}

  	getHighestCount(skills: any) {
  		let current = 0
  		skills.forEach(function(skill) {
  			if (skill.count > current) {
  				current = skill.count
  			}
  		})
  		return current
  	}

  	getBarWidth(highest, width, current, lower) {
  		if (current == 0) {
  			return lower
  		}
  		else {
  			return width * (current/highest)
  		}
  	}

}
