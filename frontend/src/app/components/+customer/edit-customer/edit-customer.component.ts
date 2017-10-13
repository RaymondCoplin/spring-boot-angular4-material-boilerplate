import { Component, OnInit } from '@angular/core';
import { TemplateService } from "app/components/template/template.service";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html'
})
export class EditCustomerComponent implements OnInit {

  constructor(
    private templateService: TemplateService
  ) { }

  ngOnInit() {
    this.templateService.setTitle(["edit", "Edit Customer"]);
  }

}
