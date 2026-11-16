
# Separation of Variables and Boundary Modes

Separation of variables builds solutions from products of a spatial shape and a time or transverse-coordinate factor. Boundary conditions select the allowed shapes, and the differential equation evolves their amplitudes. The technique becomes a proof only after the spatial family is shown to recover the prescribed data and the resulting series is regular enough to satisfy the equation.

This chapter treats intervals and rectangles, where elementary sine and cosine families supply that spatial theory. The [Fourier mean-square chapter](../fourier-analysis/mean-square-parseval.md) proves completeness by positive approximation and Hilbert completion. We use its finite-interval rescaling, together with coefficient uniqueness for continuous periodic functions. The next chapter extends the eigenfunction argument to regular Sturm–Liouville problems. General domains do not possess a product coordinate system merely because separation works on a rectangle.

Throughout, L>0, c>0 and κ>0. Dirichlet data at interval endpoints are initially homogeneous. Integrals and norms of smooth finite-interval functions are ordinary Riemann integrals; a completed square norm is invoked explicitly when needed. Each existence theorem below states sufficient regularity rather than claiming that a formal series always defines a classical solution.

## 1. Solving the spatial boundary problem

For the heat equation set u(t,x)=T(t)X(x), with neither factor identically zero. Substitution gives T'X=κTX''. On regions where division is allowed, T'/(κT)=X''/X, a quantity depending both only on t and only on x, hence constant. Writing that constant as −λ gives

\[
 -X''=\lambda X,\qquad T'+\kappa\lambda T=0.
\]

One can avoid divisions at zeros by fixing a point where a factor is nonzero, deriving the same ODE, and using the original identity to extend it. Zeros of sine modes do not invalidate separation.

With X(0)=X(L)=0, λ=0 gives only the zero affine solution. For λ<0, the hyperbolic solutions also give only zero after the two endpoint conditions. Equivalently, integration against the conjugate X gives λ∫|X|²=∫|X'|², excluding negative λ and forcing a zero λ mode to be constant and hence zero. For λ>0 write k=sqrtλ. The endpoint at zero removes the cosine term and the endpoint at L requires sin(kL)=0. Thus

\[
 X_n(x)=\sin(n\pi x/L),\qquad
 \lambda_n=(n\pi/L)^2,\qquad n=1,2,\ldots.
\]

Distinct modes are orthogonal, with squared norm L/2. This follows either from trigonometric product identities or from integrating the difference of their two eigenvalue equations. The latter method will survive when explicit sines are unavailable.

## 2. Data recovery and a useful coefficient bound

The sine coefficients are b_n=(2/L)∫_0^L f(x)sin(nπx/L)dx. Odd extension to [−L,L] identifies this family with the odd subspace of periodic Fourier analysis. Finite sine combinations are dense in the corresponding mean-square completion, so their orthogonal partial sums converge to f in that norm. For a continuous f with f(0)=f(L)=0, the odd extension is continuous on the circle.

If f∈C2[0,L] with zero endpoints, integrate twice by parts. The first boundary term vanishes because f vanishes; the second boundary term contains sin(nπx/L) and also vanishes. With k_n=nπ/L,

\[
 b_n=-\frac2{Lk_n^2}\int_0^Lf''(x)\sin(k_nx)\,dx,
 \qquad |b_n|\le\frac{2\|f''\|_\infty}{k_n^2}.
\]

The sine series is therefore absolutely and uniformly convergent. Its continuous odd periodic limit has the same coefficients as f. Fourier coefficient uniqueness, proved from Fejér approximation, makes the limit exactly f. This supplies uniform initial-data recovery for the smooth heat theorem below without pretending that every continuous function has an absolutely convergent Fourier series.

**Worked example 8.1: a parabolic initial profile.** For f=x(L−x), f''=−2, so b_n=4(1−(−1)^n)/(Lk_n³). Even coefficients vanish; odd coefficients are 8L²/(n³π³). The midpoint height L²/4 is recovered by the convergent odd-mode series. Symmetry about the midpoint can predict the even-mode cancellation before integration, while the explicit formula checks its scale and sign.

