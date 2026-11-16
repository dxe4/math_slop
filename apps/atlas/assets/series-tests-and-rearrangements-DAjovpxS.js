var e=`---
parent_id: book-proof-safe-real-analysis
chapter_id: series-tests-and-rearrangements
title: "Infinite Series, Tests, and Rearrangements"
level: advanced-undergraduate
estimated_minutes: 170
license: CC BY-SA 4.0
---

# Infinite Series, Tests, and Rearrangements

An infinite series looks like addition but behaves like a limit. That distinction explains nearly every surprise in this chapter. Finite sums may be regrouped and reordered freely. Infinite sums inherit those permissions only when convergence is strong enough to justify them.

The central object is not the expression

\\[a_1+a_2+a_3+\\ldots\\]

by itself. It is the sequence of finite partial sums

\\(s_N=\\sum_{n=1}^N a_n\\).

The series \\(\\sum a_n\\) **converges** to \\(S\\) when \\(s_N\\to S\\). Every theorem about series is therefore a theorem about a particular sequence. A convergence test is a way to control that sequence without always finding its limit explicitly.

This chapter assumes sequence limits, completeness, inequalities, and elementary differentiation/integration. It uses the Archimedean scales developed in [Ordered Fields and the Architecture of the Real Numbers](#/item/book-proof-safe-real-analysis?chapter=ordered-fields-and-number-systems).

## 1. The partial-sum contract

Writing

\\[\\sum_{n=1}^\\infty a_n=S\\]

means

\\(\\forall \\varepsilon>0 \\exists N \\forall m\\ge N: |\\sum_{n=1}^m a_n-S|<\\varepsilon\\).

The infinite series is not completed by performing infinitely many additions at once. Each partial sum is finite and governed by ordinary algebra; the limit is governed by analysis.

### Worked example: a telescoping series

Since

\\(1/[n(n+1)]=1/n-1/(n+1)\\),

the \\(N\\)th partial sum is

\\[s_N=(1-1/2)+(1/2-1/3)+\\ldots+(1/N-1/(N+1))\\]

\\(=1-1/(N+1)\\).

Therefore \\(s_N\\to 1\\), and

\\(\\sum_{n=1}^\\infty 1/[n(n+1)]=1\\).

The cancellation is finite at every stage. We do not cancel an undefined infinite tail; we simplify \\(s_N\\), then take its limit.

### Index changes require boundary care

The series \\(\\sum_{n=0}^\\infty a_n\\) and \\(\\sum_{n=1}^\\infty a_n\\) differ by \\(a_0\\). Replacing \\(n\\) by \\(n+1\\) inside a summand also changes the lower bound. Many false calculations with generating functions and probability masses are indexing errors disguised as algebra.

A safe reindexing procedure is:

1. write a finite partial sum;
2. perform the substitution and transform both endpoints;
3. identify any added or removed boundary terms;
4. only then let the endpoint tend to infinity.

## 2. The geometric series is the calibration case

For \\(r\\ne 1\\), the finite identity

\\[\\sum_{n=0}^N r^n=(1-r^{N+1})/(1-r)\\]

was proved without infinite reasoning. If \\(|r|<1\\), then \\(r^{N+1}\\to 0\\), so

\\(\\sum_{n=0}^\\infty r^n=1/(1-r)\\).

If \\(r=1\\), the partial sums are \\(N+1\\) and diverge. If \\(r=-1\\), they alternate between \\(1\\) and \\(0\\). If \\(|r|>1\\), the terms do not even approach zero. Thus the exact convergence region is \\(|r|<1\\).

### Error after truncation

For \\(|r|<1\\), the tail after degree \\(N\\) is

\\(R_N=\\sum_{n=N+1}^\\infty r^n=r^{N+1}/(1-r)\\).

Hence

\\(|R_N|\\le |r|^{N+1}/(1-|r|)\\).

The distinction between the exact signed formula and the absolute error bound matters. If \\(r<0\\), cancellation makes the exact denominator \\(1-r\\), while a guaranteed magnitude bound uses \\(1-|r|\\).

**Planning example.** To approximate \\(\\sum_{n=0}^\\infty (1/3)^n\\) within \\(10^{-6}\\), it is enough to choose \\(N\\) so that

\\((1/3)^{N+1}/(1-1/3)<10^{-6}\\).

Checking powers gives \\(N=12\\) as sufficient. A numerical approximation without such a tail bound is evidence, not certification.

## 3. Convergence forces terms to zero—but not conversely

If \\(\\sum a_n\\) converges, then \\(a_n\\to 0\\). Indeed,

\\(a_n=s_n-s_{n-1}\\),

and both partial-sum sequences on the right tend to the same limit.

The converse is false. The harmonic series

\\[\\sum_{n=1}^\\infty 1/n\\]

diverges even though \\(1/n\\to 0\\).

### The block proof for the harmonic series

Group terms after the first into blocks whose lengths double:

\\(1 + 1/2 + (1/3+1/4) + (1/5+\\ldots+1/8)+\\ldots\\).

The block from \\(n=2^{k-1}+1\\) through \\(2^k\\) contains \\(2^{k-1}\\) terms, each at least \\(1/2^k\\), so its sum is at least \\(1/2\\). After \\(K\\) blocks, the partial sum is at least \\(1+K/2\\), which grows without bound.

This proof does not regroup a convergent series. It chooses a subsequence of finite partial sums and proves that subsequence is unbounded. Therefore the full partial-sum sequence cannot converge.

The **term test for divergence** is one-way:

- if \\(a_n\\) does not tend to zero, then \\(\\sum a_n\\) diverges;
- if \\(a_n\\to 0\\), no conclusion follows without more information.

## 4. The Cauchy criterion removes the unknown sum

Completeness gives a convergence test that does not name the limiting value.

**Cauchy criterion for series.** A real series \\(\\sum a_n\\) converges exactly when, for every \\(\\varepsilon>0\\), there is \\(N\\) such that whenever \\(m>n\\ge N\\),

\\(|a_{n+1}+\\ldots+a_m|<\\varepsilon\\).

This is simply the Cauchy criterion for the partial sums, because

\\(s_m-s_n=a_{n+1}+\\ldots+a_m\\).

### Why completeness is present

If the series converges, its partial sums are Cauchy in any metric space. Conversely, a Cauchy sequence of rational partial sums need not converge within \\(Q\\). The reverse direction is valid in \\(R\\) because \\(R\\) is complete.

The criterion is especially powerful for proving absolute convergence, uniform convergence of function series, and convergence in complete normed spaces. It asks whether every sufficiently late finite block is small, not whether individual terms are small.

## 5. Positive series turn convergence into boundedness

If \\(a_n\\ge 0\\), then the partial sums satisfy \\(s_{N+1}\\ge s_N\\). The monotone convergence theorem therefore gives:

**Positive-series criterion.** A series of nonnegative terms converges exactly when its partial sums are bounded above.

This converts a limit problem into an inequality problem.

### Direct comparison test

Suppose \\(0\\le a_n\\le b_n\\) eventually.

- If \\(\\sum b_n\\) converges, then \\(\\sum a_n\\) converges.
- If \\(\\sum a_n\\) diverges, then \\(\\sum b_n\\) diverges.

For convergence, late partial sums of \\(a_n\\) are bounded by a constant plus partial sums of \\(b_n\\). The second statement is the contrapositive. The tempting reverse implications are invalid: a smaller comparison series can converge while a larger one diverges.

**Example.** Since

\\(0\\le 1/(n^2+3n)\\le 1/n^2\\),

convergence of \\(\\sum1/n^2\\) implies convergence of \\(\\sum1/(n^2+3n)\\). Comparison alone does not give its sum.

### Limit comparison

If \\(a_n,b_n>0\\) eventually and

\\(a_n/b_n\\to L\\) with \\(0<L<\\infty\\),

then \\(\\sum a_n\\) and \\(\\sum b_n\\) have the same convergence behavior. For large \\(n\\), the ratio lies between, say, \\(L/2\\) and \\(3L/2\\), so each series eventually bounds a positive constant multiple of the other.

The boundary cases \\(L=0\\) and \\(L=\\infty\\) need one-sided conclusions. If \\(a_n/b_n\\to 0\\) and \\(\\sum b_n\\) converges, then \\(\\sum a_n\\) converges; divergence of \\(\\sum b_n\\) says nothing about the smaller \\(a_n\\).

## 6. The p-series and the integral test

The series

\\[\\sum_{n=1}^\\infty 1/n^p\\]

converges exactly when \\(p>1\\).

For \\(p\\le 0\\), the terms do not tend to zero. For \\(0<p\\le 1\\), compare with the harmonic series or use the integral test. For \\(p>1\\), the improper integral of \\(x^{-p}\\) converges.

**Integral test.** Suppose \\(f:[1,\\infty)\\to [0,\\infty)\\) is continuous and decreasing, and \\(a_n=f(n)\\). Then \\(\\sum a_n\\) and \\(\\int _1^\\infty f(x)dx\\) either both converge or both diverge.

For decreasing \\(f\\), rectangles yield

\\(\\int _1^{N+1} f(x)dx \\le \\sum_{n=1}^N f(n) \\le f(1)+\\int _1^N f(x)dx\\).

These inequalities compare finite objects. Passing to limits gives the result.

For \\(f(x)=x^{-p}\\) and \\(p\\ne 1\\),

\\(\\int _1^R x^{-p}dx=(R^{1-p}-1)/(1-p)\\).

This stays bounded as \\(R\\to \\infty\\) precisely when \\(p>1\\). At \\(p=1\\), the integral is \\(\\log R\\), which diverges.

### Tail bounds from the same picture

When \\(f\\) is positive and decreasing and the series converges,

\\(\\int _{N+1}^\\infty f(x)dx \\le \\sum_{n=N+1}^\\infty f(n) \\le \\int _N^\\infty f(x)dx\\).

For \\(p=2\\), this gives

\\(1/(N+1)\\le \\sum_{n=N+1}^\\infty1/n^2\\le 1/N\\).

Convergence and approximation error come from the same inequalities.

## 7. Condensation reveals logarithmic boundaries

The **Cauchy condensation test** says that if \\((a_n)\\) is nonnegative and decreasing, then

\\(\\sum a_n\\) converges exactly when \\(\\sum2^k a_{2^k}\\) converges.

In the block from \\(2^k\\) through \\(2^{k+1}-1\\), monotonicity bounds every term between \\(a_{2^{k+1}}\\) and \\(a_{2^k}\\). Multiplying by the block length \\(2^k\\) traps the block sum between comparable condensed terms.

**Example.** For sufficiently large \\(n\\), consider

\\(a_n=1/[n(\\log n)^q]\\).

Condensation produces terms comparable to

\\(2^k/[2^k(k \\log 2)^q]=1/(k \\log 2)^q\\).

Thus the original series converges exactly when \\(q>1\\). This is a finer boundary than the p-series: the extra logarithm can rescue convergence only when its own exponent exceeds one.

Monotonicity is not decorative. Without it, sparse large terms can be hidden between the sampled indices \\(2^k\\).

## 8. Ratio and root tests measure exponential scale

Suppose \\(a_n\\ne 0\\) eventually and

\\(|a_{n+1}/a_n|\\to L\\).

The **ratio test** says:

- if \\(L<1\\), then \\(\\sum a_n\\) converges absolutely;
- if \\(L>1\\), or the ratio eventually stays above \\(1\\), the terms fail to tend to zero;
- if \\(L=1\\), the test is inconclusive.

For \\(L<1\\), choose \\(r\\) with \\(L<r<1\\). Eventually \\(|a_{n+1}|\\le r|a_n|\\), so the tail is bounded by a geometric series.

The **root test** uses

\\(L=\\limsup |a_n|^{1/n}\\).

Again \\(L<1\\) gives absolute convergence and \\(L>1\\) gives divergence. The limsup form handles oscillating exponential rates.

### Boundary discipline

For \\(a_n=1/n^p\\), both \\(a_{n+1}/a_n\\to 1\\) and \\(a_n^{1/n}\\to 1\\) for every \\(p\\). Yet the series converges for some \\(p\\) and diverges for others. At the boundary \\(L=1\\), these tests do not become “probably convergent”; they provide no answer.

**Factorial example.** For \\(a_n=x^n/n!\\),

\\(|a_{n+1}/a_n|=|x|/(n+1)\\to 0\\).

Thus \\(\\sum x^n/n!\\) converges absolutely for every real \\(x\\).

## 9. Absolute convergence is permission to rearrange

A series is **absolutely convergent** when \\(\\sum|a_n|\\) converges. It is **conditionally convergent** when \\(\\sum a_n\\) converges but \\(\\sum|a_n|\\) diverges.

Absolute convergence implies convergence because the Cauchy criterion and triangle inequality give

\\(|\\sum_{k=n+1}^m a_k|\\le \\sum_{k=n+1}^m |a_k|\\).

More importantly, absolute convergence controls every finite selection from a sufficiently late tail. That uniform tail control permits arbitrary rearrangement.

**Theorem 4.1 (Rearrangement for absolute series).** If \\(\\sum a_n\\) converges absolutely and \\(\\pi:N\\to N\\) is a bijection, then

\\(\\sum a_{\\pi(n)}=\\sum a_n\\).

### Proof architecture

Given \\(\\varepsilon>0\\), choose \\(N\\) so the absolute tail after \\(N\\) sums to less than \\(\\varepsilon\\). Because \\(\\pi\\) is a bijection, some rearranged partial sum contains all of the first \\(N\\) original terms. Any discrepancy from the original sum then consists only of selected or omitted tail terms, whose total absolute magnitude is below \\(\\varepsilon\\). The order of the large finite head is irrelevant; the small absolute tail is uniformly harmless.

This proof identifies the exact permission: not convergence alone, but absolute tail control.

## 10. Alternating series: cancellation with a certificate

Suppose \\(b_n\\ge 0\\), \\(b_{n+1}\\le b_n\\), and \\(b_n\\to 0\\). Then the **alternating-series theorem** states that

\\[\\sum_{n=1}^\\infty (-1)^{n-1}b_n\\]

converges.

The even partial sums increase, because \\(s_{2m+2}-s_{2m}=b_{2m+1}-b_{2m+2}\\ge0\\). The odd partial sums decrease, because \\(s_{2m+3}-s_{2m+1}=-b_{2m+2}+b_{2m+3}\\le0\\). Moreover, every even partial sum lies below every odd partial sum: each \\(s_{2m}\\le s_{2m+1}\\), and monotonicity extends this ordering across the two subsequences. Their adjacent difference is one term tending to zero, so the increasing even sums and decreasing odd sums meet at the same limit.

The proof also gives the **alternating remainder bound**:

\\(|S-s_N|\\le b_{N+1}\\).

Moreover, the true sum lies between consecutive partial sums. This is stronger than a bare convergence result.

### Example: the alternating harmonic series

\\[1-1/2+1/3-1/4+\\ldots\\]

converges because \\(1/n\\) decreases to zero. It does not converge absolutely because the harmonic series diverges. Its convergence is therefore conditional.

Dropping monotonicity can break the standard proof, although some nonmonotone alternating-looking series still converge by other arguments. Dropping \\(b_n\\to 0\\) always breaks convergence because the terms then fail the necessary condition.

## 11. Conditional convergence remembers order

For a conditionally convergent real series, the sum of positive terms is \\(+\\infty\\) and the sum of absolute values of negative terms is \\(+\\infty\\). If either side were finite, both sides would be finite because their difference converges, forcing absolute convergence.

The **Riemann rearrangement theorem** says a conditionally convergent real series can be rearranged to converge to any prescribed real number. It can also be rearranged to diverge to \\(+\\infty\\), to \\(-\\infty\\), or to oscillate.

### Construction toward a target \\(T\\)

List the positive terms in their original order and the negative terms in their original order. Take the next unused positive terms until the partial sum first exceeds \\(T\\), then take the next unused negative terms until it first falls below \\(T\\), and repeat. If zero terms occur, list them in their original order and insert the next unused zero after each completed positive-negative stage until they are exhausted. After the possibly exceptional first block when the initial sum already lies on the requested side of \\(T\\), every stage consumes at least one term of each nonzero sign. Hence every positive and negative term is eventually used; the systematic insertion also exhausts the zeros. Thus the construction is a permutation of the original terms. Because the individual terms tend to zero, the overshoots and undershoots shrink. Because both sign subseries are unbounded in their respective directions, the process never gets stuck. The rearranged partial sums converge to \\(T\\).

This does not contradict the absolute rearrangement theorem. Conditional convergence lacks the tail bound needed to make arbitrary finite selections harmless.

### Grouping versus rearranging

Grouping consecutive terms without changing their order preserves a convergent series when each group is finite and the groups exhaust the terms. It selects a subsequence of partial sums with the same limit. Rearrangement changes the order and may change a conditional sum. Inserting parentheses is not automatically the same operation as permuting terms.

## 12. Products of series need their own theorem

Multiplying two finite sums and collecting equal total degrees suggests the **Cauchy product**. If

\\(\\sum a_n\\) and \\(\\sum b_n\\)

start at \\(n=0\\), define

\\(c_n=\\sum_{k=0}^n a_k b_{n-k}\\).

Under absolute convergence of both input series,

\\(\\sum c_n=(\\sum a_n)(\\sum b_n)\\),

and the product series also converges absolutely.

The theorem is not merely distributivity repeated infinitely often. Absolute convergence justifies controlling the double tail and changing the order in which the grid of products \\(a_kb_j\\) is exhausted.

**Geometric example.** For \\(|x|<1\\), squaring

\\[\\sum_{n=0}^\\infty x^n=1/(1-x)\\]

gives

\\(\\sum_{n=0}^\\infty(n+1)x^n=1/(1-x)^2\\),

because there are \\(n+1\\) pairs \\((k,n-k)\\) contributing \\(x^n\\) to the Cauchy coefficient.

Without suitable convergence assumptions, formal multiplication can produce a divergent product or an unjustified value.

## 13. Power series have a radius of reliable algebra

A power series centered at \\(c\\) has the form

\\(\\sum_{n=0}^\\infty a_n(x-c)^n\\).

There is a radius \\(R\\in [0,\\infty]\\) such that the series converges absolutely for \\(|x-c|<R\\) and diverges for \\(|x-c|>R\\). Behavior at the endpoints must be checked separately.

The root test gives the Cauchy–Hadamard relation

\\(1/R=\\limsup |a_n|^{1/n}\\),

with the usual conventions when the limsup is zero or infinite.

Inside any smaller closed interval \\(|x-c|\\le r<R\\), one can dominate the terms by a convergent numerical series. This uniform control permits term-by-term integration and differentiation on the interior, results developed fully in [Uniform Convergence and Limit Interchange](#/item/book-proof-safe-real-analysis?chapter=uniform-convergence).

### Endpoint independence

For \\(\\sum x^n/n\\), the radius is \\(1\\). At \\(x=1\\) it becomes the divergent harmonic series; at \\(x=-1\\) it becomes the convergent alternating harmonic series. A radius theorem deliberately makes no universal endpoint promise.

## 14. Computation: convergence is not numerical safety

A mathematically convergent series can be awkward to compute.

### Slow tails

The alternating harmonic remainder is at most \\(1/(N+1)\\). Six-decimal absolute accuracy by this direct bound requires about one million terms. Convergence alone does not imply efficiency.

### Cancellation

Adding a small positive number to a large floating-point partial sum may lose the small term to rounding. In alternating or mixed-sign series, subtracting nearly equal accumulated quantities can destroy relative accuracy. Absolute convergence does not prevent poor floating-point order.

### A stable summation habit

For nonnegative terms of widely varying magnitude, summing from smallest to largest often reduces loss of small contributions. Pairwise summation and compensated summation track error more reliably. A rigorous numerical report should separate:

- truncation error from the omitted mathematical tail;
- rounding error from finite representation;
- modeling error if the series approximates another object.

**Example.** To compute \\(e^{-20}\\) from its Taylor series, directly summing \\(\\sum(-20)^n/n!\\) creates huge alternating intermediate values before cancellation leaves a tiny answer. Computing \\(e^20\\) from positive terms and taking a reciprocal is often more stable, although overflow and reciprocal error still require analysis.

## 15. Failure atlas

| Tempting claim | Counterexample or missing hypothesis |
| --- | --- |
| \\(a_n\\to 0\\) implies \\(\\sum a_n\\) converges | Harmonic series |
| A convergent positive series must have geometric decay | \\(\\sum1/n^2\\) converges subgeometrically |
| Ratio limit \\(1\\) suggests convergence | \\(1/n\\) and \\(1/n^2\\) give opposite outcomes |
| Every convergent series can be reordered | Conditionally convergent series |
| Parentheses and permutations are the same | Consecutive finite grouping preserves order; permutation need not |
| Pointwise convergence of a power series at one point gives all endpoints | Radius controls the interior; endpoints are separate |
| A small next term certifies a small tail | False without a tail theorem; many later terms may accumulate |
| Mathematical convergence guarantees stable floating-point evaluation | Slow convergence and cancellation can dominate |

## 16. Exercises

Each solution should name the convergence mechanism and, when approximation is requested, distinguish a proven tail bound from a computed observation.

### ANA-CH04-E001 — Exercise 1: telescope with a shifted denominator

Find \\(\\sum_{n=1}^\\infty 2/[(2n-1)(2n+1)]\\) by partial fractions and finite partial sums.

<details><summary>Hint 1</summary>

Look for a difference of reciprocals with denominators 2n-1 and 2n+1.

</details>

<details><summary>Hint 2</summary>

Write the finite partial sum explicitly before cancelling; the last denominator survives.

</details>

### ANA-CH04-E002 — Exercise 2: geometric planning

How many terms, starting at \\(n=0\\), suffice to approximate \\(\\sum(2/5)^n\\) with absolute error below \\(10^{-8}\\) using the geometric tail bound?

<details><summary>Hint 1</summary>

Write the exact geometric remainder after indices zero through N.

</details>

<details><summary>Hint 2</summary>

Solve (5/3)(2/5)^(N+1)<10^-8, remembering that this uses N+1 terms.

</details>

### ANA-CH04-E003 — Exercise 3: term test only

Classify \\(\\sum n/(3n+1)\\) and explain why no stronger test is needed.

<details><summary>Hint 1</summary>

Compute the limit of the summand first.

</details>

<details><summary>Hint 2</summary>

A nonzero term limit immediately rules out convergence.

</details>

### ANA-CH04-E004 — Exercise 4: harmonic blocks

Adapt the block argument to prove \\(\\sum1/(2n-1)\\) diverges.

<details><summary>Hint 1</summary>

Compare each odd reciprocal with the corresponding even reciprocal.

</details>

<details><summary>Hint 2</summary>

Use 1/(2n-1) at least 1/(2n) and the divergence of harmonic partial sums.

</details>

### ANA-CH04-E005 — Exercise 5: Cauchy tails

Use the Cauchy criterion to prove directly that \\(\\sum1/2^n\\) converges, without first naming its sum.

<details><summary>Hint 1</summary>

Bound every finite tail block independently of its upper endpoint.

</details>

<details><summary>Hint 2</summary>

The geometric tail after n is 2^-n, so the partial sums are Cauchy.

</details>

### ANA-CH04-E006 — Exercise 6: comparison direction

Decide which conclusion follows from \\(0\\le a_n\\le 1/n\\): convergence, divergence, or neither. Give examples showing all unjustified conclusions can fail.

<details><summary>Hint 1</summary>

Check whether comparison with a divergent upper bound gives either conclusion.

</details>

<details><summary>Hint 2</summary>

Try both 1/n and 1/n^2 under the same proposed bound.

</details>

### ANA-CH04-E007 — Exercise 7: a rational-function series

Determine whether \\(\\sum_{n=1}^\\infty (3n+2)/(n^3+1)\\) converges.

<details><summary>Hint 1</summary>

Compare leading powers in numerator and denominator.

</details>

<details><summary>Hint 2</summary>

Divide the summand by 1/n^2 and show the quotient tends to a positive finite number.

</details>

### ANA-CH04-E008 — Exercise 8: p-series tail

Find an \\(N\\) that guarantees \\(\\sum_{n=N+1}^\\infty1/n^2<10^{-4}\\) by the integral bound.

<details><summary>Hint 1</summary>

Use the decreasing-function integral estimate for the tail.

</details>

<details><summary>Hint 2</summary>

The integral from N to infinity is 1/N; preserve the requested strict inequality.

</details>

### ANA-CH04-E009 — Exercise 9: logarithmic boundary

Classify \\(\\sum_{n=3}^\\infty1/[n \\log n (\\log \\log n)^2]\\) using a justified test.

<details><summary>Hint 1</summary>

Identify a substitution that differentiates log log x.

</details>

<details><summary>Hint 2</summary>

After checking eventual positivity and decrease, transform the improper integral to an integral of u^-2.

</details>

### ANA-CH04-E010 — Exercise 10: ratio-test boundary

Apply the ratio test to \\(\\sum1/n\\) and \\(\\sum1/n^2\\). Explain exactly what the identical output means.

<details><summary>Hint 1</summary>

Calculate the ratio for the general p-series term n^-p.

</details>

<details><summary>Hint 2</summary>

A limit of one is inconclusive; compare p=1 and p=2 as evidence that the test has reached its boundary.

</details>

### ANA-CH04-E011 — Exercise 11: factorial domination

Prove \\(\\sum n^3/2^n\\) converges using the ratio test.

<details><summary>Hint 1</summary>

Form the ratio of consecutive positive terms.

</details>

<details><summary>Hint 2</summary>

The polynomial factor tends to one while the geometric denominator contributes one half.

</details>

### ANA-CH04-E012 — Exercise 12: alternating approximation

How many terms guarantee that the alternating harmonic partial sum approximates its limit within \\(0.001\\)?

<details><summary>Hint 1</summary>

Use the first omitted magnitude as the alternating remainder bound.

</details>

<details><summary>Hint 2</summary>

Check 1/(N+1)<0.001, distinguishing strict from non-strict tolerance.

</details>

### ANA-CH04-E013 — Exercise 13: conditional versus absolute

Classify \\(\\sum(-1)^{n-1}/\\sqrt{n}\\) as divergent, conditionally convergent, or absolutely convergent.

<details><summary>Hint 1</summary>

Apply the alternating theorem to the magnitudes first.

</details>

<details><summary>Hint 2</summary>

Compare the absolute series with the p-series at exponent one half.

</details>

### ANA-CH04-E014 — Exercise 14: a forbidden rearrangement step

Explain the flaw in the calculation

\\[1-1+1-1+\\ldots=(1-1)+(1-1)+\\ldots=0\\]

and

\\(1-1+1-1+\\ldots=1+(-1+1)+(-1+1)+\\ldots=1\\).

<details><summary>Hint 1</summary>

Write the original partial sums before regrouping.

</details>

<details><summary>Hint 2</summary>

The two bracketings retain different subsequences of a sequence that has no limit.

</details>

### ANA-CH04-E015 — Exercise 15: construct a rearrangement strategy

Describe how to rearrange the alternating harmonic series so its partial sums exceed \\(2\\) infinitely often and fall below \\(1\\) infinitely often.

<details><summary>Hint 1</summary>

Separate unused positive and negative terms in their original orders.

</details>

<details><summary>Hint 2</summary>

Take enough positives to cross 2, then enough negatives to cross 1; justify that each sign supply lasts indefinitely.

</details>

### ANA-CH04-E016 — Exercise 16: a Cauchy product

Use the product of two geometric series to derive \\(\\sum_{n=0}^\\infty(n+1)/3^n=9/4\\).

<details><summary>Hint 1</summary>

Multiply two absolutely convergent geometric series with the same ratio.

</details>

<details><summary>Hint 2</summary>

Count the n+1 pairs contributing to the coefficient of x^n, then set x=1/3.

</details>

### ANA-CH04-E017 — Exercise 17: power-series endpoints

Find the interval of convergence of \\(\\sum_{n=1}^\\infty x^n/n^2\\), checking both endpoints.

<details><summary>Hint 1</summary>

Determine the radius before investigating its boundary.

</details>

<details><summary>Hint 2</summary>

At both endpoints compare absolute values with the convergent square-reciprocal series.

</details>

### ANA-CH04-E018 — Exercise 18: three error sources

Suppose a program approximates \\(\\sum1/n^2\\) by the first million terms in binary floating point and uses the result as a physical model parameter. Name one truncation, one rounding, and one modeling question that must be audited.

<details><summary>Hint 1</summary>

Separate the infinite mathematical sum, its finite evaluation, and its physical use.

</details>

<details><summary>Hint 2</summary>

Ask for a tail bound, an accumulation-of-rounding analysis, and a justification of the physical model and units.

</details>

### ANA-CH04-E019 — Exercise 19: a deceptive next term

Construct a nonnegative convergent series for which \\(a_{N+1}\\) is tiny but the tail after \\(N\\) is at least \\(1000a_{N+1}\\) for infinitely many \\(N\\).

<details><summary>Hint 1</summary>

Use many equal small terms in each block rather than a single isolated term.

</details>

<details><summary>Hint 2</summary>

Choose summable block masses and at least 1000 terms per block so the next term understates the remaining block.

</details>

### ANA-CH04-E020 — Exercise 20: proof dependency audit

Identify where completeness is used in the theorem “absolute convergence implies convergence” and explain why the same proof works in any complete normed vector space.

<details><summary>Hint 1</summary>

Use the triangle inequality to transfer small absolute tails to small signed tails.

</details>

<details><summary>Hint 2</summary>

Completeness enters only when the Cauchy partial sums are assigned a limit in the ambient space.

</details>

## 17. Complete solutions

<details><summary>Solution</summary>

### ANA-CH04-E001 — Solution 1

Partial fractions give

\\(2/[(2n-1)(2n+1)]=1/(2n-1)-1/(2n+1)\\).

Thus the \\(N\\)th partial sum is

\\[(1-1/3)+(1/3-1/5)+\\ldots+[1/(2N-1)-1/(2N+1)]\\]

\\(=1-1/(2N+1)\\).

Its limit is \\(1\\).

</details>

<details><summary>Solution</summary>

### ANA-CH04-E002 — Solution 2

After terms \\(n=0,\\ldots,N\\), the tail is

\\((2/5)^{N+1}/(1-2/5)=(5/3)(2/5)^{N+1}\\).

We need this below \\(10^{-8}\\). Direct checking or logarithms gives \\(N=20\\) as sufficient: \\((5/3)(0.4)^21\\approx 7.33\\cdot 10^{-9}\\), while \\(N=19\\) gives approximately \\(1.83\\cdot 10^{-8}\\). Therefore 21 terms suffice and the bound does not certify 20 terms.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E003 — Solution 3

The terms satisfy

\\(n/(3n+1)\\to 1/3\\ne 0\\).

Therefore the series diverges by the necessary term test. Applying comparison or ratio tests would add work without strengthening the conclusion.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E004 — Solution 4

The sum of the odd reciprocals through \\(2N-1\\) equals

\\(\\sum_{n=1}^N1/(2n-1)\\).

Since \\(1/(2n-1)\\ge 1/(2n)\\), this is at least \\((1/2)\\sum_{n=1}^N1/n\\), whose partial sums are unbounded. Hence the odd-reciprocal series diverges. This comparison is simpler than rebuilding blocks, and it makes the same accumulated-mass mechanism visible.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E005 — Solution 5

For \\(m>n\\),

\\(\\sum_{k=n+1}^m1/2^k\\le \\sum_{k=n+1}^\\infty1/2^k=1/2^n\\).

Given \\(\\varepsilon>0\\), choose \\(N\\) with \\(2^{-N}<\\varepsilon\\). Then every tail block beginning after \\(N\\) has magnitude below \\(\\varepsilon\\). The partial sums are Cauchy, so completeness of \\(R\\) gives convergence. The value was not needed.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E006 — Solution 6

Neither conclusion follows. Choosing \\(a_n=1/n^2\\) gives convergence while satisfying the bound. Choosing \\(a_n=1/n\\) gives divergence while also satisfying it. An upper bound by a divergent series is inconclusive.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E007 — Solution 7

For positive terms,

\\([(3n+2)/(n^3+1)] /(1/n^2)=n^2(3n+2)/(n^3+1)\\to 3\\).

Limit comparison with the convergent p-series \\(\\sum1/n^2\\) proves convergence.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E008 — Solution 8

The integral tail bound gives

\\(\\sum_{n=N+1}^\\infty1/n^2\\le \\int _N^\\infty x^{-2}dx=1/N\\).

To make this strictly below \\(10^{-4}\\), choose \\(N>10000\\); \\(N=10001\\) is certified. The sharper lower-index convention matters if strict inequality is requested.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E009 — Solution 9

Apply the integral test to

\\[f(x)=1/[x \\log x (\\log \\log x)^2]\\]

for sufficiently large \\(x\\), where it is positive and decreasing. With \\(u=\\log \\log x\\), \\(du=dx/(x \\log x)\\), so

\\(\\int dx/[x \\log x (\\log \\log x)^2]=\\int u^{-2}du\\).

The improper integral converges. Therefore the series converges. One can also apply condensation twice with appropriate monotonicity checks.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E010 — Solution 10

For \\(a_n=1/n^p\\),

\\(a_{n+1}/a_n=(n/(n+1))^p\\to 1\\).

Thus the ratio test is inconclusive for both \\(p=1\\) and \\(p=2\\). The identical output does not suggest identical behavior; it says exponential-scale comparison cannot see the polynomial boundary. Other tests show the first diverges and the second converges.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E011 — Solution 11

Let \\(a_n=n^3/2^n\\). Then

\\(a_{n+1}/a_n=((n+1)/n)^3/2\\to 1/2<1\\).

The ratio test gives convergence. Because the terms are nonnegative, this is also absolute convergence.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E012 — Solution 12

The alternating remainder after \\(N\\) terms is at most \\(1/(N+1)\\). We need \\(1/(N+1)<0.001\\), so \\(N+1>1000\\). Thus \\(N=1000\\) gives error at most \\(1/1001<0.001\\). If a non-strict error \\(\\le 0.001\\) were accepted, \\(N=999\\) would suffice.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E013 — Solution 13

The magnitudes \\(1/\\sqrt{n}\\) decrease to zero, so the alternating-series theorem gives convergence. The absolute series is the p-series with \\(p=1/2\\le 1\\), which diverges. Therefore convergence is conditional.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E014 — Solution 14

The original partial sums alternate between \\(1\\) and \\(0\\), so the series diverges. Neither grouping calculation begins with a convergent series, and the second shifts the boundary by leaving an unmatched first term. Parentheses do not manufacture a limit for a divergent partial-sum sequence. Different groupings select different subsequences, revealing rather than resolving the divergence.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E015 — Solution 15

Take unused positive terms until the partial sum exceeds \\(2\\); their subseries diverges, so this is always possible. Then take unused negative terms until the partial sum falls below \\(1\\); the negative magnitudes also have divergent total, so this is always possible. Repeat. Every original term can be included by taking terms in their original sign-subsequence order. The resulting partial sums cross both thresholds infinitely often and therefore do not converge.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E016 — Solution 16

For \\(|x|<1\\), the Cauchy product gives

\\((\\sum x^n)^2=\\sum(n+1)x^n=1/(1-x)^2\\).

Set \\(x=1/3\\). Then

\\(\\sum_{n=0}^\\infty(n+1)/3^n=1/(1-1/3)^2=1/(4/9)=9/4\\).

Absolute convergence justifies the product.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E017 — Solution 17

The root or ratio test gives radius \\(R=1\\). At \\(x=1\\), the series is \\(\\sum1/n^2\\), which converges. At \\(x=-1\\), it is \\(\\sum(-1)^n/n^2\\), which converges absolutely because its absolute series is again \\(\\sum1/n^2\\). The interval of convergence is therefore \\([-1,1]\\).

</details>

<details><summary>Solution</summary>

### ANA-CH04-E018 — Solution 18

Truncation: bound \\(\\sum_{n=1000001}^\\infty1/n^2\\), for example by \\(1/1000000\\). Rounding: determine whether adding late terms to an accumulated sum loses contributions and whether pairwise or compensated summation changes the certified error. Modeling: ask why this mathematical sum is an appropriate physical parameter, what units and calibration connect it to the system, and whether model discrepancy is larger than either numerical error.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E019 — Solution 19

Build blocks. For each \\(k\\), let a block contain \\(1001\\) equal terms of size \\(2^{-k}/1001\\), and place zero or much smaller connector terms between blocks if desired. The total sum over block \\(k\\) is \\(2^{-k}\\), so the whole series converges. At the index \\(N\\) immediately before a block, \\(a_{N+1}=2^{-k}/1001\\), while the remaining portion of that block equals \\(2^{-k}=1001a_{N+1}\\). This occurs for every block. A small next term alone does not bound the number of comparable terms that follow.

</details>

<details><summary>Solution</summary>

### ANA-CH04-E020 — Solution 20

If \\(\\sum|a_n|\\) converges, its tails make

\\[|\\sum_{k=n+1}^m a_k|\\le \\sum_{k=n+1}^m|a_k|\\]

arbitrarily small. Thus the partial sums of \\(\\sum a_n\\) are Cauchy. Completeness is used when concluding that this Cauchy sequence has a limit in the ambient space. In a complete normed vector space, replace absolute value by the norm and use the triangle inequality; the same proof works. In an incomplete normed space, the partial sums may converge only in its completion.

</details>

## ANA-CH04-P001 — Project: convergence and rearrangement audit

Build a proof and computation dossier around three real series: one absolutely
convergent, one conditionally convergent, and one divergent series whose terms
tend to zero. The dossier must contain:

1. a proof of each convergence classification, with the theorem hypotheses
   checked rather than inferred from numerical partial sums;
2. a certified tail bound for the absolutely convergent example and a table
   comparing that bound with observed errors at several cutoffs;
3. an explicit permutation of the conditionally convergent example that
   targets a value different from its original sum, including a proof that the
   construction eventually uses every term exactly once;
4. one Cauchy product calculation, together with the hypothesis that licenses
   passage from finite convolution identities to the infinite product; and
5. a short numerical audit explaining how truncation, cancellation, and
   floating-point order affect the computed evidence.

**Verification standard.** The permutation must be specified as a reproducible
algorithm and justified as a bijection of the original indices. Every computed
claim must be labeled as observation or backed by a displayed error bound.
The divergent example must be rejected by a theorem or a Cauchy-tail witness,
not merely by a finite plot.

## 18. Chapter synthesis

An infinite series is a limit of finite sums. Positive terms invite monotone bounds; absolute values provide rearrangement permission; alternating signs can provide controlled cancellation; conditional convergence makes order part of the data. Ratio and root tests see exponential scale but go silent at their boundary. Integral and condensation tests resolve slower polynomial and logarithmic scales.

The guiding question is never only “does it converge?” Ask also:

- which hypothesis makes the proof work;
- whether the conclusion is absolute, conditional, or merely numerical;
- what tail bound certifies an approximation;
- which algebraic operations remain legal after passing to the limit;
- whether the computation preserves the accuracy promised by the theorem.

These questions become more delicate when each term is a function. Continue to [Uniform Convergence and Limit Interchange](#/item/book-proof-safe-real-analysis?chapter=uniform-convergence) for the conditions that let continuity, integration, and differentiation pass through an infinite limit.

## Summary

A series converges when its finite partial sums converge. Comparison, integral, condensation, ratio and root tests answer different scale questions, while certified tails answer approximation questions. Absolute convergence permits rearrangement and product arguments through Cauchy control; conditional convergence can retain dependence on ordering. Alternating cancellation has its own hypotheses and remainder estimate. Function series add a new question: whether the tail control works uniformly over the input domain.
`;export{e as default};