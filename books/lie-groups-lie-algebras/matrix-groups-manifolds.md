
# Matrix Groups as Manifolds {#section-1-matrix-groups-as-manifolds}

Equations describing a matrix group suggest dimensions, but an equation count
is not a proof of smoothness. Constraints can be redundant, singular or even
written in a way that hides their true derivatives. We need charts that identify
the actual local set with a Euclidean space and make multiplication and inversion
smooth in those charts. For familiar groups the regular-value theorem constructs
these charts efficiently. For an arbitrary closed matrix subgroup, a different
argument proves that closedness supplies the required local regularity.

Prepare with [Matrix Groups and Examples](matrix-groups-examples.md),
[differentials and the inverse-function theorem](#/books/smooth-manifolds/differentials-immersions-submersions)
and [regular-value submanifolds](#/books/smooth-manifolds/submanifolds-regular-values).
The inverse-function and regular-value theorems are the named smooth-analysis
inputs. We prove the closed-subgroup statement for real or complex matrices,
always regarding their entries as a finite-dimensional real vector space.
No infinite-dimensional or positive-characteristic analogue is asserted.

<a id="section-17-tangent-vectors-are-derivatives-of-curves"></a>
## Tangent vectors are derivatives of curves {#section-19-tangent-vectors-are-derivatives-of-curves}

**Definition 2.1 (Tangent matrix).** If G is an embedded smooth submanifold
of a matrix space and A belongs to G, a tangent vector at A is the derivative
at zero of a smooth curve in G passing through A. The tangent space is written
T-A G. Differentiation takes place entry by entry in the ambient vector space.

Left multiplication by an element A of G is a linear isomorphism of the matrix
space and restricts to a diffeomorphism of G. Its derivative sends X to AX.
Consequently every tangent space of a matrix Lie group is the left translate
of its tangent space at the identity. This does not say tangent spaces are
the same subsets of the ambient vector space; their translates can differ.

**Proposition 2.2 (Derivative of inversion).** At an invertible A, the
derivative of the inversion map in direction H is

$$D(\operatorname{inv})_A(H)=-A^{-1}HA^{-1}.$$

*Proof.* Differentiate the identity A(t) times A(t)-inverse equal to I.
The product rule gives H A-inverse plus A times the derivative of the inverse
equal to zero. Multiplying on the left by A-inverse yields the formula.
Smoothness of inversion itself was already established by the adjugate
formula, so the differentiation is legitimate. ∎

For a group, the identity is therefore the natural place to compute local
directions. Translation reconstructs the directions elsewhere. Later we
will add a bracket to that one vector space, but manifold structure and
dimension come first.

<a id="section-46-worked-example-1-determinant-one-matrices"></a>
## Worked example 1: determinant-one matrices {#section-48-worked-example-1-determinant-one-matrices}

The derivative of the determinant at I in direction X is the trace of X.
To see this directly, expand the determinant of I plus tX by permutations.
The identity permutation contributes one plus t times the diagonal sum,
up to terms of degree at least two. Every nonidentity permutation moves
at least two positions and contributes only terms of degree at least two.
The coefficient of t is therefore exactly the trace.

Factoring A from A plus tH gives the derivative at any invertible A:

$$D(\det)_A(H)=\det(A)\operatorname{tr}(A^{-1}H).$$

Over the real numbers this is a nonzero linear functional. Taking H equal
to A divided by n gives the nonzero value determinant of A. The determinant-one
level is consequently a regular hypersurface, with dimension n squared minus
one. Its tangent space at I consists of trace-zero matrices. At A it consists
of those H for which the trace of A-inverse H is zero.

Over the complex numbers, determinant is a map between real vector spaces
with two real target coordinates. Its differential is onto the complex
numbers: take H to be a complex scalar multiple of A divided by n. Thus
SL(n,C) has real codimension two, not one, and real dimension twice n squared
minus two. Its tangent space is complex trace-zero, a condition imposing
both real and imaginary trace equations. Stating the coefficient field is
therefore part of a dimension calculation rather than a cosmetic choice.

<a id="section-73-worked-example-2-orthogonal-and-unitary-constraints"></a>
## Worked example 2: orthogonal and unitary constraints {#section-75-worked-example-2-orthogonal-and-unitary-constraints}

Let F map a real square matrix A to A-transpose A, with target the real
vector space of symmetric matrices. At an orthogonal Q,

$$DF_Q(H)=Q^{\mathsf T}H+H^{\mathsf T}Q.$$

For any symmetric target S, take H equal to QS divided by two. The displayed
derivative then equals S. It is onto the correct target, whose dimension
is n times n plus one divided by two. The regular-value theorem makes O(n)
an embedded submanifold of dimension n times n minus one divided by two.
At I, its tangent space consists of skew-symmetric matrices. At Q, its
tangent matrices are QX with X skew-symmetric.

It would be wrong to treat the target as all n-by-n matrices and count n
squared independent equations: the off-diagonal equations are symmetric
duplicates. Choosing the target before computing rank avoids that error.
SO(n) is an open-and-closed part of O(n), because determinant on O(n)
has the two isolated sign values. It has the same dimension and tangent
space at the identity.

For U(n), use the map A-star A into Hermitian matrices. Hermitian n-by-n
matrices form a real vector space of dimension n squared: n real diagonal
entries and two real coordinates for each upper off-diagonal entry. The
same derivative and the choice H equal to US divided by two prove
surjectivity. U(n) consequently has real dimension n squared. Its identity
tangent matrices satisfy X-star equal to minus X.

On this tangent space the trace is purely imaginary. The differential of
the determinant map from U(n) to the unit circle is onto, using an imaginary
scalar diagonal direction. Its kernel is the trace-zero skew-Hermitian
space, so SU(n) has real dimension n squared minus one. For n equal to one
that is zero, consistent with SU(1) being the singleton identity.

<a id="section-107-the-exponential-tools-needed-for-a-general-closed-subgr"></a>
## The exponential tools needed for a general closed subgroup {#section-109-the-exponential-tools-needed-for-a-general-closed-subgr}

For a square matrix X define the exponential by its absolutely convergent
power series. A submultiplicative norm bounds its terms by the scalar
exponential series. Uniform convergence on bounded sets, together with the
same bounds for derivatives, makes it a smooth real map on the matrix space.
Its derivative at zero is the identity linear map, since all terms after
I plus X are quadratic or higher. The inverse-function theorem therefore
makes exponential a diffeomorphism between neighborhoods of zero and I.

Termwise multiplication proves exp(sX)exp(tX) equal to exp((s+t)X): here
all powers are powers of the same matrix and commute. Taking the negative
parameter proves invertibility. We do not assume the corresponding identity
for two arbitrary matrices. The next chapter studies that distinction in detail.

**Lemma 2.3 (Product approximation).** For fixed matrices X,Y and real t,

$$\left(\exp(tX/r)\exp(tY/r)\right)^r
\longrightarrow\exp(t(X+Y))\qquad(r\longrightarrow\infty).$$

*Proof.* Write h equal to t divided by r. Expanding both exponential series
shows that exp(hX)exp(hY) and exp(h(X+Y)) differ by a matrix of norm at most
C times h squared, with C independent of sufficiently large r. The series
tail bounds justify this estimate uniformly for small h. The difference
of their rth powers is a sum of r terms, obtained by replacing one factor
at a time. All surrounding product norms are bounded by a constant depending
on t, X and Y, because each factor norm is at most an exponential of a
constant times the absolute value of h. The whole difference is therefore
bounded by another constant times r h squared, which tends to zero.
The rth power of exp(h(X+Y)) is exactly exp(t(X+Y)). ∎

The limit is an exact analytic statement, not a procedure whose numerical
execution is needed to establish group membership. Relative closedness will
allow us to pass from products inside a group to their invertible limit.

<a id="section-142-the-closed-matrix-subgroup-theorem"></a>
## The closed matrix subgroup theorem {#section-144-the-closed-matrix-subgroup-theorem}

Let G be a subgroup closed in GL(n,K), and define

$$\mathfrak g=\{X:\exp(tX)\in G\text{ for every real }t\}.$$

**Lemma 2.4 (Linear exponential directions).** This set is a closed real
linear subspace of the ambient matrix space.

*Proof.* It contains zero and is closed under real scaling by changing
the parameter t. If X and Y belong to it, every product in Lemma2.3
belongs to G. Its limit is an invertible exponential, so relative
closedness puts exp(t(X+Y)) in G for every real t. This proves additivity.
Finally, if X-k in this space converge to X, then for each fixed t their
exponentials converge to exp(tX), again invertible. Closedness of G puts
that limit in G. Since t was arbitrary, X is in the space. ∎

Choose a real linear complement m to this subspace, for example its
orthogonal complement for an entrywise inner product. Consider the smooth map

$$F:\mathfrak g\times\mathfrak m\longrightarrow GL(n,K),
\qquad F(X,Y)=\exp X\exp Y.$$

Its derivative at zero is the isomorphism sending the pair to X plus Y.
The inverse-function theorem provides product neighborhoods on which F is
a diffeomorphism onto a neighborhood of I. Shrink them whenever needed;
the uniqueness of this local factorization is important.

**Lemma 2.5 (No transverse group elements near zero).** In a sufficiently
small neighborhood of zero in m, exp Y belongs to G only when Y is zero.

*Proof.* Otherwise choose nonzero Y-k in m tending to zero with exp Y-k
in G. Normalize them by their positive norms and pass to a subsequence
converging to a unit vector Y in m; the unit sphere is compact. For any
fixed real t, choose integers a-k so that a-k times the norm of Y-k
tends to t. Then a-k Y-k tends to tY. Integer powers and inverses give
exp(a-k Y-k) in G. Continuity of exponential and relative closedness imply
exp(tY) belongs to G. This holds for every t, so Y lies in g. It also
lies in the complementary space m and has norm one, a contradiction. ∎

**Theorem 2.6 (Closed matrix subgroup theorem).** Every subgroup closed
in GL(n,K) is an embedded real smooth submanifold. Its tangent space at
the identity is g, and its dimension is the real dimension of g.
Multiplication and inversion restrict to smooth group operations.

*Proof.* Use the local factorization after shrinking the transverse
neighborhood as in Lemma2.5. If A in G has factorization exp X exp Y,
then exp X belongs to G by the definition of g. Multiplying its inverse
by A puts exp Y in G, so Y is zero. Conversely every exp X for X in
the chosen g-neighborhood belongs to G. The factorization chart therefore
identifies G near I with the coordinate slice Y equal to zero.

Translate this slice by each group element to obtain embedded charts
everywhere. They agree with the ambient smooth structure because they
are restrictions of smooth ambient charts. Derivatives of the exponential
chart at zero identify the identity tangent space with g. Multiplication
and inversion are smooth on GL and carry G into itself; in embedded
slice charts their restrictions are smooth. Hausdorffness and second
countability are inherited from the finite-dimensional matrix space.
Thus these charts give the claimed smooth Lie group structure. ∎

This proves the matrix version without assuming the general theorem that
every closed subgroup of an abstract finite-dimensional Lie group is a
Lie subgroup. The latter has a similar local argument, but requires the
abstract exponential and is not used to justify this proof.

<a id="section-208-worked-example-3-global-affine-coordinates-and-a-symple"></a>
## Worked example 3: global affine coordinates and a symplectic check {#section-210-worked-example-3-global-affine-coordinates-and-a-symple}

For the positive affine group of Chapter1, set a equal to exp u.
The real pair (u,b) is a global chart, with multiplication

$$(u,b)(v,d)=(u+v,e^u d+b).$$

Its inverse is negative u paired with minus exp(-u)b, visibly smooth.
At the identity its tangent matrices have arbitrary upper row and zero
lower row. The manifold dimension is two, although the ambient real
matrix space has dimension four. This explicit chart also illustrates
why a manifold product need not produce a product group law.

For a larger classical example, consider real symplectic matrices of size
2n. Differentiate A-transpose J A into the skew-symmetric target space.
At I the derivative is X-transpose J plus JX. For any skew-symmetric
target K, choosing X equal to J-inverse K divided by two yields K,
as direct transposition shows. At a symplectic A, left translation gives
the same surjectivity. The target dimension is n times 2n minus one,
so subtraction from the ambient dimension four n squared gives the
group dimension n times 2n plus one.

Writing X in four n-by-n blocks, its infinitesimal preservation equation
forces the lower-right block to be minus the transpose of the upper-left,
while the upper-right and lower-left blocks are symmetric. Counting one
arbitrary block and two symmetric blocks gives the same dimension.
Agreement between this block calculation and the regular-value calculation
is a mathematical cross-derivation, not a substitute for the surjectivity
proof that establishes smoothness.

<a id="section-238-exercises-with-staged-help"></a>
## Exercises with staged help {#section-240-exercises-with-staged-help}

### Exercise 2.1: determinant differential {#matrix-groups-manifolds-ex-1}

Derive the determinant differential at an arbitrary invertible real A from
its differential at I, and find the tangent space of SL(n,R) at A.

<details>
<summary>Hint 1</summary>

Factor A from A plus tH before taking the determinant.

</details>
<details>
<summary>Hint 2</summary>

The tangent space to a regular level is the kernel of its differential.

</details>
<details>
<summary>Solution</summary>

Factorization gives determinant of A plus tH equal to determinant of A
times determinant of I plus t A-inverse H. Differentiation at zero gives
determinant of A times trace of A-inverse H. On the determinant-one
level, tangent vectors are therefore exactly those H with that trace zero.
Equivalently H is AX with X trace zero. This agrees with the general
left-translation description and shows that the identity trace condition
cannot simply be copied unchanged to every ambient tangent matrix.

</details>

### Exercise 2.2: orthogonal target rank {#matrix-groups-manifolds-ex-2}

Explain why A-transpose A should have symmetric matrices as its target.
Show that its differential at an orthogonal Q is onto that target.

<details>
<summary>Hint 1</summary>

Transpose the matrix A-transpose A itself.

</details>
<details>
<summary>Hint 2</summary>

For symmetric S, use a trial tangent matrix proportional to QS.

</details>
<details>
<summary>Solution</summary>

The transpose of A-transpose A is the same matrix, so the image lies
in the symmetric subspace. The differential at Q sends H to Q-transpose H
plus H-transpose Q. Given symmetric S, take H equal to QS divided by
two; both summands become S divided by two and their sum is S.
Thus the rank is the full dimension of the symmetric target. Treating
the target as all matrices would incorrectly demand surjectivity onto
skew directions the map can never produce and would double-count the
off-diagonal constraints.

</details>

### Exercise 2.3: tangent versus finite displacement {#matrix-groups-manifolds-ex-3}

For a nonzero real skew-symmetric X, explain why I plus tX generally is
not orthogonal for nonzero t, although X is tangent to O(n).

<details>
<summary>Hint 1</summary>

Multiply the transpose of I plus tX by I plus tX exactly.

</details>
<details>
<summary>Hint 2</summary>

The first-order terms cancel, but a quadratic term remains.

</details>
<details>
<summary>Solution</summary>

The product is I plus t squared X-transpose X, since the linear term
is t times X plus its transpose and vanishes. For nonzero X, the
positive semidefinite matrix X-transpose X is nonzero: some vector has
nonzero image under X. The product therefore differs from I for every
nonzero t. Tangency describes the derivative of a curve in the group,
not a whole straight line lying in the group. The exponential curve
provides the correct nonlinear path with initial derivative X.

</details>

### Exercise 2.4: real dimension of U(n) {#matrix-groups-manifolds-ex-4}

Count the real parameters in a skew-Hermitian matrix. Then impose trace
zero and compare with the dimensions of U(n) and SU(n).

<details>
<summary>Hint 1</summary>

Diagonal entries are purely imaginary; entries below the diagonal are
determined by those above it.

</details>
<details>
<summary>Hint 2</summary>

Trace zero removes one real parameter, because the trace was already imaginary.

</details>
<details>
<summary>Solution</summary>

There are n real choices for imaginary diagonal entries. Each strictly
upper-triangular entry is an arbitrary complex number, giving two real
choices, and its opposite entry is minus its conjugate. The total is
n plus n times n minus one, namely n squared. Trace zero imposes one
independent real equation on the diagonal parameters, leaving n squared
minus one. These are exactly the tangent dimensions obtained by the
regular-value argument. Calling the trace equation complex and subtracting
two more parameters would be wrong on this already skew-Hermitian space.

</details>

### Exercise 2.5: closedness of exponential directions {#matrix-groups-manifolds-ex-5}

Why does convergence of X-k to X prove closedness of g even though its
definition requires all real values of t?

<details>
<summary>Hint 1</summary>

Fix an arbitrary real parameter before passing to the limit.

</details>
<details>
<summary>Hint 2</summary>

The same limiting vector X is independent of that arbitrary choice.

</details>
<details>
<summary>Solution</summary>

For any fixed real t, continuity gives convergence of exp(t X-k) to
exp(tX). Every term belongs to G, and the limit is invertible, so
relative closedness gives membership of the limit. Since this argument
works for each arbitrarily chosen t, membership holds for all real t.
No uniform convergence in t and no single sequence covering uncountably
many parameters is required for this pointwise quantified conclusion.
The order of the statements is important: first choose t, then apply
closedness, then use its arbitrariness.

</details>

### Exercise 2.6: transverse integer powers {#matrix-groups-manifolds-ex-6}

In Lemma2.5 construct the integers a-k explicitly, including when t is
negative, and justify the limit of a-k Y-k.

<details>
<summary>Hint 1</summary>

Choose an integer nearest to t divided by the positive norm of Y-k.

</details>
<details>
<summary>Hint 2</summary>

Separate the scalar a-k times the norm from the normalized direction.

</details>
<details>
<summary>Solution</summary>

Choose a nearest integer to t divided by the norm of Y-k. Multiplying
the rounding error by that norm gives an error at most half the norm,
which tends to zero. Thus a-k times the norm tends to t, including
for negative t. The normalized matrices converge to Y, so their product
with these scalars converges to tY. Negative integers cause no group
membership problem because G contains inverses. This is why the argument
uses a subgroup rather than merely a multiplication-closed semigroup.

</details>

### Exercise 2.7: discrete groups have zero directions {#matrix-groups-manifolds-ex-7}

For a discrete closed matrix subgroup, show directly that g is zero.
What additional information about the group is absent from that tangent space?

<details>
<summary>Hint 1</summary>

The exponential curve is a continuous map from the connected real line.

</details>
<details>
<summary>Hint 2</summary>

A connected subset of a discrete space has only one point.

</details>
<details>
<summary>Solution</summary>

If X belongs to g, its exponential curve lies in the discrete group.
Its connected image must be a singleton, and its value at zero is I,
so the curve is constantly I. Differentiating at zero gives X equal
to zero. Conversely zero always belongs, proving the tangent space is
zero. It does not recover how many other group elements exist or how
they multiply. Different discrete groups can therefore have identical
zero-dimensional Lie algebras. Local infinitesimal structure is not a
classification of arbitrary disconnected groups.

</details>

### Exercise 2.8: symplectic block directions {#matrix-groups-manifolds-ex-8}

Write X in four n-by-n blocks and solve X-transpose J plus JX equal to
zero. Count the free real parameters.

<details>
<summary>Hint 1</summary>

Multiply the block matrices with J before comparing entries.

</details>
<details>
<summary>Hint 2</summary>

The diagonal blocks are related by transpose; the other two are symmetric.

</details>
<details>
<summary>Solution</summary>

Writing the blocks as A,B,C,D, the equation forces C equal to its
transpose, B equal to its transpose, and D equal to minus A-transpose.
A is arbitrary, contributing n squared parameters. Each symmetric block
contributes n times n plus one divided by two. Their sum is n times
2n plus one. This agrees with the manifold dimension. The block calculation
is a tangent calculation; smoothness of the whole level set still comes
from the surjective differential or the proved closed-subgroup theorem.

</details>

### Exercise 2.9: bad equations for a good manifold {#matrix-groups-manifolds-ex-9}

The line with second coordinate zero in the plane is also the zero set
of the square of that coordinate. Explain why the second defining function
does not make zero a regular value, and why the line remains a manifold.

<details>
<summary>Hint 1</summary>

Differentiate the squared-coordinate function on its zero level.

</details>
<details>
<summary>Hint 2</summary>

A regular-value hypothesis is sufficient, not necessary for every possible
choice of defining equations.

</details>
<details>
<summary>Solution</summary>

The derivative of the squared second coordinate is twice that coordinate
times the second-coordinate projection, hence vanishes along the line.
It is not onto the real target there. Nevertheless projection onto the
first coordinate gives a global chart for the line, and the unsquared
second coordinate has surjective derivative and defines the same level.
Failure of one regular-value calculation therefore does not prove the
set is singular. It can mean that the chosen equations fail to display
the genuine local constraints efficiently.

</details>

### Exercise 2.10: affine global coordinates {#matrix-groups-manifolds-ex-10}

Using logarithmic scaling coordinates, compute the derivative of affine
left translation at the identity. Compare it with ambient multiplication.

<details>
<summary>Hint 1</summary>

Fix (u,b) in the multiplication formula and vary (v,d) near zero.

</details>
<details>
<summary>Hint 2</summary>

The differential sends a coordinate pair to its first component and an
exp(u)-scaled second component.

</details>
<details>
<summary>Solution</summary>

Left translation sends the variable pair (v,d) to (u plus v, exp(u)d
plus b). Its derivative sends a tangent pair (s,c) to (s,exp(u)c).
In ambient matrices the identity tangent is upper row s,c and lower
row zero, while multiplication by T(exp(u),b) gives upper row exp(u)s,
exp(u)c. Converting this ambient tangent back to logarithmic scaling
coordinates divides the first entry by exp(u), producing exactly the
coordinate derivative. The apparent difference comes from chart coordinates,
not from two inconsistent notions of tangent vector.

</details>

### Exercise 2.11: uniqueness of local factors {#matrix-groups-manifolds-ex-11}

Why is an inverse-function chart for the pair (X,Y) stronger than merely
knowing that every nearby matrix can be expressed as exp X exp Y?

<details>
<summary>Hint 1</summary>

A manifold chart must have a single-valued inverse.

</details>
<details>
<summary>Hint 2</summary>

The proof identifies G with the zero transverse coordinate slice.

</details>
<details>
<summary>Solution</summary>

Existence of some factorization alone does not give continuous, unique
coordinates. Distinct factorizations could assign different transverse
coordinates to the same matrix. The inverse-function theorem provides
a neighborhood where the factors are unique and depend smoothly on the
matrix. Lemma2.5 then says precisely that a group element has transverse
coordinate zero in this actual chart. The resulting slice is an embedded
submanifold, and chart transition smoothness comes from the ambient maps.
This is why local uniqueness is part of the construction rather than
an optional refinement afterward.

</details>

### Exercise 2.12: real versus complex tangent spaces {#matrix-groups-manifolds-ex-12}

Show that the tangent space of U(1) is not closed under multiplication by
i. Explain why a real Lie subgroup of complex matrices need not be a complex
submanifold.

<details>
<summary>Hint 1</summary>

Skew-Hermitian scalars are the purely imaginary numbers.

</details>
<details>
<summary>Hint 2</summary>

Multiply the tangent scalar i by i and inspect the result.

</details>
<details>
<summary>Solution</summary>

The tangent space of U(1) consists of imaginary scalars. It contains i,
but multiplying i by i gives minus one, which is real and nonzero, so
it is not in that tangent space. The space is a real line, not a complex
linear subspace. A complex submanifold would have complex-linear tangent
spaces and even real dimension. The circle therefore supplies an immediate
counterexample to the inference that complex matrix entries force complex
manifold structure. The closed-subgroup theorem proved a real manifold,
exactly as its hypotheses and conclusion specify.

</details>

<a id="section-614-summary-and-next-connection"></a>
## Summary and next connection {#section-616-summary-and-next-connection}

Regular values construct the classical matrix-group manifolds with the
correct real target spaces and dimensions. For an arbitrary closed matrix
subgroup, exponential directions form a closed linear space; a transverse
factorization chart and normalized integer powers show that the group is
locally exactly its exponential slice. This proves its embedded smooth
structure. Tangent vectors describe infinitesimal curves rather than finite
straight displacements. The next chapter develops exponentials systematically,
classifies one-parameter subgroups and distinguishes their local coordinates
from the global topology of the group.

<a id="section-634-sources"></a>
## Sources {#section-636-sources}

Compare [Hall's author notes](https://arxiv.org/abs/math-ph/0005032). The inverse-function and regular-value theorems are explicit inputs from the linked Smooth Manifolds chapters.
