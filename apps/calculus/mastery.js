// Additional worked calculations and conceptual checks for every chapter.
// Each choice is authored with an explanation; indices are zero-based.
const w=(title,problem,steps,answer)=>({title,problem,steps,answer});
const q=(prompt,options,correct,explanation)=>({prompt,options,correct,explanation});
export const mastery={
'01':{worked:[
 w('Compose with a restricted inner domain','Let $f(u)=1/u$ and $g(x)=\\sqrt{x-1}$. Find the real domain of $f\\circ g$.',['The square root requires $x\\ge1$. The outer reciprocal additionally requires $g(x)\\ne0$.','At $x=1$, $g(x)=0$; for $x>1$ the square root is positive.'], 'The domain is $(1,\\infty)$.'),
 w('Undo a quadratic after restricting it','Find the inverse of $f(x)=(x-2)^2$ on $[2,\\infty)$.',['Set $y=(x-2)^2$. Since $x-2\\ge0$, take the nonnegative square root: $x-2=\\sqrt y$.','Swap input and output names; the range of $f$ is $[0,\\infty)$.'],'$f^{-1}(y)=2+\\sqrt y$ for $y\\ge0$.'),
 w('Disprove a universal statement','Is the claim “if $a^2=b^2$ then $a=b$” true for real $a,b$?',['One counterexample is sufficient to refute a universal claim.','Choose $a=2$ and $b=-2$: both squares are $4$, but the numbers differ.'],'The claim is false; the valid conclusion is $|a|=|b|$.')],quiz:[
 q('What is the domain of $1/\\sqrt{x+3}$?',['$x\\ge-3$','$x>-3$','all real $x$'],1,'The radicand must be nonnegative and the denominator nonzero, so $x+3>0$.'),
 q('Which restriction makes $x^2$ one-to-one?',['All real $x$','$x\\ge0$','$x\\ne0$'],1,'On $[0,\\infty)$, squaring is strictly increasing; on all real numbers opposite inputs collide.'),
 q('If $f(x)=x+1$ and $g(x)=x^2$, what is $(f\\circ g)(x)$?',['$(x+1)^2$','$x^2+1$','$2x+1$'],1,'Apply $g$ first to get $x^2$, then apply $f$ to that output.'),
 q('Does a hole at $x=1$ disappear from the domain after simplifying $(x^2-1)/(x-1)$?',['Yes, always','Only if a value is explicitly assigned','It was never a hole'],1,'Cancellation gives $x+1$ only for $x\\ne1$. A new definition can extend the function at the missing point.'),
 q('Which single example refutes “every real square is positive”?',['$x=2$','$x=-2$','$x=0$'],2,'Zero squared is zero, so the strictly positive claim fails.')]
},
'02':{worked:[
 w('Simplify without losing restrictions','Simplify $(x^2-9)/(x-3)$ and state its domain.',['Factor $x^2-9=(x-3)(x+3)$.','Cancel $x-3$ only where $x-3\\ne0$.'],'The simplified output is $x+3$ for $x\\ne3$; the original domain excludes $3$.'),
 w('Convert a polar point','Convert $(r,\\theta)=(2,\\pi/3)$ to Cartesian coordinates.',['Use $x=r\\cos\\theta$ and $y=r\\sin\\theta$.','$\\cos(\\pi/3)=1/2$ and $\\sin(\\pi/3)=\\sqrt3/2$.'],'The point is $(1,\\sqrt3)$.'),
 w('Check a physical phase','A wave has phase $\\omega t$ with $\\omega=5\\,\\mathrm{s}^{-1}$ and $t=0.2\\,\\mathrm{s}$. Find the phase and explain its units.',['Multiply $5\\,\\mathrm{s}^{-1}$ by $0.2\\,\\mathrm{s}$ to obtain $1$.','Sine and cosine require a dimensionless argument; the seconds cancel.'],'The phase is $1$ radian in angular notation, numerically dimensionless.')],quiz:[
 q('What is $\\sin(\\pi/6)$?',['$1/2$','$\\sqrt3/2$','$1$'],0,'On the unit circle, the vertical coordinate at $\\pi/6$ is $1/2$.'),
 q('Which identity is valid wherever both sides are defined?',['$\\sin^2x+\\cos^2x=1$','$\\sin(x+y)=\\sin x+\\sin y$','$\\tan x=\\sin x\\cos x$'],0,'The Pythagorean identity follows from the unit circle; the other formulas omit essential factors.'),
 q('What is the Cartesian $x$-coordinate of $(r,\\theta)=(3,\\pi)$?',['$3$','$0$','$-3$'],2,'$x=r\\cos\\theta=3(-1)=-3$.'),
 q('What is the derivative of $\\sin x$ when $x$ is a radian measure?',['$\\cos x$','$(\\pi/180)\\cos x$','$-\\cos x$'],0,'The standard derivative uses radians; degree input would introduce a conversion factor.'),
 q('Which sum is dimensionally meaningful?',['$2\\,\\mathrm{metres}+3\\,\\mathrm{seconds}$','$2\\,\\mathrm{metres}+30\\,\\mathrm{centimetres}$','$2\\,\\mathrm{metres}+3\\,\\mathrm{square\\ metres}$'],1,'Both quantities are lengths after converting units; the other pairs have incompatible dimensions.')]
},
'03':{worked:[
 w('Distinguish absolute and relative error','An approximation is $2.02$ for an exact value $2$. Find both errors.',['Absolute error is $|2.02-2|=0.02$.','Relative error divides this by $|2|$, giving $0.01$.'],'Absolute error is $0.02$ and relative error is $1\\%$.'),
 w('Count samples correctly','Sample $f(x)=x^2$ at $x=0,0.25,\\ldots,1$. How many points and what is the last pair?',['The interval has four subintervals of width $0.25$.','Including both endpoints gives five samples; $f(1)=1$.'],'There are five coordinate pairs, ending with $(1,1)$.'),
 w('Expose cancellation','Explain why $(\\sqrt{1+h}-1)/h$ is unstable for tiny $h$.',['Rationalizing yields $1/(\\sqrt{1+h}+1)$ for $h\\ne0$.','The direct numerator subtracts nearly equal rounded values; the rationalized form avoids that subtraction.'],'Both tend to $1/2$ mathematically, but the rationalized expression is more reliable numerically.')],quiz:[
 q('What is the relative error if truth is zero?',['Always zero','Undefined by the usual formula','Equal to absolute error'],1,'The usual relative error divides by the magnitude of the true value, which is zero.'),
 q('What happens to a loop `for(let i=0;i<4;i++)`?',['It runs 3 times','It runs 4 times','It runs 5 times'],1,'The loop body runs for i=0,1,2,3.'),
 q('Does a close numerical match prove an identity for every real $x$?',['Yes','Only with enough samples','No'],2,'Finite samples cannot establish a universal mathematical statement.'),
 q('Which finite difference is centered at $x$?',['$[f(x+h)-f(x)]/h$','$[f(x+h)-f(x-h)]/(2h)$','$[f(x)-f(x-h)]/h$'],1,'It uses samples on both sides of $x$ and divides by their separation $2h$.'),
 q('Why may smaller $h$ worsen a finite-difference estimate?',['Rounding and cancellation can dominate','The derivative changes definition','Limits stop existing'],0,'Truncation may shrink, while subtractive roundoff can grow relative to $h$.')]
},
'04':{worked:[
 w('Separate one-sided behavior','Find the limit at zero of $f(x)=-1$ for $x<0$ and $f(x)=1$ for $x\\ge0$.',['The left-hand limit is $-1$; the right-hand limit is $1$.','A finite two-sided limit requires both to exist and agree.'],'The two-sided limit does not exist, although $f(0)=1$.'),
 w('Squeeze an oscillation','Find $\\lim_{x\\to0}x^2\\cos(1/x)$, defined for $x\\ne0$.',['Since $|\\cos(1/x)|\\le1$, we have $-x^2\\le x^2\\cos(1/x)\\le x^2$.','Both bounds tend to zero.'],'The limit is $0$ by the squeeze theorem.'),
 w('Prove a linear limit','Prove $\\lim_{x\\to5}(4x-1)=19$.',['The output error is $|(4x-1)-19|=4|x-5|$.','For each $\\varepsilon>0$ choose $\\delta=\\varepsilon/4$; then $0<|x-5|<\\delta$ implies output error $<\\varepsilon$.'],'The epsilon–delta definition is satisfied for every positive $\\varepsilon$.')],quiz:[
 q('What must be true for continuity at $a$?',['Only $f(a)$ exists','The limit exists and equals $f(a)$','Only a graph looks joined'],1,'Continuity requires a defined value and matching nearby limit.'),
 q('What does $0/0$ after substitution tell you?',['The limit is zero','The limit is infinite','The quotient law is inconclusive'],2,'Further algebra or analysis is required; different quotients with this form have different limits.'),
 q('Can a value assigned at one point change a limit there?',['Usually yes','No, if nearby behavior is unchanged','Only for polynomial formulas'],1,'A limit uses punctured neighborhoods and ignores the target value.'),
 q('What makes the intermediate value theorem apply on $[a,b]$?',['Continuity on $[a,b]$','Differentiability at a single point','Opposite signs alone'],0,'Continuity across the entire closed interval guarantees intermediate values.'),
 q('If left and right finite limits disagree, what happens?',['The two-sided limit fails','The two-sided limit is their average','The point is automatically undefined'],0,'Agreement of both one-sided limits is necessary for a finite two-sided limit.'),{"prompt": "For $f(x)=1/x$ on $\\mathbb R\\setminus\\{0\\}$, which plan proves its limit at $2$ is $1/2$?", "options": ["For every $\\varepsilon>0$, choose $\\delta=\\min(1,2\\varepsilon)$ before $x$; the bound then holds for every eligible $x$", "Choose $\\delta(x)=|x-2|/2$ after seeing $x$", "Use $\\delta=1$ for every $\\varepsilon>0$, since the denominator stays nonzero"], "correct": 0, "explanation": "The fixed band gives $x>1$, and $|1/x-1/2|=|x-2|/(2|x|)<|x-2|/2<\\varepsilon$ for every eligible input. Choose the radius before seeing $x$.", "misconceptions": {"1": "This input-dependent band excludes the already chosen $x$: $|x-2|<|x-2|/2$ is false, so the implication is vacuous.", "2": "Being defined does not meet every output tolerance. At $\\varepsilon=1/4$, $x=5/4$ lies inside the radius-$1$ band and has error $3/10>1/4$."}, "repair": {"label": "Work through reciprocal proof 04.38", "href": "#chapter/04/practice/10/problem/38"}},{"prompt": "At $\\varepsilon=1/4$, $\\delta=1$ fails for $1/x\\to1/2$ at $2$: $x=5/4$ has error $3/10$. For $1/x\\to0$ at $0$, the fixed tolerance $1$ is defeated for every fixed $\\delta>0$ by $x=\\min(\\delta/2,1/2)$. What follows?", "options": ["The first observation rejects only $\\delta=1$; the second disproves the proposed limit at zero", "Both limits fail because each has a counterexample input", "Neither limit fails because a smaller $\\delta$ could repair both"], "correct": 0, "explanation": "At $2$, a smaller radius such as $\\min(1,2\\varepsilon)$ works. At $0$, the fixed output tolerance $1$ fails for every positive radius, which negates the limit definition.", "misconceptions": {"1": "A single counterexample to one radius does not defeat the working smaller radii at $2$. To disprove the limit, keep one tolerance and defeat every radius.", "2": "At zero, the point $x=\\min(\\delta/2,1/2)$ defeats every proposed positive radius at the same output tolerance $1$."}, "repair": {"label": "Work through false-limit proof 04.39", "href": "#chapter/04/practice/10/problem/39"}}]
},
'05':{worked:[
 w('Derive a tangent slope','Differentiate $f(x)=x^2+3x$ directly at $x=a$.',['The difference quotient is $[(a+h)^2+3(a+h)-a^2-3a]/h=2a+3+h$ for $h\\ne0$.','Let $h\\to0$.'],'$f^{\\prime}(a)=2a+3$.'),
 w('Read units from a derivative','A height is $s(t)=5t^2$ metres, with $t$ in seconds. Find velocity at $t=2$.',['Differentiate: $s^{\\prime}(t)=10t$ metres per second.','Substitute $t=2$.'],'Velocity is $20\\,\\mathrm{m/s}$ at $2$ seconds.'),
 w('Test a corner','Does $f(x)=|x-2|$ have a derivative at $x=2$?',['For $h>0$, $[f(2+h)-f(2)]/h=1$.','For $h<0$, the quotient is $-1$.'],'No two-sided derivative exists because the one-sided slopes disagree.')],quiz:[
 q('What is the derivative of $x^2$ at $x=3$?',['$3$','$6$','$9$'],1,'The difference quotient simplifies to $2x+h$, whose limit at $x=3$ is $6$.'),
 q('If $f$ is differentiable at $a$, what follows?',['$f$ is continuous at $a$','$f$ has a local maximum at $a$','$f^{\\prime}(a)>0$'],0,'Differentiability implies continuity, but neither extremum nor positive slope follows.'),
 q('A position derivative has what units?',['metres·seconds','metres/second','seconds/metre'],1,'Differentiating position with respect to time divides length by time.'),
 q('At a corner with unequal one-sided slopes, the derivative is…',['their average','zero','undefined'],2,'A two-sided derivative needs matching one-sided difference-quotient limits.'),
 q('What does a tangent line approximate?',['The function locally near its contact point','The function exactly everywhere','Only the function at one other point'],0,'Differentiability gives a local linear model with error small relative to input displacement.')]
},
'06':{worked:[
 w('Differentiate a product','Find the derivative of $x^2e^x$.',['Use $(uv)^{\\prime}=u^{\\prime}v+uv^{\\prime}$ with $u=x^2$ and $v=e^x$.','Substitute $u^{\\prime}=2x$ and $v^{\\prime}=e^x$.'],'The derivative is $e^x(2x+x^2)$.'),
 w('Differentiate implicitly','For $x^2+y^2=25$ near $(3,4)$, find $dy/dx$.',['Differentiate both sides: $2x+2yy^{\\prime}=0$.','Solve $y^{\\prime}=-x/y$ and evaluate at $(3,4)$.'],'The tangent slope is $-3/4$; the formula needs $y\\ne0$.'),
 w('Differentiate a quotient','Find $d/dx$ of $x/(1+x^2)$.',['Apply the quotient rule: numerator derivative $1$, denominator derivative $2x$.','Simplify $[(1+x^2)-2x^2]/(1+x^2)^2$.'],'The derivative is $(1-x^2)/(1+x^2)^2$ for every real $x$.')],quiz:[
 q('What is $d(\\sin(x^2))/dx$?',['$\\cos(x^2)$','$2x\\cos(x^2)$','$2\\sin x$'],1,'The chain rule multiplies the outer cosine derivative by the inner derivative $2x$.'),
 q('What is $d(\\ln x)/dx$ for $x>0$?',['$x$','$1/x$','$(\\ln x)/x$'],1,'The logarithm derivative is $1/x$ on the positive domain.'),
 q('In the product rule, $d(uv)/dx$ is…',['$u^{\\prime}v+uv^{\\prime}$','$u^{\\prime}v^{\\prime}$','$u^{\\prime}/v^{\\prime}$'],0,'Differentiate one factor at a time, retaining the other, then add.'),
 q('What is $d(e^{3x})/dx$?',['$e^{3x}$','$3e^{3x}$','$e^{x^3}$'],1,'The outer exponential derivative is itself; the inner derivative is $3$.'),
 q('At $y=0$ on $x^2+y^2=25$, why does $y^{\\prime}=-x/y$ fail?',['The curve disappears','The tangent is vertical there','The circle has a corner'],1,'Division by $y$ is invalid; at $(\\pm5,0)$ the circle has vertical tangents.')]
},
'07':{worked:[
 w('Linearize a cube root','Approximate $\\sqrt[3]{8.3}$ using a tangent at $8$.',['For $f(x)=x^{1/3}$, $f(8)=2$ and $f^{\\prime}(8)=1/(3\\cdot8^{2/3})=1/12$.','Use $L(8.3)=2+0.3/12$.'],'The tangent estimate is $2.025$.'),
 w('Relate rates of a circle','A circle radius increases at $0.2\\,\\mathrm{cm/s}$. How fast does area grow at $r=5\\,\\mathrm{cm}$?',['$A=\\pi r^2$, so $dA/dt=2\\pi r\\,dr/dt$ by the chain rule.','Substitute $r=5$ and $dr/dt=0.2$.'],'Area grows at $2\\pi\\,\\mathrm{cm}^2/\\mathrm{s}$.'),
 w('Propagate a small radius error','Estimate the relative volume error of a sphere for a $0.5\\%$ radius error.',['$V$ is proportional to $r^3$, so $dV/V=3\\,dr/r$.','Multiply $0.5\\%$ by $3$; the approximation assumes a small relative error.'],'The estimated relative volume error is $1.5\\%$.')],quiz:[
 q('For $f(x)=\\sqrt x$ at $x=4$, what is the tangent slope?',['$1/2$','$1/4$','$2$'],1,'$f^{\\prime}(x)=1/(2\\sqrt x)$, giving $1/4$ at $x=4$.'),
 q('What units does $dA/dt$ have if $A$ is area and $t$ is time?',['area/time','length/time','area·time'],0,'A rate of change divides the output unit by the input unit.'),
 q('Is a linearization guaranteed accurate far from its center?',['Yes','No','Only for square roots'],1,'Its remainder is controlled locally; distance from the center can make the error large.'),
 q('What is the elasticity of $V\\propto r^3$ with respect to $r$?',['$1$','$2$','$3$'],2,'The relative differential satisfies $dV/V\\approx3\\,dr/r$.'),
 q('For a concave-down function, its tangent near a point usually lies…',['below the graph','above the graph','exactly on the graph everywhere'],1,'Concavity down makes the graph lie below its tangent locally on an interval of concavity.')]
},
'08':{worked:[
 w("Use the mean value theorem","For $f(x)=x^2$ on $[1,3]$, find a point whose derivative equals the secant slope.",["The secant slope is $[f(3)-f(1)]/(3-1)=(9-1)/2=4$.","Since $f^{\\prime}(x)=2x$, solve $2c=4$."],"$c=2$ lies inside $(1,3)$, as the theorem requires."),
 w("Classify an inflection","Examine $f(x)=x^3$ at $x=0$.",["$f^{\\prime}(x)=3x^2$, so the graph increases on both sides of zero.","$f^{\\prime\\prime}(x)=6x$ changes sign from negative to positive across zero."],"Zero is a stationary inflection point, not an extremum."),
 w("Check all critical candidates","Find the absolute extrema of $f(x)=x^2-2x$ on $[0,3]$.",["The interior critical point satisfies $f^{\\prime}(x)=2x-2=0$, so $x=1$.","Evaluate $f(0)=0$, $f(1)=-1$, and $f(3)=3$."],"The absolute minimum is $-1$ at $x=1$ and the absolute maximum is $3$ at $x=3$.")],quiz:[
 q("What does the mean value theorem require?",["Continuity on $[a,b]$ and differentiability on $(a,b)$","Only endpoint values","A positive derivative everywhere"],0,"Continuity on the closed interval and differentiability in its interior suffice to invoke the theorem and guarantee a matching secant slope. A matching derivative can still exist when a hypothesis fails; the theorem then supplies no guarantee."),
 q("If $f^{\\prime}<0$ throughout an interval, then $f$ is…",["increasing","decreasing","constant"],1,"The mean value theorem makes every later function value smaller."),
 q("Can $f^{\\prime}(a)=0$ occur at a non-extremum?",["No","Yes, at a stationary inflection","Only at endpoints"],1,"$x^3$ has derivative zero at zero while increasing through it."),
 q("Where can an absolute extreme on $[a,b]$ occur?",["Only where $f^{\\prime}=0$","At critical points or endpoints","Only at endpoints"],1,"The closed-interval method checks all interior critical candidates and both endpoints."),
 q("Does $f^{\\prime\\prime}(a)=0$ alone prove an inflection?",["Yes","No; concavity must change","Only if $f^{\\prime}(a)=0$"],1,"A zero second derivative is inconclusive unless the concavity actually changes.")]
},
'09':{worked:[
 w("Bracket a root","Show $x^3-2$ has a root between $1$ and $2$.",["The polynomial is continuous. Its values at $1$ and $2$ are $-1$ and $6$.","The signs differ, so the intermediate value theorem supplies a root."],"At least one root lies in $(1,2)$."),
 w("Take one Newton step","Approximate $\\sqrt2$ by Newton’s method for $f(x)=x^2-2$ from $x_0=1.5$.",["$f(1.5)=0.25$ and $f^{\\prime}(1.5)=3$.","Update $x_1=1.5-0.25/3$."],"$x_1=17/12\\approx1.41667$."),
 w("Optimize a fixed sum","For positive $x,y$ with $x+y=10$, maximize $xy$.",["Write $y=10-x$, with $0<x<10$, and $P(x)=10x-x^2$.","Complete the square: $P(x)=25-(x-5)^2\\le25$; equality holds at $x=5$, which is feasible."],"The maximum product is $25$ at $x=y=5$.")],quiz:[
 q("Which is the weakest listed sufficient condition for a root in a sign-changing bracket?",["Differentiability","Continuity","A small interval alone"],1,"Continuity on the closed bracket and opposite endpoint signs invoke the intermediate value theorem."),
 q("What is the first Newton update for $f(x)=x^2-4$ from $x_0=3$?",["$3-5/6$","$3-5/3$","$3+5/6$"],0,"$f(3)=5$ and $f^{\\prime}(3)=6$, so $x_1=3-5/6$."),
 q("Why must optimization check a boundary?",["An absolute extreme may occur there","Derivatives are always zero there","Boundaries are never feasible"],0,"Interior critical-point equations do not cover endpoint candidates."),
 q("Does Newton’s method preserve a root bracket automatically?",["Yes","No","Only for polynomials"],1,"A Newton tangent may jump outside the interval; bisection retains the bracket."),
 q("For perimeter $8$, which rectangle has largest area?",["width $1$, length $3$","width $2$, length $2$","width $0$, length $4$"],1,"The area $w(4-w)$ is maximized at $w=2$.")]
},
'10':{worked:[
 w("Compute a left Riemann sum","Approximate $\\int_0^2 x\\,dx$ using two equal left rectangles.",["Each width is $1$; the left sample points are $0$ and $1$.","The sum is $0\\cdot1+1\\cdot1$."],"The left sum is $1$, below the exact triangular area $2$."),
 w("Separate displacement and distance","For $v(t)=t-1$ on $[0,2]$, find displacement and distance.",["The signed areas on $[0,1]$ and $[1,2]$ are triangles of area $1/2$ with opposite signs.","Displacement adds signs; distance adds magnitudes."],"Displacement is $0$ and distance is $1$."),
 w("Bound an integral by rates","Suppose $f$ is Riemann integrable and $2\\le f(t)\\le5$ on an interval of length $3$. Bound its integral.",["Integrate the inequalities on the interval.","The constant lower and upper bounds contribute $2\\cdot3$ and $5\\cdot3$."],"The integral lies between $6$ and $15$.")],quiz:[
 q("What does $\\int_a^b v(t)\\,dt$ represent for signed velocity?",["distance always","displacement","average speed"],1,"Integrating signed velocity gives net change in position."),
 q("For $n$ equal pieces of $[0,1]$, what is each width?",["$n$","$1/n$","$1/n^2$"],1,"The full interval length $1$ is divided into $n$ equal pieces."),
 q("If $f\\ge0$ on $[a,b]$ with $a<b$, its integral is…",["nonnegative","always zero","negative"],0,"Every Riemann sum uses nonnegative heights and positive widths."),
 q("What is the average value of $x$ on $[0,2]$?",["$1$","$2$","$1/2$"],0,"The integral is $2$; dividing by interval length $2$ gives $1$."),
 q("Can a single Riemann-sum sequence prove integrability for any bounded function?",["Yes","No","Only when it uses midpoints"],1,"The definition requires agreement across all sufficiently fine tagged partitions, not one sampling convention.")]
},
'11':{worked:[
 w("Evaluate by an antiderivative","Compute $\\int_1^3 2x\\,dx$.",["An antiderivative of $2x$ is $x^2$.","Apply the fundamental theorem: $3^2-1^2=8$."],"The integral is $8$."),
 w("Differentiate a moving limit","Let $A(x)=\\int_0^{x^3}\\cos t\\,dt$. Find $A^{\\prime}(x)$.",["The accumulation derivative with respect to its upper endpoint $u$ is $\\cos u$.","The upper endpoint $u=x^3$ changes at rate $3x^2$."],"$A^{\\prime}(x)=3x^2\\cos(x^3)$."),
 w("Integrate a rate with units","A tank inflow rate is $r(t)=4+2t\\,\\mathrm{litres/min}$ for $0\\le t\\le3\\,\\mathrm{min}$. Find delivered volume.",["An antiderivative is $4t+t^2$.","Evaluate from $0$ to $3$: $12+9=21$."],"The tank receives $21\\,\\mathrm{litres}$ over the interval.")],quiz:[
 q("What is $\\frac{d}{dx}\\int_0^x t^2\\,dt$?",["$2x$","$x^2$","$x^3/3$"],1,"The first fundamental theorem returns the continuous integrand at the upper endpoint."),
 q("For $a<b$, suppose $f$ and $F$ are continuous on $[a,b]$ and $F^{\\prime}=f$ on $(a,b)$. What is $\\int_a^b f(x)\\,dx$?",["$F(a)+F(b)$","$F(b)-F(a)$","$F^{\\prime}(b)-F^{\\prime}(a)$"],1,"Continuity of $f$ guarantees integrability; under these hypotheses the second fundamental theorem gives $F(b)-F(a)$."),
 q("What happens to $\\int_a^b f(x)\\,dx$ when the bounds reverse?",["It keeps the value","It changes sign","It becomes undefined"],1,"Oriented integrals satisfy $\\int_b^a f(x)\\,dx=-\\int_a^b f(x)\\,dx$."),
 q("If the upper limit is $g(x)$, what extra factor appears on differentiation?",["$g(x)$","$g^{\\prime}(x)$","$1/g^{\\prime}(x)$"],1,"The chain rule multiplies $f(g(x))$ by $g^{\\prime}(x)$."),
 q("Can an integrable jump make its accumulation nondifferentiable at the jump?",["No","Yes","Only for negative rates"],1,"The accumulation’s left and right slopes can approach different integrand values at a jump.")]
},
'12':{worked:[
 w("Use integration by parts","Find $\\int xe^x\\,dx$.",["Take $u=x$ and $dv=e^x\\,dx$, so $du=dx$ and $v=e^x$.","Apply $\\int u\\,dv=uv-\\int v\\,du$."],"The result is $xe^x-e^x+C$."),
 w("Split a rational expression","Find $\\int\\frac{1}{x^2-1}\\,dx$ on an interval avoiding $\\pm1$.",["Partial fractions give $\\frac{1}{x^2-1}=\\frac{1}{2(x-1)}-\\frac{1}{2(x+1)}$.","Integrate each logarithmic term on a connected interval."],"The result is $\\frac12\\ln|x-1|-\\frac12\\ln|x+1|+C$."),
 w("Match a trigonometric derivative","Find $\\int\\cos(3x)\\,dx$.",["Set $u=3x$, so $du=3\\,dx$ and $dx=du/3$.","Integrate cosine, then substitute back."],"The result is $\\frac13\\sin(3x)+C$.")],quiz:[
 q("Which rule does substitution reverse?",["Product rule","Chain rule","Quotient rule only"],1,"The derivative of $F(g(x))$ is $F^{\\prime}(g(x))g^{\\prime}(x)$."),
 q("Which rule does integration by parts reverse?",["Product rule","Chain rule","Power rule only"],0,"Rearranging $(uv)^{\\prime}=u^{\\prime}v+uv^{\\prime}$ gives the integration-by-parts identity."),
 q("What is $\\int 1/x\\,dx$ on $x<0$?",["$\\ln x+C$","$\\ln|x|+C$","$1/x^2+C$"],1,"$\\ln|x|$ differentiates to $1/x$ on either connected side of zero."),
 q("When substituting in a definite integral, what must also change?",["Only the integrand","The bounds","The final answer sign always"],1,"The old $x$-bounds must be converted to the new variable’s values."),
 q("Does every continuous function have an elementary antiderivative?",["Yes","No","Only on bounded intervals"],1,"Some continuous functions, such as $e^{-x^2}$, have antiderivatives outside elementary closed forms.")]
},
'13':{worked:[
 w("Find area between two curves","Find area between $y=2x$ and $y=x^2$ for $0\\le x\\le2$.",["On $[0,2]$, $2x\\ge x^2$, so integrate upper minus lower.","$\\int_0^2(2x-x^2)\\,dx=[x^2-x^3/3]_0^2$."],"The area is $4/3$ square units."),
 w("Compute a disk volume","Rotate the region $0\\le x\\le1,\\ 0\\le y\\le x$ about the $x$-axis. Find its volume.",["A perpendicular slice of this region rotates into a disk of radius $x$, with no inner hole.","$V=\\pi\\int_0^1x^2\\,dx=\\pi/3$. A cone of height and base radius 1 gives the same check."],"The volume is $\\pi/3$ cubic units."),
 w("Find a center of mass","A uniform rod occupies $x\\in[0,L]$. Find its center.",["With constant density $\\lambda$, mass is $\\lambda L$ and moment about zero is $\\int_0^L x\\lambda\\,dx=\\lambda L^2/2$.","Divide moment by mass."],"The center is at $x=L/2$.")],quiz:[
 q("For disks rotated around the $x$-axis, what is the cross-section area?",["$\\pi r$","$\\pi r^2$","$2\\pi r$"],1,"A disk of radius $r$ has area $\\pi r^2$."),
 q("For area between graphs, which integrand is used?",["$\\text{upper}-\\text{lower}$","$\\text{lower}-\\text{upper}$","their product"],0,"Subtract lower height from upper height to get nonnegative vertical slice height."),
 q("What units does work $\\int F\\,dx$ have if $F$ is newtons and $x$ metres?",["newtons","joules","metres/newton"],1,"A newton times a metre is a joule."),
 q("What does a shell formula include?",["$\\text{circumference}\\times\\text{height}\\times\\text{thickness}$","radius only","height squared only"],0,"A thin cylindrical shell has volume approximately $2\\pi r\\cdot\\text{height}\\cdot dr$."),
 q("Why divide a first moment by mass?",["To obtain a position","To obtain density","To eliminate geometry"],0,"Moment has $\\text{mass}\\times\\text{length}$ units; dividing by mass gives the center coordinate.")]
},
'14':{worked:[
 w("Apply the trapezoidal rule","Approximate $\\int_0^2 x^2\\,dx$ using one trapezoid.",["The width is $2$ and endpoint heights are $f(0)=0$ and $f(2)=4$.","Trapezoidal estimate is $\\text{width}\\times\\text{average endpoint height}$."],"The estimate is $2(0+4)/2=4$, above the exact $8/3$."),
 w("Apply Simpson’s rule","Approximate $\\int_0^2 x^2\\,dx$ with Simpson’s rule and $n=2$.",["The spacing is $h=1$ and samples are $0,1,4$.","Use $\\frac h3[f(0)+4f(1)+f(2)]$."],"The estimate is $8/3$, exact for this quadratic."),
 w("Classify an infinite tail","Does $\\int_1^{\\infty}x^{-3/2}\\,dx$ converge?",["For $R>1$, $\\int_1^R x^{-3/2}\\,dx=[-2x^{-1/2}]_1^R=2(1-R^{-1/2})$.","As $R\\to\\infty$, $R^{-1/2}\\to0$, so the defining improper limit exists and equals $2$."],"The integral converges to $2$.")],quiz:[
 q("For which $p$ does $\\int_1^{\\infty}1/x^p\\,dx$ converge?",["$p>1$","$p\\ge0$","$p<1$"],0,"The $p$-integral threshold for a tail at infinity is $p>1$."),
 q("For which $p$ does $\\int_0^1 1/x^p\\,dx$ converge?",["$p>1$","$p<1$","$p=1$ only"],1,"The singular endpoint threshold is reversed: $p<1$."),
 q("How many subintervals does composite Simpson’s rule require?",["Any positive number","An even number","Only one"],1,"The standard composite rule groups adjacent pairs, so $n$ must be even."),
 q("Does a principal value equal an ordinary improper integral automatically?",["Yes","No","Only for odd functions"],1,"Symmetric cancellation can exist even when each one-sided improper integral diverges."),
 q("What is the exact $\\int_0^2 x^2\\,dx$?",["$8/3$","$4$","$2$"],0,"An antiderivative $x^3/3$ gives $8/3$.")]
},
'15':{worked:[
 w('Sum a geometric series','Find $\\sum_{n=0}^{\\infty}(2/3)^n$.',['The ratio $r=2/3$ has $|r|<1$.','Use $1/(1-r)$.'],'The sum is $3$.'),
 w('Recognize telescoping','Find $\\sum_{n=1}^{\\infty}1/[n(n+1)]$.',['Rewrite $1/[n(n+1)]=1/n-1/(n+1)$.','The first $N$ terms sum to $1-1/(N+1)$; take $N\\to\\infty$.'],'The sum is $1$.'),
 w('Prove a term test failure','Does $\\sum_{n=1}^{\\infty}n/(n+1)$ converge?',['The terms tend to $1$, not zero.','A convergent series must have terms tending to zero.'],'The series diverges by the divergence test.')],quiz:[
 q('Do terms $a_n\\to0$ guarantee $\\sum a_n$ converges?', ['Yes','No','Only if $a_n>0$'],1,'The harmonic series has terms tending to zero but diverges.'),
 q('What is $\\sum_{n=0}^{\\infty}(1/2)^n$?', ['$1$','$2$','infinite'],1,'The geometric formula gives $1/(1-1/2)=2$.'),
 q('What do partial sums $S_N$ do for a convergent series?', ['Approach a finite limit','Become exactly constant eventually','Approach zero always'],0,'A series is defined by the limit of its finite partial sums.'),
 q('Does $\\sum 1/n$ converge?', ['Yes','No','Only conditionally'],1,'Its dyadic blocks contribute at least $1/2$ each, so partial sums grow without bound.'),
 q('Which $p$-series converges?', ['$\\sum 1/\\sqrt n$','$\\sum 1/n$','$\\sum 1/n^2$'],2,'The $p$-series criterion requires exponent $p>1$.')]
},
'16':{worked:[
 w('Use an alternating remainder','How many terms of $\\sum_{n=1}^{\\infty}(-1)^{n+1}/n$ guarantee error below $0.05$?',['The alternating-series error after $N$ terms is at most $1/(N+1)$.','Require $1/(N+1)<0.05$; hence $N+1>20$.'],'$N=20$ terms suffice since the next magnitude is $1/21$.'),
 w('Use the ratio test','Test $\\sum_{n=0}^{\\infty}n!/3^n$.',['For $a_n=n!/3^n$, the ratio $a_{n+1}/a_n=(n+1)/3$ grows without bound.','The terms do not approach zero; equivalently the ratio test gives divergence.'],'The series diverges.'),
 w('Separate absolute from conditional','Classify $\\sum_{n=1}^{\\infty}(-1)^{n+1}/n$.',['Alternating terms decrease in magnitude to zero, so the alternating series converges.','The absolute-value series is harmonic and diverges.'],'The series converges conditionally, not absolutely.')],quiz:[
 q('The alternating-series remainder is bounded by…',['the first omitted term magnitude','the entire first term','zero always'],0,'With decreasing magnitudes tending to zero, consecutive partial sums bracket the limit.'),
 q('What does ratio-test limit $1$ mean?', ['Convergent','Divergent','Inconclusive'],2,'Both convergent and divergent series can have limiting ratio $1$.'),
 q('Does absolute convergence imply convergence?', ['Yes','No','Only for positive terms'],0,'If $\\sum|a_n|$ converges, then $\\sum a_n$ converges.'),
 q('May rearrangement change a conditionally convergent series sum?', ['Yes','No','Only with floating-point numbers'],0,'Conditional convergence does not guarantee invariance under rearrangement, even in exact mathematics.'),
 q('Does a tiny next term alone certify a small tail for any series?', ['Yes','No','Only for polynomials'],1,'A tail estimate needs a theorem or bound; harmonic terms are tiny but their remaining sum diverges.')]
},
'17':{worked:[
 w('Build a Maclaurin polynomial','Find the cubic Maclaurin polynomial for $\\sin x$.',['At zero, sine derivatives cycle $0,1,0,-1$.','Insert these in $\\sum_{k=0}^{3}f^{(k)}(0)x^k/k!$.'],'$T_3(x)=x-x^3/6$.'),
 w('Find a convergence interval','Find the interval of convergence of $\\sum_{n=1}^{\\infty}x^n/n$.',['The ratio test gives radius $1$, so $|x|<1$ converges.','At $x=1$ the harmonic series diverges; at $x=-1$ the alternating harmonic series converges.'],'The interval is $[-1,1)$.'),
 w('Bound a Taylor error','Approximate $e^{0.1}$ by $1+0.1$ and bound the error.',['Taylor’s degree-$1$ remainder is at most $M(0.1)^2/2$ on $[0,0.1]$, with $M=\\max_{[0,0.1]}e^x<1.106$.','Thus the error is below $1.106\\cdot0.01/2=0.00553$.'],'The estimate $1.1$ has certified error below $0.00553$.')],quiz:[
 q('What is the derivative of a power series inside its convergence radius?', ['Termwise differentiation is allowed','Termwise differentiation never works','Only the constant term survives'],0,'Power series may be differentiated term by term strictly inside their radius of convergence.'),
 q('Does the ratio test settle endpoints of a power series interval?', ['Always','Never needs to','Usually endpoints need separate tests'],2,'At $|x-a|=R$ the ratio limit is typically $1$ and separate analysis is needed.'),
 q('What is the Maclaurin polynomial of $\\cos x$ through degree $2$?', ['$1-x^2/2$','$x-x^3/6$','$1+x^2/2$'],0,'Cosine’s value at zero is $1$, first derivative zero, and second derivative $-1$.'),
 q('What controls a Lagrange remainder for degree $n$?', ['A bound on derivative $n+1$','Only $f(a)$','A graph at a few points'],0,'A derivative bound throughout the interval gives the explicit Taylor error bound.'),
 q('Can a smooth function differ from its Taylor series near the center?', ['No','Yes','Only if discontinuous'],1,'Smoothness alone does not imply analyticity; $e^{-1/x^2}$ for $x\\ne0$, extended by $0$ at $x=0$, is a standard example.')]
},
'18':{worked:[
 w('Find a parametric slope','For $x=t^2$, $y=t^3$, find $dy/dx$ at $t=1$.',['Compute $x^{\\prime}(t)=2t$ and $y^{\\prime}(t)=3t^2$.','Where $x^{\\prime}(t)\\ne0$, $dy/dx=y^{\\prime}(t)/x^{\\prime}(t)=3t/2$.'],'At $t=1$ the slope is $3/2$.'),
 w('Compute a polar area','Find area of the disk $r\\le2$ using the polar area formula.',['The boundary radius is constant $r(\\theta)=2$ over $0\\le\\theta\\le2\\pi$.','$A=(1/2)\\int_0^{2\\pi}r^2\\,d\\theta=(1/2)\\cdot4\\cdot2\\pi$.'],'The area is $4\\pi$.'),
 w('Find speed on an ellipse','For $\\mathbf r(t)=(3\\cos t,2\\sin t)$, find speed at $t=0$.',['Velocity is $\\mathbf r^{\\prime}(t)=(-3\\sin t,2\\cos t)$.','At zero the velocity is $(0,2)$, whose length is $2$.'],'Speed at $t=0$ is $2$ units per parameter unit.')],quiz:[
 q('When $x^{\\prime}(t)\\ne0$, $dy/dx$ equals…',['$x^{\\prime}/y^{\\prime}$','$y^{\\prime}/x^{\\prime}$','$x^{\\prime}y^{\\prime}$'],1,'The chain rule gives $dy/dt=(dy/dx)(dx/dt)$.'),
 q('What is parametric speed?', ['$x^{\\prime}+y^{\\prime}$','$\\sqrt{(x^{\\prime})^2+(y^{\\prime})^2}$','$dy/dx$'],1,'Speed is the magnitude of the velocity vector.'),
 q('Can the same geometric curve be traced twice by a parameter?', ['Yes','No','Only a straight line'],0,'The image can repeat while the parameter interval records additional traversals.'),
 q('What is the area of a radius-$R$ polar disk?', ['$\\pi R^2$','$2\\pi R$','$R^2/2$'],0,'Integrating $(1/2)R^2$ over $0\\le\\theta\\le2\\pi$ gives $\\pi R^2$.'),
 q('What does a negative polar radius do?', ['Makes a point impossible','Points in the opposite angular direction','Squares the angle'],1,'$(-r,\\theta)$ represents the same point as $(r,\\theta+\\pi)$ for positive $r$.')]
},
'19':{worked:[
 w('Take a dot product','Find the angle between $(1,0,0)$ and $(1,1,0)$.',['Their dot product is $1$; lengths are $1$ and $\\sqrt2$.','$\\cos\\theta=1/\\sqrt2$.'],'The angle is $\\pi/4$.'),
 w('Find a plane normal','Find a normal vector to the plane $x+2y-z=3$.',['A plane $Ax+By+Cz=D$ has normal $(A,B,C)$.','Read the coefficients directly.'],'One normal is $(1,2,-1)$.'),
 w('Separate speed and acceleration','For $\\mathbf r(t)=(\\cos 2t,\\sin 2t)$, find speed and acceleration magnitude.',['Velocity is $\\mathbf r^{\\prime}(t)=(-2\\sin 2t,2\\cos 2t)$, with length $2$.','Acceleration is $\\mathbf r^{\\prime\\prime}(t)=(-4\\cos 2t,-4\\sin 2t)$, with length $4$.'],'Speed is $2$ and acceleration magnitude is $4$, both constant.')],quiz:[
 q('What does a zero dot product of nonzero vectors indicate?', ['Parallel','Perpendicular','Equal length'],1,'The dot-product formula $|\\mathbf u||\\mathbf v|\\cos\\theta=0$ gives a right angle.'),
 q('What direction is acceleration in uniform circular motion?', ['Tangential','Inward','Outward'],1,'The acceleration vector points toward the circle’s center.'),
 q('Can speed stay constant while acceleration is nonzero?', ['Yes','No','Only in one dimension'],0,'Changing velocity direction produces acceleration without changing its magnitude.'),
 q('What is the length of $(3,4,0)$?', ['$5$','$7$','$25$'],0,'The Euclidean norm is $\\sqrt{3^2+4^2}=5$.'),
 q('What is curvature of a radius-$R$ circle?', ['$R$','$1/R$','$R^2$'],1,'Curvature is turning per unit arc length, equal to the reciprocal radius.')]
},
'20':{worked:[
 w('Disprove a two-variable limit','Examine $xy/(x^2+y^2)$ as $(x,y)\\to(0,0)$.',['Along $y=0$ the expression is $0$.','Along $y=x$ it equals $x^2/(2x^2)=1/2$ for nonzero $x$.'],'The two-variable limit does not exist.'),
 w('Prove a limit by a radial bound','Show $x^2y/(x^2+y^2)\\to0$ at the origin.',['For nonzero $(x,y)$, its absolute value is $|y|\\,x^2/(x^2+y^2)\\le|y|$.','Since $|y|\\le\\sqrt{x^2+y^2}\\to0$, squeeze the expression.'],'The limit is $0$ along every path.'),
 w('Find a partial derivative','For $f(x,y)=x^2y+3y$, compute $f_x$ and $f_y$.',['Hold $y$ fixed for $f_x$: differentiate $x^2y$ to $2xy$; $3y$ contributes zero.','Hold $x$ fixed for $f_y$: $x^2y$ contributes $x^2$ and $3y$ contributes $3$.'],'$f_x=2xy$ and $f_y=x^2+3$.')],quiz:[
 q('Can two disagreeing path limits disprove a multivariable limit?', ['Yes','No','Only for lines'],0,'A full limit must give the same value on every approach path.'),
 q('Can agreement along all tested lines prove a limit?', ['Yes','No','Only with a graph'],1,'Unexamined curved paths remain; a uniform neighborhood argument is needed.'),
 q('What is $f_x$ for $f=x^2+y^2$?', ['$2x$','$2y$','$2x+2y$'],0,'Hold $y$ constant and differentiate with respect to $x$.'),
 q('What describes level curves?', ['$f(x,y)=\\text{constant}$','$x+y=0$ always','$f_x=0$ always'],0,'A level curve collects inputs with one fixed output value.'),
 q('What does continuity at $(a,b)$ require?', ['Only both partial derivatives','Limit of $f$ equals $f(a,b)$','Only agreement on axes'],1,'The full two-variable limit must exist and match the assigned value.')]
},
'21':{worked:[
 w('Build a tangent plane','Find the tangent plane to $z=x^2+y^2$ at $(1,2)$.',['At $(1,2)$, $z=5$ and gradient components are $f_x=2$, $f_y=4$.','Use $z=5+2(x-1)+4(y-2)$.'],'The tangent plane is $z=5+2(x-1)+4(y-2)$.'),
 w('Find maximal directional rate','For $f(x,y)=3x+4y$, find its largest unit-direction derivative.',['The gradient is $(3,4)$.','By Cauchy–Schwarz, $\\nabla f\\cdot\\mathbf u\\le|\\nabla f||\\mathbf u|=5$ for $|\\mathbf u|=1$.'],'The maximum rate is $5$ in direction $(3/5,4/5)$.'),
 w('Apply a multivariable chain rule','Let $z=x^2+y^2$ with $x=t$ and $y=t^2$. Find $dz/dt$.',['Use $dz/dt=f_xx^{\\prime}+f_yy^{\\prime}=2x\\cdot1+2y\\cdot2t$.','Substitute $x=t$ and $y=t^2$.'],'$dz/dt=2t+4t^3$.')],quiz:[
 q('What is the gradient of $x^2+2y^2$?', ['$(2x,4y)$','$(x,2y)$','$(2y,4x)$'],0,'The gradient consists of the two partial derivatives.'),
 q('At a differentiable point with a nonzero gradient, which Euclidean unit direction gives the maximum directional derivative?', ['Along the gradient','Perpendicular to the gradient','Any direction'],0,'For $|\\mathbf u|=1$ and $\\nabla f\\ne0$, Cauchy–Schwarz is maximized when $\\mathbf u$ aligns with $\\nabla f$.'),
 q('What does differentiability require beyond existence of partials?', ['A uniform linear approximation','Only two axis slopes','A plotted surface'],0,'The residual divided by displacement length must tend to zero in every direction.'),
 q('What is the tangent plane of $z=f(x,y)$ based on?', ['$f$ and both partials at the point','Only $f_x$','Only $f_y$'],0,'The local linearization uses the value and both first partial derivatives.'),
 q('For a differentiable function, if $\\nabla f\\cdot\\mathbf u=0$ for a unit $\\mathbf u$, what does that mean locally?', ['No first-order change in direction $\\mathbf u$','$f$ is globally constant','$\\mathbf u$ is impossible'],0,'The directional derivative vanishes along that direction at the point.')]
},
'22':{worked:[
 w('Classify a saddle','Classify the origin for $f(x,y)=x^2-y^2$.',['The gradient vanishes at $(0,0)$.','Along $y=0$, $f=x^2\\ge0$; along $x=0$, $f=-y^2\\le0$, with strict signs off the origin.'],'The origin is a saddle point.'),
 w('Optimize on a circle','Find extrema of $xy$ subject to $x^2+y^2=1$.',['Use $(x-y)^2\\ge0$ to get $2xy\\le x^2+y^2=1$; similarly $(x+y)^2\\ge0$ gives $2xy\\ge-1$.','Equality occurs at $x=y=\\pm1/\\sqrt2$ for the maximum and $x=-y=\\pm1/\\sqrt2$ for the minimum.'],'Maximum is $1/2$ and minimum is $-1/2$.'),
 w('Check a degenerate Hessian','Classify the origin for $f=x^4+y^4$.',['The gradient and Hessian both vanish at the origin, so the second-derivative test is inconclusive.','Directly, $x^4+y^4\\ge0$ with equality only at $(0,0)$.'],'The origin is a strict global minimum.')],quiz:[
 q('At a critical point, a Hessian with one positive and one negative eigenvalue indicates…',['local minimum','saddle','local maximum'],1,'Second-order changes have opposite signs in different directions.'),
 q('Does a zero Hessian determinant settle the classification?', ['Yes','No','Only for quadratics'],1,'It is inconclusive; higher-order terms or direct inequalities may decide.'),
 q('Where may a compact-domain maximum occur?', ['Only inside','Inside or on the boundary','Nowhere'],1,'Continuity on a compact region guarantees attainment, but the boundary remains a candidate.'),
 q('Does a Lagrange multiplier equation guarantee a maximum?', ['Yes','No, it finds candidates under hypotheses','Only for circles'],1,'Candidates must be checked and regularity of the constraint matters.'),
 q('What happens for descent on $x^2+4y^2$ with Euler-like step $h>1/4$?', ['The $y$ component can grow','Convergence is guaranteed','The gradient vanishes'],0,'The $y$ multiplier $1-8h$ has magnitude greater than $1$ when $h>1/4$.')]
},
'23':{worked:[
 w('Integrate over a rectangle','Find $\\iint_{[0,1]^2}(x+y)\\,dA$.',['Separate the terms: each coordinate has average $1/2$ over the unit square.','Integrating $x$ contributes $1/2$ and $y$ contributes $1/2$.'],'The integral is $1$.'),
 w('Reverse triangular bounds','Rewrite $\\int_0^1\\int_0^x f(x,y)\\,dy\\,dx$ in the opposite order.',['The region is $0\\le y\\le x\\le1$.','For a fixed $y$ from $0$ to $1$, $x$ runs from $y$ to $1$.'],'The reversed integral is $\\int_0^1\\int_y^1 f(x,y)\\,dx\\,dy$.'),
 w("Find mass from density","A lamina with $x,y$ numerical coordinates measured in metres on $[0,1]^2$ has density $\\rho(x,y)=2x\\,\\mathrm{kg/m^2}$. Find its mass.",["Integrate over the unit square: $\\int_0^1\\int_0^1 2x\\,dy\\,dx$.","The $y$-integral contributes factor $1$ and $\\int_0^1 2x\\,dx=1$."],"The mass is $1\\,\\mathrm{kg}$.")],quiz:[
 q('What area does each tile have in an $n\\times n$ grid of the unit square?', ['$1/n$','$1/n^2$','$n^2$'],1,'Each side is $1/n$, so the tile area is their product.'),
 q('When can order of integration safely reverse for a continuous function on a rectangle?', ['Always under those conditions','Never','Only when $f\\ge0$'],0,'Continuity on a compact rectangle meets the standard Fubini conditions.'),
 q('What is the integral of $1$ over a region $D$?', ['Its perimeter','Its area','Zero'],1,'Summing $1$ times small area elements recovers area.'),
 q('For $0\\le y\\le x\\le1$, which $x$ bounds apply at fixed $y$?', ['$0\\le x\\le y$','$y\\le x\\le1$','$0\\le x\\le1$ regardless of $y$'],1,'The triangle lies to the right of $x=y$ and left of $x=1$.'),
 q('What units does $\\iint\\rho\\,dA$ have if $\\rho$ is in $\\mathrm{kg/m^2}$?', ['$\\mathrm{kg}$','$\\mathrm{kg/m}$','$\\mathrm{m^2/kg}$'],0,'Density times area gives mass.')]
},
'24':{worked:[
 w('Integrate over an annulus','Find the area $1\\le x^2+y^2\\le9$.',['Polar radius satisfies $1\\le r\\le3$, with $0\\le\\theta\\le2\\pi$.','Integrate $\\int_0^{2\\pi}\\int_1^3 r\\,dr\\,d\\theta=2\\pi(9-1)/2$.'],'The area is $8\\pi$.'),
 w('Normalize a simple density','Find $c$ so $\\rho(x,y)=c$ on the unit square is a probability density.',['Total probability is $\\iint_{[0,1]^2}c\\,dA=c\\cdot1$.','Require the integral to equal $1$.'],'$c=1$.'),
 w('Find a marginal density','For joint density $\\rho(x,y)=2x$ on $[0,1]^2$, find the $x$ marginal.',['Integrate over all $y$ from $0$ to $1$: $f_X(x)=\\int_0^1 2x\\,dy$.','The resulting $2x$ integrates to $1$ over $x\\in[0,1]$.'],'$f_X(x)=2x$ for $0\\le x\\le1$ and zero outside.')],quiz:[
 q('Which Jacobian factor must multiply $dr\\,d\\theta$ when a planar integral is converted to polar coordinates?', ['No extra factor','$r$','$r^2$'],1,'A thin sector has radial width $dr$ and arc length about $r\\,d\\theta$, so $dA=r\\,dr\\,d\\theta$.'),
 q('What is the polar radial range for a disk of radius $R$ centered at the pole?', ['$0\\le r\\le R$','$-R\\le r\\le R$','$r=R$ only'],0,'The interior includes all nonnegative radii from center to boundary.'),
 q('What must a probability density integrate to over its support?', ['$0$','$1$','its maximum'],1,'Normalization requires total probability one.'),
 q('What does a marginal density do?', ['Integrates out another variable','Differentiates the joint density','Always becomes constant'],0,'It accumulates joint density over the unobserved coordinate.'),
 q('Why use $|\\det J|$ in an ordinary change of variables?', ['To retain nonnegative area scaling','To cancel all units','Because $\\det J$ is always positive'],0,'Orientation may reverse, but unsigned area scaling uses the determinant magnitude.')]
},
'25':{worked:[
 w('Use a potential','Find work of $\\mathbf F=(2x,2y)$ from $(0,0)$ to $(2,1)$.',['$\\mathbf F=\\nabla\\phi$ for $\\phi=x^2+y^2$.','Potential change is $\\phi(2,1)-\\phi(0,0)=5$.'],'Work is $5$ along every piecewise smooth path between the points in $\\mathbb R^2$.'),
 w('Compute along a straight route','For $\\mathbf F=(y,0)$, integrate along $\\mathbf r(t)=(t,t)$, $0\\le t\\le1$.',['$\\mathbf F(\\mathbf r(t))=(t,0)$, while $\\mathbf r^{\\prime}(t)=(1,1)$.','The dot product is $t$; integrate $\\int_0^1 t\\,dt$.'],'The work is $1/2$.'),
 w("Test a path difference","For $\\mathbf F=(y,0)$, compare work from $(0,0)$ to $(1,1)$ along the diagonal $\\mathbf r(t)=(t,t)$, $0\\le t\\le1$, and along $(0,0)\\to(1,0)\\to(1,1)$.",["On the diagonal, $\\mathbf F(\\mathbf r(t))\\cdot\\mathbf r^{\\prime}(t)=t$, so work is $1/2$.","On the horizontal leg $y=0$; on the vertical leg $dx=0$. Both work contributions vanish.","The oriented endpoints agree but the work differs, so the field is not conservative on $\\mathbb R^2$."],"Diagonal work $1/2$; bent-route work $0$.")],quiz:[
 q('If $\\mathbf F=\\nabla\\phi$, work along a path equals…',['path length','$\\phi(\\text{end})-\\phi(\\text{start})$','always zero'],1,'The chain rule along the path yields the fundamental theorem for line integrals.'),
 q('Does reversing a path change a vector line integral?', ['It reverses its sign','It leaves it unchanged','It squares it'],0,'The tangent vector and integration orientation reverse.'),
 q('What is work around a closed path for a globally conservative field?', ['Zero','Always positive','Path length'],0,'The start and end potential values coincide.'),
 q('Can zero curl away from a hole imply global path independence automatically?', ['Yes','No','Only for unit circles'],1,'A punctured domain can support nonzero circulation around the missing point.'),
 q('What does $\\mathbf F\\cdot d\\mathbf r$ integrate?', ['Tangential field component along displacement','Only field magnitude','Only normal flux'],0,'The dot product selects the component along the path tangent.')]
},
'26':{worked:[
 w('Use Green’s theorem','Find counterclockwise circulation of $\\mathbf F=(-y/2,x/2)$ around the unit circle.',['The scalar curl $\\partial Q/\\partial x-\\partial P/\\partial y=1/2-(-1/2)=1$.','Integrate $1$ over the unit disk.'],'Circulation is $\\pi$.'),
 w('Use the divergence theorem','Find outward flux of $\\mathbf F=(x,y,z)$ through the unit sphere.',['Divergence is $1+1+1=3$.','The unit ball volume is $4\\pi/3$, so total flux is $3\\cdot4\\pi/3$.'],'Outward flux is $4\\pi$.'),
 w('Check orientation','What is the circulation of $\\mathbf F=(-y/2,x/2)$ clockwise around a radius-$2$ circle?',['Counterclockwise Green circulation equals disk area $\\pi(2)^2=4\\pi$.','Reversing traversal changes the sign.'],'Clockwise circulation is $-4\\pi$.')],quiz:[
 q('Which local quantity does Green’s circulation form integrate over area?', ['curl','divergence only','speed'],0,'Its integrand is $\\partial Q/\\partial x-\\partial P/\\partial y$, the planar curl.'),
 q('Which theorem relates outward closed-surface flux to volume divergence?', ['Stokes','Divergence theorem','Mean value theorem'],1,'The divergence theorem integrates $\\nabla\\cdot\\mathbf F$ over the enclosed volume.'),
 q('What is positive orientation for a simple planar outer boundary?', ['clockwise','counterclockwise','either without sign change'],1,'Walking counterclockwise keeps the enclosed region on the left.'),
 q('Can Green’s theorem be applied through a field singularity in the enclosed region?', ['Yes without checks','No, its smoothness hypotheses fail','Only clockwise'],1,'A field must satisfy the theorem’s differentiability conditions on a suitable containing region.'),
 q('Stokes’s theorem relates boundary circulation to…',['surface curl flux','enclosed volume','arc length'],0,'The surface integral of curl with compatible normal orientation equals boundary circulation.')]
},
'27':{worked:[
 w('Solve exponential decay','Solve $y^{\\prime}=-3y$ with $y(0)=2$.',['Separate $dy/y=-3\\,dt$ for positive $y$ and integrate, or recognize exponential evolution.','Use the initial value to find the multiplicative constant $2$.'],'$y(t)=2e^{-3t}$.'),
 w('Find logistic equilibria','For $y^{\\prime}=y(1-y/10)$, find nonnegative equilibria and their local stability.',['Set $y(1-y/10)=0$ to get $y=0$ or $y=10$.','For $0<y<10$ the rate is positive; for $y>10$ it is negative.'],'Zero is unstable from the positive side; $10$ is attracting for positive states.'),
 w('Verify nonuniqueness','Check $y(t)=0$ until $t=c$ and $y(t)=(t-c)^2/4$ afterward for $y^{\\prime}=\\sqrt y$.',['Before $c$, both derivative and square root are zero.','After $c$, derivative $(t-c)/2$ equals $\\sqrt y$ for $t\\ge c$, and derivatives match at $c$.'],'Every waiting time $c\\ge0$ yields a solution with $y(0)=0$.')],quiz:[
 q('What extra datum selects a particular solution of a first-order ODE?', ['An initial value','Only a graph title','A second derivative'],0,'An initial state specifies the trajectory when uniqueness conditions hold.'),
 q('What are equilibria of $y^{\\prime}=y(1-y/10)$?', ['$0$ and $10$','only $1$','all $y$'],0,'Equilibria make the right-hand side zero.'),
 q('Does continuous $f(t,y)$ alone always guarantee uniqueness?', ['Yes','No','Only for linear equations'],1,'The square-root rate at zero provides multiple solutions despite continuity.'),
 q('What is the solution of $y^{\\prime}=ky$, $y(0)=y_0$?', ['$y_0+kt$','$y_0e^{kt}$','$ky_0$'],1,'The exponential has derivative $k$ times itself and matches the initial value.'),
 q('What does a slope field show?', ['Local direction of solution curves','An exact proof of every solution','Only initial values'],0,'Each small segment depicts the rate specified at that point; it does not establish uniqueness or exactness.')]
},
'28':{worked:[
 w('Take an Euler step','For $y^{\\prime}=-2y$, $y(0)=1$, take one Euler step with $h=0.1$.',['The initial slope is $-2$.','Euler adds $h$ times this slope: $y_1=1+0.1(-2)$.'],'At $t=0.1$, Euler gives $0.8$; exact $e^{-0.2}\\approx0.81873$.'),
 w('Take a Heun step','Use Heun on $y^{\\prime}=-2y$ from $y(0)=1$ with $h=0.1$.',['Initial slope is $-2$; Euler predictor is $0.8$.','Predicted endpoint slope is $-1.6$; average slopes and add $0.1(-2-1.6)/2$.'],'The corrected value is $0.82$.'),
 w("Find an Euler stability interval","For $y^{\\prime}=-5y$, find positive step sizes for which perturbations in Euler’s recurrence decay geometrically. Which preserve nonnegative or strictly positive updates from positive data?",["A propagated perturbation is multiplied by $g=1-5h$ each step.","$|g|<1$ gives $0<h<0.4$. Nonnegative updates require $g\\ge0$, hence $0<h\\le0.2$; strict positivity requires $g>0$, hence $0<h<0.2$."],"Perturbations decay for $0<h<0.4$; updates remain nonnegative for $0<h\\le0.2$ and strictly positive for $0<h<0.2$. These conditions do not claim total discretization error decreases at every step.")],quiz:[
 q('What is Euler’s update for $y^{\\prime}=f(t,y)$?', ['$y_n+h f(t_n,y_n)$','$f(t_n+h,y_n)$','$y_n/h$'],0,'Euler follows the initial tangent over one step.'),
 q('What is Euler’s global order under usual smoothness and stability assumptions?', ['first','second','fourth'],0,'Local $O(h^2)$ defects accumulate over about $1/h$ steps to $O(h)$ global error.'),
 q('Does stability guarantee positivity for decay with Euler?', ['Yes','No','Only for RK4'],1,'For $y^{\\prime}=-ay$ with $a>0$ and $1<ah<2$, the multiplier is negative but has magnitude below one.'),
 q('What endpoint error ratio suggests fourth order when $h$ halves?', ['$2$','$4$','$16$'],2,'For error proportional to $h^4$, halving $h$ reduces it by about $2^4=16$.'),
 q('Why compare rate-evaluation counts across methods?', ['Methods use different work per step','All methods use identical work','Only plots matter'],0,'Euler, Heun, and RK4 use different numbers of rate evaluations per step.')]
}
};
export const masteryCount=Object.keys(mastery).length;

