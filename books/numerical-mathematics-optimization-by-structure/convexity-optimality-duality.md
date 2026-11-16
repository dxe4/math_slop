
# Convex Sets and Functions {#section-1-convex-sets-and-functions}

A local derivative is useful only when a theorem connects it to the requested global answer. Convexity provides such a connection: a tangent affine function is a global lower bound, and a stationary point minimizes over the whole domain. This chapter proves that connection and identifies where it stops. Convexity does not by itself give attainment, uniqueness, differentiability, or a well-conditioned algorithm.

The prerequisites are finite-dimensional vectors, inner products, derivatives, continuity and compactness. All norms are Euclidean unless another norm is named. The old chapter identity remains stable; its Lagrangian, Slater and sensitivity material now belongs to the [duality chapter](duality-sensitivity-perturbation.md), where the original exact quadratic dual example is retained. The present chapter develops the convex sets and functions on which that theory rests.

<a id="section-5-convex-sets-and-combinations"></a>
## Convex sets and combinations {#section-7-convex-sets-and-combinations}

A set $C\subseteq\mathbb R^n$ is convex if $(1-t)x+ty\in C$ for every $x,y\in C$ and $0\le t\le1$. Both endpoints matter; convexity is a property relative to every pair, rather than a statement that one selected segment happens to stay in the set. A finite convex combination is $\sum_{i=1}^k\alpha_i x_i$ with nonnegative coefficients summing to one.

**Proposition 2.1.** A convex set contains every finite convex combination of its points. Intersections and affine inverse images of convex sets are convex; affine images are convex too.

*Proof.* Induct on the number of positive coefficients. If $\alpha_k<1$, normalize the earlier coefficients by $1-\alpha_k$, apply the induction hypothesis to their combination, then combine its result with $x_k$ using the two-point definition. The case $\alpha_k=1$ is immediate. For an intersection, two points in it lie in every constituent set, so their segment lies in every set. For an affine map $T(x)=Ax+b$, the identity $T((1-t)x+ty)=(1-t)T(x)+tT(y)$ proves both the image and inverse-image assertions. $\square$

The convex hull of a set $S$ is its set of finite convex combinations. It is convex by multiplying and collecting the coefficients of a combination of two such expressions. It is the smallest convex set containing $S$, since the proposition forces every such set to contain those combinations. Taking a convex hull can introduce new feasible points and change an optimization problem; it is an exact operation only when a separate recovery argument licenses it.

Halfspaces $\{x:a^Tx\le b\}$, affine subspaces, Euclidean balls and intersections of these are convex. The union of convex sets need not be convex. Two disjoint balls are an immediate example; even overlapping sets can have a nonconvex union. A punctured plane is not convex because some joining segments pass through the removed point.

<a id="section-17-domains-epigraphs-and-extended-values"></a>
## Domains, epigraphs and extended values {#section-19-domains-epigraphs-and-extended-values}

A real-valued function $f:C\to\mathbb R$ on a convex domain is convex if
$$f((1-t)x+ty)\le(1-t)f(x)+tf(y).$$
Strict convexity makes this inequality strict for distinct points and $0<t<1$. Strong convexity with parameter $\mu>0$ replaces its right side by
$$(1-t)f(x)+tf(y)-\frac\mu2t(1-t)\|x-y\|^2.$$
An affine function is convex, but on a domain with two distinct points it is not strictly convex. Strictness does not supply a uniform quadratic margin.

Extended values encode domains without repeatedly listing constraints. The indicator $\delta_C$ is zero on $C$ and $+\infty$ outside. A proper function never equals $-\infty$ and is finite somewhere; its effective domain is $\{x:f(x)<+\infty\}$. A proper extended-real function is convex when its effective domain is convex and its finite-domain inequality holds. The indicator is convex exactly when its nonempty set is convex. The empty-set indicator is an improper convex function under a common convention, so the word proper must be kept explicit.

**Proposition 2.2 (Epigraph criterion).** A function is convex exactly when its epigraph $\operatorname{epi}f=\{(x,s):f(x)\le s\}$ is convex.

