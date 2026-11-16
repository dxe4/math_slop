# Glossary and notation

## Core symbols

| Symbol | Meaning |
|---|---|
| $p$ | a fixed prime number |
| $v_p(x)$ | exponent valuation on $\mathbb Q_p$, with $v_p(0)=+\infty$ |
| $\vert x\vert _p$ | normalized absolute value $p^{-v_p(x)}$ |
| $\mathbb Q_p$ | completion of $\mathbb Q$ under $\vert \cdot\vert _p$ |
| $\mathbb Z_p$ | valuation ring $\{x:v_p(x)\ge0\}$ |
| $\mathbb Z_p^\times$ | group of units, equivalently $v_p(x)=0$ |
| $\mathbb F_p$ | field with $p$ elements |
| $O(p^N)$ | an unspecified element of $p^N\mathbb Z_p$ |
| $U_n$ | principal-unit subgroup $1+p^n\mathbb Z_p$ for $n\ge1$ |
| $\mu$ | additive Haar measure, normalized by $\mu(\mathbb Z_p)=1$ |
| $\mathcal O_K$ | ring of integers of a local field $K$ |
| $\mathfrak p_K$ | maximal ideal of $\mathcal O_K$ |
| $\pi$ | a uniformizer, normalized by $v_K(\pi)=1$ |
| $e,f$ | ramification index and residue degree |
| $\mathbb C_p$ | completion of an algebraic closure of $\mathbb Q_p$ |
| $\widehat f$ | Fourier transform of $f$ for a stated character and measure |
| $T_p(E)$ | $p$-adic Tate module of an elliptic curve |
| $W(R)$ | ring of $p$-typical Witt vectors of a perfect ring $R$ |
| $G_K$ | absolute Galois group of a field $K$ |
| $I_K$ | inertia subgroup of $G_K$ |
| $\operatorname{rec}_K$ | local reciprocity map, with normalization stated |
| $\Gamma$ | Galois group of a chosen $\mathbb Z_p$-extension |
| $\Lambda(\Gamma)$ | completed group algebra $\mathbb Z_p[[\Gamma]]$ |
| $K^\flat$ | tilt of a perfectoid field $K$ |
| $x^\sharp$ | multiplicative sharp image of $x\in K^\flat$ |
| $D_B(V)$ | period invariants $(B\otimes V)^{G_K}$ |
| $\varphi,N$ | Frobenius and monodromy operators |

## Valuation and topology

**Absolute precision.** Knowing $x$ modulo $p^N$, equivalently knowing the ball
$x+p^N\mathbb Z_p$. It is not the same as a count of significant digits when
$v_p(x)\ne0$.

**Absolute value.** A multiplicative size function satisfying a triangle
inequality. A non-Archimedean absolute value satisfies the stronger maximum
inequality.

**Ball.** A set of points within a strict or weak radius of a center. In an
ultrametric space, every point of a ball is a center and two balls are nested or
disjoint.

**Cauchy sequence.** A sequence whose pairwise distances eventually fall below
every positive threshold. *P*-adically, late terms agree modulo every fixed
$p^N$.

**Clopen.** Both open and closed. Residue balls are clopen, although singletons
are not open.

**Completion.** A complete metric space containing the original space densely
and isometrically, unique up to canonical isometry.

**Equivalent absolute values.** Absolute values inducing the same topology; on
a field this is equivalently the same convergent sequences. Positive powers
give the same topology, subject to the qualification about retaining the
ordinary triangle inequality in Chapter 2.

**Non-Archimedean.** Describes an absolute value or metric satisfying a maximum
rather than additive triangle bound.

**Place.** An equivalence class of nontrivial absolute values. The places of
$\mathbb Q$ are the real place and one place for each prime.

**Relative precision.** The number of known digits after factoring out the
valuation. For a nonzero approximation it equals absolute precision minus
valuation.

**Totally disconnected.** Having no connected subsets other than singletons.
This does not mean discrete.

**Ultrametric.** A metric satisfying
$d(x,z)\le\max\{d(x,y),d(y,z)\}$.

## Algebra and analysis

**Haar measure.** A translation-invariant measure on a locally compact group,
unique up to normalization.

