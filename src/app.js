
import 'reflect-metadata';
import 'babel-polyfill';

import { bootstrap } from "angular2/platform/browser";
import { Component, View } from "angular2/core";
import { NgFor } from "angular2/common";

@Component({
  selector: 'hello-world',
})

@View({
  directives:[NgFor],
  template: `
   <ul>
      <li *ngFor="#name of names">{{ name }}</li>
  </ul>
`
})
class HelloWorld {
  name: string[];
  constructor(){
    this.names = ['Yu', 'Mi', 'HIM', 'EVERYBODY!'];
  }
 }


bootstrap(HelloWorld);
