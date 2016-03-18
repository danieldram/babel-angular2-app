import 'reflect-metadata';
import 'babel-polyfill';
import 'core-js';
import 'zone.js/dist/zone-microtask';
import 'rxjs/Rx';
import 'angular2/bundles/angular2-polyfills';

import { bootstrap } from 'angular2/platform/browser';
import { Component} from 'angular2/core';

@Component({
selector: 'demo-form-sku',
directives: [],
template: `

  ` })

class DemoFormSku{
  constructor(){
    console.log('class initiated');
  }
}

bootstrap(DemoFormSku);
