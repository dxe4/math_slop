var e=`---
id: book-linear-programming-optimisation
title: "Linear Programming and Optimisation: A First Course"
level: advanced-undergraduate
status: draft
production_state: complete-draft
planned_chapters: 16
license: CC BY-SA 4.0
---

# Linear Programming and Optimisation: A First Course {#section-1-linear-programming-and-optimisation-a-first-course}

A linear programme describes a choice through affine constraints and a linear objective. Solving it means more than returning a vector: a feasible decision demonstrates what can be achieved, a dual bound limits what any feasible decision can achieve, and an infeasibility certificate explains when the requested conditions cannot coexist. This book develops those arguments from graphical models to bases, simplex methods, duality, sensitivity, and selected applications.

The course is at L3. It assumes a first course in linear algebra and basic proof; the barrier and KKT chapters additionally use multivariable differentiation. Required preparation is available in Lucent: [systems and elimination](/lucent/#/course/linear-algebra/systems-elimination), [subspaces and the four spaces](/lucent/#/course/linear-algebra/four-spaces), [orthogonality](/lucent/#/course/linear-algebra/orthogonality), [total differentiability](/lucent/#/course/calculus/total-differentiability), [gradients and chain rules](/lucent/#/course/calculus/gradient-chain-levels), and [extrema and constraints](/lucent/#/course/calculus/extrema-constraints). The first twelve chapters require no calculus; the differential preparation can be completed before the interior-point and KKT chapters.

<a id="section-5-reading-route"></a>
## Reading route {#section-7-reading-route}

1. [Linear Models and the Graphical Method](linear-programming-optimisation/linear-models-graphical-method.md)
2. [Polyhedra and Extreme Points](linear-programming-optimisation/polyhedra-extreme-points.md)
3. [Standard Form and Basic Feasible Solutions](linear-programming-optimisation/standard-form-basic-feasible-solutions.md)
4. [The Simplex Method](linear-programming-optimisation/simplex-method.md)
5. [Degeneracy, Cycling and Bland's Rule](linear-programming-optimisation/degeneracy-cycling-bland.md)
6. [Two-Phase and Revised Simplex](linear-programming-optimisation/two-phase-revised-simplex.md)
7. [Duality Theory](linear-programming-optimisation/duality-theory.md)
8. [Complementary Slackness and Farkas' Lemma](linear-programming-optimisation/complementary-slackness-farkas.md)
9. [Sensitivity Analysis](linear-programming-optimisation/sensitivity-analysis.md)
10. [Dual Simplex and Parametric Programming](linear-programming-optimisation/dual-simplex-parametric-programming.md)
11. [Network Flows and the Transportation Problem](linear-programming-optimisation/network-flows-transportation.md)
12. [Matrix Games and Linear Programming](linear-programming-optimisation/matrix-games-linear-programming.md)
13. [Interior-Point Methods: A First Primal–Dual View](linear-programming-optimisation/interior-point-methods.md)
14. [Integer Programmes and Total Unimodularity](linear-programming-optimisation/integer-programs-total-unimodularity.md)
15. [Lagrange Multipliers and KKT Conditions](linear-programming-optimisation/lagrange-multipliers-kkt.md)
16. [Modelling Case Studies and Checkable Decisions](linear-programming-optimisation/modelling-case-studies.md)

The first four chapters establish the geometry and algebra needed for simplex. Chapters 5–6 handle degenerate pivots and feasible initialisation. Chapters 7–8 prove matching objective bounds and alternatives for infeasibility. Chapters 9–10 track how those conclusions change with the data. The remaining chapters apply the framework to networks, games, positive central points, integer choices, nonlinear constraints, and synthetic modelling cases.

Each chapter includes worked calculations and ten exercises with two staged hints and a full solution reveal. Attempt the question before opening help, then compare the complete reasoning, including the sign and domain checks. A correct decimal objective without a feasible point or a valid bound does not establish optimality.

<a id="section-28-the-proof-route-and-sign-convention"></a>
## The proof route and sign convention {#section-30-the-proof-route-and-sign-convention}

The default primal form is
$$
\\max\\{c^Tx:Ax=b,\\ x\\ge0\\},
$$
with dual
$$
\\min\\{b^Ty:A^Ty\\ge c,\\ y\\text{ unrestricted}\\}.
$$
A local minimisation formulation explicitly translates these signs. Variable domains determine multiplier restrictions; a free variable, nonnegative variable, equality, and one-sided inequality cannot be interchanged without changing the derivation.

The book proves the active-normal vertex criterion and the finite vertex-hull theorem for bounded polyhedra. Independent positive support then gives basic feasible solutions and finite optimum attainment in nonnegative standard form. Simplex steps preserve precise invariants and produce upper bounds or improving rays. Closedness and separation of finite cones prove strong duality directly, after which Farkas' alternatives and complementary slackness are derived without circular assumptions.

Degeneracy receives separate attention. Several bases can describe one vertex, and a zero pivot need not improve the point. Bland's anti-cycling theorem is identified as a cited result, distinct from the complete elementary proofs of nondegenerate progress. The introductory interior-point chapter proves central-point existence under strict primal–dual feasibility and the exact objective-gap bound; it does not claim a full polynomial-time algorithm from Newton's equations alone. General nonlinear multiplier necessity and deeper second-order results are likewise distinguished from the proved convex-sufficiency argument.

<a id="section-44-a-recurring-example"></a>
## A recurring example {#section-46-a-recurring-example}

Maximise $3x+2y$ subject to $x+y\\le4$, $2x+y\\le5$, and $x,y\\ge0$. The feasible point $(1,3)$ has value9. Adding the two resource inequalities proves $3x+2y\\le9$ for every feasible point, so the point is globally optimal.

The same example later supplies simplex dictionaries, dual multipliers $(1,1)$, complementary-slackness equations, and exact sensitivity regions. If the second capacity changes from5 to$t$, the old basis remains feasible only for $4\\le t\\le8$. Its value formula $t+4$ is exact on that interval; extrapolating it indefinitely is false. Connecting one calculation across chapters helps distinguish a model, an algorithm, and a certificate.

<a id="section-50-a-starting-diagnostic"></a>
## A starting diagnostic {#section-52-a-starting-diagnostic}

Before beginning, check that you can explain each of these points.

- A feasible set can be unbounded while a particular objective has a finite maximum.
- A point can satisfy every equality and still violate a nonnegativity condition.
- A matrix can have full row rank without every square column subset being a basis.
- A convex combination of feasible points remains feasible for affine constraints.
- A zero residual for stored data does not remove uncertainty in the data themselves.
- A derivative condition is not automatically a global optimum certificate.

Repair the linear-algebra points through the linked Lucent lessons. The book develops the optimisation-specific distinctions rather than assuming their conclusions. For numerical factor solves and conditioning, [Matrix Computation in Practice](matrix-computation-applications.md) is a complementary reading; its floating-point analysis answers a different question from exact LP feasibility.

<a id="section-63-related-treatments-and-modelling-scope"></a>
## Related treatments and modelling scope {#section-65-related-treatments-and-modelling-scope}

The existing [Polyhedral Integrality and Valid Inequalities](numerical-mathematics-optimization-by-structure/polyhedral-integrality.md) provides optional further work on integer hulls, facets and cuts. It remains a separate treatment. The KKT chapter builds on the live calculus reader and acknowledges the Quarto constrained-optimisation source; it does not duplicate that lesson. The [modelling certificate collection](applied-modeling-proof-reference/optimization-duality-certificates.md) supplies eighteen additional solved questions and related examples, linked from the final case-study chapter.

For further barrier algorithms and numerical residuals, continue to [Interior-Point Methods and the Central Path](numerical-mathematics-optimization-by-structure/interior-point-methods.md). It proves a general convex barrier gap and derives feasible Newton directions under explicit hypotheses.

All case data are synthetic teaching examples. A real application requires evidence that its variables, domains, units, coefficients and uncertainty model represent the intended decision. An algorithm can solve a mistaken formulation accurately. The report should therefore include the feasible plan, the bound or contradiction, the data assumptions, and the parameter region over which a sensitivity claim remains valid.

<a id="section-71-sources"></a>
## Sources {#section-73-sources}

- Dimitris Bertsimas and John N. Tsitsiklis, *Introduction to Linear Optimization*, Athena Scientific, 1997: [author book listing](https://web.mit.edu/jnt/www/home.html) and [MIT course reading guide](https://ocw.mit.edu/courses/15-093j-optimization-methods-fall-2009/pages/readings/).
- Jiří Matoušek and Bernd Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), Springer, 2007.
- Robert G. Bland, [New Finite Pivoting Rules for the Simplex Method](https://doi.org/10.1287/moor.2.2.103), *Mathematics of Operations Research* 2(2), 1977, pages 103–107.

The exposition, proofs, examples and new exercises are original to Euler. The references give further reading and identify explicitly cited theorems. Existing Euler source texts remain available through their links.

<a id="section-79-summary"></a>
## Summary {#section-81-summary}

The course connects a model to a feasible decision and a mathematical certificate. Geometry explains bases; simplex constructs solutions and bounds; duality proves that matching certificates exist; sensitivity identifies where conclusions persist. Applications retain the same discipline about domains, signs, uncertainty and the exact claim being supported.
`;export{e as default};