// Display-only mathematics for the eleven canonical advanced experiments.
// Every source field is compared with the exact snapshot before annotation.
import { sourceFields } from './supplementary-notation-source.js';

const M=(plain,tex)=>[plain,`$${tex}$`];
const C=(plain)=>[plain,'`'+plain+'`'];
const common=[
  M('−sqrt(2)','-\\sqrt2'),M('sqrt(2)','\\sqrt2'),M('sqrt(3)','\\sqrt3'),
  M('sqrt2','\\sqrt2'),M('sqrtQ','\\sqrt Q'),M('sqrt(7)','\\sqrt7'),
  M('ln 2','\\ln2'),M('ln 3','\\ln3'),M('π/2','\\pi/2'),M('π/3','\\pi/3'),
  M('2π/3','2\\pi/3'),M('2π','2\\pi'),M('π','\\pi'),
  M('m²','\\mathrm{m}^2'),M('m⁻¹','\\mathrm{m}^{-1}'),M('s⁻¹','\\mathrm{s}^{-1}'),
  M('m/parameter','\\mathrm{m}/\\text{parameter}'),M('m','\\mathrm m'),M('s','\\mathrm s'),
];
// Longer, lab-specific spans take precedence over short shared symbols.
const specs={
  'hyperbolic-branches':[
    M('cosh²t−sinh²t=1','\\cosh^2t-\\sinh^2t=1'),
    M('asinh(sinh t)=t','\\operatorname{asinh}(\\sinh t)=t'),
    M('acosh(cosh(t))=|t|','\\operatorname{acosh}(\\cosh t)=|t|'),
    M('acosh(cosh t)=|t|','\\operatorname{acosh}(\\cosh t)=|t|'),
    M('acosh(cosh t)','\\operatorname{acosh}(\\cosh t)'),
    M('atanh q=log((1+q)/(1−q))/2','\\operatorname{atanh}q=\\frac12\\ln\\frac{1+q}{1-q}'),
    M('[log1p(q)−log1p(−q)]/2','\\frac{\\operatorname{log1p}(q)-\\operatorname{log1p}(-q)}2'),
    M('atanh(q)=ln 2','\\operatorname{atanh}(q)=\\ln2'),
    M('asinh(sinh t)=−ln 2','\\operatorname{asinh}(\\sinh t)=-\\ln2'),
    M('acosh(cosh t)=ln 2','\\operatorname{acosh}(\\cosh t)=\\ln2'),
    M('atanh(q)=−ln 2','\\operatorname{atanh}(q)=-\\ln2'),
    M('t=−ln 2','t=-\\ln2'),M('t=ln 2','t=\\ln2'),
    M('−1 < q < 1','-1<q<1'),M('|q|<1','|q|<1'),
    M('q=1 or −1','q=\\pm1'),M('±1','\\pm1'),
    M('|t|','|t|'),M('cosh(t)','\\cosh t'),
    M('sinh=−0.75','\\sinh t=-0.75'),M('sinh=0.75','\\sinh t=0.75'),
    M('cosh=1.25','\\cosh t=1.25'),M('tanh=−0.6','\\tanh t=-0.6'),
    M('tanh=0.6','\\tanh t=0.6'),M('sinh=tanh=atanh=0','\\sinh t=\\tanh t=\\operatorname{atanh}q=0'),
    C('directAcoshCosh'),C('directLogAtanh'),M('atanh','\\operatorname{atanh}'),
    M('acosh','\\operatorname{acosh}'),M('cosh','\\cosh'),M('tanh','\\tanh'),
    M('t','t'),M('q','q'),
  ],
  'inverse-endpoints':[
    M('x≠0','x\\ne0'),M('g=acosh(1+x²)','g(x)=\\operatorname{acosh}(1+x^2)'),
    M('x=0','x=0'),M('1+x²','1+x^2'),
    M('g′=2 sign(x)/sqrt(x²+2)',"g'(x)=\\frac{2\\operatorname{sign}(x)}{\\sqrt{x^2+2}}"),
    M('2 asinh(|x|/sqrt(2))','2\\operatorname{asinh}(|x|/\\sqrt2)'),
    M('acosh(cosh x)=|x|','\\operatorname{acosh}(\\cosh x)=|x|'),
    M('acosh(cosh x)','\\operatorname{acosh}(\\cosh x)'),
    M('−sqrt2 and sqrt2','-\\sqrt2\\text{ and }\\sqrt2'),
    M('−sqrt(2) and sqrt(2)','-\\sqrt2\\text{ and }\\sqrt2'),
    M('g=ln 2','g=\\ln2'),M('g′=−4/3',"g'=-\\frac43"),M('g′=4/3',"g'=\\frac43"),
    M('g=acosh 2≈1.316957897','g=\\operatorname{acosh}2\\approx1.316957897'),
    M('g′=2/sqrt(3)≈1.154700538',"g'=\\frac2{\\sqrt3}\\approx1.154700538"),
    M('x','x'),
  ],
  'hyperbolic-substitution':[
    M('x=a sinh t','x=a\\sinh t'),M('dx=a cosh t dt','dx=a\\cosh t\\,dt'),
    M('sqrt(a²+x²)=a cosh t','\\sqrt{a^2+x^2}=a\\cosh t'),
    M('F(x)=[x sqrt(a²+x²)+a²asinh(x/a)]/2','F(x)=\\frac{x\\sqrt{a^2+x^2}+a^2\\operatorname{asinh}(x/a)}2'),
    M('≤(U−L)³/(24·400²a) m²','\\le\\frac{(U-L)^3}{24\\cdot400^2a}\\,\\mathrm{m}^2'),
    M('|f″|≤1/a',"|f''|\\le1/a"),
    M('sL=sqrt(a²+L²)','s_L=\\sqrt{a^2+L^2}'),M('sU=sqrt(a²+U²)','s_U=\\sqrt{a^2+U^2}'),
    M('width=U−L','\\text{width}=U-L'),
    M('tanh((tU−tL)/2)=width/(sU+sL)','\\tanh\\frac{t_U-t_L}2=\\frac{U-L}{s_U+s_L}'),
    M('|f′|≤1',"|f'|\\le1"),M('width²/(4N)','\\frac{(U-L)^2}{4N}'),
    M('|f(x)−f(midpoint)|≤|x−midpoint|','|f(x)-f(\\text{midpoint})|\\le|x-\\text{midpoint}|'),
    M('(sqrt(2)+ln(1+sqrt(2)))/2≈1.147793575','\\frac{\\sqrt2+\\ln(1+\\sqrt2)}2\\approx1.147793575'),
    M('10+(9/2)ln 3≈14.943755299','10+\\frac92\\ln3\\approx14.943755299'),
    M('asinh(4/3)=ln 3','\\operatorname{asinh}(4/3)=\\ln3'),
    M('−asinh 1','-\\operatorname{asinh}1'),M('asinh 1','\\operatorname{asinh}1'),
    M('[L,U]=[0,1]','[L,U]=[0,1]'),M('[−1,0]','[-1,0]'),
    M('a>0','a>0'),M('a=0','a=0'),M('L=U','L=U'),M('F','F'),M('cosh','\\cosh'),
  ],
  'formal-series':[
    M('(1−t)y′=y',"(1-t)y'=y"),M('a_n=1','a_n=1'),
    M('P_N=Σt^k','P_N=\\sum_{k=0}^{N}t^k'),
    M('Residual =−(N+1)t^N','\\text{Residual}=-(N+1)t^N'),
    M('rational minus polynomial =t^(N+1)/(1−t)','\\text{rational}-P_N=\\frac{t^{N+1}}{1-t}'),
    M('−(N+1)t^N','-(N+1)t^N'),M('t^(N+1)/(1−t)','\\frac{t^{N+1}}{1-t}'),
    M('exp(−1/t²)','e^{-1/t^2}'),M('e⁻⁴','e^{-4}'),
    M('|t|<1','|t|<1'),M('t≠1','t\\ne1'),M('t=−1','t=-1'),M('t=1','t=1'),
    M('2/3','\\frac23'),M('1/24','\\frac1{24}'),
  ],
  'focus-directrix-conics':[
    M('sqrt(x²+y²)=e|x−d|','\\sqrt{x^2+y^2}=e|x-d|'),
    M('R=ed/(1+e cosθ)','R=\\frac{ed}{1+e\\cos\\theta}'),
    M('R=ed/(e cosφ−1)','R=\\frac{ed}{e\\cos\\phi-1}'),
    M('|θ|<acos(−1/e)','|\\theta|<\\arccos(-1/e)'),
    M('|φ|<acos(1/e)','|\\phi|<\\arccos(1/e)'),
    M('ed/(1+e)','\\frac{ed}{1+e}'),M('ed/(e−1)','\\frac{ed}{e-1}'),
    M('e>1','e>1'),M('e=0','e=0'),M('e=1','e=1'),M('e','e'),
    M('x=−4','x=-4'),M('x=2','x=2'),M('x=4','x=4'),
    M('4/3','\\frac43'),
  ],
  'helix-world':[
    M('r=(R cos t,R sin t,ht)','\\mathbf r(t)=(R\\cos t,R\\sin t,ht)'),
    M('speed=sqrt(R²+h²)','\\text{speed}=\\sqrt{R^2+h^2}'),
    M('curvature=R/(R²+h²)','\\kappa=\\frac{R}{R^2+h^2}'),
    M('(R/speed)/speed','\\frac{R/\\text{speed}}{\\text{speed}}'),
    M('R/(R²+h²)','\\frac R{R^2+h^2}'),
    M('(−4,0,1)/sqrt(17)','\\frac{(-4,0,1)}{\\sqrt{17}}'),
    M('8/17','\\frac8{17}'),M('1/3','\\frac13'),M('1/2','\\frac12'),
    M('xy','xy'),M('R=0','R=0'),M('h=0','h=0'),M('h','h'),
  ],
  'quadric-traces':[
    M('z=z0','z=z_0'),M('Q=k+(z0/c)²','Q=k+(z_0/c)^2'),
    M('Q<0','Q<0'),M('Q=0','Q=0'),M('Q>0','Q>0'),
    M('a sqrtQ,b sqrtQ','a\\sqrt Q,b\\sqrt Q'),
    M('2sqrt(2),sqrt(2)','2\\sqrt2,\\sqrt2'),
    M('2sqrt(7)/3,sqrt(7)/3','\\frac{2\\sqrt7}3,\\frac{\\sqrt7}3'),
    M('Q=7/9','Q=\\frac79'),M('Q=2','Q=2'),
    M('k=−1,z0=c','k=-1,z_0=c'),M('k=0,z0=0','k=0,z_0=0'),
    M('k=1','k=1'),M('−1 two-sheet','-1\\text{ two-sheet}'),
    M('0 cone','0\\text{ cone}'),M('z0','z_0'),
  ],
  'level-tangents':[
    M('F=x²+y²−z²=0','F=x^2+y^2-z^2=0'),
    M('∇F=(2x,2y,−2z)','\\nabla F=(2x,2y,-2z)'),
    M('F(P+δv)=δ²','F(P+\\delta v)=\\delta^2'),
    M('δ=0.1 m','\\delta=0.1\\,\\mathrm m'),
    M('∇F=(2,0,−2)','\\nabla F=(2,0,-2)'),
    M('∇F=(0,4,−4)','\\nabla F=(0,4,-4)'),
    M('∇F=(0,2,2)','\\nabla F=(0,2,2)'),
    M('x−z=0','x-z=0'),M('y−z=0','y-z=0'),M('y+z=0','y+z=0'),
    M('0.01 m²','0.01\\,\\mathrm m^2'),
    M('P=(0,0,0)','P=(0,0,0)'),M('P=(1,0,0)','P=(1,0,0)'),
  ],
  'forced-response':[
    M('p=∫₀ᵗ sin(t−s)f(s)ds','p(t)=\\int_0^t\\sin(t-s)f(s)\\,ds'),
    M('A(1−cos t)','A(1-\\cos t)'),M('A(t−sin t)','A(t-\\sin t)'),
    M('A(sin t−t cos t)/2','\\frac A2(\\sin t-t\\cos t)'),
    M('≤t⁵ M4/(180·200⁴)','\\le\\frac{t^5M_4}{180\\cdot200^4}'),
    M('t=omega times physical time','t=\\omega\\times\\text{physical time}'),
    M('omega²','\\omega^2'),M('omega>0','\\omega>0'),
    M('v0=physical initial velocity/omega','v_0=\\frac{\\text{physical initial velocity}}\\omega'),
    M('1−cos(t)','1-\\cos t'),M('t−sin(t)','t-\\sin t'),
    M('sin(t)−t cos(t)','\\sin t-t\\cos t'),
    M('2A sin²(t/2)','2A\\sin^2(t/2)'),
    M('A[t³/6−t⁵/120+t⁷/5040−t⁹/362880+t¹¹/39916800]','A[\\frac{t^3}6-\\frac{t^5}{120}+\\frac{t^7}{5040}-\\frac{t^9}{362880}+\\frac{t^{11}}{39916800}]'),
    M('A[t³/6−t⁵/60+t⁷/1680−t⁹/90720+t¹¹/7983360]','A[\\frac{t^3}6-\\frac{t^5}{60}+\\frac{t^7}{1680}-\\frac{t^9}{90720}+\\frac{t^{11}}{7983360}]'),
    M('|A|t¹³/13!','\\frac{|A|t^{13}}{13!}'),M('6|A|t¹³/13!','\\frac{6|A|t^{13}}{13!}'),
    M('p″+p=f',"p''+p=f"),M('A=1,t=10⁻⁸','A=1,t=10^{-8}'),
    M('5×10⁻¹⁷','5\\times10^{-17}'),M('1.666666667×10⁻²⁵','1.666666667\\times10^{-25}'),
    M('1−sin 1≈0.158529015','1-\\sin1\\approx0.158529015'),
    M('1.70×10⁻⁸','1.70\\times10^{-8}'),
    M('y0,v0','y_0,v_0'),M('t=0','t=0'),
    M('0≤t≤0.1','0\\le t\\le0.1'),
    M('p','p'),M('t','t'),
  ],
  'ode-series-error':[
    M('m','m'),
    M('P₂ₘ=Σ(t²/2)^k/k!','P_{2m}=\\sum_{k=0}^{m}\\frac{(t^2/2)^k}{k!}'),
    M('exp(t²/2)','e^{t^2/2}'),
    M('−t^(2m+1)/(2^m m!)','-\\frac{t^{2m+1}}{2^m m!}'),
    M('≤exp(T²/2)(T²/2)^(m+1)/(m+1)!','\\le e^{T^2/2}\\frac{(T^2/2)^{m+1}}{(m+1)!}'),
    M('|t|≤T≤3','|t|\\le T\\le3'),M('|t|≤T','|t|\\le T'),
    M('T<|t|','T<|t|'),M('m=t=T=0','m=t=T=0'),
    M('−1/48','-\\frac1{48}'),M('−4/3','-\\frac43'),
  ],
  'implicit-decay':[
    M('z=lambda h','z=\\lambda h'),
    M('exact=y0 exp(−nz)','y_{\\mathrm{exact}}=y_0e^{-nz}'),
    M('forward=y0(1−z)^n','y_{\\mathrm{fwd}}=y_0(1-z)^n'),
    M('implicit=y0/(1+z)^n','y_{\\mathrm{imp}}=\\frac{y_0}{(1+z)^n}'),
    M('0≤implicit−exact≤exact(exp(nz²/2)−1)','0\\le y_{\\mathrm{imp}}-y_{\\mathrm{exact}}\\le y_{\\mathrm{exact}}(e^{nz^2/2}-1)'),
    M('implicit−exact≤implicit','y_{\\mathrm{imp}}-y_{\\mathrm{exact}}\\le y_{\\mathrm{imp}}'),
    M('0<z<2','0<z<2'),M('0<z<1','0<z<1'),M('z=2','z=2'),M('z=1','z=1'),M('z>0','z>0'),
    M('1±z','1\\pm z'),M('λ=10','\\lambda=10'),M('e⁻¹','e^{-1}'),
    M('4/9','\\frac49'),M('−2','-2'),M('−1','-1'),
    M('lambda','\\lambda'),M('y0','y_0'),M('z','z'),C('log1p'),
  ],
};
const caseRules={
  'hyperbolic-branches':[
    M('q=−0.6','q=-0.6'),M('q=0.6','q=0.6'),M('q=0','q=0'),M('t=0','t=0'),
    M('identity=1','\\cosh^2t-\\sinh^2t=1'),M('cosh=1','\\cosh t=1'),
  ],
  'inverse-endpoints':[
    M('x=−0.5','x=-0.5'),M('x=0.5','x=0.5'),M('x=1','x=1'),M('x=0','x=0'),
    M('1+x²','1+x^2'),
  ],
  'hyperbolic-substitution':[
    M('a=1 m','a=1\\,\\mathrm m'),M('a=3 m','a=3\\,\\mathrm m'),
    M('exact area=','\\text{exact area}='),
    M('[0,4] m','[0,4]\\,\\mathrm m'),M('[−1,0] m','[-1,0]\\,\\mathrm m'),
    M('0 and asinh 1','0\\text{ and }\\operatorname{asinh}1'),
    M('0 and asinh(4/3)=ln 3','0\\text{ and }\\operatorname{asinh}(4/3)=\\ln3'),
  ],
  'formal-series':[
    M('N=4,t=0.5','N=4,t=0.5'),M('N=3,t=−0.5','N=3,t=-0.5'),
    M('N=4,t=0.8','N=4,t=0.8'),M('P=1.9375','P_N=1.9375'),
    M('P=0.625','P_N=0.625'),M('P=3.3616','P_N=3.3616'),
    M('rational=2/3','\\frac1{1-t}=\\frac23'),
    M('rational=2','\\frac1{1-t}=2'),M('rational=5','\\frac1{1-t}=5'),
    M('flat value=e⁻⁴','\\text{flat value}=e^{-4}'),
    M('signed error=1/24','\\text{signed error}=\\frac1{24}'),
    M('signed rational-minus-polynomial error=0.0625','\\frac1{1-t}-P_N=0.0625'),
    M('signed error=1.6384','\\text{signed error}=1.6384'),
    M('residual=−0.3125','\\text{residual}=-0.3125'),
    M('residual=−2.048','\\text{residual}=-2.048'),
    M('residual=0.5','\\text{residual}=0.5'),
  ],
  'focus-directrix-conics':[
    M('e=0.5,d=4 m','e=0.5,d=4\\,\\mathrm m'),
    M('e=2,d=3 m','e=2,d=3\\,\\mathrm m'),
    M('e=1,d=4 m','e=1,d=4\\,\\mathrm m'),
    M('x=2 and 6 m','x=2\\text{ and }6\\,\\mathrm m'),
    M('x=−4 and 4/3 m','x=-4\\text{ and }\\frac43\\,\\mathrm m'),
    M('2π/3','2\\pi/3'),M('π/3','\\pi/3'),
  ],
  'helix-world':[
    M('R=2 m,h=0.5 m/parameter,t=π/2','R=2\\,\\mathrm m,h=0.5\\,\\mathrm m/\\text{parameter},t=\\pi/2'),
    M('R=3 m,h=0,t=0','R=3\\,\\mathrm m,h=0,t=0'),
    M('R=1 m,h=1 m/parameter,t=π','R=1\\,\\mathrm m,h=1\\,\\mathrm m/\\text{parameter},t=\\pi'),
    M('(0,2,π/4) m','(0,2,\\pi/4)\\,\\mathrm m'),
    M('(−2,0,0.5) m/parameter','(-2,0,0.5)\\,\\mathrm m/\\text{parameter}'),
    M('(3,0,0) m','(3,0,0)\\,\\mathrm m'),
    M('(−1,0,π) m','(-1,0,\\pi)\\,\\mathrm m'),
    M('3 m/parameter','3\\,\\mathrm m/\\text{parameter}'),
    M('sqrt(2) m/parameter','\\sqrt2\\,\\mathrm m/\\text{parameter}'),
  ],
  'quadric-traces':[
    M('(a,b,c,k,z0)=(2,1,3,1,0)','(a,b,c,k,z_0)=(2,1,3,1,0)'),
    M('z=0 m','z=0\\,\\mathrm m'),M('z0=3 m','z_0=3\\,\\mathrm m'),
    M('k=−1,z0=4 m','k=-1,z_0=4\\,\\mathrm m'),
    M('(2,1) m','(2,1)\\,\\mathrm m'),
    M('(2sqrt(2),sqrt(2)) m','(2\\sqrt2,\\sqrt2)\\,\\mathrm m'),
    M('(2sqrt(7)/3,sqrt(7)/3) m','(\\frac{2\\sqrt7}3,\\frac{\\sqrt7}3)\\,\\mathrm m'),
  ],
  'level-tangents':[
    M('P=(1,0,1) m','P=(1,0,1)\\,\\mathrm m'),
    M('P=(0,2,2) m','P=(0,2,2)\\,\\mathrm m'),
    M('P=(0,1,−1) m','P=(0,1,-1)\\,\\mathrm m'),
    M('∇F=(2,0,−2) m','\\nabla F=(2,0,-2)\\,\\mathrm m'),
    M('∇F=(0,4,−4) m','\\nabla F=(0,4,-4)\\,\\mathrm m'),
    M('∇F=(0,2,2) m','\\nabla F=(0,2,2)\\,\\mathrm m'),
  ],
  'forced-response':[
    M('A=2, t=π/2, y0=1, v0=−0.5','A=2,t=\\pi/2,y_0=1,v_0=-0.5'),
    M('A=1, t=1','A=1,t=1'),M('A=2, t=π','A=2,t=\\pi'),
    M('zero-data particular=2','p=2'),M('homogeneous=−0.5','y_{\\mathrm{hom}}=-0.5'),
    M('full response=1.5','y=1.5'),M('full response=π','y=\\pi'),
    M('full response=1−sin 1≈0.158529015','y=1-\\sin1\\approx0.158529015'),
    M('0≤t≤0.1','0\\le t\\le0.1'),
  ],
  'ode-series-error':[
    M('m=3,t=T=1','m=3,t=T=1'),M('m=2,t=T=0.5','m=2,t=T=0.5'),
    M('m=4,t=T=2','m=4,t=T=2'),
    M('P=1.645833333','P_{2m}=1.645833333'),M('P=1.1328125','P_{2m}=1.1328125'),
    M('P=7','P_{2m}=7'),M('residual=−0.00390625','\\text{residual}=-0.00390625'),
    M('residual=','\\text{residual}='),
    M('actual value error≈0.002887937','\\text{actual value error}\\approx0.002887937'),
    M('uniform certificate≈0.004293545','\\text{uniform certificate}\\approx0.004293545'),
    M('actual error≈0.000335953','\\text{actual error}\\approx0.000335953'),
    M('certificate≈0.000368863','\\text{certificate}\\approx0.000368863'),
    M('actual error≈0.389056099','\\text{actual error}\\approx0.389056099'),
    M('certificate≈1.970414960','\\text{certificate}\\approx1.970414960'),
  ],
  'implicit-decay':[
    M('λ=10 s⁻¹,h=0.3 s,n=1,y0=1','\\lambda=10\\,\\mathrm s^{-1},h=0.3\\,\\mathrm s,n=1,y_0=1'),
    M('h=0.05 s,n=2','h=0.05\\,\\mathrm s,n=2'),
    M('h=0.01 s,n=10','h=0.01\\,\\mathrm s,n=10'),
    M('0.1 s','0.1\\,\\mathrm s'),
    M('z=3','z=3'),M('forward=−2','y_{\\mathrm{fwd}}=-2'),
    M('implicit=0.25','y_{\\mathrm{imp}}=0.25'),
    M('exact≈0.049787068','y_{\\mathrm{exact}}\\approx0.049787068'),
    M('implicit absolute error≈0.200212932','\\text{implicit absolute error}\\approx0.200212932'),
    M('implicit=4/9≈0.444444444','y_{\\mathrm{imp}}=\\frac49\\approx0.444444444'),
    M('implicit≈0.385543289','y_{\\mathrm{imp}}\\approx0.385543289'),
    M('exact=e⁻¹','y_{\\mathrm{exact}}=e^{-1}'),
    M('exact=e⁻¹≈0.367879441','y_{\\mathrm{exact}}=e^{-1}\\approx0.367879441'),
    M('implicit error≈0.076565003','\\text{implicit error}\\approx0.076565003'),
    M('implicit error≈0.017663848','\\text{implicit error}\\approx0.017663848'),
  ],
};

