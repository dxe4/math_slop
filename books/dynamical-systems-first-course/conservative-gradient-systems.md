
# Conservative and Gradient Systems

Some systems preserve an energy exactly, while others descend a potential. Both admit scalar functions with strong dynamical meaning, but the conclusions are different. Conserved energy confines motion to a level set and can prevent attraction. A gradient potential decreases strictly away from its critical points and excludes nonconstant periodic motion.

Read [Lyapunov functions](lyapunov-functions.md), differentiation and compactness. Regular-level arguments also use the [implicit-function theorem](../proof-safe-real-analysis/inverse-implicit-function-theorems.md). We work with continuously differentiable vector fields on stated open domains; use $C^2$ potentials when mixed derivatives or Hessians are needed. Linear oscillators are preparation from the ODE course, not the main subject here.

## First integrals confine a trajectory

**Definition 6.1 (First integral).** A $C^1$ function $H:U\to\mathbb R$ is a first integral of $z'=F(z)$ if $\nabla H\cdot F=0$ on $U$. The chain rule then makes $H(z(t))$ constant on every trajectory segment.

The identity should hold throughout a declared region. An energy trace that is approximately flat along one numerical path does not prove that identity. Conversely, a symbolic first integral gives no guarantee that an arbitrary numerical integrator preserves it.

**Proposition 6.2 (Planar Hamiltonian energy).** For $H\in C^2(U)$, the system
$$
q'=H_p,\qquad p'=-H_q
$$
preserves $H$ and has divergence zero.

*Proof.* The orbital derivative is $H_qH_p+H_p(-H_q)=0$. The divergence is $H_{pq}-H_{qp}=0$ by equality of continuous mixed partial derivatives. $\square$

A mechanical system $q'=p$, $p'=-W'(q)$ is of this form with $H=p^2/2+W(q)$. Its level sets record allowed position and speed. A turning point has $p=0$, but is not an equilibrium unless $W'(q)=0$ as well.

## Closed regular curves support periodic motion

**Theorem 6.3 (Motion on a regular energy oval).** Suppose a connected energy-level component $\Gamma$ is a $C^1$ simple closed curve, the vector field is tangent to it, and $F$ is nonzero everywhere on $\Gamma$. Then trajectories on $\Gamma$ are periodic. Their common period is
$$
T=\int_\Gamma\frac{ds}{\|F\|},
$$
where $ds$ denotes arclength.

*Proof.* Parameterise the curve by arclength $\gamma(s)$, $0\le s\le L$, with endpoints identified. Tangency gives $F(\gamma(s))=v(s)\gamma'(s)$ for a continuous nonzero scalar $v$. Its sign is constant on the connected curve. Compactness gives positive lower and finite upper bounds for $|v|$. The scalar arclength equation $s'=v(s)$ therefore traverses the curve in finite time $\int_0^Lds/|v(s)|$. After one traversal the state returns, and uniqueness repeats the motion. No earlier return occurs before completing the simple closed curve. $\square$

The closed-curve and nonzero-field hypotheses matter. A level set through a saddle can contain equilibria and separatrices rather than a periodic orbit. A compact sublevel can trap motion without each level component being an oval. We verify the geometry in the examples instead of inferring periodicity from bounded energy alone.

**Example 6.4 (A nonlinear oscillator and its period bounds).** Let
$$
q'=p,\qquad p'=-q-q^3,\qquad
H=\tfrac12p^2+\tfrac12q^2+\tfrac14q^4.
$$
For energy $E>0$, there is a unique $a>0$ with $E=a^2/2+a^4/4$. The level is
$p=\pm\sqrt{2(E-W(q))}$ for $-a\le q\le a$.
An explicit regular parametrisation is
$$
q=a\cos\theta,\quad
p=-a\sin\theta\sqrt{1+\tfrac12a^2(1+\cos^2\theta)}.
$$
It traces a simple closed curve. Its derivative is nonzero: away from the turning angles $q'$ in this parametrisation is nonzero, and at those angles the $p$ derivative is nonzero. The energy gradient cannot vanish on $E>0$, because its only zero is $(0,0)$. Thus Theorem 6.3 applies.

