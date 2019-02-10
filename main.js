(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./user/user.module": [
		"./src/app/user/user.module.ts",
		"user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _events_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/event-list/event-list.component */ "./src/app/events/event-list/event-list.component.ts");
/* harmony import */ var _events_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/event-details/event-details.component */ "./src/app/events/event-details/event-details.component.ts");
/* harmony import */ var _events_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/create-event/create-event.component */ "./src/app/events/create-event/create-event.component.ts");
/* harmony import */ var _errors_e404_e404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errors/e404/e404.component */ "./src/app/errors/e404/e404.component.ts");
/* harmony import */ var _shared_services_event_route_activator_event_route_activator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/event-route-activator/event-route-activator.service */ "./src/app/shared/services/event-route-activator/event-route-activator.service.ts");
/* harmony import */ var _shared_services_event_list_resolver_event_list_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/event-list-resolver/event-list-resolver.service */ "./src/app/shared/services/event-list-resolver/event-list-resolver.service.ts");
/* harmony import */ var _events_event_details_create_session_create_session_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/event-details/create-session/create-session.component */ "./src/app/events/event-details/create-session/create-session.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'events', component: _events_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_3__["EventListComponent"], resolve: { events: _shared_services_event_list_resolver_event_list_resolver_service__WEBPACK_IMPORTED_MODULE_8__["EventListResolverService"] } },
    { path: 'events/new', component: _events_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_5__["CreateEventComponent"], canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: _events_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_4__["EventDetailsComponent"], canActivate: [_shared_services_event_route_activator_event_route_activator_service__WEBPACK_IMPORTED_MODULE_7__["EventRouteActivatorService"]] },
    { path: 'events/session/new', component: _events_event_details_create_session_create_session_component__WEBPACK_IMPORTED_MODULE_9__["CreateSessionComponent"] },
    { path: '404', component: _errors_e404_e404_component__WEBPACK_IMPORTED_MODULE_6__["E404Component"] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'fundamentals';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, checkDirtyState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDirtyState", function() { return checkDirtyState; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _errors_e404_e404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./errors/e404/e404.component */ "./src/app/errors/e404/e404.component.ts");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/index */ "./src/app/common/index.ts");
/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./events/index */ "./src/app/events/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/index */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var jQuery = window['$'];


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_13__["EventListComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_13__["EventThumbnailComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_13__["EventDetailsComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_13__["CreateEventComponent"],
                _errors_e404_e404_component__WEBPACK_IMPORTED_MODULE_8__["E404Component"],
                _events_index__WEBPACK_IMPORTED_MODULE_13__["CreateSessionComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_13__["SessionListComponent"],
                _common_index__WEBPACK_IMPORTED_MODULE_12__["CollapsibleWellComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_14__["DurationPipe"],
                _common_index__WEBPACK_IMPORTED_MODULE_12__["simpleModalComponent"],
                _common_index__WEBPACK_IMPORTED_MODULE_12__["ModalTriggerDirective"],
                _events_index__WEBPACK_IMPORTED_MODULE_13__["UpvoteComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_13__["locationValidator"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
                    timeOut: 800,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: false,
                })
            ],
            providers: [
                _events_index__WEBPACK_IMPORTED_MODULE_13__["EventService"],
                _events_index__WEBPACK_IMPORTED_MODULE_13__["EventRouteActivatorService"],
                _events_index__WEBPACK_IMPORTED_MODULE_13__["EventRouteDeactivatorService"],
                _events_index__WEBPACK_IMPORTED_MODULE_13__["EventListResolverService"],
                _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
                _events_index__WEBPACK_IMPORTED_MODULE_13__["VoterService"],
                { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
                { provide: _common_index__WEBPACK_IMPORTED_MODULE_12__["JQ_TOKEN"], useValue: jQuery }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function checkDirtyState(component) {
    if (component.isDirty)
        return window.confirm('you not save the event');
    return true;
}


/***/ }),

/***/ "./src/app/common/collapsible-well/collapsible-well.component.css":
/*!************************************************************************!*\
  !*** ./src/app/common/collapsible-well/collapsible-well.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/collapsible-well/collapsible-well.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/common/collapsible-well/collapsible-well.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well pointable\" (click)=\"toggleContent()\">\n  <h4>\n    <ng-content select=\"[well-title]\"></ng-content>\n  </h4>\n<ng-content select=\"[well-body]\" *ngIf=\"visible\">\n  \n</ng-content>\n</div>"

/***/ }),

/***/ "./src/app/common/collapsible-well/collapsible-well.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/common/collapsible-well/collapsible-well.component.ts ***!
  \***********************************************************************/
/*! exports provided: CollapsibleWellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleWellComponent", function() { return CollapsibleWellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollapsibleWellComponent = /** @class */ (function () {
    function CollapsibleWellComponent() {
        this.visible = true;
    }
    CollapsibleWellComponent.prototype.ngOnInit = function () {
    };
    CollapsibleWellComponent.prototype.toggleContent = function () {
        this.visible = !this.visible;
    };
    CollapsibleWellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'collapsible-well',
            template: __webpack_require__(/*! ./collapsible-well.component.html */ "./src/app/common/collapsible-well/collapsible-well.component.html"),
            styles: [__webpack_require__(/*! ./collapsible-well.component.css */ "./src/app/common/collapsible-well/collapsible-well.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CollapsibleWellComponent);
    return CollapsibleWellComponent;
}());



/***/ }),

/***/ "./src/app/common/index.ts":
/*!*********************************!*\
  !*** ./src/app/common/index.ts ***!
  \*********************************/
/*! exports provided: CollapsibleWellComponent, JQ_TOKEN, simpleModalComponent, ModalTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collapsible_well_collapsible_well_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapsible-well/collapsible-well.component */ "./src/app/common/collapsible-well/collapsible-well.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapsibleWellComponent", function() { return _collapsible_well_collapsible_well_component__WEBPACK_IMPORTED_MODULE_0__["CollapsibleWellComponent"]; });

/* harmony import */ var _jquery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jquery.service */ "./src/app/common/jquery.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JQ_TOKEN", function() { return _jquery_service__WEBPACK_IMPORTED_MODULE_1__["JQ_TOKEN"]; });

/* harmony import */ var _simpleModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simpleModal.component */ "./src/app/common/simpleModal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simpleModalComponent", function() { return _simpleModal_component__WEBPACK_IMPORTED_MODULE_2__["simpleModalComponent"]; });

/* harmony import */ var _modalTrigger_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalTrigger.directive */ "./src/app/common/modalTrigger.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalTriggerDirective", function() { return _modalTrigger_directive__WEBPACK_IMPORTED_MODULE_3__["ModalTriggerDirective"]; });







/***/ }),

/***/ "./src/app/common/jquery.service.ts":
/*!******************************************!*\
  !*** ./src/app/common/jquery.service.ts ***!
  \******************************************/
/*! exports provided: JQ_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JQ_TOKEN", function() { return JQ_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var JQ_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('jQuery');


/***/ }),

/***/ "./src/app/common/modalTrigger.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/common/modalTrigger.directive.ts ***!
  \**************************************************/
