var Dm=Object.defineProperty;var Lm=(r,t,e)=>t in r?Dm(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var At=(r,t,e)=>Lm(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Li(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function xd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oo={duration:.5,overwrite:!1,delay:0},Pu,Qe,Ce,ei=1e8,Ee=1/ei,xc=Math.PI*2,Um=xc/4,Im=0,Md=Math.sqrt,Nm=Math.cos,Fm=Math.sin,je=function(t){return typeof t=="string"},Ie=function(t){return typeof t=="function"},Gi=function(t){return typeof t=="number"},Du=function(t){return typeof t>"u"},Ei=function(t){return typeof t=="object"},Tn=function(t){return t!==!1},Lu=function(){return typeof window<"u"},ea=function(t){return Ie(t)||je(t)},Sd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,Om=/random\([^)]+\)/g,Bm=/,\s*/g,vh=/(?:-?\.?\d|\.)+/gi,yd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ed=/[+-]=-?[.\d]+/,zm=/[^,'"\[\]\s]+/gi,km=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,De,pi,Mc,Uu,$n={},el={},Td,bd=function(t){return(el=Us(t,$n))&&Pn},Iu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Bo=function(t,e){return!e&&console.warn(t)},wd=function(t,e){return t&&($n[t]=e)&&el&&(el[t]=e)||$n},zo=function(){return 0},Hm={suppressEvents:!0,isStart:!0,kill:!1},ka={suppressEvents:!0,kill:!1},Vm={suppressEvents:!0},Nu={},cr=[],Sc={},Ad,Bn={},Al={},xh=30,Ha=[],Fu="",Ou=function(t){var e=t[0],n,i;if(Ei(e)||Ie(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ha.length;i--&&!Ha[i].targetTest(e););n=Ha[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Kd(t[i],n)))||t.splice(i,1);return t},Br=function(t){return t._gsap||Ou(ni(t))[0]._gsap},Cd=function(t,e,n){return(n=t[e])&&Ie(n)?t[e]():Du(n)&&t.getAttribute&&t.getAttribute(e)||n},bn=function(t,e){return(t=t.split(",")).forEach(e)||t},Oe=function(t){return Math.round(t*1e5)/1e5||0},Pe=function(t){return Math.round(t*1e7)/1e7||0},Es=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Gm=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},nl=function(){var t=cr.length,e=cr.slice(0),n,i;for(Sc={},cr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Bu=function(t){return!!(t._initted||t._startAt||t.add)},Rd=function(t,e,n,i){cr.length&&!Qe&&nl(),t.render(e,n,!!(Qe&&e<0&&Bu(t))),cr.length&&!Qe&&nl()},Pd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(zm).length<2?e:je(t)?t.trim():t},Dd=function(t){return t},Kn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Wm=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Us=function(t,e){for(var n in e)t[n]=e[n];return t},Mh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ei(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},il=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},yo=function(t){var e=t.parent||De,n=t.keyframes?Wm(cn(t.keyframes)):Kn;if(Tn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Xm=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Ld=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},gl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},fr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},zr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Ym=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},yc=function(t,e,n,i){return t._startAt&&(Qe?t._startAt.revert(ka):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},qm=function r(t){return!t||t._ts&&r(t.parent)},Sh=function(t){return t._repeat?Is(t._tTime,t=t.duration()+t._rDelay)*t:0},Is=function(t,e){var n=Math.floor(t=Pe(t/e));return t&&n===t?n-1:n},rl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},vl=function(t){return t._end=Pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},xl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Pe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),vl(t),n._dirty||zr(n,t)),t},Ud=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=rl(t.rawTime(),e),(!e._dur||Ko(0,e.totalDuration(),n)-e._tTime>Ee)&&e.render(n,!0)),zr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ee}},vi=function(t,e,n,i){return e.parent&&fr(e),e._start=Pe((Gi(n)?n:n||t!==De?Jn(t,n,e):t._time)+e._delay),e._end=Pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ld(t,e,"_first","_last",t._sort?"_start":0),Ec(e)||(t._recent=e),i||Ud(t,e),t._ts<0&&xl(t,t._tTime),t},Id=function(t,e){return($n.ScrollTrigger||Iu("scrollTrigger",e))&&$n.ScrollTrigger.create(e,t)},Nd=function(t,e,n,i,s){if(ku(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Qe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ad!==Vn.frame)return cr.push(t),t._lazy=[s,i],1},$m=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Ec=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Km=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&$m(t)&&!(!t._initted&&Ec(t))||(t._ts<0||t._dp._ts<0)&&!Ec(t))?0:1,a=t._rDelay,l=0,c,u,f;if(a&&t._repeat&&(l=Ko(0,t._tDur,e),u=Is(l,a),t._yoyo&&u&1&&(o=1-o),u!==Is(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Qe||i||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&Nd(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Ee:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&yc(t,e,n,!0),t._onUpdate&&!n&&Xn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Xn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&fr(t,1),!n&&!Qe&&(Xn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Zm=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ns=function(t,e,n,i){var s=t._repeat,o=Pe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Pe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&xl(t,t._tTime=t._tDur*a),t.parent&&vl(t),n||zr(t.parent,t),t},yh=function(t){return t instanceof En?zr(t):Ns(t,t._dur)},jm={_start:0,endTime:zo,totalDuration:zo},Jn=function r(t,e,n){var i=t.labels,s=t._recent||jm,o=t.duration()>=ei?s.endTime(!1):t._dur,a,l,c;return je(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Eo=function(t,e,n){var i=Gi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;o.immediateRender=Tn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new He(e[0],o,e[s+1])},gr=function(t,e){return t||t===0?e(t):e},Ko=function(t,e,n){return n<t?t:n>e?e:n},on=function(t,e){return!je(t)||!(e=km.exec(t))?"":e[1]},Jm=function(t,e,n){return gr(n,function(i){return Ko(t,e,i)})},Tc=[].slice,Fd=function(t,e){return t&&Ei(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ei(t[0]))&&!t.nodeType&&t!==pi},Qm=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return je(i)&&!e||Fd(i,1)?(s=n).push.apply(s,ni(i)):n.push(i)})||n},ni=function(t,e,n){return Ce&&!e&&Ce.selector?Ce.selector(t):je(t)&&!n&&(Mc||!Fs())?Tc.call((e||Uu).querySelectorAll(t),0):cn(t)?Qm(t,n):Fd(t)?Tc.call(t,0):t?[t]:[]},bc=function(t){return t=ni(t)[0]||Bo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ni(e,n.querySelectorAll?n:n===t?Bo("Invalid scope")||Uu.createElement("div"):t)}},Od=function(t){return t.sort(function(){return .5-Math.random()})},Bd=function(t){if(Ie(t))return t;var e=Ei(t)?t:{each:t},n=kr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,f=i;return je(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,_){var g=(_||e).length,m=o[g],p,M,S,v,C,w,T,R,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,ei])[1],!y){for(T=-ei;T<(T=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=l?Math.min(y,g)*u-.5:i%y,M=y===ei?0:l?g*f/y-.5:i/y|0,T=0,R=ei,w=0;w<g;w++)S=w%y-p,v=M-(w/y|0),m[w]=C=c?Math.abs(c==="y"?v:S):Md(S*S+v*v),C>T&&(T=C),C<R&&(R=C);i==="random"&&Od(m),m.max=T-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=on(e.amount||e.each)||0,n=n&&g<0?f_(n):n}return g=(m[h]-m.min)/m.max||0,Pe(m.b+(n?n(g):g)*m.v)+m.u}},wc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Pe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Gi(n)?0:on(n))}},zd=function(t,e){var n=cn(t),i,s;return!n&&Ei(t)&&(i=n=t.radius||ei,t.values?(t=ni(t.values),(s=!Gi(t[0]))&&(i*=i)):t=wc(t.increment)),gr(e,n?Ie(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ei,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?t[u]:o,s||u===o||Gi(o)?u:u+on(o)}:wc(t))},kd=function(t,e,n,i){return gr(cn(t)?!e:n===!0?!!(n=0):!i,function(){return cn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},t_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},e_=function(t,e){return function(n){return t(parseFloat(n))+(e||on(n))}},n_=function(t,e,n){return Vd(t,e,0,1,n)},Hd=function(t,e,n){return gr(n,function(i){return t[~~e(i)]})},i_=function r(t,e,n){var i=e-t;return cn(t)?Hd(t,r(0,t.length),e):gr(n,function(s){return(i+(s-t)%i)%i+t})},r_=function r(t,e,n){var i=e-t,s=i*2;return cn(t)?Hd(t,r(0,t.length-1),e):gr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},ko=function(t){return t.replace(Om,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Bm);return kd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Vd=function(t,e,n,i,s){var o=e-t,a=i-n;return gr(s,function(l){return n+((l-t)/o*a||0)})},s_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=je(t),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(cn(t)&&!cn(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(r(t[c-1],t[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=e}else i||(t=Us(cn(t)?[]:{},t));if(!u){for(l in e)zu.call(a,t,l,"get",e[l]);s=function(_){return Gu(_,a)||(o?t.p:t)}}}return gr(n,s)},Eh=function(t,e,n){var i=t.labels,s=ei,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Xn=function(t,e,n){var i=t.vars,s=i[e],o=Ce,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&cr.length&&nl(),a&&(Ce=a),u=l?s.apply(c,l):s.call(c),Ce=o,u},fo=function(t){return fr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Qe),t.progress()<1&&Xn(t,"onInterrupt"),t},xs,Gd=[],Wd=function(t){if(t)if(t=!t.name&&t.default||t,Lu()||t.headless){var e=t.name,n=Ie(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:zo,render:Gu,add:zu,kill:y_,modifier:S_,rawVars:0},o={targetTest:0,get:0,getSetter:Vu,aliases:{},register:0};if(Fs(),t!==i){if(Bn[e])return;Kn(i,Kn(il(t,s),o)),Us(i.prototype,Us(s,il(t,o))),Bn[i.prop=e]=i,t.targetTest&&(Ha.push(i),Nu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}wd(e,i),t.register&&t.register(Pn,i,wn)}else Gd.push(t)},ye=255,po={aqua:[0,ye,ye],lime:[0,ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ye],navy:[0,0,128],white:[ye,ye,ye],olive:[128,128,0],yellow:[ye,ye,0],orange:[ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ye,0,0],pink:[ye,192,203],cyan:[0,ye,ye],transparent:[ye,ye,ye,0]},Cl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ye+.5|0},Xd=function(t,e,n){var i=t?Gi(t)?[t>>16,t>>8&ye,t&ye]:0:po.black,s,o,a,l,c,u,f,h,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),po[t])i=po[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ye,i&ye,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ye,t&ye]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(vh),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Cl(l+1/3,s,o),i[1]=Cl(l,s,o),i[2]=Cl(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(yd),n&&i.length<4&&(i[3]=1),i}else i=t.match(vh)||po.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/ye,o=i[1]/ye,a=i[2]/ye,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Yd=function(t){var e=[],n=[],i=-1;return t.split(ur).forEach(function(s){var o=s.match(vs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Th=function(t,e,n){var i="",s=(t+i).match(ur),o=e?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=Xd(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Yd(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(ur,"1").split(vs),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(ur),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},ur=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in po)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),o_=/hsl[a]?\(/,qd=function(t){var e=t.join(" "),n;if(ur.lastIndex=0,ur.test(e))return n=o_.test(e),t[1]=Th(t[1],n),t[0]=Th(t[0],n,Yd(t[1])),!0},Ho,Vn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,_=function g(m){var p=r()-i,M=m===!0,S,v,C,w;if((p>t||p<0)&&(n+=p-e),i+=p,C=i-n,S=C-o,(S>0||M)&&(w=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,o+=S+(S>=s?4:s-S),v=1),M||(l=c(g)),v)for(d=0;d<a.length;d++)a[d](C,h,w,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Td&&(!Mc&&Lu()&&(pi=Mc=window,Uu=pi.document||{},$n.gsap=Pn,(pi.gsapVersions||(pi.gsapVersions=[])).push(Pn.version),bd(el||pi.GreenSockGlobals||!pi.gsap&&pi||{}),Gd.forEach(Wd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Ho=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ho=0,c=zo},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,M){var S=p?function(v,C,w,T){m(v,C,w,T),f.remove(S)}:m;return f.remove(m),a[M?"unshift":"push"](S),Fs(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),Fs=function(){return!Ho&&Vn.wake()},oe={},a_=/^[\d.\-M][\d.\-,\s]/,l_=/["']/g,c_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(l_,"").trim():+c,i=l.substr(a+1).trim();return e},u_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},h_=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[c_(e[1])]:u_(t).split(",").map(Pd)):oe._CE&&a_.test(t)?oe._CE("",t):n},f_=function(t){return function(e){return 1-t(1-e)}},kr=function(t,e){return t&&(Ie(t)?t:oe[t]||h_(t))||e},Kr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return bn(t,function(a){oe[a]=$n[a]=s,oe[o=a.toLowerCase()]=n;for(var l in s)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=s[l]}),s},$d=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Rl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/xc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Fm((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:$d(a);return s=xc/s,l.config=function(c,u){return r(t,c,u)},l},Pl=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:$d(n);return i.config=function(s){return r(t,s)},i};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Kr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Kr("Elastic",Rl("in"),Rl("out"),Rl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Kr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Kr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Kr("Circ",function(r){return-(Md(1-r*r)-1)});Kr("Sine",function(r){return r===1?1:-Nm(r*Um)+1});Kr("Back",Pl("in"),Pl("out"),Pl());oe.SteppedEase=oe.steps=$n.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Ee;return function(a){return((i*Ko(0,o,a)|0)+s)*n}}};Oo.ease=oe["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Fu+=r+","+r+"Params,"});var Kd=function(t,e){this.id=Im++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Cd,this.set=e?e.getSetter:Vu},Vo=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ns(this,+e.duration,1,1),this.data=e.data,Ce&&(this._ctx=Ce,Ce.data.push(this)),Ho||Vn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ns(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Fs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xl(this,n),!s._dp||s.parent||Ud(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ee||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Rd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Is(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?rl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ee?0:this._rts,this.totalTime(Ko(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),vl(this),Ym(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ee&&(this._tTime-=Ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Pe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&vi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?rl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Vm);var i=Qe;return Qe=n,Bu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qe=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,yh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,yh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Jn(this,n),Tn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Tn(i)),this._dur||(this._zTime=-Ee),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ee)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ie(n)?n:Dd,l=function(){var u=i.then;i.then=null,s&&s(),Ie(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){fo(this)},r})();Kn(Vo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var En=(function(r){xd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Tn(n.sortChildren),De&&vi(n.parent||De,Li(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Id(Li(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Eo(0,arguments,this),this},e.from=function(i,s,o){return Eo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Eo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,yo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(i,s,Jn(this,o),1),this},e.call=function(i,s,o){return vi(this,He.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new He(i,o,Jn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,yo(o).immediateRender=Tn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,yo(a).immediateRender=Tn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Pe(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,_,g,m,p,M,S,v,C,w,T;if(this!==De&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,v=this._start,S=this._ts,p=!S,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=Pe(u%m),u===l?(g=this._repeat,h=c):(C=Pe(u/m),g=~~C,g&&g===C&&(h=c,g--),h>c&&(h=c)),C=Is(this._tTime,m),!a&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),w&&g&1&&(h=c-h,T=1),g!==C&&!this._lock){var R=w&&C&1,y=R===(w&&g&1);if(g<C&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Pe(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,C=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Zm(this,Pe(a),Pe(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!C&&(Xn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=-Ee);break}}d=_}else{d=this._last;for(var x=i<0?i:h;d;){if(_=d._prev,(d._act||x<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||Qe&&Bu(d)),h!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=x?-Ee:Ee);break}}d=_}}if(M&&!s&&(this.pause(),M.render(h>=a?0:-Ee)._zTime=h>=a?1:-1,this._ts))return this._start=v,vl(this),this.render(i,s,o);this._onUpdate&&!s&&Xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&fr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Xn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Gi(s)||(s=Jn(this,s,i)),!(i instanceof Vo)){if(cn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(je(i))return this.addLabel(i,s);if(Ie(i))i=He.delayedCall(0,i);else return this}return this!==i?vi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ei);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof He?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return je(i)?this.removeLabel(i):Ie(i)?this.killTweensOf(i):(i.parent===this&&gl(this,i),i===this._recent&&(this._recent=this._last),zr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pe(Vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Jn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=He.delayedCall(0,s||zo,o);return a.data="isPause",this._hasPause=1,vi(this,a,Jn(this,i))},e.removePause=function(i){var s=this._first;for(i=Jn(this,i);s;)s._start===i&&s.data==="isPause"&&fr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)rr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ni(i),l=this._first,c=Gi(s),u;l;)l instanceof He?Gm(l._targets,a)&&(c?(!rr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Jn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=He.to(o,Kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ee,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Ns(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Kn({startAt:{time:Jn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Eh(this,Jn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Eh(this,Jn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Pe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return zr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ei,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,vi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Pe(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ns(o,o===De&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(De._ts&&(Rd(De,rl(i,De)),Ad=Vn.frame),Vn.frame>=xh){xh+=qn.autoSleep||120;var s=De._first;if((!s||!s._ts)&&qn.autoSleep&&Vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Vn.sleep()}}},t})(Vo);Kn(En.prototype,{_lock:0,_hasPause:0,_forcing:0});var d_=function(t,e,n,i,s,o,a){var l=new wn(this._pt,t,e,0,1,ep,null,s),c=0,u=0,f,h,d,_,g,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ko(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),h=n.match(wl)||[];f=wl.exec(i);)_=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Es(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=wl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Ed.test(i)||p)&&(l.e=0),this._pt=l,l},zu=function(t,e,n,i,s,o,a,l,c,u){Ie(i)&&(i=i(s||0,t,o));var f=t[e],h=n!=="get"?n:Ie(f)?c?t[e.indexOf("set")||!Ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Ie(f)?c?v_:Qd:Hu,_;if(je(i)&&(~i.indexOf("random(")&&(i=ko(i)),i.charAt(1)==="="&&(_=Es(h,i)+(on(h)||0),(_||_===0)&&(i=_))),!u||h!==i||Ac)return!isNaN(h*i)&&i!==""?(_=new wn(this._pt,t,e,+h||0,i-(h||0),typeof f=="boolean"?M_:tp,0,d),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!f&&!(e in t)&&Iu(e,i),d_.call(this,t,e,h,i,d,l||qn.stringFilter,c))},p_=function(t,e,n,i,s){if(Ie(t)&&(t=To(t,s,e,n,i)),!Ei(t)||t.style&&t.nodeType||cn(t)||Sd(t))return je(t)?To(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=To(t[a],s,e,n,i);return o},Zd=function(t,e,n,i,s,o){var a,l,c,u;if(Bn[t]&&(a=new Bn[t]).init(s,a.rawVars?e[t]:p_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new wn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==xs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},rr,Ac,ku=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!Pu,v=t.timeline,C=i.easeReverse||f,w,T,R,y,x,P,N,z,X,$,Y,W,H;if(v&&(!h||!s)&&(s="none"),t._ease=kr(s,Oo.ease),t._rEase=C&&(kr(C)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||h&&!i.stagger){if(z=m[0]?Br(m[0]).harness:0,W=z&&i[z.prop],w=il(i,Nu),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?ka:Hm),g._lazy=0),o){if(fr(t._startAt=He.set(m,Kn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Tn(l),startAt:null,delay:0,onUpdate:c&&function(){return Xn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe||!a&&!d)&&t._startAt.revert(ka),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),R=Kn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Tn(l),immediateRender:a,stagger:0,parent:p},w),W&&(R[z.prop]=W),fr(t._startAt=He.set(m,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe?t._startAt.revert(ka):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Tn(l)||l&&!_,T=0;T<m.length;T++){if(x=m[T],N=x._gsap||Ou(m)[T]._gsap,t._ptLookup[T]=$={},Sc[N.id]&&cr.length&&nl(),Y=M===m?T:M.indexOf(x),z&&(X=new z).init(x,W||w,t,Y,M)!==!1&&(t._pt=y=new wn(t._pt,x,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(et){$[et]=y}),X.priority&&(P=1)),!z||W)for(R in w)Bn[R]&&(X=Zd(R,w,t,Y,x,M))?X.priority&&(P=1):$[R]=y=zu.call(t,x,R,"get",w[R],Y,M,0,i.stringFilter);t._op&&t._op[T]&&t.kill(x,t._op[T]),S&&t._pt&&(rr=t,De.killTweensOf(x,$,t.globalTime(e)),H=!t.parent,rr=0),t._pt&&l&&(Sc[N.id]=1)}P&&np(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,h&&e<=0&&v.render(ei,!0,!0)},m_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Ac=1,t.vars[e]="+=0",ku(t,a),Ac=0,l?Bo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Oe(n)+on(f.e)),f.b&&(f.b=u.s+on(f.b))},__=function(t,e){var n=t[0]?Br(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Us({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},g_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(cn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},To=function(t,e,n,i,s){return Ie(t)?t.call(e,n,i,s):je(t)&&~t.indexOf("random(")?ko(t):t},jd=Fu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Jd={};bn(jd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Jd[r]=1});var He=(function(r){xd(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:yo(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||De,M=(cn(n)||Sd(n)?Gi(n[0]):"length"in i)?[n]:ni(n),S,v,C,w,T,R,y,x;if(a._targets=M.length?Ou(M):Bo("GSAP target "+n+" not found. https://gsap.com",!qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||h||ea(c)||ea(u)){i=a.vars;var P=i.easeReverse||i.yoyoEase;if(S=a.timeline=new En({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:M}),S.kill(),S.parent=S._dp=Li(a),S._start=0,h||ea(c)||ea(u)){if(w=M.length,y=h&&Bd(h),Ei(h))for(T in h)~jd.indexOf(T)&&(x||(x={}),x[T]=h[T]);for(v=0;v<w;v++)C=il(i,Jd),C.stagger=0,P&&(C.easeReverse=P),x&&Us(C,x),R=M[v],C.duration=+To(c,Li(a),v,R,M),C.delay=(+To(u,Li(a),v,R,M)||0)-a._delay,!h&&w===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),S.to(R,C,y?y(v,R,M):0),S._ease=oe.none;S.duration()?c=u=0:a.timeline=0}else if(_){yo(Kn(S.vars.defaults,{ease:"none"})),S._ease=kr(_.ease||i.ease||"none");var N=0,z,X,$;if(cn(_))_.forEach(function(Y){return S.to(M,Y,">")}),S.duration();else{C={};for(T in _)T==="ease"||T==="easeEach"||g_(T,_[T],C,_.easeEach);for(T in C)for(z=C[T].sort(function(Y,W){return Y.t-W.t}),N=0,v=0;v<z.length;v++)X=z[v],$={ease:X.e,duration:(X.t-(v?z[v-1].t:0))/100*c},$[T]=X.v,S.to(M,$,N),N+=$.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!Pu&&(rr=Li(a),De.killTweensOf(M),rr=0),vi(p,Li(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!_&&a._start===Pe(p._time)&&Tn(f)&&qm(Li(a))&&p.data!=="nested")&&(a._tTime=-Ee,a.render(Math.max(0,-u)||0)),m&&Id(Li(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Ee&&!u?l:i<Ee?0:i,h,d,_,g,m,p,M,S;if(!c)Km(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(h=Pe(f%g),f===l?(_=this._repeat,h=c):(m=Pe(f/g),_=~~m,_&&_===m?(h=c,_--):h>c&&(h=c)),p=this._yoyo&&_&1,p&&(h=c-h),m=Is(this._tTime,g),h===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(Pe(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Nd(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=h<a;if(v!==this._inv){var C=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(v?-1:1)/C:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(h/c);if(this._from&&(this.ratio=M=1-M),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Xn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&yc(this,i,s,o),Xn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Xn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&yc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&fr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Xn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Ho||Vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ku(this,c),u=this._ease(c/this._dur),m_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(xl(this,0),this.parent||Ld(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?fo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qe),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,rr&&rr.vars.overwrite!==!0)._first||fo(this),this.parent&&o!==this.timeline.totalDuration()&&Ns(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ni(i):a,c=this._ptLookup,u=this._pt,f,h,d,_,g,m,p;if((!s||s==="all")&&Xm(a,l))return s==="all"&&(this._pt=0),fo(this);for(f=this._op=this._op||[],s!=="all"&&(je(s)&&(g={},bn(s,function(M){return g[M]=1}),s=g),s=__(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,_=h,d={}):(d=f[p]=f[p]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&gl(this,m,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&fo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Eo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Eo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return De.killTweensOf(i,s,o)},t})(Vo);Kn(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(r){He[r]=function(){var t=new En,e=Tc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Hu=function(t,e,n){return t[e]=n},Qd=function(t,e,n){return t[e](n)},v_=function(t,e,n,i){return t[e](i.fp,n)},x_=function(t,e,n){return t.setAttribute(e,n)},Vu=function(t,e){return Ie(t[e])?Qd:Du(t[e])&&t.setAttribute?x_:Hu},tp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},M_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ep=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Gu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},S_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},y_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?gl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},E_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},np=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},wn=(function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||tp,this.d=l||this,this.set=c||Hu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=E_,this.m=n,this.mt=s,this.tween=i},r})();bn(Fu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Nu[r]=1});$n.TweenMax=$n.TweenLite=He;$n.TimelineLite=$n.TimelineMax=En;De=new En({sortChildren:!1,defaults:Oo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qn.stringFilter=qd;var Hr=[],Va={},T_=[],bh=0,b_=0,Dl=function(t){return(Va[t]||T_).map(function(e){return e()})},Cc=function(){var t=Date.now(),e=[];t-bh>2&&(Dl("matchMediaInit"),Hr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=pi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Dl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),bh=t,Dl("matchMedia"))},ip=(function(){function r(e,n){this.selector=n&&bc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=b_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ie(n)&&(s=i,i=n,n=Ie);var o=this,a=function(){var c=Ce,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=bc(s)),Ce=o,f=i.apply(o,arguments),Ie(f)&&o._r.push(f),Ce=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Ie?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ce;Ce=null,n(this),Ce=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof He&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof En?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof He)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Hr.length;o--;)Hr[o].id===this.id&&Hr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),w_=(function(){function r(e){this.contexts=[],this.scope=e,Ce&&Ce.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ei(n)||(n={matches:n});var o=new ip(0,s||this.scope),a=o.conditions={},l,c,u;Ce&&!o.selector&&(o.selector=Ce.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=pi.matchMedia(n[c]),l&&(Hr.indexOf(o)<0&&Hr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Cc):l.addEventListener("change",Cc)));return u&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),sl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Wd(i)})},timeline:function(t){return new En(t)},getTweensOf:function(t,e){return De.getTweensOf(t,e)},getProperty:function(t,e,n,i){je(t)&&(t=ni(t)[0]);var s=Br(t||{}).get,o=n?Dd:Pd;return n==="native"&&(n=""),t&&(e?o((Bn[e]&&Bn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Bn[a]&&Bn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ni(t),t.length>1){var i=t.map(function(u){return Pn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}t=t[0]||{};var o=Bn[e],a=Br(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var f=new o;xs._pt=0,f.init(t,n?u+n:u,xs,0,[t]),f.render(1,f),xs._pt&&Gu(1,xs)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Pn.to(t,Kn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return De.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=kr(t.ease,Oo.ease)),Mh(Oo,t||{})},config:function(t){return Mh(qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Bn[a]&&!$n[a]&&Bo(e+" effect requires "+a+" plugin.")}),Al[e]=function(a,l,c){return n(ni(a),Kn(l||{},s),c)},o&&(En.prototype[e]=function(a,l,c){return this.add(Al[e](a,Ei(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=kr(e)},parseEase:function(t,e){return arguments.length?kr(t,e):oe},getById:function(t){return De.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new En(t),i,s;for(n.smoothChildTiming=Tn(t.smoothChildTiming),De.remove(n),n._dp=0,n._time=n._tTime=De._time,i=De._first;i;)s=i._next,(e||!(!i._dur&&i instanceof He&&i.vars.onComplete===i._targets[0]))&&vi(n,i,i._start-i._delay),i=s;return vi(De,n,0),n},context:function(t,e){return t?new ip(t,e):Ce},matchMedia:function(t){return new w_(t)},matchMediaRefresh:function(){return Hr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Cc()},addEventListener:function(t,e){var n=Va[t]||(Va[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Va[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:i_,wrapYoyo:r_,distribute:Bd,random:kd,snap:zd,normalize:n_,getUnit:on,clamp:Jm,splitColor:Xd,toArray:ni,selector:bc,mapRange:Vd,pipe:t_,unitize:e_,interpolate:s_,shuffle:Od},install:bd,effects:Al,ticker:Vn,updateRoot:En.updateRoot,plugins:Bn,globalTimeline:De,core:{PropTween:wn,globals:wd,Tween:He,Timeline:En,Animation:Vo,getCache:Br,_removeLinkedListItem:gl,reverting:function(){return Qe},context:function(t){return t&&Ce&&(Ce.data.push(t),t._ctx=Ce),Ce},suppressOverwrites:function(t){return Pu=t}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return sl[r]=He[r]});Vn.add(En.updateRoot);xs=sl.to({},{duration:0});var A_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},C_=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=A_(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Ll=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(je(s)&&(l={},bn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}C_(a,s)}}}},Pn=sl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Qe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ll("roundProps",wc),Ll("modifiers"),Ll("snap",zd))||sl;He.version=En.version=Pn.version="3.15.0";Td=1;Lu()&&Fs();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wh,sr,Ts,Wu,Ur,Ah,Xu,R_=function(){return typeof window<"u"},Wi={},wr=180/Math.PI,bs=Math.PI/180,jr=Math.atan2,Ch=1e8,Yu=/([A-Z])/g,P_=/(left|right|width|margin|padding|x)/i,D_=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},L_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},U_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},I_=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},N_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},rp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},sp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},F_=function(t,e,n){return t.style[e]=n},O_=function(t,e,n){return t.style.setProperty(e,n)},B_=function(t,e,n){return t._gsap[e]=n},z_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},k_=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},H_=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Le="transform",An=Le+"Origin",V_=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Wi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=xi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ui(i,a)}):this.tfm[t]=o.x?o[t]:Ui(i,t),t===An&&(this.tfm.zOrigin=o.zOrigin);else return xi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Le)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(An,e,"")),t=Le}(s||e)&&this.props.push(t,e,s[t])},op=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},G_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Yu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Xu(),(!s||!s.isStart)&&!n[Le]&&(op(n),i.zOrigin&&n[An]&&(n[An]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ap=function(t,e){var n={target:t,props:[],revert:G_,save:V_};return t._gsap||Pn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},lp,Pc=function(t,e){var n=sr.createElementNS?sr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):sr.createElement(t);return n&&n.style?n:sr.createElement(t)},Yn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Yu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Os(e)||e,1)||""},Rh="O,Moz,ms,Ms,Webkit".split(","),Os=function(t,e,n){var i=e||Ur,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Rh[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Rh[o]:"")+t},Dc=function(){R_()&&window.document&&(wh=window,sr=wh.document,Ts=sr.documentElement,Ur=Pc("div")||{style:{}},Pc("div"),Le=Os(Le),An=Le+"Origin",Ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lp=!!Os("perspective"),Xu=Pn.core.reverting,Wu=1)},Ph=function(t){var e=t.ownerSVGElement,n=Pc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ts.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ts.removeChild(n),s},Dh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},cp=function(t){var e,n;try{e=t.getBBox()}catch{e=Ph(t),n=1}return e&&(e.width||e.height)||n||(e=Ph(t)),e&&!e.width&&!e.x&&!e.y?{x:+Dh(t,["x","cx","x1"])||0,y:+Dh(t,["y","cy","y1"])||0,width:0,height:0}:e},up=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&cp(t))},dr=function(t,e){if(e){var n=t.style,i;e in Wi&&e!==An&&(e=Le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Yu,"-$1").toLowerCase())):n.removeAttribute(e)}},or=function(t,e,n,i,s,o){var a=new wn(t._pt,e,n,0,1,o?sp:rp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Lh={deg:1,rad:1,turn:1},W_={grid:1,flex:1},pr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ur.style,l=P_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",_,g,m,p;if(i===o||!s||Lh[i]||Lh[o])return s;if(o!=="px"&&!h&&(s=r(t,e,n,"px")),p=t.getCTM&&up(t),(d||o==="%")&&(Wi[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[u],Oe(d?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===sr||!g.appendChild)&&(g=sr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Vn.time&&!m.uncache)return Oe(s/m.width*f);if(d&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=f+i,_=t[u],M?t.style[e]=M:dr(t,e)}else(d||o==="%")&&!W_[Yn(g,"display")]&&(a.position=Yn(t,"position")),g===t&&(a.position="static"),g.appendChild(Ur),_=Ur[u],g.removeChild(Ur),a.position="absolute";return l&&d&&(m=Br(g),m.time=Vn.time,m.width=g[u]),Oe(h?_*s/f:_&&s?f/_*s:0)},Ui=function(t,e,n,i){var s;return Wu||Dc(),e in xi&&e!=="transform"&&(e=xi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Wi[e]&&e!=="transform"?(s=Wo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:al(Yn(t,An))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ol[e]&&ol[e](t,e,n)||Yn(t,e)||Cd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?pr(t,e,s,n)+n:s},X_=function(t,e,n,i){if(!n||n==="none"){var s=Os(e,t,1),o=s&&Yn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Yn(t,"borderTopColor"))}var a=new wn(this._pt,t.style,e,0,1,ep),l=0,c=0,u,f,h,d,_,g,m,p,M,S,v,C;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Yn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Yn(t,e)||i,g?t.style[e]=g:dr(t,e)),u=[n,i],qd(u),n=u[0],i=u[1],h=n.match(vs)||[],C=i.match(vs)||[],C.length){for(;f=vs.exec(i);)m=f[0],M=i.substring(l,f.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=h[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=Es(d,m)+v),p=parseFloat(m),S=m.substr((p+"").length),l=vs.lastIndex-S.length,S||(S=S||qn.units[e]||v,l===i.length&&(i+=S,a.e+=S)),v!==S&&(d=pr(t,e,g,S)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?sp:rp;return Ed.test(i)&&(a.e=0),this._pt=a,a},Uh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Y_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Uh[n]||n,e[1]=Uh[i]||i,e.join(" ")},q_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Wi[a]&&(l=1,a=a==="transformOrigin"?An:Le),dr(n,a);l&&(dr(n,Le),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wo(n,1),o.uncache=1,op(i)))}},ol={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new wn(t._pt,e,n,0,0,q_);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Go=[1,0,0,1,0,0],hp={},fp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ih=function(t){var e=Yn(t,Le);return fp(e)?Go:e.substr(7).match(yd).map(Oe)},qu=function(t,e){var n=t._gsap||Br(t),i=t.style,s=Ih(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Go:s):(s===Go&&!t.offsetParent&&t!==Ts&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ts.appendChild(t)),s=Ih(t),l?i.display=l:dr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ts.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Lc=function(t,e,n,i,s,o){var a=t._gsap,l=s||qu(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],S=e.split(" "),v=parseFloat(S[0])||0,C=parseFloat(S[1])||0,w,T,R,y;n?l!==Go&&(T=d*m-_*g)&&(R=v*(m/T)+C*(-g/T)+(g*M-m*p)/T,y=v*(-_/T)+C*(d/T)-(d*M-_*p)/T,v=R,C=y):(w=cp(t),v=w.x+(~S[0].indexOf("%")?v/100*w.width:v),C=w.y+(~(S[1]||S[0]).indexOf("%")?C/100*w.height:C)),i||i!==!1&&a.smooth?(p=v-c,M=C-u,a.xOffset=f+(p*d+M*g)-p,a.yOffset=h+(p*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=C,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[An]="0px 0px",o&&(or(o,a,"xOrigin",c,v),or(o,a,"yOrigin",u,C),or(o,a,"xOffset",f,a.xOffset),or(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+C)},Wo=function(t,e){var n=t._gsap||new Kd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Yn(t,An)||"0",u,f,h,d,_,g,m,p,M,S,v,C,w,T,R,y,x,P,N,z,X,$,Y,W,H,et,D,ut,Ut,Jt,K,tt;return u=f=h=g=m=p=M=S=v=0,d=_=1,n.svg=!!(t.getCTM&&up(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Le]!=="none"?l[Le]:"")),i.scale=i.rotate=i.translate="none"),T=qu(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",W=""):W=!e&&t.getAttribute("data-svg-origin"),Lc(t,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,T)),C=n.xOrigin||0,w=n.yOrigin||0,T!==Go&&(P=T[0],N=T[1],z=T[2],X=T[3],u=$=T[4],f=Y=T[5],T.length===6?(d=Math.sqrt(P*P+N*N),_=Math.sqrt(X*X+z*z),g=P||N?jr(N,P)*wr:0,M=z||X?jr(z,X)*wr+g:0,M&&(_*=Math.abs(Math.cos(M*bs))),n.svg&&(u-=C-(C*P+w*z),f-=w-(C*N+w*X))):(tt=T[6],Jt=T[7],D=T[8],ut=T[9],Ut=T[10],K=T[11],u=T[12],f=T[13],h=T[14],R=jr(tt,Ut),m=R*wr,R&&(y=Math.cos(-R),x=Math.sin(-R),W=$*y+D*x,H=Y*y+ut*x,et=tt*y+Ut*x,D=$*-x+D*y,ut=Y*-x+ut*y,Ut=tt*-x+Ut*y,K=Jt*-x+K*y,$=W,Y=H,tt=et),R=jr(-z,Ut),p=R*wr,R&&(y=Math.cos(-R),x=Math.sin(-R),W=P*y-D*x,H=N*y-ut*x,et=z*y-Ut*x,K=X*x+K*y,P=W,N=H,z=et),R=jr(N,P),g=R*wr,R&&(y=Math.cos(R),x=Math.sin(R),W=P*y+N*x,H=$*y+Y*x,N=N*y-P*x,Y=Y*y-$*x,P=W,$=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Oe(Math.sqrt(P*P+N*N+z*z)),_=Oe(Math.sqrt(Y*Y+tt*tt)),R=jr($,Y),M=Math.abs(R)>2e-4?R*wr:0,v=K?1/(K<0?-K:K):0),n.svg&&(W=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!fp(Yn(t,Le)),W&&t.setAttribute("transform",W))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Oe(d),n.scaleY=Oe(_),n.rotation=Oe(g)+a,n.rotationX=Oe(m)+a,n.rotationY=Oe(p)+a,n.skewX=M+a,n.skewY=S+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[An]=al(c)),n.xOffset=n.yOffset=0,n.force3D=qn.force3D,n.renderTransform=n.svg?K_:lp?dp:$_,n.uncache=0,n},al=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ul=function(t,e,n){var i=on(e);return Oe(parseFloat(e)+parseFloat(pr(t,"x",n+"px",i)))+i},$_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,dp(t,e)},vr="0deg",eo="0px",xr=") ",dp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,S=n.zOrigin,v="",C=p==="auto"&&t&&t!==1||p===!0;if(S&&(f!==vr||u!==vr)){var w=parseFloat(u)*bs,T=Math.sin(w),R=Math.cos(w),y;w=parseFloat(f)*bs,y=Math.cos(w),o=Ul(M,o,T*y*-S),a=Ul(M,a,-Math.sin(w)*-S),l=Ul(M,l,R*y*-S+S)}m!==eo&&(v+="perspective("+m+xr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(C||o!==eo||a!==eo||l!==eo)&&(v+=l!==eo||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+xr),c!==vr&&(v+="rotate("+c+xr),u!==vr&&(v+="rotateY("+u+xr),f!==vr&&(v+="rotateX("+f+xr),(h!==vr||d!==vr)&&(v+="skew("+h+", "+d+xr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+xr),M.style[Le]=v||"translate(0, 0)"},K_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,S=parseFloat(o),v=parseFloat(a),C,w,T,R,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=bs,c*=bs,C=Math.cos(l)*f,w=Math.sin(l)*f,T=Math.sin(l-c)*-h,R=Math.cos(l-c)*h,c&&(u*=bs,y=Math.tan(c-u),y=Math.sqrt(1+y*y),T*=y,R*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),C*=y,w*=y)),C=Oe(C),w=Oe(w),T=Oe(T),R=Oe(R)):(C=f,R=h,w=T=0),(S&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(S=pr(d,"x",o,"px"),v=pr(d,"y",a,"px")),(_||g||m||p)&&(S=Oe(S+_-(_*C+g*T)+m),v=Oe(v+g-(_*w+g*R)+p)),(i||s)&&(y=d.getBBox(),S=Oe(S+i/100*y.width),v=Oe(v+s/100*y.height)),y="matrix("+C+","+w+","+T+","+R+","+S+","+v+")",d.setAttribute("transform",y),M&&(d.style[Le]=y)},Z_=function(t,e,n,i,s){var o=360,a=je(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?wr:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Ch)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Ch)%o-~~(c/o)*o)),t._pt=h=new wn(t._pt,e,n,i,c,L_),h.e=u,h.u="deg",t._props.push(n),h},Nh=function(t,e){for(var n in e)t[n]=e[n];return t},j_=function(t,e,n){var i=Nh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Le]=e,a=Wo(n,1),dr(n,Le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Le],o[Le]=e,a=Wo(n,1),o[Le]=c);for(l in Wi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=on(c),_=on(u),f=d!==_?pr(n,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new wn(t._pt,a,l,f,h-f,Rc),t._pt.u=_||0,t._props.push(l));Nh(a,i)};bn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});ol[t>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(_){return Ui(a,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,d,f)}});var pp={name:"css",register:Dc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,f,h,d,_,g,m,p,M,S,v,C,w,T,R,y;Wu||Dc(),this.styles=this.styles||ap(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Bn[g]&&Zd(g,e,n,i,t,s)))){if(d=typeof u,_=ol[g],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ko(u)),_)_(this,t,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",ur.lastIndex=0,ur.test(c)||(m=on(c),p=on(u),p?m!==p&&(c=pr(t,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],je(c)&&~c.indexOf("random(")&&(c=ko(c)),on(c+"")||c==="auto"||(c+=qn.units[g]||on(Ui(t,g))||""),(c+"").charAt(1)==="="&&(c=Ui(t,g))):c=Ui(t,g),h=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),g in xi&&(g==="autoAlpha"&&(h===1&&Ui(t,"visibility")==="hidden"&&f&&(h=0),R.push("visibility",0,a.visibility),or(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=xi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Wi,S){if(this.styles.save(g),y=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Yn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=u,u=Yn(t,"perspective"),x?t.style.perspective=x:dr(t,"perspective")}f=parseFloat(u)}if(v||(C=t._gsap,C.renderTransform&&!e.parseTransform||Wo(t,e.parseTransform),w=e.smoothOrigin!==!1&&C.smooth,v=this._pt=new wn(this._pt,a,Le,0,1,C.renderTransform,C,0,-1),v.dep=1),g==="scale")this._pt=new wn(this._pt,C,"scaleY",C.scaleY,(M?Es(C.scaleY,M+f):f)-C.scaleY||0,Rc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(An,0,a[An]),u=Y_(u),C.svg?Lc(t,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&or(this,C,"zOrigin",C.zOrigin,p),or(this,a,g,al(c),al(u)));continue}else if(g==="svgOrigin"){Lc(t,u,1,w,0,this);continue}else if(g in hp){Z_(this,C,g,h,M?Es(h,M+u):u);continue}else if(g==="smoothOrigin"){or(this,C,"smooth",C.smooth,u);continue}else if(g==="force3D"){C[g]=u;continue}else if(g==="transform"){j_(this,u,t);continue}}else g in a||(g=Os(g)||g);if(S||(f||f===0)&&(h||h===0)&&!D_.test(u)&&g in a)m=(c+"").substr((h+"").length),f||(f=0),p=on(u)||(g in qn.units?qn.units[g]:m),m!==p&&(h=pr(t,g,c,p)),this._pt=new wn(this._pt,S?C:a,g,h,(M?Es(h,M+f):f)-h,!S&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?N_:Rc),this._pt.u=p||0,S&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=I_):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=U_);else if(g in a)X_.call(this,t,g,c,M?M+u:u);else if(g in t)this.add(t,g,c||t[g],M?M+u:u,i,s);else if(g!=="parseTransform"){Iu(g,u);continue}S||(g in a?R.push(g,0,a[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),o.push(g)}}T&&np(this)},render:function(t,e){if(e.tween._time||!Xu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ui,aliases:xi,getSetter:function(t,e,n){var i=xi[e];return i&&i.indexOf(",")<0&&(e=i),e in Wi&&e!==An&&(t._gsap.x||Ui(t,"x"))?n&&Ah===n?e==="scale"?z_:B_:(Ah=n||{})&&(e==="scale"?k_:H_):t.style&&!Du(t.style[e])?F_:~e.indexOf("-")?O_:Vu(t,e)},core:{_removeProperty:dr,_getMatrix:qu}};Pn.utils.checkPrefix=Os;Pn.core.getStyleSaver=ap;(function(r,t,e,n){var i=bn(r+","+t+","+e,function(s){Wi[s]=1});bn(t,function(s){qn.units[s]="deg",hp[s]=1}),xi[i[13]]=r+","+t,bn(n,function(s){var o=s.split(":");xi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){qn.units[r]="px"});Pn.registerPlugin(pp);var Ir=Pn.registerPlugin(pp)||Pn;Ir.core.Tween;function J_(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Q_(r,t,e){return t&&J_(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Je,Ga,Gn,ar,lr,ws,mp,Ar,As,_p,Ni,li,gp,vp=function(){return Je||typeof window<"u"&&(Je=window.gsap)&&Je.registerPlugin&&Je},xp=1,Ms=[],ie=[],yi=[],bo=Date.now,Uc=function(t,e){return e},tg=function(){var t=As.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ie),i.push.apply(i,yi),ie=n,yi=i,Uc=function(o,a){return e[o](a)}},hr=function(t,e){return~yi.indexOf(t)&&yi[yi.indexOf(t)+1][e]},wo=function(t){return!!~_p.indexOf(t)},dn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},fn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},na="scrollLeft",ia="scrollTop",Ic=function(){return Ni&&Ni.isPressed||ie.cache++},ll=function(t,e){var n=function i(s){if(s||s===0){xp&&(Gn.history.scrollRestoration="manual");var o=Ni&&Ni.isPressed;s=i.v=Math.round(s)||(Ni&&Ni.iOS?1:0),t(s),i.cacheID=ie.cache,o&&Uc("ss",s)}else(e||ie.cache!==i.cacheID||Uc("ref"))&&(i.cacheID=ie.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Mn={s:na,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ll(function(r){return arguments.length?Gn.scrollTo(r,We.sc()):Gn.pageXOffset||ar[na]||lr[na]||ws[na]||0})},We={s:ia,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Mn,sc:ll(function(r){return arguments.length?Gn.scrollTo(Mn.sc(),r):Gn.pageYOffset||ar[ia]||lr[ia]||ws[ia]||0})},yn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Je.utils.toArray)(t)[0]||(typeof t=="string"&&Je.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},eg=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},mr=function(t,e){var n=e.s,i=e.sc;wo(t)&&(t=ar.scrollingElement||lr);var s=ie.indexOf(t),o=i===We.sc?1:2;!~s&&(s=ie.push(t)-1),ie[s+o]||dn(t,"scroll",Ic);var a=ie[s+o],l=a||(ie[s+o]=ll(hr(t,n),!0)||(wo(t)?i:ll(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Je.getProperty(t,"scrollBehavior")==="smooth"),l},Nc=function(t,e,n){var i=t,s=t,o=bo(),a=o,l=e||50,c=Math.max(500,l*3),u=function(_,g){var m=bo();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(_){var g=a,m=s,p=bo();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:f,getVelocity:h}},no=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Fh=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Mp=function(){As=Je.core.globals().ScrollTrigger,As&&As.core&&tg()},Sp=function(t){return Je=t||vp(),!Ga&&Je&&typeof document<"u"&&document.body&&(Gn=window,ar=document,lr=ar.documentElement,ws=ar.body,_p=[Gn,ar,lr,ws],Je.utils.clamp,gp=Je.core.context||function(){},Ar="onpointerenter"in ws?"pointer":"mouse",mp=Be.isTouch=Gn.matchMedia&&Gn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Gn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,li=Be.eventTypes=("ontouchstart"in lr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in lr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return xp=0},500),Ga=1),As||Mp(),Ga};Mn.op=We;ie.cache=0;var Be=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Ga||Sp(Je)||console.warn("Please gsap.registerPlugin(Observer)"),As||Mp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,S=n.onPress,v=n.onRelease,C=n.onRight,w=n.onLeft,T=n.onUp,R=n.onDown,y=n.onChangeX,x=n.onChangeY,P=n.onChange,N=n.onToggleX,z=n.onToggleY,X=n.onHover,$=n.onHoverEnd,Y=n.onMove,W=n.ignoreCheck,H=n.isNormalizer,et=n.onGestureStart,D=n.onGestureEnd,ut=n.onWheel,Ut=n.onEnable,Jt=n.onDisable,K=n.onClick,tt=n.scrollSpeed,gt=n.capture,nt=n.allowClicks,Et=n.lockAxis,Ct=n.onLockAxis;this.target=a=yn(a)||lr,this.vars=n,d&&(d=Je.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,tt=tt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Gn.getComputedStyle(ws).lineHeight)||22);var Vt,Qt,Ft,Dt,U,xe,Bt,B=this,Tt=0,se=0,Rt=n.passive||!u&&n.passive!==!1,A=mr(a,Mn),E=mr(a,We),V=A(),Q=E(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&li[0]==="pointerdown",Z=wo(a),ht=a.ownerDocument||ar,at=[0,0,0],pt=[0,0,0],Yt=0,it=function(){return Yt=bo()},ot=function(bt,Kt){return(B.event=bt)&&d&&eg(bt.target,d)||Kt&&J&&bt.pointerType!=="touch"||W&&W(bt,Kt)},It=function(){B._vx.reset(),B._vy.reset(),Qt.pause(),f&&f(B)},Lt=function(){var bt=B.deltaX=Fh(at),Kt=B.deltaY=Fh(pt),mt=Math.abs(bt)>=i,Gt=Math.abs(Kt)>=i;P&&(mt||Gt)&&P(B,bt,Kt,at,pt),mt&&(C&&B.deltaX>0&&C(B),w&&B.deltaX<0&&w(B),y&&y(B),N&&B.deltaX<0!=Tt<0&&N(B),Tt=B.deltaX,at[0]=at[1]=at[2]=0),Gt&&(R&&B.deltaY>0&&R(B),T&&B.deltaY<0&&T(B),x&&x(B),z&&B.deltaY<0!=se<0&&z(B),se=B.deltaY,pt[0]=pt[1]=pt[2]=0),(Dt||Ft)&&(Y&&Y(B),Ft&&(m&&Ft===1&&m(B),M&&M(B),Ft=0),Dt=!1),xe&&!(xe=!1)&&Ct&&Ct(B),U&&(ut(B),U=!1),Vt=0},xt=function(bt,Kt,mt){at[mt]+=bt,pt[mt]+=Kt,B._vx.update(bt),B._vy.update(Kt),c?Vt||(Vt=requestAnimationFrame(Lt)):Lt()},$t=function(bt,Kt){Et&&!Bt&&(B.axis=Bt=Math.abs(bt)>Math.abs(Kt)?"x":"y",xe=!0),Bt!=="y"&&(at[2]+=bt,B._vx.update(bt,!0)),Bt!=="x"&&(pt[2]+=Kt,B._vy.update(Kt,!0)),c?Vt||(Vt=requestAnimationFrame(Lt)):Lt()},Ot=function(bt){if(!ot(bt,1)){bt=no(bt,u);var Kt=bt.clientX,mt=bt.clientY,Gt=Kt-B.x,wt=mt-B.y,Ht=B.isDragging;B.x=Kt,B.y=mt,(Ht||(Gt||wt)&&(Math.abs(B.startX-Kt)>=s||Math.abs(B.startY-mt)>=s))&&(Ft||(Ft=Ht?2:1),Ht||(B.isDragging=!0),$t(Gt,wt))}},ae=B.onPress=function(vt){ot(vt,1)||vt&&vt.button||(B.axis=Bt=null,Qt.pause(),B.isPressed=!0,vt=no(vt),Tt=se=0,B.startX=B.x=vt.clientX,B.startY=B.y=vt.clientY,B._vx.reset(),B._vy.reset(),dn(H?a:ht,li[1],Ot,Rt,!0),B.deltaX=B.deltaY=0,S&&S(B))},L=B.onRelease=function(vt){if(!ot(vt,1)){fn(H?a:ht,li[1],Ot,!0);var bt=!isNaN(B.y-B.startY),Kt=B.isDragging,mt=Kt&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Gt=no(vt);!mt&&bt&&(B._vx.reset(),B._vy.reset(),u&&nt&&Je.delayedCall(.08,function(){if(bo()-Yt>300&&!vt.defaultPrevented){if(vt.target.click)vt.target.click();else if(ht.createEvent){var wt=ht.createEvent("MouseEvents");wt.initMouseEvent("click",!0,!0,Gn,1,Gt.screenX,Gt.screenY,Gt.clientX,Gt.clientY,!1,!1,!1,!1,0,null),vt.target.dispatchEvent(wt)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,f&&Kt&&!H&&Qt.restart(!0),Ft&&Lt(),p&&Kt&&p(B),v&&v(B,mt)}},ct=function(bt){return bt.touches&&bt.touches.length>1&&(B.isGesturing=!0)&&et(bt,B.isDragging)},q=function(){return(B.isGesturing=!1)||D(B)},j=function(bt){if(!ot(bt)){var Kt=A(),mt=E();xt((Kt-V)*tt,(mt-Q)*tt,1),V=Kt,Q=mt,f&&Qt.restart(!0)}},lt=function(bt){if(!ot(bt)){bt=no(bt,u),ut&&(U=!0);var Kt=(bt.deltaMode===1?l:bt.deltaMode===2?Gn.innerHeight:1)*_;xt(bt.deltaX*Kt,bt.deltaY*Kt,0),f&&!H&&Qt.restart(!0)}},ft=function(bt){if(!ot(bt)){var Kt=bt.clientX,mt=bt.clientY,Gt=Kt-B.x,wt=mt-B.y;B.x=Kt,B.y=mt,Dt=!0,f&&Qt.restart(!0),(Gt||wt)&&$t(Gt,wt)}},zt=function(bt){B.event=bt,X(B)},ce=function(bt){B.event=bt,$(B)},Ue=function(bt){return ot(bt)||no(bt,u)&&K(B)};Qt=B._dc=Je.delayedCall(h||.25,It).pause(),B.deltaX=B.deltaY=0,B._vx=Nc(0,50,!0),B._vy=Nc(0,50,!0),B.scrollX=A,B.scrollY=E,B.isDragging=B.isGesturing=B.isPressed=!1,gp(this),B.enable=function(vt){return B.isEnabled||(dn(Z?ht:a,"scroll",Ic),o.indexOf("scroll")>=0&&dn(Z?ht:a,"scroll",j,Rt,gt),o.indexOf("wheel")>=0&&dn(a,"wheel",lt,Rt,gt),(o.indexOf("touch")>=0&&mp||o.indexOf("pointer")>=0)&&(dn(a,li[0],ae,Rt,gt),dn(ht,li[2],L),dn(ht,li[3],L),nt&&dn(a,"click",it,!0,!0),K&&dn(a,"click",Ue),et&&dn(ht,"gesturestart",ct),D&&dn(ht,"gestureend",q),X&&dn(a,Ar+"enter",zt),$&&dn(a,Ar+"leave",ce),Y&&dn(a,Ar+"move",ft)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=Dt=Ft=!1,B._vx.reset(),B._vy.reset(),V=A(),Q=E(),vt&&vt.type&&ae(vt),Ut&&Ut(B)),B},B.disable=function(){B.isEnabled&&(Ms.filter(function(vt){return vt!==B&&wo(vt.target)}).length||fn(Z?ht:a,"scroll",Ic),B.isPressed&&(B._vx.reset(),B._vy.reset(),fn(H?a:ht,li[1],Ot,!0)),fn(Z?ht:a,"scroll",j,gt),fn(a,"wheel",lt,gt),fn(a,li[0],ae,gt),fn(ht,li[2],L),fn(ht,li[3],L),fn(a,"click",it,!0),fn(a,"click",Ue),fn(ht,"gesturestart",ct),fn(ht,"gestureend",q),fn(a,Ar+"enter",zt),fn(a,Ar+"leave",ce),fn(a,Ar+"move",ft),B.isEnabled=B.isPressed=B.isDragging=!1,Jt&&Jt(B))},B.kill=B.revert=function(){B.disable();var vt=Ms.indexOf(B);vt>=0&&Ms.splice(vt,1),Ni===B&&(Ni=0)},Ms.push(B),H&&wo(a)&&(Ni=B),B.enable(g)},Q_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Be.version="3.15.0";Be.create=function(r){return new Be(r)};Be.register=Sp;Be.getAll=function(){return Ms.slice()};Be.getById=function(r){return Ms.filter(function(t){return t.vars.id===r})[0]};vp()&&Je.registerPlugin(Be);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var St,ms,ne,_e,kn,me,$u,cl,Xo,Ao,mo,ra,rn,Ml,Fc,gn,Oh,Bh,_s,yp,Il,Ep,_n,Oc,Tp,bp,nr,Bc,Ku,Cs,Zu,Co,zc,Nl,sa=1,sn=Date.now,Fl=sn(),ii=0,_o=0,zh=function(t,e,n){var i=On(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},kh=function(t,e){return e&&(!On(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},ng=function r(){return _o&&requestAnimationFrame(r)},Hh=function(){return Ml=1},Vh=function(){return Ml=0},mi=function(t){return t},go=function(t){return Math.round(t*1e5)/1e5||0},wp=function(){return typeof window<"u"},Ap=function(){return St||wp()&&(St=window.gsap)&&St.registerPlugin&&St},Xr=function(t){return!!~$u.indexOf(t)},Cp=function(t){return(t==="Height"?Zu:ne["inner"+t])||kn["client"+t]||me["client"+t]},Rp=function(t){return hr(t,"getBoundingClientRect")||(Xr(t)?function(){return $a.width=ne.innerWidth,$a.height=Zu,$a}:function(){return Ii(t)})},ig=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=hr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Cp(s):t["client"+s])||0}},rg=function(t,e){return!e||~yi.indexOf(t)?Rp(t):function(){return $a}},Mi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=hr(t,n))?o()-Rp(t)()[s]:Xr(t)?(kn[n]||me[n])-Cp(i):t[n]-t["offset"+i])},oa=function(t,e){for(var n=0;n<_s.length;n+=3)(!e||~e.indexOf(_s[n+1]))&&t(_s[n],_s[n+1],_s[n+2])},On=function(t){return typeof t=="string"},an=function(t){return typeof t=="function"},vo=function(t){return typeof t=="number"},Cr=function(t){return typeof t=="object"},io=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Jr=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Qr=Math.abs,Pp="left",Dp="top",ju="right",Ju="bottom",Vr="width",Gr="height",Ro="Right",Po="Left",Do="Top",Lo="Bottom",ke="padding",Qn="margin",Bs="Width",Qu="Height",Ge="px",ti=function(t){return ne.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},sg=function(t){var e=ti(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Gh=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ii=function(t,e){var n=e&&ti(t)[Fc]!=="matrix(1, 0, 0, 1, 0, 0)"&&St.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},ul=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Lp=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},og=function(t){return function(e){return St.utils.snap(Lp(t),e)}},th=function(t){var e=St.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},ag=function(t){return function(e,n){return th(Lp(t))(e,n.direction)}},aa=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Ke=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},$e=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},la=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Wh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ca={toggleActions:"play",anticipatePin:0},hl={top:0,left:0,center:.5,bottom:1,right:1},Wa=function(t,e){if(On(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in hl?hl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ua=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=_e.createElement("div"),g=Xr(n)||hr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?me:n.tagName==="IFRAME"?n.contentDocument.body:n,M=t.indexOf("start")!==-1,S=M?c:u,v="border-color:"+S+";font-size:"+f+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(v+=(i===We?ju:Ju)+":"+(o+parseFloat(h))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=v,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Xa(_,0,i,M),_},Xa=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Bs]=1,s["border"+a+Bs]=0,s[n.p]=e+"px",St.set(t,s)},te=[],kc={},Yo,Xh=function(){return sn()-ii>34&&(Yo||(Yo=requestAnimationFrame(Bi)))},ts=function(){(!_n||!_n.isPressed||_n.startX>me.clientWidth)&&(ie.cache++,_n?Yo||(Yo=requestAnimationFrame(Bi)):Bi(),ii||qr("scrollStart"),ii=sn())},Ol=function(){bp=ne.innerWidth,Tp=ne.innerHeight},xo=function(t){ie.cache++,(t===!0||!rn&&!Ep&&!_e.fullscreenElement&&!_e.webkitFullscreenElement&&(!Oc||bp!==ne.innerWidth||Math.abs(ne.innerHeight-Tp)>ne.innerHeight*.25))&&cl.restart(!0)},Yr={},lg=[],Up=function r(){return $e(re,"scrollEnd",r)||Nr(!0)},qr=function(t){return Yr[t]&&Yr[t].map(function(e){return e()})||lg},Fn=[],Ip=function(t){for(var e=0;e<Fn.length;e+=5)(!t||Fn[e+4]&&Fn[e+4].query===t)&&(Fn[e].style.cssText=Fn[e+1],Fn[e].getBBox&&Fn[e].setAttribute("transform",Fn[e+2]||""),Fn[e+3].uncache=1)},Np=function(){return ie.forEach(function(t){return an(t)&&++t.cacheID&&(t.rec=t())})},eh=function(t,e){var n;for(gn=0;gn<te.length;gn++)n=te[gn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Co=!0,e&&Ip(e),e||qr("revert")},Fp=function(t,e){ie.cache++,(e||!vn)&&ie.forEach(function(n){return an(n)&&n.cacheID++&&(n.rec=0)}),On(t)&&(ne.history.scrollRestoration=Ku=t)},vn,Wr=0,Yh,cg=function(){if(Yh!==Wr){var t=Yh=Wr;requestAnimationFrame(function(){return t===Wr&&Nr(!0)})}},Op=function(){me.appendChild(Cs),Zu=!_n&&Cs.offsetHeight||ne.innerHeight,me.removeChild(Cs)},qh=function(t){return Xo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Nr=function(t,e){if(kn=_e.documentElement,me=_e.body,$u=[ne,_e,kn,me],ii&&!t&&!Co){Ke(re,"scrollEnd",Up);return}Op(),vn=re.isRefreshing=!0,Co||Np();var n=qr("refreshInit");yp&&re.sort(),e||eh(),ie.forEach(function(i){an(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),te.slice(0).forEach(function(i){return i.refresh()}),Co=!1,te.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),zc=1,qh(!0),te.forEach(function(i){var s=Mi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),qh(!1),zc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ie.forEach(function(i){an(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Fp(Ku,1),cl.pause(),Wr++,vn=2,Bi(2),te.forEach(function(i){return an(i.vars.onRefresh)&&i.vars.onRefresh(i)}),vn=re.isRefreshing=!1,qr("refresh")},Hc=0,Ya=1,Uo,Bi=function(t){if(t===2||!vn&&!Co){re.isUpdating=!0,Uo&&Uo.update(0);var e=te.length,n=sn(),i=n-Fl>=50,s=e&&te[0].scroll();if(Ya=Hc>s?-1:1,vn||(Hc=s),i&&(ii&&!Ml&&n-ii>200&&(ii=0,qr("scrollEnd")),mo=Fl,Fl=n),Ya<0){for(gn=e;gn-- >0;)te[gn]&&te[gn].update(0,i);Ya=1}else for(gn=0;gn<e;gn++)te[gn]&&te[gn].update(0,i);re.isUpdating=!1}Yo=0},Vc=[Pp,Dp,Ju,ju,Qn+Lo,Qn+Ro,Qn+Do,Qn+Po,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],qa=Vc.concat([Vr,Gr,"boxSizing","max"+Bs,"max"+Qu,"position",Qn,ke,ke+Do,ke+Ro,ke+Lo,ke+Po]),ug=function(t,e,n){Rs(n);var i=t._gsap;if(i.spacerIsNative)Rs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Bl=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Vc.length,o=e.style,a=t.style,l;s--;)l=Vc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ju]=a[ju]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Vr]=ul(t,Mn)+Ge,o[Gr]=ul(t,We)+Ge,o[ke]=a[Qn]=a[Dp]=a[Pp]="0",Rs(i),a[Vr]=a["max"+Bs]=n[Vr],a[Gr]=a["max"+Qu]=n[Gr],a[ke]=n[ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},hg=/([A-Z])/g,Rs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||St.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(hg,"-$1").toLowerCase())}},ha=function(t){for(var e=qa.length,n=t.style,i=[],s=0;s<e;s++)i.push(qa[s],n[qa[s]]);return i.t=t,i},fg=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},$a={left:0,top:0},$h=function(t,e,n,i,s,o,a,l,c,u,f,h,d,_){an(t)&&(t=t(l)),On(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Wa("0"+t.substr(3),n):0));var g=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(t)||(t=+t),vo(t))d&&(t=St.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,t)),a&&Xa(a,n,i,!0);else{an(e)&&(e=e(l));var S=(t||"0").split(" "),v,C,w,T;M=yn(e,l)||me,v=Ii(M)||{},(!v||!v.left&&!v.top)&&ti(M).display==="none"&&(T=M.style.display,M.style.display="block",v=Ii(M),T?M.style.display=T:M.style.removeProperty("display")),C=Wa(S[0],v[i.d]),w=Wa(S[1]||"0",n),t=v[i.p]-c[i.p]-u+C+s-w,a&&Xa(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var R=t+n,y=o._isStart;m="scroll"+i.d2,Xa(o,R,i,y&&R>20||!y&&(f?Math.max(me[m],kn[m]):o.parentNode[m])<=R+1),f&&(c=Ii(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ge))}return d&&M&&(m=Ii(M),d.seek(h),p=Ii(M),d._caScrollDist=m[i.p]-p[i.p],t=t/d._caScrollDist*h),d&&d.seek(g),d?t:Math.round(t)},dg=/(webkit|moz|length|cssText|inset)/i,Kh=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===me){t._stOrig=s.cssText,a=ti(t);for(o in a)!+o&&!dg.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;St.core.getCache(t).uncache=1,e.appendChild(t)}},Bp=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},fa=function(t,e,n){var i={};i[e.p]="+="+n,St.set(t,i)},Zh=function(t,e){var n=mr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,_={};c=c||n();var g=Bp(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ie.cache++,o.tween&&Bi()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=St.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ke(t,"wheel",n.wheelHandler),re.isTouch&&Ke(t,"touchmove",n.wheelHandler),s},re=(function(){function r(e,n){ms||r.register(St)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Bc(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_o){this.update=this.refresh=this.kill=mi;return}n=Gh(On(n)||vo(n)||n.nodeType?{trigger:n}:n,ca);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,S=s.once,v=s.snap,C=s.pinReparent,w=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,y=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Mn:We,P=!f&&f!==0,N=yn(n.scroller||ne),z=St.core.getCache(N),X=Xr(N),$=("pinType"in n?n.pinType:hr(N,"pinType")||X&&"fixed")==="fixed",Y=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=P&&n.toggleActions.split(" "),H="markers"in n?n.markers:ca.markers,et=X?0:parseFloat(ti(N)["border"+x.p2+Bs])||0,D=this,ut=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Ut=ig(N,X,x),Jt=rg(N,X),K=0,tt=0,gt=0,nt=mr(N,x),Et,Ct,Vt,Qt,Ft,Dt,U,xe,Bt,B,Tt,se,Rt,A,E,V,Q,J,Z,ht,at,pt,Yt,it,ot,It,Lt,xt,$t,Ot,ae,L,ct,q,j,lt,ft,zt,ce;if(D._startClamp=D._endClamp=!1,D._dir=x,m*=45,D.scroller=N,D.scroll=T?T.time.bind(T):nt,Qt=nt(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(yp=1,n.refreshPriority===-9999&&(Uo=D)),z.tweenScroll=z.tweenScroll||{top:Zh(N,We),left:Zh(N,Mn)},D.tweenTo=Et=z.tweenScroll[x.p],D.scrubDuration=function(mt){ct=vo(mt)&&mt,ct?L?L.duration(mt):L=St.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ct,paused:!0,onComplete:function(){return p&&p(D)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(f),Ot=0,l||(l=i.vars.id)),v&&((!Cr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in me.style&&St.set(X?[me,kn]:N,{scrollBehavior:"auto"}),ie.forEach(function(mt){return an(mt)&&mt.target===(X?_e.scrollingElement||kn:N)&&(mt.smooth=!1)}),Vt=an(v.snapTo)?v.snapTo:v.snapTo==="labels"?og(i):v.snapTo==="labelsDirectional"?ag(i):v.directional!==!1?function(mt,Gt){return th(v.snapTo)(mt,sn()-tt<500?0:Gt.direction)}:St.utils.snap(v.snapTo),q=v.duration||{min:.1,max:2},q=Cr(q)?Ao(q.min,q.max):Ao(q,q),j=St.delayedCall(v.delay||ct/2||.1,function(){var mt=nt(),Gt=sn()-tt<500,wt=Et.tween;if((Gt||Math.abs(D.getVelocity())<10)&&!wt&&!Ml&&K!==mt){var Ht=(mt-Dt)/A,Fe=i&&!P?i.totalProgress():Ht,ee=Gt?0:(Fe-ae)/(sn()-mo)*1e3||0,Te=St.utils.clamp(-Ht,1-Ht,Qr(ee/2)*ee/.185),Ve=Ht+(v.inertia===!1?0:Te),Me,Se,he=v,Dn=he.onStart,be=he.onInterrupt,hn=he.onComplete;if(Me=Vt(Ve,D),vo(Me)||(Me=Ve),Se=Math.max(0,Math.round(Dt+Me*A)),mt<=U&&mt>=Dt&&Se!==mt){if(wt&&!wt._initted&&wt.data<=Qr(Se-mt))return;v.inertia===!1&&(Te=Me-Ht),Et(Se,{duration:q(Qr(Math.max(Qr(Ve-Fe),Qr(Me-Fe))*.185/ee/.05||0)),ease:v.ease||"power3",data:Qr(Se-mt),onInterrupt:function(){return j.restart(!0)&&be&&Jr(D,be)},onComplete:function(){D.update(),K=nt(),i&&!P&&(L?L.resetTo("totalProgress",Me,i._tTime/i._tDur):i.progress(Me)),Ot=ae=i&&!P?i.totalProgress():D.progress,M&&M(D),hn&&Jr(D,hn)}},mt,Te*A,Se-mt-Te*A),Dn&&Jr(D,Dn,Et.tween)}}else D.isActive&&K!==mt&&j.restart(!0)}).pause()),l&&(kc[l]=D),h=D.trigger=yn(h||d!==!0&&d),ce=h&&h._gsap&&h._gsap.stRevert,ce&&(ce=ce(D)),d=d===!0?h:yn(d),On(a)&&(a={targets:h,className:a}),d&&(_===!1||_===Qn||(_=!_&&d.parentNode&&d.parentNode.style&&ti(d.parentNode).display==="flex"?!1:ke),D.pin=d,Ct=St.core.getCache(d),Ct.spacer?E=Ct.pinState:(w&&(w=yn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ct.spacerIsNative=!!w,w&&(Ct.spacerState=ha(w))),Ct.spacer=J=w||_e.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),Ct.pinState=E=ha(d)),n.force3D!==!1&&St.set(d,{force3D:!0}),D.spacer=J=Ct.spacer,$t=ti(d),it=$t[_+x.os2],ht=St.getProperty(d),at=St.quickSetter(d,x.a,Ge),Bl(d,J,$t),Q=ha(d)),H){se=Cr(H)?Gh(H,Wh):Wh,B=ua("scroller-start",l,N,x,se,0),Tt=ua("scroller-end",l,N,x,se,0,B),Z=B["offset"+x.op.d2];var Ue=yn(hr(N,"content")||N);xe=this.markerStart=ua("start",l,Ue,x,se,Z,0,T),Bt=this.markerEnd=ua("end",l,Ue,x,se,Z,0,T),T&&(zt=St.quickSetter([xe,Bt],x.a,Ge)),!$&&!(yi.length&&hr(N,"fixedMarkers")===!0)&&(sg(X?me:N),St.set([B,Tt],{force3D:!0}),It=St.quickSetter(B,x.a,Ge),xt=St.quickSetter(Tt,x.a,Ge))}if(T){var vt=T.vars.onUpdate,bt=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){D.update(0,0,1),vt&&vt.apply(T,bt||[])})}if(D.previous=function(){return te[te.indexOf(D)-1]},D.next=function(){return te[te.indexOf(D)+1]},D.revert=function(mt,Gt){if(!Gt)return D.kill(!0);var wt=mt!==!1||!D.enabled,Ht=rn;wt!==D.isReverted&&(wt&&(lt=Math.max(nt(),D.scroll.rec||0),gt=D.progress,ft=i&&i.progress()),xe&&[xe,Bt,B,Tt].forEach(function(Fe){return Fe.style.display=wt?"none":"block"}),wt&&(rn=D,D.update(wt)),d&&(!C||!D.isActive)&&(wt?ug(d,J,E):Bl(d,J,ti(d),ot)),wt||D.update(wt),rn=Ht,D.isReverted=wt)},D.refresh=function(mt,Gt,wt,Ht){if(!((rn||!D.enabled)&&!Gt)){if(d&&mt&&ii){Ke(r,"scrollEnd",Up);return}!vn&&ut&&ut(D),rn=D,Et.tween&&!wt&&(Et.tween.kill(),Et.tween=0),L&&L.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Re){return Re.vars.immediateRender&&Re.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Fe=Ut(),ee=Jt(),Te=T?T.duration():Mi(N,x),Ve=A<=.01||!A,Me=0,Se=Ht||0,he=Cr(wt)?wt.end:n.end,Dn=n.endTrigger||h,be=Cr(wt)?wt.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),hn=D.pinnedContainer=n.pinnedContainer&&yn(n.pinnedContainer,D),b=h&&Math.max(0,te.indexOf(D))||0,I=b,k,G,O,rt,st,dt,Mt,kt,Wt,yt,qt,ue,fe;for(H&&Cr(wt)&&(ue=St.getProperty(B,x.p),fe=St.getProperty(Tt,x.p));I-- >0;)dt=te[I],dt.end||dt.refresh(0,1)||(rn=D),Mt=dt.pin,Mt&&(Mt===h||Mt===d||Mt===hn)&&!dt.isReverted&&(yt||(yt=[]),yt.unshift(dt),dt.revert(!0,!0)),dt!==te[I]&&(b--,I--);for(an(be)&&(be=be(D)),be=zh(be,"start",D),Dt=$h(be,h,Fe,x,nt(),xe,B,D,ee,et,$,Te,T,D._startClamp&&"_startClamp")||(d?-.001:0),an(he)&&(he=he(D)),On(he)&&!he.indexOf("+=")&&(~he.indexOf(" ")?he=(On(be)?be.split(" ")[0]:"")+he:(Me=Wa(he.substr(2),Fe),he=On(be)?be:(T?St.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Dt):Dt)+Me,Dn=h)),he=zh(he,"end",D),U=Math.max(Dt,$h(he||(Dn?"100% 0":Te),Dn,Fe,x,nt()+Me,Bt,Tt,D,ee,et,$,Te,T,D._endClamp&&"_endClamp"))||-.001,Me=0,I=b;I--;)dt=te[I]||{},Mt=dt.pin,Mt&&dt.start-dt._pinPush<=Dt&&!T&&dt.end>0&&(k=dt.end-(D._startClamp?Math.max(0,dt.start):dt.start),(Mt===h&&dt.start-dt._pinPush<Dt||Mt===hn)&&isNaN(be)&&(Me+=k*(1-dt.progress)),Mt===d&&(Se+=k));if(Dt+=Me,U+=Me,D._startClamp&&(D._startClamp+=Me),D._endClamp&&!vn&&(D._endClamp=U||-.001,U=Math.min(U,Mi(N,x))),A=U-Dt||(Dt-=.01)&&.001,Ve&&(gt=St.utils.clamp(0,1,St.utils.normalize(Dt,U,lt))),D._pinPush=Se,xe&&Me&&(k={},k[x.a]="+="+Me,hn&&(k[x.p]="-="+nt()),St.set([xe,Bt],k)),d&&!(zc&&D.end>=Mi(N,x)))k=ti(d),rt=x===We,O=nt(),pt=parseFloat(ht(x.a))+Se,!Te&&U>1&&(qt=(X?_e.scrollingElement||kn:N).style,qt={style:qt,value:qt["overflow"+x.a.toUpperCase()]},X&&ti(me)["overflow"+x.a.toUpperCase()]!=="scroll"&&(qt.style["overflow"+x.a.toUpperCase()]="scroll")),Bl(d,J,k),Q=ha(d),G=Ii(d,!0),kt=$&&mr(N,rt?Mn:We)(),_?(ot=[_+x.os2,A+Se+Ge],ot.t=J,I=_===ke?ul(d,x)+A+Se:0,I&&(ot.push(x.d,I+Ge),J.style.flexBasis!=="auto"&&(J.style.flexBasis=I+Ge)),Rs(ot),hn&&te.forEach(function(Re){Re.pin===hn&&Re.vars.pinSpacing!==!1&&(Re._subPinOffset=!0)}),$&&nt(lt)):(I=ul(d,x),I&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=I+Ge)),$&&(st={top:G.top+(rt?O-Dt:kt)+Ge,left:G.left+(rt?kt:O-Dt)+Ge,boxSizing:"border-box",position:"fixed"},st[Vr]=st["max"+Bs]=Math.ceil(G.width)+Ge,st[Gr]=st["max"+Qu]=Math.ceil(G.height)+Ge,st[Qn]=st[Qn+Do]=st[Qn+Ro]=st[Qn+Lo]=st[Qn+Po]="0",st[ke]=k[ke],st[ke+Do]=k[ke+Do],st[ke+Ro]=k[ke+Ro],st[ke+Lo]=k[ke+Lo],st[ke+Po]=k[ke+Po],V=fg(E,st,C),vn&&nt(0)),i?(Wt=i._initted,Il(1),i.render(i.duration(),!0,!0),Yt=ht(x.a)-pt+A+Se,Lt=Math.abs(A-Yt)>1,$&&Lt&&V.splice(V.length-2,2),i.render(0,!0,!0),Wt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Il(0)):Yt=A,qt&&(qt.value?qt.style["overflow"+x.a.toUpperCase()]=qt.value:qt.style.removeProperty("overflow-"+x.a));else if(h&&nt()&&!T)for(G=h.parentNode;G&&G!==me;)G._pinOffset&&(Dt-=G._pinOffset,U-=G._pinOffset),G=G.parentNode;yt&&yt.forEach(function(Re){return Re.revert(!1,!0)}),D.start=Dt,D.end=U,Qt=Ft=vn?lt:nt(),!T&&!vn&&(Qt<lt&&nt(lt),D.scroll.rec=0),D.revert(!1,!0),tt=sn(),j&&(K=-1,j.restart(!0)),rn=0,i&&P&&(i._initted||ft)&&i.progress()!==ft&&i.progress(ft||0,!0).render(i.time(),!0,!0),(Ve||gt!==D.progress||T||g||i&&!i._initted)&&(i&&!P&&(i._initted||gt||i.vars.immediateRender!==!1)&&i.totalProgress(T&&Dt<-.001&&!gt?St.utils.normalize(Dt,U,0):gt,!0),D.progress=Ve||(Qt-Dt)/A===gt?0:gt),d&&_&&(J._pinOffset=Math.round(D.progress*Yt)),L&&L.invalidate(),isNaN(ue)||(ue-=St.getProperty(B,x.p),fe-=St.getProperty(Tt,x.p),fa(B,x,ue),fa(xe,x,ue-(Ht||0)),fa(Tt,x,fe),fa(Bt,x,fe-(Ht||0))),Ve&&!vn&&D.update(),u&&!vn&&!Rt&&(Rt=!0,u(D),Rt=!1)}},D.getVelocity=function(){return(nt()-Ft)/(sn()-mo)*1e3||0},D.endAnimation=function(){io(D.callbackAnimation),i&&(L?L.progress(1):i.paused()?P||io(i,D.direction<0,1):io(i,i.reversed()))},D.labelToScroll=function(mt){return i&&i.labels&&(Dt||D.refresh()||Dt)+i.labels[mt]/i.duration()*A||0},D.getTrailing=function(mt){var Gt=te.indexOf(D),wt=D.direction>0?te.slice(0,Gt).reverse():te.slice(Gt+1);return(On(mt)?wt.filter(function(Ht){return Ht.vars.preventOverlaps===mt}):wt).filter(function(Ht){return D.direction>0?Ht.end<=Dt:Ht.start>=U})},D.update=function(mt,Gt,wt){if(!(T&&!wt&&!mt)){var Ht=vn===!0?lt:D.scroll(),Fe=mt?0:(Ht-Dt)/A,ee=Fe<0?0:Fe>1?1:Fe||0,Te=D.progress,Ve,Me,Se,he,Dn,be,hn,b;if(Gt&&(Ft=Qt,Qt=T?nt():Ht,v&&(ae=Ot,Ot=i&&!P?i.totalProgress():ee)),m&&d&&!rn&&!sa&&ii&&(!ee&&Dt<Ht+(Ht-Ft)/(sn()-mo)*m?ee=1e-4:ee===1&&U>Ht+(Ht-Ft)/(sn()-mo)*m&&(ee=.9999)),ee!==Te&&D.enabled){if(Ve=D.isActive=!!ee&&ee<1,Me=!!Te&&Te<1,be=Ve!==Me,Dn=be||!!ee!=!!Te,D.direction=ee>Te?1:-1,D.progress=ee,Dn&&!rn&&(Se=ee&&!Te?0:ee===1?1:Te===1?2:3,P&&(he=!be&&W[Se+1]!=="none"&&W[Se+1]||W[Se],b=i&&(he==="complete"||he==="reset"||he in i))),y&&(be||b)&&(b||f||!i)&&(an(y)?y(D):D.getTrailing(y).forEach(function(O){return O.endAnimation()})),P||(L&&!rn&&!sa?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",ee,i._tTime/i._tDur):(L.vars.totalProgress=ee,L.invalidate().restart())):i&&i.totalProgress(ee,!!(rn&&(tt||mt)))),d){if(mt&&_&&(J.style[_+x.os2]=it),!$)at(go(pt+Yt*ee));else if(Dn){if(hn=!mt&&ee>Te&&U+1>Ht&&Ht+1>=Mi(N,x),C)if(!mt&&(Ve||hn)){var I=Ii(d,!0),k=Ht-Dt;Kh(d,me,I.top+(x===We?k:0)+Ge,I.left+(x===We?0:k)+Ge)}else Kh(d,J);Rs(Ve||hn?V:Q),Lt&&ee<1&&Ve||at(pt+(ee===1&&!hn?Yt:0))}}v&&!Et.tween&&!rn&&!sa&&j.restart(!0),a&&(be||S&&ee&&(ee<1||!Nl))&&Xo(a.targets).forEach(function(O){return O.classList[Ve||S?"add":"remove"](a.className)}),o&&!P&&!mt&&o(D),Dn&&!rn?(P&&(b&&(he==="complete"?i.pause().totalProgress(1):he==="reset"?i.restart(!0).pause():he==="restart"?i.restart(!0):i[he]()),o&&o(D)),(be||!Nl)&&(c&&be&&Jr(D,c),Y[Se]&&Jr(D,Y[Se]),S&&(ee===1?D.kill(!1,1):Y[Se]=0),be||(Se=ee===1?1:3,Y[Se]&&Jr(D,Y[Se]))),R&&!Ve&&Math.abs(D.getVelocity())>(vo(R)?R:2500)&&(io(D.callbackAnimation),L?L.progress(1):io(i,he==="reverse"?1:!ee,1))):P&&o&&!rn&&o(D)}if(xt){var G=T?Ht/T.duration()*(T._caScrollDist||0):Ht;It(G+(B._isFlipped?1:0)),xt(G)}zt&&zt(-Ht/T.duration()*(T._caScrollDist||0))}},D.enable=function(mt,Gt){D.enabled||(D.enabled=!0,Ke(N,"resize",xo),X||Ke(N,"scroll",ts),ut&&Ke(r,"refreshInit",ut),mt!==!1&&(D.progress=gt=0,Qt=Ft=K=nt()),Gt!==!1&&D.refresh())},D.getTween=function(mt){return mt&&Et?Et.tween:L},D.setPositions=function(mt,Gt,wt,Ht){if(T){var Fe=T.scrollTrigger,ee=T.duration(),Te=Fe.end-Fe.start;mt=Fe.start+Te*mt/ee,Gt=Fe.start+Te*Gt/ee}D.refresh(!1,!1,{start:kh(mt,wt&&!!D._startClamp),end:kh(Gt,wt&&!!D._endClamp)},Ht),D.update()},D.adjustPinSpacing=function(mt){if(ot&&mt){var Gt=ot.indexOf(x.d)+1;ot[Gt]=parseFloat(ot[Gt])+mt+Ge,ot[1]=parseFloat(ot[1])+mt+Ge,Rs(ot)}},D.disable=function(mt,Gt){if(mt!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Gt||L&&L.pause(),lt=0,Ct&&(Ct.uncache=1),ut&&$e(r,"refreshInit",ut),j&&(j.pause(),Et.tween&&Et.tween.kill()&&(Et.tween=0)),!X)){for(var wt=te.length;wt--;)if(te[wt].scroller===N&&te[wt]!==D)return;$e(N,"resize",xo),X||$e(N,"scroll",ts)}},D.kill=function(mt,Gt){D.disable(mt,Gt),L&&!Gt&&L.kill(),l&&delete kc[l];var wt=te.indexOf(D);wt>=0&&te.splice(wt,1),wt===gn&&Ya>0&&gn--,wt=0,te.forEach(function(Ht){return Ht.scroller===D.scroller&&(wt=1)}),wt||vn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,mt&&i.revert({kill:!1}),Gt||i.kill()),xe&&[xe,Bt,B,Tt].forEach(function(Ht){return Ht.parentNode&&Ht.parentNode.removeChild(Ht)}),Uo===D&&(Uo=0),d&&(Ct&&(Ct.uncache=1),wt=0,te.forEach(function(Ht){return Ht.pin===d&&wt++}),wt||(Ct.spacer=0)),n.onKill&&n.onKill(D)},te.push(D),D.enable(!1,!1),ce&&ce(D),i&&i.add&&!A){var Kt=D.update;D.update=function(){D.update=Kt,ie.cache++,Dt||U||D.refresh()},St.delayedCall(.01,D.update),A=.01,Dt=U=0}else D.refresh();d&&cg()},r.register=function(n){return ms||(St=n||Ap(),wp()&&window.document&&r.enable(),ms=_o),ms},r.defaults=function(n){if(n)for(var i in n)ca[i]=n[i];return ca},r.disable=function(n,i){_o=0,te.forEach(function(o){return o[i?"kill":"disable"](n)}),$e(ne,"wheel",ts),$e(_e,"scroll",ts),clearInterval(ra),$e(_e,"touchcancel",mi),$e(me,"touchstart",mi),aa($e,_e,"pointerdown,touchstart,mousedown",Hh),aa($e,_e,"pointerup,touchend,mouseup",Vh),cl.kill(),oa($e);for(var s=0;s<ie.length;s+=3)la($e,ie[s],ie[s+1]),la($e,ie[s],ie[s+2])},r.enable=function(){if(ne=window,_e=document,kn=_e.documentElement,me=_e.body,St){if(Xo=St.utils.toArray,Ao=St.utils.clamp,Bc=St.core.context||mi,Il=St.core.suppressOverwrites||mi,Ku=ne.history.scrollRestoration||"auto",Hc=ne.pageYOffset||0,St.core.globals("ScrollTrigger",r),me){_o=1,Cs=document.createElement("div"),Cs.style.height="100vh",Cs.style.position="absolute",Op(),ng(),Be.register(St),r.isTouch=Be.isTouch,nr=Be.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Oc=Be.isTouch===1,Ke(ne,"wheel",ts),$u=[ne,_e,kn,me],St.matchMedia?(r.matchMedia=function(u){var f=St.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},St.addEventListener("matchMediaInit",function(){Np(),eh()}),St.addEventListener("matchMediaRevert",function(){return Ip()}),St.addEventListener("matchMedia",function(){Nr(0,1),qr("matchMedia")}),St.matchMedia().add("(orientation: portrait)",function(){return Ol(),Ol})):console.warn("Requires GSAP 3.11.0 or later"),Ol(),Ke(_e,"scroll",ts);var n=me.hasAttribute("style"),i=me.style,s=i.borderTopStyle,o=St.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ii(me),We.m=Math.round(a.top+We.sc())||0,Mn.m=Math.round(a.left+Mn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(me.setAttribute("style",""),me.removeAttribute("style")),ra=setInterval(Xh,250),St.delayedCall(.5,function(){return sa=0}),Ke(_e,"touchcancel",mi),Ke(me,"touchstart",mi),aa(Ke,_e,"pointerdown,touchstart,mousedown",Hh),aa(Ke,_e,"pointerup,touchend,mouseup",Vh),Fc=St.utils.checkPrefix("transform"),qa.push(Fc),ms=sn(),cl=St.delayedCall(.2,Nr).pause(),_s=[_e,"visibilitychange",function(){var u=ne.innerWidth,f=ne.innerHeight;_e.hidden?(Oh=u,Bh=f):(Oh!==u||Bh!==f)&&xo()},_e,"DOMContentLoaded",Nr,ne,"load",Nr,ne,"resize",xo],oa(Ke),te.forEach(function(u){return u.enable(0,1)}),l=0;l<ie.length;l+=3)la($e,ie[l],ie[l+1]),la($e,ie[l],ie[l+2])}else if(_e){var c=function u(){r.enable(),_e.removeEventListener("DOMContentLoaded",u)};_e.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Nl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ra)||(ra=i)&&setInterval(Xh,i),"ignoreMobileResize"in n&&(Oc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(oa($e)||oa(Ke,n.autoRefreshEvents||"none"),Ep=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=yn(n),o=ie.indexOf(s),a=Xr(s);~o&&ie.splice(o,a?6:2),i&&(a?yi.unshift(ne,i,me,i,kn,i):yi.unshift(s,i))},r.clearMatchMedia=function(n){te.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(On(n)?yn(n):n).getBoundingClientRect(),a=o[s?Vr:Gr]*i||0;return s?o.right-a>0&&o.left+a<ne.innerWidth:o.bottom-a>0&&o.top+a<ne.innerHeight},r.positionInViewport=function(n,i,s){On(n)&&(n=yn(n));var o=n.getBoundingClientRect(),a=o[s?Vr:Gr],l=i==null?a/2:i in hl?hl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ne.innerWidth:(o.top+l)/ne.innerHeight},r.killAll=function(n){if(te.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Yr.killAll||[];Yr={},i.forEach(function(s){return s()})}},r})();re.version="3.15.0";re.saveStyles=function(r){return r?Xo(r).forEach(function(t){if(t&&t.style){var e=Fn.indexOf(t);e>=0&&Fn.splice(e,5),Fn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),St.core.getCache(t),Bc())}}):Fn};re.revert=function(r,t){return eh(!r,t)};re.create=function(r,t){return new re(r,t)};re.refresh=function(r){return r?xo(!0):(ms||re.register())&&Nr(!0)};re.update=function(r){return++ie.cache&&Bi(r===!0?2:0)};re.clearScrollMemory=Fp;re.maxScroll=function(r,t){return Mi(r,t?Mn:We)};re.getScrollFunc=function(r,t){return mr(yn(r),t?Mn:We)};re.getById=function(r){return kc[r]};re.getAll=function(){return te.filter(function(r){return r.vars.id!=="ScrollSmoother"})};re.isScrolling=function(){return!!ii};re.snapDirectional=th;re.addEventListener=function(r,t){var e=Yr[r]||(Yr[r]=[]);~e.indexOf(t)||e.push(t)};re.removeEventListener=function(r,t){var e=Yr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};re.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var f=[],h=[],d=St.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&an(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return an(s)&&(s=s(),Ke(re,"refresh",function(){return s=t.batchMax()})),Xo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(re.create(c))}),e};var jh=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},zl=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Be.isTouch?" pinch-zoom":""):"none",t===kn&&r(me,e)},da={auto:1,scroll:1},pg=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||St.core.getCache(s),a=sn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(da[(l=ti(s)).overflowY]||da[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Xr(s)&&(da[(l=ti(s)).overflowY]||da[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},zp=function(t,e,n,i){return Be.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&pg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ke(_e,Be.eventTypes[0],Qh,!1,!0)},onDisable:function(){return $e(_e,Be.eventTypes[0],Qh,!0)}})},mg=/(input|label|select|textarea)/i,Jh,Qh=function(t){var e=mg.test(t.target.tagName);(e||Jh)&&(t._gsapAllow=!0,Jh=e)},_g=function(t){Cr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=yn(t.target)||kn,u=St.core.globals().ScrollSmoother,f=u&&u.get(),h=nr&&(t.content&&yn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=mr(c,We),_=mr(c,Mn),g=1,m=(Be.isTouch&&ne.visualViewport?ne.visualViewport.scale*ne.visualViewport.width:ne.outerWidth)/ne.innerWidth,p=0,M=an(i)?function(){return i(a)}:function(){return i||2.8},S,v,C=zp(c,t.type,!0,s),w=function(){return v=!1},T=mi,R=mi,y=function(){l=Mi(c,We),R=Ao(nr?1:0,l),n&&(T=Ao(0,Mi(c,Mn))),S=Wr},x=function(){h._gsap.y=go(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(v){requestAnimationFrame(w);var H=go(a.deltaY/2),et=R(d.v-H);if(h&&et!==d.v+d.offset){d.offset=et-d.v;var D=go((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",h._gsap.y=D+"px",d.cacheID=ie.cache,Bi()}return!0}d.offset&&x(),v=!0},N,z,X,$,Y=function(){y(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return h&&St.set(h,{y:"+=0"}),t.ignoreCheck=function(W){return nr&&W.type==="touchmove"&&P()||g>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},t.onPress=function(){v=!1;var W=g;g=go((ne.visualViewport&&ne.visualViewport.scale||1)/m),N.pause(),W!==g&&zl(c,g>1.01?!0:n?!1:"x"),z=_(),X=d(),y(),S=Wr},t.onRelease=t.onGestureStart=function(W,H){if(d.offset&&x(),!H)$.restart(!0);else{ie.cache++;var et=M(),D,ut;n&&(D=_(),ut=D+et*.05*-W.velocityX/.227,et*=jh(_,D,ut,Mi(c,Mn)),N.vars.scrollX=T(ut)),D=d(),ut=D+et*.05*-W.velocityY/.227,et*=jh(d,D,ut,Mi(c,We)),N.vars.scrollY=R(ut),N.invalidate().duration(et).play(.01),(nr&&N.vars.scrollY>=l||D>=l-1)&&St.to({},{onUpdate:Y,duration:et})}o&&o(W)},t.onWheel=function(){N._ts&&N.pause(),sn()-p>1e3&&(S=0,p=sn())},t.onChange=function(W,H,et,D,ut){if(Wr!==S&&y(),H&&n&&_(T(D[2]===H?z+(W.startX-W.x):_()+H-D[1])),et){d.offset&&x();var Ut=ut[2]===et,Jt=Ut?X+W.startY-W.y:d()+et-ut[1],K=R(Jt);Ut&&Jt!==K&&(X+=K-Jt),d(K)}(et||H)&&Bi()},t.onEnable=function(){zl(c,n?!1:"x"),re.addEventListener("refresh",Y),Ke(ne,"resize",Y),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),C.enable()},t.onDisable=function(){zl(c,!0),$e(ne,"resize",Y),re.removeEventListener("refresh",Y),C.kill()},t.lockAxis=t.lockAxis!==!1,a=new Be(t),a.iOS=nr,nr&&!d()&&d(1),nr&&St.ticker.add(mi),$=a._dc,N=St.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Bp(d,d(),function(){return N.pause()})},onUpdate:Bi,onComplete:$.vars.onComplete}),a};re.sort=function(r){if(an(r))return te.sort(r);var t=ne.pageYOffset||0;return re.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ne.innerHeight}),te.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};re.observe=function(r){return new Be(r)};re.normalizeScroll=function(r){if(typeof r>"u")return _n;if(r===!0&&_n)return _n.enable();if(r===!1){_n&&_n.kill(),_n=r;return}var t=r instanceof Be?r:_g(r);return _n&&_n.target===t.target&&_n.kill(),Xr(t.target)&&(_n=t),t};re.core={_getVelocityProp:Nc,_inputObserver:zp,_scrollers:ie,_proxies:yi,bridge:{ss:function(){ii||qr("scrollStart"),ii=sn()},ref:function(){return rn}}};Ap()&&St.registerPlugin(re);var tf="1.3.26";function kp(r,t,e){return Math.max(r,Math.min(t,e))}function gg(r,t,e){return(1-e)*r+e*t}function vg(r,t,e,n){return gg(r,t,1-Math.exp(-e*n))}function xg(r,t){return(r%t+t)%t}var Mg=class{constructor(){At(this,"isRunning",!1);At(this,"value",0);At(this,"from",0);At(this,"to",0);At(this,"currentTime",0);At(this,"lerp");At(this,"duration");At(this,"easing");At(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=kp(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=vg(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Sg(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var yg=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){At(this,"width",0);At(this,"height",0);At(this,"scrollHeight",0);At(this,"scrollWidth",0);At(this,"debouncedResize");At(this,"wrapperResizeObserver");At(this,"contentResizeObserver");At(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});At(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});At(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=Sg(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Hp=class{constructor(){At(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const Eg=100/6,Ki={passive:!1};function ef(r,t){return r===1?Eg:r===2?t:1}var Tg=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){At(this,"touchStart",{x:0,y:0});At(this,"lastDelta",{x:0,y:0});At(this,"window",{width:0,height:0});At(this,"emitter",new Hp);At(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});At(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});At(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});At(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=ef(n,this.window.width),s=ef(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});At(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ki),this.element.addEventListener("touchstart",this.onTouchStart,Ki),this.element.addEventListener("touchmove",this.onTouchMove,Ki),this.element.addEventListener("touchend",this.onTouchEnd,Ki)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ki),this.element.removeEventListener("touchstart",this.onTouchStart,Ki),this.element.removeEventListener("touchmove",this.onTouchMove,Ki),this.element.removeEventListener("touchend",this.onTouchEnd,Ki)}};const nf=r=>Math.min(1,1.001-2**(-10*r));var bg=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:M=!0,autoRaf:S=!1,anchors:v=!1,autoToggle:C=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:R=T,stopInertiaOnNavigate:y=!1,respectReducedMotion:x=!0}={}){At(this,"_isScrolling",!1);At(this,"_isStopped",!1);At(this,"_isLocked",!1);At(this,"_preventNextNativeScrollEvent",!1);At(this,"_resetVelocityTimeout",null);At(this,"_rafId",null);At(this,"_isDraggingSelection",!1);At(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));At(this,"isTouching");At(this,"isIos");At(this,"time",0);At(this,"userData",{});At(this,"lastVelocity",0);At(this,"velocity",0);At(this,"direction",0);At(this,"options");At(this,"targetScroll");At(this,"animatedScroll");At(this,"animate",new Mg);At(this,"emitter",new Hp);At(this,"dimensions");At(this,"virtualScroll");At(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});At(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});At(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});At(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});At(this,"onPointerDown",r=>{r.button===1&&this.reset()});At(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(_=>{var g,m,p,M,S;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent"))||u==="vertical"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=_.hasAttribute)==null?void 0:p.call(_,"data-lenis-prevent-horizontal"))||i&&((M=_.hasAttribute)==null?void 0:M.call(_,"data-lenis-prevent-touch"))||s&&((S=_.hasAttribute)==null?void 0:S.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});At(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});At(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=tf,window.lenis||(window.lenis={}),window.lenis.version=tf,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=nf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:M,autoRaf:S,anchors:v,autoToggle:C,allowNestedScroll:w,naiveDimensions:R,stopInertiaOnNavigate:y,respectReducedMotion:x},this.dimensions=new yg(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Tg(e,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=r,d=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let _=null;if(typeof h=="string"?(_=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),_||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(_=h),_){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?v.left:v.top}const g=_.getBoundingClientRect(),m=getComputedStyle(_),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),M=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(S)?0:S)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=h-this.animatedScroll;_>this.limit/2?h-=this.limit:_<-this.limit/2&&(h+=this.limit)}}else h=kp(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=nf:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,f,h,d,_;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,_=r.clientHeight,a=f>d,l=h>_,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=h,i.clientWidth=d,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let m,p,M,S,v,C;if(g==="horizontal")m=Math.round(r.scrollLeft),p=f-d,M=t,S=s,v=a,C=c;else if(g==="vertical")m=Math.round(r.scrollTop),p=h-_,M=e,S=o,v=l,C=u;else return!1;return!C&&(m>=p||m<=0)?!0:(M>0?m<p:m>0)&&S&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?xg(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nh="170",wg=0,rf=1,Ag=2,Vp=1,Cg=2,Di=3,_r=0,Sn=1,Wn=2,zi=0,Ps=1,_i=2,sf=3,of=4,Rg=5,Dr=100,Pg=101,Dg=102,Lg=103,Ug=104,Ig=200,Ng=201,Fg=202,Og=203,Gc=204,Wc=205,Bg=206,zg=207,kg=208,Hg=209,Vg=210,Gg=211,Wg=212,Xg=213,Yg=214,Xc=0,Yc=1,qc=2,zs=3,$c=4,Kc=5,Zc=6,jc=7,Gp=0,qg=1,$g=2,ki=0,Wp=1,Xp=2,Yp=3,qp=4,Kg=5,$p=6,Kp=7,Zp=300,ks=301,Hs=302,Jc=303,Qc=304,Sl=306,tu=1e3,Fr=1001,eu=1002,hi=1003,Zg=1004,pa=1005,Si=1006,kl=1007,Or=1008,Xi=1009,jp=1010,Jp=1011,qo=1012,ih=1013,$r=1014,Fi=1015,Hi=1016,rh=1017,sh=1018,Vs=1020,Qp=35902,tm=1021,em=1022,ui=1023,nm=1024,im=1025,Ds=1026,Gs=1027,rm=1028,oh=1029,sm=1030,ah=1031,lh=1033,Ka=33776,Za=33777,ja=33778,Ja=33779,nu=35840,iu=35841,ru=35842,su=35843,ou=36196,au=37492,lu=37496,cu=37808,uu=37809,hu=37810,fu=37811,du=37812,pu=37813,mu=37814,_u=37815,gu=37816,vu=37817,xu=37818,Mu=37819,Su=37820,yu=37821,Qa=36492,Eu=36494,Tu=36495,om=36283,bu=36284,wu=36285,Au=36286,jg=3200,Jg=3201,Qg=0,t0=1,ir="",zn="srgb",qs="srgb-linear",yl="linear",ge="srgb",es=7680,af=519,e0=512,n0=513,i0=514,am=515,r0=516,s0=517,o0=518,a0=519,lf=35044,cf="300 es",Oi=2e3,fl=2001;class $s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uf=1234567;const Io=Math.PI/180,$o=180/Math.PI;function Ks(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[r&255]+en[r>>8&255]+en[r>>16&255]+en[r>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function xn(r,t,e){return Math.max(t,Math.min(e,r))}function ch(r,t){return(r%t+t)%t}function l0(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function c0(r,t,e){return r!==t?(e-r)/(t-r):0}function No(r,t,e){return(1-e)*r+e*t}function u0(r,t,e,n){return No(r,t,1-Math.exp(-e*n))}function h0(r,t=1){return t-Math.abs(ch(r,t*2)-t)}function f0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function d0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function p0(r,t){return r+Math.floor(Math.random()*(t-r+1))}function m0(r,t){return r+Math.random()*(t-r)}function _0(r){return r*(.5-Math.random())}function g0(r){r!==void 0&&(uf=r);let t=uf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function v0(r){return r*Io}function x0(r){return r*$o}function M0(r){return(r&r-1)===0&&r!==0}function S0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function y0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function E0(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),f=s((t-n)/2),h=o((t-n)/2),d=s((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*f,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const T0={DEG2RAD:Io,RAD2DEG:$o,generateUUID:Ks,clamp:xn,euclideanModulo:ch,mapLinear:l0,inverseLerp:c0,lerp:No,damp:u0,pingpong:h0,smoothstep:f0,smootherstep:d0,randInt:p0,randFloat:m0,randFloatSpread:_0,seededRandom:g0,degToRad:v0,radToDeg:x0,isPowerOfTwo:M0,ceilPowerOfTwo:S0,floorPowerOfTwo:y0,setQuaternionFromProperEuler:E0,normalize:pn,denormalize:gs};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,i,s,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],S=i[4],v=i[7],C=i[2],w=i[5],T=i[8];return s[0]=o*g+a*M+l*C,s[3]=o*m+a*S+l*w,s[6]=o*p+a*v+l*T,s[1]=c*g+u*M+f*C,s[4]=c*m+u*S+f*w,s[7]=c*p+u*v+f*T,s[2]=h*g+d*M+_*C,s[5]=h*m+d*S+_*w,s[8]=h*p+d*v+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=e*f+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(i*c-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=h*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hl.makeScale(t,e)),this}rotate(t){return this.premultiply(Hl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hl=new Zt;function lm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function dl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function b0(){const r=dl("canvas");return r.style.display="block",r}const hf={};function Mo(r){r in hf||(hf[r]=!0,console.warn(r))}function w0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function A0(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function C0(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const le={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(r.r=Ls(r.r),r.g=Ls(r.g),r.b=Ls(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?yl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Vi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ls(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ff=[.64,.33,.3,.6,.15,.06],df=[.2126,.7152,.0722],pf=[.3127,.329],mf=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_f=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[qs]:{primaries:ff,whitePoint:pf,transfer:yl,toXYZ:mf,fromXYZ:_f,luminanceCoefficients:df,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:ff,whitePoint:pf,transfer:ge,toXYZ:mf,fromXYZ:_f,luminanceCoefficients:df,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}});let ns;class R0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ns===void 0&&(ns=dl("canvas")),ns.width=t.width,ns.height=t.height;const n=ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Vi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vi(e[n]/255)*255):e[n]=Vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let P0=0;class cm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Ks(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Vl(i[o].image)):s.push(Vl(i[o]))}else s=Vl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Vl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?R0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D0=0;class Cn extends $s{constructor(t=Cn.DEFAULT_IMAGE,e=Cn.DEFAULT_MAPPING,n=Fr,i=Fr,s=Si,o=Or,a=ui,l=Xi,c=Cn.DEFAULT_ANISOTROPY,u=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Ks(),this.name="",this.source=new cm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tu:t.x=t.x-Math.floor(t.x);break;case Fr:t.x=t.x<0?0:1;break;case eu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tu:t.y=t.y-Math.floor(t.y);break;case Fr:t.y=t.y<0?0:1;break;case eu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Zp;Cn.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(d+1)/2,C=(p+1)/2,w=(u+h)/4,T=(f+g)/4,R=(_+m)/4;return S>v&&S>C?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=w/n,s=T/n):v>C?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=T/s,i=R/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(f-g)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L0 extends $s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends L0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class um extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hi,this.minFilter=hi,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class U0 extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hi,this.minFilter=hi,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let m=1-a;const p=l*h+c*d+u*_+f*g,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const C=Math.sqrt(S),w=Math.atan2(C,p*M);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const v=a*M;if(l=l*m+h*v,c=c*m+d*v,u=u*m+_*v,f=f*m+g*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+u*f+l*d-c*h,t[e+1]=l*_+u*h+c*f-a*d,t[e+2]=c*_+u*d+a*h-l*f,t[e+3]=u*_-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gl=new F,gf=new Zo;class jo{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ma.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(t.matrixWorld),this.union(ma)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ro),_a.subVectors(this.max,ro),is.subVectors(t.a,ro),rs.subVectors(t.b,ro),ss.subVectors(t.c,ro),Zi.subVectors(rs,is),ji.subVectors(ss,rs),Mr.subVectors(is,ss);let e=[0,-Zi.z,Zi.y,0,-ji.z,ji.y,0,-Mr.z,Mr.y,Zi.z,0,-Zi.x,ji.z,0,-ji.x,Mr.z,0,-Mr.x,-Zi.y,Zi.x,0,-ji.y,ji.x,0,-Mr.y,Mr.x,0];return!Wl(e,is,rs,ss,_a)||(e=[1,0,0,0,1,0,0,0,1],!Wl(e,is,rs,ss,_a))?!1:(ga.crossVectors(Zi,ji),e=[ga.x,ga.y,ga.z],Wl(e,is,rs,ss,_a))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bi=[new F,new F,new F,new F,new F,new F,new F,new F],si=new F,ma=new jo,is=new F,rs=new F,ss=new F,Zi=new F,ji=new F,Mr=new F,ro=new F,_a=new F,ga=new F,Sr=new F;function Wl(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Sr.fromArray(r,s);const a=i.x*Math.abs(Sr.x)+i.y*Math.abs(Sr.y)+i.z*Math.abs(Sr.z),l=t.dot(Sr),c=e.dot(Sr),u=n.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const I0=new jo,so=new F,Xl=new F;class Jo{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):I0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);const e=so.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(so,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(Xl)),this.expandByPoint(so.copy(t.center).sub(Xl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new F,Yl=new F,va=new F,Ji=new F,ql=new F,xa=new F,$l=new F;class uh{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Yl.copy(t).add(e).multiplyScalar(.5),va.copy(e).sub(t).normalize(),Ji.copy(this.origin).sub(Yl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(va),a=Ji.dot(this.direction),l=-Ji.dot(va),c=Ji.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Yl).addScaledVector(va,h),d}intersectSphere(t,e){wi.subVectors(t.center,this.origin);const n=wi.dot(this.direction),i=wi.dot(wi)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,n,i,s){ql.subVectors(e,t),xa.subVectors(n,t),$l.crossVectors(ql,xa);let o=this.direction.dot($l),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,t);const l=a*this.direction.dot(xa.crossVectors(Ji,xa));if(l<0)return null;const c=a*this.direction.dot(ql.cross(Ji));if(c<0||l+c>o)return null;const u=-a*Ji.dot($l);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,i,s,o,a,l,c,u,f,h,d,_,g,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,f,h,d,_,g,m)}set(t,e,n,i,s,o,a,l,c,u,f,h,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/os.setFromMatrixColumn(t,0).length(),s=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,_=a*u,g=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=h-g*c,e[9]=-a*l,e[2]=g-h*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;e[0]=h+g*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=g+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;e[0]=h-g*a,e[4]=-o*f,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=g-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,_=a*u,g=a*f;e[0]=l*u,e[4]=_*c-d,e[8]=h*c+g,e[1]=l*f,e[5]=g*c+h,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-h*f,e[8]=_*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+_,e[10]=h-g*f}else if(t.order==="XZY"){const h=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+g,e[5]=o*u,e[9]=d*f-_,e[2]=_*f-d,e[6]=a*u,e[10]=g*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(N0,t,F0)}lookAt(t,e,n){const i=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Qi.crossVectors(n,Un),Qi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Qi.crossVectors(n,Un)),Qi.normalize(),Ma.crossVectors(Un,Qi),i[0]=Qi.x,i[4]=Ma.x,i[8]=Un.x,i[1]=Qi.y,i[5]=Ma.y,i[9]=Un.y,i[2]=Qi.z,i[6]=Ma.z,i[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],S=n[7],v=n[11],C=n[15],w=i[0],T=i[4],R=i[8],y=i[12],x=i[1],P=i[5],N=i[9],z=i[13],X=i[2],$=i[6],Y=i[10],W=i[14],H=i[3],et=i[7],D=i[11],ut=i[15];return s[0]=o*w+a*x+l*X+c*H,s[4]=o*T+a*P+l*$+c*et,s[8]=o*R+a*N+l*Y+c*D,s[12]=o*y+a*z+l*W+c*ut,s[1]=u*w+f*x+h*X+d*H,s[5]=u*T+f*P+h*$+d*et,s[9]=u*R+f*N+h*Y+d*D,s[13]=u*y+f*z+h*W+d*ut,s[2]=_*w+g*x+m*X+p*H,s[6]=_*T+g*P+m*$+p*et,s[10]=_*R+g*N+m*Y+p*D,s[14]=_*y+g*z+m*W+p*ut,s[3]=M*w+S*x+v*X+C*H,s[7]=M*T+S*P+v*$+C*et,s[11]=M*R+S*N+v*Y+C*D,s[15]=M*y+S*z+v*W+C*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+g*(+e*l*d-e*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+m*(+e*c*f-e*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-e*l*f+e*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],M=f*m*c-g*h*c+g*l*d-a*m*d-f*l*p+a*h*p,S=_*h*c-u*m*c-_*l*d+o*m*d+u*l*p-o*h*p,v=u*g*c-_*f*c+_*a*d-o*g*d-u*a*p+o*f*p,C=_*f*l-u*g*l-_*a*h+o*g*h+u*a*m-o*f*m,w=e*M+n*S+i*v+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=M*T,t[1]=(g*h*s-f*m*s-g*i*d+n*m*d+f*i*p-n*h*p)*T,t[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*T,t[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*T,t[4]=S*T,t[5]=(u*m*s-_*h*s+_*i*d-e*m*d-u*i*p+e*h*p)*T,t[6]=(_*l*s-o*m*s-_*i*c+e*m*c+o*i*p-e*l*p)*T,t[7]=(o*h*s-u*l*s+u*i*c-e*h*c-o*i*d+e*l*d)*T,t[8]=v*T,t[9]=(_*f*s-u*g*s-_*n*d+e*g*d+u*n*p-e*f*p)*T,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*p+e*a*p)*T,t[11]=(u*a*s-o*f*s-u*n*c+e*f*c+o*n*d-e*a*d)*T,t[12]=C*T,t[13]=(u*g*i-_*f*i+_*n*h-e*g*h-u*n*m+e*f*m)*T,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*T,t[15]=(o*f*i-u*a*i+u*n*l-e*f*l-o*n*h+e*a*h)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,g=o*u,m=o*f,p=a*f,M=l*c,S=l*u,v=l*f,C=n.x,w=n.y,T=n.z;return i[0]=(1-(g+p))*C,i[1]=(d+v)*C,i[2]=(_-S)*C,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(h+p))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(_+S)*T,i[9]=(m-M)*T,i[10]=(1-(h+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=os.set(i[0],i[1],i[2]).length();const o=os.set(i[4],i[5],i[6]).length(),a=os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],oi.copy(this);const c=1/s,u=1/o,f=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,e.setFromRotationMatrix(oi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Oi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),h=(n+i)/(n-i);let d,_;if(a===Oi)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===fl)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Oi){const l=this.elements,c=1/(e-t),u=1/(n-i),f=1/(o-s),h=(e+t)*c,d=(n+i)*u;let _,g;if(a===Oi)_=(o+s)*f,g=-2*f;else if(a===fl)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const os=new F,oi=new Ae,N0=new F(0,0,0),F0=new F(1,1,1),Qi=new F,Ma=new F,Un=new F,vf=new Ae,xf=new Zo;class Yi{constructor(t=0,e=0,n=0,i=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xf.setFromEuler(this),this.setFromQuaternion(xf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class hm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let O0=0;const Mf=new F,as=new Zo,Ai=new Ae,Sa=new F,oo=new F,B0=new F,z0=new Zo,Sf=new F(1,0,0),yf=new F(0,1,0),Ef=new F(0,0,1),Tf={type:"added"},k0={type:"removed"},ls={type:"childadded",child:null},Kl={type:"childremoved",child:null};class un extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const t=new F,e=new Yi,n=new Zo,i=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Zt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Sf,t)}rotateY(t){return this.rotateOnAxis(yf,t)}rotateZ(t){return this.rotateOnAxis(Ef,t)}translateOnAxis(t,e){return Mf.copy(t).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sf,t)}translateY(t){return this.translateOnAxis(yf,t)}translateZ(t){return this.translateOnAxis(Ef,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sa.copy(t):Sa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(oo,Sa,this.up):Ai.lookAt(Sa,oo,this.up),this.quaternion.setFromRotationMatrix(Ai),i&&(Ai.extractRotation(i.matrixWorld),as.setFromRotationMatrix(Ai),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tf),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(k0),Kl.child=t,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tf),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,t,B0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,z0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}un.DEFAULT_UP=new F(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new F,Ci=new F,Zl=new F,Ri=new F,cs=new F,us=new F,bf=new F,jl=new F,Jl=new F,Ql=new F,tc=new ve,ec=new ve,nc=new ve;class ci{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ai.subVectors(t,e),i.cross(ai);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ai.subVectors(i,e),Ci.subVectors(n,e),Zl.subVectors(t,e);const o=ai.dot(ai),a=ai.dot(Ci),l=ai.dot(Zl),c=Ci.dot(Ci),u=Ci.dot(Zl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return tc.setScalar(0),ec.setScalar(0),nc.setScalar(0),tc.fromBufferAttribute(t,e),ec.fromBufferAttribute(t,n),nc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(tc,s.x),o.addScaledVector(ec,s.y),o.addScaledVector(nc,s.z),o}static isFrontFacing(t,e,n,i){return ai.subVectors(n,e),Ci.subVectors(t,e),ai.cross(Ci).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ai.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ci.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ci.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;cs.subVectors(i,n),us.subVectors(s,n),jl.subVectors(t,n);const l=cs.dot(jl),c=us.dot(jl);if(l<=0&&c<=0)return e.copy(n);Jl.subVectors(t,i);const u=cs.dot(Jl),f=us.dot(Jl);if(u>=0&&f<=u)return e.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(cs,o);Ql.subVectors(t,s);const d=cs.dot(Ql),_=us.dot(Ql);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(us,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return bf.subVectors(s,i),a=(f-u)/(f-u+(d-_)),e.copy(i).addScaledVector(bf,a);const p=1/(m+g+h);return o=g*p,a=h*p,e.copy(n).addScaledVector(cs,o).addScaledVector(us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},ya={h:0,s:0,l:0};function ic(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=ch(t,1),e=xn(e,0,1),n=xn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ic(o,s,t+1/3),this.g=ic(o,s,t),this.b=ic(o,s,t-1/3)}return le.toWorkingColorSpace(this,i),this}setStyle(t,e=zn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=zn){const n=fm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zn){return le.fromWorkingColorSpace(nn.copy(this),t),Math.round(xn(nn.r*255,0,255))*65536+Math.round(xn(nn.g*255,0,255))*256+Math.round(xn(nn.b*255,0,255))}getHexString(t=zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,s=nn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=zn){le.fromWorkingColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,i=nn.b;return t!==zn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(tr),this.setHSL(tr.h+t,tr.s+e,tr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(tr),t.getHSL(ya);const n=No(tr.h,ya.h,e),i=No(tr.s,ya.s,e),s=No(tr.l,ya.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Xt;Xt.NAMES=fm;let H0=0;class Zs extends $s{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Ks(),this.name="",this.blending=Ps,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==_r&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==Wc&&(n.blendDst=this.blendDst),this.blendEquation!==Dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==af&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class El extends Zs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new F,Ea=new Nt;class Rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lf,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ea.fromBufferAttribute(this,e),Ea.applyMatrix3(t),this.setXY(e,Ea.x,Ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),i=pn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),i=pn(i,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lf&&(t.usage=this.usage),t}}class dm extends Rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pm extends Rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ne extends Rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let V0=0;const jn=new Ae,rc=new un,hs=new F,In=new jo,ao=new jo,qe=new F;class tn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lm(t)?pm:dm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,n){return jn.makeTranslation(t,e,n),this.applyMatrix4(jn),this}scale(t,e,n){return jn.makeScale(t,e,n),this.applyMatrix4(jn),this}lookAt(t){return rc.lookAt(t),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ne(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];In.setFromBufferAttribute(s),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ao.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(In.min,ao.min),In.expandByPoint(qe),qe.addVectors(In.max,ao.max),In.expandByPoint(qe)):(In.expandByPoint(ao.min),In.expandByPoint(ao.max))}In.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)qe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(qe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qe.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(t,c),qe.add(hs)),i=Math.max(i,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new F,l[R]=new F;const c=new F,u=new F,f=new F,h=new Nt,d=new Nt,_=new Nt,g=new F,m=new F;function p(R,y,x){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),f.fromBufferAttribute(n,x),h.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),_.fromBufferAttribute(s,x),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(P),a[R].add(g),a[y].add(g),a[x].add(g),l[R].add(m),l[y].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,y=M.length;R<y;++R){const x=M[R],P=x.start,N=x.count;for(let z=P,X=P+N;z<X;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const S=new F,v=new F,C=new F,w=new F;function T(R){C.fromBufferAttribute(i,R),w.copy(C);const y=a[R];S.copy(y),S.sub(C.multiplyScalar(C.dot(y))).normalize(),v.crossVectors(w,y);const P=v.dot(l[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,P)}for(let R=0,y=M.length;R<y;++R){const x=M[R],P=x.start,N=x.count;for(let z=P,X=P+N;z<X;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(t)for(let h=0,d=t.count;h<d;h+=3){const _=t.getX(h+0),g=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new Rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new tn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wf=new Ae,yr=new uh,Ta=new Jo,Af=new F,ba=new F,wa=new F,Aa=new F,sc=new F,Ca=new F,Cf=new F,Ra=new F;class Ze extends un{constructor(t=new tn,e=new El){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ca.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(sc.fromBufferAttribute(f,t),o?Ca.addScaledVector(sc,u):Ca.addScaledVector(sc.sub(e),u))}e.add(Ca)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),yr.copy(t.ray).recast(t.near),!(Ta.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Ta,Af)===null||yr.origin.distanceToSquared(Af)>(t.far-t.near)**2))&&(wf.copy(s).invert(),yr.copy(t.ray).applyMatrix4(wf),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,C=S;v<C;v+=3){const w=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);i=Pa(this,p,t,n,c,u,f,w,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);i=Pa(this,o,t,n,c,u,f,M,S,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,C=S;v<C;v+=3){const w=v,T=v+1,R=v+2;i=Pa(this,p,t,n,c,u,f,w,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=m,S=m+1,v=m+2;i=Pa(this,o,t,n,c,u,f,M,S,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function G0(r,t,e,n,i,s,o,a){let l;if(t.side===Sn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===_r,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ra);return c<e.near||c>e.far?null:{distance:c,point:Ra.clone(),object:r}}function Pa(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,ba),r.getVertexPosition(l,wa),r.getVertexPosition(c,Aa);const u=G0(r,t,e,n,ba,wa,Aa,Cf);if(u){const f=new F;ci.getBarycoord(Cf,ba,wa,Aa,f),i&&(u.uv=ci.getInterpolatedAttribute(i,a,l,c,f,new Nt)),s&&(u.uv1=ci.getInterpolatedAttribute(s,a,l,c,f,new Nt)),o&&(u.normal=ci.getInterpolatedAttribute(o,a,l,c,f,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};ci.getNormal(ba,wa,Aa,h.normal),u.face=h,u.barycoord=f}return u}class Qo extends tn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(u,3)),this.setAttribute("uv",new Ne(f,2));function _(g,m,p,M,S,v,C,w,T,R,y){const x=v/T,P=C/R,N=v/2,z=C/2,X=w/2,$=T+1,Y=R+1;let W=0,H=0;const et=new F;for(let D=0;D<Y;D++){const ut=D*P-z;for(let Ut=0;Ut<$;Ut++){const Jt=Ut*x-N;et[g]=Jt*M,et[m]=ut*S,et[p]=X,c.push(et.x,et.y,et.z),et[g]=0,et[m]=0,et[p]=w>0?1:-1,u.push(et.x,et.y,et.z),f.push(Ut/T),f.push(1-D/R),W+=1}}for(let D=0;D<R;D++)for(let ut=0;ut<T;ut++){const Ut=h+ut+$*D,Jt=h+ut+$*(D+1),K=h+(ut+1)+$*(D+1),tt=h+(ut+1)+$*D;l.push(Ut,Jt,tt),l.push(Jt,K,tt),H+=6}a.addGroup(d,H,y),d+=H,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ws(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function mn(r){const t={};for(let e=0;e<r.length;e++){const n=Ws(r[e]);for(const i in n)t[i]=n[i]}return t}function W0(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function mm(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Xs={clone:Ws,merge:mn};var X0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Zs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=W0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _m extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const er=new F,Rf=new Nt,Pf=new Nt;class Hn extends _m{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$o*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(er.x,er.y).multiplyScalar(-t/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(er.x,er.y).multiplyScalar(-t/er.z)}getViewSize(t,e){return this.getViewBounds(t,Rf,Pf),e.subVectors(Pf,Rf)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Io*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fs=-90,ds=1;class q0 extends un{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Hn(fs,ds,t,e);i.layers=this.layers,this.add(i);const s=new Hn(fs,ds,t,e);s.layers=this.layers,this.add(s);const o=new Hn(fs,ds,t,e);o.layers=this.layers,this.add(o);const a=new Hn(fs,ds,t,e);a.layers=this.layers,this.add(a);const l=new Hn(fs,ds,t,e);l.layers=this.layers,this.add(l);const c=new Hn(fs,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class gm extends Cn{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $0 extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new gm(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qo(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:zi});s.uniforms.tEquirect.value=e;const o=new Ze(i,s),a=e.minFilter;return e.minFilter===Or&&(e.minFilter=Si),new q0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const oc=new F,K0=new F,Z0=new Zt;class Rr{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=oc.subVectors(n,e).cross(K0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Z0.getNormalMatrix(t),i=this.coplanarPoint(oc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Jo,Da=new F;class hh{constructor(t=new Rr,e=new Rr,n=new Rr,i=new Rr,s=new Rr,o=new Rr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Oi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],M=i[13],S=i[14],v=i[15];if(n[0].setComponents(l-s,h-c,m-d,v-p).normalize(),n[1].setComponents(l+s,h+c,m+d,v+p).normalize(),n[2].setComponents(l+o,h+u,m+_,v+M).normalize(),n[3].setComponents(l-o,h-u,m-_,v-M).normalize(),n[4].setComponents(l-a,h-f,m-g,v-S).normalize(),e===Oi)n[5].setComponents(l+a,h+f,m+g,v+S).normalize();else if(e===fl)n[5].setComponents(a,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(t){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(t.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Da.x=i.normal.x>0?t.max.x:t.min.x,Da.y=i.normal.y>0?t.max.y:t.min.y,Da.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vm(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function j0(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class ta extends tn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=t/a,h=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*h-o;for(let S=0;S<c;S++){const v=S*f-s;_.push(v,-M,0),g.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const S=M+c*p,v=M+c*(p+1),C=M+1+c*(p+1),w=M+1+c*p;d.push(S,v,w),d.push(v,C,w)}this.setIndex(d),this.setAttribute("position",new Ne(_,3)),this.setAttribute("normal",new Ne(g,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ta(t.width,t.height,t.widthSegments,t.heightSegments)}}var J0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q0=`#ifdef USE_ALPHAHASH
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
#endif`,tv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ev=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rv=`#ifdef USE_AOMAP
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
#endif`,sv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ov=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,av=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hv=`#ifdef USE_IRIDESCENCE
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
#endif`,fv=`#ifdef USE_BUMPMAP
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
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sv=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,yv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ev=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zv=`#ifdef USE_GRADIENTMAP
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
}`,kv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gv=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Wv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Zv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jv=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ex=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ax=`#if defined( USE_POINTS_UV )
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
#endif`,lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
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
#endif`,px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_x=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mx=`#ifdef USE_NORMALMAP
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
#endif`,Sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Fx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,Hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xx=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`#include <common>
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
}`,rM=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sM=`#define DISTANCE
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
}`,oM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`uniform float scale;
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
}`,uM=`uniform vec3 diffuse;
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
}`,hM=`#include <common>
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
}`,fM=`uniform vec3 diffuse;
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
}`,dM=`#define LAMBERT
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
}`,pM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,mM=`#define MATCAP
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
}`,_M=`#define MATCAP
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
}`,gM=`#define NORMAL
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
}`,vM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xM=`#define PHONG
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
}`,MM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,SM=`#define STANDARD
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
}`,yM=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,EM=`#define TOON
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
}`,TM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,bM=`uniform float size;
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
}`,wM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,CM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,RM=`uniform float rotation;
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
}`,PM=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:J0,alphahash_pars_fragment:Q0,alphamap_fragment:tv,alphamap_pars_fragment:ev,alphatest_fragment:nv,alphatest_pars_fragment:iv,aomap_fragment:rv,aomap_pars_fragment:sv,batching_pars_vertex:ov,batching_vertex:av,begin_vertex:lv,beginnormal_vertex:cv,bsdfs:uv,iridescence_fragment:hv,bumpmap_pars_fragment:fv,clipping_planes_fragment:dv,clipping_planes_pars_fragment:pv,clipping_planes_pars_vertex:mv,clipping_planes_vertex:_v,color_fragment:gv,color_pars_fragment:vv,color_pars_vertex:xv,color_vertex:Mv,common:Sv,cube_uv_reflection_fragment:yv,defaultnormal_vertex:Ev,displacementmap_pars_vertex:Tv,displacementmap_vertex:bv,emissivemap_fragment:wv,emissivemap_pars_fragment:Av,colorspace_fragment:Cv,colorspace_pars_fragment:Rv,envmap_fragment:Pv,envmap_common_pars_fragment:Dv,envmap_pars_fragment:Lv,envmap_pars_vertex:Uv,envmap_physical_pars_fragment:Wv,envmap_vertex:Iv,fog_vertex:Nv,fog_pars_vertex:Fv,fog_fragment:Ov,fog_pars_fragment:Bv,gradientmap_pars_fragment:zv,lightmap_pars_fragment:kv,lights_lambert_fragment:Hv,lights_lambert_pars_fragment:Vv,lights_pars_begin:Gv,lights_toon_fragment:Xv,lights_toon_pars_fragment:Yv,lights_phong_fragment:qv,lights_phong_pars_fragment:$v,lights_physical_fragment:Kv,lights_physical_pars_fragment:Zv,lights_fragment_begin:jv,lights_fragment_maps:Jv,lights_fragment_end:Qv,logdepthbuf_fragment:tx,logdepthbuf_pars_fragment:ex,logdepthbuf_pars_vertex:nx,logdepthbuf_vertex:ix,map_fragment:rx,map_pars_fragment:sx,map_particle_fragment:ox,map_particle_pars_fragment:ax,metalnessmap_fragment:lx,metalnessmap_pars_fragment:cx,morphinstance_vertex:ux,morphcolor_vertex:hx,morphnormal_vertex:fx,morphtarget_pars_vertex:dx,morphtarget_vertex:px,normal_fragment_begin:mx,normal_fragment_maps:_x,normal_pars_fragment:gx,normal_pars_vertex:vx,normal_vertex:xx,normalmap_pars_fragment:Mx,clearcoat_normal_fragment_begin:Sx,clearcoat_normal_fragment_maps:yx,clearcoat_pars_fragment:Ex,iridescence_pars_fragment:Tx,opaque_fragment:bx,packing:wx,premultiplied_alpha_fragment:Ax,project_vertex:Cx,dithering_fragment:Rx,dithering_pars_fragment:Px,roughnessmap_fragment:Dx,roughnessmap_pars_fragment:Lx,shadowmap_pars_fragment:Ux,shadowmap_pars_vertex:Ix,shadowmap_vertex:Nx,shadowmask_pars_fragment:Fx,skinbase_vertex:Ox,skinning_pars_vertex:Bx,skinning_vertex:zx,skinnormal_vertex:kx,specularmap_fragment:Hx,specularmap_pars_fragment:Vx,tonemapping_fragment:Gx,tonemapping_pars_fragment:Wx,transmission_fragment:Xx,transmission_pars_fragment:Yx,uv_pars_fragment:qx,uv_pars_vertex:$x,uv_vertex:Kx,worldpos_vertex:Zx,background_vert:jx,background_frag:Jx,backgroundCube_vert:Qx,backgroundCube_frag:tM,cube_vert:eM,cube_frag:nM,depth_vert:iM,depth_frag:rM,distanceRGBA_vert:sM,distanceRGBA_frag:oM,equirect_vert:aM,equirect_frag:lM,linedashed_vert:cM,linedashed_frag:uM,meshbasic_vert:hM,meshbasic_frag:fM,meshlambert_vert:dM,meshlambert_frag:pM,meshmatcap_vert:mM,meshmatcap_frag:_M,meshnormal_vert:gM,meshnormal_frag:vM,meshphong_vert:xM,meshphong_frag:MM,meshphysical_vert:SM,meshphysical_frag:yM,meshtoon_vert:EM,meshtoon_frag:TM,points_vert:bM,points_frag:wM,shadow_vert:AM,shadow_frag:CM,sprite_vert:RM,sprite_frag:PM},_t={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},gi={basic:{uniforms:mn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:mn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:mn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:mn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:mn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:mn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:mn([_t.points,_t.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:mn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:mn([_t.common,_t.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:mn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:mn([_t.sprite,_t.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:mn([_t.common,_t.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:mn([_t.lights,_t.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};gi.physical={uniforms:mn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const La={r:0,b:0,g:0},Tr=new Yi,DM=new Ae;function LM(r,t,e,n,i,s,o){const a=new Xt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function g(M){let S=!1;const v=_(M);v===null?p(a,l):v&&v.isColor&&(p(v,1),S=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,S){const v=_(S);v&&(v.isCubeTexture||v.mapping===Sl)?(u===void 0&&(u=new Ze(new Qo(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Ws(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Tr.copy(S.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(DM.makeRotationFromEuler(Tr)),u.material.toneMapped=le.getTransfer(v.colorSpace)!==ge,(f!==v||h!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ze(new ta(2,2),new ln({name:"BackgroundMaterial",uniforms:Ws(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,d=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,S){M.getRGB(La,mm(r)),n.buffers.color.setClear(La.r,La.g,La.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:g,addToRenderList:m}}function UM(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(x,P,N,z,X){let $=!1;const Y=f(z,N,P);s!==Y&&(s=Y,c(s.object)),$=d(x,z,N,X),$&&_(x,z,N,X),X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(x,P,N,z),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function f(x,P,N){const z=N.wireframe===!0;let X=n[x.id];X===void 0&&(X={},n[x.id]=X);let $=X[P.id];$===void 0&&($={},X[P.id]=$);let Y=$[z];return Y===void 0&&(Y=h(l()),$[z]=Y),Y}function h(x){const P=[],N=[],z=[];for(let X=0;X<e;X++)P[X]=0,N[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:z,object:x,attributes:{},index:null}}function d(x,P,N,z){const X=s.attributes,$=P.attributes;let Y=0;const W=N.getAttributes();for(const H in W)if(W[H].location>=0){const D=X[H];let ut=$[H];if(ut===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor)),D===void 0||D.attribute!==ut||ut&&D.data!==ut.data)return!0;Y++}return s.attributesNum!==Y||s.index!==z}function _(x,P,N,z){const X={},$=P.attributes;let Y=0;const W=N.getAttributes();for(const H in W)if(W[H].location>=0){let D=$[H];D===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(D=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(D=x.instanceColor));const ut={};ut.attribute=D,D&&D.data&&(ut.data=D.data),X[H]=ut,Y++}s.attributes=X,s.attributesNum=Y,s.index=z}function g(){const x=s.newAttributes;for(let P=0,N=x.length;P<N;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const N=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;N[x]=1,z[x]===0&&(r.enableVertexAttribArray(x),z[x]=1),X[x]!==P&&(r.vertexAttribDivisor(x,P),X[x]=P)}function M(){const x=s.newAttributes,P=s.enabledAttributes;for(let N=0,z=P.length;N<z;N++)P[N]!==x[N]&&(r.disableVertexAttribArray(N),P[N]=0)}function S(x,P,N,z,X,$,Y){Y===!0?r.vertexAttribIPointer(x,P,N,X,$):r.vertexAttribPointer(x,P,N,z,X,$)}function v(x,P,N,z){g();const X=z.attributes,$=N.getAttributes(),Y=P.defaultAttributeValues;for(const W in $){const H=$[W];if(H.location>=0){let et=X[W];if(et===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),et!==void 0){const D=et.normalized,ut=et.itemSize,Ut=t.get(et);if(Ut===void 0)continue;const Jt=Ut.buffer,K=Ut.type,tt=Ut.bytesPerElement,gt=K===r.INT||K===r.UNSIGNED_INT||et.gpuType===ih;if(et.isInterleavedBufferAttribute){const nt=et.data,Et=nt.stride,Ct=et.offset;if(nt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<H.locationSize;Vt++)p(H.location+Vt,nt.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Vt=0;Vt<H.locationSize;Vt++)m(H.location+Vt);r.bindBuffer(r.ARRAY_BUFFER,Jt);for(let Vt=0;Vt<H.locationSize;Vt++)S(H.location+Vt,ut/H.locationSize,K,D,Et*tt,(Ct+ut/H.locationSize*Vt)*tt,gt)}else{if(et.isInstancedBufferAttribute){for(let nt=0;nt<H.locationSize;nt++)p(H.location+nt,et.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let nt=0;nt<H.locationSize;nt++)m(H.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Jt);for(let nt=0;nt<H.locationSize;nt++)S(H.location+nt,ut/H.locationSize,K,D,ut*tt,ut/H.locationSize*nt*tt,gt)}}else if(Y!==void 0){const D=Y[W];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(H.location,D);break;case 3:r.vertexAttrib3fv(H.location,D);break;case 4:r.vertexAttrib4fv(H.location,D);break;default:r.vertexAttrib1fv(H.location,D)}}}}M()}function C(){R();for(const x in n){const P=n[x];for(const N in P){const z=P[N];for(const X in z)u(z[X].object),delete z[X];delete P[N]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const N in P){const z=P[N];for(const X in z)u(z[X].object),delete z[X];delete P[N]}delete n[x.id]}function T(x){for(const P in n){const N=n[P];if(N[x.id]===void 0)continue;const z=N[x.id];for(const X in z)u(z[X].object),delete z[X];delete N[x.id]}}function R(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function IM(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*h[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function NM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==ui&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Xi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fi&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:C,maxSamples:w}}function FM(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Rr,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,S=M*4;let v=p.clippingState||null;l.value=v,v=u(_,h,S,d);for(let C=0;C!==S;++C)v[C]=e[C];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==g;++S,v+=4)o.copy(f[S]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function OM(r){let t=new WeakMap;function e(o,a){return a===Jc?o.mapping=ks:a===Qc&&(o.mapping=Hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jc||a===Qc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $0(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class xm extends _m{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ss=4,Df=[.125,.215,.35,.446,.526,.582],Lr=20,ac=new xm,Lf=new Xt;let lc=null,cc=0,uc=0,hc=!1;const Pr=(1+Math.sqrt(5))/2,ps=1/Pr,Uf=[new F(-Pr,ps,0),new F(Pr,ps,0),new F(-ps,0,Pr),new F(ps,0,Pr),new F(0,Pr,-ps),new F(0,Pr,ps),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class If{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lc,cc,uc),this._renderer.xr.enabled=hc,t.scissorTest=!1,Ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Hi,format:ui,colorSpace:qs,depthBuffer:!1},i=Nf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BM(s)),this._blurMaterial=zM(s,t,e)}return i}_compileMaterial(t){const e=new Ze(this._lodPlanes[0],t);this._renderer.compile(e,ac)}_sceneToCubeUV(t,e,n,i){const a=new Hn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Lf),u.toneMapping=ki,u.autoClear=!1;const d=new El({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new Ze(new Qo,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(Lf),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Ua(i,M*S,p>2?S:0,S,S),u.setRenderTarget(i),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ks||t.mapping===Hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Of()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ff());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ua(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ac)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Uf[(i-s-1)%Uf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ze(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Lr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Lr;m>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);const p=[];let M=0;for(let T=0;T<Lr;++T){const R=T/g,y=Math.exp(-R*R/2);p.push(y),T===0?M+=y:T<m&&(M+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=_,h.mipInt.value=S-n;const v=this._sizeLods[i],C=3*v*(i>S-Ss?i-S+Ss:0),w=4*(this._cubeSize-v);Ua(e,C,w,3*v,2*v),l.setRenderTarget(e),l.render(f,ac)}}function BM(r){const t=[],e=[],n=[];let i=r;const s=r-Ss+1+Df.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ss?l=Df[o-r+Ss-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*d),S=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,R=w>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];M.set(y,g*_*w),S.set(h,m*_*w);const x=[w,w,w,w,w,w];v.set(x,p*_*w)}const C=new tn;C.setAttribute("position",new Rn(M,g)),C.setAttribute("uv",new Rn(S,m)),C.setAttribute("faceIndex",new Rn(v,p)),t.push(C),i>Ss&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nf(r,t,e){const n=new fi(r,t,e);return n.texture.mapping=Sl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ua(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function zM(r,t,e){const n=new Float32Array(Lr),i=new F(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Ff(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Of(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function fh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kM(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jc||l===Qc,u=l===ks||l===Hs;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new If(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new If(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function HM(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Mo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function VM(r,t,e,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)t.update(h[_],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let S=0,v=M.length;S<v;S+=3){const C=M[S+0],w=M[S+1],T=M[S+2];h.push(C,w,w,T,T,C)}}else if(_!==void 0){const M=_.array;g=_.version;for(let S=0,v=M.length/3-1;S<v;S+=3){const C=S+0,w=S+1,T=S+2;h.push(C,w,w,T,T,C)}}else return;const m=new(lm(h)?pm:dm)(h,1);m.version=g;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function GM(r,t,e){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),e.update(d,n,1)}function c(h,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,h*o,_),e.update(d,n,_))}function u(h,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,n,1)}function f(h,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=d[M]*g[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function WM(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function XM(r,t,e){const n=new WeakMap,i=new ve;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let x=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,w=1;C>t.maxTextureSize&&(w=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const T=new Float32Array(C*w*4*f),R=new um(T,C,w,f);R.type=Fi,R.needsUpdate=!0;const y=v*4;for(let P=0;P<f;P++){const N=p[P],z=M[P],X=S[P],$=C*w*4*P;for(let Y=0;Y<N.count;Y++){const W=Y*y;_===!0&&(i.fromBufferAttribute(N,Y),T[$+W+0]=i.x,T[$+W+1]=i.y,T[$+W+2]=i.z,T[$+W+3]=0),g===!0&&(i.fromBufferAttribute(z,Y),T[$+W+4]=i.x,T[$+W+5]=i.y,T[$+W+6]=i.z,T[$+W+7]=0),m===!0&&(i.fromBufferAttribute(X,Y),T[$+W+8]=i.x,T[$+W+9]=i.y,T[$+W+10]=i.z,T[$+W+11]=X.itemSize===4?i.w:1)}}h={count:f,texture:R,size:new Nt(C,w)},n.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function YM(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Mm extends Cn{constructor(t,e,n,i,s,o,a,l,c,u=Ds){if(u!==Ds&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ds&&(n=$r),n===void 0&&u===Gs&&(n=Vs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hi,this.minFilter=l!==void 0?l:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sm=new Cn,Bf=new Mm(1,1),ym=new um,Em=new U0,Tm=new gm,zf=[],kf=[],Hf=new Float32Array(16),Vf=new Float32Array(9),Gf=new Float32Array(4);function js(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=zf[i];if(s===void 0&&(s=new Float32Array(i),zf[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Xe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ye(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Tl(r,t){let e=kf[t];e===void 0&&(e=new Int32Array(t),kf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function qM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function $M(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;r.uniform2fv(this.addr,t),Ye(e,t)}}function KM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;r.uniform3fv(this.addr,t),Ye(e,t)}}function ZM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;r.uniform4fv(this.addr,t),Ye(e,t)}}function jM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,n))return;Gf.set(n),r.uniformMatrix2fv(this.addr,!1,Gf),Ye(e,n)}}function JM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,n))return;Vf.set(n),r.uniformMatrix3fv(this.addr,!1,Vf),Ye(e,n)}}function QM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,n))return;Hf.set(n),r.uniformMatrix4fv(this.addr,!1,Hf),Ye(e,n)}}function tS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function eS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;r.uniform2iv(this.addr,t),Ye(e,t)}}function nS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;r.uniform3iv(this.addr,t),Ye(e,t)}}function iS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;r.uniform4iv(this.addr,t),Ye(e,t)}}function rS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function sS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;r.uniform2uiv(this.addr,t),Ye(e,t)}}function oS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;r.uniform3uiv(this.addr,t),Ye(e,t)}}function aS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;r.uniform4uiv(this.addr,t),Ye(e,t)}}function lS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Bf.compareFunction=am,s=Bf):s=Sm,e.setTexture2D(t||s,i)}function cS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Em,i)}function uS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Tm,i)}function hS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ym,i)}function fS(r){switch(r){case 5126:return qM;case 35664:return $M;case 35665:return KM;case 35666:return ZM;case 35674:return jM;case 35675:return JM;case 35676:return QM;case 5124:case 35670:return tS;case 35667:case 35671:return eS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return rS;case 36294:return sS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return hS}}function dS(r,t){r.uniform1fv(this.addr,t)}function pS(r,t){const e=js(t,this.size,2);r.uniform2fv(this.addr,e)}function mS(r,t){const e=js(t,this.size,3);r.uniform3fv(this.addr,e)}function _S(r,t){const e=js(t,this.size,4);r.uniform4fv(this.addr,e)}function gS(r,t){const e=js(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function vS(r,t){const e=js(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function xS(r,t){const e=js(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function MS(r,t){r.uniform1iv(this.addr,t)}function SS(r,t){r.uniform2iv(this.addr,t)}function yS(r,t){r.uniform3iv(this.addr,t)}function ES(r,t){r.uniform4iv(this.addr,t)}function TS(r,t){r.uniform1uiv(this.addr,t)}function bS(r,t){r.uniform2uiv(this.addr,t)}function wS(r,t){r.uniform3uiv(this.addr,t)}function AS(r,t){r.uniform4uiv(this.addr,t)}function CS(r,t,e){const n=this.cache,i=t.length,s=Tl(e,i);Xe(n,s)||(r.uniform1iv(this.addr,s),Ye(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Sm,s[o])}function RS(r,t,e){const n=this.cache,i=t.length,s=Tl(e,i);Xe(n,s)||(r.uniform1iv(this.addr,s),Ye(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Em,s[o])}function PS(r,t,e){const n=this.cache,i=t.length,s=Tl(e,i);Xe(n,s)||(r.uniform1iv(this.addr,s),Ye(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Tm,s[o])}function DS(r,t,e){const n=this.cache,i=t.length,s=Tl(e,i);Xe(n,s)||(r.uniform1iv(this.addr,s),Ye(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ym,s[o])}function LS(r){switch(r){case 5126:return dS;case 35664:return pS;case 35665:return mS;case 35666:return _S;case 35674:return gS;case 35675:return vS;case 35676:return xS;case 5124:case 35670:return MS;case 35667:case 35671:return SS;case 35668:case 35672:return yS;case 35669:case 35673:return ES;case 5125:return TS;case 36294:return bS;case 36295:return wS;case 36296:return AS;case 35678:case 36198:case 36298:case 36306:case 35682:return CS;case 35679:case 36299:case 36307:return RS;case 35680:case 36300:case 36308:case 36293:return PS;case 36289:case 36303:case 36311:case 36292:return DS}}class US{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fS(e.type)}}class IS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=LS(e.type)}}class NS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function Wf(r,t){r.seq.push(t),r.map[t.id]=t}function FS(r,t,e){const n=r.name,i=n.length;for(fc.lastIndex=0;;){const s=fc.exec(n),o=fc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wf(e,c===void 0?new US(a,r,t):new IS(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new NS(a),Wf(e,f)),e=f}}}class tl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);FS(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Xf(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const OS=37297;let BS=0;function zS(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Yf=new Zt;function kS(r){le._getMatrix(Yf,le.workingColorSpace,r);const t=`mat3( ${Yf.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(r)){case yl:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function qf(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+zS(r.getShaderSource(t),o)}else return i}function HS(r,t){const e=kS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function VS(r,t){let e;switch(t){case Wp:e="Linear";break;case Xp:e="Reinhard";break;case Yp:e="Cineon";break;case qp:e="ACESFilmic";break;case $p:e="AgX";break;case Kp:e="Neutral";break;case Kg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ia=new F;function GS(){le.getLuminanceCoefficients(Ia);const r=Ia.x.toFixed(4),t=Ia.y.toFixed(4),e=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function XS(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function YS(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function So(r){return r!==""}function $f(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cu(r){return r.replace(qS,KS)}const $S=new Map;function KS(r,t){let e=jt[t];if(e===void 0){const n=$S.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cu(e)}const ZS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zf(r){return r.replace(ZS,jS)}function jS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function jf(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function JS(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Vp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Cg?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function QS(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ks:case Hs:t="ENVMAP_TYPE_CUBE";break;case Sl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ty(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function ey(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Gp:t="ENVMAP_BLENDING_MULTIPLY";break;case qg:t="ENVMAP_BLENDING_MIX";break;case $g:t="ENVMAP_BLENDING_ADD";break}return t}function ny(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function iy(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=JS(e),c=QS(e),u=ty(e),f=ey(e),h=ny(e),d=WS(e),_=XS(s),g=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(So).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(So).join(`
`),p.length>0&&(p+=`
`)):(m=[jf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),p=[jf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?jt.tonemapping_pars_fragment:"",e.toneMapping!==ki?VS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,HS("linearToOutputTexel",e.outputColorSpace),GS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(So).join(`
`)),o=Cu(o),o=$f(o,e),o=Kf(o,e),a=Cu(a),a=$f(a,e),a=Kf(a,e),o=Zf(o),a=Zf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,v=M+p+a,C=Xf(i,i.VERTEX_SHADER,S),w=Xf(i,i.FRAGMENT_SHADER,v);i.attachShader(g,C),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(P){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(C).trim(),X=i.getShaderInfoLog(w).trim();let $=!0,Y=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,C,w);else{const W=qf(i,C,"vertex"),H=qf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+W+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||X==="")&&(Y=!1);Y&&(P.diagnostics={runnable:$,programLog:N,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(C),i.deleteShader(w),R=new tl(i,g),y=YS(i,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,OS)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=BS++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=w,this}let ry=0;class sy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new oy(t),e.set(t,n)),n}}class oy{constructor(t){this.id=ry++,this.code=t,this.usedTimes=0}}function ay(r,t,e,n,i,s,o){const a=new hm,l=new sy,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,P,N,z){const X=N.fog,$=z.geometry,Y=y.isMeshStandardMaterial?N.environment:null,W=(y.isMeshStandardMaterial?e:t).get(y.envMap||Y),H=W&&W.mapping===Sl?W.image.height:null,et=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const D=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ut=D!==void 0?D.length:0;let Ut=0;$.morphAttributes.position!==void 0&&(Ut=1),$.morphAttributes.normal!==void 0&&(Ut=2),$.morphAttributes.color!==void 0&&(Ut=3);let Jt,K,tt,gt;if(et){const vt=gi[et];Jt=vt.vertexShader,K=vt.fragmentShader}else Jt=y.vertexShader,K=y.fragmentShader,l.update(y),tt=l.getVertexShaderID(y),gt=l.getFragmentShaderID(y);const nt=r.getRenderTarget(),Et=r.state.buffers.depth.getReversed(),Ct=z.isInstancedMesh===!0,Vt=z.isBatchedMesh===!0,Qt=!!y.map,Ft=!!y.matcap,Dt=!!W,U=!!y.aoMap,xe=!!y.lightMap,Bt=!!y.bumpMap,B=!!y.normalMap,Tt=!!y.displacementMap,se=!!y.emissiveMap,Rt=!!y.metalnessMap,A=!!y.roughnessMap,E=y.anisotropy>0,V=y.clearcoat>0,Q=y.dispersion>0,J=y.iridescence>0,Z=y.sheen>0,ht=y.transmission>0,at=E&&!!y.anisotropyMap,pt=V&&!!y.clearcoatMap,Yt=V&&!!y.clearcoatNormalMap,it=V&&!!y.clearcoatRoughnessMap,ot=J&&!!y.iridescenceMap,It=J&&!!y.iridescenceThicknessMap,Lt=Z&&!!y.sheenColorMap,xt=Z&&!!y.sheenRoughnessMap,$t=!!y.specularMap,Ot=!!y.specularColorMap,ae=!!y.specularIntensityMap,L=ht&&!!y.transmissionMap,ct=ht&&!!y.thicknessMap,q=!!y.gradientMap,j=!!y.alphaMap,lt=y.alphaTest>0,ft=!!y.alphaHash,zt=!!y.extensions;let ce=ki;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ce=r.toneMapping);const Ue={shaderID:et,shaderType:y.type,shaderName:y.name,vertexShader:Jt,fragmentShader:K,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Vt,batchingColor:Vt&&z._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&z.instanceColor!==null,instancingMorph:Ct&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:qs,alphaToCoverage:!!y.alphaToCoverage,map:Qt,matcap:Ft,envMap:Dt,envMapMode:Dt&&W.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:xe,bumpMap:Bt,normalMap:B,displacementMap:h&&Tt,emissiveMap:se,normalMapObjectSpace:B&&y.normalMapType===t0,normalMapTangentSpace:B&&y.normalMapType===Qg,metalnessMap:Rt,roughnessMap:A,anisotropy:E,anisotropyMap:at,clearcoat:V,clearcoatMap:pt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:it,dispersion:Q,iridescence:J,iridescenceMap:ot,iridescenceThicknessMap:It,sheen:Z,sheenColorMap:Lt,sheenRoughnessMap:xt,specularMap:$t,specularColorMap:Ot,specularIntensityMap:ae,transmission:ht,transmissionMap:L,thicknessMap:ct,gradientMap:q,opaque:y.transparent===!1&&y.blending===Ps&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:lt,alphaHash:ft,combine:y.combine,mapUv:Qt&&g(y.map.channel),aoMapUv:U&&g(y.aoMap.channel),lightMapUv:xe&&g(y.lightMap.channel),bumpMapUv:Bt&&g(y.bumpMap.channel),normalMapUv:B&&g(y.normalMap.channel),displacementMapUv:Tt&&g(y.displacementMap.channel),emissiveMapUv:se&&g(y.emissiveMap.channel),metalnessMapUv:Rt&&g(y.metalnessMap.channel),roughnessMapUv:A&&g(y.roughnessMap.channel),anisotropyMapUv:at&&g(y.anisotropyMap.channel),clearcoatMapUv:pt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:It&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(y.sheenRoughnessMap.channel),specularMapUv:$t&&g(y.specularMap.channel),specularColorMapUv:Ot&&g(y.specularColorMap.channel),specularIntensityMapUv:ae&&g(y.specularIntensityMap.channel),transmissionMapUv:L&&g(y.transmissionMap.channel),thicknessMapUv:ct&&g(y.thicknessMap.channel),alphaMapUv:j&&g(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(B||E),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(Qt||j),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Et,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Ut,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:Qt&&y.map.isVideoTexture===!0&&le.getTransfer(y.map.colorSpace)===ge,decodeVideoTextureEmissive:se&&y.emissiveMap.isVideoTexture===!0&&le.getTransfer(y.emissiveMap.colorSpace)===ge,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Wn,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:zt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&y.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)x.push(P),x.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(M(x,y),S(x,y),x.push(r.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function M(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function S(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const x=_[y.type];let P;if(x){const N=gi[x];P=Xs.clone(N.uniforms)}else P=y.uniforms;return P}function C(y,x){let P;for(let N=0,z=u.length;N<z;N++){const X=u[N];if(X.cacheKey===x){P=X,++P.usedTimes;break}}return P===void 0&&(P=new iy(r,x,y,s),u.push(P)),P}function w(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:R}}function ly(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function cy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Jf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Qf(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,h,d,_,g,m){let p=r[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},r[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),t++,p}function a(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||cy),n.length>1&&n.sort(h||Jf),i.length>1&&i.sort(h||Jf)}function u(){for(let f=t,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function uy(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Qf,r.set(n,[o])):i>=s.length?(o=new Qf,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function hy(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Xt};break;case"SpotLight":e={position:new F,direction:new F,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new F,halfWidth:new F,halfHeight:new F};break}return r[t.id]=e,e}}}function fy(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let dy=0;function py(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function my(r){const t=new hy,e=fy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,s=new Ae,o=new Ae;function a(c){let u=0,f=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,M=0,S=0,v=0,C=0,w=0,T=0;c.sort(py);for(let y=0,x=c.length;y<x;y++){const P=c[y],N=P.color,z=P.intensity,X=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*z,f+=N.g*z,h+=N.b*z;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],z);T++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,H=e.get(P);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=P.shadow.matrix,M++}n.directional[d]=Y,d++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(N).multiplyScalar(z),Y.distance=X,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[g]=Y;const W=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,W.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=W.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=$,v++}g++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(N).multiplyScalar(z),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const W=P.shadow,H=e.get(P);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=Y,_++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(z),Y.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=Y,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const R=n.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==S||R.numSpotShadows!==v||R.numSpotMaps!==C||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=S,R.numSpotShadows=v,R.numSpotMaps=C,R.numLightProbes=T,n.version=dy++)}function l(c,u){let f=0,h=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(S.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function td(r){const t=new my(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function _y(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new td(r),t.set(i,[a])):s>=o.length?(a=new td(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class gy extends Zs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vy extends Zs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,My=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sy(r,t,e){let n=new hh;const i=new Nt,s=new Nt,o=new ve,a=new gy({depthPacking:Jg}),l=new vy,c={},u=e.maxTextureSize,f={[_r]:Sn,[Sn]:_r,[Wn]:Wn},h=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:xy,fragmentShader:My}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new tn;_.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ze(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vp;let p=this.type;this.render=function(w,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=r.getRenderTarget(),x=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(zi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=p!==Di&&this.type===Di,X=p===Di&&this.type!==Di;for(let $=0,Y=w.length;$<Y;$++){const W=w[$],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const et=H.getFrameExtents();if(i.multiply(et),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/et.x),i.x=s.x*et.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/et.y),i.y=s.y*et.y,H.mapSize.y=s.y)),H.map===null||z===!0||X===!0){const ut=this.type!==Di?{minFilter:hi,magFilter:hi}:{};H.map!==null&&H.map.dispose(),H.map=new fi(i.x,i.y,ut),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const D=H.getViewportCount();for(let ut=0;ut<D;ut++){const Ut=H.getViewport(ut);o.set(s.x*Ut.x,s.y*Ut.y,s.x*Ut.z,s.y*Ut.w),N.viewport(o),H.updateMatrices(W,ut),n=H.getFrustum(),v(T,R,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===Di&&M(H,R),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,x,P)};function M(w,T){const R=t.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new fi(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,R,h,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,R,d,g,null)}function S(w,T,R,y){let x=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=R.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=x.uuid,z=T.uuid;let X=c[N];X===void 0&&(X={},c[N]=X);let $=X[z];$===void 0&&($=x.clone(),X[z]=$,T.addEventListener("dispose",C)),x=$}if(x.visible=T.visible,x.wireframe=T.wireframe,y===Di?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:f[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=r.properties.get(x);N.light=R}return x}function v(w,T,R,y,x){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Di)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const z=t.update(w),X=w.material;if(Array.isArray(X)){const $=z.groups;for(let Y=0,W=$.length;Y<W;Y++){const H=$[Y],et=X[H.materialIndex];if(et&&et.visible){const D=S(w,et,y,x);w.onBeforeShadow(r,w,T,R,z,D,H),r.renderBufferDirect(R,null,z,D,w,H),w.onAfterShadow(r,w,T,R,z,D,H)}}}else if(X.visible){const $=S(w,X,y,x);w.onBeforeShadow(r,w,T,R,z,$,null),r.renderBufferDirect(R,null,z,$,w,null),w.onAfterShadow(r,w,T,R,z,$,null)}}const N=w.children;for(let z=0,X=N.length;z<X;z++)v(N[z],T,R,y,x)}function C(w){w.target.removeEventListener("dispose",C);for(const R in c){const y=c[R],x=w.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const yy={[Xc]:Yc,[qc]:Zc,[$c]:jc,[zs]:Kc,[Yc]:Xc,[Zc]:qc,[jc]:$c,[Kc]:zs};function Ey(r,t){function e(){let L=!1;const ct=new ve;let q=null;const j=new ve(0,0,0,0);return{setMask:function(lt){q!==lt&&!L&&(r.colorMask(lt,lt,lt,lt),q=lt)},setLocked:function(lt){L=lt},setClear:function(lt,ft,zt,ce,Ue){Ue===!0&&(lt*=ce,ft*=ce,zt*=ce),ct.set(lt,ft,zt,ce),j.equals(ct)===!1&&(r.clearColor(lt,ft,zt,ce),j.copy(ct))},reset:function(){L=!1,q=null,j.set(-1,0,0,0)}}}function n(){let L=!1,ct=!1,q=null,j=null,lt=null;return{setReversed:function(ft){if(ct!==ft){const zt=t.get("EXT_clip_control");ct?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const ce=lt;lt=null,this.setClear(ce)}ct=ft},getReversed:function(){return ct},setTest:function(ft){ft?nt(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(ft){q!==ft&&!L&&(r.depthMask(ft),q=ft)},setFunc:function(ft){if(ct&&(ft=yy[ft]),j!==ft){switch(ft){case Xc:r.depthFunc(r.NEVER);break;case Yc:r.depthFunc(r.ALWAYS);break;case qc:r.depthFunc(r.LESS);break;case zs:r.depthFunc(r.LEQUAL);break;case $c:r.depthFunc(r.EQUAL);break;case Kc:r.depthFunc(r.GEQUAL);break;case Zc:r.depthFunc(r.GREATER);break;case jc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=ft}},setLocked:function(ft){L=ft},setClear:function(ft){lt!==ft&&(ct&&(ft=1-ft),r.clearDepth(ft),lt=ft)},reset:function(){L=!1,q=null,j=null,lt=null,ct=!1}}}function i(){let L=!1,ct=null,q=null,j=null,lt=null,ft=null,zt=null,ce=null,Ue=null;return{setTest:function(vt){L||(vt?nt(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(vt){ct!==vt&&!L&&(r.stencilMask(vt),ct=vt)},setFunc:function(vt,bt,Kt){(q!==vt||j!==bt||lt!==Kt)&&(r.stencilFunc(vt,bt,Kt),q=vt,j=bt,lt=Kt)},setOp:function(vt,bt,Kt){(ft!==vt||zt!==bt||ce!==Kt)&&(r.stencilOp(vt,bt,Kt),ft=vt,zt=bt,ce=Kt)},setLocked:function(vt){L=vt},setClear:function(vt){Ue!==vt&&(r.clearStencil(vt),Ue=vt)},reset:function(){L=!1,ct=null,q=null,j=null,lt=null,ft=null,zt=null,ce=null,Ue=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,M=null,S=null,v=null,C=null,w=null,T=new Xt(0,0,0),R=0,y=!1,x=null,P=null,N=null,z=null,X=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=W>=2);let et=null,D={};const ut=r.getParameter(r.SCISSOR_BOX),Ut=r.getParameter(r.VIEWPORT),Jt=new ve().fromArray(ut),K=new ve().fromArray(Ut);function tt(L,ct,q,j){const lt=new Uint8Array(4),ft=r.createTexture();r.bindTexture(L,ft),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let zt=0;zt<q;zt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ct,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(ct+zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return ft}const gt={};gt[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),gt[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),gt[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(r.DEPTH_TEST),o.setFunc(zs),Bt(!1),B(rf),nt(r.CULL_FACE),U(zi);function nt(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Et(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Ct(L,ct){return f[L]!==ct?(r.bindFramebuffer(L,ct),f[L]=ct,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ct),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ct),!0):!1}function Vt(L,ct){let q=d,j=!1;if(L){q=h.get(ct),q===void 0&&(q=[],h.set(ct,q));const lt=L.textures;if(q.length!==lt.length||q[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,zt=lt.length;ft<zt;ft++)q[ft]=r.COLOR_ATTACHMENT0+ft;q.length=lt.length,j=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,j=!0);j&&r.drawBuffers(q)}function Qt(L){return _!==L?(r.useProgram(L),_=L,!0):!1}const Ft={[Dr]:r.FUNC_ADD,[Pg]:r.FUNC_SUBTRACT,[Dg]:r.FUNC_REVERSE_SUBTRACT};Ft[Lg]=r.MIN,Ft[Ug]=r.MAX;const Dt={[Ig]:r.ZERO,[Ng]:r.ONE,[Fg]:r.SRC_COLOR,[Gc]:r.SRC_ALPHA,[Vg]:r.SRC_ALPHA_SATURATE,[kg]:r.DST_COLOR,[Bg]:r.DST_ALPHA,[Og]:r.ONE_MINUS_SRC_COLOR,[Wc]:r.ONE_MINUS_SRC_ALPHA,[Hg]:r.ONE_MINUS_DST_COLOR,[zg]:r.ONE_MINUS_DST_ALPHA,[Gg]:r.CONSTANT_COLOR,[Wg]:r.ONE_MINUS_CONSTANT_COLOR,[Xg]:r.CONSTANT_ALPHA,[Yg]:r.ONE_MINUS_CONSTANT_ALPHA};function U(L,ct,q,j,lt,ft,zt,ce,Ue,vt){if(L===zi){g===!0&&(Et(r.BLEND),g=!1);return}if(g===!1&&(nt(r.BLEND),g=!0),L!==Rg){if(L!==m||vt!==y){if((p!==Dr||v!==Dr)&&(r.blendEquation(r.FUNC_ADD),p=Dr,v=Dr),vt)switch(L){case Ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _i:r.blendFunc(r.ONE,r.ONE);break;case sf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case of:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _i:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case sf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case of:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,S=null,C=null,w=null,T.set(0,0,0),R=0,m=L,y=vt}return}lt=lt||ct,ft=ft||q,zt=zt||j,(ct!==p||lt!==v)&&(r.blendEquationSeparate(Ft[ct],Ft[lt]),p=ct,v=lt),(q!==M||j!==S||ft!==C||zt!==w)&&(r.blendFuncSeparate(Dt[q],Dt[j],Dt[ft],Dt[zt]),M=q,S=j,C=ft,w=zt),(ce.equals(T)===!1||Ue!==R)&&(r.blendColor(ce.r,ce.g,ce.b,Ue),T.copy(ce),R=Ue),m=L,y=!1}function xe(L,ct){L.side===Wn?Et(r.CULL_FACE):nt(r.CULL_FACE);let q=L.side===Sn;ct&&(q=!q),Bt(q),L.blending===Ps&&L.transparent===!1?U(zi):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const j=L.stencilWrite;a.setTest(j),j&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){x!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),x=L)}function B(L){L!==wg?(nt(r.CULL_FACE),L!==P&&(L===rf?r.cullFace(r.BACK):L===Ag?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),P=L}function Tt(L){L!==N&&(Y&&r.lineWidth(L),N=L)}function se(L,ct,q){L?(nt(r.POLYGON_OFFSET_FILL),(z!==ct||X!==q)&&(r.polygonOffset(ct,q),z=ct,X=q)):Et(r.POLYGON_OFFSET_FILL)}function Rt(L){L?nt(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function A(L){L===void 0&&(L=r.TEXTURE0+$-1),et!==L&&(r.activeTexture(L),et=L)}function E(L,ct,q){q===void 0&&(et===null?q=r.TEXTURE0+$-1:q=et);let j=D[q];j===void 0&&(j={type:void 0,texture:void 0},D[q]=j),(j.type!==L||j.texture!==ct)&&(et!==q&&(r.activeTexture(q),et=q),r.bindTexture(L,ct||gt[L]),j.type=L,j.texture=ct)}function V(){const L=D[et];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Yt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){Jt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Jt.copy(L))}function xt(L){K.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function $t(L,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let j=q.get(L);j===void 0&&(j=r.getUniformBlockIndex(ct,L.name),q.set(L,j))}function Ot(L,ct){const j=c.get(ct).get(L);l.get(ct)!==j&&(r.uniformBlockBinding(ct,j,L.__bindingPointIndex),l.set(ct,j))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},et=null,D={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,M=null,S=null,v=null,C=null,w=null,T=new Xt(0,0,0),R=0,y=!1,x=null,P=null,N=null,z=null,X=null,Jt.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:nt,disable:Et,bindFramebuffer:Ct,drawBuffers:Vt,useProgram:Qt,setBlending:U,setMaterial:xe,setFlipSided:Bt,setCullFace:B,setLineWidth:Tt,setPolygonOffset:se,setScissorTest:Rt,activeTexture:A,bindTexture:E,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:ot,texImage3D:It,updateUBOMapping:$t,uniformBlockBinding:Ot,texStorage2D:Yt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:ht,compressedTexSubImage2D:at,compressedTexSubImage3D:pt,scissor:Lt,viewport:xt,reset:ae}}function ed(r,t,e,n){const i=Ty(n);switch(e){case tm:return r*t;case nm:return r*t;case im:return r*t*2;case rm:return r*t/i.components*i.byteLength;case oh:return r*t/i.components*i.byteLength;case sm:return r*t*2/i.components*i.byteLength;case ah:return r*t*2/i.components*i.byteLength;case em:return r*t*3/i.components*i.byteLength;case ui:return r*t*4/i.components*i.byteLength;case lh:return r*t*4/i.components*i.byteLength;case Ka:case Za:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ja:case Ja:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case iu:case su:return Math.max(r,16)*Math.max(t,8)/4;case nu:case ru:return Math.max(r,8)*Math.max(t,8)/2;case ou:case au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case lu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case hu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case fu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case du:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case pu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case mu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case _u:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case gu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case vu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case xu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Mu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Su:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case yu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Qa:case Eu:case Tu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case om:case bu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case wu:case Au:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ty(r){switch(r){case Xi:case jp:return{byteLength:1,components:1};case qo:case Jp:case Hi:return{byteLength:2,components:1};case rh:case sh:return{byteLength:2,components:4};case $r:case ih:case Fi:return{byteLength:4,components:1};case Qp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function by(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,E){return d?new OffscreenCanvas(A,E):dl("canvas")}function g(A,E,V){let Q=1;const J=Rt(A);if((J.width>V||J.height>V)&&(Q=V/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(Q*J.width),ht=Math.floor(Q*J.height);f===void 0&&(f=_(Z,ht));const at=E?_(Z,ht):f;return at.width=Z,at.height=ht,at.getContext("2d").drawImage(A,0,0,Z,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+ht+")."),at}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(A,E,V,Q,J=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=E;if(E===r.RED&&(V===r.FLOAT&&(Z=r.R32F),V===r.HALF_FLOAT&&(Z=r.R16F),V===r.UNSIGNED_BYTE&&(Z=r.R8)),E===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.R8UI),V===r.UNSIGNED_SHORT&&(Z=r.R16UI),V===r.UNSIGNED_INT&&(Z=r.R32UI),V===r.BYTE&&(Z=r.R8I),V===r.SHORT&&(Z=r.R16I),V===r.INT&&(Z=r.R32I)),E===r.RG&&(V===r.FLOAT&&(Z=r.RG32F),V===r.HALF_FLOAT&&(Z=r.RG16F),V===r.UNSIGNED_BYTE&&(Z=r.RG8)),E===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RG8UI),V===r.UNSIGNED_SHORT&&(Z=r.RG16UI),V===r.UNSIGNED_INT&&(Z=r.RG32UI),V===r.BYTE&&(Z=r.RG8I),V===r.SHORT&&(Z=r.RG16I),V===r.INT&&(Z=r.RG32I)),E===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),V===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),V===r.UNSIGNED_INT&&(Z=r.RGB32UI),V===r.BYTE&&(Z=r.RGB8I),V===r.SHORT&&(Z=r.RGB16I),V===r.INT&&(Z=r.RGB32I)),E===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),V===r.UNSIGNED_INT&&(Z=r.RGBA32UI),V===r.BYTE&&(Z=r.RGBA8I),V===r.SHORT&&(Z=r.RGBA16I),V===r.INT&&(Z=r.RGBA32I)),E===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),E===r.RGBA){const ht=J?yl:le.getTransfer(Q);V===r.FLOAT&&(Z=r.RGBA32F),V===r.HALF_FLOAT&&(Z=r.RGBA16F),V===r.UNSIGNED_BYTE&&(Z=ht===ge?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(A,E){let V;return A?E===null||E===$r||E===Vs?V=r.DEPTH24_STENCIL8:E===Fi?V=r.DEPTH32F_STENCIL8:E===qo&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===$r||E===Vs?V=r.DEPTH_COMPONENT24:E===Fi?V=r.DEPTH_COMPONENT32F:E===qo&&(V=r.DEPTH_COMPONENT16),V}function C(A,E){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==hi&&A.minFilter!==Si?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function w(A){const E=A.target;E.removeEventListener("dispose",w),R(E),E.isVideoTexture&&u.delete(E)}function T(A){const E=A.target;E.removeEventListener("dispose",T),x(E)}function R(A){const E=n.get(A);if(E.__webglInit===void 0)return;const V=A.source,Q=h.get(V);if(Q){const J=Q[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(A),Object.keys(Q).length===0&&h.delete(V)}n.remove(A)}function y(A){const E=n.get(A);r.deleteTexture(E.__webglTexture);const V=A.source,Q=h.get(V);delete Q[E.__cacheKey],o.memory.textures--}function x(A){const E=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let J=0;J<E.__webglFramebuffer[Q].length;J++)r.deleteFramebuffer(E.__webglFramebuffer[Q][J]);else r.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[Q]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=A.textures;for(let Q=0,J=V.length;Q<J;Q++){const Z=n.get(V[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(V[Q])}n.remove(A)}let P=0;function N(){P=0}function z(){const A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function X(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function $(A,E){const V=n.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,A,E);return}}e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+E)}function Y(A,E){const V=n.get(A);if(A.version>0&&V.__version!==A.version){K(V,A,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+E)}function W(A,E){const V=n.get(A);if(A.version>0&&V.__version!==A.version){K(V,A,E);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+E)}function H(A,E){const V=n.get(A);if(A.version>0&&V.__version!==A.version){tt(V,A,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+E)}const et={[tu]:r.REPEAT,[Fr]:r.CLAMP_TO_EDGE,[eu]:r.MIRRORED_REPEAT},D={[hi]:r.NEAREST,[Zg]:r.NEAREST_MIPMAP_NEAREST,[pa]:r.NEAREST_MIPMAP_LINEAR,[Si]:r.LINEAR,[kl]:r.LINEAR_MIPMAP_NEAREST,[Or]:r.LINEAR_MIPMAP_LINEAR},ut={[e0]:r.NEVER,[a0]:r.ALWAYS,[n0]:r.LESS,[am]:r.LEQUAL,[i0]:r.EQUAL,[o0]:r.GEQUAL,[r0]:r.GREATER,[s0]:r.NOTEQUAL};function Ut(A,E){if(E.type===Fi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Si||E.magFilter===kl||E.magFilter===pa||E.magFilter===Or||E.minFilter===Si||E.minFilter===kl||E.minFilter===pa||E.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,et[E.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,et[E.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,et[E.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,D[E.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ut[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===hi||E.minFilter!==pa&&E.minFilter!==Or||E.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Jt(A,E){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",w));const Q=E.source;let J=h.get(Q);J===void 0&&(J={},h.set(Q,J));const Z=X(E);if(Z!==A.__cacheKey){J[Z]===void 0&&(J[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),J[Z].usedTimes++;const ht=J[A.__cacheKey];ht!==void 0&&(J[A.__cacheKey].usedTimes--,ht.usedTimes===0&&y(E)),A.__cacheKey=Z,A.__webglTexture=J[Z].texture}return V}function K(A,E,V){let Q=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=r.TEXTURE_3D);const J=Jt(A,E),Z=E.source;e.bindTexture(Q,A.__webglTexture,r.TEXTURE0+V);const ht=n.get(Z);if(Z.version!==ht.__version||J===!0){e.activeTexture(r.TEXTURE0+V);const at=le.getPrimaries(le.workingColorSpace),pt=E.colorSpace===ir?null:le.getPrimaries(E.colorSpace),Yt=E.colorSpace===ir||at===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let it=g(E.image,!1,i.maxTextureSize);it=se(E,it);const ot=s.convert(E.format,E.colorSpace),It=s.convert(E.type);let Lt=S(E.internalFormat,ot,It,E.colorSpace,E.isVideoTexture);Ut(Q,E);let xt;const $t=E.mipmaps,Ot=E.isVideoTexture!==!0,ae=ht.__version===void 0||J===!0,L=Z.dataReady,ct=C(E,it);if(E.isDepthTexture)Lt=v(E.format===Gs,E.type),ae&&(Ot?e.texStorage2D(r.TEXTURE_2D,1,Lt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Lt,it.width,it.height,0,ot,It,null));else if(E.isDataTexture)if($t.length>0){Ot&&ae&&e.texStorage2D(r.TEXTURE_2D,ct,Lt,$t[0].width,$t[0].height);for(let q=0,j=$t.length;q<j;q++)xt=$t[q],Ot?L&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,xt.width,xt.height,ot,It,xt.data):e.texImage2D(r.TEXTURE_2D,q,Lt,xt.width,xt.height,0,ot,It,xt.data);E.generateMipmaps=!1}else Ot?(ae&&e.texStorage2D(r.TEXTURE_2D,ct,Lt,it.width,it.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,ot,It,it.data)):e.texImage2D(r.TEXTURE_2D,0,Lt,it.width,it.height,0,ot,It,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ot&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Lt,$t[0].width,$t[0].height,it.depth);for(let q=0,j=$t.length;q<j;q++)if(xt=$t[q],E.format!==ui)if(ot!==null)if(Ot){if(L)if(E.layerUpdates.size>0){const lt=ed(xt.width,xt.height,E.format,E.type);for(const ft of E.layerUpdates){const zt=xt.data.subarray(ft*lt/xt.data.BYTES_PER_ELEMENT,(ft+1)*lt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,ft,xt.width,xt.height,1,ot,zt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,it.depth,ot,xt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Lt,xt.width,xt.height,it.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,it.depth,ot,It,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,q,Lt,xt.width,xt.height,it.depth,0,ot,It,xt.data)}else{Ot&&ae&&e.texStorage2D(r.TEXTURE_2D,ct,Lt,$t[0].width,$t[0].height);for(let q=0,j=$t.length;q<j;q++)xt=$t[q],E.format!==ui?ot!==null?Ot?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,xt.width,xt.height,ot,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,q,Lt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?L&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,xt.width,xt.height,ot,It,xt.data):e.texImage2D(r.TEXTURE_2D,q,Lt,xt.width,xt.height,0,ot,It,xt.data)}else if(E.isDataArrayTexture)if(Ot){if(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Lt,it.width,it.height,it.depth),L)if(E.layerUpdates.size>0){const q=ed(it.width,it.height,E.format,E.type);for(const j of E.layerUpdates){const lt=it.data.subarray(j*q/it.data.BYTES_PER_ELEMENT,(j+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,ot,It,lt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ot,It,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,it.width,it.height,it.depth,0,ot,It,it.data);else if(E.isData3DTexture)Ot?(ae&&e.texStorage3D(r.TEXTURE_3D,ct,Lt,it.width,it.height,it.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ot,It,it.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,it.width,it.height,it.depth,0,ot,It,it.data);else if(E.isFramebufferTexture){if(ae)if(Ot)e.texStorage2D(r.TEXTURE_2D,ct,Lt,it.width,it.height);else{let q=it.width,j=it.height;for(let lt=0;lt<ct;lt++)e.texImage2D(r.TEXTURE_2D,lt,Lt,q,j,0,ot,It,null),q>>=1,j>>=1}}else if($t.length>0){if(Ot&&ae){const q=Rt($t[0]);e.texStorage2D(r.TEXTURE_2D,ct,Lt,q.width,q.height)}for(let q=0,j=$t.length;q<j;q++)xt=$t[q],Ot?L&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,ot,It,xt):e.texImage2D(r.TEXTURE_2D,q,Lt,ot,It,xt);E.generateMipmaps=!1}else if(Ot){if(ae){const q=Rt(it);e.texStorage2D(r.TEXTURE_2D,ct,Lt,q.width,q.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,It,it)}else e.texImage2D(r.TEXTURE_2D,0,Lt,ot,It,it);m(E)&&p(Q),ht.__version=Z.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function tt(A,E,V){if(E.image.length!==6)return;const Q=Jt(A,E),J=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+V);const Z=n.get(J);if(J.version!==Z.__version||Q===!0){e.activeTexture(r.TEXTURE0+V);const ht=le.getPrimaries(le.workingColorSpace),at=E.colorSpace===ir?null:le.getPrimaries(E.colorSpace),pt=E.colorSpace===ir||ht===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Yt=E.isCompressedTexture||E.image[0].isCompressedTexture,it=E.image[0]&&E.image[0].isDataTexture,ot=[];for(let j=0;j<6;j++)!Yt&&!it?ot[j]=g(E.image[j],!0,i.maxCubemapSize):ot[j]=it?E.image[j].image:E.image[j],ot[j]=se(E,ot[j]);const It=ot[0],Lt=s.convert(E.format,E.colorSpace),xt=s.convert(E.type),$t=S(E.internalFormat,Lt,xt,E.colorSpace),Ot=E.isVideoTexture!==!0,ae=Z.__version===void 0||Q===!0,L=J.dataReady;let ct=C(E,It);Ut(r.TEXTURE_CUBE_MAP,E);let q;if(Yt){Ot&&ae&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,$t,It.width,It.height);for(let j=0;j<6;j++){q=ot[j].mipmaps;for(let lt=0;lt<q.length;lt++){const ft=q[lt];E.format!==ui?Lt!==null?Ot?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,0,0,ft.width,ft.height,Lt,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,$t,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,0,0,ft.width,ft.height,Lt,xt,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,$t,ft.width,ft.height,0,Lt,xt,ft.data)}}}else{if(q=E.mipmaps,Ot&&ae){q.length>0&&ct++;const j=Rt(ot[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,$t,j.width,j.height)}for(let j=0;j<6;j++)if(it){Ot?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ot[j].width,ot[j].height,Lt,xt,ot[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,ot[j].width,ot[j].height,0,Lt,xt,ot[j].data);for(let lt=0;lt<q.length;lt++){const zt=q[lt].image[j].image;Ot?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,0,0,zt.width,zt.height,Lt,xt,zt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,$t,zt.width,zt.height,0,Lt,xt,zt.data)}}else{Ot?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Lt,xt,ot[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,Lt,xt,ot[j]);for(let lt=0;lt<q.length;lt++){const ft=q[lt];Ot?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,0,0,Lt,xt,ft.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,$t,Lt,xt,ft.image[j])}}}m(E)&&p(r.TEXTURE_CUBE_MAP),Z.__version=J.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function gt(A,E,V,Q,J,Z){const ht=s.convert(V.format,V.colorSpace),at=s.convert(V.type),pt=S(V.internalFormat,ht,at,V.colorSpace),Yt=n.get(E),it=n.get(V);if(it.__renderTarget=E,!Yt.__hasExternalTextures){const ot=Math.max(1,E.width>>Z),It=Math.max(1,E.height>>Z);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,pt,ot,It,E.depth,0,ht,at,null):e.texImage2D(J,Z,pt,ot,It,0,ht,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),B(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,it.__webglTexture,0,Bt(E)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,it.__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(A,E,V){if(r.bindRenderbuffer(r.RENDERBUFFER,A),E.depthBuffer){const Q=E.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,Z=v(E.stencilBuffer,J),ht=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=Bt(E);B(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,Z,E.width,E.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,Z,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Z,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,A)}else{const Q=E.textures;for(let J=0;J<Q.length;J++){const Z=Q[J],ht=s.convert(Z.format,Z.colorSpace),at=s.convert(Z.type),pt=S(Z.internalFormat,ht,at,Z.colorSpace),Yt=Bt(E);V&&B(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,pt,E.width,E.height):B(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Yt,pt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,pt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Et(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const J=Q.__webglTexture,Z=Bt(E);if(E.depthTexture.format===Ds)B(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(E.depthTexture.format===Gs)B(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ct(A){const E=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=Q}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Et(E.__webglFramebuffer,A)}else if(V){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=r.createRenderbuffer(),nt(E.__webglDepthbuffer[Q],A,!1);else{const J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),nt(E.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(A,E,V){const Q=n.get(A);E!==void 0&&gt(Q.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Ct(A)}function Qt(A){const E=A.texture,V=n.get(A),Q=n.get(E);A.addEventListener("dispose",T);const J=A.textures,Z=A.isWebGLCubeRenderTarget===!0,ht=J.length>1;if(ht||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=E.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[at]=[];for(let pt=0;pt<E.mipmaps.length;pt++)V.__webglFramebuffer[at][pt]=r.createFramebuffer()}else V.__webglFramebuffer[at]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let at=0;at<E.mipmaps.length;at++)V.__webglFramebuffer[at]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ht)for(let at=0,pt=J.length;at<pt;at++){const Yt=n.get(J[at]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&B(A)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const pt=J[at];V.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[at]);const Yt=s.convert(pt.format,pt.colorSpace),it=s.convert(pt.type),ot=S(pt.internalFormat,Yt,it,pt.colorSpace,A.isXRRenderTarget===!0),It=Bt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,It,ot,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,V.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),nt(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Ut(r.TEXTURE_CUBE_MAP,E);for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)gt(V.__webglFramebuffer[at][pt],A,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,pt);else gt(V.__webglFramebuffer[at],A,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(E)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let at=0,pt=J.length;at<pt;at++){const Yt=J[at],it=n.get(Yt);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),Ut(r.TEXTURE_2D,Yt),gt(V.__webglFramebuffer,A,Yt,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,0),m(Yt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,Q.__webglTexture),Ut(at,E),E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)gt(V.__webglFramebuffer[pt],A,E,r.COLOR_ATTACHMENT0,at,pt);else gt(V.__webglFramebuffer,A,E,r.COLOR_ATTACHMENT0,at,0);m(E)&&p(at),e.unbindTexture()}A.depthBuffer&&Ct(A)}function Ft(A){const E=A.textures;for(let V=0,Q=E.length;V<Q;V++){const J=E[V];if(m(J)){const Z=M(A),ht=n.get(J).__webglTexture;e.bindTexture(Z,ht),p(Z),e.unbindTexture()}}}const Dt=[],U=[];function xe(A){if(A.samples>0){if(B(A)===!1){const E=A.textures,V=A.width,Q=A.height;let J=r.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(A),at=E.length>1;if(at)for(let pt=0;pt<E.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let pt=0;pt<E.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Yt=n.get(E[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Yt,0)}r.blitFramebuffer(0,0,V,Q,0,0,V,Q,J,r.NEAREST),l===!0&&(Dt.length=0,U.length=0,Dt.push(r.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Dt.push(Z),U.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let pt=0;pt<E.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Yt=n.get(E[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Yt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const E=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Bt(A){return Math.min(i.maxSamples,A.samples)}function B(A){const E=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Tt(A){const E=o.render.frame;u.get(A)!==E&&(u.set(A,E),A.update())}function se(A,E){const V=A.colorSpace,Q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==qs&&V!==ir&&(le.getTransfer(V)===ge?(Q!==ui||J!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function Rt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=H,this.rebindTextures=Vt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=B}function wy(r,t){function e(n,i=ir){let s;const o=le.getTransfer(i);if(n===Xi)return r.UNSIGNED_BYTE;if(n===rh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===sh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Qp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===jp)return r.BYTE;if(n===Jp)return r.SHORT;if(n===qo)return r.UNSIGNED_SHORT;if(n===ih)return r.INT;if(n===$r)return r.UNSIGNED_INT;if(n===Fi)return r.FLOAT;if(n===Hi)return r.HALF_FLOAT;if(n===tm)return r.ALPHA;if(n===em)return r.RGB;if(n===ui)return r.RGBA;if(n===nm)return r.LUMINANCE;if(n===im)return r.LUMINANCE_ALPHA;if(n===Ds)return r.DEPTH_COMPONENT;if(n===Gs)return r.DEPTH_STENCIL;if(n===rm)return r.RED;if(n===oh)return r.RED_INTEGER;if(n===sm)return r.RG;if(n===ah)return r.RG_INTEGER;if(n===lh)return r.RGBA_INTEGER;if(n===Ka||n===Za||n===ja||n===Ja)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nu||n===iu||n===ru||n===su)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===iu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ou||n===au||n===lu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ou||n===au)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===Mu||n===Su||n===yu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===du)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_u)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Su)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===Eu||n===Tu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Qa)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===om||n===bu||n===wu||n===Au)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Au)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Ay extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ys extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cy={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ys;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Py=`
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

}`;class Dy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Cn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ln({vertexShader:Ry,fragmentShader:Py,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ze(new ta(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ly extends $s{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=new Dy,m=e.getContextAttributes();let p=null,M=null;const S=[],v=[],C=new Nt;let w=null;const T=new Hn;T.viewport=new ve;const R=new Hn;R.viewport=new ve;const y=[T,R],x=new Ay;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let tt=S[K];return tt===void 0&&(tt=new dc,S[K]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(K){let tt=S[K];return tt===void 0&&(tt=new dc,S[K]=tt),tt.getGripSpace()},this.getHand=function(K){let tt=S[K];return tt===void 0&&(tt=new dc,S[K]=tt),tt.getHandSpace()};function z(K){const tt=v.indexOf(K.inputSource);if(tt===-1)return;const gt=S[tt];gt!==void 0&&(gt.update(K.inputSource,K.frame,c||o),gt.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",$);for(let K=0;K<S.length;K++){const tt=v[K];tt!==null&&(v[K]=null,S[K].disconnect(tt))}P=null,N=null,g.reset(),t.setRenderTarget(p),d=null,h=null,f=null,i=null,M=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",X),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new fi(d.framebufferWidth,d.framebufferHeight,{format:ui,type:Xi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,gt=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Gs:Ds,gt=m.stencil?Vs:$r);const Et={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};f=new XRWebGLBinding(i,e),h=f.createProjectionLayer(Et),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new fi(h.textureWidth,h.textureHeight,{format:ui,type:Xi,depthTexture:new Mm(h.textureWidth,h.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Jt.setContext(i),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(K){for(let tt=0;tt<K.removed.length;tt++){const gt=K.removed[tt],nt=v.indexOf(gt);nt>=0&&(v[nt]=null,S[nt].disconnect(gt))}for(let tt=0;tt<K.added.length;tt++){const gt=K.added[tt];let nt=v.indexOf(gt);if(nt===-1){for(let Ct=0;Ct<S.length;Ct++)if(Ct>=v.length){v.push(gt),nt=Ct;break}else if(v[Ct]===null){v[Ct]=gt,nt=Ct;break}if(nt===-1)break}const Et=S[nt];Et&&Et.connect(gt)}}const Y=new F,W=new F;function H(K,tt,gt){Y.setFromMatrixPosition(tt.matrixWorld),W.setFromMatrixPosition(gt.matrixWorld);const nt=Y.distanceTo(W),Et=tt.projectionMatrix.elements,Ct=gt.projectionMatrix.elements,Vt=Et[14]/(Et[10]-1),Qt=Et[14]/(Et[10]+1),Ft=(Et[9]+1)/Et[5],Dt=(Et[9]-1)/Et[5],U=(Et[8]-1)/Et[0],xe=(Ct[8]+1)/Ct[0],Bt=Vt*U,B=Vt*xe,Tt=nt/(-U+xe),se=Tt*-U;if(tt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(se),K.translateZ(Tt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Et[10]===-1)K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Rt=Vt+Tt,A=Qt+Tt,E=Bt-se,V=B+(nt-se),Q=Ft*Qt/A*Rt,J=Dt*Qt/A*Rt;K.projectionMatrix.makePerspective(E,V,Q,J,Rt,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function et(K,tt){tt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(tt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let tt=K.near,gt=K.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),x.near=R.near=T.near=tt,x.far=R.far=T.far=gt,(P!==x.near||N!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,N=x.far),T.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,x.layers.mask=T.layers.mask|R.layers.mask;const nt=K.parent,Et=x.cameras;et(x,nt);for(let Ct=0;Ct<Et.length;Ct++)et(Et[Ct],nt);Et.length===2?H(x,T,R):x.projectionMatrix.copy(T.projectionMatrix),D(K,x,nt)};function D(K,tt,gt){gt===null?K.matrix.copy(tt.matrixWorld):(K.matrix.copy(gt.matrixWorld),K.matrix.invert(),K.matrix.multiply(tt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=$o*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ut=null;function Ut(K,tt){if(u=tt.getViewerPose(c||o),_=tt,u!==null){const gt=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let nt=!1;gt.length!==x.cameras.length&&(x.cameras.length=0,nt=!0);for(let Ct=0;Ct<gt.length;Ct++){const Vt=gt[Ct];let Qt=null;if(d!==null)Qt=d.getViewport(Vt);else{const Dt=f.getViewSubImage(h,Vt);Qt=Dt.viewport,Ct===0&&(t.setRenderTargetTextures(M,Dt.colorTexture,h.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(M))}let Ft=y[Ct];Ft===void 0&&(Ft=new Hn,Ft.layers.enable(Ct),Ft.viewport=new ve,y[Ct]=Ft),Ft.matrix.fromArray(Vt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Vt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Ct===0&&(x.matrix.copy(Ft.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),nt===!0&&x.cameras.push(Ft)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const Ct=f.getDepthInformation(gt[0]);Ct&&Ct.isValid&&Ct.texture&&g.init(t,Ct,i.renderState)}}for(let gt=0;gt<S.length;gt++){const nt=v[gt],Et=S[gt];nt!==null&&Et!==void 0&&Et.update(nt,tt,c||o)}ut&&ut(K,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),_=null}const Jt=new vm;Jt.setAnimationLoop(Ut),this.setAnimationLoop=function(K){ut=K},this.dispose=function(){}}}const br=new Yi,Uy=new Ae;function Iy(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mm(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),S=M.envMap,v=M.envMapRotation;S&&(m.envMap.value=S,br.copy(v),br.x*=-1,br.y*=-1,br.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),m.envMapRotation.value.setFromMatrix4(Uy.makeRotationFromEuler(br)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ny(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const v=S.program;n.uniformBlockBinding(M,v)}function c(M,S){let v=i[M.id];v===void 0&&(_(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",m));const C=S.program;n.updateUBOMapping(M,C);const w=t.render.frame;s[M.id]!==w&&(h(M),s[M.id]=w)}function u(M){const S=f();M.__bindingPointIndex=S;const v=r.createBuffer(),C=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,v),v}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const S=i[M.id],v=M.uniforms,C=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let w=0,T=v.length;w<T;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,x=R.length;y<x;y++){const P=R[y];if(d(P,w,y,C)===!0){const N=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let $=0;$<z.length;$++){const Y=z[$],W=g(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,r.bufferSubData(r.UNIFORM_BUFFER,N+X,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,X),X+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,S,v,C){const w=M.value,T=S+"_"+v;if(C[T]===void 0)return typeof w=="number"||typeof w=="boolean"?C[T]=w:C[T]=w.clone(),!0;{const R=C[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(M){const S=M.uniforms;let v=0;const C=16;for(let T=0,R=S.length;T<R;T++){const y=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,P=y.length;x<P;x++){const N=y[x],z=Array.isArray(N.value)?N.value:[N.value];for(let X=0,$=z.length;X<$;X++){const Y=z[X],W=g(Y),H=v%C,et=H%W.boundary,D=H+et;v+=et,D!==0&&C-D<W.storage&&(v+=C-D),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=W.storage}}}const w=v%C;return w>0&&(v+=C-w),M.__size=v,M.__cache={},this}function g(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Fy{constructor(t={}){const{canvas:e=b0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zn,this.toneMapping=ki,this.toneMappingExposure=1;const v=this;let C=!1,w=0,T=0,R=null,y=-1,x=null;const P=new ve,N=new ve;let z=null;const X=new Xt(0);let $=0,Y=e.width,W=e.height,H=1,et=null,D=null;const ut=new ve(0,0,Y,W),Ut=new ve(0,0,Y,W);let Jt=!1;const K=new hh;let tt=!1,gt=!1;const nt=new Ae,Et=new Ae,Ct=new F,Vt=new ve,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Dt(){return R===null?H:1}let U=n;function xe(b,I){return e.getContext(b,I)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nh}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),U===null){const I="webgl2";if(U=xe(I,b),U===null)throw xe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Bt,B,Tt,se,Rt,A,E,V,Q,J,Z,ht,at,pt,Yt,it,ot,It,Lt,xt,$t,Ot,ae,L;function ct(){Bt=new HM(U),Bt.init(),Ot=new wy(U,Bt),B=new NM(U,Bt,t,Ot),Tt=new Ey(U,Bt),B.reverseDepthBuffer&&h&&Tt.buffers.depth.setReversed(!0),se=new WM(U),Rt=new ly,A=new by(U,Bt,Tt,Rt,B,Ot,se),E=new OM(v),V=new kM(v),Q=new j0(U),ae=new UM(U,Q),J=new VM(U,Q,se,ae),Z=new YM(U,J,Q,se),Lt=new XM(U,B,A),it=new FM(Rt),ht=new ay(v,E,V,Bt,B,ae,it),at=new Iy(v,Rt),pt=new uy,Yt=new _y(Bt),It=new LM(v,E,V,Tt,Z,d,l),ot=new Sy(v,Z,B),L=new Ny(U,se,B,Tt),xt=new IM(U,Bt,se),$t=new GM(U,Bt,se),se.programs=ht.programs,v.capabilities=B,v.extensions=Bt,v.properties=Rt,v.renderLists=pt,v.shadowMap=ot,v.state=Tt,v.info=se}ct();const q=new Ly(v,U);this.xr=q,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(Y,W,!1))},this.getSize=function(b){return b.set(Y,W)},this.setSize=function(b,I,k=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,W=I,e.width=Math.floor(b*H),e.height=Math.floor(I*H),k===!0&&(e.style.width=b+"px",e.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(Y*H,W*H).floor()},this.setDrawingBufferSize=function(b,I,k){Y=b,W=I,H=k,e.width=Math.floor(b*k),e.height=Math.floor(I*k),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(ut)},this.setViewport=function(b,I,k,G){b.isVector4?ut.set(b.x,b.y,b.z,b.w):ut.set(b,I,k,G),Tt.viewport(P.copy(ut).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(Ut)},this.setScissor=function(b,I,k,G){b.isVector4?Ut.set(b.x,b.y,b.z,b.w):Ut.set(b,I,k,G),Tt.scissor(N.copy(Ut).multiplyScalar(H).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(b){Tt.setScissorTest(Jt=b)},this.setOpaqueSort=function(b){et=b},this.setTransparentSort=function(b){D=b},this.getClearColor=function(b){return b.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(b=!0,I=!0,k=!0){let G=0;if(b){let O=!1;if(R!==null){const rt=R.texture.format;O=rt===lh||rt===ah||rt===oh}if(O){const rt=R.texture.type,st=rt===Xi||rt===$r||rt===qo||rt===Vs||rt===rh||rt===sh,dt=It.getClearColor(),Mt=It.getClearAlpha(),kt=dt.r,Wt=dt.g,yt=dt.b;st?(_[0]=kt,_[1]=Wt,_[2]=yt,_[3]=Mt,U.clearBufferuiv(U.COLOR,0,_)):(g[0]=kt,g[1]=Wt,g[2]=yt,g[3]=Mt,U.clearBufferiv(U.COLOR,0,g))}else G|=U.COLOR_BUFFER_BIT}I&&(G|=U.DEPTH_BUFFER_BIT),k&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),pt.dispose(),Yt.dispose(),Rt.dispose(),E.dispose(),V.dispose(),Z.dispose(),ae.dispose(),L.dispose(),ht.dispose(),q.dispose(),q.removeEventListener("sessionstart",mt),q.removeEventListener("sessionend",Gt),wt.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=se.autoReset,I=ot.enabled,k=ot.autoUpdate,G=ot.needsUpdate,O=ot.type;ct(),se.autoReset=b,ot.enabled=I,ot.autoUpdate=k,ot.needsUpdate=G,ot.type=O}function ft(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function zt(b){const I=b.target;I.removeEventListener("dispose",zt),ce(I)}function ce(b){Ue(b),Rt.remove(b)}function Ue(b){const I=Rt.get(b).programs;I!==void 0&&(I.forEach(function(k){ht.releaseProgram(k)}),b.isShaderMaterial&&ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,k,G,O,rt){I===null&&(I=Qt);const st=O.isMesh&&O.matrixWorld.determinant()<0,dt=Dn(b,I,k,G,O);Tt.setMaterial(G,st);let Mt=k.index,kt=1;if(G.wireframe===!0){if(Mt=J.getWireframeAttribute(k),Mt===void 0)return;kt=2}const Wt=k.drawRange,yt=k.attributes.position;let qt=Wt.start*kt,ue=(Wt.start+Wt.count)*kt;rt!==null&&(qt=Math.max(qt,rt.start*kt),ue=Math.min(ue,(rt.start+rt.count)*kt)),Mt!==null?(qt=Math.max(qt,0),ue=Math.min(ue,Mt.count)):yt!=null&&(qt=Math.max(qt,0),ue=Math.min(ue,yt.count));const fe=ue-qt;if(fe<0||fe===1/0)return;ae.setup(O,G,dt,k,Mt);let Re,de=xt;if(Mt!==null&&(Re=Q.get(Mt),de=$t,de.setIndex(Re)),O.isMesh)G.wireframe===!0?(Tt.setLineWidth(G.wireframeLinewidth*Dt()),de.setMode(U.LINES)):de.setMode(U.TRIANGLES);else if(O.isLine){let Pt=G.linewidth;Pt===void 0&&(Pt=1),Tt.setLineWidth(Pt*Dt()),O.isLineSegments?de.setMode(U.LINES):O.isLineLoop?de.setMode(U.LINE_LOOP):de.setMode(U.LINE_STRIP)}else O.isPoints?de.setMode(U.POINTS):O.isSprite&&de.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)de.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))de.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Pt=O._multiDrawStarts,Ti=O._multiDrawCounts,pe=O._multiDrawCount,ri=Mt?Q.get(Mt).bytesPerElement:1,Zr=Rt.get(G).currentProgram.getUniforms();for(let Ln=0;Ln<pe;Ln++)Zr.setValue(U,"_gl_DrawID",Ln),de.render(Pt[Ln]/ri,Ti[Ln])}else if(O.isInstancedMesh)de.renderInstances(qt,fe,O.count);else if(k.isInstancedBufferGeometry){const Pt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ti=Math.min(k.instanceCount,Pt);de.renderInstances(qt,fe,Ti)}else de.render(qt,fe)};function vt(b,I,k){b.transparent===!0&&b.side===Wn&&b.forceSinglePass===!1?(b.side=Sn,b.needsUpdate=!0,Me(b,I,k),b.side=_r,b.needsUpdate=!0,Me(b,I,k),b.side=Wn):Me(b,I,k)}this.compile=function(b,I,k=null){k===null&&(k=b),p=Yt.get(k),p.init(I),S.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==k&&b.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const rt=O.material;if(rt)if(Array.isArray(rt))for(let st=0;st<rt.length;st++){const dt=rt[st];vt(dt,k,O),G.add(dt)}else vt(rt,k,O),G.add(rt)}),S.pop(),p=null,G},this.compileAsync=function(b,I,k=null){const G=this.compile(b,I,k);return new Promise(O=>{function rt(){if(G.forEach(function(st){Rt.get(st).currentProgram.isReady()&&G.delete(st)}),G.size===0){O(b);return}setTimeout(rt,10)}Bt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let bt=null;function Kt(b){bt&&bt(b)}function mt(){wt.stop()}function Gt(){wt.start()}const wt=new vm;wt.setAnimationLoop(Kt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(b){bt=b,q.setAnimationLoop(b),b===null?wt.stop():wt.start()},q.addEventListener("sessionstart",mt),q.addEventListener("sessionend",Gt),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(I),I=q.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,I,R),p=Yt.get(b,S.length),p.init(I),S.push(p),Et.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),K.setFromProjectionMatrix(Et),gt=this.localClippingEnabled,tt=it.init(this.clippingPlanes,gt),m=pt.get(b,M.length),m.init(),M.push(m),q.enabled===!0&&q.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&Ht(rt,I,-1/0,v.sortObjects)}Ht(b,I,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(et,D),Ft=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ft&&It.addToRenderList(m,b),this.info.render.frame++,tt===!0&&it.beginShadows();const k=p.state.shadowsArray;ot.render(k,b,I),tt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(p.setupLights(),I.isArrayCamera){const rt=I.cameras;if(O.length>0)for(let st=0,dt=rt.length;st<dt;st++){const Mt=rt[st];ee(G,O,b,Mt)}Ft&&It.render(b);for(let st=0,dt=rt.length;st<dt;st++){const Mt=rt[st];Fe(m,b,Mt,Mt.viewport)}}else O.length>0&&ee(G,O,b,I),Ft&&It.render(b),Fe(m,b,I);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,I),ae.resetDefaultState(),y=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],tt===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ht(b,I,k,G){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){G&&Vt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Et);const st=Z.update(b),dt=b.material;dt.visible&&m.push(b,st,dt,k,Vt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){const st=Z.update(b),dt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Vt.copy(b.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Vt.copy(st.boundingSphere.center)),Vt.applyMatrix4(b.matrixWorld).applyMatrix4(Et)),Array.isArray(dt)){const Mt=st.groups;for(let kt=0,Wt=Mt.length;kt<Wt;kt++){const yt=Mt[kt],qt=dt[yt.materialIndex];qt&&qt.visible&&m.push(b,st,qt,k,Vt.z,yt)}}else dt.visible&&m.push(b,st,dt,k,Vt.z,null)}}const rt=b.children;for(let st=0,dt=rt.length;st<dt;st++)Ht(rt[st],I,k,G)}function Fe(b,I,k,G){const O=b.opaque,rt=b.transmissive,st=b.transparent;p.setupLightsView(k),tt===!0&&it.setGlobalState(v.clippingPlanes,k),G&&Tt.viewport(P.copy(G)),O.length>0&&Te(O,I,k),rt.length>0&&Te(rt,I,k),st.length>0&&Te(st,I,k),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function ee(b,I,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new fi(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Hi:Xi,minFilter:Or,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const rt=p.state.transmissionRenderTarget[G.id],st=G.viewport||P;rt.setSize(st.z,st.w);const dt=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(X),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),Ft&&It.render(k);const Mt=v.toneMapping;v.toneMapping=ki;const kt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),tt===!0&&it.setGlobalState(v.clippingPlanes,G),Te(b,k,G),A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let yt=0,qt=I.length;yt<qt;yt++){const ue=I[yt],fe=ue.object,Re=ue.geometry,de=ue.material,Pt=ue.group;if(de.side===Wn&&fe.layers.test(G.layers)){const Ti=de.side;de.side=Sn,de.needsUpdate=!0,Ve(fe,k,G,Re,de,Pt),de.side=Ti,de.needsUpdate=!0,Wt=!0}}Wt===!0&&(A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt))}v.setRenderTarget(dt),v.setClearColor(X,$),kt!==void 0&&(G.viewport=kt),v.toneMapping=Mt}function Te(b,I,k){const G=I.isScene===!0?I.overrideMaterial:null;for(let O=0,rt=b.length;O<rt;O++){const st=b[O],dt=st.object,Mt=st.geometry,kt=G===null?st.material:G,Wt=st.group;dt.layers.test(k.layers)&&Ve(dt,I,k,Mt,kt,Wt)}}function Ve(b,I,k,G,O,rt){b.onBeforeRender(v,I,k,G,O,rt),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(v,I,k,G,b,rt),O.transparent===!0&&O.side===Wn&&O.forceSinglePass===!1?(O.side=Sn,O.needsUpdate=!0,v.renderBufferDirect(k,I,G,O,b,rt),O.side=_r,O.needsUpdate=!0,v.renderBufferDirect(k,I,G,O,b,rt),O.side=Wn):v.renderBufferDirect(k,I,G,O,b,rt),b.onAfterRender(v,I,k,G,O,rt)}function Me(b,I,k){I.isScene!==!0&&(I=Qt);const G=Rt.get(b),O=p.state.lights,rt=p.state.shadowsArray,st=O.state.version,dt=ht.getParameters(b,O.state,rt,I,k),Mt=ht.getProgramCacheKey(dt);let kt=G.programs;G.environment=b.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(b.isMeshStandardMaterial?V:E).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,kt===void 0&&(b.addEventListener("dispose",zt),kt=new Map,G.programs=kt);let Wt=kt.get(Mt);if(Wt!==void 0){if(G.currentProgram===Wt&&G.lightsStateVersion===st)return he(b,dt),Wt}else dt.uniforms=ht.getUniforms(b),b.onBeforeCompile(dt,v),Wt=ht.acquireProgram(dt,Mt),kt.set(Mt,Wt),G.uniforms=dt.uniforms;const yt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(yt.clippingPlanes=it.uniform),he(b,dt),G.needsLights=hn(b),G.lightsStateVersion=st,G.needsLights&&(yt.ambientLightColor.value=O.state.ambient,yt.lightProbe.value=O.state.probe,yt.directionalLights.value=O.state.directional,yt.directionalLightShadows.value=O.state.directionalShadow,yt.spotLights.value=O.state.spot,yt.spotLightShadows.value=O.state.spotShadow,yt.rectAreaLights.value=O.state.rectArea,yt.ltc_1.value=O.state.rectAreaLTC1,yt.ltc_2.value=O.state.rectAreaLTC2,yt.pointLights.value=O.state.point,yt.pointLightShadows.value=O.state.pointShadow,yt.hemisphereLights.value=O.state.hemi,yt.directionalShadowMap.value=O.state.directionalShadowMap,yt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,yt.spotShadowMap.value=O.state.spotShadowMap,yt.spotLightMatrix.value=O.state.spotLightMatrix,yt.spotLightMap.value=O.state.spotLightMap,yt.pointShadowMap.value=O.state.pointShadowMap,yt.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Wt,G.uniformsList=null,Wt}function Se(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=tl.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function he(b,I){const k=Rt.get(b);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Dn(b,I,k,G,O){I.isScene!==!0&&(I=Qt),A.resetTextureUnits();const rt=I.fog,st=G.isMeshStandardMaterial?I.environment:null,dt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:qs,Mt=(G.isMeshStandardMaterial?V:E).get(G.envMap||st),kt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Wt=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),yt=!!k.morphAttributes.position,qt=!!k.morphAttributes.normal,ue=!!k.morphAttributes.color;let fe=ki;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fe=v.toneMapping);const Re=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,de=Re!==void 0?Re.length:0,Pt=Rt.get(G),Ti=p.state.lights;if(tt===!0&&(gt===!0||b!==x)){const Zn=b===x&&G.id===y;it.setState(G,b,Zn)}let pe=!1;G.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ti.state.version||Pt.outputColorSpace!==dt||O.isBatchedMesh&&Pt.batching===!1||!O.isBatchedMesh&&Pt.batching===!0||O.isBatchedMesh&&Pt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pt.instancing===!1||!O.isInstancedMesh&&Pt.instancing===!0||O.isSkinnedMesh&&Pt.skinning===!1||!O.isSkinnedMesh&&Pt.skinning===!0||O.isInstancedMesh&&Pt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pt.instancingMorph===!1&&O.morphTexture!==null||Pt.envMap!==Mt||G.fog===!0&&Pt.fog!==rt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==it.numPlanes||Pt.numIntersection!==it.numIntersection)||Pt.vertexAlphas!==kt||Pt.vertexTangents!==Wt||Pt.morphTargets!==yt||Pt.morphNormals!==qt||Pt.morphColors!==ue||Pt.toneMapping!==fe||Pt.morphTargetsCount!==de)&&(pe=!0):(pe=!0,Pt.__version=G.version);let ri=Pt.currentProgram;pe===!0&&(ri=Me(G,I,O));let Zr=!1,Ln=!1,Qs=!1;const we=ri.getUniforms(),di=Pt.uniforms;if(Tt.useProgram(ri.program)&&(Zr=!0,Ln=!0,Qs=!0),G.id!==y&&(y=G.id,Ln=!0),Zr||x!==b){Tt.buffers.depth.getReversed()?(nt.copy(b.projectionMatrix),A0(nt),C0(nt),we.setValue(U,"projectionMatrix",nt)):we.setValue(U,"projectionMatrix",b.projectionMatrix),we.setValue(U,"viewMatrix",b.matrixWorldInverse);const qi=we.map.cameraPosition;qi!==void 0&&qi.setValue(U,Ct.setFromMatrixPosition(b.matrixWorld)),B.logarithmicDepthBuffer&&we.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&we.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,Ln=!0,Qs=!0)}if(O.isSkinnedMesh){we.setOptional(U,O,"bindMatrix"),we.setOptional(U,O,"bindMatrixInverse");const Zn=O.skeleton;Zn&&(Zn.boneTexture===null&&Zn.computeBoneTexture(),we.setValue(U,"boneTexture",Zn.boneTexture,A))}O.isBatchedMesh&&(we.setOptional(U,O,"batchingTexture"),we.setValue(U,"batchingTexture",O._matricesTexture,A),we.setOptional(U,O,"batchingIdTexture"),we.setValue(U,"batchingIdTexture",O._indirectTexture,A),we.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&we.setValue(U,"batchingColorTexture",O._colorsTexture,A));const to=k.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0)&&Lt.update(O,k,ri),(Ln||Pt.receiveShadow!==O.receiveShadow)&&(Pt.receiveShadow=O.receiveShadow,we.setValue(U,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(di.envMap.value=Mt,di.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(di.envMapIntensity.value=I.environmentIntensity),Ln&&(we.setValue(U,"toneMappingExposure",v.toneMappingExposure),Pt.needsLights&&be(di,Qs),rt&&G.fog===!0&&at.refreshFogUniforms(di,rt),at.refreshMaterialUniforms(di,G,H,W,p.state.transmissionRenderTarget[b.id]),tl.upload(U,Se(Pt),di,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(tl.upload(U,Se(Pt),di,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&we.setValue(U,"center",O.center),we.setValue(U,"modelViewMatrix",O.modelViewMatrix),we.setValue(U,"normalMatrix",O.normalMatrix),we.setValue(U,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Zn=G.uniformsGroups;for(let qi=0,$i=Zn.length;qi<$i;qi++){const gh=Zn[qi];L.update(gh,ri),L.bind(gh,ri)}}return ri}function be(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function hn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,I,k){Rt.get(b.texture).__webglTexture=I,Rt.get(b.depthTexture).__webglTexture=k;const G=Rt.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,I){const k=Rt.get(b);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,k=0){R=b,w=I,T=k;let G=!0,O=null,rt=!1,st=!1;if(b){const Mt=Rt.get(b);if(Mt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(Mt.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(Mt.__hasExternalTextures)A.rebindTextures(b,Rt.get(b.texture).__webglTexture,Rt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const yt=b.depthTexture;if(Mt.__boundDepthTexture!==yt){if(yt!==null&&Rt.has(yt)&&(b.width!==yt.image.width||b.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(st=!0);const Wt=Rt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Wt[I])?O=Wt[I][k]:O=Wt[I],rt=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?O=Rt.get(b).__webglMultisampledFramebuffer:Array.isArray(Wt)?O=Wt[k]:O=Wt,P.copy(b.viewport),N.copy(b.scissor),z=b.scissorTest}else P.copy(ut).multiplyScalar(H).floor(),N.copy(Ut).multiplyScalar(H).floor(),z=Jt;if(Tt.bindFramebuffer(U.FRAMEBUFFER,O)&&G&&Tt.drawBuffers(b,O),Tt.viewport(P),Tt.scissor(N),Tt.setScissorTest(z),rt){const Mt=Rt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Mt.__webglTexture,k)}else if(st){const Mt=Rt.get(b.texture),kt=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,k||0,kt)}y=-1},this.readRenderTargetPixels=function(b,I,k,G,O,rt,st){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=Rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&st!==void 0&&(dt=dt[st]),dt){Tt.bindFramebuffer(U.FRAMEBUFFER,dt);try{const Mt=b.texture,kt=Mt.format,Wt=Mt.type;if(!B.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-G&&k>=0&&k<=b.height-O&&U.readPixels(I,k,G,O,Ot.convert(kt),Ot.convert(Wt),rt)}finally{const Mt=R!==null?Rt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(b,I,k,G,O,rt,st){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=Rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&st!==void 0&&(dt=dt[st]),dt){const Mt=b.texture,kt=Mt.format,Wt=Mt.type;if(!B.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=b.width-G&&k>=0&&k<=b.height-O){Tt.bindFramebuffer(U.FRAMEBUFFER,dt);const yt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.bufferData(U.PIXEL_PACK_BUFFER,rt.byteLength,U.STREAM_READ),U.readPixels(I,k,G,O,Ot.convert(kt),Ot.convert(Wt),0);const qt=R!==null?Rt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,qt);const ue=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await w0(U,ue,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,rt),U.deleteBuffer(yt),U.deleteSync(ue),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,I=null,k=0){b.isTexture!==!0&&(Mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-k),O=Math.floor(b.image.width*G),rt=Math.floor(b.image.height*G),st=I!==null?I.x:0,dt=I!==null?I.y:0;A.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,st,dt,O,rt),Tt.unbindTexture()},this.copyTextureToTexture=function(b,I,k=null,G=null,O=0){b.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],I=arguments[2],O=arguments[3]||0,k=null);let rt,st,dt,Mt,kt,Wt,yt,qt,ue;const fe=b.isCompressedTexture?b.mipmaps[O]:b.image;k!==null?(rt=k.max.x-k.min.x,st=k.max.y-k.min.y,dt=k.isBox3?k.max.z-k.min.z:1,Mt=k.min.x,kt=k.min.y,Wt=k.isBox3?k.min.z:0):(rt=fe.width,st=fe.height,dt=fe.depth||1,Mt=0,kt=0,Wt=0),G!==null?(yt=G.x,qt=G.y,ue=G.z):(yt=0,qt=0,ue=0);const Re=Ot.convert(I.format),de=Ot.convert(I.type);let Pt;I.isData3DTexture?(A.setTexture3D(I,0),Pt=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(A.setTexture2DArray(I,0),Pt=U.TEXTURE_2D_ARRAY):(A.setTexture2D(I,0),Pt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);const Ti=U.getParameter(U.UNPACK_ROW_LENGTH),pe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ri=U.getParameter(U.UNPACK_SKIP_PIXELS),Zr=U.getParameter(U.UNPACK_SKIP_ROWS),Ln=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,fe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,kt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Wt);const Qs=b.isDataArrayTexture||b.isData3DTexture,we=I.isDataArrayTexture||I.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const di=Rt.get(b),to=Rt.get(I),Zn=Rt.get(di.__renderTarget),qi=Rt.get(to.__renderTarget);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,Zn.__webglFramebuffer),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let $i=0;$i<dt;$i++)Qs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.get(b).__webglTexture,O,Wt+$i),b.isDepthTexture?(we&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.get(I).__webglTexture,O,ue+$i),U.blitFramebuffer(Mt,kt,rt,st,yt,qt,rt,st,U.DEPTH_BUFFER_BIT,U.NEAREST)):we?U.copyTexSubImage3D(Pt,O,yt,qt,ue+$i,Mt,kt,rt,st):U.copyTexSubImage2D(Pt,O,yt,qt,ue+$i,Mt,kt,rt,st);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else we?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Pt,O,yt,qt,ue,rt,st,dt,Re,de,fe.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(Pt,O,yt,qt,ue,rt,st,dt,Re,fe.data):U.texSubImage3D(Pt,O,yt,qt,ue,rt,st,dt,Re,de,fe):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,yt,qt,rt,st,Re,de,fe.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,yt,qt,fe.width,fe.height,Re,fe.data):U.texSubImage2D(U.TEXTURE_2D,O,yt,qt,rt,st,Re,de,fe);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ti),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ri),U.pixelStorei(U.UNPACK_SKIP_ROWS,Zr),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ln),O===0&&I.generateMipmaps&&U.generateMipmap(Pt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(b,I,k=null,G=null,O=0){return b.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,b=arguments[2],I=arguments[3],O=arguments[4]||0),Mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,I,k,G,O)},this.initRenderTarget=function(b){Rt.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Tt.unbindTexture()},this.resetState=function(){w=0,T=0,R=null,Tt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}class Oy extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class bm extends Zs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const pl=new F,ml=new F,nd=new Ae,lo=new uh,Na=new Jo,pc=new F,id=new F;class By extends un{constructor(t=new tn,e=new bm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)pl.fromBufferAttribute(e,i-1),ml.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=pl.distanceTo(ml);t.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=s,t.ray.intersectsSphere(Na)===!1)return;nd.copy(i).invert(),lo.copy(t.ray).applyMatrix4(nd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=u.getX(g),M=u.getX(g+1),S=Fa(this,t,lo,l,p,M);S&&e.push(S)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),p=Fa(this,t,lo,l,g,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=Fa(this,t,lo,l,g,g+1);p&&e.push(p)}if(this.isLineLoop){const g=Fa(this,t,lo,l,_-1,d);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fa(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(pl.fromBufferAttribute(o,i),ml.fromBufferAttribute(o,s),e.distanceSqToSegment(pl,ml,pc,id)>n)return;pc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(pc);if(!(l<t.near||l>t.far))return{distance:l,point:id.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const rd=new F,sd=new F;class zy extends By{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)rd.fromBufferAttribute(e,i),sd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rd.distanceTo(sd);t.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ky extends Zs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const od=new Ae,Ru=new uh,Oa=new Jo,Ba=new F;class mc extends un{constructor(t=new tn,e=new ky){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=s,t.ray.intersectsSphere(Oa)===!1)return;od.copy(i).invert(),Ru.copy(t.ray).applyMatrix4(od);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=h,g=d;_<g;_++){const m=c.getX(_);Ba.fromBufferAttribute(f,m),ad(Ba,m,l,i,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let _=h,g=d;_<g;_++)Ba.fromBufferAttribute(f,_),ad(Ba,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ad(r,t,e,n,i,s,o){const a=Ru.distanceSqToPoint(r);if(a<e){const l=new F;Ru.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class bl extends tn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Ne(s,3)),this.setAttribute("normal",new Ne(s.slice(),3)),this.setAttribute("uv",new Ne(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const S=new F,v=new F,C=new F;for(let w=0;w<e.length;w+=3)d(e[w+0],S),d(e[w+1],v),d(e[w+2],C),l(S,v,C,M)}function l(M,S,v,C){const w=C+1,T=[];for(let R=0;R<=w;R++){T[R]=[];const y=M.clone().lerp(v,R/w),x=S.clone().lerp(v,R/w),P=w-R;for(let N=0;N<=P;N++)N===0&&R===w?T[R][N]=y:T[R][N]=y.clone().lerp(x,N/P)}for(let R=0;R<w;R++)for(let y=0;y<2*(w-R)-1;y++){const x=Math.floor(y/2);y%2===0?(h(T[R][x+1]),h(T[R+1][x]),h(T[R][x])):(h(T[R][x+1]),h(T[R+1][x+1]),h(T[R+1][x]))}}function c(M){const S=new F;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(M),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function u(){const M=new F;for(let S=0;S<s.length;S+=3){M.x=s[S+0],M.y=s[S+1],M.z=s[S+2];const v=m(M)/2/Math.PI+.5,C=p(M)/Math.PI+.5;o.push(v,1-C)}_(),f()}function f(){for(let M=0;M<o.length;M+=6){const S=o[M+0],v=o[M+2],C=o[M+4],w=Math.max(S,v,C),T=Math.min(S,v,C);w>.9&&T<.1&&(S<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function d(M,S){const v=M*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function _(){const M=new F,S=new F,v=new F,C=new F,w=new Nt,T=new Nt,R=new Nt;for(let y=0,x=0;y<s.length;y+=9,x+=6){M.set(s[y+0],s[y+1],s[y+2]),S.set(s[y+3],s[y+4],s[y+5]),v.set(s[y+6],s[y+7],s[y+8]),w.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),R.set(o[x+4],o[x+5]),C.copy(M).add(S).add(v).divideScalar(3);const P=m(C);g(w,x+0,M,P),g(T,x+2,S,P),g(R,x+4,v,P)}}function g(M,S,v,C){C<0&&M.x===1&&(o[S]=M.x-1),v.x===0&&v.z===0&&(o[S]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bl(t.vertices,t.indices,t.radius,t.details)}}class dh extends bl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new dh(t.radius,t.detail)}}class ph extends bl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ph(t.radius,t.detail)}}class mh extends tn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new F,h=new F,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const M=[],S=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){const w=C/e;f.x=-t*Math.cos(i+w*s)*Math.sin(o+S*a),f.y=t*Math.cos(o+S*a),f.z=t*Math.sin(i+w*s)*Math.sin(o+S*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),m.push(w+v,1-S),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const S=u[p][M+1],v=u[p][M],C=u[p+1][M],w=u[p+1][M+1];(p!==0||o>0)&&d.push(S,v,w),(p!==n-1||l<Math.PI)&&d.push(v,C,w)}this.setIndex(d),this.setAttribute("position",new Ne(_,3)),this.setAttribute("normal",new Ne(g,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _l extends tn{constructor(t=1,e=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],u=[],f=new F,h=new F,d=new F,_=new F,g=new F,m=new F,p=new F;for(let S=0;S<=n;++S){const v=S/n*s*Math.PI*2;M(v,s,o,t,d),M(v+.01,s,o,t,_),m.subVectors(_,d),p.addVectors(_,d),g.crossVectors(m,p),p.crossVectors(g,m),g.normalize(),p.normalize();for(let C=0;C<=i;++C){const w=C/i*Math.PI*2,T=-e*Math.cos(w),R=e*Math.sin(w);f.x=d.x+(T*p.x+R*g.x),f.y=d.y+(T*p.y+R*g.y),f.z=d.z+(T*p.z+R*g.z),l.push(f.x,f.y,f.z),h.subVectors(f,d).normalize(),c.push(h.x,h.y,h.z),u.push(S/n),u.push(C/i)}}for(let S=1;S<=n;S++)for(let v=1;v<=i;v++){const C=(i+1)*(S-1)+(v-1),w=(i+1)*S+(v-1),T=(i+1)*S+v,R=(i+1)*(S-1)+v;a.push(C,w,R),a.push(w,T,R)}this.setIndex(a),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(u,2));function M(S,v,C,w,T){const R=Math.cos(S),y=Math.sin(S),x=C/v*S,P=Math.cos(x);T.x=w*(2+P)*.5*R,T.y=w*(2+P)*y*.5,T.z=w*Math.sin(x)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Hy extends ln{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class wm extends un{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const _c=new Ae,ld=new F,cd=new F;class Vy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hh,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ld.setFromMatrixPosition(t.matrixWorld),e.position.copy(ld),cd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cd),e.updateMatrixWorld(),_c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_c)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ud=new Ae,co=new F,gc=new F;class Gy extends Vy{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),co.setFromMatrixPosition(t.matrixWorld),n.position.copy(co),gc.copy(n.position),gc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(gc),n.updateMatrixWorld(),i.makeTranslation(-co.x,-co.y,-co.z),ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud)}}class vc extends wm{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Wy extends wm{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Am{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=hd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function hd(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);const Cm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Xy=new xm(-1,1,1,-1,0,1);class Yy extends tn{constructor(){super(),this.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ne([0,2,0,0,2,0],2))}}const qy=new Yy;class _h{constructor(t){this._mesh=new Ze(qy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Xy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Rm extends Js{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ln?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Xs.clone(t.uniforms),this.material=new ln({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new _h(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class fd extends Js{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class $y extends Js{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ky{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Nt);this._width=n.width,this._height=n.height,e=new fi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rm(Cm),this.copyPass.material.blending=zi,this.clock=new Am}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}fd!==void 0&&(o instanceof fd?n=!0:o instanceof $y&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Zy extends Js{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const jy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ys extends Js{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Nt(t.x,t.y):new Nt(256,256),this.clearColor=new Xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new fi(s,o,{type:Hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new fi(s,o,{type:Hi});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new fi(s,o,{type:Hi});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=jy;this.highPassUniforms=Xs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ln({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Nt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Cm;this.copyUniforms=Xs.clone(u.uniforms),this.blendMaterial=new ln({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:_i,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xt,this.oldClearAlpha=1,this.basic=new El,this.fsQuad=new _h(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Nt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ln({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Nt(.5,.5)},direction:{value:new Nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ln({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ys.BlurDirectionX=new Nt(1,0);Ys.BlurDirectionY=new Nt(0,1);const Jy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Qy extends Js{constructor(){super();const t=Jy;this.uniforms=Xs.clone(t.uniforms),this.material=new Hy({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new _h(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$p?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kp&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Pm=`
  const float PI = 3.14159265;
  const float TAU = 6.2831853;

  vec3 sphere(float u, float v) {
    float theta = u * PI;
    float phi = v * TAU;
    float n = sin(theta * 6.0 + v * 8.0) * 0.04;
    return vec3(sin(theta) * cos(phi), cos(theta), sin(theta) * sin(phi)) * (1.52 + n);
  }

  vec3 torus(float u, float v) {
    float theta = u * TAU;
    float phi = v * TAU;
    float R = 1.22;
    float r = 0.46 + 0.06 * sin(phi * 3.0);
    return vec3(
      (R + r * cos(theta)) * cos(phi),
      r * sin(theta) * 1.2,
      (R + r * cos(theta)) * sin(phi)
    );
  }

  vec3 knot(float u, float v) {
    float t = u * TAU;
    float p = 2.0;
    float q = 3.0;
    vec3 core = vec3(
      sin(p * t) * (1.7 + cos(q * t)),
      sin(q * t) * 1.08,
      cos(p * t) * (1.7 + cos(q * t))
    ) * 0.54;
    float a = v * TAU;
    vec3 n = normalize(vec3(cos(p * t), 0.28, sin(p * t)));
    vec3 tanv = normalize(vec3(p * cos(p * t), q * cos(q * t), -p * sin(p * t)));
    vec3 b = normalize(cross(tanv, n));
    return core + (n * cos(a) + b * sin(a)) * 0.22;
  }

  vec3 helix(float u, float v) {
    float t = (v - 0.5) * 9.4;
    float strand = step(0.5, u);
    float off = strand * PI;
    float r = 0.64 + 0.14 * sin(t * 2.2 + u * TAU);
    vec3 a = vec3(r * cos(t * 2.45 + off), t * 0.4, r * sin(t * 2.45 + off));
    float rung = pow(abs(sin(u * PI * 14.0)), 8.0);
    a.x *= 1.0 - rung * 0.35;
    a.z *= 1.0 - rung * 0.35;
    return a;
  }

  vec3 crystal(float u, float v) {
    vec3 s = sphere(u, v);
    vec3 a = abs(s);
    float m = max(a.x, max(a.y, a.z));
    vec3 cube = (s / max(m, 0.0008)) * 1.22;
    float spikes = pow(abs(sin(u * PI * 5.0) * sin(v * PI * 7.0)), 2.2);
    return mix(cube, normalize(s) * (1.18 + spikes * 0.72), 0.5);
  }

  vec3 mobius(float u, float v) {
    float a = u * TAU;
    float t = (v - 0.5) * 2.0;
    float c = 0.55 * t * cos(a * 0.5);
    float x = (1.05 + c) * cos(a);
    float y = (1.05 + c) * sin(a);
    float z = 0.55 * t * sin(a * 0.5);
    return vec3(x, z * 1.15, y) * 1.18;
  }

  vec3 galaxy(float u, float v) {
    float arm = u * TAU * 2.6 + v * 5.5;
    float r = 0.2 + v * 2.15;
    float y = sin(u * TAU * 3.0 + v * 9.0) * 0.08 * (1.0 - v);
    return vec3(r * cos(arm), y, r * sin(arm));
  }

  vec3 morph(float u, float v, float p) {
    float x = clamp(p, 0.0, 0.999) * 6.0;
    float i = floor(x);
    float f = smoothstep(0.0, 1.0, fract(x));
    vec3 a;
    vec3 b;
    if (i < 0.5) { a = sphere(u, v); b = torus(u, v); }
    else if (i < 1.5) { a = torus(u, v); b = knot(u, v); }
    else if (i < 2.5) { a = knot(u, v); b = helix(u, v); }
    else if (i < 3.5) { a = helix(u, v); b = crystal(u, v); }
    else if (i < 4.5) { a = crystal(u, v); b = mobius(u, v); }
    else { a = mobius(u, v); b = galaxy(u, v); }
    return mix(a, b, f);
  }

  float hash13(vec3 p) {
    return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
  }
`,dd=`
  varying vec3 vPos;
  varying vec3 vView;
  varying float vLift;
  varying float vFres;
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uHover;
  uniform float uShock;
  uniform float uAudio;
  ${Pm}

  void main() {
    vec2 grid = uv;
    vec3 pos = morph(grid.x, grid.y, uProgress);
    float n = hash13(pos * 2.4 + uTime * 0.12);
    pos += normalize(pos + 0.0001) * (n - 0.5) * 0.07;
    vec3 pull = vec3(uMouse.x * 2.6, uMouse.y * 1.7, 0.85);
    vec3 d = pull - pos;
    float falloff = exp(-dot(d, d) * 0.32) * uHover * 0.62;
    pos += d * falloff;
    float rad = length(pos);
    float shock = exp(-abs(rad - uShock * 3.8) * 4.2) * uShock;
    pos += normalize(pos + 0.0001) * (shock * 0.95 + uAudio * 0.18);
    vLift = falloff + shock;
    vec4 world = modelMatrix * vec4(pos, 1.0);
    vPos = world.xyz;
    vView = cameraPosition - world.xyz;
    vFres = 0.0;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,pd=`
  varying vec3 vPos;
  varying vec3 vView;
  varying float vLift;
  uniform float uProgress;
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform float uShock;

  void main() {
    vec3 n = normalize(cross(dFdx(vPos), dFdy(vPos)));
    vec3 v = normalize(vView);
    vec3 l1 = normalize(vec3(0.6, 0.85, 0.28));
    vec3 l2 = normalize(vec3(-0.7, 0.15, 0.65));
    float ndv = max(dot(n, v), 0.0);
    float fres = pow(1.0 - ndv, 2.4);
    float diff = max(dot(n, l1), 0.0) * 0.7 + max(dot(n, l2), 0.0) * 0.38;
    float spec = pow(max(dot(reflect(-l1, n), v), 0.0), 48.0);
    vec3 irid = 0.5 + 0.5 * cos(vec3(0.0, 0.33, 0.67) * TAU_PLACEHOLDER + ndv * 9.0 + uProgress * 6.283 + vPos.y * 0.8);
    irid = mix(irid, mix(uColorA, uColorB, fres), 0.55);
    irid = mix(irid, uColorC, 0.35 + 0.35 * sin(uProgress * 6.283 + uTime * 0.35));
    vec3 col = irid * (0.05 + diff * 0.55);
    col += vec3(1.1, 1.04, 0.95) * spec * 0.7;
    col += fres * uColorB * 0.7;
    col += uColorA * pow(fres, 3.0) * 0.35;
    float scan = pow(abs(sin(vPos.y * 5.0 - uTime * 2.4)), 28.0);
    col += uColorB * scan * 0.16;
    col += uColorC * vLift * 0.9;
    col += uColorA * uShock * 0.28;
    float fog = 1.0 - exp(-length(vView) * 0.028);
    col = mix(col, vec3(0.02, 0.021, 0.03), fog);
    float alpha = mix(0.88, 0.98, fres);
    gl_FragColor = vec4(col, alpha);
  }
`.replace("TAU_PLACEHOLDER","6.2831853"),md=`
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uSize;
  uniform float uShock;
  uniform float uAudio;
  varying float vAlpha;
  varying float vMix;
  ${Pm}

  void main() {
    vec3 pos = morph(position.x, position.y, uProgress);
    pos += normal * (0.05 * sin(uTime * 0.9 + position.x * 22.0) + uShock * 1.6 + uAudio * 0.25);
    vec3 pull = vec3(uMouse.x * 2.3, uMouse.y * 1.5, 0.6);
    pos += (pull - pos) * exp(-dot(pull - pos, pull - pos) * 0.38) * 0.4;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * (1.15 + 0.45 * sin(uTime + position.x * 30.0) + uShock * 1.4) * (140.0 / -mv.z);
    vAlpha = clamp(1.9 / -mv.z, 0.1, 1.0);
    vMix = fract(uProgress * 6.0);
  }
`,_d=`
  varying float vAlpha;
  varying float vMix;
  uniform vec3 uColorA;
  uniform vec3 uColorB;

  void main() {
    vec2 p = gl_PointCoord * 2.0 - 1.0;
    float d = dot(p, p);
    if (d > 1.0) discard;
    float glow = pow(1.0 - d, 2.4);
    vec3 col = mix(uColorA, uColorB, vMix);
    gl_FragColor = vec4(col, glow * vAlpha * 0.9);
  }
`,tE=`
  uniform float uTime;
  varying float vA;
  void main() {
    vec3 p = position;
    p.xy += vec2(sin(uTime * 0.06 + position.z), cos(uTime * 0.045 + position.x)) * 0.35;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (1.2 + 0.8 * sin(uTime * 2.0 + position.x)) * (90.0 / -mv.z);
    vA = 0.28 + 0.72 * fract(sin(dot(position.xy, vec2(12.9, 78.2))) * 43758.5);
  }
`,eE=`
  varying float vA;
  void main() {
    vec2 p = gl_PointCoord - 0.5;
    float d = length(p);
    if (d > 0.5) discard;
    gl_FragColor = vec4(0.92, 0.94, 1.0, (1.0 - d * 2.0) * vA * 0.62);
  }
`,nE=`
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,iE=`
  varying vec3 vWorld;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uTime;

  void main() {
    vec2 pz = vWorld.xz;
    float g1 = min(abs(fract(pz.x * 0.28) - 0.5), abs(fract(pz.y * 0.28) - 0.5));
    float g2 = min(abs(fract(pz.x * 0.07) - 0.5), abs(fract(pz.y * 0.07) - 0.5));
    float line = smoothstep(0.035, 0.0, g1) + smoothstep(0.02, 0.0, g2) * 0.65;
    float pulse = 0.7 + 0.3 * sin(uTime * 0.8 + pz.y * 0.15);
    float fade = 1.0 - smoothstep(3.5, 26.0, length(pz));
    vec3 col = mix(uColorA, uColorB, 0.45) * line * pulse;
    gl_FragColor = vec4(col, clamp(line, 0.0, 1.0) * fade * 0.5);
  }
`,rE=`
  varying vec3 vPos;
  void main() {
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,sE=`
  varying vec3 vPos;
  uniform float uTime;
  uniform float uProgress;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;

  float hash(vec3 p) {
    return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
  }
  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
      mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
      f.z
    );
  }
  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.03;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 dir = normalize(vPos);
    float n = fbm(dir * 2.4 + vec3(uTime * 0.03, uProgress, -uTime * 0.02));
    float n2 = fbm(dir * 5.0 - uTime * 0.04);
    float m = smoothstep(0.32, 0.82, n);
    vec3 col = mix(uColorA, uColorB, n) + uColorC * n2 * 0.35;
    float rim = pow(1.0 - abs(dir.y), 1.4);
    gl_FragColor = vec4(col * 0.55, m * rim * 0.12);
  }
`,oE=`
  uniform float uTime;
  uniform float uProgress;
  varying float vAlong;
  void main() {
    vec3 p = position;
    float t = uTime * 0.35 + uProgress * 4.0;
    p *= 1.0 + 0.04 * sin(t + position.x * 3.0);
    vAlong = uv.x;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,aE=`
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uTime;
  varying float vAlong;
  void main() {
    float dash = pow(abs(sin(vAlong * 40.0 - uTime * 6.0)), 4.0);
    vec3 col = mix(uColorA, uColorB, dash);
    gl_FragColor = vec4(col * 0.7, 0.32 + dash * 0.28);
  }
`,lE=`
  uniform float uTime;
  uniform float uAudio;
  uniform float uShock;
  void main() {
    vec3 p = position * (1.0 + 0.08 * sin(uTime * 3.0) + uAudio * 0.25 + uShock * 0.3);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,cE=`
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uTime;
  void main() {
    vec3 col = mix(uColorA, uColorB, 0.5 + 0.5 * sin(uTime * 2.0));
    gl_FragColor = vec4(col * 0.55, 0.55);
  }
`,uE={uniforms:{tDiffuse:{value:null},uTime:{value:0},uMouse:{value:{x:0,y:0}},uProgress:{value:0},uShock:{value:0},uRes:{value:{x:1,y:1}},uAberration:{value:.0028}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    precision highp float;
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uProgress;
    uniform float uShock;
    uniform vec2 uRes;
    uniform float uAberration;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv;
      vec2 c = uv - 0.5;
      float dist = length(c);
      uv = 0.5 + c * (1.0 + dist * dist * (0.085 + uShock * 0.12));
      vec2 dir = normalize(c + uMouse * 0.12 + 0.0001);
      float ab = uAberration + uShock * 0.012 + abs(sin(uProgress * 6.283)) * 0.0015;
      float r = texture2D(tDiffuse, uv + dir * ab).r;
      float g = texture2D(tDiffuse, uv).g;
      float b = texture2D(tDiffuse, uv - dir * ab).b;
      vec3 col = vec3(r, g, b);
      float vig = smoothstep(1.05, 0.22, dist);
      col *= vig;
      float scan = 0.96 + 0.04 * sin(uv.y * uRes.y * 1.4 + uTime * 8.0);
      col *= scan;
      float n = hash(uv * uRes + uTime * 40.0);
      col += (n - 0.5) * 0.03;
      float flash = uShock * 0.08;
      col += vec3(flash);
      col = mix(col, col * vec3(1.04, 1.0, 0.96), 0.35);
      gl_FragColor = vec4(col, 1.0);
    }
  `},za=["SPHERE","TORUS","KNOT","HELIX","CRYSTAL","MÖBIUS","GALAXY"],Nn=[{a:"#6ee7ff",b:"#d6ff3f",c:"#ff5a36"},{a:"#ff7ad9",b:"#ffe08a",c:"#79e7ff"},{a:"#b38cff",b:"#79e7ff",c:"#ff8bd2"},{a:"#d6ff3f",b:"#ff7a3c",c:"#9bffce"},{a:"#c8f4ff",b:"#ffffff",c:"#7ad7ff"},{a:"#ff5a36",b:"#ffd36e",c:"#ff8ad4"},{a:"#7c5cff",b:"#79e7ff",c:"#ff5a36"}];function hE(r,t){const e=new tn,n=[],i=[],s=[];for(let a=0;a<=r;a++)for(let l=0;l<=t;l++)i.push(a/r,l/t),n.push(0,0,0);const o=t+1;for(let a=0;a<r;a++)for(let l=0;l<t;l++){const c=a*o+l,u=c+o;s.push(c,u,c+1,c+1,u,u+1)}return e.setAttribute("position",new Ne(n,3)),e.setAttribute("uv",new Ne(i,2)),e.setIndex(s),e}function gd(r){const t=new tn,e=new Float32Array(r*3),n=new Float32Array(r*3);for(let i=0;i<r;i++)e[i*3]=Math.random(),e[i*3+1]=Math.random(),e[i*3+2]=0,n[i*3]=Math.random()*2-1,n[i*3+1]=Math.random()*2-1,n[i*3+2]=Math.random()*2-1;return t.setAttribute("position",new Rn(e,3)),t.setAttribute("normal",new Rn(n,3)),t}function Pi(r,t,e,n={}){return new ln({vertexShader:r,fragmentShader:t,uniforms:e,transparent:!0,toneMapped:!1,...n})}class fE{constructor(t){this.canvas=t,this.clock=new Am,this.progress=0,this.targetProgress=0,this.mouse=new Nt,this.targetMouse=new Nt,this.hover=0,this.dragging=!1,this.drag=new Nt,this.shock=0,this.audio=0,this.intro=0,this.scrollVel=0,this.lastProgress=0,this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.mobile=innerWidth<800,this.shapeName=za[0],this.shapeIndex=0,this.palette={a:new Xt(Nn[0].a),b:new Xt(Nn[0].b),c:new Xt(Nn[0].c)},this.tmpA=new Xt,this.tmpB=new Xt,this.tmpC=new Xt,this.renderer=new Fy({canvas:t,antialias:!this.mobile,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.mobile?1.1:1.5)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=zn,this.renderer.toneMapping=ki,this.renderer.setClearColor(328966,1),this.scene=new Oy,this.camera=new Hn(42,innerWidth/innerHeight,.08,120),this.camera.position.set(0,.25,5.4);const e=this.mobile?48:110;this.uniforms={uProgress:{value:0},uTime:{value:0},uMouse:{value:new Nt},uHover:{value:0},uShock:{value:0},uAudio:{value:0},uColorA:{value:new Xt(Nn[0].a)},uColorB:{value:new Xt(Nn[0].b)},uColorC:{value:new Xt(Nn[0].c)},uSize:{value:this.mobile?.85:1.12}},this.mesh=new Ze(hE(e,e),Pi(dd,pd,this.uniforms,{side:Wn,depthWrite:!1})),this.scene.add(this.mesh),this.wireUniforms=Xs.clone(this.uniforms),this.wire=new Ze(this.mesh.geometry,Pi(dd,pd,this.wireUniforms,{side:Wn,wireframe:!0,depthWrite:!1})),this.wire.scale.setScalar(1.018),this.scene.add(this.wire);const n=this.mobile?1400:4800;this.particles=new mc(gd(n),Pi(md,_d,this.uniforms,{depthWrite:!1,blending:_i})),this.scene.add(this.particles);const i=this.mobile?250:700;this.sparks=new mc(gd(i),Pi(md,_d,this.uniforms,{depthWrite:!1,blending:_i})),this.sparks.material.uniforms=this.uniforms,this.sparks.scale.setScalar(1.35),this.scene.add(this.sparks);const s=this.mobile?700:2200,o=new Float32Array(s*3);for(let g=0;g<s;g++)o[g*3]=(Math.random()-.5)*50,o[g*3+1]=(Math.random()-.5)*28,o[g*3+2]=(Math.random()-.5)*36-6;const a=new tn;a.setAttribute("position",new Rn(o,3)),this.stars=new mc(a,Pi(tE,eE,this.uniforms,{depthWrite:!1,blending:_i})),this.scene.add(this.stars),this.grid=new Ze(new ta(70,70,1,1),Pi(nE,iE,this.uniforms,{depthWrite:!1,blending:_i,side:Wn})),this.grid.rotation.x=-Math.PI/2,this.grid.position.y=-2.35,this.scene.add(this.grid),this.mobile||(this.nebula=new Ze(new mh(32,32,24),Pi(rE,sE,this.uniforms,{side:Sn,depthWrite:!1,blending:_i})),this.scene.add(this.nebula)),this.ribbons=new ys;const l=Pi(oE,aE,this.uniforms,{depthWrite:!1,blending:_i,side:Wn}),c=new Ze(new _l(1.85,.012,this.mobile?80:220,6,2,5),l),u=new Ze(new _l(2.05,.01,this.mobile?80:220,6,3,7),l);u.rotation.x=Math.PI/2,this.ribbons.add(c,u),this.scene.add(this.ribbons),this.core=new Ze(new dh(.16,1),Pi(lE,cE,this.uniforms,{blending:_i,depthWrite:!1})),this.scene.add(this.core),this.satellites=new ys;const f=new ph(.055,0),h=new El({color:"#d6ff3f",transparent:!0,opacity:.9});this.satCount=this.mobile?7:16;for(let g=0;g<this.satCount;g++)this.satellites.add(new Ze(f,h.clone()));this.scene.add(this.satellites);const d=new Float32Array(this.satCount*6),_=new tn;_.setAttribute("position",new Rn(d,3)),this.fieldLines=new zy(_,new bm({color:"#79e7ff",transparent:!0,opacity:.22})),this.scene.add(this.fieldLines),this.key=new vc("#79e7ff",14,20),this.fill=new vc("#ff5a36",9,18),this.mouseLight=new vc("#d6ff3f",8,12),this.key.position.set(3,2.2,4),this.fill.position.set(-3.2,-1.2,2.2),this.scene.add(this.key,this.fill,this.mouseLight,new Wy("#8aa4b8",.28)),this.composer=new Ky(this.renderer),this.composer.addPass(new Zy(this.scene,this.camera)),this.bloom=new Ys(new Nt(innerWidth,innerHeight),this.mobile?.1:.14,.38,.34),this.composer.addPass(this.bloom),this.composer.addPass(new Qy),this.fx=new Rm(uE),this.fx.uniforms.uRes.value=new Nt(innerWidth,innerHeight),this.fx.uniforms.uMouse.value=new Nt,this.composer.addPass(this.fx),this._onPointer=this.onPointer.bind(this),this._onDown=this.onDown.bind(this),this._onUp=()=>{this.dragging=!1},window.addEventListener("pointermove",this._onPointer),window.addEventListener("pointerdown",this._onDown),window.addEventListener("pointerup",this._onUp),window.addEventListener("resize",()=>this.resize())}onPointer(t){const e=t.clientX/innerWidth*2-1,n=-(t.clientY/innerHeight)*2+1;this.targetMouse.set(e,n),this.hover=1,this.dragging&&(this.drag.x+=t.movementX*.0045,this.drag.y+=t.movementY*.0045)}onDown(t){this.dragging=!0,!(t.target.closest&&t.target.closest("a, button"))&&(this.shock=1)}pulse(){this.shock=1}setProgress(t){this.targetProgress=Math.min(Math.max(t,0),1)}setAudio(t){this.audio=t}currentShape(){const t=Math.min(za.length-1,Math.round(Math.min(this.progress,1)*(za.length-1)));return this.shapeIndex=t,this.shapeName=za[t],this.shapeName}resize(){const t=innerWidth,e=innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer.setSize(t,e),this.bloom.setSize(t,e),this.fx.uniforms.uRes.value.set(t,e)}render(){const t=Math.min(.05,this.clock.getDelta()),e=this.clock.elapsedTime;this.progress+=(this.targetProgress-this.progress)*(this.reduced?1:.07),this.scrollVel+=(this.progress-this.lastProgress-this.scrollVel)*.2,this.lastProgress=this.progress,this.mouse.lerp(this.targetMouse,.09),this.hover+=((this.dragging?1:.4)-this.hover)*.05,this.shock+=(0-this.shock)*(this.reduced?1:.045),this.intro=Math.min(1,this.intro+t*.42);const n=this.progress,i=n*6,s=Math.min(6,Math.floor(i)),o=Math.min(6,s+1),a=i-s;this.palette.a.set(Nn[s].a).lerp(this.tmpA.set(Nn[o].a),a),this.palette.b.set(Nn[s].b).lerp(this.tmpB.set(Nn[o].b),a),this.palette.c.set(Nn[s].c).lerp(this.tmpC.set(Nn[o].c),a),this.uniforms.uProgress.value=n,this.uniforms.uTime.value=e,this.uniforms.uMouse.value.copy(this.mouse),this.uniforms.uHover.value=this.hover,this.uniforms.uShock.value=this.shock,this.uniforms.uAudio.value=this.audio,this.uniforms.uColorA.value.copy(this.palette.a),this.uniforms.uColorB.value.copy(this.palette.b),this.uniforms.uColorC.value.copy(this.palette.c),this.wireUniforms.uProgress.value=Math.max(0,n-.065),this.wireUniforms.uTime.value=e,this.wireUniforms.uMouse.value.copy(this.mouse),this.wireUniforms.uHover.value=this.hover,this.wireUniforms.uShock.value=this.shock,this.wireUniforms.uAudio.value=this.audio,this.wireUniforms.uColorA.value.copy(this.palette.a),this.wireUniforms.uColorB.value.copy(this.palette.b),this.wireUniforms.uColorC.value.copy(this.palette.c);const l=1-Math.pow(1-this.intro,3),c=n*Math.PI*1.7+this.drag.x+Math.sin(e*.12)*.08,u=T0.lerp(4.6,6.5,l)-Math.sin(n*Math.PI)*1.15-this.shock*.2,f=.15+Math.sin(n*Math.PI)*1.25-this.drag.y;this.camera.position.x=Math.sin(c)*u+this.mouse.x*.55,this.camera.position.z=Math.cos(c)*u,this.camera.position.y=f+this.mouse.y*.32,this.camera.fov=38+Math.sin(n*Math.PI)*8+this.shock*4,this.camera.updateProjectionMatrix(),this.camera.lookAt(0,Math.sin(n*Math.PI)*.2,0),this.camera.rotateZ(this.scrollVel*1.8+this.mouse.x*.018),this.mesh.rotation.y=e*.07+this.drag.x*.45,this.mesh.rotation.x=Math.sin(e*.11)*.08,this.wire.rotation.copy(this.mesh.rotation),this.particles.rotation.y=this.mesh.rotation.y*.82,this.sparks.rotation.y=-this.mesh.rotation.y*.5,this.stars.rotation.y=e*.014,this.ribbons.rotation.y=e*.18,this.ribbons.rotation.x=e*.07,this.ribbons.scale.setScalar(1+this.audio*.12+this.shock*.2),this.core.rotation.y=e*.6,this.core.rotation.x=e*.4,this.grid.position.y=-2.35+Math.sin(n*Math.PI)*.15,this.key.color.copy(this.palette.a),this.fill.color.copy(this.palette.c),this.mouseLight.color.copy(this.palette.b),this.mouseLight.position.set(this.mouse.x*4,this.mouse.y*2.5,3);const h=this.satellites.children,d=this.fieldLines.geometry.attributes.position.array;for(let _=0;_<h.length;_++){const g=_/h.length,m=e*.4+g*Math.PI*2,p=2.15+Math.sin(e+g*8)*.12,M=(g-.5)*3.4,S=Math.cos(m)*p,v=Math.sin(m)*p,C=Math.cos(m*1.7)*(.75+g),w=M,T=Math.sin(m*1.7)*(.75+g),R=S*(1-n)+C*n,y=Math.sin(m+e)*.28*(1-n)+w*n,x=v*(1-n)+T*n;h[_].position.set(R,y,x),h[_].material.color.copy(_%2?this.palette.b:this.palette.a),d[_*6]=0,d[_*6+1]=0,d[_*6+2]=0,d[_*6+3]=R,d[_*6+4]=y,d[_*6+5]=x}this.fieldLines.geometry.attributes.position.needsUpdate=!0,this.fieldLines.material.color.copy(this.palette.a),this.fx.uniforms.uTime.value=e,this.fx.uniforms.uProgress.value=n,this.fx.uniforms.uShock.value=this.shock,this.fx.uniforms.uMouse.value.copy(this.mouse),this.fx.uniforms.uAberration.value=.0024+Math.abs(this.scrollVel)*.08+this.shock*.01,this.currentShape(),this.composer.render()}dispose(){window.removeEventListener("pointermove",this._onPointer),window.removeEventListener("pointerdown",this._onDown),window.removeEventListener("pointerup",this._onUp)}}const dE=`
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`,pE=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uMouse;
uniform vec2 uRes;
uniform float uTime;
uniform float uHover;
uniform float uShock;
uniform vec3 uTint;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec2 uv = vUv;
  vec2 mouse = uMouse;
  vec2 delta = uv - mouse;
  float aspect = uRes.x / max(uRes.y, 1.0);
  float dist = length(delta * vec2(aspect, 1.0));
  float fall = exp(-dist * 5.4) * uHover;
  float wave = sin(dist * 52.0 - uTime * 5.0);
  float idle = 0.12 + uHover * 0.88;
  uv += normalize(delta + 0.0001) * wave * (0.07 * fall + uShock * 0.04);
  uv.x += sin(uv.y * 32.0 + uTime * 1.6) * 0.014 * idle;
  uv.y += cos(uv.x * 20.0 - uTime) * 0.01 * idle;

  float slice = floor(uv.y * 22.0);
  float glitch = step(0.965, hash(vec2(slice, floor(uTime * 18.0))));
  uv.x += (hash(vec2(slice, 9.1)) - 0.5) * (0.09 * glitch * uHover + uShock * 0.05);

  vec2 ca = delta * (fall * 0.05 + uShock * 0.03) + vec2(0.004, 0.0) * (uHover + glitch);
  float r = texture2D(uTex, uv + ca).r;
  float g = texture2D(uTex, uv).g;
  float b = texture2D(uTex, uv - ca).b;
  float a = max(max(texture2D(uTex, uv).a, texture2D(uTex, uv + ca).a), texture2D(uTex, uv - ca).a);
  vec3 col = vec3(r, g, b);
  col += (hash(uv * uRes + uTime) - 0.5) * 0.1 * a;
  col = mix(col, col * uTint, 0.22 * a);
  col += uTint * fall * 0.4 * a;
  gl_FragColor = vec4(col, a);
}
`;class mE{constructor(t,e=["JAYDEN","CHEN"]){this.canvas=t,this.lines=e,this.mouse=[.28,.55],this.target=[.28,.55],this.hover=.2,this.targetHover=.2,this.shock=0,this.time=0,this.tint=[.84,1,.25],this.gl=t.getContext("webgl",{premultipliedAlpha:!1,alpha:!0,antialias:!0}),this.gl&&(this.setup(),this.drawTexture(),this.bind())}setup(){const t=this.gl,e=this.compile(t.VERTEX_SHADER,dE),n=this.compile(t.FRAGMENT_SHADER,pE);this.prog=t.createProgram(),t.attachShader(this.prog,e),t.attachShader(this.prog,n),t.linkProgram(this.prog),t.useProgram(this.prog);const i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW);const s=t.getAttribLocation(this.prog,"aPos");t.enableVertexAttribArray(s),t.vertexAttribPointer(s,2,t.FLOAT,!1,0,0),this.uTex=t.getUniformLocation(this.prog,"uTex"),this.uMouse=t.getUniformLocation(this.prog,"uMouse"),this.uRes=t.getUniformLocation(this.prog,"uRes"),this.uTime=t.getUniformLocation(this.prog,"uTime"),this.uHover=t.getUniformLocation(this.prog,"uHover"),this.uShock=t.getUniformLocation(this.prog,"uShock"),this.uTint=t.getUniformLocation(this.prog,"uTint"),this.texture=t.createTexture()}compile(t,e){const n=this.gl,i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}drawTexture(){const t=this.gl,e=Math.min(devicePixelRatio,2),n=Math.max(2,Math.floor(this.canvas.clientWidth*e)),i=Math.max(2,Math.floor(this.canvas.clientHeight*e));this.canvas.width=n,this.canvas.height=i,t.viewport(0,0,n,i);const s=document.createElement("canvas");s.width=n,s.height=i;const o=s.getContext("2d");o.clearRect(0,0,n,i),o.fillStyle="#efeae2",o.textAlign="left",o.textBaseline="middle";const a=i*.46;o.letterSpacing="-0.07em",o.font=`800 ${a}px Syne, sans-serif`;let l=this.lines[0],c=o.measureText(l).width,u=a;c>n*.96&&(u*=n*.96/c,o.font=`800 ${u}px Syne, sans-serif`),o.fillText(l,n*.02,i*.34);const f=u*.78;o.font=`italic 400 ${f}px "Instrument Serif", serif`,o.letterSpacing="-0.04em",o.fillText(this.lines[1]||"",n*.02,i*.78),t.bindTexture(t.TEXTURE_2D,this.texture),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,s),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),this.w=n,this.h=i}bind(){const t=this.canvas;t.addEventListener("pointerenter",()=>{this.targetHover=1}),t.addEventListener("pointerleave",()=>{this.targetHover=.18}),window.addEventListener("pointermove",e=>{const n=t.getBoundingClientRect(),i=(e.clientX-n.left)/n.width,s=1-(e.clientY-n.top)/n.height;this.target[0]=i,this.target[1]=s;const o=i>=-.12&&i<=1.12&&s>=-.35&&s<=1.35;this.targetHover=o?1:.18}),window.addEventListener("resize",()=>this.drawTexture())}setTint(t){const e=parseInt(t.replace("#",""),16);this.tint=[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}pulse(){this.shock=1}render(t){if(!this.gl)return;const e=this.gl;this.time+=t,this.mouse[0]+=(this.target[0]-this.mouse[0])*.12,this.mouse[1]+=(this.target[1]-this.mouse[1])*.12,this.hover+=(this.targetHover-this.hover)*.08,this.shock+=(0-this.shock)*.06,e.useProgram(this.prog),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.uniform1i(this.uTex,0),e.uniform2f(this.uMouse,this.mouse[0],this.mouse[1]),e.uniform2f(this.uRes,this.w,this.h),e.uniform1f(this.uTime,this.time),e.uniform1f(this.uHover,this.hover),e.uniform1f(this.uShock,this.shock),e.uniform3f(this.uTint,this.tint[0],this.tint[1],this.tint[2]),e.drawArrays(e.TRIANGLE_STRIP,0,4)}}class _E{constructor(){this.enabled=!1,this.ready=!1,this.level=0}async toggle(){return this.ready||this.init(),this.enabled=!this.enabled,this.enabled?await this.ctx.resume():await this.ctx.suspend(),this.enabled}init(){const t=new AudioContext,e=t.createOscillator(),n=t.createOscillator(),i=t.createOscillator();e.type="sine",n.type="triangle",i.type="sawtooth",e.frequency.value=49,n.frequency.value=73.5,i.frequency.value=98;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=420,s.Q.value=.7;const o=t.createGain();o.gain.value=.035;const a=t.createGain();a.gain.value=.012;const l=t.createAnalyser();l.fftSize=256,e.connect(s),n.connect(s),i.connect(a),a.connect(s),s.connect(o),o.connect(l),l.connect(t.destination),e.start(),n.start(),i.start(),this.ctx=t,this.osc=e,this.osc2=n,this.osc3=i,this.filt=s,this.gain=o,this.analyser=l,this.data=new Uint8Array(l.frequencyBinCount),this.ready=!0}update(t,e){if(!this.enabled||!this.ready)return this.level*=.9,this.level;const n=this.ctx.currentTime;this.osc.frequency.setTargetAtTime(46+t*36,n,.12),this.osc2.frequency.setTargetAtTime(69+t*88,n,.12),this.osc3.frequency.setTargetAtTime(92+t*50,n,.18),this.filt.frequency.setTargetAtTime(260+t*1400+e*800,n,.08),this.gain.gain.setTargetAtTime(.028+e*.04,n,.05),this.analyser.getByteFrequencyData(this.data);let i=0;for(let s=0;s<20;s++)i+=this.data[s];return this.level=i/5100,this.level}}function gE(){const r=document.querySelector(".cursor"),t=document.querySelector(".cursor-ring"),e=document.querySelector(".cursor-dot"),n=document.getElementById("trail");if(!r||matchMedia("(pointer: coarse)").matches)return document.body.classList.add("is-touch"),{render(){},pos:{x:0,y:0}};const i={x:innerWidth/2,y:innerHeight/2},s={x:i.x,y:i.y},o=[],a=n?n.getContext("2d"):null,l=()=>{if(!n)return;const u=Math.min(devicePixelRatio,2);n.width=innerWidth*u,n.height=innerHeight*u,n.style.width=`${innerWidth}px`,n.style.height=`${innerHeight}px`,a&&a.setTransform(u,0,0,u,0,0)};l(),window.addEventListener("resize",l),window.addEventListener("pointermove",u=>{i.x=u.clientX,i.y=u.clientY,o.push({x:u.clientX,y:u.clientY,a:1,r:7}),o.length>28&&o.shift()});const c="a, button, .signal-card, .study, .cta, .liquid-text, [data-warp]";return document.addEventListener("pointerover",u=>{u.target.closest(c)&&r.classList.add("is-hover")}),document.addEventListener("pointerout",u=>{u.target.closest(c)&&r.classList.remove("is-hover")}),{pos:i,render(u="#d6ff3f"){if(s.x+=(i.x-s.x)*.2,s.y+=(i.y-s.y)*.2,t.style.transform=`translate(${s.x}px, ${s.y}px) translate(-50%, -50%)`,e.style.transform=`translate(${i.x}px, ${i.y}px) translate(-50%, -50%)`,!!a){a.clearRect(0,0,innerWidth,innerHeight),a.globalCompositeOperation="lighter";for(let f=0;f<o.length;f++){const h=o[f];h.a*=.86,h.r*=.96,a.beginPath(),a.fillStyle=u,a.globalAlpha=h.a*.35,a.arc(h.x,h.y,h.r,0,Math.PI*2),a.fill()}a.globalAlpha=1}}}}function vE(r){const t=r.textContent;r.textContent="";const e=[],n=t.split(/(\s+)/);for(const s of n){if(/^\s+$/.test(s)){r.appendChild(document.createTextNode(" "));continue}const o=document.createElement("span");o.className="word";for(const a of s){const l=document.createElement("span");l.className="char",l.textContent=a,o.appendChild(l),e.push({el:l,x:0,y:0,r:0,s:0,tx:0,ty:0,tr:0,ts:0,iy:36,io:0,seed:Math.random()*6.28})}r.appendChild(o)}const i={chars:e,el:r,active:!1};return r.addEventListener("pointerenter",()=>{i.active=!0}),r.addEventListener("pointerleave",()=>{i.active=!1,r.style.transform="";for(const s of e)s.tx=0,s.ty=0,s.tr=0,s.ts=0}),r.addEventListener("pointermove",s=>{const o=r.getBoundingClientRect(),a=(s.clientX-o.left)/o.width-.5,l=(s.clientY-o.top)/o.height-.5;r.style.transform=`perspective(900px) rotateY(${a*10}deg) rotateX(${-l*7}deg)`;for(const c of e){const u=c.el.getBoundingClientRect(),f=u.left+u.width/2,h=u.top+u.height/2,d=s.clientX-f,_=s.clientY-h,g=Math.hypot(d,_)+.001,m=Math.max(0,1-g/210),p=m*56;c.tx=d/g*-p,c.ty=_/g*-p*.75,c.tr=d/g*m*22,c.ts=m*.28}}),i}function xE(r,t,e){for(const n of r){const i={t:0};t.to(i,{t:1,ease:"power3.out",duration:1.15,stagger:0,scrollTrigger:{trigger:n.el,start:"top 86%",once:!0},onUpdate(){const s=i.t;n.chars.forEach((o,a)=>{const l=Math.max(0,Math.min(1,s*1.4-a*.018));o.io=l,o.iy=(1-l)*(70+(o.seed||0)*8)})}})}}function ME(r,t){for(const e of r)e.chars.forEach((n,i)=>{n.x+=(n.tx-n.x)*.16,n.y+=(n.ty-n.y)*.16,n.r+=(n.tr-n.r)*.16,n.s+=(n.ts-n.s)*.16;const s=Math.sin(t*1.6+(n.seed||i)*1.7)*(e.active?1.1:1.2),o=n.x*.14;n.el.style.opacity=String(.15+n.io*.85),n.el.style.transform=`translate(${n.x}px, ${n.y+n.iy+s}px) rotate(${n.r}deg) skewX(${o}deg) scale(${1+n.s})`,n.el.style.textShadow=`${n.x*.08}px 0 #ff5a36, ${-n.x*.08}px 0 #79e7ff`})}function SE(r){for(const t of r)t.addEventListener("pointermove",e=>{const n=t.getBoundingClientRect(),i=(e.clientX-n.left)/n.width-.5,s=(e.clientY-n.top)/n.height-.5;t.style.transform=`rotateY(${i*16}deg) rotateX(${-s*14}deg) translateZ(18px)`,t.style.setProperty("--gx",`${(i+.5)*100}%`),t.style.setProperty("--gy",`${(s+.5)*100}%`)}),t.addEventListener("pointerleave",()=>{t.style.transform="rotateY(0) rotateX(0) translateZ(0)"})}function yE(r){for(const t of r)t.addEventListener("pointermove",e=>{const n=t.getBoundingClientRect(),i=e.clientX-(n.left+n.width/2),s=e.clientY-(n.top+n.height/2);t.style.transform=`translate(${i*.32}px, ${s*.36}px)`}),t.addEventListener("pointerleave",()=>{t.style.transform="translate(0,0)"})}function EE(r,t,e){const n=document.createElement("span");n.className="ripple",n.style.left=`${r}px`,n.style.top=`${t}px`,n.style.borderColor=e,document.body.appendChild(n),n.addEventListener("animationend",()=>n.remove())}Ir.registerPlugin(re);const TE=document.getElementById("loader"),vd=document.getElementById("loader-count"),bE=document.getElementById("loader-bar"),wE=document.getElementById("shape-name"),AE=document.getElementById("scroll-read"),CE=document.getElementById("ptr-read"),RE=document.getElementById("energy-read"),PE=document.getElementById("progress-bar"),uo=document.getElementById("sonic"),ho=document.getElementById("shape-dots"),Fo=matchMedia("(prefers-reduced-motion: reduce)").matches;function DE(){return new Promise(r=>{const t={n:0};Ir.to(t,{n:100,duration:Fo?.15:2.1,ease:"power3.inOut",onUpdate(){const e=Math.round(t.n),n=!Fo&&Math.random()>.86?Math.floor(Math.random()*100):e;vd.textContent=String(n).padStart(2,"0"),bE.style.width=`${e}%`},onComplete(){vd.textContent="100",r()}})})}async function LE(){const r=new fE(document.getElementById("world")),t=new mE(document.getElementById("liquid-text"),["JAYDEN","CHEN"]),e=new _E,n=gE(),i={x:0,y:0};let s=performance.now(),o="",a=[],l={scroll:0},c=!1;window.addEventListener("pointermove",f=>{i.x=f.clientX/innerWidth,i.y=f.clientY/innerHeight});function u(f){const h=Math.min(.05,(f-s)/1e3);s=f;const d=Math.max(1,document.documentElement.scrollHeight-innerHeight),_=Math.min(1,Math.max(0,(l.scroll||window.scrollY)/d)),g=e.update(_,r.shock);if(r.setProgress(_),r.setAudio(g),r.render(),t.render(h),c){const m=`#${r.palette.b.getHexString()}`;n.render(m),ME(a,f/1e3);const p=Math.round(_*100);PE.style.height=`${p}%`,AE.textContent=`${String(p).padStart(3,"0")}%`,wE.textContent=r.shapeName,CE.textContent=`${i.x.toFixed(2)} ${i.y.toFixed(2)}`,RE.textContent=`${Math.round(r.shock*100).toString().padStart(3,"0")}%`,r.shapeName!==o&&(o=r.shapeName,document.documentElement.style.setProperty("--accent",m),document.documentElement.style.setProperty("--accent-2",`#${r.palette.c.getHexString()}`),document.documentElement.style.setProperty("--accent-3",`#${r.palette.a.getHexString()}`),t.setTint(m),ho==null||ho.querySelectorAll("i").forEach((M,S)=>M.classList.toggle("is-on",S===r.shapeIndex)))}requestAnimationFrame(u)}requestAnimationFrame(u),await Promise.all([document.fonts.ready.then(()=>t.drawTexture()),DE()]),TE.classList.add("is-done"),a=[...document.querySelectorAll("[data-warp]")].map(vE),xE(a,Ir),SE(document.querySelectorAll("[data-tilt]")),yE(document.querySelectorAll("[data-magnetic]")),ho&&(ho.innerHTML=Nn.map((f,h)=>`<i data-i="${h}"></i>`).join("")),l=new bg({lerp:Fo?1:.075,smoothWheel:!Fo}),l.on("scroll",re.update),Ir.ticker.add(f=>{l.raf(f*1e3)}),Ir.ticker.lagSmoothing(0),Fo||Ir.to("#rail",{x:()=>-(document.getElementById("rail").scrollWidth-innerWidth+64),ease:"none",scrollTrigger:{trigger:"#studies",start:"top top",end:()=>`+=${Math.max(innerWidth*1.2,1600)}`,pin:!0,scrub:1,anticipatePin:1}}),uo==null||uo.addEventListener("click",async()=>{const f=await e.toggle();uo.classList.toggle("is-on",f),uo.textContent=f?"Sonic on":"Sonic"}),window.addEventListener("pointerdown",f=>{f.target.closest("a, button")||(t.pulse(),EE(f.clientX,f.clientY,getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()))}),c=!0}LE();
