// Supplementary derivations and practice, kept separate from the original chapter drafts.
export const depth = {
  '04': {
    title:'Why a nonlinear ε–δ proof needs two bounds',
    paragraphs:[
      'For a linear function, output error is a constant multiple of input error. For $f(x)=x^2$ at $x=2$, the proposed limit is $4$, but $|x^2-4|=|x-2||x+2|$. The factor $|x+2|$ varies with $x$. Choosing $\\delta=\\varepsilon/|x+2|$ is invalid: $\\delta$ has to be chosen before an arbitrary nearby $x$ is supplied. The proof needs one bound that works for every $x$ in a whole neighborhood.',
      'First require $|x-2|<1$. Then $1<x<3$, so $|x+2|<5$. This preliminary restriction turns the moving factor into a fixed bound. To achieve $|x^2-4|<\\varepsilon$, also require $|x-2|<\\varepsilon/5$. Thus choose $\\delta=\\min(1,\\varepsilon/5)$. Given any $\\varepsilon>0$ and any $x$ with $0<|x-2|<\\delta$, we have $|x^2-4|<5|x-2|<5\\delta\\le\\varepsilon$. The strict inequality comes from $|x-2|<\\delta$; equality in the last comparison is harmless.',
      'This pattern is reusable: factor the output error, restrict the input to a convenient neighborhood, bound all factors that do not vanish, and make the vanishing factor small enough. The choice of 1 is convenient, not sacred. A smaller neighborhood may yield a sharper constant but is unnecessary for establishing the limit. A graph or table can suggest 4; the proof handles every real $x$ in the selected punctured neighborhood.',
      'For a non-limit, reversing the quantifiers is essential. To show a proposed number is not the limit, find one output tolerance that defeats every input radius, however small. For the sign function at zero, a positive point always has value one and a negative point always has value minus one. No single proposed value can be close to both sides within a tolerance smaller than one. This argument proves failure of the two-sided limit; it is stronger than displaying a few points on a graph. It also explains why two one-sided limits must agree before a two-sided limit can exist.',
      'When writing a delta proof, work backward on scratch paper but present the forward guarantee to the reader. Start with an arbitrary positive output tolerance, name one positive delta depending only on that tolerance and the fixed target, and then take an arbitrary input satisfying the punctured-neighborhood condition. Check separately that the input lies in the function domain. If the target is a domain endpoint, use the one-sided version instead of silently quantifying over unavailable inputs. This order prevents a common circular mistake: choosing a radius after seeing the particular input. A completed proof should state exactly where any local bound came from and whether a strict or non-strict estimate is needed.',
    ],
    worked:{problem:'Prove $\\lim_{x\\to-1}x^2=1$.',steps:['Factor $|x^2-1|=|x+1||x-1|$. If $|x+1|<1$ then $-2<x<0$, so $|x-1|<3$.','Given $\\varepsilon>0$ choose $\\delta=\\min(1,\\varepsilon/3)$. Whenever $0<|x+1|<\\delta$, the output error is less than $3\\delta\\le\\varepsilon$.'],answer:'The limit is $1$; a single $\\delta$ works for every eligible $x$.'},
    questions:[{question:'Why is $\\delta=\\varepsilon/|x+2|$ not a valid choice in the proof at $x=2$?',type:'Proof',hint:'Who chooses $x$, and when?',solution:'The definition requires $\\delta$ to depend on $\\varepsilon$ and the fixed target point, not on the later arbitrary $x$. Bounding $|x+2|$ uniformly repairs this.'},{question:'Give a $\\delta$ for the request $|x^2-4|<0.01$ near $x=2$.',type:'Fluency',hint:'Use the proved construction.',solution:'$\\delta=\\min(1,0.01/5)=0.002$. Then $0<|x-2|<0.002$ guarantees the requested strict output error.'}]},
  '05': {
    title:'The derivative contains continuity, but asks for more',
    paragraphs:[
      'Suppose $f$ is differentiable at an interior point $a$. For $h\\ne0$ write $f(a+h)-f(a)=h\\,\\frac{f(a+h)-f(a)}{h}$. The quotient approaches the finite number $f^{\\prime}(a)$, while $h$ approaches zero. Their product therefore approaches zero. Hence $f(a+h)\\to f(a)$: differentiability forces continuity. The argument needs a two-sided derivative at an interior point; one-sided derivatives at an endpoint give the corresponding one-sided continuity.',
      'The converse fails. The function $|x|$ is continuous at zero because $|x|\\to0$, but its right difference quotient is $1$ and its left difference quotient is $-1$. The derivative does not exist. The graph shows a corner, but the two quotient limits make the conclusion precise. A vertical tangent is another failure of finite differentiability: $x^{1/3}$ has quotient $h^{-2/3}$ at zero, which grows without bound from both sides.',
      'A derivative is a local linear approximation, not merely a slope drawn by eye. If $f^{\\prime}(a)=m$, then $f(a+h)=f(a)+mh+r(h)$, where $r(h)/h\\to0$. The remainder is small compared with $h$, a stronger statement than $r(h)\\to0$. This viewpoint extends to tangent planes and differentiability in several variables.',
      'The point at which a derivative is requested must belong to the function domain. At an isolated domain point there are no nearby distinct inputs from which to form a usual derivative limit; assigning a slope there would be a convention, not a consequence of the difference quotient. At an endpoint of an interval, a right or left derivative can still describe the rate from the allowed side. State that qualification in a motion model whose clock begins at launch or ends at impact. A numerical table may suggest such a one-sided rate, but its finite secants do not by themselves establish that the corresponding limit exists.',
    ],
    worked:{problem:'Show directly that $f(x)=x^2$ has derivative $2a$ at every real $a$.',steps:['For $h\\ne0$, $\\frac{(a+h)^2-a^2}{h}=\\frac{2ah+h^2}{h}=2a+h$.','As $h\\to0$, the quotient tends to $2a$. The remainder in the linear model is $h^2$, and $h^2/h=h\\to0$.'],answer:'$f^{\\prime}(a)=2a$. The local linear approximation is $f(a+h)\\approx a^2+2ah$; the exact remainder is $h^2$.'},
    questions:[{question:'Prove that a function with a finite derivative at a point must be continuous there. Can it be discontinuous at that point?',type:'Proof',hint:'Use the product identity in the derivation.',solution:'No. If the difference quotient tends to a finite number, multiplying it by $h$ shows $f(a+h)-f(a)\\to0$, which is continuity.'},{question:'Find the left and right derivatives of $|x-3|$ at $x=3$.',type:'Fluency',hint:'Set $h=x-3$.',solution:'The quotient is $|h|/h$: $-1$ for $h<0$ and $1$ for $h>0$. The one-sided derivatives disagree, so no two-sided derivative exists.'}]},
  '10': {
    title:'How a finite collection of sums becomes an integral',
    paragraphs:[
      'An integral is not defined by one preferred rectangle rule. Given a bounded function on $[a,b]$, each partition $P$ produces a lower sum $L(P)$ by using the infimum on every subinterval and an upper sum $U(P)$ by using the supremum. Every tagged Riemann sum for that same partition lies between them. If we can make $U(P)-L(P)$ arbitrarily small by suitable refinement, all sufficiently fine tagged sums are forced toward one value.',
      'For $f(x)=x^2$ on $[0,1]$, monotonicity makes the left and right endpoint sums lower and upper sums on a uniform partition. Their difference telescopes: $U_n-L_n=\\frac1n[f(1)-f(0)]=\\frac1n$. Since this tends to zero, their common limit is the integral $\\frac13$. The bound also gives a certified error no larger than $1/n$ for either endpoint estimate. A midpoint estimate may be much better, but that extra accuracy is a property to prove or measure for this function and rule.',
      'Why insist on all sample choices? For the function that equals $1$ on rational inputs and $0$ on irrational inputs, every interval contains both kinds of numbers. Every upper sum is $1$ and every lower sum is $0$, no matter how thin the intervals. A program sampling only rational endpoints reports $1$; another sampling irrational points reports $0$. Neither finite experiment settles integrability. This example explains the force of the definition without claiming ordinary physical rates behave this badly.'
    ],
    worked:{problem:'Bound the error of a right sum for $f(x)=x^2$ on $[0,1]$ with $n=200$.',steps:['The right sum is an upper sum because $x^2$ increases on $[0,1]$; the left sum is a lower sum.','Their gap is $1/n=0.005$, so the integral lies within $0.005$ of the right sum. The exact right sum is $\\frac13+\\frac1{2n}+\\frac1{6n^2}$.'],answer:'The certified bound is $0.005$; the actual overestimate is about $0.00250417$.'},
    questions:[{question:'Why can a single sequence of midpoint sums fail to prove Riemann integrability?',type:'Interpretation',hint:'Think about other sample points in the same small intervals.',solution:'Riemann integrability requires all tagged sums on sufficiently fine partitions to approach the same value. One sampling convention may miss behavior seen by other tags.'},{question:'For an increasing $f$ on $[a,b]$, what is the gap between uniform right and left sums?',type:'Proof',hint:'Subtract and telescope.',solution:'With width $h=(b-a)/n$, the gap is $h[f(b)-f(a)]$. This tends to zero for a bounded increasing function.'}]},
  '11': {
    title:'Why accumulation differentiates back to the rate',
    paragraphs:[
      'Let $A(x)=\\int_a^x f(t)\\,dt$ and suppose $f$ is Riemann integrable on $[a,b]$ and continuous at an interior point $x$. For $h>0$, the quotient $[A(x+h)-A(x)]/h$ is the average value of $f$ on $[x,x+h]$. Its value lies between the infimum and supremum of $f$ there. Continuity at $x$ makes both bounds approach $f(x)$ as $h$ shrinks. The same argument works for $h<0$ with the oriented integral. This proves $A^{\\prime}(x)=f(x)$, the first part of the fundamental theorem.',
      'The theorem is local. If $f$ has a jump at $x$, the left and right averages may approach different values, so $A$ can have a corner even though it remains continuous. For example, let $f(t)=0$ for $t<0$ and $f(t)=1$ for $t\\ge0$, and define $A(x)=\\int_{-1}^x f(t)\\,dt$. Then $A(x)=0$ for $x\\le0$ and $A(x)=x$ for $x\\ge0$. Its left derivative at zero is $0$ and right derivative is $1$. The assigned value $f(0)=1$ does not rescue differentiability.',
      'The second part starts with any antiderivative $F$ of a continuous $f$: since $A^{\\prime}=f=F^{\\prime}$, the difference $A-F$ is constant on the interval by the mean value theorem. Evaluating at $a$ gives $\\int_a^b f(x)\\,dx=F(b)-F(a)$. For moving limits, differentiate the outer accumulation and multiply by the endpoint rate: $\\frac{d}{dx}\\int_a^{g(x)}f(t)\\,dt=f(g(x))g^{\\prime}(x)$, assuming $f$ is continuous at $g(x)$ and $g$ is differentiable.'
    ],
    worked:{problem:'Differentiate $H(x)=\\int_1^{x^2}\\cos(t)\\,dt$.',steps:['The accumulation $B(u)=\\int_1^u\\cos(t)\\,dt$ satisfies $B^{\\prime}(u)=\\cos(u)$ because cosine is continuous.','$H(x)=B(x^2)$. The chain rule gives $H^{\\prime}(x)=\\cos(x^2)\\cdot2x$.'],answer:'$H^{\\prime}(x)=2x\\cos(x^2)$. The lower bound $1$ contributes no derivative because it is fixed.'},
    questions:[{question:'Find $\\frac{d}{dx}\\int_x^3 t^2\\,dt$.',type:'Fluency',hint:'Reverse the limits first.',solution:'The integral is $-\\int_3^x t^2\\,dt$, so its derivative is $-x^2$.'},{question:'If $f$ is integrable but discontinuous at $c$, must $A(x)=\\int_a^x f(t)\\,dt$ be differentiable at $c$?',type:'Interpretation',hint:'Use a step function.',solution:'No. For a unit step at $c$ the accumulation has left slope $0$ and right slope $1$, so it is not differentiable there.'}]},
  '14': {
    title:'Two different ways an integral can be improper',
    paragraphs:[
      'The symbol $\\int_1^\\infty f(x)\\,dx$ abbreviates a limit over finite intervals: $\\lim_{R\\to\\infty}\\int_1^R f(x)\\,dx$. For $x^{-p}$, direct integration gives $\\int_1^R x^{-p}\\,dx=\\frac{R^{1-p}-1}{1-p}$ when $p\\ne1$ and $\\ln R$ when $p=1$. The limit is finite exactly when $p>1$, in which case it equals $1/(p-1)$. Small function values alone are insufficient: $1/x$ tends to zero but accumulates without bound.',
      'An endpoint singularity is a separate limit. For $\\int_0^1 x^{-p}\\,dx$, integrate from $\\varepsilon$ to $1$ and let $\\varepsilon\\to0^+$. This integral converges exactly when $p<1$. The thresholds are reversed: behavior over infinitely much width and behavior near an infinitely high endpoint demand different comparisons. In either case, write the limiting interval explicitly before applying an antiderivative formula.',
      'For a singularity inside an interval, both sides must converge separately in the ordinary improper sense. The symmetric cancellation $\\lim_{\\varepsilon\\to0^+}\\left[\\int_{-1}^{-\\varepsilon}\\frac1x\\,dx+\\int_\\varepsilon^1\\frac1x\\,dx\\right]=0$ is a Cauchy principal value. The two component integrals diverge to opposite infinities, so $\\int_{-1}^1\\frac1x\\,dx$ does not exist as an ordinary improper integral. A symmetric numerical routine can report zero while hiding this distinction.'
    ],
    worked:{problem:'Determine whether $\\int_0^1\\frac1{\\sqrt x}\\,dx$ converges, and evaluate it.',steps:['Replace the lower endpoint by $\\varepsilon>0$: $\\int_\\varepsilon^1 x^{-1/2}\\,dx=[2\\sqrt x]_\\varepsilon^1=2-2\\sqrt\\varepsilon$.','Let $\\varepsilon\\to0^+$; the limiting value is $2$. The unbounded height near zero occupies shrinking width.'],answer:'The improper integral converges to $2$.'},
    questions:[{question:'For which $p$ does $\\int_1^\\infty x^{-p}\\,dx$ converge?',type:'Fluency',hint:'Inspect the power $R^{1-p}$ and treat $p=1$ separately.',solution:'Evaluating from $1$ to $R$ gives $\\frac{R^{1-p}-1}{1-p}$ for $p\\ne1$. The limit is finite exactly when $p>1$, and its value is then $1/(p-1)$.'},{question:'Why is the principal value of $\\int_{-1}^1\\frac1x\\,dx$ not its ordinary integral?',type:'Interpretation',hint:'Inspect each side separately.',solution:'The negative-side integral tends to $-\\infty$ and the positive-side integral to $+\\infty$. Ordinary convergence requires both finite; symmetric cancellation defines a different limit.'}]},
  '15': {
    title:'A series is a limit of accumulated tails',
    paragraphs:[
      'The series $\\sum_{n=1}^\\infty a_n$ converges when its partial sums $S_N$ approach a finite number. The Cauchy criterion removes the unknown limit: for every $\\varepsilon>0$ there is an $N$ such that $|a_{m+1}+\\cdots+a_n|<\\varepsilon$ whenever $n>m\\ge N$. In words, every sufficiently late finite tail must be small. Individual terms tending to zero is necessary, because $a_n=S_n-S_{n-1}$, but it does not control the sum of many terms.',
      'The harmonic series $\\sum_{n=1}^\\infty1/n$ shows the gap. Group terms after $1$ as $1/2$, then $1/3+1/4$, then $1/5+\\cdots+1/8$, and so on. Each block has $2^{k-1}$ terms, each at least $1/2^k$, so each block contributes at least $1/2$. Thus the partial sums are at least 1 plus one half for each completed block, or $1+K/2$ after $K$ blocks, and therefore grow without bound. Yet every individual term approaches zero.',
      'For a geometric series $\\sum_{n=0}^\\infty r^n$ with $|r|<1$, the tail after terms indexed $0$ through $N$ is $r^{N+1}/(1-r)$, so its absolute size is at most $|r|^{N+1}/(1-|r|)$. This gives a practical stopping rule. If $r$ is close to $1$, many terms may be needed; convergence alone does not promise a fast computation. For $r=-1$, the terms do not approach zero and the partial sums oscillate. For $r>1$, they grow. Bound the remainder when claiming numerical accuracy rather than judging a plot by eye.'
    ],
    worked:{problem:'How many terms of $1+1/2+1/4+\\cdots$ guarantee error below $0.001$?',steps:['After terms indexed $0$ through $N$, the exact tail is $2^{-N}$.','Require $2^{-N}<0.001$. Since $2^{10}=1024$, $N=10$ works and $N=9$ does not.'],answer:'Use $11$ terms, from $n=0$ through $n=10$; the error is $1/1024\\approx0.0009765625$.'},
    questions:[{question:'Does $a_n\\to0$ guarantee $\\sum a_n$ converges?',type:'Proof',hint:'Recall the harmonic blocks.',solution:'No. The harmonic terms $1/n$ tend to zero, but each dyadic block adds at least $1/2$, so the series diverges.'},{question:'Give a tail bound for $\\sum_{n=0}^\\infty(1/3)^n$ after $n=N$.',type:'Fluency',hint:'Use the geometric sum starting at $N+1$.',solution:'The omitted terms form a geometric series starting with $(1/3)^{N+1}$ and ratio $1/3$. Therefore the exact tail is $(1/3)^{N+1}/(1-1/3)=(1/2)(1/3)^N$.'}]},
  '17': {
    title:'Taylor polynomials need a remainder, not just matching derivatives',
    paragraphs:[
      'The degree-$n$ Taylor polynomial at $a$ matches $f$ and its first $n$ derivatives at $a$. This local agreement does not by itself specify an error away from $a$. If $f$ has $n+1$ continuous derivatives between $a$ and $x$, Taylor’s theorem gives $f(x)=T_n(x)+\\frac{f^{(n+1)}(\\xi)(x-a)^{n+1}}{(n+1)!}$ for some $\\xi$ between $a$ and $x$. A known bound $|f^{(n+1)}(t)|\\le M$ throughout that interval therefore certifies $|f(x)-T_n(x)|\\le\\frac{M|x-a|^{n+1}}{(n+1)!}$. The interval and the derivative bound are part of the claim.',
      'For $e^x$ near zero on $[-0.5,0.5]$, every derivative is $e^x\\le e^{0.5}<1.65$. The cubic $T_3(x)=1+x+x^2/2+x^3/6$ has error at most $1.65\\cdot0.5^4/24<0.00430$ throughout that interval. The same polynomial at $x=3$ has no such certified error: the bound was derived only on the small interval. One can derive another bound on $[0,3]$, but it will be much larger.',
      'Even infinite Taylor data can be deceptive. Define $f(0)=0$ and $f(x)=e^{-1/x^2}$ for $x\\ne0$. This function is smooth, and every derivative at zero is zero, so its Taylor series there is identically zero. Yet $f(x)>0$ for every $x\\ne0$. Smoothness means all derivatives exist; analyticity additionally means the Taylor series equals the function nearby. Numerical plots may hide this distinction because $e^{-1/x^2}$ becomes extremely small near zero.'
    ],
    worked:{problem:'Certify a bound for approximating $e^{0.2}$ by $1+0.2+0.2^2/2$.',steps:['This is the degree-$2$ Maclaurin polynomial. The third derivative is $e^t\\le e^{0.2}<1.222$ for $0\\le t\\le0.2$.','Taylor’s remainder is at most $1.222\\cdot0.2^3/3!<0.00163$. The polynomial value is $1.22$.'],answer:'$e^{0.2}$ lies within $0.00163$ of $1.22$; the actual value is about $1.22140$.'},
    questions:[{question:'What must be bounded to certify a degree-$4$ Taylor error?',type:'Interpretation',hint:'Look one derivative beyond the polynomial degree.',solution:'A bound on $|f^{(5)}|$ over the entire interval between the center and the evaluation point gives $M|x-a|^5/5!$.'},{question:'Can all derivatives at one point determine a smooth function nearby?',type:'Interpretation',hint:'Consider $e^{-1/x^2}$ with value zero at $x=0$.',solution:'No. This smooth function has every derivative zero at the origin yet is positive at all nonzero nearby points.'}]},
  '20': {
    title:'Paths can disprove a multivariable limit; one path cannot prove it',
    paragraphs:[
      'For $f(x,y)=xy/(x^2+y^2)$ away from $(0,0)$, approach along $y=mx$. Then $f(x,mx)=m/(1+m^2)$, independent of $x\\ne0$. The x-axis gives limit $0$, while the diagonal $y=x$ gives $1/2$. Since two paths produce different limits, the two-variable limit does not exist. Checking a thousand more paths is unnecessary after this contradiction.',
      'Agreement along many paths is not sufficient for existence. A limit demands one value for all points in every sufficiently small punctured disk. To prove a limit, seek a bound in terms of the distance $r=\\sqrt{x^2+y^2}$ that tends to zero uniformly over direction. For $g(x,y)=x^2y/(x^2+y^2)$ away from the origin, observe $|g(x,y)|\\le|y|\\le r$, because $x^2/(x^2+y^2)\\le1$. Hence $g(x,y)\\to0$ as $(x,y)\\to(0,0)$, regardless of path.',
      'This uniform bound gives a direct $\\varepsilon$–$\\delta$ proof: for any $\\varepsilon>0$ choose $\\delta=\\varepsilon$. If $0<\\sqrt{x^2+y^2}<\\delta$, then $|g(x,y)|\\le\\sqrt{x^2+y^2}<\\varepsilon$. Polar coordinates can expose the same reasoning, but a factor of $r$ must remain uniformly controlled in angle. A plot along a grid can suggest behavior; it cannot check infinitely many curving paths or resolve singular structure at the origin.'
    ],
    worked:{problem:'Show that $h(x,y)=x^3/(x^2+y^2)$ tends to zero at the origin.',steps:['For $(x,y)\\ne(0,0)$, $|h(x,y)|=|x|x^2/(x^2+y^2)\\le|x|$.','Since $|x|\\le\\sqrt{x^2+y^2}$, the output is bounded by distance to the origin, which tends to zero.'],answer:'The two-variable limit is zero. Setting $h(0,0)=0$ makes $h$ continuous there.'},
    questions:[{question:'What limits does $xy/(x^2+y^2)$ have along $y=0$ and $y=x$?',type:'Fluency',hint:'Substitute each path before taking $x\\to0$.',solution:'Along $y=0$ it equals $0$. Along $y=x$ it equals $1/2$ for $x\\ne0$. Therefore the two-variable limit does not exist.'},{question:'Why does testing every straight line still not constitute a proof of a multivariable limit?',type:'Proof',hint:'What other paths can approach a point?',solution:'Curved paths and varying directions are also allowed. Existence requires a uniform neighborhood bound or equivalent argument covering all approaches.'}]},
  '21': {
    title:'Partial derivatives can exist without a tangent plane',
    paragraphs:[
      'Partial derivatives test the coordinate axes separately. Let $f(0,0)=0$ and $f(x,y)=xy/\\sqrt{x^2+y^2}$ elsewhere. Along either axis $f$ is zero, so $f_x(0,0)=f_y(0,0)=0$. If these partials defined a tangent plane, the candidate linear approximation would be $L(x,y)=0$. We must test whether the residual is small compared with distance $r=\\sqrt{x^2+y^2}$, not merely whether $f$ tends to zero.',
      'On the diagonal $y=x$, $f(x,x)=x^2/(\\sqrt2|x|)=|x|/\\sqrt2$ for $x\\ne0$. The distance to the origin is $\\sqrt2|x|$, so $|f-L|/r=1/2$, which does not approach zero. Thus $f$ is continuous at the origin but not differentiable there. Its directional rate depends nonlinearly on direction: along a unit vector $(u,v)$, $f(tu,tv)/t$ equals $uv$ for $t>0$ and $-uv$ for $t<0$. For directions with $uv\\ne0$, even the two-sided directional derivative fails.',
      'Differentiability in two variables means one linear map $L(h,k)=Ah+Bk$ approximates all sufficiently small displacements with error $o(\\sqrt{h^2+k^2})$. If $f$ is differentiable, $A$ and $B$ are its partial derivatives. Continuity of partial derivatives in a neighborhood is a useful sufficient condition, though not necessary. This stronger condition is why chapter 21 can safely build a tangent plane from smooth formulas while chapter 20 warns about path tests.'
    ],
    worked:{problem:'Find the tangent plane of $f(x,y)=x^2+2y^2$ at $(1,1)$.',steps:['$f(1,1)=3$, $f_x=2x$ and $f_y=4y$. At $(1,1)$ the gradient is $(2,4)$.','The linear approximation is $z=3+2(x-1)+4(y-1)$. The exact residual is $(x-1)^2+2(y-1)^2$, which is $o(\\sqrt{(x-1)^2+(y-1)^2})$.'],answer:'$z=3+2(x-1)+4(y-1)$, with a quadratic error near $(1,1)$.'},
    questions:[{question:'If $f_x(0,0)$ and $f_y(0,0)$ exist, does a tangent plane necessarily exist?',type:'Interpretation',hint:'Use the example above.',solution:'No. Both coordinate partials can be zero while the residual divided by distance remains $1/2$ along the diagonal.'},{question:'What error ratio must vanish for differentiability at $(a,b)$?',type:'Fluency',hint:'Compare with the distance from $(a,b)$.',solution:'$[f(a+h,b+k)-f(a,b)-Ah-Bk]/\\sqrt{h^2+k^2}$ must tend to zero as $(h,k)\\to(0,0)$, for one linear map $Ah+Bk$.'}]},
  '27': {
    title:'An initial value can fail to determine one future',
    paragraphs:[
      'An initial value problem combines a rate law $y^{\\prime}=f(t,y)$ with a specified starting state. Continuity of $f$ near the starting point is enough for local existence, but uniqueness needs more control over how the rate changes with $y$, such as a local Lipschitz bound. Standard smooth models meet this condition. The distinction matters when a model includes a square root, a switch, or a singularity.',
      'Consider $y^{\\prime}=\\sqrt{|y|}$ with $y(0)=0$. One solution is $y(t)=0$ for every $t$. Another is $y(t)=0$ for $t\\le c$ and $y(t)=(t-c)^2/4$ for $t\\ge c$, for any waiting time $c\\ge0$. At $t=c$ both the value and derivative from each side are zero, so the pieces fit differentiably and satisfy the rate law. The initial condition at $t=0$ cannot choose among these futures. The derivative of $\\sqrt{|y|}$ with respect to $y$ becomes unbounded at zero, so a local Lipschitz guarantee fails there.',
      'This is a mathematical warning about model interpretation. A numerical solver started at exactly zero may stay there forever, while a tiny rounding or modeling perturbation can initiate growth. A plotted trajectory cannot establish uniqueness. When explaining a physical model, state the valid state region, the regularity of its rate law, and which questions the initial data actually determine.'
    ],
    worked:{"problem":"For $t\\ge0$, verify that $y(t)=0$ for $0\\le t\\le2$ and $y(t)=(t-2)^2/4$ for $t>2$ solves $y^{\\prime}=\\sqrt{|y|}$ with $y(0)=0$.","steps":["For $0\\le t\\le2$, $y=0$ and $y^{\\prime}=0=\\sqrt{|y|}$.","For $t>2$, $y=(t-2)^2/4$ and $y^{\\prime}=(t-2)/2=\\sqrt y$. At $t=2$, both one-sided derivatives are zero."],"answer":"The delayed trajectory satisfies $y(0)=0$ and the ODE for all $t\\ge0$, as does the constant zero trajectory."},
    questions:[{question:'Does continuity of the rate $f(t,y)$ alone guarantee a unique local solution?',type:'Interpretation',hint:'Recall the square-root rate at zero.',solution:'No. It supports local existence under standard conditions, but $y^{\\prime}=\\sqrt{|y|}$, $y(0)=0$ has multiple solutions.'},{question:'Why might a solver that returns $y=0$ be mathematically correct yet incomplete?',type:'Interpretation',hint:'What other exact solutions share the initial value?',solution:'The zero path is a valid solution, but any delayed-growth path also satisfies the same initial value problem. The solver output does not establish uniqueness.'}]},
  '28': {
    title:'Local error, accumulated error, and unstable steps',
    paragraphs:[
      'A one-step method has a local defect measured by starting that step from exact data and comparing one numerical update with the exact value one step later. Euler’s local defect is $O(h^2)$ for a smooth solution. Over a fixed interval of length $T$, about $T/h$ steps occur. If earlier perturbations remain controlled, these defects accumulate to a global $O(h)$ error. A fourth-order method has local $O(h^5)$ and global $O(h^4)$ under the corresponding smoothness and stability conditions.',
      'For decay $y^{\\prime}=-ay$ with $a>0$ and $h>0$, Euler multiplies by $1-ah$ each step. The exact flow multiplies by $e^{-ah}$, a positive number below one. Euler values decay in magnitude only when $|1-ah|<1$, or $0<ah<2$. Nonnegative updates from nonnegative data need the tighter condition $ah\\le1$. A calculation can therefore be stable while alternating sign, and a method can be high order while still having a finite stability region.',
      'To measure order, compare solutions at a common final time using $N$, $2N$, and $4N$ steps. For an error approximately $Ch^p$ with nonzero leading coefficient $C$, the coarser-step error magnitude divided by the next finer-step error magnitude approaches $2^p$. This is evidence about the method on the tested problem; it is not a proof of the general order and may mislead when an endpoint error cancels. Check a trajectory-wide error, a known exact case, and a physically derived invariant when possible. Count rate evaluations when comparing methods with different costs per step.'
    ],
    worked:{"problem":"Classify Euler on $y^{\\prime}=-4y$ with $y(0)=1$ for $h=0.4$.","steps":["The multiplier is $1-4(0.4)=-0.6$, so successive values from $y_0=1$ are $-0.6$, $0.36$, $-0.216$.","Because $|-0.6|<1$, magnitudes decay, but the exact $e^{-4t}$ remains positive."],"answer":"The method is asymptotically stable at $h=0.4$ but does not preserve positivity and is inaccurate for the first step."},
    questions:[{question:'Why is Euler globally first order rather than second order?',type:'Proof',hint:'How many steps cover a fixed interval?',solution:'Its $O(h^2)$ local defects occur across about $1/h$ steps. Under controlled propagation they accumulate to $O(h)$ global error.'},{question:'For $y^{\\prime}=-10y$, give the Euler stability and positivity ranges.',type:'Fluency',hint:'Use multiplier $1-10h$.',solution:'Decay in magnitude requires $0<h<0.2$; nonnegative updates from nonnegative data require $0<h\\le0.1$.'}]}
};

