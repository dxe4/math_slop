
# Specifying a Process

## Why a process is more than a list of distributions

Suppose you are given a single fair bit $Z$ and asked to compare processes with the same one-time laws. You could set $X_n=Z$ forever, take fresh independent fair bits $Y_n$, or alternate from the random starting bit by setting $W_n=Z+n\pmod 2$. At each fixed time all three variables are Bernoulli$(1/2)$, yet their *paths*---constant, independent, and alternating---are completely different.

This simple observation is the starting point of stochastic process theory. A stochastic process is not determined by its one-dimensional distributions. To specify a process fully, we must say something about the joint behaviour of the variables across time.

This chapter begins the L3 route. [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs) supplies random variables, joint distributions and conditional expectation. The optional extension theorem explains a later L4 construction; finite and countable examples can be built explicitly without assuming its proof.

## The formal definition

Let $(\Omega, \mathcal{F}, \mathbb{P})$ be a probability space, let $T$ be an index set (usually $\mathbb{N}$, $\mathbb{R}_{\ge 0}$, or an interval), and let $(S, \mathcal{S})$ be a measurable state space. A **stochastic process** is a family $(X_{t})_{t \in T}$ of random variables $X_{t}: \Omega \to S$ such that each $X_{t}$ is measurable. The index $t$ is interpreted as time, and $X_{t}(\omega)$ is the **state** of the process at time $t$ in outcome $\omega$.

The same mathematical object can be viewed in two ways:

1. As a collection of random variables indexed by time.
2. As a single random function $X: \Omega \to S^{T}$, where $S^{T}$ is the space of paths $t \mapsto X_{t}(\omega)$.

The second viewpoint is essential for questions about path regularity: continuity, differentiability, bounded variation, and so on.

## Finite-dimensional distributions

For any finite collection of times $t_{1} < t_{2} < \dots < t_{k}$, the **finite-dimensional distribution** (or fdd) is the joint law of $(X_{t_{1}}, X_{t_{2}}, \dots, X_{t_{k}})$. The collection of all fdds determines what we can observe through any finite set of time points.

Two processes have the same fdds if and only if they induce the same probability measure on the product space $S^{T}$ equipped with the product $\sigma$-algebra. This is a consequence of the $\pi$-$\lambda$ theorem: the cylinder sets $\{X_{t_{1}} \in A_{1}, \dots, X_{t_{k}} \in A_{k}\}$ form a $\pi$-system that generates the product $\sigma$-algebra.

## Optional continuation: the Kolmogorov extension theorem

The Kolmogorov extension theorem answers the existence question: given a consistent family of fdds, does there exist a process with those fdds?

**Theorem 1.1 (Kolmogorov extension; cited measure-theoretic result).** Let $S = \mathbb{R}^{d}$ with its Borel $\sigma$-algebra. Suppose that for every finite subset $\{t_{1}, \dots, t_{k}\} \subset T$, we are given a probability measure $\mu_{t_{1},\dots,t_{k}}$ on $(\mathbb{R}^{d})^{k}$. If this family satisfies:

1. **Permutation consistency:** for any permutation $\sigma$ of $\{1,\dots,k\}$,
   $$\mu_{t_{\sigma(1)},\dots,t_{\sigma(k)}}(A_{\sigma(1)} \times \dots \times A_{\sigma(k)}) = \mu_{t_{1},\dots,t_{k}}(A_{1} \times \dots \times A_{k});$$

2. **Marginal consistency:** for any $k$ and any $A_{1},\dots,A_{k-1}$ Borel,
   $$\mu_{t_{1},\dots,t_{k}}(A_{1} \times \dots \times A_{k-1} \times \mathbb{R}^{d}) = \mu_{t_{1},\dots,t_{k-1}}(A_{1} \times \dots \times A_{k-1});$$

