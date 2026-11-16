
# Root Systems {#section-1-root-systems}

The weight chains of sl(2) suggest reflections of weights across a midpoint.
Root systems isolate the finite Euclidean geometry that will emerge from
semisimple Lie algebras. Here they are studied independently, with all
reflection and integrality conditions included in the definition. The next
chapter proves that the roots of a complex semisimple algebra satisfy
these conditions; a diagram alone does not establish that bridge.

Use finite-dimensional real inner-product geometry, integer lattices and
the rank-one representation viewpoint of [Representations of sl(2)](sl2-representations.md).
The Euclidean space below is real and positive definite. The word reduced
excludes doubled roots, while crystallographic imposes an integer condition.
Other finite reflection geometries exist when that condition is dropped,
and they are not part of the later Dynkin classification.

<a id="section-15-the-axioms-and-their-immediate-restrictions"></a>
## The axioms and their immediate restrictions {#section-17-the-axioms-and-their-immediate-restrictions}

For a nonzero vector alpha define its coroot and reflection by

$$\alpha^\vee=\frac{2\alpha}{(\alpha,\alpha)},\qquad
s_\alpha(v)=v-(v,\alpha^\vee)\alpha.$$

This reflection fixes the orthogonal hyperplane and negates alpha.
It preserves the inner product, as direct expansion verifies.

**Definition 9.1 (Finite reduced crystallographic root system).** A
finite subset R of a finite-dimensional Euclidean space E is such a
root system when it spans E, contains no zero vector, is preserved
by every s-alpha for alpha in R, contains only alpha and minus
alpha on each root line, and satisfies

$$(\beta,\alpha^\vee)\in\mathbb Z
\quad\text{for all }\alpha,\beta\in R.$$

The empty root system is allowed only on the zero-dimensional space.
Negatives are automatic because a root's own reflection negates it.
The Weyl group W is the subgroup of orthogonal transformations generated
by these root reflections. It is finite: it permutes the finite set
R, and an orthogonal map fixing every root fixes their span, so the
permutation action is faithful.

**Lemma 9.2 (Allowed pairings).** For nonparallel roots alpha,beta,
the product of their two Cartan integers is zero, one, two or three.
If their inner product is nonzero, at least one of those integers
has absolute value one. In particular, negative inner product implies
alpha plus beta is a root, and positive inner product implies alpha
minus beta is a root.

*Proof.* The product is four times the square of the cosine of
their angle, strictly less than four for nonparallel vectors. It
is a nonnegative integer, giving the list. When nonzero, its
integer factors must include one in absolute value. If the inner
product is negative, one reflection therefore sends one root to
its sum with the other. If the inner product is positive, apply
the negative-inner-product statement to alpha and minus beta.
The resulting difference, possibly first obtained with reversed
sign, is a root because negatives are roots. ∎

This lemma does not claim that orthogonal roots cannot have a root
as their sum. In B-two, two orthogonal short coordinate roots do
have a long sum. Orthogonality only makes their two Cartan integers
zero; the neighboring root inventory contains additional information.

<a id="section-63-positive-and-simple-roots"></a>
## Positive and simple roots {#section-65-positive-and-simple-roots}

Choose a vector t with nonzero inner product against every root.
Such a vector exists because finitely many proper hyperplanes cannot
cover a real vector space. Declare roots positive when their pairing
with t is positive, and negative otherwise.

**Definition 9.3 (Simple root).** A positive root is simple when
it is not a sum of two positive roots. Write Delta for the set
of simple roots.

**Theorem 9.4 (Simple-root basis).** The simple roots form a basis
of E. Every positive root is a nonnegative integer combination of
them, and every negative root is a nonpositive integer combination.
Distinct simple roots have nonpositive inner product.

*Proof.* A positive root that is not simple decomposes into two
positive roots, each having smaller positive t-pairing. Induction
through the finite list of such pairings decomposes every positive
root into a sum of simples, with nonnegative integer coefficients.
This terminates because there are only finitely many positive roots,
not because arbitrary positive real numbers are well ordered.

If two distinct simples had positive inner product, their difference
would be a root by Lemma9.2. Its t-pairing is nonzero. Whichever
sign of that difference is positive decomposes one of the original
simples into two positive roots, a contradiction. Thus their
inner products are nonpositive.

