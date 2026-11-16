
# The Zeta Function: Continuation and Functional Equation {#section-1-the-zeta-function-continuation-and-functional-equation}

An Euler product explains why zeta remembers primes, but it initially works
only to the right of the line with real part one. Continuing the function
requires another representation, and its functional equation requires a symmetry
that the original Dirichlet series does not visibly possess. The Gaussian
provides that symmetry: its Fourier transform is another Gaussian, and summing
over the integer lattice exchanges a scale with its reciprocal.

We prove the theta transformation from the Gaussian Fourier integral, then
use a split Mellin integral to construct the continuation and its functional
equation. Every integral interchange receives a convergence justification. In
particular the continued value at a negative integer is never presented as
ordinary convergence of the original series there.

Preparation is the preceding Dirichlet-series chapter, real integration and
complex holomorphic convergence. For the gamma-function input, use the actual
[Gamma and Zeta Functions](../complex-analysis/gamma-zeta-functions.md) chapter:
it proves the Euler integral, recurrence and zero-free meromorphic continuation,
including the entire reciprocal gamma product. For Fourier uniqueness, use
the actual [Fejér chapter](../fourier-analysis/fejer-means-approximate-identities.md);
the short uniqueness argument needed
below is also given explicitly. Our Fourier convention has exponential
exp(minus two pi i x xi), so its scaling differs from the angular-frequency
convention sometimes used in the Fourier book.

<a id="section-25-a-fourier-calculation-with-its-normalization"></a>
## A Fourier calculation with its normalization {#section-27-a-fourier-calculation-with-its-normalization}

For positive t, put f-t(x) equal to exp(minus pi t x squared).
The Gaussian integral is t to the power minus one half. At t
equal to one, square the positive integral and use polar coordinates:
the radial integral of exp(minus pi r squared) times two pi r
is one. Taking the positive square root gives the value one.
Changing variable by the positive square root of t gives the general
case. Positivity is relevant here: it selects the square root and
permits Tonelli in the squared integral without a conditional-convergence issue.

Let F-t(xi) be the Fourier integral of f-t. Differentiation under
the integral is justified by the integrable majorant given by a constant
times the absolute value of x times a Gaussian on compact xi-sets.
Integrating the x derivative by parts, with its Gaussian boundary terms
zero, yields

$$F_t'(\xi)=-\frac{2\pi\xi}{t}F_t(\xi),\qquad
F_t(0)=t^{-1/2}.$$

The unique solution of this scalar differential equation is

$$\widehat f_t(\xi)=t^{-1/2}e^{-\pi\xi^2/t}.$$

One can check the signs without remembering the formula. Differentiating
the Fourier exponential introduces minus two pi i x, while integrating
the Gaussian derivative introduces another factor i. Their product is
negative, producing decay rather than growth in xi. The value at zero
then fixes the scale. This is a transform calculation on an integrable
function with integrable derivatives, not an appeal to a distributional identity.

<a id="section-56-periodization-and-the-theta-transformation"></a>
## Periodization and the theta transformation {#section-58-periodization-and-the-theta-transformation}

For fixed positive t, sum f-t(x+n) over all integers n. On
the compact interval from zero to one this series and each of its
derivative series converge uniformly: a polynomial in x+n times a Gaussian
is bounded by a summable sequence once the finitely many nearby n
are set aside. The sum P-t is therefore a smooth periodic function.
Its k-th Fourier coefficient can be computed term by term, since the
sum of absolute integrals is finite. Substitute u equal to x+n in
each term. The factor exp(two pi i k n) is one, so
the intervals combine into the whole real line. The coefficient is
F-t(k), the Gaussian value just calculated.

These coefficients are absolutely summable. Their Fourier series therefore
converges uniformly to a continuous periodic function Q-t with those same
coefficients. To justify equality with P-t, subtract the two functions.
The difference has all integer Fourier coefficients zero. Convolution with
the Fejér kernel is consequently zero for every kernel order. Those
convolutions converge uniformly to the continuous function: split the integral
into a small neighborhood where uniform continuity bounds the difference,
and its complement where the Fejér mass tends to zero. Hence the
difference is zero. This proves the needed uniqueness instead of assuming
pointwise convergence of an arbitrary Fourier series.