then there exists a probability space $(\Omega, \mathcal{F}, \mathbb{P})$ and a process $(X_{t})_{t \in T}$ such that for every finite collection,
$$\mathbb{P}(X_{t_{1}} \in A_{1}, \dots, X_{t_{k}} \in A_{k}) = \mu_{t_{1},\dots,t_{k}}(A_{1} \times \dots \times A_{k}).$$

**Proof sketch.** The consistency conditions ensure that the family of fdds defines a finitely additive set function on the algebra of cylinder sets. One then verifies countable additivity using the inner regularity of probability measures on $\mathbb{R}^{d}$. The Carathéodory extension theorem completes the construction. For a full measure-theoretic treatment, see any graduate probability text.

**Important limitation.** The Kolmogorov extension theorem constructs a process on the product space $(\mathbb{R}^{d})^{T}$ with the product $\sigma$-algebra. It does *not* guarantee any path regularity. The sample paths $t \mapsto X_{t}(\omega)$ may be wildly discontinuous. If you need continuous paths, right-continuous paths, or càdlàg paths, a separate **modification theorem** is required.

## Filtrations and adapted processes

As time progresses, information is revealed. A **filtration** on $(\Omega, \mathcal{F}, \mathbb{P})$ is an increasing family $(\mathcal{F}_{t})_{t \in T}$ of sub-$\sigma$-algebras of $\mathcal{F}$: if $s \le t$ then $\mathcal{F}_{s} \subseteq \mathcal{F}_{t}$. The $\sigma$-algebra $\mathcal{F}_{t}$ represents the information available at time $t$.

The **natural filtration** of a process $(X_{t})_{t \in T}$ is
$$\mathcal{F}_{t} = \sigma(X_{s} : s \le t),$$
the smallest $\sigma$-algebra that makes all variables up to time $t$ measurable. Intuitively, $\mathcal{F}_{t}$ contains all questions about the path that can be answered by observing the process up to time $t$.

A process $(Y_{t})_{t \in T}$ is **adapted** to $(\mathcal{F}_{t})_{t \in T}$ if $Y_{t}$ is $\mathcal{F}_{t}$-measurable for every $t$. Adaptedness means the present value uses only information available now, not future information. This is a basic hygiene condition for processes that represent strategies, decisions, or estimates.

## Common error: confusing marginals with the process law

**Misconception.** "If two processes have the same distribution at every fixed time, they are the same process."

**Counterexample.** Let $Z$ be a fair bit: $\mathbb{P}(Z=0)=\mathbb{P}(Z=1)=1/2$. Define:
- $X_{n} = Z$ for all $n \ge 0$ (constant process).
- $Y_{n}$ i.i.d. fair bits, independent of $Z$.

For every $n$, both $X_{n}$ and $Y_{n}$ are Bernoulli$(1/2)$. But:
- $\mathbb{P}(X_{0}=X_{1}) = 1$ (perfect correlation),
- $\mathbb{P}(Y_{0}=Y_{1}) = 1/2$ (independence).

The joint laws differ, and so do the path properties. One-time marginals are insufficient.

**Diagnostic question.** When comparing two processes, always ask: *Do they have the same finite-dimensional distributions?* If not, they are different processes, even if their one-time marginals match.

## Worked example: constructing a Gaussian process

A **Gaussian process** is a process whose finite-dimensional distributions are all multivariate Gaussian. To specify a Gaussian process on $T = \mathbb{R}_{\ge 0}$, it suffices to specify:
1. A mean function $\mu(t) = \mathbb{E}[X_{t}]$.
2. A covariance function $C(s,t) = \operatorname{Cov}(X_{s}, X_{t})$.

The covariance function must be **positive semidefinite**: for any $n$, any $t_{1},\dots,t_{n}$, and any real $a_{1},\dots,a_{n}$,
$$\sum_{i=1}^{n} \sum_{j=1}^{n} a_{i} a_{j} C(t_{i}, t_{j}) \ge 0.$$

