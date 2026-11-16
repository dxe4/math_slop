# 3. Sequences, subsequences, and completeness

**Objectives.** Use the quantified definition of convergence; distinguish boundedness from convergence; extract subsequences; and explain why a real sequence converges exactly when its terms eventually become mutually close.

**Prerequisites.** Quantifiers, absolute value, the triangle inequality, supremum, and the Archimedean property from Chapters 1–2.

## Convergence is a statement about every sufficiently late term

A real sequence is a function a: N → R, written (aₙ), with N = {1, 2, …}. It converges to L ∈ R when, for every ε > 0, there exists N ∈ N such that n ≥ N implies |aₙ − L| < ε. Write aₙ → L. The threshold N may depend on ε, but must work for every subsequent index. A million convincing points cannot establish this infinitely quantified claim.

For example, aₙ = n/(n + 1) converges to 1. Given ε > 0, choose a natural N > 1/ε, using the Archimedean property. If n ≥ N, then |aₙ − 1| = 1/(n + 1) < 1/N < ε. Notice the proof starts with an arbitrary tolerance and constructs a threshold; the proposed limit is not assumed to be correct.

A sequence is bounded if some M ≥ 0 satisfies |aₙ| ≤ M for every n. Every convergent sequence is bounded: use ε = 1 to bound the tail by |L| + 1, then enlarge the bound to include the finitely many earlier terms. The converse fails: (−1)ⁿ is bounded but keeps switching between two separated values.

**Limit laws.** If aₙ → A and bₙ → B, then aₙ+bₙ → A+B and aₙbₙ → AB. Also |aₙ| → |A|. If B ≠ 0, eventually bₙ ≠ 0 and aₙ/bₙ → A/B. For sums, split the error into two terms and make each smaller than ε/2. For products, boundedness supplies M ≥ 1 with |aₙ| ≤ M, and |aₙbₙ−AB| ≤ M|bₙ−B|+|B||aₙ−A|; choose the two errors below ε/(2M) and ε/(2(|B|+1)). The reverse triangle inequality proves the absolute-value law. For reciprocals, eventually |bₙ| ≥ |B|/2, giving |1/bₙ−1/B| ≤ 2|bₙ−B|/|B|²; combine with the product law. Finally, if aₙ ≤ cₙ ≤ bₙ eventually and both outer sequences tend to L, then cₙ → L by the same ε-neighborhood definition. These laws justify subsequent arithmetic with limits.

**Make the error budget visible.** Suppose aₙ=2+1/n and bₙ=3−2/n. Their product is 6−1/n−2/n² and tends to 6, but the product law should work without multiplying the formulas. Set A=2 and B=3. For all n≥1, |aₙ|≤3, and

|aₙbₙ−6|≤|aₙ||bₙ−3|+3|aₙ−2|≤3(2/n)+3(1/n)=9/n.

Given ε>0, an integer N>9/ε works for every n≥N. The first term in the bound controls the error in bₙ while aₙ moves; the second controls the error in aₙ at the target value of bₙ. Replacing |aₙ| by its limit 2 before taking limits would be unjustified, so boundedness is doing real work.

**Why the nonzero denominator condition matters.** Both aₙ=1/n and bₙ=1/n tend to zero, yet aₙ/bₙ=1. Replacing aₙ with 1/n² makes the quotient tend to zero, and replacing it with 1/√n makes the quotient diverge to infinity. A symbol 0/0 does not choose among these outcomes. When B≠0, by contrast, bₙ eventually lies in the interval (B−|B|/2,B+|B|/2), safely away from zero; that is the precise reason reciprocal limits work.

## Monotonicity and subsequences

A sequence is increasing when aₙ ≤ aₙ₊₁ for every n. Here “increasing” permits equality. A decreasing sequence satisfies the reverse inequality.

**Theorem 3.1 (Monotone convergence).** Every increasing, bounded-above real sequence converges to the supremum of its set of values. Every decreasing, bounded-below real sequence similarly converges to its infimum.

**Proof of the increasing case.** Completeness gives L = sup{aₙ: n ∈ N}. For ε > 0, L − ε is not an upper bound, so some a_N > L − ε. For n ≥ N, monotonicity gives L − ε < a_N ≤ aₙ ≤ L. Consequently |aₙ − L| < ε. The decreasing case follows by applying this result to (−aₙ).