Evaluate the resulting identity at x equal to zero. With theta-t
denoting the sum of exp(minus pi n squared t), we obtain

$$\boxed{\theta(t)=t^{-1/2}\theta(1/t),\qquad t>0.}$$

This is the Gaussian case of Poisson summation, proved with both its
convergence and its constants. It is enough for the zeta theorem; a
general Poisson formula for arbitrary slowly decaying functions is not needed.
As t tends to infinity, theta-t minus one decays exponentially. Indeed
n squared is at least n for positive integers n, so the tail
is bounded by twice a geometric series. On t at least one,
it is bounded by a fixed constant times exp(minus pi t).
The theta identity converts this into a controlled small-t expansion:
the leading term is t to minus one half, and the remaining
part is exponentially small after that scale is removed.

<a id="section-96-the-mellin-representation-where-it-first-converges"></a>
## The Mellin representation where it first converges {#section-98-the-mellin-representation-where-it-first-converges}

Write s as sigma plus i tau. For sigma greater than one,
absolute integration of the positive Gaussian terms gives

$$\frac12\int_0^\infty (\theta(t)-1)t^{s/2-1}\,dt
=\pi^{-s/2}\Gamma(s/2)\zeta(s)=:\Lambda(s).$$

Here the power of positive t uses its real logarithm. To verify
the interchange, replace s by sigma in the absolute value. For each
positive n, the substitution u equal to pi n squared t makes
the integral a fixed gamma integral times n to minus sigma. Their
sum converges precisely in the required starting half-plane. This is also
a direct reason that the boundary near t zero needs sigma greater
than one; the theta leading term makes the integrand behave like
t to the power (sigma minus one) divided by two minus one.

An identity on this half-plane is a starting point for continuation,
not a formula one may simply integrate unchanged for every s. The
small-t divergence must be separated. Split at t equal to one,
apply theta transformation to the lower integral, and substitute u equal
to the reciprocal of t. The isolated elementary terms integrate explicitly.
The result is

$$\Lambda(s)=\frac1{s(s-1)}+
\frac12\int_1^\infty(\theta(t)-1)
\left(t^{s/2-1}+t^{(1-s)/2-1}\right)\,dt.\tag{4.1}$$

For clarity, the elementary contribution before the factor one half is
the integral from zero to one of (t to minus one half
minus one) times t to s-over-two-minus-one. It equals twice divided
by s minus one, minus twice divided by s. Multiplying by one
half gives the rational term in the display. A sign error here
would reverse the residue at zero and spoil the later special values.

<a id="section-131-entire-remainder-and-the-completed-functional-equation"></a>
## Entire remainder and the completed functional equation {#section-133-entire-remainder-and-the-completed-functional-equation}

The integral in (4.1) is entire in s. On every compact s-set,
both powers of t and each of their s-derivatives are bounded by
a fixed power of t times a fixed power of its logarithm.
Exponential decay of theta minus one dominates all those factors on
t at least one. Dominated differentiation proves complex differentiability
of every order; alternatively uniform convergence on compact sets of the
integrals over finite intervals gives the same holomorphic conclusion.

Every term in (4.1) is unchanged when s is replaced by one
minus s. Thus it defines a meromorphic function on the plane,
agreeing with the original Lambda in its initial half-plane, and satisfies

$$\boxed{\Lambda(s)=\Lambda(1-s).}$$

Its only possible poles are simple poles at zero and one, with
residues minus one and one. They are actual poles because the
entire integral cannot cancel a nonzero principal part. The completed entire
function xi-s defined as one half s(s minus one) Lambda-s is
therefore entire and satisfies the same reflection identity. At zero and
one its value is one half, by the two residue calculations.

Multiplying Lambda by pi to s-over-two and reciprocal Gamma(s/2) defines
zeta on the plane. Reciprocal gamma is entire with simple zeros at
zero and the negative even integers. Its zero at zero cancels
Lambda's pole there. At one it has value the reciprocal of square
root pi, so the residue of zeta is one. No other pole
can occur. This proves the theorem in its original zeta language.

