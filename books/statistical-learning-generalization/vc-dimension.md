
# VC Dimension

Finite classes are rare in practice. Linear classifiers, neural networks, and decision trees all define infinite hypothesis classes. This chapter introduces the Vapnik–Chervonenkis (VC) dimension, a combinatorial measure that replaces the literal class size $M$ in uniform convergence bounds. The key insight is that even an infinite class may realize only finitely many label patterns on any fixed sample of size $n$. Counting these patterns, rather than the class itself, yields generalization bounds for infinite classes.

## Shattering and VC dimension

Let $H$ be a class of binary classifiers $h: X \to \{0, 1\}$. A set of inputs $C = \{x_{1}, \dots, x_{m}\} \subseteq X$ is **shattered** by $H$ if for every binary labeling $(y_{1}, \dots, y_{m}) \in \{0, 1\}^{m}$, there exists $h \in H$ such that $h(x_{i}) = y_{i}$ for all $i$.

The **VC dimension** of $H$, denoted $\operatorname{VC}(H)$, is the largest integer $d$ such that some set of size $d$ is shattered by $H$. If no finite maximum exists, $\operatorname{VC}(H) = \infty$.

## Concrete VC dimension computations

**Thresholds on the line.** Let $H = \{h_{a} : a \in \mathbb{R}\}$ with $h_{a}(x) = \mathbf{1}[x \ge a]$. Any single point $\{x_{1}\}$ is shattered: choose $a \le x_{1}$ for label $1$ and $a > x_{1}$ for label $0$. But two ordered points $x_{1} < x_{2}$ cannot be shattered: the labeling $(1, 0)$ requires $a \le x_{1}$ and $a > x_{2}$, which is impossible. Thus $\operatorname{VC}(H) = 1$.

**Intervals on the line.** Let $H = \{h_{a,b} : a < b\}$ with $h_{a,b}(x) = \mathbf{1}[a \le x \le b]$. Two points are shattered: for $x_{1} < x_{2}$, choose an interval outside both points for $(0,0)$, a sufficiently small interval around $x_1$ for $(1,0)$, one around $x_2$ for $(0,1)$, and an interval containing both for $(1,1)$. Three points $x_{1} < x_{2} < x_{3}$ cannot be shattered: the labeling $(1, 0, 1)$ requires an interval containing $x_{1}$ and $x_{3}$ but not $x_{2}$, impossible for a single interval. Thus $\operatorname{VC}(H) = 2$.

**Affine halfspaces in $\mathbb{R}^{d}$.** Let $H$ be the class of homogeneous linear classifiers $h_{w}(x) = \mathbf{1}[w^{T}x \ge 0]$ with $w \in \mathbb{R}^{d}$. The VC dimension is $d$. For affine halfspaces $h_{w,b}(x) = \mathbf{1}[w^{T}x + b \ge 0]$, the VC dimension is $d + 1$.

**Full halfspace argument.** Label the origin and standard basis vectors by signs $s_0,s_1,\ldots,s_d$ in minus one and plus one. Set $b=s_0$ and $w_i=s_i-s_0$; the affine scores at those points are exactly the specified signs. For any $d+2$ points there is a nonzero affine dependence $\sum_i c_ix_i=0$, $\sum_i c_i=0$. Its positive and negative coefficient sets are both nonempty. After normalizing their coefficient sums, they have a common convex combination. Label the positive set one and the negative set zero. A separating affine score would be nonnegative on the first convex combination and strictly negative on the equal second one, impossible. Zero-coefficient points can be labeled arbitrarily. This proves the affine upper bound without importing Radon's theorem.

For homogeneous halfspaces, the standard basis is shattered by choosing the coordinates of w to be the desired signs. Any $d+1$ vectors are linearly dependent. Choose a dependence with at least one positive coefficient, label its positive-coefficient vectors zero and its negative-coefficient vectors one. The sum of coefficient times score would then be strictly negative, whereas linear dependence makes it zero. This proves the homogeneous upper bound, including dependencies whose coefficients have only one sign. ∎

## The growth function and Sauer–Shelah lemma

