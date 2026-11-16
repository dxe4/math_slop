
# Matrix Groups and Examples {#section-1-matrix-groups-and-examples}

A rotation is simultaneously a geometric motion, a linear transformation and
a point in a continuously varying family. Lie theory studies the interaction
between those descriptions. Multiplication composes transformations; topology
allows limits; differentiation extracts the motion visible near the identity.
Before differentiating, however, we must specify the group and its topology
accurately. A collection of invertible matrices can be algebraically excellent
and topologically unsuitable for the matrix-group theory developed here.

Read the vector-space, linear-map, matrix and determinant chapters of
[Finite-Dimensional Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs),
and the opening chapter of
[Representation Theory of Finite Groups](#/books/representation-theory-finite-groups/representations-and-examples).
For the topological vocabulary use
[manifolds and charts](#/books/smooth-manifolds/topological-manifolds-charts).
The finite-dimensional spectral theorem is used only where explicitly named.
The group operations in this chapter are matrix multiplication and inversion;
the underlying coefficient field is always stated.

<a id="section-19-the-ambient-general-linear-group"></a>
## The ambient general linear group {#section-21-the-ambient-general-linear-group}

**Definition 1.1 (Matrix topology).** Identify real matrices with their lists
of real entries, and complex matrices with the real and imaginary parts of
their entries. Give these spaces their Euclidean topology. For estimates use
the operator norm associated with the standard Euclidean or Hermitian norm.
All norms on a finite-dimensional real vector space give the same topology.

**Definition 1.2 (General linear group).** For a positive integer n and
field K equal to the real or complex numbers, the group GL(n,K) consists of
the invertible n-by-n matrices over K. Its topology is inherited from the
matrix space. The identity matrix is written I, and the conjugate transpose
of a complex matrix A is written A*.

The determinant is a polynomial in the entries, hence continuous. Therefore
GL(n,K), the locus where the determinant is nonzero, is open. Matrix
multiplication is polynomial in two lists of entries. The adjugate formula
expresses inversion as a polynomial matrix divided by the determinant, so
inversion is continuous and indeed smooth on this open set. This establishes
a topological group without any theorem about arbitrary matrix subgroups.

A neighborhood of the identity contains many matrices that do not commute.
Nearness is a topological statement, whereas commutativity is an exact
algebraic equation. Likewise, an inverse may grow large along a sequence of
invertible matrices approaching a singular matrix. Continuity of inversion
only asserts continuity at points that remain inside its domain.

**Definition 1.3 (Closed matrix subgroup).** In this book a matrix group is
a subgroup G of GL(n,K) that is closed in GL(n,K). Closedness is relative
to the general linear group, rather than to the full matrix space.
Equivalently, if a sequence of matrices in G converges to an invertible
matrix A, then A belongs to G. A singular limit imposes no requirement.

The distinction prevents a common mistake. The positive nonzero real numbers
form a closed subgroup of GL(1,R), although they are not closed in the real
line. A sequence of positive numbers cannot converge to a negative number;
its possible missing boundary value is zero, which is outside GL(1,R).
The next chapter proves that a closed matrix subgroup has a compatible
embedded smooth-manifold structure. That result is not being assumed in
the present definition or inferred from the appearance of a defining equation.

<a id="section-60-equations-signs-and-classical-families"></a>
## Equations, signs and classical families {#section-62-equations-signs-and-classical-families}

**Proposition 1.4 (Preserved forms give closed groups).** Let B be a fixed
invertible real matrix. The set of real invertible matrices satisfying

$$A^{\mathsf T}BA=B$$

is a closed matrix subgroup. The corresponding assertion holds over the
complex numbers for the equation $A^*BA=B$.

*Proof.* The identity satisfies the equation. If A and C satisfy it, then
the expression for AC becomes C-transpose times B times C after substituting
the equation for A, and therefore equals B. Rearranging the equation for A
gives the same preservation equation for its inverse. Finally the left side
depends continuously on the entries, so the inverse image of the single
matrix B is closed. Intersecting with GL gives relative closedness. The
conjugate-transpose argument is identical, since conjugation is continuous. ∎

This proposition includes orthogonal and unitary groups. It also includes
indefinite-form and symplectic groups, whose global geometry differs sharply
from the compact examples. Preservation of some nondegenerate form does not
by itself imply compactness, connectedness or commutativity.

**Definition 1.5 (First classical groups).** The orthogonal group O(n)
satisfies $A^{\mathsf T}A=I$. Its determinant-one subgroup is SO(n).
The unitary group U(n) satisfies $A^*A=I$, and SU(n) consists of its
determinant-one elements. The special linear group SL(n,K) consists of
matrices with determinant one. The real symplectic group Sp(2n,R) preserves

$$J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix}.$$

The argument 2n in the last notation specifies the real matrix size.
Another convention writes Sp(n) for a compact quaternionic group; that is
a different group and will be identified explicitly in the capstone.
Never identify two groups merely because a shared abbreviation occurs in
different books.

Taking determinants in the orthogonal equation gives determinant squared
equal to one, so an orthogonal determinant is plus or minus one. Taking
determinants in the unitary equation gives modulus squared equal to one.
Thus the determinant maps U(n) into the unit circle, not merely into the
two real signs. The special subgroups are kernels of continuous determinant
homomorphisms and therefore closed.

**Proposition 1.6 (Compactness of the definite groups).** O(n), SO(n),
U(n) and SU(n) are compact in their matrix topologies.

*Proof.* A column of an orthogonal or unitary matrix has norm one, so
every entry has absolute value at most one. Each group is bounded in its
finite-dimensional real matrix space. The preservation equation defines a
closed subset of that whole space, and its solutions are automatically
invertible because the equation gives an inverse. The additional
determinant-one equation is closed as well. Closed bounded subsets of a
finite-dimensional Euclidean space are compact by Heine–Borel. ∎

The same proof fails for SL(n,R). For example, when n is at least two,
diagonal matrices with entries t, its reciprocal, and then ones have
determinant one for every positive t, but their norms are unbounded.
A defining polynomial equation supplies closedness, not boundedness.

<a id="section-120-worked-example-1-the-circle-as-rotations"></a>
## Worked example 1: the circle as rotations {#section-122-worked-example-1-the-circle-as-rotations}

Set

$$R(\theta)=\begin{pmatrix}\cos\theta&-\sin\theta\\
\sin\theta&\cos\theta\end{pmatrix}.$$

Multiplying two such matrices and using the angle-addition identities gives
R(theta)R(phi) equal to R(theta plus phi). Transposition changes theta to
its negative, which supplies the inverse. Every such matrix is orthogonal
with determinant one.

Conversely, the first column of a matrix in SO(2) is a unit vector, so it
has coordinates cosine theta and sine theta for some angle. A perpendicular
unit second column has two possible signs. The positive-determinant condition
selects minus sine theta, cosine theta. Thus the displayed matrices exhaust
SO(2), rather than merely providing some examples inside it.

Sending the complex number $e^{i\theta}$ to R(theta) is consequently a
continuous group isomorphism from the circle to SO(2), with continuous
inverse obtained by reading the first column as a complex number. Angles
themselves are not unique: adding a whole multiple of two pi leaves the
matrix unchanged. The circle, the rotation matrix and a chosen real angle
are three related objects, not interchangeable coordinates globally.

SO(2) is abelian because angle addition commutes. Higher rotation groups
need not be abelian. In three dimensions, rotations around different axes
can change one another's axes and fail to commute. An identity proved using
one angle must therefore not be generalized to all orthogonal matrices
without checking which feature of the two-dimensional example supplied it.

<a id="section-151-worked-example-2-the-orientation-preserving-affine-line"></a>
## Worked example 2: the orientation-preserving affine line {#section-153-worked-example-2-the-orientation-preserving-affine-line}

For a positive real a and any real b, write

$$T(a,b)=\begin{pmatrix}a&b\\0&1\end{pmatrix}.$$

Its action on a real number x is ax plus b. Composition gives

$$T(a,b)T(c,d)=T(ac,ad+b),\qquad
T(a,b)^{-1}=T(a^{-1},-a^{-1}b).$$

This proves closure under multiplication and inversion. To check relative
closedness, let these matrices converge to an invertible matrix. The bottom
row remains zero, one. The upper-left entry is nonnegative as a limit of
positive numbers, but invertibility excludes zero, so it remains positive.
The limit therefore belongs to the same family.

The parameter map from the positive half-line times the real line is a
homeomorphism onto this group: its inverse reads the upper row. Linear
interpolation of the positive parameter a with one, together with
interpolation of b with zero, stays in the parameter domain and joins each
element to the identity. Hence the group is path connected. It is not compact,
because the translation parameter is unbounded.

It is also not abelian. Scaling by two and then translating by one differs
from translating first and then scaling: the two products have translation
entries one and two in the appropriate order. The multiplication formula
records this exactly. The group is not a direct product of its scaling and
translation subgroups even though its parameter space is a Cartesian
product. A product of spaces says nothing by itself about the group law.

<a id="section-182-connected-components-and-what-the-determinant-detects"></a>
## Connected components and what the determinant detects {#section-184-connected-components-and-what-the-determinant-detects}

**Proposition 1.7 (Identity component).** In any topological group, the
connected component G-zero containing the identity is a closed normal
subgroup. Every connected component is a translate of it.

*Proof.* The inverse image of a connected set under the inversion
homeomorphism is connected. The continuous image of the product of two
connected sets under multiplication is connected. Applied to G-zero, these
observations put its inverses and products in the connected component of
the identity. Conjugation is a homeomorphism fixing the identity, so it
preserves that component and proves normality. Components are closed in
every topological space. Finally translation sends the identity component
onto the component of the translating element, since both translation and
its inverse preserve connectedness. ∎

Here we used the elementary topological theorem that a product of connected
spaces is connected. We have not identified connectedness with path
connectedness for arbitrary topological groups. Smooth manifolds will be
locally path connected, making their connected components path connected;
that additional input arrives with the manifold structure.

The determinant sign separates GL(n,R) into two nonempty open-and-closed
pieces. A continuous path cannot cross from positive to negative determinant
without passing through a zero determinant. This is an obstruction, not
yet a proof that exactly two components exist. One must still connect all
matrices having a fixed sign.

For that final step, Gram–Schmidt writes an invertible real matrix as QR,
where Q is orthogonal and R is upper triangular with positive diagonal.
The straight interpolation of R with the identity keeps its diagonal
positive and hence remains invertible. It joins the original matrix to Q.
SO(n) is path connected: rotate its first column to the first coordinate
vector in an oriented two-plane, then repeat in the perpendicular complement.
If that column is the negative coordinate vector, a half-turn in a plane
containing it supplies the first rotation. Induction reduces to SO(1),
which contains only the identity. The chosen plane rotations themselves
have continuous angle paths, so their finite product yields a path.
Multiplication by a fixed reflection gives the same conclusion in the
negative-determinant piece. Therefore GL(n,R) has exactly two components,
including when n is one.

<a id="section-224-worked-example-3-an-algebraic-subgroup-that-is-not-clos"></a>
## Worked example 3: an algebraic subgroup that is not closed {#section-226-worked-example-3-an-algebraic-subgroup-that-is-not-clos}

Fix an irrational real number alpha and consider the subgroup of the circle
generated by $e^{2\pi i\alpha}$. Its elements are the integer powers of
that one number. Distinct integers give distinct elements, since equality
would make a nonzero integer multiple of alpha integral. The subgroup is
countably infinite.

It is dense. Divide the unit interval into N equal subintervals and place
the fractional parts of zero, alpha, through N alpha into them. Two lie in
one subinterval. Their difference gives a nonzero integer multiple of alpha
within one over N of an integer. Reversing its sign if needed produces a
positive circular step delta smaller than one over N. Successive multiples
of this step, before their first passage past one, come within delta of
every point of the unit interval. Every such multiple is still an integer
multiple of alpha modulo one. Since N is arbitrary, the subgroup is dense.

It is not the whole circle, because the circle is uncountable. A proper
dense subset is not closed. This example explains why “subgroup of a matrix
group” does not automatically mean a closed matrix group under our convention.
It also cannot have a Euclidean manifold chart with the subspace topology:
positive-dimensional open Euclidean sets are uncountable, while a
zero-dimensional manifold is discrete. Density supplies elements arbitrarily
near the identity, so this subgroup is not discrete.

Giving the same abstract cyclic group the discrete topology changes the
question. It then is a zero-dimensional Lie group, but its inclusion into
the circle is no longer an embedding onto the inherited topology. The
algebraic group alone does not determine the topology needed in Lie theory.

<a id="section-254-exercises-with-staged-help"></a>
## Exercises with staged help {#section-256-exercises-with-staged-help}

### Exercise 1.1: relative closedness {#matrix-groups-examples-ex-1}

Show that the positive scalar matrices form a closed matrix subgroup of
GL(n,R), and explain why their zero limit is harmless.

<details>
<summary>Hint 1</summary>

Read the diagonal and off-diagonal entries of a convergent scalar sequence.

</details>
<details>
<summary>Hint 2</summary>

An invertible scalar matrix cannot have scalar zero. A limit of positive
real numbers cannot be negative.

</details>
<details>
<summary>Solution</summary>

Products and inverses of positive scalar matrices are positive scalar.
If a sequence of them converges, every off-diagonal entry remains zero and
every diagonal entry has the same nonnegative limit. When the limiting
matrix is invertible that scalar is strictly positive, so the limit is in
the subgroup. A sequence whose scalars decrease to zero converges in the
full matrix space, but its limit is outside GL. Relative closedness imposes
no obligation to include that singular matrix. Confusing these two ambient
spaces would incorrectly reject a legitimate matrix group.

</details>

### Exercise 1.2: determinant constraints {#matrix-groups-examples-ex-2}

Prove that the determinant maps U(n) onto the unit circle and identify its
kernel. Compare the possible determinants on O(n).

<details>
<summary>Hint 1</summary>

Take determinants in the defining preservation equation.

</details>
<details>
<summary>Hint 2</summary>

A diagonal matrix with one arbitrary unit complex entry supplies every
desired unit determinant.

</details>
<details>
<summary>Solution</summary>

The unitary equation gives the product of the determinant with its complex
conjugate equal to one, so its modulus is one. Conversely the diagonal
matrix with first entry z and all remaining entries one is unitary whenever
z has modulus one, and has determinant z. The kernel consists exactly of
the determinant-one unitary matrices, namely SU(n). For real orthogonal
matrices the same equation says the real determinant is plus or minus one.
Both signs occur, using the identity and a diagonal reflection. The real
and complex images therefore have different topologies.

</details>

### Exercise 1.3: a noncompact special linear group {#matrix-groups-examples-ex-3}

For n at least two, exhibit an unbounded sequence in SL(n,R). Explain why
closedness does not contradict this calculation.

<details>
<summary>Hint 1</summary>

Use reciprocal positive entries on the first two diagonal positions.

</details>
<details>
<summary>Hint 2</summary>

The product of all diagonal entries must stay one while an individual entry
can increase without bound.

</details>
<details>
<summary>Solution</summary>

Take diagonal matrices with first entry a positive integer k, second entry
its reciprocal, and every other entry one. Each determinant is one, but
the norm is at least k, so the sequence is unbounded. The determinant-one
equation defines a closed set in the full matrix space, and that set need
not be bounded. Heine–Borel requires both properties for compactness in
finite dimensions. There is therefore no contradiction: SL(n,R) is closed
but noncompact. For n equal to one, the special linear group is instead
the singleton containing one, so the size restriction is essential.

</details>

### Exercise 1.4: affine commutation {#matrix-groups-examples-ex-4}

Determine exactly when two affine matrices T(a,b) and T(c,d) commute.
Describe the central elements of the positive affine group.

<details>
<summary>Hint 1</summary>

The upper-left entries in the two products already agree.

</details>
<details>
<summary>Hint 2</summary>

Compare their translation entries, then require the resulting condition for
every positive c and every real d.

</details>
<details>
<summary>Solution</summary>

The two products agree exactly when ad plus b equals cb plus d, or when
$(a-1)d=(c-1)b$. A central element must satisfy this for all c and d.
Taking c equal to one and varying d forces a equal to one. Taking c
different from one then forces b equal to zero. Thus the identity is the
entire center. Special pairs can still commute: all translations commute
with one another, and all pure positive scalings commute with one another.
The criterion distinguishes these abelian subgroups from the nonabelian
whole group rather than treating noncommutativity as a property of every pair.

</details>

### Exercise 1.5: orthogonal columns {#matrix-groups-examples-ex-5}

Prove that a real square matrix with orthonormal columns is orthogonal.
Explain why a rectangular matrix with that property need not be invertible.

<details>
<summary>Hint 1</summary>

The entries of the transpose-times-matrix product are column inner products.

</details>
<details>
<summary>Hint 2</summary>

In the square case a left inverse and a right inverse coincide. A rectangular
map can instead identify a proper subspace of its target.

</details>
<details>
<summary>Solution</summary>

The column inner products give $A^{\mathsf T}A=I$. For a square matrix,
taking determinants shows its determinant is nonzero, so it is invertible
and its inverse is its transpose. It therefore belongs to O(n). For an
m-by-n matrix with m larger than n, the same equation says the associated
linear map preserves lengths and is injective, but its image has dimension
n and is a proper subspace of the m-dimensional target. There is no
two-sided inverse between these spaces. The word square in the group
definition cannot be discarded.

</details>

### Exercise 1.6: circle parametrization {#matrix-groups-examples-ex-6}

Find the kernel of the homomorphism from the additive real line to SO(2)
sending theta to R(theta). Is it a group isomorphism?

<details>
<summary>Hint 1</summary>

The identity rotation has first column one, zero.

</details>
<details>
<summary>Hint 2</summary>

Use the simultaneous equations for cosine and sine, rather than cosine alone.

</details>
<details>
<summary>Solution</summary>

The kernel consists of integer multiples of two pi: those and only those
angles have cosine one and sine zero. The map is surjective by the worked
example, but not injective, so it is not an isomorphism from the real
line. Passing to the quotient of the additive real line by this kernel
gives the circle group, which is isomorphic to SO(2). A real parameter
can therefore describe every group element while still failing to provide
a unique global coordinate. Later the exponential map will display the
same distinction between local and global information.

</details>

### Exercise 1.7: identity-component normality {#matrix-groups-examples-ex-7}

Show that conjugating a continuous path beginning at the identity produces
another such path. Deduce normality of the path component of the identity.

<details>
<summary>Hint 1</summary>

Fix a group element g and conjugate every value of the path by g.

</details>
<details>
<summary>Hint 2</summary>

Apply the same operation with the inverse of g to get equality of components.

</details>
<details>
<summary>Solution</summary>

If a path gamma begins at the identity and ends at h, the path with values
g gamma(t) g-inverse begins at the identity and ends at ghg-inverse.
Continuity follows from continuity of multiplication and inversion. Products
of identity-based paths and pointwise inverses show that their endpoints
form a subgroup. Conjugation sends that subgroup into itself, and conjugation
by the inverse sends it back, proving normality. This argument concerns
the path component. Identifying it with the connected component requires
the local path connectedness supplied by the Lie-group manifold structure.

</details>

### Exercise 1.8: conjugate groups {#matrix-groups-examples-ex-8}

Let P be invertible and G a closed matrix subgroup. Prove that PGP-inverse
is another closed matrix subgroup, and explain the change-of-basis meaning.

<details>
<summary>Hint 1</summary>

Conjugation preserves products and has inverse conjugation by P-inverse.

</details>
<details>
<summary>Hint 2</summary>

It is a homeomorphism of the ambient general linear group.

</details>
<details>
<summary>Solution</summary>

The identity and inverses are preserved under conjugation, and the product
of two conjugates is the conjugate of the product, so the image is a
subgroup. Conjugation is continuous because its two outer matrix factors
are fixed. Its inverse is conjugation by P-inverse, also continuous; hence
it maps closed subsets of GL to closed subsets. Algebraically it rewrites
the same family of linear transformations after a basis change. Orthogonality
with respect to the standard coordinate inner product may disappear, but
the transported inner product is still preserved. The represented symmetry
need not depend on its original coordinates.

</details>

### Exercise 1.9: symplectic invertibility {#matrix-groups-examples-ex-9}

Show that any real matrix satisfying A-transpose J A equal to J is
automatically invertible. Derive an explicit inverse expression.

<details>
<summary>Hint 1</summary>

Take determinants and use that J is invertible.

</details>
<details>
<summary>Hint 2</summary>

Multiply the preservation equation by J-inverse and then isolate A-inverse.

</details>
<details>
<summary>Solution</summary>

Taking determinants gives determinant of A squared times determinant of J
equal to determinant of J. The latter is nonzero, so the determinant of
A is nonzero. Rearranging the original equation gives
$A^{-1}=J^{-1}A^{\mathsf T}J$. This proves invertibility without
presupposing membership in GL and provides the inverse needed to verify
closure of the preservation family. The determinant argument at this
stage gives only the two possibilities plus or minus one. The stronger
fact that a real symplectic matrix has determinant one needs an additional
argument and must not be silently read from a squared equation.

</details>

### Exercise 1.10: complex special-unitary paths {#matrix-groups-examples-ex-10}

Using the finite-dimensional unitary spectral theorem, prove that SU(n)
is path connected. State where determinant one is used.

<details>
<summary>Hint 1</summary>

Diagonalize a unitary matrix with eigenvalues written as unit complex phases.

</details>
<details>
<summary>Hint 2</summary>

The sum of the phase angles is an integer multiple of two pi. Change one
angle by that multiple before interpolating.

</details>
<details>
<summary>Solution</summary>

Write the unitary matrix as a unitary conjugate of a diagonal phase matrix.
Determinant one says the sum of its chosen real phase angles is an integer
multiple of two pi. Subtract that multiple from one angle; the eigenvalue
is unchanged and the new angle sum is zero. Multiply every corrected angle
by t between zero and one and conjugate back using the same unitary matrix.
This is a continuous path from the identity to the given matrix. Every
intermediate determinant is one because the corrected angle sum is zero.
The spectral theorem is the named linear-algebra input; determinant one
alone would not construct this path.

</details>

### Exercise 1.11: finite subgroups {#matrix-groups-examples-ex-11}

Show that every finite subgroup of GL(n,K) is closed and discrete in its
subspace topology. What dimension should its manifold structure have?

<details>
<summary>Hint 1</summary>

Individual points are closed in a Euclidean space.

</details>
<details>
<summary>Hint 2</summary>

Around a chosen point take a ball smaller than its distance to any other
point in the finite set.

</details>
<details>
<summary>Solution</summary>

A finite union of closed singletons is closed, so the subgroup is a closed
matrix subgroup. For any one of its matrices, the finitely many distances
to the others have positive minimum, unless there are no others. A smaller
ball isolates the chosen matrix in the subgroup topology. Thus every
singleton is open and the topology is discrete. Its manifold dimension
is zero: each point has a chart to the singleton zero-dimensional Euclidean
space. Finite groups therefore fit Lie-group language, although their
tangent directions carry no information about nonidentity components.
Differentiation cannot recover their whole multiplication tables.

</details>

### Exercise 1.12: density versus equality {#matrix-groups-examples-ex-12}

Explain why the irrational cyclic subgroup in Worked example 3 has the
circle as its closure but is not equal to the circle. Why is closure a group?

<details>
<summary>Hint 1</summary>

Separate the approximation statement from the cardinality statement.

</details>
<details>
<summary>Hint 2</summary>

Approximate two closure points by subgroup sequences and use continuity of
multiplication and inversion.

</details>
<details>
<summary>Solution</summary>

Density means every circle point is a limit of subgroup elements, so the
closure is the whole circle. The subgroup itself consists of integer
powers and is countable; the circle is uncountable, so they cannot be
equal. More generally, in a metrizable topological group, limits of two
subgroup sequences can be multiplied or inverted termwise. Their limits
are the product or inverse of the original limits by continuity. The
closure therefore contains the identity and is closed under products and
inverses. Taking closure can enlarge an algebraic subgroup substantially,
while preserving its group operations.

</details>

<a id="section-641-summary-and-next-connection"></a>
## Summary and next connection {#section-643-summary-and-next-connection}

A matrix group here is a subgroup closed relative to the invertible
matrices. Form-preservation equations supply important examples, while
compactness, connectedness and commutativity need separate arguments.
The rotation circle and positive affine group show that parameter-space
geometry does not determine the multiplication law. The irrational cyclic
subgroup shows why algebra alone does not determine a suitable topology.
The next chapter constructs manifold charts for closed matrix groups and
explains how the linear directions at the identity control their local shape.

<a id="section-660-sources"></a>
## Sources {#section-662-sources}

Hall's author-hosted research notes [An Elementary Introduction to Groups and Representations](https://arxiv.org/abs/math-ph/0005032) provide further reading for the matrix-first route. The finite-dimensional spectral theorem and elementary connectedness facts are named inputs.
