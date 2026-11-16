
# Interior-Point Methods and the Central Path

## Why solve a sequence of interior problems?

A constrained optimum often lies on the boundary of its feasible set. Newton's method for the unconstrained objective can cross that boundary immediately. A barrier replaces the original objective by a family of smooth objectives that diverge at the constraint boundary. Solving these problems increasingly accurately can approach the constrained optimal value while maintaining strict feasibility.

Required preparation is convexity, differentiable optimality conditions, positive-definite linear systems and [first-course primal–dual methods](../linear-programming-optimisation/interior-point-methods.md). This chapter proves an objective-gap bound for a general smooth convex logarithmic barrier, explains the central-path equations and derives feasible Newton steps. It does not claim a polynomial complexity result from those facts alone. Self-concordance, neighbourhood control, linear-system accuracy and an initialization method are additional ingredients in such a result.

## The constrained problem and its barrier

Let $\Omega\subseteq\mathbb R^n$ be open and convex. Let $f_0,f_1,\ldots,f_m$ be twice continuously differentiable convex functions on $\Omega$, and let $Ax=b$ be affine equalities. Consider
$$
p_* = \min\{f_0(x):x\in\Omega,\ Ax=b,\ f_i(x)\le0\ (1\le i\le m)\}.
$$
We use the minimisation convention throughout. Assume a strictly feasible point exists: it satisfies the equalities and every inequality strictly. Redundant equalities may be eliminated so that $A$ has independent rows. Strict feasibility here concerns the inequalities inside the equality subspace, not an open ball in the full ambient space.

**Definition 8.1 (logarithmic barrier and central point).** On the strict domain
$$
D=\{x\in\Omega:Ax=b,\ f_i(x)<0\text{ for all }i\},
$$
define $\phi(x)=-\sum_i\log(-f_i(x))$. For $t>0$, a central point $x(t)$ minimises $F_t(x)=tf_0(x)+\phi(x)$ over $D$. The collection of these points, when uniquely defined and continuous, is called the central path. The parameter convention matters: increasing $t$ weakens the barrier relative to the original objective. Some books instead use its reciprocal.

Differentiation gives
$$
\nabla\phi=\sum_i\frac{-\nabla f_i}{f_i},\qquad
\nabla^2\phi=\sum_i\left(\frac{\nabla f_i\nabla f_i^T}{f_i^2}-\frac{\nabla^2f_i}{f_i}\right).
$$
Both Hessian terms are positive semidefinite because $f_i<0$ and the constraint functions are convex. Thus $F_t$ is convex on its strict domain. Positive definiteness on the equality tangent space gives uniqueness, but convexity alone does not give existence or strict convexity.

For logarithms of dimensional slacks, fix positive reference scales $s_i$ and write $-\log((-f_i)/s_i)$. This adds a constant independent of $x$, leaving derivatives and central points unchanged. Changing the objective scale, by contrast, changes the interpretation of $t$.

## Existence under a concrete compactness hypothesis

**Proposition 8.2 (attainment and uniqueness).** Suppose the non-strict feasible set $K$ is compact and contained in $\Omega$, the strict domain $D$ is nonempty, and $\nabla^2F_t$ is positive definite on $\ker A$ at every point of $D$. Then $F_t$ has a unique minimiser on $D$.

*Proof.* Choose $z\in D$ and a sequence in $D$ approaching the infimum with values at most $F_t(z)$. Compactness gives a convergent subsequence with limit $\bar x\in K$. All $f_i$ and $f_0$ are bounded on $K$. If any $f_i(\bar x)=0$, its negative logarithm tends to positive infinity; the other barrier terms are bounded below because their slacks are bounded above on $K$. The objective term is bounded as well, contradicting the upper bound on $F_t$. Thus every inequality remains strict at the limit, and continuity attains the infimum there. Positive tangent-space curvature makes $F_t$ strictly convex along every nonconstant feasible segment, so two different minimisers are impossible. $\square$

Compactness is sufficient, rather than necessary. Coercivity of a barrier sublevel set can replace it. An unbounded feasible set or an objective with an unattained infimum requires a separate existence argument. A smooth formula for the barrier does not supply that argument automatically.

## A dual witness and a convergence proof

