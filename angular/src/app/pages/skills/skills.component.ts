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

		this.skillsService.getSkills().subscribe()
	}

}
