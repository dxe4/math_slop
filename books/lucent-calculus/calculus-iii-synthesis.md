# Calculus III: geometry and conservation examination

**Role:** cumulative written assessment after multivariable differentiation, constraints, coordinate changes, and boundary integrals. Suggested time: 150 minutes; 60 marks. Attempt every problem before opening hints. Written arguments are saved for revision and self or instructor review; the browser does not certify a proof.

Each task has its own ten-mark rubric. State the domain, smoothness, orientation, and boundary conditions needed by a chosen method. A correct number without a valid setup earns at most two marks.

**Outcomes assessed:** C12 differentiability; C13 constrained extrema; C14 Jacobians; C15 Green, Gauss, Stokes, and flux.

## Examination problems

### 1. A parameter changes the tangent-plane verdict

For real \(a\), define
\[
F_a(0,0)=0,\qquad F_a(x,y)=\frac{x^2y}{(x^2+y^2)^a}\quad ((x,y)\ne(0,0)).
\]
Classify continuity, both coordinate partial derivatives, and total differentiability at the origin for every \(a\). Give a bound and an obstruction at each threshold.

```exercise
{"id": "calc-r3-final-regularity", "type": "written", "prompt": "For real \\(a\\), define\n\\[\nF_a(0,0)=0,\\qquad F_a(x,y)=\\frac{x^2y}{(x^2+y^2)^a}\\quad ((x,y)\\ne(0,0)).\n\\]\nClassify continuity, both coordinate partial derivatives, and total differentiability at the origin for every \\(a\\). Give a bound and an obstruction at each threshold.", "hints": ["The numerator has order three in r=√(x²+y²). First check the coordinate axes and bound |F_a| by a power of r.", "On x=y=t>0, compare F_a with 1 and then F_a/r. The only possible linear derivative comes from the coordinate partials."], "rubric": ["2 marks: both coordinate partials are zero for all a, including regimes without continuity", "2 marks: proves continuity for a<3/2 using |F_a|≤r^(3−2a)", "2 marks: uses a diagonal path to disprove continuity for a≥3/2", "2 marks: tests the little-o(r) remainder and proves differentiability for a<1", "2 marks: diagonal obstruction for a≥1 and clear critical cases"], "solution": "\\(f_x(0,0)=f_y(0,0)=0\\) for all \\(a\\); continuity holds exactly for \\(a<3/2\\), and total differentiability exactly for \\(a<1\\). On either coordinate axis F_a=0, so both coordinate difference quotients vanish for every a. Let r=√(x²+y²). Since \\(|x^2y|\\le r^3\\), we have \\(|F_a|\\le r^{3-2a}\\). Thus a<3/2 implies continuity. Along \\(x=y=t>0\\), \\(F_a(t,t)=2^{-a}t^{3-2a}\\); this stays nonzero at a=3/2 and grows for a>3/2, so continuity fails there. The partials force any total derivative to be the zero map. For \\(a<1\\), \\(|F_a|/r\\le r^{2-2a}\\to0\\), proving differentiability. On the diagonal, r=√2t and \\(|F_a|/r=2^{-a-1/2}t^{2-2a}\\), which does not tend to zero when a≥1. Hence differentiability holds exactly for a<1; continuity exactly for a<3/2; both partials always exist.", "transfer": "For the changed numerator \\(G_a(x,y)=xy/(x^2+y^2)^a\\), with \\(G_a(0,0)=0\\), classify continuity and total differentiability.", "transferSolution": "Here continuity holds exactly for \\(a<1\\), and total differentiability exactly for \\(a<1/2\\). The axes again give zero partials. The bound |xy|≤r²/2 yields \\(|G_a|\\le r^{2-2a}/2\\), while x=y=t>0 gives \\(G_a=2^{-a}t^{2-2a}\\). Thus continuity holds exactly for a<1. Dividing by r gives a sufficient bound r^(1−2a)/2, and the same diagonal supplies the obstruction for a≥1/2. Total differentiability therefore holds exactly for a<1/2."}
```

### 2. A resource budget changes the minimizer

For every \(b>0\), minimize
\[
f(x,y)=(x-1)^2+2(y-2)^2\quad\text{subject to}\quad x\ge0,\ y\ge0,\ x+y\le b.
\]
Identify all parameter regimes, the minimizer and value, and justify global optimality without assuming an interior stationary point exists.

```exercise
{"id": "calc-r3-final-budget", "type": "written", "prompt": "For every \\(b>0\\), minimize\n\\[\nf(x,y)=(x-1)^2+2(y-2)^2\\quad\\text{subject to}\\quad x\\ge0,\\ y\\ge0,\\ x+y\\le b.\n\\]\nIdentify all parameter regimes, the minimizer and value, and justify global optimality without assuming an interior stationary point exists.", "hints": ["The unconstrained zero is feasible only for large b. For smaller b, argue why unused budget cannot minimize while below (1,2).", "Minimize on x+y=b and check when its stationary point leaves the nonnegative segment. Strict convexity or an edge comparison establishes uniqueness."], "rubric": ["2 marks: identifies (1,2) with value 0 for b≥3", "2 marks: shows the budget edge is active when b<3", "2 marks: derives edge point (2b/3−1,1+b/3) and its feasible range", "2 marks: finds (0,b) when 0<b≤3/2 and gives both value formulas", "2 marks: proves global uniqueness and checks agreement at b=3/2 and b=3"], "solution": "The regimes are \\(b\\ge3\\), \\(3/2\\le b\\le3\\), and \\(0<b\\le3/2\\), with respective minimizers \\((1,2)\\), \\((2b/3-1,1+b/3)\\), and \\((0,b)\\). The constant Hessian \\(\\operatorname{diag}(2,4)\\) is positive definite throughout the plane, so f is strictly convex there. The feasible triangle is convex, which gives at most one minimizer. It is also nonempty and compact for every b>0, so continuity supplies attainment; the cases below locate that minimizer. For b≥3, (1,2) is feasible and has the absolute lower bound zero. If b<3 and x+y<b, at least one of x<1 or y<2 holds; a small increase in that coordinate remains feasible and decreases f, so a minimum uses x+y=b. Put y=b−x with 0≤x≤b. The edge derivative is \\(2(x-1)-4(b-x-2)=6x+6-4b\\), whose zero is x=2b/3−1, y=1+b/3. This lies on the edge exactly when b≥3/2 and, for b≤3, has value \\(2(b-3)^2/3\\). When 0<b<3/2 the edge derivative is positive at x=0, so its minimum is (0,b), value \\(1+2(b-2)^2\\). Strict convexity makes these the unique global minimizers. At b=3/2 both formulas give (0,3/2) and value 3/2; at b=3 the edge point is (1,2) and the value is zero.", "transfer": "Minimize \\((x-2)^2+(y-1)^2\\) over the same triangle for all \\(b>0\\). Locate the new transitions.", "transferSolution": "The transition values are \\(b=1\\) and \\(b=3\\). For b≥3 the zero (2,1) is feasible. For b<3 the budget edge is active by the same improvement argument. There y=b−x and the edge derivative is 2(x−2)−2(b−x−1)=\\(4x-2(b+1)\\), so x=(b+1)/2 and y=(b−1)/2 for 1≤b≤3, with value \\((3-b)^2/2\\). For 0<b≤1 the constrained edge minimum is (b,0), with value (b−2)²+1. The feasible triangle is convex and the objective strictly convex, so its attained minimum is unique; the formulas agree at b=1 and b=3."}
```

