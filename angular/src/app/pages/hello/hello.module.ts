import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';


import { HelloComponent } from './hello.component';


@NgModule({
  imports: [
  	RouterModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    HelloComponent
  ],
  providers: []
})
export class HelloModule {}