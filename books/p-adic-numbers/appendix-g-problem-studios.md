# Guided Problem Studios {#sec-padic-problem-studios}

The *p*-adic world becomes intuitive through exact congruence data and careful
precision statements. These studios integrate arithmetic, proof, computation,
and advanced theorem maps. Every computed object is exact or enclosed in a
declared ball; ordinary floating-point digits never serve as divisibility
evidence.

## Investigation protocol and precision ledger

Begin every page with:

```text
prime and field
valuation normalization
element representation
absolute input precision
relative input precision, if used
operation or theorem
predicted precision loss
output ball
independent check
claim status
```

For $x=a+O(p^N)$, remember that $a$ is one representative of a ball. If the
ball contains elements of different valuations, do not print one exact
valuation. If a denominator ball can contain zero, division is not certified.

A studio report must include a hand calculation at low precision, a scalable
algorithm, a theorem-backed infinite conclusion, and one real-intuition trap.

## Valuation, digits, and completion studio

### Project: one rational in several completions

Choose a rational $r=a/b$ with $p\nmid b$. Compute its first $N$ base-
$p$ digits by solving

$$
b x_N\equiv a\pmod {p^N}.
$$

Verify compatibility

$$
x_{N+1}\equiv x_N\pmod {p^N}
$$

and translate residues into digits. Repeat for at least two primes. Compare the
ordinary size of representatives with the shrinking *p*-adic error
$O(p^N)$.

### Investigation

1. Derive the digit recurrence rather than solving each congruence from scratch.
2. Compute the expansions of $-1$, $1/(1-p)$, and one rational with a
   nontrivial repeating block.
3. Prove rational *p*-adic digit expansions are eventually periodic and prove
   the converse by summing a geometric series.
4. Add two expansions with an explicit carry table.
5. Multiply truncations and certify the output modulus.
6. Construct a Cauchy sequence whose ordinary absolute values grow.

### Completion proof

Represent a compatible residue system $(x_N)$ by rational integers. Prove it
is Cauchy, and show two systems define the same limit exactly when their
difference tends to zero in valuation. Explain why selecting arbitrary
incompatible residues at each level does not define a *p*-adic integer.

### Pitfall test

At $p=2$, the residues $1,3,7,15,\ldots$ converge to $-1$. State why a
plot against ordinary magnitude would move in the wrong visual direction unless
the axis explicitly encodes valuation or precision.

## Hensel lifting and analytic-functions studio

### Project: lift and certify a root

Choose a polynomial $f\in\mathbb Z[X]$, a prime $p$, and a residue $a_1$
satisfying

$$
f(a_1)\equiv0\pmod p,
\qquad f'(a_1)\not\equiv0\pmod p.
$$

Lift one digit at a time and with Newton doubling. At every stage store center,
modulus, residual valuation, derivative valuation, inverse certificate, and new
residual.

### Required cases

- a simple root that lifts uniquely;
- a residue root with singular derivative that still lifts in more than one
  way;
- a singular residue root that does not lift;
- a comparison at $p=2$, where square criteria require deeper congruences.

Do not infer failure from a singular derivative. It means only that the simple-
root theorem does not decide the case.

### Analytic extension

For a power series

$$
F(T)=\sum_{n\ge0}c_nT^n,
$$

estimate its convergence radius from coefficient valuations. On a closed disk
strictly inside the radius, bound the tail using the maximum term. Investigate
the exponential and logarithm at an odd prime and at $p=2$. State their exact
domains before using

$$
\log(xy)=\log x+\log y
$$

or $\exp(u+v)=\exp(u)\exp(v)$.

### Strassmann check

Choose a convergent series with a unique largest coefficient norm at a known
index. Use Strassmann's theorem to bound zeros in $\mathbb Z_p$, then locate
them by residue lifting. A finite search finds candidate balls; the theorem
certifies that no additional zeros are hidden.

## Measure and dynamics studio

### Haar measure from residue partitions

For a locally constant function constant on classes modulo $p^N$, compute

$$
\int_{\mathbb Z_p}f(x)\,d\mu(x)
=p^{-N}\sum_{a=0}^{p^N-1}f(a).
$$

Refine to level $N+1$ and prove the value is unchanged. Then calculate:

- the measure of $a+p^k\mathbb Z_p$;
- the distribution and expectation of $v_p(x)$;
- the probability that a random unit is a square for odd $p$;
- one integral depending only on the first nonzero digit.

### Dynamical project

Study an affine map $T(x)=ax+b$ on $\mathbb Z_p$.

1. Determine when it is an isometry, contraction, or measure preserving.
2. Find fixed points and state when division by $1-a$ is legal.
3. Draw exact finite functional graphs modulo $p^N$ for increasing $N$.
4. Track which cycles lift compatibly.
5. Prove a local attraction result when $|a|_p<1$.
6. Compare finite periodicity with exact periodicity in $\mathbb Z_p$.

A cycle modulo $p^N$ is a finite shadow. It becomes an exact point only when
the cycles form a compatible inverse system or a lifting theorem applies.

### Nonlinear extension

Choose a polynomial map near a fixed point. Compute its multiplier and classify
attracting or indifferent behavior on a certified ball. Test whether higher
terms shrink that ball or create multiple residue branches.

## Local fields and ramification studio

### Construct two extensions

