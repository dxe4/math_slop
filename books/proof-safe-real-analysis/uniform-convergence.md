
# Uniform Convergence and Limit Interchange

A sequence of functions creates two limiting processes: the index \(n\) moves along the sequence, while the input \(x\) ranges through the domain. Most dangerous arguments in elementary analysis quietly exchange those processes. Uniform convergence is one of the principal conditions that makes such exchanges safe.

This chapter assumes ordinary continuity, compactness, Riemann integration, and the mean value theorem. The needed tools are developed in [Sequences and Compactness](sequences-compactness.md) and [Continuity and Differentiation](continuity-differentiation.md).

## 1. Pointwise convergence allows local schedules

Let \(f_n:E\to R\). The sequence converges **pointwise** to \(f:E\to R\) when

\(\forall x\in E \forall \varepsilon>0 \exists N \forall n\ge N: |f_n(x)-f(x)|<\varepsilon\).

The threshold \(N\) may depend on both \(x\) and \(\varepsilon\). Each fixed point gets its own convergence schedule.

For \(f_n(x)=x^n\) on \([0,1]\), the pointwise limit is

\(f(x)=0\) for \(0\le x<1\), and \(f(1)=1\).

At a fixed \(x<1\), powers eventually decay below every tolerance. At \(x=1\), every term already equals one. The limiting function is discontinuous at \(1\), even though every \(f_n\) is continuous.

To see the local schedules, solve \(x^n<\varepsilon\) for a fixed \(0<x<1\). Because \(\log x<0\), it is enough that \(n>\log(\varepsilon)/\log(x)\). As \(x\) approaches \(1\), the denominator approaches zero and the required threshold grows without bound. Convergence occurs at every fixed point but slows arbitrarily near the endpoint.

## 2. Uniform convergence uses one schedule

The convergence is **uniform** on \(E\) when

\(\forall \varepsilon>0 \exists N \forall x\in E \forall n\ge N: |f_n(x)-f(x)|<\varepsilon\).

Now \(N\) may depend on \(\varepsilon\) but not on \(x\). The same tail must work everywhere. When the functions are bounded, this is equivalent to

\(\lVert f_n-f\rVert_\infty = \sup_{x\in E}|f_n(x)-f(x)| \to 0\).

The supremum norm turns uniform convergence into ordinary convergence in a metric space of functions.

**Worked example.** Let \(f_n(x)=x/(n+x)\) on \([0,\infty)\). For every \(x\ge 0\), the pointwise limit is \(0\). But for fixed \(n\), \(x/(n+x)\) approaches \(1\) as \(x\to \infty\), so the supremum error is \(1\); convergence is not uniform on the unbounded domain.

On \([0,M]\), however,

\(0\le x/(n+x)\le M/(n+M)\le M/n\),

so the convergence is uniform on every fixed bounded interval. The domain is part of the claim: “uniformly” is incomplete without saying where.

## 3. Three practical tests

To prove uniform convergence, seek a bound independent of \(x\):

\(|f_n(x)-f(x)|\le a_n\) for every \(x\in E\), where \(a_n\to 0\).

To disprove it, find a fixed \(\varepsilon_0>0\) such that for every \(N\) there are \(n\ge N\) and \(x_n\in E\) with error at least \(\varepsilon_0\). The bad input is allowed to move with \(n\); that moving witness is exactly what pointwise convergence can miss.

A third method uses the supremum directly. If the maximum error can be computed, study its limit.

**Worked example 2 (a moving witness).**

**Moving-witness example.** For \(f_n(x)=x^n\) on \([0,1]\), the limit differs from \(x^n\) by \(x^n\) on \([0,1)\). Its supremum is \(1\), although no point below \(1\) attains that value. Given any \(n\), choose \(x_n=2^{-1/n}\). Then \(x_n<1\) and \(f_n(x_n)=1/2\), while the pointwise limit at \(x_n\) is zero. The fixed tolerance \(\varepsilon_0=1/2\) defeats every stage.

This is a useful reminder: a supremum need not be a maximum. Uniform convergence measures the worst possible error, including errors approached but not attained.

## 4. Uniform limits preserve continuity

**Theorem 13.1 (Uniform limit).** If each \(f_n:E\to R\) is continuous at \(a\) and \(f_n\to f\) uniformly on \(E\), then \(f\) is continuous at \(a\). Consequently, a uniform limit of continuous functions is continuous.

Given \(\varepsilon>0\), uniform convergence lets us choose one index \(N\) such that

