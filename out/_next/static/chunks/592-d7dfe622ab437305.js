"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{5863:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(9763).Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},9397:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(9763).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},3247:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(9763).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},8728:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(9763).Z)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},2489:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(9763).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},9376:function(e,t,n){var r=n(5475);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},6741:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},3966:function(e,t,n){n.d(t,{b:function(){return i},k:function(){return a}});var r=n(2265),o=n(7437);function a(e,t){let n=r.createContext(t),a=e=>{let{children:t,...a}=e,i=r.useMemo(()=>a,Object.values(a));return(0,o.jsx)(n.Provider,{value:i,children:t})};return a.displayName=e+"Provider",[a,function(o){let a=r.useContext(n);if(a)return a;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[],a=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return a.scopeName=e,[function(t,a){let i=r.createContext(a),u=n.length;n=[...n,a];let c=t=>{let{scope:n,children:a,...c}=t,l=n?.[e]?.[u]||i,s=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(l.Provider,{value:s,children:a})};return c.displayName=t+"Provider",[c,function(n,o){let c=o?.[e]?.[u]||i,l=r.useContext(c);if(l)return l;if(void 0!==a)return a;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(a,...t)]}},2650:function(e,t,n){let r;n.d(t,{x8:function(){return tn},VY:function(){return e9},dk:function(){return tt},aV:function(){return e4},h_:function(){return e8},fC:function(){return e6},Dx:function(){return te},xz:function(){return e5}});var o,a,i,u,c,l,s,d=n(2265),f=n(6741),v=n(8575),p=n(3966),m=n(9255),h=n(886),g=n(5278),y=n(6840),b=n(6606),E=n(7437),w="focusScope.autoFocusOnMount",C="focusScope.autoFocusOnUnmount",N={bubbles:!1,cancelable:!0},x=d.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...i}=e,[u,c]=d.useState(null),l=(0,b.W)(o),s=(0,b.W)(a),f=d.useRef(null),p=(0,v.e)(t,e=>c(e)),m=d.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;d.useEffect(()=>{if(r){let e=function(e){if(m.paused||!u)return;let t=e.target;u.contains(t)?f.current=t:S(f.current,{select:!0})},t=function(e){if(m.paused||!u)return;let t=e.relatedTarget;null===t||u.contains(t)||S(f.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&S(u)});return u&&n.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,u,m.paused]),d.useEffect(()=>{if(u){D.add(m);let e=document.activeElement;if(!u.contains(e)){let t=new CustomEvent(w,N);u.addEventListener(w,l),u.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(S(r,{select:t}),document.activeElement!==n)return}(M(u).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&S(u))}return()=>{u.removeEventListener(w,l),setTimeout(()=>{let t=new CustomEvent(C,N);u.addEventListener(C,s),u.dispatchEvent(t),t.defaultPrevented||S(null!=e?e:document.body,{select:!0}),u.removeEventListener(C,s),D.remove(m)},0)}}},[u,l,s,m]);let h=d.useCallback(e=>{if(!n&&!r||m.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=M(e);return[R(t,e),R(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&S(a,{select:!0})):(e.preventDefault(),n&&S(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,m.paused]);return(0,E.jsx)(y.WV.div,{tabIndex:-1,...i,ref:p,onKeyDown:h})});function M(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function R(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function S(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}x.displayName="FocusScope";var D=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=O(r,e)).unshift(e)},remove(e){var t;null===(t=(r=O(r,e))[0])||void 0===t||t.resume()}});function O(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var k=n(3832),P=n(1599),T=0;function L(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var A=function(){return(A=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function W(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var j="right-scroll-bar-position",I="width-before-scroll-bar";function F(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var _="undefined"!=typeof window?d.useLayoutEffect:d.useEffect,B=new WeakMap,V=(void 0===o&&(o={}),(void 0===a&&(a=function(e){return e}),i=[],u=!1,c={read:function(){if(u)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var t=a(e,u);return i.push(t),function(){i=i.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(u=!0;i.length;){var t=i;i=[],t.forEach(e)}i={push:function(t){return e(t)},filter:function(){return i}}},assignMedium:function(e){u=!0;var t=[];if(i.length){var n=i;i=[],n.forEach(e),t=i}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),i={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),i}}}}).options=A({async:!0,ssr:!1},o),c),U=function(){},Z=d.forwardRef(function(e,t){var n,r,o,a,i=d.useRef(null),u=d.useState({onScrollCapture:U,onWheelCapture:U,onTouchMoveCapture:U}),c=u[0],l=u[1],s=e.forwardProps,f=e.children,v=e.className,p=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,b=e.inert,E=e.allowPinchZoom,w=e.as,C=e.gapMode,N=W(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=(n=[i,t],r=function(e){return n.forEach(function(t){return F(t,e)})},(o=(0,d.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,_(function(){var e=B.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||F(e,null)}),r.forEach(function(e){t.has(e)||F(e,o)})}B.set(a,n)},[n]),a),M=A(A({},N),c);return d.createElement(d.Fragment,null,m&&d.createElement(g,{sideCar:V,removeScrollBar:p,shards:h,noIsolation:y,inert:b,setCallbacks:l,allowPinchZoom:!!E,lockRef:i,gapMode:C}),s?d.cloneElement(d.Children.only(f),A(A({},M),{ref:x})):d.createElement(void 0===w?"div":w,A({},M,{className:v,ref:x}),f))});Z.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},Z.classNames={fullWidth:I,zeroRight:j};var z=function(e){var t=e.sideCar,n=W(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return d.createElement(r,A({},n))};z.isSideCarExport=!0;var K=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=s||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,a;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},X=function(){var e=K();return function(t,n){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},$=function(){var e=X();return function(t){return e(t.styles,t.dynamic),null}},Y={left:0,top:0,right:0,gap:0},q=function(e){return parseInt(e||"",10)||0},H=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[q(n),q(r),q(o)]},G=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return Y;var t=H(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},J=$(),Q="data-scroll-locked",ee=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(Q,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(j," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(I," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(j," .").concat(j," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(I," .").concat(I," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(Q,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},et=function(){var e=parseInt(document.body.getAttribute(Q)||"0",10);return isFinite(e)?e:0},en=function(){d.useEffect(function(){return document.body.setAttribute(Q,(et()+1).toString()),function(){var e=et()-1;e<=0?document.body.removeAttribute(Q):document.body.setAttribute(Q,e.toString())}},[])},er=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;en();var a=d.useMemo(function(){return G(o)},[o]);return d.createElement(J,{styles:ee(a,!t,o,n?"":"!important")})},eo=!1;if("undefined"!=typeof window)try{var ea=Object.defineProperty({},"passive",{get:function(){return eo=!0,!0}});window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch(e){eo=!1}var ei=!!eo&&{passive:!1},eu=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},ec=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),el(e,r)){var o=es(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},el=function(e,t){return"v"===e?eu(t,"overflowY"):eu(t,"overflowX")},es=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ed=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,c=n.target,l=t.contains(c),s=!1,d=u>0,f=0,v=0;do{var p=es(e,c),m=p[0],h=p[1]-p[2]-i*m;(m||h)&&el(e,c)&&(f+=h,v+=m),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(v)||!o&&-u>v)&&(s=!0),s},ef=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ev=function(e){return[e.deltaX,e.deltaY]},ep=function(e){return e&&"current"in e?e.current:e},em=0,eh=[],eg=(l=function(e){var t=d.useRef([]),n=d.useRef([0,0]),r=d.useRef(),o=d.useState(em++)[0],a=d.useState($)[0],i=d.useRef(e);d.useEffect(function(){i.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(ep),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=d.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!i.current.allowPinchZoom;var o,a=ef(e),u=n.current,c="deltaX"in e?e.deltaX:u[0]-a[0],l="deltaY"in e?e.deltaY:u[1]-a[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=ec(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ec(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var v=r.current||o;return ed(v,t,e,"h"===v?c:l,!0)},[]),c=d.useCallback(function(e){if(eh.length&&eh[eh.length-1]===a){var n="deltaY"in e?ev(e):ef(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(ep).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=d.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),s=d.useCallback(function(e){n.current=ef(e),r.current=void 0},[]),f=d.useCallback(function(t){l(t.type,ev(t),t.target,u(t,e.lockRef.current))},[]),v=d.useCallback(function(t){l(t.type,ef(t),t.target,u(t,e.lockRef.current))},[]);d.useEffect(function(){return eh.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",c,ei),document.addEventListener("touchmove",c,ei),document.addEventListener("touchstart",s,ei),function(){eh=eh.filter(function(e){return e!==a}),document.removeEventListener("wheel",c,ei),document.removeEventListener("touchmove",c,ei),document.removeEventListener("touchstart",s,ei)}},[]);var p=e.removeScrollBar,m=e.inert;return d.createElement(d.Fragment,null,m?d.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?d.createElement(er,{gapMode:e.gapMode}):null)},V.useMedium(l),z),ey=d.forwardRef(function(e,t){return d.createElement(Z,A({},e,{ref:t,sideCar:eg}))});ey.classNames=Z.classNames;var eb=new WeakMap,eE=new WeakMap,ew={},eC=0,eN=function(e){return e&&(e.host||eN(e.parentNode))},ex=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eN(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});ew[n]||(ew[n]=new WeakMap);var a=ew[n],i=[],u=new Set,c=new Set(o),l=function(e){!e||u.has(e)||(u.add(e),l(e.parentNode))};o.forEach(l);var s=function(e){!e||c.has(e)||Array.prototype.forEach.call(e.children,function(e){if(u.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,c=(eb.get(e)||0)+1,l=(a.get(e)||0)+1;eb.set(e,c),a.set(e,l),i.push(e),1===c&&o&&eE.set(e,!0),1===l&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),u.clear(),eC++,function(){i.forEach(function(e){var t=eb.get(e)-1,o=a.get(e)-1;eb.set(e,t),a.set(e,o),t||(eE.has(e)||e.removeAttribute(r),eE.delete(e)),o||e.removeAttribute(n)}),--eC||(eb=new WeakMap,eb=new WeakMap,eE=new WeakMap,ew={})}},eM=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),ex(r,o,n,"aria-hidden")):function(){return null}},eR=n(7495),eS="Dialog",[eD,eO]=(0,p.b)(eS),[ek,eP]=eD(eS),eT=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:i=!0}=e,u=d.useRef(null),c=d.useRef(null),[l=!1,s]=(0,h.T)({prop:r,defaultProp:o,onChange:a});return(0,E.jsx)(ek,{scope:t,triggerRef:u,contentRef:c,contentId:(0,m.M)(),titleId:(0,m.M)(),descriptionId:(0,m.M)(),open:l,onOpenChange:s,onOpenToggle:d.useCallback(()=>s(e=>!e),[s]),modal:i,children:n})};eT.displayName=eS;var eL="DialogTrigger",eA=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eP(eL,n),a=(0,v.e)(t,o.triggerRef);return(0,E.jsx)(y.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":eQ(o.open),...r,ref:a,onClick:(0,f.M)(e.onClick,o.onOpenToggle)})});eA.displayName=eL;var eW="DialogPortal",[ej,eI]=eD(eW,{forceMount:void 0}),eF=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=eP(eW,t);return(0,E.jsx)(ej,{scope:t,forceMount:n,children:d.Children.map(r,e=>(0,E.jsx)(P.z,{present:n||a.open,children:(0,E.jsx)(k.h,{asChild:!0,container:o,children:e})}))})};eF.displayName=eW;var e_="DialogOverlay",eB=d.forwardRef((e,t)=>{let n=eI(e_,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eP(e_,e.__scopeDialog);return a.modal?(0,E.jsx)(P.z,{present:r||a.open,children:(0,E.jsx)(eV,{...o,ref:t})}):null});eB.displayName=e_;var eV=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eP(e_,n);return(0,E.jsx)(ey,{as:eR.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,E.jsx)(y.WV.div,{"data-state":eQ(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eU="DialogContent",eZ=d.forwardRef((e,t)=>{let n=eI(eU,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eP(eU,e.__scopeDialog);return(0,E.jsx)(P.z,{present:r||a.open,children:a.modal?(0,E.jsx)(ez,{...o,ref:t}):(0,E.jsx)(eK,{...o,ref:t})})});eZ.displayName=eU;var ez=d.forwardRef((e,t)=>{let n=eP(eU,e.__scopeDialog),r=d.useRef(null),o=(0,v.e)(t,n.contentRef,r);return d.useEffect(()=>{let e=r.current;if(e)return eM(e)},[]),(0,E.jsx)(eX,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,f.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,f.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,f.M)(e.onFocusOutside,e=>e.preventDefault())})}),eK=d.forwardRef((e,t)=>{let n=eP(eU,e.__scopeDialog),r=d.useRef(!1),o=d.useRef(!1);return(0,E.jsx)(eX,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var a,i;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var a,i;null===(a=e.onInteractOutside)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let u=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),eX=d.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...i}=e,u=eP(eU,n),c=d.useRef(null),l=(0,v.e)(t,c);return d.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:L()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:L()),T++,()=>{1===T&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),T--}},[]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(x,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:(0,E.jsx)(g.XB,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":eQ(u.open),...i,ref:l,onDismiss:()=>u.onOpenChange(!1)})}),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(e7,{titleId:u.titleId}),(0,E.jsx)(e3,{contentRef:c,descriptionId:u.descriptionId})]})]})}),e$="DialogTitle",eY=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eP(e$,n);return(0,E.jsx)(y.WV.h2,{id:o.titleId,...r,ref:t})});eY.displayName=e$;var eq="DialogDescription",eH=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eP(eq,n);return(0,E.jsx)(y.WV.p,{id:o.descriptionId,...r,ref:t})});eH.displayName=eq;var eG="DialogClose",eJ=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eP(eG,n);return(0,E.jsx)(y.WV.button,{type:"button",...r,ref:t,onClick:(0,f.M)(e.onClick,()=>o.onOpenChange(!1))})});function eQ(e){return e?"open":"closed"}eJ.displayName=eG;var e0="DialogTitleWarning",[e1,e2]=(0,p.k)(e0,{contentName:eU,titleName:e$,docsSlug:"dialog"}),e7=e=>{let{titleId:t}=e,n=e2(e0),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return d.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},e3=e=>{let{contentRef:t,descriptionId:n}=e,r=e2("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return d.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(o)},[o,t,n]),null},e6=eT,e5=eA,e8=eF,e4=eB,e9=eZ,te=eY,tt=eH,tn=eJ},5278:function(e,t,n){n.d(t,{I0:function(){return g},XB:function(){return f},fC:function(){return h}});var r,o=n(2265),a=n(6741),i=n(6840),u=n(8575),c=n(6606),l=n(7437),s="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,t)=>{var n,f;let{disableOutsidePointerEvents:v=!1,onEscapeKeyDown:h,onPointerDownOutside:g,onFocusOutside:y,onInteractOutside:b,onDismiss:E,...w}=e,C=o.useContext(d),[N,x]=o.useState(null),M=null!==(f=null==N?void 0:N.ownerDocument)&&void 0!==f?f:null===(n=globalThis)||void 0===n?void 0:n.document,[,R]=o.useState({}),S=(0,u.e)(t,e=>x(e)),D=Array.from(C.layers),[O]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),k=D.indexOf(O),P=N?D.indexOf(N):-1,T=C.layersWithOutsidePointerEventsDisabled.size>0,L=P>=k,A=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,c.W)(e),a=o.useRef(!1),i=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!a.current){let t=function(){m("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",i.current),i.current=t,n.addEventListener("click",i.current,{once:!0})):t()}else n.removeEventListener("click",i.current);a.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",i.current)}},[n,r]),{onPointerDownCapture:()=>a.current=!0}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));!L||n||(null==g||g(e),null==b||b(e),e.defaultPrevented||null==E||E())},M),W=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,c.W)(e),a=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!a.current&&m("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>a.current=!0,onBlurCapture:()=>a.current=!1}}(e=>{let t=e.target;[...C.branches].some(e=>e.contains(t))||(null==y||y(e),null==b||b(e),e.defaultPrevented||null==E||E())},M);return!function(e,t=globalThis?.document){let n=(0,c.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{P!==C.layers.size-1||(null==h||h(e),!e.defaultPrevented&&E&&(e.preventDefault(),E()))},M),o.useEffect(()=>{if(N)return v&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(r=M.body.style.pointerEvents,M.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(N)),C.layers.add(N),p(),()=>{v&&1===C.layersWithOutsidePointerEventsDisabled.size&&(M.body.style.pointerEvents=r)}},[N,M,v,C]),o.useEffect(()=>()=>{N&&(C.layers.delete(N),C.layersWithOutsidePointerEventsDisabled.delete(N),p())},[N,C]),o.useEffect(()=>{let e=()=>R({});return document.addEventListener(s,e),()=>document.removeEventListener(s,e)},[]),(0,l.jsx)(i.WV.div,{...w,ref:S,style:{pointerEvents:T?L?"auto":"none":void 0,...e.style},onFocusCapture:(0,a.M)(e.onFocusCapture,W.onFocusCapture),onBlurCapture:(0,a.M)(e.onBlurCapture,W.onBlurCapture),onPointerDownCapture:(0,a.M)(e.onPointerDownCapture,A.onPointerDownCapture)})});f.displayName="DismissableLayer";var v=o.forwardRef((e,t)=>{let n=o.useContext(d),r=o.useRef(null),a=(0,u.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(i.WV.div,{...e,ref:a})});function p(){let e=new CustomEvent(s);document.dispatchEvent(e)}function m(e,t,n,r){let{discrete:o}=r,a=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),o?(0,i.jH)(a,u):a.dispatchEvent(u)}v.displayName="DismissableLayerBranch";var h=f,g=v},9255:function(e,t,n){n.d(t,{M:function(){return c}});var r,o=n(2265),a=n(1188),i=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),u=0;function c(e){let[t,n]=o.useState(i());return(0,a.b)(()=>{e||n(e=>e??String(u++))},[e]),e||(t?`radix-${t}`:"")}},6394:function(e,t,n){n.d(t,{f:function(){return u}});var r=n(2265),o=n(6840),a=n(7437),i=r.forwardRef((e,t)=>(0,a.jsx)(o.WV.label,{...e,ref:t,onMouseDown:t=>{var n;t.target.closest("button, input, select, textarea")||(null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var u=i},3832:function(e,t,n){n.d(t,{h:function(){return c}});var r=n(2265),o=n(4887),a=n(6840),i=n(1188),u=n(7437),c=r.forwardRef((e,t)=>{var n,c;let{container:l,...s}=e,[d,f]=r.useState(!1);(0,i.b)(()=>f(!0),[]);let v=l||d&&(null===(c=globalThis)||void 0===c?void 0:null===(n=c.document)||void 0===n?void 0:n.body);return v?o.createPortal((0,u.jsx)(a.WV.div,{...s,ref:t}),v):null});c.displayName="Portal"},1599:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(2265),o=n(8575),a=n(1188),i=e=>{var t,n;let i,c;let{present:l,children:s}=e,d=function(e){var t,n;let[o,i]=r.useState(),c=r.useRef({}),l=r.useRef(e),s=r.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=u(c.current);s.current="mounted"===d?e:"none"},[d]),(0,a.b)(()=>{let t=c.current,n=l.current;if(n!==e){let r=s.current,o=u(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),l.current=e}},[e,f]),(0,a.b)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=u(c.current).includes(e.animationName);if(e.target===o&&r&&(f("ANIMATION_END"),!l.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},a=e=>{e.target===o&&(s.current=u(c.current))};return o.addEventListener("animationstart",a),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",a),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(c.current=getComputedStyle(e)),i(e)},[])}}(l),f="function"==typeof s?s({present:d.isPresent}):r.Children.only(s),v=(0,o.e)(d.ref,(i=null===(t=Object.getOwnPropertyDescriptor(f.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in i&&i.isReactWarning?f.ref:(i=null===(n=Object.getOwnPropertyDescriptor(f,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in i&&i.isReactWarning?f.props.ref:f.props.ref||f.ref);return"function"==typeof s||d.isPresent?r.cloneElement(f,{ref:v}):null};function u(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},6840:function(e,t,n){n.d(t,{WV:function(){return u},jH:function(){return c}});var r=n(2265),o=n(4887),a=n(7495),i=n(7437),u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,u=r?a.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(u,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function c(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},6606:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(2265);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},886:function(e,t,n){n.d(t,{T:function(){return a}});var r=n(2265),o=n(6606);function a({prop:e,defaultProp:t,onChange:n=()=>{}}){let[a,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[a]=n,i=r.useRef(a),u=(0,o.W)(t);return r.useEffect(()=>{i.current!==a&&(u(a),i.current=a)},[a,i,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,c=u?e:a,l=(0,o.W)(n);return[c,r.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else i(t)},[u,e,i,l])]}},1188:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(2265),o=globalThis?.document?r.useLayoutEffect:()=>{}}}]);