/*! exports provided: ModalTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTriggerDirective", function() { return ModalTriggerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jquery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jquery.service */ "./src/app/common/jquery.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ModalTriggerDirective = /** @class */ (function () {
    function ModalTriggerDirective(ref, $) {
        this.$ = $;
        this.el = ref.nativeElement;
    }
    ModalTriggerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.el.addEventListener('click', function (e) {
            _this.$("#" + _this.modalId).modal({});
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('modal-trigger'),
        __metadata("design:type", String)
    ], ModalTriggerDirective.prototype, "modalId", void 0);
    ModalTriggerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[modal-trigger]'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_jquery_service__WEBPACK_IMPORTED_MODULE_1__["JQ_TOKEN"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Object])
    ], ModalTriggerDirective);
    return ModalTriggerDirective;
}());



/***/ }),

/***/ "./src/app/common/simpleModal.component.ts":
/*!*************************************************!*\
  !*** ./src/app/common/simpleModal.component.ts ***!
  \*************************************************/
/*! exports provided: simpleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleModalComponent", function() { return simpleModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jquery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jquery.service */ "./src/app/common/jquery.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var simpleModalComponent = /** @class */ (function () {
    function simpleModalComponent($) {
        this.$ = $;
    }
    simpleModalComponent.prototype.closeModal = function () {
        if (this.closeOnBodyClick.toLocaleLowerCase() === "true") {
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], simpleModalComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], simpleModalComponent.prototype, "elementId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], simpleModalComponent.prototype, "closeOnBodyClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalcontainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], simpleModalComponent.prototype, "containerEl", void 0);
    simpleModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-modal',
            template: "\n    <div id = \"{{elementId}}\" class=\"modal fade\" #modalcontainer tabindex=\"-1\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                 <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                    <span>&times;</span>\n                    </button>\n                    <h4 class=\"modal-title\">{{title}}</h4>\n                </div>\n                <div class=\"modal-body\" (click)=\"closeModal()\">\n                <ng-content></ng-content>\n                </div>\n             </div>\n         </div>\n    </div> \n    ",
            styles: ["\n    .modal-body { height:250px; overflow-y: scroll; }\n    "]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_jquery_service__WEBPACK_IMPORTED_MODULE_1__["JQ_TOKEN"])),
        __metadata("design:paramtypes", [Object])
    ], simpleModalComponent);
    return simpleModalComponent;
}());



/***/ }),

/***/ "./src/app/errors/e404/e404.component.css":
/*!************************************************!*\
  !*** ./src/app/errors/e404/e404.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errorMessage { \r\n    margin-top:150px; \r\n    font-size: 170px;\r\n    text-align: center; \r\n  }"

/***/ }),

/***/ "./src/app/errors/e404/e404.component.html":
/*!*************************************************!*\
  !*** ./src/app/errors/e404/e404.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"errorMessage\">404'd</h1>"

/***/ }),

/***/ "./src/app/errors/e404/e404.component.ts":
/*!***********************************************!*\
  !*** ./src/app/errors/e404/e404.component.ts ***!
  \***********************************************/
/*! exports provided: E404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E404Component", function() { return E404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var E404Component = /** @class */ (function () {
    function E404Component() {
    }
    E404Component.prototype.ngOnInit = function () {
    };
    E404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-e404',
            template: __webpack_require__(/*! ./e404.component.html */ "./src/app/errors/e404/e404.component.html"),
            styles: [__webpack_require__(/*! ./e404.component.css */ "./src/app/errors/e404/e404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], E404Component);
    return E404Component;
}());



/***/ }),

/***/ "./src/app/events/create-event/create-event.component.css":
/*!****************************************************************!*\
  !*** ./src/app/events/create-event/create-event.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "em {\r\n    float:right;\r\n    color: #E05C65;\r\n    padding-left: 10px;\r\n}\r\n.error input {background-color: #E3C3C5;}\r\n.error ::-webkit-input-placeholder {color: #999;}\r\n.error ::-webkit-input-placeholder {color: #999;}\r\n.error ::-moz-placeholder {color: #999;}\r\n.error :-moz-placeholder {color: #999;}\r\n.error :-ms-input-placeholder {color: #999;}\r\n\r\n"

/***/ }),

/***/ "./src/app/events/create-event/create-event.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/events/create-event/create-event.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>New Event</h1>\n<hr>\n<div class=\"col-md-6\">\n  <form #newEventForm=\"ngForm\" (ngSubmit)=\"saveEvent(newEventForm.value)\" autocomplete=\"off\" novalidate>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.name?.invalid && newEventForm.controls.name?.touched}\">\n      <label for=\"eventName\">Event Name:</label>\n      <em *ngIf=\"newEventForm.controls.name?.invalid && (newEventForm.controls.name?.touched)\">Required</em>\n      <input (ngModel)=\"newEvent.name\" name=\"name\" required id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name of your event...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.date?.invalid && newEventForm.controls.date?.touched}\">\n      <label for=\"eventDate\">Event Date:</label>\n      <em *ngIf=\"newEventForm.controls.date?.invalid && (newEventForm.controls.date?.touched)\">Required</em>\n      <input (ngModel)=\"newEvent.date\" name=\"date\" required id=\"eventDate\" type=\"text\" class=\"form-control\" placeholder=\"format (mm/dd/yyyy)...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.time?.invalid && newEventForm.controls.time?.touched}\">\n      <label for=\"eventTime\">Event Time:</label>\n      <em *ngIf=\"newEventForm.controls.time?.invalid && (newEventForm.controls.time?.touched)\">Required</em>\n      <input (ngModel)=\"newEvent.time\" name=\"time\" required id=\"eventTime\" type=\"text\" class=\"form-control\" placeholder=\"start and end time...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.price?.invalid && newEventForm.controls.price?.touched}\">\n      <label for=\"eventPrice\">Event Price:</label>\n      <em *ngIf=\"newEventForm.controls.price?.invalid && (newEventForm.controls.price?.touched)\">Required</em>\n      <input (ngModel)=\"newEvent.price\" name=\"price\" required id=\"eventPrice\" type=\"text\" type=\"number\" class=\"form-control\" placeholder=\"event price...\" />\n    </div>\n    <div ngModelGroup= \"location\"  #locationGroup = \"ngModelGroup\"validateLocation>\n    <div class=\"form-group\">\n      <label for=\"address\">Event Location:</label>\n      <em *ngIf=\"locationGroup?.invalid && locationGroup?.touched\">You must enter either the full location OR online URL</em>\n      <input (ngModel)=\"newEvent.address\" name=\"address\" id=\"address\" type=\"text\" class=\"form-control\" placeholder=\"Address of event...\" />\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <input (ngModel)=\"newEvent.city\" name=\"city\" id=\"city\" type=\"text\" class=\"form-control\" placeholder=\"City...\" />\n      </div>\n      <div class=\"col-md-6\" >\n        <input (ngModel)=\"newEvent.country\" name=\"country\" id=\"country\" type=\"text\" class=\"form-control\" placeholder=\"Country...\" />\n      </div>\n    </div>\n  </div>\n    <div class=\"form-group\">\n      <label for=\"onlineUrl\">Online Url:</label>\n      <input (ngModel)=\"newEvent.onlineUrl\" name=\"onlineUrl\" id=\"onlineUrl\" type=\"text\" class=\"form-control\" placeholder=\"Online Url...\"\n      (change)=\"locationGroup.control.controls.address.updateValueAndValidity()\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched}\">\n      <label for=\"imageUrl\">Image:</label>\n      <em *ngIf=\"newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched && newEventForm.controls.imageUrl?.errors.required\">Required</em>\n      <em *ngIf=\"newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched  && newEventForm.controls.imageUrl?.errors.pattern\">Must be a png or jpg url</em>\n      <input (ngModel)=\"newEvent.imageUrl\" name=\"imageUrl\" required pattern=\".*\\/.*.(png|jpg)\" id=\"imageUrl\" type=\"text\" class=\"form-control\" placeholder=\"url of image...\" />\n      <img [src]=\"newEventForm.controls.imageUrl.value\" *ngIf=\"newEventForm.controls. imageUrl?.valid\" />\n    </div>\n    \n    <button type=\"submit\" [disabled]=\"newEventForm.invalid\" class=\"btn btn-primary\">Save</button>\n    <button type=\"button\"  class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/events/create-event/create-event.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/events/create-event/create-event.component.ts ***!
  \***************************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_event_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/event/event.service */ "./src/app/shared/services/event/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.isDirty = true;
    }
    CreateEventComponent.prototype.ngOnInit = function () { };
    CreateEventComponent.prototype.saveEvent = function (formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    };
    CreateEventComponent.prototype.cancel = function () { this.router.navigate(['/events']); };
    CreateEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-event',
            template: __webpack_require__(/*! ./create-event.component.html */ "./src/app/events/create-event/create-event.component.html"),
            styles: [__webpack_require__(/*! ./create-event.component.css */ "./src/app/events/create-event/create-event.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_event_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/events/create-event/location-validator.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/events/create-event/location-validator.directive.ts ***!
  \*********************************************************************/
/*! exports provided: locationValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationValidator", function() { return locationValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var locationValidator = /** @class */ (function () {
    function locationValidator() {
    }
    locationValidator_1 = locationValidator;
    locationValidator.prototype.validate = function (FormGroup) {
        var addressControl = FormGroup.controls['address'];
        var cityControl = FormGroup.controls['city'];
        var countryControl = FormGroup.controls['country'];
        var onlineUrlControl = FormGroup.root.controls['onlineUrl'];
        if ((addressControl && addressControl.value && cityControl &&
            cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        }
        else {
            return { validateLocation: false };
        }
    };
    locationValidator = locationValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateLocation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: locationValidator_1, multi: true }]
        })
    ], locationValidator);
    return locationValidator;
    var locationValidator_1;
}());