## 3. The interval heat construction

For such f define

\[
 u(t,x)=\sum_{n\ge1}b_ne^{-\kappa k_n^2t}\sin(k_nx).
\]

The series converges uniformly on [0,∞)×[0,L], because Σ|b_n| is finite. It has zero endpoint values, and its uniform limit at t=0 is f: split into a finite sum and a uniformly small absolute tail, then let t decrease to zero in the finite part. Thus u is continuous on the full initial-boundary closure.

On any t≥τ>0, an arbitrary fixed combination of time and spatial derivatives multiplies the nth term by a polynomial in n and a Gaussian damping factor. These terms remain summable, uniformly on that strip. Termwise differentiation is justified, giving a smooth solution for t>0 with u_t=κu_xx. The [heat maximum principle](heat-equation.md) gives uniqueness in the continuous-closure, interior C^{2,1} class on every finite cylinder. Existence came from the convergent construction; uniqueness uses a separate comparison argument.

This proof also shows strong smoothing away from initial time. It does not claim all derivatives extend continuously to t=0: that needs stronger data and endpoint compatibility. If initial data are only in the completed square-norm space, the same modal formula converges there and tends to the initial data in that norm. To prove this, use Parseval, control a finite coefficient block by scalar convergence and bound the remaining coefficient tail by its square sum. A classical boundary value at every initial point is an additional assertion, not encoded by norm convergence alone.

**Worked example 8.2: one heat mode.** For f=sin(3πx/L), only b3=1 survives and u=e^−9κπ²t/L²sin(3πx/L). The e-folding time is L²/(9κπ²). Higher modes decay faster by the square of their frequency. Doubling the interval length multiplies this time by four at fixed κ, matching the length-squared scaling of diffusion.

## 4. The interval wave construction

For u_tt=c²u_xx the same spatial problem gives T''+c²λ_nT=0. The candidate solution is

\[
 u(t,x)=\sum_{n\ge1}
 \left(f_n\cos(ck_nt)+\frac{g_n}{ck_n}\sin(ck_nt)\right)\sin(k_nx).
\]

Here f_n and g_n are sine coefficients of displacement and velocity. A convenient sufficient classical hypothesis is f∈C4[0,L], f=f''=0 at both endpoints, and g∈C3[0,L], g=0 at both endpoints. Four integrations by parts give f_n=O(n^−4). Three give g_n=O(n^−3); the third may have bounded endpoint terms involving g'', which have the same n^−3 scale. Every series obtained by at most two derivatives in t,x is then absolutely uniformly convergent on bounded time strips, since the worst coefficient size is O(n^−2).

Consequently the candidate is C2, solves the PDE termwise and satisfies both boundary conditions. Its initial displacement and velocity equal f,g by the coefficient uniqueness argument. The interval energy identity proves uniqueness. These hypotheses are sufficient and intentionally stronger than necessary. They make every differentiability step transparent and include finite sine polynomials. Weaker energy data can be treated through the completed norm route, with the solution class stated accordingly.

**Worked example 8.3: two initial modes.** If f=2sin(πx/L) and g=3sin(2πx/L), the solution is

\[
 2\cos(c\pi t/L)\sin(\pi x/L)
 +\frac{3L}{2c\pi}\sin(2c\pi t/L)\sin(2\pi x/L).
\]

The factor 1/(ck2) is required to obtain the prescribed velocity three. Equal numerical coefficients in displacement and velocity have different physical units. Neither mode damps in the homogeneous wave equation, unlike the corresponding heat modes.

## 5. Harmonic extension on a rectangle

Let 0<x<L, 0<y<H. Prescribe u(x,0)=f(x) and zero data on the other three edges, with f∈C2[0,L] and f(0)=f(L)=0. Separating u=X(x)Y(y) in Δu=0 gives Y''−k_n²Y=0. The top zero condition and bottom normalization give

\[
 u(x,y)=\sum_{n\ge1}b_n\sin(k_nx)
 \frac{\sinh(k_n(H-y))}{\sinh(k_nH)}.
\]