### 3. A rotated diamond

Evaluate
\[
\iint_E (x+y)^2\,dA,\qquad E=\{(x,y):|x+y|+2|x-y|\le2\}.
\]
Choose coordinates that simplify the boundary, derive the Jacobian, and account for the absolute values.

```exercise
{"id": "calc-r3-final-jacobian", "type": "written", "prompt": "Evaluate\n\\[\n\\iint_E (x+y)^2\\,dA,\\qquad E=\\{(x,y):|x+y|+2|x-y|\\le2\\}.\n\\]\nChoose coordinates that simplify the boundary, derive the Jacobian, and account for the absolute values.", "hints": ["Put u=x+y and v=x−y. Invert the linear map and compute its determinant.", "The u,v region is |u|+2|v|≤2. At fixed u, the v-width is 2−|u|."], "rubric": ["2 marks: selects u=x+y, v=x−y and maps E to the stated diamond", "2 marks: derives x=(u+v)/2, y=(u−v)/2 and |∂(x,y)/∂(u,v)|=1/2", "3 marks: writes correct bounds and transformed integral", "2 marks: evaluates 4/3", "1 mark: explains symmetry or gives a scale check"], "solution": "With \\(u=x+y\\) and \\(v=x-y\\), \\(dA=\\tfrac12\\,du\\,dv\\) and the integral is \\(4/3\\). The inverse map is \\(x=(u+v)/2\\), \\(y=(u-v)/2\\); its derivative determinant is −1/2, so dA=(1/2)du dv. The region becomes |u|+2|v|≤2. For −2≤u≤2, −(2−|u|)/2≤v≤(2−|u|)/2. The integral is \\(\\tfrac12\\int_{-2}^2u^2(2-|u|)\\,du=\\int_0^2(2u^2-u^3)\\,du=4/3\\). Symmetry in u combines the two halves; the absolute value is already handled in the width. The integrand is nonnegative, as is the result.", "transfer": "On \\(0\\le x+y\\le2\\), \\(|x-y|\\le1\\), evaluate \\(\\iint(x^2+y^2)\\,dA\\) using the same coordinates.", "transferSolution": "The transformed rectangle gives \\(\\iint(x^2+y^2)\\,dA=5/3\\). The image is the rectangle 0≤u≤2, −1≤v≤1. Since \\(x^2+y^2=(u^2+v^2)/2\\) and dA=(1/2)du dv, the integral is (1/4)[(∫₀²u²du)(∫_−1¹dv)+(∫₀²du)(∫_−1¹v²dv)]=(1/4)[(8/3)2+2(2/3)]=5/3."}
```

### 4. A shifted defect and nonconstant circulation

On \(\mathbb R^2\setminus\{(1,0)\}\), let
\[
\mathbf F(x,y)=\left(\frac{-y}{(x-1)^2+y^2},\frac{x-1}{(x-1)^2+y^2}\right)+(0,x^2).
\]
Find the counterclockwise circulation around each rectangle \([-1,2]\times[-1,1]\) and \([2,3]\times[-1,1]\). State where the filled-region theorem applies.

```exercise
{"id": "calc-r3-final-hole", "type": "written", "prompt": "On \\(\\mathbb R^2\\setminus\\{(1,0)\\}\\), let\n\\[\n\\mathbf F(x,y)=\\left(\\frac{-y}{(x-1)^2+y^2},\\frac{x-1}{(x-1)^2+y^2}\\right)+(0,x^2).\n\\]\nFind the counterclockwise circulation around each rectangle \\([-1,2]\\times[-1,1]\\) and \\([2,3]\\times[-1,1]\\). State where the filled-region theorem applies.", "hints": ["Separate the singular and polynomial fields. The latter has scalar curl 2x.", "Remove a small disk around (1,0) from the first rectangle; its inner boundary is clockwise. The second rectangle contains no defect."], "rubric": ["2 marks: identifies the defect inside the first rectangle and outside the second", "2 marks: computes the smooth field contributions 6 and 10", "3 marks: computes singular contribution 2π around the first rectangle by puncturing and zero around the second", "2 marks: gives 6+2π and 10 with correct orientations", "1 mark: states the field/domain regularity needed for the chosen theorem"], "solution": "The respective circulations are \\(6+2\\pi\\) and \\(10\\). The polynomial part \\((0,x^2)\\) has scalar curl \\(2x\\), giving \\(\\int_{-1}^2\\int_{-1}^1 2x\\,dy\\,dx=6\\) on the first rectangle and \\(\\int_2^3\\int_{-1}^1 2x\\,dy\\,dx=10\\) on the second. The singular part has zero curl away from (1,0). The first filled rectangle contains the missing point, so the boundary theorem cannot be applied to it directly. Excise a small centered disk within it; on the resulting region the theorem applies. Its clockwise inner circle contributes −2π, found by a direct circle parameterization, so its outer counterclockwise circulation is +2π. The second filled rectangle avoids the defect and gives zero for the singular part. The totals are 6+2π and 10.", "transfer": "Replace the first rectangle by \\([2,4]\\times[-1,1]\\) and traverse its boundary clockwise. Find the circulation and explain the defect.", "transferSolution": "The clockwise circulation is \\(-24\\). The defect at (1,0) is outside. The scalar curl is 2x throughout the new filled rectangle, so its counterclockwise circulation is \\(\\int_2^4\\int_{-1}^1 2x\\,dy\\,dx=2(4^2-2^2)=24\\). Clockwise orientation reverses the sign: −24. The singular part has zero circulation because the new filled rectangle avoids its defect."}
```

### 5. A curved cap with a second flux route

