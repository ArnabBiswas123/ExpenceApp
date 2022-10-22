(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),l=(n(18),n(5)),s=n(2),i=(n(19),n(1)),r=n(0);function u(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})}n(21),n(22);var j=function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onchangeyear(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})},o=n(8),d=(n(23),n(24),function(e){var t="0%";return e.maxvalue>0&&(t=Math.round(e.value/e.maxvalue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),b=function(e){var t=e.datapoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.datapoints.map((function(e){return Object(r.jsx)(d,{value:e.value,maxvalue:n,label:e.label},e.label)}))})},x=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(o.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(r.jsx)(b,{datapoints:n})};n(25),n(26),n(27);function v(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:a}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})}var h=function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(u,{className:"expense-item",children:[Object(r.jsx)(v,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},O=function(e){return 0===e.item.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"No Expense Here"}):Object(r.jsx)("ul",{className:"expenses-list",children:e.item.map((function(e){return Object(r.jsx)(h,{title:e.title,amount:e.amount,date:e.date},e.id)}))})};function m(e){var t=Object(i.useState)("2020"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.item.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(r.jsxs)(u,{className:"expenses",children:[Object(r.jsx)(j,{onchangeyear:function(e){c(e)}}),Object(r.jsx)(x,{expenses:l}),Object(r.jsx)(O,{item:l})]})}var p=n(9),f=(n(28),n(29),function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(i.useState)(""),u=Object(s.a)(l,2),j=u[0],o=u[1],d=Object(i.useState)(""),b=Object(s.a)(d,2),x=b[0],v=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:j,date:new Date(x)};e.onSaveExpenseForm(n),c(""),o(""),v("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"title"}),Object(r.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},value:a})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",onChange:function(e){o(e.target.value)},value:j})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"date"}),Object(r.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",onChange:function(e){v(e.target.value)},value:x})]})]}),Object(r.jsx)("div",{className:"new-expense__actions",children:Object(r.jsx)("button",{type:"submit",children:"Add Expense"})})]})}),_=function(e){return Object(r.jsx)("div",{className:"new-expense",children:Object(r.jsx)(f,{onSaveExpenseForm:function(t){var n=Object(p.a)({id:Math.random().toString()},t);e.onSavenewExpense(n)}})})},N=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk",amount:450,date:new Date(2021,5,12)}],g=function(){var e=Object(i.useState)(N),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Hare Krishna"}),Object(r.jsx)(_,{onSavenewExpense:function(e){console.log("App.js"),console.log(e),a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(r.jsx)(m,{item:n})]})};c.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(g,{}))}},[[30,1,2]]]);
//# sourceMappingURL=main.7456125d.chunk.js.map