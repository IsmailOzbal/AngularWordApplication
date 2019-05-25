(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./node_modules/ngx-useful-swiper/lib/swiper.module.js":
/*!*************************************************************!*\
  !*** ./node_modules/ngx-useful-swiper/lib/swiper.module.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var swiper_component_1 = __webpack_require__(/*! ./swiper/swiper.component */ "./node_modules/ngx-useful-swiper/lib/swiper/swiper.component.js");
var SwiperModule = (function () {
    function SwiperModule() {
    }
    SwiperModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        swiper_component_1.SwiperComponent
                    ],
                    exports: [
                        swiper_component_1.SwiperComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    SwiperModule.ctorParameters = function () { return []; };
    return SwiperModule;
}());
exports.SwiperModule = SwiperModule;
var swiper_component_2 = __webpack_require__(/*! ./swiper/swiper.component */ "./node_modules/ngx-useful-swiper/lib/swiper/swiper.component.js");
exports.SwiperComponent = swiper_component_2.SwiperComponent;
//# sourceMappingURL=swiper.module.js.map

/***/ }),

/***/ "./node_modules/ngx-useful-swiper/lib/swiper/swiper.component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-useful-swiper/lib/swiper/swiper.component.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var SwiperComponent = (function () {
    function SwiperComponent(elementRef, changeDetectorRef, platform_id) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.platform_id = platform_id;
        this.slideCount = 0;
        this.initialized = false;
        this.shouldInitialize = true;
    }
    Object.defineProperty(SwiperComponent.prototype, "initialize", {
        set: function (value) {
            this.shouldInitialize = this.initialized ? false : value;
        },
        enumerable: true,
        configurable: true
    });
    SwiperComponent.prototype.ngAfterViewInit = function () {
        if (this.shouldInitialize) {
            this.setup();
        }
    };
    SwiperComponent.prototype.setup = function () {
        if (!this.swiper) {
            if (common_1.isPlatformBrowser(this.platform_id)) {
                this.swiperWrapper = this.elementRef.nativeElement.querySelector('.swiper-wrapper');
                this.slideCount = this.swiperWrapper.childElementCount;
                this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('swiper > div'), this.config);
                this.changeDetectorRef.detectChanges();
            }
            this.shouldInitialize = false;
        }
    };
    SwiperComponent.prototype.ngAfterViewChecked = function () {
        if (this.shouldInitialize) {
            this.setup();
        }
        if (this.swiperWrapper && this.slideCount !== this.swiperWrapper.childElementCount) {
            this.slideCount = this.swiperWrapper.childElementCount;
            this.swiper.update();
        }
    };
    SwiperComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'swiper',
                    template: "\n    <div [ngClass]=\"{'swiper-container': config?.containerModifierClass === undefined }\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: ["\n    :host {\n        display: block;\n    }\n\n    :host > div {\n        width: 100%;\n        height: 100%;\n    }\n  "],
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    SwiperComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.ChangeDetectorRef, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    SwiperComponent.propDecorators = {
        "config": [{ type: core_1.Input },],
        "initialize": [{ type: core_1.Input, args: ['initialize',] },],
    };
    return SwiperComponent;
}());
exports.SwiperComponent = SwiperComponent;
//# sourceMappingURL=swiper.component.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/filter.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/filter */ "./node_modules/rxjs-compat/_esm5/operator/filter.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.filter = _operator_filter__WEBPACK_IMPORTED_MODULE_1__["filter"];
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/filter.js ***!
  \***********************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function filter(predicate, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(predicate, thisArg)(this);
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/speak-tts/lib/speak-tts.js":
/*!*************************************************!*\
  !*** ./node_modules/speak-tts/lib/speak-tts.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/speak-tts/lib/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SpeakTTS =
/*#__PURE__*/
function () {
  function SpeakTTS() {
    _classCallCheck(this, SpeakTTS);

    this.browserSupport = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
    this.synthesisVoice = null;
  }

  _createClass(SpeakTTS, [{
    key: "init",
    value: function init() {
      var _this = this;

      var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        if (!_this.browserSupport) {
          reject('Your browser does not support Speech Synthesis');
        }

        var listeners = (0, _utils.isNil)(conf.listeners) ? {} : conf.listeners;
        var splitSentences = (0, _utils.isNil)(conf.splitSentences) ? true : conf.splitSentences;
        var lang = (0, _utils.isNil)(conf.lang) ? undefined : conf.lang;
        var volume = (0, _utils.isNil)(conf.volume) ? 1 : conf.volume;
        var rate = (0, _utils.isNil)(conf.rate) ? 1 : conf.rate;
        var pitch = (0, _utils.isNil)(conf.pitch) ? 1 : conf.pitch;
        var voice = (0, _utils.isNil)(conf.voice) ? undefined : conf.voice; // Attach event listeners

        Object.keys(listeners).forEach(function (listener) {
          var fn = listeners[listener];

          var newListener = function newListener(data) {
            fn && fn(data);
          };

          if (listener !== 'onvoiceschanged') {
            speechSynthesis[listener] = newListener;
          }
        });

        _this._loadVoices().then(function (voices) {
          // Handle callback onvoiceschanged by hand
          listeners['onvoiceschanged'] && listeners['onvoiceschanged'](voices); // Initialize values if necessary

          !(0, _utils.isNil)(lang) && _this.setLanguage(lang);
          !(0, _utils.isNil)(voice) && _this.setVoice(voice);
          !(0, _utils.isNil)(volume) && _this.setVolume(volume);
          !(0, _utils.isNil)(rate) && _this.setRate(rate);
          !(0, _utils.isNil)(pitch) && _this.setPitch(pitch);
          !(0, _utils.isNil)(splitSentences) && _this.setSplitSentences(splitSentences);
          resolve({
            voices: voices,
            lang: _this.lang,
            voice: _this.voice,
            volume: _this.volume,
            rate: _this.rate,
            pitch: _this.pitch,
            splitSentences: _this.splitSentences,
            browserSupport: _this.browserSupport
          });
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: "_fetchVoices",
    value: function _fetchVoices() {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var voices = speechSynthesis.getVoices();

          if ((0, _utils.size)(voices) > 0) {
            return resolve(voices);
          } else {
            return reject("Could not fetch voices");
          }
        }, 100);
      });
    }
  }, {
    key: "_loadVoices",
    value: function _loadVoices() {
      var _this2 = this;

      var remainingAttempts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      return this._fetchVoices().catch(function (error) {
        if (remainingAttempts === 0) throw error;
        return _this2._loadVoices(remainingAttempts - 1);
      });
    }
  }, {
    key: "hasBrowserSupport",
    value: function hasBrowserSupport() {
      return this.browserSupport;
    }
  }, {
    key: "setVoice",
    value: function setVoice(voice) {
      var synthesisVoice;
      var voices = speechSynthesis.getVoices(); // set voice by name

      if ((0, _utils.isString)(voice)) {
        synthesisVoice = voices.find(function (v) {
          return v.name === voice;
        });
      } // Set the voice in conf if found


      if ((0, _utils.isObject)(voice)) {
        synthesisVoice = voice;
      }

      if (synthesisVoice) {
        this.synthesisVoice = synthesisVoice;
      } else {
        throw 'Error setting voice. The voice you passed is not valid or the voices have not been loaded yet.';
      }
    }
  }, {
    key: "setLanguage",
    value: function setLanguage(lang) {
      lang = lang.replace('_', '-'); // some Android versions seem to ignore BCP 47 and use an underscore character in language tag

      if ((0, _utils.validateLocale)(lang)) {
        this.lang = lang;
      } else {
        throw 'Error setting language. Please verify your locale is BCP47 format (http://schneegans.de/lv/?tags=es-FR&format=text)';
      }
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      volume = parseFloat(volume);

      if (!(0, _utils.isNan)(volume) && volume >= 0 && volume <= 1) {
        this.volume = volume;
      } else {
        throw 'Error setting volume. Please verify your volume value is a number between 0 and 1.';
      }
    }
  }, {
    key: "setRate",
    value: function setRate(rate) {
      rate = parseFloat(rate);

      if (!(0, _utils.isNan)(rate) && rate >= 0 && rate <= 10) {
        this.rate = rate;
      } else {
        throw 'Error setting rate. Please verify your volume value is a number between 0 and 10.';
      }
    }
  }, {
    key: "setPitch",
    value: function setPitch(pitch) {
      pitch = parseFloat(pitch);

      if (!(0, _utils.isNan)(pitch) && pitch >= 0 && pitch <= 2) {
        this.pitch = pitch;
      } else {
        throw 'Error setting pitch. Please verify your pitch value is a number between 0 and 2.';
      }
    }
  }, {
    key: "setSplitSentences",
    value: function setSplitSentences(splitSentences) {
      this.splitSentences = splitSentences;
    }
  }, {
    key: "speak",
    value: function speak(data) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var text = data.text,
            _data$listeners = data.listeners,
            listeners = _data$listeners === void 0 ? {} : _data$listeners,
            _data$queue = data.queue,
            queue = _data$queue === void 0 ? true : _data$queue;
        var msg = (0, _utils.trim)(text);
        if ((0, _utils.isNil)(msg)) resolve(); // Stop current speech

        !queue && _this3.cancel(); // Split into sentences (for better result and bug with some versions of chrome)

        var utterances = [];
        var sentences = _this3.splitSentences ? (0, _utils.splitSentences)(msg) : [msg];
        sentences.forEach(function (sentence, index) {
          var isLast = index === (0, _utils.size)(sentences) - 1;
          var utterance = new SpeechSynthesisUtterance();
          if (_this3.synthesisVoice) utterance.voice = _this3.synthesisVoice;
          if (_this3.lang) utterance.lang = _this3.lang;
          if (_this3.volume) utterance.volume = _this3.volume; // 0 to 1

          if (_this3.rate) utterance.rate = _this3.rate; // 0.1 to 10

          if (_this3.pitch) utterance.pitch = _this3.pitch; //0 to 2

          utterance.text = sentence; // Attach event listeners

          Object.keys(listeners).forEach(function (listener) {
            var fn = listeners[listener];

            var newListener = function newListener(data) {
              fn && fn(data);

              if (listener === 'onerror') {
                reject({
                  utterances: utterances,
                  lastUtterance: utterance,
                  error: data
                });
              }

              if (listener === 'onend') {
                if (isLast) resolve({
                  utterances: utterances,
                  lastUtterance: utterance
                });
              }
            };

            utterance[listener] = newListener;
          });
          utterances.push(utterance);
          speechSynthesis.speak(utterance);
        });
      });
    }
  }, {
    key: "pending",
    value: function pending() {
      return speechSynthesis.pending;
    }
  }, {
    key: "paused",
    value: function paused() {
      return speechSynthesis.paused;
    }
  }, {
    key: "speaking",
    value: function speaking() {
      return speechSynthesis.speaking;
    }
  }, {
    key: "pause",
    value: function pause() {
      speechSynthesis.pause();
    }
  }, {
    key: "resume",
    value: function resume() {
      speechSynthesis.resume();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      speechSynthesis.cancel();
    }
  }]);

  return SpeakTTS;
}();