The ratio is between zero and one on [0,H], so absolute summability of b_n gives uniform convergence on the closed rectangle and continuity at its corners. On any y≥δ>0 away from the bottom, the ratio and its fixed derivatives are bounded by a polynomial in n times a constant times e^−k_nδ. All interior derivatives can be taken termwise, proving harmonicity. At the bottom the series equals f, at the top it is zero, and the sine factors enforce side values. The maximum principle proves uniqueness.

If the bottom data do not vanish at its endpoints while the adjacent side data are zero, no continuous closed-rectangle solution can take all the stated values at the corners. A series may still define an interior harmonic function with one-sided edge limits, but it solves a different boundary regularity problem. Ignoring the corners does not establish the continuous-closure theorem.

**Worked example 8.4: a single harmonic mode.** For f=sin(πx/L), the solution is sin(πx/L)sinh((π/L)(H−y))/sinh(πH/L). Far from a bottom boundary mode in a tall rectangle, its size decays roughly exponentially with height. Rapid spatial oscillations decay more quickly into the equilibrium interior. This spatial attenuation is not time diffusion; y is a spatial variable in this problem.

## 6. Neumann, Robin and zero modes

For homogeneous Neumann data X'(0)=X'(L)=0, the spatial family is the constant mode and cos(nπx/L), n≥1. The constant has eigenvalue zero. In heat evolution its amplitude remains constant, reflecting preservation of the mean. In wave evolution its amplitude is A+Bt, reflecting uniform translation of a free string. Dropping this mode loses legitimate data.

For −u''=f with Neumann data u'(0)=u'(L)=0, integration gives ∫_0^L f=0 as a necessary condition. When it holds, integrating twice constructs a solution, unique up to an additive constant. This matches the spectral obstruction at eigenvalue zero. An arbitrary source cannot be divided by the zero eigenvalue.

For Robin conditions X'(0)=αX(0), X'(L)=−βX(L), with α,β≥0, integration by parts gives

\[
 \lambda\int_0^L|X|^2
 =\int_0^L|X'|^2+\alpha|X(0)|^2+\beta|X(L)|^2.
\]

Thus eigenvalues are nonnegative. A zero eigenvalue forces X constant; it is nonzero only if α=β=0. The signs encode outward-normal Robin conditions at opposite endpoints. Choosing the same coordinate-derivative sign at both ends describes a different problem and can invalidate this positivity conclusion. Explicit Robin frequencies satisfy a transcendental equation rather than a simple integer formula; completeness requires the next chapter's argument.

## 7. Product geometries and nonhomogeneous boundaries

On a rectangle with homogeneous Dirichlet data, products sin(mπx/L)sin(nπy/H) have eigenvalues (mπ/L)²+(nπ/H)². Heat modes decay with that sum and wave modes oscillate with c times its square root. Orthogonality follows by iterated finite integrals. Completeness can be obtained from one-dimensional completeness in each variable using finite product approximations; one should supply that density argument before claiming arbitrary two-dimensional data are recovered.

Nonhomogeneous boundary data are often handled by subtracting a lifting. On an interval with endpoint temperatures A(t),B(t), let ℓ(t,x)=A(t)+(B(t)−A(t))x/L. Set v=u−ℓ. Then v has homogeneous endpoints and satisfies v_t−κv_xx=−ℓ_t, because ℓ_xx=0. Initial data must also be adjusted by ℓ(0,x). Expanding only the original initial function while forgetting the source −ℓ_t produces the wrong solution when boundary temperatures vary in time.

For each source mode h_n(t), the heat amplitude solves a_n'+κλ_na_n=h_n and hence

\[
 a_n(t)=e^{-\kappa\lambda_nt}a_n(0)
 +\int_0^te^{-\kappa\lambda_n(t-s)}h_n(s)\,ds.
\]

The wave amplitude obeys the corresponding forced oscillator formula. These finite-dimensional calculations are exact. An infinite forced expansion still needs uniform or norm estimates suited to the claimed regularity; separation alone does not perform that passage. The later Duhamel chapter develops the operator and kernel viewpoint on these same constructions.

