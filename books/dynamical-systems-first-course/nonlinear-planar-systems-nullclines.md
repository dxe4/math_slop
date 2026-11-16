
# Nonlinear Planar Systems and Nullclines

A planar vector field gives two rates at every state. Nullclines identify where one rate vanishes, invariant boundaries restrict where trajectories can go, and equilibria require both rates to vanish. These objects answer different questions. A useful phase portrait combines their algebra with a proof of existence and continuation, rather than treating every drawn curve as a trajectory.

Read [the ODE linear phase plane](../ode-first-course/linear-phase-plane.md) and [scalar comparison](one-dimensional-flows-bifurcations.md). We assume a continuously differentiable vector field on an open planar domain. The original DE discussion of [Scalar Comparison and Invariant Regions](../differential-equations-verified-dynamics/scalar-comparison-invariant-regions.md) is further reading; its source remains separate.

## Nullclines determine instantaneous directions

**Definition 3.1 (Nullcline and equilibrium).** For
$$
x'=P(x,y),\qquad y'=Q(x,y),
$$
the $x$-nullcline is $\{P=0\}$ and the $y$-nullcline is $\{Q=0\}$. An equilibrium belongs to their intersection.

Away from equilibria, a point on the $x$-nullcline has a vertical tangent vector because $x'=0$ and $y'\ne0$. A point on the $y$-nullcline has a horizontal tangent vector. A tangent direction at one instant does not imply that the trajectory stays on the nullcline.

In regions where both components are nonzero, their signs specify a quadrant of motion. The slope formula $dy/dx=Q/P$ is valid only where $P\ne0$. It becomes singular on an $x$-nullcline and discards equilibria if used without checking zeros first. A vertical tangent is a geometric feature, not necessarily a failure of the solution.

**Example 3.2 (A nullcline that is crossed).** Consider
$$
x'=y-x^2,\qquad y'=-y.
$$
The $x$-nullcline is the parabola $y=x^2$ and the $y$-nullcline is the axis $y=0$. Their only intersection is the origin. At $(1,1)$ the vector field is $(0,-1)$, so the trajectory has a vertical tangent. A tangent to the parabola there is $(1,2)$, so the trajectory crosses it.

More explicitly, let $g(x,y)=y-x^2$. Along a trajectory,
$$
\frac{d}{dt}g(x,y)=-y-2x(y-x^2).
$$
On the parabola this becomes $-x^2$, strictly negative away from the origin. The trajectory moves from $g>0$ to $g<0$ at such a crossing. In contrast,$y=0$ is invariant because the solution of $y'=-y$ with zero initial value stays zero. On that invariant axis, the remaining equation is $x'=-x^2$, whose two-sided instability was analysed previously.

The example shows why nullclines should not be labelled stable manifolds or attracting curves without a separate invariance argument.

## Positivity can be proved exactly

**Proposition 3.3 (Multiplicative coordinate laws).** If a component satisfies $x'=x\,a(t)$ along a trajectory, with continuous $a(t)$, then
$$
x(t)=x(t_0)\exp\left(\int_{t_0}^ta(s)\,ds\right)
$$
on every finite part of its existence interval. Its sign is preserved, and a zero initial component remains zero.

*Proof.* The displayed function satisfies the linear scalar equation and initial condition by differentiation, so uniqueness gives the formula. The exponential is strictly positive for finite integrals, proving the sign statement. $\square$

For a system $x'=xF(x,y)$, $y'=yG(x,y)$, use $a(t)=F(x(t),y(t))$ or $G(x(t),y(t))$. These functions are continuous along a solution. Thus the nonnegative quadrant is forward invariant while the solution exists, and positive starts cannot hit either axis in finite time. This does not alone prove global existence or prevent a coordinate from tending to zero as $t\to\infty$.

Multiplicative form is a property of the model. Replacing $xF$ by $xF+\epsilon$ can destroy an invariant axis or positivity, depending on the sign and interpretation of $\epsilon$. One cannot transfer the boundary conclusion after changing the vector field without checking it again.

## Bounds convert local solutions into global ones

**Theorem 3.4 (Competitive growth bounds).** Suppose $a,d,b,f>0$ and $c,e\ge0$. For
$$
x'=x(a-bx-cy),\qquad y'=y(d-ex-fy),
$$
every nonnegative initial point has a globally defined nonnegative forward solution satisfying
$$
x(t)\le\max\{x_0,a/b\},\qquad
y(t)\le\max\{y_0,d/f\}.
$$