/***/ }),

/***/ "./src/app/events/event-details/create-session/create-session.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/events/event-details/create-session/create-session.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "em {\r\n    float:right;\r\n    color: #E05C65;\r\n    padding-left: 10px;\r\n}\r\n.error input, .error select, .error textarea {background-color: #E3C3C5;}\r\n.error ::-webkit-input-placeholder {color: #999;}\r\n.error ::-webkit-input-placeholder {color: #999;}\r\n.error ::-moz-placeholder {color: #999;}\r\n.error :-moz-placeholder {color: #999;}\r\n.error :-ms-input-placeholder {color: #999;}\r\n\r\n"

/***/ }),

/***/ "./src/app/events/event-details/create-session/create-session.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/events/event-details/create-session/create-session.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <h3>Create Session</h3>\n</div>\n<div class=\"col-md-6\">\n  <form [formGroup]=\"newSessionForm\" (ngSubmit)=\"saveSession(newSessionForm.value)\" autocomplete=\"off\">\n    <div class=\"form-group \"[ngClass]=\"{'error':name.invalid && name.dirty}\">\n      <label for=\"sessionName\">Session Name:</label>\n      <em *ngIf=\"name.invalid && name.dirty\">Required</em>\n      <input formControlName=\"name\" id=\"sessionName\" type=\"text\" class=\"form-control\" placeholder=\"session name...\" />\n    </div>\n    <div class=\"form-group\"[ngClass]=\"{'error':presenter.invalid && presenter.dirty}\">\n      <label for=\"eventDate\">Presenter:</label>\n      <em *ngIf=\"presenter.invalid && presenter.dirty\">Required</em>\n      <input formControlName=\"presenter\" id=\"presenter\" type=\"text\" class=\"form-control\" placeholder=\"presenter...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error':duration.invalid && duration.dirty}\">\n      <label for=\"duration\">Duration:</label>\n      <em *ngIf=\"duration.invalid && duration.dirty\">Required</em>\n      <select formControlName=\"duration\" class=\"form-control\">\n        <option value=\"\">select duration...</option>\n        <option value=\"1\">Half Hour</option>\n        <option value=\"2\">1 Hour</option>\n        <option value=\"3\">Half Day</option>\n        <option value=\"4\">Full Day</option>\n      </select>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': level.invalid && level.dirty}\">\n      <label for=\"level\">Level:</label>\n      <em *ngIf=\"level.invalid && level.dirty \">Required</em>\n      <select formControlName=\"level\"class=\"form-control\">\n        <option value=\"\">select level...</option>\n        <option value=\"Beginner\">Beginner</option>\n        <option value=\"Intermediate\">Intermediate</option>\n        <option value=\"Advanced\">Advanced</option>\n      </select>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error':abstract.invalid && abstract.dirty}\">\n      <label for=\"abstract\">Abstract:</label>\n      <em *ngIf=\"abstract.invalid && abstract.dirty && abstract.errors.required\">Required</em>\n      <em *ngIf=\"abstract.invalid && abstract.dirty && abstract.errors.maxlength\">cannot exceed 400 characters</em>\n      <em *ngIf=\"abstract.invalid && abstract.dirty && abstract.errors.restrictedWords\">\n        restricted word found : {{abstract.errors.restrictedWords }}</em>\n      <textarea formControlName=\"abstract\" id=\"abstract\" rows=3 class=\"form-control\" placeholder=\"abstract...\"></textarea>\n    </div>\n    <button type=\"submit\" [disabled]=\"newSessionForm.invalid\" class=\"btn btn-primary\">Save</button>\n    <button type=\"button\" class=\"btn btn-default\"(click)=\"cancel()\" >Cancel</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/events/event-details/create-session/create-session.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/events/event-details/create-session/create-session.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return CreateSessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/index */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateSessionComponent = /** @class */ (function () {
    function CreateSessionComponent() {
        this.saveNewSession = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelAddSession = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CreateSessionComponent.prototype.ngOnInit = function () {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.presenter = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.duration = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.level = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.abstract = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(400), Object(_shared_index__WEBPACK_IMPORTED_MODULE_2__["restrictedWords"])(['foo', 'bar', '@'])]);
        this.newSessionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    };
    CreateSessionComponent.prototype.saveSession = function (formValues) {
        var session = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    };
    CreateSessionComponent.prototype.cancel = function () {
        this.cancelAddSession.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateSessionComponent.prototype, "saveNewSession", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateSessionComponent.prototype, "cancelAddSession", void 0);
    CreateSessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create-session',
            template: __webpack_require__(/*! ./create-session.component.html */ "./src/app/events/event-details/create-session/create-session.component.html"),
            styles: [__webpack_require__(/*! ./create-session.component.css */ "./src/app/events/event-details/create-session/create-session.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateSessionComponent);
    return CreateSessionComponent;
}());



