import {SharedModule} from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AuthService } from './security/auth/auth.service';
import { AppRoutingModule } from './app.routes';
import { NgxPermissionsModule } from "ngx-permissions";
import { TemplateComponent } from "app/components/template/template.component";
import { TemplateService } from "app/components/template/template.service";

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AppRoutingModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [
    AuthService,
    TemplateService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