This proof can be read as a strategy for finding N. We do not need a formula for L or a rate of convergence. Supremum approximation produces one term within ε of the boundary; monotonicity traps every later term between that term and the boundary. If the sequence is only bounded, the later terms can wander back out of the ε-band. If it is only increasing, the set of values may have no finite upper bound: aₙ=n is the simplest example. Neither hypothesis can be silently dropped.

A subsequence has the form (aₙₖ), where n₁ < n₂ < ⋯ are natural numbers. Since nₖ ≥ k, every subsequence of a convergent sequence has the same limit: a sufficiently late subsequence index also lies in the required tail of the original sequence.

**Theorem 3.2 (Bolzano–Weierstrass).** Every bounded real sequence has a convergent subsequence.

**Proof.** Enclose all terms in a closed interval I₀ = [u₀, v₀]. Bisect it and choose a closed half containing infinitely many indexed terms. Repeat, obtaining nested intervals Iₖ = [uₖ, vₖ] with lengths (v₀ − u₀)/2ᵏ. Choose nₖ > nₖ₋₁ with aₙₖ ∈ Iₖ; infinitely many indices in each interval make this possible. Let L = sup{uₖ}. Nesting implies uₖ ≤ L ≤ vₖ for every k: every vₖ bounds all left endpoints. Hence |aₙₖ − L| ≤ (v₀ − u₀)/2ᵏ → 0. The last convergence follows from 2ᵏ ≥ k + 1 and the Archimedean property.

Why require **infinitely many indexed terms** in the chosen half? A half may contain a value that appears only once. We need to pick an index beyond every previously chosen index at each stage, so “nonempty” is too weak. Since the parent interval contains infinitely many indices and is the union of two closed halves, at least one half contains infinitely many; choosing it preserves the induction. The midpoint can belong to both halves without causing trouble. We are narrowing possible locations while ensuring a fresh term remains available. The resulting subsequence may converge even when the original sequence does not, as the even and odd terms of (−1)ⁿ demonstrate.

## Recognizing convergence without knowing its limit

A sequence is **Cauchy** if, for every ε > 0, there exists N such that m, n ≥ N implies |aₘ − aₙ| < ε.

**Cauchy criterion in R.** A real sequence converges if and only if it is Cauchy.

**Proof.** If aₙ → L, make both |aₘ − L| and |aₙ − L| smaller than ε/2; the triangle inequality gives the claim. Conversely, a Cauchy sequence is bounded: use tolerance 1 to bound its tail relative to a_N, and include its finite prefix. Bolzano–Weierstrass supplies a subsequence aₙₖ → L. Given ε > 0, choose N so that tail terms are within ε/2 of each other. Choose k with nₖ ≥ N and |aₙₖ − L| < ε/2. For every n ≥ N, |aₙ − L| ≤ |aₙ − aₙₖ| + |aₙₖ − L| < ε.

This last implication uses completeness. Rational approximations to √2 form a Cauchy sequence of rational numbers but have no rational limit.

The Cauchy property is attractive when the limit is unknown. If |aₙ₊₁−aₙ|≤2⁻ⁿ, then for m>n the triangle inequality gives |aₘ−aₙ|≤∑ₖ₌ₙᵐ⁻¹2⁻ᵏ<2⁻⁽ⁿ⁻¹⁾. Choose N large enough that the final bound is below ε. This proves convergence in ℝ without guessing the answer. Merely having |aₙ₊₁−aₙ|→0 is weaker: the harmonic partial sums have successive differences 1/(n+1)→0 but diverge. The sum of all later step sizes, rather than one late step size, is what controls distant pairs.

## Visual investigation

For a sequence with a known formula, plot a finite table of terms against their indices and mark a proposed band (L−ε,L+ε) on paper. Predict a threshold before calculating more terms. The notebook below lists actual terms of aₙ=n/(n+1) at integer indices. Its plotted curve connects noninteger inputs for visual orientation; those extra points are not sequence terms.

```notebook
fn a(x) = x/(x+1);
table a from 1 to 20 count 20;
plot a from 1 to 20;
```

