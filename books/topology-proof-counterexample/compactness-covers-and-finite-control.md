
# Compactness, Covers, and Finite Control

Compactness converts local information indexed by an arbitrary family into finite information. That mechanism drives extreme-value theorems, uniform continuity, closed-map results, and product arguments. In general topology it is an open-cover property; sequence and metric characterizations require hypotheses.

## 1. Open-cover definition

An **open cover** of $A \subseteq X$ is a family $\{U_{\alpha}\}$ of open subsets of $X$ with $A \subseteq \cup U_{\alpha}$. The subset $A$ is **compact** when every open cover has a finite subcover. Equivalently, $A$ is compact as a subspace; relative opens can be lifted to ambient opens.

Every finite subset is compact. The empty set is compact because the empty subfamily covers it. Compactness is not the same as closedness or boundedness outside special settings.

In an indiscrete space with at least two points every subset is compact: any cover of a nonempty subset must contain $X$. Thus a proper nonempty compact subset need not be closed unless separation is assumed.

## 2. Closed-set finite intersection property

A family has the **finite intersection property** (FIP) when every finite subfamily has nonempty intersection. A space $X$ is compact iff every family of closed subsets with the FIP has nonempty total intersection.

This is De Morgan's law applied to a cover by complements. If the total closed intersection were empty, the open complements would cover; a finite subcover would contradict FIP. Conversely, a cover with no finite subcover yields closed complements with FIP and empty total intersection.

For a compact subset $K$, the same statement holds for closed subsets of $K$.

## 3. Closed subsets and continuous images

A closed subset $F$ of a compact space is compact: extend a cover of $F$ by the open complement $X\setminus F$, take a finite subcover of $X$, then discard the complement.

A continuous image of a compact space is compact. Pull an open cover of $f(X)$ back to an open cover of $X$, select finitely many, and push their labels forward.

Consequently a continuous real-valued function on a nonempty compact space attains its maximum and minimum. The image is compact in $\mathbb{R}$, hence closed and bounded; its supremum belongs to it.

## 4. Hausdorff consequences

Every compact subset $K$ of a Hausdorff space is closed. For $x \notin K$, separate $x$ from each $y \in K$ by disjoint neighborhoods $U_{y},V_{y}$. Finitely many $V_{y}$ cover $K$; intersect the corresponding $U_{y}$. This gives a neighborhood of $x$ disjoint from $K$.

Therefore a continuous bijection from compact $X$ to Hausdorff $Y$ is a homeomorphism: images of closed subsets are compact, hence closed, so the inverse is continuous.

The Hausdorff condition is material. A proper nonempty subset of an indiscrete space with at least two points is compact but not closed.

## 5. Compactness in metric spaces

For metric spaces, the following are equivalent:

- compactness;
- sequential compactness;
- completeness plus total boundedness.

For the empty space all three properties and the open-cover conclusion are immediate. In the proof and Lebesgue-number statement below, assume $X$ is nonempty.

**Total boundedness** means that for every $\varepsilon>0$, finitely many $\varepsilon$-balls cover the space. It is stronger than boundedness. The closed unit ball of infinite-dimensional $\ell^{2}$ is bounded but not totally bounded because standard unit vectors remain pairwise distance $\sqrt{2}$.

Here is a proof without circular appeals. If $X$ is compact and $(x_n)$ a sequence, the nested closed tail sets $F_N=\operatorname{cl}\{x_n:n\ge N\}$ have the finite-intersection property. Choose $x\in\bigcap_NF_N$ and, successively, indices $n_k>n_{k-1}$ with $x_{n_k}\in B(x,1/k)$. Thus compactness implies sequential compactness. The cover by all $\varepsilon$-balls also has a finite subcover, so $X$ is totally bounded; and a Cauchy sequence with a convergent subsequence converges to the same limit, so $X$ is complete.

Conversely, total boundedness lets one pass successively to an infinite subsequence lying in one ball of radius $2^{-k}$, producing a Cauchy subsequence; completeness gives its limit. Thus complete plus totally bounded implies sequentially compact. If a sequentially compact metric space were not totally bounded, one could inductively choose an $\varepsilon$-separated sequence, which has no convergent subsequence.

