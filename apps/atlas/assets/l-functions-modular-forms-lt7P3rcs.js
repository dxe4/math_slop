var e=`---
parent_id: book-algebraic-analytic-number-theory
chapter_id: l-functions-modular-forms
title: "L-functions and Modular Forms"
level: graduate
license: CC BY-SA 4.0
---

# L-functions and Modular Forms {#section-1-l-functions-and-modular-forms}

Dirichlet characters give Euler products because their coefficients are
multiplicative. A modular form begins with a different kind of symmetry:
fractional linear changes of its complex argument. That symmetry gives a
Mellin functional equation, while an additional Hecke eigencondition supplies
coefficient multiplicativity and an Euler product. These are separate mechanisms.
We prove each implication in the full-level setting and construct explicit
forms from convergent lattice sums.

Read [Characters and Dirichlet's Theorem](characters-primes-progressions.md),
[Dirichlet Series](dirichlet-series-euler-products.md), and
[Zeta's Functional Equation](zeta-continuation-functional-equation.md).
Holomorphic power series, residues and compact convergence are complex-analysis
preparation. The even-zeta evaluations used in the worked normalization are
derived from the actual [Parseval chapter](../fourier-analysis/mean-square-parseval.md).
The elliptic-curve modularity theorem is named at the end as a deep
input, distinct from the full-level results proved here.

<a id="section-18-the-group-its-domain-and-the-cusp-condition"></a>
## The group, its domain and the cusp condition {#section-20-the-group-its-domain-and-the-cusp-condition}

Let H be the upper half-plane and let Gamma be the integer two-by-two
matrices of determinant one. Such a matrix acts by z mapped to
(a z+b)/(c z+d). Direct subtraction from its conjugate gives
the transformed imaginary part as y divided by the squared modulus of
c z+d, so H is preserved. Translation T and inversion S, taking
z to minus one divided by z, generate Gamma up to the central
minus identity. Indeed Euclidean row operations reduce the coprime bottom row
of any determinant-one matrix; those operations are products of S and
integer translations, after which the remaining upper triangular matrix is
a translation up to sign.

A modular form of integer weight k for Gamma is holomorphic on H,
transforms by the factor (c z+d) to k, and is holomorphic at
infinity. The last condition has precise content. Translation invariance lets
the function descend under q equal to exp(two pi i z) to
a holomorphic function on the punctured disk. Holomorphy at infinity means
this has a removable singularity at q zero, so its power series
has only nonnegative integer exponents. A cusp form has constant coefficient
zero. Applying minus identity shows an odd-weight form for this group
is zero; the nonzero examples below have even weight.

Every point of H can be moved into the closed region with absolute
real part at most one half and modulus at least one. To see
existence, choose a nonzero lattice value c z+d of smallest modulus.
The lattice is discrete in the plane, so such a minimum exists.
Its integer pair is primitive, since dividing a common factor would lower
the modulus. Extend that pair to a determinant-one matrix by Bezout.
The transformed point has maximal imaginary part in its orbit. Translate
its real part into the stated interval. If its modulus were less
than one, inversion would increase its imaginary part, a contradiction.
In particular the region has imaginary part at least square root three
divided by two. This covering argument is all the fundamental-domain
information needed for the growth estimate; no uniqueness at boundary points
is being assumed.

<a id="section-55-lattice-sums-give-actual-modular-forms"></a>
## Lattice sums give actual modular forms {#section-57-lattice-sums-give-actual-modular-forms}

For even k greater than two define G-k as the sum of (m z+n)
to minus k over all nonzero integer pairs. On a compact subset
of H, the real-linear map from the pair (m,n) to m z+n
has a uniformly bounded inverse. Its modulus is therefore at least a
fixed positive constant times the Euclidean length of the integer pair.
The planar lattice sum of length to minus k converges for k
greater than two, as grouping points in successive annuli shows. Thus
the series converges absolutely and locally uniformly, proving holomorphy.

Substituting a transformed z permutes the nonzero pairs by an invertible
integer linear change. Factoring its denominator gives exactly the weight-k
transformation law. This is a proof of modularity from the sum, not
a conclusion inferred from a few arithmetic coefficients.

The terms with m zero add to twice zeta-k. For m nonzero
and imaginary part y at least one, summing over n gives a
bound by a constant times (absolute m times y) to one minus
k. Compare the shifted horizontal sum with its real-line integral plus
its largest term; the integral scales by that power. Summing over m
converges because k exceeds two. The remainder tends to zero with
y, uniformly in the real part. Hence G-k is bounded at infinity,
its q-singularity is removable, and its constant coefficient is twice zeta-k.
Normalize by this nonzero constant to define E-k.

We also derive the arithmetic coefficients. Put S-k(z) equal to the
sum over integers n of (z+n) to minus k. Its Fourier coefficient
at integer r is the real-line integral of w to minus k
times exp(minus two pi i r w) along a horizontal line in
H. Absolute summability justifies combining the translated unit intervals.
For r zero an antiderivative gives zero. For r negative, close the
line upward, where the exponential decays and no pole lies. For r
positive, close downward and obtain the negative of two pi i times
the residue at zero. On finite-height rectangles the vertical sides vanish
as their horizontal coordinate tends to infinity; then the remote horizontal
integral vanishes by its exponential factor. These ordered limits justify
the contour calculation. It yields

$$S_k(z)=\\frac{(-2\\pi i)^k}{(k-1)!}
\\sum_{r\\ge1}r^{k-1}q^r.$$

For even k the sign in the prefactor can equally be written
with positive two pi i. Separate positive and negative m in G-k,
which contribute equally, and group the resulting absolutely convergent
double series by the product m r. This gives

$$G_k(z)=2\\zeta(k)+
\\frac{2(2\\pi i)^k}{(k-1)!}
\\sum_{n\\ge1}\\sigma_{k-1}(n)q^n.$$

Divisor sums have appeared because a Fourier exponent can be written as
that product in exactly its divisor-indexed ways. Both the analytic
interchange and the arithmetic regrouping have now been justified.

<a id="section-110-cusp-forms-and-their-coefficient-growth"></a>
## Cusp forms and their coefficient growth {#section-112-cusp-forms-and-their-coefficient-growth}

Products of modular forms add weights, by multiplying the transformation
laws and their convergent q-series. In particular

$$D(z)=\\frac{E_4(z)^3-E_6(z)^2}{1728}$$

has weight twelve and constant coefficient zero. The worked calculation
below proves its first coefficient is one, so it is a nonzero cusp
form. We denote this constructed form by D here. Identifying it with
the infinite eta product and proving its absence of zeros on H require
additional product or valence theorems, which are not needed or asserted
in the proof below. This prevents a familiar product identity from being
silently imported as a proved transformation law.

For any full-level cusp form f of weight k, the quantity y to
k-over-two times the modulus of f is invariant under Gamma. On
the covering region just constructed, it is bounded: its low-height part
is compact, while its upper end decays exponentially by the zero-constant
q-series. Therefore the same quantity is bounded throughout H. Fourier
coefficient extraction at height y gives modulus of a-n at most a
constant times y to minus k-over-two times exp(two pi n y).
Choose y equal to one divided by n for positive n. We obtain
the polynomial bound a-n of order at most n to k-over-two.

This bound is sufficient for absolute convergence of the coefficient
Dirichlet series when the real part of s exceeds k-over-two plus
one. It is not a sharp coefficient theorem and does not imply
the stronger bounds associated with eigenforms. Its role here is to
license a Mellin interchange in a clearly stated initial domain.

<a id="section-141-mellin-continuation-and-its-functional-equation"></a>
## Mellin continuation and its functional equation {#section-143-mellin-continuation-and-its-functional-equation}

Define L-f(s) as the sum of a-n divided by n-to-s in
that absolute half-plane. Integrating the q-series along the imaginary axis
term by term gives its completion

$$\\Lambda_f(s)=(2\\pi)^{-s}\\Gamma(s)L_f(s)
=\\int_0^\\infty f(iy)y^{s-1}\\,dy.$$

The interchange is justified by the coefficient bound and the elementary
gamma integral in the initial domain. The modular transformation under S
has the exact form

$$f(i/y)=(iy)^k f(iy)=i^k y^k f(iy).$$

The cusp decay at infinity therefore gives decay at zero faster than
every power, after multiplying by y to minus k. The integral
converges for every s, locally uniformly with each logarithmic derivative
factor. It defines an entire function. Substitute y by its reciprocal
and use the displayed transformation to get

$$\\boxed{\\Lambda_f(s)=i^k\\Lambda_f(k-s).}$$

For even k, i-to-k is plus or minus one, so the two
applications are consistent. Reciprocal gamma is entire, making L-f itself
entire through this continuation. Any gamma-factor zeros that cancel special
values must be interpreted through the continued expression, rather than
as convergence of the original Dirichlet sum at all arguments.

This proof supplies an actual functional equation for every full-level
cusp form, with no Hecke hypothesis. An arbitrary arithmetic q-series
does not inherit it: the transformation at S and cusp decay are the
steps responsible for the reciprocal-scale integral symmetry.

<a id="section-175-hecke-symmetry-is-what-produces-an-euler-product"></a>
## Hecke symmetry is what produces an Euler product {#section-177-hecke-symmetry-is-what-produces-an-euler-product}

For a positive integer n, define

$$T_nf(z)=n^{k-1}\\sum_{ad=n}d^{-k}
\\sum_{b=0}^{d-1}f\\!\\left(\\frac{az+b}{d}\\right).$$

These operators preserve modular forms and cusp forms. Here is the
reindexing reason. Integer matrices of determinant n have left Gamma-coset
representatives given by the displayed upper triangular matrices, with positive
a,d and b between zero and d minus one. This is integer
row reduction, or equivalently a basis classification of index-n row
sublattices of the integer plane. Right multiplication by Gamma permutes
these cosets. With the determinant-normalized weight action, composition
of matrices composes the action, and left Gamma multiplication leaves f
unchanged. Summing over the cosets thus proves the modular transformation
law for T-n-f. Its finite sum remains holomorphic, and the coefficient
calculation below shows that no negative exponents, or constant exponent for
a cusp form, are introduced. This proves preservation without assuming a
simultaneous eigenbasis theorem.

Sum the b phases in the q-expansion. They vanish unless the
original Fourier index is divisible by d. Collecting the coefficient at
positive index m gives

$$a_m(T_nf)=\\sum_{d\\mid(m,n)}d^{k-1}a_{mn/d^2}(f).\\tag{15.1}$$

Now suppose f is a nonzero common eigenform for all these operators,
normalized by a-one equal to one. Its eigenvalue for T-n is
a-n, since the first coefficient in (15.1) is a-n. Comparing
coefficient m yields the exact relation between a-m a-n and the
displayed divisor sum. If m,n are coprime, this proves multiplicativity.
If n is p and m a positive p-power, it gives

$$a_{p^{r+1}}=a_p a_{p^r}-p^{k-1}a_{p^{r-1}},
\\quad a_1=1.$$

Multiplying the prime-power generating series by one minus a-p T plus
p-to-k-minus-one T squared leaves the constant one and cancels every
higher coefficient by this recurrence. Absolute convergence and multiplicativity
therefore give

$$L_f(s)=\\prod_p
\\left(1-a_pp^{-s}+p^{k-1-2s}\\right)^{-1}$$

in the previously stated safe half-plane. This proves the Euler-product
implication under the exact common-eigenform hypothesis. We have not needed
to assert that every cusp form is itself an eigenform, or to prove
existence of an eigenbasis. A linear combination of eigenforms can retain
the modular functional equation while losing coefficient multiplicativity.

<a id="section-226-three-worked-constructions-and-consequences"></a>
## Three worked constructions and consequences {#section-228-three-worked-constructions-and-consequences}

**Worked example 1: normalizing E-four and E-six.** The Fourier formula
gives E-four equal to one plus two hundred forty times the
divisor-cube generating series, and E-six equal to one minus five
hundred four times the divisor-fifth-power series. Their constants use
zeta-four equal to pi-to-four over ninety and zeta-six equal to
pi-to-six over nine hundred forty-five. These values can be checked
from Parseval rather than assumed from a numerical table: on the interval
from minus pi to pi, x squared has cosine coefficients four times
alternating sign divided by n squared and constant coefficient twice pi
squared over three. Parseval gives zeta-four. The sine coefficients of
x cubed are twice alternating sign times (pi squared divided by n
minus six divided by n cubed). A second Parseval identity, with
the known zeta-two and zeta-four values, gives zeta-six. Substitution
in the general G-k coefficient proves the two normalizations. For n
equal to two, the first divisor sum is nine and the second
is thirty-three, yielding coefficients two thousand one hundred sixty and
minus sixteen thousand six hundred thirty-two respectively.

**Worked example 2: a nonzero weight-twelve cusp form.** The first
coefficient of E-four cubed is three times two hundred forty,
namely seven hundred twenty. That of E-six squared is twice
minus five hundred four, namely minus one thousand eight. Their difference
is one thousand seven hundred twenty-eight, so D begins with q.
Its constant term cancels, and its modular law was proved by multiplication.
Thus it is a genuine nonzero cusp form. Finite coefficient arithmetic
has established its nonvanishing as a function, not a claim that it
has no zeros at individual points of H or that an unproved
infinite product equals it.

**Worked example 3: a forced central zero.** The product D E-six
is a nonzero cusp form of weight eighteen and begins with q.
Its completion satisfies reflection with sign i-to-eighteen, which is
minus one. At s equal to nine the reflected argument is the
same, so the completion is its own negative and vanishes. Gamma
at nine is finite and nonzero, hence the continued L-function also
vanishes there. This central-zero conclusion follows directly from the
proved symmetry, without claiming that the form is a Hecke eigenform.

<a id="section-266-elliptic-curves-the-deep-bridge-is-a-separate-theorem"></a>
## Elliptic curves: the deep bridge is a separate theorem {#section-268-elliptic-curves-the-deep-bridge-is-a-separate-theorem}

The modularity theorem for elliptic curves over the rationals associates
to each such curve a normalized weight-two cuspidal newform of level
its conductor. At a good prime its coefficient is p plus one
minus the finite-field point count. This is a named deep theorem,
not proved by our lattice sums or Mellin integral. The relevant group
is Gamma-zero of that level, defined by the lower-left matrix entry
divisible by the level; it has additional cusps and its newform theory
requires further hypotheses. Our full-level construction does not silently
replace that theory. Once the bridge and its analytic setup are supplied,
it connects the arithmetic point-count Euler factors with modular analytic
continuation. Neither modularity nor the sign of a functional equation alone
proves an equality between every analytic and algebraic rank.

<a id="section-281-exercises-with-two-hints-and-complete-solutions"></a>
## Exercises with two hints and complete solutions {#section-283-exercises-with-two-hints-and-complete-solutions}

### Exercise 15.1: imaginary parts {#l-functions-modular-forms-ex-1}

Derive the imaginary-part transformation for a determinant-one real matrix.

<details>
<summary>Hint 1</summary>
Subtract the complex conjugate of the fractional linear expression.
</details>
<details>
<summary>Hint 2</summary>
The numerator difference contains the determinant times z minus its conjugate.
</details>
<details>
<summary>Solution</summary>
Putting the two expressions over the common
denominator gives (ad minus bc) times (z
minus conjugate z), divided by the squared
modulus of c z+d. The determinant is one,
so the imaginary part is y over that
squared modulus, positive. This proves preservation of
H and supplies the invariant weighted modulus used
in the coefficient-growth argument.
</details>

### Exercise 15.2: odd weight {#l-functions-modular-forms-ex-2}

Why is every odd-weight modular form for the full group zero?

<details>
<summary>Hint 1</summary>
Minus identity fixes every point of H.
</details>
<details>
<summary>Hint 2</summary>
Its automorphy factor is minus one raised to the weight.
</details>
<details>
<summary>Solution</summary>
The transformation law says f equals minus
f for odd weight. Over the complex numbers
this forces f to vanish. The conclusion
uses the full group containing minus identity
with the stated trivial multiplier. Other groups
or multiplier systems can permit odd or
fractional weights and need their own definitions.
</details>

### Exercise 15.3: convergence dimension {#l-functions-modular-forms-ex-3}

Explain why the defining G-k lattice sum needs k greater than two for the absolute-convergence proof given here.

<details>
<summary>Hint 1</summary>
The summation lattice has two real dimensions.
</details>
<details>
<summary>Hint 2</summary>
An annulus of radius comparable to R contains at most a constant times R squared points.
</details>
<details>
<summary>Solution</summary>
Dyadic annuli contribute at most a constant
times R to two minus k. Summing over
dyadic R converges when k exceeds two.
At weight two this argument does not converge
absolutely; rearranging the lattice as if it
did would require an unjustified step. The
weight-two theory has a distinct normalization boundary.
</details>

### Exercise 15.4: an Eisenstein coefficient {#l-functions-modular-forms-ex-4}

Compute the q-cubed coefficient of E-four.

<details>
<summary>Hint 1</summary>
The divisors of three are one and three.
</details>
<details>
<summary>Hint 2</summary>
Add their cubes and multiply by two hundred forty.
</details>
<details>
<summary>Solution</summary>
The divisor-cube sum is one plus twenty-seven,
namely twenty-eight. Multiplication gives six thousand
seven hundred twenty. Its arithmetic interpretation
comes from the proved Fourier coefficient formula;
computing this single coefficient alone would not
prove the transformation law of the entire series.
</details>

### Exercise 15.5: cusp cancellation {#l-functions-modular-forms-ex-5}

Why is the difference E-four cubed minus E-six squared a cusp form?

<details>
<summary>Hint 1</summary>
Both products have weight twelve.
</details>
<details>
<summary>Hint 2</summary>
Each constant term is one, and there are no negative exponents.
</details>
<details>
<summary>Solution</summary>
The two products transform with the same
factor, so their difference is modular of
weight twelve. Its constant term vanishes and
its q-series is holomorphic at zero.
For the full group this is exactly the
cusp condition. The first-coefficient calculation then
proves the difference is not identically zero.
</details>

### Exercise 15.6: a safe L-series domain {#l-functions-modular-forms-ex-6}

Using only the proved coefficient bound for weight twelve, give a sufficient absolute-convergence half-plane.

<details>
<summary>Hint 1</summary>
The coefficient bound is of order n to the sixth.
</details>
<details>
<summary>Hint 2</summary>
Compare the absolute Dirichlet terms with a reciprocal-power series.
</details>
<details>
<summary>Solution</summary>
Real part of s greater than seven
makes the bound n to six minus
sigma summable. This is a sufficient
initial domain, not an optimal theorem about
the series. The continued function is entire
by the Mellin argument, which does not
assert ordinary series convergence everywhere.
</details>

### Exercise 15.7: the reciprocal-scale substitution {#l-functions-modular-forms-ex-7}

Apply y mapped to one divided by y in the Mellin integral and recover its reflection point.

<details>
<summary>Hint 1</summary>
The differential contributes a reciprocal square and reverses the limits.
</details>
<details>
<summary>Hint 2</summary>
Use the displayed modular identity, with the positive power of y raised to k.
</details>
<details>
<summary>Solution</summary>
The transformed integrand is i-to-k times
f(iy) times y to k minus s
minus one. Its integral is i-to-k
Lambda-f(k minus s). Thus reflection is
about k divided by two. The exponent
comes from both the modular weight and
the Mellin differential; omitting either gives
the wrong center.
</details>

### Exercise 15.8: a sign conclusion {#l-functions-modular-forms-ex-8}

What does the full-level functional equation force at the center when k is two modulo four?

<details>
<summary>Hint 1</summary>
Evaluate i-to-k for that weight class.
</details>
<details>
<summary>Hint 2</summary>
At s equal to k divided by two, the two arguments agree.
</details>
<details>
<summary>Solution</summary>
The sign is minus one, so the
entire completion equals its negative at
the center and must vanish. This forces
at least a central zero when a
nonzero form of that weight is present.
It does not determine the zero's exact
order or an elliptic-curve rank.
</details>

### Exercise 15.9: Hecke eigenvalues {#l-functions-modular-forms-ex-9}

For a common eigenform with first coefficient one, show its T-n eigenvalue equals a-n.

<details>
<summary>Hint 1</summary>
Compare the coefficient at index one in the eigen-equation.
</details>
<details>
<summary>Hint 2</summary>
The divisor sum in (15.1) has only divisor one when m is one.
</details>
<details>
<summary>Solution</summary>
The first coefficient of T-n-f is
a-n. On the other side it is
the eigenvalue times a-one, which is
that eigenvalue. Equality gives the assertion.
This normalization is necessary; scaling f
without fixing its first coefficient would
obscure this particular coefficient identification.
</details>

### Exercise 15.10: a prime-square coefficient {#l-functions-modular-forms-ex-10}

Express a at p squared in terms of a-p for the normalized common eigenform.

<details>
<summary>Hint 1</summary>
Use (15.1) with both indices p.
</details>
<details>
<summary>Hint 2</summary>
The two divisors one and p contribute a at p squared and p-to-k-minus-one a-one.
</details>
<details>
<summary>Solution</summary>
The answer is a-p squared minus
p to k minus one. This
is the first nontrivial coefficient in
the reciprocal quadratic local factor. Multiplicativity
for coprime indices would not determine
it; the prime-power Hecke relation is
a separate part of the Euler-product proof.
</details>

### Exercise 15.11: modularity without eigenconditions {#l-functions-modular-forms-ex-11}

Does every full-level cusp form automatically have the proved Euler product?

<details>
<summary>Hint 1</summary>
Review which proof used only the modular transformation and which used a common eigen-equation.
</details>
<details>
<summary>Hint 2</summary>
A sum of eigenforms need not be an eigenform with one set of eigenvalues.
</details>
<details>
<summary>Solution</summary>
The Mellin continuation and reflection hold
for every such cusp form. The
Euler product was proved under the
additional normalized common-eigenform hypothesis, which
forces coefficient multiplicativity. Without it the
proof supplies no Euler factorization. Keeping
these hypotheses separate prevents analytic symmetry
from being mistaken for multiplicative arithmetic.
</details>

### Exercise 15.12: the modularity-theorem boundary {#l-functions-modular-forms-ex-12}

Why do the full-level Eisenstein construction and Mellin proof not establish modularity of every rational elliptic curve?

<details>
<summary>Hint 1</summary>
They construct functions from lattice sums and assume transformation laws when treating general cusp forms.
</details>
<details>
<summary>Hint 2</summary>
The missing bridge must identify elliptic point-count coefficients with a weight-two newform of the correct nontrivial level.
</details>
<details>
<summary>Solution</summary>
Nothing in those arguments constructs that
curve-specific newform or proves the coefficient
identification at good primes. Its level,
cusps and newform conditions also differ
from the full-group examples. The modularity
theorem is therefore a separate named
deep input. A correct functional equation
conditional on modularity is not a proof of that input.
</details>

<a id="section-562-summary-and-next-connection"></a>
## Summary and next connection {#section-564-summary-and-next-connection}

Convergent lattice sums prove modular transformation laws and yield divisor-sum
Fourier coefficients. Cusp decay gives polynomial coefficient bounds and an
entire Mellin completion with its exact reflection sign. Normalized Hecke
eigenconditions separately force coprime multiplicativity, prime-power recurrence
and Euler factors. The elliptic modularity theorem remains a named deep
bridge, not an inference from sampled q-coefficients. Exact algorithms next
use finite groups and arithmetic certificates without converting those algebraic
procedures into security or analytic-rank claims.

<a id="section-582-sources"></a>
## Sources {#section-584-sources}

Sutherland's official [MIT modular-forms lecture](https://math.mit.edu/classes/18.783/2021/LectureNotes24.pdf) provides a reference for classical definitions. The lattice, Mellin and conditional Hecke implications are proved here; elliptic modularity and eta-product identification are distinguished as further theorems.
`;export{e as default};