/***/ }),

/***/ "./src/app/events/event-details/event-details.component.css":
/*!******************************************************************!*\
  !*** ./src/app/events/event-details/event-details.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container { padding-left: 20px; padding-right: 20px;}\r\n.event-image { height: 100px;}\r\na {cursor: pointer;}"

/***/ }),

/***/ "./src/app/events/event-details/event-details.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/events/event-details/event-details.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img [src]=\"event?.imageUrl\" [alt]=\"event?.name\" class=\"event-image\">\n\n  <div class=\"row\">\n    <div class=\"col-md-11\">\n      <h2>{{event?.name | uppercase}} </h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div><strong>Date:</strong> {{event?.date | date:shortDate}}</div>\n      <div><strong>Time:</strong> {{event?.time}}</div>\n      <div><strong>Price:</strong> {{event?.price | currency:'USD'}}</div>\n    </div>\n    <div class=\"col-md-6\">\n      <address>\n        <strong>Address:</strong><br />\n        {{event?.location?.address}}<br />\n        {{event?.location?.city}}, {{event?.location?.country}}\n      </address>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\" style=\"margin-bottom:10px\">\n    <div class=\"col-md-3\">\n      <h3 style=\"margin:0\">sessions</h3>\n    </div>\n    <div class=\"col-md-7\">\n        <div class=\"btn-group btn-group-sm\" style=\"margin-right:20px; margin-left: 20px; \">\n          <button class=\"btn btn-default\" [class.active]=\"sortBy==='name'\" (click)=\"sortBy='name'\">By Name</button>\n          <button class=\"btn btn-default\" [class.active]=\"sortBy==='votes'\" (click)=\"sortBy='votes'\">By Votes</button>\n\n        </div>\n      <div class=\"btn-group btn-group-sm\">\n        <button class=\"btn btn-default\" [class.active]=\"filterBy ==='all'\" (click)=\"filterBy ='all'\">All</button>\n        <button class=\"btn btn-default\" [class.active]=\"filterBy ==='begginer'\" (click)=\"filterBy ='beginner'\">Begginer</button>\n        <button class=\"btn btn-default\" [class.active]=\"filterBy ==='intermediate'\" (click)=\"filterBy ='intermediate'\">Intermediate</button>\n        <button class=\"btn btn-default\" [class.active]=\"filterBy ==='advanced'\" (click)=\"filterBy ='advanced'\">Advanced</button>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <a (click)=\"addSession()\">Add Session</a>\n    </div>\n  </div>\n  <session-list *ngIf=\"!addMode\" [filterBy]=\"filterBy\" [sessions]=\"event?.sessions\" [sortBy]=\"sortBy\"></session-list>\n  <create-session *ngIf=\"addMode\" (saveNewSession)=\"saveNewSession($event)\" (cancelAddSession)=\"cancelAddSession()\"></create-session>\n</div>"

/***/ }),

/***/ "./src/app/events/event-details/event-details.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/events/event-details/event-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: EventDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return EventDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_event_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/event/event.service */ "./src/app/shared/services/event/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventDetailsComponent = /** @class */ (function () {
    function EventDetailsComponent(eventService, activatedRoute) {
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.filterBy = 'all';
        this.sortBy = 'votes';
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            _this.event = _this.eventService.getEvent(+params['id']);
            _this.addMode = false;
        });
    };
    EventDetailsComponent.prototype.addSession = function () {
        this.addMode = true;
    };
    EventDetailsComponent.prototype.saveNewSession = function (session) {
        var nextId = Math.max.apply(null, this.event.sessions.map(function (s) { return s.id; }));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    };
    EventDetailsComponent.prototype.cancelAddSession = function () {
        this.addMode = false;
    };
    EventDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-details',
            template: __webpack_require__(/*! ./event-details.component.html */ "./src/app/events/event-details/event-details.component.html"),
            styles: [__webpack_require__(/*! ./event-details.component.css */ "./src/app/events/event-details/event-details.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_event_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());



/***/ }),

/***/ "./src/app/events/event-details/session-list/session-list.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/events/event-details/session-list/session-list.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/events/event-details/session-list/session-list.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/events/event-details/session-list/session-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let session of visibleSessions\">\n  <div class=\"col-md-1\">\n    <div *ngIf=\"auth.isAuthenticated()\">\n        <upvote (vote)=\"toggleVote(session)\" [count]=\"session.voters.length\" [voted]=\"userHasVoted(session)\"></upvote>\n    </div> \n  </div>\n    <div class=\"col-md-10\">\n      <collapsible-well [title]=\"session.name\">\n        <div well-title>\n          {{session.name}}\n          <i *ngIf=\"session.voters.length > 2 \" class=\"glyphicon glyphicon-fire\" style=\"color:red\"></i>\n        </div>\n        <div well-body>\n            <h6>{{session.presenter}}</h6>\n            <span>Duration: {{session.duration | duration}}</span><br />\n            <span>Level: {{session.level}}</span>\n            <p>{{session.abstract}}</p>\n\n        </div>\n          \n        </collapsible-well>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/events/event-details/session-list/session-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/events/event-details/session-list/session-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SessionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return SessionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _shared_services_voter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/voter.service */ "./src/app/shared/services/voter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionListComponent = /** @class */ (function () {
    function SessionListComponent(auth, voterService) {
        this.auth = auth;
        this.voterService = voterService;
        this.visibleSessions = [];
    }
    SessionListComponent.prototype.ngOnChanges = function () {
        if (this.sessions) {
            this.filterSession(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) :
                this.visibleSessions.sort(sortByVotesDesc);
        }
    };
    SessionListComponent.prototype.toggleVote = function (session) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.auth.currentUser.userName);
        }
        else {
            this.voterService.addVoter(session, this.auth.currentUser.userName);
        }
        if (this.sortBy === 'voters') {
            this.visibleSessions.sort(sortByVotesDesc);
        }
    };
    SessionListComponent.prototype.userHasVoted = function (session) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
    };
    SessionListComponent.prototype.filterSession = function (filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(function (session) {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SessionListComponent.prototype, "sessions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SessionListComponent.prototype, "filterBy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SessionListComponent.prototype, "sortBy", void 0);
    SessionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'session-list',
            template: __webpack_require__(/*! ./session-list.component.html */ "./src/app/events/event-details/session-list/session-list.component.html"),
            styles: [__webpack_require__(/*! ./session-list.component.css */ "./src/app/events/event-details/session-list/session-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _shared_services_voter_service__WEBPACK_IMPORTED_MODULE_2__["VoterService"]])
    ], SessionListComponent);
    return SessionListComponent;
}());

function sortByNameAsc(s1, s2) {
    if (s1.name > s2.name)
        return 1;
    else if (s1.name === s2.name)
        return 0;
    else
        return -1;
}
function sortByVotesDesc(s1, s2) {
    return s2.voters.length - s1.voters.length;
}