Finally, sequential compactness implies cover compactness. If an open cover had no Lebesgue number, choose for each $n$ a set $A_n$ of diameter below $1/n$ that lies in no cover member, and choose $a_n\in A_n$. A convergent subsequence $a_{n_k}\to a$ eventually lies deep inside one cover member containing $a$; since $\operatorname{diam}(A_{n_k})\to0$, the whole corresponding $A_{n_k}$ then lies in that member, a contradiction. With a Lebesgue number $\delta$ and total boundedness, finitely many balls of radius $\delta/3$ cover $X$, and each such ball lies in one original cover member. Hence a finite subcover exists.

Heine–Borel—closed and bounded iff compact—is a finite-dimensional Euclidean theorem, not the definition.

## 6. Lebesgue numbers and uniform continuity

For an open cover of a nonempty compact metric space, there exists $\delta>0$ such that every subset of diameter below $\delta$ lies in one cover member. This **Lebesgue number lemma**, proved in the preceding equivalence argument by contradiction, turns a qualitative cover into one uniform scale. The nonempty hypothesis avoids the degenerate empty-space/empty-cover case for this subset formulation.

If $f:K\to Y$ is continuous from compact metric $K$ to metric $Y$, then it is uniformly continuous. Cover $K$ by neighborhoods on which the image oscillates by less than $\varepsilon$; a Lebesgue number supplies one $\delta$ working across $K$.

Compactness is sufficient, not necessary: $f(x)=x$ on all of $\mathbb{R}$ is uniformly continuous although $\mathbb{R}$ is not compact.

## 7. Tube lemma and finite products

If $Y$ is compact and open $N \subseteq X \times Y$ contains $\{x_{0}\} \times Y$, then some neighborhood $W$ of $x_{0}$ satisfies $W \times Y \subseteq N$. For each $y$, choose $U_{y} \times V_{y} \subseteq N$. A finite set of $V_{y}$ covers $Y$; intersect the corresponding $U_{y}$.

The tube lemma proves $X \times Y$ compact when both factors are compact. Cover the product, obtain for each $x$ a finite cover of the vertical slice and a tube on which it remains valid, then cover $X$ by finitely many such tube bases.

Arbitrary products require Tychonoff's theorem. The finite proof does not extend by infinite intersection.

## 8. Compactness via nets and ultrafilters

A space is compact iff every net has a convergent subnet. It is also compact iff every ultrafilter converges. These characterizations are fully topological, unlike sequence compactness.

For one direction, if a net has no cluster point, each point has a neighborhood avoided by some tail; finitely many such neighborhoods in a compact space would imply a tail is empty. A cluster point yields a convergent subnet. Conversely, a cover with no finite subcover can index choices outside finite unions and build a net with no convergent subnet.

## 9. Local compactness boundary

Local compactness has convention-sensitive definitions outside Hausdorff spaces. In a Hausdorff space, a common version says every point has a neighborhood with compact closure. Locally compact is not compact: $\mathbb{R}$ is locally compact. Compact is not automatically locally compact under every non-Hausdorff convention. Later chapters state the active convention before compactification results.

## 10. Choice, Zorn, and the full product theorem

The arbitrary-product proof works for compact spaces without a Hausdorff assumption. We work in ordinary set theory with the **axiom of choice**: for every indexed family of nonempty sets $(A_i)_{i\in I}$ there exists a function choosing $a_i\in A_i$ for every $i$. Equivalently, their Cartesian product is nonempty. We use its equivalent maximality formulation, **Zorn's lemma**: a nonempty partially ordered set in which every chain has an upper bound has a maximal element. The equivalence of these foundational principles is not a theorem proved in this topology chapter; the point is to identify the principle used, not hide it in a selection instruction.

### Lemma — Proper filters extend to ultrafilters

Let $\mathcal F$ be a proper filter on a set $S$. Under Zorn's lemma it is contained in a maximal proper filter $\mathcal U$. Moreover, for every $A\subseteq S$, exactly one of $A,S\setminus A$ belongs to $\mathcal U$.

**Proof.** Order the proper filters containing $\mathcal F$ by inclusion. This is a nonempty partially ordered set. The union of a nonempty chain is a proper filter: any two of its members lie together in one chain element, so their intersection belongs to that element; upward closure follows in the same way; no member of the chain contains the empty set. An empty chain has $\mathcal F$ as an upper bound. Zorn therefore gives a maximal proper filter $\mathcal U$.

If $A\notin\mathcal U$ and every $F\in\mathcal U$ met $A$, the intersections $F\cap A$ would form a nonempty filter base, generating a proper filter containing $\mathcal U$ and $A$. This would contradict maximality. Hence some $F\in\mathcal U$ misses $A$, and upward closure gives $S\setminus A\in\mathcal U$. Both alternatives cannot belong because their intersection is empty. Conversely this alternative property implies maximality: adding any absent set would force an empty intersection with its complement already in the filter. $\square$

