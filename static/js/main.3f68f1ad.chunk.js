(this["webpackJsonpmy-react-boilerplate"]=this["webpackJsonpmy-react-boilerplate"]||[]).push([[0],{109:function(e,a,t){e.exports=t(214)},118:function(e,a,t){},214:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),o=t.n(l),s=t(16),c=t(24),i=t(99),u=t(100),m=t(13),d={allCountriesData:null,allCountriesSortedByCases:null,allCountriesloading:!1,allCountriesError:null},p={currentCountry:null,currentCountryLoading:!1,currentCountryError:null},E={currentCountryHistory:null,Dates:null,Cases:null,Deaths:null,Recovered:null,currentCountryLoading:!1,currentCountryError:null},C=Object(c.combineReducers)({AllCountries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_ALL_COUNTRIES":return Object(m.a)({},e,{allCountriesData:a.payload.allCountries,allCountriesSortedByCases:a.payload.sortedCountriesByCases,allCountriesloading:!1});case"SET_ALL_COUNTRIES_LOADING":return Object(m.a)({},e,{allCountriesloading:!0});case"ERROR":return Object(m.a)({},e,{allCountriesError:a.payload,allCountriesloading:!1});default:return e}},CurrentCountryData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_CURRENT_COUNTRY":return Object(m.a)({},e,{currentCountry:a.payload,currentCountryLoading:!1});case"SET_CURRENT_COUNTRY_LOADING":return Object(m.a)({},e,{currentCountryLoading:!0});case"SET_CURRENT_COUNTRY_ERROR":return Object(m.a)({},e,{currentCountryError:a.payload,currentCountryLoading:!1});default:return e}},DataHistory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_HiSTORY_CURRENT_COUNTRY":return Object(m.a)({},e,{currentCountryHistory:a.payload.Data,Dates:a.payload.Dates,Cases:a.payload.Cases,Deaths:a.payload.Deaths,Recovered:a.payload.Recovered,currentCountryLoading:!1});case"SET_HiSTORY_CURRENT_COUNTRY_LOADING":return Object(m.a)({},e,{currentCountryLoading:!0});case"SET_HiSTORY_CURRENT_COUNTRY_ERROR":return Object(m.a)({},e,{currentCountryError:a.payload,currentCountryLoading:!1});default:return e}}}),y=(t(118),t(119),t(15)),f=t(36),g=t.n(f),b=t(107),v=t(58),h=function(){return{type:"SET_ALL_COUNTRIES_LOADING"}},N=function(){return{type:"SET_CURRENT_COUNTRY_LOADING"}},O=function(){return{type:"SET_HiSTORY_CURRENT_COUNTRY_LOADING"}},R=t(56),T=t.n(R),D=t(34),S=t(45),j=t(106),_=t(108),L=t(9),w=function(e){var a=e.data,t=Object(_.a)(e,["data"]);return r.a.createElement("div",null,r.a.createElement(L.z.Option,t,r.a.createElement("img",{src:a.countryInfo.flag,className:"flag",alt:a.country}),a.country))},k=t(1),I=t.n(k),U=t(25),A=t(37),x=function(e){var a=e.AllCountriesData,t=a.allCountriesData,l=a.allCountriesloading,o=e.getAllCountries,s=e.setCurrentCountry,c=e.getCurrentHistory;Object(n.useEffect)((function(){o()}),[o]);var i=Object(n.useState)(""),u=Object(y.a)(i,2)[1],m=Object(n.useState)(0),d=Object(y.a)(m,2);d[0],d[1];return r.a.createElement(D.a,null,r.a.createElement(S.a,null,r.a.createElement(A.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"},r.a.createElement("div",{className:"countriesSection"},r.a.createElement("div",{className:"countriesDopdown"},l||null===t?r.a.createElement("div",{className:"Spinner"},r.a.createElement(U.a,{animation:"border",role:"status",variant:"success"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):r.a.createElement("div",null,r.a.createElement(j.a,{placeholder:"Search or Select Countrie ...",options:t,getOptionLabel:function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:e.countryInfo.flag,className:"flag",alt:e.country}),"".concat(e.country))},getOptionValue:function(e){return e},cacheOptions:!0,loadOptions:function(e,a){a(function(e){if(!l&&null!==t)return t.filter((function(a){return a.country.toLowerCase().includes(e.toLowerCase())}))}(e))},defaultOptions:!0,onInputChange:function(e){var a=e.replace(/\W/g,"");return u({inputValue:a}),a},onChange:function(e){if(null!==e){var a=e.updated,t=e.country,n=e.countryInfo,r=n.flag,l=n.lat,o=n.long,i=e.cases,u=e.todayCases,m=e.deaths,d=e.todayDeaths,p=e.recovered,E=e.active,C=e.critical,y=e.tests;s({updated:a,country:t,flag:r,lat:l,long:o,cases:i,todayCases:u,deaths:m,todayDeaths:d,recovered:p,active:E,critical:C,tests:y}),c(t)}else s(null)},components:{Option:w},className:"searchBox",autoFocus:!0,isClearable:!0}),r.a.createElement("p",{className:"lastUpdate"},r.a.createElement("i",{className:"far fa-clock"}),"Last update:",r.a.createElement("span",null,t[0].updated>0&&T()(t[0].updated).fromNow()))))))))};x.prototype={allCountriesData:I.a.object,allCountriesloading:I.a.bool.isRequired,getAllCountries:I.a.func.isRequired,setCurrentCountry:I.a.func.isRequired};var H=Object(s.b)((function(e){return{AllCountriesData:e.AllCountries}}),{getAllCountries:function(){return function(){var e=Object(v.a)(g.a.mark((function e(a){var t,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(),e.next=4,fetch("https://corona.lmao.ninja/v2/countries");case 4:if((t=e.sent).ok){e.next=8;break}throw a({type:"ERROR",payload:"HTTP Status: ".concat(t.status)}),new Error("HTTP Status: ".concat(t.status));case 8:return e.next=10,t.json();case 10:n=e.sent,r=Object(b.a)(n).sort((function(e,a){return a.cases-e.cases})),a({type:"GET_ALL_COUNTRIES",payload:{allCountries:n,sortedCountriesByCases:r}}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),a({type:"ERROR",payload:e.t0.message});case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(a){return e.apply(this,arguments)}}()},setCurrentCountry:function(e){return N(),{type:"SET_CURRENT_COUNTRY",payload:e}},getCurrentHistory:function(e){return function(){var a=Object(v.a)(g.a.mark((function a(t){var n,r,l,o,s,c,i,u,m,d,p,E,C,f,b,v,h,N,R,T;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e),n=[],r=[],l=[],o=[],a.prev=5,O(),a.next=9,fetch("https://corona.lmao.ninja/v2/historical/".concat(e));case 9:if((s=a.sent).ok){a.next=15;break}throw t({type:"SET_HiSTORY_CURRENT_COUNTRY_ERROR",payload:"HTTP Status: ".concat(s.status)}),new Error("HTTP Status: ".concat(s.status));case 15:return a.next=17,s.json();case 17:for(c=a.sent,i=0,u=Object.entries(c.timeline.cases);i<u.length;i++)m=Object(y.a)(u[i],2),d=m[0],p=m[1],E=d.split("/"),n.push("".concat(E[1],"/").concat(E[0])),r.push(p);for(C=0,f=Object.entries(c.timeline.deaths);C<f.length;C++)b=Object(y.a)(f[C],2),b[0],v=b[1],l.push(v);for(h=0,N=Object.entries(c.timeline.recovered);h<N.length;h++)R=Object(y.a)(N[h],2),R[0],T=R[1],o.push(T);n.length>0&&r.length>0&&l.length>0&&o.length>0&&t({type:"GET_HiSTORY_CURRENT_COUNTRY",payload:{Data:c,Dates:n,Cases:r,Deaths:l,Recovered:o}});case 22:a.next=27;break;case 24:a.prev=24,a.t0=a.catch(5),t({type:"SET_HiSTORY_CURRENT_COUNTRY_ERROR",payload:a.t0.message});case 27:case"end":return a.stop()}}),a,null,[[5,24]])})));return function(e){return a.apply(this,arguments)}}()}})(x),Y=t(23),G=t(22),B=function(e){var a=e.country,t=(a.updated,a.country),n=a.countryInfo.flag,l=a.cases,o=a.todayCases,s=a.deaths,c=a.todayDeaths,i=a.recovered,u=(a.active,a.critical,a.tests);return r.a.createElement("div",{className:"CountryListItem"},r.a.createElement("div",{className:"flagAndTitle"},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("p",{className:"CountryName"},t)),r.a.createElement("div",{className:"CDR"},r.a.createElement(Y.a,{key:"Cases",placement:"bottom",overlay:r.a.createElement(G.a,{className:"myToolTip",id:"tooltip-bottom"},"Confirmed Cases")},r.a.createElement("div",{className:"Cases"},r.a.createElement("i",{className:"fas fa-users"}),l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),o>0&&r.a.createElement("span",{className:"todayResults"},"+",o.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")))),r.a.createElement(Y.a,{key:"Deaths",placement:"bottom",overlay:r.a.createElement(G.a,{className:"myToolTip",id:"tooltip-bottom"},"Confirmed Deaths")},r.a.createElement("div",{className:"Deaths"},r.a.createElement("i",{className:"fas fa-skull"}),s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),c>0&&r.a.createElement("span",{className:"todayResults"},"+",c.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")))),r.a.createElement(Y.a,{key:"Recovered",placement:"bottom",overlay:r.a.createElement(G.a,{className:"myToolTip",id:"tooltip-bottom"},"Confirmed Recovered")},r.a.createElement("div",{className:"Recovered"},r.a.createElement("i",{className:"fas fa-hospital-user"}),i.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))),r.a.createElement(Y.a,{key:"Tests",placement:"bottom",overlay:r.a.createElement(G.a,{className:"myToolTip",id:"tooltip-bottom"},"Confirmed Tests")},r.a.createElement("div",{className:"Tests"},r.a.createElement("i",{className:"fas fa-vial"}),u.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")))))},M=function(e){var a=e.AllCountriesData,t=a.allCountriesData,n=a.allCountriesSortedByCases,l=a.allCountriesloading;return r.a.createElement("div",null,null===t||l?r.a.createElement("div",{className:"Spinner"},r.a.createElement(U.a,{animation:"border",role:"status",variant:"success"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):n.map((function(e,a){return r.a.createElement(B,{country:e,key:a,id:a})})))};M.prototype={allCountriesData:I.a.array,allCountriesSortedByCases:I.a.array,allCountriesloading:I.a.bool.isRequired};var W,z=Object(s.b)((function(e){return{AllCountriesData:e.AllCountries}}))(M),$=t(103),J=Object(s.b)((function(e){return{CurrentCountryData:e.CurrentCountryData,DataHistory:e.DataHistory}}))((function(e){var a=e.DataHistory,t=a.Dates,l=a.Cases,o=a.Deaths,s=a.Recovered,c=a.currentCountryLoading,i=(Object(n.useRef)(null),Object(n.useState)(null)),u=Object(y.a)(i,2);u[0],u[1];return r.a.createElement(r.a.Fragment,null,c||null===t?r.a.createElement("div",{className:"Spinner"},r.a.createElement(U.a,{animation:"border",role:"status",variant:"success"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):r.a.createElement($.a,{className:"Line",data:{labels:t,datasets:[{label:"Cases",data:l,fill:!1,borderColor:"#fca903",backgroundColor:"#fca903"},{label:"Deaths",data:o,fill:!1,borderColor:"#d14356",backgroundColor:"#d14356"},{label:"Recovered",data:s,fill:!1,borderColor:"#49d170",backgroundColor:"#49d170"}]},options:{responsive:!0,maintainAspectRatio:!1,tooltips:{enabled:!0,callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label||"";return t&&(t+=":"),t+=Math.round(100*e.yLabel)/100,t}}},scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{gridLines:{display:!0},ticks:{beginAtZero:!0}}]}}}))})),V=t(40);W="pk.eyJ1Ijoia25pdHoiLCJhIjoiY2s5NWx5emQwMDA4aDNkb2l4MHVoMGpnZCJ9.3xTVEOUSMOapHza9bsH-Yg";var q=function(e){var a=e.CurrentCountryData,t=a.currentCountry,l=a.currentCountryLoading,o=e.AllCountriesData,s=o.allCountriesData,c=o.allCountriesloading,i=Object(n.useState)({width:"100%",height:"100%"}),u=Object(y.a)(i,2),d=u[0],p=u[1],E=Object(n.useState)({state:!1,lat:16,long:27}),C=Object(y.a)(E,2),f=C[0],g=C[1];return Object(n.useEffect)((function(){p(null===t||l?Object(m.a)({},d,{latitude:16,longitude:27,zoom:1.3,transitionDuration:3e3,transitionInterpolator:new V.a}):Object(m.a)({},d,{latitude:t.lat,longitude:t.long,zoom:3.5,transitionDuration:3e3,transitionInterpolator:new V.a}))}),[t,l]),r.a.createElement(r.a.Fragment,null,null===s||c?r.a.createElement("div",{className:"Spinner"},r.a.createElement(U.a,{animation:"border",role:"status",variant:"success"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):r.a.createElement(V.d,Object.assign({className:"map"},d,{mapboxApiAccessToken:W,mapStyle:"mapbox://styles/mapbox/dark-v10",onViewportChange:function(e){p(e)}}),s.map((function(e,a){return r.a.createElement(V.b,{key:a,latitude:e.countryInfo.lat,longitude:e.countryInfo.long,offsetTop:-15,offsetLeft:-5},r.a.createElement("i",{className:"fas fa-circle circle",onMouseEnter:function(){return g({state:!0,name:e.country,flag:e.countryInfo.flag,cases:e.cases,deaths:e.deaths,recovered:e.recovered,lat:e.countryInfo.lat,long:e.countryInfo.long})},onMouseLeave:function(){return g(Object(m.a)({},f,{state:!1}))}}))})),f.state&&r.a.createElement(V.c,{latitude:f.lat,longitude:f.long,closeButton:!1,offsetTop:0,offsetLeft:0,className:"popupup",onClose:function(){g(Object(m.a)({},f,{state:!1}))}},r.a.createElement("div",null,r.a.createElement("h6",{className:"popupHeader"},r.a.createElement("img",{src:f.flag,alt:"flag",style:{width:"60px"}}),f.name),r.a.createElement("p",{className:"popupCases"},"Cases: ",f.cases),r.a.createElement("p",{className:"popupDeaths"},"Deaths: ",f.deaths),r.a.createElement("p",{className:"popupRecovered"},"Recovered: ",f.recovered)))))};q.prototype={currentCountry:I.a.object,currentCountryLoading:I.a.bool,allCountriesData:I.a.object,allCountriesloading:I.a.bool};var F=Object(s.b)((function(e){return{CurrentCountryData:e.CurrentCountryData,AllCountriesData:e.AllCountries}}))(q),P=function(){return r.a.createElement(D.a,{className:"MidSection",fluid:!0},r.a.createElement(S.a,null,r.a.createElement(A.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"},r.a.createElement("div",{className:"GlobalMap"},r.a.createElement(F,null)))),r.a.createElement(S.a,null,r.a.createElement(A.a,{xs:"12",sm:"12",md:"6",lg:"5",xl:"5"},r.a.createElement("div",{className:"AllCountriesList"},r.a.createElement(z,null))),r.a.createElement(A.a,{xs:"12",sm:"12",md:"6",lg:"7",xl:"7"},r.a.createElement("div",{className:"currentCountryStates"},r.a.createElement(J,null)))))},Z=t(49),Q=t(48),K=function(){return Object(n.useEffect)((function(){}),[]),r.a.createElement("div",null,r.a.createElement(Z.a,{className:"Navbar",variant:"light",expand:"lg",sticky:"top"},r.a.createElement(D.a,null,r.a.createElement(Y.a,{placement:"bottom",delay:{show:150,hide:150},overlay:r.a.createElement(G.a,{className:"myToolTip"},"Covid-19 Update")},r.a.createElement(Z.a.Brand,{href:"#home",className:"title"},r.a.createElement("i",{className:"fas fa-lungs-virus"})," Covid-19 Update")),r.a.createElement(Z.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(Z.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Q.a,{className:"mr-auto justify-content-end navWidth"},r.a.createElement(Q.a.Link,{href:"#home"},r.a.createElement("i",{className:"fas fa-home navIcons"}),window.innerWidth<992&&r.a.createElement("span",{className:"navIconsSpan"},"Home")),r.a.createElement(Y.a,{placement:"bottom",delay:{show:150,hide:150},overlay:r.a.createElement(G.a,{className:"myToolTip"},"Github Repositorie")},r.a.createElement(Q.a.Link,{href:"https://github.com/MedElBoudali/Coronavirus-Update",target:"_blank"},r.a.createElement("i",{className:"fab fa-github navIcons"}),window.innerWidth<992&&r.a.createElement("span",{className:"navIconsSpan"},"Github Repositorie"))),r.a.createElement(Y.a,{placement:"bottom",delay:{show:150,hide:150},overlay:r.a.createElement(G.a,{className:"myToolTip"},"World Health Organization")},r.a.createElement(Q.a.Link,{href:"https://www.who.int/",target:"_blank"},r.a.createElement("i",{className:"fas fa-laptop-medical navIcons"}),window.innerWidth<992&&r.a.createElement("span",{className:"navIconsSpan"},"World Health Organization"))))))))},X=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(K,null),r.a.createElement(H,null),r.a.createElement(P,null))};var ee=function(){return r.a.createElement(X,null)},ae=[u.a];o.a.render(r.a.createElement(s.a,{store:Object(c.createStore)(C,{},Object(i.composeWithDevTools)(c.applyMiddleware.apply(void 0,ae)))},r.a.createElement(ee,null)),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.3f68f1ad.chunk.js.map