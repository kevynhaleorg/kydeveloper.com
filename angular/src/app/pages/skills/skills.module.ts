import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';

import {PageScrollService} from 'ng2-page-scroll';
import { SkillsService} from './skills.service'
import { SkillSectionService } from './skill-section/skill-section.service'

import { SkillSectionComponent } from './skill-section/skill-section.component'
import { SkillSectionBarComponent } from './skill-section/skill-section-bar.component'
import { SkillDescriptionComponent } from './skill-section/skill-description.component'
import { SkillSideIconsComponent } from './skill-section/skill-side-icons.component'
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
    SkillSectionBarComponent,
    SkillDescriptionComponent,
    SkillSideIconsComponent
  ],
  providers: [SkillsService, PageScrollService]
})
export class SkillsModule {


}