# Computational Protocols {#sec-padic-computational-protocols}

A computer stores only finite data. A $p$-adic number is generally infinite,
so trustworthy computation must say which residue class is known, at which
precision, and why every reported digit follows from the input. This appendix
turns that principle into reusable protocols.

## Exact precision objects

The statement

$$
x=a+O(p^N)
$$

means $x\in a+p^N\mathbb Z_p$. It does not mean that a floating-point number
$a$ is close in the ordinary absolute value. A minimal integral precision
object stores:

$$
(p,N,a\bmod p^N).
$$

For a nonintegral element, separate its known valuation:

$$
x=p^v u,
\qquad
u=a+O(p^N),\quad a\in\mathbb Z_p^\times.
$$

A robust record stores the prime, valuation $v$, unit residue, absolute or
relative precision convention, and a provenance tag describing the operation
that produced it.

### Precision propagation

For integral balls,

$$
(a+O(p^N))+(b+O(p^M))
=a+b+O(p^{\min(N,M)}).
$$

For products,

$$
(a+O(p^N))(b+O(p^M))
=ab+O\!\left(p^{\min(N+v_p(b),M+v_p(a))}\right).
$$

If both are units, the output precision is $\min(N,M)$. Division by
$y\ne0$ loses precision according to $v_p(y)$; division by a ball that
could contain zero is invalid. Before inversion, certify that the valuation of
every member is fixed.

Cancellation can reveal fewer correct digits than either input seems to have.
If $x=1+O(p^{20})$ and $y=-1+O(p^{20})$, their sum is only
$O(p^{20})$; it is not a 20-digit approximation to a unit. Software should
return a ball, never invented leading digits.

### Absolute versus relative precision

Absolute precision $N$ means knowledge modulo $p^N$. Relative precision
counts known unit digits after removing the valuation. If

$$
x=p^v(a+O(p^r)),
$$

then its absolute precision is $v+r$. The two conventions agree only for
units. Every API and printed result should name which one it uses.

## Polynomial and extension arithmetic

Let

$$
f(X)=a_0+a_1X+\cdots+a_dX^d
$$

with coefficients known to possibly different precisions. Evaluating at a ball
$x+O(p^N)$ requires both coefficient error and input error. A first-order
bound uses

$$
f(x+\delta)-f(x)=f'(x)\delta+O(\delta^2),
$$

but a certificate should bound every term, especially when $f'(x)$ is highly
divisible by $p$.

### Certified Hensel lifting

For a simple-root lift, record:

