
# Constructible Lengths and the Three Classical Problems

The construction chapters have shown how to obtain some exact lengths and angles. They have not shown that every imaginable geometric request is possible. A tool system has a mathematical range, and a proof that a target lies outside that range is different from an unsuccessful attempt to draw it.

This chapter asks what ordinary straightedge and compass can certainly accomplish, and how the three classical problems expose their limitations. We will prove constructive rules for arithmetic and square roots. We will also prove a limitation for the simpler operation of repeated halving. The deeper classical impossibility theorems will be identified as cited results whose algebraic proofs belong to later study, so no unintroduced algebra is needed as a prerequisite here.

Read [Ruler-and-Compass Constructions](ruler-compass-constructions.md), [Similarity and Proportion](similarity-proportion.md), and [Circles: Chords, Tangents and Angles](circles-chords-tangents-angles.md). Positive square roots and basic polynomial notation are explained in [Algebra and Functions](#/books/algebra-and-functions). The allowed tools remain an unmarked straightedge and an ideal compass.

## What the starting data permit

**Definition 9.1 (Constructible length).** Fix a unit segment. A nonnegative number $x$ is constructible from that unit if a finite sequence of the permitted line, circle and intersection operations produces a segment of length $x$ times the unit.

The phrase “from that unit” matters. If an arbitrary length is supplied as an additional input, it is available by assumption. A claim that a length cannot be constructed from the unit does not say that a segment of that length cannot be physically given or represented in another tool system.

All products and quotients below concern numerical lengths relative to the fixed unit. Multiplying a length in metres by another length in metres gives an area dimension; constructing the number $ab$ as a length means multiplying those dimensionless unit counts and laying off $ab$ units. This convention keeps the arithmetic construction dimensionally meaningful.

**Proposition 9.2 (Sums and differences).** If positive lengths $a,b$ are constructible, so are $a+b$ and $|a-b|$.

*Proof.* Copy the segments successively along one ray to obtain total $a+b$. For the difference, copy both from a common starting point along the same ray. The distance between their endpoints is $|a-b|$. If $a=b$, the endpoints coincide and the difference is zero. Every step uses a transferred radius and a line through known points. ∎

In particular, every positive integer length is available by repeated copies of the unit. The remaining arithmetic operations use parallels and the similarity theorem.

## Multiplication and division by parallels

**Theorem 9.3 (Products and quotients).** If positive numbers $a,b$ are constructible, then $ab$ and $b/a$ are constructible.

*Proof.* Draw two nonparallel rays from $O$. On the first mark $U$ with $OU=1$ and $A$ with $OA=a$. On the second mark $B$ with $OB=b$. Join $U$ to $B$, and draw through $A$ a parallel to $UB$, meeting the second ray at $C$. Parallels can be constructed by copying an angle and using the converse parallel-angle test.

Triangles $OU B$ and $OAC$ are similar by AA. Hence
$$
\frac{OC}{OB}=\frac{OA}{OU}=a,
$$
so $OC=ab$.

For division, join $A$ to $B$ and draw through $U$ a parallel to $AB$, meeting the second ray at $D$. Similarity gives
$$
\frac{OD}{OB}=\frac{OU}{OA}=\frac1a,
$$
so $OD=b/a$. If $a=1$, the coinciding marked points simply make the result $b$; no new parallel through a point of the original line is needed. The positive denominator condition is essential. ∎

**Example 9.4 (Constructing two thirds).** Copy a unit three times to obtain $a=3$ and twice to obtain $b=2$. The division construction yields $b/a=2/3$. Thus thirds are available with the full classical tool system, even though repeated halving alone will not produce them.

The same procedure gives every positive rational number $m/n$ for positive integers $m,n$. This is an existence proof for a finite procedure, not a claim that a single compass opening somehow knows an arbitrary fraction.

## Square roots from a semicircle

**Theorem 9.5 (Geometric square root).** If $a>0$ is constructible, then $\sqrt a$ is constructible.

*Proof.* Lay out a segment $AB$ with a point $M$ between its endpoints such that $AM=a$ and $MB=1$. Construct the circle with diameter $AB$. The perpendicular to $AB$ through the interior point $M$ meets the circle at a point $C$ on either chosen side. The angle $ACB$ is right because it stands on a diameter.

The altitude $CM$ divides this right triangle into two right triangles. Their acute angles match by the triangle angle sum, so $\triangle AMC\sim\triangle CMB$ by AA. Corresponding ratios give
$$
\frac{AM}{CM}=\frac{CM}{MB}.
$$
Therefore $CM^2=AM\cdot MB=a$. The positive length $CM$ is $\sqrt a$, proving the construction. ∎

**Example 9.6 (Squaring a rectangle).** Construct $\sqrt7$ by taking $AM=7$, $MB=1$ and the semicircle on diameter eight. Its altitude at $M$ has length $\sqrt7$. A square on that segment has area seven square units, equal to a rectangle of sides seven and one.

More generally, construct the product $ab$ and then $\sqrt{ab}$. A square with that side has the same area as a rectangle with sides $a,b$. Thus some equal-area square construction problems are solved exactly with these tools. The famous circle problem has a different input constant.

**Example 9.7 (Nested radicals remain exact).** To construct $\sqrt{2+\sqrt3}$, first construct $\sqrt3$, add a length two, and apply the square-root construction once more. Every intermediate length is positive, so each step is permitted.

The same number can be written
$$
\sqrt{2+\sqrt3}=\frac{\sqrt6+\sqrt2}{2}.
$$
Indeed the right side is positive and its square is $(6+2+2\sqrt{12})/4=2+\sqrt3$. Both expressions therefore give the same positive root. Different construction histories may produce one exact length; their equality can be justified algebraically rather than guessed from matching measurements.

Constructibility does not mean rationality. The diagonal of a unit square is $\sqrt2$, which is constructible by Pythagoras. It is irrational: if $\sqrt2=m/n$ were a fraction in lowest terms, then $m^2=2n^2$ would force $m$ even, and substitution would then force $n$ even as well, contradicting lowest terms. Being irrational therefore cannot by itself be an impossibility proof.

## The three classical problems

**Problem 9.8 (Doubling a cube).** Starting from the edge of a given cube, construct the edge of another cube with twice its volume.

For an original unit cube and new edge $x>0$, the required equation is $x^3=2$, so $x=\sqrt[3]2$. Doubling every edge would multiply the volume by eight, not by two. Constructing $\sqrt2$ instead would double a square's area, but a cube with that edge has volume $2\sqrt2$, again not two.

**Problem 9.9 (Trisecting an arbitrary angle).** Given an angle, construct an angle one third as large using only the classical operations.

Some individual angles can be trisected. For example, $90^\circ$ has a constructible third of $30^\circ$: construct an equilateral angle of $60^\circ$ and bisect it. The general problem asks for a procedure valid for every given angle. In particular, it would have to trisect a constructible $60^\circ$ angle to obtain $20^\circ$.

**Cited theorem 9.10 (Classical algebraic obstruction).** Starting from a unit segment, $\sqrt[3]2$ is not constructible by unmarked straightedge and compass. An angle of $20^\circ$ is not constructible from the unit and the usual coordinate directions. These consequences of Wantzel's constructibility theory rule out doubling the cube and a general angle-trisection procedure.

These are stated as cited results, not proved in this L1 chapter. Their full proofs use algebra describing how repeated line and circle intersections constrain possible numbers. The constructions proved above establish closure under arithmetic and square roots, but merely observing that a target expression contains a cube root would not establish nonconstructibility. For example, $\sqrt[3]8=2$ is plainly constructible. A genuine obstruction theorem, not the appearance of a radical, is needed.

**Problem 9.11 (Squaring the circle).** Given a circle, construct a square of exactly the same area using the classical tools.

Write $\pi$ for the circle constant, the circumference-to-diameter ratio. Using the standard circle-area formula $A=\pi r^2$, a square of side $s$ must satisfy
$$
s^2=\pi r^2,\qquad s=r\sqrt\pi.
$$
The circle-area formula is used here as a standard measurement result, not derived from a finite polygon dissection.

**Cited theorem 9.12 (Circle-squaring obstruction).** Every number constructible from the unit is algebraic, meaning it is a root of some nonzero polynomial with integer coefficients. Lindemann proved that $\pi$ is transcendental, meaning it is not algebraic. Consequently a unit circle cannot be squared by unmarked straightedge and compass.

*Deduction from the cited facts.* If $\sqrt\pi$ were constructible, its product with itself would make $\pi$ constructible by Theorem 9.3. That contradicts the two cited facts. A construction that worked for every circle would work in particular for the unit circle, so no general classical procedure exists. The algebraicity and transcendence theorems themselves are beyond this chapter and are not being proved by this short deduction.

This impossibility is stronger than the fact that $\pi$ is irrational. Irrational constructible numbers such as $\sqrt2$ already show why irrationality is insufficient.

## A limitation we can prove at this level

**Theorem 9.13 (Repeated-halving limitation).** Starting from positions zero and one on a line, a procedure that creates new positions only by taking midpoints of existing positions can never create exactly $1/3$.

*Proof.* A dyadic rational is a number $m/2^k$ for an integer $m$ and nonnegative integer $k$. Both starting positions are dyadic. If two positions have denominators powers of two, express them with common denominator $2^N$. Their midpoint has the form
$$
\frac12\left(\frac{a}{2^N}+\frac{b}{2^N}\right)
=\frac{a+b}{2^{N+1}},
$$
which is again dyadic. Induction over any finite construction therefore keeps every marked position dyadic.

If $1/3=m/2^k$, then $2^k=3m$, requiring a power of two to be divisible by three. That is impossible because its only prime factor is two. Hence $1/3$ cannot occur. ∎

The restricted-tool conclusion does not conflict with Example 9.4. The division construction uses auxiliary rays and parallels, not midpoint operations alone. Likewise a marked ruler or more powerful origami axioms change the classical tool system. Results about one system must retain their allowed-operation hypotheses.

## Approximation is another question

**Example 9.14 (A close cube is not an exact doubled cube).** The rational length $1.26=63/50$ is constructible, and its cube is
$$
1.26^3=2.000376.
$$
That is close to two but not equal to it. It may be adequate for a practical model with stated tolerances, yet it does not solve the exact classical problem.

A computer display with rounded digits cannot distinguish exact equality from a sufficiently close approximation by appearance alone. Conversely, a proof of classical impossibility does not forbid useful approximations or a solution with stronger tools. The statement concerns exact finite constructions under specified rules. Keeping those words visible is the main lesson of the three classical problems.

## Exercises

### Exercise 9.1
<a id="constructible-lengths-classical-problems-ex-1"></a>

Explain how the permitted operations construct the rational length $7/5$ from the unit.

<details><summary>Hint 1</summary>

First produce the numerator and denominator lengths.

</details>
<details><summary>Hint 2</summary>

Use the parallel-line quotient construction.

</details>
<details><summary>Solution</summary>

Copy the unit seven times and five times along rays to obtain lengths seven and five. In Theorem 9.3 take $a=5$, $b=7$; the parallel through the unit mark then produces $b/a=7/5$. The positive denominator is nonzero, and every operation is a copied length, line, parallel construction or intersection.

</details>

### Exercise 9.2
<a id="constructible-lengths-classical-problems-ex-2"></a>

Construct the numerical product $(3/2)(8/3)$ as a length and find its value. Explain the role of the fixed unit.

<details><summary>Hint 1</summary>

Both fractions are constructible by division.

</details>
<details><summary>Hint 2</summary>

The product construction multiplies numerical unit counts.

</details>
<details><summary>Solution</summary>

Construct the two fractions and apply Theorem 9.3; the value is four. The result is a segment four times the chosen unit. Without normalising by that unit, multiplying two physical lengths would have area dimensions, so the convention is necessary to interpret the product as another length.

</details>

### Exercise 9.3
<a id="constructible-lengths-classical-problems-ex-3"></a>

Describe a semicircle construction of $\sqrt{11}$, giving the full diameter length and the two pieces at the altitude foot.

<details><summary>Hint 1</summary>

Use the geometric-mean relation for the altitude.

</details>
<details><summary>Hint 2</summary>

One piece should be one unit.

</details>
<details><summary>Solution</summary>

Lay out $AM=11$, $MB=1$, so the diameter $AB$ is twelve units. Construct the semicircle and the perpendicular at $M$, meeting it at $C$. The right-triangle similarity gives $CM^2=11\cdot1$, hence $CM=\sqrt{11}$. The diameter is twelve, not eleven; the target is the altitude rather than the radius.

</details>

### Exercise 9.4
<a id="constructible-lengths-classical-problems-ex-4"></a>

Prove $\sqrt{5+2\sqrt6}=\sqrt2+\sqrt3$ and explain why the length is constructible.

<details><summary>Hint 1</summary>

Square the proposed right-hand side.

</details>
<details><summary>Hint 2</summary>

Equality of squares identifies the positive roots only after checking signs.

</details>
<details><summary>Solution</summary>

The right side is positive and its square is $2+3+2\sqrt6=5+2\sqrt6$. It is therefore the positive square root on the left. Both $\sqrt2,\sqrt3$ are constructible and their sum is constructible. Alternatively one may construct the nested radical directly using products, addition and a square root. Both procedures produce the same exact length.

</details>

### Exercise 9.5
<a id="constructible-lengths-classical-problems-ex-5"></a>

A learner says that $\sqrt2$ cannot be constructed because it is irrational. Refute the claim with a construction and identify the logical mistake.

<details><summary>Hint 1</summary>

Use the unit square.

</details>
<details><summary>Hint 2</summary>

Constructibility and rationality are different properties.

</details>
<details><summary>Solution</summary>

Construct a square of side one and join opposite vertices. Pythagoras gives diagonal length $\sqrt2$. The irrationality proof in the text does not alter that exact construction. Irrationality excludes representation as a fraction, not representation as a length obtained by the permitted circle and line operations. A nonconstructibility claim needs a stronger obstruction.

</details>

### Exercise 9.6
<a id="constructible-lengths-classical-problems-ex-6"></a>

Why does an edge of $\sqrt2$ not double the volume of a unit cube?

<details><summary>Hint 1</summary>

Cube volume uses the third power of the length factor.

</details>
<details><summary>Hint 2</summary>

Compute $(\sqrt2)^3$ exactly.

</details>
<details><summary>Solution</summary>

The volume would be $(\sqrt2)^3=2\sqrt2$, which exceeds two because $\sqrt2>1$. The edge $\sqrt2$ doubles a unit square's area, not a cube's volume. The exact doubled-cube edge satisfies $x^3=2$ and is $\sqrt[3]2$, the nonconstructible classical target stated in the cited theorem.

</details>

### Exercise 9.7
<a id="constructible-lengths-classical-problems-ex-7"></a>

A proposed doubled-cube construction produces a rational edge $1.26$. Check whether it solves the exact problem.

<details><summary>Hint 1</summary>

Compute the cube before comparing with the required volume.

</details>
<details><summary>Hint 2</summary>

A small nonzero residual still defeats exact equality.

</details>
<details><summary>Solution</summary>

The cube is $2.000376$, not two. Thus the construction may approximate the required edge but does not solve the exact problem. Being rational makes the proposed length constructible; it does not make it the target. A practical tolerance question could accept it under specified error limits, but that would be a different claim.

</details>

### Exercise 9.8
<a id="constructible-lengths-classical-problems-ex-8"></a>

Prove that the midpoint of two dyadic rational positions is dyadic, then explain why finitely many midpoint operations cannot give $1/3$.

<details><summary>Hint 1</summary>

Use one common power-of-two denominator.

</details>
<details><summary>Hint 2</summary>

Apply induction over the sequence of operations.

</details>
<details><summary>Solution</summary>

Write the two positions as $a/2^N,b/2^N$. Their midpoint is $(a+b)/2^{N+1}$, again dyadic. Since zero and one are dyadic, induction keeps every finitely constructed midpoint position dyadic. But $1/3=m/2^k$ would force $2^k=3m$, impossible for a power of two. The conclusion concerns midpoint-only procedures, not the full classical system.

</details>

### Exercise 9.9
<a id="constructible-lengths-classical-problems-ex-9"></a>

Explain why constructible trisection of $90^\circ$ does not imply a procedure for trisecting every angle.

<details><summary>Hint 1</summary>

A special case and a universal statement have different quantifiers.

</details>
<details><summary>Hint 2</summary>

A general procedure would also have to trisect sixty degrees.

</details>
<details><summary>Solution</summary>

A third of $90^\circ$ is the constructible angle $30^\circ$, obtained by bisecting an equilateral $60^\circ$ angle. A universal trisection procedure would also need to produce $20^\circ$ from $60^\circ$, contrary to the cited classical obstruction. Solving one input does not establish a method for all inputs; the impossibility statement allows special angles to be trisectible.

</details>

### Exercise 9.10
<a id="constructible-lengths-classical-problems-ex-10"></a>

For a circle of radius $r>0$, derive the side length of an equal-area square. Contrast this with constructing an equal-area square for a rectangle of constructible sides $a,b>0$.

<details><summary>Hint 1</summary>

Equate the square area to the given area.

</details>
<details><summary>Hint 2</summary>

The rectangle target uses a square root of a constructible product.

</details>
<details><summary>Solution</summary>

The circle requires $s^2=\pi r^2$, so $s=r\sqrt\pi$. For the unit circle, the cited algebraicity and transcendence facts rule out constructing $\sqrt\pi$ with classical tools. A rectangle requires $s=\sqrt{ab}$, constructible by the proved product and square-root rules. Both are equal-area problems, but their target constants have different constructibility status.

</details>

## Sources

The chapter and exercises are original. The arithmetic and mean-proportional constructions connect with Euclid, [Elements, Book VI](https://mathcs.clarku.edu/~djoyce/elements/bookVI/bookVI.html), especially propositions 8 and 13. Local motivation comes from [Fold, Reflect, Prove](../../course-texts/atlas-origami-construction-geometry.md), whose different tool system remains explicit.

The classical impossibility results are cited to L. Wantzel, [Recherches sur les moyens de reconnaître si un Problème de Géométrie peut se résoudre avec la règle et le compas](https://www.numdam.org/item/JMPA_1837_1_2__366_0/), Journal de Mathématiques Pures et Appliquées 2 (1837), 366–372, and F. Lindemann, [Ueber die Zahl π](https://link.springer.com/article/10.1007/BF01446522), Mathematische Annalen 20 (1882), 213–225. The standard circle-area formula is also presented in OpenStax, [Prealgebra 2e, 9.5](https://openstax.org/books/prealgebra-2e/pages/9-5-solve-geometry-applications-circles-and-irregular-figures). These primary-source records were consulted 13 November 2026. The advanced obstruction proofs are not reproduced or claimed as elementary proofs here.

## Summary

Starting from a unit segment, classical constructions can implement sums, positive differences, products, nonzero quotients and positive square roots. Similarity and a semicircle supply explicit proofs. Irrational numbers can be constructible, so irrationality is not an obstruction. Repeated halving has a provable dyadic limitation, while the general impossibility of cube doubling, angle trisection and circle squaring relies on clearly cited deeper results. Exact construction, approximation and a change of allowed tools are different questions. The next chapter introduces coordinates, giving a numerical language for lines, distances and circles.

