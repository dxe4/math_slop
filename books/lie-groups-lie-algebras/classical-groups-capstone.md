
# Capstone: Worked Classical Groups {#section-1-capstone-worked-classical-groups}

A classical-group calculation is complete only when its local algebra,
global topology and representation action agree. A dimension formula alone
cannot distinguish a compact group from a noncompact real form. A root
diagram alone cannot distinguish a simply connected group from its central
quotient. In this capstone we assemble those distinctions in three detailed
families, then use them to analyze examples that would be misleading
if treated only infinitesimally.

Read the preceding chapters on [matrix manifolds](matrix-groups-manifolds.md),
[the Lie correspondence](lie-correspondence.md),
[root decomposition](semisimple-root-decomposition.md),
[highest weights](highest-weights-weyl-character.md) and
[compact harmonic analysis](compact-groups-haar-peter-weyl.md).
All groups below use their ordinary finite-dimensional matrix topology.
The symbol Sp(n) denotes the compact quaternionic group; the real
symplectic group will always be written Sp(2n,R). Stating this convention
prevents a common ambiguity in which identical-looking notation conceals
different matrix sizes and very different geometry.

<a id="section-20-worked-example-1-special-unitary-groups"></a>
## Worked example 1: special unitary groups {#section-22-worked-example-1-special-unitary-groups}

The group SU(n) consists of unitary complex n by n matrices of
determinant one. It is closed and bounded in the real vector space
of all complex matrices, hence compact. Differentiating the defining equations
gives its real Lie algebra of skew-Hermitian trace-zero matrices. There
are n squared real parameters in a skew-Hermitian matrix and one
real trace constraint, so the dimension is n squared minus one.
Complexifying gives sl(n,C): every complex trace-zero matrix is the sum
of a skew-Hermitian trace-zero matrix and i times another such matrix,
by separating it into its Hermitian and skew-Hermitian parts.

Every special unitary matrix is an exponential of an element of
this Lie algebra. Use unitary spectral diagonalization to write it as
U diag(exp(i theta-j)) U-star. Its determinant condition says the sum
of the theta-j is an integer multiple of two pi. Change one
angle by that multiple to make the sum exactly zero, without
changing the matrix. Conjugating the diagonal matrix of i theta-j
back by U gives a skew-Hermitian trace-zero logarithm. This proves
surjectivity for this particular compact family, rather than assuming it
from the inverse-function theorem near the identity. Scaling that logarithm
also gives a path from the identity to every group element.

For completeness, SU(n) is simply connected when n is at least two.
Here is the geometric induction, with its local ingredient visible. Sending
a matrix to its first column maps SU(n) onto the unit sphere
in C-n. Over a sufficiently small neighborhood of a chosen column,
Gram–Schmidt applied to a fixed supplementary frame provides a smooth
unitary completion. Adjusting the last column's phase makes the determinant
one. Thus this map is locally a product with fiber SU(n minus
one). Local products give homotopy lifting: subdivide the parameter square
of a path homotopy into sufficiently small rectangles lying in product
neighborhoods and lift successively, preserving the already chosen boundary.
This is the same finite-subdivision principle as covering lifting, with
a fiber coordinate carried along instead of a discrete sheet.

The base sphere S-(2n minus one) is simply connected for n at
least two. One elementary proof approximates a loop uniformly by a
short-geodesic polygon, joins the loop to that polygon by its unique
short geodesics, chooses a point off the finitely many arcs, and
contracts the polygon in the stereographic Euclidean chart missing that
point. A finite union of smooth arcs cannot fill a sphere of
dimension at least two; this follows in local coordinates from covering
each arc by boxes of arbitrarily small total ambient volume. The
induction starts with SU(2) identified with S3 by the quaternion matrices.
Given a loop in SU(n), contract its image in the sphere and
lift that contraction. The remaining loop lies in the fiber and
contracts there by induction. The lift can be kept based by
using the product fiber action along the basepoint edge. This proves
the stated simply-connectedness with the bundle ingredient explained.

