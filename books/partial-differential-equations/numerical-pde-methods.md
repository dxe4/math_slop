
# Numerical Methods for Classical PDE

A numerical PDE method replaces a continuous equation by a finite update or linear system. The replacement has its own mathematics. A method can approximate derivatives correctly and still amplify errors; it can preserve a square norm while creating negative temperatures; it can conserve a discrete quantity without representing the intended boundary problem. Consistency, stability, convergence and qualitative preservation are distinct claims.

This chapter proves selected finite-difference results for one-dimensional heat, wave and transport equations. All worked calculations are exact algebra. No observed computation is used as proof. Preparation is the [classical heat](heat-equation.md) and [wave](wave-equation.md) chapters, [finite Fourier/DFT algebra](../fourier-analysis/discrete-fourier-transform-fft.md), and ordinary Taylor bounds. The numerical-analysis primary supplies broader interpolation, linear solving and error-budget tools. Our focus is the PDE structure of the discrete schemes.

Write xj=jh and tn=nk, with h,k>0. The symbol Uj^n denotes a grid approximation to u(tn,xj). In a bounded interval include its endpoints explicitly; on a periodic grid indices wrap modulo N. The centered second difference is Dh²Uj=(Uj+1−2Uj+Uj−1)/h². Its boundary interpretation is part of the definition, not an afterthought.

## 1. Consistency is a statement about an exact smooth solution

For heat evolution u_t=κu_xx+f, forward time and centered space give

\[
 U_j^{n+1}=U_j^n+r(U_{j+1}^n-2U_j^n+U_{j-1}^n)+kf_j^n,
 \qquad r=\kappa k/h^2.
\]

Insert a sufficiently smooth exact solution into the formula and define the residual per unit time

\[
 \tau_j^n=\frac{u(t_{n+1},x_j)-u(t_n,x_j)}k
 -\kappa D_h^2u(t_n,x_j)-f(t_n,x_j).
\]

Taylor's theorem, with |utt|≤Mtt and |uxxxx|≤M4 on the relevant grid neighborhoods, gives |τ|≤kMtt/2+κh²M4/12. The time remainder follows from the integral second-order formula; the centered spatial odd terms cancel and its fourth-order remainder has the displayed bound. Thus this residual is O(k+h²). The one-step defect in the unscaled update is kτ, one order smaller in time. Confusing those two quantities leads to an incorrect accumulated error estimate.

The bounds require derivatives over the whole region used by the grid, including near the initial and boundary corners. A heat solution smooth only for positive time may have growing derivative bounds as time approaches zero. Then the same uniform error theorem cannot be quoted from t=0 without stronger compatible initial data or a separate initial-layer argument.

## 2. Explicit heat stability and convergence

If 0≤r≤1/2, the homogeneous update is a convex combination with weights r,1−2r,r. Nonnegative data remain nonnegative, and the maximum magnitude cannot increase when boundary magnitudes are bounded by the same value. On zero-boundary error vectors the update matrix B has supremum operator norm at most one.

Let e be numerical minus exact grid values, with boundary errors at most δb and initial error at most δ0. Subtract the inserted exact equation to obtain e^{n+1}=Be^n−kτ^n in the interior. Induction using the boundary values gives

\[
 \|e^n\|_\infty\le\max(\delta_0,\delta_b)
 +t_n\max_{m<n}\|\tau^m\|_\infty.
\]

Therefore, with exact initial/boundary data and tn≤T, the error is at most T(kMtt/2+κh²M4/12). This proves convergence under the smoothness and r restriction. It also shows why local consistency needed the stability estimate: without controlling B's powers, the residual terms could be amplified rather than simply accumulated.

**Worked example 12.1: choosing a stable mesh.** If κ=2 and h=1/10, positivity requires k≤h²/(2κ)=1/400. Choosing k=1/800 gives r=1/4 and weights 1/4,1/2,1/4. Choosing k=1/100 instead gives r=2; the negative central weight then permits oscillatory error growth. These are exact parameter calculations, not empirical thresholds inferred from a plot.

## 3. Fourier amplification and its qualifications

On a periodic grid a mode e^{ijθ} is multiplied by

\[
 g(\theta)=1-4r\sin^2(\theta/2).
\]

