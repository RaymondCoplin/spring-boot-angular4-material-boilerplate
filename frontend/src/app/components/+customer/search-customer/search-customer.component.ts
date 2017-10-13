import {TemplateService} from '../../template/template.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html'
})
export class SearchCustomerComponent implements OnInit {

  constructor(
    private templateService: TemplateService
  ) { }

  ngOnInit() {
    this.templateService.setTitle(["search", "Search Customer"]);
  }

}
