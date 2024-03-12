"use strict";(self.webpackChunk_kne_components_components_document=self.webpackChunk_kne_components_components_document||[]).push([[1123],{41123:(t,e,o)=>{o.d(e,{diagram:()=>V});var s=o(46045),n=o(30772),c=o(45091),a=o(26330),i=o(22493);o(57469),o(73755),o(96213),o(33509),o(91516);const r="rect",d="rectWithTitle",l="statediagram",p="".concat(l,"-").concat("state"),g="transition",b="".concat(g," ").concat("note-edge"),h="".concat(l,"-").concat("note"),u="".concat(l,"-").concat("cluster"),y="".concat(l,"-").concat("cluster-alt"),f="parent",m="note",w="----",x="".concat(w).concat(m),v="".concat(w).concat(f),T="fill:none",k="fill: #333",S="text",D="normal";let A={},B=0;function _(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:w;const n=null!==o&&o.length>0?"".concat(s).concat(o):"";return"".concat("state","-").concat(t).concat(n,"-").concat(e)}const L=(t,e,o,n,c,i)=>{const l=o.id,g=void 0===(w=n[l])||null===w?"":w.classes?w.classes.join(" "):"";var w;if("root"!==l){let e=r;!0===o.start&&(e="start"),!1===o.start&&(e="end"),o.type!==s.D&&(e=o.type),A[l]||(A[l]={id:l,shape:e,description:a.e.sanitizeText(l,(0,a.c)()),classes:"".concat(g," ").concat(p)});const n=A[l];o.description&&(Array.isArray(n.description)?(n.shape=d,n.description.push(o.description)):n.description.length>0?(n.shape=d,n.description===l?n.description=[o.description]:n.description=[n.description,o.description]):(n.shape=r,n.description=o.description),n.description=a.e.sanitizeTextOrArray(n.description,(0,a.c)())),1===n.description.length&&n.shape===d&&(n.shape=r),!n.type&&o.doc&&(a.l.info("Setting cluster for ",l,E(o)),n.type="group",n.dir=E(o),n.shape=o.type===s.a?"divider":"roundedWithTitle",n.classes=n.classes+" "+u+" "+(i?y:""));const c={labelStyle:"",shape:n.shape,labelText:n.description,classes:n.classes,style:"",id:l,dir:n.dir,domId:_(l,B),type:n.type,padding:15,centerLabel:!0};if(o.note){const e={labelStyle:"",shape:"note",labelText:o.note.text,classes:h,style:"",id:l+x+"-"+B,domId:_(l,B,m),type:n.type,padding:15},s={labelStyle:"",shape:"noteGroup",labelText:o.note.text,classes:n.classes,style:"",id:l+v,domId:_(l,B,f),type:"group",padding:0};B++;const a=l+v;t.setNode(a,s),t.setNode(e.id,e),t.setNode(l,c),t.setParent(l,a),t.setParent(e.id,a);let i=l,r=e.id;"left of"===o.note.position&&(i=e.id,r=l),t.setEdge(i,r,{arrowhead:"none",arrowType:"",style:T,labelStyle:"",classes:b,arrowheadStyle:k,labelpos:"c",labelType:S,thickness:D})}else t.setNode(l,c)}e&&"root"!==e.id&&(a.l.trace("Setting node ",l," to be child of its parent ",e.id),t.setParent(l,e.id)),o.doc&&(a.l.trace("Adding nodes children "),C(t,o,o.doc,n,c,!i))},C=(t,e,o,n,c,i)=>{a.l.trace("items",o),o.forEach((o=>{switch(o.stmt){case s.b:case s.D:L(t,e,o,n,c,i);break;case s.S:{L(t,e,o.state1,n,c,i),L(t,e,o.state2,n,c,i);const s={id:"edge"+B,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:T,labelStyle:"",label:a.e.sanitizeText(o.description,(0,a.c)()),arrowheadStyle:k,labelpos:"c",labelType:S,thickness:D,classes:g};t.setEdge(o.state1.id,o.state2.id,s,B),B++}}}))},E=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.c;if(t.doc)for(let o=0;o<t.doc.length;o++){const s=t.doc[o];"dir"===s.stmt&&(e=s.value)}return e},R={setConf:function(t){const e=Object.keys(t);for(const o of e)t[o]},getClasses:function(t,e){return e.db.extract(e.db.getRootDocV2()),e.db.getClasses()},draw:async function(t,e,o,s){a.l.info("Drawing state diagram (v2)",e),A={},s.db.getDirection();const{securityLevel:d,state:p}=(0,a.c)(),g=p.nodeSpacing||50,b=p.rankSpacing||50;a.l.info(s.db.getRootDocV2()),s.db.extract(s.db.getRootDocV2()),a.l.info(s.db.getRootDocV2());const h=s.db.getStates(),u=new n.T({multigraph:!0,compound:!0}).setGraph({rankdir:E(s.db.getRootDocV2()),nodesep:g,ranksep:b,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let y;L(u,void 0,s.db.getRootDocV2(),h,s.db,!0),"sandbox"===d&&(y=(0,c.Ltv)("#i"+e));const f="sandbox"===d?(0,c.Ltv)(y.nodes()[0].contentDocument.body):(0,c.Ltv)("body"),m=f.select('[id="'.concat(e,'"]')),w=f.select("#"+e+" g");await(0,i.r)(w,u,["barb"],l,e);a.u.insertTitle(m,"statediagramTitleText",p.titleTopMargin,s.db.getDiagramTitle());const x=m.node().getBBox(),v=x.width+16,T=x.height+16;m.attr("class",l);const k=m.node().getBBox();(0,a.i)(m,T,v,p.useMaxWidth);const S="".concat(k.x-8," ").concat(k.y-8," ").concat(v," ").concat(T);a.l.debug("viewBox ".concat(S)),m.attr("viewBox",S);const D=document.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(const n of D){const t=n.getBBox(),e=document.createElementNS("http://www.w3.org/2000/svg",r);e.setAttribute("rx",0),e.setAttribute("ry",0),e.setAttribute("width",t.width),e.setAttribute("height",t.height),n.insertBefore(e,n.firstChild)}}},V={parser:s.p,db:s.d,renderer:R,styles:s.s,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,s.d.clear()}}}}]);
//# sourceMappingURL=1123.ab6a5fa6.chunk.js.map