import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { AutoGrowDirective } from './directives/auto-grow.directive';
import { HeroChildComponent } from './components/hero-child.component';
import { HeroParentComponent } from './components/hero-parent.component';
import { VoterComponent } from './components/voter.component';
import { VoteTakerComponent } from './components/votertaker.component';
//import { DataStore } from './components/singleton.component';
//import { FirstComponent } from './components/singleton.component';
//import { SecondComponent } from './components/singleton.component';


import {routing} from './app.routing';

let directives: any[] = [
    AppComponent, UserComponent, AboutComponent, AutoGrowDirective,
    HeroChildComponent,
    HeroParentComponent,
    VoterComponent,
    VoteTakerComponent,
    //DataStore,
    //FirstComponent,
    //SecondComponent   
  ];



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: directives,
  providers: [ Title ],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
