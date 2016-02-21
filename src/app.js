import 'reflect-metadata';
import 'babel-polyfill';

import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

class hmm{
  data:string;
  constructor(){
    this.data = "fjdkfjkdfjd";
  }

  change(){
    this.data = "change it up";
  }
}

@Component({
  selector: 'test',
  template: `
      <a href (click)="update()">test</a>
      <p>{{testing.data}}</p>
      `
})

class Test{
    testing:string;
    constructor(){
      this.testing = new hmm();
    }

    update(){
      this.testing.change();
      console.log(this.testing);
      return false;
    }
}

bootstrap(Test);
