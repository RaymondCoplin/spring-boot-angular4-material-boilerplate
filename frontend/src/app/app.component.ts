import {TemplateService} from './components/template/template.service';
import { AuthService } from './security/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from "ngx-permissions";
import { NgxRolesService } from "ngx-permissions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(
    private authService: AuthService,
    private templateService: TemplateService,
    private rolesService: NgxRolesService,
    private permissionsService: NgxPermissionsService
  ) {}

  ngOnInit() {
    let user = this.authService.getUser();
    this.templateService.setUser(user);

    let permissions = this.authService.getRole();
    if(permissions !== null) {
      this.permissionsService.loadPermissions(permissions);
    }
  }

}
