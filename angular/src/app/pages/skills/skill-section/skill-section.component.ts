import { Component, Input } from '@angular/core';
import { SkillsService} from './../skills.service'
import { SkillSectionService} from './skill-section.service'

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss'],
  providers: [SkillSectionService]
})
export class SkillSectionComponent {
	@Input() type: string;

	skills: any[] = [];

	constructor(
		private skillsService: SkillsService,
		private skillSectionService: SkillSectionService) {
	}

	ngOnInit() {
		this.skillsService.skillsChange$.subscribe(
			skills => this.setSkills(skills)
		)
	}

	setSkills(skills:any) {
		this.skills = skills.filter(function(skill) {
			return skill.type == this.type && skill.active == 'true';
		}, this);

		if (!this.skillSectionService.getSet() && this.skills.length > 0) {
			this.skillSectionService.setSet(this.skills[0].name)
		}

	}

}