var e=`---
id: deep-dive-functional-analysis-normed-spaces-completeness
title: "Normed spaces and completeness"
license: CC BY-SA 4.0
---

# Normed spaces and completeness

An approximation method can produce vectors that become arbitrarily close to one another without producing a limit inside the space we chose. The difficulty may be the definition of the space itself: we allowed only finite objects, while the successive approximations converge to an infinite one. Completeness is the condition that rules out this particular kind of missing limit.

This **Years 2–3 (L3)** article assumes vector spaces and the Cauchy-sequence language of [Metric Spaces, Open Sets, and Closed Sets](/books/proof-safe-real-analysis/metric-spaces-open-and-closed/). [Fixed Points and Complete Metric Spaces](/books/proof-safe-real-analysis/fixed-points-and-complete-spaces/) supplies further preparation. Our focus is a concrete sequence-space example, rather than the full catalogue of function spaces. The longer [Normed and Banach Spaces chapter](/books/functional-analysis/normed-banach-spaces/) develops that catalogue and its proofs.

## A norm fixes what counts as a small error

A **norm** on a real vector space $X$ assigns a nonnegative number $\\|x\\|$ to each vector, satisfying three conditions:

- $\\|x\\|=0$ exactly when $x=0$;
- $\\|ax\\|=|a|\\,\\|x\\|$ for every real scalar $a$;
- $\\|x+y\\|\\le\\|x\\|+\\|y\\|$.

It defines distance by $d(x,y)=\\|x-y\\|$. A sequence $(x_n)$ is **Cauchy** if, for every $\\varepsilon>0$, all sufficiently late pairs satisfy $\\|x_n-x_m\\|<\\varepsilon$. It converges in $X$ when some $x\\in X$ satisfies $\\|x_n-x\\|\\to0$.

These are different statements. The Cauchy condition compares approximations with one another. Convergence identifies a target belonging to the announced space. A normed space is **complete**, or a **Banach space**, if every Cauchy sequence converges in that space. Its norm is part of the specification: changing how errors are measured can change which sequences are Cauchy.

Completeness does not say that every sequence converges. A sequence can wander or keep its terms far apart. The condition applies only after the Cauchy property has been established.

## Worked example: finite sequences with an infinite limit

Let $c_{00}$ be the real vector space of sequences having only finitely many nonzero coordinates. Use the supremum norm

$$\\|x\\|_\\infty=\\sup_{j\\ge1}|x_j|.$$

For a finitely supported sequence this supremum is finite. Absolute-value properties give positivity and homogeneity. The coordinate estimate $|x_j+y_j|\\le|x_j|+|y_j|$ gives the norm's triangle inequality after taking suprema.

Define $a^{(n)}$ by keeping the first $n$ coordinates of the sequence $(1,1/2,1/3,\\ldots)$ and replacing the rest by zero. Each $a^{(n)}$ belongs to $c_{00}$. For $m>n$, its difference from $a^{(m)}$ has coordinates $1/(n+1),\\ldots,1/m$ where they differ. Consequently

$$\\|a^{(m)}-a^{(n)}\\|_\\infty=\\frac1{n+1}.$$

Given $\\varepsilon>0$, choose $N$ with $1/(N+1)<\\varepsilon$. Any two distinct indices at least $N$ satisfy the Cauchy bound, using the smaller index in the displayed formula; equal indices give zero difference. Thus the sequence of finite sequences is Cauchy.

It has no limit in $c_{00}$. Indeed, convergence in supremum norm implies convergence in each coordinate, because $|x_j-y_j|\\le\\|x-y\\|_\\infty$. For a fixed coordinate $j$, every $a^{(n)}_j$ with $n\\ge j$ equals $1/j$. Any norm limit would therefore have coordinate $1/j$ for every $j$. That sequence has infinitely many nonzero coordinates and is not in $c_{00}$.

We have proved a missing-limit claim without guessing a numerical approximation. The approximations are Cauchy in the stated norm, and every possible limit is excluded from the stated space. Hence $c_{00}$ with the supremum norm is not complete.

## Enlarging a space and closing a subspace

The missing sequence does belong to $c_0$, the space of sequences tending to zero. In the same supremum norm, the error from its $n$-th finite truncation is $1/(n+1)$, tending to zero. This shows what an enlargement can repair in this example. The full book proves that $c_0$ is Banach and that finite truncations are dense there.

There is also a useful general principle: a linear subspace $M$ of a Banach space $X$, with its inherited norm, is complete exactly when it is closed in $X$.

For the forward direction from closedness, a Cauchy sequence in $M$ converges in $X$ by completeness of $X$; closedness puts that limit in $M$. Conversely, if $M$ is complete and $x$ lies in its ambient closure, choose $m_n\\in M$ with $\\|m_n-x\\|<1/n$. This sequence is Cauchy and therefore has a limit in $M$. Uniqueness of metric limits identifies that limit with $x$, so $x\\in M$. Thus $M$ is closed.

The ambient-completeness hypothesis matters in the closed-to-complete direction. Every space is closed in itself, including an incomplete normed space. Closedness alone cannot manufacture an ambient limit that does not exist.

## Completeness is different from compactness

In a compact metric space every sequence has a convergent subsequence. A Banach space need not give such subsequences for bounded sequences. In $c_0$ with the supremum norm, let $e_n$ have a single one in coordinate $n$ and zeros elsewhere. All these vectors have norm one, but distinct ones are distance one apart.

No subsequence is Cauchy, and therefore none can converge. This does not contradict completeness: its hypothesis was never met. Infinite-dimensional examples require separate arguments for compactness, boundedness and convergence; the finite-dimensional closed-and-bounded compactness rule cannot be transferred just by retaining the word “norm”.

## Exercises

### Exercise 1
<a id="deep-dive-functional-analysis-normed-spaces-completeness-ex-1"></a>
Prove that no subsequence of the vectors $e_n$ above is Cauchy. Explain why a complete space may nevertheless contain this sequence.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use a fixed positive error threshold smaller than the distance between distinct vectors.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A subsequence still has distinct selected coordinate positions arbitrarily far along its index list.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Distinct $e_n,e_m$ differ by one in at least one coordinate and by no more than one anywhere, so their distance is one. With $\\varepsilon=1/2$, every tail of any subsequence contains two points whose distance exceeds the threshold. Thus no subsequence is Cauchy. Completeness requires limits for Cauchy sequences only; it promises nothing about this separated sequence.
</details>

### Exercise 2
<a id="deep-dive-functional-analysis-normed-spaces-completeness-ex-2"></a>
On the same space $c_{00}$, use instead $\\|x\\|_1=\\sum_j|x_j|$. Prove that the finite truncations $a^{(n)}$ from the worked example are not Cauchy in this norm.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compare the $n$-th truncation with the $2n$-th.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
There are $n$ new coordinates, and each is at least $1/(2n)$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The distance is $\\sum_{j=n+1}^{2n}1/j\\ge n/(2n)=1/2$. For every index threshold, choose $n$ beyond it; both $n$ and $2n$ are then late indices while their distance is at least $1/2$. Taking, for example, $\\varepsilon=1/4$ disproves the Cauchy condition. The same underlying vectors can therefore be Cauchy under one norm and not under another.
</details>

## Continue into the book

A norm chooses the error measure; completeness ensures that every Cauchy approximation has a target inside the chosen space. Neither boundedness nor the existence of limits in some larger space is a substitute. Continue to [Normed and Banach Spaces](/books/functional-analysis/normed-banach-spaces/) for complete-space constructions, and [Hilbert space and projection](/articles/functional-analysis-hilbert-space-projection/) for a geometric theorem whose existence proof uses completeness.
`;export{e as default};