\(|f_N(x)-f(x)|<\varepsilon/3\) for every \(x\in E\).

Continuity of the single function \(f_N\) at \(a\) gives \(\delta>0\) such that \(|x-a|<\delta\) implies \(|f_N(x)-f_N(a)|<\varepsilon/3\). Then

\(|f(x)-f(a)|\le |f(x)-f_N(x)|+|f_N(x)-f_N(a)|+|f_N(a)-f(a)|<\varepsilon\).

The proof is a three-term bridge: from \(f\) to one controlled approximant, across that approximant by continuity, and back to \(f\). Uniformity is used at two different points, \(x\) and \(a\), with the same selected \(N\).

The example \(x^n\) on \([0,1]\) has a discontinuous pointwise limit, so the theorem immediately proves that convergence is not uniform. This is often quicker than optimizing the error.

## 5. Uniform convergence permits integration through the limit

Suppose each \(f_n\) is Riemann integrable on \([a,b]\) and \(f_n\to f\) uniformly. Then \(f\) is Riemann integrable and

\(\lim_{n\to \infty} \int _a^b f_n(x) dx = \int _a^b f(x) dx\).

First prove that the right-hand integral exists. Uniform convergence and one bounded approximant make \(f\) bounded. Given \(\varepsilon>0\), choose \(N\) with \(2\lVert f-f_N\rVert_\infty(b-a)<\varepsilon/2\), and then choose a partition \(P\) with \(U(f_N,P)-L(f_N,P)<\varepsilon/2\). On each subinterval, the oscillation of \(f\) is at most the oscillation of \(f_N\) plus \(2\lVert f-f_N\rVert_\infty\). Therefore

\(U(f,P)-L(f,P)\le U(f_N,P)-L(f_N,P)+2\lVert f-f_N\rVert_\infty(b-a)<\varepsilon.\)

The Darboux criterion proves that \(f\) is Riemann integrable. Now the quantitative core is legal:

\(|\int f_n-\int f|\le \int |f_n-f|\le (b-a)\lVert f_n-f\rVert_\infty\).

As the uniform error tends to zero, so does the integral error. This inequality also supplies a stopping rule: if the uniform approximation error is at most \(\eta\), then the integral error is at most \((b-a)\eta\).

**Worked example 3 (a spike preserves area).**

Pointwise convergence alone is not enough. Define \(f_n(x)=n\) on \((0,1/n)\) and \(0\) elsewhere on \([0,1]\), with any harmless endpoint definitions. For every fixed \(x>0\), eventually \(x\ge 1/n\), so \(f_n(x)\to 0\); at \(x=0\), define all values as zero. The pointwise limit is zero, but each integral equals one. The spike becomes narrower while becoming taller, preserving area.

A text-only numerical account captures the visual: height \(n\), width \(1/n\), area \(1\). The supports shrink through intervals \((0,1)\), \((0,1/2)\), \((0,1/3)\), and so on. No graph is needed to verify either pointwise decay or constant integral.

## 6. Differentiation requires more than uniform function convergence

Uniform convergence of \(f_n\) does not by itself imply convergence of derivatives. Let

\(f_n(x)=\sin(nx)/n\) on \(R\).