**Theorem 4.1.** The series defining zeta for real part greater than
one continues uniquely to a meromorphic function on the whole complex
plane, with its only pole simple at one and residue one. Its
completion satisfies the displayed functional equation, and xi is entire.
The zeros at negative even integers are simple. These conclusions are
proved by Gaussian Poisson summation and the named, already proved gamma
properties; no prime number theorem is used.

*Proof of the remaining zero assertion.* At s equal to minus twice
a positive integer m, the functional equation identifies Lambda-s with
Lambda at one plus twice m. The latter is a strictly positive
real number, since all factors in its original gamma-zeta product are
positive. Hence Lambda is nonzero and finite at the negative even
integer. Reciprocal gamma has a simple zero there, so zeta has
exactly a simple zero. Uniqueness of continuation follows from the identity
theorem on the connected plane with the pole omitted. ∎

This proof supplies continuation as an actual global function rather than
a chain of unnamed formal substitutions. It also identifies which representations
are still convergent where: the theta integral remainder converges everywhere,
while the original Dirichlet series and Euler product retain their original
half-plane restrictions. The equality of continued functions does not transfer
ordinary convergence from one representation to another.

The same integral also explains a useful reality property without locating
any zeros. For positive real t, theta-t minus one is real, and
the complex power uses the real logarithm of t. Taking conjugates
therefore replaces s by its conjugate inside the integrand. The compact-set
domination already established justifies taking that conjugate through the
integral. The rational term has real coefficients, so the continued completed
function has the same conjugation symmetry away from its two poles.
Multiplication by the real-coefficient polynomial defining xi extends the
identity to every complex s, including zero and one by continuity.

Now put s on the critical line, with real part one half.
Its reflection one minus s is its complex conjugate. Reflection symmetry
and conjugation symmetry together say that xi at s equals its own
conjugate, so its value is real. This statement concerns the completed
function: the gamma and exponential factors need not individually be real
at the same argument. It is consequently unsafe to transfer this reality
claim to the uncompleted zeta function without accounting for those factors.

These two symmetries also preserve zero multiplicities. Conjugating a local
power-series expansion conjugates its coefficients and its center; replacing
s by one minus s multiplies its first nonzero local coefficient by
a nonzero sign. Neither operation changes the order of vanishing. Thus
a zero of xi brings zeros at the conjugate, the reflection and
the conjugate reflection, with equal multiplicities. Some of these points can
coincide. The symmetry alone neither produces a zero nor forces every zero
onto the critical line; it describes the companions of any zero that
is present.

<a id="section-185-three-worked-consequences"></a>
## Three worked consequences {#section-187-three-worked-consequences}

**Worked example 1: the value at zero.** Near zero, Lambda-s has
principal part minus one divided by s. Gamma(s/2) has principal
part twice divided by s, so its reciprocal is s divided by
two plus a term of order s squared. The pi factor tends
to one. Their product tends to minus one half. Thus zeta at
zero is minus one half. This does not mean that the partial
sums of one plus one plus one converge to that number.
Those partial sums grow without bound. The finite value belongs to
the uniquely continued analytic function.

**Worked example 2: the value at minus one.** Reflection gives Lambda
at minus one equal to Lambda at two. The gamma recurrence and
Gaussian integral give Gamma at minus one half equal to minus twice
square root pi. Thus Lambda at minus one is minus two pi
times zeta at minus one. On the other side, Gamma at one
is one and zeta at two is pi squared divided by six,
the familiar Basel value from the earlier Fourier preparation. Therefore
Lambda at two is pi divided by six and zeta at minus
one is minus one twelfth. The use of the Basel value is
explicit; the functional equation alone would express the answer in terms
of zeta at two. No divergent integer sum is evaluated by ordinary
summation in this calculation.