At a fixed odd prime $p$, build:

1. an unramified extension using a monic lift of an irreducible polynomial over
   $\mathbb F_p$;
2. a totally ramified extension using an Eisenstein polynomial.

For each extension $L/K$, record degree, ramification index $e$, residue
degree $f$, a basis, a uniformizer, and residue-field description. Verify

$$
[L:K]=ef
$$

in these examples.

### Discriminant and different

For a monogenic extension with integral generator $\alpha$, compute the power-
basis discriminant and, under the required hypotheses, use $f'(\alpha)$ to
describe the different. Compare tame and wild examples. State when the chosen
power basis is not known to be the full ring of integers.

### Newton-polygon route

Choose a polynomial with at least two lower-hull slopes. Construct the polygon
from exact coefficient valuations, predict root valuations with multiplicity,
and test by passing to suitable extensions. If a coefficient is known only as a
ball containing zero, treat its height as a lower bound rather than an exact
point.

### Ramification filtration report

For a small Galois example, identify decomposition, inertia, and wild inertia.
Write whether Frobenius is arithmetic or geometric. If using upper numbering,
show the Herbrand conversion from lower breaks. A list of break numbers without
normalization is not comparable across sources.

## Fourier and analytic-geometry studio

### Fourier transform of balls

Fix an additive character trivial on $\mathbb Z_p$ but not on
$p^{-1}\mathbb Z_p$, and normalize $\mu(\mathbb Z_p)=1$. Prove

$$
\widehat{\mathbf1_{a+p^n\mathbb Z_p}}(\xi)
=p^{-n}\psi(-a\xi)
\mathbf1_{p^{-n}\mathbb Z_p}(\xi).
$$

Separate the phase from the annihilator condition. Check translation, scaling,
and double transform under the stated convention.

Build the finite transform on $\mathbb Z/p^N\mathbb Z$ and compare it with the
locally constant *p*-adic calculation. Explain what stabilizes as $N$ grows.

### Tate-algebra project

Choose

$$
f(T)=\sum_{n\ge0}a_nT^n\in K\langle T\rangle.
$$

Compute its Gauss norm and use a Weierstrass or Newton-polygon argument to bound
zeros on the unit disk. Compare a closed disk with an open disk and show why the
allowed coefficient condition changes.

### Berkovich dictionary

For nested closed disks, compute the associated supremum seminorms on several
polynomials. Show how two classical center directions meet at a larger disk
point. The plotted tree is an incidence encoding, not a Euclidean embedding.

Relate rational subdomains to inequalities $|f_i(x)|\le|g(x)|$. Identify
which classical points satisfy the inequalities and why seminorm points are
needed for connected analytic geometry.

## Reciprocity and formal-groups studio

### Local norm groups

For an unramified extension $L/K$ of degree $n$, determine the valuations of
norms and the norm map on residue-field units. Use this to describe
$K^\times/N_{L/K}L^\times$. Match the uniformizer class with the chosen
Frobenius normalization under local reciprocity.

For a ramified quadratic extension, compute or quote the norm subgroup and
compare unit-filtration depth with conductor. Test sample norms directly, but use
the class-field theorem for completeness.

### Formal-group calculations

For the multiplicative formal group

$$
F(X,Y)=X+Y+XY,
$$

verify associativity by expansion and derive

$$
[n]_F(T)=(1+T)^n-1.
$$

Compute torsion congruences for a selected uniformizer. Compare formal identities
with convergence statements on a *p*-adic disk.

### Lubin–Tate tower

Choose a valid Lubin–Tate endomorphism $f(T)$ for $K$. Verify its linear
term modulo $T^2$ and Frobenius reduction modulo the uniformizer. At levels 1
and 2, compute the degree predicted for the division-point extension and the
unit quotient

$$
(\mathcal O_K/\pi^n)^{\times}.
$$

Draw the torsion tree and label the Galois action by units. Treat the full
reciprocity theorem as a quoted theorem unless its cohomological or explicit
proof has actually been supplied.

## Iwasawa, perfectoid, and Hodge studio

### Tower growth

Given a synthetic or published finite sequence of $p$-class-group orders
$|A_n|=p^{e_n}$, compare candidate laws

$$
e_n=\mu p^n+\lambda n+\nu.
$$

Finite differences can reject candidate invariants, but they cannot prove the
eventual stable range. Your report must name the torsion module and control
theorem that would justify the asymptotic conclusion.

Construct a bounded measure on $\mathbb Z_p$ from compatible residue weights,
compute its first Amice coefficients, and verify convolution/multiplication on a
finite truncation.

### Tilting dictionary

Write a compatible sequence of $p$-power roots in a standard perfectoid
example. Verify coordinatewise multiplication and compute one sharp image.
Attempt coordinatewise addition, locate the incompatibility, and replace it with
the limiting addition formula. State what tilting preserves: value group,
residue field, finite extensions, and absolute Galois group. State what sharp
does not preserve: addition.

### Period-ring classification

Prepare four cards for a representation $V$:

| class | invariant space | extra structure | geometric model |
|:---|:---|:---|:---|
| Hodge–Tate | $D_{\mathrm{HT}}(V)$ | grading/weights | Hodge decomposition |
| de Rham | $D_{\mathrm{dR}}(V)$ | filtration | de Rham cohomology |
| semistable | $D_{\mathrm{st}}(V)$ | $\varphi,N$ | semistable reduction |
| crystalline | $D_{\mathrm{cris}}(V)$ | $\varphi$, $N=0$ | good reduction |

