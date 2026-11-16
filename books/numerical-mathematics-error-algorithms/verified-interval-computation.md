
# Verified and Interval Computation

## Purpose, prerequisites, and the size of a claim

Required preparation is [finite-precision error and conditioning](finite-precision-conditioning.md), norms, differentiation and the [nonlinear-systems chapter](nonlinear-systems-globalization.md). Elementary interval operations are developed here. The [arithmetic chapter](finite-precision-conditioning.md) and [software-audit chapter](numerical-capstone-software-audit.md) give additional examples of execution contracts and evidence. A proved bound, an empirical estimator and an uncertain input retain different meanings.

Verified computation uses machine calculations inside a mathematical proof.
Its aim is not to make every numerical result exact. It is to produce a finite,
checkable certificate such as

- every value of a function on a box lies in a reported interval;
- a specified box contains exactly one zero;
- a linear system has a unique solution inside a box;
- an approximate solution is within a stated norm distance of an exact one.

The conclusion is only as broad as its hypotheses. A root certificate for one
box does not enumerate all roots. A discretized differential equation
certificate does not automatically bound the error between the discrete and
continuous problems. An interval calculated with nearest rounding is merely a
pair of numbers, not necessarily an enclosure.

## Outward rounding is the foundation

For a real operation \(\circ\), an interval operation must enclose all exact
results. For example,

\[
[a,b]+[c,d]=[\operatorname{rdn}(a+c),\operatorname{rup}(b+d)],
\]

where \(\operatorname{rdn}\) rounds toward negative infinity and \(\operatorname{rup}\) toward positive infinity.
Multiplication takes the outward-rounded minimum and maximum of the four
endpoint products. Division by an interval containing zero is not a bounded
ordinary interval operation.

Directed rounding is not optional decoration. Suppose the exact upper endpoint
of a sum lies strictly between two floating-point values. Rounding it downward
can exclude a possible exact result. A sound implementation either changes the
hardware rounding direction around each operation or uses a library with a
proved enclosure contract. Merely adding a fixed epsilon is unreliable: the
necessary enlargement depends on scale, subnormals, overflow, and the sequence
of operations.

Constants also require enclosure. The decimal text \(0.1\) and a computed value
of \(\pi\) are generally not exact binary numbers. Their lower and upper endpoints
must straddle the intended real constants. A proof log records the interval
library and version, numeric format, rounding mode, handling of infinities and
subnormals, and whether elementary functions have correctly rounded or
otherwise validated range implementations.

### Worked example 1: an endpoint that nearest rounding can lose

In a binary format, let \(u\) be the successor of \(1\) and consider the exact
number halfway between them. If an upper endpoint is rounded to nearest with a
tie rule choosing \(1\), the reported interval ending at \(1\) excludes the exact
number. Upward rounding instead selects \(u\). The numerical width is only one
ulp, but the logical difference is absolute: \([1,1]\) asserts equality, whereas
\([1,u]\) is an enclosure.

## Inclusion functions and expression trees

For a real function \(f\), an **inclusion function** \(F\) satisfies

\[
\{f(x):x\in X\}\subseteq F(X)
\]

for every box \(X\) in its domain. Replacing each operation in an expression by
a sound interval extension gives the **natural interval extension**. Structural
induction on the expression tree proves inclusion: exact leaf values belong to
their leaf intervals, and each enclosing operation preserves membership at
its parent.

Inclusion does not imply sharpness. Repeated occurrences of a variable are
treated as if independent. On \(X=[0,1]\), the natural evaluation of \(x-x\) is
\([-1,1]\), although the true range is \(\{0\}\). Algebraically equivalent expressions
can therefore have different widths. Rewriting, subdivision, centered forms,
and monotonicity can improve an enclosure without weakening its validity.

