var e=`---
parent_id: book-lie-groups-lie-algebras
chapter_id: semisimple-root-decomposition
title: "Root Space Decomposition of Semisimple Lie Algebras"
level: graduate
license: CC BY-SA 4.0
---

# Root Space Decomposition of Semisimple Lie Algebras {#section-1-root-space-decomposition-of-semisimple-lie-algebras}

The abstract root axioms do not arise merely because a few adjoint matrices
have eigenvalues. One must find a sufficiently large commuting semisimple
family, prove that its centralizer is exactly itself, construct rank-one
triples and show that their weights have the required integrality and
reflection properties. This chapter supplies that bridge for every
finite-dimensional complex semisimple Lie algebra, using Cartan's criterion
and the proved sl(2) representation theory.

Read [The Killing Form and Cartan's Criterion](killing-form-cartan-criterion.md),
[Representations of sl(2)](sl2-representations.md) and [Root Systems](root-systems.md).
The coefficient field is complex throughout the algebraic construction.
A positive-definite real space will be built from coroots later; it is
not assumed to be the original complex Cartan subalgebra. Jordan decomposition
of finite-dimensional linear operators is the named linear-algebra input.
All structural lemmas needed beyond that input are proved here.

<a id="section-17-derivations-and-their-jordan-parts"></a>
## Derivations and their Jordan parts {#section-19-derivations-and-their-jordan-parts}

A derivation D satisfies D[X,Y]=[DX,Y]+[X,DY]. Adjoint operators are
derivations by Jacobi. For a semisimple algebra, the converse holds.

**Lemma 10.1 (Derivations are inner).** Every derivation of a complex
semisimple g is ad-X for a unique X in g.

*Proof.* Nondegeneracy of the Killing form chooses a unique X with
K(X,Y)=trace(D ad-Y) for all Y. Set D-zero equal to D minus
ad-X. It is a derivation and trace(D-zero ad-Y)=0 for every Y.
The derivation identity gives [D-zero,ad-Y]=ad of D-zero Y.
For any Y,Z, cyclicity of trace therefore gives

$$K(D_0Y,Z)=\\operatorname{tr}([D_0,\\operatorname{ad}_Y]
\\operatorname{ad}_Z)
=\\operatorname{tr}(D_0\\operatorname{ad}_{[Y,Z]})=0.$$

Nondegeneracy forces D-zero Y to be zero for every Y, proving
existence. Uniqueness follows because the center is zero in a
semisimple algebra. ∎

**Lemma 10.2 (Jordan parts remain derivations).** The semisimple
and nilpotent Jordan parts of a derivation D are derivations.

*Proof.* Let X,Y lie in generalized eigenspaces of D with eigenvalues
lambda,mu. Repeated use of the derivation rule expands a high power
of D minus lambda minus mu on [X,Y] as a binomial sum of brackets
of powers of D minus lambda on X and D minus mu on Y. For a
sufficiently high power every term vanishes. Thus their bracket
belongs to the generalized eigenspace for lambda plus mu, or
is zero when that number is not an eigenvalue.

The semisimple part D-s acts on a generalized lambda space by
the scalar lambda. The preceding bracket statement consequently
makes D-s satisfy the derivation identity. Its difference from
D is the nilpotent part, which is therefore also a derivation.
The usual operator Jordan decomposition gives their commutation
and semisimple/nilpotent properties. ∎

Combining the lemmas yields an intrinsic Jordan decomposition for any
X in g. The Jordan parts of ad-X are ad of unique elements X-s
and X-n. They add to X and commute, since their adjoint commutator
is zero and the center is zero. We call X semisimple when ad-X
is diagonalizable, and nilpotent when ad-X is nilpotent. These
definitions refer to the adjoint representation, not to arbitrary
faithful matrix coordinates someone might choose.

<a id="section-65-a-maximal-toral-subalgebra-and-simultaneous-weights"></a>
## A maximal toral subalgebra and simultaneous weights {#section-67-a-maximal-toral-subalgebra-and-simultaneous-weights}

**Definition 10.3 (Toral subalgebra).** A toral subalgebra is abelian
and consists of semisimple elements. A maximal toral subalgebra h
will be called a Cartan subalgebra in this complex semisimple chapter.

Such subalgebras exist by finite dimension. In a nonzero semisimple
algebra at least one adjoint operator is not nilpotent, or Engel
would make the whole algebra nilpotent and hence solvable. Its
nonzero semisimple Jordan part supplies a nonzero toral line;
extend to a maximal one. For the zero algebra, h is zero and
the root system below is empty.

Commuting diagonalizable operators are simultaneously diagonalizable:
split into eigenspaces of one operator, observe that all the others
preserve them, and continue through a finite basis of the commuting
family. Apply this to ad of h. Its simultaneous eigenvalues are
linear functionals on h, giving

$$\\mathfrak g=\\mathfrak g_0\\oplus
\\bigoplus_{\\alpha\\in R}\\mathfrak g_\\alpha,\\qquad
\\mathfrak g_\\alpha=\\{X:[H,X]=\\alpha(H)X\\ \\forall H\\in\\mathfrak h\\},$$

where R is the finite set of nonzero occurring functionals. The
zero space is the centralizer of h and initially might be larger
than h. Jacobi gives [g-alpha,g-beta] contained in g-alpha-plus-beta,
interpreted as zero if that functional does not occur.

**Lemma 10.4 (Killing orthogonality).** Weight spaces pair to zero
unless their weights add to zero. The restriction of K to g-zero
is nondegenerate, and g-alpha pairs perfectly with g-minus-alpha.

*Proof.* Invariance gives (alpha(H)+beta(H))K(X,Y)=0 for each
H. If the functional sum is nonzero, choose H where it does
not vanish. The pairing is then zero. A vector in g-zero
orthogonal to all of g-zero is consequently orthogonal to
every weight space and hence to g, so is zero. The same
argument for a nonzero root vector orthogonal to the opposite
space proves perfect pairing and also proves that the opposite
space exists whenever g-alpha does. ∎

<a id="section-106-why-the-centralizer-is-just-the-cartan-subalgebra"></a>
## Why the centralizer is just the Cartan subalgebra {#section-108-why-the-centralizer-is-just-the-cartan-subalgebra}

**Theorem 10.5.** The zero weight space equals h.

*Proof.* Take X in g-zero. Its Jordan parts commute with h:
the semisimple part of ad-X is a polynomial in ad-X,
so commutes with every ad-H. Faithfulness of ad then
makes X-s commute with every H. Since ad-X-s is
semisimple, h plus the line X-s is still toral by
simultaneous diagonalization. Maximality gives X-s in h.
On g-zero its adjoint action vanishes. Hence ad-X
restricted to g-zero equals the restriction of its
nilpotent part. Engel makes g-zero nilpotent, in particular
solvable.

Apply Lie's theorem to its adjoint action on all of g.
In a simultaneous triangular basis, derived elements act
strictly upper triangular. Their products with the
upper-triangular actions of g-zero have trace zero.
Thus K([g-zero,g-zero],g-zero)=0. Nondegeneracy of
the restriction from Lemma10.4 forces the derived
subalgebra itself to be zero, so g-zero is abelian.

For the same X, its nilpotent part X-n is in g-zero
and now commutes with every element of that space.
Simultaneously triangularize this commuting action on g.
Ad-X-n is nilpotent, so its diagonal is zero; its
product with any other such triangular action has
trace zero. Therefore K(X-n,g-zero)=0. Restricted
nondegeneracy gives X-n zero. Every X in g-zero
is consequently its semisimple part already in h.
The reverse inclusion was immediate from abelianness. ∎

This also proves h is self-normalizing. If [X,h] lies in h,
decompose X into its root components. Each nonzero root component
would contribute a nonzero multiple of itself for some H,
contradicting that inclusion. Thus X is in g-zero, namely h.
The Cartan subalgebra here is abelian, nilpotent and self-normalizing.
Conjugacy of different Cartan choices is a further structural theorem;
it is not being used without proof in this construction of one root system.

<a id="section-147-constructing-the-rank-one-triples"></a>
## Constructing the rank-one triples {#section-149-constructing-the-rank-one-triples}

The roots span the complex dual of h. Otherwise a nonzero H
annihilated by every root would commute with h and all root spaces,
making it central in g. Semisimplicity excludes that possibility.
The Killing form on h is nondegenerate by the theorem and lemma,
so for each root alpha there is a unique t-alpha in h with
K(t-alpha,H)=alpha(H).

If X is in g-alpha and Y in g-minus-alpha, invariance gives

$$[X,Y]=K(X,Y)t_\\alpha.$$

Indeed both sides are in h and pair identically with every H;
the pairing identity is K(H,[X,Y])=K([H,X],Y).
Perfect root pairing allows choosing X,Y with K(X,Y)=1.

**Lemma 10.6.** The scalar alpha(t-alpha) is nonzero.

*Proof.* Suppose it were zero. The subalgebra h plus CX plus
CY is closed under brackets, since [X,Y]=t-alpha. Its
derived algebra is contained in CX plus CY plus Ct-alpha;
the next derived term is contained in Ct-alpha; and that
line is central inside this subalgebra under the supposed
zero pairing. The algebra is solvable. Lie's theorem on
its adjoint action on g makes ad of [X,Y] nilpotent.
But [X,Y]=t-alpha belongs to h, so its adjoint action
is semisimple too. Both properties force that operator
zero, and zero center forces t-alpha zero. That
contradicts alpha nonzero by its Killing-dual definition. ∎

Define

$$H_\\alpha=\\frac{2t_\\alpha}{\\alpha(t_\\alpha)},\\qquad
E_\\alpha=X,\\qquad
F_\\alpha=\\frac{2Y}{\\alpha(t_\\alpha)}.$$

They satisfy [H-alpha,E-alpha]=2E-alpha,
[H-alpha,F-alpha]=-2F-alpha and [E-alpha,F-alpha]=H-alpha.
Their span is an sl(2) subalgebra. Applying its finite-dimensional
representation theory to the adjoint action on g is now justified.
In particular beta(H-alpha) is an integer for every root beta.

<a id="section-190-one-dimensional-root-spaces-and-reducedness"></a>
## One-dimensional root spaces and reducedness {#section-192-one-dimensional-root-spaces-and-reducedness}

**Theorem 10.7.** Every root space is one-dimensional, and the only
roots proportional to alpha are alpha and minus alpha.

*Proof.* First consider the sl(2)-stable space consisting of h
and all root spaces g-k-alpha for nonzero integer k.
The H-alpha weights are the even integers 2k, with
zero space exactly h. Complete reducibility splits
this space into irreducible sl(2) modules. Every
nontrivial even-highest-weight module has a one-dimensional
zero weight, and E acts nontrivially from that zero
weight to weight two. But E-alpha acts on h with
image exactly its own line, since [E-alpha,H]
is minus alpha(H)E-alpha. That rank is one.
Thus exactly one nontrivial irreducible occurs.
The triple span itself is already the irreducible
V-two, so it must be that sole nontrivial constituent.
All other summands are trivial.

It follows that weight two has dimension one and
weights four or higher do not occur in this space.
Hence g-alpha is a line, and no integer multiple
of alpha of absolute value at least two is a root.

If beta=c alpha is any proportional root, the
integrality already proved gives 2c integral.
Applying the same statement with alpha and beta
reversed gives 2/c integral. Their product is
four, so, up to sign, c is one half, one or
two. The last and first possibilities are excluded
by the integer-double conclusion, applied to the
appropriate smaller root. Only plus or minus one
remains. ∎

No multiplicity-one root hypothesis was inserted before this argument.
It was forced by the rank of the raising map from the zero weight
space. The proof would fail if the centralizer had not first been
identified with h; an unaccounted larger zero weight space could
allow additional nontrivial sl(2) constituents.

<a id="section-231-strings-reflections-and-nonzero-brackets"></a>
## Strings, reflections and nonzero brackets {#section-233-strings-reflections-and-nonzero-brackets}

For beta not proportional to alpha, take the direct sum of the
spaces g-beta-plus-k-alpha over all integers k for which they occur.
It is stable under the alpha triple, and its weights are
beta(H-alpha)+2k. Every nonzero weight space in this module
is one-dimensional by Theorem10.7. All its weights have the
same parity, by the integrality conclusion.

Two nonzero irreducible sl(2) modules of that parity would overlap
at weight zero when even, or at weight one and minus one when odd.
They would give multiplicity at least two there. Therefore the
string module consists of exactly one irreducible. Its weights
are consecutive with step two and symmetric about zero. Translating
back to roots gives

$$\\beta-p\\alpha,\\ldots,\\beta+q\\alpha,
\\qquad p-q=\\beta(H_\\alpha).$$

It also proves the reflection formula beta to beta minus
beta(H-alpha)alpha permutes roots. The raising operator is
nonzero at every position before the top of a nontrivial
chain. Consequently, if alpha plus beta is a root, the
bracket of their two root lines is the nonzero line
g-alpha-plus-beta. The opposing-root bracket is the nonzero
coroot line already computed. There is no assertion that
the bracket is nonzero when their sum is neither a root
nor zero.

<a id="section-260-the-positive-real-root-space-is-a-conclusion"></a>
## The positive real root space is a conclusion {#section-262-the-positive-real-root-space-is-a-conclusion}

Let h-real be the real span of the coroot elements H-alpha.
Every beta takes real, indeed integral, values on the spanning
coroots. For H in this real span the adjoint weight decomposition
therefore gives

$$K(H,H)=\\sum_{\\beta\\in R}\\beta(H)^2.$$

This is positive for nonzero H, since roots span h's dual.
It is a real positive-definite form on h-real. Moreover
h-real spans h over the complex numbers, because the
Killing-dual root vectors t-alpha do and are nonzero
scalar multiples of H-alpha. A positive real space cannot
intersect its imaginary multiple nontrivially: such a vector
would have squared Killing value both positive and the
negative of a positive value. This gives h equal to the
real direct sum of h-real and i h-real, with real dimension
of h-real equal to complex dimension of h.

Every root restricts to a real functional on h-real.
Its Killing-dual t-alpha also lies in h-real: the
positive real form gives a unique real dual vector,
and complex extension identifies it with the previously
defined dual. In particular alpha(t-alpha) is now
proved positive, not merely nonzero. Define the Euclidean
inner product on the real dual by Killing duality.
Then H-alpha corresponds exactly to the geometric
coroot twice alpha divided by its squared norm.

**Theorem 10.8 (Semisimple roots satisfy the axioms).** The restrictions
of R form a finite reduced crystallographic root system on the real
dual of h-real.

*Proof.* The roots are finite, nonzero and spanning. Restriction
is injective because h-real complexly spans h. Reducedness
is Theorem10.7. The reflection and integer pairing statements
follow from the proved sl(2) strings, with H-alpha identified
as the Euclidean coroot. The constructed form is positive
definite, so these are exactly the root-system axioms of
Chapter9, rather than formal analogues using an indefinite
complex pairing. ∎

<a id="section-303-worked-example-1-sl-3-and-its-six-root-lines"></a>
## Worked example 1: sl(3) and its six root lines {#section-305-worked-example-1-sl-3-and-its-six-root-lines}

Take h to be the complex diagonal trace-zero matrices.
They commute and act diagonally by commutator on the elementary
matrices. For i different from j, E-ij has root epsilon-i
minus epsilon-j, evaluating a diagonal H as its ith entry
minus its jth. The centralizer is exactly the diagonal
trace-zero subalgebra, agreeing with the general theorem.

The Killing form here is six times trace XY. For alpha
equal to epsilon-one minus epsilon-two, t-alpha is
one sixth of the diagonal matrix with entries one,
minus one, zero. Its alpha-value is one third.
The coroot H-alpha is consequently that diagonal
matrix itself. E-one-two and E-two-one then form
the expected sl(2) triple with it. The two simple
roots epsilon-one minus epsilon-two and epsilon-two
minus epsilon-three have the A-two Cartan integers.
The common factor six in the Killing form changes
the dual lengths but not their normalized reflection
integers.

<a id="section-325-worked-example-2-a-nonzero-root-space-bracket"></a>
## Worked example 2: a nonzero root-space bracket {#section-327-worked-example-2-a-nonzero-root-space-bracket}

In sl(3), choose alpha equal to epsilon-one minus
epsilon-two and beta equal to epsilon-two minus
epsilon-three. Multiplying matrix units gives
[E-one-two,E-two-three]=E-one-three. The sum
alpha plus beta is indeed the root epsilon-one
minus epsilon-three, and the bracket spans its line.
In contrast [E-one-two,E-one-three]=0, since
neither matrix product has a matching intermediate
index. Their root sum twice epsilon-one minus
epsilon-two minus epsilon-three is not a root.

These computations illustrate both clauses of the
general bracket rule. A root diagram records which
sums are allowed; a chosen basis of root lines
also needs nonzero structure constants when the
sum is a root. Rescaling either root vector changes
that constant, while the nonvanishing statement
and the root geometry remain unchanged.

<a id="section-346-worked-example-3-a-reducible-semisimple-algebra"></a>
## Worked example 3: a reducible semisimple algebra {#section-348-worked-example-3-a-reducible-semisimple-algebra}

For sl(2) direct sum sl(2), take the sum of their
diagonal Cartan lines. Each factor contributes its
two opposite roots, vanishing on the other factor.
The two root pairs are orthogonal under the
direct-sum Killing form, because cross adjoint
products have zero trace. The root system is
A-one together with A-one, of rank two and
four roots, not A-two with six roots.

The dimension is two from the Cartan plus four
one-dimensional root spaces, totaling six. This
matches the two three-dimensional simple ideals.
Rank alone does not determine the algebra or
the root inventory. The cross brackets vanish
because the ideals commute, so a connected
Dynkin diagram would encode the wrong interaction.
The following classification chapter keeps the
irreducible connected case separate from orthogonal
unions.

<a id="section-368-exercises-with-staged-help"></a>
## Exercises with staged help {#section-370-exercises-with-staged-help}

### Exercise 10.1: inner derivation uniqueness {#semisimple-root-decomposition-ex-1}

Why does equality of two inner derivations imply equality
of their elements in a semisimple algebra?

<details>
<summary>Hint 1</summary>

Their difference has zero adjoint action.

</details>
<details>
<summary>Hint 2</summary>

The center is zero by Killing nondegeneracy.

</details>
<details>
<summary>Solution</summary>

If ad-X equals ad-Y, then X-Y
commutes with every element and
lies in the center. The center
is contained in the radical of
the Killing form, which is zero
for a semisimple algebra. Thus
X equals Y. This injectivity
is used repeatedly to transfer
Jordan identities from operators
back to elements. Without it,
commuting adjoint operators would
only show the original bracket
is central, not necessarily zero.

</details>

### Exercise 10.2: adding generalized weights {#semisimple-root-decomposition-ex-2}

For a derivation D, explain why brackets of generalized
lambda and mu vectors have generalized weight lambda plus mu.

<details>
<summary>Hint 1</summary>

Apply D minus lambda minus mu once to their bracket.

</details>
<details>
<summary>Hint 2</summary>

Repeated applications produce a binomial sum; a high
enough power kills one factor in every term.

</details>
<details>
<summary>Solution</summary>

The derivation identity writes the
first application as the bracket
of (D-lambda)X with Y plus
the bracket of X with (D-mu)Y.
Iteration distributes the powers
between the two slots. If
p and q kill their respective
generalized vectors, a total
power at least p+q-1 makes
every term zero. Thus the
bracket has the stated generalized
weight, or is zero when that
eigenvalue is absent. This is
the reason D's semisimple part
still obeys the derivation rule.

</details>

### Exercise 10.3: opposite weight pairing {#semisimple-root-decomposition-ex-3}

Prove a nonzero root space must have a nonzero opposite
root space, and that their dimensions agree.

<details>
<summary>Hint 1</summary>

All other weight spaces are Killing-orthogonal to it.

</details>
<details>
<summary>Hint 2</summary>

Use global nondegeneracy to show both pairing kernels vanish.

</details>
<details>
<summary>Solution</summary>

If no opposite space existed,
every vector in g-alpha would
pair to zero with the whole
algebra, contradicting nondegeneracy.
More generally a vector pairing
to zero with the opposite
space pairs to zero with all
other spaces automatically, so
is zero. The same argument
in the reverse direction makes
the pairing nondegenerate on
both sides. A perfect pairing
of finite-dimensional spaces forces
equal dimensions, even before
the later multiplicity-one theorem.

</details>

### Exercise 10.4: centralizer versus maximality {#semisimple-root-decomposition-ex-4}

Explain why the semisimple part of X in the centralizer
of h lies in h, but why this alone does not prove X lies there.

<details>
<summary>Hint 1</summary>

The semisimple part commutes with h and enlarges a
toral algebra if it is not already present.

</details>
<details>
<summary>Hint 2</summary>

X can still have a nilpotent Jordan part at that stage.

</details>
<details>
<summary>Solution</summary>

Polynomial Jordan decomposition
makes ad-X-s commute with
ad of h. Zero center gives
commutation of X-s with h,
and their commuting semisimple
actions are simultaneously diagonalizable.
Maximal torality therefore puts
X-s in h. The remaining X-n
has not yet been ruled out.
The proof must show the full
centralizer is abelian and
then use restricted Killing
nondegeneracy to eliminate that
nilpotent part. Omitting those
steps would confuse maximal
toral with an already proved
self-centralizing property.

</details>

### Exercise 10.5: the coroot normalization {#semisimple-root-decomposition-ex-5}

Starting from [X,Y]=t-alpha and K(X,Y)=1, verify
all three relations of the normalized sl(2) triple.

<details>
<summary>Hint 1</summary>

The root evaluations on t-alpha control its brackets
with X and Y.

</details>
<details>
<summary>Hint 2</summary>

Scale Y and t-alpha by the same nonzero factor
two divided by alpha(t-alpha).

</details>
<details>
<summary>Solution</summary>

The normalized H-alpha evaluates
under alpha to two, so its
bracket with X is 2X and
with the scaled Y is minus
twice that scaled Y. Their
mutual bracket is the chosen
scale times t-alpha, exactly
H-alpha. The nonzero evaluation
lemma legitimizes the division.
Before that lemma, writing
these formulas would assume
the crucial nondegeneracy of
the root direction that the
solvability argument was needed
to prove.

</details>

### Exercise 10.6: rank-one multiplicity argument {#semisimple-root-decomposition-ex-6}

Why does rank one of E-alpha on the zero weight
space rule out additional nontrivial even sl(2) modules
in the alpha-multiple subspace?

<details>
<summary>Hint 1</summary>

Every nontrivial even irreducible has a zero weight
whose raising image is nonzero.

</details>
<details>
<summary>Hint 2</summary>

In a direct sum those raising images are independent.

</details>
<details>
<summary>Solution</summary>

Each such irreducible contributes
one zero-weight line, and E
maps it injectively into that
summand's weight-two line.
Different summands have independent
images, so their number cannot
exceed the rank of E on
the entire zero weight space.
That rank is one. The known
triple already supplies V-two,
so no other nontrivial even
summand remains. This establishes
one-dimensional root spaces and
excludes integer doubled roots
without assuming either conclusion.

</details>

### Exercise 10.7: proportional roots {#semisimple-root-decomposition-ex-7}

If beta=c alpha is a root, use both Cartan integers
to limit c, then use the no-double result to prove reducedness.

<details>
<summary>Hint 1</summary>

The two integers are 2c and 2/c.

</details>
<details>
<summary>Hint 2</summary>

Their product is four; consider positive c first
and restore signs afterward.

</details>
<details>
<summary>Solution</summary>

For positive c, the positive
integer factors of four give
c equal to one half, one
or two. The value two is
an excluded integer double
of alpha. The value one
half would make alpha an
excluded integer double of
beta. Hence c is one.
Negating a root gives the
negative case, leaving only
plus or minus alpha. Integrality
also makes c real, so no
extra complex proportionality
case has been overlooked.

</details>

### Exercise 10.8: why one string is one irreducible {#semisimple-root-decomposition-ex-8}

Explain the overlap obstruction preventing two
irreducibles in a nonparallel root-string module.

<details>
<summary>Hint 1</summary>

All occurring H-alpha weights differ by even integers.

</details>
<details>
<summary>Hint 2</summary>

Even irreducibles contain zero; odd ones contain
one and minus one.

</details>
<details>
<summary>Solution</summary>

Every constituent must have
the same weight parity as
the module's string. Two
even constituents would overlap
at zero; two odd constituents
would overlap at one and
minus one. Such an overlap
would give weight multiplicity
at least two, whereas each
string weight corresponds to
one already proved one-dimensional
root space. Thus there is
exactly one constituent. Its
usual symmetric sl(2) ladder
then supplies both uninterrupted
string indices and the endpoint
reflection formula.

</details>

### Exercise 10.9: the positive real form {#semisimple-root-decomposition-ex-9}

Why is K positive on the real coroot span, even
though K on the complex algebra has isotropic vectors?

<details>
<summary>Hint 1</summary>

Every root takes real values on real combinations
of coroots.

</details>
<details>
<summary>Hint 2</summary>

Use the trace formula as a sum of squares, with
roots spanning the dual.

</details>
<details>
<summary>Solution</summary>

On this real span, each
root evaluation is real,
so K(H,H) is the sum
of their ordinary real
squares. For nonzero H,
at least one is nonzero
because a common root
annihilator would be central.
Thus the sum is positive.
This argument concerns a
particular real Cartan subspace,
not the entire complex algebra.
Multiplying a vector by i
reverses its bilinear self-pairing,
so a positive-definite complex
bilinear form on the whole
complex space was never claimed.

</details>

### Exercise 10.10: sl(3) dimension {#semisimple-root-decomposition-ex-10}

Use the diagonal Cartan and elementary root spaces
to compute the rank and dimension of sl(3).

<details>
<summary>Hint 1</summary>

Trace-zero diagonal matrices have two independent entries.

</details>
<details>
<summary>Hint 2</summary>

There is one root line for each ordered pair of
distinct coordinates.

</details>
<details>
<summary>Solution</summary>

The Cartan dimension is two,
so the rank is two. There
are six ordered distinct pairs
among three coordinates, hence
six elementary off-diagonal
root lines. Their direct sum
with the Cartan has dimension
eight, agreeing with nine
matrix entries minus one
trace constraint. Rank counts
Cartan directions, not all
directions or all positive
roots. The decomposition makes
these three different counts
visible simultaneously.

</details>

### Exercise 10.11: a missing root sum {#semisimple-root-decomposition-ex-11}

Compute [E-one-two,E-three-one] in sl(3) and
identify its root by adding the two input roots.

<details>
<summary>Hint 1</summary>

Use E-ij E-kl equal to delta-jk E-il.

</details>
<details>
<summary>Hint 2</summary>

Only the reversed product has a matching intermediate index.

</details>
<details>
<summary>Solution</summary>

The first product is zero,
and the reversed product is
E-three-two. Their commutator
is therefore minus E-three-two.
The root sum is epsilon-one
minus epsilon-two plus
epsilon-three minus epsilon-one,
namely epsilon-three minus
epsilon-two, exactly that
root line. The minus sign
depends on the chosen matrix-unit
normalization; the root-space
location does not. This example
also includes a negative input
root, so the sum rule is
not restricted to positive roots.

</details>

### Exercise 10.12: normalizing the Cartan {#semisimple-root-decomposition-ex-12}

Show directly from the weight decomposition that
an element normalizing h lies in h.

<details>
<summary>Hint 1</summary>

Decompose the element into its h component and
its nonzero root components.

</details>
<details>
<summary>Hint 2</summary>

For each root component choose an H on which
that root does not vanish.

</details>
<details>
<summary>Solution</summary>

If X normalizes h, every
[X,H] lies in h. But its
root-alpha component is
minus alpha(H) times the
root-alpha component of X.
For each nonzero alpha,
some H has nonzero alpha-value,
forcing that component of X
zero. Only the zero component
remains, and Theorem10.5
identifies it with h.
Thus the chosen toral subalgebra
is self-normalizing. This does
not prove conjugacy of all
Cartan choices, which would
be a separate global structural
argument.

</details>

<a id="section-846-summary-and-next-connection"></a>
## Summary and next connection {#section-848-summary-and-next-connection}

Killing nondegeneracy makes derivations inner and permits Jordan
parts inside the algebra. A maximal toral subalgebra is then
proved self-centralizing. Opposite root pairings produce sl(2)
triples; their representation theory forces root multiplicity one,
reducedness, integral strings and reflection closure. The real
coroot span supplies the positive Euclidean form required by
the root axioms. The next chapter classifies all possible finite
reduced crystallographic root systems by positive Dynkin diagrams,
including the exceptional families.

<a id="section-870-sources"></a>
## Sources {#section-872-sources}

Jordan primary decomposition is the named linear-algebra input. Humphreys and the institution-hosted Kirillov notes provide further reading.
`;export{e as default};