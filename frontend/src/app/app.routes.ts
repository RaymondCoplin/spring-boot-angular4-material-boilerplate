import {CustomerComponent} from './components/+customer/customer.component';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './security/auth.guard';
import { AppComponent } from './app.component';
import { TemplateComponent } from "app/components/template/template.component";
import { NgxPermissionsGuard } from "ngx-permissions";

export const router: Routes = [
	{ 
		path: '', component: TemplateComponent, canActivate: [AuthGuard], children:[
			{ 
				path: 'customer',
				data: {
					redirectTo: '/auth/login'
				},
				canLoad: [NgxPermissionsGuard],
				loadChildren: 'app/components/+customer/customer.module#CustomerModule'
			}
		]
	},
	{ path: 'auth', loadChildren: 'app/components/+auth/auth.module#AuthModule' }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(router);