A quarter-period substitution $q=a\sin\theta$ gives
$$
T(E)=4\int_0^{\pi/2}
\frac{d\theta}{\sqrt{1+\tfrac12a^2(1+\sin^2\theta)}}.
$$
Hence
$$
\frac{2\pi}{\sqrt{1+a^2}}\le T(E)
\le\frac{2\pi}{\sqrt{1+a^2/2}}.
$$
Both bounds are below the small-amplitude period $2\pi$ when $a>0$. At $a=1$, $E=3/4$ and the bounds are approximately4.443 and5.130. These are analytical period bounds, not simulated measurements.

## An energy minimum need not attract

If $H$ is a positive definite first integral near an equilibrium, its compact small sublevels prove Lyapunov stability. A nearby point on a different energy level cannot converge to the equilibrium, since its constant energy would have to approach the equilibrium's smaller energy. Thus stability and attraction separate naturally in conservative examples.

The same observation limits attraction to an individual periodic energy curve from an open neighbourhood filled with other closed levels. Nearby trajectories can remain near the curve without approaching it. An isolated attracting cycle is a different object, studied next.

**Example 6.5 (Predator–prey closed levels).** For $a,b,c,d>0$ and positive $x,y$,
$$
x'=x(a-by),\qquad y'=y(cx-d),
$$
preserves
$H=cx-d\log x+by-a\log y$.
Its unique critical point is $(d/c,a/b)$, and its Hessian has positive diagonal entries $d/x^2,a/y^2$. Therefore it is strictly convex and has a strict minimum there. As either coordinate approaches zero or infinity, $H$ tends to infinity, so its sublevels are compact within the positive quadrant.

For any energy above the minimum, the level is a regular simple closed curve. Here is a direct justification: along each ray from the minimum, strict convexity makes $H$ strictly increasing after its initial zero derivative. It tends to infinity at the ray's endpoint in the quadrant or at infinity, so it crosses the chosen level exactly once. The radial derivative there is positive, and the implicit-function theorem makes the radius a continuously differentiable function of angle. The resulting polar parametrisation is regular because its perpendicular derivative component has positive radius.

The vector field is tangent by conservation and nonzero on this level, since the unique positive equilibrium is its minimum. Theorem 6.3 proves periodic motion on every such level. The equilibrium is stable but not attractive. This full geometric argument supplies the periodicity that imaginary Jacobian eigenvalues alone could not establish.

## Gradient descent has a strict direction

**Definition 6.6 (Gradient system).** For $V\in C^2(U)$, a Euclidean gradient system is
$$
z'=-\nabla V(z).
$$
Its equilibria are the critical points of $V$, and its potential satisfies
$\dot V=-\|\nabla V\|^2$.

**Theorem 6.7 (No nonconstant periodic gradient orbit).** A Euclidean gradient system has no nonconstant periodic trajectory contained in its domain.

*Proof.* If $z(T)=z(0)$ for $T>0$, integration gives
$$
0=V(z(T))-V(z(0))
=-\int_0^T\|\nabla V(z(t))\|^2dt.
$$
The integrand is continuous and nonnegative, so it is zero throughout. Thus $z'=0$ throughout and the trajectory is constant. $\square$

The conclusion is not a planar restriction; it holds in every finite dimension. It depends on the exact gradient structure. A system that merely resembles downhill arrows in a plot need not satisfy it. A first integral and a strictly descending potential also cannot be used interchangeably: their derivatives have different meanings.

**Proposition 6.8 (An isolated strict minimum).** If $a$ is a strict local minimum of $V$ and the only critical point in some neighbourhood, then $a$ is locally asymptotically stable for gradient descent.

*Proof.* Subtract $V(a)$ so that the function is positive definite near $a$. Its derivative is nonpositive, and is strictly negative at every other point of the chosen neighbourhood because no other critical point exists. The local Lyapunov theorem and its strict-decay corollary apply. $\square$

The isolation condition is substantive. A strict minimum alone does not rule out other nearby stationary points at higher potential values. Starting at one of those points cannot converge to $a$. Similarly, a flat set of minima leads to a set-valued convergence question rather than a unique destination.

## A complete two-well phase portrait

**Example 6.9 (Two basins separated by an invariant line).** Let
$$
V(x,y)=\tfrac14(x^2-1)^2+\tfrac12y^2.
$$
Then
$$
x'=x(1-x^2),\qquad y'=-y.
$$
The equilibria are $(1,0),(-1,0),(0,0)$. Properness of $V$ gives compact trapping sublevels and global forward existence. The $y$ coordinate is $y_0e^{-t}$. The scalar $x$ phase line shows $x(t)\to1$ for $x_0>0$, $x(t)\to-1$ for $x_0<0$, and $x(t)=0$ for $x_0=0$.