*Proof.* Positivity and axis invariance follow from Proposition 3.3. In the nonnegative quadrant,
$x'\le x(a-bx)$ and $y'\le y(d-fy)$. Scalar comparison with the corresponding logistic equations gives the displayed bounds, because each logistic solution stays below the larger of its start and carrying level. The polynomial field is locally Lipschitz on the whole plane. The bounds trap the solution in a compact rectangle there, so the continuation theorem gives existence for all forward time. $\square$

The signs of $c,e$ are material. A mutualistic positive cross effect would reverse the needed upper comparison. Likewise a model posed only in an open quadrant cannot use a compact rectangle touching its boundary without extending the vector field or justifying continuation in that domain.

A rectangle can also be checked through its faces. At a right face $x=M$, inward motion requires $P(M,y)\le0$ for every permitted $y$ on that face. At a top face $y=N$, require $Q(x,N)\le0$. Checking only a corner does not prove an inequality along an entire face.

**Example 3.5 (Competition with a coexistence equilibrium).** Let
$$
x'=x(2-x-y),\qquad y'=y(3-x-2y).
$$
The nullclines are $x=0$ or $x+y=2$, and $y=0$ or $x+2y=3$. Solving every branch combination gives equilibria
$(0,0),(2,0),(0,3/2),(1,1)$. Omitting the axis branches would lose three equilibria.

The Jacobian is
$$
DF(x,y)=
\begin{pmatrix}2-2x-y&-x\\-y&3-x-4y\end{pmatrix}.
$$
At $(1,1)$ it is $\begin{pmatrix}-1&-1\\-1&-2\end{pmatrix}$, with eigenvalues $(-3\pm\sqrt5)/2$, both negative. At $(2,0)$ it has eigenvalues $-2,1$, and at $(0,3/2)$ it has eigenvalues $1/2,-3$. These are classifications of the linearised matrices. The next chapter proves the nonlinear stability bridge for the negative-eigenvalue case rather than silently assuming it here.

Theorem 3.4 supplies $x(t)\le\max\{x_0,2\}$ and $y(t)\le\max\{y_0,3/2\}$, hence global existence. Boundedness and the local matrix calculation do not yet prove that every positive trajectory tends to coexistence. Periodic-orbit exclusions and limit-set arguments require additional work.

## Coordinate changes preserve only stated features

A nonsingular linear change $z=S u$ transforms $z'=F(z)$ to $u'=S^{-1}F(Su)$. Equilibria correspond and the Jacobians are similar, so their eigenvalues agree. Distances and coordinate component signs can change. A positive quadrant has a particular modelling meaning and may become a tilted cone.

Translations can move an equilibrium to the origin without changing local stability, because distances between corresponding points remain the same. Smooth nonlinear coordinate changes with nonsingular derivative preserve local qualitative structure under appropriate neighbourhood restrictions, but an arbitrary many-to-one projection need not. In particular, a planar projection of a three-dimensional trajectory can cross itself without violating uniqueness of the full system.

When polar coordinates are introduced, the origin is excluded from the coordinate chart. An equation for $r>0$ must not be used to assign an arbitrary angular state to the origin. Check whether the Cartesian vector field extends smoothly before applying a planar theorem there.

## A centre calculation is not a general stability theorem

**Example 3.6 (Predator–prey geometry).** Let $a,b,c,d>0$ and consider
$$
x'=x(a-by),\qquad y'=y(cx-d)
$$
in the positive quadrant. The unique positive equilibrium is $(d/c,a/b)$. At that point the Jacobian is
$$
\begin{pmatrix}0&-bd/c\\ca/b&0\end{pmatrix},
$$
whose eigenvalues are $\pm i\sqrt{ad}$. Linearisation has a centre and cannot decide nonlinear attraction.

There is, however, an exact first integral:
$$
H(x,y)=cx-d\log x+by-a\log y.
$$
Its derivative is
$$
(c-d/x)x(a-by)+(b-a/y)y(cx-d)=0,
$$
after expanding and cancelling the four terms. The Hessian is diagonal with positive entries $d/x^2,a/y^2$, so $H$ has a strict minimum at the equilibrium. A positive initial state with larger $H$ cannot converge to that equilibrium, because continuity would force its conserved value to approach the smaller minimum.

