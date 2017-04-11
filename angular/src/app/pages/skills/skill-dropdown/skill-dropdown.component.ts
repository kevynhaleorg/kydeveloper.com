import { Component } from '@angular/core';
import { SkillsService } from '../skills.service'

@Component({
  selector: 'app-skill-dropdown',
  templateUrl: './skill-dropdown.component.html',
  styleUrls: ['./skill-dropdown.component.scss']
})
export class SkillDropdownComponent {

	constructor(
		private skillsService: SkillsService) {

	}
}