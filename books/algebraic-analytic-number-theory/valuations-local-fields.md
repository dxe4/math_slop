
# Valuations and Local Fields {#section-1-valuations-and-local-fields}

A prime ideal gives an order of divisibility. Completion adds limits for
the corresponding notion of closeness. The new field can solve equations
that have no solution in the original field, but a local solution is
still different from a global rational point. We construct the p-adic
completion, prove simple-root and coprime-factor Hensel lifting, and build
the unramified and Eisenstein extensions needed for cyclotomic arithmetic.

Read [Ideal Factorisation and Splitting](ideal-factorisation-prime-splitting.md).
The standalone Quarto p-adic book supplies a longer alternative route;
the arguments needed here are proved directly. General classification of all
finite extensions and ramification filtrations is further local-field theory.
This chapter proves the specified unramified and Eisenstein constructions
without treating a general extension theorem as an elementary calculation.

<a id="section-15-discrete-valuations-and-the-ultrametric"></a>
## Discrete valuations and the ultrametric {#section-17-discrete-valuations-and-the-ultrametric}

A discrete valuation v on a field assigns an integer to every nonzero
element, is additive on products and satisfies the lower-bound inequality
v(a+b) at least the smaller of v(a),v(b) when the sum is nonzero.
Set v(0) equal to infinity. Its value group is assumed to be
all integers. Given a fixed q greater than one, define the absolute
value of a nonzero element as q to minus v(a). The triangle
inequality becomes the stronger ultrametric bound: the value of a sum
is at most the larger input value.

If two valuations differ, the valuation of their sum equals the smaller
one. Factor out that smaller power of a uniformizer; a unit plus
a maximal-ideal element is still a unit. Consequently sufficiently close
nonzero elements have exactly the same valuation. Open balls are also
closed: any point outside one has a small ball around itself disjoint
from the original ball, by that same ultrametric rule. Two balls
which intersect are nested when their radii are ordered. These are
metric consequences, not statements that the field has only a few points.

For the rationals, v-p counts the exponent of p in numerator minus
denominator, with the fraction first reduced. Unique prime factorisation proves
product additivity; factoring a common p-power proves the sum inequality.
We normalize the rational p-adic absolute value by absolute p equal
to reciprocal p. Thus numbers divisible by high powers of p are
small in this metric, even when their usual real size is large.

<a id="section-42-completion-and-compatible-residue-digits"></a>
## Completion and compatible residue digits {#section-44-completion-and-compatible-residue-digits}

Take rational Cauchy sequences in the p-adic metric and identify two
when their difference tends to zero. Termwise addition and multiplication
descend to classes; Cauchy sequences are bounded, so products respect that
equivalence relation. A nonzero class has absolute values eventually constant
and bounded away from zero: if its terms did not eventually stabilize
at some nonzero valuation, the Cauchy condition would force convergence to
zero. Its termwise reciprocals are Cauchy by the identity for the
difference of two reciprocals. This proves that the completion Q-p is
a field. Constant sequences embed the rationals densely, and the standard
diagonal construction makes the completion complete.

Its valuation ring Z-p consists of elements with nonnegative valuation.
It identifies with compatible sequences of residues modulo p to the m.
A Cauchy sequence stabilizes at each such residue; conversely compatible
residues have representatives whose successive differences are increasingly
divisible and hence define a Cauchy class. Ring operations agree at
each finite residue level. Choosing representatives between zero and p minus
one gives a unique digit expansion with infinitely many nonnegative powers
of p. Negative valuation permits finitely many preceding negative powers.

The unit criterion is exact: a digit expansion is a unit if and
only if its constant digit is nonzero. Its inverse can be computed
at every finite residue level and the compatible inverses converge. Every
nonzero element is a power of p times a unit, so Z-p is
a discrete valuation ring and Q-p its fraction field. Its residue field
has p elements. This constructs a field from compatible arithmetic, rather
than asserting that an arbitrary formal infinite expression is automatically
a legitimate p-adic number.