For independence, split any real linear relation among simples
into its positive and negative coefficients, obtaining equal
vectors u and v that are nonnegative combinations of disjoint
simple subsets. Their cross inner product is nonpositive.
Since u equals v, its squared norm is nonpositive, forcing
u zero. But a nonempty positive combination has positive
t-pairing, so both sides must be empty. This proves independence.
They span because all roots are combinations of them and
the roots span E. The sign statement for negatives follows
by negation and uniqueness of coordinates in this basis. ∎

The height of a positive root is the sum of its simple-root
coefficients. It is a positive integer. Coefficients of a root
cannot have mixed signs in this basis; that useful conclusion
has now been proved, rather than built into an arbitrary drawing.

<a id="section-108-root-strings-and-simple-reflections"></a>
## Root strings and simple reflections {#section-110-root-strings-and-simple-reflections}

**Theorem 9.5 (Root strings).** If beta is not parallel to alpha,
the roots on its alpha-string are precisely

$$\beta-p\alpha,\ldots,\beta,\ldots,\beta+q\alpha$$

for nonnegative integers p,q, with

$$p-q=(\beta,\alpha^\vee).$$

*Proof.* The allowable integer indices form a finite nonempty
set containing zero. They have no gap. To see this, a root
with positive inner product against alpha can be decreased
by alpha by Lemma9.2, and one with negative inner product
can be increased. If two nonempty blocks of allowable indices
were separated by a gap, the last root of the lower block
would have nonnegative pairing with alpha, or its successor
would be forced. The first root of the upper block would
have nonpositive pairing, or its predecessor would be forced.
But those pairings strictly increase with the index. This
is impossible, so the indices are consecutive.

Reflection in alpha sends index k to minus k minus the
integer (beta,alpha-coroot). It permutes the string and
reverses its order. Therefore its two endpoints satisfy
q equal to p minus that integer, proving the formula. ∎

**Proposition 9.6.** Every root is Weyl-conjugate to a simple root
or its negative. W is generated by the simple reflections.
A simple reflection permutes all positive roots except its own,
which it sends to its negative.

*Proof.* For a positive nonsimple beta, its expansion gives
squared norm beta equal to the sum of its nonnegative
coefficients times its pairings with the simples. Some
pairing is positive. Reflect in that simple root. Its
Cartan integer is positive, so the height decreases.
The reflected root is still positive: it has an unchanged
positive coefficient on another simple root, since reducedness
rules out a nonsimple root supported on only one simple line.
Repeated height decrease reaches a simple root. Negatives
are handled by negation, and each negative simple is reflected
to its positive partner.

The same coefficient argument shows a simple reflection
keeps every other positive root positive. Finally a
reflection in w(alpha) equals w s-alpha w-inverse.
Since every root is obtained by simple-reflection words
from a simple root, all root reflections lie in the
group they generate. ∎

<a id="section-160-chambers-with-a-proved-uniqueness-statement"></a>
## Chambers with a proved uniqueness statement {#section-162-chambers-with-a-proved-uniqueness-statement}

The open dominant chamber is the cone C on which all simple-root
pairings are positive. It is nonempty: take the vector dual to
the simple basis with every such pairing one. Every positive
root is a nonnegative simple combination, so C lies on a
fixed side of every root hyperplane. It is a convex chamber
of their complement. A vector off all root hyperplanes is regular.

We need one elementary word argument. If a word w in simple
reflections sends a simple alpha-j negative, follow alpha-j through
that word from right to left. At its first sign change the
current positive root must be the simple root of the reflection
being applied, by Proposition9.6. If the suffix there is u,
then u(alpha-j) equals that simple root. Conjugating s-j
by u consequently equals that reflection. In the product
w s-j the corresponding reflection cancels with it, deleting
one letter from w. In particular, for a reduced word u s-j,
the root u(alpha-j) must be positive, or the word could be shortened.

**Theorem 9.7 (Regular dominant representatives).** Every W-orbit
of regular vectors meets C exactly once. Its stabilizer in W is trivial.