var _default = SpeakTTS;
exports.default = _default;

/***/ }),

/***/ "./node_modules/speak-tts/lib/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/speak-tts/lib/utils.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trim = exports.isObject = exports.isNil = exports.isNan = exports.size = exports.isString = exports.validateLocale = exports.splitSentences = void 0;

var splitSentences = function splitSentences() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return text.replace(/\.+/g, '.|').replace(/\?/g, '?|').replace(/\!/g, '!|').split("|").map(function (sentence) {
    return trim(sentence);
  }).filter(Boolean);
};

exports.splitSentences = splitSentences;
var bcp47LocalePattern = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i; // eslint-disable-line max-len

/**
 * Validate a locale string to test if it is bcp47 compliant
 * @param {String} locale The tag locale to parse
 * @return {Boolean} True if tag is bcp47 compliant false otherwise
 */

var validateLocale = function validateLocale(locale) {
  return typeof locale !== 'string' ? false : bcp47LocalePattern.test(locale);
};

exports.validateLocale = validateLocale;

var isString = function isString(value) {
  return typeof value === 'string' || value instanceof String;
};

exports.isString = isString;

var size = function size(value) {
  return value && Array.isArray(value) && value.length ? value.length : 0;
};

exports.size = size;

var isNan = function isNan(value) {
  return typeof value === "number" && isNaN(value);
};

