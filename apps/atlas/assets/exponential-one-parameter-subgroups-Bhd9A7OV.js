var e=`---
parent_id: book-lie-groups-lie-algebras
chapter_id: exponential-one-parameter-subgroups
title: "The Exponential Map and One-Parameter Subgroups"
level: graduate
license: CC BY-SA 4.0
---

# The Exponential Map and One-Parameter Subgroups {#section-1-the-exponential-map-and-one-parameter-subgroups}

An infinitesimal direction should generate a motion whose successive time
steps compose by addition. The matrix exponential does exactly that. It also
gives coordinates near the identity, but those local coordinates need not
extend to a globally unique logarithm, or even to a logarithm of every element.
This chapter proves the one-parameter correspondence, including automatic
smoothness of continuous matrix homomorphisms from the real line. The examples
show precisely which scalar-exponential intuitions survive noncommutativity.

Use [Matrix Groups as Manifolds](matrix-groups-manifolds.md), finite-dimensional
norm estimates and the fundamental theorem of calculus. Integrals of matrices
mean integrals of their entries. Uniformly convergent series may be integrated
termwise on compact intervals; the norm bounds below justify each use.
All time parameters are real. A complex matrix group is still regarded as
a real Lie group unless a complex structure is explicitly stated.

<a id="section-16-convergence-differentiation-and-conjugation"></a>
## Convergence, differentiation and conjugation {#section-18-convergence-differentiation-and-conjugation}

**Definition 3.1 (Matrix exponential).** For any real or complex square X,

$$\\exp X=\\sum_{r=0}^{\\infty}\\frac{X^r}{r!},\\qquad X^0=I.$$

A submultiplicative matrix norm bounds the norm of each summand by the
corresponding scalar summand. The series therefore converges absolutely and
uniformly on bounded sets. The same argument applies to each differentiated
series. In particular, along a fixed direction X,

$$\\frac{d}{dt}\\exp(tX)=X\\exp(tX)=\\exp(tX)X.$$

The equality of the two products here is justified because both factors are
power series in the same matrix. It does not authorize commuting arbitrary
matrices past one another.

**Proposition 3.2 (Elementary exponential identities).** Exponentials are
invertible with inverse exp(-X). If X and Y commute, their exponentials
multiply to exp(X+Y). For invertible P,

$$\\exp(PXP^{-1})=P(\\exp X)P^{-1}.$$

*Proof.* Absolute convergence permits collecting terms in the product of
the two series. When X and Y commute, the binomial formula identifies the
terms of each total degree with those of exp(X+Y). Taking Y equal to
minus X gives the inverse. For conjugation, induction shows that the rth
power of PXP-inverse is PX-to-the-r P-inverse. Substitute in the series
and factor out the two fixed matrices. ∎

Conjugation transports a motion under change of basis. The commuting
addition formula, in contrast, has a genuine hypothesis. It will fail
even for small triangular matrices when the two directions do not commute.

**Proposition 3.3 (Determinant of an exponential).** For every matrix X,

$$\\det(\\exp(tX))=e^{t\\operatorname{tr}X}.$$

*Proof.* The preceding identity makes A(t) equal to exp(tX) invertible.
The determinant differential proved in Chapter2 gives the derivative of
its determinant as determinant of A(t) times trace of A(t)-inverse A-prime(t).
The latter trace is trace of X. Thus the determinant solves the scalar
linear equation f-prime equal to trace X times f, with initial value one.
Multiplying by the opposite scalar exponential makes its derivative zero,
which proves the formula without a diagonalizability assumption. ∎

For real X this determinant is positive. Therefore a matrix with negative
real determinant cannot be a real exponential. For complex X there is
no sign obstruction. The formula also explains the trace-zero condition
for special linear directions without invoking eigenvalue logarithms.

<a id="section-67-the-derivative-away-from-zero"></a>
## The derivative away from zero {#section-69-the-derivative-away-from-zero}

**Theorem 3.4 (Derivative formula).** For matrices X,H,

$$D\\exp_X(H)=\\int_0^1 e^{(1-s)X}He^{sX}\\,ds.$$

*Proof.* Differentiating a power gives the sum of all words with one H
and the remaining letters X. Therefore differentiating the exponential
series gives the sum of $X^pHX^q/(p+q+1)!$ over nonnegative p,q.
These differentiated series converge uniformly on bounded sets by the
same exponential estimates, so this is the actual derivative.

On the integral side, expand its two exponentials. A term with p copies
on the left and q on the right has scalar factor
$\\int_0^1(1-s)^p s^q\\,ds/(p!q!)$. Integration by parts, beginning
with the integral of a single power, evaluates this factor as one divided
by factorial of p plus q plus one. Uniform absolute convergence on the
unit integration interval permits summation under the integral. The two
series consequently agree term by term. ∎

If H commutes with X, the integrand is exp X times H and the familiar
scalar-looking derivative is valid. Without commutation, the position of
H inside the integrand matters. At X equal to zero the derivative is H,
so the inverse-function theorem makes exponential a diffeomorphism near
zero onto a neighborhood of I. Its local inverse is called a local logarithm.

For a closed matrix group G, the restriction of this local exponential
to its tangent space gives the chart constructed in Chapter2. A sufficiently
small group element has a unique sufficiently small tangent logarithm.
The repeated word small is essential: larger logarithms can differ by
periods, or a global group element can fail to be any exponential at all.

<a id="section-99-one-parameter-subgroups-and-automatic-smoothness"></a>
## One-parameter subgroups and automatic smoothness {#section-101-one-parameter-subgroups-and-automatic-smoothness}

**Definition 3.5 (One-parameter subgroup).** A continuous homomorphism
gamma from the additive real line to a matrix group satisfies
gamma(s+t) equal to gamma(s)gamma(t). Its value at zero is I.
The homomorphism itself, rather than just its image as a set, is the object.

**Lemma 3.6 (A continuous matrix homomorphism is smooth).** Every such
continuous gamma has derivatives of all orders.

*Proof.* Choose a small positive epsilon and put
$B=\\int_0^\\epsilon\\gamma(s)\\,ds$. Continuity at zero makes B
divided by epsilon arbitrarily close to I, so B is invertible for a
sufficiently small choice. The homomorphism law gives

$$\\gamma(t)B=\\int_0^\\epsilon\\gamma(t+s)\\,ds
=F(t+\\epsilon)-F(t),\\qquad
F(u)=\\int_0^u\\gamma(s)\\,ds.$$

The fundamental theorem of calculus makes F continuously differentiable.
Multiplying the displayed difference by the fixed inverse of B shows that
gamma is continuously differentiable. The next theorem identifies it with
a matrix exponential, which is already smooth. This completes automatic
smoothness without differentiating an initially merely continuous function. ∎

**Theorem 3.7 (One-parameter correspondence).** For a closed matrix
group G, the map X to the curve exp(tX) is a bijection between its tangent
space g and its continuous one-parameter subgroups. The inverse sends a
subgroup curve to its derivative at zero.

*Proof.* By the definition and identification of g in Chapter2, every
X in g gives such a curve, and its derivative at zero is X. Conversely,
automatic continuous differentiability allows differentiation of
gamma(t+h) equal to gamma(h)gamma(t) at h equal to zero. With X equal
to gamma-prime at zero, this yields gamma-prime(t) equal to X gamma(t).
The derivative of exp(-tX)gamma(t) is therefore zero, so that product is
constantly I. Hence gamma(t) equals exp(tX). Its curve lies in G, so
X belongs to g. The derivative at zero makes the generator unique. ∎

The proof also shows completeness of left-invariant matrix directions:
their exponential motions exist for all real time, even when the group
is noncompact. This is not the assertion that every smooth vector field
on a noncompact manifold is complete. Matrix multiplication supplies the
special constant-coefficient structure in this case.

<a id="section-144-worked-example-1-a-nilpotent-chain"></a>
## Worked example 1: a nilpotent chain {#section-146-worked-example-1-a-nilpotent-chain}

Let N be the three-by-three matrix with ones in positions one-two and
two-three, and zeros elsewhere. Its square has a single one in position
one-three, and its cube is zero. Thus its exponential is exactly

$$\\exp(tN)=I+tN+\\frac{t^2}{2}N^2.$$

There is no omitted remainder. The two successive first-order links create
a second-order corner displacement. Multiplying the formulas at times s
and t gives coefficients s plus t on N and one half of s plus t squared
on its square, because the cross term is st. This verifies the subgroup
law directly, rather than relying on a drawing of a shear.

The inverse is obtained by changing t to minus t; its quadratic corner
term keeps its sign while the linear terms reverse. Merely negating every
off-diagonal entry would therefore produce the wrong inverse. This small
example demonstrates why nilpotent exponentials, though finite polynomials,
still have nonlinear coordinates. Their derivative at zero records N;
higher-order terms are forced by composition.

<a id="section-165-worked-example-2-rotation-periodicity-and-multiple-loga"></a>
## Worked example 2: rotation, periodicity and multiple logarithms {#section-167-worked-example-2-rotation-periodicity-and-multiple-loga}

For the real two-by-two matrix J with upper-right entry minus one and
lower-left entry one, the identity J squared equal to minus I separates
the exponential series into its even and odd parts:

$$e^{tJ}=(\\cos t)I+(\\sin t)J.$$

This recovers the rotation matrix of Chapter1. The generator J is unique
for this parametrized one-parameter subgroup, but the identity matrix has
many logarithms: every whole multiple of two pi times J exponentiates
to I. There is no contradiction with the unique small logarithm near zero,
because all nonzero such multiples lie outside a sufficiently small
neighborhood of zero.

The kernel of this subgroup homomorphism consists of multiples of two pi.
For a nonconstant continuous subgroup, any nonzero kernel time gives a
period. Conversely a period is a kernel time, by evaluating the subgroup
law at zero. A closed subgroup of the additive real line is either zero,
the whole line, or a discrete set of multiples of one positive number.
For completeness, if it has positive elements arbitrarily near zero,
integer multiples approximate every real number and closedness makes
it the whole line; otherwise its least positive element is attained and
division with remainder gives the discrete alternative. Applying this
to the kernel classifies the possible period patterns.

<a id="section-191-worked-example-3-failure-of-the-noncommuting-addition-r"></a>
## Worked example 3: failure of the noncommuting addition rule {#section-193-worked-example-3-failure-of-the-noncommuting-addition-r}

Take H diagonal with entries one and zero, and take E with its only nonzero
entry one in the upper-right position. The matrix M equal to H plus E
is idempotent: its square equals itself. Consequently

$$e^{tM}=I+(e^t-1)M
=\\begin{pmatrix}e^t&e^t-1\\\\0&1\\end{pmatrix}.$$

In contrast, exp(tH)exp(tE) has upper-right entry t exp(t), and the reversed
product has upper-right entry t. Neither is generally the displayed
upper-right entry exp(t) minus one. The two input matrices do not commute,
so Proposition3.2's addition hypothesis is absent.

All three expressions have the same first-order expansion at zero. Their
second-order terms differ, which explains why a first-order approximation
cannot prove an exact composition identity. The product approximation in
Chapter2 succeeds by taking many smaller steps and controlling the accumulated
quadratic error. A single finite step retains that error. This distinction
will lead to the commutator and local multiplication expansions in the next
chapter, with the error order stated rather than suppressed.

<a id="section-213-global-image-and-dense-subgroup-phenomena"></a>
## Global image and dense subgroup phenomena {#section-215-global-image-and-dense-subgroup-phenomena}

**Proposition 3.8 (A connected matrix group is generated by exponentials).**
Every element of a connected matrix group is a finite product of exponentials
of its Lie algebra, although it need not be a single exponential.

*Proof.* Exponential provides an identity neighborhood inside G. The
subgroup generated by this neighborhood is open, because it is a union
of translates of that neighborhood. Every coset is also open, so its
complement is open. It is therefore a nonempty open-and-closed subgroup
of the connected group and must be all of G. Its products are finite
by the definition of generated subgroup. ∎

For a concrete failure of single-exponential surjectivity, the real diagonal
matrix with entries minus one and minus two has positive determinant and
lies in the identity component of GL(2,R). If it were exp X, X would
commute with it, since X commutes with its own exponential. A real matrix
commuting with this distinct-eigenvalue diagonal matrix is diagonal, as
its off-diagonal entries must vanish. But the exponential of a real
diagonal matrix has positive diagonal entries. This contradiction proves
that connectedness does not make every real group element an exponential.

Even the image of a one-parameter subgroup need not be closed. In the
two-dimensional torus, send t to the pair with phases t and alpha t,
where alpha is irrational. To approximate a prescribed first phase theta,
use times theta plus integer multiples of two pi. The second phases are
then an irrational circle orbit and are dense by Chapter1. The image
is therefore dense in the torus. Its kernel is zero: both phases being
whole multiples of two pi would force an integer multiple of alpha integral.
The map is injective but not a homeomorphism onto the inherited topology,
because unbounded times can return arbitrarily close to the identity.

The image is a subgroup as an algebraic set, but it is not a closed matrix
subgroup. Its natural parametrized Lie-group topology and its inherited
subspace topology differ. This is the local-versus-global distinction that
the correspondence chapter must keep explicit when discussing immersed
subgroups and integration of homomorphisms.

<a id="section-251-exercises-with-staged-help"></a>
## Exercises with staged help {#section-253-exercises-with-staged-help}

### Exercise 3.1: finite exponential {#exponential-one-parameter-subgroups-ex-1}

For a matrix N with N cubed zero, multiply the finite formulas for exp(sN)
and exp(tN), and identify the inverse.

<details>
<summary>Hint 1</summary>

Discard terms containing three or more factors N, because they are exactly zero.

</details>
<details>
<summary>Hint 2</summary>

The coefficient of N squared includes the cross term st.

</details>
<details>
<summary>Solution</summary>

The product has constant term I, linear term (s plus t)N and quadratic
coefficient s squared over two plus st plus t squared over two. That is
one half of (s plus t) squared, so the product is exp((s+t)N).
Taking s equal to minus t leaves I. Thus the inverse is I minus tN
plus one half t squared N squared. The sign of the quadratic term does
not reverse. Exact nilpotence, not a claim that t is small, justifies
the finite truncation and every cancellation.

</details>

### Exercise 3.2: scalar and nilpotent parts {#exponential-one-parameter-subgroups-ex-2}

If N squared is zero and a is a scalar, compute exp(t(aI+N)). Describe
the real flow when a is negative but N is nonzero.

<details>
<summary>Hint 1</summary>

The scalar matrix commutes with N.

</details>
<details>
<summary>Hint 2</summary>

A linear-in-time factor accompanies the scalar exponential; it cannot be
discarded from the exact formula.

</details>
<details>
<summary>Solution</summary>

Commutation gives exp(t(aI+N)) equal to exp(at) times I plus tN.
For negative real a, both the scalar exponential and t times that
exponential tend to zero as positive time grows, so the matrix entries
tend to zero. At every finite time the exponential remains invertible.
The limiting zero matrix lies outside GL and causes no contradiction.
The nonzero nilpotent part can create transient shear; the exact flow
is not merely scalar contraction. The polynomial factor records information
that an eigenvalue list alone would omit.

</details>

### Exercise 3.3: continuous regularity {#exponential-one-parameter-subgroups-ex-3}

In Lemma3.6, explain why B is invertible for small epsilon and why the
integral identity gives continuous differentiability of gamma.

<details>
<summary>Hint 1</summary>

The average B divided by epsilon tends to gamma(0), which is I.

</details>
<details>
<summary>Hint 2</summary>

Inversion is not being applied to a time-dependent singular integral:
B is one fixed invertible matrix.

</details>
<details>
<summary>Solution</summary>

Continuity at zero bounds the norm of the difference between the average
and I by the supremum of gamma(s) minus I over the short interval.
That bound tends to zero. Since invertibility is an open condition,
the average and hence B are invertible for a sufficiently small choice.
The primitive F is continuously differentiable by the fundamental theorem
of calculus. The identity gamma(t) equal to the difference F(t+epsilon)
minus F(t), multiplied by fixed B-inverse, is therefore continuously
differentiable. No derivative of the originally continuous gamma was assumed.

</details>

### Exercise 3.4: generator uniqueness {#exponential-one-parameter-subgroups-ex-4}

If exp(tX) equals exp(tY) for every real t, prove X equals Y. Contrast
equality only at t equal to one.

<details>
<summary>Hint 1</summary>

Differentiate the equality of curves at zero.

</details>
<details>
<summary>Hint 2</summary>

The rotation example provides distinct matrices with the same single exponential.

</details>
<details>
<summary>Solution</summary>

The derivative of exp(tX) at zero is X, and that of the other curve
is Y, so equality of the whole parametrized curves forces equality of
their generators. At one time there is no such implication. Zero and
two pi times the planar rotation generator both exponentiate to I, but
their generated curves differ at many other times. A one-parameter
subgroup retains time parametrization. Its image set alone can also lose
generator information, since different nonzero rescalings of a circle
generator trace the same circle with different speeds.

</details>

### Exercise 3.5: determinant restriction {#exponential-one-parameter-subgroups-ex-5}

For a real X, prove that exp(tX) belongs to SL(n,R) for every real t
exactly when trace X is zero.

<details>
<summary>Hint 1</summary>

Use the determinant exponential formula in both directions.

</details>
<details>
<summary>Hint 2</summary>

Differentiate the scalar determinant expression at zero for necessity.

</details>
<details>
<summary>Solution</summary>

If trace X is zero, the formula gives determinant one for all t.
Conversely, if that determinant is constantly one, its derivative at
zero is zero. The formula identifies this derivative with trace X,
so the trace vanishes. This argument uses the whole curve and works
without diagonalizing X. Merely having determinant of exp X equal to
one at a single time gives weaker information over the complex field,
where a nonzero imaginary trace can have scalar exponential one.

</details>

### Exercise 3.6: unitary directions {#exponential-one-parameter-subgroups-ex-6}

Show directly that a skew-Hermitian X generates a unitary one-parameter
subgroup. Prove the converse by differentiating its preservation equation.

<details>
<summary>Hint 1</summary>

Taking a conjugate transpose commutes with the exponential series.

</details>
<details>
<summary>Hint 2</summary>

At zero, differentiate gamma(t)-star gamma(t) equal to I.

</details>
<details>
<summary>Solution</summary>

The exponential of X has conjugate transpose exp(X-star). For real t
and skew-Hermitian X this is exp(-tX), the inverse of exp(tX), proving
unitarity. Conversely a differentiable unitary subgroup curve satisfies
the preservation identity at every time. At zero the product rule gives
X-star plus X equal to zero. Therefore skew-Hermitian matrices are exactly
the generators, not merely a convenient sufficient family. Adding trace
zero similarly characterizes special-unitary generators through the
determinant formula. All these tangent conditions are real-linear.

</details>

### Exercise 3.7: derivative and commutation {#exponential-one-parameter-subgroups-ex-7}

Derive D exp at X in the direction I from the integral formula. Explain
why the same simplification is not justified for an arbitrary H.

<details>
<summary>Hint 1</summary>

The identity commutes with every power of X.

</details>
<details>
<summary>Hint 2</summary>

For general H its two surrounding exponential factors cannot simply be
combined across it.

</details>
<details>
<summary>Solution</summary>

With H equal to I, the integrand becomes exp((1-s)X)exp(sX), which is
constantly exp X. Its integral is therefore exp X. The same result
multiplied by H holds whenever H commutes with X. For arbitrary H,
moving H past an exponential requires a commutation relation that need
not hold. The noncommuting worked example already shows different
second-order terms under an unjustified rearrangement. The integral
formula retains their correct order and remains valid without such
an extra hypothesis.

</details>

### Exercise 3.8: a positive-determinant obstruction {#exponential-one-parameter-subgroups-ex-8}

Complete the proof that diagonal minus one, minus two is not a real
exponential, including the claim about its commuting matrices.

<details>
<summary>Hint 1</summary>

Write a general two-by-two real matrix and compare its products with the
given diagonal matrix entry by entry.

</details>
<details>
<summary>Hint 2</summary>

The two distinct diagonal eigenvalues force both off-diagonal entries of
a commuting matrix to vanish.

</details>
<details>
<summary>Solution</summary>

In a commuting matrix, the upper-right entry is multiplied by minus two
in one product and minus one in the other, so it must vanish. The same
comparison kills the lower-left entry. Thus every commuting real matrix
is diagonal. If A were exp X, the power series would make X commute
with A, hence X would be real diagonal. Its exponential has two positive
diagonal entries, contradicting those of A. This obstruction occurs
inside the positive-determinant component, so determinant sign alone
does not characterize the real exponential image.

</details>

### Exercise 3.9: connected generation {#exponential-one-parameter-subgroups-ex-9}

Explain why the subgroup generated by an identity neighborhood is both
open and closed. Why does this not assert one exponential per group element?

<details>
<summary>Hint 1</summary>

Translate the neighborhood inside the generated subgroup and then consider
its other cosets.

</details>
<details>
<summary>Hint 2</summary>

A subgroup generated by a set consists of finite products of its elements
and inverses, with no uniform word-length-one requirement.

</details>
<details>
<summary>Solution</summary>

Every element of the generated subgroup translates the identity
neighborhood into an open set still inside that subgroup, so the
subgroup is open. Its other cosets are translates and are open too;
their union is its complement, proving closedness. Connectedness then
forces the subgroup to be the whole group. Its elements are finite
products of small exponentials, and inverses are exponentials with
negative generators. Combining those products into one exponential
would require an additional theorem, and the real diagonal counterexample
shows that such a theorem fails in general.

</details>

### Exercise 3.10: a dense injective motion {#exponential-one-parameter-subgroups-ex-10}

For irrational alpha, prove that the torus motion with phases t and
alpha t has zero kernel. Explain why its image is nevertheless not embedded
with the topology of the real line.

<details>
<summary>Hint 1</summary>

A kernel time must be an integer multiple of two pi in both coordinates.

</details>
<details>
<summary>Hint 2</summary>

Irrational approximation supplies unbounded integer times returning the
second coordinate close to one while the first equals one exactly.

</details>
<details>
<summary>Solution</summary>

Write a kernel time as two pi times an integer k. The second coordinate
then requires alpha k integral, forcing k equal to zero. Thus the map
is injective. Irrational circle approximation gives integers k of
unbounded magnitude with alpha k arbitrarily close to integers. At
times two pi k the image tends to the identity while the parameter
does not tend to zero. The inverse from the image with its inherited
torus topology is therefore not continuous. Injectivity and smoothness
alone do not make a subgroup homomorphism an embedding.

</details>

### Exercise 3.11: conjugation of generators {#exponential-one-parameter-subgroups-ex-11}

If a fixed invertible P normalizes G, show that conjugation by P preserves
its Lie algebra and transports the generated one-parameter subgroups.

<details>
<summary>Hint 1</summary>

Conjugate every value exp(tX) and apply Proposition3.2.

</details>
<details>
<summary>Hint 2</summary>

Use P-inverse for the reverse inclusion.

</details>
<details>
<summary>Solution</summary>

For X in g, every exp(tX) belongs to G. Normalization puts its conjugate
by P in G as well, and the conjugation identity identifies it with
exp(t PXP-inverse). Thus the conjugated generator belongs to g.
Applying the same argument to P-inverse proves equality of the
transported tangent space with g. The whole one-parameter curve, not
merely its derivative, is transported by this formula. In the next
chapter this linear action becomes the adjoint representation, whose
derivative will reveal the commutator bracket.

</details>

### Exercise 3.12: special-unitary logarithms {#exponential-one-parameter-subgroups-ex-12}

Using unitary diagonalization, show that every SU(n) matrix is the
exponential of a trace-zero skew-Hermitian matrix. Explain why logarithm
uniqueness still fails.

<details>
<summary>Hint 1</summary>

Choose real eigenvalue angles and adjust one by a whole multiple of two pi
so their sum is zero.

</details>
<details>
<summary>Hint 2</summary>

Conjugate the imaginary diagonal angle matrix by the diagonalizing unitary.

</details>
<details>
<summary>Solution</summary>

The spectral theorem writes the given matrix as a unitary conjugate
of diagonal unit phases. Determinant one makes the angle sum a whole
multiple of two pi. Subtract that multiple from one angle without
changing its phase. The imaginary diagonal matrix of the corrected
angles is skew-Hermitian and trace zero. Conjugating it gives a
matrix with the same two properties, whose exponential is the original
element. Other angle choices can add opposite whole periods to two
diagonal entries, producing different logarithms when n is at least
two. Surjectivity therefore does not imply global injectivity.

</details>

<a id="section-636-summary-and-next-connection"></a>
## Summary and next connection {#section-638-summary-and-next-connection}

The exponential series converges smoothly, respects conjugation and turns
commuting addition into multiplication. Its derivative gives local coordinates,
and every continuous matrix one-parameter subgroup is exactly one exponential
curve with a unique generator. Periods, dense images and failures of global
surjectivity show how much topology a local chart omits. Finite products
of exponentials generate connected groups, but a single exponential need
not suffice. The next chapter extracts the noncommuting second-order
information into the Lie bracket and relates it to invariant vector fields.

<a id="section-656-sources"></a>
## Sources {#section-658-sources}

[Hall's author notes](https://arxiv.org/abs/math-ph/0005032) provide a matrix-first treatment. The fundamental theorem of calculus, finite-dimensional spectral theorem and inverse-function theorem are named inputs.
`;export{e as default};