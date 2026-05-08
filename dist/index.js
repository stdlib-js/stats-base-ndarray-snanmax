"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(p,a){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),v=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),m=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/stats-strided-snanmax/dist').ndarray;function d(e){var r=e[0];return o(s(r,0),m(r),v(r,0),q(r))}a.exports=d
});var x=require("path").join,f=require('@stdlib/utils-try-require/dist'),c=require('@stdlib/assert-is-error/dist'),g=t(),i,n=f(x(__dirname,"./native.js"));c(n)?i=g:i=n;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