Object.assign(depth, {
  '01': {
    title:'Domains are part of the function, not small print',
    paragraphs:[
      'A real-valued function is specified by a domain as well as a rule. The expression $\\frac{1}{x-2}$ defines a function only on a set that excludes 2. Multiplying that expression by $x-2$ produces 1 at every permitted input, but does not assign the original function a value at 2. Two formulas can agree on all inputs in one domain and still define different functions when their domains differ. This distinction becomes decisive when we discuss holes and continuity.',
      'Composition makes domain restrictions propagate. For $f(u)=\\sqrt{u}$ and $g(x)=3-x^2$, the composition $(f\\circ g)(x)=\\sqrt{3-x^2}$. Its real domain is determined by $3-x^2\\ge0$, so $-\\sqrt{3}\\le x\\le\\sqrt{3}$. It is not enough that $g$ itself accepts every real input: its output must land in the domain of $f$. For the reverse composition $g\\circ f$, the rule is $(g\\circ f)(x)=3-x$ and the domain is $x\\ge0$. The same pair of functions can yield different formulas and different domains when their order is reversed.',
      'An inverse requires one-to-one behavior on its chosen domain. Squaring is not invertible on all real numbers because 2 and −2 both map to 4. Restrict $x^2$ to $[0,\\infty)$ and its inverse is $\\sqrt{x}$; restrict it to $(-\\infty,0]$ and its inverse is $-\\sqrt{x}$. Whenever a solution says “take the square root,” check whether it silently chose a branch. A graph, algebraic rule, domain and range should tell the same story.'
    ],
    worked:{problem:'Find the real domain of $h(x)=\\frac{\\sqrt{5-x}}{x^2-1}$.',steps:['The square root needs $5-x\\ge0$, giving $x\\le5$.','The denominator cannot vanish, so $x\\ne-1$ and $x\\ne1$. Intersect the restrictions.'],answer:'The domain is $(-\\infty,5]\\setminus\\{-1,1\\}$.'},
    questions:[{question:'Why is $\\frac{x^2-1}{x-1}$ not the same function as $x+1$ on $\\mathbb R$?',type:'Interpretation',hint:'Inspect $x=1$.',solution:'The quotient is undefined at $x=1$, while $x+1$ has value $2$ there. They agree only on the quotient’s domain, $\\mathbb R\\setminus\\{1\\}$.'},{question:'Find the domain of $\\ln(4-x^2)$.',type:'Fluency',hint:'The logarithm needs a strictly positive input.',solution:'$4-x^2>0$, so $-2<x<2$. The endpoints are excluded because $\\ln 0$ is undefined.'}]},
  '02': {
    title:'Radians connect geometry to the derivative of sine',
    paragraphs:[
      'On the unit circle, an angle $\\theta$ measured in radians equals the length of its subtended arc. This is why the small-angle ratio $\\frac{\\sin\\theta}{\\theta}$ approaches 1. For $0<\\theta<\\pi/2$, comparing a triangle inside the sector with the sector and an outer tangent triangle gives $\\sin\\theta<\\theta<\\tan\\theta$. Dividing by $\\sin\\theta$ and rearranging gives $\\cos\\theta<\\frac{\\sin\\theta}{\\theta}<1$. Both bounds approach 1 as $\\theta\\to0$, and symmetry handles negative angles. The squeeze theorem turns the geometry into a limit.',
      'Using the sine addition formula, $\\frac{\\sin(x+h)-\\sin x}{h}=\\sin x\\,\\left[\\frac{\\cos h-1}{h}\\right]+\\cos x\\,\\left[\\frac{\\sin h}{h}\\right]$. The second bracket approaches 1. The first approaches zero, for example because $1-\\cos h=2\\sin^2(h/2)$ and $\\frac{\\sin(h/2)}{h/2}$ stays bounded near zero. Thus $\\frac{d}{dx}\\sin x=\\cos x$ when $x$ is in radians. In degrees, the inner conversion $\\pi x/180$ inserts $\\pi/180$ into the derivative. The familiar derivative table therefore encodes a choice of angular unit.',
      'Units are a useful error detector. A physical argument to sine must be dimensionless: $\\sin(\\omega t)$ is valid when angular frequency $\\omega$ has units of radians per second and $t$ has seconds. Adding a length to a time is not meaningful, and placing a raw length inside a logarithm needs a reference scale. Scaling and coordinate choices often reveal a modeling error before any calculus begins.'
    ],
    worked:{problem:'Differentiate $s(t)=3\\sin(2t)$ metres, with $t$ in seconds and 2 measured in inverse seconds.',steps:['The inner phase $2t$ is dimensionless. The derivative of sine is cosine times the inner rate 2.','Multiply by the 3 metre amplitude: $s^{\\prime}(t)=6\\cos(2t)$ metres per second.'],answer:'The velocity is $6\\cos(2t)\\,\\mathrm{m/s}$; its maximum magnitude is $6\\,\\mathrm{m/s}$.'},
    questions:[{question:'What is $\\frac{d}{dx}\\sin(x^\\circ)$ when $x$ is a numerical degree measure?',type:'Fluency',hint:'Convert $x^\\circ$ to $\\pi x/180$ radians.',solution:'Write $\\sin(x^\\circ)=\\sin(\\pi x/180)$. The chain rule then gives $\\frac{\\pi}{180}\\cos(\\pi x/180)$, rather than simply $\\cos(x^\\circ)$.'},{question:'Why is $\\ln(3\\,\\mathrm{m})$ not a dimensionally complete expression?',type:'Interpretation',hint:'What happens if metres are replaced by centimetres?',solution:'A logarithm needs a dimensionless ratio, such as $\\ln(L/L_0)$. Otherwise changing units changes the numerical argument and the claimed result.'}]},
  '03': {
    title:'A numerical experiment can have two kinds of error',
    paragraphs:[
      'Approximation error comes from replacing a mathematical quantity by a nearby formula. Floating-point error comes from storing and operating on finite-precision numbers. For the forward difference $\\frac{f(x+h)-f(x)}{h}$, Taylor expansion suggests truncation error typically of order $h$ when $f$ is sufficiently smooth. But when $h$ is tiny, the two function values nearly agree; subtracting their rounded representations loses significant digits, and division by $h$ magnifies the loss. Reducing $h$ helps one error and can worsen the other.',
      'For $f(x)=\\sqrt{x}$ at $x=1$, the forward quotient is $\\frac{\\sqrt{1+h}-1}{h}$. Rationalizing gives $\\frac{1}{\\sqrt{1+h}+1}$ for $h\\ge-1$ and $h\\ne0$. These expressions are mathematically equal, yet the rationalized form avoids subtraction of nearly equal numbers. The visual investigation lets you watch the direct formula break down near machine precision. At $h$ so small that $1+h$ rounds to 1, the direct quotient is exactly zero in floating-point arithmetic even though the derivative is $1/2$.',
      'A credible computation reports the formula, domain, step sizes, reference value or independent check, and a tolerance justified by the task. Absolute error $|\\text{estimate}-\\text{truth}|$ is useful near zero; relative error $\\frac{|\\text{estimate}-\\text{truth}|}{|\\text{truth}|}$ is undefined when the truth is zero. Output agreement at several steps is evidence, not a proof that an implementation or model is correct. When an exact answer exists, use it to calibrate the experiment before moving to unknown cases.'
    ],
    worked:{"problem":"Compare two ways to compute the derivative of $\\sqrt{x}$ at $x=1$ for $h=10^{-8}$.","steps":["At $h=10^{-8}$, JavaScript Number evaluation of $(\\sqrt{1+h}-1)/h$ gives approximately $0.4999999969612645$; subtracting nearly equal rounded numbers loses digits.","Rationalization gives the mathematically equal finite-$h$ quotient $1/(\\sqrt{1+h}+1)$, which evaluates to approximately $0.49999999875$.","The exact derivative is $0.5$. The rationalized finite difference still has a step-size error of about $1.25\\times10^{-9}$; here it avoids the larger cancellation error."],"answer":"At $h=10^{-8}$, the rationalized value $0.49999999875$ is closer to the derivative $0.5$ than the direct JavaScript Number result $0.4999999969612645$."},
    questions:[{question:'Why can relative error be misleading when the exact answer is near zero?',type:'Interpretation',hint:'What appears in its denominator?',solution:'It divides absolute error by the magnitude of the exact answer. Near zero this ratio can be huge or undefined even when the absolute difference is small.'},{question:'Does agreement between $h$ and $h/2$ certify a numerical derivative?',type:'Interpretation',hint:'Could the same systematic error affect both?',solution:'No. Both values might share cancellation, a wrong function, or a wrong implementation. Compare with a known case and inspect convergence across a range of $h$.'}]},
  '06': {
    title:'The chain rule tracks a change through two maps',
    paragraphs:[
      'Let $u=g(x)$ and $y=f(u)$. A small input change $\\Delta x$ causes $\\Delta u=g(x+\\Delta x)-g(x)$, then $\\Delta y=f(u+\\Delta u)-f(u)$. When the intermediate change is nonzero, $\\frac{\\Delta y}{\\Delta x}=\\frac{\\Delta y}{\\Delta u}\\frac{\\Delta u}{\\Delta x}$. As $\\Delta x\\to0$, differentiability of $g$ makes $\\Delta u\\to0$; differentiability of $f$ at $u$ and $g$ at $x$ gives $(f\\circ g)^{\\prime}(x)=f^{\\prime}(g(x))g^{\\prime}(x)$. A careful proof handles cases where $\\Delta u=0$ by writing the differentiability remainders directly. The rate multiplies because the output change passes through both stages.',
      'Apply this to $\\sin(x^2)$. The inner rate is $2x$; the outer derivative evaluated at $u=x^2$ is $\\cos(x^2)$. Their product is $2x\\cos(x^2)$. Substituting $x$ for $u$ in the outer derivative would produce $2x\\cos x$, which differentiates a different function. The visual tangent shows how the product changes across the domain, including places where either factor vanishes.',
      'The same reasoning extends to compositions of three or more maps and to inverse functions. If $f$ is continuously differentiable near $a$ with $f^{\\prime}(a)\\ne0$, then it has a differentiable local inverse on a sufficiently small interval, and $(f^{-1})^{\\prime}(f(a))=\\frac{1}{f^{\\prime}(a)}$. The nonzero condition matters: $x^3$ has an inverse cube-root function $x^{1/3}$, but its derivative at zero is not finite because $f^{\\prime}(0)=0$. Write intermediate variables when a nested expression is easy to misread.',
      'Before applying a differentiation rule, record the domain of the original composition. For a logarithm of an inner expression, the inner expression must be positive; for a reciprocal it must be nonzero; for an inverse trigonometric function the input must lie in its permitted domain. The formal derivative can have a larger algebraic domain than the function it came from, so simplifying the answer must not add forbidden points. For example, $\\ln(x^2)$ has derivative $2/x$ on $x\\ne0$; the original logarithm excludes zero. At a boundary, ask whether an ordinary two-sided derivative, a one-sided derivative, or no finite derivative is the right claim.',
      'The chain rule is also a unit check. If an inner map converts time to distance and an outer map converts distance to energy, multiplying their derivatives gives energy per time. A missing inner factor has both the wrong numerical value and the wrong units. This is useful when variables have physical meanings: name the intermediate quantity, calculate its rate with respect to the input, calculate the outer rate with respect to that intermediate quantity, and multiply. When the inner derivative vanishes, the composite derivative may vanish even if the outer derivative does not. Conversely, an undefined outer derivative can sometimes be masked by a vanishing inner change, so the standard chain-rule hypotheses should be checked before quoting the formula.',
    ],
    worked:{problem:'Differentiate $\\ln(1+x^2)$ on its real domain.',steps:['The inner map $u=1+x^2>0$ has derivative $2x$ for every real $x$.','The outer map $\\ln u$ has derivative $1/u$. Multiply and substitute back.'],answer:'$\\frac{d}{dx}\\ln(1+x^2)=\\frac{2x}{1+x^2}$, defined for all real $x$.'},
    questions:[{question:'Differentiate $e^{\\sin(3x)}$.',type:'Fluency',hint:'Use three nested maps.',solution:'Apply the chain rule from the outside inward: the derivative is $3e^{\\sin(3x)}\\cos(3x)$, including the inner factor $3$.'},{question:'Why does the inverse-derivative formula fail for $f(x)=x^3$ at $x=0$?',type:'Interpretation',hint:'Inspect $f^{\\prime}(0)$.',solution:'$f^{\\prime}(0)=0$, so the reciprocal formula would divide by zero. The inverse $x^{1/3}$ has an unbounded difference quotient at zero.'}]},
  '07': {
    title:'A differential is a model with a range of trust',
    paragraphs:[
      'At a measured input $a$, the linearization $L(a+h)=f(a)+f^{\\prime}(a)h$ predicts a changed output. The differential $dy=f^{\\prime}(a)\\,dx$ is the linear part of the change, with $dx=h$; the actual difference is $f(a+h)-f(a)=dy+r(h)$, where $r(h)/h\\to0$ as $h\\to0$. This remainder condition explains why the approximation improves as $|h|$ shrinks. It does not claim a fixed percentage accuracy for every $h$ or every function.',
      'For a sphere with radius $r>0$, volume is $V=4\\pi r^3/3$. A small radius error $dr$ produces $dV=4\\pi r^2\\,dr$. Dividing by $V$ gives $dV/V=3\\,dr/r$. Thus a roughly $1\\%$ radius error creates a roughly $3\\%$ volume error for sufficiently small relative changes. The exact ratio is $[(r+dr)^3-r^3]/r^3=3q+3q^2+q^3$, where $q=dr/r$ and $r+dr>0$. The omitted terms show how the linear estimate changes when the error is no longer tiny.',
      'Sensitivity must be interpreted with units and domain. The derivative of volume with respect to radius has units of area, so multiplying by a length error yields a volume error. Relative sensitivity, also called elasticity in some contexts, removes the units: $(r/V)\\,dV/dr=3$. Near a zero output, relative error can be inappropriate; an absolute error budget may be more meaningful. State the operating point and the allowed input range when using a tangent approximation.'
    ],
    worked:{problem:'Estimate the volume change of a sphere of radius $10\\,\\mathrm{cm}$ when the radius rises by $0.1\\,\\mathrm{cm}$.',steps:['The differential is $dV=4\\pi r^2\\,dr=4\\pi(10)^2(0.1)=40\\pi\\,\\mathrm{cm}^3$.','The exact change is $\\frac{4\\pi}{3}[(10.1)^3-10^3]\\approx40.401333\\pi\\,\\mathrm{cm}^3$.'],answer:'The linear estimate is $40\\pi\\,\\mathrm{cm}^3$; it underestimates the exact increase by about $0.401333\\pi\\,\\mathrm{cm}^3$.'},
    questions:[{question:'What is the approximate relative error in a cube’s volume if its edge length has a $2\\%$ error?',type:'Modeling',hint:'$V=s^3$.',solution:'The differential relation $dV/V\\approx3\\,ds/s$ triples the relative input error, so a $2\\%$ edge error produces about a $6\\%$ volume error. Quadratic and cubic terms make the exact finite change differ slightly.'},{question:'Why can $dy$ be negative while the size of an error cannot?',type:'Interpretation',hint:'Distinguish signed change from magnitude.',solution:'$dy=f^{\\prime}(a)\\,dx$ predicts a signed output change. An error magnitude is $|\\text{actual}-\\text{predicted}|$ or an absolute uncertainty, which is nonnegative.'}]},
  '08': {
    title:'A theorem is only as strong as its hypotheses',
    paragraphs:[
      'The mean value theorem states that if $a<b$ and $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then some $c\\in(a,b)$ satisfies $f^{\\prime}(c)=[f(b)-f(a)]/(b-a)$. The theorem locates an instantaneous slope equal to the average slope; it does not tell us where $c$ is or that there is only one. Geometrically a tangent runs parallel to the secant through the endpoints. A jump or corner can break the conclusion because one of the hypotheses fails.',
      'A powerful consequence is monotonicity. If $f$ is continuous on an interval and differentiable in its interior with $f^{\\prime}(x)>0$ there, apply the theorem to any $a<b$ in that interval: $f(b)-f(a)=f^{\\prime}(c)(b-a)>0$. Thus $f$ is strictly increasing. If $f^{\\prime}=0$ everywhere in the interior, the function is constant on the interval. This conclusion is global across the interval and cannot be justified by looking at a few derivative samples. For $f(x)=x^3-3x$, $f^{\\prime}(x)=3x^2-3$ changes sign at $-1$ and $1$, dividing the real line into increasing, decreasing, increasing regions.',
      'Critical points are candidates, not answers. For an absolute extreme on a closed interval, compare values at interior points where $f^{\\prime}=0$ or $f^{\\prime}$ fails to exist and at both endpoints. The extreme value theorem guarantees maxima and minima when $f$ is continuous on a compact interval. On an open interval the extrema can be missed; $f(x)=x$ on $(0,1)$ has neither an attained maximum nor an attained minimum. The visual derivative sign plot helps organize candidates but does not replace endpoint checks.'
    ],
    worked:{problem:'Find the absolute extrema of $f(x)=x^3-3x$ on $[-2,2]$.',steps:['$f^{\\prime}(x)=3x^2-3$ vanishes at $x=-1$ and $x=1$, both inside the interval.','Evaluate $f(-2)=-2$, $f(-1)=2$, $f(1)=-2$, and $f(2)=2$.'],answer:'The absolute maximum is $2$ at $x=-1$ and $x=2$; the absolute minimum is $-2$ at $x=-2$ and $x=1$.'},
    questions:[{question:'Can the mean value theorem be applied to $|x|$ on $[-1,1]$?',type:'Interpretation',hint:'Check differentiability at zero.',solution:'No. $|x|$ is continuous on the closed interval but not differentiable at zero, an interior point.'},{question:'If $f^{\\prime}(x)=0$ at a point, must it be an extremum?',type:'Interpretation',hint:'Try $x^3$ at zero.',solution:'No. $x^3$ has derivative zero at zero but increases through the point; it is a stationary inflection point.'}]},
  '09': {
    title:'Model first, then optimize, then check the boundary',
    paragraphs:[
      'An optimization calculation starts with a feasible set and an objective. For a rectangle of perimeter $8$, let its width be $w$ and length $4-w$. Nondegenerate rectangles require $0<w<4$; the closed model interval $0\\le w\\le4$ also includes the two zero-area boundary cases. Area is $A(w)=w(4-w)$, a quadratic on that closed interval. Differentiating gives $A^{\\prime}(w)=4-2w$, so the only interior critical point is $w=2$. The boundary values are zero and $A(2)=4$, proving the square maximizes area among feasible nondegenerate rectangles.',
      'This proof depends on the stated constraint and the allowed boundary. If a design requires each side to be at least $0.5$, the feasible interval changes to $[0.5,3.5]$; the same maximum remains, but the smallest feasible area is now positive. If one side has a fixed cost different from the other, equal sides may no longer be optimal. The mathematical optimum answers the model, not every design question in the world.',
      'Root-finding enters when the stationarity equation cannot be solved conveniently. Newton’s method uses a tangent to update $x_{n+1}=x_n-f(x_n)/f^{\\prime}(x_n)$ when $f^{\\prime}(x_n)\\ne0$; it can fail if the derivative is zero or if the update leaves a valid region. Bisection needs a continuous function with opposite signs at bracket endpoints; it retains a root bracket and halves its width each step. A robust analysis states the domain, checks a bracket, and verifies the candidate against endpoints and model assumptions.'
    ],
    worked:{problem:'Maximize revenue $R(p)=p(100-2p)$ for $0\\le p\\le50$.',steps:['Expand $R(p)=100p-2p^2$ and differentiate: $R^{\\prime}(p)=100-4p$. The interior critical price is $p=25$.','Check $R(0)=0$, $R(25)=1250$, and $R(50)=0$. The quadratic is continuous on the closed interval.'],answer:'Within this demand model, price $25$ gives maximum revenue $1250$ in the chosen monetary units.'},
    questions:[{question:'Why does solving $A^{\\prime}(w)=0$ not finish a closed-interval optimization?',type:'Interpretation',hint:'Where else can an absolute extreme occur?',solution:'Absolute extrema may occur at endpoints or at points where the derivative is undefined. All feasible candidates must be compared.'},{question:'What hypothesis makes bisection’s sign bracket reliable?',type:'Interpretation',hint:'Name the theorem behind the guaranteed root.',solution:'Continuity on the bracket plus opposite endpoint signs; the intermediate value theorem then guarantees a root inside.'}]},
  '12': {
    title:'Integration methods are inverse rules with conditions',
    paragraphs:[
      'Substitution reverses the chain rule. If $F^{\\prime}=f$ and $u=g(x)$ is differentiable, then $\\frac{d}{dx}F(g(x))=f(g(x))g^{\\prime}(x)$. Thus $\\int f(g(x))g^{\\prime}(x)\\,dx=F(g(x))+C$ on an interval where all expressions are defined. For a definite integral, change both bounds from $x$-values to $u$-values. The derivative factor and the transformed bounds are part of the same operation; changing only one creates a mismatched integral.',
      'Integration by parts reverses the product rule: $\\int u\\,dv=uv-\\int v\\,du$. It is useful when one factor becomes simpler after differentiation and the other has an accessible antiderivative. The choice of $u$ and $dv$ is a strategy, not a theorem; a poor choice may make the remaining integral harder. Different valid antiderivatives can differ by a constant on a connected interval, so derivative checking is a clean way to verify a proposed result.',
      'An antiderivative need not be expressible with the elementary functions in a course’s toolkit. For example, $e^{-x^2}$ has no elementary antiderivative, though its definite integrals exist and can be approximated numerically. Failure to find a substitution is not proof of impossibility. Before choosing a technique, simplify algebra, inspect the domain, and decide whether the task asks for an exact expression, a definite value, or a controlled approximation.'
    ],
    worked:{problem:'Evaluate $\\int_0^1\\frac{2x}{1+x^2}\\,dx$.',steps:['Set $u=1+x^2$, so $du=2x\\,dx$. The $x$-bounds $0$ and $1$ become $u$-bounds $1$ and $2$.','The integral becomes $\\int_1^2\\frac{du}{u}=[\\ln u]_1^2=\\ln2$.'],answer:'The exact value is $\\ln2$; differentiating $\\ln(1+x^2)$ gives the integrand.'},
    questions:[{question:'Evaluate $\\int_0^{\\pi/2}\\sin x\\cos x\\,dx$ by substitution.',type:'Fluency',hint:'Set $u=\\sin x$ and change the bounds.',solution:'$du=\\cos x\\,dx$ and $u$ runs from $0$ to $1$, so the integral is $\\int_0^1u\\,du=\\frac12$.'},{question:'Why is $\\int\\frac1x\\,dx$ written $\\ln|x|+C$ rather than $\\ln x+C$ on its real domain?',type:'Interpretation',hint:'What happens when $x<0$?',solution:'$1/x$ is defined on negative inputs too. The derivative of $\\ln|x|$ is $1/x$ on each interval $x<0$ and $x>0$; $\\ln x$ is not real-valued for $x<0$. Each connected interval can have its own integration constant.'}]},
  '13': {
    title:'The differential element carries the geometry and units',
    paragraphs:[
      'A volume integral is built from cross-sectional area times thickness. If a solid has area $A(x)$ at position $x$ over $[a,b]$, then a thin slice contributes about $A(x)\\Delta x$ and $V=\\int_a^b A(x)\\,dx$. Rotating $y=\\sqrt x$ on $[0,b]$ around the $x$-axis gives disks of radius $\\sqrt x$, so $A(x)=\\pi x$ and $V=\\int_0^b\\pi x\\,dx=\\pi b^2/2$. The visual diagram plots area against position; the shaded area under that curve represents volume, not a two-dimensional slice of the solid itself.',
      'Shells reorganize the same solid by cylindrical layers. A shell has circumference $2\\pi r$, height $h(r)$, and thickness $dr$, giving $dV\\approx2\\pi r h(r)\\,dr$. Washers use area $\\pi(R^2-r^2)$ times thickness $dx$ when a slice has an outer and inner radius. Choosing a slice direction is part of the setup: it determines the variable, radius, height, and bounds. A plausible looking formula with a missing square or missing radius factor has wrong units.',
      'The same dimensional check helps in physical applications. A force $F(x)$ in newtons integrated over displacement $dx$ in metres produces work in joules. A linear mass density $\\lambda(x)$ in kilograms per metre integrated over length produces kilograms. A center of mass divides a moment integral, with mass times position units, by total mass. State what each small piece represents before taking a limit, and check that the final units match the question.'
    ],
    worked:{problem:'Find the work to stretch a spring from $x=0$ to $x=0.2\\,\\mathrm m$ if $F(x)=50x$ newtons with $x$ in metres.',steps:['A thin displacement $dx$ contributes $dW=F(x)\\,dx=50x\\,dx$ joules.','Integrate: $W=\\int_0^{0.2}50x\\,dx=25(0.2)^2=1$ joule.'],answer:'The required work is $1\\,\\mathrm J$, assuming the linear force law applies on the full interval.'},
    questions:[{question:'What is the disk area when $y=\\sqrt x$ is rotated about the $x$-axis?',type:'Fluency',hint:'Square the radius.',solution:'The disk radius is $\\sqrt x$. Squaring it in $A=\\pi r^2$ gives $A(x)=\\pi(\\sqrt x)^2=\\pi x$ square units.'},{question:'What units result from integrating density in $\\mathrm{kg/m^3}$ over volume in $\\mathrm{m^3}$?',type:'Interpretation',hint:'Multiply integrand units by volume units.',solution:'The volume units cancel: $(\\mathrm{kg/m^3})\\cdot\\mathrm{m^3}=\\mathrm{kg}$. Thus the density integral has kilograms, the required units of mass.'}]},
  '16': {
    title:'Convergence tests also give error decisions',
    paragraphs:[
      'The alternating series test says $\\sum_{n=1}^\\infty(-1)^{n+1}b_n$ converges when $b_n$ is nonnegative, decreases eventually, and tends to zero. Once the decreasing portion has begun, the sum lies between consecutive partial sums and the error after $N$ terms is at most the next magnitude $b_{N+1}$. This is a usable stopping guarantee: choose $N$ in that portion so $b_{N+1}$ is below the requested tolerance. It does not claim the absolute series $\\sum b_n$ converges.',
      'For the alternating harmonic series, $b_n=1/n$ meets the conditions and the sum is $\\ln2$, but $\\sum_{n=1}^\\infty1/n$ diverges. This is conditional convergence. Rearranging a conditionally convergent series can change its sum; a numerical loop that changes term order may therefore change the result, even in exact arithmetic. By contrast, absolute convergence allows rearrangement without changing the sum. Floating-point summation adds another source of order sensitivity, so keep the mathematical and computational effects separate.',
      'The ratio and root tests are strong for geometric-like decay but inconclusive when their limiting ratio or root equals $1$. The harmonic series and $\\sum_{n=1}^\\infty1/n^2$ both have ratio limits $1$ while one diverges and the other converges. Select a test based on the term structure, then state the conclusion it actually supports. A software loop that stops because terms are tiny needs a remainder bound; tiny terms alone can accumulate into a large remaining tail.'
    ],
    worked:{problem:'How many terms of $\\sum_{n=1}^\\infty(-1)^{n+1}/n$ guarantee error below $0.01$?',steps:['The alternating remainder after $N$ terms is at most $1/(N+1)$.','For a strict bound below $0.01$ require $N+1>100$, so $N\\ge100$. At $N=100$ the next magnitude is $1/101<0.01$.'],answer:'$100$ terms suffice under the alternating-series remainder theorem.'},
    questions:[{question:'Does ratio-test limit $1$ imply divergence?',type:'Interpretation',hint:'Compare $1/n$ and $1/n^2$.',solution:'No. The ratio test is inconclusive at limit $1$; these two series have opposite convergence outcomes.'},{question:'Why is an alternating harmonic sum conditionally convergent?',type:'Proof',hint:'Test the absolute values.',solution:'The alternating series converges by decreasing terms tending to zero, while the absolute-value series $\\sum_{n=1}^\\infty1/n$ diverges.'}]},
  '18': {
    title:'Tracing a curve is different from describing its image',
    paragraphs:[
      'A parametric curve supplies coordinates as functions of a parameter: $\\mathbf r(t)=(x(t),y(t))$. The image is the set of points traced, but the parameter also records order, direction, speed, and repeated visits. For $\\mathbf r(t)=(\\cos t,\\sin t)$, $0\\le t\\le2\\pi$, the image is the unit circle traced counterclockwise once. Replacing $t$ by $2t$ on the same interval traces that same circle twice, with twice the speed. An integral over a path must account for how many times the path is traversed.',
      'If $x^{\\prime}(t)$ and $y^{\\prime}(t)$ exist and are not both zero, the tangent vector is $(x^{\\prime}(t),y^{\\prime}(t))$ and speed is $\\sqrt{x^{\\prime}(t)^2+y^{\\prime}(t)^2}$. For $x,y\\in C^1([a,b])$, arc length on $[a,b]$ is $L=\\int_a^b\\sqrt{x^{\\prime}(t)^2+y^{\\prime}(t)^2}\\,dt$. The quotient $dy/dx=y^{\\prime}(t)/x^{\\prime}(t)$ is valid only where $x^{\\prime}(t)\\ne0$. A vertical tangent may occur where $x^{\\prime}(t)=0$ and $y^{\\prime}(t)\\ne0$. At a stationary parameter where both vanish, that quotient says nothing by itself; local geometry needs a separate analysis.',
      'Polar coordinates also encode tracing choices. Negative radii point in the opposite angular direction, and a polar curve may hit one geometric point at multiple parameter values. The polar area expression $\\frac12\\int_\\alpha^\\beta r(\\theta)^2\\,d\\theta$ accumulates swept area with multiplicity; it gives the geometric area $A$ of the intended region when the radial sweep covers that region once, with $r(\\theta)\\ge0$. Before calculating, sketch or sample enough of the trace to choose bounds that cover the intended region once. A visually closed loop is not proof that the selected interval has no retracing.'
    ],
    worked:{problem:'Find the length of $\\mathbf r(t)=(2\\cos t,2\\sin t)$ for $0\\le t\\le\\pi$.',steps:['Differentiate to $\\mathbf r^{\\prime}(t)=(-2\\sin t,2\\cos t)$. Speed is $\\sqrt{4\\sin^2t+4\\cos^2t}=2$.','Integrate speed: $L=\\int_0^\\pi2\\,dt=2\\pi$.'],answer:'The interval traces a semicircle of radius $2$ with length $2\\pi$.'},
    questions:[{question:'What changes if the unit circle $\\mathbf r(t)=(\\cos t,\\sin t)$ is traced on $0\\le t\\le4\\pi$?',type:'Interpretation',hint:'Count complete revolutions.',solution:'The image is still the unit circle, but it is traced twice; the accumulated arc length doubles to $4\\pi$.'},{question:'When is $dy/dx=y^{\\prime}(t)/x^{\\prime}(t)$ invalid?',type:'Interpretation',hint:'Inspect the denominator.',solution:'It is invalid when $x^{\\prime}(t)=0$. A vertical tangent may exist if $y^{\\prime}(t)\\ne0$; if both vanish, further analysis is needed.'}]},
  '19': {
    title:'A changing direction is real acceleration',
    paragraphs:[
      'For vector position $\\mathbf r(t)$, velocity $\\mathbf v=\\mathbf r^{\\prime}$ and acceleration $\\mathbf a=\\mathbf r^{\\prime\\prime}$. Speed is the length $|\\mathbf v|$, while velocity includes direction. Uniform circular motion $\\mathbf r(t)=(R\\cos\\omega t,R\\sin\\omega t)$ with $R>0$ and constant $\\omega$ has $\\mathbf v=R\\omega(-\\sin\\omega t,\\cos\\omega t)$, whose length $R|\\omega|$ is constant. Yet $\\mathbf a=-R\\omega^2(\\cos\\omega t,\\sin\\omega t)$ points inward and has magnitude $R\\omega^2$. The visual arrows display these directions while the readout states their actual magnitudes.',
      'The dot product separates speed change from turning. Differentiate $\\mathbf v\\cdot\\mathbf v=|\\mathbf v|^2$ to obtain $2\\mathbf v\\cdot\\mathbf a=2|\\mathbf v|\\,d|\\mathbf v|/dt$ when speed is nonzero. Thus $\\mathbf v\\cdot\\mathbf a=0$ means instantaneous acceleration is perpendicular to velocity and the instantaneous rate of change of speed is zero, although the path may bend. In circular motion the radial acceleration is perpendicular to the tangent velocity at every time. A car turning at constant speed still accelerates and requires an inward force.',
      'Curvature measures turning per unit arc length. For a twice differentiable regular plane curve, $\\kappa=|x^{\\prime}y^{\\prime\\prime}-y^{\\prime}x^{\\prime\\prime}|/((x^{\\prime})^2+(y^{\\prime})^2)^{3/2}$. A circle of radius $R>0$ has $\\kappa=1/R$, independent of how quickly it is parametrized while its velocity stays nonzero. The normal acceleration magnitude is speed squared times curvature, giving $(R\\omega)^2/R=R\\omega^2$ for $\\omega\\ne0$. This connection separates path geometry from timing: changing nonzero $\\omega$ changes acceleration while leaving the circular image and its curvature fixed.'
    ],
    worked:{"problem":"A point moves on a circle of radius $3\\,\\mathrm m$ at constant angular speed $2\\,\\mathrm{rad/s}$. Find speed and acceleration magnitude.","steps":["Speed is $R\\omega=3\\cdot2=6\\,\\mathrm{m/s}$.","Inward acceleration magnitude is $R\\omega^2=3\\cdot4=12\\,\\mathrm{m/s^2}$.","Angular acceleration is zero, so there is no tangential acceleration; the total acceleration is the inward component."],"answer":"The speed is $6\\,\\mathrm{m/s}$ and the acceleration magnitude is $12\\,\\mathrm{m/s^2}$ toward the center."},
    questions:[{question:'Can acceleration be nonzero while speed is constant?',type:'Interpretation',hint:'Distinguish velocity direction from magnitude.',solution:'Yes. Uniform circular motion has constant speed but an inward acceleration that continuously changes velocity direction.'},{question:'What is the curvature of a circle of radius $5$?',type:'Fluency',hint:'Use geometry or $\\kappa=1/R$.',solution:'Its curvature is $1/5$ in inverse-length units, regardless of the traversal speed.'}]},
  '22': {
    title:'The Hessian describes shape; constraints decide the answer',
    paragraphs:[
      'At an interior critical point of a twice differentiable function $F(x,y)$, the Hessian records second-order variation. For $F=x^2+4y^2$, the Hessian is $\\operatorname{diag}(2,8)$, positive definite, so the origin is a strict local minimum. In fact $F\\ge0$ everywhere and equals zero only at the origin, making it a global minimum. For $G=x^2-y^2$, the Hessian has one positive and one negative eigenvalue, and the origin is a saddle: $G$ rises along the x-axis and falls along the y-axis.',
      'A zero Hessian determinant is inconclusive. $H=x^4+y^4$ has a strict minimum at the origin despite every second derivative there vanishing. $K=x^4-y^4$ has a saddle with the same zero Hessian. Higher-order terms or direct inequalities are then needed. Numerical contour plots can suggest a shape, but a proof checks all sufficiently nearby directions.',
      'On a closed bounded feasible region, global extrema may lie on the boundary even when interior critical points exist. Parameterize each smooth boundary piece, check its endpoints and corners, and compare all candidates. Lagrange multipliers can find constrained candidates where a smooth constraint has nonzero gradient, but the multiplier equation is a necessary condition under its hypotheses, not a guarantee of a maximum. The visual descent path illustrates how a numerical step size interacts with this geometry.'
    ],
    worked:{problem:'Find the extrema of $F(x,y)=x^2+y^2$ on the unit disk $x^2+y^2\\le1$.',steps:['The only interior critical point is $(0,0)$, where $F=0$.','On the boundary $x^2+y^2=1$, $F=1$ at every point. Compactness and continuity guarantee absolute extrema.'],answer:'The absolute minimum is $0$ at the center; the absolute maximum is $1$ everywhere on the boundary.'},
    questions:[{question:'Does a zero Hessian at a critical point imply no local extremum?',type:'Interpretation',hint:'Consider $x^4+y^4$.',solution:'No. $x^4+y^4$ has a strict local minimum at the origin, where its Hessian is zero.'},{question:'Why must the boundary be examined on a compact region?',type:'Interpretation',hint:'Could a global maximum occur there?',solution:'Yes. Interior stationarity only covers interior candidates; a continuous function can attain its global extreme on the boundary.'}]},
  '23': {
    title:'A double integral is weighted area, not just a nested symbol',
    paragraphs:[
      'Partition a planar region into small pieces of area $\\Delta A_i$. A double integral is the limit of sums $\\sum_i f(x_i,y_i)\\Delta A_i$ when the pieces shrink suitably and the function is integrable. For $f\\ge0$ this can represent volume under a surface, but signed values contribute signed volume. If $f$ is mass density per unit area, the same sum represents mass. The area factor is essential; a grid with $n$ squares on each side of the unit square has $n^2$ tiles, each area $1/n^2$.',
      'On a rectangle, a continuous $f$ can be integrated one coordinate at a time. For $x^2+y^2$ on $[0,1]^2$, integrate in $y$ first: $\\int_0^1(x^2+y^2)\\,dy=x^2+1/3$. Integrating that in $x$ gives $1/3+1/3=2/3$. Reversing the order gives the same answer because the function is continuous on a compact rectangle. Fubini’s theorem has broader forms, but when improper singularities or nonabsolute convergence appear, the conditions for changing order matter.',
      'For a nonrectangular region, bounds describe its geometry. The triangle $0\\le y\\le x\\le1$ can be written $\\int_0^1\\int_0^x f(x,y)\\,dy\\,dx$ or $\\int_0^1\\int_y^1 f(x,y)\\,dx\\,dy$. Drawing the region before reversing order prevents an incorrect rectangular domain. A numerical grid can approximate the integral, but cells intersecting a curved boundary need a deliberate inclusion or weighting rule.'
    ],
    worked:{problem:'Evaluate $\\iint_D(x+y)\\,dA$ for $D=\\{(x,y):0\\le y\\le x\\le1\\}$.',steps:['Use $y$ from $0$ to $x$ and $x$ from $0$ to $1$: $\\int_0^1\\int_0^x(x+y)\\,dy\\,dx$.','The inner integral is $x^2+x^2/2=3x^2/2$. The outer integral is $(3/2)(1/3)=1/2$.'],answer:'The integral is $1/2$ in units of integrand times area.'},
    questions:[{question:'Reverse the order for $0\\le y\\le x\\le1$.',type:'Fluency',hint:'Fix $y$, then determine $x$.',solution:'The same region is $0\\le y\\le1$ and $y\\le x\\le1$, so write $\\int_0^1\\int_y^1 f(x,y)\\,dx\\,dy$.'},{question:'What is the exact integral of $x^2+y^2$ over the unit square?',type:'Fluency',hint:'Separate the two terms.',solution:'Integrating $x^2$ over the square contributes $1/3$, and integrating $y^2$ contributes another $1/3$. Adding gives the exact total $2/3$.'}]},
  '24': {
    title:'A coordinate change changes area as well as labels',
    paragraphs:[
      'Polar coordinates set $x=r\\cos\\theta$ and $y=r\\sin\\theta$. Their coordinate grid is not made of equal-area rectangles: a small angular change $d\\theta$ spans an arc about $r\\,d\\theta$ long, and a small radial change $dr$ adds a thin thickness. The area element is therefore $dA=r\\,dr\\,d\\theta$. Equivalently, the Jacobian determinant of the map $(r,\\theta)\\mapsto(x,y)$ is $r$. At $r=0$ the angular coordinate is not unique; the zero Jacobian there is a coordinate degeneracy, not an area loss across a region of positive area.',
      'For a disk of radius $R$, integrate $1$ with the correct area element: $\\int_0^{2\\pi}\\int_0^R r\\,dr\\,d\\theta=\\pi R^2$. Without the factor $r$ the formula would give $2\\pi R$, which scales like a length and fails a units check. For a general change of variables, use the absolute value of the Jacobian determinant in an ordinary unsigned area or volume integral; orientation may change sign while physical area does not.',
      'The transformed domain is as important as the determinant. A disk becomes $0\\le r\\le R$, $0\\le\\theta\\le2\\pi$; the two angular endpoints represent the same boundary ray, of zero area. A sector, annulus, or offset region needs different bounds. In probability, a joint density must integrate to $1$ over its actual support. Applying polar coordinates to a radially symmetric density often simplifies the function, yet forgetting the factor $r$ changes both normalization and every derived probability.'
    ],
    worked:{problem:'Find the area of the annulus $1\\le x^2+y^2\\le4$ using polar coordinates.',steps:['The squared-radius condition becomes $1\\le r\\le2$, with $0\\le\\theta\\le2\\pi$.','Integrate $\\int_0^{2\\pi}\\int_1^2 r\\,dr\\,d\\theta=2\\pi\\cdot(4-1)/2=3\\pi$.'],answer:'The annulus area is $3\\pi$ square units.'},
    questions:[{question:'What is the polar area element?',type:'Fluency',hint:'A thin angular wedge grows with radius.',solution:'$dA=r\\,dr\\,d\\theta$ for $r\\ge0$, where $r$ is the current integration radius.'},{question:'Why is a determinant’s absolute value used for unsigned area?',type:'Interpretation',hint:'Can a reflection make the determinant negative?',solution:'A negative determinant reverses orientation but does not create negative physical area. Its magnitude gives local area scaling.'}]},
  '25': {
    title:'A potential turns path work into endpoint data',
    paragraphs:[
      'For a vector field $\\mathbf F=\\nabla\\phi$, the chain rule along a differentiable path $\\mathbf r(t)$ gives $\\frac{d}{dt}\\phi(\\mathbf r(t))=\\nabla\\phi(\\mathbf r(t))\\cdot\\mathbf r^{\\prime}(t)$. Integrating from start to end yields $\\int_C\\mathbf F\\cdot d\\mathbf r=\\phi(\\text{end})-\\phi(\\text{start})$. This fundamental theorem for line integrals explains path independence. In the visual investigation, $\\mathbf F=(2x,2y)$ is the gradient of $x^2+y^2$, so any piecewise smooth path from $(0,0)$ to $(1,1)$ has work $2$.',
      'A curl test needs domain care. In a simply connected open region, a continuously differentiable planar field with zero scalar curl is conservative under standard conditions. On the punctured plane $\\mathbb R^2\\setminus\\{(0,0)\\}$, $\\mathbf F=(-y/(x^2+y^2),x/(x^2+y^2))$ has zero curl away from the origin but circulation $2\\pi$ around a counterclockwise unit circle. The missing origin creates a hole; local curl information does not rule out circulation around it.',
      'Line integrals also depend on orientation. Reversing a path changes $\\int_C\\mathbf F\\cdot d\\mathbf r$ to its negative. If the path is closed and $\\mathbf F$ has a potential on a region containing it, the start and end agree and work is zero. Equal work along two selected paths is a useful check but not a proof of path independence for all possible paths. A domain, smoothness assumptions, and either a potential or an applicable theorem complete the argument.'
    ],
    worked:{problem:'Find the work of $\\mathbf F=(2x,2y)$ along any path from $(1,0)$ to $(0,2)$.',steps:['Recognize $\\mathbf F=\\nabla\\phi$ with $\\phi=x^2+y^2$.','Compute $\\phi(0,2)-\\phi(1,0)=4-1=3$.'],answer:'The work is $3$, independent of the route within $\\mathbb R^2$.'},
    questions:[{question:'What happens to a vector line integral when the path orientation reverses?',type:'Interpretation',hint:'Reverse the parameter limits.',solution:'Reversing the parameter changes $d\\mathbf r$ to its negative, so the vector line integral changes sign while the geometric path remains the same.'},{question:'Why can zero curl fail to imply a global potential on a punctured plane?',type:'Proof',hint:'A loop can surround the missing point.',solution:'The domain is not simply connected. The field $(-y/r^2,x/r^2)$, where $r^2=x^2+y^2$ and $r>0$, has zero curl away from the origin yet nonzero circulation around it.'}]},
  '26': {
    title:'Boundary theorems convert one integral into another',
    paragraphs:[
      'Green’s theorem relates circulation around a positively oriented, piecewise smooth boundary $C$ of a suitable planar region $D$ to the curl inside: $\\oint_C(P\\,dx+Q\\,dy)=\\iint_D(\\partial Q/\\partial x-\\partial P/\\partial y)\\,dA$. For $P=-y/2$ and $Q=x/2$, the curl is $1$, so counterclockwise circulation around a disk equals its area. The visual investigation changes the radius and shows the quadratic scaling on both sides.',
      'Orientation carries information. Reversing $C$ reverses the line integral, while the region integral remains positive when curl is $1$, so the standard statement must specify counterclockwise outer orientation. If $D$ has a hole, the inner boundary is oriented clockwise so that the region remains on the left while walking along the total boundary. A field singularity inside a circle prevents direct application of Green’s theorem to the full disk; excluding a small inner disk changes the boundary.',
      'Stokes’s theorem extends the circulation–curl relationship to surfaces in space. The divergence theorem instead relates outward flux through a closed surface to total divergence inside. They are not interchangeable: curl concerns local rotation, divergence local source or sink strength. Before applying one, identify what is being integrated, whether the boundary is closed, the chosen normal or traversal orientation, and where the field is differentiable.'
    ],
    worked:{problem:'Compute the counterclockwise circulation of $\\mathbf F=(-y/2,x/2)$ around $x^2+y^2=9$.',steps:['The scalar curl is $\\partial(x/2)/\\partial x-\\partial(-y/2)/\\partial y=1$.','The disk has area $\\pi\\cdot3^2=9\\pi$. Green’s theorem gives the same circulation.'],answer:'The counterclockwise circulation is $9\\pi$; clockwise traversal gives $-9\\pi$.'},
    questions:[{question:'Which orientation does Green’s theorem use on a simple outer boundary?',type:'Interpretation',hint:'Keep the region to your left.',solution:'Green’s theorem uses counterclockwise orientation on a simple outer boundary, so the enclosed region stays on the left during traversal.'},{question:'Why can Green’s theorem fail on a disk containing a field singularity?',type:'Interpretation',hint:'Check differentiability throughout the enclosed region.',solution:'The theorem’s regularity hypotheses do not hold at the singularity. One may need to remove that point and account for an inner boundary.'}]}
});

