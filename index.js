(()=>{"use strict";var e,t={915:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function o(t){var o=function(t,o){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(o)?o:o+""}var n=function(){return e=function e(t){var n,r,u,p=this,c=t.popupSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,u=function(e){"Escape"===e.key&&p.close()},(r=o(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:u,enumerable:!0,configurable:!0,writable:!0}):n[r]=u,this._popupElement=document.querySelector(c),this._handleEscClose=this._handleEscClose.bind(this)},(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__button"))&&e.close()}))}}])&&t(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n}(),r=document.querySelector(".header__menu"),u=document.querySelector(".test__button-item"),p=document.querySelectorAll(".popup__link"),c=(document.querySelector("#elements__list"),document.querySelector(".elements__prev"),document.querySelector(".elements__next"),document.querySelector(".popup_test"),document.querySelector(".popup_answer"),document.querySelector(".popup_finish"),document.querySelector(".test__button_opened"),document.querySelector(".popup__heading"),document.querySelector(".popup__btn_agree"),document.querySelector(".popup__btn_disagree"),document.querySelector(".popup__subtitle"),document.querySelector(".popup__test-text"),document.querySelector(".popup__btn-test"),document.querySelector(".popup__btn_again"),document.querySelector(".popup__btn_end"),document.querySelector(".popup__number"),new n({popupSelector:".popup"}));c.setEventListeners(),r.addEventListener("click",(function(){c.open()}));var i=new n({popupSelector:".popup_payment"});i.setEventListeners(),u.addEventListener("click",(function(){i.open()})),p.forEach((function(e){e.addEventListener("click",(function(){c.close()}))}))}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var u=o[e]={exports:{}};return t[e](u,u.exports,n),u.exports}n.m=t,e=[],n.O=(t,o,r,u)=>{if(!o){var p=1/0;for(s=0;s<e.length;s++){for(var[o,r,u]=e[s],c=!0,i=0;i<o.length;i++)(!1&u||p>=u)&&Object.keys(n.O).every((e=>n.O[e](o[i])))?o.splice(i--,1):(c=!1,u<p&&(p=u));if(c){e.splice(s--,1);var l=r();void 0!==l&&(t=l)}}return t}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[o,r,u]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,552:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,u,[p,c,i]=o,l=0;if(p.some((t=>0!==e[t]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(i)var s=i(n)}for(t&&t(o);l<p.length;l++)u=p[l],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(s)},o=self.webpackChunkpsychologist=self.webpackChunkpsychologist||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[552],(()=>n(915)));r=n.O(r)})();