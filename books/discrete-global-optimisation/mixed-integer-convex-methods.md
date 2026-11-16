
# Mixed-Integer Convex Methods

Mixed-integer convex optimization combines a finite or otherwise bounded
integer search with continuous convex subproblems. The integer variables make
the feasible set nonconvex, but convexity has not disappeared: after fixing an
integer assignment, convex duality can produce a globally valid bound or cut.
That distinction is the organizing principle of this chapter. We use convex
analysis to make each node trustworthy and discrete search to make the union
of nodes exhaustive.

This chapter assumes the [convex optimisation primary](#/books/numerical-mathematics-optimization-by-structure), [integer formulations](integer-formulations-relaxations.md), and [separation and branching](separation-branching-strategies.md). All spaces are
finite-dimensional. Whenever finite termination is claimed, integer domains
are finite, continuous subproblems attain their optima, and every reported
subproblem bound is mathematically valid under the stated arithmetic policy.

## Formulation and value functions

Write a mixed-integer convex minimization problem as

\[
 z^*=\min\{c^Ty+f(x):g_i(x,y)\le0\ (i=1,\ldots,m),
 \ x\in X,\ y\in Y\cap\mathbb Z^p\}, \tag{1}
\]

where \(X\subseteq\mathbb R^n\) and \(Y\subseteq\mathbb R^p\) are closed
convex sets, \(Y\cap\mathbb Z^p\) is finite, and each \(g_i\) is jointly
convex. The function \(f\) is proper closed convex. Binary variables are the
important special case \(Y\subseteq[0,1]^p\). For a fixed integer vector
\(y\), define

\[
 v(y)=\inf_{x\in X}\{c^Ty+f(x):g(x,y)\le0\}. \tag{2}
\]

Problem (1) is the minimum of \(v(y)\) over finitely many integer vectors.
An incumbent \(U\) is the objective value of a feasible mixed-integer point,
so \(z^*\le U\). A relaxation value \(L\), obtained by enlarging the feasible
set, satisfies \(L\le z^*\). These directions remain fixed throughout.

Convexity must hold in the relaxed variables, not merely for each fixed
integer assignment. For example, \(y x^2\) is convex in \(x\) for each binary
\(y\), but its naive continuous extension is not jointly convex. A formulation
needs either a correct convex extension, such as a perspective, or a branching
scheme whose node relaxations are genuinely valid.

## Conic representations

Many useful convex constraints are represented by a closed convex cone
\(K\):

\[
 A x+B y-b\in K. \tag{3}
\]

Nonnegative orthants give linear inequalities; second-order cones represent
norm bounds; positive-semidefinite cones represent linear matrix
inequalities; and exponential cones represent entropy-like expressions. A
conic representation matters because its dual gives a checkable lower bound.
For a fixed \(y\), a dual feasible multiplier in the dual cone \(K^*\) weakly
bounds the primal value even if the dual optimum is not attained.

Strong duality requires a qualification. A typical sufficient condition is a
Slater point: for the fixed integer vector, there is an \(x\) satisfying all
nonaffine inequalities strictly and affine constraints exactly. Without such
a condition, a finite primal optimum need not yield the multipliers required
by an outer-approximation cut. An implementation must distinguish “subproblem
infeasible,” “dual certificate obtained,” and “solver stopped without a valid
certificate.”

### Worked example 1: a binary conic choice

Consider

\[
 \min_{x\in\mathbb R^2,y\in\{0,1\}} t+3y
 \quad\text{s.t.}\quad \|x-(2,0)\|_2\le t,\quad x_1\le y. \tag{4}
\]

For \(y=0\), the nearest point to \((2,0)\) with \(x_1\le0\) is
\((0,0)\), so \(t=2\) and the value is \(2\). For \(y=1\), the nearest
point with \(x_1\le1\) is \((1,0)\), giving \(t=1\) and total value \(4\).
Thus \(y=0\) is globally optimal. The norm epigraph is a second-order-cone
constraint; replacing it by sampled tangent planes would give only a
relaxation until enough planes had been generated.

## Continuous relaxation and perspective strength

Relaxing \(y\in\{0,1\}^p\) to \(0\le y\le1\) gives a convex problem when the
formulation is jointly convex. Its optimum is a lower bound. Formulation
strength still matters: two models can agree at every binary vector while
having very different fractional epigraphs.

The central example is an on/off term. Suppose
\[
y\in\{0,1\},\qquad -My\le x\le My,
\]
and the cost is \(x^2\) when the activity is on. The closed
perspective epigraph is

\[
 x^2\le ty,\qquad t\ge0,\quad y\ge0, \tag{5}
\]

with the convention that \(y=0\) forces \(x=0\). For \(y>0\), (5) means
\(t\ge x^2/y\), the perspective of the quadratic. It is representable by a
rotated second-order cone and is the closed convex hull of the on/off
epigraph under the stated domain. The weaker constraint \(t\ge x^2\) ignores
the cost of fractional activation.

### Worked example 2: measuring a perspective gap

At \(x=1/2,y=1/2\), the naive quadratic epigraph allows \(t=1/4\). The
perspective requires

\[
 t\ge \frac{x^2}{y}=\frac{1/4}{1/2}=\frac12.
\]

Both formulations agree when \(y=1\), and both force \(x=0\) when \(y=0\)
if the on/off bounds are present. Yet the perspective doubles the lower bound
on this fractional slice. This is relaxation strength, not a change to the
integer model.

For a proper closed convex \(h\), the closed perspective is
\(\widetilde h(x,y)=y h(x/y)\) for \(y>0\), with its lower-semicontinuous
extension at \(y=0\). The value at zero is the recession function in the
appropriate direction, not automatically zero. Stating “set it to zero at
\(y=0\)” is valid only when other constraints force \(x=0\).

## Outer approximation from supporting planes

Suppose, for clarity, that the full continuous-relaxation objective
\(\psi(x,y)=c^Ty+f(x)\) and every \(g_i\) are differentiable and convex. At a
point \((x^k,y^k)\), convexity gives

\[
 \psi(x,y)\ge \psi(x^k,y^k)+\nabla \psi(x^k,y^k)^T
 ((x,y)-(x^k,y^k)), \tag{6}
\]

and the analogous inequality for each \(g_i\). Introducing an epigraph
variable \(\eta\), a finite collection of such supporting planes creates a
mixed-integer linear master problem. Since the planes underestimate convex
functions, the master objective is a valid lower bound; its integer proposal
is then checked by solving the corresponding convex subproblem.

A standard outer-approximation iteration is:

1. solve the current mixed-integer master and obtain \((\hat y,L)\);
2. if its valid lower bound reaches the incumbent within the declared gap,
   stop;
3. solve the convex subproblem at \(\hat y\);
4. if feasible, update the incumbent and add objective/constraint supporting
   cuts justified at a subproblem optimizer;
5. if infeasible, add a valid feasibility cut or an exact no-good cut;
6. repeat.

With a finite integer set, exact master solves, exact convex subproblem
solutions, appropriate constraint qualifications, and cuts that prevent an
unresolved integer assignment from recurring, the process terminates after
finitely many distinct assignments. This is not a polynomial complexity
claim. With approximate solves, termination becomes a tolerance-dependent
algorithmic statement and requires conservative bound accounting.

### Worked example 3: an objective cut

Let \(y\in\{0,1,2\}\) and

\[
 v(y)=\min_x\{(x-1)^2+(y-x)^2\}. \tag{7}
\]

The optimizer satisfies \(2(x-1)+2(x-y)=0\), hence
\(x(y)=(1+y)/2\) and \(v(y)=(y-1)^2/2\). At \(y^k=0\),
\(v(0)=1/2\) and \(v'(0)=-1\), so convexity yields the global cut
\(\eta\ge1/2-y\). At \(y^k=2\), it yields
\(\eta\ge y-3/2\). The two cuts give lower bounds \(1/2,-1/2,1/2\) at
\(y=0,1,2\); the middle bound is weak. Evaluating \(y=1\) adds
\(\eta\ge0\) and confirms the global optimum zero. A tangent is a lower
estimator because the value function here is convex; using a tangent to a
nonconvex value function would not be valid.

## Generalized Benders cuts

Outer approximation linearizes explicit convex functions. Generalized
Benders decomposition instead uses the dual of the fixed-\(y\) subproblem.
Suppose

\[
 v(y)=c^Ty+\inf_{x\in X}\{f(x):Gx+Hy\le d\}. \tag{8}
\]

For a dual-feasible multiplier \(\lambda\ge0\), the Lagrangian infimum

\[
 \phi_\lambda(y)=c^Ty+
 \inf_{x\in X}\{f(x)+\lambda^T(Gx+Hy-d)\} \tag{9}
\]

satisfies \(\phi_\lambda(y)\le v(y)\) for every \(y\). Therefore
\(\eta\ge\phi_\lambda(y)\) is a global optimality cut whenever its expression
is tractable in the master. If strong duality holds at \(y^k\) and
\(\lambda^k\) is dual optimal, the cut is tight at \(y^k\).

If a fixed-\(y\) subproblem is infeasible, a feasibility cut must come from a
valid alternative theorem, a dual ray under the relevant conic assumptions,
or another proof. A no-good cut for a binary vector,

\[
 \sum_{j:y_j^k=0}y_j+\sum_{j:y_j^k=1}(1-y_j)\ge1, \tag{10}
\]

is always an exact way to exclude that one assignment, but generalizes
nothing and may cause enumeration. For an infeasible assignment it is a valid feasibility cut. For a feasible evaluated assignment it is only an exclusion from unresolved search, safe after its value is retained and dominated by the incumbent; it is not a valid row for the full original feasible set.

### Deriving a cut without hiding the signs

It is useful to derive (9) once in full. For any \(x\) feasible at a proposed
\(y\) and any \(\lambda\ge0\),

\[
 Gx+Hy-d\le0
 \quad\Longrightarrow\quad
 \lambda^T(Gx+Hy-d)\le0. \tag{10a}
\]

Consequently

\[
 f(x)\ge f(x)+\lambda^T(Gx+Hy-d)
 \ge \inf_{z\in X}\{f(z)+\lambda^T(Gz+Hy-d)\}.
\]

Taking the infimum over primal-feasible \(x\) proves
\(v(y)\ge\phi_\lambda(y)\). The sign would reverse if constraints were
written \(Gx+Hy-d\ge0\) while retaining nonnegative multipliers. This short
calculation is safer than recalling a cut formula from memory.

When \(f\) is strongly convex, the inner minimizer in (9) is unique, but
uniqueness is not required for weak duality. When the infimum is
\(-\infty\), the multiplier yields no useful cut even if its sign is correct.
For equality constraints, multipliers are unrestricted and the corresponding
term enters without a sign restriction.

## Indicator constraints and finite bounds

An implication such as

\[
 y=0\quad\Longrightarrow\quad a^Tx\le b \tag{14}
\]

is often encoded as \(a^Tx\le b+My\) for binary \(y\). Validity requires

\[
 M\ge \sup\{a^Tx-b:x\text{ satisfies all constraints active when }y=1\}.
 \tag{15}
\]

If the supremum is infinite, no finite \(M\) proves the implication. If it is
finite, using an easily written number much larger than (15) preserves integer
equivalence but enlarges the continuous relaxation. It can also make residual
tolerances deceptive: a violation of size \(10^{-6}M\) may be large on the
natural scale of the original constraint.

Bounds can be obtained by solving auxiliary convex optimization problems. A
valid, possibly conservative, upper bound on (15) suffices. Every domain
assumption used in deriving it must remain in the model. Deleting a variable
bound after computing \(M\) silently invalidates the indicator formulation.
Native indicator or disjunctive conic representations can avoid a displayed
big-M coefficient, but their internal relaxation still has mathematical
assumptions worth auditing.

### Worked example 5: deriving rather than guessing big M

Let \(0\le x_1\le2\), \(-1\le x_2\le3\), and require
\(y=0\Rightarrow 2x_1-x_2\le1\). Over the stated box,
\(2x_1-x_2-1\) is maximized at \((2,-1)\), with value four. Thus

\[
 2x_1-x_2\le1+4y
\]

is valid, and four is the smallest constant justified by the box alone. With
\(y=0\) it recovers the intended inequality; with \(y=1\) it permits every
point in the box because \(2x_1-x_2\le5\). Choosing \(M=3\) wrongly removes
\((2,-1,1)\). Choosing \(M=10^6\) is valid but unnecessarily weak.

## Disjunctive convex hulls

A finite union of convex sets is a natural MICP object. Let
\(C_k=\{x:A_kx\le b_k\}\), \(k=1,\ldots,K\), be nonempty bounded
polyhedra. The disaggregated formulation introduces \(x^k\) and selectors
\(y_k\):

\[
 x=\sum_kx^k,\quad
 A_kx^k\le b_k y_k,\quad
 \sum_ky_k=1,\quad y_k\in\{0,1\}. \tag{16}
\]

When exactly one selector is one, the active component equals \(x\) and the
others lie in their zero-scaled recession sets, which are \(\{0\}\) under
boundedness. Relaxing \(y\) to the simplex produces the convex hull of the
union in the lifted formulation. For general closed convex sets, perspective
functions play the role of the scaled inequalities.

This construction can be much stronger than a compact big-M model, at the
cost of replicated variables and constraints. Strength is measured by the
projected relaxation, not by the number of symbols in the formulation.

### Worked example 6: convexifying two intervals

The disjunction \(x\in[-2,-1]\cup[1,3]\) can be represented by

\[
 x=x^1+x^2,\quad -2y_1\le x^1\le-y_1,
 \quad y_2\le x^2\le3y_2,
 \quad y_1+y_2=1.
\]

With binary selectors this is exact. With \(0\le y\le1\), its projection is
the convex hull \([-2,3]\). The fractional point \(x=0\) is correctly present
in the relaxation although it is absent from the disjunction. Convex-hull
formulation means the tightest convex relaxation in \(x\)-space; it does not
make the nonconvex union itself convex or remove the need for integrality.

## Cut management and numerical validity

An accumulated master may contain thousands of supporting planes. Removing a
valid cut enlarges the relaxation and cannot invalidate a newly recomputed
lower bound, but continuing to quote the old, stronger bound after deletion
requires proof that the old bound remains globally valid for all unresolved
assignments. In a clean ledger, each global lower bound is associated with the
exact master from which it came.

Cut normalization changes neither the halfspace nor its validity when the
scale is positive, but it affects numerical conditioning. Nearly parallel
cuts can be redundant. Aggregating or rounding coefficients is safe only if
the resulting inequality is still an underestimator. A rounded tangent plane
can cross above a convex function; directed rounding or a proved downward
offset repairs the bound.

Warm starts, incumbent heuristics, and inexact subproblem solutions can save
time. Their claims remain typed:

- a heuristic feasible point updates \(U\);
- a dual-feasible approximate multiplier can update a lower model if its
  Lagrangian infimum is bounded rigorously;
- a primal approximate subproblem point alone supplies neither a global cut
  nor a lower bound;
- an exact no-good cut safely excludes a proved-infeasible assignment, or an evaluated assignment whose value is already accounted for; it may lose generalization.

## A finite-termination proof template

Let \(S=Y\cap\mathbb Z^p\) be finite. Suppose every master solve returns a
valid lower bound and an assignment \(y^k\in S\), and every subproblem is
resolved in one of three ways: a feasible optimizer and tight valid
optimality cut; a valid certificate of infeasibility plus a feasibility cut;
or a no-good cut excluding \(y^k\) after its exact optimum has been retained
or its infeasibility established. Excluding a feasible unresolved assignment
is not an admissible resolution. Further suppose an assignment whose exact
value is already represented cannot be selected again with a falsely better
master value.

If the algorithm does not stop earlier by gap, each iteration resolves at
least one previously unresolved member of \(S\). Hence there are at most
\(|S|\) such iterations before every assignment is either evaluated or proved
infeasible. The best feasible evaluation is then globally optimal. This proof
uses finiteness, exact resolution, and nonrecurrence; it does not follow merely
from convexity of the subproblems. A branch-and-bound implementation may visit
more than \(|S|\) nodes because partial assignments overlap many complete
assignments, though complete finite branching still terminates on bounded
integer domains.

## Initial masters and boundedness

An outer-approximation master can be unbounded before it has enough objective
planes. This does not prove the original MICP unbounded. If a known global
lower bound \(\underline f\) exists, initialize the epigraph with
\(\eta\ge\underline f\). Otherwise, obtain initial cuts from a feasible
assignment, solve a separate bounding problem, or use an algorithm that does
not require a finite first master objective. Inventing an arbitrary floor may
exclude the true optimum and corrupt every later gap.

Variable bounds play two roles. They can make the integer assignment set
finite, and they can make constants or Lagrangian infima finite. Artificial
bounds must be labeled: a solution touching one has solved the bounded model,
not necessarily the intended unbounded-domain problem. To justify expansion,
one needs a theorem that either an optimum lies inside the enlarged bounds or
the sequence of bounded optima converges appropriately.

Master feasibility also differs from original feasibility. Supporting cuts
are necessary conditions for a convex constraint, and finitely many of them
typically admit points outside its curved feasible set. Thus a master proposal
never updates the incumbent until its continuous subproblem is checked. On the
other hand, if every cut is globally valid and the master is infeasible, then
the original problem is infeasible: the relaxation contains every original
feasible lifted point.

### Worked example 10: a master needs an epigraph floor

For \(\min\{e^y:y\in\{0,1\}\}\), a master with variable \(\eta\) and no
supporting plane has objective \(\min\eta\) and is unbounded, although the
original optimum is one. The known inequality \(e^y\ge1\) on \([0,1]\)
provides the valid initialization \(\eta\ge1\). Alternatively, evaluating
\(y=0\) produces the tangent \(\eta\ge1+y\), which both bounds the master and
is tight at the optimum.

## Tolerances as model statements

Suppose an implementation accepts an integer coordinate when
\(|y_j-\operatorname{round}(y_j)|\le\tau_I\). It must still decide whether
the rounded point, rather than the fractional solver vector, satisfies the
original continuous constraints. If a big-M row contains \(M y_j\), rounding
changes its right-hand side by as much as \(M\tau_I\). Hence integrality and
row-feasibility tolerances cannot be audited independently.

Likewise, a subproblem objective interval
\([\underline v,\overline v]\) has two different uses. A proved feasible
primal point with objective \(\overline v\) may update the incumbent. A proved
dual lower endpoint \(\underline v\) may update a master bound. Their midpoint
has no automatic certificate role. If an OA plane is computed from approximate
gradients, it needs an error bound that shifts the plane downward enough to
remain a global underestimator on the declared domain.

An honest approximate termination record can therefore read:
“rounded incumbent rechecked with original residual at most
\(\tau_F\); global lower bound computed with outward error allowance
\(\delta_L\); reported absolute gap uses the conservative endpoints.” The
tolerances are part of the conclusion, not implementation debris.

### Worked example 7: a Benders lower plane

For

\[
 v(y)=\min_{x\ge0}\{x^2:x\ge2-y\},\qquad 0\le y\le2, \tag{11}
\]

write the inequality as \(2-y-x\le0\). The Lagrangian is
\(x^2+\lambda(2-y-x)\), \(\lambda\ge0\). Minimizing over unrestricted
\(x\) gives \(x=\lambda/2\) and
\(\phi_\lambda(y)=\lambda(2-y)-\lambda^2/4\). At \(y^k=1\), the primal
optimizer is \(x=1\) and the KKT multiplier is \(\lambda=2\). Thus
\(\eta\ge3-2y\), tight at \(y=1\). The exact value is
\(v(y)=(2-y)^2\) on this interval, and
\((2-y)^2-(3-2y)=(y-1)^2\ge0\), directly verifying global validity.

## Branch-and-bound with convex nodes

One can also branch directly on integer variables and solve convex
relaxations at nodes. For minimization, each node relaxation provides a lower
bound \(L_N\). Let \(U\) be the best feasible incumbent. A node may be pruned
if it is infeasible, if \(L_N\ge U\) under an exact-zero-gap convention, or
if its relaxation solution is mixed-integer feasible and certified optimal
for the node. Branching on fractional \(y_j\) into
\(y_j\le\lfloor\bar y_j\rfloor\) and
\(y_j\ge\lceil\bar y_j\rceil\) exhausts all integer descendants.

The global lower bound is

\[
 L=\min\bigl(\{U\}\cup\{L_N:N\text{ active}\}\bigr),
 \qquad L\le z^*\le U. \tag{12}
\]

Including \(U\) handles the empty active set. A requested absolute-gap
termination criterion is \(U-L\le\varepsilon_{\rm abs}\). One possible
relative criterion is
\((U-L)/\max\{1,|U|\}\le\varepsilon_{\rm rel}\), but the denominator and
objective scaling must be declared. Solver-returned estimates are not valid
bounds unless their algorithm and tolerances guarantee the needed direction.

### Worked example 8: closing a convex-node tree

Minimize \((x-3)^2+y\) subject to \(x\le1+2y\), \(x\ge0\), and
\(y\in\{0,1\}\). For \(y=0\), the best \(x\) is one and the value is four.
For \(y=1\), \(x=3\) is allowed and the value is one. Hence the incumbent
\((3,1)\) has \(U=1\). In the continuous relaxation, the best choice at fixed
\(0\le y\le1\) is \(x=1+2y\), so the reduced objective is

\[
4(1-y)^2+y.
\]

Its derivative is \(8y-7\), giving \(y=7/8\), \(x=11/4\), and lower bound
\(L=15/16\). Thus the root relaxation leaves gap \(1/16\); it does not prove
optimality. Branching on \(y\) gives child bounds four and one, so the
\(y=0\) child is dominated and the \(y=1\) child matches the incumbent,
closing the proof. A feasible point of value one without these valid lower
bounds would not close it.

## Nondifferentiability and extended formulations

Supporting hyperplanes need subgradients, not necessarily gradients. For a
proper closed convex function \(h\), any \(s\in\partial h(w^k)\) gives
\(h(w)\ge h(w^k)+s^T(w-w^k)\). At boundary points the subdifferential may be
empty relative to the ambient space even when a conic representation remains
well behaved. Extended conic formulations can therefore be more reliable than
trying to manufacture derivatives of eliminated value functions.

The closure of a formulation also matters. Strict inequalities do not define
closed feasible sets and may destroy attainment. Domain errors in logarithms,
reciprocals, and perspectives must be represented as mathematical constraints,
not left to floating-point exceptions.

## Sensitivity information at an integer assignment

Multipliers do more than make cuts. They quantify first-order changes in the
fixed-assignment value under right-hand-side perturbations. If
\(g_i(x,y)\le u_i\), the Lagrangian uses
\(\lambda_i(g_i(x,y)-u_i)\); an optimal multiplier therefore contributes
the subgradient component \(-\lambda_i\) of the convex perturbation value,
under strong duality and the usual attainment hypotheses. The sign is
mathematically determined by the chosen perturbation convention.

This derivative does not predict what happens after the optimal integer
assignment changes. The mixed-integer value is a lower envelope of values over
discrete alternatives and is generally nonsmooth or nonconvex as external
parameters vary. Report a multiplier as conditional on the fixed assignment,
unless a separate argument establishes stability of that assignment.

### Worked example 11: conditional sensitivity

For fixed \(y\in\{0,1\}\), minimize \(x^2+y\) subject to \(x\ge b-y\), with
\(b-y>0\). The optimizer is \(x=b-y\), the value is
\((b-y)^2+y\), and the multiplier for \(b-y-x\le0\) is
\(\lambda=2(b-y)\). Differentiating with respect to \(b\) gives the same
value, \(2(b-y)\). If \(b\) crosses a point where the preferred binary
\(y\) changes, this branch derivative need not equal a derivative of the
overall mixed-integer value.

## What a reproducible certificate records

A compact MICP certificate ledger should include the original formulation and
variable domains; objective sense and scaling; integer feasibility tolerance;
the incumbent point rechecked in original constraints; the relaxation or
master defining the lower bound; each dual or supporting-cut validity
condition; subproblem status and qualification; active-node bounds; the exact
absolute or relative gap formula; and the reason for termination. For conic
models, record cone conventions and primal/dual residuals. For perspective
models, record the closure convention at zero. For big-M models, record the
optimization or domain argument establishing every constant.

This ledger is deliberately more demanding than a solver's word “optimal.” A
solver log is evidence about an implementation. The mathematical certificate
explains why the logged quantities bound the declared model.

## Diagnostics and common failures

- **Wrong bound direction:** in minimization an incumbent is an upper bound;
  a continuous relaxation is a lower bound.
- **Conditional convexity mistaken for joint convexity:** convexity in \(x\)
  at fixed binary \(y\) does not validate a fractional relaxation.
- **Oversized big-M constants:** validity needs proved finite bounds; strength
  needs the smallest justified bounds or a perspective/indicator alternative.
- **Unqualified dual cuts:** a numerical multiplier is not automatically a
  globally valid Benders cut. Check signs, dual feasibility, and the domain of
  the Lagrangian infimum.
- **Infeasibility guessed from failure:** an iteration limit or domain error is
  not a feasibility certificate.
- **Approximate integer acceptance:** rounded variables must be checked against
  the original constraints and objective; tolerances alter the feasible set.
- **Repeated assignments:** finite OA termination needs a mechanism ensuring
  an unresolved integer point cannot recur forever.
- **Unsupported global language:** a small primal-dual gap is global only when
  both bounds are valid for the original mixed-integer model.

## A bounded mathematical project

Study the family

\[
 \min\left\{\sum_{j=1}^4 \frac{x_j^2}{y_j}+0.35\sum_{j=1}^4y_j:
 \sum_jx_j=1,\ 0\le x_j\le y_j,\ y_j\in\{0,1\},\
 \sum_jy_j\le2\right\}, \tag{13}
\]

using the closed-perspective convention. Complete only these bounded tasks:
(i) enumerate the ten binary vectors with one or two active coordinates;
(ii) solve each continuous quadratic subproblem analytically; (iii) report the
global optimum and a table of all values; (iv) compare the perspective
relaxation with the naive model \(t_j\ge x_j^2\), \(x_j\le y_j\), by finding
one fractional point and its two objective values; and (v) write a certificate
ledger containing incumbent, relaxation lower bound, absolute gap, and every
assumption used. Do not introduce application data, external solvers, or more
than four variables. A correct submission is reproducible with rational
arithmetic and fits in four pages plus one table.

## Practice with solutions

**1. Bound direction.** A relaxation of a minimization MICP has certified value
\(7.2\), while a mixed-integer feasible point has value \(8.1\). State the
valid interval and absolute gap.

<details>
<summary>Hint 1</summary>

A minimizing relaxation goes below the optimum, while a feasible incumbent goes above.
</details>
<details>
<summary>Hint 2</summary>

Place 7.2 and 8.1 in that order before subtracting.
</details>
<details>
<summary>Full solution</summary>

**Solution.** \(7.2\le z^*\le8.1\), and the absolute gap is \(0.9\).
</details>


**2. Binary exclusion.** Write the no-good cut excluding
\(y^k=(1,0,1,0)\).

<details>
<summary>Hint 1</summary>

Count the coordinates that disagree with the excluded binary vector.
</details>
<details>
<summary>Hint 2</summary>

Use 1−y for its one positions and y for its zero positions.
</details>
<details>
<summary>Full solution</summary>

**Solution.** \((1-y_1)+y_2+(1-y_3)+y_4\ge1\). Every other binary vector
differs in at least one coordinate and satisfies it.
</details>


**3. Perspective arithmetic.** For \(x=0.3,y=0.6\), what is the least \(t\)
allowed by \(x^2\le ty\)?

<details>
<summary>Hint 1</summary>

The activity coordinate is positive, so division by it is allowed.
</details>
<details>
<summary>Hint 2</summary>

Divide the squared value 0.09 by 0.6.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Since \(y>0\), \(t\ge0.09/0.6=0.15\).
</details>


**4. Supporting cut.** For \(h(y)=e^y\), give the tangent lower bound at zero.

<details>
<summary>Hint 1</summary>

Use the value and derivative of the convex exponential at zero.
</details>
<details>
<summary>Hint 2</summary>

Its supporting affine function has constant and slope one.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Convexity and \(h(0)=h'(0)=1\) give \(h(y)\ge1+y\) for every
real \(y\).
</details>


**5. Branch coverage.** A relaxed integer variable equals \(2.4\). Give an
exhaustive split.

<details>
<summary>Hint 1</summary>

Apply floor and ceiling to 2.4.
</details>
<details>
<summary>Hint 2</summary>

The two children use consecutive integer endpoints two and three.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Use \(y\le2\) and \(y\ge3\). Every integer lies in exactly one
child.
</details>


**6. Pruning test.** In minimization, an active node has valid lower bound 12
and the incumbent is 11.5. May the node close?

<details>
<summary>Hint 1</summary>

Every descendant objective is at least the rigorous node bound.
</details>
<details>
<summary>Hint 2</summary>

Compare twelve with an already feasible value 11.5.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Yes. No descendant can have objective below 12, so none can
improve the feasible value 11.5.
</details>


**7. Qualification boundary.** Why is primal feasibility insufficient to
justify an optimality cut built from a claimed multiplier?

<details>
<summary>Hint 1</summary>

Separate validity of a lower cut from tightness at the sampled assignment.
</details>
<details>
<summary>Hint 2</summary>

Weak duality needs the right multiplier/domain; tightness invokes the appropriate strong-duality hypothesis.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The multiplier must be dual feasible, and tightness at the sampled
assignment normally uses strong duality. Primal feasibility alone proves
neither property.
</details>


**8. Conditional convexity.** Show that \(h(x,y)=yx^2\) is not jointly convex
on \(\mathbb R\times[0,1]\).

<details>
<summary>Hint 1</summary>

Compute the full two-variable Hessian, not the second derivative at a fixed y.
</details>
<details>
<summary>Hint 2</summary>

Its determinant is negative at every nonzero x and interior y.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Its Hessian for interior \(y\) is
\(\begin{pmatrix}2y&2x\\2x&0\end{pmatrix}\), whose determinant is
\(-4x^2<0\) when \(x\ne0\). Thus the Hessian is indefinite there.
</details>


**9. Project subproblem.** In (13), if exactly \(k\) coordinates are active,
find the optimal \(x\) and quadratic sum.

<details>
<summary>Hint 1</summary>

Only active coordinates can carry the unit total.
</details>
<details>
<summary>Hint 2</summary>

Cauchy–Schwarz bounds their square sum below by one divided by their count.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Cauchy--Schwarz gives
\(1=(\sum_{j\in S}x_j)^2\le k\sum_{j\in S}x_j^2\), with equality at
\(x_j=1/k\). Because active \(y_j=1\), the quadratic sum is \(1/k\).
</details>

### Exercise 10: a no-good cut needs an accounted-for assignment

A minimization model has two binary assignments with exact values zero and
one. Before evaluating the zero-valued assignment, a search excludes it
with a no-good cut. Can the remaining value one certify the original optimum?

<details>
<summary>Hint 1</summary>

The removed assignment was feasible and better.
</details>
<details>
<summary>Hint 2</summary>

A finite-termination proof must retain its value or prove it irrelevant before exclusion.
</details>
<details>
<summary>Full solution</summary>

No. The modified master has lost the true optimizer. A
no-good cut is a valid original feasibility exclusion only
when that assignment is infeasible; an evaluated feasible
assignment may instead be removed from the unresolved
search after its exact value has been recorded and
dominated by the incumbent. The global ledger must
account for it in either case.
</details>

## Summary and connections

Mixed-integer convex methods preserve a clean proof architecture. Convex
relaxations and dual multipliers supply lower bounds; feasible mixed-integer
points supply upper bounds; perspectives strengthen fractional geometry;
outer approximation and Benders cuts transfer subproblem information to a
master; and branching makes the integer alternatives exhaustive. The next
chapter removes joint convexity. Its algorithms still need incumbents and
bounds, but constructing globally valid lower bounds becomes the central
mathematical problem rather than an automatic consequence of convexity.

A final reading rule is worth carrying forward: every computational number
should be typed before it is compared. Is it an originally feasible objective,
a relaxation-feasible objective, a dual bound, a heuristic prediction, or a
residual? Only the first three can enter the global interval, and each enters
on its prescribed side. This typing discipline catches sign errors and
unsupported optimality claims earlier than a larger test instance will.
