
# First-Order Equations and Characteristics

A first-order equation often becomes an ordinary differential equation when followed along a suitable curve. The curve is a characteristic. This change of viewpoint explains transport, determines which boundary data can be prescribed and identifies where an apparently successful formula can cease to define a classical solution. The method is geometric, but every successful construction depends on an invertible coordinate map.

The preparation is the chain rule, ordinary differential equation existence and uniqueness, and the inverse function theorem. The [ODE existence chapter](../ode-first-course/existence-uniqueness-picard.md) supplies local flow theory. The [Real Analysis inverse-function chapter](../proof-safe-real-analysis/inverse-implicit-function-theorems.md) supplies the coordinate theorem. We prove the PDE construction from these inputs rather than treating the phrase “integrate along curves” as an existence proof.

Our principal linear equation is

\[
 a(x,y)u_x+b(x,y)u_y+c(x,y)u=f(x,y).
\]

Coefficients are real and C1 on an open subset of the plane unless a stronger or weaker hypothesis is stated. The unknown and data may be real or complex. A classical solution is C1 and satisfies the equation pointwise. Later weak transport and conservation-law questions allow substantially less regularity; they require their own solution concept.

## 1. The chain-rule reduction

Set A=(a,b). A characteristic curve X(s)=(x(s),y(s)) solves X'=A(X). For a C1 function u, the chain rule gives

\[
 \frac{d}{ds}u(X(s))=a(X(s))u_x(X(s))+b(X(s))u_y(X(s)).
\]

Thus U(s)=u(X(s)) must solve U'+c(X(s))U=f(X(s)). Its integrating factor is exp(C(s)), where C(s)=∫_0^s c(X(r))dr. Given U(0)=g, the unique value along this curve is

\[
 U(s)=e^{-C(s)}\left[g+\int_0^s e^{C(r)}f(X(r))\,dr\right].
\]

Oriented integrals make this formula valid for negative as well as positive s while the curve remains in the coefficient domain. The exponential never vanishes. Positive real damping c≥0 decreases the magnitude of a homogeneous solution along forward characteristics, but a source can increase it. If c is complex, the homogeneous magnitude is controlled by its real part.

The formula is necessary for every classical solution. Sufficiency needs a second step: these characteristic values must assemble into a single C1 function on an open planar neighborhood. If two parameter pairs represent the same point with different values, there is no function. If the coordinate map is singular, smoothness cannot simply be inferred from a smooth expression in the parameters.

## 2. Noncharacteristic data and local construction

Prescribe data u(γ(r))=g(r) on a C1 curve γ(r)=(α(r),β(r)), with γ'(r0) nonzero. Starting at γ(r), let X(s,r) be the local solution of X_s=A(X), X(0,r)=γ(r). A C1 vector field has a C1 local flow, so X is C1 jointly in s,r. At s=0 its two coordinate tangent vectors are A(γ(r)) and γ'(r).

**Definition 2.1.** The initial curve is noncharacteristic at r0 when

