"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[749],{6741:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},9863:function(e,t,n){n.d(t,{B:function(){return l}});var r=n(2265),u=n(7437),o=n(8575),i=n(7495);function l(e){let t=e+"CollectionProvider",[n,l]=function(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let u=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return o.scopeName=e,[function(t,o){let i=r.createContext(o),l=n.length;function c(t){let{scope:n,children:o,...c}=t,s=n?.[e][l]||i,a=r.useMemo(()=>c,Object.values(c));return(0,u.jsx)(s.Provider,{value:a,children:o})}return n=[...n,o],c.displayName=t+"Provider",[c,function(n,u){let c=u?.[e][l]||i,s=r.useContext(c);if(s)return s;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e)[`__scope${r}`];return{...t,...u}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(o,...t)]}(t),[c,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=e=>{let{scope:t,children:n}=e,o=r.useRef(null),i=r.useRef(new Map).current;return(0,u.jsx)(c,{scope:t,itemMap:i,collectionRef:o,children:n})};a.displayName=t;let f=e+"CollectionSlot",d=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,l=s(f,n),c=(0,o.e)(t,l.collectionRef);return(0,u.jsx)(i.g7,{ref:c,children:r})});d.displayName=f;let m=e+"CollectionItemSlot",p="data-radix-collection-item",v=r.forwardRef((e,t)=>{let{scope:n,children:l,...c}=e,a=r.useRef(null),f=(0,o.e)(t,a),d=s(m,n);return r.useEffect(()=>(d.itemMap.set(a,{ref:a,...c}),()=>void d.itemMap.delete(a))),(0,u.jsx)(i.g7,{[p]:"",ref:f,children:l})});return v.displayName=m,[{Provider:a,Slot:d,ItemSlot:v},function(t){let n=s(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(p,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},l]}},3966:function(e,t,n){n.d(t,{b:function(){return i},k:function(){return o}});var r=n(2265),u=n(7437);function o(e,t){let n=r.createContext(t),o=e=>{let{children:t,...o}=e,i=r.useMemo(()=>o,Object.values(o));return(0,u.jsx)(n.Provider,{value:i,children:t})};return o.displayName=e+"Provider",[o,function(u){let o=r.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let u=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return o.scopeName=e,[function(t,o){let i=r.createContext(o),l=n.length;n=[...n,o];let c=t=>{let{scope:n,children:o,...c}=t,s=n?.[e]?.[l]||i,a=r.useMemo(()=>c,Object.values(c));return(0,u.jsx)(s.Provider,{value:a,children:o})};return c.displayName=t+"Provider",[c,function(n,u){let c=u?.[e]?.[l]||i,s=r.useContext(c);if(s)return s;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e)[`__scope${r}`];return{...t,...u}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(o,...t)]}},1599:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(2265),u=n(8575),o=n(1188),i=e=>{var t,n;let i,c;let{present:s,children:a}=e,f=function(e){var t,n;let[u,i]=r.useState(),c=r.useRef({}),s=r.useRef(e),a=r.useRef("none"),[f,d]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=l(c.current);a.current="mounted"===f?e:"none"},[f]),(0,o.b)(()=>{let t=c.current,n=s.current;if(n!==e){let r=a.current,u=l(t);e?d("MOUNT"):"none"===u||(null==t?void 0:t.display)==="none"?d("UNMOUNT"):n&&r!==u?d("ANIMATION_OUT"):d("UNMOUNT"),s.current=e}},[e,d]),(0,o.b)(()=>{if(u){var e;let t;let n=null!==(e=u.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=l(c.current).includes(e.animationName);if(e.target===u&&r&&(d("ANIMATION_END"),!s.current)){let e=u.style.animationFillMode;u.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===u.style.animationFillMode&&(u.style.animationFillMode=e)})}},o=e=>{e.target===u&&(a.current=l(c.current))};return u.addEventListener("animationstart",o),u.addEventListener("animationcancel",r),u.addEventListener("animationend",r),()=>{n.clearTimeout(t),u.removeEventListener("animationstart",o),u.removeEventListener("animationcancel",r),u.removeEventListener("animationend",r)}}d("ANIMATION_END")},[u,d]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:r.useCallback(e=>{e&&(c.current=getComputedStyle(e)),i(e)},[])}}(s),d="function"==typeof a?a({present:f.isPresent}):r.Children.only(a),m=(0,u.e)(f.ref,(i=null===(t=Object.getOwnPropertyDescriptor(d.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in i&&i.isReactWarning?d.ref:(i=null===(n=Object.getOwnPropertyDescriptor(d,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in i&&i.isReactWarning?d.props.ref:d.props.ref||d.ref);return"function"==typeof a||f.isPresent?r.cloneElement(d,{ref:m}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},6840:function(e,t,n){n.d(t,{WV:function(){return l},jH:function(){return c}});var r=n(2265),u=n(4887),o=n(7495),i=n(7437),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...u}=e,l=r?o.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(l,{...u,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function c(e,t){e&&u.flushSync(()=>e.dispatchEvent(t))}},6606:function(e,t,n){n.d(t,{W:function(){return u}});var r=n(2265);function u(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},886:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(2265),u=n(6606);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[o]=n,i=r.useRef(o),l=(0,u.W)(t);return r.useEffect(()=>{i.current!==o&&(l(o),i.current=o)},[o,i,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,c=l?e:o,s=(0,u.W)(n);return[c,r.useCallback(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else i(t)},[l,e,i,s])]}},1188:function(e,t,n){n.d(t,{b:function(){return u}});var r=n(2265),u=globalThis?.document?r.useLayoutEffect:()=>{}},5095:function(e,t,n){n.d(t,{M:function(){return h}});var r=n(2265),u=n(1534);function o(){let e=(0,r.useRef)(!1);return(0,u.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var i=n(8345),l=n(4252),c=n(3576);class s extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function a({children:e,isPresent:t}){let n=(0,r.useId)(),u=(0,r.useRef)(null),o=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)(()=>{let{width:e,height:r,top:i,left:l}=o.current;if(t||!u.current||!e||!r)return;u.current.dataset.motionPopId=n;let c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${i}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),r.createElement(s,{isPresent:t,childRef:u,sizeRef:o},r.cloneElement(e,{ref:u}))}let f=({children:e,initial:t,isPresent:n,onExitComplete:u,custom:o,presenceAffectsLayout:i,mode:s})=>{let f=(0,c.h)(d),m=(0,r.useId)(),p=(0,r.useMemo)(()=>({id:m,initial:t,isPresent:n,custom:o,onExitComplete:e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;u&&u()},register:e=>(f.set(e,!1),()=>f.delete(e))}),i?void 0:[n]);return(0,r.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[n]),r.useEffect(()=>{n||f.size||!u||u()},[n]),"popLayout"===s&&(e=r.createElement(a,{isPresent:n},e)),r.createElement(l.O.Provider,{value:p},e)};function d(){return new Map}var m=n(8881),p=n(3223);let v=e=>e.key||"",h=({children:e,custom:t,initial:n=!0,onExitComplete:l,exitBeforeEnter:c,presenceAffectsLayout:s=!0,mode:a="sync"})=>{var d;(0,p.k)(!c,"Replace exitBeforeEnter with mode='wait'");let h=(0,r.useContext)(m.p).forceRender||function(){let e=o(),[t,n]=(0,r.useState)(0),u=(0,r.useCallback)(()=>{e.current&&n(t+1)},[t]);return[(0,r.useCallback)(()=>i.Wi.postRender(u),[u]),t]}()[0],N=o(),E=function(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}(e),y=E,M=(0,r.useRef)(new Map).current,R=(0,r.useRef)(y),w=(0,r.useRef)(new Map).current,g=(0,r.useRef)(!0);if((0,u.L)(()=>{g.current=!1,function(e,t){e.forEach(e=>{let n=v(e);t.set(n,e)})}(E,w),R.current=y}),d=()=>{g.current=!0,w.clear(),M.clear()},(0,r.useEffect)(()=>()=>d(),[]),g.current)return r.createElement(r.Fragment,null,y.map(e=>r.createElement(f,{key:v(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:s,mode:a},e)));y=[...y];let x=R.current.map(v),C=E.map(v),O=x.length;for(let e=0;e<O;e++){let t=x[e];-1!==C.indexOf(t)||M.has(t)||M.set(t,void 0)}return"wait"===a&&M.size&&(y=[]),M.forEach((e,n)=>{if(-1!==C.indexOf(n))return;let u=w.get(n);if(!u)return;let o=x.indexOf(n),i=e;i||(i=r.createElement(f,{key:v(u),isPresent:!1,onExitComplete:()=>{M.delete(n);let e=Array.from(w.keys()).filter(e=>!C.includes(e));if(e.forEach(e=>w.delete(e)),R.current=E.filter(t=>{let r=v(t);return r===n||e.includes(r)}),!M.size){if(!1===N.current)return;h(),l&&l()}},custom:t,presenceAffectsLayout:s,mode:a},u),M.set(n,i)),y.splice(o,0,i)}),y=y.map(e=>{let t=e.key;return M.has(t)?e:r.createElement(f,{key:v(e),isPresent:!0,presenceAffectsLayout:s,mode:a},e)}),r.createElement(r.Fragment,null,M.size?y:y.map(e=>(0,r.cloneElement)(e)))}}}]);