Finite DFT inversion and Parseval show that the update is a square-norm contraction exactly when |g|≤1 at every represented frequency. The condition 0≤r≤1/2 guarantees it for every θ. It is necessary for an even-node periodic grid because θ=π is then present. For a fixed odd-node grid its largest sine square is slightly below one, so the sharp norm threshold differs; the uniform r≤1/2 condition remains sufficient and also guarantees the stronger convex-combination property.

If r>1/2 and θ=π is represented, the alternating mode is multiplied by 1−4r, whose magnitude exceeds one. Its error grows geometrically in time steps. A scheme can therefore be consistent as h,k decrease along a poorly chosen relation and still fail to converge. Stability restrictions concern the joint mesh limit, not just each derivative formula separately.

The plane-wave calculation is exact finite linear algebra on a periodic grid. On a bounded interval with other boundaries, one must use that update matrix's spectrum or an appropriate direct estimate. Treating every boundary problem as periodic can conceal boundary instability or change the solution being approximated.

## 4. Implicit heat schemes: stability versus positivity

Backward Euler replaces the spatial difference by its new-time value:

\[
 U_j^{n+1}-r(U_{j+1}^{n+1}-2U_j^{n+1}+U_{j-1}^{n+1})
 =U_j^n+kf_j^{n+1}.
\]

For homogeneous Dirichlet boundaries this finite linear system is uniquely solvable for every r≥0. If the right side and boundary values are nonnegative, a negative minimum of the new vector would have nonnegative second difference, making its left side negative, a contradiction. Applying the corresponding maximum/minimum reasoning to a zero right side proves uniqueness; a square finite linear system with zero kernel is invertible. Comparison with constant bounds gives supremum contraction of the inverse. Thus stability and positivity impose no explicit k/h² restriction here, although a large time step still has accuracy consequences.

Crank–Nicolson averages the old and new spatial differences. Its periodic amplification factor is

\[
 g_{CN}(\theta)=\frac{1-2r\sin^2(\theta/2)}
 {1+2r\sin^2(\theta/2)}.
\]

Its modulus is at most one for every r≥0. Yet high-frequency factors are negative when 2r sin²(θ/2)>1, so damping can alternate in sign. Square-norm stability does not guarantee positivity of every new temperature vector. For r≤1 the old-time matrix has nonnegative entries and the backward-type inverse is positive, giving a useful sufficient positivity condition. That is a different condition from the amplification factor's unconditional norm bound.

**Worked example 12.2: a positive spike becomes negative.** Use four periodic nodes and r=2. The left matrix in Crank–Nicolson is I−D, where D is the unscaled centered second difference. Its inverse has diagonal (1/4)(1+2/3+1/5)=7/15, from the four DFT frequencies. The complete update is twice that inverse minus I, so its diagonal is −1/15. Starting from a unit spike, the value at its original node is therefore −1/15 after one step, despite square-norm contraction. This is an exact finite counterexample to identifying norm stability with positivity.

## 5. A wave scheme and the Courant number

Centered time and space give

\[
 U_j^{n+1}-2U_j^n+U_j^{n-1}
 =s^2(U_{j+1}^n-2U_j^n+U_{j-1}^n),
 \qquad s=ck/h.
\]

For a periodic spatial mode, temporal factors z satisfy z²−2(1−2s²sin²(θ/2))z+1=0. When 0≤s≤1 the roots have modulus one, with possible repeated endpoint roots. When s>1 and a represented frequency has s²sin²(θ/2)>1, one reciprocal root has modulus greater than one and causes growth. The uniform Courant restriction is therefore s≤1, but repeated roots at the limiting case require care in a norm stability statement.

A direct conserved discrete energy gives a clean result for 0<s<1. Set V^n=(U^{n+1}−U^n)/k and let Dx+ denote the forward spatial difference. For periodic or homogeneous fixed-end grids, summation by parts gives conservation of

\[
 E^{n+1/2}=\tfrac12\|V^n\|_h^2
 +\tfrac{c^2}2\langle D_x^+U^{n+1},D_x^+U^n\rangle_h,
\]