*Proof.* Combining two epigraph points gives height $(1-t)s+tu$, which is at least $(1-t)f(x)+tf(y)$ and therefore at least the function at the combined base point if $f$ is convex. Conversely combine $(x,f(x))$ and $(y,f(y))$ for finite domain points; membership of the resulting point in the epigraph gives the defining inequality. Projection of a convex epigraph onto its base also gives convexity of the domain. $\square$

Convexity and closedness differ. The indicator of an open convex ball is convex but not lower semicontinuous at its boundary. A proper convex function is called closed when its epigraph is closed. For proper functions this is equivalent to lower semicontinuity: limits cannot jump downward in the inequality $f(x)\le\liminf f(x_k)$. These notions matter for existence and separation; an attractive epigraph drawing does not replace their hypotheses.

<a id="section-33-operations-that-preserve-convexity"></a>
## Operations that preserve convexity {#section-35-operations-that-preserve-convexity}

Nonnegative weighted sums of convex functions are convex on their common domain. A pointwise supremum is convex wherever it is proper: if $F(x)=\sup_i f_i(x)$, each inequality
$$f_i((1-t)x+ty)\le(1-t)F(x)+tF(y)$$
holds, so taking the supremum on the left proves the claim. This includes finite maxima and explains epigraph reformulations of worst-case objectives. Pointwise minima need not be convex: $\min((x-1)^2,(x+1)^2)$ has value zero at both endpoints $\pm1$ but value one at their midpoint.

If $f$ is convex, then $x\mapsto f(Ax+b)$ is convex on its inverse-image domain. If $h$ is convex and nondecreasing on an interval containing the range of a convex scalar function $g$, then $h\circ g$ is convex. Indeed use convexity of $g$, monotonicity of $h$, then convexity of $h$. Omitting monotonicity is invalid: a convex decreasing function can reverse the first comparison. Convexity of each component of a composition is not a general composition rule.

Sublevel sets of a convex function are convex: for $f(x),f(y)\le a$, the convexity inequality gives $f((1-t)x+ty)\le a$. The converse is false. On the real line every sublevel of $x^3$ is an interval, yet the function is not convex on the whole line. Convex sublevels define quasiconvexity, which has different optimality and algorithmic consequences.

<a id="section-43-worked-example-1-robust-affine-loss"></a>
### Worked example 1: robust affine loss {#section-45-worked-example-1-robust-affine-loss}

Let $f(x)=\max\{x-1,1-x,2x+2,-2x-2\}$. It is the maximum of affine functions, so convex. It equals $\max\{|x-1|,2|x+1|\}$. For $x\in[-1,1]$, its two relevant branches are $1-x$ and $2x+2$; they meet at $x=-1/3$ with common value $4/3$. Every $x<-1$ has $|x-1|>2$, and every $x>1$ has $2|x+1|>4$. Inside the interval the maximum decreases toward the crossing from the left and increases to its right, so the unique minimum is $4/3$ at $-1/3$.

The function is nondifferentiable at the optimizer. A request for zero ordinary gradient would miss it. The epigraph has four affine constraints; at the optimum the two active slopes $-1$ and $2$ can balance with nonnegative weights $2/3$ and $1/3$. This anticipates subgradients without assuming differentiability.

<a id="section-49-first-order-characterization-with-both-directions-prove"></a>
## First-order characterization, with both directions proved {#section-51-first-order-characterization-with-both-directions-prove}

**Theorem 2.3.** Let $U\subseteq\mathbb R^n$ be open and convex and let $f:U\to\mathbb R$ be differentiable. Then $f$ is convex if and only if
$$f(y)\ge f(x)+\nabla f(x)^T(y-x)\qquad(x,y\in U).$$

*Proof.* Suppose $f$ is convex. For $0<t\le1$, rearrange its inequality along the segment from $x$ to $y$ to obtain
$$f(y)-f(x)\ge\frac{f(x+t(y-x))-f(x)}t.$$
Differentiability at $x$ gives the asserted limit as $t\downarrow0$. Conversely suppose the supporting inequality holds. For $z=(1-t)x+ty$ with $0<t<1$, apply it at $z$ first with endpoint $x$, then with endpoint $y$. Multiply those inequalities by $1-t$ and $t$. Their gradient terms cancel since $(1-t)(x-z)+t(y-z)=0$. Thus $(1-t)f(x)+tf(y)\ge f(z)$. Endpoints give equality, completing convexity. $\square$

