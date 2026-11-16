// Select ordered reference vertices without changing the polygon used for drawing.
export function representativeVertices(points,limit=21){
 if(!Number.isInteger(limit)||limit<2)throw new RangeError('at least two reference vertices required');
 const finite=points.map((point,index)=>({point,index})).filter(({point})=>Array.isArray(point)&&point.length===2&&point.every(Number.isFinite));
 if(finite.length<=limit)return finite;
 const selected=new Set(Array.from({length:limit},(_,i)=>Math.round(i*(finite.length-1)/(limit-1))));
 for(const axis of [0,1])for(const sign of [-1,1]){
  let extreme=0;
  for(let i=1;i<finite.length;i++)if(sign*finite[i].point[axis]>sign*finite[extreme].point[axis])extreme=i;
  selected.add(extreme);
 }
 return [...selected].sort((a,b)=>a-b).map(index=>finite[index]);
}