### Lemma — Ultrafilter compactness criterion

Under the preceding extension principle, a space $X$ is compact if and only if every ultrafilter on $X$ converges to at least one point.

**Proof.** Suppose $X$ is compact and $\mathcal U$ is an ultrafilter. The closed sets $\operatorname{cl}F$, for $F\in\mathcal U$, have the FIP: every finite intersection contains the nonempty corresponding intersection of filter members. Choose $x$ in their total intersection. If an open neighborhood $V$ of $x$ were absent from $\mathcal U$, its closed complement would belong to $\mathcal U$. Then $x\in\operatorname{cl}(X\setminus V)=X\setminus V$, impossible. Thus every open neighborhood belongs, and upward closure handles all neighborhoods. The ultrafilter converges to $x$.

Conversely, suppose an open cover has no finite subcover. Its closed complements have the FIP and generate a proper filter. Extend it to an ultrafilter. If this ultrafilter converged to $x$, a cover member $V$ containing $x$ would belong to it, while $X\setminus V$ already belongs. Their empty intersection contradicts properness. Hence convergence of every ultrafilter forces compactness. For the empty space there is no proper filter, and both assertions hold. $\square$

### Lemma — Pushforward preserves ultrafilters

For a function $f:S\to T$ and ultrafilter $\mathcal U$ on $S$, define

$$f_*\mathcal U=\{B\subseteq T:f^{-1}(B)\in\mathcal U\}.$$

This is an ultrafilter on $T$.

**Proof.** Preimages preserve inclusion and intersections and take the empty set to the empty set, so the family is a proper filter. For every $B\subseteq T$, the ultrafilter alternative for $f^{-1}(B)$ places either it or its complement $f^{-1}(T\setminus B)$ in $\mathcal U$. Hence the pushforward has the alternative property and is an ultrafilter. No surjectivity hypothesis on $f$ is required. $\square$

### Theorem — Tychonoff, with choice explicit

Assuming the axiom of choice, an arbitrary product of compact spaces is compact in the product topology.

**Proof.** An empty factor makes the product empty and compact; an empty index set makes the product a singleton and compact. Otherwise choice ensures that the product $P=\prod_iX_i$ is nonempty. Let $\mathcal U$ be an ultrafilter on $P$. Each pushforward $(\pi_i)_*\mathcal U$ is an ultrafilter on the compact factor $X_i$, so its set of limits $L_i$ is nonempty. Apply choice to select $x_i\in L_i$ for every $i$, producing $x\in P$. If the factors are not Hausdorff there may be more than one possible coordinate limit, which is why this selection has been stated explicitly.

A basic neighborhood of $x$ has the form $B=\bigcap_{i\in J}\pi_i^{-1}(V_i)$ for finite $J$ and neighborhoods $V_i$ of $x_i$. Coordinate convergence says that each $\pi_i^{-1}(V_i)$ belongs to $\mathcal U$. The finite-intersection property of a filter gives $B\in\mathcal U$. Every neighborhood of $x$ contains such a basic neighborhood, so it too belongs to $\mathcal U$. Thus $\mathcal U$ converges to $x$. Since every ultrafilter converges, the compactness criterion proves $P$ compact. $\square$

The proof uses finite restrictions at its decisive last step. For the box topology a neighborhood can demand infinitely many filter members simultaneously, and filters are not closed under arbitrary intersections. Nor should one conclude that this proof has established an equivalence between every version of Tychonoff and every choice principle: the strength of the Hausdorff version requires a separate foundational analysis. The theorem proved here is the full compact-space product theorem under explicitly assumed choice.

## 11. Heine–Borel from real completeness

### Theorem — Compact subsets of finite-dimensional Euclidean space

For $K\subseteq\mathbb R^n$, with finite positive integer $n$, compactness is equivalent to closedness and boundedness.

**Proof.** First a closed bounded interval $[a,b]$ is compact. If an open cover had no finite subcover, bisect the interval and keep a half with no finite subcover; otherwise the union of two finite subcovers would cover the original interval. Continue with nested closed halves of lengths $(b-a)2^{-m}$. Real completeness gives a common point $x$: the supremum of the left endpoints is no larger than every right endpoint and belongs to all intervals. A cover member containing $x$ contains a relative neighborhood of $x$, and sufficiently short nested intervals lie in that neighborhood because each contains $x$. Such an interval is covered by one member, contrary to its construction. The one-point interval is immediate.