Every zero-gradient point is consequently a global minimizer. Strict convexity makes a minimizer unique if one exists: otherwise its midpoint would have a strictly smaller value. Neither result proves existence. The strictly convex function $e^x$ on the real line has infimum zero and no minimizer.

Without convexity, a vanishing derivative can describe a maximum or a saddle, or neither kind of extremum: $x^3$ has derivative zero at the origin but changes sign across it. Positive curvature at one stationary point gives a local conclusion under a second-order theorem, rather than the global supporting inequality proved here.

Adding the two supporting inequalities with $x,y$ exchanged gives monotonicity of the gradient:
$$(\nabla f(x)-\nabla f(y))^T(x-y)\ge0.$$
For differentiable strongly convex functions the lower bound strengthens to $\mu\|x-y\|^2$. In particular two distinct stationary points are impossible. This inequality links geometry to stability estimates rather than merely classifying a Hessian.

<a id="section-66-hessian-tests-and-conditioning"></a>
## Hessian tests and conditioning {#section-68-hessian-tests-and-conditioning}

**Theorem 2.4.** If $f$ is twice continuously differentiable on an open convex set, it is convex exactly when its Hessian is positive semidefinite everywhere. A uniform bound $\nabla^2f(x)\succeq\mu I$ is equivalent to $\mu$-strong convexity on that set.

*Proof.* Restrict to a segment and write $\phi(t)=f(x+t(y-x))$. A positive semidefinite Hessian gives $\phi''(t)\ge0$, so $\phi'$ is nondecreasing. Integrating from zero to one proves the first-order supporting inequality and hence convexity. Conversely convexity gives the supporting inequality for $x+hv$; its second-order expansion and division by $h^2/2$ yield $v^T\nabla^2f(x)v\ge0$ as $h\to0$. For the strong version apply this argument to $f(x)-\mu\|x\|^2/2$; expansion of the squared norm gives precisely the strong-convexity definition. $\square$

Positive-definite Hessian everywhere implies strict convexity by restriction to any nonconstant segment, but its eigenvalues may approach zero, so no global strong-convexity constant need exist. Conversely a strictly convex function can have a singular Hessian at some points. For $x^4$, the second derivative vanishes at zero although strict convexity follows from strict increase of its derivative $4x^3$.

<a id="section-74-worked-example-2-a-quadratic-with-a-flat-direction"></a>
### Worked example 2: a quadratic with a flat direction {#section-76-worked-example-2-a-quadratic-with-a-flat-direction}

Minimize $f(x,y)=(x+y-1)^2$. Its Hessian is $2\begin{pmatrix}1&1\\1&1\end{pmatrix}$, with eigenvalues four and zero. The whole line $x+y=1$ minimizes the objective at zero. A positive semidefinite Hessian proves convexity, not uniqueness. Adding $\alpha(x^2+y^2)$ for $\alpha>0$ gives Hessian eigenvalues $4+2\alpha$ and $2\alpha$, hence strong convexity with constant $2\alpha$. The minimizer now has $x=y=1/(2+\alpha)$ by the two stationarity equations. It does not lie on the old solution line: regularization changes the objective as well as its curvature. As $\alpha\downarrow0$ the minimizer tends to the minimum-norm point $(1/2,1/2)$, while the curvature ratio diverges. Uniqueness alone is not a uniform conditioning guarantee.

<a id="section-78-constrained-first-order-conditions"></a>
## Constrained first-order conditions {#section-80-constrained-first-order-conditions}

**Theorem 2.5.** Suppose $C$ is convex, $f$ is convex and differentiable on an open set containing $C$, and $x_*\in C$. Then $x_*$ minimizes $f$ on $C$ exactly when
$$\nabla f(x_*)^T(y-x_*)\ge0\qquad\text{for every }y\in C.$$

