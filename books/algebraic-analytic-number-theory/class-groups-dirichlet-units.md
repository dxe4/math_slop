
# Class Groups and the Unit Theorem {#section-1-class-groups-and-the-unit-theorem}

Unique ideal factorisation does not give a generator for every ideal. The
remaining obstruction is the ideal class group, while the ambiguity among
generators is the unit group. Geometry of numbers proves that the first
is finite and that the second has an explicitly determined free rank.
We prove both conclusions, including the step that supplies sufficiently
many independent units. The final square-class consequence will be an
arithmetic input to the elliptic-curve descent proof.

Read [Ideal Factorisation and Prime Splitting](ideal-factorisation-prime-splitting.md)
and [Number Fields](number-fields-norms-prime-ideals.md). Let K have degree n,
with r-one real embeddings and r-two conjugate pairs of nonreal embeddings.
Thus n equals r-one plus twice r-two. Our Minkowski embedding uses the
ordinary real and imaginary coordinates of one embedding per complex pair,
without multiplying them by square root two. This choice gives covolume
two to minus r-two times the square root of the absolute field
discriminant. Keeping this convention visible prevents a factor-of-two error.

<a id="section-18-the-class-group-and-its-geometric-lattice"></a>
## The class group and its geometric lattice {#section-20-the-class-group-and-its-geometric-lattice}

Nonzero fractional ideals form a group by the proved factorisation theorem.
Its subgroup of principal fractional ideals gives the quotient Cl(K).
Two ideals I,J have the same class exactly when I equals alpha J
for some nonzero field element alpha. The class number is the cardinality
of this group, whose finiteness has not yet been assumed.

The image of the integer ring under the archimedean embeddings is a
full lattice in real n-space. To compute its covolume, take an integral
basis and the matrix of all n complex embeddings. The square of its
determinant, up to sign, is the field discriminant because the trace matrix
is its transpose times itself. Replacing each conjugate pair of rows by
real and imaginary parts changes the determinant's absolute value by one
half per pair. This proves the covolume just stated. An integral ideal
is a sublattice of index its norm, so its covolume is multiplied
by that norm. No choice of an element generator is needed.

**Lemma 10.1 (Lattice pigeonhole).** A measurable set of volume greater
than a full lattice's covolume contains two distinct points whose difference
is a lattice vector.

*Proof.* Partition the space into translates of a half-open fundamental
parallelepiped. Translate each piece of the set back into that parallelepiped.
The integral of the number of pieces covering a point equals the
original volume, by countable additivity or Tonelli. If no point had
two preimages, that integral would be at most the parallelepiped volume.
The strict inequality contradicts this. Two different preimages give the
claimed nonzero difference. ∎

**Theorem 10.2 (Minkowski).** A symmetric convex measurable body of volume
greater than two to the n times the covolume contains a nonzero
lattice vector.

*Proof.* Apply the lemma to the body scaled by one half. Its
volume exceeds the covolume. If x,y are the two points in that
half-body, symmetry puts minus y there also, and convexity puts their
difference in the original body. Their difference is nonzero and a
lattice vector. This proves the strict-volume form used below. Boundary
versions can be recovered by shrinking a limiting argument to bounded
sets, but no boundary equality is needed for our applications. ∎

<a id="section-60-the-full-minkowski-class-bound"></a>
## The full Minkowski class bound {#section-62-the-full-minkowski-class-bound}

For T positive consider the symmetric convex body defined by the sum
of absolute real coordinates plus twice the sum of complex moduli at
most T. Its volume is

$$2^{r_1}\left(\frac\pi2\right)^{r_2}\frac{T^n}{n!}.$$

Here is the calculation. For each real coordinate pass to its absolute
value and gain a factor two. For a complex coordinate use polar
coordinates and put v equal to twice its modulus; its area element
becomes pi divided by two times v dv. The remaining integral is
over a simplex, with one factor v for each complex place. Repeated
integration of monomials gives T to the n divided by n factorial.
The exponent is n, because each complex radial variable contributes its
extra factor v as well as its differential. This derives the formula
in our ordinary-coordinate convention.

For a field element in that body, apply arithmetic–geometric mean to
the n nonnegative numbers consisting of the absolute real embeddings and
two copies of each complex modulus. Their sum is at most T.
The absolute field norm is their product, at most (T divided by n)
to the n. Applying Minkowski to an integral ideal I and letting
T decrease to its volume threshold therefore supplies a nonzero alpha
in I with

$$|N_{K/\mathbb Q}(\alpha)|\le
\left(\frac4\pi\right)^{r_2}\frac{n!}{n^n}
\sqrt{|D_K|}\,N(I).$$