Thus the two open half-planes are the basins of the two minima. The line $x=0$ is invariant and approaches the saddle $(0,0)$. The Hessian is $\operatorname{diag}(3x^2-1,1)$, positive definite at the minima and indefinite at the origin. The explicit decoupled equations verify those local classifications and the global basin statements without invoking a general stable-manifold theorem.

Every trajectory has decreasing potential, but different initial states choose different limiting equilibria. A potential value alone is not a unique label for a basin; several states and basins can share the same value.

## Compact gradient trajectories approach critical sets

If a gradient trajectory remains in a compact positively invariant set, LaSalle's theorem shows that it approaches the critical set there. Every point of that set is an equilibrium, so it is itself invariant. This conclusion alone need not identify a single limiting point when the critical set is not isolated.

The two-well example permits pointwise convergence because its scalar equations resolve the choice. More general convergence theorems for analytic potentials require additional hypotheses and results; they should not be inferred merely from $\dot V\le0$.

For a weighted descent $z'=-M(z)\nabla V(z)$ with $M(z)$ symmetric positive definite,
$$
\dot V=-\nabla V^TM(z)\nabla V<0
$$
away from critical points. If $M\ge mI$ uniformly on a trapping set, this gives the quantitative bound $\dot V\le-m\|\nabla V\|^2$. The metric changes speeds and paths while preserving the strict potential direction. If $M$ is indefinite or nonsymmetric without a positive definite symmetric part, the same conclusion is not automatic.

## Adding damping changes the invariant structure

For $q'=p$, $p'=-W'(q)-dp$, $d>0$, the mechanical energy satisfies $\dot H=-dp^2$. The conservative first integral becomes a Lyapunov function. On a compact sublevel with a single equilibrium in its zero-derivative invariant set, LaSalle gives attraction. If several wells or saddle points are present, the limiting set and basin must be analysed rather than assuming every state reaches one specified minimum.

A centre is nonhyperbolic, so small damping can change a family of periodic levels into attraction without contradicting Hartman–Grobman. The theorem applies at hyperbolic equilibria, not every qualitative picture.

Numerical methods also treat the structures differently. A method preserving a particular energy is not automatically symplectic, and a symplectic method need not preserve the exact energy at every step. The [geometric numerical integration chapter](../numerical-mathematics-error-algorithms/geometric-numerical-integration.md) develops those distinctions. Here the claims are exact properties of the vector fields.

## What the scalar function does not determine

A first integral can have disconnected level components, each with different motion. A proper potential can have several critical points. A bounded trajectory can approach a set without the present argument proving convergence to one point. These are limits of a particular proof, not evidence that the scalar function is useless.

The correct workflow is to verify the orbital derivative, identify compact invariant regions, inspect critical or zero-derivative sets, and prove any additional level geometry used. The next chapter applies these habits to isolated periodic orbits, their return maps, and planar limit-set restrictions.

## A positive metric changes paths while retaining descent

Euclidean gradient motion is only one way to follow a potential. Suppose
M(x) is a continuously differentiable symmetric positive-definite matrix
field and consider $x'=-M(x)\nabla V(x)$. Along any solution,
$$\frac{d}{dt}V(x(t))=-\nabla V(x)^TM(x)\nabla V(x).$$
The value decreases strictly away from critical points. If a trajectory stays
in a compact invariant region and the least eigenvalue of M there has a
positive lower bound, dissipation controls the squared gradient uniformly.
The compact invariant-set principle then confines the omega-limit set to
critical points, under its stated regularity assumptions. It still does not
make a nonisolated critical set a single limiting point without further work.

The equilibria are unchanged because M is invertible, but the paths generally
change. For the potential V=(x²+y²)/2, Euclidean gradient motion moves on
straight radial rays. Choosing the constant diagonal matrix with entries one
and two gives x(t)=x₀e⁻ᵗ and y(t)=y₀e⁻²ᵗ. For a nonzero first coordinate,
eliminating time gives a parabolic relation between the coordinates rather
than a radial line. The common potential is therefore insufficient to identify
the orbit geometry or the physical clock. It identifies a direction of
value change and the critical set.

