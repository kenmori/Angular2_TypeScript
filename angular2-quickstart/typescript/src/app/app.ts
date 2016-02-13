import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
@Component({
    selector: `hello-world`,
    template: `<h1>My First Angular 2 App</h1>`,
})
class HelloWorld { }

@Component({
  selector: `hello-h2`,
  template: `
  <hello-world></hello-world>
  <h2>fafa</h2>
  `,
  directives: [CORE_DIRECTIVES, HelloWorld]
})
class HelloH2 {
}
//ng-repeat
//ng-click
//ng-filter
//childComponent
@Component({
  selector: `my-app`,
  template: `
  <hello-h2></hello-h2>
  <div>{{addtext}}</div>
  <p>{{title}}</p>
  <input type="text" [ng-model]="addtext" (ng-model-change)="addtext=$event" />
  `,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, HelloH2]
})
class MyApp{
  public title: string = "watashi";
  public addtext: string = "faa";
}
bootstrap(MyApp);