The center of SU(n) consists exactly of scalar matrices zeta I
with zeta to the n equal to one. To see scalarity directly,
commuting with the diagonal torus forces a central matrix to be
diagonal; commuting with determinant-one rotations in every pair of coordinates
forces all its diagonal entries equal. These rotations exist also when
n equals two. Conversely those scalar matrices clearly commute with
everything and satisfy the defining equations. Quotienting by all or part
of this finite center preserves the Lie algebra but changes the
global group and which representations descend.

For diagonal trace-zero matrices in sl(n,C), the matrix unit E-ij
has root epsilon-i minus epsilon-j. The zero space is the diagonal
Cartan subalgebra, and these off-diagonal units account for all remaining
dimensions. Consecutive differences are simple roots, so the diagram is
A-(n minus one). For SU(3), the highest-weight pair (a,b) and
the proved character formula give a particularly concrete global audit:
dimension is (a plus one)(b plus one)(a plus b plus two)
divided by two, while descent to PSU(3) requires a plus twice
b divisible by three. For instance the six-dimensional symmetric square
does not descend, whereas the eight-dimensional adjoint does. Both are
valid local sl(3) representations; their center actions decide the quotient.

<a id="section-93-worked-example-2-orthogonal-rotations-and-the-covering-"></a>
## Worked example 2: orthogonal rotations and the covering obstruction {#section-95-worked-example-2-orthogonal-rotations-and-the-covering-}

The compact group SO(n) consists of real orthogonal determinant-one matrices.
Its Lie algebra consists of skew-symmetric matrices and has real dimension
n(n minus one) divided by two. It is connected: a rotation
in a coordinate plane can eliminate one selected off-diagonal entry
of a column while preserving its length. Repeating these plane rotations
takes the first column to the first basis vector. Induction on
the remaining orthogonal complement reduces the matrix to a diagonal
orthogonal matrix; its minus signs occur in pairs and can be
removed by rotations through pi in the corresponding planes. Each plane
rotation has a continuous angular path to the identity. Reversing the
finite sequence constructs a path for the original matrix.

The complexified root calculation is easiest in an isotropic basis.
For n equal to two r, choose a complex bilinear symmetric form
pairing u-i with v-i and with all u-u and v-v pairings
zero. A Cartan element acts by t-i on u-i and minus
t-i on v-i. The skew-form condition relates opposite matrix entries.
Operators sending u-j to u-i, together with the forced paired action
on v-i, have root epsilon-i minus epsilon-j. Operators coupling v-j
to u-i, with the compensating negative entry coupling v-i to u-j,
have root epsilon-i plus epsilon-j; their transposes give the negatives.
There are no twice-epsilon-i roots, because the skew condition forbids
the corresponding diagonal coupling. The root set is therefore plus
or minus epsilon-i plus or minus epsilon-j for distinct indices,
the D-r system for r at least four.

For n equal to two r plus one, add an orthogonal unit
vector w on which the Cartan acts by zero. Couplings between
w and u-i or v-i, with their forced skew partners, add
roots plus or minus epsilon-i. The resulting system is B-r.
The dimensions check the account: D-r has twice r times r
minus one roots plus r Cartan dimensions, giving r(2r minus one);
B-r adds twice r roots, giving r(2r plus one). The small
cases have the familiar coincidences D-two equal to two A-one components,
D-three equal to A-three, and B-one equal to A-one after scale.
These are reasons for the rank restrictions in the diagram list.

