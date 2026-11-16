import {families,helix,quadricTrace,projectOrthographic} from './world3d.js';

const fmt=x=>Number((Math.abs(x)<1e-12?0:x).toPrecision(5)).toString();
const clean=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const triple=p=>`(${p.map(fmt).join(', ')})`;
const bounds={helix:4.017953,ellipsoid:3,'one-sheet':Math.sqrt(24),'two-sheet':4,cone:Math.sqrt(20),'elliptic-paraboloid':Math.sqrt(12),'hyperbolic-paraboloid':Math.sqrt(8*Math.cosh(1.3)**2+2*Math.sinh(1.3)**2+4)};
const levels={ellipsoid:[-1,-.7,-.35,0,.35,.7,1],'one-sheet':[-2,-1.4,-.7,0,.7,1.4,2],'two-sheet':[-2,-1.6,-1.2,-1,1,1.2,1.6,2],cone:[-2,-1.4,-.7,0,.7,1.4,2],'elliptic-paraboloid':[0,.3,.7,1.2,1.8,2],'hyperbolic-paraboloid':[-2,-1,-.4,0,.4,1,2]};
const samples=(start,end,n,fn)=>Array.from({length:n+1},(_,i)=>fn(start+(end-start)*i/n));

// Every branch is continuous and independently lives on its defining world surface.
export function spatialMesh(family){
 if(!families.includes(family))throw new RangeError('Unknown spatial family');
 const branches=[];
 if(family==='hyperbolic-paraboloid'){
  // The horizontal curves stop exactly at the square patch boundary.
  for(const z of [-1.5,-1,-.4,0,.4,1,1.5]){
   const limit=z===0?1.3:Math.min(1.3,Math.acosh(1.3/Math.sqrt(Math.abs(z))));
   for(const sign of [-1,1])branches.push(samples(-limit,limit,48,t=>{
    if(z===0)return [2*t,sign*t,0];
    const root=Math.sqrt(Math.abs(z));
    return z>0?[2*sign*root*Math.cosh(t),root*Math.sinh(t),z]:[2*root*Math.sinh(t),sign*root*Math.cosh(t),z];
   }));
  }
  for(const fixed of [-1.3,-.9,-.45,0,.45,.9,1.3]){
   branches.push(samples(-1.3,1.3,48,u=>[2*u,fixed,u*u-fixed*fixed]));
   branches.push(samples(-1.3,1.3,48,v=>[2*fixed,v,fixed*fixed-v*v]));
  }
  return branches;
 }
 for(const z of levels[family])branches.push(...quadricTrace(family,z,{samples:48,window:1.3}).branches.filter(branch=>branch.length>1));
 const radius=z=>{switch(family){case 'ellipsoid':return Math.sqrt(Math.max(0,1-z*z));case 'one-sheet':return Math.sqrt(1+z*z);case 'two-sheet':return Math.sqrt(Math.max(0,z*z-1));case 'cone':return Math.abs(z);default:return Math.sqrt(Math.max(0,z));}};
 const intervals=family==='ellipsoid'?[[-1,1]]:family==='two-sheet'?[[-2,-1],[1,2]]:family==='cone'?[[-2,0],[0,2]]:family==='elliptic-paraboloid'?[[0,2]]:[[-2,2]];
 for(let i=0;i<12;i++){const a=2*Math.PI*i/12;for(const [lo,hi] of intervals)branches.push(samples(lo,hi,48,z=>[2*radius(z)*Math.cos(a),radius(z)*Math.sin(a),z]));}
 return branches;
}
function frameFor(options){const width=options.frame?.width??640,height=options.frame?.height??440;
 if(!Number.isFinite(width)||!Number.isFinite(height)||width<=0||height<=0)throw new RangeError('Invalid spatial frame');
 return {width,height,margin:width<500?20:28};
}
function axisLabels(ends,frame,font){
 const occupied=[],labels=[];
 const pad=4;
 for(const {label,point:[x,y]} of ends){
  const w=font*.76+2,h=font*1.25;
  const candidates=[[10,-9],[-w-9,-9],[10,h+7],[-w-9,h+7],[0,-h-12],[0,h+14],[18,2],[-w-18,2]];
  let chosen=null;
  for(const [dx,dy] of candidates){const left=Math.max(pad,Math.min(frame.width-pad-w,x+dx)),top=Math.max(pad,Math.min(frame.height-pad-h,y+dy));const box={left,top,right:left+w,bottom:top+h};
   if(occupied.every(other=>box.right+5<other.left||other.right+5<box.left||box.bottom+5<other.top||other.bottom+5<box.top)){chosen=box;break;}
  }
  if(!chosen){for(let row=0;row<3&&!chosen;row++)for(let col=0;col<3&&!chosen;col++){const left=pad+col*(frame.width-2*pad-w)/2,top=pad+row*(frame.height-2*pad-h)/2,box={left,top,right:left+w,bottom:top+h};if(occupied.every(other=>box.right+5<other.left||other.right+5<box.left||box.bottom+5<other.top||other.bottom+5<box.top))chosen=box;}}
  chosen??={left:pad,top:pad+labels.length*(h+8),right:pad+w,bottom:pad+labels.length*(h+8)+h};
  occupied.push(chosen);labels.push({label,x:chosen.left,y:chosen.top+h*.82,leader:[x,y,chosen.left+w/2,chosen.top+h/2]});
 }
 return labels;
}
export function spatialScene(config,state={},options={}){
 const frame=frameFor(options),family=config.model==='helix'?'helix':state.family??'ellipsoid';
 if(!Object.hasOwn(bounds,family))throw new RangeError('Unknown spatial family');
 const radius=bounds[family],scale=Math.min(frame.width-2*frame.margin,frame.height-2*frame.margin)/(2*radius);
 const view={yaw:state.yaw??.6,pitch:state.pitch??.5,width:frame.width,height:frame.height,radius:Math.min(frame.width,frame.height)/(2*scale)};
 const projected=p=>projectOrthographic(p,view).screen;
 const poly=(points,color,width,dash='',extra='')=>`<polyline points="${points.map(p=>projected(p).map(fmt).join(',')).join(' ')}" fill="none" stroke="${color}" stroke-width="${width}" ${dash?`stroke-dasharray="${dash}"`:''} stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke" ${extra}/>`;
 const id=options.idPrefix??`spatial-${config.model}`,parts=[],rows=[];
 parts.push(`<svg class="spatial-svg" viewBox="0 0 ${fmt(frame.width)} ${fmt(frame.height)}" role="img" aria-labelledby="${clean(id)}-title ${clean(id)}-desc" data-scale="${fmt(scale)}" data-world-radius="${fmt(radius)}"><title id="${clean(id)}-title">${clean(config.title)}</title>`);
 let description='';
 if(config.model==='helix'){
  const t=state.t??Math.PI/2,h=helix(t),curve=samples(-2*Math.PI,2*Math.PI,160,x=>helix(x).point),tip=h.point.map((x,i)=>x+.45*h.velocity[i]);
  parts.push(poly(curve,'var(--spatial-path)',2.5));
  const [x,y]=projected(h.point),[tx,ty]=projected(tip),length=Math.hypot(tx-x,ty-y);
  if(length>.01){const ux=(tx-x)/length,uy=(ty-y)/length,px=-uy,py=ux,base=[tx-9*ux,ty-9*uy];parts.push(poly([h.point,tip],'var(--spatial-trace)',2.5));parts.push(`<polygon class="spatial-arrowhead" points="${fmt(tx)},${fmt(ty)} ${fmt(base[0]+4.5*px)},${fmt(base[1]+4.5*py)} ${fmt(base[0]-4.5*px)},${fmt(base[1]-4.5*py)}" fill="var(--spatial-trace)"/>`);}
  parts.push(`<circle cx="${fmt(x)}" cy="${fmt(y)}" r="4" fill="var(--spatial-trace)"/>`);
  rows.push(['Selected point',...h.point.map(fmt)],['Velocity',...h.velocity.map(fmt)],['Unit tangent',...h.unitTangent.map(fmt)]);
  description=`At t = ${fmt(t)}, world point ${triple(h.point)}, velocity ${triple(h.velocity)}, unit tangent ${triple(h.unitTangent)}, speed ${fmt(h.speed)}, curvature ${fmt(h.curvature)}. The tangent arrow is 0.45 times velocity.${length<=.01?' Its projection vanishes in this view; rotate to see its direction.':''} The finite path uses t from −2π to 2π.`;
 }else{
  const z=state.z??0,trace=quadricTrace(family,z,{samples:96,window:1.3}),plane=[[-2,-1,z],[2,-1,z],[2,1,z],[-2,1,z]].map(p=>projected(p).map(fmt).join(',')).join(' ');
  parts.push(`<polygon points="${plane}" fill="var(--spatial-plane)" fill-opacity=".12" stroke="var(--spatial-plane)" stroke-width="1.5" stroke-dasharray="6 4" vector-effect="non-scaling-stroke"/>`);
  for(const branch of spatialMesh(family))parts.push(poly(branch,'var(--spatial-mesh)',1.3));
  for(const branch of trace.branches){if(branch.length>1)parts.push(poly(branch,'var(--spatial-trace)',3));else{const [x,y]=projected(branch[0]);parts.push(`<circle cx="${fmt(x)}" cy="${fmt(y)}" r="4" fill="var(--spatial-trace)"/>`);}}
  trace.branches.forEach((branch,i)=>{for(const index of [...new Set([0,Math.floor((branch.length-1)/2),branch.length-1])])rows.push([`Trace branch ${i+1}, point ${index+1}`,...branch[index].map(fmt)]);});
  if(!rows.length)rows.push(['No world point','—','—','—']);
  const patch=family==='ellipsoid'?'The whole bounded surface is sampled.':family==='hyperbolic-paraboloid'?'Finite mesh patch: |u|, |v| ≤ 1.3 with x = 2u, y = v, z = u² − v².':'Finite mesh patch: world heights '+(family==='elliptic-paraboloid'?'0 to 2':'−2 to 2')+'.';
  description=`${family.replaceAll('-', ' ')} at world plane z = ${fmt(z)} has ${trace.kind.replaceAll('-', ' ')} trace. ${trace.equation}. ${trace.intercepts}. ${patch}${family==='hyperbolic-paraboloid'?' Selected saddle traces use parameter −1.3 to 1.3.':''} The context plane spans x from −2 to 2 and y from −1 to 1. Plane and trace rotate together.`;
 }
 const axes=[[[0,0,0],[3,0,0],'x'],[[0,0,0],[0,3,0],'y'],[[0,0,0],[0,0,3],'z']];
 const ends=[];for(const [start,end,label] of axes){parts.push(poly([start,end],'var(--spatial-axis)',1.5));ends.push({label,point:projected(end)});}
 const font=Math.max(14,Math.min(22,options.labelPx??14));
 for(const label of axisLabels(ends,frame,font)){
  const [x1,y1,x2,y2]=label.leader;if(Math.hypot(x2-x1,y2-y1)>20)parts.push(`<line x1="${fmt(x1)}" y1="${fmt(y1)}" x2="${fmt(x2)}" y2="${fmt(y2)}" stroke="var(--spatial-axis)" stroke-width="1.25" vector-effect="non-scaling-stroke"/>`);
  parts.push(`<text x="${fmt(label.x)}" y="${fmt(label.y)}" fill="var(--ink, #263950)" font-size="${fmt(font)}" font-weight="bold" paint-order="stroke" stroke="var(--paper, #faf8f2)" stroke-width="2">${label.label}</text>`);
 }
 const scaleDescription=options.fixedFrame?`Projection scale ${fmt(scale)} drawing units per world unit in this fixed print frame.`:`Projection scale ${fmt(scale)} drawing units per world unit in this frame; resizing or switching family refits the full model patch.`;
 parts.push(`<desc id="${clean(id)}-desc">${clean(description+' '+scaleDescription)}</desc></svg>`);
 return {svg:parts.join(''),description,scaleDescription,rows,scale,frame};
}
export function spatialPrint(config){
 const state=config.model==='helix'?{t:Math.PI/2,yaw:.6,pitch:.5}:{family:'two-sheet',z:1.5,yaw:.6,pitch:.5};
 const scene=spatialScene(config,state,{frame:{width:640,height:440},idPrefix:`spatial-print-${config.model}-${config.label?.replace(/[^a-z0-9]+/gi,'-').toLowerCase()??'figure'}`,labelPx:16,fixedFrame:true});
 const title=clean(config.title),traceNote=config.model==='quadric'?' For the same two-sheet family at z = 0, the trace is empty.':'';
 return `<figure class="visual spatial-print"><div class="visual-opening"><p class="figure-number">${clean(config.label||'Spatial figure')}</p><h3>${title}</h3><p>${clean(config.intro)}</p>${scene.svg}</div><figcaption>${clean(scene.description)} ${clean(scene.scaleDescription)}${traceNote} Orthographic projection changes apparent lengths and angles; calculations use world coordinates. Numeric world coordinates in the table are rounded approximations.</figcaption><div class="table-scroll" role="region" aria-label="World-coordinate data table" tabindex="0"><table><caption>World-coordinate snapshot</caption><thead><tr><th scope="col">Object</th><th scope="col">x</th><th scope="col">y</th><th scope="col">z</th></tr></thead><tbody>${scene.rows.map(r=>'<tr>'+r.map((x,i)=>i?`<td>${clean(x)}</td>`:`<th scope="row">${clean(x)}</th>`).join('')+'</tr>').join('')}</tbody></table></div><p><strong>Explore:</strong> ${clean(config.question)}</p><p>${clean(config.answer)}</p></figure>`;
}