Thus the nonlinear system has an obstruction to attraction that comes from a conserved quantity, not merely from imaginary eigenvalues. The conservative-systems chapter develops the closed-level-curve conclusion with its compactness hypotheses.

## Nullcline intersections do not count every orbit

Equilibria are roots of two simultaneous equations. A periodic orbit can lie away from every equilibrium and cross nullclines repeatedly. Multiple invariant regions can support different outcomes even when the equilibrium list is short.

For example, the smooth Cartesian field
$$
x'=-y+x(1-x^2-y^2),\qquad
y'=x+y(1-x^2-y^2)
$$
has only the equilibrium zero. To see this, its equilibrium equations have coefficient matrix
$\begin{pmatrix}1-r^2&-1\\1&1-r^2\end{pmatrix}$ acting on $(x,y)$, with determinant $(1-r^2)^2+1>0$. Yet for $r>0$, direct differentiation gives $r'=r(1-r^2)$ and $\theta'=1$. The unit circle is a nonconstant periodic orbit. Counting equilibria did not find it.

The angular equation shows the motion does not stop on that circle. A zero radial derivative is not the same as a zero vector field: it says the flow is tangent to a circle. The periodic-orbit chapter will analyse its orbital stability and transverse return map.

## A region argument should include continuation

An inward-pointing calculation can prevent a finite-time exit through the region boundary, but the solution must also remain in the domain where the vector field is defined. If the region is compactly contained in an open $C^1$ domain, continuation fills that gap. If the domain has a deleted singularity, drawing a surrounding box does not remove it.

This matters for equations involving logarithms, square roots, or rational rates. A denominator that vanishes on a nullcline or boundary can invalidate the smoothness assumed by a phase portrait. The polynomial examples here avoid that difficulty, while the logarithmic first integral is used only on the positive quadrant where it is differentiable.

For non-strict face inequalities, uniqueness is also important. A continuous field without local Lipschitz regularity can allow trajectories to depart a tangent boundary despite an equilibrium solution staying there. The scalar waiting-time example already demonstrated the mechanism. Use the actual regularity hypothesis, not only arrows drawn at selected points.

## From qualitative geometry to a checkable claim

A complete planar analysis states the domain, equilibrium list, invariant boundaries, verified bounds, and which local conclusions are proved. Jacobian eigenvalues are evidence for a theorem whose hypotheses must be named; nullclines describe instantaneous rates; first integrals or Lyapunov functions control different aspects of evolution.

Numerical vector-field plots can suggest missing equilibria or unexpected motion, but a finite grid cannot prove that no other root or orbit exists. Algebraic branch cases, invariant-region inequalities, and global continuation provide that evidence in the worked examples. The next chapter supplies the local linearisation argument and its nonhyperbolic limits.

## Strict face bounds survive small perturbations

**Proposition 3.7 (A robust trapping rectangle).** Let $R=[a,b]\times[c,d]$, with $a<b$ and $c<d$, be compactly contained in an open domain of a $C^1$ field $(P,Q)$. Suppose a number $\eta>0$ satisfies
$$
P(a,y)\ge\eta,\quad P(b,y)\le-\eta\quad(c\le y\le d),
$$
and
$$
Q(x,c)\ge\eta,\quad Q(x,d)\le-\eta\quad(a\le x\le b).
$$
If a perturbed field $(P+E_1,Q+E_2)$ is locally Lipschitz on that domain and $|E_i|\le\eta/2$ on the corresponding faces, then every solution starting in $R$ stays there for all forward time.

*Proof.* On each face the perturbed normal component retains its strict inward sign. A solution starting on the boundary immediately enters the interior: its active boundary coordinates have strictly inward derivatives, and continuity preserves those signs for a short interval. At a corner this applies to both active coordinates. An interior solution cannot have a first contact with the right face, because its first coordinate would have to approach its upper bound from below while having strictly negative derivative at contact. The left, bottom and top faces give the same contradiction with their respective signs. Thus there is no finite exit. Compact containment and the continuation theorem extend the solution to every positive time. $\square$