The **growth function** $\Pi_{H}(n)$ counts the maximum number of dichotomies $H$ realizes on any set of $n$ inputs:

$$\Pi_{H}(n) = \max_{x_{1}, \dots, x_{n}} |\{(h(x_{1}), \dots, h(x_{n})) : h \in H\}|.$$

If $\operatorname{VC}(H) = d < \infty$, the Sauer–Shelah lemma states that for $n > d$,

$$\Pi_{H}(n) \le \sum_{j=0}^{d} \binom{n}{j}.$$

For $1\le d<n$, the convenient polynomial estimate is

$$\sum_{j=0}^{d} \binom{n}{j} \le \left(\frac{en}{d}\right)^{d}.$$

When $d=0$, the sum is $1$ and the quotient estimate is unnecessary.

The growth function is polynomial in $n$ once $n$ exceeds the VC dimension. Before that point, it can be exponential: $\Pi_{H}(n) = 2^{n}$ for $n \le d$.

## Uniform convergence via VC dimension

For iid observations and binary zero-one loss, the complete ghost-sample proof below gives
$$P\{\sup_h|R(h)-\widehat R(h)|>\varepsilon\}
\le4\Pi_H(2n)e^{-n\varepsilon^2/8},\qquad n\varepsilon^2\ge2.$$
Consequently, for $1\le d\le n$, a valid simultaneous radius is
$$\sqrt{\frac8n\left\{d\log(2en/d)+\log(4/\delta)\right\}}.$$
The proof assumes a fixed countable class, or a stated countable pointwise-separable representation giving the same suprema. General uncountable classes require measurable-supremum hypotheses or outer-probability formulations. A binary label-pattern count does not by itself prove a general bounded real-loss theorem. The explicit constants here replace an unspecified universal constant, although they can be conservative.

## VC dimension is not parameter count

A common misconception is that VC dimension equals the number of displayed parameters. This is false: a parameterization may be redundant, constrained, or share weights, and VC dimension is a property of the resulting function class rather than its coordinate count. Margin and norm restrictions define smaller or differently measured classes, while an optimization algorithm's implicit bias concerns which members it reaches and does not change the VC dimension of the original full class. Conversely, a class with finite VC dimension can still be computationally hard to optimize: the existence of a uniform convergence bound does not imply an efficient learning algorithm.

## Worked example: growth function bound

Let $d = 10$ and $n = 1000$. The Sauer–Shelah bound gives

$$\Pi_{H}(1000) \le \left(\frac{e \cdot 1000}{10}\right)^{10} = (100e)^{10} \approx (271.8)^{10} \approx 2.2 \times 10^{24}.$$

The logarithm is $\log \Pi_{H}(1000) \le 10 \log(100e) \approx 10 \cdot 5.605 = 56.05$. The uniform deviation bound is roughly

$$\sqrt{\frac{56.05 + \log(1/\delta)}{1000}}.$$

For $\delta = 0.05$, the square-root factor is $\sqrt{(56.05 + 3.00)/1000} \approx \sqrt{0.059} \approx 0.243$; this is a rough complexity scale rather than the explicit certificate. The proved radius below uses the growth function on $2n$ points and its displayed constant eight; those factors must be retained for a numerical guarantee.

## Sauer–Shelah by a trace recursion

Fix any ordered list of n distinct inputs and let F be the set of binary strings realized there. Remove the last coordinate and call the resulting set of prefixes A. Let B be the prefixes appearing with both last-coordinate labels. A prefix appearing once contributes one string to F, and a prefix appearing twice contributes two, so the cardinality of F equals the cardinality of A plus the cardinality of B.

The trace family A has VC dimension at most d. The prefix family B has VC dimension at most d minus one: if it shattered a set of d earlier coordinates, every such pattern would admit both labels on the final coordinate, so the original class would shatter d plus one points. This gives the recursion bounded by the maximum trace count for n minus one coordinates and dimension d, plus the count for n minus one coordinates and dimension d minus one.

