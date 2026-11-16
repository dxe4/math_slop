
# Why Riemann is not enough

The Riemann integral succeeds for many functions used in elementary calculus. Its definition compares heights over short input intervals. A different kind of question asks whether a function is large only on a set that has negligible length, even if that set meets every interval. Those two viewpoints can disagree about whether an integral exists.

This **Years 2–3 (L3)** article assumes [Riemann Integration](#/books/proof-safe-real-analysis/riemann-integration), including upper and lower sums, and countable sets. We examine one bounded function on a finite interval. The aim is to identify a precise limitation, not to dismiss the Riemann integral or pretend that a new integral makes every limiting operation valid. [Why Measure?](#/books/measure-and-integration/why-measure) is the opening chapter of the longer Measure and Integration route.

## Dense does not mean large in length

The rational numbers are dense in the real line: every interval of positive length contains one. The irrational numbers are dense too. Density describes contact with open intervals. It does not count points or assign length to them.

The rationals are countable, so the rational points of $[0,1]$ can be listed as $q_1,q_2,\ldots$. Given any $\varepsilon>0$, surround $q_j$ by an open interval of length $\varepsilon/2^{j+1}$. These intervals cover all the listed points, while their total length is

$$\sum_{j=1}^{\infty}\frac{\varepsilon}{2^{j+1}}=\frac\varepsilon2<\varepsilon.$$

The intervals may overlap and need not stay inside $[0,1]$. Neither issue damages the upper bound on the cost of the cover. We can cover the entire countable set with intervals of arbitrarily small total length, even though no open interval misses it.

This is the central distinction: density prevents gaps in where a set appears; countability permits an arbitrarily small covering budget. Not every dense set is countable or has such a budget. The whole interval is dense in itself and has length one.

## Worked example: a bounded function with no Riemann integral

Define $f:[0,1]\to\mathbb R$ by

$$f(x)=\begin{cases}1,&x\text{ rational},\\0,&x\text{ irrational}.\end{cases}$$

On every subinterval of positive length, $f$ takes both zero and one. Thus its infimum on that subinterval is zero and its supremum is one. For every finite partition of $[0,1]$, the lower Darboux sum is consequently zero, while the upper sum is the sum of the subinterval lengths, namely one.

Refining the partition cannot shrink this gap. The lower integral is zero and the upper integral one, so the function is not Riemann integrable. Boundedness alone was insufficient; the oscillation persists in every positive-length subinterval.

Now consider what a length-based measure should say. Each singleton has length zero. Countable subadditivity therefore makes the rational set have length zero, in agreement with the explicit small-cover calculation above. The rationals are measurable in the Borel sigma-algebra because each singleton is closed and countable unions are admitted.

For an indicator function, the Lebesgue integral is the measure of the set where it equals one. Under ordinary length measure,

$$\int_{[0,1]} f\,d\lambda=\lambda(\mathbb Q\cap[0,1])=0.$$

The value is not obtained by ignoring difficult points arbitrarily. It follows from the specified measure, its countable-additivity consequences, and the definition of the integral on indicators. Constructing length measure and extending this definition to general measurable functions is a separate part of the full book.

## What the new viewpoint keeps track of

A measure-based integral groups inputs by the values of the function and the sizes of the sets on which those values occur. For this function, all nonzero values occur on a measurable null set. That information remains visible even though the set is dense.

For a Riemann-integrable function on a compact interval, the Lebesgue integral agrees with the Riemann integral. The new theory extends a successful calculation rather than changing its answer. Its advantage is a larger class of integrable functions and more flexible limit theorems, each with hypotheses that still need checking.

The measure must always be named. Counting measure assigns one to a singleton, so countably many points do not have measure zero there. A point mass can put its entire weight on one rational point. The statement “countable sets are null” is correct for ordinary length measure; it is not an axiom shared by all measures.

The choice of measurable sets matters too. A measure is defined on a specified sigma-algebra, rather than being silently available on every subset of every space. The [next article](#/articles/measure-sigma-algebras-measures) explains how that domain is organised.

## Why sample values do not settle this example

Take a regular rational grid in $[0,1]$, and choose a rational sample point in every grid cell. Each sampled function value is one, so the resulting tagged sum is one. Refining these grids never produces zero, even though the Lebesgue integral is zero.

There is no contradiction with the theorem about Riemann sums converging for Riemann-integrable functions: this function fails that hypothesis. Nor does the example claim that every numerical quadrature method fails for ordinary smooth functions. It shows that sampled values without regularity information cannot determine the integral of an arbitrary bounded function.

A mathematical model should therefore specify both its function class and the integral being used. A plot or grid can support a calculation under stated approximation assumptions, but it cannot supply those assumptions by itself.

## Exercises

### Exercise 1
<a id="deep-dive-measure-why-riemann-not-enough-ex-1"></a>
Let $g$ equal one at irrational points of $[0,1]$ and zero at rational points. Determine its lower and upper Darboux integrals and its Lebesgue integral under length measure.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Both kinds of input still occur in every positive-length interval.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
For the measure calculation, use the complement of the countable rational set inside an interval of finite measure.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Every positive-length subinterval has infimum zero and supremum one, so the lower Darboux integral is zero and the upper one is one. Thus $g$ is not Riemann integrable. Its nonzero set is the irrational part of $[0,1]$, whose length is $1-0=1$. Since $g$ is its indicator, the Lebesgue integral is one.
</details>

### Exercise 2
<a id="deep-dive-measure-why-riemann-not-enough-ex-2"></a>
Prove that a finite set $F\subset[0,1]$ has length zero by an explicit interval cover. Then explain which feature of the geometric-budget construction permits the same conclusion for a countably infinite set.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Allocate a small interval-length budget to each of the finitely many points.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
For infinitely many listed points, equal positive budgets would have an infinite sum; use a summable sequence instead.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
If $F$ has $N>0$ points, cover each by an interval of length $\varepsilon/(2N)$. The total is $\varepsilon/2<\varepsilon$. The empty set needs no intervals. Since this works for every positive $\varepsilon$, the finite set has zero outer length and is a measurable finite union of singletons. For a countable list, budgets $\varepsilon/2^{j+1}$ remain positive at every point but have total $\varepsilon/2$. The finite total, not a nonexistent last point of the list, gives the analogous conclusion.
</details>

## Continue into the book

A set can be everywhere dense and still have zero length. That distinction explains a concrete Riemann obstruction and motivates measuring level sets. Continue with [Why Measure? Length, Countability, and Reliable Limits](#/books/measure-and-integration/why-measure) for the opening framework. [From Finite Chance to Measure-Theoretic Probability](#/articles/measure-probability-bridge) is an optional later bridge, with its own stronger preparation.