Symmetry and positive definiteness can be weakened in some theories, but a
sign condition on the symmetric part cannot be omitted silently. A purely
skew matrix rotates the gradient instead: its pairing with the gradient
is zero, producing conserved motion rather than strict descent. An indefinite
symmetric part can even increase the proposed potential along some states.
When a model is described as gradient-like, display the actual metric or
mobility and compute the derivative. This calculation distinguishes a proved
energy inequality from resemblance to a descending contour plot. It also
explains why two valid algorithms or physical mobilities may minimize the
same potential while producing visibly different trajectories.

## Semidefinite mobility can introduce noncritical resting states

The positive-definite mobility assumption
in metric gradient descent is
essential for identifying resting
points with critical points of
the potential. If it is
only positive semidefinite, a
nonzero gradient may lie in
its kernel. For V(x,y)=x²/2
and constant mobility with diagonal
entries zero and one, the
entire vector field vanishes,
although the potential gradient
is nonzero whenever x is
nonzero.

The derivative remains nonpositive,
but the dissipation set is
now the whole plane. An
invariant-set argument cannot
turn that into convergence
to the critical line x=0.
This explicit example separates
an energy inequality from a
strict descent mechanism and
shows why a uniform positive
eigenvalue bound was retained
on the compact region. If
a physical mobility has null
directions, their conservation
or constraints need separate
analysis before an attraction
claim is made.

## Exercises

### Exercise 6.1 — A first integral
<a id="conservative-gradient-systems-ex-1"></a>

For $q'=p,\ p'=-q^3$, verify $H=p^2/2+q^4/4$ is conserved.

<details>
<summary>Hint 1</summary>

**Hint.** Differentiate along the vector field.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The mixed product terms cancel.

</details>
<details>
<summary>Solution</summary>

**Solution.** We have $\dot H=q^3p+p(-q^3)=0$. Thus each exact trajectory remains on its initial energy level. This calculation alone does not classify a level through a critical point or prove global existence without an additional bound.

</details>

### Exercise 6.2 — A turning point
<a id="conservative-gradient-systems-ex-2"></a>

Why is $p=0$ on a mechanical energy level not necessarily an equilibrium?

<details>
<summary>Hint 1</summary>

**Hint.** Inspect both differential equations.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Acceleration can be nonzero.

</details>
<details>
<summary>Solution</summary>

**Solution.** At $p=0$ the position rate is zero, but p'=-W'(q) can be nonzero. An equilibrium requires both $p=0$ and W'(q)=0. A turning point with nonzero acceleration reverses direction rather than stopping forever.

</details>

### Exercise 6.3 — A period bound
<a id="conservative-gradient-systems-ex-3"></a>

Use Example 6.4 with $a=2$ to give analytical lower and upper period bounds.

<details>
<summary>Hint 1</summary>

**Hint.** Substitute into both denominators.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The energy is determined by the amplitude.

</details>
<details>
<summary>Solution</summary>

**Solution.** The energy is 2+4=6. The bounds are $2\pi/\sqrt5\le T\le2\pi/\sqrt3$, approximately 2.810 and 3.628. They follow from the exact quarter-period integral and do not depend on numerical time stepping.

</details>

### Exercise 6.4 — A regular-curve hypothesis
<a id="conservative-gradient-systems-ex-4"></a>

Why does Theorem 6.3 exclude a saddle equilibrium on the energy component?

<details>
<summary>Hint 1</summary>

**Hint.** The speed must have a positive minimum.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** At an equilibrium it vanishes.

</details>
<details>
<summary>Solution</summary>

**Solution.** A saddle point has $F=0$, so the uniform positive-speed bound fails. A trajectory can take infinite time to approach it along a separatrix. A compact energy component containing that point need not be a periodic orbit.

</details>

### Exercise 6.5 — No gradient cycle
<a id="conservative-gradient-systems-ex-5"></a>

Prove a periodic orbit of $z'=-\nabla V$ must be constant.

<details>
<summary>Hint 1</summary>

**Hint.** Integrate the potential derivative over one period.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use continuity of the nonnegative squared gradient.

</details>
<details>
<summary>Solution</summary>

