# Calculus II recitation: boundaries and tails

**Preparation.** Complete [improper integrals](improper-integrals.md) and [sequences and series](sequences-series.md). Bring a first attempt at each question. This recitation is designed for one discussion session followed by individual revision. Your goal is to choose the *definition* or *test* before doing arithmetic, and to state what a finite picture cannot decide.

**At the board.** One person proposes a method and its hypotheses; another looks for a false variant. Only then calculate. Record where the original problem changes into a limit, which endpoints or indices require separate treatment, and how the final answer can be checked.

## Station 1: an infinite tail hidden inside two logarithms

Consider

\[
I_p=\int_{e^e}^{\infty}\frac{dx}{x\ln x\,(\ln\ln x)^p}.
\]

The lower endpoint is ordinary: \(\ln\ln(e^e)=1\). For finite \(R>e^e\), set \(u=\ln\ln x\), so \(du=dx/(x\ln x)\). The *finite* integral becomes \(\int_1^{\ln\ln R}u^{-p}\,du\). Only now let \(R\to\infty\). Because \(\ln\ln R\to\infty\), the tail converges exactly for \(p>1\), and then its value is \(1/(p-1)\). For \(p=1\) it grows like \(\ln(\ln\ln R)\). The extra logarithms slow divergence; they do not erase it.

**Why the tempting comparison fails.** For \(p>0\) the integrand is at most \(1/(x\ln x)\), but that upper comparison diverges. A smaller positive function may converge or diverge. The substitution actually decides.

```exercise
{"id":"calc2-recitation-log-tail","type":"written","prompt":"For which real p does the integral from e^e to infinity of [2+sin(ln ln x)]/[x ln(x) (ln ln(x))^p] converge? Explain why an exact antiderivative is unnecessary.","hints":["Substitute u=ln ln x in a finite truncated integral.","For real u, 1≤2+sin u≤3; compare both ways with u^(−p)."],"rubric":["Transforms a finite integral before taking its limit","Bounds the transformed integrand between u^(−p) and 3u^(−p)","States p>1 as the exact convergence range","Explains that comparison establishes convergence without an exact value"],"solution":"For finite R, u=ln ln x transforms the integral to ∫ from 1 to ln ln R of (2+sin u)u^(−p) du. Since 1≤2+sin u≤3, the positive integrand is bounded below by u^(−p) and above by 3u^(−p). The p-tail converges for p>1, so the upper comparison proves convergence. For p≤1 the lower comparison proves divergence. There is no need to find an exact antiderivative or value to classify convergence."}
```

**Changed task for your revision.** Classify \(\int_0^\infty x^a/(1+x^b)\,dx\) for \(b>0\). Near zero it behaves as \(x^a\), requiring \(a>-1\). At infinity it behaves as \(x^{a-b}\), requiring \(a-b<-1\). Both are necessary: the convergence region is \(-1<a<b-1\). Verify the boundary cases with direct comparisons. As a separate challenge, reverse the endpoint analysis for \(b<0\); it yields \(b-1<a<-1\), while \(b=0\) allows no exponent.

## Station 2: small terms and a large total

Rationalizing gives

\[
\frac1{\sqrt n+\sqrt{n+1}}=\sqrt{n+1}-\sqrt n.
\]

The unsigned partial sum from \(n=1\) to \(N\) is therefore \(\sqrt{N+1}-1\), which diverges even though its terms tend to zero. With alternating signs, the positive magnitudes decrease to zero, so \(\sum_{n=1}^{\infty}(-1)^{n-1}/(\sqrt n+\sqrt{n+1})\) converges conditionally. The alternating remainder after \(N\) terms is at most \(1/(\sqrt{N+1}+\sqrt{N+2})\). The integral test could also classify the unsigned tail, but the telescoping identity tells us more.

**Discussion prompt.** Which single change in the problem made cancellation a legitimate argument? Why would merely seeing alternating bars in a graph not prove convergence?

```exercise
{"id":"calc2-recitation-alternating-tail","type":"written","prompt":"Classify the series sum over n≥1 of (−1)^(n−1)/(n+sqrt(n)). Give a sufficient number of terms for alternating error below 0.001, and justify why the absolute-value series diverges.","hints":["The positive magnitude decreases to zero; bound it above and below by constant multiples of 1/n.","The first omitted magnitude after 1000 terms is below 0.001."],"rubric":["Checks eventual monotone decrease and term limit","Applies the alternating theorem","Proves absolute divergence by comparison with 1/(2n)","Gives a justified sufficient term count"],"solution":"Let b_n=1/(n+sqrt n). Its denominator increases and tends to infinity, so b_n decreases to zero and the alternating series converges. For n≥1, sqrt n≤n, hence b_n≥1/(2n); the absolute series diverges by comparison with the harmonic series. The alternating remainder after N terms is at most b_(N+1). Taking N=1000 gives b_1001<1/1001<0.001, a sufficient count; it need not be minimal."}
```