For zero coordinates there is at most one pattern. For VC dimension zero there is also at most one pattern on any finite list: two patterns differing at a coordinate would shatter that single point. Induction using the recursion and Pascal's identity now yields the sum of binomial coefficients through d. When d is at least n, interpret the sum as the full two to the n count. This proof is about trace families, so it does not require a finite parameterization of H.

For the polynomial estimate, set x equal to d divided by n, between zero and one. For every index j at most d, x to the j is at least x to the d. Hence
$$\sum_{j=0}^d\binom nj\le x^{-d}(1+x)^n
\le(n/d)^d e^d.$$
The last step uses one plus x at most exp x. This proves the displayed estimate with its conditions, including the endpoint d equal to n. Dimension zero was already handled separately and never divides by zero.

## Ghost samples convert unknown expectations to observed patterns

Let the loss class be induced by the binary classifiers and zero-one loss, and first assume it is countable. Take an independent ghost sample of size n from the same observation law. On the event that a classifier's empirical-to-population discrepancy exceeds epsilon, choose the first such classifier in a fixed enumeration. Conditional on the original sample, that chosen classifier is fixed for the ghost sample. Its ghost empirical loss has variance at most one divided by four n.

Chebyshev's inequality gives probability at least one half that its ghost empirical loss is within epsilon over two of its population risk, whenever n epsilon squared is at least two. On this ghost event, the difference between the two empirical losses exceeds epsilon over two by the triangle inequality. Integrate over the original sample to obtain
$$P\{\sup_h|R(h)-P_n\ell_h|>\varepsilon\}
\le2P\{\sup_h|P_n\ell_h-P_n'\ell_h|>\varepsilon/2\}.$$
This is a probability symmetrization argument with a specific variance condition. It is different from asserting that an empirical class count can simply replace the literal finite-class count on one sample: the ghost sample is what exposes the relevant joint patterns.

For a pointwise-separable bounded loss class, use a countable subclass whose functions approximate each member at every observation. Finite empirical means converge along those approximations, and dominated convergence gives population means. The suprema therefore agree, so the countable argument extends under that explicit condition. Without such a condition, a measurable selector or supremum cannot be silently presumed.

## Random swaps and the finite-pattern union bound

The joint law of the two iid samples is unchanged if each paired original and ghost observation is independently swapped. Conditional on the pooled observations, use independent fair signs to indicate these swaps. For a fixed classifier, the difference of empirical losses becomes the average of signs times fixed numbers between minus one and plus one. The moment-generating-function proof in the finite-class chapter bounds its two-sided tail at threshold epsilon over two by twice exp of minus n epsilon squared over eight.

Although the class may be infinite, its loss vectors on the pooled observations have at most the growth-function count on twice n inputs. The observed binary outcome labels only complement selected classifier bits; they cannot increase this count. Repeated inputs reduce, rather than enlarge, the possible patterns. Conditional on the pool, apply the finite union bound to those vectors. Averaging over the pool leaves the same deterministic growth bound. Combine with the ghost factor two to obtain the four-times-growth tail inequality stated above.

Selecting the radius so that this tail bound equals delta automatically meets the variance condition, since its logarithm is at least log four. Sauer–Shelah then produces the explicit finite-VC radius. An empirical risk minimizer has within-class excess risk at most twice that radius, with an additional objective gap for an approximate optimizer. All these claims concern iid sampling, a fixed class and the binary loss under the declared law.

### Worked example: exact threshold growth

On n distinct ordered real inputs, an increasing threshold can label a final segment one and the preceding segment zero. There are exactly n plus one choices, including all zero and all one. Every choice is achievable by putting the threshold between successive sites or outside the list. Thus threshold growth is exactly n plus one and attains the dimension-one Sauer bound. Its parameters range continuously, but its observed pattern count is linear.

### Worked example: exact interval growth

A single interval selects either the empty set or one contiguous nonempty block of the ordered sites. Choosing the first and last included site gives n times n plus one divided by two possible nonempty blocks. The empty pattern adds one. This equals the sum of the first three binomial coefficients, attaining the dimension-two Sauer bound. The count concerns label patterns on the sample, not a count of the infinitely many numerical endpoint pairs.

## What finite VC dimension does not decide

The bound can exceed the entire possible risk range, in which case it is valid but uninformative. It does not say that every empirical minimizer is efficiently computable or that every finite sample is representative of a changed future population. A data-dependent restriction suggested by an observed margin also needs a theorem that accounts for that choice; changing a class after viewing data is not repaired merely by computing its final VC dimension.

Conversely, an algorithm can ignore most of a highly expressive class and still have a useful algorithm-specific guarantee. The stability chapter addresses that route. Combinatorial dimension describes what the class can realize, while optimization and stability describe what the procedure actually selects. The distinction prevents parameter counts, training interpolation or favorable plots from replacing a stated learning theorem.

## Practice exercises

<a id="vc-dimension-legacy-1"></a>

### Exercise 1

Show that the class of axis-aligned rectangles in $\mathbb{R}^{2}$ has VC dimension $4$.

<details><summary>Hint 1</summary>

Find four sites whose coordinate extremes can each be excluded independently.

</details>

<details><summary>Hint 2</summary>

For five sites choose at most four witnesses of the coordinate extremes.

</details>

<details><summary>Full solution</summary>

Four points at the left, right, top, and bottom vertices of a diamond can be shattered: for each subset, a sufficiently tight axis-aligned rectangle around exactly those selected vertices realizes its labeling. For any five points, choose one witness attaining each of minimum $x$, maximum $x$, minimum $y$, and maximum $y$; this set $E$ has at most four points. Choose a fifth point $q\notin E$. Every axis-aligned rectangle containing all points of $E$ contains their bounding box, hence contains $q$. Therefore the labeling that makes every point of $E$ positive and $q$ negative cannot be realized. The lower and upper bounds give VC dimension $4$.

</details>

<a id="vc-dimension-legacy-2"></a>

### Exercise 2

Compute the Sauer–Shelah bound for $d = 5$ and $n = 20$.

<details><summary>Hint 1</summary>Add binomial coefficients from index zero through five.</details><details><summary>Hint 2</summary>The polynomial estimate can be looser than the exact sum.</details><details><summary>Full solution</summary>

$$\Pi_{H}(20) \le \sum_{j=0}^{5} \binom{20}{j} = 1 + 20 + 190 + 1140 + 4845 + 15504 = 21700.$$

The polynomial bound gives $(20e/5)^{5} = (4e)^{5} \approx (10.87)^{5} \approx 1.52 \times 10^{5}$, which is looser but easier to compute.</details>

### Exercise 3

A researcher claims their neural network with $10^{6}$ parameters must have VC dimension at least $10^{6}$. Why is this claim not necessarily true?

<details><summary>Hint 1</summary>

Ask whether different parameter values can represent the same function.

</details>

<details><summary>Hint 2</summary>

VC dimension counts realizable label patterns, not parameter coordinates.

</details>

<details><summary>Full solution</summary>

VC dimension is a combinatorial property of the represented function class, not a lower bound supplied by a raw parameter count. Parameters can be redundant, constrained, or shared, so one million coordinates need not yield one million independently controllable label patterns. Optimization bias does not alter the VC dimension of that fixed full class; it may motivate analyzing a smaller algorithm-dependent set. Margin or norm bounds likewise concern restricted classes or other complexity measures. Even a valid large VC dimension can give a vacuous numerical bound at realistic $n$.

</details>

<a id="vc-dimension-ex-4"></a>

### Exercise 4

Explain why the family B in the trace recursion loses one unit of VC dimension.

<details><summary>Hint 1</summary>

Every B prefix supports both final labels.

</details>

<details><summary>Hint 2</summary>

A shattered set in B can be enlarged by the final site.

</details>

<details><summary>Full solution</summary>

If B shattered d earlier coordinates, each of their binary patterns would come from a prefix admitting both last-coordinate values. Thus all patterns on those d sites plus the final site would be realized by the original class, contradicting VC dimension d. Therefore B has dimension at most d minus one.

</details>

<a id="vc-dimension-ex-5"></a>

### Exercise 5

What is the growth function of a nonempty class with VC dimension zero?

<details><summary>Hint 1</summary>

Any two differing patterns disagree at some site.

</details>

<details><summary>Hint 2</summary>

That site would then be shattered.

</details>

<details><summary>Full solution</summary>

It is one for every sample length. If two classifiers differed at any site, that one-point set would have both labels and be shattered, contradicting dimension zero. All classifiers therefore agree pointwise, even if their parameter descriptions differ.

</details>

<a id="vc-dimension-ex-6"></a>

### Exercise 6

Prove that observed labels do not increase the number of zero-one loss patterns.

<details><summary>Hint 1</summary>

At each site loss equals classifier bit exclusive-or observed label.

</details>

<details><summary>Hint 2</summary>

A fixed bit complement is a bijection on binary strings.

</details>

<details><summary>Full solution</summary>

For the fixed pooled labels, map each prediction string to its coordinatewise mismatch string. This is an invertible bitwise transformation, so the number of loss strings equals the number of prediction strings on the same list. It is bounded by the growth function; no independence of the labels conditional on the pool is used.

</details>

<a id="vc-dimension-ex-7"></a>

### Exercise 7

Derive the factor four in the proved VC tail bound.

<details><summary>Hint 1</summary>

One factor comes from the ghost event.

</details>

<details><summary>Hint 2</summary>

Another comes from the two-sided random-sign tail.

</details>

<details><summary>Full solution</summary>

Chebyshev gives a ghost-success probability at least one half, yielding a factor two in symmetrization. For each pooled loss vector, the upper and lower sign tails contribute another factor two. The pattern union bound supplies the growth function, giving $4\Pi_H(2n)e^{-n\varepsilon^2/8}$ under the displayed variance condition.

</details>

<a id="vc-dimension-ex-8"></a>

### Exercise 8

For affine halfspaces, why does a convex-hull intersection prevent the labeling used in the proof?

<details><summary>Hint 1</summary>

Affine scores preserve convex combinations.

</details>

<details><summary>Hint 2</summary>

One side has nonnegative scores and the other strictly negative scores.

</details>

<details><summary>Full solution</summary>

The normalized positive and negative parts of an affine dependence give the same convex combination point. The proposed labels require every score in the first combination to be nonnegative and every score in the second to be strictly negative. Their common affine score cannot meet both requirements. The strict inequality comes from the zero label under the declared greater-than-or-equal threshold convention.

</details>

<a id="vc-dimension-ex-9"></a>

### Exercise 9

Give a two-parameter family with VC dimension one.

<details><summary>Hint 1</summary>

Parameterize ordinary thresholds redundantly.

</details>

<details><summary>Hint 2</summary>

Only the sum of two parameters needs to affect the rule.

</details>

<details><summary>Full solution</summary>

Take $h_{a,b}(x)=\mathbf1_{\{x\ge a+b\}}$. Every ordinary threshold occurs, and no other function does. The class therefore has VC dimension one by the threshold proof, although its coordinate representation has two real parameters. Adding any number of unused parameters leaves this dimension unchanged.

</details>

<a id="vc-dimension-ex-10"></a>

### Exercise 10

An exact empirical optimizer is selected on the proved VC uniform event. State its population comparator guarantee and its limitation.

<details><summary>Hint 1</summary>

Apply the deterministic comparison from the decomposition chapter.

</details>

<details><summary>Hint 2</summary>

The comparator is the best member of the same fixed class.

</details>

<details><summary>Full solution</summary>

Its risk is at most the class population infimum plus twice the proved deviation radius, using approximate population comparators if the infimum is not attained. Add eta for an eta-empirical optimizer. This does not remove approximation error relative to unrestricted Bayes risk, prove efficient optimization, or justify transfer to a different target law.

</details>

## Looking backward and forward

This chapter extended uniform convergence from finite classes to infinite classes by counting realizable label patterns. The next chapter, "Rademacher Complexity," develops a more flexible complexity measure that applies to real-valued function classes and captures data-dependent behavior more tightly than the worst-case VC analysis.
