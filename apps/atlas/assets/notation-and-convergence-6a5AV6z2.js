var e=`---
parent_id: book-functional-analysis
matter_id: notation-and-convergence
title: "Notation and Convergence"
level: graduate
license: CC BY-SA 4.0
---

# Notation and Convergence

All vector spaces are real or complex as specified in each theorem; domain and target scalars agree for linear maps. A Banach space is complete in its norm metric. A closed subspace inherits its ambient norm unless a different norm is explicitly introduced.

The notation L(X,Y) denotes bounded linear operators with the operator norm. A norm bound is required to hold for every vector. Strong operator convergence means convergence on each fixed input; operator-norm convergence is uniform over the unit ball. Later weak convergence means convergence against a stated family of continuous linear functionals, not merely against coordinate projections chosen informally.

An infimum need not be attained. The quotient norm is defined by distance to a subspace, using representatives arbitrarily close to the infimum. Nearest-point constructions require separate geometry and are not part of the Banach-space definition.

A bounded family is not automatically relatively compact. The unit vectors in a sequence space provide a standing counterexample. Likewise a dense family of inputs is not the full input space unless a continuity or uniform stability argument justifies the extension.
`;export{e as default};