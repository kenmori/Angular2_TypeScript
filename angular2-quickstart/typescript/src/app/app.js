"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var HelloWorld = (function () {
    function HelloWorld() {
    }
    HelloWorld = __decorate([
        angular2_1.Component({
            selector: "hello-world",
            template: "<h1>My First Angular 2 App</h1>",
        }), 
        __metadata('design:paramtypes', [])
    ], HelloWorld);
    return HelloWorld;
})();
var HelloH2 = (function () {
    function HelloH2() {
    }
    HelloH2 = __decorate([
        angular2_1.Component({
            selector: "hello-h2",
            template: "\n  <hello-world></hello-world>\n  <h2>fafa</h2>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES, HelloWorld]
        }), 
        __metadata('design:paramtypes', [])
    ], HelloH2);
    return HelloH2;
})();
//ng-repeat
//ng-click
//ng-filter
//childComponent
var MyApp = (function () {
    function MyApp() {
        this.count = 0;
        this.title = "watashi";
        this.addtext = "faa";
    }
    MyApp.prototype.clicked = function (event) {
        this.count += 1;
    };
    MyApp.prototype.clearCount = function () {
        this.count = 0;
    };
    MyApp = __decorate([
        angular2_1.Component({
            selector: "my-app",
            template: "\n  <hello-h2></hello-h2>\n  <div>{{addtext}}</div>\n  <p>{{title}}</p>\n  <input type=\"text\" [ng-model]=\"addtext\" (ng-model-change)=\"addtext=$event\" />\n  <button (click)=\"clicked($event)\">\u30DC\u30BF\u30F3</button>\n  <button (click)=\"clearCount($event)\">\u30AF\u30EA\u30A2</button>\n  <div (ng-model)=\"count\">{{count}}</div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, HelloH2]
        }), 
        __metadata('design:paramtypes', [])
    ], MyApp);
    return MyApp;
})();
angular2_1.bootstrap(MyApp);
//# sourceMappingURL=app.js.map