**Worked example 3: symmetry of zeros and its limits.** The original
series has real coefficients, so conjugating s conjugates its value in
the starting half-plane, and hence everywhere by uniqueness. The completed
reflection identity adds the transformation s to one minus s. A
zero of xi therefore occurs with its conjugate and its reflected
partners, allowing coincidences on a symmetry axis. This symmetry does not
force each zero onto the line with real part one half: a
four-point set off that line can have the same symmetries. Nor
does an Euler-product argument made strictly to the right of one
prove zero-freeness on the boundary line. The next analytic chapter will
prove that boundary statement as part of Newman's prime-number-theorem route.

<a id="section-222-a-quantitative-tail-for-the-continued-representation"></a>
## A quantitative tail for the continued representation {#section-224-a-quantitative-tail-for-the-continued-representation}

Formula (4.1) is useful even when one only wants a controlled finite
approximation on a compact region. Suppose the absolute value of the
real part of s is bounded by M. Both powers in its
integrand are bounded by a fixed power t-to-M-prime on t at
least one. The Gaussian tail bound makes the integral beyond T
at most a constant times the integral of exp(minus pi t)
times that power. For T large enough, the polynomial factor can
be bounded by exp(pi t divided by two), giving a constant
times exp(minus pi T divided by two). The constant depends on
the specified compact region, which must be kept visible.

This provides an error bound for truncating the integral; it does not
certify a zero from a small plotted value. Near a putative zero,
one needs a method controlling complex error and a theorem such as
the argument principle to count zeros in a region. The present chapter
proves an identity and its analytic properties, not a numerical zero
verification procedure. Likewise an approximate match between theta-t and
its transformed value would illustrate the theorem, whereas their equality
here follows from the Fourier coefficient calculation for every positive t.

The reciprocal-scale transformation is particularly valuable because it separates
the only divergent pieces into an elementary rational function. Instead of
trying to assign a finite meaning to an integral that diverges at
zero, we replace it by a proven equivalent convergent expression on
the initial domain and then continue that new expression. This is a
general pattern in Mellin methods, but every new application must identify
its own small-parameter asymptotics and justify its own interchange of limits.

<a id="section-252-exercises-with-two-hints-and-complete-solutions"></a>
## Exercises with two hints and complete solutions {#section-254-exercises-with-two-hints-and-complete-solutions}

### Exercise 4.1: the Gaussian scale {#zeta-continuation-functional-equation-ex-1}

Evaluate the integral of exp(minus pi t x squared) over the real line for positive t.

<details>
<summary>Hint 1</summary>
First obtain the t-equal-one value by squaring the integral and using polar coordinates.
</details>
<details>
<summary>Hint 2</summary>
For general t, rescale x by the positive square root of t.
</details>
<details>
<summary>Solution</summary>
The square of the positive t-equal-one integral is the plane
Gaussian integral. Polar coordinates give two pi times the integral
of r exp(minus pi r squared), which is one. Thus the
original integral is one. The substitution u equal to square
root t times x then gives t to minus one half.
The positivity condition t greater than zero supplies both convergence
and a real positive scaling factor.
</details>

### Exercise 4.2: periodized coefficients {#zeta-continuation-functional-equation-ex-2}

Explain why the k-th Fourier coefficient of the periodized Gaussian is its real-line Fourier transform at integer k.

<details>
<summary>Hint 1</summary>
Uniform absolute summability permits integrating the translated summands individually.
</details>
<details>
<summary>Hint 2</summary>
After substituting u equal to x+n, the Fourier phase from n is one.
</details>
<details>
<summary>Solution</summary>
The coefficient integral over the unit interval becomes a sum
of integrals over successive intervals with endpoints n and n
plus one. The integer-frequency phase is unchanged by the shift.
Their absolutely convergent sum is the Fourier integral over the
whole real line. This establishes the coefficient identity before
any assertion that a Fourier series equals the original periodic function.
</details>

### Exercise 4.3: an exponential theta tail {#zeta-continuation-functional-equation-ex-3}

Bound theta-t minus one for t at least one by a constant times exp(minus pi t).

