import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component'

@NgModule({

    //All Module decl here
    imports:[
        BrowserModule
    ],
    //All Component & Pipe
    declarations:[
        AppComponent,
        DashboardComponent
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