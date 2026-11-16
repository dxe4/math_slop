
# Measurable Functions and Simple Approximation


# Lebesgue Integration by Simple Approximation

This is a retained further-reading chapter under its original resource and exercise identities. The current classical Real Analysis route reaches Riemann–Stieltjes integration and approximation without requiring this measure-theoretic construction. Readers entering this chapter should first read Outer Measure, Measurability, and Null Sets; the retained convergence-theorem chapter supplies the subsequent full limit-interchange development.

Riemann integration partitions the input axis and traps a function by its behavior on subintervals. Lebesgue integration groups input points by output level and measures the sets on which those levels occur. This shift makes null sets harmless and monotone approximation natural. It also allows unbounded functions and irregular domains to be handled by one framework.

The construction proceeds in three layers:

1. integrate indicator functions by measuring their sets;
2. integrate nonnegative simple functions by finite weighted sums;
3. integrate arbitrary measurable functions through positive and negative parts.

The convergence chapter proves the major limit-interchange theorems. Here the goal is to build the integral carefully enough that their hypotheses and conclusions are meaningful.

Throughout, \((X,M,\mu)\) denotes a measure space. Integrals without displayed
limits are over \(X\); integrals over a measurable set \(E\) will later mean the
integral of \(f\,1_E\). Values of nonnegative functions and their integrals lie in
the extended half-line \([0,\infty]\). In that setting, \(a+\infty=\infty\) for \(a\ge 0\), but
subtraction such as \(\infty-\infty\) is never assigned a value. That small bookkeeping
rule is responsible for several of the hypotheses that appear below. When the
space is a subset of \(R\), \(m\) denotes Lebesgue measure; otherwise the generic
measure remains \(\mu\).

There are two complementary ways to read the construction. Algebraically, it
extends the assignment \(1_E\mapsto \mu(E)\) from indicators to a large class of
functions while preserving addition and order. Analytically, it declares the
area under a measurable graph to be the best area supplied by finite
measurable staircases lying below the graph. Both viewpoints will be used.

## Measurable inputs before infinite integrals

For an extended real function f on (X,Σ), measurability means that {f>a} belongs to Σ for every real a. It is enough to test rational a: any real threshold is obtained by a countable union of rational-threshold sets above it. Complements and countable intersections then give all the other open/closed threshold forms. Preimages commute with the sigma-algebra operations, so every Borel set of extended values has measurable preimage. A complex function is measurable when its real and imaginary parts are measurable.

For finite real f,g, their sum is measurable because {f+g>a} is the union, over rational r, of {f>r} intersect {g>a−r}. If the sum exceeds a, choose r strictly between a−g(x) and f(x); conversely either intersection forces the strict inequality. This explicit rational choice supplies countability. Arbitrary unions would not be justified by a sigma algebra.

More generally a finite tuple of measurable real functions has measurable preimages of open sets in Euclidean space: every open set is a countable union of rational boxes, and a box preimage is a finite intersection of coordinate threshold conditions. Composing such a tuple with a continuous real function is therefore measurable. Products, absolute values, maxima and minima follow. For extended values an expression such as infinity minus infinity is undefined; closure claims must exclude that case rather than declare it measurable by notation.

Countable suprema are measurable because {sup fn>a} is the union of {fn>a}. Infima follow by negatives, and limsup is the infimum over m of the supremum over n≥m. Thus any existing pointwise limit is measurable, with extended limits allowed. This is a measurability conclusion, not permission to interchange an integral and that limit. The convergence chapter supplies the extra hypotheses for such interchanges.

**Worked example 4.1: the rational indicator.** The rationals are a countable union of closed singletons, hence Borel. Their indicator is a measurable simple function even though it is discontinuous everywhere. Its Lebesgue integral is zero because the set is null. The failure of a Riemann integral for that representative is compatible with measurability and simple-function integration.

**Worked example 4.2: a distance function.** For a nonempty closed set C in the line, d(x,C)=inf|x−c| is continuous because its change between two inputs is at most their distance, by the triangle inequality. It is therefore measurable and vanishes exactly on C. Taking C to be the Cantor set gives a continuous nonnegative function with an uncountable zero set of measure zero. Cardinality of a level set alone does not determine its measured size.

