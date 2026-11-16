var e=`---
parent_id: course-sequences-series-convergence
chapter_id: power-series-and-endpoints
---

# Lesson 5 — Power series and endpoints

**Question.** Why does convergence at one point control every closer point, while saying so little about the boundary?

**Prerequisite check.** Verify the finite geometric identity $\\sum_{j=0}^N q^j=(1-q^{N+1})/(1-q)$ for $q\\ne1$, and decide separately whether $\\sum1/n$ and $\\sum(-1)^{n-1}/n$ converge. If the latter pair seems contradictory, revisit [Lesson 4](#/item/course-sequences-series-convergence?chapter=absolute-and-alternating-convergence): the absolute-value and signed questions are different.

A real power series centered at $c$ is $\\sum_{n=0}^{\\infty}a_n(x-c)^n$. The coefficients are fixed; $x$ varies. Its partial sums are polynomials, so each is continuous and integrable on a bounded interval. The issue is whether their limit is controlled well enough to inherit those properties.

## Interior convergence from a larger point

**Larger-point theorem.** If $\\sum a_n(y-c)^n$ converges for some $y\\ne c$, then $\\sum a_n(x-c)^n$ converges absolutely for every $x$ with $|x-c|<|y-c|$.

**Proof.** Convergence at $y$ implies its terms $a_n(y-c)^n$ tend to zero, hence are bounded in magnitude by some $M$. Set $q=|x-c|/|y-c|<1$. For every $n$,
$$
|a_n(x-c)^n|
=|a_n(y-c)^n|q^n
\\le Mq^n.
$$
The geometric comparison proves absolute convergence. $\\square$

Let $R$ be the supremum of the nonnegative distances $|y-c|$ at which the series converges, allowing $R=0$ or $R=\\infty$. The theorem shows absolute convergence for $|x-c|<R$: when $|x-c|<R$, the definition of supremum supplies a convergence point farther out. If $|x-c|>R$, convergence would contradict the definition of $R$. The theorem makes **no assertion at** $|x-c|=R$. At $x=c$, the series has only its constant term and always converges.

## Uniform tails on a smaller interval

Here **uniform convergence** means that for every $\\varepsilon>0$ one threshold $N_0$ makes $|S_N(x)-S(x)|<\\varepsilon$ for every $N\\ge N_0$ and every $x$ in the stated interval. The threshold cannot depend on $x$.

Fix $0\\le r<R$. Choose a convergence point $y$ with $s=|y-c|>r$, and let $M$ bound $|a_n(y-c)^n|$ as above. For *all* $x$ with $|x-c|\\le r$ and all $m>N$,
$$
\\left|\\sum_{n=N+1}^{m}a_n(x-c)^n\\right|
\\le M\\sum_{n=N+1}^{m}(r/s)^n
\\le \\frac{M(r/s)^{N+1}}{1-r/s}.
$$
At each fixed $x$, the interior theorem has already supplied a sum $S(x)$. Letting $m\\to\\infty$ in the finite-tail inequality gives
$$
|S(x)-S_N(x)|\\le\\frac{M(r/s)^{N+1}}{1-r/s}.
$$
The right side tends to zero independently of $x$. Choose $N_0$ so it is $<\\varepsilon$ for every $N\\ge N_0$; this proves **uniform** convergence on $|x-c|\\le r$ directly from the shared-threshold definition. This is stronger than a separate limit for each $x$. [Lesson 6](#/item/course-sequences-series-convergence?chapter=uniform-limits-and-safe-interchanges) proves that uniform limits of continuous functions remain continuous and permits integration on compact intervals. We quote the standard power-series differentiation theorem without proof: if a real power series has radius $R>0$, then for every $|x-c|<R$ its sum is differentiable and its derivative is $\\sum_{n=1}^{\\infty}n a_n(x-c)^{n-1}$; the derived series has the same radius. Uniform convergence of the original series by itself would not justify differentiating.

## Endpoints are two new numerical series

Consider $\\sum_{n=1}^{\\infty}(x-2)^n/n$. For $|x-2|<1$, the larger-point theorem or a ratio test gives absolute convergence. For $|x-2|>1$, the terms do not approach zero: their magnitudes $t^n/n$ with $t>1$ eventually grow (choose $1<q<t$ so successive ratios $t n/(n+1)>q$ eventually). At $x=3$, the series is $\\sum1/n$ and diverges. At $x=1$, it is $\\sum(-1)^n/n$ and converges conditionally. The exact interval is $[1,3)$.

This one example also shows why “converges at one endpoint” does not imply “converges at the other.” For $\\sum x^n/n^2$, both endpoints $x=\\pm1$ converge absolutely. For $\\sum x^n$, neither endpoint converges. Interior behavior alone cannot distinguish these possibilities.

## Guided proof practice

### 1. Starter — Prove a uniform error bound

For $\\sum_{n=0}^{\\infty}x^n$, bound the remainder after degree $N$ simultaneously for all $|x|\\le1/2$. Find an $N$ that certifies error $<0.001$.

**Hint.** Bound absolute values by a geometric tail with ratio $1/2$.

**Reasoned solution.** Uniformly on the stated interval,
$$
\\left|\\sum_{n=N+1}^{\\infty}x^n\\right|
\\le\\sum_{n=N+1}^{\\infty}(1/2)^n
=2^{-N}.
$$
At $N=10$, $2^{-10}=1/1024<0.001$. The same certificate at $N=9$ is $1/512>0.001$. The limiting function is $1/(1-x)$ on $|x|<1$, obtained from the finite geometric identity.

### 2. Core — Classify each endpoint

Find the interval of convergence of $\\sum_{n=1}^{\\infty}(x-1)^n/(n3^n)$.

**Hint.** Write $t=(x-1)/3$, then test $t=1$ and $t=-1$ as separate series.

**Reasoned solution.** For $|t|<1$, $\\sum t^n/n$ converges absolutely by comparison with $\\sum |t|^n$. For $|t|>1$, its terms fail to tend to zero by the ratio-growth argument above. At $t=1$ ($x=4$), the harmonic series diverges; at $t=-1$ ($x=-2$), the alternating harmonic series converges. Therefore the interval is $[-2,4)$. A radius of $3$ alone does not include either endpoint.

### 3. Transfer — Construct two different boundaries

Explain why $\\sum_{n=1}^{\\infty}x^n/n^2$ includes both endpoints of its radius-one interval while $\\sum_{n=0}^{\\infty}x^n$ includes neither.

**Hint.** At $x=-1$, ask about absolute values; at $x=1$, apply the term test or $p$-series test.

**Reasoned solution.** At $x=\\pm1$, the magnitude series of the first example is $\\sum1/n^2$, which converges. The geometric series has terms $1$ at $x=1$ and $(-1)^n$ at $x=-1$; neither term sequence tends to zero. Thus the first interval is $[-1,1]$ and the second is $(-1,1)$.

### 4. Proof audit — Diagnose an unsafe interchange

A student says, “The partial sums of any power series are polynomials, so their pointwise limit is continuous everywhere the series converges.” Find the missing condition and state a valid conclusion from this lesson.

**Hint.** Use the uniform bound on an interval strictly inside the radius.

**Reasoned solution.** Pointwise convergence of continuous functions alone does not preserve continuity. The proved geometric tail bound makes convergence uniform on every smaller closed interval $|x-c|\\le r<R$. Lesson 6 then proves continuity of the limit at each interior point. The argument says nothing at a boundary point unless separate control is established there.

**Connection to Lesson 6.** The same uniform tail estimate that protects continuity will protect definite integration. Differentiation requires a distinct theorem about derivatives, even for power series.
`;export{e as default};