At a central minimiser, differentiation along every vector in $\ker A$ gives zero. Consequently there is a vector $w$ such that
$$
t\nabla f_0(x(t))-\sum_i\frac{\nabla f_i(x(t))}{f_i(x(t))}+A^Tw=0.
$$
Define $\lambda_i=-1/(tf_i(x(t)))>0$ and $\nu=w/t$. These variables satisfy stationarity of the original Lagrangian and perturbed complementary slackness
$$
\lambda_i[-f_i(x(t))]=1/t.
$$
**Theorem 8.3 (central-path objective gap).** Under the assumptions above, a central point and these multipliers satisfy
$$
0\le f_0(x(t))-p_*\le m/t.
$$
In particular, its objective converges to the constrained optimal value as $t$ tends to infinity.

*Proof.* The Lagrangian $L(x,\lambda,\nu)=f_0(x)+\sum_i\lambda_if_i(x)+\nu^T(Ax-b)$ is convex in $x$. Its gradient vanishes at the central point, so the supporting inequality makes that point a global minimiser of $L$ over $\Omega$. Therefore its value is the dual function value
$$
q(\lambda,\nu)=L(x(t),\lambda,\nu)=f_0(x(t))-m/t.
$$
Weak duality gives $q\le p_*$, while feasibility gives $p_*\le f_0(x(t))$. Combining the bounds proves the claim. $\square$

The theorem proves objective convergence. It does not imply uniqueness of the original optimum or convergence of the central points to one specified parameter vector. Compactness ensures subsequential limits; continuity and the objective bound imply that every such limit is an optimum. A strictly convex original objective supplies uniqueness and then forces the whole bounded family to converge to that optimum.

## A residual allowance for an approximate central point

An approximate Newton iterate need not satisfy the exact gap formula. A useful replacement is available when the feasible set has a known diameter $D_K$ in a chosen norm. Take a strictly feasible x, set $\lambda_i=-1/(tf_i(x))$ and choose any equality multiplier $\nu$. Define the stationarity residual $r=\nabla f_0(x)+\sum_i\lambda_i\nabla f_i(x)+A^T\nu$. Convexity of the Lagrangian gives, for every feasible y,
$$
f_0(y)\ge L(y,\lambda,\nu)\ge f_0(x)-m/t+r^T(y-x)
\ge f_0(x)-m/t-D_K\|r\|_*.
$$
The last inequality uses the dual norm. Taking the minimum over feasible y proves objective error at most $m/t+D_K\|r\|_*$. This bound requires an independently justified diameter and residual allowance; a small stationarity residual by itself supplies neither. Floating evaluations of the constraints, objective and residual need their own error bounds before this exact inequality becomes a rigorous numerical certificate.

## Worked example 1: an interior approximation to a boundary optimum

Minimise $f_0(x)=x$ subject to $0\le x\le1$. Use $f_1=-x$ and $f_2=x-1$. The strict domain is $(0,1)$ and
$$
F_t(x)=tx-\log x-\log(1-x).
$$
Its derivative is $t-1/x+1/(1-x)$ and its second derivative is $1/x^2+1/(1-x)^2>0$. Setting the derivative to zero gives
$$
tx^2-(t+2)x+1=0.
$$
The root inside the interval is
$$
x(t)=\frac{2}{t+2+\sqrt{t^2+4}},
$$
where rationalising the numerator avoids cancellation for large $t$. The exact optimum is zero. At $t=10$, $x(t)$ is about $0.0901$, and the theorem gives the valid, looser objective bound $2/t=0.2$. Its multipliers are $1/(tx)$ and $1/[t(1-x)]$; direct substitution verifies stationarity and each complementarity product $1/t$.

## Newton directions with equality constraints

At a strictly feasible iterate let $g=\nabla F_t(x)$ and $H=\nabla^2F_t(x)$. A feasible Newton direction solves
$$
\begin{pmatrix}H&A^T\\A&0\end{pmatrix}
\begin{pmatrix}d\\v\end{pmatrix}
=\begin{pmatrix}-g\\0\end{pmatrix}.
$$
Assume $H$ is positive definite on $\ker A$. The direction minimises $g^Td+\tfrac12d^THd$ on that tangent space. Multiplying its first equation by $d^T$ and using $Ad=0$ gives $g^Td=-d^THd$. Thus a nonzero direction is a strict descent direction. A zero direction means stationarity on the equality subspace, not necessarily that the full ambient gradient is zero.

The squared Newton decrement is $\delta^2=-g^Td=d^THd$. It is a local quadratic-model diagnostic. A universal bound on distance to the exact central point does not follow without further hypotheses controlling Hessian variation. Strong convexity with a known constant can provide one kind of bound; self-concordance provides another. Report which theorem is being used rather than turning a small decrement into an unexplained accuracy claim.

## Worked example 2: equality feasibility and a damped step