import { additionalConceptChecks } from './reference-training-content.js';
for (const [id, checks] of Object.entries(additionalConceptChecks)) mastery[id].quiz.push(...checks);
mastery['08'].quiz.push(
  {
    prompt:'For $F(x)=|x|-x^2$ on $[-1,1]$, which statement is correct?',
    options:[
      'The mean value theorem cannot be invoked, yet $F^{\\prime}(-1/2)=F^{\\prime}(1/2)=0$',
      'The mean value theorem applies and guarantees both zero-slope points.',
      'The mean value theorem cannot be invoked, so no interior zero derivative exists.'
    ],
    correct:0,
    explanation:'The secant slope is zero. The corner at zero breaks interior differentiability, but solving on the two smooth sides gives exactly $-1/2$ and $1/2$. A failed hypothesis removes a guarantee; it does not forbid the conclusion.',
    misconceptions:{
      1:'Continuity does not repair the missing derivative at the interior corner; the theorem cannot be invoked.',
      2:'A theorem that cannot be invoked may still have a true conclusion. Check both derivative formulas.'
    },
    repair:{label:'Prove both matching points in Problem 08.36 →',href:'#chapter/08/practice/9/problem/36'}
  },
  {
    prompt:'Let $J(x)=x$ for $x<0$ and $J(x)=x-2$ for $x\\ge0$ on $[-1,1]$. Both endpoint values are $-1$. Which statement is correct?',
    options:[
      'The theorem cannot be invoked, and no interior derivative equals the zero secant slope',
      'Equal endpoint values make Rolle’s theorem apply despite the jump.',
      'The derivative at zero must be zero because the endpoint heights agree.'
    ],
    correct:0,
    explanation:'The assigned value is $J(0)=-2$ while the left limit is $0$. The function jumps, so Rolle’s theorem cannot be invoked. Its derivative is $1$ away from zero and undefined at zero; none equals the zero secant slope.',
    misconceptions:{
      1:'Rolle’s theorem also requires continuity on the whole closed interval and differentiability throughout its interior.',
      2:'Endpoint equality does not determine a derivative at zero. Difference quotients must use the assigned value $J(0)=-2$.'
    },
    repair:{label:'Compare the corner and jump in Problem 08.37 →',href:'#chapter/08/practice/10/problem/37'}
  }
);

