import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DisqusModule} from "ng2-awesome-disqus";

import { AppRouterModule } from './app-routing.module'
import { AboutModule } from './pages/about/about.module'
import { ContactModule } from './pages/contact/contact.module'
import { HelloModule } from './pages/hello/hello.module'
import { BlogModule } from './pages/blog/blog.module'
import { PortfolioModule } from './pages/portfolio/portfolio.module'
import { SkillsModule } from './pages/skills/skills.module'


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { SideIconsComponent } from './components/sideicons/sideicons.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideIconsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DisqusModule,
    AppRouterModule,
    AboutModule,
    ContactModule,
    HelloModule,
    BlogModule,
    PortfolioModule,
    SkillsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
