import {AuthGuard} from '../security/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "app/shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { LocalStorageService } from "ngx-webstorage/dist/services";
import { NgxPermissionsModule } from "ngx-permissions";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [],
  providers: [AuthGuard, LocalStorageService],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    NgxPermissionsModule
  ]
})
export class SharedModule { }
