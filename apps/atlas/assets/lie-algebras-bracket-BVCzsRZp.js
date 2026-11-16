var e=`---
parent_id: book-lie-groups-lie-algebras
chapter_id: lie-algebras-bracket
title: "Lie Algebras and the Lie Bracket"
level: graduate
license: CC BY-SA 4.0
---

# Lie Algebras and the Lie Bracket {#section-1-lie-algebras-and-the-lie-bracket}

Addition describes simultaneous infinitesimal directions, but it cannot record
the order in which two small motions are performed. The first order at which
that order matters is bilinear in their two small times. Its coefficient is
the matrix commutator. This chapter proves that the tangent space of a matrix
group is closed under that operation, identifies the corresponding bracket
of left-invariant vector fields, and separates the group-level and
algebra-level objects that will be compared in Chapter5.

Prepare with [exponentials and one-parameter subgroups](exponential-one-parameter-subgroups.md)
and [the vector-field bracket](/resources/library%3Abook-smooth-manifolds%3Alie-bracket-frobenius/).
Our vector-field convention is the commutator of derivations: the bracket
applied to a smooth function is X applied to Y of that function, minus
Y applied to X of that function. The matrix bracket will have the
corresponding sign. Initially all Lie algebras are finite-dimensional over
the real numbers; complex ones are explicitly identified.

<a id="section-17-the-abstract-bracket-axioms"></a>
## The abstract bracket axioms {#section-19-the-abstract-bracket-axioms}

**Definition 4.1 (Lie algebra).** A Lie algebra over a field K is a
K-vector space equipped with a bilinear operation satisfying alternation
and the Jacobi identity:

$$[X,X]=0,\\qquad
[X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]]=0.$$

Over the real or complex numbers, alternation is equivalent to antisymmetry.
Indeed apply alternation to X plus Y and subtract the two diagonal terms.
In characteristic two one should keep the alternating axiom explicitly;
this book does not silently transport characteristic-zero arguments there.

**Proposition 4.2 (Associative commutators).** Any associative algebra
becomes a Lie algebra under the bracket XY minus YX.

*Proof.* Bilinearity is inherited from multiplication, and the diagonal
commutator is zero. Expanding the first nested bracket gives the four
words XYZ minus XZY minus YZX plus ZYX. Expanding the two cyclic
companions gives the remaining cyclic versions. Every three-letter word
appears once with each sign, so the total vanishes. Associativity permits
writing those words without parentheses; without it this cancellation
would need an additional hypothesis. ∎

All real n-by-n matrices with this bracket form gl(n,R); complex matrices
form gl(n,C) over the complex numbers. The bracket is not matrix
multiplication itself. In particular, a Lie subalgebra need not contain I
or be closed under ordinary products. Trace-zero matrices illustrate this:
their commutators are trace-zero, while their products can have nonzero trace.

**Definition 4.3 (Subalgebra, ideal and homomorphism).** A subalgebra is
a linear subspace closed under brackets. An ideal a satisfies that every
bracket of an element of the whole algebra with an element of a stays
in a. A Lie homomorphism is a linear map preserving brackets.

An ideal condition compares with the whole algebra, whereas a subalgebra
condition compares only pairs inside the subspace. Every ideal is a
subalgebra, but many subalgebras fail to be ideals. Kernels of Lie
homomorphisms are ideals by applying the homomorphism to a bracket.
The quotient by an ideal has a well-defined bracket on cosets, because
changing either representative changes the bracket by an element of the ideal.

<a id="section-60-why-the-matrix-tangent-space-is-bracket-closed"></a>
## Why the matrix tangent space is bracket closed {#section-62-why-the-matrix-tangent-space-is-bracket-closed}

For a matrix group G, its tangent space g was characterized by membership
of exp(tX) in G for every real t. Conjugating such an exponential by
any group element gives another exponential inside G. Therefore conjugation
acts linearly on g.

**Definition 4.4 (Adjoint action).** For g in G, set

$$\\operatorname{Ad}_g(X)=gXg^{-1}\\quad(X\\in\\mathfrak g).$$

It preserves the bracket and satisfies Ad of gh equal to Ad of g
composed with Ad of h, by associativity of matrix multiplication. It is
thus a group representation on the tangent space, rather than an action
on the underlying physical space on which the original matrices act.

**Theorem 4.5 (Bracket closure).** The tangent space of a closed matrix
group is a real Lie subalgebra of its ambient matrix algebra.

*Proof.* For X,Y in g, the curve exp(tX)Yexp(-tX) lies in the closed
linear subspace g. Its derivative at zero also belongs to that subspace:
each difference quotient is in g, and g is closed. The product rule
identifies this derivative with XY minus YX. Thus the commutator stays
in g. Bilinearity, alternation and Jacobi restrict from the associative
matrix algebra, proving all the Lie axioms. ∎

**Definition 4.6 (Infinitesimal adjoint).** Write ad-X for the linear
map sending Y to [X,Y]. Jacobi, rearranged, says

$$\\operatorname{ad}_{[X,Y]}=
\\operatorname{ad}_X\\operatorname{ad}_Y-
\\operatorname{ad}_Y\\operatorname{ad}_X.$$

Thus ad is a Lie-algebra representation. Its kernel is the center, the
set of elements commuting under the bracket with every element. An
algebra with zero center has faithful adjoint representation, but the
corresponding group can still have a nontrivial discrete center. Global
and infinitesimal faithfulness are different questions.

**Proposition 4.7 (Exponentiating the adjoint).** For real t,

$$\\operatorname{Ad}_{\\exp(tX)}=\\exp(t\\operatorname{ad}_X).$$

*Proof.* Applied to a fixed Y, the left side solves the constant-coefficient
linear differential equation Z-prime equal to [X,Z], with initial value
Y. This follows by differentiating the two outer exponentials. The
right side solves the same equation on the finite-dimensional vector
space of matrices. Uniqueness follows directly by multiplying a proposed
solution by exp(-t ad-X), whose derivative cancels. Therefore the
solutions agree. Restriction to g is legitimate by bracket closure. ∎

<a id="section-111-the-sign-supplied-by-invariant-vector-fields"></a>
## The sign supplied by invariant vector fields {#section-113-the-sign-supplied-by-invariant-vector-fields}

For X in g, define the left-invariant field at A in G by X-left(A)
equal to AX. Its value is tangent because left translation transports
identity tangents. Conversely any left-invariant field is determined by
its identity value and has this form.

**Theorem 4.8 (Matrix and left-invariant brackets agree).**

$$[X^{L},Y^{L}](A)=A[X,Y].$$

*Proof.* The ambient derivative of the field A to AY in direction H
is HY. In the derivation convention, the coordinate expression for a
vector-field bracket is derivative of Y applied to X minus derivative
of X applied to Y. At A this is (AX)Y minus (AY)X, exactly A[X,Y].
The coordinate formula follows by applying two directional derivatives
to a smooth function; the second derivative terms cancel by symmetry.
Restricting the ambient expression to the embedded group gives the
intrinsic bracket, so no extension-dependent value has been introduced. ∎

For right-invariant fields, the value at A is XA and the same convention
gives the negative bracket, minus [X,Y]A. This sign is frequently hidden
by a switch of conventions. State whether invariant fields are left or
right before identifying their bracket with a matrix formula.

<a id="section-136-small-commutators-and-local-multiplication"></a>
## Small commutators and local multiplication {#section-138-small-commutators-and-local-multiplication}

The group commutator curve is

$$C(s,t)=e^{sX}e^{tY}e^{-sX}e^{-tY}.$$

**Proposition 4.9 (First noncommuting term).** For fixed X,Y and small
real parameters,

$$C(s,t)=I+st[X,Y]+O(|s|^2|t|+|s||t|^2).$$

*Proof.* Multiply the four convergent exponential series. The coefficient
of st is XY minus YX. Terms depending only on s, or only on t,
vanish identically because C(s,0) and C(0,t) are both I. All remaining
terms after st have at least one copy of each parameter and total
degree at least three. Absolute convergence of the four series bounds
their sum on a small rectangle by a constant times the stated error.
The constant may depend on X,Y and the chosen rectangle. ∎

For small matrices, exponential has a unique local inverse, and its
logarithm can also be written by the convergent series for log(I+Z)
when the norm of Z is less than one. Composition with the exponential
is justified by absolute convergence of scalar power-series identities
in the single matrix Z. Expanding through degree two yields

$$\\log(e^Xe^Y)=X+Y+\\tfrac12[X,Y]
+O((\\|X\\|+\\|Y\\|)^3).$$

Indeed the product's quadratic part is one half X squared plus XY
plus one half Y squared. Subtracting one half of the square of its
linear part leaves one half of XY minus YX. This is the second-order
Baker–Campbell–Hausdorff formula, not a claim that the displayed finite
expression is exact or that its full series converges for arbitrary
large matrices. The Lie correspondence needs only carefully stated
local behavior, not an unjustified global logarithm law.

<a id="section-172-worked-example-1-sl-2-in-three-matrices"></a>
## Worked example 1: sl(2) in three matrices {#section-174-worked-example-1-sl-2-in-three-matrices}

Over the complex numbers put

$$E=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix},\\quad
F=\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix},\\quad
H=\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}.$$

Direct multiplication gives [H,E] equal to 2E, [H,F] equal to minus
2F, and [E,F] equal to H. Every trace-zero two-by-two matrix is a
unique complex linear combination of these three, so these relations
describe sl(2,C) completely by bilinearity. The same matrices with real
coefficients describe a real algebra instead.

The line spanned by E is a subalgebra because the bracket of two
multiples of E is zero. It is not an ideal in the whole algebra:
bracketing F with E produces minus H outside the line. The span of
H and E is another subalgebra, since its displayed brackets stay
inside; it is the upper-triangular trace-zero algebra. These distinctions
will matter when solvable subalgebras and irreducible representations
are studied. A small invariant list of generators is not automatically
a normal or ideal object.

<a id="section-195-worked-example-2-the-heisenberg-algebra-and-exact-centr"></a>
## Worked example 2: the Heisenberg algebra and exact central correction {#section-197-worked-example-2-the-heisenberg-algebra-and-exact-centr}

Inside strictly upper-triangular three-by-three matrices, let P have
entry one in position one-two, Q in position two-three, and Z in
position one-three. Their only nonzero basis bracket, up to antisymmetry,
is [P,Q] equal to Z. Both [P,Z] and [Q,Z] vanish. Thus Z is central,
and every iterated bracket of length three vanishes.

For X equal to aP plus bQ plus cZ, the exponential is
I plus aP plus bQ plus (c plus ab divided by two)Z, since X squared
is abZ and its cube is zero. Multiply two such matrices and convert
back to these exponential coordinates. Their product has coordinates

$$(a+a',\\ b+b',\\ c+c'+\\tfrac12(ab'-ba')).$$

The bracket correction is exact here. There are no higher terms because
the relevant third-order commutators vanish, as the direct matrix
calculation confirms independently of any full Baker–Campbell–Hausdorff
theorem. Noncommutativity is entirely central: exchanging the two factors
changes only the last coordinate. A center can therefore be nontrivial
even when the whole group or algebra is far from abelian.

<a id="section-217-worked-example-3-rotations-and-the-cross-product"></a>
## Worked example 3: rotations and the cross product {#section-219-worked-example-3-rotations-and-the-cross-product}

For a real vector u in three-space, let hat-u be the skew-symmetric
matrix sending v to the cross product of u with v. Every skew-symmetric
three-by-three matrix has exactly this form. Using the vector triple
product identity, or checking the three coordinate-basis pairs and then
bilinearity, gives

$$[\\widehat u,\\widehat v]=\\widehat{u\\times v}.$$

For example, the bracket of the generators around the first and second
coordinate axes is the generator around the third. The matrix bracket
therefore records the oriented interaction of different rotation axes.
It is not a coordinatewise product of angular velocities.

If R belongs to SO(3), preservation of inner products and orientation
implies that R(u cross v) equals Ru cross Rv. One way to verify this
is to pair each side with Rw: the scalar triple products agree because
the determinant of R is one. Consequently R hat-u R-inverse is hat of
Ru. This identifies the adjoint action of SO(3) on its Lie algebra
with its usual rotation action on vectors. A reflection changes the
orientation sign, so the determinant-one hypothesis belongs in that
identification.

<a id="section-241-exercises-with-staged-help"></a>
## Exercises with staged help {#section-243-exercises-with-staged-help}

### Exercise 4.1: Jacobi without commutativity {#lie-algebras-bracket-ex-1}

Expand the Jacobi sum in an associative algebra and identify the
cancellations. Which hypothesis permits suppressing parentheses?

<details>
<summary>Hint 1</summary>

Each nested commutator has four three-letter products.

</details>
<details>
<summary>Hint 2</summary>

List all six possible orders of three distinct symbols and count their signs.

</details>
<details>
<summary>Solution</summary>

The first term expands to XYZ minus XZY minus YZX plus ZYX.
Its cyclic companions contribute YZX minus YXZ minus ZXY plus XZY,
and ZXY minus ZYX minus XYZ plus YXZ. Every word cancels with an
opposite occurrence. Associativity, rather than commutativity, identifies
the differently parenthesized versions of a word. No pair of letters
has been exchanged during the argument. Thus the commutator is a Lie
bracket even in a highly noncommutative algebra, while arbitrary
nonassociative multiplication would need separate Jacobi justification.

</details>

### Exercise 4.2: trace and a Lie subalgebra {#lie-algebras-bracket-ex-2}

Prove trace of a commutator is zero. Give trace-zero matrices whose
ordinary product does not have trace zero.

<details>
<summary>Hint 1</summary>

Write trace of XY as the double sum of paired entries.

</details>
<details>
<summary>Hint 2</summary>

Use the matrices E and F from Worked example1 for the product counterexample.

</details>
<details>
<summary>Solution</summary>

The trace of XY is the sum over i,j of X-ij Y-ji. Interchanging
the two summation indices gives trace of YX, so their difference has
trace zero. This proves the trace-zero subspace is closed under
commutators. However EF has first diagonal entry one and second
diagonal entry zero, so its trace is one even though E and F both
have trace zero. A Lie subalgebra is therefore not required to be
an associative subalgebra. Its closure condition concerns the bracket,
not every product separately.

</details>

### Exercise 4.3: the center of gl(n) {#lie-algebras-bracket-ex-3}

Over the real or complex numbers, show that matrices commuting with all
n-by-n matrices are exactly the scalar matrices.

<details>
<summary>Hint 1</summary>

Commuting with every diagonal coordinate projection forces off-diagonal
entries to vanish.

</details>
<details>
<summary>Hint 2</summary>

Then commute a diagonal candidate with each elementary matrix E-ij.

</details>
<details>
<summary>Solution</summary>

Commuting with the projection onto coordinate k means the kth row
and column have no off-diagonal entries. Doing this for every k
makes the matrix diagonal. Its commutator with E-ij has the difference
of its ith and jth diagonal values in position ij. Vanishing for
all i,j forces all diagonal values equal. Scalar matrices plainly
commute with every matrix, proving both inclusions. For n equal to
one this conclusion is still correct: the entire one-dimensional
matrix algebra is its center.

</details>

### Exercise 4.4: ideals and quotients {#lie-algebras-bracket-ex-4}

Prove the bracket on g modulo an ideal a is independent of representatives.
Explain why replacing ideal by subalgebra is insufficient.

<details>
<summary>Hint 1</summary>

Replace X and Y by X plus A and Y plus B, with A,B in a.

</details>
<details>
<summary>Hint 2</summary>

All three correction brackets must lie in a, including those with just
one entry in the ideal.

</details>
<details>
<summary>Solution</summary>

Bilinearity makes the changed bracket differ by [A,Y] plus [X,B]
plus [A,B]. Every correction is in a by the ideal property, so
the coset is unchanged. The Lie axioms descend because they were
identities before quotienting. For a mere subalgebra only [A,B]
is guaranteed to lie inside. In sl(2), the line spanned by E is
a subalgebra, but changing a representative by E can change a bracket
with F by H, which is outside that line. Its vector-space quotient
therefore has no induced bracket of this form.

</details>

### Exercise 4.5: Heisenberg center {#lie-algebras-bracket-ex-5}

Compute the center and the span of all commutators of the Heisenberg
algebra in Worked example2.

<details>
<summary>Hint 1</summary>

Bracket aP plus bQ plus cZ separately with P and Q.

</details>
<details>
<summary>Hint 2</summary>

The coefficients of P and Q must vanish for centrality; Z already commutes.

</details>
<details>
<summary>Solution</summary>

Bracketing the candidate with P gives minus bZ and with Q gives
aZ. Centrality therefore forces a and b to vanish, leaving exactly
the line spanned by Z. Every commutator is a multiple of Z, and
[P,Q] realizes Z, so the commutator span is the same line. Its
brackets with the whole algebra are zero. This identifies a
two-step nilpotent example: noncommutativity exists, but disappears
after the first central commutator. The precise lower central-series
definition is developed in Chapter6.

</details>

### Exercise 4.6: a two-dimensional nonabelian example {#lie-algebras-bracket-ex-6}

For the affine tangent matrices A diagonal one, zero and B equal to
E-12, compute [A,B]. Determine the center and an ideal line.

<details>
<summary>Hint 1</summary>

These matrices are H and E from the noncommuting exponential example,
with H having second diagonal entry zero.

</details>
<details>
<summary>Hint 2</summary>

Bracket an arbitrary linear combination with each basis matrix.

</details>
<details>
<summary>Solution</summary>

Multiplication gives AB equal to B and BA equal to zero, hence
[A,B]=B. The B-line is an ideal, because bracketing either basis
matrix with B remains in that line. A candidate aA plus bB has
bracket minus bB with A and aB with B. Both vanish only when
a and b are zero, so the center is zero. This example separates
having a proper nonzero ideal from having a nonzero center. Those
conditions coincide in neither arbitrary Lie algebras nor arbitrary groups.

</details>

### Exercise 4.7: adjoint homomorphism {#lie-algebras-bracket-ex-7}

Use Jacobi to prove the displayed identity for ad of [X,Y], then
identify the kernel of the adjoint representation.

<details>
<summary>Hint 1</summary>

Apply both sides of the desired operator identity to an arbitrary Z.

</details>
<details>
<summary>Hint 2</summary>

Rearrange Jacobi so the nested brackets with X and Y appear first.

</details>
<details>
<summary>Solution</summary>

Jacobi and antisymmetry give [[X,Y],Z] equal to [X,[Y,Z]]
minus [Y,[X,Z]]. This is exactly the difference of the two
composite adjoint operators applied to Z. Since Z was arbitrary,
the operator identity follows. An element lies in the kernel precisely
when its bracket with every Z vanishes, which is the definition
of the center. Thus the adjoint representation is faithful exactly
when the Lie algebra has zero center. No assertion about the
discrete center of a corresponding Lie group follows from this alone.

</details>

### Exercise 4.8: right-invariant sign {#lie-algebras-bracket-ex-8}

Compute the bracket of the right-invariant fields with values XA and
YA, using the convention in this chapter.

<details>
<summary>Hint 1</summary>

The derivative of A to YA sends H to YH.

</details>
<details>
<summary>Hint 2</summary>

Substitute the field XA into that derivative before subtracting the
corresponding term in the reverse order.

</details>
<details>
<summary>Solution</summary>

Derivative of the Y-field applied to the X-field is YXA, whereas
derivative of the X-field applied to the Y-field is XYA.
Their difference is minus [X,Y]A. Thus the correspondence from
matrices to right-invariant fields reverses the bracket under the
fixed derivation convention. The left-invariant identification has
the positive sign. A different author may negate the field bracket
or use right-invariant fields throughout, but then related formulas
must change consistently. A sign cannot be repaired in one isolated
display while keeping incompatible conventions elsewhere.

</details>

### Exercise 4.9: commuting left and right motions {#lie-algebras-bracket-ex-9}

Show that a left-invariant field AX and a right-invariant field YA
have zero bracket. Explain the corresponding group action identity.

<details>
<summary>Hint 1</summary>

Their two derivative terms both equal YAX.

</details>
<details>
<summary>Hint 2</summary>

Left multiplication and right multiplication commute as operations on A.

</details>
<details>
<summary>Solution</summary>

Derivative of the right field in direction AX is YAX. Derivative
of the left field in direction YA is also YAX, so their difference
is zero. At the group level, applying left multiplication by g and
right multiplication by h gives gAh in either order. The equality
uses associativity, not commutativity of g with h. This distinguishes
commuting actions on the space of matrices from commuting matrices
inside the acting group. The two actions can commute even when
the group itself is highly nonabelian.

</details>

### Exercise 4.10: central exponential correction {#lie-algebras-bracket-ex-10}

Use the Heisenberg multiplication coordinates to compute the group
commutator of exp(aP) and exp(bQ).

<details>
<summary>Hint 1</summary>

Either multiply the four upper-triangular matrices or apply the coordinate
law successively.

</details>
<details>
<summary>Hint 2</summary>

The first two coordinates cancel; only the central coordinate can remain.

</details>
<details>
<summary>Solution</summary>

The four factors I plus aP, I plus bQ, I minus aP and I minus
bQ multiply to I plus abZ. Since Z squared is zero, this is
exp(abZ). The group commutator is therefore exactly central,
with coefficient equal to the bracket [aP,bQ]. In a general
matrix group the same leading coefficient appears but higher
terms need not vanish. Here their absence follows from the
specific strictly upper-triangular multiplication relations, so
the exact formula cannot be transported to arbitrary generators.

</details>

### Exercise 4.11: orientation in the rotation bracket {#lie-algebras-bracket-ex-11}

For an orthogonal real R, determine how R transports the cross product.
Explain why the usual vector identification of the SO(3) adjoint action
uses determinant one.

<details>
<summary>Hint 1</summary>

Pair the transported cross product with an arbitrary vector Rw.

</details>
<details>
<summary>Hint 2</summary>

The scalar triple product is a determinant, so orthogonal changes can
introduce a sign.

</details>
<details>
<summary>Solution</summary>

The scalar product of Ru cross Rv with Rw equals determinant of R
times the scalar product of u cross v with w. Since R preserves
inner products and the vectors Rw exhaust the space, Ru cross Rv
equals determinant of R times R(u cross v). For a proper rotation
the sign is positive, giving Ad-R of hat-u equal to hat of Ru.
For a reflection the sign is negative. Orientation preservation
is therefore exactly the hypothesis that removes the sign from
the vector model of the adjoint action.

</details>

### Exercise 4.12: direct sums {#lie-algebras-bracket-ex-12}

Define the componentwise bracket on a direct sum of two Lie algebras.
Show that each summand is an ideal and that brackets across summands vanish.

<details>
<summary>Hint 1</summary>

Put the first algebra in pairs with zero second component, and conversely.

</details>
<details>
<summary>Hint 2</summary>

Check the axioms component by component rather than assuming an ambient
matrix realization.

</details>
<details>
<summary>Solution</summary>

Bracket a pair with another pair by taking the two original brackets
in their respective components. Bilinearity, alternation and Jacobi
hold because they hold in each coordinate. Bracketing an element
of the first summand with an arbitrary pair leaves second component
zero, so that summand is an ideal; similarly for the second.
A cross-summand bracket has both components zero. This is the
algebraic direct sum, not merely a vector-space decomposition into
two arbitrary subalgebras. The additional vanishing cross brackets
and ideal properties are the structural content.

</details>

<a id="section-624-summary-and-next-connection"></a>
## Summary and next connection {#section-626-summary-and-next-connection}

The matrix commutator is a Lie bracket because associative words cancel
in Jacobi. Exponential conjugation proves tangent-space bracket closure,
and left-invariant vector fields recover the same sign intrinsically.
Adjoint actions and their infinitesimal versions organize conjugation,
while small group commutators and the second-order logarithm formula
show where the bracket enters local multiplication. Subalgebras, ideals
and centers record different structures. The next chapter asks which
of these infinitesimal data integrate to subgroup and homomorphism
statements, and where connectedness or simple connectedness is essential.

## Sources

The linked Smooth Manifolds bracket supplies the intrinsic derivation convention. All matrix comparisons are proved here. Compare Hall, Humphreys and Kirillov for further Lie-theory development.
`;export{e as default};