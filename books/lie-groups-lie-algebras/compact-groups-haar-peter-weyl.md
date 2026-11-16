
# Compact Groups, Haar Measure and Peter–Weyl {#section-1-compact-groups-haar-measure-and-peter-weyl}

Finite-group averaging turns a representation into a unitary one. A compact
Lie group has infinitely many points, so the corresponding sum must become
an integral. We first construct that integral from manifold volume, prove
its invariance and uniqueness, and then prove the matrix-group form of
the Peter–Weyl theorem. The theorem says that irreducible matrix coefficients
are an orthogonal and complete language for square-integrable functions.
Orthogonality and completeness are separate assertions, with separate proofs.

Throughout, G is a compact matrix Lie group, possibly disconnected.
Representations are finite-dimensional continuous complex representations unless
explicitly stated otherwise. Read [The Lie Correspondence](lie-correspondence.md)
and the actual Smooth Manifolds chapter on
[orientation and integration](../smooth-manifolds/orientation-integration.md).
The approximation input is
[Stone–Weierstrass](../proof-safe-real-analysis/stone-weierstrass-approximation.md).
We use Euclidean change of variables and Fubini for finite products,
and regularity of finite smooth volume measures. These are analytic
inputs, not consequences of Schur's lemma. Below we explain how regularity
gives the particular continuous-function density needed for the L2 conclusion.

<a id="section-21-a-normalized-invariant-volume"></a>
## A normalized invariant volume {#section-23-a-normalized-invariant-volume}

Let the real dimension of G be d. Choose an ordered basis of
its tangent space at the identity and translate that basis to every
point by left multiplication. This gives a global smooth frame. Its
dual top exterior form omega is nonzero everywhere and is preserved
by every left translation. It chooses an orientation on all components
at once. Integration against its positive density therefore defines a
left-invariant measure on G. This construction also works when d is
zero: a compact zero-dimensional Lie group is finite and the density
is counting measure. A compact manifold has only finitely many components,
since its open components admit a finite subcover.

The total volume is finite by compactness and positive because any
coordinate ball has positive volume. Divide by this total and call
the resulting probability measure mu. There is no choice of a
single coordinate chart covering the group in this argument; smooth
integration uses a finite partition of unity and the usual coordinate
change formula. Left invariance follows from the globally defined form,
so the chart choices disappear from the result.

Right translation also preserves mu. To prove it, write right
translation in the left frame. Its determinant in absolute value is
the absolute determinant of Ad of the inverse group element. The
map taking g to the absolute determinant of Ad-g is a continuous
homomorphism from the compact group to the positive multiplicative real
numbers. Its image is a compact subgroup. Such a subgroup is trivial:
if it contained a number greater than one, its positive powers
would be unbounded; if it contained a number less than one,
its inverse would give the first case. Thus this determinant is
one. Right translation preserves the density, and mu is bi-invariant.
Inversion preserves it as well, either by its left/right frame derivative
or by the uniqueness argument that follows.

**Theorem 13.1 (Normalized Haar measure for compact matrix groups).**
There is a unique left-invariant Borel probability measure on G.
It is also right-invariant and invariant under inversion.

*Proof of uniqueness.* Let nu be any left-invariant Borel probability,
and let f be continuous. Integrate f(xy) against mu in x and
nu in y. Integrating first in x gives the integral of f
against mu, by right invariance of mu. Integrating first in y
gives the integral of f against nu, by left invariance of nu.
Fubini applies because the continuous integrand is bounded and both
measures are finite. The two integrals therefore agree for every
continuous f. Finite regular Borel measures on the compact metric
space G are determined by continuous functions: compact indicators can
be approximated from above by continuous functions using distance neighborhoods,
and regularity extends equality to Borel sets. Every finite Borel
measure on this compact metric space is regular, the named measure
input. Hence nu equals mu. Inversion pushes the constructed right-invariant
probability into a left-invariant one, so uniqueness also proves inversion
invariance. ∎

Compactness has entered at two distinct places: finiteness of total volume
and triviality of the positive modular multiplier. Neither argument works
unchanged for a general noncompact group. In particular translation-invariant
Lebesgue measure on the real line cannot be normalized to probability:
disjoint translates of an interval would make its total mass infinite
unless each interval had zero mass, which would give total zero.

<a id="section-82-averaging-representations-and-invariant-projections"></a>
## Averaging representations and invariant projections {#section-84-averaging-representations-and-invariant-projections}

