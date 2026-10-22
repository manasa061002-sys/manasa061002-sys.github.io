(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var wu={exports:{}},ka={},Tu={exports:{}},pt={};var zp;function _v(){if(zp)return pt;zp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(P){return P===null||typeof P!="object"?null:(P=_&&P[_]||P["@@iterator"],typeof P=="function"?P:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function y(P,ie,ye){this.props=P,this.context=ie,this.refs=R,this.updater=ye||M}y.prototype.isReactComponent={},y.prototype.setState=function(P,ie){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ie,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function x(){}x.prototype=y.prototype;function F(P,ie,ye){this.props=P,this.context=ie,this.refs=R,this.updater=ye||M}var j=F.prototype=new x;j.constructor=F,b(j,y.prototype),j.isPureReactComponent=!0;var C=Array.isArray,D=Object.prototype.hasOwnProperty,L={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(P,ie,ye){var Ve,De={},Fe=null,ae=null;if(ie!=null)for(Ve in ie.ref!==void 0&&(ae=ie.ref),ie.key!==void 0&&(Fe=""+ie.key),ie)D.call(ie,Ve)&&!k.hasOwnProperty(Ve)&&(De[Ve]=ie[Ve]);var de=arguments.length-2;if(de===1)De.children=ye;else if(1<de){for(var Se=Array(de),Qe=0;Qe<de;Qe++)Se[Qe]=arguments[Qe+2];De.children=Se}if(P&&P.defaultProps)for(Ve in de=P.defaultProps,de)De[Ve]===void 0&&(De[Ve]=de[Ve]);return{$$typeof:s,type:P,key:Fe,ref:ae,props:De,_owner:L.current}}function I(P,ie){return{$$typeof:s,type:P.type,key:ie,ref:P.ref,props:P.props,_owner:P._owner}}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function q(P){var ie={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ye){return ie[ye]})}var J=/\/+/g;function re(P,ie){return typeof P=="object"&&P!==null&&P.key!=null?q(""+P.key):ie.toString(36)}function Y(P,ie,ye,Ve,De){var Fe=typeof P;(Fe==="undefined"||Fe==="boolean")&&(P=null);var ae=!1;if(P===null)ae=!0;else switch(Fe){case"string":case"number":ae=!0;break;case"object":switch(P.$$typeof){case s:case e:ae=!0}}if(ae)return ae=P,De=De(ae),P=Ve===""?"."+re(ae,0):Ve,C(De)?(ye="",P!=null&&(ye=P.replace(J,"$&/")+"/"),Y(De,ie,ye,"",function(Qe){return Qe})):De!=null&&(V(De)&&(De=I(De,ye+(!De.key||ae&&ae.key===De.key?"":(""+De.key).replace(J,"$&/")+"/")+P)),ie.push(De)),1;if(ae=0,Ve=Ve===""?".":Ve+":",C(P))for(var de=0;de<P.length;de++){Fe=P[de];var Se=Ve+re(Fe,de);ae+=Y(Fe,ie,ye,Se,De)}else if(Se=g(P),typeof Se=="function")for(P=Se.call(P),de=0;!(Fe=P.next()).done;)Fe=Fe.value,Se=Ve+re(Fe,de++),ae+=Y(Fe,ie,ye,Se,De);else if(Fe==="object")throw ie=String(P),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ae}function Q(P,ie,ye){if(P==null)return P;var Ve=[],De=0;return Y(P,Ve,"","",function(Fe){return ie.call(ye,Fe,De++)}),Ve}function he(P){if(P._status===-1){var ie=P._result;ie=ie(),ie.then(function(ye){(P._status===0||P._status===-1)&&(P._status=1,P._result=ye)},function(ye){(P._status===0||P._status===-1)&&(P._status=2,P._result=ye)}),P._status===-1&&(P._status=0,P._result=ie)}if(P._status===1)return P._result.default;throw P._result}var te={current:null},K={transition:null},O={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:K,ReactCurrentOwner:L};function G(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:Q,forEach:function(P,ie,ye){Q(P,function(){ie.apply(this,arguments)},ye)},count:function(P){var ie=0;return Q(P,function(){ie++}),ie},toArray:function(P){return Q(P,function(ie){return ie})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},pt.Component=y,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=F,pt.StrictMode=r,pt.Suspense=p,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,pt.act=G,pt.cloneElement=function(P,ie,ye){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var Ve=b({},P.props),De=P.key,Fe=P.ref,ae=P._owner;if(ie!=null){if(ie.ref!==void 0&&(Fe=ie.ref,ae=L.current),ie.key!==void 0&&(De=""+ie.key),P.type&&P.type.defaultProps)var de=P.type.defaultProps;for(Se in ie)D.call(ie,Se)&&!k.hasOwnProperty(Se)&&(Ve[Se]=ie[Se]===void 0&&de!==void 0?de[Se]:ie[Se])}var Se=arguments.length-2;if(Se===1)Ve.children=ye;else if(1<Se){de=Array(Se);for(var Qe=0;Qe<Se;Qe++)de[Qe]=arguments[Qe+2];Ve.children=de}return{$$typeof:s,type:P.type,key:De,ref:Fe,props:Ve,_owner:ae}},pt.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:l,_context:P},P.Consumer=P},pt.createElement=w,pt.createFactory=function(P){var ie=w.bind(null,P);return ie.type=P,ie},pt.createRef=function(){return{current:null}},pt.forwardRef=function(P){return{$$typeof:f,render:P}},pt.isValidElement=V,pt.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:he}},pt.memo=function(P,ie){return{$$typeof:m,type:P,compare:ie===void 0?null:ie}},pt.startTransition=function(P){var ie=K.transition;K.transition={};try{P()}finally{K.transition=ie}},pt.unstable_act=G,pt.useCallback=function(P,ie){return te.current.useCallback(P,ie)},pt.useContext=function(P){return te.current.useContext(P)},pt.useDebugValue=function(){},pt.useDeferredValue=function(P){return te.current.useDeferredValue(P)},pt.useEffect=function(P,ie){return te.current.useEffect(P,ie)},pt.useId=function(){return te.current.useId()},pt.useImperativeHandle=function(P,ie,ye){return te.current.useImperativeHandle(P,ie,ye)},pt.useInsertionEffect=function(P,ie){return te.current.useInsertionEffect(P,ie)},pt.useLayoutEffect=function(P,ie){return te.current.useLayoutEffect(P,ie)},pt.useMemo=function(P,ie){return te.current.useMemo(P,ie)},pt.useReducer=function(P,ie,ye){return te.current.useReducer(P,ie,ye)},pt.useRef=function(P){return te.current.useRef(P)},pt.useState=function(P){return te.current.useState(P)},pt.useSyncExternalStore=function(P,ie,ye){return te.current.useSyncExternalStore(P,ie,ye)},pt.useTransition=function(){return te.current.useTransition()},pt.version="18.3.1",pt}var Hp;function tf(){return Hp||(Hp=1,Tu.exports=_v()),Tu.exports}var Vp;function xv(){if(Vp)return ka;Vp=1;var s=tf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,m){var v,_={},g=null,M=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!l.hasOwnProperty(v)&&(_[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:f,key:g,ref:M,props:_,_owner:o.current}}return ka.Fragment=n,ka.jsx=u,ka.jsxs=u,ka}var Gp;function yv(){return Gp||(Gp=1,wu.exports=xv()),wu.exports}var A=yv(),Nt=tf(),ll={},bu={exports:{}},Bn={},Au={exports:{}},Cu={};var Wp;function Sv(){return Wp||(Wp=1,(function(s){function e(K,O){var G=K.length;K.push(O);e:for(;0<G;){var P=G-1>>>1,ie=K[P];if(0<o(ie,O))K[P]=O,K[G]=ie,G=P;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var O=K[0],G=K.pop();if(G!==O){K[0]=G;e:for(var P=0,ie=K.length,ye=ie>>>1;P<ye;){var Ve=2*(P+1)-1,De=K[Ve],Fe=Ve+1,ae=K[Fe];if(0>o(De,G))Fe<ie&&0>o(ae,De)?(K[P]=ae,K[Fe]=G,P=Fe):(K[P]=De,K[Ve]=G,P=Ve);else if(Fe<ie&&0>o(ae,G))K[P]=ae,K[Fe]=G,P=Fe;else break e}}return O}function o(K,O){var G=K.sortIndex-O.sortIndex;return G!==0?G:K.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],m=[],v=1,_=null,g=3,M=!1,b=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(K){for(var O=n(m);O!==null;){if(O.callback===null)r(m);else if(O.startTime<=K)r(m),O.sortIndex=O.expirationTime,e(p,O);else break;O=n(m)}}function C(K){if(R=!1,j(K),!b)if(n(p)!==null)b=!0,he(D);else{var O=n(m);O!==null&&te(C,O.startTime-K)}}function D(K,O){b=!1,R&&(R=!1,x(w),w=-1),M=!0;var G=g;try{for(j(O),_=n(p);_!==null&&(!(_.expirationTime>O)||K&&!q());){var P=_.callback;if(typeof P=="function"){_.callback=null,g=_.priorityLevel;var ie=P(_.expirationTime<=O);O=s.unstable_now(),typeof ie=="function"?_.callback=ie:_===n(p)&&r(p),j(O)}else r(p);_=n(p)}if(_!==null)var ye=!0;else{var Ve=n(m);Ve!==null&&te(C,Ve.startTime-O),ye=!1}return ye}finally{_=null,g=G,M=!1}}var L=!1,k=null,w=-1,I=5,V=-1;function q(){return!(s.unstable_now()-V<I)}function J(){if(k!==null){var K=s.unstable_now();V=K;var O=!0;try{O=k(!0,K)}finally{O?re():(L=!1,k=null)}}else L=!1}var re;if(typeof F=="function")re=function(){F(J)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,Q=Y.port2;Y.port1.onmessage=J,re=function(){Q.postMessage(null)}}else re=function(){y(J,0)};function he(K){k=K,L||(L=!0,re())}function te(K,O){w=y(function(){K(s.unstable_now())},O)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(K){K.callback=null},s.unstable_continueExecution=function(){b||M||(b=!0,he(D))},s.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<K?Math.floor(1e3/K):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(K){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var G=g;g=O;try{return K()}finally{g=G}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(K,O){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var G=g;g=K;try{return O()}finally{g=G}},s.unstable_scheduleCallback=function(K,O,G){var P=s.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?P+G:P):G=P,K){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=G+ie,K={id:v++,callback:O,priorityLevel:K,startTime:G,expirationTime:ie,sortIndex:-1},G>P?(K.sortIndex=G,e(m,K),n(p)===null&&K===n(m)&&(R?(x(w),w=-1):R=!0,te(C,G-P))):(K.sortIndex=ie,e(p,K),b||M||(b=!0,he(D))),K},s.unstable_shouldYield=q,s.unstable_wrapCallback=function(K){var O=g;return function(){var G=g;g=O;try{return K.apply(this,arguments)}finally{g=G}}}})(Cu)),Cu}var Xp;function Mv(){return Xp||(Xp=1,Au.exports=Sv()),Au.exports}var jp;function Ev(){if(jp)return Bn;jp=1;var s=tf(),e=Mv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(t){return p.call(_,t)?!0:p.call(v,t)?!1:m.test(t)?_[t]=!0:(v[t]=!0,!1)}function M(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b(t,i,a,c){if(i===null||typeof i>"u"||M(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,a,c,d,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function F(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,F);y[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,F);y[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,F);y[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function j(t,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),L=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),q=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),K=Symbol.iterator;function O(t){return t===null||typeof t!="object"?null:(t=K&&t[K]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,P;function ie(t){if(P===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);P=i&&i[1]||""}return`
`+P+t}var ye=!1;function Ve(t,i){if(!t||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(t,[],i)}else{try{i.call()}catch(ue){c=ue}t.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}t()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var d=ue.stack.split(`
`),h=c.stack.split(`
`),E=d.length-1,U=h.length-1;1<=E&&0<=U&&d[E]!==h[U];)U--;for(;1<=E&&0<=U;E--,U--)if(d[E]!==h[U]){if(E!==1||U!==1)do if(E--,U--,0>U||d[E]!==h[U]){var B=`
`+d[E].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=E&&0<=U);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ie(t):""}function De(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Ve(t.type,!1),t;case 11:return t=Ve(t.type.render,!1),t;case 1:return t=Ve(t.type,!0),t;default:return""}}function Fe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case L:return"Portal";case I:return"Profiler";case w:return"StrictMode";case re:return"Suspense";case Y:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q:return(t.displayName||"Context")+".Consumer";case V:return(t._context.displayName||"Context")+".Provider";case J:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return i=t.displayName||null,i!==null?i:Fe(t.type)||"Memo";case he:i=t._payload,t=t._init;try{return Fe(t(i))}catch{}}return null}function ae(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fe(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function de(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Se(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t){var i=Se(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Oe(t){t._valueTracker||(t._valueTracker=Qe(t))}function ct(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=Se(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ut(t,i){var a=i.checked;return G({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function mt(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=de(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Lt(t,i){i=i.checked,i!=null&&j(t,"checked",i,!1)}function dt(t,i){Lt(t,i);var a=de(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?$t(t,i.type,a):i.hasOwnProperty("defaultValue")&&$t(t,i.type,de(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ut(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function $t(t,i,a){(i!=="number"||zt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var tn=Array.isArray;function Pt(t,i,a,c){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&c&&(t[a].defaultSelected=!0)}else{for(a=""+de(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Ht(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return G({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function W(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(tn(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:de(a)}}function sn(t,i){var a=de(i.value),c=de(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function wt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function N(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function S(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?N(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $,oe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for($=$||document.createElement("div"),$.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function fe(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(t){be.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ee[i]=Ee[t]})});function pe(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(t)&&Ee[t]?(""+i).trim():i+"px"}function ge(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=pe(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,d):t[a]=d}}var Re=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(t,i){if(i){if(Re[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Pe(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Te=null;function $e(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var et=null,it=null,z=null;function Ae(t){if(t=Ma(t)){if(typeof et!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Eo(i),et(t.stateNode,t.type,i))}}function me(t){it?z?z.push(t):z=[t]:it=t}function Ce(){if(it){var t=it,i=z;if(z=it=null,Ae(t),i)for(t=0;t<i.length;t++)Ae(i[t])}}function ke(t,i){return t(i)}function ve(){}var Ze=!1;function je(t,i,a){if(Ze)return t(i,a);Ze=!0;try{return ke(t,i,a)}finally{Ze=!1,(it!==null||z!==null)&&(ve(),Ce())}}function Tt(t,i){var a=t.stateNode;if(a===null)return null;var c=Eo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var yt=!1;if(f)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){yt=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{yt=!1}function Kn(t,i,a,c,d,h,E,U,B){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(xe){this.onError(xe)}}var Lr=!1,as=null,Dr=!1,Ir=null,Yl={onError:function(t){Lr=!0,as=t}};function ro(t,i,a,c,d,h,E,U,B){Lr=!1,as=null,Kn.apply(Yl,arguments)}function so(t,i,a,c,d,h,E,U,B){if(ro.apply(this,arguments),Lr){if(Lr){var ue=as;Lr=!1,as=null}else throw Error(n(198));Dr||(Dr=!0,Ir=ue)}}function Pn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function os(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ta(t){if(Pn(t)!==t)throw Error(n(188))}function ao(t){var i=t.alternate;if(!i){if(i=Pn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var d=a.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===a)return ta(d),t;if(h===c)return ta(d),i;h=h.sibling}throw Error(n(188))}if(a.return!==c.return)a=d,c=h;else{for(var E=!1,U=d.child;U;){if(U===a){E=!0,a=d,c=h;break}if(U===c){E=!0,c=d,a=h;break}U=U.sibling}if(!E){for(U=h.child;U;){if(U===a){E=!0,a=h,c=d;break}if(U===c){E=!0,c=h,a=d;break}U=U.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Ur(t){return t=ao(t),t!==null?na(t):null}function na(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=na(t);if(i!==null)return i;t=t.sibling}return null}var Fr=e.unstable_scheduleCallback,ia=e.unstable_cancelCallback,oo=e.unstable_shouldYield,ql=e.unstable_requestPaint,Xt=e.unstable_now,$l=e.unstable_getCurrentPriorityLevel,ra=e.unstable_ImmediatePriority,sa=e.unstable_UserBlockingPriority,T=e.unstable_NormalPriority,H=e.unstable_LowPriority,ce=e.unstable_IdlePriority,ee=null,Z=null;function Ie(t){if(Z&&typeof Z.onCommitFiberRoot=="function")try{Z.onCommitFiberRoot(ee,t,void 0,(t.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:Ke,Le=Math.log,We=Math.LN2;function Ke(t){return t>>>=0,t===0?32:31-(Le(t)/We|0)|0}var at=64,lt=4194304;function He(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gt(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,d=t.suspendedLanes,h=t.pingedLanes,E=a&268435455;if(E!==0){var U=E&~d;U!==0?c=He(U):(h&=E,h!==0&&(c=He(h)))}else E=a&~d,E!==0?c=He(E):h!==0&&(c=He(h));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-Ne(i),d=1<<a,c|=t[a],i&=~d;return c}function Kt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Ne(h),U=1<<E,B=d[E];B===-1?((U&a)===0||(U&c)!==0)&&(d[E]=Kt(U,i)):B<=i&&(t.expiredLanes|=U),h&=~U}}function Rt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function an(){var t=at;return at<<=1,(at&4194240)===0&&(at=64),t}function Be(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Qt(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ne(i),t[i]=a}function vt(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-Ne(a),h=1<<d;i[d]=0,c[d]=-1,t[d]=-1,a&=~h}}function yn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-Ne(a),d=1<<c;d&i|t[c]&i&&(t[c]|=i),a&=~d}}var ft=0;function oi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Fi,bt,Vt,li,Dt,Zn=!1,ci=[],ui=null,rr=null,sr=null,aa=new Map,oa=new Map,ar=[],zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ef(t,i){switch(t){case"focusin":case"focusout":ui=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":aa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(i.pointerId)}}function la(t,i,a,c,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Ma(i),i!==null&&bt(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Hg(t,i,a,c,d){switch(i){case"focusin":return ui=la(ui,t,i,a,c,d),!0;case"dragenter":return rr=la(rr,t,i,a,c,d),!0;case"mouseover":return sr=la(sr,t,i,a,c,d),!0;case"pointerover":var h=d.pointerId;return aa.set(h,la(aa.get(h)||null,t,i,a,c,d)),!0;case"gotpointercapture":return h=d.pointerId,oa.set(h,la(oa.get(h)||null,t,i,a,c,d)),!0}return!1}function wf(t){var i=kr(t.target);if(i!==null){var a=Pn(i);if(a!==null){if(i=a.tag,i===13){if(i=os(a),i!==null){t.blockedOn=i,Dt(t.priority,function(){Vt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Zl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);Te=c,a.target.dispatchEvent(c),Te=null}else return i=Ma(a),i!==null&&bt(i),t.blockedOn=a,!1;i.shift()}return!0}function Tf(t,i,a){lo(t)&&a.delete(i)}function Vg(){Zn=!1,ui!==null&&lo(ui)&&(ui=null),rr!==null&&lo(rr)&&(rr=null),sr!==null&&lo(sr)&&(sr=null),aa.forEach(Tf),oa.forEach(Tf)}function ca(t,i){t.blockedOn===i&&(t.blockedOn=null,Zn||(Zn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vg)))}function ua(t){function i(d){return ca(d,t)}if(0<ci.length){ca(ci[0],t);for(var a=1;a<ci.length;a++){var c=ci[a];c.blockedOn===t&&(c.blockedOn=null)}}for(ui!==null&&ca(ui,t),rr!==null&&ca(rr,t),sr!==null&&ca(sr,t),aa.forEach(i),oa.forEach(i),a=0;a<ar.length;a++)c=ar[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)wf(a),a.blockedOn===null&&ar.shift()}var ls=C.ReactCurrentBatchConfig,co=!0;function Gg(t,i,a,c){var d=ft,h=ls.transition;ls.transition=null;try{ft=1,Kl(t,i,a,c)}finally{ft=d,ls.transition=h}}function Wg(t,i,a,c){var d=ft,h=ls.transition;ls.transition=null;try{ft=4,Kl(t,i,a,c)}finally{ft=d,ls.transition=h}}function Kl(t,i,a,c){if(co){var d=Zl(t,i,a,c);if(d===null)pc(t,i,c,uo,a),Ef(t,c);else if(Hg(d,t,i,a,c))c.stopPropagation();else if(Ef(t,c),i&4&&-1<zg.indexOf(t)){for(;d!==null;){var h=Ma(d);if(h!==null&&Fi(h),h=Zl(t,i,a,c),h===null&&pc(t,i,c,uo,a),h===d)break;d=h}d!==null&&c.stopPropagation()}else pc(t,i,c,null,a)}}var uo=null;function Zl(t,i,a,c){if(uo=null,t=$e(c),t=kr(t),t!==null)if(i=Pn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=os(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return uo=t,null}function bf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($l()){case ra:return 1;case sa:return 4;case T:case H:return 16;case ce:return 536870912;default:return 16}default:return 16}}var or=null,Jl=null,fo=null;function Af(){if(fo)return fo;var t,i=Jl,a=i.length,c,d="value"in or?or.value:or.textContent,h=d.length;for(t=0;t<a&&i[t]===d[t];t++);var E=a-t;for(c=1;c<=E&&i[a-c]===d[h-c];c++);return fo=d.slice(t,1<c?1-c:void 0)}function ho(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function po(){return!0}function Cf(){return!1}function Vn(t){function i(a,c,d,h,E){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(a=t[U],this[U]=a?a(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?po:Cf,this.isPropagationStopped=Cf,this}return G(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),i}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=Vn(cs),da=G({},cs,{view:0,detail:0}),Xg=Vn(da),ec,tc,fa,mo=G({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fa&&(fa&&t.type==="mousemove"?(ec=t.screenX-fa.screenX,tc=t.screenY-fa.screenY):tc=ec=0,fa=t),ec)},movementY:function(t){return"movementY"in t?t.movementY:tc}}),Rf=Vn(mo),jg=G({},mo,{dataTransfer:0}),Yg=Vn(jg),qg=G({},da,{relatedTarget:0}),nc=Vn(qg),$g=G({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Kg=Vn($g),Zg=G({},cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jg=Vn(Zg),Qg=G({},cs,{data:0}),Pf=Vn(Qg),e0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=n0[t])?!!i[t]:!1}function ic(){return i0}var r0=G({},da,{key:function(t){if(t.key){var i=e0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?t0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ic,charCode:function(t){return t.type==="keypress"?ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),s0=Vn(r0),a0=G({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=Vn(a0),o0=G({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ic}),l0=Vn(o0),c0=G({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),u0=Vn(c0),d0=G({},mo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f0=Vn(d0),h0=[9,13,27,32],rc=f&&"CompositionEvent"in window,ha=null;f&&"documentMode"in document&&(ha=document.documentMode);var p0=f&&"TextEvent"in window&&!ha,Lf=f&&(!rc||ha&&8<ha&&11>=ha),Df=" ",If=!1;function Uf(t,i){switch(t){case"keyup":return h0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function m0(t,i){switch(t){case"compositionend":return Ff(i);case"keypress":return i.which!==32?null:(If=!0,Df);case"textInput":return t=i.data,t===Df&&If?null:t;default:return null}}function g0(t,i){if(us)return t==="compositionend"||!rc&&Uf(t,i)?(t=Af(),fo=Jl=or=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Lf&&i.locale!=="ko"?null:i.data;default:return null}}var v0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!v0[t.type]:i==="textarea"}function Of(t,i,a,c){me(c),i=yo(i,"onChange"),0<i.length&&(a=new Ql("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var pa=null,ma=null;function _0(t){nh(t,0)}function go(t){var i=ms(t);if(ct(i))return t}function x0(t,i){if(t==="change")return i}var Bf=!1;if(f){var sc;if(f){var ac="oninput"in document;if(!ac){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),ac=typeof zf.oninput=="function"}sc=ac}else sc=!1;Bf=sc&&(!document.documentMode||9<document.documentMode)}function Hf(){pa&&(pa.detachEvent("onpropertychange",Vf),ma=pa=null)}function Vf(t){if(t.propertyName==="value"&&go(ma)){var i=[];Of(i,ma,t,$e(t)),je(_0,i)}}function y0(t,i,a){t==="focusin"?(Hf(),pa=i,ma=a,pa.attachEvent("onpropertychange",Vf)):t==="focusout"&&Hf()}function S0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return go(ma)}function M0(t,i){if(t==="click")return go(i)}function E0(t,i){if(t==="input"||t==="change")return go(i)}function w0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var di=typeof Object.is=="function"?Object.is:w0;function ga(t,i){if(di(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(i,d)||!di(t[d],i[d]))return!1}return!0}function Gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wf(t,i){var a=Gf(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gf(a)}}function Xf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Xf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function jf(){for(var t=window,i=zt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=zt(t.document)}return i}function oc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function T0(t){var i=jf(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Xf(a.ownerDocument.documentElement,a)){if(c!==null&&oc(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,h=Math.min(c.start,d);c=c.end===void 0?h:Math.min(c.end,d),!t.extend&&h>c&&(d=c,c=h,h=d),d=Wf(a,h);var E=Wf(a,c);d&&E&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>c?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var b0=f&&"documentMode"in document&&11>=document.documentMode,ds=null,lc=null,va=null,cc=!1;function Yf(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cc||ds==null||ds!==zt(c)||(c=ds,"selectionStart"in c&&oc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),va&&ga(va,c)||(va=c,c=yo(lc,"onSelect"),0<c.length&&(i=new Ql("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=ds)))}function vo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var fs={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},uc={},qf={};f&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function _o(t){if(uc[t])return uc[t];if(!fs[t])return t;var i=fs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in qf)return uc[t]=i[a];return t}var $f=_o("animationend"),Kf=_o("animationiteration"),Zf=_o("animationstart"),Jf=_o("transitionend"),Qf=new Map,eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,i){Qf.set(t,i),l(i,[t])}for(var dc=0;dc<eh.length;dc++){var fc=eh[dc],A0=fc.toLowerCase(),C0=fc[0].toUpperCase()+fc.slice(1);lr(A0,"on"+C0)}lr($f,"onAnimationEnd"),lr(Kf,"onAnimationIteration"),lr(Zf,"onAnimationStart"),lr("dblclick","onDoubleClick"),lr("focusin","onFocus"),lr("focusout","onBlur"),lr(Jf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R0=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function th(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,so(c,i,void 0,t),t.currentTarget=null}function nh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],d=c.event;c=c.listeners;e:{var h=void 0;if(i)for(var E=c.length-1;0<=E;E--){var U=c[E],B=U.instance,ue=U.currentTarget;if(U=U.listener,B!==h&&d.isPropagationStopped())break e;th(d,U,ue),h=B}else for(E=0;E<c.length;E++){if(U=c[E],B=U.instance,ue=U.currentTarget,U=U.listener,B!==h&&d.isPropagationStopped())break e;th(d,U,ue),h=B}}}if(Dr)throw t=Ir,Dr=!1,Ir=null,t}function Ot(t,i){var a=i[yc];a===void 0&&(a=i[yc]=new Set);var c=t+"__bubble";a.has(c)||(ih(i,t,2,!1),a.add(c))}function hc(t,i,a){var c=0;i&&(c|=4),ih(a,t,c,i)}var xo="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[xo]){t[xo]=!0,r.forEach(function(a){a!=="selectionchange"&&(R0.has(a)||hc(a,!1,t),hc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[xo]||(i[xo]=!0,hc("selectionchange",!1,i))}}function ih(t,i,a,c){switch(bf(i)){case 1:var d=Gg;break;case 4:d=Wg;break;default:d=Kl}a=d.bind(null,i,a,t),d=void 0,!yt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function pc(t,i,a,c,d){var h=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var U=c.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;E=E.return}for(;U!==null;){if(E=kr(U),E===null)return;if(B=E.tag,B===5||B===6){c=h=E;continue e}U=U.parentNode}}c=c.return}je(function(){var ue=h,xe=$e(a),Me=[];e:{var _e=Qf.get(t);if(_e!==void 0){var ze=Ql,Xe=t;switch(t){case"keypress":if(ho(a)===0)break e;case"keydown":case"keyup":ze=s0;break;case"focusin":Xe="focus",ze=nc;break;case"focusout":Xe="blur",ze=nc;break;case"beforeblur":case"afterblur":ze=nc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=Yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=l0;break;case $f:case Kf:case Zf:ze=Kg;break;case Jf:ze=u0;break;case"scroll":ze=Xg;break;case"wheel":ze=f0;break;case"copy":case"cut":case"paste":ze=Jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Nf}var Ye=(i&4)!==0,en=!Ye&&t==="scroll",ne=Ye?_e!==null?_e+"Capture":null:_e;Ye=[];for(var X=ue,se;X!==null;){se=X;var we=se.stateNode;if(se.tag===5&&we!==null&&(se=we,ne!==null&&(we=Tt(X,ne),we!=null&&Ye.push(ya(X,we,se)))),en)break;X=X.return}0<Ye.length&&(_e=new ze(_e,Xe,null,a,xe),Me.push({event:_e,listeners:Ye}))}}if((i&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",ze=t==="mouseout"||t==="pointerout",_e&&a!==Te&&(Xe=a.relatedTarget||a.fromElement)&&(kr(Xe)||Xe[ki]))break e;if((ze||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,ze?(Xe=a.relatedTarget||a.toElement,ze=ue,Xe=Xe?kr(Xe):null,Xe!==null&&(en=Pn(Xe),Xe!==en||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(ze=null,Xe=ue),ze!==Xe)){if(Ye=Rf,we="onMouseLeave",ne="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=Nf,we="onPointerLeave",ne="onPointerEnter",X="pointer"),en=ze==null?_e:ms(ze),se=Xe==null?_e:ms(Xe),_e=new Ye(we,X+"leave",ze,a,xe),_e.target=en,_e.relatedTarget=se,we=null,kr(xe)===ue&&(Ye=new Ye(ne,X+"enter",Xe,a,xe),Ye.target=se,Ye.relatedTarget=en,we=Ye),en=we,ze&&Xe)t:{for(Ye=ze,ne=Xe,X=0,se=Ye;se;se=hs(se))X++;for(se=0,we=ne;we;we=hs(we))se++;for(;0<X-se;)Ye=hs(Ye),X--;for(;0<se-X;)ne=hs(ne),se--;for(;X--;){if(Ye===ne||ne!==null&&Ye===ne.alternate)break t;Ye=hs(Ye),ne=hs(ne)}Ye=null}else Ye=null;ze!==null&&rh(Me,_e,ze,Ye,!1),Xe!==null&&en!==null&&rh(Me,en,Xe,Ye,!0)}}e:{if(_e=ue?ms(ue):window,ze=_e.nodeName&&_e.nodeName.toLowerCase(),ze==="select"||ze==="input"&&_e.type==="file")var Je=x0;else if(kf(_e))if(Bf)Je=E0;else{Je=S0;var tt=y0}else(ze=_e.nodeName)&&ze.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Je=M0);if(Je&&(Je=Je(t,ue))){Of(Me,Je,a,xe);break e}tt&&tt(t,_e,ue),t==="focusout"&&(tt=_e._wrapperState)&&tt.controlled&&_e.type==="number"&&$t(_e,"number",_e.value)}switch(tt=ue?ms(ue):window,t){case"focusin":(kf(tt)||tt.contentEditable==="true")&&(ds=tt,lc=ue,va=null);break;case"focusout":va=lc=ds=null;break;case"mousedown":cc=!0;break;case"contextmenu":case"mouseup":case"dragend":cc=!1,Yf(Me,a,xe);break;case"selectionchange":if(b0)break;case"keydown":case"keyup":Yf(Me,a,xe)}var nt;if(rc)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else us?Uf(t,a)&&(rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Lf&&a.locale!=="ko"&&(us||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&us&&(nt=Af()):(or=xe,Jl="value"in or?or.value:or.textContent,us=!0)),tt=yo(ue,rt),0<tt.length&&(rt=new Pf(rt,t,null,a,xe),Me.push({event:rt,listeners:tt}),nt?rt.data=nt:(nt=Ff(a),nt!==null&&(rt.data=nt)))),(nt=p0?m0(t,a):g0(t,a))&&(ue=yo(ue,"onBeforeInput"),0<ue.length&&(xe=new Pf("onBeforeInput","beforeinput",null,a,xe),Me.push({event:xe,listeners:ue}),xe.data=nt))}nh(Me,i)})}function ya(t,i,a){return{instance:t,listener:i,currentTarget:a}}function yo(t,i){for(var a=i+"Capture",c=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Tt(t,a),h!=null&&c.unshift(ya(t,h,d)),h=Tt(t,i),h!=null&&c.push(ya(t,h,d))),t=t.return}return c}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rh(t,i,a,c,d){for(var h=i._reactName,E=[];a!==null&&a!==c;){var U=a,B=U.alternate,ue=U.stateNode;if(B!==null&&B===c)break;U.tag===5&&ue!==null&&(U=ue,d?(B=Tt(a,h),B!=null&&E.unshift(ya(a,B,U))):d||(B=Tt(a,h),B!=null&&E.push(ya(a,B,U)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var P0=/\r\n?/g,N0=/\u0000|\uFFFD/g;function sh(t){return(typeof t=="string"?t:""+t).replace(P0,`
`).replace(N0,"")}function So(t,i,a){if(i=sh(i),sh(t)!==i&&a)throw Error(n(425))}function Mo(){}var mc=null,gc=null;function vc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _c=typeof setTimeout=="function"?setTimeout:void 0,L0=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,D0=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(t){return ah.resolve(null).then(t).catch(I0)}:_c;function I0(t){setTimeout(function(){throw t})}function xc(t,i){var a=i,c=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){t.removeChild(d),ua(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ua(i)}function cr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function oh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),Ei="__reactFiber$"+ps,Sa="__reactProps$"+ps,ki="__reactContainer$"+ps,yc="__reactEvents$"+ps,U0="__reactListeners$"+ps,F0="__reactHandles$"+ps;function kr(t){var i=t[Ei];if(i)return i;for(var a=t.parentNode;a;){if(i=a[ki]||a[Ei]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=oh(t);t!==null;){if(a=t[Ei])return a;t=oh(t)}return i}t=a,a=t.parentNode}return null}function Ma(t){return t=t[Ei]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Eo(t){return t[Sa]||null}var Sc=[],gs=-1;function ur(t){return{current:t}}function Bt(t){0>gs||(t.current=Sc[gs],Sc[gs]=null,gs--)}function kt(t,i){gs++,Sc[gs]=t.current,t.current=i}var dr={},Sn=ur(dr),In=ur(!1),Or=dr;function vs(t,i){var a=t.type.contextTypes;if(!a)return dr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in a)d[h]=i[h];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Un(t){return t=t.childContextTypes,t!=null}function wo(){Bt(In),Bt(Sn)}function lh(t,i,a){if(Sn.current!==dr)throw Error(n(168));kt(Sn,i),kt(In,a)}function ch(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,ae(t)||"Unknown",d));return G({},a,c)}function To(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Or=Sn.current,kt(Sn,t),kt(In,In.current),!0}function uh(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=ch(t,i,Or),c.__reactInternalMemoizedMergedChildContext=t,Bt(In),Bt(Sn),kt(Sn,t)):Bt(In),kt(In,a)}var Oi=null,bo=!1,Mc=!1;function dh(t){Oi===null?Oi=[t]:Oi.push(t)}function k0(t){bo=!0,dh(t)}function fr(){if(!Mc&&Oi!==null){Mc=!0;var t=0,i=ft;try{var a=Oi;for(ft=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Oi=null,bo=!1}catch(d){throw Oi!==null&&(Oi=Oi.slice(t+1)),Fr(ra,fr),d}finally{ft=i,Mc=!1}}return null}var _s=[],xs=0,Ao=null,Co=0,Jn=[],Qn=0,Br=null,Bi=1,zi="";function zr(t,i){_s[xs++]=Co,_s[xs++]=Ao,Ao=t,Co=i}function fh(t,i,a){Jn[Qn++]=Bi,Jn[Qn++]=zi,Jn[Qn++]=Br,Br=t;var c=Bi;t=zi;var d=32-Ne(c)-1;c&=~(1<<d),a+=1;var h=32-Ne(i)+d;if(30<h){var E=d-d%5;h=(c&(1<<E)-1).toString(32),c>>=E,d-=E,Bi=1<<32-Ne(i)+d|a<<d|c,zi=h+t}else Bi=1<<h|a<<d|c,zi=t}function Ec(t){t.return!==null&&(zr(t,1),fh(t,1,0))}function wc(t){for(;t===Ao;)Ao=_s[--xs],_s[xs]=null,Co=_s[--xs],_s[xs]=null;for(;t===Br;)Br=Jn[--Qn],Jn[Qn]=null,zi=Jn[--Qn],Jn[Qn]=null,Bi=Jn[--Qn],Jn[Qn]=null}var Gn=null,Wn=null,Gt=!1,fi=null;function hh(t,i){var a=ii(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function ph(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Gn=t,Wn=cr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Gn=t,Wn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Br!==null?{id:Bi,overflow:zi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ii(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Gn=t,Wn=null,!0):!1;default:return!1}}function Tc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bc(t){if(Gt){var i=Wn;if(i){var a=i;if(!ph(t,i)){if(Tc(t))throw Error(n(418));i=cr(a.nextSibling);var c=Gn;i&&ph(t,i)?hh(c,a):(t.flags=t.flags&-4097|2,Gt=!1,Gn=t)}}else{if(Tc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Gt=!1,Gn=t}}}function mh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gn=t}function Ro(t){if(t!==Gn)return!1;if(!Gt)return mh(t),Gt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!vc(t.type,t.memoizedProps)),i&&(i=Wn)){if(Tc(t))throw gh(),Error(n(418));for(;i;)hh(t,i),i=cr(i.nextSibling)}if(mh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Wn=cr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Wn=null}}else Wn=Gn?cr(t.stateNode.nextSibling):null;return!0}function gh(){for(var t=Wn;t;)t=cr(t.nextSibling)}function ys(){Wn=Gn=null,Gt=!1}function Ac(t){fi===null?fi=[t]:fi.push(t)}var O0=C.ReactCurrentBatchConfig;function Ea(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var d=c,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var U=d.refs;E===null?delete U[h]:U[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Po(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function vh(t){var i=t._init;return i(t._payload)}function _h(t){function i(ne,X){if(t){var se=ne.deletions;se===null?(ne.deletions=[X],ne.flags|=16):se.push(X)}}function a(ne,X){if(!t)return null;for(;X!==null;)i(ne,X),X=X.sibling;return null}function c(ne,X){for(ne=new Map;X!==null;)X.key!==null?ne.set(X.key,X):ne.set(X.index,X),X=X.sibling;return ne}function d(ne,X){return ne=yr(ne,X),ne.index=0,ne.sibling=null,ne}function h(ne,X,se){return ne.index=se,t?(se=ne.alternate,se!==null?(se=se.index,se<X?(ne.flags|=2,X):se):(ne.flags|=2,X)):(ne.flags|=1048576,X)}function E(ne){return t&&ne.alternate===null&&(ne.flags|=2),ne}function U(ne,X,se,we){return X===null||X.tag!==6?(X=_u(se,ne.mode,we),X.return=ne,X):(X=d(X,se),X.return=ne,X)}function B(ne,X,se,we){var Je=se.type;return Je===k?xe(ne,X,se.props.children,we,se.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===he&&vh(Je)===X.type)?(we=d(X,se.props),we.ref=Ea(ne,X,se),we.return=ne,we):(we=el(se.type,se.key,se.props,null,ne.mode,we),we.ref=Ea(ne,X,se),we.return=ne,we)}function ue(ne,X,se,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==se.containerInfo||X.stateNode.implementation!==se.implementation?(X=xu(se,ne.mode,we),X.return=ne,X):(X=d(X,se.children||[]),X.return=ne,X)}function xe(ne,X,se,we,Je){return X===null||X.tag!==7?(X=qr(se,ne.mode,we,Je),X.return=ne,X):(X=d(X,se),X.return=ne,X)}function Me(ne,X,se){if(typeof X=="string"&&X!==""||typeof X=="number")return X=_u(""+X,ne.mode,se),X.return=ne,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case D:return se=el(X.type,X.key,X.props,null,ne.mode,se),se.ref=Ea(ne,null,X),se.return=ne,se;case L:return X=xu(X,ne.mode,se),X.return=ne,X;case he:var we=X._init;return Me(ne,we(X._payload),se)}if(tn(X)||O(X))return X=qr(X,ne.mode,se,null),X.return=ne,X;Po(ne,X)}return null}function _e(ne,X,se,we){var Je=X!==null?X.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Je!==null?null:U(ne,X,""+se,we);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case D:return se.key===Je?B(ne,X,se,we):null;case L:return se.key===Je?ue(ne,X,se,we):null;case he:return Je=se._init,_e(ne,X,Je(se._payload),we)}if(tn(se)||O(se))return Je!==null?null:xe(ne,X,se,we,null);Po(ne,se)}return null}function ze(ne,X,se,we,Je){if(typeof we=="string"&&we!==""||typeof we=="number")return ne=ne.get(se)||null,U(X,ne,""+we,Je);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case D:return ne=ne.get(we.key===null?se:we.key)||null,B(X,ne,we,Je);case L:return ne=ne.get(we.key===null?se:we.key)||null,ue(X,ne,we,Je);case he:var tt=we._init;return ze(ne,X,se,tt(we._payload),Je)}if(tn(we)||O(we))return ne=ne.get(se)||null,xe(X,ne,we,Je,null);Po(X,we)}return null}function Xe(ne,X,se,we){for(var Je=null,tt=null,nt=X,rt=X=0,hn=null;nt!==null&&rt<se.length;rt++){nt.index>rt?(hn=nt,nt=null):hn=nt.sibling;var At=_e(ne,nt,se[rt],we);if(At===null){nt===null&&(nt=hn);break}t&&nt&&At.alternate===null&&i(ne,nt),X=h(At,X,rt),tt===null?Je=At:tt.sibling=At,tt=At,nt=hn}if(rt===se.length)return a(ne,nt),Gt&&zr(ne,rt),Je;if(nt===null){for(;rt<se.length;rt++)nt=Me(ne,se[rt],we),nt!==null&&(X=h(nt,X,rt),tt===null?Je=nt:tt.sibling=nt,tt=nt);return Gt&&zr(ne,rt),Je}for(nt=c(ne,nt);rt<se.length;rt++)hn=ze(nt,ne,rt,se[rt],we),hn!==null&&(t&&hn.alternate!==null&&nt.delete(hn.key===null?rt:hn.key),X=h(hn,X,rt),tt===null?Je=hn:tt.sibling=hn,tt=hn);return t&&nt.forEach(function(Sr){return i(ne,Sr)}),Gt&&zr(ne,rt),Je}function Ye(ne,X,se,we){var Je=O(se);if(typeof Je!="function")throw Error(n(150));if(se=Je.call(se),se==null)throw Error(n(151));for(var tt=Je=null,nt=X,rt=X=0,hn=null,At=se.next();nt!==null&&!At.done;rt++,At=se.next()){nt.index>rt?(hn=nt,nt=null):hn=nt.sibling;var Sr=_e(ne,nt,At.value,we);if(Sr===null){nt===null&&(nt=hn);break}t&&nt&&Sr.alternate===null&&i(ne,nt),X=h(Sr,X,rt),tt===null?Je=Sr:tt.sibling=Sr,tt=Sr,nt=hn}if(At.done)return a(ne,nt),Gt&&zr(ne,rt),Je;if(nt===null){for(;!At.done;rt++,At=se.next())At=Me(ne,At.value,we),At!==null&&(X=h(At,X,rt),tt===null?Je=At:tt.sibling=At,tt=At);return Gt&&zr(ne,rt),Je}for(nt=c(ne,nt);!At.done;rt++,At=se.next())At=ze(nt,ne,rt,At.value,we),At!==null&&(t&&At.alternate!==null&&nt.delete(At.key===null?rt:At.key),X=h(At,X,rt),tt===null?Je=At:tt.sibling=At,tt=At);return t&&nt.forEach(function(vv){return i(ne,vv)}),Gt&&zr(ne,rt),Je}function en(ne,X,se,we){if(typeof se=="object"&&se!==null&&se.type===k&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case D:e:{for(var Je=se.key,tt=X;tt!==null;){if(tt.key===Je){if(Je=se.type,Je===k){if(tt.tag===7){a(ne,tt.sibling),X=d(tt,se.props.children),X.return=ne,ne=X;break e}}else if(tt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===he&&vh(Je)===tt.type){a(ne,tt.sibling),X=d(tt,se.props),X.ref=Ea(ne,tt,se),X.return=ne,ne=X;break e}a(ne,tt);break}else i(ne,tt);tt=tt.sibling}se.type===k?(X=qr(se.props.children,ne.mode,we,se.key),X.return=ne,ne=X):(we=el(se.type,se.key,se.props,null,ne.mode,we),we.ref=Ea(ne,X,se),we.return=ne,ne=we)}return E(ne);case L:e:{for(tt=se.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===se.containerInfo&&X.stateNode.implementation===se.implementation){a(ne,X.sibling),X=d(X,se.children||[]),X.return=ne,ne=X;break e}else{a(ne,X);break}else i(ne,X);X=X.sibling}X=xu(se,ne.mode,we),X.return=ne,ne=X}return E(ne);case he:return tt=se._init,en(ne,X,tt(se._payload),we)}if(tn(se))return Xe(ne,X,se,we);if(O(se))return Ye(ne,X,se,we);Po(ne,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,X!==null&&X.tag===6?(a(ne,X.sibling),X=d(X,se),X.return=ne,ne=X):(a(ne,X),X=_u(se,ne.mode,we),X.return=ne,ne=X),E(ne)):a(ne,X)}return en}var Ss=_h(!0),xh=_h(!1),No=ur(null),Lo=null,Ms=null,Cc=null;function Rc(){Cc=Ms=Lo=null}function Pc(t){var i=No.current;Bt(No),t._currentValue=i}function Nc(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function Es(t,i){Lo=t,Cc=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Fn=!0),t.firstContext=null)}function ei(t){var i=t._currentValue;if(Cc!==t)if(t={context:t,memoizedValue:i,next:null},Ms===null){if(Lo===null)throw Error(n(308));Ms=t,Lo.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return i}var Hr=null;function Lc(t){Hr===null?Hr=[t]:Hr.push(t)}function yh(t,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Lc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Hi(t,c)}function Hi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var hr=!1;function Dc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function pr(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Mt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Hi(t,a)}return d=c.interleaved,d===null?(i.next=i,Lc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Hi(t,a)}function Do(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,yn(t,a)}}function Mh(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?d=h=E:h=h.next=E,a=a.next}while(a!==null);h===null?d=h=i:h=h.next=i}else d=h=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Io(t,i,a,c){var d=t.updateQueue;hr=!1;var h=d.firstBaseUpdate,E=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var B=U,ue=B.next;B.next=null,E===null?h=ue:E.next=ue,E=B;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==E&&(U===null?xe.firstBaseUpdate=ue:U.next=ue,xe.lastBaseUpdate=B))}if(h!==null){var Me=d.baseState;E=0,xe=ue=B=null,U=h;do{var _e=U.lane,ze=U.eventTime;if((c&_e)===_e){xe!==null&&(xe=xe.next={eventTime:ze,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Xe=t,Ye=U;switch(_e=i,ze=a,Ye.tag){case 1:if(Xe=Ye.payload,typeof Xe=="function"){Me=Xe.call(ze,Me,_e);break e}Me=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ye.payload,_e=typeof Xe=="function"?Xe.call(ze,Me,_e):Xe,_e==null)break e;Me=G({},Me,_e);break e;case 2:hr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,_e=d.effects,_e===null?d.effects=[U]:_e.push(U))}else ze={eventTime:ze,lane:_e,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(ue=xe=ze,B=Me):xe=xe.next=ze,E|=_e;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;_e=U,U=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(xe===null&&(B=Me),d.baseState=B,d.firstBaseUpdate=ue,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);Wr|=E,t.lanes=E,t.memoizedState=Me}}function Eh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var wa={},wi=ur(wa),Ta=ur(wa),ba=ur(wa);function Vr(t){if(t===wa)throw Error(n(174));return t}function Ic(t,i){switch(kt(ba,i),kt(Ta,t),kt(wi,wa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:S(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=S(i,t)}Bt(wi),kt(wi,i)}function ws(){Bt(wi),Bt(Ta),Bt(ba)}function wh(t){Vr(ba.current);var i=Vr(wi.current),a=S(i,t.type);i!==a&&(kt(Ta,t),kt(wi,a))}function Uc(t){Ta.current===t&&(Bt(wi),Bt(Ta))}var jt=ur(0);function Uo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Fc=[];function kc(){for(var t=0;t<Fc.length;t++)Fc[t]._workInProgressVersionPrimary=null;Fc.length=0}var Fo=C.ReactCurrentDispatcher,Oc=C.ReactCurrentBatchConfig,Gr=0,Yt=null,on=null,dn=null,ko=!1,Aa=!1,Ca=0,B0=0;function Mn(){throw Error(n(321))}function Bc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!di(t[a],i[a]))return!1;return!0}function zc(t,i,a,c,d,h){if(Gr=h,Yt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Fo.current=t===null||t.memoizedState===null?G0:W0,t=a(c,d),Aa){h=0;do{if(Aa=!1,Ca=0,25<=h)throw Error(n(301));h+=1,dn=on=null,i.updateQueue=null,Fo.current=X0,t=a(c,d)}while(Aa)}if(Fo.current=zo,i=on!==null&&on.next!==null,Gr=0,dn=on=Yt=null,ko=!1,i)throw Error(n(300));return t}function Hc(){var t=Ca!==0;return Ca=0,t}function Ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Yt.memoizedState=dn=t:dn=dn.next=t,dn}function ti(){if(on===null){var t=Yt.alternate;t=t!==null?t.memoizedState:null}else t=on.next;var i=dn===null?Yt.memoizedState:dn.next;if(i!==null)dn=i,on=t;else{if(t===null)throw Error(n(310));on=t,t={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},dn===null?Yt.memoizedState=dn=t:dn=dn.next=t}return dn}function Ra(t,i){return typeof i=="function"?i(t):i}function Vc(t){var i=ti(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=on,d=c.baseQueue,h=a.pending;if(h!==null){if(d!==null){var E=d.next;d.next=h.next,h.next=E}c.baseQueue=d=h,a.pending=null}if(d!==null){h=d.next,c=c.baseState;var U=E=null,B=null,ue=h;do{var xe=ue.lane;if((Gr&xe)===xe)B!==null&&(B=B.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:t(c,ue.action);else{var Me={lane:xe,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};B===null?(U=B=Me,E=c):B=B.next=Me,Yt.lanes|=xe,Wr|=xe}ue=ue.next}while(ue!==null&&ue!==h);B===null?E=c:B.next=U,di(c,i.memoizedState)||(Fn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=B,a.lastRenderedState=c}if(t=a.interleaved,t!==null){d=t;do h=d.lane,Yt.lanes|=h,Wr|=h,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Gc(t){var i=ti(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,d=a.pending,h=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do h=t(h,E.action),E=E.next;while(E!==d);di(h,i.memoizedState)||(Fn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,c]}function Th(){}function bh(t,i){var a=Yt,c=ti(),d=i(),h=!di(c.memoizedState,d);if(h&&(c.memoizedState=d,Fn=!0),c=c.queue,Wc(Rh.bind(null,a,c,t),[t]),c.getSnapshot!==i||h||dn!==null&&dn.memoizedState.tag&1){if(a.flags|=2048,Pa(9,Ch.bind(null,a,c,d,i),void 0,null),fn===null)throw Error(n(349));(Gr&30)!==0||Ah(a,i,d)}return d}function Ah(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Yt.updateQueue,i===null?(i={lastEffect:null,stores:null},Yt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Ch(t,i,a,c){i.value=a,i.getSnapshot=c,Ph(i)&&Nh(t)}function Rh(t,i,a){return a(function(){Ph(i)&&Nh(t)})}function Ph(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!di(t,a)}catch{return!0}}function Nh(t){var i=Hi(t,1);i!==null&&gi(i,t,1,-1)}function Lh(t){var i=Ti();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},i.queue=t,t=t.dispatch=V0.bind(null,Yt,t),[i.memoizedState,t]}function Pa(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=Yt.updateQueue,i===null?(i={lastEffect:null,stores:null},Yt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Dh(){return ti().memoizedState}function Oo(t,i,a,c){var d=Ti();Yt.flags|=t,d.memoizedState=Pa(1|i,a,void 0,c===void 0?null:c)}function Bo(t,i,a,c){var d=ti();c=c===void 0?null:c;var h=void 0;if(on!==null){var E=on.memoizedState;if(h=E.destroy,c!==null&&Bc(c,E.deps)){d.memoizedState=Pa(i,a,h,c);return}}Yt.flags|=t,d.memoizedState=Pa(1|i,a,h,c)}function Ih(t,i){return Oo(8390656,8,t,i)}function Wc(t,i){return Bo(2048,8,t,i)}function Uh(t,i){return Bo(4,2,t,i)}function Fh(t,i){return Bo(4,4,t,i)}function kh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Oh(t,i,a){return a=a!=null?a.concat([t]):null,Bo(4,4,kh.bind(null,i,t),a)}function Xc(){}function Bh(t,i){var a=ti();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Bc(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function zh(t,i){var a=ti();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Bc(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function Hh(t,i,a){return(Gr&21)===0?(t.baseState&&(t.baseState=!1,Fn=!0),t.memoizedState=a):(di(a,i)||(a=an(),Yt.lanes|=a,Wr|=a,t.baseState=!0),i)}function z0(t,i){var a=ft;ft=a!==0&&4>a?a:4,t(!0);var c=Oc.transition;Oc.transition={};try{t(!1),i()}finally{ft=a,Oc.transition=c}}function Vh(){return ti().memoizedState}function H0(t,i,a){var c=_r(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Gh(t))Wh(i,a);else if(a=yh(t,i,a,c),a!==null){var d=Ln();gi(a,t,c,d),Xh(a,i,c)}}function V0(t,i,a){var c=_r(t),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gh(t))Wh(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,U=h(E,a);if(d.hasEagerState=!0,d.eagerState=U,di(U,E)){var B=i.interleaved;B===null?(d.next=d,Lc(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}a=yh(t,i,d,c),a!==null&&(d=Ln(),gi(a,t,c,d),Xh(a,i,c))}}function Gh(t){var i=t.alternate;return t===Yt||i!==null&&i===Yt}function Wh(t,i){Aa=ko=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Xh(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,yn(t,a)}}var zo={readContext:ei,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},G0={readContext:ei,useCallback:function(t,i){return Ti().memoizedState=[t,i===void 0?null:i],t},useContext:ei,useEffect:Ih,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Oo(4194308,4,kh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Oo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Oo(4,2,t,i)},useMemo:function(t,i){var a=Ti();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=Ti();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=H0.bind(null,Yt,t),[c.memoizedState,t]},useRef:function(t){var i=Ti();return t={current:t},i.memoizedState=t},useState:Lh,useDebugValue:Xc,useDeferredValue:function(t){return Ti().memoizedState=t},useTransition:function(){var t=Lh(!1),i=t[0];return t=z0.bind(null,t[1]),Ti().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=Yt,d=Ti();if(Gt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),fn===null)throw Error(n(349));(Gr&30)!==0||Ah(c,i,a)}d.memoizedState=a;var h={value:a,getSnapshot:i};return d.queue=h,Ih(Rh.bind(null,c,h,t),[t]),c.flags|=2048,Pa(9,Ch.bind(null,c,h,a,i),void 0,null),a},useId:function(){var t=Ti(),i=fn.identifierPrefix;if(Gt){var a=zi,c=Bi;a=(c&~(1<<32-Ne(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ca++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=B0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},W0={readContext:ei,useCallback:Bh,useContext:ei,useEffect:Wc,useImperativeHandle:Oh,useInsertionEffect:Uh,useLayoutEffect:Fh,useMemo:zh,useReducer:Vc,useRef:Dh,useState:function(){return Vc(Ra)},useDebugValue:Xc,useDeferredValue:function(t){var i=ti();return Hh(i,on.memoizedState,t)},useTransition:function(){var t=Vc(Ra)[0],i=ti().memoizedState;return[t,i]},useMutableSource:Th,useSyncExternalStore:bh,useId:Vh,unstable_isNewReconciler:!1},X0={readContext:ei,useCallback:Bh,useContext:ei,useEffect:Wc,useImperativeHandle:Oh,useInsertionEffect:Uh,useLayoutEffect:Fh,useMemo:zh,useReducer:Gc,useRef:Dh,useState:function(){return Gc(Ra)},useDebugValue:Xc,useDeferredValue:function(t){var i=ti();return on===null?i.memoizedState=t:Hh(i,on.memoizedState,t)},useTransition:function(){var t=Gc(Ra)[0],i=ti().memoizedState;return[t,i]},useMutableSource:Th,useSyncExternalStore:bh,useId:Vh,unstable_isNewReconciler:!1};function hi(t,i){if(t&&t.defaultProps){i=G({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function jc(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:G({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ho={isMounted:function(t){return(t=t._reactInternals)?Pn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=Ln(),d=_r(t),h=Vi(c,d);h.payload=i,a!=null&&(h.callback=a),i=pr(t,h,d),i!==null&&(gi(i,t,d,c),Do(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=Ln(),d=_r(t),h=Vi(c,d);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=pr(t,h,d),i!==null&&(gi(i,t,d,c),Do(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Ln(),c=_r(t),d=Vi(a,c);d.tag=2,i!=null&&(d.callback=i),i=pr(t,d,c),i!==null&&(gi(i,t,c,a),Do(i,t,c))}};function jh(t,i,a,c,d,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,h,E):i.prototype&&i.prototype.isPureReactComponent?!ga(a,c)||!ga(d,h):!0}function Yh(t,i,a){var c=!1,d=dr,h=i.contextType;return typeof h=="object"&&h!==null?h=ei(h):(d=Un(i)?Or:Sn.current,c=i.contextTypes,h=(c=c!=null)?vs(t,d):dr),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ho,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function qh(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Ho.enqueueReplaceState(i,i.state,null)}function Yc(t,i,a,c){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Dc(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=ei(h):(h=Un(i)?Or:Sn.current,d.context=vs(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(jc(t,i,h,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ho.enqueueReplaceState(d,d.state,null),Io(t,a,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,i){try{var a="",c=i;do a+=De(c),c=c.return;while(c);var d=a}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function qc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function $c(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var j0=typeof WeakMap=="function"?WeakMap:Map;function $h(t,i,a){a=Vi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){qo||(qo=!0,uu=c),$c(t,i)},a}function Kh(t,i,a){a=Vi(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){$c(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){$c(t,i),typeof c!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Zh(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new j0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),t=av.bind(null,t,i,a),i.then(t,t))}function Jh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Qh(t,i,a,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Vi(-1,1),i.tag=2,pr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Y0=C.ReactCurrentOwner,Fn=!1;function Nn(t,i,a,c){i.child=t===null?xh(i,null,a,c):Ss(i,t.child,a,c)}function ep(t,i,a,c,d){a=a.render;var h=i.ref;return Es(i,d),c=zc(t,i,a,c,h,d),a=Hc(),t!==null&&!Fn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Gi(t,i,d)):(Gt&&a&&Ec(i),i.flags|=1,Nn(t,i,c,d),i.child)}function tp(t,i,a,c,d){if(t===null){var h=a.type;return typeof h=="function"&&!vu(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,np(t,i,h,c,d)):(t=el(a.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var E=h.memoizedProps;if(a=a.compare,a=a!==null?a:ga,a(E,c)&&t.ref===i.ref)return Gi(t,i,d)}return i.flags|=1,t=yr(h,c),t.ref=i.ref,t.return=i,i.child=t}function np(t,i,a,c,d){if(t!==null){var h=t.memoizedProps;if(ga(h,c)&&t.ref===i.ref)if(Fn=!1,i.pendingProps=c=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Fn=!0);else return i.lanes=t.lanes,Gi(t,i,d)}return Kc(t,i,a,c,d)}function ip(t,i,a){var c=i.pendingProps,d=c.children,h=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(As,Xn),Xn|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,kt(As,Xn),Xn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:a,kt(As,Xn),Xn|=c}else h!==null?(c=h.baseLanes|a,i.memoizedState=null):c=a,kt(As,Xn),Xn|=c;return Nn(t,i,d,a),i.child}function rp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Kc(t,i,a,c,d){var h=Un(a)?Or:Sn.current;return h=vs(i,h),Es(i,d),a=zc(t,i,a,c,h,d),c=Hc(),t!==null&&!Fn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Gi(t,i,d)):(Gt&&c&&Ec(i),i.flags|=1,Nn(t,i,a,d),i.child)}function sp(t,i,a,c,d){if(Un(a)){var h=!0;To(i)}else h=!1;if(Es(i,d),i.stateNode===null)Go(t,i),Yh(i,a,c),Yc(i,a,c,d),c=!0;else if(t===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var B=E.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=ei(ue):(ue=Un(a)?Or:Sn.current,ue=vs(i,ue));var xe=a.getDerivedStateFromProps,Me=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";Me||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==c||B!==ue)&&qh(i,E,c,ue),hr=!1;var _e=i.memoizedState;E.state=_e,Io(i,c,E,d),B=i.memoizedState,U!==c||_e!==B||In.current||hr?(typeof xe=="function"&&(jc(i,a,xe,c),B=i.memoizedState),(U=hr||jh(i,a,U,c,_e,B,ue))?(Me||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),E.props=c,E.state=B,E.context=ue,c=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Sh(t,i),U=i.memoizedProps,ue=i.type===i.elementType?U:hi(i.type,U),E.props=ue,Me=i.pendingProps,_e=E.context,B=a.contextType,typeof B=="object"&&B!==null?B=ei(B):(B=Un(a)?Or:Sn.current,B=vs(i,B));var ze=a.getDerivedStateFromProps;(xe=typeof ze=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Me||_e!==B)&&qh(i,E,c,B),hr=!1,_e=i.memoizedState,E.state=_e,Io(i,c,E,d);var Xe=i.memoizedState;U!==Me||_e!==Xe||In.current||hr?(typeof ze=="function"&&(jc(i,a,ze,c),Xe=i.memoizedState),(ue=hr||jh(i,a,ue,c,_e,Xe,B)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,Xe,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,Xe,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Xe),E.props=c,E.state=Xe,E.context=B,c=ue):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),c=!1)}return Zc(t,i,a,c,h,d)}function Zc(t,i,a,c,d,h){rp(t,i);var E=(i.flags&128)!==0;if(!c&&!E)return d&&uh(i,a,!1),Gi(t,i,h);c=i.stateNode,Y0.current=i;var U=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&E?(i.child=Ss(i,t.child,null,h),i.child=Ss(i,null,U,h)):Nn(t,i,U,h),i.memoizedState=c.state,d&&uh(i,a,!0),i.child}function ap(t){var i=t.stateNode;i.pendingContext?lh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&lh(t,i.context,!1),Ic(t,i.containerInfo)}function op(t,i,a,c,d){return ys(),Ac(d),i.flags|=256,Nn(t,i,a,c),i.child}var Jc={dehydrated:null,treeContext:null,retryLane:0};function Qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function lp(t,i,a){var c=i.pendingProps,d=jt.current,h=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=t!==null&&t.memoizedState===null?!1:(d&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),kt(jt,d&1),t===null)return bc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,t=c.fallback,h?(c=i.mode,h=i.child,E={mode:"hidden",children:E},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=tl(E,c,0,null),t=qr(t,c,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Qc(a),i.memoizedState=Jc,t):eu(i,E));if(d=t.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return q0(t,i,E,c,U,d,a);if(h){h=c.fallback,E=i.mode,d=t.child,U=d.sibling;var B={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=yr(d,B),c.subtreeFlags=d.subtreeFlags&14680064),U!==null?h=yr(U,h):(h=qr(h,E,a,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,E=t.child.memoizedState,E=E===null?Qc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~a,i.memoizedState=Jc,c}return h=t.child,t=h.sibling,c=yr(h,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function eu(t,i){return i=tl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Vo(t,i,a,c){return c!==null&&Ac(c),Ss(i,t.child,null,a),t=eu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function q0(t,i,a,c,d,h,E){if(a)return i.flags&256?(i.flags&=-257,c=qc(Error(n(422))),Vo(t,i,E,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=c.fallback,d=i.mode,c=tl({mode:"visible",children:c.children},d,0,null),h=qr(h,d,E,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,(i.mode&1)!==0&&Ss(i,t.child,null,E),i.child.memoizedState=Qc(E),i.memoizedState=Jc,h);if((i.mode&1)===0)return Vo(t,i,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var U=c.dgst;return c=U,h=Error(n(419)),c=qc(h,c,void 0),Vo(t,i,E,c)}if(U=(E&t.childLanes)!==0,Fn||U){if(c=fn,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Hi(t,d),gi(c,t,d,-1))}return gu(),c=qc(Error(n(421))),Vo(t,i,E,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=ov.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,Wn=cr(d.nextSibling),Gn=i,Gt=!0,fi=null,t!==null&&(Jn[Qn++]=Bi,Jn[Qn++]=zi,Jn[Qn++]=Br,Bi=t.id,zi=t.overflow,Br=i),i=eu(i,c.children),i.flags|=4096,i)}function cp(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Nc(t.return,i,a)}function tu(t,i,a,c,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=a,h.tailMode=d)}function up(t,i,a){var c=i.pendingProps,d=c.revealOrder,h=c.tail;if(Nn(t,i,c.children,a),c=jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cp(t,a,i);else if(t.tag===19)cp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(kt(jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Uo(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),tu(i,!1,d,a,h);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Uo(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}tu(i,!0,a,null,h);break;case"together":tu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Go(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Gi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Wr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=yr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=yr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function $0(t,i,a){switch(i.tag){case 3:ap(i),ys();break;case 5:wh(i);break;case 1:Un(i.type)&&To(i);break;case 4:Ic(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;kt(No,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt(jt,jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?lp(t,i,a):(kt(jt,jt.current&1),t=Gi(t,i,a),t!==null?t.sibling:null);kt(jt,jt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return up(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(jt,jt.current),c)break;return null;case 22:case 23:return i.lanes=0,ip(t,i,a)}return Gi(t,i,a)}var dp,nu,fp,hp;dp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},nu=function(){},fp=function(t,i,a,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,Vr(wi.current);var h=null;switch(a){case"input":d=ut(t,d),c=ut(t,c),h=[];break;case"select":d=G({},d,{value:void 0}),c=G({},c,{value:void 0}),h=[];break;case"textarea":d=Ht(t,d),c=Ht(t,c),h=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Mo)}qe(a,c);var E;a=null;for(ue in d)if(!c.hasOwnProperty(ue)&&d.hasOwnProperty(ue)&&d[ue]!=null)if(ue==="style"){var U=d[ue];for(E in U)U.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?h||(h=[]):(h=h||[]).push(ue,null));for(ue in c){var B=c[ue];if(U=d?.[ue],c.hasOwnProperty(ue)&&B!==U&&(B!=null||U!=null))if(ue==="style")if(U){for(E in U)!U.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in B)B.hasOwnProperty(E)&&U[E]!==B[E]&&(a||(a={}),a[E]=B[E])}else a||(h||(h=[]),h.push(ue,a)),a=B;else ue==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(h=h||[]).push(ue,B)):ue==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(ue,""+B):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(B!=null&&ue==="onScroll"&&Ot("scroll",t),h||U===B||(h=[])):(h=h||[]).push(ue,B))}a&&(h=h||[]).push("style",a);var ue=h;(i.updateQueue=ue)&&(i.flags|=4)}},hp=function(t,i,a,c){a!==c&&(i.flags|=4)};function Na(t,i){if(!Gt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function En(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function K0(t,i,a){var c=i.pendingProps;switch(wc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(i),null;case 1:return Un(i.type)&&wo(),En(i),null;case 3:return c=i.stateNode,ws(),Bt(In),Bt(Sn),kc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Ro(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fi!==null&&(hu(fi),fi=null))),nu(t,i),En(i),null;case 5:Uc(i);var d=Vr(ba.current);if(a=i.type,t!==null&&i.stateNode!=null)fp(t,i,a,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return En(i),null}if(t=Vr(wi.current),Ro(i)){c=i.stateNode,a=i.type;var h=i.memoizedProps;switch(c[Ei]=i,c[Sa]=h,t=(i.mode&1)!==0,a){case"dialog":Ot("cancel",c),Ot("close",c);break;case"iframe":case"object":case"embed":Ot("load",c);break;case"video":case"audio":for(d=0;d<_a.length;d++)Ot(_a[d],c);break;case"source":Ot("error",c);break;case"img":case"image":case"link":Ot("error",c),Ot("load",c);break;case"details":Ot("toggle",c);break;case"input":mt(c,h),Ot("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},Ot("invalid",c);break;case"textarea":W(c,h),Ot("invalid",c)}qe(a,h),d=null;for(var E in h)if(h.hasOwnProperty(E)){var U=h[E];E==="children"?typeof U=="string"?c.textContent!==U&&(h.suppressHydrationWarning!==!0&&So(c.textContent,U,t),d=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&So(c.textContent,U,t),d=["children",""+U]):o.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Ot("scroll",c)}switch(a){case"input":Oe(c),Ut(c,h,!0);break;case"textarea":Oe(c),wt(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=Mo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=N(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=E.createElement(a,{is:c.is}):(t=E.createElement(a),a==="select"&&(E=t,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):t=E.createElementNS(t,a),t[Ei]=i,t[Sa]=c,dp(t,i,!1,!1),i.stateNode=t;e:{switch(E=Pe(a,c),a){case"dialog":Ot("cancel",t),Ot("close",t),d=c;break;case"iframe":case"object":case"embed":Ot("load",t),d=c;break;case"video":case"audio":for(d=0;d<_a.length;d++)Ot(_a[d],t);d=c;break;case"source":Ot("error",t),d=c;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),d=c;break;case"details":Ot("toggle",t),d=c;break;case"input":mt(t,c),d=ut(t,c),Ot("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=G({},c,{value:void 0}),Ot("invalid",t);break;case"textarea":W(t,c),d=Ht(t,c),Ot("invalid",t);break;default:d=c}qe(a,d),U=d;for(h in U)if(U.hasOwnProperty(h)){var B=U[h];h==="style"?ge(t,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&oe(t,B)):h==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&fe(t,B):typeof B=="number"&&fe(t,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?B!=null&&h==="onScroll"&&Ot("scroll",t):B!=null&&j(t,h,B,E))}switch(a){case"input":Oe(t),Ut(t,c,!1);break;case"textarea":Oe(t),wt(t);break;case"option":c.value!=null&&t.setAttribute("value",""+de(c.value));break;case"select":t.multiple=!!c.multiple,h=c.value,h!=null?Pt(t,!!c.multiple,h,!1):c.defaultValue!=null&&Pt(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Mo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return En(i),null;case 6:if(t&&i.stateNode!=null)hp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=Vr(ba.current),Vr(wi.current),Ro(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ei]=i,(h=c.nodeValue!==a)&&(t=Gn,t!==null))switch(t.tag){case 3:So(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&So(c.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ei]=i,i.stateNode=c}return En(i),null;case 13:if(Bt(jt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Gt&&Wn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)gh(),ys(),i.flags|=98560,h=!1;else if(h=Ro(i),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Ei]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;En(i),h=!1}else fi!==null&&(hu(fi),fi=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(jt.current&1)!==0?ln===0&&(ln=3):gu())),i.updateQueue!==null&&(i.flags|=4),En(i),null);case 4:return ws(),nu(t,i),t===null&&xa(i.stateNode.containerInfo),En(i),null;case 10:return Pc(i.type._context),En(i),null;case 17:return Un(i.type)&&wo(),En(i),null;case 19:if(Bt(jt),h=i.memoizedState,h===null)return En(i),null;if(c=(i.flags&128)!==0,E=h.rendering,E===null)if(c)Na(h,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Uo(t),E!==null){for(i.flags|=128,Na(h,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)h=a,t=c,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return kt(jt,jt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Xt()>Cs&&(i.flags|=128,c=!0,Na(h,!1),i.lanes=4194304)}else{if(!c)if(t=Uo(E),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Na(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Gt)return En(i),null}else 2*Xt()-h.renderingStartTime>Cs&&a!==1073741824&&(i.flags|=128,c=!0,Na(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(a=h.last,a!==null?a.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Xt(),i.sibling=null,a=jt.current,kt(jt,c?a&1|2:a&1),i):(En(i),null);case 22:case 23:return mu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Xn&1073741824)!==0&&(En(i),i.subtreeFlags&6&&(i.flags|=8192)):En(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Z0(t,i){switch(wc(i),i.tag){case 1:return Un(i.type)&&wo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ws(),Bt(In),Bt(Sn),kc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Uc(i),null;case 13:if(Bt(jt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ys()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Bt(jt),null;case 4:return ws(),null;case 10:return Pc(i.type._context),null;case 22:case 23:return mu(),null;case 24:return null;default:return null}}var Wo=!1,wn=!1,J0=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function bs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Zt(t,i,c)}else a.current=null}function iu(t,i,a){try{a()}catch(c){Zt(t,i,c)}}var pp=!1;function Q0(t,i){if(mc=co,t=jf(),oc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var E=0,U=-1,B=-1,ue=0,xe=0,Me=t,_e=null;t:for(;;){for(var ze;Me!==a||d!==0&&Me.nodeType!==3||(U=E+d),Me!==h||c!==0&&Me.nodeType!==3||(B=E+c),Me.nodeType===3&&(E+=Me.nodeValue.length),(ze=Me.firstChild)!==null;)_e=Me,Me=ze;for(;;){if(Me===t)break t;if(_e===a&&++ue===d&&(U=E),_e===h&&++xe===c&&(B=E),(ze=Me.nextSibling)!==null)break;Me=_e,_e=Me.parentNode}Me=ze}a=U===-1||B===-1?null:{start:U,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(gc={focusedElem:t,selectionRange:a},co=!1,Ge=i;Ge!==null;)if(i=Ge,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ge=t;else for(;Ge!==null;){i=Ge;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ye=Xe.memoizedProps,en=Xe.memoizedState,ne=i.stateNode,X=ne.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:hi(i.type,Ye),en);ne.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Zt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Ge=t;break}Ge=i.return}return Xe=pp,pp=!1,Xe}function La(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&iu(i,a,h)}d=d.next}while(d!==c)}}function Xo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function ru(t){var i=t.ref;if(i!==null){var a=t.stateNode;t.tag,t=a,typeof i=="function"?i(t):i.current=t}}function mp(t){var i=t.alternate;i!==null&&(t.alternate=null,mp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ei],delete i[Sa],delete i[yc],delete i[U0],delete i[F0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gp(t){return t.tag===5||t.tag===3||t.tag===4}function vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function su(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Mo));else if(c!==4&&(t=t.child,t!==null))for(su(t,i,a),t=t.sibling;t!==null;)su(t,i,a),t=t.sibling}function au(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(au(t,i,a),t=t.sibling;t!==null;)au(t,i,a),t=t.sibling}var vn=null,pi=!1;function mr(t,i,a){for(a=a.child;a!==null;)_p(t,i,a),a=a.sibling}function _p(t,i,a){if(Z&&typeof Z.onCommitFiberUnmount=="function")try{Z.onCommitFiberUnmount(ee,a)}catch{}switch(a.tag){case 5:wn||bs(a,i);case 6:var c=vn,d=pi;vn=null,mr(t,i,a),vn=c,pi=d,vn!==null&&(pi?(t=vn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(pi?(t=vn,a=a.stateNode,t.nodeType===8?xc(t.parentNode,a):t.nodeType===1&&xc(t,a),ua(t)):xc(vn,a.stateNode));break;case 4:c=vn,d=pi,vn=a.stateNode.containerInfo,pi=!0,mr(t,i,a),vn=c,pi=d;break;case 0:case 11:case 14:case 15:if(!wn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var h=d,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&iu(a,i,E),d=d.next}while(d!==c)}mr(t,i,a);break;case 1:if(!wn&&(bs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Zt(a,i,U)}mr(t,i,a);break;case 21:mr(t,i,a);break;case 22:a.mode&1?(wn=(c=wn)||a.memoizedState!==null,mr(t,i,a),wn=c):mr(t,i,a);break;default:mr(t,i,a)}}function xp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new J0),i.forEach(function(c){var d=lv.bind(null,t,c);a.has(c)||(a.add(c),c.then(d,d))})}}function mi(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var h=t,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:vn=U.stateNode,pi=!1;break e;case 3:vn=U.stateNode.containerInfo,pi=!0;break e;case 4:vn=U.stateNode.containerInfo,pi=!0;break e}U=U.return}if(vn===null)throw Error(n(160));_p(h,E,d),vn=null,pi=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(ue){Zt(d,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)yp(i,t),i=i.sibling}function yp(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mi(i,t),bi(t),c&4){try{La(3,t,t.return),Xo(3,t)}catch(Ye){Zt(t,t.return,Ye)}try{La(5,t,t.return)}catch(Ye){Zt(t,t.return,Ye)}}break;case 1:mi(i,t),bi(t),c&512&&a!==null&&bs(a,a.return);break;case 5:if(mi(i,t),bi(t),c&512&&a!==null&&bs(a,a.return),t.flags&32){var d=t.stateNode;try{fe(d,"")}catch(Ye){Zt(t,t.return,Ye)}}if(c&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,E=a!==null?a.memoizedProps:h,U=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&Lt(d,h),Pe(U,E);var ue=Pe(U,h);for(E=0;E<B.length;E+=2){var xe=B[E],Me=B[E+1];xe==="style"?ge(d,Me):xe==="dangerouslySetInnerHTML"?oe(d,Me):xe==="children"?fe(d,Me):j(d,xe,Me,ue)}switch(U){case"input":dt(d,h);break;case"textarea":sn(d,h);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var ze=h.value;ze!=null?Pt(d,!!h.multiple,ze,!1):_e!==!!h.multiple&&(h.defaultValue!=null?Pt(d,!!h.multiple,h.defaultValue,!0):Pt(d,!!h.multiple,h.multiple?[]:"",!1))}d[Sa]=h}catch(Ye){Zt(t,t.return,Ye)}}break;case 6:if(mi(i,t),bi(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(Ye){Zt(t,t.return,Ye)}}break;case 3:if(mi(i,t),bi(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ua(i.containerInfo)}catch(Ye){Zt(t,t.return,Ye)}break;case 4:mi(i,t),bi(t);break;case 13:mi(i,t),bi(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(cu=Xt())),c&4&&xp(t);break;case 22:if(xe=a!==null&&a.memoizedState!==null,t.mode&1?(wn=(ue=wn)||xe,mi(i,t),wn=ue):mi(i,t),bi(t),c&8192){if(ue=t.memoizedState!==null,(t.stateNode.isHidden=ue)&&!xe&&(t.mode&1)!==0)for(Ge=t,xe=t.child;xe!==null;){for(Me=Ge=xe;Ge!==null;){switch(_e=Ge,ze=_e.child,_e.tag){case 0:case 11:case 14:case 15:La(4,_e,_e.return);break;case 1:bs(_e,_e.return);var Xe=_e.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=_e,a=_e.return;try{i=c,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(Ye){Zt(c,a,Ye)}}break;case 5:bs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Ep(Me);continue}}ze!==null?(ze.return=_e,Ge=ze):Ep(Me)}xe=xe.sibling}e:for(xe=null,Me=t;;){if(Me.tag===5){if(xe===null){xe=Me;try{d=Me.stateNode,ue?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=Me.stateNode,B=Me.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=pe("display",E))}catch(Ye){Zt(t,t.return,Ye)}}}else if(Me.tag===6){if(xe===null)try{Me.stateNode.nodeValue=ue?"":Me.memoizedProps}catch(Ye){Zt(t,t.return,Ye)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===t)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===t)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===t)break e;xe===Me&&(xe=null),Me=Me.return}xe===Me&&(xe=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:mi(i,t),bi(t),c&4&&xp(t);break;case 21:break;default:mi(i,t),bi(t)}}function bi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(gp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(fe(d,""),c.flags&=-33);var h=vp(t);au(t,h,d);break;case 3:case 4:var E=c.stateNode.containerInfo,U=vp(t);su(t,U,E);break;default:throw Error(n(161))}}catch(B){Zt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function ev(t,i,a){Ge=t,Sp(t)}function Sp(t,i,a){for(var c=(t.mode&1)!==0;Ge!==null;){var d=Ge,h=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||Wo;if(!E){var U=d.alternate,B=U!==null&&U.memoizedState!==null||wn;U=Wo;var ue=wn;if(Wo=E,(wn=B)&&!ue)for(Ge=d;Ge!==null;)E=Ge,B=E.child,E.tag===22&&E.memoizedState!==null?wp(d):B!==null?(B.return=E,Ge=B):wp(d);for(;h!==null;)Ge=h,Sp(h),h=h.sibling;Ge=d,Wo=U,wn=ue}Mp(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,Ge=h):Mp(t)}}function Mp(t){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:wn||Xo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!wn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:hi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Eh(i,h,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Eh(i,E,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var xe=ue.memoizedState;if(xe!==null){var Me=xe.dehydrated;Me!==null&&ua(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}wn||i.flags&512&&ru(i)}catch(_e){Zt(i,i.return,_e)}}if(i===t){Ge=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function Ep(t){for(;Ge!==null;){var i=Ge;if(i===t){Ge=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function wp(t){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Xo(4,i)}catch(B){Zt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(B){Zt(i,d,B)}}var h=i.return;try{ru(i)}catch(B){Zt(i,h,B)}break;case 5:var E=i.return;try{ru(i)}catch(B){Zt(i,E,B)}}}catch(B){Zt(i,i.return,B)}if(i===t){Ge=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ge=U;break}Ge=i.return}}var tv=Math.ceil,jo=C.ReactCurrentDispatcher,ou=C.ReactCurrentOwner,ni=C.ReactCurrentBatchConfig,Mt=0,fn=null,nn=null,_n=0,Xn=0,As=ur(0),ln=0,Da=null,Wr=0,Yo=0,lu=0,Ia=null,kn=null,cu=0,Cs=1/0,Wi=null,qo=!1,uu=null,gr=null,$o=!1,vr=null,Ko=0,Ua=0,du=null,Zo=-1,Jo=0;function Ln(){return(Mt&6)!==0?Xt():Zo!==-1?Zo:Zo=Xt()}function _r(t){return(t.mode&1)===0?1:(Mt&2)!==0&&_n!==0?_n&-_n:O0.transition!==null?(Jo===0&&(Jo=an()),Jo):(t=ft,t!==0||(t=window.event,t=t===void 0?16:bf(t.type)),t)}function gi(t,i,a,c){if(50<Ua)throw Ua=0,du=null,Error(n(185));Qt(t,a,c),((Mt&2)===0||t!==fn)&&(t===fn&&((Mt&2)===0&&(Yo|=a),ln===4&&xr(t,_n)),On(t,c),a===1&&Mt===0&&(i.mode&1)===0&&(Cs=Xt()+500,bo&&fr()))}function On(t,i){var a=t.callbackNode;Ft(t,i);var c=gt(t,t===fn?_n:0);if(c===0)a!==null&&ia(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&ia(a),i===1)t.tag===0?k0(bp.bind(null,t)):dh(bp.bind(null,t)),D0(function(){(Mt&6)===0&&fr()}),a=null;else{switch(oi(c)){case 1:a=ra;break;case 4:a=sa;break;case 16:a=T;break;case 536870912:a=ce;break;default:a=T}a=Ip(a,Tp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Tp(t,i){if(Zo=-1,Jo=0,(Mt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Rs()&&t.callbackNode!==a)return null;var c=gt(t,t===fn?_n:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Qo(t,c);else{i=c;var d=Mt;Mt|=2;var h=Cp();(fn!==t||_n!==i)&&(Wi=null,Cs=Xt()+500,jr(t,i));do try{rv();break}catch(U){Ap(t,U)}while(!0);Rc(),jo.current=h,Mt=d,nn!==null?i=0:(fn=null,_n=0,i=ln)}if(i!==0){if(i===2&&(d=Rt(t),d!==0&&(c=d,i=fu(t,d))),i===1)throw a=Da,jr(t,0),xr(t,c),On(t,Xt()),a;if(i===6)xr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!nv(d)&&(i=Qo(t,c),i===2&&(h=Rt(t),h!==0&&(c=h,i=fu(t,h))),i===1))throw a=Da,jr(t,0),xr(t,c),On(t,Xt()),a;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Yr(t,kn,Wi);break;case 3:if(xr(t,c),(c&130023424)===c&&(i=cu+500-Xt(),10<i)){if(gt(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){Ln(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=_c(Yr.bind(null,t,kn,Wi),i);break}Yr(t,kn,Wi);break;case 4:if(xr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var E=31-Ne(c);h=1<<E,E=i[E],E>d&&(d=E),c&=~h}if(c=d,c=Xt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*tv(c/1960))-c,10<c){t.timeoutHandle=_c(Yr.bind(null,t,kn,Wi),c);break}Yr(t,kn,Wi);break;case 5:Yr(t,kn,Wi);break;default:throw Error(n(329))}}}return On(t,Xt()),t.callbackNode===a?Tp.bind(null,t):null}function fu(t,i){var a=Ia;return t.current.memoizedState.isDehydrated&&(jr(t,i).flags|=256),t=Qo(t,i),t!==2&&(i=kn,kn=a,i!==null&&hu(i)),t}function hu(t){kn===null?kn=t:kn.push.apply(kn,t)}function nv(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],h=d.getSnapshot;d=d.value;try{if(!di(h(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function xr(t,i){for(i&=~lu,i&=~Yo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Ne(i),c=1<<a;t[a]=-1,i&=~c}}function bp(t){if((Mt&6)!==0)throw Error(n(327));Rs();var i=gt(t,0);if((i&1)===0)return On(t,Xt()),null;var a=Qo(t,i);if(t.tag!==0&&a===2){var c=Rt(t);c!==0&&(i=c,a=fu(t,c))}if(a===1)throw a=Da,jr(t,0),xr(t,i),On(t,Xt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Yr(t,kn,Wi),On(t,Xt()),null}function pu(t,i){var a=Mt;Mt|=1;try{return t(i)}finally{Mt=a,Mt===0&&(Cs=Xt()+500,bo&&fr())}}function Xr(t){vr!==null&&vr.tag===0&&(Mt&6)===0&&Rs();var i=Mt;Mt|=1;var a=ni.transition,c=ft;try{if(ni.transition=null,ft=1,t)return t()}finally{ft=c,ni.transition=a,Mt=i,(Mt&6)===0&&fr()}}function mu(){Xn=As.current,Bt(As)}function jr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,L0(a)),nn!==null)for(a=nn.return;a!==null;){var c=a;switch(wc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&wo();break;case 3:ws(),Bt(In),Bt(Sn),kc();break;case 5:Uc(c);break;case 4:ws();break;case 13:Bt(jt);break;case 19:Bt(jt);break;case 10:Pc(c.type._context);break;case 22:case 23:mu()}a=a.return}if(fn=t,nn=t=yr(t.current,null),_n=Xn=i,ln=0,Da=null,lu=Yo=Wr=0,kn=Ia=null,Hr!==null){for(i=0;i<Hr.length;i++)if(a=Hr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,h=a.pending;if(h!==null){var E=h.next;h.next=d,c.next=E}a.pending=c}Hr=null}return t}function Ap(t,i){do{var a=nn;try{if(Rc(),Fo.current=zo,ko){for(var c=Yt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ko=!1}if(Gr=0,dn=on=Yt=null,Aa=!1,Ca=0,ou.current=null,a===null||a.return===null){ln=1,Da=i,nn=null;break}e:{var h=t,E=a.return,U=a,B=i;if(i=_n,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ue=B,xe=U,Me=xe.tag;if((xe.mode&1)===0&&(Me===0||Me===11||Me===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ze=Jh(E);if(ze!==null){ze.flags&=-257,Qh(ze,E,U,h,i),ze.mode&1&&Zh(h,ue,i),i=ze,B=ue;var Xe=i.updateQueue;if(Xe===null){var Ye=new Set;Ye.add(B),i.updateQueue=Ye}else Xe.add(B);break e}else{if((i&1)===0){Zh(h,ue,i),gu();break e}B=Error(n(426))}}else if(Gt&&U.mode&1){var en=Jh(E);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),Qh(en,E,U,h,i),Ac(Ts(B,U));break e}}h=B=Ts(B,U),ln!==4&&(ln=2),Ia===null?Ia=[h]:Ia.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var ne=$h(h,B,i);Mh(h,ne);break e;case 1:U=B;var X=h.type,se=h.stateNode;if((h.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(gr===null||!gr.has(se)))){h.flags|=65536,i&=-i,h.lanes|=i;var we=Kh(h,U,i);Mh(h,we);break e}}h=h.return}while(h!==null)}Pp(a)}catch(Je){i=Je,nn===a&&a!==null&&(nn=a=a.return);continue}break}while(!0)}function Cp(){var t=jo.current;return jo.current=zo,t===null?zo:t}function gu(){(ln===0||ln===3||ln===2)&&(ln=4),fn===null||(Wr&268435455)===0&&(Yo&268435455)===0||xr(fn,_n)}function Qo(t,i){var a=Mt;Mt|=2;var c=Cp();(fn!==t||_n!==i)&&(Wi=null,jr(t,i));do try{iv();break}catch(d){Ap(t,d)}while(!0);if(Rc(),Mt=a,jo.current=c,nn!==null)throw Error(n(261));return fn=null,_n=0,ln}function iv(){for(;nn!==null;)Rp(nn)}function rv(){for(;nn!==null&&!oo();)Rp(nn)}function Rp(t){var i=Dp(t.alternate,t,Xn);t.memoizedProps=t.pendingProps,i===null?Pp(t):nn=i,ou.current=null}function Pp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=K0(a,i,Xn),a!==null){nn=a;return}}else{if(a=Z0(a,i),a!==null){a.flags&=32767,nn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ln=6,nn=null;return}}if(i=i.sibling,i!==null){nn=i;return}nn=i=t}while(i!==null);ln===0&&(ln=5)}function Yr(t,i,a){var c=ft,d=ni.transition;try{ni.transition=null,ft=1,sv(t,i,a,c)}finally{ni.transition=d,ft=c}return null}function sv(t,i,a,c){do Rs();while(vr!==null);if((Mt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(vt(t,h),t===fn&&(nn=fn=null,_n=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||$o||($o=!0,Ip(T,function(){return Rs(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=ni.transition,ni.transition=null;var E=ft;ft=1;var U=Mt;Mt|=4,ou.current=null,Q0(t,a),yp(a,t),T0(gc),co=!!mc,gc=mc=null,t.current=a,ev(a),ql(),Mt=U,ft=E,ni.transition=h}else t.current=a;if($o&&($o=!1,vr=t,Ko=d),h=t.pendingLanes,h===0&&(gr=null),Ie(a.stateNode),On(t,Xt()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(qo)throw qo=!1,t=uu,uu=null,t;return(Ko&1)!==0&&t.tag!==0&&Rs(),h=t.pendingLanes,(h&1)!==0?t===du?Ua++:(Ua=0,du=t):Ua=0,fr(),null}function Rs(){if(vr!==null){var t=oi(Ko),i=ni.transition,a=ft;try{if(ni.transition=null,ft=16>t?16:t,vr===null)var c=!1;else{if(t=vr,vr=null,Ko=0,(Mt&6)!==0)throw Error(n(331));var d=Mt;for(Mt|=4,Ge=t.current;Ge!==null;){var h=Ge,E=h.child;if((Ge.flags&16)!==0){var U=h.deletions;if(U!==null){for(var B=0;B<U.length;B++){var ue=U[B];for(Ge=ue;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:La(8,xe,h)}var Me=xe.child;if(Me!==null)Me.return=xe,Ge=Me;else for(;Ge!==null;){xe=Ge;var _e=xe.sibling,ze=xe.return;if(mp(xe),xe===ue){Ge=null;break}if(_e!==null){_e.return=ze,Ge=_e;break}Ge=ze}}}var Xe=h.alternate;if(Xe!==null){var Ye=Xe.child;if(Ye!==null){Xe.child=null;do{var en=Ye.sibling;Ye.sibling=null,Ye=en}while(Ye!==null)}}Ge=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Ge=E;else e:for(;Ge!==null;){if(h=Ge,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:La(9,h,h.return)}var ne=h.sibling;if(ne!==null){ne.return=h.return,Ge=ne;break e}Ge=h.return}}var X=t.current;for(Ge=X;Ge!==null;){E=Ge;var se=E.child;if((E.subtreeFlags&2064)!==0&&se!==null)se.return=E,Ge=se;else e:for(E=X;Ge!==null;){if(U=Ge,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Xo(9,U)}}catch(Je){Zt(U,U.return,Je)}if(U===E){Ge=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,Ge=we;break e}Ge=U.return}}if(Mt=d,fr(),Z&&typeof Z.onPostCommitFiberRoot=="function")try{Z.onPostCommitFiberRoot(ee,t)}catch{}c=!0}return c}finally{ft=a,ni.transition=i}}return!1}function Np(t,i,a){i=Ts(a,i),i=$h(t,i,1),t=pr(t,i,1),i=Ln(),t!==null&&(Qt(t,1,i),On(t,i))}function Zt(t,i,a){if(t.tag===3)Np(t,t,a);else for(;i!==null;){if(i.tag===3){Np(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(gr===null||!gr.has(c))){t=Ts(a,t),t=Kh(i,t,1),i=pr(i,t,1),t=Ln(),i!==null&&(Qt(i,1,t),On(i,t));break}}i=i.return}}function av(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=Ln(),t.pingedLanes|=t.suspendedLanes&a,fn===t&&(_n&a)===a&&(ln===4||ln===3&&(_n&130023424)===_n&&500>Xt()-cu?jr(t,0):lu|=a),On(t,i)}function Lp(t,i){i===0&&((t.mode&1)===0?i=1:(i=lt,lt<<=1,(lt&130023424)===0&&(lt=4194304)));var a=Ln();t=Hi(t,i),t!==null&&(Qt(t,i,a),On(t,a))}function ov(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Lp(t,a)}function lv(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Lp(t,a)}var Dp;Dp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||In.current)Fn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Fn=!1,$0(t,i,a);Fn=(t.flags&131072)!==0}else Fn=!1,Gt&&(i.flags&1048576)!==0&&fh(i,Co,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Go(t,i),t=i.pendingProps;var d=vs(i,Sn.current);Es(i,a),d=zc(null,i,c,t,d,a);var h=Hc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Un(c)?(h=!0,To(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Dc(i),d.updater=Ho,i.stateNode=d,d._reactInternals=i,Yc(i,c,t,a),i=Zc(null,i,c,!0,h,a)):(i.tag=0,Gt&&h&&Ec(i),Nn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Go(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=uv(c),t=hi(c,t),d){case 0:i=Kc(null,i,c,t,a);break e;case 1:i=sp(null,i,c,t,a);break e;case 11:i=ep(null,i,c,t,a);break e;case 14:i=tp(null,i,c,hi(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:hi(c,d),Kc(t,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:hi(c,d),sp(t,i,c,d,a);case 3:e:{if(ap(i),t===null)throw Error(n(387));c=i.pendingProps,h=i.memoizedState,d=h.element,Sh(t,i),Io(i,c,null,a);var E=i.memoizedState;if(c=E.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=Ts(Error(n(423)),i),i=op(t,i,c,a,d);break e}else if(c!==d){d=Ts(Error(n(424)),i),i=op(t,i,c,a,d);break e}else for(Wn=cr(i.stateNode.containerInfo.firstChild),Gn=i,Gt=!0,fi=null,a=xh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ys(),c===d){i=Gi(t,i,a);break e}Nn(t,i,c,a)}i=i.child}return i;case 5:return wh(i),t===null&&bc(i),c=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,E=d.children,vc(c,d)?E=null:h!==null&&vc(c,h)&&(i.flags|=32),rp(t,i),Nn(t,i,E,a),i.child;case 6:return t===null&&bc(i),null;case 13:return lp(t,i,a);case 4:return Ic(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=Ss(i,null,c,a):Nn(t,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:hi(c,d),ep(t,i,c,d,a);case 7:return Nn(t,i,i.pendingProps,a),i.child;case 8:return Nn(t,i,i.pendingProps.children,a),i.child;case 12:return Nn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,h=i.memoizedProps,E=d.value,kt(No,c._currentValue),c._currentValue=E,h!==null)if(di(h.value,E)){if(h.children===d.children&&!In.current){i=Gi(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){E=h.child;for(var B=U.firstContext;B!==null;){if(B.context===c){if(h.tag===1){B=Vi(-1,a&-a),B.tag=2;var ue=h.updateQueue;if(ue!==null){ue=ue.shared;var xe=ue.pending;xe===null?B.next=B:(B.next=xe.next,xe.next=B),ue.pending=B}}h.lanes|=a,B=h.alternate,B!==null&&(B.lanes|=a),Nc(h.return,a,i),U.lanes|=a;break}B=B.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=a,U=E.alternate,U!==null&&(U.lanes|=a),Nc(E,a,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}Nn(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Es(i,a),d=ei(d),c=c(d),i.flags|=1,Nn(t,i,c,a),i.child;case 14:return c=i.type,d=hi(c,i.pendingProps),d=hi(c.type,d),tp(t,i,c,d,a);case 15:return np(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:hi(c,d),Go(t,i),i.tag=1,Un(c)?(t=!0,To(i)):t=!1,Es(i,a),Yh(i,c,d),Yc(i,c,d,a),Zc(null,i,c,!0,t,a);case 19:return up(t,i,a);case 22:return ip(t,i,a)}throw Error(n(156,i.tag))};function Ip(t,i){return Fr(t,i)}function cv(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,i,a,c){return new cv(t,i,a,c)}function vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uv(t){if(typeof t=="function")return vu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===J)return 11;if(t===Q)return 14}return 2}function yr(t,i){var a=t.alternate;return a===null?(a=ii(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function el(t,i,a,c,d,h){var E=2;if(c=t,typeof t=="function")vu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case k:return qr(a.children,d,h,i);case w:E=8,d|=8;break;case I:return t=ii(12,a,i,d|2),t.elementType=I,t.lanes=h,t;case re:return t=ii(13,a,i,d),t.elementType=re,t.lanes=h,t;case Y:return t=ii(19,a,i,d),t.elementType=Y,t.lanes=h,t;case te:return tl(a,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V:E=10;break e;case q:E=9;break e;case J:E=11;break e;case Q:E=14;break e;case he:E=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ii(E,a,i,d),i.elementType=t,i.type=c,i.lanes=h,i}function qr(t,i,a,c){return t=ii(7,t,c,i),t.lanes=a,t}function tl(t,i,a,c){return t=ii(22,t,c,i),t.elementType=te,t.lanes=a,t.stateNode={isHidden:!1},t}function _u(t,i,a){return t=ii(6,t,null,i),t.lanes=a,t}function xu(t,i,a){return i=ii(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function dv(t,i,a,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Be(0),this.expirationTimes=Be(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Be(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function yu(t,i,a,c,d,h,E,U,B){return t=new dv(t,i,a,U,B),i===1?(i=1,h===!0&&(i|=8)):i=0,h=ii(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dc(h),t}function fv(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function Up(t){if(!t)return dr;t=t._reactInternals;e:{if(Pn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Un(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Un(a))return ch(t,a,i)}return i}function Fp(t,i,a,c,d,h,E,U,B){return t=yu(a,c,!0,t,d,h,E,U,B),t.context=Up(null),a=t.current,c=Ln(),d=_r(a),h=Vi(c,d),h.callback=i??null,pr(a,h,d),t.current.lanes=d,Qt(t,d,c),On(t,c),t}function nl(t,i,a,c){var d=i.current,h=Ln(),E=_r(d);return a=Up(a),i.context===null?i.context=a:i.pendingContext=a,i=Vi(h,E),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=pr(d,i,E),t!==null&&(gi(t,d,E,h),Do(t,d,E)),E}function il(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function kp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Su(t,i){kp(t,i),(t=t.alternate)&&kp(t,i)}function hv(){return null}var Op=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mu(t){this._internalRoot=t}rl.prototype.render=Mu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));nl(t,i,null,null)},rl.prototype.unmount=Mu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Xr(function(){nl(null,t,null,null)}),i[ki]=null}};function rl(t){this._internalRoot=t}rl.prototype.unstable_scheduleHydration=function(t){if(t){var i=li();t={blockedOn:null,target:t,priority:i};for(var a=0;a<ar.length&&i!==0&&i<ar[a].priority;a++);ar.splice(a,0,t),a===0&&wf(t)}};function Eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function pv(t,i,a,c,d){if(d){if(typeof c=="function"){var h=c;c=function(){var ue=il(E);h.call(ue)}}var E=Fp(i,c,t,0,null,!1,!1,"",Bp);return t._reactRootContainer=E,t[ki]=E.current,xa(t.nodeType===8?t.parentNode:t),Xr(),E}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var U=c;c=function(){var ue=il(B);U.call(ue)}}var B=yu(t,0,!1,null,null,!1,!1,"",Bp);return t._reactRootContainer=B,t[ki]=B.current,xa(t.nodeType===8?t.parentNode:t),Xr(function(){nl(i,B,a,c)}),B}function al(t,i,a,c,d){var h=a._reactRootContainer;if(h){var E=h;if(typeof d=="function"){var U=d;d=function(){var B=il(E);U.call(B)}}nl(i,E,t,d)}else E=pv(a,i,t,d,c);return il(E)}Fi=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=He(i.pendingLanes);a!==0&&(yn(i,a|1),On(i,Xt()),(Mt&6)===0&&(Cs=Xt()+500,fr()))}break;case 13:Xr(function(){var c=Hi(t,1);if(c!==null){var d=Ln();gi(c,t,1,d)}}),Su(t,1)}},bt=function(t){if(t.tag===13){var i=Hi(t,134217728);if(i!==null){var a=Ln();gi(i,t,134217728,a)}Su(t,134217728)}},Vt=function(t){if(t.tag===13){var i=_r(t),a=Hi(t,i);if(a!==null){var c=Ln();gi(a,t,i,c)}Su(t,i)}},li=function(){return ft},Dt=function(t,i){var a=ft;try{return ft=t,i()}finally{ft=a}},et=function(t,i,a){switch(i){case"input":if(dt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var d=Eo(c);if(!d)throw Error(n(90));ct(c),dt(c,d)}}}break;case"textarea":sn(t,a);break;case"select":i=a.value,i!=null&&Pt(t,!!a.multiple,i,!1)}},ke=pu,ve=Xr;var mv={usingClientEntryPoint:!1,Events:[Ma,ms,Eo,me,Ce,pu]},Fa={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gv={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ur(t),t===null?null:t.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||hv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{ee=ol.inject(gv),Z=ol}catch{}}return Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mv,Bn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eu(i))throw Error(n(200));return fv(t,i,null,a)},Bn.createRoot=function(t,i){if(!Eu(t))throw Error(n(299));var a=!1,c="",d=Op;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=yu(t,1,!1,null,null,a,!1,c,d),t[ki]=i.current,xa(t.nodeType===8?t.parentNode:t),new Mu(i)},Bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ur(i),t=t===null?null:t.stateNode,t},Bn.flushSync=function(t){return Xr(t)},Bn.hydrate=function(t,i,a){if(!sl(i))throw Error(n(200));return al(null,t,i,!0,a)},Bn.hydrateRoot=function(t,i,a){if(!Eu(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,d=!1,h="",E=Op;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Fp(i,null,t,1,a??null,d,!1,h,E),t[ki]=i.current,xa(t),c)for(t=0;t<c.length;t++)a=c[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new rl(i)},Bn.render=function(t,i,a){if(!sl(i))throw Error(n(200));return al(null,t,i,!1,a)},Bn.unmountComponentAtNode=function(t){if(!sl(t))throw Error(n(40));return t._reactRootContainer?(Xr(function(){al(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1},Bn.unstable_batchedUpdates=pu,Bn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!sl(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return al(t,i,a,!1,c)},Bn.version="18.3.1-next-f1338f8080-20240426",Bn}var Yp;function wv(){if(Yp)return bu.exports;Yp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),bu.exports=Ev(),bu.exports}var qp;function Tv(){if(qp)return ll;qp=1;var s=wv();return ll.createRoot=s.createRoot,ll.hydrateRoot=s.hydrateRoot,ll}var bv=Tv();const Av=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$m=(...s)=>s.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");var Cv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Rv=Nt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},p)=>Nt.createElement("svg",{ref:p,...Cv,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:$m("lucide",o),...f},[...u.map(([m,v])=>Nt.createElement(m,v)),...Array.isArray(l)?l:[l]]));const Wt=(s,e)=>{const n=Nt.forwardRef(({className:r,...o},l)=>Nt.createElement(Rv,{ref:l,iconNode:e,className:$m(`lucide-${Av(s)}`,r),...o}));return n.displayName=`${s}`,n};const Pv=Wt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);const Nv=Wt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const Lv=Wt("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);const Dv=Wt("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);const nf=Wt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);const Iv=Wt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const Km=Wt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const Uv=Wt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const Fv=Wt("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);const Zm=Wt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);const kv=Wt("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);const Ov=Wt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);const Ol=Wt("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);const Jm=Wt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);const Bv=Wt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);const Qm=Wt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);const eg=Wt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const zv=Wt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const Hv=Wt("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);const Vv=Wt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);const Gv=Wt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const Wv=Wt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);const Xv=Wt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);const Zs=Wt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),jv=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function dd(s){for(const e of jv){const[n,r,o]=e;if(s[n]&&s[n]===s[r]&&s[n]===s[o])return{winner:s[n],line:e}}return null}function tg(s,e,n){const r=dd(s);if(r?.winner==="O")return{score:10-n,index:-1};if(r?.winner==="X")return{score:n-10,index:-1};if(s.every(Boolean))return{score:0,index:-1};const o=[];for(let l=0;l<9;l++)if(!s[l]){s[l]=e?"O":"X";const{score:u}=tg(s,!e,n+1);o.push({score:u,index:l}),s[l]=null}if(e){o.sort((u,f)=>f.score-u.score);const l=o.filter(u=>u.score===o[0].score);if(Math.random()<.28&&o.length>1){const u=o.slice(0,Math.min(3,o.length));return u[Math.floor(Math.random()*u.length)]}return l[Math.floor(Math.random()*l.length)]}else return o.sort((l,u)=>l.score-u.score),o[0]}function Yv({onWin:s}){const[e,n]=Nt.useState(Array(9).fill(null)),[r,o]=Nt.useState("playing"),[l,u]=Nt.useState([]),[f,p]=Nt.useState(!1),m=Nt.useCallback(()=>{n(Array(9).fill(null)),o("playing"),u([]),p(!1)},[]),v=Nt.useCallback((M,b)=>{const R=[...b];R[M]="O",n(R);const y=dd(R);if(y?.winner==="O"){o("lost"),u(y.line),p(!0);return}if(R.every(Boolean)){o("draw"),p(!0);return}},[]),_=M=>{if(e[M]||f)return;const b=[...e];b[M]="X",n(b);const R=dd(b);if(R?.winner==="X"){o("won"),u(R.line),p(!0),s();return}if(b.every(Boolean)){o("draw"),p(!0);return}setTimeout(()=>{const{index:y}=tg([...b],!0,0);y>=0&&v(y,b)},450)},g={playing:"Your move — you are X",won:"You won! Unlocking portfolio…",lost:"AI wins this round",draw:"It's a draw"};return A.jsxs("div",{className:"flex flex-col items-center gap-4",children:[A.jsxs("div",{className:"flex items-center justify-between w-full px-1",children:[A.jsx("span",{className:`text-[13px] font-medium tracking-wide transition-colors duration-300 ${r==="won"?"text-white":r==="lost"||r==="draw"?"text-white/40":"text-white/50"}`,children:g[r]}),A.jsxs("button",{onClick:m,className:"flex items-center gap-1.5 text-[12px] text-white/30 hover:text-white/70 transition-colors duration-300",children:[A.jsx(Vv,{className:"h-3.5 w-3.5"})," Reset"]})]}),A.jsx("div",{className:"grid grid-cols-3 gap-2 w-full max-w-[280px]",children:e.map((M,b)=>A.jsxs("button",{onClick:()=>_(b),disabled:!!M||f,className:`relative aspect-square flex items-center justify-center rounded-[14px] border transition-all duration-300
              ${l.includes(b)?"border-white/60 bg-white/10":"border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/5"}
              ${!M&&!f?"cursor-pointer":"cursor-default"}
            `,children:[M==="X"&&A.jsx("span",{className:"text-white text-4xl leading-none font-bold",children:"✕"}),M==="O"&&A.jsx("span",{className:"text-white/40 text-4xl leading-none font-bold",children:"◯"})]},b))}),r==="won"&&A.jsxs("div",{className:"flex items-center gap-2 text-white animate-pulse",children:[A.jsx(Xv,{className:"h-4 w-4"}),A.jsx("span",{className:"text-[13px] font-medium",children:"Portfolio unlocked"})]})]})}const mn={name:"Manasa Rammohan",tagline:"A jack of all trades is a master of none, but oftentimes better than a master of one.",quote:"Life is not about finding yourself, it's about creating yourself — George Bernard Shaw",locationLine1:"Kreuzberg",locationLine2:"Berlin, Germany",email:"Manasa.Rammohan@outlook.com",linkedin:"https://www.linkedin.com/in/manasarammohan",bio:"Professionally, I like creating content that helps communicate with ease. My work blends strategy, design, and storytelling to deliver content that looks strong and performs well across digital platforms. Personally, I like being funny.",roles:["Economics, Banking & Finance Graduate","Private Equity Analyst","Content & Presentation Designer"]},qv=[{value:"1st",label:"in Switzerland — Bloomberg Global Trading Challenge",sub:"Top 50 worldwide out of 1,750+ teams (09/2023–12/2023)"},{value:"4",label:"countries lived in",sub:"India · Singapore · Switzerland · Germany"},{value:"7",label:"languages",sub:"English C1 · Hindi C1 · Tamil & Kannada C2 · German A2 · Japanese & Korean A2"}],$v=[{role:"Private Equity Analyst Intern",company:"Asymmetrica Investments AG",location:"Zug, Switzerland",period:"09/2024 – 01/2025",tags:["PE","CRM","Due Diligence","Investor Decks"],points:["Diagnosed a **3%** cold-outreach baseline across **200+** VC contacts, rebuilt CRM messaging and targeted **100+** HNW stakeholders, reaching **~15%** response rate within **2 weeks**.","Rebuilt **5** investor presentations from scratch tailored to investor theses (including AVO Oro Verde avocado-orchard investment vehicle in Mexico) and wrote financial product one-pagers.","Ran on-site feasibility due diligence on a **CHF 6.6mn** real estate deal, uncovering untapped development potential. Converted **4** leads from **50+** mapped family offices."]},{role:"Summer Intern, Business Finance",company:"Ki Mobility Solutions, TVS Group",location:"Chennai, India",period:"06/2024 – 08/2024",tags:["Finance Ops","Excel","Invoicing"],points:["Processed **1,000+** daily financial entries in Excel for a team managing **$1.4M** in monthly turnover.","Handled **50+** invoices and credit/debit notes daily with full reconciliation."]},{role:"Summer Intern, Branch Banking Operations",company:"Axis Bank Ltd.",location:"Chennai, India",period:"06/2022 – 07/2022",tags:["Research","RBI Policy","KYC"],points:["Authored **3** internal research reports on RBI policy moves (repo rates, inflation).","Guided **200+** customers through KYC verification workflows."]},{role:"Market Researcher",company:"Avere Advisors",location:"Dubai, UAE",period:"06/2021 – 11/2021",tags:["Market Research","Positioning","Databases"],points:["Identified a youth-first nostalgia positioning strategy in a **20-page** two-country feasibility study.","Built a **500-firm** UAE database for outbound business development."]}],Kv=[{id:"masters-thesis",title:"Digital Transactions & Financial Inclusion",type:"Master's Thesis",period:"12/2025 – 05/2026",summary:"A comparative 8-country study examining how digital transaction infrastructure expands (or limits) financial inclusion across emerging and developed markets.",methods:["4 theoretical frameworks","41 analytical codes","Cross-country comparison"],scope:"8 countries · Mixed methods"},{id:"swiss-banks",title:"Digitalization in Swiss Banks and FinTechs",type:"Co-Authored Research Paper",period:"09/2024 – 01/2025",summary:"Assessed the impact of AI and mobile banking on customer satisfaction across Swiss financial institutions using correlation and rank-order statistical tests.",methods:["Pearson correlation","Spearman rank","Kendall Tau"],scope:"Swiss banks & FinTechs"},{id:"uk-challenger",title:"UK Challenger Banks",type:"Co-Authored Research Paper",period:"10/2023 – 01/2024",summary:"Examined how Open Banking and API infrastructure are disrupting legacy banking models in the United Kingdom, with a focus on challenger bank competitiveness.",methods:["Open Banking analysis","API infrastructure mapping","Case studies"],scope:"UK banking sector"},{id:"bitcoin-fiat",title:"Bitcoin as a Viable Alternative to Fiat Money",type:"Bachelor's Thesis",period:"11/2022 – 03/2023",summary:"Synthesized 40+ research papers on Bitcoin viability as fiat alternative and proposed a regulatory framework anchored on India's e-RUPI digital currency infrastructure.",methods:["Literature synthesis (40+ papers)","Regulatory framework design","e-RUPI integration"],scope:"Regulatory proposal · India focus"}],Zv=[{id:"presentation-decks",title:"Presentation Decks",context:"Investor & academic decks",date:"2023 – 2024",description:"Crafted investor presentations, seminar decks, and academic slide decks — blending data clarity with visual storytelling. Includes behavioral finance seminars and brand strategy pitches.",aesthetic:"Data storytelling",image:"https://images.pexels.com/photos/9034728/pexels-photo-9034728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",images:["/images/Presentation deck/Copy_of_House_Money_Effect_Presentation_1.png","/images/Presentation deck/Copy_of_House_Money_Effect_Presentation_2.png","/images/Presentation deck/Copy_of_House_Money_Effect_Presentation_3.png","/images/Presentation deck/Copy_of_House_Money_Effect_Presentation_4.png","/images/Presentation deck/Brand_Pitch_Presentation_1.png","/images/Presentation deck/Brand_Pitch_Presentation_2.png","/images/Presentation deck/Brand_Pitch_Presentation_3.png","/images/Presentation deck/Brand_Pitch_Presentation_4.png"]},{id:"posters",title:"Posters",context:"Event & campaign posters",date:"2023",description:"Designed eye-catching A3 posters for university summits, events, and campaigns — combining bold typography with striking imagery to communicate messages at a glance.",aesthetic:"Bold · Typographic",image:"https://images.pexels.com/photos/29501720/pexels-photo-29501720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",images:["/images/Posters/Circular_Economy_of_Waste_Management_YES_2023.png","/images/Posters/Circular_Economy_of_Waste_Management_YES_Post_2023.png","/images/Posters/City_Planning_YES_2023.png","/images/Posters/City_Planning_YES_Post_2023.png","/images/Posters/Decarbonising_the_primary_sector_YES_2023.png","/images/Posters/Decarbonising_the_primary_sector_YES_Post_2023.png","/images/Posters/Disaster_Relief_and_Response_Poster_YES_2023.png","/images/Posters/Disaster_Relief_and_Response_Poster_YES_Post_2023.png","/images/Posters/Fashionomics_of_Climate_Change_YES_2023.png","/images/Posters/Fashionomics_of_Climate_Change_YES_Post_2023.png","/images/Posters/International_Cooperation_YES_2023.png","/images/Posters/International_Cooperation_YES_Post_2023.png","/images/Posters/Planned_Reinforment_for_Climate_YES_2023.png","/images/Posters/Planned_Reinforment_for_Climate_YES_Post_2023.png","/images/Posters/Sustainable_Energy_YES_2023.png","/images/Posters/Sustainable_Energy_YES_Post_2023.png","/images/Posters/The_4th_Pillar_YES_2023.png","/images/Posters/The_4th_Pillar_YES_Post_2023.png","/images/Posters/Trade_and_Sustainable_Development_YES_2023.png","/images/Posters/Trade_and_Sustainable_Development_YES_Post_2023.png","/images/Posters/Asymmetrica_Poster_1.png","/images/Posters/Asymmetrica_Poster_2.png","/images/Posters/Asymmetrica_Poster_3.png","/images/Posters/akirolabs_interview_poster_1.png","/images/Posters/akirolabs_interview_poster_2.png","/images/Posters/akirolabs_interview_poster_3.png"]},{id:"banners",title:"Banners",context:"Event & promotional banners",date:"2023",description:"Designed large-format banners for events, conferences, and promotional campaigns — combining bold visuals with clear messaging for maximum impact at a distance.",aesthetic:"Bold · Large-format",image:"https://images.pexels.com/photos/34659828/pexels-photo-34659828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",images:["/images/Banners/Bright_Banner_YES_2023.png","/images/Banners/Green_Banner_YES_2023.png","/images/Banners/Vertical_Banner_YES_2023.png"]},{id:"brochures",title:"Brochures",context:"Print & informational collateral",date:"2023 – 2025",description:"Produced brochures for events, organizations, and marketing campaigns — from concept to print-ready design with attention to layout, color, and brand consistency.",aesthetic:"Print · Brand-consistent",image:"https://images.pexels.com/photos/7648516/pexels-photo-7648516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",images:["/images/Brochure/YES_2023_Brochure_Side_1.png","/images/Brochure/YES_2023_Brochure_Side_2.png","/images/Brochure/Asymmetrica_Brochure_Side_1.png","/images/Brochure/Asymmetrica_Brochure_Side_2.png"]},{id:"email-marketing",title:"Email Marketing",context:"CRM & outreach campaigns",date:"2023 – 2025",description:"Built CRM cold-outreach email sequences and marketing newsletters — rebuilding messaging frameworks that lifted response rates from 3% to ~15% for investor outreach.",aesthetic:"CRM · Conversion-focused",image:"https://images.pexels.com/photos/7821760/pexels-photo-7821760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",images:["/images/Email Marketing/Email_Marketing_YES_2023.png","/images/Email Marketing/Email_Marketing_Asymmetrica.png","/images/Email Marketing/Cold_Email_Marketing_akirolabs.png"]},{id:"digital-content",title:"Digital Content Creation",context:"Social & multimedia content",date:"2021 – 2025",description:"Created digital content across social platforms — from video editing and graphic design to multimedia storytelling that performs well across digital channels.",aesthetic:"Multimedia · Social-first",image:"https://images.pexels.com/photos/39694504/pexels-photo-39694504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",images:["https://images.pexels.com/photos/39694504/pexels-photo-39694504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"]}],Jv=[{id:"dash-dine-eco",title:"Dash & Dine Eco",period:"03/2025 – 04/2025",summary:"An all-in-one grocery aggregator concept featuring dynamic end-of-day pricing to reduce food waste and a green sustainability meter, peer-validated with positive user feedback.",highlights:["Dynamic end-of-day pricing","Green sustainability meter","Peer-validated concept"],image:"https://images.pexels.com/photos/6591159/pexels-photo-6591159.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",accent:"from-emerald-400 to-teal-500"},{id:"fintech-budget",title:"FinTech Budget App Prototype",period:"12/2024 – 01/2025",summary:"An agile-built finance app prototype featuring a Spotify Wrapped-style personal budget summary, singled out as a standout concept by an industry consultant.",highlights:["Spotify Wrapped-style summary","Agile-built prototype","Consultant-recognized standout"],image:"https://images.pexels.com/photos/9169178/pexels-photo-9169178.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",accent:"from-pink-400 to-rose-500"},{id:"blockchain-land-registry",title:"Blockchain Land Registry Mock App",period:"09/2024 – 12/2024",summary:"A mock data-sharing application designed for property registries, banks, and brokers to modernize real estate records using DLT/blockchain, benchmarked against Sweden and Dubai.",highlights:["DLT/blockchain-based","Benchmarks: Sweden & Dubai","Multi-party data sharing"],image:"https://images.pexels.com/photos/30547618/pexels-photo-30547618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",accent:"from-cyan-400 to-blue-500"}],cl={core:["Market & Competitive Research","Presentation & Content Design","Campaign & CRM Targeting","Go-to-Market & Messaging Strategy","Stakeholder Communication","Prompt Engineering"],tools:["Microsoft 365","Bloomberg Terminal","Python","PowerBI","Canva","Figma","Lovable"],ai:["Claude","ChatGPT","Perplexity","Gemini","Kimi"],certifications:["AI Product Manager (Microsoft)","Claude AI for Finance","Graphic Design & Visualisation (Domestika)","Introduction to ESG (CFI)"]},$p=[{src:"/images/beach.jpeg",title:"Seaside",category:"Travel",caption:"Sun and sand by the coast."},{src:"/images/budapest.jpeg",title:"Budapest",category:"Travel",caption:"Architecture along the Danube."},{src:"/images/cherry-blossom.jpeg",title:"Cherry Blossom",category:"Travel",caption:"Spring blooms in full display."},{src:"/images/church.jpeg",title:"Cathedral",category:"Travel",caption:"Light through stained glass."},{src:"/images/dandelions.jpeg",title:"Dandelions",category:"Travel",caption:"A field of golden flowers."},{src:"/images/ferris-wheel.jpeg",title:"Ferris Wheel",category:"Travel",caption:"City lights from above."},{src:"/images/frankfurt.jpeg",title:"Frankfurt",category:"Travel",caption:"Skyline at golden hour."},{src:"/images/hiking.jpeg",title:"Hiking Trail",category:"Travel",caption:"Views from the trail."},{src:"/images/lavender.jpeg",title:"Lavender Fields",category:"Travel",caption:"Rows of purple as far as the eye sees."},{src:"/images/monaco.jpeg",title:"Monaco",category:"Travel",caption:"Harbor views on the Riviera."},{src:"/images/mountain.jpeg",title:"Mountains",category:"Travel",caption:"Peaks above the clouds."},{src:"/images/museum-road-signs.jpeg",title:"Museum Road Signs",category:"Travel",caption:"Signs pointing every which way."},{src:"/images/museum.jpeg",title:"Museum",category:"Travel",caption:"Art and architecture indoors."},{src:"/images/peacock.jpeg",title:"Peacock",category:"Travel",caption:"A peacock displaying its colors."},{src:"/images/fondue.jpeg",title:"Fondue",category:"Food",caption:"Swiss melted cheese at its finest."},{src:"/images/pancake.jpeg",title:"Pancakes",category:"Food",caption:"A stack worth waking up for."},{src:"/images/catto.jpeg",title:"Catto",category:"Cats",caption:"A cat with attitude."},{src:"/images/lucy-with-teddy.jpeg",title:"Lucy & Teddy",category:"Cats",caption:"Lucy with her favorite teddy."},{src:"/images/lucy-yawning.jpeg",title:"Lucy Yawning",category:"Cats",caption:"A big stretch from Lucy."},{src:"/images/manse_cruiseburg.jpeg",title:"Cruiseburg",category:"Personal",caption:"Out and about in Cruiseburg."},{src:"/images/manse-in-eze.jpeg",title:"Èze",category:"Personal",caption:"Exploring the village of Èze."},{src:"/images/manse-in-korea.jpeg",title:"Korea",category:"Personal",caption:"A moment in Korea."}],Qv=["/images/cherry-blossom.jpeg","/images/lavender.jpeg","/images/peacock.jpeg","/images/fondue.jpeg","/images/pancake.jpeg","/images/catto.jpeg","/images/lucy-with-teddy.jpeg","/images/beach.jpeg","/images/monaco.jpeg"];function e_({onUnlock:s}){const[e,n]=Nt.useState(!1),r=()=>{e||(n(!0),setTimeout(()=>s(),1200))};return A.jsxs("div",{className:`min-h-screen w-full bg-black relative overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${e?"opacity-0 scale-[1.03]":"opacity-100"}`,children:[A.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-[0.03]",style:{backgroundImage:"linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",backgroundSize:"80px 80px"}}),A.jsxs("div",{className:"relative z-10 min-h-screen flex flex-col",children:[A.jsxs("header",{className:"flex items-center justify-between px-6 sm:px-10 py-7",children:[A.jsxs("div",{className:"flex items-center gap-2 text-white/40",children:[A.jsx(Bv,{className:"h-3.5 w-3.5"}),A.jsx("span",{className:"text-[11px] tracking-[0.25em] uppercase font-light",children:"Portfolio"})]}),A.jsx("span",{className:"text-[11px] tracking-wide text-white/30 hidden sm:block",children:"Berlin · Kreuzberg"})]}),A.jsxs("main",{className:"flex-1 flex flex-col items-center justify-center px-6 sm:px-10 pb-12",children:[A.jsxs("div",{className:"text-center max-w-3xl mb-10 sm:mb-14",children:[A.jsx("p",{className:"text-[11px] tracking-[0.25em] uppercase text-white/40 mb-6 animate-[fadeInSlow_1s_ease]",children:"Welcome to Manasa's Pandora"}),A.jsx("h1",{className:"text-5xl sm:text-7xl font-medium text-white tracking-tight leading-[1.02] animate-[fadeIn_0.8s_ease]",children:mn.name}),A.jsx("p",{className:"mt-6 text-base sm:text-lg text-white/50 italic max-w-xl mx-auto leading-relaxed font-serif animate-[fadeIn_1s_ease]",children:mn.quote})]}),A.jsxs("div",{className:"flex flex-col items-center gap-5 rounded-[28px] border border-white/10 bg-white/[0.02] p-7 sm:p-9 animate-[fadeIn_1.2s_ease] w-full max-w-md",children:[A.jsxs("div",{className:"text-center",children:[A.jsx("h2",{className:"text-2xl font-medium text-white",children:"Beat the AI to unlock"}),A.jsxs("p",{className:"text-[12px] text-white/40 mt-1.5",children:["Play Tic-Tac-Toe · you are"," ",A.jsx("span",{className:"text-white font-medium",children:"✕"})," · AI is"," ",A.jsx("span",{className:"text-white/50 font-medium",children:"◯"})]})]}),A.jsx(Yv,{onWin:r})]}),A.jsxs("button",{onClick:r,className:"mt-12 group flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/20 text-white font-light text-[13px] tracking-wide hover:bg-white hover:text-black transition-all duration-500 animate-[fadeIn_1.4s_ease]",children:["Skip & Unlock Portfolio",A.jsx(Nv,{className:"h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"})]})]})]})]})}const Kp=[{id:"about",label:"About"},{id:"experience",label:"Experience"},{id:"research",label:"Research"},{id:"creative",label:"Creative"},{id:"products",label:"Products"},{id:"skills",label:"Skills"},{id:"life",label:"Life"}];function t_({onHome:s}){const[e,n]=Nt.useState(!1),[r,o]=Nt.useState(!1);Nt.useEffect(()=>{const u=()=>n(window.scrollY>50);return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]);const l=u=>{document.getElementById(u)?.scrollIntoView({behavior:"smooth"}),o(!1)};return A.jsxs("header",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${e?"bg-black/80 backdrop-blur-xl border-b border-white/10":"bg-transparent"}`,children:[A.jsxs("nav",{className:"max-w-5xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("button",{onClick:s,"aria-label":"Return to home",title:"Return to home",className:"text-white/60 hover:text-white transition-colors duration-300",children:A.jsx(Ov,{className:"h-4 w-4"})}),A.jsxs("button",{onClick:()=>l("about"),className:"text-base font-medium text-white tracking-tight",children:[A.jsx("span",{className:"font-serif text-lg",children:"M"}),"R"]})]}),A.jsx("div",{className:"hidden md:flex items-center gap-0.5",children:Kp.map(u=>A.jsx("button",{onClick:()=>l(u.id),className:"px-3.5 py-1.5 text-[13px] text-white/50 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/10",children:u.label},u.id))}),A.jsx("button",{onClick:()=>o(!r),className:"md:hidden text-white/60",children:r?A.jsx(Zs,{className:"h-5 w-5"}):A.jsx(zv,{className:"h-5 w-5"})})]}),r&&A.jsx("div",{className:"md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex flex-col gap-0.5 animate-[fadeIn_0.2s_ease]",children:Kp.map(u=>A.jsx("button",{onClick:()=>l(u.id),className:"py-2.5 text-[14px] text-white/70 hover:text-white transition-colors duration-300 text-left",children:u.label},u.id))})]})}function Nr(){const s=Nt.useRef(null);return Nt.useEffect(()=>{const e=s.current;if(!e)return;const n=e.querySelectorAll(".reveal"),r=new IntersectionObserver(o=>{o.forEach(l=>{l.isIntersecting&&(l.target.classList.add("revealed"),r.unobserve(l.target))})},{threshold:.15,rootMargin:"0px 0px -40px 0px"});return n.forEach(o=>r.observe(o)),()=>r.disconnect()},[]),s}const rf="186",n_=0,Zp=1,i_=2,Ll=1,r_=2,Xa=3,ns=0,Hn=1,Ki=2,Ji=0,Ya=1,Jp=2,Qp=3,em=4,s_=5,Ws=100,a_=101,o_=102,l_=103,c_=104,u_=200,d_=201,f_=202,h_=203,ng=204,ig=205,p_=206,m_=207,g_=208,v_=209,__=210,x_=211,y_=212,S_=213,M_=214,fd=0,hd=1,pd=2,qa=3,md=4,gd=5,vd=6,_d=7,rg=0,E_=1,w_=2,Li=0,sg=1,ag=2,og=3,lg=4,cg=5,ug=6,dg=7,fg=300,is=301,$s=302,Ru=303,Pu=304,Wl=306,xd=1e3,Zi=1001,yd=1002,xn=1003,T_=1004,ul=1005,An=1006,Nu=1007,es=1008,$n=1009,hg=1010,pg=1011,$a=1012,sf=1013,Di=1014,Pi=1015,Ii=1016,af=1017,of=1018,Ka=1020,mg=35902,gg=35899,vg=1021,_g=1022,Si=1023,nr=1026,ts=1027,xg=1028,lf=1029,rs=1030,cf=1031,uf=1033,Dl=33776,Il=33777,Ul=33778,Fl=33779,Sd=35840,Md=35841,Ed=35842,wd=35843,Td=36196,bd=37492,Ad=37496,Cd=37488,Rd=37489,Bl=37490,Pd=37491,Nd=37808,Ld=37809,Dd=37810,Id=37811,Ud=37812,Fd=37813,kd=37814,Od=37815,Bd=37816,zd=37817,Hd=37818,Vd=37819,Gd=37820,Wd=37821,Xd=36492,jd=36494,Yd=36495,qd=36283,$d=36284,zl=36285,Kd=36286,b_=3200,Zd=0,A_=1,Rr="",qn="srgb",Hl="srgb-linear",Vl="linear",It="srgb",Lu=7680,C_=519,R_=512,P_=513,N_=514,df=515,L_=516,D_=517,ff=518,I_=519,U_=35044,tm="300 es",Ni=2e3,Za=2001;function F_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ja(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function k_(){const s=Ja("canvas");return s.style.display="block",s}const nm={};function im(...s){const e="THREE."+s.shift();console.log(e,...s)}function yg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function st(...s){s=yg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Ct(...s){s=yg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function Ys(...s){const e=s.join(" ");e in nm||(nm[e]=!0,st(...s))}function O_(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const B_={[fd]:hd,[pd]:vd,[md]:_d,[qa]:gd,[hd]:fd,[vd]:pd,[_d]:md,[gd]:qa};class ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Du=Math.PI/180,Jd=180/Math.PI;function eo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[n&63|128]+Tn[n>>8&255]+"-"+Tn[n>>16&255]+Tn[n>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function xt(s,e,n){return Math.max(e,Math.min(n,s))}function z_(s,e){return(s%e+e)%e}function Iu(s,e,n){return(1-n)*s+n*e}function Oa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const _f=class _f{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_f.prototype.isVector2=!0;let St=_f;class Js{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,f){let p=r[o+0],m=r[o+1],v=r[o+2],_=r[o+3],g=l[u+0],M=l[u+1],b=l[u+2],R=l[u+3];if(_!==R||p!==g||m!==M||v!==b){let y=p*g+m*M+v*b+_*R;y<0&&(g=-g,M=-M,b=-b,R=-R,y=-y);let x=1-f;if(y<.9995){const F=Math.acos(y),j=Math.sin(F);x=Math.sin(x*F)/j,f=Math.sin(f*F)/j,p=p*x+g*f,m=m*x+M*f,v=v*x+b*f,_=_*x+R*f}else{p=p*x+g*f,m=m*x+M*f,v=v*x+b*f,_=_*x+R*f;const F=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=F,m*=F,v*=F,_*=F}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,l,u){const f=r[o],p=r[o+1],m=r[o+2],v=r[o+3],_=l[u],g=l[u+1],M=l[u+2],b=l[u+3];return e[n]=f*b+v*_+p*M-m*g,e[n+1]=p*b+v*g+m*_-f*M,e[n+2]=m*b+v*M+f*g-p*_,e[n+3]=v*b-f*_-p*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,m=f(r/2),v=f(o/2),_=f(l/2),g=p(r/2),M=p(o/2),b=p(l/2);switch(u){case"XYZ":this._x=g*v*_+m*M*b,this._y=m*M*_-g*v*b,this._z=m*v*b+g*M*_,this._w=m*v*_-g*M*b;break;case"YXZ":this._x=g*v*_+m*M*b,this._y=m*M*_-g*v*b,this._z=m*v*b-g*M*_,this._w=m*v*_+g*M*b;break;case"ZXY":this._x=g*v*_-m*M*b,this._y=m*M*_+g*v*b,this._z=m*v*b+g*M*_,this._w=m*v*_-g*M*b;break;case"ZYX":this._x=g*v*_-m*M*b,this._y=m*M*_+g*v*b,this._z=m*v*b-g*M*_,this._w=m*v*_+g*M*b;break;case"YZX":this._x=g*v*_+m*M*b,this._y=m*M*_+g*v*b,this._z=m*v*b-g*M*_,this._w=m*v*_-g*M*b;break;case"XZY":this._x=g*v*_-m*M*b,this._y=m*M*_-g*v*b,this._z=m*v*b+g*M*_,this._w=m*v*_+g*M*b;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],f=n[5],p=n[9],m=n[2],v=n[6],_=n[10],g=r+f+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-p)*M,this._y=(l-m)*M,this._z=(u-o)*M}else if(r>f&&r>_){const M=2*Math.sqrt(1+r-f-_);this._w=(v-p)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+m)/M}else if(f>_){const M=2*Math.sqrt(1+f-r-_);this._w=(l-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+_-r-f);this._w=(u-o)/M,this._x=(l+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,f=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+u*f+o*m-l*p,this._y=o*v+u*p+l*f-r*m,this._z=l*v+u*m+r*p-o*f,this._w=u*v-r*f-o*p-l*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let p=1-n;if(f<.9995){const m=Math.acos(f),v=Math.sin(m);p=Math.sin(p*m)/v,n=Math.sin(n*m)/v,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xf=class xf{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,p=e.w,m=2*(u*o-f*r),v=2*(f*n-l*o),_=2*(l*r-u*n);return this.x=n+p*m+u*_-f*v,this.y=r+p*v+f*m-l*_,this.z=o+p*_+l*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-l*f,this.y=l*u-r*p,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Uu.copy(this).projectOnVector(e),this.sub(Uu)}reflect(e){return this.sub(Uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xf.prototype.isVector3=!0;let le=xf;const Uu=new le,rm=new Js,yf=class yf{constructor(e,n,r,o,l,u,f,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,p,m)}set(e,n,r,o,l,u,f,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=n,v[4]=l,v[5]=p,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[3],p=r[6],m=r[1],v=r[4],_=r[7],g=r[2],M=r[5],b=r[8],R=o[0],y=o[3],x=o[6],F=o[1],j=o[4],C=o[7],D=o[2],L=o[5],k=o[8];return l[0]=u*R+f*F+p*D,l[3]=u*y+f*j+p*L,l[6]=u*x+f*C+p*k,l[1]=m*R+v*F+_*D,l[4]=m*y+v*j+_*L,l[7]=m*x+v*C+_*k,l[2]=g*R+M*F+b*D,l[5]=g*y+M*j+b*L,l[8]=g*x+M*C+b*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],v=e[8];return n*u*v-n*f*m-r*l*v+r*f*p+o*l*m-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],v=e[8],_=v*u-f*m,g=f*p-v*l,M=m*l-u*p,b=n*_+r*g+o*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=_*R,e[1]=(o*m-v*r)*R,e[2]=(f*r-o*u)*R,e[3]=g*R,e[4]=(v*n-o*p)*R,e[5]=(o*l-f*n)*R,e[6]=M*R,e[7]=(r*p-m*n)*R,e[8]=(u*n-r*l)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,f){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*f)+u+e,-o*m,o*p,-o*(-m*u+p*f)+f+n,0,0,1),this}scale(e,n){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fu.makeScale(e,n)),this}rotate(e){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fu.makeRotation(-e)),this}translate(e,n){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yf.prototype.isMatrix3=!0;let ot=yf;const Fu=new ot,sm=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),am=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H_(){const s={enabled:!0,workingColorSpace:Hl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===It&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=qs(o.r),o.g=qs(o.g),o.b=qs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Rr?Vl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Hl]:{primaries:e,whitePoint:r,transfer:Vl,toXYZ:sm,fromXYZ:am,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:r,transfer:It,toXYZ:sm,fromXYZ:am,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),s}const _t=H_();function Qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ps;class V_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ps===void 0&&(Ps=Ja("canvas")),Ps.width=e.width,Ps.height=e.height;const o=Ps.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ps}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ja("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Qi(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Qi(n[r]/255)*255):n[r]=Qi(n[r]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let G_=0;class hf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(ku(o[u].image)):l.push(ku(o[u]))}else l=ku(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function ku(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?V_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let W_=0;const Ou=new le;class Cn extends ss{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,r=Zi,o=Zi,l=An,u=es,f=Si,p=$n,m=Cn.DEFAULT_ANISOTROPY,v=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=eo(),this.name="",this.source=new hf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ou).x}get height(){return this.source.getSize(Ou).y}get depth(){return this.source.getSize(Ou).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xd:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xd:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=fg;Cn.DEFAULT_ANISOTROPY=1;const Sf=class Sf{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const p=e.elements,m=p[0],v=p[4],_=p[8],g=p[1],M=p[5],b=p[9],R=p[2],y=p[6],x=p[10];if(Math.abs(v-g)<.01&&Math.abs(_-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+R)<.1&&Math.abs(b+y)<.1&&Math.abs(m+M+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const j=(m+1)/2,C=(M+1)/2,D=(x+1)/2,L=(v+g)/4,k=(_+R)/4,w=(b+y)/4;return j>C&&j>D?j<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(j),o=L/r,l=k/r):C>D?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=L/o,l=w/o):D<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(D),r=k/l,o=w/l),this.set(r,o,l,n),this}let F=Math.sqrt((y-b)*(y-b)+(_-R)*(_-R)+(g-v)*(g-v));return Math.abs(F)<.001&&(F=1),this.x=(y-b)/F,this.y=(_-R)/F,this.z=(g-v)/F,this.w=Math.acos((m+M+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this.w=xt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this.w=xt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sf.prototype.isVector4=!0;let qt=Sf;class X_ extends ss{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},l=new Cn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new hf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends X_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Sg extends Cn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class j_ extends Cn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Gl=class Gl{constructor(e,n,r,o,l,u,f,p,m,v,_,g,M,b,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,p,m,v,_,g,M,b,R,y)}set(e,n,r,o,l,u,f,p,m,v,_,g,M,b,R,y){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=p,x[2]=m,x[6]=v,x[10]=_,x[14]=g,x[3]=M,x[7]=b,x[11]=R,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gl().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ns.setFromMatrixColumn(e,0).length(),l=1/Ns.setFromMatrixColumn(e,1).length(),u=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*v,M=u*_,b=f*v,R=f*_;n[0]=p*v,n[4]=-p*_,n[8]=m,n[1]=M+b*m,n[5]=g-R*m,n[9]=-f*p,n[2]=R-g*m,n[6]=b+M*m,n[10]=u*p}else if(e.order==="YXZ"){const g=p*v,M=p*_,b=m*v,R=m*_;n[0]=g+R*f,n[4]=b*f-M,n[8]=u*m,n[1]=u*_,n[5]=u*v,n[9]=-f,n[2]=M*f-b,n[6]=R+g*f,n[10]=u*p}else if(e.order==="ZXY"){const g=p*v,M=p*_,b=m*v,R=m*_;n[0]=g-R*f,n[4]=-u*_,n[8]=b+M*f,n[1]=M+b*f,n[5]=u*v,n[9]=R-g*f,n[2]=-u*m,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const g=u*v,M=u*_,b=f*v,R=f*_;n[0]=p*v,n[4]=b*m-M,n[8]=g*m+R,n[1]=p*_,n[5]=R*m+g,n[9]=M*m-b,n[2]=-m,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const g=u*p,M=u*m,b=f*p,R=f*m;n[0]=p*v,n[4]=R-g*_,n[8]=b*_+M,n[1]=_,n[5]=u*v,n[9]=-f*v,n[2]=-m*v,n[6]=M*_+b,n[10]=g-R*_}else if(e.order==="XZY"){const g=u*p,M=u*m,b=f*p,R=f*m;n[0]=p*v,n[4]=-_,n[8]=m*v,n[1]=g*_+R,n[5]=u*v,n[9]=M*_-b,n[2]=b*_-M,n[6]=f*v,n[10]=R*_+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y_,e,q_)}lookAt(e,n,r){const o=this.elements;return jn.subVectors(e,n),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Mr.crossVectors(r,jn),Mr.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Mr.crossVectors(r,jn)),Mr.normalize(),dl.crossVectors(jn,Mr),o[0]=Mr.x,o[4]=dl.x,o[8]=jn.x,o[1]=Mr.y,o[5]=dl.y,o[9]=jn.y,o[2]=Mr.z,o[6]=dl.z,o[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[4],p=r[8],m=r[12],v=r[1],_=r[5],g=r[9],M=r[13],b=r[2],R=r[6],y=r[10],x=r[14],F=r[3],j=r[7],C=r[11],D=r[15],L=o[0],k=o[4],w=o[8],I=o[12],V=o[1],q=o[5],J=o[9],re=o[13],Y=o[2],Q=o[6],he=o[10],te=o[14],K=o[3],O=o[7],G=o[11],P=o[15];return l[0]=u*L+f*V+p*Y+m*K,l[4]=u*k+f*q+p*Q+m*O,l[8]=u*w+f*J+p*he+m*G,l[12]=u*I+f*re+p*te+m*P,l[1]=v*L+_*V+g*Y+M*K,l[5]=v*k+_*q+g*Q+M*O,l[9]=v*w+_*J+g*he+M*G,l[13]=v*I+_*re+g*te+M*P,l[2]=b*L+R*V+y*Y+x*K,l[6]=b*k+R*q+y*Q+x*O,l[10]=b*w+R*J+y*he+x*G,l[14]=b*I+R*re+y*te+x*P,l[3]=F*L+j*V+C*Y+D*K,l[7]=F*k+j*q+C*Q+D*O,l[11]=F*w+j*J+C*he+D*G,l[15]=F*I+j*re+C*te+D*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],p=e[9],m=e[13],v=e[2],_=e[6],g=e[10],M=e[14],b=e[3],R=e[7],y=e[11],x=e[15],F=p*M-m*g,j=f*M-m*_,C=f*g-p*_,D=u*M-m*v,L=u*g-p*v,k=u*_-f*v;return n*(R*F-y*j+x*C)-r*(b*F-y*D+x*L)+o*(b*j-R*D+x*k)-l*(b*C-R*L+y*k)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],p=e[2],m=e[6],v=e[10];return n*(u*v-f*m)-r*(l*v-f*p)+o*(l*m-u*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],v=e[8],_=e[9],g=e[10],M=e[11],b=e[12],R=e[13],y=e[14],x=e[15],F=n*f-r*u,j=n*p-o*u,C=n*m-l*u,D=r*p-o*f,L=r*m-l*f,k=o*m-l*p,w=v*R-_*b,I=v*y-g*b,V=v*x-M*b,q=_*y-g*R,J=_*x-M*R,re=g*x-M*y,Y=F*re-j*J+C*q+D*V-L*I+k*w;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/Y;return e[0]=(f*re-p*J+m*q)*Q,e[1]=(o*J-r*re-l*q)*Q,e[2]=(R*k-y*L+x*D)*Q,e[3]=(g*L-_*k-M*D)*Q,e[4]=(p*V-u*re-m*I)*Q,e[5]=(n*re-o*V+l*I)*Q,e[6]=(y*C-b*k-x*j)*Q,e[7]=(v*k-g*C+M*j)*Q,e[8]=(u*J-f*V+m*w)*Q,e[9]=(r*V-n*J-l*w)*Q,e[10]=(b*L-R*C+x*F)*Q,e[11]=(_*C-v*L-M*F)*Q,e[12]=(f*I-u*q-p*w)*Q,e[13]=(n*q-r*I+o*w)*Q,e[14]=(R*j-b*D-y*F)*Q,e[15]=(v*D-_*j+g*F)*Q,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,f=e.y,p=e.z,m=l*u,v=l*f;return this.set(m*u+r,m*f-o*p,m*p+o*f,0,m*f+o*p,v*f+r,v*p-o*u,0,m*p-o*f,v*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,f=n._z,p=n._w,m=l+l,v=u+u,_=f+f,g=l*m,M=l*v,b=l*_,R=u*v,y=u*_,x=f*_,F=p*m,j=p*v,C=p*_,D=r.x,L=r.y,k=r.z;return o[0]=(1-(R+x))*D,o[1]=(M+C)*D,o[2]=(b-j)*D,o[3]=0,o[4]=(M-C)*L,o[5]=(1-(g+x))*L,o[6]=(y+F)*L,o[7]=0,o[8]=(b+j)*k,o[9]=(y-F)*k,o[10]=(1-(g+R))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),n.identity(),this;let u=Ns.set(o[0],o[1],o[2]).length();const f=Ns.set(o[4],o[5],o[6]).length(),p=Ns.set(o[8],o[9],o[10]).length();l<0&&(u=-u),vi.copy(this);const m=1/u,v=1/f,_=1/p;return vi.elements[0]*=m,vi.elements[1]*=m,vi.elements[2]*=m,vi.elements[4]*=v,vi.elements[5]*=v,vi.elements[6]*=v,vi.elements[8]*=_,vi.elements[9]*=_,vi.elements[10]*=_,n.setFromRotationMatrix(vi),r.x=u,r.y=f,r.z=p,this}makePerspective(e,n,r,o,l,u,f=Ni,p=!1){const m=this.elements,v=2*l/(n-e),_=2*l/(r-o),g=(n+e)/(n-e),M=(r+o)/(r-o);let b,R;if(p)b=l/(u-l),R=u*l/(u-l);else if(f===Ni)b=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===Za)b=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=_,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,l,u,f=Ni,p=!1){const m=this.elements,v=2/(n-e),_=2/(r-o),g=-(n+e)/(n-e),M=-(r+o)/(r-o);let b,R;if(p)b=1/(u-l),R=u/(u-l);else if(f===Ni)b=-2/(u-l),R=-(u+l)/(u-l);else if(f===Za)b=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=_,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=b,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Gl.prototype.isMatrix4=!0;let Jt=Gl;const Ns=new le,vi=new Jt,Y_=new le(0,0,0),q_=new le(1,1,1),Mr=new le,dl=new le,jn=new le,om=new Jt,lm=new Js;class Pr{constructor(e=0,n=0,r=0,o=Pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],p=o[1],m=o[5],v=o[9],_=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(om,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lm.setFromEuler(this),this.setFromQuaternion(lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pr.DEFAULT_ORDER="XYZ";class Mg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $_=0;const cm=new le,Ls=new Js,Xi=new Jt,fl=new le,Ba=new le,K_=new le,Z_=new Js,um=new le(1,0,0),dm=new le(0,1,0),fm=new le(0,0,1),hm={type:"added"},J_={type:"removed"},Ds={type:"childadded",child:null},Bu={type:"childremoved",child:null};class Rn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new le,n=new Pr,r=new Js,o=new le(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ot}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(um,e)}rotateY(e){return this.rotateOnAxis(dm,e)}rotateZ(e){return this.rotateOnAxis(fm,e)}translateOnAxis(e,n){return cm.copy(e).applyQuaternion(this.quaternion),this.position.add(cm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(um,e)}translateY(e){return this.translateOnAxis(dm,e)}translateZ(e){return this.translateOnAxis(fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?fl.copy(e):fl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Ba,fl,this.up):Xi.lookAt(fl,Ba,this.up),this.quaternion.setFromRotationMatrix(Xi),o&&(Xi.extractRotation(o.matrixWorld),Ls.setFromRotationMatrix(Xi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(J_),Bu.child=e,this.dispatchEvent(Bu),Bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,K_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,Z_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*r-l[8]*o,l[13]+=r-l[1]*n-l[5]*r-l[9]*o,l[14]+=o-l[2]*n-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),m=u(e.textures),v=u(e.images),_=u(e.shapes),g=u(e.skeletons),M=u(e.animations),b=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(f){const p=[];for(const m in f){const v=f[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rn.DEFAULT_UP=new le(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xs extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q_={type:"move"};class zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const R of e.hand.values()){const y=n.getJointPose(R,r),x=this._getHandJoint(m,R);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],g=v.position.distanceTo(_.position),M=.02,b=.005;m.inputState.pinching&&g>M+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Q_)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Xs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},hl={h:0,s:0,l:0};function Hu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Et{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=_t.workingColorSpace){return this.r=e,this.g=n,this.b=r,_t.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=_t.workingColorSpace){if(e=z_(e,1),n=xt(n,0,1),r=xt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Hu(u,l,e+1/3),this.g=Hu(u,l,e),this.b=Hu(u,l,e-1/3)}return _t.colorSpaceToWorking(this,o),this}setStyle(e,n=qn){function r(l){l!==void 0&&parseFloat(l)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const r=Eg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return _t.workingToColorSpace(bn.copy(this),e),Math.round(xt(bn.r*255,0,255))*65536+Math.round(xt(bn.g*255,0,255))*256+Math.round(xt(bn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=_t.workingColorSpace){_t.workingToColorSpace(bn.copy(this),n);const r=bn.r,o=bn.g,l=bn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let p,m;const v=(f+u)/2;if(f===u)p=0,m=0;else{const _=u-f;switch(m=v<=.5?_/(u+f):_/(2-u-f),u){case r:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-r)/_+2;break;case l:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=_t.workingColorSpace){return _t.workingToColorSpace(bn.copy(this),n),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=qn){_t.workingToColorSpace(bn.copy(this),e);const n=bn.r,r=bn.g,o=bn.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+n,Er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Er),e.getHSL(hl);const r=Iu(Er.h,hl.h,n),o=Iu(Er.s,hl.s,n),l=Iu(Er.l,hl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Et;Et.NAMES=Eg;class ex extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pr,this.environmentIntensity=1,this.environmentRotation=new Pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const _i=new le,ji=new le,Vu=new le,Yi=new le,Is=new le,Us=new le,pm=new le,Gu=new le,Wu=new le,Xu=new le,ju=new qt,Yu=new qt,qu=new qt;class yi{constructor(e=new le,n=new le,r=new le){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),_i.subVectors(e,n),o.cross(_i);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){_i.subVectors(o,n),ji.subVectors(r,n),Vu.subVectors(e,n);const u=_i.dot(_i),f=_i.dot(ji),p=_i.dot(Vu),m=ji.dot(ji),v=ji.dot(Vu),_=u*m-f*f;if(_===0)return l.set(0,0,0),null;const g=1/_,M=(m*p-f*v)*g,b=(u*v-f*p)*g;return l.set(1-M-b,b,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,n,r,o,l,u,f,p){return this.getBarycoord(e,n,r,o,Yi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Yi.x),p.addScaledVector(u,Yi.y),p.addScaledVector(f,Yi.z),p)}static getInterpolatedAttribute(e,n,r,o,l,u){return ju.setScalar(0),Yu.setScalar(0),qu.setScalar(0),ju.fromBufferAttribute(e,n),Yu.fromBufferAttribute(e,r),qu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ju,l.x),u.addScaledVector(Yu,l.y),u.addScaledVector(qu,l.z),u}static isFrontFacing(e,n,r,o){return _i.subVectors(r,n),ji.subVectors(e,n),_i.cross(ji).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),_i.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return yi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return yi.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,f;Is.subVectors(o,r),Us.subVectors(l,r),Gu.subVectors(e,r);const p=Is.dot(Gu),m=Us.dot(Gu);if(p<=0&&m<=0)return n.copy(r);Wu.subVectors(e,o);const v=Is.dot(Wu),_=Us.dot(Wu);if(v>=0&&_<=v)return n.copy(o);const g=p*_-v*m;if(g<=0&&p>=0&&v<=0)return u=p/(p-v),n.copy(r).addScaledVector(Is,u);Xu.subVectors(e,l);const M=Is.dot(Xu),b=Us.dot(Xu);if(b>=0&&M<=b)return n.copy(l);const R=M*m-p*b;if(R<=0&&m>=0&&b<=0)return f=m/(m-b),n.copy(r).addScaledVector(Us,f);const y=v*b-M*_;if(y<=0&&_-v>=0&&M-b>=0)return pm.subVectors(l,o),f=(_-v)/(_-v+(M-b)),n.copy(o).addScaledVector(pm,f);const x=1/(y+R+g);return u=R*x,f=g*x,n.copy(r).addScaledVector(Is,u).addScaledVector(Us,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class to{constructor(e=new le(1/0,1/0,1/0),n=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(xi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(xi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=xi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,xi):xi.fromBufferAttribute(l,u),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pl.copy(r.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),ml.subVectors(this.max,za),Fs.subVectors(e.a,za),ks.subVectors(e.b,za),Os.subVectors(e.c,za),wr.subVectors(ks,Fs),Tr.subVectors(Os,ks),$r.subVectors(Fs,Os);let n=[0,-wr.z,wr.y,0,-Tr.z,Tr.y,0,-$r.z,$r.y,wr.z,0,-wr.x,Tr.z,0,-Tr.x,$r.z,0,-$r.x,-wr.y,wr.x,0,-Tr.y,Tr.x,0,-$r.y,$r.x,0];return!$u(n,Fs,ks,Os,ml)||(n=[1,0,0,0,1,0,0,0,1],!$u(n,Fs,ks,Os,ml))?!1:(gl.crossVectors(wr,Tr),n=[gl.x,gl.y,gl.z],$u(n,Fs,ks,Os,ml))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qi=[new le,new le,new le,new le,new le,new le,new le,new le],xi=new le,pl=new to,Fs=new le,ks=new le,Os=new le,wr=new le,Tr=new le,$r=new le,za=new le,ml=new le,gl=new le,Kr=new le;function $u(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Kr.fromArray(s,l);const f=o.x*Math.abs(Kr.x)+o.y*Math.abs(Kr.y)+o.z*Math.abs(Kr.z),p=e.dot(Kr),m=n.dot(Kr),v=r.dot(Kr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>f)return!1}return!0}const rn=new le,vl=new St;let tx=0;class er extends ss{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tx++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=U_,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)vl.fromBufferAttribute(this,n),vl.applyMatrix3(e),this.setXY(n,vl.x,vl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix3(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Oa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Oa(n,this.array)),n}setX(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Oa(n,this.array)),n}setY(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Oa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Oa(n,this.array)),n}setW(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),r=zn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),r=zn(r,this.array),o=zn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),r=zn(r,this.array),o=zn(o,this.array),l=zn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class wg extends er{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Tg extends er{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class tr extends er{constructor(e,n,r){super(new Float32Array(e),n,r)}}const nx=new to,Ha=new le,Ku=new le;class pf{constructor(e=new le,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):nx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);const n=Ha.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ha,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(Ku)),this.expandByPoint(Ha.copy(e.center).sub(Ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ix=0;const ri=new Jt,Zu=new Rn,Bs=new le,Yn=new to,Va=new to,pn=new le;class ir extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F_(e)?Tg:wg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ot().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,n,r){return ri.makeTranslation(e,n,r),this.applyMatrix4(ri),this}scale(e,n,r){return ri.makeScale(e,n,r),this.applyMatrix4(ri),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new tr(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Va.setFromBufferAttribute(f),this.morphTargetsRelative?(pn.addVectors(Yn.min,Va.min),Yn.expandByPoint(pn),pn.addVectors(Yn.max,Va.max),Yn.expandByPoint(pn)):(Yn.expandByPoint(Va.min),Yn.expandByPoint(Va.max))}Yn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)pn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(pn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],p=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)pn.fromBufferAttribute(f,m),p&&(Bs.fromBufferAttribute(e,m),pn.add(Bs)),o=Math.max(o,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new er(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],p=[];for(let w=0;w<r.count;w++)f[w]=new le,p[w]=new le;const m=new le,v=new le,_=new le,g=new St,M=new St,b=new St,R=new le,y=new le;function x(w,I,V){m.fromBufferAttribute(r,w),v.fromBufferAttribute(r,I),_.fromBufferAttribute(r,V),g.fromBufferAttribute(l,w),M.fromBufferAttribute(l,I),b.fromBufferAttribute(l,V),v.sub(m),_.sub(m),M.sub(g),b.sub(g);const q=1/(M.x*b.y-b.x*M.y);isFinite(q)&&(R.copy(v).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(q),y.copy(_).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(q),f[w].add(R),f[I].add(R),f[V].add(R),p[w].add(y),p[I].add(y),p[V].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let w=0,I=F.length;w<I;++w){const V=F[w],q=V.start,J=V.count;for(let re=q,Y=q+J;re<Y;re+=3)x(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const j=new le,C=new le,D=new le,L=new le;function k(w){D.fromBufferAttribute(o,w),L.copy(D);const I=f[w];j.copy(I),j.sub(D.multiplyScalar(D.dot(I))).normalize(),C.crossVectors(L,I);const q=C.dot(p[w])<0?-1:1;u.setXYZW(w,j.x,j.y,j.z,q)}for(let w=0,I=F.length;w<I;++w){const V=F[w],q=V.start,J=V.count;for(let re=q,Y=q+J;re<Y;re+=3)k(e.getX(re+0)),k(e.getX(re+1)),k(e.getX(re+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new er(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new le,l=new le,u=new le,f=new le,p=new le,m=new le,v=new le,_=new le;if(e)for(let g=0,M=e.count;g<M;g+=3){const b=e.getX(g+0),R=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(n,b),l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,y),f.add(v),p.add(v),m.add(v),r.setXYZ(b,f.x,f.y,f.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)pn.fromBufferAttribute(e,n),pn.normalize(),e.setXYZ(n,pn.x,pn.y,pn.z)}toNonIndexed(){function e(f,p){const m=f.array,v=f.itemSize,_=f.normalized,g=new m.constructor(p.length*v);let M=0,b=0;for(let R=0,y=p.length;R<y;R++){f.isInterleavedBufferAttribute?M=p[R]*f.data.stride+f.offset:M=p[R]*v;for(let x=0;x<v;x++)g[b++]=m[M++]}return new er(g,v,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ir,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,r);n.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let v=0,_=m.length;v<_;v++){const g=m[v],M=e(g,r);p.push(M)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,g=m.length;_<g;_++){const M=m[_];v.push(M.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const l=e.morphAttributes;for(const m in l){const v=[],_=l[m];for(let g=0,M=_.length;g<M;g++)v.push(_[g].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const _=u[m];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ju=new le,rx=new le,sx=new ot;class Cr{constructor(e=new le(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Ju.subVectors(r,n).cross(rx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(Ju),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||sx.getNormalMatrix(e),o=this.coplanarPoint(Ju).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ax=0;class no extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=Ya,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ng,this.blendDst=ig,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lu,this.stencilZFail=Lu,this.stencilZPass=Lu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Cr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new St().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $i=new le,Qu=new le,_l=new le,xl=new le;class ox{constructor(e=new le,n=new le(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=$i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,n),$i.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Qu.copy(e).add(n).multiplyScalar(.5),_l.copy(n).sub(e).normalize(),xl.copy(this.origin).sub(Qu);const l=e.distanceTo(n)*.5,u=-this.direction.dot(_l),f=xl.dot(this.direction),p=-xl.dot(_l),m=xl.lengthSq(),v=Math.abs(1-u*u);let _,g,M,b;if(v>0)if(_=u*p-f,g=u*f-p,b=l*v,_>=0)if(g>=-b)if(g<=b){const R=1/v;_*=R,g*=R,M=_*(_+u*g+2*f)+g*(u*_+g+2*p)+m}else g=l,_=Math.max(0,-(u*g+f)),M=-_*_+g*(g+2*p)+m;else g=-l,_=Math.max(0,-(u*g+f)),M=-_*_+g*(g+2*p)+m;else g<=-b?(_=Math.max(0,-(-u*l+f)),g=_>0?-l:Math.min(Math.max(-l,-p),l),M=-_*_+g*(g+2*p)+m):g<=b?(_=0,g=Math.min(Math.max(-l,-p),l),M=g*(g+2*p)+m):(_=Math.max(0,-(u*l+f)),g=_>0?l:Math.min(Math.max(-l,-p),l),M=-_*_+g*(g+2*p)+m);else g=u>0?-l:l,_=Math.max(0,-(u*g+f)),M=-_*_+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Qu).addScaledVector(_l,g),M}intersectSphere(e,n){if(e.radius<0)return null;$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),o=$i.dot($i)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,f,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(f=(e.min.z-g.z)*_,p=(e.max.z-g.z)*_):(f=(e.max.z-g.z)*_,p=(e.min.z-g.z)*_),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,n,r,o,l){const u=this.origin,f=this.direction,p=f.x,m=f.y,v=f.z,_=e.x-u.x,g=e.y-u.y,M=e.z-u.z,b=n.x-u.x,R=n.y-u.y,y=n.z-u.z,x=r.x-u.x,F=r.y-u.y,j=r.z-u.z,C=Math.abs(p),D=Math.abs(m),L=Math.abs(v);let k,w,I,V,q,J,re,Y,Q,he,te,K;if(C>=D&&C>=L?(I=p,J=_,Q=b,K=x,p>=0?(k=m,w=v,V=g,q=M,re=R,Y=y,he=F,te=j):(k=v,w=m,V=M,q=g,re=y,Y=R,he=j,te=F)):D>=L?(I=m,J=g,Q=R,K=F,m>=0?(k=v,w=p,V=M,q=_,re=y,Y=b,he=j,te=x):(k=p,w=v,V=_,q=M,re=b,Y=y,he=x,te=j)):(I=v,J=M,Q=y,K=j,v>=0?(k=p,w=m,V=_,q=g,re=b,Y=R,he=x,te=F):(k=m,w=p,V=g,q=_,re=R,Y=b,he=F,te=x)),I===0)return null;const O=k/I,G=w/I,P=1/I,ie=V-O*J,ye=q-G*J,Ve=re-O*Q,De=Y-G*Q,Fe=he-O*K,ae=te-G*K,de=Fe*De-ae*Ve,Se=ie*ae-ye*Fe,Qe=Ve*ye-De*ie;if(o){if(de<0||Se<0||Qe<0)return null}else if((de<0||Se<0||Qe<0)&&(de>0||Se>0||Qe>0))return null;const Oe=de+Se+Qe;if(Oe===0)return null;const ct=P*(de*J+Se*Q+Qe*K);return(Oe>0?ct<0:ct>0)?null:this.at(ct/Oe,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bg extends no{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.combine=rg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mm=new Jt,Zr=new ox,yl=new pf,gm=new le,Sl=new le,Ml=new le,El=new le,ed=new le,wl=new le,vm=new le,Tl=new le;class ai extends Rn{constructor(e=new ir,n=new bg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){wl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const v=f[p],_=l[p];v!==0&&(ed.fromBufferAttribute(_,e),u?wl.addScaledVector(ed,v):wl.addScaledVector(ed.sub(n),v))}n.add(wl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(l),Zr.copy(e.ray).recast(e.near),!(yl.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(yl,gm)===null||Zr.origin.distanceToSquared(gm)>(e.far-e.near)**2))&&(mm.copy(l).invert(),Zr.copy(e.ray).applyMatrix4(mm),!(r.boundingBox!==null&&Zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Zr)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let b=0,R=g.length;b<R;b++){const y=g[b],x=u[y.materialIndex],F=Math.max(y.start,M.start),j=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let C=F,D=j;C<D;C+=3){const L=f.getX(C),k=f.getX(C+1),w=f.getX(C+2);o=bl(this,x,e,r,m,v,_,L,k,w),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const b=Math.max(0,M.start),R=Math.min(f.count,M.start+M.count);for(let y=b,x=R;y<x;y+=3){const F=f.getX(y),j=f.getX(y+1),C=f.getX(y+2);o=bl(this,u,e,r,m,v,_,F,j,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,R=g.length;b<R;b++){const y=g[b],x=u[y.materialIndex],F=Math.max(y.start,M.start),j=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let C=F,D=j;C<D;C+=3){const L=C,k=C+1,w=C+2;o=bl(this,x,e,r,m,v,_,L,k,w),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const b=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let y=b,x=R;y<x;y+=3){const F=y,j=y+1,C=y+2;o=bl(this,u,e,r,m,v,_,F,j,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function lx(s,e,n,r,o,l,u,f){let p;if(e.side===Hn?p=r.intersectTriangle(u,l,o,!0,f):p=r.intersectTriangle(o,l,u,e.side===ns,f),p===null)return null;Tl.copy(f),Tl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Tl);return m<n.near||m>n.far?null:{distance:m,point:Tl.clone(),object:s}}function bl(s,e,n,r,o,l,u,f,p,m){s.getVertexPosition(f,Sl),s.getVertexPosition(p,Ml),s.getVertexPosition(m,El);const v=lx(s,e,n,r,Sl,Ml,El,vm);if(v){const _=new le;yi.getBarycoord(vm,Sl,Ml,El,_),o&&(v.uv=yi.getInterpolatedAttribute(o,f,p,m,_,new St)),l&&(v.uv1=yi.getInterpolatedAttribute(l,f,p,m,_,new St)),u&&(v.normal=yi.getInterpolatedAttribute(u,f,p,m,_,new le),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:p,c:m,normal:new le,materialIndex:0};yi.getNormal(Sl,Ml,El,g.normal),v.face=g,v.barycoord=_}return v}class cx extends Cn{constructor(e=null,n=1,r=1,o,l,u,f,p,m=xn,v=xn,_,g){super(null,u,f,p,m,v,o,l,_,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jr=new pf,ux=new St(.5,.5),Al=new le;class mf{constructor(e=new Cr,n=new Cr,r=new Cr,o=new Cr,l=new Cr,u=new Cr){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ni,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],p=l[2],m=l[3],v=l[4],_=l[5],g=l[6],M=l[7],b=l[8],R=l[9],y=l[10],x=l[11],F=l[12],j=l[13],C=l[14],D=l[15];if(o[0].setComponents(m-u,M-v,x-b,D-F).normalize(),o[1].setComponents(m+u,M+v,x+b,D+F).normalize(),o[2].setComponents(m+f,M+_,x+R,D+j).normalize(),o[3].setComponents(m-f,M-_,x-R,D-j).normalize(),r)o[4].setComponents(p,g,y,C).normalize(),o[5].setComponents(m-p,M-g,x-y,D-C).normalize();else if(o[4].setComponents(m-p,M-g,x-y,D-C).normalize(),n===Ni)o[5].setComponents(m+p,M+g,x+y,D+C).normalize();else if(n===Za)o[5].setComponents(p,g,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const n=ux.distanceTo(e.center);return Jr.radius=.7071067811865476+n,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Al.x=o.normal.x>0?e.max.x:e.min.x,Al.y=o.normal.y>0?e.max.y:e.min.y,Al.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ag extends Cn{constructor(e=[],n=is,r,o,l,u,f,p,m,v){super(e,n,r,o,l,u,f,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qa extends Cn{constructor(e,n,r=Di,o,l,u,f=xn,p=xn,m,v=nr,_=1){if(v!==nr&&v!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:_};super(g,o,l,u,f,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class dx extends Qa{constructor(e,n=Di,r=is,o,l,u=xn,f=xn,p,m=nr){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,n,r,o,l,u,f,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cg extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qs extends ir{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],v=[],_=[];let g=0,M=0;b("z","y","x",-1,-1,r,n,e,u,l,0),b("z","y","x",1,-1,r,n,-e,u,l,1),b("x","z","y",1,1,e,r,n,o,u,2),b("x","z","y",1,-1,e,r,-n,o,u,3),b("x","y","z",1,-1,e,n,r,o,l,4),b("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new tr(m,3)),this.setAttribute("normal",new tr(v,3)),this.setAttribute("uv",new tr(_,2));function b(R,y,x,F,j,C,D,L,k,w,I){const V=C/k,q=D/w,J=C/2,re=D/2,Y=L/2,Q=k+1,he=w+1;let te=0,K=0;const O=new le;for(let G=0;G<he;G++){const P=G*q-re;for(let ie=0;ie<Q;ie++){const ye=ie*V-J;O[R]=ye*F,O[y]=P*j,O[x]=Y,m.push(O.x,O.y,O.z),O[R]=0,O[y]=0,O[x]=L>0?1:-1,v.push(O.x,O.y,O.z),_.push(ie/k),_.push(1-G/w),te+=1}}for(let G=0;G<w;G++)for(let P=0;P<k;P++){const ie=g+P+Q*G,ye=g+P+Q*(G+1),Ve=g+(P+1)+Q*(G+1),De=g+(P+1)+Q*G;p.push(ie,ye,De),p.push(ye,Ve,De),K+=6}f.addGroup(M,K,I),M+=K,g+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class io extends ir{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,f=Math.floor(r),p=Math.floor(o),m=f+1,v=p+1,_=e/f,g=n/p,M=[],b=[],R=[],y=[];for(let x=0;x<v;x++){const F=x*g-u;for(let j=0;j<m;j++){const C=j*_-l;b.push(C,-F,0),R.push(0,0,1),y.push(j/f),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let F=0;F<f;F++){const j=F+m*x,C=F+m*(x+1),D=F+1+m*(x+1),L=F+1+m*x;M.push(j,C,L),M.push(C,D,L)}this.setIndex(M),this.setAttribute("position",new tr(b,3)),this.setAttribute("normal",new tr(R,3)),this.setAttribute("uv",new tr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ks(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(_m(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(_m(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[n][r]=l}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Dn(s){const e={};for(let n=0;n<s.length;n++){const r=Ks(s[n]);for(const o in r)e[o]=r[o]}return e}function _m(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function fx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Rg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const hx={clone:Ks,merge:Dn};var px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends no{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=px,this.fragmentShader=mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=fx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Et().setHex(o.value);break;case"v2":this.uniforms[r].value=new St().fromArray(o.value);break;case"v3":this.uniforms[r].value=new le().fromArray(o.value);break;case"v4":this.uniforms[r].value=new qt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ot().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Jt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class gx extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class td extends no{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zd,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vx extends no{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _x extends no{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(xm(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!xm(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function xm(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class xx{constructor(e,n,r){const o=this;let l=!1,u=0,f=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this._abortController=null,this.itemStart=function(v){f++,l===!1&&o.onStart!==void 0&&o.onStart(v,u,f),l=!0},this.itemEnd=function(v){u++,o.onProgress!==void 0&&o.onProgress(v,u,f),u===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,_){return m.push(v,_),this},this.removeHandler=function(v){const _=m.indexOf(v);return _!==-1&&m.splice(_,2),this},this.getHandler=function(v){for(let _=0,g=m.length;_<g;_+=2){const M=m[_],b=m[_+1];if(M.global&&(M.lastIndex=0),M.test(v))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yx=new xx;class gf{constructor(e){this.manager=e!==void 0?e:yx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const r=this;return new Promise(function(o,l){r.load(e,o,n,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}gf.DEFAULT_MATERIAL_NAME="__DEFAULT";const zs=new WeakMap;class Sx extends gf{constructor(e){super(e)}load(e,n,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=nd.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){n&&n(u),l.manager.itemEnd(e)},0);else{let _=zs.get(u);_===void 0&&(_=[],zs.set(u,_)),_.push({onLoad:n,onError:o})}return u}const f=Ja("img");function p(){v(),n&&n(this);const _=zs.get(this)||[];for(let g=0;g<_.length;g++){const M=_[g];M.onLoad&&M.onLoad(this)}zs.delete(this),l.manager.itemEnd(e)}function m(_){v(),o&&o(_),nd.remove(`image:${e}`);const g=zs.get(this)||[];for(let M=0;M<g.length;M++){const b=g[M];b.onError&&b.onError(_)}zs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function v(){f.removeEventListener("load",p,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),nd.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class Mx extends gf{constructor(e){super(e)}load(e,n,r,o){const l=new Cn,u=new Sx(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){l.image=f,l.needsUpdate=!0,n!==void 0&&n(l)},r,o),l}}class Pg extends Rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const id=new Jt,ym=new le,Sm=new le;class Ex{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mf,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;ym.setFromMatrixPosition(e.matrixWorld),n.position.copy(ym),Sm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Sm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,r,o){id.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(id,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,p=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===Za||e.reversedDepth?n.set(.5*u,0,0,.5*u+p,0,.5*f,0,.5*f+m,0,0,1,0,0,0,0,1):n.set(.5*u,0,0,.5*u+p,0,.5*f,0,.5*f+m,0,0,.5,.5,0,0,0,1),n.multiply(id)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cl=new le,Rl=new Js,Ai=new le;class Ng extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cl,Rl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Cl,Rl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const br=new le,Mm=new St,Em=new St;class si extends Ng{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Du*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(Du*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,n){return this.getViewBounds(e,Mm,Em),n.subVectors(Em,Mm)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Du*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,n-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class vf extends Ng{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class wx extends Ex{constructor(){super(new vf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rd extends Pg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new wx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Tx extends Pg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Hs=-90,Vs=1;class bx extends Rn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new si(Hs,Vs,e,n);o.layers=this.layers,this.add(o);const l=new si(Hs,Vs,e,n);l.layers=this.layers,this.add(l);const u=new si(Hs,Vs,e,n);u.layers=this.layers,this.add(u);const f=new si(Hs,Vs,e,n);f.layers=this.layers,this.add(f);const p=new si(Hs,Vs,e,n);p.layers=this.layers,this.add(p);const m=new si(Hs,Vs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,f,p]=n;for(const m of n)this.remove(m);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Za)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,m,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,v),e.setRenderTarget(_,g,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Ax extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Mf=class Mf{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const l=this.elements;return l[0]=e,l[2]=n,l[1]=r,l[3]=o,this}};Mf.prototype.isMatrix2=!0;let wm=Mf;function Tm(s,e,n,r){const o=Cx(r);switch(n){case vg:return s*e;case xg:return s*e/o.components*o.byteLength;case lf:return s*e/o.components*o.byteLength;case rs:return s*e*2/o.components*o.byteLength;case cf:return s*e*2/o.components*o.byteLength;case _g:return s*e*3/o.components*o.byteLength;case Si:return s*e*4/o.components*o.byteLength;case uf:return s*e*4/o.components*o.byteLength;case Dl:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Md:case wd:return Math.max(s,16)*Math.max(e,8)/4;case Sd:case Ed:return Math.max(s,8)*Math.max(e,8)/2;case Td:case bd:case Cd:case Rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ad:case Bl:case Pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Id:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xd:case jd:case Yd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case qd:case $d:return Math.ceil(s/4)*Math.ceil(e/4)*8;case zl:case Kd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Cx(s){switch(s){case $n:case hg:return{byteLength:1,components:1};case $a:case pg:case Ii:return{byteLength:2,components:1};case af:case of:return{byteLength:2,components:4};case Di:case sf:case Pi:return{byteLength:4,components:1};case mg:case gg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rf}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rf);function Lg(){let s=null,e=!1,n=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),n(l,u)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Rx(s){const e=new WeakMap;function n(f,p){const m=f.array,v=f.usage,_=m.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,m,v),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,p,m){const v=p.array,_=p.updateRanges;if(s.bindBuffer(m,f),_.length===0)s.bufferSubData(m,0,v);else{_.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<_.length;M++){const b=_[g],R=_[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++g,_[g]=R)}_.length=g+1;for(let M=0,b=_.length;M<b;M++){const R=_[M];s.bufferSubData(m,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:l,update:u}}var Px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ox=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ey=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ty=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ay="gl_FragColor = linearToOutputTexel( gl_FragColor );",oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ly=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,my=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,My=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ay=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ry=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ly=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ky=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,By=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$y=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,aS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_S=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ES=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$S=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:Px,alphahash_pars_fragment:Nx,alphamap_fragment:Lx,alphamap_pars_fragment:Dx,alphatest_fragment:Ix,alphatest_pars_fragment:Ux,aomap_fragment:Fx,aomap_pars_fragment:kx,batching_pars_vertex:Ox,batching_vertex:Bx,begin_vertex:zx,beginnormal_vertex:Hx,bsdfs:Vx,iridescence_fragment:Gx,bumpmap_pars_fragment:Wx,clipping_planes_fragment:Xx,clipping_planes_pars_fragment:jx,clipping_planes_pars_vertex:Yx,clipping_planes_vertex:qx,color_fragment:$x,color_pars_fragment:Kx,color_pars_vertex:Zx,color_vertex:Jx,common:Qx,cube_uv_reflection_fragment:ey,defaultnormal_vertex:ty,displacementmap_pars_vertex:ny,displacementmap_vertex:iy,emissivemap_fragment:ry,emissivemap_pars_fragment:sy,colorspace_fragment:ay,colorspace_pars_fragment:oy,envmap_fragment:ly,envmap_common_pars_fragment:cy,envmap_pars_fragment:uy,envmap_pars_vertex:dy,envmap_physical_pars_fragment:My,envmap_vertex:fy,fog_vertex:hy,fog_pars_vertex:py,fog_fragment:my,fog_pars_fragment:gy,gradientmap_pars_fragment:vy,lightmap_pars_fragment:_y,lights_lambert_fragment:xy,lights_lambert_pars_fragment:yy,lights_pars_begin:Sy,lights_toon_fragment:Ey,lights_toon_pars_fragment:wy,lights_phong_fragment:Ty,lights_phong_pars_fragment:by,lights_physical_fragment:Ay,lights_physical_pars_fragment:Cy,lights_fragment_begin:Ry,lights_fragment_maps:Py,lights_fragment_end:Ny,lightprobes_pars_fragment:Ly,logdepthbuf_fragment:Dy,logdepthbuf_pars_fragment:Iy,logdepthbuf_pars_vertex:Uy,logdepthbuf_vertex:Fy,map_fragment:ky,map_pars_fragment:Oy,map_particle_fragment:By,map_particle_pars_fragment:zy,metalnessmap_fragment:Hy,metalnessmap_pars_fragment:Vy,morphinstance_vertex:Gy,morphcolor_vertex:Wy,morphnormal_vertex:Xy,morphtarget_pars_vertex:jy,morphtarget_vertex:Yy,normal_fragment_begin:qy,normal_fragment_maps:$y,normal_pars_fragment:Ky,normal_pars_vertex:Zy,normal_vertex:Jy,normalmap_pars_fragment:Qy,clearcoat_normal_fragment_begin:eS,clearcoat_normal_fragment_maps:tS,clearcoat_pars_fragment:nS,iridescence_pars_fragment:iS,opaque_fragment:rS,packing:sS,premultiplied_alpha_fragment:aS,project_vertex:oS,dithering_fragment:lS,dithering_pars_fragment:cS,roughnessmap_fragment:uS,roughnessmap_pars_fragment:dS,shadowmap_pars_fragment:fS,shadowmap_pars_vertex:hS,shadowmap_vertex:pS,shadowmask_pars_fragment:mS,skinbase_vertex:gS,skinning_pars_vertex:vS,skinning_vertex:_S,skinnormal_vertex:xS,specularmap_fragment:yS,specularmap_pars_fragment:SS,tonemapping_fragment:MS,tonemapping_pars_fragment:ES,transmission_fragment:wS,transmission_pars_fragment:TS,uv_pars_fragment:bS,uv_pars_vertex:AS,uv_vertex:CS,worldpos_vertex:RS,background_vert:PS,background_frag:NS,backgroundCube_vert:LS,backgroundCube_frag:DS,cube_vert:IS,cube_frag:US,depth_vert:FS,depth_frag:kS,distance_vert:OS,distance_frag:BS,equirect_vert:zS,equirect_frag:HS,linedashed_vert:VS,linedashed_frag:GS,meshbasic_vert:WS,meshbasic_frag:XS,meshlambert_vert:jS,meshlambert_frag:YS,meshmatcap_vert:qS,meshmatcap_frag:$S,meshnormal_vert:KS,meshnormal_frag:ZS,meshphong_vert:JS,meshphong_frag:QS,meshphysical_vert:eM,meshphysical_frag:tM,meshtoon_vert:nM,meshtoon_frag:iM,points_vert:rM,points_frag:sM,shadow_vert:aM,shadow_frag:oM,sprite_vert:lM,sprite_frag:cM},Ue={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ri={basic:{uniforms:Dn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Dn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Dn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Dn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Dn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Dn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Dn([Ue.points,Ue.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Dn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Dn([Ue.common,Ue.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Dn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Dn([Ue.sprite,Ue.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Dn([Ue.common,Ue.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Dn([Ue.lights,Ue.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ri.physical={uniforms:Dn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Pl={r:0,b:0,g:0},uM=new Jt,Dg=new ot;Dg.set(-1,0,0,0,1,0,0,0,1);function dM(s,e,n,r,o,l){const u=new Et(0);let f=o===!0?0:1,p,m,v=null,_=0,g=null;function M(F){let j=F.isScene===!0?F.background:null;if(j&&j.isTexture){const C=F.backgroundBlurriness>0;j=e.get(j,C)}return j}function b(F){let j=!1;const C=M(F);C===null?y(u,f):C&&C.isColor&&(y(C,1),j=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,l):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||j)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(F,j){const C=M(j);C&&(C.isCubeTexture||C.mapping===Wl)?(m===void 0&&(m=new ai(new Qs(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Ks(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(D,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=j.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=j.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(uM.makeRotationFromEuler(j.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Dg),m.material.toneMapped=_t.getTransfer(C.colorSpace)!==It,(v!==C||_!==C.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=C,_=C.version,g=s.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new ai(new io(2,2),new Ui({name:"BackgroundMaterial",uniforms:Ks(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=j.backgroundIntensity,p.material.toneMapped=_t.getTransfer(C.colorSpace)!==It,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||_!==C.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=C,_=C.version,g=s.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null))}function y(F,j){F.getRGB(Pl,Rg(s)),n.buffers.color.setClear(Pl.r,Pl.g,Pl.b,j,l)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(F,j=1){u.set(F),f=j,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(F){f=F,y(u,f)},render:b,addToRenderList:R,dispose:x}}function fM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(q,J,re,Y,Q){let he=!1;const te=_(q,Y,re,J);l!==te&&(l=te,m(l.object)),he=M(q,Y,re,Q),he&&b(q,Y,re,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,C(q,J,re,Y),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function p(){return s.createVertexArray()}function m(q){return s.bindVertexArray(q)}function v(q){return s.deleteVertexArray(q)}function _(q,J,re,Y){const Q=Y.wireframe===!0;let he=r[J.id];he===void 0&&(he={},r[J.id]=he);const te=q.isInstancedMesh===!0?q.id:0;let K=he[te];K===void 0&&(K={},he[te]=K);let O=K[re.id];O===void 0&&(O={},K[re.id]=O);let G=O[Q];return G===void 0&&(G=g(p()),O[Q]=G),G}function g(q){const J=[],re=[],Y=[];for(let Q=0;Q<n;Q++)J[Q]=0,re[Q]=0,Y[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:re,attributeDivisors:Y,object:q,attributes:{},index:null}}function M(q,J,re,Y){const Q=l.attributes,he=J.attributes;let te=0;const K=re.getAttributes();for(const O in K)if(K[O].location>=0){const P=Q[O];let ie=he[O];if(ie===void 0&&(O==="instanceMatrix"&&q.instanceMatrix&&(ie=q.instanceMatrix),O==="instanceColor"&&q.instanceColor&&(ie=q.instanceColor)),P===void 0||P.attribute!==ie||ie&&P.data!==ie.data)return!0;te++}return l.attributesNum!==te||l.index!==Y}function b(q,J,re,Y){const Q={},he=J.attributes;let te=0;const K=re.getAttributes();for(const O in K)if(K[O].location>=0){let P=he[O];P===void 0&&(O==="instanceMatrix"&&q.instanceMatrix&&(P=q.instanceMatrix),O==="instanceColor"&&q.instanceColor&&(P=q.instanceColor));const ie={};ie.attribute=P,P&&P.data&&(ie.data=P.data),Q[O]=ie,te++}l.attributes=Q,l.attributesNum=te,l.index=Y}function R(){const q=l.newAttributes;for(let J=0,re=q.length;J<re;J++)q[J]=0}function y(q){x(q,0)}function x(q,J){const re=l.newAttributes,Y=l.enabledAttributes,Q=l.attributeDivisors;re[q]=1,Y[q]===0&&(s.enableVertexAttribArray(q),Y[q]=1),Q[q]!==J&&(s.vertexAttribDivisor(q,J),Q[q]=J)}function F(){const q=l.newAttributes,J=l.enabledAttributes;for(let re=0,Y=J.length;re<Y;re++)J[re]!==q[re]&&(s.disableVertexAttribArray(re),J[re]=0)}function j(q,J,re,Y,Q,he,te){te===!0?s.vertexAttribIPointer(q,J,re,Q,he):s.vertexAttribPointer(q,J,re,Y,Q,he)}function C(q,J,re,Y){R();const Q=Y.attributes,he=re.getAttributes(),te=J.defaultAttributeValues;for(const K in he){const O=he[K];if(O.location>=0){let G=Q[K];if(G===void 0&&(K==="instanceMatrix"&&q.instanceMatrix&&(G=q.instanceMatrix),K==="instanceColor"&&q.instanceColor&&(G=q.instanceColor)),G!==void 0){const P=G.normalized,ie=G.itemSize,ye=e.get(G);if(ye===void 0)continue;const Ve=ye.buffer,De=ye.type,Fe=ye.bytesPerElement,ae=De===s.INT||De===s.UNSIGNED_INT||G.gpuType===sf;if(G.isInterleavedBufferAttribute){const de=G.data,Se=de.stride,Qe=G.offset;if(de.isInstancedInterleavedBuffer){for(let Oe=0;Oe<O.locationSize;Oe++)x(O.location+Oe,de.meshPerAttribute);q.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Oe=0;Oe<O.locationSize;Oe++)y(O.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let Oe=0;Oe<O.locationSize;Oe++)j(O.location+Oe,ie/O.locationSize,De,P,Se*Fe,(Qe+ie/O.locationSize*Oe)*Fe,ae)}else{if(G.isInstancedBufferAttribute){for(let de=0;de<O.locationSize;de++)x(O.location+de,G.meshPerAttribute);q.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let de=0;de<O.locationSize;de++)y(O.location+de);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let de=0;de<O.locationSize;de++)j(O.location+de,ie/O.locationSize,De,P,ie*Fe,ie/O.locationSize*de*Fe,ae)}}else if(te!==void 0){const P=te[K];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(O.location,P);break;case 3:s.vertexAttrib3fv(O.location,P);break;case 4:s.vertexAttrib4fv(O.location,P);break;default:s.vertexAttrib1fv(O.location,P)}}}}F()}function D(){I();for(const q in r){const J=r[q];for(const re in J){const Y=J[re];for(const Q in Y){const he=Y[Q];for(const te in he)v(he[te].object),delete he[te];delete Y[Q]}}delete r[q]}}function L(q){if(r[q.id]===void 0)return;const J=r[q.id];for(const re in J){const Y=J[re];for(const Q in Y){const he=Y[Q];for(const te in he)v(he[te].object),delete he[te];delete Y[Q]}}delete r[q.id]}function k(q){for(const J in r){const re=r[J];for(const Y in re){const Q=re[Y];if(Q[q.id]===void 0)continue;const he=Q[q.id];for(const te in he)v(he[te].object),delete he[te];delete Q[q.id]}}}function w(q){for(const J in r){const re=r[J],Y=q.isInstancedMesh===!0?q.id:0,Q=re[Y];if(Q!==void 0){for(const he in Q){const te=Q[he];for(const K in te)v(te[K].object),delete te[K];delete Q[he]}delete re[Y],Object.keys(re).length===0&&delete r[J]}}}function I(){V(),u=!0,l!==o&&(l=o,m(l.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:I,resetDefaultState:V,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfObject:w,releaseStatesOfProgram:k,initAttributes:R,enableAttribute:y,disableUnusedAttributes:F}}function hM(s,e,n){let r;function o(p){r=p}function l(p,m){s.drawArrays(r,p,m),n.update(m,r,1)}function u(p,m,v){v!==0&&(s.drawArraysInstanced(r,p,m,v),n.update(m,r,v))}function f(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,v);let g=0;for(let M=0;M<v;M++)g+=m[M];n.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function pM(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==Si&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const w=k===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==$n&&k!==Pi&&!w&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(st("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),j=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:F,maxVaryings:j,maxFragmentUniforms:C,maxSamples:D,samples:L}}function mM(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new Cr,f=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||r!==0||o;return o=g,r=_.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){n=v(_,g,0)},this.setState=function(_,g,M){const b=_.clippingPlanes,R=_.clipIntersection,y=_.clipShadows,x=s.get(_);if(!o||b===null||b.length===0||l&&!y)l?v(null):m();else{const F=l?0:r,j=F*4;let C=x.clippingState||null;p.value=C,C=v(b,g,j,M);for(let D=0;D!==j;++D)C[D]=n[D];x.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,M,b){const R=_!==null?_.length:0;let y=null;if(R!==0){if(y=p.value,b!==!0||y===null){const x=M+R*4,F=g.matrixWorldInverse;f.getNormalMatrix(F),(y===null||y.length<x)&&(y=new Float32Array(x));for(let j=0,C=M;j!==R;++j,C+=4)u.copy(_[j]).applyMatrix4(F,f),u.normal.toArray(y,C),y[C+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}const js=4,gM=6,vM=20,_M=256,Ga=new vf,bm=new Et;let sd=null,ad=0,od=0,ld=!1;const xM=new le,Qr=new le;class Am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:u=256,position:f=xM}=l;sd=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,ad,od),this._renderer.xr.enabled=ld,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ii,format:Si,colorSpace:Hl,depthBuffer:!1},o=Cm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yM(l)),this._blurMaterial=MM(l,e,n),this._ggxMaterial=SM(l,e,n)}return o}_compileMaterial(e){const n=new ai(new ir,e);this._renderer.compile(n,Ga)}_sceneToCubeUV(e,n,r,o,l){const p=new si(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,M=_.toneMapping;_.getClearColor(bm),_.toneMapping=Li,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ai(new Qs,new bg({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let x=!1;const F=e.background;F?F.isColor&&(y.color.copy(F),e.background=null,x=!0):(y.color.copy(bm),x=!0);for(let j=0;j<6;j++){const C=j%3;C===0?(p.up.set(0,m[j],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+v[j],l.y,l.z)):C===1?(p.up.set(0,0,m[j]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+v[j],l.z)):(p.up.set(0,m[j],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+v[j]));const D=this._cubeSize;Gs(o,C*D,j>2?D:0,D,D),_.setRenderTarget(o),x&&_.render(R,p),_.render(e,p)}_.toneMapping=M,_.autoClear=g,e.background=F}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===is||e.mapping===$s;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;Gs(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Ga)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),_=Math.sqrt(m*m-v*v),g=m*1.25,M=_*g,{_lodMax:b}=this,R=this._sizeLods[r],y=3*R*(r>b-js?r-b+js:0),x=4*(this._cubeSize-R);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=b-n,Gs(l,y,x,3*R,2*R),o.setRenderTarget(l),o.render(f,Ga),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=b-r,Gs(e,y,x,3*R,2*R),o.setRenderTarget(e),o.render(f,Ga)}_blur(e,n,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,n,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,n,r,o,l){const u=this._renderer,f=this._blurMaterial,p=this._lodMeshes[o];p.material=f;const m=f.uniforms;m.envMap.value=e.texture,m.sigma.value=l,m.mipInt.value=this._lodMax-r;const v=this._sizeLods[o],_=3*v*(o>this._lodMax-js?o-this._lodMax+js:0),g=4*(this._cubeSize-v);Gs(n,_,g,3*v,2*v),u.setRenderTarget(n),u.render(p,Ga)}}function yM(s){const e=[],n=[];let r=s;const o=s-js+1+gM;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),p=-f,m=1+f,v=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,g=6,M=3,b=new Float32Array(M*g*_),R=new Float32Array(M*g*_);for(let x=0;x<_;x++){const F=x%3*2/3-1,j=x>2?0:-1,C=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];b.set(C,M*g*x);for(let D=0;D<g;D++){const L=v[D*2]*2-1,k=v[D*2+1]*2-1;x===0?Qr.set(1,k,L):x===1?Qr.set(-L,1,-k):x===2?Qr.set(-L,k,1):x===3?Qr.set(-1,k,-L):x===4?Qr.set(-L,-1,k):Qr.set(L,k,-1),Qr.toArray(R,(x*g+D)*M)}}const y=new ir;y.setAttribute("position",new er(b,M)),y.setAttribute("outputDirection",new er(R,M)),n.push(new ai(y,null)),r>js&&r--}return{lodMeshes:n,sizeLods:e}}function Cm(s,e,n){const r=new Mi(s,e,n);return r.texture.mapping=Wl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Gs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function SM(s,e,n){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_M,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function MM(s,e,n){return new Ui({name:"SphericalGaussianBlur",defines:{SAMPLES:vM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Rm(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Pm(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ig extends Mi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ag(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Qs(5,5,5),l=new Ui({name:"CubemapFromEquirect",uniforms:Ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Ji});l.uniforms.tEquirect.value=n;const u=new ai(o,l),f=n.minFilter;return n.minFilter===es&&(n.minFilter=An),new bx(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}function EM(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?u(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ru||M===Pu)if(e.has(g)){const b=e.get(g).texture;return f(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const R=new Ig(b.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",m),f(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,b=M===Ru||M===Pu,R=M===is||M===$s;if(b||R){let y=n.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new Am(s)),y=b?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),y.texture;if(y!==void 0)return y.texture;{const F=g.image;return b&&F&&F.height>0||R&&F&&p(F)?(r===null&&(r=new Am(s)),y=b?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function f(g,M){return M===Ru?g.mapping=is:M===Pu&&(g.mapping=$s),g}function p(g){let M=0;const b=6;for(let R=0;R<b;R++)g[R]!==void 0&&M++;return M===b}function m(g){const M=g.target;M.removeEventListener("dispose",m);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const b=n.get(M);b!==void 0&&(n.delete(M),b.dispose())}function _(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function wM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ys("WebGLRenderer: "+r+" extension not supported."),o}}}function TM(s,e,n,r){const o={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",u),delete o[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(_,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function p(_){const g=_.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function m(_){const g=[],M=_.index,b=_.attributes.position;let R=0;if(b===void 0)return;if(M!==null){const F=M.array;R=M.version;for(let j=0,C=F.length;j<C;j+=3){const D=F[j+0],L=F[j+1],k=F[j+2];g.push(D,L,L,k,k,D)}}else{const F=b.array;R=b.version;for(let j=0,C=F.length/3-1;j<C;j+=3){const D=j+0,L=j+1,k=j+2;g.push(D,L,L,k,k,D)}}const y=new(b.count>=65535?Tg:wg)(g,1);y.version=R;const x=l.get(_);x&&e.remove(x),l.set(_,y)}function v(_){const g=l.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&m(_)}else m(_);return l.get(_)}return{get:f,update:p,getWireframeAttribute:v}}function bM(s,e,n){let r;function o(_){r=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function p(_,g){s.drawElements(r,g,l,_*u),n.update(g,r,1)}function m(_,g,M){M!==0&&(s.drawElementsInstanced(r,g,l,_*u,M),n.update(g,r,M))}function v(_,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,_,0,M);let R=0;for(let y=0;y<M;y++)R+=g[y];n.update(R,r,1)}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function AM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:Ct("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function CM(s,e,n){const r=new WeakMap,o=new qt;function l(u,f,p){const m=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(f);if(g===void 0||g.count!==_){let V=function(){w.dispose(),r.delete(f),f.removeEventListener("dispose",V)};var M=V;g!==void 0&&g.texture.dispose();const b=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],F=f.morphAttributes.normal||[],j=f.morphAttributes.color||[];let C=0;b===!0&&(C=1),R===!0&&(C=2),y===!0&&(C=3);let D=f.attributes.position.count*C,L=1;D>e.maxTextureSize&&(L=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const k=new Float32Array(D*L*4*_),w=new Sg(k,D,L,_);w.type=Pi,w.needsUpdate=!0;const I=C*4;for(let q=0;q<_;q++){const J=x[q],re=F[q],Y=j[q],Q=D*L*4*q;for(let he=0;he<J.count;he++){const te=he*I;b===!0&&(o.fromBufferAttribute(J,he),k[Q+te+0]=o.x,k[Q+te+1]=o.y,k[Q+te+2]=o.z,k[Q+te+3]=0),R===!0&&(o.fromBufferAttribute(re,he),k[Q+te+4]=o.x,k[Q+te+5]=o.y,k[Q+te+6]=o.z,k[Q+te+7]=0),y===!0&&(o.fromBufferAttribute(Y,he),k[Q+te+8]=o.x,k[Q+te+9]=o.y,k[Q+te+10]=o.z,k[Q+te+11]=Y.itemSize===4?o.w:1)}}g={count:_,texture:w,size:new St(D,L)},r.set(f,g),f.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let b=0;for(let y=0;y<m.length;y++)b+=m[y];const R=f.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function RM(s,e,n,r,o){let l=new WeakMap;function u(m){const v=o.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==v&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,v))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return g}function f(){l=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:u,dispose:f}}const PM={[sg]:"LINEAR_TONE_MAPPING",[ag]:"REINHARD_TONE_MAPPING",[og]:"CINEON_TONE_MAPPING",[lg]:"ACES_FILMIC_TONE_MAPPING",[ug]:"AGX_TONE_MAPPING",[dg]:"NEUTRAL_TONE_MAPPING",[cg]:"CUSTOM_TONE_MAPPING"};function NM(s,e,n,r,o,l){const u=new Mi(e,n,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,p=null;const m=new ir;m.setAttribute("position",new tr([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new tr([0,2,0,0,2,0],2));const v=new gx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new ai(m,v),g=new vf(-1,1,1,-1,0,1);let M=null,b=null,R=!1,y,x=null,F=[],j=!1;this.setSize=function(C,D){u.setSize(C,D),f!==null&&f.setSize(C,D),p!==null&&p.setSize(C,D);for(let L=0;L<F.length;L++){const k=F[L];k.setSize&&k.setSize(C,D)}},this.setEffects=function(C){F=C,j=F.length>0&&F[0].isRenderPass===!0;const D=u.width,L=u.height;F.length>0&&f===null&&(f=new Mi(D,L,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),p=new Mi(D,L,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));for(let k=0;k<F.length;k++){const w=F[k];w.setSize&&w.setSize(D,L)}},this.begin=function(C,D){if(R||C.toneMapping===Li&&F.length===0)return!1;if(x=D,D!==null){const L=D.width,k=D.height;(u.width!==L||u.height!==k)&&this.setSize(L,k)}return j===!1&&C.setRenderTarget(u),y=C.toneMapping,C.toneMapping=Li,!0},this.hasRenderPass=function(){return j},this.end=function(C,D){C.toneMapping=y,R=!0;let L=u,k=f;for(let w=0;w<F.length;w++){const I=F[w];I.enabled!==!1&&(I.render(C,k,L,D),I.needsSwap!==!1&&(L=k,k=k===f?p:f))}if(M!==C.outputColorSpace||b!==C.toneMapping){M=C.outputColorSpace,b=C.toneMapping,v.defines={},_t.getTransfer(M)===It&&(v.defines.SRGB_TRANSFER="");const w=PM[b];w&&(v.defines[w]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(x),C.render(_,g),x=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),p!==null&&p.dispose(),m.dispose(),v.dispose()}}const Ug=new Cn,Qd=new Qa(1,1),Fg=new Sg,kg=new j_,Og=new Ag,Nm=[],Lm=[],Dm=new Float32Array(16),Im=new Float32Array(9),Um=new Float32Array(4);function ea(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=Nm[o];if(l===void 0&&(l=new Float32Array(o),Nm[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(l,f)}return l}function cn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function un(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function jl(s,e){let n=Lm[e];n===void 0&&(n=new Int32Array(e),Lm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function LM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function DM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2fv(this.addr,e),un(n,e)}}function IM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(cn(n,e))return;s.uniform3fv(this.addr,e),un(n,e)}}function UM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4fv(this.addr,e),un(n,e)}}function FM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;Um.set(r),s.uniformMatrix2fv(this.addr,!1,Um),un(n,r)}}function kM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;Im.set(r),s.uniformMatrix3fv(this.addr,!1,Im),un(n,r)}}function OM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;Dm.set(r),s.uniformMatrix4fv(this.addr,!1,Dm),un(n,r)}}function BM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function zM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2iv(this.addr,e),un(n,e)}}function HM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;s.uniform3iv(this.addr,e),un(n,e)}}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4iv(this.addr,e),un(n,e)}}function GM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function WM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2uiv(this.addr,e),un(n,e)}}function XM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;s.uniform3uiv(this.addr,e),un(n,e)}}function jM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4uiv(this.addr,e),un(n,e)}}function YM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Qd.compareFunction=n.isReversedDepthBuffer()?ff:df,l=Qd):l=Ug,n.setTexture2D(e||l,o)}function qM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||kg,o)}function $M(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Og,o)}function KM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Fg,o)}function ZM(s){switch(s){case 5126:return LM;case 35664:return DM;case 35665:return IM;case 35666:return UM;case 35674:return FM;case 35675:return kM;case 35676:return OM;case 5124:case 35670:return BM;case 35667:case 35671:return zM;case 35668:case 35672:return HM;case 35669:case 35673:return VM;case 5125:return GM;case 36294:return WM;case 36295:return XM;case 36296:return jM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return KM}}function JM(s,e){s.uniform1fv(this.addr,e)}function QM(s,e){const n=ea(e,this.size,2);s.uniform2fv(this.addr,n)}function eE(s,e){const n=ea(e,this.size,3);s.uniform3fv(this.addr,n)}function tE(s,e){const n=ea(e,this.size,4);s.uniform4fv(this.addr,n)}function nE(s,e){const n=ea(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function iE(s,e){const n=ea(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function rE(s,e){const n=ea(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function sE(s,e){s.uniform1iv(this.addr,e)}function aE(s,e){s.uniform2iv(this.addr,e)}function oE(s,e){s.uniform3iv(this.addr,e)}function lE(s,e){s.uniform4iv(this.addr,e)}function cE(s,e){s.uniform1uiv(this.addr,e)}function uE(s,e){s.uniform2uiv(this.addr,e)}function dE(s,e){s.uniform3uiv(this.addr,e)}function fE(s,e){s.uniform4uiv(this.addr,e)}function hE(s,e,n){const r=this.cache,o=e.length,l=jl(n,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Qd:u=Ug;for(let f=0;f!==o;++f)n.setTexture2D(e[f]||u,l[f])}function pE(s,e,n){const r=this.cache,o=e.length,l=jl(n,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||kg,l[u])}function mE(s,e,n){const r=this.cache,o=e.length,l=jl(n,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Og,l[u])}function gE(s,e,n){const r=this.cache,o=e.length,l=jl(n,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Fg,l[u])}function vE(s){switch(s){case 5126:return JM;case 35664:return QM;case 35665:return eE;case 35666:return tE;case 35674:return nE;case 35675:return iE;case 35676:return rE;case 5124:case 35670:return sE;case 35667:case 35671:return aE;case 35668:case 35672:return oE;case 35669:case 35673:return lE;case 5125:return cE;case 36294:return uE;case 36295:return dE;case 36296:return fE;case 35678:case 36198:case 36298:case 36306:case 35682:return hE;case 35679:case 36299:case 36307:return pE;case 35680:case 36300:case 36308:case 36293:return mE;case 36289:case 36303:case 36311:case 36292:return gE}}class _E{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=ZM(n.type)}}class xE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vE(n.type)}}class yE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,n[f.id],r)}}}const cd=/(\w+)(\])?(\[|\.)?/g;function Fm(s,e){s.seq.push(e),s.map[e.id]=e}function SE(s,e,n){const r=s.name,o=r.length;for(cd.lastIndex=0;;){const l=cd.exec(r),u=cd.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&u+2===o){Fm(n,m===void 0?new _E(f,s,e):new xE(f,s,e));break}else{let _=n.map[f];_===void 0&&(_=new yE(f),Fm(n,_)),n=_}}}class kl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(n,u),p=e.getUniformLocation(n,f.name);SE(f,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const f=n[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function km(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const ME=37297;let EE=0;function wE(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Om=new ot;function TE(s){_t._getMatrix(Om,_t.workingColorSpace,s);const e=`mat3( ${Om.elements.map(n=>n.toFixed(4))} )`;switch(_t.getTransfer(s)){case Vl:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+wE(s.getShaderSource(e),f)}else return l}function bE(s,e){const n=TE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const AE={[sg]:"Linear",[ag]:"Reinhard",[og]:"Cineon",[lg]:"ACESFilmic",[ug]:"AgX",[dg]:"Neutral",[cg]:"Custom"};function CE(s,e){const n=AE[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nl=new le;function RE(){_t.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),n=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function NE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function LE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function ja(s){return s!==""}function zm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DE=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(s){return s.replace(DE,UE)}const IE=new Map;function UE(s,e){let n=ht[e];if(n===void 0){const r=IE.get(e);if(r!==void 0)n=ht[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ef(n)}const FE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(s){return s.replace(FE,kE)}function kE(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Gm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const OE={[Ll]:"SHADOWMAP_TYPE_PCF",[Xa]:"SHADOWMAP_TYPE_VSM"};function BE(s){return OE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zE={[is]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[Wl]:"ENVMAP_TYPE_CUBE_UV"};function HE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":zE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const VE={[$s]:"ENVMAP_MODE_REFRACTION"};function GE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":VE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const WE={[rg]:"ENVMAP_BLENDING_MULTIPLY",[E_]:"ENVMAP_BLENDING_MIX",[w_]:"ENVMAP_BLENDING_ADD"};function XE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":WE[s.combine]||"ENVMAP_BLENDING_NONE"}function jE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function YE(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=BE(n),m=HE(n),v=GE(n),_=XE(n),g=jE(n),M=PE(n),b=NE(l),R=o.createProgram();let y,x,F=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(ja).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(ja).join(`
`),x.length>0&&(x+=`
`)):(y=[Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),x=[Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Li?"#define TONE_MAPPING":"",n.toneMapping!==Li?ht.tonemapping_pars_fragment:"",n.toneMapping!==Li?CE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,bE("linearToOutputTexel",n.outputColorSpace),RE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ja).join(`
`)),u=ef(u),u=zm(u,n),u=Hm(u,n),f=ef(f),f=zm(f,n),f=Hm(f,n),u=Vm(u),f=Vm(f),n.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const j=F+y+u,C=F+x+f,D=km(o,o.VERTEX_SHADER,j),L=km(o,o.FRAGMENT_SHADER,C);o.attachShader(R,D),o.attachShader(R,L),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function k(q){if(s.debug.checkShaderErrors){const J=o.getProgramInfoLog(R)||"",re=o.getShaderInfoLog(D)||"",Y=o.getShaderInfoLog(L)||"",Q=J.trim(),he=re.trim(),te=Y.trim();let K=!0,O=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,D,L);else{const G=Bm(o,D,"vertex"),P=Bm(o,L,"fragment");Ct("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+Q+`
`+G+`
`+P)}else Q!==""?st("WebGLProgram: Program Info Log:",Q):(he===""||te==="")&&(O=!1);O&&(q.diagnostics={runnable:K,programLog:Q,vertexShader:{log:he,prefix:y},fragmentShader:{log:te,prefix:x}})}o.deleteShader(D),o.deleteShader(L),w=new kl(o,R),I=LE(o,R)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let I;this.getAttributes=function(){return I===void 0&&k(this),I};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(R,ME)),V},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=EE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=D,this.fragmentShader=L,this}let qE=0;class $E{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new KE(e),n.set(e,r)),r}}class KE{constructor(e){this.id=qE++,this.code=e,this.usedTimes=0}}function ZE(s){return s===rs||s===Bl||s===zl}function JE(s,e,n,r,o,l){const u=new Mg,f=new $E,p=new Set,m=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return p.add(w),w===0?"uv":`uv${w}`}function R(w,I,V,q,J,re){const Y=q.fog,Q=J.geometry,he=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?q.environment:null,te=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,K=e.get(w.envMap||he,te),O=K&&K.mapping===Wl?K.image.height:null,G=M[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&st("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const P=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ie=P!==void 0?P.length:0;let ye=0;Q.morphAttributes.position!==void 0&&(ye=1),Q.morphAttributes.normal!==void 0&&(ye=2),Q.morphAttributes.color!==void 0&&(ye=3);let Ve,De,Fe,ae;if(G){const Tt=Ri[G];Ve=Tt.vertexShader,De=Tt.fragmentShader}else{Ve=w.vertexShader,De=w.fragmentShader;const Tt=f.getVertexShaderStage(w),yt=f.getFragmentShaderStage(w);f.update(w,Tt,yt),Fe=Tt.id,ae=yt.id}const de=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Qe=J.isInstancedMesh===!0,Oe=J.isBatchedMesh===!0,ct=!!w.map,zt=!!w.matcap,ut=!!K,mt=!!w.aoMap,Lt=!!w.lightMap,dt=!!w.bumpMap&&w.wireframe===!1,Ut=!!w.normalMap,$t=!!w.displacementMap,tn=!!w.emissiveMap,Pt=!!w.metalnessMap,Ht=!!w.roughnessMap,W=w.anisotropy>0,sn=w.clearcoat>0,wt=w.dispersion>0,N=w.retroreflectivity>0,S=w.iridescence>0,$=w.sheen>0,oe=w.transmission>0,fe=W&&!!w.anisotropyMap,Ee=sn&&!!w.clearcoatMap,be=sn&&!!w.clearcoatNormalMap,pe=sn&&!!w.clearcoatRoughnessMap,ge=S&&!!w.iridescenceMap,Re=S&&!!w.iridescenceThicknessMap,qe=$&&!!w.sheenColorMap,Pe=$&&!!w.sheenRoughnessMap,Te=!!w.specularMap,$e=!!w.specularColorMap,et=!!w.specularIntensityMap,it=oe&&!!w.transmissionMap,z=oe&&!!w.thicknessMap,Ae=!!w.gradientMap,me=!!w.alphaMap,Ce=w.alphaTest>0,ke=!!w.alphaHash,ve=!!w.extensions;let Ze=Li;w.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ze=s.toneMapping);const je={shaderID:G,shaderType:w.type,shaderName:w.name,vertexShader:Ve,fragmentShader:De,defines:w.defines,customVertexShaderID:Fe,customFragmentShaderID:ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Oe,batchingColor:Oe&&J._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&J.instanceColor!==null,instancingMorph:Qe&&J.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:ct,matcap:zt,envMap:ut,envMapMode:ut&&K.mapping,envMapCubeUVHeight:O,aoMap:mt,lightMap:Lt,bumpMap:dt,normalMap:Ut,displacementMap:$t,emissiveMap:tn,normalMapObjectSpace:Ut&&w.normalMapType===A_,normalMapTangentSpace:Ut&&w.normalMapType===Zd,packedNormalMap:Ut&&w.normalMapType===Zd&&ZE(w.normalMap.format),metalnessMap:Pt,roughnessMap:Ht,anisotropy:W,anisotropyMap:fe,clearcoat:sn,clearcoatMap:Ee,clearcoatNormalMap:be,clearcoatRoughnessMap:pe,dispersion:wt,retroreflection:N,iridescence:S,iridescenceMap:ge,iridescenceThicknessMap:Re,sheen:$,sheenColorMap:qe,sheenRoughnessMap:Pe,specularMap:Te,specularColorMap:$e,specularIntensityMap:et,transmission:oe,transmissionMap:it,thicknessMap:z,gradientMap:Ae,opaque:w.transparent===!1&&w.blending===Ya&&w.alphaToCoverage===!1,alphaMap:me,alphaTest:Ce,alphaHash:ke,combine:w.combine,mapUv:ct&&b(w.map.channel),aoMapUv:mt&&b(w.aoMap.channel),lightMapUv:Lt&&b(w.lightMap.channel),bumpMapUv:dt&&b(w.bumpMap.channel),normalMapUv:Ut&&b(w.normalMap.channel),displacementMapUv:$t&&b(w.displacementMap.channel),emissiveMapUv:tn&&b(w.emissiveMap.channel),metalnessMapUv:Pt&&b(w.metalnessMap.channel),roughnessMapUv:Ht&&b(w.roughnessMap.channel),anisotropyMapUv:fe&&b(w.anisotropyMap.channel),clearcoatMapUv:Ee&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:be&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&b(w.sheenRoughnessMap.channel),specularMapUv:Te&&b(w.specularMap.channel),specularColorMapUv:$e&&b(w.specularColorMap.channel),specularIntensityMapUv:et&&b(w.specularIntensityMap.channel),transmissionMapUv:it&&b(w.transmissionMap.channel),thicknessMapUv:z&&b(w.thicknessMap.channel),alphaMapUv:me&&b(w.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ut||W),vertexNormals:!!Q.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!Q.attributes.uv&&(ct||me),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||Q.attributes.normal===void 0&&Ut===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Se,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ye,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ze,decodeVideoTexture:ct&&w.map.isVideoTexture===!0&&_t.getTransfer(w.map.colorSpace)===It,decodeVideoTextureEmissive:tn&&w.emissiveMap.isVideoTexture===!0&&_t.getTransfer(w.emissiveMap.colorSpace)===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ki,flipSided:w.side===Hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ve&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&w.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return je.vertexUv1s=p.has(1),je.vertexUv2s=p.has(2),je.vertexUv3s=p.has(3),p.clear(),je}function y(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)I.push(V),I.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(x(I,w),F(I,w),I.push(s.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function x(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numSunLights),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numSunLightShadows),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function F(w,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.retroreflection&&u.enable(24),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),I.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function j(w){const I=M[w.type];let V;if(I){const q=Ri[I];V=hx.clone(q.uniforms)}else V=w.uniforms;return V}function C(w,I){let V=v.get(I);return V!==void 0?++V.usedTimes:(V=new YE(s,I,w,o),m.push(V),v.set(I,V)),V}function D(w){if(--w.usedTimes===0){const I=m.indexOf(w);m[I]=m[m.length-1],m.pop(),v.delete(w.cacheKey),w.destroy()}}function L(w){f.remove(w)}function k(){f.dispose()}return{getParameters:R,getProgramCacheKey:y,getUniforms:j,acquireProgram:C,releaseProgram:D,releaseShaderCache:L,programs:m,dispose:k}}function QE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,p){s.get(u)[f]=p}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function e1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Wm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xm(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function f(g,M,b,R,y,x){let F=s[e];return F===void 0?(F={id:g.id,object:g,geometry:M,material:b,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:y,group:x},s[e]=F):(F.id=g.id,F.object=g,F.geometry=M,F.material=b,F.materialVariant=u(g),F.groupOrder=R,F.renderOrder=g.renderOrder,F.z=y,F.group=x),e++,F}function p(g,M,b,R,y,x,F){F.reversedDepth===!0&&(y=-y);const j=f(g,M,b,R,y,x);b.transmission>0?r.push(j):b.transparent===!0?o.push(j):n.push(j)}function m(g,M,b,R,y,x){const F=f(g,M,b,R,y,x);b.transmission>0?r.unshift(F):b.transparent===!0?o.unshift(F):n.unshift(F)}function v(g,M){n.length>1&&n.sort(g||e1),r.length>1&&r.sort(M||Wm),o.length>1&&o.sort(M||Wm)}function _(){for(let g=e,M=s.length;g<M;g++){const b=s[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:p,unshift:m,finish:_,sort:v}}function t1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Xm,s.set(r,[u])):o>=l.length?(u=new Xm,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function n1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new le,color:new Et};break;case"SpotLight":n={position:new le,direction:new le,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new le,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new le,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=n,n}}}function i1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let r1=0;function s1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function a1(s){const e=new n1,n=i1(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new le);const o=new le,l=new Jt,u=new Jt;function f(m){let v=0,_=0,g=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let M=0,b=0,R=0,y=0,x=0,F=0,j=0,C=0,D=0,L=0,k=0,w=0,I=0,V=0;m.sort(s1);for(let J=0,re=m.length;J<re;J++){const Y=m[J],Q=Y.color,he=Y.intensity,te=Y.distance;let K=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===rs?K=Y.shadow.map.texture:K=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)v+=Q.r*he,_+=Q.g*he,g+=Q.b*he;else if(Y.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(Y.sh.coefficients[O],he);V++}else if(Y.isSunLight){const O=e.get(Y);if(O.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const G=Y.shadow,P=n.get(Y);P.shadowIntensity=G.intensity,P.shadowBias=G.bias,P.shadowNormalBias=G.normalBias,P.shadowRadius=G.radius,P.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),r.sunShadow[b]=P,r.sunShadowMap[b]=K;const ie=G.getViewportCount();for(let ye=0;ye<ie;ye++)r.sunShadowMatrix[R+ye]=G.getMatrix(ye),r.sunShadowCascade[R+ye]=G._cascadeData[ye];R+=ie,b++}r.sun[M]=O,M++}else if(Y.isDirectionalLight){const O=e.get(Y);if(O.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const G=Y.shadow,P=n.get(Y);P.shadowIntensity=G.intensity,P.shadowBias=G.bias,P.shadowNormalBias=G.normalBias,P.shadowRadius=G.radius,P.shadowMapSize=G.mapSize,r.directionalShadow[y]=P,r.directionalShadowMap[y]=K,r.directionalShadowMatrix[y]=Y.shadow.matrix,D++}r.directional[y]=O,y++}else if(Y.isSpotLight){const O=e.get(Y);O.position.setFromMatrixPosition(Y.matrixWorld),O.color.copy(Q).multiplyScalar(he),O.distance=te,O.coneCos=Math.cos(Y.angle),O.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),O.decay=Y.decay,r.spot[F]=O;const G=Y.shadow;if(Y.map&&(r.spotLightMap[w]=Y.map,w++,G.updateMatrices(Y),Y.castShadow&&I++),r.spotLightMatrix[F]=G.matrix,Y.castShadow){const P=n.get(Y);P.shadowIntensity=G.intensity,P.shadowBias=G.bias,P.shadowNormalBias=G.normalBias,P.shadowRadius=G.radius,P.shadowMapSize=G.mapSize,r.spotShadow[F]=P,r.spotShadowMap[F]=K,k++}F++}else if(Y.isRectAreaLight){const O=e.get(Y);O.color.copy(Q).multiplyScalar(he),O.halfWidth.set(Y.width*.5,0,0),O.halfHeight.set(0,Y.height*.5,0),r.rectArea[j]=O,j++}else if(Y.isPointLight){const O=e.get(Y);if(O.color.copy(Y.color).multiplyScalar(Y.intensity),O.distance=Y.distance,O.decay=Y.decay,Y.castShadow){const G=Y.shadow,P=n.get(Y);P.shadowIntensity=G.intensity,P.shadowBias=G.bias,P.shadowNormalBias=G.normalBias,P.shadowRadius=G.radius,P.shadowMapSize=G.mapSize,P.shadowCameraNear=G.camera.near,P.shadowCameraFar=G.camera.far,r.pointShadow[x]=P,r.pointShadowMap[x]=K,r.pointShadowMatrix[x]=Y.shadow.matrix,L++}r.point[x]=O,x++}else if(Y.isHemisphereLight){const O=e.get(Y);O.skyColor.copy(Y.color).multiplyScalar(he),O.groundColor.copy(Y.groundColor).multiplyScalar(he),r.hemi[C]=O,C++}}j>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const q=r.hash;(q.sunLength!==M||q.directionalLength!==y||q.pointLength!==x||q.spotLength!==F||q.rectAreaLength!==j||q.hemiLength!==C||q.numSunShadows!==b||q.numDirectionalShadows!==D||q.numPointShadows!==L||q.numSpotShadows!==k||q.numSpotMaps!==w||q.numLightProbes!==V)&&(r.sun.length=M,r.directional.length=y,r.spot.length=F,r.rectArea.length=j,r.point.length=x,r.hemi.length=C,r.sunShadow.length=b,r.sunShadowMap.length=b,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.directionalShadowMatrix.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=k,r.spotShadowMap.length=k,r.spotLightMatrix.length=k+w-I,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=V,q.sunLength=M,q.directionalLength=y,q.pointLength=x,q.spotLength=F,q.rectAreaLength=j,q.hemiLength=C,q.numSunShadows=b,q.numDirectionalShadows=D,q.numPointShadows=L,q.numSpotShadows=k,q.numSpotMaps=w,q.numLightProbes=V,r.version=r1++)}function p(m,v){let _=0,g=0,M=0,b=0,R=0,y=0;const x=v.matrixWorldInverse;for(let F=0,j=m.length;F<j;F++){const C=m[F];if(C.isSunLight){const D=r.sun[_];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(x),_++}else if(C.isDirectionalLight){const D=r.directional[g];D.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(x),g++}else if(C.isSpotLight){const D=r.spot[b];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(x),b++}else if(C.isRectAreaLight){const D=r.rectArea[R];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(x),u.identity(),l.copy(C.matrixWorld),l.premultiply(x),u.extractRotation(l),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),R++}else if(C.isPointLight){const D=r.point[M];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(x),M++}else if(C.isHemisphereLight){const D=r.hemi[y];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(x),y++}}}return{setup:f,setupView:p,state:r}}function jm(s){const e=new a1(s),n=[],r=[],o=[];function l(g){_.camera=g,n.length=0,r.length=0,o.length=0}function u(g){n.push(g)}function f(g){r.push(g)}function p(g){o.push(g)}function m(){e.setup(n)}function v(g){e.setupView(n,g)}const _={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:m,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:p}}function o1(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new jm(s),e.set(o,[f])):l>=u.length?(f=new jm(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const l1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,u1=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],d1=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],Ym=new Jt,Wa=new le,ud=new le;function f1(s,e,n){let r=new mf;const o=new St,l=new St,u=new qt,f=new vx,p=new _x,m={},v=n.maxTextureSize,_={[ns]:Hn,[Hn]:ns,[Ki]:Ki},g=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:l1,fragmentShader:c1}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new ir;b.setAttribute("position",new er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ai(b,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ll;let x=this.type;this.render=function(L,k,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===r_&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ll);const I=s.getRenderTarget(),V=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Ji),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const re=x!==this.type;re&&k.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(Q=>Q.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,Q=L.length;Y<Q;Y++){const he=L[Y],te=he.shadow;if(te===void 0){st("WebGLShadowMap:",he,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;o.copy(te.mapSize);const K=te.getFrameExtents();o.multiply(K),l.copy(te.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/K.x),o.x=l.x*K.x,te.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/K.y),o.y=l.y*K.y,te.mapSize.y=l.y));const O=s.state.buffers.depth.getReversed();if(te.camera._reversedDepth=O,te.map===null||re===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===Xa){if(he.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new Mi(o.x,o.y,{format:rs,type:Ii,minFilter:An,magFilter:An,generateMipmaps:!1}),te.map.texture.name=he.name+".shadowMap",te.map.depthTexture=new Qa(o.x,o.y,Pi),te.map.depthTexture.name=he.name+".shadowMapDepth",te.map.depthTexture.format=nr,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=xn,te.map.depthTexture.magFilter=xn}else he.isPointLight?(te.map=new Ig(o.x),te.map.depthTexture=new dx(o.x,Di)):(te.map=new Mi(o.x,o.y),te.map.depthTexture=new Qa(o.x,o.y,Di)),te.map.depthTexture.name=he.name+".shadowMap",te.map.depthTexture.format=nr,this.type===Ll?(te.map.depthTexture.compareFunction=O?ff:df,te.map.depthTexture.minFilter=An,te.map.depthTexture.magFilter=An):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=xn,te.map.depthTexture.magFilter=xn);te.camera.updateProjectionMatrix()}te.map.isWebGLCubeRenderTarget!==!0&&(te.map.width!==o.x||te.map.height!==o.y)&&te.map.setSize(o.x,o.y);const G=te.map.isWebGLCubeRenderTarget?6:te.getViewportCount();he.isPointLight!==!0&&te.updateMatrices(he,w);for(let P=0;P<G;P++){const ie=te.getCamera(P);if(he.isPointLight){const ye=te.camera,Ve=te.matrix,De=he.distance||ye.far;De!==ye.far&&(ye.far=De,ye.updateProjectionMatrix()),Wa.setFromMatrixPosition(he.matrixWorld),ye.position.copy(Wa),ud.copy(ye.position),ud.add(u1[P]),ye.up.copy(d1[P]),ye.lookAt(ud),ye.updateMatrixWorld(),Ve.makeTranslation(-Wa.x,-Wa.y,-Wa.z),Ym.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),te._frustum.setFromProjectionMatrix(Ym,ye.coordinateSystem,ye.reversedDepth)}if(te.map.isWebGLCubeRenderTarget)s.setRenderTarget(te.map,P),s.clear();else{P===0&&(s.setRenderTarget(te.map),s.clear());const ye=te.getViewport(P);u.set(l.x*ye.x,l.y*ye.y,l.x*ye.z,l.y*ye.w),J.viewport(u)}r=te.getFrustum(P),C(k,w,ie,he,this.type)}te.isPointLightShadow!==!0&&this.type===Xa&&F(te,w),te.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(I,V,q)};function F(L,k){const w=e.update(R);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null?L.mapPass=new Mi(o.x,o.y,{format:rs,type:Ii}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value.set(L.map.width,L.map.height),g.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(k,null,w,g,R,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value.set(L.map.width,L.map.height),M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(k,null,w,M,R,null)}function j(L,k,w,I){let V=null;const q=w.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(q!==void 0)V=q;else if(V=w.isPointLight===!0?p:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const J=V.uuid,re=k.uuid;let Y=m[J];Y===void 0&&(Y={},m[J]=Y);let Q=Y[re];Q===void 0&&(Q=V.clone(),Y[re]=Q,k.addEventListener("dispose",D)),V=Q}if(V.visible=k.visible,V.wireframe=k.wireframe,I===Xa?V.side=k.shadowSide!==null?k.shadowSide:k.side:V.side=k.shadowSide!==null?k.shadowSide:_[k.side],V.alphaMap=k.alphaMap,V.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,V.map=k.map,V.clipShadows=k.clipShadows,V.clippingPlanes=k.clippingPlanes,V.clipIntersection=k.clipIntersection,V.displacementMap=k.displacementMap,V.displacementScale=k.displacementScale,V.displacementBias=k.displacementBias,V.wireframeLinewidth=k.wireframeLinewidth,V.linewidth=k.linewidth,w.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const J=s.properties.get(V);J.light=w}return V}function C(L,k,w,I,V){if(L.visible===!1)return;if(L.layers.test(k.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&V===Xa)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,L.matrixWorld);const re=e.update(L),Y=L.material;if(Array.isArray(Y)){const Q=re.groups;for(let he=0,te=Q.length;he<te;he++){const K=Q[he],O=Y[K.materialIndex];if(O&&O.visible){const G=j(L,O,I,V);L.onBeforeShadow(s,L,k,w,re,G,K),s.renderBufferDirect(w,null,re,G,L,K),L.onAfterShadow(s,L,k,w,re,G,K)}}}else if(Y.visible){const Q=j(L,Y,I,V);L.onBeforeShadow(s,L,k,w,re,Q,null),s.renderBufferDirect(w,null,re,Q,L,null),L.onAfterShadow(s,L,k,w,re,Q,null)}}const J=L.children;for(let re=0,Y=J.length;re<Y;re++)C(J[re],k,w,I,V)}function D(L){L.target.removeEventListener("dispose",D);for(const w in m){const I=m[w],V=L.target.uuid;V in I&&(I[V].dispose(),delete I[V])}}}function h1(s,e){function n(){let z=!1;const Ae=new qt;let me=null;const Ce=new qt(0,0,0,0);return{setMask:function(ke){me!==ke&&!z&&(s.colorMask(ke,ke,ke,ke),me=ke)},setLocked:function(ke){z=ke},setClear:function(ke,ve,Ze,je,Tt){Tt===!0&&(ke*=je,ve*=je,Ze*=je),Ae.set(ke,ve,Ze,je),Ce.equals(Ae)===!1&&(s.clearColor(ke,ve,Ze,je),Ce.copy(Ae))},reset:function(){z=!1,me=null,Ce.set(-1,0,0,0)}}}function r(){let z=!1,Ae=!1,me=null,Ce=null,ke=null;return{setReversed:function(ve){if(Ae!==ve){const Ze=e.get("EXT_clip_control");ve?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const je=ke;ke=null,this.setClear(je)}},getReversed:function(){return Ae},setTest:function(ve){ve?de(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(ve){me!==ve&&!z&&(s.depthMask(ve),me=ve)},setFunc:function(ve){if(Ae&&(ve=B_[ve]),Ce!==ve){switch(ve){case fd:s.depthFunc(s.NEVER);break;case hd:s.depthFunc(s.ALWAYS);break;case pd:s.depthFunc(s.LESS);break;case qa:s.depthFunc(s.LEQUAL);break;case md:s.depthFunc(s.EQUAL);break;case gd:s.depthFunc(s.GEQUAL);break;case vd:s.depthFunc(s.GREATER);break;case _d:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=ve}},setLocked:function(ve){z=ve},setClear:function(ve){ke!==ve&&(ke=ve,Ae&&(ve=1-ve),s.clearDepth(ve))},reset:function(){z=!1,me=null,Ce=null,ke=null,Ae=!1}}}function o(){let z=!1,Ae=null,me=null,Ce=null,ke=null,ve=null,Ze=null,je=null,Tt=null;return{setTest:function(yt){z||(yt?de(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(yt){Ae!==yt&&!z&&(s.stencilMask(yt),Ae=yt)},setFunc:function(yt,gn,Kn){(me!==yt||Ce!==gn||ke!==Kn)&&(s.stencilFunc(yt,gn,Kn),me=yt,Ce=gn,ke=Kn)},setOp:function(yt,gn,Kn){(ve!==yt||Ze!==gn||je!==Kn)&&(s.stencilOp(yt,gn,Kn),ve=yt,Ze=gn,je=Kn)},setLocked:function(yt){z=yt},setClear:function(yt){Tt!==yt&&(s.clearStencil(yt),Tt=yt)},reset:function(){z=!1,Ae=null,me=null,Ce=null,ke=null,ve=null,Ze=null,je=null,Tt=null}}}const l=new n,u=new r,f=new o,p=new WeakMap,m=new WeakMap;let v={},_={},g={},M=new WeakMap,b=[],R=null,y=!1,x=null,F=null,j=null,C=null,D=null,L=null,k=null,w=new Et(0,0,0),I=0,V=!1,q=null,J=null,re=null,Y=null,Q=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,K=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(O)[1]),te=K>=1):O.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),te=K>=2);let G=null,P={};const ie=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Ve=new qt().fromArray(ie),De=new qt().fromArray(ye);function Fe(z,Ae,me,Ce){const ke=new Uint8Array(4),ve=s.createTexture();s.bindTexture(z,ve),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<me;Ze++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Ae+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return ve}const ae={};ae[s.TEXTURE_2D]=Fe(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=Fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=Fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=Fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),de(s.DEPTH_TEST),u.setFunc(qa),dt(!1),Ut(Zp),de(s.CULL_FACE),mt(Ji);function de(z){v[z]!==!0&&(s.enable(z),v[z]=!0)}function Se(z){v[z]!==!1&&(s.disable(z),v[z]=!1)}function Qe(z,Ae){return g[z]!==Ae?(s.bindFramebuffer(z,Ae),g[z]=Ae,z===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),z===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Oe(z,Ae){let me=b,Ce=!1;if(z){me=M.get(Ae),me===void 0&&(me=[],M.set(Ae,me));const ke=z.textures;if(me.length!==ke.length||me[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Ze=ke.length;ve<Ze;ve++)me[ve]=s.COLOR_ATTACHMENT0+ve;me.length=ke.length,Ce=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(me)}function ct(z){return R!==z?(s.useProgram(z),R=z,!0):!1}const zt={[Ws]:s.FUNC_ADD,[a_]:s.FUNC_SUBTRACT,[o_]:s.FUNC_REVERSE_SUBTRACT};zt[l_]=s.MIN,zt[c_]=s.MAX;const ut={[u_]:s.ZERO,[d_]:s.ONE,[f_]:s.SRC_COLOR,[ng]:s.SRC_ALPHA,[__]:s.SRC_ALPHA_SATURATE,[g_]:s.DST_COLOR,[p_]:s.DST_ALPHA,[h_]:s.ONE_MINUS_SRC_COLOR,[ig]:s.ONE_MINUS_SRC_ALPHA,[v_]:s.ONE_MINUS_DST_COLOR,[m_]:s.ONE_MINUS_DST_ALPHA,[x_]:s.CONSTANT_COLOR,[y_]:s.ONE_MINUS_CONSTANT_COLOR,[S_]:s.CONSTANT_ALPHA,[M_]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(z,Ae,me,Ce,ke,ve,Ze,je,Tt,yt){if(z===Ji){y===!0&&(Se(s.BLEND),y=!1);return}if(y===!1&&(de(s.BLEND),y=!0),z!==s_){if(z!==x||yt!==V){if((F!==Ws||D!==Ws)&&(s.blendEquation(s.FUNC_ADD),F=Ws,D=Ws),yt)switch(z){case Ya:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jp:s.blendFunc(s.ONE,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case em:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",z);break}else switch(z){case Ya:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qp:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case em:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",z);break}j=null,C=null,L=null,k=null,w.set(0,0,0),I=0,x=z,V=yt}return}ke=ke||Ae,ve=ve||me,Ze=Ze||Ce,(Ae!==F||ke!==D)&&(s.blendEquationSeparate(zt[Ae],zt[ke]),F=Ae,D=ke),(me!==j||Ce!==C||ve!==L||Ze!==k)&&(s.blendFuncSeparate(ut[me],ut[Ce],ut[ve],ut[Ze]),j=me,C=Ce,L=ve,k=Ze),(je.equals(w)===!1||Tt!==I)&&(s.blendColor(je.r,je.g,je.b,Tt),w.copy(je),I=Tt),x=z,V=!1}function Lt(z,Ae){z.side===Ki?Se(s.CULL_FACE):de(s.CULL_FACE);let me=z.side===Hn;Ae&&(me=!me),dt(me),z.blending===Ya&&z.transparent===!1?mt(Ji):mt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),l.setMask(z.colorWrite);const Ce=z.stencilWrite;f.setTest(Ce),Ce&&(f.setMask(z.stencilWriteMask),f.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),f.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),tn(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(z){q!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),q=z)}function Ut(z){z!==n_?(de(s.CULL_FACE),z!==J&&(z===Zp?s.cullFace(s.BACK):z===i_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),J=z}function $t(z){z!==re&&(te&&s.lineWidth(z),re=z)}function tn(z,Ae,me){z?(de(s.POLYGON_OFFSET_FILL),(Y!==Ae||Q!==me)&&(Y=Ae,Q=me,u.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,me))):Se(s.POLYGON_OFFSET_FILL)}function Pt(z){z?de(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function Ht(z){z===void 0&&(z=s.TEXTURE0+he-1),G!==z&&(s.activeTexture(z),G=z)}function W(z,Ae,me){me===void 0&&(G===null?me=s.TEXTURE0+he-1:me=G);let Ce=P[me];Ce===void 0&&(Ce={type:void 0,texture:void 0},P[me]=Ce),(Ce.type!==z||Ce.texture!==Ae)&&(G!==me&&(s.activeTexture(me),G=me),s.bindTexture(z,Ae||ae[z]),Ce.type=z,Ce.texture=Ae)}function sn(){const z=P[G];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function wt(){try{s.compressedTexImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function S(){try{s.texSubImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function $(){try{s.texSubImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Ee(){try{s.texStorage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function be(){try{s.texStorage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function pe(){try{s.texImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function ge(){try{s.texImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Re(z){return _[z]!==void 0?_[z]:s.getParameter(z)}function qe(z,Ae){_[z]!==Ae&&(s.pixelStorei(z,Ae),_[z]=Ae)}function Pe(z){Ve.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Ve.copy(z))}function Te(z){De.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),De.copy(z))}function $e(z,Ae){let me=m.get(Ae);me===void 0&&(me=new WeakMap,m.set(Ae,me));let Ce=me.get(z);Ce===void 0&&(Ce=s.getUniformBlockIndex(Ae,z.name),me.set(z,Ce))}function et(z,Ae){const Ce=m.get(Ae).get(z);p.get(Ae)!==Ce&&(s.uniformBlockBinding(Ae,Ce,z.__bindingPointIndex),p.set(Ae,Ce))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},_={},G=null,P={},g={},M=new WeakMap,b=[],R=null,y=!1,x=null,F=null,j=null,C=null,D=null,L=null,k=null,w=new Et(0,0,0),I=0,V=!1,q=null,J=null,re=null,Y=null,Q=null,Ve.set(0,0,s.canvas.width,s.canvas.height),De.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:de,disable:Se,bindFramebuffer:Qe,drawBuffers:Oe,useProgram:ct,setBlending:mt,setMaterial:Lt,setFlipSided:dt,setCullFace:Ut,setLineWidth:$t,setPolygonOffset:tn,setScissorTest:Pt,activeTexture:Ht,bindTexture:W,unbindTexture:sn,compressedTexImage2D:wt,compressedTexImage3D:N,texImage2D:pe,texImage3D:ge,pixelStorei:qe,getParameter:Re,updateUBOMapping:$e,uniformBlockBinding:et,texStorage2D:Ee,texStorage3D:be,texSubImage2D:S,texSubImage3D:$,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Pe,viewport:Te,reset:it}}function p1(s,e,n,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new St,v=new WeakMap,_=new Set;let g;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(N,S){return b?new OffscreenCanvas(N,S):Ja("canvas")}function y(N,S,$){let oe=1;const fe=wt(N);if((fe.width>$||fe.height>$)&&(oe=$/Math.max(fe.width,fe.height)),oe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Ee=Math.floor(oe*fe.width),be=Math.floor(oe*fe.height);g===void 0&&(g=R(Ee,be));const pe=S?R(Ee,be):g;return pe.width=Ee,pe.height=be,pe.getContext("2d").drawImage(N,0,0,Ee,be),st("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Ee+"x"+be+")."),pe}else return"data"in N&&st("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),N;return N}function x(N){return N.generateMipmaps}function F(N){s.generateMipmap(N)}function j(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(N,S,$,oe,fe,Ee=!1){if(N!==null){if(s[N]!==void 0)return s[N];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let be;oe&&(be=e.get("EXT_texture_norm16"),be||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=S;if(S===s.RED&&($===s.FLOAT&&(pe=s.R32F),$===s.HALF_FLOAT&&(pe=s.R16F),$===s.UNSIGNED_BYTE&&(pe=s.R8),$===s.UNSIGNED_SHORT&&be&&(pe=be.R16_EXT),$===s.SHORT&&be&&(pe=be.R16_SNORM_EXT)),S===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.R8UI),$===s.UNSIGNED_SHORT&&(pe=s.R16UI),$===s.UNSIGNED_INT&&(pe=s.R32UI),$===s.BYTE&&(pe=s.R8I),$===s.SHORT&&(pe=s.R16I),$===s.INT&&(pe=s.R32I)),S===s.RG&&($===s.FLOAT&&(pe=s.RG32F),$===s.HALF_FLOAT&&(pe=s.RG16F),$===s.UNSIGNED_BYTE&&(pe=s.RG8),$===s.UNSIGNED_SHORT&&be&&(pe=be.RG16_EXT),$===s.SHORT&&be&&(pe=be.RG16_SNORM_EXT)),S===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.RG8UI),$===s.UNSIGNED_SHORT&&(pe=s.RG16UI),$===s.UNSIGNED_INT&&(pe=s.RG32UI),$===s.BYTE&&(pe=s.RG8I),$===s.SHORT&&(pe=s.RG16I),$===s.INT&&(pe=s.RG32I)),S===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),$===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),$===s.UNSIGNED_INT&&(pe=s.RGB32UI),$===s.BYTE&&(pe=s.RGB8I),$===s.SHORT&&(pe=s.RGB16I),$===s.INT&&(pe=s.RGB32I)),S===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),$===s.UNSIGNED_INT&&(pe=s.RGBA32UI),$===s.BYTE&&(pe=s.RGBA8I),$===s.SHORT&&(pe=s.RGBA16I),$===s.INT&&(pe=s.RGBA32I)),S===s.RGB&&($===s.UNSIGNED_SHORT&&be&&(pe=be.RGB16_EXT),$===s.SHORT&&be&&(pe=be.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),S===s.RGBA){const ge=Ee?Vl:_t.getTransfer(fe);$===s.FLOAT&&(pe=s.RGBA32F),$===s.HALF_FLOAT&&(pe=s.RGBA16F),$===s.UNSIGNED_BYTE&&(pe=ge===It?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&be&&(pe=be.RGBA16_EXT),$===s.SHORT&&be&&(pe=be.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function D(N,S){let $;return N?S===null||S===Di||S===Ka?$=s.DEPTH24_STENCIL8:S===Pi?$=s.DEPTH32F_STENCIL8:S===$a&&($=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Di||S===Ka?$=s.DEPTH_COMPONENT24:S===Pi?$=s.DEPTH_COMPONENT32F:S===$a&&($=s.DEPTH_COMPONENT16),$}function L(N,S){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==xn&&N.minFilter!==An?Math.log2(Math.max(S.width,S.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?S.mipmaps.length:1}function k(N){const S=N.target;S.removeEventListener("dispose",k),I(S),S.isVideoTexture&&v.delete(S),S.isHTMLTexture&&_.delete(S)}function w(N){const S=N.target;S.removeEventListener("dispose",w),q(S)}function I(N){const S=r.get(N);if(S.__webglInit===void 0)return;const $=N.source,oe=M.get($);if(oe){const fe=oe[S.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&V(N),Object.keys(oe).length===0&&M.delete($)}r.remove(N)}function V(N){const S=r.get(N);s.deleteTexture(S.__webglTexture);const $=N.source,oe=M.get($);delete oe[S.__cacheKey],u.memory.textures--}function q(N){const S=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(S.__webglFramebuffer[oe]))for(let fe=0;fe<S.__webglFramebuffer[oe].length;fe++)s.deleteFramebuffer(S.__webglFramebuffer[oe][fe]);else s.deleteFramebuffer(S.__webglFramebuffer[oe]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[oe])}else{if(Array.isArray(S.__webglFramebuffer))for(let oe=0;oe<S.__webglFramebuffer.length;oe++)s.deleteFramebuffer(S.__webglFramebuffer[oe]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let oe=0;oe<S.__webglColorRenderbuffer.length;oe++)S.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[oe]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const $=N.textures;for(let oe=0,fe=$.length;oe<fe;oe++){const Ee=r.get($[oe]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),u.memory.textures--),r.remove($[oe])}r.remove(N)}let J=0;function re(){J=0}function Y(){return J}function Q(N){J=N}function he(){const N=J;return N>=o.maxTextures&&st("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+o.maxTextures),J+=1,N}function te(N){const S=[];return S.push(N.wrapS),S.push(N.wrapT),S.push(N.wrapR||0),S.push(N.magFilter),S.push(N.minFilter),S.push(N.anisotropy),S.push(N.internalFormat),S.push(N.format),S.push(N.type),S.push(N.generateMipmaps),S.push(N.premultiplyAlpha),S.push(N.flipY),S.push(N.unpackAlignment),S.push(N.colorSpace),S.join()}function K(N,S){const $=r.get(N);if(N.isVideoTexture&&W(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&$.__version!==N.version){const oe=N.image;if(oe===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Se($,N,S);return}}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+S)}function O(N,S){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){Se($,N,S);return}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+S)}function G(N,S){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){Se($,N,S);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+S)}function P(N,S){const $=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&$.__version!==N.version){Qe($,N,S);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+S)}const ie={[xd]:s.REPEAT,[Zi]:s.CLAMP_TO_EDGE,[yd]:s.MIRRORED_REPEAT},ye={[xn]:s.NEAREST,[T_]:s.NEAREST_MIPMAP_NEAREST,[ul]:s.NEAREST_MIPMAP_LINEAR,[An]:s.LINEAR,[Nu]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},Ve={[R_]:s.NEVER,[I_]:s.ALWAYS,[P_]:s.LESS,[df]:s.LEQUAL,[N_]:s.EQUAL,[ff]:s.GEQUAL,[L_]:s.GREATER,[D_]:s.NOTEQUAL};function De(N,S){if(S.type===Pi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===An||S.magFilter===Nu||S.magFilter===ul||S.magFilter===es||S.minFilter===An||S.minFilter===Nu||S.minFilter===ul||S.minFilter===es)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ie[S.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ie[S.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ie[S.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,ye[S.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,ye[S.minFilter]),S.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xn||S.minFilter!==ul&&S.minFilter!==es||S.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,o.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function Fe(N,S){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,S.addEventListener("dispose",k));const oe=S.source;let fe=M.get(oe);fe===void 0&&(fe={},M.set(oe,fe));const Ee=te(S);if(Ee!==N.__cacheKey){fe[Ee]===void 0&&(fe[Ee]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),fe[Ee].usedTimes++;const be=fe[N.__cacheKey];be!==void 0&&(fe[N.__cacheKey].usedTimes--,be.usedTimes===0&&V(S)),N.__cacheKey=Ee,N.__webglTexture=fe[Ee].texture}return $}function ae(N,S,$){return Math.floor(Math.floor(N/$)/S)}function de(N,S,$,oe){const Ee=N.updateRanges;if(Ee.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,$,oe,S.data);else{Ee.sort((qe,Pe)=>qe.start-Pe.start);let be=0;for(let qe=1;qe<Ee.length;qe++){const Pe=Ee[be],Te=Ee[qe],$e=Pe.start+Pe.count,et=ae(Te.start,S.width,4),it=ae(Pe.start,S.width,4);Te.start<=$e+1&&et===it&&ae(Te.start+Te.count-1,S.width,4)===et?Pe.count=Math.max(Pe.count,Te.start+Te.count-Pe.start):(++be,Ee[be]=Te)}Ee.length=be+1;const pe=n.getParameter(s.UNPACK_ROW_LENGTH),ge=n.getParameter(s.UNPACK_SKIP_PIXELS),Re=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let qe=0,Pe=Ee.length;qe<Pe;qe++){const Te=Ee[qe],$e=Math.floor(Te.start/4),et=Math.ceil(Te.count/4),it=$e%S.width,z=Math.floor($e/S.width),Ae=et,me=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,it),n.pixelStorei(s.UNPACK_SKIP_ROWS,z),n.texSubImage2D(s.TEXTURE_2D,0,it,z,Ae,me,$,oe,S.data)}N.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,pe),n.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function Se(N,S,$){let oe=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=s.TEXTURE_3D);const fe=Fe(N,S),Ee=S.source;n.bindTexture(oe,N.__webglTexture,s.TEXTURE0+$);const be=r.get(Ee);if(Ee.version!==be.__version||fe===!0){if(n.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const me=_t.getPrimaries(_t.workingColorSpace),Ce=S.colorSpace===Rr?null:_t.getPrimaries(S.colorSpace),ke=S.colorSpace===Rr||me===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}n.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let ge=y(S.image,!1,o.maxTextureSize);ge=sn(S,ge);const Re=l.convert(S.format,S.colorSpace),qe=l.convert(S.type);let Pe=C(S.internalFormat,Re,qe,S.normalized,S.colorSpace,S.isVideoTexture);De(oe,S);let Te;const $e=S.mipmaps,et=S.isVideoTexture!==!0,it=be.__version===void 0||fe===!0,z=Ee.dataReady,Ae=L(S,ge);if(S.isDepthTexture)Pe=D(S.format===ts,S.type),it&&(et?n.texStorage2D(s.TEXTURE_2D,1,Pe,ge.width,ge.height):n.texImage2D(s.TEXTURE_2D,0,Pe,ge.width,ge.height,0,Re,qe,null));else if(S.isDataTexture)if($e.length>0){et&&it&&n.texStorage2D(s.TEXTURE_2D,Ae,Pe,$e[0].width,$e[0].height);for(let me=0,Ce=$e.length;me<Ce;me++)Te=$e[me],et?z&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,Re,qe,Te.data):n.texImage2D(s.TEXTURE_2D,me,Pe,Te.width,Te.height,0,Re,qe,Te.data);S.generateMipmaps=!1}else et?(it&&n.texStorage2D(s.TEXTURE_2D,Ae,Pe,ge.width,ge.height),z&&de(S,ge,Re,qe)):n.texImage2D(s.TEXTURE_2D,0,Pe,ge.width,ge.height,0,Re,qe,ge.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){et&&it&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Pe,$e[0].width,$e[0].height,ge.depth);for(let me=0,Ce=$e.length;me<Ce;me++)if(Te=$e[me],S.format!==Si)if(Re!==null)if(et){if(z)if(S.layerUpdates.size>0){const ke=Tm(Te.width,Te.height,S.format,S.type);for(const ve of S.layerUpdates){const Ze=Te.data.subarray(ve*ke/Te.data.BYTES_PER_ELEMENT,(ve+1)*ke/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,ve,Te.width,Te.height,1,Re,Ze)}}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,ge.depth,Re,Te.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Pe,Te.width,Te.height,ge.depth,0,Te.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?z&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,ge.depth,Re,qe,Te.data):n.texImage3D(s.TEXTURE_2D_ARRAY,me,Pe,Te.width,Te.height,ge.depth,0,Re,qe,Te.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{et&&it&&n.texStorage2D(s.TEXTURE_2D,Ae,Pe,$e[0].width,$e[0].height);for(let me=0,Ce=$e.length;me<Ce;me++)Te=$e[me],S.format!==Si?Re!==null?et?z&&n.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,Re,Te.data):n.compressedTexImage2D(s.TEXTURE_2D,me,Pe,Te.width,Te.height,0,Te.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?z&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,Re,qe,Te.data):n.texImage2D(s.TEXTURE_2D,me,Pe,Te.width,Te.height,0,Re,qe,Te.data)}else if(S.isDataArrayTexture)if(et){if(it&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Pe,ge.width,ge.height,ge.depth),z)if(S.layerUpdates.size>0){const me=Tm(ge.width,ge.height,S.format,S.type);for(const Ce of S.layerUpdates){const ke=ge.data.subarray(Ce*me/ge.data.BYTES_PER_ELEMENT,(Ce+1)*me/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ce,ge.width,ge.height,1,Re,qe,ke)}S.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Re,qe,ge.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,ge.width,ge.height,ge.depth,0,Re,qe,ge.data);else if(S.isData3DTexture)et?(it&&n.texStorage3D(s.TEXTURE_3D,Ae,Pe,ge.width,ge.height,ge.depth),z&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Re,qe,ge.data)):n.texImage3D(s.TEXTURE_3D,0,Pe,ge.width,ge.height,ge.depth,0,Re,qe,ge.data);else if(S.isFramebufferTexture){if(it)if(et)n.texStorage2D(s.TEXTURE_2D,Ae,Pe,ge.width,ge.height);else{let me=ge.width,Ce=ge.height;for(let ke=0;ke<Ae;ke++)n.texImage2D(s.TEXTURE_2D,ke,Pe,me,Ce,0,Re,qe,null),me>>=1,Ce>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),_.add(S),me.onpaint=Ce=>{const ke=Ce.changedElements;for(const ve of _)ke.includes(ve.image)&&(ve.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const ke=s.RGBA,ve=s.RGBA,Ze=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ke,ve,Ze,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if($e.length>0){if(et&&it){const me=wt($e[0]);n.texStorage2D(s.TEXTURE_2D,Ae,Pe,me.width,me.height)}for(let me=0,Ce=$e.length;me<Ce;me++)Te=$e[me],et?z&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Re,qe,Te):n.texImage2D(s.TEXTURE_2D,me,Pe,Re,qe,Te);S.generateMipmaps=!1}else if(et){if(it){const me=wt(ge);n.texStorage2D(s.TEXTURE_2D,Ae,Pe,me.width,me.height)}z&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,qe,ge)}else n.texImage2D(s.TEXTURE_2D,0,Pe,Re,qe,ge);x(S)&&F(oe),be.__version=Ee.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function Qe(N,S,$){if(S.image.length!==6)return;const oe=Fe(N,S),fe=S.source;n.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+$);const Ee=r.get(fe);if(fe.version!==Ee.__version||oe===!0){n.activeTexture(s.TEXTURE0+$);const be=_t.getPrimaries(_t.workingColorSpace),pe=S.colorSpace===Rr?null:_t.getPrimaries(S.colorSpace),ge=S.colorSpace===Rr||be===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Re=S.isCompressedTexture||S.image[0].isCompressedTexture,qe=S.image[0]&&S.image[0].isDataTexture,Pe=[];for(let ve=0;ve<6;ve++)!Re&&!qe?Pe[ve]=y(S.image[ve],!0,o.maxCubemapSize):Pe[ve]=qe?S.image[ve].image:S.image[ve],Pe[ve]=sn(S,Pe[ve]);const Te=Pe[0],$e=l.convert(S.format,S.colorSpace),et=l.convert(S.type),it=C(S.internalFormat,$e,et,S.normalized,S.colorSpace),z=S.isVideoTexture!==!0,Ae=Ee.__version===void 0||oe===!0,me=fe.dataReady;let Ce=L(S,Te);De(s.TEXTURE_CUBE_MAP,S);let ke;if(Re){z&&Ae&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,it,Te.width,Te.height);for(let ve=0;ve<6;ve++){ke=Pe[ve].mipmaps;for(let Ze=0;Ze<ke.length;Ze++){const je=ke[Ze];S.format!==Si?$e!==null?z?me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze,0,0,je.width,je.height,$e,je.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze,it,je.width,je.height,0,je.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze,0,0,je.width,je.height,$e,et,je.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze,it,je.width,je.height,0,$e,et,je.data)}}}else{if(ke=S.mipmaps,z&&Ae){ke.length>0&&Ce++;const ve=wt(Pe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,it,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(qe){z?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Pe[ve].width,Pe[ve].height,$e,et,Pe[ve].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,it,Pe[ve].width,Pe[ve].height,0,$e,et,Pe[ve].data);for(let Ze=0;Ze<ke.length;Ze++){const Tt=ke[Ze].image[ve].image;z?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze+1,0,0,Tt.width,Tt.height,$e,et,Tt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze+1,it,Tt.width,Tt.height,0,$e,et,Tt.data)}}else{z?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,$e,et,Pe[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,it,$e,et,Pe[ve]);for(let Ze=0;Ze<ke.length;Ze++){const je=ke[Ze];z?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze+1,0,0,$e,et,je.image[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze+1,it,$e,et,je.image[ve])}}}x(S)&&F(s.TEXTURE_CUBE_MAP),Ee.__version=fe.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function Oe(N,S,$,oe,fe,Ee){const be=l.convert($.format,$.colorSpace),pe=l.convert($.type),ge=C($.internalFormat,be,pe,$.normalized,$.colorSpace),Re=r.get(S),qe=r.get($);if(qe.__renderTarget=S,!Re.__hasExternalTextures){const Pe=Math.max(1,S.width>>Ee),Te=Math.max(1,S.height>>Ee);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?n.texImage3D(fe,Ee,ge,Pe,Te,S.depth,0,be,pe,null):n.texImage2D(fe,Ee,ge,Pe,Te,0,be,pe,null)}n.bindFramebuffer(s.FRAMEBUFFER,N),Ht(S)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,fe,qe.__webglTexture,0,Pt(S)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,fe,qe.__webglTexture,Ee),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(N,S,$){if(s.bindRenderbuffer(s.RENDERBUFFER,N),S.depthBuffer){const oe=S.depthTexture,fe=oe&&oe.isDepthTexture?oe.type:null,Ee=D(S.stencilBuffer,fe),be=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ht(S)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(S),Ee,S.width,S.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(S),Ee,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,N)}else{const oe=S.textures;for(let fe=0;fe<oe.length;fe++){const Ee=oe[fe],be=l.convert(Ee.format,Ee.colorSpace),pe=l.convert(Ee.type),ge=C(Ee.internalFormat,be,pe,Ee.normalized,Ee.colorSpace);Ht(S)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(S),ge,S.width,S.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(S),ge,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ge,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(N,S,$){const oe=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,N),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(S.depthTexture);if(fe.__renderTarget=S,(!fe.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),oe){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,S.depthTexture.addEventListener("dispose",k)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),De(s.TEXTURE_CUBE_MAP,S.depthTexture);const Re=l.convert(S.depthTexture.format),qe=l.convert(S.depthTexture.type);let Pe;S.depthTexture.format===nr?Pe=s.DEPTH_COMPONENT24:S.depthTexture.format===ts&&(Pe=s.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Pe,S.width,S.height,0,Re,qe,null)}}else K(S.depthTexture,0);const Ee=fe.__webglTexture,be=Pt(S),pe=oe?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,ge=S.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===nr)Ht(S)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Ee,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Ee,0);else if(S.depthTexture.format===ts)Ht(S)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Ee,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(N){const S=r.get(N),$=N.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==N.depthTexture){const oe=N.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),oe){const fe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,oe.removeEventListener("dispose",fe)};oe.addEventListener("dispose",fe),S.__depthDisposeCallback=fe}S.__boundDepthTexture=oe}if(N.depthTexture&&!S.__autoAllocateDepthBuffer)if($)for(let oe=0;oe<6;oe++)zt(S.__webglFramebuffer[oe],N,oe);else{const oe=N.texture.mipmaps;oe&&oe.length>0?zt(S.__webglFramebuffer[0],N,0):zt(S.__webglFramebuffer,N,0)}else if($){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(n.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]===void 0)S.__webglDepthbuffer[oe]=s.createRenderbuffer(),ct(S.__webglDepthbuffer[oe],N,!1);else{const fe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=S.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Ee)}}else{const oe=N.texture.mipmaps;if(oe&&oe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ct(S.__webglDepthbuffer,N,!1);else{const fe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Ee)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(N,S,$){const oe=r.get(N);S!==void 0&&Oe(oe.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&ut(N)}function Lt(N){const S=N.texture,$=r.get(N),oe=r.get(S);N.addEventListener("dispose",w);const fe=N.textures,Ee=N.isWebGLCubeRenderTarget===!0,be=fe.length>1;if(be||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=S.version,u.memory.textures++),Ee){$.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer[pe]=[];for(let ge=0;ge<S.mipmaps.length;ge++)$.__webglFramebuffer[pe][ge]=s.createFramebuffer()}else $.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)$.__webglFramebuffer[pe]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(be)for(let pe=0,ge=fe.length;pe<ge;pe++){const Re=r.get(fe[pe]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&Ht(N)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let pe=0;pe<fe.length;pe++){const ge=fe[pe];$.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[pe]);const Re=l.convert(ge.format,ge.colorSpace),qe=l.convert(ge.type),Pe=C(ge.internalFormat,Re,qe,ge.normalized,ge.colorSpace,N.isXRRenderTarget===!0),Te=Pt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Pe,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,$.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ct($.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){n.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),De(s.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Oe($.__webglFramebuffer[pe][ge],N,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else Oe($.__webglFramebuffer[pe],N,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);x(S)&&F(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let pe=0,ge=fe.length;pe<ge;pe++){const Re=fe[pe],qe=r.get(Re);let Pe=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pe=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Pe,qe.__webglTexture),De(Pe,Re),Oe($.__webglFramebuffer,N,Re,s.COLOR_ATTACHMENT0+pe,Pe,0),x(Re)&&F(Pe)}n.unbindTexture()}else{let pe=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(pe=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(pe,oe.__webglTexture),De(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Oe($.__webglFramebuffer[ge],N,S,s.COLOR_ATTACHMENT0,pe,ge);else Oe($.__webglFramebuffer,N,S,s.COLOR_ATTACHMENT0,pe,0);x(S)&&F(pe),n.unbindTexture()}N.depthBuffer&&ut(N)}function dt(N){const S=N.textures;for(let $=0,oe=S.length;$<oe;$++){const fe=S[$];if(x(fe)){const Ee=j(N),be=r.get(fe).__webglTexture;n.bindTexture(Ee,be),F(Ee),n.unbindTexture()}}}const Ut=[],$t=[];function tn(N){if(N.samples>0){if(Ht(N)===!1){const S=N.textures,$=N.width,oe=N.height;let fe=s.COLOR_BUFFER_BIT;const Ee=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=r.get(N),pe=S.length>1;if(pe)for(let Re=0;Re<S.length;Re++)n.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const ge=N.texture.mipmaps;ge&&ge.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[Re]);const qe=r.get(S[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qe,0)}s.blitFramebuffer(0,0,$,oe,0,0,$,oe,fe,s.NEAREST),p===!0&&(Ut.length=0,$t.length=0,Ut.push(s.COLOR_ATTACHMENT0+Re),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Ut.push(Ee),$t.push(Ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$t)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<S.length;Re++){n.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,be.__webglColorRenderbuffer[Re]);const qe=r.get(S[Re]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,qe,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&p){const S=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Pt(N){return Math.min(o.maxSamples,N.samples)}function Ht(N){const S=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function W(N){const S=u.render.frame;v.get(N)!==S&&(v.set(N,S),N.update())}function sn(N,S){const $=N.colorSpace,oe=N.format,fe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==Hl&&$!==Rr&&(_t.getTransfer($)===It?(oe!==Si||fe!==$n)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",$)),S}function wt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=he,this.resetTextureUnits=re,this.getTextureUnits=Y,this.setTextureUnits=Q,this.setTexture2D=K,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=P,this.rebindTextures=mt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Ht,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function m1(s,e){function n(r,o=Rr){let l;const u=_t.getTransfer(o);if(r===$n)return s.UNSIGNED_BYTE;if(r===af)return s.UNSIGNED_SHORT_4_4_4_4;if(r===of)return s.UNSIGNED_SHORT_5_5_5_1;if(r===mg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===gg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===hg)return s.BYTE;if(r===pg)return s.SHORT;if(r===$a)return s.UNSIGNED_SHORT;if(r===sf)return s.INT;if(r===Di)return s.UNSIGNED_INT;if(r===Pi)return s.FLOAT;if(r===Ii)return s.HALF_FLOAT;if(r===vg)return s.ALPHA;if(r===_g)return s.RGB;if(r===Si)return s.RGBA;if(r===nr)return s.DEPTH_COMPONENT;if(r===ts)return s.DEPTH_STENCIL;if(r===xg)return s.RED;if(r===lf)return s.RED_INTEGER;if(r===rs)return s.RG;if(r===cf)return s.RG_INTEGER;if(r===uf)return s.RGBA_INTEGER;if(r===Dl||r===Il||r===Ul||r===Fl)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Dl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Dl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sd||r===Md||r===Ed||r===wd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Sd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Md)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ed)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Td||r===bd||r===Ad||r===Cd||r===Rd||r===Bl||r===Pd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Td||r===bd)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ad)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Cd)return l.COMPRESSED_R11_EAC;if(r===Rd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Bl)return l.COMPRESSED_RG11_EAC;if(r===Pd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Nd||r===Ld||r===Dd||r===Id||r===Ud||r===Fd||r===kd||r===Od||r===Bd||r===zd||r===Hd||r===Vd||r===Gd||r===Wd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Nd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ld)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Id)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ud)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Od)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xd||r===jd||r===Yd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Xd)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Yd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qd||r===$d||r===zl||r===Kd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===qd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===$d)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ka?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const g1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Cg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ui({vertexShader:g1,fragmentShader:v1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ai(new io(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x1 extends ss{constructor(e,n){super();const r=this;let o=null,l=1,u=null,f="local-floor",p=1,m=null,v=null,_=null,g=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",y=new _1,x={},F=n.getContextAttributes();let j=null,C=null;const D=[],L=[],k=new St;let w=null,I=null;const V=new si;V.viewport=new qt;const q=new si;q.viewport=new qt;const J=[V,q],re=new Ax;let Y=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let de=D[ae];return de===void 0&&(de=new zu,D[ae]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ae){let de=D[ae];return de===void 0&&(de=new zu,D[ae]=de),de.getGripSpace()},this.getHand=function(ae){let de=D[ae];return de===void 0&&(de=new zu,D[ae]=de),de.getHandSpace()};function he(ae){const de=L.indexOf(ae.inputSource);if(de===-1)return;const Se=D[de];Se!==void 0&&(Se.update(ae.inputSource,ae.frame,m||u),Se.dispatchEvent({type:ae.type,data:ae.inputSource}))}function te(){o.removeEventListener("select",he),o.removeEventListener("selectstart",he),o.removeEventListener("selectend",he),o.removeEventListener("squeeze",he),o.removeEventListener("squeezestart",he),o.removeEventListener("squeezeend",he),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",K);for(let ae=0;ae<D.length;ae++){const de=L[ae];de!==null&&(L[ae]=null,D[ae].disconnect(de))}Y=null,Q=null,y.reset();for(const ae in x)delete x[ae];if(e.setRenderTarget(j),M=null,g=null,_=null,o=null,C=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),I!==null){const ae=I.camera;ae.fov=I.fov,ae.zoom=I.zoom,ae.updateProjectionMatrix(),I=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ae){m=ae},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(j=e.getRenderTarget(),o.addEventListener("select",he),o.addEventListener("selectstart",he),o.addEventListener("selectend",he),o.addEventListener("squeeze",he),o.addEventListener("squeezestart",he),o.addEventListener("squeezeend",he),o.addEventListener("end",te),o.addEventListener("inputsourceschange",K),F.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Qe=null,Oe=null;F.depth&&(Oe=F.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=F.stencil?ts:nr,Qe=F.stencil?Ka:Di);const ct={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(ct),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Mi(g.textureWidth,g.textureHeight,{format:Si,type:$n,depthTexture:new Qa(g.textureWidth,g.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Se={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,n,Se),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new Mi(M.framebufferWidth,M.framebufferHeight,{format:Si,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(f),Fe.setContext(o),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(ae){for(let de=0;de<ae.removed.length;de++){const Se=ae.removed[de],Qe=L.indexOf(Se);Qe>=0&&(L[Qe]=null,D[Qe].disconnect(Se))}for(let de=0;de<ae.added.length;de++){const Se=ae.added[de];let Qe=L.indexOf(Se);if(Qe===-1){for(let ct=0;ct<D.length;ct++)if(ct>=L.length){L.push(Se),Qe=ct;break}else if(L[ct]===null){L[ct]=Se,Qe=ct;break}if(Qe===-1)break}const Oe=D[Qe];Oe&&Oe.connect(Se)}}const O=new le,G=new le;function P(ae,de,Se){O.setFromMatrixPosition(de.matrixWorld),G.setFromMatrixPosition(Se.matrixWorld);const Qe=O.distanceTo(G),Oe=de.projectionMatrix.elements,ct=Se.projectionMatrix.elements,zt=Oe[14]/(Oe[10]-1),ut=Oe[14]/(Oe[10]+1),mt=(Oe[9]+1)/Oe[5],Lt=(Oe[9]-1)/Oe[5],dt=(Oe[8]-1)/Oe[0],Ut=(ct[8]+1)/ct[0],$t=zt*dt,tn=zt*Ut,Pt=Qe/(-dt+Ut),Ht=Pt*-dt;if(de.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Ht),ae.translateZ(Pt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Oe[10]===-1)ae.projectionMatrix.copy(de.projectionMatrix),ae.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const W=zt+Pt,sn=ut+Pt,wt=$t-Ht,N=tn+(Qe-Ht),S=mt*ut/sn*W,$=Lt*ut/sn*W;ae.projectionMatrix.makePerspective(wt,N,S,$,W,sn),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function ie(ae,de){de===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(de.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let de=ae.near,Se=ae.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(Se=y.depthFar)),re.near=q.near=V.near=de,re.far=q.far=V.far=Se,(Y!==re.near||Q!==re.far)&&(o.updateRenderState({depthNear:re.near,depthFar:re.far}),Y=re.near,Q=re.far),re.layers.mask=ae.layers.mask|6,V.layers.mask=re.layers.mask&-5,q.layers.mask=re.layers.mask&-3;const Qe=ae.parent,Oe=re.cameras;ie(re,Qe);for(let ct=0;ct<Oe.length;ct++)ie(Oe[ct],Qe);Oe.length===2?P(re,V,q):re.projectionMatrix.copy(V.projectionMatrix),I===null&&ae.isPerspectiveCamera&&(I={camera:ae,fov:ae.fov,zoom:ae.zoom}),ye(ae,re,Qe)};function ye(ae,de,Se){Se===null?ae.matrix.copy(de.matrixWorld):(ae.matrix.copy(Se.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(de.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(de.projectionMatrix),ae.projectionMatrixInverse.copy(de.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Jd*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(ae){p=ae,g!==null&&(g.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(re)},this.getCameraTexture=function(ae){return x[ae]};let Ve=null;function De(ae,de){if(v=de.getViewerPose(m||u),b=de,v!==null){const Se=v.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let Qe=!1;Se.length!==re.cameras.length&&(re.cameras.length=0,Qe=!0);for(let ut=0;ut<Se.length;ut++){const mt=Se[ut];let Lt=null;if(M!==null)Lt=M.getViewport(mt);else{const Ut=_.getViewSubImage(g,mt);Lt=Ut.viewport,ut===0&&(e.setRenderTargetTextures(C,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(C))}let dt=J[ut];dt===void 0&&(dt=new si,dt.layers.enable(ut),dt.viewport=new qt,J[ut]=dt),dt.matrix.fromArray(mt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(mt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),ut===0&&(re.matrix.copy(dt.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),Qe===!0&&re.cameras.push(dt)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const ut=_.getDepthInformation(Se[0]);ut&&ut.isValid&&ut.texture&&y.init(ut,o.renderState)}if(Oe&&Oe.includes("camera-access")&&R){e.state.unbindTexture(),_=r.getBinding();for(let ut=0;ut<Se.length;ut++){const mt=Se[ut].camera;if(mt){let Lt=x[mt];Lt||(Lt=new Cg,x[mt]=Lt);const dt=_.getCameraImage(mt);Lt.sourceTexture=dt}}}}for(let Se=0;Se<D.length;Se++){const Qe=L[Se],Oe=D[Se];Qe!==null&&Oe!==void 0&&Oe.update(Qe,de,m||u)}Ve&&Ve(ae,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),b=null}const Fe=new Lg;Fe.setAnimationLoop(De),this.setAnimationLoop=function(ae){Ve=ae},this.dispose=function(){}}}const y1=new Jt,Bg=new ot;Bg.set(-1,0,0,0,1,0,0,0,1);function S1(s,e){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Rg(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,F,j,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(y,x):x.isMeshLambertMaterial?(l(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(y,x),_(y,x)):x.isMeshPhongMaterial?(l(y,x),v(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(y,x),g(y,x),x.isMeshPhysicalMaterial&&M(y,x,C)):x.isMeshMatcapMaterial?(l(y,x),b(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),R(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?p(y,x,F,j):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Hn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Hn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const F=e.get(x),j=F.envMap,C=F.envMapRotation;j&&(y.envMap.value=j,y.envMapRotation.value.setFromMatrix4(y1.makeRotationFromEuler(C)).transpose(),j.isCubeTexture&&j.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Bg),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,F,j){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*F,y.scale.value=j*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,F){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Hn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.retroreflectivity>0&&(y.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function R(y,x){const F=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function M1(s,e,n,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,D){const L=D.program;r.uniformBlockBinding(C,L)}function m(C,D){let L=o[C.id];L===void 0&&(y(C),L=v(C),o[C.id]=L,C.addEventListener("dispose",F));const k=D.program;r.updateUBOMapping(C,k);const w=e.render.frame;l[C.id]!==w&&(g(C),l[C.id]=w)}function v(C){const D=_();C.__bindingPointIndex=D;const L=s.createBuffer(),k=C.__size,w=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,k,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,L),L}function _(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const D=o[C.id],L=C.uniforms,k=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let w=0,I=L.length;w<I;w++){const V=L[w];if(Array.isArray(V))for(let q=0,J=V.length;q<J;q++)M(V[q],w,q,k);else M(V,w,0,k)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,D,L,k){if(R(C,D,L,k)===!0){const w=C.__offset,I=C.value;if(Array.isArray(I)){let V=0;for(let q=0;q<I.length;q++){const J=I[q],re=x(J);b(J,C.__data,V),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(V+=re.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(I,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,C.__data)}}function b(C,D,L){typeof C=="number"||typeof C=="boolean"?D[0]=C:C.isMatrix3?(D[0]=C.elements[0],D[1]=C.elements[1],D[2]=C.elements[2],D[3]=0,D[4]=C.elements[3],D[5]=C.elements[4],D[6]=C.elements[5],D[7]=0,D[8]=C.elements[6],D[9]=C.elements[7],D[10]=C.elements[8],D[11]=0):ArrayBuffer.isView(C)?D.set(new C.constructor(C.buffer,C.byteOffset,D.length)):C.toArray(D,L)}function R(C,D,L,k){const w=C.value,I=D+"_"+L;if(k[I]===void 0)return typeof w=="number"||typeof w=="boolean"?k[I]=w:ArrayBuffer.isView(w)?k[I]=w.slice():k[I]=w.clone(),!0;{const V=k[I];if(typeof w=="number"||typeof w=="boolean"){if(V!==w)return k[I]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(V.equals(w)===!1)return V.copy(w),!0}}return!1}function y(C){const D=C.uniforms;let L=0;const k=16;for(let I=0,V=D.length;I<V;I++){const q=Array.isArray(D[I])?D[I]:[D[I]];for(let J=0,re=q.length;J<re;J++){const Y=q[J],Q=Array.isArray(Y.value)?Y.value:[Y.value];for(let he=0,te=Q.length;he<te;he++){const K=Q[he],O=x(K),G=L%k,P=G%O.boundary,ie=G+P;L+=P,ie!==0&&k-ie<O.storage&&(L+=k-ie),Y.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=L,L+=O.storage}}}const w=L%k;return w>0&&(L+=k-w),C.__size=L,C.__cache={},this}function x(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(D.boundary=16,D.storage=C.byteLength):st("WebGLRenderer: Unsupported uniform value type.",C),D}function F(C){const D=C.target;D.removeEventListener("dispose",F);const L=u.indexOf(D.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function j(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:p,update:m,dispose:j}}const E1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function w1(){return Ci===null&&(Ci=new cx(E1,16,16,rs,Ii),Ci.name="DFG_LUT",Ci.minFilter=An,Ci.magFilter=An,Ci.wrapS=Zi,Ci.wrapT=Zi,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class T1{constructor(e={}){const{canvas:n=k_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:M=$n}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const R=M,y=new Set([uf,cf,lf]),x=new Set([$n,Di,$a,Ka,af,of]),F=new Uint32Array(4),j=new Int32Array(4),C=new le;let D=null,L=null;const k=[],w=[];let I=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let q=!1,J=null,re=null,Y=null,Q=null;this._outputColorSpace=qn;let he=0,te=0,K=null,O=-1,G=null;const P=new qt,ie=new qt;let ye=null;const Ve=new Et(0);let De=0,Fe=n.width,ae=n.height,de=1,Se=null,Qe=null;const Oe=new qt(0,0,Fe,ae),ct=new qt(0,0,Fe,ae);let zt=!1;const ut=new mf;let mt=!1,Lt=!1;const dt=new Jt,Ut=new le,$t=new qt,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Ht(){return K===null?de:1}let W=r;function sn(T,H){return n.getContext(T,H)}let wt,N,S,$,oe,fe,Ee,be,pe,ge,Re,qe,Pe,Te,$e,et,it,z,Ae,me,Ce,ke,ve;try{const T={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rf}`),n.addEventListener("webglcontextlost",Tt,!1),n.addEventListener("webglcontextrestored",yt,!1),n.addEventListener("webglcontextcreationerror",gn,!1),W===null){const H="webgl2";if(W=sn(H,T),W===null)throw sn(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(T){throw n.removeEventListener("webglcontextlost",Tt,!1),n.removeEventListener("webglcontextrestored",yt,!1),n.removeEventListener("webglcontextcreationerror",gn,!1),Ct("WebGLRenderer: "+T.message),T}function Ze(){wt=new wM(W),wt.init(),Ce=new m1(W,wt),N=new pM(W,wt,e,Ce),S=new h1(W,wt),N.reversedDepthBuffer&&g&&S.buffers.depth.setReversed(!0),re=W.createFramebuffer(),Y=W.createFramebuffer(),Q=W.createFramebuffer(),$=new AM(W),oe=new QE,fe=new p1(W,wt,S,oe,N,Ce,$),Ee=new EM(V),be=new Rx(W),ke=new fM(W,be),pe=new TM(W,be,$,ke),ge=new RM(W,pe,be,ke,$),z=new CM(W,N,fe),$e=new mM(oe),Re=new JE(V,Ee,wt,N,ke,$e),qe=new S1(V,oe),Pe=new t1,Te=new o1(wt),it=new dM(V,Ee,S,ge,b,p),et=new f1(V,ge,N),ve=new M1(W,$,N,S),Ae=new hM(W,wt,$),me=new bM(W,wt,$),$.programs=Re.programs,V.capabilities=N,V.extensions=wt,V.properties=oe,V.renderLists=Pe,V.shadowMap=et,V.state=S,V.info=$}R!==$n&&(I=new NM(R,n.width,n.height,f,o,l));const je=new x1(V,W);this.xr=je,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=wt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=wt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(T){T!==void 0&&(de=T,this.setSize(Fe,ae,!1))},this.getSize=function(T){return T.set(Fe,ae)},this.setSize=function(T,H,ce=!0){if(je.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=T,ae=H,n.width=Math.floor(T*de),n.height=Math.floor(H*de),ce===!0&&(n.style.width=T+"px",n.style.height=H+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(Fe*de,ae*de).floor()},this.setDrawingBufferSize=function(T,H,ce){Fe=T,ae=H,de=ce,n.width=Math.floor(T*ce),n.height=Math.floor(H*ce),this.setViewport(0,0,T,H)},this.setEffects=function(T){if(R===$n){Ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let H=0;H<T.length;H++)if(T[H].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(Oe)},this.setViewport=function(T,H,ce,ee){T.isVector4?Oe.set(T.x,T.y,T.z,T.w):Oe.set(T,H,ce,ee),S.viewport(P.copy(Oe).multiplyScalar(de).round())},this.getScissor=function(T){return T.copy(ct)},this.setScissor=function(T,H,ce,ee){T.isVector4?ct.set(T.x,T.y,T.z,T.w):ct.set(T,H,ce,ee),S.scissor(ie.copy(ct).multiplyScalar(de).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(T){S.setScissorTest(zt=T)},this.setOpaqueSort=function(T){Se=T},this.setTransparentSort=function(T){Qe=T},this.getClearColor=function(T){return T.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,ce=!0){let ee=0;if(T){let Z=!1;if(K!==null){const Ie=K.texture.format;Z=y.has(Ie)}if(Z){const Ie=K.texture.type,Ne=x.has(Ie),Le=it.getClearColor(),We=it.getClearAlpha(),Ke=Le.r,at=Le.g,lt=Le.b;Ne?(F[0]=Ke,F[1]=at,F[2]=lt,F[3]=We,W.clearBufferuiv(W.COLOR,0,F)):(j[0]=Ke,j[1]=at,j[2]=lt,j[3]=We,W.clearBufferiv(W.COLOR,0,j))}else ee|=W.COLOR_BUFFER_BIT}H&&(ee|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ee|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&W.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),J=T},this.dispose=function(){n.removeEventListener("webglcontextlost",Tt,!1),n.removeEventListener("webglcontextrestored",yt,!1),n.removeEventListener("webglcontextcreationerror",gn,!1),it.dispose(),Pe.dispose(),Te.dispose(),oe.dispose(),Ee.dispose(),ge.dispose(),ke.dispose(),ve.dispose(),Re.dispose(),je.dispose(),je.removeEventListener("sessionstart",ro),je.removeEventListener("sessionend",so),Pn.stop()};function Tt(T){T.preventDefault(),im("WebGLRenderer: Context Lost."),q=!0}function yt(){im("WebGLRenderer: Context Restored."),q=!1;const T=$.autoReset,H=et.enabled,ce=et.autoUpdate,ee=et.needsUpdate,Z=et.type;Ze(),$.autoReset=T,et.enabled=H,et.autoUpdate=ce,et.needsUpdate=ee,et.type=Z}function gn(T){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Kn(T){const H=T.target;H.removeEventListener("dispose",Kn),Lr(H)}function Lr(T){as(T),oe.remove(T)}function as(T){const H=oe.get(T).programs;H!==void 0&&(H.forEach(function(ce){Re.releaseProgram(ce)}),T.isShaderMaterial&&Re.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,ce,ee,Z,Ie){H===null&&(H=tn);const Ne=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Le=Xt(T,H,ce,ee,Z);S.setMaterial(ee,Ne);let We=ce.index,Ke=1;if(ee.wireframe===!0){if(We=pe.getWireframeAttribute(ce),We===void 0)return;Ke=2}const at=ce.drawRange,lt=ce.attributes.position;let He=at.start*Ke,gt=(at.start+at.count)*Ke;Ie!==null&&(He=Math.max(He,Ie.start*Ke),gt=Math.min(gt,(Ie.start+Ie.count)*Ke)),We!==null?(He=Math.max(He,0),gt=Math.min(gt,We.count)):lt!=null&&(He=Math.max(He,0),gt=Math.min(gt,lt.count));const Kt=gt-He;if(Kt<0||Kt===1/0)return;ke.setup(Z,ee,Le,ce,We);let Ft,Rt=Ae;if(We!==null&&(Ft=be.get(We),Rt=me,Rt.setIndex(Ft)),Z.isMesh)ee.wireframe===!0?(S.setLineWidth(ee.wireframeLinewidth*Ht()),Rt.setMode(W.LINES)):Rt.setMode(W.TRIANGLES);else if(Z.isLine){let an=ee.linewidth;an===void 0&&(an=1),S.setLineWidth(an*Ht()),Z.isLineSegments?Rt.setMode(W.LINES):Z.isLineLoop?Rt.setMode(W.LINE_LOOP):Rt.setMode(W.LINE_STRIP)}else Z.isPoints?Rt.setMode(W.POINTS):Z.isSprite&&Rt.setMode(W.TRIANGLES);if(Z.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const an=Z._multiDrawStarts,Be=Z._multiDrawCounts,Qt=Z._multiDrawCount,vt=We?be.get(We).bytesPerElement:1,yn=oe.get(ee).currentProgram.getUniforms();for(let ft=0;ft<Qt;ft++)yn.setValue(W,"_gl_DrawID",ft),Rt.render(an[ft]/vt,Be[ft])}else if(Z.isInstancedMesh)Rt.renderInstances(He,Kt,Z.count);else if(ce.isInstancedBufferGeometry){const an=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Be=Math.min(ce.instanceCount,an);Rt.renderInstances(He,Kt,Be)}else Rt.render(He,Kt)};function Dr(T,H,ce,ee){J!==null&&T.isNodeMaterial&&J.setObject(ee,T),mt===!0&&$e.setState(T,ce,!1),T.transparent===!0&&T.side===Ki&&T.forceSinglePass===!1?(T.side=Hn,T.needsUpdate=!0,Fr(T,H,ee),T.side=ns,T.needsUpdate=!0,Fr(T,H,ee),T.side=Ki):Fr(T,H,ee)}this.compile=function(T,H,ce=null){ce===null&&(ce=T),J!==null&&J.renderStart(T,H,ce),L=Te.get(ce),L.init(H),w.push(L),ce.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(L.pushLight(Z),Z.castShadow&&L.pushShadow(Z))}),T!==ce&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(L.pushLight(Z),Z.castShadow&&L.pushShadow(Z))}),L.setupLights(),J!==null&&J.updateLights(L.state.lightsArray),Lt=this.localClippingEnabled,mt=$e.init(this.clippingPlanes,Lt),mt===!0&&$e.setGlobalState(this.clippingPlanes,H),J!==null&&et.render(L.state.shadowsArray,ce,H);const ee=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ie=Z.material;if(Ie)if(Array.isArray(Ie))for(let Ne=0;Ne<Ie.length;Ne++){const Le=Ie[Ne];Dr(Le,ce,H,Z),ee.add(Le)}else Dr(Ie,ce,H,Z),ee.add(Ie)}),L=w.pop(),J!==null&&J.renderEnd(),ee},this.compileAsync=function(T,H,ce=null){const ee=this.compile(T,H,ce);return new Promise(Z=>{function Ie(){if(ee.forEach(function(Ne){const We=oe.get(Ne).currentProgram;(We===void 0||We.isReady())&&ee.delete(Ne)}),ee.size===0){Z(T);return}setTimeout(Ie,10)}wt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Ir=null;function Yl(T){Ir&&Ir(T)}function ro(){Pn.stop()}function so(){Pn.start()}const Pn=new Lg;Pn.setAnimationLoop(Yl),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(T){Ir=T,je.setAnimationLoop(T),T===null?Pn.stop():Pn.start()},je.addEventListener("sessionstart",ro),je.addEventListener("sessionend",so),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;J!==null&&J.renderStart(T,H);const ce=je.enabled===!0&&je.isPresenting===!0,ee=I!==null&&(K===null||ce)&&I.begin(V,K);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(H),H=je.getCamera()),T.isScene===!0&&T.onBeforeRender(V,T,H,K),L=Te.get(T,w.length),L.init(H),L.state.textureUnits=fe.getTextureUnits(),w.push(L),dt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ut.setFromProjectionMatrix(dt,Ni,H.reversedDepth),Lt=this.localClippingEnabled,mt=$e.init(this.clippingPlanes,Lt),D=Pe.get(T,k.length),D.init(),k.push(D),je.enabled===!0&&je.isPresenting===!0){const Ne=V.xr.getDepthSensingMesh();Ne!==null&&os(Ne,H,-1/0,V.sortObjects)}os(T,H,0,V.sortObjects),D.finish(),J!==null&&J.updateLights(L.state.lightsArray),V.sortObjects===!0&&D.sort(Se,Qe),Pt=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,Pt&&it.addToRenderList(D,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&$e.beginShadows();const Z=L.state.shadowsArray;if(et.render(Z,T,H),mt===!0&&$e.endShadows(),(ee&&I.hasRenderPass())===!1){const Ne=D.opaque,Le=D.transmissive;if(L.setupLights(),H.isArrayCamera){const We=H.cameras;if(Le.length>0)for(let Ke=0,at=We.length;Ke<at;Ke++){const lt=We[Ke];ao(Ne,Le,T,lt)}Pt&&it.render(T);for(let Ke=0,at=We.length;Ke<at;Ke++){const lt=We[Ke];ta(D,T,lt,lt.viewport)}}else Le.length>0&&ao(Ne,Le,T,H),Pt&&it.render(T),ta(D,T,H)}K!==null&&te===0&&(fe.updateMultisampleRenderTarget(K),fe.updateRenderTargetMipmap(K)),ee&&I.end(V),T.isScene===!0&&T.onAfterRender(V,T,H),ke.resetDefaultState(),O=-1,G=null,w.pop(),w.length>0?(L=w[w.length-1],fe.setTextureUnits(L.state.textureUnits),mt===!0&&$e.setGlobalState(V.clippingPlanes,L.state.camera)):L=null,k.pop(),k.length>0?D=k[k.length-1]:D=null,J!==null&&J.renderEnd()};function os(T,H,ce,ee){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)ce=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLightProbeGrid)L.pushLightProbeGrid(T);else if(T.isLight)L.pushLight(T),T.castShadow&&L.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ut)){ee&&$t.setFromMatrixPosition(T.matrixWorld).applyMatrix4(dt);const Ne=ge.update(T),Le=T.material;Le.visible&&D.push(T,Ne,Le,ce,$t.z,null,H)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ut))){const Ne=ge.update(T),Le=T.material;if(ee&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$t.copy(T.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),$t.copy(Ne.boundingSphere.center)),$t.applyMatrix4(T.matrixWorld).applyMatrix4(dt)),Array.isArray(Le)){const We=Ne.groups;for(let Ke=0,at=We.length;Ke<at;Ke++){const lt=We[Ke],He=Le[lt.materialIndex];He&&He.visible&&D.push(T,Ne,He,ce,$t.z,lt,H)}}else Le.visible&&D.push(T,Ne,Le,ce,$t.z,null,H)}}const Ie=T.children;for(let Ne=0,Le=Ie.length;Ne<Le;Ne++)os(Ie[Ne],H,ce,ee)}function ta(T,H,ce,ee){const{opaque:Z,transmissive:Ie,transparent:Ne}=T;L.setupLightsView(ce),mt===!0&&$e.setGlobalState(V.clippingPlanes,ce),ee&&S.viewport(P.copy(ee)),Z.length>0&&Ur(Z,H,ce),Ie.length>0&&Ur(Ie,H,ce),Ne.length>0&&Ur(Ne,H,ce),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function ao(T,H,ce,ee){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ee.id]===void 0){const He=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ee.id]=new Mi(1,1,{generateMipmaps:!0,type:He?Ii:$n,minFilter:es,samples:Math.max(4,N.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const Ie=L.state.transmissionRenderTarget[ee.id],Ne=ee.viewport||P;Ie.setSize(Ne.z*V.transmissionResolutionScale,Ne.w*V.transmissionResolutionScale);const Le=V.getRenderTarget(),We=V.getActiveCubeFace(),Ke=V.getActiveMipmapLevel();V.setRenderTarget(Ie),V.getClearColor(Ve),De=V.getClearAlpha(),De<1&&V.setClearColor(16777215,.5),V.clear(),Pt&&it.render(ce);const at=V.toneMapping;V.toneMapping=Li;const lt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),L.setupLightsView(ee),mt===!0&&$e.setGlobalState(V.clippingPlanes,ee),Ur(T,ce,ee),fe.updateMultisampleRenderTarget(Ie),fe.updateRenderTargetMipmap(Ie),wt.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let gt=0,Kt=H.length;gt<Kt;gt++){const Ft=H[gt],{object:Rt,geometry:an,material:Be,group:Qt}=Ft;if(Be.side===Ki&&Rt.layers.test(ee.layers)){const vt=Be.side;Be.side=Hn,Be.needsUpdate=!0,na(Rt,ce,ee,an,Be,Qt),Be.side=vt,Be.needsUpdate=!0,He=!0}}He===!0&&(fe.updateMultisampleRenderTarget(Ie),fe.updateRenderTargetMipmap(Ie))}V.setRenderTarget(Le,We,Ke),V.setClearColor(Ve,De),lt!==void 0&&(ee.viewport=lt),V.toneMapping=at}function Ur(T,H,ce){const ee=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Ie=T.length;Z<Ie;Z++){const Ne=T[Z],{object:Le,geometry:We,group:Ke}=Ne;let at=Ne.material;at.allowOverride===!0&&ee!==null&&(at=ee),Le.layers.test(ce.layers)&&na(Le,H,ce,We,at,Ke)}}function na(T,H,ce,ee,Z,Ie){J!==null&&Z.isNodeMaterial&&J.setObject(T,Z),T.onBeforeRender(V,H,ce,ee,Z,Ie),T.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(V,H,ce,ee,T,Ie),Z.transparent===!0&&Z.side===Ki&&Z.forceSinglePass===!1?(Z.side=Hn,Z.needsUpdate=!0,V.renderBufferDirect(ce,H,ee,Z,T,Ie),Z.side=ns,Z.needsUpdate=!0,V.renderBufferDirect(ce,H,ee,Z,T,Ie),Z.side=Ki):V.renderBufferDirect(ce,H,ee,Z,T,Ie),T.onAfterRender(V,H,ce,ee,Z,Ie)}function Fr(T,H,ce){H.isScene!==!0&&(H=tn);const ee=oe.get(T),Z=L.state.lights,Ie=L.state.shadowsArray,Ne=Z.state.version,Le=Re.getParameters(T,Z.state,Ie,H,ce,L.state.lightProbeGridArray),We=Re.getProgramCacheKey(Le);let Ke=ee.programs;ee.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,ee.fog=H.fog;const at=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ee.envMap=Ee.get(T.envMap||ee.environment,at),ee.envMapRotation=ee.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Ke===void 0&&(T.addEventListener("dispose",Kn),Ke=new Map,ee.programs=Ke);let lt=Ke.get(We);if(lt!==void 0){if(ee.currentProgram===lt&&ee.lightsStateVersion===Ne)return oo(T,Le),lt}else Le.uniforms=Re.getUniforms(T),J!==null&&T.isNodeMaterial&&J.build(T,ce,Le),T.onBeforeCompile(Le,V),lt=Re.acquireProgram(Le,We),Ke.set(We,lt),ee.uniforms=Le.uniforms;const He=ee.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=$e.uniform),oo(T,Le),ee.needsLights=ra(T),ee.lightsStateVersion=Ne,ee.needsLights&&(He.ambientLightColor.value=Z.state.ambient,He.lightProbe.value=Z.state.probe,He.sunLights.value=Z.state.sun,He.sunLightShadows.value=Z.state.sunShadow,He.directionalLights.value=Z.state.directional,He.directionalLightShadows.value=Z.state.directionalShadow,He.spotLights.value=Z.state.spot,He.spotLightShadows.value=Z.state.spotShadow,He.rectAreaLights.value=Z.state.rectArea,He.ltc_1.value=Z.state.rectAreaLTC1,He.ltc_2.value=Z.state.rectAreaLTC2,He.pointLights.value=Z.state.point,He.pointLightShadows.value=Z.state.pointShadow,He.hemisphereLights.value=Z.state.hemi,He.sunShadowMatrix.value=Z.state.sunShadowMatrix,He.sunShadowCascade.value=Z.state.sunShadowCascade,He.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,He.spotLightMatrix.value=Z.state.spotLightMatrix,He.spotLightMap.value=Z.state.spotLightMap,He.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.lightProbeGrid=L.state.lightProbeGridArray.length>0,ee.currentProgram=lt,ee.uniformsList=null,lt}function ia(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=kl.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function oo(T,H){const ce=oe.get(T);ce.outputColorSpace=H.outputColorSpace,ce.batching=H.batching,ce.batchingColor=H.batchingColor,ce.instancing=H.instancing,ce.instancingColor=H.instancingColor,ce.instancingMorph=H.instancingMorph,ce.skinning=H.skinning,ce.morphTargets=H.morphTargets,ce.morphNormals=H.morphNormals,ce.morphColors=H.morphColors,ce.morphTargetsCount=H.morphTargetsCount,ce.numClippingPlanes=H.numClippingPlanes,ce.numIntersection=H.numClipIntersection,ce.vertexAlphas=H.vertexAlphas,ce.vertexTangents=H.vertexTangents,ce.toneMapping=H.toneMapping}function ql(T,H){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;C.setFromMatrixPosition(H.matrixWorld);for(let ce=0,ee=T.length;ce<ee;ce++){const Z=T[ce];if(Z.texture!==null&&Z.boundingBox.containsPoint(C))return Z}return null}function Xt(T,H,ce,ee,Z){H.isScene!==!0&&(H=tn),fe.resetTextureUnits();const Ie=H.fog,Ne=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?H.environment:null,Le=K===null?V.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:_t.workingColorSpace,We=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ke=Ee.get(ee.envMap||Ne,We),at=ee.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,lt=!!ce.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),He=!!ce.morphAttributes.position,gt=!!ce.morphAttributes.normal,Kt=!!ce.morphAttributes.color;let Ft=Li;ee.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ft=V.toneMapping);const Rt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,an=Rt!==void 0?Rt.length:0,Be=oe.get(ee),Qt=L.state.lights;if(mt===!0&&(Lt===!0||T!==G)){const Dt=T===G&&ee.id===O;$e.setState(ee,T,Dt)}let vt=!1;ee.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Qt.state.version||Be.outputColorSpace!==Le||Z.isBatchedMesh&&Be.batching===!1||!Z.isBatchedMesh&&Be.batching===!0||Z.isBatchedMesh&&Be.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Be.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Be.instancing===!1||!Z.isInstancedMesh&&Be.instancing===!0||Z.isSkinnedMesh&&Be.skinning===!1||!Z.isSkinnedMesh&&Be.skinning===!0||Z.isInstancedMesh&&Be.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Be.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Be.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Be.instancingMorph===!1&&Z.morphTexture!==null||Be.envMap!==Ke||ee.fog===!0&&Be.fog!==Ie||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==$e.numPlanes||Be.numIntersection!==$e.numIntersection)||Be.vertexAlphas!==at||Be.vertexTangents!==lt||Be.morphTargets!==He||Be.morphNormals!==gt||Be.morphColors!==Kt||Be.toneMapping!==Ft||Be.morphTargetsCount!==an||!!Be.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Be.__version=ee.version);let yn=Be.currentProgram;vt===!0&&(yn=Fr(ee,H,Z),J&&ee.isNodeMaterial&&J.onUpdateProgram(ee,yn,Be));let ft=!1,oi=!1,Fi=!1;const bt=yn.getUniforms(),Vt=Be.uniforms;if(S.useProgram(yn.program)&&(ft=!0,oi=!0,Fi=!0),ee.id!==O&&(O=ee.id,oi=!0),Be.needsLights){const Dt=ql(L.state.lightProbeGridArray,Z);Be.lightProbeGrid!==Dt&&(Be.lightProbeGrid=Dt,oi=!0)}if(ft||G!==T){S.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),bt.setValue(W,"projectionMatrix",T.projectionMatrix),bt.setValue(W,"viewMatrix",T.matrixWorldInverse);const Zn=bt.map.cameraPosition;Zn!==void 0&&Zn.setValue(W,Ut.setFromMatrixPosition(T.matrixWorld)),N.logarithmicDepthBuffer&&bt.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&bt.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),G!==T&&(G=T,oi=!0,Fi=!0)}if(Be.needsLights&&(Qt.state.sunShadowMap.length>0&&bt.setValue(W,"sunShadowMap",Qt.state.sunShadowMap,fe),Qt.state.directionalShadowMap.length>0&&bt.setValue(W,"directionalShadowMap",Qt.state.directionalShadowMap,fe),Qt.state.spotShadowMap.length>0&&bt.setValue(W,"spotShadowMap",Qt.state.spotShadowMap,fe),Qt.state.pointShadowMap.length>0&&bt.setValue(W,"pointShadowMap",Qt.state.pointShadowMap,fe)),Z.isSkinnedMesh){bt.setOptional(W,Z,"bindMatrix"),bt.setOptional(W,Z,"bindMatrixInverse");const Dt=Z.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),bt.setValue(W,"boneTexture",Dt.boneTexture,fe))}Z.isBatchedMesh&&(bt.setOptional(W,Z,"batchingTexture"),bt.setValue(W,"batchingTexture",Z._matricesTexture,fe),bt.setOptional(W,Z,"batchingIdTexture"),bt.setValue(W,"batchingIdTexture",Z._indirectTexture,fe),bt.setOptional(W,Z,"batchingColorTexture"),Z._colorsTexture!==null&&bt.setValue(W,"batchingColorTexture",Z._colorsTexture,fe));const li=ce.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&z.update(Z,ce,yn),(oi||Be.receiveShadow!==Z.receiveShadow)&&(Be.receiveShadow=Z.receiveShadow,bt.setValue(W,"receiveShadow",Z.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&H.environment!==null&&(Vt.envMapIntensity.value=H.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=w1()),oi){if(bt.setValue(W,"toneMappingExposure",V.toneMappingExposure),Be.needsLights&&$l(Vt,Fi),Ie&&ee.fog===!0&&qe.refreshFogUniforms(Vt,Ie),qe.refreshMaterialUniforms(Vt,ee,de,ae,L.state.transmissionRenderTarget[T.id]),Be.needsLights&&Be.lightProbeGrid){const Dt=Be.lightProbeGrid;Vt.probesSH.value=Dt.texture,Vt.probesMin.value.copy(Dt.boundingBox.min),Vt.probesMax.value.copy(Dt.boundingBox.max),Vt.probesResolution.value.copy(Dt.resolution)}kl.upload(W,ia(Be),Vt,fe)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(kl.upload(W,ia(Be),Vt,fe),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&bt.setValue(W,"center",Z.center),bt.setValue(W,"modelViewMatrix",Z.modelViewMatrix),bt.setValue(W,"normalMatrix",Z.normalMatrix),bt.setValue(W,"modelMatrix",Z.matrixWorld),ee.uniformsGroups!==void 0){const Dt=ee.uniformsGroups;for(let Zn=0,ci=Dt.length;Zn<ci;Zn++){const ui=Dt[Zn];ve.update(ui,yn),ve.bind(ui,yn)}}return yn}function $l(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.sunLights.needsUpdate=H,T.sunLightShadows.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function ra(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(T,H,ce){const ee=oe.get(T);ee.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),oe.get(T.texture).__webglTexture=H,oe.get(T.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ce,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const ce=oe.get(T);ce.__webglFramebuffer=H,ce.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,ce=0){K=T,he=H,te=ce;let ee=null,Z=!1,Ie=!1;if(T){const Le=oe.get(T);if(Le.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(W.FRAMEBUFFER,Le.__webglFramebuffer),P.copy(T.viewport),ie.copy(T.scissor),ye=T.scissorTest,S.viewport(P),S.scissor(ie),S.setScissorTest(ye),O=-1;return}else if(Le.__webglFramebuffer===void 0)fe.setupRenderTarget(T);else if(Le.__hasExternalTextures)fe.rebindTextures(T,oe.get(T.texture).__webglTexture,oe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const at=T.depthTexture;if(Le.__boundDepthTexture!==at){if(at!==null&&oe.has(at)&&(T.width!==at.image.width||T.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(T)}}const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const Ke=oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[H])?ee=Ke[H][ce]:ee=Ke[H],Z=!0):T.samples>0&&fe.useMultisampledRTT(T)===!1?ee=oe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?ee=Ke[ce]:ee=Ke,P.copy(T.viewport),ie.copy(T.scissor),ye=T.scissorTest}else P.copy(Oe).multiplyScalar(de).floor(),ie.copy(ct).multiplyScalar(de).floor(),ye=zt;if(ce!==0&&(ee=re),S.bindFramebuffer(W.FRAMEBUFFER,ee)&&S.drawBuffers(T,ee),S.viewport(P),S.scissor(ie),S.setScissorTest(ye),Z){const Le=oe.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+H,Le.__webglTexture,ce)}else if(Ie){const Le=H;for(let We=0;We<T.textures.length;We++){const Ke=oe.get(T.textures[We]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+We,Ke.__webglTexture,ce,Le)}}else if(T!==null&&ce!==0){const Le=oe.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Le.__webglTexture,ce)}O=-1};function sa(T){const H=oe.get(T);return(H.__readFormat!==T.format||H.__readType!==T.type)&&(H.__readFormat=T.format,H.__readType=T.type,H.__formatReadable=N.textureFormatReadable(T.format),H.__typeReadable=N.textureTypeReadable(T.type)),H}this.readRenderTargetPixels=function(T,H,ce,ee,Z,Ie,Ne,Le=0){if(!(T&&T.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(We=We[Ne]),We){S.bindFramebuffer(W.FRAMEBUFFER,We);try{const Ke=T.textures[Le],at=Ke.format,lt=Ke.type;T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Le);const He=sa(Ke);if(He.__formatReadable===!1){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-ee&&ce>=0&&ce<=T.height-Z&&W.readPixels(H,ce,ee,Z,Ce.convert(at),Ce.convert(lt),Ie)}finally{const Ke=K!==null?oe.get(K).__webglFramebuffer:null;S.bindFramebuffer(W.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(T,H,ce,ee,Z,Ie,Ne,Le=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(We=We[Ne]),We)if(H>=0&&H<=T.width-ee&&ce>=0&&ce<=T.height-Z){S.bindFramebuffer(W.FRAMEBUFFER,We);const Ke=T.textures[Le],at=Ke.format,lt=Ke.type;T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Le);const He=sa(Ke);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,gt),W.bufferData(W.PIXEL_PACK_BUFFER,Ie.byteLength,W.STREAM_READ),W.readPixels(H,ce,ee,Z,Ce.convert(at),Ce.convert(lt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const Kt=K!==null?oe.get(K).__webglFramebuffer:null;S.bindFramebuffer(W.FRAMEBUFFER,Kt);const Ft=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await O_(W,Ft,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,gt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ie),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(gt),W.deleteSync(Ft),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,ce=0){const ee=Math.pow(2,-ce),Z=Math.floor(T.image.width*ee),Ie=Math.floor(T.image.height*ee),Ne=H!==null?H.x:0,Le=H!==null?H.y:0;fe.setTexture2D(T,0),W.copyTexSubImage2D(W.TEXTURE_2D,ce,0,0,Ne,Le,Z,Ie),S.unbindTexture()},this.copyTextureToTexture=function(T,H,ce=null,ee=null,Z=0,Ie=0){let Ne,Le,We,Ke,at,lt,He,gt,Kt;const Ft=T.isCompressedTexture?T.mipmaps[Ie]:T.image;if(ce!==null)Ne=ce.max.x-ce.min.x,Le=ce.max.y-ce.min.y,We=ce.isBox3?ce.max.z-ce.min.z:1,Ke=ce.min.x,at=ce.min.y,lt=ce.isBox3?ce.min.z:0;else{const Vt=Math.pow(2,-Z);Ne=Math.floor(Ft.width*Vt),Le=Math.floor(Ft.height*Vt),T.isDataArrayTexture?We=Ft.depth:T.isData3DTexture?We=Math.floor(Ft.depth*Vt):We=1,Ke=0,at=0,lt=0}ee!==null?(He=ee.x,gt=ee.y,Kt=ee.z):(He=0,gt=0,Kt=0);const Rt=Ce.convert(H.format),an=Ce.convert(H.type);let Be;H.isData3DTexture?(fe.setTexture3D(H,0),Be=W.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(fe.setTexture2DArray(H,0),Be=W.TEXTURE_2D_ARRAY):(fe.setTexture2D(H,0),Be=W.TEXTURE_2D),S.activeTexture(W.TEXTURE0),S.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,H.flipY),S.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),S.pixelStorei(W.UNPACK_ALIGNMENT,H.unpackAlignment);const Qt=S.getParameter(W.UNPACK_ROW_LENGTH),vt=S.getParameter(W.UNPACK_IMAGE_HEIGHT),yn=S.getParameter(W.UNPACK_SKIP_PIXELS),ft=S.getParameter(W.UNPACK_SKIP_ROWS),oi=S.getParameter(W.UNPACK_SKIP_IMAGES);S.pixelStorei(W.UNPACK_ROW_LENGTH,Ft.width),S.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ft.height),S.pixelStorei(W.UNPACK_SKIP_PIXELS,Ke),S.pixelStorei(W.UNPACK_SKIP_ROWS,at),S.pixelStorei(W.UNPACK_SKIP_IMAGES,lt);const Fi=T.isDataArrayTexture||T.isData3DTexture,bt=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const Vt=oe.get(T),li=oe.get(H),Dt=oe.get(Vt.__renderTarget),Zn=oe.get(li.__renderTarget);S.bindFramebuffer(W.READ_FRAMEBUFFER,Dt.__webglFramebuffer),S.bindFramebuffer(W.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let ci=0;ci<We;ci++)Fi&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,oe.get(T).__webglTexture,Z,lt+ci),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,oe.get(H).__webglTexture,Ie,Kt+ci)),W.blitFramebuffer(Ke,at,Ne,Le,He,gt,Ne,Le,W.DEPTH_BUFFER_BIT,W.NEAREST);S.bindFramebuffer(W.READ_FRAMEBUFFER,null),S.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||oe.has(T)){const Vt=oe.get(T),li=oe.get(H);S.bindFramebuffer(W.READ_FRAMEBUFFER,Y),S.bindFramebuffer(W.DRAW_FRAMEBUFFER,Q);for(let Dt=0;Dt<We;Dt++)Fi?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Vt.__webglTexture,Z,lt+Dt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Vt.__webglTexture,Z),bt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,li.__webglTexture,Ie,Kt+Dt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,li.__webglTexture,Ie),Z!==0?W.blitFramebuffer(Ke,at,Ne,Le,He,gt,Ne,Le,W.COLOR_BUFFER_BIT,W.NEAREST):bt?W.copyTexSubImage3D(Be,Ie,He,gt,Kt+Dt,Ke,at,Ne,Le):W.copyTexSubImage2D(Be,Ie,He,gt,Ke,at,Ne,Le);S.bindFramebuffer(W.READ_FRAMEBUFFER,null),S.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else bt?T.isDataTexture||T.isData3DTexture?W.texSubImage3D(Be,Ie,He,gt,Kt,Ne,Le,We,Rt,an,Ft.data):H.isCompressedArrayTexture?W.compressedTexSubImage3D(Be,Ie,He,gt,Kt,Ne,Le,We,Rt,Ft.data):W.texSubImage3D(Be,Ie,He,gt,Kt,Ne,Le,We,Rt,an,Ft):T.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ie,He,gt,Ne,Le,Rt,an,Ft.data):T.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ie,He,gt,Ft.width,Ft.height,Rt,Ft.data):W.texSubImage2D(W.TEXTURE_2D,Ie,He,gt,Ne,Le,Rt,an,Ft);S.pixelStorei(W.UNPACK_ROW_LENGTH,Qt),S.pixelStorei(W.UNPACK_IMAGE_HEIGHT,vt),S.pixelStorei(W.UNPACK_SKIP_PIXELS,yn),S.pixelStorei(W.UNPACK_SKIP_ROWS,ft),S.pixelStorei(W.UNPACK_SKIP_IMAGES,oi),Ie===0&&H.generateMipmaps&&W.generateMipmap(Be),S.unbindTexture()},this.initRenderTarget=function(T){oe.get(T).__webglFramebuffer===void 0&&fe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?fe.setTextureCube(T,0):T.isData3DTexture?fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?fe.setTexture2DArray(T,0):fe.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){he=0,te=0,K=null,S.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),n.unpackColorSpace=_t._getUnpackColorSpace()}}function b1(){const s=Nt.useRef(null);return Nt.useEffect(()=>{const e=s.current;if(!e)return;const n=e.clientWidth,r=e.clientHeight,o=new ex,l=new si(40,n/r,.1,100);l.position.set(0,0,10);const u=new T1({antialias:!0,alpha:!0});u.setSize(n,r),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(u.domElement),o.add(new Tx(16777215,.55));const f=new rd(16777215,1.1);f.position.set(6,9,7),o.add(f);const p=new rd(11584734,.4);p.position.set(-5,-3,4),o.add(p);const m=new rd(16777215,.3);m.position.set(-3,5,-6),o.add(m);const v=new Mx,_=Qv.map(O=>{const G=v.load(O);return G.colorSpace=qn,G}),g={py:16777215,ny:16766208,px:11997748,nx:16734208,pz:18093,nz:39752},M=.82,b=new io(M,M),R=new td({color:1118481,roughness:.45,metalness:.05}),y=O=>new td({color:O,roughness:.28,metalness:0}),x=O=>new td({map:O,roughness:.3,metalness:0}),F=new Xs;o.add(F);const j=.94,D=1+.06,L=j/2+.002;for(let O=-1;O<=1;O++)for(let G=-1;G<=1;G++)for(let P=-1;P<=1;P++){const ie=new Xs;ie.position.set(O*D,G*D,P*D);const ye=new Qs(j,j,j),Ve=new ai(ye,R);ie.add(Ve);const De=[];O===1&&De.push({key:"px",axis:"x",sign:1}),O===-1&&De.push({key:"nx",axis:"x",sign:-1}),G===1&&De.push({key:"py",axis:"y",sign:1}),G===-1&&De.push({key:"ny",axis:"y",sign:-1}),P===1&&De.push({key:"pz",axis:"z",sign:1}),P===-1&&De.push({key:"nz",axis:"z",sign:-1});for(const Fe of De){const de=Math.random()<.38&&_.length>0?x(_[Math.floor(Math.random()*_.length)]):y(g[Fe.key]),Se=new ai(b,de);Fe.axis==="x"?(Se.position.x=Fe.sign*L,Se.rotation.y=Fe.sign*Math.PI/2):Fe.axis==="y"?(Se.position.y=Fe.sign*L,Se.rotation.x=-Fe.sign*Math.PI/2):(Se.position.z=Fe.sign*L,Fe.sign<0&&(Se.rotation.y=Math.PI)),ie.add(Se)}F.add(ie)}F.rotation.x=-.42,F.rotation.y=.62;let k=!1,w=0,I=0,V=0,q=0;const J=O=>{k=!0,w=O.clientX,I=O.clientY,u.domElement.style.cursor="grabbing"},re=O=>{if(!k)return;const G=O.clientX-w,P=O.clientY-I;q=G*.006,V=P*.006,F.rotation.y+=q,F.rotation.x+=V,w=O.clientX,I=O.clientY},Y=()=>{k=!1,u.domElement.style.cursor="grab"};u.domElement.style.cursor="grab",u.domElement.style.touchAction="none",u.domElement.addEventListener("pointerdown",J),u.domElement.addEventListener("pointermove",re),u.domElement.addEventListener("pointerup",Y),u.domElement.addEventListener("pointercancel",Y);let Q=0;const he=()=>{Q=requestAnimationFrame(he),k||(F.rotation.y+=q*.95+.002,F.rotation.x+=V*.92,q*=.92,V*=.9),u.render(o,l)};he();const te=()=>{const O=e.clientWidth,G=e.clientHeight;l.aspect=O/G,l.updateProjectionMatrix(),u.setSize(O,G)},K=new ResizeObserver(te);return K.observe(e),()=>{cancelAnimationFrame(Q),K.disconnect(),u.domElement.removeEventListener("pointerdown",J),u.domElement.removeEventListener("pointermove",re),u.domElement.removeEventListener("pointerup",Y),u.domElement.removeEventListener("pointercancel",Y),u.dispose(),o.traverse(O=>{O instanceof ai&&(O.geometry?.dispose(),Array.isArray(O.material)?O.material.forEach(G=>G.dispose()):O.material?.dispose())}),_.forEach(O=>O.dispose()),b.dispose(),u.domElement.parentNode===e&&e.removeChild(u.domElement)}},[]),A.jsx("div",{ref:s,className:"h-full w-full"})}function A1(){const s=Nr();return A.jsxs("section",{id:"about",ref:s,className:"py-12 sm:py-16 px-6 sm:px-10 max-w-5xl mx-auto",children:[A.jsxs("div",{className:"grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start",children:[A.jsxs("div",{className:"reveal",children:[A.jsx("span",{className:"text-[11px] tracking-[0.25em] uppercase text-white/40 font-light",children:"About"}),A.jsx("h1",{className:"mt-5 text-5xl sm:text-7xl font-medium text-white tracking-tight leading-[1.0]",children:mn.name}),A.jsx("p",{className:"mt-3 text-lg sm:text-xl text-white/50 font-light tracking-wide",children:"Aspiring Marketer"}),A.jsx("div",{className:"mt-5 flex flex-wrap gap-2 text-[12px] text-white/50",children:mn.roles.map(e=>A.jsx("span",{className:"px-3.5 py-1 rounded-full border border-white/15",children:e},e))}),A.jsxs("div",{className:"mt-8 relative pl-6 border-l border-white/15",children:[A.jsx(Hv,{className:"absolute -left-2.5 top-0 h-4 w-4 text-white/30 bg-black p-0.5"}),A.jsx("p",{className:"text-white/60 leading-[1.75] text-[15px] font-light",children:mn.bio})]}),A.jsxs("div",{className:"mt-8 flex flex-col sm:flex-row gap-4 text-[12px] text-white/40",children:[A.jsxs("span",{className:"flex flex-col",children:[A.jsxs("span",{className:"flex items-center gap-2",children:[A.jsx(eg,{className:"h-3.5 w-3.5"}),mn.locationLine1]}),A.jsx("span",{className:"ml-5 text-white/30",children:mn.locationLine2})]}),A.jsxs("a",{href:`mailto:${mn.email}`,className:"flex items-center gap-2 hover:text-white transition-colors duration-300",children:[A.jsx(Qm,{className:"h-3.5 w-3.5"}),mn.email]}),A.jsxs("a",{href:mn.linkedin,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 hover:text-white transition-colors duration-300",children:[A.jsx(Jm,{className:"h-3.5 w-3.5"}),"LinkedIn"]})]})]}),A.jsxs("div",{className:"reveal relative overflow-hidden",style:{transitionDelay:"120ms"},children:[A.jsx("div",{className:"w-full h-[300px] sm:h-[380px]",children:A.jsx(b1,{})}),A.jsx("p",{className:"text-center text-[11px] tracking-wide text-white/25 mt-2",children:"Press to play around"})]})]}),A.jsx("div",{className:"mt-12 grid sm:grid-cols-3 gap-px bg-white/10",children:qv.map((e,n)=>A.jsxs("div",{className:"reveal bg-black p-8 group hover:bg-white/[0.03] transition-colors duration-500",style:{transitionDelay:`${n*80}ms`},children:[A.jsx("div",{className:"text-5xl sm:text-6xl font-medium text-white",children:e.value}),A.jsx("div",{className:"mt-4 text-[12px] tracking-wide uppercase text-white/50 font-medium",children:e.label}),A.jsx("div",{className:"mt-2 text-[13px] text-white/30 leading-relaxed font-light",children:e.sub})]},e.label))})]})}function C1(s){return s.split(/(\*\*[^*]+\*\*)/g).map((n,r)=>n.startsWith("**")&&n.endsWith("**")?A.jsx("strong",{className:"font-semibold text-white",children:n.slice(2,-2)},r):A.jsx("span",{children:n},r))}function R1(){const s=Nr();return A.jsxs("section",{id:"experience",ref:s,className:"py-12 sm:py-16 px-6 sm:px-10 max-w-4xl mx-auto",children:[A.jsxs("div",{className:"reveal mb-10",children:[A.jsx("span",{className:"text-[11px] tracking-[0.25em] uppercase text-white/40 font-light",children:"Career"}),A.jsx("h2",{className:"mt-5 text-4xl sm:text-6xl font-medium text-white tracking-tight",children:"Work Experience"})]}),A.jsxs("div",{className:"relative",children:[A.jsx("div",{className:"absolute left-[7px] top-2 bottom-2 w-px bg-white/15"}),A.jsx("div",{className:"space-y-10",children:$v.map((e,n)=>A.jsxs("div",{className:"reveal relative pl-12",style:{transitionDelay:`${n*100}ms`},children:[A.jsx("div",{className:"absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white/30 bg-black"}),A.jsxs("div",{className:"group hover:bg-white/[0.02] transition-colors duration-500 rounded-[20px] p-7 -ml-2",children:[A.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-2",children:[A.jsxs("div",{children:[A.jsx("h3",{className:"text-xl font-medium text-white",children:e.role}),A.jsxs("p",{className:"text-[13px] mt-0.5 text-white/40",children:[e.company," · ",e.location]})]}),A.jsx("span",{className:"text-[11px] text-white/40 px-3 py-1 rounded-full border border-white/10",children:e.period})]}),A.jsx("div",{className:"mt-4 flex flex-wrap gap-1.5",children:e.tags.map(r=>A.jsx("span",{className:"text-[10px] tracking-wide px-2.5 py-0.5 rounded-full border border-white/10 text-white/50",children:r},r))}),A.jsx("ul",{className:"mt-5 space-y-3",children:e.points.map((r,o)=>A.jsxs("li",{className:"flex gap-2.5 text-[14px] text-white/60 leading-[1.7]",children:[A.jsx(Km,{className:"h-4 w-4 mt-0.5 shrink-0 text-white/25"}),A.jsx("span",{children:C1(r)})]},o))})]})]},e.company))})]})]})}function P1(){const[s,e]=Nt.useState(null),n=Nr();return A.jsxs("section",{id:"research",ref:n,className:"py-12 sm:py-16 px-6 sm:px-10 max-w-4xl mx-auto",children:[A.jsxs("div",{className:"reveal mb-10",children:[A.jsx("span",{className:"text-[11px] tracking-[0.25em] uppercase text-white/40 font-light",children:"Scholarship"}),A.jsx("h2",{className:"mt-5 text-4xl sm:text-6xl font-medium text-white tracking-tight",children:"Academic Research"})]}),A.jsx("div",{className:"grid sm:grid-cols-2 gap-px bg-white/10",children:Kv.map((r,o)=>A.jsxs("button",{onClick:()=>e(r),className:"reveal text-left group bg-black p-8 hover:bg-white/[0.03] transition-colors duration-500",style:{transitionDelay:`${o*80}ms`},children:[A.jsxs("div",{className:"flex items-start justify-between gap-3",children:[A.jsx("span",{className:"text-[10px] tracking-wide px-2.5 py-0.5 rounded-full border border-white/15 text-white/50",children:r.type}),A.jsx("span",{className:"text-[11px] text-white/30",children:r.period})]}),A.jsx("h3",{className:"mt-5 text-xl font-medium text-white group-hover:text-white transition-colors duration-300",children:r.title}),A.jsx("p",{className:"mt-3 text-[13px] text-white/50 leading-[1.65] line-clamp-2 font-light",children:r.summary}),A.jsx("div",{className:"mt-5 flex flex-wrap gap-1.5",children:r.methods.slice(0,3).map(l=>A.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full text-white/30 border border-white/10",children:l},l))})]},r.id))}),s&&A.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-[fadeIn_0.3s_ease]",onClick:()=>e(null),children:A.jsxs("div",{className:"relative w-full max-w-lg rounded-[28px] border border-white/15 bg-[#0a0a0a] p-9",onClick:r=>r.stopPropagation(),children:[A.jsx("button",{onClick:()=>e(null),className:"absolute top-5 right-5 text-white/40 hover:text-white transition-colors duration-300",children:A.jsx(Zs,{className:"h-5 w-5"})}),A.jsx("span",{className:"text-[10px] tracking-wide px-2.5 py-0.5 rounded-full border border-white/15 text-white/50",children:s.type}),A.jsx("h3",{className:"mt-5 text-3xl font-medium text-white leading-tight",children:s.title}),A.jsxs("div",{className:"mt-5 space-y-3 text-[13px]",children:[A.jsxs("div",{className:"flex items-center gap-2 text-white/50",children:[A.jsx(nf,{className:"h-3.5 w-3.5"}),s.period]}),A.jsxs("div",{className:"flex items-center gap-2 text-white/50",children:[A.jsx(Wv,{className:"h-3.5 w-3.5"}),s.scope]})]}),A.jsx("p",{className:"mt-6 text-[14px] text-white/60 leading-[1.75] font-light",children:s.summary}),A.jsxs("div",{className:"mt-7",children:[A.jsxs("div",{className:"flex items-center gap-2 text-[11px] tracking-wide uppercase text-white/30 mb-3",children:[A.jsx(Fv,{className:"h-3.5 w-3.5"}),"Methods & frameworks"]}),A.jsx("div",{className:"flex flex-wrap gap-2",children:s.methods.map(r=>A.jsx("span",{className:"text-xs px-3 py-1 rounded-full border border-white/15 text-white/60",children:r},r))})]})]})})]})}function N1(){const s=Nr();return A.jsxs("section",{ref:s,className:"relative h-[70vh] overflow-hidden",children:[A.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(to bottom, #000000 0%, #050008 10%, #0d0218 22%, #1a0a2e 32%, #2d0f3e 42%, #ec4899 56%, #facc15 68%, #06b6d4 78%, #c7d4e0 90%, #ffffff 100%)"}}),A.jsxs("div",{className:"pointer-events-none absolute inset-0",children:[A.jsx("div",{className:"absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-pink-500/35 blur-[100px] animate-[fadeInSlow_2s_ease]"}),A.jsx("div",{className:"absolute top-1/2 right-1/3 h-72 w-72 rounded-full bg-cyan-400/30 blur-[110px] animate-[fadeInSlow_2.5s_ease]"}),A.jsx("div",{className:"absolute bottom-1/4 left-1/3 h-56 w-56 rounded-full bg-yellow-400/30 blur-[90px] animate-[fadeInSlow_3s_ease]"})]}),A.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[5]"}),A.jsxs("div",{className:"reveal relative z-10 h-full flex flex-col items-center justify-center px-6 pt-[12vh]",children:[A.jsx("p",{className:"text-[11px] tracking-[0.3em] uppercase text-white/60 mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]",children:"The other side"}),A.jsxs("h2",{className:"text-4xl sm:text-6xl font-medium text-white text-center leading-[1.05] tracking-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]",children:["Where structure",A.jsx("br",{}),A.jsx("span",{className:"italic inline-block [text-shadow:0_2px_14px_rgba(0,0,0,0.55)]",children:"meets color"})]}),A.jsx(Pv,{className:"mt-10 h-5 w-5 text-white/60 animate-bounce [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]"})]})]})}const qm="#YES2023 #youngeconomistssummit #economicsummit #climateeconomics #mopvaishnav",Ar="#YES2023 #youngeconomistssummit #economicsummit #climateeconomics #mopvaishnav #chennaisummit",L1=[{id:"A01",group:"Academic",label:"Circular Economy of Waste Management",context:"Commission 1 of 10 · Instagram",date:"January 2023",body:["Presenting to you, The first committee of YES 2023, Circular Economy of Waste Management","Production and consumption leads to waste generation which leads to more carbon based particles in air. This committee aims to iterate on waste management and its impact on emission reduction",qm,"Writer: Manasa"]},{id:"A02",group:"Academic",label:"City Planning",context:"Commission 2 of 10 · Instagram",date:"January 2023",body:['"First we shape the cities, then they shape us." — Jan Gehl',"The second committee is all about","City Planning","Urban spaces are integral for targeted climate action as they are highly polluting and densely populated, due to concentration of economic activity. This commission will deliberate on topics pertaining to smart city planning, waste management, green building and renewable energy for revitalising green growth.",qm,"Writer: Manasa"]},{id:"A03",group:"Academic",label:"Trade and Sustainable Development",context:"Commission 3 of 10 · Instagram",date:"January 2023",body:["Introducing to you, The Third Committee of YES 2023","Trade and Sustainable Development","This commission will aim to assess trade and tourism from the vantage point of climate change and sustainable development. It'll aim to design trade policies that could enforce mitigation policies.",Ar,"Writer: Manasa"]},{id:"A04",group:"Academic",label:"Disaster Response and Relief",context:"Commission 4 of 10 · Instagram",date:"January 2023",body:['"All earthquakes and disasters are warning; there is too much corruption in the world" — Aristotle',"The Fourth Committee of YES 2023","Disaster Response and Relief","The onslaught of climate disasters necessitates efficient and sustainable policy solutions that keep in mind long term repercussions of policies enacted. This committee will require delegates to craft solutions that are equally effective and sustainable to solve major natural disasters that address ecological and economic issues.",Ar,"Writer: Manasa"]},{id:"A05",group:"Academic",label:"Fashionomics in Climate Change",context:"Commission 5 of 10 · Instagram",date:"January 2023",body:['"Infinite growth of material consumption in a finite world is an impossibility." — E.F. Schumacher',"The Fifth Committee of YES 2023 concentrates upon","Fashionomics in Climate Change","This commission will solely focus on the fashion and textile industry and how new trends and patterns in this industry affect the environment as well as the economy.",Ar,"Writer: Manasa"]},{id:"A06",group:"Academic",label:"International Cooperation",context:"Commission 6 of 10 · Instagram",date:"January 2023",body:[`"It's a collective endeavour, it's collective accountability and it may not be too late" — Christine Lagarde`,"The Sixth Committee of YES 2023","International cooperation","Any steps taken to preserve the nations would need nations to come together for policy formulation while working on their climate mitigation. This committee will discuss the adaptation efforts for the transparent monitoring and reporting of countries' climate goals.",Ar,"Writer: Manasa"]},{id:"A07",group:"Academic",label:"Sustainable Energy",context:"Commission 7 of 10 · Instagram",date:"January 2023",body:['"Whether it is salt farmers in India embracing solar power or wind companies creating tens of thousands of jobs in America, people are providing a vision for the clean energy future" — Frances Beinecke',"YES 2023 presents you our 7th committee","Sustainable Energy","This commission will look into the economic impact of lack of sustainability in the use of energy. It'll also look into reasons why India is lagging in the area of sustainable energy, it's cost and measures to ensure universal access to affordable, reliable and modern energy services.",Ar,"Writer: Manasa"]},{id:"A08",group:"Academic",label:"Decarbonizing the Primary Sector",context:"Commission 8 of 10 · Instagram",date:"January 2023",body:['"It is estimated that farmers in the U.S. grow five times as much corn per acre as smallholder farmers in Africa. This gap will only widen as the effects of climate change increase." — Dr. Lindiwe Majele Sibanda',"The 8th committee of YES 2023 deliberates on","Decarbonizing the Primary Sector","The primary sector's dominance in the Indian economy stands to be significant despite recent trends in development. This committee will endeavour to propose fresh solutions to put the primary sector at the forefront of a green transition, focusing on a range of industries including farming, fishery, forestry, mining etc.",Ar,"Writer: Manasa"]},{id:"A09",group:"Academic",label:"Planned Reinforcement for Climate",context:"Commission 9 of 10 · Instagram",date:"January 2023",body:["Presenting to you, Our 9th Committee of YES 2023","Planned Reinforcement for Climate","The gap that exists between large scale policy measures and individual initiatives to solve climate issues can only be reconciled with the tools of behavioural economics. This committee will deliberate on pressing climate issues by informing solutions with a behavioural perspective to bridge the intention-action gap.",Ar,"Writer: Manasa"]},{id:"A10",group:"Academic",label:"The Fourth Pillar",context:"Commission 10 of 10 · Instagram",date:"January 2023",body:['"To all of you who choose to look the other way everyday because you seem more frightened of the changes that can prevent catastrophic climate change than the catastrophic climate change itself. Your silence is the worst of all." — Greta Thunberg',"Our Tenth and Last Committee of YES 2023","The Fourth Pillar","The press commission covers developments within the respective commissions they are assigned to. They report on the happenings of the two-day summit with special focus on the commission they are assigned to. People interested to be a part of this must send a writing sample on Climate Economics to mopYES2023@gmail.com",Ar,"Writer: Manasa"]},{id:"V01",group:"Volunteering",label:"AGARAM ADRA, speaker announcement",context:"Events and speakers",date:"4 September 2022 · St. Thomas College of Arts and Science, Koyambedu",body:["A leader is one who is always at the forefront and motivates people along the road to success.","We take pride in introducing a courageous and passionate leader who has contributed tremendously by rendering selfless service to the society.","Team AGARAM ADRA is extremely honoured to have a man of integrity and dedication, ADGP Mahesh Kumar Aggarwal IPS, former Police Commissioner, as our Special Guest & Inaugural Keynote Speaker.","Join us in an Arena of never-ending Possibilities on September 4, 2022 at St. Thomas College of Arts and Science, Koyambedu!","Contact your GC and GRRs team for registrations!","Regards, AGARAM — Assembly Team","Writer: Manasa"]},{id:"V02",group:"Volunteering",label:"ENSINAR, speaker announcement",context:"Events and speakers",date:"25 September 2022 · Gozzimma by Healthy Sports, T. Nagar",body:[`"When opportunity doesn't knock, build a door." — Milton Berle`,"We, The Rotaract Club of Chennai Riviera, (Sponsored by Rotary Club of Chennai Riviera) take immense pleasure to present","ENSINAR — To evoke today's youth to tomorrow's leader",`Team ENSINAR takes this proud fortuity to enthusiastically welcome our speaker for the day, Rtn/Rtr. PDRR. Girish E, RSAMDIO's President 23-24, on the stimulating topic "How Rotaract helps in building a career".`,"Venue — Gozzimma by Healthy sports, T.Nagar · Date — 25th September 2022 · Time — 9.00 am onwards","We eagerly anticipate everyone's presence!","Regards, Rtr. Padma Lakshana — Chairperson, ENSINAR, RAC Chennai Riviera. Inspire others.","Writer: Manasa"]},{id:"V03",group:"Volunteering",label:"ENSINAR, organisers introduction",context:"Events and speakers",date:"September 2022 · joint event with RAC DRBCCC Hindu College",body:['"I can do things you cannot, you can do things I cannot. Together we can do great things." — Mother Teresa',"We the Rotaract Club of Chennai Riviera (Sponsored by Rotary Club of Chennai Riviera) along with Rotaract Club Of Drbccc Hindu College (Sponsored By Rotary Club of Anna Nagar, Madras) proudly present","ENSINAR — To evoke today's youth to tomorrow's leader","A leader is someone who leads others by standing along with them. Introducing the ENSINAR Chairperson, Rtr. Padma Lakshana from RAC Chennai Riviera and ENSINAR Secretary, Rtr. Raga Priya from RAC DRBCCC Hindu College who are in-charge of this marvelous orientation programme.","Venue — Gozzimma by Healthy sports, T.Nagar · Date — 25th September 2022 · Time — 9.00 am onwards","We eagerly anticipate everyone's presence!","Regards, RAC Chennai Riviera & RAC DRBCCC Hindu College. Inspire others.","Writer: Manasa"]},{id:"V04",group:"Volunteering",label:"ENSINAR, event wrap-up",context:"Events and speakers",date:"September 2022",body:["Hi everyone!",'"The strength of the team is each individual member. The strength of each member is the team." — Phil Jackson',"We the Rotaract Club of Chennai Riviera (Sponsored by Rotary Club of Chennai Riviera) along with Rotaract Club Of Drbccc Hindu College (Sponsored By Rotary Club of Anna Nagar, Madras) would like to proudly inform that we have successfully completed our ENSINAR orientation programme with the amazing speakers for the day, Rtr. PP. Essaki Sekar, Rtn/Rtr. PDRR. Girish and Rtr. IPP. Irai Anbu.","We would like to thank the almighty and everyone who had taken a part in this extraordinary event and helped us bring great success to it.","Regards, RAC Chennai Riviera & RAC DRBCCC Hindu College. Inspire others.","Writer: Manasa"]},{id:"V05",group:"Volunteering",label:"Rhythm of Riviera",context:"Events and speakers",date:"Zoom · undated",body:["Happy day everyone!",'"Music and love makes this world go around" — Alex Elle','Do you ever go from "parakka parakka thudikkudhae" to "Halamithi habibo" to "snehidhanae snehidhanae"?',"We the Rotaract Club of Chennai Riviera along with other rotaract clubs introduce you to RYTHM OF RIVIERA, where all of us jam and groove to music like no other and the only impulse is to have fun and feel nostalgic.",'"Where words fail, music speaks."',"Platform: Zoom","Regards, RAC Chennai Riviera. Inspire others.","Writer: Manasa"]},{id:"V06",group:"Volunteering",label:"NO MORE CLOSET, announcement",context:"Advocacy",date:"10 December 2022 · Zoom",body:[`"Owning our story and loving ourselves through that process is the bravest thing we'll ever do" — Brené Brown`,"We the Rotaract Club of Chennai Riviera (Sponsored by Rotary Club of Chennai Riviera) take pride in introducing NO MORE CLOSET, an awareness initiated to introduce LGBTQ+ and it's empowerment spread throughout.",`As said by Daniel Radcliffe, "You don't have to be gay to be a supporter — you just have to be a human".`,"It is of extreme momentousness we realise to be human is to spread love, kindness and respect. What we give is what we receive.","Love is not just you and me","Date: 10th December 2022 · Timings: 7 to 8 PM · Platform: Zoom","Kind Regards, Manasa.R — Chairman, LGBTQ+. Rtr.PP.Sudharshan — President 22-23. Rtr.Shreemathi — Secretary 22-23.","Writer: Manasa"]},{id:"V07",group:"Volunteering",label:"NO MORE CLOSET, speaker invitation",context:"Advocacy",date:"10 December 2022 · Zoom",body:["All people should be treated equally, regardless who they are and who they love.","Hi everyone!","We the Rotaract Club of Chennai Riviera (Sponsored by Rotary Club of Chennai Riviera) would like to introduce Sneha Mani, our speaker for the day, who is an ever-evolving gen z young-adult and has made it their mission to understand human behaviour.","NO MORE CLOSET is a drive to empower LGBTQ+ rights and it's involvement in the society as human beings too.","We invite everyone to attend this session and come out being more aware.","Love is not just you and me","Date: 10th December 2022 · Timings: 7 to 8 PM · Platform: Zoom","Kind Regards, Rtr.Manasa.R — Chairperson, LGBTQ+. Rtr.PP.Sudharshan — President 22-23. Rtr.Shreemathi — Secretary 22-23.","Writer: Manasa"]},{id:"V08",group:"Volunteering",label:"NO MORE CLOSET, speaker profile",context:"Advocacy",date:"10 December 2022",body:["EVENT NAME: Love is not just you and me · DATE: 10th December 2022 · TIMINGS: 7 to 8 PM · VENUE: Zoom","ABOUT THE SPEAKER: Sneha Mani is a 3rd year law & arts student from VIT Chennai. They're an avid debator and a lover of all things art. They would love to call themselves an activist but they are merely an ever-evolving gen z young-adult who has made it their mission to understand human behaviour. In simple, people & society's functioning fascinates them, and they constantly strive to learn about it teach what they know to everyone they meet.","Writer: Manasa"]},{id:"V09",group:"Volunteering",label:"Blue Cross volunteering",context:"Service projects",date:"27 November 2022 · BMAD, Besant Nagar, Chennai",body:['"Our perfect companions never have fewer than four feet." — Colette',"Man's best friend. Kutti naai kutties. Cutie cats. Have always been an unforgettable part of our lives, guarding and protecting us. Now it is our turn to befriend, care and love these beings.","We the Rotaract Club of Chennai Riviera (Sponsored by Rotary Club of Chennai Riviera) joyfully are going to spend the weekend with the lovely beings and take pride in initiating and aiding the blue cross volunteers.","We welcome everyone with a soft spot for the doggies.","Date: 27th November 2022 · Time: From 10.30 AM · Venue: BMAD, Sai Ram Colony, Besant Nagar, Chennai, Tamil Nadu 600090","Let them know someone cares.","Regards, RAC Chennai Riviera. Inspire others.","Writer: Manasa"]},{id:"V10",group:"Volunteering",label:"Santa's Bash",context:"Service projects",date:"December 2022 · Good Life orphanage",body:[`"The Light in a Child's eyes is all it takes to make CHRISTMAS a magical time of the year"`,"We the Rotaract club of Chennai Riviera had celebrated this Christmas with the Good Life orphanage kids. The event SANTA'S BASH, gave us the opportunity to be able to happily provide essential stationery to the bundle of joys and we also played a bunch of games with them. A surprise was our very own Santa Claus who made his entrance and brought smile in many.","It truly was a Merry Christmas for all.","Regards, Chennai Riviera","Writer: Manasa"]},{id:"V11",group:"Volunteering",label:"Flag Exchange, launch",context:"Flag exchange",date:"undated",body:["Hi everyone!",'"One flag, one land, one heart, one hand, one nation evermore" — Oliver Wendell Holmes',"We the Rotaract Club of Chennai Riviera (Sponsored by Rotary Club of Chennai Riviera) perceive great pride in releasing FLAG EXCHANGE with international clubs to initiate unified bonds between the countries.","Regards, RAC Chennai Riviera. Inspire others.","Writer: Manasa"]},{id:"V12",group:"Volunteering",label:"Flag Exchange, Singapore",context:"Flag exchange",date:"undated · Rotaract Club National University of Singapore",body:["Happy day everyone!",'As said by Ronald Reagan, "When we honor our flag we honor what we stand for as a Nation — freedom, equality, justice and hope."',"We the Rotaract Club of Chennai Riviera take immense joy and pride in announcing that we have honorably completed our FLAG EXCHANGE with Rotaract Club National University of Singapore from Singapore.","India — Singapore","The Rotaract promises to uphold many more FLAG EXCHANGE along with other rotaries/rotaracts in order to encourage love and patriotism towards our country.","Regards, RAC Chennai Riviera. Inspire others.","Writer: Manasa"]},{id:"V13",group:"Volunteering",label:"Flag Exchange, Romania",context:"Flag exchange",date:"undated · Rotary Club of Bucuresti Cismigiu, RID 2241",body:["Happy day everyone!",'As said by Ronald Reagan, "When we honor our flag we honor what we stand for as a Nation — freedom, equality, justice and hope."',"We the Rotaract Club of Chennai Riviera take immense joy and pride in announcing that we have honorably completed our second FLAG EXCHANGE with Rotary club of Bucuresti Cismigiu, RID -2241, Romania.","India — PRIDE 3232 — Romania — FLAG EXCHANGE","The Rotaract promises to uphold many more FLAG EXCHANGE along with other rotaries/rotaracts in order to encourage love and patriotism towards our country.","Regards, Rtr Narayan — Chairman, Pride 3232. Rtr.PP.Sudharshan — President 22-23. Rtr.Shreemathi — Secretary 22-23.","Writer: Manasa"]},{id:"V14",group:"Volunteering",label:"Fact-a-day, series launch",context:"Fact-a-day, a recurring series",date:"undated",body:['"Small facts lead to great knowing" — Patrick Rothfuss',"Hey you! Stop right there. You are about to know some mind blowing facts about different things existing.","The Rotaract of Chennai Riviera presents the Fact-a-day! project with it's key intent to spread basic awareness on daily facts.",'We also wish to fulfill the curious minds with innumerable amount of "did you know?"',"Hope you could learn and enjoy all the know how's with immense delight.","Regards, RAC Chennai Riviera. Inspire Others.","Writer: Manasa"]},{id:"V15",group:"Volunteering",label:"Fact-a-day, habit formation",context:"Fact-a-day, a recurring series",date:"undated",body:["A new day, A new fact! The Rotaract Club of Chennai Riviera brings you the fact for the day with immense excitement.",'"It takes about 66 days for an average individual to make something a daily habit"',"It was said that according to a 2009 study published in the European Journal of Social Psychology, it takes 18 to 254 days for a person to form a new habit and on average, it takes 66 days for a new behavior to become automatic.","We hope you enjoyed it!","Regards, RAC Chennai Riviera. Inspire Others.","Writer: Manasa"]},{id:"V16",group:"Volunteering",label:"Fact-a-day, guilt and emotion recognition",context:"Fact-a-day, a recurring series",date:"undated",body:["Another round of FPF! The Rotaract Club of Chennai Riviera (Sponsored by Rotary Club of Chennai Riviera) is back with another mind-boggling fact to make your day!",'"Individuals who have a deep sense of guilt are better at identifying the emotions and concerns of the people around them"',"The key finding of this fact was that guilt proneness tended to correlate with performance on the emotion-recognition test. Guilt-prone people performed better overall across the different emotions, and they also showed extra sensitivity to recognizing low intensity emotions.","We hope you enjoyed it!","Regards, RAC Chennai Riviera. Inspire Others.","Writer: Manasa"]},{id:"V17",group:"Volunteering",label:"ATMAN, charter installation",context:"Club milestones",date:"undated · the club's launch",body:['"One person can make a difference and everyone should try it." — John Fitzgerald Kennedy',"The propitious launch of Rotaract Club Of Chennai Riviera (sponsored by Rotary Club of Chennai Riviera) proudly presents:","ATMAN — Charter Installation Ceremony","The club plans to introduce many distinctive projects to exchange ideas with leaders and members of the community. To acquire and develop personal and professional skills is the preeminent goal of the club.","With Regards, RAC CHENNAI RIVIERA. Inspire Others.","Writer: Manasa"]}],D1={Academic:{title:"Young Economists Summit 2023",subtitle:"Instagram · January 2023"},Volunteering:{title:"Rotaract Club of Chennai Riviera",subtitle:"WhatsApp and Instagram · 2022"}};function I1({onClose:s}){const[e,n]=Nt.useState("Academic"),r=L1.filter(u=>u.group===e),o=D1[e],l=[{key:"Academic",label:"Academic",icon:Zm},{key:"Volunteering",label:"Volunteering",icon:kv}];return A.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-[fadeIn_0.3s_ease]",onClick:s,children:A.jsxs("div",{className:"relative w-full max-w-3xl max-h-[88vh] rounded-[28px] bg-white overflow-hidden shadow-2xl flex flex-col",onClick:u=>u.stopPropagation(),children:[A.jsx("button",{onClick:s,className:"absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-800 bg-white/80 rounded-full p-2 backdrop-blur-md transition-colors duration-300",children:A.jsx(Zs,{className:"h-5 w-5"})}),A.jsx("div",{className:"px-8 pt-8 pb-5 border-b border-gray-100",children:A.jsx("h3",{className:"text-2xl sm:text-3xl font-medium text-gray-900 leading-tight pr-8",children:"Digital Content Creation"})}),A.jsx("div",{className:"flex gap-1 px-8 pt-4",children:l.map(({key:u,label:f,icon:p})=>A.jsxs("button",{onClick:()=>n(u),className:`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-[13px] font-medium transition-all duration-300 ${e===u?"bg-gray-50 text-gray-900 border-b-2 border-cyan-500":"text-gray-400 hover:text-gray-600 border-b-2 border-transparent"}`,children:[A.jsx(p,{className:"h-3.5 w-3.5"}),f]},u))}),A.jsxs("div",{className:"overflow-y-auto px-8 pb-8 bg-gray-50 min-h-0 flex-1",children:[A.jsxs("div",{className:"pt-5 pb-3",children:[A.jsx("h4",{className:"text-[15px] font-medium text-gray-800",children:o.title}),A.jsx("p",{className:"text-[11px] text-gray-400 mt-0.5",children:o.subtitle})]}),A.jsx("div",{className:"space-y-4",children:r.map((u,f)=>A.jsxs("article",{className:"rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-gray-100",style:{animationDelay:`${f*60}ms`},children:[A.jsxs("div",{className:"flex items-baseline justify-between gap-3 mb-3",children:[A.jsxs("div",{children:[A.jsx("span",{className:"text-[11px] font-semibold tracking-wide text-cyan-600",children:u.id}),A.jsx("h5",{className:"text-[15px] font-medium text-gray-900 mt-0.5 leading-snug",children:u.label})]}),A.jsx("span",{className:"text-[10px] text-gray-400 whitespace-nowrap text-right shrink-0",children:u.context})]}),A.jsx("p",{className:"text-[10px] text-gray-400 mb-3 -mt-2",children:u.date}),A.jsx("div",{className:"space-y-1.5",children:u.body.map((p,m)=>{const v=p.startsWith("Writer:"),_=p.startsWith("#"),g=p.startsWith('"')||p.startsWith("As said by");return v?A.jsx("p",{className:"text-[12px] text-gray-500 italic pt-2 border-t border-gray-50 mt-2",children:p},m):_?A.jsx("p",{className:"text-[11px] text-cyan-700/80 font-medium tracking-wide break-words",children:p},m):g?A.jsx("p",{className:"text-[14px] text-gray-700 italic leading-relaxed",children:p},m):A.jsx("p",{className:"text-[13.5px] text-gray-700 leading-[1.7]",children:p},m)})})]},u.id))})]})]})})}function U1(){const[s,e]=Nt.useState(null),[n,r]=Nt.useState(0),[o,l]=Nt.useState(!1),u=Nr(),f=v=>{if(v.id==="digital-content"){l(!0);return}e(v),r(0)},p=v=>{v.stopPropagation(),s&&r(_=>(_-1+s.images.length)%s.images.length)},m=v=>{v.stopPropagation(),s&&r(_=>(_+1)%s.images.length)};return A.jsxs("section",{id:"creative",ref:u,className:"py-12 sm:py-16 px-6 sm:px-10 max-w-5xl mx-auto",children:[A.jsxs("div",{className:"reveal mb-10",children:[A.jsx("span",{className:"text-[11px] tracking-[0.25em] uppercase text-cyan-600 font-medium",children:"Craft"}),A.jsx("h2",{className:"mt-5 text-4xl sm:text-6xl font-medium text-gray-900 tracking-tight",children:"Creative Projects & Decks"}),A.jsx("p",{className:"mt-4 text-[15px] text-gray-500 max-w-xl font-light leading-relaxed",children:"Where analysis gives way to aesthetics — decks, visual identities, and creative direction."})]}),A.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Zv.map((v,_)=>{const g=["from-pink-400 to-rose-500","from-cyan-400 to-blue-500","from-yellow-400 to-orange-400","from-violet-400 to-purple-500","from-emerald-400 to-teal-500","from-fuchsia-400 to-pink-500"],M=g[_%g.length];return A.jsxs("button",{onClick:()=>f(v),className:"reveal group text-left rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1",style:{transitionDelay:`${_*100}ms`},children:[A.jsxs("div",{className:"relative aspect-[4/3] overflow-hidden",children:[A.jsx("img",{src:v.image,alt:v.title,className:"h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",loading:"lazy",onError:b=>{b.currentTarget.style.display="none",b.currentTarget.nextElementSibling?.classList.remove("hidden")}}),A.jsx("div",{className:"hidden absolute inset-0 flex items-center justify-center bg-gray-100",children:A.jsx(Ol,{className:"h-8 w-8 text-gray-400"})}),A.jsx("div",{className:`absolute inset-0 bg-gradient-to-t ${M} opacity-20 group-hover:opacity-35 transition-opacity duration-500 mix-blend-overlay`}),A.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"}),A.jsx("div",{className:"absolute bottom-3 left-4 right-4",children:A.jsx("span",{className:"text-[10px] tracking-wide px-2.5 py-1 rounded-full bg-white/90 text-gray-800 font-medium backdrop-blur-md",children:v.aesthetic})})]}),A.jsxs("div",{className:"p-6 bg-white",children:[A.jsx("h3",{className:"text-lg font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-300",children:v.title}),A.jsxs("p",{className:"text-[11px] text-gray-400 mt-1",children:[v.context," · ",v.date]})]})]},v.id)})}),o&&A.jsx(I1,{onClose:()=>l(!1)}),s&&A.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-[fadeIn_0.3s_ease]",onClick:()=>e(null),children:A.jsxs("div",{className:"relative w-full max-w-2xl rounded-[28px] bg-white overflow-hidden shadow-2xl",onClick:v=>v.stopPropagation(),children:[A.jsx("button",{onClick:()=>e(null),className:"absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/30 rounded-full p-2 backdrop-blur-md transition-colors duration-300",children:A.jsx(Zs,{className:"h-5 w-5"})}),A.jsxs("div",{className:"relative aspect-video bg-gray-100",children:[A.jsx("img",{src:s.images[n],alt:`${s.title} — slide ${n+1}`,className:"h-full w-full object-contain",onError:v=>{v.currentTarget.style.display="none",v.currentTarget.nextElementSibling?.classList.remove("hidden")}}),A.jsxs("div",{className:"hidden absolute inset-0 flex flex-col items-center justify-center bg-gray-50 gap-2",children:[A.jsx(Ol,{className:"h-10 w-10 text-gray-300"}),A.jsx("span",{className:"text-xs text-gray-400",children:"Image not available"})]}),s.images.length>1&&A.jsxs(A.Fragment,{children:[A.jsx("button",{onClick:p,className:"absolute left-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/30 rounded-full p-2 backdrop-blur-md transition-colors duration-300",children:A.jsx(Iv,{className:"h-5 w-5"})}),A.jsx("button",{onClick:m,className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/30 rounded-full p-2 backdrop-blur-md transition-colors duration-300",children:A.jsx(Km,{className:"h-5 w-5"})}),A.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5",children:s.images.map((v,_)=>A.jsx("span",{className:`h-1.5 rounded-full transition-all duration-300 ${_===n?"w-6 bg-white":"w-1.5 bg-white/50"}`},_))})]})]}),A.jsxs("div",{className:"p-9",children:[A.jsx("h3",{className:"text-3xl font-medium text-gray-900 leading-tight",children:s.title}),A.jsxs("div",{className:"mt-4 flex flex-wrap gap-5 text-[13px] text-gray-500",children:[A.jsxs("span",{className:"flex items-center gap-2",children:[A.jsx(nf,{className:"h-3.5 w-3.5 text-pink-500"}),s.date]}),A.jsxs("span",{className:"flex items-center gap-2",children:[A.jsx(Gv,{className:"h-3.5 w-3.5 text-cyan-500"}),s.aesthetic]})]}),A.jsx("p",{className:"mt-5 text-[14px] text-gray-600 leading-[1.75]",children:s.description}),A.jsx("p",{className:"mt-2 text-[11px] text-gray-400",children:s.context})]})]})})]})}function F1(){const[s,e]=Nt.useState(null),n=Nr();return A.jsxs("section",{id:"products",ref:n,className:"py-12 sm:py-16 px-6 sm:px-10 max-w-5xl mx-auto",children:[A.jsxs("div",{className:"reveal mb-10",children:[A.jsx("span",{className:"text-[11px] tracking-[0.25em] uppercase text-cyan-600 font-medium",children:"Innovation"}),A.jsx("h2",{className:"mt-5 text-4xl sm:text-6xl font-medium text-gray-900 tracking-tight",children:"Product Concepts & Prototypes"}),A.jsx("p",{className:"mt-4 text-[15px] text-gray-500 max-w-xl font-light leading-relaxed",children:"From grocery aggregators to blockchain land registries — turning ideas into tangible prototypes."})]}),A.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Jv.map((r,o)=>A.jsxs("button",{onClick:()=>e(r),className:"reveal group text-left rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col h-full",style:{transitionDelay:`${o*100}ms`},children:[A.jsxs("div",{className:"relative aspect-[4/3] overflow-hidden",children:[A.jsx("img",{src:r.image,alt:r.title,className:"h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",loading:"lazy"}),A.jsx("div",{className:`absolute inset-0 bg-gradient-to-t ${r.accent} opacity-25 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay`}),A.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"}),A.jsx("div",{className:"absolute bottom-3 left-4 right-4",children:A.jsx("span",{className:"text-[10px] tracking-wide px-2.5 py-1 rounded-full bg-white/90 text-gray-800 font-medium backdrop-blur-md",children:r.period})})]}),A.jsxs("div",{className:"p-6 bg-white h-full flex flex-col gap-2",children:[A.jsx("h3",{className:"text-lg font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-300",children:r.title}),A.jsx("p",{className:"text-[12px] text-gray-500 leading-relaxed line-clamp-3",children:r.summary})]})]},r.id))}),s&&A.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-[fadeIn_0.3s_ease]",onClick:()=>e(null),children:A.jsxs("div",{className:"relative w-full max-w-2xl rounded-[28px] bg-white overflow-hidden shadow-2xl",onClick:r=>r.stopPropagation(),children:[A.jsx("button",{onClick:()=>e(null),className:"absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/30 rounded-full p-2 backdrop-blur-md transition-colors duration-300",children:A.jsx(Zs,{className:"h-5 w-5"})}),A.jsxs("div",{className:"relative aspect-video",children:[A.jsx("img",{src:s.image,alt:s.title,className:"h-full w-full object-cover"}),A.jsx("div",{className:`absolute inset-0 bg-gradient-to-t ${s.accent} opacity-20 mix-blend-overlay`})]}),A.jsxs("div",{className:"p-9",children:[A.jsx("h3",{className:"text-3xl font-medium text-gray-900 leading-tight",children:s.title}),A.jsxs("div",{className:"mt-4 flex items-center gap-2 text-[13px] text-gray-500",children:[A.jsx(nf,{className:"h-3.5 w-3.5 text-pink-500"}),s.period]}),A.jsx("p",{className:"mt-5 text-[14px] text-gray-600 leading-[1.75]",children:s.summary}),A.jsxs("div",{className:"mt-7",children:[A.jsx("div",{className:"text-[11px] tracking-wide uppercase text-gray-400 mb-3 font-medium",children:"Key highlights"}),A.jsx("ul",{className:"space-y-2.5",children:s.highlights.map(r=>A.jsxs("li",{className:"flex items-start gap-2.5 text-[14px] text-gray-700",children:[A.jsx(Uv,{className:"h-4 w-4 mt-0.5 shrink-0 text-emerald-500"}),A.jsx("span",{children:r})]},r))})]})]})]})})]})}function k1(){const s=Nr();return A.jsxs("section",{id:"skills",ref:s,className:"py-12 sm:py-16 px-6 sm:px-10 max-w-5xl mx-auto",children:[A.jsxs("div",{className:"reveal mb-10",children:[A.jsx("span",{className:"text-[11px] tracking-[0.25em] uppercase text-cyan-600 font-medium",children:"Capabilities"}),A.jsx("h2",{className:"mt-5 text-4xl sm:text-6xl font-medium text-gray-900 tracking-tight",children:"Skills & Certifications"})]}),A.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[A.jsxs("div",{className:"reveal rounded-[24px] bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 border-t-4 border-pink-400",style:{transitionDelay:"0ms"},children:[A.jsx("h3",{className:"text-[11px] tracking-[0.15em] uppercase text-pink-500 font-medium mb-5",children:"Core Competencies"}),A.jsx("div",{className:"flex flex-wrap gap-2",children:cl.core.map(e=>A.jsx("span",{className:"text-[13px] px-3.5 py-1.5 rounded-full text-gray-700 bg-pink-50 border border-pink-200/50 hover:border-pink-400 hover:bg-pink-100/50 transition-colors duration-300",children:e},e))})]}),A.jsxs("div",{className:"reveal rounded-[24px] bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 border-t-4 border-cyan-400",style:{transitionDelay:"80ms"},children:[A.jsx("h3",{className:"text-[11px] tracking-[0.15em] uppercase text-cyan-500 font-medium mb-5",children:"Tools"}),A.jsx("div",{className:"flex flex-wrap gap-2",children:cl.tools.map(e=>A.jsx("span",{className:"text-[13px] px-3.5 py-1.5 rounded-full text-gray-700 bg-cyan-50 border border-cyan-200/50 hover:border-cyan-400 hover:bg-cyan-100/50 transition-colors duration-300",children:e},e))})]}),A.jsxs("div",{className:"reveal rounded-[24px] bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 border-t-4 border-yellow-400",style:{transitionDelay:"160ms"},children:[A.jsxs("div",{className:"flex items-center gap-2 text-yellow-500 mb-5",children:[A.jsx(Dv,{className:"h-3.5 w-3.5"}),A.jsx("h3",{className:"text-[11px] tracking-[0.15em] uppercase font-medium",children:"AI Tools"})]}),A.jsx("div",{className:"flex flex-wrap gap-2",children:cl.ai.map(e=>A.jsx("span",{className:"text-[13px] px-3.5 py-1.5 rounded-full text-gray-700 bg-yellow-50 border border-yellow-200/50 hover:border-yellow-400 hover:bg-yellow-100/50 transition-colors duration-300",children:e},e))})]}),A.jsxs("div",{className:"reveal rounded-[24px] bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 border-t-4 border-violet-400",style:{transitionDelay:"240ms"},children:[A.jsxs("div",{className:"flex items-center gap-2 text-violet-500 mb-5",children:[A.jsx(Zm,{className:"h-3.5 w-3.5"}),A.jsx("h3",{className:"text-[11px] tracking-[0.15em] uppercase font-medium",children:"Certifications"})]}),A.jsx("ul",{className:"space-y-3",children:cl.certifications.map(e=>A.jsxs("li",{className:"flex items-start gap-2.5 text-[14px] text-gray-700 leading-snug",children:[A.jsx("span",{className:"mt-[7px] h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0"}),e]},e))})]})]})]})}const O1=["All","Travel","Food","Cats","Personal"];function B1(){const[s,e]=Nt.useState("All"),[n,r]=Nt.useState(null),o=Nr(),l=s==="All"?$p:$p.filter(u=>u.category===s);return A.jsxs("section",{id:"life",ref:o,className:"py-12 sm:py-16 px-6 sm:px-10 max-w-5xl mx-auto",children:[A.jsxs("div",{className:"reveal mb-6",children:[A.jsx("span",{className:"text-[11px] tracking-[0.25em] uppercase text-cyan-600 font-medium",children:"Beyond Work"}),A.jsx("h2",{className:"mt-5 text-4xl sm:text-6xl font-medium text-gray-900 tracking-tight",children:"Life & Interests"})]}),A.jsx("p",{className:"reveal text-[15px] text-gray-500 mb-10 max-w-xl font-light leading-relaxed",children:"Photography, culinary exploration, travel, and feline companionship — the visual side of a life lived across continents."}),A.jsx("div",{className:"reveal flex flex-wrap gap-2 mb-10",children:O1.map(u=>A.jsx("button",{onClick:()=>e(u),className:`text-[12px] px-4 py-1.5 rounded-full font-medium transition-all duration-300 ${s===u?"bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-md":"bg-white text-gray-500 border border-gray-200 hover:border-pink-300"}`,children:u},u))}),A.jsx("div",{className:"columns-2 sm:columns-3 lg:columns-4 gap-4 [&>*]:mb-4",children:l.map((u,f)=>{const p=["from-pink-500/40","from-cyan-500/40","from-yellow-500/40","from-violet-500/40"],m=p[f%p.length];return A.jsx("button",{onClick:()=>r(u),className:"reveal group block w-full break-inside-avoid overflow-hidden rounded-[18px] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1",style:{transitionDelay:`${f%4*60}ms`},children:A.jsxs("div",{className:"relative",children:[A.jsx("img",{src:u.src,alt:u.title,className:"w-full object-cover group-hover:scale-[1.04] transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",loading:"lazy",onError:v=>{v.currentTarget.style.display="none",v.currentTarget.nextElementSibling?.classList.remove("hidden")}}),A.jsx("div",{className:"hidden absolute inset-0 flex items-center justify-center bg-gray-100 rounded-[18px]",children:A.jsx(Ol,{className:"h-8 w-8 text-gray-400"})}),A.jsx("div",{className:`absolute inset-0 bg-gradient-to-t ${m} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay`}),A.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),A.jsxs("div",{className:"absolute bottom-3 left-3 right-3 text-left opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0",children:[A.jsx("span",{className:"text-[9px] tracking-wide px-2 py-0.5 rounded-full bg-white/90 text-gray-800 font-medium",children:u.category}),A.jsx("p",{className:"mt-1.5 text-[13px] font-medium text-white",children:u.title})]})]})},u.src)})}),n&&A.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-[fadeIn_0.3s_ease]",onClick:()=>r(null),children:A.jsxs("div",{className:"relative max-w-3xl w-full",children:[A.jsx("button",{onClick:()=>r(null),className:"absolute -top-11 right-0 text-white/60 hover:text-white transition-colors duration-300",children:A.jsx(Zs,{className:"h-6 w-6"})}),A.jsx("img",{src:n.src,alt:n.title,className:"w-full rounded-[24px] shadow-2xl",onError:u=>{u.currentTarget.style.display="none",u.currentTarget.nextElementSibling?.classList.remove("hidden")}}),A.jsxs("div",{className:"hidden w-full rounded-[24px] bg-gray-100 flex flex-col items-center justify-center gap-3 py-20",children:[A.jsx(Ol,{className:"h-10 w-10 text-gray-300"}),A.jsx("span",{className:"text-sm text-gray-400",children:"Image not available"})]}),A.jsxs("div",{className:"mt-5",children:[A.jsx("span",{className:"text-[10px] tracking-wide px-2.5 py-0.5 rounded-full bg-white text-gray-700 font-medium",children:n.category}),A.jsx("h3",{className:"mt-3 text-2xl font-medium text-white",children:n.title}),A.jsx("p",{className:"mt-1 text-[13px] text-white/60",children:n.caption})]})]})})]})}function z1(){return A.jsxs("footer",{className:"relative bg-white",children:[A.jsx("div",{className:"absolute top-0 left-0 right-0 h-1",style:{background:"linear-gradient(to right, #ec4899, #facc15, #06b6d4, #a855f7, #ec4899)"}}),A.jsxs("div",{className:"max-w-5xl mx-auto px-6 sm:px-10 py-16",children:[A.jsxs("div",{className:"grid sm:grid-cols-2 gap-10 items-center",children:[A.jsxs("div",{children:[A.jsx("p",{className:"text-2xl font-medium text-gray-900",children:mn.name}),A.jsx("p",{className:"text-[13px] text-gray-400 mt-2 italic max-w-md leading-relaxed font-serif",children:mn.tagline}),A.jsxs("div",{className:"mt-6 flex flex-col gap-2 text-[13px] text-gray-400",children:[A.jsxs("span",{className:"flex flex-col",children:[A.jsxs("span",{className:"flex items-center gap-2",children:[A.jsx(eg,{className:"h-3.5 w-3.5 text-pink-400"}),mn.locationLine1]}),A.jsx("span",{className:"ml-5 text-gray-300",children:mn.locationLine2})]}),A.jsxs("a",{href:`mailto:${mn.email}`,className:"flex items-center gap-2 hover:text-gray-900 transition-colors duration-300",children:[A.jsx(Qm,{className:"h-3.5 w-3.5 text-cyan-400"}),mn.email]}),A.jsxs("a",{href:mn.linkedin,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 hover:text-gray-900 transition-colors duration-300",children:[A.jsx(Jm,{className:"h-3.5 w-3.5 text-violet-400"}),"LinkedIn"]})]})]}),A.jsx("div",{className:"flex sm:justify-end",children:A.jsxs("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-[13px] text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-all duration-300",children:["Back to top",A.jsx(Lv,{className:"h-3.5 w-3.5"})]})})]}),A.jsxs("div",{className:"mt-10 pt-6 border-t border-gray-100 text-[11px] text-gray-400 text-center tracking-wide",children:["© ",new Date().getFullYear()," ",mn.name,". Designed & built in Berlin."]})]})]})}function H1(){const[s,e]=Nt.useState(!1);Nt.useEffect(()=>{s&&window.scrollTo(0,0)},[s]);const n=()=>{window.scrollTo(0,0),e(!1)};return s?A.jsxs("div",{className:"min-h-screen bg-black animate-[fadeIn_0.8s_ease]",children:[A.jsx(t_,{onHome:n}),A.jsxs("main",{children:[A.jsx(A1,{}),A.jsx(R1,{}),A.jsx(P1,{}),A.jsx(N1,{}),A.jsxs("div",{className:"bg-white",children:[A.jsx(U1,{}),A.jsx(F1,{}),A.jsx(k1,{}),A.jsx(B1,{})]})]}),A.jsx(z1,{})]}):A.jsx(e_,{onUnlock:()=>e(!0)})}bv.createRoot(document.getElementById("root")).render(A.jsx(Nt.StrictMode,{children:A.jsx(H1,{})}));
