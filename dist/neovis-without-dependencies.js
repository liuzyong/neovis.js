!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@babel/runtime-corejs3/core-js-stable/instance/slice"),require("@babel/runtime-corejs3/core-js-stable/array/from"),require("@babel/runtime-corejs3/core-js-stable/symbol"),require("@babel/runtime-corejs3/core-js/get-iterator-method"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"),require("@babel/runtime-corejs3/core-js-stable/instance/filter"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"),require("@babel/runtime-corejs3/core-js-stable/object/define-properties"),require("@babel/runtime-corejs3/core-js-stable/object/define-property"),require("@babel/runtime-corejs3/helpers/defineProperty"),require("@babel/runtime-corejs3/helpers/slicedToArray"),require("@babel/runtime-corejs3/helpers/typeof"),require("@babel/runtime-corejs3/helpers/asyncToGenerator"),require("@babel/runtime-corejs3/helpers/classCallCheck"),require("@babel/runtime-corejs3/helpers/createClass"),require("@babel/runtime-corejs3/helpers/classPrivateFieldSet"),require("@babel/runtime-corejs3/helpers/classPrivateFieldGet"),require("@babel/runtime-corejs3/core-js-stable/object/keys"),require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),require("@babel/runtime-corejs3/regenerator"),require("@babel/runtime-corejs3/core-js-stable/array/is-array"),require("@babel/runtime-corejs3/core-js-stable/instance/map"),require("@babel/runtime-corejs3/core-js-stable/promise"),require("@babel/runtime-corejs3/core-js-stable/set-timeout"),require("@babel/runtime-corejs3/core-js-stable/instance/concat"),require("@babel/runtime-corejs3/core-js-stable/instance/reduce"),require("@babel/runtime-corejs3/core-js-stable/object/entries"),require("@babel/runtime-corejs3/core-js-stable/weak-map"),require("@babel/runtime-corejs3/core-js-stable/weak-set"),require("core-js/modules/es.function.name.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("neo4j-driver"),require("neo4j-driver-core"),require("vis-network/standalone"),require("deepmerge")):"function"==typeof define&&define.amd?define(["@babel/runtime-corejs3/core-js-stable/instance/slice","@babel/runtime-corejs3/core-js-stable/array/from","@babel/runtime-corejs3/core-js-stable/symbol","@babel/runtime-corejs3/core-js/get-iterator-method","@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols","@babel/runtime-corejs3/core-js-stable/instance/filter","@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor","@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors","@babel/runtime-corejs3/core-js-stable/object/define-properties","@babel/runtime-corejs3/core-js-stable/object/define-property","@babel/runtime-corejs3/helpers/defineProperty","@babel/runtime-corejs3/helpers/slicedToArray","@babel/runtime-corejs3/helpers/typeof","@babel/runtime-corejs3/helpers/asyncToGenerator","@babel/runtime-corejs3/helpers/classCallCheck","@babel/runtime-corejs3/helpers/createClass","@babel/runtime-corejs3/helpers/classPrivateFieldSet","@babel/runtime-corejs3/helpers/classPrivateFieldGet","@babel/runtime-corejs3/core-js-stable/object/keys","@babel/runtime-corejs3/core-js-stable/instance/for-each","@babel/runtime-corejs3/regenerator","@babel/runtime-corejs3/core-js-stable/array/is-array","@babel/runtime-corejs3/core-js-stable/instance/map","@babel/runtime-corejs3/core-js-stable/promise","@babel/runtime-corejs3/core-js-stable/set-timeout","@babel/runtime-corejs3/core-js-stable/instance/concat","@babel/runtime-corejs3/core-js-stable/instance/reduce","@babel/runtime-corejs3/core-js-stable/object/entries","@babel/runtime-corejs3/core-js-stable/weak-map","@babel/runtime-corejs3/core-js-stable/weak-set","core-js/modules/es.function.name.js","core-js/modules/es.array.iterator.js","core-js/modules/es.object.to-string.js","core-js/modules/es.promise.js","core-js/modules/es.string.iterator.js","core-js/modules/web.dom-collections.iterator.js","neo4j-driver","neo4j-driver-core","vis-network/standalone","deepmerge"],r):"object"==typeof exports?exports.NeoVis=r(require("@babel/runtime-corejs3/core-js-stable/instance/slice"),require("@babel/runtime-corejs3/core-js-stable/array/from"),require("@babel/runtime-corejs3/core-js-stable/symbol"),require("@babel/runtime-corejs3/core-js/get-iterator-method"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"),require("@babel/runtime-corejs3/core-js-stable/instance/filter"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"),require("@babel/runtime-corejs3/core-js-stable/object/define-properties"),require("@babel/runtime-corejs3/core-js-stable/object/define-property"),require("@babel/runtime-corejs3/helpers/defineProperty"),require("@babel/runtime-corejs3/helpers/slicedToArray"),require("@babel/runtime-corejs3/helpers/typeof"),require("@babel/runtime-corejs3/helpers/asyncToGenerator"),require("@babel/runtime-corejs3/helpers/classCallCheck"),require("@babel/runtime-corejs3/helpers/createClass"),require("@babel/runtime-corejs3/helpers/classPrivateFieldSet"),require("@babel/runtime-corejs3/helpers/classPrivateFieldGet"),require("@babel/runtime-corejs3/core-js-stable/object/keys"),require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),require("@babel/runtime-corejs3/regenerator"),require("@babel/runtime-corejs3/core-js-stable/array/is-array"),require("@babel/runtime-corejs3/core-js-stable/instance/map"),require("@babel/runtime-corejs3/core-js-stable/promise"),require("@babel/runtime-corejs3/core-js-stable/set-timeout"),require("@babel/runtime-corejs3/core-js-stable/instance/concat"),require("@babel/runtime-corejs3/core-js-stable/instance/reduce"),require("@babel/runtime-corejs3/core-js-stable/object/entries"),require("@babel/runtime-corejs3/core-js-stable/weak-map"),require("@babel/runtime-corejs3/core-js-stable/weak-set"),require("core-js/modules/es.function.name.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("neo4j-driver"),require("neo4j-driver-core"),require("vis-network/standalone"),require("deepmerge")):e.NeoVis=r(e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0])}(self,(function(e,r,t,n,o,i,s,a,l,c,u,b,d,p,v,f,h,j,m,y,g,w,x,k,q,E,C,_,I,N,A,T,S,O,F,P,D,M,R,L){return(()=>{"use strict";var U={145:e=>{e.exports=r},852:e=>{e.exports=w},848:e=>{e.exports=E},370:e=>{e.exports=i},349:e=>{e.exports=y},820:e=>{e.exports=x},83:e=>{e.exports=C},740:r=>{r.exports=e},593:e=>{e.exports=l},551:e=>{e.exports=c},209:e=>{e.exports=_},249:e=>{e.exports=s},660:e=>{e.exports=a},266:e=>{e.exports=o},995:e=>{e.exports=m},723:e=>{e.exports=k},519:e=>{e.exports=q},581:e=>{e.exports=t},317:e=>{e.exports=I},483:e=>{e.exports=N},260:e=>{e.exports=n},404:e=>{e.exports=p},621:e=>{e.exports=v},779:e=>{e.exports=j},642:e=>{e.exports=h},537:e=>{e.exports=f},783:e=>{e.exports=u},105:e=>{e.exports=b},543:e=>{e.exports=d},381:e=>{e.exports=g},570:e=>{e.exports=T},128:e=>{e.exports=A},76:e=>{e.exports=S},503:e=>{e.exports=O},207:e=>{e.exports=F},416:e=>{e.exports=P},613:e=>{e.exports=L},949:e=>{e.exports=D},55:e=>{e.exports=M},365:e=>{e.exports=R}},V={};function G(e){var r=V[e];if(void 0!==r)return r.exports;var t=V[e]={exports:{}};return U[e](t,t.exports,G),t.exports}G.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return G.d(r,{a:r}),r},G.d=(e,r)=>{for(var t in r)G.o(r,t)&&!G.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},G.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),G.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var z={};return(()=>{G.r(z),G.d(z,{EventController:()=>fe,NEOVIS_ADVANCED_CONFIG:()=>ye,NEOVIS_DEFAULT_CONFIG:()=>me,NeoVis:()=>Je,NeoVisEvents:()=>e,default:()=>hr,migrateFromOldConfig:()=>fr,objectToTitleHtml:()=>pr,objectToTitleString:()=>vr});var e,r=G(740),t=G.n(r),n=G(145),o=G.n(n),i=G(581),s=G.n(i),a=G(260),l=G.n(a),c=G(266),u=G.n(c),b=G(370),d=G.n(b),p=G(249),v=G.n(p),f=G(660),h=G.n(f),j=G(593),m=G.n(j),y=G(551),g=G.n(y),w=G(783),x=G.n(w),k=G(105),q=G.n(k),E=G(543),C=G.n(E),_=G(404),I=G.n(_),N=G(621),A=G.n(N),T=G(537),S=G.n(T),O=G(642),F=G.n(O),P=G(779),D=G.n(P),M=G(381),R=G.n(M),L=G(820),U=G.n(L),V=G(852),H=G.n(V),W=G(723),B=G.n(W),J=G(519),Q=G.n(J),Y=G(848),$=G.n(Y),K=G(995),X=G.n(K),Z=G(83),ee=G.n(Z),re=G(209),te=G.n(re),ne=G(317),oe=G.n(ne),ie=G(483),se=G.n(ie),ae=G(349),le=G.n(ae),ce=(G(128),G(570),G(76),G(503),G(207),G(416),G(949)),ue=G.n(ce),be=G(55),de=G(365),pe={neo4j:{initialQuery:"MATCH (n) WHERE exists(n.pagerank)\n                        WITH (n), RAND() AS random\n                        ORDER BY random LIMIT 3000\n                        OPTIONAL MATCH (n)-[r]-(m)\n                        //WITH n,r,m WHERE exists(n.pagerank) AND exists(m.pagerank) AND exists(m.community)\n                        RETURN n, r, m;",neo4jUri:"bolt://localhost:7687",neo4jUser:"neo4j",neo4jPassword:"neo4j",driverConfig:{encrypted:"ENCRYPTION_OFF",trust:"TRUST_ALL_CERTIFICATES",maxConnectionPoolSize:100,connectionAcquisitionTimeout:1e4,disableLosslessIntegers:!0}},visJs:{nodes:{font:{size:26,strokeWidth:7},scaling:{}},edges:{arrows:{to:{enabled:!1}},length:200},layout:{improvedLayout:!1,hierarchical:{enabled:!1,sortMethod:"hubsize"}},physics:{adaptiveTimestep:!0,stabilization:{iterations:200,fit:!0}}}};function ve(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}!function(e){e.CompletionEvent="completed",e.ClickNodeEvent="clickNode",e.ClickEdgeEvent="clickEdge",e.ErrorEvent="error"}(e||(e={}));var fe=function(){function r(){var t;A()(this,r),x()(this,"_handlers",void 0),this._handlers=(t={},x()(t,e.CompletionEvent,[]),x()(t,e.ErrorEvent,[]),x()(t,e.ClickNodeEvent,[]),x()(t,e.ClickEdgeEvent,[]),t)}return S()(r,[{key:"register",value:function(e,r){if(void 0===this._handlers[e])throw new Error("Unknown event: "+e);this._handlers[e].push(r)}},{key:"generateEvent",value:function(e,r){if(void 0===this._handlers[e])throw new Error("Unknown event: "+e);var n,i=function(e,r){var n=void 0!==s()&&l()(e)||e["@@iterator"];if(!n){if(H()(e)||(n=function(e,r){var n;if(e){if("string"==typeof e)return ve(e,r);var i=t()(n=Object.prototype.toString.call(e)).call(n,8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?o()(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?ve(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,b=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){b=!0,c=e},f:function(){try{u||null==n.return||n.return()}finally{if(b)throw c}}}}(this._handlers[e]);try{for(i.s();!(n=i.n()).done;)(0,n.value)(r)}catch(e){i.e(e)}finally{i.f()}}}]),r}(),he=G(613),je=G.n(he),me=s()(),ye=s()();function ge(e,r){var t=X()(e);if(u()){var n=u()(e);r&&(n=d()(n).call(n,(function(r){return v()(e,r).enumerable}))),t.push.apply(t,n)}return t}function we(e){for(var r=1;r<arguments.length;r++){var t,n=null!=arguments[r]?arguments[r]:{};if(r%2)le()(t=ge(Object(n),!0)).call(t,(function(r){x()(e,r,n[r])}));else if(h())m()(e,h()(n));else{var o;le()(o=ge(Object(n))).call(o,(function(r){g()(e,r,v()(n,r))}))}}return e}function xe(e,r){var n=void 0!==s()&&l()(e)||e["@@iterator"];if(!n){if(H()(e)||(n=function(e,r){var n;if(e){if("string"==typeof e)return ke(e,r);var i=t()(n=Object.prototype.toString.call(e)).call(n,8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?o()(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?ke(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,b=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){b=!0,c=e},f:function(){try{u||null==n.return||n.return()}finally{if(b)throw c}}}}function ke(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function qe(e,r){Ce(e,r),r.add(e)}function Ee(e,r,t){Ce(e,r),r.set(e,t)}function Ce(e,r){if(r.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _e(e,r,t){if(!r.has(e))throw new TypeError("attempted to get private field on non-instance");return t}var Ie=new(oe()),Ne=new(oe()),Ae=new(oe()),Te=new(oe()),Se=new(oe()),Oe=new(oe()),Fe=new(oe()),Pe=new(oe()),De=new(se()),Me=new(se()),Re=new(se()),Le=new(se()),Ue=new(se()),Ve=new(se()),Ge=new(se()),ze=new(se()),He=new(se()),We=new(se()),Be=new(se()),Je=function(){function r(e){A()(this,r),qe(this,Be),qe(this,We),qe(this,He),qe(this,ze),qe(this,Ge),qe(this,Ve),qe(this,Ue),qe(this,Le),qe(this,Re),qe(this,Me),qe(this,De),Ee(this,Ie,{writable:!0,value:{nodes:new de.DataSet,edges:new de.DataSet}}),Ee(this,Ne,{writable:!0,value:null}),Ee(this,Ae,{writable:!0,value:new fe}),Ee(this,Te,{writable:!0,value:void 0}),Ee(this,Se,{writable:!0,value:void 0}),Ee(this,Oe,{writable:!0,value:void 0}),Ee(this,Fe,{writable:!0,value:void 0}),Ee(this,Pe,{writable:!0,value:void 0}),_e(this,Me,Ye).call(this,e),_e(this,De,Qe).call(this,e),_e(this,De,Qe).call(this,pe)}return S()(r,[{key:"nodes",get:function(){return D()(this,Ie).nodes}},{key:"edges",get:function(){return D()(this,Ie).edges}},{key:"_config",get:function(){return D()(this,Te)}},{key:"network",get:function(){return D()(this,Ne)}},{key:"render",value:function(r){var t,n=this,o=0,i=r||D()(this,Fe),s=D()(this,Se).session(D()(this,Oe)?{database:D()(this,Oe)}:void 0),a=[];s.run(i,{limit:30}).subscribe({onNext:function(e){o++,_e(n,De,Qe).call(n,"CLASS NAME"),_e(n,De,Qe).call(n,null==e?void 0:e.constructor.name),_e(n,De,Qe).call(n,e);var r=U()(e).call(e,function(){var e=I()(R().mark((function e(r){var t,o,i,s,a,l,c,u,b,d,p,v;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_e(n,De,Qe).call(n,"Constructor:"),_e(n,De,Qe).call(n,null==r?void 0:r.constructor.name),!(0,be.isNode)(r)){e.next=9;break}return e.next=5,_e(n,We,ar).call(n,r);case 5:t=e.sent;try{D()(n,Ie).nodes.update(t)}catch(e){_e(n,De,Qe).call(n,e,"error")}e.next=89;break;case 9:if(!(0,be.isRelationship)(r)){e.next=16;break}return e.next=12,_e(n,Be,cr).call(n,r);case 12:o=e.sent,D()(n,Ie).edges.update(o),e.next=89;break;case 16:if(!(0,be.isPath)(r)){e.next=59;break}return _e(n,De,Qe).call(n,"PATH"),_e(n,De,Qe).call(n,r),e.next=21,_e(n,We,ar).call(n,r.start);case 21:return i=e.sent,e.next=24,_e(n,We,ar).call(n,r.end);case 24:s=e.sent,D()(n,Ie).nodes.update(i),D()(n,Ie).nodes.update(s),a=xe(r.segments),e.prev=28,a.s();case 30:if((l=a.n()).done){e.next=49;break}return c=l.value,e.t0=D()(n,Ie).nodes,e.next=35,_e(n,We,ar).call(n,c.start);case 35:return e.t1=e.sent,e.t0.update.call(e.t0,e.t1),e.t2=D()(n,Ie).nodes,e.next=40,_e(n,We,ar).call(n,c.end);case 40:return e.t3=e.sent,e.t2.update.call(e.t2,e.t3),e.t4=D()(n,Ie).edges,e.next=45,_e(n,Be,cr).call(n,c.relationship);case 45:e.t5=e.sent,e.t4.update.call(e.t4,e.t5);case 47:e.next=30;break;case 49:e.next=54;break;case 51:e.prev=51,e.t6=e.catch(28),a.e(e.t6);case 54:return e.prev=54,a.f(),e.finish(54);case 57:e.next=89;break;case 59:if(!H()(r)){e.next=89;break}u=xe(r),e.prev=61,u.s();case 63:if((b=u.n()).done){e.next=81;break}if(d=b.value,_e(n,De,Qe).call(n,"Array element constructor:"),_e(n,De,Qe).call(n,null==d?void 0:d.constructor.name),!(0,be.isNode)(d)){e.next=74;break}return e.next=70,_e(n,We,ar).call(n,d);case 70:p=e.sent,D()(n,Ie).nodes.update(p),e.next=79;break;case 74:if(!(0,be.isRelationship)(d)){e.next=79;break}return e.next=77,_e(n,Be,cr).call(n,d);case 77:v=e.sent,D()(n,Ie).edges.update(v);case 79:e.next=63;break;case 81:e.next=86;break;case 83:e.prev=83,e.t7=e.catch(61),u.e(e.t7);case 86:return e.prev=86,u.f(),e.finish(86);case 89:case"end":return e.stop()}}),e,null,[[28,51,54,57],[61,83,86,89]])})));return function(r){return e.apply(this,arguments)}}());a.push(B().all(r))},onCompleted:(t=I()(R().mark((function r(){var t,i,l,c;return R().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,B().all(a);case 2:return r.next=4,s.close();case 4:D()(n,Ne)||(i=je()(pe.visJs,null!==(t=D()(n,Te).visConfig)&&void 0!==t?t:{}),l=D()(n,Pe),_e(n,De,Qe).call(n,D()(n,Ie).nodes),_e(n,De,Qe).call(n,D()(n,Ie).edges),F()(n,Ne,new de.Network(l,D()(n,Ie),i))),_e(n,De,Qe).call(n,"completed"),Q()((function(){D()(n,Ne).stopSimulation()}),1e4),D()(n,Ae).generateEvent(e.CompletionEvent,{recordCount:o}),c=n,D()(n,Ne).on("click",(function(r){if(r.nodes.length>0){var t=this.getNodeAt(r.pointer.DOM);D()(c,Ae).generateEvent(e.ClickNodeEvent,{nodeId:t,node:D()(c,Ie).nodes.get(t)})}else if(r.edges.length>0){var n=this.getEdgeAt(r.pointer.DOM);D()(c,Ae).generateEvent(e.ClickEdgeEvent,{edgeId:n,edge:D()(c,Ie).edges.get(n)})}}));case 10:case"end":return r.stop()}}),r)}))),function(){return t.apply(this,arguments)}),onError:function(r){_e(n,De,Qe).call(n,r,"error"),D()(n,Ae).generateEvent(e.ErrorEvent,{error:r})}})}},{key:"clearNetwork",value:function(){D()(this,Ie).nodes.clear(),D()(this,Ie).edges.clear()}},{key:"registerOnEvent",value:function(e,r){D()(this,Ae).register(e,r)}},{key:"reinit",value:function(e){_e(this,Me,Ye).call(this,e),this.render()}},{key:"reload",value:function(){this.clearNetwork(),this.render()}},{key:"stabilize",value:function(){D()(this,Ne).stopSimulation(),_e(this,De,Qe).call(this,"Calling stopSimulation")}},{key:"renderWithCypher",value:function(e){this.clearNetwork(),F()(this,Fe,e),this.render()}},{key:"updateWithCypher",value:function(e){this.render(e)}}]),r}();function Qe(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log";("log"!==r||D()(this,Te).console_debug)&&console[r](e)}function Ye(e){var r,t,n,o,i,s,a,l,c,u,b;if(e.nonFlat&&e.defaultLabelConfig){if((u=e.defaultLabelConfig)[ye])throw new Error("non flat config can't use NEOVIS_ADVANCED_CONFIG, read the doc to see how the config should look");if((b=e.defaultRelationshipsConfig)[ye])throw new Error("non flat config can't use NEOVIS_ADVANCED_CONFIG, read the doc to see how the config should look")}else{var d,p;u=null===(d=e.labels)||void 0===d?void 0:d[me],b=null===(p=e.relationships)||void 0===p?void 0:p[me]}if(u)for(var v=0,f=X()(e.labels);v<f.length;v++){var h,j,m,y,g,w=f[v];e=e.nonFlat?we(we({},e),{},{labels:we(we({},e.labels),{},x()({},w,je()(u,null===(h=e.labels)||void 0===h?void 0:h[w])))}):we(we({},e),{},{labels:we(we({},e.labels),{},x()({},w,we(we({},je()(u,null===(j=e.labels)||void 0===j?void 0:j[w])),{},x()({},ye,je()(null!==(m=u[ye])&&void 0!==m?m:{},null!==(y=(null===(g=e.labels)||void 0===g?void 0:g[w])[ye])&&void 0!==y?y:{})))))})}if(b)for(var k=0,q=X()(e.relationships);k<q.length;k++){var E,C,_,I,N,A=q[k];e=e.nonFlat?we(we({},e),{},{relationships:we(we({},e.relationships),{},x()({},A,je()(b,null===(E=e.relationships)||void 0===E?void 0:E[A])))}):we(we({},e),{},{relationships:we(we({},e.labels),{},x()({},A,we(we({},je()(b,null===(C=e.relationships)||void 0===C?void 0:C[A])),{},x()({},ye,je()(null!==(_=b[ye])&&void 0!==_?_:{},null!==(I=(null===(N=e.relationships)||void 0===N?void 0:N[A])[ye])&&void 0!==I?I:{})))))})}F()(this,Te,e),F()(this,Se,e.neo4j instanceof ue().driver?e.neo4j:ue().driver(null!==(r=null===(t=e.neo4j)||void 0===t?void 0:t.server_url)&&void 0!==r?r:pe.neo4j.neo4jUri,ue().auth.basic(null!==(n=null===(o=e.neo4j)||void 0===o?void 0:o.server_user)&&void 0!==n?n:pe.neo4j.neo4jUser,null!==(i=null===(s=e.neo4j)||void 0===s?void 0:s.server_password)&&void 0!==i?i:pe.neo4j.neo4jPassword),je()(pe.neo4j.driverConfig,null!==(a=null===(l=e.neo4j)||void 0===l?void 0:l.driverConfig)&&void 0!==a?a:{}))),F()(this,Oe,e.server_database),F()(this,Fe,null!==(c=e.initial_cypher)&&void 0!==c?c:pe.neo4j.initialQuery),F()(this,Pe,document.getElementById(e.container_id))}function $e(e,r){return Ke.apply(this,arguments)}function Ke(){return(Ke=I()(R().mark((function e(r,t){var n,o,i,s,a,l;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=D()(this,Se).session(D()(this,Oe)&&{database:D()(this,Oe)}),o=[],e.prev=2,e.next=5,n.readTransaction((function(e){return e.run(r,{id:t})}));case 5:i=e.sent,s=xe(i.records);try{for(s.s();!(a=s.n()).done;)l=a.value,le()(l).call(l,(function(e){o.push(e)}))}catch(e){s.e(e)}finally{s.f()}case 8:return e.prev=8,e.next=11,n.close();case 11:return e.finish(8);case 12:if(0!==o.length){e.next=16;break}return e.abrupt("return",void 0);case 16:if(1!==o.length){e.next=18;break}return e.abrupt("return",o.pop());case 18:return e.abrupt("return",o);case 19:case"end":return e.stop()}}),e,this,[[2,,8,12]])})))).apply(this,arguments)}function Xe(e,r){if("function"==typeof e)return e(r);throw new Error("Function type property field must be a function")}function Ze(e,r){if(e&&"object"===C()(e)){var t,n=xe(X()(e));try{for(n.s();!(t=n.n()).done;){var o=t.value,i=e[o];i&&"object"===C()(i)?(r[o]||(r[o]={}),_e(this,Ue,Ze).call(this,i,r[o])):r[o]=i}}catch(e){n.e(e)}finally{n.f()}}}function er(e,r,t){if(e&&"object"===C()(e)){var n,o=xe(X()(e));try{for(o.s();!(n=o.n()).done;){var i=n.value,s=e[i];if("object"===C()(s))r[i]||(r[i]={}),_e(this,Ve,er).call(this,s,r[i],t);else{var a=e[i];r[i]=dr(a,t)}}}catch(e){o.e(e)}finally{o.f()}}}function rr(e,r,t){return tr.apply(this,arguments)}function tr(){return(tr=I()(R().mark((function e(r,t,n){var o,i,s,a;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r||"object"!==C()(r)){e.next=26;break}o=xe(X()(r)),e.prev=2,o.s();case 4:if((i=o.n()).done){e.next=18;break}if(s=i.value,!(a=r[s])||"object"!==C()(a)){e.next=13;break}return t[s]||(t[s]={}),e.next=11,_e(this,Ge,rr).call(this,a,t[s],n);case 11:e.next=16;break;case 13:return e.next=15,_e(this,Re,$e).call(this,a,n);case 15:t[s]=e.sent;case 16:e.next=4;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(2),o.e(e.t0);case 23:return e.prev=23,o.f(),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[2,20,23,26]])})))).apply(this,arguments)}function nr(e,r,t){return or.apply(this,arguments)}function or(){return(or=I()(R().mark((function e(r,t,n){var o,i,s,a;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r||"object"!==C()(r)){e.next=26;break}o=xe(X()(r)),e.prev=2,o.s();case 4:if((i=o.n()).done){e.next=18;break}if(s=i.value,!(a=r[s])||"object"!==C()(a)){e.next=13;break}return t[s]||(t[s]={}),e.next=11,_e(this,ze,nr).call(this,a,t[s],n);case 11:e.next=16;break;case 13:return e.next=15,_e(this,Le,Xe).call(this,a,n);case 15:t[s]=e.sent;case 16:e.next=4;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(2),o.e(e.t0);case 23:return e.prev=23,o.f(),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[2,20,23,26]])})))).apply(this,arguments)}function ir(e,r,t,n){return sr.apply(this,arguments)}function sr(){return(sr=I()(R().mark((function e(r,t,n,o){var i,s,a,l,c;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:if(!D()(this,Te).nonFlat){e.next=12;break}if(void 0===r[ye]){e.next=5;break}throw new Error("Advanced config and non flat config should not be together");case 5:i=(r=r).static,s=r.cypher,a=r.property,l=r.function,e.next=20;break;case 12:if(c=(r=r)[ye],a=r,void 0===c||"object"==C()(c)){e.next=17;break}throw new Error("Advanced config should be an object. See documentation for details.");case 17:s=null==c?void 0:c.cypher,i=null==c?void 0:c.static,l=null==c?void 0:c.function;case 20:return _e(this,Ve,er).call(this,a,t,n),_e(this,Ue,Ze).call(this,i,t),e.next=24,_e(this,Ge,rr).call(this,s,t,o);case 24:return e.next=26,_e(this,ze,nr).call(this,l,t,n);case 26:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function ar(e){return lr.apply(this,arguments)}function lr(){return(lr=I()(R().mark((function e(r){var t,n,o,i,s,a,l,c,u,b;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={},u=r.labels[0],b=null!==(t=null!==(n=null===(o=D()(this,Te))||void 0===o||null===(i=o.labels)||void 0===i?void 0:i[u])&&void 0!==n?n:null===(s=D()(this,Te))||void 0===s?void 0:s.defaultLabelConfig)&&void 0!==t?t:null===(a=D()(this,Te))||void 0===a||null===(l=a.labels)||void 0===l?void 0:l[me],c.id=(0,be.isInt)(r.identity)?r.identity.toInt():r.identity,c.raw=r,e.next=7,_e(this,He,ir).call(this,b,c,r,c.id);case 7:return e.abrupt("return",c);case 8:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function cr(e){return ur.apply(this,arguments)}function ur(){return(ur=I()(R().mark((function e(r){var t,n,o,i,s,a,l,c;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=null!==(t=null!==(n=null===(o=D()(this,Te))||void 0===o||null===(i=o.relationships)||void 0===i?void 0:i[r.type])&&void 0!==n?n:D()(this,Te).defaultRelationshipsConfig)&&void 0!==t?t:null===(s=D()(this,Te))||void 0===s||null===(a=s.relationships)||void 0===a?void 0:a[me],(c={}).id=(0,be.isInt)(r.identity)?r.identity.toInt():r.identity,c.from=(0,be.isInt)(r.start)?r.start.toInt():r.start,c.to=(0,be.isInt)(r.end)?r.end.toInt():r.end,c.raw=r,e.next=8,_e(this,He,ir).call(this,l,c,r,c.id);case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function br(e,r){var t;if(H()(r)&&r.length>1){var n,o="<strong>".concat(e,":</strong><br /><ul>"),i=xe(r);try{for(i.s();!(n=i.n()).done;){var s=n.value;o+="<li>".concat(s,"</li>")}}catch(e){i.e(e)}finally{i.f()}return o+"</ul>"}return $()(t="<strong>".concat(e,":</strong> ")).call(t,r,"<br>")}function dr(e,r){if("object"===C()(null==r?void 0:r.properties))return(0,be.isInt)(r.properties[e])?r.properties[e].toInt():r.properties[e];throw new Error("Neo4j object is not properly constructed")}function pr(e,r){var t="";r||(r=X()(e.properties));var n,o=xe(r);try{for(o.s();!(n=o.n()).done;){var i=n.value,s=dr(i,e);s&&(t+=br(i,s))}}catch(e){o.e(e)}finally{o.f()}var a=document.createElement("div");return a.innerHTML=t,a}function vr(e,r){var t="";r||(r=X()(e.properties));var n,o=xe(r);try{for(o.s();!(n=o.n()).done;){var i,s=n.value,a=dr(s,e);a&&(t+=$()(i="".concat(s,": ")).call(i,a,"\n"))}}catch(e){o.e(e)}finally{o.f()}return t}function fr(e){var r,t,n,o,i;return{container_id:e.container_id,initial_cypher:e.initial_cypher,console_debug:e.console_debug,server_database:e.server_database,neo4j:{server_url:e.server_url,server_user:e.server_url,server_password:e.server_password,driverConfig:e.encrypted||e.trust?{encrypted:e.encrypted,trust:e.trust}:void 0},visConfig:e.arrows||e.hierarchical?{edges:e.arrows?{arrows:{to:{enabled:e.arrows}}}:void 0,layout:e.hierarchical?{enabled:e.hierarchical,sortMethod:e.hierarchical_sort_method}:void 0}:void 0,labels:e.labels?ee()(r=$()(t=te()(e.labels)).call(t,null!==(n=e.labels)&&void 0!==n&&n[me]?[[me,e.labels[me]]]:[])).call(r,(function(e,r){var t=q()(r,2),n=t[0],o=t[1];return e[n]=x()({label:"function"!=typeof o.caption?o.caption:void 0,value:o.size,group:o.community},ye,{cypher:o.sizeCypher?{value:o.sizeCypher}:void 0,function:je()({title:function(e){return pr(e,o.title_properties)}},"function"==typeof o.caption?{label:o.caption}:{}),static:{font:o.font,shape:o.image?"image":"dot",image:o.image}}),e}),{}):void 0,relationships:e.relationships?ee()(o=$()(i=te()(e.relationships)).call(i,e.relationships[me]?[[me,e.relationships[me]]]:[])).call(o,(function(e,r){var t=q()(r,2),n=t[0],o=t[1];return e[n]=x()({value:o.thickness},ye,{function:{title:o.caption?pr:void 0}}),e}),{}):void 0}}const hr=Je})(),z})()}));
//# sourceMappingURL=neovis-without-dependencies.js.map