**Example.** Let $\mu(t) = 0$ and $C(s,t) = \min(s,t)$. This is positive semidefinite because for $s \le t$,
$$\min(s,t) = \int_{0}^{\infty} \mathbf{1}_{[0,s]}(u) \mathbf{1}_{[0,t]}(u) \, du,$$
and the right-hand side is an inner product. By the Kolmogorov extension theorem, there exists a process with these fdds. We will see in Chapter 13, "Brownian Motion," that this process can be chosen to have continuous paths; it is standard Brownian motion.

## Worked example: recording a coin sequence at different resolutions

Let $B_1,B_2,\ldots$ be independent fair bits. The process $B_n$ records only the latest toss, while $H_n=\sum_{k=1}^nB_k$ records the accumulated number of heads. Each is adapted to the filtration generated by the tosses. Their states have different meanings and different transition rules: $B_{n+1}$ is a fresh fair bit, whereas $H_{n+1}$ equals $H_n$ or $H_n+1$ with probability one-half each.

For $m\le n$, independence gives
$$
\operatorname{Cov}(H_m,H_n)
=\operatorname{Var}(H_m)=m/4.
$$
Indeed $H_n=H_m+\sum_{k=m+1}^nB_k$, and the latter sum is independent of $H_m$. Consequently accumulated counts are dependent across time even though the underlying increments are independent. Replacing their joint law by independent binomial variables would preserve each marginal distribution but destroy this covariance and the monotonicity of every path.

The calculation also shows why the observation convention belongs in a model. Recording every toss, every cumulative total or only the final total produces different information. One can recover tosses from consecutive cumulative totals, but cannot recover the intermediate history from the final total alone.

## Worked example: information changes whether a process is adapted

Take two independent fair bits $B_1,B_2$. At time zero no toss is observed; at time one observe $B_1$; at time two observe both. Let $\mathcal F_0$ be trivial, $\mathcal F_1=\sigma(B_1)$ and $\mathcal F_2=\sigma(B_1,B_2)$. Define $Y_1=B_2$.

The variable $Y_1$ is perfectly well-defined, but it is not $\mathcal F_1$-measurable. Conditional on either value of $B_1$, it remains equally likely to be zero or one, so it cannot be determined by the observation at time one. Enlarging the information to $\mathcal G_1=\sigma(B_1,B_2)$ makes it measurable. Adaptedness describes a relationship between a process and a specified filtration; it is not a property of its numerical values alone.

This matters for strategies. A rule that buys a ticket exactly when tomorrow’s outcome is favourable uses a random variable but does not describe a decision based on today’s information. Probability calculations must retain that distinction before a later chapter invokes a martingale or stopping theorem.

## Consistency before existence

Suppose someone specifies $P(X_0=1)=1/2$ but also proposes a joint law with $P(X_0=1,X_1=0)=3/4$. The proposal is impossible, because the joint event is a subset of $\{X_0=1\}$. Marginalisation would require its probability to be at most one-half. An existence theorem cannot repair contradictory input.

For a finite time set, a complete nonnegative joint table summing to one constructs the process directly: choose the complete path according to that table and read its coordinates. For a finite-state Markov model the table takes the product form
$$
P(X_0=x_0,\ldots,X_n=x_n)
=\mu(x_0)\prod_{k=0}^{n-1}P(x_k,x_{k+1}).
$$
Successive summation of the last coordinate gives one because every transition row sums to one. The remaining table is the specified law on the earlier coordinates. This is the finite mechanism behind consistency.

Uncountable time introduces a further distinction. Agreement almost surely at each fixed time allows the exceptional null event to depend on that time. It does not automatically imply agreement of whole paths on one common probability-one event. Path continuity can bridge some such gaps, but must itself be established; it is not supplied by a list of marginals.

## Finite records and path properties

A finite-dimensional distribution answers questions involving a fixed finite selection of times. For example, the event $X_2<X_5$ is determined by the two-time law. A path property such as continuity refers to all sufficiently close times and is more demanding. In a continuous-path model, values on a countable dense set can determine the whole path; that conclusion uses continuity as an additional hypothesis.