<details>
<summary>Hint 1</summary>
Separate the zero term and combine positive and negative indices.
</details>
<details>
<summary>Hint 2</summary>
For positive integer n, n squared is at least n, giving a geometric series.
</details>
<details>
<summary>Solution</summary>
The remaining sum is twice the sum over positive n of
exp(minus pi n squared t). It is at most twice
exp(minus pi t) divided by one minus exp(minus pi t).
Since t is at least one, the denominator is bounded
below by one minus exp(minus pi). This yields the required
fixed constant and justifies later domination by an exponential tail.
</details>

### Exercise 4.4: the Mellin threshold {#zeta-continuation-functional-equation-ex-4}

Use theta transformation to identify the lower-end convergence condition of the original Mellin integral.

<details>
<summary>Hint 1</summary>
The leading small-t term of theta-t minus one is t to minus one half.
</details>
<details>
<summary>Hint 2</summary>
An integral of t-to-a from zero to one converges exactly when the real part of a exceeds minus one.
</details>
<details>
<summary>Solution</summary>
The absolute leading power is t to sigma-over-two minus three
halves. Its exponent exceeds minus one precisely when sigma
is greater than one. The subtracted constant has a weaker
restriction and the transformed Gaussian remainder decays rapidly. Thus
the original integral has the expected starting condition, and continuing
it requires isolating that leading term rather than ignoring the endpoint.
</details>

### Exercise 4.5: the rational term {#zeta-continuation-functional-equation-ex-5}

Compute the elementary contribution from t to minus one half minus one in the lower integral.

<details>
<summary>Hint 1</summary>
Integrate the two powers separately in the initial half-plane.
</details>
<details>
<summary>Hint 2</summary>
Keep the factor one half from the Mellin formula until the end.
</details>
<details>
<summary>Solution</summary>
The two integrals give twice divided by s minus one
and twice divided by s. Their difference, multiplied by
one half, is one divided by s(s minus one).
Its residues at one and zero are one and minus
one. This checks the pole signs independently of any
gamma simplification and is the rational term in formula (4.1).
</details>

### Exercise 4.6: entire dependence {#zeta-continuation-functional-equation-ex-6}

Why does the remainder integral stay holomorphic after arbitrarily many s-derivatives?

<details>
<summary>Hint 1</summary>
An s-derivative of a t-power introduces a logarithm of t.
</details>
<details>
<summary>Hint 2</summary>
On a fixed compact s-set, every resulting polynomial-logarithmic factor is dominated by the Gaussian tail.
</details>
<details>
<summary>Solution</summary>
For each derivative order, the integrand is bounded on the
compact s-set by a constant times exp(minus pi t)
times a fixed power of t and its logarithm. This
bound is integrable on the interval starting at one.
Dominated differentiation gives that derivative throughout the compact
set. Every point lies in such a set, so the remainder
is entire. No uniformity over the unbounded whole s-plane is asserted.
</details>

### Exercise 4.7: canceling the pole at zero {#zeta-continuation-functional-equation-ex-7}

Show how reciprocal gamma removes Lambda's pole at zero and compute the resulting value.

<details>
<summary>Hint 1</summary>
Lambda has leading term minus one divided by s.
</details>
<details>
<summary>Hint 2</summary>
Reciprocal Gamma(s/2) has leading term s divided by two.
</details>
<details>
<summary>Solution</summary>
Multiplication cancels the reciprocal s factors and leaves minus
one half; the pi power tends to one. Every remaining
term tends to zero or contributes a higher-order analytic
term. Hence zero is removable for zeta with value minus
one half. It remains an actual pole for Lambda, so
the completed and uncompleted functions must not be assigned
the same singularity list.
</details>

### Exercise 4.8: the pole at one {#zeta-continuation-functional-equation-ex-8}

Compute the residue of the continued zeta function at one.

<details>
<summary>Hint 1</summary>
The rational term gives Lambda residue one there.
</details>
<details>
<summary>Hint 2</summary>
Evaluate pi to s-over-two divided by Gamma(s/2) at one.
</details>
<details>
<summary>Solution</summary>
That analytic multiplier has value square root pi divided
by Gamma at one half, which is one. Thus the
residue stays one. The nonzero multiplier cannot remove the
pole. The entire integral remainder has no principal part,
so it cannot alter this residue either. These facts prove
the claimed simple pole directly from the constructed continuation.
</details>

