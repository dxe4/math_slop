
# References and Notation

Benchmark references are MacWilliams and Sloane, *The Theory of Error-Correcting Codes*, and Roth, *Introduction to Coding Theory*. Original Euler source: [Algebraic Coding Theory](../finite-algebra-computation/algebraic-coding-theory.md), whose file, identity, mathematical statements and exercises remain available.

Use row-vector messages and codewords: encoding is c=uG and a syndrome is Hc^T. The dual uses the ordinary finite-field coordinate pairing unless another pairing is explicitly declared. Parameters [n,k,d] mean length, dimension and minimum distance. Designed distance is a proved lower bound and is not silently substituted for true minimum distance. All probabilities and likelihoods state their channel law.

## Further sources and theorem boundaries

The geometric continuation uses the standard smooth-projective-curve Riemann–Roch theorem and global residue theorem in the precise forms stated in Chapter 12. Stichtenoth, *Algebraic Function Fields and Codes*, is a specialist continuation. Those curve theorems are imported; the coding kernel, dimension, distance, residue-dual and coordinate-multiplier deductions are derived in the chapter.

The full finite-field constructions and proofs cover Hamming and binary Golay codes, divisor-generated cyclic codes, BCH distance, generalised Reed–Solomon distance and duals, two algebraic decoder routes, Singleton/Plotkin/Gilbert–Varshamov/Griesmer bounds and MacWilliams transforms. Convolutional and LDPC chapters retain exact state, tree, ensemble and noise assumptions. Named faster recurrence solvers, general ternary Golay construction, perfect-code classification and optimal curve towers are outside the proved scope.

Stable book identity is library:book-error-correcting-codes. Each native chapter appends its declared chapter slug. The original algebraic source remains library:book-finite-algebra-computation:algebraic-coding-theory; the Computational Algebra bridge can link library:book-error-correcting-codes:linear-codes without redirecting its earlier learner record.
