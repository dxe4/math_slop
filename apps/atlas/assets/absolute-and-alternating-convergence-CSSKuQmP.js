var e=`---
parent_id: course-sequences-series-convergence
chapter_id: absolute-and-alternating-convergence
---

# Lesson 4 — Absolute and alternating convergence

**Question.** How can opposite signs make a series converge when the total magnitude diverges, and how much error remains after stopping?

**Prerequisite check.** Explain why $\\sum1/n$ diverges although $1/n\\to0$, using the finite tails in [Lesson 2](#/item/course-sequences-series-convergence?chapter=completeness-and-cauchy-tails). Check that $1/n$ is nonincreasing and tends to zero. If either point is shaky, redo the harmonic block witness before trusting an alternating bound.

## Absolute convergence is a finite-tail theorem

A real or complex series $\\sum u_n$ is **absolutely convergent** when $\\sum|u_n|$ converges. The finite-tail criterion and triangle inequality prove that absolute convergence implies convergence:
$$
\\left|\\sum_{k=n+1}^{m}u_k\\right|
\\le\\sum_{k=n+1}^{m}|u_k|.
$$
For each $\\varepsilon>0$, convergence of the magnitude series makes the right side $<\\varepsilon$ for *all* $m>n\\ge N$. The original partial sums are therefore Cauchy, and real or complex completeness gives a limit. For complex numbers we use the analogous completeness theorem, also quoted here; the real case alone suffices for the exercises.

Absolute convergence also permits rearrangement without changing the sum. A proof idea is that after enough original terms, the total magnitude of omitted terms is small; a rearrangement eventually includes that finite prefix, leaving only a small tail. By contrast, the **Riemann rearrangement theorem** says that a conditionally convergent *real* series can be rearranged to converge to any prescribed real value or to diverge. We quote this deeper theorem without proof. It applies only after convergence and failure of absolute convergence have both been established.

## The alternating theorem through even and odd sums

**Theorem.** Let $b_n\\ge0$, $b_n\\to0$, and suppose $b_{n+1}\\le b_n$ for all $n$ beyond some index. Then $\\sum_{n=1}^{\\infty}(-1)^{n-1}b_n$ converges. For every $N$ at or beyond the start of that monotone tail, if $S_N$ is its $N$th partial sum and $S$ its sum, then
$$
|S-S_N|\\le b_{N+1}.
$$
The remainder is zero or has the first omitted term's sign. More precisely,
$$
0\\le(-1)^N(S-S_N)\\le b_{N+1}.
$$
Zero can occur even when the omitted term is positive: if $b_{2k-1}=b_{2k}=1/k$, each complete pair cancels, so $S=S_{2k}=0$.

**Proof.** First assume monotonicity starts at $1$. The even partial sums increase because
$$
S_{2k+2}-S_{2k}=b_{2k+1}-b_{2k+2}\\ge0.
$$
The odd partial sums decrease because $S_{2k+3}-S_{2k+1}=-b_{2k+2}+b_{2k+3}\\le0$. Every even sum is at most every sufficiently adjacent odd sum, and $S_{2k+1}-S_{2k}=b_{2k+1}\\to0$. Thus the increasing even sequence is bounded above by, for example, $S_1$, and the decreasing odd sequence is bounded below by $S_2$. By monotone convergence they have limits; their difference tends to zero, so both limits equal $S$. The whole sequence of partial sums converges to $S$.

For a fixed $N$, the same interlacing applied to the alternating *tail* places $S$ between $S_N$ and $S_{N+1}$. Their distance is $b_{N+1}$, proving the bound and the qualified sign claim (equality with $S_N$ is allowed). If monotonicity begins later, discard the finite prefix and apply the proof to the remaining tail. The bound applies to $N$ whose omitted tail starts in the monotone region. $\\square$

The alternating harmonic series $1-1/2+1/3-\\cdots$ therefore converges. Its absolute series $\\sum1/n$ diverges, so it is **conditionally convergent**. A signed series whose terms merely alternate need not converge: $\\sum(-1)^{n-1}(1+1/n)$ fails even the necessary term test, since its terms do not approach zero.

**Worked approximation.** For the alternating harmonic series, $|S-S_N|\\le1/(N+1)$. To certify error **strictly below** $0.01$, choose $N=100$; $N=99$ gives only the nonstrict bound $0.01$ from this estimate. For $\\sum(-1)^{n-1}/n^2$, the error bound is $1/(N+1)^2$, so $N=31$ gives $1/1024<0.001$.

## Guided proof practice

### 1. Starter — Prove absolute convergence of a signed example

Classify $\\sum_{n=1}^{\\infty}(-1)^n/(n^2+1)$.

**Hint.** Compare its magnitudes with a positive $p$-series.

**Reasoned solution.** $0<1/(n^2+1)\\le1/n^2$, whose series converges by [Lesson 3](#/item/course-sequences-series-convergence?chapter=positive-series-and-remainder-bounds). Hence the given series converges absolutely, and therefore converges. The alternating theorem would also establish convergence, but would miss the stronger classification.

### 2. Core — Separate convergence from absolute convergence

Classify $\\sum_{n=2}^{\\infty}(-1)^n/\\ln n$.

**Hint.** $\\ln n$ increases without bound, but compare $1/\\ln n$ with $1/n$ for absolute convergence.

**Reasoned solution.** For $n\\ge2$, $\\ln n>0$ increases to infinity, so $1/\\ln n$ decreases to zero. The alternating theorem gives convergence. Since $\\ln n<n$ for $n\\ge2$, $1/\\ln n>1/n$, and the harmonic comparison makes the absolute series diverge. The convergence is conditional. The sign $(-1)^n$ changes the limit's value, not the theorem's hypotheses.

### 3. Transfer — Certify a strict error

How many terms of $\\sum_{n=1}^{\\infty}(-1)^{n-1}/\\sqrt n$ suffice to certify error $<0.05$?

**Hint.** Bound the omitted magnitude by $1/\\sqrt{N+1}$ and keep the strict inequality.

**Reasoned solution.** The magnitudes decrease to zero. Require $1/\\sqrt{N+1}<1/20$, equivalent to $N+1>400$, so $N\\ge400$ suffices. At $N=399$ the stated nonstrict bound equals $0.05$ and, by itself, certifies only “at most.” This is a sufficient truncation count, not a claim about the exact error.

### 4. Proof audit — Diagnose a false alternating argument

“$\\sum(-1)^{n-1}(1+1/n)$ converges because its signs alternate.” Identify two theorem checks and the decisive failure.

**Hint.** What happens to the magnitudes?

**Reasoned solution.** The magnitudes $1+1/n$ are nonincreasing, but they tend to $1$, not $0$. The alternating theorem's zero-limit hypothesis fails; indeed the signed terms fail to tend to zero, so the series diverges by the necessary term test. Alternating signs alone provide no convergence guarantee.

**Connection to Lesson 5.** At a power series endpoint, the variable often turns the series into an alternating numerical series. Test that endpoint with this theorem; do not infer its behavior from the radius alone.
`;export{e as default};