/***/ }),

/***/ "./src/app/events/event-details/upvote/upvote.component.css":
/*!******************************************************************!*\
  !*** ./src/app/events/event-details/upvote/upvote.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".votingWidgetContainer {\r\n    padding-left:24px;\r\n  }\r\n  \r\n  .votingWidget {\r\n    height: 64px;\r\n    padding-top: 7px;\r\n    border-radius: 21px;\r\n  }\r\n  \r\n  .votingButton {\r\n    margin-left: -7px;\r\n    margin-top: 1px;\r\n    cursor:pointer;\r\n  }\r\n  \r\n  .votingButton i {\r\n    color: white;\r\n  }\r\n  \r\n  .badge-inverse {\r\n    background-color: #fff;\r\n    color: #4e5d6c;\r\n  }\r\n  \r\n  .votingCount {\r\n    margin-left: -11px;\r\n    margin-top: 1px;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n  }"

/***/ }),

/***/ "./src/app/events/event-details/upvote/upvote.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/events/event-details/upvote/upvote.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"votingWidgetContainer pointable\" (click)=\"onclick()\">\n<div class=\"well votingWidget\">\n  <div class=\"votingButton\">\n    <i  class=\"glyphicon glyphicon-heart\" [style.color]=\"iconColor\"></i> \n  </div>\n  <div class=\"badge badge-inverse votingCount\">\n    <div>{{count}}</div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/events/event-details/upvote/upvote.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/events/event-details/upvote/upvote.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpvoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpvoteComponent", function() { return UpvoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpvoteComponent = /** @class */ (function () {
    function UpvoteComponent() {
        this.vote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(UpvoteComponent.prototype, "voted", {
        set: function (val) {
            this.iconColor = val ? 'red' : 'white';
        },
        enumerable: true,
        configurable: true
    });
    UpvoteComponent.prototype.ngOnInit = function () {
    };
    UpvoteComponent.prototype.onclick = function () {
        this.vote.emit({});
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UpvoteComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UpvoteComponent.prototype, "voted", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UpvoteComponent.prototype, "vote", void 0);
    UpvoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'upvote',
            template: __webpack_require__(/*! ./upvote.component.html */ "./src/app/events/event-details/upvote/upvote.component.html"),
            styles: [__webpack_require__(/*! ./upvote.component.css */ "./src/app/events/event-details/upvote/upvote.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpvoteComponent);
    return UpvoteComponent;
}());



/***/ }),

/***/ "./src/app/events/event-list/event-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/events/event-list/event-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/events/event-list/event-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/events/event-list/event-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <h1>Upcomong Angular Events</h1>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let event of events\" class=\"col-md-5\">\r\n      <app-event-thumbnail (click)=\"handleThumbnailClick(event.name)\"[event]=\"event\"></app-event-thumbnail>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/events/event-list/event-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/events/event-list/event-list.component.ts ***!
  \***********************************************************/
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_event_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/event/event.service */ "./src/app/shared/services/event/event.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventListComponent = /** @class */ (function () {
    function EventListComponent(eventService, toastr, activatedRoute) {
        this.eventService = eventService;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
    }
    EventListComponent.prototype.ngOnInit = function () {
        //  this.eventService.getEvents().subscribe(events => { this.events = events})
        this.events = this.activatedRoute.snapshot.data['events'];
    };
    EventListComponent.prototype.handleThumbnailClick = function (eventName) {
        this.toastr.error(eventName, eventName);
    };
    EventListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-list',
            template: __webpack_require__(/*! ./event-list.component.html */ "./src/app/events/event-list/event-list.component.html"),
            styles: [__webpack_require__(/*! ./event-list.component.css */ "./src/app/events/event-list/event-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_event_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EventListComponent);
    return EventListComponent;
}());



/***/ }),

/***/ "./src/app/events/event-list/event-thumbnail/event-thumbnail.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/events/event-list/event-thumbnail/event-thumbnail.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.thumbnail {min-height: 255px;}\r\n.pad-left {margin-left: 10px;}\r\n.well div {color: #bbb};\r\n"

/***/ }),

/***/ "./src/app/events/event-list/event-thumbnail/event-thumbnail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/events/event-list/event-thumbnail/event-thumbnail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div [routerLink]=\"['/events',event.id]\"class=\"well hoverwell thumbnail\" >\n    <h2>{{event.name | uppercase}}</h2>\n    <div>Date:{{event.date |date:shortDate}} </div>\n    <div [ngStyle]= \"getStartTimeStyle()\"[ngSwitch]=\"event?.time\">\n      Time:{{event.time}}\n      <span *ngSwitchCase=\"'8:00 am'\">(Early Start)</span>\n      <span *ngSwitchCase=\"'10:00 am'\">(Late Start)</span>\n      <span *ngSwitchDefault>(Normal Start)</span> \n    </div>\n    <div>Price:{{event.price | currency:'USD'}} </div>\n    <div>Date:{{event.name}} </div>\n    <div *ngIf=\"event?.location\">\n      <span>Location : {{event?.location.address}}</span>\n      <span class=\"pad-left\"> {{event.location.city}}</span> ,<span> {{event.location.country}}</span>\n    </div>\n    <div *ngIf=\"event?.onlineUrl\">\n      Online URL: {{event.onlineUrl}}\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/events/event-list/event-thumbnail/event-thumbnail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/events/event-list/event-thumbnail/event-thumbnail.component.ts ***!
  \********************************************************************************/
