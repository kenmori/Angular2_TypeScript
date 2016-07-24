import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {SampleDirective} from './sample-directive';

@Component({
    selector: 'page-top',
    directives: [ROUTER_DIRECTIVES, SampleDirective],
    template: `
        <h2>{{title}}</h2>
        <a [routerLink]="['Next']">Next</a>
        <sample-directive></sample-directive>
    `
})
export class PageTop {
    title = 'Page Top Title';
}