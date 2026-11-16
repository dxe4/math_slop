import{O as e,n as t}from"./index-CqiFd9ll.js";import{n,r,t as i}from"./LabShell-Q1yeTFaa.js";import{a,i as o,n as s,r as c,t as l}from"./canvas-U3zVQWvF.js";var u=e(),d=t(),f=[{id:`quadratic`,label:`Quadratic`,equation:`f(z) = z² − 1`,insight:`The two dark points are zeros at −1 and 1. A full turn around either zero cycles through every hue once.`,apply:({re:e,im:t})=>({re:e*e-t*t-1,im:2*e*t})},{id:`reciprocal`,label:`Reciprocal`,equation:`f(z) = 1 / z`,insight:`The origin is a pole: magnitude grows without bound while the colour wheel reverses orientation.`,apply:({re:e,im:t})=>{let n=e*e+t*t;return n<1e-14?{re:1/0,im:1/0}:{re:e/n,im:-t/n}}},{id:`sine`,label:`Complex sine`,equation:`f(z) = sin(z)`,insight:`Zeros repeat along the real axis at integer multiples of π; magnitude grows exponentially off that axis.`,apply:({re:e,im:t})=>({re:Math.sin(e)*Math.cosh(t),im:Math.cos(e)*Math.sinh(t)})},{id:`mobius`,label:`Möbius map`,equation:`f(z) = (z − 1) / (z + 1)`,insight:`A zero at 1 and pole at −1 organise the picture. Möbius maps send circles and lines to circles or lines.`,apply:({re:e,im:t})=>g({re:e-1,im:t},{re:e+1,im:t})},{id:`exponential`,label:`Exponential`,equation:`f(z) = exp(z)`,insight:`Moving right changes magnitude; moving vertically changes angle. The colours repeat every 2πi.`,apply:({re:e,im:t})=>{let n=Math.exp(e);return!Number.isFinite(n)||n===0?{re:NaN,im:NaN}:{re:n*Math.cos(t),im:n*Math.sin(t)}}}],p=f[0],m=`#version 300 es
precision highp float;
in vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}`,h=`#version 300 es
precision highp float;
uniform vec2 u_resolution;
uniform vec2 u_center;
uniform float u_scale;
uniform int u_function;
uniform bool u_contours;
out vec4 outputColor;

const float PI = 3.141592653589793;

vec2 multiplyComplex(vec2 a, vec2 b) {
  return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

vec2 divideComplex(vec2 a, vec2 b) {
  float denominator = max(dot(b, b), 1e-18);
  return vec2(a.x * b.x + a.y * b.y, a.y * b.x - a.x * b.y) / denominator;
}

vec2 complexSine(vec2 z) {
  float expY = exp(clamp(z.y, -40.0, 40.0));
  float expNegativeY = 1.0 / expY;
  float coshY = 0.5 * (expY + expNegativeY);
  float sinhY = 0.5 * (expY - expNegativeY);
  return vec2(sin(z.x) * coshY, cos(z.x) * sinhY);
}

vec3 hsvToRgb(vec3 value) {
  vec3 p = abs(fract(value.xxx + vec3(0.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0);
  return value.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), value.y);
}

void main() {
  vec2 plane = (gl_FragCoord.xy - 0.5 * u_resolution) / u_resolution.y;
  vec2 z = u_center + u_scale * plane;
  vec2 w;
  bool unresolvedPole = (u_function == 1 && dot(z, z) < 1e-14)
    || (u_function == 3 && dot(z + vec2(1.0, 0.0), z + vec2(1.0, 0.0)) < 1e-14);
  bool outsideRange = (u_function == 2 && abs(z.y) > 40.0)
    || (u_function == 4 && abs(z.x) > 40.0);
  if (unresolvedPole || outsideRange) {
    outputColor = vec4(0.22, 0.22, 0.22, 1.0);
    return;
  }

  if (u_function == 0) {
    w = multiplyComplex(z, z) - vec2(1.0, 0.0);
  } else if (u_function == 1) {
    w = divideComplex(vec2(1.0, 0.0), z);
  } else if (u_function == 2) {
    w = complexSine(z);
  } else if (u_function == 3) {
    w = divideComplex(z - vec2(1.0, 0.0), z + vec2(1.0, 0.0));
  } else {
    float magnitude = exp(clamp(z.x, -40.0, 40.0));
    w = magnitude * vec2(cos(z.y), sin(z.y));
  }
  if (any(isnan(w)) || any(isinf(w))) {
    outputColor = vec4(0.22, 0.22, 0.22, 1.0);
    return;
  }

  float magnitude = max(length(w), 1e-12);
  float argument = atan(w.y, w.x);
  float hue = fract(argument / (2.0 * PI) + 1.0);
  float logarithmicMagnitude = log2(magnitude);
  float ringPosition = abs(fract(logarithmicMagnitude) - 0.5) * 2.0;
  float value = 0.68 + 0.26 * smoothstep(0.0, 0.92, ringPosition);
  float saturation = 0.76;

  if (u_contours) {
    float magnitudeLine = smoothstep(0.91, 0.99, ringPosition);
    float angleCell = abs(fract((argument / (2.0 * PI)) * 12.0) - 0.5) * 2.0;
    float angleLine = smoothstep(0.91, 0.99, angleCell);
    value *= 0.82 + 0.18 * max(magnitudeLine, angleLine);
  }

  float zeroFade = smoothstep(0.0, 0.075, magnitude);
  vec3 colour = hsvToRgb(vec3(hue, saturation, value * (0.3 + 0.7 * zeroFade)));
  outputColor = vec4(colour, 1.0);
}`;function g(e,t){let n=t.re*t.re+t.im*t.im;return n<1e-14?{re:1/0,im:1/0}:{re:(e.re*t.re+e.im*t.im)/n,im:(e.im*t.re-e.re*t.im)/n}}function _(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)):null}function v(e,t,n,r,i){let a=e.getContext(`webgl2`,{alpha:!0,antialias:!1,preserveDrawingBuffer:!0,powerPreference:`low-power`});if(!a)return!1;let o=_(a,a.VERTEX_SHADER,m),s=_(a,a.FRAGMENT_SHADER,h),c=a.createProgram();if(!o||!s||!c)return!1;if(a.attachShader(c,o),a.attachShader(c,s),a.linkProgram(c),!a.getProgramParameter(c,a.LINK_STATUS))return a.deleteShader(o),a.deleteShader(s),a.deleteProgram(c),!1;a.viewport(0,0,e.width,e.height),a.useProgram(c);let l=a.createBuffer();if(!l)return a.deleteShader(o),a.deleteShader(s),a.deleteProgram(c),!1;a.bindBuffer(a.ARRAY_BUFFER,l),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),a.STATIC_DRAW);let u=a.getAttribLocation(c,`a_position`);return a.enableVertexAttribArray(u),a.vertexAttribPointer(u,2,a.FLOAT,!1,0,0),a.uniform2f(a.getUniformLocation(c,`u_resolution`),e.width,e.height),a.uniform2f(a.getUniformLocation(c,`u_center`),n.re,n.im),a.uniform1f(a.getUniformLocation(c,`u_scale`),r),a.uniform1i(a.getUniformLocation(c,`u_function`),t),a.uniform1i(a.getUniformLocation(c,`u_contours`),+!!i),a.drawArrays(a.TRIANGLES,0,3),a.deleteShader(o),a.deleteShader(s),a.deleteBuffer(l),a.deleteProgram(c),!0}function y(e,t,n){let r=Math.floor(e*6),i=e*6-r,a=n*(1-t),o=n*(1-i*t),s=n*(1-(1-i)*t);return[[n,s,a],[o,n,a],[a,n,s],[a,o,n],[s,a,n],[n,a,o]][(r%6+6)%6]}function b(e,t,n,r,i){let a=o(e);if(!a)return!1;let{context:c,width:l,height:u}=a,d=Math.min(480,Math.max(160,Math.round(l))),f=Math.max(100,Math.round(u/l*d)),p=document.createElement(`canvas`);p.width=d,p.height=f;let m=p.getContext(`2d`);if(!m)return!1;let h=m.createImageData(d,f);for(let e=0;e<f;e+=1)for(let a=0;a<d;a+=1){let o={re:n.re+(a-d/2)/f*r,im:n.im+(f/2-e)/f*r},c=t.apply(o);if(t.id===`sine`&&Math.abs(o.im)>40||t.id===`exponential`&&Math.abs(o.re)>40||!Number.isFinite(c.re)||!Number.isFinite(c.im)){let t=(e*d+a)*4;h.data[t]=56,h.data[t+1]=56,h.data[t+2]=56,h.data[t+3]=255;continue}let l=Math.max(Math.hypot(c.re,c.im),1e-12),u=Math.atan2(c.im,c.re),p=(u/(2*Math.PI)+1)%1,m=Math.abs((Math.log2(l)%1+1)%1-.5)*2,g=.68+.26*m;if(i){let e=Math.abs((u/(2*Math.PI)*12%1+1)%1-.5)*2;g*=.82+.18*Math.max(+(m>.91),+(e>.91))}let _=s(l/.075,.3,1),[v,b,x]=y(p,.76,g*_),S=(e*d+a)*4;h.data[S]=v*255,h.data[S+1]=b*255,h.data[S+2]=x*255,h.data[S+3]=255}return m.putImageData(h,0,0),c.imageSmoothingEnabled=!0,c.drawImage(p,0,0,l,u),!0}function x(e){if(!Number.isFinite(e.re)||!Number.isFinite(e.im))return`undefined (pole or numerical range)`;let t=e.im<0?`−`:`+`;return`${c(e.re)} ${t} ${c(Math.abs(e.im))}i`}function S(){let e=(0,u.useRef)(null),t=(0,u.useRef)(null),o=(0,u.useRef)(null),m=a(e),h=a(t,1),[g,_]=(0,u.useState)(`quadratic`),[y,S]=(0,u.useState)({re:0,im:0}),[C,w]=(0,u.useState)(5.2),[T,E]=(0,u.useState)(!0),[D,O]=(0,u.useState)(`webgl`),[k,A]=(0,u.useState)(null),j=f.findIndex(e=>e.id===g),M=f[j]??p;(0,u.useEffect)(()=>{let n=e.current,r=t.current;if(!n||!r)return;let i=b(r,M,y,C,T),a=v(n,j,y,C,T);O(a?`webgl`:i?`canvas`:`unavailable`)},[y,T,h,j,m,C,M]);let N=(0,u.useMemo)(()=>[-2,-1,0,1,2].map(e=>{let t={re:e,im:.5};return{input:t,output:M.apply(t)}}),[M]),P=t=>{let n=e.current;if(!n)return y;let r=n.getBoundingClientRect();return{re:y.re+(t.x-r.width/2)/r.height*C,im:y.im+(r.height/2-t.y)/r.height*C}},F=e=>{let t=l(e.currentTarget,e.clientX,e.clientY);o.current={point:t,center:y},e.currentTarget.setPointerCapture(e.pointerId)},I=e=>{let t=e.currentTarget,n=l(t,e.clientX,e.clientY);if(o.current){let e=t.getBoundingClientRect(),r=n.x-o.current.point.x,i=n.y-o.current.point.y;S({re:o.current.center.re-r/e.height*C,im:o.current.center.im+i/e.height*C})}else A(P(n))},L=e=>{o.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)},R=e=>{e.preventDefault();let t=e.currentTarget,n=l(t,e.clientX,e.clientY),r=t.getBoundingClientRect(),i=s(C*Math.exp(e.deltaY*.001),.05,40),a=(n.x-r.width/2)/r.height,o=(r.height/2-n.y)/r.height;S(e=>({re:e.re+a*(C-i),im:e.im+o*(C-i)})),w(i)},z=e=>{let t=C*(e.shiftKey?.25:.08),n={ArrowLeft:{re:-t,im:0},ArrowRight:{re:t,im:0},ArrowUp:{re:0,im:t},ArrowDown:{re:0,im:-t}}[e.key];n?(e.preventDefault(),S(e=>({re:e.re+n.re,im:e.im+n.im}))):e.key===`+`||e.key===`=`?(e.preventDefault(),w(e=>Math.max(.05,e*.8))):e.key===`-`?(e.preventDefault(),w(e=>Math.min(40,e*1.25))):e.key.toLowerCase()===`r`&&(S({re:0,im:0}),w(5.2))},B=k?M.apply(k):null,V=k&&B?`z = ${x(k)}  ·  f(z) = ${x(B)}`:`Drag to pan · wheel or +/− to zoom · arrow keys also pan`;return(0,d.jsxs)(n,{reset:()=>{_(`quadratic`),S({re:0,im:0}),w(5.2),E(!0),A(null)},table:(0,d.jsxs)(`table`,{className:`euler-lab__table`,children:[(0,d.jsx)(`caption`,{children:`Sample values along Im(z) = 0.5. The colour plot masks exponential inputs with |Re z| > 40 and sine inputs with |Im z| > 40; a representable table value can lie outside that plotting range.`}),(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{scope:`col`,children:`z`}),(0,d.jsx)(`th`,{scope:`col`,children:`f(z)`})]})}),(0,d.jsx)(`tbody`,{children:N.map(({input:e,output:t})=>(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{children:x(e)}),(0,d.jsx)(`td`,{children:x(t)})]},e.re))})]}),id:`complex-domain`,kicker:`Complex analysis · WebGL shader`,title:`Complex functions in colour`,summary:`Domain colouring turns a four-dimensional graph into a map: hue shows the output angle, while light bands show powers-of-two changes in magnitude.`,equation:M.equation,controls:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`label`,{className:`math-lab__select`,htmlFor:`complex-function`,children:[(0,d.jsx)(`span`,{children:`Function`}),(0,d.jsx)(`select`,{id:`complex-function`,value:g,onChange:e=>_(e.currentTarget.value),children:f.map(e=>(0,d.jsx)(`option`,{value:e.id,children:e.label},e.id))})]}),(0,d.jsx)(r,{id:`complex-zoom`,label:`Field of view`,value:C,minimum:.05,maximum:12,step:.05,displayValue:`${c(C,2)} units`,onChange:w}),(0,d.jsx)(i,{label:`Display`,children:(0,d.jsxs)(`label`,{className:`math-lab__check`,children:[(0,d.jsx)(`input`,{type:`checkbox`,checked:T,onChange:e=>E(e.currentTarget.checked)}),`Argument rays and magnitude rings`]})}),(0,d.jsx)(`button`,{className:`math-lab__button`,type:`button`,onClick:()=>{S({re:0,im:0}),w(5.2)},children:`Reset view`}),(0,d.jsxs)(`div`,{className:`math-lab__legend`,"aria-label":`Domain colouring legend`,children:[(0,d.jsx)(`span`,{className:`math-lab__colour-wheel`,"aria-hidden":`true`}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`Hue`}),` is argument. Repeated light–dark bands encode log₂|f(z)|.`]})]})]}),status:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`span`,{children:V}),(0,d.jsx)(`span`,{className:`math-lab__backend`,children:D===`webgl`?`WebGL 2`:D===`canvas`?`Canvas fallback`:`Data table only`})]}),notice:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`p`,{children:M.insight}),(0,d.jsxs)(`ul`,{children:[(0,d.jsx)(`li`,{children:`Look for candidate zeros and poles, then confirm them from the formula. Grey marks an unresolved pole neighbourhood or a numerical-range limit.`}),(0,d.jsx)(`li`,{children:`Trace a small loop around that point. The number and direction of colour cycles reveal its order.`}),(0,d.jsx)(`li`,{children:`Zoom in. Analytic functions look locally like a rotation and scaling wherever the derivative is nonzero.`})]}),(0,d.jsx)(`p`,{children:`Grey has no zero, pole, or curvature meaning. The Möbius zero at 1 remains conformal because its derivative is 1/2 there; phase itself is undefined at an output of zero.`})]}),children:[D===`unavailable`?(0,d.jsx)(`div`,{className:`math-lab__canvas-error`,role:`status`,children:`This browser cannot create a graphics context. The sample-value table below provides the same function numerically.`}):null,(0,d.jsxs)(`div`,{className:`math-lab__canvas-stack`,children:[(0,d.jsx)(`canvas`,{ref:t,className:`math-lab__canvas math-lab__canvas--domain math-lab__canvas--fallback`,"aria-hidden":`true`}),(0,d.jsx)(`canvas`,{ref:e,className:`math-lab__canvas math-lab__canvas--domain math-lab__canvas--webgl`,tabIndex:0,role:`img`,"aria-label":`Domain-colouring plot of ${M.equation}. Hue represents argument and bands represent magnitude. Drag to pan, use the wheel or plus and minus keys to zoom.`,onPointerDown:F,onPointerMove:I,onPointerUp:L,onPointerCancel:L,onPointerLeave:()=>{o.current||A(null)},onWheel:R,onKeyDown:z})]})]})}export{S as ComplexDomainLab};