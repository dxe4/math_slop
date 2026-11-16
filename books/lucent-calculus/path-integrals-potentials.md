# Integrating along a path: mass, work, and potential

Primary companion: [Multivariable and Vector Calculus](#/books/calculus-multivariable), Euler’s L2–L3 book. Keep its chapter sequence for the main reading route and use this lesson for the stated investigation or proof connection.

**Learning outcomes:** parameterize a path, distinguish \(ds\) from \(d\mathbf r\), determine when an integral depends on orientation, and use a potential only after checking its domain. Prerequisites are single-variable integration, vector components, and multivariable derivatives.

## Two integrals with different meanings

Let \(\mathbf c:[a,b]\to\mathbb R^2\) be piecewise \(C^1\). Assume the scalar density \(g\) and vector field \(\mathbf F\) are continuous on an open neighborhood of the path image. Then a wire has mass

$$
\int_C g\,ds=\int_a^b g(\mathbf c(t))\lVert\mathbf c'(t)\rVert\,dt.
$$

Arc length \(ds\) is nonnegative. Reversing the traversal leaves mass unchanged. For a force field \(\mathbf F=(P,Q)\), the work along the oriented path is

$$
\int_C\mathbf F\cdot d\mathbf r
=\int_a^b\mathbf F(\mathbf c(t))\cdot\mathbf c'(t)\,dt
=\int_C P\,dx+Q\,dy.
$$

Reversing the path changes the sign of work. Speed and parameterization still matter *inside* a calculation, but under a smooth monotone reparameterization the substitution rule gives the same integral for the same oriented geometric path. A curve traced twice contributes twice. When a parameterization stalls, verify the derivative and orientation instead of assuming that its endpoints determine the integral.

### Why a change of clock preserves one integral and orients the other

Let \(\phi:[\alpha,\beta]\to[a,b]\) be a \(C^1\) monotone surjection and put \(\mathbf q=\mathbf c\circ\phi\). The continuity assumptions above make the pullback integrands piecewise continuous. On each subinterval where \(\mathbf c\) is \(C^1\), the chain rule gives

$$
\mathbf q'(s)=\mathbf c'(\phi(s))\phi'(s).
$$

First suppose \(\phi\) is increasing, so \(\phi(\alpha)=a\), \(\phi(\beta)=b\), and \(\phi'\geq0\). Then

$$
\int_\alpha^\beta g(\mathbf q(s))\lVert\mathbf q'(s)\rVert\,ds
=\int_\alpha^\beta g(\mathbf c(\phi(s)))\lVert\mathbf c'(\phi(s))\rVert\phi'(s)\,ds
=\int_a^b g(\mathbf c(t))\lVert\mathbf c'(t)\rVert\,dt.
$$

The one-variable substitution \(t=\phi(s)\) proves scalar invariance. The same substitution, now without a norm, gives

$$
\int_\alpha^\beta \mathbf F(\mathbf q(s))\cdot\mathbf q'(s)\,ds
=\int_a^b \mathbf F(\mathbf c(t))\cdot\mathbf c'(t)\,dt,
$$

so an increasing change of clock preserves work as well.

If \(\phi\) is decreasing, its endpoints are \(b\) and \(a\), and \(\phi'\leq0\). For scalar mass, \(\lVert\mathbf q'\rVert=\lVert\mathbf c'(\phi)\rVert|\phi'|=-\lVert\mathbf c'(\phi)\rVert\phi'\). Substitution reverses the limits and the extra minus sign restores \(\int_a^b\): mass is unchanged. For vector work there is no absolute value, so substitution gives \(\int_b^a=-\int_a^b\). Thus the theorem itself—not a picture—explains why \(ds\) ignores orientation while \(d\mathbf r\) records it. A nonzero derivative everywhere is not required: a monotone clock may stall at isolated points while the displayed chain-rule and substitution hypotheses still hold. Repeated coverage adds another scalar contribution; signed work over extra or backtracking pieces may add or cancel, depending on the field and orientation.

### A wire versus a force along the same arc

Take the quarter-circle \(\mathbf c(t)=(2\cos t,2\sin t)\), \(0\leq t\leq\pi/2\). Its speed is two. If linear density is \(g(x,y)=x^2+y^2=4\), its mass is \(\int_0^{\pi/2}4(2)dt=4\pi\). If instead the field is \(\mathbf F=(-y,x)\), its value on the arc is \((-2\sin t,2\cos t)\) and its dot product with velocity is four. Its work is \(2\pi\). Reversing this same quarter-circle leaves \(4\pi\) mass but gives \(-2\pi\) work. Multiplying a vector field by speed, rather than taking its dot product with velocity, would answer a different question.

The controls in the hidden scene are the radial coefficient \(R\) and tangential coefficient \(T\). At the authored defaults \(R=0\) and \(T=2\), so \(\mathbf F=(-y,x)=\mathbf c'(t)\). Every displayed velocity and force-component arrow uses scale \(1/2\): its direction and decomposition are meaningful, but its drawn length is half the vector's coordinate magnitude. Before opening the scene or moving a control, decompose

$$
\mathbf F=R(\cos t,\sin t)+T(-\sin t,\cos t),\qquad
\mathbf c'(t)=2(-\sin t,\cos t).
$$

Without expanding the dot product, predict which coefficient can affect the work-density readout. Only then open the scene, vary \(R\), followed by \(T\), and record what changes. Its compact labels use \(v\) for the half-scale velocity, \(r\) and \(\tau\) for the two force components, and \(F\) for their total.

```mathviz
scene "A force decomposed along a circular path";
domain -3.5 3.5;
range -3.5 3.5;
coordinates equal;
param t = 0.7 from 0 to 1.570796327;
param R = 0 from -2 to 2;
param T = 2 from -2 to 2;
let px = 2*cos(t);
let py = 2*sin(t);
let radial_x = R*cos(t);
let radial_y = R*sin(t);
let tangential_x = -T*sin(t);
let tangential_y = T*cos(t);
measure work_density = 2*T;
parametric arc(x) = (2*cos(x),2*sin(x)) from 0 to pi/2 color teal;
point place = (px,py) color rose;
arrow v from (px,py) to (px-sin(t),py+cos(t)) color amber;
arrow r from (px,py) to (px+radial_x/2,py+radial_y/2) color blue;
arrow tau from (px+radial_x/2,py+radial_y/2) to (px+(radial_x+tangential_x)/2,py+(radial_y+tangential_y)/2) color rose;
arrow force from (px,py) to (px+(radial_x+tangential_x)/2,py+(radial_y+tangential_y)/2) color violet;
```

<details><summary>Compare the vector calculation</summary>

The dot product is exactly \(2T\): the radial terms cancel. Thus changing \(R\) changes the force arrow without changing work density, while changing \(T\) changes both. The exact readout evaluates this formula from the controls; sampled arrows illustrate the orthogonal decomposition rather than prove it. The scene shows a planar path, not a graph of work as a function of time.

</details>

### Worked example: a clock that briefly stalls

Keep the same quarter-circle but replace \(t\) by

$$
\phi(s)=\frac\pi2\left(4(s-\tfrac12)^3+\tfrac12\right),\qquad 0\leq s\leq1.
$$

It maps 0 to 0 and 1 to \(\pi/2\). Moreover \(\phi'(s)=6\pi(s-1/2)^2\geq0\), with equality only at \(s=1/2\). Thus \(\mathbf q(s)=\mathbf c(\phi(s))\) pauses at one instant but continues in the same direction and covers the same regular geometric arc once. For the density \(g=x^2+y^2=4\),

$$
\int_0^1 4\lVert\mathbf c'(\phi(s))\rVert\phi'(s)\,ds
=\int_0^1 8\phi'(s)\,ds=8[\phi(1)-\phi(0)]=4\pi.
$$

For \(\mathbf F=(-y,x)\), the original work density is four, so the changed-clock density is \(4\phi'(s)\) and the work is \(4[\phi(1)-\phi(0)]=2\pi\). Replacing \(\phi(s)\) by \(\phi(1-s)\) reverses the traversal: the mass remains \(4\pi\), while the work becomes \(-2\pi\). The zero velocity at one parameter value does not alter either integral. By contrast, an interval of repeated coverage adds scalar mass; work over a backtracked portion can cancel because its orientation reverses.

```exercise
{"id":"calc3-path-kind","type":"choice","prompt":"A wire with positive scalar density is walked in reverse. Which statement is correct?","options":[{"label":"Its scalar line integral is unchanged, while work against a fixed vector field reverses sign.","correct":true,"feedback":"Correct. ds includes speed, while dr carries orientation."},{"label":"Both integrals reverse sign because t now runs backward.","correct":false,"feedback":"The speed norm absorbs reversal for the scalar integral; only the vector displacement changes sign."},{"label":"Neither integral changes because endpoints are the same.","correct":false,"feedback":"Work is oriented. Endpoints alone determine it only when the field has a potential on the relevant domain."}],"hints":["Write both parameter formulas and reverse the parameter interval carefully."]}
```

```exercise
{"id":"calc3-path-mass-work-clock","type":"written","prompt":"Let c(t)=(t,t²), 0≤t≤1. A wire has density g(x,y)=x, and a force field is F(x,y)=(y,x). Compute the scalar mass and vector work. Then (i) reverse the path and (ii), separately, use the same-orientation reparameterization q(s)=c(s³), 0≤s≤1. State and verify what happens to both integrals in each case.","hints":["For mass, c′(t)=(1,2t) and u=1+4t² finishes the resulting integral.","For work, compute F(c(t))·c′(t). Under t=s³, include the factor dt=3s²ds; q′(0)=0 is a stall, not a reversal."],"rubric":["Forms the scalar integrand t√(1+4t²) and evaluates it exactly","Forms the vector work density 3t² and obtains work 1","Explains and computes that reversal preserves mass and negates work","Computes or correctly substitutes through q(s)=c(s³) for both integrals","Distinguishes the endpoint stall from repeated coverage or reversal"],"solution":"Since c′(t)=(1,2t), speed is √(1+4t²). The mass is ∫₀¹t√(1+4t²)dt=(1/12)[(1+4t²)^(3/2)]₀¹=(5√5−1)/12. On the path F(c(t))=(t²,t), so F(c(t))·c′(t)=t²+2t²=3t² and the work is 1. Reversal leaves the speed factor nonnegative, so mass stays (5√5−1)/12, while velocity changes orientation and work becomes −1. Separately, q(s)=(s³,s⁶) has the original orientation. Its density is s³ and its speed is 3s²√(1+4s⁶), giving mass ∫₀¹3s⁵√(1+4s⁶)ds; t=s³ returns the original mass integral. Also F(q)·q′=9s⁸, whose integral is 1. Although q′(0)=0, s³ is increasing and covers the curve once, so this endpoint stall does not change either value."}
```

Close the notes before attempting [Problem 4 of the independent vector-integration set](vector-integration-problem-set.md) and [Problem 4 of the synthesis paper](calculus-iii-synthesis.md). Those delayed problems revisit path dependence and orientation on changed fields and curves.

## The fundamental theorem for line integrals

If \(U\) is open, \(\Phi\in C^1(U)\), and the whole image of a piecewise \(C^1\) path \(\mathbf c\) lies in \(U\), then \(\mathbf F=\nabla\Phi\) is continuous along the path. On each smooth piece the chain rule gives

$$
\frac{d}{dt}\Phi(\mathbf c(t))=\nabla\Phi(\mathbf c(t))\cdot\mathbf c'(t).
$$

The pullback is piecewise continuous, so applying the one-variable FTC on each piece and telescoping yields \(\int_C\mathbf F\cdot d\mathbf r=\Phi(B)-\Phi(A)\). This is a proof, not a pattern match: in this course's Riemann framework, the simple sufficient hypothesis is a \(C^1\) potential on an open neighborhood of the **whole path**, not mere pointwise differentiability. Every closed path in such a domain has zero integral. Conversely, if a continuous field has path-independent integrals throughout a path-connected open region, fixing a base point and integrating to \((x,y)\) defines a potential; differentiating along short horizontal and vertical segments recovers its components. A closed-loop test is therefore a practical obstruction to a potential.

For \(\mathbf F=(2xy,x^2+3)\), integrate its first component in \(x\): \(\Phi=x^2y+h(y)\). Matching \(\partial_y\Phi=x^2+h'(y)\) to \(x^2+3\) gives \(h=3y+C\). From \((0,0)\) to \((2,1)\), any piecewise smooth path in \(\mathbb R^2\) has work \(\Phi(2,1)-\Phi(0,0)=7\). Checking only \(\partial_yP=\partial_xQ=2x\) would suggest a potential here, but equality of cross derivatives alone needs a suitable domain and regularity to guarantee one globally.

## A hole changes the global answer

On \(\mathbb R^2\setminus\{(0,0)\}\), consider

$$
\mathbf G(x,y)=\left(\frac{-y}{x^2+y^2},\frac{x}{x^2+y^2}\right).
$$

The planar curl \(\partial_xG_y-\partial_yG_x\) is zero at every point where \(\mathbf G\) is defined. Yet on \(\mathbf c(t)=(r\cos t,r\sin t)\), \(0\leq t\leq2\pi\), the dot product \(\mathbf G(\mathbf c(t))\cdot\mathbf c'(t)=1\), so the closed-loop work is \(2\pi\). Thus no **single-valued global potential** exists on the punctured plane. Locally, away from a branch cut, an angle function acts as a potential; going once around the hole changes that angle by \(2\pi\). The equality of cross derivatives was not false. Its global converse requires topology, such as simple connectivity, or a direct path-independence argument. The next lesson uses this as a decisive test of Green's theorem.

**Proof decision:** If a path connects two points but the field fails at a point elsewhere in the plane, the fundamental theorem may still apply if there is a potential on an open neighborhood of the **whole path**. A singularity somewhere outside that neighborhood is not automatically relevant. Conversely, if your proposed potential is an angle with a discontinuous branch jump along the path, you have not met the theorem's hypothesis.

```exercise
{"id":"calc3-potential-domain","type":"written","prompt":"A student sees curl G=0 off the origin and concludes that every closed integral in the punctured plane is zero. Diagnose the exact failed implication. Parameterize a radius-three circle, compute its work, and explain whether moving that loop to a small circle centered at (4,0) changes the conclusion.","hints":["The large circle encloses the missing point; evaluate G(c(t))·c'(t) before applying any theorem.","A small circle centered at (4,0) bounds a disk contained in the field's domain; ask whether Green can apply there."],"rubric":["Distinguishes local curl equality from global exactness on a region with a hole","Computes 2π for the radius-three counterclockwise circle","Identifies the small off-center disk as avoiding the singularity","Uses Green or a local potential to conclude zero around the small loop"],"solution":"For c(t)=(3 cos t,3 sin t), G(c)=(-sin t/3,cos t/3) and c'=(-3 sin t,3 cos t), so their dot product is 1 and the integral is 2π. Curl G=0 where defined does not imply a global potential on the punctured plane. A sufficiently small circle centered at (4,0), for example radius one, bounds a disk avoiding the origin. G has continuous first partials there, so Green's theorem gives zero circulation around that loop. The obstruction depends on the enclosed domain, not on radius alone.","transfer":"For H=(y,x) on the plane, determine a potential. Then consider H+λG on the punctured plane and two oriented paths C₁ and C₂ from (1,0) to (−1,0). Identify the endpoint-determined part and compute W(C₁)−W(C₂) when C₁ followed by the reverse of C₂ winds k times counterclockwise around the origin.","transferSolution":"H=∇(xy), so its work is the endpoint difference xy at (−1,0) minus xy at (1,0), which is zero for every such path. The G part is not globally endpoint-determined. The specified concatenation C₁ followed by the reverse of C₂ has G integral W_G(C₁)−W_G(C₂)=2πk. Therefore W(C₁)−W(C₂)=2πλk. Here positive k means that this specified closed concatenation winds counterclockwise; interchanging C₁ and C₂ reverses the sign."}
```