Let \(S\) be the upward-oriented cap \(z=2-x^2-2y^2\) above \(z=0\), and let \(\mathbf V=(xz,yz,z^2)\). Find its flux directly and check it by closing the surface. Account for the bottom normal and flux.

```exercise
{"id": "calc-r3-final-curved-flux", "type": "written", "prompt": "Let \\(S\\) be the upward-oriented cap \\(z=2-x^2-2y^2\\) above \\(z=0\\), and let \\(\\mathbf V=(xz,yz,z^2)\\). Find its flux directly and check it by closing the surface. Account for the bottom normal and flux.", "hints": ["Write u=x²+2y² and h=2−u; the upward graph area vector is (2x,4y,1)dA.", "For a disk change use x=√2 r cosθ, y=r sinθ. For the closed solid, div V=4z."], "rubric": ["2 marks: gives the upward area vector and projected ellipse u≤2", "2 marks: simplifies direct flux integrand to 4−u²", "2 marks: uses the correct Jacobian and obtains 8√2π/3", "2 marks: computes closed-solid flux via div V=4z and obtains the same value", "2 marks: checks the outward bottom normal and zero bottom flux"], "solution": "For \\(u=x^2+2y^2\\) and \\(h=2-u\\), the direct integrand is \\(2uh+h^2=4-u^2\\); both routes give \\(8\\sqrt2\\pi/3\\). The projected ellipse is \\(u=x^2+2y^2\\le2\\), with height \\(h=2-u\\), and the upward vector area element is (2x,4y,1)dA. On the graph, V=(xh,yh,h²), so V·dS=[2x²h+4y²h+h²]dA=(2uh+h²)dA=(4−u²)dA. Set \\(x=\\sqrt2 r\\cos\\theta\\), \\(y=r\\sin\\theta\\), 0≤r≤1, 0≤θ<2π; then u=2r² and dA=√2 r dr dθ. The flux is \\(2\\pi\\sqrt2\\int_0^1(4-4r^4)r\\,dr=8\\sqrt2\\pi/3\\). Independently, close S with its bottom ellipse at z=0. The bottom outward normal is downward, but V=0 there, so its flux vanishes. Since \\(\\nabla\\cdot\\mathbf V=4z\\), total outward flux is ∫∫_(u≤2)∫₀^h4z dz dA=∫∫2h²dA. The same coordinates give 2π√2∫₀¹2(2−2r²)²r dr=8√2π/3.", "transfer": "Replace the cap by \\(z=1-x^2-2y^2\\) above \\(z=0\\), keeping the same field and upward orientation. Find its flux.", "transferSolution": "The changed cap has flux \\(\\sqrt2\\pi/3\\). For height h=a−u above u≤a, the direct integrand is \\(a^2-u^2\\). Set x=√a r cosθ, y=√(a/2)r sinθ; the Jacobian is a r/√2. Integration yields (2πa³/√2)∫₀¹(1−r⁴)r dr=√2πa³/3. With \\(a=1\\), the answer is \\(\\sqrt2\\pi/3\\). The bottom flux still vanishes."}
```

### 6. Stokes on a curved, uneven cap

Let \(S\) be \(z=1+x^2+2y^2\) over \(x^2+y^2\le1\), oriented upward, and set
\[
\mathbf F=(-yz,xz,x^2y).
\]
Find the circulation around its boundary, counterclockwise as viewed from above, by direct boundary work and by curl flux. Check smoothness and the actual three-dimensional boundary.

```exercise
{"id":"calc-r3-final-stokes-variable","type":"written","prompt":"Let \\(S\\) be \\(z=1+x^2+2y^2\\) over \\(x^2+y^2\\le1\\), oriented upward, and set\n\\[\n\\mathbf F=(-yz,xz,x^2y).\n\\]\nFind the circulation around its boundary, counterclockwise as viewed from above, by direct boundary work and by curl flux. Check smoothness and the actual three-dimensional boundary.","hints":["On the rim, \\(\\mathbf c(t)=(\\cos t,\\sin t,2+\\sin^2t)\\). Differentiate all three components, including \\(z'(t)=2\\sin t\\cos t\\). Keep the resulting vertical work term and test whether its integral vanishes by symmetry.","Compute curl F=(x²−x, −y−2xy, 2z) and use upward graph vector area (−2x,−4y,1)dA. Odd terms integrate to zero on the disk."],"rubric":["2 marks: obtains the oriented boundary and its varying height z=2+sin²t","2 marks: computes direct circulation 5π","2 marks: computes the full nonconstant curl and graph area vector","3 marks: integrates curl flux to 5π using disk symmetry and moments","1 mark: checks polynomial smoothness and explains why a horizontal flat disk cannot span this varying-height boundary"],"solution":"Here \\(\\nabla\\times\\mathbf F=(x^2-x,-y-2xy,2z)\\), and both computations give \\(5\\pi\\). Parameterize \\(\\partial S\\) by \\(c(t)=(\\cos t,\\sin t,2+\\sin^2t)\\), 0≤t≤2π. The horizontal components contribute z to F(c)·c′. The vertical component contributes \\(2\\cos^3t\\sin^2t\\), which is not pointwise zero but integrates to zero by symmetry. Hence \\(\\oint_{\\partial S}\\mathbf F\\cdot d\\mathbf r=\\int_0^{2\\pi}(2+\\sin^2t+2\\cos^3t\\sin^2t)\\,dt=5\\pi\\). The curl is (x²−x, −y−2xy, 2z). The upward graph area vector is \\((-2x,-4y,1)\\,dA\\). At z=1+x²+2y² the dot product is 2+4x²+8y²−2x³+8xy². Odd-x terms integrate to zero over the unit disk. Since ∫disk1 dA=π and ∫disk x² dA=∫disk y² dA=π/4, flux is 2π+4(π/4)+8(π/4)=5π. F is polynomial, hence C¹ on a neighborhood of S, and upward orientation induces the stated counterclockwise boundary. Since its height varies around the rim, no horizontal flat disk has this boundary.","transfer":"Keep the graph and field but use \\(x^2+y^2\\le4\\). Find the upward circulation without assuming constant boundary height.","transferSolution":"For radius \\(R\\), the circulation is \\(2\\pi R^2+3\\pi R^4\\); at \\(R=2\\), this is \\(56\\pi\\). At radius R, c(t)=(Rcos t,Rsin t,1+R²cos²t+2R²sin²t). The first two field components dot the horizontal tangent to give R²z. The vertical contribution x²y z′ is odd under t↦π−t and integrates to zero. Hence circulation is R²∫₀²π[1+R²(cos²t+2sin²t)]dt=\\(2\\pi R^2+3\\pi R^4\\). For R=2 this is 8π+48π=56π."}
```

