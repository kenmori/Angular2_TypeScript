import "core-js";
import "rxjs/Rx";
import "zone.js/dist/zone";

import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";

@Component({
  selector: `my-component`,
  template: `
  <div>
      <h2>click event</h2>
      <p>My name is {{name}}.
      <button onClick="sayMyName()">SayMyName</button>
      </p>
  </div>
  `
})
export class MyComponent {
  public name: string
  constructor() {
      this.name = 'Kenji'
  }
  sayMyName(){
    console.log('My name is', this.name)
  }
}

@Component({
  selector: 'hello-world',
  template: `
  <h1>hello-world!</h1>
  <MyComponent></MyComponent>
  `,
  direcitives: [MyComponent]
})
class HelloWorldComponent {
}

@Component({
  selector: 'my-app',
  template: `<hello-world></hello-world>`,
  directives: [HelloWorldComponent]
})
class MyAppComponent{
}

bootstrap(MyAppComponent);
