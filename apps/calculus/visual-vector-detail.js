import {createVisualGeometry} from './visual-geometry.js';

// This metadata only selects an authored vector and point; it never changes draw().
export function localVectorDetail(config,data,overviewGeometry,frame){
  if(config?.detail?.kind!=='world-vector-local')return null;
  const {arrowIndex,markerIndex,minHalfSpan,componentMargin}=config.detail;
  const arrow=data.arrows?.[arrowIndex],point=data.markers?.[markerIndex];
  if(!arrow||!point||arrow.from.some((value,i)=>value!==point[i]))throw new Error('Local vector detail must use the authored point and arrow');
  const delta=arrow.to.map((value,i)=>value-arrow.from[i]);
  const half=delta.map(value=>Math.max(minHalfSpan,componentMargin*Math.abs(value)));
  const bounds=[point[0]-half[0],point[0]+half[0],point[1]-half[1],point[1]+half[1]];
  const geometry=createVisualGeometry({...frame,bounds,aspect:'equal'});
  const nearest=([,samples])=>Math.min(...samples.map(([x,y])=>Math.hypot(x-point[0],y-point[1])));
  const branch=[...(data.curves||[])].sort((a,b)=>nearest(a)-nearest(b))[0];
  const scale=geometry.scaleX/overviewGeometry.scaleX;
  const number=value=>Number(value.toPrecision(5)).toString();
  const disclosure=`Same 0.1T vector from P (${number(point[0])}, ${number(point[1])}) to P + 0.1T (${number(arrow.to[0])}, ${number(arrow.to[1])}). Local world window: x from ${number(bounds[0])} to ${number(bounds[1])}; y from ${number(bounds[2])} to ${number(bounds[3])}. Equal physical units on the x and y axes; coordinate scale ${number(scale)} times the full-curve overview. The vector's world length and direction are unchanged. Teal curve: selected branch; rust arrow: 0.1T; filled point: P.`;
  return {bounds,geometry,point,arrow,branch,scale,disclosure};
}

export function displayedHeadLength(pixelLength,normalLength){
  return Math.min(normalLength,0.45*pixelLength);
}
