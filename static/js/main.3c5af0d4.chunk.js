(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),s=n(4),o=n.n(s),r=(n(10),n(2));n(11),n(12);var l=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)({}),o=Object(r.a)(s,2),l=o[0],d=o[1],h=Object(i.useState)([]),u=Object(r.a)(h,2),j=u[0],m=u[1],p="74b8f15b69491f2290ef43c9ab79b0b6",b=function(e){if("Enter"===e.key||n.length>2){var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&units=metric&appid=").concat(p);fetch(t).then((function(e){return e.json()})).then((function(e){d(e),setTimeout((function(){return a("")}),1e3)}))}},f=function(e){var t=e.coords.latitude,n=e.coords.longitude;if(t||n===Number){var c="https://api.openweathermap.org/data/2.5/find?lat=".concat(t,"&lon=").concat(n,"&units=metric&&cnd=1&appid=").concat(p);fetch(c).then((function(e){return e.json()})).then((function(e){console.log(e),m(e),console.log(j)}))}},g=function(){console.log("unable to locate")};return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"search",children:[Object(c.jsx)("input",{className:"search-bar",type:"text",placeholder:"Search city",onChange:function(e){return a(e.target.value)},value:n,onKeyPress:b}),Object(c.jsx)("button",{onClick:b,children:Object(c.jsxs)("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z","clip-rule":"evenodd"}),Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z","clip-rule":"evenodd",width:"1.5em",height:"1.5em"})]})}),Object(c.jsx)("button",{onClick:function(){navigator.geolocation.getCurrentPosition(f,g)},children:Object(c.jsx)("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 12 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z",width:"1.5em",height:"1.5em"})})})]}),"undefined"!=typeof l.main?Object(c.jsxs)("div",{className:"weather",children:[Object(c.jsxs)("h2",{className:"city mt-3",children:["Weather in ",l.name]}),Object(c.jsxs)("div",{className:"temp col d-flex ",children:[Object(c.jsxs)("h1",{children:[Math.round(l.main.temp),"\xb0C"]}),Object(c.jsxs)("h3",{className:"mt-2 ml-4",children:["feels like: ",Math.round(l.main.feels_like),"\xb0C"]})]}),Object(c.jsx)("img",{className:"icon",src:"https://openweathermap.org/img/wn/".concat(l.weather[0].icon,".png"),alt:l.weather[0].icon}),Object(c.jsx)("div",{className:"decription",children:l.weather[0].main}),Object(c.jsxs)("div",{className:"humidity",children:["Humidity: ",l.main.humidity,"%"]}),Object(c.jsxs)("div",{className:"wind",children:["Wind speed ",l.wind.speed," km/h"]})]}):""]})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),d()}},[[13,1,2]]]);
//# sourceMappingURL=main.3c5af0d4.chunk.js.map