In rank one, the map SU(2) to SO(3) acts by quaternionic
conjugation on the imaginary quaternions. Chapter five proved that its
kernel is plus or minus one and that every rotation arises.
If a unit quaternion is cos(theta/2) plus a unit imaginary axis
times sin(theta/2), its action rotates by theta about that axis.
The half-angle is the global fact that an infinitesimal bracket computation
does not retain. A rotation loop from angle zero to two pi
lifts from one to minus one. It cannot contract, since a
contracting based homotopy would lift and keep the endpoint in the
discrete fiber continuously. The lift of the constant loop ends at
one, contradicting that endpoint. The loop traversed twice does lift
closed and contracts in S3; projecting the contraction proves that
its square is trivial. Together with the simply-connected cover, this
identifies the fundamental group of SO(3) as having order two.

The irreducible sl(2) module of highest integer m integrates to SU(2).
Its central element minus one acts by minus one to the m.
Thus it descends to SO(3) precisely for even m. The standard
three-dimensional rotation representation corresponds to m equal to two;
the two-dimensional spin representation corresponds to m equal to one
and cannot be an ordinary SO(3) representation. A projective or
covering-group representation has additional structure, and should not be
called a linear representation of the quotient without that qualification.

<a id="section-156-worked-example-3-symplectic-matrices-in-compact-and-rea"></a>
## Worked example 3: symplectic matrices in compact and real forms {#section-158-worked-example-3-symplectic-matrices-in-compact-and-rea}

Let J be the block matrix with upper-right block I, lower-left
block minus I and other blocks zero. The real group Sp(2n,R)
preserves the alternating form with matrix J. Differentiation gives the
condition X-transpose J plus J X equal to zero. Writing X
in four n by n blocks yields

$$X=\begin{pmatrix}A&B\\C&-A^T\end{pmatrix},
\qquad B=B^T,\quad C=C^T.$$

The real dimension is n squared plus twice n(n plus one)
divided by two, namely n(2n plus one). This group is not
compact: diag(exp t I, exp minus t I) lies in it
and is unbounded. Its infinitesimal generator diag(I,minus I) has real
eigenvalues. Compact-unitary skew-Hermitian generators instead have purely imaginary
eigenvalues, so the two real forms cannot be conflated through a
dimension agreement.

The compact group Sp(n) can be defined as the quaternionic unitary
n by n matrices, or as the complex 2n by 2n matrices
which preserve J and the standard Hermitian form. The quaternionic
identification is the same two-by-two complex encoding used for SU(2),
applied blockwise. Its Lie algebra consists of skew-Hermitian quaternionic
matrices. Each diagonal entry is a purely imaginary quaternion with
three real parameters, and each pair of off-diagonal entries is determined
by one arbitrary quaternion with four real parameters. The dimension is
three n plus twice n(n minus one), again n(2n plus one).
The group is compact because its columns have fixed unit lengths
and its defining equations are closed. It is connected: the first-column
map has unit sphere S-(4n minus one) as base and Sp(n
minus one) as fiber, with quaternionic Gram–Schmidt giving local products.
Both base and fiber are connected, starting with Sp(1) equal to
the unit quaternions, so a lifted base path followed by a
fiber path connects any matrix to the identity.

Complexifying either Lie algebra gives sp(2n,C). For the diagonal Cartan
diag(t-one through t-n, minus t-one through minus t-n), the A
blocks have roots epsilon-i minus epsilon-j. The symmetric B blocks
have roots epsilon-i plus epsilon-j, including twice epsilon-i on their
diagonal entries; the C blocks give their negatives. This is C-n.
There are twice n squared roots and n zero dimensions, agreeing
with n(2n plus one). The appearance of twice-epsilon-i, absent from
the orthogonal calculation, is forced by symmetric rather than skew-symmetric
off-diagonal blocks. This concrete difference explains the B/C arrow
reversal geometrically.

For n equal to one the symplectic block condition is trace-zero
on two by two matrices, and the group condition is determinant
one. Thus Sp(2,R) equals SL(2,R), whereas compact Sp(1) equals
SU(2). These share the complexified algebra sl(2,C), but one is
noncompact and the other compact. Root systems in this book describe
the complex semisimple algebra. Classifying real forms needs extra data;
a shared complex diagram does not settle the real group.