// FTC and Taylor diagnosis checks for Chapter 11.
mastery['11'].quiz.push(...[{"prompt": "For the continuous, changed-point, and jump rates in Problem 11.35, which conclusions at zero are correct?", "options": ["Continuous: $A^{\\prime}$ exists and equals $f(0)$; changed point: $A^{\\prime}$ exists but differs; jump: $A^{\\prime}$ does not exist", "All three derivatives exist and equal their assigned rates because the rates are integrable", "Both discontinuous rates make their accumulations nondifferentiable"], "correct": 0, "explanation": "The ordered pairs of left and right shrinking-average limits are $(2,2)$, $(2,2)$, and $(2,4)$ for the three rates. The assigned point value is a separate question.", "misconceptions": {"1": "Integrability makes accumulation continuous, but gives neither derivative existence at a jump nor equality at a changed point.", "2": "The changed-point rate has the same integral as the continuous rate; its accumulation still has derivative $2$."}, "repair": {"label": "Work Problem 11.35", "href": "#chapter/11/practice/9/problem/35"}}, {"prompt": "If $A(y)=\\int_0^y s$ for the step rate in Problem 11.36 and $g(0)=g^{\\prime}(0)=0$, what proves $(A\\circ g)^{\\prime}(0)=0$?", "options": ["Use $|A(g(h))/h|\\le3|g(h)/h|\\to0$", "Use the chain rule $A^{\\prime}(0)g^{\\prime}(0)=0$", "Use $g(h)\\ge0$ for all sufficiently small $h$"], "correct": 0, "explanation": "The absolute bound works on either side of the jump.", "misconceptions": {"1": "$A^{\\prime}(0)$ does not exist, so that chain-rule expression is unavailable.", "2": "$g(x)=x^3$ meets the hypotheses and crosses zero."}, "repair": {"label": "Work Problem 11.36", "href": "#chapter/11/practice/9/problem/36"}}]);