For a concrete contrast, take the constant fair-bit process and independent fair bits at integer times. Their one-time variances agree at one-quarter. For distinct integer times, the constant process has covariance one-quarter, whereas the independent process has covariance zero. Yet even specifying every covariance does not generally determine a non-Gaussian process. Exercise 5 supplies three bits whose pairwise laws match independent bits while their triple law differs. Gaussian processes are special precisely because a finite Gaussian law is determined by its mean vector and covariance matrix.

The distinction affects simulation design. A table containing one independent draw from each desired marginal does not simulate the desired process unless independence across those times is part of its joint law. To simulate accumulated heads, generate the tosses and sum them, or sample consistently from the full joint table. Independently sampling a binomial total at each time can make the total decrease, contradicting the path constraint of a count. Reproducing each histogram separately does not establish that the joint simulation targets the intended model.

Thus a process specification should state its index set, state space, initial law, dependence mechanism, information convention and any required path regularity. These components answer different questions; omitting one can leave several incompatible models sharing the same displayed numerical summaries.

## Practice exercises

### Exercise 1

<a id="specifying-a-process-ex-1"></a>

Let $U\sim\text{Uniform}(0,1)$ and define $X_n=\lfloor2^{n+1}U\rfloor\bmod2$ for $n\ge0$. At dyadic rationals, use the binary expansion that terminates in zeros. Show that $(X_0,\ldots,X_{k-1})$ is uniform on $\{0,1\}^k$ for every $k$. Explain why the fact that the whole sequence is determined by $U$ does not contradict independence, and find $\mathbb{P}(X_0=X_1=X_2)$.

<details>
<summary>Hint 1</summary>

A prescribed block of binary digits determines a half-open dyadic interval of possible values of the uniform seed.

</details>
<details>
<summary>Hint 2</summary>

For the final probability, identify which length-three words make all three coordinates equal.

</details>
<details>
<summary>Solution</summary>

**Solution.** Write $U=0.b_1b_2b_3\ldots$ in binary with the stated convention. Then $X_n=b_{n+1}$ except on the null endpoint $U=1$. For a word $a_1\ldots a_k$, the event $(b_1,\ldots,b_k)=(a_1,\ldots,a_k)$ is a half-open dyadic interval of length $2^{-k}$ (endpoint choices have probability zero). Thus every length-$k$ word has probability $2^{-k}$, proving that the bits are independent Bernoulli$(1/2)$ variables. A random process is always a function of its underlying outcome; encoding all bits in the single random seed $U$ creates no dependence among their coordinates. Finally, the all-zero and all-one words each have probability $1/8$, so $\mathbb{P}(X_0=X_1=X_2)=1/4$.

</details>

### Exercise 2

<a id="specifying-a-process-ex-2"></a>

Show that the function $C(s,t) = e^{-|s-t|}$ on $\mathbb{R}_{\ge 0} \times \mathbb{R}_{\ge 0}$ is positive semidefinite.

<details>
<summary>Hint 1</summary>

Represent the proposed covariance as an integral of a product of two functions, one indexed by each time.

</details>
<details>
<summary>Hint 2</summary>

Use the factors given by an exponential decay supported on all earlier times, then move the finite double sum inside a squared integral.

</details>
<details>
<summary>Solution</summary>

**Solution.** Use the direct factorization

$$e^{-|s-t|}=\int_{-\infty}^{\min(s,t)}2e^{-(s-u)}e^{-(t-u)}\,du.$$

Then for any times $t_1,\ldots,t_n$ and real coefficients $a_1,\ldots,a_n$,

$$\sum_{i,j}a_ia_je^{-|t_i-t_j|}
=\int_{-\infty}^{\infty}2\left(\sum_i a_i e^{-(t_i-u)}\mathbf1_{\{u\le t_i\}}\right)^2du\ge0.$$

This proves positive semidefiniteness even when some times coincide, in which case the covariance matrix may have zero eigenvalues.

</details>

### Exercise 3

<a id="specifying-a-process-ex-3"></a>