## 8. Product completeness and modal error bounds

Here is the missing density argument for continuous rectangle data vanishing on the boundary. Extend the function oddly in each coordinate and periodically with periods 2L and 2H. The zero edge values make this extension continuous on the product of two circles. Apply a one-dimensional Fejér operator in the first coordinate and another in the second. Each is a positive averaging operator of norm at most one on the supremum norm. Uniform continuity on the compact product makes the Fejér convergence in either coordinate uniform in the other coordinate, by the same near/far kernel estimate as in one dimension.

If A and B denote the two averaging operators, then

\[
 \|ABf-f\|_\infty
 \le\|A(Bf-f)\|_\infty+\|Af-f\|_\infty
 \le\|Bf-f\|_\infty+\|Af-f\|_\infty.
\]

The right side tends to zero as both orders increase. Odd symmetry is preserved in each variable because the Fejér kernels are even. Therefore ABf is a finite linear combination of sine products, and these products approximate f uniformly on the rectangle. Uniform convergence implies square-norm convergence because the rectangle has finite area. This proves the needed product density for this continuous zero-boundary class. Passing to its completion gives the corresponding completed-space statement. It does not require first assuming a two-dimensional eigenfunction expansion theorem.

The same orthogonality supplies useful truncation estimates. For the heat solution, Parseval with the unnormalized interval norm gives

\[
 \|u(t,\cdot)\|_2^2
 =\frac L2\sum_{n\ge1}|b_n|^2e^{-2\kappa\lambda_nt}
 \le e^{-2\kappa\lambda_1t}\|f\|_2^2.
\]

Thus the Dirichlet mean-square amplitude decays at least as fast as the first mode. For insulated Neumann heat flow the same conclusion applies only after subtracting the preserved mean: a nonzero constant solution plainly does not decay. Recording the boundary condition is essential to the estimate. Equality occurs when only that mode is present. After retaining modes through N, the error squared is exactly the same sum over n>N. The error is governed by a coefficient tail, rather than by the visual smoothness of a plotted partial sum.

For a real wave solution with the smooth data assumed above, integrate its kinetic and strain energies using orthogonality of sine and cosine modes. Finite partial sums have

\[
 E_N=\frac L4\sum_{n=1}^N
 \bigl(|g_n|^2+c^2k_n^2|f_n|^2\bigr),
\]

independent of time. Uniform convergence of the first-derivative series permits passage to the integral energy of the full solution. The energy of the omitted tail is exactly the remaining positive sum, also independent of time. This makes precise the different truncation behavior: heat suppresses high modes increasingly with time, while homogeneous wave energy does not disappear from an omitted mode. A numerical filter may remove such energy deliberately, but it then changes the unforced classical wave evolution.

## 9. Repeated eigenvalues and choosing a spatial basis

Separation on a square illustrates a feature absent from the regular one-dimensional Dirichlet problem: an eigenvalue can have more than one independent spatial mode. On a square of side L the products with indices (1,2) and (2,1) both have eigenvalue 5π²/L². They are orthogonal, but neither has priority as the unique shape associated with that eigenvalue. Any orthogonal rotation of their two-dimensional span gives another valid orthogonal pair.

Let Φ be the normalized (1,2) product and Ψ the normalized (2,1) product. Then (Φ+Ψ)/sqrt2 and (Φ−Ψ)/sqrt2 have norm one, are mutually orthogonal and have the same eigenvalue. Under exchange of x and y, the first is symmetric and the second antisymmetric. If the initial data are symmetric under that exchange, their coefficient against the antisymmetric combination is zero, as follows by changing variables in the integral and observing that the coefficient equals its negative. Symmetry can therefore select a useful basis inside a repeated eigenspace.

For homogeneous heat flow, the entire repeated eigenspace is multiplied by the same scalar exponential. For wave flow it has the same natural angular frequency. An initial combination remains in the same eigenspace, but its nodal pattern depends on the chosen combination, not solely on the eigenvalue. Saying that a frequency determines one unique picture would be incorrect. Orthogonal basis changes leave the total squared coefficient magnitude and modal energy unchanged, by the finite-dimensional Pythagorean identity.

