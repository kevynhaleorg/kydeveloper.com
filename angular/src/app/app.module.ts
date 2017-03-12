import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouterModule } from './app-routing.module'
import { AboutModule } from './about/about.module'
import { ContactModule } from './contact/contact.module'
import { HelloModule } from './hello/hello.module'
import { IntroModule } from './intro/intro.module'
import { PortfolioModule } from './portfolio/portfolio.module'
import { SkillsModule } from './skills/skills.module'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { SideIconsComponent } from './sideicons/sideicons.component'

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
    AppRouterModule,
    AboutModule,
    ContactModule,
    HelloModule,
    IntroModule,
    PortfolioModule,
    SkillsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
