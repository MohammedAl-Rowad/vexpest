(this.webpackJsonpvexpest=this.webpackJsonpvexpest||[]).push([[0],{56:function(e,t,a){e.exports=a(97)},61:function(e,t,a){},62:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),o=a.n(l),i=(a(61),a(62),a(9)),c=(a(63),a(65),a(24)),s=a(22),u=a.n(s),d=a(20),m=a(28),h=(a(19),a(66),a(2));var p=a(12),g=a(35),f=a(50);function b(e){var t=e.child,a=e.data,l=e.resize,o=e.disableDragging,c=Object(g.a)(e,["child","data","resize","disableDragging"]),s=Object(n.useState)({x:c.x,y:c.y,width:"100%",height:500}),u=Object(i.a)(s,2),d=u[0],m=u[1],h=d.height,b=d.x,E=d.y,v=d.width,w=r.a.cloneElement(t,{height:h,width:v,data:a,y:c.yPie,tooltip:c.tooltip,mapper:c.mapper,title:c.title,legend:c.legend});return r.a.createElement(f.a,{minHeight:h,disableDragging:o||!1,maxHeight:l?h:null,minWidth:"50%",style:{background:"#181818",boxShadow:"0px 0px 10px #595959"},onResize:function(e,t,a,n,r){m(Object(p.a)({},c,{height:a.offsetHeight,width:a.offsetWidth}))},default:{x:b,y:E,width:v,height:h,minHeight:500}},w)}var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"stargazers_count",a=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return{name:e.name,y:a?a(e[t]):e[t]}})).filter((function(e){return e.y>0}))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){e.watchers_count;return{name:e.name,weight:1,html_url:e.html_url}}))},w=function(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")};function x(e){var t=e.data,a=Object(n.useState)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return w(e.filter((function(e){return e.fork})).length)}(t)),l=Object(i.a)(a,1)[0];return r.a.createElement("wired-card",{elevation:"3",style:{width:"100%",color:"#fff",textAlign:"center"},fill:"#1C2D44"},r.a.createElement(h.Row,null,r.a.createElement(h.Col,{xs:12,sm:12,md:12,lg:12},r.a.createElement("h1",null,l," Repositories Forked By This User"))))}function y(e){var t=e.data,a=Object(n.useState)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return w(e.filter((function(e){return!e.fork})).length)}(t)),l=Object(i.a)(a,1)[0];return r.a.createElement("wired-card",{elevation:"3",style:{width:"100%",color:"#fff",textAlign:"center"},fill:"#591228"},r.a.createElement(h.Row,null,r.a.createElement(h.Col,{xs:12,sm:12,md:12,lg:12},r.a.createElement("h1",null,l," Repositories Created By this user"))))}function O(e){var t=e.data,a=Object(n.useState)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return w(e.reduce((function(e,t){return e+(t.stargazers_count||0)}),0))}(t)),l=Object(i.a)(a,1)[0];return r.a.createElement("wired-card",{elevation:"3",style:{width:"100%",color:"#fff",textAlign:"center"},fill:"#992E3F"},r.a.createElement(h.Row,null,r.a.createElement(h.Col,{xs:12,sm:12,md:12,lg:12},r.a.createElement("h1",null,l," Total Stars"))))}function C(e){var t=e.data,a=Object(n.useState)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return w(e.reduce((function(e,t){return e+(t.forks_count||0)}),0))}(t)),l=Object(i.a)(a,1)[0];return r.a.createElement("wired-card",{elevation:"3",style:{width:"100%",color:"#fff",textAlign:"center"},fill:"#A64F03"},r.a.createElement(h.Row,null,r.a.createElement(h.Col,{xs:12,sm:12,md:12,lg:12},r.a.createElement("h1",null,l," times his/her repos have been Forked"))))}function k(e){var t=e.data,a=Object(n.useState)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return w(e.filter((function(e){return e.archived})).length)}(t)),l=Object(i.a)(a,1)[0];return r.a.createElement("wired-card",{elevation:"3",style:{width:"100%",color:"#fff",textAlign:"center"},fill:"#424370"},r.a.createElement(h.Row,null,r.a.createElement(h.Col,{xs:12,sm:12,md:12,lg:12},r.a.createElement("h1",null,l," archived Repos Count"))))}function _(e){var t=e.data,a=Object(n.useState)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return w(e.filter((function(e){return!e.archived})).length)}(t)),l=Object(i.a)(a,1)[0];return r.a.createElement("wired-card",{elevation:"3",style:{width:"100%",color:"#fff",textAlign:"center"},fill:"#730220"},r.a.createElement(h.Row,null,r.a.createElement(h.Col,{xs:12,sm:12,md:12,lg:12},r.a.createElement("h1",null,l," active Repos Count"))))}var j=a(23),R=a.n(j),S={title:{text:"Stars by Repository"},subtitle:{text:"Source: GitHub public API"},chart:{height:500,backgroundColor:null,plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},legend:{align:"right",verticalAlign:"top",layout:"vertical",navigation:{style:{color:"#fff"}}},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0},showInLegend:!0}},credits:{enabled:!1},responsive:{rules:[{condition:{maxWidth:500},plotOptions:{pie:{showInLegend:!1}},chartOptions:{legend:{enabled:!1}}}]},tooltip:{pointFormat:"number of \ud83c\udf1f: <b>{point.y}</b>"}},A=a(13),N=a.n(A);function z(e){var t=e.width,a=e.height,n=e.data,l=e.y,o=e.tooltip,i=e.mapper,c=e.title,s=e.legend;return r.a.createElement(R.a,{highcharts:N.a,options:D(t,a,n,l,o,i,c,s),allowChartUpdate:!0})}a(81)(N.a);var D=function(e,t,a,n,r,l,o,i){return Object(p.a)({},S,{title:{text:o||S.title.text},chart:Object(p.a)({},S.chart,{height:t,width:isNaN(e)?null:e}),plotOptions:{pie:Object(p.a)({},S.plotOptions.pie,{showInLegend:!(e<650)&&i})},tooltip:Object(p.a)({},r||S.tooltip),series:[{colorByPoint:!0,data:E(a,n,l)}]})};function B(e){var t=e.width,a=e.height,n=e.data;return r.a.createElement(R.a,{highcharts:N.a,options:F(t,a,n),allowChartUpdate:!0})}var F=function(e,t,a){var n=function(e){var t=new Set,a=new Map;e.forEach((function(e){var a=e.created_at;return t.add(new Date(a).getFullYear())}));var n=Array.from(t).sort((function(e,t){return e-t}));e.forEach((function(e){var t=e.created_at,n=new Date(t).getFullYear();a.set(n,(a.get(n)||0)+1)}));var r=n.map((function(e){return a.get(e)}));return{years:n,dataToViz:r}}(a),r=n.years,l=n.dataToViz,o={title:{text:"Repositories Rate By Years"},subtitle:{text:"Source: GitHub public API"},chart:{height:500,backgroundColor:null,plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"area"},credits:{enabled:!1},plotOptions:{area:{pointStart:r[0].pointStart,cursor:"pointer",marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}}}},tooltip:{pointFormat:"You have created {point.y} repos in this date"}};return Object(p.a)({},o,{chart:Object(p.a)({},o.chart,{height:t,width:isNaN(e)?null:e}),xAxis:{allowDecimals:!1,title:{text:"Years"},categories:r},yAxis:{title:{text:"Nuclear weapon states"}},series:[{name:"Repositories",data:l}]})},I={title:{text:"All Repositories"},subtitle:{text:"Source: GitHub public API"},chart:{height:500,backgroundColor:null,plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1},credits:{enabled:!1},plotOptions:{wordcloud:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0}},series:{cursor:"pointer",events:{click:function(e){return window.open(e.point.html_url,"_blank").focus()}}}},tooltip:{enabled:!1,pointFormat:"number of \ud83d\udc41\ufe0f: <b>{point.weight}</b>"}};function P(e){var t=e.width,a=e.height,n=e.data;return r.a.createElement(R.a,{highcharts:N.a,options:W(t,a,n),allowChartUpdate:!0})}a(45)(N.a),a(46)(N.a);var W=function(e,t,a){return Object(p.a)({},I,{chart:Object(p.a)({},I.chart,{height:t,width:isNaN(e)?null:e}),series:[{colorByPoint:!0,data:v(a),type:"wordcloud"}]})};function H(e){var t=e.width,a=e.height,n=e.data;return r.a.createElement(R.a,{highcharts:N.a,options:L(t,a,n),allowChartUpdate:!0})}a(45)(N.a),a(46)(N.a);var L=function(e,t,a){var n,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={};e.filter((function(e){return e.language})).forEach((function(e){var a=e.language;t[a]=(t[a]||0)+1}));var a=Object.keys(t);return{languages:a,values:a.map((function(e){var n=Array.from({length:a.length}).fill(0);return n[a.indexOf(e)]=t[e],{name:e,data:n}}))}}(a),l=r.languages,o=r.values,i=(n=l,{chart:{type:"column",backgroundColor:null},title:{text:"Repositories By Language"},subtitle:{text:"Source: GitHub public API"},credits:{enabled:!1},xAxis:{categories:Object(d.a)(n),crosshair:!0},tooltip:{cursor:"pointer",headerFormat:'<span style="font-size:10px">Info</span><br />',pointFormat:'<span style="color:{series.color};padding:0">{series.name}</span>: <b>{point.y}</b> repo',shared:!1,useHTML:!0},plotOptions:{column:{pointPadding:.2,borderWidth:0,cursor:"pointer"}}});return Object(p.a)({},i,{chart:Object(p.a)({},i.chart,{height:t,width:isNaN(e)?null:e}),series:o})},U=a(53),G=(a(90),a(91),function(e,t){return new Date(e)-new Date(t)}),T=function(e,t){return+e.split(",").join("")-+t.split(",").join("")},Y=[{headerName:"Repository Name",field:"name"},{headerName:"Created At",field:"created_at",comparator:G},{headerName:"Updated At",field:"updated_at",comparator:G},{headerName:"Size",field:"size"},{headerName:"Stars Count",field:"stargazers_count",comparator:T},{headerName:"Watchers Count",field:"watchers_count",comparator:T},{headerName:"URL",field:"html_url",sortable:!1,cellRenderer:function(e){var t=e.value,a=t.split("/");return'<a href="'.concat(t,'" target="_blank" rel="noopener">').concat(a[a.length-1],"</a>")}},{headerName:"Is Forked?",field:"fork"},{headerName:"Language",field:"language"},{headerName:"Description",field:"description"},{headerName:"Has Issues",field:"has_issues"},{headerName:"Forks Count",field:"forks_count",comparator:T},{headerName:"Open Issues Count",field:"open_issues_count",comparator:T},{headerName:"Watchers",field:"watchers",comparator:T}],M=a(40);function J(e){var t=e.data,a=Object(n.useState)({columnDefs:Y,rowData:V(t),defaultColDef:{width:170,sortable:!0,resizable:!0}}),l=Object(i.a)(a,1)[0];return r.a.createElement("div",{className:"ag-theme-alpine-dark",style:{height:"500px",width:"100%"}},r.a.createElement(U.AgGridReact,{columnDefs:l.columnDefs,rowData:l.rowData,defaultColDef:l.defaultColDef}))}var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){var t=e.created_at,a=e.watchers_count,n=e.stargazers_count,r=e.updated_at,l=e.size,o=e.forks_count,i=e.watchers,c=e.open_issues_count,s=Object(g.a)(e,["created_at","watchers_count","stargazers_count","updated_at","size","forks_count","watchers","open_issues_count"]);return Object(p.a)({created_at:M(new Date(t)).format("ll"),updated_at:M(new Date(r)).format("ll"),size:"".concat(l/1e3," MB"),stargazers_count:w(n),watchers_count:w(a),forks_count:w(o),open_issues_count:w(c),watchers:w(i)},s)}))};a(93);function $(){return r.a.createElement(h.Row,null,r.a.createElement(h.Col,{sm:12},r.a.createElement("section",{style:{textAlign:"center"}},r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("wired-spinner",{spinning:!0,duration:"1000"})),r.a.createElement("div",null,r.a.createElement("b",null,"This might take some time please wait we are traversing through the api pages, we will only go to 10 pages (1000 repo)...")))))}a(94);function q(){var e=new URLSearchParams(window.location.search).get("name"),t=Object(n.useState)({data:null,err:!1}),a=Object(i.a)(t,2),l=a[0],o=a[1];Object(n.useEffect)((function(){Q(o.bind(q),e)}),[]);var c=null,s=null;return c=l.data?K(l.data):r.a.createElement($,null),l.err&&(s=r.a.createElement("wired-dialog",{open:!l.err,elevation:5},r.a.createElement("h1",null,"Oops! :("),r.a.createElement("p",null,r.a.createElement("b",null,"looks like we sent too many request, plz come back later after 1 hour. ( most likely )")),r.a.createElement("p",null,"or something I have no idea about happened and my code does not handle it."),r.a.createElement("div",{style:{textAlign:"center",padding:"30px 16px 16px"}}))),r.a.createElement("section",null,c,s)}var K=function(e){return r.a.createElement("section",null,r.a.createElement(h.Row,null,r.a.createElement(h.Col,{xs:12,sm:12,md:6,lg:6},r.a.createElement(y,{data:e})),r.a.createElement(h.Col,{xs:12,sm:12,md:6,lg:6},r.a.createElement(x,{data:e})),r.a.createElement(h.Col,{xs:12,sm:12,md:6,lg:6},r.a.createElement(O,{data:e})),r.a.createElement(h.Col,{xs:12,sm:12,md:6,lg:6},r.a.createElement(C,{data:e})),r.a.createElement(h.Col,{xs:12,sm:12,md:6,lg:6},r.a.createElement(k,{data:e})),r.a.createElement(h.Col,{xs:12,sm:12,md:6,lg:6},r.a.createElement(_,{data:e})),r.a.createElement(h.Col,{xs:12,sm:12,md:6,lg:6},r.a.createElement(b,{child:r.a.createElement(P,null),y:70,x:0,data:e})),r.a.createElement(h.Col,{xs:12,sm:12,md:6,lg:6},r.a.createElement(b,{child:r.a.createElement(z,null),y:70,x:10,data:e,yPie:"size",mapper:function(e){return e/1e3},tooltip:{pointFormat:"Size in MB: <b>{point.y}</b>"},title:"Repository by Size in megabyte",legend:!1}))),r.a.createElement(h.Row,null,r.a.createElement(h.Col,{xs:12,sm:12,md:12,lg:12},r.a.createElement(b,{child:r.a.createElement(z,null),y:670,x:0,data:e,yPie:"stargazers_count"}))),r.a.createElement(h.Row,null,r.a.createElement(h.Col,{xs:12,sm:12,md:12,lg:12},r.a.createElement(b,{child:r.a.createElement(z,null),y:1270,x:0,data:e,yPie:"forks_count",tooltip:{pointFormat:"forks count \u26d3\ufe0f: <b>{point.y}</b>"},title:"Forks by Repository"}))),r.a.createElement(h.Row,null,r.a.createElement(h.Col,{xs:12,sm:12,md:6,lg:6},r.a.createElement(b,{child:r.a.createElement(B,null),y:1870,x:0,data:e})),r.a.createElement(h.Col,{xs:12,sm:12,md:6,lg:6},r.a.createElement(b,{child:r.a.createElement(H,null),y:1870,x:10,data:e})),r.a.createElement(h.Col,{xs:12,sm:12,md:12,lg:12},r.a.createElement(b,{child:r.a.createElement(J,null),y:2470,disableDragging:!0,x:0,data:e,resize:!1}))))},Q=function(){var e=Object(m.a)(u.a.mark((function e(t,a){var n,r,l,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n=[],r=0,l=Object(d.a)(Array(10).keys());case 3:if(!(r<l.length)){e.next=16;break}return o=l[r],e.next=7,fetch("https://api.github.com/users/".concat(a,"/repos?per_page=1000&page=").concat(o+1));case 7:return e.next=9,e.sent.json();case 9:if(0!==(i=e.sent).length){e.next=12;break}return e.abrupt("break",16);case 12:n.push.apply(n,Object(d.a)(i));case 13:r++,e.next=3;break;case 16:t({data:n,err:!1}),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),console.error(e.t0),t({err:!0});case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t,a){return e.apply(this,arguments)}}();function X(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],l=t[1];return a||r.a.createElement("section",{style:{textAlign:"center"}},r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("wired-textarea",{placeholder:"Github username",rows:"6",id:"textarea-name"})),r.a.createElement("div",{style:{padding:"10px",textAlign:"center"}},r.a.createElement("wired-button",{elevation:"3",onClick:function(e){return l(r.a.createElement(c.a,{to:{pathname:"/dashboard",search:"?name=".concat(document.getElementById("textarea-name").value)}},"lorem"))}},"Get my dashbard")))}var Z=a(33);var ee=function(){return r.a.createElement(h.Container,null,r.a.createElement(Z.a,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/dashboard"},r.a.createElement(h.Row,null,r.a.createElement(h.Col,{sm:12},r.a.createElement(q,null)))),r.a.createElement(c.b,{path:"/"},r.a.createElement(h.Row,null,r.a.createElement(h.Col,{sm:12},r.a.createElement(X,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.d67f91d6.chunk.js.map