For the limiting inequality one may avoid any compactness issue: norms of
nonzero integral elements are positive integers. Choose T above the strict
threshold so close that the resulting norm upper bound has the same
integer part as the desired bound. Minkowski then produces the displayed
weak inequality. If the threshold is an integer, choose the excess less
than one; the same conclusion follows.

Now J equal to the principal ideal of alpha times I-inverse is
integral because alpha belongs to I. Its class is the inverse of
the class of I and its norm is at most the constant preceding
N(I). Every fractional class has an integral representative by clearing
a denominator; inversion permutes classes. Hence every class has an integral
representative of norm at most

$$M_K=\left(\frac4\pi\right)^{r_2}\frac{n!}{n^n}\sqrt{|D_K|}.$$

Only finitely many ideals have bounded norm. In an integral basis they
are subgroups of the integer lattice of bounded finite index. For an
index m subgroup, multiplication by m sends the whole lattice into that
subgroup, since the quotient has order m. Thus the subgroup is the
preimage of a subgroup of the finite group of residue vectors modulo
m. There are finitely many for each m and finitely many allowed
m. This proves finiteness without assuming that a search algorithm has
actually enumerated them.

**Theorem 10.3.** The class group of a number field is finite, and
the displayed Minkowski bound contains a representative of every class.
Its triviality is equivalent to the integer ring being a PID and
also to unique element factorisation. For the last implication in reverse,
if the integer ring is a UFD, any nonzero prime ideal contains
an irreducible element. That element generates a nonzero prime ideal,
already maximal in this dimension-one ring, so it equals the given
prime ideal. Every ideal is then principal by ideal factorisation. The
usual PID-to-UFD argument gives the other direction.

<a id="section-125-logarithms-of-units-discreteness-is-only-half-the-theor"></a>
## Logarithms of units: discreteness is only half the theorem {#section-127-logarithms-of-units-discreteness-is-only-half-the-theor}

For a unit u define L(u) to have coordinates log of each
absolute real embedding and twice log of each complex modulus. Its
coordinate sum is log of the absolute field norm, which is zero
for a unit. Thus the image lies in the hyperplane H of
coordinate sum zero, of dimension r-one plus r-two minus one.

The kernel is finite. If every logarithmic coordinate is zero, all
embeddings have modulus one, so those algebraic integers lie in a bounded
region of the Minkowski lattice. There are finitely many. This finite
multiplicative group consists of roots of unity, and every root of unity
lies in the kernel. It is cyclic, since a finite subgroup of
complex nonzero numbers embeds in the cyclic group of roots of a
sufficiently large common order.

The logarithmic image is discrete. A bounded logarithmic region bounds all
embedding moduli above, so there are only finitely many possible integral
units there. In particular the origin is isolated among image points.
For an additive subgroup, this also gives uniform separation of distinct
points: their difference is another subgroup point. Its intersection with
any bounded region is consequently finite.

But a discrete subgroup of H might span a proper subspace. That
would prove only an upper bound for the unit rank. We now
prove relative density in the whole hyperplane, the missing lower bound.

Choose any x in H. Form a rectangular product body whose real
embedding bounds are C exp(x-i), and whose complex modulus bounds
are C exp(x-j divided by two). Its volume is a fixed positive
constant times C to the n, independent of x because the sum
of the x-coordinates is zero. Choose C large enough that Minkowski
always supplies a nonzero alpha in the integer ring within this body.
The absolute norm of alpha is at most C to the n, also
independent of x.

There are only finitely many principal integral ideals with that norm bound.
Choose one generator alpha-j for each that occurs. For our alpha,
equality of its ideal with one of those generator ideals says alpha
equals u alpha-j for a unit u. Its logarithm L(alpha) differs
from x by an amount bounded above in each coordinate: at most
log C at a real place and twice log C at a complex
place. The sum of those differences is log of the absolute norm
of alpha, which is nonnegative because alpha is a nonzero integer.
The upper bounds on the other coordinates therefore give a fixed lower
bound on each coordinate too. Hence L(alpha) stays a uniformly bounded
distance from x. Subtracting one of the finitely many L(alpha-j)
shows that some L(u) stays a uniformly bounded distance from x.
This proves relative density of the unit logarithms in H.

