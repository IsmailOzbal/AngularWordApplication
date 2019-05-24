(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["word-description-word-description-module"],{

/***/ "./src/app/layout/word-description/word-description-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/word-description/word-description-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: WordDescriptionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordDescriptionRoutingModule", function() { return WordDescriptionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _word_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./word-description.component */ "./src/app/layout/word-description/word-description.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _word_description_component__WEBPACK_IMPORTED_MODULE_2__["WordDescriptionComponent"]
    }
];
var WordDescriptionRoutingModule = /** @class */ (function () {
    function WordDescriptionRoutingModule() {
    }
    WordDescriptionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WordDescriptionRoutingModule);
    return WordDescriptionRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/word-description/word-description.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/word-description/word-description.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\r\n<div class=\"card\">\r\n  <div class=\"card-header\">Word Details</div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <form [formGroup]=\"wordDetailForm\" (ngSubmit)=\"onSubmit()\">\r\n   \r\n          <div class=\"form-group\">\r\n            <label>Select Word</label>\r\n            <select class=\"form-control\" formControlName=\"WordsId\" placeholder=\"Select word\">\r\n              <option *ngFor=\"let word of wordList\" value=\"{{word.id}}\">{{ word.word }}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Select Language</label>\r\n            <select class=\"form-control\" formControlName=\"LanguageTypeId\" placeholder=\"Select languague\"> \r\n              <option *ngFor=\"let lang of langList\" value=\"{{lang.id}}\">{{lang.key}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Word Description</label> <input type=\"text\" class=\"form-control\" formControlName=\"Description\" />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Word Sample Sentences</label> <textarea type=\"text\" class=\"form-control\" formControlName=\"SampleSentences\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"form-group\"><button mat-raised-button color=\"primary\">Detail Add</button></div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/word-description/word-description.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/word-description/word-description.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC93b3JkLWRlc2NyaXB0aW9uL3dvcmQtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/word-description/word-description.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/word-description/word-description.component.ts ***!
  \***********************************************************************/
/*! exports provided: WordDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordDescriptionComponent", function() { return WordDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_services_word_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/word.service */ "./src/app/shared/services/word.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/language.service */ "./src/app/shared/services/language.service.ts");
/* harmony import */ var src_app_shared_Model_WordDescription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/Model/WordDescription */ "./src/app/shared/Model/WordDescription.ts");
/* harmony import */ var src_app_shared_Model_WordSentences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/Model/WordSentences */ "./src/app/shared/Model/WordSentences.ts");
/* harmony import */ var src_app_shared_services_word_description_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/word-description.service */ "./src/app/shared/services/word-description.service.ts");
/* harmony import */ var src_app_shared_services_word_sentences_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/word-sentences.service */ "./src/app/shared/services/word-sentences.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var WordDescriptionComponent = /** @class */ (function () {
    function WordDescriptionComponent(formBuilder, wordService, spinner, langService, wordDescService, WordSampleSentencesService) {
        this.formBuilder = formBuilder;
        this.wordService = wordService;
        this.spinner = spinner;
        this.langService = langService;
        this.wordDescService = wordDescService;
        this.WordSampleSentencesService = WordSampleSentencesService;
        this.submitted = false;
        this.wordList = [];
        this.langList = [];
        this.wordDesc = new src_app_shared_Model_WordDescription__WEBPACK_IMPORTED_MODULE_6__["WordDescription"]();
        this.wordSentences = new src_app_shared_Model_WordSentences__WEBPACK_IMPORTED_MODULE_7__["WordSentences"]();
    }
    WordDescriptionComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        this.wordDetailForm = this.formBuilder.group({
            WordsId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            LanguageTypeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            SampleSentences: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.GetWord();
        this.GetLang();
    };
    WordDescriptionComponent.prototype.GetWord = function () {
        var _this = this;
        this.wordService
            .getWordList()
            .toPromise()
            .then(function (res) {
            _this.wordList = res;
        });
    };
    WordDescriptionComponent.prototype.GetLang = function () {
        var _this = this;
        this.langService
            .getLangList()
            .toPromise()
            .then(function (res) {
            _this.langList = res;
            _this.spinner.hide();
        });
    };
    WordDescriptionComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.wordDetailForm.invalid) {
            return;
        }
        this.wordDesc.LanguageTypeId = this.wordDetailForm.value.LanguageTypeId;
        this.wordDesc.WordsId = this.wordDetailForm.value.WordsId;
        this.wordDesc.Description = this.wordDetailForm.value.Description;
        this.wordSentences.WordId = this.wordDetailForm.value.WordsId;
        this.wordSentences.SampleSentences = this.wordDetailForm.value.SampleSentences;
        this.AddWordDescription();
    };
    WordDescriptionComponent.prototype.AddWordDescription = function () {
        var _this = this;
        this.spinner.show();
        this.wordDescService
            .AddWordDescription(this.wordDesc)
            .toPromise()
            .then(function (res) {
            _this.AddWordSentences();
        });
    };
    WordDescriptionComponent.prototype.AddWordSentences = function () {
        var _this = this;
        this.WordSampleSentencesService.AddWordSentences(this.wordSentences)
            .toPromise()
            .then(function (res) {
            _this.spinner.hide();
            _this.success();
        });
    };
    WordDescriptionComponent.prototype.success = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            position: 'top-end',
            type: 'success',
            title: 'Word details has been saved',
            showConfirmButton: false,
            timer: 1500
        });
    };
    WordDescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-word-description',
            template: __webpack_require__(/*! ./word-description.component.html */ "./src/app/layout/word-description/word-description.component.html"),
            styles: [__webpack_require__(/*! ./word-description.component.scss */ "./src/app/layout/word-description/word-description.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_word_service__WEBPACK_IMPORTED_MODULE_3__["WordService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            src_app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"],
            src_app_shared_services_word_description_service__WEBPACK_IMPORTED_MODULE_8__["WordDescriptionService"],
            src_app_shared_services_word_sentences_service__WEBPACK_IMPORTED_MODULE_9__["WordSentencesService"]])
    ], WordDescriptionComponent);
    return WordDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/layout/word-description/word-description.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/word-description/word-description.module.ts ***!
  \********************************************************************/