/*! exports provided: EventThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventThumbnailComponent", function() { return EventThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventThumbnailComponent = /** @class */ (function () {
    function EventThumbnailComponent() {
        this.someProperty = "some Value";
    }
    EventThumbnailComponent.prototype.ngOnInit = function () { };
    EventThumbnailComponent.prototype.getStartTimeStyle = function () {
        if (this.event && this.event.time === '8:00 am')
            return { color: 'green', 'font-weight': 'bold' };
        return {};
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EventThumbnailComponent.prototype, "event", void 0);
    EventThumbnailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-thumbnail',
            template: __webpack_require__(/*! ./event-thumbnail.component.html */ "./src/app/events/event-list/event-thumbnail/event-thumbnail.component.html"),
            styles: [__webpack_require__(/*! ./event-thumbnail.component.css */ "./src/app/events/event-list/event-thumbnail/event-thumbnail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventThumbnailComponent);
    return EventThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/events/index.ts":
/*!*********************************!*\
  !*** ./src/app/events/index.ts ***!
  \*********************************/
/*! exports provided: CreateEventComponent, EventDetailsComponent, EventListComponent, EventThumbnailComponent, CreateSessionComponent, SessionListComponent, UpvoteComponent, locationValidator, EventService, EventListResolverService, EventRouteActivatorService, EventRouteDeactivatorService, VoterService, restrictedWords, DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-event/create-event.component */ "./src/app/events/create-event/create-event.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_0__["CreateEventComponent"]; });

/* harmony import */ var _event_details_event_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-details/event-details.component */ "./src/app/events/event-details/event-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return _event_details_event_details_component__WEBPACK_IMPORTED_MODULE_1__["EventDetailsComponent"]; });

/* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-list/event-list.component */ "./src/app/events/event-list/event-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_2__["EventListComponent"]; });

/* harmony import */ var _event_list_event_thumbnail_event_thumbnail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-list/event-thumbnail/event-thumbnail.component */ "./src/app/events/event-list/event-thumbnail/event-thumbnail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventThumbnailComponent", function() { return _event_list_event_thumbnail_event_thumbnail_component__WEBPACK_IMPORTED_MODULE_3__["EventThumbnailComponent"]; });

/* harmony import */ var _event_details_create_session_create_session_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-details/create-session/create-session.component */ "./src/app/events/event-details/create-session/create-session.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return _event_details_create_session_create_session_component__WEBPACK_IMPORTED_MODULE_4__["CreateSessionComponent"]; });

/* harmony import */ var _event_details_session_list_session_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-details/session-list/session-list.component */ "./src/app/events/event-details/session-list/session-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return _event_details_session_list_session_list_component__WEBPACK_IMPORTED_MODULE_5__["SessionListComponent"]; });

/* harmony import */ var _event_details_upvote_upvote_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-details/upvote/upvote.component */ "./src/app/events/event-details/upvote/upvote.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpvoteComponent", function() { return _event_details_upvote_upvote_component__WEBPACK_IMPORTED_MODULE_6__["UpvoteComponent"]; });

/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/index */ "./src/app/shared/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_7__["EventService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventListResolverService", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_7__["EventListResolverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventRouteActivatorService", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_7__["EventRouteActivatorService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventRouteDeactivatorService", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_7__["EventRouteDeactivatorService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VoterService", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_7__["VoterService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restrictedWords", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_7__["restrictedWords"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_7__["DurationPipe"]; });

/* harmony import */ var _create_event_location_validator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-event/location-validator.directive */ "./src/app/events/create-event/location-validator.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationValidator", function() { return _create_event_location_validator_directive__WEBPACK_IMPORTED_MODULE_8__["locationValidator"]; });

// all components 







// all services

// validators



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav .navbar-nav{font-size:15px;}\r\n#searchForm {margin-right:100px;}\r\n@media (max-width:1200px) {#searchForm{display: none}}\r\nli > a.active { color: #F97924;}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >ngEvents</a>\n      </div>\n  \n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li>\n            <a [routerLink]=\"['/events']\"  routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">All Events</a>\n          </li>\n          <li><a [routerLink]=\"['/events/new']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Create Event</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" >\n              Events\n              <span class=\"caret\"></span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li >\n                <a href=\"\">Angular Connect</a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n        <div class=\"navbar-header navbar-right\">\n          <ul class=\"nav navbar-nav\">\n            <li>\n              <a *ngIf=\"!authService.isAuthenticated()\"[routerLink]=\"['user/login']\">Login</a>\n              <a *ngIf=\"authService.isAuthenticated()\"[routerLink]=\"['user/profile']\">Welcome {{authService.currentUser.firstName}}</a>\n            </li>\n          </ul>\n        </div>\n        <form id=\"searchForm\" (ngSubmit)=\"searchSessions(searchTerm)\" class=\"navbar-form navbar-right\"  >\n          <div class=\"form-group\">\n            <input [(ngModel)] =\"searchTerm\" name=\"searchTerm\" type=\"text\" class=\"form-control\" placeholder=\"Search Sessions\" >\n          </div>\n          <button class=\"btn btn-default\"  modal-trigger=\"searchResults\">\n            Search\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>  \n<simple-modal elementId=\"searchResults\" title=\"matching Sessions\" closeOnBodyClick=\"true\">\n    <div class=\"list-group\">\n      <a *ngFor=\"let session of foundSessions\" [routerLink]=\"['/events',session.eventId]\"  class=\"list-group-item\"> {{session.name}}</a>\n    </div>\n  </simple-modal>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _shared_services_event_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/event/event.service */ "./src/app/shared/services/event/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, eventService) {
        this.authService = authService;
        this.eventService = eventService;
        this.searchTerm = "";
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.searchSessions = function (searchTerm) {
        var _this = this;
        this.eventService.searchSessions(searchTerm).subscribe(function (sessions) {
            _this.foundSessions = sessions;
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _shared_services_event_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: EventService, EventListResolverService, EventRouteActivatorService, EventRouteDeactivatorService, VoterService, restrictedWords, DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_event_event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/event/event.service */ "./src/app/shared/services/event/event.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _services_event_event_service__WEBPACK_IMPORTED_MODULE_0__["EventService"]; });

/* harmony import */ var _services_event_list_resolver_event_list_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/event-list-resolver/event-list-resolver.service */ "./src/app/shared/services/event-list-resolver/event-list-resolver.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventListResolverService", function() { return _services_event_list_resolver_event_list_resolver_service__WEBPACK_IMPORTED_MODULE_1__["EventListResolverService"]; });

/* harmony import */ var _services_event_route_activator_event_route_activator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/event-route-activator/event-route-activator.service */ "./src/app/shared/services/event-route-activator/event-route-activator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventRouteActivatorService", function() { return _services_event_route_activator_event_route_activator_service__WEBPACK_IMPORTED_MODULE_2__["EventRouteActivatorService"]; });

/* harmony import */ var _services_event_route_deactivator_event_route_deactivator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/event-route-deactivator/event-route-deactivator.service */ "./src/app/shared/services/event-route-deactivator/event-route-deactivator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventRouteDeactivatorService", function() { return _services_event_route_deactivator_event_route_deactivator_service__WEBPACK_IMPORTED_MODULE_3__["EventRouteDeactivatorService"]; });

/* harmony import */ var _services_voter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/voter.service */ "./src/app/shared/services/voter.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VoterService", function() { return _services_voter_service__WEBPACK_IMPORTED_MODULE_4__["VoterService"]; });

/* harmony import */ var _restricted_words_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restricted-words.validator */ "./src/app/shared/restricted-words.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restrictedWords", function() { return _restricted_words_validator__WEBPACK_IMPORTED_MODULE_5__["restrictedWords"]; });

/* harmony import */ var _pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/duration.pipe */ "./src/app/shared/pipes/duration.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return _pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_6__["DurationPipe"]; });

// services





// validators

// pipes



/***/ }),

/***/ "./src/app/shared/pipes/duration.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/duration.pipe.ts ***!
  \***********************************************/
/*! exports provided: DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return DurationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DurationPipe = /** @class */ (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value) {
        switch (value) {
            case 1: return 'Half Hour';
            case 2: return 'One Hour';
            case 3: return 'Half Day';
            case 4: return 'Full Day';
            default: return value.toString();
        }
    };
    DurationPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'duration' })
    ], DurationPipe);
    return DurationPipe;
}());



/***/ }),

/***/ "./src/app/shared/restricted-words.validator.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/restricted-words.validator.ts ***!
  \******************************************************/
