# 3. Rules, implicit functions, and inverses

**Prerequisites:** the derivative definition, local linear approximation, elementary functions, composition, and solving simple equations. Review radians and logarithm laws if either is unfamiliar.

**Learning outcomes:** choose differentiation rules from an expression's structure; justify product and chain factors; differentiate a relation on a valid local branch; recover an inverse derivative without finding the inverse explicitly; and check domain and nonzero-denominator assumptions.

## Rules compress reasoning

Repeatedly expanding a difference quotient is useful for understanding derivatives, but inefficient for complicated formulas. Differentiation rules preserve the local information already established for simpler functions. Before calculating, identify the outermost operation. A product needs the product rule even when each factor also contains a composition.

If \(f\) and \(g\) are differentiable at the point in question, then

$$
\begin{aligned}
(f+g)'&=f'+g',&
(cf)'&=cf' \quad(c\text{ constant}),\\
(fg)'&=f'g+fg',&
\left(\frac fg\right)'&=\frac{f'g-fg'}{g^2}\quad(g\ne0).
\end{aligned}
$$

The product rule has two terms because either factor can change. To see this from the definition, add and subtract \(f(a+h)g(a)\) in the numerator of the product's difference quotient. The result is

$$
\frac{f(a+h)g(a+h)-f(a)g(a)}h
=f(a+h)\frac{g(a+h)-g(a)}h
+g(a)\frac{f(a+h)-f(a)}h.
$$

Differentiability implies continuity, so \(f(a+h)\to f(a)\). Taking limits gives \(f(a)g'(a)+g(a)f'(a)\). Multiplying the derivatives would discard the original factor values and produce the wrong local rate. For example, the derivative of \(x\cdot x\) is \(2x\), not \(1\).

### Investigation: two strips and a shrinking corner

When \(f\) and \(g\) are positive near \(a\), picture \(f(a)g(a)\) as a rectangle's area. A small input change creates one strip from the change in \(g\), one from the change in \(f\), and a corner where both changed. Write \(\Delta f=f(a+h)-f(a)\) and \(\Delta g=g(a+h)-g(a)\). The exact finite identity is

\[
\frac{f(a+h)g(a+h)-f(a)g(a)}h
=f(a)\frac{\Delta g}{h}+g(a)\frac{\Delta f}{h}
+\frac{\Delta f\,\Delta g}{h}.
\]