Minimise $-\log x-\log y$ subject to $x+y=1$ with $x,y>0$. Start at $(1/4,3/4)$. Write a tangent direction as $(d,-d)$. The directional gradient coefficient is $-4+4/3=-8/3$; the tangent Hessian coefficient is $16+16/9=160/9$. Hence $d=(8/3)/(160/9)=3/20$. The full Newton update is $(2/5,3/5)$, still strictly feasible and closer to the central point $(1/2,1/2)$.

The decrement is $(160/9)(3/20)^2=2/5$. The sum remains one exactly because the step is tangent to the equality. A floating computation must also report its equality residual. Replacing the constrained solve by an unconstrained Newton step and subsequently renormalising changes the algorithm and requires a separate decrease argument.

## Feasible line search and initialization

For affine inequalities $a_i^Tx<b_i$, a direction permits positive step sizes below
$$
\alpha_{max}=\min_{a_i^Td>0}\frac{b_i-a_i^Tx}{a_i^Td}.
$$
With no positive denominator there is no finite affine blocker. Use a fraction below one of this maximum to stay strictly inside. For nonlinear constraints, verify their values at each proposed point; a linearised feasible prediction is insufficient.

Choose $c\in(0,1)$ and require Armijo decrease $F_t(x+\alpha d)\le F_t(x)+c\alpha g^Td$. Continuity keeps sufficiently small steps inside the strict domain. Differentiability and $g^Td<0$ make the inequality hold for sufficiently small positive $\alpha$. Thus exact-arithmetic backtracking terminates for a nonstationary iterate under these hypotheses. A finite implementation also needs minimum-step and nonfinite-value failure reporting.

Initialization is a separate optimization problem. A Phase I model may seek a common slack relaxation satisfying the equalities, then reduce that relaxation until every original constraint is strict. Failure of one local Phase I run is not an infeasibility proof. Linear programming has stronger alternatives developed in the first-course book; general convex infeasibility needs its own justified witness.

## Worked example 3: the fraction-to-boundary rule

Let $x=(1,2)$ with nonnegativity constraints and direction $d=(-2,1)$. The first coordinate blocks at $\alpha=1/2$ and the second does not block a positive step. Choosing fraction $0.9$ gives $\alpha=0.45$ and new point $(0.1,2.45)$, strictly positive. Choosing the full boundary step makes the logarithm undefined. Positivity alone does not prove the objective decreased; the Armijo calculation is still required.

For a generic nonlinear constraint such as $x_1^2+x_2^2<1$, the affine blocking formula does not apply to the curved boundary. Evaluate the original constraint during backtracking. This distinction prevents an apparently small linearised residual from accepting a point outside the barrier domain.

## The central point moves smoothly and its objective decreases

Under the compactness and positive tangent-curvature assumptions above,
the central point is unique for every positive t. Locally it depends
smoothly on t. To see this, regard its equality-constrained stationarity
equation and Ax=b as a system in x and the centring multiplier w.
The derivative with respect to those variables is the saddle matrix
with blocks H, Aᵀ, A and zero, where H is the Hessian of Fₜ.
It is invertible when A has independent rows and H is positive
definite on its kernel. Indeed, a vector in its nullspace has
Ad=0 and Hd+Aᵀv=0. Multiplication by d gives dᵀHd=0,
forcing d=0. Then Aᵀv=0 and row independence gives v=0.
The implicit-function theorem therefore gives a local differentiable branch.
Uniqueness makes the local branches agree wherever they overlap.

Differentiating those central equations yields
$$H x'(t)+A^Tw'(t)=-\nabla f_0(x(t)),\qquad Ax'(t)=0.$$
Multiply by x′. The derivative of the original objective along the
path is then minus the nonnegative quadratic form x′ᵀHx′.
It cannot increase as t grows. Its rate is strictly negative
whenever the central point actually moves. The barrier value moves
the other way: its derivative along the path equals minus t
times that original-objective derivative, because the centring
stationarity equation cancels the equality-normal contribution.

Thus moving toward a boundary optimizer trades a lower original
objective against a higher barrier cost. This makes the parameter
convention tangible. Increasing t does not promise that the full
function Fₜ evaluated at successive central points decreases, because
the function itself has changed. The comparison just proved concerns
the fixed original objective and the fixed barrier separately.

This smooth-path argument still supplies no bound on the work of
following that path. The derivative may become large or the tangent
Hessian poorly conditioned near the boundary. A numerical method
must decide how much t can change while the previous central
point remains a useful starting point, and how accurately to
recenter. Self-concordant analysis provides such control for specified
barriers, whereas the present implicit-function and monotonicity
proof only identifies the exact path's local geometry and value
direction.

