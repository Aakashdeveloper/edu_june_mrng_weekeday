import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component'
import { ProductComponent } from "./products/products.component";
import { upperValuePipe } from "./products/upperValue.pipe";
import { addValuePipe } from "./products/addValue.pipe";

@NgModule({

    //All Module decl here
    imports:[
        BrowserModule,
        FormsModule,
    ],
    //All Component & Pipe
    declarations:[
        AppComponent,
        DashboardComponent,
        ProductComponent,
        upperValuePipe,
        addValuePipe
    ],
    //Only First Component
    bootstrap:[
        AppComponent
    ],
    //All Services decl here
    providers:[]
})

export class AppModule{

}