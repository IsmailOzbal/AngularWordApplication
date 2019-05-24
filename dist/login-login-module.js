(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\r\n<div class=\"login-page\">\r\n    <div class=\"content\">\r\n        <!-- <h1 class=\"app-name\">Sb Admin Material</h1> -->\r\n   \r\n        <form class=\"login-form\" [formGroup]='LoginForm' (ngSubmit)='onSubmit()'   >\r\n            <div class=\"text-center\">\r\n                <h2 class=\"app-name\">OWN DICTIONARY</h2>\r\n            </div>\r\n            <div fxFlex  fxlayout=\"row\" fxlayout.lt-md=\"column\">\r\n                <div fxFlexFill>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Username\" formControlName=\"Email\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div fxFlex  fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n                <div fxFlexFill>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"Password\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div fxFlex  fxLayout=\"row\" fxLayout.lt-md=\"column\" style=\"margin: 20px 0 30px 0\">\r\n                <div fxFlex>\r\n                    <mat-checkbox color=\"primary\">Remember Me</mat-checkbox>\r\n                </div>\r\n                <div fxFlex  fxLayoutAlign=\"end\">\r\n                    <a  [routerLink]=\"['/register']\">New User</a>\r\n                </div>\r\n            </div>\r\n            <div fxFlex  fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n                <div fxFlexFill>\r\n                    <button mat-raised-button color=\"primary\" class=\"w-100\">LOGIN</button>\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: relative; }\n  .login-page .content {\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .login-page .content .app-name {\n      margin-top: 0px;\n      padding-bottom: 10px;\n      font-size: 32px; }\n  .login-page .content .login-form {\n      padding: 40px;\n      background: #fff;\n      width: 500px;\n      box-shadow: 0 0 10px #ddd; }\n  .login-page .content .login-form input:-webkit-autofill {\n        -webkit-box-shadow: 0 0 0 30px white inset; }\n  .login-page:after {\n    content: '';\n    background: #fff;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 50%;\n    right: 0; }\n  .login-page:before {\n    content: '';\n    background: #3f51b5;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    bottom: 0;\n    right: 0; }\n  .text-center {\n  text-align: center; }\n  .w-100 {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxPd25lclxcRG9jdW1lbnRzXFxHaXRIdWJcXEFuZ3VsYXJXb3JkTGlzdEFwcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0VBTHRCO0lBT1EsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCLEVBQUE7RUFWL0I7TUFZWSxlQUFlO01BQ2Ysb0JBQW9CO01BQ3BCLGVBQWUsRUFBQTtFQWQzQjtNQWlCWSxhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWix5QkFBeUIsRUFBQTtFQXBCckM7UUFzQmdCLDBDQUEwQyxFQUFBO0VBdEIxRDtJQTRCUSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxRQUFRLEVBQUE7RUFsQ2hCO0lBcUNRLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVEsRUFBQTtFQUdoQjtFQUNJLGtCQUFrQixFQUFBO0VBRXRCO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcGFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC5hcHAtbmFtZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ2luLWZvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNkZGQ7XHJcbiAgICAgICAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzMHB4IHdoaXRlIGluc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogNTAlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnctMTAwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_Model_Token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Model/Token */ "./src/app/shared/Model/Token.ts");
/* harmony import */ var _shared_Model_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Model/User */ "./src/app/shared/Model/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, loginService, spinner) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.spinner = spinner;
        this.user = new _shared_Model_User__WEBPACK_IMPORTED_MODULE_6__["UserModel"]();
        this.token = new src_app_shared_Model_Token__WEBPACK_IMPORTED_MODULE_5__["Token"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.LoginForm = this.formBuilder.group({
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.LoginForm.valid) {
            this.spinner.show();
            this.user.username = this.LoginForm.value.Email;
            this.user.password = this.LoginForm.value.Password;
            this.loginService
                .Login(this.user)
                .toPromise()
                .then(function (res) {
                _this.token = res;
                _this.AccessLogin();
            });
        }
    };
    LoginComponent.prototype.AccessLogin = function () {
        if (this.token !== undefined) {
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('token', this.token.token);
            localStorage.setItem('expiredate', this.token.expireDate);
            localStorage.setItem('userid', this.token.userId.toString());
            this.router.navigate(['/dashboard']);
        }
        else {
            this.spinner.hide();
        }
    };
    LoginComponent.prototype.onLogin = function () {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginRoutingModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map