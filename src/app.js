import 'reflect-metadata';
import 'babel-polyfill';

import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

class hmm{

}

@Component({
  selector: 'test',
  template: `
      <a href (click)="update()">test</a>
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
      console.log(this.testing);
      return false;
    }
}

bootstrap(Test);
