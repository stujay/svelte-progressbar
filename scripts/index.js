!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).ProgressBar=t()}(this,(function(){"use strict";function e(){}const t=e=>e;function r(e,t){for(const r in t)e[r]=t[r];return e}function s(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(s)}function l(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(t,...r){if(null==t)return e;const s=t.subscribe(...r);return s.unsubscribe?()=>s.unsubscribe():s}const a="undefined"!=typeof window;let u=a?()=>window.performance.now():()=>Date.now(),d=a?e=>requestAnimationFrame(e):e;const h=new Set;function g(e){h.forEach(t=>{t.c(e)||(h.delete(t),t.f())}),0!==h.size&&d(g)}function f(e,t){e.appendChild(t)}function p(e,t,r){e.insertBefore(t,r||null)}function m(e){e.parentNode.removeChild(e)}function $(e,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}function b(e){return document.createElement(e)}function k(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function w(){return e="",document.createTextNode(e);var e}function v(e,t,r){null==r?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function x(e,t,r,s){e.style.setProperty(t,r,s?"important":"")}let y;function A(e){y=e}const C=[],S=[],P=[],z=[],j=Promise.resolve();let O=!1;function B(e){P.push(e)}let _=!1;const M=new Set;function V(){if(!_){_=!0;do{for(let e=0;e<C.length;e+=1){const t=C[e];A(t),F(t.$$)}for(C.length=0;S.length;)S.pop()();for(let e=0;e<P.length;e+=1){const t=P[e];M.has(t)||(M.add(t),t())}P.length=0}while(C.length);for(;z.length;)z.pop()();O=!1,_=!1,M.clear()}}function F(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}const L=new Set;let E;function T(){E={r:0,c:[],p:E}}function N(){E.r||o(E.c),E=E.p}function H(e,t){e&&e.i&&(L.delete(e),e.i(t))}function W(e,t,r,s){if(e&&e.o){if(L.has(e))return;L.add(e),E.c.push(()=>{L.delete(e),s&&(r&&e.d(1),s())}),e.o(t)}}function I(e){e&&e.c()}function D(e,t,r){const{fragment:n,on_mount:i,on_destroy:c,after_update:a}=e.$$;n&&n.m(t,r),B(()=>{const t=i.map(s).filter(l);c?c.push(...t):o(t),e.$$.on_mount=[]}),a.forEach(B)}function q(e,t){const r=e.$$;null!==r.fragment&&(o(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function G(e,t){-1===e.$$.dirty[0]&&(C.push(e),O||(O=!0,j.then(V)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(t,r,s,l,i,c,a=[-1]){const u=y;A(t);const d=r.props||{},h=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:a,skip_bound:!1};let g=!1;if(h.ctx=s?s(t,d,(e,r,...s)=>{const n=s.length?s[0]:r;return h.ctx&&i(h.ctx[e],h.ctx[e]=n)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](n),g&&G(t,e)),r}):[],h.update(),g=!0,o(h.before_update),h.fragment=!!l&&l(h.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);h.fragment&&h.fragment.l(e),e.forEach(m)}else h.fragment&&h.fragment.c();r.intro&&H(t.$$.fragment),D(t,r.target,r.anchor),V()}A(u)}class J{$destroy(){q(this,1),this.$destroy=e}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const e=r.indexOf(t);-1!==e&&r.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const K=[];function Q(e){return"[object Date]"===Object.prototype.toString.call(e)}function R(e,t){if(e===t||e!=e)return()=>e;const r=typeof e;if(r!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const r=t.map((t,r)=>R(e[r],t));return e=>r.map(t=>t(e))}if("object"===r){if(!e||!t)throw new Error("Object cannot be null");if(Q(e)&&Q(t)){e=e.getTime();const r=(t=t.getTime())-e;return t=>new Date(e+t*r)}const r=Object.keys(t),s={};return r.forEach(r=>{s[r]=R(e[r],t[r])}),e=>{const t={};return r.forEach(r=>{t[r]=s[r](e)}),t}}if("number"===r){const r=t-e;return t=>e+t*r}throw new Error(`Cannot interpolate ${r} values`)}function U(s,n={}){const o=function(t,r=e){let s;const n=[];function o(e){if(i(t,e)&&(t=e,s)){const e=!K.length;for(let e=0;e<n.length;e+=1){const r=n[e];r[1](),K.push(r,t)}if(e){for(let e=0;e<K.length;e+=2)K[e][0](K[e+1]);K.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(l,i=e){const c=[l,i];return n.push(c),1===n.length&&(s=r(o)||e),l(t),()=>{const e=n.indexOf(c);-1!==e&&n.splice(e,1),0===n.length&&(s(),s=null)}}}}(s);let l,c=s;function a(e,i){if(null==s)return o.set(s=e),Promise.resolve();c=e;let a=l,f=!1,{delay:p=0,duration:m=400,easing:$=t,interpolate:b=R}=r(r({},n),i);if(0===m)return a&&(a.abort(),a=null),o.set(s=c),Promise.resolve();const k=u()+p;let w;return l=function(e){let t;return 0===h.size&&d(g),{promise:new Promise(r=>{h.add(t={c:e,f:r})}),abort(){h.delete(t)}}}(t=>{if(t<k)return!0;f||(w=b(s,e),"function"==typeof m&&(m=m(s,e)),f=!0),a&&(a.abort(),a=null);const r=t-k;return r>m?(o.set(s=e),!1):(o.set(s=w($(r/m))),!0)}),l.promise}return{set:a,update:(e,t)=>a(e(c,s),t),subscribe:o.subscribe}}const X={duration:1e3,easing:function(e){const t=e-1;return t*t*t+1}};function Y(e){return e.reduce((e,t)=>(e.push(t.perc+"%"),e),[]).join(" + ")}function ee(e,t){var r=!1;function s(r,s){let n=null;if(t.thresholds&&t.thresholds.length>0){const e=t.thresholds.find((e,t)=>r.perc<=e.till||t==thresholds.length-1);e&&(n=e.color)}if(!n)if(e[s]&&e[s].hasOwnProperty("color")&&e[s].color)n=e[s].color;else{const e=t.colors.length;n=t.colors[s%e]}return n}function n(e,r){let n={};return"object"!=typeof e?n={perc:e}:n.perc=e.perc,n.color=s(n,r),n.prevOffset=0,t.stackSeries?n.radius=50-t.thickness:n.radius=50-(r+1)*t.thickness-(r>0?t.margin:0),n}Array.isArray(e)||(e=[e]);const{subscribe:o,set:l,update:i}=U({series:e.map((e,t)=>n({perc:0},t)),overallPerc:0,label:""},{...X,interpolate:(e,o)=>l=>{const i=[];let c=0;const a=e.series.length,u=o.series.length;if(a<u)for(let t=a;t<u;t++)e.series.push(n(0,0));else if(a>u)for(let e=u;e<a;e++)o.series.push(n(0,0));return e.series.forEach((e,r)=>{const n=o.series[r];n.perc>e.perc?i[r]={perc:Math.round(e.perc+(n.perc-e.perc)*l),prevOffset:e.prevOffset+(n.prevOffset-e.prevOffset)*l}:i[r]={perc:Math.round(e.perc-(e.perc-n.perc)*l),prevOffset:e.prevOffset-(e.prevOffset-n.prevOffset)*l},i[r].color=s(i[r],r),c+=i[r].perc,t.stackSeries?i[r].radius=50-t.thickness:i[r].radius=50-(r+1)*t.thickness-(r>0?t.margin:0)}),{series:i,label:r?e.label:Y(i),overallPerc:c}}});return{subscribe:o,set:l,updateSeries:e=>{Array.isArray(e)||(e=[e]),e=e.map(e=>("object"!=typeof e&&(e={perc:e}),e)),i(t=>{const s={series:t.series.map(e=>e),overallPerc:t.overallPerc,label:""};if(e.forEach((e,t)=>{s.series[t]=n(e,t)}),e.length<t.series.length)for(let r=e.length;r<t.series.length;r++)s.series[r]=n(0,0);let o=0;return s.series.forEach(e=>{e.prevOffset=o,o+=e.perc}),s.overallPerc=o,s.label=r?t.label:Y(s.series),s})},updateLabel:e=>{e&&(r=!0,i(t=>({series:t.series.map(e=>e),overallPerc:t.overallPerc,label:e})))}}}function te(e,t,r,s,n,o){360==n&&(n=359.9999);const l=re(e,t,r,n),i=re(e,t,r,s),c=n-s<=180?"0":"1";return["M",l.x,l.y,"A",r,r,0,c,0,i.x,i.y,o?"Z":""].join(" ")}function re(e,t,r,s){const n=((s%=360)-90)*Math.PI/180;return{x:e+r*Math.cos(n),y:t+r*Math.sin(n)}}function se(t){let r,s;return{c(){r=k("path"),v(r,"d",s=te(50,50,t[0],t[1],t[2],t[7])),v(r,"fill",t[3]),v(r,"stroke",t[4]),v(r,"stroke-width",t[5]),v(r,"class",t[6])},m(e,t){p(e,r,t)},p(e,[t]){135&t&&s!==(s=te(50,50,e[0],e[1],e[2],e[7]))&&v(r,"d",s),8&t&&v(r,"fill",e[3]),16&t&&v(r,"stroke",e[4]),32&t&&v(r,"stroke-width",e[5]),64&t&&v(r,"class",e[6])},i:e,o:e,d(e){e&&m(r)}}}function ne(e,t,r){let{radius:s}=t,{startAngle:n=null}=t,{endAngle:o=null}=t,{fill:l}=t,{stroke:i}=t,{strokeWidth:c=0}=t,{cls:a}=t,{closeArc:u=!1}=t;return e.$$set=e=>{"radius"in e&&r(0,s=e.radius),"startAngle"in e&&r(1,n=e.startAngle),"endAngle"in e&&r(2,o=e.endAngle),"fill"in e&&r(3,l=e.fill),"stroke"in e&&r(4,i=e.stroke),"strokeWidth"in e&&r(5,c=e.strokeWidth),"cls"in e&&r(6,a=e.cls),"closeArc"in e&&r(7,u=e.closeArc)},[s,n,o,l,i,c,a,u]}class oe extends J{constructor(e){super(),Z(this,e,ne,se,i,{radius:0,startAngle:1,endAngle:2,fill:3,stroke:4,strokeWidth:5,cls:6,closeArc:7})}}function le(e){let t,r,s;return{c(){t=k("path"),v(t,"d",r=e[6](50,50,e[5].series[e[2]].radius,0,100)),v(t,"fill","transparent"),v(t,"stroke",s=e[5].series[e[2]].color),v(t,"stroke-width",e[0]),v(t,"class","pb-arc")},m(e,r){p(e,t,r)},p(e,n){36&n&&r!==(r=e[6](50,50,e[5].series[e[2]].radius,0,100))&&v(t,"d",r),36&n&&s!==(s=e[5].series[e[2]].color)&&v(t,"stroke",s),1&n&&v(t,"stroke-width",e[0])},d(e){e&&m(t)}}}function ie(e){let t;function r(e,t){return e[4]?ae:ce}let s=r(e),n=s(e);return{c(){n.c(),t=w()},m(e,r){n.m(e,r),p(e,t,r)},p(e,o){s===(s=r(e))&&n?n.p(e,o):(n.d(1),n=s(e),n&&(n.c(),n.m(t.parentNode,t)))},d(e){n.d(e),e&&m(t)}}}function ce(e){let t,r,s;return{c(){t=k("path"),v(t,"d",r=e[6](50,50,e[5].series[e[2]].radius,0,e[5].series[e[2]].perc)),v(t,"fill","transparent"),v(t,"stroke",s=e[5].series[e[2]].color),v(t,"stroke-width",e[0]),v(t,"class","pb-arc")},m(e,r){p(e,t,r)},p(e,n){36&n&&r!==(r=e[6](50,50,e[5].series[e[2]].radius,0,e[5].series[e[2]].perc))&&v(t,"d",r),36&n&&s!==(s=e[5].series[e[2]].color)&&v(t,"stroke",s),1&n&&v(t,"stroke-width",e[0])},d(e){e&&m(t)}}}function ae(e){let t,r,s;return{c(){t=k("path"),v(t,"d",r=e[6](50,50,e[5].series[e[2]].radius,e[5].series[e[2]].prevOffset,e[5].series[e[2]].prevOffset+e[5].series[e[2]].perc)),v(t,"fill","transparent"),v(t,"stroke",s=e[5].series[e[2]].color),v(t,"stroke-width",e[0]),v(t,"class","pb-arc")},m(e,r){p(e,t,r)},p(e,n){36&n&&r!==(r=e[6](50,50,e[5].series[e[2]].radius,e[5].series[e[2]].prevOffset,e[5].series[e[2]].prevOffset+e[5].series[e[2]].perc))&&v(t,"d",r),36&n&&s!==(s=e[5].series[e[2]].color)&&v(t,"stroke",s),1&n&&v(t,"stroke-width",e[0])},d(e){e&&m(t)}}}function ue(t){let r;function s(e,t){return e[1]?le:ie}let n=s(t),o=n(t);return{c(){o.c(),r=w()},m(e,t){o.m(e,t),p(e,r,t)},p(e,[t]){n===(n=s(e))&&o?o.p(e,t):(o.d(1),o=n(e),o&&(o.c(),o.m(r.parentNode,r)))},i:e,o:e,d(e){o.d(e),e&&m(r)}}}function de(t,r,s){let n,o=e,l=()=>(o(),o=c(g,e=>s(5,n=e)),g);t.$$.on_destroy.push(()=>o());let{thickness:i}=r,{startAngle:a}=r,{endAngle:u}=r,{bg:d=!1}=r,{serieIdx:h}=r,{store:g}=r;l();let{stackSeries:f}=r;return i||(i=2),t.$$set=e=>{"thickness"in e&&s(0,i=e.thickness),"startAngle"in e&&s(7,a=e.startAngle),"endAngle"in e&&s(8,u=e.endAngle),"bg"in e&&s(1,d=e.bg),"serieIdx"in e&&s(2,h=e.serieIdx),"store"in e&&l(s(3,g=e.store)),"stackSeries"in e&&s(4,f=e.stackSeries)},[i,d,h,g,f,n,function(e,t,r,s,n){return s<0&&(s=0),n>100&&(n=100),te(e,t,r,a+s/100*(u-a),a+n/100*(u-a),!1)},a,u]}class he extends J{constructor(e){super(),Z(this,e,de,ue,i,{thickness:0,startAngle:7,endAngle:8,bg:1,serieIdx:2,store:3,stackSeries:4})}}function ge(e,t,r){const s=e.slice();return s[25]=t[r],s[27]=r,s}function fe(e){let t,r,s,n,o;return s=new he({props:{store:e[17],serieIdx:0,thickness:e[3],startAngle:e[10],endAngle:e[11]}}),n=new oe({props:{radius:50-e[3],fill:"#fff",startAngle:e[10],endAngle:e[11],closeArc:"true"}}),{c(){t=k("defs"),r=k("mask"),I(s.$$.fragment),I(n.$$.fragment),v(r,"id",e[16]),v(r,"x","0"),v(r,"y","0"),v(r,"width","100"),v(r,"height","100%")},m(e,l){p(e,t,l),f(t,r),D(s,r,null),D(n,r,null),o=!0},p(e,t){const r={};8&t&&(r.thickness=e[3]),1024&t&&(r.startAngle=e[10]),2048&t&&(r.endAngle=e[11]),s.$set(r);const o={};8&t&&(o.radius=50-e[3]),1024&t&&(o.startAngle=e[10]),2048&t&&(o.endAngle=e[11]),n.$set(o)},i(e){o||(H(s.$$.fragment,e),H(n.$$.fragment,e),o=!0)},o(e){W(s.$$.fragment,e),W(n.$$.fragment,e),o=!1},d(e){e&&m(t),q(s),q(n)}}}function pe(e){let t,r;return t=new oe({props:{radius:e[15].series[0].radius,fill:e[8],startAngle:e[10],endAngle:e[11],strokeWidth:e[3],stroke:e[7]}}),{c(){I(t.$$.fragment)},m(e,s){D(t,e,s),r=!0},p(e,r){const s={};32768&r&&(s.radius=e[15].series[0].radius),256&r&&(s.fill=e[8]),1024&r&&(s.startAngle=e[10]),2048&r&&(s.endAngle=e[11]),8&r&&(s.strokeWidth=e[3]),128&r&&(s.stroke=e[7]),t.$set(s)},i(e){r||(H(t.$$.fragment,e),r=!0)},o(e){W(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function me(e){let t,r;return t=new oe({props:{radius:e[25].radius,fill:e[8],startAngle:e[10],endAngle:e[11],strokeWidth:e[3],stroke:e[7]}}),{c(){I(t.$$.fragment)},m(e,s){D(t,e,s),r=!0},p(e,r){const s={};16384&r&&(s.radius=e[25].radius),256&r&&(s.fill=e[8]),1024&r&&(s.startAngle=e[10]),2048&r&&(s.endAngle=e[11]),8&r&&(s.strokeWidth=e[3]),128&r&&(s.stroke=e[7]),t.$set(s)},i(e){r||(H(t.$$.fragment,e),r=!0)},o(e){W(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function $e(e){let t,r,s,n=!e[5]&&e[6]&&me(e);return r=new he({props:{store:e[12],serieIdx:e[27],thickness:e[3],startAngle:e[10],endAngle:e[11],stackSeries:e[5]}}),{c(){n&&n.c(),t=w(),I(r.$$.fragment)},m(e,o){n&&n.m(e,o),p(e,t,o),D(r,e,o),s=!0},p(e,s){!e[5]&&e[6]?n?(n.p(e,s),96&s&&H(n,1)):(n=me(e),n.c(),H(n,1),n.m(t.parentNode,t)):n&&(T(),W(n,1,1,()=>{n=null}),N());const o={};4096&s&&(o.store=e[12]),8&s&&(o.thickness=e[3]),1024&s&&(o.startAngle=e[10]),2048&s&&(o.endAngle=e[11]),32&s&&(o.stackSeries=e[5]),r.$set(o)},i(e){s||(H(n),H(r.$$.fragment,e),s=!0)},o(e){W(n),W(r.$$.fragment,e),s=!1},d(e){n&&n.d(e),e&&m(t),q(r,e)}}}function be(e){let t,r,s,n,o,l=e[14].label+"",i=e[14].label+"";return{c(){t=k("foreignObject"),r=b("div"),s=k("foreignObject"),n=b("div"),v(r,"class","progress-value-content svelte-1dki5hv"),x(r,"font-size",e[2]+"%"),x(r,"color",e[9]),v(t,"class","progress-value progress-value-inverted svelte-1dki5hv"),v(t,"x","0"),v(t,"y","0"),v(t,"width","100%"),v(t,"height","100%"),v(n,"class","progress-value-content svelte-1dki5hv"),x(n,"font-size",e[2]+"%"),x(n,"color",e[9]),v(s,"mask",o="url(#"+e[16]+")"),v(s,"class","progress-value"),v(s,"x","0"),v(s,"y","0"),v(s,"width","100%"),v(s,"height","100%")},m(e,o){p(e,t,o),f(t,r),r.innerHTML=l,p(e,s,o),f(s,n),n.innerHTML=i},p(e,t){16384&t&&l!==(l=e[14].label+"")&&(r.innerHTML=l),4&t&&x(r,"font-size",e[2]+"%"),512&t&&x(r,"color",e[9]),16384&t&&i!==(i=e[14].label+"")&&(n.innerHTML=i),4&t&&x(n,"font-size",e[2]+"%"),512&t&&x(n,"color",e[9])},d(e){e&&m(t),e&&m(s)}}}function ke(e){let t,r,s,n,o,l,i,c=e[4]&&fe(e),a=e[6]&&e[5]&&pe(e),u=e[14].series,d=[];for(let t=0;t<u.length;t+=1)d[t]=$e(ge(e,u,t));const h=e=>W(d[e],1,1,()=>{d[e]=null});let g=e[4]&&be(e);return{c(){t=k("svg"),c&&c.c(),r=w(),a&&a.c(),s=w();for(let e=0;e<d.length;e+=1)d[e].c();n=w(),g&&g.c(),v(t,"class",o="progressbar progressbar-"+e[13]+" svelte-1dki5hv"),v(t,"viewBox",l="0 0 100 "+e[1]),v(t,"width",e[0]),v(t,"xmlns","http://www.w3.org/2000/svg")},m(e,o){p(e,t,o),c&&c.m(t,null),f(t,r),a&&a.m(t,null),f(t,s);for(let e=0;e<d.length;e+=1)d[e].m(t,null);f(t,n),g&&g.m(t,null),i=!0},p(e,[f]){if(e[4]?c?(c.p(e,f),16&f&&H(c,1)):(c=fe(e),c.c(),H(c,1),c.m(t,r)):c&&(T(),W(c,1,1,()=>{c=null}),N()),e[6]&&e[5]?a?(a.p(e,f),96&f&&H(a,1)):(a=pe(e),a.c(),H(a,1),a.m(t,s)):a&&(T(),W(a,1,1,()=>{a=null}),N()),24040&f){let r;for(u=e[14].series,r=0;r<u.length;r+=1){const s=ge(e,u,r);d[r]?(d[r].p(s,f),H(d[r],1)):(d[r]=$e(s),d[r].c(),H(d[r],1),d[r].m(t,n))}for(T(),r=u.length;r<d.length;r+=1)h(r);N()}e[4]?g?g.p(e,f):(g=be(e),g.c(),g.m(t,null)):g&&(g.d(1),g=null),(!i||8192&f&&o!==(o="progressbar progressbar-"+e[13]+" svelte-1dki5hv"))&&v(t,"class",o),(!i||2&f&&l!==(l="0 0 100 "+e[1]))&&v(t,"viewBox",l),(!i||1&f)&&v(t,"width",e[0])},i(e){if(!i){H(c),H(a);for(let e=0;e<u.length;e+=1)H(d[e]);i=!0}},o(e){W(c),W(a),d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)W(d[e]);i=!1},d(e){e&&m(t),c&&c.d(),a&&a.d(),$(d,e),g&&g.d()}}}function we(t,r,s){let n,o,l=e,i=()=>(l(),l=c(A,e=>s(14,n=e)),A);t.$$.on_destroy.push(()=>l());let{thickness:a=5}=r,{width:u=null}=r,{height:d=null}=r,{textSize:h=null}=r,{showProgressValue:g=!0}=r,{stackSeries:f=!0}=r,{margin:p=0}=r,{addBackground:m=!0}=r,{bgColor:$="#e5e5e5"}=r,{bgFillColor:b="transparent"}=r,{labelColor:k="#555"}=r,{startAngle:w=0}=r,{endAngle:v=360}=r,{colors:x}=r,{thresholds:y}=r,{store:A}=r;i();let{style:C}=r;const S="tx_mask_"+(new Date).getTime()+Math.floor(999*Math.random());null==u&&(u=75),null==d&&(d=v-w>180?100:50),null==h&&(h=150);const P=ee([{perc:n.overallPerc,radius:50-a*n.series.length,color:"#fff"}],{colors:x,thresholds:y,stackSeries:!1,thickness:a,margin:p});return function(e,t,r){e.$$.on_destroy.push(c(t,r))}(t,P,e=>s(15,o=e)),t.$$set=e=>{"thickness"in e&&s(3,a=e.thickness),"width"in e&&s(0,u=e.width),"height"in e&&s(1,d=e.height),"textSize"in e&&s(2,h=e.textSize),"showProgressValue"in e&&s(4,g=e.showProgressValue),"stackSeries"in e&&s(5,f=e.stackSeries),"margin"in e&&s(18,p=e.margin),"addBackground"in e&&s(6,m=e.addBackground),"bgColor"in e&&s(7,$=e.bgColor),"bgFillColor"in e&&s(8,b=e.bgFillColor),"labelColor"in e&&s(9,k=e.labelColor),"startAngle"in e&&s(10,w=e.startAngle),"endAngle"in e&&s(11,v=e.endAngle),"colors"in e&&s(19,x=e.colors),"thresholds"in e&&s(20,y=e.thresholds),"store"in e&&i(s(12,A=e.store)),"style"in e&&s(13,C=e.style)},[u,d,h,a,g,f,m,$,b,k,w,v,A,C,n,o,S,P,p,x,y]}class ve extends J{constructor(e){super(),Z(this,e,we,ke,i,{thickness:3,width:0,height:1,textSize:2,showProgressValue:4,stackSeries:5,margin:18,addBackground:6,bgColor:7,bgFillColor:8,labelColor:9,startAngle:10,endAngle:11,colors:19,thresholds:20,store:12,style:13})}}function xe(e,t,r){const s=e.slice();return s[18]=t[r],s[20]=r,s}function ye(e){let t,r,s;return{c(){t=k("stop"),v(t,"offset",r=Math.round(100*e[11].series[e[20]].perc/e[11].overallPerc)+"%"),v(t,"stop-color",s=e[11].series[e[20]].color)},m(e,r){p(e,t,r)},p(e,n){2048&n&&r!==(r=Math.round(100*e[11].series[e[20]].perc/e[11].overallPerc)+"%")&&v(t,"offset",r),2048&n&&s!==(s=e[11].series[e[20]].color)&&v(t,"stop-color",s)},d(e){e&&m(t)}}}function Ae(e){let t,r,s,n;return{c(){t=k("mask"),r=k("rect"),v(r,"width",s=100-e[11].overallPerc+"%"),v(r,"height","100%"),v(r,"x",n=e[11].overallPerc+"%"),v(r,"y","0"),v(r,"fill","#fff"),v(t,"id",e[12]),v(t,"x","0"),v(t,"y","0"),v(t,"width","100"),v(t,"height","100%")},m(e,s){p(e,t,s),f(t,r)},p(e,t){2048&t&&s!==(s=100-e[11].overallPerc+"%")&&v(r,"width",s),2048&t&&n!==(n=e[11].overallPerc+"%")&&v(r,"x",n)},d(e){e&&m(t)}}}function Ce(e){let t,r,s,n,o=e[7]&&Pe(e),l=e[6]&&ze(e);return{c(){o&&o.c(),t=k("rect"),l&&l.c(),n=w(),v(t,"width",r=e[11].overallPerc+"%"),v(t,"height","100%"),v(t,"rx",e[0]),v(t,"ry",e[1]),v(t,"y","0"),v(t,"fill",s="url(#"+e[13]+")")},m(e,r){o&&o.m(e,r),p(e,t,r),l&&l.m(e,r),p(e,n,r)},p(e,s){e[7]?o?o.p(e,s):(o=Pe(e),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),2048&s&&r!==(r=e[11].overallPerc+"%")&&v(t,"width",r),1&s&&v(t,"rx",e[0]),2&s&&v(t,"ry",e[1]),e[6]?l?l.p(e,s):(l=ze(e),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},d(e){o&&o.d(e),e&&m(t),l&&l.d(e),e&&m(n)}}}function Se(e){let t,r,s,n,o=e[7]&&je(e),l=e[6]&&Oe(e);return{c(){o&&o.c(),t=k("rect"),l&&l.c(),n=w(),v(t,"width",r=e[11].overallPerc+"%"),v(t,"height","100%"),v(t,"x","0"),v(t,"y","0"),v(t,"fill",s="url(#"+e[13]+")")},m(e,r){o&&o.m(e,r),p(e,t,r),l&&l.m(e,r),p(e,n,r)},p(e,s){e[7]?o?o.p(e,s):(o=je(e),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),2048&s&&r!==(r=e[11].overallPerc+"%")&&v(t,"width",r),e[6]?l?l.p(e,s):(l=Oe(e),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},d(e){o&&o.d(e),e&&m(t),l&&l.d(e),e&&m(n)}}}function Pe(e){let t;return{c(){t=k("rect"),v(t,"width","100"),v(t,"height","100%"),v(t,"rx",e[0]),v(t,"ry",e[1]),v(t,"y","0"),v(t,"fill",e[8]),v(t,"class","progress-bg svelte-mnjwk")},m(e,r){p(e,t,r)},p(e,r){1&r&&v(t,"rx",e[0]),2&r&&v(t,"ry",e[1]),256&r&&v(t,"fill",e[8])},d(e){e&&m(t)}}}function ze(e){let t,r,s,n,o,l=e[11].label+"",i=e[11].label+"";return{c(){t=k("foreignObject"),r=b("div"),s=k("foreignObject"),n=b("div"),v(r,"class","progress-value-content svelte-mnjwk"),x(r,"font-size",e[4]+"%"),v(t,"class","progress-value progress-value-inverted svelte-mnjwk"),v(t,"x","0"),v(t,"y","0"),v(t,"width","100%"),v(t,"height","100%"),v(n,"class","progress-value-content svelte-mnjwk"),x(n,"font-size",e[4]+"%"),x(n,"color",e[9]),v(s,"mask",o="url(#"+e[12]+")"),v(s,"class","progress-value svelte-mnjwk"),v(s,"x","0"),v(s,"y","0"),v(s,"width","100%"),v(s,"height","100%")},m(e,o){p(e,t,o),f(t,r),r.innerHTML=l,p(e,s,o),f(s,n),n.innerHTML=i},p(e,t){2048&t&&l!==(l=e[11].label+"")&&(r.innerHTML=l),16&t&&x(r,"font-size",e[4]+"%"),2048&t&&i!==(i=e[11].label+"")&&(n.innerHTML=i),16&t&&x(n,"font-size",e[4]+"%"),512&t&&x(n,"color",e[9])},d(e){e&&m(t),e&&m(s)}}}function je(e){let t;return{c(){t=k("rect"),v(t,"width","100"),v(t,"height","100%"),v(t,"x","0"),v(t,"y","0"),v(t,"fill",e[8]),v(t,"class","progress-bg svelte-mnjwk")},m(e,r){p(e,t,r)},p(e,r){256&r&&v(t,"fill",e[8])},d(e){e&&m(t)}}}function Oe(e){let t,r,s=e[11].label+"";return{c(){t=k("foreignObject"),r=b("div"),v(r,"class","progress-value-content svelte-mnjwk"),x(r,"font-size",e[4]+"%"),x(r,"color",e[9]),x(r,"top","-"+e[3]+"px"),v(t,"class","progress-value svelte-mnjwk"),v(t,"x","0"),v(t,"y","0"),v(t,"width","100%"),v(t,"height","100%")},m(e,n){p(e,t,n),f(t,r),r.innerHTML=s},p(e,t){2048&t&&s!==(s=e[11].label+"")&&(r.innerHTML=s),16&t&&x(r,"font-size",e[4]+"%"),512&t&&x(r,"color",e[9]),8&t&&x(r,"top","-"+e[3]+"px")},d(e){e&&m(t)}}}function Be(t){let r,s,n,o,l,i,c=t[11].series,a=[];for(let e=0;e<c.length;e+=1)a[e]=ye(xe(t,c,e));let u="default"==t[5]&&t[6]&&Ae(t);function d(e,t){return"thin"==e[5]?Se:Ce}let h=d(t),g=h(t);return{c(){r=k("svg"),s=k("defs"),n=k("linearGradient");for(let e=0;e<a.length;e+=1)a[e].c();u&&u.c(),g.c(),v(n,"id",t[13]),v(r,"class",o="progressbar progressbar-"+t[5]+" svelte-mnjwk"),v(r,"viewBox",l="0 0 100 "+t[3]),v(r,"width",t[2]),v(r,"height",i=t[2]*t[3]/100),v(r,"xmlns","http://www.w3.org/2000/svg")},m(e,t){p(e,r,t),f(r,s),f(s,n);for(let e=0;e<a.length;e+=1)a[e].m(n,null);u&&u.m(s,null),g.m(r,null)},p(e,[t]){if(2048&t){let r;for(c=e[11].series,r=0;r<c.length;r+=1){const s=xe(e,c,r);a[r]?a[r].p(s,t):(a[r]=ye(s),a[r].c(),a[r].m(n,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=c.length}"default"==e[5]&&e[6]?u?u.p(e,t):(u=Ae(e),u.c(),u.m(s,null)):u&&(u.d(1),u=null),h===(h=d(e))&&g?g.p(e,t):(g.d(1),g=h(e),g&&(g.c(),g.m(r,null))),32&t&&o!==(o="progressbar progressbar-"+e[5]+" svelte-mnjwk")&&v(r,"class",o),8&t&&l!==(l="0 0 100 "+e[3])&&v(r,"viewBox",l),4&t&&v(r,"width",e[2]),12&t&&i!==(i=e[2]*e[3]/100)&&v(r,"height",i)},i:e,o:e,d(e){e&&m(r),$(a,e),u&&u.d(),g.d()}}}function _e(t,r,s){let n,o=e,l=()=>(o(),o=c(b,e=>s(11,n=e)),b);t.$$.on_destroy.push(()=>o());let{style:i="default"}=r,{rx:a=2}=r,{ry:u=2}=r,{width:d=null}=r,{height:h=null}=r,{textSize:g=null}=r,{showProgressValue:f=!0}=r,{addBackground:p=!0}=r,{bgColor:m=null}=r,{labelColor:$=null}=r,{store:b}=r;l();const k=(new Date).getTime(),w="tx_mask_"+k+Math.floor(999*Math.random()),v="pb_gradient_"+k+Math.floor(999*Math.random());return null==d&&(d=150),null==h&&(h="thin"==i?1:14),null==g&&(g="thin"==i?40:70),"thin"==i&&(a=.2,u=.2),window&&(window.navigator.userAgent.indexOf("Trident")>-1||window.navigator.userAgent.indexOf("Edge")),t.$$set=e=>{"style"in e&&s(5,i=e.style),"rx"in e&&s(0,a=e.rx),"ry"in e&&s(1,u=e.ry),"width"in e&&s(2,d=e.width),"height"in e&&s(3,h=e.height),"textSize"in e&&s(4,g=e.textSize),"showProgressValue"in e&&s(6,f=e.showProgressValue),"addBackground"in e&&s(7,p=e.addBackground),"bgColor"in e&&s(8,m=e.bgColor),"labelColor"in e&&s(9,$=e.labelColor),"store"in e&&l(s(10,b=e.store))},[a,u,d,h,g,i,f,p,m,$,b,n,w,v]}class Me extends J{constructor(e){super(),Z(this,e,_e,Be,i,{style:5,rx:0,ry:1,width:2,height:3,textSize:4,showProgressValue:6,addBackground:7,bgColor:8,labelColor:9,store:10})}}function Ve(e){let t,r;return t=new Me({props:{store:e[14],colors:e[12],thresholds:e[13],stackSeries:e[6],addBackground:e[8],bgColor:e[10],labelColor:e[11],margin:e[7],style:e[1],thickness:e[3],width:e[0],height:e[4],textSize:e[5],showProgressValue:e[2]}}),{c(){I(t.$$.fragment)},m(e,s){D(t,e,s),r=!0},p(e,r){const s={};4096&r&&(s.colors=e[12]),8192&r&&(s.thresholds=e[13]),64&r&&(s.stackSeries=e[6]),256&r&&(s.addBackground=e[8]),1024&r&&(s.bgColor=e[10]),2048&r&&(s.labelColor=e[11]),128&r&&(s.margin=e[7]),2&r&&(s.style=e[1]),8&r&&(s.thickness=e[3]),1&r&&(s.width=e[0]),16&r&&(s.height=e[4]),32&r&&(s.textSize=e[5]),4&r&&(s.showProgressValue=e[2]),t.$set(s)},i(e){r||(H(t.$$.fragment,e),r=!0)},o(e){W(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function Fe(e){let t,r;return t=new ve({props:{store:e[14],colors:e[12],thresholds:e[13],stackSeries:e[6],addBackground:e[8],bgColor:e[10],bgFillColor:e[9],labelColor:e[11],margin:e[7],style:e[1],thickness:e[3],width:e[0],height:e[4],textSize:e[5],showProgressValue:e[2],startAngle:-90,endAngle:90}}),{c(){I(t.$$.fragment)},m(e,s){D(t,e,s),r=!0},p(e,r){const s={};4096&r&&(s.colors=e[12]),8192&r&&(s.thresholds=e[13]),64&r&&(s.stackSeries=e[6]),256&r&&(s.addBackground=e[8]),1024&r&&(s.bgColor=e[10]),512&r&&(s.bgFillColor=e[9]),2048&r&&(s.labelColor=e[11]),128&r&&(s.margin=e[7]),2&r&&(s.style=e[1]),8&r&&(s.thickness=e[3]),1&r&&(s.width=e[0]),16&r&&(s.height=e[4]),32&r&&(s.textSize=e[5]),4&r&&(s.showProgressValue=e[2]),t.$set(s)},i(e){r||(H(t.$$.fragment,e),r=!0)},o(e){W(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function Le(e){let t,r;return t=new ve({props:{store:e[14],colors:e[12],thresholds:e[13],stackSeries:e[6],addBackground:e[8],bgColor:e[10],bgFillColor:e[9],labelColor:e[11],margin:e[7],style:e[1],thickness:e[3],width:e[0],height:e[4],textSize:e[5],showProgressValue:e[2]}}),{c(){I(t.$$.fragment)},m(e,s){D(t,e,s),r=!0},p(e,r){const s={};4096&r&&(s.colors=e[12]),8192&r&&(s.thresholds=e[13]),64&r&&(s.stackSeries=e[6]),256&r&&(s.addBackground=e[8]),1024&r&&(s.bgColor=e[10]),512&r&&(s.bgFillColor=e[9]),2048&r&&(s.labelColor=e[11]),128&r&&(s.margin=e[7]),2&r&&(s.style=e[1]),8&r&&(s.thickness=e[3]),1&r&&(s.width=e[0]),16&r&&(s.height=e[4]),32&r&&(s.textSize=e[5]),4&r&&(s.showProgressValue=e[2]),t.$set(s)},i(e){r||(H(t.$$.fragment,e),r=!0)},o(e){W(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function Ee(e){let t,r,s,n;const o=[Le,Fe,Ve],l=[];function i(e,t){return"radial"==e[1]?0:"semicircle"==e[1]?1:2}return t=i(e),r=l[t]=o[t](e),{c(){r.c(),s=w()},m(e,r){l[t].m(e,r),p(e,s,r),n=!0},p(e,[n]){let c=t;t=i(e),t===c?l[t].p(e,n):(T(),W(l[c],1,1,()=>{l[c]=null}),N(),r=l[t],r||(r=l[t]=o[t](e),r.c()),H(r,1),r.m(s.parentNode,s))},i(e){n||(H(r),n=!0)},o(e){W(r),n=!1},d(e){l[t].d(e),e&&m(s)}}}function Te(e,t,r){let{series:s=[]}=t,{style:n="default"}=t,{showProgressValue:o=!0}=t,{width:l=null}=t,{thickness:i=null}=t,{height:c=null}=t,{textSize:a=null}=t,{stackSeries:u=!0}=t,{margin:d=0}=t,{addBackground:h=!0}=t,{bgFillColor:g="transparent"}=t,{bgColor:f="#e5e5e5"}=t,{labelColor:p="#555"}=t,{valueLabel:m=null}=t,{colors:$=["#FFC107","#4CAF50","#03A9F4"]}=t,{thresholds:b=[]}=t;b.length>0&&b.sort((e,t)=>e.threshold-t.threshold),"auto"==l&&(l="100%");const k=ee(s,{valueLabel:m,colors:$,thresholds:b,stackSeries:u,thickness:i,margin:d});return e.$$set=e=>{"series"in e&&r(15,s=e.series),"style"in e&&r(1,n=e.style),"showProgressValue"in e&&r(2,o=e.showProgressValue),"width"in e&&r(0,l=e.width),"thickness"in e&&r(3,i=e.thickness),"height"in e&&r(4,c=e.height),"textSize"in e&&r(5,a=e.textSize),"stackSeries"in e&&r(6,u=e.stackSeries),"margin"in e&&r(7,d=e.margin),"addBackground"in e&&r(8,h=e.addBackground),"bgFillColor"in e&&r(9,g=e.bgFillColor),"bgColor"in e&&r(10,f=e.bgColor),"labelColor"in e&&r(11,p=e.labelColor),"valueLabel"in e&&r(16,m=e.valueLabel),"colors"in e&&r(12,$=e.colors),"thresholds"in e&&r(13,b=e.thresholds)},e.$$.update=()=>{32768&e.$$.dirty&&k.updateSeries(s),65536&e.$$.dirty&&null!=m&&k.updateLabel(m)},[l,n,o,i,c,a,u,d,h,g,f,p,$,b,k,s,m,function(e,t=0){Array.isArray(s)||r(15,s=[s]),s[t]&&"object"==typeof s[t]?r(15,s[t].perc=e,s):r(15,s[t]={perc:e},s)}]}return class extends J{constructor(e){super(),Z(this,e,Te,Ee,i,{series:15,style:1,showProgressValue:2,width:0,thickness:3,height:4,textSize:5,stackSeries:6,margin:7,addBackground:8,bgFillColor:9,bgColor:10,labelColor:11,valueLabel:16,colors:12,thresholds:13,updatePerc:17})}get series(){return this.$$.ctx[15]}set series(e){this.$set({series:e}),V()}get style(){return this.$$.ctx[1]}set style(e){this.$set({style:e}),V()}get showProgressValue(){return this.$$.ctx[2]}set showProgressValue(e){this.$set({showProgressValue:e}),V()}get width(){return this.$$.ctx[0]}set width(e){this.$set({width:e}),V()}get thickness(){return this.$$.ctx[3]}set thickness(e){this.$set({thickness:e}),V()}get height(){return this.$$.ctx[4]}set height(e){this.$set({height:e}),V()}get textSize(){return this.$$.ctx[5]}set textSize(e){this.$set({textSize:e}),V()}get stackSeries(){return this.$$.ctx[6]}set stackSeries(e){this.$set({stackSeries:e}),V()}get margin(){return this.$$.ctx[7]}set margin(e){this.$set({margin:e}),V()}get addBackground(){return this.$$.ctx[8]}set addBackground(e){this.$set({addBackground:e}),V()}get bgFillColor(){return this.$$.ctx[9]}set bgFillColor(e){this.$set({bgFillColor:e}),V()}get bgColor(){return this.$$.ctx[10]}set bgColor(e){this.$set({bgColor:e}),V()}get labelColor(){return this.$$.ctx[11]}set labelColor(e){this.$set({labelColor:e}),V()}get valueLabel(){return this.$$.ctx[16]}set valueLabel(e){this.$set({valueLabel:e}),V()}get colors(){return this.$$.ctx[12]}set colors(e){this.$set({colors:e}),V()}get thresholds(){return this.$$.ctx[13]}set thresholds(e){this.$set({thresholds:e}),V()}get updatePerc(){return this.$$.ctx[17]}}}));