/*! exports provided: restrictedWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restrictedWords", function() { return restrictedWords; });
function restrictedWords(words) {
    return function (control) {
        if (!words)
            return null;
        var invalidWords = words
            .map(function (w) { return control.value.includes(w) ? w : null; }).filter(function (w) { return w != null; });
        return invalidWords && invalidWords.length > 0
            ? { 'restrictedWords': invalidWords.join(',') }
            : null;
    };
}


/***/ }),

/***/ "./src/app/shared/services/auth/auth.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.loginUser = function (userName, password) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Niro',
            lastName: 'lipsitz'
        };
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    AuthService.prototype.updateCurrentUser = function (firstName, lastName) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/event-list-resolver/event-list-resolver.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/services/event-list-resolver/event-list-resolver.service.ts ***!
  \************************************************************************************/
/*! exports provided: EventListResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListResolverService", function() { return EventListResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event/event.service */ "./src/app/shared/services/event/event.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventListResolverService = /** @class */ (function () {
    function EventListResolverService(eventService) {
        this.eventService = eventService;
    }
    EventListResolverService.prototype.resolve = function () {
        return this.eventService.getEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (events) { return events; }));
    };
    EventListResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_event_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], EventListResolverService);
    return EventListResolverService;
}());



/***/ }),

/***/ "./src/app/shared/services/event-route-activator/event-route-activator.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/services/event-route-activator/event-route-activator.service.ts ***!
  \****************************************************************************************/
/*! exports provided: EventRouteActivatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRouteActivatorService", function() { return EventRouteActivatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event/event.service */ "./src/app/shared/services/event/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventRouteActivatorService = /** @class */ (function () {
    function EventRouteActivatorService(eventService, router) {
        this.eventService = eventService;
        this.router = router;
    }
    EventRouteActivatorService.prototype.canActivate = function (route) {
        var eventExists = !!this.eventService.getEvent(+route.params['id']);
        if (!eventExists)
            this.router.navigate(['/404']);
        return eventExists;
    };
    EventRouteActivatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_event_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EventRouteActivatorService);
    return EventRouteActivatorService;
}());



/***/ }),

/***/ "./src/app/shared/services/event-route-deactivator/event-route-deactivator.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/services/event-route-deactivator/event-route-deactivator.service.ts ***!
  \********************************************************************************************/
/*! exports provided: EventRouteDeactivatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRouteDeactivatorService", function() { return EventRouteDeactivatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventRouteDeactivatorService = /** @class */ (function () {
    function EventRouteDeactivatorService() {
    }
    EventRouteDeactivatorService.prototype.canDeactivate = function (component) {
        if (component.isDirty)
            return window.confirm('you not save the event');
        return true;
    };
    EventRouteDeactivatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EventRouteDeactivatorService);
    return EventRouteDeactivatorService;
}());



/***/ }),

/***/ "./src/app/shared/services/event/event.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/event/event.service.ts ***!
  \********************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = /** @class */ (function () {
    function EventService() {
    }
    EventService.prototype.getEvents = function () {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(function () { subject.next(EVENTS); subject.complete(); }, 100);
        return subject;
    };
    EventService.prototype.saveEvent = function (event) {
        event.id = 999;
        event.session = [];
        EVENTS.push(event);
    };
    EventService.prototype.updateEvent = function (event) {
        var index = EVENTS.findIndex(function (x) { return x.id = event.id; });
        EVENTS[index] = event;
    };
    EventService.prototype.searchSessions = function (searchTerm) {
        var term = searchTerm.toLocaleLowerCase();
        var results = [];
        EVENTS.forEach(function (event) {
            var matchingSessions = event.sessions.filter(function (Session) {
                return Session.name.toLocaleLowerCase().indexOf(term) > -1;
            });
            matchingSessions = matchingSessions.map(function (session) {
                session.eventId = event.id;
                return session;
            });
            results = results.concat(matchingSessions);
        });
        var emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        setTimeout(function () {
            emitter.emit(results);
        }, 100);
        return emitter;
    };
    EventService.prototype.getEvent = function (id) {
        return EVENTS.find(function (event) { return event.id === id; });
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EventService);
    return EventService;
}());

