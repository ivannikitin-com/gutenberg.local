(window.blocksyJsonP=window.blocksyJsonP||[]).push([[4],{12:function(e,t,i){"use strict";e.exports=function(){if("undefined"==typeof window||"undefined"==typeof navigator)return function(){return 0};if(!navigator.userAgent.match(/iphone|ipod|ipad/i)&&!function(){const e=window.navigator.userAgent;if(e.indexOf("iPad")>-1)return!0;if(e.indexOf("Macintosh")>-1)try{return document.createEvent("TouchEvent"),!0}catch(e){}return!1}())return function(){return window.innerHeight};var e,t=Math.abs(window.orientation),i={w:0,h:0};return(e=document.createElement("div")).style.position="fixed",e.style.height="100vh",e.style.width=0,e.style.top=0,document.documentElement.appendChild(e),i.w=90===t?e.offsetHeight:window.innerWidth,i.h=90===t?window.innerWidth:e.offsetHeight,document.documentElement.removeChild(e),e=null,function(){return 90!==Math.abs(window.orientation)?i.h:i.w}}()},34:function(e,t,i){"use strict";i.r(t),i.d(t,"rel",(function(){return b})),i.d(t,"mount",(function(){return g}));var n=i(3),r=i(12),o=i.n(r);function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const c=(e,t)=>t*(100*(1-e)),u=e=>{let{el:t=null,speed:i=null,fitInsideContainer:n=null,isVisible:r=!1,shouldSetHeightToIncrease:a=!0,parallaxBehavior:s="desktop:tablet:mobile"}=e;if(i=i<=-5?-5:i>=5?5:i,n&&a){let e=0;e=i>0?c(.5,i):c(o()()/(n.clientHeight+o()()),i)-c(.5,i),e=2*Math.abs(e),t.parentNode.style.height=r?`calc(100% + ${e}px)`:"100%"}let{top:l,height:u}=h(n||t);return{parallaxBehavior:s,shouldSetHeightToIncrease:a,fitInsideContainer:n,el:t,top:pageYOffset+l,height:u,speed:i,isVisible:r}};function d(e){var t=e.getBoundingClientRect();return t.bottom>-450&&t.top-450<(o()()||document.documentElement.clientHeight)}function h(e){if(!e)return null;let{top:t,left:i,right:n,width:r,height:o}=e.getBoundingClientRect(),a=window.getComputedStyle(e).transform.split(/\(|,|\)/).slice(1,-1).map(e=>parseFloat(e));if(6!=a.length)return e.getBoundingClientRect();var s=a;let l=s[0]*s[3]-s[1]*s[2];return{width:r/s[0],height:o/s[3],left:(i*s[3]-t*s[2]+s[2]*s[5]-s[4]*s[3])/l,right:(n*s[3]-t*s[2]+s[2]*s[5]-s[4]*s[3])/l,top:(-i*s[1]+t*s[0]+s[4]*s[1]-s[0]*s[5])/l}}i(2);function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function f(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let b=new class{constructor(){this.blocks=[],this.oldPosY=!1,this.intersectionObserver=new IntersectionObserver(e=>{e.map(e=>{let{target:t,isIntersecting:i,intersectionRatio:r}=e;this.blocks.filter(e=>{let{fitInsideContainer:i,el:n}=e;return n.closest("svg")?n.closest("svg")===t:i===t||n===t}).map(e=>{e.isVisible=i&&e.parallaxBehavior.indexOf(Object(n.a)({withTablet:!0}))>-1,this.blocks=this.blocks.map(t=>t.el===e.el?e:t),e.isVisible||e.el.removeAttribute("style")})})},{rootMargin:"450px"}),window.addEventListener("resize",()=>{this.oldPosY=!1,this.blocks=this.blocks.map(e=>u(s(s({},e),{},{isVisible:d(e.fitInsideContainer?e.fitInsideContainer:e.el)&&e.parallaxBehavior.indexOf(Object(n.a)({withTablet:!0}))>-1}))),this.animate()}),this.update(),this.animate()}removeEl(e){let{el:t}=e;t.removeAttribute("style"),this.blocks=this.blocks.filter(e=>{let{el:i}=e;return i!==t})}addEl(e){let{el:t,speed:i,fitInsideContainer:r=null,shouldSetHeightToIncrease:o=!0,parallaxBehavior:a="desktop:tablet:mobile"}=e;r?this.intersectionObserver.observe(r):this.intersectionObserver.observe(t.closest("svg")?t.closest("svg"):t),this.blocks.push(u({el:t,speed:i,fitInsideContainer:r,isVisible:d(r||t)&&a.indexOf(Object(n.a)({withTablet:!0}))>-1,shouldSetHeightToIncrease:o,parallaxBehavior:a}))}update(){this.oldPosY||0===this.oldPosY||this.animate(),this.setPosition()&&this.animate(),requestAnimationFrame(this.update.bind(this))}setPosition(){if(0===this.blocks.length)return!1;let e=this.oldPosY;return this.oldPosY=pageYOffset,e!=pageYOffset}animate(){this.blocks.map(e=>{if(!e.isVisible)return void e.el.removeAttribute("style");var t=(pageYOffset-e.top+o()())/(e.height+o()());let{top:i,height:n}=h(e.fitInsideContainer?e.fitInsideContainer:e.el);n||(n=(e.fitInsideContainer?e.fitInsideContainer:e.el).getBoundingClientRect().height);const r=1-(i+(e.el.dataset.percentage&&0===parseInt(e.el.dataset.percentage,10)?0:n/2))/o()();var a=c(e.fitInsideContainer?t:r,e.speed)-c(e.el.dataset.percentage?parseInt(e.el.dataset.percentage,10):.5,e.speed);e.el.style.transform=`translate3d(0, ${a}px, 0)`})}};const g=e=>{e.ctHasParallax&&e.querySelector("figure .ct-image-container > img")&&b.removeEl({el:e.querySelector("figure .ct-image-container > img")}),!e.matches("[data-parallax]")||e.dataset.parallax?(e.ctHasParallax=!0,e.querySelector("figure .ct-image-container > img")?setTimeout(()=>{b.addEl(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){f(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({el:e.querySelector("figure .ct-image-container > img"),speed:-5,fitInsideContainer:e},e.dataset.parallax?{parallaxBehavior:e.dataset.parallax}:{}))},0):b.addEl({el:e,speed:+e.dataset.parallax,shouldSetHeightToIncrease:!1})):e.removeAttribute("data-parallax")}}}]);