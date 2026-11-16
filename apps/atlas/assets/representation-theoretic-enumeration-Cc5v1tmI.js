var e=`---
parent_id: book-topics-in-combinatorics
chapter_id: representation-theoretic-enumeration
title: "Representation-Theoretic Enumeration"
level: graduate
license: CC BY-SA 4.0
---

# Representation-Theoretic Enumeration

A group action can be linearised: replace each object by a basis vector and
let the group permute that basis. Fixed-object counts become traces, orbit
counts become dimensions of invariant subspaces, and character inner products
extract integer multiplicities. For symmetric groups, cycle types translate
these traces into the power-sum language of the preceding chapter.

Prepare with finite groups, complex vector spaces and determinants, and read
[Symmetric Functions and Tableaux](symmetric-functions-tableaux.md). All groups
and vector spaces in the representation arguments are finite. The scalar
field is the complex numbers; averaging by the group order and finding an
eigenvalue in this field are used explicitly. Modular representations require
different statements and are not covered by these proofs.

## Averaging makes decomposition possible

**Definition 4.1 (Representation and character).** A representation of G on
V is a homomorphism $\\rho:G\\to\\operatorname{GL}(V)$. Its character is
$\\chi_V(g)=\\operatorname{tr}\\rho(g)$. A subspace is invariant if every
$\\rho(g)$ preserves it. A nonzero representation is irreducible if its
only invariant subspaces are zero and itself.

Characters are constant on conjugacy classes because trace is unchanged by
conjugating a matrix. They add under direct sums and multiply under tensor
products: a tensor-product basis shows that each diagonal entry is a product
of diagonal entries from the two factors. These are algebraic identities,
not statements that the underlying actions must be permutation actions.

**Theorem 4.2 (Complete reducibility over the complex numbers).** Every finite
dimensional complex representation of a finite group is a direct sum of
irreducible representations.

*Proof.* Start with any positive definite Hermitian inner product and average
it over G:

$$\\langle v,w\\rangle_G=\\frac1{|G|}
\\sum_{g\\in G}\\langle\\rho(g)v,\\rho(g)w\\rangle.$$

This remains positive definite and is G-invariant by reindexing the sum.
If W is invariant, its orthogonal complement is invariant too: for
$v\\perp W$, invariance and $\\rho(g^{-1})W=W$ give
$\\langle\\rho(g)v,w\\rangle_G=0$ for every w in W.
Thus $V=W\\oplus W^\\perp$. Split whenever a summand is reducible.
Dimensions strictly decrease in each nontrivial split, so induction terminates
in irreducible summands. ∎

With this inner product, each group matrix is unitary. Consequently
$\\chi_V(g^{-1})=\\overline{\\chi_V(g)}$.
The averaging argument uses division by $|G|$ and positive definite
complex inner products. It cannot be transferred unchanged to a field whose
characteristic divides the group order.

**Lemma 4.3 (Schur).** An intertwining map between two irreducible complex
representations is either zero or an isomorphism. Every endomorphism intertwining
an irreducible representation with itself is scalar.

*Proof.* Kernel and image are invariant, so a nonzero map has zero kernel
and full image. For an endomorphism, choose an eigenvalue lambda over the
complex numbers. The map $T-\\lambda I$ intertwines and has nonzero
kernel, so it must be zero by the first assertion. ∎

The eigenvalue step is precisely where algebraic closure enters. Over the
real numbers an irreducible representation may have a larger division algebra
of intertwining endomorphisms; a complex dimension-one conclusion cannot be
assumed there.

## A projection computes character multiplicities

**Theorem 4.4 (Character inner product).** For representations V and W,

$$\\langle\\chi_W,\\chi_V\\rangle_G
:=\\frac1{|G|}\\sum_{g\\in G}\\chi_W(g)\\overline{\\chi_V(g)}
=\\dim\\operatorname{Hom}_G(V,W).$$

*Proof.* G acts on $\\operatorname{Hom}(V,W)$ by
$T\\mapsto\\rho_W(g)T\\rho_V(g^{-1})$.
Averaging these maps gives an idempotent P: reindexing a second average leaves
it unchanged. Its image consists exactly of the intertwining maps, since
invariant elements are fixed by the average and its output is invariant.
An idempotent has eigenvalues zero and one and is a direct sum of its
kernel and image, so its trace equals its image dimension.

In matrix-unit coordinates, the trace of the map for g is
$\\chi_W(g)\\chi_V(g^{-1})$. Averaging those traces and using the
unitary identity gives the displayed formula. ∎

For irreducibles, Schur's lemma makes this inner product one for isomorphic
representations and zero otherwise. After decomposing W, its multiplicity
of an irreducible V is therefore this nonnegative integer. The squared norm
of a character is the sum of squared multiplicities. In particular, a
nonzero character of norm one is irreducible; this is a theorem with complete
reducibility behind it, not a numerical resemblance criterion.

**Worked example 4.5 (The three-letter permutation representation).** The
symmetric group $S_3$ has cycle classes identity, transposition and three-cycle,
with sizes one, three and two. Its action on three labels has character
$(3,1,0)$, counting fixed basis vectors. The constant-vector subspace is
trivial, leaving its invariant orthogonal complement with character
$\\chi=(2,0,-1)$. Its norm is $(4+3\\cdot0+2)/6=1$,
so that two-dimensional complement is irreducible. Together with trivial
character $(1,1,1)$ and sign character $(1,-1,1)$ it gives the familiar
small character table without assuming a classification theorem.

## Why all class functions are accounted for

The left regular representation has basis G, with character $|G|$ at
the identity and zero elsewhere. Every irreducible embeds in it: for a
nonzero linear functional ell on an irreducible V, map

$$v\\longmapsto\\sum_{g\\in G}\\ell(\\rho(g^{-1})v)e_g.$$

This is a nonzero intertwiner, as reindexing shows and an appropriate
v makes its identity coefficient nonzero. Its kernel is zero by irreducibility.
Thus the regular decomposition contains every irreducible type, finitely many.
The character inner product shows that a type of dimension d occurs with
multiplicity d. In particular, the sum of their squared dimensions is $|G|$.

**Theorem 4.6 (Class-function basis).** The irreducible characters form an
orthonormal basis of the complex class functions on G.

*Proof.* Orthogonality has already been proved, giving linear independence.
Let r be the number of irreducible types and k the number of conjugacy
classes. Class functions have dimension k, so $r\\le k$.
The centre of the group algebra has dimension k: an element commutes
with every group element exactly when its coefficients are constant on
conjugacy classes, so class sums form a basis.

Each central element acts as a scalar on each irreducible by Schur's
lemma, defining a linear map from the centre to $\\mathbb C^r$.
It is injective: if every scalar is zero, the element acts as zero on
the regular representation, which is a sum of irreducibles; applying it
to the identity basis vector shows the element itself is zero.
Thus $k\\le r$. Equality and the prior orthogonality prove the basis claim. ∎

**Worked example 4.7 (The regular representation of three letters).** The
three displayed irreducibles have dimensions one, one and two, whose squares
sum to six. They exhaust the group. The regular representation is one
trivial copy, one sign copy and two standard copies. Its character is
$(1,1,1)+(1,-1,1)+2(2,0,-1)=(6,0,0)$,
matching the fixed-basis computation. Multiplicity two is not an arbitrary
choice to make dimensions fit; it follows from the regular character inner
product.

## Permutation characters recover orbit counts

For a finite G-set X, the vector space with basis X has
$\\chi_X(g)=|\\operatorname{Fix}_X(g)|$: a permuted basis vector contributes
one to the trace exactly when it stays fixed. Its invariant subspace consists
of vectors with coefficients constant on each orbit, so its dimension is
the number of orbits. Taking the inner product with the trivial character
recovers Burnside's average from a projection rather than a second ad hoc
count.

**Worked example 4.8 (Binary colourings of three positions).** Permute three
positions of a binary colouring. An element with c position cycles fixes
$2^c$ colourings. The three class values are $(8,4,2)$.
The trivial multiplicity is $(8+3\\cdot4+2\\cdot2)/6=4$:
the four orbits are determined by zero, one, two or three ones.
The sign multiplicity is $(8-12+4)/6=0$, and the standard
multiplicity is $(16-4)/6=2$. Thus the eight-dimensional colouring
representation is four trivial copies plus two standard copies. These
multiplicities count linear components, not four additional object orbits.

## Symmetric-group cycle types and characteristic

A permutation of n labels has cycle type lambda, a partition of n.
If lambda has $m_r$ parts of size r, put
$z_\\lambda=\\prod_r r^{m_r}m_r!$.
The class size is $n!/z_\\lambda$: arrange labels in cycle slots,
divide by r choices of starting point in every r-cycle, and divide by
$m_r!$ orders among cycles of the same length. This is a constant-fibre
count on cycle descriptions, not unsupported division of an arbitrary action.

**Definition 4.9 (Characteristic map).** For a class function f on $S_n$,
define

$$\\operatorname{ch}(f)=\\sum_{\\lambda\\vdash n}
\\frac{f(\\lambda)}{z_\\lambda}p_\\lambda,
\\qquad p_\\lambda=\\prod_j p_{\\lambda_j}.$$

In stable degree n the power sums form a rational basis: Newton's identities
express the elementary generators through them, and the number of degree-n
products indexed by partitions equals the dimension already proved. Extend
scalars to the complex numbers and give this space the Hermitian inner
product with $\\langle p_\\lambda,p_\\mu\\rangle=
\\delta_{\\lambda\\mu}z_\\lambda$.
Class sizes immediately show that ch is an isometry from class functions
with their character inner product to this symmetric-function space.
The images of irreducible characters are consequently an orthonormal basis.

**Proposition 4.10 (Trivial and induced characteristics).** The characteristic
of the trivial $S_n$ representation is $h_n$. If U is an
$S_a$ representation and V an $S_b$ representation, then

$$\\operatorname{ch}\\operatorname{Ind}_{S_a\\times S_b}^{S_{a+b}}
(U\\otimes V)=\\operatorname{ch}(U)\\operatorname{ch}(V).$$

*Proof.* Expanding
$H(t)=\\exp(\\sum_{r\\ge1}p_rt^r/r)$ gives coefficient
$\\sum_{\\lambda\\vdash n}p_\\lambda/z_\\lambda$, proving the trivial
case. For induction, view the representation as a direct sum over subsets
of a labels, carrying a transported U on that subset and V on its
complement. A permutation contributes to the trace only on invariant subsets,
which must be unions of its cycles. For a split of cycle type lambda
into mu and nu, the choice count is
$\\prod_r\\binom{m_r(\\lambda)}{m_r(\\mu)}$, and the trace on each
summand is $\\chi_U(\\mu)\\chi_V(\\nu)$.
Dividing by $z_\\lambda$ converts that choice count into
$1/(z_\\mu z_\\nu)$. Summing all cycle splits gives exactly the product
of the two characteristic sums. ∎

In particular, permutation representations on ordered blocks of sizes lambda
have characteristic $h_\\lambda$. Jacobi–Trudi therefore expresses each Schur
function as an integer combination of such permutation characters, called
a virtual character expression. Proving the full irreducible classification
by partitions needs further structure; it is not inferred solely from the
word “virtual”. The exact induction and inner-product results above remain
valid without importing that classification.

**Proposition 4.11 (Weighted symmetric-group orbit count).** Give colour j
a variable weight $y_j$. The weighted orbit sum of q-colourings of n
positions under $S_n$ is $h_n(y_1,\\ldots,y_q)$.

*Proof.* A colouring's weight is the product of its position colours,
which is constant on each orbit. Weighted Burnside follows from the
same fixed-pair count as the unweighted version, multiplying each pair's
contribution by that orbit-constant monomial. A permutation cycle of length
r must be monochromatic in a fixed colouring, contributing
$p_r(y)=\\sum_jy_j^r$. Thus the weighted average is
$\\sum_{\\lambda\\vdash n}p_\\lambda(y)/z_\\lambda=h_n(y)$,
using the trivial characteristic identity already proved. ∎

One can also see the result directly: an orbit is determined by the
q colour multiplicities, and its monomial has those exponents. Each
nonnegative exponent vector summing to n occurs once, precisely the
definition of the complete homogeneous polynomial. The agreement checks
the labelled action, cycle-type denominators and weight specialization
against a separate object description.

This weighted argument does not say that arbitrary numerical weights are
characters of genuine representations. Instead, each fixed colour-content
class is itself a G-set and has a genuine permutation character. The
formal weighted expression packages those separate representations into a
graded sum. Character multiplicities extracted within each content therefore
remain nonnegative integers, while evaluating a variable at a negative
number can produce signed totals that no longer count objects. Retain
the formal grading until the intended specialization is stated.

For $S_3$, the standard character has characteristic
$(p_1^3-p_3)/3$. Newton's identities make
$h_2h_1-h_3=(p_1^3-p_3)/3=s_{(2,1)}$,
so the Schur connection is directly verified in this case.
The next chapters use algebraic encodings of finite families in hypergraphs
and polynomial evaluations; their dimension bounds similarly need to be
proved before they can be used as enumerative certificates.

## Worked example: the acting group changes the orbit count

Consider binary colourings of four positions on a cycle. For the cyclic
rotation group of order four, the identity fixes sixteen colourings.
Each quarter-turn has a single four-cycle and fixes two monochromatic
colourings. The half-turn has two cycles and fixes four colourings.
Burnside therefore gives six rotation orbits. This is an exact fixed-point
calculation; no assumption that all orbits have size four is involved.

If every permutation of the four positions is allowed instead, only the
number of black positions matters, giving five orbits. The extra rotation
orbit occurs at black multiplicity two: adjacent black positions and opposite
black positions cannot be rotated into each other, but an arbitrary
permutation can exchange them. Thus the same sixteen-object family does not
determine the equivalence relation.
The permutation representation and its character must name the group and
its action before any average is meaningful. Weighted content records how
many black positions occur; it does not automatically distinguish the two
cyclic arrangements within that content.

## Exercises

### Exercise 4.1
<a id="representation-theoretic-enumeration-ex-1"></a>

Prove that a character is constant on conjugacy classes.

<details><summary>Hint 1</summary>

Apply the homomorphism to $hgh^{-1}$.

</details>
<details><summary>Hint 2</summary>

Trace is invariant under conjugation by an invertible matrix.

</details>
<details><summary>Solution</summary>

$\\rho(hgh^{-1})=\\rho(h)\\rho(g)\\rho(h)^{-1}$.
The right matrix is conjugate to $\\rho(g)$ and has the same trace,
so the character values agree. This proves the class-function property
without claiming characters distinguish individual group elements.

</details>

### Exercise 4.2
<a id="representation-theoretic-enumeration-ex-2"></a>

Why is averaging the inner product still positive definite?

<details><summary>Hint 1</summary>

Every group matrix is invertible.

</details>
<details><summary>Hint 2</summary>

For nonzero v, each summand of its squared norm is positive.

</details>
<details><summary>Solution</summary>

If v is nonzero then $\\rho(g)v$ is nonzero for every g, so
each original squared norm is strictly positive. Their finite average is
positive. Sesquilinearity and Hermitian symmetry are preserved by the sum,
and reindexing by a group element proves invariance.

</details>

### Exercise 4.3
<a id="representation-theoretic-enumeration-ex-3"></a>

Show that the averaging map on any representation is an idempotent whose
image is exactly its invariant subspace.

<details><summary>Hint 1</summary>

Apply an arbitrary group element to the averaged vector.

</details>
<details><summary>Hint 2</summary>

Invariant vectors are unchanged by every summand.

</details>
<details><summary>Solution</summary>

Reindexing shows the average is invariant. If a vector was already
invariant, every summand equals it, so the average fixes it. Averaging
again therefore does nothing, proving idempotence and the stated image.
Its trace is the dimension of that image because an idempotent splits
into identity and zero on image and kernel.

</details>

### Exercise 4.4
<a id="representation-theoretic-enumeration-ex-4"></a>

Find the conjugacy-class size in $S_5$ for cycle type $(2,2,1)$.

<details><summary>Hint 1</summary>

There are two cycles of length two and one of length one.

</details>
<details><summary>Hint 2</summary>

Compute the rotational and equal-cycle ordering factors in z.

</details>
<details><summary>Solution</summary>

$z_{(2,2,1)}=2^2\\cdot2!\\cdot1=8$.
Thus the class has $5!/8=15$ elements. The two factors of two
for cycle starts and the factorial exchanging the two cycles account for
different redundancies and must both be included.

</details>

### Exercise 4.5
<a id="representation-theoretic-enumeration-ex-5"></a>

Verify the norm and pairwise orthogonality of the three $S_3$ characters
displayed in the chapter.

<details><summary>Hint 1</summary>

Weight class contributions by one, three and two.

</details>
<details><summary>Hint 2</summary>

The characters are $(1,1,1),(1,-1,1),(2,0,-1)$.

</details>
<details><summary>Solution</summary>

The norms are $(1+3+2)/6=1$ for each one-dimensional character
and $(4+0+2)/6=1$ for the standard character. Cross inner products
are $(1-3+2)/6=0$ and $(2+0-2)/6=0$ for either
one-dimensional character against standard. Thus they are orthonormal.

</details>

### Exercise 4.6
<a id="representation-theoretic-enumeration-ex-6"></a>

Compute the characteristics of the trivial and sign representations of $S_2$.

<details><summary>Hint 1</summary>

Both cycle types have z equal to two.

</details>
<details><summary>Hint 2</summary>

Their values differ only on the transposition class.

</details>
<details><summary>Solution</summary>

Trivial gives $(p_1^2+p_2)/2=h_2$ and sign gives
$(p_1^2-p_2)/2=e_2$. The equal class denominators are fixed by
cycle type, while the character value supplies the sign difference.

</details>

### Exercise 4.7
<a id="representation-theoretic-enumeration-ex-7"></a>

Decompose the permutation representation on two-element subsets of three
labels and express its characteristic through h.

<details><summary>Hint 1</summary>

Its stabilizer is $S_2\\times S_1$.

</details>
<details><summary>Hint 2</summary>

The representation is isomorphic to the action on complementary singletons.

</details>
<details><summary>Solution</summary>

Complementation identifies the action with the three-label permutation
representation, hence trivial plus standard. The induction proposition gives
characteristic $h_2h_1$. This agrees with
$h_3+s_{(2,1)}$, using Jacobi–Trudi.

</details>

### Exercise 4.8
<a id="representation-theoretic-enumeration-ex-8"></a>

For n positions coloured with q fixed colours, prove the orbit count under
$S_n$ is $\\binom{n+q-1}{n}$ for $q\\ge1$.

<details><summary>Hint 1</summary>

A permutation with c cycles fixes $q^c$ colourings.

</details>
<details><summary>Hint 2</summary>

Specialize every power sum in the trivial characteristic to q.

</details>
<details><summary>Solution</summary>

Burnside gives $\\sum_{\\lambda\\vdash n}q^{\\ell(\\lambda)}/z_\\lambda$.
Its generating series is
$\\exp(q\\sum_{r\\ge1}z^r/r)=(1-z)^{-q}$,
whose coefficient is $\\binom{n+q-1}{n}$. Combinatorially an orbit
is a colour-count vector of q nonnegative entries summing to n,
providing the same count by weak compositions.

</details>

### Exercise 4.9
<a id="representation-theoretic-enumeration-ex-9"></a>

Why does a virtual character expressed as an integer combination of
permutation characters not automatically correspond to a genuine representation?

<details><summary>Hint 1</summary>

The integer coefficients may be negative.

</details>
<details><summary>Hint 2</summary>

A genuine representation needs nonnegative multiplicities of irreducibles.

</details>
<details><summary>Solution</summary>

Formal subtraction is allowed in the virtual character group but need
not be realized by a vector space with a group action. After expansion
in irreducible characters, a genuine representation has nonnegative integer
multiplicities by complete reducibility. An arbitrary virtual expression can
have negative multiplicities, so existence or positivity requires another
argument.

</details>

### Exercise 4.10
<a id="representation-theoretic-enumeration-ex-10"></a>

Explain why the central-element map in Theorem 4.6 is injective.

<details><summary>Hint 1</summary>

Every irreducible occurs inside the regular representation.

</details>
<details><summary>Hint 2</summary>

Apply the resulting zero regular operator to the identity basis vector.

</details>
<details><summary>Solution</summary>

A central element acting by zero on every irreducible acts by zero on
their direct-sum regular representation. Left multiplication by that element
therefore kills the identity basis vector, but its image is exactly the
element itself in the group algebra. It is zero, proving injectivity.

</details>

## Summary and next connection

Averaging gives invariant inner products, complete reducibility and projections.
Their traces yield character orthogonality, integer multiplicities and orbit
counts. Cycle types turn symmetric-group class functions into power-sum
expressions, while induction becomes multiplication. Hypergraphs next encode
higher-order constraints where graph intuitions and integral relaxations must
be reconsidered.
`;export{e as default};