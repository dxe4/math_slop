var e=`---
parent_id: book-differential-equations-verified-dynamics
chapter_id: nonlinear-stability-bifurcation
title: Nonlinear Stability and Bifurcation
level: graduate
estimated_minutes: 270
license: CC BY-SA 4.0
---

# Nonlinear Stability and Bifurcation

Nonlinear systems can have several equilibria, invariant barriers, periodic orbits, and parameter thresholds that no single formula reveals. Stability theory turns inequalities and geometry into conclusions about whole families of trajectories. Bifurcation theory then asks how those conclusions change as parameters move.

## 1. Stability definitions with quantifiers

Let z star be an equilibrium of the autonomous system z'=f(z), and let Phi_t(z0) denote its flow where defined.

The equilibrium is **Lyapunov stable** when, for every epsilon positive, there exists delta positive such that

$$\\|z_0-z_*\\|<\\delta.$$

implies the solution exists for all t nonnegative and

$$\\|\\Phi_t(z_0)-z_*\\|<\\epsilon.$$

for every t nonnegative.

It is **locally attractive** if some neighborhood has trajectories converging to z star. It is **asymptotically stable** if it is both stable and locally attractive. It is **exponentially stable** if constants M, alpha, and rho positive give

$$\\|\\Phi_t(z_0)-z_*\\|\\le M e^{-\\alpha t}\\|z_0-z_*\\|.$$

whenever the initial displacement is below rho.

Attraction alone does not imply stability in arbitrary dynamical systems. The stability clause prevents trajectories from making large excursions before returning. Exponential stability is stronger than asymptotic stability: x'=-x cubed approaches zero only algebraically.

These definitions depend on forward time. A stable equilibrium forward is unstable for the reversed flow unless it is neutral in a special way.

## 2. Lyapunov’s direct method

A continuously differentiable function V near z star is positive definite when V(z star)=0 and V(z)>0 nearby away from z star. Its orbital derivative is

$$\\dot V(z)=\\nabla V(z)\\cdot f(z).$$

**Theorem 6.1 (Stability).** If V is positive definite and V dot is nonpositive near the equilibrium, then the equilibrium is stable, provided a small sublevel set is contained in the theorem’s domain.

**Proof idea.** Choose a target sphere of radius epsilon. Positivity and compactness give a positive minimum m of V on that sphere. Continuity at the equilibrium lets us choose delta so V(z0)<m. Since V cannot increase, the trajectory cannot reach the sphere, where V would be at least m. A continuation argument inside a compact sublevel set keeps the solution defined.

If V dot is negative definite, the equilibrium is locally asymptotically stable. To prove attraction, compactness gives a uniform negative bound away from a smaller inner neighborhood; otherwise V would decrease indefinitely below zero. A rigorous proof tracks the trajectory between sublevel sets.

### Scalar example

For x'=-x cubed, take V=x squared/2. Then

$$\\dot V=-x^4,$$

negative away from zero, so zero is asymptotically stable. No constants M and alpha can make exponential decay hold locally for all time: the exact magnitude behaves like one over the square root of time.

### A coupled nonlinear example

Consider

$$\\begin{aligned}x'&=-x+y-x(x^2+y^2),\\\\y'&=-x-y-y(x^2+y^2).\\end{aligned}$$

For V=(x squared+y squared)/2,

$$\\dot V=xx'+yy'=-x^2-y^2-(x^2+y^2)^2.$$

Thus the origin is globally asymptotically stable. Because V is radially unbounded, its sublevel sets are compact and trap every trajectory. The inequality V dot<=-2V also yields exponential decay by Gronwall.

## 3. LaSalle’s invariance principle

Negative definiteness can be too much to ask. In a damped mechanical system, energy derivative may vanish whenever velocity is zero even away from equilibrium.

**LaSalle principle, finite-dimensional version.** Let Omega be a compact positively invariant set. Suppose V is continuously differentiable and V dot<=0 on Omega. Then every trajectory in Omega approaches the largest invariant subset of

$$E=\\{z\\in\\Omega:\\dot V(z)=0\\}.$$

“Approaches” means distance to that invariant subset tends to zero. It does not say which point is selected if the subset contains many orbits.

For a damped pendulum

$$\\theta'=\\omega,\\qquad\\omega'=-\\sin\\theta-c\\omega$$

with c positive, energy

$$V=\\tfrac12\\omega^2+1-\\cos\\theta$$

has V dot=-c omega squared. On a compact sublevel below the upright separatrix, E has omega=0. Invariance also requires sin theta=0. Within the chosen sublevel only the downward equilibrium remains, so trajectories approach it. On the full cylinder, the upright equilibrium also belongs to E and must be treated.

Compactness is material. A decreasing function does not prevent escape if its sublevel sets are unbounded.

## 4. Linearization theorem and its boundary

Shift an equilibrium to zero and write

$$z'=Az+r(z),$$

where \\(A=Df(0)\\) and \\(\\|r(z)\\|/\\|z\\|\\) tends to zero as \\(z\\) tends to zero.

**Theorem 6.2 (Linearized stability).**

- If every eigenvalue of A has negative real part, zero is locally exponentially stable.
- If A has an eigenvalue with positive real part, zero is unstable.

One proof of the stable case chooses positive definite \\(Q\\) and solves the Lyapunov equation \\(A^{\\mathsf T}P+PA=-Q\\). The quadratic \\(V=z^{\\mathsf T}Pz\\) decreases for the linear system. Because \\(r\\) is smaller than a constant times \\(\\|z\\|\\) near zero, the nonlinear remainder contributes a term that can be absorbed by the negative quadratic term.

The unstable case projects onto an unstable direction or uses the reversed-time stable structure.

When no eigenvalue has positive real part and at least one has zero real part, linearization alone is inconclusive. Examples:

$$\\begin{aligned}
x'&=-x^3 &&\\text{is asymptotically stable at zero};\\\\
x'&=x^3 &&\\text{is unstable at zero};\\\\
x'&=0 &&\\text{has every point as an equilibrium}.
\\end{aligned}$$

All have derivative zero at the origin. Higher-order terms decide.

## 5. Hyperbolicity and local orbit geometry

An equilibrium is **hyperbolic** if its Jacobian has no eigenvalue on the imaginary axis. The stable subspace is spanned by generalized eigendirections with negative real parts; the unstable subspace uses positive real parts.

The stable manifold theorem supplies nonlinear invariant manifolds tangent to these subspaces. Points on the local stable manifold approach the equilibrium forward; points on the unstable manifold approach it backward.

Hartman–Grobman says a flow near a hyperbolic equilibrium is locally topologically equivalent to its linearization (with precise conjugacy formulations depending on how the local flow is restricted). A homeomorphism maps local orbits and preserves time orientation. It need not preserve distances, derivatives, geometric speeds, or energy. The result is local.

For a saddle, the stable and unstable manifolds are separatrices. Their global intersections can organise complicated dynamics. A plotted near-intersection is not proof of a homoclinic orbit; numerical error along unstable directions demands interval, validated, or analytical methods for rigorous claims.

## 6. Limit sets and planar restrictions

For a bounded forward trajectory, its omega-limit set contains accumulation points as t tends to infinity. Under a continuous flow with precompact orbit, this set is nonempty, compact, connected, and invariant.

In the plane, the Poincaré–Bendixson theorem greatly restricts omega-limit sets. In a common form: if a nonempty compact omega-limit set of a continuously differentiable planar flow contains no equilibrium, then it is a periodic orbit. Exact hypotheses and variants matter.

The theorem does not apply directly:

- in three or more state dimensions;
- to discrete maps;
- when the orbit is unbounded;
- when uniqueness fails;
- when the limiting set contains equilibria and connecting orbits.

### Bendixson–Dulac exclusion

If a simply connected planar region has divergence of Bf with one strict sign for a continuously differentiable multiplier B, then no periodic orbit lies entirely in that region. For B=1, integrate divergence over the orbit’s interior and use Green’s theorem; tangency of the vector field to the boundary makes the flux zero, contradicting one-signed divergence.

The simply connected condition prevents holes from invalidating the enclosed-region argument.

## 7. What a bifurcation claim contains

Consider z'=f(z,mu). A **bifurcation value** is a parameter where the qualitative equivalence class of the dynamics changes. A diagram of equilibria is evidence, but a local theorem usually requires:

- an equilibrium branch;
- loss of hyperbolicity at the candidate value;
- a transversality condition showing a derivative actually crosses zero;
- a nondegeneracy condition ensuring the leading nonlinear term is present;
- a statement of allowed coordinate and parameter changes.

Hyperbolic equilibria persist under small smooth perturbations by the implicit function theorem, so local equilibrium bifurcations require nonhyperbolicity. Nonhyperbolicity alone is not sufficient. For example, in $x'=-x^3-\\mu^2 x$, the origin is nonhyperbolic at $\\mu=0$ but remains the unique locally asymptotically stable equilibrium on both sides; the parameter merely touches the hyperbolicity boundary without a local phase-portrait change.

## 8. Saddle-node bifurcation

The normal form

$$x'=\\mu-x^2$$

has equilibria x=plus or minus square root of mu when mu positive, one repeated equilibrium at mu zero, and none when mu negative. The derivative with respect to x is -2x, so the positive branch is stable and negative branch unstable.

A local saddle-node theorem begins at f(0,0)=0 with

$$f_x(0,0)=0,\\qquad f_\\mu(0,0)\\ne0,\\qquad f_{xx}(0,0)\\ne0.$$

After smooth changes of coordinates and scaling, the leading dynamics resemble plus or minus mu plus or minus x squared. The theorem is local: it does not count distant equilibria.

Slowly drifting mu through the threshold can create delayed departure, so a static bifurcation diagram does not fully describe a nonautonomous passage.

## 9. Transcritical and pitchfork forms

The transcritical normal form

$$x'=\\mu x-x^2=x(\\mu-x)$$

has branches x=0 and x=mu that cross and exchange stability. A generic perturbation can destroy the exact crossing; physical constraints or invariant boundaries often support it.

The supercritical pitchfork

$$x'=\\mu x-x^3$$

has x=0 and, for mu positive, x=plus or minus square root of mu. Reflection symmetry x maps to -x protects the paired branches. Adding a small constant imperfection unfolds the pitchfork into saddle-node behaviour. Therefore pitchfork claims should name the symmetry or conservation structure.

For the subcritical sign x'=mu x+x cubed, nonzero branches exist on the other side and are locally unstable. Higher-order stabilizing terms may create hysteresis globally, but the cubic local form alone does not guarantee a bounded attracting branch.

## 10. Hopf boundary, stated but not overclaimed

In a parameterized planar or higher-dimensional system, suppose a simple complex conjugate eigenvalue pair crosses the imaginary axis while all other eigenvalues stay away. A Hopf theorem also requires nonzero crossing speed and a nonzero first Lyapunov coefficient. It then yields a local branch of periodic solutions.

The coefficient’s sign, under a declared convention, determines supercritical versus subcritical type and cycle stability. Merely seeing trace change sign with positive determinant is not enough. Degenerate Hopf points, resonances, nonsmooth systems, or parameter-dependent transformations need other theory.

The amplitude of a generic small Hopf cycle scales like the square root of parameter distance, while its period approaches the linear oscillation period. These are asymptotic local statements.

## 11. Stability of sets and periodic orbits

An invariant set can be stable even when it is not a point. A periodic orbit has one neutral direction corresponding to phase: starting slightly ahead on the same orbit never converges to the same clocked point. Orbital stability measures distance to the whole cycle.

A Poincaré section cuts trajectories transversely and defines a return map. A periodic orbit becomes a fixed point of that map. Multipliers inside the unit circle, excluding the trivial flow multiplier handled by the section, give local orbital attraction.

Choosing a section requires transversality and a well-defined return. Grazing events, multiple returns, or discontinuities can make the map nonsmooth or undefined.

## 12. Stability is not robustness

A nominal equilibrium may be asymptotically stable yet fragile under:

- small parameter changes near a bifurcation;
- unmodeled delays or fast modes;
- persistent disturbances;
- state constraints or impacts;
- noisy observation and feedback;
- transient amplification in nonnormal linearization.

Input-to-state stability bounds the state in terms of initial condition and input magnitude. Structural stability concerns qualitative equivalence under perturbations of the vector field. Robust control quantifies families of plant uncertainty. These require definitions beyond Lyapunov stability.

## A scalar saddle-node equilibrium theorem can be proved by implicit charts

Assume a smooth scalar field satisfies $f(0,0)=f_x(0,0)=0$, with both the parameter derivative and second state derivative nonzero. The implicit function theorem, applied using the parameter derivative, writes the nearby equilibrium set exactly as $\\mu=m(x)$. Differentiate the identity $f(x,m(x))=0$. Its first derivative gives $m'(0)=0$, and its second derivative gives

$$m''(0)=-\\frac{f_{xx}(0,0)}{f_\\mu(0,0)}\\ne0.$$

Thus the parameter along the equilibrium curve has a nondegenerate extremum. For a smooth field, Taylor's integral factorisation writes its parameter difference as $x^2g(x)$ with smooth nonzero $g$ near zero. The coordinate $u=x\\sqrt{|g(x)|}$ has nonzero derivative at zero and is locally invertible. In that coordinate the equilibrium equation is exactly the parameter difference equal to either plus or minus the square of $u$.

This proves the two-one-zero equilibrium count on the appropriate parameter sides. It also determines stability of the two simple branches. Along the curve, differentiating the equilibrium identity gives $f_x=-f_\\mu m'$. The parameter derivative keeps one nonzero sign, while the curve slope changes sign across its extremum. The two simple roots therefore have opposite derivative signs, one attracting and one repelling in the scalar phase line.

At the double root, the leading nonzero state term is quadratic, so one-sided attraction does not supply Lyapunov stability from a full two-sided neighbourhood. The equilibrium-count chart does not by itself prove that the entire vector field is exactly the written quadratic normal form with the same physical clock. A dynamical normal-form theorem additionally specifies allowed state, parameter and time transformations. The distinction prevents an exact statement about the equilibrium set from being misreported as an exact global solution formula.

## An invariant branch makes transcritical exchange possible

Suppose the field is explicitly of the form $f(x,\\mu)=xg(x,\\mu)$ near zero, with $g(0,0)=0$ and both $g_x(0,0)$ and $g_\\mu(0,0)$ nonzero. The factor gives an equilibrium branch at zero for every nearby parameter. The implicit function theorem gives a second branch $x=h(\\mu)$ from $g=0$, with derivative $h'(0)=-g_\\mu/g_x\\ne0$. These branches cross transversely in the parameter-state diagram.

At the zero branch the state derivative is $g(0,\\mu)$, whose sign changes with the parameter derivative. At the second branch the derivative is $h(\\mu)g_x(h(\\mu),\\mu)$. Its leading sign is opposite, because the branch derivative relation gives the leading product $-g_\\mu(0,0)\\mu$. Hence the two simple branches exchange stability.

The invariant factor is essential. Adding a constant imperfection generally removes the exact zero branch, so the same calculation cannot be applied. A conservation law, boundary invariance or modelling constraint can enforce such a branch, but the mechanism must be named. A diagram of two nearly crossing numerical branches is not a substitute for that structural hypothesis.

## A symmetric pitchfork has a different branch equation

For a precise sufficient setup, assume $f(x,\\mu)=xg(x^2,\\mu)$ with a smooth function of its two displayed arguments. Suppose $g(0,0)=0$, its parameter derivative is positive and its first argument derivative is negative. The field is odd in the state, so reflection preserves its equilibrium structure.

Apply the implicit function theorem to $g(s,\\mu)=0$. It gives $s=h(\\mu)$ with positive derivative at zero. Positive parameter therefore gives two small nonzero branches $x=\\pm\\sqrt{h(\\mu)}$, whereas negative parameter gives no such real branches locally. At a nonzero root the state derivative is $2x^2g_s<0$, so both branches attract. At zero the derivative is $g(0,\\mu)$, negative before the crossing and positive after it. This proves the supercritical pitchfork's local count and stability under the stated explicit structure.

Changing the cubic sign reverses the stability of the small paired branches and can place them on the other side. Reflection symmetry alone is insufficient if the decisive coefficient vanishes. Conversely, a small symmetry-breaking constant can unfold the paired branches into an imperfect diagram. The parameter, invariant structure and nondegeneracy decide which theorem is available.

## Exact radial models separate a Hopf branch from its global continuation

**Worked example: two cycles and a stable origin.** On the positive-radius plane let angular speed be a fixed positive constant and take

$$r'=r(\\mu+ar^2-r^4),\\qquad a>0.$$

Writing squared radius as $s$, a nonzero periodic circle solves $\\mu+as-s^2=0$. If the parameter lies strictly between minus one quarter of the squared coefficient and zero, there are two positive roots

$$s_\\pm=\\frac{a\\pm\\sqrt{a^2+4\\mu}}2.$$

At such a circle the radial derivative is $2s(a-2s)$. The smaller circle repels and the larger attracts. The origin is also stable because its linear radial rate is negative. Its basin and the outer attracting basin are separated by the inner repelling circle. This is a direct exact calculation, not a global conclusion inferred from the local Hopf eigenvalues alone.

At the negative parameter endpoint the two circles meet in a nonhyperbolic fold of cycles. At zero the smaller circle meets the origin. The fixed positive angular speed gives each existing circle the corresponding full-turn period. The quintic term has supplied the outer amplitude stabilisation that a cubic subcritical local form by itself does not guarantee. If the positive cubic coefficient is also allowed to tend to zero, degeneracy changes the amplitude balance and requires a two-parameter analysis.

## What the coefficient calculation still does not identify

The proofs above establish local equilibrium counts and stability, or exact properties of specified radial systems. They do not determine a distant basin boundary, a delayed response under a drifting parameter, or an empirical causal effect of changing a fitted coefficient. Slowly varying parameters make the problem nonautonomous; noise changes the state law; impacts and saturation can violate the smooth hypotheses. Each extension needs its own model and theorem.

The [stable-manifold proof](hyperbolic-equilibria-stable-manifolds.md) and [Hartman–Grobman proof](structural-stability-hartman-grobman.md) now supply the local hyperbolic results previously mentioned only as passages. The [centre-manifold chapter](center-manifolds-normal-forms.md) separates finite jets and resonant reductions. [Floquet theory](periodic-orbits-planar-limits.md) and [planar limit sets](planar-limit-sets.md) give distinct tools for cycles and compact limiting motion. This bifurcation chapter retains the earlier stability material and solutions as bridges, while its primary task is the exact conditional change of nearby dynamics with parameters.

## Worked problems

<a id="nonlinear-stability-bifurcation-ex-1"></a>

### 1. A Lyapunov sublevel

Suppose V is positive definite near zero and V dot<=0. Explain why the proof chooses a minimum of V on the sphere of radius epsilon rather than assuming V is radial.

<details><summary>Hint 1</summary>

A positive-definite function need not be radial.

</details>

<details><summary>Hint 2</summary>

Its positive minimum on a compact target sphere creates a barrier level.

</details>

<details><summary>Full solution</summary>

**Solution.** \\(V\\) need not depend only on \\(\\|z\\|\\). Continuity and compactness of the sphere give a positive minimum because \\(V\\) is positive away from zero. An initial sublevel below that minimum cannot cross the sphere while \\(V\\) is nonincreasing. Radial symmetry is unnecessary.

</details>

<a id="nonlinear-stability-bifurcation-ex-2"></a>

### 2. A nonhyperbolic decision

Classify zero for x'=-x to the fifth.

<details><summary>Hint 1</summary>

The derivative of the scalar field at zero vanishes.

</details>

<details><summary>Hint 2</summary>

Use a quadratic Lyapunov function and inspect its higher-order orbital derivative.

</details>

<details><summary>Full solution</summary>

**Solution.** Linearization is zero and inconclusive. With V=x squared/2, V dot=-x to the sixth, negative away from zero. Thus zero is asymptotically stable. Decay is not exponential; separation gives algebraic decay.

</details>

<a id="nonlinear-stability-bifurcation-ex-3"></a>

### 3. Bendixson boundary

Why can constant negative divergence exclude a periodic orbit in the whole plane?

<details><summary>Hint 1</summary>

A hypothetical simple cycle bounds an interior region in the plane.

</details>

<details><summary>Hint 2</summary>

The field has zero normal flux on its own trajectory, contradicting the negative area-divergence integral.

</details>

<details><summary>Full solution</summary>

**Solution.** Any hypothetical simple periodic orbit encloses a simply connected bounded region. Green’s theorem equates the integral of divergence over that region to outward flux across the orbit. The vector field is tangent to its trajectory, so flux is zero; strictly negative divergence gives a negative area integral, a contradiction.

</details>

<a id="nonlinear-stability-bifurcation-ex-4"></a>

### 4. Pitchfork repair

“Every zero eigenvalue with a cubic stabilizing term produces a pitchfork.”

<details><summary>Hint 1</summary>

A zero eigenvalue alone is only a failure of hyperbolicity.

</details>

<details><summary>Hint 2</summary>

An invariant equilibrium branch, symmetry and the relevant nonzero unfolding coefficients must also be supplied.

</details>

<details><summary>Full solution</summary>

**Solution.** A pitchfork also needs an equilibrium branch and usually reflection symmetry that removes constant and quadratic unfolding terms. Generic symmetry-breaking perturbations replace the exact pitchfork by imperfect saddle-node structure.

</details>

<a id="nonlinear-stability-bifurcation-ex-5"></a>

### 5. One derivative is not a Hopf theorem

At a planar equilibrium, trace crosses zero and determinant stays positive. What remains to check?

<details><summary>Hint 1</summary>

A trace sign change describes only the linear pair.

</details>

<details><summary>Hint 2</summary>

Check the smooth branch, crossing speed and nonzero cubic amplitude coefficient before a Hopf conclusion.

</details>

<details><summary>Full solution</summary>

**Solution.** Verify the equilibrium branch, that the conjugate pair is simple, crossing speed is nonzero, the vector field has enough smoothness, and the first Lyapunov coefficient is nonzero. Its sign determines the local cycle type under a stated convention. Global existence or uniqueness of cycles does not follow.

</details>

<a id="nonlinear-stability-bifurcation-ex-6"></a>

### 6. Exponential linearization

For $x'=-2x+x^3$, classify zero and give a local region where the sign is restoring.

<details><summary>Hint 1</summary>

Use the negative derivative at the equilibrium for the local theorem.

</details>

<details><summary>Hint 2</summary>

Factor the field to locate an explicit interval where its sign points toward zero.

</details>

<details><summary>Full solution</summary>

**Solution.** The derivative at zero is $-2$, so zero is locally exponentially stable. Also $x'=x(x^2-2)$ points toward zero whenever $0<|x|<\\sqrt{2}$. This sign interval is a basin lower bound, not necessarily the full global description.

</details>

<a id="nonlinear-stability-bifurcation-ex-7"></a>

### 7. Unstable linear direction

What follows if a Jacobian has eigenvalues $-1,0,3$?

<details><summary>Hint 1</summary>

One expanding eigendirection already rules out stability.

</details>

<details><summary>Hint 2</summary>

A centre eigenvalue does not cancel an unstable linear direction.

</details>

<details><summary>Full solution</summary>

**Solution.** The positive eigenvalue is enough for instability. The centre eigenvalue does not rescue the equilibrium; centre analysis is needed only for conclusions not already decided by the unstable direction.

</details>

<a id="nonlinear-stability-bifurcation-ex-8"></a>

### 8. LaSalle set

Suppose $V'= -x^2$ for a planar system. What extra step is needed for attraction?

<details><summary>Hint 1</summary>

The zero set of the energy derivative need not be invariant.

</details>

<details><summary>Hint 2</summary>

Determine which entire trajectories can stay on that line.

</details>

<details><summary>Full solution</summary>

**Solution.** Determine the largest invariant subset of \${x=0}$. If it is only the equilibrium, LaSalle gives attraction on a compact invariant sublevel; if another orbit remains there, strict attraction to the point does not follow.

</details>

<a id="nonlinear-stability-bifurcation-ex-9"></a>

### 9. Sublevel containment

Why must a Lyapunov sublevel remain inside the region where derivative estimates hold?

<details><summary>Hint 1</summary>

The derivative estimate has a domain.

</details>

<details><summary>Hint 2</summary>

Choose a level below the minimum on its boundary so the trajectory cannot enter an unproved region.

</details>

<details><summary>Full solution</summary>

**Solution.** Otherwise the proof may carry a trajectory into a region where positivity or $V'\\leq 0$ was never established. Choose the level below the minimum of V on the neighborhood boundary.

</details>

<a id="nonlinear-stability-bifurcation-ex-10"></a>

### 10. Saddle-node branches

For $x'=\\mu-x^2$, classify both equilibria at mu>0.

<details><summary>Hint 1</summary>

Solve the equilibrium equation on the positive-parameter side.

</details>

<details><summary>Hint 2</summary>

Evaluate the state derivative at each of its two simple roots.

</details>

<details><summary>Full solution</summary>

**Solution.** Equilibria are $\\pm \\sqrt{\\mu}$. Derivative is $-2x$; the positive branch has negative derivative and is stable, while the negative branch is unstable.

</details>

<a id="nonlinear-stability-bifurcation-ex-11"></a>

### 11. Transcritical exchange

For $x'=x(\\mu-x)$, classify zero and x=mu on either side of zero.

<details><summary>Hint 1</summary>

There are two explicit equilibrium branches.

</details>

<details><summary>Hint 2</summary>

Their derivatives have opposite parameter signs, so their scalar stability exchanges.

</details>

<details><summary>Full solution</summary>

**Solution.** At zero the derivative is $\\mu$; it is stable for $\\mu<0$ and unstable for $\\mu>0$. At $x=\\mu$ the derivative is $-\\mu$, giving the opposite classification. They exchange stability.

</details>

<a id="nonlinear-stability-bifurcation-ex-12"></a>

### 12. Imperfect pitchfork

What qualitative effect can adding epsilon to $x'=\\mu x-x^3$ have?

<details><summary>Hint 1</summary>

A constant forcing breaks odd state symmetry.

</details>

<details><summary>Hint 2</summary>

The exact central branch and paired-branch hypothesis no longer hold.

</details>

<details><summary>Full solution</summary>

**Solution.** It breaks reflection symmetry and removes the exact central branch/crossing. The branch diagram generally unfolds into saddle-node structure; the symmetric pitchfork theorem no longer applies.

</details>

<a id="nonlinear-stability-bifurcation-ex-13"></a>

### 13. Dulac annulus boundary

Why does a one-signed divergence argument need care on an annulus?

<details><summary>Hint 1</summary>

The interior of a closed curve can include a missing hole.

</details>

<details><summary>Hint 2</summary>

Green’s theorem needs the divergence hypothesis throughout that interior or extra boundary terms.

</details>

<details><summary>Full solution</summary>

**Solution.** A periodic curve can enclose the hole, and the region to which Green’s theorem would apply is not contained in the annular domain. Simple connectivity prevents this missing-interior obstruction.

</details>

<a id="nonlinear-stability-bifurcation-ex-14"></a>

### 14. Omega-limit compactness

Why is boundedness insufficient if the flow domain is open with a removed point?

<details><summary>Hint 1</summary>

An ambient accumulation point can lie outside the open flow domain.

</details>

<details><summary>Hint 2</summary>

Bounded coordinates do not imply compact containment in that domain.

</details>

<details><summary>Full solution</summary>

**Solution.** The orbit may approach the removed boundary point, so its closure is not a compact subset of the flow domain and invariance/continuation arguments can fail.

</details>

<a id="nonlinear-stability-bifurcation-ex-15"></a>

### 15. Orbital distance

How should numerical error to a periodic orbit be measured when phase drifts?

<details><summary>Hint 1</summary>

A phase displacement can persist along the same geometric cycle.

</details>

<details><summary>Hint 2</summary>

Compare distance to the orbit set or matched section returns rather than identical clock times.

</details>

<details><summary>Full solution</summary>

**Solution.** Minimize state distance over phase or compare section returns, rather than comparing points at identical clock time. A tiny frequency error creates large clocked error after many periods without leaving the orbit geometrically.

</details>

<a id="nonlinear-stability-bifurcation-ex-16"></a>

### 16. Bifurcation coefficient diagnostic

A computed first Lyapunov coefficient is $10^{-9}$ under coefficient uncertainty $10^{-6}$. What is honest?

<details><summary>Hint 1</summary>

Compare the coefficient sign margin with its uncertainty.

</details>

<details><summary>Hint 2</summary>

A magnitude much smaller than the uncertainty does not determine an exact nonzero sign.

</details>

<details><summary>Full solution</summary>

**Solution.** Its sign is unresolved at the uncertainty scale. Treat the point as potentially degenerate, refine/validate derivatives, and do not label supercritical or subcritical from the printed number.

</details>

<a id="nonlinear-stability-bifurcation-ex-17"></a>

### 17. Parameter sweep error

Why can coarse continuation miss a saddle-node?

<details><summary>Hint 1</summary>

A branch may turn with respect to the chosen parameter.

</details>

<details><summary>Hint 2</summary>

A tangent-normalised chart can remain regular where the ordinary parameter graph fails.

</details>

<details><summary>Full solution</summary>

**Solution.** The equilibrium branch turns in parameter, so simple parameter stepping may jump branches or fail past the fold. Use pseudo-arclength continuation, residuals, tangent monitoring, and step refinement.

</details>

<a id="nonlinear-stability-bifurcation-ex-18"></a>

### 18. Local-versus-global repair

Repair: “A supercritical Hopf cycle attracts every trajectory.”

<details><summary>Hint 1</summary>

The Hopf theorem is a local branch and local stability theorem.

</details>

<details><summary>Hint 2</summary>

Other invariant sets or escaping trajectories can occur outside its neighbourhood.

</details>

<details><summary>Full solution</summary>

**Solution.** The theorem yields a small local branch and its local orbital stability under nondegeneracy. Other equilibria, cycles, escape, or basin boundaries may exist globally.

</details>

<a id="nonlinear-stability-bifurcation-ex-19"></a>

### 19. Lyapunov numerical audit

How can a computed V trajectory support, but not prove, a certificate?

<details><summary>Hint 1</summary>

Distinguish evaluating a certificate at sampled states from proving its uniform sign.

</details>

<details><summary>Hint 2</summary>

The analytic orbital derivative and a controlled domain remain necessary for a theorem.

</details>

<details><summary>Full solution</summary>

**Solution.** Evaluate the analytic $\\nabla V \\cdot f$ independently, sample the declared domain, refine time steps, and report maximum positive drift and roundoff scale. The proof still requires a uniform symbolic or validated sign bound.

</details>

<a id="nonlinear-stability-bifurcation-ex-20"></a>

### 20. Stability claim ledger

State the ingredients for a robust local nonlinear-stability claim.

<details><summary>Hint 1</summary>

List the model, domain and type of stability before its evidence.

</details>

<details><summary>Hint 2</summary>

Add basin, uncertainty and numerical qualifications only when their hypotheses were supplied.

</details>

<details><summary>Full solution</summary>

**Solution.** Name equilibrium and parameter, neighborhood, solution regularity, Lyapunov/linearization hypotheses, stability type and norm, basin lower bound, disturbance/uncertainty class if any, and which numerical evidence is merely diagnostic.

</details>

## Dependency ledger

- Compact sublevel geometry converted monotone V into stability.
- Negative definiteness or LaSalle’s invariant-set argument supplied attraction.
- A Lyapunov equation controlled the nonlinear remainder in the hyperbolic stable case.
- Center eigenvalues marked the boundary of linearization, not a conclusion.
- Planarity and compactness powered Poincaré–Bendixson restrictions.
- Green’s theorem and simple connectivity powered Bendixson–Dulac exclusion.
- Implicit-function persistence showed why local bifurcations need nonhyperbolicity.
- Transversality, nondegeneracy, and symmetry distinguished genuine normal forms from suggestive plots.
`;export{e as default};