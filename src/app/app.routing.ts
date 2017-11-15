import { RouterModule,Routes } from '@angular/router'
// import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { IndexComponent } from './index/index.component'
import { DashboardComponent } from './dashboard/dashboard.component'

//注：路由中的data属性常用来存储页标题、面包屑以及其它静态只读数据

const routes:Routes=[
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'',
		redirectTo:'/login',
		pathMatch: 'full',
	},
	{
		path:'',
		component:IndexComponent,
		data:{title:'首页框架'},
		children:[
			{
				path:'dashboard',
				component:DashboardComponent,
				data:{title:'仪表盘'}
			}
		]
	}
]

export const routing=RouterModule.forRoot(routes)