**Hensel lift.** A compatible refinement of a modular root to higher prime-power
precision; under suitable hypotheses its limit is an exact *p*-adic root.

**Inverse limit.** The object of compatible elements across a system of
quotients. The identity
$\mathbb Z_p\cong\lim_{\leftarrow N}\mathbb Z/p^N\mathbb Z$ formalizes coherent
digits.

**Local field.** A nondiscrete locally compact topological field. Characteristic
zero examples are finite extensions of $\mathbb Q_p$.

**Local ring.** A commutative ring with a unique maximal ideal. In
$\mathbb Z_p$, that ideal is $p\mathbb Z_p$.

**Principal unit.** An element of $1+p\mathbb Z_p$, or of a deeper group $U_n$.

**Residue field.** The quotient of a valuation ring by its maximal ideal. For
$\mathbb Q_p$ it is $\mathbb F_p$.

**Strassmann's theorem.** A coefficient-based finite bound on zeros of a
nonzero convergent power series on $\mathbb Z_p$.

**Teichmüller representative.** The canonical root-of-unity lift of a nonzero
residue class in an odd-prime local field.

**Uniformizer.** An element of least positive normalized valuation, generating
the maximal ideal of a discrete valuation ring.

## Advanced local analysis and geometry

**Banach space.** A complete normed vector space. In the non-Archimedean setting
the norm satisfies a maximum triangle inequality.

**Berkovich point.** A multiplicative seminorm extending the base-field absolute
value. Classical evaluations are only one type; disc seminorms supply paths and
branch points.

**Different.** The integral ideal dual to the inverse trace-dual ideal. Its norm
is the relative discriminant ideal and its valuation measures ramification.

**Formal group.** A power series $F(X,Y)=X+Y+\cdots$ satisfying group laws as
formal identities. Near an elliptic curve's identity it describes the local
group operation.

**Gauss norm.** The maximum coefficient norm on a Tate algebra, or its radius-
weighted variant. Its multiplicativity is fundamental in analytic geometry and
Newton-polygon theory.

**Mahler expansion.** The unique series
$\sum c_n\binom{x}{n}$ representing a continuous function on $\mathbb Z_p$;
continuity is equivalent to $c_n\to0$.

**Newton polygon.** The lower convex hull of coefficient-valuation points of a
polynomial. Negative segment slopes are root valuations after passing to a
splitting field.

**Period ring.** A topological ring such as $B_{\mathrm{dR}}$ or
$B_{\mathrm{cris}}$ carrying filtration, Frobenius, or monodromy structures used
to compare Galois representations with geometric cohomology.

**Schwartz–Bruhat function.** A locally constant, compactly supported function
on a non-Archimedean local field.

**Spherically complete.** Having nonempty intersection for every nested family
of closed balls. This is stronger than metric completeness.

**Tate algebra.** The algebra $K\langle T_1,\ldots,T_n\rangle$ of restricted
power series converging on a closed unit polydisc.

**Tate module.** The inverse limit of the $p^n$-torsion groups of an elliptic
curve under multiplication by $p$; it carries a continuous Galois action.

**Tame and wild ramification.** Ramification is tame when the residue
characteristic does not divide the ramification index and wild when it does.

## Modern local arithmetic

**Almost isomorphism.** A map whose kernel and cokernel are annihilated by a
specified idempotent ideal of topologically tiny elements. "Almost" is relative
to that ideal and does not mean approximately equal in an ordinary norm.

**Amice transform.** The power series

$$
\mathcal A_\mu(T)=\int_{\mathbb Z_p}(1+T)^x\,d\mu(x)
$$

associated with a bounded measure. Its coefficients are binomial moments, and
convolution becomes multiplication.

**Characteristic ideal.** An ideal encoding the height-one cyclic factors of a
finitely generated torsion module over an Iwasawa algebra. It is defined only up
to a unit and does not record every finite or pseudonull submodule.

**Coleman integral.** A rigid-analytic integral on suitable curves whose local
primitives are normalized using Frobenius. It is not constructed by following a
topological path through the totally disconnected classical points.

