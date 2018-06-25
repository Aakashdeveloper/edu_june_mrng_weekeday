import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component'
import { ProductComponent } from "./products/products.component";
import { upperValuePipe } from "./products/upperValue.pipe";
import { addValuePipe } from "./products/addValue.pipe";
import { ProductFilterPipe } from "./products/filterProduct.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductSevice } from "./products/product.service";
import { NotFound } from "./shared/notFound.component";
import { ProductDetail } from "./products/product_detail.component";
import { HomeComponent } from "./home/home.component";
import { OrderComponent } from "./order/order.component";

@NgModule({

    //All Module decl here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    //All Component & Pipe
    declarations:[
        AppComponent,
        DashboardComponent,
        ProductComponent,
        upperValuePipe,
        addValuePipe,
        ProductFilterPipe,
        StarComponent,
        NotFound,
        ProductDetail,
        HomeComponent,
        OrderComponent
    ],
    //Only First Component
    bootstrap:[
        AppComponent
    ],
    //All Services decl here
    providers:[
        ProductSevice
    ]
})

export class AppModule{

}