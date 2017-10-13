import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private localSt:LocalStorageService){}

	intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		/*let jewelryUserInfo  = this.localSt.retrieve('jewelryUserInfo');
		let authReq = null;

		if(!req.headers.has('Authorization')){
			authReq = req.clone({
				headers: req.headers.set('Authorization', `Basic ${jewelryUserInfo.token}`)
			});
			return next.handle(authReq);
		}*/
		return next.handle(req);
	}
}