**Worked example 4.3: a pointwise envelope.** On (0,1), the functions fn=n times the indicator of (0,1/n) are measurable and tend to zero at each fixed input. Their supremum is nevertheless an unbounded measurable function near zero, by the countable-supremum theorem. Neither that unbounded envelope nor the absence of uniform convergence invalidates measurability. The example will later separate pointwise convergence from convergence of integrals.

## Dyadic approximation and null changes

For a nonnegative measurable f, including the value infinity, define sn=2^−n floor(2^n min(f,n)). It has finitely many values on measurable level sets, so it is simple. If f≤n, refining the dyadic mesh never decreases its rounded-down value. If f≥n, the next truncation is at least n and the finer rounding still gives at least n. Hence sn increases pointwise. At finite f, once the truncation is inactive the error is less than2^−n; at infinite f the approximant equals n. Thus sn tends to f everywhere.

For f=x² on [0,1], this rounds its height, not its input interval. On the dyadic level cell where j/2^n≤x²<(j+1)/2^n, the approximant is j/2^n. The level cells are measurable intervals obtained by taking square roots. More irregular measurable f use the same construction without requiring geometric interval-shaped cells. This is the reason simple approximation extends beyond Riemann subdivisions.

On a complete measure space, changing a measurable function arbitrarily on a null set preserves measurability. For each threshold, the new preimage differs from the old one only within that null set. Completeness makes every such subset measurable, so their symmetric difference is measurable. Without completeness the conclusion can fail: a nonmeasurable subset of a measurable null set has an indicator equal almost everywhere to zero but is not measurable in that uncompleted sigma algebra. Null equivalence and completion must therefore be stated together.

The transferred sections below develop the finite indicator/simple integral and its order properties, followed by the original dyadic construction. The general integral and its signed arithmetic continue in the [next chapter](lebesgue-integral.md). The original ANA-CH17 bank is retained here under its one stable identity and covers both chapters; finish the next chapter before attempting its later integral questions.

## 1. Start with indicators

For a measurable set \(E\), its indicator is

\(1_E(x)=1 \text{ if } x\in E, \text{ and } 0 \text{ otherwise}\).

Define

\(\int 1_E d\mu=\mu(E)\).

This is the bridge from measuring sets to integrating functions. If \(E\) is null, its indicator has integral zero even though it may be nonzero at many—even uncountably many—points.

On a general measure space \((X,M,\mu)\), the same definition is \(\int 1_E d\mu=\mu(E)\). The real line with Lebesgue measure is the main example, but probability spaces, counting measure, and weighted measures fit the same notation.

This definition already records three structural facts. For disjoint
measurable sets \(E_k\), countable additivity gives

\(\int 1_{\bigcup E_k}d\mu=\sum_k\int 1_{E_k}d\mu\).

If \(E\subseteq F\), then \(\int 1_E\le \int 1_F\); and if \(E\) and \(F\) differ by a null set, their
indicators have the same integral. Integration is therefore designed from the
start to remember measurable size rather than individual point values.

### Example: three measures, one indicator

Let \(E=\{1,2,3\}\). Under counting measure on \(N\), \(\int 1_E=3\). Under Lebesgue
measure on \(R\), \(\int 1_E=0\). If \(P\) is a probability measure on a sample space,
then \(\int 1_E dP=P(E)\). The integrand has not changed, but the integral answers a
question posed by the chosen measure. Always specify the measure when more
than one is in play.

## 2. Simple functions are finite measurable staircases

A nonnegative **simple function** has a representation

\[\varphi=\sum_{k=1}^n a_k\,1_{E_k}\]

with coefficients \(a_k\ge 0\) and measurable sets \(E_k\). We may choose the nonzero coefficients distinct and the sets disjoint by taking the level sets \(\{\varphi=a_k\}\). This is the canonical representation.

Define

\(\int \varphi d\mu=\sum_{k=1}^n a_k \mu(E_k)\).