exports.isNan = isNan;

var isNil = function isNil(value) {
  return value === null || value === undefined;
};

exports.isNil = isNil;

var isObject = function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};

exports.isObject = isObject;

var trim = function trim(value) {
  return isString(value) ? value.trim() : '';
};

exports.trim = trim;

/***/ }),

/***/ "./src/app/layout/tables/tables-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/tables/tables-routing.module.ts ***!
  \********************************************************/
/*! exports provided: TablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function() { return TablesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables.component */ "./src/app/layout/tables/tables.component.ts");
/* harmony import */ var _worddetail_worddetail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./worddetail/worddetail.component */ "./src/app/layout/tables/worddetail/worddetail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _tables_component__WEBPACK_IMPORTED_MODULE_2__["TablesComponent"]
    },
    {
        path: 'worddetail',
        component: _worddetail_worddetail_component__WEBPACK_IMPORTED_MODULE_3__["WorddetailComponent"]
    }
];
var TablesRoutingModule = /** @class */ (function () {
    function TablesRoutingModule() {
    }
    TablesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TablesRoutingModule);
    return TablesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/tables/tables.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/tables/tables.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field> <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" /> </mat-form-field>\r\n<ngx-spinner></ngx-spinner>\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n    <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n      <td mat-cell *matCellDef=\"let row\">\r\n          <button mat-icon-button color=\"warn\"  matTooltip=\"hide\" (click)=\"hideWord(row)\" >\r\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">remove</mat-icon>\r\n          </button>\r\n          <button mat-icon-button color=\"warn\"  matTooltip=\"audio\" (click)=\"TextSpeech(row.word)\" >\r\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">volume_up</mat-icon>\r\n          </button>\r\n      \r\n      </td>\r\n \r\n    </ng-container>\r\n\r\n  <!--<ng-container matColumnDef=\"Image\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Image</th>\r\n      <td mat-cell *matCellDef=\"let row\">\r\n        <img\r\n          src=\"https://words-free.com/highresolution/650-free-words.png\"\r\n          width=\"25%\"\r\n          height=\"25%\"\r\n        />\r\n      </td>\r\n    </ng-container> -->\r\n\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"word\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Word</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{ row.word }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Color Column -->\r\n    <ng-container matColumnDef=\"type\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Type</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{ row.type }}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"description\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{ row.description }}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sor\r\n      t-header>Actions</th>\r\n      <td mat-cell *matCellDef=\"let row\" (click)=\"$event.stopPropagation()\">\r\n        <button mat-mini-fab color=\"primary\" (click)=\"DetailWord(row)\">Details</button>\r\n        <button mat-mini-fab color=\"warn\" (click)=\"deleteWord(row)\">Delete</button>\r\n\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSize]=\"25\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/tables/tables.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/tables/tables.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-success {\n  background-color: #EC971F;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RhYmxlcy9DOlxcVXNlcnNcXE93bmVyXFxEb2N1bWVudHNcXEdpdEh1YlxcQW5ndWxhcldvcmRBcHBsaWNhdGlvbi9zcmNcXGFwcFxcbGF5b3V0XFx0YWJsZXNcXHRhYmxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWY7RUFDSSx5QkFBd0I7RUFDeEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3RhYmxlcy90YWJsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFQzk3MUY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/tables/tables.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/tables/tables.component.ts ***!
  \***************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_Model_Token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Model/Token */ "./src/app/shared/Model/Token.ts");
