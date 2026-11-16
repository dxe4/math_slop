
# The Lorenz System and Strange Attractors

The Lorenz equations are a small system with a large lesson: determinism, boundedness and practical predictability are different properties. Their familiar two-lobed picture is not the definition of an attractor, and a long numerical orbit is not a proof that the picture represents an invariant set. Yet rigorous results are available. We can prove elementary boundedness and equilibrium facts directly, then identify exactly where the deeper existence theorem enters.

We consider
$$
\dot x=\sigma(y-x),\qquad
\dot y=\rho x-y-xz,\qquad
\dot z=xy-\beta z,
$$
with $\sigma>0$, $\beta>0$ and real $\rho$. The classical parameters are $\sigma=10$, $\rho=28$, $\beta=8/3$. The variables and time are nondimensional. Lorenz derived this model through a severe truncation of convection dynamics; it is not a complete weather model. Its mathematical importance does not depend on treating the three coordinates as all the degrees of freedom of the atmosphere.

Read [linearisation](linearisation-hartman-grobman.md), [Lyapunov functions](lyapunov-functions.md) and [chaos and Lyapunov exponents](chaos-lyapunov-exponents-horseshoe.md). Linear preparation is in the ODE book's [matrix exponential](../ode-first-course/linear-systems-matrix-exponential.md) and [phase plane](../ode-first-course/linear-phase-plane.md). We use local existence and uniqueness for continuously differentiable vector fields, including the continuation principle that a solution remaining in a compact subset of the domain cannot have a finite maximal forward endpoint.

## Symmetry and equilibria

The transformation $S(x,y,z)=(-x,-y,z)$ commutes with the vector field in the sense $F(Su)=SF(u)$. Uniqueness consequently gives $S\varphi_t(u)=\varphi_t(Su)$ wherever the flow exists. Paired initial states have reflected orbits. This symmetry explains the paired nonzero equilibria and the geometry of the two lobes; it does not force every orbit to visit them equally often.

**Definition 12.1 (Equilibrium and trapping region).** An equilibrium is a point where the vector field vanishes. A compact set $D$ is a forward trapping region here if trajectories beginning in $D$ remain there for all positive times. An absorbing set additionally contains every trajectory from each bounded set after a sufficiently large time, uniformly over that bounded set.

To find equilibria, the first equation gives $y=x$. The third then gives $z=x^2/\beta$. Substituting into the second yields $x(\rho-1-z)=0$. Therefore the origin always exists. If $\rho>1$, two additional points exist:
$$
C_\pm=\left(\pm\sqrt{\beta(\rho-1)},\,
\pm\sqrt{\beta(\rho-1)},\,\rho-1\right).
$$
At $\rho=1$ these formulas coincide with the origin rather than describing three distinct points. For $\rho<1$ there are no nonzero real equilibria.

The Jacobian is
$$
DF(x,y,z)=
\begin{pmatrix}
-\sigma&\sigma&0\\
\rho-z&-1&-x\\
y&x&-\beta
\end{pmatrix}.
$$
At the origin its third eigenvalue is $-\beta$, and the remaining two solve
$$\lambda^2+(\sigma+1)\lambda+\sigma(1-\rho)=0.$$
When $\rho<1$, the product is positive and the sum is negative, so both have negative real parts. They may be real or conjugate, but in either case the origin is a hyperbolic sink. For $\rho>1$, the product is negative, giving one positive and one negative real eigenvalue. Together with $-\beta$, this makes the origin a saddle with one unstable direction. At $\rho=1$ a zero eigenvalue prevents a hyperbolic conclusion.

**Example 12.2 (The classical origin).** At $(10,28,8/3)$ the quadratic is $\lambda^2+11\lambda-270=0$. Its roots are $(-11\pm\sqrt{1201})/2$, one positive and one negative, while the third eigenvalue is $-8/3$. A small component in the unstable direction can grow for a substantial time. That observation alone would also occur near many nonchaotic saddles. It explains a possible local source of sensitivity but cannot establish a strange attractor, because it says nothing about how departing trajectories return.

## Stability of the paired equilibria