**Crystalline representation.** A $p$-adic Galois representation having a
full-dimensional space of invariants in $B_{\mathrm{cris}}$. Its associated
linear algebra carries Frobenius and models good-reduction cohomology.

**de Rham representation.** A representation $V$ satisfying
$\dim_KD_{\mathrm{dR}}(V)=\dim_{\mathbb Q_p}V$. Its invariant space has a
decreasing filtration.

**Differential module.** A finite projective module with a connection satisfying
a Leibniz rule. Over the Robba ring, radii and Frobenius structures encode
arithmetic differential equations.

**Ghost component.** One of the universal polynomial coordinates in which Witt
addition and multiplication become coordinatewise. Ghost coordinates need not
be invertible coordinates in characteristic $p$.

**Hodge–Tate representation.** A representation that splits over
$\mathbb C_p$ into Tate-twist graded pieces. The grading integers are its
Hodge–Tate weights; sign conventions vary.

**Iwasawa algebra.** The inverse limit of finite group rings of a profinite
group. For $\Gamma\cong\mathbb Z_p$, choosing a generator gives
$\mathbb Z_p[[\Gamma]]\cong\mathbb Z_p[[T]]$.

**Local reciprocity.** The canonical continuous homomorphism from $K^\times$
to the abelianized absolute Galois group, normalized by the image of a
uniformizer. Finite quotients identify norm subgroups with finite abelian
extensions.

**Lubin–Tate group.** A one-dimensional formal group associated with a local
uniformizer. Its torsion points generate totally ramified abelian extensions and
make local reciprocity explicit.

**Monodromy operator.** The nilpotent operator $N$ on semistable period
invariants, recording degeneration absent in the crystalline case.

**Perfectoid field.** A complete rank-one nondiscretely valued field of residue
characteristic $p$ whose Frobenius modulo $p$ is surjective, in the mixed-
characteristic formulation.

**Profinite group.** An inverse limit of finite discrete groups, carrying a
compact totally disconnected topology. Galois actions in this book are always
required to be continuous.

**Robba ring.** A union of rings of Laurent series converging on punctured
annuli with outer radius one. It supports Frobenius modules and $p$-adic
differential equations.

**Semistable representation.** A representation with full-dimensional
$B_{\mathrm{st}}$-invariants. Its linear algebra has Frobenius and monodromy;
vanishing monodromy recovers the crystalline case.

**Sharp map.** The multiplicative norm-preserving map
$K^\flat\to K$ built from limits of compatible $p$-power roots. It is not
generally additive.

**Tilt.** The characteristic-$p$ perfectoid field built from compatible
Frobenius sequences in a characteristic-zero perfectoid field. Tilting
preserves the value group, residue field, and finite-extension category.

**Witt vector.** A sequence whose ring operations are defined by requiring
universal ghost polynomials to add and multiply coordinatewise. Witt vectors
canonically lift perfect residue rings to characteristic zero.

**Weight space.** The rigid space of continuous characters of
$\mathbb Z_p^\times$. Integer powers occupy arithmetic points on its
components.

## Dynamics and global arithmetic

**Adele.** A real component and one component from every $\mathbb Q_p$, with all
but finitely many finite components integral.

**Attracting fixed point.** A fixed point with multiplier of norm below one;
nearby orbits converge to it.

**Finite shadow.** The dynamical system or equation obtained by reducing modulo
$p^N$. Compatibility across all $N$ is needed to recover a *p*-adic object.

**Hasse principle.** The assertion, valid for some classes of equations and false
for others, that solvability at every completion implies rational solvability.

**Local obstruction.** Failure of solvability in one completion, which proves
failure over $\mathbb Q$.

**Restricted product.** A product in which almost all components lie in chosen
compact-open subgroups; adeles use $\mathbb Z_p$ at finite places.

## Cohomology, representations, and certified computation

**Cocycle and coboundary.** A one-cocycle $c$ satisfies
$c(gh)=c(g)+g c(h)$. A coboundary has the form $c(g)=gm-m$; cohomology classes
identify cocycles differing by such a change of representative.

**Deformation ring.** A universal or versal complete local ring that organizes
lifts of a residual representation under stated equivalence and local
conditions. Existence requires representability hypotheses.