/* harmony import */ var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var speak_tts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! speak-tts */ "./node_modules/speak-tts/lib/speak-tts.js");
/* harmony import */ var speak_tts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(speak_tts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_get_word_view_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/get-word-view-list.service */ "./src/app/shared/services/get-word-view-list.service.ts");
/* harmony import */ var src_app_shared_services_delete_word_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/delete-word.service */ "./src/app/shared/services/delete-word.service.ts");
/* harmony import */ var src_app_shared_Model_User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/Model/User */ "./src/app/shared/Model/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TablesComponent = /** @class */ (function () {
    function TablesComponent(_service, deleteword, spinner, loginService, router) {
        this._service = _service;
        this.deleteword = deleteword;
        this.spinner = spinner;
        this.loginService = loginService;
        this.router = router;
        this.words = [];
        this.displayedColumns = ['id', 'word', 'type', 'description', 'actions'];
        this.token = new src_app_shared_Model_Token__WEBPACK_IMPORTED_MODULE_4__["Token"]();
        this.user = new src_app_shared_Model_User__WEBPACK_IMPORTED_MODULE_10__["UserModel"]();
        this.speech = new speak_tts__WEBPACK_IMPORTED_MODULE_7___default.a();
    }
    TablesComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        this.GetService();
    };
    TablesComponent.prototype.SpeechInit = function () {
        speak_tts__WEBPACK_IMPORTED_MODULE_7___default.a.init({
            volume: 1,
            lang: 'en-GB',
            rate: 1,
            pitch: 1,
            voice: 'Google UK English Male',
            splitSentences: true,
            listeners: {
                onvoiceschanged: function (voices) {
                }
            }
        });
    };
    TablesComponent.prototype.GetService = function () {
        var _this = this;
        this._service
            .getWordViewList('')
            .toPromise()
            .then(function (res) {
            _this.words = res;
            _this.spinner.hide();
            _this.convert();
        });
    };
    TablesComponent.prototype.convert = function () {
        console.log(this.words);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.words);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    TablesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    TablesComponent.prototype.deleteWord = function (word) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            html: '<u>' + word.word + '</u>' + ' is starting delete operation',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.Login(word.id);
            }
        });
    };
    TablesComponent.prototype.Login = function (Id) {
        var _this = this;
        this.user.username = 'ismailozbal';
        this.user.password = 'admin';
        this.loginService
            .Login(this.user)
            .toPromise()
            .then(function (res) {
            _this.token = res;
            _this.delete(Id, _this.token.token);
        });
    };
    TablesComponent.prototype.delete = function (Id, tokens) {
        var _this = this;
        this.deleteword
            .deleteWord(Id, tokens)
            .toPromise()
            .then(function (res) {
            _this.animal = res;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Deleted!', 'Your file has been deleted.', 'success');
            _this.TableDeleete(Id);
        });
    };
    TablesComponent.prototype.hideWord = function (row) {
        this.TableDeleete(row.id);
    };
    TablesComponent.prototype.TextSpeech = function (text) {
        this.SpeechInit();
        this.speech
            .speak({
            text: text
        })
            .then(function () {
            console.log('Success !');
        })
            .catch(function (e) {
            console.error('An error occurred :', e);
        });
    };
    TablesComponent.prototype.TableDeleete = function (Id) {
        var index = this.words.findIndex(function (a) { return a.id === Id; });
        this.words.splice(index, 1);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.words);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    TablesComponent.prototype.DetailWord = function (word) {
        this.router.navigate(['/tables/worddetail'], { queryParams: { producer: word.id } });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TablesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TablesComponent.prototype, "sort", void 0);
    TablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./tables.component.html */ "./src/app/layout/tables/tables.component.html"),
            styles: [__webpack_require__(/*! ./tables.component.scss */ "./src/app/layout/tables/tables.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_get_word_view_list_service__WEBPACK_IMPORTED_MODULE_8__["GetWordViewListService"],
            src_app_shared_services_delete_word_service__WEBPACK_IMPORTED_MODULE_9__["DeleteWordService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/layout/tables/tables.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/tables/tables.module.ts ***!
  \************************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tables-routing.module */ "./src/app/layout/tables/tables-routing.module.ts");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tables.component */ "./src/app/layout/tables/tables.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _worddetail_worddetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./worddetail/worddetail.component */ "./src/app/layout/tables/worddetail/worddetail.component.ts");
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-useful-swiper */ "./node_modules/ngx-useful-swiper/lib/swiper.module.js");
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _tables_routing_module__WEBPACK_IMPORTED_MODULE_5__["TablesRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_9__["SwiperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"].withConfig({ addFlexToParent: true }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]
            ],
            declarations: [_tables_component__WEBPACK_IMPORTED_MODULE_6__["TablesComponent"], _worddetail_worddetail_component__WEBPACK_IMPORTED_MODULE_8__["WorddetailComponent"]],
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ }),

