function T(){}function C(t,e){for(const n in e)t[n]=e[n];return t}function D(t){return t()}function Q(){return Object.create(null)}function q(t){t.forEach(D)}function U(t){return typeof t=="function"}function W(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function V(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function X(t){return Object.keys(t).length===0}function H(t,...e){if(t==null){for(const i of e)i(void 0);return T}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Y(t,e,n){t.$$.on_destroy.push(H(e,n))}function Z(t,e,n,i){if(t){const r=w(t,e,n,i);return t[0](r)}}function w(t,e,n,i){return t[1]&&i?C(n.ctx.slice(),t[1](i(e))):n.ctx}function $(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=e.dirty[s]|r[s];return u}return e.dirty|r}return e.dirty}function tt(t,e,n,i,r,u){if(r){const c=w(e,n,i,u);t.p(c,r)}}function et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let p=!1;function nt(){p=!0}function it(){p=!1}function P(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function B(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<e.length;o++){const a=e[o];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const o=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=o?r+1:P(1,r,S=>e[n[S]].claim_order,o))-1;i[l]=n[a]+1;const E=a+1;n[E]=l,r=Math.max(E,r)}const u=[],c=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(u.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);u.reverse(),c.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<c.length;l++){for(;o<u.length&&c[l].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(c[l],a)}}function L(t,e){if(p){for(B(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function rt(t,e,n){p&&!n?L(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ct(t){t.parentNode&&t.parentNode.removeChild(t)}function M(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function lt(){return x(" ")}function st(){return x("")}function ut(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function at(t){return t.dataset.svelteH}function ft(t){return Array.from(t.childNodes)}function O(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function A(t,e,n,i,r=!1){O(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function z(t,e,n,i){return A(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function _t(t,e,n){return z(t,e,n,M)}function F(t,e){return A(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(e),!0)}function dt(t){return F(t," ")}function ht(t,e){e=""+e,t.data!==e&&(t.data=e)}function mt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function pt(t,e,n){t.classList.toggle(e,!!n)}function I(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function bt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function yt(t,e){return new t(e)}let m;function b(t){m=t}function v(){if(!m)throw new Error("Function called outside component initialization");return m}function gt(t){v().$$.on_mount.push(t)}function xt(t){v().$$.after_update.push(t)}function vt(){const t=v();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=I(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,u)}),!u.defaultPrevented}return!0}}const d=[],N=[];let _=[];const k=[],j=Promise.resolve();let g=!1;function R(){g||(g=!0,j.then(J))}function Et(){return R(),j}function G(t){_.push(t)}const y=new Set;let f=0;function J(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const e=d[f];f++,b(e),K(e.$$)}}catch(e){throw d.length=0,f=0,e}for(b(null),d.length=0,f=0;N.length;)N.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];y.has(n)||(y.add(n),n())}_.length=0}while(d.length);for(;k.length;)k.pop()();g=!1,y.clear(),b(t)}function K(t){if(t.fragment!==null){t.update(),q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}function Nt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{X as A,G as B,Nt as C,m as D,b as E,D as F,d as G,R as H,nt as I,it as J,at as K,Z as L,bt as M,tt as N,et as O,$ as P,V as Q,pt as R,ut as S,vt as T,lt as a,ft as b,_t as c,F as d,M as e,ct as f,dt as g,L as h,rt as i,ht as j,Y as k,st as l,xt as m,T as n,gt as o,ot as p,mt as q,N as r,W as s,x as t,yt as u,Et as v,q as w,Q as x,J as y,U as z};
