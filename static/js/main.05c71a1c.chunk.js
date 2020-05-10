(this["webpackJsonpcandid.io"]=this["webpackJsonpcandid.io"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=(a(11),a(2)),l=a.n(o),s=a(5),m=a(1),d=(a(13),function(){return r.a.createElement("div",{className:"nav-main-container"},r.a.createElement("div",{className:"logo-container"},"Candid"))}),u=(a(14),function(e){var t=e.candidate,a=t.id,n=t.firstName,c=t.lastName,i=t.creditIndicator;return r.a.createElement("div",{className:"card-container",key:a},r.a.createElement("div",{className:"rating-container"},r.a.createElement("div",{className:"star-container"},r.a.createElement("div",null,i),r.a.createElement("div",{className:"star"},r.a.createElement("img",{alt:"star",src:"https://img.icons8.com/doodle/48/000000/star--v1.png"})),r.a.createElement("div",{className:"credit-score"},"Credit Score"))),r.a.createElement("div",null,r.a.createElement("img",{className:"credit-card-chip",alt:"card-chip",src:"https://img.icons8.com/office/80/000000/sim-card-chip.png"})),r.a.createElement("div",{className:"candidate-name"},n," ",c))});a(15);var f=function(e){var t=e.filteredCandidates;return r.a.createElement("div",{className:"candidate-cards-container"},t.map((function(e,t){return r.a.createElement(u,{key:t,candidate:e})})))};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h=r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),E=r.a.createElement("line",{x1:12,y1:5,x2:12,y2:19}),g=r.a.createElement("line",{x1:16,y1:9,x2:12,y2:5}),y=r.a.createElement("line",{x1:8,y1:9,x2:12,y2:5}),b=function(e){var t=e.svgRef,a=e.title,n=p(e,["svgRef","title"]);return r.a.createElement("svg",v({className:"icon icon-tabler icon-tabler-arrow-narrow-up",width:44,height:44,viewBox:"0 0 24 24",strokeWidth:1,stroke:"#2c3e50",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",ref:t},n),a?r.a.createElement("title",null,a):null,h,E,g,y)},w=r.a.forwardRef((function(e,t){return r.a.createElement(b,v({svgRef:t},e))}));a.p;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var j=r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),x=r.a.createElement("line",{x1:12,y1:5,x2:12,y2:19}),k=r.a.createElement("line",{x1:16,y1:15,x2:12,y2:19}),S=r.a.createElement("line",{x1:8,y1:15,x2:12,y2:19}),C=function(e){var t=e.svgRef,a=e.title,n=O(e,["svgRef","title"]);return r.a.createElement("svg",N({className:"icon icon-tabler icon-tabler-arrow-narrow-down",width:44,height:44,viewBox:"0 0 24 24",strokeWidth:1,stroke:"#2c3e50",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",ref:t},n),a?r.a.createElement("title",null,a):null,j,x,k,S)},I=r.a.forwardRef((function(e,t){return r.a.createElement(C,N({svgRef:t},e))})),R=(a.p,a(16),function(e){var t=e.handleFilterSearch,a=e.handleFilterChange,n=e.currentFilter;return r.a.createElement("div",{className:"search-bar-main-container"},r.a.createElement("div",{className:"search-bar-container"},r.a.createElement("img",{className:"search-icon",alt:"search",src:"https://img.icons8.com/cotton/64/000000/search--v2.png"}),r.a.createElement("input",{onChange:t,placeholder:"Search for your candidate here..."}),r.a.createElement("div",{className:"sort-container",onClick:a},r.a.createElement("div",{className:"sort"},"Sort"),r.a.createElement("div",null,"asc"===n?r.a.createElement(w,{className:"sort-icon"}):r.a.createElement(I,{className:"sort-icon"}))),r.a.createElement("div",{class:"tooltip"},"Credit Score?",r.a.createElement("span",{class:"tooltiptext"},r.a.createElement("div",{className:"asdf"},"Bad: 0-5"),r.a.createElement("div",{className:"asdf"},"Neutral: 5-7"),r.a.createElement("div",{className:"asdf"},"Good: 7-10")))))});function F(e){return e.reduce((function(e,t){var a={id:t.id,createdAt:t.created_at,firstName:t.first_name,lastName:t.last_name,creditIndicator:t.credit_indicator};return e.push(a),e}),[])}a(17);var L=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),u=o[0],v=o[1],p=Object(n.useState)("desc"),h=Object(m.a)(p,2),E=h[0],g=h[1];function y(){return(y=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://private-anon-b9eedd7f78-sakura3.apiary-mock.com/applicants");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=F(a),c(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]);var b=a.filter((function(e){var t=e.firstName,a=e.lastName;return"".concat(t).concat(a).toLowerCase().includes(u.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(R,{handleFilterSearch:function(e){v(e.target.value)},handleFilterChange:function(){var e;"desc"===E?(g("asc"),e=a.sort((function(e,t){return e.creditIndicator-t.creditIndicator}))):"asc"===E&&(g("desc"),e=a.sort((function(e,t){return t.creditIndicator-e.creditIndicator}))),c(e)},currentFilter:E}),r.a.createElement(f,{filteredCandidates:b}),r.a.createElement("a",{href:"https://icons8.com/icon/80355/star",className:"credit"},"Star icon by Icons8"),r.a.createElement("div",{className:"credit"},"Icons made by"," ",r.a.createElement("a",{href:"https://www.flaticon.com/free-icon/sort_2223770",title:"bqlqn"},"bqlqn")," ","from"," ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.05c71a1c.chunk.js.map