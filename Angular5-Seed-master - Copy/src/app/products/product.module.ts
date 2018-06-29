import {  NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ProductComponent } from './products.component';
import { ProductDetailComponent } from './product_detail.component';
import { upperValuePipe } from './upperValue.pipe';
import { addValuePipe } from './addValue.pipe';
import { ProductFilterPipe } from './filterProduct.pipe';
import { ProductSevice } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { RouterGaurds } from './product.gaurds';


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: 'product', component: ProductComponent},
            {path: 'product/:id' , canActivate: [RouterGaurds], component: ProductDetailComponent},
        ]),
    ],
    declarations: [
        ProductComponent,
        upperValuePipe,
        addValuePipe,
        ProductFilterPipe,
        ProductDetailComponent,
    ],
    providers: [
        ProductSevice,
        RouterGaurds
    ]
})

export class ProductModule {

}
