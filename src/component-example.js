import 'reflect-metadata';
import 'babel-polyfill';
import 'angular2/bundles/angular2-polyfills';

import { bootstrap } from 'angular2/platform/browser';
import { Component} from 'angular2/core';

class ExampleTweets{
  name:String;
  description:String;
  constructor({name, description}){
    this.name = name;
    this.description = description;
  }
}


@Component({
  selector:'tweet-this',
  template:`
    <div>
      <h1>{{tweets.name}}</h1>
      <p>{{tweets.description}}</p>
    </div>
  `
})

class ExampleTweet{
  tweets: ExampleTweets;
  constructor(){
    this.tweets = new ExampleTweets({name:"Kanye West", description:"Mark, man you got a minute??"});
  }
}

bootstrap(ExampleTweet);