For ε=0.05 and L=1, the exact error is 1/(n+1). The first threshold that controls **every** later term is N=20: for n≥20, 1/(n+1)≤1/21<0.05, whereas n=19 has error 1/20=0.05 and fails the strict inequality. A visible tail inside the band supports intuition; this inequality proves the tail statement. The recurrence investigation below shows actual iterates alongside a **proved** error envelope.

```exercise
{"id":"analysis-sequence-threshold","type":"numeric","prompt":"For aₙ=n/(n+1) and ε=0.05, enter the smallest natural N such that every n≥N satisfies |aₙ−1|<ε.","answer":20,"tolerance":0,"hints":["The exact error is 1/(n+1).","The inequality is strict; test n=19 and n=20."],"feedback":"A single plotted term is insufficient; choose the first index whose exact error and all later errors are below 0.05."}
```

## Exercises

1. Prove that a real sequence cannot have two distinct limits.
2. Find two convergent subsequences of (−1)ⁿ and prove the original sequence diverges.
3. Prove aₙ = 1/n is Cauchy directly from the definition.

<details>
<summary>Hints</summary>

1. Use one-third of the distance between the proposed limits.
2. Separate even and odd indices.
3. Bound |1/m − 1/n| by 1/min(m, n).

</details>

<details>
<summary>Solutions</summary>

1. If L ≠ K were limits, set ε = |L − K|/3. Beyond both thresholds, |L − K| ≤ |L − aₙ| + |aₙ − K| < 2|L − K|/3, a contradiction.
2. a₂ₖ = 1 and a₂ₖ₋₁ = −1. If the sequence converged, both subsequences would share its limit, contradicting Exercise 1.
3. Given ε > 0, choose N > 1/ε. For m, n ≥ N, |1/m − 1/n| ≤ 1/min(m, n) ≤ 1/N < ε.

</details>

## Workshop: a limit that is defined by a recurrence

Start with a₁=1 and set aₙ₊₁=√(2+aₙ). A table suggests a limit near 2, but the equation L=√(2+L) alone does not prove a limit exists. We need an invariant and a convergence theorem first.

The interval [1,2] is invariant: if 1≤aₙ≤2, then √3≤aₙ₊₁≤2. The base term is in the interval, so induction gives the bound for every n. The sequence also increases. At the base, a₂=√3>1. If aₙ₊₁≥aₙ, the square-root function is increasing on nonnegative inputs, hence aₙ₊₂=√(2+aₙ₊₁)≥√(2+aₙ)=aₙ₊₁. Monotone convergence now supplies a limit L∈[1,2]. Only now is taking limits in the recurrence justified, because the square-root function is continuous on this interval. We get L=√(2+L), so L²−L−2=0 and L is either 2 or −1. The interval constraint selects L=2.

The order of this argument is a reusable pattern: prove the iterates stay in a region, prove monotonicity or Cauchy control, obtain convergence from completeness, then solve the fixed-point equation and check which solutions lie in the region. Solving the equation first can reveal candidates, but does not establish that the iteration approaches one.

There is also a direct error estimate. Since 1≤aₙ≤2,

2−aₙ₊₁ = (4−(2+aₙ))/(2+√(2+aₙ)) = (2−aₙ)/(2+√(2+aₙ)) ≤ (2−aₙ)/3.

Thus 0≤2−aₙ≤3⁻⁽ⁿ⁻¹⁾. This proves convergence and supplies a certified rate without appealing to monotone convergence; the estimate is stronger because it tells us how many steps achieve a tolerance. Its denominator bound used aₙ≥1. A picture of the recursion does not supply that uniform estimate.

**Predict before changing the rule.** From \(a_1=1\), decide whether the terms approach 2 from above or below and whether a fixed point at \(1/2\) would, by itself, force another orbit to converge. Record both predictions. The linked view plots actual sequence terms as separate dots and a sharper certified bound: because \(a_n\ge1\), the denominator in the rationalized error is at least \(2+\sqrt3\), so \(0\le 2-a_n\le q^{n-1}\), where \(q=1/(2+\sqrt3)\). This is stronger than the valid \(3^{-(n-1)}\) bound derived above.

```investigation
recurrence
```