const inputMath={
  '−4 to 4':'-4\\le x\\le4','−1 < q < 1':'-1<q<1',
  '0 < a ≤ 10':'0<a\\le10','−10 ≤ L ≤ U':'-10\\le L\\le U','L ≤ U ≤ 10':'L\\le U\\le10',
  '0 to 20':'0\\le N\\le20','−1 to 0.95, t≠1':'-1\\le t\\le0.95,\\ t\\ne1',
  '0 < e ≤ 3':'0<e\\le3','0 < d ≤ 10':'0<d\\le10',
  '0 < R ≤ 10':'0<R\\le10','−5 to 5':'-5\\le h\\le5','−2π to 2π':'-2\\pi\\le t\\le2\\pi',
  '−1,0,1':'-1,0,1','−10 to 10':'-10\\le z_0\\le10',
  '|A|≤5':'|A|\\le5','0 to 4':'0\\le t\\le4',
  '0 to 12':'0\\le m\\le12','|t|≤T≤3':'|t|\\le T\\le3',
  '0 < lambda ≤ 20':'0<\\lambda\\le20','0 < h ≤ 1':'0<h\\le1',
  'n≥1, nh≤5 s':'n\\ge1,\\ nh\\le5\\,\\mathrm s','0 < y0 ≤ 10':'0<y_0\\le10',
};
const symbols={t:'t',q:'q',x:'x',a:'a',L:'L',U:'U',N:'N',e:'e',d:'d',R:'R',h:'h',
  'a,b,c':'a,b,c',k:'k',z0:'z_0','x,y,z':'x,y,z',A:'A','y0,v0':'y_0,v_0',
  m:'m','t,T':'t,T',lambda:'\\lambda',n:'n',y0:'y_0',F:'F'};