// FTC and Taylor diagnosis checks for Chapter 17.
mastery['17'].quiz.push(...[{"prompt": "The $[4/5,1]$ Lagrange bound in Problem 17.36 is $1/192$ at tolerance $1/300$. What follows?", "options": ["The specified bound is inconclusive about actual error", "The model is certified because $1/192<1/300$", "The model fails somewhere because its upper bound exceeds the tolerance"], "correct": 0, "explanation": "$1/192>1/300$, but an upper bound is not a lower-error witness.", "misconceptions": {"1": "Compare positive fractions by cross-products: $300>192$, so $1/192$ is larger.", "2": "A loose sufficient bound cannot establish actual failure."}, "repair": {"label": "Work Problem 17.36", "href": "#chapter/17/practice/9/problem/36"}}, {"prompt": "For $f(x)=1/(1-x)$ and $T_2(x)=1+x+x^2$ on $[-1/2,1/2]$, with uniform target $1/6$, which assessment separates the Taylor bound from actual error?", "options": ["Center-only $M=6$ is invalid; valid $M=96$ gives an inconclusive bound, and error $1/4$ at $1/2$ refutes the target", "Center-only $M=6$ is valid and its bound $1/8$ certifies the target", "The valid upper bound $2$ proves some actual error exceeds $1/6$"], "correct": 0, "explanation": "Taylor’s $M$ covers the connecting interval, and the endpoint identity supplies the lower witness.", "misconceptions": {"1": "$f^{\\prime\\prime\\prime}$ rises to $96$ at the positive endpoint; $6$ only bounds the negative half.", "2": "An upper bound of $2$ permits smaller errors; the exact remainder at $1/2$ proves failure."}, "repair": {"label": "Work Problem 17.37", "href": "#chapter/17/practice/10/problem/37"}}]);

