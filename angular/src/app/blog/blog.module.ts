import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';


import { BlogComponent } from './blog.component';
import { BlogAllComponent } from './all/blog-all.component';
import { BlogAllPreviewComponent } from './all/preview/blog-all-preview.component';

import { BlogService } from './blog.service'


@NgModule({
  imports: [
  	RouterModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    BlogComponent,
    BlogAllComponent,
    BlogAllPreviewComponent
  ],
  providers: [BlogService]
})
export class BlogModule {}