Finite products of these intervals are compact by the tube-lemma product theorem. A closed bounded $K$ lies in a finite box $[-M,M]^n$ and is closed in it, hence compact. Conversely a compact $K$ is closed because Euclidean space is Hausdorff. It is bounded because the increasing open balls $B(0,m)$, for positive integers $m$, cover it; finitely many suffice, and the largest selected radius contains $K$. The empty subset satisfies both conclusions. $\square$

This proof identifies real completeness and finite dimension separately. The nested-halves step uses completeness, while the finite-box reduction uses only a finite product. In an infinite-dimensional normed space a bounded subset need not fit into a compact finite-dimensional box. Replacing finite dimension by the word bounded would erase the very step that makes the proof work.

## 12. Worked examples of finite control

### Worked example 1 — One compact family of infinite binary data

The space $\{0,1\}^{I}$ is compact for every index set $I$, with discrete compact factors. If $I$ is uncountable, the product chapter proves it is not first-countable. Thus there need not be a countable list of neighborhood tests even on a compact space. To extract a finite conclusion, use the open-cover theorem directly. For example, any continuous real function on this space is bounded and attains its extremes because its image is compact in the real line. None of these conclusions requires replacing arbitrary neighborhoods by sequences.

### Worked example 2 — A uniform scale for an explicit cover

Cover $[0,1]$ by the relative open sets $U=[0,0.7)$ and $V=(0.3,1]$. The number $\delta=0.3$ is a Lebesgue number in the diameter formulation. Indeed, if a nonempty subset $A$ lies in neither member, it has a point $a\ge0.7$ outside $U$ and a point $b\le0.3$ outside $V$. Then its diameter is at least $a-b\ge0.4$, contradicting diameter below $0.3$. The empty subset lies in either member automatically. This calculation explains what the lemma controls: not the distance of every point from the boundary of one fixed set, but the ability to place each sufficiently small subset inside some member of the cover.

### Worked example 3 — Compactness and a change of metric

On $\mathbb R$ compare the usual metric $d(x,y)=|x-y|$ with $\rho(x,y)=\min(1,|x-y|)$. Both generate the usual topology, since balls of radius less than one agree. The whole line is bounded for $\rho$ but is not compact, because compactness depends only on the topology and the cover $(-m,m)$ has no finite subcover. It is not totally bounded for $\rho$: distinct integers are pairwise distance one, so balls of radius less than one-half cannot cover them in finite number. This example isolates why boundedness is not a topological substitute for compactness, even when the topology is metrizable.

## Exercises with complete solutions

### TOP-CH08-E001 — Exercise 1
Prove every finite subset is compact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Choose a covering set for each point.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

There are only finitely many points to cover.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E001 — Solution 1
Given a cover, choose one member containing each point. Only finitely many choices are needed, producing a finite subcover.


</details>

### TOP-CH08-E002 — Exercise 2
Prove compactness is intrinsic to a subspace.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Express each subspace-open set as an ambient trace.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The same finite list of indices covers in either formulation.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E002 — Solution 2
Every subspace-open cover has members $A \cap U_{\alpha}$; the ambient $U_{\alpha}$ cover $A$ and a finite selection works. Conversely, restricting an ambient cover gives a subspace cover.


</details>

### TOP-CH08-E003 — Exercise 3
Prove the FIP characterization.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Take complements of the sets in question.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A missing finite subcover corresponds to nonempty finite closed intersections.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E003 — Solution 3
Take complements. Empty total intersection corresponds to an open cover, and a finite empty intersection corresponds to a finite subcover.


</details>

### TOP-CH08-E004 — Exercise 4
Prove a closed subset of a compact space is compact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Add the open complement of the closed subset to its cover.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

After selecting finitely many covering sets discard that complement.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E004 — Solution 4
Add its open complement to any ambient-open cover. A finite subcover of the whole space remains a finite cover of the closed subset after discarding the complement.


</details>

### TOP-CH08-E005 — Exercise 5
Prove a continuous image of a compact space is compact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Pull an image cover back along the map.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A finite collection of preimages covers the domain and its original sets cover the image.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E005 — Solution 5
Pull a cover back under the continuous map, take finitely many preimages, and use surjectivity onto the image to see the corresponding original sets cover the image.


</details>