The ring Z-p is compact. From any sequence of its elements, choose
a subsequence with the same first digit, then a further subsequence with
the same second digit, and continue. The diagonal subsequence is Cauchy
and converges in Z-p, whose nonnegative-valuation condition is closed.
Sequential compactness equals compactness in a metric space. The field is
locally compact because Z-p is a compact neighborhood of zero. A local
field in this chapter means a nondiscrete locally compact complete valued
field; our finite-dimensional constructions below retain these properties.

<a id="section-82-hensel-lifting-with-uniqueness"></a>
## Hensel lifting, with uniqueness {#section-84-hensel-lifting-with-uniqueness}

**Theorem 12.1 (Simple-root Hensel lemma).** In a complete discrete valuation
ring O with uniformizer pi, suppose a residue root of a polynomial f
has derivative nonzero in the residue field. There is a unique root
in O in that residue class.

*Proof.* Start with a lift a-one. Suppose a-n solves f congruent
to zero modulo pi to the n. Seek a-next equal to a-n
plus c pi to the n. Polynomial Taylor expansion modulo pi to
the n-plus-one leaves only the linear correction. Since the derivative is
a unit, one residue choice of c cancels f(a-n) divided by
pi to the n. Derivatives remain units under these corrections. This
constructs a unique compatible solution at each precision, hence a Cauchy
sequence and a root by completeness and polynomial continuity. If two
roots were congruent modulo pi, divide their polynomial difference by their
point difference. The resulting factor is congruent to the nonzero derivative,
so it is a unit. Their point difference must vanish. ∎

Newton's update a mapped to a minus f(a) divided by f-prime(a)
gives a faster version under the same simple-root hypotheses. Taylor expansion
shows the new error divisible by the square of the old error
ideal, because the constant and linear terms cancel. The corrections thus
double the known valuation at each step. This is a theorem about
convergent exact ring arithmetic; displaying a few successful updates alone
would not prove a root exists or that the limiting process is unique.

**Theorem 12.2 (Coprime-factor Hensel lemma).** A monic polynomial over
O whose residue polynomial is a product of two coprime monic factors
has a unique factorisation into monic lifts of those factors with their
specified degrees and residues.

*Proof.* Suppose monic lifts G,H multiply correctly modulo pi to the
n. Correct them by pi to the n times polynomials A,B of
degrees smaller than G,H respectively. Modulo the next power the desired
correction equation is A H plus B G equal to the residue of
the divided product error. The linear map from the pair (A,B)
to that polynomial is an isomorphism over the residue field. For
injectivity, an equation A H equal to minus B G and coprimality
force G to divide A, hence A zero by its degree bound,
and similarly B zero. The dimensions agree, proving surjectivity. Solve
uniquely at each stage and take coefficientwise limits. Finite degrees keep
all products continuous; monicity, residue and degree are preserved. The
same successive-correction uniqueness proves uniqueness of the final factors. ∎

Repeated application handles any finite list of pairwise coprime factors.
Repeated residue factors are outside this theorem. Some repeated roots still
lift and some do not; a derivative-zero input cannot be passed through
the simple-root theorem by ignoring its missing inverse.

<a id="section-132-constructing-unramified-extensions"></a>
## Constructing unramified extensions {#section-134-constructing-unramified-extensions}

Choose a monic polynomial F over Z-p whose residue polynomial is irreducible
of degree f. It is irreducible over Q-p by Gauss's lemma and
reduction of a hypothetical monic factorisation. Put A equal to Z-p[T]
modulo F and let L be its fraction field. As a Z-p module
A is free on the first f powers of its generator and is
complete. Its reduction modulo p is the field with p to f
elements. It is a local ring: maximal ideals lie over the maximal
ideal of the base under a finite integral extension, and the residue
quotient has only one maximal ideal. That ideal is generated by p.

