var e=`---
parent_id: book-numerical-mathematics-optimization-by-structure
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

A bounded linear program attains an optimum at an extreme point, though the optimum may also lie along a face. Integrality asks whether relevant extreme points are integer.

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

<a id="section-75-gap-definitions-need-conventions"></a>
## Gap definitions need conventions {#section-77-gap-definitions-need-conventions}

Absolute gap is \\(upper-lower\\) when both bounds target the same maximization optimum. Relative gap might divide by \\(\\max(1,\\lvert incumbent\\rvert)\\) or another declared scale. When objectives cross zero, a naive percentage can be meaningless or reverse intuition.

Never compare gaps from differently scaled objectives without translating them back. Adding a constant changes some relative-gap formulas while leaving the optimizer unchanged.

<a id="section-81-common-formulation-failures"></a>
## Common formulation failures {#section-83-common-formulation-failures}

- Rounding a fractional optimum and assuming feasibility survives.
- Choosing big M from floating-point range rather than mathematics.
- Omitting bounds needed to make a logical linearization valid.
- Treating an integral solution of one relaxation as proof that all relaxation vertices are integral.
- Reporting a ratio gap when objective signs make it undefined or misleading.

<a id="section-89-practice-with-solutions"></a>
## Practice with solutions {#section-91-practice-with-solutions}

**1. Rounding failure.** Under \\(2x+2y\\le 3\\) and \\(0\\le x,y\\le 1\\), the relaxed point \\((0.75,0.75)\\) is feasible. Why does coordinatewise rounding fail?

**Solution.** Rounding both coordinates to one produces \\((1,1)\\), for which the left side is four and violates \\(4\\le 3\\). Feasibility must be checked after any rounding rule; a relaxation point being feasible does not make its rounded image feasible.

**2. Triangle gap.** Give both a primal integer bound and relaxation bound for the triangle independent-set model.

**Solution.** Selecting any one vertex is integer feasible with value one, a lower bound. The fractional point \\((1/2,1/2,1/2)\\) has value \\(3/2\\); solving or summing half the three edge inequalities shows no relaxation point exceeds \\(3/2\\), so this is the relaxation upper bound.

**3. Valid inequality.** What must be proved before adding a cut?

**Solution.** Every integer-feasible point must satisfy it. Cutting off the current fractional solution is insufficient if the inequality also removes a legitimate integer solution.

<a id="section-103-summary"></a>
## Summary {#section-105-summary}

Integer formulation quality lives in the fractional geometry. Relaxations give bounds, valid inequalities strengthen them, and integrality theorems can sometimes eliminate search. Every equivalence, bound direction, and gap convention should be auditable on small exact instances.

<a id="section-107-source-and-verification-note"></a>
## Sources {#section-109-source-and-verification-note}

The total-unimodularity route is Schrijver, *Theory of Linear and Integer Programming* (1986); an exact locator is not specified here. For bounded bilinear envelopes, see Garth P. McCormick, “Computability of Global Solutions to Factorable Nonconvex Programs: Part I—Convex Underestimating Problems,” *Mathematical Programming* 10 (1976), 147–175, [DOI](https://doi.org/10.1007/BF01580665). Finite variable bounds remain essential.
`;export{e as default};