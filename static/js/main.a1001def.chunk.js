(this["webpackJsonpreact-d3-boilerplate"]=this["webpackJsonpreact-d3-boilerplate"]||[]).push([[0],{38:function(t,e,n){t.exports=n(46)},43:function(t,e,n){},44:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(12),o=n.n(r),c=(n(43),n(44),n(13)),s=n(7),l=n(4),u={select:l.a,selectAll:l.b,selection:l.c},h=function(){function t(){Object(c.a)(this,t),this.state={id:this.createId(),svgWidth:400,svgHeight:400,marginTop:5,marginBottom:5,marginRight:5,marginLeft:5,container:"body",defaultTextFill:"#2C3E50",defaultFont:"Helvetica",ctx:document.createElement("canvas").getContext("2d"),data:null},this.initializeEnterExitUpdatePattern()}return Object(s.a)(t,[{key:"getState",value:function(){return this.state}},{key:"setState",value:function(t){return Object.assign(this.state,t)}},{key:"createId",value:function(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}}]),Object(s.a)(t,[{key:"container",value:function(t){return this.setState({container:t}),this}},{key:"data",value:function(t){return this.setState({data:t}),this}},{key:"svgHeight",value:function(t){return this.setState({svgHeight:t}),this}},{key:"svgWidth",value:function(t){return this.setState({svgWidth:t}),this}},{key:"initializeEnterExitUpdatePattern",value:function(){u.selection.prototype.patternify=function(t){var e=t.selector,n=t.tag,a=t.data||[e],i=this.selectAll("."+e).data(a,(function(t,e){return"object"===typeof t&&t.id?t.id:e}));return i.exit().remove(),(i=i.enter().append(n).merge(i)).attr("class",e),i}}},{key:"render",value:function(){return this.setDynamicContainer(),this.calculateProperties(),this.drawSvgAndWrappers(),this.drawContent(),this.reRenderOnResize(),this}},{key:"drawContent",value:function(){var t=this.getState(),e=t.chart,n=t.data;console.log(n),e.patternify({tag:"text",selector:"example-text",data:[n]}).text((function(t){return t.name})).attr("x",10).attr("y",20)}},{key:"reRenderOnResize",value:function(){var t=this,e=this.getState(),n=e.id,a=e.d3Container,i=e.svgWidth;u.select(window).on("resize."+n,(function(){var e=a.node().getBoundingClientRect(),n=e.width>0?e.width:i;t.setState({svgWidth:n}),t.render()}))}},{key:"drawSvgAndWrappers",value:function(){var t=this.getState(),e=t.d3Container,n=t.svgWidth,a=t.svgHeight,i=t.defaultFont,r=t.calc,o=r.chartLeftMargin,c=r.chartTopMargin,s=e.patternify({tag:"svg",selector:"svg-chart-container"}).attr("width",n).attr("height",a).attr("font-family",i),l=s.patternify({tag:"g",selector:"inner-wrapper"}).attr("transform","translate("+o+","+c+")").patternify({tag:"g",selector:"chart"});this.setState({chart:l,svg:s})}},{key:"calculateProperties",value:function(){var t=this.getState(),e=t.marginTop,n=t.marginLeft,a=t.marginRight,i=t.marginBottom,r=t.svgWidth,o=t.svgHeight,c={id:this.createId(),chartTopMargin:e,chartLeftMargin:n,chartWidth:r-a-n,chartHeight:o-i-e};this.setState({calc:c})}},{key:"setDynamicContainer",value:function(){var t=this.getState(),e=t.container,n=t.svgWidth,a=u.select(e),i=a.node().getBoundingClientRect(),r=i.width>0?i.width:n;this.setState({d3Container:a,svgWidth:r})}}]),t}(),d=function(t,e){var n=Object(a.useRef)(null),r=null;return Object(a.useLayoutEffect)((function(){t.data&&n.current&&(r||(r=new h),r.container(n.current).data(t.data).svgHeight(window.innerHeight-20).render())}),[t.data,n.current]),i.a.createElement("div",null,i.a.createElement("div",{ref:n}))};var g=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,{data:{name:"test"}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.a1001def.chunk.js.map