Let $(\mathcal{F}_{t})_{t \ge 0}$ be a filtration and let $X$ be an integrable random variable. Define $Y_{t} = \mathbb{E}[X \mid \mathcal{F}_{t}]$. Show that $(Y_{t})$ is adapted and that $\mathbb{E}[Y_{t} \mid \mathcal{F}_{s}] = Y_{s}$ for $s \le t$.

<details>
<summary>Hint 1</summary>

By definition, conditional expectation has a version measurable with respect to its conditioning sigma-algebra.

</details>
<details>
<summary>Hint 2</summary>

For the nested-information identity, apply the tower property using the inclusion of the earlier sigma-algebra in the later one.

</details>
<details>
<summary>Solution</summary>

**Solution.** By definition of conditional expectation, $Y_{t}$ is $\mathcal{F}_{t}$-measurable, so $(Y_{t})$ is adapted. For the second property, use the tower property of conditional expectation: since $\mathcal{F}_{s} \subseteq \mathcal{F}_{t}$,
$$\mathbb{E}[Y_{t} \mid \mathcal{F}_{s}] = \mathbb{E}[\mathbb{E}[X \mid \mathcal{F}_{t}] \mid \mathcal{F}_{s}] = \mathbb{E}[X \mid \mathcal{F}_{s}] = Y_{s}.$$
This shows that $(Y_{t})$ is a martingale, a concept we will explore fully in Chapter 10, "Martingales and Stopping."

</details>

### Exercise 4
<a id="specifying-a-process-ex-4"></a>

For $H_n=\sum_{k=1}^nB_k$ with independent fair bits, calculate $E H_n$, $\operatorname{Var}(H_n)$ and $\operatorname{Cov}(H_2,H_5)$.

<details><summary>Hint 1</summary>

Write the later count as the earlier count plus fresh increments.
</details>
<details><summary>Hint 2</summary>

Each bit has mean one-half and variance one-quarter.
</details>
<details><summary>Solution</summary>

Linearity gives $E H_n=n/2$. Independence makes the variance $n/4$. Since $H_5=H_2+(B_3+B_4+B_5)$ and the added term is independent of $H_2$, their covariance is $\operatorname{Var}(H_2)=1/2$. Independent counts with the same binomial marginals would give zero covariance and would describe another process.
</details>

### Exercise 5
<a id="specifying-a-process-ex-5"></a>

Take independent fair bits $A,B$ and put $C=A+B\pmod2$. Show that the three variables are pairwise independent but not mutually independent.

<details><summary>Hint 1</summary>

List the four equally likely values of $(A,B)$.
</details>
<details><summary>Hint 2</summary>

Every pair is uniform, but the third bit is determined by the other two.
</details>
<details><summary>Solution</summary>

The possible triples are $000,011,101,110$, each with probability one-quarter. Each chosen pair takes its four values equally often, establishing pairwise independence. But $P(A=B=C=0)=1/4$, whereas the product of the three zero probabilities is $1/8$. A three-time distribution therefore contains information that all pairwise distributions together may fail to identify.
</details>

### Exercise 6
<a id="specifying-a-process-ex-6"></a>

Relative to $\mathcal F_n=\sigma(B_1,\ldots,B_n)$ for independent fair bits, decide whether $Y_n=B_{n+1}$ is adapted.

<details><summary>Hint 1</summary>

Ask what is determined by the observations already recorded.
</details>
<details><summary>Hint 2</summary>

The next bit retains probability one-half after conditioning on $\mathcal F_n$.
</details>
<details><summary>Solution</summary>

It is not adapted. If $B_{n+1}$ were $\mathcal F_n$-measurable, its conditional expectation given $\mathcal F_n$ would be itself. Independence instead makes that conditional expectation the constant one-half, which cannot equal a zero-one variable almost surely. It would be adapted to the enlarged filtration $\mathcal G_n=\mathcal F_{n+1}$, illustrating the dependence on the information convention.
</details>

