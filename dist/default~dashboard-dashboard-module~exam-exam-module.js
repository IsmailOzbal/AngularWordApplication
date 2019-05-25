(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~exam-exam-module"],{

/***/ "./src/app/layout/exam/exam.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/exam/exam.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\r\n<div class=\"mb-20\" fxLayout=\"row\" *ngIf=\"questionList.length != 0\" fxLayout.lt-md=\"row\" fxFlex>\r\n  <div fxFlex>\r\n    <h4>WORDLIST EXAM</h4>\r\n    <hr />\r\n    <div *ngFor=\"let question of questionList\">\r\n      <app-question\r\n        count=\"{{question.count}}\"\r\n        tag=\"{{question.tag}}\"\r\n        answerone=\"{{question.answerone}}\"\r\n        answertwo=\"{{question.answertwo}}\"\r\n        answerthree=\"{{question.answerthree}}\"\r\n        answerfour=\"{{question.answerfour}}\"\r\n      ></app-question>\r\n    </div>\r\n    <button *ngIf=\"submit\" mat-raised-button color=\"primary\" (click)=\"Save()\">Complete</button>\r\n\r\n    <button *ngIf=\"reload\" mat-raised-button color=\"warn\" (click)=\"Reload()\">Load Exam</button>\r\n    <hr />\r\n    <b>\r\n      Good luck!\r\n      <h6>Each question has {{ point }} points</h6>\r\n    </b>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/exam/exam.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/exam/exam.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9leGFtL2V4YW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/exam/exam.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/exam/exam.component.ts ***!
  \***********************************************/
/*! exports provided: ExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamComponent", function() { return ExamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_shared_services_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/questions.service */ "./src/app/shared/services/questions.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_Model_Exam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/Model/Exam */ "./src/app/shared/Model/Exam.ts");
/* harmony import */ var src_app_shared_services_insert_score_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/insert-score.service */ "./src/app/shared/services/insert-score.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExamComponent = /** @class */ (function () {
    function ExamComponent(questionservice, spinner, router, toastr, insertScore) {
        this.questionservice = questionservice;
        this.spinner = spinner;
        this.router = router;
        this.toastr = toastr;
        this.insertScore = insertScore;
        this.values = [];
        this.questionList = [];
        this._tagcount = 10;
        this.submit = true;
        this.reload = false;
        this.failure = '';
        this.que = 0;
        this.exam = new src_app_shared_Model_Exam__WEBPACK_IMPORTED_MODULE_6__["Exam"]();
        this.point = 100 / this._tagcount;
        this.sayi = 0;
        this.score = 0;
    }
    ExamComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        this.getList();
    };
    ExamComponent.prototype.getList = function () {
        var _this = this;
        this.questionservice
            .getQuestionsList()
            .toPromise()
            .then(function (res) {
            _this.questionList = res;
            _this.spinner.hide();
        });
    };
    ExamComponent.prototype.Reload = function () {
        this.spinner.show();
        this.getList();
        this.submit = true;
        this.reload = false;
        this.score = 0;
        this.failure = '';
        this.values = [];
        this.sayi = 0;
    };
    ExamComponent.prototype.Save = function () {
        var _this = this;
        this.spinner.show();
        this.que = 0;
        this.control = true;
        for (var _i = 0, _a = this.questionList; _i < _a.length; _i++) {
            var que = _a[_i];
            if (this.values[this.que] === undefined) {
                this.control = false;
                this.spinner.hide();
                break;
            }
            this.que++;
        }
        if (!this.control) {
            this.toastr.warning('All question must be fill', 'Qeustions warning!');
        }
        else {
            for (var _b = 0, _c = this.questionList; _b < _c.length; _b++) {
                var que = _c[_b];
                if (que.correctanswer === this.values[this.sayi]) {
                    this.score = this.score + this.point;
                }
                else {
                    this.failure = this.failure + (this.sayi + 1) + ' answer  is ' + que.correctanswer + '<br/>';
                }
                this.sayi++;
            }
            this.exam.score = this.score;
            this.exam.userId = +localStorage.getItem('userid');
            this.insertScore
                .InsertScore(this.exam)
                .toPromise()
                .then(function (res) {
                _this.spinner.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                    position: 'top-end',
                    type: 'success',
                    html: 'The exam result is <b>' + _this.score + '</b> points' + '<br/>' + _this.failure,
                    showConfirmButton: true
                });
                _this.submit = false;
                _this.reload = true;
            });
        }
    };
    ExamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exam',
            template: __webpack_require__(/*! ./exam.component.html */ "./src/app/layout/exam/exam.component.html"),
            styles: [__webpack_require__(/*! ./exam.component.scss */ "./src/app/layout/exam/exam.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            src_app_shared_services_insert_score_service__WEBPACK_IMPORTED_MODULE_7__["InsertScoreService"]])
    ], ExamComponent);
    return ExamComponent;
}());



/***/ }),

/***/ "./src/app/shared/Model/Exam.ts":
/*!**************************************!*\
  !*** ./src/app/shared/Model/Exam.ts ***!
  \**************************************/