The canonical representation shows the value is independent of how overlapping indicators were initially combined.

Here and below the zero level is omitted from the sum. Ordinary extended-real
arithmetic does not assign a value to \(0\cdot \infty\), which could arise when
\(\{\varphi=0\}\) has infinite measure. For integration, a zero-height step is defined
to contribute zero regardless of the size of its base; omitting that step keeps
the formula from depending on this special convention.

### Why the value is representation-independent

Suppose

\[\varphi=\sum_i a_i\,1_{E_i}=\sum_j b_j\,1_{F_j}\]

where each family is disjoint. Intersect the two partitions. On
\(E_i\cap F_j\), equality of the functions forces \(a_i=b_j\) whenever the cell is
nonempty. Finite additivity then gives

\[\sum_i a_i\mu(E_i)=\sum_{i,j}a_i\mu(E_i\cap F_j)\]

and

\(\sum_j b_j\mu(F_j)=\sum_{i,j}b_j\mu(E_i\cap F_j)\).

The refined sums agree term by term. If some measure is infinite, equality is
still valid because every coefficient is nonnegative and no subtraction is
used. Thus the definition depends on the function, not on the notation chosen
to describe it.

### Worked example

On \([0,3]\), let \(\varphi=2\) on \([0,1)\), \(5\) on \([1,2)\), and \(1\) on \([2,3]\). Then

\(\int \varphi dm=2\cdot 1+5\cdot 1+1\cdot 1=8\).

If any positive coefficient multiplies a set of infinite measure, the integral is infinite.

### Worked example with overlap

Let \(\varphi=1_{[0,2]}+2\cdot 1_{[1,3]}\). The displayed sets overlap, so their coefficients
are not the canonical levels. Refining at the endpoints gives height \(1\) on
\([0,1)\), height \(3\) on \([1,2]\), and height \(2\) on \((2,3]\). Hence

\(\int \varphi dm=1+3+2=6\).

Direct linearity gives the same result, \(2+2\cdot 2=6\), but the refined
calculation explains why direct linearity is legitimate.

## 3. Order is built into the simple integral

If \(0\le \varphi\le \psi\) are simple, then

\(\int \varphi\le \int \psi\).

Refine both representations to the finite partition formed by intersections of their level sets. On each resulting cell, the coefficient of \(\varphi\) is no greater than that of \(\psi\); multiply by the cell's measure and sum.

For nonnegative simple functions and scalars \(c\ge 0\),

\(\int (\varphi+\psi)=\int \varphi+\int \psi\),

\(\int c\varphi=c\int \varphi\).

These properties are not postulates added later. They follow from finite additivity of measure and the definition.

There is also a useful continuity property already at the simple level. If
\(E_r\uparrow E\), then continuity from below of measure gives

\(\int 1_{E_r}d\mu=\mu(E_r)\uparrow \mu(E)=\int 1_Ed\mu\).

This observation is the seed of monotone convergence. Much of Lebesgue
integration consists of transferring continuity properties of measures to
functions by approximation.

## 5. Canonical dyadic approximation

Every nonnegative measurable function is the pointwise increasing limit of simple functions. Define

\[\varphi_n(x)=2^{-n}\lfloor 2^n f(x)\rfloor\]

when \(f(x)<n\), and cap the value at \(n\) when \(f(x)\ge n\). More explicitly, use levels \(k/2^n\) for \(0\le k<n2^n\) and value \(n\) on \(\{f\ge n\}\).

Then

\[0\le \varphi_n\le \varphi_{n+1}\le f\]

and \(\varphi_n(x)\uparrow f(x)\) at every point, including the value \(\infty\).

The level sets are measurable because they are described by inequalities involving \(f\). This construction proves that the simple-minorant definition has enough approximations to recover every nonnegative measurable function.

To see monotonicity of this particular construction, observe that increasing
\(n\) both raises the truncation ceiling and refines each interval of heights
into two halves. At a finite value \(f(x)\), the error satisfies

\(0\le f(x)-\varphi_n(x)<2^{-n}\) once \(n>f(x)\).