// Theorem-transfer checks for Chapter 21.
mastery['21'].quiz.push(...[{"prompt":"For $H=(z-x^2-y^2)^3$ and $K=z^2-x^2-y^2$ at the origin, which tangent-plane conclusion is supported?","options":["$H=0$ has tangent plane $z=0$; $K=0$ has none. Their zero gradients alone settle neither result","Neither has a tangent plane because both gradients vanish.","Both have tangent plane $z=0$ because both gradients vanish."],"correct":0,"explanation":"$H=0$ is a paraboloid graph with quadratic height residual; $K=0$ has three independent generator directions. Geometry decides each case.","misconceptions":{"1":"A sufficient regular-level-set hypothesis is being mistaken for a necessary geometric condition.","2":"A zero vector supplies no normal, and the cone generators cannot all lie in one plane."},"repair":{"label":"Work Problem 21.37","href":"#chapter/21/practice/10/problem/37"}}]);

// Theorem-transfer checks for Chapter 26.
mastery['26'].quiz.push(...[{"prompt":"For $\\mathbf F=\\mathbf r/|\\mathbf r|^3$ on the shell $1\\le|\\mathbf r|\\le2$, what does the complete outward-boundary audit give?","options":["Outer flux $4\\pi$, inner shell-outward flux $-4\\pi$, total $0$; the volume theorem applies on the shell","Shell flux $4\\pi$ because only its outer sphere counts.","The theorem fails because the origin is singular."],"correct":0,"explanation":"The shell excludes the origin and has two oriented boundary components. Their direct fluxes cancel.","misconceptions":{"1":"This omits the inner sphere, a component of the complete shell boundary.","2":"The origin is outside the shell; an open neighborhood of the shell avoids it."},"repair":{"label":"Work Problem 26.36","href":"#chapter/26/practice/9/problem/36"}},{"prompt":"Let $\\mathbf F=(-y/(x^2+y^2),x/(x^2+y^2),0)$ on $\\mathbb R^3$ minus the $z$-axis. The circle $C(t)=(2\\cos t,2\\sin t,0)$, $0\\le t\\le2\\pi$, is counterclockwise viewed from $+z$. Compare the flat disk $z=0$, $x^2+y^2\\le4$ and the curved upper hemisphere $x^2+y^2+z^2=4$, $z\\ge0$, as spanning surfaces. Which surface audit and circulation are correct?","options":["Both proposed surfaces meet the excluded axis; direct circulation is $2\\pi$","The hemisphere works because it misses the origin in the plane.","Zero curl forces outer circulation to be zero."],"correct":0,"explanation":"The disk hits the axis at its center and the hemisphere at its north pole. Direct parameterization gives $2\\pi$.","misconceptions":{"1":"The north pole lies on the excluded axis even though it is above the plane.","2":"A zero-curl identity needs an eligible surface; the annulus has a second, oppositely oriented loop."},"repair":{"label":"Work Problem 26.37","href":"#chapter/26/practice/10/problem/37"}},{"prompt":"Let $\\mathbf F=\\mathbf r/|\\mathbf r|^3$, $\\mathbf r=(x,y,z)$, on $\\mathbb R^3\\setminus\\{0\\}$. The circle $x^2+y^2=4$, $z=0$, is counterclockwise viewed from $+z$. Compare the flat radius-two disk with the curved upper hemisphere $x^2+y^2+z^2=4$, $z\\ge0$, using compatible orientations. Which Stokes audit and circulation are correct?","options":["The disk is ineligible, the hemisphere is eligible, and circulation is $0$","Every spanning surface fails because the field has a singularity.","The disk supports Stokes because the field is defined on its boundary."],"correct":0,"explanation":"The excluded set is only the origin. The hemisphere avoids it, and radial field values are perpendicular to the circle tangent.","misconceptions":{"1":"Eligibility depends on whether the selected surface meets the excluded origin.","2":"Regularity is needed near the entire selected surface, including the disk center."},"repair":{"label":"Work Problem 26.38","href":"#chapter/26/practice/10/problem/38"}}]);