Start with any positive Hermitian inner product on a representation V
and define a new one by integrating the old inner product of
rho(g)v with rho(g)w. It is positive definite: a nonzero v has
positive norm near the identity, so the nonnegative continuous integrand
has positive integral. Right invariance proves that the averaged inner
product is G-invariant. Thus every representation is equivalent to a
unitary representation. An invariant subspace then has invariant orthogonal
complement. Induction on dimension proves complete reducibility for compact
G. This proof does not assert complete reducibility for arbitrary
noncompact groups or for arbitrary infinite-dimensional representations.

The operator P obtained by integrating rho(g) has image in the
fixed-vector subspace: left invariance gives rho(h)P equal to P. It
is the identity on fixed vectors, hence is an idempotent projection.
In the averaged metric it is self-adjoint, since inversion preserves
mu and rho(g)-star equals rho(g-inverse). It is therefore the orthogonal
projection onto the fixed subspace. Taking traces shows that the integral
of a character is the dimension of that fixed space. These are
the direct compact analogues of the finite-group Reynolds operator.

For irreducible unitary representations pi on V and sigma on W,
average the conjugation action on Hom(W,V):

$$T(A)=\int_G\pi(g)A\sigma(g)^{-1}\,d\mu(g).$$

The result intertwines sigma with pi. Schur's lemma makes it zero
when the representations are inequivalent. When they are the same
chosen representation of dimension d, it is a scalar identity, and
trace preservation makes that scalar trace(A) divided by d. Apply
this to elementary matrix maps in orthonormal bases. The resulting
Schur orthogonality relations are

$$\int_G\pi_{ij}(g)\overline{\sigma_{kl}(g)}\,d\mu(g)
=\begin{cases}
d^{-1}\delta_{ik}\delta_{jl},&\pi=\sigma,\\
0,&\pi\not\cong\sigma.
\end{cases}$$

In the first line the two coefficient systems are those of the
same chosen representative and basis; independently changing one basis
changes the displayed deltas. Summing diagonal entries gives orthonormality
of irreducible characters. The matrix coefficients themselves require the
square-root-d normalization. A character is a special sum of coefficients,
not a replacement for all the off-diagonal functions.

<a id="section-129-the-density-proof-that-completes-peter-weyl"></a>
## The density proof that completes Peter–Weyl {#section-131-the-density-proof-that-completes-peter-weyl}

Let A be the span of all finite-dimensional representation coefficients.
Products stay in A because a product of coefficients is a coefficient
of the tensor-product representation. Complex conjugates stay in A through
the conjugate representation. Constants come from the trivial representation.
Finally A separates points: the defining embedding of the matrix group
in GL(N,C), with real groups viewed inside complex matrices, has coordinate
functions that distinguish any two different matrices. Compactness lets
us unitarize this defining representation without losing separation.

The complex Stone–Weierstrass theorem now makes A uniformly dense in
C(G,C). In the linked real theorem, conjugation closure supplies the
real algebra to which that theorem applies, and real and imaginary
parts give the complex conclusion. This is the approximation input
responsible for completeness. It is not supplied merely by writing
down pairwise orthogonality integrals.

Complete reducibility shows that A is already the span of coefficients
of irreducible representations. Indeed a matrix coefficient of a direct
sum is a linear combination of block coefficients, and changing basis
only takes further linear combinations. For this matrix-group proof one
can even restrict first to tensor products of the defining representation
and its conjugate: their coordinate polynomials form a separating conjugation-closed
algebra. No general compact-group theorem asserting a supply of faithful
finite-dimensional representations has been assumed; the matrix-group hypothesis
supplies one at the outset.

We need one more bridge to reach L2. The finite smooth volume
is regular. Given a measurable set E and positive tolerance, choose
a compact K inside E and an open U containing E whose
measure difference is small. The continuous function
distance-to-complement-U divided by the sum of that distance and distance-to-K
equals one on K, zero outside U, and lies between zero and
one; the case K empty is handled by the zero function.
Its squared L2 distance from the indicator of E is at most
the measure of U minus K. Simple functions are dense in
L2 by truncating a measurable function and then approximating its bounded
range by a finite grid. Therefore continuous functions are dense in
L2. Uniform approximation implies L2 approximation because mu has total
one. This proves completeness of the irreducible coefficient span.

**Theorem 13.2 (Peter–Weyl, compact matrix-group form).** Choose one
representative of every equivalence class of irreducible continuous unitary
representations of G, and an orthonormal basis in each representation
space. The functions square-root-d times pi-ij form a complete orthonormal
system in L2(G,mu). In addition their finite linear span is uniformly
dense in C(G,C).

