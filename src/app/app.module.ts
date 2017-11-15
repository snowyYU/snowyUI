import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//模块导入

//组件导入
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { IndexComponent } from './index/index.component'
import { DashboardComponent } from './dashboard/dashboard.component'

//指令导入
//服务导入,路由也算服务哈
import { routing } from './app.routing'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
	IndexComponent,
	DashboardComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
