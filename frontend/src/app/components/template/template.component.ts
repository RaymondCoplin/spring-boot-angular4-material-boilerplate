import { User } from '../../models/user.model';
import { NgxPermissionsService } from 'ngx-permissions';
import { AuthService } from '../../security/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TemplateService } from "app/components/template/template.service";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {

  userInfo: User = null;
  templateValues: string[] = null;

  constructor(
    private authService: AuthService,
    private ngxPermissionService: NgxPermissionsService,
    private templateService: TemplateService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.templateService.userInfo.subscribe(user => this.userInfo = user);
    this.templateService.templateValues.subscribe(IconAndTitle => this.templateValues = IconAndTitle);
  }

  logout(){
    this.authService.logout().subscribe(result => {
      this.router.navigate(['/auth/login']);
    });
  }

}
