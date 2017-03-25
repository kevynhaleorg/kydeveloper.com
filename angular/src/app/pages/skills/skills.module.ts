import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';

import { SkillsService} from './skills.service'

import { BarchartComponent } from '../../components/charts/barchart.component' 

import { SkillsComponent } from './skills.component';




@NgModule({
  imports: [
  	RouterModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    SkillsComponent,
    BarchartComponent
  ],
  providers: [SkillsService]
})
export class SkillsModule {


}