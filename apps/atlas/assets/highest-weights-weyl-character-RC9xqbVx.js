var e=`---
parent_id: book-lie-groups-lie-algebras
chapter_id: highest-weights-weyl-character
title: "Highest Weights and the Weyl Character Formula"
level: graduate
license: CC BY-SA 4.0
---

# Highest Weights and the Weyl Character Formula {#section-1-highest-weights-and-the-weyl-character-formula}

An sl(2) string records how a representation behaves along one root.
In rank two, the strings must fit together. The highest weight controls
that fit, and the character records every weight with its multiplicity.
This chapter proves the highest-weight classification and Weyl character
formula for finite-dimensional irreducible representations of the complex
Lie algebra sl(3). It then states the general semisimple formula with
its hypotheses. The proof here is a full rank-two proof, including
the differential identity that eliminates possible lower alternating terms.

Read [Representations of sl(2)](sl2-representations.md),
[Root Systems](root-systems.md) and
[Root Space Decomposition](semisimple-root-decomposition.md). Our invariant
form on sl(3) is trace of XY, not its Killing form, which is six
times that form. On the real plane of diagonal trace-zero matrices
it induces the ordinary Euclidean form. Roots have squared length two.
This normalization matters in the Casimir calculation below.

<a id="section-18-highest-vectors-and-the-dominant-integral-pair"></a>
## Highest vectors and the dominant integral pair {#section-20-highest-vectors-and-the-dominant-integral-pair}

Let h consist of diagonal trace-zero matrices. Write epsilon-i for
the functional extracting the i-th entry. The positive roots are
alpha-one equal to epsilon-one minus epsilon-two, alpha-two equal
to epsilon-two minus epsilon-three, and their sum. Put E-one equal
to the matrix unit E-twelve, E-two equal to E-twenty-three, and
F-one and F-two equal to their transposes. Their coroots H-one,
H-two are respectively diag(1, minus1,0) and diag(0,1,minus1).
Each triple is the normalized sl(2) triple used earlier.

In any finite-dimensional representation the two coroot operators are
diagonalizable, because restriction to either sl(2) is completely reducible.
They commute, so they are simultaneously diagonalizable. The module
therefore decomposes into joint weight spaces V-mu. A root operator
of root alpha carries V-mu into V-(mu+alpha), by its commutator
with h. This proves the weight-shifting statement without an assumption
that the original matrices were already diagonal in one convenient basis.

The upper triangular trace-zero algebra is solvable. Lie's theorem gives
a simultaneous eigenvector v for its action on any nonzero module.
Every strictly upper triangular matrix lies in its derived algebra and
therefore acts as zero on that one-dimensional invariant line. Thus
v is a highest vector: h acts by a weight lambda and all positive
root operators annihilate v. The same conclusion follows by choosing
a maximal weight under positive-root addition; the triangularization
argument explains why the relevant ordering is available before listing
the weights.

For an irreducible module, v generates the whole module. Words in
negative-root operators, Cartan operators and positive-root operators can
be reordered into that order. Interchanging adjacent operators uses
XY equal to YX plus [X,Y]. The swapped word has one fewer
ordering inversion; the commutator term has smaller total length. Induction
first on length and then on inversions proves the spanning assertion.
This is the spanning part of the Poincaré–Birkhoff–Witt argument;
linear independence of all such words is not needed here. Applied
to v, positive factors vanish and Cartan factors become scalars. Hence
every weight has the form lambda minus a nonnegative integer combination
of the positive roots, and the lambda space is exactly the line Cv.

Restriction to the first rank-one triple shows that lambda(H-one) is
a nonnegative integer: v is a highest vector for that sl(2), and
its generated rank-one module has the earlier finite ladder. The
same applies to H-two. Write these two integers as a and b.
With fundamental weights omega-one and omega-two, defined by their
values one and zero on the two coroots, we obtain

$$\\lambda=a\\omega_1+b\\omega_2,\\qquad a,b\\in\\mathbb Z_{\\ge0}.$$

Every pair occurs. In the tensor product of the a-th symmetric
power of the standard module and the b-th symmetric power of
its dual, the vector consisting of a copies of e-one and b
copies of e-three-star is highest of weight lambda. Its cyclic
submodule has a one-dimensional top weight. Choose a maximal proper
submodule and take the quotient. No proper submodule contains the
generating highest vector, so its image remains nonzero and the
quotient is irreducible with highest weight lambda. A maximal submodule
exists simply by choosing one of maximal dimension in this finite-dimensional
space; no infinite-dimensional choice argument is required for existence.

For uniqueness, form the universal highest-weight cyclic module: quotient
the associative enveloping algebra by the left ideal imposing all positive
operators zero and all H equal to lambda(H) on its cyclic vector.
The same reordering shows that it is spanned by negative words,
is a sum of weight spaces, and has top weight dimension at most
one. The tensor construction shows that its top vector is nonzero.
Every proper submodule misses the top line. Indeed a vector with
nonzero top component would yield that component by a polynomial
in Cartan operators on the finitely many weights appearing in that
vector, and hence would generate the whole module. The sum of
all proper submodules still misses the top line, since every vector
in that sum is a finite sum with zero top component. It is
therefore the unique maximal proper submodule. Every irreducible highest-weight
module is the resulting quotient. This proves uniqueness as well
as existence, without assuming complete reducibility of all sl(3) modules.

<a id="section-95-characters-and-the-alternating-denominator"></a>
## Characters and the alternating denominator {#section-97-characters-and-the-alternating-denominator}

The formal character is the finite sum of symbols e-to-mu with
coefficient dimension of V-mu; multiplication adds exponents. It may also
be evaluated near a diagonal H as the analytic function trace(exp H).
Restriction to each root sl(2) partitions the weights into symmetric
strings with equal reflected multiplicities. Consequently the character is
invariant under each simple reflection and hence under the Weyl group
S-three. This use of rank-one complete reducibility is valid even
though the entire sl(3) representation has not been decomposed.

Let rho be half the sum of positive roots. Here rho equals
omega-one plus omega-two, or epsilon-one minus epsilon-three. Define
the alternating sum A-nu by summing sign(w) e-to-w-nu over the
six permutations. A direct Vandermonde expansion gives

$$D=e^\\rho\\prod_{\\alpha>0}(1-e^{-\\alpha})
=\\prod_{\\alpha>0}2\\sinh(\\alpha/2)=A_\\rho.$$

For example set z-i equal to e-to-epsilon-i, so their product is
one. The determinant with columns z-i squared, z-i and one is
the Vandermonde product. Dividing that determinant by z-one z-two
z-three, which is one, gives exactly the exponents which permute
(1,0,minus1). This verifies both the product and its signs.
The expression D is alternating and has highest exponent rho.
Thus D times the character is a finite alternating sum, with
highest exponent lambda plus rho and coefficient one. Alternation alone
does not exclude smaller dominant orbits. The next proof supplies
the essential exclusion rather than asserting it from the leading term.

<a id="section-125-casimir-and-the-radial-identity"></a>
## Casimir and the radial identity {#section-127-casimir-and-the-radial-identity}

Choose dual bases of sl(3) for the trace form. Their quadratic
sum C in the enveloping algebra is central. Here is the proof
of that familiar assertion. Invariance of the form says that the
matrix of ad-X on one basis is the negative transpose of its
matrix on the dual basis. In the commutator of X with the
sum of basis-times-dual-basis products, the two resulting sums therefore
cancel term by term. Thus [X,C] is zero for every generator X.

For a basis H-j of h and its dual H-upper-j, and root
vectors E-alpha,F-alpha with trace(E-alpha F-alpha) equal to one, this is

$$C=\\sum_j H_jH^j+
\\sum_{\\alpha>0}(E_\\alpha F_\\alpha+F_\\alpha E_\\alpha).$$

On a highest vector its value is the scalar
c-lambda equal to the squared norm of lambda plus twice its
inner product with rho. Centrality and irreducibility make this its
value on the whole module, by Schur's lemma. More explicitly,
the Cartan part contributes the squared norm of lambda, and each
E F term contributes the value of [E,F] while F E vanishes.
The sum of these coroot vectors corresponds to twice rho under
the trace form. In this normalization

$$c_\\lambda=\\|\\lambda+\\rho\\|^2-\\|\\rho\\|^2.$$

Let chi(H) be the analytic character and let Delta be the flat
Laplacian on the real diagonal plane, extended to these exponentials.
It acts on e-to-mu by multiplication by the squared norm of mu.
For one positive root set X-alpha equal to trace(E F exp H)
and Y-alpha equal to trace(F E exp H). Cyclicity of trace and
the conjugation identity for root operators give
X-alpha equal to e-to-alpha(H) Y-alpha. Their difference is trace([E,F]exp H),
which is the derivative of chi in the direction dual to alpha.
Away from the root hyperplanes, solving these two equations yields

$$c_\\lambda\\chi
=\\Delta\\chi+
\\sum_{\\alpha>0}\\coth(\\alpha/2)\\,\\partial_\\alpha\\chi.$$

Every step is an identity between finite-dimensional traces; no interchange
of an infinite series of weights is involved. Apparent singularities
will disappear after multiplying by D. Logarithmic differentiation of
the product for D gives its gradient as D times one half
the sum of coth(alpha/2) alpha. The alternating expansion of D gives
Delta D equal to the squared norm of rho times D, since
all six w-rho have the same norm. The product rule now proves

$$\\Delta(D\\chi)=\\|\\lambda+\\rho\\|^2D\\chi.$$

Initially this holds away from the hyperplanes. Both sides are finite
exponential sums, so equality there proves equality everywhere. Equivalently,
each exponent with nonzero coefficient in D chi must have squared
norm equal to the squared norm of lambda plus rho. Distinct
exponentials are independent: restrict to a generic line where their
exponents are distinct, then use the Vandermonde system obtained by
differentiating at zero.

<a id="section-184-eliminating-every-lower-orbit"></a>
## Eliminating every lower orbit {#section-186-eliminating-every-lower-orbit}

Every exponent of D chi is at most lambda plus rho in
the positive-root order. This follows directly from its product form:
weights of chi are lambda minus sums of positive roots, and
exponents of D are rho minus sums of positive roots. Since
D chi is alternating, any exponent fixed by a reflection has
coefficient zero. Every regular exponent has a unique Weyl translate
in the open dominant chamber, by the chamber theorem already proved.
That translate is still in the support and still at most lambda
plus rho.

Suppose a dominant exponent nu in that support differs from lambda
plus rho. Their difference is a nonzero nonnegative combination of
simple roots. Pairing that difference with lambda plus rho plus nu
is strictly positive: lambda plus rho pairs positively with each simple
root, and nu pairs nonnegatively. Thus the squared norm of nu
is strictly smaller. This contradicts the Laplacian identity. Only the
orbit of lambda plus rho remains. Its top coefficient is one,
because the only way to produce that exponent is the highest
weight of chi times the highest exponent of D. We have proved

$$\\boxed{\\displaystyle
\\operatorname{ch}L(a,b)=\\frac{A_{\\lambda+\\rho}}{A_\\rho}.}$$

This is the Weyl character formula for sl(3), with all cancellation
and support arguments supplied. In torus coordinates it becomes

$$\\operatorname{ch}L(a,b)(z)=
\\frac{\\det\\begin{pmatrix}
z_1^{a+b+2}&z_1^{b+1}&1\\\\
z_2^{a+b+2}&z_2^{b+1}&1\\\\
z_3^{a+b+2}&z_3^{b+1}&1
\\end{pmatrix}}
{\\det\\begin{pmatrix}z_1^2&z_1&1\\\\z_2^2&z_2&1\\\\z_3^2&z_3&1\\end{pmatrix}},
\\qquad z_1z_2z_3=1.$$

At coinciding z-values the quotient is interpreted by its continuous
extension, which exists because it is the already proved finite character.
To evaluate dimension, put z-i equal to exp(t h-i) for distinct
h-i summing to zero. Expanding each column in Taylor series, the
first nonzero determinant term has powers zero, one and two.
Its coefficient is the Vandermonde in the three column exponents
times the Vandermonde in the h-values, with the same factorial
factor in numerator and denominator. Cancellation gives

$$\\dim L(a,b)=\\frac{(a+1)(b+1)(a+b+2)}2.$$

**General formula, stated.** For a finite-dimensional complex semisimple
Lie algebra, a chosen positive root system, and a dominant integral
highest weight lambda, the irreducible finite-dimensional module has character
A-(lambda+rho) divided by A-rho and dimension the product over positive
roots of (lambda+rho,alpha) divided by (rho,alpha). The Weyl denominator
identity and the highest-weight existence theorem in arbitrary type belong
to that general theorem. This chapter proves its sl(3) case; it
does not claim that the rank-two Vandermonde calculation proves the
arbitrary-type denominator identity. This boundary makes it possible to
use the stated formula responsibly in later reading.

<a id="section-243-three-worked-representations-and-a-global-distinction"></a>
## Three worked representations and a global distinction {#section-245-three-worked-representations-and-a-global-distinction}

**Worked example 1: the standard module.** The vector e-one has highest
pair (1,0). Its three weights are epsilon-one, epsilon-two and epsilon-three,
each once. The formula gives dimension three, and the determinant
quotient reduces to z-one plus z-two plus z-three. The dual has
pair (0,1), not (1,0); it has the negative three weights. Equal
dimension does not make these complex modules isomorphic.

**Worked example 2: the adjoint module.** The root vector E-thirteen
is highest of weight alpha-one plus alpha-two, with pair (1,1).
The six off-diagonal matrix units give the six root weights, and
the trace-zero diagonal space contributes weight zero twice. The dimension
formula gives eight. This illustrates why a character needs multiplicities:
listing the six roots and merely adding a single zero would lose
one dimension. Simplicity of sl(3), or the root-bracket connectivity
argument, makes the adjoint representation irreducible.

**Worked example 3: symmetric square.** Symmetric quadratic tensors of the
standard module have basis e-i e-j with i at most j. Their
six weights are twice epsilon-i and epsilon-i plus epsilon-j for
i less than j. The highest pair is (2,0), whose predicted
dimension is six. The cyclic irreducible quotient of this highest-weight
module already has dimension six, so the six-dimensional symmetric square
itself is irreducible. This last inference uses a quotient dimension,
not an unproved general statement that all symmetric powers are irreducible.

Integrating to the simply connected compact group SU(3), its central
matrix zeta I, where zeta cubed is one, acts on L(a,b)
by zeta to the power a plus twice b. One can read
this on the highest tensor used for existence: the standard vector
contributes zeta and its dual contributes zeta-inverse. The two exponents
a minus b and a plus twice b agree modulo three. Thus
the representation descends to PSU(3) precisely when a plus twice b
is divisible by three. A Lie-algebra character alone does not choose
the global group on which it is to be used.

<a id="section-280-exercises-with-staged-hints-and-solutions"></a>
## Exercises with staged hints and solutions {#section-282-exercises-with-staged-hints-and-solutions}

### Exercise 12.1: fundamental weights {#highest-weights-weyl-character-ex-1}

Find omega-one and omega-two as triples of real coordinates summing to zero.

<details>
<summary>Hint 1</summary>
Their evaluations on the two coroots are consecutive coordinate differences.
</details>
<details>
<summary>Hint 2</summary>
Solve x-one minus x-two equal to one, x-two minus x-three equal to zero for the first weight.
</details>
<details>
<summary>Solution</summary>
The first solution is (two thirds, minus one third, minus one
third). The second is (one third, one third, minus two thirds).
They sum to rho equal to (one, zero, minus one). In
particular rho evaluates to one on both simple coroots, so adding
rho takes a dominant highest weight into the open dominant chamber.
</details>

### Exercise 12.2: a forbidden highest pair {#highest-weights-weyl-character-ex-2}

Why can a finite-dimensional irreducible highest weight not have pair (one half, two)?

<details>
<summary>Hint 1</summary>
Restrict to the first simple-root sl(2).
</details>
<details>
<summary>Hint 2</summary>
The highest vector is killed by E-one and has H-one eigenvalue one half.
</details>
<details>
<summary>Solution</summary>
The finite ladder identity forces every nonzero highest vector in
a finite-dimensional sl(2) module to have nonnegative integral highest
eigenvalue. One half violates that conclusion. This is a finite-dimensional
integrability restriction, not a prohibition on defining a formal or
infinite-dimensional highest-weight module with such a weight.
</details>

### Exercise 12.3: order of lowering {#highest-weights-weyl-character-ex-3}

Compute [F-two,F-one] and explain why lowering only in simple-root directions still generates the highest-weight module.

<details>
<summary>Hint 1</summary>
Multiply E-thirty-two and E-twenty-one in both orders.
</details>
<details>
<summary>Hint 2</summary>
Their commutator is the negative-root operator for the sum root.
</details>
<details>
<summary>Solution</summary>
The first product is E-thirty-one and the reverse product is
zero. Hence their commutator is E-thirty-one. All three negative
root operators are therefore generated by F-one and F-two through
products and differences. The ordered-word spanning proof consequently
shows that words in these two simple lowering operators already
span the cyclic module.
</details>

### Exercise 12.4: Weyl symmetry {#highest-weights-weyl-character-ex-4}

Explain why the weight multiplicities on opposite ends of a simple-root string agree.

<details>
<summary>Hint 1</summary>
Keep the value of the Cartan direction annihilated by that root fixed.
</details>
<details>
<summary>Hint 2</summary>
Decompose this preserved slice into irreducible modules for its root sl(2).
</details>
<details>
<summary>Solution</summary>
The commuting transverse Cartan direction preserves the root-sl(2)
action, so its eigenslices are invariant. Each such slice is
a direct sum of finite rank-one ladders. Each ladder has symmetric
H-alpha eigenvalues with equal multiplicities. Summing the ladders
proves reflection symmetry of the full weights, including cases where
several ladders overlap at one weight.
</details>

### Exercise 12.5: a Casimir value {#highest-weights-weyl-character-ex-5}

Compute c-lambda for the standard representation with the trace-form normalization.

<details>
<summary>Hint 1</summary>
Use the coordinates for omega-one from Exercise 12.1.
</details>
<details>
<summary>Hint 2</summary>
Its squared norm is two thirds and its inner product with rho is one.
</details>
<details>
<summary>Solution</summary>
The value is two thirds plus twice one, namely eight thirds.
Using the Killing form instead would scale the inverse-form Casimir
by one sixth. Thus a numerical Casimir value is incomplete
without identifying the invariant form used to define the dual basis.
</details>

### Exercise 12.6: the trace equations {#highest-weights-weyl-character-ex-6}

Solve X minus Y equal to d and X equal to e-to-t Y, and identify X plus Y.

<details>
<summary>Hint 1</summary>
First express Y in terms of d when e-to-t differs from one.
</details>
<details>
<summary>Hint 2</summary>
The quotient (e-to-t plus one)/(e-to-t minus one) is coth(t/2).
</details>
<details>
<summary>Solution</summary>
We have Y equal to d divided by e-to-t minus one,
and X plus Y equal to coth(t/2) d. In the character
proof, d is the directional derivative in the coroot direction
and t is alpha(H). Multiplication by D clears these apparent
singular factors, producing a finite exponential identity on all H.
</details>

### Exercise 12.7: why the norm comparison is strict {#highest-weights-weyl-character-ex-7}

Let nu be dominant and eta strictly dominant, with eta minus nu a nonzero nonnegative simple-root combination. Show that eta has larger norm.

<details>
<summary>Hint 1</summary>
Factor the difference of squared norms as an inner product.
</details>
<details>
<summary>Hint 2</summary>
Each simple root pairs positively with eta and nonnegatively with nu.
</details>
<details>
<summary>Solution</summary>
The difference is the pairing of eta minus nu with eta
plus nu. Every nonzero coefficient in the simple-root expansion
contributes a positive number, and none contributes a negative
number. Their sum is strictly positive. This is the step
which removes lower alternating orbits in the proof; alternation
and the top coefficient alone would not remove them.
</details>

### Exercise 12.8: a dimension {#highest-weights-weyl-character-ex-8}

Find the dimension of L(2,1), and compare it with L(1,2).

<details>
<summary>Hint 1</summary>
Insert the pair into the three-factor dimension formula.
</details>
<details>
<summary>Hint 2</summary>
Exchanging a and b leaves that product unchanged.
</details>
<details>
<summary>Solution</summary>
The dimension is three times two times five divided by two,
namely fifteen. L(1,2) also has dimension fifteen. They are dual
representations; their highest weights differ, so they are not
isomorphic. Once again dimension is a useful consequence of the
character, but it does not replace the highest-weight label.
</details>

### Exercise 12.9: zero weight in the adjoint {#highest-weights-weyl-character-ex-9}

Determine the multiplicity of weight zero in L(1,1) directly from matrices.

<details>
<summary>Hint 1</summary>
Weight zero means commuting with every diagonal trace-zero matrix.
</details>
<details>
<summary>Hint 2</summary>
Such a matrix is diagonal, and the ambient algebra imposes one trace relation.
</details>
<details>
<summary>Solution</summary>
The centralizer is the two-dimensional diagonal trace-zero subalgebra.
Thus the zero weight has multiplicity two. The other six
weights are the six root spaces, each one-dimensional. The total
is eight, agreeing with the formula. No claim that the
zero-weight space itself is an invariant subrepresentation follows.
</details>

### Exercise 12.10: descent to PSU(3) {#highest-weights-weyl-character-ex-10}

Which of L(1,0), L(1,1), and L(3,0) descend to PSU(3)?

<details>
<summary>Hint 1</summary>
Evaluate a plus twice b modulo three.
</details>
<details>
<summary>Hint 2</summary>
Descent through a quotient requires its kernel to act trivially.
</details>
<details>
<summary>Solution</summary>
The values are one, three and three respectively. Thus the
adjoint L(1,1) and the ten-dimensional L(3,0) descend, while the
standard module does not. This conclusion concerns the global
compact group; all three are valid sl(3) modules and SU(3)
representations. The central character records the missing global information.
</details>

### Exercise 12.11: the trivial character {#highest-weights-weyl-character-ex-11}

Check both character and dimension formulas at (a,b) equal to (0,0).

<details>
<summary>Hint 1</summary>
Then lambda plus rho equals rho.
</details>
<details>
<summary>Hint 2</summary>
The numerator and denominator alternants agree before taking any limit.
</details>
<details>
<summary>Solution</summary>
The character is identically one where the denominator is nonzero,
and its finite-character extension is one everywhere. The dimension
product is one times one times two divided by two, also
one. The apparent zero-over-zero values on reflection hyperplanes
are features of the quotient presentation, not singularities of
the trivial representation.
</details>

### Exercise 12.12: a proof boundary {#highest-weights-weyl-character-ex-12}

Why does the sl(3) determinant proof not, by itself, prove the general Weyl formula for E-eight?

<details>
<summary>Hint 1</summary>
Identify where the six permutations and the Vandermonde identity were used.
</details>
<details>
<summary>Hint 2</summary>
The general denominator identity and existence theorem require their own arguments.
</details>
<details>
<summary>Solution</summary>
The sl(3) proof explicitly identifies its Weyl group with S-three
and proves its denominator identity by a three-variable determinant.
That determinant does not describe the E-eight Weyl group or
its roots. The radial-Casimir strategy generalizes, but one must
also prove the appropriate denominator identity and highest-weight
existence results. The general formula is therefore stated here
as a theorem beyond the rank-two proof, with that boundary explicit.
</details>

<a id="section-539-summary"></a>
## Summary {#section-541-summary}

Finite sl(3) irreducibles are indexed by nonnegative integral pairs.
Ordered lowering words give their highest-weight support, rank-one strings
give Weyl symmetry, and a central Casimir gives a Laplacian identity.
That identity forces the alternating character to have a single
regular dominant orbit, proving the Weyl character formula and its
dimension consequence. Center action then distinguishes Lie-algebra data
from descent to a quotient group. Compact-group integration next explains
why matrix coefficients provide a complete harmonic language.

<a id="section-557-sources"></a>
## Sources {#section-559-sources}

Compare Humphreys and the official MIT Lie-theory lecture notes for the general Weyl theorem. The general formula is stated here; this chapter proves its sl(3) case.
`;export{e as default};