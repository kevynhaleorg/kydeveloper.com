import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';

import { SkillsService} from './skills.service'
import { SkillSectionService } from './skill-section/skill-section.service'

import { SkillSectionComponent } from './skill-section/skill-section.component'
import { SkillSectionBarComponent } from './skill-section/skill-section-bar.component'
import { BarchartComponent } from './skill-section/barchart.component' 

import { SkillsComponent } from './skills.component';




@NgModule({
  imports: [
  	RouterModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    SkillsComponent,
    BarchartComponent,
    SkillSectionComponent,
    SkillSectionBarComponent
  ],
  providers: [SkillsService]
})
export class SkillsModule {


}