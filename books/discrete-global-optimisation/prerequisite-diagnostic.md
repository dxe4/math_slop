
# Prerequisite Diagnostic and Repair {#section-1-prerequisite-diagnostic-and-repair}

1. A minimization relaxation has value six and an integer feasible point has value nine. Locate the integer optimum and state the known absolute gap.
2. Does rounding a continuous feasible point necessarily preserve a linear equality?
3. Show that a convex combination of two points in a polyhedron remains in it.
4. Explain why a linear objective with integral coefficients takes integer values on integer vectors.
5. If a valid minimization lower bound exceeds an incumbent upper bound, identify what requires investigation.

The optimum in the first question lies in $[6,9]$, and the incumbent is at most three above it. Rounding generally breaks equalities: $(1/2,1/2)$ satisfies $x+y=1$, while rounding both coordinates upward gives sum two. For the third, multiply each componentwise inequality by the convex weights and add; equalities are preserved as well. Integer sums of integer products remain integral, though offsets and nonintegral coefficients need separate treatment. In the final question, the two claimed certificates cannot both be valid for the same feasible minimization problem; inspect arithmetic direction, feasibility, conventions and transformations before reporting a conclusion.

Repair these ideas through the [LP first course](#/books/linear-programming-optimisation) and [convex formulations](../numerical-mathematics-optimization-by-structure/formulations-and-claim-boundaries.md). This diagnostic supplies preparation guidance, not graded evidence .