At a point where \(f(x)=\infty\), one has \(\varphi_n(x)=n\). Thus convergence holds in the
extended-real sense at every point. Each \(\varphi_n\) takes only finitely many values,
and, for \(0\le k<n2^n\), its level sets can be written using
\(\{k/2^n\le f<(k+1)/2^n\}\) together with the cap set \(\{f\ge n\}\). Measurability of \(f\)
is exactly what makes these sets measurable.

### A concrete approximation

On \((0,1]\), take \(f(x)=x^{-1/2}\). The first useful approximants flatten the
singularity: \(\varphi_n=n\) on \((0,n^{-2}]\), while away from that interval they round
\(f\) down to a multiple of \(2^{-n}\). No interval partition of the domain is
required. The staircase is organized by height sets, which may be geometrically
irregular but remain measurable.

## Exercises on measurable functions and finite approximation

### MEASURE-SIMPLE-E001 — Thresholds

Why do rational thresholds suffice to define measurability?

<details><summary>Hint 1</summary>Approximate a real threshold from above by rationals.</details>
<details><summary>Hint 2</summary>Use a countable union.</details>
<details><summary>Full solution</summary>For real a, {f>a} is the union of {f>r} over rationals r>a. Each set is measurable under the rational hypothesis, and the rational family is countable.</details>

### MEASURE-SIMPLE-E002 — Countable supremum

Prove sup fn is measurable for measurable real fn.

<details><summary>Hint 1</summary>Test a strict lower threshold.</details>
<details><summary>Hint 2</summary>A supremum exceeds a exactly when some term does.</details>
<details><summary>Full solution</summary>{sup fn>a}=union_n{fn>a}; the right side is a countable union of measurable sets. Infinite supremum values cause no difficulty for this criterion.</details>

### MEASURE-SIMPLE-E003 — Limit inferior

Express liminf fn using measurable infima and suprema.

<details><summary>Hint 1</summary>Take the infimum of each tail.</details>
<details><summary>Hint 2</summary>Then take an increasing supremum over starting indices.</details>
<details><summary>Full solution</summary>liminf fn=sup_m inf_{n≥m}fn. Countable infima and suprema are measurable, so this extended function is measurable even if the original sequence has no limit.</details>

### MEASURE-SIMPLE-E004 — A finite product

Why is fg measurable when f,g are finite real measurable functions?

<details><summary>Hint 1</summary>View them as a measurable pair.</details>
<details><summary>Hint 2</summary>Apply a continuous function on the plane.</details>
<details><summary>Full solution</summary>The map x↦(f(x),g(x)) has measurable preimages of rational rectangles and hence open sets. Multiplication is continuous on the plane, so its composition fg is measurable.</details>

### MEASURE-SIMPLE-E005 — Undefined arithmetic

Does measurability justify infinity minus infinity?

<details><summary>Hint 1</summary>An extended-real expression still needs a defined value.</details>
<details><summary>Hint 2</summary>Separate domain and sigma-algebra questions.</details>
<details><summary>Full solution</summary>No. That subtraction is not defined by extended-real arithmetic. One must restrict the functions or specify a separate value on the ambiguous set and then prove measurability of the resulting defined function.</details>

### MEASURE-SIMPLE-E006 — A simple indicator

Show that the rational indicator on [0,1] is simple and measurable.

<details><summary>Hint 1</summary>There are only two values.</details>
<details><summary>Hint 2</summary>The rational set is countable and Borel.</details>
<details><summary>Full solution</summary>Its nonzero level set is the countable Borel set Q intersect [0,1], and its other level set is the measurable complement. It is therefore a two-valued measurable simple function, despite dense discontinuities.</details>

### MEASURE-SIMPLE-E007 — Dyadic error

For finite f(x)<n, bound f(x)−sn(x).

<details><summary>Hint 1</summary>Use the defining floor inequality.</details>
<details><summary>Hint 2</summary>Multiply back by2^−n.</details>
<details><summary>Full solution</summary>The floor lies at most its argument and strictly more than that argument minus one. Thus0≤f(x)−sn(x)<2^−n whenever the truncation is inactive.</details>

