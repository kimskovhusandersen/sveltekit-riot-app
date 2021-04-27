import{D as s,S as a,i as e,s as t,e as r,k as c,E as l,t as v,c as i,a as o,d as h,n,g as f,b as d,F as p,f as u,G as g,H as b,I as E,J as $,j as m,m as k,o as A,K as I,v as L,r as x,w}from"../chunks/vendor-4eb29b52.js";const _={subscribe:a=>(()=>{const a=s("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session}})().page.subscribe(a)};function B(s){let a,e,t,E,$,m,k,A,I,L,x,w,_,B,D,H,K,M,S,z,T,V,j,C,F,G,N;return{c(){a=r("header"),e=r("div"),t=r("a"),E=r("img"),m=c(),k=r("nav"),A=l("svg"),I=l("path"),L=c(),x=r("ul"),w=r("li"),_=r("a"),B=v("Home"),D=c(),H=r("li"),K=r("a"),M=v("About"),S=c(),z=r("li"),T=r("a"),V=v("Todos"),j=c(),C=l("svg"),F=l("path"),G=c(),N=r("div"),this.h()},l(s){a=i(s,"HEADER",{class:!0});var r=o(a);e=i(r,"DIV",{class:!0});var c=o(e);t=i(c,"A",{href:!0,class:!0});var l=o(t);E=i(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(h),c.forEach(h),m=n(r),k=i(r,"NAV",{class:!0});var v=o(k);A=i(v,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var d=o(A);I=i(d,"path",{d:!0,class:!0},1),o(I).forEach(h),d.forEach(h),L=n(v),x=i(v,"UL",{class:!0});var p=o(x);w=i(p,"LI",{class:!0});var u=o(w);_=i(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var g=o(_);B=f(g,"Home"),g.forEach(h),u.forEach(h),D=n(p),H=i(p,"LI",{class:!0});var b=o(H);K=i(b,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var $=o(K);M=f($,"About"),$.forEach(h),b.forEach(h),S=n(p),z=i(p,"LI",{class:!0});var O=o(z);T=i(O,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var R=o(T);V=f(R,"Todos"),R.forEach(h),O.forEach(h),p.forEach(h),j=n(v),C=i(v,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var Z=o(C);F=i(Z,"path",{d:!0,class:!0},1),o(F).forEach(h),Z.forEach(h),v.forEach(h),G=n(r),N=i(r,"DIV",{class:!0}),o(N).forEach(h),r.forEach(h),this.h()},h(){E.src!==($="/_app/assets/svelte-logo.87df40b8.svg")&&d(E,"src","/_app/assets/svelte-logo.87df40b8.svg"),d(E,"alt","SvelteKit"),d(E,"class","svelte-a57vis"),d(t,"href","https://kit.svelte.dev"),d(t,"class","svelte-a57vis"),d(e,"class","corner svelte-a57vis"),d(I,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),d(I,"class","svelte-a57vis"),d(A,"viewBox","0 0 2 3"),d(A,"aria-hidden","true"),d(A,"class","svelte-a57vis"),d(_,"sveltekit:prefetch",""),d(_,"href","/"),d(_,"class","svelte-a57vis"),d(w,"class","svelte-a57vis"),p(w,"active","/"===s[0].path),d(K,"sveltekit:prefetch",""),d(K,"href","/about"),d(K,"class","svelte-a57vis"),d(H,"class","svelte-a57vis"),p(H,"active","/about"===s[0].path),d(T,"sveltekit:prefetch",""),d(T,"href","/todos"),d(T,"class","svelte-a57vis"),d(z,"class","svelte-a57vis"),p(z,"active","/todos"===s[0].path),d(x,"class","svelte-a57vis"),d(F,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),d(F,"class","svelte-a57vis"),d(C,"viewBox","0 0 2 3"),d(C,"aria-hidden","true"),d(C,"class","svelte-a57vis"),d(k,"class","svelte-a57vis"),d(N,"class","corner svelte-a57vis"),d(a,"class","svelte-a57vis")},m(s,r){u(s,a,r),g(a,e),g(e,t),g(t,E),g(a,m),g(a,k),g(k,A),g(A,I),g(k,L),g(k,x),g(x,w),g(w,_),g(_,B),g(x,D),g(x,H),g(H,K),g(K,M),g(x,S),g(x,z),g(z,T),g(T,V),g(k,j),g(k,C),g(C,F),g(a,G),g(a,N)},p(s,[a]){1&a&&p(w,"active","/"===s[0].path),1&a&&p(H,"active","/about"===s[0].path),1&a&&p(z,"active","/todos"===s[0].path)},i:b,o:b,d(s){s&&h(a)}}}function D(s,a,e){let t;return E(s,_,(s=>e(0,t=s))),[t]}class H extends a{constructor(s){super(),e(this,s,D,B,t,{})}}function K(s){let a,e,t,l,p,b,E,_,B,D,K;a=new H({});const M=s[1].default,S=$(M,s,s[0],null);return{c(){m(a.$$.fragment),e=c(),t=r("main"),S&&S.c(),l=c(),p=r("footer"),b=r("p"),E=v("visit "),_=r("a"),B=v("kit.svelte.dev"),D=v(" to learn SvelteKit"),this.h()},l(s){k(a.$$.fragment,s),e=n(s),t=i(s,"MAIN",{class:!0});var r=o(t);S&&S.l(r),r.forEach(h),l=n(s),p=i(s,"FOOTER",{class:!0});var c=o(p);b=i(c,"P",{});var v=o(b);E=f(v,"visit "),_=i(v,"A",{href:!0,class:!0});var d=o(_);B=f(d,"kit.svelte.dev"),d.forEach(h),D=f(v," to learn SvelteKit"),v.forEach(h),c.forEach(h),this.h()},h(){d(t,"class","svelte-1izrdc8"),d(_,"href","https://kit.svelte.dev"),d(_,"class","svelte-1izrdc8"),d(p,"class","svelte-1izrdc8")},m(s,r){A(a,s,r),u(s,e,r),u(s,t,r),S&&S.m(t,null),u(s,l,r),u(s,p,r),g(p,b),g(b,E),g(b,_),g(_,B),g(b,D),K=!0},p(s,[a]){S&&S.p&&1&a&&I(S,M,s,s[0],a,null,null)},i(s){K||(L(a.$$.fragment,s),L(S,s),K=!0)},o(s){x(a.$$.fragment,s),x(S,s),K=!1},d(s){w(a,s),s&&h(e),s&&h(t),S&&S.d(s),s&&h(l),s&&h(p)}}}function M(s,a,e){let{$$slots:t={},$$scope:r}=a;return s.$$set=s=>{"$$scope"in s&&e(0,r=s.$$scope)},[r,t]}export default class extends a{constructor(s){super(),e(this,s,M,K,t,{})}}