Every nonzero element of A is p to some finite power times
a unit. Divide all its basis coefficients by their smallest p-adic
power; the resulting residue is nonzero in the residue field. This
proves the assertion and the discrete valuation property directly. A discrete
valuation ring is integrally closed: a fraction of negative valuation cannot
satisfy a monic relation, since its highest power would have strictly
smaller valuation than every other term. Thus A is the full integral
closure of Z-p in L. The ramification index is one and the
residue degree is f. This is the unramified construction, with its
integer ring proved rather than guessed from the defining polynomial.

Each residue class in the field of size q equal to p to
f has a unique lift solving X to q minus X equal to
zero, because the derivative is minus one modulo p. The nonzero
lifts are precisely the roots of unity of order dividing q minus
one. Multiplicative compatibility follows by uniqueness of the lift with a
given nonzero residue. These are the Teichmüller representatives; arbitrary
addition of their chosen representatives does not in general preserve this
special set, although their residues add in the field.

The extension is Galois and cyclic. Each residue conjugate of the generator,
obtained by raising it to a p-power, is a simple residue root
of F and lifts uniquely to a root of F in A. Sending
the generator to each lifted root gives f distinct embeddings of the
degree-f field into itself. The one inducing residue Frobenius has
order f, since its powers induce the f distinct residue automorphisms
and the lift fixing the original residue root is unique. This proves
the full cyclic automorphism assertion for this construction.

In particular, roots of unity of order m prime to p all
lie in an unramified extension with degree the multiplicative order of
p modulo m. That degree is exactly the one for which m
divides p-to-f minus one. Simple-root uniqueness lifts the finite-field
roots, and their residue orders remain m. Their minimal extension degree
cannot be smaller because the corresponding residue field would not contain
a primitive root of that order.

<a id="section-181-constructing-eisenstein-extensions"></a>
## Constructing Eisenstein extensions {#section-183-constructing-eisenstein-extensions}

Now let O be a complete discrete valuation ring with uniformizer p-zero,
and let F be monic of degree e. Suppose every nonleading coefficient
is divisible by p-zero and the constant coefficient is not divisible by
its square. Eisenstein's criterion proves irreducibility over the fraction field.
For a root pi, the finite free ring A equal to O[pi]
is complete and local: its residue modulo p-zero is a truncated
polynomial ring with unique maximal ideal generated by the root residue.
Its maximal ideal is therefore (p-zero,pi).

The polynomial relation rewrites p-zero times a unit as minus pi to
the e. The factor is a unit because its constant residue is
nonzero. Thus that maximal ideal is generated by pi alone, and
the ideals of p-zero and pi to the e agree. Their repeated
intersections vanish by completeness of the finite free module. Every nonzero
element is consequently a finite power of pi times a unit. This
again proves A is a discrete valuation ring and the full integral
closure. The ramification index is e and the residue field is unchanged.

For clarity, the extension absolute value that agrees with the base has
valuation of pi equal to one divided by e when the base
uniformizer has valuation one. In a basis expansion with powers of pi
below e, nonzero summands have distinct valuation residues modulo the integers,
so the smallest valuation cannot cancel. This proves uniqueness of the
extended valuation in this Eisenstein case, and comparison with the coefficient
topology proves completeness. Compactness of the integer ring follows from its
finite free compact-base module, so a finite Eisenstein extension of a
p-adic field is again a local field.

An extension of residue characteristic p is called tamely ramified when
its ramification index is prime to p and its residue extension is
separable; these residue fields are finite and hence separable. Divisibility
of the index by p is the wild case. This terminology identifies
a first distinction, not a proof of all ramification-filtration formulas.
The general extension theorem asserting a unique valuation on every finite
extension of a complete nonarchimedean field is additional standard theory;
the constructions used here and in the cyclotomic chapter have their
integer rings and valuations established directly.

<a id="section-221-three-worked-local-constructions"></a>
## Three worked local constructions {#section-223-three-worked-local-constructions}