### MEASURE-SIMPLE-E008 — Infinite values

What does sn(x) equal when f(x)=infinity?

<details><summary>Hint 1</summary>The truncation becomes n.</details>
<details><summary>Hint 2</summary>n is already a dyadic grid value.</details>
<details><summary>Full solution</summary>sn(x)=2^−n floor(2^n n)=n, tending to infinity. Thus the same finite-valued simple approximants handle infinite target values without using an infinite coefficient.</details>

### MEASURE-SIMPLE-E009 — Null alteration

Why does completion matter for an arbitrary change on a null set?

<details><summary>Hint 1</summary>Compare threshold preimages.</details>
<details><summary>Hint 2</summary>Their difference can be any subset of that null set.</details>
<details><summary>Full solution</summary>Completeness makes every such subset measurable, so the altered threshold preimage remains measurable. In an uncompleted space some subsets of null sets are absent, and the altered indicator can fail measurability.</details>

### MEASURE-SIMPLE-E010 — Uniform approximation

If0≤f≤M everywhere, how can one approximate it uniformly by simple functions?

<details><summary>Hint 1</summary>Round down its heights on a fixed fine mesh.</details>
<details><summary>Hint 2</summary>No moving truncation is needed once it exceeds M.</details>
<details><summary>Full solution</summary>Choose dyadic mesh2^−n and a cap at least M. The rounded values are finitely many measurable levels and differ from f by less than2^−n uniformly. This does not assert uniform approximation for arbitrary unbounded f.</details>

### MEASURE-SIMPLE-E011 — Complex inputs

Give a measurable simple approximation for a bounded complex measurable f.

<details><summary>Hint 1</summary>Approximate real and imaginary parts separately.</details>
<details><summary>Hint 2</summary>Combine their finite measurable partitions.</details>
<details><summary>Full solution</summary>Round the two bounded coordinates on a dyadic mesh and intersect the finite level partitions. Their complex combination is simple and measurable, with modulus error at most sqrt2 times the mesh. No order or monotone limit is claimed for complex values.</details>

### MEASURE-SIMPLE-E012 — Measurability is not convergence

Does measurable fn→f pointwise imply their integrals converge?

<details><summary>Hint 1</summary>Use n1_(0,1/n).</details>
<details><summary>Hint 2</summary>Its integral remains one.</details>
<details><summary>Full solution</summary>No. On [0,1] these nonnegative measurable functions tend pointwise to zero but have integral one. The limit has integral zero. Measurability and pointwise convergence alone lack the domination or other control proved later.</details>

## Exercises with complete solutions

### ANA-CH17-E001 — Exercise 1: Indicator integral

Compute \(\int _{[0,3]} 1_{[1,2]}\,dm\).


<details>
<summary>Hint 1</summary>

The integral of an indicator is the measure of its support within the integration region.

</details>
<details>
<summary>Hint 2</summary>

Determine the length of the indicated interval.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E001 — Solution

The integral of an indicator is the measure of its set. The interval \([1,2]\) has length 1, so the integral is 1.


</details>

### ANA-CH17-E002 — Exercise 2: Simple function

Let \(\varphi=3\cdot 1_{[0,1]}+2\cdot 1_{(1,4]}\). Compute its integral.


<details>
<summary>Hint 1</summary>

Use disjoint level sets and multiply each level by its set’s measure.

</details>
<details>
<summary>Hint 2</summary>

The second interval has length three; endpoint inclusion does not affect length.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E002 — Solution

The level sets are disjoint up to an endpoint of measure zero. Thus \(\int \varphi=3\cdot 1+2\cdot 3=9\).


</details>

### ANA-CH17-E003 — Exercise 3: Overlapping representation

Rewrite \(1_{[0,2]}+2\cdot 1_{[1,3]}\) canonically and integrate it.


<details>
<summary>Hint 1</summary>

Split the line at all interval endpoints and add the coefficients on each region.

</details>
<details>
<summary>Hint 2</summary>

