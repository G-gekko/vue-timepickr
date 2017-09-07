(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define([], factory);
    else if(typeof exports === 'object')
        exports["VueTimepickr"] = factory();
    else
        root["VueTimepickr"] = factory();
})(this, function() {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/ 	var installedModules = {};
        /******/
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
            /******/
            /******/ 		// Check if module is in cache
            /******/ 		if(installedModules[moduleId]) {
                /******/ 			return installedModules[moduleId].exports;
                /******/ 		}
            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		var module = installedModules[moduleId] = {
                /******/ 			i: moduleId,
                /******/ 			l: false,
                /******/ 			exports: {}
                /******/ 		};
            /******/
            /******/ 		// Execute the module function
            /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Flag the module as loaded
            /******/ 		module.l = true;
            /******/
            /******/ 		// Return the exports of the module
            /******/ 		return module.exports;
            /******/ 	}
        /******/
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/ 	__webpack_require__.m = modules;
        /******/
        /******/ 	// expose the module cache
        /******/ 	__webpack_require__.c = installedModules;
        /******/
        /******/ 	// define getter function for harmony exports
        /******/ 	__webpack_require__.d = function(exports, name, getter) {
            /******/ 		if(!__webpack_require__.o(exports, name)) {
                /******/ 			Object.defineProperty(exports, name, {
                    /******/ 				configurable: false,
                    /******/ 				enumerable: true,
                    /******/ 				get: getter
                    /******/ 			});
                /******/ 		}
            /******/ 	};
        /******/
        /******/ 	// getDefaultExport function for compatibility with non-harmony modules
        /******/ 	__webpack_require__.n = function(module) {
            /******/ 		var getter = module && module.__esModule ?
                /******/ 			function getDefault() { return module['default']; } :
                /******/ 			function getModuleExports() { return module; };
            /******/ 		__webpack_require__.d(getter, 'a', getter);
            /******/ 		return getter;
            /******/ 	};
        /******/
        /******/ 	// Object.prototype.hasOwnProperty.call
        /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        /******/
        /******/ 	// __webpack_public_path__
        /******/ 	__webpack_require__.p = "";
        /******/
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(__webpack_require__.s = 6);
        /******/ })
    /************************************************************************/
    /******/ ([
        /* 0 */
        /***/ (function(module, exports) {

            /* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

            module.exports = function normalizeComponent (
                rawScriptExports,
                compiledTemplate,
                injectStyles,
                scopeId,
                moduleIdentifier /* server only */
            ) {
                var esModule
                var scriptExports = rawScriptExports = rawScriptExports || {}

                // ES6 modules interop
                var type = typeof rawScriptExports.default
                if (type === 'object' || type === 'function') {
                    esModule = rawScriptExports
                    scriptExports = rawScriptExports.default
                }

                // Vue.extend constructor export interop
                var options = typeof scriptExports === 'function'
                    ? scriptExports.options
                    : scriptExports

                // render functions
                if (compiledTemplate) {
                    options.render = compiledTemplate.render
                    options.staticRenderFns = compiledTemplate.staticRenderFns
                }

                // scopedId
                if (scopeId) {
                    options._scopeId = scopeId
                }

                var hook
                if (moduleIdentifier) { // server build
                    hook = function (context) {
                        // 2.3 injection
                        context =
                            context || // cached call
                            (this.$vnode && this.$vnode.ssrContext) || // stateful
                            (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
                        // 2.2 with runInNewContext: true
                        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                            context = __VUE_SSR_CONTEXT__
                        }
                        // inject component styles
                        if (injectStyles) {
                            injectStyles.call(this, context)
                        }
                        // register component module identifier for async chunk inferrence
                        if (context && context._registeredComponents) {
                            context._registeredComponents.add(moduleIdentifier)
                        }
                    }
                    // used by ssr in case component is cached and beforeCreate
                    // never gets called
                    options._ssrRegister = hook
                } else if (injectStyles) {
                    hook = injectStyles
                }

                if (hook) {
                    var functional = options.functional
                    var existing = functional
                        ? options.render
                        : options.beforeCreate
                    if (!functional) {
                        // inject component registration as beforeCreate hook
                        options.beforeCreate = existing
                            ? [].concat(existing, hook)
                            : [hook]
                    } else {
                        // register for functioal component in vue file
                        options.render = function renderWithStyleInjection (h, context) {
                            hook.call(context)
                            return existing(h, context)
                        }
                    }
                }

                return {
                    esModule: esModule,
                    exports: scriptExports,
                    options: options
                }
            }


            /***/ }),
        /* 1 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            const digits = [{ value: 1, active: true, pressed: false }, { value: 2, active: true, pressed: false }, { value: 3, active: true, pressed: false }, { value: 4, active: true, pressed: false }, { value: 5, active: true, pressed: false }, { value: 6, active: true, pressed: false }, { value: 7, active: true, pressed: false }, { value: 8, active: true, pressed: false }, { value: 9, active: true, pressed: false }, { value: 0, active: true, pressed: false }];

            /*
             * Data object share between components
             */
            /* harmony default export */ __webpack_exports__["a"] = ({
                activeIndex: 0,
                time: null,
                isOpen: false,
                digits: digits,
                arrowKeys: {
                    left: {
                        pressed: false
                    },
                    right: {
                        pressed: false
                    }
                }
            });

            /***/ }),
        /* 2 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (immutable) */ __webpack_exports__["c"] = getDigit;
            /* unused harmony export convertToNumber */
            /* harmony export (immutable) */ __webpack_exports__["b"] = filteredDigits;
            /* harmony export (immutable) */ __webpack_exports__["a"] = activeNumbers;
            function contains(array, value) {
                return array.indexOf(value) >= 0;
            }

            function filterAvailableDigits(allDigits, availableDigits) {
                allDigits.forEach(item => {
                    item.active = contains(availableDigits, item.value);
                });
                return allDigits;
            }

            function getDigit(allDigits, number) {
                return allDigits.filter(digit => digit.value === number).reduce((old, item) => {
                    return item;
                }, {});
            }

            function convertToNumber(number) {
                return Number(number);
            }

            function filteredDigits(index, digits, time) {
                let timeIntegers = time.map(convertToNumber);

                if (index === 0) {
                    if (timeIntegers[1] > 3) {
                        return filterAvailableDigits(digits, [0, 1]);
                    }
                    return filterAvailableDigits(digits, [0, 1, 2]);
                }
                if (index === 1) {
                    if (timeIntegers[0] === 2) {
                        return filterAvailableDigits(digits, [0, 1, 2, 3]);
                    }
                    return filterAvailableDigits(digits, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                }
                if (index === 2) {
                    return filterAvailableDigits(digits, [0, 1, 2, 3, 4, 5]);
                }
                if (index === 3) {
                    return filterAvailableDigits(digits, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                }
            }

            function activeNumbers(numbers) {
                return numbers.filter(digit => digit.active).map(item => item.value);
            }

            /***/ }),
        /* 3 */
        /***/ (function(module, exports) {

            /*
                MIT License http://www.opensource.org/licenses/mit-license.php
                Author Tobias Koppers @sokra
            */
// css base code, injected by the css-loader
            module.exports = function(useSourceMap) {
                var list = [];

                // return the list of modules as css string
                list.toString = function toString() {
                    return this.map(function (item) {
                        var content = cssWithMappingToString(item, useSourceMap);
                        if(item[2]) {
                            return "@media " + item[2] + "{" + content + "}";
                        } else {
                            return content;
                        }
                    }).join("");
                };

                // import a list of modules into the list
                list.i = function(modules, mediaQuery) {
                    if(typeof modules === "string")
                        modules = [[null, modules, ""]];
                    var alreadyImportedModules = {};
                    for(var i = 0; i < this.length; i++) {
                        var id = this[i][0];
                        if(typeof id === "number")
                            alreadyImportedModules[id] = true;
                    }
                    for(i = 0; i < modules.length; i++) {
                        var item = modules[i];
                        // skip already imported module
                        // this implementation is not 100% perfect for weird media query combinations
                        //  when a module is imported multiple times with different media queries.
                        //  I hope this will never occur (Hey this way we have smaller bundles)
                        if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                            if(mediaQuery && !item[2]) {
                                item[2] = mediaQuery;
                            } else if(mediaQuery) {
                                item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                            }
                            list.push(item);
                        }
                    }
                };
                return list;
            };

            function cssWithMappingToString(item, useSourceMap) {
                var content = item[1] || '';
                var cssMapping = item[3];
                if (!cssMapping) {
                    return content;
                }

                if (useSourceMap && typeof btoa === 'function') {
                    var sourceMapping = toComment(cssMapping);
                    var sourceURLs = cssMapping.sources.map(function (source) {
                        return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
                    });

                    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
                }

                return [content].join('\n');
            }

// Adapted from convert-source-map (MIT)
            function toComment(sourceMap) {
                // eslint-disable-next-line no-undef
                var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
                var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

                return '/*# ' + data + ' */';
            }


            /***/ }),
        /* 4 */
        /***/ (function(module, exports, __webpack_require__) {

            /*
              MIT License http://www.opensource.org/licenses/mit-license.php
              Author Tobias Koppers @sokra
              Modified by Evan You @yyx990803
            */

            var hasDocument = typeof document !== 'undefined'

            if (typeof DEBUG !== 'undefined' && DEBUG) {
                if (!hasDocument) {
                    throw new Error(
                        'vue-style-loader cannot be used in a non-browser environment. ' +
                        "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
                    ) }
            }

            var listToStyles = __webpack_require__(10)

            /*
            type StyleObject = {
              id: number;
              parts: Array<StyleObjectPart>
            }

            type StyleObjectPart = {
              css: string;
              media: string;
              sourceMap: ?string
            }
            */

            var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

            var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
            var singletonElement = null
            var singletonCounter = 0
            var isProduction = false
            var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
            var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

            module.exports = function (parentId, list, _isProduction) {
                isProduction = _isProduction

                var styles = listToStyles(parentId, list)
                addStylesToDom(styles)

                return function update (newList) {
                    var mayRemove = []
                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i]
                        var domStyle = stylesInDom[item.id]
                        domStyle.refs--
                        mayRemove.push(domStyle)
                    }
                    if (newList) {
                        styles = listToStyles(parentId, newList)
                        addStylesToDom(styles)
                    } else {
                        styles = []
                    }
                    for (var i = 0; i < mayRemove.length; i++) {
                        var domStyle = mayRemove[i]
                        if (domStyle.refs === 0) {
                            for (var j = 0; j < domStyle.parts.length; j++) {
                                domStyle.parts[j]()
                            }
                            delete stylesInDom[domStyle.id]
                        }
                    }
                }
            }

            function addStylesToDom (styles /* Array<StyleObject> */) {
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i]
                    var domStyle = stylesInDom[item.id]
                    if (domStyle) {
                        domStyle.refs++
                        for (var j = 0; j < domStyle.parts.length; j++) {
                            domStyle.parts[j](item.parts[j])
                        }
                        for (; j < item.parts.length; j++) {
                            domStyle.parts.push(addStyle(item.parts[j]))
                        }
                        if (domStyle.parts.length > item.parts.length) {
                            domStyle.parts.length = item.parts.length
                        }
                    } else {
                        var parts = []
                        for (var j = 0; j < item.parts.length; j++) {
                            parts.push(addStyle(item.parts[j]))
                        }
                        stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
                    }
                }
            }

            function createStyleElement () {
                var styleElement = document.createElement('style')
                styleElement.type = 'text/css'
                head.appendChild(styleElement)
                return styleElement
            }

            function addStyle (obj /* StyleObjectPart */) {
                var update, remove
                var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

                if (styleElement) {
                    if (isProduction) {
                        // has SSR styles and in production mode.
                        // simply do nothing.
                        return noop
                    } else {
                        // has SSR styles but in dev mode.
                        // for some reason Chrome can't handle source map in server-rendered
                        // style tags - source maps in <style> only works if the style tag is
                        // created and inserted dynamically. So we remove the server rendered
                        // styles and inject new ones.
                        styleElement.parentNode.removeChild(styleElement)
                    }
                }

                if (isOldIE) {
                    // use singleton mode for IE9.
                    var styleIndex = singletonCounter++
                    styleElement = singletonElement || (singletonElement = createStyleElement())
                    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
                    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
                } else {
                    // use multi-style-tag mode in all other cases
                    styleElement = createStyleElement()
                    update = applyToTag.bind(null, styleElement)
                    remove = function () {
                        styleElement.parentNode.removeChild(styleElement)
                    }
                }

                update(obj)

                return function updateStyle (newObj /* StyleObjectPart */) {
                    if (newObj) {
                        if (newObj.css === obj.css &&
                            newObj.media === obj.media &&
                            newObj.sourceMap === obj.sourceMap) {
                            return
                        }
                        update(obj = newObj)
                    } else {
                        remove()
                    }
                }
            }

            var replaceText = (function () {
                var textStore = []

                return function (index, replacement) {
                    textStore[index] = replacement
                    return textStore.filter(Boolean).join('\n')
                }
            })()

            function applyToSingletonTag (styleElement, index, remove, obj) {
                var css = remove ? '' : obj.css

                if (styleElement.styleSheet) {
                    styleElement.styleSheet.cssText = replaceText(index, css)
                } else {
                    var cssNode = document.createTextNode(css)
                    var childNodes = styleElement.childNodes
                    if (childNodes[index]) styleElement.removeChild(childNodes[index])
                    if (childNodes.length) {
                        styleElement.insertBefore(cssNode, childNodes[index])
                    } else {
                        styleElement.appendChild(cssNode)
                    }
                }
            }

            function applyToTag (styleElement, obj) {
                var css = obj.css
                var media = obj.media
                var sourceMap = obj.sourceMap

                if (media) {
                    styleElement.setAttribute('media', media)
                }

                if (sourceMap) {
                    // https://developer.chrome.com/devtools/docs/javascript-debugging
                    // this makes source maps inside style tags work properly in Chrome
                    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
                    // http://stackoverflow.com/a/26603875
                    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
                }

                if (styleElement.styleSheet) {
                    styleElement.styleSheet.cssText = css
                } else {
                    while (styleElement.firstChild) {
                        styleElement.removeChild(styleElement.firstChild)
                    }
                    styleElement.appendChild(document.createTextNode(css))
                }
            }


            /***/ }),
        /* 5 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(2);



            /* harmony default export */ __webpack_exports__["a"] = ({
                methods: {
                    resetArrowsPressed() {
                        this.arrowKeys.left.pressed = false;
                        this.arrowKeys.right.pressed = false;
                    },
                    digitPressed(digit) {
                        let pressedDigit = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* getDigit */])(this.digits, digit);
                        pressedDigit.pressed = true;
                    },
                    arrowPressed(direction) {
                        this.arrowKeys[direction].pressed = true;
                    },
                    digitSelected(digit, evt) {
                        if (evt) {
                            evt.preventDefault();
                        }

                        if (!Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* getDigit */])(this.digits, digit).active) {
                            Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* getDigit */])(this.digits, digit).pressed = false;
                            return;
                        }

                        Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* getDigit */])(this.digits, digit).pressed = false;

                        this.$set(this.time, this.activeIndex, digit);

                        if (this.activeIndex === 3) {
                            if (this.$parent.$parent === undefined) {
                                this.$emit('close');
                            } else {
                                this.$parent.$parent.$emit('close');
                            }
                        }

                        this.goToNext();
                    },
                    arrowSelected(direction) {
                        if (direction === 'left') {
                            this.goToPrevious();
                        }
                        if (direction === 'right') {
                            this.goToNext();
                        }

                        if (direction === 'up') {
                            let nextValue = parseInt(this.time[this.activeIndex]) + 1;
                            if (Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* activeNumbers */])(this.filteredDigits).indexOf(nextValue) > -1) {
                                this.$set(this.time, this.activeIndex, nextValue);
                            }
                        }
                        if (direction === 'down') {
                            let nextValue = parseInt(this.time[this.activeIndex]) - 1;
                            if (Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* activeNumbers */])(this.filteredDigits).indexOf(nextValue) > -1) {
                                this.$set(this.time, this.activeIndex, nextValue);
                            }
                        }
                    },
                    goToNext(evt) {
                        if (evt) {
                            evt.preventDefault();
                        }
                        if (this.activeIndex < 3) {
                            this.activeIndex++;
                            this.arrowKeys['right'].pressed = false;
                        }
                    },
                    goToPrevious(evt) {
                        if (evt) {
                            evt.preventDefault();
                        }
                        if (this.activeIndex > 0) {
                            this.activeIndex--;
                            this.arrowKeys['left'].pressed = false;
                        }
                    },
                    blurEl(el) {
                        el.blur();
                    }
                }
            });

            /***/ }),
        /* 6 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueTimepickr_vue__ = __webpack_require__(7);

            /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__VueTimepickr_vue__["a" /* default */]);

            /***/ }),
        /* 7 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_VueTimepickr_vue__ = __webpack_require__(11);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_530a6a69_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_VueTimepickr_vue__ = __webpack_require__(29);
            var disposed = false
            function injectStyle (ssrContext) {
                if (disposed) return
                __webpack_require__(8)
            }
            var normalizeComponent = __webpack_require__(0)
            /* script */

            /* template */

            /* styles */
            var __vue_styles__ = injectStyle
            /* scopeId */
            var __vue_scopeId__ = null
            /* moduleIdentifier (server only) */
            var __vue_module_identifier__ = null
            var Component = normalizeComponent(
                __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_VueTimepickr_vue__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_530a6a69_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_VueTimepickr_vue__["a" /* default */],
                __vue_styles__,
                __vue_scopeId__,
                __vue_module_identifier__
            )
            Component.options.__file = "src\\VueTimepickr.vue"
            if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
            if (Component.options.functional) {console.error("[vue-loader] VueTimepickr.vue: functional components are not supported with templates, they should use render functions.")}

            /* hot reload */
            if (false) {(function () {
                var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-530a6a69", Component.options)
                } else {
                    hotAPI.reload("data-v-530a6a69", Component.options)
                }
                module.hot.dispose(function (data) {
                    disposed = true
                })
            })()}

            /* harmony default export */ __webpack_exports__["a"] = (Component.exports);


            /***/ }),
        /* 8 */
        /***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
            var content = __webpack_require__(9);
            if(typeof content === 'string') content = [[module.i, content, '']];
            if(content.locals) module.exports = content.locals;
// add the styles to the DOM
            var update = __webpack_require__(4)("351d46d4", content, false);
// Hot Module Replacement
            if(false) {
                // When the styles change, update the <style> tags
                if(!content.locals) {
                    module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-530a6a69\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueTimepickr.vue", function() {
                        var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-530a6a69\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueTimepickr.vue");
                        if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                        update(newContent);
                    });
                }
                // When the module is disposed, remove the <style> tags
                module.hot.dispose(function() { update(); });
            }

            /***/ }),
        /* 9 */
        /***/ (function(module, exports, __webpack_require__) {

            exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
            exports.push([module.i, "\n.timepicker-wrap {\n  display: inline-block;\n  position: relative;\n}\n.timepicker-wrap *, .timepicker-wrap *::after, .timepicker-wrap *::before {\n    box-sizing: border-box;\n}\n.time {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 10px 15px 40px;\n  border-radius: 3px;\n  font-size: 1.2rem;\n  width: 120px;\n  text-align: center;\n}\n.flex-wrap {\n  display: flex;\n  position: relative;\n}\n.timepicker-icon {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n  transform: translate(0, -50%);\n}\n.timepicker {\n  position: absolute;\n  background: #FBFBFF;\n  width: 100vw;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);\n  border-radius: 3px;\n  overflow: hidden;\n  left: 50%;\n  top: -135px;\n  opacity: 0;\n  transition: transform .2s .2s ease-in-out, opacity .2s .15s ease-in-out;\n  transform: translate3d(-50%, 0, 0) scale(0.8);\n  pointer-events: none;\n}\n@media (min-width: 480px) {\n.timepicker {\n      width: 250px;\n      border-radius: 0;\n}\n}\n.timepicker:before {\n    z-index: -1;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #fff;\n    border-radius: 50%;\n    transform: scale(0);\n    transition: transform .2s ease-in-out;\n}\n.timepicker.is-open {\n    opacity: 1;\n    transform: translate3d(-50%, 0, 0) scale(1);\n    pointer-events: auto;\n    z-index: 1001;\n}\n.timepicker.is-open:before {\n      border-radius: 3px;\n      transform: scale(1);\n}\n.timepicker__header {\n    padding: 5px 15px;\n    font-size: 14px;\n    color: #fff;\n    background: #F25F5C;\n}\n.timepicker__time {\n    position: relative;\n    overflow: hidden;\n    background: #f68d8b;\n    display: flex;\n    justify-content: center;\n    font-size: 50px;\n    color: #fff;\n    line-height: 1;\n    padding: 12px 10px;\n}\n.timepicker__active-bg {\n    position: absolute;\n    top: -25%;\n    left: 0;\n    width: 34px;\n    height: 200%;\n    background: #F25F5C;\n    transition: transform .4s ease;\n}\n.timepicker__separator {\n    z-index: 2;\n    position: relative;\n    width: 34px;\n    text-align: center;\n    font-size: 90%;\n}\n", ""]);

// exports


            /***/ }),
        /* 10 */
        /***/ (function(module, exports) {

            /**
             * Translates the list format produced by css-loader into something
             * easier to manipulate.
             */
            module.exports = function listToStyles (parentId, list) {
                var styles = []
                var newStyles = {}
                for (var i = 0; i < list.length; i++) {
                    var item = list[i]
                    var id = item[0]
                    var css = item[1]
                    var media = item[2]
                    var sourceMap = item[3]
                    var part = {
                        id: parentId + ':' + i,
                        css: css,
                        media: media,
                        sourceMap: sourceMap
                    }
                    if (!newStyles[id]) {
                        styles.push(newStyles[id] = { id: id, parts: [part] })
                    } else {
                        newStyles[id].parts.push(part)
                    }
                }
                return styles
            }


            /***/ }),
        /* 11 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(1);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(2);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_KeyboardEvents_js__ = __webpack_require__(12);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_CommonActions_js__ = __webpack_require__(5);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ActiveBackground_vue__ = __webpack_require__(13);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_TimeUnit_vue__ = __webpack_require__(16);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Numpad_vue__ = __webpack_require__(21);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










            /* harmony default export */ __webpack_exports__["a"] = ({
                name: 'VueTimepickr',
                props: ['value'],
                mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_KeyboardEvents_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_CommonActions_js__["a" /* default */]],
                components: {
                    ActiveBackground: __WEBPACK_IMPORTED_MODULE_4__components_ActiveBackground_vue__["a" /* default */],
                    TimeUnit: __WEBPACK_IMPORTED_MODULE_5__components_TimeUnit_vue__["a" /* default */],
                    Numpad: __WEBPACK_IMPORTED_MODULE_6__components_Numpad_vue__["a" /* default */]
                },
                data() {
                    return __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */];
                },
                created() {
                    this.time = this.value.replace(':', '').split('');
                    this.$on('close', this.close);
                },
                computed: {
                    filteredDigits() {
                        return Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["b" /* filteredDigits */])(this.activeIndex, this.digits, this.time);
                    }
                },
                directives: {
                    'click-outside': {
                        bind: function (el, binding, vnode) {
                            el.event = function (event) {
                                // here I check that click was outside the el and his childrens
                                if (!(el == event.target || el.contains(event.target))) {
                                    // and if it did, call method provided in attribute value
                                    vnode.context[binding.expression](event);
                                }
                            };
                            document.body.addEventListener('click', el.event);
                        },
                        unbind: function (el) {
                            document.body.removeEventListener('click', el.event);
                        }
                    }
                },
                methods: {
                    closeOutside() {
                        this.isOpen = false;
                    },
                    open() {
                        this.time = this.value.replace(':', '').split('');
                        this.$refs.timeInput.blur();
                        this.$refs.timepicker.focus();
                        this.isOpen = true;
                        this.activeIndex = 0;
                    },
                    close(cancel) {
                        let isCancelled = cancel || false;

                        if (!isCancelled) {
                            this.setTime();
                        }
                        this.$refs.timepicker.blur();
                        this.isOpen = false;
                    },
                    setTime() {
                        this.$emit('input', `${this.time[0]}${this.time[1]}:${this.time[2]}${this.time[3]}`);
                    }
                }
            });

            /***/ }),
        /* 12 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(2);


            const numberKeyCodes = {
                0: 48,
                1: 49,
                2: 50,
                3: 51,
                4: 52,
                5: 53,
                6: 54,
                7: 55,
                8: 56,
                9: 57
            };

            const arrowKeyCodes = {
                'left': 37,
                'right': 39,
                'up': 38,
                'down': 40
            };

            const escKey = 27;

            function isNumberPressed(keyCode, numberKeyCodes) {
                return Object.values(numberKeyCodes).indexOf(keyCode) > -1;
            }

            function getNumberPressed(keyCode, numberKeyCodes) {
                let keyIndex = Object.values(numberKeyCodes).indexOf(keyCode);
                return parseInt(Object.keys(numberKeyCodes)[keyIndex]);
            }

            function getArrowPressed(keyCode, numberKeyCodes) {
                let keyIndex = Object.values(numberKeyCodes).indexOf(keyCode);
                return Object.keys(numberKeyCodes)[keyIndex];
            }

            function isArrowPressed(keyCode, arrowKeyCodes) {
                return Object.values(arrowKeyCodes).indexOf(keyCode) > -1;
            }

            /* harmony default export */ __webpack_exports__["a"] = ({
                mounted() {
                    window.addEventListener('keyup', this.onKeyUp);
                    window.addEventListener('keydown', this.onKeyPressed);
                    window.addEventListener('keyup', e => {
                        if (e.keyCode === escKey) {
                            this.close(true);
                        }
                    });
                },

                beforeDestroy() {
                    window.removeEventListener('keyup', this.onKeyUp);
                    window.removeEventListener('keydown', this.onKeyPressed);
                    window.addEventListener('keyup', this.close);
                },

                methods: {
                    onKeyUp(e) {
                        if (!this.isOpen) {
                            return;
                        }

                        if (isNumberPressed(e.keyCode, numberKeyCodes)) {
                            let numberPressed = getNumberPressed(e.keyCode, numberKeyCodes);
                            if (Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* activeNumbers */])(this.filteredDigits).indexOf(numberPressed) > -1) {
                                this.digitSelected(numberPressed);
                            }
                        }
                        if (isArrowPressed(e.keyCode, arrowKeyCodes)) {
                            let arrowPressed = getArrowPressed(e.keyCode, arrowKeyCodes);
                            this.arrowSelected(arrowPressed);
                        }

                        if (e.keyCode === 13 && e.target.classList.contains('timepicker')) {
                            this.close();
                        }

                        this.resetArrowsPressed();
                    },
                    onKeyPressed(e) {
                        if (!this.isOpen) {
                            return;
                        }
                        if (isNumberPressed(e.keyCode, numberKeyCodes)) {
                            let numberPressed = getNumberPressed(e.keyCode, numberKeyCodes);
                            if (Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* activeNumbers */])(this.filteredDigits).indexOf(numberPressed) > -1) {
                                this.digitPressed(numberPressed);
                            }
                        }

                        if (isArrowPressed(e.keyCode, arrowKeyCodes)) {
                            e.preventDefault();
                            let arrowPressed = getArrowPressed(e.keyCode, arrowKeyCodes);
                            if (arrowPressed === 'left' && this.activeIndex > 0 || arrowPressed === 'right' && this.activeIndex < 3) {
                                this.arrowPressed(arrowPressed);
                            }
                        }
                    }
                }
            });

            /***/ }),
        /* 13 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ActiveBackground_vue__ = __webpack_require__(14);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0aa8fab2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_ActiveBackground_vue__ = __webpack_require__(15);
            var disposed = false
            var normalizeComponent = __webpack_require__(0)
            /* script */

            /* template */

            /* styles */
            var __vue_styles__ = null
            /* scopeId */
            var __vue_scopeId__ = null
            /* moduleIdentifier (server only) */
            var __vue_module_identifier__ = null
            var Component = normalizeComponent(
                __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ActiveBackground_vue__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0aa8fab2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_ActiveBackground_vue__["a" /* default */],
                __vue_styles__,
                __vue_scopeId__,
                __vue_module_identifier__
            )
            Component.options.__file = "src\\components\\ActiveBackground.vue"
            if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
            if (Component.options.functional) {console.error("[vue-loader] ActiveBackground.vue: functional components are not supported with templates, they should use render functions.")}

            /* hot reload */
            if (false) {(function () {
                var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-0aa8fab2", Component.options)
                } else {
                    hotAPI.reload("data-v-0aa8fab2", Component.options)
                }
                module.hot.dispose(function (data) {
                    disposed = true
                })
            })()}

            /* harmony default export */ __webpack_exports__["a"] = (Component.exports);


            /***/ }),
        /* 14 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(1);
//
//
//
//



            /* harmony default export */ __webpack_exports__["a"] = ({
                data() {
                    return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */];
                },
                computed: {
                    transform() {
                        let singleDigitWidth = 34;
                        let offset = this.activeIndex < 2 ? this.activeIndex * singleDigitWidth : this.activeIndex * singleDigitWidth + singleDigitWidth;

                        return {
                            transform: `translate3d(${offset}px, 0, 0)`
                        };
                    }
                }
            });

            /***/ }),
        /* 15 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
                return _c('div', {
                    staticClass: "timepicker__active-bg",
                    style: (_vm.transform)
                })
            }
            var staticRenderFns = []
            render._withStripped = true
            var esExports = { render: render, staticRenderFns: staticRenderFns }
            /* harmony default export */ __webpack_exports__["a"] = (esExports);
            if (false) {
                module.hot.accept()
                if (module.hot.data) {
                    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0aa8fab2", esExports)
                }
            }

            /***/ }),
        /* 16 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TimeUnit_vue__ = __webpack_require__(19);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_abe5c962_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_TimeUnit_vue__ = __webpack_require__(20);
            var disposed = false
            function injectStyle (ssrContext) {
                if (disposed) return
                __webpack_require__(17)
            }
            var normalizeComponent = __webpack_require__(0)
            /* script */

            /* template */

            /* styles */
            var __vue_styles__ = injectStyle
            /* scopeId */
            var __vue_scopeId__ = null
            /* moduleIdentifier (server only) */
            var __vue_module_identifier__ = null
            var Component = normalizeComponent(
                __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TimeUnit_vue__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_abe5c962_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_TimeUnit_vue__["a" /* default */],
                __vue_styles__,
                __vue_scopeId__,
                __vue_module_identifier__
            )
            Component.options.__file = "src\\components\\TimeUnit.vue"
            if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
            if (Component.options.functional) {console.error("[vue-loader] TimeUnit.vue: functional components are not supported with templates, they should use render functions.")}

            /* hot reload */
            if (false) {(function () {
                var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-abe5c962", Component.options)
                } else {
                    hotAPI.reload("data-v-abe5c962", Component.options)
                }
                module.hot.dispose(function (data) {
                    disposed = true
                })
            })()}

            /* harmony default export */ __webpack_exports__["a"] = (Component.exports);


            /***/ }),
        /* 17 */
        /***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
            var content = __webpack_require__(18);
            if(typeof content === 'string') content = [[module.i, content, '']];
            if(content.locals) module.exports = content.locals;
// add the styles to the DOM
            var update = __webpack_require__(4)("8857b796", content, false);
// Hot Module Replacement
            if(false) {
                // When the styles change, update the <style> tags
                if(!content.locals) {
                    module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-abe5c962\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TimeUnit.vue", function() {
                        var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-abe5c962\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TimeUnit.vue");
                        if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                        update(newContent);
                    });
                }
                // When the module is disposed, remove the <style> tags
                module.hot.dispose(function() { update(); });
            }

            /***/ }),
        /* 18 */
        /***/ (function(module, exports, __webpack_require__) {

            exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
            exports.push([module.i, "\n.time-unit {\n  z-index: 4;\n  position: relative;\n  transition: transform .2s ease;\n  -webkit-user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.time-unit:hover {\n    transform: scale(1.1);\n}\n.time-unit__value {\n    position: relative;\n    display: inline-block;\n    z-index: 2;\n    color: #fff;\n    font-size: 50px;\n    line-height: 50px;\n    padding: 0 2px;\n    text-align: center;\n    width: 34px;\n    height: 50px;\n    background: transparent;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    transition: all .3s ease;\n}\n.time-unit__value:focus, .time-unit__value:active {\n      background: transparent;\n}\n.time-unit__value-enter {\n      opacity: 0;\n      transform: translate3d(0, 2rem, 0) scale(0.7);\n}\n.time-unit__value-leave-active {\n      position: absolute;\n      opacity: 0;\n      transform: translate3d(0, -2rem, 0) scale(0.7);\n}\n.time-unit__value--reverse-enter {\n      opacity: 0;\n      transform: translate3d(0, -2rem, 0) scale(0.7);\n}\n.time-unit__value--reverse-leave-active {\n      position: absolute;\n      opacity: 0;\n      transform: translate3d(0, 2rem, 0) scale(0.7);\n}\n", ""]);

// exports


            /***/ }),
        /* 19 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//



            /* harmony default export */ __webpack_exports__["a"] = ({
                props: ['value', 'index'],
                data() {
                    return {
                        store: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */],
                        numbers: [],
                        transitionName: 'time-unit__value'
                    };
                },
                created() {
                    this.isInitialized = true;
                    this.numbers.push(this.value);
                },
                methods: {
                    setActiveIndex(index) {
                        this.store.activeIndex = parseInt(index);
                    }
                },
                watch: {
                    'value': function (val, oldVal) {
                        if (val === oldVal) {
                            return;
                        }
                        this.transitionName = val > oldVal ? 'time-unit__value' : 'time-unit__value--reverse';

                        this.numbers.splice(0, 1);
                        this.numbers.push(val);
                    }
                }
            });

            /***/ }),
        /* 20 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
                return _c('div', {
                    staticClass: "time-unit"
                }, [_c('transition-group', {
                    attrs: {
                        "name": _vm.transitionName,
                        "tag": "div"
                    }
                }, _vm._l((_vm.numbers), function(number) {
                    return _c('div', {
                        key: number,
                        staticClass: "time-unit__value",
                        on: {
                            "click": function($event) {
                                _vm.setActiveIndex(_vm.index)
                            }
                        }
                    }, [_vm._v("\n        " + _vm._s(number) + "\n      ")])
                }))], 1)
            }
            var staticRenderFns = []
            render._withStripped = true
            var esExports = { render: render, staticRenderFns: staticRenderFns }
            /* harmony default export */ __webpack_exports__["a"] = (esExports);
            if (false) {
                module.hot.accept()
                if (module.hot.data) {
                    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-abe5c962", esExports)
                }
            }

            /***/ }),
        /* 21 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Numpad_vue__ = __webpack_require__(24);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b36a77aa_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Numpad_vue__ = __webpack_require__(28);
            var disposed = false
            function injectStyle (ssrContext) {
                if (disposed) return
                __webpack_require__(22)
            }
            var normalizeComponent = __webpack_require__(0)
            /* script */

            /* template */

            /* styles */
            var __vue_styles__ = injectStyle
            /* scopeId */
            var __vue_scopeId__ = null
            /* moduleIdentifier (server only) */
            var __vue_module_identifier__ = null
            var Component = normalizeComponent(
                __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Numpad_vue__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b36a77aa_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Numpad_vue__["a" /* default */],
                __vue_styles__,
                __vue_scopeId__,
                __vue_module_identifier__
            )
            Component.options.__file = "src\\components\\Numpad.vue"
            if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
            if (Component.options.functional) {console.error("[vue-loader] Numpad.vue: functional components are not supported with templates, they should use render functions.")}

            /* hot reload */
            if (false) {(function () {
                var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-b36a77aa", Component.options)
                } else {
                    hotAPI.reload("data-v-b36a77aa", Component.options)
                }
                module.hot.dispose(function (data) {
                    disposed = true
                })
            })()}

            /* harmony default export */ __webpack_exports__["a"] = (Component.exports);


            /***/ }),
        /* 22 */
        /***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
            var content = __webpack_require__(23);
            if(typeof content === 'string') content = [[module.i, content, '']];
            if(content.locals) module.exports = content.locals;
// add the styles to the DOM
            var update = __webpack_require__(4)("dbe529dc", content, false);
// Hot Module Replacement
            if(false) {
                // When the styles change, update the <style> tags
                if(!content.locals) {
                    module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b36a77aa\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Numpad.vue", function() {
                        var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b36a77aa\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Numpad.vue");
                        if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                        update(newContent);
                    });
                }
                // When the module is disposed, remove the <style> tags
                module.hot.dispose(function() { update(); });
            }

            /***/ }),
        /* 23 */
        /***/ (function(module, exports, __webpack_require__) {

            exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
            exports.push([module.i, "\n.triangle {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n.numpad__digits {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px 20px;\n}\n.numpad__digits .numpad__digit:last-of-type {\n    margin-left: auto;\n    margin-right: auto;\n}\n.numpad__digit {\n  position: relative;\n  width: 33%;\n}\n.numpad__digit button {\n    position: relative;\n    z-index: 2;\n    display: block;\n    width: 100%;\n    padding: 20px 0;\n    text-align: center;\n    color: #757575;\n    background: none;\n    border: none;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.3;\n    cursor: pointer;\n    transition: color .3s ease;\n    outline: none;\n    -webkit-user-select: none;\n    -webkit-tap-highlight-color: transparent;\n}\n@media (min-width: 480px) {\n.numpad__digit button {\n        padding: 15px 0;\n}\n}\n.numpad__digit button.is-disabled {\n      color: rgba(117, 117, 117, 0.3);\n}\n.numpad__digit button:focus + .numpad__ripple {\n      opacity: .3;\n      transform: translate(-50%, -50%) scale(1);\n}\n.numpad__arrows {\n  display: flex;\n  flex-wrap: wrap;\n  position: absolute;\n  padding: 5px 20px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  justify-content: space-between;\n}\n.numpad__arrows button {\n    font-size: 25px;\n    padding: 17px 0 13px 0;\n    line-height: 1;\n}\n@media (min-width: 480px) {\n.numpad__arrows button {\n        padding: 13px 0 8px 0;\n}\n}\n.numpad__ripple {\n  z-index: 1;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  opacity: 0;\n  transform: translate(-50%, -50%) scale(1.1);\n  transition: .3s;\n}\n@media (min-width: 480px) {\n.numpad__ripple {\n      width: 45px;\n      height: 45px;\n}\n}\n.numpad__ripple.is-pressed {\n    opacity: .3;\n    transform: translate(-50%, -50%) scale(1);\n}\n", ""]);

// exports


            /***/ }),
        /* 24 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(1);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(2);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_CommonActions__ = __webpack_require__(5);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Number_vue__ = __webpack_require__(25);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







            /* harmony default export */ __webpack_exports__["a"] = ({
                name: 'Numpad',
                components: {
                    Number: __WEBPACK_IMPORTED_MODULE_3__Number_vue__["a" /* default */]
                },
                mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_CommonActions__["a" /* default */]],
                data() {
                    return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */];
                },
                computed: {
                    numbers() {
                        return Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["b" /* filteredDigits */])(this.activeIndex, this.digits, this.time);
                    }
                }
            });

            /***/ }),
        /* 25 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Number_vue__ = __webpack_require__(26);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d679bb2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Number_vue__ = __webpack_require__(27);
            var disposed = false
            var normalizeComponent = __webpack_require__(0)
            /* script */

            /* template */

            /* styles */
            var __vue_styles__ = null
            /* scopeId */
            var __vue_scopeId__ = null
            /* moduleIdentifier (server only) */
            var __vue_module_identifier__ = null
            var Component = normalizeComponent(
                __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Number_vue__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d679bb2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Number_vue__["a" /* default */],
                __vue_styles__,
                __vue_scopeId__,
                __vue_module_identifier__
            )
            Component.options.__file = "src\\components\\Number.vue"
            if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
            if (Component.options.functional) {console.error("[vue-loader] Number.vue: functional components are not supported with templates, they should use render functions.")}

            /* hot reload */
            if (false) {(function () {
                var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-6d679bb2", Component.options)
                } else {
                    hotAPI.reload("data-v-6d679bb2", Component.options)
                }
                module.hot.dispose(function (data) {
                    disposed = true
                })
            })()}

            /* harmony default export */ __webpack_exports__["a"] = (Component.exports);


            /***/ }),
        /* 26 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(1);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_CommonActions__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




            /* harmony default export */ __webpack_exports__["a"] = ({
                name: 'Number',
                props: {
                    number: {
                        type: Object,
                        required: true
                    }
                },
                mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_CommonActions__["a" /* default */]],
                data() {
                    return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */];
                },
                computed: {
                    isDisabled() {
                        !this.number.active || !this.isOpen;
                    }
                }
            });

            /***/ }),
        /* 27 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
                return _c('div', {
                    staticClass: "numpad__digit"
                }, [_c('button', {
                    ref: "numButton",
                    class: {
                        'is-disabled': !_vm.number.active
                    },
                    attrs: {
                        "disabled": _vm.isDisabled
                    },
                    on: {
                        "mousedown": function($event) {
                            _vm.digitPressed(_vm.number.value)
                        },
                        "mouseup": function($event) {
                            _vm.digitSelected(_vm.number.value, $event) && _vm.blurEl(_vm.$refs.numButton)
                        },
                        "touchstart": function($event) {
                            _vm.digitPressed(_vm.number.value)
                        },
                        "touchend": function($event) {
                            _vm.digitSelected(_vm.number.value, $event)
                        }
                    }
                }, [_vm._v("\n    " + _vm._s(_vm.number.value) + "\n  ")]), _vm._v(" "), _c('div', {
                    staticClass: "numpad__ripple",
                    class: {
                        'is-pressed': _vm.number.pressed
                    }
                })])
            }
            var staticRenderFns = []
            render._withStripped = true
            var esExports = { render: render, staticRenderFns: staticRenderFns }
            /* harmony default export */ __webpack_exports__["a"] = (esExports);
            if (false) {
                module.hot.accept()
                if (module.hot.data) {
                    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6d679bb2", esExports)
                }
            }

            /***/ }),
        /* 28 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
                return _c('div', {
                    staticClass: "numpad"
                }, [_c('div', {
                    staticClass: "numpad__digits"
                }, _vm._l((_vm.numbers), function(digit) {
                    return _c('number', {
                        attrs: {
                            "number": digit
                        }
                    })
                })), _vm._v(" "), _c('div', {
                    staticClass: "numpad__arrows"
                }, [_c('div', {
                    staticClass: "numpad__digit"
                }, [_c('button', {
                    ref: "previousButton",
                    class: {
                        'is-disabled': _vm.activeIndex <= 0
                    },
                    attrs: {
                        "disabled": _vm.activeIndex <= 0 ||  !this.isOpen
                    },
                    on: {
                        "click": function($event) {
                            _vm.goToPrevious()
                        },
                        "mouseup": function($event) {
                            _vm.blurEl(_vm.$refs.previousButton)
                        },
                        "touchstart": function($event) {
                            _vm.arrowPressed('left')
                        },
                        "touchend": _vm.goToPrevious
                    }
                }, [_c('svg', {
                    staticClass: "triangle",
                    attrs: {
                        "viewBox": "0 0 32 32"
                    }
                }, [_c('path', {
                    staticClass: "path1",
                    attrs: {
                        "d": "M22.4 8v16l-14.4-8 14.4-8z"
                    }
                })])]), _vm._v(" "), _c('div', {
                    staticClass: "numpad__ripple",
                    class: {
                        'is-pressed': _vm.arrowKeys.left.pressed
                    }
                })]), _vm._v(" "), _c('div', {
                    staticClass: "numpad__digit"
                }, [_c('button', {
                    ref: "nextButton",
                    class: {
                        'is-disabled': _vm.activeIndex > 2
                    },
                    attrs: {
                        "disabled": _vm.activeIndex > 2 ||  !this.isOpen
                    },
                    on: {
                        "click": function($event) {
                            _vm.goToNext()
                        },
                        "mouseup": function($event) {
                            _vm.blurEl(_vm.$refs.nextButton)
                        },
                        "touchstart": function($event) {
                            _vm.arrowPressed('right')
                        },
                        "touchend": _vm.goToNext
                    }
                }, [_c('svg', {
                    staticClass: "triangle",
                    attrs: {
                        "viewBox": "0 0 32 32"
                    }
                }, [_c('path', {
                    staticClass: "path1",
                    attrs: {
                        "d": "M24 16l-14.4 8v-16l14.4 8z"
                    }
                })])]), _vm._v(" "), _c('div', {
                    staticClass: "numpad__ripple",
                    class: {
                        'is-pressed': _vm.arrowKeys.right.pressed
                    }
                })])])])
            }
            var staticRenderFns = []
            render._withStripped = true
            var esExports = { render: render, staticRenderFns: staticRenderFns }
            /* harmony default export */ __webpack_exports__["a"] = (esExports);
            if (false) {
                module.hot.accept()
                if (module.hot.data) {
                    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b36a77aa", esExports)
                }
            }

            /***/ }),
        /* 29 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
                return _c('div', {
                    directives: [{
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: (_vm.closeOutside),
                        expression: "closeOutside"
                    }]
                }, [_c('div', {
                    staticClass: "timepicker-wrap"
                }, [_c('svg', {
                    staticClass: "timepicker-icon timepicker-icon__clock",
                    attrs: {
                        "viewBox": "0 0 32 32"
                    }
                }, [_c('path', {
                    staticClass: "path1",
                    attrs: {
                        "d": "M20.586 23.414l-6.586-6.586v-8.828h4v7.172l5.414 5.414zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"
                    }
                })]), _vm._v(" "), _c('input', {
                    ref: "timeInput",
                    staticClass: "time",
                    attrs: {
                        "type": "text"
                    },
                    domProps: {
                        "value": _vm.value
                    },
                    on: {
                        "focus": _vm.open
                    }
                }), _vm._v(" "), _c('div', {
                    ref: "timepicker",
                    staticClass: "timepicker",
                    class: {
                        'is-open': _vm.isOpen
                    },
                    attrs: {
                        "tabindex": "0"
                    }
                }, [_c('div', {
                    staticClass: "timepicker__header"
                }, [_vm._v("\n        Set time\n      ")]), _vm._v(" "), _c('div', {
                    staticClass: "timepicker__time"
                }, [_c('div', {
                    staticClass: "flex-wrap"
                }, [_c('time-unit', {
                    attrs: {
                        "value": _vm.time[0],
                        "index": "0"
                    }
                }), _vm._v(" "), _c('time-unit', {
                    attrs: {
                        "value": _vm.time[1],
                        "index": "1"
                    }
                }), _vm._v(" "), _c('div', {
                    staticClass: "timepicker__separator"
                }, [_vm._v(":")]), _vm._v(" "), _c('time-unit', {
                    attrs: {
                        "value": _vm.time[2],
                        "index": "2"
                    }
                }), _vm._v(" "), _c('time-unit', {
                    attrs: {
                        "value": _vm.time[3],
                        "index": "3"
                    }
                }), _vm._v(" "), _c('active-background')], 1)]), _vm._v(" "), _c('numpad')], 1)])])
            }
            var staticRenderFns = []
            render._withStripped = true
            var esExports = { render: render, staticRenderFns: staticRenderFns }
            /* harmony default export */ __webpack_exports__["a"] = (esExports);
            if (false) {
                module.hot.accept()
                if (module.hot.data) {
                    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-530a6a69", esExports)
                }
            }

            /***/ })
        /******/ ]);
});