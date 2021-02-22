(this["webpackJsonpreact-tailwind-chart"]=this["webpackJsonpreact-tailwind-chart"]||[]).push([[0],{144:function(e,t,l){},145:function(e,t,l){"use strict";l.r(t);l(4);var s=l(38),i=l.n(s),c=l(39),a=l(0),r=function(e){return e>999999?(e/1e6).toFixed(1)+"M":e},d={legend:{display:!1},scales:{yAxes:[{ticks:{fontColor:"rgba(255, 255, 255, 1)"},gridLines:{display:!1}}],xAxes:[{ticks:{fontColor:"rgba(255, 255, 255, 1)"},gridLines:{color:"rgba(255, 255, 255, .2)",borderDash:[5,5],zeroLineColor:"rgba(255, 255, 255, .2)",zeroLineBorderDash:[5,5]}}]},layout:{padding:{right:10}}},n=function(e){var t,l,s=e.info,i=function(e){var t=e.chartData;return{labels:t.labels,datasets:[{label:"",backgroundColor:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 1)",pointBackgroundColor:"rgba(255, 255, 255, 1)",data:t.data}]}}(s);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"rounded shadow-xl overflow-hidden w-full md:flex",style:{maxWidth:"900px"},children:[Object(a.jsx)("div",{className:"flex w-full md:w-1/2 px-5 pb-4 pt-8 bg-indigo-500 text-white items-center",children:Object(a.jsx)(c.Line,{data:i,options:d})}),Object(a.jsx)("div",{className:"flex w-full md:w-1/2 p-10 bg-gray-100 text-gray-600 items-center",children:Object(a.jsxs)("div",{className:"w-full",children:[Object(a.jsx)("h3",{className:"text-lg font-semibold leading-tight text-gray-800",children:s.stockFullName}),Object(a.jsxs)("h6",{className:"text-sm leading-tight mb-2",children:[Object(a.jsx)("span",{children:s.stockShortName}),"\xa0\xa0-\xa0\xa0Aug 2nd 4:00pm AEST"]}),Object(a.jsxs)("div",{className:"flex w-full items-end mb-6",children:[Object(a.jsx)("span",{className:"block leading-none text-3xl text-gray-800",children:(t=s.price.current,l=3,(t||0).toFixed(l))}),Object(a.jsx)("span",{className:"block leading-5 text-sm ml-4 text-green-500",children:"".concat(s.price.high-s.price.low<0?"\u25bc":"\u25b2"," ").concat((s.price.high-s.price.low).toFixed(3)," (").concat((s.price.high/s.price.low*100-100).toFixed(3),"%)")})]}),Object(a.jsxs)("div",{className:"flex w-full text-xs",children:[Object(a.jsxs)("div",{className:"flex w-5/12",children:[Object(a.jsx)("div",{className:"flex-1 pr-3 text-left font-semibold",children:"Open"}),Object(a.jsx)("div",{className:"flex-1 px-3 text-right",children:s.price.open.toFixed(3)})]}),Object(a.jsxs)("div",{className:"flex w-7/12",children:[Object(a.jsx)("div",{className:"flex-1 px-3 text-left font-semibold",children:"Market Cap"}),Object(a.jsx)("div",{className:"flex-1 pl-3 text-right",children:r(s.price.cap)})]})]}),Object(a.jsxs)("div",{className:"flex w-full text-xs",children:[Object(a.jsxs)("div",{className:"flex w-5/12",children:[Object(a.jsx)("div",{className:"flex-1 pr-3 text-left font-semibold",children:"High"}),Object(a.jsx)("div",{className:"px-3 text-right",children:s.price.high.toFixed(3)})]}),Object(a.jsxs)("div",{className:"flex w-7/12",children:[Object(a.jsx)("div",{className:"flex-1 px-3 text-left font-semibold",children:"P/E ratio"}),Object(a.jsx)("div",{className:"pl-3 text-right",children:s.price.ratio.toFixed(2)})]})]}),Object(a.jsxs)("div",{className:"flex w-full text-xs",children:[Object(a.jsxs)("div",{className:"flex w-5/12",children:[Object(a.jsx)("div",{className:"flex-1 pr-3 text-left font-semibold",children:"Low"}),Object(a.jsx)("div",{className:"px-3 text-right",children:s.price.low.toFixed(3)})]}),Object(a.jsxs)("div",{className:"flex w-7/12",children:[Object(a.jsx)("div",{className:"flex-1 px-3 text-left font-semibold",children:"Dividend yield"}),Object(a.jsx)("div",{className:"pl-3 text-right",children:"".concat(s.price.dividend,"%")})]})]})]})})]})})},x={stockFullName:"SW Limited.",stockShortName:"ASX:SFW",price:{current:2.32,open:2.23,low:2.215,high:2.325,cap:93765011,ratio:20.1,dividend:1.67},chartData:{labels:["10:00","","","","12:00","","","","2:00","","","","4:00"],data:[2.23,2.215,2.22,2.25,2.245,2.27,2.28,2.29,2.3,2.29,2.325,2.325,2.32]}};var o=function(){return Object(a.jsx)("div",{className:"min-w-screen min-h-screen bg-yellow-200  flex items-center justify-center px-5 py-5",children:Object(a.jsx)(n,{info:x})})};l(144);i.a.render(Object(a.jsx)(o,{}),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.9aaea712.chunk.js.map