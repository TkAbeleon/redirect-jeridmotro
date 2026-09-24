import{g as K,s as Q,a as Y,b as tt,q as et,p as at,_ as u,l as z,c as rt,F as nt,I as it,O as ot,e as st,z as lt,G as ct}from"./chat-BMBDgra3.js";import{p as pt}from"./chunk-4BX2VUAB-DdHDI7MO.js";import{p as ut}from"./wardley-L42UT6IY-B8MA55v-.js";import{d as P}from"./arc-BkdjPDO5.js";import{o as dt}from"./ordinal-DILIJJjt.js";import{b as S,t as R,n as gt}from"./string-BVPUhbow.js";import"./index-OrfFe9LU.js";import"./plus-q-faHFpa.js";import"./triangle-alert-C4WXKc-S.js";import"./loader-circle-C98vD80I.js";import"./send-BhvqT-qd.js";import"./check-DfpLAY_v.js";import"./init-Dmth1JHB.js";function ft(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function ht(t){return t}function mt(){var t=ht,a=ft,f=null,y=S(0),o=S(R),d=S(0);function s(e){var n,l=(e=gt(e)).length,g,h,v=0,c=new Array(l),i=new Array(l),x=+y.apply(this,arguments),w=Math.min(R,Math.max(-R,o.apply(this,arguments)-x)),m,D=Math.min(Math.abs(w)/l,d.apply(this,arguments)),$=D*(w<0?-1:1),p;for(n=0;n<l;++n)(p=i[c[n]=n]=+t(e[n],n,e))>0&&(v+=p);for(a!=null?c.sort(function(A,C){return a(i[A],i[C])}):f!=null&&c.sort(function(A,C){return f(e[A],e[C])}),n=0,h=v?(w-l*$)/v:0;n<l;++n,x=m)g=c[n],p=i[g],m=x+(p>0?p*h:0)+$,i[g]={data:e[g],index:n,value:p,startAngle:x,endAngle:m,padAngle:D};return i}return s.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),s):t},s.sortValues=function(e){return arguments.length?(a=e,f=null,s):a},s.sort=function(e){return arguments.length?(f=e,a=null,s):f},s.startAngle=function(e){return arguments.length?(y=typeof e=="function"?e:S(+e),s):y},s.endAngle=function(e){return arguments.length?(o=typeof e=="function"?e:S(+e),s):o},s.padAngle=function(e){return arguments.length?(d=typeof e=="function"?e:S(+e),s):d},s}var vt=ct.pie,F={sections:new Map,showData:!1},T=F.sections,W=F.showData,xt=structuredClone(vt),St=u(()=>structuredClone(xt),"getConfig"),yt=u(()=>{T=new Map,W=F.showData,lt()},"clear"),wt=u(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),z.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),At=u(()=>T,"getSections"),Ct=u(t=>{W=t},"setShowData"),Dt=u(()=>W,"getShowData"),_={getConfig:St,clear:yt,setDiagramTitle:at,getDiagramTitle:et,setAccTitle:tt,getAccTitle:Y,setAccDescription:Q,getAccDescription:K,addSection:wt,getSections:At,setShowData:Ct,getShowData:Dt},$t=u((t,a)=>{pt(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),Tt={parse:u(async t=>{const a=await ut("pie",t);z.debug(a),$t(a,_)},"parse")},bt=u(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),kt=bt,Et=u(t=>{const a=[...t.values()].reduce((o,d)=>o+d,0),f=[...t.entries()].map(([o,d])=>({label:o,value:d})).filter(o=>o.value/a*100>=1);return mt().value(o=>o.value).sort(null)(f)},"createPieArcs"),Mt=u((t,a,f,y)=>{z.debug(`rendering pie chart
`+t);const o=y.db,d=rt(),s=nt(o.getConfig(),d.pie),e=40,n=18,l=4,g=450,h=g,v=it(a),c=v.append("g");c.attr("transform","translate("+h/2+","+g/2+")");const{themeVariables:i}=d;let[x]=ot(i.pieOuterStrokeWidth);x??=2;const w=s.textPosition,m=Math.min(h,g)/2-e,D=P().innerRadius(0).outerRadius(m),$=P().innerRadius(m*w).outerRadius(m*w);c.append("circle").attr("cx",0).attr("cy",0).attr("r",m+x/2).attr("class","pieOuterCircle");const p=o.getSections(),A=Et(p),C=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let b=0;p.forEach(r=>{b+=r});const G=A.filter(r=>(r.data.value/b*100).toFixed(0)!=="0"),k=dt(C).domain([...p.keys()]);c.selectAll("mySlices").data(G).enter().append("path").attr("d",D).attr("fill",r=>k(r.data.label)).attr("class","pieCircle"),c.selectAll("mySlices").data(G).enter().append("text").text(r=>(r.data.value/b*100).toFixed(0)+"%").attr("transform",r=>"translate("+$.centroid(r)+")").style("text-anchor","middle").attr("class","slice");const V=c.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),L=[...p.entries()].map(([r,M])=>({label:r,value:M})),E=c.selectAll(".legend").data(L).enter().append("g").attr("class","legend").attr("transform",(r,M)=>{const I=n+l,Z=I*L.length/2,H=12*n,J=M*I-Z;return"translate("+H+","+J+")"});E.append("rect").attr("width",n).attr("height",n).style("fill",r=>k(r.label)).style("stroke",r=>k(r.label)),E.append("text").attr("x",n+l).attr("y",n-l).text(r=>o.getShowData()?`${r.label} [${r.value}]`:r.label);const U=Math.max(...E.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),j=h+e+n+l+U,N=V.node()?.getBoundingClientRect().width??0,q=h/2-N/2,X=h/2+N/2,O=Math.min(0,q),B=Math.max(j,X)-O;v.attr("viewBox",`${O} 0 ${B} ${g}`),st(v,g,B,s.useMaxWidth)},"draw"),Rt={draw:Mt},qt={parser:Tt,db:_,renderer:Rt,styles:kt};export{qt as diagram};
