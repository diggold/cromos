/* El código a continuación es propiedad intelectual de The Mail Track Company S.L. de Barcelona, España,
y solo debe ser utilizado y manejado bajo estos Términos: https://mailtrack.io/es/terms

The code hereafter is the intellectual property of The Mail Track Company S.L. of Barcelona, Spain
and must be used and handled only according to these Terms: https://mailtrack.io/en/terms */
/* El código a continuación es propiedad intelectual de The Mail Track Company S.L. de Barcelona, España,
y solo debe ser utilizado y manejado bajo estos Términos: https://mailtrack.io/es/terms

The code hereafter is the intellectual property of The Mail Track Company S.L. of Barcelona, Spain
and must be used and handled only according to these Terms: https://mailtrack.io/en/terms */
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=386)}({109:function(e,t,n){"use strict";t.a=(e=>{if(!e.length)return;const t=e.pop();if("function"==typeof t)return t;e.push(t)})},341:function(e,t,n){"use strict";var r=n(46);t.a=(()=>{var e=document.createEvent("CustomEvent");e.initCustomEvent("crx-enabled.mt",!0,!1,{}),document.documentElement.querySelector("body").dispatchEvent(e),document.querySelector("body").classList.add("crx-enabled"),document.querySelector(".crx-refresh")&&n.i(r.a)("refreshGmail")})},386:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(341);n.i(r.a)()},46:function(e,t,n){"use strict";var r=n(109);t.a=function(e){const t=arguments.length>=2?[].slice.call(arguments,1):[],o=n.i(r.a)(t);return t[1]&&t[1]instanceof Error&&(t[1]={name:t[1].name,message:t[1].message,stack:t[1].stack}),chrome.runtime.sendMessage({method:e,args:t},o)},t.b=function(e,t){const o=arguments.length>=3?[].slice.call(arguments,2):[],c=n.i(r.a)(o);return chrome.tabs.sendMessage(e,{method:t,args:o},c)}}});