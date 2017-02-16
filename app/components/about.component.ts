import { Component } from '@angular/core';

@Component({
  selector: 'About',
  template: `
  <h1>About Users Appication</h1>
  <hero-parent></hero-parent>
  <vote-taker></vote-taker>
  `,
})

export class AboutComponent  { 
  message: string;
  constructor(){
    type HasName = {
                    firstName?:string,
                    lastName:string
    }
    let person: HasName ={
      firstName: 'Saravanan',
      lastName: 'Subbiah'
    }
    console.log('Hello ' +person.firstName + " " + person.lastName)
  }

  }