The hypotheses concern every point of each face, rather than only its corners or points visited by a plotted trajectory. A positive uniform margin can therefore be useful when coefficients have bounded uncertainty. The margin refers to the declared coordinates and units; rescaling one coordinate changes its numerical normal velocity and the perturbation bound to compare with it.

This result proves boundedness and continuation. It does not determine whether the eventual motion approaches an equilibrium, approaches a periodic orbit, or has another limiting description. That requires an additional argument.

## Transverse nullcline intersections and persistence

At an equilibrium, the gradients of the two component functions are the
rows of the Jacobian. If those gradients are linearly independent, the
nullclines meet transversely and the Jacobian is invertible. For a smoothly
parameterized field, the implicit-function theorem then gives a unique nearby
equilibrium branch under sufficiently small parameter changes. This conclusion
concerns existence and location; its stability still requires analysing the
linearized eigenvalues and, where needed, nonlinear terms.

Tangency can signal a different situation. Consider $x'=y-x^2$ and
$y'=\mu-y$. Equilibria satisfy y=μ and x²=μ. There are two for positive μ,
one merged equilibrium at zero, and none for negative μ. The horizontal
nullcline is tangent to the parabola at the collision. The Jacobian determinant
is twice x, so it vanishes exactly at that merged point. Solving only the
nullcline equations finds the branch change; the determinant identifies why
the persistence theorem no longer applies there. It does not, on its own,
classify the collision as a particular bifurcation in every nearby family.
Nondegeneracy and the meaning of the parameter remain part of that later
classification. This links a useful geometric picture to an explicit theorem
without treating every visually close pair of curves as a certified equilibrium.

## Exercises

### Exercise 3.1 — Nullcline direction
<a id="nonlinear-planar-systems-nullclines-ex-1"></a>

At a non-equilibrium point with $P=0$,$Q>0$, state the tangent direction and explain what it does not prove.

<details>
<summary>Hint 1</summary>

**Hint.** The horizontal rate vanishes.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A tangent vector is instantaneous.

</details>
<details>
<summary>Solution</summary>

**Solution.** The tangent vector points vertically upward. This does not imply that the trajectory stays on the x-nullcline; invariance requires the vector field to remain tangent to the entire curve under consideration, or another exact argument.

</details>

### Exercise 3.2 — A crossed parabola
<a id="nonlinear-planar-systems-nullclines-ex-2"></a>

For Example 3.2, compute d(y-$x^2$)/dt on its parabola at $x=2$.

<details>
<summary>Hint 1</summary>

**Hint.** Set y=$x^2$ after differentiating along the field.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The orbital derivative becomes-$x^2$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The value is -4. Thus the trajectory crosses toward y-$x^2$<0 at (2,4). The parabola is not an invariant curve away from the origin, despite x' vanishing at each of its points.

</details>

### Exercise 3.3 — An invariant axis
<a id="nonlinear-planar-systems-nullclines-ex-3"></a>

Show $y=0$ is invariant for $y'=yG(x,y)$ when the full vector field is locally Lipschitz.

<details>
<summary>Hint 1</summary>

**Hint.** Use the multiplicative-coordinate formula.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Zero initial data stay zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** Along a solution, y satisfies a scalar linear equation with continuous coefficient G(x(t),y(t)). Its formula is y(t)=$y_0$ exp∫G. For $y_0$=0 this is identically zero. Uniqueness ensures the same full solution is selected.

</details>

### Exercise 3.4 — Global growth bounds
<a id="nonlinear-planar-systems-nullclines-ex-4"></a>

For $x'=x(4-2x-y)$,$y'=y(3-x-3y)$, give bounds for nonnegative starts.

<details>
<summary>Hint 1</summary>

**Hint.** Identify both carrying levels.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Cross effects are nonpositive.

</details>
<details>
<summary>Solution</summary>

**Solution.** The bounds are x(t)≤max{$x_0$,2} and y(t)≤max{$y_0$,1}. Positivity and polynomial regularity combine with these compact bounds to give global forward existence. The bounds do not identify the limiting equilibrium.

</details>

### Exercise 3.5 — Equilibria without lost branches
<a id="nonlinear-planar-systems-nullclines-ex-5"></a>

Find every nonnegative equilibrium of $x'=x(2-x-y)$,$y'=y(3-x-2y)$.

<details>
<summary>Hint 1</summary>

**Hint.** Keep the axis factors.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Then solve the two non-axis lines.

