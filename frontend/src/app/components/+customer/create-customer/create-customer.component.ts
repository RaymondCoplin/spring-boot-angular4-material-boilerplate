import {TemplateService} from '../../template/template.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html'
})
export class CreateCustomerComponent implements OnInit {

  constructor(
    private templateService: TemplateService
  ) { }

  ngOnInit() {
    this.templateService.setTitle(["add", "Create Customer"]);
  }

}