// Focused chapter-review repairs. Appending here keeps every earlier problem number stable.
depth['01'].questions.push({
  question:String.raw`Let $f(x)=0$ and $g(x)=x(x-1)(x+1)$, both with domain $\mathbb R$. They agree at $x=-1,0,1$. Does this prove that they are the same function?`,
  type:'Interpretation',
  hint:String.raw`Test another allowed input, such as $x=2$, and recall what equality of functions requires.`,
  solution:String.raw`At $x=2$, $f(2)=0$ while $g(2)=2(1)(3)=6$. The three matching samples do not prove equality. Two functions are equal only when their domains agree and their outputs agree at every input in that domain.`
});
depth['02'].questions.push({
  question:String.raw`Compare the exact identity $\sin^2\theta+\cos^2\theta=1$ with the small-angle rule $\sin\theta\approx\theta$. Test the latter at $\theta=\pi/2$, and explain its use at $1^\circ$.`,
  type:'Interpretation',
  hint:String.raw`Convert degrees to radians before comparing the angle with its sine.`,
  solution:String.raw`The Pythagorean identity holds exactly for every real angle. At $\theta=\pi/2$, $\sin\theta=1\ne\pi/2$, so the small-angle rule is not an identity. At $1^\circ=\pi/180$ radians, $\sin(1^\circ)\approx\pi/180$ because this radian angle is close to zero. Using the number $1$ as a degree measure in the approximation would be wrong.`
});
depth['03'].questions.push({
  question:String.raw`A plot samples $x=0,\frac14,\frac12,\frac34,1$ and joins its points. Let $f(x)=0$ on $[0,1]$ except that $f(\frac13)=1$. Would this plot establish continuity on $[0,1]$?`,
  type:'Interpretation',
  hint:String.raw`Inspect the input $\frac13$, which the plot never samples.`,
  solution:String.raw`All five sampled outputs are zero, so joining them draws a horizontal line. But $\lim_{x\to1/3}f(x)=0$ while $f(1/3)=1$. The function is discontinuous at the unsampled input. Finite samples cannot establish continuity throughout an interval.`
});
depth['04'].questions.push(
  {
    question:String.raw`Set $f(0)=0$ and $f(x)=\sin(1/x)$ for $x\ne0$. A finite-resolution plot is offered as evidence of continuity at zero. Use two sequences approaching zero to test that claim.`,
    type:'Proof',
    hint:String.raw`Use reciprocals of angles where sine equals $1$ and $-1$.`,
    solution:String.raw`The sequences $a_n=1/(\pi/2+2\pi n)$ and $b_n=1/(3\pi/2+2\pi n)$ both approach zero through nonzero inputs. Yet $f(a_n)=1$ and $f(b_n)=-1$ for every $n$. Thus the limit at zero does not exist and cannot equal $f(0)=0$; the plot cannot establish continuity.`
  },
  {
    question:String.raw`Let $f(x)=-1$ for $x<0$ and $f(x)=1$ for $x\ge0$. Since $f(-1)<0<f(1)$, must some $c\in[-1,1]$ satisfy $f(c)=0$?`,
    type:'Interpretation',
    hint:String.raw`Check the continuity hypothesis of the intermediate value theorem.`,
    solution:String.raw`No. Every output is either $-1$ or $1$, so zero is never attained. The function jumps at zero and is not continuous on $[-1,1]$. Opposite endpoint signs guarantee an intermediate zero only when the intermediate value theorem's continuity hypothesis holds.`
  }
);
depth['04'].questions.push(
  {
    question:String.raw`Let $f(x)=x^2$ on $\mathbb R$. For an arbitrary $\varepsilon>0$, find the greatest symmetric $\delta>0$ for which every $0<|x-2|<\delta$ implies $|x^2-4|<\varepsilon$. Prove both that your radius works and that every larger proposed radius fails. Compare it with $\min(1,\varepsilon/5)$.`,
    type:'Proof', lesson:6,
    hint:String.raw`Write $h=x-2$. Which side approaches the largest error as $|h|$ approaches $\delta$? The boundary itself is excluded. For a larger radius, choose a positive $h$ strictly between it and your candidate.`,
    solution:String.raw`For $0<|h|<\delta$, $|4h+h^2|\leq4|h|+h^2<4\delta+\delta^2$. The positive sequence $h_n=\delta(1-1/n)$, $n\geq2$, shows this upper bound is the supremum. Hence $4\delta+\delta^2\leq\varepsilon$ guarantees the required strict output inequality, including equality in the bound. Solving the quadratic gives the greatest radius $c=\sqrt{4+\varepsilon}-2=\varepsilon/(\sqrt{4+\varepsilon}+2)>0$. If $\delta>c$, choose $h=(c+\delta)/2$ and $x=2+h$. Then $0<h<\delta$ and $4h+h^2>4c+c^2=\varepsilon$, so the larger radius fails. The earlier radius is sufficient: when $0<\varepsilon<5$, $B(\varepsilon/5)=4\varepsilon/5+\varepsilon^2/25<\varepsilon$; at $5$ equality holds; above $5$, $B(1)=5<\varepsilon$. All inputs used are in $\mathbb R$.`
  },
  {
    question:String.raw`Set $\varepsilon=9/4$. Decide whether $\delta=1/2$ works even though the right boundary has output error $9/4$. Then test the larger proposal $\delta=11/20$ by giving an exact input strictly inside its band with output error greater than $9/4$. Does the failed proposal show that the limit is false? Explain the quantifiers.`,
    type:'Challenge', lesson:6,
    hint:String.raw`Check whether $x=2+\delta$ is eligible. For the larger radius, try a positive displacement between $1/2$ and $11/20$; compare exact fractions before drawing a conclusion about the limit.`,
    solution:String.raw`At $\delta=1/2$, $B(\delta)=4(1/2)+(1/2)^2=9/4$. The right boundary $x=5/2$ has that error, but $|x-2|=\delta$, so it is excluded. Every eligible input has strictly smaller error, hence this delta works. At $\delta=11/20=22/40$, take $h=21/40$ and $x=101/40$. Then $0<h<22/40$, while $|x^2-4|=3801/1600>3600/1600=9/4$. This defeats the larger proposal. It does not defeat the limit: the definition asks for at least one working delta for each positive epsilon, whereas a limit failure would require a fixed positive epsilon defeating every positive delta. For this epsilon, $1/2$ already works.`
  }
);
depth['05'].questions.push({
  question:String.raw`For $f(x)=x^2$ at $x=1$, compare the exact forward difference quotient with its binary64 evaluation using $h=2^{-54}$. Why does a smaller positive step fail to improve the computed derivative?`,
  type:'Interpretation',
  hint:String.raw`In binary64 arithmetic, $1+2^{-54}$ rounds to $1$ before the subtraction.`,
  solution:String.raw`In real arithmetic, $((1+h)^2-1)/h=2+h$, so the derivative is $2$. In binary64, the nonzero $h=2^{-54}$ is representable, but $1+h$ rounds to $1$; the evaluated numerator is then zero and the computed quotient is $0$. Rounding and cancellation can overwhelm the benefit of a smaller step.`
});
depth['06'].questions.push(
  {
    question:String.raw`Restrict $f(x)=\sin x$ to $[-\pi/2,\pi/2]$. Compare the value and derivative of $f^{-1}$ at input zero with those of the reciprocal function $1/f$ at zero.`,
    type:'Interpretation',
    hint:String.raw`An inverse reverses input and output; a reciprocal divides by the original output.`,
    solution:String.raw`On the stated interval sine is one-to-one, so $f^{-1}=\arcsin$ and $f^{-1}(0)=0$. Its derivative at zero is $1/\cos(0)=1$. The reciprocal is $1/\sin x$, which is undefined at zero because $\sin0=0$; it has neither a value nor a derivative there. The superscript $-1$ does not mean reciprocal.`
  },
  {
    question:String.raw`At zero, compute the symmetric difference $[|h|-|-h|]/(2h)$ for $h\ne0$. Does its limit prove that $|x|$ is differentiable at zero? Check both one-sided derivatives.`,
    type:'Interpretation',
    hint:String.raw`The central numerator vanishes even if the left and right slopes disagree.`,
    solution:String.raw`Since $|h|=|-h|$, every central quotient is zero. But the forward quotient $|h|/h$ tends to $1$ from the right and $-1$ from the left. The two-sided derivative therefore does not exist. Symmetric cancellation can conceal a corner.`
  }
);
depth['08'].questions.push({
  question:String.raw`A plotting program samples $x=0,\frac14,\frac12,\frac34,1$ and joins the points. Let $f(x)=x$ on $[0,1]$ except that $f(\frac13)=2$. Does the resulting plot verify the hypotheses of the mean value theorem on $[0,1]$? Check the unsampled input.`,
  type:'Interpretation',
  hint:String.raw`Every sampled point lies on $y=x$. Compare $\lim_{x\to1/3}f(x)$ with $f(1/3)$.`,
  solution:String.raw`The joined samples draw the straight line $y=x$, but $\lim_{x\to1/3}f(x)=1/3$ while $f(1/3)=2$. Thus $f$ is discontinuous, and therefore not differentiable, at the interior point $1/3$. The mean value theorem's continuity and differentiability hypotheses fail, so the plot cannot justify invoking it. Here $f'(c)=1$ does happen at other interior points; that coincidence does not establish the hypotheses.`
});
depth['10'].questions.push(
  {
    question:String.raw`A partition of $[0,1]$ leaves $[0,1/2]$ unsplit while dividing $[1/2,1]$ into ever more pieces. Does a growing number of pieces force its mesh to zero? Then, for the function that is $1$ on rational inputs and $0$ on irrational inputs, compare rational and irrational tagged sums on partitions whose mesh does shrink to zero.`,
    type:'Interpretation',
    hint:String.raw`The unsplit piece fixes the mesh. Every nonempty interval contains both rational and irrational tags.`,
    solution:String.raw`The number of pieces grows, but the mesh remains $1/2$ because $[0,1/2]$ is never split. Even with shrinking mesh, rational tags give sum $1$ and irrational tags give sum $0$ on every partition of $[0,1]$: the widths total $1$. Since fine tagged sums do not approach one tag-independent value, this function has no Riemann integral.`
  },
  {
    question:String.raw`A student estimates the average value of $f(x)=x^2$ on $[0,1]$ by averaging its endpoint values. Compute the true integral average and the endpoint mean. Does endpoint averaging work for $f(x)=mx+c$ on any interval $[a,b]$?`,
    type:'Interpretation',
    hint:String.raw`Use $(b-a)^{-1}\int_a^b f(x)\,dx$ for the true average.`,
    solution:String.raw`For $x^2$ on $[0,1]$, the integral average is $\int_0^1x^2\,dx=1/3$, while the endpoint mean is $(0+1)/2=1/2$. For $mx+c$ on $[a,b]$, equal-width left and right sums have mean $(b-a)[f(a)+f(b)]/2$ and gap $m(b-a)^2/n$ in signed right-minus-left form. As the gap tends to zero, their common limit divided by $b-a$ is $[f(a)+f(b)]/2=m(a+b)/2+c$. Endpoint averaging is exact for affine functions, but not for every function.`
  }
);
depth['12'].questions.push({
  question:String.raw`Let $F(x)=x^2/2+\sin(200\pi x)/(200\pi)$. On grid points $x_k=k/100$, use centered differences with step $h=1/100$ to test the claim $F'(x)=x$. What derivative does the formula actually give?`,
  type:'Interpretation',
  hint:String.raw`At $x_k\pm h$, the sine term vanishes. Differentiate it symbolically too.`,
  solution:String.raw`The centered difference of the quadratic is $x_k$, and the sine values at both shifted grid points are zero, so every sampled difference reports $x_k$. Exact differentiation gives $F'(x)=x+\cos(200\pi x)$. At each grid point the cosine is $1$, making the sampled claim wrong by $1$. Agreement on a finite grid does not prove an antiderivative identity.`
});
depth['15'].questions.push({
  question:String.raw`After summing $\sum_{n=1}^{\infty}1/n^2$ through $n=100$, a student says the remaining error is at most the first omitted term, $1/101^2$. Use integral bounds to test that claim.`,
  type:'Interpretation',
  hint:String.raw`Bound the whole positive tail $R_{100}$, then compare its lower bound with $1/101^2$.`,
  solution:String.raw`Because $x^{-2}$ decreases, $\int_{101}^{\infty}x^{-2}\,dx\le R_{100}\le\int_{100}^{\infty}x^{-2}\,dx$. Hence $1/101\le R_{100}\le1/100$. The first omitted term is $1/101^2$, and the proven lower bound $1/101$ is 101 times as large. One small next term does not bound the sum of all omitted terms.`
});
depth['17'].questions.push({
  question:String.raw`Approximate $e^{-1}$ with $T_N=\sum_{n=0}^N(-1)^n/n!$ for $N=4$ and $5$. Compare exact errors, then repeat while rounding the running sum to the nearest hundredth after every addition. Does the later rounded result improve?`,
  type:'Interpretation',
  hint:String.raw`The exact sums are $T_4=3/8$ and $T_5=11/30$. Track each rounded intermediate sum.`,
  solution:String.raw`The exact sums are $T_4=0.375$ and $T_5=11/30\approx0.366667$. Since $e^{-1}\approx0.367879$, their errors are about $0.007121$ and $0.001213$: exact truncation improves. Rounding after each addition gives running values $1.00,0.00,0.50,0.33,0.37,0.36$. The last two errors are about $0.002121$ and $0.007879$, so the later rounded approximation is worse because arithmetic error exceeds the truncation gain.`
});
depth['19'].questions.push({
  question:String.raw`For $-1\le t,s\le1$, compare the space curves $\mathbf r(t)=(t,0,0)$ and $\mathbf q(s)=(0,s,1)$. Their $xy$-projections cross. Do the curves intersect in space?`,
  type:'Interpretation',
  hint:String.raw`An intersection requires all three coordinates to agree at some pair of parameter values.`,
  solution:String.raw`The projections meet at $(0,0)$ when $t=s=0$. But $\mathbf r(0)=(0,0,0)$ and $\mathbf q(0)=(0,0,1)$. In fact every point on the first curve has height $0$ and every point on the second has height $1$, so no pair of parameters produces the same space point.`
});
depth['20'].questions.push({
  question:String.raw`Define $f(x,y)=xy(x^2-y^2)/(x^2+y^2)$ away from $(0,0)$ and $f(0,0)=0$. Compute $f_{xy}(0,0)$ and $f_{yx}(0,0)$. Must they agree merely because both exist?`,
  type:'Challenge',
  hint:String.raw`First find $f_x(0,y)$ for $y\ne0$ and $f_y(x,0)$ for $x\ne0$.`,
  solution:String.raw`For fixed $y\ne0$, $f_x(0,y)=\lim_{h\to0}f(h,y)/h=-y$. Also $f_x(0,0)=0$, so $f_{xy}(0,0)=\lim_{k\to0}[-k-0]/k=-1$. Similarly $f_y(x,0)=x$ for $x\ne0$ and $f_y(0,0)=0$, giving $f_{yx}(0,0)=1$. Both mixed partials exist at the origin but differ; continuity conditions needed for equality fail here.`
});
depth['23'].questions.push(
  {
    question:String.raw`On $0<x\le1$, $0\le y\le1$, let $f(x,y)=1/x$. Every $n$-by-$n$ midpoint grid sum is finite. Does that prove the corresponding improper double integral is finite? Compare its sum with a harmonic sum and compute the truncated integral for $x\ge\varepsilon$.`,
    type:'Interpretation',
    hint:String.raw`The midpoint sum simplifies to $\sum_{i=1}^n1/(i-\frac12)$.`,
    solution:String.raw`Each grid is finite, with sum $S_n=\sum_{i=1}^n1/(i-\frac12)\ge\sum_{i=1}^n1/i=H_n$, which diverges as $n$ grows. Directly, the integral on $\varepsilon\le x\le1$ is $\int_\varepsilon^1\int_0^1(1/x)\,dy\,dx=-\log\varepsilon\to\infty$. Finite values on each finite grid do not imply a finite improper integral.`
  },
  {
    question:String.raw`A lamina occupies $[0,2]\times[0,1]$ metres and has uniform density $\rho=3\,\mathrm{kg/m^2}$. A student calls $\iint x\rho\,dA$ the moment about the $x$-axis. Correct the claim; find the mass, both coordinate-axis moments, and the center of mass.`,
    type:'Modeling',
    hint:String.raw`Moment about the $x$-axis uses perpendicular distance $y$, while moment about the $y$-axis uses $x$.`,
    solution:String.raw`The mass is $\iint\rho\,dA=3(2)(1)=6\,\mathrm{kg}$. The $x$-axis moment is $M_x=\iint y\rho\,dA=3(2)(1/2)=3\,\mathrm{kg\,m}$. The $y$-axis moment is $M_y=\iint x\rho\,dA=3(2)(1)=6\,\mathrm{kg\,m}$. Hence $(\bar x,\bar y)=(M_y/m,M_x/m)=(1,1/2)\,\mathrm m$. The student's expression is $M_y$, not $M_x$.`
  }
);
depth['24'].questions.push({
  question:String.raw`A constant joint density is supported on $[0,1/4]\times[0,1/2]$ and zero elsewhere. Normalize it, then find $P(X\le1/8)$. Is a density value above $1$ invalid?`,
  type:'Interpretation',
  hint:String.raw`The support area is $1/8$; probability is density times event area.`,
  solution:String.raw`Normalization requires $c(1/4)(1/2)=1$, so the density is $c=8$. The event occupies area $(1/8)(1/2)=1/16$, giving probability $8/16=1/2$. A density may exceed $1$; its integral over an event, rather than its pointwise height, must lie between $0$ and $1$.`
});
depth['26'].questions.push({
  question:String.raw`The constant field $\mathbf F=(0,0,3)$ has zero divergence. Let $S$ be the unit square $0\le x,y\le1$ in the plane $z=0$, oriented upward. Find its flux. Then find the outward flux through the boundary of the unit cube $0\le x,y,z\le1$. Explain the difference.`,
  type:'Interpretation',
  hint:String.raw`For the open square use $+\mathbf k$; on the cube's bottom face the outward normal is $-\mathbf k$.`,
  solution:String.raw`We have $\nabla\cdot\mathbf F=0$. On the upward-oriented square, $\mathbf F\cdot\mathbf n=3$, so its flux is $3$. For the closed cube, the top contributes $+3$, the bottom $-3$, and each side contributes zero; total outward flux is zero, as the divergence theorem predicts. Zero divergence constrains total flux through a closed boundary, not flux through every open surface.`
});

