var e=`---
parent_id: book-discrete-global-optimisation
chapter_id: separation-branching-strategies
title: "Separation and Branching Strategies"
level: graduate
estimated_minutes: 225
license: CC BY-SA 4.0
---

# Separation and Branching Strategies {#section-1-separation-and-branching-strategies}

An integer algorithm must do more than find a convincing point. It must explain
why no excluded integer point is better. Two mechanisms make that explanation
finite: separation adds inequalities that preserve every admissible integer
point, while branching divides the remaining integer set into exhaustive
cases. Their computational choices can be heuristic, but their validity logic
cannot be.

This chapter builds on integer formulations, polyhedral integrality, and the
basic branch-and-bound chapter. It stays with mathematical formulations,
relaxation bounds, cuts, disjunctions, and certificates. The standing problem
is the maximization model

\\[
z^*=\\max\\{c^Tx:x\\in F\\},
\\qquad
F=P\\cap(\\mathbb Z^I\\times\\mathbb R^{n-|I|}), \\tag{1}
\\]

where \\(P\\) is a rational polyhedron and coordinates in \\(I\\) are integral.
The rational hypothesis ensures that the mixed-integer hull used below is a
closed polyhedron; whenever an optimal value is displayed, it is also assumed
finite and attained. At a search node \\(N\\), the continuous relaxation has
value \\(U_N\\), an upper bound on every integer-feasible descendant objective.
A known integer-feasible incumbent has value \\(L\\), a lower bound on \\(z^*\\).
This direction convention is fixed throughout:

\\[
L\\le z^*\\le
\\max\\bigl(\\{L\\}\\cup\\{U_N:N\\text{ active}\\}\\bigr). \\tag{2}
\\]

Including \\(L\\) keeps the upper bound valid after every remaining active node
has \\(U_N\\le L\\), and it makes the expression defined when the active set is
empty. In that terminal case the bound collapses to \\(L\\), certifying the
incumbent as optimal.

For minimization, every bound direction reverses. Copying pruning tests across
the two conventions without reversing inequalities is a correctness error.

<a id="section-40-separation-asks-for-a-violated-valid-inequality"></a>
## Separation asks for a violated valid inequality {#section-42-separation-asks-for-a-violated-valid-inequality}

Let \\(Q=\\operatorname{conv}(F)\\) be the integer hull. Given a relaxation point
\\(\\bar x\\), the **separation problem** asks either to confirm
\\(\\bar x\\in Q\\) or to return coefficients \\((a,\\beta)\\) such that

\\[
a^Tx\\le\\beta\\quad\\text{for every }x\\in F,
\\qquad
a^T\\bar x>\\beta. \\tag{3}
\\]

The first condition is validity; the second is violation. A routine that only
finds an inequality violated by \\(\\bar x\\) has not solved separation. It might
also remove a legitimate integer point.

In practice, one separates over a known family rather than over the full
integer hull. Failure to find a member of that family means only “no detected
cut in this family,” not \\(\\bar x\\in Q\\). Even exact separation for one family
can leave fractional points because the family may not describe all facets.

<a id="section-61-worked-example-1-separating-a-fractional-cover"></a>
### Worked example 1: separating a fractional cover {#section-63-worked-example-1-separating-a-fractional-cover}

Consider binary variables satisfying

\\[
4x_1+3x_2+3x_3\\le6,
\\qquad x\\in\\{0,1\\}^3. \\tag{4}
\\]

A subset \\(C\\) whose weights sum to more than six is a cover: its variables
cannot all equal one. The set \\(C=\\{1,2\\}\\) has weight seven, so

\\[
x_1+x_2\\le1 \\tag{5}
\\]

is valid. Consider the genuinely relaxation-feasible point

\\[
\\bar x=(0.8,0.7,0.2).
\\]

Its weighted sum is
\\(3.2+2.1+0.6=5.9\\le6\\), while
\\(\\bar x_1+\\bar x_2=1.5>1\\). Inequality (5) removes \\(\\bar x\\) and preserves
every binary point satisfying (4). The pair \\(\\{2,3\\}\\) is not a cover because
its weights sum to six, so \\(x_2+x_3\\le1\\) would incorrectly remove the
feasible binary point \\((0,1,1)\\).

This calculation separates validity from efficacy. The valid cut has violation
\\(0.5\\), but that number alone says nothing about how much the relaxation
objective will improve after reoptimization.

<a id="section-94-comparing-cuts-requires-a-scale-and-a-scope"></a>
## Comparing cuts requires a scale and a scope {#section-96-comparing-cuts-requires-a-scale-and-a-scope}

The same halfspace can be written as
\\(a^Tx\\le\\beta\\) or
\\((ta)^Tx\\le t\\beta\\) for any \\(t>0\\). Raw violation therefore has no
scale-independent meaning. A common Euclidean efficacy measure is

\\[
\\operatorname{eff}(a,\\beta;\\bar x)
=\\frac{a^T\\bar x-\\beta}{\\|a\\|_2}, \\tag{6}
\\]

for a violated inequality. It is the Euclidean distance from \\(\\bar x\\) to the
cut hyperplane. It is invariant under positive rescaling of the inequality but
not under rescaling the variables. A weighted norm may better reflect a model's
coordinates, provided that convention is declared.

Cut \\(H_1\\) **dominates** cut \\(H_2\\) relative to a current relaxation \\(R\\)
when

\\[
R\\cap H_1\\subseteq R\\cap H_2.
\\]

This is a set-containment statement. A larger violation at one point does not
prove dominance. Nor does a more orthogonal cut necessarily dominate a
parallel one. Cut selection often balances efficacy, numerical coefficient
size, sparsity, parallelism with retained cuts, and predicted bound change.
Those are performance criteria; validity remains binary.

A cut also has a **scope**. A globally valid inequality holds for every point
of \\(F\\) and may be installed throughout the tree. A locally valid inequality
may rely on branching assumptions at node \\(N\\) and is safe only at \\(N\\) and
its descendants. Promoting a local inequality to the global pool can erase the
true optimum in another branch.

<a id="section-130-derivation-certificates"></a>
### Derivation certificates {#section-132-derivation-certificates}

For rational linear models, it is often possible to store a symbolic cut
derivation. For example, if \\(Ax\\le b\\), \\(x\\) is integral, and
\\(\\lambda\\ge0\\) is chosen so that \\(\\lambda^TA\\) is integral, then

\\[
(\\lambda^TA)x\\le\\lfloor\\lambda^Tb\\rfloor \\tag{7}
\\]

is a Chvátal--Gomory inequality. Its certificate consists of the nonnegative
multiplier vector, the source-row identifiers, exact products, and the floor.
Rational reconstruction from floating-point coefficients can suggest such a
certificate, but the reconstructed arithmetic must be checked exactly before
the cut is called rigorous.

For a cover inequality, a certificate lists binary domains, the source
capacity row, the cover indices, and the exact fact that their total weight
exceeds capacity. For a problem-specific valid inequality, the proof may be a
short theorem rather than an algebraic combination. In every case, storing
provenance makes later verification independent of the separator's search
heuristics.

<a id="section-153-branching-is-an-exhaustive-disjunction"></a>
## Branching is an exhaustive disjunction {#section-155-branching-is-an-exhaustive-disjunction}

Suppose a node relaxation solution has fractional value \\(\\bar x_j\\) in an
integer coordinate. Variable branching creates children

\\[
x_j\\le\\lfloor\\bar x_j\\rfloor
\\quad\\text{or}\\quad
x_j\\ge\\lceil\\bar x_j\\rceil. \\tag{8}
\\]

Every integer value of \\(x_j\\) satisfies exactly one side, so the children are
disjoint and cover all integer-feasible points of the parent. The fractional
relaxation point satisfies neither side. These two properties—integer coverage
and removal of the current point—explain correctness and immediate progress.

More generally, if \\(\\pi^Tx\\) is integral for every integer-feasible \\(x\\) and
\\(k\\in\\mathbb Z\\), the **split disjunction**

\\[
\\pi^Tx\\le k
\\quad\\vee\\quad
\\pi^Tx\\ge k+1 \\tag{9}
\\]

covers all such points. Separating the current relaxation point from the convex
hull of the two disjunctive pieces can produce a split cut. The validity comes
from the exhaustive disjunction, not from the fact that the cut happens to
improve an objective bound.

Branching on an expression that is not guaranteed integral needs a different
coverage proof. For instance, using (9) with arbitrary real \\(\\pi\\) can leave
integer vectors whose \\(\\pi^Tx\\) lies strictly between \\(k\\) and \\(k+1\\), so
both children exclude them.

<a id="section-188-why-the-tree-certificate-works"></a>
## Why the tree certificate works {#section-190-why-the-tree-certificate-works}

Maintain the invariant that every integer-feasible point not already dominated
by the incumbent belongs to at least one active node. Branching preserves the
invariant because its children cover the parent's integer points. A node may be
removed for one of three certified reasons:

1. its formulation is infeasible;
2. its upper bound satisfies \\(U_N\\le L\\);
3. its relaxation solution is integer-feasible, so it can update the incumbent
   and the node needs no further descendants.

Valid cuts preserve all integer points in their declared scope, so they also
preserve the invariant. When no active nodes remain, every possible integer
point was either proven infeasible, bounded by the incumbent, or explicitly
accounted for. The incumbent is then globally optimal.

This induction is the logical core. Node selection and branching choices alter
tree size, memory, and the time at which a good incumbent appears, but do not
alter correctness as long as every surviving node is eventually processed and
all pruning bounds are valid.

<a id="section-210-worked-example-2-a-complete-two-child-certificate"></a>
### Worked example 2: a complete two-child certificate {#section-212-worked-example-2-a-complete-two-child-certificate}

Consider

\\[
\\begin{aligned}
\\max\\quad &x+y\\\\
\\text{subject to}\\quad
&2x+y\\le4.5,\\\\
&x+2y\\le4.5,\\\\
&x,y\\ge0,
\\qquad x,y\\in\\mathbb Z.
\\end{aligned} \\tag{10}
\\]

The root relaxation has intersecting active rows at
\\((x,y)=(1.5,1.5)\\), with upper bound \\(U=3\\). Branch on \\(x\\).

In the child \\(x\\le1\\), maximizing the objective sets \\(x=1\\). The two rows
then give \\(y\\le2.5\\) and \\(y\\le1.75\\), so the relaxation solution is
\\((1,1.75)\\) with \\(U_-=2.75\\). In the child \\(x\\ge2\\), the best choice is
\\(x=2\\); the first row gives \\(y\\le0.5\\), so \\((2,0.5)\\) has
\\(U_+=2.5\\).

The integer points \\((1,1)\\), \\((0,2)\\), and \\((2,0)\\) are feasible and each
has objective value two, giving incumbent \\(L=2\\). Because \\(x+y\\) is integral
at every integer-feasible point, a relaxation bound below three strengthens to
the integer objective bound

\\[
x+y\\le\\lfloor U_-\\rfloor=2,
\\qquad
x+y\\le\\lfloor U_+\\rfloor=2.
\\]

Both children can be pruned against \\(L=2\\), proving \\(z^*=2\\). Flooring an
upper bound is valid here only because every feasible objective value is an
integer. With nonintegral objective coefficients, \\(\\lfloor U_N\\rfloor\\) need
not be an upper bound.

<a id="section-250-choosing-a-branch-heuristic-quality-exact-coverage"></a>
## Choosing a branch: heuristic quality, exact coverage {#section-252-choosing-a-branch-heuristic-quality-exact-coverage}

The simplest rule branches on a variable whose fractional part is closest to
one half. It is cheap and deterministic after a tie-breaking order, but it
ignores how the two child relaxations change. **Strong branching** temporarily
solves or partially solves candidate children. For a maximization parent with
upper bound \\(U\\), define certified degradations

\\[
\\Delta_j^-=U-U_j^-,
\\qquad
\\Delta_j^+=U-U_j^+. \\tag{11}
\\]

Larger degradations are attractive because both children become more tightly
bounded. A score may emphasize
\\(\\min\\{\\Delta_j^-,\\Delta_j^+\\}\\), a product with a small safeguard, or a
declared combination. The scoring choice is a heuristic, not a theorem that
one variable always yields the smallest tree.

<a id="section-270-worked-example-3-a-balanced-strong-branching-score"></a>
### Worked example 3: a balanced strong-branching score {#section-272-worked-example-3-a-balanced-strong-branching-score}

Suppose the current certified upper bound is \\(U=10\\). Trial solves give

\\[
\\begin{array}{c|cc|cc}
\\text{candidate}&U_j^-&U_j^+&\\Delta_j^-&\\Delta_j^+\\\\\\hline
x_1&9.8&7.0&0.2&3.0\\\\
x_2&8.5&8.4&1.5&1.6
\\end{array}
\\]

The maximum-degradation rule might like \\(x_1\\), but the minimum-degradation
score gives \\(0.2\\) for \\(x_1\\) and \\(1.5\\) for \\(x_2\\), favoring the more
balanced \\(x_2\\) branch. The product scores are \\(0.6\\) and \\(2.4\\), with the
same choice. These numbers predict bound effects only at the trial children;
they do not certify future tree size.

If trial relaxations are stopped early, their reported values must still have
the correct bound status. A feasible relaxation objective in a maximization
problem is a lower bound on that relaxation maximum, not the upper bound needed
for \\(\\Delta\\). A dual-feasible relaxation certificate or a proven solver bound
can supply a safe upper estimate.

Full strong branching is expensive. **Pseudocosts** reuse past observations.
If \\(r_j=\\bar x_j-\\lfloor\\bar x_j\\rfloor\\), a down observation can record

\\[
d_j^- =\\frac{U-U_j^-}{r_j},
\\]

and an up observation can record

\\[
d_j^+ =\\frac{U-U_j^+}{1-r_j}.
\\]

Averages predict future degradations as \\(d_j^-r_j\\) and
\\(d_j^+(1-r_j)\\). Reliability branching uses strong trials until each side has
enough observations, then trusts pseudocosts. The denominator convention,
handling of infeasible children, aging, and deterministic tie breaks belong in
the algorithm specification.

<a id="section-313-node-selection-cuts-and-interaction-effects"></a>
## Node selection, cuts, and interaction effects {#section-315-node-selection-cuts-and-interaction-effects}

Best-bound selection chooses an active node with largest \\(U_N\\). It tends to
improve the global upper bound and makes (2) immediately visible. Depth-first
selection uses less active-node memory and can reach an integer leaf quickly,
improving \\(L\\). Neither universally dominates: the first may delay good
incumbents, while the second may spend time in a region with a weak bound.

Separation and branching also interact. Cutting at a node can change its
fractional solution and therefore the apparent best branch. Excessive cutting
can enlarge and ill-condition relaxation systems, while too little cutting can
leave a large tree. A bounded cut loop might:

1. request candidates from declared valid families;
2. verify validity provenance and violation;
3. normalize and reject near-duplicates;
4. retain a limited, deterministically ordered subset;
5. reoptimize and stop after a bound, round, or progress limit.

These limits guarantee that preprocessing at one node terminates. They do not
guarantee a particular global runtime. A cut that gives no immediate objective
improvement can still reshape later branches; a high-efficacy cut can also be
nearly redundant with existing rows.

<a id="section-337-worked-example-4-local-validity-must-remain-local"></a>
### Worked example 4: local validity must remain local {#section-339-worked-example-4-local-validity-must-remain-local}

Suppose a parent has binary \\(x_1\\), and one child imposes \\(x_1=0\\). Within
that child, an analysis of the remaining constraints proves \\(x_2+x_3\\le1\\).
The inequality is valid for every descendant of that child. In the sibling
\\(x_1=1\\), however, assume \\((x_2,x_3)=(1,1)\\) is feasible. Installing
\\(x_2+x_3\\le1\\) globally would delete that sibling point.

A safe record attaches the cut to the node whose accumulated branch
assumptions include \\(x_1=0\\). Descendants inherit it; ancestors and siblings
do not. If a later independent proof establishes global validity, a new global
record can cite that proof. Scope is determined by derivation, not by how often
the inequality happened to hold in sampled nodes.

<a id="section-351-numerical-validity-and-reproducible-proof-logs"></a>
## Numerical validity and reproducible proof logs {#section-353-numerical-validity-and-reproducible-proof-logs}

A floating-point relaxation value is not automatically a rigorous upper bound.
If a solver terminates with primal and dual residuals, the returned primal
objective for a maximization relaxation is generally a lower estimate of the
relaxation optimum. Safe pruning needs a certified dual bound, interval
enclosure, exact solve, or a documented correction that accounts for residuals
and coefficient error.

Likewise, a cut violation of \\(10^{-10}\\) can disappear under coefficient
rounding. Use scaled feasibility tolerances for search behavior, but keep
logical validity separate. A tolerance may decide not to branch on a nearly
integer value; it cannot prove that a noninteger value is integer. For an exact
certificate, reconstruct and verify rational data or retain an outward-rounded
proof.

A replayable branch-and-cut log can contain:

- a stable node identifier and parent identifier;
- the exact disjunction and the integer-expression proof behind it;
- each cut's coefficients, scope, source rows, and derivation data;
- relaxation upper-bound certificates and their arithmetic mode;
- incumbent points with direct feasibility and objective checks;
- the explicit pruning reason; and
- deterministic selection and tie-breaking rules.

Such a log separates discovery from verification. A heuristic may discover a
short proof, but a small checker can validate the proof without reproducing the
heuristic search.

<a id="section-381-failure-diagnostics-and-claim-boundaries"></a>
## Failure diagnostics and claim boundaries {#section-383-failure-diagnostics-and-claim-boundaries}

1. **Violation is not validity.** Test both, and retain a proof of the universal
   integer claim.
2. **Family exhaustion is not hull membership.** It means only that the chosen
   separator found nothing.
3. **Raw cut violation is scale dependent.** Normalize before comparing, and
   state the variable metric.
4. **A branch must cover all integer points of its parent.** Fractional-point
   exclusion alone is insufficient.
5. **Trial child objectives need the correct bound direction.** Strong-
   branching scores based on uncertified primal values can be optimistic.
6. **Local cuts remain local.** Scope follows assumptions used in the proof.
7. **Flooring a node bound needs integral objective values.** Integral variables
   alone do not suffice when \\(c\\) is nonintegral.
8. **Search policy is not correctness.** A promising score predicts effort; it
   does not replace exhaustive coverage and valid pruning.

<a id="section-399-practice-with-complete-solutions"></a>
## Practice with complete solutions {#section-401-practice-with-complete-solutions}

<a id="section-401-exercise-1-prove-variable-branch-coverage"></a>
### Exercise 1: prove variable-branch coverage {#section-403-exercise-1-prove-variable-branch-coverage}

Let \\(x_j\\) be required to be integer and let \\(\\bar x_j=3.2\\). Prove that the
children \\(x_j\\le3\\) and \\(x_j\\ge4\\) cover every integer-feasible parent point
and remove \\(\\bar x\\).

<details>
<summary>Hint 1</summary>

Use the absence of integers between consecutive floor and ceiling values.
</details>
<details>
<summary>Hint 2</summary>

Every parent integer belongs to one child, while 3.2 belongs to neither.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Every integer \\(z\\) satisfies either \\(z\\le3\\) or \\(z\\ge4\\);
there is no integer strictly between three and four. Hence every parent point
with integral coordinate \\(x_j\\) lies in at least one child. The two conditions
cannot both hold, so the integer subsets are disjoint. At the relaxation point,
\\(3.2\\le3\\) is false and \\(3.2\\ge4\\) is false, so the point lies in neither
child. Thus the disjunction has both required properties.
</details>


<a id="section-429-exercise-2-find-and-verify-a-cover-cut"></a>
### Exercise 2: find and verify a cover cut {#section-431-exercise-2-find-and-verify-a-cover-cut}

For binary variables satisfying
\\(5x_1+4x_2+2x_3\\le7\\), determine whether each of
\\(\\{1,2\\}\\), \\(\\{1,3\\}\\), and \\(\\{2,3\\}\\) is a cover. At
\\(\\bar x=(0.7,0.6,0.3)\\), identify every resulting violated basic cover cut.

<details>
<summary>Hint 1</summary>

A cover must exceed seven strictly.
</details>
<details>
<summary>Hint 2</summary>

Only the weight-five/weight-four pair has total above seven; evaluate its fractional sum.
</details>
<details>
<summary>Full solution</summary>

**Solution.** A set is a cover when its weights exceed seven. The sums are
\\(5+4=9\\), \\(5+2=7\\), and \\(4+2=6\\). Thus only \\(\\{1,2\\}\\) is a cover, giving
the valid inequality \\(x_1+x_2\\le1\\). At \\(\\bar x\\), its left side is
\\(0.7+0.6=1.3\\), so it is violated by \\(0.3\\). The other pairs do not yield
valid basic cover cuts: for example, \\((x_1,x_3)=(1,1)\\) has total weight seven
and is allowed. Therefore there is exactly one violated cut among those three
pairs.
</details>


<a id="section-459-exercise-3-bound-direction-and-integral-objective-round"></a>
### Exercise 3: bound direction and integral-objective rounding {#section-461-exercise-3-bound-direction-and-integral-objective-round}

In a maximization tree, the incumbent is \\(L=17\\). One node has a certified
relaxation upper bound \\(U_N=17.4\\). Can it be pruned by bound? Answer first
when all integer-feasible objective values are integers, then when they may be
nonintegral.

<details>
<summary>Hint 1</summary>

First decide whether feasible objectives lie on the integer lattice.
</details>
<details>
<summary>Hint 2</summary>

If they do, floor the valid upper bound; otherwise a value such as 17.2 remains possible.
</details>
<details>
<summary>Full solution</summary>

**Solution.** If every integer-feasible objective value is an integer, then
each such value at the node is at most \\(\\lfloor17.4\\rfloor=17\\). It cannot
beat the incumbent, so the node can be pruned. If objective values may be
nonintegral, a feasible descendant could have value \\(17.2\\), which exceeds
the incumbent while remaining below \\(17.4\\). Then \\(U_N>L\\), so bound pruning
is invalid. The safe decision depends on objective-value integrality, not just
variable integrality.
</details>


<a id="section-489-exercise-4-classify-cut-scope"></a>
### Exercise 4: classify cut scope {#section-491-exercise-4-classify-cut-scope}

A cut is derived by adding two original global rows and rounding an integer
left side. A second cut is derived using those rows plus the current branch
assumption \\(x_4\\le2\\). Classify their scopes and explain where each may be
installed.

<details>
<summary>Hint 1</summary>

List the assumptions actually used by each derivation.
</details>
<details>
<summary>Hint 2</summary>

The branch row is inherited only in its subtree; original global rows need no such restriction.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The first derivation uses only globally valid rows and an exact
rounding rule valid for the declared integer variables. It is globally valid
and may be installed at any node. The second derivation relies on
\\(x_4\\le2\\), which need not hold outside the current subtree. It is local to
the node where that assumption is active and to descendants that inherit it.
It must not be installed at the parent, a sibling satisfying \\(x_4\\ge3\\), or a
global cut pool unless a separate global proof is found.
</details>


<a id="section-519-exercise-5-compute-strong-branching-scores"></a>
### Exercise 5: compute strong-branching scores {#section-521-exercise-5-compute-strong-branching-scores}

A maximization parent has \\(U=25\\). Candidate \\(x_1\\) has child upper bounds
\\((24.5,20)\\), and candidate \\(x_2\\) has bounds \\((22,22.5)\\). Compute the
minimum-degradation and product-degradation scores. Which candidate does each
declared score select, and what does that selection prove?

<details>
<summary>Hint 1</summary>

Subtract each child bound from the common parent bound.
</details>
<details>
<summary>Hint 2</summary>

Compute minimum and product separately, then distinguish score selection from a future-tree claim.
</details>
<details>
<summary>Full solution</summary>

**Solution.** For \\(x_1\\), degradations are \\((0.5,5)\\), so the minimum score
is \\(0.5\\) and product score is \\(2.5\\). For \\(x_2\\), degradations are
\\((3,2.5)\\), so the minimum score is \\(2.5\\) and product score is \\(7.5\\).
Both declared rules select \\(x_2\\). The calculation proves only that \\(x_2\\)
has the larger score under these certified trial bounds. It does not prove that
the resulting complete search tree will be smaller or faster. Either branch is
correct if its disjunction covers the parent's integer points.
</details>

<a id="section-548-exercise-6-normalized-efficacy"></a>
### Exercise 6: normalized efficacy {#section-550-exercise-6-normalized-efficacy}

A cut has normal (3,4), right side six and candidate point (2,1).
Compute violation and Euclidean efficacy, then rescale the row by seven.

<details>
<summary>Hint 1</summary>

The pairing is ten and the normal has norm five.
</details>
<details>
<summary>Hint 2</summary>

Both violation and normal norm acquire the same positive factor.
</details>
<details>
<summary>Full solution</summary>

Violation is four and efficacy is four fifths. After rescaling,
the violation is twenty-eight and normal norm thirty-five,
so efficacy remains four fifths. The halfspace did not change.
Raw violation is therefore unsuitable for comparing arbitrarily
scaled descriptions of the same cut.
</details>

<a id="section-573-exercise-7-violation-does-not-prove-dominance"></a>
### Exercise 7: violation does not prove dominance {#section-575-exercise-7-violation-does-not-prove-dominance}

Within the box [−1,2]², compare H₁={x≤0} and H₂={y≤0}.
At (1,2), H₂ has greater normalized violation. Does it dominate H₁?

<details>
<summary>Hint 1</summary>

Dominance requires containment of feasible intersections, not one-point comparison.
</details>
<details>
<summary>Hint 2</summary>

Test (1,−1) and (−1,1).
</details>
<details>
<summary>Full solution</summary>

Neither dominates the other. The first test lies in H₂ but
not H₁; the second lies in H₁ but not H₂. Both can be
valid cuts for the intended integer set containing only the
origin, while their one-point violations still fail to rank
their global containment. Efficacy is a useful metric, not
a substitute for dominance proof.
</details>

<a id="section-599-exercise-8-pseudocost-predictions"></a>
### Exercise 8: pseudocost predictions {#section-601-exercise-8-pseudocost-predictions}

An integer variable relaxes to 3.2. Its down and up pseudocosts
per unit movement are five and two. Give predicted degradations
and their minimum score.

<details>
<summary>Hint 1</summary>

The fractional down movement is 0.2 and the up movement is 0.8.
</details>
<details>
<summary>Hint 2</summary>

Multiply each movement by its corresponding pseudocost.
</details>
<details>
<summary>Full solution</summary>

The predictions are one and 1.6, with minimum score one.
These are learned estimates of trial bound changes, not
certified node bounds. Their use for selection does not
authorize pruning from them. A later valid relaxation or
dual certificate must supply the actual upper bound.
</details>

<a id="section-625-exercise-9-a-split-on-a-nonintegral-expression"></a>
### Exercise 9: a split on a nonintegral expression {#section-627-exercise-9-a-split-on-a-nonintegral-expression}

For integer x=1, does the disjunction x/2≤0 or x/2≥1 cover
the value? What hypothesis of the split theorem is missing?

<details>
<summary>Hint 1</summary>

The expression x/2 equals one half.
</details>
<details>
<summary>Hint 2</summary>

The split quantity, not merely x, must be integral on every intended point.
</details>
<details>
<summary>Full solution</summary>

Neither side holds, so the disjunction loses the integer
point x=1. The theorem requires the entire linear expression
to take integer values. Integer coordinates alone do not
make arbitrary rational combinations integral. A different
coverage proof or a split on x itself is needed.
</details>

<a id="section-650-exercise-10-a-partial-solve-with-the-wrong-bound-type"></a>
### Exercise 10: a partial solve with the wrong bound type {#section-652-exercise-10-a-partial-solve-with-the-wrong-bound-type}

A maximizing child relaxation has feasible point value eight,
but its optimum could be ten. The incumbent is nine. Why may
the child not be pruned using eight as its upper bound?

<details>
<summary>Hint 1</summary>

A feasible maximizing objective is below the relaxation optimum.
</details>
<details>
<summary>Hint 2</summary>

It supplies no exclusion of a feasible original descendant above nine.
</details>
<details>
<summary>Full solution</summary>

Eight is a lower bound for the child relaxation maximum,
not the required upper bound. Pruning would potentially
remove a point of value ten that improves the incumbent.
Strong-branching estimates and stopped trial solves must
retain their mathematical bound role before their numbers
enter either a score or a proof comparison.
</details>

<a id="section-677-summary-and-connections"></a>
## Summary and connections {#section-679-summary-and-connections}

Separation replaces a fractional relaxation point by a valid inequality with a
proof and scope. Branching replaces it by an exhaustive integer disjunction.
Normalized efficacy, strong branching, pseudocosts, cut selection, and node
selection guide computational effort, while validity, coverage, and certified
bounds carry correctness. A complete tree proof is an induction over those
invariants.

Backward, cover, Chvátal--Gomory, and polyhedral arguments supply cut families,
while the basic branch-and-bound framework supplies incumbent and node bounds.
Forward, advanced discrete algorithms can introduce richer disjunctions and
separators without changing the proof discipline: record exact hypotheses,
preserve every integer-feasible point, use the correct bound direction, and
make the final certificate independently checkable.

<a id="section-693-source-and-verification-note"></a>
## Sources {#section-695-source-and-verification-note}

The earlier source note identifies Schrijver (1986) and Conforti–Cornuéjols–Zambelli (2014) as source routes for Chvátal–Gomory cuts, but does not establish a matching theorem/page locator. No historical-priority claim is made.
`;export{e as default};