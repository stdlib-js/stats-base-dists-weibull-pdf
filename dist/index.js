"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=v(function(C,q){
var f=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-pow/dist'),y=require('@stdlib/math-base-special-exp/dist'),I=require('@stdlib/constants-float64-pinf/dist'),w=require('@stdlib/constants-float64-ninf/dist');function z(e,r,i){var u,t;return f(r)||f(i)||r<=0||i<=0?NaN:e<0||e===I||e===w?0:e===0?r===1?r/i:0:(u=e/i,t=o(u,r-1),r/i*t*y(-o(u,r)))}q.exports=z
});var p=v(function(D,N){
var P=require('@stdlib/utils-constant-function/dist'),a=require('@stdlib/math-base-special-pow/dist'),O=require('@stdlib/math-base-special-exp/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/constants-float64-pinf/dist'),g=require('@stdlib/constants-float64-ninf/dist');function h(e,r){if(c(e)||c(r)||e<=0||r<=0)return P(NaN);return i;function i(u){var t,n;return u<0||u===R||u===g?0:u===0?e===1?e/r:0:(t=u/r,n=a(t,e-1),e/r*n*O(-a(t,e)))}}N.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=s(),A=p();j(F,"factory",A);module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