The corner is present at every nonzero \(h\). It vanishes in the derivative limit because \(\Delta f/h\to f'(a)\) while \(\Delta g\to0\). This argument uses continuity implied by differentiability. The algebraic identity works even when a factor is zero or negative; only the rectangle interpretation needs positive sides.

**Predict.** For \(f(x)=x^2+1\), \(g(x)=x+1\), and \(a=1\), predict the limiting value of each strip divided by \(h\), then predict the corner term. Run the notebook at \(h=0.25\); reduce \(h\) to inspect the approach. The colored rectangle shows the original area, two strips, and corner at the current finite step; the accompanying table gives each area's quotient. Every named term is an ordinary editable function in the Rust/WASM language.

```notebook
param a = 1 from 0 to 2;
param h = 0.25 from 0.05 to 1;
fn f(x) = x^2+1;
fn g(x) = x+1;
product f g at a step h;
fn first(x) = f(a)*(g(a+x)-g(a))/x;
fn second(x) = g(a)*(f(a+x)-f(a))/x;
fn corner(x) = (f(a+x)-f(a))*(g(a+x)-g(a))/x;
fn whole(x) = (f(a+x)*g(a+x)-f(a)*g(a))/x;
show first(h);
show second(h);
show corner(h);
show whole(h);
show first(h)+second(h)+corner(h);
overlay first, second, corner, whole from 0.05 to 1 at h;
```

At the default input, the three quotient terms are \(2\), \(4.5\), and \(0.5625\); their sum and the whole quotient are both \(7.0625\). Algebra gives the stronger statement: for every displayed \(h>0\), the whole quotient is \(6+4h+h^2\). Its limit is \(6\). The rectangle, curves, and readouts help you notice the corner shrinking; the exact identity and the two limits justify the product rule. Try changing either source function while keeping the four named terms linked. If a change makes a side zero or negative, the notebook switches to signed quotient bars: the algebra remains valid, while a positive-area rectangle no longer describes it.

```exercise
{"id":"calc-product-corner-mechanism","type":"written","prompt":"At a=1, take f(x)=1+x² and g(x)=1−x. Decompose the finite product difference quotient into two strip terms and a corner term. Compute its derivative limit without dividing by g(a). Explain why the corner vanishes, and say which part of the rectangle analogy no longer applies.","hints":["Here f(1)=2 but g(1)=0. Calculate Δf=2h+h² and Δg=−h before cancelling h.","Use Δf/h→2 and Δg→0 for the corner; the area picture needs positive side lengths but the algebra does not."],"rubric":["Writes the exact three-term finite identity","Finds the first strip −2 and the second strip 0","Finds corner −2h−h² and proves its limit is zero","Concludes derivative −2 with a valid limit argument","Separates the algebraic product rule from the positive-area analogy"],"solution":"At a=1, f(a)=2 and g(a)=0. Since Δf=2h+h² and Δg=−h, the first strip quotient is f(a)Δg/h=−2, the second is g(a)Δf/h=0, and the corner quotient is ΔfΔg/h=−2h−h². Their sum tends to −2 as h→0. No division by g(a) occurs. The algebraic identity is valid for these signed values, while a zero or negative factor is not a positive rectangle side. More generally, Δf/h tends to f′(a) and Δg tends to zero, so their product tends to zero.","transfer":"Changed functions: at a=0 let f(x)=√(1+x) and g(x)=1−x. State a real neighborhood where both functions are defined, compute the product derivative at 0, and justify the corner limit without relying on plotted values.","transferSolution":"Both functions are defined for x>−1, which contains an open interval around 0. Here f(0)=g(0)=1, f′(0)=1/2 and g′(0)=−1, so (fg)′(0)=f′(0)g(0)+f(0)g′(0)=−1/2. For h→0 in this neighborhood, Δf/h→1/2 and Δg=−h→0, hence ΔfΔg/h→0. The argument is two-sided for sufficiently small |h|<1."}
```

For a composition \(F(x)=f(g(x))\), the chain rule is

$$
F'(x)=f'(g(x))g'(x),
$$

provided \(g\) is differentiable at \(x\) and \(f\) is differentiable at \(g(x)\). The outer derivative must be evaluated at the inner value. If a small change in \(x\) changes \(g\) by approximately \(g'(x)\) times that amount, and a change in \(g\) changes \(f\) by approximately \(f'(g(x))\) times that amount, the two scale factors multiply. This local-linear explanation also covers \(g'(x)=0\); an informal cancellation of “\(dg\)” is not a proof when quantities may vanish.

## Elementary derivatives and their domains

We will use these established derivative formulas:

- \((x^n)'=nx^{n-1}\), for nonzero integers \(n\) wherever the original function is defined. A constant function has derivative zero. For arbitrary real exponents, use \(x>0\) unless a larger real domain is justified.
- \((\sin x)'=\cos x\) and \((\cos x)'=-\sin x\), with angles in radians.
- \((e^x)'=e^x\) for all real \(x\).
- \((\ln x)'=1/x\) for \(x>0\); also \((\ln|x|)'=1/x\) for \(x\ne0\).

The sine formula follows from the angle-addition identity together with the radian limits \(\sin h/h\to1\) and \((\cos h-1)/h\to0\). Radians are essential: with a degree-valued input the conversion to radians introduces a chain factor \(\pi/180\). The exponential base \(e\) is precisely the base whose exponential has unit relative growth rate. A derivative formula is never permission to enlarge a function's domain.

One coherent dependency route for the exponential formulas starts by **defining** \(\ln x=\int_1^x(1/t)\,dt\) for \(x>0\). The Fundamental Theorem of Calculus then gives \((\ln x)'=1/x\). This \(\ln\) is continuous and strictly increasing. Its range is all of \(\mathbb R\): on each interval \([2^k,2^{k+1}]\) the integral of \(1/t\) is at least \(1/2\), so values at \(2^n\) grow without bound; the product law gives \(\ln(1/x)=-\ln x\) and the negative end. Its inverse \(\exp\) is differentiable, and the inverse derivative rule gives \((\exp y)'=1/(1/\exp y)=\exp y\). In the recommended study order, this chapter uses the derivative formulas as named elementary-function results. After learning the integral and FTC, [build logarithms and exponentials from that integral](log-exp-foundation.md) to discharge the dependency. A power-series construction is a different starting route and needs its own convergence and uniqueness arguments. The chain, product, and implicit rules here do not depend on treating a graph as proof of the exponential rule.

For trigonometry, the radian normalization matters at the theorem level. Unit-circle geometry gives \(\sin h<h<\tan h\) for \(0<h<\pi/2\); dividing appropriately and squeezing yields \(\sin h/h\to1\) as \(h\to0\) from both sides. Since \(1-\cos h=2\sin^2(h/2)\), its quotient by \(h\) tends to zero. Inserting these two limits into the sine and cosine addition formulas gives their derivatives. The geometric inequalities themselves require a definition of radian angle through arc length/area; they are not facts read off a sampled plot.

```notebook
let a = 2;
fn f(x) = exp(x^2)*ln(x);
diff f as df;
show f(a);
show df(a);
table df from 1 to 3 count 5;
```

This program reuses one function definition for evaluation, symbolic differentiation, and a table of numerical values. Its real domain is \(x>0\) because of \(\ln x\), even where an algebraic transformation might appear to cancel a factor. Compare the notebook's derivative with the product and chain calculation below; the table checks selected values, while the rule derivation explains the formula on its full domain.

## Worked example 1: read the outside before the inside

For \(x>0\), let \(F(x)=e^{x^2}\ln x\). The outermost operation is multiplication. First differentiate each factor:

$$
\bigl(e^{x^2}\bigr)'=e^{x^2}\cdot2x,
\qquad (\ln x)'=\frac1x.
$$

Then apply the product rule:

$$
F'(x)=2xe^{x^2}\ln x+\frac{e^{x^2}}x.
$$

At \(x=1\) the first term vanishes because \(\ln1=0\), leaving \(F'(1)=e\). This is a useful check: a complicated expression can simplify considerably at a specific input. The domain remains \(x>0\). Writing an algebraically shorter derivative does not make \(F\) defined at zero or at negative inputs.

For a contrasting example, \(H(x)=(x^2+1)/(x-2)\) has outermost operation division. Its derivative is

$$
H'(x)=\frac{2x(x-2)-(x^2+1)}{(x-2)^2}
=\frac{x^2-4x-1}{(x-2)^2},
$$

for \(x\ne2\). Keep the numerator grouped until all subtraction signs have been distributed. Many quotient-rule errors are algebra errors after the correct rule has been chosen.

### Visual laboratory 1: frequency changes slope as well as shape

**Predict.** For f(x)=sin(kx), what is the slope at zero when k=3? Will tripling k also triple the largest derivative magnitude?

```mathviz
scene "The chain factor changes frequency and steepness";
domain -3.2 3.2;
range -4.5 4.5;
param k = 1 from 0.5 to 4;
param a = 0 from -2.5 to 2.5;
fn f(x) = sin(k*x);
fn derivative(x) = k*cos(k*x);
plot f color blue;
plot derivative color amber;
tangent f at a;
```

**Explore.** Move k while keeping a=0, then move a to points where the blue graph reaches a peak or crosses zero. Compare the tangent slope with the amber graph's value at the same input.

**Explain.** The derivative is k cos(kx), so its largest magnitude is k. At a peak of sine the derivative vanishes; at zero, its value is k. A derivative graph shows slopes as heights, which is why its zero crossings have a different meaning from the function's zero crossings.

**Transfer.** Edit f to sin(k*x^2) and derivative to 2*k*x*cos(k*x^2). Predict the slope at zero before rendering, and identify both chain factors in the new formula.

## A relation may define several local functions

The equation \(x^2+y^2=25\) describes a circle, which cannot be one global function \(y(x)\): many \(x\) values correspond to two \(y\) values. Near \((3,4)\), however, the upper branch \(y=\sqrt{25-x^2}\) is a differentiable function. Near \((3,-4)\), the lower branch is another differentiable function. Implicit differentiation handles a selected branch without first solving explicitly for it.

## Worked example 2: a tangent to an implicit curve

Assume a differentiable local branch \(y=y(x)\) satisfies \(x^2+y^2=25\). Differentiating both sides gives

$$
2x+2yy'=0.
$$

The \(y'\) appears because \(y\) is itself a function of \(x\). When \(y\ne0\), solve to obtain \(y'=-x/y\). At \((3,4)\) this is \(-3/4\), and the tangent is \(y-4=-(3/4)(x-3)\). At \((3,-4)\) the slope is \(+3/4\), so knowing \(x\) alone would not have identified the tangent.

At \((5,0)\), division by \(y\) is illegal. The circle has a vertical tangent there and is not locally a differentiable graph \(y(x)\). It can instead be represented as \(x=\sqrt{25-y^2}\) near that point, whose derivative \(dx/dy\) is zero at \(y=0\). Choosing which variable depends on which is part of understanding the geometry.

A useful local existence principle is this: if \(F(a,b)=0\), \(F\) has continuous first partial derivatives near \((a,b)\), and \(F_y(a,b)\ne0\), a differentiable local branch \(y(x)\) through \((a,b)\) exists. A partial derivative changes one variable while holding the other fixed. This is the implicit function theorem from multivariable calculus; we do not prove it here. It explains why a nonzero coefficient of \(y'\) matters: differentiating an equation alone does not establish existence of a branch.

### Visual laboratory 2: a circle has two branch slopes

**Predict.** At x=3, why should the upper and lower branch tangents have opposite slopes? What happens as the point moves toward x=5?

```mathviz
scene "Implicit differentiation on the two branches of a circle";
domain -5.5 5.5;
range -5.5 5.5;
coordinates equal;
param a = 3 from -4.8 to 4.8;
fn upper(x) = sqrt(25-x^2);
fn lower(x) = -sqrt(25-x^2);
plot upper color blue;
plot lower color violet;
tangent upper at a;
tangent lower at a;
```

**Explore.** Compare a=0, a=3, and a=4.8. Calculate each branch's y value and then −a/y. The slider deliberately stops before the vertical-tangent endpoints.

**Explain.** The same implicit formula applies to both branches because it uses the actual y coordinate. As |a| approaches 5, |y| approaches zero while the numerator stays nonzero, so slope magnitudes grow. The square-root formulas have no real values outside [−5,5]; a missing plot there is a domain restriction.

**Transfer.** Replace 25-x^2 in both functions by 25-4*x^2, set a's initial value to 1.5, and restrict its range to -2.4 through 2.4. Derive the new implicit relation and tangent formula. Explain why the old parameter bounds would become invalid.

## Inverse functions reverse the local scale

An inverse undoes a function on a specified one-to-one domain. The notation \(f^{-1}\) denotes this inverse, not the reciprocal \(1/f\). If \(f(a)=b\), the inverse maps \(b\) back to \(a\). This reverses the roles of horizontal and vertical changes, so a nonzero local scale is replaced by its reciprocal.

A convenient sufficient hypothesis is that \(f\) is continuously differentiable near \(a\) and \(f'(a)\ne0\). Then \(f\) has a differentiable local inverse near \(b=f(a)\), with

$$
(f^{-1})'(b)=\frac1{f'(a)}
=\frac1{f'(f^{-1}(b))}.
$$

Differentiating \(f(f^{-1}(y))=y\) by the chain rule motivates the formula. The existence hypothesis must come first. An invertible function can have a zero derivative: \(f(x)=x^3\) is one-to-one, but at zero its inverse cube root has no finite derivative.

## Worked example 3: an inverse derivative without an inverse formula

Let \(f(x)=x^3+x\). To find \((f^{-1})'(2)\), first solve \(f(a)=2\); \(a=1\) works. Next compute \(f'(1)=3\cdot1^2+1=4\). Thus \((f^{-1})'(2)=1/4\). Substituting \(2\) directly into \(f'\) would answer the wrong question because \(2\) is an output of \(f\), not the relevant input.

The inverse exists globally: for \(v>u\),

$$
f(v)-f(u)=(v-u)(v^2+uv+u^2+1)>0,
$$

since \(v^2+uv+u^2=(v+u/2)^2+3u^2/4\ge0\). Hence \(f\) is strictly increasing. Its continuity and unbounded behavior in both directions give every real output by the intermediate value theorem. A difficult cubic inverse formula is unnecessary for its local derivative.

### Visual laboratory 3: exponential and logarithm exchange rates

**Predict.** At a=1 the exponential slope is e. At which input does the logarithm have slope 1/e?

```mathviz
scene "An inverse swaps the point and reciprocates the slope";
domain -2 5;
range -2 5;
coordinates equal;
param a = 1 from -1 to 1.3;
fn f(x) = exp(x);
fn inverse(x) = ln(x);
fn diagonal(x) = x;
plot f color blue;
plot inverse color violet;
plot diagonal color amber;
tangent f at a;
tangent inverse at exp(a);
```

**Explore.** Move a and record the paired inputs a and exp(a). Multiply the two calculated tangent slopes. Distinguish matching heights from matching input locations.

**Explain.** The paired points are (a,exp(a)) and (exp(a),a), reflected across y=x in coordinate space. Their slopes are exp(a) and 1/exp(a), whose product is 1. The logarithm is defined only at positive inputs; the inverse construction respects that domain automatically.

**Transfer.** For the function f(x)=2x+3, find its inverse and both derivatives. Predict the reflected point corresponding to (1,5), then build your own two-function scene.

## Saved checkpoints: make the decisive choice

Choose a rule before doing algebra. A correct derivative with an unstated domain or an unjustified inverse branch is incomplete; use the feedback to revise the explanation you save.

```exercise
{"id":"calc-r3-rules-outer","type":"choice","prompt":"For \\(H(x)=e^{x^2}\\ln x\\) on \\(x>0\\), what is the outermost differentiation rule, and why?","options":[{"label":"Chain rule only: \\(e^{x^2}\\) is the outermost function.","correct":false,"feedback":"The whole expression is a product, not one exponential applied to ln x."},{"label":"Product rule: \\(e^{x^2}\\) and \\(\\ln x\\) both depend on \\(x\\).","correct":true,"feedback":"Correct. Then use the chain rule inside exp(x²); one rule does not replace the other."},{"label":"Quotient rule because \\((\\ln x)'=1/x\\).","correct":false,"feedback":"A derivative containing 1/x does not make the original expression a quotient."}],"hints":["Locate the final operation used to build the original function, before differentiating either part."]}
```

```exercise
{"id":"calc-r3-rules-nested","type":"written","prompt":"Differentiate \\(J(x)=\\ln(1+\\sin^2x)\\) on its full real domain. Show the successive inner changes, then test the tempting answer \\(2\\sin x/(1+\\sin^2x)\\) at \\(x=\\pi/2\\).","hints":["The outer logarithm contributes 1/(1+sin²x).","The derivative of sin²x needs both the square and sine factors."],"rubric":["Identifies the domain as all real x","Uses all chain factors and obtains 2sin x cos x/(1+sin²x)","Finds J′(π/2)=0","Explains why the tempting answer misses cos x"],"solution":"Because \\(1+\\sin^2x\\ge1\\), the domain is all real \\(x\\). Set \\(v=\\sin x\\) and \\(u=1+v^2\\). Then \\(J'=u'/u=2vv'/u=2\\sin x\\cos x/(1+\\sin^2x)\\). At \\(x=\\pi/2\\), this is \\(0\\); the tempting answer gives \\(1\\) because it omitted the inner derivative \\(\\cos x\\).","transfer":"Changed case: differentiate ln(1+cos²(3x)) on its real domain. Identify the three inner scale factors and evaluate the derivative at x=0.","transferSolution":"The argument is at least \\(1\\), so the domain is \\(\\mathbb R\\). The factors are \\(1/(1+\\cos^2(3x))\\), \\(2\\cos(3x)\\), \\(-\\sin(3x)\\), and \\(3\\). Thus the derivative is \\(-6\\cos(3x)\\sin(3x)/(1+\\cos^2(3x))\\), which is \\(0\\) at \\(x=0\\)."}
```

```exercise
{"id":"calc-r3-rules-implicit","type":"written","prompt":"On \\(x^2+4y^2=20\\), determine \\(dy/dx\\) at \\((2,2)\\). State why a differentiable local \\(y(x)\\) exists there. Does the same formula certify a branch \\(y(x)\\) at \\((\\sqrt{20},0)\\)?","hints":["Differentiate with y regarded as a function of x; the derivative of 4y² is 8yy′.","Check the coefficient of y′ at each point before dividing."],"rubric":["Checks both named points lie on the relation","Obtains \\(y'=-x/(4y)\\) and slope −1/4 at (2,2)","Uses F_y=8y≠0 for a local branch at (2,2)","Explains why F_y=0 at (√20,0) blocks this branch argument","Identifies the vertical tangent or a local x(y) representation at the endpoint"],"solution":"Both points satisfy \\(x^2+4y^2=20\\). Along a differentiable local branch, \\(2x+8yy'=0\\), so \\(y'=-x/(4y)\\) when \\(y\\ne0\\). At \\((2,2)\\), \\(F_y=8y=16\\ne0\\), giving a local \\(y(x)\\) and slope \\(-1/4\\). At \\((\\sqrt{20},0)\\), \\(F_y=0\\), so division by \\(y\\) and this branch argument fail. The ellipse has a vertical tangent; locally \\(x=\\sqrt{20-4y^2}\\) is differentiable as \\(x(y)\\).","transfer":"Changed case: for \\(xy+y^2=6\\) at \\((1,2)\\), derive the local \\(y'\\) and check the branch hypothesis. Determine whether any real point on the relation makes the coefficient of \\(y'\\) vanish; justify your conclusion and interpret the geometry.","transferSolution":"Differentiating \\(xy+y^2=6\\) gives \\(y+(x+2y)y'=0\\), hence \\(y'=-y/(x+2y)\\). At \\((1,2)\\), \\(x+2y=5\\ne0\\), so the slope is \\(-2/5\\) and a local branch exists. If the coefficient vanished, \\(x=-2y\\); the relation would give \\(-y^2=6\\), impossible over \\(\\mathbb R\\). There is no such real point to interpret."}
```

```exercise
{"id":"calc-r3-rules-inverse","type":"written","prompt":"Let \\(q(x)=x^3+3x\\). Without solving for \\(q^{-1}\\), find \\((q^{-1})'(4)\\). Prove the inverse input has a unique preimage and explain why substituting \\(4\\) into \\(q'\\) is wrong.","hints":["First solve q(a)=4 by inspection.","For v>u, q(v)−q(u)=(v−u)(v²+uv+u²+3); inspect its sign."],"rubric":["Finds preimage a=1","Establishes q is strictly increasing and onto ℝ","Computes q′(1)=6 and inverse slope 1/6","Distinguishes inverse input 4 from original input 1"],"solution":"First \\(q(1)=4\\). For \\(v>u\\), \\(q(v)-q(u)=(v-u)(v^2+uv+u^2+3)>0\\), since \\(v^2+uv+u^2\\ge0\\). The continuous cubic tends to \\(\\pm\\infty\\) at the corresponding tails, so it is one-to-one and onto \\(\\mathbb R\\). Since \\(q'(1)=6\\ne0\\), \\((q^{-1})'(4)=1/6\\). The argument \\(4\\) is an output of \\(q\\); its preimage \\(1\\) is where \\(q'\\) belongs.","transfer":"Changed case: q(x)=x³ has a global inverse. What happens to (q⁻¹)′ at zero, and which hypothesis of the inverse derivative formula fails?","transferSolution":"The inverse of \\(q(x)=x^3\\) is \\(q^{-1}(h)=h^{1/3}\\). Its quotient at \\(0\\) is \\(h^{1/3}/h=1/h^{2/3}\\), which is unbounded as \\(h\\to0\\), so no finite derivative exists there. The original slope \\(q'(0)=0\\), violating the nonzero hypothesis of the inverse derivative theorem."}
```

## Practice: structure, hypotheses, and interpretation

1. Differentiate (x²+1) exp(3x). Name every rule used.
2. Differentiate ln(1+x²), and explain its domain before and after differentiation.
3. Differentiate sin(x²)². Explain why the expression has two successive chain factors.
4. For xy+y²=6, find y′ on a local branch and the tangent slope at (1,2). State where the derivative formula cannot be used.
5. For f(x)=x³+x, find (f⁻¹)′(0) and (f⁻¹)′(−2). Identify the original input associated with each inverse input.
6. A tank's volume is V(r)=4πr³/3 cubic metres. Its radius r(t) grows at 0.02 m/s when r=0.5 m. Find dV/dt and explain the units using the chain rule.
7. A student writes d/dx[ln(x²)]=1/x for x≠0. Diagnose the error and obtain the correct derivative in two different ways.
8. The curve x²+y²=0 consists of one point. Implicit differentiation gives 2x+2y y′=0. Does this determine a tangent slope at the origin? Explain why an equation of derivatives is not automatically a local function.
9. Derive the quotient rule by writing f/g=f·g⁻¹, where g⁻¹ here means the reciprocal power, not an inverse function. State the assumptions and simplify the result.

<details>
<summary>First hints: identify the structure</summary>

1. The outermost operation is a product; the exponential has an inner function.
2. Check whether 1+x² can ever be nonpositive.
3. Read the expression as [sin(x²)]².
4. Both x and y vary when differentiating xy.
5. Solve f(a)=0 and f(a)=−2 before taking reciprocals of derivatives.
6. Volume changes because radius changes, and radius changes because time changes.
7. The inner derivative of x² is missing.
8. Does the relation admit a y value for any nearby nonzero x?
9. Apply the product rule, then the chain rule to a reciprocal.

</details>

<details>
<summary>Second hints: the decisive calculation</summary>

1. The derivative of exp(3x) is 3 exp(3x).
2. The derivative of ln(u) is u′/u when u>0.
3. The three layers are the square, sine, and x².
4. Differentiation gives y+x y′+2y y′=0.
5. The relevant original inputs are 0 and −1.
6. Compute dV/dr and multiply it by dr/dt.
7. On x≠0, ln(x²)=2 ln|x|.
8. At the origin the differentiated equation reduces to 0=0.
9. The derivative of [g(x)]⁻¹ is −g′(x)/g(x)².

</details>

<details>
<summary>Fully worked solutions</summary>

1. The product rule gives 2x exp(3x)+(x²+1)·3 exp(3x)=exp(3x)(3x²+2x+3). The factor 3 comes from the chain rule inside the exponential. The original function and derivative are defined for every real x.
2. Since 1+x²>0 for every real x, the original function has domain all real numbers. The chain rule gives 2x/(1+x²), also defined everywhere because its denominator never vanishes.
3. Differentiating the outer square gives 2 sin(x²); differentiating its inner sine gives cos(x²)·2x. Multiplication produces 4x sin(x²)cos(x²). The factors record all three layers and the formula applies for every real x.
4. From y+(x+2y)y′=0, obtain y′=−y/(x+2y) wherever x+2y≠0 on a differentiable local branch. At (1,2), the point satisfies 2+4=6 and the slope is −2/5. A zero denominator blocks this solved formula; one must inspect the local geometry separately.
5. Since f(0)=0 and f′(0)=1, (f⁻¹)′(0)=1. Since f(−1)=−2 and f′(−1)=4, (f⁻¹)′(−2)=1/4. The function is globally one-to-one as proved above, and both nonzero derivatives permit the inverse formula.
6. The chain rule gives dV/dt=(4πr²)(dr/dt). At r=0.5 and dr/dt=0.02, this is 4π(0.25)(0.02)=0.02π m³/s. The first factor has units m², representing volume change per radius change; multiplying by m/s gives m³/s.
7. Direct composition gives (1/x²)·2x=2/x for x≠0. Alternatively, ln(x²)=2 ln|x|, whose derivative is 2/x. The incorrect answer omitted or mishandled the inner chain factor. At x=0 the original logarithm is undefined, so no derivative is claimed there.
8. No. The relation requires both coordinates to be zero, so there is no branch y(x) defined on an interval around the origin. Its differentiated equation supplies no constraint on y′ because both coefficients vanish. The implicit function theorem's nonzero partial-derivative hypothesis fails, and this isolated point has no tangent curve in the intended sense.
9. Assume f and g are differentiable at the point and g≠0 there. Then (f·g⁻¹)′=f′g⁻¹+f(−g⁻²g′)=f′/g−fg′/g²=(f′g−fg′)/g². Continuity of g keeps its values nonzero sufficiently near the point, so the quotient is defined locally. The reciprocal exponent in this derivation is unrelated to inverse-function notation.

</details>

**Readiness check:** explain why an implicit derivative contains y′, why an inverse derivative uses the corresponding original input, and why a composition needs every scale factor. Solve a nested example without expanding away its structure.

**Further reading:** [MIT 18.01SC](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/) includes a unit on implicit differentiation and inverse functions. [OpenStax Calculus Volume 1, chapter 3](https://openstax.org/books/calculus-volume-1/pages/3-introduction) provides additional differentiation practice. [3Blue1Brown's product and chain rule lesson](https://www.3blue1brown.com/lessons/chain-rule-and-product-rule/) develops the area interpretation visually. These explanations, examples, and investigations are original.
