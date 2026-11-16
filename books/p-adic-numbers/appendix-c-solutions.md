# Hints and selected solutions

The hints are intentionally brief. A productive pattern is to compute at a few
precision levels, state the invariant revealed by the computation, and only then
write the proof.

The core chapters also provide two staged hints and a full solution immediately
after each exercise. Use those local reveals when working through a chapter;
the selected notes and longer models below remain an alternative route into the
same arguments. The original selected-solution anchors are retained.

- Foundations: [divisibility](01-divisibility.md#ex-padic-01-01),
  [absolute values](02-absolute-values.md#ex-padic-02-01),
  [ultrametric geometry](03-ultrametric-geometry.md#ex-padic-03-01),
  [completion](04-completion.md#ex-padic-04-01),
  [digits](05-digits.md#ex-padic-05-01), and
  [arithmetic](06-arithmetic.md#ex-padic-06-01).
- Analysis and finite extensions: [series](07-series.md#ex-padic-07-01),
  [analysis](08-analysis.md#ex-padic-08-01),
  [Hensel lifting](09-hensel.md#ex-padic-09-01),
  [units and squares](10-units-squares.md#ex-padic-10-01),
  [compactness and measure](11-compactness-measure.md#ex-padic-11-01), and
  [local fields](12-local-fields.md#ex-padic-12-01).
- Further core: [dynamics](13-dynamics.md#ex-padic-13-01),
  [global and local questions](14-global-local.md#ex-padic-14-01),
  [algorithms](15-algorithms-vistas.md#ex-padic-15-01),
  [Newton polygons](19-newton-polygons.md#ex-padic-19-01),
  [ramification](20-ramification.md#ex-padic-20-01), and
  [the completed algebraic closure](21-cp.md#ex-padic-21-01).

## Hints for foundational chapters

### Chapter 1

1. Factor only the relevant primes in numerator and denominator.
2. Apply multiplicativity repeatedly; handle negative exponents by inversion.
3. Factor out the term of smaller valuation and reduce the remaining unit sum
   modulo $p$.
4. Try $1+(2^k-1)=2^k$.
5. Positive definiteness and symmetry are immediate; translate the strong
   valuation inequality into a metric inequality.
7. A multiple of $p^j$ contributes at least one *additional* factor counted at
   level $j$.

### Chapter 2

2. Induct on the number of summands.
4. Only $p=2,3,5,7$ contribute nontrivially for the suggested rational.
6. Let two distinct small primes be $p,q$ and use Bézout on large powers.
7. Compare what happens to $p^n$.

### Chapter 3

2. Recenter at the chosen point and use the strong inequality twice.
3. Around a point on the sphere, take a ball strictly smaller than the sphere's
   radius.
6. Choose three distinct residues modulo $5$.
7. Recenter all intersecting balls at a common point.

### Chapter 4

2. Fix one tail center and use the triangle inequality to bound every late term;
finitely many early terms have a maximum norm.
5. Combine different-prime powers, for example $p^n/q^n$ with $q>p$ and
$q\ne p$.
7. Choose rational representatives accurate to successively finer powers and
take a diagonal.

## Hints for analytic and algebraic chapters

### Chapters 5 and 6

For digits of $a/b$, solve $br\equiv a\pmod {p^N}$ and reduce compatibility one
level at a time. In the periodicity proof, bound the actual integer residuals
in an ordinary finite interval; their classes modulo $b$ need not determine
the next digit. In the converse, sum a repeated block as a geometric series.

For precision problems, first compute absolute precision, then compute the
output valuation if it is visible. Their difference is relative precision. If a
residue vanishes modulo the full available modulus, report a ball rather than an
exact valuation.

### Chapters 7 and 8

To test a series, calculate $v_p(a_n)$ and ask only whether it tends to infinity.
For product bounds, expand the finite product; every nonconstant monomial
contains at least one small $u_k$. In Strassmann's theorem, division by $x-z$
produces coefficients $b_n=\sum_{k>n}a_kz^{k-n-1}$, whose norms are controlled
by coefficient maxima.

### Chapters 9 and 10

In a Hensel digit lift, do not search all residues if the derivative is a unit:
solve the one linear congruence for the new digit. To classify a square, separate
valuation parity from the unit. For $p=2$, reduce the odd unit modulo $8$, not
merely modulo $2$.

### Chapters 11 and 12

Every measure calculation can begin by partitioning into residue balls. For the
expected valuation, use
$\mathbb E[v_p(X)]=\sum_{n\ge1}\Pr(v_p(X)\ge n)$. For extensions, keep the
normalization $v_K(\pi)=1$ visible and use the least valuation term to prove
linear independence.

## Hints for advanced chapters

### Chapters 16–18

For a supremum norm, prove an upper bound coordinatewise and seek equality on a
standard basis vector. Neumann-series errors are powers of the small operator.
For Mahler expansions, build a finite-difference table and remember that the
first entry in row $n$ is $c_n$. Exponential and logarithm problems become
linear only after checking the precise convergence domain; at $p=2$ start in
$4\mathbb Z_2$.

### Chapters 19–21

In a Newton polygon, compare slopes by cross multiplication and discard points
above the lower hull. Root valuation is the negative slope. In ramification
problems, write the valuation normalization and any monogenic hypothesis before
using a derivative or discriminant formula. For $\mathbb C_p$, keep three
properties separate: algebraic closedness, metric completeness, and spherical
completeness.

### Chapters 22–24

Fourier transforms of balls are determined by the annihilator condition
$x\xi\in\mathbb Z_p$ and by the ball's additive measure. A Berkovich disc point
is a seminorm, not a hidden classical coordinate. For elliptic reduction, first
check minimality and discriminant, then count finite-field points exactly. Period
rings should be distinguished by their extra structures, not by size alone.

### Selected advanced checks

For Chapter 19, Exercise 1, the polygon of $T^3+5T+25$ has slopes $-1$ of
length $1$ and $-1/2$ of length $2$. It predicts one root of valuation $1$ and
two roots of valuation $1/2$.

For Chapter 22, Exercise 2,

$$
\widehat{\mathbf 1_{a+p^n\mathbb Z_p}}(\xi)
=\psi(-a\xi)p^{-n}\mathbf 1_{p^{-n}\mathbb Z_p}(\xi).
$$

Translation gives the phase and the subgroup annihilator gives the support.

For Chapter 24, Exercise 1, the numbers of affine points above
$x=0,1,2,3,4$ are $1,1,2,2,1$. Adding the point at infinity gives
$\#E(\mathbb F_5)=8$ and $a_5=-2$.

## Hints and theorem checks for Chapters 25–33

### Chapters 25 and 26

For a Witt-vector calculation, write the first ghost polynomials before solving
for a coordinate. Coordinatewise addition is the wrong operation; ghostwise
addition is the defining requirement. When the residue ring has characteristic
$p$, remember that division by $p$ in a derived universal polynomial happens
over $\mathbb Z$ before evaluation.

For a profinite group, reduce a continuous action on a finite discrete set to an
open stabilizer. In the local Galois exact sequence, decide whether Frobenius is
arithmetic or geometric before computing its action. Lower and upper
ramification numbering coincide only in the first tame ranges; use the Herbrand
function before transporting filtrations through quotients.

### Chapters 27 and 28

In local class field theory, factor

$$
K^\times\cong\pi^{\mathbb Z}\times\mathcal O_K^\times.
$$

The valuation factor detects the unramified quotient, while unit filtrations
detect ramification. A norm subgroup must be open and of finite index for the
finite-level correspondence. State whether a uniformizer maps to arithmetic or
geometric Frobenius.

For formal groups, distinguish identities in a formal power-series ring from
equalities valid on a convergence disk. The formal logarithm linearizes the
group only where its series converges. In Lubin–Tate calculations, first check
both congruences for the chosen endomorphism: its linear term is the uniformizer
and its reduction is a power of Frobenius.

### Chapters 29 and 30

For a differential equation, calculate the recurrence and the valuations of its
denominators before guessing a convergence radius. On the Robba ring, name the
annulus on which a solution converges. A Frobenius structure is extra data, not
automatic for every differential module.

For $U_p$, retain coefficients with indices divisible by $p$ under the
stated $q$-expansion normalization. Slope zero means ordinary. Coleman
integration uses Frobenius-normalized primitives; checking an antiderivative on
one residue disk does not yet define a global integral. Chabauty–Coleman also
requires the rank inequality and a certified zero count.

### Chapters 31–33

In an Iwasawa growth problem, do not infer eventual $\mu$ and $\lambda$ from
three layers. First invoke the torsion structure theorem and a control result.
Under $\gamma\mapsto1+T$, coinvariants at level $n$ impose
$(1+T)^{p^n}-1$.

For tilting, multiplication of compatible sequences is coordinatewise and
addition is reconstructed. The sharp map preserves products and norms but not
sums. To test an almost statement, name the ideal that annihilates the defect.

For period invariants, compare dimensions over the correct fixed field. Track
three independent structures: filtration, Frobenius, and monodromy. The valid
implication chain is crystalline, semistable, de Rham, Hodge–Tate. For weak
admissibility, check every stable subobject, not only the total equality of
Hodge and Newton numbers.

### A theorem-status self-check

Before using an advanced result, write four lines:

1. **object:** the field, representation, module, or curve;
2. **hypotheses:** completeness, reduction, finiteness, or slope assumptions;
3. **conclusion:** an isomorphism, dimension equality, convergence region, or
   ideal identity;
4. **status:** proved here, quoted theorem, conditional statement, or open
   conjecture.

If the conclusion changes when one hypothesis is erased, the abbreviated
version is not safe to reuse.

## Hints and theorem checks for Chapters 34–45

### Chapters 34–39

- In a Tate quotient, normalize valuation only after proving the quotient group
  law is independent of representatives.
- Compute cocycles and coboundaries separately before taking their quotient.
- A Selmer dimension gives a rank upper bound only through the exact sequence
  containing $\operatorname{Sha}[n]$.
- Semilinear Frobenius matrices must apply Frobenius to scalars as well as to
  basis vectors.
- A deformation tangent-space count does not prove the universal ring is smooth;
  inspect obstruction equations.
- A local-field result is certified only with its defining polynomial, basis,
  precision, and independently checkable residual.

### Chapters 40 and 41

For the Bruhat–Tits tree, reduce an intermediate lattice modulo $\pi L$.
Neighbours become the $q+1$ lines in $k^2$. For distance, subtract the two
elementary-divisor exponents after removing common scale.

For a radial Hecke eigenfunction, remember the exceptional root equation:

$$
\lambda a_0=(q+1)a_1,
$$

while at positive radius

$$
\lambda a_r=a_{r-1}+qa_{r+1}.
$$

Every Hecke scalar depends on the Haar and operator normalization. Do not compare
a normalized Satake eigenvalue directly with unnormalized adjacency.

### Chapter 42

For a monogenic algebra $A[T]/(f)$, invertibility of $f'$ gives the unique
first-order correction $h=-f'(x)^{-1}f(x)$. For the power cover on
$\mathbb G_m$, both $n$ and $T$ must be units.

The projective-line trace calculation uses geometric Frobenius. Its degree-zero
and degree-two traces are $1$ and $q^m$. Replacing geometric by arithmetic
Frobenius without changing the Tate twist is a convention error.

### Chapters 43 and 45

Use tails

$$
A_m=q^{-mn}N_m
$$

before exact masses $p_m=A_m-A_{m+1}$. For $x^a$,
$A_m=q^{-\lceil m/a\rceil}$. Separating $m$ by its residue modulo $a$
produces the rational tail-generating series.

A definability theorem must name its language. Macintyre power predicates and
Denef–Pas residue/value sorts are not invisible notation. At finite precision,
return “insufficient precision” when a formula asks for a valuation deeper than
the stored residue cylinder.

### Chapter 44

Evaluate the rational function on the divisor before applying the logarithm.
For the chapter's example, both divisor orders give cross ratio $6$, and

$$
\log_5(6)=555+O(5^4).
$$

For a regulator, propagate entry balls through the determinant. A center with
valuation below the error exponent certifies nonvanishing; an $O(p^N)$ result
does not.

## Selected full solutions

### Chapter 1, Exercise 3

Assume $v_p(x)<v_p(y)$ and write $y/x$. Its valuation is positive, so
$y/x\in p\mathbb Z_p$. Then

$$
x+y=x(1+y/x).
$$

The factor $1+y/x$ reduces to $1$ modulo $p$ and is a unit. Therefore

$$
v_p(x+y)=v_p(x)+v_p(1+y/x)=v_p(x).
$$

The proof also shows exactly why cancellation cannot occur between unequal
valuation levels.

### Chapter 3, Exercise 6

Use the points $0,1,2$ in $\mathbb Q_5$. Their differences are $1,2,$ and $1$,
all units. Hence every pairwise distance is $1$. They form an ultrametric
equilateral triangle.

### Chapter 5, Exercise 1

We solve $2r_N\equiv1\pmod {3^N}$. The compatible residues begin

$$
2,\ 5,\ 14,\ 41,\ 122,\ 365,\ 1094,\ 3281.
$$

Since

$$
2+3+3^2+\cdots+3^{N-1}=\frac{3^N+1}{2},
$$

the first $N$ digits are $2,1,1,\ldots,1$. Multiplication by $2$ yields
$1+3^N$, which is $1$ modulo $3^N$. Thus

$$
\frac12=2+3+3^2+3^3+\cdots\quad\text{in }\mathbb Z_3.
$$

### Chapter 6, Exercise 4

Start with $v_1=1$, an inverse of $3$ modulo $2$. Apply
$v'=v(2-3v)$ and reduce to doubled precision:

$$
v_2=3\pmod4,
\qquad v_4=11\pmod {16},
\qquad v_8=171\pmod {256}.
$$

The final certificate is $3\cdot171=513=1+2\cdot256$, so
$3^{-1}=171+O(2^8)$.

<!-- rational-cycle-answer:start -->
### Chapter 6, Exercise 6: exact states and a valuation shift {#sec-rational-cycle-answer}

#### Hint {#sec-rational-cycle-hint}

For the forward implication, bound the **actual integer** residuals using
$H=\max(|a|_\infty,b)$, then apply deterministic repetition. For the converse,
sum one repeated block as a geometric series.

For the changed task, first find $v_3(x)$ and compute the digits of
$u=3x=-10/7$. Here $7$ is a unit modulo $3$, so the canonical digit is
$r_n\bmod3$. At an exact repeat, use the cycle closure and then lower every
exponent by one.

Return to the [task](06-arithmetic.md#sec-rational-cycle-task) or continue
to the [full solution](#sec-rational-cycle-solution).

#### Full solution {#sec-rational-cycle-solution}

For $x\in\mathbb Z_p$, write a rational $x=a/b$ with $b>0$ and
$p\nmid b$. The exact recurrence gives
$a=bS_N+p^Nr_N$ and $|r_N|_\infty\le H=\max(|a|_\infty,b)$.
Thus the truncations converge to $a/b$ in the $p$-adic norm, while only
$2H+1$ actual integer states can occur. An exact state determines its
digit and successor, so a repeated state gives eventual periodicity.
Conversely a finite prefix plus a block of length $\ell>0$ sums to
$S_\mu+p^\mu B/(1-p^\ell)$, which is rational. The
[chapter proof](06-arithmetic.md#sec-rational-cycle-proof) includes the
induction, bound, zero case and separate Laurent generalization.

For the changed input, $v_3(-10/21)=-1$. We must use the normalized unit
$u=3x=-10/7$, not attempt to invert $21$ modulo $3$. The exact rows are

| $n$ | $r_n$ | $d_n$ | $r_{n+1}$ |
|---|---:|---:|---:|
| 0 | $-10$ | 2 | $-8$ |
| 1 | $-8$ | 1 | $-5$ |
| 2 | $-5$ | 1 | $-4$ |
| 3 | $-4$ | 2 | $-6$ |
| 4 | $-6$ | 0 | $-2$ |
| 5 | $-2$ | 1 | $-3$ |
| 6 | $-3$ | 0 | $-1$ |
| 7 | $-1$ | 2 | $-5$ |

The first repeat is $r_8=r_2$. For $u$, the prefix is $2,1$ and the
six-digit block is $1,2,0,1,0,2$, in increasing exponent order. Thus
$$
S_2=5,\qquad B=1+2\cdot3+3^3+2\cdot3^5=520,
$$
and the exact closure is
$$
(1-3^6)(-5)=3640=7\cdot520.
$$
Consequently
$$
u=5+\frac{3^2\cdot520}{1-3^6}=-\frac{10}{7},
\qquad
x=\frac53+\frac{3\cdot520}{1-3^6}=-\frac{10}{21}.
$$
The geometric tail converges because its successive blocks gain valuation
$6$. For $x$, the two initial digits occupy exponents $-1,0$; repetition
starts at exponent $1$. The prefix length is two when counted from the
leading Laurent exponent $-1$, or one when counting only nonnegative
positions.

These lengths are least. By the invariant and convergence, the remaining
digit tail from state $r_n$ is the canonical expansion of $r_n/7$.
Equal infinite digit tails force equal residual states. All eight states
before $r_8$ are distinct, and neither $r_0$ nor $r_1$ lies on the six-cycle.
An earlier periodic start or shorter period would therefore force an
earlier exact repeat, contradicting the ledger. This reasoning uses the
specified exact rational recurrence, not a guess from finite digits.

After eight digits of $u$, $S_8=5+9\cdot520=4685$ and $r_8=-5$.
Shifting back to $x$ gives the truncation $4685/3$ and exact error
$$
x-\frac{4685}{3}=\frac{3^7(-5)}7,\qquad
v_3\!\left(x-\frac{4685}{3}\right)=7.
$$
The shift changes both digit positions and absolute error precision.

Return to the [task](06-arithmetic.md#sec-rational-cycle-task) or
[worked example](06-arithmetic.md#sec-rational-cycle-proof).
<!-- rational-cycle-answer:end -->

### Chapter 7, Exercise 2

The $n$th term is $p^n/n$, with valuation

$$
v_p(p^n/n)=n-v_p(n).
$$

Since $p^{v_p(n)}\le n$, we have $v_p(n)\le\log_p n$, and hence
$n-v_p(n)\to\infty$. The terms tend to zero. By the non-Archimedean series
criterion, $\sum_{n\ge1}p^n/n$ converges in $\mathbb Q_p$.

<!-- primitive-boundary-answer:start -->
### Chapter 8: formal primitives and boundary convergence {#sec-primitive-boundary-answers}

#### Changed-task hint {#sec-primitive-boundary-hint}

Divide by the degree of the primitive monomial, not the summation index
$k$. Keep open radius and boundary convergence in separate columns.
For a tail, ask whether the first omitted term is the unique term of
least valuation.

Return to the [task](08-analysis.md#sec-primitive-boundary-task) or continue
to the [full solution](#sec-primitive-boundary-solution).

#### Changed-task full solution {#sec-primitive-boundary-solution}

Termwise formal integration gives
$$
G(T)=\sum_{k\ge1}3^kT^{3^k},
$$
since the primitive monomial has degree $3^k$. The original nonzero
coefficient root norms are $3^{-2k/(3^k-1)}\to1$; the primitive's are
$3^{-k/3^k}\to1$. Other coefficients vanish. Both root-test limsups are
therefore $1$, so both open radii are $1$.

For $T\in\mathbb Z_3$, the original term norms are at most $3^{-2k}$
and the primitive term norms at most $3^{-k}$. The series criterion and
ultrametric tail bound prove uniform convergence of **both** series on
the closed unit disc. Boundary loss is possible, as in the worked pair,
but is not inevitable.

For nonzero $T\in\mathbb Z_3$, let $t=v_3(T)\ge0$. Primitive term $k$
has valuation
$$
k+3^kt.
$$
The increase to the next term is $1+2\cdot3^kt>0$. Thus the first omitted
term uniquely has least valuation. Dividing the whole convergent tail by
that term leaves $1$ plus an element of $3\mathbb Z_3$, which is a unit.
Consequently
$$
v_3\bigl(G(T)-G_K(T)\bigr)=K+1+3^{K+1}t.
$$
At a unit this is exactly $K+1$, giving the sharp uniform error norm
$3^{-(K+1)}$ on $\mathbb Z_3$. At zero, the tail is exactly zero and
has valuation $+\infty$. The same argument for the original series gives
$$
v_3\bigl(g(T)-g_K(T)\bigr)
=2(K+1)+(3^{K+1}-1)t
$$
for nonzero $T\in\mathbb Z_3$.

At $T=1$, convergent geometric sums give
$$
g(1)=\sum_{k\ge1}9^k=-\frac98,\qquad
G(1)=\sum_{k\ge1}3^k=-\frac32.
$$
The first three unit-valuation ledger rows end in $(2,1)$, $(4,2)$,
and $(6,3)$, providing finite checks of the two coefficient families.
If $t<0$, the monomial valuations tend to $-\infty$; neither series
converges outside $\mathbb Z_3$. Division enlarges some coefficient norms
but introduces only subexponential growth in the degree, so it cannot
lower the open radius. Boundary convergence needs the separate term and
tail estimates just given.

Return to the [changed task](08-analysis.md#sec-primitive-boundary-task) or
the [worked clinic](08-analysis.md#sec-primitive-boundary-clinic).

<!-- primitive-boundary-answer:end -->
### Chapter 9, Exercise 1

For $f(x)=x^2+1$ at $p=5$, begin with $a_1=2$. At each level solve

$$
t\equiv-\frac{f(a_n)}{5^n}\bigl(2a_n\bigr)^{-1}\pmod5.
$$

The compatible least residues are

$$
2\pmod5,\quad 7\pmod {25},\quad57\pmod {125},
\quad182\pmod {625},\quad2057\pmod {3125}.
$$

The final check is $2057^2+1=4{,}231{,}250$, divisible by $3125$. The other root
is its negative modulo each power.

<!-- nonunit-newton-answer:start -->
### Chapter 9: nonunit Newton certificates {#sec-nonunit-newton-answers}

#### Changed-task hint {#sec-nonunit-newton-hint}

Translate the strict Hensel ball into a congruence modulo $4$ before
counting root digits. In the requested branch, the factor
$a+\alpha_A$ in $a^2-A=(a-\alpha_A)(a+\alpha_A)$ has valuation $1$.
Try the compatible coefficient $361$ and its root $-19$.

Return to the [task](09-hensel.md#sec-nonunit-newton-task) or continue
to the [full solution](#sec-nonunit-newton-solution).

#### Changed-task full solution {#sec-nonunit-newton-solution}

The helper satisfies the strict inequality $5>2$. It certifies the
unique root in $3+4\mathbb Z_2$, the negative of the requested root.
Thus the theorem is valid but its direct branch conclusion does not
meet the request. For this even polynomial, explicitly negating a certified
root is a valid separate symmetry argument.

Restarting from $1$ gives:

| $n$ | $a_n$ | $r_n$ | $e_n$ |
|---:|---:|---:|---:|
| 0 | $1$ | $3$ | $2$ |
| 1 | $21$ | $4$ | $3$ |
| 2 | $241/21$ | $6$ | $5$ |
| 3 | $38081/5061$ | $10$ | $9$ |

The exact residuals are
$-40$, $400$, $40000/441$, and $400000000/25613721$.
Every derivative valuation is $1$. The same quadratic identities prove
$r_{n+1}=2r_n-2$ and $e_n=r_n-1$, hence
$r_n=2+2^n$ and $e_n=1+2^n$.

With source cap $M=6$, the uniform precisions
$\min(r_n,M)-1$ are $2,3,5,5$. Five bits are first attained at $a_2$.
The coefficient

$$
361=41+5\cdot64
$$

is admissible and has the selected root $-19\equiv1\pmod4$.
Factoring the difference of squares proves
$v_2(\alpha_{41}-(-19))=6-1=5$. More visibly, $a_3$ certifies
$\alpha_{41}\equiv13\pmod{64}$, whereas $-19\equiv45\pmod{64}$.
Both are $13$ modulo $32$. The two admissible exact inputs disagree on
the sixth bit, so no algorithm can infer it from the original source.
An honest output is $13+O(2^5)$, five absolute and relative bits.

Additional nominal iterations cannot remove this source ambiguity.
If remeasurement gives $41+O(2^7)$, source precision allows six bits.
The listed $a_2$ still has only five nominal root bits; $a_3$ is the first
to certify $\min(10,7)-1=6$. The certificate calls for these two cases are:

    nonunit_root_certificate(41, 6, 241, 21, 5) -> (5, 13)
    nonunit_root_certificate(41, 7, 38081, 5061, 6) -> (6, 13)

Three updates is the count from the stipulated start $1$, not an optimum
over all starts or methods. A better starting approximation, or lifting the
other branch and explicitly negating, may reduce it.

Return to the [changed task](09-hensel.md#sec-nonunit-newton-task) or
the [worked clinic](09-hensel.md#sec-nonunit-newton-clinic).
<!-- nonunit-newton-answer:end -->

### Chapter 9: singular roots and compatible branches {#sec-singular-root-solutions}

The changed task in [Section 9.7](09-hensel.md#sec-singular-root-tree) has the same first two residue
levels for three different polynomials. Since both $9$ and $18$ vanish modulo
$3$ and $9$, those congruences reduce to $x^2=0$ at the two stated levels.
At level three, the exact edges from parents modulo $9$ are:

- For $x^2$, parent $0$ has children $0,9,18$ modulo $27$; parents $3,6$
  have no children.
- For $x^2-9$, parent $0$ has no children, parent $3$ has children $3,12,21$,
  and parent $6$ has children $6,15,24$.
- For $x^2-18$, none of the three parents has a child.

These conclusions also follow from the next-digit equation. The derivative
is zero modulo $3$ at every parent, so each has all three candidates or none,
according as $f(a)/9$ is zero or nonzero modulo $3$. Consequently the root
counts modulo $27$ are $3,6,0$.

For the **exact** conclusions, use arithmetic in the integral domain
$\mathbb Z_3$. The equation $x^2=0$ forces $x=0$, giving one distinct root.
The factorisation $x^2-9=(x-3)(x+3)$ gives exactly $3,-3$, which are distinct
in characteristic zero. These exact roots have algebraic multiplicity one,
despite their singular reductions modulo $3$. Finally, a root of $x^2-18$
would satisfy $x\equiv0\pmod3$, so $x=3y$ for $y\in\mathbb Z_3$ and
$y^2=2$. Reducing modulo $3$ is impossible. The distinct exact root counts
are therefore **one, two, and zero**, established by proof rather than by
extrapolating the third level.

For $x^2-9$ and $N\ge3$, write a residue root as $x=3y$, with $y$ read modulo
$3^{N-1}$. Its condition is

$$
y^2=1\pmod{3^{N-2}}.
$$

The two simple roots $\pm1$ modulo $3$ have unique lifts to modulus
$3^{N-2}$. Each allows three choices for the extra, unconstrained digit of
$y$ modulo $3^{N-1}$. Hence there are six residue roots modulo $3^N$.
There are still only two infinite compatible paths, the truncations of
$3$ and $-3$. In fact, from level $N\ge3$, only the two parent residues
$\pm3\bmod3^N$ have children; the other four die at the next level.
Writing a parent as $\pm3+3^{N-1}t$ shows why: its residual divided by $3^N$
is $\pm2t\bmod3$, so only $t=0$ has children. Each of those two continuing
parents has three children, which keeps the finite count equal to six.

For the transfer with $k\ge1$, constants $3^{2k}$ and $2\cdot3^{2k}$ both
vanish modulo every $3^N$ with $N\le2k$. All three finite root sets therefore
agree through level $2k$. At level $2k+1$:

- $x^2$ has $3^k$ residue roots by the valuation formula in Chapter 9;
- $x^2-3^{2k}$ requires $v_3(x)=k$, so $x=3^k u$ with
  $u\bmod3^{k+1}$ a unit satisfying $u^2=1\pmod3$; the two residue choices
  for $u\bmod3$ and its $k$ free digits give $2\cdot3^k$ roots;
- $x^2-2\cdot3^{2k}$ would instead require $u^2=2\pmod3$, so has none.

The exact roots are respectively $0$, the pair $\pm3^k$, and none. Thus for
any fixed inspection horizon $H$, choosing $2k\ge H$ produces three
polynomials with identical data through that horizon but different exact root
counts. This statement changes the polynomials as the horizon changes. It
does not provide one fixed rootless polynomial with nonempty root sets at
every level: each rootless member first fails at its own level $2k+1$, in
agreement with the inverse-limit existence theorem.

### Chapter 10, Exercise 2

In $\mathbb Q_5$, the square residues among units are $1$ and $4$. The number
$3$ has even valuation $0$ but nonsquare residue, so it is not a square.
$15$ has odd valuation $1$, so it is not a square. For $45=5\cdot9$, the
valuation is again odd. Finally $75=5^2\cdot3$ has even valuation but unit residue
$3$, still nonsquare. None of the four is a square.

### Chapter 11, Exercise 5

For a nonnegative integer-valued random variable,

$$
\mathbb E[v_p(X)]
=\sum_{n=1}^{\infty}\Pr(v_p(X)\ge n).
$$

The event $v_p(X)\ge n$ is the ball $p^n\mathbb Z_p$ and has probability
$p^{-n}$. Therefore

$$
\int_{\mathbb Z_p}v_p(x)\,d\mu(x)
=\sum_{n=1}^{\infty}p^{-n}=\frac{1}{p-1}.
$$

The point $x=0$, where the valuation is infinite, has measure zero and does not
alter the integral.

### Chapter 13, Exercise 2

If $T^n(x)=x$ for $T(x)=x+1$, then $x+n=x$ in the characteristic-zero field
$\mathbb Q_p$, so $n=0$. No positive period exists. Modulo $p^N$, however,
$T^{p^N}$ is the identity; finite periodicity does not lift to exact periodicity.

### Chapter 15, Exercise 2

Suppose $a/b$ and $a'/b'$ are two candidates with denominators prime to $p$ and

$$
a\equiv br\pmod {p^N},\qquad
a'\equiv b'r\pmod {p^N}.
$$

Multiplying crosswise gives $p^N\mid ab'-a'b$. But the size assumptions yield

$$
|ab'-a'b|\le |a||b'|+|a'||b|\le2AB<p^N.
$$

The only multiple of $p^N$ in that range is zero. Thus $ab'=a'b$, so the reduced
rationals are equal.

## Chapter 39: polynomial precision planning

### Changed-task hint {#sec-polynomial-precision-hint}

Put $x=2+\delta$ and $c=25+\varepsilon$, then expand the entire numerator.
The coefficient of $\delta$ before division by $9$ is now $9$.
Bound all four error terms after division. For necessity, vary one input while
holding the other at its nominal value; inspect $x=2+3^N$ separately when
$N=1$.

Return to the [changed task](39-computational-local-fields.md#sec-polynomial-precision-task)
or continue to the [full solution](#sec-polynomial-precision-solution).

### Changed-task full solution {#sec-polynomial-precision-solution}

The exact expansion is
$$
F(2+\delta,25+\varepsilon)-3
=\delta+\frac23\delta^2+\frac19\delta^3+\frac{\varepsilon}{9}.
$$
The four terms have valuation at least $N$, $2N-1$, $3N-2$, and $M-2$.
For $N\ge1$, the two nonlinear bounds are at least $N$. Therefore every
admissible output belongs to
$$
3+3^Q\mathbb Z_3,\qquad Q=\min(N,M-2).
$$
This enclosing cap is sharp. With $\delta=0,\varepsilon=3^M$, the error has
valuation exactly $M-2$. With $\varepsilon=0,\delta=3^N$, it is
$$
3^N\left(1+2\cdot3^{N-1}+3^{2N-2}\right).
$$
For $N\ge2$ the parenthesised term is $1$ modulo $3$, so its valuation is
zero. For $N=1$ it is $4$, again a unit. Thus the error has valuation
exactly $N$ in every case. These witnesses prove the cap is a sharp enclosure;
they do not assert that the entire enclosing ball is the image.

Output modulo $3^6$ consequently requires $N\ge6,M\ge8$. The surviving
linear term after division by $9$ has unit coefficient. This changes the
input requirement from $N\ge4$ in the stationary example to $N\ge6$ here.
Increasing coefficient precision alone cannot repair an insufficient input
cap.

For explicit failures at one fewer digit, $x=245=2+3^5,c=25$ gives
$$
F(245,25)-3=1{,}633{,}932=3^5\cdot6724,
$$
and $6724$ is a unit in $\mathbb Z_3$. At $M=7$, choose $x=2$ and
$c=2212=25+3^7$: the error is $3^5$. Conversely, at $N=6,M=8$ every error
has valuation at least six. The resulting ball $3+O(3^6)$ has valuation
one, absolute precision six, and relative precision five. Taking $x=2$ and
$c=6586=25+3^8$ gives error exactly $3^6$, so a seventh digit is not
uniformly justified.

The published finite certificate returns $(6,9,3)$. A quotient modulo $3^6$
requires its numerator modulo $3^8$. The input cap $N=6$ leaves
$3^{8-6}=9$ admissible input residues, compared with $3^{8-4}=81$ in the
stationary example. All inspected numerators are $27$ modulo $3^8$,
and the coefficient cap $M=8$ leaves one coefficient residue at that modulus.
This proves the finite congruence for every represented input class. The exact
expansion proves why it holds, and why the law continues beyond this finite
check.

Return to the [changed task](39-computational-local-fields.md#sec-polynomial-precision-task)
or the [worked precision plan](39-computational-local-fields.md#sec-polynomial-precision-plan).

## Project C: the nonunit Igusa report {#sec-padic-igusa-studio-answers}

This is the key to the
[changed project](appendix-g-problem-studios.md#sec-padic-igusa-nonunit-task).
The worked two-adic comparison is
[the preceding studio case](appendix-g-problem-studios.md#sec-padic-igusa-studio-worked).
Use normalized additive Haar measure, $v_2(2)=1$, and $T=2^{-s}$ throughout.

### Hint: keep the factor and the measure {#sec-padic-igusa-nonunit-hint}

Odd $x$ gives a unit. On the even ball put $x=2y$, record $dx=dy/2$,
and factor $h(2y)=4(y^2-1)$. For the counts, $x$ modulo $2^m$ even
corresponds to $y$ modulo $2^{m-1}$; a condition modulo $2^{m-2}$
leaves two choices for its last digit.

For precision, expand $h(a+16t)$ for every $t\in\mathbb Z_2$.
A root representative and a root-containing ball are different
mathematical assertions. Preserve the quadratic term when checking the
claimed output ball.

### Complete solution: valuation shells {#sec-padic-igusa-nonunit-key}

Let $h=x^2-4$. Odd $x$ has $v_2(h(x))=0$, with mass $1/2$.
If $x\in4\mathbb Z_2$, then
$$
h(x)=4\bigl((x/2)^2-1\bigr)
$$
has valuation $2$, because $x/2$ is even. This region has mass $1/4$.

In the remaining region $x\equiv2\bmod4$, the factors $x-2,x+2$
both have valuation at least $2$. One has valuation exactly $2$,
and the other has valuation $k\ge3$, unless $x=\pm2$.
For either choice of the nearer center the shell has mass $2^{-k-1}$.
The two choices are disjoint, so the product valuation $r=k+2$ has
mass $2^{-k}=2^{2-r}$. Thus the complete distribution is
$$
p_0=\frac12,\qquad p_2=\frac14,\qquad
p_1=p_3=p_4=0,\qquad p_r=2^{2-r}\quad(r\ge5).
$$
The omitted two zeros have measure zero. Summing all shells gives
$$
\boxed{Z_h(T)=\frac12+\frac{T^2}{4}
+\frac{T^5}{8(1-T/2)}.}
$$
In particular $Z_h(0)=1/2$ and
$Z_h(1)=1/2+1/4+1/4=1$. The tail geometric series converges
precisely for $|T|<2$, equivalently $\operatorname{Re}(s)>-1$.
For example, at $|T|=2$ its terms do not tend to zero.
A value of the rational expression outside this domain belongs to
meromorphic continuation, not to the convergent shell integral.

### Complete solution: congruence counts and normalized tails {#sec-padic-igusa-nonunit-counts}

Summing the exact masses yields
$$
A_1=A_2=\frac12,\qquad A_3=A_4=\frac14,\qquad
A_m=2^{3-m}\quad(m\ge5).
$$
Consequently the requested finite ledger is

| $m$ | $N_m(h)$ | $2^m$ | $A_m(h)$ |
|---:|---:|---:|---:|
| 0 | 1 | 1 | $1$ |
| 1 | 1 | 2 | $1/2$ |
| 2 | 2 | 4 | $1/2$ |
| 3 | 2 | 8 | $1/4$ |
| 4 | 4 | 16 | $1/4$ |
| 5 | 8 | 32 | $1/4$ |
| 6 | 8 | 64 | $1/8$ |
| 7 | 8 | 128 | $1/16$ |
| 8 | 8 | 256 | $1/32$ |

An independent all-level count starts with the parity condition.
For $m\ge2$ every solution has $x=2y$ and
$$
h(x)\equiv0\bmod2^m
\quad\Longleftrightarrow\quad
y^2-1\equiv0\bmod2^{m-2}.
$$
Here $y$ ranges modulo $2^{m-1}$, so every solution of the right-hand
congruence has exactly two lifts to that modulus. With $N_0(g)=1$,
$$
N_m(h)=2N_{m-2}(g)\qquad(m\ge2).
$$
At $m=1$ there is one even residue. The worked $g=x^2-1$ counts
therefore prove $N_2=2,N_3=2,N_4=4$, and $N_m=8$ for every
$m\ge5$.

The reduced tail calculation is
$$
\begin{aligned}
Q_h(T)&:=\sum_{m\ge1}A_m(h)T^{m-1}\\
&=\frac12+\frac T2+\frac{T^2+T^3}{4}
+\frac{T^4}{4(1-T/2)},\\
1-(1-T)Q_h(T)
&=\frac12+\frac{T^2}{4}+\frac{T^5}{8(1-T/2)}.
\end{aligned}
$$
The counts are divided by $2^m$ before forming this identity.
Using the raw sequence $1,2,2,4,8,\ldots$ as probabilities would
give the wrong measure and generating series.

### Complete solution: the residue-ball recursion {#sec-padic-igusa-nonunit-recursion}

The odd ball contributes $1/2$. On the even ball,
$h(2y)=4g(y)$ and $dx=dy/2$. Hence
$$
Z_h(T)=\frac12+\frac{T^2}{2}Z_g(T)
=\frac12+\frac{T^2}{2}
\left(\frac12+\frac{T^3}{4(1-T/2)}\right).
$$
This is the same answer obtained by shells and counts.
The further substitutions $g(1+2z)=4z(z+1)$ and the
two residue balls for $z(z+1)$ reduce the calculation to the
linear integral in the worked case. They explain the denominator.
The original derivative $h'(x)=2x$ is not a unit on a root ball;
simple-root Hensel uniqueness modulo $2$ has not been used.

### Complete solution: eight finite roots and two compatible branches {#sec-padic-igusa-nonunit-branches}

For $m\ge5$, a solution must have $x\equiv2\bmod4$.
Of $x-2,x+2$, one factor then has valuation $2$, and the other
must have valuation at least $m-2$. Thus all roots, with no
duplication between signs, are
$$
S_m(h)=
\{2\varepsilon+j2^{m-2}\bmod2^m:
\varepsilon\in\{1,-1\},\quad j=0,1,2,3\}.
$$
Each of the two classes modulo $2^{m-2}$ has four representatives
modulo $2^m$. This proves the count eight for every such $m$.

At $m=5$ the eight residues are
$$
S_5(h)=\{2,6,10,14,18,22,26,30\}.
$$
The classes $2,14,18,30$ have children modulo $64$; the others
do not. One direct failure is
$$
h(6+32t)=32(1+12t+32t^2).
$$
The factor in parentheses is odd, so no $t\in\mathbb Z_2$
makes this divisible by $64$. Applying the displayed root-set
formula at levels $6$ and $7$ shows that only $2,30\bmod32$
have descendants two levels further.

An infinite compatible sequence of root residues defines an
$x\in\mathbb Z_2$ for which $h(x)$ is divisible by every $2^m$,
hence $h(x)=0$. Since $\mathbb Z_2$ is an integral domain,
$(x-2)(x+2)=0$ implies $x=2$ or $x=-2$.
Both do give compatible branches at all levels.
The other six roots at any fixed $m\ge5$ are finite congruence
solutions, not six additional two-adic roots. Choosing a fresh
root at each precision without checking reduction would not
establish compatibility.

### Complete solution: two input balls with different conclusions {#sec-padic-igusa-nonunit-precision}

For the first input write $x=2+16t$. Then
$$
h(2+16t)=64t+256t^2=64t(1+4t).
$$
Every represented input therefore gives
$h(x)\in0+O(2^6)$. This output precision is sharp:
$t=1$ gives $x=18$ and $h(18)=320=2^6\cdot5$.
But $t=0$ gives the exact root $2$ and the exact value zero.
Thus the same input ball contains an exact zero and a value
of valuation $6$; it certifies neither an exact root nor one
exact output valuation.

For the second input $x=10+16t$,
$$
h(10+16t)=96+320t+256t^2
=32(3+10t+8t^2).
$$
The last factor is odd for every $t\in\mathbb Z_2$.
Therefore $h(x)\in32+O(2^6)$ and every value has exact
valuation $5$. The absolute output precision $6$ is sharp:
$h(26)-h(10)=576=2^6\cdot9$, so a seventh output digit
is not uniform across the input ball. No exact root lies
in this second ball.

| input ball | exact input valuation | absolute input precision | certified output ball | exact output valuation |
|:---|---:|---:|:---|:---|
| $2+O(2^4)$ | $1$ | $4$ | $0+O(2^6)$ | not determined |
| $10+O(2^4)$ | $1$ | $4$ | $32+O(2^6)$ | $5$ |

Both inputs have relative precision $4-1=3$.
The second output has relative precision $6-5=1$.
The first output has no single relative-precision entry,
because its valuation varies and zero is possible.
This ledger records the mathematical information contained
in each ball, rather than assigning the representative's
valuation to every element.

### A project-specific evidence rubric {#sec-padic-igusa-studio-rubric}

Use the original studio's $0$–$4$ scale separately for each
row. A score of $0$ means absent or contradictory evidence;
$1$ means an unsupported numerical pattern; $2$ means a
partly correct calculation with a missing essential
justification; $3$ means the central argument is correct
with an identified, repairable omission; $4$ requires all
the full-credit evidence in that row.

| dimension | full-credit evidence for this project |
|:---|:---|
| Normalization and domain | Declares $\mathbb Q_2$, $v_2(2)=1$, additive Haar mass one, $T=2^{-s}$, the null root set and $\operatorname{Re}(s)>-1$ for the integral. |
| Three agreeing derivations | Proves the parity/shell partition, reduces the normalized-tail identity, and records both the $T^2$ factor and the $1/2$ Haar factor in the recursion. |
| Finite and all-level counts | Gives the exact ledger through $m=8$, refinement edges and the proof $N_m(h)=2N_{m-2}(g)$ for $m\ge2$; an initial constant-count pattern alone is insufficient. |
| Root branches | Lists all eight roots at high precision, exhibits a nonlifting residue, checks compatibility, and proves that only $\pm2$ are actual roots. |
| Precision certificates | Derives both output balls from the full expansions, proves sharpness by explicit represented inputs, and distinguishes valuation $5$ from the root-containing ball's undetermined valuation. |
| Interpretation and repair | Explains why the odd-prime unit-derivative shortcut fails here, uses self-review or independent feedback to repair a specific argument, and makes no general rationality or learning-outcome claim from this finite example. |

The rubric organizes a written mathematical review. A
self-reported completion mark does not supply any of this
evidence. Retain the initial attempt, the named correction
and the reasoning supporting it.

Return to the [changed project](appendix-g-problem-studios.md#sec-padic-igusa-nonunit-task)
or compare the [three-method worked report](appendix-g-problem-studios.md#sec-padic-igusa-studio-worked).

## Chapter 12: complete selected models {#sec-local-fields-selected-models}

These models answer the seven exercises in [Chapter 12](12-local-fields.md#exercises). Throughout, $p$ is prime, $K/\mathbb Q_p$ is a finite field extension, and the integer-valued normalization is $v_K(K^\times)=\mathbb Z$, with $v_K(p)=e$. Put $n=[K:\mathbb Q_p]$, write $\mathcal O_K$ for its valuation ring, and put $\mathfrak p_K=\{x:v_K(x)>0\}$. The extension-of-valuation, Eisenstein, and lifted-residue extension theorems are used with the hypotheses stated in the chapter.

### Exercise 1: an Eisenstein cubic {#sec-local-fields-cubic-model}

For $F(T)=T^3-5$, the leading coefficient is $1$, the other coefficients are divisible by $5$, and the constant coefficient $-5$ is not divisible by $25$. Eisenstein's criterion at $5$ therefore proves irreducibility over $\mathbb Q_5$.

If $\pi$ is a root, then $K=\mathbb Q_5(\pi)$ has degree $3$. The stated Eisenstein-extension theorem gives total ramification:

$$
e=3,\qquad f=1,\qquad k_K\cong\mathbb F_5.
$$

The root $\pi$ is a uniformizer. Its equation checks the normalization:

$$
\pi^3=5,\qquad v_K(\pi)=1,\qquad v_K(5)=3.
$$

The three elements $1,\pi,\pi^2$ are a $\mathbb Q_5$-basis because the minimal polynomial has degree $3$. In the alternative normalization extending $v_5$, the root has valuation $1/3$, not $1$.

### Exercise 2: an unramified quadratic {#sec-local-fields-unramified-model}

Over $\mathbb F_2$, the polynomial $G(T)=T^2+T+1$ takes value $1$ at both $0$ and $1$. A quadratic over a field is reducible exactly when it has a root, so its reduction is irreducible. Its derivative reduces to $1$, which also verifies separability.

The monic lift $G\in\mathbb Z_2[T]$ is irreducible over $\mathbb Q_2$ by the monic reduction criterion. If $\zeta$ is a root, the unramified construction in Chapter 12 gives

$$
K=\mathbb Q_2(\zeta),\qquad [K:\mathbb Q_2]=2,\qquad e=1,\qquad f=2.
$$

The residue field is

$$
k_K\cong\mathbb F_2[T]/(T^2+T+1)\cong\mathbb F_4,
$$

and $2$ remains a uniformizer. The root is integral: a negative valuation would make $\zeta^2$ the unique least-valuation term in $\zeta^2+\zeta+1$, which is impossible. Now $\zeta(\zeta+1)=-1$ is a unit and both factors are integral, so $v_K(\zeta)=0$. The identity $(\zeta-1)(\zeta^2+\zeta+1)=\zeta^3-1$ shows that $\zeta$ is a cube root of unity; it is not $1$ because $G(1)=3\ne0$ in the characteristic-zero field. Thus this example is also $\mathbb Q_2$ with a primitive cube root of unity adjoined.

### Exercise 3: trace and norm in a ramified quadratic {#sec-local-fields-trace-norm-model}

The polynomial $T^2-p$ is Eisenstein at every prime $p$, including $2$. Hence, with $\pi=\sqrt p$, the extension $K=\mathbb Q_p(\pi)$ has degree $2$ and basis $1,\pi$.

Let $x=a+b\pi$, with $a,b\in\mathbb Q_p$. The two images under multiplication by $x$ are

$$
x\cdot1=a+b\pi,\qquad
x\cdot\pi=pb+a\pi.
$$

With columns indexed by $1,\pi$, the multiplication matrix is

$$
M_x=\begin{pmatrix}a&pb\\ b&a\end{pmatrix}.
$$

Its matrix trace and determinant give

$$
\operatorname{Tr}_{K/\mathbb Q_p}(a+b\sqrt p)=2a,\qquad
N_{K/\mathbb Q_p}(a+b\sqrt p)=a^2-pb^2.
$$

Equivalently, the conjugates are $a+b\pi$ and $a-b\pi$. This is a characteristic-zero extension even when $p=2$: the coefficient $2a$ is not identically zero. The symbol $p$ denotes a uniformizer of the base field, not its characteristic.

### Exercise 4: uniformizers differ by a unit {#sec-local-fields-uniformizer-model}

First, $u\in\mathcal O_K$ is a unit precisely when $v_K(u)=0$. If its valuation is zero, then $v_K(u^{-1})=0$, so its inverse also belongs to $\mathcal O_K$. Conversely, if $u$ and $u^{-1}$ are both integral, their nonnegative valuations sum to $v_K(1)=0$, forcing both to be zero.

Let $\pi,\pi'$ be uniformizers. Their quotient satisfies

$$
v_K(\pi'/\pi)=1-1=0,
$$

so $u=\pi'/\pi$ is a unit and $\pi'=u\pi$. Conversely, every unit multiple $u\pi$ has valuation $0+1=1$ and is a uniformizer. For example, $(1+\pi)\pi$ is another uniformizer because $1+\pi$ has residue $1$ and is a unit. The principal maximal ideal is fixed while its chosen generator can change.

### Exercise 5: why the residue cardinality is a prime power {#sec-local-fields-residue-model}

The quotient $k_K=\mathcal O_K/\mathfrak p_K$ is a field: a nonzero residue class has a representative of valuation $0$, whose inverse is integral. Also, $1$ has nonzero residue. Since $v_K(p)=e>0$, the residue of $p$ vanishes, whereas the residues of $1,\ldots,p-1$ are nonzero. Thus $k_K$ has characteristic $p$ and contains a copy of $\mathbb F_p$.

We prove its finite dimension without assuming the degree identity. Suppose $\bar u_1,\ldots,\bar u_r$ are linearly independent over $\mathbb F_p$, and choose lifts $u_j\in\mathcal O_K$. They are linearly independent over $\mathbb Q_p$. Indeed, suppose

$$
\sum_{j=1}^r a_j u_j=0,\qquad a_j\in\mathbb Q_p,
$$

with some coefficient nonzero. Let $m=\min_j v_p(a_j)$ over the nonzero coefficients, and put $b_j=p^{-m}a_j$, taking $b_j=0$ when $a_j=0$. Then every $b_j\in\mathbb Z_p$, and at least one has nonzero residue modulo $p$. Reducing the scaled relation modulo $\mathfrak p_K$ gives

$$
\sum_{j=1}^r \bar b_j\bar u_j=0.
$$

The coefficients $\bar b_j$ lie in $\mathbb F_p$ and are not all zero, contrary to the assumed independence.

Since $K$ has $\mathbb Q_p$-dimension $n$, there cannot be more than $n$ such independent residue classes. Starting with $\bar1$, choose independent classes until they span: if they did not span after $n$ choices, one further choice would contradict the bound. Hence $k_K$ has a finite $\mathbb F_p$-basis of some size $f$, with $1\le f\le n$. Each vector has a unique list of $f$ coefficients, each with $p$ choices, so

$$
|k_K|=p^f.
$$

This argument establishes finiteness before the proof of $n=ef$ uses $f$.

### Exercise 6: two valuation normalizations {#sec-local-fields-normalization-model}

In a totally ramified quadratic extension, $e=2$. The integer-valued normalization and the normalization extending $v_p$ are related by

$$
w_K(x)=\frac{v_K(x)}2.
$$

Thus a uniformizer $\pi$ and the base prime satisfy

$$
v_K(\pi)=1,\quad v_K(p)=2,\qquad
w_K(\pi)=\frac12,\quad w_K(p)=1.
$$

For $a\in\mathbb Q_p^\times$, the formulas are $v_K(a)=2v_p(a)$ and $w_K(a)=v_p(a)$. Both normalizations give the same valuation ring and topology. The absolute value extending the standard one on $\mathbb Q_p$ is

$$
|x|_K=p^{-w_K(x)}=p^{-v_K(x)/2}.
$$

Using $p^{-v_K(x)}$ would instead restrict to $|a|_p^2$ on the base. It induces the same topology but has a different numerical normalization.

In a general totally ramified quadratic extension, $p=u\pi^2$ for a unit $u$, because the quotient $p/\pi^2$ has valuation zero. In the special example $\pi^2=p$, that unit is $1$. Equal valuations alone do not make the two elements equal.

### Exercise 7: the full independence argument {#sec-local-fields-independence-model}

Let $\bar u_1,\ldots,\bar u_f$ be an $\mathbb F_p$-basis of $k_K$, and choose integral lifts $u_j$. We prove that the $ef$ elements

$$
u_j\pi^i,\qquad 0\le i<e,\quad 1\le j\le f,
$$

are linearly independent over $\mathbb Q_p$.

Suppose a nontrivial relation exists and group it by the exponent $i$:

$$
\sum_{i=0}^{e-1}\pi^i S_i=0,\qquad
S_i=\sum_{j=1}^f a_{ij}u_j,\qquad a_{ij}\in\mathbb Q_p.
$$

For every block having a nonzero coefficient, set $m_i=\min_j v_p(a_{ij})$, ignoring zero coefficients. Write $a_{ij}=p^{m_i}b_{ij}$ with $b_{ij}\in\mathbb Z_p$. At least one $\bar b_{ij}\ne0$. Independence of the residue basis shows that $\sum_j b_{ij}u_j$ has nonzero residue, hence is a unit. Therefore

$$
v_K(S_i)=e m_i,\qquad
v_K(\pi^i S_i)=e m_i+i.
$$

The nonzero blocks have different valuations: equality for different $i$ would imply $i\equiv i'\pmod e$, impossible for $0\le i,i'<e$. There is consequently a unique least-valuation block. By the unequal-valuation rule, its valuation cannot be cancelled by the sum of the higher-valuation blocks. The total cannot be zero, contradicting the relation.

This proves linear independence and hence $ef\le n$. It is essential to reduce the coefficients within a block first. The individual summands $a_{ij}u_j\pi^i$ for a fixed $i$ can have equal valuations.

**How spanning finishes the identity.** The same residue lifts supply representatives modulo $\pi^e\mathcal O_K$: successively choose the $e$ residue layers, each as an $\mathbb F_p$-linear combination of the $\bar u_j$. Since $p/\pi^e$ is a unit, $\pi^e\mathcal O_K=p\mathcal O_K$. Consequently every $x\in\mathcal O_K$ has an expression

$$
x=B_0+p x_1,\qquad
B_0=\sum_{i,j}c_{ij,0}u_j\pi^i,\quad
c_{ij,0}\in\{0,\ldots,p-1\},\quad x_1\in\mathcal O_K.
$$

Repeat with $x_1,x_2,\ldots$. After $M$ blocks the remainder is $p^M x_M$, of valuation at least $eM$. For each pair $(i,j)$, the coefficients $\sum_{m<M}c_{ij,m}p^m$ converge in $\mathbb Z_p$. Completeness therefore expresses $x$ as a $\mathbb Z_p$-linear combination of the $ef$ displayed elements. Every element of $K$ becomes integral after multiplication by a sufficiently large power of $p$, so these elements span $K$ over $\mathbb Q_p$. Alongside independence this gives $n=ef$.

### Changed quadratic case: complete model {#sec-local-fields-quadratic-change-key}

Return to the [public task](12-local-fields.md#sec-local-fields-quadratic-change). Field status must be checked separately for all three polynomials.

**The ramified field $A$.** The polynomial $T^2-10$ is Eisenstein at $5$: its constant coefficient is divisible by $5$ but not $25$. Thus $A$ is a degree-two field. It is totally ramified, with

$$
e_A=2,\qquad f_A=1,\qquad k_A\cong\mathbb F_5,\qquad
\alpha^2=10.
$$

The root $\alpha$ is a uniformizer, and $1,\alpha$ is a $\mathbb Q_5$-basis. The precise relation to the base prime is

$$
5=\frac12\alpha^2.
$$

The factor $1/2$ is a unit; dropping it would give a false element identity. The valuations are

$$
v_A(\alpha)=1,\quad v_A(5)=2,\qquad
w_A(\alpha)=\frac12,\quad w_A(5)=1,\qquad w_A=v_A/2.
$$

For a nontrivial combination $a+b\alpha$, the nonzero terms have valuations $2v_5(a)$ and $2v_5(b)+1$. These have different parities, so they cannot cancel. This certifies the basis by the $e=2,f=1$ version of Exercise 7.

**The unramified field $B$.** The square residues modulo $5$ are $0,1,4$. Since $2$ is not among them, $T^2-2$ is irreducible modulo $5$; its derivative $2T$ is nonzero at either root in the quadratic residue extension, so the reduction is separable. The lifted-residue construction gives an unramified quadratic field:

$$
e_B=1,\qquad f_B=2,\qquad
k_B\cong\mathbb F_5[T]/(T^2-2)\cong\mathbb F_{25}.
$$

Here $5$ is a uniformizer, while $\beta$ is a unit because $\beta^2=2$. Therefore

$$
v_B(5)=1,\quad v_B(\beta)=0,\qquad w_B=v_B.
$$

The basis $1,\beta$ has two unit elements, so a different-parity argument is unavailable. Suppose $a+b\beta=0$ with coefficients not both zero. Scale them by a common power of $5$ so they are integral and not both zero modulo $5$. Reduction would give a nontrivial relation between $1$ and $\bar\beta$, contradicting their $\mathbb F_5$-independence. This is the $e=1,f=2$ version of Exercise 7.

The invariant ledger records these two field constructions:

| Field | Degree | $e$ | $f$ | Uniformizer | Generator valuation |
|:---|---:|---:|---:|:---|---:|
| $A$ | 2 | 2 | 1 | $\alpha$ | 1 |
| $B$ | 2 | 1 | 2 | $5$ | 0 |

**The two multiplication matrices.** In the displayed bases they are

$$
M_{a+b\alpha}=\begin{pmatrix}a&10b\\b&a\end{pmatrix},\qquad
M_{a+b\beta}=\begin{pmatrix}a&2b\\b&a\end{pmatrix}.
$$

Thus both field traces equal $2a$, while their norms are, respectively,

$$
N_{A/\mathbb Q_5}(a+b\alpha)=a^2-10b^2,\qquad
N_{B/\mathbb Q_5}(a+b\beta)=a^2-2b^2.
$$

The same matrix pattern does not make the ramification data the same.

**The split quotient $C$.** For $F(T)=T^2-6$, the residues $1$ and $-1$ are roots modulo $5$, with derivatives $2$ and $-2$ nonzero modulo $5$. Simple-root Hensel lifting therefore supplies roots $r$ and $-r$ already in $\mathbb Z_5$, with $r\equiv1\pmod5$. To find the next digit, put $r=1+5t$:

$$
(1+5t)^2-6=-5+10t+25t^2
\equiv5(-1+2t)\pmod{25}.
$$

The congruence gives $t\equiv3\pmod5$, hence $r\equiv16\pmod{25}$. This is a finite residue of the exact Hensel root; it does not assert $16^2=6$ in $\mathbb Q_5$.

Over $\mathbb Q_5$, the polynomial factors as $(T-r)(T+r)$ into distinct linear factors. Evaluation at the two roots gives the Chinese-remainder isomorphism

$$
C\cong\mathbb Q_5\times\mathbb Q_5.
$$

For example, the nonzero classes of $T-r$ and $T+r$ have product zero. Thus $C$ is not a field and has no single pair $(e,f)$ as a degree-two field extension. Adjoining one root instead gives $\mathbb Q_5(r)=\mathbb Q_5$, with degree $1$ and $e=f=1$. The regular multiplication matrix on the quotient algebra would still have a trace and determinant, but those are not the degree-one field trace and norm for this adjoined-root field.

### Evidence rubric and repairs {#sec-local-fields-selected-rubric}

Use the existing studio's $0$–$4$ evidence scale separately on each row: $0$ means no usable argument, $1$ a relevant start with a major gap, $2$ partial evidence with an unresolved error, $3$ a correct argument needing a minor clarification, and $4$ complete evidence under the stated hypotheses. These public self-review categories do not automatically award a grade or establish a specialist qualification.

| Dimension | Full evidence in this selected lane | Repair when missing |
|:---|:---|:---|
| Field construction | Applies Eisenstein or irreducible separable reduction with each hypothesis checked; identifies the split third quotient. | Test field status before assigning extension invariants. |
| Valuation and residue data | States the normalization, correct $e,f$, uniformizer and residue field; retains the unit factor in $5=\alpha^2/2$. | Separate equality of valuations from equality of elements. |
| Trace and norm | Specifies the base field and basis, then obtains the correct multiplication matrix, trace and determinant. | Recompute the two image columns; keep characteristic zero at $p=2$. |
| Residue finiteness and independence | Proves finiteness without the degree identity; groups coefficient blocks, reduces the residue combination, and invokes the unique minimum correctly. | Terms within one block may share a valuation: use residue independence first. |
| Changed work and revision | Supplies both valid-field arguments, Hensel hypotheses and the split-algebra diagnosis, then records a substantive correction or a justified retained conclusion. | Compare how $e=2,f=1$ and $e=1,f=2$ allocate independence; a quadratic polynomial need not generate a quadratic field. |

For the original seven exercises, apply the relevant rows to each answer rather than demanding every row in every short proof. A missing unit in an element identity calls for an algebraic repair. A correct element identity accompanied by $v_A(5)=1$ calls for a normalization repair. A proof that only lists distinct values of $i$ without controlling cancellation inside each $S_i$ calls for a residue-field repair.

Keep the first argument, identify the line changed after feedback, and explain why the new argument resolves the error. A public model is support for that revision, not evidence that an unseen task was solved independently.
