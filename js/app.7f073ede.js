(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vlinder/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:"",dense:""}},[n("v-toolbar-title",[t._v("VLINDER")]),n("v-spacer"),n("v-btn",{attrs:{href:"http://vlinder.ugent.be",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("VLINDER website")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-content",[n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("StationsMap")],1)],1)],1)],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:t.mapId}})},s=[],c=(n("99af"),n("4de4"),n("a15b"),n("d81d"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),u=n("d4ec"),l=n("bee2"),p=n("5698"),d=n("d217");n("ac1f"),n("25f0"),n("5319");function h(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.color,r=e.title,i=e.tickSize,a=void 0===i?6:i,o=e.width,s=void 0===o?320:o,c=e.height,u=void 0===c?44+a:c,l=e.marginTop,d=void 0===l?18:l,h=e.marginRight,m=void 0===h?0:h,g=e.marginBottom,v=void 0===g?16+a:g,b=e.marginLeft,y=void 0===b?0:b,w=e.ticks,k=void 0===w?s/64:w,x=e.tickFormat,j=e.tickValues,O=p["b"]("svg").attr("width",s).attr("height",u).attr("viewBox",[0,0,s,u]).style("overflow","visible").style("display","block"),M=function(t){return t.selectAll(".tick line").attr("y1",d+v-u)};if(n.interpolate){var S=Math.min(n.domain().length,n.range().length);t=n.copy().rangeRound(p["k"](p["g"](y,s-m),S)),O.append("image").attr("x",y).attr("y",d).attr("width",s-y-m).attr("height",u-d-v).attr("preserveAspectRatio","none").attr("xlink:href",f(n.copy().domain(p["k"](p["g"](0,1),S))).toDataURL())}else if(n.interpolator){if(t=Object.assign(n.copy().interpolator(p["h"](y,s-m)),{range:function(){return[y,s-m]}}),O.append("image").attr("x",y).attr("y",d).attr("width",s-y-m).attr("height",u-d-v).attr("preserveAspectRatio","none").attr("xlink:href",f(n.interpolator()).toDataURL()),!t.ticks){if(void 0===j){var _=Math.round(k+1);j=p["l"](_).map((function(t){return p["j"](n.domain(),t/(_-1))}))}"function"!==typeof x&&(x=p["d"](void 0===x?",f":x))}}else if(n.invertExtent){var R=n.thresholds?n.thresholds():n.quantiles?n.quantiles():n.domain(),V=void 0===x?function(t){return t}:"string"===typeof x?p["d"](x):x;t=p["n"]().domain([-1,n.range().length-1]).rangeRound([y,s-m]),O.append("g").selectAll("rect").data(n.range()).join("rect").attr("x",(function(e,n){return t(n-1)})).attr("y",d).attr("width",(function(e,n){return t(n)-t(n-1)})).attr("height",u-d-v).attr("fill",(function(t){return t})),j=p["l"](R.length),x=function(t){return V(R[t],t)}}else t=p["m"]().domain(n.domain()).rangeRound([y,s-m]),O.append("g").selectAll("rect").data(n.domain()).join("rect").attr("x",t).attr("y",d).attr("width",Math.max(0,t.bandwidth()-1)).attr("height",u-d-v).attr("fill",n),M=function(){};return O.append("g").attr("transform","translate(0,".concat(u-v,")")).call(p["a"](t).ticks(k,"string"===typeof x?x:void 0).tickFormat("function"===typeof x?x:void 0).tickSize(a).tickValues(j)).call(M).call((function(t){return t.select(".domain").remove()})).call((function(t){return t.append("text").attr("x",y).attr("y",d+v-u-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").text(r)})),O.node()}function f(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,n=p["b"]("canvas").attr("width",e).attr("height",1).node(),r=n.getContext("2d"),i=0;i<e;++i)r.fillStyle=t(i/(e-1)),r.fillRect(i,0,1,1);return n}var m=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"temp";Object(u["a"])(this,t),this.measurementsMap=new Map,this.properties=new Map([["temp",{property:"temp",name:"Temperatuur",title:"Temperatuur (°C)"}],["rainVolume",{property:"rainVolume",name:"Neerslag",title:"Neerslag vandaag (l/m²)"}],["windSpeed",{property:"windSpeed",name:"Windsnelheid",title:"Windsnelheid (km/u)"}],["humidity",{property:"humidity",name:"Luchtvochtigheid",title:"Luchtvochtigheid (%)"}]]),this.margin={top:10,right:10,bottom:40,left:10},this.width=700,this.height=400,this.selector=e,this.selectedProperty=n}return Object(l["a"])(t,[{key:"fetchData",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=fetch("https://raw.githubusercontent.com/bmesuere/belgium-topojson/master/belgium.json").then((function(t){return t.json()})),n=fetch("https://mooncake.ugent.be/api/stations").then((function(t){return t.json()})),r=fetch("https://mooncake.ugent.be/api/measurements").then((function(t){return t.json()})),t.next=5,e;case 5:return this.belgium=t.sent,t.next=8,n;case 8:return this.stations=t.sent,t.next=11,r;case 11:this.measurements=t.sent,this.measurementsMap=new Map(this.measurements.map((function(t){return[t.id,t]}))),this.belgium.objects.municipalities.geometries=this.belgium.objects.municipalities.geometries.filter((function(t){return"03000"!==t.properties.reg_nis}));case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"init",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,n,r,i,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchData();case 2:if(this.measurements){t.next=4;break}return t.abrupt("return");case 4:if(this.belgium){t.next=6;break}return t.abrupt("return");case 6:if(this.stations){t.next=8;break}return t.abrupt("return");case 8:e=p["o"](p["i"]).domain(p["c"](this.measurements,(function(t){return t[a.selectedProperty]}))),n=p["e"]().fitExtent([[this.margin.left,this.margin.top],[this.width-this.margin.right,this.height-this.margin.bottom]],d["a"](this.belgium,this.belgium.objects.municipalities)),r=p["f"]().projection(n),i=p["p"](this.selector).append("svg").attr("viewBox","0, 0, ".concat(this.width,", ").concat(this.height)).style("width",this.width),i.append("g").selectAll(".muni").data(d["a"](this.belgium,this.belgium.objects.municipalities).features).join("path").attr("class","muni").attr("fill","#eeeeee").attr("stroke","white").attr("stroke-linejoin","round").attr("d",r).append("title").text((function(t){var e;return null===t||void 0===t||null===(e=t.properties)||void 0===e?void 0:e.name_nl})),i.append("g").selectAll(".station").data(this.stations).join("circle").attr("class","station").attr("r",(function(t){var e;return"Ok"===(null===(e=a.measurementsMap.get(t.id))||void 0===e?void 0:e.status)?4:1})).attr("fill-opacity",(function(t){var e;return"Ok"===(null===(e=a.measurementsMap.get(t.id))||void 0===e?void 0:e.status)?.7:1})).attr("fill",(function(t){var n=a.measurementsMap.get(t.id);return"Ok"===(null===n||void 0===n?void 0:n.status)?e(n[a.selectedProperty]):"black"})).attr("cx",(function(t){return n([t.coordinates.longitude,t.coordinates.latitude])[0]})).attr("cy",(function(t){return n([t.coordinates.longitude,t.coordinates.latitude])[1]})).append("title").text((function(t){return"".concat(t.given_name," - ").concat(t.city)})),i.append("g").attr("transform","translate(".concat(this.margin.left,", ").concat(this.height-this.margin.top-40,")")).append((function(){return h({color:e,title:a.properties.get(a.selectedProperty).title,width:200,tickSize:-10,ticks:4})}));case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),g=r["a"].extend({name:"StationsMap",props:{mapId:{type:String,default:"stationsMap"}},data:function(){return{}},mounted:function(){var t=new m("#".concat(this.mapId));t.init()}}),v=g,b=n("2877"),y=Object(b["a"])(v,o,s,!1,null,null,null),w=y.exports,k=r["a"].extend({name:"App",components:{StationsMap:w},data:function(){return{}}}),x=k,j=n("6544"),O=n.n(j),M=n("7496"),S=n("40dc"),_=n("8336"),R=n("62ad"),V=n("a523"),A=n("a75b"),P=n("132d"),C=n("0fd9"),T=n("2fa4"),E=n("2a7f"),L=Object(b["a"])(x,i,a,!1,null,null,null),N=L.exports;O()(L,{VApp:M["a"],VAppBar:S["a"],VBtn:_["a"],VCol:R["a"],VContainer:V["a"],VContent:A["a"],VIcon:P["a"],VRow:C["a"],VSpacer:T["a"],VToolbarTitle:E["a"]});var B=n("9483");Object(B["a"])("".concat("/vlinder/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var D=n("f309");r["a"].use(D["a"]);var I=new D["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:I,render:function(t){return t(N)}}).$mount("#app")}});
//# sourceMappingURL=app.7f073ede.js.map