*Proof.* If $x_*$ minimizes, the feasible segment $x_*+t(y-x_*)$ has nonnegative difference quotient from its endpoint minimum. Its limit as $t\downarrow0$ gives necessity. Conversely the supporting inequality gives $f(y)\ge f(x_*)+\nabla f(x_*)^T(y-x_*)\ge f(x_*)$. $\square$

Closedness of $C$ is useful for existence, but is not required in this conditional characterization once a feasible candidate is given. The gradient need not vanish at a boundary optimum. With normal cone $N_C(x)=\{v:v^T(y-x)\le0\text{ for all }y\in C\}$, the condition is $-\nabla f(x_*)\in N_C(x_*)$. This geometric form precedes KKT multiplier representations; representing the normal cone by constraint gradients may require a qualification.

<a id="section-87-worked-example-3-an-interval-boundary-optimum"></a>
### Worked example 3: an interval boundary optimum {#section-89-worked-example-3-an-interval-boundary-optimum}

Minimize $(x-3)^2$ over $[0,2]$. The unconstrained optimizer three is infeasible. At the actual optimizer two the derivative equals $-2$. For every feasible $y\le2$, $-2(y-2)\ge0$, proving global optimality by Theorem 2.5. The value is one and strict convexity gives uniqueness. In contrast, minimizing the same objective over the open interval $(0,2)$ has infimum one but no feasible optimizer. The derivative inequality characterizes a candidate; it cannot manufacture the missing endpoint.

For a $\mu$-strongly convex differentiable objective on a convex feasible set, the same supporting argument yields
$$f(y)-f(x_*)\ge\frac\mu2\|y-x_*\|^2.$$
Thus a genuinely feasible candidate with certified objective gap at most $\varepsilon$ has distance at most $\sqrt{2\varepsilon/\mu}$ from the unique optimum. Feasibility and a valid objective gap are essential; a small unconstrained gradient at an infeasible point supplies neither.

<a id="section-95-exercises-with-staged-hints-and-full-solutions"></a>
## Exercises with staged hints and full solutions {#section-97-exercises-with-staged-hints-and-full-solutions}

<a id="section-97-exercise-1-convex-intersection"></a>
### Exercise 1: convex intersection {#section-99-exercise-1-convex-intersection}

Prove an intersection of convex sets is convex, including the possibility that the intersection is empty.

<details>
<summary>Hint 1</summary>

Take two points of the intersection, if they exist.
</details>
<details>
<summary>Hint 2</summary>

The segment must belong to every set separately. The empty case is vacuous.
</details>
<details>
<summary>Full solution</summary>

If x and y belong to every set in the collection, their convex combination belongs to every set by each set's convexity, hence to the intersection. If there are no such points, the universal implication in the definition has no counterexample, so the empty set is convex too.
</details>

<a id="section-117-exercise-2-a-unique-global-stationary-point"></a>
### Exercise 2: a unique global stationary point {#section-119-exercise-2-a-unique-global-stationary-point}

Let $f(x)=e^x-x$. Show its stationary point is globally unique.

<details>
<summary>Hint 1</summary>

Compute the first two derivatives on the whole real line.
</details>
<details>
<summary>Hint 2</summary>

Use strict convexity after finding the stationary point; do not use a local test alone.
</details>
<details>
<summary>Full solution</summary>

$f'(x)=e^x-1$, so the only stationary point is zero. $f''(x)=e^x>0$ everywhere, making f strictly convex; therefore zero is the unique global minimizer. Its value is one. The second derivative has no positive uniform lower bound on the whole line, so this proof does not establish global strong convexity.
</details>

<a id="section-137-exercise-3-epigraph-and-maximum"></a>
### Exercise 3: epigraph and maximum {#section-139-exercise-3-epigraph-and-maximum}

Prove directly that the maximum of two convex functions on the same convex domain is convex.

<details>
<summary>Hint 1</summary>

Its epigraph is an intersection of two epigraphs.
</details>
<details>
<summary>Hint 2</summary>