/***/ "./src/app/layout/tables/worddetail/worddetail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/layout/tables/worddetail/worddetail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mb-20\">\r\n  <mat-card-title>Word Detail</mat-card-title>\r\n  <mat-card-content>\r\n    <b>Word :</b> {{ wordView.word }} <br />\r\n    <button mat-icon-button color=\"primary\" matTooltip=\"audio\" (click)=\"TextToSpeech(wordView.word)\">\r\n      <mat-icon aria-label=\"Example icon-button with a heart icon\">volume_up</mat-icon>\r\n    </button>\r\n    <hr />\r\n    <b>Type :</b> {{ wordView.type }}\r\n    <hr />\r\n    <b>Description :</b> {{ wordView.description }} <br />\r\n    <button mat-icon-button color=\"primary\" matTooltip=\"audio\" (click)=\"TextToSpeech(wordView.description)\">\r\n      <mat-icon aria-label=\"Example icon-button with a heart icon\">volume_up</mat-icon>\r\n    </button>\r\n    <hr />\r\n    <b>Sample Sentences :</b> {{ wordView.sampleSentences }} <br />\r\n    <button mat-icon-button color=\"primary\" matTooltip=\"audio\" (click)=\"TextToSpeech(wordView.sampleSentences)\">\r\n      <mat-icon aria-label=\"Example icon-button with a heart icon\">volume_up</mat-icon>\r\n    </button>\r\n    <hr />\r\n  </mat-card-content>\r\n  <mat-card-footer> <button mat-raised-button color=\"primary\" (click)=\"GoBack()\">Go Back</button> </mat-card-footer>\r\n</mat-card>\r\n\r\n<!--\r\n<mat-card>\r\n  <mat-card-title>Demo</mat-card-title>\r\n  <mat-card-content>\r\n    <swiper class=\"swiper\" [config]=\"config\">\r\n      <div class=\"swiper-wrapper\">\r\n        <div class=\"swiper-slide\">\r\n          Word : {{ wordView.Word }}<br />\r\n          Type : {{ wordView.Type }}<br />\r\n          Desc : {{ wordView.Description }} <br />\r\n          <button mat-icon-button color=\"primary\" matTooltip=\"audio\" (click)=\"TextToSpeech(wordView.Word)\">\r\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">volume_up</mat-icon>\r\n          </button>\r\n        </div>\r\n        <div class=\"swiper-slide\"> Word : {{ wordView.Word }}<br />\r\n            Type : {{ wordView.Type }}<br />\r\n            Desc : {{ wordView.Description }} <br />\r\n            <button   mat-icon-button color=\"primary\" matTooltip=\"audio\" (click)=\"TextToSpeech(wordView.Word)\">\r\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">volume_up</mat-icon>\r\n            </button>\r\n        </div>\r\n        <div class=\"swiper-slide\">Slide 3</div>\r\n        <div class=\"swiper-slide\">Slide 4</div>\r\n        <div class=\"swiper-slide\">Slide 5</div>\r\n        <div class=\"swiper-slide\">Slide 6</div>\r\n        <div class=\"swiper-slide\">Slide 7</div>\r\n        <div class=\"swiper-slide\">Slide 8</div>\r\n        <div class=\"swiper-slide\">Slide 9</div>\r\n        <div class=\"swiper-slide\">Slide 10</div>\r\n      </div>\r\n      <div class=\"swiper-pagination\"></div>\r\n      <div class=\"swiper-button-next\"></div>\r\n      <div class=\"swiper-button-prev\"></div>\r\n    </swiper>\r\n  </mat-card-content>\r\n</mat-card>\r\n-->\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/tables/worddetail/worddetail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/layout/tables/worddetail/worddetail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper-wrapper {\n  box-sizing: border-box; }\n\n.swiper-slide {\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n  /* Center slide text vertically */\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RhYmxlcy93b3JkZGV0YWlsL0M6XFxVc2Vyc1xcT3duZXJcXERvY3VtZW50c1xcR2l0SHViXFxBbmd1bGFyV29yZEFwcGxpY2F0aW9uL3NyY1xcYXBwXFxsYXlvdXRcXHRhYmxlc1xcd29yZGRldGFpbFxcd29yZGRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFBO0VBSUEsYUFBYTtFQUliLHVCQUF1QjtFQUl2QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90YWJsZXMvd29yZGRldGFpbC93b3JkZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci13cmFwcGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLyogQ2VudGVyIHNsaWRlIHRleHQgdmVydGljYWxseSAqL1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/tables/worddetail/worddetail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/tables/worddetail/worddetail.component.ts ***!
  \******************************************************************/
