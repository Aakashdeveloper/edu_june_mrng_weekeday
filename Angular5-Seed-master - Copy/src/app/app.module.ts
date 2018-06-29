import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFound } from './shared/notFound.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProductModule } from './products/product.module';

@NgModule({
// All Module decl here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: 'order', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFound}

        ]),
        ProductModule
    ],
    // All Component & Pipe
    declarations: [
        AppComponent,
        NotFound,
        HomeComponent,
        OrderComponent
    ],
    // Only First Component
    bootstrap: [
        AppComponent
    ],
    // All Services decl here
    providers: [
    ]
})

export class AppModule {

}