Alternatively bound each function at the intermediate point by the same weighted maximum values.
</details>
<details>
<summary>Full solution</summary>

For $F=\max(f,g)$, both $f((1-t)x+ty)$ and $g((1-t)x+ty)$ are at most $(1-t)F(x)+tF(y)$. Their maximum obeys that bound. Equivalently $\operatorname{epi}F=\operatorname{epi}f\cap\operatorname{epi}g$, which is convex by Exercise 1 and the epigraph criterion. Finiteness on the common domain avoids any ambiguous extended-real operations.
</details>

<a id="section-157-exercise-4-strict-but-not-strong"></a>
### Exercise 4: strict but not strong {#section-159-exercise-4-strict-but-not-strong}

Prove $x^4$ is strictly convex on $\mathbb R$ but has no positive global strong-convexity constant.

<details>
<summary>Hint 1</summary>

Use its strictly increasing derivative for strictness.
</details>
<details>
<summary>Hint 2</summary>

Apply a proposed strong supporting inequality at zero and let the comparison point approach zero.
</details>
<details>
<summary>Full solution</summary>

The derivative $4x^3$ is strictly increasing. For any distinct endpoints, integrals of this derivative have strictly ordered average slopes on the two adjacent segment portions, giving a strict chord inequality. If strong convexity with $\mu>0$ held, its supporting inequality at zero would give $y^4\ge(\mu/2)y^2$. For nonzero $y$ this requires $y^2\ge\mu/2$, contradicted by sufficiently small $y$. The zero second derivative at zero gives the same obstruction through Theorem 2.4.
</details>

<a id="section-177-exercise-5-affine-composition-and-uniqueness"></a>
### Exercise 5: affine composition and uniqueness {#section-179-exercise-5-affine-composition-and-uniqueness}

Let $f(z)=\|z-b\|^2/2$ and $g(x)=f(Ax)$. Prove convexity of $g$ and determine when it is strictly convex.

<details>
<summary>Hint 1</summary>

Compute $\nabla^2g=A^TA$.
</details>
<details>
<summary>Hint 2</summary>

A nonzero kernel vector gives identical values along a whole line.
</details>
<details>
<summary>Full solution</summary>

The Hessian quadratic form is $\|Av\|^2\ge0$, proving convexity. If A is injective, the form is strictly positive for every nonzero v, hence g is strictly convex and strongly convex in finite dimensions. If A has a nonzero kernel vector v, then $A(x+tv)=Ax$ for all t, so g is constant along that line and cannot be strictly convex. Strict convexity of the outer function does not survive a noninjective affine map automatically.
</details>

<a id="section-197-exercise-6-constrained-gradient"></a>
### Exercise 6: constrained gradient {#section-199-exercise-6-constrained-gradient}

Minimize $f(x)=x^2$ on $[1,3]$ using the variational inequality, and explain why zero gradient is unnecessary.

<details>
<summary>Hint 1</summary>

Try the lower endpoint and compute the sign of every feasible displacement.
</details>
<details>
<summary>Hint 2</summary>

At one, the derivative is two and $y-1\ge0$.
</details>
<details>
<summary>Full solution</summary>

For every y in the interval, $f'(1)(y-1)=2(y-1)\ge0$, so one is globally optimal. Strict convexity makes it unique, and its value is one. The unconstrained stationary point zero is infeasible. The nonzero gradient points toward increasing objective on the available rightward directions; it is consistent with constrained optimality.
</details>

<a id="section-217-exercise-7-lower-semicontinuity-matters"></a>
### Exercise 7: lower semicontinuity matters {#section-219-exercise-7-lower-semicontinuity-matters}

On $[0,1]$, set $f(0)=1$ and $f(x)=x$ for $x>0$. Is f convex? Does it attain its infimum? Is it lower semicontinuous?

<details>
<summary>Hint 1</summary>

Check a chord with one endpoint zero separately from chords with positive endpoints.
</details>
<details>
<summary>Hint 2</summary>

For $0<t<1$ and $y>0$, compare $f(ty)=ty$ with $(1-t)f(0)+tf(y)$.
</details>
<details>
<summary>Full solution</summary>

