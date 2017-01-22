webpackJsonp([0,3],{

/***/ 340:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 340;


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(453);
const platform_browser_dynamic_1 = __webpack_require__(429);
const core_1 = __webpack_require__(0);
const environment_1 = __webpack_require__(452);
const app_module_1 = __webpack_require__(450);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=F:/ProjectRepos/Samples/Angular2Sample/src/CodingMilitia.Angular2Sample/app/src/main.js.map

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const random_service_1 = __webpack_require__(451);
let AppComponent = class AppComponent {
    constructor(randomService) {
        this.randomService = randomService;
        this.title = 'app works!';
        this.randomCollection = [];
    }
    ngOnInit() {
        this.getAllRandom();
    }
    getAllRandom() {
        this.randomService.getAll().then(randomCollection => this.randomCollection = randomCollection);
        console.log(this.randomCollection.length);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__(607),
        styles: [__webpack_require__(606)],
        providers: [random_service_1.RandomService]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof random_service_1.RandomService !== 'undefined' && random_service_1.RandomService) === 'function' && _a) || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;
//# sourceMappingURL=F:/ProjectRepos/Samples/Angular2Sample/src/CodingMilitia.Angular2Sample/app/src/app/app.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

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
const platform_browser_1 = __webpack_require__(190);
const core_1 = __webpack_require__(0);
const forms_1 = __webpack_require__(420);
const http_1 = __webpack_require__(280);
const app_component_1 = __webpack_require__(449);
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=F:/ProjectRepos/Samples/Angular2Sample/src/CodingMilitia.Angular2Sample/app/src/app/app.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const http_1 = __webpack_require__(280);
__webpack_require__(609);
let RandomService = class RandomService {
    constructor(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.randomUrl = 'api/random'; // URL to web api
    }
    getAll() {
        //return ['a', 'b', 'c'];
        return this.http.get(this.randomUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
};
RandomService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
], RandomService);
exports.RandomService = RandomService;
var _a;
//# sourceMappingURL=F:/ProjectRepos/Samples/Angular2Sample/src/CodingMilitia.Angular2Sample/app/src/app/services/random.service.js.map

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

exports.environment = {
    production: false
};
//# sourceMappingURL=F:/ProjectRepos/Samples/Angular2Sample/src/CodingMilitia.Angular2Sample/app/src/environments/environment.js.map

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__(467);
__webpack_require__(460);
__webpack_require__(456);
__webpack_require__(462);
__webpack_require__(461);
__webpack_require__(459);
__webpack_require__(458);
__webpack_require__(466);
__webpack_require__(455);
__webpack_require__(454);
__webpack_require__(464);
__webpack_require__(457);
__webpack_require__(465);
__webpack_require__(463);
__webpack_require__(468);
__webpack_require__(619);
//# sourceMappingURL=F:/ProjectRepos/Samples/Angular2Sample/src/CodingMilitia.Angular2Sample/app/src/polyfills.js.map

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<ul class=\"heroes\">\n <li *ngFor=\"let random of randomCollection\">\n   {{random}}\n </li>\n</ul>"

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(341);


/***/ })

},[620]);
//# sourceMappingURL=main.bundle.map