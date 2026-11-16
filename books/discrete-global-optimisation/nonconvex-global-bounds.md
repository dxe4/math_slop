
# Nonconvex Global Bounds and Spatial Branching {#section-1-nonconvex-global-bounds-and-spatial-branching}

A local optimizer can show that no nearby feasible perturbation improves an
objective. Global optimization asks for more: no feasible point anywhere in
the declared domain is better. For a nonconvex problem, stationary points,
KKT conditions, and small local steps do not provide that conclusion. A global
certificate must combine a feasible incumbent with a valid bound on every
region not yet eliminated.

This chapter assumes [convex optimisation](#/books/numerical-mathematics-optimization-by-structure), [integer formulations](integer-formulations-relaxations.md), [branching](branch-and-bound-cuts.md), and supplied [verified interval enclosures](../numerical-mathematics-error-algorithms/verified-interval-computation.md). It studies deterministic
bounded-domain methods for factorable continuous and mixed-integer problems.
It does not claim that every nonconvex program has a computable finite global
bound.

<a id="section-13-the-problem-and-the-global-invariant"></a>
## The problem and the global invariant {#section-15-the-problem-and-the-global-invariant}

Use the minimization convention

\[
 z^*=\min\{f(x):g_i(x)\le0\ (i=1,\ldots,m),\ x\in D\}, \tag{1}
\]

where \(D=[\ell,u]\subset\mathbb R^n\) is a nonempty compact box and the
functions are continuous on \(D\). Compactness and continuity imply that a
feasible problem attains its minimum. For mixed-integer variants, selected
coordinates are additionally restricted to finite integer sets.

A **node** \(N\) represents a subbox \(D_N\subseteq D\), plus any inherited
integer restrictions. A node relaxation has feasible set containing every
original feasible point in \(D_N\), and a mathematically valid value \(L_N\)
satisfying

\[
 L_N\le \inf\{f(x):x\in D_N,\ g(x)\le0\}. \tag{2}
\]

An incumbent \(\hat x\) must satisfy the original constraints, not merely a
relaxation, and \(U=f(\hat x)\) therefore satisfies \(z^*\le U\). If
\(\mathcal A\) is the active-node set, define

\[
 L=\min\bigl(\{U\}\cup\{L_N:N\in\mathcal A\}\bigr). \tag{3}
\]

Provided the active nodes cover every original feasible point not already
proved unable to improve \(U\), the exact global invariant is

\[
 L\le z^*\le U. \tag{4}
\]

Including \(U\) makes (3) meaningful when \(\mathcal A\) is empty and yields
\(L=U\) at an exact proof. The absolute optimality gap is \(U-L\). If the
declared stopping rule is \(U-L\le\varepsilon\), the returned incumbent is
globally \(\varepsilon\)-optimal in objective value. This statement requires
every \(L_N\) to be a rigorous lower bound, the node cover to be exhaustive,
and \(U\) to come from an originally feasible point. A local solver's best
value or a floating-point estimate without a directional guarantee cannot be
inserted as \(L_N\).

<a id="section-59-factorable-expressions-and-range-enclosures"></a>
## Factorable expressions and range enclosures {#section-61-factorable-expressions-and-range-enclosures}

The [verified-computation chapter](../numerical-mathematics-error-algorithms/verified-interval-computation.md) develops inclusion functions, outward rounding, dependency and interval Newton arguments. Here an enclosure routine is a supplied primitive: for each box it returns bounds containing every exact value on that box. A global-search proof may then use the lower endpoint to discard a box only when that endpoint is no better than an independently feasible incumbent. Its logic requires sound bounds over the entire box, rather than values sampled at selected points.

<a id="section-63-worked-example-1-interval-pruning"></a>
### Worked example 1: interval pruning {#section-65-worked-example-1-interval-pruning}

On \(x\in[0,1]\), consider the constraint
\(g(x)=x^2-2\le0\). Interval evaluation gives
\(g([0,1])=[-2,-1]\), so every point satisfies the constraint. By contrast,
on \([2,3]\), it gives \([2,7]\), whose lower endpoint is positive; the
entire box is infeasible and may be discarded. If the enclosure were
\([-0.1,7]\), no conclusion would follow: containing positive values does not
prove infeasibility, and containing negative values does not prove feasibility
of any particular point.

Range reduction applies inverse implications. If \(x^2\le1\) and the current
box is \([-3,2]\), then intersecting with \([-1,1]\) is valid. Repeating such
contractors can tighten a node before constructing its optimization
relaxation, but a contractor must never remove a feasible point.

<a id="section-79-convex-and-concave-envelopes-for-bilinear-terms"></a>
## Convex and concave envelopes for bilinear terms {#section-81-convex-and-concave-envelopes-for-bilinear-terms}

Let \(w=xy\) on \(x\in[\ell_x,u_x]\),
\(y\in[\ell_y,u_y]\). Multiplying the nonnegative quantities
\((x-\ell_x)(y-\ell_y)\),
\((u_x-x)(u_y-y)\),
\((u_x-x)(y-\ell_y)\), and
\((x-\ell_x)(u_y-y)\) produces the McCormick inequalities

\[
\begin{aligned}
 w&\ge \ell_x y+\ell_y x-\ell_x\ell_y,\\
 w&\ge u_x y+u_y x-u_xu_y,\\
 w&\le u_x y+\ell_y x-u_x\ell_y,\\
 w&\le \ell_x y+u_y x-\ell_xu_y.
\end{aligned} \tag{6}
\]

These four planes describe the convex hull of the graph of a single bilinear
term over a rectangle. In a larger expression with repeated products, adding
one auxiliary variable and (6) for each product gives a relaxation, but it need
not be the convex hull of the full graph because shared-variable dependencies
remain.

<a id="section-103-worked-example-2-a-bilinear-lower-bound"></a>
### Worked example 2: a bilinear lower bound {#section-105-worked-example-2-a-bilinear-lower-bound}

Minimize \(xy\) subject to \(x+y=1\), \(0\le x,y\le1\). The true objective
is \(x(1-x)\), whose global minimum is zero at either endpoint. On the unit
box, (6) becomes
\(w\ge0\), \(w\ge x+y-1\), \(w\le x\), and \(w\le y\). With
\(x+y=1\), the relaxation gives \(w\ge0\), so its lower bound is zero and is
exact for minimization. For maximization, the relaxation gives \(w\le\min(x,y)\le1/2\), attained by the relaxed point \(x=y=w=1/2\).
The original product has maximum \(1/4\) at \(x=y=1/2\), since \(x(1-x)=1/4-(x-1/2)^2\); hence the relaxed upper bound \(1/2\) is valid but not tight.
The equality makes this minimization lower bound exact, not the maximization relaxation; exactness must not be extrapolated to arbitrary networks of products.

The gap of a bilinear envelope shrinks with the box. Its maximum vertical
deviation is proportional to
\((u_x-\ell_x)(u_y-\ell_y)\). Thus exhaustive bisection drives this source of
relaxation error to zero when widths vanish.

<a id="section-119-univariate-envelopes"></a>
## Univariate envelopes {#section-121-univariate-envelopes}

For a twice differentiable function \(h\) on \([a,b]\), convexity information
provides simple estimators. If \(h\) is convex, every tangent is a global
underestimator and the secant is an overestimator:

\[
 h(t)\ge h(s)+h'(s)(t-s),\qquad
 h(t)\le \frac{b-t}{b-a}h(a)+\frac{t-a}{b-a}h(b). \tag{7}
\]

For concave \(h\), directions reverse. If curvature changes sign, partition
at known inflection points or construct a verified envelope by other means.
Calling a tangent a lower bound without verifying convexity on the entire
node interval is invalid.

<a id="section-135-worked-example-3-a-concave-objective-relaxation"></a>
### Worked example 3: a concave objective relaxation {#section-137-worked-example-3-a-concave-objective-relaxation}

Minimize \(-x^2\) on \([-1,2]\). The objective is concave, so its chord is a
global underestimator. Through \((-1,-1)\) and \((2,-4)\), the chord is
\(q(x)=-x-2\). Minimizing the affine lower estimator on the interval gives
\(-4\) at \(x=2\), equal to the true global minimum. On a constrained problem,
the chord may be loose, but its direction remains valid. A tangent to
\(-x^2\) would be an overestimator and could not provide a minimization lower
bound.

For \(h(x)=x^2\), a secant is an overestimator, while tangents are
underestimators. Which side is needed depends on how the atom appears in the
objective and constraints. Composition rules must track monotonicity: replacing
an inner expression by a lower bound inside a decreasing outer function can
reverse the desired inequality.

<a id="section-151-convex-relaxation-of-a-factorable-program"></a>
## Convex relaxation of a factorable program {#section-153-convex-relaxation-of-a-factorable-program}

Introduce an auxiliary variable for each internal node of the expression
graph. Replace equalities for nonconvex atoms by convex envelope inequalities
valid on the current variable bounds, retain convex epigraph constraints in
their exact form when possible, and relax integer coordinates. Solving the
resulting convex program gives \(L_N\).

Three facts must be separate in a proof ledger:

1. **Containment:** every original feasible point in \(D_N\), lifted through
   its exact expression values, satisfies the relaxation.
2. **Optimization:** the relaxation solver returns a certified lower bound on
   the relaxation optimum, not merely a feasible relaxation point.
3. **Numerics:** coefficient rounding, feasibility tolerances, and termination
   preserve the lower-bound direction.

Containment alone does not make the objective reported by a stopped solver a
bound. Conversely, an exact convex solve does not help if one envelope plane
has the wrong direction.

<a id="section-172-worked-example-4-lower-bound-plus-incumbent"></a>
### Worked example 4: lower bound plus incumbent {#section-174-worked-example-4-lower-bound-plus-incumbent}

Consider

\[
 \min\{w:x+y=1.2,\ w=xy,\ 0\le x,y\le1\}. \tag{8}
\]

McCormick gives \(w\ge x+y-1=0.2\) and \(w\ge0\), so \(L=0.2\). The exact
substitution gives \(x(1.2-x)\) on \(x\in[0.2,1]\), a concave parabola whose
minimum is \(0.2\) at either endpoint. Evaluating \((x,y)=(0.2,1)\) produces
the feasible incumbent \(U=0.2\). Since \(L=U\), global optimality is
certified without branching.

If instead the equality were \(x+y=1\) and a local method returned
\((1/2,1/2)\) of value \(1/4\), that point would be a local maximum along the
line, not a useful incumbent for minimizing. Feasibility does make it an upper
bound, but the endpoints immediately improve it to zero.

<a id="section-191-spatial-branch-and-bound"></a>
## Spatial branch-and-bound {#section-193-spatial-branch-and-bound}

Spatial branch-and-bound partitions continuous domains, not just integer
assignments. At a node, it constructs a convex relaxation on \(D_N\), obtains
a valid lower bound, seeks an original-feasible point for the incumbent, and
then either prunes or subdivides the box. A canonical exact scheme is:

1. initialize \(\mathcal A=\{D\}\) and \(U=+\infty\), unless an original-
   feasible point is already known;
2. select a node \(N\) and run inclusion-valid domain reduction;
3. if reduction proves infeasibility, discard \(N\);
4. solve a valid convex relaxation and obtain certified \(L_N\);
5. if an original-feasible point is found, replace \(U\) by the smaller
   incumbent value;
6. prune \(N\) when \(L_N\ge U\), with conservative numerical comparisons;
7. otherwise split one variable interval into children whose union is the
   parent and add those children to \(\mathcal A\);
8. update the global lower bound by (3) and stop only when
   \(U-L\le\varepsilon\), or when no active node remains.

This exact pruning rule preserves the active-cover hypothesis behind (3). The
finite tolerance enters only through the global stopping test
\(U-L\le\varepsilon\). A solver may instead discard a node with
\(L_N\ge U-\varepsilon\), but then it must retain that node bound in a separate
ledger or report only an \(\varepsilon\)-optimality guarantee; the minimum over
the remaining active nodes alone is no longer an exact lower bound on \(z^*\).
A time or node limit likewise produces a bounded-but-unclosed result
\([L,U]\), not a global solution certificate.

<a id="section-220-conditions-behind-convergence"></a>
### Conditions behind convergence {#section-222-conditions-behind-convergence}

An asymptotic global-convergence statement needs hypotheses. A standard
template assumes:

- the initial domain is compact and all original functions are continuous;
- node relaxations are valid lower bounds;
- branching is exhaustive and **consistent**: along every infinite nested
  branch, widths of variables responsible for relaxation error tend to zero;
- relaxation estimators are convergent: for any such shrinking sequence of
  boxes, the relaxation gap tends to zero;
- node selection is fair enough that a node whose lower bound could beat the
  incumbent is not ignored forever;
- feasible incumbents are generated or recovered sufficiently that limit
  feasible solutions can be approached, and feasibility is checked against
  the original model;
- arithmetic errors are enclosed conservatively.

Under these assumptions, if the problem is feasible, the global lower bounds
and best incumbent values can be driven to the global value; finite
\(\varepsilon\)-termination follows under the usual additional uniformity and
algorithmic progress conditions. Compactness alone does not ensure finite
termination. Nor does repeated bisection help if the algorithm always splits
an irrelevant variable while the width controlling a bilinear error never
shrinks.

<a id="section-246-worked-example-5-one-spatial-split"></a>
### Worked example 5: one spatial split {#section-248-worked-example-5-one-spatial-split}

Minimize \(xy\) subject to \(x+y=1\), with
\(x,y\in[1/4,3/4]\). The true minimum is \(3/16\), at
\((1/4,3/4)\) or \((3/4,1/4)\). The root McCormick lower planes include
\[
 w\ge \tfrac14x+\tfrac14y-\tfrac1{16}=\tfrac3{16}
\]
after using \(x+y=1\), so the root is already exact. To illustrate a split,
divide \(x\) at \(1/2\); the equality implies corresponding ranges
\(y\in[1/2,3/4]\) and \(y\in[1/4,1/2]\). Both children retain the endpoint
incumbents, and neither can have value below \(3/16\). Their union covers the
parent exactly. Dropping the shared boundary \(x=1/2\) would be harmless here
only because it is not optimal; in general branch coverage may not rely on
such foreknowledge.

<a id="section-262-choosing-a-branch"></a>
## Choosing a branch {#section-264-choosing-a-branch}

Longest-edge bisection ensures widths decrease under fair selection. More
targeted rules estimate each nonconvex term's envelope violation, predicted
bound improvement, or propagation impact. Reliability affects speed, not the
proof invariant, provided children cover the parent and consistency is
preserved.

For a bilinear auxiliary \(w=xy\), a relaxation solution may have residual
\(|w-xy|\). Branching on \(x\) or \(y\) can shrink its envelope. A large
residual is a useful signal but not a proof that a chosen split will improve
the objective bound. Tie-breaking, node selection, and branch points should be
recorded for reproducibility.

Integer variables use discrete branches. General integer \(y_j\) at a relaxed
value \(r\) splits into \(y_j\le\lfloor r\rfloor\) and
\(y_j\ge\lceil r\rceil\). Continuous spatial branches typically use closed
intervals \([\ell_j,s]\) and \([s,u_j]\); their overlap at \(s\) is safe and
their union equals the parent.

<a id="section-282-constraint-propagation-as-proved-implication"></a>
## Constraint propagation as proved implication {#section-284-constraint-propagation-as-proved-implication}

Before solving a relaxation, a node can often be contracted. For an equality
\(x+y=1\), current intervals \(x\in X\), \(y\in Y\) imply

\[
 x\in X\cap(1-Y),\qquad y\in Y\cap(1-X). \tag{9}
\]

Applying both updates to a fixed point can expose infeasibility or reduce
envelope error. For \(w=xy\), interval multiplication constrains
\(w\in W\cap(XY)\); inverse multiplication may tighten a factor only when
zero and sign cases are handled correctly. Every contractor must preserve all
original-feasible points of the input box. Empty output then proves original
infeasibility. A routine that merely fails to find a consistent point has not
met this contract.

<a id="section-299-worked-example-7-equality-propagation"></a>
### Worked example 7: equality propagation {#section-301-worked-example-7-equality-propagation}

Suppose \(x+y=1\), \(x\in[0.8,1]\), and \(y\in[0.5,0.9]\). From the interval
for \(y\), equality implies \(x\in[0.1,0.5]\), whose intersection with
\([0.8,1]\) is empty. Thus the node is infeasible. Sampling might notice the
conflict; interval intersection proves it for every point.

<a id="section-306-certified-arithmetic-and-solver-bounds"></a>
## Certified arithmetic and solver bounds {#section-308-certified-arithmetic-and-solver-bounds}

In exact rational linear relaxations, dual vectors can be checked
algebraically. In conic and nonlinear relaxations, floating-point solvers
usually return approximate primal and dual points. A dual objective is not
automatically a rigorous lower bound if dual feasibility is violated by
roundoff. One remedy repairs the dual point into a provably feasible set and
evaluates it with directed rounding. Another bounds the effect of residuals
using known variable bounds. The repair theorem and constants belong in the
certificate.

Suppose a proposed affine underestimator is \(a^Tx+b\), but coefficient errors
can raise it by at most \(\delta\) on the node box. Then
\(a^Tx+b-\delta\) is safely below the intended estimator. This weakens the
bound but preserves direction. Reporting more digits does not give that
guarantee.

If a node relaxation value is enclosed by
\([\underline L_N,\overline L_N]\), minimization pruning must use the proved
lower endpoint. The upper endpoint says nothing about how low the node might
be. An uncertain incumbent objective should analogously use a conservative
upper enclosure evaluated at a proved feasible point.

<a id="section-329-relative-gaps-and-objective-transformations"></a>
## Relative gaps and objective transformations {#section-331-relative-gaps-and-objective-transformations}

The absolute gap survives objective translation: replacing \(f\) by
\(f+C\) shifts \(L\), \(U\), and \(z^*\) equally while leaving \(U-L\)
unchanged. A relative gap does not. One declared rule is

\[
 \frac{U-L}{\max\{1,|U|\}}\le\tau. \tag{10}
\]

Adding a large constant changes its denominator without changing the optimizer
or absolute uncertainty. Bounds from different formulations must be translated
to the same original objective scale. If \(U\) is zero or changes sign,
informal “percent gap” language is especially unreliable.

For maximization, directions reverse: feasible incumbents are lower bounds,
node relaxations provide upper bounds, the global upper bound is the maximum
over active node bounds and the incumbent, and the gap is upper minus lower.
Negating the objective is safe only when every bound is negated and relabeled.

<a id="section-349-worked-example-8-translation-exposes-an-ambiguity"></a>
### Worked example 8: translation exposes an ambiguity {#section-351-worked-example-8-translation-exposes-an-ambiguity}

Let \([L,U]=[-0.02,0.01]\), so the absolute gap is 0.03. Rule (10) reports
0.03. Adding 1000 gives \([999.98,1000.01]\), the same absolute gap but a
relative value about \(3\times10^{-5}\). The mathematical uncertainty did not
improve; only the objective origin changed.

<a id="section-356-lower-bounds-for-quadratic-programs"></a>
## Lower bounds for quadratic programs {#section-358-lower-bounds-for-quadratic-programs}

For \(f(x)=x^TQx+q^Tx\) on a box, an indefinite \(Q\) causes nonconvexity.
Choose \(\alpha\ge\max\{0,-\lambda_{\min}(Q)\}\). Then
\(Q+\alpha I\succeq0\), and

\[
 f(x)=x^T(Q+\alpha I)x+q^Tx-\alpha\sum_jx_j^2. \tag{11}
\]

The first part is convex. Each concave term \(-\alpha x_j^2\) has a secant
underestimator on \([\ell_j,u_j]\). Their sum is a convex quadratic
underestimator whose error shrinks quadratically with box widths. A
conservative upper bound on \(-\lambda_{\min}(Q)\) suffices; an underestimate
can leave negative curvature and invalidate convexity.

<a id="section-372-worked-example-9-alpha-convexification"></a>
### Worked example 9: alpha-convexification {#section-374-worked-example-9-alpha-convexification}

For \(f(x)=-x^2\) on \([-1,2]\), take \(Q=-1\) and \(\alpha=1\). The convex
part vanishes. The secant underestimator is \(-x-2\), recovering Worked
example 3. Minimizing it gives the exact lower bound \(-4\). After bisection,
separate secants cannot be weaker and are typically tighter.

<a id="section-379-incumbents-and-feasibility-restoration"></a>
## Incumbents and feasibility restoration {#section-381-incumbents-and-feasibility-restoration}

Local nonlinear optimization is valuable for incumbents. Starting from a
relaxation solution, one may fix integers, project bounds, and run a local
constrained solver. But a solver success flag is not the certificate.
Recompute every original constraint and the objective, including eliminated
equalities and nonlinear domains, under a declared residual policy. If exact
feasibility is required, use interval verification or another rigorous method.

When no incumbent exists, \(U=+\infty\) and bound pruning cannot yet occur,
though infeasibility and domain reduction remain available. Failure of a local
search does not prove that a node is infeasible. Conversely, one feasible
point supplies an upper bound but says nothing about global optimality until
the lower bounds close the gap.

<a id="section-394-worked-example-6-interpreting-an-unfinished-run"></a>
### Worked example 6: interpreting an unfinished run {#section-396-worked-example-6-interpreting-an-unfinished-run}

A minimization run has incumbent \(U=5.04\). Active nodes have certified lower
bounds \(5.00,5.11,6.3\). The latter two nodes cannot improve the incumbent
and may be pruned at zero tolerance. The global lower bound is then 5.00 and
the absolute gap is 0.04. The incumbent is globally 0.04-optimal. It is not
certified exactly optimal, and reporting “gap below one percent” additionally
requires a declared relative-gap denominator.

If the objective values are known integer, the strict bound \(L>5\) would
certify an incumbent of 6 only after the lower bound's rigorous direction and
integrality of every feasible objective are established. Floating-point
display rounding is not that argument.

<a id="section-408-other-global-lower-bounding-mechanisms"></a>
## Other global lower-bounding mechanisms {#section-410-other-global-lower-bounding-mechanisms}

Semidefinite relaxations lift quadratic products into a matrix
\(X\approx xx^T\) and retain \(\begin{pmatrix}1&x^T\\x&X\end{pmatrix}\succeq0\).
Dropping the rank-one condition gives a convex lower-bound problem for suitable
minimization formulations. Sum-of-squares hierarchies can tighten polynomial
bounds under compactness certificates, at rapidly increasing computational
cost. Lagrangian relaxation gives bounds when dual feasibility is checkable,
though nonconvex primal problems may have a nonzero duality gap.

These alternatives fit the same ledger: document why their feasible sets
contain the original lifted points, why their computed values are lower
bounds, and whether a hierarchy converges under the exact assumptions of the
model. A stronger theoretical hierarchy does not excuse an uncertified
numerical solve.

<a id="section-424-monotonicity-of-regional-relaxations"></a>
## Monotonicity of regional relaxations {#section-426-monotonicity-of-regional-relaxations}

If \(D_C\subseteq D_N\), a well-constructed child relaxation is often at
least as strong as restricting the parent relaxation, because tighter bounds
improve envelopes. Its optimum should then satisfy \(L_C\ge L_N\) in
minimization. This monotonicity is useful for debugging, but is not automatic
when cuts are dropped, scaling changes, or numerical errors differ between
nodes. A child lower bound below its parent's is not necessarily invalid; it
is a prompt to inspect the relaxation definitions and bound certification.

Pruning a parent by bound implicitly closes every descendant. Pruning one
child does not close its siblings. When domain reduction maps a parent into a
smaller box containing all feasible points, that contracted box replaces the
parent without creating a coverage hole. If reduction instead produces a
finite union, each member must enter the active cover or be independently
pruned.

<a id="section-441-worked-example-10-combining-child-bounds"></a>
### Worked example 10: combining child bounds {#section-443-worked-example-10-combining-child-bounds}

A node with lower bound two is split into children with certified bounds three
and five. Their union covers the parent, so after the parent is removed the
regional lower bound improves to three. If the incumbent is four, the
five-bound child closes, while the three-bound child stays active. The global
interval contributed by this branch is then \([3,4]\). Averaging child bounds
to four would be invalid: the optimum might lie entirely in the first child.

<a id="section-450-proving-global-infeasibility"></a>
## Proving global infeasibility {#section-452-proving-global-infeasibility}

When no feasible point is known, absence of an incumbent is not evidence of
infeasibility. A global infeasibility certificate arises only after an
exhaustive active cover has been closed by valid infeasibility tests. At a
node, a convex relaxation declared infeasible proves the original node
infeasible only when the relaxation truly contains every original-feasible
point and the infeasibility determination is certified. Interval contractors
can give another route by producing an empty enclosure through inclusion-valid
steps.

If every node is closed this way, the initial feasible set is empty. If one
node remains unresolved at a time limit, the correct status is “no feasible
point found; feasibility unknown,” together with its bounds and diagnostics.
This is distinct from a feasible problem whose objective is unbounded below.
On the compact-domain continuous model (1), an attained finite objective is
automatic whenever the feasible set is nonempty; an unbounded-below result
therefore signals a violated continuity/domain assumption or a modeling or
solver error.

<a id="section-470-symmetry-and-redundant-search"></a>
## Symmetry and redundant search {#section-472-symmetry-and-redundant-search}

Symmetries can map different boxes or integer assignments to equal objective
and constraint structure. Valid symmetry-breaking constraints select at least
one representative from every orbit and can reduce search. They require a
proof that no orbit is removed completely. A convenient ordering such as
\(x_1\ge x_2\) is safe only if permuting those coordinates preserves the
entire original model, including bounds, coefficients, and integrality.

Symmetry does not improve a node bound by itself. It removes duplicated
regions. Combining it with spatial branching also requires care at fixed
points of the symmetry, where orbit sizes shrink. The certificate ledger
should state the symmetry map and representative rule rather than describing
the constraint as an unexplained performance tweak.

<a id="section-485-diagnostics-and-failure-boundaries"></a>
## Diagnostics and failure boundaries {#section-487-diagnostics-and-failure-boundaries}

- **Local equals global:** KKT conditions are generally necessary only for a
  local solution and may even fail without constraint qualifications.
- **Sampled lower bound:** evaluating the objective on a grid gives feasible
  upper bounds for minimization, not a lower bound between samples.
- **Invalid interval arithmetic:** inward-rounded endpoints can exclude exact
  values and invalidate pruning.
- **Division through zero:** an interval reciprocal is undefined as one finite
  interval when the denominator contains zero; branch or reformulate.
- **Envelope outside its box:** McCormick and secant planes are valid only for
  the bounds from which they were derived.
- **Relaxation point called feasible:** auxiliary envelope variables need not
  satisfy the original nonlinear equalities.
- **Stale node bounds:** domain tightening can improve a bound, but using a
  bound from a different, non-containing region can be invalid.
- **Nonexhaustive branching:** children must cover every parent feasible point.
- **Heuristic bound:** a local minimum is an incumbent, never a global lower
  bound for minimization.
- **Silent stopping:** time-limit termination must report the surviving
  interval \([L,U]\), not “optimal.”

<a id="section-507-practice-with-solutions"></a>
## Practice with solutions {#section-509-practice-with-solutions}

**1. Incumbent logic.** Why does an original-feasible point of value 9 give an
upper rather than lower bound in minimization?

<details>
<summary>Hint 1</summary>

The infimum is no larger than any one feasible value.
</details>
<details>
<summary>Hint 2</summary>

Other feasible points can have smaller objective.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The global minimum cannot exceed the value at any particular
feasible point, so \(z^*\le9\). Other feasible points may be better.
</details>


**2. Active-node bound.** With \(U=8\) and active lower bounds 6, 7.5, and 9,
what is the global interval, and which node can close at zero tolerance?

<details>
<summary>Hint 1</summary>

Take the minimum over the incumbent and all active lower bounds.
</details>
<details>
<summary>Hint 2</summary>

The nine-bound node cannot improve a feasible value eight.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Equation (3) gives \(L=6\), hence \(6\le z^*\le8\). The node
with lower bound 9 cannot improve the incumbent and can close.
</details>


**3. McCormick unit box.** List the four inequalities for \(w=xy\) when
\(0\le x,y\le1\).

<details>
<summary>Hint 1</summary>

Substitute zero and one endpoints into the four envelope formulas.
</details>
<details>
<summary>Hint 2</summary>

Two planes are lower bounds and two are upper bounds.
</details>
<details>
<summary>Full solution</summary>

**Solution.** \(w\ge0\), \(w\ge x+y-1\), \(w\le x\), and \(w\le y\).
</details>


**4. Dependency.** Give the natural interval enclosure of \(x(1-x)\) on
\([0,1]\) and compare it with the exact range.

<details>
<summary>Hint 1</summary>

Natural interval arithmetic treats repeated occurrences independently.
</details>
<details>
<summary>Hint 2</summary>

The exact scalar parabola has its peak one quarter at one half.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Treating occurrences independently gives
\([0,1][0,1]=[0,1]\). The exact range is \([0,1/4]\); dependence causes the
overestimate.
</details>


**5. Tangent direction.** The function \(e^x\) is convex. Is its tangent a
valid lower or upper estimator on a box?

<details>
<summary>Hint 1</summary>

Convexity supplies a supporting affine inequality at every base point.
</details>
<details>
<summary>Hint 2</summary>

The tangent is below the entire graph, not merely one side locally.
</details>
<details>
<summary>Full solution</summary>

**Solution.** A global lower estimator: \(e^x\ge e^s+e^s(x-s)\) for every
real \(x\).
</details>


**6. Gap statement.** Certified bounds are \(L=-2.03\), \(U=-2.00\). State an
honest absolute-gap conclusion.

<details>
<summary>Hint 1</summary>

Subtract the certified lower endpoint from the upper incumbent.
</details>
<details>
<summary>Hint 2</summary>

A percentage needs a separate denominator even when both values are negative.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The incumbent is globally 0.03-optimal in objective value because
\(U-L=0.03\). A percentage requires a separately declared scale.
</details>


**7. Branch cover.** Split \([-2,5]\) at one without losing a point.

<details>
<summary>Hint 1</summary>

Use closed child intervals sharing the split endpoint.
</details>
<details>
<summary>Hint 2</summary>

Their union must retain every real point of the parent.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Use closed children \([-2,1]\) and \([1,5]\). Their union is the
parent; overlap at one is harmless.
</details>


**8. Infeasibility enclosure.** If interval evaluation proves
\(g_i(D_N)\subset[0.2,4]\) for a required constraint \(g_i(x)\le0\), what may
be concluded?

<details>
<summary>Hint 1</summary>

The full enclosure lies strictly on the violating side.
</details>
<details>
<summary>Hint 2</summary>

The inclusion property makes the sign conclusion universal over the box.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Every point in the node violates the constraint by at least 0.2,
so the node is infeasible and may be pruned, assuming inclusion-valid
arithmetic.
</details>


**9. Relaxation residual.** A relaxation returns \(x=y=1/2,w=0\) for an
auxiliary equality \(w=xy\). Is this original feasible?

<details>
<summary>Hint 1</summary>

Evaluate the original nonlinear equality after returning from the relaxation.
</details>
<details>
<summary>Hint 2</summary>

At x=y=one half the product is one quarter, not zero.
</details>
<details>
<summary>Full solution</summary>

**Solution.** No. McCormick permits \(w=0\) at that point, but the original
product is \(1/4\). The point is relaxation feasible only.
</details>


**10. Convergence condition.** Why is repeatedly bisecting \(x_1\) insufficient
when all relaxation error comes from a wide interval for \(x_2\)?

<details>
<summary>Hint 1</summary>

Identify which interval widths control the estimator error.
</details>
<details>
<summary>Hint 2</summary>

Shrinking an unrelated coordinate need not improve the relevant envelope.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The relevant envelope gap need not shrink. Consistent branching
must drive widths responsible for relaxation error to zero along any infinite
unresolved branch.
</details>

<a id="section-720-summary-and-connections"></a>
## Summary and connections {#section-722-summary-and-connections}

Global nonconvex optimization is a discipline of enclosures. Compact domains
and continuity establish existence; interval methods and convex envelopes
construct regional relaxations; feasible points create incumbents; spatial and
integer branches preserve exhaustive coverage; and the active-node lower bound
measures exactly what remains unproved. Convergence needs compactness,
valid and convergent relaxations, consistent branching, fair exploration,
feasible incumbent logic, and conservative arithmetic. These conditions
connect back to convex dual certificates and forward to polynomial and
semidefinite hierarchies. Without them, “global” describes an aspiration, not
a theorem.

The durable object is not the search tree alone but the bound ledger attached
to it: region, enclosure assumptions, relaxation definition, certified bound,
incumbent witness, pruning reason, and surviving gap. That ledger lets another
reader distinguish a complete proof, an approximate global guarantee, and an
unfinished computation without trusting undocumented solver state.

<a id="section-739-source-and-verification-note"></a>
## Sources {#section-741-source-and-verification-note}

For the bounded bilinear-envelope claim, see Garth P. McCormick, “Computability of Global Solutions to Factorable Nonconvex Programs: Part I—Convex Underestimating Problems,” *Mathematical Programming* 10 (1976), 147–175, [DOI](https://doi.org/10.1007/BF01580665). This citation does not assert sole historical priority.