Positive-endpoint chords give equality. Chords between zero and y give $ty\le1-t+ty$, so f is convex on its domain. Its infimum is zero, approached from the right but nowhere attained. At zero, $\liminf_{x\downarrow0}f(x)=0<1=f(0)$; lower semicontinuity fails. A convex function on a compact domain can therefore fail to attain its minimum if this boundary regularity is absent.
</details>

<a id="section-237-exercise-8-gradient-monotonicity"></a>
### Exercise 8: gradient monotonicity {#section-239-exercise-8-gradient-monotonicity}

Prove the gradient of a differentiable convex function on an open convex set is monotone.

<details>
<summary>Hint 1</summary>

Write the supporting inequality in both directions.
</details>
<details>
<summary>Hint 2</summary>

Adding cancels both function values.
</details>
<details>
<summary>Full solution</summary>

The two inequalities are $f(y)-f(x)\ge\nabla f(x)^T(y-x)$ and $f(x)-f(y)\ge\nabla f(y)^T(x-y)$. Their sum gives $0\ge(\nabla f(x)-\nabla f(y))^T(y-x)$, which is exactly $(\nabla f(x)-\nabla f(y))^T(x-y)\ge0$. This proof requires convexity throughout the domain, rather than a Hessian sign at just one candidate point.
</details>

<a id="section-257-exercise-9-gap-to-distance"></a>
### Exercise 9: gap to distance {#section-259-exercise-9-gap-to-distance}

A feasible point has certified objective gap at most $0.02$ for a strongly convex constrained problem with constant $\mu=4$. Give a distance bound and name the hypotheses behind it.

<details>
<summary>Hint 1</summary>

Use the quadratic growth inequality at a constrained minimizer.
</details>
<details>
<summary>Hint 2</summary>

Solve $\mu\|x-x_*\|^2/2\le0.02$.
</details>
<details>
<summary>Full solution</summary>

The bound is $\|x-x_*\|\le\sqrt{2(0.02)/4}=0.1$. It assumes an attained optimum, convex feasible set, strong convexity on that set, and a genuinely feasible candidate with a valid upper bound on its objective gap. The variational inequality removes the gradient linear term at the constrained optimum. Without those assumptions a small reported residual or gap is insufficient for this distance conclusion.
</details>

<a id="section-277-exercise-10-a-one-point-hessian-is-not-global-evidence"></a>
### Exercise 10: a one-point Hessian is not global evidence {#section-279-exercise-10-a-one-point-hessian-is-not-global-evidence}

For $f(x)=x^2-x^4$, classify zero locally and decide whether it is a global minimum on the real line.

<details>
<summary>Hint 1</summary>

Compare the second derivative at zero with the leading term for large magnitude.
</details>
<details>
<summary>Hint 2</summary>

Near zero, factor as $x^2(1-x^2)$; at infinity, divide by $x^4$.
</details>
<details>
<summary>Full solution</summary>

At zero, $f'=0$ and $f''=2>0$. For $0<|x|<1$, $f(x)>0=f(0)$, so zero is a strict local minimum. But $f(x)\to-\infty$ as $|x|\to\infty$, so no global minimum exists and zero is not global. The Hessian $2-12x^2$ changes sign; the global positive-semidefinite hypothesis of the convexity theorem fails.
</details>

<a id="section-297-connections-and-retained-exercise-identity"></a>
## Connections and retained exercise identity {#section-299-connections-and-retained-exercise-identity}

The earlier dual-gap exercise, with feasible value 12.4 and valid dual value 12.1, is retained in the duality chapter alongside the original Lagrangian example. Convexity globalizes supporting comparisons; dual feasibility supplies lower bounds by a different argument that does not itself require convexity. The next chapter develops separating hyperplanes and conjugacy. Later KKT conditions connect boundary geometry to constraint multipliers, with the qualifications stated explicitly.

For textbook treatments of the finite-dimensional results developed here, see Boyd and Vandenberghe, *Convex Optimization* (2004), Chapters 2–3. This chapter supplies its stated elementary proofs.