*Proof.* Fix a vector h in C. On the finite orbit of a regular
x, maximize the inner product with h. If a simple-root pairing
of that maximizer were negative, reflecting it would increase
the pairing with h. All pairings are therefore positive,
since regularity excludes zero. Thus the orbit meets C.

For uniqueness, take a nonidentity reduced word w=s-i u.
Its reversed inverse word is also reduced, so the preceding
word argument makes u-inverse(alpha-i) positive. Therefore
w-inverse(alpha-i) is negative. If x belongs to C,
the pairing of wx with alpha-i equals that of x with
this negative root and is strictly negative. Hence wx
cannot belong to C. No nonidentity element sends one
point of C to another; this proves both uniqueness
and triviality of a regular stabilizer. ∎

The closed dominant chamber also contains representatives of singular
orbits, but those representatives can have stabilizers. Nothing in
the regular statement allows dividing by the size of W indiscriminately
on a chamber wall. For later alternants, a weight fixed by a
reflection has a vanishing alternating coefficient, which handles
the wall case separately.

<a id="section-206-worked-example-1-a-two-as-coordinate-differences"></a>
## Worked example 1: A-two as coordinate differences {#section-208-worked-example-1-a-two-as-coordinate-differences}

In the plane of real triples with coordinate sum zero, take the
six roots e-i minus e-j for distinct i,j. Each has squared
length two. Reflection in such a root interchanges the two
corresponding coordinates, preserving the root set. The integer
pairings follow directly from the coordinate differences.

Choose alpha-one equal to e-one minus e-two and alpha-two equal
to e-two minus e-three. Their inner product is minus one.
The positive roots are alpha-one, alpha-two and their sum;
their negatives complete the six. The Weyl group is the
coordinate-permutation group S-three, since its two simple
reflections are adjacent transpositions. The dominant chamber
consists of triples with first coordinate larger than second
and second larger than third. A regular triple has distinct
coordinates, and sorting gives its unique dominant representative.
This explicit sorting model agrees with the general chamber theorem.

<a id="section-225-worked-example-2-b-two-and-unequal-lengths"></a>
## Worked example 2: B-two and unequal lengths {#section-227-worked-example-2-b-two-and-unequal-lengths}

In the Euclidean plane take the short roots plus or minus e-one,
plus or minus e-two, and the long roots plus or minus e-one
plus or minus e-two. There are eight roots. Sign changes
and coordinate interchange preserve this set, and each root
reflection is one such signed permutation. The simple roots
alpha equal to e-one minus e-two and beta equal to e-two
have squared lengths two and one, and inner product minus one.

Our Cartan matrix convention is row i equal to the coroot of
alpha-i, so its entries are the pairings of alpha-j with
alpha-i-coroot. In this example the off-diagonal entries are
minus one and minus two. The larger magnitude occurs in the
row of the short root beta, whose coroot is long. Positive roots are alpha, beta, alpha plus
beta and alpha plus twice beta. The beta-string through alpha
has endpoints alpha and alpha plus twice beta, with p zero
and q two, agreeing with the Cartan integer minus two.
Lengths, arrows and integer conventions must travel together.

<a id="section-245-worked-example-3-g-two-s-longer-string"></a>
## Worked example 3: G-two's longer string {#section-247-worked-example-3-g-two-s-longer-string}

In the sum-zero triple plane take short roots of the form e-i
minus e-j and long roots of the form plus or minus twice
e-i minus the other two coordinate vectors. Their squared
lengths are two and six. Choose short alpha equal to
e-one minus e-two and long beta equal to minus twice
e-one plus e-two plus e-three. Their inner product is minus
three, so their Cartan integers are minus three and minus one.

The positive roots are alpha, beta, alpha plus beta, twice
alpha plus beta, three alpha plus beta, and three alpha
plus twice beta. Reflection in alpha and beta permutes
these roots together with their negatives; this follows
by substituting the two displayed Cartan integers into
the reflection formula. Every listed short root is reached
from alpha and every long root from beta by these reflections.
Reflections in all listed roots are therefore conjugates of
the starting two and preserve the set. The simple coroots
pair integrally with the integer span of alpha,beta; transporting
by these isometries proves all the required root pairings
are integral. They supply all twelve roots.
The alpha-string through beta has four members, ending
at beta plus three alpha. Its p-minus-q is minus three,
exactly as the string theorem requires. A picture with
equal root lengths would therefore encode a different
geometry, even if it retained six apparent directions.

