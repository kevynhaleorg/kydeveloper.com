import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';


import { SkillsComponent } from './skills.component';


@NgModule({
  imports: [
  	RouterModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    SkillsComponent
  ],
  providers: []
})
export class SkillsModule {}