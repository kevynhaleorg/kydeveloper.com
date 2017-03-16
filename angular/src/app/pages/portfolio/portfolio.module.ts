import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';


import { PortfolioComponent } from './portfolio.component';


@NgModule({
  imports: [
  	RouterModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    PortfolioComponent
  ],
  providers: []
})
export class PortfolioModule {}