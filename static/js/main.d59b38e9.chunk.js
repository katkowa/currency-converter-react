(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(9),a(1)),u=[{id:"USD",name:"Dolar ameryka\u0144ski",rate:3.9667},{id:"EUR",name:"Euro",rate:4.4524},{id:"GBP",name:"Funt brytyjski",rate:4.4524},{id:"KRW",name:"Won korea\u0144ski",rate:.003269}],i=(a(10),function(e){var t=e.result;return r.a.createElement("p",null,!!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"form__result"},t.sourceAmount.toFixed(2)," PLN =",r.a.createElement("span",{className:"form__result--value"},(+t.targetAmount).toFixed(2)," ",t.currency))))}),m=(a(11),function(){var e=Object(n.useState)(new Date),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){l(new Date)}),1e3);return function(){clearInterval(e)}}),[]),r.a.createElement("div",{className:"clock"},"Dzisiaj jest ",a.toLocaleString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit",second:"2-digit"}))}),s=(a(12),function(e){var t=e.result,a=e.calculateResult,l=Object(n.useState)(""),c=Object(o.a)(l,2),s=c[0],f=c[1],d=Object(n.useState)(u[0].id),E=Object(o.a)(d,2),v=E[0],p=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(s,v)}},r.a.createElement("fieldset",{className:"form"},r.a.createElement("legend",{className:"form__legend"},"Przelicznik walut"),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("span",{className:"form__label"},"Kwota w z\u0142*"),r.a.createElement("input",{value:s,onChange:function(e){var t=e.target;return f(t.value)},className:"form__field",placeholder:"Wpisz kwot\u0119 w z\u0142ot\xf3wkach",type:"number",step:"0.01",required:!0}))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("span",{className:"form__label"},"Waluta"),r.a.createElement("select",{value:v,onChange:function(e){var t=e.target;return p(t.value)},className:"form__field"},u.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))))),r.a.createElement("p",null,r.a.createElement("button",{className:"form__button"},"Oblicz")))),r.a.createElement(i,{result:t}))});var f=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s,{result:a,calculateResult:function(e,t){var a=u.find((function(e){return e.id===t})).rate;console.log(a),l({sourceAmount:+e,targetAmount:e/a,currency:t})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.d59b38e9.chunk.js.map