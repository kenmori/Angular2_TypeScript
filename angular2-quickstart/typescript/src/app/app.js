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
var MyApp = (function () {
    function MyApp() {
    }
    MyApp = __decorate([
        angular2_1.Component({
            selector: "my-app",
            template: "\n  <hello-world></hello-world>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES, HelloWorld]
        }), 
        __metadata('design:paramtypes', [])
    ], MyApp);
    return MyApp;
})();
angular2_1.bootstrap(MyApp);
//# sourceMappingURL=app.js.map