### Exercise 4.9: simplicity of a trivial zero {#zeta-continuation-functional-equation-ex-9}

Why is the zero at minus four simple rather than merely a possible zero?

<details>
<summary>Hint 1</summary>
Use reflection to evaluate whether Lambda at minus four vanishes.
</details>
<details>
<summary>Hint 2</summary>
It equals Lambda at five, a positive product in the original domain.
</details>
<details>
<summary>Solution</summary>
Lambda at five is strictly positive, so Lambda at minus
four is finite and nonzero. The reciprocal Gamma(s/2)
factor has exactly a simple zero at minus four, and
the pi factor is nonzero. Their product therefore has
exactly a simple zero. Merely noticing a reciprocal-gamma zero
would not suffice if the other factor had a pole
or a compensating zero; reflection excludes both possibilities here.
</details>

### Exercise 4.10: symmetry versus location {#zeta-continuation-functional-equation-ex-10}

Give a four-point complex set invariant under conjugation and reflection across the line with real part one half, but disjoint from that line.

<details>
<summary>Hint 1</summary>
Choose real part one quarter and imaginary part one.
</details>
<details>
<summary>Hint 2</summary>
Apply both transformations to generate its partners.
</details>
<details>
<summary>Solution</summary>
Use the points with real parts one quarter and three
quarters and imaginary parts plus or minus one. The
set has both symmetries and none of its points lies
on the middle line. Therefore those symmetries alone cannot
prove a theorem locating every zero on that line. A
location theorem needs additional information beyond invariance of the
zero set.
</details>

### Exercise 4.11: the entire completion {#zeta-continuation-functional-equation-ex-11}

Compute xi at zero and at one and explain its reflection symmetry.

<details>
<summary>Hint 1</summary>
Multiply each simple principal part by one half s(s minus one).
</details>
<details>
<summary>Hint 2</summary>
The polynomial s(s minus one) itself is unchanged by s mapped to one minus s.
</details>
<details>
<summary>Solution</summary>
At zero, the factors s times minus one divided by
s cancel, while s minus one tends to minus one,
giving one half. At one, cancellation of s minus
one against the positive pole also gives one half.
The polynomial and Lambda are both invariant under reflection,
so their product has the same symmetry, including at the
removable endpoints by continuity.
</details>

### Exercise 4.12: independent proof dependencies {#zeta-continuation-functional-equation-ex-12}

Does this functional-equation proof depend on the prime number theorem, and does it prove that theorem by itself?

<details>
<summary>Hint 1</summary>
List the actual analytic ingredients used in the theta and Mellin arguments.
</details>
<details>
<summary>Hint 2</summary>
Separate continuation from the zero-free boundary and Tauberian steps needed for prime asymptotics.
</details>
<details>
<summary>Solution</summary>
The proof uses Gaussian integration, periodic Fourier uniqueness,
dominated holomorphic integration and the named gamma properties.
None invokes prime asymptotics. Conversely continuation and reflection
alone do not prove the nonvanishing boundary or extract
an asymptotic for a weighted prime sum. The later
Newman chapter supplies those separate arguments. This dependency
order prevents an analytic theorem from being justified circularly
by a prime-distribution statement it will later help prove.
</details>

<a id="section-526-summary-and-next-connection"></a>
## Summary and next connection {#section-528-summary-and-next-connection}

The Gaussian transform gives Poisson summation at the needed scale. Theta
reflection then turns the divergent small-parameter part of a Mellin integral
into an explicit rational term and an entire remainder. This constructs
zeta's global continuation, proves its completed functional equation and gives
its poles and negative-even zeros with their exact orders. The next
prime-distribution step will add a zero-free boundary argument and a full
Tauberian proof, keeping analytic continuation separate from prime asymptotics.

<a id="section-572-sources"></a>
## Sources {#section-574-sources}

Gamma properties are imported from the linked Euler complex-analysis chapter, where they are proved. NIST's primary [zeta functional-relations reference](https://dlmf.nist.gov/25.4) provides a comparison for normalization; the theta proof is given here.
