
# Lesson 3 — Positive series and remainder bounds

**Question.** Once a positive series converges, how can a finite computation come with a *certified* error?

**Prerequisite check.** For a nonnegative sequence $(a_n)$, show that $S_{N+1}-S_N=a_{N+1}\ge0$. If the conclusion “bounded partial sums therefore converge” is unfamiliar, redo the supremum proof in [Lesson 2](completeness-and-cauchy-tails.md). For the integral estimates below, recall that a decreasing function has a larger value at the left end of an interval than at the right end; review areas under a graph in [Calculus of Change](#/courses/atlas-calculus-change) if necessary.

## Comparison is an order argument

**Positive comparison theorem.** Suppose $a_n,b_n\ge0$ from some index onward. If $a_n\le b_n$ there and $\sum b_n$ converges, then $\sum a_n$ converges. Conversely, if $b_n\le a_n$ there and $\sum b_n$ diverges, then $\sum a_n$ diverges. Finite prefixes do not affect convergence.

**Proof.** Starting at the first index where the inequalities hold, every partial sum of the $a$-tail is at most the corresponding partial sum of the $b$-tail. The latter are bounded when $\sum b_n$ converges. The former are nondecreasing and bounded, hence converge by Lesson 2. For the second claim, suppose instead that $\sum a_n$ converged. Applying the first claim with $b$ as the smaller series would force $\sum b_n$ to converge, a contradiction. $\square$

For $n\ge1$, $0<n/(n^3+1)\le1/n^2$, so $\sum n/(n^3+1)$ converges once $\sum1/n^2$ is established below. The reverse-looking facts “smaller than a divergent series” and “larger than a convergent series” give no verdict.

## Geometric domination and the ratio test

Suppose $a_n\ge0$ eventually and for some $q<1$ and index $N_0$,
$$
a_{n+1}\le q a_n\qquad(n\ge N_0).
$$
Here $q$ can be taken in $[0,1)$ unless the tail is already zero. Induction gives $a_{N_0+j}\le a_{N_0}q^j$. Comparison with a geometric series proves $\sum a_n$ converges. The same reasoning applies to $|u_n|$ for signed or complex terms and gives **absolute** convergence.

If $u_n\ne0$ eventually and $|u_{n+1}/u_n|\to q_0<1$, choose any $q$ with $q_0<q<1$; eventually the displayed domination applies. If the ratio limit is $q_0>1$, choose $1<q<q_0$; magnitudes eventually grow by at least $q$, so $u_n\nrightarrow0$ and the series diverges. A ratio limit of $1$ gives no verdict: both $\sum1/n$ and $\sum1/n^2$ have ratio limit $1$.

**Worked calculation.** For $a_n=n/2^n$, $a_{n+1}/a_n=(n+1)/(2n)\le3/4$ for $n\ge2$. Thus for $N\ge2$, the unknown remainder obeys
$$
0\le\sum_{n=N+1}^{\infty}\frac n{2^n}
\le \frac{a_{N+1}}{1-3/4}
=\frac{4(N+1)}{2^{N+1}}.
$$
The bound is certified from one computed term and an eventual ratio bound; it is not a claim that the ratio is constantly $3/4$.

## Integral comparison and the remainder

Let $f:[1,\infty)\to(0,\infty)$ be continuous and nonincreasing, and put $a_n=f(n)$. On each interval $[k,k+1]$,
$$
f(k+1)\le f(x)\le f(k).
$$
Integrate and add finitely many inequalities. For $m>N$ this gives
$$
\int_{N+1}^{m+1}f(x)\,dx
\le\sum_{k=N+1}^{m}f(k)
\le\int_N^m f(x)\,dx.
$$
Consequently the positive series and the improper integral $\int_1^\infty f(x)\,dx$ have the same convergence verdict: their partial sums and truncated integrals bound each other up to finite initial pieces. When they converge, passage to increasing limits yields the **remainder bound**
$$
\int_{N+1}^{\infty}f(x)\,dx
\le R_N:=\sum_{k=N+1}^{\infty}f(k)
\le\int_N^{\infty}f(x)\,dx.
$$
Continuity ensures the displayed integrals are ordinary Riemann integrals on finite intervals; monotonicity is what supplies the inequalities.

For $f(x)=x^{-p}$, $p>0$, direct integration shows $\int_1^\infty x^{-p}\,dx$ converges exactly when $p>1$. Thus $\sum n^{-p}$ converges exactly for $p>1$. In particular, for $p=2$,
$$
\frac1{N+1}\le R_N\le\frac1N.
$$
To certify $R_N<0.001$, $N=1001$ works from the upper bound; $N=1000$ only certifies $R_N\le0.001$. The true remainder is strictly below $1/N$ because $x^{-2}$ is strictly decreasing, but the stated nonstrict certificate does not itself express that stronger fact.

## Guided proof practice

### 1. Starter — Select a comparison

Decide whether $\sum_{n=1}^{\infty}1/(n^2+4)$ converges. Does the comparison compute its sum?

**Hint.** Compare denominators for $n\ge1$.

**Reasoned solution.** $0<1/(n^2+4)\le1/n^2$, and the latter series converges by the integral argument. Positive comparison proves convergence. It does not determine the exact sum.

### 2. Core — Turn an integral into an error budget

For $\sum_{n=1}^{\infty}1/n^3$, find an $N$ for which the integral bound certifies $R_N<0.001$.

**Hint.** $\int_N^\infty x^{-3}\,dx=1/(2N^2)$.

**Reasoned solution.** The function is positive, continuous, and decreasing. The bound gives $R_N\le1/(2N^2)$. At $N=23$, $1/(2\cdot23^2)=1/1058<1/1000$, so $23$ is sufficient. The same bound at $N=22$ is $1/968>1/1000$, so it does not certify the requested error there. This says nothing about whether the *actual* error at $22$ is below the target.

### 3. Transfer — Diagnose an inconclusive ratio

A calculation gives $\lim a_{n+1}/a_n=1$ for positive terms. A student concludes divergence. Produce one convergent and one divergent series with this ratio limit.

**Hint.** Use two powers of $n$.

**Reasoned solution.** For $a_n=1/n^2$, the ratio is $(n/(n+1))^2\to1$, yet the series converges. For $a_n=1/n$, it is $n/(n+1)\to1$, yet the series diverges. The ratio theorem requires a limit strictly below or above $1$. The integral test resolves both examples.

### 4. Proof audit — Audit a proposed comparison proof

“Because $1/(n^2+4)\le1/n$ and $\sum1/n$ diverges, $\sum1/(n^2+4)$ diverges.” Identify the invalid direction and repair the proof.

**Hint.** Think of a smaller positive series whose total stays finite.

**Reasoned solution.** Being below a divergent series gives no upper bound on partial sums. The correct useful inequality is $1/(n^2+4)\le1/n^2$, where the *larger* comparison series converges. This proves the given series converges, contradicting the proposed conclusion. The direction of an inequality is part of a theorem's hypotheses, not a cosmetic detail.

**Connection to Lesson 4.** Positive comparison controls magnitudes. For signed series, that can prove absolute convergence, but cancellation can also produce convergence when the absolute-value series diverges.