The uniform statement concerns finite linear combinations chosen to approximate
a particular function. It does not say that every ordering of
the Fourier series converges uniformly. The L2 statement uses Hilbert-space
completion and gives convergence in mean square. Those two kinds of
convergence should remain distinct, just as they do for ordinary circle
Fourier series.

There are only countably many coefficient functions in the orthonormal
system. One way to see separability here is that coordinate polynomials
with rational real and imaginary coefficients form a countable uniformly
dense subset of the coordinate algebra, and hence of C(G). The
preceding density makes L2 separable. Any orthonormal set in a separable
Hilbert space is countable, by using disjoint small balls and a
countable dense set. This countability follows from the matrix setting;
it need not be assumed in order to start averaging one representation.

For f in L2 define its Fourier matrix at pi by integrating
f(g) pi(g)-star. Every entry is integrable by Cauchy–Schwarz, since
the matrix coefficients are bounded. Hilbert-space orthogonal expansion gives

$$f=\sum_{\pi} d_\pi\operatorname{tr}(\widehat f(\pi)\pi(\cdot))
\quad\hbox{in }L^2,\qquad
\|f\|_2^2=\sum_\pi d_\pi\|\widehat f(\pi)\|_{\mathrm{HS}}^2.$$

This is a theorem about functions up to equality almost everywhere.
It does not assign a pointwise value at every g to an
arbitrary L2 equivalence class. Continuous representatives, when present, have
additional meaning but still require a convergence theorem before identifying
pointwise series values.

<a id="section-208-three-worked-compact-examples"></a>
## Three worked compact examples {#section-210-three-worked-compact-examples}

**Worked example 1: the circle.** A finite-dimensional irreducible representation
of an abelian compact group is one-dimensional by Schur's lemma,
since every group operator commutes with the representation. A continuous
circle character lifts along t mapped to exp(it) to a continuous
one-parameter unitary character of the real line, hence exp(i c t)
for real c. Period two pi forces c to be an integer.
Thus the irreducibles are z to integer n. The invariant probability
is dt divided by two pi, because it is normalized and translation
invariant. Peter–Weyl becomes the completeness of the ordinary integer Fourier
exponentials, with precisely their usual normalization.

**Worked example 2: the standard SU(2) coefficient.** Write a special
unitary matrix as the quaternionic matrix Q(a,b), with the squared
moduli of a and b summing to one. Its standard representation
is irreducible: an invariant line would give a common invariant line
for its complexified sl(2), contradicting the two-dimensional rank-one ladder.
Schur orthogonality gives the integral of the squared modulus of a
equal to one half. The same holds for b, while the integral
of a times conjugate b is zero. These values also follow from
the coordinate symmetries of the normalized sphere volume on S3.
The character a plus conjugate a has squared integral one, agreeing
with irreducible character normalization rather than coefficient normalization.

**Worked example 3: disconnected O(2).** The determinant character takes
values plus one and minus one. Left multiplication by a reflection
exchanges the two components, so each component has measure one half.
The integral of the determinant character is zero, while its squared
norm is one. On the rotation component the standard complexified
two-dimensional representation splits into weights one and minus one;
a reflection exchanges the two weight lines. It is therefore irreducible
as an O(2) representation, despite reducibility on SO(2). Its character
is twice cosine theta on rotations and zero on reflections. The
half-weighted circle integral of its squared modulus is one. Compact
averaging has handled the disconnected group without discarding its extra
symmetry.

<a id="section-246-exercises-with-staged-hints-and-solutions"></a>
## Exercises with staged hints and solutions {#section-248-exercises-with-staged-hints-and-solutions}

### Exercise 13.1: a compact modular multiplier {#compact-groups-haar-peter-weyl-ex-1}

Prove that every continuous homomorphism from a compact group to the positive real numbers is trivial.

<details>
<summary>Hint 1</summary>
Its image is compact and closed under positive and negative integer powers.
</details>
<details>
<summary>Hint 2</summary>
A number greater than one has unbounded positive powers.
</details>
<details>
<summary>Solution</summary>
No image value can exceed one, because its powers would contradict
boundedness of the compact image. No value can be less than
one either, because its inverse would exceed one. Only one
remains. Applied to the absolute adjoint determinant, this proves
that the left-invariant smooth density is also right-invariant.
</details>

