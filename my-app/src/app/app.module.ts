import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewNameComponent } from './new-name/new-name.component';
import { New2019Component } from './new2019/new2019.component';
import { FormsModule } from '@angular/forms'
// 引入服务
import { HeroService } from './hero.service'
// 引入http请求
import {HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    NewNameComponent,
    New2019Component,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
