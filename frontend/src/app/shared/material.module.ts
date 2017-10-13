import { NgModule } from '@angular/core';

import {
  MdButtonModule, MdMenuModule, MdToolbarModule, MdSidenavModule, MatListModule,
  MdIconModule, MdCardModule, MdInputModule, MdFormFieldModule, MdProgressSpinnerModule, MdSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule, MdMenuModule, MdToolbarModule, MdSidenavModule, MatListModule, MdIconModule, MdCardModule, MdFormFieldModule, 
    MdInputModule, MdProgressSpinnerModule, MdSnackBarModule
  ],
  exports: [
    MdButtonModule, MdMenuModule, MdToolbarModule, MdSidenavModule, MatListModule, MdIconModule, MdCardModule, MdFormFieldModule, 
    MdInputModule, MdProgressSpinnerModule, MdSnackBarModule
  ]
})
export class MaterialModule {}