### Exercise 13.2: positivity after averaging {#compact-groups-haar-peter-weyl-ex-2}

Why can the averaged squared norm of a nonzero vector not vanish?

<details>
<summary>Hint 1</summary>
At the identity the original squared norm is strictly positive.
</details>
<details>
<summary>Hint 2</summary>
Continuity gives a positive lower bound on a small coordinate neighborhood.
</details>
<details>
<summary>Solution</summary>
The squared norm of rho(g)v is continuous and positive at
the identity. On some smaller neighborhood it is at least
half that positive value. The smooth Haar density gives this
neighborhood positive measure. Its contribution to the integral is
strictly positive, while the rest is nonnegative. Thus averaging
produces an inner product, rather than merely a semidefinite form.
</details>

### Exercise 13.3: a fixed-vector count {#compact-groups-haar-peter-weyl-ex-3}

For the circle representation with weights zero, zero, two and minus three, compute the integral of its character.

<details>
<summary>Hint 1</summary>
The average of a nontrivial integer circle character is zero.
</details>
<details>
<summary>Hint 2</summary>
The averaging operator keeps exactly the weight-zero lines.
</details>
<details>
<summary>Solution</summary>
The character is two plus e-to-two-it plus e-to-minus-three-it.
Its normalized circle integral is two. The fixed subspace is
exactly the two-dimensional zero-weight space, agreeing with the trace
of the averaging projection. The nonzero weights need not occur
in opposite pairs for this elementary averaging statement.
</details>

### Exercise 13.4: a coefficient norm {#compact-groups-haar-peter-weyl-ex-4}

What is the squared L2 norm of a matrix coefficient of a d-dimensional irreducible unitary representation in an orthonormal basis?

<details>
<summary>Hint 1</summary>
Use Schur orthogonality with identical row and column indices.
</details>
<details>
<summary>Hint 2</summary>
The coefficient must be multiplied by square-root-d to have norm one.
</details>
<details>
<summary>Solution</summary>
Its squared norm is one divided by d. Thus a unit
coefficient is not generally a unit vector in L2. Summing
diagonal coefficients gives a character whose squared norm is one,
since the d diagonal terms are orthogonal and each contributes
one divided by d. These are compatible normalizations.
</details>

### Exercise 13.5: tensor coefficients {#compact-groups-haar-peter-weyl-ex-5}

Show directly that a product of two representation coefficients is again a representation coefficient.

<details>
<summary>Hint 1</summary>
Use the tensor-product action on the tensor product of the two spaces.
</details>
<details>
<summary>Hint 2</summary>
Pair the tensor of two covectors with the tensor of their two acted-on vectors.
</details>
<details>
<summary>Solution</summary>
If the functions are ell(rho(g)v) and m(sigma(g)w), their product
is (ell tensor m) applied to (rho tensor sigma)(g)(v tensor
w). This proves multiplicative closure of the coefficient span.
Conjugate representations give conjugation closure separately. Both properties,
along with constants and separation, are needed for the complex
Stone–Weierstrass step.
</details>

### Exercise 13.6: why orthogonality is insufficient {#compact-groups-haar-peter-weyl-ex-6}

On the circle keep only the even Fourier characters. Are they orthonormal? Are they complete?

<details>
<summary>Hint 1</summary>
Their pairwise integrals obey the ordinary orthogonality calculation.
</details>
<details>
<summary>Hint 2</summary>
The character of weight one is orthogonal to every retained function.
</details>
<details>
<summary>Solution</summary>
They are orthonormal but not complete, since the nonzero weight-one
character lies in their orthogonal complement. They also fail to
separate z from minus z. This example identifies exactly what
the density argument adds to pairwise integral calculations: a
proof that no unobserved function direction remains.
</details>

### Exercise 13.7: from uniform to mean-square approximation {#compact-groups-haar-peter-weyl-ex-7}

Prove the L2 error is at most the uniform error for this normalized Haar measure.

<details>
<summary>Hint 1</summary>
Bound the squared pointwise error by its supremum squared.
</details>
<details>
<summary>Hint 2</summary>
The total measure is one.
</details>
<details>
<summary>Solution</summary>
Integrating the pointwise bound gives the squared L2 error at
most the squared uniform error times total mass one. Taking
square roots proves the claim. This direction is valid; the
reverse direction fails because small mean-square error permits large
errors on small sets. Peter–Weyl's L2 expansion therefore does
not by itself supply uniform convergence of its Fourier sums.
</details>