**Worked example 1: a geometric digit limit.** In Q-p the partial
sums one plus p through p-to-N converge, because their tails have
valuation tending to infinity. The finite geometric identity gives their
limit as one divided by one minus p. This denominator is a
unit. For p equal to two, the limit is minus one, whose
binary p-adic digits are all one. The same real partial sums grow
without bound. A convergent expression therefore needs its specified absolute
value; there is no contradiction between these two behaviors.

**Worked example 2: a square root of two in Q-seven.** The residue
three solves X squared minus two modulo seven and its derivative six
is nonzero. Write its next lift as three plus seven t. Dividing
the current error by seven gives one, so the correction equation is
one plus six t equal to zero modulo seven. Thus t is one
and the lift is ten modulo forty-nine. Next the divided error is
two and the derivative is again six modulo seven, giving t equal
to two and lift one hundred eight modulo three hundred forty-three.
The exact equalities one hundred minus two equal to twice forty-nine,
and one hundred eight squared minus two equal to thirty-four times
three hundred forty-three, verify those finite stages. Hensel proves a unique
limit in the original residue class, independently of any finite number
of displayed stages.

**Worked example 3: unramified versus totally ramified degree two.** Over
Q-two the polynomial X squared plus X plus one has irreducible residue
polynomial. Its root gives an unramified quadratic field with four-element
residue field and uniformizer two. Over Q-three the polynomial X squared
plus three X plus three is Eisenstein. Its root pi has valuation
one half relative to the rational three-adic normalization, residue field
of size three and ramification index two. Writing zeta equal to one
plus pi shows zeta squared plus zeta plus one vanishes. These
two extensions both adjoin a primitive cube root of unity, but the
rational prime being completed changes its local ramification behavior.

<a id="section-257-the-global-product-formula"></a>
## The global product formula {#section-259-the-global-product-formula}

For later heights, use the following global normalization, which differs by
powers from some extension-normalized local absolute values but gives the
same topologies. At a nonzero prime ideal q define absolute alpha to
be N(q) to minus v-q(alpha). At a real place use the ordinary
embedding modulus, and at a complex place use its square. Ideal factorisation
and norm multiplicativity give the product of the finite-place values as
the reciprocal of the absolute field norm. The archimedean product is
that absolute field norm, by the embedding formula. Therefore the product
over all places is one for every nonzero alpha. Only finitely many
finite-place factors differ from one.

This is a global identity assembled from all primes and embeddings. One
completion alone does not prove that a fractional ideal is principal or
that an everywhere locally soluble equation has a global point. In the
later descent proof, these places will bound a finite list of candidate
square classes; a separate global argument is needed to connect candidates
to actual points.

<a id="section-277-exercises-with-two-hints-and-complete-solutions"></a>
## Exercises with two hints and complete solutions {#section-279-exercises-with-two-hints-and-complete-solutions}

### Exercise 12.1: a rational valuation {#valuations-local-fields-ex-1}

Compute the two-adic and three-adic valuations of seventy-two divided by five.

<details>
<summary>Hint 1</summary>
Factor the numerator into prime powers.
</details>
<details>
<summary>Hint 2</summary>
The denominator is a unit at both selected primes.
</details>
<details>
<summary>Solution</summary>
Seventy-two is two cubed times three squared. Subtracting
the denominator exponents gives valuations three and two.
The corresponding rational-normalized absolute values are one eighth
and one ninth. A large real numerator has produced
small nonarchimedean values because divisibility, rather than real
magnitude, defines closeness at these primes.
</details>

### Exercise 12.2: unequal valuation sums {#valuations-local-fields-ex-2}

If v(a) is two and v(b) is five, determine v(a+b).

<details>
<summary>Hint 1</summary>
Factor out a uniformizer squared.
</details>
<details>
<summary>Hint 2</summary>
The remaining sum is a unit plus an element divisible by the uniformizer.
</details>
<details>
<summary>Solution</summary>
The remaining sum is a unit, so the valuation
is exactly two. If it lay in the maximal
ideal, subtracting the divisible term would put the
unit there too. Equal input valuations could cancel,
but the distinct residues here prevent such cancellation.
This equality is stronger than the lower-bound valuation inequality.
</details>