// Numerical aliasing checks for Chapter 28.
mastery["28"].quiz.push(...[{"prompt":"For $y^{\\prime}=\\sin^2(12\\pi t)$, $y(0)=0$, Heun uses $K=6,12,24$ equal steps on $[0,1]$. The true endpoint is $1/2$. Which exact arithmetic endpoint and observed-order statement is correct?","options":["The endpoints are $0,0,1/2$; no finite observed order follows from these differences","The endpoints are $0,0,0$ because every doubled grid still misses the forcing.","The endpoints are $0,0,1/2$ and the formal second order proves an observed order of two."],"correct":0,"explanation":"Divisibility by 12 holds for 6 and 12, but not 24. The successive differences are zero and $1/2$, so the usual ratio does not define a finite order.","misconceptions":{"1":"The 24-step grid does not divide 12; its exact trapezoidal endpoint is $1/2$.","2":"Formal asymptotic order does not assign an empirical ratio when one observed difference is zero."},"repair":{"label":"Prove the endpoint test in Problem 28.38","href":"#chapter/28/practice/10/problem/38"}},{"prompt":"For $y^{\\prime}=\\sin^2(16\\pi t)$, $y(0)=0$, on $[0,1]$, Heun with $K=5,10,20$ gives endpoint $1/2$ on each grid, equal to the true endpoint. Let $L_K$ join grid states linearly. At $t_*=1/64$, $L_5(t_*)=(5-\\sqrt5)/1024$ while $y(t_*)=1/128-1/(64\\pi)$; these differ. What follows about the displayed path and observed order?","options":["Endpoint agreement does not certify the path: the $K=5$ interior join differs from the exact state, and the zero endpoint differences leave observed order undefined","The correct endpoints certify that every point on each joined path is exact.","The zero endpoint differences certify observed second order for the joined paths."],"correct":0,"explanation":"A strict interior witness separates the coarse joined path from the exact solution. Equal endpoints produce $0/0$, not an empirical order.","misconceptions":{"1":"Endpoint equality is one scalar comparison and cannot establish equality at interior times.","2":"Heun has formal second order under suitable asymptotic assumptions, but these endpoint differences do not measure that order."},"repair":{"label":"Audit endpoints and paths in Problem 28.39","href":"#chapter/28/practice/10/problem/39"}}]);
