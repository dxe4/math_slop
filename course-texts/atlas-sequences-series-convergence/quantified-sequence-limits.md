
# Lesson 1 — Quantified sequence limits

**Question.** How can a finite calculation certify that *every* sufficiently late term is close to one number, rather than merely suggesting a trend?

**Prerequisite check.** Simplify $(3n+1)/(n+2)-3$ and solve $5/(n+2)<\varepsilon$ for $n$. You should obtain $-5/(n+2)$ and $n>5/\varepsilon-2$. If either step is uncertain, review algebra with fractions and the effect of multiplying an inequality by a positive number. [The Quantifier Bridge](../../articles/epsilon-delta-limits.md) rehearses the order of “for every” and “there exists.”

A real sequence $(a_n)$ tends to $L$ when
$$
\forall\varepsilon>0\ \exists N\in\mathbb N\ \forall n\ge N:
|a_n-L|<\varepsilon.
$$
The threshold $N$ may depend on $\varepsilon$ and on the fixed sequence and candidate $L$; it cannot depend on the later $n$. Only a tail is constrained. A plot or ten decimal places can suggest $L$, but neither supplies the final “for all $n\ge N$.”

## A direct proof from a usable inequality

For $a_n=(3n+1)/(n+2)$, algebra gives
$$
|a_n-3|=\frac5{n+2}.
$$
Given $\varepsilon>0$, choose an integer $N>\max\{1,5/\varepsilon-2\}$. Then for **every** $n\ge N$, $n+2>5/\varepsilon$ and $|a_n-3|<\varepsilon$. We chose the threshold only after the tolerance was supplied.

This example suggests a proof strategy: calculate the exact error, bound it by a simpler decreasing expression, and solve an inequality that controls every later index. If a proposed $N$ has no dependence on an arbitrarily small $\varepsilon$, inspect it carefully.

## Two consequences, with the quantifiers exposed

**Uniqueness theorem.** A real sequence has at most one limit. Suppose $a_n\to L$ and $a_n\to M$, and assume $d=|L-M|>0$. For tolerance $d/3$, the first limit supplies $N_L$ and the second supplies $N_M$. Choose a single $n\ge\max(N_L,N_M)$. The triangle inequality gives
$$
d\le |L-a_n|+|a_n-M|<2d/3,
$$
a contradiction. The two thresholds may differ; the proof needs an index beyond **both**.

**Boundedness theorem.** Every convergent real sequence is bounded. From $a_n\to L$, tolerance $1$ gives $N$ with $|a_n|\le |L|+|a_n-L|<|L|+1$ for $n\ge N$. The finite set of earlier magnitudes $|a_1|,\ldots,|a_{N-1}|$ has a maximum (take it as $0$ if the set is empty). The larger of that maximum and $|L|+1$ bounds *all* terms. A tail bound alone would not prove the theorem.

Neither converse holds. The bounded sequence $(-1)^n$ has no limit: if it did, its constant even subsequence would force the limit to be $1$ and its constant odd subsequence would force $-1$, contradicting uniqueness. A sequence may begin with very large terms and still converge: finitely many early terms do not affect its limit, and those finitely many magnitudes still have a maximum.

## Guided proof practice

Attempt each proof before opening the reasoning. The tasks increase from constructing a threshold to diagnosing a quantifier error.

### 1. Starter — Build a threshold

Prove $1/n\to0$ and find a threshold for the strict error $<0.001$.

**Hint.** Solve $1/n<1/1000$, preserving the strict inequality.

**Reasoned solution.** Given $\varepsilon>0$, choose an integer $N>1/\varepsilon$. Then $n\ge N$ implies $1/n\le1/N<\varepsilon$. For $0.001$, $N=1001$ works. $N=1000$ fails the requested strict bound at its first index.

### 2. Core — Prove a less transparent limit

Show $(2n-1)/(5n+4)\to2/5$ without a quotient-limit rule.

**Hint.** Put the difference over one denominator.

**Reasoned solution.** The numerator after subtraction is $5(2n-1)-2(5n+4)=-13$, so
$$
\left|\frac{2n-1}{5n+4}-\frac25\right|
=\frac{13}{5(5n+4)}<\frac{13}{25n}.
$$
Choose an integer $N>13/(25\varepsilon)$. The last expression is $<\varepsilon$ for every $n\ge N$. The inequality uses $n\ge1$ and the positive denominator.

### 3. Transfer — Repair a false converse

A student says, “$(-1)^n$ is bounded, so it has a limit.” Identify the missing hypothesis and give a direct $\varepsilon$ contradiction without quoting the subsequence theorem.

**Hint.** If $L$ were a limit, apply the definition to $\varepsilon=1/2$ at one sufficiently late even and one sufficiently late odd index.

**Reasoned solution.** Boundedness is necessary, not sufficient. With $\varepsilon=1/2$, a putative limit gives one $N$. Choose an even $m\ge N$ and an odd $n\ge N$. Then $|1-L|<1/2$ and $|-1-L|<1/2$, so $2=|1-(-1)|<1$, impossible. The missing extra structure might be monotonicity, as proved in Lesson 2.

### 4. Proof audit — Diagnose a proof with the wrong dependency

“Given $n$, choose $N=n+1$ so $|a_n-L|<\varepsilon$ eventually.” Why does this not prove convergence, even if the displayed inequality happened to hold for some indices?

**Hint.** Read the quantifiers in their actual order.

**Reasoned solution.** The definition requires one $N$ chosen from $\varepsilon$ before *all* $n\ge N$ are considered. Choosing $N$ after seeing $n$ reverses that dependency and can exclude the very term being tested. Moreover $n<N=n+1$, so the promised implication says nothing about that $n$. Rewrite any candidate proof as “given $\varepsilon$, set $N=\cdots$; now let any $n\ge N$.”

**Connection to Lesson 2.** A direct limit proof begins with a proposed target. When none is visible, the next lesson uses order or Cauchy tails to establish existence before naming the target.
