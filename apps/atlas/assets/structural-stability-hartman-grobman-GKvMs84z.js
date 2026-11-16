var e=`---
parent_id: book-differential-equations-verified-dynamics
chapter_id: structural-stability-hartman-grobman
title: "Hartman–Grobman and Local Structural Stability"
level: graduate
estimated_minutes: 420
license: CC BY-SA 4.0
---

# Hartman–Grobman and Local Structural Stability

Near a hyperbolic equilibrium, nonlinear trajectories have the same local topological evolution as their linearisation. This statement concerns a homeomorphism of states and the trajectories while they remain in the chosen neighbourhood. It does not identify physical distances, derivatives or global connecting orbits. This chapter proves a local time-preserving conjugacy through bounded corrections and then separates that result from global structural stability.

Required preparation is the stable/unstable exponential split from [stable manifolds](hyperbolic-equilibria-stable-manifolds.md), the contraction theorem on bounded continuous functions and continuous dependence for a globally Lipschitz ODE. The cutoff argument used there lets a sufficiently small local nonlinear remainder become bounded and globally Lipschitz with an arbitrarily small derivative norm. The proof below uses that extension and then returns to the original local equation.

## The claim and its domain

Let $z'=Az+f(z)$ near zero, with $f(0)=0$, $Df(0)=0$ and a continuously differentiable field. Assume the matrix $A$ is hyperbolic. The local Hartman–Grobman conclusion is that there is a homeomorphism fixing zero that sends the nonlinear flow to the linear flow, preserving time whenever the relevant orbit segment stays in the corresponding local domains.

One often uses a weaker orbit-equivalence formulation that preserves trajectories and time orientation while allowing a change of clock. The construction here gives the stronger time-preserving identity for this local hyperbolic-equilibrium setting. Neither formulation is a smooth-conjugacy theorem. A continuous inverse can distort rates and shapes substantially near the equilibrium.

Fix stable and unstable projections and exponential estimates with constants $K,a>0$. By shrinking the original neighbourhood and applying a smooth cutoff, make the extended nonlinear term bounded, with bound $M$, and globally Lipschitz with constant $\\epsilon$ so small that $2K\\epsilon/a<1$. The extension agrees with the original remainder in the inner neighbourhood. Its globally Lipschitz vector field has a complete flow for all real time by the linear-growth existence bound.

## The bounded Green operator

For a bounded continuous forcing $g$ on the whole time line, define

$$
(\\mathcal Gg)(t)=
\\int_{-\\infty}^t e^{A_s(t-s)}P_sg(s)\\,ds
-\\int_t^\\infty e^{A_u(t-s)}P_ug(s)\\,ds.
$$

Both integrals converge by the opposite exponential estimates. The operator norm on bounded continuous functions is at most $2K/a$, using the same product-space norm and projection convention as the stable-manifold proof. Differentiating the integrals gives $u'=Au+g$: the two endpoint terms sum to the entire forcing, because the stable and unstable projections sum to the identity.

It is the unique bounded solution. The difference of two such solutions is a homogeneous linear orbit bounded for all positive and negative time. Any nonzero stable component grows in negative time, and any nonzero unstable component grows in positive time. Hyperbolicity therefore forces that difference to be zero. Alternatively, variation of constants with past stable and future unstable endpoints derives the same integrals directly.

Translation of the forcing in time translates the solution. This follows either by changing variables in the integrals or by uniqueness of the bounded solution. That simple covariance will turn a correction at one initial state into a conjugacy along its entire trajectory.

## Sending a nonlinear orbit to a linear one

Take any complete orbit $x(t;\\xi)$ of the extended nonlinear system. Its nonlinear forcing $f(x(t;\\xi))$ is bounded by $M$, even if the orbit itself grows. Solve the bounded correction equation

$$u'=Au-f(x(t;\\xi))$$

by setting $u=-\\mathcal G[f(x(\\cdot;\\xi))]$. Then $y=x+u$ satisfies $y'=Ay$. Define the initial-state map by

$$H(\\xi)=\\xi+u(0).$$

The correction is uniformly bounded by $2KM/a$, so this map stays within that distance of the identity on the entire extended state space. More importantly, time translation of the orbit and uniqueness of its bounded correction give

$$H(\\varphi_t(\\xi))=e^{At}H(\\xi).$$

Thus the map intertwines the two evolutions. At this stage it has not yet been proved to be a homeomorphism. A continuous map taking trajectories to trajectories could collapse several nonlinear orbits onto one linear orbit; the inverse construction is the decisive additional step.

The map is continuous. On a finite time interval, ODE continuous dependence makes the forcing along nearby starts converge uniformly. In the defining correction integral, first truncate to such an interval. Its finite integral varies continuously. The omitted tails are uniformly small because the forcing has a common bound and the Green kernels decay exponentially. Letting the truncation grow establishes continuity of the full integral at time zero. This argument does not assume that nearby complete trajectories remain uniformly close for all time.

## Constructing the inverse by contraction

Start instead with a complete linear orbit $y(t)=e^{At}\\eta$. Seek a nonlinear orbit differing from it by a bounded function $w$. Its equation is

$$w'=Aw+f(y+w),\\qquad w=\\mathcal G[f(y+w)].$$

The last expression defines a contraction on bounded continuous functions on the entire real line. Its Lipschitz constant is at most $2K\\epsilon/a<1$, and boundedness of the nonlinear term ensures that it maps the space into itself. The contraction theorem gives a unique bounded correction. Differentiating the integral shows that $x=y+w$ is an actual nonlinear orbit. Define $J(\\eta)=\\eta+w(0)$.

Continuity of this inverse candidate deserves care. The complete linear trajectories from nearby initial points need not be uniformly close on the whole time line. One cannot invoke uniform parameter continuity in the bounded trajectory norm without proof. Instead iterate the contraction starting from the zero correction. At each finite iteration and fixed time, its value depends continuously on the initial linear state: apply dominated convergence to the integrable Green kernel and bounded nonlinear term. The contraction error converges geometrically with constants independent of the initial state, because the first correction has the common bound $2KM/a$. Evaluation at time zero is therefore a uniform limit of continuous finite-iteration maps. This proves continuity of $J$.

Now prove the two maps are inverses. If $x=y+w$ comes from this construction, its linearising correction is minus $w$, by uniqueness of bounded solutions of the correction equation. Hence $H(J(\\eta))=\\eta$. Conversely, begin with a nonlinear orbit and its linear image $y=x+u$. The difference $x-y=-u$ is bounded and satisfies the inverse fixed-point equation for that linear orbit. Uniqueness of the contraction fixed point gives $J(H(\\xi))=\\xi$.

Thus $H$ is a bijection with continuous inverse $J$, and the intertwining identity is a genuine global conjugacy for the extended small-Lipschitz problem. Since the zero orbit has zero forcing, its correction is zero and the homeomorphism fixes zero.

## Returning to the original equation

The extension agrees with the original nonlinear equation on the inner neighbourhood. Restrict the global homeomorphism to a sufficiently small neighbourhood of zero. Its image is another neighbourhood because it is a homeomorphism. For any original orbit segment remaining in the first neighbourhood, uniqueness identifies it with the extended orbit, so the same conjugacy identity holds on that segment. This proves the local Hartman–Grobman theorem stated at the start.

The cutoff has supplied a global proof device, not a global conjugacy claim for the original unmodified vector field. Once a trajectory leaves the region of agreement, its extended and original evolutions may differ. A local topological classification near an equilibrium therefore gives no count of distant equilibria, cycles, escapes or connecting trajectories.

There is also no derivative estimate for the homeomorphism in this argument. Its bounded displacement after cutoff says that corresponding extended orbits remain within a fixed absolute amount, but the corresponding linear initial state is $H(\\xi)$, not necessarily the same coordinate vector. Prediction from a prescribed physical initial state remains a separate error question.

## Equivalent topology can have different rates

**Worked example: scalar contractions.** Compare $x'=-x$ with $y'=-by$ for $b>0$. The homeomorphism $H(x)=\\operatorname{sign}(x)|x|^b$ satisfies $H(e^{-t}x)=e^{-bt}H(x)$. It preserves time exactly, yet the two coordinate magnitudes decay at different exponential rates. For $b\\ne1$, either the derivative at zero or that of the inverse fails to be finite and nonzero. A smooth diffeomorphism with a nonsingular derivative there is not supplied by this conjugacy.

**Worked example: a resonant correction loses differentiability.** For $x'=x$, $y'=2y+x^2$, put $v=y-x^2\\log|x|$ away from the vertical axis and extend the correction by zero at $x=0$. Differentiation gives $v'=2v$. The correction and its first derivative extend continuously across zero, but its second derivative contains a logarithmic singularity. Thus this explicit change is a local homeomorphism, indeed continuously differentiable with a continuously differentiable inverse, while failing twice differentiable regularity at the origin. The quadratic resonant term in the normal-form chapter explains the obstruction at that stronger coordinate class.

These examples show why spectral decay rates, Euclidean distances, curvature and physical amplitudes cannot be read off from a topological equivalence alone. The local orbit organisation is preserved; quantitative geometry requires stronger regularity and bounds on the coordinate change.

## Local structural stability of one hyperbolic equilibrium

Structural stability must name both a topology on perturbations and the region being compared. Near one hyperbolic equilibrium, sufficiently small continuously differentiable perturbations preserve a unique nearby equilibrium and the local topological flow type. Here is a direct argument for that local statement.

The linear matrix is invertible. Write a perturbed equilibrium equation as $Az+r(z)+g(z)=0$, where the original remainder has small derivative and the perturbation is small together with its derivative on a fixed small ball. Rewriting it as $z=-A^{-1}(r(z)+g(z))$ produces a contraction if the sum of derivative bounds times the inverse norm is below one. Smallness of the perturbation at zero makes that map send a suitable closed ball into itself. It therefore has one fixed point there. This proves nearby equilibrium existence and local uniqueness without assuming its position is unchanged.

Shift that equilibrium to zero. The new field differs from the original linear matrix by a remainder with small derivative, including the small change in its linear part. The bounded-correction proof did not require the derivative of its forcing to vanish exactly; it required only a sufficiently small global Lipschitz constant after cutoff. It therefore conjugates both the original and shifted perturbed fields locally to the same linear system. Composing the two local homeomorphisms gives their local equivalence.

For completeness, hyperbolicity itself has a finite perturbation margin. The resolvent $(i\\omega I-A)^{-1}$ is continuous on the real frequency axis and decays at large frequency, so its norm has a finite supremum. If a matrix perturbation norm is smaller than the reciprocal of that supremum, the Neumann inverse proves that no perturbed matrix has an imaginary-axis eigenvalue. Applying the argument along the whole perturbation segment prevents a spectral crossing. This margin accounts for nonnormal sensitivity; simply comparing a coefficient error with the smallest eigenvalue real part need not do so.

## Two locally persistent saddles can lose their connection

**Worked example: a broken heteroclinic orbit.** Consider

$$x'=x(1-x),\\qquad y'=(2x-1)y.$$

The points $(0,0)$ and $(1,0)$ are hyperbolic saddles, with stable and unstable eigenvalues minus one and plus one. Along $y=0$, a logistic trajectory connects the first saddle to the second. Add the arbitrarily small local perturbation $\\epsilon x(1-x)$ to the second equation. Both equilibria remain at the same positions, and their triangular Jacobians keep those eigenvalues.

Any connecting trajectory must have its horizontal coordinate between zero and one and use that coordinate monotonically as a parameter. The perturbed vertical equation becomes a linear equation in $x$. Multiplying by its integrating factor gives

$$\\frac{d}{dx}[x(1-x)y]=\\epsilon x(1-x).$$

Bounded vertical coordinates near both saddles would make the expression in brackets tend to zero at both endpoints. Integrating from zero to one would then force zero to equal $\\epsilon/6$, impossible when the perturbation is nonzero. The saddle connection is destroyed, although both local equilibria and their hyperbolicity persist.

This exact example separates local structural stability at each equilibrium from structural stability of a region containing the whole connection. A conjugacy preserving the two saddles would preserve their connecting orbit, so no such global equivalence follows here. Global structural-stability theorems need conditions on connections, recurrent sets and the ambient domain beyond isolated local eigenvalue data.

## Exercises with staged hints and full solutions

<a id="structural-stability-hartman-grobman-ex-1"></a>
### Exercise 1: bounded homogeneous solutions

Why does a hyperbolic homogeneous linear system have no nonzero solution bounded for all real time?

<details><summary>Hint 1</summary>

Project the solution onto its stable and unstable invariant blocks.

</details>
<details><summary>Hint 2</summary>

Boundedness is required in both time directions.

</details>
<details><summary>Full solution</summary>

A nonzero unstable component grows in positive time, and a nonzero stable component grows in negative time, including the polynomial factors of generalised eigenvectors. The direct-sum projections prevent cancellation between those components. Both must therefore vanish. This proves uniqueness of the bounded Green solution once one such solution has been constructed.

</details>

<a id="structural-stability-hartman-grobman-ex-2"></a>
### Exercise 2: a scalar Green solution

For $u'=2u+1$, find the unique solution bounded on the whole real line using the future integral.

<details><summary>Hint 1</summary>

This scalar block is unstable, so use the negative future integral.

</details>
<details><summary>Hint 2</summary>

The kernel is an exponentially decaying function of future elapsed time.

</details>
<details><summary>Full solution</summary>

The formula is $u(t)=-\\int_t^\\infty e^{2(t-s)}\\,ds=-1/2$. Its derivative is zero and $2u+1=0$. Every other solution adds a nonzero multiple of $e^{2t}$ and is unbounded in positive time.

</details>

<a id="structural-stability-hartman-grobman-ex-3"></a>
### Exercise 3: the inverse contraction

If $K=2$ and $a=1$, what smallness condition on the nonlinear Lipschitz constant suffices for the inverse construction?

<details><summary>Hint 1</summary>

Multiply the Green operator bound by the nonlinear Lipschitz bound.

</details>
<details><summary>Hint 2</summary>

A strict contraction needs a constant strictly below one.

</details>
<details><summary>Full solution</summary>

The bound is $2K\\epsilon/a=4\\epsilon$, so $\\epsilon<1/4$ suffices. This is a sufficient estimate under the stated norms, not a necessary sharp boundary for every particular field.

</details>

<a id="structural-stability-hartman-grobman-ex-4"></a>
### Exercise 4: why continuity needs truncation

Why is it invalid to assume that nearby linear initial states generate uniformly close trajectories for all real time?

<details><summary>Hint 1</summary>

Even a one-dimensional expanding linear equation separates nearby starts exponentially.

</details>
<details><summary>Hint 2</summary>

The Green kernels, rather than the orbit difference, control the distant-time tails.

</details>
<details><summary>Full solution</summary>

For $y'=y$, a nonzero initial difference grows without bound in positive time. The continuity proof instead truncates the correction integral to a finite interval where continuous dependence applies, and controls the remaining tails by bounded forcing and integrable exponential kernels. For the inverse, uniform contraction convergence of continuous finite iterates supplies the same conclusion.

</details>

<a id="structural-stability-hartman-grobman-ex-5"></a>
### Exercise 5: verify scalar conjugacy

Check the map from rate one contraction to rate three contraction and describe its inverse regularity at zero.

<details><summary>Hint 1</summary>

Use the signed third power.

</details>
<details><summary>Hint 2</summary>

Its inverse is a real cube root, whose derivative is unbounded near zero.

</details>
<details><summary>Full solution</summary>

The map is $H(x)=x^3$, and $H(e^{-t}x)=e^{-3t}H(x)$. It is a homeomorphism with inverse the real cube root. The inverse is not differentiable with a finite derivative at zero. The two systems are time-preservingly topologically conjugate while their coordinate decay rates differ.

</details>

<a id="structural-stability-hartman-grobman-ex-6"></a>
### Exercise 6: resonant logarithm

Differentiate $x^2\\log|x|$ along $x'=x$ and verify the stated resonant correction.

<details><summary>Hint 1</summary>

Differentiate the product at nonzero coordinate first.

</details>
<details><summary>Hint 2</summary>

Its orbital derivative has both a doubled logarithmic term and a quadratic term.

</details>
<details><summary>Full solution</summary>

The orbital derivative is $2x^2\\log|x|+x^2$. Thus $v=y-x^2\\log|x|$ satisfies $v'=2y+x^2-2x^2\\log|x|-x^2=2v$. The correction and its first derivative extend by zero at the origin, whereas its second derivative contains $2\\log|x|+3$ and has no continuous finite extension there.

</details>

<a id="structural-stability-hartman-grobman-ex-7"></a>
### Exercise 7: a shifted equilibrium

For $x'=-2x+\\delta$, find the equilibrium and a conjugacy to the unforced contraction.

<details><summary>Hint 1</summary>

First solve the stationary equation exactly.

</details>
<details><summary>Hint 2</summary>

Subtract the new equilibrium from the state.

</details>
<details><summary>Full solution</summary>

The equilibrium is $\\delta/2$. Setting $z=x-\\delta/2$ gives $z'=-2z$. The affine homeomorphism identifies the perturbed equilibrium with zero. Local persistence means a nearby equilibrium with corresponding dynamics, not that its physical coordinate must remain unchanged.

</details>

<a id="structural-stability-hartman-grobman-ex-8"></a>
### Exercise 8: preserve both saddle spectra

Compute the Jacobian at the two saddles after adding $\\epsilon x(1-x)$ to the vertical equation.

<details><summary>Hint 1</summary>

The horizontal derivative is $1-2x$ and the vertical-state derivative is $2x-1$.

</details>
<details><summary>Hint 2</summary>

The perturbation changes an off-diagonal entry at each endpoint.

</details>
<details><summary>Full solution</summary>

At the first saddle the Jacobian is $\\begin{pmatrix}1&0\\\\\\epsilon&-1\\end{pmatrix}$; at the second it is $\\begin{pmatrix}-1&0\\\\-\\epsilon&1\\end{pmatrix}$. Both are triangular and retain eigenvalues one and minus one. The exact connecting-orbit obstruction therefore occurs without any loss of local hyperbolicity.

</details>

<a id="structural-stability-hartman-grobman-ex-9"></a>
### Exercise 9: the connection obstruction

Why must the bracketed integrating-factor expression vanish at both endpoints of a bounded connecting orbit?

<details><summary>Hint 1</summary>

The factor $x(1-x)$ tends to zero at either saddle.

</details>
<details><summary>Hint 2</summary>

Integrate its derivative across the full horizontal interval.

</details>
<details><summary>Full solution</summary>

Bounded $y$ makes $x(1-x)y$ tend to zero at both endpoints. Its total change is zero, while its derivative integrates to $\\epsilon\\int_0^1x(1-x)\\,dx=\\epsilon/6$. For nonzero perturbation this contradicts the endpoint values. Hence no such bounded saddle-to-saddle connection remains.

</details>

<a id="structural-stability-hartman-grobman-ex-10"></a>
### Exercise 10: local versus global repair

Repair the statement: every field with only hyperbolic equilibria is globally structurally stable.

<details><summary>Hint 1</summary>

Local equilibrium persistence controls neither recurrent sets nor connections between neighbourhoods.

</details>
<details><summary>Hint 2</summary>

Use the two-saddle example as an explicit obstruction.

</details>
<details><summary>Full solution</summary>

Each isolated hyperbolic equilibrium has a locally persistent topological flow type under sufficiently small C1 perturbations. Global structural stability needs additional conditions on the entire domain and its recurrent and connecting dynamics. The worked saddle connection disappears under an arbitrarily small perturbation while both endpoint equilibria remain hyperbolic, disproving the unqualified global claim.

</details>

## Chapter synthesis

A hyperbolic Green operator gives unique bounded corrections. Correcting nonlinear orbits and solving the inverse correction by contraction produces a local homeomorphism conjugating the flow to its linearisation. That map need not preserve smooth geometry or rates. Local structural persistence follows, while exact saddle-connection examples show why a global conclusion requires more hypotheses.
`;export{e as default};