// Objective practice additions. Append only: existing chapter-wide numbers remain stable.
const addObjectiveQuestion = (id, question, type, hint, solution, solutionCode) => {
  depth[id].questions.push({ question, type, hint, solution, ...(solutionCode ? { solutionCode } : {}) });
};
addObjectiveQuestion('01', String.raw`Translate $S=(-\infty,-2]\cup[4,\infty)$ into a compound inequality and an absolute-value inequality. Translate $|x-1|<3$ into an interval and explain which endpoints are included.`, 'Fluency', String.raw`Both boundary points are distance $3$ from $1$.`, String.raw`The set is $x\le-2$ or $x\ge4$, equivalently $|x-1|\ge3$; equality includes the two boundary points. The strict inequality $|x-1|<3$ means $-2<x<4$, or $(-2,4)$, with neither endpoint included.`);
addObjectiveQuestion('01', String.raw`The graph of $f$ contains $(0,1)$ and $(2,-3)$. Map those points to the graph of $g(x)=-2f(3(x-1))+4$, explaining every coordinate change.`, 'Interpretation', String.raw`Set $3(x-1)=u$ and map the old height $v$.`, String.raw`An old point $(u,v)$ moves to $(1+u/3,4-2v)$. Thus $(0,1)$ maps to $(1,2)$ and $(2,-3)$ to $(5/3,10)$. The horizontal input is divided by $3$ then shifted right $1$; the output is reflected and doubled, then raised $4$.`);
addObjectiveQuestion('02', String.raw`For positive radian $θ$, assume $|\sin\theta-\theta|\le\theta^3/6$. Bound the error of $θ$ as an approximation to $\sin\theta$, relative to the approximation $θ$, at $1^\circ$ and $10^\circ$.`, 'Proof', String.raw`Divide the supplied absolute-error bound by the positive approximation $θ$; convert degrees to radians first.`, String.raw`Because $θ>0$, $|\sin\theta-\theta|/\theta\le\theta^2/6$. At $1^\circ=\pi/180$ this is $π^2/(6\cdot180^2)\approx0.005077\%$; at $10^\circ=\pi/18$ it is $\pi^2/(6\cdot18^2)\approx0.5077\%$. The denominator here is the approximation, not the exact sine.`);
addObjectiveQuestion('03', String.raw`Write JavaScript function h(x) for $\sqrt{1-x^2}+\sin x$ on $[-1,1]$. Return NaN for inputs outside the domain or nonfinite inputs. Check $h(0)$ and $h(1)$.`, 'Fluency', String.raw`Use Number.isFinite before Math.sqrt and Math.sin.`, String.raw`The square root is real on the accepted domain. The checks give $h(0)=1$ and $h(1)=\sin1\approx0.841471$ (radians).`, String.raw`function h(x) {
  if (!Number.isFinite(x) || x < -1 || x > 1) return NaN;
  return Math.sqrt(1 - x*x) + Math.sin(x);
}`);
addObjectiveQuestion('03', String.raw`Implement JavaScript sample(f,a,b,n), returning $n+1$ pairs [x,f(x)] including both endpoints. Reject a nonfunction f, nonfinite $a<b$, any n that is not an integer in $1\le n\le10000$, and any nonfinite coordinate or output. Set the final coordinate exactly to b.`, 'Fluency', String.raw`Loop from $i=0$ through $n$; form an interior coordinate with $s=i/n$ rather than b-a.`, String.raw`Convex interpolation avoids overflow in b-a. For f(x)=x*x, a=0,b=1,n=2 the result is [[0,0],[0.5,0.25],[1,1]].`, String.raw`function sample(f, a, b, n) {
  if (typeof f !== 'function' || !Number.isFinite(a) ||
      !Number.isFinite(b) || !(a < b) ||
      !Number.isInteger(n) || n < 1 || n > 10000) {
    throw new Error('invalid sample request');
  }
  const out = [];
  for (let i = 0; i <= n; i++) {
    const s = i / n;
    const x = i === 0 ? a : i === n ? b : (1 - s)*a + s*b;
    if (!Number.isFinite(x)) throw new Error('nonfinite coordinate');
    const y = f(x);
    if (!Number.isFinite(y)) throw new Error('nonfinite output');
    out.push([x, y]);
  }
  return out;
}`);
addObjectiveQuestion('04', String.raw`Classify discontinuities at the named point for $f(x)=(x^2-1)/(x-1)$ when $x\ne1$ with $f(1)=0$; $g(x)=-1$ for $x<0$ and $g(x)=1$ for $x\ge0$ at $0$; and $h(x)=1/x$ at $0$. Can changing only the point value repair each?`, 'Interpretation', String.raw`Compare finite left and right limits before deciding whether a new value helps.`, String.raw`For $f$, both sided limits at $1$ are $2$; its assigned value $0$ makes a removable break, repaired by $f(1)=2$. For $g$, the sided limits are $-1$ and $1$, so the jump cannot be repaired by one value. For $h$, values diverge with opposite signs; this is an infinite discontinuity with vertical asymptote $x=0$, also not repaired by a point value.`);
// The objective problem remains 04.35; the two new lesson problems follow it.
depth['04'].questions.push(...depth['04'].questions.splice(4,2));
addObjectiveQuestion('05', String.raw`Let $t$ be numerical time in seconds, with $0\le t\le4$, and let height be $H(t)=(2t^2+3)\,\mathrm m$. Construct its tangent line at $t=1$ and interpret the slope with units.`, 'Modeling', String.raw`Find $H(1)$ and $H'(1)$ before writing a line in the numerical time variable.`, String.raw`$H(1)=5\,\mathrm m$ and $H'(t)=4t\,\mathrm{m/s}$, so the tangent model is $L(t)=[5+4(t-1)]\,\mathrm m$. Its slope says height is increasing instantaneously at $4$ metres per second at $t=1$; the line is local, not an exact trajectory at other times.`);
addObjectiveQuestion('05', String.raw`At zero, check continuity and both difference-quotient limits for $f(x)=|x|^{2/3}$; classify the failure of differentiability. Compare the corner $g(x)=|x|$ by its two one-sided quotients.`, 'Proof', String.raw`Keep the sign of $h$ when dividing $|h|^{2/3}$ or $|h|$ by $h$.`, String.raw`$f(h)\to0=f(0)$, so $f$ is continuous. Its quotient is $|h|^{2/3}/h=\operatorname{sgn}(h)|h|^{-1/3}$, tending to $+\infty$ from the right and $-\infty$ from the left: a cusp, with no finite derivative. For $g$, $|h|/h$ tends to $1$ and $-1$ on the two sides: a corner, again no derivative. These are different failures despite continuity.`);
addObjectiveQuestion('06', String.raw`Differentiate $\sin x$ at zero symbolically, compare central differences at $h=0.1$ and $0.01$, then give a function whose central differences agree but whose derivative at zero fails.`, 'Interpretation', String.raw`The even function $|x|$ hides its corner under a central difference.`, String.raw`The derivative limit is $\lim_{h\to0}\sin h/h=1$. The central differences $[\sin h-\sin(-h)]/(2h)=\sin h/h$ are about $0.998334$ and $0.999983$. For $|x|$ every central difference at zero is $0$, yet right and left derivatives are $1$ and $-1$. Numerical symmetry alone cannot prove differentiability.`);
addObjectiveQuestion('07', String.raw`For demand $Q(p)=Cp^{-2}$ with $C,p>0$, find absolute sensitivity and elasticity. Predict the effect of a 1% price rise, compare the exact change, and state the model assumptions.`, 'Modeling', String.raw`Differentiate with C fixed; elasticity is $pQ'(p)/Q(p)$.`, String.raw`$Q'(p)=-2Cp^{-3}$ in demand units per price unit, and elasticity is $-2$. A local 1% rise predicts about a 2% decrease. Exactly, $Q(1.01p)/Q(p)=1/1.01^2$, a decrease of about $1.9704\%$. This requires positive price, fixed $C$, differentiability, and model validity across the change.`);
addObjectiveQuestion('08', String.raw`Let $f(x)=x^2$ be defined on $\mathbb R$ and studied on $[0,2]$. Check the extreme value and mean value theorem hypotheses, find absolute extrema and the mean-value point, and classify $f'(0)=0$.`, 'Proof', String.raw`Compare endpoint values and solve $2c=[f(2)-f(0)]/2$.`, String.raw`The polynomial is continuous on $[0,2]$ and differentiable on $(0,2)$, so both theorems apply. Its minimum is $0$ at $0$ and maximum $4$ at $2$. The secant slope is $2$, hence $2c=2$ gives $c=1$. On the ambient domain $\mathbb R$, $f'(0)=0$ in the ordinary two-sided sense; $0$ is an optimization endpoint, not an interior point of $[0,2]$.`);
addObjectiveQuestion('08', String.raw`For $f(x)=x^3/3-x^2/2+3x/16$ defined on $\mathbb R$ and studied on $[0,1]$, sampled values give $f'(0)=f'(1)=3/16>0$. What do they suggest? Determine the analytic derivative signs and all monotonicity intervals.`, 'Interpretation', String.raw`Factor $f'(x)=(x-1/4)(x-3/4)$.`, String.raw`The positive endpoint samples suggest increase but do not establish it throughout the interval. The factored derivative is positive on $(0,1/4)$ and $(3/4,1)$ and negative on $(1/4,3/4)$. Thus $f$ increases on $[0,1/4]$ and $[3/4,1]$, and decreases on $[1/4,3/4]$. Finite derivative samples can miss an entire negative-sign region.`);
addObjectiveQuestion('09', String.raw`Compare bisection on $[1,2]$ and Newton from $1$ for $f(x)=x^2-2$: give hypotheses, a three-halving midpoint error bound, and two Newton steps. Show a Newton failure starting at zero for $g(x)=x^3-2x+2$.`, 'Interpretation', String.raw`For Newton, check the derivative at each iterate; apply $x_{n+1}=x_n-g(x_n)/g'(x_n)$ to g at zero and one.`, String.raw`$f$ is continuous and changes sign from $-1$ to $2$, so bisection retains a root bracket. After three halvings its width is $1/8$, giving midpoint error at most $1/16$. Newton requires differentiability and a nonzero derivative at each iterate: $f'(1)=2$ and $f'(3/2)=3$. Its update $N(x)=(x+2/x)/2$ gives $3/2$, then $17/12$. From a positive start, $N(x)\ge\sqrt2$; when $x>\sqrt2$, $N(x)<x$, so after the first step these iterates decrease to $\sqrt2$. The two listed iterates alone carry no comparable bisection-style certificate, and nonzero derivatives alone do not guarantee Newton convergence from arbitrary starts. For $g(x)=x^3-2x+2$, Newton cycles $0\to1\to0$ since $g(0)=2$, $g'(0)=-2$, $g(1)=1$, and $g'(1)=1$.`);
addObjectiveQuestion('10', String.raw`For $f(x)=x-1/2$, compute signed left and right sums on $0,1/2,1$ and on $0,1/4,1$. Show each width and contribution; compare the exact integral.`, 'Fluency', String.raw`Retain negative rectangle heights and use the unequal widths $1/4,3/4$.`, String.raw`Uniformly, $L=(-1/2)(1/2)+0(1/2)=-1/4$ and $R=0(1/2)+(1/2)(1/2)=1/4$. On the second partition, $L=(-1/2)(1/4)+(-1/4)(3/4)=-5/16$ and $R=(-1/4)(1/4)+(1/2)(3/4)=5/16$. The negative and positive triangles each have area $1/8$, so the signed integral is $-1/8+1/8=0$.`);
addObjectiveQuestion('10', String.raw`Give loop pseudocode for the right-endpoint sum of $x^2$ on $[0,1]$ with $n=100$; independently check its value and enclose the exact integral.`, 'Modeling', String.raw`Use right tag $i/n$ and width $1/n$ for $i=1,\ldots,n$.`, String.raw`Set total=0; for i=1,...,100 add $(i/100)^2/100$. The square-sum identity gives $R_{100}=100(101)(201)/(6\cdot100^3)=20301/60000=0.33835$. The exact integral is $1/3$. Since $x^2$ increases, $L_{100}\le1/3\le R_{100}$; the left-right gap is $1/100=0.01$, independently checking scale and direction.`);
addObjectiveQuestion('11', String.raw`Let $a<b$, let $f$ be continuous on $[a,b]$, and set $A(x)=\int_a^x f(t)\,dt$. Prove $A'(x)=f(x)$ for interior $x$. Then, for any $F$ continuous on $[a,b]$ and differentiable on $(a,b)$ with $F'=f$ there, show $\int_a^b f(t)\,dt=F(b)-F(a)$.`, 'Proof', String.raw`The difference quotient is a local average; compare $A'$ and $F'$ on the interior, then use endpoint continuity.`, String.raw`For either sign of $h$ at an interior $x$, $[A(x+h)-A(x)]/h$ is the average of $f$ over the short interval. Its difference from $f(x)$ is at most $\sup_{t\text{ between }x,x+h}|f(t)-f(x)|$, which tends to zero by continuity. Hence $A'=f=F'$ on $(a,b)$. Both $A$ and $F$ are continuous on $[a,b]$, so the mean value theorem makes $A-F$ constant there; evaluating at $a$ and $b$ yields $A(b)=F(b)-F(a)$.`);
addObjectiveQuestion('12', String.raw`Choose and justify a method for $\int 1/[x(x+1)^2]\,dx$. State its real domain, allow componentwise constants, and check your answer by differentiation.`, 'Fluency', String.raw`Use partial fractions for a repeated linear factor.`, String.raw`The rational integrand suggests $1/[x(x+1)^2]=1/x-1/(x+1)-1/(x+1)^2$. Integrating termwise gives $\ln|x|-\ln|x+1|+1/(x+1)+C$; differentiating returns the decomposition. Exclude $x=-1,0$. The three connected intervals may have separate constants because the derivative condition does not connect them.`);
addObjectiveQuestion('12', String.raw`Choose and justify a trigonometric method for $\int_0^{\pi/2}\sin^3x\,dx$, transform the bounds, and evaluate.`, 'Fluency', String.raw`Save one sine factor and replace the other two by $1-\cos^2x$.`, String.raw`Write $\sin^3x=(1-\cos^2x)\sin x$. With $u=\cos x$, $du=-\sin x\,dx$ and bounds $1\to0$, the integral is $-\int_1^0(1-u^2)\,du=[u-u^3/3]_0^1=2/3$. Saving one sine supplies exactly the differential for this substitution.`);
addObjectiveQuestion('13', String.raw`For the region $0\le y\le x$, $0\le x\le1$, first find its plane area, then rotate it about the $x$-axis. Choose a representative disk slice and its integral. Compute a two-panel midpoint volume and the exact volume; quantify and explain the approximation error.`, 'Modeling', String.raw`The plane area is under $y=x$; disk radius is x, with midpoint tags $1/4,3/4$.`, String.raw`The plane area is $\int_0^1x\,dx=1/2$. A thin rotated strip gives $dV\approx\pi x^2\,dx$, so $V=\int_0^1\pi x^2\,dx=\pi/3$. Two midpoint disks give $M_2=(\pi/2)[(1/4)^2+(3/4)^2]=5\pi/16$, below exact volume by $\pi/48$, or $6.25\%$. Convex disk area explains the underestimate; two samples alone cannot certify errors for arbitrary solids.`);
addObjectiveQuestion('14', String.raw`For $\int_0^1x^4\,dx$, calculate composite $T_4$ and $S_4$, select derivative bounds, and certify both errors against the exact value.`, 'Fluency', String.raw`Use $M_2=12$, $M_4=24$, and panel width $1/4$.`, String.raw`The sample values are $0,1/256,1/16,81/256,1$. Composite trapezoid gives $T_4=113/512$ and Simpson gives $S_4=77/384$; exact integral is $1/5$. Since $|f''|\le12$ and $|f^{(4)}|=24$, the standard bounds are $12/(12\cdot4^2)=1/16$ and $24/(180\cdot4^4)=1/1920$. Actual errors are $53/2560$ and $1/1920$.`);
addObjectiveQuestion('14', String.raw`Design an adaptive Simpson calculation for $\int_0^1e^x\,dx$ with guaranteed error at most $10^{-4}$. Distinguish a refinement discrepancy from a derivative-bound certificate.`, 'Interpretation', String.raw`For each panel of width h use $M_4h^5/2880$; split the initial panel once.`, String.raw`On $[0,1]$, $M_4=e$, so the initial certificate is $e/2880>10^{-4}$. Split at $1/2$. The two bounds sum to $(\sqrt e+e)/92160\approx4.7385\times10^{-5}$, meeting the target. The coarse/refined difference divided by $15$ estimates refined error under a smooth leading-error model; it is not by itself a guarantee. The fourth-derivative bound supplies the guarantee here.`);
addObjectiveQuestion('14', String.raw`For $p=1/2$ and $p=1$, define $\int_{-1}^1|x|^{-p}\,dx$ using independent left and right cutoff limits, then test convergence.`, 'Proof', String.raw`Do not pair the cutoffs or cancel the two sides.`, String.raw`Define the integral as $\lim_{u\to0^-}\int_{-1}^{u}|x|^{-p}\,dx+\lim_{v\to0^+}\int_v^1x^{-p}\,dx$, requiring both limits finite independently. For $p=1/2$, substitution on each side gives $2$ and $2$, totaling $4$. For $p=1$, each integral grows logarithmically to $+\infty$, so the ordinary improper integral diverges.`);
addObjectiveQuestion('15', String.raw`Telescope $\sum_{n=1}^{\infty}1/[n(n+1)]$, find the exact remainder after N terms, and find the least N making that remainder at most $0.001$.`, 'Fluency', String.raw`Split each term as $1/n-1/(n+1)$.`, String.raw`The partial sum is $S_N=1-1/(N+1)$ because intermediate terms cancel. Hence the infinite sum is $1$ and $R_N=1/(N+1)$. The inequality $1/(N+1)\le0.001$ means $N+1\ge1000$, so the least integer is $N=999$.`);
addObjectiveQuestion('15', String.raw`Apply the integral test to $\sum_{n=2}^{\infty}1/[n(\ln n)^2]$: check its hypotheses and bound the tail $R_N$ for $N\ge2$.`, 'Proof', String.raw`Extend to $f(x)$ and substitute $u=\ln x$ in its integral.`, String.raw`For $x\ge2$, $f(x)=1/[x(\ln x)^2]$ is positive and continuous, with $f'(x)=-(\ln x+2)/[x^2(\ln x)^3]<0$. The integral from $2$ to infinity equals $1/\ln2$, so the series converges. The decreasing-function tail inequalities give $1/\ln(N+1)\le R_N\le1/\ln N$.`);
addObjectiveQuestion('16', String.raw`Apply both ratio and root tests to $\sum 1/n$ and $\sum 1/n^2$. Classify each series by another valid test.`, 'Interpretation', String.raw`A limit of $1$ settles neither ratio nor root test; use p-series knowledge.`, String.raw`For $a_n=n^{-p}$ with $p=1$ or $2$, $|a_{n+1}/a_n|=(n/(n+1))^p\to1$ and $|a_n|^{1/n}=n^{-p/n}\to1$. Both named tests are inconclusive for both series. The p-series criterion then says $\sum1/n$ diverges and $\sum1/n^2$ converges.`);
addObjectiveQuestion('16', String.raw`Select and justify tests independently for $\sum_{n=1}^{\infty}(-1)^{n-1}/\sqrt n$, $\sum_{n=1}^{\infty}n!/3^n$, and $\sum_{n=1}^{\infty}[(2n+1)/(3n)]^n$.`, 'Fluency', String.raw`Look respectively for decreasing alternating magnitudes, a factorial ratio, and an outer nth power.`, String.raw`The first converges by the alternating test since $1/\sqrt n$ decreases to zero, but not absolutely because $\sum n^{-1/2}$ diverges. For $n!/3^n$, the consecutive-term ratio is $(n+1)/3\to\infty$, so terms fail to tend to zero and the series diverges. The last has nth-root limit $(2n+1)/(3n)\to2/3<1$, hence converges absolutely.`);
addObjectiveQuestion('16', String.raw`Rearrange the alternating harmonic series in blocks of two unused positive terms followed by one unused negative term. Find the new sum and explain why the ordering changes it.`, 'Proof', String.raw`Express the first N blocks with harmonic numbers.`, String.raw`After N blocks, positives are reciprocals of the first $2N$ odd integers and negatives are $-1/2,-1/4,\ldots,-1/(2N)$. Their sum is $H_{4N}-\tfrac12H_{2N}-\tfrac12H_N$. Since $H_m=\ln m+\gamma+o(1)$, this tends to $\tfrac32\ln2$. Incomplete-block terms vanish, so the full rearrangement has this limit. Conditional convergence allows the changed positive-negative balance to change the sum.`);
addObjectiveQuestion('18', String.raw`Derive the parametric and polar arc-length formulas from short displacements for continuously differentiable parametrizations on a finite interval, including stationary points.`, 'Proof', String.raw`In polar coordinates differentiate $x=r\cos\theta$ and $y=r\sin\theta$.`, String.raw`For every $C^1$ parametrization on a finite interval, including stationary points, short displacement norms tend in the polygonal-length limit to $L=\int\sqrt{x'(t)^2+y'(t)^2}\,dt$. In polar form, $x'=r'\cos\theta-r\sin\theta$ and $y'=r'\sin\theta+r\cos\theta$. Squaring and adding cancels cross terms, giving speed $\sqrt{r'^2+r^2}$ and $L=\int\sqrt{r'^2+r^2}\,d\theta$ over the chosen traversal.`);
addObjectiveQuestion('18', String.raw`Find all geometric intersections of $r=2\cos\theta$ and $r=1$ over a full turn. Account for negative radii and retracing.`, 'Challenge', String.raw`Convert the first polar equation to Cartesian before counting points.`, String.raw`The first curve satisfies $x^2+y^2=2x$, a circle centered at $(1,0)$ with radius $1$; the second is $x^2+y^2=1$. Subtraction gives $2x=1$, hence $x=1/2$ and $y=\pm\sqrt3/2$. A point of the first circle also has a negative-radius representation at angle shifted by $\pi$; those parameter duplicates create no additional geometric intersections.`);
addObjectiveQuestion('18', String.raw`Find the area enclosed by $r=2a\cos\theta$ for $a>0$ using single-traversal bounds. Compare a full-turn polar integral and explain the discrepancy.`, 'Fluency', String.raw`Use $-\pi/2\le\theta\le\pi/2$ for one trace of the circle.`, String.raw`On the single trace, $A=\frac12\int_{-\pi/2}^{\pi/2}(2a\cos\theta)^2\,d\theta=\pi a^2$, matching the radius-a circle. Integrating the same area expression from $0$ to $2\pi$ gives $2\pi a^2$: the parameterization covers the geometric circle twice, including negative-radius representations.`);
addObjectiveQuestion('18', String.raw`For $(x,y)=(2\cos t,2\sin t)$ on $0\le t\le\pi$, find velocity, tangent slope, and speed at $t=\pi/2$, plus total distance. Explain what each quantity describes.`, 'Interpretation', String.raw`Differentiate both coordinates, then divide $dy/dt$ by $dx/dt$ for slope.`, String.raw`Velocity is $(-2\sin t,2\cos t)$, so at $\pi/2$ it is $(-2,0)$. The slope is $(2\cos t)/(-2\sin t)=0$ there, while speed is the velocity norm $2$. Distance is $\int_0^\pi2\,dt=2\pi$. Velocity is a vector, slope describes tangent direction, speed is its magnitude, and distance accumulates that magnitude.`);
addObjectiveQuestion('19', String.raw`For the helix $(2\cos t,2\sin t,t)$, $0\le t\le2\pi$, verify regularity and curvature. Compare four equal-parameter chord lengths with exact arc length.`, 'Modeling', String.raw`Use $\Delta t=\pi/2$ and the cross-product curvature formula.`, String.raw`$\mathbf r'=(-2\sin t,2\cos t,1)$ has speed $\sqrt5>0$, while $|\mathbf r'\times\mathbf r''|=2\sqrt5$, so curvature is $(2\sqrt5)/(\sqrt5)^3=2/5$. Exact length is $2\pi\sqrt5\approx14.04963$. Each quarter-turn chord has squared length $8+\pi^2/4$; four total $4\sqrt{8+\pi^2/4}\approx12.94135$, short by about $1.10828$. Straight chords omit curvature between samples.`);
addObjectiveQuestion('20', String.raw`For temperature $T(x,y)=20+3x^2+2xy-y^2$, position in metres and quadratic coefficients in $^\circ\mathrm C/\mathrm m^2$, evaluate $T_x,T_y,T_{xx},T_{xy}$ at $(1,2)$, give units, and interpret $T_{xy}$.`, 'Modeling', String.raw`Each spatial derivative divides the temperature unit by another metre.`, String.raw`$T_x=6x+2y=10$ and $T_y=2x-2y=-2$ at $(1,2)$, both in $^\circ\mathrm C/\mathrm m$. Also $T_{xx}=6$ and $T_{xy}=2$, in $^\circ\mathrm C/\mathrm m^2$. Increasing y by $0.1\,\mathrm m$ raises the x-direction temperature slope by about $0.2\,^\circ\mathrm C/\mathrm m$; here it is exact because the mixed derivative is constant.`);
addObjectiveQuestion('21', String.raw`For $T(x,y)=20+3x-4y$ degrees Celsius with x,y in metres, find the gradient, greatest-increase direction and rate, directional derivative in direction $(3,4)$, and a unit tangent to a level curve.`, 'Interpretation', String.raw`Normalize direction vectors and take their dot products with the gradient.`, String.raw`$\nabla T=(3,-4)\,^\circ\mathrm C/\mathrm m$, with norm $5$. Greatest increase is along $(3/5,-4/5)$ at $5\,^\circ\mathrm C/\mathrm m$. Direction $(3,4)$ becomes $(3/5,4/5)$, giving derivative $(3,-4)\cdot(3/5,4/5)=-7/5\,^\circ\mathrm C/\mathrm m$. A perpendicular unit level tangent is $(4/5,3/5)$.`);
addObjectiveQuestion('22', String.raw`On $D=\{0\le x\le1,\ y^2\le x^3\}$, find absolute extrema of $f=x+y$, explicitly checking interior, curved edges, vertical edge, corners, and cusp.`, 'Modeling', String.raw`On curved edges use $y=\pm x^{3/2}$; the cusp is singular for the boundary constraint.`, String.raw`There is no interior stationary point because $\nabla f=(1,1)$. Upper edge $x+x^{3/2}$ rises to $2$ at $(1,1)$. Lower edge $x-x^{3/2}$ has derivative $1-3\sqrt x/2$, with stationary value $4/27$ at $x=4/9$; its endpoints are zero. On the vertical edge $x=1$, $f=1+y$ ranges from $0$ to $2$. The cusp $(0,0)$ also gives zero, despite singular constraint gradient there. Thus minimum $0$ occurs at $(0,0)$ and $(1,-1)$, and maximum $2$ at $(1,1)$.`);
addObjectiveQuestion('22', String.raw`For $F(x,y)=(x^2+4y^2)/2$, start fixed-step gradient descent at $(1,1)$. Derive the convergent step-size interval and compute two states for $\alpha=1/4,1/2,3/4$.`, 'Modeling', String.raw`Each update multiplies x by $1-\alpha$ and y by $1-4\alpha$.`, String.raw`The recurrence is $(x_{k+1},y_{k+1})=((1-\alpha)x_k,(1-4\alpha)y_k)$. Both multipliers must have magnitude below one, yielding $0<\alpha<1/2$. At $1/4$, states are $(3/4,0),(9/16,0)$; at $1/2$, $(1/2,-1),(1/4,1)$; at $3/4$, $(1/4,-2),(1/16,4)$. The latter two fail to converge because the y multiplier has magnitude at least one.`);
addObjectiveQuestion('24', String.raw`Transform $\iint_E(x^2+y^2)\,dA$ for $E:x^2/4+y^2/9\le1$ using $x=2u,y=3v$. Give transformed domain, integrand, absolute Jacobian, and integral.`, 'Fluency', String.raw`Use unit-disk moments $\iint u^2\,dA=\iint v^2\,dA=\pi/4$.`, String.raw`The transformed domain is $u^2+v^2\le1$, the integrand becomes $4u^2+9v^2$, and $|\det D(x,y)/D(u,v)|=6$. Therefore the integral is $6(4+9)(\pi/4)=39\pi/2$. The positive determinant is also the unsigned area scale.`);
addObjectiveQuestion('24', String.raw`Choose coordinates for a radius-2 disk, a radius-2 height-3 cylinder, and a radius-2 ball. For each, give the map, variable ranges, and area or volume factor; measure spherical $\phi$ from the positive z-axis.`, 'Interpretation', String.raw`Match rotational symmetry and include the Jacobian in each measure.`, String.raw`For the disk use polar $(x,y)=(r\cos\theta,r\sin\theta)$, $0\le r\le2$, $0\le\theta\le2\pi$, $dA=r\,dr\,d\theta$. For the cylinder add $z\in[0,3]$ to the same map and use $dV=r\,dr\,d\theta\,dz$. For the ball use $(x,y,z)=(\rho\sin\phi\cos\theta,\rho\sin\phi\sin\theta,\rho\cos\phi)$, with $0\le\rho\le2$, $0\le\phi\le\pi$, $0\le\theta\le2\pi$, and $dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta$.`);
addObjectiveQuestion('24', String.raw`Estimate total mass for uniform density $1/\pi$ on the unit disk by midpoint cells on an n-by-n grid over $[-1,1]^2$, with n=2 and n=4. Compare exact normalization and explain boundary error.`, 'Modeling', String.raw`Count accepted midpoint cells: 4 for n=2 and 12 for n=4.`, String.raw`The exact mass is density times disk area, $(1/\pi)\pi=1$. At n=2, each cell has area $1$ and all four centres lie inside, giving $4/\pi\approx1.27324$. At n=4, each cell has area $1/4$ and 12 centres lie inside, giving $3/\pi\approx0.95493$. Boundary-crossing cells are counted wholly in or out; refinement changes that geometric error.`);
addObjectiveQuestion('25', String.raw`For $\mathbf F=(2xy,x^2+x)$, compare exact work and n=2,4 composite-midpoint work along $(t,t)$ and $(t,t^2)$, $0\le t\le1$. Separate quadrature error from real path dependence.`, 'Modeling', String.raw`Parameterize $\mathbf F\cdot d\mathbf r$; the two integrands are $3t^2+t$ and $4t^3+2t^2$.`, String.raw`Direct integration gives $W_1=\int_0^1(3t^2+t)dt=3/2$ and $W_2=\int_0^1(4t^3+2t^2)dt=5/3$. Midpoint formulas are $M_{1,n}=3/2-1/(4n^2)$ and $M_{2,n}=5/3-2/(3n^2)$. At n=2 these are $23/16,3/2$; at n=4 they are $95/64,13/8$. Each discrepancy from its exact integral is quadrature error, while the persistent $1/6$ difference between exact works is genuine path dependence.`);
addObjectiveQuestion('26', String.raw`Choose Green, Stokes, or divergence theorem for counterclockwise circulation around $[0,1]^2$ in the $xy$-plane, circulation around the upward-oriented tilted disk $z=x$, $x^2+y^2\le1$, and outward flux through a unit sphere, all for $\mathbf F=(-y,x,z)$. Compute each.`, 'Modeling', String.raw`Match each boundary dimension to curl or divergence and state compatible orientations.`, String.raw`The field is smooth everywhere. Green on the counterclockwise square uses $\partial_xF_y-\partial_yF_x=2$, giving circulation $2$. Stokes on the tilted disk uses $\nabla\times\mathbf F=(0,0,2)$. With $\mathbf r(x,y)=(x,y,x)$, $\mathbf r_x\times\mathbf r_y=(-1,0,1)$, so the upward vector area is $(-\pi,0,\pi)$ and its dot product with curl gives $2\pi$ for the compatible boundary orientation. Divergence is $1$, so outward sphere flux is its unit-ball volume $4\pi/3$.`);
addObjectiveQuestion('26', String.raw`Compute curl and divergence of $\mathbf F=(-y,x,z)$ and interpret small horizontal-loop circulation and small closed-volume flux.`, 'Interpretation', String.raw`Compare circulation per oriented area with flux per volume.`, String.raw`$\nabla\times\mathbf F=(0,0,2)$ and $\nabla\cdot\mathbf F=1$. Stokes says circulation around a sufficiently small horizontal loop is approximately $2$ times its upward-oriented area, reversing sign with orientation. The divergence theorem says outward flux through a small closed volume is approximately $1$ times its volume. One measures local rotation; the other local source strength.`);
addObjectiveQuestion('27', String.raw`At $(t,y)=(0,0),(0,1),(1,0),(1,1)$, four slope-field segments point respectively $\rightarrow,\nearrow,\searrow,\rightarrow$. Read two tangent slopes, propose a compatible differential equation, explain why four segments cannot determine it uniquely, and apply $y(0)=1$.`, 'Interpretation', String.raw`The rate $y-t$ fits all four segments.`, String.raw`At $(0,1)$ the northeast segment has slope $1$; at $(1,0)$ the southeast segment has slope $-1$. The law $y'=y-t$ matches all four segments, but infinitely many other rate functions agree at four points. For this chosen law, solving $y'-y=-t$ gives $y=t+1+Ce^t$. The condition $y(0)=1$ sets $C=0$, so the selected solution is $y=t+1$.`);
addObjectiveQuestion('27', String.raw`Compare exponential and logistic population models with $r=0.2/\mathrm{year}$, carrying capacity $K=100$ individuals, and initial population 50. Give rate units, equilibria and stability, and both populations at $t=\ln2/r$.`, 'Modeling', String.raw`Use $P'=rP$ and $P'=rP(1-P/K)$; the logistic denominator starts $1+e^{-rt}$.`, String.raw`Exponential growth is $P_E=50e^{rt}$, so it reaches $100$ at the named time; its equilibrium zero repels positive states. Logistic growth is $P_L=100/(1+e^{-rt})$, so it reaches $200/3$ individuals; zero is unstable and $100$ attracting for positive populations. In either model $P'$ has individuals/year, $r$ has inverse years, and $K$ has individuals. The logistic slowdown follows from the factor $1-P/K$.`);
addObjectiveQuestion('27', String.raw`State sufficient local existence and uniqueness hypotheses for $y'=f(t,y)$. Test $y'=\sqrt{|y|},y(0)=0$ and $y'=y^2,y(0)=2$ for existence, uniqueness, and global forward continuation.`, 'Proof', String.raw`Continuity supports existence; local Lipschitz dependence on y supports uniqueness.`, String.raw`If $f$ is continuous near the initial point, a local solution exists; if it is also locally Lipschitz in y, that solution is unique locally. For $\sqrt{|y|}$, zero and delayed solutions $y=0$ until $t=c\ge0$, then $y=(t-c)^2/4$, share $y(0)=0$, so uniqueness fails. Their values and derivatives join at zero when $t=c$, and each continues for every $t\ge0$. Thus global forward solutions exist for this initial value problem, but are not unique. For $y^2$, smoothness gives local uniqueness and separation gives $y=2/(1-2t)$; it blows up at $t=1/2$, preventing global forward continuation.`);
addObjectiveQuestion('27', String.raw`Solve $x''+2x'+2x=0$ with $x(0)=1,x'(0)=0$. Compare the undamped $x''+2x=0$ under the same data using $E=(x'^2+2x^2)/2$, and interpret damping physically.`, 'Modeling', String.raw`Use characteristic roots and differentiate energy along each solution.`, String.raw`The damped roots are $-1\pm i$, giving $x=e^{-t}(\cos t+\sin t)$ after the initial conditions. Undamped motion is $x=\cos(\sqrt2t)$. In the damped case $E'=x'(x''+2x)=-2x'^2\le0$; without damping $E'=0$. The damping force removes mechanical energy, so oscillation amplitude decays instead of remaining constant.`);
addObjectiveQuestion('28', String.raw`Give complete fixed-step Euler, explicit Heun, and classical RK4 updates for $y'=f(t,y)$. Take one step of size $h=0.1$ for $y'=t+y$, $y(0)=1$.`, 'Fluency', String.raw`Heun averages start and predicted-end slopes; RK4 uses four stages from the old state.`, String.raw`In every method advance $t_+=t+h$. Euler: $k_1=f(t,y)$, $y_+=y+hk_1$. Heun: $k_1=f(t,y)$, $k_2=f(t+h,y+hk_1)$, $y_+=y+h(k_1+k_2)/2$. RK4: $k_1=f(t,y)$, $k_2=f(t+h/2,y+hk_1/2)$, $k_3=f(t+h/2,y+hk_2/2)$, $k_4=f(t+h,y+hk_3)$, $y_+=y+h(k_1+2k_2+2k_3+k_4)/6$. Euler gives $1.1$, Heun $1.11$; RK4 slopes are $1,1.1,1.105,1.2105$, giving $1.110341666\ldots$.`);
addObjectiveQuestion('28', String.raw`For Euler on $y'=-10y,y(0)=1$, distinguish consistency, convergence at $T=1$, and stability. Compute endpoints for $h=0.25,0.1,0.05$ and compare the exact endpoint.`, 'Interpretation', String.raw`The update multiplier is $1-10h$; for a fixed final time use N=1/h steps.`, String.raw`Euler has one-step defect $O(h^2)$, so it is consistent. Absolute decay requires $|1-10h|<1$, namely $0<h<0.2$. Endpoint values are $(-1.5)^4=5.0625$, $0^{10}=0$, and $(0.5)^{20}\approx9.5367\times10^{-7}$, versus exact $e^{-10}\approx4.54\times10^{-5}$. These finite results vary sharply, but as $h=1/N\to0$, $(1-10/N)^N\to e^{-10}$, establishing convergence at fixed T.`);
addObjectiveQuestion('28', String.raw`For $x'=v,v'=-x$ with $(x_0,v_0)=(1,0)$, describe phase direction, prove a conserved quantity, and test forward Euler against it.`, 'Proof', String.raw`Differentiate $x^2+v^2$ and expand one Euler step.`, String.raw`The exact state $(x,v)=(\cos t,-\sin t)$ moves clockwise on the unit circle. Along the differential equation, $(x^2+v^2)'=2xv+2v(-x)=0$, so the initial value fixes $x^2+v^2=1$. Euler gives $(x_+,v_+)=(x+hv,v-hx)$; expansion yields $x_+^2+v_+^2=(1+h^2)(x^2+v^2)$. Thus Euler spirals outward for any nonzero fixed step.`);
addObjectiveQuestion('28', String.raw`Design a reproducible Euler, Heun, and RK4 refinement study for $y'=-y,A'=y$, $(y,A)(0)=(1,0)$, on $0\le t\le1$. Specify grids, outputs, exact checks, expected ratios, and an invariant caveat.`, 'Modeling', String.raw`Use $N=10,20,40,80$ and exact states $(e^{-t},1-e^{-t})$.`, String.raw`For each method and $N=10,20,40,80$, set $h=1/N$, $t_j=j/N$, and integrate both components from the same initial state. Record $y_N,A_N$ and $e_N=\max_{0\le j\le N}\max\{|y_j-e^{-t_j}|,|A_j-(1-e^{-t_j})|\}$, along with $\max_j|y_j+A_j-1|$. Count vector-field evaluations: $N$ for Euler, $2N$ for Heun, and $4N$ for RK4. For the scalar decay component, the one-step factors are $1-h$, $1-h+h^2/2$, and $1-h+h^2/2-h^3/6+h^4/24$; hence adjacent-grid error ratios approach $2,4,16$ in the asymptotic regime. The linear invariant $y+A=1$ is preserved by these updates, but that alone cannot show either state is close to the exact trajectory.`);