<a id="section-211-a-fourth-application-local-logarithms-and-global-dynami"></a>
## A fourth application: local logarithms and global dynamics {#section-213-a-fourth-application-local-logarithms-and-global-dynami}

In SL(2,R), put H equal to diag(1,minus1), J equal to
the rotation generator, and N equal to E-twelve. Their one-parameter
subgroups respectively stretch and compress two axes, rotate a plane,
and shear it. Their exponentials exhibit hyperbolic, elliptic and unipotent
behavior even though every generator has trace zero. The bracket and
determinant conditions alone do not specify the dynamics.

The matrix diag(minus two, minus one half) has determinant one
but is not a real exponential. If exp X equaled it,
X would commute with its exponential and hence preserve its two
distinct real eigenspaces. A real matrix preserving each such line
is diagonal in that real basis, so its exponential has positive
eigenvalues, a contradiction. This gives a global failure of exponential
surjectivity inside a connected matrix group. Connectedness can be shown
for SL(2,R) by polar decomposition: the positive symmetric determinant-one
factor contracts through its positive logarithm, and its SO(2) factor
contracts along its angular path. The missing exponential therefore cannot
be explained by choosing the wrong connected component.

The local inverse-function result remains intact. Every sufficiently small
neighborhood of the identity contains matrices with a unique sufficiently
small logarithm. A product of such exponentials can reach farther than
a single exponential. The Lie correspondence uses precisely that local
generation, rather than assuming that the entire group is one exponential
chart. This distinction links the final classical examples back to the
foundational proofs at the beginning of the book.

<a id="section-240-exercises-with-staged-hints-and-solutions"></a>
## Exercises with staged hints and solutions {#section-242-exercises-with-staged-hints-and-solutions}

### Exercise 14.1: a special unitary logarithm {#classical-groups-capstone-ex-1}

Find a trace-zero skew-Hermitian logarithm of diag(minus1,minus1,1) in SU(3).

<details>
<summary>Hint 1</summary>
Choose arguments for the first two entries that sum to zero.
</details>
<details>
<summary>Hint 2</summary>
Use pi and minus pi rather than pi and pi.
</details>
<details>
<summary>Solution</summary>
The diagonal matrix with entries i pi, minus i pi and
zero has trace zero and is skew-Hermitian. Exponentiating gives
the requested matrix. The principal scalar arguments pi, pi,
zero would not have trace zero; changing one angle by
two pi fixes the Lie-algebra condition without changing its exponential.
</details>

### Exercise 14.2: SU(4) dimensions {#classical-groups-capstone-ex-2}

Compute the real dimension, complexified root-system rank and number of roots for SU(4).

<details>
<summary>Hint 1</summary>
Its complexified algebra is sl(4,C).
</details>
<details>
<summary>Hint 2</summary>
Separate the trace-zero diagonal matrices from the off-diagonal matrix units.
</details>
<details>
<summary>Solution</summary>
The real dimension is fifteen. The diagonal Cartan has complex
dimension three, so the rank is three. There are twelve
off-diagonal matrix units and hence twelve roots, forming A-three.
The equation three plus twelve equals fifteen checks the decomposition;
it does not identify real and complex dimensions of one
unchanged scalar space, since complexification is involved.
</details>

### Exercise 14.3: a quotient representation {#classical-groups-capstone-ex-3}

Does the SU(3) module L(2,2) descend to PSU(3), and what is its dimension?

<details>
<summary>Hint 1</summary>
Evaluate the central exponent a plus twice b modulo three.
</details>
<details>
<summary>Hint 2</summary>
Then use the proved three-factor dimension formula.
</details>
<details>
<summary>Solution</summary>
The exponent is six, divisible by three, so the center
acts trivially and the representation descends. The dimension is
three times three times six divided by two, namely twenty-seven.
These are separate calculations: divisibility decides descent and
the character formula decides dimension. Neither conclusion follows
merely from the other.
</details>

