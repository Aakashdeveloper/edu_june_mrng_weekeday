import { Component } from '@angular/core';

@Component({
    selector:'app-comp',
    template:`<div>
                <h1>this is main component of angular</h1>
                <prod-comp></prod-comp>
                <dash-comp></dash-comp>
             </div>`
})

export class AppComponent{

}