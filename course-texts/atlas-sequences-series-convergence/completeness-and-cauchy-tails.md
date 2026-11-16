
# Lesson 2 — Completeness and Cauchy tails

**Question.** Can we establish convergence without first guessing the limit? What must “the remaining terms are small” mean for a series?

**Prerequisite check.** State the sequence limit definition from [Lesson 1](quantified-sequence-limits.md), and distinguish an upper bound from a least upper bound. If a set $A$ has supremum $s$, every $a\in A$ satisfies $a\le s$, and for every $\varepsilon>0$ some $a\in A$ satisfies $s-\varepsilon<a$; otherwise $s-\varepsilon$ would be a smaller upper bound. Review this characterization before the proof below.

The **least-upper-bound property** of $\mathbb R$ says every nonempty real set bounded above has a supremum in $\mathbb R$. It is a foundational property of the real numbers, assumed here. We use it to prove one convergence theorem; we do not derive the construction of $\mathbb R$.

## Monotone convergence from the supremum

**Theorem.** Every nondecreasing real sequence $(a_n)$ that is bounded above converges in $\mathbb R$ to $s=\sup\{a_n:n\ge1\}$. For a nonincreasing sequence bounded below, apply the theorem to $(-a_n)$.

**Proof.** The set of terms is nonempty and bounded above, so its supremum $s$ exists. Given $\varepsilon>0$, the supremum characterization gives an index $N$ with $s-\varepsilon<a_N\le s$. For every $n\ge N$, monotonicity gives $a_N\le a_n\le s$. Hence $0\le s-a_n\le s-a_N<\varepsilon$. That is precisely $a_n\to s$. Notice that monotonicity carries one near-supremum term to *every* later term. $\square$

A tempting shortcut is to solve a fixed-point equation first. For example, $a_1=1$ and $a_{n+1}=\sqrt{2+a_n}$ suggest $2$. Induction gives $1\le a_n\le2$. On this interval,
$$
2+a_n-a_n^2=(2-a_n)(a_n+1)\ge0,
$$
so $a_{n+1}\ge a_n$. The theorem now supplies a limit $L\in[1,2]$. Continuity of the square root gives $L=\sqrt{2+L}$; squaring yields $(L-2)(L+1)=0$, and the bounds select $L=2$. Solving the equation *before* proving existence would only identify possible limits.

The real-number assumption matters. Rational truncations of $\sqrt2$ from below increase and stay bounded in $\mathbb Q$, but their real limit is irrational. Order and boundedness within an incomplete number system need not produce a limit inside that system.

## Cauchy tails and the real completeness theorem

A sequence is **Cauchy** if
$$
\forall\varepsilon>0\ \exists N\ \forall m,n\ge N:
|a_m-a_n|<\varepsilon.
$$
Every convergent sequence is Cauchy: if $a_n\to L$, use the convergence definition with $\varepsilon/2$ and the triangle inequality. The converse, **every Cauchy sequence of real numbers converges to a real number**, is a completeness theorem that we quote here without proof. The rational truncations above illustrate why “real” cannot simply be omitted.

For a series $\sum_{n=1}^{\infty}u_n$, define $S_N=\sum_{n=1}^N u_n$; the series converges when $(S_N)$ does. Applying the real Cauchy theorem to $(S_N)$ yields the **finite-tail criterion**:
$$
\sum u_n\text{ converges}\quad\Longleftrightarrow\quad
\forall\varepsilon>0\ \exists N\ \forall m>n\ge N:
\left|\sum_{k=n+1}^{m}u_k\right|<\varepsilon.
$$
The equality $S_m-S_n=\sum_{k=n+1}^m u_k$ proves the equivalence once the quoted real completeness theorem is granted. Every endpoint $m$ matters.

If the series converges, its terms tend to zero because $u_n=S_n-S_{n-1}\to S-S=0$ for $n\ge2$. The converse fails. For every $n\ge1$,
$$
\sum_{k=n+1}^{2n}\frac1k\ge n\frac1{2n}=\frac12.
$$
Thus the harmonic series violates the finite-tail criterion with, for example, $\varepsilon=1/2$: no threshold can control the displayed tail. Its terms nevertheless tend to zero.

For $0<r<1$, the finite geometric identity gives
$$
\sum_{k=n+1}^{m}r^k
=\frac{r^{n+1}(1-r^{m-n})}{1-r}
<\frac{r^{n+1}}{1-r}.
$$
The right side tends to zero independently of $m$, so the criterion proves convergence. Directly, $\sum_{k=0}^N r^k=(1-r^{N+1})/(1-r)\to1/(1-r)$. For $|r|\ge1$, terms $r^n$ do not tend to zero, so the corresponding geometric series diverges.

## Guided proof practice

### 1. Starter — Build existence before identification

Let $b_1=0$ and $b_{n+1}=(b_n+2)/2$. Prove convergence and find its limit.

**Hint.** Show $0\le b_n\le2$ and $b_{n+1}-b_n=(2-b_n)/2$.

**Reasoned solution.** Induction preserves $[0,2]$. The displayed difference is nonnegative, so the sequence is nondecreasing and bounded above. Monotone convergence supplies $L$. Passing to the limit in the affine recurrence gives $L=(L+2)/2$, hence $L=2$. Alternatively $2-b_{n+1}=(2-b_n)/2$ gives $b_n=2-2^{2-n}$ for $n\ge1$, consistent with the limit. If you found $2$ only by solving the recurrence's fixed-point equation, you have not yet proved convergence.

### 2. Core — Prove a telescoping sum

Find $\sum_{n=1}^{\infty}1/[n(n+1)]$, and identify the finite object that converges.

**Hint.** Write $1/[n(n+1)]$ as a difference of adjacent reciprocals.

**Reasoned solution.** $1/[n(n+1)]=1/n-1/(n+1)$, so $S_N=1-1/(N+1)$. The *partial sums* tend to $1$, hence the series has sum $1$. The fact that its individual terms tend to zero would not suffice.

### 3. Transfer — Use a fixed tail witness

Explain why $u_n=1/\sqrt n$ does not produce a convergent positive series, without quoting the integral test.

**Hint.** Compare each term in the block $n+1,\ldots,2n$ with $1/\sqrt{2n}$.

**Reasoned solution.** The block sum is at least $n/\sqrt{2n}=\sqrt{n/2}$, which is at least $1/\sqrt2$ for every $n\ge1$. In particular, the finite-tail criterion fails for $\varepsilon=1/2$. The terms themselves tend to zero, so the term test alone gives no verdict. [Lesson 3](positive-series-and-remainder-bounds.md) develops a systematic positive-series test.

### 4. Proof audit — Diagnose an incomplete proof

“Because $u_n\to0$, choose $N$ so all terms after $N$ are below $0.001$; therefore every tail sum is below $0.001$.” Find the invalid step and replace it with the statement actually needed.

**Hint.** How many terms can a tail contain?

**Reasoned solution.** A finite tail can have arbitrarily many terms, so bounding each summand does not bound its sum independently of the endpoint. What is needed is one $N$, for each tolerance $\varepsilon$, such that $|\sum_{k=n+1}^{m}u_k|<\varepsilon$ for **all** $m>n\ge N$. The harmonic blocks show exactly how the proposed inference fails.

**Connection to Lesson 3.** For nonnegative terms, order makes partial sums monotone. A comparison can then supply the missing bound on the *whole* sum; an integral can also quantify the remaining error.
