import 'reflect-metadata';
import 'babel-polyfill';

import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';


@Component({
  selector: 'test',
  template: `
      <button (click)="update()">test</button>
      <p>{{testing}}</p>
      `
})

class Test{
    testing:string;
    constructor(){
      this.testing = 'wtf';
    }

    update(){
      this.testing = 'omg it worked';
      return false;
    }
}

bootstrap(Test);