## Weighted barriers retain an explicit gap accounting

Replace each logarithm by a
positive weight wi times that
logarithm. The central multiplier
becomes minus wi divided by
tfi, so its complementary
slack product is wi/t.
The same convex Lagrangian
proof gives objective gap
at most the sum of the
weights divided by t.
No additional strong-duality
theorem is required for
that supplied dual witness.

At a fixed parameter,
changing the weights generally
changes the central point.
It leaves the original
feasible set and objective
unchanged, but changes the
interior approximation used
to approach them. Duplicating
one constraint is one
way to increase its effective
weight, which explains the
representation dependence in
the earlier exercise. The
weights here are algorithmic
barrier choices, not automatically
physical preferences or fairness
weights in the original
objective. Retain their sum
in the claimed gap instead
of continuing to count only
distinct printed inequalities.

## Exercises

### Exercise 1 — Barrier curvature
<a id="interior-point-methods-ex-1"></a>

Show that $-\log(-f)$ is convex on $f<0$ for a twice differentiable convex $f$.

<details>
<summary>Hint 1</summary>

Differentiate twice, retaining both the outer and inner curvature terms.

</details>
<details>
<summary>Hint 2</summary>

The sign of the coefficient multiplying the Hessian of f matters.

</details>
<details>
<summary>Full solution</summary>

Its Hessian is $\nabla f\nabla f^T/f^2-\nabla^2f/f$. The first term is positive semidefinite because its quadratic form is a square divided by $f^2$. The second is positive semidefinite because $-1/f>0$ and $\nabla^2f$ is positive semidefinite. Their sum is therefore positive semidefinite on the convex strict sublevel domain.

</details>

### Exercise 2 — Duplicating a constraint
<a id="interior-point-methods-ex-2"></a>

What changes if the same inequality appears twice in the barrier?

<details>
<summary>Hint 1</summary>

Feasibility and the barrier objective are different objects.

</details>
<details>
<summary>Hint 2</summary>

Count the logarithm terms and their complementarity contributions.

</details>
<details>
<summary>Full solution</summary>

The feasible set is unchanged, but the barrier gains another negative logarithm of that slack. At fixed t this generally changes its minimiser. Each copy receives a multiplier with complementarity product $1/t$, so the stated gap bound counts both copies. The original optimum is unchanged; a barrier path depends on the chosen constraint representation.

</details>

### Exercise 3 — A sharper scalar bound
<a id="interior-point-methods-ex-3"></a>

For example 1 prove $x(t)<1/t$.

<details>
<summary>Hint 1</summary>

Use the stationary equation before solving its quadratic.

</details>
<details>
<summary>Hint 2</summary>

All central-point coordinates lie strictly between zero and one.

</details>
<details>
<summary>Full solution</summary>

Stationarity gives $1/x=t+1/(1-x)>t$. Since t and x are positive, taking reciprocals yields $x<1/t$. This is a problem-specific improvement over the general $m/t=2/t$ bound; it does not invalidate the general theorem.

</details>

### Exercise 4 — A zero tangent direction
<a id="interior-point-methods-ex-4"></a>

At $(1/2,1/2)$ in example 2, why is the feasible Newton direction zero although the ambient gradient is nonzero?

<details>
<summary>Hint 1</summary>

Write the ambient gradient and the equality normal.

</details>
<details>
<summary>Hint 2</summary>

Only directions whose coordinates sum to zero are feasible.

</details>
<details>
<summary>Full solution</summary>

The gradient is $(-2,-2)$, parallel to equality normal $(1,1)$. Its product with every tangent $(d,-d)$ is zero. The positive tangent Hessian therefore minimises the quadratic model at d=0. A multiplier v=2 balances the ambient gradient in the KKT equation.

</details>

### Exercise 5 — Objective versus point convergence
<a id="interior-point-methods-ex-5"></a>

Explain why a bound on objective suboptimality need not bound distance to one named optimum.

<details>
<summary>Hint 1</summary>

Consider an objective constant on a nontrivial feasible segment.

</details>
<details>
<summary>Hint 2</summary>

An additional curvature or uniqueness hypothesis is needed for a point-distance statement.

</details>
<details>
<summary>Full solution</summary>