## Station 3: finite quadrature is an answer to a finite question

Suppose software reports a midpoint sum close to zero for \(1/x\) on \([-1,1]\) using an even number of rectangles. Symmetric midpoint nodes pair \(m\) and \(-m\), whose function values cancel exactly in ideal arithmetic. Changing the number of rectangles may preserve that apparent zero. The improper integral nevertheless diverges because its left and right cutoff integrals tend separately to \(-\infty\) and \(+\infty\). A numerical method can accurately compute the wrong mathematical object.

The more informative experiment changes the *definition*: use left cutoff \(\varepsilon\) and right cutoff \(\delta\), and compare the exact truncated sum \(\ln(\varepsilon/\delta)\). Equal cutoffs, \(\varepsilon=2\delta\), and \(\varepsilon=\delta^2\) produce different outcomes while both cutoffs approach zero. A reviewer should ask for the independently convergent one-sided limits, not for more grid points.

```exercise
{"id":"calc2-recitation-pole-repair","type":"written","prompt":"A student evaluates the integral of x/(x²−1) from 0 to 2 by placing endpoints into one antiderivative. Compute its two required one-sided limits and the result of equal cutoffs at x=1. Explain why the finite paired result is not the improper integral.","hints":["On each side use (1/2)ln|x²−1|, but do not cross x=1.","For cutoffs 1−epsilon and 1+delta, the sum is (1/2)ln[3(2epsilon−epsilon²)/(2delta+delta²)]."],"rubric":["Splits the interval at the pole x=1","Finds left limit −infinity and right limit +infinity","Finds equal-cutoff paired limit (1/2)ln 3","Concludes divergence of the ordinary improper integral despite the paired finite value"],"solution":"The left truncated integral from 0 to 1−epsilon is (1/2)ln(2epsilon−epsilon²), which tends to −infinity. The right integral from 1+delta to 2 is (1/2)ln 3−(1/2)ln(2delta+delta²), which tends to +infinity. They do not define a convergent improper integral. If epsilon=delta, their finite sum tends to (1/2)ln 3; linked cutoffs manufacture a principal-value-type result and cannot replace the two independent defining limits."}
```

## Station 4: decide what an approximation promises

The alternating expansion \(\ln(1+x)=x-x^2/2+x^3/3-\cdots\) is valid for \(0<x\le1\), with decreasing term magnitudes. At \(x=0.2\), four terms give \(0.2-0.02+0.002666\ldots-0.0004=0.182266\ldots\). The first omitted magnitude is \(0.2^5/5=0.000064\), so the error is below \(0.0001\). Three terms give only the weaker bound \(0.2^4/4=0.0004\). The approximation, guarantee, and actual error are three different quantities.

**Independent check.** Repeat for \(\ln(1.1)\) with target error \(10^{-5}\). The fourth partial sum has first omitted magnitude \(0.1^5/5=2\cdot10^{-6}\); the three-term bound is \(0.1^4/4=2.5\cdot10^{-5}\). State that four terms suffice *by this bound*; do not claim that three terms could not accidentally meet the actual tolerance.

```exercise
{"id":"calc2-recitation-log-approximation","type":"written","prompt":"Approximate ln(1.1) with the shortest initial alternating partial sum whose first-omitted-term bound is below 0.00001. Report the value, its bound, and why this does not prove every shorter sum misses the target in actual error.","hints":["For ln(1+x), the kth term is (−1)^(k−1)x^k/k.","Compare the next-term bounds after three and four terms at x=0.1."],"rubric":["Checks that the three-term bound 0.000025 is insufficient","Uses four terms and obtains 0.095308333...","Gives the next-term bound 0.000002","Distinguishes a sufficient bound from actual error"],"solution":"The first three terms give 0.1−0.1²/2+0.1³/3=0.095333333..., with next-term bound 0.1⁴/4=0.000025, above the target. Adding the fourth term −0.1⁴/4 gives 0.095308333..., whose next omitted magnitude is 0.1⁵/5=0.000002<0.00001. Four terms are therefore the shortest initial sum certified by this bound. A bound failing for a shorter sum does not, by itself, prove its actual error exceeds the target."}
```

**Takeaway to retain:** for each infinite object, name its finite approximants, the limit defining the object, and the theorem controlling the tail. Complete the changed tasks without the worked algebra visible; use the hints only after a genuine attempt.