The overlap receives both contributions before its length is counted.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E003 — Solution

The value is 1 on \([0,1)\), 3 on \([1,2]\), and 2 on \((2,3]\), ignoring endpoints of no measure consequence. The integral is \(1\cdot 1+3\cdot 1+2\cdot 1=6\).


</details>

### ANA-CH17-E004 — Exercise 4: Monotonicity

If \(0\le f\le g\) are measurable and \(\int g=5\), what can be concluded about \(\int f\)?


<details>
<summary>Hint 1</summary>

Apply monotonicity of the nonnegative integral.

</details>
<details>
<summary>Hint 2</summary>

A finite upper integral bound also establishes integrability in this case.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E004 — Solution

Monotonicity gives \(0\le \int f\le 5\). In particular, \(f\) is integrable because its nonnegative integral is finite.


</details>

### ANA-CH17-E005 — Exercise 5: Positive and negative parts

Find \(f^+\) and \(f^-\) for \(f(x)=x\) on \([-1,2]\) and compute their integrals.


<details>
<summary>Hint 1</summary>

Separate the positive and negative parts at zero.

</details>
<details>
<summary>Hint 2</summary>

Integrate the two nonnegative triangles separately before subtracting.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E005 — Solution

We have \(f^+(x)=\max(x,0)\) and \(f^-(x)=\max(-x,0)\). Their integrals are \(\int _0^2x dx=2\) and \(\int _{-1}^0(-x)dx=1/2\). Hence \(\int f=3/2\) and \(\int |f|=5/2\).


</details>

### ANA-CH17-E006 — Exercise 6: Undefined signed integral

Why is \(f(x)=x\) on all of \(R\) not Lebesgue integrable, and why is its integral not defined by symmetry?


<details>
<summary>Hint 1</summary>

Inspect the masses of both sign parts over their half-lines.

</details>
<details>
<summary>Hint 2</summary>

An imposed symmetric truncation does not authorize subtracting two infinite Lebesgue integrals.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E006 — Solution

Both \(\int f^+\) and \(\int f^-\) are infinite, so \(\int |f|=\infty\) and the signed definition would require \(\infty-\infty\). Symmetric truncations giving zero impose an extra ordering convention and do not define the Lebesgue integral.


</details>

### ANA-CH17-E007 — Exercise 7: Null modification

Let \(f=0\) except \(f(n)=n^2\) at positive integers. Compute \(\int _R f dm\).


<details>
<summary>Hint 1</summary>

Identify the measure of the set on which the function differs from zero.

</details>
<details>
<summary>Hint 2</summary>

Nonnegative integration ignores a countable null support even when the point values are unbounded.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E007 — Solution

The function is nonzero only on a countable null set. It equals zero almost everywhere, so its nonnegative integral is zero despite unbounded point values.


</details>

### ANA-CH17-E008 — Exercise 8: Integral triangle inequality

Prove \(|\int f|\le \int |f|\) for integrable \(f\).


<details>
<summary>Hint 1</summary>

Place the function between its negative and positive absolute-value bounds.

</details>
<details>
<summary>Hint 2</summary>

Use order and linearity, then translate the two-sided inequality into an absolute-value inequality.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E008 — Solution

Pointwise, \(-|f|\le f\le |f|\). Monotonicity and linearity give \(-\int |f|\le \int f\le \int |f|\), which is equivalent to the claimed absolute-value bound.


</details>

### ANA-CH17-E009 — Exercise 9: Zero integral

If \(f\ge 0\) and \(\int f=0\), prove \(f=0\) almost everywhere.


<details>
<summary>Hint 1</summary>

Look at the sets where the function is at least a reciprocal positive integer.

</details>
<details>
<summary>Hint 2</summary>

Each has measure zero by Markov; their countable union contains every positive value.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E009 — Solution

For each positive integer \(n\), Markov's inequality gives
\(\mu(\{f\ge 1/n\})\le n\int f=0\).
The set \(\{f>0\}\) is the countable union of \(\{f\ge 1/n\}\), so it is null.


</details>