### Exercise 14.4: a root count in SO(7) {#classical-groups-capstone-ex-4}

Find the roots and rank of the complexified algebra of SO(7), and verify its dimension.

<details>
<summary>Hint 1</summary>
Here seven equals twice three plus one.
</details>
<details>
<summary>Hint 2</summary>
Use the pair roots plus the single-coordinate roots of B-three.
</details>
<details>
<summary>Solution</summary>
The rank is three. The roots are the twelve vectors
plus or minus epsilon-i plus or minus epsilon-j with i
less than j, and the six vectors plus or minus epsilon-i.
Their eighteen root spaces plus three Cartan dimensions give
twenty-one, equal to seven times six divided by two.
The single-coordinate roots arise from the extra zero-weight coordinate.
</details>

### Exercise 14.5: a small orthogonal coincidence {#classical-groups-capstone-ex-5}

Explain why the complex root system of SO(4) is reducible.

<details>
<summary>Hint 1</summary>
Its roots are plus or minus epsilon-one plus or minus epsilon-two.
</details>
<details>
<summary>Hint 2</summary>
The lines through epsilon-one plus epsilon-two and epsilon-one minus epsilon-two are orthogonal.
</details>
<details>
<summary>Solution</summary>
Each of those orthogonal lines contains a rank-one pair of
opposite roots, and there are no others. The system is
A-one orthogonally summed with A-one. This explains the special
D-two convention. The six-dimensional complexified algebra correspondingly
has two simple three-dimensional ideals, rather than being simple
just because its defining orthogonal representation uses four coordinates.
</details>

### Exercise 14.6: spin parity {#classical-groups-capstone-ex-6}

Which SU(2) irreducibles of dimensions two, three, four and five descend to SO(3)?

<details>
<summary>Hint 1</summary>
Dimension is m plus one for highest integer m.
</details>
<details>
<summary>Hint 2</summary>
The covering kernel acts trivially exactly when m is even.
</details>
<details>
<summary>Solution</summary>
The respective highest integers are one, two, three and four.
Thus the three- and five-dimensional modules descend, while the
two- and four-dimensional modules do not. All four integrate
to SU(2). The obstruction is the action of minus one,
which is invisible to the differential at the identity but
visible to the global covering kernel.
</details>

### Exercise 14.7: the symplectic block equation {#classical-groups-capstone-ex-7}

Derive the block conditions on X from X-transpose J plus J X equal to zero.

<details>
<summary>Hint 1</summary>
Start with arbitrary blocks A,B,C,D.
</details>
<details>
<summary>Hint 2</summary>
The diagonal equations compare C with its transpose and B with its transpose.
</details>
<details>
<summary>Solution</summary>
Direct multiplication gives diagonal blocks C minus C-transpose
and B-transpose minus B, so B and C must be symmetric.
The off-diagonal equations give D equal to minus A-transpose
and its transpose counterpart. There is no symmetry restriction
on A. Counting these parameters yields n squared plus
n(n plus one), as stated.
</details>

### Exercise 14.8: the C-three diagram {#classical-groups-capstone-ex-8}

Choose simple roots for sp(6,C) and identify which last simple root is longer.

<details>
<summary>Hint 1</summary>
Use consecutive differences followed by twice the last coordinate.
</details>
<details>
<summary>Hint 2</summary>
Compare squared lengths two and four in the coordinate Euclidean form.
</details>
<details>
<summary>Solution</summary>
Take epsilon-one minus epsilon-two, epsilon-two minus epsilon-three,
and twice epsilon-three. The last has squared length four,
while the others have squared length two. The double-edge
arrow therefore points from the last vertex toward the preceding
shorter one. This is C-three and differs from B-three,
whose single-coordinate endpoint is short.
</details>

