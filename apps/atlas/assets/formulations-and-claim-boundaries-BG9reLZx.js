var e=`---
parent_id: book-numerical-mathematics-optimization-by-structure
chapter_id: formulations-and-claim-boundaries
title: "Formulations and Claim Boundaries"
level: advanced-undergraduate
estimated_minutes: 175
license: CC BY-SA 4.0
---

# Formulations and Claim Boundaries

## Purpose and local prerequisites

Before choosing an optimizer, decide what would count as an answer. This chapter
assumes functions, sets, linear algebra, elementary continuity, and proof by
inequalities. It establishes the vocabulary used by every later chapter:
variables, feasible sets, objective values, attainment, equivalence,
relaxations, and certificates.

An optimization computation can fail while returning a plausible point because
several claims have been silently merged. “The iterations stopped,” “the point
is feasible,” “the point is locally optimal,” “the best value is attained,” and
“the point is globally optimal” are different propositions. Each needs its own
evidence.

## The problem contract

Write a minimization problem as the tuple

\\(P=(X,C,f,O)\\),

where \\(X\\) is the ambient variable domain, \\(C \\subseteq X\\) is the feasible set,
\\(f:C \\to \\mathbb{R} \\cup \\{+\\infty,-\\infty\\}\\) is the objective under declared extended
value conventions, and \\(O\\) describes the requested output. The output may be a
feasible point, an approximately stationary point, a bound on the optimal
value, a globally optimal point, an infeasibility certificate, or several of
these.

Define the optimal value by

\\(p_{\\star}=\\inf_{x \\in C} f(x)\\).

This symbol is meaningful even when no optimizer exists. Reserve \\(x_{\\star}\\) for a
feasible point satisfying \\(f(x_{\\star})=p_{\\star}\\). If \\(C\\) is empty, the common extended-real
convention is \\(\\inf \\emptyset=+\\infty\\); a software interface may instead return
a typed infeasibility result. State the convention.

For maximization, either formulate a separate supremum problem or minimize
\\(-f\\). Changing signs reverses lower and upper bound directions. A report that
mixes conventions can turn a valid relaxation certificate into an invalid one.

## Existence is a theorem, not a solver status

**Theorem 1.1 (Weierstrass optimization form).** If \\(C\\) is a nonempty compact subset
of \\(\\mathbb{R}^{n}\\) and \\(f:C\\to \\mathbb{R}\\) is continuous, then there exists \\(x_{\\star} \\in C\\) at which \\(f\\)
attains its minimum and a point at which it attains its maximum.

**Proof.** Let \\(p_{\\star}=\\inf_C f\\) and choose a minimizing sequence \\(x_k\\) with
\\(f(x_k)\\to p_{\\star}\\). Compactness gives a convergent subsequence
\\(x_{k_j}\\to x_{\\star} \\in C\\). Continuity gives
\\(f(x_{\\star})=\\lim_j f(x_{k_j})=p_{\\star}\\). Apply the same argument to \\(-f\\) for the maximum.

Every hypothesis has a failure mode.

- If \\(C=(0,1)\\), minimizing \\(f(x)=x\\) has infimum zero but no feasible minimizer.
- If \\(C=R\\), minimizing \\(\\exp(-x)\\) has infimum zero but no attaining point.
- On compact \\(C=[0,1]\\), the discontinuous function with \\(f(0)=1\\) and \\(f(x)=x\\)
  for \\(x>0\\) has infimum zero but does not attain it.
- If \\(C\\) is empty, no feasible optimizer exists regardless of objective
  smoothness.

Coercivity can replace boundedness: if \\(C\\) is a nonempty closed subset of
\\(\\mathbb{R}^{n}\\), \\(f:C\\to \\mathbb{R}\\) is continuous, and \\(f(x)\\to +\\infty\\) along every feasible
sequence with \\(\\lVert x\\rVert\\to \\infty\\), choose \\(x_0 \\in C\\). The nonempty sublevel set
\\(\\{x \\in C:f(x)\\le f(x_0)\\}\\) is closed and bounded, hence compact, and the same
argument yields attainment. A claim of coercivity needs a norm and a feasible
limiting regime.

## Uniqueness and identifiability

Existence does not imply uniqueness. If \\(C\\) is convex and \\(f\\) is strictly
convex on \\(C\\), then at most one minimizer exists.

**Proof.** If distinct minimizers \\(x,y\\) existed, their midpoint would be
feasible and strict convexity would give
\\(f((x+y)/2)<(f(x)+f(y))/2=p_{\\star}\\), a contradiction.

Ordinary convexity permits a whole optimal face. A unique objective value does
not imply a unique point; every optimization problem has only one infimum as a
number. Conversely, a nonconvex objective may still have a unique global
minimizer. Strict convexity is a sufficient structural certificate, not a
definition of uniqueness.

### Worked example: rank-deficient least squares

Minimize

\\((x+y-1)^{2}\\) over \\((x,y) \\in \\mathbb{R}^{2}\\).

Every point on the line \\(x+y=1\\) has value zero, so minimizers are not unique.
The Hessian

\\(2\\begin{bmatrix}1 & 1 \\\\ 1 & 1\\end{bmatrix}\\)

is positive semidefinite but not positive definite. Adding the secondary term
\\(\\lambda(x^{2}+y^{2})\\) with \\(\\lambda>0\\) produces a unique minimizer, but it changes the
problem. It may be a justified regularized formulation; it is not a numerical
trick that recovers “the” original solution.

## Constraints are mathematical statements

A standard smooth constraint form is

\\(g_i(x)\\le 0\\), \\(i=1,...,m\\), and \\(h_j(x)=0\\), \\(j=1,...,p\\).

Record units and scaling. The tolerance statement \\(g_i(x)\\le 10^{-8}\\) is
meaningless across constraints measured in metres, joules, and dimensionless
ratios unless the scales are declared. A normalized violation might be

\\(\\max_i \\max(0,g_i(x))/s_i\\),

with positive, justified scales \\(s_i\\).

Hard constraints define \\(C\\). A penalty formulation

\\(\\min_x f(x)+\\rho \\sum_i \\max(0,g_i(x))^{2}\\)

usually has a different feasible set and, for finite \\(\\rho\\), a different
optimizer. Some exact-penalty theorems use nonsmooth penalties and sufficiently
large parameters under constraint qualifications; they do not make every
penalty exact.

Equality tolerances also need semantics. If equality represents a conservation
law, a small residual may be acceptable only relative to the conserved scale.
If it represents a discrete logical identity, approximate satisfaction may be
invalid.

## Exact reformulations

Two formulations are equivalent only relative to a declared output. A useful
definition supplies maps between feasible solutions that preserve the relevant
objective and allow requested solutions or certificates to be recovered.

### Epigraph transformation

For real-valued \\(f\\) on \\(C\\), the problems

\\(\\min_{x \\in C} f(x)\\)

and

\\(\\min_{x,t} t \\quad\\text{subject to}\\quad x \\in C, f(x)\\le t\\)

have the same optimal value. Any feasible epigraph pair has \\(t\\ge f(x)\\ge p_{\\star}\\), and
for any feasible \\(x\\), choosing \\(t=f(x)\\) gives an epigraph point with the same
value. Optimizers map both ways when attainment holds.

This transformation exposes maximum objectives. For example,

\\(\\min_x \\max_i (a_i^{\\mathsf T} x+b_i)\\)

is equivalent to minimizing \\(t\\) subject to
\\(a_i^{\\mathsf T} x+b_i\\le t\\) for every \\(i\\). The new variable is not an approximation; the
inequalities exactly encode the epigraph.

### Monotone transformations

If \\(\\phi\\) is strictly increasing on the range of \\(f\\), minimizing \\(\\phi(f(x))\\) has
the same minimizers as minimizing \\(f(x)\\). The objective values and numerical
conditioning change. If \\(\\phi\\) is merely nondecreasing, it can flatten distinct
values and add minimizers. If it is decreasing, minimization becomes
maximization.

**Worked example.** Minimizing a positive product \\(z(x)>0\\) is equivalent in
minimizer to minimizing \\(\\log z(x)\\), because logarithm is strictly increasing.
The log form can convert products into sums and avoid overflow. It does not
preserve absolute objective gaps: a difference of \\(0.01\\) in log scale has a
ratio interpretation in the original scale.

## Relaxations and restrictions

For minimization, a **relaxation** enlarges the feasible set or replaces the
objective by a lower-bounding one. Its optimal value \\(L\\) satisfies \\(L\\le p_{\\star}\\).
A **restriction** shrinks the feasible set, and any feasible restricted point
gives an upper bound \\(U\\ge p_{\\star}\\) through its objective value. For maximization the
directions reverse.

These inequalities require common objective scale and exact containment. A
floating-point relaxation value rounded upward may fail to be a certified lower
bound for minimization. Certification may need a dual feasible point, directed
rounding, or exact rational reconstruction.

### Worked bound ladder

Minimize \\(x^{2}\\) over integer \\(x\\ge 3\\). The continuous relaxation \\(x\\ge 3\\) has value
9 at \\(x=3\\), which is already integer feasible, so lower and upper bounds meet at
9. If the constraint were integer \\(x>3\\), the exact discrete interpretation
would be \\(x\\ge 4\\). The continuous set \\(x\\ge 3\\) is a valid but weaker relaxation: it
contains every intended integer point, but it is not an exact reformulation.

The tiny example exposes two jobs: translate the mathematical domain exactly,
then track bound directions.

## Scaling and coordinates

Replacing variables by \\(x=D z\\) with nonsingular \\(D\\) is an exact coordinate
change if all objectives, constraints, starts, and recovered outputs are
transformed consistently. It can improve algorithmic conditioning without
changing the abstract feasible points.

Scaling only one side of an equality or changing a constraint without its
reported tolerance changes the problem. Similarly, multiplying the objective
by a positive constant preserves minimizers but rescales gaps and stopping
criteria. An algorithm that stops at absolute gap \\(10^{-6}\\) is not invariant
under changing the objective from metres to micrometres.

### Dimensionless formulation example

Suppose variables have typical magnitudes \\(10^{6}\\) and \\(10^{-3}\\). A Euclidean step
norm in raw coordinates makes the first component dominate. Set
\\(x_1=10^{6} z_1\\), \\(x_2=10^{-3} z_2\\) and formulate derivatives in \\(z\\). A unit step in
each scaled coordinate now means a typical relative move. This is a coordinate
choice, not a proof that both variables deserve equal physical importance; the
scales must come from the problem contract.

## Multiple objectives and surrogate boundaries

### Worked example: a finite quadratic penalty changes feasibility

Consider minimizing \\(x^2\\) subject to \\(x\\ge1\\). Its unique optimizer is
\\(x=1\\), with value one. The squared-violation penalty replaces the problem by
minimizing \\(F_\\rho(x)=x^2+\\rho\\max(0,1-x)^2\\), for a finite \\(\\rho>0\\).
For \\(x<1\\), differentiation gives
\\(F_\\rho'(x)=2(1+\\rho)x-2\\rho\\), so its critical point is
\\(x_\\rho=\\rho/(1+\\rho)<1\\). The function is strictly convex: its derivative is
continuous and strictly increasing on both sides of one. Therefore this point
is its unique global minimizer. It violates the original constraint by
\\(1/(1+\\rho)\\), although that violation tends to zero as the penalty grows.
For \\(x\\ge1\\), the smallest penalized value is one, while
\\(F_\\rho(x_\\rho)=\\rho/(1+\\rho)<1\\), confirming the comparison directly.

The original objective at \\(x_\\rho\\) is below one precisely because the point
is infeasible. It cannot serve as an upper bound for the original constrained
minimum. Increasing the penalty gives a limiting approximation, together with
a potentially poorly scaled curvature \\(2(1+\\rho)\\) in the penalized region.
Neither a small violation nor a small penalized gradient changes this logical
boundary. A report should retain both values: the original objective and the
separately scaled feasibility residual.

For objectives \\(f_1,...,f_k\\), a weighted sum

\\(\\sum_i \\alpha_i f_i(x)\\), with \\(\\alpha_i\\ge 0\\),

defines one scalar problem. Under convex image conditions, positive weights can
recover supported Pareto optima. In nonconvex objective images, some Pareto
points are unsupported and cannot be obtained by any linear weighting.

Weights encode trade-offs and units. They are not discovered objectively by an
optimizer. A surrogate objective is defensible only with a stated link to the
external goal. Optimizing prediction loss, residual norm, or a smooth proxy does
not automatically optimize safety, interpretability, or another unmodeled
criterion.

## A claim ladder

Organize output from weakest to strongest:

1. **Evaluated:** the program produced finite values under a stated arithmetic
   contract.
2. **Feasible to tolerance:** declared residual tests passed.
3. **Stationary to tolerance:** a named first-order measure is small.
4. **Locally optimal:** sufficient local hypotheses such as positive curvature
   on feasible directions hold.
5. **Globally bounded:** valid lower and upper bounds are available.
6. **Globally optimal:** the bounds meet under a declared exact or certified
   tolerance.
7. **Unique and stable:** additional structural and perturbation hypotheses
   justify these claims.

An output can skip some steps when a direct certificate exists. For a convex
problem with a valid primal-dual zero gap, global optimality may be certified
without separately exploring local curvature. The ladder prevents a solver's
single word “success” from carrying seven unstated meanings.

## Failure diagnostics

- Writing \\(\\min\\) when only an infimum is known to exist.
- Treating a finite penalty as the original hard constraint.
- Reporting stationarity without feasibility or constraint qualification.
- Applying a monotone transform and comparing gaps as though their units were
  unchanged.
- Calling a relaxation solution feasible for the original problem.
- Hiding unboundedness behind an iteration cap.
- Claiming a unique point because the optimal value is unique as a number.
- Choosing scaling from machine range rather than mathematical variable scales.

## Practice with full solutions

**1. Nonattainment repair.** Minimize \\(x\\) over \\(x>0\\). Give the infimum, explain
why there is no optimizer, and give two different changes that create
attainment while changing the problem.

<details>
<summary>Hint 1</summary>

Look for a boundary point outside the original domain.
</details>
<details>
<summary>Hint 2</summary>

Closing the domain and imposing a positive lower cutoff are different changes.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The infimum is zero because positive values approach zero, but
zero is infeasible, so no optimizer exists. Replacing the domain by \\(x\\ge 0\\)
creates minimizer zero. Replacing it by \\(x\\ge \\varepsilon\\) for fixed positive
\\(\\varepsilon\\) creates minimizer \\(\\varepsilon\\). Both are new problems; neither is a
numerical method for attaining the original strict-domain infimum.
</details>


**2. Epigraph form.** Reformulate \\(\\min_x \\max(\\lvert x-1\\rvert,2\\lvert x+1\\rvert)\\) with linear
inequalities.

<details>
<summary>Hint 1</summary>

Introduce one scalar upper bound for both absolute values.
</details>
<details>
<summary>Hint 2</summary>

Replace each absolute-value bound by its two affine inequalities.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Introduce \\(t\\) and minimize it subject to
\\(x-1\\le t\\), \\(1-x\\le t\\), \\(2(x+1)\\le t\\), and \\(-2(x+1)\\le t\\). These four inequalities say
that \\(t\\) is at least both absolute-value terms. At any optimum, reducing \\(t\\)
until one constraint is tight recovers the original maximum value.
</details>


**3. Bound directions.** A minimization relaxation returns 4.2, and a feasible
original point has value 5.1. What is certified before considering rounding?

<details>
<summary>Hint 1</summary>

Recall which problem supplies a lower bound and which point supplies an upper bound.
</details>
<details>
<summary>Hint 2</summary>

State the interval before subtracting its endpoints; keep arithmetic qualifications.
</details>
<details>
<summary>Full solution</summary>

**Solution.** If the relaxation containment and objective scale are exact, its
optimum is a lower bound and the feasible point is an upper bound:
\\(4.2\\le p_{\\star}\\le 5.1\\). Floating-point solver outputs do not automatically preserve
directed inequalities; a certified report must account for their numerical
error or use valid dual/primal certificates.
</details>


**4. Uniqueness check.** Minimize \\((x+y)^{2}\\) over the box \\([-1,1]^{2}\\). Is the
objective strictly convex, and are minimizers unique?

<details>
<summary>Hint 1</summary>

Identify the zero set of the objective inside the box.
</details>
<details>
<summary>Hint 2</summary>

A zero Hessian direction prevents strict convexity and yields a whole minimizing segment.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The Hessian is \\(2\\begin{bmatrix}1 & 1 \\\\ 1 & 1\\end{bmatrix}\\), positive semidefinite with a zero
direction \\((1,-1)\\), so the objective is convex but not strictly convex. Every
point in the box with \\(x+y=0\\) has value zero. The minimizer is therefore a line
segment, not unique.
</details>

### Exercise 5: an exact nonsmooth penalty

For the same constrained problem, replace the squared violation by
\\(G_\\rho(x)=x^2+\\rho\\max(0,1-x)\\), with \\(\\rho\\ge0\\). Determine exactly
when its optimizer is feasible.

<details>
<summary>Hint 1</summary>

Minimize separately on the half-lines ending at one; include their common endpoint.
</details>
<details>
<summary>Hint 2</summary>

On the left the derivative is \\(2x-\\rho\\); on the right the objective is \\(x^2\\).
</details>
<details>
<summary>Full solution</summary>

For \\(0\\le\\rho<2\\), the left minimum is at \\(x=\\rho/2<1\\), with value
\\(\\rho-\\rho^2/4\\). Its difference from one is
\\(- (\\rho-2)^2/4<0\\), so it beats the feasible endpoint. For \\(\\rho\\ge2\\),
the left derivative is nonpositive up to one, and the right derivative is
positive. Thus the unique optimizer is one. At the threshold two the left
derivative reaches zero only at one; strict convexity still gives uniqueness.
This penalty is exact for this problem when \\(\\rho\\ge2\\); the squared penalty
in the worked example is inexact for every finite parameter.
</details>

### Exercise 6: a coercive sublevel argument

Suppose \\(A\\) is a real matrix and \\(\\alpha>0\\). Prove that
\\(\\|Ax-b\\|^2+\\alpha\\|x\\|^2\\) attains a unique minimum on \\(\\mathbb R^n\\),
even if \\(A\\) is rank deficient.

<details>
<summary>Hint 1</summary>

Find a lower bound that grows with \\(\\|x\\|\\), and identify the Hessian.
</details>
<details>
<summary>Hint 2</summary>

The nonnegative residual term can be dropped when proving coercivity. Pair the Hessian with a nonzero vector.
</details>
<details>
<summary>Full solution</summary>

The objective is continuous and at least \\(\\alpha\\|x\\|^2\\), hence coercive.
Its nonempty sublevel through zero is closed and bounded, so compactness gives
attainment. Its Hessian is \\(2(A^TA+\\alpha I)\\). For nonzero \\(v\\), the
associated quadratic form is \\(2\\|Av\\|^2+2\\alpha\\|v\\|^2>0\\). Strict
convexity gives uniqueness. The normal equation is
\\((A^TA+\\alpha I)x=A^Tb\\). The regularization term specifies a new objective;
the argument does not identify a unique solution of unregularized least squares.
</details>

### Exercise 7: monotone transformations preserve points, not gaps

On a feasible set, let \\(f\\ge0\\) attain its minimum. Compare minimizing \\(f\\)
and minimizing \\(f^2\\). If a candidate has \\(f=3\\) and the optimum is two,
compare the two absolute gaps. What fails if negative values are allowed?

<details>
<summary>Hint 1</summary>

Distinguish preservation of ordering from preservation of differences.
</details>
<details>
<summary>Hint 2</summary>

Squaring is strictly increasing on the nonnegative half-line, but not on the whole real line.
</details>
<details>
<summary>Full solution</summary>

Because squaring is strictly increasing on \\([0,\\infty)\\), precisely the same
feasible points minimize both objectives. The gaps are \\(3-2=1\\) and
\\(9-4=5\\), with different objective units. In general
\\(f(x)^2-p_*^2=(f(x)-p_*)(f(x)+p_*)\\), so the conversion depends on scale.
For feasible objective values \\(-3,-1\\), the original minimum is \\(-3\\),
whereas the squared minimum occurs at \\(-1\\). Dropping the range hypothesis
changes even the optimizer.
</details>

### Exercise 8: a relaxation and a restriction

Let \\(D\\subset C\\subset R\\) be nonempty sets and let \\(f\\) be the same
real-valued objective on all of them. Prove the infimum ordering, allowing
extended values. Does an optimizer over \\(R\\) necessarily solve the problem on \\(C\\)?

<details>
<summary>Hint 1</summary>

A lower bound on a larger set is also a lower bound on any subset.
</details>
<details>
<summary>Hint 2</summary>

An optimizer of the relaxed problem may fail the original feasibility requirement.
</details>
<details>
<summary>Full solution</summary>

Set containment gives \\(\\inf_R f\\le\\inf_C f\\le\\inf_D f\\): taking an
infimum over more points can only lower its value. No attainment assumption
is needed. A relaxed optimizer solves the original problem only if it is
in \\(C\\); then its relaxed lower bound and feasible value meet. For example,
minimizing \\((x-1/2)^2\\) over \\([0,1]\\) gives \\(x=1/2\\), whereas restricting
to \\(C=\\{0,1\\}\\) gives value \\(1/4\\). The relaxed optimizer is infeasible
for that original discrete problem.
</details>

### Exercise 9: units and constraint rescaling

A length constraint is \\(g(x)\\le0\\) in metres. It is rewritten as
\\(100g(x)\\le0\\) in centimetres. Explain how a fixed raw residual threshold
changes and how to preserve a dimensionless violation measure.

<details>
<summary>Hint 1</summary>

Apply the same conversion to the residual and its declared reference scale.
</details>
<details>
<summary>Hint 2</summary>

Compare \\(\\max(0,g)/s\\) with the rescaled expression, for \\(s>0\\).
</details>
<details>
<summary>Full solution</summary>

The feasible set is unchanged because the factor is positive. A threshold
\\(g\\le10^{-6}\\) metres becomes \\(100g\\le10^{-4}\\) centimetres. Using the
same numeric threshold \\(10^{-6}\\) after conversion makes the physical
tolerance one hundred times tighter. Choosing a reference scale \\(s\\) in
metres and \\(100s\\) in centimetres gives
\\(\\max(0,100g)/(100s)=\\max(0,g)/s\\). A dimensionless measure is invariant
only when the scale is converted consistently.
</details>

### Exercise 10: an unsupported Pareto point

Three feasible decisions have two objective vectors \\((0,2),(1,3/2),(2,0)\\),
both components to be minimized. Show all three are Pareto optimal but the
middle vector minimizes no positively weighted sum.

<details>
<summary>Hint 1</summary>

Each decision improves one component while worsening the other.
</details>
<details>
<summary>Hint 2</summary>

For positive weights \\(a,b\\), compare \\(a+3b/2\\) with both \\(2b\\) and \\(2a\\).
</details>
<details>
<summary>Full solution</summary>

No vector is componentwise no greater than another, so every vector is Pareto
optimal. If the middle vector minimized the weighted sum, its comparisons
would give \\(a\\le b/2\\) and \\(a\\ge3b/2\\), impossible for \\(b>0\\).
The two endpoints therefore always beat it for some component of the scalar
comparison. This finite nonconvex objective image shows why linear weights
need not recover every Pareto optimum. A scalar solver correctly solving its
weighted problem does not fill that modeling gap.
</details>

## Connections and summary

This chapter is the front door to the book. The next convexity chapter explains
when local inequalities become global certificates. The derivative and KKT
chapters develop algorithmic conditions only after this problem contract fixes
their meaning. The integer chapters will use the relaxation/restriction bound
directions without changing them.

Before running an optimizer, state the domain, feasible set, objective scale,
attainment assumptions, requested output, and certificate. Formulation is the
first algorithm because it determines which question every later algorithm is
allowed to answer.
`;export{e as default};