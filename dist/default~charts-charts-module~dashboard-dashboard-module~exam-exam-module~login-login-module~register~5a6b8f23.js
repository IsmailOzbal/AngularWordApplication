(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~charts-charts-module~dashboard-dashboard-module~exam-exam-module~login-login-module~register~5a6b8f23"],{

/***/ "./node_modules/@angular/flex-layout/esm5/core.es5.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm5/core.es5.js ***!
  \************************************************************/
/*! exports provided: removeStyles, BROWSER_PROVIDER, CLASS_NAME, CoreModule, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, BaseDirective, BaseDirectiveAdapter, RESPONSIVE_ALIASES, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MatchMedia, MockMatchMedia, MockMediaQueryList, MockMatchMediaProvider, ServerMediaQueryList, ServerMatchMedia, MediaMonitor, ObservableMedia, MediaService, ObservableMediaProvider, KeyOptions, ResponsiveActivation, StyleUtils, validateBasis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStyles", function() { return removeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function() { return BROWSER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function() { return CLASS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaChange", function() { return MediaChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesheetMap", function() { return StylesheetMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function() { return DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function() { return LAYOUT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function() { return SERVER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function() { return BREAKPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDirective", function() { return BaseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDirectiveAdapter", function() { return BaseDirectiveAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSIVE_ALIASES", function() { return RESPONSIVE_ALIASES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function() { return DEFAULT_BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenTypes", function() { return ScreenTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function() { return ORIENTATION_BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function() { return BreakPointRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function() { return BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchMedia", function() { return MatchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMatchMedia", function() { return MockMatchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMediaQueryList", function() { return MockMediaQueryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMatchMediaProvider", function() { return MockMatchMediaProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerMediaQueryList", function() { return ServerMediaQueryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerMatchMedia", function() { return ServerMatchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMonitor", function() { return MediaMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMedia", function() { return ObservableMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMediaProvider", function() { return ObservableMediaProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyOptions", function() { return KeyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveActivation", function() { return ResponsiveActivation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleUtils", function() { return StyleUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateBasis", function() { return validateBasis; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Find all of the server-generated stylings, if any, and remove them
 * This will be in the form of inline classes and the style block in the
 * head of the DOM
 * @param {?} _document
 * @param {?} platformId
 * @return {?}
 */
function removeStyles(_document, platformId) {
    return function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
            /** @type {?} */
            var elements = Array.from(_document.querySelectorAll("[class*=" + CLASS_NAME + "]"));
            /** @type {?} */
            var classRegex_1 = /\bflex-layout-.+?\b/g;
            elements.forEach(function (el) {
                el.classList.contains(CLASS_NAME + "ssr") && el.parentNode ?
                    el.parentNode.removeChild(el) : el.className.replace(classRegex_1, '');
            });
        }
    };
}
/** *
 *  Provider to remove SSR styles on the browser
  @type {?} */
var BROWSER_PROVIDER = {
    provide: /** @type {?} */ (_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"]),
    useFactory: removeStyles,
    deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]],
    multi: true
};
/** @type {?} */
var CLASS_NAME = 'flex-layout-';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, collect all breakpoints into one provider', {
    providedIn: 'root',
    factory: function () { return null; }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var RESPONSIVE_ALIASES = [
    'xs', 'gt-xs', 'sm', 'gt-sm', 'md', 'gt-md', 'lg', 'gt-lg', 'xl'
];
/** @type {?} */
var DEFAULT_BREAKPOINTS = [
    {
        alias: 'xs',
        mediaQuery: '(min-width: 0px) and (max-width: 599px)'
    },
    {
        alias: 'gt-xs',
        overlapping: true,
        mediaQuery: '(min-width: 600px)'
    },
    {
        alias: 'lt-sm',
        overlapping: true,
        mediaQuery: '(max-width: 599px)'
    },
    {
        alias: 'sm',
        mediaQuery: '(min-width: 600px) and (max-width: 959px)'
    },
    {
        alias: 'gt-sm',
        overlapping: true,
        mediaQuery: '(min-width: 960px)'
    },
    {
        alias: 'lt-md',
        overlapping: true,
        mediaQuery: '(max-width: 959px)'
    },
    {
        alias: 'md',
        mediaQuery: '(min-width: 960px) and (max-width: 1279px)'
    },
    {
        alias: 'gt-md',
        overlapping: true,
        mediaQuery: '(min-width: 1280px)'
    },
    {
        alias: 'lt-lg',
        overlapping: true,
        mediaQuery: '(max-width: 1279px)'
    },
    {
        alias: 'lg',
        mediaQuery: '(min-width: 1280px) and (max-width: 1919px)'
    },
    {
        alias: 'gt-lg',
        overlapping: true,
        mediaQuery: '(min-width: 1920px)'
    },
    {
        alias: 'lt-xl',
        overlapping: true,
        mediaQuery: '(max-width: 1919px)'
    },
    {
        alias: 'xl',
        mediaQuery: '(min-width: 1920px) and (max-width: 5000px)'
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */
var HANDSET_PORTRAIT = '(orientation: portrait) and (max-width: 599px)';
/** @type {?} */
var HANDSET_LANDSCAPE = '(orientation: landscape) and (max-width: 959px)';
/** @type {?} */
var TABLET_LANDSCAPE = '(orientation: landscape) and (min-width: 960px) and (max-width: 1279px)';
/** @type {?} */
var TABLET_PORTRAIT = '(orientation: portrait) and (min-width: 600px) and (max-width: 839px)';
/** @type {?} */
var WEB_PORTRAIT = '(orientation: portrait) and (min-width: 840px)';
/** @type {?} */
var WEB_LANDSCAPE = '(orientation: landscape) and (min-width: 1280px)';
/** @type {?} */
var ScreenTypes = {
    'HANDSET': HANDSET_PORTRAIT + ", " + HANDSET_LANDSCAPE,
    'TABLET': TABLET_PORTRAIT + " , " + TABLET_LANDSCAPE,
    'WEB': WEB_PORTRAIT + ", " + WEB_LANDSCAPE + " ",
    'HANDSET_PORTRAIT': "" + HANDSET_PORTRAIT,
    'TABLET_PORTRAIT': TABLET_PORTRAIT + " ",
    'WEB_PORTRAIT': "" + WEB_PORTRAIT,
    'HANDSET_LANDSCAPE': HANDSET_LANDSCAPE + "]",
    'TABLET_LANDSCAPE': "" + TABLET_LANDSCAPE,
    'WEB_LANDSCAPE': "" + WEB_LANDSCAPE
};
/** *
 * Extended Breakpoints for handset/tablets with landscape or portrait orientations
  @type {?} */
var ORIENTATION_BREAKPOINTS = [
    { 'alias': 'handset', 'mediaQuery': ScreenTypes.HANDSET },
    { 'alias': 'handset.landscape', 'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE },
    { 'alias': 'handset.portrait', 'mediaQuery': ScreenTypes.HANDSET_PORTRAIT },
    { 'alias': 'tablet', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.landscape', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.portrait', 'mediaQuery': ScreenTypes.TABLET_PORTRAIT },
    { 'alias': 'web', 'mediaQuery': ScreenTypes.WEB, overlapping: true },
    { 'alias': 'web.landscape', 'mediaQuery': ScreenTypes.WEB_LANDSCAPE, overlapping: true },
    { 'alias': 'web.portrait', 'mediaQuery': ScreenTypes.WEB_PORTRAIT, overlapping: true }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ALIAS_DELIMITERS = /(\.|-|_)/g;
/**
 * @param {?} part
 * @return {?}
 */
function firstUpperCase(part) {
    /** @type {?} */
    var first = part.length > 0 ? part.charAt(0) : '';
    /** @type {?} */
    var remainder = (part.length > 1) ? part.slice(1) : '';
    return first.toUpperCase() + remainder;
}
/**
 * Converts snake-case to SnakeCase.
 * @param {?} name Text to UpperCamelCase
 * @return {?}
 */
function camelCase(name) {
    return name
        .replace(ALIAS_DELIMITERS, '|')
        .split('|')
        .map(firstUpperCase)
        .join('');
}
/**
 * For each breakpoint, ensure that a Suffix is defined;
 * fallback to UpperCamelCase the unique Alias value
 * @param {?} list
 * @return {?}
 */
function validateSuffixes(list) {
    list.forEach(function (bp) {
        if (!bp.suffix) {
            bp.suffix = camelCase(bp.alias); // create Suffix value based on alias
            bp.overlapping = !!bp.overlapping; // ensure default value
        }
    });
    return list;
}
/**
 * Merge a custom breakpoint list with the default list based on unique alias values
 *  - Items are added if the alias is not in the default list
 *  - Items are merged with the custom override if the alias exists in the default list
 * @param {?} defaults
 * @param {?=} custom
 * @return {?}
 */
function mergeByAlias(defaults, custom) {
    if (custom === void 0) { custom = []; }
    /** @type {?} */
    var dict = {};
    defaults.forEach(function (bp) {
        dict[bp.alias] = bp;
    });
    // Merge custom breakpoints
    custom.forEach(function (bp) {
        if (dict[bp.alias]) {
            extendObject(dict[bp.alias], bp);
        }
        else {
            dict[bp.alias] = bp;
        }
    });
    return validateSuffixes(Object.keys(dict).map(function (k) { return dict[k]; }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_CONFIG = {
    addFlexToParent: true,
    addOrientationBps: false,
    disableDefaultBps: false,
    disableVendorPrefixes: false,
    serverLoaded: false,
    useColumnBasisZero: true,
};
/** @type {?} */
var LAYOUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, config options for the library', {
    providedIn: 'root',
    factory: function () { return DEFAULT_CONFIG; }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 *  Injection token unique to the flex-layout library.
 *  Use this token when build a custom provider (see below).
  @type {?} */
var BREAKPOINTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Token (@angular/flex-layout) Breakpoints', {
    providedIn: 'root',
    factory: function () {
        /** @type {?} */
        var breakpoints = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BREAKPOINT);
        /** @type {?} */
        var layoutConfig = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG);
        /** @type {?} */
        var bpFlattenArray = [].concat.apply([], (breakpoints || [])
            .map(function (v) { return Array.isArray(v) ? v : [v]; }));
        /** @type {?} */
        var builtIns = (layoutConfig.disableDefaultBps ? [] : DEFAULT_BREAKPOINTS)
            .concat(layoutConfig.addOrientationBps ? ORIENTATION_BREAKPOINTS : []);
        return mergeByAlias(builtIns, bpFlattenArray);
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Registry of 1..n MediaQuery breakpoint ranges
 * This is published as a provider and may be overridden from custom, application-specific ranges
 *
 */
var BreakPointRegistry = /** @class */ (function () {
    function BreakPointRegistry(_registry) {
        this._registry = _registry;
    }
    Object.defineProperty(BreakPointRegistry.prototype, "items", {
        /**
         * Accessor to raw list
         */
        get: /**
         * Accessor to raw list
         * @return {?}
         */
        function () {
            return this._registry.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "sortedItems", {
        /**
         * Accessor to sorted list used for registration with matchMedia API
         *
         * NOTE: During breakpoint registration, we want to register the overlaps FIRST
         *       so the non-overlaps will trigger the MatchMedia:BehaviorSubject last!
         *       And the largest, non-overlap, matching breakpoint should be the lastReplay value
         */
        get: /**
         * Accessor to sorted list used for registration with matchMedia API
         *
         * NOTE: During breakpoint registration, we want to register the overlaps FIRST
         *       so the non-overlaps will trigger the MatchMedia:BehaviorSubject last!
         *       And the largest, non-overlap, matching breakpoint should be the lastReplay value
         * @return {?}
         */
        function () {
            /** @type {?} */
            var overlaps = this._registry.filter(function (it) { return it.overlapping === true; });
            /** @type {?} */
            var nonOverlaps = this._registry.filter(function (it) { return it.overlapping !== true; });
            return overlaps.concat(nonOverlaps);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     */
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     * @param {?} alias
     * @return {?}
     */
    BreakPointRegistry.prototype.findByAlias = /**
     * Search breakpoints by alias (e.g. gt-xs)
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        return this._registry.find(function (bp) { return bp.alias == alias; }) || null;
    };
    /**
     * @param {?} query
     * @return {?}
     */
    BreakPointRegistry.prototype.findByQuery = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return this._registry.find(function (bp) { return bp.mediaQuery == query; }) || null;
    };
    Object.defineProperty(BreakPointRegistry.prototype, "overlappings", {
        /**
         * Get all the breakpoints whose ranges could overlapping `normal` ranges;
         * e.g. gt-sm overlaps md, lg, and xl
         */
        get: /**
         * Get all the breakpoints whose ranges could overlapping `normal` ranges;
         * e.g. gt-sm overlaps md, lg, and xl
         * @return {?}
         */
        function () {
            return this._registry.filter(function (it) { return it.overlapping == true; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "aliases", {
        /**
         * Get list of all registered (non-empty) breakpoint aliases
         */
        get: /**
         * Get list of all registered (non-empty) breakpoint aliases
         * @return {?}
         */
        function () {
            return this._registry.map(function (it) { return it.alias; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "suffixes", {
        /**
         * Aliases are mapped to properties using suffixes
         * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
         * for property layoutGtSM.
         */
        get: /**
         * Aliases are mapped to properties using suffixes
         * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
         * for property layoutGtSM.
         * @return {?}
         */
        function () {
            return this._registry.map(function (it) { return !!it.suffix ? it.suffix : ''; });
        },
        enumerable: true,
        configurable: true
    });
    BreakPointRegistry.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    BreakPointRegistry.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [BREAKPOINTS,] }] }
    ]; };
    /** @nocollapse */ BreakPointRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function BreakPointRegistry_Factory() { return new BreakPointRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BREAKPOINTS)); }, token: BreakPointRegistry, providedIn: "root" });
    return BreakPointRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Class instances emitted [to observers] for each mql notification
 */
var  /**
 * Class instances emitted [to observers] for each mql notification
 */
MediaChange = /** @class */ (function () {
    function MediaChange(matches, mediaQuery, mqAlias, suffix // e.g.   GtSM, Md, GtLg
    ) {
        if (matches === void 0) { matches = false; }
        if (mediaQuery === void 0) { mediaQuery = 'all'; }
        if (mqAlias === void 0) { mqAlias = ''; }
        if (suffix === void 0) { suffix = ''; }
        this.matches = matches;
        this.mediaQuery = mediaQuery;
        this.mqAlias = mqAlias;
        this.suffix = suffix;
        this.property = '';
    }
    /**
     * @return {?}
     */
    MediaChange.prototype.clone = /**
     * @return {?}
     */
    function () {
        return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
    };
    return MediaChange;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
 * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
 * performed within the ng Zone to trigger change detections and component updates.
 *
 * NOTE: both mediaQuery activations and de-activations are announced in notifications
 */
var MatchMedia = /** @class */ (function () {
    function MatchMedia(_zone, _platformId, _document) {
        this._zone = _zone;
        this._platformId = _platformId;
        this._document = _document;
        this._registry = new Map();
        this._source = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new MediaChange(true));
        this._observable$ = this._source.asObservable();
    }
    /**
     * For the specified mediaQuery?
     */
    /**
     * For the specified mediaQuery?
     * @param {?} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.isActive = /**
     * For the specified mediaQuery?
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        /** @type {?} */
        var mql = this._registry.get(mediaQuery);
        return !!mql ? mql.matches : false;
    };
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     */
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     * @param {?=} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.observe = /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     * @param {?=} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        if (mediaQuery) {
            this.registerQuery(mediaQuery);
        }
        return this._observable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (change) {
            return mediaQuery ? (change.mediaQuery === mediaQuery) : true;
        }));
    };
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     */
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     * @param {?} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.registerQuery = /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        var _this = this;
        /** @type {?} */
        var list = normalizeQuery(mediaQuery);
        if (list.length > 0) {
            this._prepareQueryCSS(list, this._document);
            list.forEach(function (query) {
                /** @type {?} */
                var mql = _this._registry.get(query);
                /** @type {?} */
                var onMQLEvent = function (e) {
                    _this._zone.run(function () {
                        /** @type {?} */
                        var change = new MediaChange(e.matches, query);
                        _this._source.next(change);
                    });
                };
                if (!mql) {
                    mql = _this._buildMQL(query);
                    mql.addListener(onMQLEvent);
                    _this._registry.set(query, mql);
                }
                if (mql.matches) {
                    onMQLEvent(/** @type {?} */ ((mql)));
                }
            });
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    MatchMedia.prototype._buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    function (query) {
        /** @type {?} */
        var canListen = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) &&
            !!(/** @type {?} */ (window)).matchMedia('all').addListener;
        return canListen ? (/** @type {?} */ (window)).matchMedia(query) : /** @type {?} */ (({
            matches: query === 'all' || query === '',
            media: query,
            addListener: function () {
            },
            removeListener: function () {
            }
        }));
    };
    /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param mediaQueries
     * @param _document
     */
    /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param {?} mediaQueries
     * @param {?} _document
     * @return {?}
     */
    MatchMedia.prototype._prepareQueryCSS = /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param {?} mediaQueries
     * @param {?} _document
     * @return {?}
     */
    function (mediaQueries, _document) {
        /** @type {?} */
        var list = mediaQueries.filter(function (it) { return !ALL_STYLES[it]; });
        if (list.length > 0) {
            /** @type {?} */
            var query = list.join(', ');
            try {
                /** @type {?} */
                var styleEl_1 = _document.createElement('style');
                styleEl_1.setAttribute('type', 'text/css');
                if (!(/** @type {?} */ (styleEl_1)).styleSheet) {
                    /** @type {?} */
                    var cssText = "\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media " + query + " {.fx-query-test{ }}\n";
                    styleEl_1.appendChild(_document.createTextNode(cssText));
                } /** @type {?} */
                ((_document.head)).appendChild(styleEl_1);
                // Store in private global registry
                list.forEach(function (mq) { return ALL_STYLES[mq] = styleEl_1; });
            }
            catch (e) {
                console.error(e);
            }
        }
    };
    MatchMedia.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    MatchMedia.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ MatchMedia.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MatchMedia_Factory() { return new MatchMedia(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); }, token: MatchMedia, providedIn: "root" });
    return MatchMedia;
}());
/** *
 * Private global registry for all dynamically-created, injected style tags
 * @see prepare(query)
  @type {?} */
var ALL_STYLES = {};
/**
 * Always convert to unique list of queries; for iteration in ::registerQuery()
 * @param {?} mediaQuery
 * @return {?}
 */
function normalizeQuery(mediaQuery) {
    return (typeof mediaQuery === 'undefined') ? [] :
        (typeof mediaQuery === 'string') ? [mediaQuery] : unique(/** @type {?} */ (mediaQuery));
}
/**
 * Filter duplicate mediaQueries in the list
 * @param {?} list
 * @return {?}
 */
function unique(list) {
    /** @type {?} */
    var seen = {};
    return list.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * For the specified MediaChange, make sure it contains the breakpoint alias
 * and suffix (if available).
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function mergeAlias(dest, source) {
    return extendObject(dest, source ? {
        mqAlias: source.alias,
        suffix: source.suffix
    } : {});
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Base class for MediaService and pseudo-token for
 * @abstract
 */
var  /**
 * Base class for MediaService and pseudo-token for
 * @abstract
 */
ObservableMedia = /** @class */ (function () {
    function ObservableMedia() {
    }
    return ObservableMedia;
}());
/**
 * Class internalizes a MatchMedia service and exposes an Subscribable and Observable interface.
 * This an Observable with that exposes a feature to subscribe to mediaQuery
 * changes and a validator method (`isActive(<alias>)`) to test if a mediaQuery (or alias) is
 * currently active.
 *
 * !! Only mediaChange activations (not de-activations) are announced by the ObservableMedia
 *
 * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
 * notification. For custom mediaQuery notifications, alias information will not be injected and
 * those fields will be ''.
 *
 * !! This is not an actual Observable. It is a wrapper of an Observable used to publish additional
 * methods like `isActive(<alias>). To access the Observable and use RxJS operators, use
 * `.asObservable()` with syntax like media.asObservable().map(....).
 *
 * \@usage
 *
 *  // RxJS
 *  import {filter} from 'rxjs/operators/filter';
 *  import { ObservableMedia } from '\@angular/flex-layout';
 *
 * \@Component({ ... })
 *  export class AppComponent {
 *    status : string = '';
 *
 *    constructor(  media:ObservableMedia ) {
 *      let onChange = (change:MediaChange) => {
 *        this.status = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
 *      };
 *
 *      // Subscribe directly or access observable to use filter/map operators
 *      // e.g.
 *      //      media.subscribe(onChange);
 *
 *      media.asObservable()
 *        .pipe(
 *          filter((change:MediaChange) => true)   // silly noop filter
 *        ).subscribe(onChange);
 *    }
 *  }
 */
var MediaService = /** @class */ (function () {
    function MediaService(breakpoints, mediaWatcher) {
        this.breakpoints = breakpoints;
        this.mediaWatcher = mediaWatcher;
        /**
         * Should we announce gt-<xxx> breakpoint activations ?
         */
        this.filterOverlaps = true;
        this._registerBreakPoints();
        this.observable$ = this._buildObservable();
    }
    /**
     * Test if specified query/alias is active.
     */
    /**
     * Test if specified query/alias is active.
     * @param {?} alias
     * @return {?}
     */
    MediaService.prototype.isActive = /**
     * Test if specified query/alias is active.
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        /** @type {?} */
        var query = this._toMediaQuery(alias);
        return this.mediaWatcher.isActive(query);
    };
    /**
     * Proxy to the Observable subscribe method
     */
    /**
     * Proxy to the Observable subscribe method
     * @param {?=} observerOrNext
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    MediaService.prototype.subscribe = /**
     * Proxy to the Observable subscribe method
     * @param {?=} observerOrNext
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    function (observerOrNext, error, complete) {
        if (observerOrNext) {
            if (typeof observerOrNext === 'object') {
                return this.observable$.subscribe(observerOrNext.next, observerOrNext.error, observerOrNext.complete);
            }
        }
        return this.observable$.subscribe(observerOrNext, error, complete);
    };
    /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     */
    /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     * @return {?}
     */
    MediaService.prototype.asObservable = /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     * @return {?}
     */
    function () {
        return this.observable$;
    };
    /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     * @return {?}
     */
    MediaService.prototype._registerBreakPoints = /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     * @return {?}
     */
    function () {
        /** @type {?} */
        var queries = this.breakpoints.sortedItems.map(function (bp) { return bp.mediaQuery; });
        this.mediaWatcher.registerQuery(queries);
    };
    /**
     * Prepare internal observable
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     * @return {?}
     */
    MediaService.prototype._buildObservable = /**
     * Prepare internal observable
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var media$ = this.mediaWatcher.observe();
        /** @type {?} */
        var activationsOnly = function (change) {
            return change.matches === true;
        };
        /** @type {?} */
        var addAliasInformation = function (change) {
            return mergeAlias(change, _this._findByQuery(change.mediaQuery));
        };
        /** @type {?} */
        var excludeOverlaps = function (change) {
            /** @type {?} */
            var bp = _this.breakpoints.findByQuery(change.mediaQuery);
            return !bp ? true : !(self.filterOverlaps && bp.overlapping);
        };
        /**
             * Only pass/announce activations (not de-activations)
             * Inject associated (if any) alias information into the MediaChange event
             * Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
             */
        return media$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(activationsOnly), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(excludeOverlaps), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(addAliasInformation));
    };
    /**
     * Breakpoint locator by alias
     * @param {?} alias
     * @return {?}
     */
    MediaService.prototype._findByAlias = /**
     * Breakpoint locator by alias
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        return this.breakpoints.findByAlias(alias);
    };
    /**
     * Breakpoint locator by mediaQuery
     * @param {?} query
     * @return {?}
     */
    MediaService.prototype._findByQuery = /**
     * Breakpoint locator by mediaQuery
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return this.breakpoints.findByQuery(query);
    };
    /**
     * Find associated breakpoint (if any)
     * @param {?} query
     * @return {?}
     */
    MediaService.prototype._toMediaQuery = /**
     * Find associated breakpoint (if any)
     * @param {?} query
     * @return {?}
     */
    function (query) {
        /** @type {?} */
        var bp = this._findByAlias(query) || this._findByQuery(query);
        return bp ? bp.mediaQuery : query;
    };
    MediaService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    MediaService.ctorParameters = function () { return [
        { type: BreakPointRegistry },
        { type: MatchMedia }
    ]; };
    /** @nocollapse */ MediaService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MediaService_Factory() { return new MediaService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MatchMedia)); }, token: MediaService, providedIn: "root" });
    return MediaService;
}());
/** @type {?} */
var ObservableMediaProvider = {
    // tslint:disable-line:variable-name
    provide: ObservableMedia,
    useClass: MediaService
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * *****************************************************************
 * Define module for the MediaQuery API
 * *****************************************************************
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [ObservableMediaProvider, BROWSER_PROVIDER]
                },] },
    ];
    return CoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Utility to emulate a CSS stylesheet
 *
 * This utility class stores all of the styles for a given HTML element
 * as a readonly `stylesheet` map.
 */
var StylesheetMap = /** @class */ (function () {
    function StylesheetMap() {
        this.stylesheet = new Map();
    }
    /**
     * Add an individual style to an HTML element
     */
    /**
     * Add an individual style to an HTML element
     * @param {?} element
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    StylesheetMap.prototype.addStyleToElement = /**
     * Add an individual style to an HTML element
     * @param {?} element
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    function (element, style, value) {
        /** @type {?} */
        var stylesheet = this.stylesheet.get(element);
        if (stylesheet) {
            stylesheet.set(style, value);
        }
        else {
            this.stylesheet.set(element, new Map([[style, value]]));
        }
    };
    /**
     * Clear the virtual stylesheet
     */
    /**
     * Clear the virtual stylesheet
     * @return {?}
     */
    StylesheetMap.prototype.clearStyles = /**
     * Clear the virtual stylesheet
     * @return {?}
     */
    function () {
        this.stylesheet.clear();
    };
    /**
     * Retrieve a given style for an HTML element
     */
    /**
     * Retrieve a given style for an HTML element
     * @param {?} el
     * @param {?} styleName
     * @return {?}
     */
    StylesheetMap.prototype.getStyleForElement = /**
     * Retrieve a given style for an HTML element
     * @param {?} el
     * @param {?} styleName
     * @return {?}
     */
    function (el, styleName) {
        /** @type {?} */
        var styles = this.stylesheet.get(el);
        /** @type {?} */
        var value = '';
        if (styles) {
            /** @type {?} */
            var style = styles.get(styleName);
            if (typeof style === 'number' || typeof style === 'string') {
                value = style + '';
            }
        }
        return value;
    };
    StylesheetMap.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ StylesheetMap.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function StylesheetMap_Factory() { return new StylesheetMap(); }, token: StylesheetMap, providedIn: "root" });
    return StylesheetMap;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Token that is provided to tell whether the FlexLayoutServerModule
 * has been included in the bundle
 *
 * NOTE: This can be manually provided to disable styles when using SSR
  @type {?} */
var SERVER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('FlexLayoutServerLoaded', {
    providedIn: 'root',
    factory: function () { return false; }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
  @type {?} */
var INLINE = 'inline';
/** @type {?} */
var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    var _a = validateValue(value), direction = _a[0], wrap = _a[1], isInline = _a[2];
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    var _a = value.split(' '), direction = _a[0], wrap = _a[1], inline = _a[2];
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find(function (x) { return x === direction; })) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap, inline) {
    if (wrap === void 0) { wrap = null; }
    if (inline === void 0) { inline = false; }
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KeyOptions = /** @class */ (function () {
    function KeyOptions(baseKey, defaultValue, inputKeys) {
        this.baseKey = baseKey;
        this.defaultValue = defaultValue;
        this.inputKeys = inputKeys;
    }
    return KeyOptions;
}());
/**
 * ResponsiveActivation acts as a proxy between the MonitorMedia service (which emits mediaQuery
 * changes) and the fx API directives. The MQA proxies mediaQuery change events and notifies the
 * directive via the specified callback.
 *
 * - The MQA also determines which directive property should be used to determine the
 *   current change 'value'... BEFORE the original `onMediaQueryChanges()` method is called.
 * - The `ngOnDestroy()` method is also head-hooked to enable auto-unsubscribe from the
 *   MediaQueryServices.
 *
 * NOTE: these interceptions enables the logic in the fx API directives to remain terse and clean.
 */
var  /**
 * ResponsiveActivation acts as a proxy between the MonitorMedia service (which emits mediaQuery
 * changes) and the fx API directives. The MQA proxies mediaQuery change events and notifies the
 * directive via the specified callback.
 *
 * - The MQA also determines which directive property should be used to determine the
 *   current change 'value'... BEFORE the original `onMediaQueryChanges()` method is called.
 * - The `ngOnDestroy()` method is also head-hooked to enable auto-unsubscribe from the
 *   MediaQueryServices.
 *
 * NOTE: these interceptions enables the logic in the fx API directives to remain terse and clean.
 */
ResponsiveActivation = /** @class */ (function () {
    /**
     * Constructor
     */
    function ResponsiveActivation(_options, _mediaMonitor, _onMediaChanges) {
        this._options = _options;
        this._mediaMonitor = _mediaMonitor;
        this._onMediaChanges = _onMediaChanges;
        this._subscribers = [];
        this._activatedInputKey = '';
        this._registryMap = this._buildRegistryMap();
        this._subscribers = this._configureChangeObservers();
    }
    Object.defineProperty(ResponsiveActivation.prototype, "registryFromLargest", {
        /**
         * Get a readonly sorted list of the breakpoints corresponding to the directive properties
         * defined in the HTML markup: the sorting is done from largest to smallest. The order is
         * important when several media queries are 'registered' and from which, the browser uses the
         * first matching media query.
         */
        get: /**
         * Get a readonly sorted list of the breakpoints corresponding to the directive properties
         * defined in the HTML markup: the sorting is done from largest to smallest. The order is
         * important when several media queries are 'registered' and from which, the browser uses the
         * first matching media query.
         * @return {?}
         */
        function () {
            return this._registryMap.slice().reverse();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "mediaMonitor", {
        /**
         * Accessor to the DI'ed directive property
         * Each directive instance has a reference to the MediaMonitor which is
         * used HERE to subscribe to mediaQuery change notifications.
         */
        get: /**
         * Accessor to the DI'ed directive property
         * Each directive instance has a reference to the MediaMonitor which is
         * used HERE to subscribe to mediaQuery change notifications.
         * @return {?}
         */
        function () {
            return this._mediaMonitor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "activatedInputKey", {
        /**
         * Determine which directive @Input() property is currently active (for the viewport size):
         * The key must be defined (in use) or fallback to the 'closest' overlapping property key
         * that is defined; otherwise the default property key will be used.
         * e.g.
         *      if `<div fxHide fxHide.gt-sm="false">` is used but the current activated mediaQuery alias
         *      key is `.md` then `.gt-sm` should be used instead
         */
        get: /**
         * Determine which directive \@Input() property is currently active (for the viewport size):
         * The key must be defined (in use) or fallback to the 'closest' overlapping property key
         * that is defined; otherwise the default property key will be used.
         * e.g.
         *      if `<div fxHide fxHide.gt-sm="false">` is used but the current activated mediaQuery alias
         *      key is `.md` then `.gt-sm` should be used instead
         * @return {?}
         */
        function () {
            return this._activatedInputKey || this._options.baseKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "activatedInput", {
        /**
         * Get the currently activated @Input value or the fallback default @Input value
         */
        get: /**
         * Get the currently activated \@Input value or the fallback default \@Input value
         * @return {?}
         */
        function () {
            /** @type {?} */
            var key = this.activatedInputKey;
            return this.hasKeyValue(key) ? this._lookupKeyValue(key) : this._options.defaultValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Fast validator for presence of attribute on the host element
     */
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    ResponsiveActivation.prototype.hasKeyValue = /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var value = this._options.inputKeys[key];
        return typeof value !== 'undefined';
    };
    /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     */
    /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     * @return {?}
     */
    ResponsiveActivation.prototype.destroy = /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     * @return {?}
     */
    function () {
        this._subscribers.forEach(function (link) {
            link.unsubscribe();
        });
        this._subscribers = [];
    };
    /**
     * For each *defined* API property, register a callback to `_onMonitorEvents( )`
     * Cache 1..n subscriptions for internal auto-unsubscribes when the the directive destructs
     * @return {?}
     */
    ResponsiveActivation.prototype._configureChangeObservers = /**
     * For each *defined* API property, register a callback to `_onMonitorEvents( )`
     * Cache 1..n subscriptions for internal auto-unsubscribes when the the directive destructs
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var subscriptions = [];
        this._registryMap.forEach(function (bp) {
            if (_this._keyInUse(bp.key)) {
                /** @type {?} */
                var buildChanges = function (change) {
                    change = change.clone();
                    change.property = _this._options.baseKey;
                    return change;
                };
                subscriptions.push(_this.mediaMonitor
                    .observe(bp.alias)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(buildChanges))
                    .subscribe(function (change) {
                    _this._onMonitorEvents(change);
                }));
            }
        });
        return subscriptions;
    };
    /**
     * Build mediaQuery key-hashmap; only for the directive properties that are actually defined/used
     * in the HTML markup
     * @return {?}
     */
    ResponsiveActivation.prototype._buildRegistryMap = /**
     * Build mediaQuery key-hashmap; only for the directive properties that are actually defined/used
     * in the HTML markup
     * @return {?}
     */
    function () {
        var _this = this;
        return this.mediaMonitor.breakpoints
            .map(function (bp) {
            return /** @type {?} */ (extendObject({}, bp, {
                baseKey: _this._options.baseKey,
                // e.g. layout, hide, self-align, flex-wrap
                key: _this._options.baseKey + bp.suffix // e.g.  layoutGtSm, layoutMd, layoutGtLg
            }));
        })
            .filter(function (bp) { return _this._keyInUse(bp.key); });
    };
    /**
     * Synchronizes change notifications with the current mq-activated @Input and calculates the
     * mq-activated input value or the default value
     */
    /**
     * Synchronizes change notifications with the current mq-activated \@Input and calculates the
     * mq-activated input value or the default value
     * @param {?} change
     * @return {?}
     */
    ResponsiveActivation.prototype._onMonitorEvents = /**
     * Synchronizes change notifications with the current mq-activated \@Input and calculates the
     * mq-activated input value or the default value
     * @param {?} change
     * @return {?}
     */
    function (change) {
        if (change.property == this._options.baseKey) {
            change.value = this._calculateActivatedValue(change);
            this._onMediaChanges(change);
        }
    };
    /**
     * Has the key been specified in the HTML markup and thus is intended
     * to participate in activation processes.
     * @param {?} key
     * @return {?}
     */
    ResponsiveActivation.prototype._keyInUse = /**
     * Has the key been specified in the HTML markup and thus is intended
     * to participate in activation processes.
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._lookupKeyValue(key) !== undefined;
    };
    /**
     *  Map input key associated with mediaQuery activation to closest defined input key
     *  then return the values associated with the targeted input property
     *
     *  !! change events may arrive out-of-order (activate before deactivate)
     *     so make sure the deactivate is used ONLY when the keys match
     *     (since a different activate may be in use)
     * @param {?} current
     * @return {?}
     */
    ResponsiveActivation.prototype._calculateActivatedValue = /**
     *  Map input key associated with mediaQuery activation to closest defined input key
     *  then return the values associated with the targeted input property
     *
     *  !! change events may arrive out-of-order (activate before deactivate)
     *     so make sure the deactivate is used ONLY when the keys match
     *     (since a different activate may be in use)
     * @param {?} current
     * @return {?}
     */
    function (current) {
        /** @type {?} */
        var currentKey = this._options.baseKey + current.suffix;
        /** @type {?} */
        var newKey = this._activatedInputKey; // e.g. newKey == hideGtSm
        newKey = current.matches ? currentKey : ((newKey == currentKey) ? '' : newKey);
        this._activatedInputKey = this._validateInputKey(newKey);
        return this.activatedInput;
    };
    /**
     * For the specified input property key, validate it is defined (used in the markup)
     * If not see if a overlapping mediaQuery-related input key fallback has been defined
     *
     * NOTE: scans in the order defined by activeOverLaps (largest viewport ranges -> smallest ranges)
     * @param {?} inputKey
     * @return {?}
     */
    ResponsiveActivation.prototype._validateInputKey = /**
     * For the specified input property key, validate it is defined (used in the markup)
     * If not see if a overlapping mediaQuery-related input key fallback has been defined
     *
     * NOTE: scans in the order defined by activeOverLaps (largest viewport ranges -> smallest ranges)
     * @param {?} inputKey
     * @return {?}
     */
    function (inputKey) {
        var _this = this;
        /** @type {?} */
        var isMissingKey = function (key) { return !_this._keyInUse(key); };
        if (isMissingKey(inputKey)) {
            this.mediaMonitor.activeOverlaps.some(function (bp) {
                /** @type {?} */
                var key = _this._options.baseKey + bp.suffix;
                if (!isMissingKey(key)) {
                    inputKey = key;
                    return true; // exit .some()
                }
                return false;
            });
        }
        return inputKey;
    };
    /**
     * Get the value (if any) for the directive instances \@Input property (aka key)
     * @param {?} key
     * @return {?}
     */
    ResponsiveActivation.prototype._lookupKeyValue = /**
     * Get the value (if any) for the directive instances \@Input property (aka key)
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._options.inputKeys[key];
    };
    return ResponsiveActivation;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
var  /**
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
BaseDirective = /** @class */ (function () {
    function BaseDirective(_mediaMonitor, _elementRef, _styler) {
        this._mediaMonitor = _mediaMonitor;
        this._elementRef = _elementRef;
        this._styler = _styler;
        /**
         * Dictionary of input keys with associated values
         */
        this._inputMap = {};
        /**
         * Has the `ngOnInit()` method fired
         *
         * Used to allow *ngFor tasks to finish and support queries like
         * getComputedStyle() during ngOnInit().
         */
        this._hasInitialized = false;
    }
    Object.defineProperty(BaseDirective.prototype, "hasMediaQueryListener", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this._mqActivation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDirective.prototype, "activatedValue", {
        /**
         * Imperatively determine the current activated [input] value;
         * if called before ngOnInit() this will return `undefined`
         */
        get: /**
         * Imperatively determine the current activated [input] value;
         * if called before ngOnInit() this will return `undefined`
         * @return {?}
         */
        function () {
            return this._mqActivation ? this._mqActivation.activatedInput : undefined;
        },
        /**
         * Change the currently activated input value and force-update
         * the injected CSS (by-passing change detection).
         *
         * NOTE: Only the currently activated input value will be modified;
         *       other input values will NOT be affected.
         */
        set: /**
         * Change the currently activated input value and force-update
         * the injected CSS (by-passing change detection).
         *
         * NOTE: Only the currently activated input value will be modified;
         *       other input values will NOT be affected.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _a;
            /** @type {?} */
            var key = 'baseKey';
            /** @type {?} */
            var previousVal;
            if (this._mqActivation) {
                key = this._mqActivation.activatedInputKey;
                previousVal = this._inputMap[key];
                this._inputMap[key] = value;
            }
            /** @type {?} */
            var change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SimpleChange"](previousVal, value, false);
            this.ngOnChanges(/** @type {?} */ (_a = {}, _a[key] = change, _a));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     */
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    BaseDirective.prototype.hasResponsiveAPI = /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    function (baseKey) {
        /** @type {?} */
        var totalKeys = Object.keys(this._inputMap).length;
        /** @type {?} */
        var baseValue = this._inputMap[baseKey];
        return (totalKeys - (!!baseValue ? 1 : 0)) > 0;
    };
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     */
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    BaseDirective.prototype.ngOnInit = /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    function () {
        this._hasInitialized = true;
    };
    /**
     * @param {?} change
     * @return {?}
     */
    BaseDirective.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        throw new Error("BaseDirective::ngOnChanges should be overridden in subclass: " + change);
    };
    /**
     * @return {?}
     */
    BaseDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._mqActivation) {
            this._mqActivation.destroy();
        }
        delete this._mediaMonitor;
    };
    Object.defineProperty(BaseDirective.prototype, "parentElement", {
        // *********************************************
        // Protected Methods
        // *********************************************
        /** Access to host element's parent DOM node */
        get: /**
         * Access to host element's parent DOM node
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement.parentNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDirective.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /** Access the current value (if any) of the @Input property */
    /**
     * Access the current value (if any) of the \@Input property
     * @param {?} key
     * @return {?}
     */
    BaseDirective.prototype._queryInput = /**
     * Access the current value (if any) of the \@Input property
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._inputMap[key];
    };
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     */
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    BaseDirective.prototype._getDefaultVal = /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    function (key, fallbackVal) {
        /** @type {?} */
        var val = this._queryInput(key);
        /** @type {?} */
        var hasDefaultVal = (val !== undefined && val !== null);
        return (hasDefaultVal && val !== '') ? val : fallbackVal;
    };
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     */
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    BaseDirective.prototype._getDisplayStyle = /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    function (source) {
        if (source === void 0) { source = this.nativeElement; }
        /** @type {?} */
        var query = 'display';
        return this._styler.lookupStyle(source, query);
    };
    /** Quick accessor to raw attribute value on the target DOM element */
    /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    BaseDirective.prototype._getAttributeValue = /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    function (attribute, source) {
        if (source === void 0) { source = this.nativeElement; }
        return this._styler.lookupAttributeValue(source, attribute);
    };
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     */
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    BaseDirective.prototype._getFlexFlowDirection = /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    function (target, addIfMissing) {
        if (addIfMissing === void 0) { addIfMissing = false; }
        var _a;
        /** @type {?} */
        var value = 'row';
        /** @type {?} */
        var hasInlineValue = '';
        if (target) {
            _a = this._styler.getFlowDirection(target), value = _a[0], hasInlineValue = _a[1];
            if (!hasInlineValue && addIfMissing) {
                /** @type {?} */
                var style = buildLayoutCSS(value);
                /** @type {?} */
                var elements = [target];
                this._styler.applyStyleToElements(style, elements);
            }
        }
        return value.trim() || 'row';
    };
    /** Applies styles given via string pair or object map to the directive element */
    /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    BaseDirective.prototype._applyStyleToElement = /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    function (style, value, element) {
        if (element === void 0) { element = this.nativeElement; }
        this._styler.applyStyleToElement(element, style, value);
    };
    /** Applies styles given via string pair or object map to the directive's element */
    /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    BaseDirective.prototype._applyStyleToElements = /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    function (style, elements) {
        this._styler.applyStyleToElements(style, elements);
    };
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     */
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseDirective.prototype._cacheInput = /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (typeof source === 'object') {
            for (var prop in source) {
                this._inputMap[prop] = source[prop];
            }
        }
        else {
            if (!!key) {
                this._inputMap[key] = source;
            }
        }
    };
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     */
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    BaseDirective.prototype._listenForMediaQueryChanges = /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    function (key, defaultValue, onMediaQueryChange) {
        // tslint:disable-line:max-line-length
        if (!this._mqActivation) {
            /** @type {?} */
            var keyOptions = new KeyOptions(key, defaultValue, this._inputMap);
            this._mqActivation = new ResponsiveActivation(keyOptions, this._mediaMonitor, function (change) { return onMediaQueryChange(change); });
        }
        return this._mqActivation;
    };
    Object.defineProperty(BaseDirective.prototype, "childrenNodes", {
        /** Special accessor to query for all child 'element' nodes regardless of type, class, etc */
        get: /**
         * Special accessor to query for all child 'element' nodes regardless of type, class, etc
         * @return {?}
         */
        function () {
            /** @type {?} */
            var obj = this.nativeElement.children;
            /** @type {?} */
            var buffer = [];
            // iterate backwards ensuring that length is an UInt32
            for (var i = obj.length; i--;) {
                buffer[i] = obj[i];
            }
            return buffer;
        },
        enumerable: true,
        configurable: true
    });
    /** Fast validator for presence of attribute on the host element */
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    BaseDirective.prototype.hasKeyValue = /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return /** @type {?} */ ((this._mqActivation)).hasKeyValue(key);
    };
    Object.defineProperty(BaseDirective.prototype, "hasInitialized", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasInitialized;
        },
        enumerable: true,
        configurable: true
    });
    return BaseDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Adapter to the BaseDirective abstract class so it can be used via composition.
 * @see BaseDirective
 */
var  /**
 * Adapter to the BaseDirective abstract class so it can be used via composition.
 * @see BaseDirective
 */
BaseDirectiveAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(BaseDirectiveAdapter, _super);
    /**
     * BaseDirectiveAdapter constructor
     */
    function BaseDirectiveAdapter(_baseKey, // non-responsive @Input property name
    // non-responsive @Input property name
    _mediaMonitor, _elementRef, _styler) {
        var _this = _super.call(this, _mediaMonitor, _elementRef, _styler) || this;
        _this._baseKey = _baseKey;
        _this._mediaMonitor = _mediaMonitor;
        _this._elementRef = _elementRef;
        _this._styler = _styler;
        return _this;
    }
    Object.defineProperty(BaseDirectiveAdapter.prototype, "activeKey", {
        /**
         * Accessor to determine which @Input property is "active"
         * e.g. which property value will be used.
         */
        get: /**
         * Accessor to determine which \@Input property is "active"
         * e.g. which property value will be used.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var mqa = this._mqActivation;
            /** @type {?} */
            var key = mqa ? mqa.activatedInputKey : this._baseKey;
            // Note: ClassDirective::SimpleChanges uses 'klazz' instead of 'class' as a key
            return (key === 'class') ? 'klazz' : key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDirectiveAdapter.prototype, "inputMap", {
        /** Hash map of all @Input keys/values defined/used */
        get: /**
         * Hash map of all \@Input keys/values defined/used
         * @return {?}
         */
        function () {
            return this._inputMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDirectiveAdapter.prototype, "mqActivation", {
        /**
         * @see BaseDirective._mqActivation
         */
        get: /**
         * @see BaseDirective._mqActivation
         * @return {?}
         */
        function () {
            return /** @type {?} */ ((this._mqActivation));
        },
        enumerable: true,
        configurable: true
    });
    /**
      * Does this directive have 1 or more responsive keys defined
      * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
      */
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @return {?}
     */
    BaseDirectiveAdapter.prototype.hasResponsiveAPI = /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @return {?}
     */
    function () {
        return _super.prototype.hasResponsiveAPI.call(this, this._baseKey);
    };
    /**
     * @see BaseDirective._queryInput
     */
    /**
     * @see BaseDirective._queryInput
     * @param {?} key
     * @return {?}
     */
    BaseDirectiveAdapter.prototype.queryInput = /**
     * @see BaseDirective._queryInput
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key ? this._queryInput(key) : undefined;
    };
    /**
     *  Save the property value.
     */
    /**
     *  Save the property value.
     * @param {?=} key
     * @param {?=} source
     * @param {?=} cacheRaw
     * @return {?}
     */
    BaseDirectiveAdapter.prototype.cacheInput = /**
     *  Save the property value.
     * @param {?=} key
     * @param {?=} source
     * @param {?=} cacheRaw
     * @return {?}
     */
    function (key, source, cacheRaw) {
        if (cacheRaw === void 0) { cacheRaw = false; }
        if (cacheRaw) {
            this._cacheInputRaw(key, source);
        }
        else if (Array.isArray(source)) {
            this._cacheInputArray(key, source);
        }
        else if (typeof source === 'object') {
            this._cacheInputObject(key, source);
        }
        else if (typeof source === 'string') {
            this._cacheInputString(key, source);
        }
        else {
            throw new Error("Invalid class value '" + key + "' provided. Did you want to cache the raw value?");
        }
    };
    /**
     * @see BaseDirective._listenForMediaQueryChanges
     */
    /**
     * @see BaseDirective._listenForMediaQueryChanges
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    BaseDirectiveAdapter.prototype.listenForMediaQueryChanges = /**
     * @see BaseDirective._listenForMediaQueryChanges
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    function (key, defaultValue, onMediaQueryChange) {
        return this._listenForMediaQueryChanges(key, defaultValue, onMediaQueryChange);
    };
    // ************************************************************
    // Protected Methods
    // ************************************************************
    /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     */
    /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseDirectiveAdapter.prototype._cacheInputRaw = /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key) {
            this._inputMap[key] = source;
        }
    };
    /**
     *  Save the property value for Array values.
     */
    /**
     *  Save the property value for Array values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseDirectiveAdapter.prototype._cacheInputArray = /**
     *  Save the property value for Array values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key === void 0) { key = ''; }
        this._inputMap[key] = source ? source.join(' ') : '';
    };
    /**
     *  Save the property value for key/value pair values.
     */
    /**
     *  Save the property value for key/value pair values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseDirectiveAdapter.prototype._cacheInputObject = /**
     *  Save the property value for key/value pair values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key === void 0) { key = ''; }
        /** @type {?} */
        var classes = [];
        if (source) {
            for (var prop in source) {
                if (!!source[prop]) {
                    classes.push(prop);
                }
            }
        }
        this._inputMap[key] = classes.join(' ');
    };
    /**
     *  Save the property value for string values.
     */
    /**
     *  Save the property value for string values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseDirectiveAdapter.prototype._cacheInputString = /**
     *  Save the property value for string values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key === void 0) { key = ''; }
        this._inputMap[key] = source;
    };
    return BaseDirectiveAdapter;
}(BaseDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
 * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
 * range and to clearAll mediaQuery listeners.
 */
var MockMatchMedia = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(MockMatchMedia, _super);
    function MockMatchMedia(_zone, _platformId, _document, _breakpoints) {
        var _this = _super.call(this, _zone, _platformId, _document) || this;
        _this._breakpoints = _breakpoints;
        /**
         * Special flag used to test BreakPoint registrations with MatchMedia
         */
        _this.autoRegisterQueries = true;
        /**
         * Allow fallback to overlapping mediaQueries to determine
         * activatedInput(s).
         */
        _this.useOverlaps = false;
        _this._registry = new Map();
        _this._actives = [];
        _this._actives = [];
        return _this;
    }
    /** Easy method to clear all listeners for all mediaQueries */
    /**
     * Easy method to clear all listeners for all mediaQueries
     * @return {?}
     */
    MockMatchMedia.prototype.clearAll = /**
     * Easy method to clear all listeners for all mediaQueries
     * @return {?}
     */
    function () {
        this._registry.forEach(function (mql) {
            mql.destroy();
        });
        this._registry.clear();
        this.useOverlaps = false;
    };
    /** Feature to support manual, simulated activation of a mediaQuery. */
    /**
     * Feature to support manual, simulated activation of a mediaQuery.
     * @param {?} mediaQuery
     * @param {?=} useOverlaps
     * @return {?}
     */
    MockMatchMedia.prototype.activate = /**
     * Feature to support manual, simulated activation of a mediaQuery.
     * @param {?} mediaQuery
     * @param {?=} useOverlaps
     * @return {?}
     */
    function (mediaQuery, useOverlaps) {
        if (useOverlaps === void 0) { useOverlaps = false; }
        useOverlaps = useOverlaps || this.useOverlaps;
        mediaQuery = this._validateQuery(mediaQuery);
        if (useOverlaps || !this.isActive(mediaQuery)) {
            this._deactivateAll();
            this._registerMediaQuery(mediaQuery);
            this._activateWithOverlaps(mediaQuery, useOverlaps);
        }
        return this.hasActivated;
    };
    /** Converts an optional mediaQuery alias to a specific, valid mediaQuery */
    /**
     * Converts an optional mediaQuery alias to a specific, valid mediaQuery
     * @param {?} queryOrAlias
     * @return {?}
     */
    MockMatchMedia.prototype._validateQuery = /**
     * Converts an optional mediaQuery alias to a specific, valid mediaQuery
     * @param {?} queryOrAlias
     * @return {?}
     */
    function (queryOrAlias) {
        /** @type {?} */
        var bp = this._breakpoints.findByAlias(queryOrAlias);
        if (bp) {
            queryOrAlias = bp.mediaQuery;
        }
        return queryOrAlias;
    };
    /**
     * Manually activate any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     * @param {?} mediaQuery
     * @param {?} useOverlaps
     * @return {?}
     */
    MockMatchMedia.prototype._activateWithOverlaps = /**
     * Manually activate any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     * @param {?} mediaQuery
     * @param {?} useOverlaps
     * @return {?}
     */
    function (mediaQuery, useOverlaps) {
        if (useOverlaps) {
            /** @type {?} */
            var bp = this._breakpoints.findByQuery(mediaQuery);
            /** @type {?} */
            var alias = bp ? bp.alias : 'unknown';
            // Simulate activation of overlapping lt-<XXX> ranges
            switch (alias) {
                case 'lg':
                    this._activateByAlias('lt-xl');
                    break;
                case 'md':
                    this._activateByAlias('lt-xl, lt-lg');
                    break;
                case 'sm':
                    this._activateByAlias('lt-xl, lt-lg, lt-md');
                    break;
                case 'xs':
                    this._activateByAlias('lt-xl, lt-lg, lt-md, lt-sm');
                    break;
            }
            // Simulate activate of overlapping gt-<xxxx> mediaQuery ranges
            switch (alias) {
                case 'xl':
                    this._activateByAlias('gt-lg, gt-md, gt-sm, gt-xs');
                    break;
                case 'lg':
                    this._activateByAlias('gt-md, gt-sm, gt-xs');
                    break;
                case 'md':
                    this._activateByAlias('gt-sm, gt-xs');
                    break;
                case 'sm':
                    this._activateByAlias('gt-xs');
                    break;
            }
        }
        // Activate last since the responsiveActivation is watching *this* mediaQuery
        return this._activateByQuery(mediaQuery);
    };
    /**
     *
     * @param {?} aliases
     * @return {?}
     */
    MockMatchMedia.prototype._activateByAlias = /**
     *
     * @param {?} aliases
     * @return {?}
     */
    function (aliases) {
        var _this = this;
        /** @type {?} */
        var activate = function (alias) {
            /** @type {?} */
            var bp = _this._breakpoints.findByAlias(alias);
            _this._activateByQuery(bp ? bp.mediaQuery : alias);
        };
        aliases.split(',').forEach(function (alias) { return activate(alias.trim()); });
    };
    /**
     *
     * @param {?} mediaQuery
     * @return {?}
     */
    MockMatchMedia.prototype._activateByQuery = /**
     *
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        /** @type {?} */
        var mql = /** @type {?} */ (this._registry.get(mediaQuery));
        /** @type {?} */
        var alreadyAdded = this._actives.reduce(function (found, it) {
            return found || (mql && (it.media === mql.media));
        }, false);
        if (mql && !alreadyAdded) {
            this._actives.push(mql.activate());
        }
        return this.hasActivated;
    };
    /**
     * Deactivate all current Mock MQLs
     * @return {?}
     */
    MockMatchMedia.prototype._deactivateAll = /**
     * Deactivate all current Mock MQLs
     * @return {?}
     */
    function () {
        if (this._actives.length) {
            // Deactivate all current MQLs and reset the buffer
            for (var _i = 0, _a = this._actives; _i < _a.length; _i++) {
                var it = _a[_i];
                it.deactivate();
            }
            this._actives = [];
        }
        return this;
    };
    /**
     * Insure the mediaQuery is registered with MatchMedia
     * @param {?} mediaQuery
     * @return {?}
     */
    MockMatchMedia.prototype._registerMediaQuery = /**
     * Insure the mediaQuery is registered with MatchMedia
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        if (!this._registry.has(mediaQuery) && this.autoRegisterQueries) {
            this.registerQuery(mediaQuery);
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    MockMatchMedia.prototype._buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return new MockMediaQueryList(query);
    };
    Object.defineProperty(MockMatchMedia.prototype, "hasActivated", {
        get: /**
         * @return {?}
         */
        function () {
            return (this._actives.length > 0);
        },
        enumerable: true,
        configurable: true
    });
    MockMatchMedia.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MockMatchMedia.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: BreakPointRegistry }
    ]; };
    return MockMatchMedia;
}(MatchMedia));
/**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
var  /**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
MockMediaQueryList = /** @class */ (function () {
    function MockMediaQueryList(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
        this.onchange = null;
    }
    Object.defineProperty(MockMediaQueryList.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockMediaQueryList.prototype, "media", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     */
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    MockMediaQueryList.prototype.destroy = /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    function () {
        this.deactivate();
        this._listeners = [];
    };
    /** Notify all listeners that 'matches === TRUE' */
    /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    MockMediaQueryList.prototype.activate = /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._isActive) {
            this._isActive = true;
            this._listeners.forEach(function (callback) {
                /** @type {?} */
                var cb = /** @type {?} */ ((callback));
                cb.call(null, _this);
            });
        }
        return this;
    };
    /** Notify all listeners that 'matches === false' */
    /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    MockMediaQueryList.prototype.deactivate = /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._isActive) {
            this._isActive = false;
            this._listeners.forEach(function (callback) {
                /** @type {?} */
                var cb = /** @type {?} */ ((callback));
                cb.call(null, _this);
            });
        }
        return this;
    };
    /** Add a listener to our internal list to activate later */
    /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    MockMediaQueryList.prototype.addListener = /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
        }
        if (this._isActive) {
            /** @type {?} */
            var cb = /** @type {?} */ ((listener));
            cb.call(null, this);
        }
    };
    /** Don't need to remove listeners in the testing environment */
    /**
     * Don't need to remove listeners in the testing environment
     * @param {?} _
     * @return {?}
     */
    MockMediaQueryList.prototype.removeListener = /**
     * Don't need to remove listeners in the testing environment
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    MockMediaQueryList.prototype.addEventListener = /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    function (_, __, ___) {
    };
    /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    MockMediaQueryList.prototype.removeEventListener = /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    function (_, __, ___) {
    };
    /**
     * @param {?} _
     * @return {?}
     */
    MockMediaQueryList.prototype.dispatchEvent = /**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return false;
    };
    return MockMediaQueryList;
}());
/** *
 * Pre-configured provider for MockMatchMedia
  @type {?} */
var MockMatchMediaProvider = {
    // tslint:disable-line:variable-name
    provide: MatchMedia,
    useClass: MockMatchMedia
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Special server-only class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
var  /**
 * Special server-only class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
ServerMediaQueryList = /** @class */ (function () {
    function ServerMediaQueryList(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
        this.onchange = null;
    }
    Object.defineProperty(ServerMediaQueryList.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerMediaQueryList.prototype, "media", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     */
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    ServerMediaQueryList.prototype.destroy = /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    function () {
        this.deactivate();
        this._listeners = [];
    };
    /** Notify all listeners that 'matches === TRUE' */
    /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    ServerMediaQueryList.prototype.activate = /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._isActive) {
            this._isActive = true;
            this._listeners.forEach(function (callback) {
                /** @type {?} */
                var cb = /** @type {?} */ ((callback));
                cb.call(null, _this);
            });
        }
        return this;
    };
    /** Notify all listeners that 'matches === false' */
    /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    ServerMediaQueryList.prototype.deactivate = /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._isActive) {
            this._isActive = false;
            this._listeners.forEach(function (callback) {
                /** @type {?} */
                var cb = /** @type {?} */ ((callback));
                cb.call(null, _this);
            });
        }
        return this;
    };
    /** Add a listener to our internal list to activate later */
    /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    ServerMediaQueryList.prototype.addListener = /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
        }
        if (this._isActive) {
            /** @type {?} */
            var cb = /** @type {?} */ ((listener));
            cb.call(null, this);
        }
    };
    /** Don't need to remove listeners in the server environment */
    /**
     * Don't need to remove listeners in the server environment
     * @param {?} _
     * @return {?}
     */
    ServerMediaQueryList.prototype.removeListener = /**
     * Don't need to remove listeners in the server environment
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    ServerMediaQueryList.prototype.addEventListener = /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    function (_, __, ___) {
    };
    /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    ServerMediaQueryList.prototype.removeEventListener = /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    function (_, __, ___) {
    };
    /**
     * @param {?} _
     * @return {?}
     */
    ServerMediaQueryList.prototype.dispatchEvent = /**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return false;
    };
    return ServerMediaQueryList;
}());
/**
 * Special server-only implementation of MatchMedia that uses the above
 * ServerMediaQueryList as its internal representation
 *
 * Also contains methods to activate and deactivate breakpoints
 */
var ServerMatchMedia = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(ServerMatchMedia, _super);
    function ServerMatchMedia(_zone, _platformId, _document) {
        var _this = _super.call(this, _zone, _platformId, _document) || this;
        _this._zone = _zone;
        _this._platformId = _platformId;
        _this._document = _document;
        _this._registry = new Map();
        _this._source = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new MediaChange(true));
        _this._observable$ = _this._source.asObservable();
        return _this;
    }
    /** Activate the specified breakpoint if we're on the server, no-op otherwise */
    /**
     * Activate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    ServerMatchMedia.prototype.activateBreakpoint = /**
     * Activate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    function (bp) {
        /** @type {?} */
        var lookupBreakpoint = this._registry.get(bp.mediaQuery);
        if (lookupBreakpoint) {
            lookupBreakpoint.activate();
        }
    };
    /** Deactivate the specified breakpoint if we're on the server, no-op otherwise */
    /**
     * Deactivate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    ServerMatchMedia.prototype.deactivateBreakpoint = /**
     * Deactivate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    function (bp) {
        /** @type {?} */
        var lookupBreakpoint = this._registry.get(bp.mediaQuery);
        if (lookupBreakpoint) {
            lookupBreakpoint.deactivate();
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    ServerMatchMedia.prototype._buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return new ServerMediaQueryList(query);
    };
    ServerMatchMedia.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ServerMatchMedia.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    return ServerMatchMedia;
}(MatchMedia));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * MediaMonitor uses the MatchMedia service to observe mediaQuery changes (both activations and
 * deactivations). These changes are are published as MediaChange notifications.
 *
 * Note: all notifications will be performed within the
 * ng Zone to trigger change detections and component updates.
 *
 * It is the MediaMonitor that:
 *  - auto registers all known breakpoints
 *  - injects alias information into each raw MediaChange event
 *  - provides accessor to the currently active BreakPoint
 *  - publish list of overlapping BreakPoint(s); used by ResponsiveActivation
 */
var MediaMonitor = /** @class */ (function () {
    function MediaMonitor(_breakpoints, _matchMedia) {
        this._breakpoints = _breakpoints;
        this._matchMedia = _matchMedia;
        this._registerBreakpoints();
    }
    Object.defineProperty(MediaMonitor.prototype, "breakpoints", {
        /**
         * Read-only accessor to the list of breakpoints configured in the BreakPointRegistry provider
         */
        get: /**
         * Read-only accessor to the list of breakpoints configured in the BreakPointRegistry provider
         * @return {?}
         */
        function () {
            return this._breakpoints.items.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaMonitor.prototype, "activeOverlaps", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var items = this._breakpoints.overlappings.reverse();
            return items.filter(function (bp) {
                return _this._matchMedia.isActive(bp.mediaQuery);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaMonitor.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var found = null;
            /** @type {?} */
            var items = this.breakpoints.reverse();
            items.forEach(function (bp) {
                if (bp.alias !== '') {
                    if (!found && _this._matchMedia.isActive(bp.mediaQuery)) {
                        found = bp;
                    }
                }
            });
            /** @type {?} */
            var first = this.breakpoints[0];
            return found || (this._matchMedia.isActive(first.mediaQuery) ? first : null);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     */
    /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     * @param {?} alias
     * @return {?}
     */
    MediaMonitor.prototype.isActive = /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        /** @type {?} */
        var bp = this._breakpoints.findByAlias(alias) || this._breakpoints.findByQuery(alias);
        return this._matchMedia.isActive(bp ? bp.mediaQuery : alias);
    };
    /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     */
    /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     * @param {?=} alias
     * @return {?}
     */
    MediaMonitor.prototype.observe = /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     * @param {?=} alias
     * @return {?}
     */
    function (alias) {
        /** @type {?} */
        var bp = this._breakpoints.findByAlias(alias || '') ||
            this._breakpoints.findByQuery(alias || '');
        /** @type {?} */
        var hasAlias = function (change) { return (bp ? change.mqAlias !== '' : true); };
        /** @type {?} */
        var media$ = this._matchMedia.observe(bp ? bp.mediaQuery : alias);
        return media$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (change) { return mergeAlias(change, bp); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(hasAlias));
    };
    /**
     * Immediate calls to matchMedia() to establish listeners
     * and prepare for immediate subscription notifications
     * @return {?}
     */
    MediaMonitor.prototype._registerBreakpoints = /**
     * Immediate calls to matchMedia() to establish listeners
     * and prepare for immediate subscription notifications
     * @return {?}
     */
    function () {
        /** @type {?} */
        var queries = this._breakpoints.sortedItems.map(function (bp) { return bp.mediaQuery; });
        this._matchMedia.registerQuery(queries);
    };
    MediaMonitor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    MediaMonitor.ctorParameters = function () { return [
        { type: BreakPointRegistry },
        { type: MatchMedia }
    ]; };
    /** @nocollapse */ MediaMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MediaMonitor_Factory() { return new MediaMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MatchMedia)); }, token: MediaMonitor, providedIn: "root" });
    return MediaMonitor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Applies CSS prefixes to appropriate style keys.
 *
 * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
 *    {
 *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
 *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
 *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
 *      // display: -ms-flexbox;   TWEENER - IE 10
 *      // display: -moz-flexbox;  OLD - Firefox
 *    }
 * @param {?} target
 * @return {?}
 */
function applyCssPrefixes(target) {
    for (var key in target) {
        /** @type {?} */
        var value = target[key] || '';
        switch (key) {
            case 'display':
                if (value === 'flex') {
                    target['display'] = [
                        '-webkit-flex',
                        'flex'
                    ];
                }
                else if (value === 'inline-flex') {
                    target['display'] = [
                        '-webkit-inline-flex',
                        'inline-flex'
                    ];
                }
                else {
                    target['display'] = value;
                }
                break;
            case 'align-items':
            case 'align-self':
            case 'align-content':
            case 'flex':
            case 'flex-basis':
            case 'flex-flow':
            case 'flex-grow':
            case 'flex-shrink':
            case 'flex-wrap':
            case 'justify-content':
                target['-webkit-' + key] = value;
                break;
            case 'flex-direction':
                value = value || 'row';
                target['-webkit-flex-direction'] = value;
                target['flex-direction'] = value;
                break;
            case 'order':
                target['order'] = target['-webkit-' + key] = isNaN(+value) ? '0' : value;
                break;
        }
    }
    return target;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StyleUtils = /** @class */ (function () {
    function StyleUtils(_serverStylesheet, _serverModuleLoaded, _platformId, layoutConfig) {
        this._serverStylesheet = _serverStylesheet;
        this._serverModuleLoaded = _serverModuleLoaded;
        this._platformId = _platformId;
        this.layoutConfig = layoutConfig;
    }
    /**
     * Applies styles given via string pair or object map to the directive element
     */
    /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} element
     * @param {?} style
     * @param {?=} value
     * @return {?}
     */
    StyleUtils.prototype.applyStyleToElement = /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} element
     * @param {?} style
     * @param {?=} value
     * @return {?}
     */
    function (element, style, value) {
        if (value === void 0) { value = null; }
        /** @type {?} */
        var styles = {};
        if (typeof style === 'string') {
            styles[style] = value;
            style = styles;
        }
        styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
        this._applyMultiValueStyleToElement(styles, element);
    };
    /**
     * Applies styles given via string pair or object map to the directive's element
     */
    /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?=} elements
     * @return {?}
     */
    StyleUtils.prototype.applyStyleToElements = /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?=} elements
     * @return {?}
     */
    function (style, elements) {
        var _this = this;
        if (elements === void 0) { elements = []; }
        /** @type {?} */
        var styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
        elements.forEach(function (el) {
            _this._applyMultiValueStyleToElement(styles, el);
        });
    };
    /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     */
    /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     * @param {?} target
     * @return {?}
     */
    StyleUtils.prototype.getFlowDirection = /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     * @param {?} target
     * @return {?}
     */
    function (target) {
        /** @type {?} */
        var query = 'flex-direction';
        /** @type {?} */
        var value = this.lookupStyle(target, query);
        if (value === FALLBACK_STYLE) {
            value = '';
        }
        /** @type {?} */
        var hasInlineValue = this.lookupInlineStyle(target, query) ||
            (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this._platformId) && this._serverModuleLoaded) ? value : '';
        return [value || 'row', hasInlineValue];
    };
    /**
     * Find the DOM element's raw attribute value (if any)
     */
    /**
     * Find the DOM element's raw attribute value (if any)
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    StyleUtils.prototype.lookupAttributeValue = /**
     * Find the DOM element's raw attribute value (if any)
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    function (element, attribute) {
        return element.getAttribute(attribute) || '';
    };
    /**
     * Find the DOM element's inline style value (if any)
     */
    /**
     * Find the DOM element's inline style value (if any)
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    StyleUtils.prototype.lookupInlineStyle = /**
     * Find the DOM element's inline style value (if any)
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    function (element, styleName) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) ?
            element.style.getPropertyValue(styleName) : this._getServerStyle(element, styleName);
    };
    /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     */
    /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     * @param {?} element
     * @param {?} styleName
     * @param {?=} inlineOnly
     * @return {?}
     */
    StyleUtils.prototype.lookupStyle = /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     * @param {?} element
     * @param {?} styleName
     * @param {?=} inlineOnly
     * @return {?}
     */
    function (element, styleName, inlineOnly) {
        if (inlineOnly === void 0) { inlineOnly = false; }
        /** @type {?} */
        var value = '';
        if (element) {
            /** @type {?} */
            var immediateValue = value = this.lookupInlineStyle(element, styleName);
            if (!immediateValue) {
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId)) {
                    if (!inlineOnly) {
                        value = getComputedStyle(element).getPropertyValue(styleName);
                    }
                }
                else {
                    if (this._serverModuleLoaded) {
                        value = this._serverStylesheet.getStyleForElement(element, styleName);
                    }
                }
            }
        }
        // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
        //       in which case getComputedStyle() should determine a valid value.
        return value ? value.trim() : FALLBACK_STYLE;
    };
    /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     * @param {?} styles
     * @param {?} element
     * @return {?}
     */
    StyleUtils.prototype._applyMultiValueStyleToElement = /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     * @param {?} styles
     * @param {?} element
     * @return {?}
     */
    function (styles, element) {
        var _this = this;
        Object.keys(styles).sort().forEach(function (key) {
            /** @type {?} */
            var el = styles[key];
            /** @type {?} */
            var values = Array.isArray(el) ? el : [el];
            values.sort();
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                value = value ? value + '' : '';
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this._platformId) || !_this._serverModuleLoaded) {
                    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this._platformId) ?
                        element.style.setProperty(key, value) : _this._setServerStyle(element, key, value);
                }
                else {
                    _this._serverStylesheet.addStyleToElement(element, key, value);
                }
            }
        });
    };
    /**
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    StyleUtils.prototype._setServerStyle = /**
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    function (element, styleName, styleValue) {
        styleName = styleName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        /** @type {?} */
        var styleMap = this._readStyleAttribute(element);
        styleMap[styleName] = styleValue || '';
        this._writeStyleAttribute(element, styleMap);
    };
    /**
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    StyleUtils.prototype._getServerStyle = /**
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    function (element, styleName) {
        /** @type {?} */
        var styleMap = this._readStyleAttribute(element);
        return styleMap[styleName] || '';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    StyleUtils.prototype._readStyleAttribute = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var styleMap = {};
        /** @type {?} */
        var styleAttribute = element.getAttribute('style');
        if (styleAttribute) {
            /** @type {?} */
            var styleList = styleAttribute.split(/;+/g);
            for (var i = 0; i < styleList.length; i++) {
                /** @type {?} */
                var style = styleList[i].trim();
                if (style.length > 0) {
                    /** @type {?} */
                    var colonIndex = style.indexOf(':');
                    if (colonIndex === -1) {
                        throw new Error("Invalid CSS style: " + style);
                    }
                    /** @type {?} */
                    var name_1 = style.substr(0, colonIndex).trim();
                    styleMap[name_1] = style.substr(colonIndex + 1).trim();
                }
            }
        }
        return styleMap;
    };
    /**
     * @param {?} element
     * @param {?} styleMap
     * @return {?}
     */
    StyleUtils.prototype._writeStyleAttribute = /**
     * @param {?} element
     * @param {?} styleMap
     * @return {?}
     */
    function (element, styleMap) {
        /** @type {?} */
        var styleAttrValue = '';
        for (var key in styleMap) {
            /** @type {?} */
            var newValue = styleMap[key];
            if (newValue) {
                styleAttrValue += key + ':' + styleMap[key] + ';';
            }
        }
        element.setAttribute('style', styleAttrValue);
    };
    StyleUtils.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    StyleUtils.ctorParameters = function () { return [
        { type: StylesheetMap, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SERVER_TOKEN,] }] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAYOUT_CONFIG,] }] }
    ]; };
    /** @nocollapse */ StyleUtils.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function StyleUtils_Factory() { return new StyleUtils(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(StylesheetMap, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVER_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG)); }, token: StyleUtils, providedIn: "root" });
    return StyleUtils;
}());
/** @type {?} */
var FALLBACK_STYLE = 'block';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * The flex API permits 3 or 1 parts of the value:
 *    - `flex-grow flex-shrink flex-basis`, or
 *    - `flex-basis`
 * @param {?} basis
 * @param {?=} grow
 * @param {?=} shrink
 * @return {?}
 */
function validateBasis(basis, grow, shrink) {
    if (grow === void 0) { grow = '1'; }
    if (shrink === void 0) { shrink = '1'; }
    /** @type {?} */
    var parts = [grow, shrink, basis];
    /** @type {?} */
    var j = basis.indexOf('calc');
    if (j > 0) {
        parts[2] = _validateCalcValue(basis.substring(j).trim());
        /** @type {?} */
        var matches = basis.substr(0, j).trim().split(' ');
        if (matches.length == 2) {
            parts[0] = matches[0];
            parts[1] = matches[1];
        }
    }
    else if (j == 0) {
        parts[2] = _validateCalcValue(basis.trim());
    }
    else {
        /** @type {?} */
        var matches = basis.split(' ');
        parts = (matches.length === 3) ? matches : [
            grow, shrink, basis
        ];
    }
    return parts;
}
/**
 * Calc expressions require whitespace before & after any expression operators
 * This is a simple, crude whitespace padding solution.
 *   - '3 3 calc(15em + 20px)'
 *   - calc(100% / 7 * 2)
 *   - 'calc(15em + 20px)'
 *   - 'calc(15em+20px)'
 *   - '37px'
 *   = '43%'
 * @param {?} calc
 * @return {?}
 */
function _validateCalcValue(calc) {
    return calc.replace(/[\s]/g, '').replace(/[\/\*\+\-]/g, ' $& ');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=core.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/extended.es5.js":
/*!****************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm5/extended.es5.js ***!
  \****************************************************************/
/*! exports provided: ExtendedModule, ClassDirective, ImgSrcDirective, negativeOf, ShowHideDirective, StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedModule", function() { return ExtendedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return ClassDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function() { return ImgSrcDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negativeOf", function() { return negativeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function() { return ShowHideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return StyleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * This directive provides a responsive API for the HTML <img> 'src' attribute
 * and will update the img.src property upon each responsive activation.
 *
 * e.g.
 *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
 *
 * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
 */
var ImgSrcDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ImgSrcDirective, _super);
    /* tslint:enable */
    function ImgSrcDirective(_elRef, _monitor, _styler, _platformId, _serverModuleLoaded) {
        var _this = _super.call(this, _monitor, _elRef, _styler) || this;
        _this._elRef = _elRef;
        _this._monitor = _monitor;
        _this._styler = _styler;
        _this._platformId = _platformId;
        _this._serverModuleLoaded = _serverModuleLoaded;
        _this._cacheInput('src', _elRef.nativeElement.getAttribute('src') || '');
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(_this._platformId) && _this._serverModuleLoaded) {
            _this.nativeElement.setAttribute('src', '');
        }
        return _this;
    }
    Object.defineProperty(ImgSrcDirective.prototype, "srcBase", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this.cacheDefaultSrc(val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtLg', val); },
        enumerable: true,
        configurable: true
    });
    /**
     * Listen for responsive changes to update the img.src attribute
     */
    /**
     * Listen for responsive changes to update the img.src attribute
     * @return {?}
     */
    ImgSrcDirective.prototype.ngOnInit = /**
     * Listen for responsive changes to update the img.src attribute
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (this.hasResponsiveKeys) {
            // Listen for responsive changes
            this._listenForMediaQueryChanges('src', this.defaultSrc, function () {
                _this._updateSrcFor();
            });
        }
        this._updateSrcFor();
    };
    /**
     * Update the 'src' property of the host <img> element
     */
    /**
     * Update the 'src' property of the host <img> element
     * @return {?}
     */
    ImgSrcDirective.prototype.ngOnChanges = /**
     * Update the 'src' property of the host <img> element
     * @return {?}
     */
    function () {
        if (this.hasInitialized) {
            this._updateSrcFor();
        }
    };
    /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     */
    /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     * @return {?}
     */
    ImgSrcDirective.prototype._updateSrcFor = /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     * @return {?}
     */
    function () {
        if (this.hasResponsiveKeys) {
            /** @type {?} */
            var url = this.activatedValue || this.defaultSrc;
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this._platformId) && this._serverModuleLoaded) {
                this._styler.applyStyleToElement(this.nativeElement, { 'content': url ? "url(" + url + ")" : '' });
            }
            else {
                this.nativeElement.setAttribute('src', String(url));
            }
        }
    };
    /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using @Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     */
    /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using \@Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     * @param {?=} value
     * @return {?}
     */
    ImgSrcDirective.prototype.cacheDefaultSrc = /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using \@Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        this._cacheInput('src', value || '');
    };
    Object.defineProperty(ImgSrcDirective.prototype, "defaultSrc", {
        /**
         * Empty values are maintained, undefined values are exposed as ''
         */
        get: /**
         * Empty values are maintained, undefined values are exposed as ''
         * @return {?}
         */
        function () {
            return this._queryInput('src') || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "hasResponsiveKeys", {
        /**
         * Does the <img> have 1 or more src.<xxx> responsive inputs
         * defined... these will be mapped to activated breakpoints.
         */
        get: /**
         * Does the <img> have 1 or more src.<xxx> responsive inputs
         * defined... these will be mapped to activated breakpoints.
         * @return {?}
         */
        function () {
            return Object.keys(this._inputMap).length > 1;
        },
        enumerable: true,
        configurable: true
    });
    ImgSrcDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],\n  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],\n  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    ImgSrcDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"],] }] }
    ]; };
    ImgSrcDirective.propDecorators = {
        srcBase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src',] }],
        srcXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.xs',] }],
        srcSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.sm',] }],
        srcMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.md',] }],
        srcLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.lg',] }],
        srcXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.xl',] }],
        srcLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.lt-sm',] }],
        srcLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.lt-md',] }],
        srcLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.lt-lg',] }],
        srcLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.lt-xl',] }],
        srcGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.gt-xs',] }],
        srcGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.gt-sm',] }],
        srcGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.gt-md',] }],
        srcGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.gt-lg',] }]
    };
    return ImgSrcDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Directive to add responsive support for ngClass.
 * This maintains the core functionality of 'ngClass' and adds responsive API
 * Note: this class is a no-op when rendered on the server
 */
var ClassDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClassDirective, _super);
    /* tslint:enable */
    function ClassDirective(monitor, _iterableDiffers, _keyValueDiffers, _ngEl, _renderer, _ngClassInstance, _styler) {
        var _this = _super.call(this, monitor, _ngEl, _styler) || this;
        _this.monitor = monitor;
        _this._iterableDiffers = _iterableDiffers;
        _this._keyValueDiffers = _keyValueDiffers;
        _this._ngEl = _ngEl;
        _this._renderer = _renderer;
        _this._ngClassInstance = _ngClassInstance;
        _this._styler = _styler;
        _this._base = new _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirectiveAdapter"]('ngClass', _this.monitor, _this._ngEl, _this._styler);
        if (!_this._ngClassInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
            // the same host element; since the responsive variations may be defined...
            _this._ngClassInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"](_this._iterableDiffers, _this._keyValueDiffers, _this._ngEl, _this._renderer);
        }
        return _this;
    }
    Object.defineProperty(ClassDirective.prototype, "ngClassBase", {
        /**
         * Intercept ngClass assignments so we cache the default classes
         * which are merged with activated styles or used as fallbacks.
         * Note: Base ngClass values are applied during ngDoCheck()
         */
        set: /**
         * Intercept ngClass assignments so we cache the default classes
         * which are merged with activated styles or used as fallbacks.
         * Note: Base ngClass values are applied during ngDoCheck()
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var key = 'ngClass';
            this._base.cacheInput(key, val, true);
            this._ngClassInstance.ngClass = this._base.queryInput(key);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "klazz", {
        /**
         * Capture class assignments so we cache the default classes
         * which are merged with activated styles and used as fallbacks.
         */
        set: /**
         * Capture class assignments so we cache the default classes
         * which are merged with activated styles and used as fallbacks.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var key = 'class';
            this._base.cacheInput(key, val);
            this._ngClassInstance.klass = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassXs", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /**
     * For @Input changes on the current mq activation property
     */
    /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    ClassDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._base.activeKey in changes) {
            this._ngClassInstance.ngClass = this._base.mqActivation.activatedInput || '';
        }
    };
    /**
     * @return {?}
     */
    ClassDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._configureMQListener();
    };
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     */
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    ClassDirective.prototype.ngDoCheck = /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    function () {
        this._ngClassInstance.ngDoCheck();
    };
    /**
     * @return {?}
     */
    ClassDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._base.ngOnDestroy();
    };
    // ******************************************************************
    // Internal Methods
    // ******************************************************************
    /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     */
    /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     * @param {?=} baseKey
     * @return {?}
     */
    ClassDirective.prototype._configureMQListener = /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     * @param {?=} baseKey
     * @return {?}
     */
    function (baseKey) {
        var _this = this;
        if (baseKey === void 0) { baseKey = 'ngClass'; }
        /** @type {?} */
        var fallbackValue = this._base.queryInput(baseKey);
        this._base.listenForMediaQueryChanges(baseKey, fallbackValue, function (changes) {
            _this._ngClassInstance.ngClass = changes.value || '';
            _this._ngClassInstance.ngDoCheck();
        });
    };
    ClassDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n    [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],\n    [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],\n    [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]\n  "
                },] },
    ];
    /** @nocollapse */
    ClassDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] }
    ]; };
    ClassDirective.propDecorators = {
        ngClassBase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass',] }],
        klazz: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['class',] }],
        ngClassXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.xs',] }],
        ngClassSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.sm',] }],
        ngClassMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.md',] }],
        ngClassLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.lg',] }],
        ngClassXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.xl',] }],
        ngClassLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.lt-sm',] }],
        ngClassLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.lt-md',] }],
        ngClassLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.lt-lg',] }],
        ngClassLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.lt-xl',] }],
        ngClassGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.gt-xs',] }],
        ngClassGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.gt-sm',] }],
        ngClassGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.gt-md',] }],
        ngClassGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.gt-lg',] }]
    };
    return ClassDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var FALSY = ['false', false, 0];
/**
 * For fxHide selectors, we invert the 'value'
 * and assign to the equivalent fxShow selector cache
 *  - When 'hide' === '' === true, do NOT show the element
 *  - When 'hide' === false or 0... we WILL show the element
 * @param {?} hide
 * @return {?}
 */
function negativeOf(hide) {
    return (hide === '') ? false :
        ((hide === 'false') || (hide === 0)) ? true : !hide;
}
/**
 * 'show' Layout API directive
 *
 */
var ShowHideDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShowHideDirective, _super);
    /* tslint:enable */
    function ShowHideDirective(monitor, layout, elRef, styleUtils, platformId, serverModuleLoaded) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this.layout = layout;
        _this.elRef = elRef;
        _this.styleUtils = styleUtils;
        _this.platformId = platformId;
        _this.serverModuleLoaded = serverModuleLoaded;
        /**
         * Original dom Elements CSS display style
         */
        _this._display = '';
        if (layout) {
            /**
                   * The Layout can set the display:flex (and incorrectly affect the Hide/Show directives.
                   * Whenever Layout [on the same element] resets its CSS, then update the Hide/Show CSS
                   */
            _this._layoutWatcher = layout.layout$.subscribe(function () { return _this._updateWithValue(); });
        }
        return _this;
    }
    Object.defineProperty(ShowHideDirective.prototype, "show", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('show', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hide", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('show', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXs', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXl', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtXl', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtXs', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     */
    /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     * @return {?}
     */
    ShowHideDirective.prototype._getDisplayStyle = /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     * @return {?}
     */
    function () {
        return this.layout ? 'flex' : _super.prototype._getDisplayStyle.call(this);
    };
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     */
    /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnChanges = /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.hasInitialized && (changes['show'] != null || this._mqActivation)) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._display = this._getDisplayStyle();
        /** @type {?} */
        var value = this._getDefaultVal('show', true);
        // Build _mqActivation controller
        this._listenForMediaQueryChanges('show', value, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    /**
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /** Validate the visibility value and then update the host's inline display style */
    /**
     * Validate the visibility value and then update the host's inline display style
     * @param {?=} value
     * @return {?}
     */
    ShowHideDirective.prototype._updateWithValue = /**
     * Validate the visibility value and then update the host's inline display style
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._getDefaultVal('show', true);
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        var shouldShow = this._validateTruthy(value);
        this._applyStyleToElement(this._buildCSS(shouldShow));
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId) && this.serverModuleLoaded) {
            this.nativeElement.style.setProperty('display', '');
        }
    };
    /** Build the CSS that should be assigned to the element instance */
    /**
     * Build the CSS that should be assigned to the element instance
     * @param {?} show
     * @return {?}
     */
    ShowHideDirective.prototype._buildCSS = /**
     * Build the CSS that should be assigned to the element instance
     * @param {?} show
     * @return {?}
     */
    function (show) {
        return { 'display': show ? this._display : 'none' };
    };
    /**  Validate the to be not FALSY */
    /**
     * Validate the to be not FALSY
     * @param {?=} show
     * @return {?}
     */
    ShowHideDirective.prototype._validateTruthy = /**
     * Validate the to be not FALSY
     * @param {?=} show
     * @return {?}
     */
    function (show) {
        if (show === void 0) { show = ''; }
        return (FALSY.indexOf(show) === -1);
    };
    ShowHideDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n  [fxShow],\n  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],\n  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],\n  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],\n  [fxHide],\n  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],\n  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],\n  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    ShowHideDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"] },
        { type: _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"],] }] }
    ]; };
    ShowHideDirective.propDecorators = {
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow',] }],
        showXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.xs',] }],
        showSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.sm',] }],
        showMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.md',] }],
        showLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.lg',] }],
        showXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.xl',] }],
        showLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.lt-sm',] }],
        showLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.lt-md',] }],
        showLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.lt-lg',] }],
        showLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.lt-xl',] }],
        showGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.gt-xs',] }],
        showGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.gt-sm',] }],
        showGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.gt-md',] }],
        showGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.gt-lg',] }],
        hide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide',] }],
        hideXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.xs',] }],
        hideSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.sm',] }],
        hideMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.md',] }],
        hideLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.lg',] }],
        hideXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.xl',] }],
        hideLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.lt-sm',] }],
        hideLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.lt-md',] }],
        hideLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.lt-lg',] }],
        hideLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.lt-xl',] }],
        hideGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.gt-xs',] }],
        hideGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.gt-sm',] }],
        hideGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.gt-md',] }],
        hideGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.gt-lg',] }]
    };
    return ShowHideDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * NgStyle allowed inputs
 */
var /**
 * NgStyle allowed inputs
 */
NgStyleKeyValue = /** @class */ (function () {
    function NgStyleKeyValue(key, value, noQuotes) {
        if (noQuotes === void 0) { noQuotes = true; }
        this.key = key;
        this.value = value;
        this.key = noQuotes ? key.replace(/['"]/g, '').trim() : key.trim();
        this.value = noQuotes ? value.replace(/['"]/g, '').trim() : value.trim();
        this.value = this.value.replace(/;/, '');
    }
    return NgStyleKeyValue;
}());
/**
 * @param {?} target
 * @return {?}
 */
function getType(target) {
    /** @type {?} */
    var what = typeof target;
    if (what === 'object') {
        return (target.constructor === Array) ? 'array' :
            (target.constructor === Set) ? 'set' : 'object';
    }
    return what;
}
/**
 * Split string of key:value pairs into Array of k-v pairs
 * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
 * @param {?} source
 * @param {?=} delimiter
 * @return {?}
 */
function buildRawList(source, delimiter) {
    if (delimiter === void 0) { delimiter = ';'; }
    return String(source)
        .trim()
        .split(delimiter)
        .map(function (val) { return val.trim(); })
        .filter(function (val) { return val !== ''; });
}
/**
 * Convert array of key:value strings to a iterable map object
 * @param {?} styles
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromList(styles, sanitize) {
    /** @type {?} */
    var sanitizeValue = function (it) {
        if (sanitize) {
            it.value = sanitize(it.value);
        }
        return it;
    };
    return styles
        .map(stringToKeyValue)
        .filter(function (entry) { return !!entry; })
        .map(sanitizeValue)
        .reduce(keyValuesToMap, /** @type {?} */ ({}));
}
/**
 * Convert Set<string> or raw Object to an iterable NgStyleMap
 * @param {?} source
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromSet(source, sanitize) {
    /** @type {?} */
    var list = [];
    if (getType(source) === 'set') {
        (/** @type {?} */ (source)).forEach(function (entry) { return list.push(entry); });
    }
    else {
        Object.keys(source).forEach(function (key) {
            list.push(key + ":" + ((/** @type {?} */ (source)))[key]);
        });
    }
    return buildMapFromList(list, sanitize);
}
/**
 * Convert 'key:value' -> [key, value]
 * @param {?} it
 * @return {?}
 */
function stringToKeyValue(it) {
    var _a = it.split(':'), key = _a[0], val = _a[1];
    return new NgStyleKeyValue(key, val);
}
/**
 * Convert [ [key,value] ] -> { key : value }
 * @param {?} map
 * @param {?} entry
 * @return {?}
 */
function keyValuesToMap(map, entry) {
    if (!!entry.key) {
        map[entry.key] = entry.value;
    }
    return map;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Directive to add responsive support for ngStyle.
 *
 */
var StyleDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StyleDirective, _super);
    /* tslint:enable */
    /**
     *  Constructor for the ngStyle subclass; which adds selectors and
     *  a MediaQuery Activation Adapter
     */
    function StyleDirective(monitor, _sanitizer, _ngEl, _renderer, _differs, _ngStyleInstance, _styler) {
        var _this = _super.call(this, monitor, _ngEl, _styler) || this;
        _this.monitor = monitor;
        _this._sanitizer = _sanitizer;
        _this._ngEl = _ngEl;
        _this._renderer = _renderer;
        _this._differs = _differs;
        _this._ngStyleInstance = _ngStyleInstance;
        _this._styler = _styler;
        _this._base = new _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirectiveAdapter"]('ngStyle', _this.monitor, _this._ngEl, _this._styler);
        if (!_this._ngStyleInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been
            // defined on the same host element; since the responsive variations may be defined...
            _this._ngStyleInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"](_this._differs, _this._ngEl, _this._renderer);
        }
        _this._buildCacheInterceptor();
        _this._fallbackToStyle();
        return _this;
    }
    Object.defineProperty(StyleDirective.prototype, "ngStyleBase", {
        /**
         * Intercept ngStyle assignments so we cache the default styles
         * which are merged with activated styles or used as fallbacks.
         */
        set: /**
         * Intercept ngStyle assignments so we cache the default styles
         * which are merged with activated styles or used as fallbacks.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var key = 'ngStyle';
            this._base.cacheInput(key, val, true); // convert val to hashmap
            this._ngStyleInstance.ngStyle = this._base.queryInput(key);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleXs", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /** For @Input changes on the current mq activation property */
    /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    StyleDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._base.activeKey in changes) {
            this._ngStyleInstance.ngStyle = this._base.mqActivation.activatedInput || '';
        }
    };
    /**
     * @return {?}
     */
    StyleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._configureMQListener();
    };
    /** For ChangeDetectionStrategy.onPush and ngOnChanges() updates */
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    StyleDirective.prototype.ngDoCheck = /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    function () {
        this._ngStyleInstance.ngDoCheck();
    };
    /**
     * @return {?}
     */
    StyleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._base.ngOnDestroy();
    };
    // ******************************************************************
    // Internal Methods
    // ******************************************************************
    /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @param {?=} baseKey
     * @return {?}
     */
    StyleDirective.prototype._configureMQListener = /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @param {?=} baseKey
     * @return {?}
     */
    function (baseKey) {
        var _this = this;
        if (baseKey === void 0) { baseKey = 'ngStyle'; }
        /** @type {?} */
        var fallbackValue = this._base.queryInput(baseKey);
        this._base.listenForMediaQueryChanges(baseKey, fallbackValue, function (changes) {
            _this._ngStyleInstance.ngStyle = changes.value || '';
            _this._ngStyleInstance.ngDoCheck();
        });
    };
    // ************************************************************************
    // Private Internal Methods
    // ************************************************************************
    /** Build intercept to convert raw strings to ngStyleMap */
    /**
     * Build intercept to convert raw strings to ngStyleMap
     * @return {?}
     */
    StyleDirective.prototype._buildCacheInterceptor = /**
     * Build intercept to convert raw strings to ngStyleMap
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var cacheInput = this._base.cacheInput.bind(this._base);
        this._base.cacheInput = function (key, source, cacheRaw, merge) {
            if (cacheRaw === void 0) { cacheRaw = false; }
            if (merge === void 0) { merge = true; }
            /** @type {?} */
            var styles = _this._buildStyleMap(source);
            if (merge) {
                styles = extendObject({}, _this._base.inputMap['ngStyle'], styles);
            }
            cacheInput(key, styles, cacheRaw);
        };
    };
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     */
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     * @param {?} styles
     * @return {?}
     */
    StyleDirective.prototype._buildStyleMap = /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     * @param {?} styles
     * @return {?}
     */
    function (styles) {
        var _this = this;
        /** @type {?} */
        var sanitizer = function (val) {
            // Always safe-guard (aka sanitize) style property values
            return _this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].STYLE, val) || '';
        };
        if (styles) {
            switch (getType(styles)) {
                case 'string': return buildMapFromList$1(buildRawList(styles), sanitizer);
                case 'array': return buildMapFromList$1(/** @type {?} */ (styles), sanitizer);
                case 'set': return buildMapFromSet(styles, sanitizer);
                default: return buildMapFromSet(styles, sanitizer);
            }
        }
        return styles;
    };
    /** Initial lookup of raw 'class' value (if any) */
    /**
     * Initial lookup of raw 'class' value (if any)
     * @return {?}
     */
    StyleDirective.prototype._fallbackToStyle = /**
     * Initial lookup of raw 'class' value (if any)
     * @return {?}
     */
    function () {
        if (!this._base.queryInput('ngStyle')) {
            this.ngStyleBase = this._getAttributeValue('style') || '';
        }
    };
    StyleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n    [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],\n    [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],\n    [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]\n  "
                },] },
    ];
    /** @nocollapse */
    StyleDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] }
    ]; };
    StyleDirective.propDecorators = {
        ngStyleBase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle',] }],
        ngStyleXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.xs',] }],
        ngStyleSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.sm',] }],
        ngStyleMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.md',] }],
        ngStyleLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.lg',] }],
        ngStyleXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.xl',] }],
        ngStyleLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.lt-sm',] }],
        ngStyleLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.lt-md',] }],
        ngStyleLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.lt-lg',] }],
        ngStyleLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.lt-xl',] }],
        ngStyleGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.gt-xs',] }],
        ngStyleGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.gt-sm',] }],
        ngStyleGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.gt-md',] }],
        ngStyleGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.gt-lg',] }]
    };
    return StyleDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]));
/**
 * Build a styles map from a list of styles, while sanitizing bad values first
 * @param {?} styles
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromList$1(styles, sanitize) {
    /** @type {?} */
    var sanitizeValue = function (it) {
        if (sanitize) {
            it.value = sanitize(it.value);
        }
        return it;
    };
    return styles
        .map(stringToKeyValue)
        .filter(function (entry) { return !!entry; })
        .map(sanitizeValue)
        .reduce(keyValuesToMap, /** @type {?} */ ({}));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ALL_DIRECTIVES = [
    ShowHideDirective,
    ClassDirective,
    StyleDirective,
    ImgSrcDirective
];
/**
 * *****************************************************************
 * Define module for the Extended API
 * *****************************************************************
 */
var ExtendedModule = /** @class */ (function () {
    function ExtendedModule() {
    }
    ExtendedModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]],
                    declarations: ALL_DIRECTIVES.slice(),
                    exports: ALL_DIRECTIVES.slice()
                },] },
    ];
    return ExtendedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=extended.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js ***!
  \*******************************************************************/
/*! exports provided: removeStyles, BROWSER_PROVIDER, CLASS_NAME, CoreModule, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, BaseDirective, BaseDirectiveAdapter, RESPONSIVE_ALIASES, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MatchMedia, MockMatchMedia, MockMediaQueryList, MockMatchMediaProvider, ServerMediaQueryList, ServerMatchMedia, MediaMonitor, ObservableMedia, MediaService, ObservableMediaProvider, KeyOptions, ResponsiveActivation, StyleUtils, validateBasis, ExtendedModule, ClassDirective, ImgSrcDirective, negativeOf, ShowHideDirective, StyleDirective, FlexModule, FlexDirective, FlexAlignDirective, FlexFillDirective, FlexOffsetDirective, FlexOrderDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵa, ɵj, ɵk, GridModule, VERSION, FlexLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexLayoutModule", function() { return FlexLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStyles", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["removeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BROWSER_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CLASS_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaChange", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesheetMap", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StylesheetMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDirective", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDirectiveAdapter", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirectiveAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESPONSIVE_ALIASES", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["RESPONSIVE_ALIASES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenTypes", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ScreenTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ORIENTATION_BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BreakPointRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatchMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockMatchMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MockMatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockMediaQueryList", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MockMediaQueryList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockMatchMediaProvider", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MockMatchMediaProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerMediaQueryList", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ServerMediaQueryList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerMatchMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ServerMatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaMonitor", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableMediaProvider", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ObservableMediaProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyOptions", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["KeyOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveActivation", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ResponsiveActivation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleUtils", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateBasis", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["validateBasis"]; });

/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendedModule", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ClassDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ImgSrcDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "negativeOf", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["negativeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ShowHideDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["StyleDirective"]; });

/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexModule", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexAlignDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOffsetDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOrderDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutAlignDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutGapDirective"]; });

/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm5/grid.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]; });

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Current version of Angular Flex-Layout.
  @type {?} */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('7.0.0-beta.19');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
 * * Will automatically provide Flex, Grid, and Extended modules for use in the application
 * * Can be configured using the static withConfig method, options viewable on the Wiki's
 *   Configuration page
 */
var FlexLayoutModule = /** @class */ (function () {
    function FlexLayoutModule(serverModuleLoaded, platformId) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId) && !serverModuleLoaded) {
            console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
        }
    }
    /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     */
    /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     * @param {?} configOptions
     * @param {?=} breakpoints
     * @return {?}
     */
    FlexLayoutModule.withConfig = /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     * @param {?} configOptions
     * @param {?=} breakpoints
     * @return {?}
     */
    function (configOptions, breakpoints) {
        if (breakpoints === void 0) { breakpoints = []; }
        return {
            ngModule: FlexLayoutModule,
            providers: configOptions.serverLoaded ?
                [
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], useValue: configOptions },
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"], useValue: breakpoints, multi: true },
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"], useValue: true },
                ] : [
                { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], useValue: configOptions },
                { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"], useValue: breakpoints, multi: true },
            ]
        };
    };
    FlexLayoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]],
                    exports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]]
                },] },
    ];
    /** @nocollapse */
    FlexLayoutModule.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"],] }] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
    return FlexLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=flex-layout.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/flex.es5.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm5/flex.es5.js ***!
  \************************************************************/
/*! exports provided: FlexModule, FlexDirective, FlexAlignDirective, FlexFillDirective, FlexOffsetDirective, FlexOrderDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexModule", function() { return FlexModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexDirective", function() { return FlexDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function() { return FlexAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function() { return FlexFillDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function() { return FlexOffsetDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function() { return FlexOrderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDirective", function() { return LayoutDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function() { return LayoutAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function() { return LayoutGapDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
  @type {?} */
var INLINE = 'inline';
/** @type {?} */
var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    var _a = validateValue(value), direction = _a[0], wrap = _a[1], isInline = _a[2];
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    var _a = value.split(' '), direction = _a[0], wrap = _a[1], inline = _a[2];
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find(function (x) { return x === direction; })) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Determine if the validated, flex-direction value specifies
 * a horizontal/row flow.
 * @param {?} value
 * @return {?}
 */
function isFlowHorizontal(value) {
    var flow = validateValue(value)[0];
    return flow.indexOf('row') > -1;
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap, inline) {
    if (wrap === void 0) { wrap = null; }
    if (inline === void 0) { inline = false; }
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'layout' flexbox styling directive
 * Defines the positioning flow direction for the child elements: row or column
 * Optional values: column or row (default)
 * @see https://css-tricks.com/almanac/properties/f/flex-direction/
 *
 */
var LayoutDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutDirective, _super);
    /* tslint:enable */
    function LayoutDirective(monitor, elRef, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._announcer = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        _this.layout$ = _this._announcer.asObservable();
        return _this;
    }
    Object.defineProperty(LayoutDirective.prototype, "layout", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layout', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     */
    /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    LayoutDirective.prototype.ngOnChanges = /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['layout'] != null || this._mqActivation) {
            this._updateWithDirection();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    LayoutDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('layout', 'row', function (changes) {
            _this._updateWithDirection(changes.value);
        });
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /** Validate the direction value and then update the host's inline flexbox styles */
    /**
     * Validate the direction value and then update the host's inline flexbox styles
     * @param {?=} value
     * @return {?}
     */
    LayoutDirective.prototype._updateWithDirection = /**
     * Validate the direction value and then update the host's inline flexbox styles
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('layout') || 'row';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        var css = buildLayoutCSS(!!value ? value : '');
        this._applyStyleToElement(css);
        this._announcer.next({
            direction: css['flex-direction'],
            wrap: !!css['flex-wrap'] && css['flex-wrap'] !== 'nowrap'
        });
    };
    LayoutDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxLayout],\n  [fxLayout.xs], [fxLayout.sm], [fxLayout.md], [fxLayout.lg], [fxLayout.xl],\n  [fxLayout.lt-sm], [fxLayout.lt-md], [fxLayout.lt-lg], [fxLayout.lt-xl],\n  [fxLayout.gt-xs], [fxLayout.gt-sm], [fxLayout.gt-md], [fxLayout.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    LayoutDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    LayoutDirective.propDecorators = {
        layout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout',] }],
        layoutXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.xs',] }],
        layoutSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.sm',] }],
        layoutMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.md',] }],
        layoutLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.lg',] }],
        layoutXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.xl',] }],
        layoutGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.gt-xs',] }],
        layoutGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.gt-sm',] }],
        layoutGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.gt-md',] }],
        layoutGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.gt-lg',] }],
        layoutLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.lt-sm',] }],
        layoutLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.lt-md',] }],
        layoutLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.lt-lg',] }],
        layoutLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.lt-xl',] }]
    };
    return LayoutDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'layout-padding' styling directive
 *  Defines padding of child elements in a layout container
 */
var LayoutGapDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutGapDirective, _super);
    /* tslint:enable */
    function LayoutGapDirective(monitor, elRef, container, _zone, _directionality, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._zone = _zone;
        _this._directionality = _directionality;
        _this._layout = 'row'; // default flex-direction
        if (container) { // Subscribe to layout direction changes
            // Subscribe to layout direction changes
            _this._layoutWatcher = container.layout$.subscribe(_this._onLayoutChange.bind(_this));
        }
        _this._directionWatcher =
            _this._directionality.change.subscribe(_this._updateWithValue.bind(_this));
        return _this;
    }
    Object.defineProperty(LayoutGapDirective.prototype, "gap", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gap', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @param {?} changes
     * @return {?}
     */
    LayoutGapDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['gap'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    LayoutGapDirective.prototype.ngAfterContentInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        this._watchContentChanges();
        this._listenForMediaQueryChanges('gap', '0', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    /**
     * @return {?}
     */
    LayoutGapDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
        if (this._observer) {
            this._observer.disconnect();
        }
        if (this._directionWatcher) {
            this._directionWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     */
    /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     * @return {?}
     */
    LayoutGapDirective.prototype._watchContentChanges = /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            if (typeof MutationObserver !== 'undefined') {
                _this._observer = new MutationObserver(function (mutations) {
                    /** @type {?} */
                    var validatedChanges = function (it) {
                        return (it.addedNodes && it.addedNodes.length > 0) ||
                            (it.removedNodes && it.removedNodes.length > 0);
                    };
                    // update gap styles only for child 'added' or 'removed' events
                    if (mutations.some(validatedChanges)) {
                        _this._updateWithValue();
                    }
                });
                _this._observer.observe(_this.nativeElement, { childList: true });
            }
        });
    };
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     */
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     * @param {?} layout
     * @return {?}
     */
    LayoutGapDirective.prototype._onLayoutChange = /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     * @param {?} layout
     * @return {?}
     */
    function (layout) {
        var _this = this;
        this._layout = (layout.direction || '').toLowerCase();
        if (!LAYOUT_VALUES.find(function (x) { return x === _this._layout; })) {
            this._layout = 'row';
        }
        this._updateWithValue();
    };
    /**
     *
     */
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    LayoutGapDirective.prototype._updateWithValue = /**
     *
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var gapValue = value || this._queryInput('gap') || '0';
        if (this._mqActivation) {
            gapValue = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        var items = this.childrenNodes
            .filter(function (el) { return el.nodeType === 1 && _this._getDisplayStyle(el) != 'none'; })
            .sort(function (a, b) {
            /** @type {?} */
            var orderA = +_this._styler.lookupStyle(a, 'order');
            /** @type {?} */
            var orderB = +_this._styler.lookupStyle(b, 'order');
            if (isNaN(orderA) || isNaN(orderB) || orderA === orderB) {
                return 0;
            }
            else {
                return orderA > orderB ? 1 : -1;
            }
        });
        if (items.length > 0) {
            if (gapValue.endsWith(GRID_SPECIFIER)) {
                gapValue = gapValue.substring(0, gapValue.indexOf(GRID_SPECIFIER));
                // For each `element` children, set the padding
                this._applyStyleToElements(this._buildGridPadding(gapValue), items);
                // Add the margin to the host element
                this._applyStyleToElement(this._buildGridMargin(gapValue));
            }
            else {
                /** @type {?} */
                var lastItem = items.pop();
                // For each `element` children EXCEPT the last,
                // set the margin right/bottom styles...
                this._applyStyleToElements(this._buildCSS(gapValue), items);
                // Clear all gaps for all visible elements
                this._applyStyleToElements(this._buildCSS(), [lastItem]);
            }
        }
    };
    /**
     *
     * @param {?} value
     * @return {?}
     */
    LayoutGapDirective.prototype._buildGridPadding = /**
     *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var paddingTop = '0px';
        /** @type {?} */
        var paddingRight = '0px';
        /** @type {?} */
        var paddingBottom = value;
        /** @type {?} */
        var paddingLeft = '0px';
        if (this._directionality.value === 'rtl') {
            paddingLeft = value;
        }
        else {
            paddingRight = value;
        }
        return { 'padding': paddingTop + " " + paddingRight + " " + paddingBottom + " " + paddingLeft };
    };
    /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * Note: this will not work with calc values (negative calc values are invalid)
     * @param {?} value
     * @return {?}
     */
    LayoutGapDirective.prototype._buildGridMargin = /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * Note: this will not work with calc values (negative calc values are invalid)
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var marginTop = '0px';
        /** @type {?} */
        var marginRight = '0px';
        /** @type {?} */
        var marginBottom = '-' + value;
        /** @type {?} */
        var marginLeft = '0px';
        if (this._directionality.value === 'rtl') {
            marginLeft = '-' + value;
        }
        else {
            marginRight = '-' + value;
        }
        return { 'margin': marginTop + " " + marginRight + " " + marginBottom + " " + marginLeft };
    };
    /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * @param {?=} value
     * @return {?}
     */
    LayoutGapDirective.prototype._buildCSS = /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = null; }
        /** @type {?} */
        var key;
        /** @type {?} */
        var margins = {
            'margin-left': null,
            'margin-right': null,
            'margin-top': null,
            'margin-bottom': null
        };
        switch (this._layout) {
            case 'column':
                key = 'margin-bottom';
                break;
            case 'column-reverse':
                key = 'margin-top';
                break;
            case 'row':
                key = this._directionality.value === 'rtl' ? 'margin-left' : 'margin-right';
                break;
            case 'row-reverse':
                key = this._directionality.value === 'rtl' ? 'margin-right' : 'margin-left';
                break;
            default:
                key = this._directionality.value === 'rtl' ? 'margin-left' : 'margin-right';
                break;
        }
        margins[key] = value;
        return margins;
    };
    LayoutGapDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n  [fxLayoutGap],\n  [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md], [fxLayoutGap.lg], [fxLayoutGap.xl],\n  [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md], [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl],\n  [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm], [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    LayoutGapDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    LayoutGapDirective.propDecorators = {
        gap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap',] }],
        gapXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.xs',] }],
        gapSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.sm',] }],
        gapMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.md',] }],
        gapLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.lg',] }],
        gapXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.xl',] }],
        gapGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.gt-xs',] }],
        gapGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.gt-sm',] }],
        gapGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.gt-md',] }],
        gapGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.gt-lg',] }],
        gapLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.lt-sm',] }],
        gapLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.lt-md',] }],
        gapLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.lt-lg',] }],
        gapLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.lt-xl',] }]
    };
    return LayoutGapDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));
/** @type {?} */
var GRID_SPECIFIER = ' grid';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
 * Corresponds to the css `flex` shorthand property.
 *
 * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */
var FlexDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexDirective, _super);
    /* tslint:enable */
    // Note: Explicitly @SkipSelf on LayoutDirective because we are looking
    //       for the parent flex container for this flex item.
    function FlexDirective(monitor, elRef, _container, styleUtils, layoutConfig) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._container = _container;
        _this.styleUtils = styleUtils;
        _this.layoutConfig = layoutConfig;
        _this._cacheInput('flex', '');
        _this._cacheInput('shrink', 1);
        _this._cacheInput('grow', 1);
        return _this;
    }
    Object.defineProperty(FlexDirective.prototype, "shrink", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('shrink', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "grow", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('grow', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flex", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flex', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtXl', val); },
        enumerable: true,
        configurable: true
    });
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['flex'] != null || this._mqActivation) {
            this._updateStyle();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('flex', '', function (changes) {
            _this._updateStyle(changes.value);
        });
        if (this._container) {
            // If this flex item is inside of a flex container marked with
            // Subscribe to layout immediate parent direction changes
            this._layoutWatcher = this._container.layout$.subscribe(function (layout) {
                // `direction` === null if parent container does not have a `fxLayout`
                _this._onLayoutChange(layout);
            });
        }
    };
    /**
     * @return {?}
     */
    FlexDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     */
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    FlexDirective.prototype._onLayoutChange = /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    function (layout) {
        this._layout = layout || this._layout || { direction: 'row', wrap: false };
        this._updateStyle();
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexDirective.prototype._updateStyle = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var flexBasis = value || this._queryInput('flex') || '';
        if (this._mqActivation) {
            flexBasis = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        var basis = String(flexBasis).replace(';', '');
        /** @type {?} */
        var parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["validateBasis"])(basis, this._queryInput('grow'), this._queryInput('shrink'));
        this._applyStyleToElement(this._validateValue.apply(this, parts));
    };
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     */
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     * @param {?} grow
     * @param {?} shrink
     * @param {?} basis
     * @return {?}
     */
    FlexDirective.prototype._validateValue = /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     * @param {?} grow
     * @param {?} shrink
     * @param {?} basis
     * @return {?}
     */
    function (grow, shrink, basis) {
        /** @type {?} */
        var addFlexToParent = this.layoutConfig.addFlexToParent !== false;
        /** @type {?} */
        var layout = this._getFlexFlowDirection(this.parentElement, addFlexToParent);
        /** @type {?} */
        var direction = (layout.indexOf('column') > -1) ? 'column' : 'row';
        /** @type {?} */
        var max = isFlowHorizontal(direction) ? 'max-width' : 'max-height';
        /** @type {?} */
        var min = isFlowHorizontal(direction) ? 'min-width' : 'min-height';
        /** @type {?} */
        var hasCalc = String(basis).indexOf('calc') > -1;
        /** @type {?} */
        var usingCalc = hasCalc || (basis == 'auto');
        /** @type {?} */
        var isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
        /** @type {?} */
        var hasUnits = String(basis).indexOf('px') > -1 || String(basis).indexOf('em') > -1 ||
            String(basis).indexOf('vw') > -1 || String(basis).indexOf('vh') > -1;
        /** @type {?} */
        var isPx = String(basis).indexOf('px') > -1 || usingCalc;
        /** @type {?} */
        var isValue = (hasCalc || hasUnits);
        grow = (grow == '0') ? 0 : grow;
        shrink = (shrink == '0') ? 0 : shrink;
        /** @type {?} */
        var isFixed = !grow && !shrink;
        /** @type {?} */
        var css = {};
        /** @type {?} */
        var clearStyles = {
            'max-width': null,
            'max-height': null,
            'min-width': null,
            'min-height': null
        };
        switch (basis || '') {
            case '':
                /** @type {?} */
                var useColumnBasisZero = this.layoutConfig.useColumnBasisZero !== false;
                basis = direction === 'row' ? '0%' : (useColumnBasisZero ? '0.000000001px' : 'auto');
                break;
            case 'initial': // default
            case 'nogrow':
                grow = 0;
                basis = 'auto';
                break;
            case 'grow':
                basis = '100%';
                break;
            case 'noshrink':
                shrink = 0;
                basis = 'auto';
                break;
            case 'auto':
                break;
            case 'none':
                grow = 0;
                shrink = 0;
                basis = 'auto';
                break;
            default:
                // Defaults to percentage sizing unless `px` is explicitly set
                if (!isValue && !isPercent && !isNaN(/** @type {?} */ (basis))) {
                    basis = basis + '%';
                }
                // Fix for issue 280
                if (basis === '0%') {
                    isValue = true;
                }
                if (basis === '0px') {
                    basis = '0%';
                }
                // fix issue #5345
                if (hasCalc) {
                    css = extendObject(clearStyles, {
                        'flex-grow': grow,
                        'flex-shrink': shrink,
                        'flex-basis': isValue ? basis : '100%'
                    });
                }
                else {
                    css = extendObject(clearStyles, {
                        'flex': grow + " " + shrink + " " + (isValue ? basis : '100%')
                    });
                }
                break;
        }
        if (!(css['flex'] || css['flex-grow'])) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': grow + " " + shrink + " " + basis
                });
            }
        }
        // Fix for issues 277, 534, and 728
        if (basis !== '0%' && basis !== '0px' && basis !== '0.000000001px' && basis !== 'auto') {
            css[min] = isFixed || (isPx && grow) ? basis : null;
            css[max] = isFixed || (!usingCalc && shrink) ? basis : null;
        }
        // Fix for issue 528
        if (!css[min] && !css[max]) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': grow + " " + shrink + " " + basis
                });
            }
        }
        else {
            // Fix for issue 660
            if (this._layout && this._layout.wrap) {
                css[hasCalc ? 'flex-basis' : 'flex'] = css[max] ?
                    (hasCalc ? css[max] : grow + " " + shrink + " " + css[max]) :
                    (hasCalc ? css[min] : grow + " " + shrink + " " + css[min]);
            }
        }
        return extendObject(css, { 'box-sizing': 'border-box' });
    };
    FlexDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxFlex],\n  [fxFlex.xs], [fxFlex.sm], [fxFlex.md], [fxFlex.lg], [fxFlex.xl],\n  [fxFlex.lt-sm], [fxFlex.lt-md], [fxFlex.lt-lg], [fxFlex.lt-xl],\n  [fxFlex.gt-xs], [fxFlex.gt-sm], [fxFlex.gt-md], [fxFlex.gt-lg],\n"
                },] },
    ];
    /** @nocollapse */
    FlexDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"],] }] }
    ]; };
    FlexDirective.propDecorators = {
        shrink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShrink',] }],
        grow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxGrow',] }],
        flex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex',] }],
        flexXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.xs',] }],
        flexSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.sm',] }],
        flexMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.md',] }],
        flexLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.lg',] }],
        flexXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.xl',] }],
        flexGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.gt-xs',] }],
        flexGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.gt-sm',] }],
        flexGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.gt-md',] }],
        flexGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.gt-lg',] }],
        flexLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.lt-sm',] }],
        flexLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.lt-md',] }],
        flexLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.lt-lg',] }],
        flexLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.lt-xl',] }]
    };
    return FlexDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'flex-order' flexbox styling directive
 * Configures the positional ordering of the element in a sorted layout container
 * @see https://css-tricks.com/almanac/properties/o/order/
 */
var FlexOrderDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexOrderDirective, _super);
    /* tslint:enable */
    function FlexOrderDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(FlexOrderDirective.prototype, "order", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('order', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexOrderDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['order'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexOrderDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('order', '0', function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexOrderDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('order') || '0';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexOrderDirective.prototype._buildCSS = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        /** @type {?} */
        var val = parseInt(value, 10);
        return { order: isNaN(val) ? 0 : val };
    };
    FlexOrderDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxFlexOrder],\n  [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md], [fxFlexOrder.lg], [fxFlexOrder.xl],\n  [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md], [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl],\n  [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm], [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    FlexOrderDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    FlexOrderDirective.propDecorators = {
        order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder',] }],
        orderXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.xs',] }],
        orderSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.sm',] }],
        orderMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.md',] }],
        orderLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.lg',] }],
        orderXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.xl',] }],
        orderGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.gt-xs',] }],
        orderGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.gt-sm',] }],
        orderGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.gt-md',] }],
        orderGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.gt-lg',] }],
        orderLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.lt-sm',] }],
        orderLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.lt-md',] }],
        orderLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.lt-lg',] }],
        orderLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.lt-xl',] }]
    };
    return FlexOrderDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'flex-offset' flexbox styling directive
 * Configures the 'margin-left' of the element in a layout container
 */
var FlexOffsetDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexOffsetDirective, _super);
    /* tslint:enable */
    function FlexOffsetDirective(monitor, elRef, _container, _directionality, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._container = _container;
        _this._directionality = _directionality;
        /**
         * The flex-direction of this element's host container. Defaults to 'row'.
         */
        _this._layout = { direction: 'row', wrap: false };
        _this._directionWatcher =
            _this._directionality.change.subscribe(_this._updateWithValue.bind(_this));
        _this.watchParentFlow();
        return _this;
    }
    Object.defineProperty(FlexOffsetDirective.prototype, "offset", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offset', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtLg', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexOffsetDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['offset'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * Cleanup
     */
    /**
     * Cleanup
     * @return {?}
     */
    FlexOffsetDirective.prototype.ngOnDestroy = /**
     * Cleanup
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
        if (this._directionWatcher) {
            this._directionWatcher.unsubscribe();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexOffsetDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('offset', 0, function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     */
    /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     * @return {?}
     */
    FlexOffsetDirective.prototype.watchParentFlow = /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._container) {
            // Subscribe to layout immediate parent direction changes (if any)
            this._layoutWatcher = this._container.layout$.subscribe(function (layout) {
                // `direction` === null if parent container does not have a `fxLayout`
                _this._onLayoutChange(layout);
            });
        }
    };
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     */
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    FlexOffsetDirective.prototype._onLayoutChange = /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    function (layout) {
        this._layout = layout || this._layout || { direction: 'row', wrap: false };
        this._updateWithValue();
    };
    /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     */
    /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     * @param {?=} value
     * @return {?}
     */
    FlexOffsetDirective.prototype._updateWithValue = /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('offset') || 0;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?=} offset
     * @return {?}
     */
    FlexOffsetDirective.prototype._buildCSS = /**
     * @param {?=} offset
     * @return {?}
     */
    function (offset) {
        if (offset === void 0) { offset = ''; }
        var _a;
        /** @type {?} */
        var isPercent = String(offset).indexOf('%') > -1;
        /** @type {?} */
        var isPx = String(offset).indexOf('px') > -1;
        if (!isPx && !isPercent && !isNaN(+offset)) {
            offset = offset + '%';
        }
        /** @type {?} */
        var isRtl = this._directionality.value === 'rtl';
        /** @type {?} */
        var layout = this._getFlexFlowDirection(this.parentElement, true);
        /** @type {?} */
        var horizontalLayoutKey = isRtl ? 'margin-right' : 'margin-left';
        return isFlowHorizontal(layout) ? (_a = {}, _a[horizontalLayoutKey] = "" + offset, _a) :
            { 'margin-top': "" + offset };
    };
    FlexOffsetDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxFlexOffset],\n  [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md], [fxFlexOffset.lg], [fxFlexOffset.xl],\n  [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md], [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl],\n  [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm], [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    FlexOffsetDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    FlexOffsetDirective.propDecorators = {
        offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset',] }],
        offsetXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.xs',] }],
        offsetSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.sm',] }],
        offsetMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.md',] }],
        offsetLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.lg',] }],
        offsetXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.xl',] }],
        offsetLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.lt-sm',] }],
        offsetLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.lt-md',] }],
        offsetLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.lt-lg',] }],
        offsetLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.lt-xl',] }],
        offsetGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.gt-xs',] }],
        offsetGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.gt-sm',] }],
        offsetGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.gt-md',] }],
        offsetGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.gt-lg',] }]
    };
    return FlexOffsetDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'flex-align' flexbox styling directive
 * Allows element-specific overrides for cross-axis alignments in a layout container
 * @see https://css-tricks.com/almanac/properties/a/align-self/
 */
var FlexAlignDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexAlignDirective, _super);
    /* tslint:enable */
    function FlexAlignDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(FlexAlignDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('align', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtLg', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexAlignDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexAlignDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('align', 'stretch', function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexAlignDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('align') || 'stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?=} align
     * @return {?}
     */
    FlexAlignDirective.prototype._buildCSS = /**
     * @param {?=} align
     * @return {?}
     */
    function (align) {
        if (align === void 0) { align = ''; }
        /** @type {?} */
        var css = {};
        // Cross-axis
        switch (align) {
            case 'start':
                css['align-self'] = 'flex-start';
                break;
            case 'end':
                css['align-self'] = 'flex-end';
                break;
            default:
                css['align-self'] = align;
                break;
        }
        return css;
    };
    FlexAlignDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n  [fxFlexAlign],\n  [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md], [fxFlexAlign.lg], [fxFlexAlign.xl],\n  [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md], [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl],\n  [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm], [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    FlexAlignDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    FlexAlignDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.xl',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.lt-xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.gt-lg',] }]
    };
    return FlexAlignDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var FLEX_FILL_CSS = {
    'margin': 0,
    'width': '100%',
    'height': '100%',
    'min-width': '100%',
    'min-height': '100%'
};
/**
 * 'fxFill' flexbox styling directive
 *  Maximizes width and height of element in a layout container
 *
 *  NOTE: fxFill is NOT responsive API!!
 */
var FlexFillDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexFillDirective, _super);
    function FlexFillDirective(monitor, elRef, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this.elRef = elRef;
        _this._applyStyleToElement(FLEX_FILL_CSS);
        return _this;
    }
    FlexFillDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxFill],\n  [fxFlexFill]\n" },] },
    ];
    /** @nocollapse */
    FlexFillDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    return FlexFillDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'layout-align' flexbox styling directive
 *  Defines positioning of child elements along main and cross axis in a layout container
 *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
 *
 * @see https://css-tricks.com/almanac/properties/j/justify-content/
 * @see https://css-tricks.com/almanac/properties/a/align-items/
 * @see https://css-tricks.com/almanac/properties/a/align-content/
 */
var LayoutAlignDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutAlignDirective, _super);
    /* tslint:enable */
    function LayoutAlignDirective(monitor, elRef, container, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._layout = 'row'; // default flex-direction
        if (container) { // Subscribe to layout direction changes
            // Subscribe to layout direction changes
            _this._layoutWatcher = container.layout$.subscribe(_this._onLayoutChange.bind(_this));
        }
        return _this;
    }
    Object.defineProperty(LayoutAlignDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('align', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @param {?} changes
     * @return {?}
     */
    LayoutAlignDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    LayoutAlignDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('align', 'start stretch', function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    /**
     * @return {?}
     */
    LayoutAlignDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *
     */
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    LayoutAlignDirective.prototype._updateWithValue = /**
     *
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('align') || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
        this._allowStretching(value, !this._layout ? 'row' : this._layout);
    };
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     */
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     * @param {?} layout
     * @return {?}
     */
    LayoutAlignDirective.prototype._onLayoutChange = /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     * @param {?} layout
     * @return {?}
     */
    function (layout) {
        var _this = this;
        this._layout = (layout.direction || '').toLowerCase();
        if (!LAYOUT_VALUES.find(function (x) { return x === _this._layout; })) {
            this._layout = 'row';
        }
        /** @type {?} */
        var value = this._queryInput('align') || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._allowStretching(value, this._layout || 'row');
    };
    /**
     * @param {?=} align
     * @return {?}
     */
    LayoutAlignDirective.prototype._buildCSS = /**
     * @param {?=} align
     * @return {?}
     */
    function (align) {
        if (align === void 0) { align = ''; }
        /** @type {?} */
        var css = {};
        var _a = align.split(' '), main_axis = _a[0], cross_axis = _a[1]; // tslint:disable-line:variable-name
        // Main axis
        switch (main_axis) {
            case 'center':
                css['justify-content'] = 'center';
                break;
            case 'space-around':
                css['justify-content'] = 'space-around';
                break;
            case 'space-between':
                css['justify-content'] = 'space-between';
                break;
            case 'space-evenly':
                css['justify-content'] = 'space-evenly';
                break;
            case 'end':
            case 'flex-end':
                css['justify-content'] = 'flex-end';
                break;
            case 'start':
            case 'flex-start':
            default:
                css['justify-content'] = 'flex-start'; // default main axis
                break;
        }
        // Cross-axis
        switch (cross_axis) {
            case 'start':
            case 'flex-start':
                css['align-items'] = css['align-content'] = 'flex-start';
                break;
            case 'baseline':
                css['align-items'] = 'baseline';
                break;
            case 'center':
                css['align-items'] = css['align-content'] = 'center';
                break;
            case 'end':
            case 'flex-end':
                css['align-items'] = css['align-content'] = 'flex-end';
                break;
            case 'stretch':
            default: // 'stretch'
                // 'stretch'
                css['align-items'] = css['align-content'] = 'stretch'; // default cross axis
                break;
        }
        return extendObject(css, {
            'display': 'flex',
            'flex-direction': this._layout || 'row',
            'box-sizing': 'border-box'
        });
    };
    /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     */
    /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     * @param {?=} align
     * @param {?=} layout
     * @return {?}
     */
    LayoutAlignDirective.prototype._allowStretching = /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     * @param {?=} align
     * @param {?=} layout
     * @return {?}
     */
    function (align, layout) {
        if (align === void 0) { align = ''; }
        if (layout === void 0) { layout = ''; }
        var _a = align.split(' '), cross_axis = _a[1]; // tslint:disable-line:variable-name
        if (cross_axis == 'stretch') {
            // Use `null` values to remove style
            this._applyStyleToElement({
                'box-sizing': 'border-box',
                'max-width': !isFlowHorizontal(layout) ? '100%' : null,
                'max-height': isFlowHorizontal(layout) ? '100%' : null
            });
        }
    };
    LayoutAlignDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxLayoutAlign],\n  [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md], [fxLayoutAlign.lg],[fxLayoutAlign.xl],\n  [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md], [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl],\n  [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm], [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    LayoutAlignDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    LayoutAlignDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.lt-xl',] }]
    };
    return LayoutAlignDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ALL_DIRECTIVES = [
    LayoutDirective,
    LayoutGapDirective,
    LayoutAlignDirective,
    FlexDirective,
    FlexOrderDirective,
    FlexOffsetDirective,
    FlexFillDirective,
    FlexAlignDirective,
];
/**
 * *****************************************************************
 * Define module for the Flex API
 * *****************************************************************
 */
var FlexModule = /** @class */ (function () {
    function FlexModule() {
    }
    FlexModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"]],
                    declarations: ALL_DIRECTIVES.slice(),
                    exports: ALL_DIRECTIVES.slice()
                },] },
    ];
    return FlexModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=flex.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/grid.es5.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm5/grid.es5.js ***!
  \************************************************************/
/*! exports provided: GridModule, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵa, ɵj, ɵk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return GridAlignColumnsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return GridAlignRowsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return GridAreaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return GridAreasDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return GridAutoDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return GridColumnDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return GridColumnsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return GridGapDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return GridAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return GridRowDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return GridRowsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY = 'align';
/** @type {?} */
var ROW_DEFAULT = 'stretch';
/** @type {?} */
var COL_DEFAULT = 'stretch';
/**
 * 'align' CSS Grid styling directive for grid children
 *  Defines positioning of child elements along row and column axis in a grid container
 *  Optional values: {row-axis} values or {row-axis column-axis} value pairs
 *
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self
 */
var GridAlignDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAlignDirective, _super);
    /* tslint:enable */
    function GridAlignDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAlignDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @param {?} changes
     * @return {?}
     */
    GridAlignDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAlignDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY, ROW_DEFAULT, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *
     */
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    GridAlignDirective.prototype._updateWithValue = /**
     *
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY) || ROW_DEFAULT;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?=} align
     * @return {?}
     */
    GridAlignDirective.prototype._buildCSS = /**
     * @param {?=} align
     * @return {?}
     */
    function (align) {
        if (align === void 0) { align = ''; }
        /** @type {?} */
        var css = {};
        var _a = align.split(' '), rowAxis = _a[0], columnAxis = _a[1];
        // Row axis
        switch (rowAxis) {
            case 'end':
                css['justify-self'] = 'end';
                break;
            case 'center':
                css['justify-self'] = 'center';
                break;
            case 'stretch':
                css['justify-self'] = 'stretch';
                break;
            case 'start':
                css['justify-self'] = 'start';
                break;
            default:
                css['justify-self'] = ROW_DEFAULT; // default row axis
                break;
        }
        // Column axis
        switch (columnAxis) {
            case 'end':
                css['align-self'] = 'end';
                break;
            case 'center':
                css['align-self'] = 'center';
                break;
            case 'stretch':
                css['align-self'] = 'stretch';
                break;
            case 'start':
                css['align-self'] = 'start';
                break;
            default:
                css['align-self'] = COL_DEFAULT; // default column axis
                break;
        }
        return css;
    };
    GridAlignDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdGridAlign],\n  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],\n  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],\n  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAlignDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAlignDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.lt-xl',] }]
    };
    return GridAlignDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$1 = 'alignColumns';
/** @type {?} */
var DEFAULT_MAIN = 'start';
/** @type {?} */
var DEFAULT_CROSS = 'stretch';
/**
 * 'column alignment' CSS Grid styling directive
 * Configures the alignment in the column direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21
 */
var GridAlignColumnsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAlignColumnsDirective, _super);
    /* tslint:enable */
    function GridAlignColumnsDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAlignColumnsDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$1, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridAlignColumnsDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$1] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAlignColumnsDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$1, DEFAULT_MAIN + " " + DEFAULT_CROSS, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAlignColumnsDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$1) || DEFAULT_MAIN + " " + DEFAULT_CROSS;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?=} align
     * @return {?}
     */
    GridAlignColumnsDirective.prototype._buildCSS = /**
     * @param {?=} align
     * @return {?}
     */
    function (align) {
        if (align === void 0) { align = ''; }
        /** @type {?} */
        var css = {};
        var _a = align.split(' '), mainAxis = _a[0], crossAxis = _a[1];
        // Main axis
        switch (mainAxis) {
            case 'center':
                css['align-content'] = 'center';
                break;
            case 'space-around':
                css['align-content'] = 'space-around';
                break;
            case 'space-between':
                css['align-content'] = 'space-between';
                break;
            case 'space-evenly':
                css['align-content'] = 'space-evenly';
                break;
            case 'end':
                css['align-content'] = 'end';
                break;
            case 'start':
                css['align-content'] = 'start';
                break;
            case 'stretch':
                css['align-content'] = 'stretch';
                break;
            default:
                css['align-content'] = DEFAULT_MAIN; // default main axis
                break;
        }
        // Cross-axis
        switch (crossAxis) {
            case 'start':
                css['align-items'] = 'start';
                break;
            case 'center':
                css['align-items'] = 'center';
                break;
            case 'end':
                css['align-items'] = 'end';
                break;
            case 'stretch':
                css['align-items'] = 'stretch';
                break;
            default: // 'stretch'
                // 'stretch'
                css['align-items'] = DEFAULT_CROSS; // default cross axis
                break;
        }
        return extendObject(css, { 'display': this._queryInput('inline') ? 'inline-grid' : 'grid' });
    };
    GridAlignColumnsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdAlignColumns],\n  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],\n  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],\n  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],\n  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],\n  [gdAlignColumns.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAlignColumnsDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAlignColumnsDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridAlignColumnsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$2 = 'alignRows';
/** @type {?} */
var DEFAULT_MAIN$1 = 'start';
/** @type {?} */
var DEFAULT_CROSS$1 = 'stretch';
/**
 * 'row alignment' CSS Grid styling directive
 * Configures the alignment in the row direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-20
 */
var GridAlignRowsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAlignRowsDirective, _super);
    /* tslint:enable */
    function GridAlignRowsDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAlignRowsDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$2, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridAlignRowsDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$2] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAlignRowsDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$2, DEFAULT_MAIN$1 + " " + DEFAULT_CROSS$1, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAlignRowsDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$2) || DEFAULT_MAIN$1 + " " + DEFAULT_CROSS$1;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?=} align
     * @return {?}
     */
    GridAlignRowsDirective.prototype._buildCSS = /**
     * @param {?=} align
     * @return {?}
     */
    function (align) {
        if (align === void 0) { align = ''; }
        /** @type {?} */
        var css = {};
        var _a = align.split(' '), mainAxis = _a[0], crossAxis = _a[1];
        // Main axis
        switch (mainAxis) {
            case 'center':
            case 'space-around':
            case 'space-between':
            case 'space-evenly':
            case 'end':
            case 'start':
            case 'stretch':
                css['justify-content'] = mainAxis;
                break;
            default:
                css['justify-content'] = DEFAULT_MAIN$1; // default main axis
                break;
        }
        // Cross-axis
        switch (crossAxis) {
            case 'start':
            case 'center':
            case 'end':
            case 'stretch':
                css['justify-items'] = crossAxis;
                break;
            default: // 'stretch'
                // 'stretch'
                css['justify-items'] = DEFAULT_CROSS$1; // default cross axis
                break;
        }
        return extendObject(css, { 'display': this._queryInput('inline') ? 'inline-grid' : 'grid' });
    };
    GridAlignRowsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdAlignRows],\n  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],\n  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],\n  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],\n  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],\n  [gdAlignRows.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAlignRowsDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAlignRowsDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridAlignRowsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$3 = 'area';
/** @type {?} */
var DEFAULT_VALUE = 'auto';
/**
 * 'grid-area' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27
 */
var GridAreaDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAreaDirective, _super);
    /* tslint:enable */
    function GridAreaDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAreaDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$3, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridAreaDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$3] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAreaDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$3, DEFAULT_VALUE, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAreaDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$3) || DEFAULT_VALUE;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAreaDirective.prototype._buildCSS = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        return { 'grid-area': value };
    };
    GridAreaDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdArea],\n  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],\n  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],\n  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAreaDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAreaDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.lt-xl',] }]
    };
    return GridAreaDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$4 = 'areas';
/** @type {?} */
var DEFAULT_VALUE$1 = 'none';
/** @type {?} */
var DELIMETER = '|';
/**
 * 'grid-template-areas' CSS Grid styling directive
 * Configures the names of elements within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14
 */
var GridAreasDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAreasDirective, _super);
    /* tslint:enable */
    function GridAreasDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAreasDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$4, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridAreasDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$4] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAreasDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$4, DEFAULT_VALUE$1, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAreasDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$4) || DEFAULT_VALUE$1;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAreasDirective.prototype._buildCSS = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        /** @type {?} */
        var areas = value.split(DELIMETER).map(function (v) { return "\"" + v.trim() + "\""; });
        return {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-template-areas': areas.join(' ')
        };
    };
    GridAreasDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdAreas],\n  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],\n  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],\n  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAreasDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAreasDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridAreasDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$5 = 'autoFlow';
/** @type {?} */
var DEFAULT_VALUE$2 = 'initial';
/**
 * 'grid-auto-flow' CSS Grid styling directive
 * Configures the auto placement algorithm for the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-23
 */
var GridAutoDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAutoDirective, _super);
    /* tslint:enable */
    function GridAutoDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAutoDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$5, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridAutoDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$5] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAutoDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$5, DEFAULT_VALUE$2, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAutoDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$5) || DEFAULT_VALUE$2;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAutoDirective.prototype._buildCSS = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        var _a = value.split(' '), direction = _a[0], dense = _a[1];
        if (direction !== 'column' && direction !== 'row' && direction !== 'dense') {
            direction = 'row';
        }
        dense = (dense === 'dense' && direction !== 'dense') ? ' dense' : '';
        return {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-auto-flow': direction + dense
        };
    };
    GridAutoDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdAuto],\n  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],\n  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],\n  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAutoDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAutoDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridAutoDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$6 = 'column';
/** @type {?} */
var DEFAULT_VALUE$3 = 'auto';
/**
 * 'grid-column' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
var GridColumnDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridColumnDirective, _super);
    /* tslint:enable */
    function GridColumnDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridColumnDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$6, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridColumnDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$6] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridColumnDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$6, DEFAULT_VALUE$3, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridColumnDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$6) || DEFAULT_VALUE$3;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    GridColumnDirective.prototype._buildCSS = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        return { 'grid-column': value };
    };
    GridColumnDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdColumn],\n  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],\n  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],\n  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridColumnDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridColumnDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.lt-xl',] }]
    };
    return GridColumnDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$7 = 'columns';
/** @type {?} */
var DEFAULT_VALUE$4 = 'none';
/** @type {?} */
var AUTO_SPECIFIER = '!';
/**
 * 'grid-template-columns' CSS Grid styling directive
 * Configures the sizing for the columns in the grid
 * Syntax: <column value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
var GridColumnsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridColumnsDirective, _super);
    /* tslint:enable */
    function GridColumnsDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridColumnsDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$7, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridColumnsDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$7] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridColumnsDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$7, DEFAULT_VALUE$4, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridColumnsDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$7) || DEFAULT_VALUE$4;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    GridColumnsDirective.prototype._buildCSS = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        /** @type {?} */
        var auto = false;
        if (value.endsWith(AUTO_SPECIFIER)) {
            value = value.substring(0, value.indexOf(AUTO_SPECIFIER));
            auto = true;
        }
        /** @type {?} */
        var css = {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-auto-columns': '',
            'grid-template-columns': '',
        };
        /** @type {?} */
        var key = (auto ? 'grid-auto-columns' : 'grid-template-columns');
        css[key] = value;
        return css;
    };
    GridColumnsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdColumns],\n  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],\n  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],\n  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridColumnsDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridColumnsDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridColumnsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$8 = 'gap';
/** @type {?} */
var DEFAULT_VALUE$5 = '0';
/**
 * 'grid-gap' CSS Grid styling directive
 * Configures the gap between items in the grid
 * Syntax: <row gap> [<column-gap>]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-17
 */
var GridGapDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridGapDirective, _super);
    /* tslint:enable */
    function GridGapDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridGapDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$8, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridGapDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$8] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridGapDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$8, DEFAULT_VALUE$5, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridGapDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$8) || DEFAULT_VALUE$5;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    GridGapDirective.prototype._buildCSS = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        return {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-gap': value
        };
    };
    GridGapDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdGap],\n  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],\n  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],\n  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridGapDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridGapDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridGapDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$9 = 'row';
/** @type {?} */
var DEFAULT_VALUE$6 = 'auto';
/**
 * 'grid-row' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
var GridRowDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridRowDirective, _super);
    /* tslint:enable */
    function GridRowDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridRowDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$9, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridRowDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$9] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridRowDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$9, DEFAULT_VALUE$6, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridRowDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$9) || DEFAULT_VALUE$6;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    GridRowDirective.prototype._buildCSS = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        return { 'grid-row': value };
    };
    GridRowDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdRow],\n  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],\n  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],\n  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridRowDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridRowDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.lt-xl',] }]
    };
    return GridRowDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$10 = 'rows';
/** @type {?} */
var DEFAULT_VALUE$7 = 'none';
/** @type {?} */
var AUTO_SPECIFIER$1 = '!';
/**
 * 'grid-template-rows' CSS Grid styling directive
 * Configures the sizing for the rows in the grid
 * Syntax: <row value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
var GridRowsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridRowsDirective, _super);
    /* tslint:enable */
    function GridRowsDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridRowsDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$10, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridRowsDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$10] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridRowsDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$10, DEFAULT_VALUE$7, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridRowsDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$10) || DEFAULT_VALUE$7;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    GridRowsDirective.prototype._buildCSS = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        /** @type {?} */
        var auto = false;
        if (value.endsWith(AUTO_SPECIFIER$1)) {
            value = value.substring(0, value.indexOf(AUTO_SPECIFIER$1));
            auto = true;
        }
        /** @type {?} */
        var css = {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-auto-rows': '',
            'grid-template-rows': '',
        };
        /** @type {?} */
        var key = (auto ? 'grid-auto-rows' : 'grid-template-rows');
        css[key] = value;
        return css;
    };
    GridRowsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdRows],\n  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],\n  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],\n  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridRowsDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridRowsDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridRowsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ALL_DIRECTIVES = [
    GridAlignDirective,
    GridAlignColumnsDirective,
    GridAlignRowsDirective,
    GridAreaDirective,
    GridAreasDirective,
    GridAutoDirective,
    GridColumnDirective,
    GridColumnsDirective,
    GridGapDirective,
    GridRowDirective,
    GridRowsDirective,
];
/**
 * *****************************************************************
 * Define module for the CSS Grid API
 * *****************************************************************
 */
var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    GridModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
                    declarations: ALL_DIRECTIVES.slice(),
                    exports: ALL_DIRECTIVES.slice()
                },] },
    ];
    return GridModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=grid.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-spinner/fesm5/ngx-spinner.js ***!
  \*******************************************************/
/*! exports provided: NgxSpinnerService, NgxSpinnerComponent, NgxSpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSpinnerService", function() { return NgxSpinnerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSpinnerComponent", function() { return NgxSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSpinnerModule", function() { return NgxSpinnerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxSpinnerService = /** @class */ (function () {
    /**
     * Creates an instance of NgxSpinnerService.
     * @memberof NgxSpinnerService
     */
    function NgxSpinnerService() {
        /**
         * Spinner observable
         *
         * \@memberof NgxSpinnerService
         */
        this.spinnerObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /**
     * To show spinner
     *
     * @memberof NgxSpinnerService
     */
    /**
     * To show spinner
     *
     * \@memberof NgxSpinnerService
     * @return {?}
     */
    NgxSpinnerService.prototype.show = /**
     * To show spinner
     *
     * \@memberof NgxSpinnerService
     * @return {?}
     */
    function () {
        this.spinnerObservable.next(true);
    };
    /**
     * To hide spinner
     *
     * @memberof NgxSpinnerService
     */
    /**
     * To hide spinner
     *
     * \@memberof NgxSpinnerService
     * @return {?}
     */
    NgxSpinnerService.prototype.hide = /**
     * To hide spinner
     *
     * \@memberof NgxSpinnerService
     * @return {?}
     */
    function () {
        this.spinnerObservable.next(false);
    };
    NgxSpinnerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgxSpinnerService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxSpinnerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function NgxSpinnerService_Factory() { return new NgxSpinnerService(); }, token: NgxSpinnerService, providedIn: "root" });
    return NgxSpinnerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var LOADERS = {
    'ball-8bits': 16,
    'ball-atom': 4,
    'ball-beat': 3,
    'ball-circus': 5,
    'ball-climbing-dot': 4,
    'ball-clip-rotate': 1,
    'ball-clip-rotate-multiple': 2,
    'ball-clip-rotate-pulse': 2,
    'ball-elastic-dots': 5,
    'ball-fall': 3,
    'ball-fussion': 4,
    'ball-grid-beat': 9,
    'ball-grid-pulse': 9,
    'ball-newton-cradle': 4,
    'ball-pulse': 3,
    'ball-pulse-rise': 5,
    'ball-pulse-sync': 3,
    'ball-rotate': 1,
    'ball-running-dots': 5,
    'ball-scale': 1,
    'ball-scale-multiple': 3,
    'ball-scale-pulse': 2,
    'ball-scale-ripple': 1,
    'ball-scale-ripple-multiple': 3,
    'ball-spin': 8,
    'ball-spin-clockwise': 8,
    'ball-spin-clockwise-fade': 8,
    'ball-spin-clockwise-fade-rotating': 8,
    'ball-spin-fade': 8,
    'ball-spin-fade-rotating': 8,
    'ball-spin-rotate': 2,
    'ball-square-clockwise-spin': 8,
    'ball-square-spin': 8,
    'ball-triangle-path': 3,
    'ball-zig-zag': 2,
    'ball-zig-zag-deflect': 2,
    'cog': 1,
    'cube-transition': 2,
    'fire': 3,
    'line-scale': 5,
    'line-scale-party': 5,
    'line-scale-pulse-out': 5,
    'line-scale-pulse-out-rapid': 5,
    'line-spin-clockwise-fade': 8,
    'line-spin-clockwise-fade-rotating': 8,
    'line-spin-fade': 8,
    'line-spin-fade-rotating': 8,
    'pacman': 6,
    'square-jelly-box': 2,
    'square-loader': 1,
    'square-spin': 1,
    'timer': 1,
    'triangle-skew-spin': 1
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxSpinnerComponent = /** @class */ (function () {
    /**
     * Creates an instance of NgxSpinnerComponent.
     *
     * @memberof NgxSpinnerComponent
     */
    function NgxSpinnerComponent(spinnerService) {
        var _this = this;
        this.spinnerService = spinnerService;
        /**
         * To set backdrop color('rgba(51,51,51,0.8)')
         * Only supports RGBA color format
         * \@memberof NgxSpinnerComponent
         */
        this.bdColor = 'rgba(51,51,51,0.8)';
        /**
         * To set spinner size
         *
         * \@memberof NgxSpinnerComponent
         */
        this.size = '';
        /**
         * To set spinner color('#fff')
         *
         * \@memberof NgxSpinnerComponent
         */
        this.color = '#fff';
        /**
         * To set loading text(false)
         *
         * \@memberof NgxSpinnerComponent
         */
        this.loadingText = false;
        /**
         * Flag to show/hide spinner
         *
         * \@memberof NgxSpinnerComponent
         */
        this.showSpinner = false;
        /**
         * Array for spinner divs
         *
         * \@memberof NgxSpinnerComponent
         */
        this.divArray = [];
        /**
         * Counter for div
         *
         * \@memberof NgxSpinnerComponent
         */
        this.divCount = 0;
        this.spinnerSubscription = this.spinnerService.spinnerObservable.subscribe(function (flag) {
            _this.showSpinner = flag;
        });
    }
    /**
     * Initialization method
     *
     * @memberof NgxSpinnerComponent
     */
    /**
     * Initialization method
     *
     * \@memberof NgxSpinnerComponent
     * @return {?}
     */
    NgxSpinnerComponent.prototype.ngOnInit = /**
     * Initialization method
     *
     * \@memberof NgxSpinnerComponent
     * @return {?}
     */
    function () {
        this.onInputChange();
    };
    /**
     * On changes event for input variables
     *
     * @memberof NgxSpinnerComponent
     */
    /**
     * On changes event for input variables
     *
     * \@memberof NgxSpinnerComponent
     * @param {?} changes
     * @return {?}
     */
    NgxSpinnerComponent.prototype.ngOnChanges = /**
     * On changes event for input variables
     *
     * \@memberof NgxSpinnerComponent
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var typeChange = changes["type"];
        /** @type {?} */
        var sizeChange = changes["size"];
        if (typeChange) {
            if (typeof typeChange.currentValue !== 'undefined' && typeChange.currentValue !== typeChange.previousValue) {
                if (typeChange.currentValue !== '') {
                    this.type = typeChange.currentValue;
                    this.onInputChange();
                }
            }
        }
        if (sizeChange) {
            if (typeof sizeChange.currentValue !== 'undefined' && sizeChange.currentValue !== sizeChange.previousValue) {
                if (sizeChange.currentValue !== '') {
                    this.size = sizeChange.currentValue;
                    this.onInputChange();
                }
            }
        }
    };
    /**
     * To get class for spinner
     *
     * @memberof NgxSpinnerComponent
     */
    /**
     * To get class for spinner
     *
     * \@memberof NgxSpinnerComponent
     * @param {?=} type
     * @param {?=} size
     * @return {?}
     */
    NgxSpinnerComponent.prototype.getClass = /**
     * To get class for spinner
     *
     * \@memberof NgxSpinnerComponent
     * @param {?=} type
     * @param {?=} size
     * @return {?}
     */
    function (type, size) {
        if (type === void 0) { type = 'ball-scale-multiple'; }
        if (size === void 0) { size = 'large'; }
        this.divCount = LOADERS[type];
        this.divArray = Array(this.divCount).fill(0).map(function (x, i) { return i; });
        /** @type {?} */
        var sizeClass = '';
        switch (size.toLowerCase()) {
            case 'small':
                sizeClass = 'la-sm';
                break;
            case 'medium':
                sizeClass = 'la-2x';
                break;
            case 'large':
                sizeClass = 'la-3x';
                break;
            default:
                break;
        }
        return 'la-' + type + ' ' + sizeClass;
    };
    /**
     * After input variables chnage event
     *
     * @memberof NgxSpinnerComponent
     */
    /**
     * After input variables chnage event
     *
     * \@memberof NgxSpinnerComponent
     * @return {?}
     */
    NgxSpinnerComponent.prototype.onInputChange = /**
     * After input variables chnage event
     *
     * \@memberof NgxSpinnerComponent
     * @return {?}
     */
    function () {
        this.spinnerClass = this.getClass(this.type, this.size);
    };
    /**
     * Component destroy event
     *
     * @memberof NgxSpinnerComponent
     */
    /**
     * Component destroy event
     *
     * \@memberof NgxSpinnerComponent
     * @return {?}
     */
    NgxSpinnerComponent.prototype.ngOnDestroy = /**
     * Component destroy event
     *
     * \@memberof NgxSpinnerComponent
     * @return {?}
     */
    function () {
        this.spinnerSubscription.unsubscribe();
    };
    NgxSpinnerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-spinner',
                    template: "<div class=\"black-overlay\" *ngIf=\"showSpinner\" [ngStyle]=\"{'background-color': bdColor}\">\n    <div [class]=\"spinnerClass\" [style.color]=\"color\">\n        <div *ngFor=\"let i of divArray\"></div>\n    </div>\n</div>\n<div class=\"loading-text\" *ngIf=\"showSpinner\">\n    <ng-content></ng-content>\n</div>",
                    styles: ["/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\n * Licensed under MIT\n */.la-ball-8bits,.la-ball-8bits>div{position:relative;box-sizing:border-box}.la-ball-8bits{display:block;font-size:0;color:#fff;width:12px;height:12px}.la-ball-8bits.la-dark{color:#333}.la-ball-8bits>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:4px;height:4px;border-radius:0;opacity:0;-webkit-transform:translate(100%,100%);transform:translate(100%,100%);-webkit-animation:1s infinite ball-8bits;animation:1s infinite ball-8bits}.la-ball-8bits>div:nth-child(1){-webkit-animation-delay:-.9375s;animation-delay:-.9375s;top:-100%;left:0}.la-ball-8bits>div:nth-child(2){-webkit-animation-delay:-.875s;animation-delay:-.875s;top:-100%;left:33.3333333333%}.la-ball-8bits>div:nth-child(3){-webkit-animation-delay:-.8125s;animation-delay:-.8125s;top:-66.6666666667%;left:66.6666666667%}.la-ball-8bits>div:nth-child(4){-webkit-animation-delay:-.75s;animation-delay:-.75s;top:-33.3333333333%;left:100%}.la-ball-8bits>div:nth-child(5){-webkit-animation-delay:-.6875s;animation-delay:-.6875s;top:0;left:100%}.la-ball-8bits>div:nth-child(6){-webkit-animation-delay:-.625s;animation-delay:-.625s;top:33.3333333333%;left:100%}.la-ball-8bits>div:nth-child(7){-webkit-animation-delay:-.5625s;animation-delay:-.5625s;top:66.6666666667%;left:66.6666666667%}.la-ball-8bits>div:nth-child(8){-webkit-animation-delay:-.5s;animation-delay:-.5s;top:100%;left:33.3333333333%}.la-ball-8bits>div:nth-child(9){-webkit-animation-delay:-.4375s;animation-delay:-.4375s;top:100%;left:0}.la-ball-8bits>div:nth-child(10){-webkit-animation-delay:-.375s;animation-delay:-.375s;top:100%;left:-33.3333333333%}.la-ball-8bits>div:nth-child(11){-webkit-animation-delay:-.3125s;animation-delay:-.3125s;top:66.6666666667%;left:-66.6666666667%}.la-ball-8bits>div:nth-child(12){-webkit-animation-delay:-.25s;animation-delay:-.25s;top:33.3333333333%;left:-100%}.la-ball-8bits>div:nth-child(13){-webkit-animation-delay:-.1875s;animation-delay:-.1875s;top:0;left:-100%}.la-ball-8bits>div:nth-child(14){-webkit-animation-delay:-.125s;animation-delay:-.125s;top:-33.3333333333%;left:-100%}.la-ball-8bits>div:nth-child(15){-webkit-animation-delay:-.0625s;animation-delay:-.0625s;top:-66.6666666667%;left:-66.6666666667%}.la-ball-8bits>div:nth-child(16){-webkit-animation-delay:0s;animation-delay:0s;top:-100%;left:-33.3333333333%}.la-ball-8bits.la-sm{width:6px;height:6px}.la-ball-8bits.la-sm>div{width:2px;height:2px}.la-ball-8bits.la-2x{width:24px;height:24px}.la-ball-8bits.la-2x>div{width:8px;height:8px}.la-ball-8bits.la-3x{width:36px;height:36px}.la-ball-8bits.la-3x>div{width:12px;height:12px}@-webkit-keyframes ball-8bits{0%,50%{opacity:1}51%{opacity:0}}@keyframes ball-8bits{0%,50%{opacity:1}51%{opacity:0}}.la-ball-atom,.la-ball-atom>div{position:relative;box-sizing:border-box}.la-ball-atom{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-atom.la-dark{color:#333}.la-ball-atom>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-ball-atom>div:nth-child(1){position:absolute;top:50%;left:50%;z-index:1;width:60%;height:60%;background:#aaa;border-radius:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:4.5s linear infinite ball-atom-shrink;animation:4.5s linear infinite ball-atom-shrink}.la-ball-atom>div:not(:nth-child(1)){position:absolute;left:0;z-index:0;width:100%;height:100%;background:0 0;-webkit-animation:1.5s steps(2,end) infinite ball-atom-zindex;animation:1.5s steps(2,end) infinite ball-atom-zindex}.la-ball-atom>div:not(:nth-child(1)):before{position:absolute;top:0;left:0;width:10px;height:10px;margin-top:-5px;margin-left:-5px;content:\"\";background:currentColor;border-radius:50%;opacity:.75;-webkit-animation:1.5s infinite ball-atom-position,1.5s infinite ball-atom-size;animation:1.5s infinite ball-atom-position,1.5s infinite ball-atom-size}.la-ball-atom>div:nth-child(2){-webkit-animation-delay:.75s;animation-delay:.75s}.la-ball-atom>div:nth-child(2):before{-webkit-animation-delay:0s,-1.125s;animation-delay:0s,-1.125s}.la-ball-atom>div:nth-child(3){-webkit-transform:rotate(120deg);transform:rotate(120deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-atom>div:nth-child(3):before{-webkit-animation-delay:-1s,-.75s;animation-delay:-1s,-.75s}.la-ball-atom>div:nth-child(4){-webkit-transform:rotate(240deg);transform:rotate(240deg);-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-atom>div:nth-child(4):before{-webkit-animation-delay:-.5s,-125ms;animation-delay:-.5s,-125ms}.la-ball-atom.la-sm{width:16px;height:16px}.la-ball-atom.la-sm>div:not(:nth-child(1)):before{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-atom.la-2x{width:64px;height:64px}.la-ball-atom.la-2x>div:not(:nth-child(1)):before{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-atom.la-3x{width:96px;height:96px}.la-ball-atom.la-3x>div:not(:nth-child(1)):before{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-atom-position{50%{top:100%;left:100%}}@keyframes ball-atom-position{50%{top:100%;left:100%}}@-webkit-keyframes ball-atom-size{50%{-webkit-transform:scale(.5,.5);transform:scale(.5,.5)}}@keyframes ball-atom-size{50%{-webkit-transform:scale(.5,.5);transform:scale(.5,.5)}}@-webkit-keyframes ball-atom-zindex{50%{z-index:10}}@keyframes ball-atom-zindex{50%{z-index:10}}@-webkit-keyframes ball-atom-shrink{50%{-webkit-transform:translate(-50%,-50%) scale(.8,.8);transform:translate(-50%,-50%) scale(.8,.8)}}@keyframes ball-atom-shrink{50%{-webkit-transform:translate(-50%,-50%) scale(.8,.8);transform:translate(-50%,-50%) scale(.8,.8)}}.la-ball-beat,.la-ball-beat>div{position:relative;box-sizing:border-box}.la-ball-beat{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-beat.la-dark{color:#333}.la-ball-beat>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:.7s linear -.15s infinite ball-beat;animation:.7s linear -.15s infinite ball-beat}.la-ball-beat>div:nth-child(2n-1){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-beat.la-sm{width:26px;height:8px}.la-ball-beat.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-beat.la-2x{width:108px;height:36px}.la-ball-beat.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-beat.la-3x{width:162px;height:54px}.la-ball-beat.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-beat{50%{opacity:.2;-webkit-transform:scale(.75);transform:scale(.75)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-beat{50%{opacity:.2;-webkit-transform:scale(.75);transform:scale(.75)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-circus,.la-ball-circus>div{position:relative;box-sizing:border-box}.la-ball-circus{display:block;font-size:0;color:#fff;width:16px;height:16px}.la-ball-circus.la-dark{color:#333}.la-ball-circus>div{float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:-100%;display:block;width:100%;height:100%;border-radius:100%;opacity:.5;-webkit-animation:2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-position,2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-size;animation:2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-position,2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-size}.la-ball-circus>div:nth-child(1){-webkit-animation-delay:0s,-.5s;animation-delay:0s,-.5s}.la-ball-circus>div:nth-child(2){-webkit-animation-delay:-.5s,-1s;animation-delay:-.5s,-1s}.la-ball-circus>div:nth-child(3){-webkit-animation-delay:-1s,-1.5s;animation-delay:-1s,-1.5s}.la-ball-circus>div:nth-child(4){-webkit-animation-delay:-1.5s,-2s;animation-delay:-1.5s,-2s}.la-ball-circus>div:nth-child(5){-webkit-animation-delay:-2s,-2.5s;animation-delay:-2s,-2.5s}.la-ball-circus.la-sm,.la-ball-circus.la-sm>div{width:8px;height:8px}.la-ball-circus.la-2x,.la-ball-circus.la-2x>div{width:32px;height:32px}.la-ball-circus.la-3x,.la-ball-circus.la-3x>div{width:48px;height:48px}@-webkit-keyframes ball-circus-position{50%{left:100%}}@keyframes ball-circus-position{50%{left:100%}}@-webkit-keyframes ball-circus-size{50%{-webkit-transform:scale(.3,.3);transform:scale(.3,.3)}}@keyframes ball-circus-size{50%{-webkit-transform:scale(.3,.3);transform:scale(.3,.3)}}.la-ball-climbing-dot,.la-ball-climbing-dot>div{position:relative;box-sizing:border-box}.la-ball-climbing-dot{display:block;font-size:0;color:#fff;width:42px;height:32px}.la-ball-climbing-dot.la-dark{color:#333}.la-ball-climbing-dot>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-ball-climbing-dot>div:nth-child(1){position:absolute;bottom:32%;left:18%;width:14px;height:14px;border-radius:100%;-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation:.6s ease-in-out infinite ball-climbing-dot-jump;animation:.6s ease-in-out infinite ball-climbing-dot-jump}.la-ball-climbing-dot>div:not(:nth-child(1)){position:absolute;top:0;right:0;width:14px;height:2px;border-radius:0;-webkit-transform:translate(60%,0);transform:translate(60%,0);-webkit-animation:1.8s linear infinite ball-climbing-dot-steps;animation:1.8s linear infinite ball-climbing-dot-steps}.la-ball-climbing-dot>div:not(:nth-child(1)):nth-child(2){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-climbing-dot>div:not(:nth-child(1)):nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}.la-ball-climbing-dot>div:not(:nth-child(1)):nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-climbing-dot.la-sm{width:20px;height:16px}.la-ball-climbing-dot.la-sm>div:nth-child(1){width:6px;height:6px}.la-ball-climbing-dot.la-sm>div:not(:nth-child(1)){width:6px;height:1px}.la-ball-climbing-dot.la-2x{width:84px;height:64px}.la-ball-climbing-dot.la-2x>div:nth-child(1){width:28px;height:28px}.la-ball-climbing-dot.la-2x>div:not(:nth-child(1)){width:28px;height:4px}.la-ball-climbing-dot.la-3x{width:126px;height:96px}.la-ball-climbing-dot.la-3x>div:nth-child(1){width:42px;height:42px}.la-ball-climbing-dot.la-3x>div:not(:nth-child(1)){width:42px;height:6px}@-webkit-keyframes ball-climbing-dot-jump{0%,100%{-webkit-transform:scale(1,.7);transform:scale(1,.7)}20%,80%,90%{-webkit-transform:scale(.7,1.2);transform:scale(.7,1.2)}40%,46%{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{bottom:125%}}@keyframes ball-climbing-dot-jump{0%,100%{-webkit-transform:scale(1,.7);transform:scale(1,.7)}20%,80%,90%{-webkit-transform:scale(.7,1.2);transform:scale(.7,1.2)}40%,46%{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{bottom:125%}}@-webkit-keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}100%{top:100%;right:100%;opacity:0}}@keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}100%{top:100%;right:100%;opacity:0}}.la-ball-clip-rotate-multiple,.la-ball-clip-rotate-multiple>div{position:relative;box-sizing:border-box}.la-ball-clip-rotate-multiple{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-clip-rotate-multiple.la-dark{color:#333}.la-ball-clip-rotate-multiple>div{display:inline-block;float:none;border:2px solid currentColor;position:absolute;top:50%;left:50%;background:0 0;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-clip-rotate-multiple-rotate;animation:1s ease-in-out infinite ball-clip-rotate-multiple-rotate}.la-ball-clip-rotate-multiple>div:first-child{position:absolute;width:32px;height:32px;border-right-color:transparent;border-left-color:transparent}.la-ball-clip-rotate-multiple>div:last-child{width:16px;height:16px;border-top-color:transparent;border-bottom-color:transparent;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-direction:reverse;animation-direction:reverse}.la-ball-clip-rotate-multiple.la-sm{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm>div{border-width:1px}.la-ball-clip-rotate-multiple.la-sm>div:first-child{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm>div:last-child{width:8px;height:8px}.la-ball-clip-rotate-multiple.la-2x{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x>div{border-width:4px}.la-ball-clip-rotate-multiple.la-2x>div:first-child{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x>div:last-child{width:32px;height:32px}.la-ball-clip-rotate-multiple.la-3x{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x>div{border-width:6px}.la-ball-clip-rotate-multiple.la-3x>div:first-child{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x>div:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-multiple-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}@keyframes ball-clip-rotate-multiple-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}.la-ball-clip-rotate-pulse,.la-ball-clip-rotate-pulse>div{position:relative;box-sizing:border-box}.la-ball-clip-rotate-pulse{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-clip-rotate-pulse.la-dark{color:#333}.la-ball-clip-rotate-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;border-radius:100%}.la-ball-clip-rotate-pulse>div:first-child{position:absolute;width:32px;height:32px;background:0 0;border-style:solid;border-width:2px;border-right-color:transparent;border-left-color:transparent;-webkit-animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-rotate;animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-rotate}.la-ball-clip-rotate-pulse>div:last-child{width:16px;height:16px;-webkit-animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-scale;animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-scale}.la-ball-clip-rotate-pulse.la-sm{width:16px;height:16px}.la-ball-clip-rotate-pulse.la-sm>div:first-child{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate-pulse.la-sm>div:last-child{width:8px;height:8px}.la-ball-clip-rotate-pulse.la-2x{width:64px;height:64px}.la-ball-clip-rotate-pulse.la-2x>div:first-child{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate-pulse.la-2x>div:last-child{width:32px;height:32px}.la-ball-clip-rotate-pulse.la-3x{width:96px;height:96px}.la-ball-clip-rotate-pulse.la-3x>div:first-child{width:96px;height:96px;border-width:6px}.la-ball-clip-rotate-pulse.la-3x>div:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-pulse-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}@keyframes ball-clip-rotate-pulse-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}@-webkit-keyframes ball-clip-rotate-pulse-scale{0%,100%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;-webkit-transform:translate(-50%,-50%) scale(.15);transform:translate(-50%,-50%) scale(.15)}}@keyframes ball-clip-rotate-pulse-scale{0%,100%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;-webkit-transform:translate(-50%,-50%) scale(.15);transform:translate(-50%,-50%) scale(.15)}}.la-ball-clip-rotate,.la-ball-clip-rotate>div{position:relative;box-sizing:border-box}.la-ball-clip-rotate{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-clip-rotate.la-dark{color:#333}.la-ball-clip-rotate>div{display:inline-block;float:none;border:2px solid currentColor;width:32px;height:32px;background:0 0;border-bottom-color:transparent;border-radius:100%;-webkit-animation:.75s linear infinite ball-clip-rotate;animation:.75s linear infinite ball-clip-rotate}.la-ball-clip-rotate.la-sm{width:16px;height:16px}.la-ball-clip-rotate.la-sm>div{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate.la-2x{width:64px;height:64px}.la-ball-clip-rotate.la-2x>div{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate.la-3x{width:96px;height:96px}.la-ball-clip-rotate.la-3x>div{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-clip-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-clip-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-ball-elastic-dots,.la-ball-elastic-dots>div{position:relative;box-sizing:border-box}.la-ball-elastic-dots{display:block;color:#fff;width:120px;height:10px;font-size:0;text-align:center}.la-ball-elastic-dots.la-dark{color:#333}.la-ball-elastic-dots>div{float:none;background-color:currentColor;border:0 solid currentColor;display:inline-block;width:10px;height:10px;white-space:nowrap;border-radius:100%;-webkit-animation:1s infinite ball-elastic-dots-anim;animation:1s infinite ball-elastic-dots-anim}.la-ball-elastic-dots.la-sm{width:60px;height:4px}.la-ball-elastic-dots.la-sm>div{width:4px;height:4px}.la-ball-elastic-dots.la-2x{width:240px;height:20px}.la-ball-elastic-dots.la-2x>div{width:20px;height:20px}.la-ball-elastic-dots.la-3x{width:360px;height:30px}.la-ball-elastic-dots.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-elastic-dots-anim{0%,100%{margin:0;-webkit-transform:scale(1);transform:scale(1)}50%{margin:0 5%;-webkit-transform:scale(.65);transform:scale(.65)}}@keyframes ball-elastic-dots-anim{0%,100%{margin:0;-webkit-transform:scale(1);transform:scale(1)}50%{margin:0 5%;-webkit-transform:scale(.65);transform:scale(.65)}}.la-ball-fall,.la-ball-fall>div{position:relative;box-sizing:border-box}.la-ball-fall{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-fall.la-dark{color:#333}.la-ball-fall>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;opacity:0;-webkit-animation:1s ease-in-out infinite ball-fall;animation:1s ease-in-out infinite ball-fall}.la-ball-fall>div:nth-child(1){-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-fall>div:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-fall>div:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-fall.la-sm{width:26px;height:8px}.la-ball-fall.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-fall.la-2x{width:108px;height:36px}.la-ball-fall.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-fall.la-3x{width:162px;height:54px}.la-ball-fall.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-fall{0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}10%,90%{opacity:.5}20%,80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}}@keyframes ball-fall{0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}10%,90%{opacity:.5}20%,80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}}.la-ball-fussion,.la-ball-fussion>div{position:relative;box-sizing:border-box}.la-ball-fussion{display:block;font-size:0;color:#fff;width:8px;height:8px}.la-ball-fussion.la-dark{color:#333}.la-ball-fussion>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:12px;height:12px;border-radius:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:1s infinite ball-fussion-ball1;animation:1s infinite ball-fussion-ball1}.la-ball-fussion>div:nth-child(1){top:0;left:50%;z-index:1}.la-ball-fussion>div:nth-child(2){top:50%;left:100%;z-index:2;-webkit-animation-name:ball-fussion-ball2;animation-name:ball-fussion-ball2}.la-ball-fussion>div:nth-child(3){top:100%;left:50%;z-index:1;-webkit-animation-name:ball-fussion-ball3;animation-name:ball-fussion-ball3}.la-ball-fussion>div:nth-child(4){top:50%;left:0;z-index:2;-webkit-animation-name:ball-fussion-ball4;animation-name:ball-fussion-ball4}.la-ball-fussion.la-sm{width:4px;height:4px}.la-ball-fussion.la-sm>div{width:6px;height:6px}.la-ball-fussion.la-2x{width:16px;height:16px}.la-ball-fussion.la-2x>div,.la-ball-fussion.la-3x{width:24px;height:24px}.la-ball-fussion.la-3x>div{width:36px;height:36px}@-webkit-keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}100%{top:50%;left:100%;z-index:2;opacity:.35}}@keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}100%{top:50%;left:100%;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}100%{top:100%;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}100%{top:100%;left:50%;z-index:1;opacity:.35}}@-webkit-keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}100%{top:50%;left:0;z-index:2;opacity:.35}}@keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}100%{top:50%;left:0;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}100%{top:0;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}100%{top:0;left:50%;z-index:1;opacity:.35}}.la-ball-grid-beat,.la-ball-grid-beat>div{position:relative;box-sizing:border-box}.la-ball-grid-beat{display:block;font-size:0;color:#fff;width:36px;height:36px}.la-ball-grid-beat.la-dark{color:#333}.la-ball-grid-beat>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-beat;animation-name:ball-grid-beat;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-beat>div:nth-child(1){-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-beat>div:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-beat>div:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-beat>div:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-beat>div:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-beat>div:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-beat>div:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-beat>div:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-beat>div:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-beat.la-sm{width:18px;height:18px}.la-ball-grid-beat.la-sm>div{width:4px;height:4px;margin:1px}.la-ball-grid-beat.la-2x{width:72px;height:72px}.la-ball-grid-beat.la-2x>div{width:16px;height:16px;margin:4px}.la-ball-grid-beat.la-3x{width:108px;height:108px}.la-ball-grid-beat.la-3x>div{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-beat{0%,100%{opacity:1}50%{opacity:.35}}@keyframes ball-grid-beat{0%,100%{opacity:1}50%{opacity:.35}}.la-ball-grid-pulse,.la-ball-grid-pulse>div{position:relative;box-sizing:border-box}.la-ball-grid-pulse{display:block;font-size:0;color:#fff;width:36px;height:36px}.la-ball-grid-pulse.la-dark{color:#333}.la-ball-grid-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-pulse;animation-name:ball-grid-pulse;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-pulse>div:nth-child(1){-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-pulse>div:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-pulse>div:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-pulse>div:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-pulse>div:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-pulse>div:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-pulse>div:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-pulse>div:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-pulse>div:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-pulse.la-sm{width:18px;height:18px}.la-ball-grid-pulse.la-sm>div{width:4px;height:4px;margin:1px}.la-ball-grid-pulse.la-2x{width:72px;height:72px}.la-ball-grid-pulse.la-2x>div{width:16px;height:16px;margin:4px}.la-ball-grid-pulse.la-3x{width:108px;height:108px}.la-ball-grid-pulse.la-3x>div{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-pulse{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.35;-webkit-transform:scale(.45);transform:scale(.45)}}@keyframes ball-grid-pulse{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.35;-webkit-transform:scale(.45);transform:scale(.45)}}.la-ball-newton-cradle,.la-ball-newton-cradle>div{position:relative;box-sizing:border-box}.la-ball-newton-cradle{display:block;font-size:0;color:#fff;width:40px;height:10px}.la-ball-newton-cradle.la-dark{color:#333}.la-ball-newton-cradle>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;border-radius:100%}.la-ball-newton-cradle>div:first-child{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation:1s ease-out infinite ball-newton-cradle-left;animation:1s ease-out infinite ball-newton-cradle-left}.la-ball-newton-cradle>div:last-child{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation:1s ease-out infinite ball-newton-cradle-right;animation:1s ease-out infinite ball-newton-cradle-right}.la-ball-newton-cradle.la-sm{width:20px;height:4px}.la-ball-newton-cradle.la-sm>div{width:4px;height:4px}.la-ball-newton-cradle.la-2x{width:80px;height:20px}.la-ball-newton-cradle.la-2x>div{width:20px;height:20px}.la-ball-newton-cradle.la-3x{width:120px;height:30px}.la-ball-newton-cradle.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-newton-cradle-left{25%{-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes ball-newton-cradle-left{25%{-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes ball-newton-cradle-right{100%,50%{-webkit-transform:translateX(0);transform:translateX(0)}75%{-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes ball-newton-cradle-right{100%,50%{-webkit-transform:translateX(0);transform:translateX(0)}75%{-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.la-ball-pulse-rise,.la-ball-pulse-rise>div{position:relative;box-sizing:border-box}.la-ball-pulse-rise{display:block;font-size:0;color:#fff;width:70px;height:14px}.la-ball-pulse-rise.la-dark{color:#333}.la-ball-pulse-rise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:2px;border-radius:100%;-webkit-animation:1s cubic-bezier(.15,.36,.9,.6) infinite ball-pulse-rise-even;animation:1s cubic-bezier(.15,.36,.9,.6) infinite ball-pulse-rise-even}.la-ball-pulse-rise>div:nth-child(2n-1){-webkit-animation-name:ball-pulse-rise-odd;animation-name:ball-pulse-rise-odd}.la-ball-pulse-rise.la-sm{width:34px;height:6px}.la-ball-pulse-rise.la-sm>div{width:4px;height:4px;margin:1px}.la-ball-pulse-rise.la-2x{width:140px;height:28px}.la-ball-pulse-rise.la-2x>div{width:20px;height:20px;margin:4px}.la-ball-pulse-rise.la-3x{width:210px;height:42px}.la-ball-pulse-rise.la-3x>div{width:30px;height:30px;margin:6px}@-webkit-keyframes ball-pulse-rise-even{0%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}25%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}50%{opacity:.35;-webkit-transform:scale(.3);transform:scale(.3)}75%{-webkit-transform:translateY(200%);transform:translateY(200%)}100%{opacity:1;-webkit-transform:translateY(0);-webkit-transform:scale(1);transform:translateY(0);transform:scale(1)}}@keyframes ball-pulse-rise-even{0%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}25%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}50%{opacity:.35;-webkit-transform:scale(.3);transform:scale(.3)}75%{-webkit-transform:translateY(200%);transform:translateY(200%)}100%{opacity:1;-webkit-transform:translateY(0);-webkit-transform:scale(1);transform:translateY(0);transform:scale(1)}}@-webkit-keyframes ball-pulse-rise-odd{0%{opacity:.35;-webkit-transform:scale(.4);transform:scale(.4)}25%{-webkit-transform:translateY(200%);transform:translateY(200%)}50%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}75%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}100%{opacity:.35;-webkit-transform:translateY(0);-webkit-transform:scale(.75);transform:translateY(0);transform:scale(.75)}}@keyframes ball-pulse-rise-odd{0%{opacity:.35;-webkit-transform:scale(.4);transform:scale(.4)}25%{-webkit-transform:translateY(200%);transform:translateY(200%)}50%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}75%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}100%{opacity:.35;-webkit-transform:translateY(0);-webkit-transform:scale(.75);transform:translateY(0);transform:scale(.75)}}.la-ball-pulse-sync,.la-ball-pulse-sync>div{position:relative;box-sizing:border-box}.la-ball-pulse-sync{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-pulse-sync.la-dark{color:#333}.la-ball-pulse-sync>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:.6s ease-in-out infinite ball-pulse-sync;animation:.6s ease-in-out infinite ball-pulse-sync}.la-ball-pulse-sync>div:nth-child(1){-webkit-animation-delay:-.14s;animation-delay:-.14s}.la-ball-pulse-sync>div:nth-child(2){-webkit-animation-delay:-.07s;animation-delay:-.07s}.la-ball-pulse-sync>div:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-pulse-sync.la-sm{width:26px;height:8px}.la-ball-pulse-sync.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-pulse-sync.la-2x{width:108px;height:36px}.la-ball-pulse-sync.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-pulse-sync.la-3x{width:162px;height:54px}.la-ball-pulse-sync.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse-sync{33%{-webkit-transform:translateY(100%);transform:translateY(100%)}66%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes ball-pulse-sync{33%{-webkit-transform:translateY(100%);transform:translateY(100%)}66%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}.la-ball-pulse,.la-ball-pulse>div{position:relative;box-sizing:border-box}.la-ball-pulse{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-pulse.la-dark{color:#333}.la-ball-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:1s infinite ball-pulse;animation:1s infinite ball-pulse}.la-ball-pulse>div:nth-child(1){-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-pulse>div:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-pulse>div:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-pulse.la-sm{width:26px;height:8px}.la-ball-pulse.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-pulse.la-2x{width:108px;height:36px}.la-ball-pulse.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-pulse.la-3x{width:162px;height:54px}.la-ball-pulse.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse{0%,100%,60%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}30%{opacity:.1;-webkit-transform:scale(.01);transform:scale(.01)}}@keyframes ball-pulse{0%,100%,60%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}30%{opacity:.1;-webkit-transform:scale(.01);transform:scale(.01)}}.la-ball-rotate,.la-ball-rotate>div{position:relative;box-sizing:border-box}.la-ball-rotate{display:block;font-size:0;color:#fff;width:10px;height:10px}.la-ball-rotate.la-dark{color:#333}.la-ball-rotate>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;border-radius:100%;-webkit-animation:1s cubic-bezier(.7,-.13,.22,.86) infinite ball-rotate-animation;animation:1s cubic-bezier(.7,-.13,.22,.86) infinite ball-rotate-animation}.la-ball-rotate>div:after,.la-ball-rotate>div:before{position:absolute;width:inherit;height:inherit;margin:inherit;content:\"\";background:currentColor;border-radius:inherit;opacity:.8}.la-ball-rotate>div:before{top:0;left:-150%}.la-ball-rotate>div:after{top:0;left:150%}.la-ball-rotate.la-sm,.la-ball-rotate.la-sm>div{width:4px;height:4px}.la-ball-rotate.la-2x,.la-ball-rotate.la-2x>div{width:20px;height:20px}.la-ball-rotate.la-3x,.la-ball-rotate.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-rotate-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-rotate-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-ball-running-dots,.la-ball-running-dots>div{position:relative;box-sizing:border-box}.la-ball-running-dots{display:block;font-size:0;color:#fff;width:10px;height:10px}.la-ball-running-dots.la-dark{color:#333}.la-ball-running-dots>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:10px;height:10px;margin-left:-25px;border-radius:100%;-webkit-animation:2s linear infinite ball-running-dots-animate;animation:2s linear infinite ball-running-dots-animate}.la-ball-running-dots>div:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-running-dots>div:nth-child(2){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-ball-running-dots>div:nth-child(3){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-ball-running-dots>div:nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-running-dots>div:nth-child(5){-webkit-animation-delay:-1.6s;animation-delay:-1.6s}.la-ball-running-dots>div:nth-child(6){-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-running-dots>div:nth-child(7){-webkit-animation-delay:-2.4s;animation-delay:-2.4s}.la-ball-running-dots>div:nth-child(8){-webkit-animation-delay:-2.8s;animation-delay:-2.8s}.la-ball-running-dots>div:nth-child(9){-webkit-animation-delay:-3.2s;animation-delay:-3.2s}.la-ball-running-dots>div:nth-child(10){-webkit-animation-delay:-3.6s;animation-delay:-3.6s}.la-ball-running-dots.la-sm{width:4px;height:4px}.la-ball-running-dots.la-sm>div{width:4px;height:4px;margin-left:-12px}.la-ball-running-dots.la-2x{width:20px;height:20px}.la-ball-running-dots.la-2x>div{width:20px;height:20px;margin-left:-50px}.la-ball-running-dots.la-3x{width:30px;height:30px}.la-ball-running-dots.la-3x>div{width:30px;height:30px;margin-left:-75px}@-webkit-keyframes ball-running-dots-animate{0%,100%{width:100%;height:100%;-webkit-transform:translateY(0) translateX(500%);transform:translateY(0) translateX(500%)}80%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0)}85%{width:100%;height:100%;-webkit-transform:translateY(-125%) translateX(0);transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;-webkit-transform:translateY(-100%) translateX(500%);transform:translateY(-100%) translateX(500%)}}@keyframes ball-running-dots-animate{0%,100%{width:100%;height:100%;-webkit-transform:translateY(0) translateX(500%);transform:translateY(0) translateX(500%)}80%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0)}85%{width:100%;height:100%;-webkit-transform:translateY(-125%) translateX(0);transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;-webkit-transform:translateY(-100%) translateX(500%);transform:translateY(-100%) translateX(500%)}}.la-ball-scale-multiple,.la-ball-scale-multiple>div{position:relative;box-sizing:border-box}.la-ball-scale-multiple{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-multiple.la-dark{color:#333}.la-ball-scale-multiple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:0;-webkit-animation:1s linear infinite ball-scale-multiple;animation:1s linear infinite ball-scale-multiple}.la-ball-scale-multiple>div:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.la-ball-scale-multiple>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.la-ball-scale-multiple.la-sm,.la-ball-scale-multiple.la-sm>div{width:16px;height:16px}.la-ball-scale-multiple.la-2x,.la-ball-scale-multiple.la-2x>div{width:64px;height:64px}.la-ball-scale-multiple.la-3x,.la-ball-scale-multiple.la-3x>div{width:96px;height:96px}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-scale-pulse,.la-ball-scale-pulse>div{position:relative;box-sizing:border-box}.la-ball-scale-pulse{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-pulse.la-dark{color:#333}.la-ball-scale-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:.5;-webkit-animation:2s ease-in-out infinite ball-scale-pulse;animation:2s ease-in-out infinite ball-scale-pulse}.la-ball-scale-pulse>div:last-child{-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-scale-pulse.la-sm,.la-ball-scale-pulse.la-sm>div{width:16px;height:16px}.la-ball-scale-pulse.la-2x,.la-ball-scale-pulse.la-2x>div{width:64px;height:64px}.la-ball-scale-pulse.la-3x,.la-ball-scale-pulse.la-3x>div{width:96px;height:96px}@-webkit-keyframes ball-scale-pulse{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale-pulse{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-scale-ripple-multiple,.la-ball-scale-ripple-multiple>div{position:relative;box-sizing:border-box}.la-ball-scale-ripple-multiple{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-ripple-multiple.la-dark{color:#333}.la-ball-scale-ripple-multiple>div{display:inline-block;float:none;border:2px solid currentColor;position:absolute;top:0;left:0;width:32px;height:32px;background:0 0;border-radius:100%;opacity:0;-webkit-animation:1.25s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple-multiple;animation:1.25s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple-multiple}.la-ball-scale-ripple-multiple>div:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-scale-ripple-multiple>div:nth-child(2){-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-scale-ripple-multiple>div:nth-child(3){-webkit-animation-delay:.5s;animation-delay:.5s}.la-ball-scale-ripple-multiple.la-sm{width:16px;height:16px}.la-ball-scale-ripple-multiple.la-sm>div{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple-multiple.la-2x{width:64px;height:64px}.la-ball-scale-ripple-multiple.la-2x>div{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple-multiple.la-3x{width:96px;height:96px}.la-ball-scale-ripple-multiple.la-3x>div{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple-multiple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}95%{opacity:0}}@keyframes ball-scale-ripple-multiple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}95%{opacity:0}}.la-ball-scale-ripple,.la-ball-scale-ripple>div{position:relative;box-sizing:border-box}.la-ball-scale-ripple{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-ripple.la-dark{color:#333}.la-ball-scale-ripple>div{display:inline-block;float:none;border:2px solid currentColor;width:32px;height:32px;background:0 0;border-radius:100%;opacity:0;-webkit-animation:1s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple;animation:1s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple}.la-ball-scale-ripple.la-sm{width:16px;height:16px}.la-ball-scale-ripple.la-sm>div{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple.la-2x{width:64px;height:64px}.la-ball-scale-ripple.la-2x>div{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple.la-3x{width:96px;height:96px}.la-ball-scale-ripple.la-3x>div{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.65;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0}}@keyframes ball-scale-ripple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.65;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0}}.la-ball-scale,.la-ball-scale>div{position:relative;box-sizing:border-box}.la-ball-scale{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale.la-dark{color:#333}.la-ball-scale>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:32px;height:32px;border-radius:100%;opacity:0;-webkit-animation:1s ease-in-out infinite ball-scale;animation:1s ease-in-out infinite ball-scale}.la-ball-scale.la-sm,.la-ball-scale.la-sm>div{width:16px;height:16px}.la-ball-scale.la-2x,.la-ball-scale.la-2x>div{width:64px;height:64px}.la-ball-scale.la-3x,.la-ball-scale.la-3x>div{width:96px;height:96px}@-webkit-keyframes ball-scale{0%{opacity:1;-webkit-transform:scale(0);transform:scale(0)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale{0%{opacity:1;-webkit-transform:scale(0);transform:scale(0)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin-clockwise-fade-rotating,.la-ball-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade-rotating{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate;animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate}.la-ball-spin-clockwise-fade-rotating.la-dark{color:#333}.la-ball-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-clockwise-fade-rotating;animation:1s linear infinite ball-spin-clockwise-fade-rotating}.la-ball-spin-clockwise-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade-rotating.la-sm{width:16px;height:16px}.la-ball-spin-clockwise-fade-rotating.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade-rotating.la-2x{width:64px;height:64px}.la-ball-spin-clockwise-fade-rotating.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade-rotating.la-3x{width:96px;height:96px}.la-ball-spin-clockwise-fade-rotating.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin-clockwise-fade,.la-ball-spin-clockwise-fade>div{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin-clockwise-fade.la-dark{color:#333}.la-ball-spin-clockwise-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-clockwise-fade;animation:1s linear infinite ball-spin-clockwise-fade}.la-ball-spin-clockwise-fade>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade.la-sm{width:16px;height:16px}.la-ball-spin-clockwise-fade.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade.la-2x{width:64px;height:64px}.la-ball-spin-clockwise-fade.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade.la-3x{width:96px;height:96px}.la-ball-spin-clockwise-fade.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-clockwise-fade{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin-clockwise,.la-ball-spin-clockwise>div{position:relative;box-sizing:border-box}.la-ball-spin-clockwise{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin-clockwise.la-dark{color:#333}.la-ball-spin-clockwise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.la-ball-spin-clockwise>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise.la-sm{width:16px;height:16px}.la-ball-spin-clockwise.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise.la-2x{width:64px;height:64px}.la-ball-spin-clockwise.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise.la-3x{width:96px;height:96px}.la-ball-spin-clockwise.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.la-ball-spin-fade-rotating,.la-ball-spin-fade-rotating>div{position:relative;box-sizing:border-box}.la-ball-spin-fade-rotating{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite ball-spin-fade-rotate;animation:6s linear infinite ball-spin-fade-rotate}.la-ball-spin-fade-rotating.la-dark{color:#333}.la-ball-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-fade;animation:1s linear infinite ball-spin-fade}.la-ball-spin-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade-rotating.la-sm{width:16px;height:16px}.la-ball-spin-fade-rotating.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade-rotating.la-2x{width:64px;height:64px}.la-ball-spin-fade-rotating.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade-rotating.la-3x{width:96px;height:96px}.la-ball-spin-fade-rotating.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-ball-spin-fade,.la-ball-spin-fade>div{position:relative;box-sizing:border-box}.la-ball-spin-fade{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin-fade.la-dark{color:#333}.la-ball-spin-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-fade;animation:1s linear infinite ball-spin-fade}.la-ball-spin-fade>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade.la-sm{width:16px;height:16px}.la-ball-spin-fade.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade.la-2x{width:64px;height:64px}.la-ball-spin-fade.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade.la-3x{width:96px;height:96px}.la-ball-spin-fade.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}@keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}.la-ball-spin-rotate,.la-ball-spin-rotate>div{position:relative;box-sizing:border-box}.la-ball-spin-rotate{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:2s linear infinite ball-spin-rotate;animation:2s linear infinite ball-spin-rotate}.la-ball-spin-rotate.la-dark{color:#333}.la-ball-spin-rotate>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;width:60%;height:60%;border-radius:100%;-webkit-animation:2s ease-in-out infinite ball-spin-bounce;animation:2s ease-in-out infinite ball-spin-bounce}.la-ball-spin-rotate>div:last-child{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-spin-rotate.la-sm{width:16px;height:16px}.la-ball-spin-rotate.la-2x{width:64px;height:64px}.la-ball-spin-rotate.la-3x{width:96px;height:96px}@-webkit-keyframes ball-spin-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes ball-spin-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin,.la-ball-spin>div{position:relative;box-sizing:border-box}.la-ball-spin{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin.la-dark{color:#333}.la-ball-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin;animation:1s ease-in-out infinite ball-spin}.la-ball-spin>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin.la-sm{width:16px;height:16px}.la-ball-spin.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin.la-2x{width:64px;height:64px}.la-ball-spin.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin.la-3x{width:96px;height:96px}.la-ball-spin.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.la-ball-square-clockwise-spin,.la-ball-square-clockwise-spin>div{position:relative;box-sizing:border-box}.la-ball-square-clockwise-spin{display:block;font-size:0;color:#fff;width:26px;height:26px}.la-ball-square-clockwise-spin.la-dark{color:#333}.la-ball-square-clockwise-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-square-clockwise-spin;animation:1s ease-in-out infinite ball-square-clockwise-spin}.la-ball-square-clockwise-spin>div:nth-child(1){top:0;left:0;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-square-clockwise-spin>div:nth-child(2){top:0;left:50%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-square-clockwise-spin>div:nth-child(3){top:0;left:100%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-square-clockwise-spin>div:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-square-clockwise-spin>div:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-square-clockwise-spin>div:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-square-clockwise-spin>div:nth-child(7){top:100%;left:0;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-square-clockwise-spin>div:nth-child(8){top:50%;left:0;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-square-clockwise-spin.la-sm{width:12px;height:12px}.la-ball-square-clockwise-spin.la-sm>div{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-clockwise-spin.la-2x{width:52px;height:52px}.la-ball-square-clockwise-spin.la-2x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-clockwise-spin.la-3x{width:78px;height:78px}.la-ball-square-clockwise-spin.la-3x>div{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-clockwise-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-square-clockwise-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-square-spin,.la-ball-square-spin>div{position:relative;box-sizing:border-box}.la-ball-square-spin{display:block;font-size:0;color:#fff;width:26px;height:26px}.la-ball-square-spin.la-dark{color:#333}.la-ball-square-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-square-spin;animation:1s ease-in-out infinite ball-square-spin}.la-ball-square-spin>div:nth-child(1){top:0;left:0;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-square-spin>div:nth-child(2){top:0;left:50%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-square-spin>div:nth-child(3){top:0;left:100%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-square-spin>div:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-square-spin>div:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-square-spin>div:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-square-spin>div:nth-child(7){top:100%;left:0;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-square-spin>div:nth-child(8){top:50%;left:0;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-square-spin.la-sm{width:12px;height:12px}.la-ball-square-spin.la-sm>div{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-spin.la-2x{width:52px;height:52px}.la-ball-square-spin.la-2x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-spin.la-3x{width:78px;height:78px}.la-ball-square-spin.la-3x>div{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-square-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-triangle-path,.la-ball-triangle-path>div{position:relative;box-sizing:border-box}.la-ball-triangle-path{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-triangle-path.la-dark{color:#333}.la-ball-triangle-path>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:10px;height:10px;border-radius:100%}.la-ball-triangle-path>div:nth-child(1){-webkit-animation:2s ease-in-out infinite ball-triangle-path-ball-one;animation:2s ease-in-out infinite ball-triangle-path-ball-one}.la-ball-triangle-path>div:nth-child(2){-webkit-animation:2s ease-in-out infinite ball-triangle-path-ball-two;animation:2s ease-in-out infinite ball-triangle-path-ball-two}.la-ball-triangle-path>div:nth-child(3){-webkit-animation:2s ease-in-out infinite ball-triangle-path-ball-tree;animation:2s ease-in-out infinite ball-triangle-path-ball-tree}.la-ball-triangle-path.la-sm{width:16px;height:16px}.la-ball-triangle-path.la-sm>div{width:4px;height:4px}.la-ball-triangle-path.la-2x{width:64px;height:64px}.la-ball-triangle-path.la-2x>div{width:20px;height:20px}.la-ball-triangle-path.la-3x{width:96px;height:96px}.la-ball-triangle-path.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-triangle-path-ball-one{0%{-webkit-transform:translate(0,220%);transform:translate(0,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}66%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}100%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}}@keyframes ball-triangle-path-ball-one{0%{-webkit-transform:translate(0,220%);transform:translate(0,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}66%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}100%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}}@-webkit-keyframes ball-triangle-path-ball-two{0%{-webkit-transform:translate(110%,0);transform:translate(110%,0)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}66%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}100%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}}@keyframes ball-triangle-path-ball-two{0%{-webkit-transform:translate(110%,0);transform:translate(110%,0)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}66%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}100%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}}@-webkit-keyframes ball-triangle-path-ball-tree{0%{-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}66%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}100%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}}@keyframes ball-triangle-path-ball-tree{0%{-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}66%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}100%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}}.la-ball-zig-zag-deflect,.la-ball-zig-zag-deflect>div{box-sizing:border-box}.la-ball-zig-zag-deflect{display:block;font-size:0;color:#fff;position:relative;width:32px;height:32px}.la-ball-zig-zag-deflect.la-dark{color:#333}.la-ball-zig-zag-deflect>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag-deflect>div:first-child{-webkit-animation:1.5s linear infinite ball-zig-deflect;animation:1.5s linear infinite ball-zig-deflect}.la-ball-zig-zag-deflect>div:last-child{-webkit-animation:1.5s linear infinite ball-zag-deflect;animation:1.5s linear infinite ball-zag-deflect}.la-ball-zig-zag-deflect.la-sm{width:16px;height:16px}.la-ball-zig-zag-deflect.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag-deflect.la-2x{width:64px;height:64px}.la-ball-zig-zag-deflect.la-2x>div{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag-deflect.la-3x{width:96px;height:96px}.la-ball-zig-zag-deflect.la-3x>div{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-deflect{17%,84%{-webkit-transform:translate(-80%,-160%);transform:translate(-80%,-160%)}34%,67%{-webkit-transform:translate(80%,-160%);transform:translate(80%,-160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}@keyframes ball-zig-deflect{17%,84%{-webkit-transform:translate(-80%,-160%);transform:translate(-80%,-160%)}34%,67%{-webkit-transform:translate(80%,-160%);transform:translate(80%,-160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}@-webkit-keyframes ball-zag-deflect{17%,84%{-webkit-transform:translate(80%,160%);transform:translate(80%,160%)}34%,67%{-webkit-transform:translate(-80%,160%);transform:translate(-80%,160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}@keyframes ball-zag-deflect{17%,84%{-webkit-transform:translate(80%,160%);transform:translate(80%,160%)}34%,67%{-webkit-transform:translate(-80%,160%);transform:translate(-80%,160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}.la-ball-zig-zag,.la-ball-zig-zag>div{box-sizing:border-box}.la-ball-zig-zag{display:block;font-size:0;color:#fff;position:relative;width:32px;height:32px}.la-ball-zig-zag.la-dark{color:#333}.la-ball-zig-zag>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag>div:first-child{-webkit-animation:.7s linear infinite ball-zig-effect;animation:.7s linear infinite ball-zig-effect}.la-ball-zig-zag>div:last-child{-webkit-animation:.7s linear infinite ball-zag-effect;animation:.7s linear infinite ball-zag-effect}.la-ball-zig-zag.la-sm{width:16px;height:16px}.la-ball-zig-zag.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag.la-2x{width:64px;height:64px}.la-ball-zig-zag.la-2x>div{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag.la-3x{width:96px;height:96px}.la-ball-zig-zag.la-3x>div{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(-75%,-150%);transform:translate(-75%,-150%)}66%{-webkit-transform:translate(75%,-150%);transform:translate(75%,-150%)}}@keyframes ball-zig-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(-75%,-150%);transform:translate(-75%,-150%)}66%{-webkit-transform:translate(75%,-150%);transform:translate(75%,-150%)}}@-webkit-keyframes ball-zag-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(75%,150%);transform:translate(75%,150%)}66%{-webkit-transform:translate(-75%,150%);transform:translate(-75%,150%)}}@keyframes ball-zag-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(75%,150%);transform:translate(75%,150%)}66%{-webkit-transform:translate(-75%,150%);transform:translate(-75%,150%)}}.la-cog,.la-cog>div{position:relative;box-sizing:border-box}.la-cog{display:block;font-size:0;color:#fff;width:31px;height:31px}.la-cog.la-dark{color:#333}.la-cog>div{display:inline-block;float:none;border:2px dashed currentColor;width:100%;height:100%;background-color:transparent;border-radius:100%;-webkit-animation:4s linear infinite cog-rotate;animation:4s linear infinite cog-rotate}.la-cog>div:after{position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";border:2px solid currentColor;border-radius:100%}.la-cog.la-sm{width:15px;height:15px}.la-cog.la-sm>div,.la-cog.la-sm>div:after{border-width:1px}.la-cog.la-2x{width:61px;height:61px}.la-cog.la-2x>div,.la-cog.la-2x>div:after{border-width:4px}.la-cog.la-3x{width:91px;height:91px}.la-cog.la-3x>div,.la-cog.la-3x>div:after{border-width:6px}@-webkit-keyframes cog-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cog-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-cube-transition,.la-cube-transition>div{position:relative;box-sizing:border-box}.la-cube-transition{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-cube-transition.la-dark{color:#333}.la-cube-transition>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:14px;height:14px;margin-top:-7px;margin-left:-7px;border-radius:0;-webkit-animation:1.6s ease-in-out infinite cube-transition;animation:1.6s ease-in-out infinite cube-transition}.la-cube-transition>div:last-child{-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-cube-transition.la-sm{width:16px;height:16px}.la-cube-transition.la-sm>div{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-cube-transition.la-2x{width:64px;height:64px}.la-cube-transition.la-2x>div{width:28px;height:28px;margin-top:-14px;margin-left:-14px}.la-cube-transition.la-3x{width:96px;height:96px}.la-cube-transition.la-3x>div{width:42px;height:42px;margin-top:-21px;margin-left:-21px}@-webkit-keyframes cube-transition{25%{top:0;left:100%;-webkit-transform:scale(.5) rotate(-90deg);transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;-webkit-transform:scale(1) rotate(-180deg);transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;-webkit-transform:scale(.5) rotate(-270deg);transform:scale(.5) rotate(-270deg)}100%{top:0;left:0;-webkit-transform:scale(1) rotate(-360deg);transform:scale(1) rotate(-360deg)}}@keyframes cube-transition{25%{top:0;left:100%;-webkit-transform:scale(.5) rotate(-90deg);transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;-webkit-transform:scale(1) rotate(-180deg);transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;-webkit-transform:scale(.5) rotate(-270deg);transform:scale(.5) rotate(-270deg)}100%{top:0;left:0;-webkit-transform:scale(1) rotate(-360deg);transform:scale(1) rotate(-360deg)}}.la-fire,.la-fire>div{position:relative;box-sizing:border-box}.la-fire{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-fire.la-dark{color:#333}.la-fire>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;bottom:0;left:50%;width:12px;height:12px;border-radius:2px;-webkit-transform:translateY(0) translateX(-50%) rotate(45deg) scale(0);transform:translateY(0) translateX(-50%) rotate(45deg) scale(0);-webkit-animation:1.5s linear infinite fire-diamonds;animation:1.5s linear infinite fire-diamonds}.la-fire>div:nth-child(1){-webkit-animation-delay:-.85s;animation-delay:-.85s}.la-fire>div:nth-child(2){-webkit-animation-delay:-1.85s;animation-delay:-1.85s}.la-fire>div:nth-child(3){-webkit-animation-delay:-2.85s;animation-delay:-2.85s}.la-fire.la-sm{width:16px;height:16px}.la-fire.la-sm>div{width:6px;height:6px}.la-fire.la-2x{width:64px;height:64px}.la-fire.la-2x>div{width:24px;height:24px}.la-fire.la-3x{width:96px;height:96px}.la-fire.la-3x>div{width:36px;height:36px}@-webkit-keyframes fire-diamonds{0%{-webkit-transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{-webkit-transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}100%{-webkit-transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}@keyframes fire-diamonds{0%{-webkit-transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{-webkit-transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}100%{-webkit-transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}.la-line-scale-party,.la-line-scale-party>div{position:relative;box-sizing:border-box}.la-line-scale-party{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale-party.la-dark{color:#333}.la-line-scale-party>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation-name:line-scale-party;animation-name:line-scale-party;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-line-scale-party>div:nth-child(1){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.23s;animation-delay:-.23s}.la-line-scale-party>div:nth-child(2){-webkit-animation-duration:.62s;animation-duration:.62s;-webkit-animation-delay:-.32s;animation-delay:-.32s}.la-line-scale-party>div:nth-child(3){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.44s;animation-delay:-.44s}.la-line-scale-party>div:nth-child(4){-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-delay:-.31s;animation-delay:-.31s}.la-line-scale-party>div:nth-child(5){-webkit-animation-duration:.74s;animation-duration:.74s;-webkit-animation-delay:-.24s;animation-delay:-.24s}.la-line-scale-party.la-sm{width:20px;height:16px}.la-line-scale-party.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale-party.la-2x{width:80px;height:64px}.la-line-scale-party.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale-party.la-3x{width:120px;height:96px}.la-line-scale-party.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.3);transform:scaleY(.3)}}@keyframes line-scale-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.3);transform:scaleY(.3)}}.la-line-scale-pulse-out-rapid,.la-line-scale-pulse-out-rapid>div{position:relative;box-sizing:border-box}.la-line-scale-pulse-out-rapid{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale-pulse-out-rapid.la-dark{color:#333}.la-line-scale-pulse-out-rapid>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:.9s cubic-bezier(.11,.49,.38,.78) infinite line-scale-pulse-out-rapid;animation:.9s cubic-bezier(.11,.49,.38,.78) infinite line-scale-pulse-out-rapid}.la-line-scale-pulse-out-rapid>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out-rapid>div:nth-child(2),.la-line-scale-pulse-out-rapid>div:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.la-line-scale-pulse-out-rapid>div:nth-child(1),.la-line-scale-pulse-out-rapid>div:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-line-scale-pulse-out-rapid.la-sm{width:20px;height:16px}.la-line-scale-pulse-out-rapid.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out-rapid.la-2x{width:80px;height:64px}.la-line-scale-pulse-out-rapid.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out-rapid.la-3x{width:120px;height:96px}.la-line-scale-pulse-out-rapid.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.3);transform:scaley(.3)}}@keyframes line-scale-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.3);transform:scaley(.3)}}.la-line-scale-pulse-out,.la-line-scale-pulse-out>div{position:relative;box-sizing:border-box}.la-line-scale-pulse-out{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale-pulse-out.la-dark{color:#333}.la-line-scale-pulse-out>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:.9s cubic-bezier(.85,.25,.37,.85) infinite line-scale-pulse-out;animation:.9s cubic-bezier(.85,.25,.37,.85) infinite line-scale-pulse-out}.la-line-scale-pulse-out>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out>div:nth-child(2),.la-line-scale-pulse-out>div:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.la-line-scale-pulse-out>div:nth-child(1),.la-line-scale-pulse-out>div:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-scale-pulse-out.la-sm{width:20px;height:16px}.la-line-scale-pulse-out.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out.la-2x{width:80px;height:64px}.la-line-scale-pulse-out.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out.la-3x{width:120px;height:96px}.la-line-scale-pulse-out.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.3);transform:scaley(.3)}}@keyframes line-scale-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.3);transform:scaley(.3)}}.la-line-scale,.la-line-scale>div{position:relative;box-sizing:border-box}.la-line-scale{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale.la-dark{color:#333}.la-line-scale>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:1.2s infinite line-scale;animation:1.2s infinite line-scale}.la-line-scale>div:nth-child(1){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-line-scale>div:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.la-line-scale>div:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.la-line-scale>div:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale>div:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-line-scale.la-sm{width:20px;height:16px}.la-line-scale.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale.la-2x{width:80px;height:64px}.la-line-scale.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale.la-3x{width:120px;height:96px}.la-line-scale.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes line-scale{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}.la-line-spin-clockwise-fade-rotating,.la-line-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade-rotating{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite line-spin-clockwise-fade-rotating-rotate;animation:6s linear infinite line-spin-clockwise-fade-rotating-rotate}.la-line-spin-clockwise-fade-rotating.la-dark{color:#333}.la-line-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-clockwise-fade-rotating;animation:1s ease-in-out infinite line-spin-clockwise-fade-rotating}.la-line-spin-clockwise-fade-rotating>div:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade-rotating>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade-rotating>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade-rotating>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade-rotating>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade-rotating>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade-rotating.la-sm{width:16px;height:16px}.la-line-spin-clockwise-fade-rotating.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade-rotating.la-2x{width:64px;height:64px}.la-line-spin-clockwise-fade-rotating.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade-rotating.la-3x{width:96px;height:96px}.la-line-spin-clockwise-fade-rotating.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes line-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-webkit-keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}100%{opacity:1}}.la-line-spin-clockwise-fade,.la-line-spin-clockwise-fade>div{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-line-spin-clockwise-fade.la-dark{color:#333}.la-line-spin-clockwise-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-clockwise-fade;animation:1s ease-in-out infinite line-spin-clockwise-fade}.la-line-spin-clockwise-fade>div:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade>div:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade.la-sm{width:16px;height:16px}.la-line-spin-clockwise-fade.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade.la-2x{width:64px;height:64px}.la-line-spin-clockwise-fade.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade.la-3x{width:96px;height:96px}.la-line-spin-clockwise-fade.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-clockwise-fade{50%{opacity:.2}100%{opacity:1}}.la-line-spin-fade-rotating,.la-line-spin-fade-rotating>div{position:relative;box-sizing:border-box}.la-line-spin-fade-rotating{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite ball-spin-fade-rotating-rotate;animation:6s linear infinite ball-spin-fade-rotating-rotate}.la-line-spin-fade-rotating.la-dark{color:#333}.la-line-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-fade-rotating;animation:1s ease-in-out infinite line-spin-fade-rotating}.la-line-spin-fade-rotating>div:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade-rotating>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade-rotating>div:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade-rotating>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade-rotating>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade-rotating>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade-rotating>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade-rotating>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade-rotating.la-sm{width:16px;height:16px}.la-line-spin-fade-rotating.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade-rotating.la-2x{width:64px;height:64px}.la-line-spin-fade-rotating.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade-rotating.la-3x{width:96px;height:96px}.la-line-spin-fade-rotating.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes ball-spin-fade-rotating-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-fade-rotating-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes line-spin-fade-rotating{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-fade-rotating{50%{opacity:.2}100%{opacity:1}}.la-line-spin-fade,.la-line-spin-fade>div{position:relative;box-sizing:border-box}.la-line-spin-fade{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-line-spin-fade.la-dark{color:#333}.la-line-spin-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-fade;animation:1s ease-in-out infinite line-spin-fade}.la-line-spin-fade>div:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade>div:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade.la-sm{width:16px;height:16px}.la-line-spin-fade.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade.la-2x{width:64px;height:64px}.la-line-spin-fade.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade.la-3x{width:96px;height:96px}.la-line-spin-fade.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-fade{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-fade{50%{opacity:.2}100%{opacity:1}}.la-pacman,.la-pacman>div{position:relative;box-sizing:border-box}.la-pacman{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-pacman.la-dark{color:#333}.la-pacman>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-pacman>div:nth-child(1),.la-pacman>div:nth-child(2){width:0;height:0;background:0 0;border-style:solid;border-width:16px;border-right-color:transparent;border-radius:100%;-webkit-animation:.5s infinite pacman-rotate-half-up;animation:.5s infinite pacman-rotate-half-up}.la-pacman>div:nth-child(2){margin-top:-32px;-webkit-animation-name:pacman-rotate-half-down;animation-name:pacman-rotate-half-down}.la-pacman>div:nth-child(3),.la-pacman>div:nth-child(4),.la-pacman>div:nth-child(5),.la-pacman>div:nth-child(6){position:absolute;top:50%;left:200%;width:8px;height:8px;border-radius:100%;opacity:0;-webkit-animation:2s linear infinite pacman-balls;animation:2s linear infinite pacman-balls}.la-pacman>div:nth-child(3){-webkit-animation-delay:-1.44s;animation-delay:-1.44s}.la-pacman>div:nth-child(4){-webkit-animation-delay:-1.94s;animation-delay:-1.94s}.la-pacman>div:nth-child(5){-webkit-animation-delay:-2.44s;animation-delay:-2.44s}.la-pacman>div:nth-child(6){-webkit-animation-delay:-2.94s;animation-delay:-2.94s}.la-pacman.la-sm{width:16px;height:16px}.la-pacman.la-sm>div:nth-child(1),.la-pacman.la-sm>div:nth-child(2){border-width:8px}.la-pacman.la-sm>div:nth-child(2){margin-top:-16px}.la-pacman.la-sm>div:nth-child(3),.la-pacman.la-sm>div:nth-child(4),.la-pacman.la-sm>div:nth-child(5),.la-pacman.la-sm>div:nth-child(6){width:4px;height:4px}.la-pacman.la-2x{width:64px;height:64px}.la-pacman.la-2x>div:nth-child(1),.la-pacman.la-2x>div:nth-child(2){border-width:32px}.la-pacman.la-2x>div:nth-child(2){margin-top:-64px}.la-pacman.la-2x>div:nth-child(3),.la-pacman.la-2x>div:nth-child(4),.la-pacman.la-2x>div:nth-child(5),.la-pacman.la-2x>div:nth-child(6){width:16px;height:16px}.la-pacman.la-3x{width:96px;height:96px}.la-pacman.la-3x>div:nth-child(1),.la-pacman.la-3x>div:nth-child(2){border-width:48px}.la-pacman.la-3x>div:nth-child(2){margin-top:-96px}.la-pacman.la-3x>div:nth-child(3),.la-pacman.la-3x>div:nth-child(4),.la-pacman.la-3x>div:nth-child(5),.la-pacman.la-3x>div:nth-child(6){width:24px;height:24px}@-webkit-keyframes pacman-rotate-half-up{0%,100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}50%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes pacman-rotate-half-up{0%,100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}50%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes pacman-rotate-half-down{0%,100%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes pacman-rotate-half-down{0%,100%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes pacman-balls{0%{left:200%;opacity:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}100%{left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}}@keyframes pacman-balls{0%{left:200%;opacity:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}100%{left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}}.la-square-jelly-box,.la-square-jelly-box>div{position:relative;box-sizing:border-box}.la-square-jelly-box{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-square-jelly-box.la-dark{color:#333}.la-square-jelly-box>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-square-jelly-box>div:nth-child(1),.la-square-jelly-box>div:nth-child(2){position:absolute;left:0;width:100%}.la-square-jelly-box>div:nth-child(1){top:-25%;z-index:1;height:100%;border-radius:10%;-webkit-animation:.6s linear -.1s infinite square-jelly-box-animate;animation:.6s linear -.1s infinite square-jelly-box-animate}.la-square-jelly-box>div:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;-webkit-animation:.6s linear -.1s infinite square-jelly-box-shadow;animation:.6s linear -.1s infinite square-jelly-box-shadow}.la-square-jelly-box.la-sm{width:16px;height:16px}.la-square-jelly-box.la-2x{width:64px;height:64px}.la-square-jelly-box.la-3x{width:96px;height:96px}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}@keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}.la-square-loader,.la-square-loader>div{position:relative;box-sizing:border-box}.la-square-loader{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-square-loader.la-dark{color:#333}.la-square-loader>div{display:inline-block;float:none;border:2px solid currentColor;width:100%;height:100%;background:0 0;border-radius:0;-webkit-animation:2s infinite square-loader;animation:2s infinite square-loader}.la-square-loader>div:after{display:inline-block;width:100%;vertical-align:top;content:\"\";background-color:currentColor;-webkit-animation:2s ease-in infinite square-loader-inner;animation:2s ease-in infinite square-loader-inner}.la-square-loader.la-sm{width:16px;height:16px}.la-square-loader.la-sm>div{border-width:1px}.la-square-loader.la-2x{width:64px;height:64px}.la-square-loader.la-2x>div{border-width:4px}.la-square-loader.la-3x{width:96px;height:96px}.la-square-loader.la-3x>div{border-width:6px}@-webkit-keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}@keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}.la-square-spin,.la-square-spin>div{position:relative;box-sizing:border-box}.la-square-spin{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-square-spin.la-dark{color:#333}.la-square-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:100%;height:100%;border-radius:0;-webkit-animation:3s cubic-bezier(.09,.57,.49,.9) infinite square-spin;animation:3s cubic-bezier(.09,.57,.49,.9) infinite square-spin}.la-square-spin.la-sm{width:16px;height:16px}.la-square-spin.la-2x{width:64px;height:64px}.la-square-spin.la-3x{width:96px;height:96px}@-webkit-keyframes square-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}@keyframes square-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}.la-timer,.la-timer>div{position:relative;box-sizing:border-box}.la-timer{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-timer.la-dark{color:#333}.la-timer>div{display:inline-block;float:none;border:2px solid currentColor;width:32px;height:32px;background:0 0;border-radius:100%}.la-timer>div:after,.la-timer>div:before{position:absolute;top:14px;left:14px;display:block;width:2px;margin-top:-1px;margin-left:-1px;content:\"\";background:currentColor;border-radius:2px;-webkit-transform-origin:1px 1px 0;transform-origin:1px 1px 0;-webkit-animation:1.25s linear -625ms infinite timer-loader;animation:1.25s linear -625ms infinite timer-loader}.la-timer>div:before{height:12px}.la-timer>div:after{height:8px;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:-7.5s;animation-delay:-7.5s}.la-timer.la-sm{width:16px;height:16px}.la-timer.la-sm>div{width:16px;height:16px;border-width:1px}.la-timer.la-sm>div:after,.la-timer.la-sm>div:before{top:7px;left:7px;width:1px;margin-top:-.5px;margin-left:-.5px;border-radius:1px;-webkit-transform-origin:.5px .5px 0;transform-origin:.5px .5px 0}.la-timer.la-sm>div:before{height:6px}.la-timer.la-sm>div:after{height:4px}.la-timer.la-2x{width:64px;height:64px}.la-timer.la-2x>div{width:64px;height:64px;border-width:4px}.la-timer.la-2x>div:after,.la-timer.la-2x>div:before{top:28px;left:28px;width:4px;margin-top:-2px;margin-left:-2px;border-radius:4px;-webkit-transform-origin:2px 2px 0;transform-origin:2px 2px 0}.la-timer.la-2x>div:before{height:24px}.la-timer.la-2x>div:after{height:16px}.la-timer.la-3x{width:96px;height:96px}.la-timer.la-3x>div{width:96px;height:96px;border-width:6px}.la-timer.la-3x>div:after,.la-timer.la-3x>div:before{top:42px;left:42px;width:6px;margin-top:-3px;margin-left:-3px;border-radius:6px;-webkit-transform-origin:3px 3px 0;transform-origin:3px 3px 0}.la-timer.la-3x>div:before{height:36px}.la-timer.la-3x>div:after{height:24px}@-webkit-keyframes timer-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes timer-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-triangle-skew-spin,.la-triangle-skew-spin>div{position:relative;box-sizing:border-box}.la-triangle-skew-spin{display:block;font-size:0;color:#fff;width:32px;height:16px}.la-triangle-skew-spin.la-dark{color:#333}.la-triangle-skew-spin>div{display:inline-block;float:none;border:0 solid currentColor;width:0;height:0;background:0 0;border:solid;border-width:0 16px 16px;border-right-color:transparent;border-left-color:transparent;-webkit-animation:3s cubic-bezier(.09,.57,.49,.9) infinite triangle-skew-spin;animation:3s cubic-bezier(.09,.57,.49,.9) infinite triangle-skew-spin}.la-triangle-skew-spin.la-sm{width:16px;height:8px}.la-triangle-skew-spin.la-sm>div{border-width:0 8px 8px}.la-triangle-skew-spin.la-2x{width:64px;height:32px}.la-triangle-skew-spin.la-2x>div{border-width:0 32px 32px}.la-triangle-skew-spin.la-3x{width:96px;height:48px}.la-triangle-skew-spin.la-3x>div{border-width:0 48px 48px}@-webkit-keyframes triangle-skew-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}@keyframes triangle-skew-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}.black-overlay{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99999!important}.black-overlay>div{top:50%;left:50%;margin:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;-webkit-transform:translate(-50%,-60%);transform:translate(-50%,-60%);z-index:99999!important}"]
                },] },
    ];
    /** @nocollapse */
    NgxSpinnerComponent.ctorParameters = function () { return [
        { type: NgxSpinnerService }
    ]; };
    NgxSpinnerComponent.propDecorators = {
        bdColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        loadingText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgxSpinnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxSpinnerModule = /** @class */ (function () {
    function NgxSpinnerModule() {
    }
    NgxSpinnerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    declarations: [NgxSpinnerComponent],
                    exports: [NgxSpinnerComponent]
                },] },
    ];
    return NgxSpinnerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1zcGlubmVyL2xpYi9uZ3gtc3Bpbm5lci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtc3Bpbm5lci9saWIvbmd4LXNwaW5uZXIuZW51bS50cyIsIm5nOi8vbmd4LXNwaW5uZXIvbGliL25neC1zcGlubmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXNwaW5uZXIvbGliL25neC1zcGlubmVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFNwaW5uZXJTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFNwaW5uZXIgb2JzZXJ2YWJsZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lclNlcnZpY2VcbiAgICovXG4gIHB1YmxpYyBzcGlubmVyT2JzZXJ2YWJsZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE5neFNwaW5uZXJTZXJ2aWNlLlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lclNlcnZpY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIC8qKlxuICAgKiBUbyBzaG93IHNwaW5uZXJcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICAqL1xuICBzaG93KCkge1xuICAgIHRoaXMuc3Bpbm5lck9ic2VydmFibGUubmV4dCh0cnVlKTtcbiAgfVxuICAvKipcbiAgICogVG8gaGlkZSBzcGlubmVyXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAgKi9cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnNwaW5uZXJPYnNlcnZhYmxlLm5leHQoZmFsc2UpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgTE9BREVSUyA9IHtcbiAgICAnYmFsbC04Yml0cyc6IDE2LFxuICAgICdiYWxsLWF0b20nOiA0LFxuICAgICdiYWxsLWJlYXQnOiAzLFxuICAgICdiYWxsLWNpcmN1cyc6IDUsXG4gICAgJ2JhbGwtY2xpbWJpbmctZG90JzogNCxcbiAgICAnYmFsbC1jbGlwLXJvdGF0ZSc6IDEsXG4gICAgJ2JhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUnOiAyLFxuICAgICdiYWxsLWNsaXAtcm90YXRlLXB1bHNlJzogMixcbiAgICAnYmFsbC1lbGFzdGljLWRvdHMnOiA1LFxuICAgICdiYWxsLWZhbGwnOiAzLFxuICAgICdiYWxsLWZ1c3Npb24nOiA0LFxuICAgICdiYWxsLWdyaWQtYmVhdCc6IDksXG4gICAgJ2JhbGwtZ3JpZC1wdWxzZSc6IDksXG4gICAgJ2JhbGwtbmV3dG9uLWNyYWRsZSc6IDQsXG4gICAgJ2JhbGwtcHVsc2UnOiAzLFxuICAgICdiYWxsLXB1bHNlLXJpc2UnOiA1LFxuICAgICdiYWxsLXB1bHNlLXN5bmMnOiAzLFxuICAgICdiYWxsLXJvdGF0ZSc6IDEsXG4gICAgJ2JhbGwtcnVubmluZy1kb3RzJzogNSxcbiAgICAnYmFsbC1zY2FsZSc6IDEsXG4gICAgJ2JhbGwtc2NhbGUtbXVsdGlwbGUnOiAzLFxuICAgICdiYWxsLXNjYWxlLXB1bHNlJzogMixcbiAgICAnYmFsbC1zY2FsZS1yaXBwbGUnOiAxLFxuICAgICdiYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSc6IDMsXG4gICAgJ2JhbGwtc3Bpbic6IDgsXG4gICAgJ2JhbGwtc3Bpbi1jbG9ja3dpc2UnOiA4LFxuICAgICdiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUnOiA4LFxuICAgICdiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcnOiA4LFxuICAgICdiYWxsLXNwaW4tZmFkZSc6IDgsXG4gICAgJ2JhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nJzogOCxcbiAgICAnYmFsbC1zcGluLXJvdGF0ZSc6IDIsXG4gICAgJ2JhbGwtc3F1YXJlLWNsb2Nrd2lzZS1zcGluJzogOCxcbiAgICAnYmFsbC1zcXVhcmUtc3Bpbic6IDgsXG4gICAgJ2JhbGwtdHJpYW5nbGUtcGF0aCc6IDMsXG4gICAgJ2JhbGwtemlnLXphZyc6IDIsXG4gICAgJ2JhbGwtemlnLXphZy1kZWZsZWN0JzogMixcbiAgICAnY29nJzogMSxcbiAgICAnY3ViZS10cmFuc2l0aW9uJzogMixcbiAgICAnZmlyZSc6IDMsXG4gICAgJ2xpbmUtc2NhbGUnOiA1LFxuICAgICdsaW5lLXNjYWxlLXBhcnR5JzogNSxcbiAgICAnbGluZS1zY2FsZS1wdWxzZS1vdXQnOiA1LFxuICAgICdsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCc6IDUsXG4gICAgJ2xpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZSc6IDgsXG4gICAgJ2xpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZyc6IDgsXG4gICAgJ2xpbmUtc3Bpbi1mYWRlJzogOCxcbiAgICAnbGluZS1zcGluLWZhZGUtcm90YXRpbmcnOiA4LFxuICAgICdwYWNtYW4nOiA2LFxuICAgICdzcXVhcmUtamVsbHktYm94JzogMixcbiAgICAnc3F1YXJlLWxvYWRlcic6IDEsXG4gICAgJ3NxdWFyZS1zcGluJzogMSxcbiAgICAndGltZXInOiAxLFxuICAgICd0cmlhbmdsZS1za2V3LXNwaW4nOiAxXG59O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hTcGlubmVyU2VydmljZSB9IGZyb20gJy4vbmd4LXNwaW5uZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExPQURFUlMgfSBmcm9tICcuL25neC1zcGlubmVyLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtc3Bpbm5lcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImJsYWNrLW92ZXJsYXlcIiAqbmdJZj1cInNob3dTcGlubmVyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogYmRDb2xvcn1cIj5cbiAgICA8ZGl2IFtjbGFzc109XCJzcGlubmVyQ2xhc3NcIiBbc3R5bGUuY29sb3JdPVwiY29sb3JcIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaSBvZiBkaXZBcnJheVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibG9hZGluZy10ZXh0XCIgKm5nSWY9XCJzaG93U3Bpbm5lclwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIExvYWQgQXdlc29tZSB2MS4xLjAgKGh0dHA6Ly9naXRodWIuZGFuaWVsY2FyZG9zby5uZXQvbG9hZC1hd2Vzb21lLylcbiAqIENvcHlyaWdodCAyMDE1IERhbmllbCBDYXJkb3NvIDxARGFuaWVsQ2FyZG9zbz5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICovLmxhLWJhbGwtOGJpdHMsLmxhLWJhbGwtOGJpdHM+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC04Yml0c3tkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MTJweDtoZWlnaHQ6MTJweH0ubGEtYmFsbC04Yml0cy5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtOGJpdHM+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7d2lkdGg6NHB4O2hlaWdodDo0cHg7Ym9yZGVyLXJhZGl1czowO29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMTAwJSwxMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDEwMCUsMTAwJSk7LXdlYmtpdC1hbmltYXRpb246MXMgaW5maW5pdGUgYmFsbC04Yml0czthbmltYXRpb246MXMgaW5maW5pdGUgYmFsbC04Yml0c30ubGEtYmFsbC04Yml0cz5kaXY6bnRoLWNoaWxkKDEpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uOTM3NXM7YW5pbWF0aW9uLWRlbGF5Oi0uOTM3NXM7dG9wOi0xMDAlO2xlZnQ6MH0ubGEtYmFsbC04Yml0cz5kaXY6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uODc1czthbmltYXRpb24tZGVsYXk6LS44NzVzO3RvcDotMTAwJTtsZWZ0OjMzLjMzMzMzMzMzMzMlfS5sYS1iYWxsLThiaXRzPmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS44MTI1czthbmltYXRpb24tZGVsYXk6LS44MTI1czt0b3A6LTY2LjY2NjY2NjY2NjclO2xlZnQ6NjYuNjY2NjY2NjY2NyV9LmxhLWJhbGwtOGJpdHM+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjc1czthbmltYXRpb24tZGVsYXk6LS43NXM7dG9wOi0zMy4zMzMzMzMzMzMzJTtsZWZ0OjEwMCV9LmxhLWJhbGwtOGJpdHM+ZGl2Om50aC1jaGlsZCg1KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjY4NzVzO2FuaW1hdGlvbi1kZWxheTotLjY4NzVzO3RvcDowO2xlZnQ6MTAwJX0ubGEtYmFsbC04Yml0cz5kaXY6bnRoLWNoaWxkKDYpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNjI1czthbmltYXRpb24tZGVsYXk6LS42MjVzO3RvcDozMy4zMzMzMzMzMzMzJTtsZWZ0OjEwMCV9LmxhLWJhbGwtOGJpdHM+ZGl2Om50aC1jaGlsZCg3KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjU2MjVzO2FuaW1hdGlvbi1kZWxheTotLjU2MjVzO3RvcDo2Ni42NjY2NjY2NjY3JTtsZWZ0OjY2LjY2NjY2NjY2NjclfS5sYS1iYWxsLThiaXRzPmRpdjpudGgtY2hpbGQoOCl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS41czthbmltYXRpb24tZGVsYXk6LS41czt0b3A6MTAwJTtsZWZ0OjMzLjMzMzMzMzMzMzMlfS5sYS1iYWxsLThiaXRzPmRpdjpudGgtY2hpbGQoOSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS40Mzc1czthbmltYXRpb24tZGVsYXk6LS40Mzc1czt0b3A6MTAwJTtsZWZ0OjB9LmxhLWJhbGwtOGJpdHM+ZGl2Om50aC1jaGlsZCgxMCl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4zNzVzO2FuaW1hdGlvbi1kZWxheTotLjM3NXM7dG9wOjEwMCU7bGVmdDotMzMuMzMzMzMzMzMzMyV9LmxhLWJhbGwtOGJpdHM+ZGl2Om50aC1jaGlsZCgxMSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4zMTI1czthbmltYXRpb24tZGVsYXk6LS4zMTI1czt0b3A6NjYuNjY2NjY2NjY2NyU7bGVmdDotNjYuNjY2NjY2NjY2NyV9LmxhLWJhbGwtOGJpdHM+ZGl2Om50aC1jaGlsZCgxMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMjVzO3RvcDozMy4zMzMzMzMzMzMzJTtsZWZ0Oi0xMDAlfS5sYS1iYWxsLThiaXRzPmRpdjpudGgtY2hpbGQoMTMpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMTg3NXM7YW5pbWF0aW9uLWRlbGF5Oi0uMTg3NXM7dG9wOjA7bGVmdDotMTAwJX0ubGEtYmFsbC04Yml0cz5kaXY6bnRoLWNoaWxkKDE0KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMTI1czt0b3A6LTMzLjMzMzMzMzMzMzMlO2xlZnQ6LTEwMCV9LmxhLWJhbGwtOGJpdHM+ZGl2Om50aC1jaGlsZCgxNSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4wNjI1czthbmltYXRpb24tZGVsYXk6LS4wNjI1czt0b3A6LTY2LjY2NjY2NjY2NjclO2xlZnQ6LTY2LjY2NjY2NjY2NjclfS5sYS1iYWxsLThiaXRzPmRpdjpudGgtY2hpbGQoMTYpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjBzO2FuaW1hdGlvbi1kZWxheTowczt0b3A6LTEwMCU7bGVmdDotMzMuMzMzMzMzMzMzMyV9LmxhLWJhbGwtOGJpdHMubGEtc217d2lkdGg6NnB4O2hlaWdodDo2cHh9LmxhLWJhbGwtOGJpdHMubGEtc20+ZGl2e3dpZHRoOjJweDtoZWlnaHQ6MnB4fS5sYS1iYWxsLThiaXRzLmxhLTJ4e3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHh9LmxhLWJhbGwtOGJpdHMubGEtMng+ZGl2e3dpZHRoOjhweDtoZWlnaHQ6OHB4fS5sYS1iYWxsLThiaXRzLmxhLTN4e3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9LmxhLWJhbGwtOGJpdHMubGEtM3g+ZGl2e3dpZHRoOjEycHg7aGVpZ2h0OjEycHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtOGJpdHN7MCUsNTAle29wYWNpdHk6MX01MSV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGJhbGwtOGJpdHN7MCUsNTAle29wYWNpdHk6MX01MSV7b3BhY2l0eTowfX0ubGEtYmFsbC1hdG9tLC5sYS1iYWxsLWF0b20+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1hdG9te2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLWF0b20ubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLWF0b20+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yfS5sYS1iYWxsLWF0b20+ZGl2Om50aC1jaGlsZCgxKXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3otaW5kZXg6MTt3aWR0aDo2MCU7aGVpZ2h0OjYwJTtiYWNrZ3JvdW5kOiNhYWE7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTstd2Via2l0LWFuaW1hdGlvbjo0LjVzIGxpbmVhciBpbmZpbml0ZSBiYWxsLWF0b20tc2hyaW5rO2FuaW1hdGlvbjo0LjVzIGxpbmVhciBpbmZpbml0ZSBiYWxsLWF0b20tc2hyaW5rfS5sYS1iYWxsLWF0b20+ZGl2Om5vdCg6bnRoLWNoaWxkKDEpKXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7ei1pbmRleDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDowIDA7LXdlYmtpdC1hbmltYXRpb246MS41cyBzdGVwcygyLGVuZCkgaW5maW5pdGUgYmFsbC1hdG9tLXppbmRleDthbmltYXRpb246MS41cyBzdGVwcygyLGVuZCkgaW5maW5pdGUgYmFsbC1hdG9tLXppbmRleH0ubGEtYmFsbC1hdG9tPmRpdjpub3QoOm50aC1jaGlsZCgxKSk6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O21hcmdpbi10b3A6LTVweDttYXJnaW4tbGVmdDotNXB4O2NvbnRlbnQ6XCJcIjtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjtib3JkZXItcmFkaXVzOjUwJTtvcGFjaXR5Oi43NTstd2Via2l0LWFuaW1hdGlvbjoxLjVzIGluZmluaXRlIGJhbGwtYXRvbS1wb3NpdGlvbiwxLjVzIGluZmluaXRlIGJhbGwtYXRvbS1zaXplO2FuaW1hdGlvbjoxLjVzIGluZmluaXRlIGJhbGwtYXRvbS1wb3NpdGlvbiwxLjVzIGluZmluaXRlIGJhbGwtYXRvbS1zaXplfS5sYS1iYWxsLWF0b20+ZGl2Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouNzVzO2FuaW1hdGlvbi1kZWxheTouNzVzfS5sYS1iYWxsLWF0b20+ZGl2Om50aC1jaGlsZCgyKTpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHMsLTEuMTI1czthbmltYXRpb24tZGVsYXk6MHMsLTEuMTI1c30ubGEtYmFsbC1hdG9tPmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEyMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMjBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMjVzO2FuaW1hdGlvbi1kZWxheTotLjI1c30ubGEtYmFsbC1hdG9tPmRpdjpudGgtY2hpbGQoMyk6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xcywtLjc1czthbmltYXRpb24tZGVsYXk6LTFzLC0uNzVzfS5sYS1iYWxsLWF0b20+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjQwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI0MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjI1czthbmltYXRpb24tZGVsYXk6LjI1c30ubGEtYmFsbC1hdG9tPmRpdjpudGgtY2hpbGQoNCk6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNXMsLTEyNW1zO2FuaW1hdGlvbi1kZWxheTotLjVzLC0xMjVtc30ubGEtYmFsbC1hdG9tLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtYXRvbS5sYS1zbT5kaXY6bm90KDpudGgtY2hpbGQoMSkpOmJlZm9yZXt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW4tdG9wOi0ycHg7bWFyZ2luLWxlZnQ6LTJweH0ubGEtYmFsbC1hdG9tLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtYXRvbS5sYS0yeD5kaXY6bm90KDpudGgtY2hpbGQoMSkpOmJlZm9yZXt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O21hcmdpbi10b3A6LTEwcHg7bWFyZ2luLWxlZnQ6LTEwcHh9LmxhLWJhbGwtYXRvbS5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1iYWxsLWF0b20ubGEtM3g+ZGl2Om5vdCg6bnRoLWNoaWxkKDEpKTpiZWZvcmV7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDttYXJnaW4tdG9wOi0xNXB4O21hcmdpbi1sZWZ0Oi0xNXB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWF0b20tcG9zaXRpb257NTAle3RvcDoxMDAlO2xlZnQ6MTAwJX19QGtleWZyYW1lcyBiYWxsLWF0b20tcG9zaXRpb257NTAle3RvcDoxMDAlO2xlZnQ6MTAwJX19QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtYXRvbS1zaXplezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSwuNSk7dHJhbnNmb3JtOnNjYWxlKC41LC41KX19QGtleWZyYW1lcyBiYWxsLWF0b20tc2l6ZXs1MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUsLjUpO3RyYW5zZm9ybTpzY2FsZSguNSwuNSl9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWF0b20temluZGV4ezUwJXt6LWluZGV4OjEwfX1Aa2V5ZnJhbWVzIGJhbGwtYXRvbS16aW5kZXh7NTAle3otaW5kZXg6MTB9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWF0b20tc2hyaW5rezUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSguOCwuOCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKC44LC44KX19QGtleWZyYW1lcyBiYWxsLWF0b20tc2hyaW5rezUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSguOCwuOCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKC44LC44KX19LmxhLWJhbGwtYmVhdCwubGEtYmFsbC1iZWF0PmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtYmVhdHtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6NTRweDtoZWlnaHQ6MThweH0ubGEtYmFsbC1iZWF0LmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1iZWF0PmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O21hcmdpbjo0cHg7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOi43cyBsaW5lYXIgLS4xNXMgaW5maW5pdGUgYmFsbC1iZWF0O2FuaW1hdGlvbjouN3MgbGluZWFyIC0uMTVzIGluZmluaXRlIGJhbGwtYmVhdH0ubGEtYmFsbC1iZWF0PmRpdjpudGgtY2hpbGQoMm4tMSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS41czthbmltYXRpb24tZGVsYXk6LS41c30ubGEtYmFsbC1iZWF0LmxhLXNte3dpZHRoOjI2cHg7aGVpZ2h0OjhweH0ubGEtYmFsbC1iZWF0LmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW46MnB4fS5sYS1iYWxsLWJlYXQubGEtMnh7d2lkdGg6MTA4cHg7aGVpZ2h0OjM2cHh9LmxhLWJhbGwtYmVhdC5sYS0yeD5kaXZ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDttYXJnaW46OHB4fS5sYS1iYWxsLWJlYXQubGEtM3h7d2lkdGg6MTYycHg7aGVpZ2h0OjU0cHh9LmxhLWJhbGwtYmVhdC5sYS0zeD5kaXZ7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDttYXJnaW46MTJweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1iZWF0ezUwJXtvcGFjaXR5Oi4yOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43NSk7dHJhbnNmb3JtOnNjYWxlKC43NSl9MTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIGJhbGwtYmVhdHs1MCV7b3BhY2l0eTouMjstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNzUpO3RyYW5zZm9ybTpzY2FsZSguNzUpfTEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LmxhLWJhbGwtY2lyY3VzLC5sYS1iYWxsLWNpcmN1cz5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLWNpcmN1c3tkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtYmFsbC1jaXJjdXMubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLWNpcmN1cz5kaXZ7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDotMTAwJTtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czoxMDAlO29wYWNpdHk6LjU7LXdlYmtpdC1hbmltYXRpb246Mi41cyBjdWJpYy1iZXppZXIoLjI1LDAsLjc1LDEpIGluZmluaXRlIGJhbGwtY2lyY3VzLXBvc2l0aW9uLDIuNXMgY3ViaWMtYmV6aWVyKC4yNSwwLC43NSwxKSBpbmZpbml0ZSBiYWxsLWNpcmN1cy1zaXplO2FuaW1hdGlvbjoyLjVzIGN1YmljLWJlemllciguMjUsMCwuNzUsMSkgaW5maW5pdGUgYmFsbC1jaXJjdXMtcG9zaXRpb24sMi41cyBjdWJpYy1iZXppZXIoLjI1LDAsLjc1LDEpIGluZmluaXRlIGJhbGwtY2lyY3VzLXNpemV9LmxhLWJhbGwtY2lyY3VzPmRpdjpudGgtY2hpbGQoMSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHMsLS41czthbmltYXRpb24tZGVsYXk6MHMsLS41c30ubGEtYmFsbC1jaXJjdXM+ZGl2Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjVzLC0xczthbmltYXRpb24tZGVsYXk6LS41cywtMXN9LmxhLWJhbGwtY2lyY3VzPmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTFzLC0xLjVzO2FuaW1hdGlvbi1kZWxheTotMXMsLTEuNXN9LmxhLWJhbGwtY2lyY3VzPmRpdjpudGgtY2hpbGQoNCl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNXMsLTJzO2FuaW1hdGlvbi1kZWxheTotMS41cywtMnN9LmxhLWJhbGwtY2lyY3VzPmRpdjpudGgtY2hpbGQoNSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTJzLC0yLjVzO2FuaW1hdGlvbi1kZWxheTotMnMsLTIuNXN9LmxhLWJhbGwtY2lyY3VzLmxhLXNtLC5sYS1iYWxsLWNpcmN1cy5sYS1zbT5kaXZ7d2lkdGg6OHB4O2hlaWdodDo4cHh9LmxhLWJhbGwtY2lyY3VzLmxhLTJ4LC5sYS1iYWxsLWNpcmN1cy5sYS0yeD5kaXZ7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC1jaXJjdXMubGEtM3gsLmxhLWJhbGwtY2lyY3VzLmxhLTN4PmRpdnt3aWR0aDo0OHB4O2hlaWdodDo0OHB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWNpcmN1cy1wb3NpdGlvbns1MCV7bGVmdDoxMDAlfX1Aa2V5ZnJhbWVzIGJhbGwtY2lyY3VzLXBvc2l0aW9uezUwJXtsZWZ0OjEwMCV9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWNpcmN1cy1zaXplezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMywuMyk7dHJhbnNmb3JtOnNjYWxlKC4zLC4zKX19QGtleWZyYW1lcyBiYWxsLWNpcmN1cy1zaXplezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMywuMyk7dHJhbnNmb3JtOnNjYWxlKC4zLC4zKX19LmxhLWJhbGwtY2xpbWJpbmctZG90LC5sYS1iYWxsLWNsaW1iaW5nLWRvdD5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLWNsaW1iaW5nLWRvdHtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6NDJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC1jbGltYmluZy1kb3QubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLWNsaW1iaW5nLWRvdD5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3J9LmxhLWJhbGwtY2xpbWJpbmctZG90PmRpdjpudGgtY2hpbGQoMSl7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjMyJTtsZWZ0OjE4JTt3aWR0aDoxNHB4O2hlaWdodDoxNHB4O2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b207LXdlYmtpdC1hbmltYXRpb246LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtY2xpbWJpbmctZG90LWp1bXA7YW5pbWF0aW9uOi42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLWNsaW1iaW5nLWRvdC1qdW1wfS5sYS1iYWxsLWNsaW1iaW5nLWRvdD5kaXY6bm90KDpudGgtY2hpbGQoMSkpe3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7d2lkdGg6MTRweDtoZWlnaHQ6MnB4O2JvcmRlci1yYWRpdXM6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjAlLDApOy13ZWJraXQtYW5pbWF0aW9uOjEuOHMgbGluZWFyIGluZmluaXRlIGJhbGwtY2xpbWJpbmctZG90LXN0ZXBzO2FuaW1hdGlvbjoxLjhzIGxpbmVhciBpbmZpbml0ZSBiYWxsLWNsaW1iaW5nLWRvdC1zdGVwc30ubGEtYmFsbC1jbGltYmluZy1kb3Q+ZGl2Om5vdCg6bnRoLWNoaWxkKDEpKTpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHM7YW5pbWF0aW9uLWRlbGF5OjBzfS5sYS1iYWxsLWNsaW1iaW5nLWRvdD5kaXY6bm90KDpudGgtY2hpbGQoMSkpOm50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjZzO2FuaW1hdGlvbi1kZWxheTotLjZzfS5sYS1iYWxsLWNsaW1iaW5nLWRvdD5kaXY6bm90KDpudGgtY2hpbGQoMSkpOm50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yczthbmltYXRpb24tZGVsYXk6LTEuMnN9LmxhLWJhbGwtY2xpbWJpbmctZG90LmxhLXNte3dpZHRoOjIwcHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtY2xpbWJpbmctZG90LmxhLXNtPmRpdjpudGgtY2hpbGQoMSl7d2lkdGg6NnB4O2hlaWdodDo2cHh9LmxhLWJhbGwtY2xpbWJpbmctZG90LmxhLXNtPmRpdjpub3QoOm50aC1jaGlsZCgxKSl7d2lkdGg6NnB4O2hlaWdodDoxcHh9LmxhLWJhbGwtY2xpbWJpbmctZG90LmxhLTJ4e3dpZHRoOjg0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtY2xpbWJpbmctZG90LmxhLTJ4PmRpdjpudGgtY2hpbGQoMSl7d2lkdGg6MjhweDtoZWlnaHQ6MjhweH0ubGEtYmFsbC1jbGltYmluZy1kb3QubGEtMng+ZGl2Om5vdCg6bnRoLWNoaWxkKDEpKXt3aWR0aDoyOHB4O2hlaWdodDo0cHh9LmxhLWJhbGwtY2xpbWJpbmctZG90LmxhLTN4e3dpZHRoOjEyNnB4O2hlaWdodDo5NnB4fS5sYS1iYWxsLWNsaW1iaW5nLWRvdC5sYS0zeD5kaXY6bnRoLWNoaWxkKDEpe3dpZHRoOjQycHg7aGVpZ2h0OjQycHh9LmxhLWJhbGwtY2xpbWJpbmctZG90LmxhLTN4PmRpdjpub3QoOm50aC1jaGlsZCgxKSl7d2lkdGg6NDJweDtoZWlnaHQ6NnB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWNsaW1iaW5nLWRvdC1qdW1wezAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwuNyk7dHJhbnNmb3JtOnNjYWxlKDEsLjcpfTIwJSw4MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43LDEuMik7dHJhbnNmb3JtOnNjYWxlKC43LDEuMil9NDAlLDQ2JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpO3RyYW5zZm9ybTpzY2FsZSgxLDEpfTUwJXtib3R0b206MTI1JX19QGtleWZyYW1lcyBiYWxsLWNsaW1iaW5nLWRvdC1qdW1wezAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwuNyk7dHJhbnNmb3JtOnNjYWxlKDEsLjcpfTIwJSw4MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43LDEuMik7dHJhbnNmb3JtOnNjYWxlKC43LDEuMil9NDAlLDQ2JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpO3RyYW5zZm9ybTpzY2FsZSgxLDEpfTUwJXtib3R0b206MTI1JX19QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtY2xpbWJpbmctZG90LXN0ZXBzezAle3RvcDowO3JpZ2h0OjA7b3BhY2l0eTowfTUwJXtvcGFjaXR5OjF9MTAwJXt0b3A6MTAwJTtyaWdodDoxMDAlO29wYWNpdHk6MH19QGtleWZyYW1lcyBiYWxsLWNsaW1iaW5nLWRvdC1zdGVwc3swJXt0b3A6MDtyaWdodDowO29wYWNpdHk6MH01MCV7b3BhY2l0eToxfTEwMCV7dG9wOjEwMCU7cmlnaHQ6MTAwJTtvcGFjaXR5OjB9fS5sYS1iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlLC5sYS1iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGV7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JvcmRlcjoycHggc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7YmFja2dyb3VuZDowIDA7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUtcm90YXRlO2FuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlLXJvdGF0ZX0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZT5kaXY6Zmlyc3QtY2hpbGR7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDtib3JkZXItcmlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQtY29sb3I6dHJhbnNwYXJlbnR9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGU+ZGl2Omxhc3QtY2hpbGR7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtib3JkZXItdG9wLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1ib3R0b20tY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246LjVzO2FuaW1hdGlvbi1kdXJhdGlvbjouNXM7LXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOnJldmVyc2U7YW5pbWF0aW9uLWRpcmVjdGlvbjpyZXZlcnNlfS5sYS1iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtc20+ZGl2e2JvcmRlci13aWR0aDoxcHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtc20+ZGl2OmZpcnN0LWNoaWxke3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtc20+ZGl2Omxhc3QtY2hpbGR7d2lkdGg6OHB4O2hlaWdodDo4cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZS5sYS0yeD5kaXZ7Ym9yZGVyLXdpZHRoOjRweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZS5sYS0yeD5kaXY6Zmlyc3QtY2hpbGR7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZS5sYS0yeD5kaXY6bGFzdC1jaGlsZHt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtM3g+ZGl2e2JvcmRlci13aWR0aDo2cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtM3g+ZGl2OmZpcnN0LWNoaWxke3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUubGEtM3g+ZGl2Omxhc3QtY2hpbGR7d2lkdGg6NDhweDtoZWlnaHQ6NDhweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZS1yb3RhdGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMTgwZGVnKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBiYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlLXJvdGF0ZXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgxODBkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgzNjBkZWcpfX0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSwubGEtYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZT5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLWNsaXAtcm90YXRlLXB1bHNle2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLWNsaXAtcm90YXRlLXB1bHNlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTtib3JkZXItcmFkaXVzOjEwMCV9LmxhLWJhbGwtY2xpcC1yb3RhdGUtcHVsc2U+ZGl2OmZpcnN0LWNoaWxke3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjMycHg7aGVpZ2h0OjMycHg7YmFja2dyb3VuZDowIDA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoycHg7Ym9yZGVyLXJpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1sZWZ0LWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYW5pbWF0aW9uOjFzIGN1YmljLWJlemllciguMDksLjU3LC40OSwuOSkgaW5maW5pdGUgYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS1yb3RhdGU7YW5pbWF0aW9uOjFzIGN1YmljLWJlemllciguMDksLjU3LC40OSwuOSkgaW5maW5pdGUgYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS1yb3RhdGV9LmxhLWJhbGwtY2xpcC1yb3RhdGUtcHVsc2U+ZGl2Omxhc3QtY2hpbGR7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDstd2Via2l0LWFuaW1hdGlvbjoxcyBjdWJpYy1iZXppZXIoLjA5LC41NywuNDksLjkpIGluZmluaXRlIGJhbGwtY2xpcC1yb3RhdGUtcHVsc2Utc2NhbGU7YW5pbWF0aW9uOjFzIGN1YmljLWJlemllciguMDksLjU3LC40OSwuOSkgaW5maW5pdGUgYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS1zY2FsZX0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS5sYS1zbXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1iYWxsLWNsaXAtcm90YXRlLXB1bHNlLmxhLXNtPmRpdjpmaXJzdC1jaGlsZHt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JvcmRlci13aWR0aDoxcHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtcHVsc2UubGEtc20+ZGl2Omxhc3QtY2hpbGR7d2lkdGg6OHB4O2hlaWdodDo4cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtcHVsc2UubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS5sYS0yeD5kaXY6Zmlyc3QtY2hpbGR7d2lkdGg6NjRweDtoZWlnaHQ6NjRweDtib3JkZXItd2lkdGg6NHB4fS5sYS1iYWxsLWNsaXAtcm90YXRlLXB1bHNlLmxhLTJ4PmRpdjpsYXN0LWNoaWxke3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUtcHVsc2UubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS5sYS0zeD5kaXY6Zmlyc3QtY2hpbGR7d2lkdGg6OTZweDtoZWlnaHQ6OTZweDtib3JkZXItd2lkdGg6NnB4fS5sYS1iYWxsLWNsaXAtcm90YXRlLXB1bHNlLmxhLTN4PmRpdjpsYXN0LWNoaWxke3dpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtY2xpcC1yb3RhdGUtcHVsc2Utcm90YXRlezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDE4MGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS1yb3RhdGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMTgwZGVnKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMzYwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtY2xpcC1yb3RhdGUtcHVsc2Utc2NhbGV7MCUsMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEpfTMwJXtvcGFjaXR5Oi4zOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKC4xNSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKC4xNSl9fUBrZXlmcmFtZXMgYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZS1zY2FsZXswJSwxMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMSl9MzAle29wYWNpdHk6LjM7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoLjE1KTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoLjE1KX19LmxhLWJhbGwtY2xpcC1yb3RhdGUsLmxhLWJhbGwtY2xpcC1yb3RhdGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1jbGlwLXJvdGF0ZXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtY2xpcC1yb3RhdGU+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7Ym9yZGVyOjJweCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDtiYWNrZ3JvdW5kOjAgMDtib3JkZXItYm90dG9tLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjouNzVzIGxpbmVhciBpbmZpbml0ZSBiYWxsLWNsaXAtcm90YXRlO2FuaW1hdGlvbjouNzVzIGxpbmVhciBpbmZpbml0ZSBiYWxsLWNsaXAtcm90YXRlfS5sYS1iYWxsLWNsaXAtcm90YXRlLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUubGEtc20+ZGl2e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyLXdpZHRoOjFweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS5sYS0yeHt3aWR0aDo2NHB4O2hlaWdodDo2NHB4fS5sYS1iYWxsLWNsaXAtcm90YXRlLmxhLTJ4PmRpdnt3aWR0aDo2NHB4O2hlaWdodDo2NHB4O2JvcmRlci13aWR0aDo0cHh9LmxhLWJhbGwtY2xpcC1yb3RhdGUubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH0ubGEtYmFsbC1jbGlwLXJvdGF0ZS5sYS0zeD5kaXZ7d2lkdGg6OTZweDtoZWlnaHQ6OTZweDtib3JkZXItd2lkdGg6NnB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWNsaXAtcm90YXRlezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgYmFsbC1jbGlwLXJvdGF0ZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0ubGEtYmFsbC1lbGFzdGljLWRvdHMsLmxhLWJhbGwtZWxhc3RpYy1kb3RzPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtZWxhc3RpYy1kb3Rze2Rpc3BsYXk6YmxvY2s7Y29sb3I6I2ZmZjt3aWR0aDoxMjBweDtoZWlnaHQ6MTBweDtmb250LXNpemU6MDt0ZXh0LWFsaWduOmNlbnRlcn0ubGEtYmFsbC1lbGFzdGljLWRvdHMubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLWVsYXN0aWMtZG90cz5kaXZ7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGluZmluaXRlIGJhbGwtZWxhc3RpYy1kb3RzLWFuaW07YW5pbWF0aW9uOjFzIGluZmluaXRlIGJhbGwtZWxhc3RpYy1kb3RzLWFuaW19LmxhLWJhbGwtZWxhc3RpYy1kb3RzLmxhLXNte3dpZHRoOjYwcHg7aGVpZ2h0OjRweH0ubGEtYmFsbC1lbGFzdGljLWRvdHMubGEtc20+ZGl2e3dpZHRoOjRweDtoZWlnaHQ6NHB4fS5sYS1iYWxsLWVsYXN0aWMtZG90cy5sYS0yeHt3aWR0aDoyNDBweDtoZWlnaHQ6MjBweH0ubGEtYmFsbC1lbGFzdGljLWRvdHMubGEtMng+ZGl2e3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHh9LmxhLWJhbGwtZWxhc3RpYy1kb3RzLmxhLTN4e3dpZHRoOjM2MHB4O2hlaWdodDozMHB4fS5sYS1iYWxsLWVsYXN0aWMtZG90cy5sYS0zeD5kaXZ7d2lkdGg6MzBweDtoZWlnaHQ6MzBweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1lbGFzdGljLWRvdHMtYW5pbXswJSwxMDAle21hcmdpbjowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7bWFyZ2luOjAgNSU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjY1KTt0cmFuc2Zvcm06c2NhbGUoLjY1KX19QGtleWZyYW1lcyBiYWxsLWVsYXN0aWMtZG90cy1hbmltezAlLDEwMCV7bWFyZ2luOjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTUwJXttYXJnaW46MCA1JTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNjUpO3RyYW5zZm9ybTpzY2FsZSguNjUpfX0ubGEtYmFsbC1mYWxsLC5sYS1iYWxsLWZhbGw+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1mYWxse2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDo1NHB4O2hlaWdodDoxOHB4fS5sYS1iYWxsLWZhbGwubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLWZhbGw+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7bWFyZ2luOjRweDtib3JkZXItcmFkaXVzOjEwMCU7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtZmFsbDthbmltYXRpb246MXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC1mYWxsfS5sYS1iYWxsLWZhbGw+ZGl2Om50aC1jaGlsZCgxKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjJzO2FuaW1hdGlvbi1kZWxheTotLjJzfS5sYS1iYWxsLWZhbGw+ZGl2Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjFzO2FuaW1hdGlvbi1kZWxheTotLjFzfS5sYS1iYWxsLWZhbGw+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTowczthbmltYXRpb24tZGVsYXk6MHN9LmxhLWJhbGwtZmFsbC5sYS1zbXt3aWR0aDoyNnB4O2hlaWdodDo4cHh9LmxhLWJhbGwtZmFsbC5sYS1zbT5kaXZ7d2lkdGg6NHB4O2hlaWdodDo0cHg7bWFyZ2luOjJweH0ubGEtYmFsbC1mYWxsLmxhLTJ4e3dpZHRoOjEwOHB4O2hlaWdodDozNnB4fS5sYS1iYWxsLWZhbGwubGEtMng+ZGl2e3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7bWFyZ2luOjhweH0ubGEtYmFsbC1mYWxsLmxhLTN4e3dpZHRoOjE2MnB4O2hlaWdodDo1NHB4fS5sYS1iYWxsLWZhbGwubGEtM3g+ZGl2e3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7bWFyZ2luOjEycHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtZmFsbHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTQ1JSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTE0NSUpfTEwJSw5MCV7b3BhY2l0eTouNX0yMCUsODAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApfTEwMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTQ1JSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTQ1JSl9fUBrZXlmcmFtZXMgYmFsbC1mYWxsezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xNDUlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTQ1JSl9MTAlLDkwJXtvcGFjaXR5Oi41fTIwJSw4MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCl9MTAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxNDUlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxNDUlKX19LmxhLWJhbGwtZnVzc2lvbiwubGEtYmFsbC1mdXNzaW9uPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtZnVzc2lvbntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6OHB4O2hlaWdodDo4cHh9LmxhLWJhbGwtZnVzc2lvbi5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtZnVzc2lvbj5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTJweDtoZWlnaHQ6MTJweDtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpOy13ZWJraXQtYW5pbWF0aW9uOjFzIGluZmluaXRlIGJhbGwtZnVzc2lvbi1iYWxsMTthbmltYXRpb246MXMgaW5maW5pdGUgYmFsbC1mdXNzaW9uLWJhbGwxfS5sYS1iYWxsLWZ1c3Npb24+ZGl2Om50aC1jaGlsZCgxKXt0b3A6MDtsZWZ0OjUwJTt6LWluZGV4OjF9LmxhLWJhbGwtZnVzc2lvbj5kaXY6bnRoLWNoaWxkKDIpe3RvcDo1MCU7bGVmdDoxMDAlO3otaW5kZXg6Mjstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJhbGwtZnVzc2lvbi1iYWxsMjthbmltYXRpb24tbmFtZTpiYWxsLWZ1c3Npb24tYmFsbDJ9LmxhLWJhbGwtZnVzc2lvbj5kaXY6bnRoLWNoaWxkKDMpe3RvcDoxMDAlO2xlZnQ6NTAlO3otaW5kZXg6MTstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJhbGwtZnVzc2lvbi1iYWxsMzthbmltYXRpb24tbmFtZTpiYWxsLWZ1c3Npb24tYmFsbDN9LmxhLWJhbGwtZnVzc2lvbj5kaXY6bnRoLWNoaWxkKDQpe3RvcDo1MCU7bGVmdDowO3otaW5kZXg6Mjstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJhbGwtZnVzc2lvbi1iYWxsNDthbmltYXRpb24tbmFtZTpiYWxsLWZ1c3Npb24tYmFsbDR9LmxhLWJhbGwtZnVzc2lvbi5sYS1zbXt3aWR0aDo0cHg7aGVpZ2h0OjRweH0ubGEtYmFsbC1mdXNzaW9uLmxhLXNtPmRpdnt3aWR0aDo2cHg7aGVpZ2h0OjZweH0ubGEtYmFsbC1mdXNzaW9uLmxhLTJ4e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtZnVzc2lvbi5sYS0yeD5kaXYsLmxhLWJhbGwtZnVzc2lvbi5sYS0zeHt3aWR0aDoyNHB4O2hlaWdodDoyNHB4fS5sYS1iYWxsLWZ1c3Npb24ubGEtM3g+ZGl2e3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtZnVzc2lvbi1iYWxsMXswJXtvcGFjaXR5Oi4zNX01MCV7dG9wOi0xMDAlO2xlZnQ6MjAwJTtvcGFjaXR5OjF9MTAwJXt0b3A6NTAlO2xlZnQ6MTAwJTt6LWluZGV4OjI7b3BhY2l0eTouMzV9fUBrZXlmcmFtZXMgYmFsbC1mdXNzaW9uLWJhbGwxezAle29wYWNpdHk6LjM1fTUwJXt0b3A6LTEwMCU7bGVmdDoyMDAlO29wYWNpdHk6MX0xMDAle3RvcDo1MCU7bGVmdDoxMDAlO3otaW5kZXg6MjtvcGFjaXR5Oi4zNX19QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtZnVzc2lvbi1iYWxsMnswJXtvcGFjaXR5Oi4zNX01MCV7dG9wOjIwMCU7bGVmdDoyMDAlO29wYWNpdHk6MX0xMDAle3RvcDoxMDAlO2xlZnQ6NTAlO3otaW5kZXg6MTtvcGFjaXR5Oi4zNX19QGtleWZyYW1lcyBiYWxsLWZ1c3Npb24tYmFsbDJ7MCV7b3BhY2l0eTouMzV9NTAle3RvcDoyMDAlO2xlZnQ6MjAwJTtvcGFjaXR5OjF9MTAwJXt0b3A6MTAwJTtsZWZ0OjUwJTt6LWluZGV4OjE7b3BhY2l0eTouMzV9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWZ1c3Npb24tYmFsbDN7MCV7b3BhY2l0eTouMzV9NTAle3RvcDoyMDAlO2xlZnQ6LTEwMCU7b3BhY2l0eToxfTEwMCV7dG9wOjUwJTtsZWZ0OjA7ei1pbmRleDoyO29wYWNpdHk6LjM1fX1Aa2V5ZnJhbWVzIGJhbGwtZnVzc2lvbi1iYWxsM3swJXtvcGFjaXR5Oi4zNX01MCV7dG9wOjIwMCU7bGVmdDotMTAwJTtvcGFjaXR5OjF9MTAwJXt0b3A6NTAlO2xlZnQ6MDt6LWluZGV4OjI7b3BhY2l0eTouMzV9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLWZ1c3Npb24tYmFsbDR7MCV7b3BhY2l0eTouMzV9NTAle3RvcDotMTAwJTtsZWZ0Oi0xMDAlO29wYWNpdHk6MX0xMDAle3RvcDowO2xlZnQ6NTAlO3otaW5kZXg6MTtvcGFjaXR5Oi4zNX19QGtleWZyYW1lcyBiYWxsLWZ1c3Npb24tYmFsbDR7MCV7b3BhY2l0eTouMzV9NTAle3RvcDotMTAwJTtsZWZ0Oi0xMDAlO29wYWNpdHk6MX0xMDAle3RvcDowO2xlZnQ6NTAlO3otaW5kZXg6MTtvcGFjaXR5Oi4zNX19LmxhLWJhbGwtZ3JpZC1iZWF0LC5sYS1iYWxsLWdyaWQtYmVhdD5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLWdyaWQtYmVhdHtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzZweDtoZWlnaHQ6MzZweH0ubGEtYmFsbC1ncmlkLWJlYXQubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLWdyaWQtYmVhdD5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6OHB4O2hlaWdodDo4cHg7bWFyZ2luOjJweDtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpiYWxsLWdyaWQtYmVhdDthbmltYXRpb24tbmFtZTpiYWxsLWdyaWQtYmVhdDstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX0ubGEtYmFsbC1ncmlkLWJlYXQ+ZGl2Om50aC1jaGlsZCgxKXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNjVzO2FuaW1hdGlvbi1kdXJhdGlvbjouNjVzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4wM3M7YW5pbWF0aW9uLWRlbGF5Oi4wM3N9LmxhLWJhbGwtZ3JpZC1iZWF0PmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS4wMnM7YW5pbWF0aW9uLWR1cmF0aW9uOjEuMDJzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4wOXM7YW5pbWF0aW9uLWRlbGF5Oi4wOXN9LmxhLWJhbGwtZ3JpZC1iZWF0PmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS4wNnM7YW5pbWF0aW9uLWR1cmF0aW9uOjEuMDZzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNjlzO2FuaW1hdGlvbi1kZWxheTotLjY5c30ubGEtYmFsbC1ncmlkLWJlYXQ+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxLjVzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjVzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNDFzO2FuaW1hdGlvbi1kZWxheTotLjQxc30ubGEtYmFsbC1ncmlkLWJlYXQ+ZGl2Om50aC1jaGlsZCg1KXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxLjZzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjZzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4wNHM7YW5pbWF0aW9uLWRlbGF5Oi4wNHN9LmxhLWJhbGwtZ3JpZC1iZWF0PmRpdjpudGgtY2hpbGQoNil7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Ljg0czthbmltYXRpb24tZHVyYXRpb246Ljg0czstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouMDdzO2FuaW1hdGlvbi1kZWxheTouMDdzfS5sYS1iYWxsLWdyaWQtYmVhdD5kaXY6bnRoLWNoaWxkKDcpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi42OHM7YW5pbWF0aW9uLWR1cmF0aW9uOi42OHM7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42NnM7YW5pbWF0aW9uLWRlbGF5Oi0uNjZzfS5sYS1iYWxsLWdyaWQtYmVhdD5kaXY6bnRoLWNoaWxkKDgpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi45M3M7YW5pbWF0aW9uLWR1cmF0aW9uOi45M3M7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS43NnM7YW5pbWF0aW9uLWRlbGF5Oi0uNzZzfS5sYS1iYWxsLWdyaWQtYmVhdD5kaXY6bnRoLWNoaWxkKDkpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjEuMjRzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjI0czstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjc2czthbmltYXRpb24tZGVsYXk6LS43NnN9LmxhLWJhbGwtZ3JpZC1iZWF0LmxhLXNte3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHh9LmxhLWJhbGwtZ3JpZC1iZWF0LmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW46MXB4fS5sYS1iYWxsLWdyaWQtYmVhdC5sYS0yeHt3aWR0aDo3MnB4O2hlaWdodDo3MnB4fS5sYS1iYWxsLWdyaWQtYmVhdC5sYS0yeD5kaXZ7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDttYXJnaW46NHB4fS5sYS1iYWxsLWdyaWQtYmVhdC5sYS0zeHt3aWR0aDoxMDhweDtoZWlnaHQ6MTA4cHh9LmxhLWJhbGwtZ3JpZC1iZWF0LmxhLTN4PmRpdnt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O21hcmdpbjo2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtZ3JpZC1iZWF0ezAlLDEwMCV7b3BhY2l0eToxfTUwJXtvcGFjaXR5Oi4zNX19QGtleWZyYW1lcyBiYWxsLWdyaWQtYmVhdHswJSwxMDAle29wYWNpdHk6MX01MCV7b3BhY2l0eTouMzV9fS5sYS1iYWxsLWdyaWQtcHVsc2UsLmxhLWJhbGwtZ3JpZC1wdWxzZT5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLWdyaWQtcHVsc2V7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9LmxhLWJhbGwtZ3JpZC1wdWxzZS5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtZ3JpZC1wdWxzZT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6OHB4O2hlaWdodDo4cHg7bWFyZ2luOjJweDtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpiYWxsLWdyaWQtcHVsc2U7YW5pbWF0aW9uLW5hbWU6YmFsbC1ncmlkLXB1bHNlOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlfS5sYS1iYWxsLWdyaWQtcHVsc2U+ZGl2Om50aC1jaGlsZCgxKXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNjVzO2FuaW1hdGlvbi1kdXJhdGlvbjouNjVzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4wM3M7YW5pbWF0aW9uLWRlbGF5Oi4wM3N9LmxhLWJhbGwtZ3JpZC1wdWxzZT5kaXY6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjEuMDJzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjAyczstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouMDlzO2FuaW1hdGlvbi1kZWxheTouMDlzfS5sYS1iYWxsLWdyaWQtcHVsc2U+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxLjA2czthbmltYXRpb24tZHVyYXRpb246MS4wNnM7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42OXM7YW5pbWF0aW9uLWRlbGF5Oi0uNjlzfS5sYS1iYWxsLWdyaWQtcHVsc2U+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxLjVzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjVzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNDFzO2FuaW1hdGlvbi1kZWxheTotLjQxc30ubGEtYmFsbC1ncmlkLXB1bHNlPmRpdjpudGgtY2hpbGQoNSl7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS42czthbmltYXRpb24tZHVyYXRpb246MS42czstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouMDRzO2FuaW1hdGlvbi1kZWxheTouMDRzfS5sYS1iYWxsLWdyaWQtcHVsc2U+ZGl2Om50aC1jaGlsZCg2KXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouODRzO2FuaW1hdGlvbi1kdXJhdGlvbjouODRzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4wN3M7YW5pbWF0aW9uLWRlbGF5Oi4wN3N9LmxhLWJhbGwtZ3JpZC1wdWxzZT5kaXY6bnRoLWNoaWxkKDcpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi42OHM7YW5pbWF0aW9uLWR1cmF0aW9uOi42OHM7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42NnM7YW5pbWF0aW9uLWRlbGF5Oi0uNjZzfS5sYS1iYWxsLWdyaWQtcHVsc2U+ZGl2Om50aC1jaGlsZCg4KXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouOTNzO2FuaW1hdGlvbi1kdXJhdGlvbjouOTNzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNzZzO2FuaW1hdGlvbi1kZWxheTotLjc2c30ubGEtYmFsbC1ncmlkLXB1bHNlPmRpdjpudGgtY2hpbGQoOSl7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS4yNHM7YW5pbWF0aW9uLWR1cmF0aW9uOjEuMjRzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNzZzO2FuaW1hdGlvbi1kZWxheTotLjc2c30ubGEtYmFsbC1ncmlkLXB1bHNlLmxhLXNte3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHh9LmxhLWJhbGwtZ3JpZC1wdWxzZS5sYS1zbT5kaXZ7d2lkdGg6NHB4O2hlaWdodDo0cHg7bWFyZ2luOjFweH0ubGEtYmFsbC1ncmlkLXB1bHNlLmxhLTJ4e3dpZHRoOjcycHg7aGVpZ2h0OjcycHh9LmxhLWJhbGwtZ3JpZC1wdWxzZS5sYS0yeD5kaXZ7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDttYXJnaW46NHB4fS5sYS1iYWxsLWdyaWQtcHVsc2UubGEtM3h7d2lkdGg6MTA4cHg7aGVpZ2h0OjEwOHB4fS5sYS1iYWxsLWdyaWQtcHVsc2UubGEtM3g+ZGl2e3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bWFyZ2luOjZweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1ncmlkLXB1bHNlezAlLDEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7b3BhY2l0eTouMzU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQ1KTt0cmFuc2Zvcm06c2NhbGUoLjQ1KX19QGtleWZyYW1lcyBiYWxsLWdyaWQtcHVsc2V7MCUsMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTUwJXtvcGFjaXR5Oi4zNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNDUpO3RyYW5zZm9ybTpzY2FsZSguNDUpfX0ubGEtYmFsbC1uZXd0b24tY3JhZGxlLC5sYS1iYWxsLW5ld3Rvbi1jcmFkbGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1uZXd0b24tY3JhZGxle2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDo0MHB4O2hlaWdodDoxMHB4fS5sYS1iYWxsLW5ld3Rvbi1jcmFkbGUubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLW5ld3Rvbi1jcmFkbGU+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7Ym9yZGVyLXJhZGl1czoxMDAlfS5sYS1iYWxsLW5ld3Rvbi1jcmFkbGU+ZGl2OmZpcnN0LWNoaWxkey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7LXdlYmtpdC1hbmltYXRpb246MXMgZWFzZS1vdXQgaW5maW5pdGUgYmFsbC1uZXd0b24tY3JhZGxlLWxlZnQ7YW5pbWF0aW9uOjFzIGVhc2Utb3V0IGluZmluaXRlIGJhbGwtbmV3dG9uLWNyYWRsZS1sZWZ0fS5sYS1iYWxsLW5ld3Rvbi1jcmFkbGU+ZGl2Omxhc3QtY2hpbGR7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTstd2Via2l0LWFuaW1hdGlvbjoxcyBlYXNlLW91dCBpbmZpbml0ZSBiYWxsLW5ld3Rvbi1jcmFkbGUtcmlnaHQ7YW5pbWF0aW9uOjFzIGVhc2Utb3V0IGluZmluaXRlIGJhbGwtbmV3dG9uLWNyYWRsZS1yaWdodH0ubGEtYmFsbC1uZXd0b24tY3JhZGxlLmxhLXNte3dpZHRoOjIwcHg7aGVpZ2h0OjRweH0ubGEtYmFsbC1uZXd0b24tY3JhZGxlLmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweH0ubGEtYmFsbC1uZXd0b24tY3JhZGxlLmxhLTJ4e3dpZHRoOjgwcHg7aGVpZ2h0OjIwcHh9LmxhLWJhbGwtbmV3dG9uLWNyYWRsZS5sYS0yeD5kaXZ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweH0ubGEtYmFsbC1uZXd0b24tY3JhZGxlLmxhLTN4e3dpZHRoOjEyMHB4O2hlaWdodDozMHB4fS5sYS1iYWxsLW5ld3Rvbi1jcmFkbGUubGEtM3g+ZGl2e3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtbmV3dG9uLWNyYWRsZS1sZWZ0ezI1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwJSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufTUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfX1Aa2V5ZnJhbWVzIGJhbGwtbmV3dG9uLWNyYWRsZS1sZWZ0ezI1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwJSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufTUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfX1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1uZXd0b24tY3JhZGxlLXJpZ2h0ezEwMCUsNTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufX1Aa2V5ZnJhbWVzIGJhbGwtbmV3dG9uLWNyYWRsZS1yaWdodHsxMDAlLDUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDEwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDEwMCUpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn19LmxhLWJhbGwtcHVsc2UtcmlzZSwubGEtYmFsbC1wdWxzZS1yaXNlPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtcHVsc2UtcmlzZXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6NzBweDtoZWlnaHQ6MTRweH0ubGEtYmFsbC1wdWxzZS1yaXNlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1wdWxzZS1yaXNlPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O21hcmdpbjoycHg7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGN1YmljLWJlemllciguMTUsLjM2LC45LC42KSBpbmZpbml0ZSBiYWxsLXB1bHNlLXJpc2UtZXZlbjthbmltYXRpb246MXMgY3ViaWMtYmV6aWVyKC4xNSwuMzYsLjksLjYpIGluZmluaXRlIGJhbGwtcHVsc2UtcmlzZS1ldmVufS5sYS1iYWxsLXB1bHNlLXJpc2U+ZGl2Om50aC1jaGlsZCgybi0xKXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJhbGwtcHVsc2UtcmlzZS1vZGQ7YW5pbWF0aW9uLW5hbWU6YmFsbC1wdWxzZS1yaXNlLW9kZH0ubGEtYmFsbC1wdWxzZS1yaXNlLmxhLXNte3dpZHRoOjM0cHg7aGVpZ2h0OjZweH0ubGEtYmFsbC1wdWxzZS1yaXNlLmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW46MXB4fS5sYS1iYWxsLXB1bHNlLXJpc2UubGEtMnh7d2lkdGg6MTQwcHg7aGVpZ2h0OjI4cHh9LmxhLWJhbGwtcHVsc2UtcmlzZS5sYS0yeD5kaXZ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDttYXJnaW46NHB4fS5sYS1iYWxsLXB1bHNlLXJpc2UubGEtM3h7d2lkdGg6MjEwcHg7aGVpZ2h0OjQycHh9LmxhLWJhbGwtcHVsc2UtcmlzZS5sYS0zeD5kaXZ7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDttYXJnaW46NnB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXB1bHNlLXJpc2UtZXZlbnswJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xKTt0cmFuc2Zvcm06c2NhbGUoMS4xKX0yNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjAwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIwMCUpfTUwJXtvcGFjaXR5Oi4zNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMyk7dHJhbnNmb3JtOnNjYWxlKC4zKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgyMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyMDAlKX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBiYWxsLXB1bHNlLXJpc2UtZXZlbnswJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xKTt0cmFuc2Zvcm06c2NhbGUoMS4xKX0yNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjAwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIwMCUpfTUwJXtvcGFjaXR5Oi4zNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMyk7dHJhbnNmb3JtOnNjYWxlKC4zKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgyMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyMDAlKX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTpzY2FsZSgxKX19QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtcHVsc2UtcmlzZS1vZGR7MCV7b3BhY2l0eTouMzU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCl9MjUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjAwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjAwJSl9NTAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjEpO3RyYW5zZm9ybTpzY2FsZSgxLjEpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjAwJSl9MTAwJXtvcGFjaXR5Oi4zNTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnNjYWxlKC43NSl9fUBrZXlmcmFtZXMgYmFsbC1wdWxzZS1yaXNlLW9kZHswJXtvcGFjaXR5Oi4zNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KX0yNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgyMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyMDAlKX01MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMSk7dHJhbnNmb3JtOnNjYWxlKDEuMSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMDAlKX0xMDAle29wYWNpdHk6LjM1Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjc1KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06c2NhbGUoLjc1KX19LmxhLWJhbGwtcHVsc2Utc3luYywubGEtYmFsbC1wdWxzZS1zeW5jPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtcHVsc2Utc3luY3tkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6NTRweDtoZWlnaHQ6MThweH0ubGEtYmFsbC1wdWxzZS1zeW5jLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1wdWxzZS1zeW5jPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O21hcmdpbjo0cHg7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOi42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLXB1bHNlLXN5bmM7YW5pbWF0aW9uOi42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLXB1bHNlLXN5bmN9LmxhLWJhbGwtcHVsc2Utc3luYz5kaXY6bnRoLWNoaWxkKDEpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMTRzO2FuaW1hdGlvbi1kZWxheTotLjE0c30ubGEtYmFsbC1wdWxzZS1zeW5jPmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4wN3M7YW5pbWF0aW9uLWRlbGF5Oi0uMDdzfS5sYS1iYWxsLXB1bHNlLXN5bmM+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTowczthbmltYXRpb24tZGVsYXk6MHN9LmxhLWJhbGwtcHVsc2Utc3luYy5sYS1zbXt3aWR0aDoyNnB4O2hlaWdodDo4cHh9LmxhLWJhbGwtcHVsc2Utc3luYy5sYS1zbT5kaXZ7d2lkdGg6NHB4O2hlaWdodDo0cHg7bWFyZ2luOjJweH0ubGEtYmFsbC1wdWxzZS1zeW5jLmxhLTJ4e3dpZHRoOjEwOHB4O2hlaWdodDozNnB4fS5sYS1iYWxsLXB1bHNlLXN5bmMubGEtMng+ZGl2e3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7bWFyZ2luOjhweH0ubGEtYmFsbC1wdWxzZS1zeW5jLmxhLTN4e3dpZHRoOjE2MnB4O2hlaWdodDo1NHB4fS5sYS1iYWxsLXB1bHNlLXN5bmMubGEtM3g+ZGl2e3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7bWFyZ2luOjEycHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtcHVsc2Utc3luY3szMyV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKX02NiV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKX19QGtleWZyYW1lcyBiYWxsLXB1bHNlLXN5bmN7MzMley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwJSl9NjYley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCl9fS5sYS1iYWxsLXB1bHNlLC5sYS1iYWxsLXB1bHNlPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtcHVsc2V7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjU0cHg7aGVpZ2h0OjE4cHh9LmxhLWJhbGwtcHVsc2UubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLXB1bHNlPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O21hcmdpbjo0cHg7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGluZmluaXRlIGJhbGwtcHVsc2U7YW5pbWF0aW9uOjFzIGluZmluaXRlIGJhbGwtcHVsc2V9LmxhLWJhbGwtcHVsc2U+ZGl2Om50aC1jaGlsZCgxKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjJzO2FuaW1hdGlvbi1kZWxheTotLjJzfS5sYS1iYWxsLXB1bHNlPmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4xczthbmltYXRpb24tZGVsYXk6LS4xc30ubGEtYmFsbC1wdWxzZT5kaXY6bnRoLWNoaWxkKDMpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjBzO2FuaW1hdGlvbi1kZWxheTowc30ubGEtYmFsbC1wdWxzZS5sYS1zbXt3aWR0aDoyNnB4O2hlaWdodDo4cHh9LmxhLWJhbGwtcHVsc2UubGEtc20+ZGl2e3dpZHRoOjRweDtoZWlnaHQ6NHB4O21hcmdpbjoycHh9LmxhLWJhbGwtcHVsc2UubGEtMnh7d2lkdGg6MTA4cHg7aGVpZ2h0OjM2cHh9LmxhLWJhbGwtcHVsc2UubGEtMng+ZGl2e3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7bWFyZ2luOjhweH0ubGEtYmFsbC1wdWxzZS5sYS0zeHt3aWR0aDoxNjJweDtoZWlnaHQ6NTRweH0ubGEtYmFsbC1wdWxzZS5sYS0zeD5kaXZ7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDttYXJnaW46MTJweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1wdWxzZXswJSwxMDAlLDYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTMwJXtvcGFjaXR5Oi4xOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4wMSk7dHJhbnNmb3JtOnNjYWxlKC4wMSl9fUBrZXlmcmFtZXMgYmFsbC1wdWxzZXswJSwxMDAlLDYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTMwJXtvcGFjaXR5Oi4xOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4wMSk7dHJhbnNmb3JtOnNjYWxlKC4wMSl9fS5sYS1iYWxsLXJvdGF0ZSwubGEtYmFsbC1yb3RhdGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1yb3RhdGV7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHh9LmxhLWJhbGwtcm90YXRlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1yb3RhdGU+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGN1YmljLWJlemllciguNywtLjEzLC4yMiwuODYpIGluZmluaXRlIGJhbGwtcm90YXRlLWFuaW1hdGlvbjthbmltYXRpb246MXMgY3ViaWMtYmV6aWVyKC43LC0uMTMsLjIyLC44NikgaW5maW5pdGUgYmFsbC1yb3RhdGUtYW5pbWF0aW9ufS5sYS1iYWxsLXJvdGF0ZT5kaXY6YWZ0ZXIsLmxhLWJhbGwtcm90YXRlPmRpdjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6aW5oZXJpdDtoZWlnaHQ6aW5oZXJpdDttYXJnaW46aW5oZXJpdDtjb250ZW50OlwiXCI7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czppbmhlcml0O29wYWNpdHk6Ljh9LmxhLWJhbGwtcm90YXRlPmRpdjpiZWZvcmV7dG9wOjA7bGVmdDotMTUwJX0ubGEtYmFsbC1yb3RhdGU+ZGl2OmFmdGVye3RvcDowO2xlZnQ6MTUwJX0ubGEtYmFsbC1yb3RhdGUubGEtc20sLmxhLWJhbGwtcm90YXRlLmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweH0ubGEtYmFsbC1yb3RhdGUubGEtMngsLmxhLWJhbGwtcm90YXRlLmxhLTJ4PmRpdnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4fS5sYS1iYWxsLXJvdGF0ZS5sYS0zeCwubGEtYmFsbC1yb3RhdGUubGEtM3g+ZGl2e3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtcm90YXRlLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIGJhbGwtcm90YXRlLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0ubGEtYmFsbC1ydW5uaW5nLWRvdHMsLmxhLWJhbGwtcnVubmluZy1kb3RzPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtcnVubmluZy1kb3Rze2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDoxMHB4O2hlaWdodDoxMHB4fS5sYS1iYWxsLXJ1bm5pbmctZG90cy5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtcnVubmluZy1kb3RzPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O21hcmdpbi1sZWZ0Oi0yNXB4O2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjoycyBsaW5lYXIgaW5maW5pdGUgYmFsbC1ydW5uaW5nLWRvdHMtYW5pbWF0ZTthbmltYXRpb246MnMgbGluZWFyIGluZmluaXRlIGJhbGwtcnVubmluZy1kb3RzLWFuaW1hdGV9LmxhLWJhbGwtcnVubmluZy1kb3RzPmRpdjpudGgtY2hpbGQoMSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHM7YW5pbWF0aW9uLWRlbGF5OjBzfS5sYS1iYWxsLXJ1bm5pbmctZG90cz5kaXY6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNHM7YW5pbWF0aW9uLWRlbGF5Oi0uNHN9LmxhLWJhbGwtcnVubmluZy1kb3RzPmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS44czthbmltYXRpb24tZGVsYXk6LS44c30ubGEtYmFsbC1ydW5uaW5nLWRvdHM+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yczthbmltYXRpb24tZGVsYXk6LTEuMnN9LmxhLWJhbGwtcnVubmluZy1kb3RzPmRpdjpudGgtY2hpbGQoNSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNnM7YW5pbWF0aW9uLWRlbGF5Oi0xLjZzfS5sYS1iYWxsLXJ1bm5pbmctZG90cz5kaXY6bnRoLWNoaWxkKDYpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0yczthbmltYXRpb24tZGVsYXk6LTJzfS5sYS1iYWxsLXJ1bm5pbmctZG90cz5kaXY6bnRoLWNoaWxkKDcpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0yLjRzO2FuaW1hdGlvbi1kZWxheTotMi40c30ubGEtYmFsbC1ydW5uaW5nLWRvdHM+ZGl2Om50aC1jaGlsZCg4KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMi44czthbmltYXRpb24tZGVsYXk6LTIuOHN9LmxhLWJhbGwtcnVubmluZy1kb3RzPmRpdjpudGgtY2hpbGQoOSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTMuMnM7YW5pbWF0aW9uLWRlbGF5Oi0zLjJzfS5sYS1iYWxsLXJ1bm5pbmctZG90cz5kaXY6bnRoLWNoaWxkKDEwKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMy42czthbmltYXRpb24tZGVsYXk6LTMuNnN9LmxhLWJhbGwtcnVubmluZy1kb3RzLmxhLXNte3dpZHRoOjRweDtoZWlnaHQ6NHB4fS5sYS1iYWxsLXJ1bm5pbmctZG90cy5sYS1zbT5kaXZ7d2lkdGg6NHB4O2hlaWdodDo0cHg7bWFyZ2luLWxlZnQ6LTEycHh9LmxhLWJhbGwtcnVubmluZy1kb3RzLmxhLTJ4e3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHh9LmxhLWJhbGwtcnVubmluZy1kb3RzLmxhLTJ4PmRpdnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O21hcmdpbi1sZWZ0Oi01MHB4fS5sYS1iYWxsLXJ1bm5pbmctZG90cy5sYS0zeHt3aWR0aDozMHB4O2hlaWdodDozMHB4fS5sYS1iYWxsLXJ1bm5pbmctZG90cy5sYS0zeD5kaXZ7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDttYXJnaW4tbGVmdDotNzVweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1ydW5uaW5nLWRvdHMtYW5pbWF0ZXswJSwxMDAle3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDUwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoNTAwJSl9ODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDApfTg1JXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEyNSUpIHRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEyNSUpIHRyYW5zbGF0ZVgoMCl9OTAle3dpZHRoOjIwMCU7aGVpZ2h0Ojc1JX05NSV7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVYKDUwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVYKDUwMCUpfX1Aa2V5ZnJhbWVzIGJhbGwtcnVubmluZy1kb3RzLWFuaW1hdGV7MCUsMTAwJXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCg1MDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDUwMCUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgwKX04NSV7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMjUlKSB0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMjUlKSB0cmFuc2xhdGVYKDApfTkwJXt3aWR0aDoyMDAlO2hlaWdodDo3NSV9OTUle3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSkgdHJhbnNsYXRlWCg1MDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSkgdHJhbnNsYXRlWCg1MDAlKX19LmxhLWJhbGwtc2NhbGUtbXVsdGlwbGUsLmxhLWJhbGwtc2NhbGUtbXVsdGlwbGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1zY2FsZS1tdWx0aXBsZXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC1zY2FsZS1tdWx0aXBsZS5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtc2NhbGUtbXVsdGlwbGU+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDozMnB4O2hlaWdodDozMnB4O2JvcmRlci1yYWRpdXM6MTAwJTtvcGFjaXR5OjA7LXdlYmtpdC1hbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGJhbGwtc2NhbGUtbXVsdGlwbGU7YW5pbWF0aW9uOjFzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXNjYWxlLW11bHRpcGxlfS5sYS1iYWxsLXNjYWxlLW11bHRpcGxlPmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjJzO2FuaW1hdGlvbi1kZWxheTouMnN9LmxhLWJhbGwtc2NhbGUtbXVsdGlwbGU+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouNHM7YW5pbWF0aW9uLWRlbGF5Oi40c30ubGEtYmFsbC1zY2FsZS1tdWx0aXBsZS5sYS1zbSwubGEtYmFsbC1zY2FsZS1tdWx0aXBsZS5sYS1zbT5kaXZ7d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtYmFsbC1zY2FsZS1tdWx0aXBsZS5sYS0yeCwubGEtYmFsbC1zY2FsZS1tdWx0aXBsZS5sYS0yeD5kaXZ7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtYmFsbC1zY2FsZS1tdWx0aXBsZS5sYS0zeCwubGEtYmFsbC1zY2FsZS1tdWx0aXBsZS5sYS0zeD5kaXZ7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zY2FsZS1tdWx0aXBsZXswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfTUle29wYWNpdHk6Ljc1fTEwMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBiYWxsLXNjYWxlLW11bHRpcGxlezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NSV7b3BhY2l0eTouNzV9MTAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX0ubGEtYmFsbC1zY2FsZS1wdWxzZSwubGEtYmFsbC1zY2FsZS1wdWxzZT5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLXNjYWxlLXB1bHNle2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLXNjYWxlLXB1bHNlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1zY2FsZS1wdWxzZT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjMycHg7aGVpZ2h0OjMycHg7Ym9yZGVyLXJhZGl1czoxMDAlO29wYWNpdHk6LjU7LXdlYmtpdC1hbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC1zY2FsZS1wdWxzZTthbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC1zY2FsZS1wdWxzZX0ubGEtYmFsbC1zY2FsZS1wdWxzZT5kaXY6bGFzdC1jaGlsZHstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMXM7YW5pbWF0aW9uLWRlbGF5Oi0xc30ubGEtYmFsbC1zY2FsZS1wdWxzZS5sYS1zbSwubGEtYmFsbC1zY2FsZS1wdWxzZS5sYS1zbT5kaXZ7d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtYmFsbC1zY2FsZS1wdWxzZS5sYS0yeCwubGEtYmFsbC1zY2FsZS1wdWxzZS5sYS0yeD5kaXZ7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtYmFsbC1zY2FsZS1wdWxzZS5sYS0zeCwubGEtYmFsbC1zY2FsZS1wdWxzZS5sYS0zeD5kaXZ7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zY2FsZS1wdWxzZXswJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIGJhbGwtc2NhbGUtcHVsc2V7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlLC5sYS1iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZT5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtib3JkZXI6MnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDtiYWNrZ3JvdW5kOjAgMDtib3JkZXItcmFkaXVzOjEwMCU7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOjEuMjVzIGN1YmljLWJlemllciguMjEsLjUzLC41NiwuOCkgaW5maW5pdGUgYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGU7YW5pbWF0aW9uOjEuMjVzIGN1YmljLWJlemllciguMjEsLjUzLC41NiwuOCkgaW5maW5pdGUgYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGV9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlPmRpdjpudGgtY2hpbGQoMSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHM7YW5pbWF0aW9uLWRlbGF5OjBzfS5sYS1iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZT5kaXY6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4yNXM7YW5pbWF0aW9uLWRlbGF5Oi4yNXN9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlPmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjVzO2FuaW1hdGlvbi1kZWxheTouNXN9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlLmxhLXNtPmRpdnt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JvcmRlci13aWR0aDoxcHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlLmxhLTJ4PmRpdnt3aWR0aDo2NHB4O2hlaWdodDo2NHB4O2JvcmRlci13aWR0aDo0cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlLmxhLTN4PmRpdnt3aWR0aDo5NnB4O2hlaWdodDo5NnB4O2JvcmRlci13aWR0aDo2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSk7dHJhbnNmb3JtOnNjYWxlKC4xKX03MCV7b3BhY2l0eTouNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9OTUle29wYWNpdHk6MH19QGtleWZyYW1lcyBiYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZXswJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjEpO3RyYW5zZm9ybTpzY2FsZSguMSl9NzAle29wYWNpdHk6LjU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTk1JXtvcGFjaXR5OjB9fS5sYS1iYWxsLXNjYWxlLXJpcHBsZSwubGEtYmFsbC1zY2FsZS1yaXBwbGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1zY2FsZS1yaXBwbGV7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1zY2FsZS1yaXBwbGU+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7Ym9yZGVyOjJweCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDtiYWNrZ3JvdW5kOjAgMDtib3JkZXItcmFkaXVzOjEwMCU7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOjFzIGN1YmljLWJlemllciguMjEsLjUzLC41NiwuOCkgaW5maW5pdGUgYmFsbC1zY2FsZS1yaXBwbGU7YW5pbWF0aW9uOjFzIGN1YmljLWJlemllciguMjEsLjUzLC41NiwuOCkgaW5maW5pdGUgYmFsbC1zY2FsZS1yaXBwbGV9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLmxhLXNtPmRpdnt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JvcmRlci13aWR0aDoxcHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLmxhLTJ4PmRpdnt3aWR0aDo2NHB4O2hlaWdodDo2NHB4O2JvcmRlci13aWR0aDo0cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWJhbGwtc2NhbGUtcmlwcGxlLmxhLTN4PmRpdnt3aWR0aDo5NnB4O2hlaWdodDo5NnB4O2JvcmRlci13aWR0aDo2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtc2NhbGUtcmlwcGxlezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSk7dHJhbnNmb3JtOnNjYWxlKC4xKX03MCV7b3BhY2l0eTouNjU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTEwMCV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGJhbGwtc2NhbGUtcmlwcGxlezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSk7dHJhbnNmb3JtOnNjYWxlKC4xKX03MCV7b3BhY2l0eTouNjU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTEwMCV7b3BhY2l0eTowfX0ubGEtYmFsbC1zY2FsZSwubGEtYmFsbC1zY2FsZT5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLXNjYWxle2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLXNjYWxlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1zY2FsZT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDtib3JkZXItcmFkaXVzOjEwMCU7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtc2NhbGU7YW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtc2NhbGV9LmxhLWJhbGwtc2NhbGUubGEtc20sLmxhLWJhbGwtc2NhbGUubGEtc20+ZGl2e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtc2NhbGUubGEtMngsLmxhLWJhbGwtc2NhbGUubGEtMng+ZGl2e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc2NhbGUubGEtM3gsLmxhLWJhbGwtc2NhbGUubGEtM3g+ZGl2e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtc2NhbGV7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX0xMDAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgYmFsbC1zY2FsZXswJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfTEwMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZywubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZ3tkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDstd2Via2l0LWFuaW1hdGlvbjo2cyBsaW5lYXIgaW5maW5pdGUgYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLXJvdGF0ZTthbmltYXRpb246NnMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy1yb3RhdGV9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDo4cHg7aGVpZ2h0OjhweDttYXJnaW4tdG9wOi00cHg7bWFyZ2luLWxlZnQ6LTRweDtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZzthbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZ30ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoMSl7dG9wOjUlO2xlZnQ6NTAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uODc1czthbmltYXRpb24tZGVsYXk6LS44NzVzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCgyKXt0b3A6MTguMTgwMTk0ODQ2NiU7bGVmdDo4MS44MTk4MDUxNTM0JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjc1czthbmltYXRpb24tZGVsYXk6LS43NXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDMpe3RvcDo1MCU7bGVmdDo5NSU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42MjVzO2FuaW1hdGlvbi1kZWxheTotLjYyNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDQpe3RvcDo4MS44MTk4MDUxNTM0JTtsZWZ0OjgxLjgxOTgwNTE1MzQlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNXM7YW5pbWF0aW9uLWRlbGF5Oi0uNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDUpe3RvcDo5NC45OTk5OTk5OTY2JTtsZWZ0OjUwLjAwMDAwMDAwMDUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMzc1czthbmltYXRpb24tZGVsYXk6LS4zNzVzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg2KXt0b3A6ODEuODE5ODA0Njk2NiU7bGVmdDoxOC4xODAxOTQ5MjQ4JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjI1czthbmltYXRpb24tZGVsYXk6LS4yNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDcpe3RvcDo0OS45OTk5NzUwODE1JTtsZWZ0OjUuMDAwMDA1MTIxNSU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4xMjVzO2FuaW1hdGlvbi1kZWxheTotLjEyNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDgpe3RvcDoxOC4xNzk0NjQ5NzQlO2xlZnQ6MTguMTgwMzcwMDUxOCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHM7YW5pbWF0aW9uLWRlbGF5OjBzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcubGEtc217d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW4tdG9wOi0ycHg7bWFyZ2luLWxlZnQ6LTJweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy5sYS0yeD5kaXZ7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDttYXJnaW4tdG9wOi04cHg7bWFyZ2luLWxlZnQ6LThweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy5sYS0zeD5kaXZ7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDttYXJnaW4tdG9wOi0xMnB4O21hcmdpbi1sZWZ0Oi0xMnB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmctcm90YXRlezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyl9fUBrZXlmcmFtZXMgYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLXJvdGF0ZXsxMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nezUwJXtvcGFjaXR5Oi4yNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nezUwJXtvcGFjaXR5Oi4yNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUsLmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGV7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDo4cHg7aGVpZ2h0OjhweDttYXJnaW4tdG9wOi00cHg7bWFyZ2luLWxlZnQ6LTRweDtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZTthbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZX0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlPmRpdjpudGgtY2hpbGQoMSl7dG9wOjUlO2xlZnQ6NTAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uODc1czthbmltYXRpb24tZGVsYXk6LS44NzVzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2Om50aC1jaGlsZCgyKXt0b3A6MTguMTgwMTk0ODQ2NiU7bGVmdDo4MS44MTk4MDUxNTM0JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjc1czthbmltYXRpb24tZGVsYXk6LS43NXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXY6bnRoLWNoaWxkKDMpe3RvcDo1MCU7bGVmdDo5NSU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42MjVzO2FuaW1hdGlvbi1kZWxheTotLjYyNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXY6bnRoLWNoaWxkKDQpe3RvcDo4MS44MTk4MDUxNTM0JTtsZWZ0OjgxLjgxOTgwNTE1MzQlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNXM7YW5pbWF0aW9uLWRlbGF5Oi0uNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXY6bnRoLWNoaWxkKDUpe3RvcDo5NC45OTk5OTk5OTY2JTtsZWZ0OjUwLjAwMDAwMDAwMDUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMzc1czthbmltYXRpb24tZGVsYXk6LS4zNzVzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2Om50aC1jaGlsZCg2KXt0b3A6ODEuODE5ODA0Njk2NiU7bGVmdDoxOC4xODAxOTQ5MjQ4JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjI1czthbmltYXRpb24tZGVsYXk6LS4yNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXY6bnRoLWNoaWxkKDcpe3RvcDo0OS45OTk5NzUwODE1JTtsZWZ0OjUuMDAwMDA1MTIxNSU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4xMjVzO2FuaW1hdGlvbi1kZWxheTotLjEyNXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXY6bnRoLWNoaWxkKDgpe3RvcDoxOC4xNzk0NjQ5NzQlO2xlZnQ6MTguMTgwMzcwMDUxOCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHM7YW5pbWF0aW9uLWRlbGF5OjBzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUubGEtc217d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW4tdG9wOi0ycHg7bWFyZ2luLWxlZnQ6LTJweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS5sYS0yeD5kaXZ7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDttYXJnaW4tdG9wOi04cHg7bWFyZ2luLWxlZnQ6LThweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS5sYS0zeD5kaXZ7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDttYXJnaW4tdG9wOi0xMnB4O21hcmdpbi1sZWZ0Oi0xMnB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGV7NTAle29wYWNpdHk6LjI1Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpfTEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGV7NTAle29wYWNpdHk6LjI1Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpfTEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UsLmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2U+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2U+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7d2lkdGg6OHB4O2hlaWdodDo4cHg7bWFyZ2luLXRvcDotNHB4O21hcmdpbi1sZWZ0Oi00cHg7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2U7YW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2V9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2U+ZGl2Om50aC1jaGlsZCgxKXt0b3A6NSU7bGVmdDo1MCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS44NzVzO2FuaW1hdGlvbi1kZWxheTotLjg3NXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2U+ZGl2Om50aC1jaGlsZCgyKXt0b3A6MTguMTgwMTk0ODQ2NiU7bGVmdDo4MS44MTk4MDUxNTM0JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjc1czthbmltYXRpb24tZGVsYXk6LS43NXN9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2U+ZGl2Om50aC1jaGlsZCgzKXt0b3A6NTAlO2xlZnQ6OTUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNjI1czthbmltYXRpb24tZGVsYXk6LS42MjVzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlPmRpdjpudGgtY2hpbGQoNCl7dG9wOjgxLjgxOTgwNTE1MzQlO2xlZnQ6ODEuODE5ODA1MTUzNCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS41czthbmltYXRpb24tZGVsYXk6LS41c30ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZT5kaXY6bnRoLWNoaWxkKDUpe3RvcDo5NC45OTk5OTk5OTY2JTtsZWZ0OjUwLjAwMDAwMDAwMDUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMzc1czthbmltYXRpb24tZGVsYXk6LS4zNzVzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlPmRpdjpudGgtY2hpbGQoNil7dG9wOjgxLjgxOTgwNDY5NjYlO2xlZnQ6MTguMTgwMTk0OTI0OCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMjVzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlPmRpdjpudGgtY2hpbGQoNyl7dG9wOjQ5Ljk5OTk3NTA4MTUlO2xlZnQ6NS4wMDAwMDUxMjE1JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMTI1c30ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZT5kaXY6bnRoLWNoaWxkKDgpe3RvcDoxOC4xNzk0NjQ5NzQlO2xlZnQ6MTguMTgwMzcwMDUxOCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHM7YW5pbWF0aW9uLWRlbGF5OjBzfS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UubGEtc20+ZGl2e3dpZHRoOjRweDtoZWlnaHQ6NHB4O21hcmdpbi10b3A6LTJweDttYXJnaW4tbGVmdDotMnB4fS5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UubGEtMng+ZGl2e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bWFyZ2luLXRvcDotOHB4O21hcmdpbi1sZWZ0Oi04cHh9LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2UubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH0ubGEtYmFsbC1zcGluLWNsb2Nrd2lzZS5sYS0zeD5kaXZ7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDttYXJnaW4tdG9wOi0xMnB4O21hcmdpbi1sZWZ0Oi0xMnB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXNwaW4tY2xvY2t3aXNlezAlLDEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0yMCV7b3BhY2l0eToxfTgwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfX1Aa2V5ZnJhbWVzIGJhbGwtc3Bpbi1jbG9ja3dpc2V7MCUsMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTIwJXtvcGFjaXR5OjF9ODAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9fS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZywubGEtYmFsbC1zcGluLWZhZGUtcm90YXRpbmc+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1zcGluLWZhZGUtcm90YXRpbmd7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHg7LXdlYmtpdC1hbmltYXRpb246NnMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1mYWRlLXJvdGF0ZTthbmltYXRpb246NnMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1mYWRlLXJvdGF0ZX0ubGEtYmFsbC1zcGluLWZhZGUtcm90YXRpbmcubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZz5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDo4cHg7aGVpZ2h0OjhweDttYXJnaW4tdG9wOi00cHg7bWFyZ2luLWxlZnQ6LTRweDtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1mYWRlO2FuaW1hdGlvbjoxcyBsaW5lYXIgaW5maW5pdGUgYmFsbC1zcGluLWZhZGV9LmxhLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoMSl7dG9wOjUlO2xlZnQ6NTAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXN9LmxhLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoMil7dG9wOjE4LjE4MDE5NDg0NjYlO2xlZnQ6ODEuODE5ODA1MTUzNCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuMjVzO2FuaW1hdGlvbi1kZWxheTotMS4yNXN9LmxhLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoMyl7dG9wOjUwJTtsZWZ0Ojk1JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4zNzVzO2FuaW1hdGlvbi1kZWxheTotMS4zNzVzfS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDQpe3RvcDo4MS44MTk4MDUxNTM0JTtsZWZ0OjgxLjgxOTgwNTE1MzQlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjVzO2FuaW1hdGlvbi1kZWxheTotMS41c30ubGEtYmFsbC1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg1KXt0b3A6OTQuOTk5OTk5OTk2NiU7bGVmdDo1MC4wMDAwMDAwMDA1JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS42MjVzO2FuaW1hdGlvbi1kZWxheTotMS42MjVzfS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDYpe3RvcDo4MS44MTk4MDQ2OTY2JTtsZWZ0OjE4LjE4MDE5NDkyNDglOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjc1czthbmltYXRpb24tZGVsYXk6LTEuNzVzfS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDcpe3RvcDo0OS45OTk5NzUwODE1JTtsZWZ0OjUuMDAwMDA1MTIxNSU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuODc1czthbmltYXRpb24tZGVsYXk6LTEuODc1c30ubGEtYmFsbC1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg4KXt0b3A6MTguMTc5NDY0OTc0JTtsZWZ0OjE4LjE4MDM3MDA1MTglOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0yczthbmltYXRpb24tZGVsYXk6LTJzfS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZy5sYS1zbXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZy5sYS1zbT5kaXZ7d2lkdGg6NHB4O2hlaWdodDo0cHg7bWFyZ2luLXRvcDotMnB4O21hcmdpbi1sZWZ0Oi0ycHh9LmxhLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nLmxhLTJ4PmRpdnt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O21hcmdpbi10b3A6LThweDttYXJnaW4tbGVmdDotOHB4fS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZy5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZy5sYS0zeD5kaXZ7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDttYXJnaW4tdG9wOi0xMnB4O21hcmdpbi1sZWZ0Oi0xMnB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXNwaW4tZmFkZS1yb3RhdGV7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgYmFsbC1zcGluLWZhZGUtcm90YXRlezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0ubGEtYmFsbC1zcGluLWZhZGUsLmxhLWJhbGwtc3Bpbi1mYWRlPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtc3Bpbi1mYWRle2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLXNwaW4tZmFkZS5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtc3Bpbi1mYWRlPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3dpZHRoOjhweDtoZWlnaHQ6OHB4O21hcmdpbi10b3A6LTRweDttYXJnaW4tbGVmdDotNHB4O2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjoxcyBsaW5lYXIgaW5maW5pdGUgYmFsbC1zcGluLWZhZGU7YW5pbWF0aW9uOjFzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXNwaW4tZmFkZX0ubGEtYmFsbC1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCgxKXt0b3A6NSU7bGVmdDo1MCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuMTI1czthbmltYXRpb24tZGVsYXk6LTEuMTI1c30ubGEtYmFsbC1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCgyKXt0b3A6MTguMTgwMTk0ODQ2NiU7bGVmdDo4MS44MTk4MDUxNTM0JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjI1c30ubGEtYmFsbC1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCgzKXt0b3A6NTAlO2xlZnQ6OTUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjM3NXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjM3NXN9LmxhLWJhbGwtc3Bpbi1mYWRlPmRpdjpudGgtY2hpbGQoNCl7dG9wOjgxLjgxOTgwNTE1MzQlO2xlZnQ6ODEuODE5ODA1MTUzNCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjVzfS5sYS1iYWxsLXNwaW4tZmFkZT5kaXY6bnRoLWNoaWxkKDUpe3RvcDo5NC45OTk5OTk5OTY2JTtsZWZ0OjUwLjAwMDAwMDAwMDUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjYyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjYyNXN9LmxhLWJhbGwtc3Bpbi1mYWRlPmRpdjpudGgtY2hpbGQoNil7dG9wOjgxLjgxOTgwNDY5NjYlO2xlZnQ6MTguMTgwMTk0OTI0OCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNzVzO2FuaW1hdGlvbi1kZWxheTotMS43NXN9LmxhLWJhbGwtc3Bpbi1mYWRlPmRpdjpudGgtY2hpbGQoNyl7dG9wOjQ5Ljk5OTk3NTA4MTUlO2xlZnQ6NS4wMDAwMDUxMjE1JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS44NzVzO2FuaW1hdGlvbi1kZWxheTotMS44NzVzfS5sYS1iYWxsLXNwaW4tZmFkZT5kaXY6bnRoLWNoaWxkKDgpe3RvcDoxOC4xNzk0NjQ5NzQlO2xlZnQ6MTguMTgwMzcwMDUxOCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTJzO2FuaW1hdGlvbi1kZWxheTotMnN9LmxhLWJhbGwtc3Bpbi1mYWRlLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtc3Bpbi1mYWRlLmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW4tdG9wOi0ycHg7bWFyZ2luLWxlZnQ6LTJweH0ubGEtYmFsbC1zcGluLWZhZGUubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtYmFsbC1zcGluLWZhZGUubGEtMng+ZGl2e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bWFyZ2luLXRvcDotOHB4O21hcmdpbi1sZWZ0Oi04cHh9LmxhLWJhbGwtc3Bpbi1mYWRlLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWJhbGwtc3Bpbi1mYWRlLmxhLTN4PmRpdnt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O21hcmdpbi10b3A6LTEycHg7bWFyZ2luLWxlZnQ6LTEycHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtc3Bpbi1mYWRlezAlLDEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7b3BhY2l0eTouMjU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9fUBrZXlmcmFtZXMgYmFsbC1zcGluLWZhZGV7MCUsMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTUwJXtvcGFjaXR5Oi4yNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX19LmxhLWJhbGwtc3Bpbi1yb3RhdGUsLmxhLWJhbGwtc3Bpbi1yb3RhdGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC1zcGluLXJvdGF0ZXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDstd2Via2l0LWFuaW1hdGlvbjoycyBsaW5lYXIgaW5maW5pdGUgYmFsbC1zcGluLXJvdGF0ZTthbmltYXRpb246MnMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1yb3RhdGV9LmxhLWJhbGwtc3Bpbi1yb3RhdGUubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLXNwaW4tcm90YXRlPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDt3aWR0aDo2MCU7aGVpZ2h0OjYwJTtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC1zcGluLWJvdW5jZTthbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC1zcGluLWJvdW5jZX0ubGEtYmFsbC1zcGluLXJvdGF0ZT5kaXY6bGFzdC1jaGlsZHt0b3A6YXV0bztib3R0b206MDstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMXM7YW5pbWF0aW9uLWRlbGF5Oi0xc30ubGEtYmFsbC1zcGluLXJvdGF0ZS5sYS1zbXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1iYWxsLXNwaW4tcm90YXRlLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtc3Bpbi1yb3RhdGUubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zcGluLXJvdGF0ZXsxMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBiYWxsLXNwaW4tcm90YXRlezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zcGluLWJvdW5jZXswJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIGJhbGwtc3Bpbi1ib3VuY2V7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LmxhLWJhbGwtc3BpbiwubGEtYmFsbC1zcGluPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtc3BpbntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC1zcGluLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1zcGluPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3dpZHRoOjhweDtoZWlnaHQ6OHB4O21hcmdpbi10b3A6LTRweDttYXJnaW4tbGVmdDotNHB4O2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLXNwaW47YW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtc3Bpbn0ubGEtYmFsbC1zcGluPmRpdjpudGgtY2hpbGQoMSl7dG9wOjUlO2xlZnQ6NTAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXN9LmxhLWJhbGwtc3Bpbj5kaXY6bnRoLWNoaWxkKDIpe3RvcDoxOC4xODAxOTQ4NDY2JTtsZWZ0OjgxLjgxOTgwNTE1MzQlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjI1czthbmltYXRpb24tZGVsYXk6LTEuMjVzfS5sYS1iYWxsLXNwaW4+ZGl2Om50aC1jaGlsZCgzKXt0b3A6NTAlO2xlZnQ6OTUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjM3NXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjM3NXN9LmxhLWJhbGwtc3Bpbj5kaXY6bnRoLWNoaWxkKDQpe3RvcDo4MS44MTk4MDUxNTM0JTtsZWZ0OjgxLjgxOTgwNTE1MzQlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjVzO2FuaW1hdGlvbi1kZWxheTotMS41c30ubGEtYmFsbC1zcGluPmRpdjpudGgtY2hpbGQoNSl7dG9wOjk0Ljk5OTk5OTk5NjYlO2xlZnQ6NTAuMDAwMDAwMDAwNSU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNjI1czthbmltYXRpb24tZGVsYXk6LTEuNjI1c30ubGEtYmFsbC1zcGluPmRpdjpudGgtY2hpbGQoNil7dG9wOjgxLjgxOTgwNDY5NjYlO2xlZnQ6MTguMTgwMTk0OTI0OCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNzVzO2FuaW1hdGlvbi1kZWxheTotMS43NXN9LmxhLWJhbGwtc3Bpbj5kaXY6bnRoLWNoaWxkKDcpe3RvcDo0OS45OTk5NzUwODE1JTtsZWZ0OjUuMDAwMDA1MTIxNSU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuODc1czthbmltYXRpb24tZGVsYXk6LTEuODc1c30ubGEtYmFsbC1zcGluPmRpdjpudGgtY2hpbGQoOCl7dG9wOjE4LjE3OTQ2NDk3NCU7bGVmdDoxOC4xODAzNzAwNTE4JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMnM7YW5pbWF0aW9uLWRlbGF5Oi0yc30ubGEtYmFsbC1zcGluLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtc3Bpbi5sYS1zbT5kaXZ7d2lkdGg6NHB4O2hlaWdodDo0cHg7bWFyZ2luLXRvcDotMnB4O21hcmdpbi1sZWZ0Oi0ycHh9LmxhLWJhbGwtc3Bpbi5sYS0yeHt3aWR0aDo2NHB4O2hlaWdodDo2NHB4fS5sYS1iYWxsLXNwaW4ubGEtMng+ZGl2e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bWFyZ2luLXRvcDotOHB4O21hcmdpbi1sZWZ0Oi04cHh9LmxhLWJhbGwtc3Bpbi5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1iYWxsLXNwaW4ubGEtM3g+ZGl2e3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bWFyZ2luLXRvcDotMTJweDttYXJnaW4tbGVmdDotMTJweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zcGluezAlLDEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0yMCV7b3BhY2l0eToxfTgwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfX1Aa2V5ZnJhbWVzIGJhbGwtc3BpbnswJSwxMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9MjAle29wYWNpdHk6MX04MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX19LmxhLWJhbGwtc3F1YXJlLWNsb2Nrd2lzZS1zcGluLC5sYS1iYWxsLXNxdWFyZS1jbG9ja3dpc2Utc3Bpbj5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLXNxdWFyZS1jbG9ja3dpc2Utc3BpbntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MjZweDtoZWlnaHQ6MjZweH0ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4ubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLXNxdWFyZS1jbG9ja3dpc2Utc3Bpbj5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O21hcmdpbi10b3A6LTZweDttYXJnaW4tbGVmdDotNnB4O2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLXNxdWFyZS1jbG9ja3dpc2Utc3BpbjthbmltYXRpb246MXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW59LmxhLWJhbGwtc3F1YXJlLWNsb2Nrd2lzZS1zcGluPmRpdjpudGgtY2hpbGQoMSl7dG9wOjA7bGVmdDowOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uODc1czthbmltYXRpb24tZGVsYXk6LS44NzVzfS5sYS1iYWxsLXNxdWFyZS1jbG9ja3dpc2Utc3Bpbj5kaXY6bnRoLWNoaWxkKDIpe3RvcDowO2xlZnQ6NTAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNzVzO2FuaW1hdGlvbi1kZWxheTotLjc1c30ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4+ZGl2Om50aC1jaGlsZCgzKXt0b3A6MDtsZWZ0OjEwMCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42MjVzO2FuaW1hdGlvbi1kZWxheTotLjYyNXN9LmxhLWJhbGwtc3F1YXJlLWNsb2Nrd2lzZS1zcGluPmRpdjpudGgtY2hpbGQoNCl7dG9wOjUwJTtsZWZ0OjEwMCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS41czthbmltYXRpb24tZGVsYXk6LS41c30ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4+ZGl2Om50aC1jaGlsZCg1KXt0b3A6MTAwJTtsZWZ0OjEwMCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4zNzVzO2FuaW1hdGlvbi1kZWxheTotLjM3NXN9LmxhLWJhbGwtc3F1YXJlLWNsb2Nrd2lzZS1zcGluPmRpdjpudGgtY2hpbGQoNil7dG9wOjEwMCU7bGVmdDo1MCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMjVzfS5sYS1iYWxsLXNxdWFyZS1jbG9ja3dpc2Utc3Bpbj5kaXY6bnRoLWNoaWxkKDcpe3RvcDoxMDAlO2xlZnQ6MDstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMTI1c30ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4+ZGl2Om50aC1jaGlsZCg4KXt0b3A6NTAlO2xlZnQ6MDstd2Via2l0LWFuaW1hdGlvbi1kZWxheTowczthbmltYXRpb24tZGVsYXk6MHN9LmxhLWJhbGwtc3F1YXJlLWNsb2Nrd2lzZS1zcGluLmxhLXNte3dpZHRoOjEycHg7aGVpZ2h0OjEycHh9LmxhLWJhbGwtc3F1YXJlLWNsb2Nrd2lzZS1zcGluLmxhLXNtPmRpdnt3aWR0aDo2cHg7aGVpZ2h0OjZweDttYXJnaW4tdG9wOi0zcHg7bWFyZ2luLWxlZnQ6LTNweH0ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4ubGEtMnh7d2lkdGg6NTJweDtoZWlnaHQ6NTJweH0ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4ubGEtMng+ZGl2e3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bWFyZ2luLXRvcDotMTJweDttYXJnaW4tbGVmdDotMTJweH0ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4ubGEtM3h7d2lkdGg6NzhweDtoZWlnaHQ6NzhweH0ubGEtYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW4ubGEtM3g+ZGl2e3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHg7bWFyZ2luLXRvcDotMThweDttYXJnaW4tbGVmdDotMThweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW57MCUsMTAwJSw0MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCl9NzAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBiYWxsLXNxdWFyZS1jbG9ja3dpc2Utc3BpbnswJSwxMDAlLDQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KX03MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX0ubGEtYmFsbC1zcXVhcmUtc3BpbiwubGEtYmFsbC1zcXVhcmUtc3Bpbj5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1iYWxsLXNxdWFyZS1zcGlue2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDoyNnB4O2hlaWdodDoyNnB4fS5sYS1iYWxsLXNxdWFyZS1zcGluLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC1zcXVhcmUtc3Bpbj5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O21hcmdpbi10b3A6LTZweDttYXJnaW4tbGVmdDotNnB4O2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLXNxdWFyZS1zcGluO2FuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLXNxdWFyZS1zcGlufS5sYS1iYWxsLXNxdWFyZS1zcGluPmRpdjpudGgtY2hpbGQoMSl7dG9wOjA7bGVmdDowOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXN9LmxhLWJhbGwtc3F1YXJlLXNwaW4+ZGl2Om50aC1jaGlsZCgyKXt0b3A6MDtsZWZ0OjUwJTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjI1c30ubGEtYmFsbC1zcXVhcmUtc3Bpbj5kaXY6bnRoLWNoaWxkKDMpe3RvcDowO2xlZnQ6MTAwJTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4zNzVzO2FuaW1hdGlvbi1kZWxheTotMS4zNzVzfS5sYS1iYWxsLXNxdWFyZS1zcGluPmRpdjpudGgtY2hpbGQoNCl7dG9wOjUwJTtsZWZ0OjEwMCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjVzfS5sYS1iYWxsLXNxdWFyZS1zcGluPmRpdjpudGgtY2hpbGQoNSl7dG9wOjEwMCU7bGVmdDoxMDAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjYyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjYyNXN9LmxhLWJhbGwtc3F1YXJlLXNwaW4+ZGl2Om50aC1jaGlsZCg2KXt0b3A6MTAwJTtsZWZ0OjUwJTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS43NXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjc1c30ubGEtYmFsbC1zcXVhcmUtc3Bpbj5kaXY6bnRoLWNoaWxkKDcpe3RvcDoxMDAlO2xlZnQ6MDstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS44NzVzO2FuaW1hdGlvbi1kZWxheTotMS44NzVzfS5sYS1iYWxsLXNxdWFyZS1zcGluPmRpdjpudGgtY2hpbGQoOCl7dG9wOjUwJTtsZWZ0OjA7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTJzO2FuaW1hdGlvbi1kZWxheTotMnN9LmxhLWJhbGwtc3F1YXJlLXNwaW4ubGEtc217d2lkdGg6MTJweDtoZWlnaHQ6MTJweH0ubGEtYmFsbC1zcXVhcmUtc3Bpbi5sYS1zbT5kaXZ7d2lkdGg6NnB4O2hlaWdodDo2cHg7bWFyZ2luLXRvcDotM3B4O21hcmdpbi1sZWZ0Oi0zcHh9LmxhLWJhbGwtc3F1YXJlLXNwaW4ubGEtMnh7d2lkdGg6NTJweDtoZWlnaHQ6NTJweH0ubGEtYmFsbC1zcXVhcmUtc3Bpbi5sYS0yeD5kaXZ7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDttYXJnaW4tdG9wOi0xMnB4O21hcmdpbi1sZWZ0Oi0xMnB4fS5sYS1iYWxsLXNxdWFyZS1zcGluLmxhLTN4e3dpZHRoOjc4cHg7aGVpZ2h0Ojc4cHh9LmxhLWJhbGwtc3F1YXJlLXNwaW4ubGEtM3g+ZGl2e3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHg7bWFyZ2luLXRvcDotMThweDttYXJnaW4tbGVmdDotMThweH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zcXVhcmUtc3BpbnswJSwxMDAlLDQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KX03MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIGJhbGwtc3F1YXJlLXNwaW57MCUsMTAwJSw0MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCl9NzAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LmxhLWJhbGwtdHJpYW5nbGUtcGF0aCwubGEtYmFsbC10cmlhbmdsZS1wYXRoPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtdHJpYW5nbGUtcGF0aHtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtYmFsbC10cmlhbmdsZS1wYXRoLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtYmFsbC10cmlhbmdsZS1wYXRoPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDtib3JkZXItcmFkaXVzOjEwMCV9LmxhLWJhbGwtdHJpYW5nbGUtcGF0aD5kaXY6bnRoLWNoaWxkKDEpey13ZWJraXQtYW5pbWF0aW9uOjJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLW9uZTthbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtb25lfS5sYS1iYWxsLXRyaWFuZ2xlLXBhdGg+ZGl2Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbjoycyBlYXNlLWluLW91dCBpbmZpbml0ZSBiYWxsLXRyaWFuZ2xlLXBhdGgtYmFsbC10d287YW5pbWF0aW9uOjJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLXR3b30ubGEtYmFsbC10cmlhbmdsZS1wYXRoPmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtdHJlZTthbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtdHJlZX0ubGEtYmFsbC10cmlhbmdsZS1wYXRoLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWJhbGwtdHJpYW5nbGUtcGF0aC5sYS1zbT5kaXZ7d2lkdGg6NHB4O2hlaWdodDo0cHh9LmxhLWJhbGwtdHJpYW5nbGUtcGF0aC5sYS0yeHt3aWR0aDo2NHB4O2hlaWdodDo2NHB4fS5sYS1iYWxsLXRyaWFuZ2xlLXBhdGgubGEtMng+ZGl2e3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHh9LmxhLWJhbGwtdHJpYW5nbGUtcGF0aC5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1iYWxsLXRyaWFuZ2xlLXBhdGgubGEtM3g+ZGl2e3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLW9uZXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwyMjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMjIwJSl9MTclLDUwJSw4MyV7b3BhY2l0eTouMjV9MzMle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDExMCUsMCl9NjYle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMjIwJSwyMjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDIyMCUsMjIwJSl9MTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDAsMjIwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDIyMCUpfX1Aa2V5ZnJhbWVzIGJhbGwtdHJpYW5nbGUtcGF0aC1iYWxsLW9uZXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwyMjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMjIwJSl9MTclLDUwJSw4MyV7b3BhY2l0eTouMjV9MzMle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDExMCUsMCl9NjYle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMjIwJSwyMjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDIyMCUsMjIwJSl9MTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDAsMjIwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDIyMCUpfX1ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtdHdvezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgxMTAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKX0xNyUsNTAlLDgzJXtvcGFjaXR5Oi4yNX0zMyV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgyMjAlLDIyMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMjIwJSwyMjAlKX02NiV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDIyMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwyMjAlKX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDExMCUsMCl9fUBrZXlmcmFtZXMgYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtdHdvezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgxMTAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKX0xNyUsNTAlLDgzJXtvcGFjaXR5Oi4yNX0zMyV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgyMjAlLDIyMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMjIwJSwyMjAlKX02NiV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDIyMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwyMjAlKX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDExMCUsMCl9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXRyaWFuZ2xlLXBhdGgtYmFsbC10cmVlezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgyMjAlLDIyMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMjIwJSwyMjAlKX0xNyUsNTAlLDgzJXtvcGFjaXR5Oi4yNX0zMyV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDIyMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwyMjAlKX02NiV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgxMTAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMjIwJSwyMjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDIyMCUsMjIwJSl9fUBrZXlmcmFtZXMgYmFsbC10cmlhbmdsZS1wYXRoLWJhbGwtdHJlZXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMjIwJSwyMjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDIyMCUsMjIwJSl9MTclLDUwJSw4MyV7b3BhY2l0eTouMjV9MzMle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwyMjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMjIwJSl9NjYle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMTEwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDExMCUsMCl9MTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDIyMCUsMjIwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgyMjAlLDIyMCUpfX0ubGEtYmFsbC16aWctemFnLWRlZmxlY3QsLmxhLWJhbGwtemlnLXphZy1kZWZsZWN0PmRpdntib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWJhbGwtemlnLXphZy1kZWZsZWN0e2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLXppZy16YWctZGVmbGVjdC5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWJhbGwtemlnLXphZy1kZWZsZWN0PmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7bWFyZ2luLXRvcDotNXB4O21hcmdpbi1sZWZ0Oi01cHg7Ym9yZGVyLXJhZGl1czoxMDAlfS5sYS1iYWxsLXppZy16YWctZGVmbGVjdD5kaXY6Zmlyc3QtY2hpbGR7LXdlYmtpdC1hbmltYXRpb246MS41cyBsaW5lYXIgaW5maW5pdGUgYmFsbC16aWctZGVmbGVjdDthbmltYXRpb246MS41cyBsaW5lYXIgaW5maW5pdGUgYmFsbC16aWctZGVmbGVjdH0ubGEtYmFsbC16aWctemFnLWRlZmxlY3Q+ZGl2Omxhc3QtY2hpbGR7LXdlYmtpdC1hbmltYXRpb246MS41cyBsaW5lYXIgaW5maW5pdGUgYmFsbC16YWctZGVmbGVjdDthbmltYXRpb246MS41cyBsaW5lYXIgaW5maW5pdGUgYmFsbC16YWctZGVmbGVjdH0ubGEtYmFsbC16aWctemFnLWRlZmxlY3QubGEtc217d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtYmFsbC16aWctemFnLWRlZmxlY3QubGEtc20+ZGl2e3dpZHRoOjRweDtoZWlnaHQ6NHB4O21hcmdpbi10b3A6LTJweDttYXJnaW4tbGVmdDotMnB4fS5sYS1iYWxsLXppZy16YWctZGVmbGVjdC5sYS0yeHt3aWR0aDo2NHB4O2hlaWdodDo2NHB4fS5sYS1iYWxsLXppZy16YWctZGVmbGVjdC5sYS0yeD5kaXZ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDttYXJnaW4tdG9wOi0xMHB4O21hcmdpbi1sZWZ0Oi0xMHB4fS5sYS1iYWxsLXppZy16YWctZGVmbGVjdC5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1iYWxsLXppZy16YWctZGVmbGVjdC5sYS0zeD5kaXZ7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDttYXJnaW4tdG9wOi0xNXB4O21hcmdpbi1sZWZ0Oi0xNXB4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXppZy1kZWZsZWN0ezE3JSw4NCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC04MCUsLTE2MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTgwJSwtMTYwJSl9MzQlLDY3JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoODAlLC0xNjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDgwJSwtMTYwJSl9MTAwJSw1MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApfX1Aa2V5ZnJhbWVzIGJhbGwtemlnLWRlZmxlY3R7MTclLDg0JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTgwJSwtMTYwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtODAlLC0xNjAlKX0zNCUsNjcley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg4MCUsLTE2MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoODAlLC0xNjAlKX0xMDAlLDUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXphZy1kZWZsZWN0ezE3JSw4NCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDgwJSwxNjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDgwJSwxNjAlKX0zNCUsNjcley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtODAlLDE2MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTgwJSwxNjAlKX0xMDAlLDUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9fUBrZXlmcmFtZXMgYmFsbC16YWctZGVmbGVjdHsxNyUsODQley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg4MCUsMTYwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg4MCUsMTYwJSl9MzQlLDY3JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTgwJSwxNjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC04MCUsMTYwJSl9MTAwJSw1MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApfX0ubGEtYmFsbC16aWctemFnLC5sYS1iYWxsLXppZy16YWc+ZGl2e2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtYmFsbC16aWctemFne2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1iYWxsLXppZy16YWcubGEtZGFya3tjb2xvcjojMzMzfS5sYS1iYWxsLXppZy16YWc+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDttYXJnaW4tdG9wOi01cHg7bWFyZ2luLWxlZnQ6LTVweDtib3JkZXItcmFkaXVzOjEwMCV9LmxhLWJhbGwtemlnLXphZz5kaXY6Zmlyc3QtY2hpbGR7LXdlYmtpdC1hbmltYXRpb246LjdzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXppZy1lZmZlY3Q7YW5pbWF0aW9uOi43cyBsaW5lYXIgaW5maW5pdGUgYmFsbC16aWctZWZmZWN0fS5sYS1iYWxsLXppZy16YWc+ZGl2Omxhc3QtY2hpbGR7LXdlYmtpdC1hbmltYXRpb246LjdzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXphZy1lZmZlY3Q7YW5pbWF0aW9uOi43cyBsaW5lYXIgaW5maW5pdGUgYmFsbC16YWctZWZmZWN0fS5sYS1iYWxsLXppZy16YWcubGEtc217d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtYmFsbC16aWctemFnLmxhLXNtPmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjRweDttYXJnaW4tdG9wOi0ycHg7bWFyZ2luLWxlZnQ6LTJweH0ubGEtYmFsbC16aWctemFnLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLWJhbGwtemlnLXphZy5sYS0yeD5kaXZ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDttYXJnaW4tdG9wOi0xMHB4O21hcmdpbi1sZWZ0Oi0xMHB4fS5sYS1iYWxsLXppZy16YWcubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH0ubGEtYmFsbC16aWctemFnLmxhLTN4PmRpdnt3aWR0aDozMHB4O2hlaWdodDozMHB4O21hcmdpbi10b3A6LTE1cHg7bWFyZ2luLWxlZnQ6LTE1cHh9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtemlnLWVmZmVjdHswJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKX0zMyV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC03NSUsLTE1MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTc1JSwtMTUwJSl9NjYley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg3NSUsLTE1MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNzUlLC0xNTAlKX19QGtleWZyYW1lcyBiYWxsLXppZy1lZmZlY3R7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9MzMley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNzUlLC0xNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC03NSUsLTE1MCUpfTY2JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNzUlLC0xNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDc1JSwtMTUwJSl9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXphZy1lZmZlY3R7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9MzMley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg3NSUsMTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg3NSUsMTUwJSl9NjYley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNzUlLDE1MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTc1JSwxNTAlKX19QGtleWZyYW1lcyBiYWxsLXphZy1lZmZlY3R7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9MzMley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg3NSUsMTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg3NSUsMTUwJSl9NjYley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNzUlLDE1MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTc1JSwxNTAlKX19LmxhLWNvZywubGEtY29nPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWNvZ3tkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzFweDtoZWlnaHQ6MzFweH0ubGEtY29nLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtY29nPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JvcmRlcjoycHggZGFzaGVkIGN1cnJlbnRDb2xvcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjRzIGxpbmVhciBpbmZpbml0ZSBjb2ctcm90YXRlO2FuaW1hdGlvbjo0cyBsaW5lYXIgaW5maW5pdGUgY29nLXJvdGF0ZX0ubGEtY29nPmRpdjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtjb250ZW50OlwiXCI7Ym9yZGVyOjJweCBzb2xpZCBjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czoxMDAlfS5sYS1jb2cubGEtc217d2lkdGg6MTVweDtoZWlnaHQ6MTVweH0ubGEtY29nLmxhLXNtPmRpdiwubGEtY29nLmxhLXNtPmRpdjphZnRlcntib3JkZXItd2lkdGg6MXB4fS5sYS1jb2cubGEtMnh7d2lkdGg6NjFweDtoZWlnaHQ6NjFweH0ubGEtY29nLmxhLTJ4PmRpdiwubGEtY29nLmxhLTJ4PmRpdjphZnRlcntib3JkZXItd2lkdGg6NHB4fS5sYS1jb2cubGEtM3h7d2lkdGg6OTFweDtoZWlnaHQ6OTFweH0ubGEtY29nLmxhLTN4PmRpdiwubGEtY29nLmxhLTN4PmRpdjphZnRlcntib3JkZXItd2lkdGg6NnB4fUAtd2Via2l0LWtleWZyYW1lcyBjb2ctcm90YXRlezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIGNvZy1yb3RhdGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fS5sYS1jdWJlLXRyYW5zaXRpb24sLmxhLWN1YmUtdHJhbnNpdGlvbj5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1jdWJlLXRyYW5zaXRpb257ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLWN1YmUtdHJhbnNpdGlvbi5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWN1YmUtdHJhbnNpdGlvbj5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjE0cHg7aGVpZ2h0OjE0cHg7bWFyZ2luLXRvcDotN3B4O21hcmdpbi1sZWZ0Oi03cHg7Ym9yZGVyLXJhZGl1czowOy13ZWJraXQtYW5pbWF0aW9uOjEuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgY3ViZS10cmFuc2l0aW9uO2FuaW1hdGlvbjoxLjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGN1YmUtdHJhbnNpdGlvbn0ubGEtY3ViZS10cmFuc2l0aW9uPmRpdjpsYXN0LWNoaWxkey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uOHM7YW5pbWF0aW9uLWRlbGF5Oi0uOHN9LmxhLWN1YmUtdHJhbnNpdGlvbi5sYS1zbXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1jdWJlLXRyYW5zaXRpb24ubGEtc20+ZGl2e3dpZHRoOjZweDtoZWlnaHQ6NnB4O21hcmdpbi10b3A6LTNweDttYXJnaW4tbGVmdDotM3B4fS5sYS1jdWJlLXRyYW5zaXRpb24ubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtY3ViZS10cmFuc2l0aW9uLmxhLTJ4PmRpdnt3aWR0aDoyOHB4O2hlaWdodDoyOHB4O21hcmdpbi10b3A6LTE0cHg7bWFyZ2luLWxlZnQ6LTE0cHh9LmxhLWN1YmUtdHJhbnNpdGlvbi5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1jdWJlLXRyYW5zaXRpb24ubGEtM3g+ZGl2e3dpZHRoOjQycHg7aGVpZ2h0OjQycHg7bWFyZ2luLXRvcDotMjFweDttYXJnaW4tbGVmdDotMjFweH1ALXdlYmtpdC1rZXlmcmFtZXMgY3ViZS10cmFuc2l0aW9uezI1JXt0b3A6MDtsZWZ0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpIHJvdGF0ZSgtOTBkZWcpO3RyYW5zZm9ybTpzY2FsZSguNSkgcm90YXRlKC05MGRlZyl9NTAle3RvcDoxMDAlO2xlZnQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKSByb3RhdGUoLTE4MGRlZyk7dHJhbnNmb3JtOnNjYWxlKDEpIHJvdGF0ZSgtMTgwZGVnKX03NSV7dG9wOjEwMCU7bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KSByb3RhdGUoLTI3MGRlZyk7dHJhbnNmb3JtOnNjYWxlKC41KSByb3RhdGUoLTI3MGRlZyl9MTAwJXt0b3A6MDtsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSkgcm90YXRlKC0zNjBkZWcpO3RyYW5zZm9ybTpzY2FsZSgxKSByb3RhdGUoLTM2MGRlZyl9fUBrZXlmcmFtZXMgY3ViZS10cmFuc2l0aW9uezI1JXt0b3A6MDtsZWZ0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpIHJvdGF0ZSgtOTBkZWcpO3RyYW5zZm9ybTpzY2FsZSguNSkgcm90YXRlKC05MGRlZyl9NTAle3RvcDoxMDAlO2xlZnQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKSByb3RhdGUoLTE4MGRlZyk7dHJhbnNmb3JtOnNjYWxlKDEpIHJvdGF0ZSgtMTgwZGVnKX03NSV7dG9wOjEwMCU7bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KSByb3RhdGUoLTI3MGRlZyk7dHJhbnNmb3JtOnNjYWxlKC41KSByb3RhdGUoLTI3MGRlZyl9MTAwJXt0b3A6MDtsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSkgcm90YXRlKC0zNjBkZWcpO3RyYW5zZm9ybTpzY2FsZSgxKSByb3RhdGUoLTM2MGRlZyl9fS5sYS1maXJlLC5sYS1maXJlPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWZpcmV7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLWZpcmUubGEtZGFya3tjb2xvcjojMzMzfS5sYS1maXJlPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjUwJTt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O2JvcmRlci1yYWRpdXM6MnB4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpIHNjYWxlKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwKTstd2Via2l0LWFuaW1hdGlvbjoxLjVzIGxpbmVhciBpbmZpbml0ZSBmaXJlLWRpYW1vbmRzO2FuaW1hdGlvbjoxLjVzIGxpbmVhciBpbmZpbml0ZSBmaXJlLWRpYW1vbmRzfS5sYS1maXJlPmRpdjpudGgtY2hpbGQoMSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS44NXM7YW5pbWF0aW9uLWRlbGF5Oi0uODVzfS5sYS1maXJlPmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuODVzO2FuaW1hdGlvbi1kZWxheTotMS44NXN9LmxhLWZpcmU+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMi44NXM7YW5pbWF0aW9uLWRlbGF5Oi0yLjg1c30ubGEtZmlyZS5sYS1zbXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1maXJlLmxhLXNtPmRpdnt3aWR0aDo2cHg7aGVpZ2h0OjZweH0ubGEtZmlyZS5sYS0yeHt3aWR0aDo2NHB4O2hlaWdodDo2NHB4fS5sYS1maXJlLmxhLTJ4PmRpdnt3aWR0aDoyNHB4O2hlaWdodDoyNHB4fS5sYS1maXJlLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWZpcmUubGEtM3g+ZGl2e3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGZpcmUtZGlhbW9uZHN7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSg3NSUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSg3NSUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtODcuNSUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtODcuNSUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgxKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIxMi41JSkgdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpIHNjYWxlKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMTIuNSUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwKX19QGtleWZyYW1lcyBmaXJlLWRpYW1vbmRzezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoNzUlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZykgc2NhbGUoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNzUlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZykgc2NhbGUoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTg3LjUlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZykgc2NhbGUoMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTg3LjUlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZykgc2NhbGUoMSl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMTIuNSUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjEyLjUlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZykgc2NhbGUoMCl9fS5sYS1saW5lLXNjYWxlLXBhcnR5LC5sYS1saW5lLXNjYWxlLXBhcnR5PmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWxpbmUtc2NhbGUtcGFydHl7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjQwcHg7aGVpZ2h0OjMycHh9LmxhLWxpbmUtc2NhbGUtcGFydHkubGEtZGFya3tjb2xvcjojMzMzfS5sYS1saW5lLXNjYWxlLXBhcnR5PmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjt3aWR0aDo0cHg7aGVpZ2h0OjMycHg7bWFyZ2luOjAgMnB4O2JvcmRlci1yYWRpdXM6MDstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmxpbmUtc2NhbGUtcGFydHk7YW5pbWF0aW9uLW5hbWU6bGluZS1zY2FsZS1wYXJ0eTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX0ubGEtbGluZS1zY2FsZS1wYXJ0eT5kaXY6bnRoLWNoaWxkKDEpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi40M3M7YW5pbWF0aW9uLWR1cmF0aW9uOi40M3M7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yM3M7YW5pbWF0aW9uLWRlbGF5Oi0uMjNzfS5sYS1saW5lLXNjYWxlLXBhcnR5PmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246LjYyczthbmltYXRpb24tZHVyYXRpb246LjYyczstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjMyczthbmltYXRpb24tZGVsYXk6LS4zMnN9LmxhLWxpbmUtc2NhbGUtcGFydHk+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNDNzO2FuaW1hdGlvbi1kdXJhdGlvbjouNDNzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNDRzO2FuaW1hdGlvbi1kZWxheTotLjQ0c30ubGEtbGluZS1zY2FsZS1wYXJ0eT5kaXY6bnRoLWNoaWxkKDQpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi44czthbmltYXRpb24tZHVyYXRpb246LjhzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMzFzO2FuaW1hdGlvbi1kZWxheTotLjMxc30ubGEtbGluZS1zY2FsZS1wYXJ0eT5kaXY6bnRoLWNoaWxkKDUpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi43NHM7YW5pbWF0aW9uLWR1cmF0aW9uOi43NHM7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yNHM7YW5pbWF0aW9uLWRlbGF5Oi0uMjRzfS5sYS1saW5lLXNjYWxlLXBhcnR5LmxhLXNte3dpZHRoOjIwcHg7aGVpZ2h0OjE2cHh9LmxhLWxpbmUtc2NhbGUtcGFydHkubGEtc20+ZGl2e3dpZHRoOjJweDtoZWlnaHQ6MTZweDttYXJnaW46MCAxcHh9LmxhLWxpbmUtc2NhbGUtcGFydHkubGEtMnh7d2lkdGg6ODBweDtoZWlnaHQ6NjRweH0ubGEtbGluZS1zY2FsZS1wYXJ0eS5sYS0yeD5kaXZ7d2lkdGg6OHB4O2hlaWdodDo2NHB4O21hcmdpbjowIDRweH0ubGEtbGluZS1zY2FsZS1wYXJ0eS5sYS0zeHt3aWR0aDoxMjBweDtoZWlnaHQ6OTZweH0ubGEtbGluZS1zY2FsZS1wYXJ0eS5sYS0zeD5kaXZ7d2lkdGg6MTJweDtoZWlnaHQ6OTZweDttYXJnaW46MCA2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGxpbmUtc2NhbGUtcGFydHl7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVkoMSk7dHJhbnNmb3JtOnNjYWxlWSgxKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVZKC4zKTt0cmFuc2Zvcm06c2NhbGVZKC4zKX19QGtleWZyYW1lcyBsaW5lLXNjYWxlLXBhcnR5ezAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVZKDEpO3RyYW5zZm9ybTpzY2FsZVkoMSl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWSguMyk7dHJhbnNmb3JtOnNjYWxlWSguMyl9fS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCwubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQ+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWR7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjQwcHg7aGVpZ2h0OjMycHh9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQ+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3dpZHRoOjRweDtoZWlnaHQ6MzJweDttYXJnaW46MCAycHg7Ym9yZGVyLXJhZGl1czowOy13ZWJraXQtYW5pbWF0aW9uOi45cyBjdWJpYy1iZXppZXIoLjExLC40OSwuMzgsLjc4KSBpbmZpbml0ZSBsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZDthbmltYXRpb246LjlzIGN1YmljLWJlemllciguMTEsLjQ5LC4zOCwuNzgpIGluZmluaXRlIGxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkfS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZD5kaXY6bnRoLWNoaWxkKDMpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uOXM7YW5pbWF0aW9uLWRlbGF5Oi0uOXN9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkPmRpdjpudGgtY2hpbGQoMiksLmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkPmRpdjpudGgtY2hpbGQoNCl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42NXM7YW5pbWF0aW9uLWRlbGF5Oi0uNjVzfS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZD5kaXY6bnRoLWNoaWxkKDEpLC5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZD5kaXY6bnRoLWNoaWxkKDUpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNHM7YW5pbWF0aW9uLWRlbGF5Oi0uNHN9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkLmxhLXNte3dpZHRoOjIwcHg7aGVpZ2h0OjE2cHh9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkLmxhLXNtPmRpdnt3aWR0aDoycHg7aGVpZ2h0OjE2cHg7bWFyZ2luOjAgMXB4fS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZC5sYS0yeHt3aWR0aDo4MHB4O2hlaWdodDo2NHB4fS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZC5sYS0yeD5kaXZ7d2lkdGg6OHB4O2hlaWdodDo2NHB4O21hcmdpbjowIDRweH0ubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQubGEtM3h7d2lkdGg6MTIwcHg7aGVpZ2h0Ojk2cHh9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkLmxhLTN4PmRpdnt3aWR0aDoxMnB4O2hlaWdodDo5NnB4O21hcmdpbjowIDZweH1ALXdlYmtpdC1rZXlmcmFtZXMgbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWR7MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxleSgxKTt0cmFuc2Zvcm06c2NhbGV5KDEpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZXkoLjMpO3RyYW5zZm9ybTpzY2FsZXkoLjMpfX1Aa2V5ZnJhbWVzIGxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkezAlLDkwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZXkoMSk7dHJhbnNmb3JtOnNjYWxleSgxKX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGV5KC4zKTt0cmFuc2Zvcm06c2NhbGV5KC4zKX19LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LC5sYS1saW5lLXNjYWxlLXB1bHNlLW91dD5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dHtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6NDBweDtoZWlnaHQ6MzJweH0ubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQubGEtZGFya3tjb2xvcjojMzMzfS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dD5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6NHB4O2hlaWdodDozMnB4O21hcmdpbjowIDJweDtib3JkZXItcmFkaXVzOjA7LXdlYmtpdC1hbmltYXRpb246LjlzIGN1YmljLWJlemllciguODUsLjI1LC4zNywuODUpIGluZmluaXRlIGxpbmUtc2NhbGUtcHVsc2Utb3V0O2FuaW1hdGlvbjouOXMgY3ViaWMtYmV6aWVyKC44NSwuMjUsLjM3LC44NSkgaW5maW5pdGUgbGluZS1zY2FsZS1wdWxzZS1vdXR9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0PmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS45czthbmltYXRpb24tZGVsYXk6LS45c30ubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQ+ZGl2Om50aC1jaGlsZCgyKSwubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQ+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjdzO2FuaW1hdGlvbi1kZWxheTotLjdzfS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dD5kaXY6bnRoLWNoaWxkKDEpLC5sYS1saW5lLXNjYWxlLXB1bHNlLW91dD5kaXY6bnRoLWNoaWxkKDUpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNXM7YW5pbWF0aW9uLWRlbGF5Oi0uNXN9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LmxhLXNte3dpZHRoOjIwcHg7aGVpZ2h0OjE2cHh9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LmxhLXNtPmRpdnt3aWR0aDoycHg7aGVpZ2h0OjE2cHg7bWFyZ2luOjAgMXB4fS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC5sYS0yeHt3aWR0aDo4MHB4O2hlaWdodDo2NHB4fS5sYS1saW5lLXNjYWxlLXB1bHNlLW91dC5sYS0yeD5kaXZ7d2lkdGg6OHB4O2hlaWdodDo2NHB4O21hcmdpbjowIDRweH0ubGEtbGluZS1zY2FsZS1wdWxzZS1vdXQubGEtM3h7d2lkdGg6MTIwcHg7aGVpZ2h0Ojk2cHh9LmxhLWxpbmUtc2NhbGUtcHVsc2Utb3V0LmxhLTN4PmRpdnt3aWR0aDoxMnB4O2hlaWdodDo5NnB4O21hcmdpbjowIDZweH1ALXdlYmtpdC1rZXlmcmFtZXMgbGluZS1zY2FsZS1wdWxzZS1vdXR7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZXkoMSk7dHJhbnNmb3JtOnNjYWxleSgxKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGV5KC4zKTt0cmFuc2Zvcm06c2NhbGV5KC4zKX19QGtleWZyYW1lcyBsaW5lLXNjYWxlLXB1bHNlLW91dHswJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxleSgxKTt0cmFuc2Zvcm06c2NhbGV5KDEpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZXkoLjMpO3RyYW5zZm9ybTpzY2FsZXkoLjMpfX0ubGEtbGluZS1zY2FsZSwubGEtbGluZS1zY2FsZT5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS1saW5lLXNjYWxle2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDo0MHB4O2hlaWdodDozMnB4fS5sYS1saW5lLXNjYWxlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtbGluZS1zY2FsZT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6NHB4O2hlaWdodDozMnB4O21hcmdpbjowIDJweDtib3JkZXItcmFkaXVzOjA7LXdlYmtpdC1hbmltYXRpb246MS4ycyBpbmZpbml0ZSBsaW5lLXNjYWxlO2FuaW1hdGlvbjoxLjJzIGluZmluaXRlIGxpbmUtc2NhbGV9LmxhLWxpbmUtc2NhbGU+ZGl2Om50aC1jaGlsZCgxKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yczthbmltYXRpb24tZGVsYXk6LTEuMnN9LmxhLWxpbmUtc2NhbGU+ZGl2Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4xczthbmltYXRpb24tZGVsYXk6LTEuMXN9LmxhLWxpbmUtc2NhbGU+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMXM7YW5pbWF0aW9uLWRlbGF5Oi0xc30ubGEtbGluZS1zY2FsZT5kaXY6bnRoLWNoaWxkKDQpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uOXM7YW5pbWF0aW9uLWRlbGF5Oi0uOXN9LmxhLWxpbmUtc2NhbGU+ZGl2Om50aC1jaGlsZCg1KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjhzO2FuaW1hdGlvbi1kZWxheTotLjhzfS5sYS1saW5lLXNjYWxlLmxhLXNte3dpZHRoOjIwcHg7aGVpZ2h0OjE2cHh9LmxhLWxpbmUtc2NhbGUubGEtc20+ZGl2e3dpZHRoOjJweDtoZWlnaHQ6MTZweDttYXJnaW46MCAxcHh9LmxhLWxpbmUtc2NhbGUubGEtMnh7d2lkdGg6ODBweDtoZWlnaHQ6NjRweH0ubGEtbGluZS1zY2FsZS5sYS0yeD5kaXZ7d2lkdGg6OHB4O2hlaWdodDo2NHB4O21hcmdpbjowIDRweH0ubGEtbGluZS1zY2FsZS5sYS0zeHt3aWR0aDoxMjBweDtoZWlnaHQ6OTZweH0ubGEtbGluZS1zY2FsZS5sYS0zeD5kaXZ7d2lkdGg6MTJweDtoZWlnaHQ6OTZweDttYXJnaW46MCA2cHh9QC13ZWJraXQta2V5ZnJhbWVzIGxpbmUtc2NhbGV7MCUsMTAwJSw0MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVZKC40KTt0cmFuc2Zvcm06c2NhbGVZKC40KX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVZKDEpO3RyYW5zZm9ybTpzY2FsZVkoMSl9fUBrZXlmcmFtZXMgbGluZS1zY2FsZXswJSwxMDAlLDQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVkoLjQpO3RyYW5zZm9ybTpzY2FsZVkoLjQpfTIwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVkoMSk7dHJhbnNmb3JtOnNjYWxlWSgxKX19LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZywubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZ3tkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDstd2Via2l0LWFuaW1hdGlvbjo2cyBsaW5lYXIgaW5maW5pdGUgbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLXJvdGF0ZTthbmltYXRpb246NnMgbGluZWFyIGluZmluaXRlIGxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy1yb3RhdGV9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MnB4O2hlaWdodDoxMHB4O21hcmdpbjotNXB4IDJweCAycHggLTFweDtib3JkZXItcmFkaXVzOjA7LXdlYmtpdC1hbmltYXRpb246MXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nO2FuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBsaW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmd9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDEpe3RvcDoxNSU7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS44NzVzO2FuaW1hdGlvbi1kZWxheTotLjg3NXN9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDIpe3RvcDoyNS4yNTEyNjI2NTg1JTtsZWZ0Ojc0Ljc0ODczNzM0MTUlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS43NXM7YW5pbWF0aW9uLWRlbGF5Oi0uNzVzfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCgzKXt0b3A6NTAlO2xlZnQ6ODUlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS42MjVzO2FuaW1hdGlvbi1kZWxheTotLjYyNXN9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDQpe3RvcDo3NC43NDg3MzczNDE1JTtsZWZ0Ojc0Ljc0ODczNzM0MTUlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjVzO2FuaW1hdGlvbi1kZWxheTotLjVzfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg1KXt0b3A6ODQuOTk5OTk5OTk3NCU7bGVmdDo1MC4wMDAwMDAwMDA0JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4zNzVzO2FuaW1hdGlvbi1kZWxheTotLjM3NXN9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDYpe3RvcDo3NC43NDg3MzY5ODYyJTtsZWZ0OjI1LjI1MTI2MjcxOTMlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyMjVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjI1ZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjI1czthbmltYXRpb24tZGVsYXk6LS4yNXN9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDcpe3RvcDo0OS45OTk5ODA2MTg5JTtsZWZ0OjE1LjAwMDAwMzk4MzQlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMTI1c30ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoOCl7dG9wOjI1LjI1MDY5NDk3OTglO2xlZnQ6MjUuMjUxMzk4OTI5MiU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDMxNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzMTVkZWcpOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjBzO2FuaW1hdGlvbi1kZWxheTowc30ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy5sYS1zbT5kaXZ7d2lkdGg6MXB4O2hlaWdodDo0cHg7bWFyZ2luLXRvcDotMnB4O21hcmdpbi1sZWZ0OjB9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy5sYS0yeHt3aWR0aDo2NHB4O2hlaWdodDo2NHB4fS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcubGEtMng+ZGl2e3dpZHRoOjRweDtoZWlnaHQ6MjBweDttYXJnaW4tdG9wOi0xMHB4O21hcmdpbi1sZWZ0Oi0ycHh9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcubGEtM3g+ZGl2e3dpZHRoOjZweDtoZWlnaHQ6MzBweDttYXJnaW4tdG9wOi0xNXB4O21hcmdpbi1sZWZ0Oi0zcHh9QC13ZWJraXQta2V5ZnJhbWVzIGxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy1yb3RhdGV7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKX19QGtleWZyYW1lcyBsaW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmctcm90YXRlezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBsaW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmd7NTAle29wYWNpdHk6LjJ9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nezUwJXtvcGFjaXR5Oi4yfTEwMCV7b3BhY2l0eToxfX0ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLC5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRle2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDozMnB4fS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUubGEtZGFya3tjb2xvcjojMzMzfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjJweDtoZWlnaHQ6MTBweDttYXJnaW46LTVweCAycHggMnB4IC0xcHg7Ym9yZGVyLXJhZGl1czowOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZTthbmltYXRpb246MXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2Om50aC1jaGlsZCgxKXt0b3A6MTUlO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uODc1czthbmltYXRpb24tZGVsYXk6LS44NzVzfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2Om50aC1jaGlsZCgyKXt0b3A6MjUuMjUxMjYyNjU4NSU7bGVmdDo3NC43NDg3MzczNDE1JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNzVzO2FuaW1hdGlvbi1kZWxheTotLjc1c30ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlPmRpdjpudGgtY2hpbGQoMyl7dG9wOjUwJTtsZWZ0Ojg1JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNjI1czthbmltYXRpb24tZGVsYXk6LS42MjVzfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2Om50aC1jaGlsZCg0KXt0b3A6NzQuNzQ4NzM3MzQxNSU7bGVmdDo3NC43NDg3MzczNDE1JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS41czthbmltYXRpb24tZGVsYXk6LS41c30ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlPmRpdjpudGgtY2hpbGQoNSl7dG9wOjg0Ljk5OTk5OTk5NzQlO2xlZnQ6NTAuMDAwMDAwMDAwNCU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMzc1czthbmltYXRpb24tZGVsYXk6LS4zNzVzfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2Om50aC1jaGlsZCg2KXt0b3A6NzQuNzQ4NzM2OTg2MiU7bGVmdDoyNS4yNTEyNjI3MTkzJTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjI1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDIyNWRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMjVzfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGU+ZGl2Om50aC1jaGlsZCg3KXt0b3A6NDkuOTk5OTgwNjE4OSU7bGVmdDoxNS4wMDAwMDM5ODM0JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4xMjVzO2FuaW1hdGlvbi1kZWxheTotLjEyNXN9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZT5kaXY6bnRoLWNoaWxkKDgpe3RvcDoyNS4yNTA2OTQ5Nzk4JTtsZWZ0OjI1LjI1MTM5ODkyOTIlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzMTVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzE1ZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTowczthbmltYXRpb24tZGVsYXk6MHN9LmxhLWxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS5sYS1zbXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUubGEtc20+ZGl2e3dpZHRoOjFweDtoZWlnaHQ6NHB4O21hcmdpbi10b3A6LTJweDttYXJnaW4tbGVmdDowfS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLmxhLTJ4PmRpdnt3aWR0aDo0cHg7aGVpZ2h0OjIwcHg7bWFyZ2luLXRvcDotMTBweDttYXJnaW4tbGVmdDotMnB4fS5sYS1saW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH0ubGEtbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLmxhLTN4PmRpdnt3aWR0aDo2cHg7aGVpZ2h0OjMwcHg7bWFyZ2luLXRvcDotMTVweDttYXJnaW4tbGVmdDotM3B4fUAtd2Via2l0LWtleWZyYW1lcyBsaW5lLXNwaW4tY2xvY2t3aXNlLWZhZGV7NTAle29wYWNpdHk6LjJ9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlezUwJXtvcGFjaXR5Oi4yfTEwMCV7b3BhY2l0eToxfX0ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmcsLmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5ne2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDozMnB4Oy13ZWJraXQtYW5pbWF0aW9uOjZzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXNwaW4tZmFkZS1yb3RhdGluZy1yb3RhdGU7YW5pbWF0aW9uOjZzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXNwaW4tZmFkZS1yb3RhdGluZy1yb3RhdGV9LmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmc+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjJweDtoZWlnaHQ6MTBweDttYXJnaW46LTVweCAycHggMnB4IC0xcHg7Ym9yZGVyLXJhZGl1czowOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nO2FuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBsaW5lLXNwaW4tZmFkZS1yb3RhdGluZ30ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCgxKXt0b3A6MTUlO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXN9LmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoMil7dG9wOjI1LjI1MTI2MjY1ODUlO2xlZnQ6NzQuNzQ4NzM3MzQxNSU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjI1c30ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCgzKXt0b3A6NTAlO2xlZnQ6ODUlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuMzc1czthbmltYXRpb24tZGVsYXk6LTEuMzc1c30ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg0KXt0b3A6NzQuNzQ4NzM3MzQxNSU7bGVmdDo3NC43NDg3MzczNDE1JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjVzfS5sYS1saW5lLXNwaW4tZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDUpe3RvcDo4NC45OTk5OTk5OTc0JTtsZWZ0OjUwLjAwMDAwMDAwMDQlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS42MjVzO2FuaW1hdGlvbi1kZWxheTotMS42MjVzfS5sYS1saW5lLXNwaW4tZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDYpe3RvcDo3NC43NDg3MzY5ODYyJTtsZWZ0OjI1LjI1MTI2MjcxOTMlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyMjVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjI1ZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS43NXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjc1c30ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg3KXt0b3A6NDkuOTk5OTgwNjE4OSU7bGVmdDoxNS4wMDAwMDM5ODM0JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuODc1czthbmltYXRpb24tZGVsYXk6LTEuODc1c30ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg4KXt0b3A6MjUuMjUwNjk0OTc5OCU7bGVmdDoyNS4yNTEzOTg5MjkyJTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzE1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDMxNWRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTJzO2FuaW1hdGlvbi1kZWxheTotMnN9LmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nLmxhLXNtPmRpdnt3aWR0aDoxcHg7aGVpZ2h0OjRweDttYXJnaW4tdG9wOi0ycHg7bWFyZ2luLWxlZnQ6MH0ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmcubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtbGluZS1zcGluLWZhZGUtcm90YXRpbmcubGEtMng+ZGl2e3dpZHRoOjRweDtoZWlnaHQ6MjBweDttYXJnaW4tdG9wOi0xMHB4O21hcmdpbi1sZWZ0Oi0ycHh9LmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWxpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nLmxhLTN4PmRpdnt3aWR0aDo2cHg7aGVpZ2h0OjMwcHg7bWFyZ2luLXRvcDotMTVweDttYXJnaW4tbGVmdDotM3B4fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXNwaW4tZmFkZS1yb3RhdGluZy1yb3RhdGV7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgYmFsbC1zcGluLWZhZGUtcm90YXRpbmctcm90YXRlezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgbGluZS1zcGluLWZhZGUtcm90YXRpbmd7NTAle29wYWNpdHk6LjJ9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgbGluZS1zcGluLWZhZGUtcm90YXRpbmd7NTAle29wYWNpdHk6LjJ9MTAwJXtvcGFjaXR5OjF9fS5sYS1saW5lLXNwaW4tZmFkZSwubGEtbGluZS1zcGluLWZhZGU+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtbGluZS1zcGluLWZhZGV7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLWxpbmUtc3Bpbi1mYWRlLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtbGluZS1zcGluLWZhZGU+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjJweDtoZWlnaHQ6MTBweDttYXJnaW46LTVweCAycHggMnB4IC0xcHg7Ym9yZGVyLXJhZGl1czowOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGxpbmUtc3Bpbi1mYWRlO2FuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBsaW5lLXNwaW4tZmFkZX0ubGEtbGluZS1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCgxKXt0b3A6MTUlO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjEyNXN9LmxhLWxpbmUtc3Bpbi1mYWRlPmRpdjpudGgtY2hpbGQoMil7dG9wOjI1LjI1MTI2MjY1ODUlO2xlZnQ6NzQuNzQ4NzM3MzQxNSU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjI1c30ubGEtbGluZS1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCgzKXt0b3A6NTAlO2xlZnQ6ODUlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuMzc1czthbmltYXRpb24tZGVsYXk6LTEuMzc1c30ubGEtbGluZS1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCg0KXt0b3A6NzQuNzQ4NzM3MzQxNSU7bGVmdDo3NC43NDg3MzczNDE1JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjVzfS5sYS1saW5lLXNwaW4tZmFkZT5kaXY6bnRoLWNoaWxkKDUpe3RvcDo4NC45OTk5OTk5OTc0JTtsZWZ0OjUwLjAwMDAwMDAwMDQlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS42MjVzO2FuaW1hdGlvbi1kZWxheTotMS42MjVzfS5sYS1saW5lLXNwaW4tZmFkZT5kaXY6bnRoLWNoaWxkKDYpe3RvcDo3NC43NDg3MzY5ODYyJTtsZWZ0OjI1LjI1MTI2MjcxOTMlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyMjVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjI1ZGVnKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS43NXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjc1c30ubGEtbGluZS1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCg3KXt0b3A6NDkuOTk5OTgwNjE4OSU7bGVmdDoxNS4wMDAwMDM5ODM0JTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuODc1czthbmltYXRpb24tZGVsYXk6LTEuODc1c30ubGEtbGluZS1zcGluLWZhZGU+ZGl2Om50aC1jaGlsZCg4KXt0b3A6MjUuMjUwNjk0OTc5OCU7bGVmdDoyNS4yNTEzOTg5MjkyJTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzE1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDMxNWRlZyk7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTJzO2FuaW1hdGlvbi1kZWxheTotMnN9LmxhLWxpbmUtc3Bpbi1mYWRlLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLWxpbmUtc3Bpbi1mYWRlLmxhLXNtPmRpdnt3aWR0aDoxcHg7aGVpZ2h0OjRweDttYXJnaW4tdG9wOi0ycHg7bWFyZ2luLWxlZnQ6MH0ubGEtbGluZS1zcGluLWZhZGUubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtbGluZS1zcGluLWZhZGUubGEtMng+ZGl2e3dpZHRoOjRweDtoZWlnaHQ6MjBweDttYXJnaW4tdG9wOi0xMHB4O21hcmdpbi1sZWZ0Oi0ycHh9LmxhLWxpbmUtc3Bpbi1mYWRlLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9LmxhLWxpbmUtc3Bpbi1mYWRlLmxhLTN4PmRpdnt3aWR0aDo2cHg7aGVpZ2h0OjMwcHg7bWFyZ2luLXRvcDotMTVweDttYXJnaW4tbGVmdDotM3B4fUAtd2Via2l0LWtleWZyYW1lcyBsaW5lLXNwaW4tZmFkZXs1MCV7b3BhY2l0eTouMn0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBsaW5lLXNwaW4tZmFkZXs1MCV7b3BhY2l0eTouMn0xMDAle29wYWNpdHk6MX19LmxhLXBhY21hbiwubGEtcGFjbWFuPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLXBhY21hbntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtcGFjbWFuLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtcGFjbWFuPmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcn0ubGEtcGFjbWFuPmRpdjpudGgtY2hpbGQoMSksLmxhLXBhY21hbj5kaXY6bnRoLWNoaWxkKDIpe3dpZHRoOjA7aGVpZ2h0OjA7YmFja2dyb3VuZDowIDA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxNnB4O2JvcmRlci1yaWdodC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb246LjVzIGluZmluaXRlIHBhY21hbi1yb3RhdGUtaGFsZi11cDthbmltYXRpb246LjVzIGluZmluaXRlIHBhY21hbi1yb3RhdGUtaGFsZi11cH0ubGEtcGFjbWFuPmRpdjpudGgtY2hpbGQoMil7bWFyZ2luLXRvcDotMzJweDstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnBhY21hbi1yb3RhdGUtaGFsZi1kb3duO2FuaW1hdGlvbi1uYW1lOnBhY21hbi1yb3RhdGUtaGFsZi1kb3dufS5sYS1wYWNtYW4+ZGl2Om50aC1jaGlsZCgzKSwubGEtcGFjbWFuPmRpdjpudGgtY2hpbGQoNCksLmxhLXBhY21hbj5kaXY6bnRoLWNoaWxkKDUpLC5sYS1wYWNtYW4+ZGl2Om50aC1jaGlsZCg2KXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6MjAwJTt3aWR0aDo4cHg7aGVpZ2h0OjhweDtib3JkZXItcmFkaXVzOjEwMCU7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOjJzIGxpbmVhciBpbmZpbml0ZSBwYWNtYW4tYmFsbHM7YW5pbWF0aW9uOjJzIGxpbmVhciBpbmZpbml0ZSBwYWNtYW4tYmFsbHN9LmxhLXBhY21hbj5kaXY6bnRoLWNoaWxkKDMpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjQ0czthbmltYXRpb24tZGVsYXk6LTEuNDRzfS5sYS1wYWNtYW4+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS45NHM7YW5pbWF0aW9uLWRlbGF5Oi0xLjk0c30ubGEtcGFjbWFuPmRpdjpudGgtY2hpbGQoNSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTIuNDRzO2FuaW1hdGlvbi1kZWxheTotMi40NHN9LmxhLXBhY21hbj5kaXY6bnRoLWNoaWxkKDYpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0yLjk0czthbmltYXRpb24tZGVsYXk6LTIuOTRzfS5sYS1wYWNtYW4ubGEtc217d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtcGFjbWFuLmxhLXNtPmRpdjpudGgtY2hpbGQoMSksLmxhLXBhY21hbi5sYS1zbT5kaXY6bnRoLWNoaWxkKDIpe2JvcmRlci13aWR0aDo4cHh9LmxhLXBhY21hbi5sYS1zbT5kaXY6bnRoLWNoaWxkKDIpe21hcmdpbi10b3A6LTE2cHh9LmxhLXBhY21hbi5sYS1zbT5kaXY6bnRoLWNoaWxkKDMpLC5sYS1wYWNtYW4ubGEtc20+ZGl2Om50aC1jaGlsZCg0KSwubGEtcGFjbWFuLmxhLXNtPmRpdjpudGgtY2hpbGQoNSksLmxhLXBhY21hbi5sYS1zbT5kaXY6bnRoLWNoaWxkKDYpe3dpZHRoOjRweDtoZWlnaHQ6NHB4fS5sYS1wYWNtYW4ubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtcGFjbWFuLmxhLTJ4PmRpdjpudGgtY2hpbGQoMSksLmxhLXBhY21hbi5sYS0yeD5kaXY6bnRoLWNoaWxkKDIpe2JvcmRlci13aWR0aDozMnB4fS5sYS1wYWNtYW4ubGEtMng+ZGl2Om50aC1jaGlsZCgyKXttYXJnaW4tdG9wOi02NHB4fS5sYS1wYWNtYW4ubGEtMng+ZGl2Om50aC1jaGlsZCgzKSwubGEtcGFjbWFuLmxhLTJ4PmRpdjpudGgtY2hpbGQoNCksLmxhLXBhY21hbi5sYS0yeD5kaXY6bnRoLWNoaWxkKDUpLC5sYS1wYWNtYW4ubGEtMng+ZGl2Om50aC1jaGlsZCg2KXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1wYWNtYW4ubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH0ubGEtcGFjbWFuLmxhLTN4PmRpdjpudGgtY2hpbGQoMSksLmxhLXBhY21hbi5sYS0zeD5kaXY6bnRoLWNoaWxkKDIpe2JvcmRlci13aWR0aDo0OHB4fS5sYS1wYWNtYW4ubGEtM3g+ZGl2Om50aC1jaGlsZCgyKXttYXJnaW4tdG9wOi05NnB4fS5sYS1wYWNtYW4ubGEtM3g+ZGl2Om50aC1jaGlsZCgzKSwubGEtcGFjbWFuLmxhLTN4PmRpdjpudGgtY2hpbGQoNCksLmxhLXBhY21hbi5sYS0zeD5kaXY6bnRoLWNoaWxkKDUpLC5sYS1wYWNtYW4ubGEtM3g+ZGl2Om50aC1jaGlsZCg2KXt3aWR0aDoyNHB4O2hlaWdodDoyNHB4fUAtd2Via2l0LWtleWZyYW1lcyBwYWNtYW4tcm90YXRlLWhhbGYtdXB7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9NTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBwYWNtYW4tcm90YXRlLWhhbGYtdXB7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9NTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIHBhY21hbi1yb3RhdGUtaGFsZi1kb3duezAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9fUBrZXlmcmFtZXMgcGFjbWFuLXJvdGF0ZS1oYWxmLWRvd257MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX19QC13ZWJraXQta2V5ZnJhbWVzIHBhY21hbi1iYWxsc3swJXtsZWZ0OjIwMCU7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9NSV7b3BhY2l0eTouNX02NiV7b3BhY2l0eToxfTY3JXtvcGFjaXR5OjB9MTAwJXtsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX19QGtleWZyYW1lcyBwYWNtYW4tYmFsbHN7MCV7bGVmdDoyMDAlO29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfTUle29wYWNpdHk6LjV9NjYle29wYWNpdHk6MX02NyV7b3BhY2l0eTowfTEwMCV7bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9fS5sYS1zcXVhcmUtamVsbHktYm94LC5sYS1zcXVhcmUtamVsbHktYm94PmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxhLXNxdWFyZS1qZWxseS1ib3h7ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLXNxdWFyZS1qZWxseS1ib3gubGEtZGFya3tjb2xvcjojMzMzfS5sYS1zcXVhcmUtamVsbHktYm94PmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcn0ubGEtc3F1YXJlLWplbGx5LWJveD5kaXY6bnRoLWNoaWxkKDEpLC5sYS1zcXVhcmUtamVsbHktYm94PmRpdjpudGgtY2hpbGQoMil7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3dpZHRoOjEwMCV9LmxhLXNxdWFyZS1qZWxseS1ib3g+ZGl2Om50aC1jaGlsZCgxKXt0b3A6LTI1JTt6LWluZGV4OjE7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czoxMCU7LXdlYmtpdC1hbmltYXRpb246LjZzIGxpbmVhciAtLjFzIGluZmluaXRlIHNxdWFyZS1qZWxseS1ib3gtYW5pbWF0ZTthbmltYXRpb246LjZzIGxpbmVhciAtLjFzIGluZmluaXRlIHNxdWFyZS1qZWxseS1ib3gtYW5pbWF0ZX0ubGEtc3F1YXJlLWplbGx5LWJveD5kaXY6bnRoLWNoaWxkKDIpe2JvdHRvbTotOSU7aGVpZ2h0OjEwJTtiYWNrZ3JvdW5kOiMwMDA7Ym9yZGVyLXJhZGl1czo1MCU7b3BhY2l0eTouMjstd2Via2l0LWFuaW1hdGlvbjouNnMgbGluZWFyIC0uMXMgaW5maW5pdGUgc3F1YXJlLWplbGx5LWJveC1zaGFkb3c7YW5pbWF0aW9uOi42cyBsaW5lYXIgLS4xcyBpbmZpbml0ZSBzcXVhcmUtamVsbHktYm94LXNoYWRvd30ubGEtc3F1YXJlLWplbGx5LWJveC5sYS1zbXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5sYS1zcXVhcmUtamVsbHktYm94LmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLXNxdWFyZS1qZWxseS1ib3gubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH1ALXdlYmtpdC1rZXlmcmFtZXMgc3F1YXJlLWplbGx5LWJveC1hbmltYXRlezE3JXtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxMCV9MjUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUlKSByb3RhdGUoMjIuNWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUlKSByb3RhdGUoMjIuNWRlZyl9NTAle2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpIHNjYWxlKDEsLjkpIHJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNTAlKSBzY2FsZSgxLC45KSByb3RhdGUoNDVkZWcpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDI1JSkgcm90YXRlKDY3LjVkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDI1JSkgcm90YXRlKDY3LjVkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZSg5MGRlZyl9fUBrZXlmcmFtZXMgc3F1YXJlLWplbGx5LWJveC1hbmltYXRlezE3JXtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxMCV9MjUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUlKSByb3RhdGUoMjIuNWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUlKSByb3RhdGUoMjIuNWRlZyl9NTAle2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpIHNjYWxlKDEsLjkpIHJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNTAlKSBzY2FsZSgxLC45KSByb3RhdGUoNDVkZWcpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDI1JSkgcm90YXRlKDY3LjVkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDI1JSkgcm90YXRlKDY3LjVkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZSg5MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBzcXVhcmUtamVsbHktYm94LXNoYWRvd3s1MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4yNSwxKTt0cmFuc2Zvcm06c2NhbGUoMS4yNSwxKX19QGtleWZyYW1lcyBzcXVhcmUtamVsbHktYm94LXNoYWRvd3s1MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4yNSwxKTt0cmFuc2Zvcm06c2NhbGUoMS4yNSwxKX19LmxhLXNxdWFyZS1sb2FkZXIsLmxhLXNxdWFyZS1sb2FkZXI+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtc3F1YXJlLWxvYWRlcntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtc3F1YXJlLWxvYWRlci5sYS1kYXJre2NvbG9yOiMzMzN9LmxhLXNxdWFyZS1sb2FkZXI+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7Ym9yZGVyOjJweCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOjAgMDtib3JkZXItcmFkaXVzOjA7LXdlYmtpdC1hbmltYXRpb246MnMgaW5maW5pdGUgc3F1YXJlLWxvYWRlcjthbmltYXRpb246MnMgaW5maW5pdGUgc3F1YXJlLWxvYWRlcn0ubGEtc3F1YXJlLWxvYWRlcj5kaXY6YWZ0ZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwJTt2ZXJ0aWNhbC1hbGlnbjp0b3A7Y29udGVudDpcIlwiO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yOy13ZWJraXQtYW5pbWF0aW9uOjJzIGVhc2UtaW4gaW5maW5pdGUgc3F1YXJlLWxvYWRlci1pbm5lcjthbmltYXRpb246MnMgZWFzZS1pbiBpbmZpbml0ZSBzcXVhcmUtbG9hZGVyLWlubmVyfS5sYS1zcXVhcmUtbG9hZGVyLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLXNxdWFyZS1sb2FkZXIubGEtc20+ZGl2e2JvcmRlci13aWR0aDoxcHh9LmxhLXNxdWFyZS1sb2FkZXIubGEtMnh7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH0ubGEtc3F1YXJlLWxvYWRlci5sYS0yeD5kaXZ7Ym9yZGVyLXdpZHRoOjRweH0ubGEtc3F1YXJlLWxvYWRlci5sYS0zeHt3aWR0aDo5NnB4O2hlaWdodDo5NnB4fS5sYS1zcXVhcmUtbG9hZGVyLmxhLTN4PmRpdntib3JkZXItd2lkdGg6NnB4fUAtd2Via2l0LWtleWZyYW1lcyBzcXVhcmUtbG9hZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTI1JSw1MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfTEwMCUsNzUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBzcXVhcmUtbG9hZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTI1JSw1MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfTEwMCUsNzUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIHNxdWFyZS1sb2FkZXItaW5uZXJ7MCUsMTAwJSwyNSV7aGVpZ2h0OjB9NTAlLDc1JXtoZWlnaHQ6MTAwJX19QGtleWZyYW1lcyBzcXVhcmUtbG9hZGVyLWlubmVyezAlLDEwMCUsMjUle2hlaWdodDowfTUwJSw3NSV7aGVpZ2h0OjEwMCV9fS5sYS1zcXVhcmUtc3BpbiwubGEtc3F1YXJlLXNwaW4+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtc3F1YXJlLXNwaW57ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb2xvcjojZmZmO3dpZHRoOjMycHg7aGVpZ2h0OjMycHh9LmxhLXNxdWFyZS1zcGluLmxhLWRhcmt7Y29sb3I6IzMzM30ubGEtc3F1YXJlLXNwaW4+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czowOy13ZWJraXQtYW5pbWF0aW9uOjNzIGN1YmljLWJlemllciguMDksLjU3LC40OSwuOSkgaW5maW5pdGUgc3F1YXJlLXNwaW47YW5pbWF0aW9uOjNzIGN1YmljLWJlemllciguMDksLjU3LC40OSwuOSkgaW5maW5pdGUgc3F1YXJlLXNwaW59LmxhLXNxdWFyZS1zcGluLmxhLXNte3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LmxhLXNxdWFyZS1zcGluLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLXNxdWFyZS1zcGluLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHh9QC13ZWJraXQta2V5ZnJhbWVzIHNxdWFyZS1zcGluezAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMCl9MjUley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDE4MGRlZyl9NzUley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMTgwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgxODBkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgzNjBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDM2MGRlZyl9fUBrZXlmcmFtZXMgc3F1YXJlLXNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKX0yNSV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDApO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgxODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDE4MGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDM2MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMzYwZGVnKX19LmxhLXRpbWVyLC5sYS10aW1lcj5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5sYS10aW1lcntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7d2lkdGg6MzJweDtoZWlnaHQ6MzJweH0ubGEtdGltZXIubGEtZGFya3tjb2xvcjojMzMzfS5sYS10aW1lcj5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtib3JkZXI6MnB4IHNvbGlkIGN1cnJlbnRDb2xvcjt3aWR0aDozMnB4O2hlaWdodDozMnB4O2JhY2tncm91bmQ6MCAwO2JvcmRlci1yYWRpdXM6MTAwJX0ubGEtdGltZXI+ZGl2OmFmdGVyLC5sYS10aW1lcj5kaXY6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxNHB4O2xlZnQ6MTRweDtkaXNwbGF5OmJsb2NrO3dpZHRoOjJweDttYXJnaW4tdG9wOi0xcHg7bWFyZ2luLWxlZnQ6LTFweDtjb250ZW50OlwiXCI7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czoycHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjFweCAxcHggMDt0cmFuc2Zvcm0tb3JpZ2luOjFweCAxcHggMDstd2Via2l0LWFuaW1hdGlvbjoxLjI1cyBsaW5lYXIgLTYyNW1zIGluZmluaXRlIHRpbWVyLWxvYWRlcjthbmltYXRpb246MS4yNXMgbGluZWFyIC02MjVtcyBpbmZpbml0ZSB0aW1lci1sb2FkZXJ9LmxhLXRpbWVyPmRpdjpiZWZvcmV7aGVpZ2h0OjEycHh9LmxhLXRpbWVyPmRpdjphZnRlcntoZWlnaHQ6OHB4Oy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjE1czthbmltYXRpb24tZHVyYXRpb246MTVzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi03LjVzO2FuaW1hdGlvbi1kZWxheTotNy41c30ubGEtdGltZXIubGEtc217d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0ubGEtdGltZXIubGEtc20+ZGl2e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyLXdpZHRoOjFweH0ubGEtdGltZXIubGEtc20+ZGl2OmFmdGVyLC5sYS10aW1lci5sYS1zbT5kaXY6YmVmb3Jle3RvcDo3cHg7bGVmdDo3cHg7d2lkdGg6MXB4O21hcmdpbi10b3A6LS41cHg7bWFyZ2luLWxlZnQ6LS41cHg7Ym9yZGVyLXJhZGl1czoxcHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOi41cHggLjVweCAwO3RyYW5zZm9ybS1vcmlnaW46LjVweCAuNXB4IDB9LmxhLXRpbWVyLmxhLXNtPmRpdjpiZWZvcmV7aGVpZ2h0OjZweH0ubGEtdGltZXIubGEtc20+ZGl2OmFmdGVye2hlaWdodDo0cHh9LmxhLXRpbWVyLmxhLTJ4e3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHh9LmxhLXRpbWVyLmxhLTJ4PmRpdnt3aWR0aDo2NHB4O2hlaWdodDo2NHB4O2JvcmRlci13aWR0aDo0cHh9LmxhLXRpbWVyLmxhLTJ4PmRpdjphZnRlciwubGEtdGltZXIubGEtMng+ZGl2OmJlZm9yZXt0b3A6MjhweDtsZWZ0OjI4cHg7d2lkdGg6NHB4O21hcmdpbi10b3A6LTJweDttYXJnaW4tbGVmdDotMnB4O2JvcmRlci1yYWRpdXM6NHB4Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjoycHggMnB4IDA7dHJhbnNmb3JtLW9yaWdpbjoycHggMnB4IDB9LmxhLXRpbWVyLmxhLTJ4PmRpdjpiZWZvcmV7aGVpZ2h0OjI0cHh9LmxhLXRpbWVyLmxhLTJ4PmRpdjphZnRlcntoZWlnaHQ6MTZweH0ubGEtdGltZXIubGEtM3h7d2lkdGg6OTZweDtoZWlnaHQ6OTZweH0ubGEtdGltZXIubGEtM3g+ZGl2e3dpZHRoOjk2cHg7aGVpZ2h0Ojk2cHg7Ym9yZGVyLXdpZHRoOjZweH0ubGEtdGltZXIubGEtM3g+ZGl2OmFmdGVyLC5sYS10aW1lci5sYS0zeD5kaXY6YmVmb3Jle3RvcDo0MnB4O2xlZnQ6NDJweDt3aWR0aDo2cHg7bWFyZ2luLXRvcDotM3B4O21hcmdpbi1sZWZ0Oi0zcHg7Ym9yZGVyLXJhZGl1czo2cHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjNweCAzcHggMDt0cmFuc2Zvcm0tb3JpZ2luOjNweCAzcHggMH0ubGEtdGltZXIubGEtM3g+ZGl2OmJlZm9yZXtoZWlnaHQ6MzZweH0ubGEtdGltZXIubGEtM3g+ZGl2OmFmdGVye2hlaWdodDoyNHB4fUAtd2Via2l0LWtleWZyYW1lcyB0aW1lci1sb2FkZXJ7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgdGltZXItbG9hZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0ubGEtdHJpYW5nbGUtc2tldy1zcGluLC5sYS10cmlhbmdsZS1za2V3LXNwaW4+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGEtdHJpYW5nbGUtc2tldy1zcGlue2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjt3aWR0aDozMnB4O2hlaWdodDoxNnB4fS5sYS10cmlhbmdsZS1za2V3LXNwaW4ubGEtZGFya3tjb2xvcjojMzMzfS5sYS10cmlhbmdsZS1za2V3LXNwaW4+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3dpZHRoOjA7aGVpZ2h0OjA7YmFja2dyb3VuZDowIDA7Ym9yZGVyOnNvbGlkO2JvcmRlci13aWR0aDowIDE2cHggMTZweDtib3JkZXItcmlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1hbmltYXRpb246M3MgY3ViaWMtYmV6aWVyKC4wOSwuNTcsLjQ5LC45KSBpbmZpbml0ZSB0cmlhbmdsZS1za2V3LXNwaW47YW5pbWF0aW9uOjNzIGN1YmljLWJlemllciguMDksLjU3LC40OSwuOSkgaW5maW5pdGUgdHJpYW5nbGUtc2tldy1zcGlufS5sYS10cmlhbmdsZS1za2V3LXNwaW4ubGEtc217d2lkdGg6MTZweDtoZWlnaHQ6OHB4fS5sYS10cmlhbmdsZS1za2V3LXNwaW4ubGEtc20+ZGl2e2JvcmRlci13aWR0aDowIDhweCA4cHh9LmxhLXRyaWFuZ2xlLXNrZXctc3Bpbi5sYS0yeHt3aWR0aDo2NHB4O2hlaWdodDozMnB4fS5sYS10cmlhbmdsZS1za2V3LXNwaW4ubGEtMng+ZGl2e2JvcmRlci13aWR0aDowIDMycHggMzJweH0ubGEtdHJpYW5nbGUtc2tldy1zcGluLmxhLTN4e3dpZHRoOjk2cHg7aGVpZ2h0OjQ4cHh9LmxhLXRyaWFuZ2xlLXNrZXctc3Bpbi5sYS0zeD5kaXZ7Ym9yZGVyLXdpZHRoOjAgNDhweCA0OHB4fUAtd2Via2l0LWtleWZyYW1lcyB0cmlhbmdsZS1za2V3LXNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKX0yNSV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDApO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgxODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDE4MGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDM2MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMzYwZGVnKX19QGtleWZyYW1lcyB0cmlhbmdsZS1za2V3LXNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKX0yNSV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDApO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgxODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDE4MGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDM2MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMzYwZGVnKX19LmJsYWNrLW92ZXJsYXl7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDo5OTk5OSFpbXBvcnRhbnR9LmJsYWNrLW92ZXJsYXk+ZGl2e3RvcDo1MCU7bGVmdDo1MCU7bWFyZ2luOjA7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfS5sb2FkaW5nLXRleHR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjYwJTtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNjAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTYwJSk7ei1pbmRleDo5OTk5OSFpbXBvcnRhbnR9YF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4U3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogVG8gc2V0IGJhY2tkcm9wIGNvbG9yKCdyZ2JhKDUxLDUxLDUxLDAuOCknKVxuICAgKiBPbmx5IHN1cHBvcnRzIFJHQkEgY29sb3IgZm9ybWF0XG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBiZENvbG9yID0gJ3JnYmEoNTEsNTEsNTEsMC44KSc7XG4gIC8qKlxuICAgKiBUbyBzZXQgc3Bpbm5lciBzaXplXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzaXplID0gJyc7XG4gIC8qKlxuICAgKiBUbyBzZXQgc3Bpbm5lciBjb2xvcignI2ZmZicpXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb2xvciA9ICcjZmZmJztcbiAgLyoqXG4gICAqIFRvIHNldCB0eXBlIG9mIHNwaW5uZXJcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRvIHNldCBsb2FkaW5nIHRleHQoZmFsc2UpXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBsb2FkaW5nVGV4dCA9IGZhbHNlO1xuICAvKipcbiAgICogQ2xhc3MgZm9yIHNwaW5uZXJcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICovXG4gIHNwaW5uZXJDbGFzczogc3RyaW5nO1xuICAvKipcbiAgICogRmxhZyB0byBzaG93L2hpZGUgc3Bpbm5lclxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgc2hvd1NwaW5uZXIgPSBmYWxzZTtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YXJpYWJsZSBmb3Igc3Bpbm5lclxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgc3Bpbm5lclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvKipcbiAgICogQXJyYXkgZm9yIHNwaW5uZXIgZGl2c1xuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgZGl2QXJyYXk6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgLyoqXG4gICAqIENvdW50ZXIgZm9yIGRpdlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgZGl2Q291bnQgPSAwO1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBOZ3hTcGlubmVyQ29tcG9uZW50LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lckNvbXBvbmVudFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcGlubmVyU2VydmljZTogTmd4U3Bpbm5lclNlcnZpY2UpIHtcbiAgICB0aGlzLnNwaW5uZXJTdWJzY3JpcHRpb24gPSB0aGlzLnNwaW5uZXJTZXJ2aWNlLnNwaW5uZXJPYnNlcnZhYmxlLnN1YnNjcmliZShmbGFnID0+IHtcbiAgICAgIHRoaXMuc2hvd1NwaW5uZXIgPSBmbGFnO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBJbml0aWFsaXphdGlvbiBtZXRob2RcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub25JbnB1dENoYW5nZSgpO1xuICB9XG4gIC8qKlxuICAgKiBPbiBjaGFuZ2VzIGV2ZW50IGZvciBpbnB1dCB2YXJpYWJsZXNcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCB0eXBlQ2hhbmdlOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzLnR5cGU7XG4gICAgY29uc3Qgc2l6ZUNoYW5nZTogU2ltcGxlQ2hhbmdlID0gY2hhbmdlcy5zaXplO1xuXG4gICAgaWYgKHR5cGVDaGFuZ2UpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoYW5nZS5jdXJyZW50VmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVDaGFuZ2UuY3VycmVudFZhbHVlICE9PSB0eXBlQ2hhbmdlLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVDaGFuZ2UuY3VycmVudFZhbHVlICE9PSAnJykge1xuICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGVDaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgICAgICAgIHRoaXMub25JbnB1dENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNpemVDaGFuZ2UpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2l6ZUNoYW5nZS5jdXJyZW50VmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHNpemVDaGFuZ2UuY3VycmVudFZhbHVlICE9PSBzaXplQ2hhbmdlLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgaWYgKHNpemVDaGFuZ2UuY3VycmVudFZhbHVlICE9PSAnJykge1xuICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemVDaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgICAgICAgIHRoaXMub25JbnB1dENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBUbyBnZXQgY2xhc3MgZm9yIHNwaW5uZXJcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJDb21wb25lbnRcbiAgICovXG4gIGdldENsYXNzKHR5cGUgPSAnYmFsbC1zY2FsZS1tdWx0aXBsZScsIHNpemUgPSAnbGFyZ2UnKTogc3RyaW5nIHtcbiAgICB0aGlzLmRpdkNvdW50ID0gTE9BREVSU1t0eXBlXTtcbiAgICB0aGlzLmRpdkFycmF5ID0gQXJyYXkodGhpcy5kaXZDb3VudCkuZmlsbCgwKS5tYXAoKHgsIGkpID0+IGkpO1xuICAgIGxldCBzaXplQ2xhc3MgPSAnJztcbiAgICBzd2l0Y2ggKHNpemUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICBzaXplQ2xhc3MgPSAnbGEtc20nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIHNpemVDbGFzcyA9ICdsYS0yeCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgICBzaXplQ2xhc3MgPSAnbGEtM3gnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gJ2xhLScgKyB0eXBlICsgJyAnICsgc2l6ZUNsYXNzO1xuICB9XG4gIC8qKlxuICAgKiBBZnRlciBpbnB1dCB2YXJpYWJsZXMgY2huYWdlIGV2ZW50XG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBvbklucHV0Q2hhbmdlKCkge1xuICAgIHRoaXMuc3Bpbm5lckNsYXNzID0gdGhpcy5nZXRDbGFzcyh0aGlzLnR5cGUsIHRoaXMuc2l6ZSk7XG4gIH1cbiAgLyoqXG4gICAqIENvbXBvbmVudCBkZXN0cm95IGV2ZW50XG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyQ29tcG9uZW50XG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnNwaW5uZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ3hTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtc3Bpbm5lci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05neFNwaW5uZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmd4U3Bpbm5lckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4U3Bpbm5lck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7OztJQWlCRTs7Ozs7O2lDQUwyQixJQUFJLE9BQU8sRUFBVztLQUtoQzs7Ozs7Ozs7Ozs7O0lBTWpCLGdDQUFJOzs7Ozs7SUFBSjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkM7Ozs7Ozs7Ozs7OztJQU1ELGdDQUFJOzs7Ozs7SUFBSjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7O2dCQTlCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs0QkFMRDs7Ozs7Ozs7QUNBQSxJQUFhLE9BQU8sR0FBRztJQUNuQixZQUFZLEVBQUUsRUFBRTtJQUNoQixXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsYUFBYSxFQUFFLENBQUM7SUFDaEIsbUJBQW1CLEVBQUUsQ0FBQztJQUN0QixrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCLDJCQUEyQixFQUFFLENBQUM7SUFDOUIsd0JBQXdCLEVBQUUsQ0FBQztJQUMzQixtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLFdBQVcsRUFBRSxDQUFDO0lBQ2QsY0FBYyxFQUFFLENBQUM7SUFDakIsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLG9CQUFvQixFQUFFLENBQUM7SUFDdkIsWUFBWSxFQUFFLENBQUM7SUFDZixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxFQUFFLENBQUM7SUFDaEIsbUJBQW1CLEVBQUUsQ0FBQztJQUN0QixZQUFZLEVBQUUsQ0FBQztJQUNmLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQixtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLDRCQUE0QixFQUFFLENBQUM7SUFDL0IsV0FBVyxFQUFFLENBQUM7SUFDZCxxQkFBcUIsRUFBRSxDQUFDO0lBQ3hCLDBCQUEwQixFQUFFLENBQUM7SUFDN0IsbUNBQW1DLEVBQUUsQ0FBQztJQUN0QyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLHlCQUF5QixFQUFFLENBQUM7SUFDNUIsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQiw0QkFBNEIsRUFBRSxDQUFDO0lBQy9CLGtCQUFrQixFQUFFLENBQUM7SUFDckIsb0JBQW9CLEVBQUUsQ0FBQztJQUN2QixjQUFjLEVBQUUsQ0FBQztJQUNqQixzQkFBc0IsRUFBRSxDQUFDO0lBQ3pCLEtBQUssRUFBRSxDQUFDO0lBQ1IsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixNQUFNLEVBQUUsQ0FBQztJQUNULFlBQVksRUFBRSxDQUFDO0lBQ2Ysa0JBQWtCLEVBQUUsQ0FBQztJQUNyQixzQkFBc0IsRUFBRSxDQUFDO0lBQ3pCLDRCQUE0QixFQUFFLENBQUM7SUFDL0IsMEJBQTBCLEVBQUUsQ0FBQztJQUM3QixtQ0FBbUMsRUFBRSxDQUFDO0lBQ3RDLGdCQUFnQixFQUFFLENBQUM7SUFDbkIseUJBQXlCLEVBQUUsQ0FBQztJQUM1QixRQUFRLEVBQUUsQ0FBQztJQUNYLGtCQUFrQixFQUFFLENBQUM7SUFDckIsZUFBZSxFQUFFLENBQUM7SUFDbEIsYUFBYSxFQUFFLENBQUM7SUFDaEIsT0FBTyxFQUFFLENBQUM7SUFDVixvQkFBb0IsRUFBRSxDQUFDO0NBQzFCLENBQUM7Ozs7OztBQ3RERjs7Ozs7O0lBdUZFLDZCQUFvQixjQUFpQztRQUFyRCxpQkFJQztRQUptQixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7Ozs7Ozt1QkE1RGxDLG9CQUFvQjs7Ozs7O29CQU12QixFQUFFOzs7Ozs7cUJBTUQsTUFBTTs7Ozs7OzJCQVlBLEtBQUs7Ozs7OzsyQkFZZCxLQUFLOzs7Ozs7d0JBWU8sRUFBRTs7Ozs7O3dCQU1qQixDQUFDO1FBT1YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUM3RSxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QixDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7Ozs7O0lBTUQsc0NBQVE7Ozs7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3RCOzs7Ozs7Ozs7Ozs7O0lBTUQseUNBQVc7Ozs7Ozs7SUFBWCxVQUFZLE9BQXNCOztRQUNoQyxJQUFNLFVBQVUsR0FBaUIsT0FBTyxTQUFNOztRQUM5QyxJQUFNLFVBQVUsR0FBaUIsT0FBTyxTQUFNO1FBRTlDLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxPQUFPLFVBQVUsQ0FBQyxZQUFZLEtBQUssV0FBVyxJQUFJLFVBQVUsQ0FBQyxZQUFZLEtBQUssVUFBVSxDQUFDLGFBQWEsRUFBRTtnQkFDMUcsSUFBSSxVQUFVLENBQUMsWUFBWSxLQUFLLEVBQUUsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO29CQUNwQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3RCO2FBQ0Y7U0FDRjtRQUVELElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxPQUFPLFVBQVUsQ0FBQyxZQUFZLEtBQUssV0FBVyxJQUFJLFVBQVUsQ0FBQyxZQUFZLEtBQUssVUFBVSxDQUFDLGFBQWEsRUFBRTtnQkFDMUcsSUFBSSxVQUFVLENBQUMsWUFBWSxLQUFLLEVBQUUsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO29CQUNwQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3RCO2FBQ0Y7U0FDRjtLQUNGOzs7Ozs7Ozs7Ozs7OztJQU1ELHNDQUFROzs7Ozs7OztJQUFSLFVBQVMsSUFBNEIsRUFBRSxJQUFjO1FBQTVDLHFCQUFBLEVBQUEsNEJBQTRCO1FBQUUscUJBQUEsRUFBQSxjQUFjO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBQSxDQUFDLENBQUM7O1FBQzlELElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixRQUFRLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEIsS0FBSyxPQUFPO2dCQUNWLFNBQVMsR0FBRyxPQUFPLENBQUM7Z0JBQ3BCLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsU0FBUyxHQUFHLE9BQU8sQ0FBQztnQkFDcEIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixTQUFTLEdBQUcsT0FBTyxDQUFDO2dCQUNwQixNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO1FBQ0QsT0FBTyxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUM7S0FDdkM7Ozs7Ozs7Ozs7OztJQU1ELDJDQUFhOzs7Ozs7SUFBYjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6RDs7Ozs7Ozs7Ozs7O0lBTUQseUNBQVc7Ozs7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3hDOztnQkFqS0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsOFRBT0w7b0JBQ0wsTUFBTSxFQUFFLENBQUMsdXczR0FJMGwzRyxDQUFDO2lCQUNybTNHOzs7O2dCQW5CUSxpQkFBaUI7OzswQkEwQnZCLEtBQUs7dUJBTUwsS0FBSzt3QkFNTCxLQUFLO3VCQU1MLEtBQUs7OEJBTUwsS0FBSzs7OEJBbkRSOzs7Ozs7O0FDQUE7Ozs7Z0JBSUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDL0I7OzJCQVZEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ })

}]);
//# sourceMappingURL=default~charts-charts-module~dashboard-dashboard-module~exam-exam-module~login-login-module~register~5a6b8f23.js.map