First increase the term count. Compare each actual error with the bound in the second panel; a plotted agreement for twelve terms still does not prove the bound for all \(n\). Then change the rule control to \(a_{n+1}=1-a_n\), starting at \(a_1=0\). Its fixed-point equation has the unique solution \(1/2\), but the actual orbit alternates between 0 and 1. The changed rule exposes exactly why a fixed-point equation is only a candidate argument.

The notebook lets you edit the rule itself. Its stored indices start at zero for the initial value: row 0 below is this lesson's \(a_1\), row 1 is \(a_2\), and so on. The scatter plot contains only computed terms; no connecting curve is claimed.

```notebook
fn update(x) = sqrt(2+x);
iterate update from 1 count 12 as orbit;
table orbit;
scatter orbit;
```

**Explain and transfer.** Write the invariant interval and the step that supplies convergence *before* solving \(L=\sqrt{2+L}\). Then edit `update` to `1-x`, start at zero, and explain which hypothesis of a contraction argument fails. For an unfamiliar rule \(u_{n+1}=1/(2+u_n)\) on \([0,1]\), prove invariance and a contraction factor and compare its predicted error with the actual dots; the visual alone is not the proof.

## How to choose a subsequence

Bolzano–Weierstrass gives a convergent subsequence of every bounded real sequence, but often the useful subsequence is chosen from the problem's structure. Consider bₙ=(−1)ⁿ+1/n. Along even indices, b₂ₖ=1+1/(2k)→1. Along odd indices, b₂ₖ₋₁=−1+1/(2k−1)→−1. Since subsequences of a convergent sequence must share its limit, bₙ diverges. The small perturbation 1/n does not erase the persistent parity split.

By contrast, a bounded sequence may have many convergent subsequences and still satisfy a useful tail condition. If all convergent subsequences of a bounded sequence have the same limit L, then the whole sequence converges to L. To prove this, suppose convergence fails. There is an ε₀>0 and arbitrarily late terms at least ε₀ from L. Choose such terms with strictly increasing indices. Their bounded subsequence has a convergent sub-subsequence by Bolzano–Weierstrass, whose limit remains at least ε₀ from L. This contradicts the hypothesis. This is a powerful way to turn a compactness statement into convergence.

```exercise
{"id":"analysis-sequence-recurrence","type":"written","prompt":"Set u₁=0 and uₙ₊₁=(uₙ+3)/(uₙ+2). Prove the sequence converges without assuming monotonicity; identify its limit. What is the first step needed before passing to the limit in the recurrence?","hints":["The map sends [0,2] into [1,3/2].","For x,y≥0, compare (x+3)/(x+2) and (y+3)/(y+2) by subtraction; obtain an error contraction around the positive fixed point."],"rubric":["Shows all terms remain in a domain where the recurrence is defined","Establishes a Cauchy or contraction estimate before substituting a limit","Solves the fixed-point equation and selects the admissible root","Explains why the equation alone does not prove convergence"],"solution":"Write T(x)=1+1/(x+2). All terms are nonnegative by induction. For x,y≥0, |T(x)−T(y)|=|x−y|/((x+2)(y+2))≤|x−y|/4. Thus |uₙ₊₁−uₙ|≤4⁻⁽ⁿ⁻¹⁾|u₂−u₁|. For m>n, the triangle inequality and a geometric tail bound give |uₘ−uₙ|≤(4/3)4⁻⁽ⁿ⁻¹⁾|u₂−u₁|, so the sequence is Cauchy and converges in ℝ. Its limit L≥0 satisfies L=(L+3)/(L+2), hence L²+L−3=0 and L=(√13−1)/2."}
```

```exercise
{"id":"analysis-sequence-subsequence","type":"choice","prompt":"A bounded sequence has a subsequence converging to 4. Which statement follows without any further hypothesis?","options":[{"label":"The original sequence converges to 4.","correct":false,"feedback":"A different subsequence may approach another value."},{"label":"The original sequence has at least one limit point equal to 4.","correct":true,"feedback":"Yes. The given subsequence makes 4 a subsequential limit."},{"label":"All its Cauchy subsequences converge to 4.","correct":false,"feedback":"Another Cauchy subsequence may converge to a different real value."}],"hints":["Try interleaving values close to 4 with values close to 0."]}
```