A source can excite one combination without exciting another. If h(t,x,y)=H(t)(Φ+Ψ), its projection on the symmetric normalized mode is sqrt2 H(t), and its projection on the antisymmetric mode is zero. Each projected amplitude solves the same scalar forced equation at that eigenvalue. A source oscillating at the common wave frequency produces resonance only in the components with nonzero projection. Merely matching a numerical frequency is insufficient if spatial orthogonality makes the coupling vanish.

This example explains why general spectral statements refer to eigenspaces and allow multiplicity, whereas the regular separated one-dimensional Dirichlet theorem proves simplicity by ODE uniqueness. It also identifies the part of a separation computation that is independent of basis: the orthogonal projection onto an eigenspace, its eigenvalue and its total energy. Individual coefficient lists depend on the basis selected inside that space, so mathematical comparisons should state that choice when it matters.

## Exercises

### PDE-SEP-E001 — Zero Dirichlet mode
Why is there no nonzero λ=0 spatial mode under two homogeneous Dirichlet conditions?
<details><summary>Hint 1</summary>Solve X''=0.</details>
<details><summary>Hint 2</summary>Apply the two endpoint values.</details>
<details><summary>Full solution</summary>X=Ax+B. X(0)=0 gives B=0, and X(L)=0 gives A=0 because L>0. Thus the only zero-eigenvalue function is the zero function and is not an eigenmode.</details>

### PDE-SEP-E002 — Orthogonality
Compute ∫_0^Lsin(πx/L)sin(2πx/L)dx.
<details><summary>Hint 1</summary>Use twice the product as a difference of cosines.</details>
<details><summary>Hint 2</summary>Each resulting cosine has an integer number of half-periods on the interval.</details>
<details><summary>Full solution</summary>The product is [cos(πx/L)−cos(3πx/L)]/2. Each cosine integral is zero at the endpoints through its sine primitive. The result is zero, confirming orthogonality of the first two modes.</details>

### PDE-SEP-E003 — Heat decay
For a fourth heat mode, compare its decay rate to the first mode on the same interval.
<details><summary>Hint 1</summary>The eigenvalue is proportional to n².</details>
<details><summary>Hint 2</summary>Compare 4² with 1².</details>
<details><summary>Full solution</summary>The exponential rate is sixteen times larger, so its e-folding time is one sixteenth that of the first mode. This is a statement about equal isolated modal amplitudes, not a claim that every point of a multimode solution decays monotonically.</details>

### PDE-SEP-E004 — Velocity normalization
With f=0,g=sin(5πx/L), write the wave solution.
<details><summary>Hint 1</summary>The time factor must have derivative one at zero.</details>
<details><summary>Hint 2</summary>Divide sin(ck5t) by ck5.</details>
<details><summary>Full solution</summary>u=L/(5cπ) sin(5cπt/L)sin(5πx/L). Its initial value is zero and initial time derivative is the prescribed sine. Omitting the prefactor would multiply the initial velocity by 5cπ/L.</details>

### PDE-SEP-E005 — Mean preservation
What happens to the mean of a homogeneous Neumann heat solution?
<details><summary>Hint 1</summary>The constant mode has eigenvalue zero.</details>
<details><summary>Hint 2</summary>Alternatively integrate u_t=κu_xx.</details>
<details><summary>Full solution</summary>The mean remains equal to its initial value. Directly, d∫u/dt=κ[u_x(L)−u_x(0)]=0. Spectrally the constant amplitude has zero derivative and all nonconstant cosine modes have zero mean.</details>

### PDE-SEP-E006 — Neumann compatibility
Can −u''=1 on (0,L) have zero derivative at both endpoints?
<details><summary>Hint 1</summary>Integrate once over the interval.</details>
<details><summary>Hint 2</summary>The endpoint derivative difference would have to equal −L.</details>
<details><summary>Full solution</summary>No. Integration gives −u'(L)+u'(0)=L, whereas both derivatives are zero. The source fails the zero-mean compatibility condition associated with the constant mode.</details>