</details>
<details>
<summary>Solution</summary>

**Solution.** The four points are(0,0),(2,0),(0,3/2),(1,1). Dividing both equations by x and y at the outset would retain only the positive intersection and incorrectly discard the boundary equilibria.

</details>

### Exercise 3.6 — A linearised classification
<a id="nonlinear-planar-systems-nullclines-ex-6"></a>

Compute the trace and determinant of the coexistence Jacobian in Example 3.5 and locate its eigenvalues.

<details>
<summary>Hint 1</summary>

**Hint.** Use the displayed symmetric matrix.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Solve its quadratic characteristic polynomial.

</details>
<details>
<summary>Solution</summary>

**Solution.** The trace is -3 and determinant 1, so the roots are(-3±√5)/2, both negative. This classifies the linear matrix. The nonlinear attraction conclusion uses the stability theorem developed next.

</details>

### Exercise 3.7 — Conserved quantity versus attraction
<a id="nonlinear-planar-systems-nullclines-ex-7"></a>

Why can a trajectory with H($x_0$,$y_0$)>H(eq) in Example 3.6 not converge to the equilibrium?

<details>
<summary>Hint 1</summary>

**Hint.** H is constant along it.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use continuity at a hypothetical limit.

</details>
<details>
<summary>Solution</summary>

**Solution.** Convergence would imply H(x(t),y(t))→H(eq), but the left side is the constant larger initial value. This contradiction excludes attraction for that trajectory. The argument does not depend on a plotted orbit being exactly closed.

</details>

### Exercise 3.8 — A radial rate
<a id="nonlinear-planar-systems-nullclines-ex-8"></a>

For the displayed unit-circle field, derive r' for $r>0$.

<details>
<summary>Hint 1</summary>

**Hint.** Differentiate $r^2$=$x^2$+$y^2$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The rotational cross terms cancel.

</details>
<details>
<summary>Solution</summary>

**Solution.** We obtain 2rr'=2(x x'+y y')=2r²(1-$r^2$), hence r'=r(1-$r^2$). On $r=1$ the radial rate is zero but the angular rate is 1, so the circle supports motion rather than equilibria.

</details>

### Exercise 3.9 — A face condition
<a id="nonlinear-planar-systems-nullclines-ex-9"></a>

Why does P(M,0)≤0 not prove the entire face x=M,0≤y≤N points inward?

<details>
<summary>Hint 1</summary>

**Hint.** The condition must hold for every point of the face.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Give a rate that changes sign with y.

</details>
<details>
<summary>Solution</summary>

**Solution.** For example P(M,y)=-1+2y is negative at $y=0$ but positive for $y>1/2$. A corner check can miss outward motion elsewhere on the face. A rectangle invariance proof needs a uniform inequality along each relevant face.

</details>

### Exercise 3.10 — A coordinate caveat
<a id="nonlinear-planar-systems-nullclines-ex-10"></a>

Why can a self-crossing planar projection of a three-state solution coexist with uniqueness?

<details>
<summary>Hint 1</summary>

**Hint.** A projection loses coordinates.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The two full states can differ.

</details>
<details>
<summary>Solution</summary>

**Solution.** Two visits can have the same displayed pair of coordinates but different third coordinates. They are not the same full initial state, so uniqueness does not identify their future trajectories. Planar noncrossing theorems concern the actual two-dimensional autonomous state, not an arbitrary projection.

</details>

## Sources

- Steven H. Strogatz, [Nonlinear Dynamics and Chaos](https://www.routledge.com/Nonlinear-Dynamics-and-Chaos/Strogatz/p/book/9780367026509), third edition, Chapman & Hall, 2024.
- Morris W. Hirsch, Stephen Smale and Robert L. Devaney, [Differential Equations, Dynamical Systems, and an Introduction to Chaos](https://doi.org/10.1016/C2009-0-61160-0), third edition, Academic Press, 2013.

The exposition, proofs, worked examples and exercises in this chapter are original to Euler. External references provide further reading and identify explicitly cited deeper results.

## Summary

Nullclines locate zero component rates, while equilibria require their intersections and invariant curves require separate proof. Multiplicative laws preserve positivity, and comparison bounds plus compact continuation give global competitive solutions. Jacobian calculations, first integrals, and radial equations reveal different features of planar motion. Linearisation next supplies precise local stability conclusions.
