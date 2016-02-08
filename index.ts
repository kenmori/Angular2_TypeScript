import "rxjs/Rx";

import {bootstrap} from  "angular2/platform/browser";
import {Component} from "angular2/core";
import {CORE_DIRECTIVES} from "angular2/common";

@Component({
  selector: `hello-world`,
  template: `
    <h1>hello world</h1>
  `
})
class HelloWorld {
}

@Component({
  selector: ``,
  template: `
  <hello-world></hello-world>
  `,
  directives: [CORE_DIRECTIVES, HelloWorld]
})
class MyApp {
}