### Exercise 7
<a id="specifying-a-process-ex-7"></a>

Can two mean-zero variables with unit variances have covariance two? Explain what this implies for a proposed covariance function.

<details><summary>Hint 1</summary>

Every linear combination must have nonnegative variance.
</details>
<details><summary>Hint 2</summary>

Compute the variance of their difference.
</details>
<details><summary>Solution</summary>

The proposed difference would have variance $1+1-2\cdot2=-2$, which is impossible. Thus the matrix with diagonal entries one and off-diagonal entries two is not positive semidefinite. A proposed Gaussian-process covariance must satisfy the nonnegative quadratic-form condition at every finite set of times, rather than merely having positive diagonal entries.
</details>

### Exercise 8
<a id="specifying-a-process-ex-8"></a>

For independent fair bits, compare $T=\inf\{n\ge1:B_n=1\}$ with the last index containing a one among the first five tosses. Use value zero for the latter when all five bits are zero. Which is a stopping time?

<details><summary>Hint 1</summary>

The event $\{T\le n\}$ must be known at time $n$.
</details>
<details><summary>Hint 2</summary>

The word “last” usually asks about later observations.
</details>
<details><summary>Solution</summary>

First arrival is a stopping time because $\{T\le n\}$ says that at least one of the first $n$ bits is one. For the last index $L$, the event $\{L\le1\}$ requires bits two through five all to be zero. It is independent of $\mathcal F_1$ and has probability $1/16$, strictly between zero and one, so it cannot be $\mathcal F_1$-measurable. The last index is not a stopping time for this filtration.
</details>

### Exercise 9
<a id="specifying-a-process-ex-9"></a>

Let $U$ be uniform on $[0,1]$, and for each $t\in[0,1]$ put $X_t=0$ and $Y_t=\mathbf1_{\{U=t\}}$. Show equality almost surely at each fixed time, but failure of equality of entire paths.

<details><summary>Hint 1</summary>

A single point has probability zero under the uniform law.
</details>
<details><summary>Hint 2</summary>

For a realised value $u$, inspect the path at time $t=u$.
</details>
<details><summary>Solution</summary>

For each deterministic $t$, $P(U=t)=0$, so $X_t=Y_t$ almost surely. Yet for every realised $u$ the path $Y_t$ has value one at $t=u$, whereas $X_t$ is zero everywhere. Thus the probability of equality at all times is zero. The uncountable intersection of the fixed-time probability-one events need not retain probability one. No contradiction with equality of finite-dimensional laws occurs.
</details>

### Exercise 10
<a id="specifying-a-process-ex-10"></a>

Starting from a probability row $\mu$ and a stochastic matrix $P$ on a finite state space, prove that the path product defines a probability law and has consistent earlier-coordinate marginals.

<details><summary>Hint 1</summary>

Sum over the last state first.
</details>
<details><summary>Hint 2</summary>

Each row of $P$ sums to one, and finally $\mu$ also sums to one.
</details>
<details><summary>Solution</summary>

All path masses are nonnegative. Summing over $x_n$ removes the final factor since $\sum_{x_n}P(x_{n-1},x_n)=1$. Repeat until only $\sum_{x_0}\mu(x_0)=1$ remains. Stopping the summation earlier leaves exactly $\mu(x_0)\prod_{k=0}^{m-1}P(x_k,x_{k+1})$ on the first $m+1$ coordinates. Thus the construction is normalised and consistent. The proof concerns a finite horizon; existence on an infinite path space is a separate extension question.
</details>

## Summary

A process needs joint laws across time, not only one-time distributions. Consistency is necessary before existence, and finite constructions can often establish it directly. A filtration specifies the information available; adaptedness and stopping depend on that choice. Covariances and path constraints reveal dependence hidden by marginal distributions. Infinite-time and uncountable-time questions require extra care about extension, exceptional events and regularity. Continue with [Discrete-time Markov Chains](finite-markov-chains.md) to turn an initial law and transition mechanism into path probabilities and long-run questions.