For differentiable scalar \(f\), choose \(m \in X\). If \(F'(X)\) encloses all
derivatives on \(X\), the mean-value form

\[
f(X)\subseteq f(m)+F'(X)(X-m)
\]

follows from the real mean value theorem point by point. In several variables,
an interval Jacobian produces the analogous affine enclosure. Centered forms
usually reduce dependency because each displacement interval contains zero.

### Worked example 2: dependency, rewriting, and a centered form

Let \(f(x)=x^{2}-2x+1\) on \([0,2]\). Direct natural evaluation gives

\[
[0,4]-[0,4]+1=[-3,5].
\]

Rewriting as \((x-1)^{2}\) gives \([-1,1]^{2}=[0,1]\), the exact range. Alternatively,
with \(m=1\), \(f(m)=0\) and \(f'(X)=2X-2=[-2,2]\); the mean-value form gives
\([-2,2]\), valid but wider. Verification preserves enclosure under either
expression, while algebra determines usefulness.

## Subdivision and branch-and-bound enclosures

If \(X\) is split into boxes \(X_1,\ldots,X_k\), then

\[
f(X)\subseteq \bigcup_i F(X_i).
\]

The hull of these images is often narrower than \(F(X)\). A deterministic
verifier may repeatedly bisect the widest normalized coordinate, discard boxes
that cannot contain a target, and store accepted leaves. Its certificate must
contain enough information to replay every leaf evaluation. Stopping because a
time or memory limit was reached is not a proof of the requested tolerance.

For global range bounds, lower and upper records have different meanings. An
interval lower endpoint for every leaf proves a global lower bound. Evaluating
the function at one feasible point supplies a global upper bound for a
minimization problem. The gap certifies optimality only when both statements
refer to the same mathematical problem and all unprocessed boxes are covered.

## Scalar interval Newton certificates

Let \(X=[a,b]\), choose \(m \in X\), and let \(F'(X)\) enclose \(f'(x)\) for all \(x \in X\).
If \(0\) is not in \(F'(X)\), define

\[
N(X)=m-\frac{f(m)}{F'(X)}.
\]

The following exclusion claim is elementary and powerful.

**Theorem 1 (Interval Newton exclusion).** If \(N(X)\) and \(X\) are disjoint, then \(f\) has no
zero in \(X\).

**Proof.** If \(r \in X\) were a zero, the mean value theorem would give
\(0=f(m)+f'(\xi)(r-m)\) for some \(\xi\) between \(m\) and \(r\). Thus
\(r=m-f(m)/f'(\xi)\), and because \(f'(\xi) \in F'(X)\), we would have \(r \in N(X)\).
This contradicts disjointness. □

For existence and uniqueness, it is safest to expose the fixed-point argument
rather than quote an inclusion slogan. Choose a nonzero real preconditioner
\(c\) and define \(T(x)=x-c f(x)\). Suppose outward-rounded evaluation proves

\[
T(X)\subseteq Y\subseteq X,
\qquad
\sup_{x\in X}|1-cf'(x)|\le q<1.
\]

Then \(T\) maps the complete interval \(X\) into itself and is a contraction.
Banach's theorem gives exactly one fixed point \(r \in X\); because \(c\) is
nonzero, \(T(r)=r\) is equivalent to \(f(r)=0\). If \(Y\) lies in the interior of
\(X\), the certificate also has a strict inclusion margin. This theorem states
all assumptions needed for the conclusion and does not depend on an unexamined
Newton iterate.

### Worked example 3: certifying the positive square root of two

Take \(f(x)=x^{2}-2\), \(X=[1.4,1.5]\), midpoint \(m=1.45\), and \(c=1/(2m)=1/2.9\).
For \(T(x)=x-c(x^{2}-2)\),

\[
T(m)=m-cf(m)=1.45-0.1025/2.9\approx1.41465518.
\]

Moreover \(T'(X)=1-2X/2.9\), so \(\lvert T'(x)\rvert\le 0.034483\) on \(X\). Hence

\[
T(X)\subseteq T(m)+[-0.034483,0.034483]([-0.05,0.05])
\subset [1.41293,1.41638],
\]

with endpoints rounded outward. This is contained in \(X\) and the derivative
bound is below one, so there is exactly one root in \(X\). The negative root is
outside this box; the certificate makes no claim that it does not exist.

## Krawczyk-style certificates for systems

Let \(F:\mathbb{R}^n \to \mathbb{R}^n\) be continuously differentiable on a closed box \(X\), let
\(\bar{x} \in X\), and choose a nonsingular numerical matrix \(C\), often an
approximation to \(F'(\bar{x})^{-1}\). Define

\[
T(x)=x-CF(x).
\]

An interval Jacobian \(J(X)\) encloses every entry of \(F'(x)\) for \(x \in X\). The
Krawczyk-style enclosure

\[
K=\bar{x}-CF(\bar{x})+(I-CJ(X))(X-\bar{x})
\]

contains \(T(X)\). All products in this formula must use outward-rounded interval
operations; \(CF(\bar{x})\) must enclose evaluation and multiplication error.

**Theorem 2 (Contraction certificate).** Suppose \(K \subseteq X\) and a subordinate matrix
norm calculation proves

\[
\sup_{J\in J(X)}\|I-CJ\|\le q<1.
\]

Then \(F\) has exactly one zero in \(X\).

**Proof.** The Krawczyk enclosure proves that \(T\) maps \(X\) to itself. The norm
bound and the integral mean-value identity give
\(\lVert T(x)-T(y)\rVert\le q\lVert x-y\rVert\). Banach's theorem gives a unique fixed point in \(X\).
Since \(C\) is nonsingular, fixed points of \(T\) are precisely zeros of \(F\). □

This theorem is deliberately stronger in hypotheses than some specialized
Krawczyk results. It yields a transparent proof. If software uses a weaker
existence-only criterion, its theorem and conclusion must be documented
separately. Entrywise interval matrices are sets of matrices; treating their
endpoints as two ordinary matrices generally does not bound every matrix norm.

### Worked example 4: a two-dimensional certificate

Let \(F(x,y)=(x^{2}-2,y-3)\) and
\(X=[1.4,1.5] \times [2.99,3.01]\). Choose \(\bar{x}=(1.45,3)\) and
\(C=\operatorname{diag}(1/2.9,1)\). The second component of \(T\) is exactly \(3\), and its derivative
is zero. The first component is the scalar map of Worked example 3. Therefore
\(K \subset [1.41293,1.41638] \times \{3\}\), and the infinity-norm derivative bound
is at most \(0.034483\). There is exactly one zero in \(X\). Separability makes this
example simple, but it checks the box, Jacobian, norm, and nonsingular-
preconditioner logic used in coupled systems.

## Verified linear algebra and residual transfer

For an exact linear system \(Ax=b\), a floating-point approximation \(\widehat{x}\) has
residual \(r=b-A\widehat{x}\). If a verified bound \(\lVert A^{-1}\rVert\le M\) is available, then

\[
\|x-\widehat{x}\|\le M\|r\|.
\]

Neither factor may silently use unverified floating-point arithmetic. One route
constructs an approximate inverse \(C\), verifies \(\lVert I-CA\rVert\le q<1\), and uses the
Neumann series:

\[
\|A^{-1}\|\le\frac{\|C\|}{1-q}.
\]

Indeed \(CA=I-E\) with \(\lVert E\rVert\le q\); therefore \((CA)^{-1}=\sum_{k\ge 0} E^k\) and its
norm is at most \(1/(1-q)\). The strict inequality also proves \(A\) nonsingular.
This separates the fast proposal \(C\) from the verified residual bound.

### Worked example 5: turning an approximate inverse into an error radius

Suppose outward-rounded infinity-norm calculations give
\(\lVert I-CA\rVert_\infty\le 0.02\), \(\lVert C\rVert_\infty\le 0.6\), and
\(\lVert b-A\widehat{x}\rVert_\infty\le 3\times 10^{-8}\). Then

\[
\|A^{-1}\|_\infty\le0.6/0.98<0.612245,
\quad
\|x-\widehat{x}\|_\infty<1.837\times10^{-8}.
\]

The conclusion concerns the exact solution of the stated matrix and right-hand
side. If \(A\) itself approximates a differential operator, discretization and
model errors remain outside this radius.

## Functions, quadrature, and differential equations

Interval elementary functions need range reduction that respects periodicity
and extrema. Endpoint-only evaluation fails for a nonmonotone function: on
\([0,2 \pi]\), both sine endpoints are zero while the range is \([-1,1]\).
Libraries must also account for uncertainty in the interval representation of
\(\pi\). A wide argument may legitimately return the full range.

Verified quadrature combines a finite formula with a proved remainder bound,
or integrates interval Taylor models over subintervals. The required derivative
or analyticity bounds are mathematical inputs, not consequences of small
differences between nested rules. Similarly, verified time integration may
enclose a flow using Taylor models and contraction arguments. A validated
discrete step is not automatically a global enclosure unless truncation,
roundoff, existence, and accumulation are all covered.

### Worked example 6: range of sine needs an interior critical point

On \(X=[0,\pi]\), endpoints alone suggest \(\{0\}\). Since \(\pi/2 \in X\) and sine is
nonnegative there, a correct range routine returns \([0,1]\) after outward
rounding. On \([0.6,0.7]\), cosine is positive, so monotonicity permits the tighter
endpoint enclosure \([\sin_{down}(0.6),\sin_{up}(0.7)]\). The proof log must distinguish
the mathematical range rule from its rounded implementation.

## Root isolation over a prescribed domain

A local certificate becomes a root-isolation result only after every part of a
prescribed domain has been accounted for. Begin with a compact interval or box
\(D\) and maintain three disjoint lists:

- **excluded boxes**, where a range enclosure omits zero or an interval Newton
  image is disjoint;
- **certified boxes**, each carrying an existence-and-uniqueness certificate;
- **unresolved boxes**, still awaiting subdivision or a sharper test.

Every split replaces one parent by children whose union is exactly the parent.
The log records this relation, so a checker can prove by induction that the
leaves cover \(D\). An exhaustive count must count each distinct zero exactly once.
Pairwise disjoint certified boxes as closed sets suffice. Disjoint interiors suffice only if each certified root is proved strictly inside its box.
Otherwise, boxes that overlap, even just on a boundary, require proved root-identity deduplication, with different retained classes proved to contain distinct roots.
Only when coverage, these counting conditions, and an empty unresolved list are verified may the algorithm report an exhaustive count on \(D\).

Termination needs mathematical conditions. For a polynomial with simple roots
and no root on the domain boundary, sufficiently fine subdivision combined with
a convergent inclusion test can isolate the roots. Multiple roots are harder:
the derivative is singular at the root, so contraction and ordinary interval
Newton tests can fail indefinitely. Deflation, higher derivatives, exact
polynomial methods, or a deliberately weaker existence claim may be needed.
Small boxes alone never license the word unique.

### Worked example 7: an exhaustive scalar ledger

Consider \(f(x)=x^{2}-1\) on \(D=[-2,2]\). Split at \(-1.5,-0.5,0.5,1.5\).
Square-aware range evaluation excludes zero on \([-0.5,0.5]\) because
\(f(X)=[-1,-0.75]\); monotonic endpoint bounds exclude it on the two outer boxes
\([-2,-1.5]\) and \([1.5,2]\). Contraction certificates on
\([-1.5,-0.5]\) and \([0.5,1.5]\) isolate \(-1\) and \(1\). If the split ledger proves
these five intervals cover \(D\) without gaps, the conclusion is exactly two
zeros in \(D\). It does not address real numbers outside \(D\) until a separate
argument, such as \(x^{2}-1>0\) for \(\lvert x\rvert>2\), covers them.

## Verified derivatives and Taylor models

Derivative enclosures often determine whether a certificate is sharp enough.
Finite differences include truncation and rounding errors and therefore do not
become rigorous merely by using a small step. Three reliable routes are common:

1. derive the derivative and evaluate its interval extension;
2. use automatic differentiation whose elementary operations are interval
   operations, so value and derivative enclosures propagate together;
3. use symbolic preprocessing followed by an independently checked interval
   evaluator.

Automatic differentiation differentiates the executed expression. It does not
prove that the expression implements the intended mathematical model. A
directional-difference table is a valuable implementation check even when an
interval automatic derivative supplies the proof bound.

A Taylor model represents a function on a box by a polynomial plus an interval
remainder. Let \(F_0\) and \(F_1\) be outward enclosures of \(f(m)\) and \(f'(m)\), and
let \(F''(X)\) enclose the second derivative on \(X\). For each \(x \in X\), a scalar
order-two inclusion is

\[
f(x)\in F_0+F_1(x-m)+\tfrac12 F''(X)(x-m)^{2}.
\]

When the coefficients and remainder are outward rounded, this formula encloses
every value. Unlike a natural interval expression, the polynomial keeps
correlations among repeated occurrences of \(x\). Higher-order Taylor models can
give tight flow and quadrature enclosures, but operations such as composition
and division must update both polynomial and remainder correctly. Dropping
small coefficients without adding their range to the remainder destroys the
proof.

### Worked example 8: a Taylor enclosure for the exponential

On \(X=[-0.1,0.1]\), expand at zero. Since the third derivative of \(\exp\) is
\(\exp\) and is at most \(\exp(0.1)\) on \(X\),

\[
e^x\in 1+x+\frac{x^{2}}{2}
+[-1,1]\frac{e^{0.1}(0.1)^{3}}{6}.
\]

The remainder radius is less than \(1.85\times 10^{-4}\). All constants and polynomial
evaluations still need outward rounding. The result is a uniform enclosure of
the function, not just an error estimate at sampled points.

## Verified eigenvalues and positive definiteness

Some structural claims can be certified without enclosing every entry of an
inverse. For a real symmetric matrix \(A\), exact Gershgorin intervals

\[
[a_{ii}-\sum_{j\ne i}|a_{ij}|,
  a_{ii}+\sum_{j\ne i}|a_{ij}|]
\]

cover all eigenvalues. If verified lower endpoints are strictly positive, \(A\)
is positive definite. The converse need not hold: overlapping disks can cross
zero even for a positive-definite matrix. A failed sufficient test is
inconclusive.

A verified residual can sharpen an approximate eigenpair. For symmetric \(A\)
and unit vector \(v\), the distance from the Rayleigh quotient
\(\rho=v^{\mathsf T} A v\) to the spectrum is at most \(\lVert Av-\rho v\rVert_2\). This proves that
some eigenvalue lies nearby. Identifying which one or proving it simple needs
spectral separation information. Normalization, residual, and norm must be
enclosed rather than computed as unlabelled nearest-rounded values.

### Worked example 9: a positive-definiteness certificate

For

\[
A=\begin{pmatrix}4&-1&0\\-1&3&-1\\0&-1&2\end{pmatrix},
\]

the Gershgorin lower endpoints are \(3\), \(1\), and \(1\). Thus every eigenvalue is
at least \(1\), and \(A\) is positive definite. If entries are uncertain intervals,
use the smallest possible diagonal minus the largest possible sum of absolute
off-diagonal entries. Checking only midpoint entries would certify the wrong
matrix.

## The trusted computing base

No software proof is independent of all software. The **trusted computing
base** includes the theorem, checker, arithmetic semantics, parser, and any
elementary-function code needed to replay the certificate. A large nonlinear
solver need not be trusted if it only proposes a box and a small independent
checker validates it. Shrinking the trusted base improves auditability.

Certificate serialization matters. Decimal endpoints must be parsed outward;
otherwise a sound in-memory interval can become unsound when written and read.
Hexadecimal floating-point strings preserve binary endpoints exactly. Rational
endpoints allow integer-arithmetic checking when the formulas are polynomial or
rational and denominators are known nonzero. Files include schemas and hashes,
and parsers reject missing fields, duplicated keys, NaN, and silent overflow.

Independent checking does not mean merely calling the same library through a
second wrapper. Useful diversity might pair a floating-point interval producer
with a rational checker, or an automatic interval Jacobian with a symbolic one
on fixed cases. The audit records what code and reasoning are shared, because
independence is a property of failure modes rather than team names.

## Parameter uncertainty and robust conclusions

Intervals can represent uncertain parameters as well as rounding error, but the
quantifiers must be stated. If \(P\) is a parameter box and verified evaluation
shows \(F(X,P)\) excludes zero, then no pair \((x,p)\) in \(X \times P\) is a zero. If a
contraction test is uniform over \(P\), it can prove that each allowed parameter
has a unique root in \(X\); proving that at least one pair has a root is a weaker
statement. Treating every interval parameter occurrence independently may
greatly overestimate the image, especially when physical constraints correlate
parameters. A box encloses such a constrained set but forgets its correlations.

Robust inequalities use worst-case endpoints. Suppose a verified computation
proves \(g(x,p)\ge 0.12\) for every \((x,p)\) in the stated boxes. Then perturbations
inside those boxes preserve positivity with margin \(0.12\). If the enclosure is
\([-0.01,0.3]\), the computation is inconclusive: it has found neither a negative
value nor a proof of positivity. Subdivision may resolve the question, but
sampling the box cannot replace its universal quantifier.

Uncertainty sources should remain separate when their meanings differ. A
measurement confidence interval is usually a statistical object, not a set
guaranteed to contain the parameter. Interval arithmetic can propagate the
chosen endpoints conditionally, but cannot upgrade their coverage probability.
Likewise, putting an undocumented “safety interval” around model discrepancy
does not validate the model. The final statement says which inputs are assumed
to lie in their boxes and which conclusions then hold.

### Worked example 10: a uniform parameter certificate

Let \(f(x,p)=x-p\) with \(X=[0.9,1.2]\) and \(P=[1,1.1]\). For every fixed \(p \in P\),
the map \(T_p(x)=p\) sends \(X\) into \([1,1.1]\) and has derivative zero. Thus each
allowed \(p\) has exactly one root in \(X\), namely \(x=p\). The conclusion is
uniform existence and uniqueness for each parameter. It does not assert one
common \(x\) solves the equation for all \(p\); that stronger quantifier is false.

## Certificate formats and independent checking

A useful certificate is smaller and simpler than the computation that found
it. For a root box, store:

- the exact formula or immutable input hash;
- the box, center, and preconditioner as exact decimal or hexadecimal values;
- outward-rounded residual and Jacobian enclosures;
- the image box, contraction bound, and strict inclusion margins;
- arithmetic format, interval implementation, and exceptional-value policy;
- the theorem invoked and the exact conclusion;
- a machine-readable table plus a text rendering.

An independent checker should recompute inclusions from the certificate rather
than trust a Boolean `success` field. Exact rational endpoints can make a tiny
checker possible for polynomial problems. For transcendental functions, the
checker depends on a validated elementary-function implementation, which must
be part of the trusted base.

Accessibility is mathematical here. Color alone must not indicate successful
and failed boxes. A subdivision plot needs a table or downloadable text giving
box coordinates, status, depth, and bounds. Keyboard users must be able to
select a row and obtain the same details as pointer hover. Animated refinement
must offer a static final tree and respect reduced-motion preferences.

## Failure modes worth preserving

- **Nearest-rounded endpoints:** invalidate inclusion even when the displayed
  interval looks plausible.
- **Zero in a denominator:** makes ordinary bounded interval division invalid.
- **Dependency explosion:** produces a wide but sound answer; it is not a proof
  that the true range is wide.
- **Unverified derivative bounds:** turn an interval Newton display into a
  heuristic.
- **Approximate inverse treated as exact:** loses both nonsingularity and error
  claims.
- **One certified box called exhaustive:** confuses local existence with global
  root counting.
- **Discrete solution called a PDE proof:** omits discretization and modeling
  error.
- **Timeout called success:** reports resource exhaustion as mathematics.

## Arithmetic and reproducibility belong in the certificate

The interval part of the arithmetic route rests on the inclusion theorem already proved by structural induction above. Repeated input occurrences carry one mathematical value even when their interval images are evaluated independently. For example, $x(1-x)$ on $[0,1]$ naturally encloses in $[0,1]$, while completing the square $1/4-(x-1/2)^2$ yields the sharp range $[0,1/4]$. Here squaring is a range-aware unary operation; replacing $X^2$ by an unrestricted product $X\cdot X$ when $X$ crosses zero is sound but wider.

A sequential sum and a fixed balanced tree can yield different rounded endpoints if their rounding directions differ or are unspecified. A reproducible interval contract identifies both the operation order and directed rounding policy. A sound outward enclosure can legitimately have different widths on two implementations while both support the same mathematical conclusion. Bitwise replay is a separate, stronger execution contract.

The retained mixed-precision derivation also fits the verifier's architecture. A cheap factorization or inverse proposes a candidate; a more reliable residual and bound check it. In the exact stationary model $e_{k+1}=(I-BA)e_k$, the condition $\|I-BA\|<1$ gives convergence. A low-precision residual can erase the correction signal. None of those proposal steps replaces the outward calculations needed for an enclosure.

## From a residual to a continuous solution bound

A certified discrete step is not yet a certified continuous orbit. Let $v(t)$ be a continuously differentiable reconstructed path, $y$ an existing exact solution of $y'=f(t,y)$, and
$$r(t)=v'(t)-f(t,v(t)).$$
Suppose both paths stay in a common region on $[0,T]$ where $f$ is $L$-Lipschitz in state, and $\|v(0)-y(0)\|\le\delta$. A continuous-dependence argument yields the following explicit transfer.

**Theorem 3 (Residual enclosure).** Under those assumptions,
$$
\|v(t)-y(t)\|\le e^{Lt}\delta+
\int_0^t e^{L(t-s)}\|r(s)\|\,ds.
$$
In particular, if $\|r\|\le\epsilon$, the added term is $\epsilon(e^{Lt}-1)/L$ for $L>0$ and $\epsilon t$ for $L=0$.

*Proof.* Subtract integral equations to obtain
$\|v(t)-y(t)\|\le\delta+\int_0^t(L\|v-y\|+\|r\|)\,ds$.
Let the right side be $w(t)$. Then the error is bounded by $w$, $w(0)=\delta$ and $w'\le Lw+\|r\|$. Multiplying by $e^{-Lt}$ and integrating gives the claimed expression. The case $L=0$ follows directly. ∎

An interval evaluator must enclose the residual over each entire time slab, including interpolation derivatives; checking it only at nodes can miss its maximum. The theorem assumes existence and that both paths remain in the common region. Those conditions require their own enclosure argument, rather than being inferred from a small sampled residual.

**Theorem 4 (A local Picard tube).** Let $Y$ be a closed box, $I=[t_0,t_0+h]$, $h>0$, and $X_0\subset Y$ an initial box. Suppose $f$ is continuous on $I\times Y$, $L$-Lipschitz in state there, $hL<1$, and an inclusion function proves
$$X_0+[0,h]F(I,Y)\subseteq Y.$$
Then for every fixed $x_0\in X_0$ the IVP has a unique solution whose path lies in $Y$ on $I$.

*Proof.* On the complete space of continuous paths from $I$ into $Y$ with the supremum norm, define
$(Pv)(t)=x_0+\int_{t_0}^t f(s,v(s))\,ds$.
Convexity of the box and the range enclosure show every value belongs to $X_0+[0,h]F(I,Y)\subseteq Y$. The Lipschitz condition gives $\|Pv-Pw\|_\infty\le hL\|v-w\|_\infty$. Banach's theorem gives a unique fixed path. The fundamental theorem of calculus makes it a differentiable solution with the selected initial value. Any other solution remaining in $Y$ would be another fixed point. ∎

**Worked example 11 (An existence tube before an endpoint).** For $y'=y$, $y(0)=1$, choose $h=0.1$, $Y=[1,1.2]$. The interval condition is $[1,1]+[0,0.1][1,1.2]=[1,1.12]\subset Y$, and $hL=0.1<1$. Thus a solution exists in the tube. Its endpoint is enclosed by $[1,1]+0.1[1,1.2]=[1.1,1.12]$, which contains $e^{0.1}$. All decimals here are exact rationals for the hand proof; machine endpoints still require outward parsing. The tube and endpoint have different interval-time factors.

## Long-time claims inherited from the dynamics route

The fixed-time Euler proof, stability multipliers, stiff two-scale example, local tolerance control and step-doubling diagnostics are developed in the [initial-value](initial-value-methods.md) and [multistep](multistep-stiff-dae-methods.md) chapters. Their hypotheses remain part of any certificate. For example, the specified system
$$x'=-x,\qquad y'=-1000(y-g(t))+g'(t)$$
has $y=g(t)+Ce^{-1000t}$, but an explicit scheme still sees the fast multiplier after the transient. A smooth-looking slow trace does not certify a coarse explicit step.

A small differential residual and a small implicit-stage residual are different quantities. The latter checks a finite algebraic equation; only a reconstruction and a theorem such as Theorem 3 transfer it to the continuous IVP. Symplectic modified equations, decreasing energies for gradient flows and positivity preservation are distinct structural tools. Projection onto one invariant can disturb phase, momentum or another invariant. The [geometric chapter](geometric-numerical-integration.md) derives the relevant exact-map properties and their finite-time limitations.

The following optional outlook requires basic measure-theoretic probability to read the theorem statements. It is retained to prevent a finite validated orbit from being mistaken for an ergodic or chaotic theorem. These are dependencies to recognize, rather than additional prerequisites for applying interval arithmetic.

**Definition 5 (Directional Lyapunov exponent).** For differentiable $T$ and nonzero $v$, a directional exponent, when its limit exists, is
$$\lambda(x,v)=\lim_{n\to\infty}\frac1n\log\|DT^n(x)v\|.$$
A direction trapped in a contracting subspace need not attain the largest exponent. Continuous-time exponents divide by elapsed time. Numerical calculations propagate tangent vectors, renormalize to prevent overflow, and use repeated QR for a spectrum. They must report discarded transient, averaging horizon, time unit, tangent basis, convergence trace and refinement. A positive finite-time estimate proves neither a compact chaotic attractor nor mixing, entropy or robustness.

The heuristic predictability horizon $\log(\Delta/\delta_0)/\lambda$ assumes an approximately constant positive linearized growth rate between uncertainty $\delta_0$ and tolerated separation $\Delta$. It ignores nonlinear saturation and does not absorb model or observational error. A rapidly widening validated box may be a true sensitivity signal, interval dependency loss, or both.

**Definition 6 (Invariant measure and empirical measure).** A probability measure $\mu$ is invariant for measurable $T$ when $\mu(T^{-1}A)=\mu(A)$ for every measurable $A$. An orbit empirical measure is
$$\mu_N=\frac1N\sum_{k=0}^{N-1}\delta_{T^k x}.$$
For a continuous flow, invariance must hold for every time map. Hamiltonian phase volume and an induced energy-surface measure are different measures; dissipative attractors generally do not preserve ambient volume.

**Proposition 7 (A subsequential limit is invariant).** On a compact metric space with continuous $T$, every weakly convergent subsequence of empirical measures has an invariant limit.

*Proof.* For continuous $\varphi$,
$$
\int(\varphi\circ T-\varphi)\,d\mu_N
=\frac{\varphi(T^Nx)-\varphi(x)}N\longrightarrow0.
$$
The function and its composition are continuous and bounded, so weak convergence passes both integrals to the limit. Equality against all continuous test functions identifies the limit with its pushforward under $T$, hence invariance. Existence of a weakly convergent subsequence is the standard compactness theorem for probabilities on a compact metric space, cited here separately from the invariance calculation. ∎

This says neither that the limit is unique nor that it is independent of the starting orbit.

**Theorem 8 (Birkhoff's theorem; cited).** For a probability-preserving transformation and $\varphi\in L^1(\mu)$, the averages
$$A_N\varphi(x)=\frac1N\sum_{k=0}^{N-1}\varphi(T^kx)$$
converge almost everywhere to an invariant integrable function $\varphi^*$ with the same integral. If $T$ is ergodic, this limit equals $\int\varphi\,d\mu$ almost everywhere. The measure-theoretic proof is external; Walters's treatment linked in Sources supplies the modern probability-space formulation.

Almost everywhere does not mean every start. The theorem provides no universal finite-sample error rate or independence. Quantitative uncertainty needs further moment and dependence assumptions, such as a suitable mixing theorem or concentration bound. Some ergodic averages can converge arbitrarily slowly.

**Definition 9 (Ergodic, mixing, uniquely ergodic).** Ergodicity means invariant measurable sets have measure zero or one. Strong mixing means $\mu(A\cap T^{-n}B)\to\mu(A)\mu(B)$. Unique ergodicity for a continuous compact-space map means there is exactly one invariant probability. These definitions have different quantifiers and are not synonyms for topological transitivity or sensitive dependence.

Mixing implies ergodicity: if $A$ is invariant modulo null sets, then its self-correlation is always $\mu(A)$, whereas mixing forces the limit $\mu(A)^2$. Thus $\mu(A)$ is zero or one. Irrational circle rotation is ergodic and uniquely ergodic, but is not mixing. For the complex observable $e^{2\pi i x}$ its rotation correlation has modulus one, so cannot approach zero. Uniform convergence of continuous-observable averages follows from the unique-ergodicity theorem; both rotation ergodicity and that theorem are cited dependencies. Rational rotation is periodic and not ergodic for arc length. A rotation flow on one circle and rotation on an entire disk also have different invariant spaces.

**Theorem 10 (Recurrence on a finite invariant measure space).** Almost every point of a measurable set $A$ returns to $A$ infinitely often under a measure-preserving map; invertibility is not required.

*Proof.* Let $B=A\setminus\bigcup_{n\ge1}T^{-n}A$ be points that never return. The preimage sets $T^{-j}B$ are pairwise disjoint: membership at indices $i<j$ would give a point of $B$ returning after $j-i$ steps. They all have measure $\mu(B)$, so finiteness forces $\mu(B)=0$. A point of $A$ with only finitely many returns has a last visit, whose state lies in $B$. Such points lie in $\bigcup_{j\ge0}T^{-j}B$, a countable union of null sets. ∎

Recurrence supplies no small return time, exact periodicity, orbit convergence or correlation decay. A damped oscillator does not contradict it: ambient area is not invariant. A point mass at its equilibrium is invariant and concerns only that equilibrium.

**Worked example 12 (A circle average cannot establish disk ergodicity).** For $x'=-y$, $y'=x$ on radius $R$, write $x=R\cos(t+\phi)$. Over every complete period the average of $x^2$ is $R^2/2$. Different invariant radii give different values. An annulus of radii has intermediate disk area and is invariant, so the flow is not ergodic for normalized area on a disk. Accurate averaging on one circle cannot remove that obstruction.

For a long-time statistic, define the map or flow, state space, time sampling, measure and observable before inspecting the trace. Compare several starts, including distinct invariant components; refine time step, tolerance, precision and sampling interval; separate transient removal from averaging; inspect running averages and block variation; and test known balance laws and model perturbations. The [flow and feedback laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-linear-dynamics-audit) distinguishes exact rational matrix diagnostics from approximate RK4 orbits and averages. A numerical time series can support a bounded numerical claim while leaving theorem-level chaos or ergodicity unresolved.

## Factorable expressions and range enclosures

A factorable expression is built from constants, variables, arithmetic
operations, and supported univariate atoms by a finite computation graph. On
a box, interval arithmetic replaces each operation by a set enclosure. If
\(X=[a,b]\) and \(Y=[c,d]\), then

\[
 X+Y=[a+c,b+d],\qquad
 XY=[\min(ac,ad,bc,bd),\max(ac,ad,bc,bd)]. \tag{5}
\]

Division requires \(0\notin Y\); transcendental atoms require known range
rules on their domains. Outward rounding is needed in floating-point
implementations so that computed endpoints contain the exact range.

Natural interval extensions can be weak because they forget dependence. For
\(x\in[0,1]\), the expression \(x-x\) has exact range \(\{0\}\), while
naive interval evaluation gives \([-1,1]\). Algebraically equivalent
representations may therefore yield unequal bounds. Interval propagation is
safe only when every primitive enclosure is inclusion-valid.


## Solved exercises

### Exercise 1: Outward-rounded addition
<a id="verified-interval-computation-ex-1"></a>

Intervals \(X=[a,b]\) and \(Y=[c,d]\) have
floating-point endpoints. Describe a sound sum without assuming endpoint
operations are exact.

<details>
<summary>Hint 1</summary>

**Hint.** Separate endpoint directions.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The lower endpoint must not round upward past its target.

</details>

<details>
<summary>Solution</summary>

**Solution.** Exact real interval addition is \([a+c,b+d]\). Compute the lower
endpoint with downward rounding and the upper endpoint with upward rounding,
returning \([\operatorname{rdn}(a+c),\operatorname{rup}(b+d)]\). Even if a particular endpoint sum happens to
be representable, the algorithmic contract must request the directed modes.
Adding both endpoints in round-to-nearest would not prove enclosure in general.

</details>

### Exercise 2: Division by zero
<a id="verified-interval-computation-ex-2"></a>

Why is \([1,2]/[-1,1]\) not one bounded real interval?

<details>
<summary>Hint 1</summary>

**Hint.** Let the denominator approach zero.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Both signs occur.

</details>

<details>
<summary>Solution</summary>

**Solution.** Exact quotients include \(1/y\) for nonzero \(y\) arbitrarily close
to zero from either side, so they are unbounded above and below and omit a
central region. Ordinary bounded interval division is undefined. An extended
interval system may return two unbounded components, but must state that richer
representation explicitly.

</details>

### Exercise 3: Inclusion versus sharpness
<a id="verified-interval-computation-ex-3"></a>

Evaluate \(x/(1+x)\) on \([0,1]\) naturally and
then use monotonicity.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate naturally first.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Then inspect the derivative sign.

</details>

<details>
<summary>Solution</summary>

**Solution.** Natural arithmetic gives \([0,1]/[1,2]=[0,1]\). The derivative
\(1/(1+x)^{2}\) is positive, so the exact range is obtained at the endpoints:
\([0,1/2]\). Both enclosures are sound; only the second is sharp. The wider first
answer illustrates dependency because the two occurrences of \(x\) are linked.

</details>

### Exercise 4: Exclude a root
<a id="verified-interval-computation-ex-4"></a>

Let \(f(x)=x^{2}+1\) on \(X=[-1/4,1/4]\) with midpoint zero.
Can the interval Newton exclusion test be used directly?

<details>
<summary>Hint 1</summary>

**Hint.** Inspect the derivative enclosure.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A failed sufficient test is inconclusive.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. The derivative enclosure is \(2X=[-1/2,1/2]\), which contains
zero, so division in \(N(X)=m-f(m)/F'(X)\) is not an ordinary bounded interval
operation. The failure of this test is not evidence for a root. Direct range
evaluation gives \(f(X)=[1,17/16]\), which excludes zero and proves there is no
root in \(X\).

</details>

### Exercise 5: Prove a contraction certificate
<a id="verified-interval-computation-ex-5"></a>

Suppose \(T(X) \subseteq X\) and
\(\sup_X \lvert T'\rvert\le 0.4\). What does this prove, and what additional fact relates the
fixed point to a zero of \(f\) when \(T(x)=x-cf(x)\)?

<details>
<summary>Hint 1</summary>

**Hint.** Apply Banach on the closed interval.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A root conclusion needs a nonzero preconditioner.

</details>

<details>
<summary>Solution</summary>

**Solution.** The closed interval is complete, and the derivative bound makes
\(T\) a contraction, so Banach's theorem proves exactly one fixed point in \(X\)
and convergence of every iteration starting there. To infer \(f(r)=0\), require
\(c\) nonzero: \(r=T(r)=r-cf(r)\) then implies \(f(r)=0\). Without that condition,
\(c=0\) makes every point fixed regardless of \(f\).

</details>

### Exercise 6: A linear error certificate
<a id="verified-interval-computation-ex-6"></a>

Verified computations give
\(\lVert I-CA\rVert\le 1/4\), \(\lVert C\rVert\le 3\), and \(\lVert b-A\widehat{x}\rVert\le 2\times 10^{-6}\) in one subordinate norm.
Bound the forward error.

<details>
<summary>Hint 1</summary>

**Hint.** First bound the inverse.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Then multiply by the residual.

</details>

<details>
<summary>Solution</summary>

**Solution.** The Neumann argument gives
\(\lVert A^{-1}\rVert\le 3/(1-1/4)=4\). Consequently
\(\lVert x-\widehat{x}\rVert\le 4(2\times 10^{-6})=8\times 10^{-6}\). The strict residual-matrix bound also proves that
\(A\) is nonsingular. The claim assumes all three norm inequalities enclose exact
quantities.

</details>

### Exercise 7: Local is not global
<a id="verified-interval-computation-ex-7"></a>

A contraction certificate proves exactly one zero
of \(f\) in \([1,2]\). May the report say that \(f\) has exactly one real zero?

<details>
<summary>Hint 1</summary>

**Hint.** Read the certified domain.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Account for the complement separately.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. The theorem excludes additional zeros only inside \([1,2]\).
Roots may lie in other intervals. A global statement needs a domain covering
all possible roots plus exclusion, monotonicity, degree, coercivity, or another
argument on the remainder.

</details>

### Exercise 8: Norm of an interval matrix
<a id="verified-interval-computation-ex-8"></a>

An interval matrix has entry bounds
\(\lvert E_{ij}\rvert\le B_{ij}\) with nonnegative \(B\). Give a computable infinity-norm bound.

<details>
<summary>Hint 1</summary>

**Hint.** Bound absolute row sums.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Mixed endpoint choices can matter.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every represented matrix satisfies
\(\lVert E\rVert_\infty=\max_i \sum_j \lvert E_{ij}\rvert\le \max_i \sum_j B_{ij}\). If this last number is
below one, it supplies the contraction bound. Computing norms only for the
lower- and upper-endpoint matrices can miss mixed endpoint choices and is not a
valid replacement.

</details>

### Exercise 9: Subdivision coverage
<a id="verified-interval-computation-ex-9"></a>

A range verifier accepts 15 leaf boxes but its log
contains only 14. What can be concluded from the retained certificate?

<details>
<summary>Hint 1</summary>

**Hint.** Trace coverage of the initial domain.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A missing leaf can leave an unproved region.

</details>

<details>
<summary>Solution</summary>

**Solution.** Nothing about the omitted region unless another record proves it
empty or covered. A range proof needs a partition or cover of the entire input
box and a sound image for every member. Re-running may recover the missing leaf,
but the present artifact is incomplete even if its reported global bound is
numerically correct.

</details>

### Exercise 10: Separate discretization from algebra
<a id="verified-interval-computation-ex-10"></a>

An interval linear solver proves
that the finite-element coefficient vector is within \(1\times 10^{-10}\) of the exact
solution of the assembled equations. Does it prove the represented field is
within \(1\times 10^{-10}\) of the PDE solution?

<details>
<summary>Hint 1</summary>

**Hint.** Identify the finite system's exact solution.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The continuous approximation remains separate.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. It bounds algebraic error for the specified discrete system.
The PDE claim additionally needs a discretization estimate, correct assembly,
domain and data hypotheses, and the norm relation between coefficients and the
field. Those terms may dominate \(1\times 10^{-10}\).

</details>

## Long-time claim exercises

### Exercise 11: Birkhoff claim repair
<a id="verified-interval-computation-ex-11"></a>

Repair the statement that ergodicity makes a million consecutive samples equivalent to a million independent samples.

<details>
<summary>Hint 1</summary>

**Hint.** Read what convergence mode the theorem supplies.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Independence and an error rate require additional hypotheses.

</details>

<details>
<summary>Solution</summary>

**Solution.** Ergodicity supports almost-sure limiting time averages under a named invariant probability and integrable observable. It does not imply independence or a finite-sample rate. Quantitative uncertainty needs additional dependence and moment assumptions, and its sampling interval and averaging horizon must be recorded.

</details>

### Exercise 12: Invariant circle
<a id="verified-interval-computation-ex-12"></a>

For $x'=-y$, $y'=x$ on radius $R$, compute the continuous-time average of $x^2$.

<details>
<summary>Hint 1</summary>

**Hint.** Parametrize the circle by an angle.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Integrate cosine squared over full periods.

</details>

<details>
<summary>Solution</summary>

**Solution.** Write $x=R\cos(t+\phi)$. The average of $\cos^2$ over a period is $1/2$, and incomplete-period terms vanish after division by an increasing horizon, so the limit is $R^2/2$. Different invariant radii have different averages, ruling out disk-area ergodicity.

</details>

### Exercise 13: Recurrence assumptions
<a id="verified-interval-computation-ex-13"></a>

Why does a damped oscillator not contradict Poincaré recurrence?

<details>
<summary>Hint 1</summary>

**Hint.** Identify the measure in the recurrence theorem.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare the oscillator's phase-space volume before and after evolution.

</details>

<details>
<summary>Solution</summary>

**Solution.** The damped flow contracts area, so ambient finite area is not an invariant measure. The recurrence theorem therefore does not apply to that measure. A point mass at the equilibrium is invariant, but it describes only the equilibrium and gives no recurrence claim for other initial states.

</details>

## Sources

Rump, [Verification methods: Rigorous results using floating-point arithmetic](https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf), section 6, develops interval Newton and related verification principles. Rump, [Verified bounds for singular values](https://www.tuhh.de/ti3/paper/rump/Ru10a.pdf), Lemma 2.1, gives inverse bounds from a verified approximate inverse. Moore, Alefeld–Herzberger, Neumaier and Tucker remain further reading for interval and validated differential equations; exact editions or theorem locators for those additional works are not asserted. The contraction criteria used here are proved explicitly and are stronger than some specialized existence-only tests.

Walters, [An Introduction to Ergodic Theory](https://link.springer.com/book/9780387951522), develops the modern measure-theoretic ergodic theorem and rotation examples. The full proofs of Birkhoff, probability-measure compactness and unique-ergodicity consequences are external dependencies, requiring measure theory. Birkhoff's historical [Proof of the Ergodic Theorem](https://doi.org/10.1073/pnas.17.2.656) treats its original flow setting; it is not substituted for the modern general-map formulation.

## Summary

A verified result encloses every operation along a specified proof path and invokes a theorem whose hypotheses match the stored inequalities. Outward rounding, dependency, coverage, fixed-point existence, uniqueness and residual transfer each have separate roles. A validated local or finite-time computation does not automatically prove a global root count, a PDE error bound or an ergodic long-time statistic. The final chapter assembles these distinctions into reproducible software audits.
