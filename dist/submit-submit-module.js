(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["submit-submit-module"],{

/***/ "./src/app/layout/submit/submit-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/submit/submit-routing.module.ts ***!
  \********************************************************/
/*! exports provided: SubmitRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitRoutingModule", function() { return SubmitRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _submit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submit.component */ "./src/app/layout/submit/submit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _submit_component__WEBPACK_IMPORTED_MODULE_2__["SubmitComponent"]
    }
];
var SubmitRoutingModule = /** @class */ (function () {
    function SubmitRoutingModule() {
    }
    SubmitRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SubmitRoutingModule);
    return SubmitRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/submit/submit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/submit/submit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\r\n<div class=\"card\">\r\n  <div class=\"card-header\">Add Word</div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n         \r\n        <form [formGroup]=\"wordForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"form-group\">\r\n              <label>Select Word Type:</label>\r\n            <select class=\"form-control\" formControlName=\"WordTypeId\" placeholder=\"Select word type\">\r\n              <option *ngFor=\"let word of wordtypeLists\" value=\"{{word.id}}\">{{ word.type }} </option>\r\n            </select>\r\n            <button mat-icon-button disabled>\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\"  (click)=\"AddWordType()\"  >add</mat-icon>\r\n                 <a (click)=\"AddWordType()\">Word Type</a>\r\n            </button>\r\n          </div>\r\n          <div class=\"form-group\"><label>Word</label> <input type=\"text\" class=\"form-control\" formControlName=\"Word\" /></div>\r\n          <div class=\"form-group\"><button mat-raised-button color=\"primary\">Word Add</button></div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/submit/submit.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/submit/submit.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zdWJtaXQvc3VibWl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/submit/submit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/submit/submit.component.ts ***!
  \***************************************************/
/*! exports provided: SubmitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitComponent", function() { return SubmitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_Model_Words__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Model/Words */ "./src/app/shared/Model/Words.ts");
/* harmony import */ var src_app_shared_services_wordtype_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/wordtype.service */ "./src/app/shared/services/wordtype.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_services_add_word_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/add-word.service */ "./src/app/shared/services/add-word.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SubmitComponent = /** @class */ (function () {
    function SubmitComponent(dialog, wordTypeservice, wordService, formBuilder, spinner) {
        this.dialog = dialog;
        this.wordTypeservice = wordTypeservice;
        this.wordService = wordService;
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.newWord = new src_app_shared_Model_Words__WEBPACK_IMPORTED_MODULE_3__["Words"]();
        this.wordtypeLists = [];
        this.submitted = false;
    }
    SubmitComponent.prototype.ngOnInit = function () {
        this.wordForm = this.formBuilder.group({
            WordTypeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Word: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.spinner.show();
        this.GetWordType();
    };
    SubmitComponent.prototype.AddWordType = function () {
    };
    SubmitComponent.prototype.GetWordType = function () {
        var _this = this;
        this.wordTypeservice
            .getWordTypeList()
            .toPromise()
            .then(function (res) {
            _this.wordtypeLists = res;
            console.log(res);
            _this.spinner.hide();
        });
    };
    SubmitComponent.prototype.onSubmit = function () {
        // TODO: Use EventEmitter with form value
        var _this = this;
        this.submitted = true;
        if (this.wordForm.invalid) {
            return;
        }
        this.newWord.id = 0;
        this.newWord.wordTypeId = this.wordForm.value.WordTypeId;
        this.newWord.word = this.wordForm.value.Word;
        this.newWord.userId = localStorage.getItem('userid');
        if (!this.newWord.wordTypeId) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('WordType Id required');
        }
        this.wordService
            .AddWord(this.newWord)
            .toPromise()
            .then(function (res) {
            _this.heroes = res;
            _this.success();
        });
    };
    SubmitComponent.prototype.success = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            position: 'top-end',
            type: 'success',
            title: 'Word has been saved',
            showConfirmButton: false,
            timer: 1500
        });
    };
    SubmitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submit',
            template: __webpack_require__(/*! ./submit.component.html */ "./src/app/layout/submit/submit.component.html"),
            styles: [__webpack_require__(/*! ./submit.component.scss */ "./src/app/layout/submit/submit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            src_app_shared_services_wordtype_service__WEBPACK_IMPORTED_MODULE_4__["WordtypeService"],
            src_app_shared_services_add_word_service__WEBPACK_IMPORTED_MODULE_7__["AddWordService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], SubmitComponent);
    return SubmitComponent;
}());



/***/ }),