For the trivial representation and Tate twist, compute the expected dimensions
and weights under the book's sign convention. For an elliptic-curve Tate module,
compare good and multiplicative reduction. Keep the implication direction

$$
\text{crystalline}\Rightarrow\text{semistable}
\Rightarrow\text{de Rham}\Rightarrow\text{Hodge--Tate}
$$

visible; reverse arrows need extra hypotheses and fail in general.

## Buildings, étale integration, and definability studio

### Project A: one tree, two Hecke checks

For $K=\mathbb Q_3$, construct the Bruhat–Tits ball through radius three.
Label first neighbours by $\mathbf P^1(\mathbb F_3)$ and every later edge by a
residue direction avoiding immediate backtracking. Submit:

1. the exact vertex and edge counts by depth;
2. a parent/depth certificate;
3. one highlighted apartment and its diagonal translation;
4. the double-coset list producing the four neighbours;
5. radial Hecke values for $\lambda=2$ through radius eight;
6. zero residuals for every recurrence equation.

Explain why the finite ball's boundary adjacency matrix is not the infinite
tree operator. Compare the spherical and Iwahori stabilizers of a vertex and an
oriented edge.

### Project B: a finite étale and Frobenius ledger

Choose $n$ prime to $p$. Verify directly that $T\mapsto T^n$ on
$\mathbb G_m$ is finite étale, then show where the same map ramifies on
$\mathbb A^1$. Build the Kummer cocycle for one $a\in\mathbb Q_p^\times$ and
match it to the root torsor.

Next compute $\#\mathbf P^1(\mathbb F_{q^m})$ for $m=1,\ldots,6$. Produce a
trace ledger with $H^0$, $H^1$, $H^2$, signs, Frobenius convention, and direct
count. Deliberately swap Frobenius convention without changing the twist and
record the failed check.

### Project C: one Igusa series by three methods

For $f(x)=x^2$, derive its local zeta function by valuation shells, normalized
congruence counts, and stationary-phase recursion on the zero residue ball. All
three routes must yield

$$
Z_f(T)=\frac{1-q^{-1}}{1-q^{-1}T^2}.
$$

Enumerate $N_m$ through $m=8$ at $q=3$, reduce each rational tail, and verify
the solution tree. Then treat $x^2-u$ for a square and a nonsquare residue unit
and explain why valuation of $u$ alone does not determine the integral.

### Project D: a local height and regulator audit

Reproduce the divisors

$$
D=(0)-(1),\qquad E=(2)-(-1/2)
$$

and evaluate the cross ratio in both orders. Compute $\log_5(6)$ through
$O(5^4)$ with a term-valuation tail certificate. Change to a cross ratio with
valuation one and show explicitly how the value depends on $\ell(5)$.

Use the exact symmetric matrix

$$
\begin{pmatrix}5&10\\10&30\end{pmatrix}
$$

to verify a unimodular basis change and determinant nonvanishing at precision
$5^4$. State why this matrix is an arithmetic linear-algebra fixture rather than
evidence for points on a named curve.

### Project E: definable volumes and information boundaries

In the Denef–Pas language, write the family

$$
S_m=\{x\in\mathcal O:v(x^2)\ge m\}.
$$

Derive its cells, measure, and rational volume series. At fixed precision
$\pi^N$, generate exact cylinder counts through $m=2N$ and return an explicit
insufficient-precision status beyond that point. Generalize from $x^2$ to
$x^a$ and separate the parameter cases modulo $a$.

The report must distinguish formula truth, geometric description, and volume.
Give one nonempty measure-zero definable set and one positive-measure local set
that does not answer a chosen global Diophantine question.

## Extended solution clinics

### Clinic 1: precision through cancellation and inversion

Work at $p=5$. Suppose

$$
x=7+O(5^6),
\qquad y=-7+2\cdot5^3+O(5^6).
$$

Then

$$
x+y=2\cdot5^3+O(5^6).
$$

The sum has valuation exactly 3 because its normalized unit is 2 modulo 5. Its
absolute precision is 6 and relative precision is 3. The input balls each had
unit valuation zero and six relative digits, so cancellation lost three relative
digits without changing the known absolute modulus.

Now change the second center to $-7+O(5^6)$. The sum is only
$O(5^6)$; its valuation could be any integer at least 6 or infinity. Reporting
$v_5(x+y)=6$ would invent information.

For inversion, let

$$
u=2+3\cdot5+O(5^5).
$$

Since the entire ball consists of units, inversion is legal. Find
$v_1\equiv2^{-1}\pmod5$, then use

$$
v_{2N}=v_N(2-uv_N)\pmod {5^{2N}}
$$

until the input precision is exhausted. At each step verify
$uv_N\equiv1\pmod {5^N}$. Explain why iteration beyond precision $5^5$
cannot reveal genuine digits of $u^{-1}$ unless $u$ itself is recomputed more
accurately.

Finish with division $x/y$ in three cases: $y$ a known unit, $y$ of known
positive valuation, and a denominator ball containing zero. Derive output
absolute precision in the first two and reject the third. Make the rejection a
normal typed outcome rather than an unhandled arithmetic crash.