**Solution.** The total potential change is zero, so the integral of $\|\nabla V\|^2$ is zero. A continuous nonnegative integrand with zero integral vanishes everywhere. Hence z'=0 and the alleged periodic trajectory is an equilibrium.

</details>

### Exercise 6.6 — Two-well basins
<a id="conservative-gradient-systems-ex-6"></a>

For Example 6.9, find the limit when $x_0$<0 and give the invariant boundary separating the two open basins.

<details>
<summary>Hint 1</summary>

**Hint.** Use the scalar sign line.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The y component decays independently.

</details>
<details>
<summary>Solution</summary>

**Solution.** The x coordinate approaches -1 and y approaches 0, so the limit is(-1,0). The invariant line $x=0$ separates the two open half-plane basins and itself approaches(0,0). It is not part of either open minimum basin.

</details>

### Exercise 6.7 — A strict minimum condition
<a id="conservative-gradient-systems-ex-7"></a>

Why is isolation of the critical point needed in Proposition 6.8?

<details>
<summary>Hint 1</summary>

**Hint.** A different critical point is a stationary solution.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Strict local minimality does not forbid higher stationary values nearby.

</details>
<details>
<summary>Solution</summary>

**Solution.** If another critical point lies in every proposed attraction neighbourhood, starting there gives a constant trajectory that cannot approach a. Excluding other critical points makes the orbital derivative strictly negative away from a and permits the strict Lyapunov conclusion.

</details>

### Exercise 6.8 — Weighted descent
<a id="conservative-gradient-systems-ex-8"></a>

Show V decreases for $z'=-M(z)\nabla V$ if M is symmetric and $M\ge2$ I.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate the quadratic derivative.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the stated matrix inequality.

</details>
<details>
<summary>Solution</summary>

**Solution.** The derivative is $-\nabla V^{\mathsf T}M\nabla V\le-2\|\nabla V\|^2$. It is strictly negative away from critical points. Symmetry and the positive lower bound are the hypotheses justifying this sign; an arbitrary matrix does not suffice.

</details>

### Exercise 6.9 — A conserved-energy obstruction
<a id="conservative-gradient-systems-ex-9"></a>

A trajectory has $H=5$ and an equilibrium has $H=2$. Can the trajectory converge to that equilibrium if H is a continuous first integral?

<details>
<summary>Hint 1</summary>

**Hint.** Combine conservation and continuity.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare the two limiting values.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. Conservation keeps H(z(t))=5, whereas convergence and continuity would require it to tend to 2. This gives an exact obstruction independent of whether the trajectory was plotted as a closed curve.

</details>

### Exercise 6.10 — Damping's derivative
<a id="conservative-gradient-systems-ex-10"></a>

For $q'=p,\ p'=-q-q^3-dp$, compute Hdot with the energy from Example 6.4 and state an additional condition needed for attraction to a chosen equilibrium.

<details>
<summary>Hint 1</summary>

**Hint.** The conservative terms cancel.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Determine the largest invariant zero-derivative set on a compact level region.

</details>
<details>
<summary>Solution</summary>

**Solution.** We get $\dot H=-dp^2$. To infer attraction, use a compact invariant sublevel and identify the largest invariant subset of $p=0$. Here invariance also requires $q+q^3=0$, so only $q=0$ remains; with properness, LaSalle gives global attraction. In a multiwell potential the corresponding set could contain several equilibria.

</details>

## Sources

- Steven H. Strogatz, [Nonlinear Dynamics and Chaos](https://www.routledge.com/Nonlinear-Dynamics-and-Chaos/Strogatz/p/book/9780367026509), third edition, Chapman & Hall, 2024.
- Morris W. Hirsch, Stephen Smale and Robert L. Devaney, [Differential Equations, Dynamical Systems, and an Introduction to Chaos](https://doi.org/10.1016/C2009-0-61160-0), third edition, Academic Press, 2013.

The exposition, proofs, worked examples and exercises in this chapter are original to Euler. External references provide further reading and identify explicitly cited deeper results.

## Summary

First integrals keep trajectories on level sets, and regular compact energy ovals support periodic motion when the speed never vanishes. Gradient systems descend a potential and cannot have nonconstant periodic orbits. Proper levels and critical-set analysis determine continuation and attraction; conserved and dissipative structures require different conclusions. The next chapter studies isolated cycles and planar limit sets.