### TOP-CH08-E006 — Exercise 6
Prove a compact subset of a Hausdorff space is closed.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Separate an exterior point from each point of the compact subset.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose finitely many of the latter neighborhoods and intersect their paired exterior neighborhoods.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E006 — Solution 6
For each exterior point, separate it from every compact-set point. Finitely many neighborhoods cover the compact set; intersect their paired exterior neighborhoods to obtain an open set disjoint from it.


</details>

### TOP-CH08-E007 — Exercise 7
Show Hausdorffness cannot be dropped in Exercise 6.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

An indiscrete space has very few open sets.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A proper nonempty subset is compact but not closed.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E007 — Solution 7
In an indiscrete space with at least two points every subset is compact, but a proper nonempty subset is not closed.


</details>

### TOP-CH08-E008 — Exercise 8
Prove compact-to-Hausdorff continuous bijections are homeomorphisms.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Show images of closed sets are closed.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compactness handles the domain subsets and Hausdorffness handles their images.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E008 — Solution 8
Closed subsets of the compact domain are compact; their images are compact and hence closed in the Hausdorff codomain. The bijection is closed, so its inverse is continuous.


</details>

### TOP-CH08-E009 — Exercise 9
Prove a compact metric space is bounded.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

First dispose of the empty case.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A finite cover by unit balls gives a bound after comparison with one fixed center.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E009 — Solution 9
If the compact space is empty it is bounded vacuously. Otherwise, the unit balls centered at all points cover it. A finite subcover has centers $x_i$; fixing one center $x_1$, triangle inequalities give a finite upper bound on all distances to $x_1$.


</details>

### TOP-CH08-E010 — Exercise 10
Prove compact metric spaces are totally bounded.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Cover by balls of a fixed positive radius.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compactness selects finitely many of exactly that radius.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E010 — Solution 10
For fixed $\varepsilon$, all open $\varepsilon$-balls cover. Compactness selects finitely many.


</details>

### TOP-CH08-E011 — Exercise 11
Show the unit vectors obstruct compactness of the closed unit ball of $\ell^{2}$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compute the distance between two distinct standard unit vectors.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A convergent subsequence would have to be Cauchy.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E011 — Solution 11
They lie in the ball and any two are distance $\sqrt{2}$. No subsequence is Cauchy, hence none converges. Metric compactness would imply sequential compactness.


</details>

### TOP-CH08-E012 — Exercise 12
Prove a compact metric space is complete.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Take a convergent subsequence of the Cauchy sequence.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The Cauchy property brings every sufficiently late term close to the same limit.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E012 — Solution 12
A Cauchy sequence has a convergent subsequence by sequential compactness. Given epsilon, the full sequence is eventually within epsilon/2 of the subsequence tail, hence within epsilon of its limit.


</details>

### TOP-CH08-E013 — Exercise 13
Why does boundedness not imply total boundedness?


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compare one large-radius bound with bounds at every small radius.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A uniformly separated infinite family defeats total boundedness.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E013 — Solution 13
Boundedness places the whole space in one large ball. Total boundedness demands finitely many balls at every arbitrarily small radius. The separated unit vectors show the latter can fail.


</details>

### TOP-CH08-E014 — Exercise 14
Prove a continuous real function on compact nonempty $K$ attains a maximum.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Look at the compact image in the real line.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its supremum exists and belongs to the image because that image is closed.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E014 — Solution 14
Its image is compact in $\mathbb{R}$, hence closed and bounded. Its supremum exists and belongs to the closed image, so some point maps to it.


</details>

### TOP-CH08-E015 — Exercise 15
State why $1/x$ on $(0,1]$ does not contradict the extreme-value theorem.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Check the hypothesis on the domain before examining the formula.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

An interval missing its limiting endpoint need not be compact.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E015 — Solution 15
The domain is not compact: it is not closed in $\mathbb{R}$, and the cover by $(1/n,1]$ has no finite subcover. The theorem's domain hypothesis fails.


</details>

### TOP-CH08-E016 — Exercise 16
Prove the tube lemma.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Cover the vertical slice by product rectangles inside the open set.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compactness of the second factor makes the required intersection of first-coordinate neighborhoods finite.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E016 — Solution 16
Choose a basic rectangle $U_{y} \times V_{y}$ inside $N$ around each $(x_{0},y)$. Finitely many $V_{y}$ cover compact $Y$; the finite intersection of their $U_{y}$ is the required neighborhood.


</details>

### TOP-CH08-E017 — Exercise 17
Use the tube lemma to prove a product of two compact spaces compact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