/*! exports provided: WorddetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorddetailComponent", function() { return WorddetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var src_app_shared_Model_WordView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Model/WordView */ "./src/app/shared/Model/WordView.ts");
/* harmony import */ var speak_tts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! speak-tts */ "./node_modules/speak-tts/lib/speak-tts.js");
/* harmony import */ var speak_tts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(speak_tts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_shared_services_get_word_view_list_by_id_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/get-word-view-list-by-id.service */ "./src/app/shared/services/get-word-view-list-by-id.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WorddetailComponent = /** @class */ (function () {
    function WorddetailComponent(spinner, route, _wordservice, router) {
        this.spinner = spinner;
        this.route = route;
        this._wordservice = _wordservice;
        this.router = router;
        this.wordView = new src_app_shared_Model_WordView__WEBPACK_IMPORTED_MODULE_3__["WordView"]();
        this.speech = new speak_tts__WEBPACK_IMPORTED_MODULE_4___default.a();
        this.config = {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        };
        this.images = [
            'http://icdn.ensonhaber.com/resimler/galeri/ak_baYlY_kartal.jpg',
            'https://www.duvarkapla.com/media/catalog/product/cache/9/image/750x/17f82f742ffe127f42dca9de82fb58b1/N/A/NA3509.jpg',
            'https://img-s1.onedio.com/id-5728d25de07beaad7c3b731a/rev-0/w-635/listing/f-jpg-webp/s-08589190e9b8fda08adf8201da4377c0aede5344.webp'
        ];
    }
    WorddetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.route.queryParams
            .filter(function (params) { return params.producer; })
            .subscribe(function (params) {
            _this.wordId = params.producer;
            _this.getWord();
        });
    };
    WorddetailComponent.prototype.SpeechInit = function () {
        speak_tts__WEBPACK_IMPORTED_MODULE_4___default.a.init({
            volume: 1,
            lang: 'en-GB',
            rate: 1,
            pitch: 1,
            voice: 'Google UK English Male',
            splitSentences: true,
            listeners: {
                onvoiceschanged: function (voices) {
                    console.log('Event voiceschanged', voices);
                }
            }
        });
    };
    WorddetailComponent.prototype.GoBack = function () {
        this.router.navigate(['/tables']);
    };
    WorddetailComponent.prototype.TextToSpeech = function (_text) {
        this.SpeechInit();
        this.speech
            .speak({
            text: _text
        })
            .then(function () {
            console.log('Success !');
        })
            .catch(function (e) {
            console.error('An error occurred :', e);
        });
    };
    WorddetailComponent.prototype.getWord = function () {
        var _this = this;
        this._wordservice
            .getWordViewListById(this.wordId)
            .toPromise()
            .then(function (res) {
            _this.wordView = res[0];
            _this.spinner.hide();
        });
    };
    WorddetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-worddetail',
            template: __webpack_require__(/*! ./worddetail.component.html */ "./src/app/layout/tables/worddetail/worddetail.component.html"),
            styles: [__webpack_require__(/*! ./worddetail.component.scss */ "./src/app/layout/tables/worddetail/worddetail.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_services_get_word_view_list_by_id_service__WEBPACK_IMPORTED_MODULE_6__["GetWordViewListByIdService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WorddetailComponent);
    return WorddetailComponent;
}());



