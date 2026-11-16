var e=`---
parent_id: book-discrete-global-optimisation
chapter_id: integer-formulations-relaxations
title: "Integer Formulations and Relaxations"
level: graduate
estimated_minutes: 120
license: CC BY-SA 4.0
---

# Integer Formulations and Relaxations {#section-1-integer-formulations-and-relaxations}

<a id="section-1-mathematical-scope"></a>
## Mathematical scope {#section-3-mathematical-scope}

An integer optimization problem restricts some variables to integers. This chapter studies formulation strength, linear relaxations, integrality gaps, and exact small examples. It does not develop operational applications such as scheduling, inventory, transport, or finance.

Assume linear inequalities, convexity, elementary graph theory, and algorithms.

<a id="section-7-why-integrality-changes-the-problem"></a>
## Why integrality changes the problem {#section-9-why-integrality-changes-the-problem}

Consider

\\(\\operatorname{maximize} c^{\\mathsf T} x \\quad\\text{subject to}\\quad Ax\\le b, x \\in \\{0,1\\}^n\\).

Removing \\(x \\in \\{0,1\\}^n\\) and retaining \\(0\\le x\\le 1\\) gives a linear-programming relaxation. Its feasible set contains every binary feasible point, so for maximization its optimum is an **upper bound** on the integer optimum. Any binary feasible point supplies a lower bound. Reversing these roles is a serious certificate error.

The relaxation is useful even when fractional: it quantifies what remains possible and guides branching. Its value does not assert that fractional variables are physically meaningful.

<a id="section-17-equivalent-integer-sets-unequal-relaxations"></a>
## Equivalent integer sets, unequal relaxations {#section-19-equivalent-integer-sets-unequal-relaxations}

Two formulations may describe exactly the same integer feasible points but yield different fractional polyhedra. A stronger relaxation excludes more fractional points without excluding any integer-feasible point.

<a id="section-21-logical-implication"></a>
### Logical implication {#section-23-logical-implication}

For binary x and y, the implication \\(x=1 => y=1\\) is exactly \\(x\\le y\\). The equivalence “z is one exactly when both x and y are one” is encoded by

\\(z\\le x\\), \\(z\\le y\\), \\(z\\ge x+y-1\\), with all three binary.

Each inequality has a job. Omitting the lower bound permits \\(x=y=1,z=0\\); omitting an upper bound permits z to be one when one input is zero.

General big-M constraints can switch inequalities on and off, but an unjustifiably large M weakens relaxations and harms numeric scaling. Derive the smallest valid bound from known variable domains. If no finite bound is justified, the formulation is incomplete rather than awaiting an arbitrary giant constant.

<a id="section-31-independent-set-example-and-an-integrality-gap"></a>
## Independent-set example and an integrality gap {#section-33-independent-set-example-and-an-integrality-gap}

For graph \\(G=(V,E)\\), a stable or independent set can be formulated as

\\(\\operatorname{maximize} \\sum_{v \\in V} x_v\\)

subject to \\(x_u+x_v\\le 1\\) for every edge and \\(x_v \\in \\{0,1\\}\\).

On a triangle, the integer optimum is one. The relaxation permits \\(x_1=x_2=x_3=1/2\\), value \\(3/2\\). Thus the absolute gap is \\(1/2\\); the relaxation-to-integer ratio is \\(3/2\\) under this positive maximization convention.

The valid inequality

\\(x_1+x_2+x_3\\le 1\\)

cuts off the fractional point and exactly describes the triangle's independent-set choices together with bounds. Pairwise edge inequalities were individually correct but collectively weak.

<a id="section-47-geometry-of-linear-relaxations"></a>
## Geometry of linear relaxations {#section-49-geometry-of-linear-relaxations}

A linear objective over a nonempty bounded polyhedron attains an optimum at an extreme point, though the optimum may also lie along a face. A finite optimum over an unbounded polyhedron needs the vertex hypotheses stated in the next chapter. Integrality asks whether relevant extreme points are integer.

A matrix is **totally unimodular** if every square subdeterminant is \\(0\\), \\(1\\), or \\(-1\\). A standard theorem says: if A is totally unimodular and b is integral, then every vertex of \\(\\{x: Ax\\le b\\}\\) is integral, subject to the stated standard-form/bound conventions. Therefore the linear relaxation solves the integer problem for every linear objective over that polyhedron.

The theorem is structural, not universal. Adding one row can destroy total unimodularity. An integral optimum found for one objective does not prove the whole polyhedron integral.

<a id="section-55-why-determinant-structure-matters"></a>
### Why determinant structure matters {#section-57-why-determinant-structure-matters}

At a nondegenerate vertex, n linearly independent tight constraints solve \\(B x=d\\). Cramer's rule expresses coordinates as determinant ratios. If \\(\\det B\\) is \\(\\pm 1\\) and d is integral, coordinates are integral. Total unimodularity controls every possible basis, including degenerate choices through a more careful argument.

<a id="section-59-formulation-of-bounded-integer-variables"></a>
## Formulation of bounded integer variables {#section-61-formulation-of-bounded-integer-variables}

An integer \\(0\\le z\\le U\\) can remain a general integer variable or be represented with binary digits. Binary expansion uses logarithmically many variables but can produce different branching behavior and coefficient scales. A unary representation uses more variables and may produce a stronger or more gradual relaxation for some constraints.

Representation is an algorithmic design choice. Exact equivalence on integer points does not imply equal numerical behavior or search size.

<a id="section-65-relaxing-nonlinear-structure"></a>
## Relaxing nonlinear structure {#section-67-relaxing-nonlinear-structure}

For binary variables, \\(x^{2}=x\\) exactly. Replacing a product \\(w=xy\\) for \\(x,y \\in [0,1]\\) by

\\(w\\ge 0\\), \\(w\\ge x+y-1\\), \\(w\\le x\\), \\(w\\le y\\)

gives the convex hull of binary product points and the McCormick envelope on the unit box. If x and y are continuous, the envelope is a relaxation, not equality except at boundary combinations.

Convex relaxations can also arise from semidefinite or conic lifting. A better bound may cost more per node; algorithm design balances bound improvement against work.

<a id="section-75-a-derived-indicator-bound-is-part-of-the-formulation"></a>
## A derived indicator bound is part of the formulation {#section-77-a-derived-indicator-bound-is-part-of-the-formulation}

Suppose a binary z switches on the inequality aᵀx≤b when z=1,
and x has finite coordinate bounds ℓ≤x≤u. The usual inequality
is aᵀx≤b+M(1−z). Its validity when z=0 requires M to cover
the largest possible excess of aᵀx over b in the otherwise
allowed domain. The box gives the explicit safe choice
$$M=\\max\\left(0,\\sum_{a_i\\ge0}a_i u_i+
\\sum_{a_i<0}a_i\\ell_i-b\\right).$$
Each coefficient chooses the endpoint maximizing its own contribution,
so this bound follows from a complete maximization over the box.
Additional constraints can justify a smaller value, but then they
belong to its derivation. If a necessary bound is infinite, an
arbitrary large finite constant does not complete the proof.

<a id="section-90-worked-example-a-tight-indicator-row"></a>
### Worked example: a tight indicator row {#section-92-worked-example-a-tight-indicator-row}

For x between minus two and five, the implication z=1 ⇒ x≤1
uses M=4. At the fractional value z=1/2, its relaxation limits
x to three. Choosing M=100 instead would allow x up to
51 from that row, so only the old box upper bound five
would remain useful. Both choices encode the same binary implication,
while their relaxations differ visibly. Large M can therefore harm
search before any floating arithmetic is considered.

An implication is not a biconditional. This model permits z=0
even when x already satisfies x≤1. If z is meant to
record whether a threshold is crossed, the reverse direction needs
its own definition, including what happens at equality. A strict
threshold over continuous variables cannot simply be replaced by
a weak inequality without choosing a margin or boundary convention.
That choice changes the represented logical statement.

<a id="section-108-a-locally-ideal-on-off-formulation"></a>
## A locally ideal on-off formulation {#section-110-a-locally-ideal-on-off-formulation}

Let z indicate whether a continuous quantity x is active. When
z=0 require x=0; when z=1 require ℓ≤x≤u, where ℓ and u
are finite and ordered. The inequalities ℓz≤x≤uz with binary
z encode exactly those two cases. With zero≤z≤one, they
give the convex hull of the two case sets. If z>0,
the point is a convex combination with weight z of the
active point (x/z,1) and the inactive point (0,0). The
inequalities guarantee x/z belongs to the active interval.
At z=0 both bounds force x=0. Conversely every such
combination satisfies the inequalities by direct substitution.

This proof identifies a strong formulation without invoking an
unspecified big constant. It also keeps the units correct:
the interval endpoints have the units of x, while z is
dimensionless. An inactive quantity is exactly zero, rather
than merely bounded by a large interval.

Local ideality does not imply that combining many ideal pieces
gives a globally integral relaxation. Each edge inequality
of the triangle stable-set model is already the convex
hull condition for its two binary endpoints. Their intersection
still admits the all-half vector. Convexifying each local
relation and then intersecting generally differs from taking
the convex hull of the complete discrete feasible set.
Shared variables create the missing global consistency.

<a id="section-136-proving-the-binary-product-hull-explicitly"></a>
## Proving the binary product hull explicitly {#section-138-proving-the-binary-product-hull-explicitly}

For the product formulation above, take a point satisfying
zero≤x,y≤one and the four envelope inequalities. The weights
w, x−w, y−w and 1−x−y+w are nonnegative and sum to
one. Assign them respectively to the binary triples
(1,1,1), (1,0,0), (0,1,0) and (0,0,0). Their convex
combination is exactly (x,y,w). Every envelope point
therefore lies in the convex hull of those product triples;
the reverse containment follows because every inequality
holds at each triple and is linear.

This is a proof of a hull description, not an assertion
that w equals xy throughout the relaxation.

<a id="section-151-worked-example-a-fractional-product-point"></a>
### Worked example: a fractional product point {#section-153-worked-example-a-fractional-product-point}

At x=y=1/2,
the envelope allows w=0 as well as w=1/2, while the
actual continuous product is 1/4. If one factor is binary,
the inequalities force the product equality at every
integer-feasible point; if both factors remain continuous,
they only bound its graph. An objective can exploit
that freedom, so recovery must return to the original
product relation before claiming an original feasible point.

<a id="section-162-encodings-preserve-integer-points-through-explicit-maps"></a>
## Encodings preserve integer points through explicit maps {#section-164-encodings-preserve-integer-points-through-explicit-maps}

For a bounded integer z from zero to U, a binary expansion
uses powers of two and enough bits to reach U. If the
largest bit pattern exceeds U, retain the inequality
z≤U after substituting the expansion. Otherwise the
encoding introduces invalid larger integers. The forward
map is the ordinary base-two representation and the
recovery map sums its weighted bits, so exact equivalence
is explicit.

An ordered unary encoding instead writes z as the sum
of U binary variables with each no smaller than the
next. Integer encodings then consist of an initial
run of ones followed by zeros, giving exactly one
representation per allowed z. Dropping the order still
represents the same possible values, but introduces many
equivalent bit patterns. This distinction can affect
symmetry and branching without changing the integer
objective value when all other terms depend only on z.

Neither encoding has a universally stronger relaxation
for every surrounding model. Compare their projections
after all coupled constraints are included, and account
for the additional variables and coefficient scales.
Logarithmically many bits can create large powers of
two; a unary formulation has many more coordinates.
The relevant design question is what structure the
complete formulation exposes, rather than which name
sounds more compact.

<a id="section-193-objective-lattices-can-strengthen-a-valid-bound"></a>
## Objective lattices can strengthen a valid bound {#section-195-objective-lattices-can-strengthen-a-valid-bound}

If every feasible objective lies in a lattice α+hℤ
with h>0, a maximization upper bound U strengthens to
α+h times the floor of (U−α)/h. Every feasible lattice
value below U is below that largest permitted lattice
point. For integer objective values this is ordinary
flooring, including when the bound is negative. Rational
objective coefficients on integer variables can be
scaled to an integer lattice using a common denominator
and the greatest common divisor of the scaled coefficients.

Continuous variables can destroy this discrete objective
structure even when some variables are integral. Flooring
then need not give a bound. The lattice and any offset
must be proved from the full model, and U must already
be a valid upper bound before it is rounded. Rounding
an optimistic numerical estimate does not repair its
missing bound status. This distinction will matter at
every node of the branch-and-bound proof.

<a id="section-214-gap-definitions-need-conventions"></a>
## Gap definitions need conventions {#section-216-gap-definitions-need-conventions}

Absolute gap is \\(upper-lower\\) when both bounds target the same maximization optimum. Relative gap might divide by \\(\\max(1,\\lvert incumbent\\rvert)\\) or another declared scale. When objectives cross zero, a naive percentage can be meaningless or reverse intuition.

Never compare gaps from differently scaled objectives without translating them back. Adding a constant changes some relative-gap formulas while leaving the optimizer unchanged.

<a id="section-220-common-formulation-failures"></a>
## Common formulation failures {#section-222-common-formulation-failures}

- Rounding a fractional optimum and assuming feasibility survives.
- Choosing big M from floating-point range rather than mathematics.
- Omitting bounds needed to make a logical linearization valid.
- Treating an integral solution of one relaxation as proof that all relaxation vertices are integral.
- Reporting a ratio gap when objective signs make it undefined or misleading.

<a id="section-228-practice-with-solutions"></a>
## Practice with solutions {#section-230-practice-with-solutions}

**1. Rounding failure.** Under \\(2x+2y\\le 3\\) and \\(0\\le x,y\\le 1\\), the relaxed point \\((0.75,0.75)\\) is feasible. Why does coordinatewise rounding fail?

<details>
<summary>Hint 1</summary>

Round both coordinates and substitute them into the original capacity row.
</details>
<details>
<summary>Hint 2</summary>

The new left side is four, exceeding the bound three.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Rounding both coordinates to one produces \\((1,1)\\), for which the left side is four and violates \\(4\\le 3\\). Feasibility must be checked after any rounding rule; a relaxation point being feasible does not make its rounded image feasible.
</details>


**2. Triangle gap.** Give both a primal integer bound and relaxation bound for the triangle independent-set model.

<details>
<summary>Hint 1</summary>

Construct a feasible single-vertex choice and aggregate the three edge rows.
</details>
<details>
<summary>Hint 2</summary>

Half their sum bounds the relaxation sum by three halves.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Selecting any one vertex is integer feasible with value one, a lower bound. The fractional point \\((1/2,1/2,1/2)\\) has value \\(3/2\\); solving or summing half the three edge inequalities shows no relaxation point exceeds \\(3/2\\), so this is the relaxation upper bound.
</details>


**3. Valid inequality.** What must be proved before adding a cut?

<details>
<summary>Hint 1</summary>

A cut is a universal statement about the intended integer set.
</details>
<details>
<summary>Hint 2</summary>

Removing one fractional point proves violation, not validity.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Every integer-feasible point must satisfy it. Cutting off the current fractional solution is insufficient if the inequality also removes a legitimate integer solution.
</details>

<a id="section-286-exercise-4-a-smallest-box-based-m"></a>
### Exercise 4: a smallest box-based M {#section-288-exercise-4-a-smallest-box-based-m}

For x∈[−1,4], y∈[0,3], encode the implication z=1 ⇒ 2x−y≤2
with binary z and find the smallest nonnegative M justified by the box alone.

<details>
<summary>Hint 1</summary>

Maximize the left side over its full box before subtracting the right side.
</details>
<details>
<summary>Hint 2</summary>

The maximum occurs at x=4,y=0 and equals eight.
</details>
<details>
<summary>Full solution</summary>

Use 2x−y≤2+6(1−z). At z=1 this is the required inequality.
At z=0 it permits the maximum eight. Any smaller M would
exclude the otherwise allowed box point (4,0,0), so six
is the smallest safe value based only on the stated bounds.
Further model constraints could justify tightening it.
</details>

<a id="section-311-exercise-5-a-missing-product-inequality"></a>
### Exercise 5: a missing product inequality {#section-313-exercise-5-a-missing-product-inequality}

If the lower envelope row w≥x+y−1 is omitted, give a binary
counterexample to w=xy while retaining the other rows and a binary w.

<details>
<summary>Hint 1</summary>

Set both factors to one.
</details>
<details>
<summary>Hint 2</summary>

The upper bounds alone do not force w upward.
</details>
<details>
<summary>Full solution</summary>

Take x=y=1,w=0. It satisfies w≥0,w≤x,w≤y but has w≠xy.
The omitted lower row would require w≥1. Every row in
the logical product formulation has a distinct role; upper
bounds and integrality alone do not encode both directions.
</details>

<a id="section-335-exercise-6-recover-a-hull-decomposition"></a>
### Exercise 6: recover a hull decomposition {#section-337-exercise-6-recover-a-hull-decomposition}

For (x,y,w)=(0.6,0.4,0.2), give its four binary-product hull weights.

<details>
<summary>Hint 1</summary>

Use w, x−w, y−w and 1−x−y+w.
</details>
<details>
<summary>Hint 2</summary>

Check nonnegativity and that the weights sum to one.
</details>
<details>
<summary>Full solution</summary>

The weights are 0.2,0.4,0.2,0.2 in the displayed vertex order.
They are nonnegative, sum to one and reconstruct each
coordinate. The actual continuous product 0.24 differs
from w=0.2, so hull membership has not imposed product
equality for continuous factors.
</details>

<a id="section-359-exercise-7-retain-the-binary-upper-bound"></a>
### Exercise 7: retain the binary upper bound {#section-361-exercise-7-retain-the-binary-upper-bound}

Encode an integer z between zero and five with three bits.
Which additional inequality excludes invalid bit patterns?

<details>
<summary>Hint 1</summary>

Use z=b₀+2b₁+4b₂.
</details>
<details>
<summary>Hint 2</summary>

Three bits can also represent six and seven.
</details>
<details>
<summary>Full solution</summary>

Add b₀+2b₁+4b₂≤5 with each bit binary. This excludes
the patterns for six and seven while retaining exactly
zero through five. Omitting it changes the integer
domain. Recovery sums the weighted bits, and each
allowed integer has its usual unique three-bit representation.
</details>

<a id="section-384-exercise-8-an-on-off-point"></a>
### Exercise 8: an on-off point {#section-386-exercise-8-an-on-off-point}

For the active interval [−2,4], show that (x,z)=(1,1/2)
is in its on-off convex hull and provide the two-case mixture.

<details>
<summary>Hint 1</summary>

Divide x by z to identify an active point.
</details>
<details>
<summary>Hint 2</summary>

The active quantity is two, inside the interval.
</details>
<details>
<summary>Full solution</summary>

It is half (2,1) plus half (0,0). It also satisfies
−2z≤x≤4z. The fractional indicator is a hull point,
not an original on/off decision. An original feasible
answer must have binary z and obey its corresponding case.
</details>

<a id="section-408-exercise-9-round-a-negative-lattice-bound"></a>
### Exercise 9: round a negative lattice bound {#section-410-exercise-9-round-a-negative-lattice-bound}

A maximization problem has integer objective values and rigorous upper bound −1.2.
What strengthened bound follows? Why is truncating toward zero wrong?

<details>
<summary>Hint 1</summary>

The greatest integer no larger than −1.2 is minus two.
</details>
<details>
<summary>Hint 2</summary>

Flooring and truncation differ for negative numbers.
</details>
<details>
<summary>Full solution</summary>

Every feasible integer objective is at most −2. Truncating
would return −1, a weaker upper bound that does not
exploit the lattice correctly. Using a ceiling as a
claimed equivalent floor would lose the stated strengthening.
The argument requires a valid original upper bound and
proved objective integrality.
</details>

<a id="section-434-exercise-10-local-ideality-is-insufficient"></a>
### Exercise 10: local ideality is insufficient {#section-436-exercise-10-local-ideality-is-insufficient}

Explain how the triangle stable-set example disproves the claim that
intersecting locally ideal edge formulations always gives the global integer hull.

<details>
<summary>Hint 1</summary>

Each edge permits the three binary pairs except (1,1).
</details>
<details>
<summary>Hint 2</summary>

All three local hulls admit half on both endpoints simultaneously.
</details>
<details>
<summary>Full solution</summary>

Each edge hull is described by nonnegative endpoints with
sum at most one. Their intersection contains the all-half
triangle vector, whose objective sum is three halves.
Every global binary stable set has sum at most one.
Thus the intersection is strictly larger than the global
integer hull. Shared-variable consistency requires an
additional global inequality; validity and ideality of
each local piece do not supply it automatically.
</details>

<a id="section-462-summary"></a>
## Summary {#section-464-summary}

Integer formulation quality lives in the fractional geometry. Relaxations give bounds, valid inequalities strengthen them, and integrality theorems can sometimes eliminate search. Every equivalence, bound direction, and gap convention should be auditable on small exact instances.

<a id="section-466-source-and-verification-note"></a>
## Sources {#section-468-source-and-verification-note}

The total-unimodularity route is Schrijver, *Theory of Linear and Integer Programming* (1986); the earlier source note does not verify an exact locator. For bounded bilinear envelopes, see Garth P. McCormick, “Computability of Global Solutions to Factorable Nonconvex Programs: Part I—Convex Underestimating Problems,” *Mathematical Programming* 10 (1976), 147–175, [DOI](https://doi.org/10.1007/BF01580665). Finite variable bounds remain essential.
`;export{e as default};