Let $q=\sqrt{\beta(\rho-1)}$ and evaluate at $C_+$. The Jacobian becomes
$$
J_+=\begin{pmatrix}
-\sigma&\sigma&0\\
1&-1&-q\\
q&q&-\beta
\end{pmatrix}.
$$
Expansion of $\det(\lambda I-J_+)$ along its first row gives
$$
(\lambda+\sigma)\bigl((\lambda+1)(\lambda+\beta)+q^2\bigr)
+\sigma\bigl(-(\lambda+\beta)+q^2\bigr).
$$
Using $q^2=\beta(\rho-1)$ reduces this to
$$
p(\lambda)=\lambda^3+a\lambda^2+b\lambda+c,
\quad
a=\sigma+\beta+1,\quad
b=\beta(\sigma+\rho),\quad
c=2\sigma\beta(\rho-1).
$$
Symmetry gives the same characteristic polynomial at $C_-$.

**Lemma 12.3 (A cubic stability criterion).** If $a,b,c>0$, all roots of $\lambda^3+a\lambda^2+b\lambda+c$ have negative real parts exactly when $ab>c$.

*Proof.* Since the polynomial is positive at zero and negative for sufficiently negative real arguments, it has a root $-s$ with $s>0$. Factor it as $(\lambda+s)(\lambda^2+u\lambda+v)$. The constant coefficient gives $v=c/s>0$. Comparing coefficients yields $a=s+u$ and $b=v+su$. Therefore
$$ab-c=u(v+s^2+su)=u(b+s^2).$$
Since $b+s^2>0$, $ab-c$ has the sign of $u$. The quadratic with $v>0$ has both roots with negative real parts exactly when $u>0$: if real, their product is positive and sum negative; if conjugate, their real part is $-u/2$. If $u=0$ they are purely imaginary, and if $u<0$ they have positive real parts. The additional root $-s$ is negative. This proves the equivalence. ∎

For $\rho>1$ all three coefficients are positive. Substitution into $ab>c$ gives
$$
(\sigma+\beta+1)(\sigma+\rho)>2\sigma(\rho-1).
$$
If $\sigma>\beta+1$, the boundary is
$$
\rho_H=\frac{\sigma(\sigma+\beta+3)}{\sigma-\beta-1}.
$$
Below it the paired equilibria are sinks; above it the criterion fails. If $\sigma\le\beta+1$, the inequality holds for all $\rho>1$. At equality the polynomial factors as $(\lambda+a)(\lambda^2+b)$, displaying a negative eigenvalue and a purely imaginary pair. Calling the ensuing event a nondegenerate Hopf bifurcation additionally requires transversality and a nonlinear coefficient; the spectral calculation alone does not establish the direction or stability of a periodic branch.

**Example 12.4 (Paired equilibria at the classical parameters).** Here $C_\pm=(\pm6\sqrt2,\pm6\sqrt2,27)$. The threshold is $\rho_H=470/19$, approximately $24.74$. At $\rho=28$,
$$a=\frac{41}{3},\qquad b=\frac{304}{3},\qquad c=1440,$$
so $ab=12464/9<1440=c$. The paired equilibria are unstable. Since all polynomial coefficients are positive, there is no positive real root; the instability occurs through a conjugate pair with positive real parts. Thus none of the three equilibria attracts a whole neighbourhood at the classical parameters. This does not by itself identify where bounded trajectories go; a global argument is still needed.

## A boundedness proof with continuation

Polynomial vector fields are locally smooth, but quadratic nonlinearities do not automatically exclude finite-time blow-up. We need an estimate. The useful feature of the Lorenz nonlinearities is that they cancel in a suitable energy derivative.

**Theorem 12.5 (An absorbing ball and global forward solutions).** Put $d=\sigma+\rho$ and
$$
V(x,y,z)=\frac12\bigl(x^2+y^2+(z-d)^2\bigr),\quad
\alpha=\min(2\sigma,2,\beta),\quad C=\frac{\beta d^2}{2}.
$$
Every Lorenz solution satisfies
$$
V(t)\le e^{-\alpha t}V(0)+\frac C\alpha(1-e^{-\alpha t})
$$
for $t\ge0$. Every initial condition has a global forward solution. Each sublevel $D_R=\{V\le R\}$ with $R>C/\alpha$ is forward invariant and absorbs every bounded set.