Because \(|f_n(x)|\le 1/n\), the functions converge uniformly to zero. But \(f_n'(x)=\cos(nx)\) does not converge even pointwise for many \(x\), and at \(x=0\) it is constantly one rather than approaching the derivative of the zero limit.

A useful differentiation theorem runs in the other direction. Suppose \(f_n\) is continuously differentiable on \([a,b]\), the derivative sequence \(f_n'\) converges uniformly to \(g\), and the values \(f_n(x_0)\) converge at one base point \(x_0\in [a,b]\). Then \(f_n\) converges uniformly to a differentiable function \(f\), and \(f'=g\).

Why is one base value needed? Derivatives do not detect additive constants. The sequence \(f_n(x)=n\) has derivative zero for every \(n\), but the functions do not converge at any point.

The fundamental theorem of calculus explains the result:

\(f_n(x)=f_n(x_0)+\int _{x_0}^x f_n'(t)dt\).

The base values converge, and uniform derivative convergence permits the integral limit to pass through. This reconstructs the limiting function and its derivative.

## 7. Infinite series of functions

A function series \(\sum g_k(x)\) is studied through its partial sums \(S_n(x)=\sum_{k=1}^n g_k(x)\). Uniform convergence of the series means uniform convergence of \((S_n)\).

The **Weierstrass M-test** says: if numbers \(M_k\ge 0\) satisfy \(|g_k(x)|\le M_k\) for every \(x\in E\), and the numerical series \(\sum M_k\) converges, then \(\sum g_k\) converges uniformly and absolutely on \(E\).

For \(\sum x^k/k^2\) on \([-1,1]\), use \(|x^k/k^2|\le 1/k^2\). Since \(\sum1/k^2\) converges, the M-test gives uniform convergence. Every partial sum is a polynomial and therefore continuous, so the sum is continuous. Term-by-term integration is also justified on any closed subinterval.

The M-test is sufficient, not necessary. Failure to find a summable majorant does not prove nonuniform convergence. It only means this particular test is inconclusive.

**Tail estimate.** The same comparison provides explicit error control:

\(\sup_{x\in E}|\sum_{k=n+1}^\infty g_k(x)|\le \sum_{k=n+1}^\infty M_k\).

For the preceding series, the integral test gives \(\sum_{k=n+1}^\infty1/k^2\le 1/n\). Thus \(n\ge 100\) guarantees uniform tail error at most \(0.01\).

## 8. Uniform Cauchy criterion and completeness of function space

A sequence \((f_n)\) is uniformly Cauchy on \(E\) if for every \(\varepsilon>0\) there exists \(N\) such that every \(m,n\ge N\) and every \(x\in E\) satisfy

\(|f_m(x)-f_n(x)|<\varepsilon\).

For real-valued functions, the uniform Cauchy condition constructs a pointwise candidate limit because each numerical sequence \((f_n(x))\) is Cauchy in \(R\). The same uniform estimate then shows convergence to that candidate is uniform.

This is completeness appearing one level higher. The bounded functions on \(E\), equipped with the supremum norm, form a complete normed space. A uniformly Cauchy sequence cannot converge to a “missing function.” The continuous bounded functions form a closed subspace because the uniform limit theorem keeps the limit continuous.

This viewpoint is the entrance to functional analysis: functions become points, norms become distances, and analytic estimates become geometry in infinite-dimensional spaces.

## 9. Uniform convergence on compact subsets

Sometimes global uniform convergence is too strong, while uniform convergence on every compact subset is exactly right. Consider \(f_n(x)=x/n\) on \(R\). For each fixed \(M\),

\(\sup_{|x|\le M}|x/n|=M/n\to 0\),

so convergence to zero is uniform on every bounded closed interval. It is not uniform on all of \(R\), where the error is unbounded for each \(n\).

This **locally uniform** or **compact-open** behavior preserves many local properties and is central in complex analysis and differential equations. Always state the family of sets on which the estimate is uniform.

## 10. A limit-interchange checklist

Before writing \(\lim \int = \int \lim\), \(\lim f_n'=f'\), or exchanging two infinite sums, ask:

1. What are the two limiting processes?
2. Is convergence pointwise, uniform, or uniform only on compact subsets?
3. Is there a dominating numerical bound independent of the moving variable?
4. Are the domains fixed, finite in measure, and compact where required?
5. For derivatives, are the derivatives controlled, and is one base value known?
6. Can a narrow spike, moving bump, escaping mass, or rapid oscillation defeat the claim?
7. What explicit error inequality would certify the interchange?

Naming the theorem is not enough; record the hypothesis that rules out the relevant failure mode.

## 11. Common errors

- **Pointwise and uniform convergence differ only in speed.** They differ in quantifier order and in which properties survive the limit.
- **The worst error must occur at a point.** A supremum can be approached without being attained.
- **Continuous pointwise limits are automatically uniform.** Even a continuous limit does not guarantee uniform convergence without extra hypotheses.
- **Uniform convergence justifies differentiating term by term.** Control of derivatives is needed.
- **Derivative convergence determines function convergence.** Additive constants require a base-point condition.
- **The M-test is an if-and-only-if test.** It is only sufficient.
- **Uniform on every bounded set means uniform globally.** The required threshold may depend on the bounded set.

## 12. Exercises with worked answers

### ANA-CH14-E001 — Exercise 1: classify convergence

For \(f_n(x)=x/(1+nx)\) on \([0,1]\), determine the pointwise limit and whether convergence is uniform.

<details><summary>Hint 1</summary>

Find a bound for the function that is independent of x.

</details>

<details><summary>Hint 2</summary>

On [0,1] its maximum is at one and equals 1/(n+1).

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E001 — Worked answer

At \(x=0\), every value is zero. For fixed \(x>0\), divide numerator and denominator by \(n\): the value tends to zero. Also \(f_n\) is increasing in \(x\) on \([0,1]\), so its maximum is \(1/(n+1)\). Therefore \(\lVert f_n\rVert_\infty=1/(n+1)\to 0\), and convergence is uniform.

</details>

### ANA-CH14-E002 — Exercise 2: a moving bump

Let \(f_n(x)=\max(0,1-n|x-1/n|)\) on \([0,1]\). Show \(f_n\to 0\) pointwise but not uniformly.

<details><summary>Hint 1</summary>

Fix x before analyzing whether it lies in the shrinking support.

</details>

<details><summary>Hint 2</summary>

At the moving center 1/n the peak stays one, preventing a uniform error bound.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E002 — Worked answer

Each bump has height one at \(x=1/n\) and support contained near \(1/n\). At \(x=0\), \(f_n(0)=0\); for every fixed \(x>0\), eventually the shrinking support lies to the left of \(x\), so \(f_n(x)=0\). Thus the pointwise limit is zero. But \(\sup f_n=1\) for every \(n\), so convergence is not uniform.

</details>

### ANA-CH14-E003 — Exercise 3: integral error

Suppose each \(f_n\) is Riemann integrable on \([-2,4]\), \(f_n\to f\) uniformly, and \(\lVert f_n-f\rVert_\infty\le 3/n^2\). Bound \(|\int _{-2}^4 f_n-\int _{-2}^4 f|\) and find an \(n\) that guarantees error below \(0.01\).

<details><summary>Hint 1</summary>

Multiply the supremum error by the interval length.

</details>

<details><summary>Hint 2</summary>

The length is 6; solve 18/n squared below 0.01.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E003 — Worked answer

The interval length is six, so the integral error is at most \(18/n^2\). We need \(18/n^2<0.01\), or \(n^2>1800\). Thus \(n=43\) is sufficient.

</details>

### ANA-CH14-E004 — Exercise 4: uniform series

Show \(\sum \cos(kx)/3^k\) converges uniformly on \(R\) and bound the tail after term \(n\).

<details><summary>Hint 1</summary>

Bound the cosine factor uniformly by one.

</details>

<details><summary>Hint 2</summary>

Apply the M-test with geometric majorant 3^-k and sum its tail.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E004 — Worked answer

Since \(|\cos(kx)/3^k|\le 1/3^k\) and the geometric series converges, the M-test applies. The uniform tail is at most \(\sum_{k=n+1}^\infty3^{-k}=1/(2\cdot 3^n)\).

</details>

### ANA-CH14-E005 — Exercise 5: find the missing hypothesis

A student argues: “\(f_n'\to 0\) uniformly, so \(f_n\) converges uniformly to a constant.” Give a counterexample and repair the statement.

<details><summary>Hint 1</summary>

Derivatives do not record additive constants.

</details>

<details><summary>Hint 2</summary>

Try the constant function n; repair the theorem by anchoring function values at one point.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E005 — Worked answer

Take \(f_n(x)=n\) on \([0,1]\). Every derivative is zero, but the functions diverge at every point. Add convergence of \(f_n(x_0)\) at one base point. Together with uniform derivative convergence, the differentiation theorem gives uniform convergence to a function whose derivative is zero, hence a constant on the interval.

</details>

### ANA-CH14-E006 — Exercise 6: quantify failure for \(x^n\)

Find the pointwise limit of \(f_n(x)=x^n\) on \([0,1]\) and prove convergence is not uniform using the negated definition.

<details><summary>Hint 1</summary>

The limit differs at one from its values below one.

</details>

<details><summary>Hint 2</summary>

Fix tolerance one half and select a point below one whose nth power is one half.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E006 — Worked answer

The limit is \(f(x)=0\) for \(0\le x<1\) and \(f(1)=1\). Fix \(\varepsilon_0=1/2\). Given any \(N\), choose \(n\ge N\) and \(x_n=2^{-1/n}<1\). Then \(f(x_n)=0\) but \(f_n(x_n)=1/2\). Thus one fixed tolerance is violated arbitrarily late at moving points. Equivalently, a uniform limit of continuous functions would be continuous, while this pointwise limit is discontinuous at \(1\).

</details>

### ANA-CH14-E007 — Exercise 7: uniform convergence implies uniform Cauchy

Prove that if \(f_n\to f\) uniformly, then for every \(\varepsilon>0\) there is \(N\) such that \(m,n\ge N\) implies \(\sup_x|f_n(x)-f_m(x)|<\varepsilon\).

<details><summary>Hint 1</summary>

Compare f_n and f_m through their common limit f.

</details>

<details><summary>Hint 2</summary>

Request two uniform errors below epsilon/2 and combine their tail thresholds.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E007 — Worked answer

Given \(\varepsilon>0\), choose \(N\) so \(n\ge N\) implies \(\sup_x|f_n(x)-f(x)|<\varepsilon/2\). If \(m,n\ge N\), then for every \(x\),

\(|f_n(x)-f_m(x)|\le |f_n(x)-f(x)|+|f(x)-f_m(x)|<\varepsilon\).

Taking the supremum preserves the strict bound because both suprema are already below \(\varepsilon/2\). One tail index controls both functions and every point.

</details>

### ANA-CH14-E008 — Exercise 8: completeness under the supremum norm

Let \((f_n)\) be uniformly Cauchy as real-valued functions on a set \(E\). Prove it converges uniformly to a real-valued function.

<details><summary>Hint 1</summary>

First construct a pointwise candidate using completeness of R.

</details>

<details><summary>Hint 2</summary>

Let one index tend to infinity in a uniform Cauchy estimate with tolerance epsilon/2.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E008 — Worked answer

For each fixed \(x\), the scalar sequence \((f_n(x))\) is Cauchy because its differences are bounded by the uniform sup difference. Completeness of \(R\) defines \(f(x)=\lim_n f_n(x)\). Given \(\varepsilon>0\), choose \(N\) such that \(m,n\ge N\) gives \(|f_n(x)-f_m(x)|<\varepsilon/2\) for every \(x\). Fix \(n\ge N\) and let \(m\to \infty\); the inequality yields \(|f_n(x)-f(x)|\le \varepsilon/2<\varepsilon\) for every \(x\). Thus convergence is uniform. Pointwise completeness constructs the candidate; uniform Cauchy control preserves one schedule.

</details>

### ANA-CH14-E009 — Exercise 9: uniform limits preserve boundedness

Suppose every \(f_n\) is bounded and \(f_n\to f\) uniformly. Prove \(f\) is bounded. Show also that all sufficiently late \(f_n\) share a common bound.

<details><summary>Hint 1</summary>

Choose a single late approximant within distance one of f everywhere.

</details>

<details><summary>Hint 2</summary>

Its own boundedness controls f, which in turn gives a common bound for the tail.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E009 — Worked answer

Choose \(N_0\) such that \(n\ge N_0\) implies \(\lVert f_n-f\rVert_\infty<1\). The particular function \(f_{N_0}\) is bounded, say \(|f_{N_0}|\le M\). Hence \(|f|\le |f-f_{N_0}|+|f_{N_0}|\le M+1\). For every \(n\ge N_0\), \(|f_n|\le |f_n-f|+|f|\le M+2\). Thus the limit is bounded and the tail is bounded by one common constant. It is not enough for one arbitrary early term to be bounded: a sequence may become identically equal to an unbounded limit after that term.

</details>

### ANA-CH14-E010 — Exercise 10: a sharp integral error bound

If each \(f_n\) is Riemann integrable on \([a,b]\), \(f_n\to f\) uniformly, and \(\lVert f_n-f\rVert_\infty\le 4/n^3\), give a certified bound for \(|\int _a^b f_n-\int _a^b f|\) and a sufficient \(n\) for error below \(10^{-4}\) when \(b-a=5\).

<details><summary>Hint 1</summary>

Use the integral operator bound in the supremum norm.

</details>

<details><summary>Hint 2</summary>

The resulting error is 20/n cubed; compare the cubes of 58 and 59.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E010 — Worked answer

The integral inequality gives

\(|\int (f_n-f)|\le (b-a)\lVert f_n-f\rVert_\infty\le 20/n^3\).

We need \(20/n^3<10^{-4}\), or \(n^3>200000\). Since \(58^3=195112\) and \(59^3=205379\), \(n=59\) is sufficient. The estimate is a certificate; it need not be the smallest index for a particular pair of functions.

</details>

### ANA-CH14-E011 — Exercise 11: products of uniformly convergent sequences

Suppose \(f_n\to f\) and \(g_n\to g\) uniformly, and the functions are real-valued. Prove \(f_ng_n\to fg\) uniformly when \((f_n)\) is uniformly bounded and \(g\) is bounded, or symmetrically when \((g_n)\) is uniformly bounded and \(f\) is bounded. Explain why the needed bounds are automatic on a tail if both limits are bounded.

<details><summary>Hint 1</summary>

Add and subtract f_n g in the product error.

</details>

<details><summary>Hint 2</summary>

Use the common bound on f_n and the bound on g as coefficients of the two uniform errors.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E011 — Worked answer

Write

\(f_ng_n-fg=f_n(g_n-g)+g(f_n-f)\).

If \(|f_n|\le M\) uniformly and \(g\) is bounded by \(B\), then

\(\lVert f_ng_n-fg\rVert_\infty\le M\lVert g_n-g\rVert_\infty+B\lVert f_n-f\rVert_\infty\to 0\).

If \(f\) and \(g\) are bounded and convergence is uniform, then eventually \(\lVert f_n-f\rVert_\infty<1\), so the tail satisfies \(\lVert f_n\rVert_\infty\le \lVert f\rVert_\infty+1\); similarly for \(g_n\). Finitely many early terms do not affect convergence.

</details>

### ANA-CH14-E012 — Exercise 12: reciprocal stability away from zero

Assume \(f_n\to f\) uniformly and \(|f(x)|\ge m>0\) on \(E\). Prove that, eventually, \(f_n\) never vanishes and \(1/f_n\to 1/f\) uniformly.

<details><summary>Hint 1</summary>

First keep every late denominator at least m/2 away from zero.

</details>

<details><summary>Hint 2</summary>

The reciprocal error is bounded by 2 times the original error divided by m squared.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E012 — Worked answer

Choose \(N\) with \(\lVert f_n-f\rVert_\infty<m/2\) for \(n\ge N\). Then \(|f_n(x)|\ge |f(x)|-|f_n(x)-f(x)|\ge m/2\), so reciprocals exist. Moreover,

\(|1/f_n-1/f|=|f_n-f|/(|f_n||f|)\le 2|f_n-f|/m^2\).

Taking suprema shows the reciprocal error tends to zero. The positive lower bound is essential: small absolute perturbations can radically change reciprocals near a zero.

</details>

### ANA-CH14-E013 — Exercise 13: uniformly continuous outer maps preserve uniform convergence

If \(f_n\to f\) uniformly on \(E\) and \(g\) is uniformly continuous on a set containing all values of \(f_n\) and \(f\), prove \(g\circ f_n\to g\circ f\) uniformly.

<details><summary>Hint 1</summary>

Receive an output tolerance and apply uniform continuity of the outer map.

</details>

<details><summary>Hint 2</summary>

Use its input tolerance as the requested uniform error for f_n-f.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E013 — Worked answer

Given \(\varepsilon>0\), uniform continuity of \(g\) supplies \(\eta>0\) such that \(|u-v|<\eta\) implies \(|g(u)-g(v)|<\varepsilon\) for all relevant values. Uniform convergence supplies \(N\) such that \(n\ge N\) gives \(|f_n(x)-f(x)|<\eta\) for every \(x\). Therefore \(|g(f_n(x))-g(f(x))|<\varepsilon\) for every \(x\), proving uniform convergence. The outer tolerance choice is independent of the values.

</details>

### ANA-CH14-E014 — Exercise 14: mere continuity of the outer map is insufficient

Give continuous \(g\) and uniformly convergent \(f_n\to f\) on an unbounded domain for which \(g\circ f_n\) does not converge uniformly to \(g\circ f\).

<details><summary>Hint 1</summary>

Let a small uniform shift occur on an unbounded range.

</details>

<details><summary>Hint 2</summary>

Compose x+1/n with the square function and examine the term 2x/n.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E014 — Worked answer

On \(R\), let \(f_n(x)=x+1/n\), \(f(x)=x\), and \(g(t)=t^2\). Then \(\lVert f_n-f\rVert_\infty=1/n\), so convergence is uniform. But

\(|g(f_n(x))-g(f(x))|=|2x/n+1/n^2|\),

which is unbounded as \(x\) varies for every fixed \(n\). Thus the composed convergence is not uniform. The continuous square map is not uniformly continuous on all of \(R\); compactness or bounded common range would repair the argument.

</details>

### ANA-CH14-E015 — Exercise 15: apply the Weierstrass M-test

Prove \(\sum_{k=1}^\infty \sin(kx)/k^2\) converges uniformly on \(R\), and bound the tail beginning after \(n\).

<details><summary>Hint 1</summary>

Dominate the sine factor by one.

</details>

<details><summary>Hint 2</summary>

The square-reciprocal majorant gives both the M-test and an integral tail bound 1/n.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E015 — Worked answer

Since \(|\sin(kx)/k^2|\le 1/k^2\) for all \(x\), the convergent numerical \(p\)-series dominates the function series. The M-test gives uniform convergence. Also

\(\sup_x|\sum_{k=n+1}^\infty \sin(kx)/k^2|\le \sum_{k=n+1}^\infty1/k^2\le \int _n^\infty t^{-2}dt=1/n\).

The last inequality supplies a simple certified tail schedule.

</details>

### ANA-CH14-E016 — Exercise 16: sum a uniform geometric function series

For fixed \(0<r<1\), show \(\sum_{k=0}^\infty r^k x^k\) converges uniformly on \([-1,1]\), identify its sum, and bound the truncation error.

<details><summary>Hint 1</summary>

Apply the M-test with r^k on the whole domain.

</details>

<details><summary>Hint 2</summary>

The geometric sum has denominator 1-rx, uniformly separated from zero by 1-r.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E016 — Worked answer

We have \(|r^k x^k|\le r^k\), so the M-test gives uniform convergence. Finite geometric sums yield

\(\sum_{k=0}^n (rx)^k=(1-(rx)^{n+1})/(1-rx)\).

Since \(|rx|\le r<1\), the remainder is \((rx)^{n+1}/(1-rx)\) in magnitude at most \(r^{n+1}/(1-r)\). Passing to the limit gives the sum \(1/(1-rx)\). The denominator is uniformly separated from zero by \(1-r\).

</details>

### ANA-CH14-E017 — Exercise 17: power series are uniform inside their radius

Suppose \(\sum a_k(x-c)^k\) has radius of convergence \(R>0\). Prove it converges uniformly on every closed interval \(|x-c|\le r<R\).

<details><summary>Hint 1</summary>

Choose an intermediate radius s strictly between r and R.

</details>

<details><summary>Hint 2</summary>

Convergence at s bounds |a_k|s^k; dominate on the smaller interval by a geometric series with ratio r/s.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E017 — Worked answer

Choose \(s\) with \(r<s<R\). Convergence at \(x=c+s\) implies the numerical terms \(|a_k|s^k\) are bounded, say by \(M\). Then

\[|a_k(x-c)^k|\le M(r/s)^k\]

for \(|x-c|\le r\). The geometric majorant converges because \(r/s<1\), so the M-test gives uniform convergence. No conclusion about \(|x-c|=R\) follows; endpoints need separate analysis.

</details>

### ANA-CH14-E018 — Exercise 18: prove the differentiated-limit theorem

Let \(f_n\) be differentiable on \([a,b]\), assume \(f_n(x_0)\) converges at one point, and assume \(f_n'\to g\) uniformly. Prove \((f_n)\) is uniformly Cauchy.

<details><summary>Hint 1</summary>

Apply the mean value theorem to f_n-f_m between the anchor point and x.

</details>

<details><summary>Hint 2</summary>

The uniform function difference is bounded by the anchor difference plus interval length times derivative difference.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E018 — Worked answer

For \(m,n\), apply the mean value theorem to \(f_n-f_m\) between \(x_0\) and \(x\). It gives

\(|(f_n-f_m)(x)-(f_n-f_m)(x_0)|\le (b-a)\lVert f_n'-f_m'\rVert_\infty\).

Therefore

\(\lVert f_n-f_m\rVert_\infty\le |f_n(x_0)-f_m(x_0)|+(b-a)\lVert f_n'-f_m'\rVert_\infty\).

The scalar anchor values are Cauchy, and uniform convergence of derivatives makes the derivative sequence uniformly Cauchy. Both terms become small together, so the functions are uniformly Cauchy and hence converge uniformly. A later argument passes the derivative limit through an integral or difference quotient to show the limit derivative is \(g\).

</details>

### ANA-CH14-E019 — Exercise 19: uniform function convergence does not control derivatives

Let \(f_n(x)=\sin(nx)/n\) on \([0,2\pi]\). Analyze uniform convergence of \(f_n\) and convergence of \(f_n'\).

<details><summary>Hint 1</summary>

Bound the functions by 1/n before differentiating.

</details>

<details><summary>Hint 2</summary>

The derivatives are cos(nx), whose fixed value at zero already obstructs convergence to the derivative of the limit.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E019 — Worked answer

Since \(|f_n(x)|\le 1/n\), the functions converge uniformly to zero. But \(f_n'(x)=\cos(nx)\). This derivative sequence does not even converge pointwise at many points and cannot converge uniformly; at \(x=0\) every term is one, whereas the derivative of the uniform limit is zero. Thus differentiating a uniform limit requires additional derivative control.

</details>

### ANA-CH14-E020 — Exercise 20: pointwise convergence need not preserve integrals

On \([0,1]\), let \(f_n=n\,1_{(0,1/n)}\), with \(f_n(0)=0\). Prove \(f_n\to 0\) pointwise but the integrals do not converge to the integral of the limit.

<details><summary>Hint 1</summary>

Fix a positive x before taking n large.

</details>

<details><summary>Hint 2</summary>

Each spike has area one despite eventually vanishing at every fixed point.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E020 — Worked answer

At \(x=0\), every value is zero because the interval is open at zero. For any fixed \(x>0\), eventually \(1/n<x\), so \(f_n(x)=0\). Hence convergence is pointwise everywhere to zero. Yet each Riemann (and Lebesgue) integral equals \(n\cdot (1/n)=1\), while the limit has integral zero. The heights are unbounded and the mass concentrates near zero; neither uniform convergence nor a common integrable dominator is present.

</details>

### ANA-CH14-E021 — Exercise 21: local uniformity is weaker than global uniformity

Show \(f_n(x)=x/n\) converges uniformly to zero on every compact subset of \(R\) but not uniformly on \(R\).

<details><summary>Hint 1</summary>

Restrict first to a fixed compact interval [-M,M].

</details>

<details><summary>Hint 2</summary>

Its error is at most M/n, while the full-domain error is unbounded and x=n gives a persistent witness.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E021 — Worked answer

On \([-M,M]\), \(\sup|x/n|=M/n\to 0\), so convergence is uniform for each fixed compact interval. On all of \(R\), \(\sup_x|x/n|=\infty\) for every \(n\), and taking \(x=n\) already gives error one. The compact set must be fixed before the convergence schedule is chosen; allowing it to expand with \(n\) changes the claim.

</details>

### ANA-CH14-E022 — Exercise 22: audit a failed interchange of derivative and limit

Let \(f_n(x)=x^n/n\) on \([0,1]\). Prove \(f_n\to 0\) uniformly, find the pointwise limit of the derivatives, and explain the failed theorem hypothesis.

<details><summary>Hint 1</summary>

Differentiate x^n/n and separate x below one from the endpoint one.

</details>

<details><summary>Hint 2</summary>

The discontinuous derivative limit rules out uniform derivative convergence; a moving point with power one half is a direct witness.

</details>

<details><summary>Solution</summary>

#### ANA-CH14-E022 — Worked answer

Since \(0\le x^n/n\le 1/n\), the functions converge uniformly to zero. Their derivatives are \(f_n'(x)=x^{n-1}\). For \(0\le x<1\), these tend to zero, while at \(x=1\) every derivative equals one. Thus the pointwise derivative limit is discontinuous and is not the derivative of the zero limit at the endpoint. The derivatives do not converge uniformly: for \(n\ge2\), choosing \(x_n=2^{-1/(n-1)}\) gives derivative value \(1/2\) at a point where the limiting derivative is zero. Uniform convergence of the original functions alone does not license differentiation through the limit.

</details>

## 13. Beyond this book

Measure theory replaces uniform bounds with flexible domination theorems that can control limit interchange almost everywhere. Functional analysis studies complete normed spaces of functions and operators. Fourier analysis asks which modes converge pointwise, uniformly, in mean square, or only as distributions. Numerical analysis turns uniform and norm estimates into certified approximation error.

Return to the [book overview](#/books/proof-safe-real-analysis) to revisit completeness, compactness, and uniformity as one dependency chain, or return to [Quantifiers and Completeness](quantifiers-completeness.md) to audit the quantifier order behind any convergence claim.

## Retained source lineage

The earlier [Functions and Equations uniform-convergence reading](../functions-equations-proof/chapter-12.md) remains preserved with its original source and exercise identities. Its chapter destination now names this developed Real Analysis chapter. That relationship identifies the continuation of the topic; it does not rename the earlier exercises or silently transfer learner notes to a new exercise family. The present proofs supply the sustained uniform Cauchy, integration, differentiation and series arguments used in the primary route.

## Summary

Pointwise convergence gives each input its own tail schedule; uniform convergence provides one schedule for the entire stated domain. That common control preserves continuity and Riemann integrability and bounds integral errors. Derivative interchange additionally needs uniform derivative control and an anchor value. Numerical majorants yield uniform function series through the M-test. Moving witnesses, concentrating spikes and domains expanding toward a boundary expose the limits of weaker convergence claims.
