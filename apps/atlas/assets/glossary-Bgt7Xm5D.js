var e=`---
parent_id: book-finite-algebra-computation
matter_id: glossary
title: "Glossary and Index"
license: CC BY-SA 4.0
---

# Glossary and Index

This is a retrieval aid. Compact entries cannot replace the full definitions or hypotheses in their chapters. Chapter titles follow chapter order.

## Glossary

**Affine variety.** The zero set $V(I)$ of an ideal $I \\subseteq k[x_{1}, \\dots, x_{n}]$ in affine space $k^{n}$. Chapter 13 (Computational Algebraic Geometry).

**BCH bound.** The minimum distance of a BCH code is at least its designed distance. Chapter 9 (Algebraic Coding Theory).

**Berlekamp algorithm.** Deterministic polynomial factorisation over finite fields via the Berlekamp subalgebra. Chapter 14 (Advanced Topics in Finite Fields).

**Burnside algorithm.** Computation of a character table from the class algebra constants. Chapter 7 (Computational Group Theory); Chapter 11 (Project: Compute a Character Table).

**Cantor-Zassenhaus algorithm.** Probabilistic polynomial factorisation over finite fields using random splitting. Chapter 14.

**Character.** The trace function $\\chi_{\\rho}(g) = \\operatorname{tr}(\\rho(g))$ of a representation. Chapter 5 (Representation Theory of $S_{n}$); Chapter 6 (Character Tables).

**Character table.** The square matrix of irreducible character values on conjugacy classes. Chapter 6; Chapter 11.

**Cohomology group.** $H^{n}(G, M)$ measures obstructions to constructing objects with prescribed symmetry. Chapter 8 (Cohomology of Groups).

**Composition series.** A chain $G = G_{0} \\supset G_{1} \\supset \\dots \\supset G_{k} = \\{e\\}$ in which $G_{i+1}\\trianglelefteq G_i$ and every factor $G_i/G_{i+1}$ is simple. Chapter 12 (Finite Simple Groups and Classification).

**Cyclic code.** A linear code invariant under cyclic shift; corresponds to an ideal in $\\mathbb{F}_{q}[x]/(x^{n} - 1)$. Chapter 9.

**Discrete logarithm problem.** Given $g$ and $h = g^{x}$ in a cyclic group, find $x$. Chapter 10 (Cryptography).

**Elliptic curve.** A non-singular cubic curve $y^{2} = x^{3} + ax + b$ with a group law. Chapter 10.

**Frobenius automorphism.** The map $\\sigma(a) = a^{p}$ generating $\\operatorname{Gal}(\\mathbb{F}_{p^{n}}/\\mathbb{F}_{p})$. Chapter 4 (Galois Theory); Chapter 14.

**Fundamental theorem of Galois theory.** Inclusion-reversing bijection between subgroups of $\\operatorname{Gal}(K/F)$ and intermediate fields. Chapter 4.

**Gröbner basis.** A generating set of an ideal whose leading terms generate the ideal of all leading terms. Chapter 13.

**Galois group.** The group of field automorphisms fixing the base field. Chapter 4.

**Hamming code.** A perfect single-error-correcting linear code with parameters $[2^{r} - 1, 2^{r} - 1 - r, 3]$. Chapter 9.

**Hook-length formula.** $f^{\\lambda} = n! / \\prod_{b} h(b)$, giving the degree of the irreducible representation of $S_{n}$ indexed by $\\lambda$. Chapter 5.

**Integral domain.** A commutative ring with unity and no zero divisors. Chapter 2 (Rings and Ideals).

**Jordan–Hölder theorem.** Any two composition series have the same length and factors up to permutation. Chapter 12.

**Maschke's theorem.** Every finite-dimensional representation of a finite group over a field of characteristic not dividing $|G|$ is completely reducible. Chapter 5.

**Minimal polynomial.** The monic polynomial of least degree annihilating an algebraic element. Chapter 4.

**Module.** An abelian group with a ring action generalising the notion of a vector space. Chapter 3 (Modules over PIDs).

**Murnaghan-Nakayama rule.** A combinatorial recurrence for characters of $S_{n}$ using border strips. Chapter 5.

**Number-theoretic transform.** A discrete Fourier transform over a finite field used for fast polynomial multiplication. Chapter 14.

**Orthogonality relations.** Row and column orthogonality formulas for character tables. Chapter 6.

**PID.** A principal ideal domain: an integral domain in which every ideal is principal. Chapter 2; Chapter 3.

**Primitive element.** A generator of the cyclic multiplicative group $\\mathbb{F}_{q}^{\\times}$. Chapter 14.

**Primitive polynomial.** A monic irreducible polynomial whose root is a primitive element. Chapter 14.

**Reed-Solomon code.** A maximal-distance-separable BCH code with parameters $[q - 1, q - \\delta, \\delta]$. Chapter 9.

**Representation.** A group homomorphism $\\rho : G \\to GL(V)$. Chapter 5.

**Schreier-Sims algorithm.** Computation of a base and strong generating set for a permutation group. Chapter 7.

**Simple group.** A nontrivial group whose only normal subgroups are the identity subgroup and the whole group. Chapter 12.

**Smith normal form.** A diagonal canonical form for matrices over a PID yielding invariant factors. Chapter 3.

**Solvable group.** A group with a chain of normal subgroups having abelian quotients. Chapter 4.

**Splitting field.** The smallest field extension in which a polynomial factors completely. Chapter 4.

**Structure theorem.** Every finitely generated module over a PID decomposes as $R^{r} \\oplus \\bigoplus_{i} R/(d_{i})$. Chapter 3.

**Sylow theorems.** Existence, conjugacy, and counting of maximal $p$-subgroups. Chapter 12.

**Todd-Coxeter algorithm.** Coset enumeration for finitely presented groups. Chapter 7.

**Trace.** The sum $\\operatorname{Tr}_{K/F}(a) = \\sum_{i=0}^{d-1} a^{q^{i}}$ for a finite field extension. Chapter 14.

## Claim finder with status guards

### Theorems

**Fundamental theorem of Galois theory (Chapter 4).** For a finite Galois extension $K/F$, subgroups of $\\operatorname{Gal}(K/F)$ correspond bijectively to intermediate fields.

**Maschke's theorem (Chapter 5).** Finite-dimensional representations of a finite group are completely reducible when the characteristic does not divide $|G|$.

**Jordan–Hölder theorem (Chapter 12).** Any two composition series of a finite group have the same length and the same composition factors up to permutation.

**Structure theorem for finitely generated modules over a PID (Chapter 3).** $M \\cong R^{r} \\oplus R/(d_{1}) \\oplus \\dots \\oplus R/(d_{k})$ with $(d_{1}) \\supseteq \\dots \\supseteq (d_{k})$.

**Classification of finite simple groups (Chapter 12).** Every finite simple group is cyclic of prime order, alternating $A_{n}$ ($n \\geq 5$), simple of Lie type, or one of $26$ sporadic groups.

### Computational results

**Character table of $S_{4}$ (Chapter 11).** Constructed by hand from known characters and tensor products, then checked with row and column orthogonality.

**Gröbner basis for $I = (x^{2} + y, xy + y)$ (Chapter 13).** The basis $\\{x^{2} + y, xy + y, y^{2} + y\\}$ is certified by the Buchberger criterion.

### Open problems

**Exact complexity of Gröbner basis computation (Chapter 13).** The worst-case complexity of Buchberger's algorithm is known to be very high, but tight bounds for specific families remain active research questions.

**Discrete logarithms on elliptic curves (Chapter 10).** Generic-group lower bounds are theorems in the generic model. Security for a particular chosen curve is a separate, parameter-dependent assumption: special curve structure can enable attacks that the generic model does not capture.
`;export{e as default};