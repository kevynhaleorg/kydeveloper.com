import { Component, Input } from '@angular/core';
import { SkillsService} from './../skills.service'

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss']
})
export class SkillSectionComponent {
	@Input() type: string;

	skills: any[] = [];

	constructor(
		private skillsService: SkillsService) {
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
	}

}