\[
 J_0(r_0)=\det\bigl(A(\gamma(r_0)),\gamma'(r_0)\bigr)\ne0.
\]

The vector field then crosses the initial curve rather than following its tangent. The condition includes A(γ(r0))≠0. At a stationary point of the vector field the characteristic construction cannot supply two independent coordinate directions.

**Theorem 2.2: local linear Cauchy problem.** Suppose a,b,c,f are C1 near γ(r0), the curve γ and data g are C1 near r0, and J0(r0)≠0. There is a neighborhood of γ(r0) on which a unique local C1 solution takes the prescribed data on the corresponding curve segment.

By the inverse function theorem, after shrinking a parameter rectangle about (0,r0), the map (s,r)↦X(s,r) is a C1 diffeomorphism onto an open neighborhood. The integrating-factor formula with initial value g(r) gives a C1 function U(s,r), because the coefficients, flow and parameter-dependent integrals are C1. Define u(X(s,r))=U(s,r). This is well-defined and C1 by the inverse coordinate map. Differentiating in s gives the PDE by the chain rule, and s=0 gives the data. Every other C1 solution on this neighborhood has the same characteristic ODE and initial values, hence agrees with u there. Uniqueness is local among solutions defined on a common sufficiently small coordinate neighborhood; this is not a claim that arbitrary distant boundary data are compatible.

If the original curve is C2 the usual regularity assumptions are particularly easy to check, but C1 suffices for this argument. One must not silently prescribe arbitrary data at a cusp or at a point where the tangent vanishes and then quote the theorem.

**Worked example 2.3: transverse straight data.** Solve u_x+2u_y=0 with u(0,r)=g(r). The characteristic is X(s,r)=(s,r+2s). Its Jacobian determinant is one. Inverse coordinates are s=x and r=y−2x, giving u(x,y)=g(y−2x). Direct differentiation gives u_x=−2g' and u_y=g', and u(0,y)=g(y). Thus C1 data give a global C1 solution here, because the coordinate map is globally invertible.

## 3. Characteristic data: compatibility and freedom

If the initial curve follows the vector field, its data cannot usually be chosen freely. Suppose γ'(r)=λ(r)A(γ(r)). Any classical solution must satisfy

\[
 g'(r)=\lambda(r)\bigl(f(\gamma(r))-c(\gamma(r))g(r)\bigr).
\]

This follows from differentiating u∘γ. It is a necessary compatibility equation on the data. Even when it holds, it determines only the solution along that characteristic, leaving transverse behavior free.

**Worked example 2.4: a characteristic line.** For u_x+2u_y=0 prescribe data on γ(r)=(r,2r). The curve is itself a characteristic. The compatibility condition is g'=0. Nonconstant data are impossible. If g is the constant K, every function u(x,y)=F(y−2x) with F(0)=K satisfies the data; there are infinitely many smooth choices. This exhibits both possible failures of a characteristic Cauchy problem: inconsistency and lack of uniqueness.

At a point where A=0 the equation reduces to cu=f. For example xu_x+yu_y=1 has no C1 solution near the origin because evaluation at zero gives 0=1. On the punctured plane it has solutions involving log radius. Removing a point changes the domain and can remove an obstruction; it does not create a solution on the original domain.

Characteristic data therefore have a different role from arbitrary boundary data on a transverse arc. The differential equation constrains how values can change along a characteristic, whereas a transverse curve supplies independent starting values on nearby characteristics.

## 4. Flow Jacobians and divergence

For a C1 vector field, differentiate the flow equation with respect to its initial point z. Its derivative matrix M(s,z)=D_zΦ_s(z) satisfies

\[
 M'=DA(\Phi_s(z))M,\qquad M(0,z)=I.
\]

The determinant satisfies

\[
 \det M(s,z)=\exp\left(\int_0^s\operatorname{div}A(\Phi_r(z))\,dr\right).
\]

To prove this, differentiate the determinant multilinearly in its columns. For an arbitrary square matrix B and columns of M, the sum of determinants obtained by replacing one column by BM's corresponding column equals tr(B)det M; it follows first for elementary matrices and then by linearity. Consequently d(det M)/ds=tr(DA)det M. The scalar initial-value problem with value one has the displayed exponential solution. No division by an initially unknown determinant was used.

The same computation for the two columns X_s and X_r gives J_s=(div A)(X)J and therefore J(s,r)=J0(r)exp(∫_0^s div A(X(q,r))dq). A nonzero local Jacobian cannot become zero at a finite regular point of a linear transport flow. Nevertheless global coordinate injectivity can fail: a closed characteristic can meet the initial curve repeatedly. Nonvanishing determinant ensures a local inverse, not a globally one-to-one map.

A divergence-free vector field preserves local area by the change-of-variables theorem. The corresponding scalar equation A·∇u=0 transports values unchanged. The conservative equation div(Aρ)=0 instead gives A·∇ρ+(div A)ρ=0, so density is multiplied by the reciprocal Jacobian. These two equations coincide only when div A=0.

**Worked example 2.5: expanding flow.** For A(x,y)=(x,y), the flow is Φ_s(z)=e^s z and its determinant is e^2s, agreeing with div A=2. Along a ray the scalar equation A·∇u=0 keeps u constant. The density equation div(Aρ)=0 gives ρ(e^sz)=e^−2sρ(z). The product of density and area remains unchanged. An annular sector is an appropriate local domain; the origin is a stationary point and needs separate analysis.

## 5. Sources, damping and characteristic boundary entry

Consider u_x+u_y+2u=x with data u(0,r)=g(r). The coordinates are x=s,y=r+s and U'+2U=s. Hence

\[
 u(x,y)=e^{-2x}g(y-x)+\frac{x}{2}-\frac14+\frac14e^{-2x}.
\]

This is a fourth worked model. Substitution checks both the source and the damping. The particular solution is not x/2 alone: its derivative contributes a residual one half, canceled by the constant correction. An explicit formula is useful partly because it exposes these easily missed lower-order terms.

For time-dependent transport u_t+v(t,x)·∇u+c u=f, one may treat (t,x) as the characteristic space and use the vector field (1,v). Initial data on t=0 are automatically transverse because the time component is one. For a spatial domain with a boundary, forward evolution also needs data where v points into the domain. Outflow values are determined by the interior evolution and should not generally be prescribed independently.

For u_t+v u_x=0 on x>0 with constant v>0, the backward characteristic from (t,x) reaches t=0 if x≥vt and reaches x=0 at time t−x/v if x<vt. Thus initial data g and inflow data h give g(x−vt) in the first region and h(t−x/v) in the second. Continuity across x=vt requires g(0)=h(0). A C1 solution also requires −vg'(0)=h'(0). Compatibility becomes stronger as more derivatives are demanded. If v<0, x=0 is outflow; initial data already determine its trace.

## 6. Quasilinear characteristics

For a quasilinear equation

\[
 a(x,y,u)u_x+b(x,y,u)u_y=f(x,y,u),
\]

the characteristic system lives in three dimensions:

\[
 x_s=a(x,y,U),\quad y_s=b(x,y,U),\quad U_s=f(x,y,U).
\]

Start from (γ(r),g(r)). If its projection (s,r)↦(x,y) has nonzero initial Jacobian det((a,b)(γ(r),g(r)),γ'(r)), the inverse function theorem gives a local graph U=u(x,y). The same chain-rule proof verifies the PDE. Conversely every local C1 solution lifts its projected characteristics to this three-dimensional system, so ODE uniqueness and the inverse coordinates yield local uniqueness.

The distinction from prescribed linear transport is crucial. The projected velocity now depends on the transported value. Distinct projected curves can collide while the three-dimensional ODE curves remain distinct because their U coordinates differ. The lifted flow remains regular, but the projection can lose invertibility. This is how classical gradients can become unbounded in a scalar conservation law.

For u_t+u u_x=0 with u(0,ξ)=g(ξ), the characteristic formulas are u=g(ξ), x=ξ+t g(ξ). Their projection derivative is 1+t g'(ξ). As long as it stays positive and the map is globally onto, inversion produces the classical solution. Differentiation gives u_x=g'(ξ)/(1+t g'(ξ)). A negative initial slope can therefore create a finite-time gradient singularity without any blow-up of u itself. The next chapter studies the resulting conservation-law interpretation rather than continuing a multivalued classical formula.

## 7. Closed trajectories and global compatibility

Let A(x,y)=(−y,x) on an annulus not containing the origin. In polar coordinates A·∇=∂θ. The equation A·∇u=f becomes u_θ=f(r,θ). A single-valued periodic solution exists on each radius only if the angular mean of f is zero. If that condition holds, integrate f in θ and add an arbitrary function of r. Local characteristic solvability does not detect this full-turn compatibility condition.

For u_θ+c u=f with constant real c≠0, variation of constants gives U(2π)=e^−2πc[U(0)+∫_0^{2π}e^{cs}f(s)ds]. Periodicity uniquely determines U(0), since 1−e^−2πc is nonzero. When c=0 that denominator vanishes and the zero-mean condition returns. This is the first-order analogue of Fourier resonance: global trajectory geometry can change both existence and uniqueness.

A solution built in overlapping characteristic coordinate charts agrees on overlaps when the transported starting data agree. Continuing around a loop may impose an additional condition. A careful global argument therefore records the domain, the entry surface, the time for which the flow exists and the possibility of repeated intersections. A local existence theorem should not be advertised as a global boundary-value theorem.

## 8. Stability and what the flow theorem imports

The characteristic representation also gives a stability statement. Suppose two solutions have data g1,g2 and sources f1,f2, with the same prescribed vector field and coefficient c. Along a forward characteristic of length s≤S, assume Re c≥−K. The difference W then satisfies W'+cW=f1−f2. Taking absolute values in the integrating-factor formula yields

\[
 |W(s)|\le e^{Ks}|g_1-g_2|+
 \int_0^s e^{K(s-r)}|f_1-f_2|(X(r))\,dr.
\]

If the data difference is at most δ and the source difference at most ε throughout the corresponding characteristic tube, the solution difference is bounded by e^{KS}(δ+Sε). This estimate concerns prescribed coefficients and a common tube. Perturbing the vector field changes the trajectories and requires an additional flow-dependence estimate; it is not covered by simply changing the source symbol. When c is real and nonnegative, one may take K=0 and obtain the sharper δ+Sε bound.

The C1 dependence of the flow used earlier is a genuine ODE theorem. Here is its mechanism. On a compact tube where DA is bounded, two nearby trajectories remain close by the integral equation and Gronwall's estimate. For a difference quotient in an initial direction v, subtract their integral equations and use

\[
 A(z+h)-A(z)=\int_0^1 DA(z+rh)h\,dr.
\]

The quotient solves an integral equation whose matrix coefficient tends uniformly to DA evaluated along the original trajectory. Uniform continuity of DA on the compact tube and the same Gronwall estimate show that the quotients converge uniformly to the solution of M'=DA(Φ)M, M(0)=I. The limit depends continuously on the initial point by the integral equation. This proves the needed differentiability and identifies its derivative without presupposing the Jacobian formula.

One first restricts time and initial points so that all trajectories remain in such a tube; local ODE existence provides that restriction. The argument cannot be extended beyond the coefficient domain or beyond finite-time escape merely by writing the variational equation. For instance x'=x² has solution x(s)=x0/(1−sx0), which escapes at s=1/x0 when x0>0. A characteristic formula using this flow is valid only before that time. Local invertibility, bounded-time stability and global existence are three separate questions, each with its own hypothesis.

## 9. A sufficient global flow criterion

Local characteristic existence does not guarantee existence for all finite times. There is, however, a useful criterion that can be proved from the ODE integral equation. Suppose a time-dependent velocity v(t,x) is continuously differentiable in x, continuous in t, locally Lipschitz in x uniformly on bounded time-space sets, and satisfies |v(t,x)|≤A+B|x| on a fixed finite time interval, with nonnegative constants A,B. A trajectory starting at ξ then obeys

\[
 |X(t)|\le|\xi|+At+B\int_0^t|X(s)|\,ds
 \le(|\xi|+At)e^{Bt}.
\]

The last inequality follows from the elementary Gronwall estimate. On a finite interval the trajectory stays in a bounded spatial region, and the coefficients remain defined and regular there. The local existence theorem can consequently continue the trajectory to the end of that interval. More explicitly, bounded velocity on the resulting compact tube makes X uniformly Lipschitz near a supposed finite terminal time, so it has a limit there; local existence from that limit extends it and contradicts maximality. The same argument backward in time gives a two-sided finite-time flow whenever the coefficient domain includes those times.

Uniqueness makes each time map injective: two trajectories meeting at time t would solve the same backward initial-value problem. Backward existence makes it onto, since every terminal point can be followed to an initial point. Thus the flow gives a global change of spatial coordinates over that finite time interval. Its derivative determinant is nonzero by the Jacobian formula. This supplies the extra global information that the local inverse function theorem alone did not provide.

For scalar transport u_t+v·∇u=0, a C1 datum then defines u(t,X(t,ξ))=g(ξ) throughout the interval. Its values are precisely transported data values, so its supremum magnitude is preserved when the flow is onto. With damping and sources, the earlier integrating-factor formula applies on the same global trajectories and yields finite-time stability estimates whenever the coefficient and source bounds are available.

The linear-growth assumption is sufficient, not necessary. The velocity v=x² fails it and has finite-time escape for positive initial points, as already noted. A bounded velocity automatically satisfies it, and a velocity affine in x satisfies it on every bounded time interval when its matrix and offset are bounded. On a proper spatial subdomain one must additionally account for trajectories reaching its boundary: a global growth bound does not authorize continuing a coefficient field outside the domain where it was supplied. Entry and exit data remain part of the transport problem.

## Exercises

### PDE-CHAR-E001 — Constant transport
Solve 3u_x−u_y=0 with u(0,y)=g(y), for C1 data g.
<details><summary>Hint 1</summary>Parametrize a characteristic by its x coordinate.</details>
<details><summary>Hint 2</summary>The quantity y+x/3 is constant along the characteristic.</details>
<details><summary>Full solution</summary>Set u(x,y)=g(y+x/3). Then u_x=g'/3 and u_y=g', so 3u_x−u_y=0 and the initial condition holds. The characteristic map (s,r)=(x,y+x/3) is globally invertible. Uniqueness follows from constancy along each characteristic meeting x=0.</details>

### PDE-CHAR-E002 — A determinant
For A=(2,1) and γ(r)=(r,r²), find where the data curve is noncharacteristic.
<details><summary>Hint 1</summary>The tangent is (1,2r).</details>
<details><summary>Hint 2</summary>Compute det((2,1),(1,2r)).</details>
<details><summary>Full solution</summary>The determinant is 4r−1. The curve is noncharacteristic at every r except r=1/4. At that point the theorem does not apply; it does not assert either impossibility or existence without further compatibility analysis.</details>

### PDE-CHAR-E003 — Characteristic inconsistency
For u_x+u_y=0, can u(r,r)=r hold on an interval?
<details><summary>Hint 1</summary>The prescribed line follows the vector field.</details>
<details><summary>Hint 2</summary>Differentiate u(r,r) along that line.</details>
<details><summary>Full solution</summary>The derivative would be u_x+u_y=0 by the equation, but the derivative of r is one. This contradiction rules out a C1 solution near that curve segment. The data violate the necessary characteristic compatibility equation.</details>

### PDE-CHAR-E004 — Damped values
Solve u_t+2u_x+3u=0 with u(0,x)=g(x).
<details><summary>Hint 1</summary>The spatial characteristic is x=ξ+2t.</details>
<details><summary>Hint 2</summary>Along it U'+3U=0.</details>
<details><summary>Full solution</summary>U(t)=e^−3t g(ξ), hence u(t,x)=e^−3t g(x−2t). Differentiation gives u_t=−3u−2e^−3t g' and u_x=e^−3t g', proving the PDE. The exponential is damping forward in time, with no change to characteristic location.</details>

### PDE-CHAR-E005 — A stationary obstruction
Explain why xu_x−yu_y=1 has no C1 solution on any open neighborhood of the origin.
<details><summary>Hint 1</summary>Evaluate the equation where its vector field vanishes.</details>
<details><summary>Hint 2</summary>No choice of finite first derivatives changes the zero coefficients.</details>
<details><summary>Full solution</summary>At (0,0) the left side is zero for every C1 function, while the right side is one. This pointwise contradiction proves impossibility. Formulas on regions excluding the origin do not solve the stated neighborhood problem.</details>

### PDE-CHAR-E006 — Area change
Find the flow and Jacobian for A=(2x,−y).
<details><summary>Hint 1</summary>The component ODEs separate.</details>
<details><summary>Hint 2</summary>The divergence is one.</details>
<details><summary>Full solution</summary>Φ_s(x0,y0)=(e^2s x0,e^−s y0). Its derivative matrix is diagonal with these two factors, so its determinant is e^s. This agrees with exp(∫_0^s1dr). A conservative transported density therefore acquires factor e^−s along the flow.</details>

### PDE-CHAR-E007 — Inflow data
For u_t+3u_x=0 on t>0,x>0, identify which data determine u(2,1).
<details><summary>Hint 1</summary>Trace x(s)=1+3(s−2) backward.</details>
<details><summary>Hint 2</summary>Find when it reaches x=0.</details>
<details><summary>Full solution</summary>The characteristic reaches x=0 at s=2−1/3=5/3, before reaching t=0. Thus the value is the inflow datum h(5/3), not an initial value at a negative spatial point. Initial data on the half-line alone cannot determine this point.</details>

### PDE-CHAR-E008 — Corner compatibility
For the same equation with C1 initial g and inflow h, derive the two corner conditions.
<details><summary>Hint 1</summary>Match the two formulas on x=3t.</details>
<details><summary>Hint 2</summary>Match their time derivatives there as well.</details>
<details><summary>Full solution</summary>The formulas g(x−3t) and h(t−x/3) have equal values on the dividing characteristic precisely when g(0)=h(0). Their time derivatives agree when −3g'(0)=h'(0). Under this condition their spatial derivatives also agree, since they are g'(0) and −h'(0)/3.</details>

### PDE-CHAR-E009 — Smooth Burgers profile
For initial g(ξ)=ξ, invert the characteristic map for t≥0 and find u_x.
<details><summary>Hint 1</summary>The projected map is x=(1+t)ξ.</details>
<details><summary>Hint 2</summary>Its derivative never vanishes forward in time.</details>
<details><summary>Full solution</summary>The inverse is ξ=x/(1+t), giving u(t,x)=x/(1+t) and u_x=1/(1+t). Direct substitution yields u_t+u u_x=−x/(1+t)²+x/(1+t)²=0. The example is globally C1 for t≥0, although the data and solution are spatially unbounded.</details>

### PDE-CHAR-E010 — Gradient singularity
For g(ξ)=−ξ, find the maximal forward interval on which the characteristic construction is a C1 graph.
<details><summary>Hint 1</summary>The map is x=(1−t)ξ.</details>
<details><summary>Hint 2</summary>Compare its derivative at t=1 with the formula for u_x.</details>
<details><summary>Full solution</summary>For 0≤t<1 it is invertible and u=−x/(1−t), with u_x=−1/(1−t). At t=1 every initial point projects to x=0 while retaining its own value −ξ, so there is no single-valued graph there. The maximal interval from time zero is [0,1). A separately invertible formula for t>1 does not continue a C1 solution through t=1.</details>

### PDE-CHAR-E011 — Closed-orbit obstruction
On an annulus, can (−y)u_x+xu_y=1 have a single-valued C1 solution?
<details><summary>Hint 1</summary>The operator is angular differentiation.</details>
<details><summary>Hint 2</summary>Integrate around one full circle.</details>
<details><summary>Full solution</summary>The equation is u_θ=1. Integration from zero to 2π gives u(r,2π)−u(r,0)=2π, but a single-valued function has equal endpoint values. There is no such global solution. Local angular charts admit u=θ plus a radial function, illustrating the difference between local and global solvability.</details>

### PDE-CHAR-E012 — Conservative versus scalar transport
For A=(x,y), verify that ρ(x,y)=(x²+y²)^−1 solves div(Aρ)=0 on the punctured plane but not A·∇ρ=0.
<details><summary>Hint 1</summary>ρ is homogeneous of degree minus two.</details>
<details><summary>Hint 2</summary>Expand div(Aρ)=2ρ+A·∇ρ.</details>
<details><summary>Full solution</summary>Direct differentiation gives A·∇ρ=−2ρ, which is nonzero on the punctured plane. Since div A=2, the conservative divergence is 2ρ−2ρ=0. The singularity at the origin is outside the stated classical domain; this calculation makes no distributional claim there.</details>

## Sources and scope

This original first-course exposition builds on Euler's ODE flow and inverse-function developments. Standard classical PDE treatments provide the syllabus benchmark. The local construction and uniqueness arguments are proved here from those named inputs. No weak solution, entropy selection or global nonlinear existence theorem is implicit in a characteristic formula.

## Summary

Characteristics turn a first-order PDE into ordinary differential equations, but a solution is obtained only when characteristic parameters give valid coordinates. Transverse data give local existence and uniqueness; tangent data impose compatibility and leave freedom. Divergence determines local volume change, boundary entry determines which data are needed, and closed trajectories impose global conditions. Quasilinear projected characteristics can lose invertibility, preparing the transition from smooth transport to conservation laws.