<a id="section-273-rank-two-lattices-and-the-weyl-vector"></a>
## Rank two, lattices and the Weyl vector {#section-275-rank-two-lattices-and-the-weyl-vector}

For two simple roots, the nonpositive Cartan integers have
product zero, one, two or three. Their Gram data therefore
match respectively an orthogonal product of two rank-one
systems, A-two, B-two or G-two. The explicit models above
realize the irreducible cases. Their simple reflections
determine every root by Proposition9.6, so the same Gram
data cannot hide additional roots. This proves the rank-two
classification up to scale on each irreducible component.

Define the root lattice Q to be the integer span of the
simples. Define the weight lattice P by integral pairing
with every coroot. It suffices to check the simple coroots:
the Weyl group is generated by their reflections, whose
action on coroots has integer matrices, so all coroots
are integer combinations of simple coroots. The fundamental
weights omega-i are the dual basis for these simple-coroot
pairings. Thus P is their integer span, and Q lies inside
P by crystallographic integrality.

Finally set rho equal to half the sum of positive roots.
A simple reflection permutes the positive roots other than
its own, which changes sign. Hence s-i rho equals rho
minus alpha-i. Comparing the reflection formula gives
rho paired with every simple coroot equal to one.
Thus rho is the sum of the fundamental weights and
lies in the open dominant chamber. This regular weight
will supply the denominator in the character formula.
The actual group-character lattice can be smaller than P
for a nonsimply connected group; the Lie-algebra lattice
does not silently choose a global group form.

<a id="section-306-exercises-with-staged-help"></a>
## Exercises with staged help {#section-308-exercises-with-staged-help}

### Exercise 9.1: allowed Cartan products {#root-systems-ex-1}

Derive the list zero, one, two, three for the product
of Cartan integers of nonparallel roots.

<details>
<summary>Hint 1</summary>

Multiply their two definitions before simplifying lengths.

</details>
<details>
<summary>Hint 2</summary>

Use strict Cauchy–Schwarz for nonparallel vectors and
the assumed integrality.

</details>
<details>
<summary>Solution</summary>

The product is four times inner product
squared divided by the product of squared
lengths, namely four cosine squared.
It is nonnegative and strictly less
than four for nonparallel roots.
Since both Cartan factors are integers,
their product is an integer and must
be one of the stated four values.
Finiteness alone would not impose
this integer restriction on arbitrary
reflection geometries; the crystallographic
axiom is doing essential work.

</details>

### Exercise 9.2: obtuse sums {#root-systems-ex-2}

Prove that two nonparallel roots with negative inner
product have a root as their sum.

<details>
<summary>Hint 1</summary>

Their two Cartan integers are negative, with product
one, two or three.

</details>
<details>
<summary>Hint 2</summary>

At least one of those integers equals minus one.

</details>
<details>
<summary>Solution</summary>

The negative integer factors of one,
two or three cannot both have
absolute value at least two.
Whichever pairing equals minus one
makes the corresponding reflection
send the other root to its sum
with that root. Reflection invariance
puts the sum in R. The proof
uses neither a classification table
nor a drawing, so it applies in
any rank to the plane spanned by
the given pair.

</details>

### Exercise 9.3: why simples are independent {#root-systems-ex-3}

Explain the positive-and-negative coefficient argument
in Theorem9.4 and identify where positive definiteness
is used.

<details>
<summary>Hint 1</summary>

Separate a relation into equal positive combinations
with disjoint supports.

</details>
<details>
<summary>Hint 2</summary>

Their cross inner product is nonpositive, but equality
of the vectors makes it a squared norm.

</details>
<details>
<summary>Solution</summary>

Write the two combinations as u and
v. Distinct simple roots have
nonpositive pairings, and the
supports are disjoint, so (u,v)
is nonpositive. Since u equals v,
this is the squared norm of u.
Positive definiteness forces u
zero. Its positive t-pairing would
be nonzero if any coefficient
were present, so all coefficients
vanish. An indefinite bilinear
form would not justify the
squared-norm conclusion and would
need a different theory.