### Exercise 13.8: disconnected component masses {#compact-groups-haar-peter-weyl-ex-8}

If a compact Lie group has k components, show that every component has measure one divided by k.

<details>
<summary>Hint 1</summary>
Every component is a left coset of the identity component.
</details>
<details>
<summary>Hint 2</summary>
Left invariance makes their masses equal, and there are finitely many.
</details>
<details>
<summary>Solution</summary>
Each component has the same mass as the identity component.
They form a disjoint finite partition of total mass one,
so each mass is its reciprocal count. The identity component
is open in a Lie group, and compactness makes the component
count finite; those facts justify using an ordinary finite partition.
</details>

### Exercise 13.9: a circle Fourier matrix {#compact-groups-haar-peter-weyl-ex-9}

For f(z) equal to three z squared minus i z inverse, compute its nonzero Fourier coefficients and squared L2 norm.

<details>
<summary>Hint 1</summary>
Circle irreducibles have dimension one, so the Fourier matrices are scalars.
</details>
<details>
<summary>Hint 2</summary>
Orthogonality isolates weights two and minus one.
</details>
<details>
<summary>Solution</summary>
The coefficients are three at weight two and minus i at
weight minus one; all others vanish. Parseval gives squared
norm nine plus one, namely ten. Direct integration gives the
same result because the cross terms have nonzero frequency and
integrate to zero. No infinite-series convergence issue arises in
this finite coefficient example.
</details>

### Exercise 13.10: an O(2) invariant line {#compact-groups-haar-peter-weyl-ex-10}

Explain why neither SO(2) weight line of the standard complex two-dimensional module is O(2)-invariant.

<details>
<summary>Hint 1</summary>
A reflection conjugates a rotation through theta to one through minus theta.
</details>
<details>
<summary>Hint 2</summary>
It consequently exchanges the eigencharacters of weights one and minus one.
</details>
<details>
<summary>Solution</summary>
The reflection sends a vector transforming by e-to-i-theta to
one transforming by e-to-minus-i-theta. Hence it exchanges the two
distinct rotation weight lines. Any invariant line for the whole
group would first have to be one of those rotation lines,
but neither survives reflection. The full representation is therefore
irreducible even though its restriction is a sum of two characters.
</details>

### Exercise 13.11: uniqueness without assuming right invariance of nu {#compact-groups-haar-peter-weyl-ex-11}

Identify which invariance of each measure is used in the double-integral uniqueness proof.

<details>
<summary>Hint 1</summary>
For fixed y, the map x to xy is a right translation.
</details>
<details>
<summary>Hint 2</summary>
For fixed x, the map y to xy is a left translation.
</details>
<details>
<summary>Solution</summary>
The x integration uses right invariance of the already constructed
mu. The y integration uses only left invariance of the
candidate nu. Thus uniqueness does not assume what it is
trying to prove about nu. Once equality with mu is established,
nu inherits right and inversion invariance. The order of these
logical steps avoids a circular uniqueness argument.
</details>

### Exercise 13.12: a noncompact obstruction {#compact-groups-haar-peter-weyl-ex-12}

Why is there no translation-invariant Borel probability on the additive real line?

<details>
<summary>Hint 1</summary>
All intervals [n,n+1) have the same mass.
</details>
<details>
<summary>Hint 2</summary>
Their countable disjoint union is the whole line.
</details>
<details>
<summary>Solution</summary>
If their common mass is positive, the total mass is infinite.
If it is zero, countable additivity gives total mass zero.
Neither is one. Thus normalized compact averaging cannot be
transferred unchanged to this noncompact group. Lebesgue measure remains
translation invariant, but its infinite total mass prevents the
probability normalization used throughout the chapter.
</details>

<a id="section-507-summary"></a>
## Summary {#section-509-summary}

A left frame constructs Haar volume, compactness forces its right multiplier
to vanish, and a double integral proves uniqueness. Averaging then gives
unitarity, complete reducibility and Schur orthogonality. Tensor coefficients,
conjugates and a faithful matrix embedding provide the separating algebra
needed for Stone–Weierstrass; regularity bridges uniform density to L2 density.
Peter–Weyl follows with its precise mean-square expansion and Parseval formula.
The capstone now applies these local and global tools to classical groups.

<a id="section-523-sources"></a>
## Sources {#section-525-sources}

Bröcker–tom Dieck and Hall provide further reading. The integration and approximation inputs are named in the proofs. The argument here is restricted to matrix groups; it does not establish the corresponding theorem for every compact group.
