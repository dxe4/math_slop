
# Solvable and Nilpotent Lie Algebras: Engel and Lie {#section-1-solvable-and-nilpotent-lie-algebras-engel-and-lie}

Two familiar triangular matrix patterns encode different kinds of vanishing.
Upper-triangular commutators have zero diagonal, so repeated derived commutators
eventually disappear. Strictly upper-triangular matrices satisfy a stronger
condition: sufficiently long products, and hence sufficiently deep commutators,
vanish. Lie's theorem and Engel's theorem explain how these patterns arise
from intrinsic algebraic hypotheses. Their conclusions have different field
and representation requirements, which must not be blurred into one slogan
about triangular matrices.

Use [Lie Algebras and the Lie Bracket](lie-algebras-bracket.md), invariant
subspaces, quotient representations and elementary complex eigenvalue theory.
All algebras and representations in the main theorems are finite-dimensional.
Engel's operator theorem below is proved over any field, whereas Lie's theorem
is proved over the complex numbers, using algebraic closedness and
characteristic zero at explicit steps. No complete-reducibility assertion
is being made for solvable algebras.

<a id="section-18-two-descending-series"></a>
## Two descending series {#section-20-two-descending-series}

For subspaces a,b, write [a,b] for the linear span of all brackets with
one entry in each. The span is part of the definition; a list of individual
brackets is not automatically a vector subspace.

**Definition 6.1 (Derived series).** Set g-derived-zero equal to g and
define each next term as the bracket of the preceding term with itself.
The algebra is solvable if some term is zero.

**Definition 6.2 (Lower central series).** Set gamma-one equal to g and
gamma-r-plus-one equal to [g,gamma-r]. The algebra is nilpotent if some
term is zero. A nonzero algebra has nilpotence class c when gamma-c
is nonzero and gamma-c-plus-one is zero.

Both series consist of ideals. For the derived series, Jacobi shows that
bracketing an outside element with [a,a] stays in [a,a] when a is an
ideal. For the lower central series, apply Jacobi to [X,[Y,Z]] with
Z in its preceding ideal: the resulting two terms remain in the next
lower central term. Induction begins with the whole algebra.

**Proposition 6.3.** Nilpotent algebras are solvable. Subalgebras and
quotients of solvable algebras are solvable; the analogous statements hold
for nilpotence. An extension of a solvable ideal by a solvable quotient
is solvable.

*Proof.* Induction puts the rth derived term inside gamma-r-plus-one:
bracket its contained subspace with itself, and bound one factor by all
of g. Thus vanishing of the lower central series forces vanishing of
the derived series. Subalgebra series are contained termwise in the ambient
series. A quotient map carries each series onto the corresponding quotient
series by bracket preservation and surjectivity. Finally, if the quotient
is solvable, some derived term of g lies in the ideal. Continuing the
derived series then reaches zero when the ideal is solvable. ∎

The last extension statement is not true with nilpotent in place of
solvable. The affine example below has an abelian ideal and abelian
quotient but is not nilpotent. Nilpotence imposes compatibility of the
whole algebra's action, not merely two separately vanishing series.

<a id="section-58-engel-s-operator-theorem"></a>
## Engel's operator theorem {#section-60-engel-s-operator-theorem}

**Lemma 6.4 (A nilpotent operator has nilpotent commutator action).**
If X to the mth power is zero on V, then ad-X is nilpotent on
End(V), with its power 2m minus one equal to zero.

*Proof.* Left multiplication by X and right multiplication by X commute
as operators on End(V). Their difference is ad-X. Expanding its rth
power gives a sum of terms X-to-the-r-minus-j, then an input operator,
then X-to-the-j, with binomial coefficients and alternating signs.
For r at least 2m minus one, either j or r minus j is at least m.
Every term is therefore zero. This proof does not assume X commutes
with the input operator. ∎