A discrete subgroup relatively dense in H must span H: points along
a line perpendicular to a proper span would have unbounded distance
from it. A discrete spanning subgroup is a full lattice. To justify
finite generation, choose independent subgroup vectors forming a real basis.
Their integer span has a bounded fundamental parallelepiped. Every coset of
that span in the full subgroup has a representative there, and only
finitely many subgroup points lie in its bounded closure. The quotient
is finite. The subgroup is thus finitely generated and torsion-free of
rank the dimension of H. Lifting a free basis to units splits
the kernel extension because the quotient is free abelian.

**Theorem 10.4 (Dirichlet's unit theorem).** The unit group is the
product of its finite cyclic roots-of-unity group and a free abelian
group of rank r-one plus r-two minus one. The logarithmic image
is a full lattice in H. Its covolume, with a stated measure
normalization, is the regulator. Finding some independent units gives a
finite-index subgroup; proving that they are a full fundamental system requires
an additional index argument.

<a id="section-194-three-worked-class-and-unit-computations"></a>
## Three worked class and unit computations {#section-196-three-worked-class-and-unit-computations}

**Worked example 1: Gaussian class number.** Here n is two, r-two
is one and the field discriminant is minus four. The Minkowski bound
is four divided by pi, strictly less than two. Every class therefore
has an integral ideal of norm one. Such an ideal is the unit
ideal, so the class number is one. This is a second route
to principal ideals, independent of the earlier Euclidean algorithm. Its
input must be the field discriminant, not the discriminant of an
arbitrary smaller order.

**Worked example 2: the negative-five class group.** The field discriminant
is minus twenty and the bound is twice square root twenty divided
by pi, less than three. Possible representative norms are one and
two. The earlier ideal P generated by two and one plus square
root minus five has norm two and square the ideal of two.
It is not principal: a generator would have norm two, impossible in
the equation a squared plus five b squared. There is only one
prime ideal of norm two because the reduced polynomial has one repeated
linear factor at two in this index-one ring. Thus there are exactly
two classes, with P generating the nontrivial class of order two.

**Worked example 3: a fundamental unit of the square-root-two field.**
The unit epsilon equal to one plus square root two has norm
minus one. To prove it fundamental, make a unit positive in the
first real embedding by changing its sign, then divide by a suitable
integer power of epsilon to bring that value into the interval from
one inclusive to epsilon exclusive. Write the resulting unit as a plus
b square root two. Its conjugate is plus or minus its reciprocal.
Therefore b is a nonnegative integer less than two. If b is
one, the norm equation forces a squared to be one or three;
the only integer choices a equal to plus or minus one put
the first embedding at epsilon or below one, both excluded. If b
is zero, positivity and unit norm force a equal to one. Hence
every unit is a sign times a power of epsilon. This supplies
the index argument that mere rank-one independence would not have supplied.

<a id="section-231-finite-square-classes-with-controlled-prime-support"></a>
## Finite square classes with controlled prime support {#section-233-finite-square-classes-with-controlled-prime-support}

Let S be a finite set of nonzero prime ideals. Consider nonzero
field elements whose valuations outside S are even, modulo squares of
field elements. This is a group of square classes. Taking the parity
of valuations at the primes in S maps it to a finite group
with at most two to the size of S elements. In the kernel,
all prime valuations are even, so the principal fractional ideal of alpha
is the square of a uniquely specified fractional ideal a. The class
of a is killed by two. It is well-defined modulo multiplying alpha
by a square, which changes a by a principal ideal.

There are finitely many such ideal classes by class-group finiteness. In
the kernel of this second map, write a as a principal ideal of
b; then alpha divided by b squared is a unit. Its remaining
square class belongs to the finite quotient of units by unit squares,
finite by Dirichlet's theorem. We have proved the finite-support square-class
theorem, with an upper bound given by two to size S times
the size of the two-torsion class group times the size of units
modulo squares. This is an exact finiteness result, not a claim that
all these potential classes arise in a particular descent problem. Local
or geometric conditions can remove candidates.

<a id="section-254-exercises-with-two-hints-and-complete-solutions"></a>
## Exercises with two hints and complete solutions {#section-256-exercises-with-two-hints-and-complete-solutions}

### Exercise 10.1: the covolume convention {#class-groups-dirichlet-units-ex-1}

Explain how multiplying every complex real-and-imaginary coordinate by square root two changes the stated covolume.

<details>
<summary>Hint 1</summary>
There are two real coordinates in each complex pair.
</details>
<details>
<summary>Hint 2</summary>
Their combined area scaling is two per pair.
</details>
<details>
<summary>Solution</summary>
The volume scaling is two to r-two. Multiplying it
by the ordinary-coordinate covolume removes the factor two
to minus r-two, leaving square root of the absolute
discriminant. Both conventions are valid, but the convex-body
volume must use the same convention. Mixing them would
change the class bound by an incorrect factor.
</details>

### Exercise 10.2: strict volume {#class-groups-dirichlet-units-ex-2}

Why does the proof first use a body of volume strictly greater than the Minkowski threshold?

<details>
<summary>Hint 1</summary>
At equal volume the translated half-body pieces need not overlap.
</details>
<details>
<summary>Hint 2</summary>
For the arithmetic bound, use discreteness of the positive integer norm values afterward.
</details>
<details>
<summary>Solution</summary>
The pigeonhole integral forces two preimages only when
total volume exceeds the fundamental volume. Equality alone
does not supply that argument. After obtaining norm bounds
with arbitrarily small positive excess, integer-valued norms let
us remove the excess. This keeps the geometric and
arithmetic limiting steps distinct rather than assuming a
boundary point without proof.
</details>

### Exercise 10.3: class inversion {#class-groups-dirichlet-units-ex-3}

For alpha in a nonzero integral ideal I, show J equal to (alpha) I-inverse is integral and identify its class.

<details>
<summary>Hint 1</summary>
Containment of principal ideals translates membership of alpha.
</details>
<details>
<summary>Hint 2</summary>
Multiplication by I-inverse preserves that containment, while principal ideals have trivial class.
</details>
<details>
<summary>Solution</summary>
Since (alpha) is contained in I, their products
with I-inverse give J contained in the unit ideal.
Thus J is integral. In the class group its
principal factor disappears and its class is [I]
inverse. Inversion permutes all classes, so finding such
bounded J for every I indeed covers every class,
not only a subset of inverses.
</details>

### Exercise 10.4: bounded ideal norms {#class-groups-dirichlet-units-ex-4}

Prove there are finitely many additive subgroups of index m in a fixed finite-rank integer lattice.

<details>
<summary>Hint 1</summary>
The quotient has order m and is killed by multiplication by m.
</details>
<details>
<summary>Hint 2</summary>
Every subgroup therefore contains m times the original lattice.
</details>
<details>
<summary>Solution</summary>
Such a subgroup is the preimage of a subgroup
of the finite residue group modulo m times the
lattice. That finite group has finitely many subsets
and therefore finitely many subgroups. There are only
finitely many indices up to a given bound, completing
the bounded-norm ideal argument. Not every additive subgroup
is an ideal, which can only reduce the count.
</details>

### Exercise 10.5: unit ranks {#class-groups-dirichlet-units-ex-5}

Find the unit ranks for a totally real cubic field and a degree-four field with no real embeddings.

<details>
<summary>Hint 1</summary>
Write n as r-one plus twice r-two in each case.
</details>
<details>
<summary>Hint 2</summary>
The rank is the number of archimedean places minus one.
</details>
<details>
<summary>Solution</summary>
The totally real cubic has signature (three,zero), so
rank two. The other field has signature (zero,two),
so rank one. Complex embeddings contribute one logarithmic
coordinate per conjugate pair, though that coordinate carries
weight two in the product formula. Counting both conjugates
as independent logarithmic coordinates would give the wrong rank.
</details>

### Exercise 10.6: the kernel of logarithms {#class-groups-dirichlet-units-ex-6}

Show that a unit whose archimedean absolute values all equal one is a root of unity.

<details>
<summary>Hint 1</summary>
Every positive power has the same embedding bounds.
</details>
<details>
<summary>Hint 2</summary>
Only finitely many algebraic integers lie in that bounded lattice region.
</details>
<details>
<summary>Solution</summary>
The powers form a finite set by the lattice
bound. Two powers agree, and canceling the smaller
power gives a positive power equal to one. Thus
the unit is a root of unity. This proves
the torsion assertion from finiteness, without assuming that
absolute value one in a single embedding would suffice.
</details>

### Exercise 10.7: discreteness is insufficient {#class-groups-dirichlet-units-ex-7}

Give a discrete subgroup of a two-dimensional real space whose rank is less than two. What additional property excludes it in the unit proof?

<details>
<summary>Hint 1</summary>
Use integer points on a single line.
</details>
<details>
<summary>Hint 2</summary>
Points far in a perpendicular direction cannot be uniformly close to that subgroup.
</details>
<details>
<summary>Solution</summary>
The subgroup of vectors (integer,zero) is discrete and
has rank one. It is not relatively dense in
the plane: distances along the second axis grow without
bound. The Minkowski principal-ideal pigeonhole argument establishes
relative density of unit logarithms in the entire hyperplane,
thereby proving the full rank rather than just an upper bound.
</details>

### Exercise 10.8: lower logarithmic bounds {#class-groups-dirichlet-units-ex-8}

If each coordinate of L(alpha) minus x has a fixed upper bound and their sum is nonnegative, explain why each also has a fixed lower bound.

<details>
<summary>Hint 1</summary>
Separate one coordinate from the sum.
</details>
<details>
<summary>Hint 2</summary>
Bound all the remaining coordinates by their upper bounds.
</details>
<details>
<summary>Solution</summary>
The selected coordinate is at least minus the sum
of all the other coordinates. Their upper bounds
therefore give a fixed negative lower bound for it.
Doing this for each coordinate puts the difference
in a bounded box. The nonnegative sum comes from
the nonzero integral norm, an essential arithmetic condition
in the relative-density argument.
</details>

### Exercise 10.9: one independent unit {#class-groups-dirichlet-units-ex-9}

In a real quadratic field, does exhibiting a unit greater than one prove that unit is fundamental?

<details>
<summary>Hint 1</summary>
Any nontrivial positive power of a fundamental unit also has that property.
</details>
<details>
<summary>Hint 2</summary>
Distinguish rank-one independence from index one in the full logarithmic lattice.
</details>
<details>
<summary>Solution</summary>
It proves an infinite cyclic subgroup, but that
subgroup may have nontrivial finite index. For instance
the square of a fundamental unit generates only its
even powers. An interval reduction or another exact
index argument is needed, as supplied for one plus
square root two. A floating logarithm showing nonzero
size does not establish that index.
</details>

### Exercise 10.10: square classes over the rationals {#class-groups-dirichlet-units-ex-10}

List rational square classes whose valuations outside two and three are even.

<details>
<summary>Hint 1</summary>
Remove square factors from numerator and denominator prime factorizations.
</details>
<details>
<summary>Hint 2</summary>
Only the sign and the two prime-exponent parities remain.
</details>
<details>
<summary>Solution</summary>
Representatives are plus or minus one, two, three
and six. There are eight classes. The rational
integer ring has trivial class group, so there
is no additional two-torsion ideal-class choice. Its units
are plus or minus one, contributing exactly the
sign. This is the simplest concrete model for the
finite-support arithmetic used in descent.
</details>

### Exercise 10.11: the two-torsion class map {#class-groups-dirichlet-units-ex-11}

If every valuation of alpha is even, explain why the half-exponent ideal class is killed by two and is independent of its square-class representative.

<details>
<summary>Hint 1</summary>
The ideal with those half-exponents squares to the principal ideal of alpha.
</details>
<details>
<summary>Hint 2</summary>
Replacing alpha by alpha times b squared changes that ideal by the principal ideal of b.
</details>
<details>
<summary>Solution</summary>
Squaring the ideal gives a principal ideal, so
twice its class is zero. Multiplying alpha by
a field square adds twice the valuations of b;
the half-exponent ideal is multiplied by (b), which
does not change its class. Thus the map is
well-defined on square classes. Its remaining kernel is
controlled by units modulo unit squares.
</details>

### Exercise 10.12: class number versus unit rank {#class-groups-dirichlet-units-ex-12}

Can class number one and positive unit rank occur together? Give an example and explain the two different objects measured.

<details>
<summary>Hint 1</summary>
Consider the square-root-two field.
</details>
<details>
<summary>Hint 2</summary>
Its discriminant is eight and its real-quadratic Minkowski bound is square root eight divided by two.
</details>
<details>
<summary>Solution</summary>
That bound is below two, forcing class number
one. The signature is (two,zero), so unit rank
is one, with fundamental unit already exhibited. The
class group measures failure to generate ideals by
one element. The unit group measures ambiguity among
such generators. One can vanish while the other
has an infinite free part.
</details>

<a id="section-528-summary-and-next-connection"></a>
## Summary and next connection {#section-530-summary-and-next-connection}

Minkowski's convex-body theorem follows from a lattice pigeonhole argument.
Its explicit norm bound makes the ideal class group finite. Logarithmic
unit coordinates are discrete, and a second Minkowski argument proves their
relative density and full rank, completing Dirichlet's theorem. The resulting
finite-support square classes isolate the arithmetic finiteness needed for
elliptic descent; they do not assert that every candidate is globally soluble.
Cyclotomic and local constructions next make prime splitting and ramification
more explicit.

<a id="section-546-sources"></a>
## Sources {#section-548-sources}

Compare Marcus and Milne's author-hosted [Algebraic Number Theory](https://www.jmilne.org/math/CourseNotes/ANT.pdf). The lower-rank and index arguments are proved in this chapter.