*Proof.* Differentiate and substitute the equations. The $xyz$ terms cancel, and the remaining $xy$ coefficient is $\sigma+\rho-d=0$. Hence
$$
V'=-\sigma x^2-y^2-\beta z(z-d)
=-\sigma x^2-y^2-\beta(z-d/2)^2+\frac{\beta d^2}{4}.
$$
The identity
$$
(z-d/2)^2-\frac12(z-d)^2+\frac{d^2}{4}
=\frac12z^2\ge0
$$
gives
$$
V'\le-\sigma x^2-y^2-\frac\beta2(z-d)^2+\frac{\beta d^2}{2}
\le-\alpha V+C.
$$
Multiply by $e^{\alpha t}$ and integrate to obtain the bound.

On each finite forward interval this bounds all three coordinates. A finite maximal forward endpoint would leave the trajectory in a compact ball where the smooth field is bounded and locally Lipschitz, contradicting the continuation principle. Thus the solution exists for every $t\ge0$.

At a boundary point of $D_R$, the estimate gives $V'\le-\alpha R+C<0$, so a trajectory cannot cross from inside to outside. Alternatively the integrated bound with $V(0)\le R$ remains below $R$. If initial values range over a bounded set, $V(0)$ has a finite uniform upper bound. The decaying term then becomes smaller than $R-C/\alpha$ after one sufficiently large time, proving uniform absorption. ∎

The estimate is deliberately coarse. Its purpose is a rigorous global enclosure and continuation argument, not a sharp outline of the observed lobes. A tighter numerical picture does not invalidate a broad analytic bound.

**Example 12.6 (A certified coarse region).** At the classical parameters $d=38$, $\alpha=2$ and $C=5776/3$. Thus $C/\alpha=2888/3$. The ball $V\le1000$, centred at $(0,0,38)$ with Euclidean radius $\sqrt{2000}$, is forward invariant and absorbs every bounded set because $1000>2888/3$. If $V(0)\le2000$, then
$$V(t)\le\frac{2888}{3}+\left(2000-\frac{2888}{3}\right)e^{-2t}.$$
To guarantee entry into $V\le1000$, require the exponential term to be at most $1000-2888/3=112/3$. This gives an explicit finite entry-time bound by taking logarithms. The bound applies uniformly to all states with that initial energy restriction, not just one displayed trajectory.

An absorbing region allows a compact attracting set to be constructed abstractly. Since $D_R$ is compact and forward invariant, the sets $\varphi_t(D_R)$ are nonempty, compact and nested. Their intersection over $t\ge0$ is nonempty and compact. It attracts $D_R$: otherwise there would be times tending to infinity and image points staying a fixed distance away; compactness supplies a limit point, and nestedness places that point in every $\varphi_s(D_R)$, a contradiction. The set is invariant. Forward inclusion follows immediately; reverse inclusion for a fixed time follows by choosing preimages in the nested compact sets and extracting a convergent subsequence. Absorption extends attraction to each bounded initial set.

This compact global attracting set is not automatically the particular strange attractor of Tucker's theorem. It also contains all equilibria and may contain connecting trajectories. Existence of a compact attracting set is a broad dissipative conclusion; identifying its finer invariant components is a much harder problem.

## Volume contraction and directional expansion

The divergence is constant:
$$\nabla\cdot F=-\sigma-1-\beta.$$
For the derivative matrix $M(t)=D\varphi_t(u)$, the variational equation is $M'=DF(\varphi_t(u))M$, $M(0)=I$. Multilinearity of the determinant, or the adjugate identity, yields
$$
\frac d{dt}\det M=\operatorname{tr}(DF)\det M.
$$
Solving this scalar equation gives
$$\det D\varphi_t(u)=e^{-(\sigma+1+\beta)t}.$$
Where the flow is used as a change of variables, ordinary volume therefore contracts by this factor. At the classical parameters the rate is $41/3$.

Volume contraction is a statement about the product of three directional stretch factors. One factor can grow while the product shrinks if the others contract more strongly. The linear matrix $\operatorname{diag}(e^t,e^{-2t},e^{-3t})$ already demonstrates this possibility. Negative divergence is therefore compatible with sensitive dynamics, and it does not prove such dynamics. It supplies neither a symbolic coding nor a positive Lyapunov exponent for a selected invariant probability.

The neutral flow exponent also needs care. The preceding chapter proved zero growth in the flow direction on a compact invariant regular set where speed stays bounded above and away from zero. The Lorenz attracting geometry involves an equilibrium, where the vector field vanishes. That simple uniform proposition cannot be applied to the entire set indiscriminately. More refined almost-everywhere exponent statements require the appropriate invariant measure and integrability theory.

