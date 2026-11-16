// Physical plotting geometry shared by the interactive and printed figures.
export function createVisualGeometry({bounds,width,height,gutters={left:58,right:26,top:20,bottom:42},aspect='free',tickCount=4}) {
  if (!Array.isArray(bounds)||bounds.length!==4||!bounds.every(Number.isFinite)||bounds[0]>=bounds[1]||bounds[2]>=bounds[3]) throw new RangeError('ordered finite visual bounds required');
  const gutterValues=['left','right','top','bottom'].map(side=>gutters?.[side]);
  if (![width,height,...gutterValues].every(Number.isFinite)||width<=0||height<=0||gutterValues.some(v=>v<0)) throw new RangeError('positive finite visual dimensions and all four gutters required');
  if (!Number.isInteger(tickCount)||tickCount<1) throw new RangeError('positive integer visual tick count required');
  if (aspect!=='free'&&aspect!=='equal') throw new RangeError('unknown visual aspect');
  const outer={x:gutters.left,y:gutters.top,width:width-gutters.left-gutters.right,height:height-gutters.top-gutters.bottom};
  if (outer.width<=0||outer.height<=0) throw new RangeError('visual gutters consume frame');
  const [xmin,xmax,ymin,ymax]=bounds,freeX=outer.width/(xmax-xmin),freeY=outer.height/(ymax-ymin);
  if (![xmax-xmin,ymax-ymin,freeX,freeY].every(value=>Number.isFinite(value)&&value>0)) throw new RangeError('visual extents and scales must be representable finite positive numbers');
  const scaleX=aspect==='equal'?Math.min(freeX,freeY):freeX,scaleY=aspect==='equal'?scaleX:freeY;
  const plot={x:outer.x+(outer.width-scaleX*(xmax-xmin))/2,y:outer.y+(outer.height-scaleY*(ymax-ymin))/2,width:scaleX*(xmax-xmin),height:scaleY*(ymax-ymin)};
  const worldToPixel=([x,y])=>[plot.x+(x-xmin)*scaleX,plot.y+plot.height-(y-ymin)*scaleY];
  const ticks=(a,b)=>Array.from({length:tickCount+1},(_,i)=>a+(b-a)*i/tickCount);
  return {plot,scaleX,scaleY,worldToPixel,xTicks:ticks(xmin,xmax),yTicks:ticks(ymin,ymax)};
}
export function signedRectToPixels(rect,geometry){
  const [x1,y1]=geometry.worldToPixel([rect.x,rect.y??0]);
  const [x2,y2]=geometry.worldToPixel([rect.x+rect.width,(rect.y??0)+rect.height]);
  return {x:Math.min(x1,x2),y:Math.min(y1,y2),width:Math.abs(x2-x1),height:Math.abs(y2-y1),signedWidth:rect.width,signedHeight:rect.height};
}
export function finiteRuns(points){
  const runs=[];let run=[];
  for(const point of points){if(Array.isArray(point)&&point.length===2&&point.every(Number.isFinite))run.push(point);else{if(run.length>=2)runs.push(run);run=[];}}
  if(run.length>=2)runs.push(run);
  return runs;
}