## Optional delayed extension: mass, work, and a changed clock

This saved extension is **not part of the 150-minute, 60-mark examination and adds no time to the published 150-hour single-variable route**. Allow about 45 minutes only if you choose the extension. It deliberately retrieves ideas from [parametric motion](motion-curvature.md) and [path integrals and potentials](path-integrals-potentials.md) after the worked template has gone. Prerequisites are the chain rule, one-variable substitution, scalar line integrals with speed, vector work with orientation, and piecewise-\(C^1\) paths. Attempt every part, including the changed traversal, before opening a hint or solution.

```exercise
{"id":"calc3-optional-clock-mass-work","type":"written","prompt":"Define \\(c(t)=(\\cos t,\\sin t)\\) for every \\(t\\in\\mathbb R\\). For the base traversal restrict \\(t\\) to \\([0,2\\pi]\\), and let \\(\\rho(x,y)=2+x\\) and \\(F(x,y)=(-y,x)\\).\n\n(a) Compute exactly the scalar mass \\(\\int_c\\rho\\,ds\\) and the work \\(\\int_cF\\cdot d\\mathbf r\\), displaying both parameter integrands.\n\n(b) For \\(q(s)=c(2\\pi s^3)\\), \\(0\\le s\\le1\\), verify directly that \\(q\\) has a stall and determine both integrals.\n\n(c) Reverse the one-circuit traversal and determine what changes.\n\n(d) For the piecewise clock \\(\\phi(s)=4\\pi s\\) on \\(0\\le s\\le1/2\\) and \\(\\phi(s)=4\\pi(1-s)\\) on \\(1/2\\le s\\le1\\), compute the mass and work of \\(c\\circ\\phi\\) by splitting at \\(1/2\\).\n\n(e) Explain why equal endpoints do not force the work of this rotational field to vanish.\n\nFinally, as a fresh case, use density \\(\\widetilde\\rho(x,y)=1+x^2\\) and the twice-forward traversal \\(p(s)=c(4\\pi s)\\), \\(0\\le s\\le1\\). Compute its mass and work before consulting the solution.","hints":["Keep the formulas separate: scalar mass uses \\(\\rho(c(t))|c'(t)|\\), while work uses \\(F(c(t))\\cdot c'(t)\\). A zero derivative at one parameter value does not erase the rest of a traversal.","For a clock \\(\\theta(s)\\), \\(q'(s)=c'(\\theta(s))\\theta'(s)\\). Absolute value enters speed, but the sign of \\(\\theta'\\) remains in work. Split the piecewise clock where its derivative changes sign.","For the fresh case, integrate \\(1+\\cos^2u\\) over two full periods and compare \\(F(c(u))\\cdot c'(u)\\) with \\(1\\)."],"rubric":["3 marks: computes both base integrals from their distinct parameter integrands","3 marks: verifies the stalled-clock derivative and evaluates both integrals by exact substitution","2 marks: applies reversal correctly to scalar mass and oriented work","3 marks: splits the forward/back clock and accounts for multiplicity and orientation","2 marks: explains the closed-loop work by checking the path-independence hypotheses","3 marks: independently computes both integrals for the changed density and twice-forward traversal"],"solution":"For \\(c(t)=(\\cos t,\\sin t)\\), we have \\(c'(t)=(-\\sin t,\\cos t)\\) and \\(|c'(t)|=1\\). Therefore the scalar-mass integrand is \\((2+\\cos t)\\cdot1\\), so\n\\[\n\\int_c\\rho\\,ds=\\int_0^{2\\pi}(2+\\cos t)\\,dt=4\\pi.\n\\]\nAlso \\(F(c(t))=(-\\sin t,\\cos t)=c'(t)\\), hence the work integrand is \\(1\\) and\n\\[\n\\int_cF\\cdot d\\mathbf r=\\int_0^{2\\pi}1\\,dt=2\\pi.\n\\]\n\nFor \\(q(s)=c(2\\pi s^3)\\),\n\\[\nq'(s)=6\\pi s^2c'(2\\pi s^3),\n\\]\nso \\(q'(0)=0\\): this is a stall. Its mass is \\(\\int_0^1[2+\\cos(2\\pi s^3)]6\\pi s^2\\,ds\\). With \\(u=2\\pi s^3\\), this becomes \\(\\int_0^{2\\pi}(2+\\cos u)\\,du=4\\pi\\). Its work integrand is \\(F(c(u))\\cdot c'(u)\\,6\\pi s^2=6\\pi s^2\\), so the work is \\(2\\pi\\). The isolated zero speed does not prevent \\(s\\mapsto s^3\\) from increasing through the entire traversal.\n\nFor the reverse path \\(r(s)=c(2\\pi(1-s))\\), speed is \\(2\\pi\\), so its mass is \\(4\\pi\\), while the signed work is \\(\\int_0^1(-2\\pi)\\,ds=-2\\pi\\).\n\nFor the piecewise \\(\\phi\\), the first half traverses angles \\(0\\) to \\(2\\pi\\) and the second traverses \\(2\\pi\\) back to \\(0\\). Each half contributes mass \\(4\\pi\\), because speed uses \\(|\\phi'|=4\\pi\\), so total mass is \\(8\\pi\\). Work keeps orientation: the contributions are \\(2\\pi\\) and \\(-2\\pi\\), totaling \\(0\\).\n\nAlthough \\(c(0)=c(2\\pi)\\), \\(F\\) is not a gradient field on the plane: its scalar curl is \\(2\\), and direct integration gives nonzero circulation \\(2\\pi\\). Endpoints alone determine work only under an applicable path-independence hypothesis.\n\nFor \\(p(s)=c(4\\pi s)\\), put \\(u=4\\pi s\\). It makes two forward circuits. The mass is\n\\[\n\\int_0^{4\\pi}(1+\\cos^2u)\\,du=4\\pi+2\\pi=6\\pi,\n\\]\nand \\(F(c(u))\\cdot c'(u)=1\\) gives work \\(\\int_0^{4\\pi}1\\,du=4\\pi\\).","transfer":"Changed assumption: keep \\(\\widetilde\\rho=1+x^2\\) but traverse twice in reverse with \\(r_2(s)=c(4\\pi(1-s))\\). Compute mass and work, and identify exactly where the sign enters.","transferSolution":"The speed is \\(|-4\\pi|=4\\pi\\), so the same geometric multiplicity gives mass \\(6\\pi\\). The work factor retains the signed clock derivative \\(-4\\pi\\), giving work \\(-4\\pi\\). The density and speed are orientation-free; \\(F\\cdot r_2'\\) is orientation-sensitive."}
```

