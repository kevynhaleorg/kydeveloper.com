import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HelloComponent } from './pages/hello/hello.component'

import { SkillsComponent } from './pages/skills/skills.component'
import { PortfolioComponent } from './pages/portfolio/portfolio.component'
import { AboutComponent } from './pages/about/about.component'
import { ContactComponent } from './pages/contact/contact.component'

import { BlogComponent } from './pages/blog/blog.component'
import { BlogAllComponent } from './pages/blog/all/blog-all.component'
import { BlogSingleComponent } from './pages/blog/single/blog-single.component'

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
          },
          {
             path: 'post/:id', 
             component: BlogSingleComponent
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