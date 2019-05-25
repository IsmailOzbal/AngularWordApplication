(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\">\r\n  <mat-nav-list>\r\n    <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/dashboard']\">\r\n      <mat-icon class=\"sidenav-icon\">dashboard</mat-icon> {{ 'Dashboard' | translate }}\r\n    </a>\r\n    <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/charts']\">\r\n      <mat-icon class=\"sidenav-icon\">bar_chart</mat-icon> {{ 'Charts' | translate }}\r\n    </a>\r\n    <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/tables']\">\r\n      <mat-icon class=\"sidenav-icon\">description</mat-icon> {{ 'Words' | translate }}\r\n    </a>\r\n\r\n    <div class=\"nested-menu\">\r\n        <a mat-list-item (click)=\"addExpandClass('pagess')\">\r\n          <mat-icon class=\"sidenav-icon\">touch_app</mat-icon> {{ 'Exam' | translate }}\r\n        </a>\r\n        <ul class=\"nested submenu\" [class.expand]=\"showMenu === 'pagess'\">\r\n          <li>\r\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/exam']\"> {{ 'Create Exam' | translate }} </a>\r\n          </li>\r\n          <li>\r\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/exam/examlist']\"> {{ 'Exam List' | translate }} </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    <div class=\"nested-menu\">\r\n      <a mat-list-item (click)=\"addExpandClass('pages')\">\r\n        <mat-icon class=\"sidenav-icon\">build</mat-icon> {{ 'Word Operation' | translate }}\r\n      </a>\r\n      <ul class=\"nested submenu\" [class.expand]=\"showMenu === 'pages'\">\r\n        <li>\r\n          <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/submit']\"> {{ 'Add Word' | translate }} </a>\r\n        </li>\r\n        <li>\r\n          <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/word-description']\"> {{ 'Add Word Description' | translate }} </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  \r\n  </mat-nav-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar {\n  width: 250px;\n  position: fixed;\n  top: 56px;\n  bottom: 0;\n  background: #fff;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n  z-index: 999;\n  -ms-overflow-y: auto;\n  overflow-y: auto; }\n  #sidebar .mat-nav-list {\n    width: 100%; }\n  #sidebar .mat-nav-list a {\n      display: block; }\n  #sidebar .mat-nav-list a .mat-icon {\n        margin-right: 15px; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu .submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto;\n  margin: 0; }\n  .nested-menu .expand.submenu li a {\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  #sidebar {\n    left: -250px; } }\n  .footer {\n  position: fixed;\n  height: 100px;\n  bottom: 0;\n  width: 100%; }\n  #center {\n  margin-left: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9DOlxcVXNlcnNcXE93bmVyXFxEb2N1bWVudHNcXEdpdEh1YlxcQW5ndWxhcldvcmRBcHBsaWNhdGlvbi9zcmNcXGFwcFxcbGF5b3V0XFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixTQUFTO0VBQ1QsU0FBUztFQUNULGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixnQkFBZ0IsRUFBQTtFQVRwQjtJQVdRLFdBQVcsRUFBQTtFQVhuQjtNQWdCWSxjQUFjLEVBQUE7RUFoQjFCO1FBY2dCLGtCQUFrQixFQUFBO0VBTWxDO0VBRVEscUJBQXFCLEVBQUE7RUFGN0I7RUFLUSxhQUFhO0VBQ2IsU0FBUyxFQUFBO0VBTmpCO0VBVVksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osU0FBUyxFQUFBO0VBYnJCO0lBZ0JvQixhQUFhO0lBQ2IsY0FBYyxFQUFBO0VBTWxDO0VBQ0k7SUFDSSxZQUFZLEVBQUEsRUFDZjtFQUdMO0VBQ0ksZUFBZTtFQUNmLGFBQWE7RUFDYixTQUFTO0VBQ1QsV0FBVyxFQUFBO0VBR2Y7RUFFRyxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlYmFyIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTZweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMCA2cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIC1tcy1vdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC5tYXQtbmF2LWxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubmVzdGVkLW1lbnUge1xyXG4gICAgLm5lc3RlZCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLnN1Ym1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgJiAuZXhwYW5kIHtcclxuICAgICAgICAmLnN1Ym1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgI3NpZGViYXIge1xyXG4gICAgICAgIGxlZnQ6IC0yNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNjZW50ZXJcclxue1xyXG4gICBtYXJnaW4tbGVmdDogMzAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.showMenu = '';
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/topnav/topnav.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/topnav/topnav.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"fix-nav\">\r\n    <button type=\"button\" mat-icon-button class=\"visible-md\" (click)=\"toggleSidebar()\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n    </button>\r\n    <div class=\"nav-brand\">\r\n        OWN DICTIONARY\r\n    </div>\r\n\r\n    <span class=\"nav-spacer\"></span>\r\n    <button class=\"hidden-sm\" mat-icon-button [matMenuTriggerFor]=\"language\">\r\n        <mat-icon>language</mat-icon>\r\n    </button>\r\n    <mat-menu #language=\"matMenu\">\r\n        <button mat-menu-item (click)=\"changeLang('en')\">\r\n            <span>{{ 'English' | translate }}</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeLang('tr')\">\r\n            <span>{{ 'Turkish' | translate }}</span>\r\n        </button>\r\n    </mat-menu>\r\n    <button class=\"hidden-sm\" mat-icon-button [matMenuTriggerFor]=\"profile\">\r\n        <mat-icon>account_circle</mat-icon>\r\n    </button>\r\n    <mat-menu #profile=\"matMenu\">\r\n        <button mat-menu-item>\r\n            <mat-icon>person</mat-icon>\r\n            <a  [routerLinkActive]=\"'active'\" [routerLink]=\"['/user-info']\"> {{ 'Profile' | translate }} </a>\r\n        </button>\r\n    </mat-menu>\r\n    <button mat-icon-button (click)=\"onLoggedout()\">\r\n        <mat-icon>exit_to_app</mat-icon>\r\n    </button>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/layout/components/topnav/topnav.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/topnav/topnav.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1000; }\n\n.nav-brand {\n  width: 215px;\n  text-align: center; }\n\n.topnav-icon {\n  text-decoration: none;\n  display: flex;\n  color: #fff; }\n\n.nav-spacer {\n  flex: 1 1 auto; }\n\n.visible-md {\n  display: none; }\n\n.visible-sm {\n  display: none; }\n\n@media screen and (max-width: 992px) {\n  .visible-md {\n    display: block; } }\n\n@media screen and (max-width: 768px) {\n  .visible-sm {\n    display: block; }\n  .nav-brand {\n    width: 100%; } }\n\n@media screen and (max-width: 768px) {\n  .hidden-sm {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvdG9wbmF2L0M6XFxVc2Vyc1xcT3duZXJcXERvY3VtZW50c1xcR2l0SHViXFxBbmd1bGFyV29yZEFwcGxpY2F0aW9uL3NyY1xcYXBwXFxsYXlvdXRcXGNvbXBvbmVudHNcXHRvcG5hdlxcdG9wbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0k7SUFDSSxjQUFjLEVBQUEsRUFDakI7O0FBRUw7RUFDSTtJQUNJLGNBQWMsRUFBQTtFQUVsQjtJQUNJLFdBQVcsRUFBQSxFQUNkOztBQUVMO0VBQ0k7SUFDSSxhQUFhLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy90b3BuYXYvdG9wbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG59XHJcbi5uYXYtYnJhbmQge1xyXG4gICAgd2lkdGg6IDIxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50b3BuYXYtaWNvbiB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXYtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4udmlzaWJsZS1tZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi52aXNpYmxlLXNtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC52aXNpYmxlLW1kIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnZpc2libGUtc20ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLm5hdi1icmFuZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5oaWRkZW4tc20ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/components/topnav/topnav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/topnav/topnav.component.ts ***!
  \**************************************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/login.service */ "./src/app/shared/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopnavComponent = /** @class */ (function () {
    function TopnavComponent(router, translate, loginService) {
        var _this = this;
        this.router = router;
        this.translate = translate;
        this.loginService = loginService;
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && window.innerWidth <= 992 && _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    TopnavComponent.prototype.ngOnInit = function () {
        this.pushRightClass = 'push-right';
    };
    TopnavComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    TopnavComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    TopnavComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('expiredate');
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        this.router.navigate(['/login']);
    };
    TopnavComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    TopnavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topnav',
            template: __webpack_require__(/*! ./topnav.component.html */ "./src/app/layout/components/topnav/topnav.component.html"),
            styles: [__webpack_require__(/*! ./topnav.component.scss */ "./src/app/layout/components/topnav/topnav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            },
            {
                path: 'submit',
                loadChildren: './submit/submit.module#SubmitModule'
            },
            {
                path: 'user-info',
                loadChildren: './user-info/user-info.module#UserInfoModule'
            },
            {
                path: 'word-description',
                loadChildren: './word-description/word-description.module#WordDescriptionModule'
            },
            {
                path: 'exam',
                loadChildren: './exam/exam.module#ExamModule'
            }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-nav></app-nav> -->\r\n<app-topnav></app-topnav>\r\n<app-sidebar></app-sidebar>\r\n<div class=\"main-container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
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

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () { };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/topnav/topnav.component */ "./src/app/layout/components/topnav/topnav.component.ts");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/layout/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__["LayoutRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"], _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__["TopnavComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/layout/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\" [attr.role]=\"isHandset ? 'dialog' : 'navigation'\" [mode]=\"(isHandset | async)!.matches ? 'over' : 'side'\"\r\n        [opened]=\"!(isHandset | async)!.matches\">\r\n        <mat-toolbar color=\"primary\">WORDLIST</mat-toolbar>\r\n        <mat-nav-list>\r\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/dashboard']\">\r\n                <mat-icon class=\"sidenav-icon\">dashboard</mat-icon> Dashbard\r\n            </a>\r\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/charts']\">\r\n                <mat-icon class=\"sidenav-icon\">bar_chart</mat-icon> Charts\r\n            </a>\r\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/tables']\">\r\n                <mat-icon class=\"sidenav-icon\">table_chart</mat-icon> Tables\r\n            </a>\r\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/forms']\">\r\n                <mat-icon class=\"sidenav-icon\">input</mat-icon> Forms\r\n            </a>\r\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/grid']\">\r\n                <mat-icon class=\"sidenav-icon\">grid_on</mat-icon> Grid\r\n            </a>\r\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/components']\">\r\n                <mat-icon class=\"sidenav-icon\">code</mat-icon> Components\r\n            </a>\r\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/blank-page']\">\r\n                <mat-icon class=\"sidenav-icon\">insert_drive_file</mat-icon> Black Page\r\n            </a>\r\n            <a mat-list-item>\r\n                <mat-icon class=\"sidenav-icon\">add</mat-icon> Menu\r\n            </a>\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <mat-toolbar color=\"primary\" class=\"fix-nav\">\r\n            <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" *ngIf=\"(isHandset | async)!.matches\">\r\n                <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n            </button>\r\n            <mat-icon class=\"nav-icon\">menu</mat-icon>\r\n            <span class=\"nav-spacer\"></span>\r\n            <!--\r\n            <mat-icon class=\"nav-icon\">person</mat-icon>\r\n            <span class=\"nav-spacer\"></span>\r\n            <mat-icon class=\"nav-icon\">notifications</mat-icon>\r\n            <mat-icon class=\"nav-icon\">apps</mat-icon>\r\n            <mat-icon class=\"nav-icon\">fullscreen</mat-icon>\r\n            <mat-icon class=\"nav-icon\">flag</mat-icon>\r\n            <mat-icon class=\"nav-icon\">search</mat-icon>\r\n            <mat-icon class=\"nav-icon\">account_circle</mat-icon> -->\r\n            <a class=\"topnav-icon\" [routerLink]=\"['/login']\">\r\n                <mat-icon>exit_to_app</mat-icon>\r\n            </a>\r\n\r\n        </mat-toolbar>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/layout/nav/nav.component.scss":
/*!***********************************************!*\
  !*** ./src/app/layout/nav/nav.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 250px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24); }\n\n.topnav-icon {\n  text-decoration: none;\n  display: flex;\n  color: #fff; }\n\n.sidenav-icon {\n  text-decoration: none;\n  padding: 0 10px; }\n\n.nav-spacer {\n  flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdi9DOlxcVXNlcnNcXE93bmVyXFxEb2N1bWVudHNcXEdpdEh1YlxcQW5ndWxhcldvcmRBcHBsaWNhdGlvbi9zcmNcXGFwcFxcbGF5b3V0XFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZO0VBQ1oseUNBQXlDLEVBQUE7O0FBRTdDO0VBQ0kscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbn1cclxuLnRvcG5hdi1pY29uIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNpZGVuYXYtaWNvbiB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5uYXYtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4vLyAuZml4LW5hdiB7XHJcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgICB0b3A6IDA7XHJcbi8vICAgICBsZWZ0OiAyNTBweDtcclxuLy8gICAgIHJpZ2h0OiAwO1xyXG4vLyB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset);
    }
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/layout/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/layout/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map