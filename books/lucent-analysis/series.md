# Infinite series and control of tails

**Objectives.** Interpret a series through its partial sums; distinguish absolute and conditional convergence; select and justify convergence tests; and bound approximation errors for alternating sums.

**Prerequisites.** Sequence convergence, monotone convergence, and the Cauchy criterion from the sequences lesson.

## An infinite sum is a limit

For a real sequence (aₙ), define its partial sums S_N = a₁ + ⋯ + a_N. The series ∑ₙ₌₁∞ aₙ converges to S when S_N → S. Otherwise it diverges. We do not perform an infinitely long arithmetic operation: we ask whether a sequence of finite operations has a limit.

For |r| < 1, finite algebra gives 1 + r + ⋯ + rᴺ = (1 − rᴺ⁺¹)/(1 − r). Since rᴺ⁺¹ → 0, ∑ₙ₌₀∞ rⁿ = 1/(1 − r). This geometric series supplies comparison bounds throughout analysis. Its indexing begins at zero; changing an initial index changes the finite terms included in the sum.

If a series converges, then aₙ → 0, because aₙ = S_n − S_(n−1). The converse is false. In the harmonic series ∑1/n, the terms indexed from 2ᵏ + 1 through 2ᵏ⁺¹ contribute at least 2ᵏ/2ᵏ⁺¹ = 1/2. Arbitrarily many such blocks make the partial sums unbounded, although 1/n → 0.

The sequence Cauchy criterion gives the **series Cauchy criterion**: ∑aₙ converges exactly when, for every ε > 0, some N makes |aₘ₊₁ + ⋯ + aₙ| < ε whenever n > m ≥ N. What matters is control of every sufficiently late finite tail.

## Absolute convergence

A series converges **absolutely** when ∑|aₙ| converges. It converges **conditionally** when ∑aₙ converges but ∑|aₙ| diverges.

**Theorem 4.1.** Every absolutely convergent real series converges.

**Proof.** Suppose ∑|aₙ| converges. For ε > 0, its Cauchy criterion supplies N such that ∑ₖ₌ₘ₊₁ⁿ |aₖ| < ε whenever n > m ≥ N. The finite triangle inequality gives |∑ₖ₌ₘ₊₁ⁿ aₖ| ≤ ∑ₖ₌ₘ₊₁ⁿ |aₖ| < ε. The series Cauchy criterion therefore proves convergence of ∑aₙ. Completeness enters through that criterion.

Cancellation can permit conditional convergence. Assume bₙ ≥ 0, bₙ₊₁ ≤ bₙ, and bₙ → 0. The **alternating series theorem** says ∑ₙ₌₁∞ (−1)ⁿ⁺¹bₙ converges, with remainder |S − S_N| ≤ b_(N+1).

To prove it, the even partial sums increase because S_(2m+2) − S_(2m) = b₂ₘ₊₁ − b₂ₘ₊₂ ≥ 0. The odd partial sums decrease, and each even sum is below each odd sum. Both sequences therefore converge by monotone convergence. Their paired difference b₂ₘ₊₁ tends to zero, so their limits agree. All partial sums converge to this common limit, which lies between each pair of adjacent partial sums. Their distance is b_(N+1), giving the remainder bound. Taking bₙ = 1/n yields a conditionally convergent series.

## Choosing a test

The **comparison test** states: if 0 ≤ aₙ ≤ bₙ for all sufficiently large n and ∑bₙ converges, then ∑aₙ converges. Its partial sums are increasing and bounded. Conversely, if ∑aₙ diverges under the same inequalities, so does ∑bₙ. Finite prefixes do not affect convergence.

The **ratio test** applies when aₙ is eventually nonzero and |aₙ₊₁/aₙ| → q. If q < 1, the series converges absolutely; if q > 1, it diverges. When q = 1, this test gives no conclusion. For q < 1, choose q < ρ < 1: eventually each magnitude is at most ρ times its predecessor, producing a geometric bound.

The **root test** gives the same conclusions when |aₙ|^(1/n) → q: q < 1 implies absolute convergence, q > 1 implies divergence, and q = 1 is inconclusive. For q < 1, eventually |aₙ| ≤ ρⁿ for some ρ < 1.

For example, ∑1/n² converges by comparison with 1/[n(n − 1)] for n ≥ 2; the latter telescopes because 1/[n(n − 1)] = 1/(n − 1) − 1/n. The ratio test gives 1 for both this convergent series and the divergent harmonic series.

## Power tails by dyadic blocks

The family \(\sum_{n\ge1}1/n^p\) deserves a test that decides the borderline rather than returning “inconclusive.” For \(p>0\), group terms with \(2^k\le n<2^{k+1}\). Each block has \(2^k\) terms. Within it,

\[
2^{-p(k+1)}< n^{-p}\le 2^{-pk},
\]

so its sum is between \(2^{-p}2^{k(1-p)}\) and \(2^{k(1-p)}\). When \(p>1\), a convergent geometric series bounds the block sums above. When \(0<p\le1\), the lower bound does not tend to zero (and grows if \(p<1\)), so the positive partial sums diverge. For \(p=0\), every term equals 1; for \(p<0\), terms do not approach zero. Hence \(\sum1/n^p\) converges exactly when \(p>1\). The comparison uses nonnegative terms; it cannot by itself classify a signed series.

