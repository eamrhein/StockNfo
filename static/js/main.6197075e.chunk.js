(this.webpackJsonpstockreasearch=this.webpackJsonpstockreasearch||[]).push([[0],{210:function(n,e,t){n.exports=t(407)},221:function(n,e,t){},222:function(n,e,t){},407:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(31),o=t.n(c),i=t(32),u=t(110),l=t(178),s=t(161),f=t(15),b=t(69),m=t(75),d=t(19),h=t.n(d),p="pk_3c885f528e6a4d079ce8222d394787b8",v="https://cloud.iexapis.com/stable/stock";var g=function(n,e){return function(t){return function(n,e){var t,r,a,c,o;return h.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:i.t0=e,i.next="5y"===i.t0?3:"1Y"===i.t0?5:"3M"===i.t0?7:"1M"===i.t0?9:"1D"===i.t0?11:13;break;case 3:return t=48,i.abrupt("break",15);case 5:return t=9,i.abrupt("break",15);case 7:return t=4,i.abrupt("break",15);case 9:return t=1,i.abrupt("break",15);case 11:return t=12,i.abrupt("break",15);case 13:return t=100,i.abrupt("break",15);case 15:return i.next=17,h.a.awrap(fetch("".concat(v,"/").concat(n,"/batch?range=").concat(e,"&chartInterval=").concat(2*t,"&types=company,quote,chart,stats,logo,news&token=").concat(p)).catch((function(n){return console.log(n)})));case 17:return r=i.sent,i.next=20,h.a.awrap(fetch("".concat(v,"/").concat(n,"/batch?&types=chart&range=1D&chartInterval=12&token=").concat(p)).catch((function(n){return console.log(n)})));case 20:return a=i.sent,i.next=23,h.a.awrap(a.json());case 23:return c=i.sent,i.next=26,h.a.awrap(r.json());case 26:return(o=i.sent).intraDay=c.chart,i.abrupt("return",o);case 29:case"end":return i.stop()}}))}(n,e).then((function(e){return t(function(n,e){return{type:"RECEIVE_STOCK_CHART",ticker:e,chartData:n}}(e,n))}))}},E=function(){return function(n){return function(){var n,e;return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.awrap(fetch("https://cloud.iexapis.com/beta/ref-data/symbols?token=".concat(p)));case 2:return n=t.sent,t.next=5,h.a.awrap(n.json());case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}))}().then((function(e){return n(function(n){return{type:"RECEIVE_STOCKS",symbols:n}}(e))}))}},y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;Object.freeze(n);var t={};switch(e.type){case"RECEIVE_STOCKS":return Object(m.a)({},n,{allStocks:e.symbols});case"RECEIVE_STOCK_CHART":return t=Object(m.a)({},e.chartData.quote,{},e.chartData.stats,{},e.chartData.company,{logo:e.chartData.logo.url,chart:e.chartData.chart,intraday:e.chartData.intraDay,news:e.chartData.news}),Object(m.a)({},n,Object(b.a)({},e.ticker,t));default:return n}},j=Object(i.c)({stocks:y}),k=Object(f.a)(),O=[s.a,Object(u.a)(k)],x=i.d.apply(void 0,[i.a.apply(void 0,O)].concat([])),w=Object(i.e)(Object(l.a)(k)(j),{},x),C=(t(221),t(222),t(25)),S=t(53),F=t(5),D=t(6),M=t(179),z=t(180),P=t(8),Y=t(17);function T(){var n=Object(D.a)(["\n  display: table-cell;\n"]);return T=function(){return n},n}function A(){var n=Object(D.a)(["\n  padding: 1px;\n  font-size: 10pt;\n  color: grey;\n  font-weight: bolder;\n  display: table-cell;\n"]);return A=function(){return n},n}function N(){var n=Object(D.a)(["\n  padding-right: 3rem;\n  display: table-cell;\n  font-weight: bolder;\n"]);return N=function(){return n},n}function R(){var n=Object(D.a)(["\n  display: table-row;\n  margin: 1px;\n"]);return R=function(){return n},n}function I(){var n=Object(D.a)(["\n  background-color: ",";\n  display: table-row;\n  margin: 1px;\n  line-height: 1.5;\n"]);return I=function(){return n},n}function B(){var n=Object(D.a)(["\n  z-index: 20;\n  display: table;\n  width: 90vw;\n  padding: 10px;\n  position: absolute;\n  left: 4vw;\n  top: 55px;\n  right: 1vw;\n  border-radius: 4px;\n  background-color: ",";\n  .active {\n    background-color: ",";\n    color: ",";\n  }\n"]);return B=function(){return n},n}function K(){var n=Object(D.a)(["\n  display: flex;\n  align-items: center;\n  margin: 8px;\n  border-radius: 5px;\n  background-color: #FAFAFA;\n  color: #cbcbcb;\n  border: 1px solid black;\n  padding: 0 24px 0 3px;\n  width: 100%;\n  input {\n    width: 100%;\n    color: #cbcbcb;\n    border: none;\n    height: 36px;\n    tranistion: color 150ms ease-out;\n  }\n  .fa-search {\n    font-size: 14pt;\n    color: #444444;\n  }\n"]);return K=function(){return n},n}var _=F.b.div(K()),L=F.b.div(B(),(function(n){return n.theme.colors.navbar}),(function(n){return n.theme.colors.navbar}),(function(n){return n.theme.colors.primary})),V=F.b.div(I(),(function(n){return n.theme.colors.card})),$=F.b.div(R()),W=F.b.span(N()),q=F.b.div(A()),H=F.b.span(T()),J=function(n){var e=n.allStocks,t=n.history,c=Object(r.useState)(0),o=Object(P.a)(c,2),i=o[0],u=o[1],l=Object(r.useState)(""),s=Object(P.a)(l,2),f=s[0],b=s[1],m=Object(r.useState)(null),d=Object(P.a)(m,2),h=d[0],p=d[1],v=function(n){var e=!1,t=function(n){var e="",t=f.toLowerCase();return"string"===typeof n&&(e=n.toLowerCase()),t.length<=n.length&&e.slice(0,t.length)===t};return n.name&&(t(n.name)||t(n.symbol))&&(e=!0),e};return a.a.createElement(a.a.Fragment,null,a.a.createElement(_,null,a.a.createElement("input",{type:"text",className:"searcbar-input",placeholder:"  Search",value:f,onKeyDown:function(n){if(38===n.keyCode&&i>0?u(i-1):40===n.keyCode&&i<e.length&&u(i+1),13===n.keyCode){var r=Object(z.a)(document.getElementsByClassName("active"))[0].childNodes[0].innerText;b(""),t.push("/".concat(r))}},onChange:function(n){return b(n.target.value)}})),f.length>0?a.a.createElement(L,null,a.a.createElement($,null,a.a.createElement(q,null,"Symbol"),a.a.createElement(q,null,"Name")),function(){var n=[],t=0;if(e)for(;n.length<6&&t<e.length;)v(e[t])&&n.push(e[t]),t+=1;return n}().map((function(n,e){return a.a.createElement(V,{onClick:function(){return e=n.symbol,b(""),void t.push("/".concat(e));var e},className:i===e||h===e?"active":null,key:n.symbol,onMouseEnter:function(){return p(e)},onMouseLeave:function(){return p(null)}},a.a.createElement(W,{className:"result"},n.symbol),a.a.createElement(H,null,n.name.split(" ").slice(0,3).join(" ")))}))):null)};J.defaultProps={allStocks:[],history:{}};var U=Object(Y.f)(J);function G(){var n=Object(D.a)(["\n  margin-left: 10px;\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return G=function(){return n},n}function Q(){var n=Object(D.a)(["\n  text-shadow: 1px 1px black;\n  font-family: Roboto Condensed;\n  font-weight: lighter;\n  strong {\n    font-family: Eczar;\n    font-weight: bolder;\n    color: ","\n  }\n"]);return Q=function(){return n},n}function X(){var n=Object(D.a)(["\n  text-shadow: 1px 1px black; \n  padding: 6px;\n  margin-right: 10px;\n  font-size: 34pt;\n  font-weight: bolder;\n  color: ",";\n"]);return X=function(){return n},n}function Z(){var n=Object(D.a)(["\n  background-color: ",";\n"]);return Z=function(){return n},n}var nn=F.b.nav(Z(),(function(n){return n.theme.colors.navbar})),en=F.b.i(X(),(function(n){return n.theme.colors.primary})),tn=F.b.h3(Q(),(function(n){return n.theme.colors.primary})),rn=F.b.div(G()),an=function(n){var e=n.allStocks,t=n.loadStocks;return Object(r.useEffect)((function(){t()}),[t]),a.a.createElement(nn,null,a.a.createElement(rn,null,a.a.createElement(tn,null,"Stock",a.a.createElement("strong",null,"NFO")),a.a.createElement(en,null,a.a.createElement(M.a,null)),a.a.createElement(U,{allStocks:e})))};an.defaultProps={allStocks:[]};var cn=Object(C.c)((function(n){return{allStocks:n.stocks.allStocks}}),(function(n){return{loadStocks:function(){return n(E())}}}))(an),on=t(28),un=t(177),ln=t.n(un);function sn(){var n=Object(D.a)(["\n    display: flex;\n    flex-direction:column;\n    align-items: center;\n    justify-content: center;\n    background-color: ",";\n    margin-top: 10vw;\n    height: 40vh;\n    width: 80vw;\n    line-height: 2.5;\n"]);return sn=function(){return n},n}var fn=F.b.div(sn(),(function(n){return n.theme.colors.card})),bn=function(){return a.a.createElement(fn,null,a.a.createElement("h2",null,"Stock Data is Loading"),a.a.createElement(ln.a,{size:80,color:"#1EB980"}))};var mn=function(n,e){var t=0;return e.forEach((function(e){t+=n.includes(e)})),1===t};function dn(){var n=Object(D.a)(["\n  flex-direction: row;\n  align-items: center;\n  background-color: #7b1fa2;\n  color: #e8c9f5;\n  fill: purple;\n  font-size: 10pt;\n  font-weight: 700;\n  margin: 0 12px 5px 0;\n  padding: 8px;\n  border-radius: 17px;\n"]);return dn=function(){return n},n}function hn(){var n=Object(D.a)(["\n  display: flex;\n"]);return hn=function(){return n},n}function pn(){var n=Object(D.a)(["\n  text-indent: 25px;\n  line-height: 1.5;\n  font-size: 10pt;\n"]);return pn=function(){return n},n}function vn(){var n=Object(D.a)(["\n  font-weight: light;\n"]);return vn=function(){return n},n}function gn(){var n=Object(D.a)(["\n  cursor: pointer;\n  color: #7b1fa2;\n  font-weight: 600;\n"]);return gn=function(){return n},n}function En(){var n=Object(D.a)(["\n  text-transform: capitalize;\n  font-weight: bold;\n  padding-bottom: 10px;\n"]);return En=function(){return n},n}function yn(){var n=Object(D.a)(["\n  display: table-cell;\n  padding: 1rem;\n  @media (max-width: 700px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]);return yn=function(){return n},n}function jn(){var n=Object(D.a)(["\n  display: table-row;\n"]);return jn=function(){return n},n}function kn(){var n=Object(D.a)(["\n  display: table-row-group;\n"]);return kn=function(){return n},n}function On(){var n=Object(D.a)(["\n  display: table;\n"]);return On=function(){return n},n}function xn(){var n=Object(D.a)(["\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return xn=function(){return n},n}var wn=F.b.div(xn()),Cn=F.b.div(On()),Sn=F.b.div(kn()),Fn=F.b.div(jn()),Dn=F.b.div(yn()),Mn=F.b.div(En()),zn=F.b.span(gn()),Pn=F.b.div(vn()),Yn=F.b.p(pn()),Tn=F.b.div(hn()),An=F.b.span(dn()),Nn=function(n){var e=n.stock,t=Object(r.useState)(!1),c=Object(P.a)(t,2),o=c[0],i=c[1],u=function(n){return n=n.toLowerCase(),!mn(n,["iex","time","description","price","change","symbol","logo"])&&("number"===typeof e[n]||"string"===typeof e[n])};return a.a.createElement(wn,null,a.a.createElement("h1",null,"About"),e.description?a.a.createElement(Yn,null,o?e.description:"".concat(e.description.slice(0,350),"... "),a.a.createElement(zn,{onClick:function(){return i(!o)}},o?"read less":"read more")):null,function(){var n=Object.keys(e).filter(u),t=[],r=[];return n.forEach((function(n,a){a%4===0&&0!==a&&(r.push(t),t=[]),t.push([n,e[n]])})),r.push(t),a.a.createElement(Cn,null,a.a.createElement(Sn,null,r.map((function(n){return a.a.createElement(Fn,{key:Math.random()},n.map((function(n){return a.a.createElement(Dn,{key:n[0]},a.a.createElement(Mn,null,n[0]),a.a.createElement(Pn,null,n[1]))})))}))))}(),a.a.createElement("h2",null,"Investment Type"),e.tags?a.a.createElement(Tn,null,e.tags.map((function(n){return a.a.createElement(An,{key:n},n)}))):null)};Nn.defaultProps={stock:{}};var Rn=Nn;function In(){var n=Object(D.a)(["\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n  max-width: 40px;\n  width: 100%;\n  height: auto;\n"]);return In=function(){return n},n}function Bn(){var n=Object(D.a)(["\n  font-size: 0.8rem;\n  margin: 0rem 0.25rem;\n"]);return Bn=function(){return n},n}function Kn(){var n=Object(D.a)(["\n  cursor: pointer;\n  display: flex;\n  font-weight: 600;\n  margin-left: 1rem;\n  #active {\n    color: #7b1fa2;\n  }\n"]);return Kn=function(){return n},n}function _n(){var n=Object(D.a)(["\n  margin-left: 1rem;\n"]);return _n=function(){return n},n}function Ln(){var n=Object(D.a)(["\n  font-size: 36px;\n  font-weight: 400;\n  line-height: 42px;\n  margin-left: 1rem;\n"]);return Ln=function(){return n},n}function Vn(){var n=Object(D.a)(["\n  text-align: center;\n  line-height: 42px;\n  font-size: 36px;\n  font-weight: 500;\n"]);return Vn=function(){return n},n}function $n(){var n=Object(D.a)(["\n  background-color: ",";\n  padding: 1rem;\n  margin: 1rem;\n"]);return $n=function(){return n},n}function Wn(){var n=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 80vw;\n  bottom: 5vw;\n"]);return Wn=function(){return n},n}var qn=F.b.div(Wn()),Hn=F.b.div($n(),(function(n){return n.theme.colors.card})),Jn=F.b.h1(Vn()),Un=F.b.h2(Ln()),Gn=F.b.div(_n()),Qn=F.b.div(Kn()),Xn=F.b.div(Bn()),Zn=F.b.img(In()),ne=function(n){var e=n.stocks,t=n.fetchStockChart,c=n.current,o=Object(r.useState)([]),i=Object(P.a)(o,2),u=i[0],l=i[1],s=Object(r.useState)(""),f=Object(P.a)(s,2),b=f[0],m=f[1],d=Object(r.useState)(""),h=Object(P.a)(d,2),p=h[0],v=h[1],g=Object(r.useState)("5Y"),E=Object(P.a)(g,2),y=E[0],j=E[1],k=Object(r.useState)(""),O=Object(P.a)(k,2),x=O[0],w=O[1],C=Object(r.useState)(""),S=Object(P.a)(C,2),F=S[0],D=S[1],M=Object(r.useState)(!0),z=Object(P.a)(M,2),Y=z[0],T=z[1];Object(r.useEffect)((function(){T(!1),t(c,y)}),[t,y,c]),Object(r.useEffect)((function(){if(e[c]){setTimeout((function(){T(!0)}),1e3);var n=function(n){var t=parseFloat(e[c].latestPrice),r=parseFloat(e[c][n]),a=t-t*r;return r=(100*r).toFixed(2),[(t-a).toFixed(2),r]};D(e[c].logo),l("1D"===y?e[c].intraday:e[c].chart),m(e[c].securityName),v(e[c].latestPrice.toFixed(2)),function(){var e,t,r="";switch(y){case"1D":var c=n("changePercent"),o=Object(P.a)(c,2);e=o[0],t=o[1],r=" Today";break;case"1M":var i=n("month1ChangePercent"),u=Object(P.a)(i,2);e=u[0],t=u[1],r=" Past Month";break;case"3M":var l=n("month3ChangePercent"),s=Object(P.a)(l,2);e=s[0],t=s[1],r=" Past 3 Months";break;case"1Y":var f=n("year1ChangePercent"),b=Object(P.a)(f,2);e=b[0],t=b[1],r=" Past Year";break;case"5Y":var m=n("year5ChangePercent"),d=Object(P.a)(m,2);e=d[0],t=d[1],r=" Past 5 Years"}var h=1===Math.sign(e)?"+":null,p=a.a.createElement(Gn,null,a.a.createElement("span",null,h,"$",e," ","(",t,"%)"),a.a.createElement("span",null,r));w(p)}()}}),[e,c,y]);var A=function(n){switch(n.target.innerText){case"1D":console.log(e),j("1D"),l(e[c].intraday);break;case"1M":j("1M"),l(e[c].chart);break;case"3M":j("3M"),l(e[c].chart);break;case"1Y":j("1Y"),l(e[c].chart);break;case"5Y":j("5Y"),l(e[c].chart)}};return Y?a.a.createElement(qn,null,a.a.createElement(Jn,null,b),a.a.createElement(Un,null,F?a.a.createElement(Zn,{alt:"company-logo",src:F}):null,"$",p),x,a.a.createElement(Hn,null,a.a.createElement(on.e,{width:"100%",height:400},a.a.createElement(on.d,{data:u,width:400,height:400},a.a.createElement(on.a,{strokeDasharray:"3 3"}),a.a.createElement(on.h,{domain:["dataMin","dataMax"],hide:!0}),a.a.createElement(on.g,{hide:!0,dataKey:"label"}),a.a.createElement(on.b,null),a.a.createElement(on.c,{connectNulls:!0,name:"USD $",type:"monotone",dot:!1,dataKey:"close",strokeWidth:2.5,stroke:"#7B1FA2"}),a.a.createElement(on.f,{separator:"",offset:-40,position:{y:-15},isAnimationActive:!0}))),a.a.createElement(Qn,null,a.a.createElement(Xn,{id:"1D"===y?"active":null,onClick:A},"1D"),a.a.createElement(Xn,{id:"1M"===y?"active":null,onClick:A},"1M"),a.a.createElement(Xn,{id:"3M"===y?"active":null,onClick:A},"3M"),a.a.createElement(Xn,{id:"1Y"===y?"active":null,onClick:A},"1Y"),a.a.createElement(Xn,{id:"5Y"===y?"active":null,onClick:A},"5Y"))),a.a.createElement(Rn,{stock:e[c]})):a.a.createElement(bn,null)};ne.defaultProps={stocks:{}};var ee=ne,te=Object(Y.f)(Object(C.c)((function(n,e){return{stocks:n.stocks,current:e.match.params.sym||"MSFT",ownProps:e}}),(function(n){return{fetchStockChart:function(e,t){return n(g(e,t))}}}))(ee));function re(){var n=Object(D.a)(["\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return re=function(){return n},n}var ae=F.b.main(re()),ce=function(){return a.a.createElement(ae,null,a.a.createElement(Y.c,null,a.a.createElement(Y.a,{path:"/:sym",component:te}),a.a.createElement(Y.a,{path:"/",component:te})))};function oe(){var n=Object(D.a)(["\n  \n  background-color: ",";\n  color: ",";\n  p {\n    font-family: 'Eczar',\n    font-size: 12pt;\n    font-weight: 'light'\n  }\n  h1 {\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 34pt;\n    font-weight: light;\n  }\n  h2 {\n    font-family: 'Eczar'\n    font-size: 24pt;\n    font-weight: bold;\n  }\n  h3 {\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 20pt;\n    font-weight: regular;\n  }\n"]);return oe=function(){return n},n}var ie={colors:{navbar:"#27272f",background:"#33333D",card:"#373740",font:"#FFFFFF",primary:"#1EB980",secondary:"#045D56",third:"#FF6859",fourth:"#FFCCF44",fifth:"#B15DFF",sixth:"#72DEFF"}},ue=F.b.div(oe(),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.font})),le=function(n){var e=n.store;return a.a.createElement(C.a,{store:e},a.a.createElement(F.a,{theme:ie},a.a.createElement(ue,null,a.a.createElement(S.a,{basename:"/stocknfo"},a.a.createElement(cn,null),a.a.createElement(ce,null)))))};le.defaultProps={store:{}};var se=le;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(se,{store:w}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[210,1,2]]]);
//# sourceMappingURL=main.6197075e.chunk.js.map