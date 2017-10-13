import { AuthGuard } from '../../security/auth.guard';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "app/components/+auth/login/login.component";
import { NgxPermissionsGuard } from 'ngx-permissions';

export const AUTH_ROUTES: Routes = [
	{ path: '', component: LoginComponent },
	//{ path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
	{ path: 'login', component: LoginComponent }
];

export const AuthRouter: ModuleWithProviders = RouterModule.forChild(AUTH_ROUTES);