### Exercise 14.9: equal dimension, different compactness {#classical-groups-capstone-ex-9}

Compare compact Sp(2) and real Sp(4,R) by dimension and an explicit unbounded family.

<details>
<summary>Hint 1</summary>
Use n equal to two in both dimension formulas.
</details>
<details>
<summary>Hint 2</summary>
The real group contains diag(exp t,exp t,exp minus t,exp minus t).
</details>
<details>
<summary>Solution</summary>
Both real dimensions are ten. The displayed real diagonal
family preserves J and becomes unbounded, so Sp(4,R) is
noncompact. Compact Sp(2) lies in U(4), where all matrices
have bounded entries and form a closed set. The same
complexified root system and dimension do not remove this
real-form distinction.
</details>

### Exercise 14.10: a non-exponential matrix {#classical-groups-capstone-ex-10}

Show that diag(minus3,minus one third) is not exp X for any real two-by-two matrix X.

<details>
<summary>Hint 1</summary>
X always commutes with exp X, by the exponential power series.
</details>
<details>
<summary>Hint 2</summary>
A matrix commuting with this distinct-eigenvalue diagonal matrix must itself be diagonal.
</details>
<details>
<summary>Solution</summary>
Commutation forces the two off-diagonal entries of X to vanish.
Its diagonal entries are real, so their exponentials are positive.
They cannot equal the specified negative entries. The matrix
does lie in SL(2,R), since its determinant is one, making
it another concrete failure of global exponential surjectivity in
that connected group.
</details>

### Exercise 14.11: a covering loop {#classical-groups-capstone-ex-11}

Why does the two-pi rotation loop in SO(3) fail to contract, although each rotation lies on a path from the identity?

<details>
<summary>Hint 1</summary>
Lift the entire loop to SU(2), starting at one.
</details>
<details>
<summary>Hint 2</summary>
Its half-angle endpoint is minus one, and the covering fiber is discrete.
</details>
<details>
<summary>Solution</summary>
The lifted path ends at minus one. A based contraction
would lift to a homotopy whose endpoint stays in the
two-point fiber. Continuity keeps that endpoint fixed, but the
constant loop lifts with endpoint one, a contradiction. Paths
to individual elements prove connectedness, while contraction of
all based loops is the stronger simply-connected condition.
</details>

### Exercise 14.12: a complete representation audit {#classical-groups-capstone-ex-12}

A proposed three-dimensional irreducible SU(2) representation is claimed to
have no invariant Hermitian inner product and not to descend to SO(3).
Assess both claims.

<details>
<summary>Hint 1</summary>
Use compact averaging for the metric and the highest integer for descent.
</details>
<details>
<summary>Hint 2</summary>
Dimension three means highest integer two, so evaluate minus one squared.
</details>
<details>
<summary>Solution</summary>
Both claims are false. Haar averaging constructs a positive
invariant Hermitian metric on every finite-dimensional continuous compact-group
representation. The highest integer is two, so the central
minus one acts trivially and the representation descends to
SO(3). The standard real rotation representation, complexified, realizes
this module. This audit combines the compact metric theorem,
rank-one classification and the global kernel calculation.
</details>

<a id="section-508-summary"></a>
## Summary {#section-510-summary}

SU(n) combines compactness, trace-zero skew-Hermitian tangent matrices, A-type
roots and finite central quotients. Orthogonal groups yield B- and D-type
roots, while their covering kernels control spin descent. Compact and real
symplectic groups share a complex C-type algebra but differ in compactness
and infinitesimal spectrum. Explicit logarithm and covering examples show
which conclusions remain local and which require topology. The resulting
habit is portable: specify the field, form, connected group, covering kernel
and representation convention before trusting a familiar diagram or dimension.

<a id="section-525-sources"></a>
## Sources {#section-527-sources}

Hall and Bröcker–tom Dieck provide further reading on classical groups. The arguments here use the preceding chapters and the named spectral and manifold inputs.
