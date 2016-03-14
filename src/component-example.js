import 'reflect-metadata';
import 'babel-polyfill';
import 'es6-shim';
import 'angular2/bundles/angular2-polyfills';



import { bootstrap } from 'angular2/platform/browser';
import { Component, EventEmitter } from 'angular2/core';
import { NgFor} from 'angular2/common';


@Component({
  selector:'tweet-list',
  inputs: ['tweetList'],
  outputs: ['onTweetClick'],
  template:`
    <input type="text" name="fontSize" value="{{fontinput.value}}" #fontinput>
    <span [ngStyle]="{color: 'red'}" [style.font-size.px]="fontinput.value">
      red text
      </span>

    <div *ngFor="#tweet of tweetList; #i = index" (click)='clicked(tweet)'>\
      <h1>{{i}} - {{tweet.name}}</h1>
      <p>{{tweet.description}}</p>
      <div [ngSwitch]="i">
        <p [style.background-color]="'yellow'" *ngSwitchWhen="0"> Bob mentioned something </p>
        <p *ngSwitchWhen="1"> John mentioned something </p>
      </div>

    </div>
  `
})
class TweetList{
  tweetList: ExampleTweet[];
  onTweetClick: EventEmitter<ExampleTweet>;
  currentTweet: ExampleTweet;
  constructor(){
    this.onTweetClick = new EventEmitter();
  }

  clicked(tweet:ExampleTweet){
    this.currentTweet = tweet;
    this.onTweetClick.emit(tweet);
  }
}

class ExampleTweet{
  name:String;
  description:String;
  constructor({name, description}){
    this.name = name;
    this.description = description;
  }
}

@Component({
  selector:'component-app',
  directives: [TweetList, NgFor],
  template:`
    <tweet-list [tweetList]="tweets" (onTweetClick)="tweetClicked($event)"> </tweet-list>
  `

})

class ComponentApp{
  tweets: ExampleTweet[];
  constructor(){
    this.tweets = [
      new ExampleTweet({name:'Bob', description:'Hey John, How are are you doing??'}),
      new ExampleTweet({name:'John', description:'Hey Julie, How are are you doing??'}),
      new ExampleTweet({name:'Josh', description:'Hey Josh, How are are you doing??'}),
      new ExampleTweet({name:'George', description:'Hey Markus, How are are you doing??'}),
    ];
  }

  tweetClicked(tweet: ExampleTweet){
    console.log(`${tweet.name} said ${tweet.description}`);
  }
}

bootstrap(ComponentApp);