// Curriculum expansion: append to the combined bank after every original deeper question.
depth["12"].questions.push(...[
  {
    "lesson": 7,
    "type": "Fluency",
    "question": "Evaluate $\\int_0^1(1+x^2)^{-1/2}\\,dx$.",
    "hint": "Use the inverse derivative.",
    "solution": "$\\operatorname{arsinh}x$ is an antiderivative on $\\mathbb R$, so the result is $\\operatorname{arsinh}1-\\operatorname{arsinh}0=\\ln(1+\\sqrt2)$."
  },
  {
    "lesson": 7,
    "type": "Proof",
    "question": "Evaluate $\\int_0^1\\sqrt{1+x^2}\\,dx$ by hyperbolic substitution and verify the antiderivative.",
    "hint": "Transform both endpoints and justify the square-root sign.",
    "solution": "Set $x=\\sinh t$: bounds are $0$ to $\\operatorname{arsinh}1$, $dx=\\cosh t\\,dt$, and $\\sqrt{1+\\sinh^2t}=\\cosh t>0$. Integrating $(1+\\cosh2t)/2$ gives $(\\sqrt2+\\ln(1+\\sqrt2))/2$. Differentiating $[x\\sqrt{1+x^2}+\\operatorname{arsinh}x]/2$ returns $\\sqrt{1+x^2}$ for all real $x$."
  },
  {
    "lesson": 7,
    "type": "Interpretation",
    "question": "A student writes $\\sqrt{1+\\sinh^2t}=\\sinh t$. Give a counterexample and compare $\\int_{-1}^0\\sqrt{1+x^2}\\,dx$ with its integral from $0$ to $1$.",
    "hint": "Try $t=0$ and use parity.",
    "solution": "At zero the left side is $1$ but the proposed right side is $0$. The correct root is $|\\cosh t|=\\cosh t>0$. Since the original integrand is even, each integral equals $(\\sqrt2+\\ln(1+\\sqrt2))/2$."
  },
  {
    "lesson": 7,
    "type": "Modeling",
    "question": "A speed is $v(t)=v_0\\sqrt{1+(t/\\tau)^2}$ for $0\\le t\\le\\tau$, with $v_0,\\tau>0$. Find distance and units.",
    "hint": "Set $x=t/\\tau$.",
    "solution": "Then $dt=\\tau\\,dx$ and bounds become $0$ to $1$, so distance is $v_0\\tau(\\sqrt2+\\ln(1+\\sqrt2))/2$. Speed times time gives distance units."
  },
  {
    "lesson": 7,
    "type": "Challenge",
    "question": "Evaluate $\\int_0^4\\sqrt{9+x^2}\\,dx$ and check the upper transformed endpoint.",
    "hint": "Use $x=3\\sinh t$.",
    "solution": "The upper endpoint is $\\operatorname{arsinh}(4/3)=\\ln3$ because $4/3+5/3=3$. Thus the integral is $9\\int_0^{\\ln3}\\cosh^2t\\,dt=\\frac92[t+\\sinh t\\cosh t]_0^{\\ln3}=10+\\frac92\\ln3$. Differentiation of $[x\\sqrt{9+x^2}+9\\operatorname{arsinh}(x/3)]/2$ confirms the antiderivative."
  }
]);
depth["17"].questions.push(...[
  {
    "lesson": 7,
    "type": "Fluency",
    "question": "Reindex $\\sum_{n=2}^{\\infty}n(n-1)c_nt^{n-2}$ as powers $t^j$.",
    "hint": "Set $j=n-2$.",
    "solution": "Since $n=j+2$, the sum is $\\sum_{j=0}^{\\infty}(j+2)(j+1)c_{j+2}t^j$. It represents $F''$ inside the positive radius of $F=\\sum c_nt^n$."
  },
  {
    "lesson": 7,
    "type": "Proof",
    "question": "Why does a formal coefficient recurrence alone fail to prove an ODE solution?",
    "hint": "Separate algebra, convergence and initial values.",
    "solution": "A recurrence cancels formal residual coefficients. First prove the series and every required derivative series converge on an interval and represent the derivatives. Then substitution and coefficient uniqueness prove the ODE pointwise; free coefficients must still match the initial data."
  }
]);
depth["18"].questions.push(...[
  {
    "lesson": 7,
    "type": "Fluency",
    "question": "For $F=(0,0)$, directrix $x=4$ and $e=1/2$, find the standard equation, center, vertices and foci.",
    "hint": "Square both distances and complete the $x$ square.",
    "solution": "$x^2+y^2=(x-4)^2/4$ gives $3x^2+4y^2+8x-16=0$, or $(x+4/3)^2/(64/9)+y^2/(16/3)=1$. Center is $(-4/3,0)$, $a=8/3,c=4/3$, vertices $(4/3,0),(-4,0)$ and foci $(0,0),(-8/3,0)$."
  },
  {
    "lesson": 7,
    "type": "Proof",
    "question": "From $\\sqrt{x^2+y^2}=e|x-d|$ with $d,e>0$, prove the three conic classifications and explain finite-directrix $e=0$.",
    "hint": "Keep the sign of $1-e^2$.",
    "solution": "Squaring reversibly yields $(1-e^2)x^2+y^2+2e^2dx-e^2d^2=0$. For $e<1$ completing the square gives a positive sum equal to a positive constant; for $e=1$, $y^2=d^2-2dx$; for $e>1$, with $q=e^2-1$, it becomes $q(x-e^2d/q)^2-y^2=e^2d^2/q$. These are ellipse, parabola and hyperbola. At $e=0$ the original equation forces only the focus, not a circle."
  },
  {
    "lesson": 7,
    "type": "Fluency",
    "question": "For $F=(0,0)$, $x=6$ and $e=1$, find the Cartesian equation, vertex, polar equation and once-only angular domain.",
    "hint": "The singular ray points away from the directrix.",
    "solution": "$x^2+y^2=(x-6)^2$ gives $y^2=-12(x-3)$, vertex $(3,0)$. The polar radius is $6/(1+\\cos\\theta)$ on $-\\pi<\\theta<\\pi$. At the excluded endpoints the denominator vanishes and no finite point occurs."
  },
  {
    "lesson": 8,
    "type": "Fluency",
    "question": "For $F=(0,0)$, $x=2$ and $e=\\sqrt2$, find center, vertices, foci, directrices and asymptotes.",
    "hint": "Use $e^2-1=1$.",
    "solution": "The equation is $(x-4)^2/8-y^2/8=1$: $h=4,a=b=2\\sqrt2,c=4$. Vertices are $(4\\pm2\\sqrt2,0)$, foci $(0,0),(8,0)$, directrices $x=2,6$, and asymptotes $y=\\pm(x-4)$."
  },
  {
    "lesson": 9,
    "type": "Interpretation",
    "question": "For $e=2,d=3$, interpret signed polar pairs at $\\theta=0,\\pi$ and explain the missing branch with nonnegative radius.",
    "hint": "A negative radius reverses physical direction.",
    "solution": "The signed formula gives $r(0)=2$, point $(2,0)$, and $r(\\pi)=-6$, point $(6,0)$. The latter has focus distance $6$ and directrix distance $3$. Requiring $r\\ge0$ in $6/(1+2\\cos\\theta)$ removes that right branch; $R=6/(2\\cos\\phi-1)$ for $|\\phi|<\\pi/3$ restores it."
  },
  {
    "lesson": 9,
    "type": "Proof",
    "question": "For $e>1,d>0$, derive separate nonnegative-radius formulas and domains for both hyperbola branches and exclude denominator-zero angles.",
    "hint": "Solve the distance equation separately on $x<d$ and $x>d$.",
    "solution": "Left of $d$, $R=e(d-R\\cos\\theta)$ gives $R=ed/(1+e\\cos\\theta)>0$ for $|\\theta|<\\arccos(-1/e)$. Right of $d$, $R=e(R\\cos\\phi-d)$ gives $R=ed/(e\\cos\\phi-1)>0$ for $|\\phi|<\\arccos(1/e)$. At either boundary the unsolved equation would say $0=ed>0$, so no finite point lies there. Each eligible ray has one radius."
  },
  {
    "lesson": 8,
    "type": "Fluency",
    "question": "Analyze $(x-3)^2/25+(y+1)^2/9=1$, including a once-only parametrization.",
    "hint": "The larger denominator identifies the major axis.",
    "solution": "Center $(3,-1)$, $a=5,b=3,c=4,e=4/5$; vertices $(-2,-1),(8,-1)$; foci $(-1,-1),(7,-1)$; directrices $x=-13/4,37/4$. The path $(3+5\\cos t,-1+3\\sin t)$ for $0\\le t<2\\pi$ traces each point once."
  },
  {
    "lesson": 8,
    "type": "Interpretation",
    "question": "For $(y+2)^2=-12(x-1)$, find focus, directrix, opening and a complete parametrization.",
    "hint": "Compare with $Y^2=4pX$.",
    "solution": "$p=-3$, so vertex $(1,-2)$, focus $(-2,-2)$, directrix $x=4$, and opening left. The path $(1-3t^2,-2-6t)$ for real $t$ satisfies the equation and reaches each $y$ once."
  },
  {
    "lesson": 9,
    "type": "Modeling",
    "question": "Keep $F=(0,0)$ and directrix $x=2$. For $e=1/2,1,2$, inspect $P_e=(0,2e)$: measure both distances, classify and find near vertices.",
    "hint": "The foot on the directrix is $(2,2e)$.",
    "solution": "Focus distances are $1,2,4$ and directrix distances are all $2$, so ratios are $1/2,1,2$: ellipse, parabola, hyperbola. Near vertices are $2e/(1+e)=2/3,1,4/3$ on the positive $x$ axis. The ellipse's other vertex is $(-2,0)$ and the hyperbola's is $(4,0)$. These point checks illustrate; the defining equation proves each entire curve."
  },
  {
    "lesson": 7,
    "type": "Challenge",
    "question": "With $p=3$ fixed and $d=3/e$, prove the polar conics approach a radius-three circle as $e\\to0^+$; explain finite-directrix $e=0$.",
    "hint": "Bound the denominator uniformly for $0<e<1$.",
    "solution": "$r_e=3/(1+e\\cos\\theta)$ satisfies $|r_e-3|\\le3e/(1-e)\\to0$ uniformly in angle. The directrix recedes to infinity since $d=3/e$. At $e=0$ with finite $d$, the original ratio equation gives only the focus; the circle is a limit."
  },
  {
    "lesson": 8,
    "type": "Proof",
    "question": "For $(x-3)^2-y^2/3=1$, prove the left focus $(1,0)$ and directrix $x=5/2$ give eccentricity two on both branches.",
    "hint": "Eliminate $y^2$ before taking a square root.",
    "solution": "The equation gives $y^2=3(x-3)^2-3$, hence $(x-1)^2+y^2=4(x-5/2)^2$. Taking nonnegative square roots gives distance to $(1,0)$ equal to $2|x-5/2|$ on both real branches $x\\le2$ and $x\\ge4$."
  },
  {
    "lesson": 9,
    "type": "Challenge",
    "question": "For $e=2,d=3$, distinguish polar singular directions, right-branch boundary directions and Cartesian asymptote lines.",
    "hint": "Compute both angular boundaries and the center.",
    "solution": "$1+2\\cos\\theta=0$ at $2\\pi/3,4\\pi/3$; $2\\cos\\phi-1=0$ at $\\phi=\\pm\\pi/3$. These are excluded rays toward infinity. The centered equation $(x-4)^2/4-y^2/12=1$ has asymptote lines $y=\\pm\\sqrt3(x-4)$ through $(4,0)$, rather than through the focus."
  }
]);
depth["19"].questions.push(...[
  {
    "lesson": 7,
    "type": "Fluency",
    "question": "For $\\mathbf r(t)=(2\\cos t,2\\sin t,t/2)$, find point, unit tangent and curvature at $t=0$.",
    "hint": "Differentiate and normalize velocity.",
    "solution": "$P=(2,0,0)$, velocity $(0,2,1/2)$ with norm $\\sqrt{17}/2$, so unit tangent is $(0,4,1)/\\sqrt{17}$. With radius $2$ and rise coefficient $1/2$, curvature is $2/(4+1/4)=8/17$."
  },
  {
    "lesson": 7,
    "type": "Proof",
    "question": "For a twice differentiable path with positive speed, prove constant speed implies $\\mathbf v\\cdot\\mathbf a=0$. Does equality at one instant imply constant speed?",
    "hint": "Differentiate $\\mathbf v\\cdot\\mathbf v$.",
    "solution": "Its derivative is $2\\mathbf v\\cdot\\mathbf a$, so constant speed forces orthogonality throughout an interval. For $\\mathbf r(t)=(t,t^2,0)$, the dot product is $4t$, zero at $t=0$, but speed $\\sqrt{1+4t^2}$ varies. Equality at one instant is insufficient."
  },
  {
    "lesson": 7,
    "type": "Interpretation",
    "question": "For $\\mathbf r(t)=(2\\cos t,2\\sin t,t/2)$, why do $t=0$ and $t=2\\pi$ coincide in a top projection without meeting in space?",
    "hint": "Compare all three coordinates.",
    "solution": "The world points are $(2,0,0)$ and $(2,0,\\pi)$. Both project to $(2,0)$ when height is discarded. Screen coincidence is not a world intersection."
  },
  {
    "lesson": 7,
    "type": "Modeling",
    "question": "A radius-$2\\,\\mathrm m$ helix winds around the $z$ axis, rising $1\\,\\mathrm m$ per full counterclockwise turn as viewed from the positive $z$ axis. Let $\\theta$ be its angle in the $xy$ plane and set $\\mathbf r(0)=(2,0,0)\\,\\mathrm m$. Construct its parametrization, then find its quarter-turn point and one-turn length.",
    "hint": "Convert rise per turn to rise per radian.",
    "solution": "$\\mathbf r(\\theta)=(2\\cos\\theta,2\\sin\\theta,\\theta/(2\\pi))\\,\\mathrm m$. At $\\theta=\\pi/2$ it is $(0,2,1/4)\\,\\mathrm m$. Speed per radian is $\\sqrt{4+1/(4\\pi^2)}\\,\\mathrm m$, so one-turn length is $\\sqrt{16\\pi^2+1}\\,\\mathrm m$."
  }
]);
depth["20"].questions.push(...[
  {
    "lesson": 7,
    "type": "Fluency",
    "question": "For the ellipsoid $(x-1)^2/9+(y+2)^2/4+(z-3)^2/16=1$, find its $z=5$ trace and the horizontal domain of its height branches.",
    "hint": "Move the vertical term to the right.",
    "solution": "With $X=x-1,Y=y+2,Z=z-3$, $Z=2$ gives $X^2/9+Y^2/4=3/4$, an ellipse with semiaxes $3\\sqrt3/2,\\sqrt3$. The branches $z=3\\pm4\\sqrt{1-X^2/9-Y^2/4}$ require $X^2/9+Y^2/4\\le1$ and coincide only on its boundary."
  },
  {
    "lesson": 8,
    "type": "Interpretation",
    "question": "For $X^2/4+Y^2/9-Z^2/16=1$, identify sheet count and horizontal traces at $Z=0,3$.",
    "hint": "Inspect the trace's positive right side.",
    "solution": "$X^2/4+Y^2/9=1+Z^2/16$ is an ellipse at every height; its continuous height-angle parametrization gives one sheet. Semiaxes are $2,3$ at zero and $5/2,15/4$ at $Z=3$."
  },
  {
    "lesson": 8,
    "type": "Fluency",
    "question": "For $Z^2/16-X^2/4-Y^2/9=1$, classify traces at $Z=0,\\pm4,\\pm5$ and give both height branches.",
    "hint": "A negative sum of squares has no real points.",
    "solution": "The horizontal sum equals $Z^2/16-1$, negative at zero, zero at $\\pm4$, and $9/16$ at $\\pm5$. Traces are empty, individual tip points, then ellipses with semiaxes $3/2,9/4$. The separate branches are $Z=\\pm4\\sqrt{1+X^2/4+Y^2/9}$."
  },
  {
    "lesson": 8,
    "type": "Proof",
    "question": "Why cannot all three parameters $a,b,c$ be recovered uniquely from exact traces of the cone $X^2/a^2+Y^2/b^2=Z^2/c^2$?",
    "hint": "Scale all denominators together.",
    "solution": "For every $\\lambda>0$, replacing $(a,b,c)$ by $(\\lambda a,\\lambda b,\\lambda c)$ divides both sides by $\\lambda^2$, leaving the same locus. Even all exact traces determine only ratios such as $a/c,b/c$ without a convention."
  },
  {
    "lesson": 9,
    "type": "Fluency",
    "question": "With metre coordinates, analyze $z-1=2[(x+2)^2/9+(y-1)^2/4]$ at $z=0,1,3$ and find its $x=-2$ vertical trace.",
    "hint": "The bracket is nonnegative.",
    "solution": "At $z=0$ the required bracket is $-1/2$, so the trace is empty. At $z=1$ the vertex is $(-2,1,1)$. At $z=3$ the ellipse has semiaxes $3,2$ metres. Setting $x=-2$ gives $z=1+(y-1)^2/2$, an upward parabola."
  },
  {
    "lesson": 9,
    "type": "Interpretation",
    "question": "For $z+1=2[(x-2)^2/16-(y+3)^2/9]$, describe traces at $z=-3,-1,1$ and the two central vertical traces.",
    "hint": "Use $X=x-2,Y=y+3$ and the sign of the level.",
    "solution": "At $z=1,-1,-3$, $X^2/16-Y^2/9$ is $1,0,-1$: an $X$-opening hyperbola, lines $Y=\\pm3X/4$, then a $Y$-opening hyperbola with $Y$ intercepts $\\pm3$. At $Y=0$, $z=-1+X^2/8$ opens upward; at $X=0$, $z=-1-2Y^2/9$ opens downward."
  },
  {
    "lesson": 9,
    "type": "Modeling",
    "question": "An idealized ellipsoidal tank in metres satisfies $x^2/9+y^2/4+(z-5)^2=1$. Find its vertical extent and horizontal sectional area at $z=5.6$.",
    "hint": "Find trace semiaxes before area.",
    "solution": "The vertical extent is $4\\le z\\le6$ metres. At $z=5.6$, the horizontal multiplier is $1-0.6^2=16/25$, giving semiaxes $12/5$ and $8/5$ metres. Area is $\\pi(12/5)(8/5)=96\\pi/25\\,\\mathrm{m}^2$, a section rather than volume."
  },
  {
    "lesson": 9,
    "type": "Challenge",
    "question": "Assume an axis-aligned one-sheet form centered at $(1,-2,3)$. Its $z=3$ ellipse has semiaxes $2,3$; its $z=7$ ellipse has semiaxes $2\\sqrt2,3\\sqrt2$. Recover the equation and discuss unrestricted uniqueness.",
    "hint": "Compare squared semiaxis multipliers.",
    "solution": "The center trace sets $a=2,b=3$. At $z=7$, factor $2=1+16/c^2$, so $c=4$ and the assumed equation is $(x-1)^2/4+(y+2)^2/9-(z-3)^2/16=1$. Without a family assumption, adding $\\varepsilon(z-3)^2(z-7)^2$ to its right side preserves both measured traces and changes other heights, so uniqueness fails."
  },
  {
    "lesson": 9,
    "type": "Proof",
    "question": "A display clips $X^2/4+Y^2/9-Z^2/16=1$ to $|Z|\\le8$. Prove the full surface is unbounded and state what the image establishes.",
    "hint": "Construct a world point for arbitrary $Z$.",
    "solution": "For every real $Z$, $(X,Y,Z)=(2\\sqrt{1+Z^2/16},0,Z)$ satisfies the equation. Arbitrarily large $|Z|$ gives points outside every bounded region. The clipped image shows only the declared finite patch, not the global extent."
  }
]);
depth["21"].questions.push(...[
  {
    "lesson": 6,
    "type": "Fluency",
    "question": "Find tangent plane and unit normals to $z=x^2/4-y^2$ at $(2,0,1)$.",
    "hint": "Use $F=x^2/4-y^2-z$.",
    "solution": "$F(P)=0$ and $\\nabla F(P)=(1,0,-1)\\ne0$. Thus $(x-2)-(z-1)=0$, or $x-z=1$; division by $\\sqrt2$ gives unit normals $\\pm(1,0,-1)/\\sqrt2$."
  },
  {
    "lesson": 6,
    "type": "Proof",
    "question": "Explain why the cone $x^2/4+y^2=z^2$ lacks a unique tangent plane at its apex.",
    "hint": "Test three generator directions.",
    "solution": "The gradient vanishes at the origin. Generator directions $(2,0,1)$, $(-2,0,1)$ and $(0,1,1)$ lie on the cone and have nonzero scalar triple product, so no plane contains all three. This actual geometry, not zero gradient alone, rules out a unique tangent plane."
  },
  {
    "lesson": 6,
    "type": "Interpretation",
    "question": "At $(2,0,1)$ on $z=x^2/4-y^2$, test $(1,0,1)$ as a tangent direction and explain why a top-view angle is insufficient.",
    "hint": "Use the world gradient.",
    "solution": "The world normal is $(1,0,-1)$ and its dot product with $(1,0,1)$ is zero, so the direction lies in the tangent plane. Top projection drops both $z$ components and cannot establish world orthogonality."
  }
]);
depth["27"].questions.push(...[
  {
    "lesson": 7,
    "type": "Fluency",
    "question": "Find all solutions of $y''-y=2t+3e^{2t}+4\\cos t$.",
    "hint": "Split the forcing into three trial families.",
    "solution": "Roots are $1,-1$. Particular terms $-2t,e^{2t},-2\\cos t$ have images $2t,3e^{2t},4\\cos t$ under $D^2-1$. Add the homogeneous part: $y=C_1e^t+C_2e^{-t}-2t+e^{2t}-2\\cos t$."
  },
  {
    "lesson": 7,
    "type": "Interpretation",
    "question": "With zero initial position and velocity, compare $y''+4y=\\cos2t$ and $z''+4z=\\cos3t$. Why does one trial require $t$?",
    "hint": "Check the characteristic roots $\\pm2i$.",
    "solution": "Frequency two overlaps the homogeneous space and yields $y=t\\sin2t/4$. Frequency three gives $z=(\\cos2t-\\cos3t)/5$. Both fit zero data and their respective forcing residuals. At $t=\\pi/2$, $y=0$ but $z=-1/5$, so resonance does not imply pointwise dominance."
  },
  {
    "lesson": 7,
    "type": "Fluency",
    "question": "Solve $y''-2y'+y=e^t$ with $y(0)=2,y'(0)=1$.",
    "hint": "Use the double root before fitting data.",
    "solution": "Writing $y=e^tP$ reduces the equation to $P''=1$. Thus $P=t^2/2+C_1+C_2t$; data give $C_1=2,C_2=-1$. The solution $e^t(2-t+t^2/2)$ has residual $e^t$ and both required initial values."
  },
  {
    "lesson": 8,
    "type": "Proof",
    "question": "For $y^{\\prime\\prime}+p(t)y^{\\prime}+q(t)y=g(t)$ on an open interval $I$, assume $p,q,g$ are continuous. Let $y_1,y_2$ be homogeneous solutions whose Wronskian never vanishes on $I$, and choose $t_0\\in I$. Derive the variation-of-parameters constraints and definite-integral formula, including the particular solution's value and derivative at $t_0$.",
    "hint": "Simplify the first derivative before substituting.",
    "solution": "Write $W=y_1y_2^{\\prime}-y_1^{\\prime}y_2$ and set $y_p=u_1y_1+u_2y_2$. Impose $u_1^{\\prime}y_1+u_2^{\\prime}y_2=0$, so $y_p^{\\prime}=u_1y_1^{\\prime}+u_2y_2^{\\prime}$. Differentiating and substituting the homogeneous equations leaves $u_1^{\\prime}y_1^{\\prime}+u_2^{\\prime}y_2^{\\prime}=g$. The determinant is $W\\ne0$, so Cramer's rule gives $u_1^{\\prime}=-y_2g/W$ and $u_2^{\\prime}=y_1g/W$. Choose zero-based integrals to obtain $y_p(t)=-y_1(t)\\int_{t_0}^{t}\\frac{y_2(s)g(s)}{W(s)}\\,ds+y_2(t)\\int_{t_0}^{t}\\frac{y_1(s)g(s)}{W(s)}\\,ds$. Both integrals vanish at $t_0$, giving $y_p(t_0)=0$; the simplified first-derivative relation gives $y_p^{\\prime}(t_0)=0$. Continuity and the nonzero denominator justify these operations throughout $I$. Adding a homogeneous combination fits arbitrary initial data."
  },
  {
    "lesson": 8,
    "type": "Fluency",
    "question": "Solve $y''+y=\\sec t$ with $y(0)=y'(0)=0$ and give the maximal forcing-continuity interval containing zero.",
    "hint": "Use $W(\\cos t,\\sin t)=1$.",
    "solution": "The interval is $(-\\pi/2,\\pi/2)$. Here $u_1'=-\\tan t,u_2'=1$ integrate from zero to $\\log\\cos t,t$. Thus $y=\\cos t\\log\\cos t+t\\sin t$ and $y'=-\\sin t\\log\\cos t+t\\cos t$; the data vanish and $y''+y=\\sin t\\tan t+\\cos t=\\sec t$."
  },
  {
    "lesson": 7,
    "type": "Modeling",
    "question": "A $2\\,\\mathrm{kg}$ mass has spring constant $8\\,\\mathrm{N/m}$, no damping, force $2\\cos(2t/\\mathrm s)\\,\\mathrm N$ and zero initial displacement and velocity. Find displacement and velocity at $t=\\pi\\mathrm s/4$.",
    "hint": "Divide by mass and retain units.",
    "solution": "The normalized equation is $x''+4\\,\\mathrm{s}^{-2}x=(1\\,\\mathrm{m/s^2})\\cos(2t/\\mathrm s)$. Resonance gives $x=(0.25\\,\\mathrm{m/s})t\\sin(2t/\\mathrm s)$; differentiation and substitution verify the equation and zero data. At $t=\\pi\\mathrm s/4$, $x=\\pi/16\\,\\mathrm m$ and $x'=1/4\\,\\mathrm{m/s}$."
  },
  {
    "lesson": 8,
    "type": "Challenge",
    "question": "Solve $y''+y=\\sec t$ with $y(\\pi)=y'(\\pi)=0$. State the interval and real logarithm.",
    "hint": "Integrate from $\\pi$ on its own forcing interval.",
    "solution": "On $(\\pi/2,3\\pi/2)$, $\\cos t<0$. The parameters give $u_1=\\log|\\cos t|$ and $u_2=t-\\pi$, so $y=\\cos t\\log|\\cos t|+(t-\\pi)\\sin t$. Differentiating verifies $y''+y=\\sec t$ and both data; poles prevent continuation through either endpoint."
  },
  {
    "lesson": 7,
    "type": "Challenge",
    "question": "Find a particular solution of $(D-1)^2y=te^t$, explaining the trial degree.",
    "hint": "Root one has multiplicity two.",
    "solution": "Set $y=e^tP$, so $P''=t$. The resonant polynomial $P=t^2(At+B)$ gives $6At+2B=t$, hence $A=1/6,B=0$. Thus $y_p=e^tt^3/6$, and applying the operator returns $te^t$."
  },
  {
    "lesson": 8,
    "type": "Interpretation",
    "question": "Why cannot $y_1=\\cos t,y_2=2\\cos t$ serve as a variation-of-parameters pair for $y''+y=g$?",
    "hint": "Compute the Wronskian.",
    "solution": "Their Wronskian is identically zero, so the constraint matrix is singular. Their span misses the $\\sin t$ mode. Replacing $2\\cos t$ by $\\sin t$ gives a fundamental pair with $W=1$."
  },
  {
    "lesson": 7,
    "type": "Proof",
    "question": "For $y''=t$, $y(0)=y'(0)=0$, explain why a degree-one trial fails and find the response.",
    "hint": "Zero is a double characteristic root.",
    "solution": "Here $p(z)=z^2$ and multiplicity $s=2$, so use $y=At^3+Bt^2$. Substitution yields $6At+2B=t$, giving $A=1/6,B=0$. Thus $y=t^3/6$ with $y''=t$ and both zero data."
  },
  {
    "lesson": 9,
    "type": "Fluency",
    "question": "For $y'=ty,y(0)=2$, construct through degree four and find its residual.",
    "hint": "Scale the $y(0)=1$ coefficient chain.",
    "solution": "$a_0=2,a_1=0,a_2=1,a_4=1/4$, so $P_4=2+t^2+t^4/4$. Direct differentiation gives $P_4'-tP_4=-t^5/4$. The full factorial series converges with derivative series and equals $2e^{t^2/2}$."
  },
  {
    "lesson": 9,
    "type": "Interpretation",
    "question": "For $y'=ty,y(0)=1$, compare degree-four residual and value error at $t=1$; give a bound on $|t|\\le1$.",
    "hint": "Residual and solution error measure different failures.",
    "solution": "$P_4=1+t^2/2+t^4/8$ has residual $-t^5/8$, hence $-1/8$ at one. Value error is $e^{1/2}-13/8\\approx0.0237213$. Taylor's remainder gives $|e^{t^2/2}-P_4(t)|\\le e^{1/2}/48\\approx0.0343484$ throughout $|t|\\le1$."
  },
  {
    "lesson": 9,
    "type": "Proof",
    "question": "For $y''+ty=0$, $y(0)=1,y'(0)=2$, turn its coefficient recurrence into an actual solution.",
    "hint": "Inspect indices modulo three and bound both derivative series.",
    "solution": "Coefficient matching gives $a_2=0$ and $a_{m+3}=-a_m/[(m+3)(m+2)]$. Thus residue-two terms vanish; the others begin $1,-t^3/6,t^6/180$ and $2t,-t^4/6,t^7/252$. On $|t|\\le T$, successive absolute terms have ratio at most $T^3/[(3k+s+3)(3k+s+2)]\\to0$; multiplying by degree factors for two derivatives still converges uniformly. Substitution then cancels all coefficients and $a_0,a_1$ verify the data."
  },
  {
    "lesson": 9,
    "type": "Modeling",
    "question": "A quantity $Y$ obeys $dY/dt=(t/\\tau^2)Y$, $Y(0)=3$ units, with $\\tau=2$ seconds. Give a degree-four prediction at $t=\\tau$ and a uniform error certificate on $|t|\\le\\tau$.",
    "hint": "Use dimensionless $u=t^2/(2\\tau^2)$.",
    "solution": "$Y=3e^u$ units and $P_4=3(1+u+u^2/2)$ units. At $t=\\tau$, $u=1/2$, so $P_4=39/8=4.875$ units versus $3e^{1/2}\\approx4.94616$. Taylor's bound is $3e^{1/2}(1/2)^3/3!=e^{1/2}/16\\approx0.103045$ units uniformly on the interval."
  },
  {
    "lesson": 9,
    "type": "Challenge",
    "question": "Solve $(1-t)y'=y,y(0)=1$ by coefficients; compare centered-series and maximal IVP intervals.",
    "hint": "Multiply out before matching powers.",
    "solution": "The $t^n$ equation is $(n+1)a_{n+1}-na_n=a_n$, hence every $a_n=1$. The geometric series converges to $1/(1-t)$ on $(-1,1)$, where its derivative verifies the ODE. The rational IVP solution extends on $(-\\infty,1)$. At $t=-1$ the centered series diverges although the solution value is $1/2$; $t=1$ is singular."
  }
]);
depth["02"].questions.push(...[
  {
    "lesson": 7,
    "type": "Fluency",
    "question": "Evaluate $\\sinh(\\ln2)$, $\\cosh(\\ln2)$ and $\\tanh(\\ln2)$.",
    "hint": "Replace $e^{\\ln2}$ and $e^{-\\ln2}$ first.",
    "solution": "They are $2$ and $1/2$, so the values are $3/4$, $5/4$ and $(3/4)/(5/4)=3/5$. Their squares differ by $25/16-9/16=1$."
  },
  {
    "lesson": 7,
    "type": "Proof",
    "question": "Derive $\\cosh^2t-\\sinh^2t=1$ from the exponential definitions for every real $t$.",
    "hint": "Use a difference of squares.",
    "solution": "The difference is $[(e^t+e^{-t})^2-(e^t-e^{-t})^2]/4=4e^te^{-t}/4=1$. Every real $t$ is allowed because the exponential definitions exist there and $e^te^{-t}=1$."
  },
  {
    "lesson": 7,
    "type": "Interpretation",
    "question": "Why does $\\cosh t=5/4$ have two real solutions although $\\operatorname{arcosh}(5/4)$ has one value?",
    "hint": "State the inverse branch.",
    "solution": "Evenness pairs $t$ and $-t$; solving the exponential quadratic gives $t=\\pm\\ln2$. Restricting $\\cosh$ to $t\\ge0$ makes it one-to-one, so its inverse returns only $\\ln2$."
  },
  {
    "lesson": 7,
    "type": "Modeling",
    "question": "A right-branch point is $(a\\cosh t,a\\sinh t)$ with $a>0$. Its height is $3a/4$. Find its horizontal coordinate and parameter.",
    "hint": "Divide the height equation by $a$.",
    "solution": "$\\sinh t=3/4$, so $t=\\operatorname{arsinh}(3/4)=\\ln(3/4+5/4)=\\ln2$. Positivity on the right branch gives $\\cosh t=5/4$ and horizontal coordinate $5a/4$. The parameter is dimensionless."
  },
  {
    "lesson": 7,
    "type": "Challenge",
    "question": "Solve $\\tanh t=q$ for real $t$, including the allowable $q$.",
    "hint": "Put $u=e^{2t}>0$.",
    "solution": "$q=(u-1)/(u+1)$ gives $u=(1+q)/(1-q)>0$ precisely for $-1<q<1$. Thus $t=\\frac12\\ln[(1+q)/(1-q)]$. The endpoints are limiting values, never attained."
  }
]);
depth["06"].questions.push(...[
  {
    "lesson": 6,
    "type": "Fluency",
    "question": "Differentiate $\\tanh(2x-1)$.",
    "hint": "Name the inner derivative.",
    "solution": "The inner rate is $2$ and $(\\tanh u)'=1/\\cosh^2u$, so the derivative is $2/\\cosh^2(2x-1)$ for every real $x$."
  },
  {
    "lesson": 6,
    "type": "Proof",
    "question": "Derive the real inverse derivatives of $\\operatorname{arsinh}x$ and $\\operatorname{arcosh}x$ and state their domains.",
    "hint": "Differentiate each defining inverse equation.",
    "solution": "For $x=\\sinh y$, $1=\\cosh y\\,y'$ and $\\cosh y=\\sqrt{1+x^2}>0$, giving $1/\\sqrt{1+x^2}$ on $\\mathbb R$. For $x=\\cosh y$ on $y\\ge0$, $x>1$ gives $\\sinh y=\\sqrt{x^2-1}>0$ and derivative $1/\\sqrt{x^2-1}$. There is no finite derivative at $x=1$."
  },
  {
    "lesson": 6,
    "type": "Interpretation",
    "question": "Is $\\operatorname{arcosh}(1+x^2)$ differentiable at zero?",
    "hint": "Use the nonnegative inverse branch in $\\cosh(2u)=1+2\\sinh^2u$ to express the function using $\\operatorname{arsinh}(|x|/\\sqrt2)$. Then form the point difference quotient.",
    "solution": "Put $g(x)=\\operatorname{arcosh}(1+x^2)$, which is defined for every real $x$ and has $g(0)=0$. The identity $\\cosh(2u)=1+2\\sinh^2u$, with the nonnegative inverse branch, gives $g(h)=2\\operatorname{arsinh}(|h|/\\sqrt2)$. For $h\\ne0$, its point difference quotient is $[g(h)-g(0)]/h=\\sqrt2(|h|/h)[\\operatorname{arsinh}(|h|/\\sqrt2)/(|h|/\\sqrt2)]$. The bracket tends to $1$, since $\\operatorname{arsinh}$ is differentiable at zero with derivative $1$. The quotient therefore tends to $+\\sqrt2$ from the right and $-\\sqrt2$ from the left. They disagree, so no derivative exists at zero. The following original off-zero calculation is consistent with this point-quotient proof: Away from zero the derivative is $2x/(|x|\\sqrt{x^2+2})=2\\operatorname{sgn}(x)/\\sqrt{x^2+2}$. Left and right slopes approach $-\\sqrt2$ and $+\\sqrt2$, so no derivative exists at zero."
  },
  {
    "lesson": 6,
    "type": "Modeling",
    "question": "For $y(t)=L\\tanh(t/\\tau)$ on $t\\ge0$, with $L,\\tau>0$, find initial rate, units and output range.",
    "hint": "Apply the chain rule and strict range of $\\tanh$.",
    "solution": "$y'(t)=(L/\\tau)/\\cosh^2(t/\\tau)$, hence $y'(0)=L/\\tau$ in output units per time. The function starts at zero, increases and approaches $L$ without reaching it, so its range is $[0,L)$."
  },
  {
    "lesson": 6,
    "type": "Challenge",
    "question": "Differentiate $\\operatorname{arcosh}(\\cosh x)$ wherever possible.",
    "hint": "Identify the inverse branch first.",
    "solution": "The expression equals $|x|$. Its derivative is $-1$ for $x<0$, $1$ for $x>0$ and undefined at zero. The ordinary inverse formula violates its $u>1$ condition at zero."
  }
]);

