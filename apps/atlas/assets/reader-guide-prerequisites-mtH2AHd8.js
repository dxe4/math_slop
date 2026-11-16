var e=`---
parent_id: book-discrete-global-optimisation
matter_id: reader-guide-prerequisites
title: "Reader Guide and Prerequisites"
license: CC BY-SA 4.0
---

# Reader Guide and Prerequisites {#section-1-reader-guide-and-prerequisites}

Read [Linear Programming and Optimisation](../../linear-programming-optimisation.md) for formulation, dual bounds and simplex/interior methods. The [convex continuation](../../numerical-mathematics-optimization-by-structure.md) supplies separation, conjugacy, multipliers and continuous subproblem certificates. Preparation also includes finite-dimensional linear algebra, proof with inequalities, and basic algorithmic reasoning. [Numerical conditioning](../../numerical-mathematics-error-algorithms/finite-precision-conditioning.md) distinguishes arithmetic error from a logically invalid bound.

The twelve-chapter route includes 135 exercises with two staged hints and full solutions. Follow integer formulations, polyhedral geometry and networks before branch-and-bound, cuts and decomposition. Read the integrated certificate chapter alongside every search argument; its three sections include diagnostics, full verified-software material and capstone designs. The retained supporting copies preserve source lineage, rather than substituting for the current primary teaching.

For minimization a feasible incumbent is an upper bound and a relaxation is a lower bound. Declare the opposite convention explicitly when maximizing. A search node closes only through valid infeasibility, a valid comparison with the incumbent, or an exact local resolution. A time limit leaves a bounded or unknown result rather than proving optimality. Keep the mathematical certificate separate from an implementation's numerical evidence.

The old broad optimisation book now owns the convex primary route. Its discrete source identities alias here, while the originals remain intact.
`;export{e as default};