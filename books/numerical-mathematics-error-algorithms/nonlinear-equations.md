
# Nonlinear Equations and Root Certificates

## Local prerequisites and scope

Assume continuity, derivatives, and elementary algebra. We study algorithms for \(f(x)=0\) and the evidence they return. Existence, localization, rapid local convergence, and a small residual are distinct claims.

## Bracketing starts with a theorem

**Theorem 2.4 (Intermediate-value).** If \(f\) is continuous on \([a,b]\) and \(f(a)f(b)<0\), then at least one \(r\) in \((a,b)\) satisfies \(f(r)=0\).

The strict sign change and continuity are material. A repeated root such as \(f(x)=(x-1)^{2}\) has no sign change. A discontinuity such as \(f(x)=1/x\) changes sign across zero without having a root there.

**Bisection algorithm.** Maintain endpoints with opposite signs. Evaluate the midpoint and retain the half with a sign change. After \(n\) bisections, the interval width is \((b-a)/2^n\); its midpoint has absolute location error at most \((b-a)/2^{n+1}\) for some root inside.

This is a certificate about location, not necessarily about \(\lvert f(x)\rvert\). A steep function can have a moderate residual at a close point; a flat function can have a tiny residual far from the desired root.

### Worked bisection

**Example 2.0 (Bisection with a certified bracket).**

To solve \(x^{3}-x-1=0\), note \(f(1)=-1\) and \(f(2)=5\). The first midpoints are \(1.5\) with \(f=0.875\), \(1.25\) with \(f=-0.296875\), and \(1.375\) with positive value. After three steps the certified bracket is \([1.25,1.375]\). No decimal root-finder output gives a stronger existence statement unless it supplies comparable evidence.

To guarantee midpoint error at most \(10^{-6}\) from the original width one, require \(1/2^{n+1}\le 10^{-6}\), so \(n\ge 19\). This is a worst-case deterministic work estimate.

## Fixed-point iteration and contraction

Rewrite the equation as \(x=g(x)\) and iterate \(x_{k+1}=g(x_k)\). Algebraically equivalent rearrangements can have very different dynamics.