where ||U||h²=hΣ|Uj|². Multiply the update by U^{n+1}−U^{n−1}, sum, and use a²−b²=(a−b)(a+b) to obtain the kinetic energy difference. Spatial summation by parts produces exactly the difference of the cross-gradient terms. Boundary terms vanish under the stated conditions.

Writing Ubar=(U^{n+1}+U^n)/2 gives

\[
 E^{n+1/2}=\tfrac12\|V^n\|_h^2
 +\tfrac{c^2}2\|D_x^+\overline U\|_h^2
 -\tfrac{c^2k^2}8\|D_x^+V^n\|_h^2.
\]

The inequality ||Dx+V||h≤2||V||h/h follows by |a−b|²≤2|a|²+2|b|² and summation. Hence E≥(1−s²)||V||h²/2+c²||Dx+Ubar||h²/2. For s<1 it controls those quantities. At s=1 this coercivity degenerates, so the same uniform energy control must not be asserted without a separate endpoint analysis.

## 6. Initializing a second-order evolution

A two-step wave scheme needs U0 and U1. Initial displacement alone does not supply both. For smooth f,g and source F, Taylor expansion suggests

\[
 U_j^1=f(x_j)+kg(x_j)
 +\frac{k^2}2\bigl(c^2D_h^2f(x_j)+F(0,x_j)\bigr).
\]

With suitable derivative bounds this approximates the exact first step to the order needed by the centered method. Boundary values must be applied consistently at both times. Choosing U1=U0 for a zero-velocity problem discards the initial acceleration term and can lower accuracy or inject a spurious component.

**Worked example 12.3: the highest periodic wave mode.** At the limiting s=1 and frequency θ=π, the repeated root is z=−1. General temporal values have form (A+Bn)(−1)^n. Correct Taylor initialization with zero initial velocity for that mode gives U1=−U0 and B=0, while an arbitrary independent first-step error can produce the linearly growing factor. Thus root modulus alone misses the repeated-root issue. The strict-Courant energy proof avoided this degeneracy by assuming s<1.

The centered scheme is locally O(k²+h²) per unit equation residual when the fourth time and spatial derivatives are bounded. Convergence in an energy norm follows from a stable forced-error recurrence with compatible initial errors; a full theorem must state that norm and its initialization estimates. The single amplification polynomial is not a substitute for all those ingredients.

## 7. Transport: a monotone and an unstable discretization

For u_t+v u_x=0 with v>0, the upwind update is Uj^{n+1}=(1−ν)Uj^n+νUj−1^n, ν=vk/h. If 0≤ν≤1 this is a convex combination and is a supremum contraction, preserving nonnegativity and the data range. A Taylor calculation gives first-order consistency and the leading modified equation

\[
 u_t+vu_x\approx\frac{vh}2(1-\nu)u_{xx}.
\]

To obtain the coefficient, expand one time step and the backward spatial sample, then replace utt by v²uxx at leading order from the exact advection equation. The displayed artificial diffusion helps explain smearing; the modified equation is an asymptotic description with remainder, not an exact PDE solved by every grid value.

Using forward time with a centered first spatial difference instead gives amplification g=1−iνsinθ. Its squared modulus is 1+ν²sin²θ>1 whenever ν≠0 and a represented sine is nonzero. Thus that method is unstable across refinement for the corresponding periodic modes despite a centered spatial derivative's apparent accuracy. For a fixed mesh and very short observation it might look plausible; that visual fact cannot replace the growth calculation.

At ν=1, upwind transport is the exact grid shift Uj^{n+1}=Uj−1^n. A sampled profile moves one cell per step without numerical smearing at the grid points. This special exactness depends on matching the grid speed to v and does not imply a higher general order for arbitrary ν, variable coefficients or off-grid values.

## 8. Boundaries, conservation and what is being approximated

Periodic centered differences telescope, so explicit heat preserves the discrete sum when the source is zero. Fixed Dirichlet boundaries permit flux through the ends and generally do not preserve that sum. Neumann discretizations must be designed with their actual boundary flux convention; copying an interior stencil and silently dropping a neighbor does not encode insulation.

A conservative transport update can be written Uj^{n+1}=Uj^n−(k/h)(Fj+1/2−Fj−1/2). Internal fluxes cancel in the total sum. For nonlinear conservation laws this discrete balance is valuable, but it alone does not guarantee convergence to the admissible entropy solution. The explicit shock and rarefaction chapter already showed that conservation can admit an expansion shock. Monotonicity, entropy properties, compactness and consistency of the flux require further analysis in the L4 weak/nonlinear continuation.

