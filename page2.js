(()=>{"use strict";var e,t={520:()=>{document.querySelector(".header__menu"),document.querySelector(".test__button-item"),document.querySelectorAll(".popup__link");var e=document.querySelector("#elements__list"),t=document.querySelector(".elements__prev"),r=document.querySelector(".elements__next"),o=(document.querySelector(".profile__button-arrow"),document.querySelector(".popup_test"),document.querySelector(".popup_answer"),document.querySelector(".popup_finish"),document.querySelector(".test__button_opened"),document.querySelector(".popup__heading"),document.querySelector(".popup__btn_agree"),document.querySelector(".popup__btn_disagree"),document.querySelector(".popup__subtitle"),document.querySelector(".popup__test-text"),document.querySelector(".popup__btn-test"),document.querySelector(".popup__btn_again"),document.querySelector(".popup__btn_end"),document.querySelector(".popup__number"),Array.from(e.children));function n(t){var r,n=e.querySelector("[data-active]"),u=+n.dataset.index;n.classList.add("hidden"),n.removeAttribute("data-active"),"next"===t?r=u+1===o.length?0:u+1:"prev"===t&&(r=0===u?o.length-1:u-1);var c=e.querySelector('[data-index="'.concat(r,'"]'));c.classList.remove("hidden"),c.setAttribute("data-active","")}o.forEach((function(e,t){0!==t&&e.classList.add("hidden"),e.dataset.index=t,o[0].setAttribute("data-active",""),e.addEventListener("click",(function(){n("next")}))})),r.onclick=function(){n("next")},t.onclick=function(){n("prev")}}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var u=r[e]={exports:{}};return t[e](u,u.exports,o),u.exports}o.m=t,e=[],o.O=(t,r,n,u)=>{if(!r){var c=1/0;for(d=0;d<e.length;d++){for(var[r,n,u]=e[d],p=!0,l=0;l<r.length;l++)(!1&u||c>=u)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(p=!1,u<c&&(c=u));if(p){e.splice(d--,1);var a=n();void 0!==a&&(t=a)}}return t}u=u||0;for(var d=e.length;d>0&&e[d-1][2]>u;d--)e[d]=e[d-1];e[d]=[r,n,u]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={604:0,825:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,u,[c,p,l]=r,a=0;if(c.some((t=>0!==e[t]))){for(n in p)o.o(p,n)&&(o.m[n]=p[n]);if(l)var d=l(o)}for(t&&t(r);a<c.length;a++)u=c[a],o.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return o.O(d)},r=self.webpackChunkpsychologist=self.webpackChunkpsychologist||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[825],(()=>o(520)));n=o.O(n)})();