A constant objective has zero objective error at every feasible point while different optima can be far apart. The central-path gap theorem then controls values only. Under strong convexity with constant $\mu>0$, one can instead combine $f(x)-p_*\ge\mu\|x-x_*\|^2/2$ with the gap bound to obtain distance at most $\sqrt{2m/(\mu t)}$.

</details>

### Exercise 6 — Reconstruct a dual certificate
<a id="interior-point-methods-ex-6"></a>

For a central point with four inequality constraints and t=200, give the certified objective interval.

<details>
<summary>Hint 1</summary>

Every complementarity product contributes one over t.

</details>
<details>
<summary>Hint 2</summary>

For minimisation the primal value is the upper bound.

</details>
<details>
<summary>Full solution</summary>

If the exact central-point objective is v, its constructed dual value is $v-4/200=v-0.02$. Weak duality and feasibility give $v-0.02\le p_*\le v$. An approximate Newton iterate is not automatically an exact central point, so using this interval numerically requires accounting for its stationarity and arithmetic errors.

</details>

### Exercise 7 — Compute an affine blocker
<a id="interior-point-methods-ex-7"></a>

From x=0 under inequalities x<2 and -x<1, find the largest permissible positive step along d=3.

<details>
<summary>Hint 1</summary>

Only constraints whose left side increases can block this direction.

</details>
<details>
<summary>Hint 2</summary>

Strict inequalities do not allow equality at the blocking endpoint.

</details>
<details>
<summary>Full solution</summary>

The first inequality requires $3\alpha<2$, so the admissible range is $0<\alpha<2/3$. The second becomes $-3\alpha<1$, which holds for every positive alpha. The supremum step is $2/3$, not an admissible strictly feasible step. A fraction-to-boundary strategy chooses less.

</details>

### Exercise 8 — Rescale a slack
<a id="interior-point-methods-ex-8"></a>

Replace one constraint f<0 by cf<0 with c>0. What happens to the barrier minimiser and its multiplier?

<details>
<summary>Hint 1</summary>

Expand the logarithm of the scaled slack.

</details>
<details>
<summary>Hint 2</summary>

Check the multiplier against the rescaled gradient.

</details>
<details>
<summary>Full solution</summary>

The barrier changes by the constant $-\log c$, so its minimiser is unchanged at fixed t. The new multiplier is $-1/(tcf)=\lambda/c$. Its contribution to stationarity is $(\lambda/c)c\nabla f=\lambda\nabla f$, unchanged. Multiplier sizes depend on the constraint's units and normalization.

</details>

### Exercise 9 — Why positivity is not decrease
<a id="interior-point-methods-ex-9"></a>

Does staying inside all constraints ensure a proposed step improves F_t?

<details>
<summary>Hint 1</summary>

Strict feasibility specifies a domain, rather than an ordering of objective values.

</details>
<details>
<summary>Hint 2</summary>

Consider moving away from the minimiser of the two-logarithm example.

</details>
<details>
<summary>Full solution</summary>

No. From $(1/2,1/2)$, the feasible point $(1/4,3/4)$ has smaller product xy and hence larger $-\log(xy)$. A feasibility calculation controls whether the objective is defined. A descent calculation such as Armijo controls whether its value decreases. They need separate conditions.

</details>

### Exercise 10 — What a complexity claim needs
<a id="interior-point-methods-ex-10"></a>

Why do the central-path gap and finite backtracking proofs not by themselves give polynomial runtime?

<details>
<summary>Hint 1</summary>

One result concerns exact central points and the other one accepted step.

</details>
<details>
<summary>Hint 2</summary>

The amount of centring work and the arithmetic cost must both be bounded.

</details>
<details>
<summary>Full solution</summary>

The arguments do not bound Newton iterations per parameter update, admissible parameter growth, initialization cost, condition numbers, solve accuracy or bit lengths. Polynomial path-following results require additional structural control, commonly a specified self-concordant barrier, neighbourhood strategy and arithmetic model. Positive curvature and a small formal gap are insufficient substitutes for those hypotheses.

</details>

## Summary and continuation

A logarithmic barrier creates strict-domain convex problems whose exact minimisers supply dual multipliers and an explicit m/t objective gap. Feasible Newton steps minimise a tangent quadratic model, while line search controls both the domain and decrease. Existence, objective convergence, point convergence and algorithmic complexity are separate claims. Conic and composite models next ask which barrier or proximal structure their geometry supplies.

Boyd and Vandenberghe, *Convex Optimization*, chapter 11, and Nocedal and Wright, *Numerical Optimization*, provide further reading. The compactness, gap, direction and line-search arguments used here are proved directly; no external prose or exercises are reproduced.
