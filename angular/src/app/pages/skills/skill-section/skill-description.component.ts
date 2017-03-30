import { Component, Input } from '@angular/core';
import { SkillSectionService} from './skill-section.service'

@Component({
  selector: 'app-skill-description',
  templateUrl: './skill-description.component.html',
  styleUrls: ['./skill-description.component.scss']
})
export class SkillDescriptionComponent {
	@Input() skills: any;
	set: string;

	constructor(
    private skillSectionService: SkillSectionService){

  	}

  	ngOnInit() {
      this.set = this.skillSectionService.getSet()
      this.skillSectionService.setChange$.subscribe(
        set => this.set = set
      )

  	}

  	setNext() {
  		let index = this.getSlugIndex(this.skills, this.set)
  		let setIndex = index == (this.skills.length - 1) ? 0 : index + 1
  		this.skillSectionService.setSet(this.skills[setIndex].name)
  	}

  	setPrev() {
		let index = this.getSlugIndex(this.skills, this.set)
		let setIndex = index == 0 ? this.skills.length - 1 : index - 1
  		this.skillSectionService.setSet(this.skills[setIndex].name)
  	}

  	getSlugIndex(list, name) {
  		return list.findIndex(x => x.name == name)

  	}


}