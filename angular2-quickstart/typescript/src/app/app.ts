import {bootstrap, Component, CORE_DIRECTIVES} from 'angular2/angular2';
@Component({
    selector: `hello-world`,
    template: `<h1>My First Angular 2 App</h1>`,
})
class HelloWorld { }

@Component({
  selector: `my-app`,
  template: `
  <hello-world></hello-world>
  `,
  directives: [CORE_DIRECTIVES, HelloWorld]
})
class MyApp {
}
bootstrap(MyApp);