// Exercise teaching edition: exact field changes after all supplemental questions are assembled.
Object.assign(depth['09'].questions[2], {"type":"Challenge"}); // 09.33
Object.assign(depth['10'].questions[1], {"type":"Proof","question":"For an increasing $f$ on $[a,b]$, derive by telescoping the gap between uniform right and left sums with $n$ panels. Prove that the gap tends to zero as $n\\to\\infty$.","hint":"Write $x_i=a+ih$ and subtract $h\\sum_{i=1}^n f(x_{i-1})$ from $h\\sum_{i=1}^n f(x_i)$. Which interior terms cancel?","solution":"Assume $a<b$ and $f$ is finite and increasing on $[a,b]$. For $h=(b-a)/n$ and $x_i=a+ih$, the uniform sums satisfy $R_n-L_n=h\\sum_{i=1}^{n}(f(x_i)-f(x_{i-1}))$. The interior values cancel in the telescoping sum, leaving $R_n-L_n=h(f(b)-f(a))\\ge0$. The endpoint difference is finite and independent of $n$, while $h\\to0$; therefore the gap tends to zero."}); // 10.32
Object.assign(depth['10'].questions[5], {"type":"Challenge"}); // 10.36
Object.assign(depth['12'].questions[6], {"type":"Fluency"}); // 12.37
Object.assign(depth['12'].questions[9], {"type":"Fluency"}); // 12.40
Object.assign(depth['18'].questions[4], {"type":"Interpretation"}); // 18.35
Object.assign(depth['18'].questions[14], {"type":"Interpretation"}); // 18.45
Object.assign(depth['19'].questions[3], {"type":"Challenge"}); // 19.34
Object.assign(depth['20'].questions[1], {"type":"Interpretation"}); // 20.32
Object.assign(depth['20'].questions[3], {"type":"Interpretation"}); // 20.34
Object.assign(depth['20'].questions[10], {"type":"Fluency"}); // 20.41
Object.assign(depth['22'].questions[2], {"type":"Challenge"}); // 22.33
Object.assign(depth['22'].questions[3], {"type":"Challenge"}); // 22.34
Object.assign(depth['25'].questions[2], {"type":"Challenge"}); // 25.33
Object.assign(depth['26'].questions[3], {"type":"Challenge"}); // 26.34
Object.assign(depth['27'].questions[15], {"type":"Fluency"}); // 27.46
Object.assign(depth['28'].questions[0], {"question":"On a fixed interval $[0,T]$, suppose Euler starts from exact data, its local defect is at most $Ch^2$ uniformly, and $f(t,y)$ is $L$-Lipschitz in $y$ on a region containing the exact and numerical states. Prove a global $O(h)$ error bound for $Nh=T$, including $L=0$. Explain why this order need not be attained for every equation and give an equation where it is sharp.","hint":"Let $e_n$ be the state error. Derive $e_{n+1}\\le(1+Lh)e_n+Ch^2$, sum the geometric recurrence, then compare Euler on $y^{\\prime}=y$ with $e^T$.","solution":"Let $e_n=|y(t_n)-y_n|$, with $e_0=0$. Uniform local defect at most $Ch^2$ and the $L$-Lipschitz condition give $e_{n+1}\\le(1+Lh)e_n+Ch^2$. These hypotheses must hold on a region containing both trajectories through the fixed interval $[0,T]$.\n\nFor $L>0$, summing the geometric recurrence yields $e_n\\le Ch^2\\sum_{j=0}^{n-1}(1+Lh)^j=(Ch/L)((1+Lh)^n-1)\\le(Ch/L)(e^{LT}-1)$ when $nh\\le T$. For $L=0$, $e_n\\le nCh^2\\le CTh$. Thus the global error is $O(h)$ uniformly on the fixed interval. This is an upper bound, not a claim that every equation has nonzero first-order error.\n\nThe order is sharp in general: for $y^{\\prime}=y$, $y(0)=1$, and $Nh=T$, Euler gives $y_N=(1+h)^N$, while the exact value is $e^T$. Since $N\\log(1+h)=T-Th/2+O(h^2)$, $e^T-(1+h)^N=e^TTh/2+O(h^2)$ for fixed $T>0$."}); // 28.31