For each first-coordinate point find finitely many sets covering its vertical slice.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The tube lemma extends that finite choice to a neighborhood, then compactness of the first factor finishes.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E017 — Solution 17
For each vertical slice, finitely many cover members cover it; their union contains a tube $W_{x} \times Y$. Finitely many $W_{x}$ cover compact $X$. The union of the associated finite cover selections is finite and covers the product.


</details>

### TOP-CH08-E018 — Exercise 18
Prove compactness is preserved by finite products.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Apply the binary product theorem repeatedly.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Include the empty product, which is a singleton.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E018 — Solution 18
Apply Exercise 17 inductively, with a one-factor product as base case. This establishes exactly the finite statement.


</details>

### TOP-CH08-E019 — Exercise 19
Identify the flaw in using that induction for arbitrary products.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Distinguish a finite induction from a statement about all index sets.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The arbitrary-product theorem needs an additional argument.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E019 — Solution 19
There is no final natural-number stage equal to an infinite index set, and product-basic neighborhoods rely on finite rather than infinitely intersected controls. Tychonoff requires a different argument.


</details>

### TOP-CH08-E020 — Exercise 20 — Compactness audit project

#### TOP-CH08-P001 — Project contract: compactness audit
For $[0,1]$, the closed unit ball of $\ell^{2}$, and an infinite indiscrete space, classify compactness, sequential compactness, closedness, boundedness where meaningful, and identify the theorem used.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

State an ambient space before asking about closedness.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use finite-dimensional compactness for the interval, separated vectors for the Hilbert ball, and the definition for the indiscrete space.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH08-E020 — Solution 20
$[0,1]$ is compact by Heine–Borel, sequentially compact by metric equivalence, closed and bounded in $\mathbb{R}$. The $\ell^{2}$ unit ball is closed and bounded but neither compact nor sequentially compact because unit vectors have no convergent subsequence. Every subset of an indiscrete space is compact; every sequence converges to every point and is thus sequentially compact, while only $\varnothing$ and the whole space are closed. Metric boundedness is inapplicable without a chosen metric. The comparison shows exactly which equivalences are metric, Hausdorff, or purely topological.


</details>

## Sources and provenance

The existing mathematical text, exercise identifiers and complete solutions are retained. New examples and staged hints are original Euler prose under CC BY-SA 4.0. For a primary university course reference and the standard progression of point-set topology, see James Munkres, [MIT 18.901, Introduction to Topology](https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/pages/lecture-notes/). Its course materials are separately licensed by MIT; this chapter does not reproduce their text.

Zach Norwood, [Filter Convergence and Tychonoff’s Theorem](https://pi.math.cornell.edu/~zbnorwood/ucla/files/tychultrafilters.pdf), is a primary author reference for the ultrafilter route and its choice conventions. The proof below is written independently.


## Chapter checkpoint

Compactness is finite control extracted from arbitrary open data. Closed-subset and continuous-image theorems need no separation; closedness of compact subsets needs Hausdorffness; sequence and completeness equivalences need a metric. The tube lemma explains finite products, while nets and ultrafilters state the general convergence principle without pretending that sequences always suffice.

## Transferred capstone 5 {#topology-transferred-e005}

Original question identity: [TOP-CH22-E005](topology-proof-atlas-and-capstones.md). The earlier capstone remains available with its own notes; the complete question, staged hints and solution also belong here.

Prove that compact subsets of Hausdorff spaces are closed using a finite-neighborhood argument. Explain why the analogous proof fails without compactness.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Separate an exterior point from each point of the compact subset.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A finite subcover lets you intersect only finitely many neighborhoods of the exterior point.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Let $K \subseteq X$ be compact and let $y \notin K$. For each $x \in K$, Hausdorffness gives disjoint open sets $U_{x}$ containing $x$ and $V_{x}$ containing $y$. The $U_{x}$ cover $K$; compactness gives $x_{1},...,x_{n}$ whose $U_{x_{i}}$ cover $K$. Put $U=\bigcup_{i} U_{x_{i}}$ and $V=\bigcap_{i} V_{x_{i}}$. Then $U$ is an open neighborhood of $K$, $V$ is an open neighborhood of $y$, and they are disjoint. Thus $V \subseteq X\setminus K$, so every point outside $K$ has an open neighborhood outside $K$; the complement is open and $K$ is closed. Without compactness there may be no finite subcover, and an infinite intersection of the $V_{x}$ need not be open.

</details>
