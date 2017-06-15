import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutService } from './about.service'
import { ParseWordpressJSON } from '../../util/parseWordpressJSON'


import { AboutComponent } from './about.component';


@NgModule({
  imports: [
  	RouterModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AboutComponent
  ],
  providers: [AboutService, ParseWordpressJSON]
})
export class AboutModule {}