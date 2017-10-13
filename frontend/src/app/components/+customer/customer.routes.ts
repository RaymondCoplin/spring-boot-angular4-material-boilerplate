import { Routes, RouterModule } from "@angular/router";
import { CustomerComponent } from "app/components/+customer/customer.component";
import { ModuleWithProviders } from "@angular/core";
import { EditCustomerComponent } from "app/components/+customer/edit-customer/edit-customer.component";
import { SearchCustomerComponent } from "app/components/+customer/search-customer/search-customer.component";
import { CreateCustomerComponent } from "app/components/+customer/create-customer/create-customer.component";

const CUSTOMER_ROUTER: Routes = [
	{
		path: '',
		children: [
			{ path: '', component: CustomerComponent },
			{ path: 'search', component: SearchCustomerComponent },
			{ path: 'create', component: CreateCustomerComponent },
			{ path: 'edit', component: EditCustomerComponent }
		]
	}
];

export const customerRouter: ModuleWithProviders = RouterModule.forChild(CUSTOMER_ROUTER);