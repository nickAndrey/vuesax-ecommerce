!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,n){"use strict";function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.r(e),n.d(e,"StoreService",function(){return i});var i=function(){function n(){!function(t,e){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this)}return r(n.prototype,[{key:"getProducts",value:function(){var t=localStorage.getItem("products"),e=[];return t&&(e=JSON.parse(t)),e}},{key:"setProduct",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=this.getProducts();-1===t.findIndex(function(t){return t.id===e[0].id})&&(t=[].concat(o(t),o(e))),localStorage.setItem("products",JSON.stringify(t))}},{key:"updateProductsCounter",value:function(){var t=document.querySelector("label-component");t&&t.setAttribute("counter",JSON.stringify(this.getProducts().length))}}]),n}()},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t){var o="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,n)}function n(){return u(t,arguments,l(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,t)})(t)}function u(t,e,n){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&a(r,n.prototype),r}).apply(null,arguments)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e),n.d(e,"AppButton",function(){return o});var o=function(t){function o(){var t,e,n;return function(t,e){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this),(e=this,n=l(o).call(this),t=!n||"object"!==r(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n).setAttribute("role","button"),t.setAttribute("tabindex","0"),t.attachShadow({mode:"open"}),t}var e,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(o,c(HTMLElement)),n=[{key:"observedAttributes",get:function(){return["icon"]}}],i((e=o).prototype,[{key:"connectedCallback",value:function(){this.render(),this.iconElm=this.shadowRoot.querySelector("img"),this.setIcon(this.getAttribute("icon"))}},{key:"render",value:function(){var t=document.createElement("template");t.innerHTML='\n      <style>\n        :host {\n          display: inline-flex;\n          padding: 6px 12px;\n          font-size: inherit;\n          cursor: pointer;\n          text-align: center;\n          text-decoration: none;\n          outline: none;          \n          border: none;\n          border-radius: 15px;\n          align-items: center;\n        }\n        img {\n          display: none;\n          margin-right: 0.5em;\n        }\n      </style>\n      <img  alt="" src=""/><slot></slot>',this.shadowRoot.appendChild(t.content.cloneNode(!0))}},{key:"setIcon",value:function(t){this.iconElm&&(null===t?this.iconElm.style.display="none":(this.iconElm.src=t,this.iconElm.style.display="block"))}}]),i(e,n),o}();customElements.define("app-button",o)},function(t,e,n){n(3),n(4),n(5),n(6),n(7),n(0),n(8),n(1),n(9),n(10),n(11),n(12),t.exports=n(13)},function(t,e){var n,o,r;n=document.querySelector(".products"),o=n.querySelector(".list-view"),r=n.querySelector(".grid-view"),n.addEventListener("click",function(t){var e=t.target;e===o?n.classList.add("wide"):e===r&&n.classList.remove("wide")})},function(t,e){!function(){fetch("https://my-json-server.typicode.com/nickAndrey/vuesax-ecommerce/goods").then(function(t){return t.json()}).then(function(t){return e(t)}).catch(function(t){return console.log(t)});var e=function(t){var r=document.querySelector("#product");t.map(function(t,e){var n=r.content.cloneNode(!0).querySelector(".product"),o=n.querySelector(".product__img");o.src=t.src,o.alt=t.title,n.querySelector(".vote").textContent=t.rating,n.querySelector(".price").textContent="$"+t.price,n.querySelector(".title").textContent=t.title,n.querySelector(".description").textContent=t.description,n.querySelector("app-add-to-cart").dataset.index=e,document.querySelector(".products").append(n)})}}()},function(t,e){function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e,n){function u(t,e){return h(t)===e}function i(t){var e=p.className,n=s._config.classPrefix||"";if(d&&(e=e.baseVal),s._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");e=e.replace(o,"$1"+n+"js$2")}s._config.enableClasses&&(e+=" "+n+t.join(" "+n),d?p.className.baseVal=e:p.className=e)}function c(t,e){if("object"==h(t))for(var n in t)f(t,n)&&c(n,t[n]);else{var o=(t=t.toLowerCase()).split("."),r=s[o[0]];if(2==o.length&&(r=r[o[1]]),void 0!==r)return s;e="function"==typeof e?e():e,1==o.length?s[o[0]]=e:(!s[o[0]]||s[o[0]]instanceof Boolean||(s[o[0]]=new Boolean(s[o[0]])),s[o[0]][o[1]]=e),i([(e&&0!=e?"":"no-")+o.join("-")]),s._trigger(t,e)}return s}var a=[],l=[],o={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(t,e){var n=this;setTimeout(function(){e(n[t])},0)},addTest:function(t,e,n){l.push({name:t,fn:e,options:n})},addAsyncTest:function(t){l.push({name:null,fn:t})}},s=function(){};s.prototype=o,s=new s;var f,r,p=e.documentElement,d="svg"===p.nodeName.toLowerCase();f=u(r={}.hasOwnProperty,"undefined")||u(r.call,"undefined")?function(t,e){return e in t&&u(t.constructor.prototype[e],"undefined")}:function(t,e){return r.call(t,e)},o._l={},o.on=function(t,e){this._l[t]||(this._l[t]=[]),this._l[t].push(e),s.hasOwnProperty(t)&&setTimeout(function(){s._trigger(t,s[t])},0)},o._trigger=function(t,e){if(this._l[t]){var n=this._l[t];setTimeout(function(){var t;for(t=0;t<n.length;t++)(0,n[t])(e)},0),delete this._l[t]}},s._q.push(function(){o.addTest=c}),s.addAsyncTest(function(){function n(n,t,o){function e(t){var e=!(!t||"load"!==t.type)&&1==r.width;c(n,"webp"===n&&e?new Boolean(e):e),o&&o(t)}var r=new Image;r.onerror=e,r.onload=e,r.src=t}var o=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=o.shift();n(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var e=0;e<o.length;e++)n(o[e].name,o[e].uri)})}),function(){var t,e,n,o,r,i;for(var c in l)if(l.hasOwnProperty(c)){if(t=[],(e=l[c]).name&&(t.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(n=0;n<e.options.aliases.length;n++)t.push(e.options.aliases[n].toLowerCase());for(o=u(e.fn,"function")?e.fn():e.fn,r=0;r<t.length;r++)1===(i=t[r].split(".")).length?s[i[0]]=o:(!s[i[0]]||s[i[0]]instanceof Boolean||(s[i[0]]=new Boolean(s[i[0]])),s[i[0]][i[1]]=o),a.push((o?"":"no-")+i.join("-"))}}(),i(a),delete o.addTest,delete o.addAsyncTest;for(var y=0;y<s._q.length;y++)s._q[y]();t.Modernizr=s}(window,document)},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n(0);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var o=function(t){function o(){var t,e,n;return function(t,e){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this),(e=this,n=l(o).call(this),t=!n||"object"!==c(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n).storeService=new i.StoreService,t}var e,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(o,r.AppButton),n=[{key:"observedAttributes",get:function(){return["id"]}}],u((e=o).prototype,[{key:"addToStore",value:function(t){var e=t.closest(".product__info");this.storeService.setProduct([{id:this.getAttribute("data-index"),price:e.querySelector(".price-info .price").textContent.substr(1),title:e.querySelector(".title").textContent,describe:e.querySelector(".description").textContent}])}},{key:"connectedCallback",value:function(){var n=this;a(l(o.prototype),"connectedCallback",this).call(this),this.addEventListener("click",function(t){var e=t.target;n.addToStore(e),n.storeService.updateProductsCounter()})}}]),u(e,n),o}();customElements.define("app-add-to-cart",o)},function(t,e,n){"use strict";n.r(e);var o=n(0);function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(new(function(){function n(){!function(t,e){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this.storeService=new o.StoreService,this.target=document.querySelector(".notifications")}return r(n.prototype,[{key:"onInit",value:function(){this.showCountProducts(),this.attachEvents()}},{key:"showCountProducts",value:function(){var t=document.createElement("label-component");t.setAttribute("counter",JSON.stringify(this.storeService.getProducts().length));var e=t.getAttribute("counter");this.setCounterStyles(t),t.textContent=e,this.target.appendChild(t)}},{key:"setCounterStyles",value:function(t){t.setAttribute("width","20"),t.setAttribute("height","20"),t.setAttribute("background","#6f64f8"),t.setAttribute("color","#fff"),t.setAttribute("border-radius","25")}},{key:"showModalProducts",value:function(){var t=document.createElement("modal-component");t.title="products";var e=this.storeService.getProducts(),o=document.createElement("table");o.innerHTML="<tr>\n        <th>id</th>\n        <th>name</th>\n        <th>price</th>\n        <th>description</th>\n    </tr>",o.classList.add("products-table"),e.map(function(t,e){var n="\n        <tr>\n          <td>".concat(t.id,"</td>\n          <td>").concat(t.title,"</td>\n          <td>").concat(t.price,"</td>\n          <td>").concat(t.describe,"</td>\n        </tr>\n      ");o.innerHTML+=n}),t.appendChild(o),this.setModalStyles(t),document.body.appendChild(t)}},{key:"setModalStyles",value:function(t){t.setAttribute("width","800")}},{key:"attachEvents",value:function(){var t=this;this.target.addEventListener("click",function(){t.showModalProducts()})}}]),n}())).onInit()},function(t,e,n){"use strict";n.r(e),n.d(e,"UpdateProductList",function(){return i});var o=n(0);function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var i=function(){function n(){!function(t,e){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this.storeService=new o.StoreService,this.nodeList=[],this.template=document.querySelector("cart-component")}return r(n.prototype,[{key:"render",value:function(){var r=this,t=this.storeService.getProducts();if(t){this.nodeList=[];var i=document.querySelector("#cart");return t.map(function(t,e){var n,o=i.content.cloneNode(!0).querySelector(".row");o.dataset.index=e.toString(),o.querySelector(".product-id").textContent=t.id,o.querySelector(".product-title").textContent=t.title,o.querySelector(".product-describe").textContent=t.describe,o.querySelector(".product-price").textContent=t.price,r.nodeList=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(n=r.nodeList)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),[o])}),this.nodeList}}}]),n}()},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t){var o="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,n)}function n(){return c(t,arguments,a(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,t)})(t)}function c(t,e,n){return(c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&u(r,n.prototype),r}).apply(null,arguments)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var o=function(t){function o(){var t,e,n;return function(t,e){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this),(e=this,n=a(o).call(this),t=!n||"object"!==r(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n).attachShadow({mode:"open"}),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(o,i(HTMLElement)),n(o.prototype,[{key:"connectedCallback",value:function(){this.shadowRoot.innerHTML='\n      <style>\n        .checkbox-container {\n          display: block;\n          position: relative;\n          padding-left: 20px;\n          cursor: pointer;\n          user-select: none;\n        }\n        input {\n          position: absolute;\n          opacity: 0;\n          cursor: pointer;\n          height: 0;\n          width: 0;\n        }\n        input:checked ~ .checkmark {\n          background-color: #6f64f8;\n        }\n        input:checked ~ .checkmark:after {\n          display: block;\n        }    \n        .checkmark {\n          position: absolute;\n          top: 0;\n          left: 0;\n          height: 15px;\n          width: 15px;\n          background-color: #eee;\n        }\n        .checkmark:after {\n          content: \'\';\n          position: absolute;\n          display: none;\n          left: 5px;\n          top: 1px;\n          width: 3px;\n          height: 7px;\n          border: solid #fff;\n          border-width: 0 3px 3px 0;\n          transform: rotate(45deg);\n        }\n      </style>\n      <label class="checkbox-container">\n        <input type="checkbox">\n        <span class="checkmark"></span>\n        <slot></slot>\n      </label>\n    '}}]),o}();customElements.define("app-checkbox",o)},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t){var o="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,n)}function n(){return u(t,arguments,l(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,t)})(t)}function u(t,e,n){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&a(r,n.prototype),r}).apply(null,arguments)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var n=function(t){function o(){var t,e,n;return function(t,e){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this),(e=this,n=l(o).call(this),t=!n||"object"!==r(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n).attachShadow({mode:"open"}),t}var e,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(o,c(HTMLElement)),n=[{key:"observedAttributes",get:function(){return["counter"]}}],i((e=o).prototype,[{key:"attributeChangedCallback",value:function(){this.textContent=this.getAttribute("counter")}},{key:"connectedCallback",value:function(){this.render(),this.updateStyle()}},{key:"render",value:function(){var t=document.createElement("template");t.innerHTML="<style></style><slot></slot>",this.shadowRoot.appendChild(t.content.cloneNode(!0))}},{key:"updateStyle",value:function(){this.shadowRoot.querySelector("style").textContent="\n      :host {\n        color: ".concat(this.getAttribute("color"),";\n        width: ").concat(this.getAttribute("width"),"px;\n        height: ").concat(this.getAttribute("height"),"px;\n        background: ").concat(this.getAttribute("background"),";\n        border-radius: ").concat(this.getAttribute("border-radius"),"px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 10px;\n        position: absolute;\n        top: -11px;\n        right: -11px;\n      }\n    ")}}]),i(e,n),o}();customElements.define("label-component",n)},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t){var o="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,n)}function n(){return c(t,arguments,a(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,t)})(t)}function c(t,e,n){return(c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&u(r,n.prototype),r}).apply(null,arguments)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var o=function(t){function o(){var t,e,n;return function(t,e){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this),(e=this,n=a(o).call(this),t=!n||"object"!==r(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n).attachShadow({mode:"open"}),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(o,i(HTMLElement)),n(o.prototype,[{key:"connectedCallback",value:function(){this.render(),this.attachEvents(),this.setStyles()}},{key:"setStyles",value:function(){this.shadowRoot.querySelector(".modal-content").style.width="".concat(this.getAttribute("width"),"px")}},{key:"attachEvents",value:function(){var t=this;this.shadowRoot.querySelector(".close").addEventListener("click",function(){t.remove()})}},{key:"disconnectedCallback",value:function(){console.log("closed")}},{key:"render",value:function(){var t=document.createElement("template");t.innerHTML='\n      <style>\n      .modal {\n        display: block; \n        position: fixed;\n        z-index: 1; \n        padding-top: 100px;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        overflow: auto;\n        background-color: rgb(0,0,0);\n        background-color: rgba(0,0,0,0.4);      \n      }\n      \n      .modal-content {\n        position: relative;\n        background-color: #fefefe;\n        margin: auto;       \n        padding: 0;\n        width: 100%;       \n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n        -webkit-animation-name: animatetop;\n        -webkit-animation-duration: 0.4s;\n        animation-name: animatetop;\n        animation-duration: 0.4s;\n        border-radius: 4px;\n      }\n      \n      @-webkit-keyframes animatetop {\n        from {top:-300px; opacity:0} \n        to {top:0; opacity:1}\n      }\n      \n      @keyframes animatetop {\n        from {top:-300px; opacity:0}\n        to {top:0; opacity:1}\n      }\n      \n      .close {\n        color: white;\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n      }\n      \n      .close:hover,\n      .close:focus {\n        color: #000;\n        text-decoration: none;\n        cursor: pointer;\n      }\n      \n      .modal-header {\n        padding: 2px 16px;\n        background-color: #6f64f8;\n        color: white;\n        border-radius: 4px 4px 0 0;\n      }\n      \n      .modal-body {\n        padding: 15px;\n      }\n      \n      .modal-footer {\n        padding: 2px 16px;\n        background-color: #6f64f8;\n        color: white;\n        border-radius: 0 0 4px 4px;\n      }\n      </style>\n      <div class="modal">\n        <div class="modal-content">\n          <div class="modal-header">\n            <span class="close">&times;</span>\n            <h4>'.concat(this.getAttribute("title"),'</h4>\n          </div>\n          <div class="modal-body">\n            <slot></slot>\n          </div>\n        </div>\n      </div>\n    '),this.shadowRoot.appendChild(t.content.cloneNode(!0))}}]),o}();customElements.define("modal-component",o)},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function a(t){var o="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,n)}function n(){return l(t,arguments,f(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,t)})(t)}function l(t,e,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&s(r,n.prototype),r}).apply(null,arguments)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){function e(){var t;return o(this,e),(t=c(this,f(e).call(this))).attachShadow({mode:"open"}),t}return u(e,a(HTMLElement)),i(e,[{key:"connectedCallback",value:function(){this.setAttribute("role","radio"),this.setAttribute("tabindex",-1),this.setAttribute("aria-checked",!1),this.shadowRoot.innerHTML="\n      <style>\n        :host {\n          position: relative;\n          display: block;\n          padding-left: 20px;\n          margin-bottom: 15px;\n        }\n        :host([aria-checked=\"true\"]) {\n          outline: none !important;\n        }\n        :host::before {\n          content: '';\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          width: 15px;\n          height: 15px;\n          border: 1px solid #eee;\n          left: 0;\n          position: absolute;         \n          border-radius: 50%;\n        }\n        :host([aria-checked=\"true\"])::before {\n          content: '';\n          display: block;\n          width: 5px;\n          height: 5px;\n          background: #6f64f8;\n          position: absolute;\n          border: 5px solid #eee;;         \n          border-radius: 50%;\n        }\n      </style>\n      <slot></slot>\n    "}}]),e}();customElements.define("radio-button",p);var d=function(t){function e(){return o(this,e),c(this,f(e).call(this))}return u(e,a(HTMLElement)),i(e,[{key:"connectedCallback",value:function(){if(this.setAttribute("role","radiogroup"),this.radios=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(e=this.querySelectorAll("radio-button"))||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),this.hasAttribute("selected")){var t=this.getAttribute("selected");this._selected=t,this.radios[t].setAttribute("tabindex",0),this.radios[t].setAttribute("aria-checked",!0)}else this._selected=0;var e;this.addEventListener("click",this.handleClick.bind(this))}},{key:"handleClick",value:function(t){var e=this.radios.indexOf(t.target);-1!==e&&(this.selected=e)}},{key:"selected",set:function(t){if(isFinite(this.selected)){var e=this.radios[this.selected];e.tabIndex=-1,e.removeAttribute("aria-checked",!1)}var n=this.radios[t];n.tabIndex=0,n.focus(),n.setAttribute("aria-checked",!0),this.setAttribute("selected",t),this._selected=t},get:function(){return this._selected}}]),e}();customElements.define("radio-group",d)},function(t,e){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(new(function(){function n(){!function(t,e){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this.api="./filters.json",this.filtersNode=document.querySelector(".filters"),this.section="",this.component=""}return o(n.prototype,[{key:"fetchData",value:function(){var e=this;fetch(this.api).then(function(t){return t.json()}).then(function(t){return e.render(t)}).catch(function(t){return console.log(t)})}},{key:"render",value:function(t){var n=this,o=document.createElement("template");o.innerHTML='\n      <div class="form-group">\n        <app-checkbox></app-checkbox>\n        <span class="result"></span>\n      </div>',t.map(function(t){if(t.category&&(n.section="category",n.component="app-checkbox",n.renderCategory(t.category,o,n.section,n.component)),t.brand&&(n.section="brand",n.component="app-checkbox",n.renderCategory(t.brand,o,n.section,n.component)),t.multirange){var e=document.createElement("template");e.innerHTML="<radio-button></radio-button>",n.section="radio-group",n.component="radio-button",n.renderRadio(t.multirange,e,n.section,n.component)}})}},{key:"renderRadio",value:function(t,n,e,o){var r=this;t.map(function(t){var e=n.content.cloneNode(!0).querySelector(o);e.name=t.name,e.textContent=t.title,r.filtersNode.querySelector(".multirange radio-group").appendChild(e)})}},{key:"renderCategory",value:function(t,o,r,i){var c=this;t.map(function(t){var e=o.content.cloneNode(!0).querySelector(".form-group"),n=e.querySelector(i);n.innerText=t.title,n.id="".concat(r,"_").concat(t.id),e.querySelector(".result").textContent=t.result,c.filtersNode.querySelector(".".concat(r)).appendChild(e)})}}]),n}())).fetchData()}]);