import { AuthService } from '../../security/auth/auth.service';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { AuthRouter } from "app/components/+auth/auth.routes";
import { LoginComponent } from "app/components/+auth/login/login.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";
import { AuthInterceptor } from "app/shared/jewelry.interceptor";

@NgModule({
	declarations: [ LoginComponent ],
	imports: [ AuthRouter, SharedModule ],
	providers: [ 
		HttpClient, 
		AuthService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
	  	}
	],
	exports: [ RouterModule ]
})
export class AuthModule {}