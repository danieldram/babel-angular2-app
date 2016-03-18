import 'reflect-metadata';
import 'babel-polyfill';
import 'core-js';
import 'zone.js/dist/zone-microtask';
import 'rxjs/Rx';
import 'angular2/bundles/angular2-polyfills';

import { bootstrap } from 'angular2/platform/browser';
import { Component} from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
selector: 'demo-form-sku',
directives: [FORM_DIRECTIVES],
template: `
    <h2> Demo Form Sku <h2>
    <div>
      <form #f='ngForm' (ngSubmit)="onSubmit(f.value)">
        <input type="text" id="skuInput" placeholder="SKU" ngControl="sku">
        <br>
        <button type="submit" class="ui button">Submit</button>
      </form>
    </div>
  ` })

class DemoFormSku{
  constructor(){
    console.log('class initiated');
  }
  onSubmit(form: any): void {
  console.log('you submitted value:', form);
  }
}

bootstrap(DemoFormSku);