### Clinic 2: all roots of a quadratic in $\mathbb Q_p$

For odd $p$, write a nonzero $a\in\mathbb Q_p$ as

$$
a=p^r u,
\qquad u\in\mathbb Z_p^\times.
$$

Prove $a$ is a square if and only if $r$ is even and the residue of $u$
is a square in $\mathbb F_p^\times$.

Necessity follows from valuations and reduction. For sufficiency, choose a
residue root $b_1^2\equiv u\pmod p$. The derivative $2b_1$ is a unit, so
Hensel lifts uniquely to $b^2=u$. Then
$p^{r/2}b$ is a square root of $a$.

Apply the criterion at $p=3,5,7$ to a table containing positive and negative
rationals. For a rational $a=c/d$, compute valuation from numerator and
denominator before reducing the unit part. Include zero as a separate square
with root zero.

At $p=2$, prove an odd unit is a square precisely when it is congruent to 1
modulo 8. Necessity comes from odd squares modulo 8. For sufficiency, use the
2-adic square theorem or an appropriate stronger Hensel formulation. Explain
why reducing only modulo 2 gives no information: every odd unit has residue 1.

Use these local criteria to study a rational equation $x^2=a$. A failure in
one completion obstructs a rational root. Success in several selected
completions is not enough to prove a rational root; for this elementary equation,
factorization in $\mathbb Q$ gives the global criterion directly.

### Clinic 3: norm groups and unramified reciprocity

Let $L/K$ be unramified of degree $n$. The value groups have the same
normalized uniformizer $\pi$, and

$$
v_K(N_{L/K}x)=n\,v_L(x).
$$

Therefore norm valuations are multiples of $n$. On units, reduction gives the
finite-field norm

$$
\mathbb F_{q^n}^{\times}\longrightarrow\mathbb F_q^{\times},
\qquad z\longmapsto z^{(q^n-1)/(q-1)},
$$

which is surjective because finite-field multiplicative groups are cyclic.
Lift residue units and use principal-unit structure to state why the full unit
norm is surjective in the unramified case.

Conclude

$$
K^\times/N_{L/K}L^\times\cong\mathbb Z/n\mathbb Z,
$$

generated by the uniformizer class. Under the book's reciprocity convention, a
uniformizer maps to arithmetic Frobenius, whose image generates
$\operatorname{Gal}(L/K)$.

Audit every normalization. If geometric Frobenius is chosen instead, the
generator is inverted. If valuations are normalized differently on $L$, the
displayed factor $n$ changes form. The quotient theorem is invariant, but its
coordinate formula is not.

### Clinic 4: weak admissibility in dimension two

Let $D$ have basis $e_1,e_2$, with Frobenius eigenvalues of valuations
$s_1,s_2$, and let the filtration have jumps $h_1,h_2$ under a declared
sign convention. The total Newton and Hodge numbers are

$$
t_N(D)=s_1+s_2,
\qquad t_H(D)=h_1+h_2.
$$

Equality of totals is necessary but not sufficient for weak admissibility. For
every Frobenius-stable line $D'$, one must also have

$$
t_H(D')\le t_N(D').
$$

Construct two examples with equal total numbers:

1. one in which each stable eigenline satisfies the inequality;
2. one in which the filtration places too much Hodge weight on the smaller-slope
   eigenline and violates it.

Draw Newton and Hodge polygons with common endpoints. Explain how the polygon
inequality encodes the subobject tests when the objects split suitably, and why
a general nonsplit object still requires the theorem's precise formulation.

Relate the good example to a crystalline representation only at the level of the
weak-admissibility theorem. A pair of polygons sketched from arbitrary numbers
does not automatically come from a Galois representation unless coefficient
fields, semilinearity, filtration, and admissibility conditions are all valid.

### Clinic 5: compatible roots in a tilt

In a perfectoid field containing compatible roots of a topologically nilpotent
element $\varpi$, form

$$
\varpi^\flat=(\varpi,\varpi^{1/p},\varpi^{1/p^2},\ldots).
$$

Verify the Frobenius compatibility in $\mathcal O_K/p$ and compute
$(\varpi^\flat)^\sharp=\varpi$. For two such sequences $x,y$, show directly
that $(xy)^\sharp=x^\sharp y^\sharp$.

Next attempt to lift coordinatewise sums. In mixed characteristic,

$$
(\widetilde x+\widetilde y)^p
$$

contains binomial cross terms divisible by $p$ but not identically zero before
the limiting process. Explain why reduction makes Frobenius additive at one
level while compatible addition across all levels still requires the perfectoid
limit formula.

Use the example to state three different maps:

- the coordinate projections from the inverse limit;
- the multiplicative sharp map;
- the Witt-vector map $\theta$ sending $[x]$ to $x^\sharp$.

None should be called a field isomorphism $K^\flat\to K$, because the fields
have different characteristics and sharp is not additive.

## Precision and theorem-status casebook

These cases imitate the decisions that arise in actual local computations. Each
solution must contain both a mathematical argument and a precision/status
ledger. A string of correct digits is not enough when the operation that
produced them may have destroyed information.

### Case 1: cancellation, inversion, and honest output precision