/*! exports provided: WordDescriptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordDescriptionModule", function() { return WordDescriptionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/modules/stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _word_description_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./word-description.component */ "./src/app/layout/word-description/word-description.component.ts");
/* harmony import */ var _word_description_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./word-description-routing.module */ "./src/app/layout/word-description/word-description-routing.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var WordDescriptionModule = /** @class */ (function () {
    function WordDescriptionModule() {
    }
    WordDescriptionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_word_description_component__WEBPACK_IMPORTED_MODULE_6__["WordDescriptionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_4__["StatModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _word_description_routing_module__WEBPACK_IMPORTED_MODULE_7__["WordDescriptionRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
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
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ]
        })
    ], WordDescriptionModule);
    return WordDescriptionModule;
}());



/***/ }),

/***/ "./src/app/shared/Model/WordDescription.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/Model/WordDescription.ts ***!
  \*************************************************/
/*! exports provided: WordDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordDescription", function() { return WordDescription; });
var WordDescription = /** @class */ (function () {
    function WordDescription() {
    }
    return WordDescription;
}());



/***/ }),

/***/ "./src/app/shared/Model/WordSentences.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/Model/WordSentences.ts ***!
  \***********************************************/
/*! exports provided: WordSentences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordSentences", function() { return WordSentences; });
var WordSentences = /** @class */ (function () {
    function WordSentences() {
    }
    return WordSentences;
}());



/***/ }),

/***/ "./src/app/shared/services/language.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/language.service.ts ***!
  \*****************************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
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






var LanguageService = /** @class */ (function () {
    function LanguageService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        };
    }
    LanguageService.prototype.getLangList = function () {
        return this.http.get(_Model_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BaseUri + 'Language/GetLanguauge', this.header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getLangList', [])));
    };
    LanguageService.prototype.log = function (message) {
        this.toastr.error(message);
    };
    LanguageService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    LanguageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/app/shared/services/word-description.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/word-description.service.ts ***!
  \*************************************************************/
/*! exports provided: WordDescriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordDescriptionService", function() { return WordDescriptionService; });
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






var WordDescriptionService = /** @class */ (function () {
    function WordDescriptionService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        };
    }
    WordDescriptionService.prototype.AddWordDescription = function (wordDesc) {
        return this.http
            .post(_Model_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BaseUri + 'worddescription/addworddescription', wordDesc, this.header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('AddWordDescription')));
    };
    WordDescriptionService.prototype.log = function (message) {
        this.toastr.error('Error get word description');
    };
    WordDescriptionService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error);
            _this.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    WordDescriptionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], WordDescriptionService);
    return WordDescriptionService;
}());



/***/ }),

/***/ "./src/app/shared/services/word-sentences.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/word-sentences.service.ts ***!
  \***********************************************************/
/*! exports provided: WordSentencesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordSentencesService", function() { return WordSentencesService; });
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






var WordSentencesService = /** @class */ (function () {
    function WordSentencesService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        };
    }
    WordSentencesService.prototype.AddWordSentences = function (sentence) {
        return this.http
            .post(_Model_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BaseUri + 'wordsentences/addsentences', sentence, this.header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('AddWordSentences')));
    };
    WordSentencesService.prototype.log = function (message) {
        this.toastr.error('Error get word sentences');
    };
    WordSentencesService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    WordSentencesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], WordSentencesService);
    return WordSentencesService;
}());



/***/ }),

/***/ "./src/app/shared/services/word.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/word.service.ts ***!
  \*************************************************/
/*! exports provided: WordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordService", function() { return WordService; });
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






var WordService = /** @class */ (function () {
    function WordService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        };
    }
    WordService.prototype.getWordList = function () {
        return this.http.get(_Model_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BaseUri + 'word/getword', this.header).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getWordList', [])));
    };
    WordService.prototype.log = function (message) {
        this.toastr.error('Error get word list');
    };
    WordService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log("" + error.statusText);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    WordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], WordService);
    return WordService;
}());



/***/ })

}]);
//# sourceMappingURL=word-description-word-description-module.js.map