**Étale $(\varphi,\Gamma)$-module.** A module over a period-type coefficient
ring with compatible semilinear Frobenius and $\Gamma$ actions plus an étaleness
condition. Under the appropriate theorem it corresponds to a continuous
$p$-adic Galois representation.

**Kummer map.** The connecting homomorphism that sends a rational point modulo
multiplication to a first cohomology class. It is the bridge from points to
descent data.

**Obstruction class.** A cohomological class, often in degree two, whose
nonvanishing prevents a first-order lift or local datum from extending. A zero
obstruction may still leave multiple choices.

**Precision certificate.** A record of the field representation, valuation,
known residue ball, guard assumptions, and a checkable residual bound. Printed
digits without this information are not certified *p*-adic output.

**Selmer group.** A subgroup of global cohomology cut out by named local
conditions at every place. It contains the image of rational points modulo
multiplication but can also contain classes obstructed globally.

**Tate curve.** For $0<|q|<1$, an elliptic curve analytically uniformized by
$K^\times/q^{\mathbb Z}$. It models split multiplicative reduction, not every
elliptic curve over a local field.

**Tate–Shafarevich group, $\operatorname{Sha}$.** The group of torsor classes
that are locally soluble at every completion but not necessarily globally. Its
$n$-torsion appears in the exact sequence relating rational points and the
$n$-Selmer group.

**Tangent space of a deformation problem.** Lifts to the dual numbers
$k[\varepsilon]/(\varepsilon^2)$ modulo the declared equivalence. Its dimension
counts first-order directions, not automatically the dimension of a smooth
universal space.

## Buildings, étale geometry, integration, and definability

**Admissible smooth representation.** A smooth representation $V$ of a locally
profinite group for which $V^U$ is finite-dimensional for every open compact
subgroup $U$.

**Apartment.** A bi-infinite geodesic in the Bruhat–Tits tree associated with a
pair of lines in $K^2$. In higher rank, apartments are tiled affine spaces.

**Bruhat–Tits vertex.** A homothety class of rank-two $\mathcal O_K$-lattices
in $K^2$. It is not a Berkovich seminorm point.

**Cell decomposition.** A finite partition of a definable $p$-adic set into
pieces with controlled valuation, angular component, and center data.

**Definable family.** Sets $S_t=\{x:\varphi(x,t)\}$ described by one formula
as the parameter $t$ varies in a declared first-order structure.

**Étale algebra.** A finite product of finite separable field extensions over a
field; over a ring, the finite flat unramified analogue with unique infinitesimal
lifting.

**Étale cohomology.** Cohomology on the site of étale maps to a scheme. Over the
spectrum of a field it recovers continuous Galois cohomology for the matching
coefficient sheaves.

**Hecke algebra.** An algebra of compactly supported, bi-invariant functions
under convolution. The spherical algebra for $PGL_2(K)$ acts radially on the
Bruhat–Tits tree.

**Igusa local zeta function.** An additive-Haar integral
$\int_{\mathcal O_K^n}|f(x)|^s\,dx$ whose coefficients record the valuation
distribution of a polynomial.

**Iwahori subgroup.** The inverse image of a Borel subgroup under reduction of
$GL_2(\mathcal O_K)$ to $GL_2(k)$; geometrically it stabilizes an oriented edge.

**Local $p$-adic height symbol.** A logarithmic or integration-based pairing of
disjoint degree-zero divisors, defined only after declaring local and global
normalizations.

**Newvector.** A vector fixed at the least congruence level allowed by the
conductor of an irreducible admissible generic representation.

**Quantifier elimination.** Equivalence of every formula to a quantifier-free
one in a specified theory and language. Changing the language changes the claim.

**$p$-adic regulator.** The determinant of a $p$-adic height-pairing matrix on
points modulo torsion. Nonzero regulator certifies independence; zero need not
prove dependence when the pairing is degenerate.

**Smooth representation.** A representation of a locally profinite group in
which every vector has an open stabilizer. This is not differentiability and is
not the continuity condition on a $p$-adic Galois representation.

**Spherical vector.** A vector fixed by a maximal compact subgroup such as
$PGL_2(\mathcal O_K)$. Spherical Hecke operators act on the fixed subspace.
