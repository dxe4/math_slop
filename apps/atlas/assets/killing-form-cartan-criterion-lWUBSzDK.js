var e=`---
parent_id: book-lie-groups-lie-algebras
chapter_id: killing-form-cartan-criterion
title: "The Killing Form and Cartan’s Criterion"
level: graduate
license: CC BY-SA 4.0
---

# The Killing Form and Cartan’s Criterion {#section-1-the-killing-form-and-cartan-s-criterion}

A Lie algebra acts on itself by commutators. Taking traces of pairs of
these adjoint operators gives an intrinsic symmetric bilinear form, the
Killing form. Its degeneracy detects solvable ideals, but it is not an
inner product in general. Over the complex numbers even a nonzero vector
can have zero self-pairing in a nondegenerate form. This chapter proves
Cartan's solvability and semisimplicity criteria, rather than inferring
structure from an eigenvalue picture or a few numerical trace values.

Read [Engel and Lie](solvable-nilpotent-engel-lie.md) and the actual
[Jordan-chain chapter](/resources/library%3Abook-linear-algebra-structure-proofs%3Ajordan-chains-nilpotent-structure/).
We use the primary decomposition of a complex operator into generalized
eigenspaces and elementary polynomial interpolation. The special interpolation
needed in the proof is explained below. All algebras and representation
spaces are finite-dimensional over the real or complex numbers. Statements
about solvability in arbitrary positive characteristic are not included.

<a id="section-17-trace-forms-and-invariance"></a>
## Trace forms and invariance {#section-19-trace-forms-and-invariance}

For a representation rho of g on V, the expression trace of rho(X)rho(Y)
is bilinear and symmetric, because trace of a product is unchanged by
cycling its two factors. It is invariant in the following precise sense:

$$B([Z,X],Y)+B(X,[Z,Y])=0.$$

Indeed represent the brackets by operator commutators, expand both terms,
and cycle the first factor of a trace to the end. The two middle
terms cancel directly and the two outer terms have equal traces.
Equivalently, invariance can be written B([X,Y],Z) equal to B(X,[Y,Z]).
These are algebraic identities, not a positive-definiteness claim.

**Definition 7.1 (Killing form).** The Killing form of g is

$$K_{\\mathfrak g}(X,Y)=
\\operatorname{tr}_{\\mathfrak g}(\\operatorname{ad}_X\\operatorname{ad}_Y).$$

Its radical consists of all X pairing to zero with every Y. By
invariance this radical is an ideal: pairing [Z,X] with Y equals
minus the pairing of X with [Z,Y], which is zero for a radical
vector. A form is nondegenerate when its radical is zero.

The trace is taken on the algebra itself, not on an arbitrary defining
representation. For a concrete matrix algebra, computing trace of XY
can give a useful comparison form, but it is not automatically the
Killing form. The normalization factor must be proved for that algebra.

<a id="section-46-the-trace-criterion-behind-cartan-s-theorem"></a>
## The trace criterion behind Cartan's theorem {#section-48-the-trace-criterion-behind-cartan-s-theorem}

**Theorem 7.2 (Cartan trace criterion).** Let L be a Lie subalgebra
of End(V) over the complex numbers. Then L is solvable if and only if

$$\\operatorname{tr}(XY)=0
\\quad\\text{for every }X\\in[L,L],\\ Y\\in L.$$

Necessity is immediate from Lie's theorem: triangularize L, so its
derived operators are strictly upper triangular. Their products with
upper-triangular operators remain strictly upper triangular and have
trace zero. Sufficiency requires more care. Merely knowing trace of
X squared is zero would not make X nilpotent over the complex field;
the two eigenvalues one and i already give a counterexample.

We supply the needed spectral argument before completing the proof.
Fix X in the derived algebra and decompose V into its generalized
eigenspaces V-lambda. On such a block X equals lambda times I plus
a nilpotent operator. Define X-sharp to act by conjugate lambda times
I on that whole block. It is a linear operator on V, but it need
not belong to L. The proof will not assume that it does.

**Lemma 7.3 (Polynomial commutator interpolation).** For this X-sharp,
there is a complex polynomial P with P(0)=0 such that

$$\\operatorname{ad}_{X^{\\sharp}}=P(\\operatorname{ad}_X)
\\quad\\text{on }\\operatorname{End}(V).$$

*Proof.* Decompose End(V) into maps from one generalized eigenspace
of X to another. On maps from V-lambda to V-mu, ad-X is the
scalar mu minus lambda plus a nilpotent operator: the nilpotent
part is left multiplication by the target nilpotent part minus
right multiplication by the source nilpotent part. These two
multiplication operators commute, so a sufficiently high power
of their difference is zero, by the same binomial argument as
in Engel's lemma. On this block ad-X-sharp is simply conjugate
of mu minus lambda times the identity.

There are finitely many distinct differences nu. Choose one
integer M larger than all the nilpotence indices just encountered.
Prescribe P to be constant with value conjugate nu modulo
the polynomial factor (t minus nu) to power M, for each
different nu. These simultaneous conditions have a solution:
the factors for distinct nu are relatively prime, the Euclidean
algorithm supplies Bezout identities, and induction combines
two congruences at a time. This is the elementary polynomial
Chinese remainder argument, not an analytic interpolation assumption.
Zero is among the differences, and its prescribed constant is
zero, so P(0)=0. Substituting scalar nu plus its nilpotent
part kills all nonconstant terms in that local congruence.
The resulting operator on every block is the required conjugate
scalar, proving the identity. ∎

Since P has zero constant term and X belongs to L, the operator
P(ad-X) sends L into [L,L]. Indeed every positive commutator
power has its first image there and subsequent powers stay there,
because the derived subalgebra is an ideal. Thus

$$[X^{\\sharp},L]\\subseteq[L,L].$$

*Completion of Theorem7.2.* Write X as a finite sum of commutators
[A-j,B-j] with A-j,B-j in L, absorbing coefficients into one
factor if necessary. Cyclicity gives

$$\\operatorname{tr}(X^{\\sharp}X)
=\\sum_j\\operatorname{tr}([X^{\\sharp},A_j]B_j)=0,$$

because every first factor on the right is in the derived algebra
and the trace hypothesis applies. On the generalized eigenspace
of eigenvalue lambda, the left-side contribution is its dimension
times modulus of lambda squared; the nilpotent part has trace
zero. A sum of nonnegative real numbers is zero only when each
is zero, so every eigenvalue lambda is zero. Therefore X is
nilpotent.

Every operator in [L,L] is consequently nilpotent. Engel's theorem
simultaneously makes this derived operator algebra strictly upper
triangular, and hence nilpotent as a Lie algebra. It is therefore
solvable. The quotient of L by its derived algebra is abelian,
so the solvable-extension result proves that L itself is solvable. ∎

This proof explains both the strength and subtlety of the hypothesis.
The conjugated spectral weights manufacture a positive sum, but the
auxiliary operator is not presumed to lie in L. Polynomial control of
its commutator action is what legitimately brings the trace hypothesis
back into play. Omitting that step would leave a gap in the argument.

The same trace criterion holds over the real numbers. Complexify the
representation: the trace hypothesis extends complex-bilinearly, and the
complex criterion makes the complexified algebra solvable. Derived series
commute with complexification, so the real algebra is solvable too.
Necessity follows by the same complexification and triangularization.

<a id="section-139-cartan-s-intrinsic-solvability-criterion"></a>
## Cartan's intrinsic solvability criterion {#section-141-cartan-s-intrinsic-solvability-criterion}

**Theorem 7.4 (Solvability criterion).** A finite-dimensional real or
complex Lie algebra g is solvable exactly when

$$K_{\\mathfrak g}([\\mathfrak g,\\mathfrak g],\\mathfrak g)=0.$$

*Proof.* Apply Theorem7.2 to the adjoint image L equal to ad(g)
inside End(g). Its derived algebra is ad([g,g]), so the displayed
condition is precisely the trace criterion for L. Thus it is
equivalent to solvability of ad(g). If g is solvable, every image
is solvable. Conversely, if ad(g) is solvable, some derived term
of g lies in the kernel of ad, namely the center. Its next
derived term is zero because the center is abelian. Hence g
is solvable. This last kernel argument avoids incorrectly assuming
the adjoint representation is always faithful. ∎

The criterion does not say the Killing form of a solvable algebra
is identically zero. It says its pairing with the derived subalgebra
vanishes. The distinction is visible in the affine example below.

<a id="section-160-semisimplicity-and-nondegeneracy"></a>
## Semisimplicity and nondegeneracy {#section-162-semisimplicity-and-nondegeneracy}

**Definition 7.5 (Radical and semisimplicity).** The solvable radical
of g is its largest solvable ideal. The algebra is semisimple when
this radical is zero, equivalently when it has no nonzero solvable
ideal. A simple Lie algebra is nonabelian and has no ideals other
than zero and itself.

The largest solvable ideal exists. The sum of two solvable ideals
is solvable: its quotient by the first is a quotient of the second,
so use the extension result. In finite dimension, the sum of all
solvable ideals equals a finite such sum, since a basis for that sum
uses only finitely many contributing vectors. This proves both existence
and the equivalent formulation without choosing a preferred ideal.

**Lemma 7.6 (Trace restriction to an ideal).** If a is an ideal and
X,Y belong to a, then

$$K_{\\mathfrak g}(X,Y)=K_{\\mathfrak a}(X,Y).$$

*Proof.* In a basis adapted to a, both adjoint operators preserve
a and induce zero on g modulo a, because their acting elements
belong to a. The trace of their product is therefore the trace
of its restriction to a. That restriction is exactly the product
of the two adjoint operators of a. ∎

**Theorem 7.7 (Cartan semisimplicity criterion).** Over the real or
complex numbers, g is semisimple exactly when its Killing form is
nondegenerate.

*Proof.* Let r be the radical of the Killing form, already proved
to be an ideal. For X,Y in r, Lemma7.6 identifies their Killing
pairing on r with their zero pairing on g. The Killing form
of r is identically zero, so the solvability criterion makes r
solvable. If g is semisimple it follows that r is zero.

Conversely suppose g has a nonzero solvable ideal s. Its last
nonzero derived term a is an abelian ideal of g: the derived
terms of an ideal are again ideals by Jacobi. For X in a and
Y in g, the operator ad-X ad-Y maps all of g into a.
Its restriction to a is zero, since ad-Y preserves a and
ad-X kills a by abelianness. In a basis beginning with a,
this operator has every diagonal entry zero. Thus K(X,Y)=0
for every Y. The nonzero ideal a lies in the Killing radical,
so the Killing form is degenerate. This proves the contrapositive. ∎

Nondegenerate does not mean positive. The theorem is about a bilinear
pairing detecting every nonzero vector through some second vector.
Its real signature, complex isotropic directions and behavior under
complexification are separate information.

**Theorem 7.8 (Decomposition into simple ideals).** Every semisimple
real or complex Lie algebra is a direct sum of simple ideals.

*Proof.* If g is nonzero choose a minimal nonzero ideal a. Its
Killing-orthogonal complement is an ideal by invariance. The intersection
is therefore either zero or a by minimality. If it were a,
the Killing form restricted to a would be zero. Lemma7.6 and
Cartan's criterion would make a solvable, contradicting semisimplicity.
The intersection is consequently zero. Nondegeneracy gives complementary
dimensions, so g is the vector-space direct sum of a and its
orthogonal complement. Their cross bracket lies in both ideals
and therefore vanishes.

Any ideal of a is now an ideal of g, since the complementary
ideal commutes with it. Minimality makes a simple, and it is
nonabelian because a nonzero abelian ideal would be solvable.
The complementary ideal is semisimple: one of its solvable
ideals would, by the same vanishing cross brackets, be a
solvable ideal of g. Induction on dimension completes the
decomposition. The zero algebra is the empty direct sum. ∎

<a id="section-232-worked-example-1-the-killing-form-of-sl-2"></a>
## Worked example 1: the Killing form of sl(2) {#section-234-worked-example-1-the-killing-form-of-sl-2}

Use the ordered basis H,E,F with brackets from Chapter4. Ad-H
has eigenvalues zero, two and minus two, so K(H,H)=8.
The composite ad-E ad-F sends E to 2E, H to 2H and F
to zero, giving K(E,F)=4. Directly composing the remaining
adjoint basis maps gives K(H,E)=K(H,F)=K(E,E)=K(F,F)=0.
Thus the Gram matrix is

$$\\begin{pmatrix}8&0&0\\\\0&0&4\\\\0&4&0\\end{pmatrix}.$$

Its determinant is nonzero, proving semisimplicity by the criterion.
Nevertheless the nonzero vector E has zero self-pairing. It pairs
nontrivially with F, so it is not in the radical. Confusing those
two statements would misdiagnose a semisimple algebra as degenerate.
Over the real split form, the displayed form is indefinite; over
the complex field, inequalities such as positive definite are not
the relevant bilinear notion.

<a id="section-251-worked-example-2-an-affine-radical"></a>
## Worked example 2: an affine radical {#section-253-worked-example-2-an-affine-radical}

For the basis A,B with [A,B]=B, ad-A has diagonal entries
zero and one, while ad-B sends A to minus B and kills B.
The Killing Gram matrix in this basis is diagonal one, zero.
Its radical is the B-line. The derived algebra is also that
line, and its pairing with everything vanishes, exactly as
Cartan's solvability criterion requires.

The solvable radical of the algebra, however, is the entire
two-dimensional algebra. Thus the radical of the Killing form
and the largest solvable ideal are different objects in general.
Their agreement in a special example must not become an
unstated theorem. The Killing radical is always a solvable
ideal by the proof above, but can be properly smaller than
the solvable radical.

<a id="section-268-worked-example-3-normalization-for-sl-n"></a>
## Worked example 3: normalization for sl(n) {#section-270-worked-example-3-normalization-for-sl-n}

On the full matrix space, let L-X and R-X mean left and
right multiplication by X. The adjoint operator is their
difference. Using elementary matrix units as a basis shows
that the trace of L-X L-Y is n times trace XY, the trace
of R-X R-Y is n times trace YX, and the trace of L-X R-Y
is trace X times trace Y. Expand the adjoint product to get

$$K_{\\mathfrak{gl}_n}(X,Y)
=2n\\operatorname{tr}(XY)-2\\operatorname{tr}X\\operatorname{tr}Y.$$

In characteristic zero, gl(n) is the direct sum of scalar
matrices and sl(n), and adjoint operators kill the scalar
summand. On trace-zero X,Y the same trace therefore computes
the Killing form of sl(n), giving K equal to 2n times trace XY.

This form is nondegenerate on sl(n). Pairing X with off-diagonal
elementary matrices forces every off-diagonal entry of a radical
candidate to vanish. Pairing with differences of diagonal units
forces all its diagonal entries equal. Its own trace-zero
condition then forces that common value zero. Hence sl(n) is
semisimple for n at least two. This proves the normalization
and structural conclusion rather than assuming that any convenient
matrix trace must already be the intrinsic Killing form.

<a id="section-294-exercises-with-staged-help"></a>
## Exercises with staged help {#section-296-exercises-with-staged-help}

### Exercise 7.1: invariance {#killing-form-cartan-criterion-ex-1}

Expand the trace expressions proving invariance for a representation
trace form. Deduce that its radical is an ideal.

<details>
<summary>Hint 1</summary>

Replace represented brackets by commutators and cycle factors in traces.

</details>
<details>
<summary>Hint 2</summary>

Pair [Z,X] with arbitrary Y when X is in the radical.

</details>
<details>
<summary>Solution</summary>

The expanded invariance sum leaves trace of rho(Z)rho(X)rho(Y)
minus trace of rho(X)rho(Y)rho(Z), which is zero by
cyclicity. If X pairs to zero with every vector, invariance
expresses the pairing of [Z,X] with Y as minus the
pairing of X with [Z,Y], also zero. Hence [Z,X]
is again in the radical for every Z, proving the ideal
condition. Neither step uses positive definiteness or
a choice of orthonormal basis.

</details>

### Exercise 7.2: isotropic is not radical {#killing-form-cartan-criterion-ex-2}

Using the sl(2) Gram matrix, exhibit a nonzero isotropic vector
and prove it is not a radical vector.

<details>
<summary>Hint 1</summary>

The self-pairing of E is zero.

</details>
<details>
<summary>Hint 2</summary>

Its pairing with F was computed separately.

</details>
<details>
<summary>Solution</summary>

Take E. Its self-pairing is zero, so it is isotropic.
But its pairing with F is four, so it does not pair
to zero with all vectors and is not radical. In fact
the nonzero determinant of the Gram matrix makes the
entire radical zero. The example illustrates the
quantifier difference: isotropy concerns one pairing,
while radical membership concerns every second argument.
Over complex or indefinite real bilinear forms these
notions must be kept separate.

</details>

### Exercise 7.3: why conjugated eigenvalues appear {#killing-form-cartan-criterion-ex-3}

Explain why trace X squared equal to zero does not imply nilpotence
over the complex numbers, and identify what replaces that invalid
argument in Theorem7.2.

<details>
<summary>Hint 1</summary>

Use eigenvalues one and i.

</details>
<details>
<summary>Hint 2</summary>

The auxiliary operator supplies complex-conjugate eigenvalue weights.

</details>
<details>
<summary>Solution</summary>

The diagonal matrix with entries one and i has trace
of its square equal to one plus minus one, zero,
but is invertible and not nilpotent. Cartan's proof
instead obtains trace X-sharp X equal to the sum
of eigenvalue modulus squares with positive integer
multiplicities. That sum has no cancellation. The
polynomial commutator lemma justifies using X-sharp
even though it need not lie in the given algebra.
Both the positivity replacement and its algebraic
justification are necessary.

</details>

### Exercise 7.4: trace restriction {#killing-form-cartan-criterion-ex-4}

Prove Lemma7.6 in block-matrix form. Explain why both acting
elements must belong to the ideal.

<details>
<summary>Hint 1</summary>

Choose a basis starting with the ideal and inspect the quotient block.

</details>
<details>
<summary>Hint 2</summary>

An element of the ideal acts trivially on the quotient by that ideal.

</details>
<details>
<summary>Solution</summary>

An adjoint operator of an ideal element preserves
the ideal and has zero induced operator on the
quotient, so its block diagonal is its restricted
adjoint block followed by zero. The product of two
such operators has trace equal to the trace of the
two restricted blocks' product, which is the Killing
pairing inside the ideal. If acting elements are
outside the ideal, their quotient blocks can be
nonzero and contribute extra trace. The stated
restriction therefore has genuine hypotheses.

</details>

### Exercise 7.5: affine distinctions {#killing-form-cartan-criterion-ex-5}

Compute the Killing radical and solvable radical of the affine
algebra, and state why they need not agree.

<details>
<summary>Hint 1</summary>

Use the diagonal Killing Gram matrix one, zero.

</details>
<details>
<summary>Hint 2</summary>

The entire affine algebra was already proved solvable.

</details>
<details>
<summary>Solution</summary>

The Gram matrix makes the Killing radical exactly
the B-line. The entire algebra is solvable, so
its largest solvable ideal is the whole algebra.
These subspaces differ in dimension. The Killing
radical is a solvable ideal, but that property
does not make it the largest one. Cartan's
semisimplicity criterion compares their vanishing,
not their equality in every algebra. The example
also shows a solvable algebra can have a
nonzero Killing form.

</details>

### Exercise 7.6: the center obstruction {#killing-form-cartan-criterion-ex-6}

Prove that a semisimple algebra has zero center. Is zero center
alone sufficient for semisimplicity?

<details>
<summary>Hint 1</summary>

Central vectors have zero adjoint operators.

</details>
<details>
<summary>Hint 2</summary>

The affine algebra has zero center but a nonzero solvable ideal.

</details>
<details>
<summary>Solution</summary>

A central vector pairs to zero under the Killing
form with every other vector, so lies in its
radical. Nondegeneracy for a semisimple algebra
forces that vector zero. Conversely the affine
algebra has zero center by the earlier bracket
calculation, but it is nonzero and solvable,
so is not semisimple. Faithfulness of the
adjoint representation therefore does not alone
give semisimplicity. The criterion needs the
entire Killing pairing, not merely its
obvious central kernel.

</details>

### Exercise 7.7: orthogonal ideal complements {#killing-form-cartan-criterion-ex-7}

For an invariant nondegenerate form, show the orthogonal complement
of an ideal is an ideal. If the two ideals intersect trivially,
show their cross brackets vanish.

<details>
<summary>Hint 1</summary>

Move an outside bracket to the other argument using invariance.

</details>
<details>
<summary>Hint 2</summary>

A cross bracket lies in each ideal separately.

</details>
<details>
<summary>Solution</summary>

If X is orthogonal to the ideal a, then the
pairing of [Z,X] with A in a is minus the
pairing of X with [Z,A], which is zero
because [Z,A] remains in a. Thus the
orthogonal complement is an ideal. A
bracket between its element and an element
of a lies in a by one ideal property
and in the complement by the other.
If their intersection is zero, that
bracket is zero. Orthogonality alone
does not supply the intersection hypothesis.

</details>

### Exercise 7.8: sl(n) trace pairing {#killing-form-cartan-criterion-ex-8}

Verify nondegeneracy of trace XY on trace-zero matrices by
testing elementary matrices, including the diagonal entries.

<details>
<summary>Hint 1</summary>

Pair with E-ji when i differs from j.

</details>
<details>
<summary>Hint 2</summary>

Then pair with E-ii minus E-jj and use trace X zero.

</details>
<details>
<summary>Solution</summary>

The off-diagonal tests show every off-diagonal
entry of a radical candidate X is zero.
The diagonal-difference tests show all its
diagonal entries are equal. Their sum is
zero, so characteristic zero forces their
common value zero. Thus X is zero and
the form is nondegenerate. Multiplication
by the nonzero scalar 2n preserves this
property, giving the same conclusion
for the Killing form of sl(n). The
coefficient field and characteristic matter
when cancelling n.

</details>

### Exercise 7.9: compact rotation form {#killing-form-cartan-criterion-ex-9}

Using the cross-product model of so(3), compute its Killing
form on hat-u and hat-v.

<details>
<summary>Hint 1</summary>

The adjoint action corresponds to cross product by u.

</details>
<details>
<summary>Hint 2</summary>

The vector triple product gives hat-u hat-v equal to
v u-transpose minus their dot product times I.

</details>
<details>
<summary>Solution</summary>

The vector model identifies ad of hat-u
with the matrix hat-u itself on a
three-dimensional space. Its product
with hat-v has trace equal to dot
product u with v minus three times
that dot product, hence minus twice
the dot product. Thus the real
Killing form is negative definite
on so(3). This is consistent with
nondegeneracy, and differs from
the indefinite real split form
of sl(2). Real forms can have
different signatures despite related
complexified structure.

</details>

### Exercise 7.10: solvable radical existence {#killing-form-cartan-criterion-ex-10}

Prove the sum of two solvable ideals is solvable using
a quotient and an extension.

<details>
<summary>Hint 1</summary>

The quotient of a plus b by a is the image of b.

</details>
<details>
<summary>Hint 2</summary>

Apply solvability preservation under quotients and the
solvable-extension proposition.

</details>
<details>
<summary>Solution</summary>

The natural map from b onto (a+b)/a
has kernel a intersect b, so the
quotient is solvable because b is.
Inside a+b the ideal a is solvable
as well. A derived term eventually
lies in a, and enough subsequent
derived terms vanish there. Hence
a+b is solvable. Repeating proves
finite sums solvable; finite dimension
then turns the sum of all solvable
ideals into a finite sum, establishing
the radical used in the definition.

</details>

### Exercise 7.11: Killing form of gl(n) {#killing-form-cartan-criterion-ex-11}

For n at least two, determine the radical of the displayed
Killing form of gl(n). Explain its relation to the scalar center.

<details>
<summary>Hint 1</summary>

Split X into its scalar trace part and a trace-zero part.

</details>
<details>
<summary>Hint 2</summary>

The trace-zero part has the nondegenerate sl(n) pairing;
the scalar part acts trivially by commutators.

</details>
<details>
<summary>Solution</summary>

Every scalar matrix is in the radical,
since its adjoint action is zero.
Write a general X as a scalar
multiple of I plus X-zero with
trace zero. If X is radical,
pairing with every trace-zero Y
gives 2n times trace X-zero Y
equal to zero. Nondegeneracy on
sl(n) makes X-zero zero. Thus
the radical consists exactly of
the scalar matrices, equal here
to the center. The equality is
specific to this algebra and does
not generalize to all Killing radicals.

</details>

### Exercise 7.12: zero Killing form without nilpotence {#killing-form-cartan-criterion-ex-12}

Over the complex numbers let [A,B]=B, [A,C]=iC and
[B,C]=0. Show that the Killing form vanishes identically
but the algebra is not nilpotent.

<details>
<summary>Hint 1</summary>

The abelian span of B,C is an ideal, and A acts
there by diagonal entries one and i.

</details>
<details>
<summary>Hint 2</summary>

The square trace of ad-A is one plus i squared;
the other products have zero diagonal.

</details>
<details>
<summary>Solution</summary>

These brackets define the semidirect
product of a line with an abelian
plane under the stated diagonal
action, so Jacobi holds. Ad-A
has diagonal zero, one, i,
whose square trace is zero.
Ad-B and ad-C send A into
the abelian plane and kill
that plane, so all remaining
Killing pairings are zero.
However ad-A has nonzero
eigenvalues and is not nilpotent.
Engel rules out nilpotence
of the algebra. Cartan only
concludes solvability from
zero Killing form, exactly
as the derived-series calculation
also confirms.

</details>

<a id="section-719-summary-and-next-connection"></a>
## Summary and next connection {#section-721-summary-and-next-connection}

The Killing form is an invariant symmetric trace pairing, not a
default inner product. Cartan's trace criterion uses polynomial
commutator interpolation to force nilpotence in the derived operator
algebra. It yields the intrinsic solvability criterion and identifies
semisimplicity with nondegeneracy. Orthogonal ideal splitting then
decomposes a semisimple algebra into simple ideals. Concrete sl(n),
affine and compact-rotation calculations distinguish normalization,
radicals, isotropy and signature. The next chapter develops sl(2)
representations, the rank-one mechanism that will control root strings
and highest weights.

## Sources

Jordan primary decomposition is the named linear-algebra input; the Cartan trace, solvability and semisimplicity proofs are supplied in this chapter. Humphreys and the institution-hosted [Kirillov notes](https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf) provide further reading.
`;export{e as default};