1. the exact polynomial and coefficient precision;
2. the current center $a$ and modulus $p^N$;
3. $v_p(f(a))$ and $v_p(f'(a))$;
4. the Hensel inequality being used;
5. the new center and guaranteed modulus.

Under the strong condition

$$
v_p(f(a))>2v_p(f'(a)),
$$

Newton iteration converges to a unique root in a stated ball. A weaker
simple-root condition modulo $p$ gives the familiar digit-by-digit lift.
Never report a Newton iterate without also reporting the theorem that makes its
digits stable.

### Quotient fields

Represent a finite extension as

$$
L=K[X]/(g(X))
$$

only after certifying that $g$ is irreducible over $K$. Store the basis,
the defining polynomial, its coefficient precision, and reduction rules.
Different polynomials can define isomorphic fields but give different coordinate
conditioning.

For an Eisenstein polynomial, irreducibility and total ramification follow at
once. For unramified extensions, a monic lift of an irreducible residue
polynomial is convenient. General irreducibility may require factorization with
Hensel lifting and enough input precision to distinguish nearby factors.

## Newton polygons and ramification tables

A Newton polygon depends on the points

$$
(i,v_p(a_i))
$$

for nonzero coefficients. A coefficient ball that contains zero does not have
a certified finite valuation. It contributes an uncertainty ray, not an exact
point.

A polygon certificate contains:

- the coefficient balls;
- the exact valuations that are determined;
- lower bounds for coefficients not determined;
- the lower-convex-hull vertices;
- edge slopes and horizontal lengths;
- the theorem translating slopes into root valuations;
- any field-extension or algebraic-closure hypothesis.

If an uncertain point could move below a proposed edge, the edge is not
certified. Increasing display precision does not help unless the source
coefficients are recomputed more accurately.

### Ramification data

For a finite separable extension, a reproducible ramification table should name:

1. the base and extension fields;
2. valuation normalizations;
3. ramification index $e$ and residue degree $f$;
4. a uniformizer and residue-field generator;
5. discriminant or different exponent;
6. lower and upper ramification breaks, when computed;
7. the conversion convention through the Herbrand function.

Wild ramification is especially sensitive to normalization. A table of numbers
without the numbering convention cannot be compared reliably with another
source.

## Power series and differential equations

For

$$
F(T)=\sum_{n=0}^{\infty}a_nT^n,
$$

a finite truncation supports a claim on a disk only when the tail is bounded.
If $|T|\le r$, certify a number $B_N$ such that

$$
\sup_{n>N}|a_n|r^n\le B_N.
$$

The ultrametric inequality then gives

$$
\left|F(T)-\sum_{n=0}^{N}a_nT^n\right|\le B_N.
$$

There is no extra factor counting tail terms. This is one of the computational
advantages of non-Archimedean norms.

When solving a differential equation by coefficient recurrence, denominators
such as $n+1$ can lose $p$-adic precision irregularly. The protocol is:

1. derive the recurrence symbolically;
2. bound denominator valuations in advance;
3. allocate guard digits;
4. propagate coefficient balls;
5. certify a convergence radius;
6. substitute the truncated solution and bound the residual.

For a matrix equation $Y'=AY$, use a matrix norm compatible with the vector
norm. A small residual is evidence only after a stability theorem converts it
to a bound on the true solution.

## Measures, transforms, and interpolation

A finite table on residue classes modulo $p^N$ defines a distribution at that
level. To certify that tables form a measure, verify the parent-child equations

$$
\mu_N(a)=\sum_{b=0}^{p-1}\mu_{N+1}(a+bp^N)
$$

at every available level and provide a uniform boundedness estimate. Moments or
Amice coefficients computed from one level are exact only up to the degree and
precision supported by that table.

For an interpolation experiment, record character conventions, parity
component, Euler factors, periods, and evaluation precision. Agreement at
sample weights tests an implementation. It does not prove existence or
uniqueness of a $p$-adic $L$-function without the measure theorem.

## Reproducibility and certificate design

Every numerical experiment in this subject should emit two outputs:

- a human-readable result;
- a machine-checkable certificate or audit log.

The log should contain:

```text
software and version
prime and field definition
valuation normalization
input objects with absolute precision
algorithm and stopping condition
precision losses and guard digits
theorem hypotheses checked
output balls or exact residues
deterministic seed, if sampling is used
hashes of external datasets
```

Random sampling can explore residue patterns, but proof claims must be reduced
to exhaustive finite checks, symbolic identities, or certified inequalities.
A random seed makes an experiment repeatable; it does not make it exhaustive.

### Certificate levels

It is useful to label outputs:

1. **illustration:** deterministic data encode a definition;
2. **experiment:** reproducible finite evidence tests a conjecture;
3. **conditional certificate:** a result follows if named assumptions hold;
4. **proof certificate:** a checker verifies every finite claim and a cited
   theorem closes the infinite step.

Moving up this ladder requires new mathematical justification, not more visual
polish.

## Part VIII computational protocols

### Lattice and Hecke certificates

Represent a rank-two lattice by a basis matrix over $K$. To certify distance,
record unit-determinant row and column operations reducing the relative matrix to
elementary-divisor form. Output the two diagonal valuations and their difference.
A tree truncation stores parent, depth, residue-line label, and the expected one
inward plus $q$ outward incidences.

For a spherical Hecke recurrence, store $q$, the Haar/operator normalization,
$\lambda,a_0,a_1$, and exact residuals

$$
qa_{r+1}-\lambda a_r+a_{r-1}=0.
$$

At the root separately verify $(q+1)a_1-\lambda a_0=0$.

### Étale and Frobenius certificates

For $A[T]/(f)$, record monicity, a basis, and a Bézout witness that the image of
$f'$ is a unit. A finite-field cover stores the Frobenius permutation on its
geometric fiber. A trace table records coefficient prime, arithmetic/geometric
Frobenius convention, each cohomological trace, alternating signs, and the
independent point count.

### Igusa count ledgers

At every level $m$, store $N_m$, the total $q^{mn}$, and the reduced rational
tail $A_m=N_m/q^{mn}$. Verify reduction of every level-$m+1$ solution to a
level-$m$ solution. Exact masses are differences $A_m-A_{m+1}$; do not treat a
missing next level as a zero mass. A proposed rational series is checked against
all certified coefficients but needs a theorem for infinite rationality.

### Height and regulator ledgers

A local height record names divisor representatives, disjointness, logarithm
branch, local splitting, precision, and tail bound. For a height matrix, propagate
entry balls through the determinant. Nonvanishing is certified only when the
center valuation is strictly below the determinant error exponent. Store a
basis-change matrix and verify the regulator square-factor law.

### Definable-cylinder certificates

Record the language, formula, parameters, cell conditions, and excluded residue
characteristics. At precision $\pi^N$, a valuation condition deeper than $N$
returns “insufficient precision.” A finite residue enumeration tests a formula
but does not prove quantifier equivalence; the elimination or cell-decomposition
step must cite its theorem or carry a checkable transformation.

## Final audit checklist

Before accepting a computation, ask:

- Is every object exact or enclosed in a stated $p$-adic ball?
- Can any denominator ball contain zero?
- Are absolute and relative precision distinguished?
- Are uncertain valuations represented as bounds rather than points?
- Are theorem hypotheses checked at the precision claimed?
- Is the stopping rule mathematical rather than cosmetic?
- Does the output separate observation, conjecture, and proof?
- Can another implementation reconstruct the same finite claim?

If any answer is no, the appropriate response is not to print more digits. It
is to repair the certificate.

## Worked protocol: a certified square root

Take $p=7$ and solve $x^2=2$ in $\mathbb Z_7$. Modulo $7$,
$3^2=9\equiv2$, and

$$
f(X)=X^2-2,
\qquad f'(3)=6\not\equiv0\pmod7.
$$

The simple-root form of Hensel's lemma supplies a unique lift in
$3+7\mathbb Z_7$. To lift from precision $7^N$ to $7^{2N}$, compute

$$
a'=a-f(a)f'(a)^{-1}\pmod {7^{2N}}.
$$

A certificate at each stage records:

```text
polynomial: X^2 - 2
prime: 7
input center: a modulo 7^N
check: a^2 - 2 = 0 modulo 7^N
derivative check: gcd(2a, 7) = 1
inverse: (2a)^(-1) modulo 7^(2N)
output center: a' modulo 7^(2N)
check: (a')^2 - 2 = 0 modulo 7^(2N)
uniqueness ball: 3 + 7 Z_7
```

Every line is finite and independently checkable. The theorem supplies the
infinite conclusion: the compatible centers converge to the unique root in the
ball. A decimal approximation would add no relevant evidence.

At $p=2$, the same derivative test fails because $2a$ is even. This does
not show that square roots never exist in $\mathbb Z_2$; it shows that a
different square criterion and a stronger Hensel inequality are needed. The
protocol exposes the failed hypothesis rather than hiding it behind an
iteration.

The [optional nonunit-Newton clinic](09-hensel.md#sec-nonunit-newton-clinic)
works this case and separates residual precision, selected-root precision,
and the precision supported by uncertain coefficient data.

## Worked protocol: a Newton-polygon decision

Consider

$$
g(X)=X^3+pX+p^4.
$$

The nonzero coefficient points are

$$
(0,4),\quad(1,1),\quad(3,0).
$$

The lower hull has slopes $-3$ from $(0,4)$ to $(1,1)$, and
$-1/2$ from $(1,1)$ to $(3,0)$. Over an algebraic closure, the slope
theorem predicts one root of valuation $3$ and two roots of valuation
$1/2$, counted with multiplicity.

Now suppose the coefficient of $X^2$ is not exactly zero but known only as
$O(p^M)$. Its point could lie at any height at least $M$. If $M=0$, it
could alter the second edge; if $M$ lies strictly above the proposed hull at
$x=2$, it cannot. The certificate therefore stores the inequality comparing
the valuation lower bound with the hull height. It never silently converts an
uncertain coefficient to exact zero.

This example also illustrates denominators in the output. Fractional root
valuations are legitimate in an algebraic closure, whose value group contains
rational numbers. They need not correspond to roots already lying in
$\mathbb Q_p$.

## Interoperability protocol

Two computer algebra systems may choose different uniformizers, residue-field
generators, and basis orderings. To compare results, export invariant data as
well as coordinates:

- the minimal polynomial and an embedding identifier;
- $e$, $f$, discriminant exponent, and residue cardinality;
- valuations and traces of test elements;
- change-of-basis matrices when available;
- hashes of defining input and exact version information.

Agreement of printed digit strings is neither necessary nor sufficient for
field elements to agree. Verify a common polynomial relation, embedding, or
invariant. A portable certificate makes coordinate choices explicit enough to
translate them.

## Protocol exercises

1. Propagate precision through a sum, product, and quotient of two unit balls.
2. Give an example where subtraction destroys relative precision.
3. Design a certificate for lifting a square root modulo $p^{20}$.
4. Explain how an uncertain zero coefficient affects a Newton polygon.
5. State the tail bound required to evaluate a power series on a closed disk.
6. Identify the guard-digit loss caused by dividing a recurrence by $n+1$.
7. Distinguish a reproducible random experiment from a proof certificate.
8. Draft a minimal audit record for a ramification-filtration computation.