depth["02"].questions.push(...[{"question":"Solve $\\log_{1/2}(x-1)\\ge\\log_{1/2}3$ over the reals. Explain whether each endpoint of your answer is included.","type":"Fluency","hint":"First require a positive logarithm argument. Then use the monotonicity of a logarithm whose base is between zero and one.","solution":"The real logarithm requires $x-1>0$, so $x>1$. The function $\\log_{1/2}$ is strictly decreasing, hence the inequality is equivalent to $x-1\\le3$. Combining the conditions gives $1<x\\le4$, or $(1,4]$. At $x=4$ both logarithms are equal, so this endpoint is included. At $x=1$ the logarithm argument is zero and the expression is undefined, so that endpoint is excluded.","lesson":2},{"question":"Solve $\\sin^2\\theta=\\sin\\theta\\cos\\theta$ for $0\\le\\theta<2\\pi$. Explain exactly which valid solutions would be lost by dividing by $\\sin\\theta$.","type":"Proof","hint":"Move every term to one side and factor before dividing. The angle-addition identity can handle the second factor without another division.","solution":"The equation is equivalent to $\\sin\\theta(\\sin\\theta-\\cos\\theta)=0$. The first factor gives $\\theta=0,\\pi$ in the stated interval. The identity $\\sin\\theta-\\cos\\theta=\\sqrt2\\sin(\\theta-\\pi/4)$ gives $\\theta=\\pi/4,5\\pi/4$ for the second factor. The complete set is $\\{0,\\pi/4,\\pi,5\\pi/4\\}$. The value $2\\pi$ is outside the half-open interval. Division by $\\sin\\theta$ assumes it is nonzero and therefore loses the valid solutions $0$ and $\\pi$. Factoring preserves both branches.","lesson":4},{"question":"A straight ramp rises $1\\,\\mathrm m$ over $12\\,\\mathrm m$ of ramp surface. Find its horizontal run, grade and acute angle in radians. Compare its grade and angle with a ramp rising $1\\,\\mathrm m$ over $12\\,\\mathrm m$ of horizontal run. Label the quantities and state which ramp is steeper. Treat the supplied lengths as exact model values.","type":"Modeling","hint":"Draw two right triangles and label the hypotenuse and horizontal leg separately. Grade uses rise divided by horizontal run.","solution":"For the first ramp the surface length is $L=12\\,\\mathrm m$ and rise is $h=1\\,\\mathrm m$. Pythagoras gives horizontal run $d=\\sqrt{L^2-h^2}=\\sqrt{143}\\,\\mathrm m$. Its dimensionless grade is $h/d=1/\\sqrt{143}$, or $100/\\sqrt{143}$ percent, approximately $8.3624\\%$. Its acute angle is $\\theta=\\arctan(1/\\sqrt{143})$ radians. For the second ramp the horizontal run is $12\\,\\mathrm m$, so grade is $1/12$, approximately $8.3333\\%$, and angle is $\\arctan(1/12)$. Since $\\sqrt{143}<12$ and arctangent is increasing, the first ramp has both the larger grade and the larger angle. Dividing the first rise by its surface length would calculate a sine ratio rather than grade.","lesson":6}]);

depth["11"].questions.push(...[{"question":"For $0\\le x\\le1$, let $B(x)=\\int_x^{\\sqrt x}t\\,dt$. Find $B^{\\prime}(x)$ where the moving-endpoint rule applies, prove its absolute maximum on the stated domain, and find its one-sided endpoint derivatives. Explain why substituting $x=0$ into that boundary rule is invalid even though the right derivative exists.","type":"Challenge","hint":"First evaluate the integral exactly. Compare the polynomial with the moving-endpoint rule on the open interval, then use endpoint difference quotients and a completed square.","solution":"Direct evaluation gives $B(x)=(x-x^2)/2$ on $[0,1]$. For $0<x<1$, the upper boundary contributes $\\sqrt x/(2\\sqrt x)=1/2$ and the lower boundary contributes $x$, so $B^{\\prime}(x)=1/2-x$, in agreement with the polynomial. The form $B(x)=1/8-(x-1/2)^2/2$ proves the unique absolute maximum $1/8$ at $x=1/2$; both endpoint values are zero. The right quotient at zero is $B(h)/h=(1-h)/2\\to1/2$. With $h<0$, the left quotient at one is $[B(1+h)-B(1)]/h=-(1+h)/2\\to-1/2$. These are one-sided derivatives of the stated closed-domain function. At zero, the right difference quotient of $\\sqrt x$ is $1/\\sqrt h$, which is unbounded as $h\\downarrow0$. The moving-endpoint chain rule therefore lacks a required finite endpoint derivative; multiplying the zero integrand value by an infinity is not a legitimate real chain-rule step. Continuity of the integrand does not supply the missing endpoint-function differentiability assumption. The exact polynomial supplies a legitimate different proof.","lesson":6}]);

depth["13"].questions.push(...[{"question":"In one-dimensional motion let $m>0$ be constant, $v$ be continuously differentiable on $[a,b]$, $x^{\\prime}=v$, and the net force be $F(t)=m v^{\\prime}(t)$. Prove $W=\\frac m2[v(b)^2-v(a)^2]$ using time-parameterized signed work, without dividing by velocity. Apply it to a $2\\,\\mathrm{kg}$ particle with $v(t)=1-3t^2$ in metres per second, where $t$ is numerical time in seconds on $[0,1]$. Find its net work and displacement, and explain the velocity reversal.","type":"Proof","hint":"Start from signed work sums over a time partition. Apply the mean value theorem to each position increment, and use uniform continuity before differentiating kinetic energy.","solution":"For a time partition $P:a=t_0<\\cdots<t_n=b$ and tags $\\tau_i\\in[t_{i-1},t_i]$, signed work sums are $S_P=\\sum_i F(\\tau_i)[x(t_i)-x(t_{i-1})]$. The mean value theorem gives $x(t_i)-x(t_{i-1})=v(\\xi_i)\\Delta t_i$ for some $\\xi_i$ in that cell, regardless of the sign of the displacement. Since $v\\in C^1[a,b]$, both $v$ and $F=mv^{\\prime}$ are continuous on the closed interval. Let $M=\\max_{[a,b]}|F|$ and $\\omega_v(\\rho)=\\sup\\{|v(s)-v(t)|:s,t\\in[a,b],\\ |s-t|\\le\\rho\\}$. Uniform continuity gives $\\omega_v(\\rho)\\to0$ as $\\rho\\downarrow0$. With mesh $\\|P\\|=\\max_i\\Delta t_i$, replacing $v(\\xi_i)$ by $v(\\tau_i)$ changes the sum by at most $M(b-a)\\omega_v(\\|P\\|)\\to0$. The remaining tagged sums converge to $\\int_a^b F(t)v(t)\\,dt$, proving the time-parameterized work formula from signed work sums without dividing by velocity or inverting the path. Time-parameterized work is $W=\\int_a^b F(t)v(t)\\,dt$: signed displacement during a small time step is $v(t)\\,dt$. This formula follows from work sums even when the motion reverses; it does not require a global inverse $t(x)$. Since $v\\in C^1$ and mass is constant, $(m v^2/2)^{\\prime}=m v v^{\\prime}=Fv$. The Fundamental Theorem of Calculus gives $W=\\frac m2[v(b)^2-v(a)^2]$, including times when $v=0$. For the given motion $v(0)=1\\,\\mathrm{m/s}$ and $v(1)=-2\\,\\mathrm{m/s}$, so $W=(2/2)(4-1)=3\\,\\mathrm J$. The displacement is $\\int_0^1(1-3t^2)\\,dt=[t-t^3]_0^1=0\\,\\mathrm m$. Velocity changes sign at $t=1/\\sqrt3$ seconds. The particle first moves forward and then returns to its starting position. Its kinetic energy initially falls from $1\\,\\mathrm J$ to zero, then rises to $4\\,\\mathrm J$. The force varies with time, so zero net displacement does not imply zero work and does not give a constant-force formula $F\\,\\Delta x$.","lesson":4}]);

depth["14"].questions.push(...[{"question":"Without finding an antiderivative of the integrand, decide whether $\\int_1^{\\infty}\\frac{x}{x^2+3}\\,dx$ converges. Give a comparison that decides it and explain why $x/(x^2+3)\\le1/x$ alone does not decide convergence.","type":"Proof","hint":"For $x\\ge\\sqrt3$, compare $x^2+3$ with $2x^2$. A finite initial interval cannot change convergence of the tail.","solution":"For $x\\ge\\sqrt3$, $x^2+3\\le2x^2$, so $x/(x^2+3)\\ge1/(2x)\\ge0$. Consequently the truncated tail to $R\\ge\\sqrt3$ is at least $\\frac12\\ln(R/\\sqrt3)$, which tends to infinity. The integral over $[1,\\sqrt3]$ is finite because the integrand is continuous there. Thus the improper integral diverges to positive infinity. The upper bound by the divergent function $1/x$ is inconclusive: for example $1/x^2\\le1/x$ on $[1,\\infty)$, but $\\int_1^{\\infty}x^{-2}\\,dx$ converges. A divergent lower bound for a nonnegative integrand establishes divergence; a divergent upper bound does not.","lesson":3}]);

depth["18"].questions.push(...[{"question":"A projectile starts $5\\,\\mathrm m$ above flat ground at time zero with speed $20\\,\\mathrm{m/s}$ at $30^\\circ$ above the horizontal. Assume no drag and constant downward acceleration $g=10\\,\\mathrm{m/s^2}$. Find the first landing time for $t\\ge0$ and the horizontal range. Explain why the equal-height return-time and range formulas do not apply.","type":"Modeling","hint":"Keep the initial height in the vertical position. Solve for height zero and reject any root before launch.","solution":"The initial vertical velocity is $20\\sin30^\\circ=10\\,\\mathrm{m/s}$ and horizontal velocity is $20\\cos30^\\circ=10\\sqrt3\\,\\mathrm{m/s}$. With time measured in seconds, height above the flat ground is $y(t)=5+10t-5t^2$ in metres. Solving $y(t)=0$ gives $t=1\\pm\\sqrt2$ seconds. The negative root is before launch, so the physical landing time is $T=1+\\sqrt2$ seconds. It is the only nonnegative root and the vertical velocity there is $10-10T=-10\\sqrt2\\,\\mathrm{m/s}$, confirming descending impact. Horizontal range is $R=(10\\sqrt3)T=10\\sqrt3(1+\\sqrt2)\\,\\mathrm m$. The formulas $T=2v\\sin\\theta/g$ and $R=(v^2/g)\\sin(2\\theta)$ require equal launch and landing heights. Here the launch height is $5\\,\\mathrm m$, so deleting the height term would change the model.","lesson":6}]);

depth["20"].questions.push(...[{"question":"Let $f(x,y)=xy/(x^2+y^2)$ on $D=\\{(x,y):x>0,\\ 0<y<x^2\\}$. Prove its limit at the origin relative to $D$, with an explicit $\\delta$. Verify that the origin is an accumulation point of $D$. Contrast the result with the limit on the full punctured plane and explain why the path $y=x$ cannot be used near the origin in $D$.","type":"Proof","hint":"Find a bound controlled by the distance to the origin, using the domain restriction. Check whether the contrasting paths actually belong to that domain.","solution":"For a point of $D$, $0<f(x,y)\\le y/x<x\\le r$, where $r=\\sqrt{x^2+y^2}$. Given $\\varepsilon>0$, choose $\\delta=\\varepsilon$. Every point of $D$ with $0<r<\\delta$ then satisfies $|f(x,y)|<\\varepsilon$, so the domain-relative limit is zero. The points $(1/n,1/(2n^2))$ belong to $D$ and approach the origin, establishing that it is an accumulation point and the assertion is not vacuous. On the full punctured plane, the path $y=0$ gives value zero and $y=x$ gives $1/2$, so the full-plane limit does not exist. In $D$, the diagonal condition would require $0<x<x^2$, which fails for $0<x\\le1$; hence that diagonal is not an eligible near-origin path. A limit quantifies over the stated domain, and the bound above controls every eligible approach.","lesson":3}]);

depth["23"].questions.push(...[{"question":"Take dimensionless coordinates and weight $x^{-p}$ on $D_{\\alpha}=\\{0<x\\le1,\\ 0\\le y\\le x^{\\alpha}\\}$, where $\\alpha\\ge0$ and $p\\in\\mathbb R$. Define the improper weighted integral by the limit of regions $\\delta\\le x\\le1$ as $\\delta\\downarrow0$. Determine exactly when it is finite and its value. When finite, find the weight in $0<x<\\varepsilon$ for $0<\\varepsilon\\le1$. Explain the boundary case and recover the strip and triangle cases.","type":"Proof","hint":"Integrate first over the finite slice width. On every truncated region the integrand is continuous, so only the remaining improper power at zero decides convergence.","solution":"For $0<\\delta<1$, integrating over $0\\le y\\le x^{\\alpha}$ gives $I_{\\delta}=\\int_{\\delta}^1 x^{\\alpha-p}\\,dx$. Write $s=\\alpha-p$. If $s>-1$, the limit is $I=1/(s+1)=1/(\\alpha-p+1)$. If $s=-1$, $I_{\\delta}=\\ln(1/\\delta)$ diverges logarithmically. If $s<-1$, $(1-\\delta^{s+1})/(s+1)$ tends to positive infinity. Thus finiteness holds exactly for $p<\\alpha+1$. In that case the omitted near-edge weight is $\\int_0^{\\varepsilon}x^s\\,dx=\\varepsilon^{\\alpha-p+1}/(\\alpha-p+1)$; its fraction of the total is $\\varepsilon^{\\alpha-p+1}$. The coordinates and weight were stipulated dimensionless. At $\\alpha=0$ the region is a unit-height strip with threshold $p<1$; at $\\alpha=1$ it is a triangle with threshold $p<2$. Geometry changes the slice width and hence the threshold. Each finite-cutoff calculation is legitimate before taking the positive improper limit.","lesson":5}]);

depth["24"].questions.push(...[{"question":"For $T(u,v)=(u^2,v)$ on $[-1,1]\\times[0,1]$, find its image and absolute Jacobian. Evaluate the full parameter integral for $f(x,y)=x$ and compare it with the integral of $x$ over the image taken once. Give a correct single-coverage parameter region and explain the role of the critical line $u=0$.","type":"Proof","hint":"Count the preimages of a point with $x>0$. Treat the positive and negative halves of the parameter rectangle separately.","solution":"The image is $[0,1]^2$, because $x=u^2$ ranges from zero to one and $y=v$ ranges from zero to one. The determinant is $2u$, so the area factor is $|J|=2|u|$. The full parameter integral is $\\int_{-1}^1\\int_0^1 u^2\\,2|u|\\,dv\\,du=4\\int_0^1u^3\\,du=1$. The image integral taken once is $\\int_0^1\\int_0^1 x\\,dy\\,dx=1/2$. Every image point with $x>0$ has preimages $u=\\sqrt x$ and $u=-\\sqrt x$, so the full rectangle counts it twice. Restricting to $0\\le u\\le1$ gives $\\int_0^1\\int_0^1 2u^3\\,dv\\,du=1/2$ and one coverage. The determinant is nonzero on the interior of each half; the critical line maps to the zero-area boundary $x=0$. Using an absolute Jacobian fixes local area scale, not global multiplicity.","lesson":1}]);

depth["28"].questions.push(...[{"question":"Apply explicit Heun to $y^{\\prime}=\\sin^2(16\\pi t)$, $y(0)=0$, on $[0,1]$, with dimensionless $t,y$ and uniform step counts $N=4,8,16$. Determine each numerical endpoint and the exact $y(1)$. Explain what a zero Richardson difference would mean here, and whether the observed order ratio can be computed from these three endpoints.","type":"Interpretation","hint":"The forcing is independent of $y$, so Heun averages the rates at the start and end of each time step. Check the sine at every grid node, then integrate using the double-angle identity.","solution":"Put $g(t)=\\sin^2(16\\pi t)$ and $h=1/N$. Since $g$ is independent of state, explicit Heun uses $Y_{j+1}=Y_j+(h/2)[g(j/N)+g((j+1)/N)]$. For each of $N=4,8,16$, the number $16/N$ is an integer; hence every stage angle is an integer multiple of $\\pi$ and its sine is zero. All three endpoints are therefore exactly zero in exact arithmetic. The double-angle identity gives $y(1)=\\int_0^1[1-\\cos(32\\pi t)]/2\\,dt=1/2$. Thus each true endpoint error is $1/2$. If one assumes an applicable second-order asymptotic error model and divides the finest difference by $2^2-1$, the estimated error is zero, but that assumption is not established on these unresolved grids. The empirical order ratio has zero numerator and denominator and is undefined, not evidence of an observed order. The forcing is smooth; coarse sampling misses its oscillations. The method's asymptotic order does not turn these three equal results into a certificate. Floating-point sine may leave tiny roundoff values at nominal multiples of $\\pi$; that does not alter this exact mathematical counterexample. Explicitly, the second-order Richardson estimate is $|Y_{16}-Y_8|/(2^2-1)=0$. The successive-difference ratio $|Y_8-Y_4|/|Y_{16}-Y_8|$ is $0/0$, so its base-two logarithm cannot define an observed order.","lesson":5}]);

depth['08'].questions.push(
  {
    lesson:2,
    question:String.raw`For arbitrary real $\mu$, let $F_\mu(x)=|x|-x^2+\mu x$ on $\mathbb R$ and study $[-1,1]$. Calculate its secant slope. Check continuity and differentiability at zero using one-sided derivatives, and find the complete set of interior points where $F_\mu'(c)$ equals the secant slope. Explain what this says about the converse claim “a matching point implies the mean value theorem hypotheses.”`,
    type:'Proof',
    hint:String.raw`Compute $F_\mu(-1)$ and $F_\mu(1)$. On $x<0$ and $x>0$, differentiate separately and solve each slope equation; neither formula supplies a derivative at zero.`,
    solution:String.raw`$F_\mu(-1)=-\mu$ and $F_\mu(1)=\mu$, so the secant slope is $\mu$. Both $|x|$ and the polynomial terms are continuous, hence $F_\mu$ is continuous on $[-1,1]$. At zero, the left derivative is $\mu-1$ and the right derivative is $\mu+1$; they differ, so $F_\mu'(0)$ does not exist and the theorem's differentiability hypothesis fails. For $-1<c<0$, $F_\mu'(c)=\mu-1-2c$; equality with $\mu$ gives $c=-1/2$. For $0<c<1$, $F_\mu'(c)=\mu+1-2c$; equality gives $c=1/2$. Both lie strictly inside their respective pieces, and zero supplies no further solution. Thus the full matching set is $\{-1/2,1/2\}$ for every real $\mu$. The conclusion can hold when a hypothesis fails, so the proposed converse is false; this calculation does not invoke the theorem.`
  },
  {
    lesson:2,
    question:String.raw`For arbitrary real $\mu$ on $[-1,1]$, compare $C_\mu(x)=|x|+\mu x$ with $J_\mu(x)=(1+\mu)x$ for $x<0$ and $(1+\mu)x-2$ for $x\ge0$. For each, check the mean value theorem hypotheses and determine whether any interior derivative matches its endpoint secant. Prove that $C_\mu$ obeys a global Lipschitz bound $1+|\mu|$ despite its corner. Prove that $J_\mu$ has no finite Lipschitz constant across zero, even if its derivatives on the smooth pieces are bounded.`,
    type:'Challenge',
    hint:String.raw`Both secants have slope $\mu$. Use the reverse triangle inequality for the corner. For the jump, compare inputs $-h$ and $h$ as $h\downarrow0$, keeping $J_\mu(0)=-2$ distinct from the left limit.`,
    solution:String.raw`For $C_\mu$, endpoint values are $1-\mu$ and $1+\mu$, giving secant $\mu$. It is continuous, but its one-sided derivatives at zero are $\mu-1$ and $\mu+1$, so the theorem does not apply. Away from zero the derivative is one of those two values, neither equal to $\mu$; at zero it is undefined. Thus its matching set is empty. For every $u,v\in[-1,1]$, the reverse triangle inequality gives $||u|-|v||\le|u-v|$; therefore $|C_\mu(u)-C_\mu(v)|\le(1+|\mu|)|u-v|$. For $J_\mu$, the endpoint values are $-1-\mu$ and $\mu-1$, again giving secant $\mu$. Its left limit at zero is $0$, while $J_\mu(0)=-2$, so it is discontinuous and has no derivative at zero. At every other interior point its derivative is $1+\mu\ne\mu$; the matching set is empty. For $0<h\le1$, $J_\mu(h)-J_\mu(-h)=2(1+\mu)h-2$, hence $|J_\mu(h)-J_\mu(-h)|/(2h)\ge1/h-|1+\mu|\to\infty$. Given any proposed finite $L$, choose sufficiently small positive $h$ to make this ratio exceed $L$. A derivative bound on the two smooth pieces cannot bridge their jump.`
  }
);

// Uniform-delta proof transfer; append after every accepted written record.
depth['04'].questions.push(...[{"question": "Let $f(x)=1/x$ on $\\mathbb R\\setminus\\{0\\}$. Prove directly that $\\lim_{x\\to2}f(x)=1/2$. First choose a fixed neighborhood that keeps the denominator away from zero, then choose one $\\delta(\\varepsilon)>0$ before an arbitrary input is supplied. Optional extension: find the greatest symmetric working radius and explain its left boundary.", "type": "Proof", "lesson": 3, "hint": "Rewrite the output error as $|x-2|/(2|x|)$. Begin with $|x-2|<1$; do not choose a radius using the later test input.", "solution": "Let $\\varepsilon>0$ be arbitrary. On the domain $D=\\mathbb R\\setminus\\{0\\}$, $|1/x-1/2|=|x-2|/(2|x|)$. First fix the band $|x-2|<1$, which gives $x>1$ and hence $1/(2|x|)<1/2$. Choose the positive radius $\\delta_s=\\min(1,2\\varepsilon)$ now, before an input is supplied. For every $x\\in D$ with $0<|x-2|<\\delta_s$, the fixed band applies and $|1/x-1/2|<|x-2|/2<\\delta_s/2\\le\\varepsilon$. This one choice works for every eligible input and every positive tolerance. It need not be the greatest radius.\n\nFor the extension, set $c=4\\varepsilon/(1+2\\varepsilon)$; then $0<c<2$. If $0<|x-2|<c$, then $x>2-c>0$ and $|1/x-1/2|=|x-2|/(2x)<c/[2(2-c)]=\\varepsilon$.\n\nThe left boundary $x_*=2-c=2/(1+2\\varepsilon)$ is in the domain and has error exactly $\\varepsilon$, but it is excluded by the strict condition when $\\delta=c$. Every larger radius includes $x_*$, so fails. This argument covers the entire band, including $\\varepsilon\\ge1/2$, when the right side imposes no competing threshold."}, {"question": "Let $f(x)=1/x$ on $\\mathbb R\\setminus\\{0\\}$. Someone claims $\\lim_{x\\to0}f(x)=0$: after each nonzero test input $x$ is named, they choose $\\delta(x)=|x|/2$. Explain why their implication is vacuously true and identify the reversed quantifiers. Then fix $\\varepsilon_0=1$ and defeat every legitimate fixed $\\delta>0$ with an explicit domain point. Explain why rejecting one proposed $\\delta$ for a true limit is a different conclusion.", "type": "Proof", "lesson": 3, "hint": "For nonzero $x$, can $0<|x|<|x|/2$ hold? To disprove the limit, choose a point strictly inside every fixed radius.", "solution": "The proposed $\\delta(x)=|x|/2$ is positive for each nonzero $x$, but $0<|x|<|x|/2$ is false for every such input. Each implication is therefore vacuous and controls no value of $1/x$. It swaps the required order $\\forall\\varepsilon>0\\;\\exists\\delta>0\\;\\forall x\\in D$ for $\\forall\\varepsilon>0\\;\\forall x\\in D\\;\\exists\\delta>0$.\n\nFor a legitimate disproof choose the same $\\varepsilon_0=1$ throughout. Given any fixed $\\delta>0$, set $x=\\min(\\delta/2,1/2)$. This is a positive domain point with $0<|x|<\\delta$ and $|1/x-0|=1/x\\ge2>1$. Thus every radius fails at one fixed tolerance, so the proposed limit is false.\n\nBy contrast, one input violating one proposed radius for a true limit rejects only that radius; a smaller radius may still work."}]);

// FTC and Taylor comparison practice for Chapter 11.
depth['11'].questions.push(...[{"lesson": 2, "type": "Proof", "question": "On $[-1,1]$, compare $f_c(t)=t+2$; $f_p(t)=t+2$ except $f_p(0)=9$; and $f_j(t)=t+2$ for $t<0$, $t+4$ for $t>0$, with $f_j(0)=9$. For each $A_i(x)=\\int_0^x f_i(t)\\,dt$, find the quotients at $-h$ and $+h$ for $0<h\\le1$ and their one-sided limits at zero. Decide separately whether $f_i$ is continuous there, whether $A_i^{\\prime}(0)$ exists, and whether it equals the assigned $f_i(0)$. Explain the effect of changing one point.", "hint": "Integrate each open branch first; keep the value assigned at zero separate from the shrinking averages.", "solution": "Here $f_p-f_c$ is $7$ only at zero and vanishes elsewhere. Enclose zero in partition intervals of total width $\\eta$: the lower Darboux sum is zero and the upper sum is at most $7\\eta$. Letting $\\eta\\to0$ proves that this point-supported difference has integral zero. Reversing the limits changes only the sign, so the equality also holds for negative endpoints. Thus $A_c=A_p=x^2/2+2x$. Their quotients at $-h$ and $+h$ are $2-h/2$ and $2+h/2$; both one-sided limits are $2$.\n\nFor the jump, $A_j=x^2/2+2x$ on $x<0$ and $A_j=x^2/2+4x$ on $x>0$, with $A_j(0)=0$. Its quotients are $2-h/2$ and $4+h/2$; their limits are $2$ and $4$, so the derivative does not exist.\n\nThe rate $f_c$ is continuous and $A_c^{\\prime}(0)=f_c(0)=2$. The rate $f_p$ is discontinuous, yet $A_p^{\\prime}(0)=2\\ne f_p(0)=9$. The rate $f_j$ is discontinuous and $A_j^{\\prime}(0)$ does not exist. Assigning $9$ at its jump changes neither branch integral nor the corner. Continuity is sufficient for the FTC equality; the quotients decide these discontinuous cases."}, {"lesson": 4, "type": "Proof", "question": "Let $s(t)=1$ for $t<0$ and $s(t)=3$ for $t\\ge0$, and let $A(y)=\\int_0^y s(t)\\,dt$. Compare the derivative at zero of $A(x)$, $A(x^2)$, and $A(x^3)$. Then prove a result for any differentiable $g$ with $g(0)=g^{\\prime}(0)=0$, including a $g$ that crosses zero.", "hint": "Find $A$ piecewise. For the general result, bound its value before taking a quotient; do not invoke a derivative of $A$ at zero.", "solution": "$A(y)=y$ for $y<0$ and $A(y)=3y$ for $y\\ge0$, with $A(0)=0$. Its left and right quotients are $1$ and $3$, so $A^{\\prime}(0)$ does not exist.\n\n$A(x^2)=3x^2$, hence its quotient at zero is $3x\\to0$. Also $A(x^3)=x^3$ for $x<0$ and $3x^3$ for $x\\ge0$. Dividing by $x$ gives $x^2$ or $3x^2$, both tending to zero.\n\nFor every real $y$, $|A(y)|\\le3|y|$. Therefore $|A(g(h))/h|\\le3|g(h)/h|\\to0$, proving $(A\\circ g)^{\\prime}(0)=0$ even if $g$ crosses the jump. Writing $A^{\\prime}(0)g^{\\prime}(0)$ would use an undefined factor. This differs from the square-root endpoint issue in Problem 11.34."}]);

// FTC and Taylor comparison practice for Chapter 17.
depth['17'].questions.push(...[{"lesson": 4, "type": "Proof", "question": "For $T_2(x)=(x-1)-(x-1)^2/2$, compare uniform Lagrange certificates for $\\ln x$ on $[1,6/5]$ and $[4/5,1]$, at tolerance $1/300$. State what each certificate establishes and what it leaves open.", "hint": "Bound $f^{\\prime\\prime\\prime}(x)=2/x^3$ over each full interval and use the largest distance $1/5$ from the center.", "solution": "The function is smooth on both positive intervals. On $[1,6/5]$, $M=2$, so $|R_2|\\le2(1/5)^3/6=1/375<1/300$. The specified certificate succeeds.\n\nOn $[4/5,1]$, $M=2/(4/5)^3=125/32$, giving $|R_2|\\le(125/32)(1/5)^3/6=1/192>1/300$. This certificate is inconclusive; it does not establish a point that misses the tolerance.\n\nA separate sharper argument can settle the actual left error. For $x=1-u$, $0\\le u\\le1/5$, the logarithm series gives $|R_2|=\\sum_{n\\ge3}u^n/n<u^3/[3(1-u)]\\le1/300$ when $u>0$, with zero error at $u=0$. That different proof succeeds where the specified Lagrange certificate does not."}, {"lesson": 4, "type": "Proof", "question": "For $f(x)=1/(1-x)$ and $T_2(x)=1+x+x^2$, assess a student’s use of the center value $|f^{\\prime\\prime\\prime}(0)|=6$ to claim tolerance $1/6$ on $[-1/2,1/2]$. Find a valid uniform bound, then use an exact remainder to decide the actual target. Repeat for $[-1/2,0]$.", "hint": "Maximize $6/(1-x)^4$ on each interval, then factor $1-(1-x)(1+x+x^2)$.", "solution": "$f^{\\prime\\prime\\prime}(x)=6/(1-x)^4$. On the full interval its maximum is $96$ at $x=1/2$, so the center-only value $6$ is not a valid uniform bound. The valid Lagrange bound is $96(1/2)^3/6=2$, which alone is inconclusive.\n\nExact algebra gives $f-T_2=x^3/(1-x)$. At $x=1/2$, its absolute error is $1/4>1/6$, a genuine witness that the full-interval target fails.\n\nOn $[-1/2,0]$, $M=6$ is valid; its bound is $6(1/2)^3/6=1/8<1/6$, so that interval is certified. For $u=-x$ in $[0,1/2]$, the exact error is $u^3/(1+u)$. Its derivative $u^2(3+2u)/(1+u)^2$ is positive for $u>0$, so the maximum is attained at $u=1/2$ and equals $1/12$. The center-only assertion, the valid loose full-interval bound, and the endpoint witness have different logical roles."}]);

