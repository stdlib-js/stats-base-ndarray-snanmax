"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var t=s(function(l,a){
var v=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),m=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/stats-strided-snanmax/dist').ndarray;function x(e){var r=e[0];return d(v(r,0),o(r),q(r,0),m(r))}a.exports=x
});var f=require("path").join,c=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),j=t(),i,n=c(f(__dirname,"./native.js"));g(n)?i=j:i=n;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
