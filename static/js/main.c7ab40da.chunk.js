(this["webpackJsonpjust-weather-app"]=this["webpackJsonpjust-weather-app"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(14),o=c.n(s),r=(c(22),c(5)),j=c.n(r),i=c(15),b=c(3),h=(c(24),c(16)),l=c.n(h),u=c(17),d=c(0);var p=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),o=Object(b.a)(s,2),r=o[0],h=o[1],p=Object(a.useState)("London"),O=Object(b.a)(p,2),m=O[0],f=O[1],g=Object(a.useState)(""),x=Object(b.a)(g,2),w=x[0],S=x[1],v=Object(a.useState)(""),y=Object(b.a)(v,2),k=y[0],N=y[1],A=Object(a.useState)(""),E=Object(b.a)(A,2),C=E[0],I=E[1],J=Object(a.useState)(""),M=Object(b.a)(J,2),P=M[0],q=M[1],B=Object(u.debounce)((function(e){console.log("clicklendi"),f(e)}),500);return console.log("form term",r),console.log(),Object(a.useEffect)((function(){try{Object(i.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(m,"&mode=json&units=metric&APPID=cb370b1fdbe3b6b0965324cccfeb99e3"));case 2:t=e.sent,n(t.data),S(t.data.weather[0].icon),N(t.data.sys.country),I(t.data.main.temp),q(t.data.weather[0].main),console.log("hooksearchterm",m);case 9:case"end":return e.stop()}}),e)})))()}catch(e){console.log(e)}}),[m]),console.log("app weather",c),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("h2",{className:"title",children:[Object(d.jsx)("i",{className:"fa fa-cloud"}),"Weather App"]}),Object(d.jsxs)("form",{onSubmit:B,className:"search-form",children:[Object(d.jsx)("input",{type:"text",value:r,onChange:function(e){return h(e.target.value)},placeholder:"Enter your cityname"}),Object(d.jsxs)("button",{type:"button",onClick:B,children:[" ","Search"," "]})]}),Object(d.jsx)("h3",{children:P}),Object(d.jsx)("img",{style:{width:150,height:150},src:"http://openweathermap.org/img/w/".concat(w,".png"),alt:"icon"}),Object(d.jsxs)("h2",{children:[Math.floor(C),"\xb0"]}),Object(d.jsxs)("h2",{children:[" ",c.name,", ",k]})]})})};o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.c7ab40da.chunk.js.map