**Theorem 2.5 (Contraction, interval form).** Suppose \(g\) maps a closed interval \(I\) into itself and \(\lvert g'(x)\rvert\le q<1\) throughout \(I\). Then \(g\) has exactly one fixed point in \(I\), every iteration starting in \(I\) converges to it, and

\(\lvert x_k-r\rvert \le q^k \lvert x_0-r\rvert\).

A computable a posteriori version is \(\lvert x_k-r\rvert \le q\lvert x_k-x_{k-1}\rvert/(1-q)\). The invariant interval prevents escape; the strict contraction provides uniqueness and convergence.

**Boundary example.** Solving \(x^{2}=2\) via the genuinely equivalent rearrangement \(g(x)=2/x\) has fixed points \(\sqrt{2}\) and \(-\sqrt{2}\). At either one, \(g'(x)=-2/x^{2}=-1\), so the strict contraction hypothesis fails. Indeed, unless a start is already a fixed point, the iteration alternates between \(x_0\) and \(2/x_0\): it is typically a two-cycle rather than a convergent sequence. The Newton rearrangement \((x+2/x)/2\) has derivative zero at the positive root and converges rapidly from suitable positive starts.

## Newton's method as local linearization

Approximate \(f(x+s)\) by \(f(x)+f'(x)s\). Setting the model to zero gives

\(x_{k+1}=x_k-f(x_k)/f'(x_k)\).

**Theorem 2.6 (Local convergence).** If \(f\) has two continuous derivatives near a simple root \(r\), \(f(r)=0\), and \(f'(r) \ne 0\), then starts sufficiently close to \(r\) produce Newton iterates converging quadratically: there is a constant \(C\) with \(\lvert e_{k+1}\rvert\le C\lvert e_k\rvert^{2}\) for all sufficiently large \(k\).

The phrase “sufficiently close” cannot be omitted. Far away, a tangent can jump outside the intended region; a zero derivative can make the step undefined; a nonfinite evaluation can terminate the computation.

### Multiplicity changes the rate

For \(f(x)=(x-r)^m\), Newton gives

\(x_{k+1}-r = (1-1/m)(x_k-r)\).

When \(m>1\), convergence is only linear. If multiplicity is known, the modified step \(x-m f/f'\) restores one-step convergence for this exact model and quadratic behavior more generally under suitable smoothness. Estimating multiplicity from rounded data is itself sensitive.

## Secant, safeguarding, and hybrid evidence

The secant method replaces the derivative by a divided difference. Its order near a simple smooth root is approximately the golden ratio, but it lacks a bracket unless one is maintained separately. Brent-style hybrids combine a certified bracket with interpolation steps: fast when the model behaves well, conservative when it does not.

A robust solver state should include:

- current bracket if one exists;
- iterate and residual;
- step size and proposed step type;
- finite-value and domain checks;
- stopping reason, iteration count, and tolerance definitions.

## Residual-to-error reasoning

If \(\lvert f'(x)\rvert\ge m>0\) throughout an interval between an approximation \(\widehat{x}\) and a root \(r\), the mean value theorem yields

\(\lvert \widehat{x}-r\rvert \le \lvert f(\widehat{x})\rvert/m\).

Without a lower derivative bound, a small residual is not a location certificate. For \(f(x)=10^{-12}(x-10^{6})\), the residual at zero is only \(10^{-6}\), yet the root is a million units away.

## Stopping rules

Stop tests should combine evidence:

- bracket width below an absolute-plus-relative location tolerance;
- scaled residual below a function tolerance;
- step small relative to the variable scale;
- no evidence of stagnation, cycling, or invalid evaluations.

A small step can result from rounding or a failed line search while the residual remains large. A small residual can result from scaling. Reaching the iteration limit is a failure state, not convergence.

## Worked diagnostic: Newton on a cube root

**Example 2.5 (Newton on a cube root).**

For \(f(x)=x^{3}-2\), Newton gives \(x_{\mathrm{new}}=(2x+2/x^{2})/3\). Starting at \(x_0=1\),

\(x_1=4/3\), and \(x_2=(8/3+18/16)/3=91/72\), approximately \(1.26389\).

The true positive cube root is about \(1.25992\). To certify rather than merely observe, retain a sign-changing bracket such as \([1,2]\), update it after every accepted Newton point, and fall back to bisection if a Newton proposal leaves the bracket.

## Common errors

- Assuming a sign change when a discontinuity lies inside the bracket.
- Reporting Newton's quadratic rate without a simple root and local-start hypothesis.
- Dividing by a tiny derivative without detecting the ill-conditioned step.
- Treating two agreeing methods as independent when they share the same formula and rounding path.
- Solving one root when the task requires finding all roots in a region.

## Proofs behind the iteration guarantees

**Proposition 2.1 (What bisection preserves).** Let $f$ be continuous on $[a_0,b_0]$ and have certified opposite signs at the endpoints. In exact arithmetic, each accepted bisection either finds an exact zero or produces a nested sign-changing interval of half the previous width. After $k$ accepted bisections, any midpoint of the retained interval has distance at most $(b_0-a_0)/2^{k+1}$ from a root in that interval.

*Proof.* Continuity and opposite signs give a root by the intermediate value theorem. If the midpoint is not a zero, its sign agrees with exactly one endpoint, so retaining the other endpoint and the midpoint preserves a strict sign change. The intermediate value theorem applies again on that half. Induction gives width $(b_0-a_0)/2^k$. A midpoint is no farther than half this width from any point of its interval, including an enclosed root. ∎

The theorem concerns accepted, valid sign decisions. A floating-point value close to zero may have the wrong computed sign because its evaluation rounded. An implementation claiming a certified bracket needs a sign enclosure or an evaluation-error bound separating that value from zero. If the rounded midpoint equals an endpoint, the interval is no longer halved; the solver should return a stagnation or precision-limit reason rather than continue claiming the real-arithmetic work bound. Existence in the bracket also does not imply uniqueness: that requires an additional property, such as a derivative of one nonzero sign throughout it.

**Theorem 2.2 (Interval contraction, with proof).** Let $I=[a,b]$ be a nonempty closed bounded interval. Suppose $g:I\to I$ is continuous and $|g(x)-g(y)|\le q|x-y|$ for all $x,y\in I$, where $0\le q<1$. There is exactly one fixed point $r\in I$, and every iteration $x_{k+1}=g(x_k)$ starting in $I$ converges to it. For $k\ge1$,
\[
|x_k-r|\le\frac{q}{1-q}|x_k-x_{k-1}|.
\]

*Proof.* Invariance keeps every iterate in $I$. Repeated contraction gives $|x_{j+1}-x_j|\le q^j|x_1-x_0|$. For $m>k$, the triangle inequality and the finite geometric sum imply
\[
|x_m-x_k|\le\sum_{j=k}^{m-1}q^j|x_1-x_0|
\le\frac{q^k}{1-q}|x_1-x_0|.
\]
The right side tends to zero, so the sequence is Cauchy. Completeness of the real numbers gives a limit $r$, and closedness of $I$ keeps it in $I$. Continuity gives $g(r)=\lim g(x_k)=\lim x_{k+1}=r$. If $r,s$ were fixed, $|r-s|\le q|r-s|$ would force equality of the points. Applying the contraction repeatedly to a root gives $|x_k-r|\le q^k|x_0-r|$. Finally the geometric tail of successive differences beginning at $x_k$ is bounded by $q|x_k-x_{k-1}|/(1-q)$, proving the computable bound. The case $q=0$ reaches the unique constant image after one step and obeys the same formula. ∎

A derivative bound $|g'|\le q$ on the interval supplies the Lipschitz inequality by the mean value theorem. Neither a derivative sample at the current iterate nor the condition $|g'(r)|<1$ alone verifies invariance of a large proposed interval. The theorem names the region where all iterates and derivative bounds must remain.

**Theorem 2.3 (Quantitative local Newton convergence).** Suppose $f\in C^2$ on a neighbourhood of a root $r$ with $f'(r)\ne0$. Choose a closed interval $I=[r-d,r+d]$ where $|f'|\ge m>0$ and $|f''|\le M$, and put $C=M/(2m)$. If $Cd\le1/2$, then Newton starting in $I$ remains there and satisfies $|x_{k+1}-r|\le C|x_k-r|^2$. In particular the errors tend to zero.

*Proof.* The derivative lower bound makes each step defined. Taylor's theorem about the current point, evaluated at $r$, gives
\[
0=f(r)=f(x)+f'(x)(r-x)+\tfrac12f''(\xi)(r-x)^2
\]
for an intermediate point $\xi\in I$. Rearranging the Newton formula yields
\[
x-\frac{f(x)}{f'(x)}-r
=\frac{f''(\xi)}{2f'(x)}(x-r)^2.
\]
Hence the next error is at most $C|x-r|^2\le|x-r|/2\le d/2$. This proves invariance and geometric decrease, while the stronger squared-error estimate proves the quadratic upper bound. If $M=0$, the affine function reaches its root in one step. For a general $C^2$ function with $f'(r)\ne0$, continuity first supplies a positive derivative lower bound on a small interval, and boundedness of $f''$ supplies $M$ there. Shrink the interval further to obtain $Cd\le1/2$. ∎

The proof is a local existence statement about a convergence neighbourhood. It does not provide that neighbourhood from a single observed residual. It also distinguishes an upper quadratic estimate from an exact asymptotic order: for a linear function, convergence is finite rather than an indefinitely repeated quadratic pattern.

## A worked contraction region

**Example 2.4 (An invariant Newton rearrangement).** For $x^2=2$, use $g(x)=(x+2/x)/2$ on $[1,2]$. The inequality $(x-\sqrt2)^2\ge0$ gives $g(x)\ge\sqrt2$. Also $(x-1)(x-2)\le0$ implies $x+2/x\le3$, hence $g(x)\le3/2$. Thus $g([1,2])\subseteq[1,2]$. Its derivative is $(1-2/x^2)/2$, ranging from $-1/2$ to $1/4$, so a valid contraction constant is $q=1/2$.

Starting from $x_0=1$, the first two iterates are $x_1=3/2$ and $x_2=17/12$. The a posteriori bound gives
\[
|x_2-\sqrt2|\le\frac{1/2}{1-1/2}|17/12-3/2|=\frac1{12}.
\]
This bound is conservative but proved for this specified invariant interval. The exact difference is much smaller; a tighter local interval could improve the constant. The purpose of the calculation is to show what turns plausible iterations into a statement about their target.

## A safeguarded algorithm and what it returns

A scalar routine can combine the bracket's existence information with Newton's local acceleration. Keep the original domain and the last certified bracket separate from a proposed point. At every iteration, verify that the Newton denominator and function evaluations are defined and finite; reject a proposal outside the bracket; otherwise use a bracket-preserving accepted point. Bisection is the fallback when the faster proposal does not satisfy the declared progress rule.

A useful abstract routine returns the bracket, a chosen approximation, the function enclosure or residual, the number of accepted steps, and a reason for stopping. These data allow a reader to distinguish a tolerance met by a theorem from an iteration cap or arithmetic stagnation. A small step by itself is not an existence certificate. A narrow bracket without certified sign decisions is not the same mathematical object as the interval in Proposition 2.1.

The usual golden-ratio order of the secant method is a further local result, cited to Kelley's treatment rather than proved here. Its standard asymptotic formulation uses a simple sufficiently smooth root and nondegeneracy of the leading error term; special functions can have a higher order or terminate early. No global convergence claim follows merely because an algorithm is named “Newton,” “secant,” or “hybrid.”
## Several roots and the meaning of an error certificate

Consider the equation $f(x)=x^2-1=0$ on the whole real line. A small residual alone cannot identify which root is intended: points near either one or minus one have small residual. A certificate relative to a named root needs a region isolating it. On the interval from one half to three halves, the derivative is at least one. The mean value theorem therefore proves that every point in this interval has distance from the positive root at most its absolute residual. On the negative interval, the derivative has the opposite sign but its absolute value again supplies the required estimate. Mixing the two intervals would destroy the derivative lower bound.

More generally, if a continuously differentiable scalar function has derivative of constant sign and absolute value at least a positive number throughout an interval, it has at most one zero there. If a sign change also brackets a zero, existence follows by continuity and the same derivative bound converts residual to distance. These are separate logical steps: a derivative bound gives uniqueness and conditioning, while the sign change gives existence.

This separation matters when a numerical iterate leaves its isolating interval. A small residual outside the interval is still numerical evidence, but the earlier certificate no longer applies. Retaining an enclosure during iteration protects the mathematical interpretation of the final answer as well as the iteration itself.

## Practice with solutions

### Exercise 2.1
<a id="nonlinear-equations-ex-1"></a>

**Repeated root.**

Why will sign-change scanning miss \(f(x)=(x-2)^{2}\)?

<details>
<summary>Hint 1</summary>

Examine the sign on each side of the repeated root.

</details>
<details>
<summary>Hint 2</summary>

A square can vanish while remaining nonnegative everywhere.

</details>
<details>
<summary>Solution</summary>

**Solution.** The function is nonnegative on both sides and touches zero without crossing. Detecting it needs other evidence, such as derivative information, minimization, interval methods, or a structural polynomial analysis.

</details>

### Exercise 2.2
<a id="nonlinear-equations-ex-2"></a>

**Bisection budget.**

A bracket has width 12. How many bisections guarantee width at most \(10^{-3}\)?

<details>
<summary>Hint 1</summary>

Use the retained bracket's width, rather than midpoint error.

</details>
<details>
<summary>Hint 2</summary>

Find the least integer $k$ with $2^k\ge12000$.

</details>
<details>
<summary>Solution</summary>

**Solution.** Require \(12/2^n\le 10^{-3}\), so \(2^n\ge 12000\); \(n=14\) works because \(16384\ge 12000\), while \(n=13\) does not.

</details>

### Exercise 2.3
<a id="nonlinear-equations-ex-3"></a>

**Residual certificate.**

On \([1,2]\), suppose \(f(r)=0\) and \(f'(x)\ge 3\). If \(\widehat{x}\in[1,2]\) and \(\lvert f(\widehat{x})\rvert=0.006\), what follows?

<details>
<summary>Hint 1</summary>

Use the mean value theorem between the approximation and the root.

</details>
<details>
<summary>Hint 2</summary>

Divide the residual magnitude by the supplied derivative lower bound.

</details>
<details>
<summary>Solution</summary>

**Solution.** By the mean value theorem, \(\lvert \widehat{x}-r\rvert\le 0.006/3=0.002\), provided \(\widehat{x}\) and the relevant root lie in the interval and the derivative bound holds between them.

</details>

### Exercise 2.4
<a id="nonlinear-equations-ex-4"></a>

**A false sign bracket.**

Why does the sign change of $f(x)=1/x$ between $-1$ and $1$ not certify a root?

<details>
<summary>Hint 1</summary>

Check the continuity hypothesis on the whole closed interval.

</details>
<details>
<summary>Hint 2</summary>

Zero is inside the proposed bracket but outside the function's domain.

</details>
<details>
<summary>Solution</summary>

**Solution.** The function is undefined at zero and is not continuous on $[-1,1]$. The intermediate value theorem cannot be applied there. In fact $1/x$ is never zero at any domain point, so no root is enclosed. Opposite endpoint signs alone are insufficient.

</details>

### Exercise 2.5
<a id="nonlinear-equations-ex-5"></a>

**A midpoint-error budget.**

A valid initial bracket has width three. How many bisections guarantee midpoint location error at most $10^{-4}$?

<details>
<summary>Hint 1</summary>

After $k$ bisections, midpoint error is bounded by half the retained width.

</details>
<details>
<summary>Hint 2</summary>

Solve $3/2^{k+1}\le10^{-4}$ using neighbouring powers of two.

</details>
<details>
<summary>Solution</summary>

**Solution.** The requirement is $2^{k+1}\ge30000$. Since $2^{15}=32768$ and $2^{14}=16384$, the least count is $k=14$. This bound presumes each accepted bisection really halves a certified sign-changing bracket.

</details>

### Exercise 2.6
<a id="nonlinear-equations-ex-6"></a>

**A contraction with a known root.**

For $g(x)=(x+3)/4$ on $[0,2]$, prove contraction and compute $x_1,x_2$ from $x_0=0$, together with an a posteriori error bound at $x_2$.

<details>
<summary>Hint 1</summary>

The derivative is constant and the image interval is easy to compute.

</details>
<details>
<summary>Hint 2</summary>

Use $q/(1-q)$ times the latest increment.

</details>
<details>
<summary>Solution</summary>

**Solution.** The image is $[3/4,5/4]\subset[0,2]$ and $|g'|=1/4<1$. The fixed point is one. The iterates are $x_1=3/4$ and $x_2=15/16$. The a posteriori bound is $(1/3)|15/16-3/4|=(1/3)(3/16)=1/16$, which equals the actual error here.

</details>

### Exercise 2.7
<a id="nonlinear-equations-ex-7"></a>

**Two exact Newton steps.**

Apply Newton to $x^2-2$ from $x_0=2$ and compute the next two iterates exactly.

<details>
<summary>Hint 1</summary>

Use $x_{k+1}=(x_k+2/x_k)/2$.

</details>
<details>
<summary>Hint 2</summary>

Keep the second calculation as a rational number.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first iterate is $(2+1)/2=3/2$. The next is $(3/2+4/3)/2=17/12$. Both are positive, so neither derivative denominator vanishes. Exact rational steps demonstrate the algorithm, while convergence from a region requires an argument such as Example 2.4.

</details>

### Exercise 2.8
<a id="nonlinear-equations-ex-8"></a>

**A Newton two-cycle.**

For $f(x)=x^3-2x+2$, show that Newton starting at zero cycles. Does this contradict the local theorem?

<details>
<summary>Hint 1</summary>

Evaluate $f$ and $f'$ at zero and one.

</details>
<details>
<summary>Hint 2</summary>

The two Newton updates exchange those points.

</details>
<details>
<summary>Solution</summary>

**Solution.** At zero, $f=2$ and $f'=-2$, so the next point is one. At one, $f=1$ and $f'=1$, so the next point is zero. Thus the sequence repeats forever. The local theorem only guarantees convergence for starts sufficiently close to a simple root, not for every start. Indeed this function has a negative root between $-2$ and $-1$, outside this cycle.

</details>

### Exercise 2.9
<a id="nonlinear-equations-ex-9"></a>

**Known multiplicity.**

For $f(x)=(x-3)^4$ and $x\ne3$, compute ordinary Newton's error factor and the multiplicity-corrected step.

<details>
<summary>Hint 1</summary>

Differentiate the fourth power.

</details>
<details>
<summary>Hint 2</summary>

Compare $f/f'$ with the error $x-3$.

</details>
<details>
<summary>Solution</summary>

**Solution.** Here $f/f'=(x-3)/4$. Ordinary Newton leaves error $(3/4)(x-3)$, so convergence is linear. The corrected step $x-4f/f'$ equals three exactly for this pure-power model. At the root itself the quotient is undefined, so a solver should first recognize that a root has already been found.

</details>

### Exercise 2.10
<a id="nonlinear-equations-ex-10"></a>

**The residual's scale.**

For $f(x)=10^{-12}(x-10^6)$, compare the residual at zero with its distance from the root and verify a derivative-based location bound.

<details>
<summary>Hint 1</summary>

The root is unaffected by multiplication of the equation by a nonzero constant.

</details>
<details>
<summary>Hint 2</summary>

Use the derivative lower bound $m=10^{-12}$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The residual magnitude at zero is $10^{-6}$ while the location error is $10^6$. Since $|f'|=10^{-12}$ everywhere, the mean value bound gives $|x-r|\le|f(x)|/10^{-12}$, exactly $10^6$ at zero. A tiny unscaled residual did not establish a nearby root.

</details>


<a id="onward"></a>
## Connections

Nonlinear systems replace slopes by Jacobian solves and require globalization, scaling, and rank diagnostics. Those ideas return in the optimization book. The root-finding lesson remains: convergence speed matters only after the mathematical target and certificate are clear.

<a id="source-and-verification-note"></a>
## Sources

The original Euler chapter's examples, hypotheses, and three exercise solutions are retained. For a primary textbook treatment see C. T. Kelley, [Iterative Methods for Linear and Nonlinear Equations](https://epubs.siam.org/doi/book/10.1137/1.9781611970944), SIAM, 1995, and Endre Süli and David F. Mayers, [An Introduction to Numerical Analysis](https://www.cambridge.org/core/books/an-introduction-to-numerical-analysis/FD8BCAD7FE68002E2179DFF68B8B7237), Cambridge University Press, 2003. The bracket, contraction, and local Newton arguments used here are proved in the text; the secant asymptotic rate is explicitly cited. The earlier references to Ortega–Rheinboldt and Deuflhard remain further reading, without an invented edition-specific theorem locator. Links consulted 13 November 2026. Original Euler prose is licensed CC BY-SA 4.0.

## Summary

Bisection converts continuity and certified endpoint signs into a shrinking root interval. A contraction needs both a self-map and a uniform Lipschitz constant below one; its geometric-tail proof gives a computable error estimate. Newton's quadratic estimate follows from a simple root, smoothness, a derivative lower bound, and a sufficiently small invariant neighbourhood. Safeguarding broadens useful behavior without turning those local results into a universal guarantee. A residual becomes a location bound only when its scale and an appropriate derivative bound are supplied.
