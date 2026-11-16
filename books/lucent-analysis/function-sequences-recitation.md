# Recitation F. Choose the control before exchanging a limit

**Role:** guided recitation after uniform convergence and exchange theorems. Bring the definitions of uniform convergence, the Darboux criterion, and the Mean Value Theorem. The questions below ask which estimate earns each conclusion; drawing a graph is useful only after that decision.

## Case 1: one family, three domains

Let \(p_n(x)=x^n(1-x)\) for \(x\in[0,1]\). The pointwise limit is zero, including \(x=1\). Is the convergence uniform? Differentiate to locate the maximum at \(x=n/(n+1)\):
\[
\|p_n\|_\infty
=\left(\frac{n}{n+1}\right)^n\frac1{n+1}
\le\frac1{n+1}\longrightarrow0.
\]
The moving maximum does not by itself obstruct uniform convergence; its **height** matters.

Now multiply by \(n\). The new maximum of \(n p_n\) tends to \(e^{-1}\), so the same pointwise limit is no longer uniform. On any fixed \([0,r]\) with \(r<1\), however, \(|np_n(x)|\le n r^n\to0\). The domain and the scaling both belong in the conclusion. Write a complete uniform threshold for the first family, then a moving witness for the second.

## Case 2: an integral needs existence before exchange

Suppose \(f_n\) is Riemann integrable on a fixed \([a,b]\) and \(f_n\to f\) uniformly. A proposed solution writes \(\int f_n\to\int f\) using the bound \((b-a)\|f_n-f\|_\infty\). What must be established before writing \(\int f\)? The uniform-limit integral theorem uses Darboux gaps to prove \(f\) is integrable. Reconstruct that step with a partition for one \(f_N\).

For an improper integral \(\int_0^\infty\), the same bound has no finite interval length. Uniform convergence still controls every fixed \([0,B]\), but the tail beyond \(B\) needs its own uniform estimate. When a numerical plot seems to have lost a narrow hill, calculate its integral or an upper and lower sum rather than trusting the samples.

## Case 3: derivative control and the anchor

Two tempting implications fail for different reasons.

1. \(f_n\to f\) uniformly, therefore \(f_n'\to f'\): take \(f_n(x)=\sin(nx)/n\) near zero.
2. \(f_n'\to g\) uniformly, therefore \(f_n\) converges: take \(f_n(x)=n\).

The correct theorem asks for both uniform derivative convergence and convergence at one anchor \(c\). The Mean Value Theorem gives
\[
\|f_n-f_m\|_{\infty,[a,b]}
\le |f_n(c)-f_m(c)|+(b-a)\|f_n'-f_m'\|_{\infty,(a,b)}.
\]
Say which term controls vertical translation and which controls variation across the interval. This estimate proves uniform convergence of the functions. A second difference-quotient argument identifies the derivative of the limit; pointwise convergence of derivatives is not enough.

## Case 4: an interior radius is not an endpoint test

For \(\sum_{n=1}^{\infty}x^n/n\), the radius is \(1\). On each \([-r,r]\) with \(r<1\), a geometric majorant proves uniform convergence and permits termwise differentiation. At \(x=1\), the harmonic series diverges. At \(x=-1\), the alternating harmonic series converges conditionally. The left endpoint may be included in the convergence set while the right endpoint is excluded.

Discuss this proposed argument: “The series converges uniformly on every \([-r,r]\), so its derivative series converges uniformly on \((-1,1)\).” The first premise has a different threshold for each \(r\); it supplies no one threshold on the whole open interval. Indeed the derivative series is \(\sum_{n=1}^{\infty}x^{n-1}=1/(1-x)\) pointwise on \((-1,1)\), and its finite tails are unbounded as \(x\uparrow1\).

## Record a decision, then revise it

```exercise
{"id":"analysis-r2-recitation-uniform-factor","type":"written","prompt":"A classmate says every moving peak prevents uniform convergence. Use p_n(x)=x^n(1-x) on [0,1] to repair the claim. Then determine what changes for n p_n on [0,1] and on [0,r], fixed r<1.","hints":["Differentiate p_n or bound it by its maximum.","For n p_n, use the same maximizing input; on [0,r], use n r^n."],"rubric":["Locates or bounds the maximum of p_n and proves it tends to zero","Shows n p_n has a moving value bounded away from zero","Establishes uniform convergence of n p_n on each fixed [0,r]","States the corrected principle in terms of peak height and domain"],"solution":"Since p_n'(x)=x^(n-1)(n-(n+1)x), its maximum on [0,1] is p_n(n/(n+1))=(n/(n+1))^n/(n+1)<=1/(n+1). Thus p_n converges uniformly to zero although its maximum moves. The maximum of n p_n is $[n/(n+1)](n/(n+1))^n$, which tends to e^(-1)>0, so this family is not uniform on [0,1]. On fixed [0,r], 0<=n p_n(x)<=n r^n, which tends to zero. A moving location is not enough; a nonvanishing error at moving inputs on the stated domain is the obstruction.","transfer":"Changed case: decide uniform convergence of n^2 x^2(1-x)^n on [0,1] and on [d,1] with fixed d>0.","transferSolution":"For fixed x the limit is zero. Differentiation places the maximum at x=2/(n+2), with value n^2[2/(n+2)]^2[n/(n+2)]^n tending to 4e^(-2)>0, so convergence is not uniform on [0,1]. On [d,1], the bound n^2(1-d)^n tends to zero, proving uniform convergence there."}
```

```exercise
{"id":"analysis-r2-recitation-operation-choice","type":"choice","prompt":"You know that continuously differentiable f_n on [0,1] satisfy f_n(0)->A and f_n'->g uniformly on (0,1). Which conclusion is justified by these facts?","options":[{"label":"f_n converges uniformly and its limit has derivative g at interior points.","correct":true,"feedback":"The anchor and uniform derivative control yield a uniform Cauchy bound; the difference-quotient proof gives the derivative."},{"label":"The limit has derivative g at both endpoints as an ordinary two-sided derivative.","feedback":"Ordinary two-sided derivatives are not defined at endpoints of [0,1]; the theorem states an interior conclusion.","correct":false},{"label":"The functions need not converge because their constants may drift.","feedback":"Convergence at zero fixes the additive constants.","correct":false},{"label":"Only pointwise convergence of f_n follows.","feedback":"The MVT bound controls the supremum difference across the whole finite interval.","correct":false}],"solution":"Apply the MVT estimate to f_n-f_m using c=0. The scalar values and derivatives are uniformly Cauchy, so f_n is uniformly Cauchy. The differentiation theorem then gives f'=g on (0,1).","hints":["Apply the Mean Value Theorem to f_n−f_m, using the value at zero as the anchor and the supremum derivative difference to control variation.", "Use the resulting uniform Cauchy estimate, then check where the differentiation theorem gives an ordinary derivative: the interior and endpoints have different domain requirements."]}
```

**Recitation finish.** For each use of the word “uniform,” name the domain after it. For each exchanged limit, write the operation and the theorem whose hypotheses you have actually checked.
