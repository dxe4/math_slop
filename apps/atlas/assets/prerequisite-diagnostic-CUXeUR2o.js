var e=`---
parent_id: book-algebraic-geometry
matter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

These questions choose a preparation route and have no grading role. Work each on paper before consulting its answer.

1. Compute the radical of $(x^2,xy)$ in $k[x,y]$ and its zero set over an algebraically closed field. **Answer:** the radical is $(x)$ and the zero set is the vertical axis; the original ideal also retains nonreduced algebra.
2. State why $k[x,y]/(xy)$ is reduced but not a domain. **Answer:** $(xy)=(x)\\cap(y)$ is radical, while the two nonzero coordinate classes multiply to zero.
3. Explain when a fraction $a/s$ is zero in a localisation of a ring with zero divisors. **Answer:** some element of the multiplicative set must annihilate $a$; the numerator itself need not vanish.
4. State the strong Nullstellensatz with its field hypothesis. **Answer:** over algebraically closed $k$, for an ideal in a finite-variable polynomial ring, $I(V(J))=\\sqrt J$.
5. Give a Noetherian ring and a non-Noetherian polynomial-ring example. **Answer:** $k[x,y]$ is Noetherian; $k[x_1,x_2,\\ldots]$ has a strictly increasing chain of variable-generated ideals.
6. Distinguish a dimension from a tangent dimension at a point. **Answer:** the former uses prime chains or local dimension; the latter uses the residue-field dual of the maximal ideal modulo its square. Their equality is a regularity condition, not the definition of every local ring's dimension.

Repair Questions 1–5 with the actual rings, localisation, Noetherian and Nullstellensatz chapters of [Commutative Algebra](../../commutative-algebra.md). Its dimension/regularity chapters prepare Question 6. Before the cohomology chapters, additionally identify kernels and cokernels of a complex, prove a short exact sequence yields its long exact homology sequence, and distinguish a left exact functor from its higher right derived functors. The corresponding Homological Algebra chapters supply those preparations. None of these questions imports a theorem merely because its name was recognized.
`;export{e as default};