## What Tucker's theorem adds

**Theorem 12.7 (Classical Lorenz strange attractor, cited).** At $\sigma=10$, $\rho=28$, $\beta=8/3$, the Lorenz equations possess a robust strange attractor with the singular-hyperbolic structure established by Warwick Tucker. The proof combines analytic estimates and validated numerical enclosures. This is an external theorem, not a conclusion of our absorbing-ball calculation or a re-run of an ordinary floating-point simulation.

Tucker's work supplies the missing bridge between the actual differential equations and rigorous return-map geometry. The cited paper also proves the associated physical-measure conclusions. Defining and proving that measure theory is beyond this chapter; we do not use it to claim convergence of every initial state. Equilibria remain exact exceptional trajectories.

A strange attractor should consequently be described through the theorem being used, rather than through a universal informal definition based on visual roughness. In this example the important attributes include attraction, robust complicated dynamics and a singular hyperbolic structure. The term does not mean that the set is a smooth surface folded many times, nor that every orbit on it has the same finite-time behaviour.

For an experiment, distinguish the model parameters from the integration protocol. Report an initial state, transient time, retained time, solver, tolerance or step, arithmetic and observable. Compare short segments under refinement. Long pointwise separation between refined trajectories is expected in an unstable regime and is not alone a solver failure; nevertheless it prevents interpreting either curve as a certified long-horizon prediction of the same exact initial state. Histograms and lobe-switching counts also require statistical qualification.

The Lorenz example is therefore a meeting point of local algebra, global estimates and computer-assisted proof. We have derived equilibria, a stability criterion, forward boundedness and volume contraction completely. The attractor theorem uses much more. Keeping that boundary visible makes the example stronger: it shows both what elementary tools can establish and what additional mathematical evidence is required for a celebrated chaos claim.

## A parameter regime with a simple global outcome

**Proposition 12.8 (Global attraction to the origin for $0<\rho<1$).** For $\sigma,\beta>0$ and $0<\rho<1$, every Lorenz solution converges exponentially to the origin.

*Proof.* Use the positive definite quadratic function
$W=\rho x^2+\sigma y^2+\sigma z^2.$
Differentiation cancels the cubic terms and gives
$$
W'=-2\sigma\bigl(\rho(x-y)^2+(1-\rho)y^2+\beta z^2\bigr).
$$
The bracket is positive for every nonzero state: vanishing forces $z=0$, then $y=0$ because $1-\rho>0$, and finally $x=0$ because $\rho>0$. On the Euclidean unit sphere its minimum is a positive number $m$, by continuity and compactness. Consequently $W'\le-2\sigma m\|(x,y,z)\|^2$. Also $W\le M\|(x,y,z)\|^2$ for $M=\max(\rho,\sigma)$. Hence $W'\le-(2\sigma m/M)W$. Integrating yields exponential decay of $W$, and equivalence with the Euclidean squared norm yields exponential convergence of the state. Global forward existence was already proved by the absorbing estimate. ∎

This proof requires strict inequalities. At $\rho=1$, the coefficient of $y^2$ in the bracket vanishes, and the argument no longer yields a strictly positive minimum on the unit sphere. At $\rho=0$, the proposed $W$ ceases to be positive definite. These endpoints may be analysed separately, but they are not covered by the displayed proof.

The result is a useful counterweight to the classical chaotic example. The same algebraic family contains a regime with a completely simple global outcome, established by a strict Lyapunov estimate. It would be incorrect to describe the Lorenz formula as chaotic without specifying parameters and the invariant object under discussion.

It also shows why dissipativity alone is too weak a classification. Both this globally convergent regime and the classical regime have constant negative divergence and absorbing sets. Those shared properties control volume and boundedness, while the organisation of invariant dynamics changes. Local instability, global return geometry and the parameter-dependent invariant structure carry information that a divergence calculation cannot provide.

For an exploratory programme, this simple regime supplies an exact comparison case. One can first ask whether an intended method reproduces attraction where the proof guarantees it, before interpreting complicated plots elsewhere. That comparison concerns the correctness and suitability of the numerical experiment, not a new proof of the classical strange attractor.

## Exercises

### Exercise 1: Reflection symmetry
<a id="lorenz-system-strange-attractors-ex-1"></a>

Verify $F(-x,-y,z)=S F(x,y,z)$ for $S(x,y,z)=(-x,-y,z)$. Explain the consequence for solutions.

