var e=`---
id: recipe-limit-interchange-audit
title: "Audit a Limit Interchange Before You Swap"
license: CC BY-SA 4.0
---

# Audit a Limit Interchange Before You Swap

**Before reading.** Read [Sequences, Cauchy Control, and Persistent Tail Behavior](/resources/library:book-proof-safe-real-analysis:sequences-cauchy-and-limsup/), [Infinite Series, Tests, and Rearrangements](/resources/library:book-proof-safe-real-analysis:series-tests-and-rearrangements/).

Many elegant derivations move a limit past a sum, integral, derivative, expectation, or second limit. Sometimes that move is a theorem; sometimes it changes the answer. This recipe turns “surely these operations commute” into an explicit, reusable safety check.

## Step 1 — Write the two claims separately

Do not begin with an equals sign. Name the approximating objects $f_n$, their proposed limit $f$, the operator $T$, and the domain. The desired statement is

$T(lim f_n) = lim T(f_n)$.

Then ask three separate questions:

1. In what sense does $f_n\\to f$: pointwise, uniform, in $L^{1}$, in probability, or something else?
2. Is every expression defined and finite?
3. Which theorem makes $T$ continuous for that mode of convergence?

Changing the convergence mode changes the problem. A proof that uses $sup|f_n-f|\\to 0$ is a uniform-convergence proof even if the draft merely says “take the limit.”

## Step 2 — Try the uniform bound first

On a finite interval $[a,b]$, if $f_n$ and $f$ are Riemann integrable and $f_n\\to f$ uniformly, then

$|\\int f_n-\\int f| \\le \\int |f_n-f| \\le (b-a)sup|f_n-f|\\to 0$.

This is the cleanest possible certificate: the integral is Lipschitz continuous in the supremum norm.

**Worked example.** On $[0,1]$, let $f_n(x)=x/(n+x)$. Since $0\\le f_n(x)\\le 1/n$ for $x\\in [0,1]$, convergence to zero is uniform. Therefore $\\int_{0}^{1}f_n(x)dx\\to 0$, with error at most $1/n$, without finding an antiderivative.

Uniform convergence is sufficient, not always necessary. If it fails, do not immediately declare the swap invalid; move to a theorem matched to the setting.

## Step 3 — For Lebesgue integrals, look for monotonicity or domination

The **monotone convergence theorem** applies when $f_n$ are nonnegative measurable functions and $f_n(x)$ increases to $f(x)$ almost everywhere. Then

$\\int f_n\\to \\int f$,

allowing the value infinity.

The **dominated convergence theorem** applies when $f_n\\to f$ almost everywhere and there is one integrable function $g$ with $|f_n|\\le g$ almost everywhere for every $n$. Then $f$ is integrable and $\\int f_n\\to \\int f$; in fact $\\int |f_n-f|\\to 0$.

The word **one** matters. A separate bound $g_n$ for each function gives no common control.

**Failure probe.** On $(0,1)$, set $f_n(x)=n$ for $0<x<1/n$ and zero otherwise. For each fixed $x>0$, eventually $f_n(x)=0$, so $f_n\\to 0$ pointwise. Yet every integral is 1. The mass grows taller while concentrating into a narrower interval. There is no integrable function dominating every spike. Pointwise convergence alone cannot justify the swap.

## Step 4 — Treat infinite sums as integrals over counting measure

For a doubly indexed family $a_{n,k}$, exchanging a limit with $\\sum _k$ needs tail control uniform in $n$. A practical sufficient condition is a summable majorant: if $a_{n,k}\\to a_k$ for each $k$ and $|a_{n,k}|\\le b_k$ with $\\sum b_k<\\infty$, then

$lim(n\\to \\infty ) \\sum _k a_{n,k} = \\sum _k a_k$.

This is dominated convergence on the positive integers with counting measure.

For nonnegative terms, Tonelli’s theorem allows changing the order of sums or integrals, possibly producing infinity. For signed terms, absolute integrability is a standard safe hypothesis for Fubini’s theorem. Conditional cancellation can make order matter.

## Step 5 — Differentiate only with derivative control

Uniform convergence of functions does not by itself permit differentiation term by term. For example,

$f_n(x)=\\sin(nx)/n$

converges uniformly to zero on the real line, but $f_n'(x)=\\cos(nx)$ does not converge pointwise at most inputs, let alone to the derivative zero.

A useful theorem on a closed interval $[a,b]$ is:

> If every $f_n$ is continuously differentiable, the derivatives $f_n'$ converge uniformly to a function $g$, and $f_n(x_{0})$ converges at one point $x_{0}\\in [a,b]$, then $f_n$ converges uniformly to a differentiable function $f$ and $f'=g$.

Derivative control plus one anchor value controls the entire function through the fundamental theorem of calculus.

For a series $\\sum u_n(x)$, apply the theorem to partial sums. Uniform convergence of $\\sum u_n'$ plus convergence of $\\sum u_n(x_{0})$ is a standard term-by-term differentiation certificate.

## Step 6 — Audit boundaries, exceptional sets, and parameters

Record all quantifiers and domains:

- Does a bound hold for every parameter or only for each fixed parameter?
- Is the exceptional null set allowed to depend on $n$? A countable union of null sets remains null, which often resolves this for sequences.
- Is the interval finite? A uniform bound $|f_n-f|\\le \\varepsilon _n$ on an infinite-measure domain does not imply $L^{1}$ convergence.
- Do boundary terms vanish, or were they silently discarded?
- Are improper integrals controlled at both singular endpoints and infinity?

**Counterexample on an infinite domain.** The functions $f_n=1/n$ on $[0,n]$ and zero elsewhere converge uniformly to zero on $[0,\\infty )$ because their suprema are $1/n$. Their integrals equal 1. The finite-interval factor $(b-a)$ in the uniform estimate has disappeared; uniform convergence alone is insufficient on a domain of infinite measure.

## Step 7 — Produce a certificate or label the move unproved

A good derivation includes a one-sentence certificate:

- “Uniform convergence on $[a,b]$ permits passage through the Riemann integral.”
- “Dominated convergence applies with $g(x)=\\ldots$, whose integral is finite.”
- “Nonnegative measurable partial sums increase, so monotone convergence applies.”
- “The derivative series converges uniformly and the original series converges at $x_{0}$.”

If no theorem fits, retain the two expressions separately. Numerical agreement at sampled parameters is evidence, not a missing proof.

## Accessible visual diagnostic

Imagine each $f_n$ as a landscape. Uniform convergence lowers the tallest error anywhere in the entire landscape. Pointwise convergence merely says that at each fixed location the error eventually lowers; the slow location may move with $n$. The spike example is a tent becoming narrower and taller while walking toward the boundary: every fixed observer eventually sees nothing, but the tent’s area remains one.

A nonvisual version is an audit table with columns: convergence mode, common bound, domain measure, operator, applicable theorem, and verdict. Filling every column prevents a visually persuasive animation from standing in for a hypothesis.

## Exercises with hints and complete solutions

### Exercise 1: A valid integral swap


Let $f_n(x)=x^n/n$ on $[0,1]$. May the limit pass through the Riemann integral?

<details><summary>Hint 1</summary>

Bound the function on the entire interval independently of x.

</details>
<details><summary>Hint 2</summary>

A bound tending to zero proves uniform convergence on this finite interval.

</details>
<details><summary>Solution</summary>

Yes. Since $0\\le x^n/n\\le 1/n$, the convergence to zero is uniform. Thus the integrals tend to zero. Directly, $\\int_{0}^{1}x^n/n dx=1/[n(n+1)]\\to 0$.

</details>

### Exercise 2: Choose a theorem


On $[0,1]$, let $f_n(x)=\\min(n,1/\\sqrt{x})$ for $x>0$, with any value at zero. Show the integrals converge to the integral of $1/\\sqrt{x}$.

<details><summary>Hint 1</summary>

Compare truncations as n increases.

</details>
<details><summary>Hint 2</summary>

Either monotone convergence or one common integrable majorant can justify the interchange.

</details>
<details><summary>Solution</summary>

The functions are nonnegative, measurable, and increase pointwise almost everywhere to $1/\\sqrt{x}$. Monotone convergence applies. The limiting integral is 2. Domination also works because every $f_n\\le 1/\\sqrt{x}$, which is integrable, but monotonicity is the more direct certificate.

</details>

### Exercise 3: Spot the missing majorant


A draft says: “Each $f_n$ is bounded, so dominated convergence applies.” What is missing?

<details><summary>Hint 1</summary>

The bound must work for the entire sequence at once.

</details>
<details><summary>Hint 2</summary>

It must also have a finite integral over the declared domain.

</details>
<details><summary>Solution</summary>

The theorem needs one integrable $g$ dominating all $|f_n|$ almost everywhere. Individual bounds may grow with $n$ or spread over too much of the domain.

</details>

### Exercise 4: Differentiate a limit?


For $f_n(x)=\\sqrt{x^{2}+1/n}$ on $[-1,1]$, the functions converge uniformly to $|x|$. Can derivatives be passed through the limit at zero?

<details><summary>Hint 1</summary>

Find the limiting function and check whether it has a derivative at zero.

</details>
<details><summary>Hint 2</summary>

Differentiate the approximations and inspect their transition near zero.

</details>
<details><summary>Solution</summary>

No. The limit is not differentiable at zero. The derivatives $x/\\sqrt{x^{2}+1/n}$ do not converge uniformly; near zero their transition becomes arbitrarily steep, and the pointwise derivative limit away from zero has a jump.

</details>

### Exercise 5: Sum-limit interchange


Suppose $|a_{n,k}|\\le 2^{-k}$ and $a_{n,k}\\to a_k$ for every positive integer $k$. Justify interchanging limit and sum.

<details><summary>Hint 1</summary>

Interpret the series as an integral for counting measure.

</details>
<details><summary>Hint 2</summary>

The geometric majorant has a finite total independent of n.

</details>
<details><summary>Solution</summary>

The majorant is summable because $\\sum (k=1 to \\infty )2^{-k}=1$. Dominated convergence for counting measure gives $lim_n \\sum _k a_{n,k}=\\sum _k a_k$.

</details>

## Connections and next steps

Use this recipe alongside real analysis whenever a proof contains two operations competing for order. Measure theory supplies the monotone, Fatou, dominated, Tonelli, and Fubini tools. Functional analysis later compresses the same reasoning into continuity of operators between normed spaces: if $T$ is bounded linear and $f_n\\to f$ in the domain norm, then $Tf_n\\to Tf$ automatically.
`;export{e as default};