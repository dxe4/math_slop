var e=`---
parent_id: book-dynamical-systems-first-course
chapter_id: fractals-dimension
title: "Fractals and Dimension"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Fractals and Dimension

An attractor may occupy a large region of a drawing while having zero area, and a countable set may be dense in a square. Neither visual extent nor point count is an adequate description of geometric size. Dimension asks how the amount of information needed to cover a set grows as the observation scale shrinks. Different definitions make different choices about covers, and those choices matter.

This chapter develops box dimension through exact covering estimates. We also define Hausdorff dimension, prove useful upper bounds, and identify the additional theorem behind familiar self-similar formulas. The [fractal orientation article](../../deep-dives/fractals-by-iteration.md) remains available as a gentler introduction and is credited as a seed; its text and exercises are unchanged. Here we supply a new proof-based treatment appropriate after real analysis.

Required preparation is logarithms, geometric series, compactness and limits. The construction of a Cantor set connects naturally with symbolic addresses from the [chaos chapter](chaos-lyapunov-exponents-horseshoe.md). The measure-theoretic refinement is optional: our elementary box-dimension proofs do not assume measure theory.

## Covering numbers and the meaning of scale

**Definition 13.1 (Box dimensions).** For a nonempty bounded set $K\\subset\\mathbb R^d$, let $N_\\epsilon(K)$ be the least number of sets of diameter at most $\\epsilon$ needed to cover $K$. The lower and upper box dimensions are
$$
\\underline{\\dim}_{B}K=\\liminf_{\\epsilon\\downarrow0}
\\frac{\\log N_\\epsilon(K)}{\\log(1/\\epsilon)},\\qquad
\\overline{\\dim}_{B}K=\\limsup_{\\epsilon\\downarrow0}
\\frac{\\log N_\\epsilon(K)}{\\log(1/\\epsilon)}.
$$
If they agree, their common value is the box dimension.

Boundedness makes the covering number finite at each positive scale. One can instead count a fixed grid of cubes, balls or intervals; in a fixed Euclidean dimension these conventions differ by constants and fixed rescalings of $\\epsilon$, which do not change the limiting exponent. They can nevertheless change finite-scale counts, so an empirical calculation must state its convention.

If $N_\\epsilon$ behaves like a constant times $\\epsilon^{-s}$, then its logarithm is approximately $s\\log(1/\\epsilon)$ plus a bounded term. The quotient isolates the exponent. A multiplicative constant contributes a term divided by an unbounded denominator and disappears. The definition does not assume a power law exists: lower and upper dimensions remain meaningful when the quotient oscillates.

**Proposition 13.2 (A scale-sandwich principle).** Suppose $0<r<1$, $a>1$, and constants $c,C>0$ satisfy
$$c\\,a^n\\le N_{r^n}(K)\\le C\\,a^n$$
for all sufficiently large integers $n$. Then $\\dim_BK=\\log a/\\log(1/r)$.

*Proof.* For $r^{n+1}<\\epsilon\\le r^n$, monotonicity gives
$$N_{r^n}(K)\\le N_\\epsilon(K)\\le N_{r^{n+1}}(K).$$
Thus the logarithmic numerator is squeezed between $n\\log a+\\log c$ and $(n+1)\\log a+\\log C$, while the denominator lies between $n\\log(1/r)$ and $(n+1)\\log(1/r)$. Dividing the corresponding positive bounds and letting $n$ grow gives the same limit. Initial scales and fixed constants have no effect. ∎

The principle also tolerates a fixed scale factor multiplying $r^n$. This follows by shifting the logarithmic denominator by a constant. It is useful when a geometric construction gives diameters $\\sqrt2r^n$ rather than exactly $r^n$.

**Example 13.3 (Interval and square).** For $[0,1]$, intervals of length $\\epsilon$ give an upper bound $\\lceil1/\\epsilon\\rceil$; any finite cover by sets of diameter at most $\\epsilon$ can be replaced by intervals of that length, whose total length must be at least one. Hence $N_\\epsilon\\ge1/\\epsilon$ and the box dimension is one. For the unit square, any diameter-$\\epsilon$ set lies in an axis-aligned square of side $\\epsilon$, so area gives $N_\\epsilon\\ge\\epsilon^{-2}$. A grid with cell side $\\epsilon/\\sqrt2$ covers the square using at most $(\\lceil\\sqrt2/\\epsilon\\rceil)^2$ cells of diameter at most $\\epsilon$. Its dimension is two. The constants depend on cover shape, but the exponent does not.

## Constructing and measuring the middle-third Cantor set

Begin with $C_0=[0,1]$. Remove the open middle third of every retained interval to form $C_{n+1}$ from $C_n$. Define $C=\\bigcap_{n\\ge0}C_n$. At stage $n$ there are $2^n$ closed intervals of length $3^{-n}$. They have disjoint interiors and positive gaps between distinct stage-$n$ intervals.

**Proposition 13.4 (Elementary Cantor properties).** The set $C$ is nonempty, compact, uncountable and has no isolated points. It contains no nontrivial interval, and its total length is zero.

*Proof.* The stages are nested nonempty compact sets, so their intersection is nonempty and compact. Every binary sequence $\\omega$ gives a point
$$x(\\omega)=\\sum_{j=1}^\\infty\\frac{2\\omega_j}{3^j}\\in C.$$
If two sequences first differ at coordinate $k$, their leading difference has magnitude $2/3^k$, while the maximum possible tail cancellation is $1/3^k$. Their points are therefore distinct. Since binary sequences are uncountable by the diagonal argument, so is $C$.

For any point and any stage-$n$ interval containing it, the two endpoints belong to $C$; at least one differs from the point and is within $3^{-n}$. Thus there are no isolated points. Any proposed interval in $C$ would, for sufficiently large $n$, be longer than a stage-$n$ component and could not fit without crossing a removed gap. Finally $C$ is covered at stage $n$ by intervals with total length $(2/3)^n$, tending to zero. This proves zero outer length. ∎

Uncountability and zero length coexist. The construction removes enough length to make the limiting cover arbitrarily small while retaining infinitely many independent address choices. This is a concrete reason that dimension can be more informative than either cardinality or ordinary length alone.

**Theorem 13.5 (Cantor box dimension).** The middle-third Cantor set has box dimension $\\log2/\\log3$.

*Proof.* Stage-$n$ intervals cover $C$, giving $N_{3^{-n}}(C)\\le2^n$. Select the left endpoint of each such interval. All these endpoints belong to $C$, and the distance between distinct selected points is at least $2\\cdot3^{-n}$ because a smallest gap has length $3^{-n}$. A set of diameter at most $3^{-n}$ therefore contains at most one selected point. Hence $N_{3^{-n}}(C)\\ge2^n$. The scale-sandwich principle gives the result. ∎

**Example 13.6 (A concrete covering estimate).** At scale $3^{-5}=1/243$, the construction gives exactly $2^5=32$ covering intervals under our diameter convention. At an intermediate scale between $1/729$ and $1/243$, monotonicity bounds the covering number between 32 and 64. We do not need its exact value at every intermediate scale to determine the limiting exponent. This is an important proof technique: a geometric sequence of well-controlled scales plus monotonicity can settle a continuum of possible scales.

The Cantor set is self-similar:
$$C=\\frac13C\\ \\cup\\ \\left(\\frac23+\\frac13C\\right).$$
The heuristic equation $2(1/3)^s=1$ predicts the exponent just proved. It succeeds here because the pieces are separated, and we established both an upper cover and a lower separation bound. Merely counting formal copies would prove only an upper estimate if those copies overlapped heavily.

## Products and another self-similar construction

For the Cantor dust $C\\times C$, stage-$n$ squares give $4^n$ pieces of side $3^{-n}$ and diameter $\\sqrt2\\,3^{-n}$. A lower bound comes from the Cartesian product of the selected Cantor endpoints: it has $4^n$ points, and distinct points are at Euclidean distance at least $2\\cdot3^{-n}$. A set of diameter $3^{-n}$ contains at most one. These bounds at fixed multiples of the same scales give
$$\\dim_B(C\\times C)=\\frac{\\log4}{\\log3}.$$
This proves the product dimension for this particular construction. General product-dimension identities can require qualifications, especially for lower box dimensions; we do not infer a universal rule from this example.

**Example 13.7 (The Sierpiński triangle).** Start with an equilateral triangle of side one and retain the three corner triangles of side one half at each step. At stage $n$, there are $3^n$ upward triangles of diameter $2^{-n}$, giving an upper cover. All their vertices remain in the limiting set. The triangular lattice spacing is $2^{-n}$, so distinct vertices are at least that far apart. At most six triangle corners can meet at one lattice vertex, since each corner has angle $\\pi/3$ and the triangle interiors are disjoint. The $3\\cdot3^n$ vertex incidences therefore yield at least $3^n/2$ distinct vertices. A set of diameter $2^{-n-1}$ contains at most one of them. Thus the covering number is bounded above and below by constant multiples of $3^n$ at fixed multiples of the scale $2^{-n}$. The box dimension is $\\log3/\\log2$.

The retained area at stage $n$ is $(3/4)^n$ times the original area, tending to zero. The diameter remains one because the original vertices persist. Again, zero area does not mean small extent or finitely many points. Dimension records an intermediate scaling rate rather than an intermediate ordinary area.

## Hausdorff dimension and why it differs

**Definition 13.8 (Hausdorff measure and dimension).** For $s>0$ and $\\delta>0$, put
$$
\\mathcal H_\\delta^s(K)
=\\inf\\left\\{\\sum_j(\\operatorname{diam}U_j)^s:
K\\subseteq\\bigcup_jU_j,\\quad \\operatorname{diam}U_j\\le\\delta\\right\\},
$$
where countable covers are allowed. Let $\\mathcal H^s(K)=\\lim_{\\delta\\downarrow0}\\mathcal H_\\delta^s(K)$. Hausdorff dimension is the threshold $\\dim_HK=\\inf\\{s\\ge0:\\mathcal H^s(K)=0\\}$, with the usual dimension-zero convention.

The covers can use many different sizes at once. Box dimension instead asks how many pieces are needed at one common observation scale. This difference is especially visible for sets with sparse or highly uneven structure. The infimum in the Hausdorff definition also means that one attractive covering scheme may fail to be optimal.

For the Cantor set, the stage-$n$ cover has total $s$-cost $2^n3^{-ns}=(2\\cdot3^{-s})^n$. If $s>\\log2/\\log3$, this tends to zero, proving $\\dim_HC\\le\\log2/\\log3$. A lower bound requires controlling every countable small-scale cover, not only our preferred stage covers. The equality is a special case of Hutchinson's self-similar-set theorem under the open set condition, cited below. We have proved the box equality and Hausdorff upper bound directly; we do not present the latter as a full proof of the Hausdorff equality.

The cited theorem states that for contracting similarities satisfying the open set condition, the invariant compact set has Hausdorff dimension equal to the solution of $\\sum_i r_i^s=1$. Its proof and positivity statements use further geometric measure theory. The condition requires a nonempty bounded open set whose images are contained in it and pairwise disjoint. Boundary contact can be allowed; uncontrolled overlap cannot.

**Example 13.9 (An overlap counterexample).** Take two identical similarities $S_1(x)=x/3$ and $S_2(x)=x/3$. Their unique nonempty compact invariant set is $\\{0\\}$: if $K=(1/3)K$, its maximum absolute value $M$ satisfies $M=M/3$, hence $M=0$. The formal equation $2(1/3)^s=1$ would give a positive number, but the actual dimension is zero. Counting the same piece twice does not create geometric complexity. The open set condition fails because the two images coincide.

A different caution comes from $Q=\\mathbb Q\\cap[0,1]$. Every finite cover of $Q$ by diameter-bounded sets can be replaced by their closures without enlarging diameters; its finite closed union then covers $\\overline Q=[0,1]$. Consequently $Q$ and the interval have the same box covering numbers and box dimension one. Yet $Q$ has Hausdorff dimension zero: enumerate its points and cover point $j$ by an interval of length $\\delta2^{-j}$. For every $s>0$, the total $s$-cost is $\\delta^s\\sum_j2^{-js}$, tending to zero as $\\delta$ decreases. Countable density is not enough to make Hausdorff dimension positive.

## Coordinates, data and attractor pictures

**Proposition 13.10 (Bi-Lipschitz invariance of box dimension).** Suppose $h:K\\to h(K)$ satisfies $a|x-y|\\le|h(x)-h(y)|\\le b|x-y|$ with $a,b>0$. Then lower and upper box dimensions are preserved.

*Proof.* Intersect any cover with $K$ before applying $h$. A diameter-$\\epsilon$ cover becomes a diameter-$b\\epsilon$ cover, so $N_{b\\epsilon}(h(K))\\le N_\\epsilon(K)$. Apply the same argument to $h^{-1}$, whose Lipschitz constant is $1/a$, for the reverse comparison. Fixed rescalings of $\\epsilon$ do not affect the logarithmic limiting exponents. ∎

A well-conditioned linear change of physical units therefore preserves the theoretical dimension while changing finite-scale counts. A general continuous map can collapse a set to a point, so continuity alone does not preserve dimension. Even a singular coordinate transformation can distort scaling substantially.

For numerical data, there is an unavoidable finite-scale window. A finite point cloud has box dimension zero in the literal limit: at scales below its minimum nonzero separation, the covering number is its finite cardinality. The nonzero slope fitted over accessible scales estimates properties of an underlying set only through additional assumptions about sampling, noise and resolution. At very coarse scales the whole cloud occupies one or a few boxes; at very fine scales individual points or noise dominate. A plausible middle range is a diagnostic, not an asymptotic proof.

For a dynamical attractor, specify the invariant set and sampling mechanism before fitting a dimension. One trajectory may sample only part of the set, spend unequal time in different regions, or remain near a transient. Changing the observation projection can lower dimension by identifying different states. The Lorenz plot in two coordinates is not the full three-dimensional invariant geometry. A Lyapunov-based dimension formula also requires its own theorem; it is not automatically equal to Hausdorff or box dimension.

A useful investigation records several scales, counts, grid offsets and sampling lengths, then examines whether a slope is stable across a defensible range. It reports the fitted range and uncertainty rather than one unexplained decimal. Exact constructions provide comparison cases where upper and lower estimates are independently known. That combination of definitions, bounds and numerical caution is the durable meaning of “fractal dimension.”

## Smooth graphs and finite unions

**Proposition 13.11 (Dimension of a finite union).** If bounded nonempty sets $K_1,\\ldots,K_j$ each have a box dimension, their finite union has box dimension equal to the largest of those dimensions.

*Proof.* Every cover of the union covers each member, while concatenating covers of the members covers the union. Therefore
$
\\max_i N_\\epsilon(K_i)
\\le N_\\epsilon\\!\\left(\\bigcup_iK_i\\right)
\\le\\sum_iN_\\epsilon(K_i)
\\le j\\max_iN_\\epsilon(K_i).
$
Taking logarithms changes the maximum count by at most $\\log j$. After division by $\\log(1/\\epsilon)$ this discrepancy vanishes. Since there are only finitely many sets and each logarithmic quotient has a limit, their maximum tends to the largest limit. ∎

The word “finite” is necessary. The rational points in an interval are a countable union of singletons, each of dimension zero, but their box dimension is one. Passing from a finite maximum to an infinite union can fundamentally change the covering problem.

For another comparison, let $g:[0,1]\\to\\mathbb R$ be continuously differentiable. Its graph map $h(x)=(x,g(x))$ is bi-Lipschitz. The mean value theorem gives $|g(x)-g(y)|\\le M|x-y|$ with $M=\\max|g'|$, so
$|x-y|\\le\\|h(x)-h(y)\\|\\le\\sqrt{1+M^2}|x-y|.$
The bi-Lipschitz invariance already proved therefore gives box dimension one for the graph. It may bend sharply or oscillate many times, but a bounded derivative on the compact interval prevents a new asymptotic dimension from appearing.

These comparisons help interpret a rough image. Apparent oscillation at several visible scales is not enough to separate a smooth graph with many bends from a genuinely noninteger-dimensional limit. Conversely, an exact fractal can look like a finite collection of straight pieces at a coarse scale. The dimension refers to the mathematical set across arbitrarily small scales, while a display refers to one finite representation.

Projection provides a final caution. Orthogonal projection is Lipschitz, so it cannot increase upper box dimension; its covers have no larger diameter. It need not have a Lipschitz inverse, since different points may project to the same location. A dimension inferred from one planar view of a three-dimensional attractor therefore need not recover the dimension of the original set. State which set and observation map are being measured before comparing numerical values.

## Exercises

### Exercise 1: Finite sets
<a id="fractals-dimension-ex-1"></a>

Prove that any nonempty finite subset of Euclidean space has box dimension zero.

<details>
<summary>Hint 1</summary>

Bound its covering number by its cardinality.

</details>

<details>
<summary>Hint 2</summary>

The logarithmic numerator remains bounded as the scale shrinks.

</details>

<details>
<summary>Solution</summary>

For $M$ points, $1\\le N_\\epsilon\\le M$ at every scale. Hence the quotient lies between zero and $\\log M/\\log(1/\\epsilon)$, tending to zero. Distinct points eventually need separate cover pieces, but the fixed finite number still produces exponent zero.

</details>

### Exercise 2: Cantor length
<a id="fractals-dimension-ex-2"></a>

Find the total stage-$n$ interval length and explain why it proves zero outer length of the limit.

<details>
<summary>Hint 1</summary>

Multiply the number of intervals by each length.

</details>

<details>
<summary>Hint 2</summary>

Every stage covers the limiting set.

</details>

<details>
<summary>Solution</summary>

There are $2^n$ intervals of length $3^{-n}$, so their total length is $(2/3)^n$. The limit set lies in every such cover. Since these totals tend to zero, its outer length is zero, although it remains uncountable and has positive dimension.

</details>

### Exercise 3: Cantor addresses
<a id="fractals-dimension-ex-3"></a>

Show that two distinct binary addresses give distinct points in the Cantor series.

<details>
<summary>Hint 1</summary>

Use their first differing coordinate $k$.

</details>

<details>
<summary>Hint 2</summary>

The maximum tail cancellation is $\\sum_{j>k}2/3^j$.

</details>

<details>
<summary>Solution</summary>

The leading difference is $2/3^k$, whereas the entire tail has magnitude at most $1/3^k$. Their difference is therefore at least $1/3^k>0$. The address map is injective on binary sequences. Ternary ambiguities involving a digit one do not contradict this statement about digits zero and two only.

</details>

### Exercise 4: Intermediate scales
<a id="fractals-dimension-ex-4"></a>

Explain why knowing covering estimates only at $3^{-n}$ can determine the full box-dimension limit.

<details>
<summary>Hint 1</summary>

Covering number is monotone as resolution improves.

</details>

<details>
<summary>Hint 2</summary>

Bracket an arbitrary scale between two successive geometric scales.

</details>

<details>
<summary>Solution</summary>

If $3^{-(n+1)}<\\epsilon\\le3^{-n}$, the covering number lies between the counts at the two endpoints. Their logarithms differ by a bounded additive amount relative to $n$, as do the denominators. The resulting upper and lower quotients have the same limit, giving the full-scale dimension.

</details>

### Exercise 5: Four-corner dust
<a id="fractals-dimension-ex-5"></a>

A planar construction retains four corner squares of scale $1/3$ at each step, giving $C\\times C$. Derive its box dimension.

<details>
<summary>Hint 1</summary>

Use the Cartesian product of separated Cantor endpoints.

</details>

<details>
<summary>Hint 2</summary>

The square diameters differ from side lengths only by $\\sqrt2$.

</details>

<details>
<summary>Solution</summary>

At stage $n$, $4^n$ squares of diameter $\\sqrt2\\,3^{-n}$ cover the set. The product endpoints give $4^n$ points with pairwise distance at least $2\\,3^{-n}$, so a diameter-$3^{-n}$ piece covers at most one. The matching exponential bounds yield $\\log4/\\log3$.

</details>

### Exercise 6: Hausdorff upper bound
<a id="fractals-dimension-ex-6"></a>

Use stage covers to prove $\\dim_H C\\le\\log2/\\log3$. What is missing for equality?

<details>
<summary>Hint 1</summary>

Compute the total $s$-cost of the cover.

</details>

<details>
<summary>Hint 2</summary>

An upper bound does not control every possible cover from below.

</details>

<details>
<summary>Solution</summary>

The cost is $(2\\cdot3^{-s})^n$, tending to zero when $s>\\log2/\\log3$. Thus every such $s$ has zero Hausdorff measure, proving the upper bound. Equality additionally requires a lower bound valid for arbitrary countable small-scale covers, supplied here by the cited self-similar-set theorem.

</details>

### Exercise 7: Dense countable set
<a id="fractals-dimension-ex-7"></a>

Explain how $\\mathbb Q\\cap[0,1]$ can have box dimension one and Hausdorff dimension zero.

<details>
<summary>Hint 1</summary>

Finite common-scale covers see its closure.

</details>

<details>
<summary>Hint 2</summary>

Countable variable-scale covers can shrink around each listed point.

</details>

<details>
<summary>Solution</summary>

Closing each member of a finite cover also covers the interval, so its box counts equal those of $[0,1]$. For Hausdorff measure, enumerate points and use intervals of lengths $\\delta2^{-j}$. Their total $s$-cost tends to zero for every $s>0$. The two covering conventions capture different aspects of size.

</details>

### Exercise 8: Overlapping similarities
<a id="fractals-dimension-ex-8"></a>

Why does counting two copies of $x\\mapsto x/3$ not give a positive-dimensional invariant set?

<details>
<summary>Hint 1</summary>

The two copies coincide exactly.

</details>

<details>
<summary>Hint 2</summary>

Use the maximum absolute value of a compact invariant set.

</details>

<details>
<summary>Solution</summary>

If $K=(1/3)K$, compactness gives $M=\\max_{x\\in K}|x|=M/3$, so $M=0$ and $K=\\{0\\}$. The formal similarity equation counts duplicate pieces. Without a suitable separation condition it need not equal geometric dimension.

</details>

### Exercise 9: Change of units
<a id="fractals-dimension-ex-9"></a>

Show that multiplying all coordinates by a fixed nonzero scalar preserves box dimension.

<details>
<summary>Hint 1</summary>

Relate covers at scale $\\epsilon$ and at scale $|a|\\epsilon$.

</details>

<details>
<summary>Hint 2</summary>

The denominator changes by a constant under fixed rescaling.

</details>

<details>
<summary>Solution</summary>

The dilation is bi-Lipschitz with both distance factors $|a|$. Covering numbers obey $N_{|a|\\epsilon}(aK)=N_\\epsilon(K)$. In the logarithmic quotient, replacing $\\epsilon$ by a fixed multiple changes the denominator by a constant, which vanishes relative to its divergence. Both box dimensions are preserved.

</details>

### Exercise 10: Finite data slope
<a id="fractals-dimension-ex-10"></a>

A thousand measured points give fitted slope 1.6 over five scales. What is their literal box dimension, and what may the slope suggest?

<details>
<summary>Hint 1</summary>

Below the smallest nonzero separation, the count is finite and constant.

</details>

<details>
<summary>Hint 2</summary>

The underlying source of the data is a separate object.

</details>

<details>
<summary>Solution</summary>

The finite set has box dimension zero. The slope may suggest an approximate scaling exponent for an underlying sampled set over the reported range, subject to sampling, noise and grid effects. It is not a proof that the source has dimension exactly 1.6 or that the limit exists.

</details>

## Sources

Original elementary covering proofs and examples. The unchanged [Fractals by Iteration](../../deep-dives/fractals-by-iteration.md) is credited for its introductory triangle, address and finite-resolution perspective.

- John E. Hutchinson, [Fractals and Self-Similarity](https://doi.org/10.1512/iumj.1981.30.30055), Indiana University Mathematics Journal 30 (1981), 713–747; [author's retyped version](https://maths-people.anu.edu.au/~john/Assets/Research%20Papers/fractals_self-similarity.pdf). This is the cited source for the general self-similar-set dimension theorem under the open set condition.
- Steven H. Strogatz, [Nonlinear Dynamics and Chaos](https://www.routledge.com/Nonlinear-Dynamics-and-Chaos/Strogatz/p/book/9780367026509), benchmark for fractal geometry in dynamics.

The Cantor and triangle box dimensions are proved directly. The Cantor Hausdorff lower bound and the general open-set-condition theorem are cited deeper results; the displayed upper-cover argument is explicitly only an upper-bound proof.

## Summary

Dimension quantifies the growth of covering information across scales. Exact upper covers and separated-point lower bounds prove box dimensions for the Cantor set, its dust and the Sierpiński triangle. Hausdorff dimension permits variable-size countable covers and can differ from box dimension, especially for dense countable sets. Separation hypotheses and finite-data limitations are essential. The [complex-dynamics chapter](julia-mandelbrot-sets.md) applies these distinctions to quadratic iteration and escape pictures.
`;export{e as default};