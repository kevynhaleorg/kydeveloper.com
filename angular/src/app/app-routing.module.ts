import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello/hello.component'

import { SkillsComponent } from './skills/skills.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'

import { BlogComponent } from './blog/blog.component'
import { BlogAllComponent } from './blog/all/blog-all.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/hello',
        pathMatch: 'full'
        
      },
      {
        path: 'hello',
        component: HelloComponent
      },
      {
        path: 'blog',
        component: BlogComponent,
        children: [
          { 
            path: '', 
            component: BlogAllComponent
          }
        ]
      },
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
 
   	]
   	)],
   	exports: [
    RouterModule
  	]
  })
export class AppRouterModule {}