### ANA-CH17-E010 — Exercise 10: Markov bound

If \(f\ge 0\) and \(\int f=12\), bound \(\mu(\{f\ge 30\})\).


<details>
<summary>Hint 1</summary>

Compare the integral with the threshold times the measure of its superlevel set.

</details>
<details>
<summary>Hint 2</summary>

Divide the given mass by the positive threshold.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E010 — Solution

Markov's inequality gives \(\mu(\{f\ge 30\})\le 12/30=2/5\).


</details>

### ANA-CH17-E011 — Exercise 11: A power singularity

Determine whether \(x^{-2/3}\) is integrable on \((0,1)\) and compute the integral.


<details>
<summary>Hint 1</summary>

Compare the singular exponent with the integrability threshold at zero.

</details>
<details>
<summary>Hint 2</summary>

Use the primitive on a truncated interval and take its limit at the singular endpoint.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E011 — Solution

Since \(2/3<1\), the singularity is integrable. The value is
\([3x^{1/3}]_0^1=3\).


</details>

### ANA-CH17-E012 — Exercise 12: A nonintegrable singularity

Show \(1/x\) has infinite nonnegative integral on \((0,1)\).


<details>
<summary>Hint 1</summary>

Restrict to compact intervals avoiding zero.

</details>
<details>
<summary>Hint 2</summary>

The truncated integral is a logarithm that grows without bound as the cutoff decreases.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E012 — Solution

Integrating on \([1/n,1]\) gives \(\log n\). Monotonicity makes the full integral at least \(\log n\) for every \(n\), so it is infinite.


</details>

### ANA-CH17-E013 — Exercise 13: Rationals indicator

Compute the Lebesgue integral of \(1_Q\) on \([0,1]\).


<details>
<summary>Hint 1</summary>

The support is a countable subset of the finite interval.

</details>
<details>
<summary>Hint 2</summary>

Use its measure rather than its dense topology.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E013 — Solution

The rationals in \([0,1]\) are countable and null. The integral of their indicator is their measure, zero.


</details>

### ANA-CH17-E014 — Exercise 14: Canonical approximation

For finite \(f(x)=1.37\), what happens to the uncapped dyadic floors \(2^{-n}\lfloor 2^nf(x)\rfloor\)?


<details>
<summary>Hint 1</summary>

Compare the dyadic floor with its input before and after division by the dyadic scale.

</details>
<details>
<summary>Hint 2</summary>

The approximation stays below the value with error smaller than one dyadic step.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E014 — Solution

Each value is at most \(1.37\), the sequence increases as binary precision refines, and its error is below \(2^{-n}\). Therefore it increases to \(1.37\).


</details>

### ANA-CH17-E015 — Exercise 15: Layer cake for a simple function

Verify layer cake for \(f=3\cdot 1_E\) with \(\mu(E)<\infty\).


<details>
<summary>Hint 1</summary>

Determine the superlevel set separately below and above the nonzero height.

</details>
<details>
<summary>Hint 2</summary>

Integrating that step-valued tail function reproduces height times support measure.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E015 — Solution

For \(0\le t<3\), \(\{f>t\}=E\); for \(t\ge 3\), it is empty. Thus
\(\int _0^\infty\mu(\{f>t\})dt=\int _0^3\mu(E)dt=3\mu(E)=\int f\).


</details>

### ANA-CH17-E016 — Exercise 16: Counting measure

Under counting measure on \(N\), when is \(f(n)=1/n^p\) integrable?


<details>
<summary>Hint 1</summary>

Under counting measure, nonnegative integration is summation.

</details>
<details>
<summary>Hint 2</summary>

Apply the familiar convergence threshold for the positive p-series.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E016 — Solution

Its integral is the p-series \(\sum1/n^p\), which is finite exactly when \(p>1\).


</details>

### ANA-CH17-E017 — Exercise 17: Absolute summability

Why is \(f(n)=(-1)^n/n\) not integrable under counting measure although its usual ordered series converges?


<details>
<summary>Hint 1</summary>

Distinguish convergence in a specified order from finite absolute mass.