Suppose $x$ and $y$ are known modulo $p^N$, with
$x\equiv y\pmod{p^r}$. Then $x-y$ is known modulo $p^N$, but its first
$r$ digits vanish. If $r<N$ and $\nu_p(x-y)=r$, the normalized unit
$p^{-r}(x-y)$ is known only modulo $p^{N-r}$. Explain why printing $N$
digits after the division would invent $r$ digits.

Now let $a=p^s u$, with $u\in\mathbb Z_p^\times$, be known to absolute
precision $O(p^N)$. Factoring gives

$$
a=p^s\bigl(u+O(p^{N-s})\bigr).
$$

Inverting the unit preserves its relative precision, so

$$
a^{-1}=p^{-s}\bigl(u^{-1}+O(p^{N-s})\bigr).
$$

Translate this back into an absolute error ball and check it by multiplication.
The product should contain 1 in its certified ball; equality of printed
truncations is a weaker check.

Work a concrete example at $p=5$ in which two inputs known modulo $5^{10}$
cancel through order $5^6$, and then the result is inverted. Record valuation,
absolute precision, and relative precision after every operation. Repeat with
interval-like balls whose true difference might vanish to an even higher order.
In that case the valuation is bounded below, not known exactly, so inversion may
be illegal. A robust implementation raises an indeterminate-zero or insufficient-
precision condition rather than guessing.

Finally compare fixed-modulus arithmetic with adaptive precision. Recompute the
inputs at higher precision and show which output digits stabilize. State a
stopping criterion based on a requested certified output ball, not on two runs
happening to print the same digits.

### Case 2: simple and singular Hensel situations

At an odd prime $p$, study $f(X)=X^2-a$. A nonzero residue root $r$ modulo
$p$ has $f'(r)=2r\not\equiv0\pmod p$, so simple-root Hensel lifting gives one
root in the ball $r+p\mathbb Z_p$. The root $-r$ lifts in its own residue
ball. Use the iterative correction

$$
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}
$$

with a precision schedule that doubles only after checking the Newton
hypotheses. Verify each lift by substitution to the claimed modulus.

Contrast this with $f(X)=X^2-p^2$. The residue root 0 has derivative 0 modulo
$p$, so the simple criterion says nothing, yet the exact roots $\pm p$
exist. Factorization resolves this example; a stronger Hensel criterion can
resolve others when

