import { Component } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  languages = ['AngularJS', 'ReactJS', 'NodeJS'];

  model  = new Employee('John', 'Andrew', true, '', 'AngularJS');

  firstToUpper(value: string): void {
    this.model.fname = value.charAt(0).toUpperCase() + value.slice(1);

  }
}


/*
ng-untouched ng-pristine ng-valid
ng-touched  ng-dirty    ng-invalid
*/