/***/ }),

/***/ "./src/app/shared/Model/WordView.ts":
/*!******************************************!*\
  !*** ./src/app/shared/Model/WordView.ts ***!
  \******************************************/
/*! exports provided: WordView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordView", function() { return WordView; });
var WordView = /** @class */ (function () {
    function WordView() {
    }
    return WordView;
}());



/***/ }),

/***/ "./src/app/shared/services/delete-word.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/delete-word.service.ts ***!
  \********************************************************/
/*! exports provided: DeleteWordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteWordService", function() { return DeleteWordService; });
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






var DeleteWordService = /** @class */ (function () {
    function DeleteWordService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        this.httpOptionsJson = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    DeleteWordService.prototype.deleteWord = function (id, token) {
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
            })
        };
        return this.http
            .delete(_Model_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BaseUri + 'DeleteWord/' + id, this.header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteWord', [])));
    };
    DeleteWordService.prototype.log = function (message) {
        this.toastr.error('Error delete word');
    };
    DeleteWordService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log("" + error.statusText);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    DeleteWordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], DeleteWordService);
    return DeleteWordService;
}());



/***/ }),

/***/ "./src/app/shared/services/get-word-view-list-by-id.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/services/get-word-view-list-by-id.service.ts ***!
  \*********************************************************************/
/*! exports provided: GetWordViewListByIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWordViewListByIdService", function() { return GetWordViewListByIdService; });
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






var GetWordViewListByIdService = /** @class */ (function () {
    function GetWordViewListByIdService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        };
    }
    GetWordViewListByIdService.prototype.getWordViewListById = function (id) {
        return this.http
            .get(_Model_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BaseUri + 'wordview/getworddetailviewbyid', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            params: {
                'Id': id,
            }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getWordViewListById')));
    };
    GetWordViewListByIdService.prototype.deleteWord = function (id, token) {
        return this.http
            .delete(_Model_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BaseUri + 'DeleteWord/' + id, this.header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteWord', [])));
    };
    GetWordViewListByIdService.prototype.log = function (message) {
        this.toastr.error('Error get word details');
    };
    GetWordViewListByIdService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log("" + error.statusText);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    GetWordViewListByIdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], GetWordViewListByIdService);
    return GetWordViewListByIdService;
}());



/***/ })

}]);
//# sourceMappingURL=tables-tables-module.js.map