$$
\nu_p(f(x_0))>2\nu_p(f'(x_0)).
$$

The failure of a sufficient criterion is not proof of nonexistence.

Treat $p=2$ separately. Determine which odd units are squares in
$\mathbb Q_2$ by examining residues modulo 8, then combine this with the
parity of the valuation. Prove that a nonzero $a\in\mathbb Q_2$ is a square
exactly when $\nu_2(a)$ is even and its unit part is congruent to 1 modulo 8.
Construct square roots digit by digit and explain why the derivative test modulo
2 is too crude for every odd candidate.

Your output certificate contains the prime, polynomial, starting ball, theorem
version, derivative valuation, final ball, and a substitution bound. A floating-
point decimal approximation contributes nothing to this certificate.

### Case 3: normalize an extension before computing ramification

Let $K/\mathbb Q_p$ be finite. Decide at the start whether the extension
valuation $v_K$ satisfies $v_K(K^\times)=\mathbb Z$ or whether it extends
$v_p$ with $v_p(p)=1$. Under the first convention,

$$
v_K(p)=e(K/\mathbb Q_p);
$$

under the second, a uniformizer has value $1/e$. Mixing the two conventions
creates missing factors of $e$ in discriminant, different, and ramification
formulas.

Compare two degree-$d$ constructions. An irreducible polynomial whose
reduction modulo $p$ is separable and irreducible, with the appropriate
integrality hypotheses, produces an unramified extension: $e=1$, $f=d$, and
the residue field has $p^d$ elements. An Eisenstein polynomial produces a
totally ramified extension: its root is a uniformizer, $e=d$, and $f=1$.
Prove the Eisenstein irreducibility claim and use the Newton polygon to read the
root valuation.

Do not automatically identify the polynomial discriminant with the field
discriminant. If $\alpha$ does not generate the full ring of integers, then

$$
\operatorname{disc}(1,\alpha,\ldots,\alpha^{d-1})
= [\mathcal O_K:\mathbb Z_p[\alpha]]^2\operatorname{disc}(K/\mathbb Q_p).
$$

Record the index assumption or compute it. In a monogenic separable case,
compare the different generated by $f'(\alpha)$ with the discriminant norm.

Build a table containing defining polynomial, irreducibility certificate,
integral basis status, $e$, $f$, uniformizer, residue polynomial, different
exponent, and valuation convention. Ask an independent reader to reproduce one
row from the definitions. This prevents a computer algebra system's default
normalization from silently becoming part of the theorem.

### Case 4: Fourier transform of a ball with all normalizations visible

Let $dx$ be Haar measure on $\mathbb Q_p$ normalized by
$\mu(\mathbb Z_p)=1$, and choose an additive character $\psi$ trivial on
$\mathbb Z_p$ but not on $p^{-1}\mathbb Z_p$. For

$$
f_n(x)=\mathbf 1_{p^n\mathbb Z_p}(x),
$$

prove directly that

$$
\widehat f_n(\xi)
=p^{-n}\mathbf 1_{p^{-n}\mathbb Z_p}(\xi).
$$

The measure factor is $\mu(p^n\mathbb Z_p)=p^{-n}$. If
$\xi\in p^{-n}\mathbb Z_p$, the character is identically one on the ball. If
not, translate the integral by a point in the ball on which the character is
nontrivial; invariance forces the integral to equal a nontrivial multiple of
itself and hence vanish.

Repeat for a coset $a+p^n\mathbb Z_p$ and, under the book's convention
$\widehat f(\xi)=\int f(x)\psi(-x\xi)\,dx$, derive the modulation factor
$\psi(-a\xi)$. Then change either the conductor of $\psi$ or the normalization
of Haar measure and recompute the formula. A transform identity copied without
these choices is incomplete.

Approximate the integral by finite sums over residue rings. State the level at
which the character and indicator factor through the quotient, and prove that
refining beyond that level leaves the normalized sum unchanged. This is an
exact finite certificate for a locally constant, compactly supported integral,
not a generic numerical quadrature heuristic.

### Case 5: an advanced theorem ladder without overclaiming

Choose one object from each of Chapters 31–33: an Iwasawa module, a perfectoid
field and its tilt, and a $p$-adic Galois representation. For each, make a
three-column ledger headed *definition available here*, *theorem quoted*, and
*conclusion actually used*.

For an Iwasawa growth formula, distinguish finite computed layers from an
eventual theorem of the form

$$
e_n=\mu p^n+\lambda n+\nu
$$

for all sufficiently large $n$, under the appropriate torsion hypotheses.
A regression through early layers neither identifies the invariants nor proves
eventuality. Record the tower, module, and normalization of $e_n$.

For tilting, verify multiplicativity of sharp on a compatible sequence and give
an explicit failed addition test. The tilting equivalence preserves deep
extension-theoretic information, but it is not an isomorphism between
characteristic-zero and characteristic-$p$ fields. Name the category in any
equivalence you quote.

For a representation, keep Hodge–Tate, de Rham, semistable, and crystalline
conditions distinct. A dimension equality involving a period ring is a theorem
criterion only with its continuous finite-dimensional representation and
invariant-space hypotheses. Draw the implication arrows proved in the chapter
and do not reverse them. Work one simple representation, such as the trivial or
cyclotomic character, through the conventions used in the text.

Conclude with a one-page dependency route from valuations and completion to the
chosen modern statement. Every arrow is either proved in this book, cited as a
named theorem, or marked as motivation. Advanced exposition becomes rigorous
not by reproducing every proof, but by making the boundary of every quoted
result unmistakable.

## Portfolio rubric, peer audit, and selected support

Score each dimension from 0 to 4:

| dimension | full-credit evidence |
|:---|:---|
| representation | prime, field, valuation, and basis are explicit |
| precision | every finite value is exact or enclosed in a justified ball |
| theorem use | hypotheses, normalization, and status are recorded |
| computation | algorithms emit independently checkable certificates |
| interpretation | finite shadows and infinite conclusions are separated |
| visual honesty | coordinates are described as residues, valuations, or trees |
| counterexample | one tempting real or algebraic analogy is tested |
| reproducibility | another reader can reconstruct the central calculation |

### Selected checks

- Compatible residues, not arbitrary digit strings at unrelated precisions,
  define an inverse-limit element.
- Simple-root Hensel lifting gives uniqueness in a ball; a singular derivative
  is inconclusive without further analysis.
- Haar probability on $\mathbb Z_p$ is compatible across residue refinements.
- Extension formulas require a declared valuation normalization and integral
  basis hypothesis.
- Fourier transforms depend on additive character and measure normalization.
- Local reciprocity links finite norm quotients to abelian Galois groups; its
  Frobenius convention must be named.
- An eventual Iwasawa formula is theorem-backed, not inferred from a short fit.
- Sharp is multiplicative and norm-preserving, not additive.
- Period admissibility is a full-dimension statement with retained structures.

### Independent audit

Swap reports and ask the reviewer to recompute one low-precision example, test
one error branch, and trace one advanced conclusion back to its prerequisites.
The reviewer returns:

1. an arithmetic or precision check;
2. a theorem-hypothesis check;
3. a normalization check;
4. one ambiguity in the finite/infinite claim boundary;
5. one reproducibility issue;
6. one optional extension.

The response log becomes part of the portfolio. In *p*-adic computation, the
record of known precision is part of the mathematical object, so correcting the
ledger is a mathematical revision rather than clerical cleanup.

## Project C completed: counts, collisions, and precision {#sec-padic-igusa-studio-completion}

This continuation completes the original Project C calculation and then
changes the prime and the coefficient. The new work is a two-adic collision
of root balls, followed by a nonunit rescaling. Use the
[Igusa chapter](43-igusa-zeta.md#sec-igusa-zeta) for the general distribution
identity and the [singular-root answers](appendix-c-solutions.md#sec-singular-root-solutions)
for the distinction between a modular root and a compatible branch.

Work over $\mathbb Q_p$ with $v_p(p)=1$, $|p|_p=p^{-1}$ and **additive**
Haar measure $\mu(\mathbb Z_p)=1$. These are untwisted Igusa integrals
with test function $\mathbf{1}_{\mathbb Z_p}$ and constant weight $1$;
no nontrivial multiplicative character or additive oscillatory factor is
inserted. In each calculation $T=p^{-s}$; as a power series, $T$ may first
be treated as a formal variable. Define
$$
A_m(f)=\mu\{x\in\mathbb Z_p:v_p(f(x))\ge m\},\qquad
N_m(f)=\#\{a\bmod p^m:f(a)\equiv0\bmod p^m\}.
$$
Put $A_0=N_0=1$. A residue class modulo $p^m$ has mass $p^{-m}$, so
$A_m=p^{-m}N_m$. The exact-value masses are $p_r=A_r-A_{r+1}$, and hence
$$
Z_f(T)=\sum_{r\ge0}p_rT^r
=1-(1-T)\sum_{m\ge1}A_mT^{m-1}.
$$
The shift by $m-1$ is part of the identity. The actual roots of each
displayed polynomial form a finite subset of $\mathbb Z_p$ and have
Haar measure zero. For complex $s$ integrate off those points; assigning
values at them does not change the integral.

### Finish the original three-method report at $p=3$ {#sec-padic-igusa-studio-three-methods}

For $f=x^2$, the shell $v_3(x)=k$ has mass $2/3^{k+1}$ and
$v_3(f(x))=2k$. Thus
$$
Z_{x^2}(T)=\frac23\sum_{k\ge0}(T^2/3)^k
=\frac{2/3}{1-T^2/3}.
$$
Independently, $x^2\equiv0\bmod3^m$ is equivalent to
$x\equiv0\bmod3^{\lceil m/2\rceil}$. Therefore
$$
N_m=3^{\lfloor m/2\rfloor},\qquad
A_m=3^{-\lceil m/2\rceil},\qquad
\sum_{m\ge1}A_mT^{m-1}
=\frac{(1+T)/3}{1-T^2/3}.
$$
Substitution in the distribution identity gives the same $Z$. The complete
requested ledger, including the level-zero convention, is:

| $m$ | $N_m$ | $3^m$ | $A_m=N_m/3^m$ |
|---:|---:|---:|---:|
| 0 | 1 | 1 | $1$ |
| 1 | 1 | 3 | $1/3$ |
| 2 | 3 | 9 | $1/3$ |
| 3 | 3 | 27 | $1/9$ |
| 4 | 9 | 81 | $1/9$ |
| 5 | 9 | 243 | $1/27$ |
| 6 | 27 | 729 | $1/27$ |
| 7 | 27 | 2187 | $1/81$ |
| 8 | 81 | 6561 | $1/81$ |

The root set at every level is exactly
$$
S_m=\{3^{\lceil m/2\rceil}u\bmod3^m:
0\le u<3^{\lfloor m/2\rfloor}\}.
$$
Give each child its reduction modulo the preceding power of $3$.
Some modular roots can stop lifting; every infinite compatible branch here
represents $0$, since $x^2$ divisible by every power of $3$ forces $x=0$.
Counts at unrelated precisions do not specify an inverse-limit element.

For the third method, the two unit residue balls contribute $2/3$.
On the zero ball substitute $x=3y$; then $dx=dy/3$ and $x^2=9y^2$.
The exact recursion
$$
Z_{x^2}(T)=\frac23+\frac{T^2}{3}Z_{x^2}(T)
$$
recovers the same rational function. Its shell integral converges precisely
for $|T|<\sqrt3$, equivalently $\operatorname{Re}(s)>-1/2$.
The rational expression outside this domain is a continuation.

The original square-class comparison can also be made explicit. For
$x^2-1$ over $\mathbb Z_3$, the two simple root balls at $1,-1$ contribute
$2(T/3)Z_x(T)$ and the remaining ball contributes $1/3$. Thus
$$
Z_{x^2-1}(T)=\frac13+\frac{4T}{9(1-T/3)}.
$$
For $x^2-2$, every value is a unit modulo $3$, so $Z_{x^2-2}(T)=1$.
Both coefficients $1,2$ have valuation zero. Their residue square classes,
rather than that shared valuation, explain the different answers.

### Worked project: two colliding roots over $\mathbb Z_2$ {#sec-padic-igusa-studio-worked}

Now set $p=2$ and $g(x)=x^2-1$. Both roots have the same residue modulo
$2$, and $g'(x)=2x$ is never a unit on $\mathbb Z_2$.
The preceding odd-prime simple-root shortcut does not apply.

If $x$ is even, $g(x)$ is odd. This gives $p_0=1/2$.
If $x$ is odd and $x\ne\pm1$, one of $x-1,x+1$ has valuation $1$
and the other has a finite valuation $k\ge2$. The two possible shells,
centered at $1$ and $-1$, each have measure $2^{-k-1}$. Their sum is
$2^{-k}$, and the product has valuation $k+1$. Consequently
$$
p_1=p_2=0,\qquad p_r=2^{1-r}\quad(r\ge3),
$$
and the shell calculation is
$$
Z_g(T)=\frac12+\sum_{r\ge3}2^{1-r}T^r
=\frac12+\frac{T^3}{4(1-T/2)}.
$$

For a second derivation, the tails and counts are
$$
A_1=A_2=\frac12,\qquad A_m=2^{2-m}\quad(m\ge3),
$$
$$
N_1=1,\qquad N_2=2,\qquad N_m=4\quad(m\ge3).
$$
For $m\ge3$ the four root residues are
$$
x\equiv \varepsilon+j2^{m-1}\pmod{2^m},
\qquad \varepsilon\in\{1,-1\},\quad j\in\{0,1\}.
$$
Indeed, on an odd input one of the two factors has valuation $1$;
the other must have valuation at least $m-1$. The two sign classes
modulo $2^{m-1}$ are disjoint and each has two lifts modulo $2^m$.
This proves the count at every precision, including the four roots modulo
$8$, rather than fitting a constant to an initial table.

The normalized-tail series is
$$
Q_g(T):=\sum_{m\ge1}A_mT^{m-1}
=\frac12+\frac T2+\frac{T^2/2}{1-T/2}.
$$
Expanding $1-(1-T)Q_g(T)$ gives the same $Z_g$ above.

For a third derivation introduce
$$
J(T)=\int_{\mathbb Z_2}|z|_2^s\,dz,\qquad
I(T)=\int_{\mathbb Z_2}|y(y+1)|_2^s\,dy.
$$
Splitting the linear integral into units and even inputs gives
$J=1/2+(T/2)J$, hence $J=1/[2(1-T/2)]$.
On $y=2z$ the factor $2z+1$ is a unit; on $y=1+2z$ the factor
$1+2z$ is a unit and $y+1=2(z+1)$. Translation invariance therefore gives
$I=(T/2)J+(T/2)J=TJ$.
Finally even $x$ contributes $1/2$, while $x=1+2y$ gives
$g(x)=4y(y+1)$ and $dx=dy/2$. Thus
$$
Z_g(T)=\frac12+\frac{T^2}{2}I(T)
=\frac12+\frac{T^3}{4(1-T/2)}.
$$
Each substitution records both the polynomial factor and the additive
Jacobian. This explicit reduction terminates in a linear integral.

Here the shell series converges for $|T|<2$, or
$\operatorname{Re}(s)>-1$. Also $Z_g(1)=1$ and $Z_g(0)=1/2$:
total mass is one and half the inputs give a unit.
There are four modular roots at every level $m\ge3$, but only two
actual roots, $1,-1$. A compatible branch must define a zero of
$(x-1)(x+1)$ in the integral domain $\mathbb Z_2$.

### An exact finite certificate to reconstruct {#sec-padic-igusa-studio-certificate}

For a chosen integer coefficient $c$, the following finite construction
lists all solutions of $x^2-c$ and their refinement edges. It uses
integer divisibility, with no floating-point valuation:

~~~text
S[0] = {0} and modulus = 1
for m = 0,...,7:
    next_modulus = p * modulus
    S[m+1] = {a + d*modulus :
              a in S[m], 0 <= d < p,
              (a + d*modulus)^2 - c is divisible by next_modulus}
    emit m+1, the sorted set S[m+1], its size,
         the reduced fraction size/next_modulus,
         and each edge (child mod modulus, child)
    modulus = next_modulus
~~~

Every solution at the next level reduces to a solution at the preceding
level, and each residue has exactly $p$ candidate children. This proves
the enumeration rule is complete. Reconstruct the $p=3,c=0$ ledger above
and the $p=2,c=1$ counts $1,2,4,4,4,4,4,4$.
The all-precision shell and factorization arguments supply the infinite
conclusion; the finite ledger checks the chosen levels and edges.

### Changed project: a nonunit coefficient and a precision decision {#sec-padic-igusa-nonunit-task}

Keep $p=2$ and the same Haar normalization, but replace $g$ by
$h(x)=x^2-4$. The coefficient now has positive valuation.
Attempt this report before opening the
[hint](appendix-c-solutions.md#sec-padic-igusa-nonunit-hint)
or [complete key](appendix-c-solutions.md#sec-padic-igusa-nonunit-key).

1. Partition $\mathbb Z_2$ into odd inputs, inputs divisible by $4$,
   and the remaining even inputs. Derive every exact-valuation mass,
   a reduced rational expression for $Z_h(T)$, and its integral's
   convergence domain.
2. Give $N_m(h)$ and $A_m(h)$ through $m=8$ and prove a formula valid
   for every $m$. Reduce the normalized-tail generating series and
   check it against the distribution identity.
3. Derive a residue-ball recursion using $x=2y$. Explain why neither
   a missing Haar factor nor a unit-derivative argument at the original
   residue root is permitted.
4. Describe all root residues for every $m\ge5$. Test which roots modulo
   $32$ lift to $64$, and explain why the eventual modular count is
   different from the number of actual two-adic roots.
5. Treat $x=2+O(2^4)$ and $x=10+O(2^4)$ as input balls, with exact
   polynomial coefficients. For each, certify an output ball and decide
   whether one exact output valuation or an exact zero follows.
   Exhibit inputs proving that any stronger claim fails.
6. Submit the finite refinement ledger, the three infinite derivations,
   and the hypotheses supporting the branch and precision conclusions.
   Use the [project-specific rubric](appendix-c-solutions.md#sec-padic-igusa-studio-rubric)
   for self-review; retain an independent attempt before using the key.

For the square criterion at $2$ and the difference between modular roots
and actual roots, see Keith Conrad,
[Hensel's Lemma, Theorem 4.5 and Remark 4.8](https://kconrad.math.uconn.edu/blurbs/gradnumthy/hensel.pdf).
The calculations here prove these particular distributions directly; they
do not extend an odd-prime formula by substitution or claim a general
stationary-phase termination theorem.
