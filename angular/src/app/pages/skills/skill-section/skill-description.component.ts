import { Component} from '@angular/core';
import { SkillSectionService} from './skill-section.service'

@Component({
  selector: 'app-skill-description',
  templateUrl: './skill-description.component.html',
  styleUrls: ['./skill-description.component.scss']
})
export class SkillDescriptionComponent {
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


}