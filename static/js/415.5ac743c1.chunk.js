"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{713:function(e,t,n){n.d(t,{HI:function(){return c},Hg:function(){return i},M1:function(){return l},Tn:function(){return d},lU:function(){return u}});var r=n(861),o=n(757),a=n.n(o),s=n(263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"b6da31fc92a69bac7a66403e27502d5d"}}),i=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie",{params:{query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t),{params:n});case 2:return r=e.sent,o=r.data,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits"),{params:n});case 2:return r=e.sent,o=r.data,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews"),{params:n});case 2:return r=e.sent,o=r.data,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},415:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var r=n(439),o=n(791),a=n(689);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=n(433);function d(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=d(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var f=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=d(e))&&(r&&(r+=" "),r+=t);return r},p=["theme","type"],m=["delay","staleId"],v=function(e){return"number"==typeof e&&!isNaN(e)},h=function(e){return"string"==typeof e},g=function(e){return"function"==typeof e},y=function(e){return h(e)||g(e)?e:null},E=function(e){return(0,o.isValidElement)(e)||h(e)||g(e)||v(e)};function T(e){var t=e.enter,n=e.exit,r=e.appendPosition,a=void 0!==r&&r,s=e.collapse,i=void 0===s||s,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,s=e.position,c=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=a?"".concat(t,"--").concat(s):t,v=a?"".concat(n,"--").concat(s):n,h=(0,o.useRef)(0);return(0,o.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),r=function e(r){var o;r.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,l.Z)(n)))};(e=t.classList).add.apply(e,(0,l.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,o.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,d,u):d()};p||(c?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),o.createElement(o.Fragment,null,r)}}function b(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var _={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,l.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},O=function(e){var t=e.theme,n=e.type,r=u(e,p);return o.createElement("svg",c({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},C={info:function(e){return o.createElement(O,c({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(O,c({},e),o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(O,c({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(O,c({},e),o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function w(e){var t=(0,o.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],a=(0,o.useState)([]),s=(0,r.Z)(a,2),i=s[0],d=s[1],f=(0,o.useRef)(null),p=(0,o.useRef)(new Map).current,T=function(e){return-1!==i.indexOf(e)},O=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:T,getToast:function(e){return p.get(e)}}).current;function w(e){var t=e.containerId;!O.props.limit||t&&O.containerId!==t||(O.count-=O.queue.length,O.queue=[])}function I(e){d((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function x(){var e=O.queue.shift();N(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var r=t.delay,a=t.staleId,s=u(t,m);if(E(e)&&!function(e){return!f.current||O.props.enableMultiContainer&&e.containerId!==O.props.containerId||p.has(e.toastId)&&null==e.updateId}(s)){var i=s.toastId,l=s.updateId,d=s.data,T=O.props,w=function(){return I(i)},L=null==l;L&&O.count++;var k,R,P=c(c(c({},T),{},{style:T.toastStyle,key:O.toastKey++},s),{},{toastId:i,updateId:l,data:d,closeToast:w,isIn:!1,className:y(s.className||T.toastClassName),bodyClassName:y(s.bodyClassName||T.bodyClassName),progressClassName:y(s.progressClassName||T.progressClassName),autoClose:!s.isLoading&&(k=s.autoClose,R=T.autoClose,!1===k||v(k)&&k>0?k:R),deleteToast:function(){var e=b(p.get(i),"removed");p.delete(i),_.emit(4,e);var t=O.queue.length;if(O.count=null==i?O.count-O.displayedToast:O.count-1,O.count<0&&(O.count=0),t>0){var r=null==i?O.props.limit:1;if(1===t||1===r)O.displayedToast++,x();else{var o=r>t?t:r;O.displayedToast=o;for(var a=0;a<o;a++)x()}}else n()}});P.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,a=e.icon,s=null,i={theme:t,type:n};return!1===a||(g(a)?s=a(i):(0,o.isValidElement)(a)?s=(0,o.cloneElement)(a,i):h(a)||v(a)?s=a:r?s=C.spinner():function(e){return e in C}(n)&&(s=C[n](i))),s}(P),g(s.onOpen)&&(P.onOpen=s.onOpen),g(s.onClose)&&(P.onClose=s.onClose),P.closeButton=T.closeButton,!1===s.closeButton||E(s.closeButton)?P.closeButton=s.closeButton:!0===s.closeButton&&(P.closeButton=!E(T.closeButton)||T.closeButton);var j=e;(0,o.isValidElement)(e)&&!h(e.type)?j=(0,o.cloneElement)(e,{closeToast:w,toastProps:P,data:d}):g(e)&&(j=e({closeToast:w,toastProps:P,data:d})),T.limit&&T.limit>0&&O.count>T.limit&&L?O.queue.push({toastContent:j,toastProps:P,staleId:a}):v(r)?setTimeout((function(){N(j,P,a)}),r):N(j,P,a)}}function N(e,t,n){var r=t.toastId;n&&p.delete(n);var o={content:e,props:t};p.set(r,o),d((function(e){return[].concat((0,l.Z)(e),[r]).filter((function(e){return e!==n}))})),_.emit(4,b(o,null==o.props.updateId?"added":"updated"))}return(0,o.useEffect)((function(){return O.containerId=e.containerId,_.cancelEmit(3).on(0,L).on(1,(function(e){return f.current&&I(e)})).on(5,w).emit(2,O),function(){p.clear(),_.emit(3,O)}}),[]),(0,o.useEffect)((function(){O.props=e,O.isToastActive=T,O.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(p.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:f,isToastActive:T}}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function x(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function L(e){var t=(0,o.useState)(!1),n=(0,r.Z)(t,2),a=n[0],s=n[1],i=(0,o.useState)(!1),c=(0,r.Z)(i,2),u=c[0],l=c[1],d=(0,o.useRef)(null),f=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,o.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,y=e.onClick,E=e.closeOnClick;function T(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",w),document.addEventListener("touchmove",C),document.addEventListener("touchend",w);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=I(t.nativeEvent),f.y=x(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(f.boundingRect){var n=f.boundingRect,r=n.top,o=n.bottom,a=n.left,s=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=s&&f.y>=r&&f.y<=o?O():_()}}function _(){s(!0)}function O(){s(!1)}function C(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&O(),f.x=I(t),f.y=x(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function w(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",w);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,o.useEffect)((function(){p.current=e})),(0,o.useEffect)((function(){return d.current&&d.current.addEventListener("d",_,{once:!0}),g(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;g(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}}),[]),(0,o.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||O(),window.addEventListener("focus",_),window.addEventListener("blur",O)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",_),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var L={onMouseDown:T,onTouchStart:T,onMouseUp:b,onTouchEnd:b};return m&&v&&(L.onMouseEnter=O,L.onMouseLeave=_),E&&(L.onClick=function(e){y&&y(e),f.canCloseOnClick&&h()}),{playToast:_,pauseToast:O,isRunning:a,preventExitTransition:u,toastRef:d,eventHandlers:L}}function N(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,a=void 0===r?"close":r;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function k(e){var t=e.delay,n=e.isRunning,r=e.closeToast,a=e.type,i=void 0===a?"default":a,u=e.hide,l=e.className,d=e.style,p=e.controlledProgress,m=e.progress,v=e.rtl,h=e.isIn,y=e.theme,E=u||p&&0===m,T=c(c({},d),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:E?0:1});p&&(T.transform="scaleX(".concat(m,")"));var b=f("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":v}),_=g(l)?l({rtl:v,type:i,defaultClassName:b}):f(b,l);return o.createElement("div",s({role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:_,style:T},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){h&&r()}))}var R=function(e){var t=L(e),n=t.isRunning,r=t.preventExitTransition,a=t.toastRef,s=t.eventHandlers,i=e.closeButton,u=e.children,l=e.autoClose,d=e.onClick,p=e.type,m=e.hideProgressBar,v=e.closeToast,h=e.transition,y=e.position,E=e.className,T=e.style,b=e.bodyClassName,_=e.bodyStyle,O=e.progressClassName,C=e.progressStyle,w=e.updateId,I=e.role,x=e.progress,R=e.rtl,P=e.toastId,j=e.deleteToast,M=e.isIn,D=e.isLoading,B=e.iconOut,A=e.closeOnClick,z=e.theme,S=f("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":A}),Z=g(E)?E({rtl:R,position:y,type:p,defaultClassName:S}):f(S,E),F=!!x||!l,H={closeToast:v,type:p,theme:z},q=null;return!1===i||(q=g(i)?i(H):(0,o.isValidElement)(i)?(0,o.cloneElement)(i,H):N(H)),o.createElement(h,{isIn:M,done:j,position:y,preventExitTransition:r,nodeRef:a},o.createElement("div",c(c({id:P,onClick:d,className:Z},s),{},{style:T,ref:a}),o.createElement("div",c(c({},M&&{role:I}),{},{className:g(b)?b({type:p}):f("Toastify__toast-body",b),style:_}),null!=B&&o.createElement("div",{className:f("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},B),o.createElement("div",null,u)),q,o.createElement(k,c(c({},w&&!F?{key:"pb-".concat(w)}:{}),{},{rtl:R,theme:z,delay:l,isRunning:n,isIn:M,closeToast:v,hide:m,type:p,style:C,className:O,controlledProgress:F,progress:x||0}))))},P=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},j=T(P("bounce",!0)),M=(T(P("slide",!0)),T(P("zoom")),T(P("flip")),(0,o.forwardRef)((function(e,t){var n=w(e),r=n.getToastToRender,a=n.containerRef,s=n.isToastActive,i=e.className,u=e.style,l=e.rtl,d=e.containerId;function p(e){var t=f("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return g(i)?i({position:e,rtl:l,defaultClassName:t}):f(t,y(i))}return(0,o.useEffect)((function(){t&&(t.current=a.current)}),[]),o.createElement("div",{ref:a,className:"Toastify",id:d},r((function(e,t){var n=t.length?c({},u):c(c({},u),{},{pointerEvents:"none"});return o.createElement("div",{className:p(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,a=e.props;return o.createElement(R,c(c({},a),{},{isIn:s(a.toastId),style:c(c({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),r)})))})))})));M.displayName="ToastContainer",M.defaultProps={position:"top-right",transition:j,autoClose:5e3,closeButton:N,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var D,B=new Map,A=[],z=1;function S(){return""+z++}function Z(e){return e&&(h(e.toastId)||v(e.toastId))?e.toastId:S()}function F(e,t){return B.size>0?_.emit(0,e,t):A.push({content:e,options:t}),t.toastId}function H(e,t){return c(c({},t),{},{type:t&&t.type||e,toastId:Z(t)})}function q(e){return function(t,n){return F(t,H(e,n))}}function U(e,t){return F(e,H("default",t))}U.loading=function(e,t){return F(e,H("default",c({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},U.promise=function(e,t,n){var r,o=t.pending,a=t.error,s=t.success;o&&(r=h(o)?U.loading(o,n):U.loading(o.render,c(c({},n),o)));var i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(e,t,o){if(null!=t){var a=c(c(c({type:e},i),n),{},{data:o}),s=h(t)?{render:t}:t;return r?U.update(r,c(c({},a),s)):U(s.render,c(c({},a),s)),o}U.dismiss(r)},l=g(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",a,e)})),l},U.success=q("success"),U.info=q("info"),U.error=q("error"),U.warning=q("warning"),U.warn=U.warning,U.dark=function(e,t){return F(e,H("default",c({theme:"dark"},t)))},U.dismiss=function(e){B.size>0?_.emit(1,e):A=A.filter((function(t){return null!=e&&t.options.toastId!==e}))},U.clearWaitingQueue=function(e){return void 0===e&&(e={}),_.emit(5,e)},U.isActive=function(e){var t=!1;return B.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},U.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=B.get(n||D);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=c(c(c({},r),t),{},{toastId:t.toastId||e,updateId:S()});a.toastId!==e&&(a.staleId=e);var s=a.render||o;delete a.render,F(s,a)}}),0)},U.done=function(e){U.update(e,{progress:1})},U.onChange=function(e){return _.on(4,e),function(){_.off(4,e)}},U.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},U.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},_.on(2,(function(e){D=e.containerId||e,B.set(D,e),A.forEach((function(e){_.emit(0,e.content,e.options)})),A=[]})).on(3,(function(e){B.delete(e.containerId||e),0===B.size&&_.off(0).off(1).off(5)}));var G=n(87),Q="MoviesDetails_Wrapper__zsVnU",V="MoviesDetails_Details__0Gokl",W="MoviesDetails_Button__J5isz",X="MoviesDetails_Poster__w8+p4",Y="MoviesDetails_GoBack__nTgbe",K=n(713),J=n(184),$=function(){var e=(0,a.UO)().movieId,t=(0,o.useState)(null),n=(0,r.Z)(t,2),s=n[0],i=n[1],c=(0,a.s0)(null);return(0,o.useEffect)((function(){(0,K.lU)(e).then(i).catch((function(){U.error("Something went wrong!")}))}),[e]),s&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("button",{onClick:function(){return c("/")},className:Y,children:"Go back"}),(0,J.jsxs)("div",{className:Q,children:[(0,J.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(s.poster_path),alt:s.title,style:{width:"300px"},className:X}),(0,J.jsxs)("div",{className:V,children:[(0,J.jsx)("h1",{children:s.title}),(0,J.jsxs)("p",{children:["User score: ",s.vote_average]}),(0,J.jsx)("h2",{children:"Overview"}),(0,J.jsx)("p",{children:s.overview}),(0,J.jsx)("h2",{children:"Genres"}),(0,J.jsx)("ul",{children:s.genres.map((function(e,t){var n=e.name;return(0,J.jsx)("li",{children:n},t)}))}),(0,J.jsx)(G.OL,{className:W,to:"cast",children:"Cast"}),(0,J.jsx)(G.OL,{className:W,to:"reviews",children:"Reviews"}),(0,J.jsx)(a.j3,{})]})]})]})}}}]);
//# sourceMappingURL=415.5ac743c1.chunk.js.map