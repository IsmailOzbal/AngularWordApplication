(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    }
];
var RegisterRoutingModule = /** @class */ (function () {
    function RegisterRoutingModule() {
    }
    RegisterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegisterRoutingModule);
    return RegisterRoutingModule;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\r\n<div class=\"register-page\">\r\n  <div class=\"content\">\r\n    <form class=\"register-form\" [formGroup]='RegisterForm' (ngSubmit)='onSubmit()' >\r\n      <div class=\"text-center\">\r\n        <h2 class=\"app-name\">NEW USER</h2>\r\n      </div>\r\n      <div fxFlex fxlayout=\"row\" fxlayout.lt-md=\"column\">\r\n        <div fxFlexFill>\r\n          <mat-form-field class=\"w-100\">\r\n            <input matInput placeholder=\"Name\" formControlName=\"Name\"  />\r\n           \r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div fxFlex fxlayout=\"row\" fxlayout.lt-md=\"column\">\r\n        <div fxFlexFill>\r\n          <mat-form-field class=\"w-100\">\r\n            <input matInput placeholder=\"Surname\" formControlName=\"Surname\" />\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div fxFlex fxlayout=\"row\" fxlayout.lt-md=\"column\">\r\n        <div fxFlexFill>\r\n          <mat-form-field class=\"w-100\">\r\n            <input matInput placeholder=\"Username is minimum 6 character\" formControlName=\"Username\" />\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div fxFlex fxlayout=\"row\" fxlayout.lt-md=\"column\">\r\n        <div fxFlexFill>\r\n          <mat-form-field class=\"w-100\">\r\n            <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"Email\" />\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n        <div fxFlexFill>\r\n          <mat-form-field class=\"w-100\">\r\n            <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"Password\" />\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n        <div fxFlexFill>\r\n          <button mat-raised-button color=\"primary\" class=\"w-100\">SAVE</button>\r\n        </div>\r\n      </div>\r\n      <hr/>\r\n      <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n        <div fxFlexFill>\r\n        \r\n            <a mat-list-item   [routerLink]=\"['/login']\">\r\n                <mat-icon class=\"sidenav-icon\">touch_app</mat-icon> Login\r\n            </a>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: relative; }\n  .register-page .content {\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .register-page .content .app-name {\n      margin-top: 0px;\n      padding-bottom: 10px;\n      font-size: 32px; }\n  .register-page .content .register-form {\n      padding: 40px;\n      background: #fff;\n      width: 500px;\n      box-shadow: 0 0 10px #ddd; }\n  .register-page .content .register-form input:-webkit-autofill {\n        -webkit-box-shadow: 0 0 0 30px white inset; }\n  .register-page:after {\n    content: '';\n    background: #fff;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 50%;\n    right: 0; }\n  .register-page:before {\n    content: '';\n    background: #3f51b5;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    bottom: 0;\n    right: 0; }\n  .text-center {\n  text-align: center; }\n  .w-100 {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxPd25lclxcRG9jdW1lbnRzXFxHaXRIdWJcXEFuZ3VsYXJXb3JkTGlzdEFwcC9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0VBTHRCO0lBT1EsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCLEVBQUE7RUFWL0I7TUFZWSxlQUFlO01BQ2Ysb0JBQW9CO01BQ3BCLGVBQWUsRUFBQTtFQWQzQjtNQWlCWSxhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWix5QkFBeUIsRUFBQTtFQXBCckM7UUFzQmdCLDBDQUEwQyxFQUFBO0VBdEIxRDtJQTRCUSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxRQUFRLEVBQUE7RUFsQ2hCO0lBcUNRLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVEsRUFBQTtFQUdoQjtFQUNJLGtCQUFrQixFQUFBO0VBRXRCO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItcGFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC5hcHAtbmFtZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlZ2lzdGVyLWZvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNkZGQ7XHJcbiAgICAgICAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzMHB4IHdoaXRlIGluc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogNTAlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnctMTAwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_services_insert_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/insert-user.service */ "./src/app/shared/services/insert-user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(spinner, router, formBuilder, inserUser, toastr) {
        this.spinner = spinner;
        this.router = router;
        this.formBuilder = formBuilder;
        this.inserUser = inserUser;
        this.toastr = toastr;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.RegisterForm = this.formBuilder.group({
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.RegisterForm.invalid) {
            return;
        }
        this.spinner.show();
        this.inserUser
            .AddUser(this.RegisterForm.value)
            .toPromise()
            .then(function (res) {
            _this.user = res;
            _this.spinner.hide();
            _this.Success();
        });
    };
    RegisterComponent.prototype.Success = function () {
        if (this.user !== undefined) {
            this.toastr.success('User added succesfully');
            // tslint:disable-next-line:no-unused-expression
            this.router.navigate(['/login']);
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _shared_services_insert_user_service__WEBPACK_IMPORTED_MODULE_5__["InsertUserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterRoutingModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ],
            declarations: [_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/shared/services/insert-user.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/insert-user.service.ts ***!
  \********************************************************/
/*! exports provided: InsertUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertUserService", function() { return InsertUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Model_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Model/Global */ "./src/app/shared/Model/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InsertUserService = /** @class */ (function () {
    function InsertUserService(http, toastrService) {
        this.http = http;
        this.toastrService = toastrService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
    }
    InsertUserService.prototype.AddUser = function (user) {
        var body = new URLSearchParams();
        body.set('Name', user.Name);
        body.set('Surname', user.Surname);
        body.set('Username', user.Username);
        body.set('Password', user.Password);
        body.set('IsActive', 'true');
        body.set('Email', user.Email);
        return this.http
            .post(_Model_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BaseUri + 'AddUser', body.toString(), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('AddUser')));
    };
    InsertUserService.prototype.log = function (message) {
        this.toastrService.error('Error insert user');
    };
    InsertUserService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    InsertUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], InsertUserService);
    return InsertUserService;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map