</details>

### Exercise 9.4: a B-two string {#root-systems-ex-4}

For the B-two simple roots in Worked example2,
compute the alpha-string through beta and verify
its endpoint formula.

<details>
<summary>Hint 1</summary>

List beta plus integer multiples of alpha using
coordinate vectors.

</details>
<details>
<summary>Hint 2</summary>

Beta and beta plus alpha are short roots;
the next step is not in the root list.

</details>
<details>
<summary>Solution</summary>

Beta is e-two, and beta plus
alpha is e-one. Subtracting
alpha gives minus e-one plus
twice e-two, not a root;
adding a second alpha gives
twice e-one minus e-two,
also absent. Thus p is zero
and q is one. The Cartan
pairing of beta with alpha-coroot
is minus one, agreeing with
p minus q. Reversing which
root supplies the string direction
changes the length because the
two root lengths differ.

</details>

### Exercise 9.5: simple reflection positivity {#root-systems-ex-5}

Show that s-i sends every positive root other than
alpha-i to another positive root.

<details>
<summary>Hint 1</summary>

Its formula changes only the coefficient of alpha-i.

</details>
<details>
<summary>Hint 2</summary>

Reducedness ensures another positive coefficient
exists unless the root itself is alpha-i.

</details>
<details>
<summary>Solution</summary>

A positive root supported only
on alpha-i would be a positive
multiple of it, hence itself
by reducedness. Every other
positive root has some positive
coefficient on a different
simple root. Reflection leaves
that coefficient unchanged.
The result is a root and
cannot have all nonpositive
coefficients. The sign theorem
therefore makes it positive.
This argument proves the exact
single exception used in the
word-deletion and rho formulas.

</details>

### Exercise 9.6: a fundamental-weight calculation {#root-systems-ex-6}

Find the two fundamental weights of A-two in its
coordinate-difference model.

<details>
<summary>Hint 1</summary>

Both roots have squared length two, so coroots equal roots.

</details>
<details>
<summary>Hint 2</summary>

Solve coordinate sum zero together with the two
required coordinate differences.

</details>
<details>
<summary>Solution</summary>

The first weight is the triple
two-thirds, minus one-third,
minus one-third. Its first
coordinate difference is one
and second difference zero.
The second weight is one-third,
one-third, minus two-thirds,
giving differences zero and one.
They both lie in the sum-zero
plane and meet the duality
conditions uniquely. Their sum
is the triple one, zero,
minus one, which equals rho.
Neither fundamental weight is
itself a root of A-two.

</details>

### Exercise 9.7: the Weyl vector {#root-systems-ex-7}

Prove rho pairs to one with each simple coroot
without explicitly summing all roots in a classification.

<details>
<summary>Hint 1</summary>

A simple reflection changes the positive-root
sum only by reversing its own root.

</details>
<details>
<summary>Hint 2</summary>

Compare that change with the general reflection formula.

</details>
<details>
<summary>Solution</summary>

The simple reflection permutes
all positive roots except alpha-i,
which becomes minus alpha-i.
It therefore sends their half
sum to rho minus alpha-i.
Its reflection formula also
gives rho minus the coroot
pairing times alpha-i.
Since alpha-i is nonzero,
the coefficient is one.
Thus rho is regular dominant
and equals the sum of the
fundamental weights. This
proof works uniformly in
every finite reduced root system.

</details>

### Exercise 9.8: finite Weyl group {#root-systems-ex-8}

Explain why the action of W on the finite root
set is faithful and hence makes W finite.

<details>
<summary>Hint 1</summary>

A linear map fixing every root fixes their span.

</details>
<details>
<summary>Hint 2</summary>

Embed W into the finite permutation group of R.

</details>
<details>
<summary>Solution</summary>

Every generating reflection
permutes R, so every element
of W does. If an element
acts trivially on R, it
fixes a spanning set of E
and hence is the identity
linear map. The permutation
action is injective. Since
the permutation group of
a finite set is finite,
W is finite. Without the
spanning hypothesis a transformation
could act invisibly on an
orthogonal unused subspace,
so that hypothesis matters.

</details>