/***/ "./src/app/layout/submit/submit.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/submit/submit.module.ts ***!
  \************************************************/
/*! exports provided: SubmitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitModule", function() { return SubmitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/modules/stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony import */ var _submit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submit-routing.module */ "./src/app/layout/submit/submit-routing.module.ts");
/* harmony import */ var _submit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submit.component */ "./src/app/layout/submit/submit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SubmitModule = /** @class */ (function () {
    function SubmitModule() {
    }
    SubmitModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_submit_component__WEBPACK_IMPORTED_MODULE_6__["SubmitComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _submit_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubmitRoutingModule"],
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
    ], SubmitModule);
    return SubmitModule;
}());



/***/ }),

/***/ "./src/app/shared/Model/WordType.ts":
/*!******************************************!*\
  !*** ./src/app/shared/Model/WordType.ts ***!
  \******************************************/
/*! exports provided: WordType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordType", function() { return WordType; });
var WordType = /** @class */ (function () {
    function WordType() {
    }
    return WordType;
}());



/***/ }),

/***/ "./src/app/shared/Model/Words.ts":
/*!***************************************!*\
  !*** ./src/app/shared/Model/Words.ts ***!
  \***************************************/
/*! exports provided: Words */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Words", function() { return Words; });
var Words = /** @class */ (function () {
    function Words() {
    }
    return Words;
}());



/***/ }),

/***/ "./src/app/shared/services/add-word.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/add-word.service.ts ***!
  \*****************************************************/
/*! exports provided: AddWordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWordService", function() { return AddWordService; });
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






var AddWordService = /** @class */ (function () {
    function AddWordService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        };
    }
    AddWordService.prototype.AddWord = function (word) {
        return this.http
            .post(_Model_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BaseUri + 'word/addword', word, this.header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addHero')));
    };
    AddWordService.prototype.log = function (message) {
        this.toastr.error('Error adding word');
    };
    AddWordService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log("" + error.statusText);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    AddWordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], AddWordService);
    return AddWordService;
}());



/***/ }),

/***/ "./src/app/shared/services/wordtype.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/wordtype.service.ts ***!
  \*****************************************************/
/*! exports provided: WordtypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordtypeService", function() { return WordtypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Model_WordType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Model/WordType */ "./src/app/shared/Model/WordType.ts");
/* harmony import */ var _Model_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Model/Global */ "./src/app/shared/Model/Global.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WordtypeService = /** @class */ (function () {
    function WordtypeService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        };
        this.wordtype = new _Model_WordType__WEBPACK_IMPORTED_MODULE_4__["WordType"]();
    }
    WordtypeService.prototype.getWordTypeList = function () {
        return this.http.get(_Model_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BaseUri + 'wordtype/getwordtype', this.header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getwordtype', [])));
    };
    WordtypeService.prototype.AddWordType = function (hero) {
        this.wordtype.type = hero;
        return this.http
            .post(_Model_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BaseUri + 'wordtype/addwordtype', this.wordtype, this.header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addWordType')));
    };
    WordtypeService.prototype.log = function (message) {
        this.toastr.error(message);
    };
    WordtypeService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    WordtypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], WordtypeService);
    return WordtypeService;
}());



/***/ })

}]);
//# sourceMappingURL=submit-submit-module.js.map