### PDE-SEP-E007 — Rectangle mode
Find the Laplace extension of bottom datum sin(2πx/L) with the other three edges zero.
<details><summary>Hint 1</summary>Use k=2π/L.</details>
<details><summary>Hint 2</summary>The vertical factor equals one at zero and zero at H.</details>
<details><summary>Full solution</summary>u=sin(2πx/L)sinh((2π/L)(H−y))/sinh(2πH/L). Its second x derivative is −k²u and its second y derivative is k²u, so their sum is zero. The factors enforce all four edge conditions.</details>

### PDE-SEP-E008 — Corner conflict
Can continuous closed-rectangle data equal one on the entire bottom edge and zero on the entire left edge?
<details><summary>Hint 1</summary>Inspect their common corner.</details>
<details><summary>Hint 2</summary>Continuity requires the two edge limits to agree.</details>
<details><summary>Full solution</summary>No. Approaching the bottom-left corner along the bottom gives one, while approaching along the left gives zero. An interior series with these open-edge limits cannot extend continuously to that corner with both values.</details>

### PDE-SEP-E009 — Robin positivity
If α>0 and β=0 in the stated Robin problem, show that zero is not an eigenvalue.
<details><summary>Hint 1</summary>Set λ=0 in the energy identity.</details>
<details><summary>Hint 2</summary>A constant with X(0)=0 must vanish.</details>
<details><summary>Full solution</summary>The identity forces X'=0 and α|X(0)|²=0. Thus X is constant and X(0)=0, hence identically zero. An eigenfunction must be nonzero, so λ=0 is excluded.</details>

### PDE-SEP-E010 — Boundary lifting
For endpoint values A(t)=t and B(t)=2t, find the lifting and the source in the homogeneous-boundary heat problem.
<details><summary>Hint 1</summary>Interpolate linearly in x.</details>
<details><summary>Hint 2</summary>The new source is minus the time derivative of that interpolation.</details>
<details><summary>Full solution</summary>ℓ=t(1+x/L). Thus v=u−ℓ has zero endpoints and satisfies v_t−κv_xx=−(1+x/L). Since ℓ(0,x)=0, its initial data equal the original initial data in this example.</details>

### PDE-SEP-E011 — Interior heat regularity
Why does multiplying a coefficient sequence bounded by C by e^−an²t allow any fixed number of derivatives when t≥τ>0?
<details><summary>Hint 1</summary>Derivatives multiply terms by a fixed power of n.</details>
<details><summary>Hint 2</summary>A Gaussian tail dominates every fixed polynomial.</details>
<details><summary>Full solution</summary>For every integer m, Σn^m e^−an²τ is finite, for instance by comparison with its eventually decreasing integral. Thus derivative series have a common summable bound on the strip, giving uniform convergence and valid termwise differentiation. The bound need not remain finite uniformly as τ decreases to zero.</details>

### PDE-SEP-E012 — Two-dimensional frequency
On a square of side L, find the eigenvalue and wave angular frequency of the product mode with indices (1,2).
<details><summary>Hint 1</summary>Add the two one-dimensional eigenvalues.</details>
<details><summary>Hint 2</summary>The wave frequency is c times the square root.</details>
<details><summary>Full solution</summary>The eigenvalue is 5π²/L² and the angular frequency is cπsqrt5/L. The heat decay rate for the same mode is 5κπ²/L². These are different functions of the common spatial eigenvalue.</details>

## Sources and scope

This original treatment uses the standard classical PDE separation syllabus and the proved Fourier density route. It states sufficient smoothness for each classical series construction. Product-domain completeness, general regular eigenfunction expansion and weak-data evolution are distinct results; they are not established merely by substituting a product into the PDE.

## Summary

Boundary conditions turn separated spatial equations into eigenvalue problems. Fourier density recovers data, coefficient estimates justify classical series and heat damping improves positive-time regularity. Wave modes conserve oscillation, harmonic rectangle modes attenuate spatially, and Neumann zero modes carry compatibility and freedom. Robin signs, corner values and boundary lifting show why geometry and boundary data must accompany the formal algebra.
