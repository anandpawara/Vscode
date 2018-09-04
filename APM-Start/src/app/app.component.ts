import { Component } from "@angular/core";

@Component({
  selector:'pm-root',
  template:`
    <div><h1>{{pagetitle}}</h1>
    <pm-products></pm-products>
  `
})

export class AppComponent {
  pagetitle:string = 'Acme product Management';
}