var EVENTS = [
    {
        id: 1,
        name: 'Angular Connect',
        date: new Date('9/26/2036'),
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        },
        sessions: [
            {
                id: 1,
                name: "Using Angular 4 Pipes",
                presenter: "Peter Bacon Darwin",
                duration: 1,
                level: "Intermediate",
                abstract: "Learn all about the new pipes in Angular 4, both \n        how to write them, and how to get the new AI CLI to write \n        them for you. Given by the famous PBD, president of Angular \n        University (formerly Oxford University)",
                voters: ['bradgreen', 'igorminar', 'martinfowler']
            },
            {
                id: 2,
                name: "Getting the most out of your dev team",
                presenter: "Jeff Cross",
                duration: 1,
                level: "Intermediate",
                abstract: "We all know that our dev teams work hard, but with \n        the right management they can be even more productive, without \n        overworking them. In this session I'll show you how to get the \n        best results from the talent you already have on staff.",
                voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
            },
            {
                id: 3,
                name: "Angular 4 Performance Metrics",
                presenter: "Rob Wormald",
                duration: 2,
                level: "Advanced",
                abstract: "Angular 4 Performance is hot. In this session, we'll see \n        how Angular gets such great performance by preloading data on \n        your users devices before they even hit your site using the \n        new predictive algorithms and thought reading software \n        built into Angular 4.",
                voters: []
            },
            {
                id: 4,
                name: "Angular 5 Look Ahead",
                presenter: "Brad Green",
                duration: 2,
                level: "Advanced",
                abstract: "Even though Angular 5 is still 6 years away, we all want \n        to know all about it so that we can spend endless hours in meetings \n        debating if we should use Angular 4 or not. This talk will look at \n        Angular 6 even though no code has yet been written for it. We'll \n        look at what it might do, and how to convince your manager to \n        hold off on any new apps until it's released",
                voters: []
            },
            {
                id: 5,
                name: "Basics of Angular 4",
                presenter: "John Papa",
                duration: 2,
                level: "Beginner",
                abstract: "It's time to learn the basics of Angular 4. This talk \n        will give you everything you need to know about Angular 4 to \n        get started with it today and be building UI's for your self \n        driving cars and butler-bots in no time.",
                voters: ['bradgreen', 'igorminar']
            }
        ]
    },
    {
        id: 2,
        name: 'ng-nl',
        date: new Date('4/15/2037'),
        time: '9:00 am',
        price: 950.00,
        imageUrl: '/assets/images/ng-nl.png',
        location: {
            address: 'The NG-NL Convention Center & Scuba Shop',
            city: 'Amsterdam',
            country: 'Netherlands',
        },
        onlineUrl: "www.walla.co.il",
        sessions: [
            {
                id: 1,
                name: "Testing Angular 4 Workshop",
                presenter: "Pascal Precht & Christoph Bergdorf",
                duration: 4,
                level: "Beginner",
                abstract: "In this 6 hour workshop you will learn not only how to test Angular 4, \n        you will also learn how to make the most of your team's efforts. Other topics\n        will be convincing your manager that testing is a good idea, and using the new\n        protractor tool for end to end testing.",
                voters: ['bradgreen', 'igorminar']
            },
            {
                id: 2,
                name: "Angular 4 and Firebase",
                presenter: "David East",
                duration: 3,
                level: "Intermediate",
                abstract: "In this workshop, David East will show you how to use Angular with the new\n        ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.",
                voters: ['bradgreen', 'igorminar', 'johnpapa']
            },
            {
                id: 3,
                name: "Reading the Angular 4 Source",
                presenter: "Patrick Stapleton",
                duration: 2,
                level: "Intermediate",
                abstract: "Angular 4's source code may be over 25 million lines of code, but it's really \n        a lot easier to read and understand then you may think. Patrick Stapleton will talk\n        about his secretes for keeping up with the changes, and navigating around the code.",
                voters: ['martinfowler']
            },
            {
                id: 4,
                name: "Hail to the Lukas",
                presenter: "Lukas Ruebbelke",
                duration: 1,
                level: "Beginner",
                abstract: "In this session, Lukas will present the \n        secret to being awesome, and how he became the President \n        of the United States through his amazing programming skills, \n        showing how you too can be success with just attitude.",
                voters: ['bradgreen']
            },
        ]
    },
    {
        id: 3,
        name: 'ng-conf 2037',
        date: new Date('5/4/2037'),
        time: '9:00 am',
        price: 759.00,
        imageUrl: '/assets/images/ng-conf.png',
        location: {
            address: 'The Palatial America Hotel',
            city: 'Salt Lake City',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: "How Elm Powers Angular 4",
                presenter: "Murphy Randle",
                duration: 2,
                level: "Intermediate",
                abstract: "We all know that Angular is written in Elm, but did you\n        know how the source code is really written? In this exciting look\n        into the internals of Angular 4, we'll see exactly how Elm powers\n        the framework, and what you can do to take advantage of this knowledge.",
                voters: ['bradgreen', 'martinfowler', 'igorminar']
            },
            {
                id: 2,
                name: "Angular and React together",
                presenter: "Jamison Dance",
                duration: 2,
                level: "Intermediate",
                abstract: "React v449.6 has just been released. Let's see how to use \n        this new version with Angular to create even more impressive applications.",
                voters: ['bradgreen', 'martinfowler']
            },
            {
                id: 3,
                name: "Redux Woes",
                presenter: "Rob Wormald",
                duration: 1,
                level: "Intermediate",
                abstract: "Everyone is using Redux for everything from Angular to React to \n        Excel macros, but you're still having trouble grasping it? We'll take a look\n        at how farmers use Redux when harvesting grain as a great introduction to \n        this game changing technology.",
                voters: ['bradgreen', 'martinfowler', 'johnpapa']
            },
            {
                id: 4,
                name: "ng-wat again!!",
                presenter: "Shai Reznik",
                duration: 1,
                level: "Beginner",
                abstract: "Let's take a look at some of the stranger pieces of Angular 4,\n        including neural net nets, Android in Androids, and using pipes with actual pipes.",
                voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa']
            },
            {
                id: 5,
                name: "Dressed for Success",
                presenter: "Ward Bell",
                duration: 2,
                level: "Beginner",
                abstract: "Being a developer in 2037 is about more than just writing bug-free code. \n        You also have to look the part. In this amazing expose, Ward will talk you through\n        how to pick out the right clothes to make your coworkers and boss not only\n        respect you, but also want to be your buddy.",
                voters: ['bradgreen', 'martinfowler']
            },
            {
                id: 6,
                name: "These aren't the directives you're looking for",
                presenter: "John Papa",
                duration: 2,
                level: "Intermediate",
                abstract: "Coinciding with the release of Star Wars Episode 18, this talk will show how\n        to use directives in your Angular 4 development while drawing lessons from the new movie,\n        featuring all your favorite characters like Han Solo's ghost and Darth Jar Jar.",
                voters: ['bradgreen', 'martinfowler']
            },
        ]
    },
    {
        id: 4,
        name: 'UN Angular Summit',
        date: new Date('6/10/2037'),
        time: '8:00 am',
        price: 800.00,
        imageUrl: '/assets/images/basic-shield.png',
        location: {
            address: 'The UN Angular Center',
            city: 'New York',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: "Diversity in Tech",
                presenter: "Sir Dave Smith",
                duration: 2,
                level: "Beginner",
                abstract: "Yes, we all work with cyborgs and androids and Martians, but \n        we probably don't realize that sometimes our internal biases can make it difficult for\n        these well-designed coworkers to really feel at home coding alongside us. This talk will\n        look at things we can do to recognize our biases and counteract them.",
                voters: ['bradgreen', 'igorminar']
            },
            {
                id: 2,
                name: "World Peace and Angular",
                presenter: "US Secretary of State Zach Galifianakis",
                duration: 2,
                level: "Beginner",
                abstract: "Angular has been used in most of the major peace brokering that has\n        happened in the last decade, but there is still much we can do to remove all\n        war from the world, and Angular will be a key part of that effort.",
                voters: ['bradgreen', 'igorminar', 'johnpapa']
            },
            {
                id: 3,
                name: "Using Angular with Androids",
                presenter: "Dan Wahlin",
                duration: 3,
                level: "Advanced",
                abstract: "Androids may do everything for us now, allowing us to spend all day playing \n        the latest Destiny DLC, but we can still improve the massages they give and the handmade\n        brie they make using Angular 4. This session will show you how.",
                voters: ['igorminar', 'johnpapa']
            },
        ]
    },
    {
        id: 5,
        name: 'ng-vegas',
        date: new Date('2/10/2037'),
        time: '9:00 am',
        price: 400.00,
        imageUrl: '/assets/images/ng-vegas.png',
        location: {
            address: 'The Excalibur',
            city: 'Las Vegas',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: "Gambling with Angular",
                presenter: "John Papa",
                duration: 1,
                level: "Intermediate",
                abstract: "No, this talk isn't about slot machines. We all know that \n        Angular is used in most waiter-bots and coke vending machines, but\n        did you know that was also used to write the core engine in the majority\n        of voting machines? This talk will look at how all presidential elections\n        are now determined by Angular code.",
                voters: ['bradgreen', 'igorminar']
            },
            {
                id: 2,
                name: "Angular 4 in 60ish Minutes",
                presenter: "Dan Wahlin",
                duration: 2,
                level: "Beginner",
                abstract: "Get the skinny on Angular 4 for anyone new to this great new technology.\n        Dan Wahlin will show you how you can get started with Angular in 60ish minutes, \n        guaranteed!",
                voters: ['bradgreen', 'igorminar', 'johnpapa']
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/services/voter.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/voter.service.ts ***!
  \**************************************************/
/*! exports provided: VoterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoterService", function() { return VoterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VoterService = /** @class */ (function () {
    function VoterService() {
    }
    VoterService.prototype.deleteVoter = function (session, voterName) {
        session.voters = session.voters.filter(function (voter) { return voter !== voterName; });
    };
    VoterService.prototype.addVoter = function (session, voterName) {
        session.voters.push(voterName);
    };
    VoterService.prototype.userHasVoted = function (session, voterName) {
        return session.voters.some(function (voter) { return voter === voterName; });
    };
    VoterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], VoterService);
    return VoterService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\Angular fundamentls\fundamentals\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map