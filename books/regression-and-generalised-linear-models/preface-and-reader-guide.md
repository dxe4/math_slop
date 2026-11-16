
# Preface and Reader Guide

Regression combines an algebraic fitting rule, a model for conditional means, a probability statement about errors and a scientific interpretation. These layers need separate assumptions. A uniquely computed coefficient is not automatically identified as a causal effect, and a small numerical residual does not establish a probability model.

This is an L3 mathematical-statistics book. Preparation is [likelihood](../principles-statistical-inference/likelihood-score-and-evidence.md), [sufficiency](../principles-statistical-inference/sufficiency-factorization-and-reduction.md), [exponential families](../principles-statistical-inference/exponential-families-and-information-geometry.md), and [linear algebra](#/books/linear-algebra-structure-proofs). Gaussian-vector geometry from the probability book supports exact normal-theory inference. [Statistics with R](#/books/statistics-with-r) supplies a gentler applied route.

The first part builds least squares, projection and inference before discussing collinearity and influence. The second adds selection, experimental designs and structured covariance. The final part develops exponential dispersion families, binary and count models, quasi-likelihood, mixed models and case studies. Study these in order when their prerequisites are unfamiliar; the named links identify the preparation rather than relying on chapter-number guesses.

Expectations and covariances are conditional on the stated design unless a random-design population is explicitly introduced. Lower-case observations are realised values; upper-case response vectors are random before observation. A contrast, prediction and intervention effect can use similar formulas while targeting different quantities.

Examples show calculations and their assumptions. Each exercise provides two hints and a full solution, which are useful after an independent attempt. Written solutions do not grade the learner or turn study checkmarks into assessed evidence. Computational passages specify their source and intended model; analytical derivations establish the identities without claiming that an accompanying numerical investigation has been executed.

The spelling convention is British English. The mathematical development is original Euler text, drawing on the existing Principles linear-model chapter and the applied R chapters where stated. External references are suggestions for further study, not copied exercises.