### Exercise 12.3: a geometric limit {#valuations-local-fields-ex-3}

Find the five-adic limit of the sums one plus five through five-to-N.

<details>
<summary>Hint 1</summary>
Use the finite geometric identity before passing to a limit.
</details>
<details>
<summary>Hint 2</summary>
Five-to-N-plus-one tends to zero in the five-adic absolute value.
</details>
<details>
<summary>Solution</summary>
The limit is one divided by one minus five,
namely minus one quarter. Its denominator is a
five-adic unit, so it belongs to the integer ring.
The Cauchy property follows from the increasing valuation
of each omitted geometric tail. The answer concerns
the five-adic topology and does not describe the real
limit of the same increasing partial sums.
</details>

### Exercise 12.4: a simple-root lift {#valuations-local-fields-ex-4}

Lift the root one of X squared minus six modulo five to a root modulo twenty-five.

<details>
<summary>Hint 1</summary>
Write the lift as one plus five t.
</details>
<details>
<summary>Hint 2</summary>
The divided error is minus one and the derivative is two modulo five.
</details>
<details>
<summary>Solution</summary>
The equation minus one plus two t equal to
zero gives t equal to three modulo five.
Thus sixteen is the lift, and its square minus
six equals two hundred fifty, divisible by twenty-five.
The derivative remains a unit, so Hensel continues
this compatible root uniquely in the residue-one class.
</details>

### Exercise 12.5: an excluded repeated root {#valuations-local-fields-ex-5}

Can the simple-root theorem be applied to the root zero of X squared minus five modulo five? Does a root exist in Q-five?

<details>
<summary>Hint 1</summary>
The derivative vanishes at that residue.
</details>
<details>
<summary>Hint 2</summary>
The valuation of a square in Q-five is even.
</details>
<details>
<summary>Solution</summary>
The theorem does not apply. In fact a
five-adic root would have twice its integer valuation
equal to one, impossible. A root exists in
an Eisenstein quadratic extension, where half-integer base-normalized
valuations are allowed. This separates a residue root,
a root in the completion, and a root in
a finite extension of that completion.
</details>

### Exercise 12.6: the factor-correction map {#valuations-local-fields-ex-6}

Why is the linear map (A,B) mapped to A h plus B g injective under the degree restrictions in factor Hensel lifting?

<details>
<summary>Hint 1</summary>
An element of its kernel gives A h equal to minus B g.
</details>
<details>
<summary>Hint 2</summary>
Coprimality forces g to divide A, which has smaller degree.
</details>
<details>
<summary>Solution</summary>
The divisibility gives A zero; the equation then
forces B zero in the residue polynomial domain.
The source and target dimensions both equal the
sum of the factor degrees, so injectivity gives
surjectivity. This supplies the unique coefficient correction
at each precision and explains the coprimality hypothesis.
</details>

### Exercise 12.7: an unramified residue degree {#valuations-local-fields-ex-7}

What are the degree, ramification index and residue cardinality of the extension of Q-three defined by an irreducible quadratic residue polynomial lifted monically?

<details>
<summary>Hint 1</summary>
Use the finite free basis with two powers of the root.
</details>
<details>
<summary>Hint 2</summary>
The base uniformizer remains a generator of the maximal ideal.
</details>
<details>
<summary>Solution</summary>
The field degree is two, ramification index one
and residue degree two. Its residue field has
nine elements. The quotient field construction and the
coefficient-minimum argument prove these facts, including that
the displayed ring is the full integer ring.
An arbitrary monic quadratic without irreducible residue would
not automatically have the same properties.
</details>

### Exercise 12.8: an Eisenstein cubic {#valuations-local-fields-ex-8}

Describe the extension of Q-five defined by X cubed minus five, including whether its ramification is tame.