// Theorem-transfer practice for Chapter 21.
depth['21'].questions.push(...[{"lesson":6,"type":"Proof","question":"At the origin compare the zero sets of $H=(z-x^2-y^2)^3$ and $K=z^2-x^2-y^2$. Both gradients vanish there. Does either set actually have a tangent plane? Explain what the defining formulas do and do not establish.","hint":"Describe each zero set first. Test a graph remainder for one and realized generator directions for the other.","solution":"Both gradients are zero at the origin, so the usual regular-level-set sufficient test supplies no tangent plane for either formula. That failed test does not decide the geometry.\n\n$H=0$ exactly when $z=x^2+y^2$. Above the candidate plane $z=0$, the height residual at $(h,k)$ is $h^2+k^2$. Dividing by $\\rho=\\sqrt{h^2+k^2}$ gives $\\rho\\to0$. Thus the graph has tangent plane $z=0$.\n\nFor $K=0$, the on-set curves $t(1,0,1)$, $t(-1,0,1)$, and $t(0,1,1)$ have three independent velocities: their determinant is $-2$. No two-dimensional plane contains all three tangent directions, so the cone has no tangent plane at the origin.\n\n$G=z-x^2-y^2$ defines the same zero set as $H=G^3$, yet $\\nabla G(0)=(0,0,1)$. The gradient of one representation cannot classify the zero set when it vanishes."}]);

// Theorem-transfer practice for Chapter 26.
depth['26'].questions.push(...[{"lesson":5,"type":"Proof","question":"Find the flux in each case: (a) flux of $(0,0,3)$ through the outward curved upper hemisphere of radius $2$, excluding its base; (b) flux of $\\mathbf r/|\\mathbf r|^3$ through the outward sphere of radius $2$; (c) flux of that inverse-square field through the complete outward boundary of $1\\le|\\mathbf r|\\le2$. For each state the field domain, boundary closure, regularity, orientation, a valid method and the flux.","hint":"Check whether the requested surface is a complete boundary and where the field is defined throughout any proposed volume.","solution":"(a) The constant field is smooth on $\\mathbb R^3$. The curved hemisphere is open, with outward radial normal. Vertical projection onto its base disk gives flux $3\\pi(2)^2=12\\pi$. Alternatively, close it with the missing base: its downward normal gives base flux $-12\\pi$, and the resulting closed half-ball has zero divergence.\n\n(b) The inverse-square field has domain $\\mathbb R^3\\setminus\\{0\\}$. It is defined on the closed sphere, but not throughout its ball, so that ball does not support the divergence theorem. Directly $\\mathbf F\\cdot\\mathbf n=1/2^2$ and area is $4\\pi(2)^2$, giving $4\\pi$.\n\n(c) The complete shell boundary has outer and inner spheres. An open neighborhood of the closed shell avoids zero, so the divergence theorem applies. The shell-outward outer normal gives $4\\pi$; its inner normal points toward zero and gives $-4\\pi$. Total flux is $0$, matching zero divergence on the shell."},{"lesson":5,"type":"Proof","question":"Let $\\mathbf F=(-y/(x^2+y^2),x/(x^2+y^2),0)$ on $\\mathbb R^3$ minus the $z$-axis, and $C(t)=(2\\cos t,2\\sin t,0)$, $0\\le t\\le2\\pi$, counterclockwise viewed from $+z$. Calculate circulation. Audit the radius-$2$ flat disk and curved upper hemisphere as spanning surfaces, then use the annulus $1\\le\\sqrt{x^2+y^2}\\le2$ to explain its full oriented boundary.","hint":"Locate the excluded axis on each proposed surface before using zero curl.","solution":"On the curve, $\\mathbf F(C(t))=(-\\sin t/2,\\cos t/2,0)$ and $C^{\\prime}(t)=(-2\\sin t,2\\cos t,0)$. Their dot product is $1$, so direct circulation is $\\int_0^{2\\pi}1\\,dt=2\\pi$.\n\nThe field has zero curl away from the $z$-axis. The disk meets that axis at the origin; the curved upper hemisphere meets it at its north pole. Neither proposed surface supports a zero-curl invocation, even though the field is defined along $C$.\n\nThe planar annulus avoids the axis. Its positively oriented complete boundary has outer counterclockwise circulation $2\\pi$ and inner clockwise circulation $-2\\pi$. The total is zero, consistent with zero curl on the annulus. This does not make the outer-only integral zero."},{"lesson":5,"type":"Proof","question":"Keep $C(t)=(2\\cos t,2\\sin t,0)$, $0\\le t\\le2\\pi$, counterclockwise viewed from $+z$, but use $\\mathbf F=\\mathbf r/|\\mathbf r|^3$ on $\\mathbb R^3\\setminus\\{0\\}$. Find circulation directly. Audit the flat radius-$2$ disk and the curved upper radius-$2$ hemisphere with compatible upward orientation as spanning surfaces.","hint":"Compare the excluded set with each entire surface, then dot the field with the curve tangent.","solution":"On $C$, the field is radial and $C^{\\prime}(t)$ is tangential, so their dot product is zero for every $t$. The requested circulation is $0$.\n\nThe flat disk contains the excluded origin and cannot support that Stokes invocation. Every point on the curved radius-$2$ hemisphere is distance $2$ from the origin. Its outward/upward normal induces the stated counterclockwise boundary orientation, so it is an eligible replacement.\n\nAway from zero, $\\mathbf F=\\nabla(-1/|\\mathbf r|)$; hence its curl vanishes on a neighborhood of the hemisphere. Stokes there also gives $0$. The failed disk hypothesis neither changes the direct answer nor disqualifies this valid surface."}]);

// Numerical aliasing diagnosis for Chapter 28.
depth["28"].questions.push(...[{"question":"For $y^{\\prime}=\\sin^2(m\\pi t)$, $y(0)=0$, $0\\le t\\le1$, where $m$ is a positive integer, prove an exact criterion for the Heun endpoint on $K$ equal steps. Then take $m=16$ and $K=5,10,20$. Compare all endpoints with the exact solution. Let $L_K$ join consecutive Heun states linearly. At $t_*=1/64$, calculate $L_5(t_*)$ exactly and show that it differs from $y(t_*)$. State what this witness does and does not certify.","type":"Proof","hint":"Heun reduces to trapezoidal summation. For the cosine sum, multiply by $2\\sin(m\\pi/K)$ and telescope neighboring sine terms; handle $K\\mid m$ separately. For the probe, use the first $K=5$ panel and $\\sin^2(\\pi/5)=(5-\\sqrt5)/8$.","solution":"Heun is the composite trapezoidal rule because the forcing is independent of $y$. Since the endpoint rates vanish, $Y_K=K^{-1}\\sum_{j=0}^{K-1}\\sin^2(m\\pi j/K)$. If $K\\mid m$, each sampled rate is zero. Otherwise set $\\theta=2m\\pi/K$ and $S=\\sum_{j=0}^{K-1}\\cos(j\\theta)$. The identity $2\\sin(\\theta/2)\\cos(j\\theta)=\\sin((j+1/2)\\theta)-\\sin((j-1/2)\\theta)$ telescopes to $2\\sin(\\theta/2)S=\\sin((K-1/2)\\theta)+\\sin(\\theta/2)=0$, as $K\\theta=2m\\pi$. Since $\\sin(\\theta/2)\\ne0$, $S=0$. Using $\\sin^2u=(1-\\cos2u)/2$ gives $Y_K=1/2$.\n\nIntegration gives $y(t)=t/2-\\sin(2m\\pi t)/(4m\\pi)$ and $y(1)=1/2$. None of $5,10,20$ divides $16$, so all three endpoints are exactly $1/2$. Both endpoint differences vanish, leaving the observed-order ratio $0/0$ undefined.\n\nAt $t_*=1/64$, $y(t_*)=1/128-1/(64\\pi)$. On the first $K=5$ panel, $Y_1=\\sin^2(16\\pi/5)/10=\\sin^2(\\pi/5)/10$, so the linear join gives $L_5(t_*)=(5/64)Y_1=(5-\\sqrt5)/1024$. Equality would require $16/\\pi=3+\\sqrt5$, but $\\pi>31/10$ and $\\sqrt5>11/5$ imply $16/\\pi<160/31<26/5<3+\\sqrt5$. This nonzero point error refutes exact agreement of the displayed path, without bounding its global error or defining an observed order.","lesson":5},{"question":"A numerical report uses $y^{\\prime}=\\sin^2(m\\pi t)$, $y(0)=0$, on $[0,1]$ with Heun on $K=N,2N,4N$ steps. Audit three base cases: $(m,N)=(16,4),(16,5),(12,6)$. Give their exact arithmetic endpoint triples and true endpoint errors. For each, decide whether the two successive differences define a finite observed order or certify the displayed trajectory. Propose an interior/reference test that could distinguish endpoint coincidence from a sound trajectory conclusion.","type":"Interpretation","hint":"Use $Y_K=0$ when $K\\mid m$ and $1/2$ otherwise. Compare with $y(1)=1/2$. The display joins grid states linearly; evaluate it on the panel containing $t_*=1/(4m)$.","solution":"The finite cosine sum gives $Y_K=0$ exactly when $K\\mid m$ and $1/2$ otherwise. Since $y(1)=1/2$, the triples for $(16,4)$, $(16,5)$, and $(12,6)$ are respectively $(0,0,0)$, $(1/2,1/2,1/2)$, and $(0,0,1/2)$. Their absolute endpoint-error triples are $(1/2,1/2,1/2)$, $(0,0,0)$, and $(1/2,1/2,0)$.\n\nThe first two reports have two zero successive differences; the last has one zero difference. None has two nonzero differences from which to compute a finite observed order. A zero Richardson estimate for $(16,4)$ contradicts its known $1/2$ error. For $(12,6)$ the finest endpoint is right, but the earlier errors show that refinement crossed an aliasing pattern. Neither pattern certifies an interior path.\n\nFor each grid, compute Heun states, locate the panel containing $t_*=1/(4m)$, and compare its piecewise-linear join $L_K(t_*)$ with the independent exact $y(t_*)=1/(8m)-1/(4m\\pi)$. For $(16,5)$, Problem 28.38 gives a strict nonzero witness despite all three correct endpoints. To support a whole-path claim, inspect additional interior times and refine with a justified error bound or convergence theorem; finite point samples alone cannot certify a global bound.","lesson":5}]);

// Source-gap corrections for existing written identities; no new bank records.
(() => {
  // 18.33: prove the polygonal-length limit, including stationary parameters.
  Object.assign(depth['18'].questions[2], {
    hint:String.raw`Use the uniform continuity of the velocity to compare every short chord with a velocity Riemann-sum term. Define length as the supremum of polygonal sums. In polar coordinates differentiate $x=r\cos\theta$ and $y=r\sin\theta$.`,
    solution:String.raw`Let $\mathbf r=(x,y)\in C^1([a,b])$ with $a<b$, and put $\mathbf v=\mathbf r'$. Define $L=\sup_P\sum_i|\mathbf r(t_i)-\mathbf r(t_{i-1})|$, where the supremum is over finite partitions of $[a,b]$. The fundamental theorem gives each chord as $\int_{t_{i-1}}^{t_i}\mathbf v(s)\,ds$, so its norm is at most $\int_{t_{i-1}}^{t_i}|\mathbf v(s)|\,ds$. Summing shows every polygonal sum is at most $I=\int_a^b|\mathbf v(s)|\,ds$, hence $L\le I<\infty$.

Because $\mathbf v$ is continuous on a compact interval, its modulus $\omega(\delta)=\sup\{|\mathbf v(s)-\mathbf v(t)|:s,t\in[a,b],|s-t|\le\delta\}$ tends to zero as $\delta\downarrow0$. For a partition $P$ with mesh $\|P\|$ and any tag $\tau_i\in[t_{i-1},t_i]$, the fundamental theorem gives $|\mathbf r(t_i)-\mathbf r(t_{i-1})-\mathbf v(\tau_i)\Delta t_i|\le\omega(\|P\|)\Delta t_i$. The reverse triangle inequality therefore bounds the difference between the polygonal sum and $\sum_i|\mathbf v(\tau_i)|\Delta t_i$ by $(b-a)\omega(\|P\|)$. The latter Riemann sums tend to $I$, so fine polygonal sums tend to $I$. Since each is at most their supremum $L$, we also have $I\le L$. Thus $L=I=\int_a^b\sqrt{x'(t)^2+y'(t)^2}\,dt$. If $a=b$, both sides are zero. No step divides by speed, so zero velocity at isolated points or throughout an interval causes no exception.

For a $C^1$ polar radius $r(\theta)$ on a finite interval $[\alpha,\beta]$, $x=r\cos\theta$ and $y=r\sin\theta$ give $x'=r'\cos\theta-r\sin\theta$ and $y'=r'\sin\theta+r\cos\theta$. Squaring and adding cancels the cross terms: $x'^2+y'^2=r'^2+r^2$. Applying the proved parametric formula yields $L=\int_\alpha^\beta\sqrt{r'(\theta)^2+r(\theta)^2}\,d\theta$. These formulas measure the selected traversal, including any repeated tracing.`
  });

  // 18.40: complete both branches of the hyperbola determined by the data.
  depth['18'].questions[9].question += String.raw` Using the centered standard equation you obtain, give complete paths for both hyperbola branches and state the parameter domain. Prove that no finite point on either branch is omitted.`;
  depth['18'].questions[9].hint += String.raw` Use $\cosh^2u-\sinh^2u=1$ and the fact that $\sinh$ is strictly increasing onto $\mathbb R$.`;
  depth['18'].questions[9].solution += String.raw` The two complete paths are $(x,y)=(4+2\sqrt2\cosh u,2\sqrt2\sinh u)$ and $(4-2\sqrt2\cosh u,2\sqrt2\sinh u)$, each for every $u\in\mathbb R$. The identity $\cosh^2u-\sinh^2u=1$ verifies $(x-4)^2/8-y^2/8=1$. Conversely, any finite real $y$ determines exactly one $u$ by $\sinh u=y/(2\sqrt2)$; then $\cosh u=\sqrt{1+y^2/8}$, and the plus or minus choice recovers the right or left branch respectively. Thus each path covers its whole branch once, with no finite parameter excluded.`;

  // 19.38: world-coordinate distinction lost by a planar projection.
  depth['19'].questions[7].question += String.raw` Compare the world points after zero and one full turn, and their projections onto the $xy$ plane. Does coincidence in that projection establish a world intersection? Explain what information was discarded.`;
  depth['19'].questions[7].hint += String.raw` Evaluate the full three coordinates at $\theta=0,2\pi$ before dropping the height coordinate.`;
  depth['19'].questions[7].solution += String.raw` At $\theta=0$ and $2\pi$ the world points are $(2,0,0)\,\mathrm m$ and $(2,0,1)\,\mathrm m$. Both project to $(2,0)\,\mathrm m$ in the $xy$ plane, but their heights differ by $1\,\mathrm m$. Projection discards height, so this screen coincidence is not a world intersection. In fact the height $z=\theta/(2\pi)$ is strictly increasing, so distinct parameter values cannot give the same full world point.`;

  // 20.38: retain cone nonidentifiability, then classify the missing quadric traces.
  depth['20'].questions[7].question += String.raw` Then classify the following translated axis-aligned quadrics from actual traces and height-branch domains. Use $X=x-1,Y=y+2,Z=z-3$ in (i) and (iv). (i) For $X^2/4+Y^2/9-Z^2/16=1$, find the traces at $Z=0,3$, the height branches and their horizontal domain, and explain the sheet count. (ii) For $z-1=2[(x+2)^2/9+(y-1)^2/4]$, find the graph domain and range, traces at $z=0,1,3$, and the vertical trace $x=-2$. (iii) For $z+1=2[(x-2)^2/16-(y+3)^2/9]$, find its domain and range, traces at $z=-3,-1,1$, and the two central vertical traces. (iv) For $X^2/4+Y^2/9=Z^2/16$, give the height branches and their domain, classify traces at $Z=0,\pm4$, and say how the two nappes meet.`;
  depth['20'].questions[7].hint += String.raw` For (i) and (iv) put $S=X^2/4+Y^2/9$. For the paraboloids use the sign of a horizontal level and then set one centered horizontal coordinate to zero.`;
  depth['20'].questions[7].solution += String.raw`

(i) The one-sheet hyperboloid has horizontal traces $S=1+Z^2/16>0$. At $Z=0$ the ellipse has $X$- and $Y$-semiaxes $2,3$; at $Z=3$ they are $5/2,15/4$. These centered heights are world heights $z=3,6$. The height branches $Z=\pm4\sqrt{S-1}$ have horizontal domain $S\ge1$ and meet at the waist ellipse $S=1$. A continuous height-angle parametrization $(X,Y,Z)=(2\sqrt{1+s^2/16}\cos t,3\sqrt{1+s^2/16}\sin t,s)$ for $s\in\mathbb R$, $0\le t\le2\pi$, covers the surface; its parameter domain is connected, so the surface is one connected sheet.

(ii) This is an upward elliptic paraboloid, a graph on all $\mathbb R^2$ with range $z\ge1$. At $z=0$ its horizontal trace is empty; at $z=1$ it is the vertex $(-2,1,1)$; at $z=3$ it is the ellipse $(x+2)^2/9+(y-1)^2/4=1$, with semiaxes $3,2$. At $x=-2$, $z=1+(y-1)^2/2$ is an upward parabola.

(iii) This is a hyperbolic paraboloid with graph domain $\mathbb R^2$ and range $\mathbb R$. Put $A=x-2,B=y+3$. At $z=-3,-1,1$, respectively, its traces are $B^2/9-A^2/16=1$ (a $B$-opening hyperbola), $B=\pm3A/4$ (two intersecting lines), and $A^2/16-B^2/9=1$ (an $A$-opening hyperbola). At $B=0$, $z=-1+A^2/8$ opens upward; at $A=0$, $z=-1-2B^2/9$ opens downward. These opposite central parabolas identify the saddle.

(iv) This is an elliptic cone with height branches $Z=\pm4\sqrt S$, both defined for every $(X,Y)\in\mathbb R^2$. At $Z=0$ the trace is its vertex $(x,y,z)=(1,-2,3)$; at each of $Z=\pm4$ it is the ellipse $S=1$, with semiaxes $2,3$, at world heights $z=-1,7$. The two nappes meet at the vertex; the complete cone is connected, although removing its vertex separates the nappes. Its common-scale redundancy is exactly the one proved in the original part.`;

  // 20.42: assign the measured semiaxes to their horizontal axes.
  depth['20'].questions[11].question = String.raw`Assume an axis-aligned one-sheet form centered at $(1,-2,3)$. Its $z=3$ ellipse has $x$- and $y$-semiaxes $2,3$, respectively; its $z=7$ ellipse has $x$- and $y$-semiaxes $2\sqrt2,3\sqrt2$, respectively. Recover the equation and discuss unrestricted uniqueness.`;

  // 26.36: state the centers that the radial-field calculations require.
  depth['26'].questions[5].question = String.raw`Find the flux in each case: (a) flux of $(0,0,3)$ through the outward curved upper hemisphere $|\mathbf r|=2$, $z\ge0$, centered at the origin and excluding its base; (b) flux of $\mathbf r/|\mathbf r|^3$ through the outward sphere $|\mathbf r|=2$, centered at the origin; (c) flux of that inverse-square field through the complete outward boundary of $1\le|\mathbf r|\le2$. For each state the field domain, boundary closure, regularity, orientation, a valid method and the flux.`;

  // 27.33: arrow directions do not calibrate numerical slope magnitudes.
  Object.assign(depth['27'].questions[2], {
    question:String.raw`At $(t,y)=(0,0),(0,1),(1,0),(1,1)$, four calibrated slope-field segments have tangent slopes $0,1,-1,0$, respectively. Their arrow glyphs $\rightarrow,\nearrow,\searrow,\rightarrow$ indicate the signs of these supplied slopes, rather than supplying a magnitude scale. Read two tangent slopes, propose a compatible differential equation, explain why four segments cannot determine it uniquely, and apply $y(0)=1$.`,
    hint:String.raw`Use the supplied numerical calibrations rather than inferring magnitudes from arrow glyphs. The rate $y-t$ fits all four slopes.`
  });

  // 28.33: retain all one-step work and add an actual bounded implementation.
  depth['28'].questions[2].question += String.raw`

Then implement a bounded scalar initial-value solver for $y'=f(t,y)$ on a finite interval $t_0<t_1$, supporting all three methods: Euler, explicit Heun and classical RK4, with one selected method per run, and a positive integer $N$ of nominally equal steps. Require $1\le N\le10000$, finite initial data, an explicit domain predicate, and $|y|\le10^6$ at every stored or intermediate state. Reject invalid inputs, unrepresentable time panels, nonfinite arithmetic and stages outside the declared domain. Return the complete grid, states and rate-evaluation count. Supply the implementation and a reproducible record retaining one actual run for each of the three methods, naming its version, the JavaScript engine/version, the exact rate/domain functions, input data and full-precision output. For $y'=y$, $y(0)=1$ on $[0,1]$ with $N=2$, certify both Euler and Heun by hand. State which failures these guards detect and why successful finite output alone does not certify accuracy.`;
  depth['28'].questions[2].hint += String.raw`

Keep every stage tied to the old state and its current time panel. Validate stage states before calling the rate function. On the nominal uniform floating-point grid, use each represented panel's width; reject a panel if rounding makes it nonpositive. For the hand certificates use $h=1/2$: Euler multiplies by $3/2$, while Heun multiplies by $1+1/2+(1/2)^2/2=13/8$.`;
  depth['28'].questions[2].solution += String.raw`

The reference implementation below is for a scalar real state, forward time, and pure rate/domain callbacks that terminate. Its grid is nominally uniform: $t_i=t_0+(t_1-t_0)i/N$, with the last node set to the supplied endpoint. Floating-point rounding may make represented panel widths differ slightly, so stages and updates use the width of the current represented panel. The initial state, all stage states and each accepted result must lie in the declared domain and satisfy $|y|\le10^6$. The solver stores at most $10001$ points and performs $N$, $2N$ or $4N$ rate evaluations on a successful Euler, Heun or RK4 run. Failure throws an exception before any result is returned.

For the exact-arithmetic two-step certificate, Euler gives $y_1=1+(1/2)1=3/2$ and $y_2=3/2+(1/2)(3/2)=9/4$. Heun's first step has slopes $1,3/2$, so $y_1=1+(1/4)(1+3/2)=13/8$. Its second step has slopes $13/8,39/16$, so $y_2=13/8+(1/4)(13/8+39/16)=169/64$. Thus the expected Euler grid is $(0,1),(1/2,3/2),(1,9/4)$, with two rate evaluations; the expected Heun grid is $(0,1),(1/2,13/8),(1,169/64)$, with four. These exact dyadic values are also representable as JavaScript numbers. As an additional algebraic reference, RK4 has one-step factor $211/128$ here, giving endpoint $44521/16384$ after eight rate evaluations.

A reproduction record must retain the literal reference version, exact submitted code, JavaScript engine and version, rate and domain definitions, interval, initial state, method, step count, full returned points and evaluation count. Record actual output separately from these hand-derived expectations. The supplied demonstration declares the domain $0\le t\le1$, $0\le y\le4$.

Actual reference run, 15 November 2026: the unchanged solutionCode below, version scalar-ivp-reference-v1, ran under Node.js v20.20.2 with V8 11.3.244.8-node.38. The exact submitted code has SHA-256 aef261dc427c67ae6e101594c2da687aa3747e4b298a1082e340d066b1199079. Its callbacks were f: (t, y) => y and inDomain: (t, y) => t >= 0 && t <= 1 && y >= 0 && y <= 4, with t0: 0, t1: 1, y0: 1 and N: 2. The complete printed outputs, retaining the returned numbers without additional rounding, were:

    {"version":"scalar-ivp-reference-v1","method":"Euler","N":2,"nominalH":0.5,"evaluations":2,"points":[[0,1],[0.5,1.5],[1,2.25]]}
    {"version":"scalar-ivp-reference-v1","method":"Heun","N":2,"nominalH":0.5,"evaluations":4,"points":[[0,1],[0.5,1.625],[1,2.640625]]}
    {"version":"scalar-ivp-reference-v1","method":"RK4","N":2,"nominalH":0.5,"evaluations":8,"points":[[0,1],[0.5,1.6484375],[1,2.71734619140625]]}

These observed outputs agree with the separate hand certificates above. They record this engine and version; other engines or versions may round differently. Successful finite output alone is not an accuracy certificate.

The guards reject examples such as $N=0$, a noninteger or excessive step count, nonfinite initial data, a false domain predicate, a nonfinite rate, arithmetic overflow, an out-of-domain predictor and time nodes that floating-point arithmetic cannot distinguish. They do not prove existence or uniqueness of the mathematical IVP, estimate truncation or roundoff error, resolve oscillations between nodes, or guarantee stability on stiff problems. A declared state cap may deliberately reject a mathematically valid trajectory or intermediate stage. The work bound assumes the supplied pure callbacks terminate; this is not a sandbox for arbitrary callback code. Successful finite output therefore needs a separate exact comparison, justified refinement analysis or applicable error theorem before an accuracy claim is made.`;
  depth['28'].questions[2].solutionCode = String.raw`const SCALAR_IVP_VERSION = "scalar-ivp-reference-v1";
const MAX_STEPS = 10000;
const MAX_ABS_Y = 1e6;

function solveScalarIVP({ f, inDomain, method, t0, t1, y0, N }) {
  const methods = new Set(["Euler", "Heun", "RK4"]);
  if (typeof f !== "function" || typeof inDomain !== "function") {
    throw new TypeError("Supply pure terminating f(t,y) and inDomain(t,y) functions.");
  }
  if (!methods.has(method)) {
    throw new RangeError("Method must be Euler, Heun or RK4.");
  }
  if (!Number.isInteger(N) || N < 1 || N > MAX_STEPS) {
    throw new RangeError("N must be an integer from 1 to 10000.");
  }
  if (!Number.isFinite(t0) || !Number.isFinite(t1) || !(t0 < t1)) {
    throw new RangeError("Require finite t0 < t1.");
  }

  function finite(value, label) {
    if (!Number.isFinite(value)) {
      throw new RangeError(label + " must be finite.");
    }
    return value;
  }

  const span = finite(t1 - t0, "Interval length");
  const nominalH = finite(span / N, "Nominal step");
  if (!(nominalH > 0)) {
    throw new RangeError("The nominal step must be positive.");
  }

  function state(t, y) {
    finite(t, "Stage time");
    finite(y, "Stage state");
    if (t < t0 || t > t1) {
      throw new RangeError("Stage time lies outside the integration interval.");
    }
    if (Math.abs(y) > MAX_ABS_Y) {
      throw new RangeError("State exceeds the declared magnitude cap.");
    }
    if (inDomain(t, y) !== true) {
      throw new RangeError("State lies outside the declared domain.");
    }
    return y;
  }

  let evaluations = 0;
  function rate(t, y) {
    state(t, y);
    evaluations += 1;
    return finite(f(t, y), "Rate");
  }

  let y = state(t0, y0);
  const points = [[t0, y]];

  for (let i = 0; i < N; i += 1) {
    const t = points[i][0];
    const nextT = i + 1 === N
      ? t1
      : finite(t0 + span * ((i + 1) / N), "Grid time");
    const h = finite(nextT - t, "Represented panel width");
    if (!(h > 0)) {
      throw new RangeError("Time panels must remain distinguishable.");
    }

    const k1 = rate(t, y);
    let increment;

    if (method === "Euler") {
      increment = finite(h * k1, "Euler increment");
    } else if (method === "Heun") {
      const predictor = state(
        nextT,
        finite(y + finite(h * k1, "Predictor increment"), "Predictor")
      );
      const k2 = rate(nextT, predictor);
      const slopeSum = finite(k1 + k2, "Heun slope sum");
      increment = finite(h * slopeSum / 2, "Heun increment");
    } else {
      const middleT = finite(t + h / 2, "Midpoint time");
      if (!(t < middleT && middleT < nextT)) {
        throw new RangeError("RK4 midpoint is not representable inside its panel.");
      }
      const y2 = state(
        middleT,
        finite(y + finite(h * k1 / 2, "RK4 stage 2 increment"), "RK4 stage 2")
      );
      const k2 = rate(middleT, y2);
      const y3 = state(
        middleT,
        finite(y + finite(h * k2 / 2, "RK4 stage 3 increment"), "RK4 stage 3")
      );
      const k3 = rate(middleT, y3);
      const y4 = state(
        nextT,
        finite(y + finite(h * k3, "RK4 stage 4 increment"), "RK4 stage 4")
      );
      const k4 = rate(nextT, y4);
      const weighted = finite(
        k1 + 2 * k2 + 2 * k3 + k4,
        "RK4 weighted slope sum"
      );
      increment = finite(h * weighted / 6, "RK4 increment");
    }

    y = state(nextT, finite(y + increment, "Updated state"));
    points.push([nextT, y]);
  }

  return {
    version: SCALAR_IVP_VERSION,
    method,
    N,
    nominalH,
    evaluations,
    points
  };
}

// Retain the JavaScript engine/version with these printed reproduction records.
const example = {
  f: (t, y) => y,
  inDomain: (t, y) => t >= 0 && t <= 1 && y >= 0 && y <= 4,
  t0: 0,
  t1: 1,
  y0: 1,
  N: 2
};

for (const method of ["Euler", "Heun", "RK4"]) {
  const result = solveScalarIVP({ ...example, method });
  console.log(JSON.stringify(result));
}`;
})();