<details>
<summary>Hint 1</summary>

Substitute signs in all three equations.

</details>

<details>
<summary>Hint 2</summary>

Use uniqueness after reflecting an initial state.

</details>

<details>
<summary>Solution</summary>

The first two components change sign, while $xy-\beta z$ is unchanged. Thus the reflected curve satisfies the same ODE from the reflected initial condition. Uniqueness implies $\varphi_t(Su)=S\varphi_t(u)$. This pairs orbits but does not assert that one orbit spends equal time in both lobes.

</details>

### Exercise 2: Counting equilibria
<a id="lorenz-system-strange-attractors-ex-2"></a>

Determine all equilibria when $\rho<1$, $\rho=1$ and $\rho>1$.

<details>
<summary>Hint 1</summary>

The first equation gives $y=x$.

</details>

<details>
<summary>Hint 2</summary>

Then $z=x^2/\beta$ and $x(\rho-1-z)=0$.

</details>

<details>
<summary>Solution</summary>

The origin is the only equilibrium for $\rho\le1$. At equality the nonzero formulas collapse to it. For $\rho>1$ there are exactly three: the origin and $C_\pm$ given in the chapter. Positivity of $\beta$ ensures the nonzero squared amplitude has the stated sign.

</details>

### Exercise 3: Origin stability
<a id="lorenz-system-strange-attractors-ex-3"></a>

Show that the origin is a hyperbolic sink for $\rho<1$ and a saddle for $\rho>1$.

<details>
<summary>Hint 1</summary>

Inspect the sum and product of the quadratic eigenvalues.

</details>

<details>
<summary>Hint 2</summary>

The remaining eigenvalue is $-\beta$.

</details>

<details>
<summary>Solution</summary>

For $\rho<1$ the quadratic has positive product and negative sum. Real roots are both negative; conjugate roots have negative real part. With $-\beta<0$, all eigenvalues are strictly stable. For $\rho>1$ the product is negative, giving one positive and one negative real root, plus $-\beta$. At $\rho=1$ a zero eigenvalue excludes this argument.

</details>

### Exercise 4: Cubic boundary
<a id="lorenz-system-strange-attractors-ex-4"></a>

For $a,b,c>0$ with $c=ab$, factor the cubic and identify its roots.

<details>
<summary>Hint 1</summary>

Try a factor $\lambda+a$.

</details>

<details>
<summary>Hint 2</summary>

Compare the constant term.

</details>

<details>
<summary>Solution</summary>

The polynomial equals $(\lambda+a)(\lambda^2+b)$. Its roots are $-a$ and $\pm i\sqrt b$. This identifies an imaginary-pair boundary but does not prove the nonlinear Hopf nondegeneracy or the stability of any emerging periodic orbit.

</details>

### Exercise 5: Classical threshold
<a id="lorenz-system-strange-attractors-ex-5"></a>

Compute $\rho_H$ for $\sigma=10$, $\beta=8/3$, and compare it with 28.

<details>
<summary>Hint 1</summary>

Use the displayed threshold formula.

</details>

<details>
<summary>Hint 2</summary>

Keep fractions until the last step.

</details>

<details>
<summary>Solution</summary>

The numerator is $10(10+8/3+3)=470/3$ and the denominator $10-8/3-1=19/3$, so $\rho_H=470/19<28$. The paired equilibria are therefore beyond their linear stability range. This is a spectral conclusion, separate from existence of an attractor.

</details>

### Exercise 6: Energy cancellation
<a id="lorenz-system-strange-attractors-ex-6"></a>

Differentiate $V=(x^2+y^2+(z-d)^2)/2$ and find the choice of $d$ cancelling all mixed cubic and quadratic terms.

<details>
<summary>Hint 1</summary>

Expand $xx'+yy'+(z-d)z'$.

</details>

<details>
<summary>Hint 2</summary>

The remaining $xy$ coefficient is $\sigma+\rho-d$.

</details>

<details>
<summary>Solution</summary>

The cubic terms $-xyz+zxy$ cancel. The quadratic cross term is $(\sigma+\rho-d)xy$, so choose $d=\sigma+\rho$. The derivative becomes $-\sigma x^2-y^2-\beta z(z-d)$, exactly the expression used in the absorbing estimate.

</details>

### Exercise 7: Entry-time estimate
<a id="lorenz-system-strange-attractors-ex-7"></a>