This grouping teaches a reusable method: match how many terms a scale contains against the size of each term. The ratio test sees a limit of 1 for every \(p\), so it cannot detect this threshold.

## Visual investigation

Display the terms and partial sums in separate panels. Small terms alone can be deceptive. For alternating sums, shade the rigorous interval between adjacent partial sums; its shrinking width visualizes a proved error bound.

## Exercises

1. Prove convergence and find the sum of ∑ₙ₌₁∞ 1/[n(n + 1)].
2. Classify ∑ₙ₌₁∞ (−1)ⁿ/n as absolute, conditional, or divergent.
3. Prove ∑ₙ₌₁∞ n/2ⁿ converges. Is its ratio limit sufficient to compute its sum?
4. How many terms guarantee error at most 0.001 for ∑ₙ₌₁∞ (−1)ⁿ⁺¹/n?
5. Classify \(\sum_{n\ge1}(-1)^{n+1}/n^{2/3}\) as absolute, conditional, or divergent. Your proof must use two different arguments.

<details>
<summary>Hints</summary>

1. Write a difference of reciprocals.
2. Check the signed and absolute series separately.
3. Divide consecutive terms.
4. Use the first omitted term.
5. Check the alternating hypotheses, then compare the absolute series with the dyadic-block threshold.

</details>

<details>
<summary>Solutions</summary>

1. The Nth partial sum is 1 − 1/(N + 1), so the series converges to 1.
2. The alternating theorem gives convergence. Absolute values produce the divergent harmonic series, so convergence is conditional.
3. The ratio is (n + 1)/(2n) → 1/2, proving absolute convergence. The ratio test does not determine the sum.
4. The bound is 1/(N + 1). Taking N = 999 guarantees error ≤ 0.001; this is a sufficient bound, not a claim of minimality.
5. The magnitudes \(1/n^{2/3}\) decrease to zero, so the alternating theorem gives convergence. Since \(2/3\le1\), their positive sum diverges by the dyadic-block proof. Thus the signed series converges conditionally.

</details>

## Workshop: a test proves a particular kind of control

Consider ∑ₙ₌₁∞ 1/[n(n+1)]. The finite identity 1/[n(n+1)]=1/n−1/(n+1) gives S_N=1−1/(N+1). This proves both convergence and the exact error S−S_N=1/(N+1). In contrast, comparison with 1/n² could establish convergence but would not by itself find the sum. The method should match the question: classification, value, or a certified error budget.

Now consider ∑ₙ₌₁∞ (−1)ⁿ⁺¹/(2n−1). The alternating theorem applies because bₙ=1/(2n−1) decreases to zero. It gives |S−S_N|≤1/(2N+1). The corresponding absolute series diverges: 1/(2n−1)≥1/(2n), and the harmonic series diverges. Thus this is conditional convergence. The sign of the error is also controlled: each finite partial sum and the next one bracket the limit. That extra directional information is lost if we report only an absolute bound.

**A common failed argument.** “The ratio of consecutive terms of 1/n² tends to 1, so the series diverges.” A ratio limit of 1 is inconclusive. The same limit occurs for the divergent series 1/n. The correct repair is to choose another test, such as the telescoping comparison already given. A test's inconclusive outcome says something about the test, not the series.

```notebook
fn term(x) = 1/(x*(x+1));
sum term from 1 to 10;
sum term from 1 to 100;
show 1-1/101;
```

These finite sums agree with the exact telescoping formula up to floating-point rounding. The notebook computes evidence; the finite algebra and limit proof establish the result for every N.

Later lessons separate two hazards that this chapter leaves open. Limsup and liminf describe a sequence whose tails keep oscillating; rearrangements show why conditional cancellation cannot be treated like absolute tail control.

```exercise
{"id":"analysis-series-test","type":"choice","prompt":"The ratio |aₙ₊₁/aₙ| tends to 1 for a series with nonzero terms. What can be concluded from the ratio test alone?","options":[{"label":"The series converges absolutely.","correct":false,"feedback":"A ratio of 1 occurs for the divergent harmonic series."},{"label":"The series diverges.","correct":false,"feedback":"A ratio of 1 also occurs for the convergent series ∑1/n²."},{"label":"The ratio test is inconclusive; choose another argument.","correct":true,"feedback":"Exactly. A different structure, such as comparison or telescoping, may settle the series."}],"hints":["Compare the ratios for 1/n and 1/n²."]}
```

```exercise
{"id":"analysis-series-tail","type":"written","prompt":"For ∑ₙ₌₁∞ (−1)ⁿ⁺¹/(2n−1), find an N that guarantees absolute error below 0.005, and state whether the Nth sum is above or below the limit when N is even. Justify both conclusions.","hints":["The first omitted magnitude is 1/(2N+1).","The even partial sums of an alternating series starting positive lie below the limit."],"rubric":["Uses the alternating remainder bound with the correct first omitted index","Chooses N with 1/(2N+1)<0.005","States the parity direction correctly","Checks decreasing-to-zero hypotheses"],"solution":"The magnitudes 1/(2n−1) decrease to zero, so |S−S_N|≤1/(2N+1). We need 2N+1>200; N=100 suffices and is the smallest integer meeting this bound. Since the series starts positive, an even partial sum is below S, so S−S₁₀₀ is positive and less than 0.005."}
```