</details>
<details>
<summary>Hint 2</summary>

The absolute values form the divergent harmonic series.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E017 — Solution

Integrability requires \(\sum|f(n)|=\sum1/n<\infty\), which fails. The ordered alternating series converges conditionally, but positive and negative parts each have infinite mass.


</details>

### ANA-CH17-E018 — Exercise 18: Restriction to a set

For integrable \(f\), define \(\int _E f=\int f\,1_E\). Show \(|\int _E f|\le \int _E|f|\).


<details>
<summary>Hint 1</summary>

Absorb the restriction into the integrand by multiplication with its indicator.

</details>
<details>
<summary>Hint 2</summary>

Apply the whole-space triangle inequality to that restricted function.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E018 — Solution

Apply the integral triangle inequality to the integrable function \(f\,1_E\); its absolute value is \(|f|\,1_E\).


</details>

### ANA-CH17-E019 — Exercise 19: Finite support measure

If \(f\) is measurable, \(|f|\le M\) almost everywhere on a measurable set \(E\) with finite measure, and \(f=0\) outside \(E\), prove \(f\) is integrable.


<details>
<summary>Hint 1</summary>

Dominate the absolute value by a constant multiple of a finite-measure indicator.

</details>
<details>
<summary>Hint 2</summary>

Monotonicity gives a finite absolute-integral bound.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E019 — Solution

We have \(|f|\le M\,1_E\), so monotonicity gives \(\int |f|\le M\mu(E)<\infty\). Thus \(f\) is integrable.


</details>

### ANA-CH17-E020 — Exercise 20: Nonnegative order exchange

Why is it plausible that a double integral of a nonnegative function may be iterated even when its value is infinite?


<details>
<summary>Hint 1</summary>

Start with indicators, then simple functions and increasing approximation.

</details>
<details>
<summary>Hint 2</summary>

The required extension from rectangles to all product-measurable sets is a separate step; no signed cancellation occurs.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH17-E020 — Solution

Rectangle indicators give the initial calculation. A product-measure/monotone-class extension handles indicators of arbitrary product-measurable sets, hence arbitrary nonnegative simple functions; increasing simple approximations then preserve equality without subtraction. Nonnegativity prevents an undefined cancellation such as \(\infty-\infty\). Tonelli's theorem formalizes these extension steps; rectangles alone do not approximate every measurable set pointwise.


</details>

## ANA-CH17-I001 — Investigation: compare three integration designs

Choose a bounded Riemann-integrable function, the Dirichlet indicator \(1_Q\), and an unbounded but Lebesgue-integrable singularity. For each, construct lower simple approximations, compute or bound their integrals, state whether the Riemann, improper Riemann, and Lebesgue integrals exist, and compare the values when more than one exists. Every failure must identify whether the obstacle is oscillation on intervals, unboundedness, or infinite absolute mass.

## Chapter synthesis

Lebesgue integration is built from order. Indicators inherit measure, simple functions inherit finite additivity, and nonnegative measurable functions inherit their integral as the supremum of simple lower approximations. Positive and negative parts extend the construction only when subtraction is meaningful.

This design makes null changes invisible and monotone limits native. Those features, rather than a larger collection of antiderivative formulas, are what make the integral powerful in probability, Fourier analysis, differential equations, and function spaces.

## Transferred integration summary

The Lebesgue integral begins with measurable indicators and finite simple functions, then uses order to define nonnegative integrals. Signed integration requires the positive and negative masses to avoid indeterminate subtraction, and finite absolute integral gives the stable integrable class. Null changes disappear from the integral but need not preserve continuity or point evaluation. Restrictions, level sets and tail bounds make integral control quantitative. The retained convergence-theorem chapter explains precisely when these constructions permit passage to limits.

## Summary

Threshold sets, countable operations and continuous composition establish measurable inputs. Finite indicator/simple integrals respect measurable partitions, and dyadic height approximation reaches every nonnegative measurable function. Null alterations require completion. The next chapter uses this foundation to define the general integral; the original ANA-CH17 exercise bank remains here with all identities and complete solutions.
