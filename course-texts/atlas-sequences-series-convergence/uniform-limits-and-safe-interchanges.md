
# Lesson 6 — Uniform limits and safe interchanges

**Question.** When may we pass from limits of functions to continuity, definite integrals, or derivatives of the limiting function?

**Prerequisite check.** State what it means for a sequence of numbers to converge from [Lesson 1](quantified-sequence-limits.md), and recall that continuous functions on a closed bounded interval are Riemann integrable. If the latter theorem is new, use [Calculus of Change](#/courses/atlas-calculus-change) for the integral sections; here it is quoted, and the proof below uses its consequence and the integral's order bound. Revisit the uniform geometric tail in [Lesson 5](power-series-and-endpoints.md) for an example where one threshold works at every point.

For functions $f_n:E\to\mathbb R$, **pointwise** convergence to $f$ means
$$
\begin{gathered}
\forall x\in E\ \forall\varepsilon>0\\
\exists N=N(x,\varepsilon)\ \forall n\ge N:\\
|f_n(x)-f(x)|<\varepsilon.
\end{gathered}
$$
**Uniform** convergence reverses the first choices:
$$
\begin{gathered}
\forall\varepsilon>0\ \exists N=N(\varepsilon)\\
\forall n\ge N\ \forall x\in E:\\
|f_n(x)-f(x)|<\varepsilon.
\end{gathered}
$$
The domain $E$ is fixed throughout. Uniform convergence is equivalent to $\sup_{x\in E}|f_n(x)-f(x)|\to0$ when those suprema are finite eventually; the quantified definition also covers the general case without assuming this in advance.

## A moving point defeats uniformity

On $[0,1]$, let $f_n(x)=x^n$. At every fixed $x<1$, $x^n\to0$; at $x=1$, every value is $1$. The pointwise limit is
$$
f(x)=\begin{cases}0,&0\le x<1,\\1,&x=1.\end{cases}
$$
Each $f_n$ is continuous, but $f$ is not continuous at $1$. For every $n$, the moving point $x_n=2^{-1/n}$ lies below $1$ and satisfies $|f_n(x_n)-f(x_n)|=1/2$. Thus no $N$ can make the error $<1/2$ simultaneously for all $x$. Holding $x$ fixed would miss the narrowing region near $1$.

## Why continuity survives a uniform limit

**Continuity of a uniform limit.** If $f_n:E\to\mathbb R$ are continuous at $x_0\in E$ (with the relative topology on $E$) and $f_n\to f$ uniformly on $E$, then $f$ is continuous at $x_0$. Hence a uniform limit of continuous real functions on $E$ is continuous on $E$.

**Proof.** Given $\varepsilon>0$, choose $N$ so $|f_N(x)-f(x)|<\varepsilon/3$ for **every** $x\in E$. Continuity of this fixed $f_N$ at $x_0$ gives $\delta>0$ so $x\in E$ and $|x-x_0|<\delta$ imply $|f_N(x)-f_N(x_0)|<\varepsilon/3$. For such $x$,
$$
|f(x)-f(x_0)|
\le |f(x)-f_N(x)|+|f_N(x)-f_N(x_0)|+|f_N(x_0)-f(x_0)|
<\varepsilon.
$$
The same $N$ must work at both $x$ and $x_0$; that is the role of uniformity. $\square$

## A safe integral interchange

**Compact-interval theorem.** If each $f_n$ is continuous on $[a,b]$ and $f_n\to f$ uniformly there, then $f$ is continuous, all displayed integrals exist as Riemann integrals, and
$$
\left|\int_a^b f_n(x)\,dx-\int_a^b f(x)\,dx\right|
\le(b-a)\sup_{x\in[a,b]}|f_n(x)-f(x)|\longrightarrow0.
$$
For $a=b$ the claim is immediate. For $a<b$, continuity of $f$ follows from the preceding theorem. The inequality follows by bounding the integral of $f_n-f$ in absolute value by the interval length times its uniform bound. If a supremum is inconvenient, use the quantified definition: for all sufficiently large $n$, $|f_n-f|<\varepsilon/(b-a)$ at every $x$, so the integral difference is $<\varepsilon$. This states the exact shared domain and integration hypotheses.

Pointwise convergence alone does not give this conclusion. For $n\ge2$ on $[0,1]$, set
$$
g_n(x)=n\max\{1-n|x-1/n|,0\}.
$$
Each is a continuous triangle supported on $[0,2/n]$, of height $n$ and area $\frac12(2/n)n=1$. At $x=0$ its value is $0$, and for every fixed $x>0$ it is eventually $0$; thus $g_n\to0$ pointwise, while $\int_0^1 g_n=1$ for every $n$. The moving spike defeats integral interchange.

## Differentiation needs separate control

Uniform convergence **alone** does not justify taking derivatives term by term. On $\mathbb R$, let $h_n(x)=\sin(nx)/n$. Since $|h_n(x)|\le1/n$, $h_n\to0$ uniformly. Yet $h_n'(0)=\cos(0)=1$ for every $n$, while the derivative of the zero limit is $0$. The derivatives therefore fail to converge to the derivative of the limit, already at $x=0$. We quote a standard sufficient theorem without proof: if each $h_n$ is continuously differentiable on $[a,b]$, the numbers $h_n(x_0)$ converge for one $x_0\in[a,b]$, and $h_n'$ converges uniformly on $[a,b]$ to $g$, then $h_n$ converges uniformly to a function $h$ with $h'=g$ on $(a,b)$. The special term-by-term differentiation theorem for power series inside their radius is likewise a separate result, not a consequence of uniform convergence of the original sums alone.

## Guided proof practice

### 1. Starter — Test a uniform bound

Show $f_n(x)=x/(n+x)$ tends uniformly to zero on $[0,1]$, and state a concrete threshold.

**Hint.** Bound the numerator and denominator in the favorable directions.

**Reasoned solution.** For $n\ge1$ and $0\le x\le1$, $0\le x/(n+x)\le1/n$. Given $\varepsilon>0$, any integer $N>1/\varepsilon$ makes the error $<\varepsilon$ for every $n\ge N$ and every $x$. The proof needs no point-dependent threshold.

### 2. Core — Break uniformity with a moving witness

For $f_n(x)=x^n$ on $[0,1]$, explain why pointwise convergence holds but uniform convergence fails.

**Hint.** Use a point $x_n$ satisfying $x_n^n=1/2$.

**Reasoned solution.** At each fixed $x<1$, geometric decay gives zero, while $f_n(1)=1$. With $x_n=2^{-1/n}<1$, the limit value is $f(x_n)=0$ and the error is $1/2$ for every $n$. Taking $\varepsilon=1/2$ contradicts the strict uniform inequality. This is exactly the quantifier order from the definition.

### 3. Transfer — Apply the integral estimate

Suppose continuous $u_n,u$ on $[2,5]$ satisfy $|u_n(x)-u(x)|\le4/n^2$ for all $x$. Find an $N$ that certifies the integral error $<0.001$.

**Hint.** Multiply the uniform error by interval length $3$.

**Reasoned solution.** The compact-interval theorem bounds the error by $12/n^2$. We require $12/n^2<1/1000$, or $n^2>12000$. Since $109^2=11881$ and $110^2=12100$, every $n\ge110$ is certified. The estimate is independent of signs and cancellation.

### 4. Proof audit — Diagnose a derivative claim

“$h_n(x)=\sin(nx)/n$ tends uniformly to zero, so $h_n'(x)$ tends to zero for every $x$.” Refute the inference at one point and name a missing kind of control.

**Hint.** Differentiate first, then evaluate at $x=0$.

**Reasoned solution.** $h_n'(x)=\cos(nx)$, hence $h_n'(0)=1$ for all $n$, whereas the zero limit has derivative $0$. Uniform convergence of values controls their vertical error, not slopes. Uniform convergence of derivatives on a compact interval, with convergence at one point, is a separate sufficient theorem; those hypotheses fail here.

**Return to the [course assessment](#/courses/atlas-sequences-series-convergence).** Across all six lessons, identify which quantifier, order property, or tail bound licenses each conclusion. A theorem name without its hypotheses is not yet a proof.
