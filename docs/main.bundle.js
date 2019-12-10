!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=2)}([function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e),n.d(e,"UpdateProductList",function(){return o});var o=function(){function n(){!function(t,e){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this.nodeList=[],this.isUpdated=!1,this.carTempl=document.querySelector("cart-component")}return r(n.prototype,[{key:"addProductListener",value:function(){0<arguments.length&&void 0!==arguments[0]&&arguments[0]&&(this.isUpdated=!0,this.onUpdate())}},{key:"onUpdate",value:function(){if(this.isUpdated)return this.isUpdated=!1,this.carTempl.setAttribute("updated",JSON.stringify(Math.random()))}},{key:"render",value:function(){var a=this,t=JSON.parse(localStorage.getItem("products"));if(t){this.nodeList=[];var l=document.querySelector("#cart");return Object.entries(t).map(function(t){var e,n,r,o=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),i=o[0],c=o[1],u=l.content.cloneNode(!0).querySelector(".row");u.dataset.index=i,u.querySelector(".product-id").textContent=c.id,u.querySelector(".product-title").textContent=c.title,u.querySelector(".product-describe").textContent=c.describe,u.querySelector(".product-price").textContent=c.price,a.nodeList=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(r=a.nodeList)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),[u])}),this.nodeList}}}]),n}()},function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){var r="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return u(t,arguments,l(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,t)})(t)}function u(t,e,n){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e),n.d(e,"AppButton",function(){return r});var r=function(t){function r(){var t,e,n;return function(t,e){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this),(e=this,n=l(r).call(this),t=!n||"object"!==o(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n).setAttribute("role","button"),t.setAttribute("tabindex","0"),t.attachShadow({mode:"open"}),t}var e,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(r,c(HTMLElement)),n=[{key:"observedAttributes",get:function(){return["icon"]}}],i((e=r).prototype,[{key:"connectedCallback",value:function(){this.shadowRoot.innerHTML='\n      <style>\n        :host {\n          display: inline-flex;\n          padding: 6px 12px;\n          font-size: inherit;\n          cursor: pointer;\n          text-align: center;\n          text-decoration: none;\n          outline: none;          \n          border: none;\n          border-radius: 15px;\n          align-items: center;\n        }\n        img {\n          display: none;\n          margin-right: 0.5em;\n        }\n      </style>\n      <img  alt="" src=""/><slot></slot>',this.iconElm=this.shadowRoot.querySelector("img"),this.goSetIcon(this.getAttribute("icon"))}},{key:"goSetIcon",value:function(t){this.iconElm&&(null===t?this.iconElm.style.display="none":(this.iconElm.src=t,this.iconElm.style.display="block"))}}]),i(e,n),r}();customElements.define("app-button",r)},function(t,e,n){n(3),n(4),n(5),n(6),n(1),n(7),n(8),n(9),n(10),t.exports=n(0)},function(t,e){var n,r,o;n=document.querySelector(".products"),r=n.querySelector(".list-view"),o=n.querySelector(".grid-view"),n.addEventListener("click",function(t){var e=t.target;e===r?n.classList.add("wide"):e===o&&n.classList.remove("wide")})},function(t,e){!function(){fetch("https://my-json-server.typicode.com/nickAndrey/vuesax-ecommerce/goods").then(function(t){return t.json()}).then(function(t){return e(t)}).catch(function(t){return console.log(t)});var e=function(t){var a=document.querySelector("#product");Object.entries(t).map(function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),o=r[0],i=r[1],c=a.content.cloneNode(!0).querySelector(".product"),u=c.querySelector(".product__img");u.src=i.src,u.alt=i.title,c.querySelector(".vote").textContent=i.rating,c.querySelector(".price").textContent="$"+i.price,c.querySelector(".title").textContent=i.title,c.querySelector(".description").textContent=i.description,c.querySelector("app-add-to-cart").dataset.index=o,document.querySelector(".products").append(c)})}}()},function(t,e){function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e,n){function u(t,e){return b(t)===e}function i(t){var e=p.className,n=s._config.classPrefix||"";if(d&&(e=e.baseVal),s._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");e=e.replace(r,"$1"+n+"js$2")}s._config.enableClasses&&(e+=" "+n+t.join(" "+n),d?p.className.baseVal=e:p.className=e)}function c(t,e){if("object"==b(t))for(var n in t)f(t,n)&&c(n,t[n]);else{var r=(t=t.toLowerCase()).split("."),o=s[r[0]];if(2==r.length&&(o=o[r[1]]),void 0!==o)return s;e="function"==typeof e?e():e,1==r.length?s[r[0]]=e:(!s[r[0]]||s[r[0]]instanceof Boolean||(s[r[0]]=new Boolean(s[r[0]])),s[r[0]][r[1]]=e),i([(e&&0!=e?"":"no-")+r.join("-")]),s._trigger(t,e)}return s}var a=[],l=[],r={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(t,e){var n=this;setTimeout(function(){e(n[t])},0)},addTest:function(t,e,n){l.push({name:t,fn:e,options:n})},addAsyncTest:function(t){l.push({name:null,fn:t})}},s=function(){};s.prototype=r,s=new s;var f,o,p=e.documentElement,d="svg"===p.nodeName.toLowerCase();f=u(o={}.hasOwnProperty,"undefined")||u(o.call,"undefined")?function(t,e){return e in t&&u(t.constructor.prototype[e],"undefined")}:function(t,e){return o.call(t,e)},r._l={},r.on=function(t,e){this._l[t]||(this._l[t]=[]),this._l[t].push(e),s.hasOwnProperty(t)&&setTimeout(function(){s._trigger(t,s[t])},0)},r._trigger=function(t,e){if(this._l[t]){var n=this._l[t];setTimeout(function(){var t;for(t=0;t<n.length;t++)(0,n[t])(e)},0),delete this._l[t]}},s._q.push(function(){r.addTest=c}),s.addAsyncTest(function(){function n(n,t,r){function e(t){var e=!(!t||"load"!==t.type)&&1==o.width;c(n,"webp"===n&&e?new Boolean(e):e),r&&r(t)}var o=new Image;o.onerror=e,o.onload=e,o.src=t}var r=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=r.shift();n(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var e=0;e<r.length;e++)n(r[e].name,r[e].uri)})}),function(){var t,e,n,r,o,i;for(var c in l)if(l.hasOwnProperty(c)){if(t=[],(e=l[c]).name&&(t.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(n=0;n<e.options.aliases.length;n++)t.push(e.options.aliases[n].toLowerCase());for(r=u(e.fn,"function")?e.fn():e.fn,o=0;o<t.length;o++)1===(i=t[o].split(".")).length?s[i[0]]=r:(!s[i[0]]||s[i[0]]instanceof Boolean||(s[i[0]]=new Boolean(s[i[0]])),s[i[0]][i[1]]=r),a.push((r?"":"no-")+i.join("-"))}}(),i(a),delete r.addTest,delete r.addAsyncTest;for(var y=0;y<s._q.length;y++)s._q[y]();t.Modernizr=s}(window,document)},function(t,e){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(new(function(){function n(){!function(t,e){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this.api="./filters.json",this.filtersNode=document.querySelector(".filters"),this.section="",this.component=""}return r(n.prototype,[{key:"fetchData",value:function(){var e=this;fetch(this.api).then(function(t){return t.json()}).then(function(t){return e.render(t)}).catch(function(t){return console.log(t)})}},{key:"render",value:function(t){var e=this,n=document.createElement("template");n.innerHTML='\n      <div class="form-group">\n        <app-checkbox></app-checkbox>\n        <span class="result"></span>\n      </div>';var r=document.createElement("template");r.innerHTML="\n        <radio-button></radio-button>\n    ",t.map(function(t){t.category?(e.section="category",e.component="app-checkbox",e.renderCategory(t.category,n,e.section,e.component)):t.brand?(e.section="brand",e.component="app-checkbox",e.renderCategory(t.brand,n,e.section,e.component)):(e.section="radio-group",e.component="radio-button",e.renderRadio(t.multirange,r,e.section,e.component))})}},{key:"renderRadio",value:function(t,e,n,r){for(var o in t)if(t.hasOwnProperty(o)){var i=e.content.cloneNode(!0),c=i.querySelector(r);c.name=t[o].name,c.textContent=t[o].title,i.querySelector(n).appendChild(c),this.filtersNode.querySelector(".multirange").appendChild(c)}}},{key:"renderCategory",value:function(t,e,n,r){for(var o in t)if(t.hasOwnProperty(o)){var i=e.content.cloneNode(!0).querySelector(".form-group"),c=i.querySelector(r);c.innerText=t[o].title,c.id="".concat(n,"_").concat(t[o].id),i.querySelector(".result").textContent=t[o].result,this.filtersNode.querySelector(".".concat(n)).appendChild(i)}}}]),n}())).fetchData()},function(t,e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t){var r="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return c(t,arguments,a(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,t)})(t)}function c(t,e,n){return(c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&u(o,n.prototype),o}).apply(null,arguments)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var r=function(t){function r(){var t,e,n;return function(t,e){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this),(e=this,n=a(r).call(this),t=!n||"object"!==o(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n).attachShadow({mode:"open"}),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(r,i(HTMLElement)),n(r.prototype,[{key:"connectedCallback",value:function(){this.shadowRoot.innerHTML='\n      <style>\n        .checkbox-container {\n          display: block;\n          position: relative;\n          padding-left: 20px;\n          cursor: pointer;\n          user-select: none;\n        }\n        input {\n          position: absolute;\n          opacity: 0;\n          cursor: pointer;\n          height: 0;\n          width: 0;\n        }\n        input:checked ~ .checkmark {\n          background-color: #6f64f8;\n        }\n        input:checked ~ .checkmark:after {\n          display: block;\n        }    \n        .checkmark {\n          position: absolute;\n          top: 0;\n          left: 0;\n          height: 15px;\n          width: 15px;\n          background-color: #eee;\n        }\n        .checkmark:after {\n          content: \'\';\n          position: absolute;\n          display: none;\n          left: 5px;\n          top: 1px;\n          width: 3px;\n          height: 7px;\n          border: solid #fff;\n          border-width: 0 3px 3px 0;\n          transform: rotate(45deg);\n        }\n      </style>\n      <label class="checkbox-container">\n        <input type="checkbox">\n        <span class="checkmark"></span>\n        <slot></slot>\n      </label>\n    '}}]),r}();customElements.define("app-checkbox",r)},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function c(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function a(t){var r="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return l(t,arguments,f(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,t)})(t)}function l(t,e,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&s(o,n.prototype),o}).apply(null,arguments)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){function e(){var t;return r(this,e),(t=c(this,f(e).call(this))).attachShadow({mode:"open"}),t}return u(e,a(HTMLElement)),i(e,[{key:"connectedCallback",value:function(){this.setAttribute("role","radio"),this.setAttribute("tabindex",-1),this.setAttribute("aria-checked",!1),this.shadowRoot.innerHTML="\n      <style>\n        :host {\n          position: relative;\n          display: block;\n          padding-left: 20px;\n          margin-bottom: 15px;\n        }\n        :host([aria-checked=\"true\"]) {\n          outline: none !important;\n        }\n        :host::before {\n          content: '';\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          width: 15px;\n          height: 15px;\n          border: 1px solid #eee;\n          left: 0;\n          position: absolute;         \n          border-radius: 50%;\n        }\n        :host([aria-checked=\"true\"])::before {\n          content: '';\n          display: block;\n          width: 5px;\n          height: 5px;\n          background: #6f64f8;\n          position: absolute;\n          border: 5px solid #eee;;         \n          border-radius: 50%;\n        }\n      </style>\n      <slot></slot>\n    "}}]),e}();customElements.define("radio-button",p);var d=function(t){function e(){return r(this,e),c(this,f(e).call(this))}return u(e,a(HTMLElement)),i(e,[{key:"connectedCallback",value:function(){if(this.setAttribute("role","radiogroup"),this.radios=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(e=this.querySelectorAll("radio-button"))||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),this.hasAttribute("selected")){var t=this.getAttribute("selected");this._selected=t,this.radios[t].setAttribute("tabindex",0),this.radios[t].setAttribute("aria-checked",!0)}else this._selected=0,this.radios[0].setAttribute("tabindex",0);var e;this.addEventListener("click",this.handleClick.bind(this))}},{key:"handleClick",value:function(t){var e=this.radios.indexOf(t.target);-1!==e&&(this.selected=e)}},{key:"selected",set:function(t){if(isFinite(this.selected)){var e=this.radios[this.selected];e.tabIndex=-1,e.removeAttribute("aria-checked",!1)}var n=this.radios[t];n.tabIndex=0,n.focus(),n.setAttribute("aria-checked",!0),this.setAttribute("selected",t),this._selected=t},get:function(){return this._selected}}]),e}();customElements.define("radio-group",d)},function(t,e,n){"use strict";n.r(e);var o=n(1),i=n(0);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var r=function(t){function r(){var t,e,n;return function(t,e){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this),(e=this,n=l(r).call(this),t=!n||"object"!==c(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n).updList=new i.UpdateProductList,t}var e,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(r,o.AppButton),n=[{key:"observedAttributes",get:function(){return["id"]}}],u((e=r).prototype,[{key:"addToStore",value:function(t){var e=t.querySelector(".price-info .price").textContent.substr(1),n=t.querySelector(".title").textContent,r=t.querySelector(".description").textContent,o=[{id:this.elementId,price:e,title:n,describe:r}];!function(){if(localStorage.getItem("products")){var t=JSON.parse(localStorage.getItem("products"));-1===t.findIndex(function(t){return t.id===o[0].id})&&localStorage.setItem("products",JSON.stringify([].concat(function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(e=t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),o)))}else localStorage.setItem("products",JSON.stringify(o));var e}()}},{key:"connectedCallback",value:function(){var n=this;a(l(r.prototype),"connectedCallback",this).call(this),this.addEventListener("click",function(t){var e=t.target.closest(".product__info");n.addToStore(e),n.updList.addProductListener(!0)})}},{key:"elementId",get:function(){return this.getAttribute("data-index")}}]),u(e,n),r}();customElements.define("app-add-to-cart",r)},function(t,e,n){"use strict";n.r(e);var o=n(0);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t){var r="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return a(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function a(t,e,n){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&l(o,n.prototype),o}).apply(null,arguments)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var r=function(t){function r(){var t,e,n;return function(t,e){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this),(e=this,n=s(r).call(this),t=!n||"object"!==i(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n).updList=new o.UpdateProductList,t.attachShadow({mode:"open"}),t.shadowRoot.innerHTML+="<style>\n      :host {\n          /*position: fixed;*/\n        background: #ffffff;\n        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.135216);\n        border-radius: 8px;\n        margin: auto;\n        padding: 10px 15px;\n        display: grid;\n      }\n      .row {\n        display: grid;\n        grid-template-columns: 20px repeat(4, 1fr);\n      }\n      .row > div {\n        border: 1px solid;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    </style>",t}var e,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(r,u(HTMLElement)),n=[{key:"observedAttributes",get:function(){return["updated"]}}],c((e=r).prototype,[{key:"connectedCallback",value:function(){this.renderProducts()}},{key:"attributeChangedCallback",value:function(){this.updList.onUpdate(this),this.renderProducts()}},{key:"renderProducts",value:function(){var r=this,t=this.updList.render();t&&t.forEach(function(t,e){var n=r.shadowRoot.querySelectorAll(".row")[e];n||r.shadowRoot.appendChild(t),n&&n.dataset.index!==t.dataset.index&&r.shadowRoot.appendChild(t)})}}]),c(e,n),r}();customElements.define("cart-component",r)}]);