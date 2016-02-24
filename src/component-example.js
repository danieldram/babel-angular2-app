import 'reflect-metadata';
import 'babel-polyfill';
import 'angular2/bundles/angular2-polyfills';

import { bootstrap } from 'angular2/platform/browser';
import { Component} from 'angular2/core';


class ExampleTweet{
  title: String;
  description: String;
  constructor({name, description}){
    this.name = name;
    this.description = description;
  }
}

@Component({
  selector:'tweet',
  template:`
  <div>
    <h1>{{tweets.name}}</h1>
    <p>{{tweets.description}}<p>
  </div>
  `
})

class ComponentExample{
  tweets: ExampleTweet;
  constructor(){
    this.tweets = new ExampleTweet({name:'Kanye West', description:'Mark Zuckerberg... Got a minute? I got a great idea..'});
  }
}

bootstrap(ComponentExample);