### Exercise 9.9: G-two integrality {#root-systems-ex-9}

For the displayed G-two simple roots, compute
both Cartan integers and the squared-length ratio.

<details>
<summary>Hint 1</summary>

Their dot product is minus three.

</details>
<details>
<summary>Hint 2</summary>

Divide twice that dot product by squared lengths
two and six respectively.

</details>
<details>
<summary>Solution</summary>

Pairing the long beta with
the short alpha-coroot gives
minus three. Pairing alpha
with beta-coroot gives minus
one. Their product is three,
and the long-to-short squared
length ratio is three as
well. The angle is obtuse
with cosine minus square
root of three divided by two.
The asymmetry in the Cartan
entries records length, not
an asymmetric Euclidean inner
product. Forgetting which
root supplies the coroot
reverses the entries.

</details>

### Exercise 9.10: a chamber wall {#root-systems-ex-10}

In A-two, identify a nonzero vector fixed by
a simple reflection and explain why its orbit
does not have trivial stabilizer.

<details>
<summary>Hint 1</summary>

The first simple reflection interchanges the
first two coordinates.

</details>
<details>
<summary>Hint 2</summary>

Choose a sum-zero triple with equal first
two coordinates.

</details>
<details>
<summary>Solution</summary>

The vector one, one, minus
two is nonzero and lies
on the first root hyperplane.
Interchanging its first two
coordinates fixes it, so
its stabilizer contains a
nonidentity reflection.
The regular-orbit uniqueness
theorem explicitly excludes
such vectors. A fundamental
chamber can contain boundary
points with stabilizers even
though its open chamber
has none. Orbit sizes and
alternating sums must account
for that distinction.

</details>

### Exercise 9.11: root lattice versus weights {#root-systems-ex-11}

Express the A-two simple roots in its fundamental-weight
basis and find the index of Q in P.

<details>
<summary>Hint 1</summary>

Apply the two simple-coroot pairings to each root.

</details>
<details>
<summary>Hint 2</summary>

The resulting integer coefficient matrix has
diagonal two and off-diagonal minus one.

</details>
<details>
<summary>Solution</summary>

The roots are twice omega-one
minus omega-two and minus
omega-one plus twice omega-two.
Their coefficient matrix has
determinant three, so its
integer span has index three
in the fundamental-weight
lattice. For example omega-one
is not a root-lattice vector,
while three times it is.
The quotient therefore detects
weight data absent from Q.
Which of these weights are
characters of a chosen global
torus depends on the group
form, not only this algebraic
lattice calculation.

</details>

### Exercise 9.12: leaving the crystallographic setting {#root-systems-ex-12}

Five equally spaced root lines in a plane give
ten equal-length vectors preserved by their reflections.
Show that the crystallographic integer condition fails.

<details>
<summary>Hint 1</summary>

Take two adjacent vectors whose angle is one fifth
of pi.

</details>
<details>
<summary>Hint 2</summary>

Their Cartan pairing is twice the cosine of that angle,
strictly between one and two.

</details>
<details>
<summary>Solution</summary>

The adjacent angle is pi
over five, between pi over
three and zero, so twice
its cosine lies strictly
between one and two. It
is therefore not an integer.
The finite reflection geometry
exists, but fails the stated
crystallographic axiom and
does not contradict the
rank-two Dynkin list. This
example shows why finiteness,
reflection closure and reducedness
alone are insufficient for
the classification developed
in the following chapters.

</details>

<a id="section-780-summary-and-next-connection"></a>
## Summary and next connection {#section-782-summary-and-next-connection}

Finite reduced crystallographic root systems have integral reflection
data, simple-root bases and uninterrupted root strings. Simple
reflections generate the finite Weyl group, and a word-deletion
argument proves unique regular dominant representatives. Rank-two
models explain the permitted edge multiplicities, while root and
weight lattices separate integral levels from a chosen global
group form. The Weyl vector is regular dominant with every
simple-coroot pairing one. The next chapter proves that complex
semisimple Lie algebras produce exactly this kind of root geometry.

<a id="section-802-sources"></a>
## Sources {#section-804-sources}

Compare Humphreys and the institution-hosted [Kirillov notes](https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf) for the geometry of root systems.
