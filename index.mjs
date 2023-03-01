// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.0.8-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function d(t,m,d){var o;return s(m)||s(d)||m<=0||d<=0?NaN:t<0||t===i||t===r?0:0===t?1===m?m/d:0:m/d*n(o=t/d,m-1)*e(-n(o,m))}function o(t,d){return s(t)||s(d)||t<=0||d<=0?m(NaN):function(s){var m,o;if(s<0)return 0;if(s===i||s===r)return 0;if(0===s)return 1===t?t/d:0;return o=n(m=s/d,t-1),t/d*o*e(-n(m,t))}}t(d,"factory",o);export{d as default,o as factory};
//# sourceMappingURL=index.mjs.map
