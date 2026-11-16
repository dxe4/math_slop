
# Glossary and Theorem Index

This index points to definitions and proofs, not merely to occurrences of a word. A theorem name never replaces its hypotheses. In particular, a domain is connected and open; a region with boundary in an integral theorem has additional stated regularity; and a chosen logarithm is part of the data of a complex power.

## Plane and local function theory

**Complex norm and topology.** The norm is \(|x+iy|=(x^2+y^2)^{1/2}\). Disks, closures, compactness, connectedness, polygonal paths, and simple connectedness are organized in [Chapter 1](complex-plane-topology.md). Closed and bounded implies compact in this finite-dimensional plane, with the Real Analysis compactness input identified.

**Holomorphic function.** Complex differentiability at every point of an open set is the definition. Real differentiability together with the Cauchy–Riemann equations characterizes a complex derivative at a point; the equations by themselves at one point do not. See [Chapter 2](holomorphic-cauchy-riemann.md) for the precise criterion and a counterexample. The derivative's real matrix represents multiplication by one complex number.

**Analytic function and radius of convergence.** Local representability by a convergent power series defines analyticity. [Chapter 3](power-series-analytic-functions.md) proves interior uniform convergence, differentiation, recentering, and coefficient uniqueness. That chapter proves analytic implies holomorphic. The converse is proved later from Cauchy's formula, avoiding a circular definition.

**Exponential, logarithm, branch, and power.** A logarithm of a nonvanishing function is a holomorphic function whose exponential is the given function. The principal logarithm uses a specified slit plane and argument interval. Powers formed by exponentiating a chosen logarithm depend on that choice. [Chapter 4](exponential-logarithm-powers.md) develops these conventions and the elementary transcendental functions.

## Integration and rigidity

**Contour, primitive, and winding number.** A contour is a piecewise smooth parametrized path under the chapter's conventions. A primitive is a holomorphic function with a specified derivative. The index of a closed contour about an avoided point is an integer, obtained by its continuously lifted argument or its logarithmic integral. Parameter direction matters. See [Chapter 5](paths-contour-integrals.md).

**Cauchy–Goursat and homotopy invariance.** [Chapter 6](cauchy-goursat.md) proves the triangle theorem without assuming continuity of the derivative, constructs local primitives, and proves invariance under a homotopy that stays inside the domain. Simple connectedness supplies the global primitive conclusion; a punctured plane does not satisfy that hypothesis.

**Cauchy integral formula and estimates.** [Chapter 7](cauchy-integral-formula.md) proves the disk formula, Taylor expansion, higher derivative formulas, and derivative estimates. Its applications include Morera, compact uniform limits, Liouville's theorem, and the fundamental theorem of algebra. Bounds refer to a legal surrounding circle, not to arbitrary distant values.

**Order of a zero, identity theorem, maximum modulus, and open mapping.** A nonzero holomorphic function factors locally as \((z-a)^m u(z)\), with \(u(a)\ne0\). This finite order is the multiplicity used later. [Chapter 8](zeros-identity-maximum-modulus.md) proves isolation, identity, maximum and minimum principles, open mapping, local invertibility for injective holomorphic maps, and Schwarz's lemma. Connectedness and nonconstancy are retained where required.

**Laurent series and isolated singularity.** A Laurent expansion belongs to a specified annulus; changing the annulus can change its coefficients. Removable singularities, poles, essential singularities, residues, and the point at infinity are treated in [Chapter 9](laurent-series-singularities.md), including the annular integral formula and Casorati–Weierstrass.

## Boundary methods and global constructions

**Residue and complete boundary.** The residue is the coefficient of \((z-a)^{-1}\), while the complete boundary includes every boundary component with its induced orientation. [Chapter 10](residue-theorem.md) proves its finite-region residue theorem, identifying Green's theorem as an input. [Chapter 11](real-integrals-residues.md) supplies closing-arc, indentation, and limiting estimates for real integrals. A principal value must be distinguished from an ordinary improper integral.

**Argument principle and Rouché.** Zeros contribute positive orders and poles negative orders to the logarithmic derivative. Strict comparison on the complete boundary gives an unchanged zero count under a specified homotopy. See [Chapter 12](argument-principle-rouche.md).

**Harmonic function and Poisson kernel.** A real \(C^2\) function is harmonic when its Laplacian vanishes. [Chapter 13](harmonic-functions-poisson.md) proves conjugate existence on simply connected domains, mean values, maximum principles, and the continuous-boundary disk Dirichlet theorem.

**Conformal and Möbius maps.** Local angle preservation requires a nonzero complex derivative. Möbius transformations are automorphisms of the sphere, with a pole permitted there. See [Chapter 14](conformal-mobius.md).

**Normal family, Montel, Hurwitz, and Riemann mapping.** Compact convergence and local boundedness lead to subsequences; extremality yields the disk map for a nonempty simply connected proper plane domain. [Chapter 15](normal-families-riemann-mapping.md) gives the compactness and existence arguments.

**Germ, continuation, and monodromy.** [Chapter 16](analytic-continuation.md) distinguishes overlapping local representatives from a global single-valued function and proves its pathwise and homotopy uniqueness results.

**Entire and meromorphic constructions.** [Chapter 17](entire-meromorphic-functions.md) proves plane Weierstrass products and Mittag-Leffler sums with convergence corrections. [Chapter 18](gamma-zeta-functions.md) applies continuation and product methods to gamma and zeta.

## Summary

Locate a definition here, then read the linked statement with its domain and convergence conditions. The proof chain runs from local differentiation and series through boundary integrals to global compactness and construction.