const defaultMath=new Set(['0','0.3','0.5','0.6','1','2','3','4','10','2,1,3','1,0,1','1,−0.5','1,1','π/2','ln 2']);

function snapshot(lab){
  const original=sourceFields[lab.id];
  if(!original)throw Error(`Missing notation source: ${lab.id}`);
  for(const key of ['description','inputs','tasks','expected','caseExplanations','boundary'])
    if(JSON.stringify(lab[key])!==JSON.stringify(original[key]))throw Error(`Presentation source drift: ${lab.id}.${key}`);
}
function pieces(value,rules){
  const ordered=[...rules].sort((a,b)=>b[0].length-a[0].length);
  const parts=[];let offset=0;
  while(offset<value.length){
    let found=null,at=value.length;
    for(const [plain,display] of ordered){
      let pos=value.indexOf(plain,offset);
      while(pos>=0&&(
        (plain.length<=5&&/^[A-Za-z]+$/.test(plain)&&
          ((pos>0&&/[A-Za-z]/.test(value[pos-1]))||(pos+plain.length<value.length&&/[A-Za-z]/.test(value[pos+plain.length]))))||
        (/\d$/.test(plain)&&(/\d/.test(value[pos+plain.length]||'')||
          (value[pos+plain.length]==='.'&&/\d/.test(value[pos+plain.length+1]||''))))
      ))
        pos=value.indexOf(plain,pos+1);
      if(pos>=0&&pos<at){at=pos;found=[plain,display];}
    }
    if(!found){parts.push({plain:value.slice(offset),kind:'verbal'});break;}
    if(at>offset)parts.push({plain:value.slice(offset,at),kind:'verbal'});
    const [plain,display]=found;parts.push({plain,kind:display.startsWith('$')?'math':'code',display});offset=at+plain.length;
  }
  if(parts.map(part=>part.plain).join('')!==value)throw Error('Notation span reconstruction failed');
  return parts;
}
const display=parts=>parts.reduce((result,part,index)=>result+(index&&parts[index-1].kind==='math'&&part.kind==='math'?' ':'')+(part.display??part.plain),'');
function shown(value,rules){return display(pieces(value,rules));}
function inputPieces(value,column,lab){
  if(column===0&&symbols[value])return pieces(value,[M(value,symbols[value])]);
  if(column===1){
    if(value==='1'||value==='integer'||value==='choice'||value==='dimensionless'||value.startsWith('model units'))return pieces(value,[]);
    if(value==='m'||value==='s'||value==='s⁻¹'||value==='m/parameter')return pieces(value,[M(value,{m:'\\mathrm m',s:'\\mathrm s','s⁻¹':'\\mathrm s^{-1}','m/parameter':'\\mathrm m/\\text{parameter}'}[value])]);
  }
  if(column===2&&defaultMath.has(value))return pieces(value,[M(value,value==='ln 2'?'\\ln2':value==='π/2'?'\\pi/2':value.replace('−','-'))]);
  if(column===3&&inputMath[value])return pieces(value,[M(value,value==='−4 to 4'?`-4\\le ${lab.id==='hyperbolic-branches'?'t':'x'}\\le4`:inputMath[value])]);
  if(column===3&&value.startsWith('each ')){
    const tex=lab.id==='quadric-traces'?'0<a,b,c\\le10':lab.id==='level-tangents'?'-5\\le x,y,z\\le5':'-5\\le y_0,v_0\\le5';
    return pieces(value,[M(value.slice(5),tex)]);
  }
  return pieces(value,[...specs[lab.id],...common]);
}
const expectedBreaks={'hyperbolic-substitution':[3,7],'forced-response':[4,9,14],'implicit-decay':[3,6]};
function expectedGroups(value,id){
  const sentences=value.split(/(?<=\.) (?=[A-Z])/);
  const cuts=expectedBreaks[id]||[];
  if(sentences.join(' ')!==value)throw Error(`Expected paragraph separators: ${id}`);
  const groups=[];let start=0;
  for(const end of [...cuts,sentences.length]){if(end>start&&end<sentences.length+1)groups.push(sentences.slice(start,end).join(' '));start=end;}
  if(groups.join(' ')!==value)throw Error(`Expected paragraph reconstruction: ${id}`);
  return groups;
}
export function presentationForLab(lab){
  snapshot(lab);
  const rules=[...specs[lab.id],...common];
  return {
    description:shown(lab.description,rules),
    inputs:lab.inputs.map(row=>row.map((value,column)=>display(inputPieces(value,column,lab)))),
    tasks:lab.tasks.map(value=>shown(value,rules)),
    expectedParagraphs:expectedGroups(lab.expected,lab.id).map(value=>shown(value,rules)),
    caseExplanations:lab.caseExplanations.map(value=>shown(value,[...caseRules[lab.id],...rules])),
    boundary:shown(lab.boundary,rules),
  };
}
export function notationPiecesForLab(lab){
  snapshot(lab);const rules=[...specs[lab.id],...common];
  return [pieces(lab.description,rules),...lab.inputs.flatMap(row=>row.map((value,column)=>inputPieces(value,column,lab))),...lab.tasks.map(value=>pieces(value,rules)),pieces(lab.expected,rules),...lab.caseExplanations.map(value=>pieces(value,[...caseRules[lab.id],...rules])),pieces(lab.boundary,rules)];
}