If $V'\le-2V+6$ and $V(0)\le11$, give a time after which $V\le4$.

<details>
<summary>Hint 1</summary>

Integrate the scalar inequality.

</details>

<details>
<summary>Hint 2</summary>

Solve $3+8e^{-2t}\le4$.

</details>

<details>
<summary>Solution</summary>

The estimate is $V(t)\le3+8e^{-2t}$. Hence $t\ge(\log8)/2$ guarantees $V(t)\le4$. The number three is the limiting upper bound; choosing the larger level four makes finite-time absorption possible.

</details>

### Exercise 8: Volume rate
<a id="lorenz-system-strange-attractors-ex-8"></a>

At the classical parameters, find the factor by which a small volume changes after time $t$.

<details>
<summary>Hint 1</summary>

Add $\sigma+1+\beta$.

</details>

<details>
<summary>Hint 2</summary>

Use the determinant formula.

</details>

<details>
<summary>Solution</summary>

The sum is $10+1+8/3=41/3$, so the volume factor is $e^{-41t/3}$. A negative volume rate constrains the product of stretches, not each individual direction. It therefore does not rule out one expanding direction.

</details>

### Exercise 9: Global versus strange attractor
<a id="lorenz-system-strange-attractors-ex-9"></a>

Why does the intersection of images of an absorbing ball not by itself prove Tucker's strange-attractor theorem?

<details>
<summary>Hint 1</summary>

List what compactness and nestedness establish.

</details>

<details>
<summary>Hint 2</summary>

They do not establish the return-map expansion and singular geometry.

</details>

<details>
<summary>Solution</summary>

They establish a nonempty compact invariant set attracting bounded sets. Such a global set contains equilibria and may contain connections. The finer robust chaotic component and its singular-hyperbolic geometry require additional results. An attracting compact set can be as simple as one stable equilibrium.

</details>

### Exercise 10: Numerical claim boundary
<a id="lorenz-system-strange-attractors-ex-10"></a>

A long Lorenz computation switches lobes and has a positive finite-time tangent estimate. State what is observed and what is not established by that computation alone.

<details>
<summary>Hint 1</summary>

Keep the horizon and algorithm in the statement.

</details>

<details>
<summary>Hint 2</summary>

A known theorem and a numerical reproduction have different roles.

</details>

<details>
<summary>Solution</summary>

The observation is finite lobe switching and finite tangent growth under a specified solver, arithmetic and horizon. It alone does not establish invariant geometry, infinite-time exponents or statistical convergence. Tucker's independent theorem supplies rigorous attractor existence at the classical parameters; an ordinary trajectory plot is not its proof.

</details>

## Sources

Original calculations and proofs of equilibrium algebra, cubic stability, absorbing estimates and their continuation consequences.

- Edward N. Lorenz, [Deterministic Nonperiodic Flow](https://wind.mit.edu/~emanuel/Lorenz/EdLorenz/Deterministic_63.pdf), original model and numerical investigation.
- Warwick Tucker, [A Rigorous ODE Solver and Smale's 14th Problem](https://research.monash.edu/en/publications/a-rigorous-ode-solver-and-smales-14th-problem/), Foundations of Computational Mathematics 2 (2002), 53–117; cited proof of the classical robust strange attractor. The [author's publication list](https://pi.math.cornell.edu/~warwick/main/papers.html) records the original work.
- Steven H. Strogatz, [Nonlinear Dynamics and Chaos](https://www.routledge.com/Nonlinear-Dynamics-and-Chaos/Strogatz/p/book/9780367026509), benchmark for Lorenz analysis and bifurcations.
- The unchanged [Chaos, Symbolic Dynamics, and Entropy](../differential-equations-verified-dynamics/chaos-symbolic-entropy.md) supplies the credited distinctions between flow exponents, invariant sets and numerical evidence.

Tucker's computer-assisted existence theorem and its physical-measure conclusions are cited, not reproved. Our coarse absorbing ball does not identify the detailed strange attractor.

## Summary

The Lorenz equations admit exact equilibrium calculations, a proved cubic stability test, global forward continuation and an explicit absorbing ball. Constant negative divergence contracts volume while allowing directional expansion. These elementary results prepare the ground for Tucker's deeper validated attractor theorem. The [next chapter](fractals-dimension.md) develops precise measurements of geometric complexity without inferring dimension from a picture.