A numerical grid also has a spatial frequency ceiling. Frequencies separated by a multiple of the sampling frequency give the same samples; the DFT aliasing chapter proves that finite fact exactly. A small grid residual cannot certify that an unresolved oscillatory component is absent from the original continuous data. Refinement must represent the same mathematical initial-boundary problem, including consistent data sampling, boundary values and observation times.

## 9. Error budgets and the classical-to-weak continuation

A convergence bound separates initial and boundary approximation, local residual and stability amplification. Floating arithmetic, iterative linear-solver error and uncertain input data add further contributions. A theorem proved in exact arithmetic is one component of that budget. A comparison of two mesh sizes is an estimate under an assumed error model, while a bound using global derivative information is a certificate under explicit hypotheses.

For smooth problems the results here provide exact analytical benchmarks: stable heat averaging, energy-conserving waves, resolvent positivity and upwind transport. If a classical solution forms a shock or the initial data lack the derivatives used in the residual estimate, the smooth proof no longer applies. Refinement may still be meaningful, but it must be assessed with the correct weak solution and approximation theory.

The continuation is [PDE: Weak Theory, Waves and Patterns](#/books/pde-weak-theory-waves-patterns). It develops Sobolev and variational solution classes, weak limits and nonlinear waves. Those topics are not duplicates of a classical derivative calculation: they address existence and convergence after the smooth function class ceases to describe the problem. The present book's model equations, boundary distinctions and Fourier/energy arguments supply the preparation for that route.

## 10. Exact time integration does not remove spatial error

For a periodic trigonometric polynomial, the heat equation evolves its mth Fourier mode by e^−κkm²t, where km=2πm/L. A finite DFT can apply that factor exactly in time to every represented mode, using its negative-forward and inverse-1/N convention. There is no time-discretization CFL restriction in this exact modal evolution. There remains a spatial frequency cutoff and the possibility that sampled data already contain aliases.

The centered finite-difference spatial operator has a different eigenvalue: its decay factor in continuous time is exp(−4κt sin²(kmh/2)/h²). For fixed low frequency, expanding the sine gives

\[
 \frac4{h^2}\sin^2(k_mh/2)
 =k_m^2-\frac{k_m^4h^2}{12}+O(h^4).
\]

Thus the spatial operators agree to second order for that fixed smooth mode. Near the Nyquist frequency, however, kmh is not small and this asymptotic comparison is not uniform. At km=π/h the two decay rates are κπ²/h² and 4κ/h². Both suppress that represented mode, but they model it with different spatial operators. Eliminating a time-step error does not make those operators identical.

This distinction is valuable when comparing algorithms: one method may solve a spatially discrete system very accurately while that system is still a poor representation of the intended continuous solution. Accuracy claims should therefore separate time evolution, spatial discretization, initial sampling and boundary modeling. A DFT inversion identity certifies the finite transform algebra, not absence of unresolved continuous frequencies.

## 11. A complete discrete elliptic error estimate

Consider −u''=f on [0,L] with zero endpoint values and u∈C4[0,L]. Let U solve −Dh²U=f on the interior uniform grid with zero endpoint values. The discrete Dirichlet Laplacian is invertible. Its homogeneous kernel is zero by the discrete maximum principle: a positive interior maximum of a discrete harmonic vector forces both neighbors to share that value, and repetition reaches a zero endpoint, a contradiction. Apply the same reasoning to a negative minimum. A square finite matrix with zero kernel has an inverse.

More generally a vector with nonnegative −Dh² values and nonnegative boundary values is nonnegative. A negative minimum would have to propagate by equality to the boundary, again a contradiction. This proves comparison. The exact quadratic grid function qj=xj(L−xj)/2 satisfies −Dh²q=1 and has zero endpoints. If e=U−u sampled and its discrete residual has magnitude at most ε, comparison applied to εq±e gives |ej|≤εqj. Consequently

\[
 \|e\|_\infty\le\frac{L^2}{8}\varepsilon
 \le\frac{L^2h^2}{96}\|u^{(4)}\|_\infty.
\]

The final inequality is the centered-second-difference residual bound ε≤h²||u⁽⁴⁾||∞/12. This is a full finite-dimensional convergence estimate, with its stability factor supplied by a discrete barrier. It mirrors the earlier continuous Poisson barrier, connecting boundary comparison to numerical error rather than treating matrix inversion as an unexplained guarantee.

For an exact quadratic solution the fourth derivative is zero, the residual vanishes and the grid solution reproduces its samples exactly. This special case checks the estimate but does not prove its general C4 statement; the Taylor remainder and discrete comparison arguments do that work.

## 12. Perturbed updates and solver tolerances

Suppose a contractive explicit heat update receives an additional vector perturbation ρn at each step, bounded by η in the supremum norm. The same recurrence proof gives a total perturbation contribution at most nη, or Tη/k at a fixed grid time T. This is a worst-case bound with errors allowed to align. Replacing it by a square-root accumulation would require statistical information not supplied. Decreasing the time step reduces truncation error but increases the number of such contributions; η itself may also depend on the chosen implementation and step.

For backward Euler, if an approximate linear solution has residual r in its stated algebraic system, the inverse comparison bound gives a state error at most ||r||∞. Repeated time solves therefore need a tolerance budget consistent with the desired final error, rather than one fixed residual interpreted automatically as a global certificate. These statements assume supplied perturbation or residual bounds; they do not claim a floating-arithmetic enclosure without deriving those bounds.

## Exercises

### PDE-NUM-E001 — Heat ratio
For κ=1,h=1/5,k=1/100, find r and the explicit weights.
<details><summary>Hint 1</summary>h²=1/25.</details>
<details><summary>Hint 2</summary>Divide k by h².</details>
<details><summary>Full solution</summary>r=1/4. The weights are 1/4,1/2,1/4, so the homogeneous update is a convex combination and has the stated positivity and supremum stability.</details>

### PDE-NUM-E002 — Accumulated defect
If ||τ||∞≤ε, initial and boundary errors are zero, and the explicit update is a contraction, bound error at time T.
<details><summary>Hint 1</summary>Each step adds at most kε.</details>
<details><summary>Hint 2</summary>There are T/k steps when T is on the grid.</details>
<details><summary>Full solution</summary>The induction bound is Tε. The local per-step defect is kε, and contraction prevents amplification of prior contributions. If T is not on the grid, use the actual reached time or a separately justified observation interpolation.</details>

### PDE-NUM-E003 — Alternating heat mode
For r=3/4 and an even periodic grid, find the Nyquist amplification.
<details><summary>Hint 1</summary>θ=π makes the sine square one.</details>
<details><summary>Hint 2</summary>Compute 1−4r.</details>
<details><summary>Full solution</summary>The factor is −2. Its magnitude doubles each step, so the alternating error mode grows geometrically and changes sign. Consistent derivative stencils do not prevent this instability.</details>

### PDE-NUM-E004 — Backward positivity
Why can a negative minimum not occur when the backward Euler right side and boundary data are nonnegative?
<details><summary>Hint 1</summary>The centered second difference at a minimum is nonnegative.</details>
<details><summary>Hint 2</summary>The left side is the negative value minus r times that difference.</details>
<details><summary>Full solution</summary>At a negative interior minimum, Uj−rD Uj≤Uj<0, contradicting a nonnegative right side. Nonnegative boundary data ensure the negative minimum could not lie at a boundary.</details>

### PDE-NUM-E005 — Crank–Nicolson factor
At r=2 and θ=π, calculate the Crank–Nicolson amplification.
<details><summary>Hint 1</summary>Its numerator is 1−4.</details>
<details><summary>Hint 2</summary>Its denominator is 1+4.</details>
<details><summary>Full solution</summary>The factor is −3/5. Its magnitude is below one, so this mode damps in norm but alternates sign. That fact alone neither proves nor disproves positivity for every nonnegative vector; the four-node spike example supplies a direct positivity counterexample.</details>

### PDE-NUM-E006 — Courant mesh
For c=3 and h=1/10, give a time step satisfying strict s<1.
<details><summary>Hint 1</summary>One needs k<h/c.</details>
<details><summary>Hint 2</summary>h/c=1/30.</details>
<details><summary>Full solution</summary>For example k=1/60 gives s=1/2. The strict energy lower bound then has velocity factor (1−s²)/2=3/8. The limiting step 1/30 is outside that strict coercivity statement.</details>

### PDE-NUM-E007 — Wave start
For zero initial velocity and source, why is U1=f+k²c²Dh²f/2 preferable to U1=f?
<details><summary>Hint 1</summary>The PDE supplies a nonzero initial acceleration.</details>
<details><summary>Hint 2</summary>Use the second-order time Taylor formula.</details>
<details><summary>Full solution</summary>The exact first step contains k²utt(0)/2=k²c²f''/2. The centered spatial replacement approximates that term consistently. Setting U1=f discards it and can spoil the intended global order or excite a different temporal component.</details>

### PDE-NUM-E008 — Upwind shift
What does the upwind method do when ν=1?
<details><summary>Hint 1</summary>The central weight becomes zero.</details>
<details><summary>Hint 2</summary>The left-neighbor weight becomes one.</details>
<details><summary>Full solution</summary>It performs Uj^{n+1}=Uj−1^n, a one-cell right shift. Since vk=h, this matches exact constant-speed advection at the grid points. It is a special mesh match, not a general high-order accuracy result.</details>

### PDE-NUM-E009 — Centered advection
For ν=1/2 and θ=π/2, compute the squared magnitude of the centered-forward amplification.
<details><summary>Hint 1</summary>sinθ=1.</details>
<details><summary>Hint 2</summary>Use 1+ν²sin²θ.</details>
<details><summary>Full solution</summary>The squared magnitude is 5/4>1, so its magnitude exceeds one and the corresponding mode is amplified. Repeating the step creates geometric growth.</details>

### PDE-NUM-E010 — Discrete conservation
Explain why shared numerical fluxes cancel in a periodic conservative update.
<details><summary>Hint 1</summary>Sum every right flux and every left flux over all cells.</details>
<details><summary>Hint 2</summary>Periodic index shifting gives the same sum twice.</details>
<details><summary>Full solution</summary>Σ(Fj+1/2−Fj−1/2)=0 because the two sums contain identical interfaces. Hence the total discrete amount is unchanged without sources. This algebra does not independently establish entropy admissibility or convergence.</details>

### PDE-NUM-E011 — Smoothness failure
Why can the stated O(k+h²) heat residual bound fail uniformly at initial time for rough data?
<details><summary>Hint 1</summary>Identify its derivative constants.</details>
<details><summary>Hint 2</summary>Positive-time smoothing need not bound them down to time zero.</details>
<details><summary>Full solution</summary>The bound uses uniform Mtt and M4 over the entire grid region. Rough or incompatible initial data can make these derivatives nonexistent or unbounded as t→0, even if the solution is smooth for every t>0. A separate weaker-data or initial-layer estimate is then needed.</details>

### PDE-NUM-E012 — Different guarantees
A scheme is a square-norm contraction. Does that alone prove positivity, conservation and convergence to a nonlinear entropy solution?
<details><summary>Hint 1</summary>Recall the Crank–Nicolson spike and the expansion shock.</details>
<details><summary>Hint 2</summary>Each property has a different defining identity or inequality.</details>
<details><summary>Full solution</summary>No. The spike example separates norm stability from positivity, while a conservation identity requires flux cancellation and entropy convergence requires additional admissibility and limit arguments. One proved norm estimate cannot replace all these distinct conditions.</details>

## Sources and scope

This is original finite-difference exposition using the classical PDE and numerical-analysis syllabus as benchmarks. Stability, positivity and convergence claims are proved for their stated meshes, norms and smoothness. No runtime study, floating-error enclosure or nonlinear weak convergence result is inferred from the exact update algebra.

## Summary

Consistency bounds the residual of an exact smooth solution; stability controls its accumulation. Explicit heat needs a mesh ratio, implicit schemes distinguish norm stability from positivity, and centered waves need correct initialization plus a Courant-qualified energy argument. Upwind transport preserves order under its mesh restriction while centered-forward transport can amplify errors. Boundaries, fluxes, aliases and weak-solution selection remain part of the problem being approximated, preparing the separate L4 continuation.
