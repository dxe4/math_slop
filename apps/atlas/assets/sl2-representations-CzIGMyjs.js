var e=`---
parent_id: book-lie-groups-lie-algebras
chapter_id: sl2-representations
title: "Representations of sl(2)"
level: graduate
license: CC BY-SA 4.0
---

# Representations of sl(2) {#section-1-representations-of-sl-2}

The three relations for E,F,H already contain a complete finite-dimensional
representation theory. Eigenvectors of H form weight levels; E raises those
levels and F lowers them. Finite dimension forces each irreducible chain
to begin and end, and the relation between the two ends makes the highest
weight a nonnegative integer. We prove that classification and complete
reducibility, then calculate tensor products, characters and the global
descent condition from SU(2) to SO(3).

The algebra is sl(2,C), representations and invariant subspaces are complex,
and dimension is finite throughout. Use the preceding bracket and correspondence
chapters, especially the actual SU(2) covering proof in
[The Lie Correspondence](lie-correspondence.md). The averaging proof below
uses the surface integral on the unit three-sphere, with change of variables
as developed in
[Orientation and Integration](/resources/library%3Abook-smooth-manifolds%3Aorientation-integration/).
We construct the required special invariant integral directly; no general
Haar or Peter–Weyl theorem from the later chapter is assumed.

<a id="section-19-weights-and-the-raising-lowering-identities"></a>
## Weights and the raising-lowering identities {#section-21-weights-and-the-raising-lowering-identities}

A representation assigns operators E,F,H satisfying

$$[H,E]=2E,\\qquad[H,F]=-2F,\\qquad[E,F]=H.$$

The same symbols name the algebra basis and their acting operators;
the representation space will always make the intended meaning clear.
The weight space of a complex scalar lambda consists of vectors v
with Hv equal to lambda v. The first two relations put Ev in weight
lambda plus two and Fv in weight lambda minus two, unless the result
is zero. This statement initially concerns actual eigenvectors, not
an unproved simultaneous weight decomposition of every representation.

**Lemma 8.1 (Ladder identity).** If Ev is zero and Hv is lambda v,
then for every positive integer k,

$$HF^kv=(\\lambda-2k)F^kv,\\qquad
EF^kv=k(\\lambda-k+1)F^{k-1}v.$$

*Proof.* Commute H past each F to obtain the first formula. For
the second, the case k equal to one is EFv equal to FEv plus Hv.
For the induction step use
$EF^k=F^kE+kF^{k-1}(H-k+1)$, then multiply by F and use
HF equal to FH minus 2F. Collecting terms gives the same operator
identity with k replaced by k plus one. Applying to the stated
highest vector kills the final E term and gives the formula. ∎

**Definition 8.2 (Highest vector).** A nonzero vector killed by E
and an eigenvector of H is a highest vector. Its eigenvalue is
its highest weight. The word highest refers to the raising direction
specified by E; changing the positive root convention changes the
chosen highest vector.

<a id="section-53-classification-of-irreducibles"></a>
## Classification of irreducibles {#section-55-classification-of-irreducibles}

**Theorem 8.3.** Every irreducible finite-dimensional complex sl(2)
representation has a unique nonnegative-integer highest weight m.
It has dimension m plus one, weights m,m minus two through minus m,
each once, and a basis v,Fv through F-to-the-m v governed by Lemma8.1.

*Proof.* H has an eigenvector over the complex numbers. Repeatedly
apply E. Nonzero results have distinct eigenvalues separated by two,
so are linearly independent; finite dimension makes the sequence
terminate. Its last nonzero vector v is highest of some weight lambda.
The same distinct-weight argument makes its F-chain terminate.
Let m be the last nonzero power, so F-to-the-m v is nonzero but
the next is zero. Apply E to that zero next term. Lemma8.1 gives
(m+1)(lambda-m) times the last nonzero vector equal to zero.
Characteristic zero forces lambda equal to m.

The span of the whole chain is preserved by H, E and F by the
ladder formulas and the terminal zero. Irreducibility makes it
the whole representation. Its vectors have distinct weights,
so form a basis and have the claimed dimension. The matrices
of all generators in this basis depend only on m, proving
uniqueness up to representation isomorphism once existence is
established below. The highest space is one-dimensional, so
its weight is uniquely determined as well. ∎

Notice what has not been assumed: H was not initially declared
diagonalizable, and E was not initially declared nilpotent on an
arbitrary representation. The irreducible chain proves those properties
inside each irreducible. Complete reducibility will extend them to all
finite-dimensional representations later in the chapter.

**Proposition 8.4 (Existence by homogeneous polynomials).** For each
nonnegative integer m, the homogeneous polynomials of degree m in
two variables form an irreducible representation V-m with

$$E=x\\frac{\\partial}{\\partial y},\\qquad
F=y\\frac{\\partial}{\\partial x},\\qquad
H=x\\frac{\\partial}{\\partial x}-y\\frac{\\partial}{\\partial y}.$$

*Proof.* Applying the operators to a monomial verifies the three
relations directly. The polynomial x-to-the-m is highest, and its
successive F-images are nonzero multiples of the degree-m monomial
basis, ending after m steps. To prove irreducibility, take a
nonzero invariant subspace. Since H is diagonal on these monomials
with distinct eigenvalues, polynomial projections in H isolate
a nonzero monomial component of any nonzero vector in the subspace.
Repeated E then reaches the highest monomial with nonzero coefficients;
repeated F generates all the others. The invariant subspace is
therefore the whole space. For m equal to zero, the constant
polynomials give the one-dimensional trivial representation. ∎

The polynomial projection just used is explicit Lagrange interpolation:
to select one eigenvalue, multiply H minus each other eigenvalue and
divide by the corresponding nonzero scalar differences. Thus no spectral
projection theorem beyond elementary finite-dimensional algebra is hidden
in the irreducibility proof.

<a id="section-111-complete-reducibility-through-the-compact-real-form"></a>
## Complete reducibility through the compact real form {#section-113-complete-reducibility-through-the-compact-real-form}

The real algebra su(2) has basis iH, E minus F, and i times
E plus F. These are skew-Hermitian and trace zero, and their
complex span is all of sl(2,C). Restrict a complex sl(2)
representation to this real algebra. The simply connected integration
theorem and the proved simple connectedness of SU(2) integrate it
to a smooth SU(2) representation on the same complex vector space.
The target GL(V) is being regarded as a real Lie group here,
so the integration theorem has exactly its stated real hypotheses.

The unit-quaternion description identifies SU(2) with the standard
unit three-sphere. Multiplication on either side by a unit quaternion
is an orthogonal linear map of the ambient real four-space, because
the quaternion norm is multiplicative. It preserves the sphere's
surface volume: its differential is an isometry on each tangent
space, so the volume Jacobian has absolute value one. Normalize
that positive finite surface volume to total one. Compactness
and the manifold integration construction justify integration of
continuous matrix coefficients on the sphere.

**Theorem 8.5 (Complete reducibility for sl(2)).** Every finite-dimensional
complex sl(2) representation is a direct sum of the V-m.

*Proof.* Start with any positive Hermitian form h and define

$$B(v,w)=\\int_{SU(2)}h(\\rho(q)v,\\rho(q)w)\\,dq.$$

This is a Hermitian form by linearity of integration. It is
positive definite: for nonzero v, every invertible rho(q)
sends v to a nonzero vector, so the integrand on the diagonal
is positive and continuous on a compact space. Its integral
is strictly positive. Right-translation invariance of the surface
integral shows B is SU(2)-invariant.

If W is a Lie-algebra submodule, every exponential of a
represented su(2) operator preserves it. Connected generation
therefore makes W SU(2)-invariant. Its B-orthogonal complement
is also group-invariant, using invariance of B and inverse
group elements. Differentiating makes that complement su(2)-invariant;
its complex linearity and the complex span statement make it
sl(2)-invariant. Thus every submodule has an invariant complement.
Choose a minimal nonzero submodule and split, then induct on
dimension. The irreducible classification identifies every resulting
summand as some V-m. ∎

The averaging is a special compact-group argument, not an invocation
of the finite-group sum from Maschke's theorem. Its integration
and invariance have been stated and justified. Later Haar theory
will generalize this construction, but is not needed as an unproved
dependency here. In particular, H is diagonalizable in every
finite-dimensional sl(2) representation, and its weights are integers,
because both statements now hold on every irreducible summand.

<a id="section-165-characters-and-tensor-products"></a>
## Characters and tensor products {#section-167-characters-and-tensor-products}

For a diagonal torus element with entries z and z-inverse in
SU(2), the polynomial model gives the character

$$\\chi_m(z)=z^m+z^{m-2}+\\cdots+z^{-m}
=\\frac{z^{m+1}-z^{-m-1}}{z-z^{-1}}.$$

The sum is a Laurent polynomial. The quotient notation is valid
away from z equal to plus or minus one and extends there by
that polynomial. At one its value is m plus one; at minus
one it is minus one to the mth power times m plus one.
An apparent zero denominator is not a singularity of the character.

Distinct irreducible characters are linearly independent: in a finite
linear combination, the largest highest exponent appears in only
the corresponding largest V-m. Its coefficient must vanish,
and downward induction finishes the argument. Together with complete
reducibility, equality of characters therefore determines an isomorphism
class of finite-dimensional representations.

**Theorem 8.6 (Clebsch–Gordan).**

$$V_m\\otimes V_n\\cong
\\bigoplus_{r=0}^{\\min(m,n)}V_{m+n-2r}.$$

*Proof.* Tensor-product weights add, so their characters multiply.
Assume m is at least n. The coefficient at weight m+n minus
2k in the product counts pairs of integers i,j with i between
zero and m, j between zero and n and i+j equal to k.
It is one plus the minimum of k,n,m+n minus k whenever
that weight occurs. On the proposed direct-sum side, the
same weight appears in exactly those summands with r at
most n,k and m+n minus k, giving the same count. Thus
the characters agree. Complete reducibility and irreducible-character
independence turn that equality into the stated isomorphism. ∎

This proof establishes multiplicities rather than merely matching total
dimensions. Equal dimensions alone cannot distinguish direct sums with
different highest weights. The character calculation records each weight
with its multiplicity and therefore contains the stronger information needed.

<a id="section-207-the-quadratic-casimir-and-exact-projections"></a>
## The quadratic Casimir and exact projections {#section-209-the-quadratic-casimir-and-exact-projections}

Define the operator

$$\\Omega=H^2+2H+4FE=H^2-2H+4EF.$$

The two expressions agree by [E,F]=H. It commutes with H,
E and F. For example, the commutator with E expands into
−2(EH+HE)−4E+4HE;
using HE minus EH equal to 2E makes the sum zero. The
calculation with F is the corresponding reversed identity. Explicitly,

$$[E,\\Omega]=-2(EH+HE)-4E+4HE=0.$$
Thus Omega is central in every representation.

On a highest vector of V-m, FE vanishes, so Omega has value
m squared plus two m. Commutation with F gives the same
value on the whole chain. The scalars m(m+2) are distinct
for distinct nonnegative integers m. Casimir eigenspaces therefore
separate the different irreducible types in a completely reducible
module. They do not by themselves choose individual copies when
an irreducible occurs with multiplicity greater than one.

<a id="section-230-worked-example-1-the-quadratic-polynomial-model"></a>
## Worked example 1: the quadratic polynomial model {#section-232-worked-example-1-the-quadratic-polynomial-model}

For m equal to two, the polynomial basis is x squared, xy,
y squared. H has respective weights two, zero and minus
two. E sends y squared to 2xy and xy to x squared;
F sends x squared to 2xy and xy to y squared.
Starting at either end and applying the opposite operator
recovers the full chain with these coefficients. The factors
two are important: changing basis to the unnormalized F-chain
gives a different-looking matrix while representing the same module.

This V-two is isomorphic to the adjoint representation of sl(2).
The highest vector E in the algebra has weight two under ad-H.
Applying ad-F gives minus H and then minus 2F, a three-vector
chain. Comparing the prescribed ladder relations gives an
intertwining isomorphism, not merely a coincidence of dimensions.
The adjoint action is the rank-one prototype for the root
strings used in later chapters.

<a id="section-249-worked-example-2-decomposing-a-six-dimensional-tensor"></a>
## Worked example 2: decomposing a six-dimensional tensor {#section-251-worked-example-2-decomposing-a-six-dimensional-tensor}

The weights of V-two tensor V-one are three, one, one,
minus one, minus one and minus three. The highest-weight-three
summand contributes one of each of three, one, minus one,
minus three. The remaining weights are one and minus one,
so the decomposition is V-three plus V-one, of dimensions
four and two. The calculation both finds the constituents
and checks their multiplicities.

On this tensor module Omega has eigenvalues fifteen and three.
The operators (Omega minus 3I) divided by twelve and
(15I minus Omega) divided by twelve are complementary
idempotents onto those two constituents. Substitution of
each eigenvalue verifies the projections exactly. Their
sum is I and their product zero. This is a useful
algebraic way to select invariant pieces without guessing
an orthogonal basis or running a numerical eigensolver.

<a id="section-268-worked-example-3-which-modules-descend-to-so-3"></a>
## Worked example 3: which modules descend to SO(3)? {#section-270-worked-example-3-which-modules-descend-to-so-3}

The center element minus I of SU(2) acts on every degree-m
homogeneous polynomial by the scalar minus one to power m.
The covering homomorphism to SO(3) has kernel exactly I,
minus I. A representation descends through that quotient
exactly when this kernel acts trivially: otherwise the
two lifts of one rotation would produce different operators.
Consequently V-m descends exactly when m is even.

The two-dimensional defining representation V-one is therefore
a representation of SU(2) that does not define an ordinary
two-dimensional representation of SO(3) through this quotient.
The adjoint V-two does descend, agreeing with the cross-product
rotation model. A direct sum descends precisely when every
constituent has even highest weight. In physical spin notation
j is m divided by two; the integer or half-integer distinction
reflects this central-kernel condition, while our actual H-weights
remain integers with spacing two. Mixing the two normalizations
would obscure the mathematical descent test.

<a id="section-289-exercises-with-staged-help"></a>
## Exercises with staged help {#section-291-exercises-with-staged-help}

### Exercise 8.1: the ladder coefficient {#sl2-representations-ex-1}

Prove the formula for E acting on F squared v for a
highest vector of weight lambda, directly from the three relations.

<details>
<summary>Hint 1</summary>

Commute E past the first F using EF=FE+H.

</details>
<details>
<summary>Hint 2</summary>

The H acting on Fv has eigenvalue lambda minus two.

</details>
<details>
<summary>Solution</summary>

Expand EF squared v as FEFv plus HFv.
The first term is F(lambda v), while
the second is (lambda minus two)Fv.
Their sum is 2(lambda minus one)Fv,
the k equal to two case of the ladder
identity. Treating H as though it commuted
with F would instead miss the subtraction
of two and give a wrong coefficient.
The relations control both the weight shift
and the numerical raising factor.

</details>

### Exercise 8.2: terminal weight {#sl2-representations-ex-2}

Explain why a finite highest chain forces its highest
weight to be a nonnegative integer.

<details>
<summary>Hint 1</summary>

Let the mth F-image be the last nonzero one.

</details>
<details>
<summary>Hint 2</summary>

Apply E to the zero next image and use characteristic zero.

</details>
<details>
<summary>Solution</summary>

The next F-image is zero, so applying
E yields (m+1)(lambda-m)F-to-the-m v
equal to zero. The last vector is
nonzero, and the positive integer m+1
is nonzero in the complex field.
Thus lambda equals m. The integer
arises from termination of a chain,
not from an initial assumption that
weights are integral. Finite dimension
and the characteristic-zero coefficient
are both essential to this deduction.

</details>

### Exercise 8.3: polynomial actions {#sl2-representations-ex-3}

Verify [E,F]=H on a degree-m monomial in the
homogeneous polynomial model.

<details>
<summary>Hint 1</summary>

Use the monomial x-to-the-m-minus-k times y-to-the-k.

</details>
<details>
<summary>Hint 2</summary>

The two composite coefficients differ by m minus 2k.

</details>
<details>
<summary>Solution</summary>

F first contributes m-k and raises
the y exponent to k+1; E then
contributes k+1. The reversed order
contributes k(m-k+1). Subtracting
gives m-2k, which is exactly H's
eigenvalue on that monomial. Linearity
extends the identity to every polynomial
of the given degree. This checks
the actual bracket relation, including
boundary monomials where one derivative
is zero, rather than relying only
on the picture of a weight chain.

</details>

### Exercise 8.4: irreducibility by projections {#sl2-representations-ex-4}

Why does H-invariance let a nonzero submodule of V-m
contain a weight monomial, even when its first chosen vector
is a sum of several monomials?

<details>
<summary>Hint 1</summary>

The H-eigenvalues on the monomial basis are all distinct.

</details>
<details>
<summary>Hint 2</summary>

Construct a polynomial in H that is one at one chosen
weight and zero at all others.

</details>
<details>
<summary>Solution</summary>

For any nonzero coefficient of the chosen
vector, Lagrange interpolation supplies
a polynomial selecting exactly its H-weight.
An H-invariant subspace is preserved by
every polynomial in H, so applying
that projector leaves a nonzero multiple
of the corresponding monomial inside
the submodule. Raising reaches the
highest vector with nonzero coefficients,
and lowering generates every monomial.
This proves irreducibility without
assuming an arbitrary starting vector
was already a weight vector.

</details>

### Exercise 8.5: invariant complements {#sl2-representations-ex-5}

Explain why an SU(2)-invariant Hermitian orthogonal
complement is also a complex sl(2)-submodule.

<details>
<summary>Hint 1</summary>

Differentiate invariance under every one-parameter subgroup
of SU(2).

</details>
<details>
<summary>Hint 2</summary>

The compact real algebra's complex span is all of sl(2,C).

</details>
<details>
<summary>Solution</summary>

Group invariance makes the complement
stable under each integrated exponential.
Differentiating at zero makes it stable
under every su(2) operator. It is
a complex linear subspace, so stability
extends to complex linear combinations
of those operators. The displayed
compact-real-form basis spans sl(2,C)
over the complex numbers, giving the
claim. This step would fail for a
complement chosen only as a real
subspace with no compatible complex
linearity, so the Hermitian construction
has an important coefficient-field role.

</details>

### Exercise 8.6: three small characters {#sl2-representations-ex-6}

Write the characters of V-zero, V-one and V-two,
and evaluate them at z equal to minus one.

<details>
<summary>Hint 1</summary>

List their weights rather than substituting into a zero
denominator quotient.

</details>
<details>
<summary>Hint 2</summary>

Every weight in V-m has the same parity as m.

</details>
<details>
<summary>Solution</summary>

The characters are one; z plus z-inverse;
and z squared plus one plus z-inverse
squared. At minus one their values
are one, minus two and three.
More generally every summand contributes
the scalar (-1)-to-the-m, so the
value is that sign times m+1.
The Laurent polynomial is defined
there even though the quotient
notation has numerator and denominator
both zero. Apparent division singularities
must be removed before interpreting
the actual character.

</details>

### Exercise 8.7: a tensor square {#sl2-representations-ex-7}

Decompose V-two tensor V-two and check its dimension
and zero-weight multiplicity.

<details>
<summary>Hint 1</summary>

The permitted highest weights are four, two and zero.

</details>
<details>
<summary>Hint 2</summary>

Each even highest-weight summand has one zero weight.

</details>
<details>
<summary>Solution</summary>

Clebsch–Gordan gives V-four plus V-two
plus V-zero. The dimensions five,
three and one sum to nine, matching
the tensor dimension. Each summand
contains zero weight once, so its
multiplicity is three. Directly in
the tensor product, zero weight
comes from weight pairs two with
minus two, zero with zero, and
minus two with two, also three.
The weight check carries more
information than the total dimension
check alone.

</details>

### Exercise 8.8: Casimir commutation {#sl2-representations-ex-8}

Verify that Omega commutes with E using the relations,
and determine its scalar on V-three.

<details>
<summary>Hint 1</summary>

Use [E,H]=-2E and [E,FE]=HE.

</details>
<details>
<summary>Hint 2</summary>

Move HE to EH plus 2E when simplifying.

</details>
<details>
<summary>Solution</summary>

The commutator expands as $-2(EH+HE)$
minus $4E$, plus $4HE$.
Its sum is $2(HE-EH)$
minus $4E$,
which is zero. On the highest
vector of V-three, the FE term
vanishes and H squared plus 2H
has value nine plus six, fifteen.
Commutation with the generators
makes that value hold on the
whole irreducible. The computation
uses exact operator identities,
not a numerical diagonalization.

</details>

### Exercise 8.9: isotypic projections {#sl2-representations-ex-9}

On V-three direct sum V-one, verify the two Casimir
projection formulas in Worked example2.

<details>
<summary>Hint 1</summary>

Substitute the two scalar eigenvalues fifteen and three.

</details>
<details>
<summary>Hint 2</summary>

Each polynomial is one on its intended summand and
zero on the other.

</details>
<details>
<summary>Solution</summary>

On V-three, (Omega-3I)/12 is
the identity and (15I-Omega)/12
is zero. On V-one the roles
reverse. Therefore each is
idempotent, their product is
zero, and their sum is I.
They commute with the algebra
because Omega does. If several
copies of V-three were present,
the first projector would select
their whole isotypic sum, not
a preferred single copy. A central
operator cannot distinguish equivalent
copies by its scalar eigenvalue.

</details>

### Exercise 8.10: descent through the cover {#sl2-representations-ex-10}

Determine whether V-one direct sum V-two descends
to SO(3), and compare it with V-two direct sum V-four.

<details>
<summary>Hint 1</summary>

The entire covering kernel must act identically on
every summand.

</details>
<details>
<summary>Hint 2</summary>

Minus I acts by parity of the highest weight.

</details>
<details>
<summary>Solution</summary>

On V-one, minus I acts as minus
the identity, while on V-two it
acts as the identity. Their direct
sum therefore does not kill the
covering kernel and cannot descend.
Both V-two and V-four have even
highest weights, so minus I acts
trivially on their direct sum,
which does descend. A trivial
kernel action is required on the
whole vector space; cancellation
between character traces would
not suffice to define a quotient
group representation.

</details>

### Exercise 8.11: the adjoint chain {#sl2-representations-ex-11}

Starting with E in the adjoint representation, compute
its two successive F-lowerings and verify the V-two chain.

<details>
<summary>Hint 1</summary>

The action is the bracket, not ordinary matrix multiplication.

</details>
<details>
<summary>Hint 2</summary>

Use [F,E]=-H and [F,H]=2F.

</details>
<details>
<summary>Solution</summary>

The first lowering is minus H
and the second is minus 2F;
the next is zero. Their weights
under ad-H are two, zero and
minus two. Raising the middle
vector gives 2E, while raising
the last gives minus 2H, which
is twice the middle vector.
These are precisely the ladder
coefficients for m equal to two
in the unnormalized F-chain.
They exhibit an intertwining
identification with V-two rather
than just a dimension match.

</details>

### Exercise 8.12: multiplicity from a character {#sl2-representations-ex-12}

A completely reducible module has character
z-to-the-four plus twice z squared plus three plus
twice z-inverse squared plus z-inverse fourth.
Find its irreducible decomposition.

<details>
<summary>Hint 1</summary>

Remove the largest highest-weight character first.

</details>
<details>
<summary>Hint 2</summary>

After removing V-four, one V-two and one trivial
character remain.

</details>
<details>
<summary>Solution</summary>

The coefficient of z-to-the-four
forces one V-four. Subtracting
its weights leaves z squared
plus two plus z-inverse squared.
That contains one V-two, leaving
one constant character V-zero.
Thus the module is V-four
plus V-two plus V-zero.
Its dimension is nine, equal
to evaluating the original
character at one. Successive
highest-weight subtraction finds
the multiplicities uniquely because
different irreducible highest terms
cannot cancel at the largest exponent.

</details>

<a id="section-732-summary-and-next-connection"></a>
## Summary and next connection {#section-734-summary-and-next-connection}

Finite highest chains classify the irreducibles V-m and force
nonnegative integral highest weights. The compact SU(2) integration
and sphere average provide invariant Hermitian complements, proving
complete reducibility without borrowing a later Haar theorem.
Characters determine tensor decompositions, the Casimir separates
irreducible types, and the central sign decides descent to SO(3).
The next chapter turns these rank-one weight strings into the
finite reflection geometry of root systems.

<a id="section-753-sources"></a>
## Sources {#section-755-sources}

Hall and Humphreys provide further reading on representations. The linked manifold integration theorem is the named analytic input to the special SU(2) average.
`;export{e as default};