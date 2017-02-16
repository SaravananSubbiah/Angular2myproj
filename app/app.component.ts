import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/about">About</a></li>
    </ul>
    <hr/>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { 
  
  public constructor(private titleService: Title){
    this.setTitle('Good morn');
  }

  public setTitle(newTitle: string){
    this.titleService.setTitle( newTitle );

  }
  }