/*! exports provided: Exam, ExamView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exam", function() { return Exam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamView", function() { return ExamView; });
var Exam = /** @class */ (function () {
    function Exam() {
    }
    return Exam;
}());

var ExamView = /** @class */ (function () {
    function ExamView() {
    }
    return ExamView;
}());



/***/ }),

/***/ "./src/app/shared/modules/question/question.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/modules/question/question.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mb-20\">\r\n    <mat-card-header>\r\n      <b>Question {{ count }} :</b> What is the definition of &nbsp; <b style=\"color:blue\">{{ tag }}</b> &nbsp;?\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <mat-radio-group class=\"example-radio-group\" required >\r\n        <mat-radio-button class=\"example-radio-group\" (change)=\"Change(answerone)\" [value]=\"answerone\"> {{ answerone }} </mat-radio-button>\r\n        <mat-radio-button class=\"example-radio-group\" (change)=\"Change(answertwo)\" [value]=\"answertwo\"> {{ answertwo }} </mat-radio-button>\r\n        <mat-radio-button class=\"example-radio-group\" (change)=\"Change(answerthree)\" [value]=\"answerthree\">\r\n          {{ answerthree }}\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-radio-group\" (change)=\"Change(answerfour)\" [value]=\"answerfour\">\r\n          {{ answerfour }}\r\n        </mat-radio-button>\r\n        <br />\r\n      </mat-radio-group>\r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/modules/question/question.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/modules/question/question.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-group {\n  display: inline-flex;\n  flex-direction: column; }\n\n.example-radio-button {\n  margin: 5px; }\n\n.example-selected-value {\n  margin: 15px 0; }\n\n.mat-card.gray {\n  background: linear-gradient(60deg, gray, gray); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvcXVlc3Rpb24vQzpcXFVzZXJzXFxPd25lclxcRG9jdW1lbnRzXFxHaXRIdWJcXEFuZ3VsYXJXb3JkQXBwbGljYXRpb24vc3JjXFxhcHBcXHNoYXJlZFxcbW9kdWxlc1xccXVlc3Rpb25cXHF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSw4Q0FBOEMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNlbGVjdGVkLXZhbHVlIHtcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuLm1hdC1jYXJkLmdyYXkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgZ3JheSwgZ3JheSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/modules/question/question.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/modules/question/question.component.ts ***!
  \***************************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_layout_exam_exam_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/layout/exam/exam.component */ "./src/app/layout/exam/exam.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(examcomponent) {
        this.examcomponent = examcomponent;
    }
    QuestionComponent.prototype.ngOnInit = function () { };
    QuestionComponent.prototype.Change = function (ques) {
        this.examcomponent.values[this.count - 1] = ques;
    };
    QuestionComponent.prototype.Save = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], QuestionComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QuestionComponent.prototype, "tag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QuestionComponent.prototype, "answerone", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QuestionComponent.prototype, "answertwo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QuestionComponent.prototype, "answerthree", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QuestionComponent.prototype, "answerfour", void 0);
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/shared/modules/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.scss */ "./src/app/shared/modules/question/question.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_layout_exam_exam_component__WEBPACK_IMPORTED_MODULE_1__["ExamComponent"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/question/question.module.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/modules/question/question.module.ts ***!
  \************************************************************/
/*! exports provided: QuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModule", function() { return QuestionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question.component */ "./src/app/shared/modules/question/question.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var QuestionModule = /** @class */ (function () {
    function QuestionModule() {
    }
    QuestionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"]],
            declarations: [_question_component__WEBPACK_IMPORTED_MODULE_2__["QuestionComponent"]],
            exports: [_question_component__WEBPACK_IMPORTED_MODULE_2__["QuestionComponent"]]
        })
    ], QuestionModule);
    return QuestionModule;
}());



/***/ }),

/***/ "./src/app/shared/services/insert-score.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/insert-score.service.ts ***!
  \*********************************************************/
/*! exports provided: InsertScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertScoreService", function() { return InsertScoreService; });
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






var InsertScoreService = /** @class */ (function () {
    function InsertScoreService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        };
    }
    InsertScoreService.prototype.InsertScore = function (exam) {
        return this.http
            .post(_Model_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BaseUri + 'exam/addexam', exam, this.header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('InsertScore')));
    };
    InsertScoreService.prototype.log = function (message) {
        this.toastr.error('Error add score');
    };
    InsertScoreService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log("" + error.statusText);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    InsertScoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], InsertScoreService);
    return InsertScoreService;
}());



/***/ }),

/***/ "./src/app/shared/services/questions.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/questions.service.ts ***!
  \******************************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
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






var QuestionsService = /** @class */ (function () {
    function QuestionsService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        };
    }
    QuestionsService.prototype.getQuestionsList = function () {
        return this.http.get(_Model_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BaseUri + 'question/getquestions', this.header).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('GetQuestion', [])));
    };
    QuestionsService.prototype.log = function (message) {
        this.toastr.error('Error get question data.Wordlist must be bigger than 10');
    };
    QuestionsService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log("" + error.statusText);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    QuestionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], QuestionsService);
    return QuestionsService;
}());



/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~exam-exam-module.js.map