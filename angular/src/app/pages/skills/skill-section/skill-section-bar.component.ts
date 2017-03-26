import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-skill-section-bar',
  templateUrl: './skill-section-bar.component.html',
  styleUrls: ['./skill-section-bar.component.scss']
})
export class SkillSectionBarComponent {
	@Input() skills: any;


}