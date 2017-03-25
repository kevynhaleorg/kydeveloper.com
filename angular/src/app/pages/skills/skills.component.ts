import { Component } from '@angular/core';
import { SkillsService} from './skills.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

	skills: any[] = [];

	constructor(
		private skillsService: SkillsService) {
	}

	ngOnInit() {
		this.skillsService.skillsChange$.subscribe(
			skills => this.setSkills(skills)
		)

		this.skillsService.getSkills().subscribe()
	}

	setSkills(skills:any) {
		this.skills = skills;
	}

}
