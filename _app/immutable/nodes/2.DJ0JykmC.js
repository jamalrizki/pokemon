import{w as pe,s as oe,e as H,a as K,t as D,c as y,b as U,g as O,f as w,d as C,Q as F,p as k,R as b,q as ee,i as R,h as f,S as de,j as J,n as te,T as ge,k as be,l as ne}from"../chunks/scheduler.BOiLTbIk.js";import{t as X,a as Y,S as me,i as ue,c as ke,b as we,d as _e,m as ve,e as Ne,g as Pe}from"../chunks/index.CbfbiDj7.js";import{w as ce}from"../chunks/index.CfJkh5Sj.js";function ae(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Ae(t,e){X(t,1,1,()=>{e.delete(t.key)})}function He(t,e,n,a,r,l,o,s,i,m,c,B){let p=t.length,E=l.length,v=p;const T={};for(;v--;)T[t[v].key]=v;const V=[],S=new Map,q=new Map,j=[];for(v=E;v--;){const d=B(r,l,v),N=n(d);let P=o.get(N);P?a&&j.push(()=>P.p(d,e)):(P=m(N,d),P.c()),S.set(N,V[v]=P),N in T&&q.set(N,Math.abs(v-T[N]))}const G=new Set,A=new Set;function W(d){Y(d,1),d.m(s,c),o.set(d.key,d),c=d.first,E--}for(;p&&E;){const d=V[E-1],N=t[p-1],P=d.key,g=N.key;d===N?(c=d.first,p--,E--):S.has(g)?!o.has(P)||G.has(P)?W(d):A.has(g)?p--:q.get(P)>q.get(g)?(A.add(P),W(d)):(G.add(g),p--):(i(N,o),p--)}for(;p--;){const d=t[p];S.has(d.key)||i(d,o)}for(;E;)W(V[E-1]);return pe(j),V}const z=[{name:"Bulbasaur",dexNumber:1,dexEntry:"A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",maxHp:100},{name:"Charmander",dexNumber:4,dexEntry:"Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",maxHp:100},{name:"Squirtle",dexNumber:7,dexEntry:"After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",maxHp:100},{name:"Pikachu",dexNumber:25,dexEntry:"It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you.",imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",maxHp:100},{name:"Gengar",dexNumber:94,dexEntry:"Under a full moon, this Pokémon likes to mimic the shadows of people and laugh at their fright.",imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/94.png",maxHp:100},{name:"Lapras",dexNumber:131,dexEntry:"A gentle soul that can understand human speech. It can ferry people across the sea on its back.",imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/131.png",maxHp:100},{name:"Eevee",dexNumber:133,dexEntry:"Possessing an unbalanced and unstable genetic makeup, it conceals many possible evolutions.",imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/133.png",maxHp:100},{name:"Snorlax",dexNumber:143,dexEntry:"Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/143.png",maxHp:100},{name:"Dragonite",dexNumber:149,dexEntry:"An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans.",imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/149.png",maxHp:100},{name:"Mewtwo",dexNumber:150,dexEntry:"It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.",imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png",maxHp:100}],he=ce(Ee()),fe=ce({damage:null,isCritical:!1,defender:null,winner:null});function ye(t,e){if(console.log("from battle store Attacker:",t.name),console.log("from battle store Defender:",e.name),!t.canAttack)return;let n=0,a=!1,r=null;function l(m=10,c=20){return Math.floor(Math.random()*(c-m+1)+m)}function o(){let m=!1;return Math.floor(Math.random()*100)<10&&(a=!0,m=!0),m}function s(m,c){return Math.min(m,c)}function i(){return o()?n=40:n=l(),s(n,e.hp)}e.hp-=i(),t.canAttack=!1,e.hp>0?e.canAttack=!0:r=t.dexNumber,fe.set({damage:n,isCritical:a,defender:e.dexNumber,winner:r}),Ie(t,e)}function Ee(){let t=0,e=0;for(;t===e;)t=Math.floor(Math.random()*z.length),e=Math.floor(Math.random()*z.length);return[{...z[t],hp:z[t].maxHp,canAttack:!0},{...z[e],hp:z[e].maxHp,canAttack:!1}]}function Ie(t,e){he.update(n=>n.map(a=>a.dexNumber===t.dexNumber?{...t}:a.dexNumber===e.dexNumber?{...e}:a))}function se(t){let e,n;return{c(){e=H("img"),this.h()},l(a){e=y(a,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){F(e.src,n="/king.png")||k(e,"src",n),k(e,"class","pokemon-image-win fade-in svelte-7mlwco"),k(e,"alt","king")},m(a,r){R(a,e,r)},d(a){a&&w(e)}}}function De(t){let e,n=t[0].name+"",a;return{c(){e=H("h2"),a=D(n),this.h()},l(r){e=y(r,"H2",{class:!0});var l=U(e);a=C(l,n),l.forEach(w),this.h()},h(){k(e,"class","svelte-7mlwco")},m(r,l){R(r,e,l),f(e,a)},p(r,l){l&1&&n!==(n=r[0].name+"")&&J(a,n)},d(r){r&&w(e)}}}function Ce(t){let e,n=t[0].name+"",a,r;return{c(){e=H("h2"),a=D(n),r=D(" Won!!!"),this.h()},l(l){e=y(l,"H2",{class:!0});var o=U(e);a=C(o,n),r=C(o," Won!!!"),o.forEach(w),this.h()},h(){k(e,"class","fade-in svelte-7mlwco")},m(l,o){R(l,e,o),f(e,a),f(e,r)},p(l,o){o&1&&n!==(n=l[0].name+"")&&J(a,n)},d(l){l&&w(e)}}}function le(t){let e,n,a,r,l=t[2]?"Critical Hit!":"",o;return{c(){e=H("div"),n=D("- "),a=D(t[1]),r=K(),o=D(l),this.h()},l(s){e=y(s,"DIV",{class:!0});var i=U(e);n=C(i,"- "),a=C(i,t[1]),r=O(i),o=C(i,l),i.forEach(w),this.h()},h(){k(e,"class","damage-indicator svelte-7mlwco"),b(e,"critical",t[2])},m(s,i){R(s,e,i),f(e,n),f(e,a),f(e,r),f(e,o)},p(s,i){i&2&&J(a,s[1]),i&4&&l!==(l=s[2]?"Critical Hit!":"")&&J(o,l),i&4&&b(e,"critical",s[2])},d(s){s&&w(e)}}}function Me(t){let e,n,a,r,l,o,s,i,m,c,B,p,E,v=t[0].hp+"",T,V,S=t[0].maxHp+"",q,j,G,A,W,d,N,P,g=t[3]===t[0].dexNumber&&se();function Z(u,h){return u[3]===u[0].dexNumber?Ce:De}let Q=Z(t),I=Q(t),_=t[1]&&le(t);return{c(){e=H("div"),g&&g.c(),n=K(),a=H("img"),o=K(),s=H("div"),I.c(),i=K(),m=H("div"),c=H("div"),B=K(),p=H("p"),E=D("HP: "),T=D(v),V=D(" / "),q=D(S),j=K(),_&&_.c(),G=K(),A=H("button"),W=D("ATTACK!"),this.h()},l(u){e=y(u,"DIV",{class:!0});var h=U(e);g&&g.l(h),n=O(h),a=y(h,"IMG",{src:!0,alt:!0,class:!0}),o=O(h),s=y(h,"DIV",{class:!0});var M=U(s);I.l(M),i=O(M),m=y(M,"DIV",{class:!0});var x=U(m);c=y(x,"DIV",{style:!0,class:!0}),U(c).forEach(w),x.forEach(w),B=O(M),p=y(M,"P",{class:!0});var L=U(p);E=C(L,"HP: "),T=C(L,v),V=C(L," / "),q=C(L,S),L.forEach(w),j=O(M),_&&_.l(M),G=O(M),A=y(M,"BUTTON",{class:!0});var $=U(A);W=C($,"ATTACK!"),$.forEach(w),M.forEach(w),h.forEach(w),this.h()},h(){F(a.src,r=t[0].imageUrl)||k(a,"src",r),k(a,"alt",l=t[0].name),k(a,"class","pokemon-image svelte-7mlwco"),b(a,"opacity",t[3]===t[0].dexNumber),b(a,"img-effect",t[1]),ee(c,"width",t[0].hp/t[0].maxHp*100+"%"),k(c,"class","svelte-7mlwco"),b(c,"hp-bar-fill",t[0].hp/t[0].maxHp>=.2),b(c,"hp-bar-fill-low",t[0].hp/t[0].maxHp<.2),k(m,"class","hp-bar svelte-7mlwco"),b(m,"borderEffect",t[1]),k(p,"class","svelte-7mlwco"),b(p,"hp-low",t[0].hp/t[0].maxHp<.2),k(A,"class","btn svelte-7mlwco"),A.disabled=d=!t[0].canAttack,k(s,"class","pokemon-info svelte-7mlwco"),k(e,"class","pokemon-card svelte-7mlwco"),b(e,"won",t[3]===t[0].dexNumber),b(e,"lost",t[4]===t[0].dexNumber&&t[0].hp===0)},m(u,h){R(u,e,h),g&&g.m(e,null),f(e,n),f(e,a),f(e,o),f(e,s),I.m(s,null),f(s,i),f(s,m),f(m,c),f(s,B),f(s,p),f(p,E),f(p,T),f(p,V),f(p,q),f(s,j),_&&_.m(s,null),f(s,G),f(s,A),f(A,W),N||(P=de(A,"click",t[5]),N=!0)},p(u,[h]){u[3]===u[0].dexNumber?g||(g=se(),g.c(),g.m(e,n)):g&&(g.d(1),g=null),h&1&&!F(a.src,r=u[0].imageUrl)&&k(a,"src",r),h&1&&l!==(l=u[0].name)&&k(a,"alt",l),h&9&&b(a,"opacity",u[3]===u[0].dexNumber),h&2&&b(a,"img-effect",u[1]),Q===(Q=Z(u))&&I?I.p(u,h):(I.d(1),I=Q(u),I&&(I.c(),I.m(s,i))),h&1&&ee(c,"width",u[0].hp/u[0].maxHp*100+"%"),h&1&&b(c,"hp-bar-fill",u[0].hp/u[0].maxHp>=.2),h&1&&b(c,"hp-bar-fill-low",u[0].hp/u[0].maxHp<.2),h&2&&b(m,"borderEffect",u[1]),h&1&&v!==(v=u[0].hp+"")&&J(T,v),h&1&&S!==(S=u[0].maxHp+"")&&J(q,S),h&1&&b(p,"hp-low",u[0].hp/u[0].maxHp<.2),u[1]?_?_.p(u,h):(_=le(u),_.c(),_.m(s,G)):_&&(_.d(1),_=null),h&1&&d!==(d=!u[0].canAttack)&&(A.disabled=d),h&9&&b(e,"won",u[3]===u[0].dexNumber),h&17&&b(e,"lost",u[4]===u[0].dexNumber&&u[0].hp===0)},i:te,o:te,d(u){u&&w(e),g&&g.d(),I.d(),_&&_.d(),N=!1,P()}}}function Ue(t,e,n){let{pokemon:a}=e,{damage:r}=e,{isCritical:l}=e,{winner:o}=e,{recentDefender:s}=e;const i=ge();function m(){i("attack",{attacker:a})}return t.$$set=c=>{"pokemon"in c&&n(0,a=c.pokemon),"damage"in c&&n(1,r=c.damage),"isCritical"in c&&n(2,l=c.isCritical),"winner"in c&&n(3,o=c.winner),"recentDefender"in c&&n(4,s=c.recentDefender)},[a,r,l,o,s,m]}class Se extends me{constructor(e){super(),ue(this,e,Ue,Me,oe,{pokemon:0,damage:1,isCritical:2,winner:3,recentDefender:4})}}function ie(t,e,n){const a=t.slice();return a[6]=e[n],a}function re(t,e){let n,a,r;return a=new Se({props:{pokemon:e[6],damage:e[2]===e[6].dexNumber?e[0]:null,isCritical:e[1]&&e[2]===e[6].dexNumber,winner:e[3],recentDefender:e[2]}}),a.$on("attack",e[5]),{key:t,first:null,c(){n=ne(),we(a.$$.fragment),this.h()},l(l){n=ne(),_e(a.$$.fragment,l),this.h()},h(){this.first=n},m(l,o){R(l,n,o),ve(a,l,o),r=!0},p(l,o){e=l;const s={};o&16&&(s.pokemon=e[6]),o&21&&(s.damage=e[2]===e[6].dexNumber?e[0]:null),o&22&&(s.isCritical=e[1]&&e[2]===e[6].dexNumber),o&8&&(s.winner=e[3]),o&4&&(s.recentDefender=e[2]),a.$set(s)},i(l){r||(Y(a.$$.fragment,l),r=!0)},o(l){X(a.$$.fragment,l),r=!1},d(l){l&&w(n),Ne(a,l)}}}function Te(t){let e,n=[],a=new Map,r,l=ae(t[4]);const o=s=>s[6].dexNumber;for(let s=0;s<l.length;s+=1){let i=ie(t,l,s),m=o(i);a.set(m,n[s]=re(m,i))}return{c(){e=H("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=y(s,"DIV",{class:!0});var i=U(e);for(let m=0;m<n.length;m+=1)n[m].l(i);i.forEach(w),this.h()},h(){k(e,"class","pokemon-container svelte-qx61u5")},m(s,i){R(s,e,i);for(let m=0;m<n.length;m+=1)n[m]&&n[m].m(e,null);r=!0},p(s,[i]){i&63&&(l=ae(s[4]),Pe(),n=He(n,i,o,1,s,l,a,e,Ae,re,null,ie),ke())},i(s){if(!r){for(let i=0;i<l.length;i+=1)Y(n[i]);r=!0}},o(s){for(let i=0;i<n.length;i+=1)X(n[i]);r=!1},d(s){s&&w(e);for(let i=0;i<n.length;i+=1)n[i].d()}}}function Ve(t,e,n){let a;be(t,he,m=>n(4,a=m));let r,l,o,s;fe.subscribe(m=>{n(0,r=m.damage),n(1,l=m.isCritical),n(2,o=m.defender),n(3,s=m.winner)});function i(m){let c=m.detail.attacker,B=a.find(p=>p.dexNumber!==c.dexNumber);ye(c,B)}return[r,l,o,s,a,i]}class We extends me{constructor(e){super(),ue(this,e,Ve,Te,oe,{})}}export{We as component};