**Theorem 6.5 (Engel's common-kernel theorem).** Let L be a Lie
subalgebra of End(V), where V is nonzero and finite-dimensional over any
field. If every element of L is a nilpotent operator, there is a
nonzero vector killed by every element of L.

*Proof.* Induct on the dimension of L, allowing arbitrary finite-dimensional
nonzero representation spaces at each induction stage. The zero algebra
kills every vector. Assume L is nonzero. First consider any proper
subalgebra K. Its adjoint action on L modulo K is well defined, since
K preserves itself under brackets. Every operator in that action is
nilpotent by Lemma6.4, restricted and then passed to the quotient.
Its image algebra has dimension at most that of K, strictly smaller
than L. The induction hypothesis supplies a nonzero coset Y plus K
killed by K. Thus Y is outside K and [K,Y] lies inside K.

Consequently every proper subalgebra is properly contained in its
normalizer, the set of elements whose brackets with it stay in it.
Choose a maximal proper subalgebra K, possible by finite dimension.
Its normalizer must therefore be L, making K an ideal. The quotient
L modulo K has dimension one: if its dimension were larger, the
inverse image of any nonzero line in the quotient would be an
intermediate proper subalgebra, since a line is bracket closed.

Apply induction to K acting on V. Its common kernel W is nonzero.
Because K is an ideal, W is preserved by L: for k in K, x in L
and w in W, the identity k(xw)=x(kw)+[k,x]w has both right terms
zero. Choose x outside K. Its restriction to W is nilpotent, hence
has a nonzero kernel. A vector there is killed by x and by K,
and thus by all of L. This completes the induction. ∎

Passing successively to quotients by the common-kernel line constructs a
complete flag on which every element of L is strictly upper triangular.
The quotient operators remain nilpotent and their image is still a
Lie algebra, so the theorem applies at every stage. The basis can
therefore be chosen simultaneously for the whole family, not separately
for each operator.

**Theorem 6.6 (Intrinsic Engel theorem).** A finite-dimensional Lie
algebra is nilpotent exactly when ad-X is nilpotent for every X.

*Proof.* If the lower central series vanishes, successive applications
of ad-X move any element down that series, so a sufficiently high power
is zero. Conversely apply Theorem6.5 to the adjoint image on g.
For nonzero g it gives a nonzero vector commuting with every element,
so the center is nonzero. Pass to the quotient by the center.
Its adjoint operators are induced nilpotent operators, and induction
on the dimension makes that quotient nilpotent. Some lower central
term of g consequently lies in the center; its next bracket with
g is zero. Thus g is nilpotent. The zero algebra satisfies both
conditions directly. ∎

An abstract nilpotent algebra can have a representation containing operators
that are not nilpotent. A one-dimensional abelian algebra acting by scalar
identity operators is the simplest example. The intrinsic theorem concerns
its adjoint representation; the operator theorem assumes nilpotence in
the particular representation being triangularized.

<a id="section-129-lie-s-common-eigenvector-theorem"></a>
## Lie's common-eigenvector theorem {#section-131-lie-s-common-eigenvector-theorem}

**Theorem 6.7 (Lie).** A solvable complex Lie algebra acting on a
nonzero finite-dimensional complex vector space has a common eigenvector.
Consequently its representing matrices can be simultaneously upper triangular.

*Proof.* Induct on the algebra dimension. The zero algebra is immediate.
For a nonzero solvable algebra, its derived subalgebra is proper.
Choose a codimension-one vector subspace h containing that derived
subalgebra. It is an ideal, since every bracket in the whole algebra
already lies in the derived subalgebra. It is solvable. Induction
gives a nonzero vector v and a linear functional lambda on h with
h acting on v by the scalar lambda(h). Choose x outside h.

Let W be the cyclic span of v, xv, x-squared v and so on. A first
linear dependence makes it finite-dimensional and x-invariant. For
every h in the ideal, commuting h past powers of x shows

$$h x^k v-\lambda(h)x^k v\in
\operatorname{span}(v,xv,\ldots,x^{k-1}v).$$

Here is the induction behind that statement. Write h x as x h
plus [h,x]. The first term uses the preceding formula for h,
while [h,x] belongs to the same ideal and its action on the
preceding power has degree at most k minus one by the simultaneous
induction for all ideal elements. Thus h preserves W and is
upper triangular there with constant diagonal lambda(h).

The trace of the commutator of x and h on W is zero, because
both preserve W. But [x,h] is in the ideal, so its trace there
is dimension of W times lambda([x,h]). Characteristic zero
therefore gives lambda([x,h]) equal to zero.

Now let V-lambda be the common h-eigenspace with eigenvalue functional
lambda. It contains v and is nonzero. For w there, h(xw)
equals lambda(h)xw plus lambda([h,x])w, whose last term has
just been proved zero. Hence V-lambda is x-invariant. Since
the field is complex, x has an eigenvector on this nonzero
space. That vector is a common eigenvector for h and x, and
therefore for the whole algebra. Passing to the quotient by
its invariant line and repeating gives a full invariant flag,
or simultaneous upper-triangular form. ∎

The proof permits a nonfaithful representation: an ideal's action may
have a kernel, but its image remains solvable and the common-eigenvector
argument still applies. Eigenvalues on the successive quotient lines
are linear functionals vanishing on commutators, because commutators of
upper-triangular matrices have zero diagonal.

Over the real numbers, a one-dimensional abelian algebra acting by the
planar rotation generator has no real eigenvector. Its complexification
does have eigenvectors. Thus real solvability does not guarantee a
real invariant full flag. Complexifying is a change of coefficient
field that must be stated, rather than a silent replacement of a
real conclusion by a complex one.

**Corollary 6.8.** For a solvable complex Lie algebra, its derived
subalgebra is nilpotent.

*Proof.* Apply Lie's theorem to the adjoint representation of the
whole algebra. Derived elements act by strictly upper-triangular
matrices and hence nilpotently. Their restrictions to the derived
subalgebra are still nilpotent, so intrinsic Engel applies there.
The converse also holds: a nilpotent derived subalgebra is solvable,
and the quotient by it is abelian, so Proposition6.3 gives solvability
of the whole algebra. ∎

<a id="section-196-worked-example-1-solvable-without-nilpotent"></a>
## Worked example 1: solvable without nilpotent {#section-198-worked-example-1-solvable-without-nilpotent}

In the affine algebra with basis A,B and [A,B]=B, the first
derived subalgebra is the B-line and its next derived term is zero.
The algebra is therefore solvable. Its lower central series instead
has the B-line at every term after the first, since bracketing A
with B returns B. It is not nilpotent.

The adjoint operator ad-A has eigenvalue one on B, so intrinsic
Engel fails exactly where expected. The B-line is an abelian ideal,
and the quotient is one-dimensional abelian, showing why an extension
of nilpotent pieces need not be nilpotent. Lie's theorem is still
visible: in the usual affine matrix representation all matrices are
upper triangular, with a possibly nonzero first diagonal entry.
Strict upper triangularity would have imposed a stronger condition
than solvability supplies.

<a id="section-213-worked-example-2-a-nilpotent-triangular-family"></a>
## Worked example 2: a nilpotent triangular family {#section-215-worked-example-2-a-nilpotent-triangular-family}

Let n-plus be all strictly upper-triangular n-by-n matrices, with n
at least two. Its rth lower central term consists of matrices whose
possibly nonzero entries have column index minus row index at least r.
To prove containment, multiplication adds these index gaps along a
nonzero intermediate index, and the commutator is a difference of
such products. For the reverse inclusion, every elementary matrix
of gap at least r plus one is a bracket of the first adjacent
elementary matrix with a gap-at-least-r elementary matrix. Induction
therefore gives equality at each step.

The nth term is zero, while the elementary matrix in the top-right
corner survives in term n minus one. The nilpotence class is exactly
n minus one. For n equal to three this recovers the Heisenberg
algebra, whose only nonzero commutator direction is central. Counting
the number of matrix rows alone would not prove the class; the
index-gap calculation identifies both the vanishing and the last
nonvanishing term.

<a id="section-233-worked-example-3-what-triangularization-does-and-does-n"></a>
## Worked example 3: what triangularization does and does not select {#section-235-worked-example-3-what-triangularization-does-and-does-n}

Consider the complex representation of a one-dimensional abelian algebra
whose generator acts by a single two-by-two Jordan block with eigenvalue
one. The algebra is nilpotent because its bracket is zero. Its
representing generator is not nilpotent, since its powers retain
diagonal entries one. Lie's theorem supplies the invariant eigenline
and an upper-triangular basis, but no invariant complementary line
exists for this Jordan block.

Indeed any invariant one-dimensional complement would be another
eigenline, while the block has only one eigenspace. This is why
simultaneous triangularization is not simultaneous diagonalization
and not complete reducibility. In finite-group representation theory,
averaging over a group with invertible order supplies invariant
complements. There is no comparable hypothesis here for arbitrary
solvable-algebra representations. The later semisimple theory needs
its own complete-reducibility theorem, not a reinterpretation of Lie's
upper-triangular conclusion.

<a id="section-253-exercises-with-staged-help"></a>
## Exercises with staged help {#section-255-exercises-with-staged-help}

### Exercise 6.1: derived and central series {#solvable-nilpotent-engel-lie-ex-1}

Compute both series for the affine algebra and identify the exact
failure of nilpotence.

<details>
<summary>Hint 1</summary>

Every bracket is a multiple of B, and [A,B] realizes B.

</details>
<details>
<summary>Hint 2</summary>

The derived series brackets the B-line with itself; the lower
central series continues bracketing it with A.

</details>
<details>
<summary>Solution</summary>

The derived series is the whole algebra, then the B-line,
then zero. The lower central series is the whole algebra
followed by the B-line forever. The first gives solvability;
the second fails to vanish and rules out nilpotence. The
same computation shows that the abelian B-ideal and abelian
quotient do not make the extension nilpotent. One must specify
which descending series is being computed, because the word
commutator alone does not distinguish these two recursions.

</details>

### Exercise 6.2: nilpotent adjoint bound {#solvable-nilpotent-engel-lie-ex-2}

Prove Lemma6.4 when X squared is zero by explicitly expanding
the third power of ad-X.

<details>
<summary>Hint 1</summary>

Left and right multiplication by X commute as operators.

</details>
<details>
<summary>Hint 2</summary>

Every third-order term has X squared on at least one side
of the input matrix.

</details>
<details>
<summary>Solution</summary>

The expansion on an input Y is X cubed Y minus three
X squared YX plus three XYX squared minus YX cubed.
Every term is zero when X squared is zero, so ad-X cubed
vanishes. This remains valid in small characteristic because
vanishing comes from the matrix powers, not division by a
coefficient. The argument concerns commutator action on all
endomorphisms; restricting to an invariant Lie subalgebra or
passing to an invariant quotient preserves the nilpotence bound.

</details>

### Exercise 6.3: the normalizer step {#solvable-nilpotent-engel-lie-ex-3}

In Engel's proof, explain why a nonzero killed coset in L modulo
K supplies an element of the normalizer outside K.

<details>
<summary>Hint 1</summary>

Write the adjoint action on the representative Y plus K.

</details>
<details>
<summary>Hint 2</summary>

Being zero in the quotient means membership in K, not
necessarily a zero bracket in L.

</details>
<details>
<summary>Solution</summary>

The common-kernel condition says [k,Y] plus K is zero
for every k in K. Thus [k,Y] belongs to K, precisely
the condition that Y normalizes K. The coset is nonzero,
so Y does not belong to K. Therefore the normalizer
properly contains K. It would be stronger and generally
unjustified to claim Y centralizes K. Engel's induction
needs normalization, which is exactly what the quotient
representation provides.

</details>

### Exercise 6.4: common kernel invariance {#solvable-nilpotent-engel-lie-ex-4}

Let K be an ideal in a matrix Lie algebra L. Prove that
the common kernel of K on V is L-invariant.

<details>
<summary>Hint 1</summary>

For w in that kernel, rewrite k(xw) using the matrix commutator.

</details>
<details>
<summary>Hint 2</summary>

Both k and [k,x] belong to K.

</details>
<details>
<summary>Solution</summary>

For k in K and x in L, the identity kx equals xk
plus [k,x] gives k(xw)=x(kw)+[k,x]w. The first
term is zero because kw is zero. The second is zero
because the ideal property puts [k,x] in K, which also
kills w. This holds for every k, so xw remains in
the common kernel. A subalgebra without the ideal property
would not justify the second cancellation, which explains
why Engel's normalizer argument must first produce an ideal.

</details>

### Exercise 6.5: an intrinsic nilpotent algebra {#solvable-nilpotent-engel-lie-ex-5}

Explain why an abelian algebra is nilpotent, then give a
representation whose image contains no nonzero nilpotent operator.

<details>
<summary>Hint 1</summary>

The second lower central term of an abelian algebra is zero.

</details>
<details>
<summary>Hint 2</summary>

Represent a one-dimensional generator by the identity matrix.

</details>
<details>
<summary>Solution</summary>

An abelian bracket makes gamma-two zero, so a nonzero
abelian algebra has nilpotence class one. Represent a
one-dimensional such algebra by sending its generator to I.
Every nonzero image scalar is invertible and hence not
nilpotent. Intrinsic Engel still holds because its adjoint
action is zero. The operator version does not apply to
this representation, since its nilpotence hypothesis fails.
The example separates a property of the abstract algebra
from a property of one chosen linear realization.

</details>

### Exercise 6.6: the characteristic-zero trace step {#solvable-nilpotent-engel-lie-ex-6}

Locate the use of characteristic zero in Lie's proof and explain
why trace of a commutator by itself would be insufficient in
positive characteristic.

<details>
<summary>Hint 1</summary>

The commutator's trace equals the dimension of W times
one common diagonal eigenvalue.

</details>
<details>
<summary>Hint 2</summary>

That positive integer dimension can be zero as a scalar
in a positive-characteristic field.

</details>
<details>
<summary>Solution</summary>

The proof obtains zero equal to dimension of W multiplied
by lambda([x,h]). In characteristic zero the positive
dimension scalar is nonzero and can be cancelled, forcing
the eigenvalue to vanish. In characteristic p, a dimension
divisible by p gives scalar zero, so the equality imposes
no restriction on that eigenvalue. The trace identity
itself remains correct; the inference from it fails.
Consequently one cannot simply repeat the complex proof
over another field without auditing that division step.

</details>

### Exercise 6.7: the real obstruction {#solvable-nilpotent-engel-lie-ex-7}

Show that the real planar rotation generator has no invariant
real line, although the algebra it represents is abelian.

<details>
<summary>Hint 1</summary>

An invariant real line would supply a real eigenvector.

</details>
<details>
<summary>Hint 2</summary>

The generator squares to minus I.

</details>
<details>
<summary>Solution</summary>

If Jv equals av for a nonzero real v and real a,
applying J again gives minus v equal to a squared v.
This would require a squared equal to minus one, impossible
over the reals. Thus no real invariant line exists.
The one-dimensional source algebra is abelian and hence
solvable, so solvability alone is not enough for the
real conclusion. Over the complex numbers the eigenvalues
are plus and minus i, and eigenlines exist. The field
hypothesis in Lie's theorem is therefore essential.

</details>

### Exercise 6.8: triangular derived matrices {#solvable-nilpotent-engel-lie-ex-8}

For complex upper-triangular matrices, prove their commutator
has zero diagonal and deduce that the derived matrix algebra
consists of nilpotent operators.

<details>
<summary>Hint 1</summary>

The ith diagonal entry of a product is the product of
the two ith diagonal entries.

</details>
<details>
<summary>Hint 2</summary>

A strictly upper-triangular n-by-n matrix has nth power zero.

</details>
<details>
<summary>Solution</summary>

For triangular X,Y, the ith diagonal entries of XY
and YX are X-ii Y-ii and Y-ii X-ii, equal scalars.
Their difference has diagonal zero and remains upper
triangular. Linear combinations of such commutators
are still strictly upper triangular. Any product of
n strictly upper-triangular matrices has no possible
chain of increasing indices and is zero, so each
individual derived operator is nilpotent. This is the
operator fact used before applying intrinsic Engel
to the adjoint image in Corollary6.8.

</details>

### Exercise 6.9: a nonzero nilpotent center {#solvable-nilpotent-engel-lie-ex-9}

Prove directly from the lower central series that a nonzero
nilpotent Lie algebra has nonzero center.

<details>
<summary>Hint 1</summary>

Choose the last nonzero lower central term.

</details>
<details>
<summary>Hint 2</summary>

Its bracket with the whole algebra is the next term,
which is zero.

</details>
<details>
<summary>Solution</summary>

Let gamma-c be the last nonzero term. By definition
[g,gamma-c] is gamma-c-plus-one, which is zero.
Every element of gamma-c therefore commutes with all
of g, so this entire nonzero subspace lies in the
center. This argument uses the intrinsic series and
does not require a matrix representation or a field
closure assumption. It also explains the quotient
induction in Engel's converse: central layers can
be removed while retaining a smaller algebra.

</details>

### Exercise 6.10: strict triangular class {#solvable-nilpotent-engel-lie-ex-10}

For strictly upper-triangular four-by-four matrices,
list the dimensions of the lower central terms and
deduce the nilpotence class.

<details>
<summary>Hint 1</summary>

Count elementary matrices by their column-minus-row gaps.

</details>
<details>
<summary>Hint 2</summary>

The allowable gaps in successive terms are at least
one, two, three and four.

</details>
<details>
<summary>Solution</summary>

There are six positions above the diagonal, giving
dimension six in the first term. Gap at least two
allows positions one-three, one-four and two-four,
giving dimension three. Gap at least three leaves
only one-four, giving dimension one. No position
has gap at least four, so the next term is zero.
The class is three. Both the nonzero third term
and vanishing fourth term are needed for the exact
class assertion, rather than merely an upper bound.

</details>

### Exercise 6.11: no invariant complement {#solvable-nilpotent-engel-lie-ex-11}

For a two-by-two Jordan block with eigenvalue one,
prove its eigenline has no invariant complementary line.

<details>
<summary>Hint 1</summary>

Every invariant one-dimensional space is an eigenline.

</details>
<details>
<summary>Hint 2</summary>

The kernel of the block minus I is one-dimensional.

</details>
<details>
<summary>Solution</summary>

The block has only eigenvalue one, and its eigenspace
is the kernel of its nonzero nilpotent off-diagonal
part, a single line. An invariant complementary
line would have to be another eigenline, but every
eigenvector lies in that same first line. Such a
complement therefore cannot exist. An invariant
flag exists and triangularizes the block, as Lie's
theorem predicts. The missing complement shows
that triangularization does not supply a direct-sum
decomposition into irreducible subrepresentations.

</details>

### Exercise 6.12: solvable extensions {#solvable-nilpotent-engel-lie-ex-12}

Suppose an ideal a has derived length at most r and
g modulo a has derived length at most s. Give a
derived-length bound for g.

<details>
<summary>Hint 1</summary>

After s derived steps, projection to the quotient is zero.

</details>
<details>
<summary>Hint 2</summary>

Continue inside a for r additional steps.

</details>
<details>
<summary>Solution</summary>

The sth derived term of g lies in a, because its
quotient image is the sth derived term of the
solvable quotient. Each further derived step is
contained in the corresponding derived term of a.
After r more steps it is zero. Hence the derived
length is at most r plus s, with indexing convention
that the zeroth term is the whole algebra. The bound
is sufficient for solvability; it need not be sharp
for a particular extension or representation.

</details>

<a id="section-649-summary-and-next-connection"></a>
## Summary and next connection {#section-651-summary-and-next-connection}

Derived series measure solvability, while lower central series measure
nilpotence. Engel's theorem turns nilpotent operator families into a
common kernel and identifies intrinsic nilpotence through the adjoint
representation. Lie's theorem triangularizes complex solvable actions,
using characteristic zero and algebraic closedness at specific steps.
Neither theorem gives arbitrary invariant complements. The next chapter
uses traces of adjoint products to detect solvability and semisimplicity,
with these triangularization results supplying the essential vanishing
arguments.

<a id="section-669-sources"></a>
## Sources {#section-671-sources}

Compare Humphreys and Hall for solvable and nilpotent Lie algebras. The triangularization theorems used here are proved with their stated hypotheses.
