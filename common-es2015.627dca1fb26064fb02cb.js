(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Hvvo:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var a=o("R0Ic");const n=Object(a.o)("routerTransition",[Object(a.n)(":increment",[Object(a.i)(":enter, :leave",Object(a.m)({overflow:"hidden"}),{optional:!0}),Object(a.g)([Object(a.i)(":enter",[Object(a.m)({transform:"translateX(100%)"}),Object(a.e)("0.5s ease-in-out",Object(a.m)({transform:"translateX(0%)"}))],{optional:!0}),Object(a.i)(":leave",[Object(a.m)({transform:"translateX(0%)"}),Object(a.e)("0.5s ease-in-out",Object(a.m)({transform:"translateX(-100%)"}))],{optional:!0})])]),Object(a.n)(":decrement",[Object(a.i)(":enter, :leave",Object(a.m)({overflow:"hidden"}),{optional:!0}),Object(a.g)([Object(a.i)(":enter",[Object(a.m)({transform:"translateX(-100%)"}),Object(a.e)("0.5s ease-in-out",Object(a.m)({transform:"translateX(0%)"}))],{optional:!0}),Object(a.i)(":leave",[Object(a.m)({transform:"translateX(0%)"}),Object(a.e)("0.5s ease-in-out",Object(a.m)({left:0,transform:"translateX(100%)"}))],{optional:!0})])])])},NZ8W:function(t,e,o){"use strict";o.d(e,"a",function(){return c}),o.d(e,"b",function(){return s});var a=o("Y8Bm"),n=o("NIO5"),r=o("fXoL"),i=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=(()=>{class t{transform(t,e=!1,o=!0){return s(t,e,o,this.language)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Qb({name:"toNumber",type:t,pure:!0}),function(t,e,o,a){var n,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,a);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(i=(r<3?n(i):r>3?n(e,o,i):n(e,o))||i);r>3&&i&&Object.defineProperty(e,o,i)}([Object(a.b)(n.b.GetLanguage),i("design:type",String)],t.prototype,"language",void 0),t})();function s(t,e=!1,o=!0,a="en"){if(isNaN(t))return"-";let n;return 0==(t=Math.round(t))?"0":(n=t>0?e?"+ "+parseInt(Math.abs(t).toFixed(0),10).toLocaleString(a):t<0?"- "+parseInt(Math.abs(t).toFixed(0),10).toLocaleString(a):parseInt(Math.abs(t).toFixed(0),10).toLocaleString(a):e||t<0?"- "+parseInt(Math.abs(t).toFixed(0),10).toLocaleString(a):parseInt(Math.abs(t).toFixed(0),10).toLocaleString(a),o?n:n.replace(/[,.]/g,""))}},buvp:function(t,e,o){"use strict";o.d(e,"a",function(){return u});var a=o("EnSQ"),n=o("fXoL"),r=o("Qu3c"),i=o("ofXK"),c=o("eANF"),s=o("NZ8W");const l=function(t){return{negative:t}};let u=(()=>{class t{constructor(t){this.data=t,this.clockwise_actual=!1,this.clockwise_previous=!1,this.actualNegative=!1,this.previousNegative=!1,this.actual=0,this.previous=0}set setActual(t){this.actual=isNaN(t)?0:Math.abs(t),this.clockwise_actual=t>=0}set setPrevious(t){this.previous=isNaN(t)?0:Math.abs(t),this.clockwise_previous=t>=0}}return t.\u0275fac=function(e){return new(e||t)(n.Rb(a.a))},t.\u0275cmp=n.Lb({type:t,selectors:[["dip-circular-meters"]],inputs:{actualValue:"actualValue",previousValue:"previousValue",setActual:["actual","setActual"],setPrevious:["previous","setPrevious"]},decls:12,vars:32,consts:[[1,"meter"],["matTooltipPosition","above","matTooltipClass","actual",1,"container",3,"matTooltip"],[1,"percent","cyan",3,"ngClass"],["background","rgba(0, 172, 193, .2)",3,"clockwise","duration","animation","animationDelay","max","radius","stroke","current","color"],["matTooltipPosition","above","matTooltipClass","previous",1,"container",3,"matTooltip"],[1,"percent","orange",3,"ngClass"],["background","rgba(243, 18, 40, .2)",3,"clockwise","duration","animation","animationDelay","max","radius","stroke","current","color"]],template:function(t,e){1&t&&(n.Xb(0,"div",0),n.Xb(1,"div",1),n.jc(2,"toNumber"),n.Xb(3,"div",2),n.Mc(4),n.Wb(),n.Sb(5,"round-progress",3),n.Wb(),n.Wb(),n.Xb(6,"div",0),n.Xb(7,"div",4),n.jc(8,"toNumber"),n.Xb(9,"div",5),n.Mc(10),n.Wb(),n.Sb(11,"round-progress",6),n.Wb(),n.Wb()),2&t&&(n.Fb(1),n.pc("matTooltip",n.kc(2,24,e.actualValue)),n.Fb(2),n.pc("ngClass",n.tc(28,l,!e.clockwise_actual)),n.Fb(1),n.Oc("",e.actual,"%"),n.Fb(1),n.pc("clockwise",e.clockwise_actual)("duration",1e3)("animation","easeInOutCubic")("animationDelay",200)("max",100)("radius",60)("stroke",13)("current",e.actual)("color",e.data.lightTheme?"#17687F":"#00acc1"),n.Fb(2),n.pc("matTooltip",n.kc(8,26,e.previousValue)),n.Fb(2),n.pc("ngClass",n.tc(30,l,!e.clockwise_previous)),n.Fb(1),n.Oc("",e.previous,"%"),n.Fb(1),n.pc("clockwise",e.clockwise_previous)("duration",1e3)("animation","easeInOutCubic")("animationDelay",200)("max",100)("radius",60)("stroke",13)("current",e.previous)("color","#f2142c"))},directives:[r.a,i.k,c.a],pipes:[s.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 100%;height:170px;position:relative;background:linear-gradient(180deg,hsla(0,0%,100%,0),rgba(69,52,66,.5));border-bottom:2px solid rgba(0,0,0,.05)}body[theme=new-dark]   [_nghost-%COMP%]{background:#021624}[_nghost-%COMP%]   .meter[_ngcontent-%COMP%]{flex:1 50%;height:100%}[_nghost-%COMP%]   .meter[_ngcontent-%COMP%]:nth-child(2){border-left:2px solid rgba(0,0,0,.35)}[_nghost-%COMP%]   .meter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:120px;height:120px;margin:20px auto 0;position:relative}[_nghost-%COMP%]   .meter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]{position:absolute;height:30px;width:100%;margin:auto;text-align:center;top:0;bottom:0;font-size:27px}  .mat-tooltip.actual{border-color:#00acc1}  .mat-tooltip.previous{border-color:#f2142c}body[theme=light]   [_nghost-%COMP%]{border-bottom-color:#fff;background:linear-gradient(180deg,#fff,#e6e6e6)}body[theme=light]   [_nghost-%COMP%]   .cyan[_ngcontent-%COMP%]{color:#141651}body[theme=light]   [_nghost-%COMP%]   .orange[_ngcontent-%COMP%]{color:#f2142c}body[theme=light]   [_nghost-%COMP%]   .meter[_ngcontent-%COMP%]{border-left-color:transparent}body[theme=light][_ngcontent-%COMP%]     .mat-tooltip.actual{border-color:#141651}body[theme=light][_ngcontent-%COMP%]     .mat-tooltip.previous{border-color:#f2142c}"],changeDetection:0}),t})()}}]);