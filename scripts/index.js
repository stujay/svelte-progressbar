!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ProgressBar=t()}(this,(function(){"use strict";function e(){}const t=e=>e;function r(e,t){for(const r in t)e[r]=t[r];return e}function s(e){return e()}function n(){return Object.create(null)}function l(e){e.forEach(s)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(t,...r){if(null==t)return e;const s=t.subscribe(...r);return s.unsubscribe?()=>s.unsubscribe():s}function a(e,t,r,s){if(e){const n=u(e,t,r,s);return e[0](n)}}function u(e,t,s,n){return e[1]&&n?r(s.ctx.slice(),e[1](n(t))):s.ctx}function d(e,t,r,s,n,l,o){const i=function(e,t,r,s){if(e[2]&&s){const n=e[2](s(r));if(void 0===t.dirty)return n;if("object"==typeof n){const e=[],r=Math.max(t.dirty.length,n.length);for(let s=0;s<r;s+=1)e[s]=t.dirty[s]|n[s];return e}return t.dirty|n}return t.dirty}(t,s,n,l);if(i){const n=u(t,r,s,o);e.p(n,i)}}const h="undefined"!=typeof window;let f=h?()=>window.performance.now():()=>Date.now(),g=h?e=>requestAnimationFrame(e):e;const p=new Set;function m(e){p.forEach(t=>{t.c(e)||(p.delete(t),t.f())}),0!==p.size&&g(m)}function $(e,t){e.appendChild(t)}function b(e,t,r){e.insertBefore(t,r||null)}function k(e){e.parentNode.removeChild(e)}function v(e,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}function w(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(){return e="",document.createTextNode(e);var e}function A(e,t,r){null==r?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function C(e,t,r,s){e.style.setProperty(t,r,s?"important":"")}let S;function P(e){S=e}const j=[],z=[],B=[],O=[],_=Promise.resolve();let M=!1;function V(e){B.push(e)}let F=!1;const L=new Set;function E(){if(!F){F=!0;do{for(let e=0;e<j.length;e+=1){const t=j[e];P(t),T(t.$$)}for(P(null),j.length=0;z.length;)z.pop()();for(let e=0;e<B.length;e+=1){const t=B[e];L.has(t)||(L.add(t),t())}B.length=0}while(j.length);for(;O.length;)O.pop()();M=!1,F=!1,L.clear()}}function T(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}const N=new Set;let H;function I(){H={r:0,c:[],p:H}}function W(){H.r||l(H.c),H=H.p}function D(e,t){e&&e.i&&(N.delete(e),e.i(t))}function q(e,t,r,s){if(e&&e.o){if(N.has(e))return;N.add(e),H.c.push(()=>{N.delete(e),s&&(r&&e.d(1),s())}),e.o(t)}}function G(e){e&&e.c()}function Y(e,t,r){const{fragment:n,on_mount:i,on_destroy:c,after_update:a}=e.$$;n&&n.m(t,r),V(()=>{const t=i.map(s).filter(o);c?c.push(...t):l(t),e.$$.on_mount=[]}),a.forEach(V)}function Z(e,t){const r=e.$$;null!==r.fragment&&(l(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function J(e,t){-1===e.$$.dirty[0]&&(j.push(e),M||(M=!0,_.then(E)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(t,r,s,o,i,c,a=[-1]){const u=S;P(t);const d=r.props||{},h=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:a,skip_bound:!1};let f=!1;if(h.ctx=s?s(t,d,(e,r,...s)=>{const n=s.length?s[0]:r;return h.ctx&&i(h.ctx[e],h.ctx[e]=n)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](n),f&&J(t,e)),r}):[],h.update(),f=!0,l(h.before_update),h.fragment=!!o&&o(h.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);h.fragment&&h.fragment.l(e),e.forEach(k)}else h.fragment&&h.fragment.c();r.intro&&D(t.$$.fragment),Y(t,r.target,r.anchor),E()}P(u)}class Q{$destroy(){Z(this,1),this.$destroy=e}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const e=r.indexOf(t);-1!==e&&r.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const R=[];function U(e){return"[object Date]"===Object.prototype.toString.call(e)}function X(e,t){if(e===t||e!=e)return()=>e;const r=typeof e;if(r!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const r=t.map((t,r)=>X(e[r],t));return e=>r.map(t=>t(e))}if("object"===r){if(!e||!t)throw new Error("Object cannot be null");if(U(e)&&U(t)){e=e.getTime();const r=(t=t.getTime())-e;return t=>new Date(e+t*r)}const r=Object.keys(t),s={};return r.forEach(r=>{s[r]=X(e[r],t[r])}),e=>{const t={};return r.forEach(r=>{t[r]=s[r](e)}),t}}if("number"===r){const r=t-e;return t=>e+t*r}throw new Error(`Cannot interpolate ${r} values`)}function ee(s,n={}){const l=function(t,r=e){let s;const n=[];function l(e){if(i(t,e)&&(t=e,s)){const e=!R.length;for(let e=0;e<n.length;e+=1){const r=n[e];r[1](),R.push(r,t)}if(e){for(let e=0;e<R.length;e+=2)R[e][0](R[e+1]);R.length=0}}}return{set:l,update:function(e){l(e(t))},subscribe:function(o,i=e){const c=[o,i];return n.push(c),1===n.length&&(s=r(l)||e),o(t),()=>{const e=n.indexOf(c);-1!==e&&n.splice(e,1),0===n.length&&(s(),s=null)}}}}(s);let o,c=s;function a(e,i){if(null==s)return l.set(s=e),Promise.resolve();c=e;let a=o,u=!1,{delay:d=0,duration:h=400,easing:$=t,interpolate:b=X}=r(r({},n),i);if(0===h)return a&&(a.abort(),a=null),l.set(s=c),Promise.resolve();const k=f()+d;let v;return o=function(e){let t;return 0===p.size&&g(m),{promise:new Promise(r=>{p.add(t={c:e,f:r})}),abort(){p.delete(t)}}}(t=>{if(t<k)return!0;u||(v=b(s,e),"function"==typeof h&&(h=h(s,e)),u=!0),a&&(a.abort(),a=null);const r=t-k;return r>h?(l.set(s=e),!1):(l.set(s=v($(r/h))),!0)}),o.promise}return{set:a,update:(e,t)=>a(e(c,s),t),subscribe:l.subscribe}}const te={duration:1e3,easing:function(e){const t=e-1;return t*t*t+1}};function re(e){return e.reduce((e,t)=>(e.push(t.perc+"%"),e),[]).join(" + ")}function se(e,t){var r=!1;function s(r,s){let n=null;if(t.thresholds&&t.thresholds.length>0){const e=t.thresholds.find((e,s)=>r.perc<=e.till||s==t.thresholds.length-1);e&&(n=e.color)}if(!n)if(e[s]&&e[s].hasOwnProperty("color")&&e[s].color)n=e[s].color;else{const e=t.colors.length;n=t.colors[s%e]}return n}function n(e,r){let n={};return"object"!=typeof e?n={perc:e}:n.perc=e.perc,n.color=s(n,r),n.prevOffset=0,t.stackSeries?n.radius=50-t.thickness:n.radius=50-(r+1)*t.thickness-(r>0?t.margin:0),n}Array.isArray(e)||(e=[e]);const{subscribe:l,set:o,update:i}=ee({series:e.map((e,t)=>n({perc:0},t)),overallPerc:0,label:""},Object.assign(Object.assign({},te),{interpolate:(e,l)=>o=>{const i=[];let c=0;const a=e.series.length,u=l.series.length;if(a<u)for(let t=a;t<u;t++)e.series.push(n(0,0));else if(a>u)for(let e=u;e<a;e++)l.series.push(n(0,0));return e.series.forEach((e,r)=>{const n=l.series[r];n.perc>e.perc?i[r]={perc:Math.round(e.perc+(n.perc-e.perc)*o),prevOffset:e.prevOffset+(n.prevOffset-e.prevOffset)*o}:i[r]={perc:Math.round(e.perc-(e.perc-n.perc)*o),prevOffset:e.prevOffset-(e.prevOffset-n.prevOffset)*o},i[r].color=s(i[r],r),c+=i[r].perc,t.stackSeries?i[r].radius=50-t.thickness:i[r].radius=50-(r+1)*t.thickness-(r>0?t.margin:0)}),c>100&&(c=100),{series:i,label:r?e.label:re(i),overallPerc:c}}}));return{subscribe:l,set:o,updateSeries:e=>{Array.isArray(e)||(e=[e]),e=e.map(e=>("object"!=typeof e&&(e={perc:e}),e)),i(t=>{const s={series:t.series.map(e=>e),overallPerc:t.overallPerc,label:""};if(e.forEach((e,t)=>{s.series[t]=n(e,t)}),e.length<t.series.length)for(let r=e.length;r<t.series.length;r++)s.series[r]=n(0,0);let l=0;return s.series.forEach(e=>{e.prevOffset=l,l+=e.perc}),s.overallPerc=l,s.overallPerc>100&&(s.overallPerc=100),s.label=r?t.label:re(s.series),s})},updateLabel:e=>{e&&(r=!0,i(t=>({series:t.series.map(e=>e),overallPerc:t.overallPerc,label:e})))}}}function ne(e,t,r,s,n,l){360==n&&(n=359.9999);const o=le(e,t,r,n),i=le(e,t,r,s),c=n-s<=180?"0":"1";return["M",o.x,o.y,"A",r,r,0,c,0,i.x,i.y,l?"Z":""].join(" ")}function le(e,t,r,s){const n=((s%=360)-90)*Math.PI/180;return{x:e+r*Math.cos(n),y:t+r*Math.sin(n)}}function oe(t){let r,s;return{c(){r=y("path"),A(r,"d",s=ne(50,50,t[0],t[1],t[2],t[7])),A(r,"fill",t[3]),A(r,"stroke",t[4]),A(r,"stroke-width",t[5]),A(r,"class",t[6])},m(e,t){b(e,r,t)},p(e,[t]){135&t&&s!==(s=ne(50,50,e[0],e[1],e[2],e[7]))&&A(r,"d",s),8&t&&A(r,"fill",e[3]),16&t&&A(r,"stroke",e[4]),32&t&&A(r,"stroke-width",e[5]),64&t&&A(r,"class",e[6])},i:e,o:e,d(e){e&&k(r)}}}function ie(e,t,r){let{radius:s}=t,{startAngle:n=null}=t,{endAngle:l=null}=t,{fill:o}=t,{stroke:i}=t,{strokeWidth:c=0}=t,{cls:a}=t,{closeArc:u=!1}=t;return e.$$set=e=>{"radius"in e&&r(0,s=e.radius),"startAngle"in e&&r(1,n=e.startAngle),"endAngle"in e&&r(2,l=e.endAngle),"fill"in e&&r(3,o=e.fill),"stroke"in e&&r(4,i=e.stroke),"strokeWidth"in e&&r(5,c=e.strokeWidth),"cls"in e&&r(6,a=e.cls),"closeArc"in e&&r(7,u=e.closeArc)},[s,n,l,o,i,c,a,u]}class ce extends Q{constructor(e){super(),K(this,e,ie,oe,i,{radius:0,startAngle:1,endAngle:2,fill:3,stroke:4,strokeWidth:5,cls:6,closeArc:7})}}function ae(e){let t,r,s;return{c(){t=y("path"),A(t,"d",r=e[6](50,50,e[5].series[e[2]].radius,0,100)),A(t,"fill","transparent"),A(t,"stroke",s=e[5].series[e[2]].color),A(t,"stroke-width",e[0]),A(t,"class","pb-arc")},m(e,r){b(e,t,r)},p(e,n){36&n&&r!==(r=e[6](50,50,e[5].series[e[2]].radius,0,100))&&A(t,"d",r),36&n&&s!==(s=e[5].series[e[2]].color)&&A(t,"stroke",s),1&n&&A(t,"stroke-width",e[0])},d(e){e&&k(t)}}}function ue(e){let t;function r(e,t){return e[4]?he:de}let s=r(e),n=s(e);return{c(){n.c(),t=x()},m(e,r){n.m(e,r),b(e,t,r)},p(e,l){s===(s=r(e))&&n?n.p(e,l):(n.d(1),n=s(e),n&&(n.c(),n.m(t.parentNode,t)))},d(e){n.d(e),e&&k(t)}}}function de(e){let t,r,s;return{c(){t=y("path"),A(t,"d",r=e[6](50,50,e[5].series[e[2]].radius,0,e[5].series[e[2]].perc)),A(t,"fill","transparent"),A(t,"stroke",s=e[5].series[e[2]].color),A(t,"stroke-width",e[0]),A(t,"class","pb-arc")},m(e,r){b(e,t,r)},p(e,n){36&n&&r!==(r=e[6](50,50,e[5].series[e[2]].radius,0,e[5].series[e[2]].perc))&&A(t,"d",r),36&n&&s!==(s=e[5].series[e[2]].color)&&A(t,"stroke",s),1&n&&A(t,"stroke-width",e[0])},d(e){e&&k(t)}}}function he(e){let t,r,s;return{c(){t=y("path"),A(t,"d",r=e[6](50,50,e[5].series[e[2]].radius,e[5].series[e[2]].prevOffset,e[5].series[e[2]].prevOffset+e[5].series[e[2]].perc)),A(t,"fill","transparent"),A(t,"stroke",s=e[5].series[e[2]].color),A(t,"stroke-width",e[0]),A(t,"class","pb-arc")},m(e,r){b(e,t,r)},p(e,n){36&n&&r!==(r=e[6](50,50,e[5].series[e[2]].radius,e[5].series[e[2]].prevOffset,e[5].series[e[2]].prevOffset+e[5].series[e[2]].perc))&&A(t,"d",r),36&n&&s!==(s=e[5].series[e[2]].color)&&A(t,"stroke",s),1&n&&A(t,"stroke-width",e[0])},d(e){e&&k(t)}}}function fe(t){let r;function s(e,t){return e[1]?ae:ue}let n=s(t),l=n(t);return{c(){l.c(),r=x()},m(e,t){l.m(e,t),b(e,r,t)},p(e,[t]){n===(n=s(e))&&l?l.p(e,t):(l.d(1),l=n(e),l&&(l.c(),l.m(r.parentNode,r)))},i:e,o:e,d(e){l.d(e),e&&k(r)}}}function ge(t,r,s){let n,l=e,o=()=>(l(),l=c(f,e=>s(5,n=e)),f);t.$$.on_destroy.push(()=>l());let{thickness:i}=r,{startAngle:a}=r,{endAngle:u}=r,{bg:d=!1}=r,{serieIdx:h}=r,{store:f}=r;o();let{stackSeries:g}=r;return i||(i=2),t.$$set=e=>{"thickness"in e&&s(0,i=e.thickness),"startAngle"in e&&s(7,a=e.startAngle),"endAngle"in e&&s(8,u=e.endAngle),"bg"in e&&s(1,d=e.bg),"serieIdx"in e&&s(2,h=e.serieIdx),"store"in e&&o(s(3,f=e.store)),"stackSeries"in e&&s(4,g=e.stackSeries)},[i,d,h,f,g,n,function(e,t,r,s,n){return s<0&&(s=0),n>100&&(n=100),ne(e,t,r,a+s/100*(u-a),a+n/100*(u-a),!1)},a,u]}class pe extends Q{constructor(e){super(),K(this,e,ge,fe,i,{thickness:0,startAngle:7,endAngle:8,bg:1,serieIdx:2,store:3,stackSeries:4})}}function me(e,t,r){const s=e.slice();return s[27]=t[r],s[29]=r,s}function $e(e){let t,r,s,n,l;return s=new pe({props:{store:e[19],serieIdx:0,thickness:e[3],startAngle:e[10],endAngle:e[11]}}),n=new ce({props:{radius:50-e[3],fill:"#fff",startAngle:e[10],endAngle:e[11],closeArc:!0}}),{c(){t=y("defs"),r=y("mask"),G(s.$$.fragment),G(n.$$.fragment),A(r,"id",e[18]),A(r,"x","0"),A(r,"y","0"),A(r,"width","100"),A(r,"height","100%")},m(e,o){b(e,t,o),$(t,r),Y(s,r,null),Y(n,r,null),l=!0},p(e,t){const r={};8&t&&(r.thickness=e[3]),1024&t&&(r.startAngle=e[10]),2048&t&&(r.endAngle=e[11]),s.$set(r);const l={};8&t&&(l.radius=50-e[3]),1024&t&&(l.startAngle=e[10]),2048&t&&(l.endAngle=e[11]),n.$set(l)},i(e){l||(D(s.$$.fragment,e),D(n.$$.fragment,e),l=!0)},o(e){q(s.$$.fragment,e),q(n.$$.fragment,e),l=!1},d(e){e&&k(t),Z(s),Z(n)}}}function be(e){let t,r;return t=new ce({props:{radius:e[17].series[0].radius,fill:e[8],startAngle:e[10],endAngle:e[11],strokeWidth:e[3],stroke:e[7]}}),{c(){G(t.$$.fragment)},m(e,s){Y(t,e,s),r=!0},p(e,r){const s={};131072&r&&(s.radius=e[17].series[0].radius),256&r&&(s.fill=e[8]),1024&r&&(s.startAngle=e[10]),2048&r&&(s.endAngle=e[11]),8&r&&(s.strokeWidth=e[3]),128&r&&(s.stroke=e[7]),t.$set(s)},i(e){r||(D(t.$$.fragment,e),r=!0)},o(e){q(t.$$.fragment,e),r=!1},d(e){Z(t,e)}}}function ke(e){let t,r;return t=new ce({props:{radius:e[27].radius,fill:e[8],startAngle:e[10],endAngle:e[11],strokeWidth:e[3],stroke:e[7]}}),{c(){G(t.$$.fragment)},m(e,s){Y(t,e,s),r=!0},p(e,r){const s={};32768&r&&(s.radius=e[27].radius),256&r&&(s.fill=e[8]),1024&r&&(s.startAngle=e[10]),2048&r&&(s.endAngle=e[11]),8&r&&(s.strokeWidth=e[3]),128&r&&(s.stroke=e[7]),t.$set(s)},i(e){r||(D(t.$$.fragment,e),r=!0)},o(e){q(t.$$.fragment,e),r=!1},d(e){Z(t,e)}}}function ve(e){let t,r,s,n=!e[5]&&e[6]&&ke(e);return r=new pe({props:{store:e[12],serieIdx:e[29],thickness:e[3],startAngle:e[10],endAngle:e[11],stackSeries:e[5]}}),{c(){n&&n.c(),t=x(),G(r.$$.fragment)},m(e,l){n&&n.m(e,l),b(e,t,l),Y(r,e,l),s=!0},p(e,s){!e[5]&&e[6]?n?(n.p(e,s),96&s&&D(n,1)):(n=ke(e),n.c(),D(n,1),n.m(t.parentNode,t)):n&&(I(),q(n,1,1,()=>{n=null}),W());const l={};4096&s&&(l.store=e[12]),8&s&&(l.thickness=e[3]),1024&s&&(l.startAngle=e[10]),2048&s&&(l.endAngle=e[11]),32&s&&(l.stackSeries=e[5]),r.$set(l)},i(e){s||(D(n),D(r.$$.fragment,e),s=!0)},o(e){q(n),q(r.$$.fragment,e),s=!1},d(e){n&&n.d(e),e&&k(t),Z(r,e)}}}function we(e){let t,r,s,n,l,o=e[16].label+"",i=e[16].label+"";return{c(){t=y("foreignObject"),r=w("div"),s=y("foreignObject"),n=w("div"),A(r,"class","progress-value-content svelte-1dki5hv"),C(r,"font-size",e[2]+"%"),C(r,"color",e[9]),A(t,"class","progress-value progress-value-inverted svelte-1dki5hv"),A(t,"x","0"),A(t,"y","0"),A(t,"width","100%"),A(t,"height","100%"),A(n,"class","progress-value-content svelte-1dki5hv"),C(n,"font-size",e[2]+"%"),C(n,"color",e[9]),A(s,"mask",l="url(#"+e[18]+")"),A(s,"class","progress-value"),A(s,"x","0"),A(s,"y","0"),A(s,"width","100%"),A(s,"height","100%")},m(e,l){b(e,t,l),$(t,r),r.innerHTML=o,b(e,s,l),$(s,n),n.innerHTML=i},p(e,t){65536&t&&o!==(o=e[16].label+"")&&(r.innerHTML=o),4&t&&C(r,"font-size",e[2]+"%"),512&t&&C(r,"color",e[9]),65536&t&&i!==(i=e[16].label+"")&&(n.innerHTML=i),4&t&&C(n,"font-size",e[2]+"%"),512&t&&C(n,"color",e[9])},d(e){e&&k(t),e&&k(s)}}}function ye(e){let t,r,s,n,l,o,i,c,u=e[4]&&$e(e),h=e[6]&&e[5]&&be(e),f=e[15].series,g=[];for(let t=0;t<f.length;t+=1)g[t]=ve(me(e,f,t));const p=e=>q(g[e],1,1,()=>{g[e]=null});let m=e[4]&&we(e);const w=e[24].default,C=a(w,e,e[23],null);return{c(){t=y("svg"),u&&u.c(),r=x(),h&&h.c(),s=x();for(let e=0;e<g.length;e+=1)g[e].c();n=x(),m&&m.c(),l=x(),C&&C.c(),A(t,"class",o="progressbar progressbar-"+e[13]+" "+e[14]+" svelte-1dki5hv"),A(t,"viewBox",i="0 0 100 "+e[1]),A(t,"width",e[0]),A(t,"height","auto"),A(t,"xmlns","http://www.w3.org/2000/svg")},m(e,o){b(e,t,o),u&&u.m(t,null),$(t,r),h&&h.m(t,null),$(t,s);for(let e=0;e<g.length;e+=1)g[e].m(t,null);$(t,n),m&&m.m(t,null),$(t,l),C&&C.m(t,null),c=!0},p(e,[a]){if(e[4]?u?(u.p(e,a),16&a&&D(u,1)):(u=$e(e),u.c(),D(u,1),u.m(t,r)):u&&(I(),q(u,1,1,()=>{u=null}),W()),e[6]&&e[5]?h?(h.p(e,a),96&a&&D(h,1)):(h=be(e),h.c(),D(h,1),h.m(t,s)):h&&(I(),q(h,1,1,()=>{h=null}),W()),40424&a){let r;for(f=e[15].series,r=0;r<f.length;r+=1){const s=me(e,f,r);g[r]?(g[r].p(s,a),D(g[r],1)):(g[r]=ve(s),g[r].c(),D(g[r],1),g[r].m(t,n))}for(I(),r=f.length;r<g.length;r+=1)p(r);W()}e[4]?m?m.p(e,a):(m=we(e),m.c(),m.m(t,l)):m&&(m.d(1),m=null),C&&C.p&&8388608&a&&d(C,w,e,e[23],a,null,null),(!c||24576&a&&o!==(o="progressbar progressbar-"+e[13]+" "+e[14]+" svelte-1dki5hv"))&&A(t,"class",o),(!c||2&a&&i!==(i="0 0 100 "+e[1]))&&A(t,"viewBox",i),(!c||1&a)&&A(t,"width",e[0])},i(e){if(!c){D(u),D(h);for(let e=0;e<f.length;e+=1)D(g[e]);D(C,e),c=!0}},o(e){q(u),q(h),g=g.filter(Boolean);for(let e=0;e<g.length;e+=1)q(g[e]);q(C,e),c=!1},d(e){e&&k(t),u&&u.d(),h&&h.d(),v(g,e),m&&m.d(),C&&C.d(e)}}}function xe(t,r,s){let n,l,o=e,i=()=>(o(),o=c(S,e=>s(16,n=e)),S);t.$$.on_destroy.push(()=>o());let{$$slots:a={},$$scope:u}=r,{thickness:d=5}=r,{width:h=null}=r,{height:f=null}=r,{textSize:g=null}=r,{showProgressValue:p=!0}=r,{stackSeries:m=!0}=r,{margin:$=0}=r,{addBackground:b=!0}=r,{bgColor:k="#e5e5e5"}=r,{bgFillColor:v="transparent"}=r,{labelColor:w="#555"}=r,{startAngle:y=0}=r,{endAngle:x=360}=r,{colors:A}=r,{thresholds:C}=r,{store:S}=r;i();let{style:P}=r,{cls:j=""}=r;const z="tx_mask_"+(new Date).getTime()+Math.floor(999*Math.random());null==h&&(h=75),null==f&&(f=x-y>180?100:50),null==g&&(g=150);const B=se([{perc:n.overallPerc,radius:50-d*n.series.length,color:"#fff"}],{colors:A,thresholds:C,stackSeries:!1,thickness:d,margin:$});let O;return function(e,t,r){e.$$.on_destroy.push(c(t,r))}(t,B,e=>s(17,l=e)),t.$$set=e=>{"thickness"in e&&s(3,d=e.thickness),"width"in e&&s(0,h=e.width),"height"in e&&s(1,f=e.height),"textSize"in e&&s(2,g=e.textSize),"showProgressValue"in e&&s(4,p=e.showProgressValue),"stackSeries"in e&&s(5,m=e.stackSeries),"margin"in e&&s(20,$=e.margin),"addBackground"in e&&s(6,b=e.addBackground),"bgColor"in e&&s(7,k=e.bgColor),"bgFillColor"in e&&s(8,v=e.bgFillColor),"labelColor"in e&&s(9,w=e.labelColor),"startAngle"in e&&s(10,y=e.startAngle),"endAngle"in e&&s(11,x=e.endAngle),"colors"in e&&s(21,A=e.colors),"thresholds"in e&&s(22,C=e.thresholds),"store"in e&&i(s(12,S=e.store)),"style"in e&&s(13,P=e.style),"cls"in e&&s(14,j=e.cls),"$$scope"in e&&s(23,u=e.$$scope)},t.$$.update=()=>{65536&t.$$.dirty&&s(15,O=n)},[h,f,g,d,p,m,b,k,v,w,y,x,S,P,j,O,n,l,z,B,$,A,C,u,a]}class Ae extends Q{constructor(e){var t;super(),document.getElementById("svelte-1dki5hv-style")||((t=w("style")).id="svelte-1dki5hv-style",t.textContent=".progress-value-inverted.svelte-1dki5hv.svelte-1dki5hv{fill:#fff}.progress-value-content.svelte-1dki5hv.svelte-1dki5hv{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-flow:column;justify-content:center;align-items:center}.progressbar-semicircle.svelte-1dki5hv .progress-value-content.svelte-1dki5hv{justify-content:flex-end}",$(document.head,t)),K(this,e,xe,ye,i,{thickness:3,width:0,height:1,textSize:2,showProgressValue:4,stackSeries:5,margin:20,addBackground:6,bgColor:7,bgFillColor:8,labelColor:9,startAngle:10,endAngle:11,colors:21,thresholds:22,store:12,style:13,cls:14})}}function Ce(e,t,r){const s=e.slice();return s[16]=t[r],s[18]=r,s}function Se(e){let t,r,s;return{c(){t=y("stop"),A(t,"offset",r=Math.round(100*e[12].series[e[18]].perc/e[12].overallPerc)+"%"),A(t,"stop-color",s=e[12].series[e[18]].color)},m(e,r){b(e,t,r)},p(e,n){4096&n&&r!==(r=Math.round(100*e[12].series[e[18]].perc/e[12].overallPerc)+"%")&&A(t,"offset",r),4096&n&&s!==(s=e[12].series[e[18]].color)&&A(t,"stop-color",s)},d(e){e&&k(t)}}}function Pe(e){let t,r,s,n;return{c(){t=y("mask"),r=y("rect"),A(r,"width",s=100-e[12].overallPerc+"%"),A(r,"height","100%"),A(r,"x",n=e[12].overallPerc+"%"),A(r,"y","0"),A(r,"fill","#fff"),A(t,"id",e[13]),A(t,"x","0"),A(t,"y","0"),A(t,"width","100"),A(t,"height","100%")},m(e,s){b(e,t,s),$(t,r)},p(e,t){4096&t&&s!==(s=100-e[12].overallPerc+"%")&&A(r,"width",s),4096&t&&n!==(n=e[12].overallPerc+"%")&&A(r,"x",n)},d(e){e&&k(t)}}}function je(e){let t,r,s,n,l=e[7]&&Be(e),o=e[6]&&Oe(e);return{c(){l&&l.c(),t=y("rect"),o&&o.c(),n=x(),A(t,"width",r=e[12].overallPerc+"%"),A(t,"height","100%"),A(t,"rx",e[0]),A(t,"ry",e[1]),A(t,"y","0"),A(t,"fill",s="url(#"+e[14]+")")},m(e,r){l&&l.m(e,r),b(e,t,r),o&&o.m(e,r),b(e,n,r)},p(e,s){e[7]?l?l.p(e,s):(l=Be(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null),4096&s&&r!==(r=e[12].overallPerc+"%")&&A(t,"width",r),1&s&&A(t,"rx",e[0]),2&s&&A(t,"ry",e[1]),e[6]?o?o.p(e,s):(o=Oe(e),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},d(e){l&&l.d(e),e&&k(t),o&&o.d(e),e&&k(n)}}}function ze(e){let t,r,s,n,l=e[7]&&_e(e),o=e[6]&&Me(e);return{c(){l&&l.c(),t=y("rect"),o&&o.c(),n=x(),A(t,"width",r=e[12].overallPerc+"%"),A(t,"height","100%"),A(t,"x","0"),A(t,"y","0"),A(t,"fill",s="url(#"+e[14]+")")},m(e,r){l&&l.m(e,r),b(e,t,r),o&&o.m(e,r),b(e,n,r)},p(e,s){e[7]?l?l.p(e,s):(l=_e(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null),4096&s&&r!==(r=e[12].overallPerc+"%")&&A(t,"width",r),e[6]?o?o.p(e,s):(o=Me(e),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},d(e){l&&l.d(e),e&&k(t),o&&o.d(e),e&&k(n)}}}function Be(e){let t;return{c(){t=y("rect"),A(t,"width","100"),A(t,"height","100%"),A(t,"rx",e[0]),A(t,"ry",e[1]),A(t,"y","0"),A(t,"fill",e[8]),A(t,"class","progress-bg svelte-mnjwk")},m(e,r){b(e,t,r)},p(e,r){1&r&&A(t,"rx",e[0]),2&r&&A(t,"ry",e[1]),256&r&&A(t,"fill",e[8])},d(e){e&&k(t)}}}function Oe(e){let t,r,s,n,l,o=e[12].label+"",i=e[12].label+"";return{c(){t=y("foreignObject"),r=w("div"),s=y("foreignObject"),n=w("div"),A(r,"class","progress-value-content svelte-mnjwk"),C(r,"font-size",e[4]+"%"),A(t,"class","progress-value progress-value-inverted svelte-mnjwk"),A(t,"x","0"),A(t,"y","0"),A(t,"width","100%"),A(t,"height","100%"),A(n,"class","progress-value-content svelte-mnjwk"),C(n,"font-size",e[4]+"%"),C(n,"color",e[9]),A(s,"mask",l="url(#"+e[13]+")"),A(s,"class","progress-value svelte-mnjwk"),A(s,"x","0"),A(s,"y","0"),A(s,"width","100%"),A(s,"height","100%")},m(e,l){b(e,t,l),$(t,r),r.innerHTML=o,b(e,s,l),$(s,n),n.innerHTML=i},p(e,t){4096&t&&o!==(o=e[12].label+"")&&(r.innerHTML=o),16&t&&C(r,"font-size",e[4]+"%"),4096&t&&i!==(i=e[12].label+"")&&(n.innerHTML=i),16&t&&C(n,"font-size",e[4]+"%"),512&t&&C(n,"color",e[9])},d(e){e&&k(t),e&&k(s)}}}function _e(e){let t;return{c(){t=y("rect"),A(t,"width","100"),A(t,"height","100%"),A(t,"x","0"),A(t,"y","0"),A(t,"fill",e[8]),A(t,"class","progress-bg svelte-mnjwk")},m(e,r){b(e,t,r)},p(e,r){256&r&&A(t,"fill",e[8])},d(e){e&&k(t)}}}function Me(e){let t,r,s=e[12].label+"";return{c(){t=y("foreignObject"),r=w("div"),A(r,"class","progress-value-content svelte-mnjwk"),C(r,"font-size",e[4]+"%"),C(r,"color",e[9]),C(r,"top","-"+e[3]+"px"),A(t,"class","progress-value svelte-mnjwk"),A(t,"x","0"),A(t,"y","0"),A(t,"width","100%"),A(t,"height","100%")},m(e,n){b(e,t,n),$(t,r),r.innerHTML=s},p(e,t){4096&t&&s!==(s=e[12].label+"")&&(r.innerHTML=s),16&t&&C(r,"font-size",e[4]+"%"),512&t&&C(r,"color",e[9]),8&t&&C(r,"top","-"+e[3]+"px")},d(e){e&&k(t)}}}function Ve(t){let r,s,n,l,o,i,c=t[12].series,a=[];for(let e=0;e<c.length;e+=1)a[e]=Se(Ce(t,c,e));let u="default"==t[5]&&t[6]&&Pe(t);function d(e,t){return"thin"==e[5]?ze:je}let h=d(t),f=h(t);return{c(){r=y("svg"),s=y("defs"),n=y("linearGradient");for(let e=0;e<a.length;e+=1)a[e].c();u&&u.c(),f.c(),A(n,"id",t[14]),A(r,"class",l="progressbar progressbar-"+t[5]+" "+t[11]+" svelte-mnjwk"),A(r,"viewBox",o="0 0 100 "+t[3]),A(r,"width",t[2]),A(r,"height",i=t[2]*t[3]/100),A(r,"xmlns","http://www.w3.org/2000/svg")},m(e,t){b(e,r,t),$(r,s),$(s,n);for(let e=0;e<a.length;e+=1)a[e].m(n,null);u&&u.m(s,null),f.m(r,null)},p(e,[t]){if(4096&t){let r;for(c=e[12].series,r=0;r<c.length;r+=1){const s=Ce(e,c,r);a[r]?a[r].p(s,t):(a[r]=Se(s),a[r].c(),a[r].m(n,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=c.length}"default"==e[5]&&e[6]?u?u.p(e,t):(u=Pe(e),u.c(),u.m(s,null)):u&&(u.d(1),u=null),h===(h=d(e))&&f?f.p(e,t):(f.d(1),f=h(e),f&&(f.c(),f.m(r,null))),2080&t&&l!==(l="progressbar progressbar-"+e[5]+" "+e[11]+" svelte-mnjwk")&&A(r,"class",l),8&t&&o!==(o="0 0 100 "+e[3])&&A(r,"viewBox",o),4&t&&A(r,"width",e[2]),12&t&&i!==(i=e[2]*e[3]/100)&&A(r,"height",i)},i:e,o:e,d(e){e&&k(r),v(a,e),u&&u.d(),f.d()}}}function Fe(t,r,s){let n,l=e,o=()=>(l(),l=c(b,e=>s(12,n=e)),b);t.$$.on_destroy.push(()=>l());let{style:i="default"}=r,{rx:a=2}=r,{ry:u=2}=r,{width:d=null}=r,{height:h=null}=r,{textSize:f=null}=r,{showProgressValue:g=!0}=r,{addBackground:p=!0}=r,{bgColor:m=null}=r,{labelColor:$=null}=r,{store:b}=r;o();let{cls:k=""}=r;const v=(new Date).getTime(),w="tx_mask_"+v+Math.floor(999*Math.random()),y="pb_gradient_"+v+Math.floor(999*Math.random());return null==d&&(d=150),null==h&&(h="thin"==i?1:14),null==f&&(f="thin"==i?40:70),"thin"==i&&(a=.2,u=.2),t.$$set=e=>{"style"in e&&s(5,i=e.style),"rx"in e&&s(0,a=e.rx),"ry"in e&&s(1,u=e.ry),"width"in e&&s(2,d=e.width),"height"in e&&s(3,h=e.height),"textSize"in e&&s(4,f=e.textSize),"showProgressValue"in e&&s(6,g=e.showProgressValue),"addBackground"in e&&s(7,p=e.addBackground),"bgColor"in e&&s(8,m=e.bgColor),"labelColor"in e&&s(9,$=e.labelColor),"store"in e&&o(s(10,b=e.store)),"cls"in e&&s(11,k=e.cls)},[a,u,d,h,f,i,g,p,m,$,b,k,n,w,y]}class Le extends Q{constructor(e){var t;super(),document.getElementById("svelte-mnjwk-style")||((t=w("style")).id="svelte-mnjwk-style",t.textContent=".progressbar-thin.svelte-mnjwk.svelte-mnjwk{overflow:visible}.progress-bg.svelte-mnjwk.svelte-mnjwk{fill:#f1f1f1}.progress-value-inverted.svelte-mnjwk.svelte-mnjwk{fill:#fff;color:#fff}.progress-value-content.svelte-mnjwk.svelte-mnjwk{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center}.progressbar-thin.svelte-mnjwk .progress-value.svelte-mnjwk{overflow:visible}.progressbar-thin.svelte-mnjwk .progress-value-content.svelte-mnjwk{transform:translateY(-100%)}",$(document.head,t)),K(this,e,Fe,Ve,i,{style:5,rx:0,ry:1,width:2,height:3,textSize:4,showProgressValue:6,addBackground:7,bgColor:8,labelColor:9,store:10,cls:11})}}function Ee(e){let t,r;return t=new Le({props:{store:e[17],addBackground:e[9],bgColor:e[11],labelColor:e[12],style:e[1],width:e[3],height:e[5],textSize:e[6],cls:e[13],showProgressValue:e[2],rx:e[14],ry:e[0]}}),{c(){G(t.$$.fragment)},m(e,s){Y(t,e,s),r=!0},p(e,r){const s={};512&r&&(s.addBackground=e[9]),2048&r&&(s.bgColor=e[11]),4096&r&&(s.labelColor=e[12]),2&r&&(s.style=e[1]),8&r&&(s.width=e[3]),32&r&&(s.height=e[5]),64&r&&(s.textSize=e[6]),8192&r&&(s.cls=e[13]),4&r&&(s.showProgressValue=e[2]),16384&r&&(s.rx=e[14]),1&r&&(s.ry=e[0]),t.$set(s)},i(e){r||(D(t.$$.fragment,e),r=!0)},o(e){q(t.$$.fragment,e),r=!1},d(e){Z(t,e)}}}function Te(e){let t,r;return t=new Ae({props:{store:e[17],colors:e[15],thresholds:e[16],stackSeries:e[7],addBackground:e[9],bgColor:e[11],bgFillColor:e[10],labelColor:e[12],margin:e[8],style:e[1],thickness:e[4],width:e[3],height:e[5],textSize:e[6],cls:e[13],showProgressValue:e[2],startAngle:-90,endAngle:90,$$slots:{default:[He]},$$scope:{ctx:e}}}),{c(){G(t.$$.fragment)},m(e,s){Y(t,e,s),r=!0},p(e,r){const s={};32768&r&&(s.colors=e[15]),65536&r&&(s.thresholds=e[16]),128&r&&(s.stackSeries=e[7]),512&r&&(s.addBackground=e[9]),2048&r&&(s.bgColor=e[11]),1024&r&&(s.bgFillColor=e[10]),4096&r&&(s.labelColor=e[12]),256&r&&(s.margin=e[8]),2&r&&(s.style=e[1]),16&r&&(s.thickness=e[4]),8&r&&(s.width=e[3]),32&r&&(s.height=e[5]),64&r&&(s.textSize=e[6]),8192&r&&(s.cls=e[13]),4&r&&(s.showProgressValue=e[2]),4194304&r&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){r||(D(t.$$.fragment,e),r=!0)},o(e){q(t.$$.fragment,e),r=!1},d(e){Z(t,e)}}}function Ne(e){let t,r;return t=new Ae({props:{store:e[17],colors:e[15],thresholds:e[16],stackSeries:e[7],addBackground:e[9],bgColor:e[11],bgFillColor:e[10],labelColor:e[12],margin:e[8],style:e[1],thickness:e[4],width:e[3],height:e[5],textSize:e[6],cls:e[13],showProgressValue:e[2],$$slots:{default:[Ie]},$$scope:{ctx:e}}}),{c(){G(t.$$.fragment)},m(e,s){Y(t,e,s),r=!0},p(e,r){const s={};32768&r&&(s.colors=e[15]),65536&r&&(s.thresholds=e[16]),128&r&&(s.stackSeries=e[7]),512&r&&(s.addBackground=e[9]),2048&r&&(s.bgColor=e[11]),1024&r&&(s.bgFillColor=e[10]),4096&r&&(s.labelColor=e[12]),256&r&&(s.margin=e[8]),2&r&&(s.style=e[1]),16&r&&(s.thickness=e[4]),8&r&&(s.width=e[3]),32&r&&(s.height=e[5]),64&r&&(s.textSize=e[6]),8192&r&&(s.cls=e[13]),4&r&&(s.showProgressValue=e[2]),4194304&r&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){r||(D(t.$$.fragment,e),r=!0)},o(e){q(t.$$.fragment,e),r=!1},d(e){Z(t,e)}}}function He(e){let t;const r=e[21].default,s=a(r,e,e[22],null);return{c(){s&&s.c()},m(e,r){s&&s.m(e,r),t=!0},p(e,t){s&&s.p&&4194304&t&&d(s,r,e,e[22],t,null,null)},i(e){t||(D(s,e),t=!0)},o(e){q(s,e),t=!1},d(e){s&&s.d(e)}}}function Ie(e){let t;const r=e[21].default,s=a(r,e,e[22],null);return{c(){s&&s.c()},m(e,r){s&&s.m(e,r),t=!0},p(e,t){s&&s.p&&4194304&t&&d(s,r,e,e[22],t,null,null)},i(e){t||(D(s,e),t=!0)},o(e){q(s,e),t=!1},d(e){s&&s.d(e)}}}function We(e){let t,r,s,n;const l=[Ne,Te,Ee],o=[];function i(e,t){return"radial"==e[1]?0:"semicircle"==e[1]?1:2}return t=i(e),r=o[t]=l[t](e),{c(){r.c(),s=x()},m(e,r){o[t].m(e,r),b(e,s,r),n=!0},p(e,[n]){let c=t;t=i(e),t===c?o[t].p(e,n):(I(),q(o[c],1,1,()=>{o[c]=null}),W(),r=o[t],r||(r=o[t]=l[t](e),r.c()),D(r,1),r.m(s.parentNode,s))},i(e){n||(D(r),n=!0)},o(e){q(r),n=!1},d(e){o[t].d(e),e&&k(s)}}}function De(e,t,r){let{$$slots:s={},$$scope:n}=t,{series:l=[]}=t,{style:o="default"}=t,{showProgressValue:i=!0}=t,{width:c=null}=t,{thickness:a=null}=t,{height:u=null}=t,{textSize:d=null}=t,{stackSeries:h=!0}=t,{margin:f=0}=t,{addBackground:g=!0}=t,{bgFillColor:p="transparent"}=t,{bgColor:m="#e5e5e5"}=t,{labelColor:$="#555"}=t,{valueLabel:b=null}=t,{cls:k=""}=t,{rx:v=2}=t,{ry:w=null}=t;null==w&&(w=v);let{colors:y=["#FFC107","#4CAF50","#03A9F4"]}=t,{thresholds:x=[]}=t;x.length>0&&x.sort((e,t)=>e.till-t.till);const A=se(l,{valueLabel:b,colors:y,thresholds:x,stackSeries:h,thickness:a,margin:f});return e.$$set=e=>{"series"in e&&r(18,l=e.series),"style"in e&&r(1,o=e.style),"showProgressValue"in e&&r(2,i=e.showProgressValue),"width"in e&&r(3,c=e.width),"thickness"in e&&r(4,a=e.thickness),"height"in e&&r(5,u=e.height),"textSize"in e&&r(6,d=e.textSize),"stackSeries"in e&&r(7,h=e.stackSeries),"margin"in e&&r(8,f=e.margin),"addBackground"in e&&r(9,g=e.addBackground),"bgFillColor"in e&&r(10,p=e.bgFillColor),"bgColor"in e&&r(11,m=e.bgColor),"labelColor"in e&&r(12,$=e.labelColor),"valueLabel"in e&&r(19,b=e.valueLabel),"cls"in e&&r(13,k=e.cls),"rx"in e&&r(14,v=e.rx),"ry"in e&&r(0,w=e.ry),"colors"in e&&r(15,y=e.colors),"thresholds"in e&&r(16,x=e.thresholds),"$$scope"in e&&r(22,n=e.$$scope)},e.$$.update=()=>{262144&e.$$.dirty&&A.updateSeries(l),524288&e.$$.dirty&&null!=b&&A.updateLabel(b)},[w,o,i,c,a,u,d,h,f,g,p,m,$,k,v,y,x,A,l,b,function(e,t=0){Array.isArray(l)||r(18,l=[l]),l[t]&&"object"==typeof l[t]?r(18,l[t].perc=e,l):r(18,l[t]={perc:e},l)},s,n]}return class extends Q{constructor(e){var t;super(),document.getElementById("svelte-1slq1wb-style")||((t=w("style")).id="svelte-1slq1wb-style",t.textContent=".progress-value{position:fixed}",$(document.head,t)),K(this,e,De,We,i,{series:18,style:1,showProgressValue:2,width:3,thickness:4,height:5,textSize:6,stackSeries:7,margin:8,addBackground:9,bgFillColor:10,bgColor:11,labelColor:12,valueLabel:19,cls:13,rx:14,ry:0,colors:15,thresholds:16,updatePerc:20})}get series(){return this.$$.ctx[18]}set series(e){this.$set({series:e}),E()}get style(){return this.$$.ctx[1]}set style(e){this.$set({style:e}),E()}get showProgressValue(){return this.$$.ctx[2]}set showProgressValue(e){this.$set({showProgressValue:e}),E()}get width(){return this.$$.ctx[3]}set width(e){this.$set({width:e}),E()}get thickness(){return this.$$.ctx[4]}set thickness(e){this.$set({thickness:e}),E()}get height(){return this.$$.ctx[5]}set height(e){this.$set({height:e}),E()}get textSize(){return this.$$.ctx[6]}set textSize(e){this.$set({textSize:e}),E()}get stackSeries(){return this.$$.ctx[7]}set stackSeries(e){this.$set({stackSeries:e}),E()}get margin(){return this.$$.ctx[8]}set margin(e){this.$set({margin:e}),E()}get addBackground(){return this.$$.ctx[9]}set addBackground(e){this.$set({addBackground:e}),E()}get bgFillColor(){return this.$$.ctx[10]}set bgFillColor(e){this.$set({bgFillColor:e}),E()}get bgColor(){return this.$$.ctx[11]}set bgColor(e){this.$set({bgColor:e}),E()}get labelColor(){return this.$$.ctx[12]}set labelColor(e){this.$set({labelColor:e}),E()}get valueLabel(){return this.$$.ctx[19]}set valueLabel(e){this.$set({valueLabel:e}),E()}get cls(){return this.$$.ctx[13]}set cls(e){this.$set({cls:e}),E()}get rx(){return this.$$.ctx[14]}set rx(e){this.$set({rx:e}),E()}get ry(){return this.$$.ctx[0]}set ry(e){this.$set({ry:e}),E()}get colors(){return this.$$.ctx[15]}set colors(e){this.$set({colors:e}),E()}get thresholds(){return this.$$.ctx[16]}set thresholds(e){this.$set({thresholds:e}),E()}get updatePerc(){return this.$$.ctx[20]}}}));
