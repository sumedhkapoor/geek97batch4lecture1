import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule, FormsModule, CoreModule
  ],
  exports:[ProductsComponent]
})
export class ProductModule { }
