(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-info-user-info-module"],{

/***/ "./src/app/layout/user-info/user-info-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/user-info/user-info-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: UserInfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoRoutingModule", function() { return UserInfoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-info.component */ "./src/app/layout/user-info/user-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _user_info_component__WEBPACK_IMPORTED_MODULE_2__["UserInfoComponent"]
    }
];
var UserInfoRoutingModule = /** @class */ (function () {
    function UserInfoRoutingModule() {
    }
    UserInfoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserInfoRoutingModule);
    return UserInfoRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/user-info/user-info.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/user-info/user-info.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\r\n<div class=\"card\">\r\n  <div class=\"card-header\">User Information</div>\r\n  <div class=\"card-body\">\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"ChangePassword()\">\r\n           <div class=\"row\">\r\n               <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                        <label>Name</label>\r\n                        <label class=\"form-control\">{{user.firstName}}</label>\r\n                  </div>\r\n               </div>\r\n\r\n               <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                            <label>Surname</label>\r\n                            <label class=\"form-control\">{{user.lastName}}</label>\r\n    \r\n                      </div>\r\n                </div>\r\n           </div>\r\n\r\n           <div class=\"row\">\r\n               <div class=\"col-md-6\">\r\n                   <div class=\"form-group\">\r\n                       <label>Username</label>\r\n                       <label class=\"form-control\">{{user.username}}</label>\r\n                   </div>\r\n               </div>\r\n           </div>\r\n           <hr/>\r\n\r\n           <div class=\"row\">\r\n               <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                            <div *ngIf=\"submitted && f['password'].errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f['password'].errors.required\">Password is required</div>\r\n                                <div *ngIf=\"f['password'].errors.minlength\">Password must be at least 6 characters</div>\r\n                            </div>\r\n                        </div>\r\n               </div>\r\n\r\n               <div class=\"col-md-6\">\r\n                         \r\n \r\n            <div class=\"form-group\">\r\n                    <label>Confirm Password</label>\r\n                    <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\r\n                    <div *ngIf=\"submitted && f['confirmPassword'].errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f['confirmPassword'].errors.required\">Confirm Password is required</div>\r\n                        <div *ngIf=\"f['confirmPassword'].errors.mustMatch\">Passwords must match</div>\r\n                    </div>\r\n                </div>\r\n               </div>\r\n           </div>\r\n\r\n\r\n    \r\n    \r\n            <div class=\"form-group\">\r\n                    <button mat-raised-button color=\"primary\">Password Change</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/user-info/user-info.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/user-info/user-info.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/user-info/user-info.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/user-info/user-info.component.ts ***!
  \*********************************************************/
/*! exports provided: UserInfoComponent, MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_services_change_password_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/change-password.service */ "./src/app/shared/services/change-password.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserInfoComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function UserInfoComponent(spinner, loginservice, changePassword, formBuilder, toastrService) {
        var _this = this;
        this.spinner = spinner;
        this.loginservice = loginservice;
        this.changePassword = changePassword;
        this.formBuilder = formBuilder;
        this.toastrService = toastrService;
        this.submitted = false;
        this.registerForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
        this.userId = localStorage.getItem('userid');
        this.spinner.show();
        this.loginservice
            .GetUser(this.userId)
            .toPromise()
            .then(function (res) {
            console.log(res[0]);
            _this.user = res[0];
            _this.spinner.hide();
        });
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(UserInfoComponent.prototype, "f", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserInfoComponent.prototype.ChangePassword = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.spinner.show();
        this.changePassword
            .ChangePassword(localStorage.getItem('userid'), this.registerForm.value.password)
            .toPromise()
            .then(function (res) {
            _this.user = res;
            _this.spinner.hide();
            _this.Success();
        });
    };
    UserInfoComponent.prototype.Success = function () {
        if (this.user !== undefined) {
            this.toastrService.success('User password changed succesfully');
        }
    };
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/layout/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.scss */ "./src/app/layout/user-info/user-info.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], src_app_shared_services_change_password_service__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());

function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/layout/user-info/user-info.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/user-info/user-info.module.ts ***!
  \******************************************************/
/*! exports provided: UserInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoModule", function() { return UserInfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/modules/stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony import */ var _user_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-info-routing.module */ "./src/app/layout/user-info/user-info-routing.module.ts");
/* harmony import */ var _user_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-info.component */ "./src/app/layout/user-info/user-info.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UserInfoModule = /** @class */ (function () {
    function UserInfoModule() {
    }
    UserInfoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_user_info_component__WEBPACK_IMPORTED_MODULE_6__["UserInfoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _user_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserInfoRoutingModule"],
                _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_4__["StatModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ]
        })
    ], UserInfoModule);
    return UserInfoModule;
}());



/***/ }),

/***/ "./src/app/shared/services/change-password.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/change-password.service.ts ***!
  \************************************************************/
/*! exports provided: ChangePasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordService", function() { return ChangePasswordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Model_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Model/Global */ "./src/app/shared/Model/Global.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordService = /** @class */ (function () {
    function ChangePasswordService(http, toastrService) {
        this.http = http;
        this.toastrService = toastrService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
    }
    ChangePasswordService.prototype.ChangePassword = function (id, password) {
        var body = new URLSearchParams();
        body.set('id', id);
        body.set('password', password);
        return this.http
            .post(_Model_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BaseUri + 'ChangePassword', body.toString(), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('ChangePassword')));
    };
    ChangePasswordService.prototype.log = function (message) {
        this.toastrService.error('Password change error');
    };
    ChangePasswordService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ChangePasswordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ChangePasswordService);
    return ChangePasswordService;
}());



/***/ })

}]);
//# sourceMappingURL=user-info-user-info-module.js.map