<details>
<summary>Hint 1</summary>
The polynomial is Eisenstein at five.
</details>
<details>
<summary>Hint 2</summary>
Its root is a uniformizer whose cube is the base uniformizer.
</details>
<details>
<summary>Solution</summary>
The field degree and ramification index are three,
while the residue degree is one and residue
cardinality five. Its integer ring is Z-five adjoined
the root, proved by the Eisenstein discrete-valuation argument.
It is tame because three is prime to residue
characteristic five. No claim of a cyclic Galois
group follows from this Eisenstein calculation.
</details>

### Exercise 12.9: a root of unity {#valuations-local-fields-ex-9}

Find the least unramified extension degree of Q-two containing a primitive seventh root of unity.

<details>
<summary>Hint 1</summary>
Its residue field must have multiplicative order divisible by seven.
</details>
<details>
<summary>Hint 2</summary>
Find the least f for which two-to-f is one modulo seven.
</details>
<details>
<summary>Solution</summary>
The powers two, four and eight give least
f equal to three. The residue field of
eight elements has a primitive seventh root, which
lifts uniquely because seven is a unit at
two. The root's residue order excludes any smaller
unramified degree. This is the local Frobenius order
calculation used later in cyclotomic splitting.
</details>

### Exercise 12.10: the rational product formula {#valuations-local-fields-ex-10}

Check the product formula for the rational number six.

<details>
<summary>Hint 1</summary>
Only two and three contribute finite-place values different from one.
</details>
<details>
<summary>Hint 2</summary>
Multiply the ordinary real value by one half and one third.
</details>
<details>
<summary>Solution</summary>
The product is six times one half times
one third, equal to one. Every other rational
prime gives valuation zero. This elementary case illustrates
the global cancellation between numerator size and divisibility;
the number-field version replaces rational prime exponents by
prime-ideal norms and the real value by the product
over all archimedean embeddings.
</details>

### Exercise 12.11: why complex places are squared {#valuations-local-fields-ex-11}

Explain the factor two in a complex logarithmic coordinate of the global product formula.

<details>
<summary>Hint 1</summary>
A nonreal embedding occurs with its complex conjugate.
</details>
<details>
<summary>Hint 2</summary>
Their two moduli multiply to the square of either one.
</details>
<details>
<summary>Solution</summary>
The field norm includes both conjugate embeddings.
Their absolute contribution is the squared modulus,
whose logarithm is twice the logarithm of
one chosen representative. Counting only one unsquared
complex modulus would not reproduce the field norm
and would break the product identity. The normalization
is arithmetic bookkeeping, not an extra independent place.
</details>

### Exercise 12.12: a local-to-global boundary {#valuations-local-fields-ex-12}

Does constructing roots in several completions prove that the original polynomial has a rational root?

<details>
<summary>Hint 1</summary>
A completion contains additional field elements beyond the rationals.
</details>
<details>
<summary>Hint 2</summary>
Even the square-root-two example gives a seven-adic root of an irreducible rational polynomial.
</details>
<details>
<summary>Solution</summary>
No such implication follows. X squared minus
two has no rational root by the usual
coprime-square argument, yet it has the displayed
seven-adic root and roots at many other places.
A theorem connecting all local conditions to a
global conclusion requires separate hypotheses and proof.
Descent uses local conditions to constrain candidates; it
does not identify every candidate with a global point.
</details>

<a id="section-552-summary-and-next-connection"></a>
## Summary and next connection {#section-554-summary-and-next-connection}

Prime-ideal divisibility yields an ultrametric, whose Cauchy completion is
described by compatible residue digits. Hensel's two proved lifting forms
control simple roots and coprime factors. Unramified and Eisenstein constructions
give full integer rings, residue degrees and ramification indices in the
cases needed for cyclotomic arithmetic. The global product formula assembles
all primes and embeddings and will normalize heights in descent. Local
solubility retains its separate scope from global rational existence.

<a id="section-571-sources"></a>
## Sources {#section-573-sources}

Milne's author-hosted [Algebraic Number Theory](https://www.jmilne.org/math/CourseNotes/ANT.pdf) provides a reference for valuation conventions. General finite-extension and ramification-filtration theorems are distinguished from the constructions proved here.
