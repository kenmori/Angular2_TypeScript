import 'core-js';
import 'rxjs/Rx';
import 'zone.js/dist/zone';


import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component({
    selector: 'hello-world',
    template: `<div>Hello!world</div>`
})
export class HelloWorldComponent {
}

@Component({
    selector: 'my-app',
    template: `
        <hello-world> </hello-world>
    `,
    directives: [HelloWorldComponent]
})
export class MyAppComponent {}
bootstrap(MyAppComponent);