## Untimed correction clinic: the optimizer and its value are different maps

This clinic is **outside the 150-minute, 60-mark examination** and adds no time to the published single-variable route. Complete Problem 2 and its correction first. Plan a separate study session; its duration remains uncalibrated. Prerequisites are its explicit budget regimes, the [global gradient certificate](multivariable-recitation.md#board-4-which-convexity-does-the-certificate-need), and the [existence argument](noncompact-optimization.md). The examination and delayed clock extension retain their tasks and budgets.

For \(b\ge0\), write
\[
\begin{gathered}
D_b=\{(x,y):x,y\ge0,\ x+y\le b\},\\
p(b)=\operatorname*{argmin}_{D_b}f,\quad
V(b)=f(p(b)).
\end{gathered}
\]
Here \(p\) is point-valued and \(V\) scalar-valued. Both are well defined: \(D_b\) is nonempty compact and convex, and \(f=(x-1)^2+2(y-2)^2\) is continuous and strictly convex. At zero \(D_0\) is a singleton; for negative budgets it is empty. Smoothness of \(f\) concerns its input coordinates, not either parameter derivative.

```visual-story
{
  "id": "optimizer-value-sensitivity",
  "title": "Which derivative does a budget multiplier describe?",
  "prompt": "Follow one parameterized problem through an active-bound switch and an exact zero budget. Distinguish a proof certificate, a derivative of the optimizer, and a derivative of the optimal value.",
  "stages": [
    {
      "id": "moving-budget",
      "title": "Certify a moving budget",
      "body": "Retrieve the optimizer and value from Examination Problem 2 before using these controls. Here \\(b>0\\); \\(u,v\\) choose a feasible competitor \\(q=(bu,b(1-u)v)\\). Target, candidate and competitor share the input plane. First decide whether a boundary optimum must have zero objective gradient.",
      "question": "For each positive budget regime, verify the candidate and construct nonnegative coefficients mu, nu and rho with grad f + mu(1,1) - nu(1,0) - rho(0,1)=0. Which bounds are active? Can an active bound have coefficient zero?",
      "checkpoint": {
        "hint": "Use \\(\\mu(x+y-b)-\\nu x-\\rho y\\) with nonnegative coefficients. Check stationarity and the products \\(\\mu(x+y-b),\\nu x,\\rho y\\), including both transition budgets.",
        "explanation": "For \\(0<b\\le3/2\\), the candidate is \\(p=(0,b)\\), with\n\\[\n\\begin{gathered}\n\\mu=8-4b,\\quad \\nu=6-4b,\\\\\n\\rho=0.\n\\end{gathered}\n\\]\nFor \\(3/2\\le b\\le3\\), use\n\\[\n\\begin{gathered}\np_x=2b/3-1,\\\\\np_y=1+b/3,\\\\\n\\mu=4(3-b)/3,\\\\\n\\nu=\\rho=0.\n\\end{gathered}\n\\]\nFor \\(b\\ge3\\), \\(p=(1,2)\\) and all coefficients vanish. Substitution verifies stationarity, nonnegativity and complementary products in every regime.\n\nAt \\(b=3/2\\), \\(x=0\\) is active but \\(\\nu=0\\); at \\(b=3\\), the budget is active but \\(\\mu=0\\). Positive coefficient implies activity by the zero product; the converse fails.\n\nFor every competitor in the same triangle, these identities give a nonnegative gradient product. The exact objective gap adds\n\\[\n(q_x-p_x)^2+2(q_y-p_y)^2,\n\\]\nproving a unique global minimum. A nonzero boundary gradient is compatible with an optimum. The proof below also compares different budgets.",
        "criteria": [
          "Verifies every regime, including both transition budgets.",
          "Checks coefficient signs, stationarity and all complementary products.",
          "Distinguishes an active bound from a strictly positive coefficient.",
          "Uses an all-competitor identity to establish the unique minimum."
        ]
      },
      "scene": "scene \"A budget triangle and a verified global certificate\";\ndomain -0.4 4.4; range -0.4 4.4;\nparam b=2 from 0.25 to 4;\nparam u=0.3 from 0 to 1; param v=0.4 from 0 to 1;\nlet px=(abs(2*b/3-1)-abs(2*b/3-2)+1)/2; let py=b-px-(b-3+abs(b-3))/2;\nlet mu=4*(2-py); let nu=(mu-2+abs(mu-2))/2;\nlet qx=b*u; let qy=b*(1-u)*v;\nlet dx=qx-px; let dy=qy-py;\npolygon triangle=(0,0),(b,0),(0,b) color amber;\npoint target=(1,2) color blue;\npoint candidate=(px,py) color rose;\npoint competitor=(qx,qy) color teal;\nsegment displacement from (px,py) to (qx,qy) color teal;\nmeasure candidate_value=(px-1)^2+2*(py-2)^2;\nmeasure budget_slack=b-px-py;\nmeasure budget_multiplier=mu; measure x_multiplier=nu;\nmeasure stationarity_residual_norm=sqrt((2*(px-1)+mu-nu)^2+(4*(py-2)+mu)^2);\nmeasure gradient_product=2*(px-1)*dx+4*(py-2)*dy;\nmeasure quadratic_remainder=dx^2+2*dy^2;\nmeasure objective_gap=(qx-1)^2+2*(qy-2)^2-((px-1)^2+2*(py-2)^2);",
      "focus": [
        "polygon-triangle",
        "point-target",
        "point-candidate",
        "point-competitor"
      ]
    },
    {
      "id": "differentiate-two-maps",
      "title": "Compare two parameter derivatives",
      "body": "The horizontal coordinate is budget, not time. The three dimensionless outputs are optimal \\(x\\), optimal \\(y\\), and optimal value. Point markers and secants belong to the value curve at \\(b=3/2\\). Keep \\(h>0\\): the right and left quotient denominators are \\(h\\) and \\(-h\\). Predict whether uniqueness makes both maps differentiable.",
      "question": "At budget 3/2, derive the one-sided optimizer and value quotients as h tends to zero. Which derivatives agree? What do the quadratic residual ratios say about second derivatives? Repeat the reasoning at budget 3.",
      "checkpoint": {
        "hint": "Use the different formulas on the two sides of \\(3/2\\). A quadratic residual divided by \\(h^2\\) is a Taylor coefficient, half the second derivative.",
        "explanation": "At \\(t=3/2\\), the optimizer's left and right quotients are\n\\[\n(0,1)\\quad\\hbox{and}\\quad(2/3,1/3).\n\\]\nThey disagree. The optimizer is continuous and unique for each budget, but its parameter derivative does not exist at the switch.\n\nWriting the left and right value quotients as \\(Q_-(h)\\) and \\(Q_+(h)\\), direct substitution gives\n\\[\n\\begin{gathered}\nQ_-(h)=-2-2h,\\\\\nQ_+(h)=-2+\\frac23h.\n\\end{gathered}\n\\]\nBoth tend to \\(-2\\). The quadratic residual ratios after removing that linear term are \\(2\\) and \\(2/3\\); the one-sided second derivatives are \\(4\\) and \\(4/3\\).\n\nAt \\(t=3\\), the optimizer quotients are \\((2/3,1/3)\\) and \\((0,0)\\), while the value quotients are \\(-2h/3\\) and \\(0\\). Thus \\(V'(3)=0\\). The one-sided second derivatives are \\(4/3\\) and \\(0\\). The full value function is \\(C^1\\) on \\(b>0\\), but is not twice differentiable at both switches. Smoothness of the objective and uniqueness did not ensure a differentiable optimizer map.",
        "criteria": [
          "Keeps quotient signs and the two maps separate.",
          "Derives exact value quotients before taking limits.",
          "Shows optimizer derivatives disagree at both switches.",
          "Distinguishes a quadratic Taylor coefficient from a second derivative."
        ]
      },
      "scene": "scene \"A smooth value join and a corner in the optimizer\";\ndomain 1 2; range -0.2 3;\nparam h=0.1 from 0.01 to 0.4;\nfn optimal_x(x)=(abs(2*x/3-1)-abs(2*x/3-2)+1)/2;\nfn optimal_y(x)=x-optimal_x(x)-(x-3+abs(x-3))/2;\nfn value(x)=(optimal_x(x)-1)^2+2*(optimal_y(x)-2)^2;\nplot optimal_x color amber; plot optimal_y color blue; plot value color teal;\npoint left=(1.5-h,value(1.5-h)) color rose;\npoint transition=(1.5,1.5) color teal;\npoint right=(1.5+h,value(1.5+h)) color rose;\nsegment left_secant from (1.5-h,value(1.5-h)) to (1.5,1.5) color rose;\nsegment right_secant from (1.5,1.5) to (1.5+h,value(1.5+h)) color rose;\nmeasure left_x_rate=(optimal_x(1.5-h)-optimal_x(1.5))/(-h);\nmeasure right_x_rate=(optimal_x(1.5+h)-optimal_x(1.5))/h;\nmeasure left_y_rate=(optimal_y(1.5-h)-optimal_y(1.5))/(-h);\nmeasure right_y_rate=(optimal_y(1.5+h)-optimal_y(1.5))/h;\nmeasure left_value_rate=(value(1.5-h)-1.5)/(-h);\nmeasure right_value_rate=(value(1.5+h)-1.5)/h;\nmeasure left_quadratic_ratio=(value(1.5-h)-1.5-2*h)/h^2;\nmeasure right_quadratic_ratio=(value(1.5+h)-1.5+2*h)/h^2;",
      "focus": [
        "curve-optimal_x",
        "curve-optimal_y",
        "curve-value"
      ]
    },
    {
      "id": "zero-budget",
      "title": "Separate the exact zero budget",
      "body": "Hold the budget at exactly zero. The feasible set is the singleton \\(\\{(0,0)\\}\\). The horizontal graph coordinate \\(c\\) is a new positive budget. Change the trial coefficient while keeping the zero-budget problem fixed. Compare its affine lower bound with the actual value at \\(c\\). The quotient uses \\(c>0\\), so no division by zero occurs.",
      "question": "At zero budget, find every nonnegative coefficient triple satisfying stationarity and complementary products. Does every valid mu equal minus the right derivative of the value? Which step of the positive-budget sensitivity argument is unavailable?",
      "checkpoint": {
        "hint": "At the origin, stationarity requires \\(-2+\\mu-\\nu=0\\) and \\(-8+\\mu-\\rho=0\\). All bounds are active. Compare this coefficient family with the right-hand value formula.",
        "explanation": "Every\n\\[\n\\begin{gathered}\n\\mu\\ge8,\\quad \\nu=\\mu-2,\\\\\n\\rho=\\mu-8\n\\end{gathered}\n\\]\nis nonnegative and satisfies stationarity and complementary products. Each gives\n\\[\nV(c)\\ge9-\\mu c\\qquad(c\\ge0).\n\\]\nThere is one feasible point and one optimizer at budget zero.\n\nFor small positive \\(c\\),\n\\[\nV(c)=9-8c+2c^2.\n\\]\nThe right quotient \\(-8+2c\\) tends to \\(V'(0+)=-8\\). Only \\(\\mu=8\\) equals minus that one-sided derivative; \\(\\mu=9\\) remains a valid, weaker certificate.\n\nThe interior derivative argument uses positive and negative budget changes. At zero, negative budgets give an empty feasible set, so the finite two-sided comparison is unavailable. A valid coefficient gives a supporting bound; equality with a value derivative requires the relevant differentiability and parameter-domain argument.",
        "criteria": [
          "Derives the full coefficient family and checks every sign.",
          "Separates the fixed zero budget from the positive comparison budget.",
          "Computes the right quotient from the exact value formula.",
          "Explains why the interior two-sided argument cannot be used at zero."
        ]
      },
      "scene": "scene \"Many zero-budget certificates and one right-hand value slope\";\ndomain 0 1.1; range -5 10;\nparam excess=0 from 0 to 4; param c=0.25 from 0.01 to 1;\nlet mu=8+excess; let nu=mu-2; let rho=mu-8;\nfn value(x)=1+2*(x-2)^2;\nfn bound(x)=9-mu*x;\nplot value color teal; plot bound color amber;\npoint base=(0,9) color rose;\npoint actual=(c,value(c)) color teal;\npoint certificate=(c,bound(c)) color amber;\nsegment gap from (c,bound(c)) to (c,value(c)) color rose;\nmeasure budget_multiplier=mu; measure x_multiplier=nu; measure y_multiplier=rho;\nmeasure stationarity_residual_norm=sqrt((-2+mu-nu)^2+(-8+mu-rho)^2);\nmeasure lower_bound=bound(c); measure actual_value=value(c);\nmeasure certificate_slack=value(c)-bound(c);\nmeasure right_value_quotient=(value(c)-9)/c;\nmeasure trial_negative_multiplier=-mu;",
      "focus": [
        "curve-value",
        "curve-bound",
        "point-base",
        "point-actual",
        "point-certificate"
      ]
    }
  ]
}
```

### Derive a global certificate before interpreting its coefficient

Let \(p=p(b)\) be feasible and suppose nonnegative coefficients satisfy
\[
\begin{gathered}
2(p_x-1)+\mu-\nu=0,\\
4(p_y-2)+\mu-\rho=0,\\
\mu(p_x+p_y-b)=0,\\
\nu p_x=\rho p_y=0.
\end{gathered}
\]
The zero-product conditions say a coefficient can be nonzero only at an active bound. We construct and verify these coefficients directly in this family.

For any point \(z\), the exact objective difference is
\[
\begin{gathered}
f(z)-f(p)\\
=\nabla f(p)\cdot(z-p)\\
+(z_x-p_x)^2+2(z_y-p_y)^2.
\end{gathered}
\]
Stationarity and the zero products rewrite the linear term as
\[
\begin{gathered}
-\mu(z_x+z_y-b)\\
+\nu z_x+\rho z_y.
\end{gathered}
\]
If \(z\in D_c\), with \(c\ge0\), signs and feasibility give
\[
f(z)\ge V(b)-\mu(c-b).
\]
Taking the minimum over \(D_c\) proves
\[
\boxed{V(c)\ge V(b)-\mu(c-b).}
\]
At \(c=b\), this proves global optimality. The positive quadratic remainder also proves uniqueness. The coefficient certifies this all-competitor bound.

For \(b>0\), the explicit value formulas and both join checks establish that \(V\) is \(C^1\). In the boxed inequality put \(c=b+s\). Positive \(s\) gives a quotient at least \(-\mu\); negative \(s\), small enough that \(b+s>0\), gives a quotient at most \(-\mu\). Differentiability forces
\[
V'(b)=-\mu.
\]
Additional budget cannot increase the minimum cost. This derivative is a local rate; a finite increase is governed by the full value curve, while the certificate supplies a lower bound.

At zero, only positive-parameter comparisons remain finite. They yield \(V'(0+)\ge-\mu\), consistent with every \(\mu\ge8\), without forcing equality for every valid coefficient. Neither uniqueness of the optimizer nor smoothness of the objective supplies the missing side.

### A multiplier's number depends on the parameterized expression

For fixed \(k>0\), replace the resource expression by \(k(x+y-b)\le0\). The same \(b\)-problem has the same optimizer and value; its resource coefficient becomes \(\widetilde\mu=\mu/k\). The sensitivity product is invariant:
\[
\begin{gathered}
\widetilde\mu\,\partial_b[k(x+y-b)]\\
=-\mu.
\end{gathered}
\]
This retrieves the [representation lesson](extrema-constraints.md#a-local-criterion-for-a-safe-rewriting). A multiplier's number needs its expression, sign convention and parameter units. If the independent parameter is changed to \(\beta=kb\), the value is \(\widehat V(\beta)=V(\beta/k)\), with derivative \(V'(\beta/k)/k\). Rewriting the constraint and changing the parameter are different operations.

Compare the supporting-bound and differentiable-value interpretations with Boyd and Vandenberghe, [Convex Optimization](https://www.seas.ucla.edu/~vandenbe/cvxbook/bv_cvxbook.pdf), Sections 5.6.2–5.6.3, printed pages 250–252. The explicit candidates, coefficient families and equality cases here establish this investigation directly.

### Unary notebook: compare the two sides before differentiating the answer

Every function below takes one input, the budget. Use the two value polynomials and optimizer branches only on their respective sides of \(t=3/2\), with \(0<h\le0.4\). Predict all eleven outputs. The first checks the value join; the next two differentiate the polynomials; the next six are actual one-sided quotients; the final two remove the linear term and divide by \(h^2\).

```notebook
param h=0.1 from 0.01 to 0.4;
let t=1.5;
fn left(x)=1+2*(x-2)^2;
fn right(x)=2*(x-3)^2/3;
fn left_x(x)=0;
fn right_x(x)=2*x/3-1;
fn left_y(x)=x;
fn right_y(x)=1+x/3;
diff left as dl;
diff right as dr;
show left(t)-right(t);
show dl(t);
show dr(t);
show (left(t-h)-left(t))/(-h);
show (right(t+h)-right(t))/h;
show (left_x(t-h)-left_x(t))/(-h);
show (right_x(t+h)-right_x(t))/h;
show (left_y(t-h)-left_y(t))/(-h);
show (right_y(t+h)-right_y(t))/h;
show (left(t-h)-left(t)+h*dl(t))/h^2;
show (right(t+h)-right(t)-h*dr(t))/h^2;
```

At \(h=1/10\), the outputs are
\[
\begin{gathered}
0,\ -2,\ -2,\ -11/5,\ -29/15,\\
0,\ 2/3,\ 1,\ 1/3,\ 2,\ 2/3.
\end{gathered}
\]
Changing \(h\) checks finite identities; the symbolic formulas establish their limits.

**Edit the task.** Move the switch to \(t=3\), replace the left value function by \(2(x-3)^2/3\) and the right one by \(0\). Set the left and right optimizer branches to \(2x/3-1\) and \(1\) for \(x\), and \(1+x/3\) and \(2\) for \(y\). Keep every quotient line unchanged. Predict before running: optimizer slopes still disagree, the common value derivative is zero, and the final residual ratios are \(2/3\) and \(0\). Explain why changing only the switch while retaining the old branches would be an invalid test of the piecewise value.

### Independent task: change the resource geometry

Attempt the full changed problem before opening its worked solution. Derive its resource normal and transition budgets again.

```exercise
{
  "id": "calc3-sensitivity-weighted-resource",
  "type": "written",
  "prompt": "Independent changed resource. Keep\n\\[\nf(x,y)=(x-1)^2+2(y-2)^2,\n\\]\nbut minimize over \\(x,y\\ge0\\) with \\(x+2y\\le b\\), for every \\(b\\ge0\\).\n\n(a) Derive all regimes, the unique optimizer and value. Justify feasibility, a global certificate and every equality case.\n\n(b) Construct nonnegative coefficients for\n\\[\n\\begin{gathered}\nL=f+\\mu(x+2y-b)\\\\\n-\\nu x-\\rho y.\n\\end{gathered}\n\\]\nCheck stationarity and complementary products at all transitions. Give an active bound whose coefficient is zero.\n\n(c) Compare one-sided optimizer and value derivatives at both positive switches. Determine where the value is \\(C^1\\) and where its second derivative fails.\n\n(d) At exactly zero budget, find all valid coefficient triples and compare them with the right value derivative. Derive the comparison-budget inequality directly.",
  "hints": [
    "On the resource edge, use \\(x=b-2y\\) with \\(0\\le y\\le b/2\\). Check where the stationary point is feasible.",
    "Stationarity uses the normal \\((1,2)\\). At zero, solve both stationarity equations with nonnegative coefficients."
  ],
  "rubric": [
    "Derives the changed thresholds and all optimizer/value formulas, with equality cases.",
    "Verifies feasibility, coefficient signs, stationarity and complementary products.",
    "Proves a comparison-budget inequality from the exact quadratic gap.",
    "Checks both optimizer/value derivative joins and the second-derivative failure.",
    "Treats the exact-zero family separately and explains the missing two-sided comparison."
  ],
  "solution": "For each \\(b\\ge0\\), the feasible set is nonempty compact and convex. The strictly convex continuous objective has a unique attained optimum. If \\(b<5\\), a minimum uses the resource edge: with slack, at least one coordinate is below its target, and a small increase in that coordinate remains feasible and decreases \\(f\\).\n\nOn the edge, \\(x=b-2y\\). Differentiating\n\\[\n(b-2y-1)^2+2(y-2)^2\n\\]\ngives \\(12y-4b-4\\), whose zero is \\(y=(b+1)/3\\). This lies in \\(0\\le y\\le b/2\\) exactly when \\(b\\ge2\\). The optimizer is therefore\n\\(p=(0,b/2)\\) for \\(0\\le b\\le2\\), \\(p=((b-2)/3,(b+1)/3)\\) for \\(2\\le b\\le5\\), and \\(p=(1,2)\\) for \\(b\\ge5\\).\nThe respective values are\n\\[\n\\begin{gathered}\n1+(b-4)^2/2,\\\\\n(5-b)^2/3,\\quad0.\n\\end{gathered}\n\\]\nBoth formulas agree at each switch.\n\nFor \\(0<b\\le2\\), use\n\\[\n\\begin{gathered}\n\\mu=4-b,\\quad \\nu=2-b,\\\\\n\\rho=0.\n\\end{gathered}\n\\]\nFor \\(2\\le b\\le5\\), use\n\\[\n\\mu=2(5-b)/3,\\quad\\nu=\\rho=0.\n\\]\nFor \\(b\\ge5\\), all coefficients vanish. Substitution in\n\\[\n\\begin{gathered}\n2(x-1)+\\mu-\\nu=0,\\\\\n4(y-2)+2\\mu-\\rho=0\n\\end{gathered}\n\\]\nchecks stationarity. Nonnegativity and complementary products hold in every regime. At \\(b=2\\), \\(x=0\\) is active but \\(\\nu=0\\); at \\(b=5\\), the resource bound is active but \\(\\mu=0\\).\n\nFor a competitor \\(z\\) at any budget \\(c\\ge0\\), the exact quadratic gap and the coefficient equations give\n\\[\n\\begin{gathered}\nf(z)-V(b)\\\\\n\\ge-\\mu(z_x+2z_y-b)\\\\\n+\\nu z_x+\\rho z_y\\\\\n\\ge-\\mu(c-b).\n\\end{gathered}\n\\]\nThe quadratic remainder removed in the first inequality is nonnegative and zero only at the candidate. At \\(c=b\\), this proves global optimality and its unique equality case. Taking the minimum at \\(c\\) proves the value bound.\n\nThe optimizer slopes in the three open regimes are\n\\[\n(0,1/2),\\quad(1/3,1/3),\\quad(0,0).\n\\]\nThey disagree at \\(2\\) and \\(5\\). The value derivatives are \\(b-4\\), \\(2(b-5)/3\\), and \\(0\\), joining at \\(-2\\) and \\(0\\). Thus the value is \\(C^1\\) on \\(b>0\\) with \\(V'=-\\mu\\). The one-sided second derivatives are \\(1,2/3,0\\), so the second derivative fails at both switches.\n\nAt zero, the singleton optimum is the origin with value \\(9\\). Every\n\\[\n\\begin{gathered}\n\\mu\\ge4,\\quad\\nu=\\mu-2,\\\\\n\\rho=2\\mu-8\n\\end{gathered}\n\\]\nis a valid certificate. However,\n\\[\n\\begin{gathered}\nV(c)=9-4c+c^2/2\\\\\n(0\\le c\\le2)\n\\end{gathered}\n\\]\ngives \\(V'(0+)=-4\\). Larger valid coefficients give weaker lower bounds. Negative budgets are infeasible, so the two-sided comparison cannot force every coefficient to equal minus that right derivative.",
  "transfer": "For fixed \\(k>0\\), rewrite the resource expression as \\(k(x+2y-b)\\le0\\). Derive the new budget coefficient and its product with the constraint's \\(b\\)-derivative.\n\nThen introduce \\(\\beta=kb\\): distinguish a derivative with respect to this new parameter from rewriting the same \\(b\\)-problem.",
  "transferSolution": "For the same \\(b\\)-problem, the coefficient becomes \\(\\widetilde\\mu=\\mu/k\\). The constraint's \\(b\\)-derivative is \\(-k\\), so\n\\[\n\\begin{gathered}\n\\widetilde\\mu\\,\\partial_b[k(x+2y-b)]\\\\\n=-\\mu.\n\\end{gathered}\n\\]\nFor \\(b>0\\), this is \\(V'(b)\\); neither optimizer nor value changed.\n\nWith independent parameter \\(\\beta=kb\\), the value is \\(\\widehat V(\\beta)=V(\\beta/k)\\). For \\(\\beta>0\\), the chain rule gives\n\\[\n\\widehat V'(\\beta)=-\\mu(\\beta/k)/k.\n\\]\nA derivative is per unit of its specified parameter. The one-sided zero-budget slope scales likewise; the full valid coefficient family remains distinct from a unique derivative."
}
```

**Delayed retrieval.** Return later without the models. Give an active bound with zero coefficient, prove the value bound from the sign and product conditions, and derive the exact-zero coefficient family for the changed resource. Then explain which map failed to have a derivative and why this did not contradict differentiability of the optimal value.

## Revision conference

For a missed task, record the first unsupported step and revise the proof. Reattempt its changed case without viewing the worked solution. The saved written work remains self or instructor reviewed.
