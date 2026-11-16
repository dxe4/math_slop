
# Martingales and Stopping

## Motivation: fair games and optimal stopping

A **martingale** is a mathematical model of a fair game. In a fair game, your expected fortune after the next play equals your current fortune — no matter what has happened so far. Martingales capture this intuition precisely and provide powerful tools for analyzing random processes: bounds on fluctuations, convergence theorems, and identities for stopped processes.

The theory of **stopping times** — random times that depend only on observed history — is inseparable from martingale theory. When can you stop a fair game and still expect to break even? The answer is: not always. The optional stopping theorem gives precise conditions.

## Definitions

Let $(\Omega, \mathcal{F}, \mathbb{P})$ be a probability space with filtration $(\mathcal{F}_{n})_{n \ge 0}$. An **adapted** process $(M_{n})_{n \ge 0}$ is a **martingale** if:
1. $\mathbb{E}[|M_{n}|] < \infty$ for all $n$ (integrability);
2. $\mathbb{E}[M_{n+1} \mid \mathcal{F}_{n}] = M_{n}$ almost surely for all $n \ge 0$.

It is a **submartingale** if $\mathbb{E}[M_{n+1} \mid \mathcal{F}_{n}] \ge M_{n}$, and a **supermartingale** if $\mathbb{E}[M_{n+1} \mid \mathcal{F}_{n}] \le M_{n}$. A submartingale represents a favorable game; a supermartingale an unfavorable one.

**Example 1: Random walk with mean-zero increments.** Let $(\xi_{n})_{n \ge 1}$ be i.i.d. with $\mathbb{E}[\xi_{1}] = 0$ and $\mathbb{E}[|\xi_{1}|] < \infty$. Let $S_{n} = \sum_{i=1}^{n} \xi_{i}$. Then
$$\mathbb{E}[S_{n+1} \mid \mathcal{F}_{n}] = S_{n} + \mathbb{E}[\xi_{n+1} \mid \mathcal{F}_{n}] = S_{n} + \mathbb{E}[\xi_{n+1}] = S_{n},$$
so $(S_{n})$ is a martingale.

**Example 2: Variance martingale.** If $\mathbb{E}[\xi_{1}^{2}] = \sigma^{2} < \infty$, then $M_{n} = S_{n}^{2} - n\sigma^{2}$ is a martingale:
$$\mathbb{E}[S_{n+1}^{2} \mid \mathcal{F}_{n}] = \mathbb{E}[(S_{n} + \xi_{n+1})^{2} \mid \mathcal{F}_{n}] = S_{n}^{2} + 2S_{n}\mathbb{E}[\xi_{n+1}] + \mathbb{E}[\xi_{n+1}^{2}] = S_{n}^{2} + \sigma^{2}.$$
Therefore $\mathbb{E}[M_{n+1} \mid \mathcal{F}_{n}] = S_{n}^{2} + \sigma^{2} - (n+1)\sigma^{2} = M_{n}$.

## Stopping times

A **stopping time** with respect to $(\mathcal{F}_{n})$ is a random variable $T: \Omega \to \{0,1,2,\dots\} \cup \{\infty\}$ such that $\{T \le n\} \in \mathcal{F}_{n}$ for all $n \ge 0$. Equivalently, $\{T = n\} \in \mathcal{F}_{n}$ for all $n$.

Intuitively, $T$ is a stopping time if the decision to stop at time $n$ depends only on information available at time $n$, not on future information.

**Examples.**
- The first hitting time of a set $A$: $T_{A} = \min\{n \ge 0 : M_{n} \in A\}$.
- A deterministic time $T = n_{0}$.
- $T = \min\{n : S_{n} \ge 100\}$.

**Non-example.** $T = \max\{n \le 100 : S_{n} = \max_{k \le 100} S_{k}\}$ is not a stopping time, because deciding whether $n$ is the maximum requires looking at future values.

## Optional stopping theorem

**Theorem 10.1 (optional stopping, bounded case).** Let $(M_{n})$ be a martingale and $T$ a bounded stopping time. Then
$$\mathbb{E}[M_{T}] = \mathbb{E}[M_{0}].$$

**Proof.** Write
$$M_{T} = M_{0} + \sum_{k=1}^{\infty} \mathbf{1}_{\{T \ge k\}} (M_{k} - M_{k-1}).$$

Since $T$ is bounded, the sum is finite. The indicator $\mathbf{1}_{\{T \ge k\}} = 1 - \mathbf{1}_{\{T \le k-1\}}$ is $\mathcal{F}_{k-1}$-measurable. Therefore
$$\mathbb{E}[\mathbf{1}_{\{T \ge k\}} (M_{k} - M_{k-1})] = \mathbb{E}[\mathbf{1}_{\{T \ge k\}} \mathbb{E}[M_{k} - M_{k-1} \mid \mathcal{F}_{k-1}]] = 0.$$
Summing over $k$ gives $\mathbb{E}[M_{T}] = \mathbb{E}[M_{0}]$.

**Warning: unbounded stopping times.** The conclusion can fail for unbounded stopping times. Consider a simple symmetric random walk on $\mathbb{Z}$ starting at $0$, and let $T = \min\{n \ge 0 : S_{n} = 1\}$. Then $T < \infty$ almost surely, but $\mathbb{E}[T] = \infty$. We have $S_{T} = 1$ almost surely, so $\mathbb{E}[S_{T}] = 1 \neq 0 = \mathbb{E}[S_{0}]$.

The problem is that the stopped family $(S_{n \wedge T})_{n \ge 0}$ is not **uniformly integrable**. Optional stopping is a theorem family with many variants; each requires explicit integrability conditions:

1. $T$ is bounded.
2. $T$ is integrable and $(M_{n \wedge T})$ is bounded.
3. $\mathbb{E}[T]<\infty$ and there is a constant $C$ with $|M_n-M_{n-1}|\le C$ almost surely for every $n$.
4. $T<\infty$ almost surely and the family $(M_{n\wedge T})_{n\ge0}$ is uniformly integrable.

## Worked example: Wald's identity

Let $(\xi_n)$ be i.i.d. with $\mathbb E|\xi_1|<\infty$ and $\mathbb E[\xi_1]=\mu$, and let $T$ be a stopping time for their natural filtration with $\mathbb E[T]<\infty$. Then
$$\mathbb{E}\left[\sum_{n=1}^{T} \xi_{n}\right] = \mu \mathbb{E}[T].$$

**Proof.** Write the stopped sum as $\sum_{n\ge1}\xi_n\mathbf1_{\{T\ge n\}}$. The event $\{T\ge n\}$ is measurable with respect to $\sigma(\xi_1,\ldots,\xi_{n-1})$ and hence independent of $\xi_n$. Moreover,

$$\sum_{n\ge1}\mathbb E[|\xi_n|\mathbf1_{\{T\ge n\}}]
=\mathbb E|\xi_1|\sum_{n\ge1}\mathbb P(T\ge n)
=\mathbb E|\xi_1|\,\mathbb E[T]<\infty.$$

Absolute summability permits interchange, and independence gives

$$\mathbb E\left[\sum_{n=1}^{T}\xi_n\right]
=\sum_{n\ge1}\mu\,\mathbb P(T\ge n)=\mu\,\mathbb E[T].$$ ∎

## Worked example: the doubling strategy

A gambler bets on fair coin flips, doubling the stake after each loss. The first win recovers all previous losses and yields a net profit equal to the initial stake. Let the initial stake be $1$.

If the gambler stops at the first win, the profit is always $1$. The stopping time $T$ has $\mathbb E[T]=2$ (geometric with parameter $1/2$), but it has no deterministic upper bound, and the stake and possible cumulative loss are unbounded. Implementing the strategy as stated therefore requires access to arbitrarily large capital. Optional stopping does not apply because the stopped family $(M_{n\wedge T})$ is not uniformly integrable.

**Moral.** Optional stopping is a theorem family, not a betting incantation. Every application requires checking the hypotheses.

## Common errors

**Error 1: Applying optional stopping without checking boundedness.** The most common mistake is to assume $\mathbb{E}[M_{T}] = \mathbb{E}[M_{0}]$ for any stopping time. It is false.

**Error 2: Confusing almost-sure finiteness with integrability.** $T < \infty$ a.s. does not imply $\mathbb{E}[T] < \infty$. The simple random walk hitting time of $1$ is a.s. finite but has infinite mean.

**Error 3: Forgetting the filtration.** A process may be a martingale with respect to one filtration but not another. The natural filtration is the default, but larger filtrations may destroy the martingale property.

## Practice exercises

### Exercise 1

<a id="stochastic-martingales-and-stopping-original-ex-1"></a>

Let $(S_{n})$ be a simple symmetric random walk on $\mathbb{Z}$ with $S_{0} = 0$. Let $T = \min\{n : S_{n} \in \{-a, b\}\}$ for positive integers $a, b$. Show that $T$ is almost surely finite and find $\mathbb{E}[T]$.

<details>
<summary>Hint</summary>

Check integrability and adaptedness before taking the conditional expectation of the next increment.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since the walk is recurrent on $\mathbb{Z}$, it almost surely hits any finite set. Thus $T < \infty$ a.s. Apply optional stopping to the martingale $M_{n} = S_{n}^{2} - n$ at time $T \wedge n$, then let $n \to \infty$:
$$\mathbb{E}[S_{T}^{2}] = \mathbb{E}[T].$$

Now $S_{T} = -a$ or $S_{T} = b$. Let $p = \mathbb{P}(S_{T} = b)$. By optional stopping on $S_{n}$ (which is bounded up to $T$), $0 = \mathbb{E}[S_{T}] = bp - a(1-p)$, so $p = a/(a+b)$. Therefore
$$\mathbb{E}[S_{T}^{2}] = a^{2}(1-p) + b^{2}p = a^{2} \frac{b}{a+b} + b^{2} \frac{a}{a+b} = \frac{ab(a+b)}{a+b} = ab.$$
Thus $\mathbb{E}[T] = ab$.

</details>

### Exercise 2

<a id="stochastic-martingales-and-stopping-original-ex-2"></a>

Let $(M_{n})$ be a nonnegative martingale. Show that $(M_{n})$ converges almost surely to an integrable limit.

<details>
<summary>Hint</summary>

Check integrability and adaptedness before taking the conditional expectation of the next increment.

</details>
<details>
<summary>Solution</summary>

**Solution.** This is the **martingale convergence theorem**. A nonnegative martingale is a nonnegative supermartingale. By Doob's upcrossing inequality, the expected number of upcrossings of any interval $[a,b]$ is finite. Therefore the limit exists a.s. Fatou's lemma gives $\mathbb{E}[\lim M_{n}] \le \liminf \mathbb{E}[M_{n}] = \mathbb{E}[M_{0}] < \infty$.

</details>

### Exercise 3

<a id="stochastic-martingales-and-stopping-original-ex-3"></a>

For a fair $\pm 1$ random walk, verify that $S_{n}^{3} - 3nS_{n}$ is a martingale.

<details>
<summary>Hint</summary>

Check integrability and adaptedness before taking the conditional expectation of the next increment.

</details>
<details>
<summary>Solution</summary>

**Solution.** Compute
$$\mathbb{E}[S_{n+1}^{3} \mid \mathcal{F}_{n}] = \mathbb{E}[(S_{n} + \xi_{n+1})^{3} \mid \mathcal{F}_{n}]$$
$$= S_{n}^{3} + 3S_{n}^{2}\mathbb{E}[\xi_{n+1}] + 3S_{n}\mathbb{E}[\xi_{n+1}^{2}] + \mathbb{E}[\xi_{n+1}^{3}]$$
$$= S_{n}^{3} + 3S_{n}.$$

Also, $\mathbb{E}[(n+1)S_{n+1} \mid \mathcal{F}_{n}] = (n+1)S_{n}$. Therefore
$$\mathbb{E}[S_{n+1}^{3} - 3(n+1)S_{n+1} \mid \mathcal{F}_{n}] = S_{n}^{3} + 3S_{n} - 3(n+1)S_{n} = S_{n}^{3} - 3nS_{n}.$$

</details>


## Further development from proof-based probability

The following arguments and exercises extend the preceding treatment. They bring together the complementary material previously taught in the probability book; its exercise identifiers and mathematical hypotheses are preserved. The original three questions above remain separate exercises.

## Two structural examples

Let $S_{n}=\sum_{k=1}^{n}X_{k}$, where independent increments have mean zero and variance $\sigma^{2}$. Since

$S_{n}^{2}=S_{n-1}^{2}+2S_{n-1}X_{n}+X_{n}^{2}$,

conditional expectation gives

$\mathbb{E}[S_{n}^{2} \mid F_{n-1}]=S_{n-1}^{2}+\sigma^{2}$.

Therefore

$M_{n}=S_{n}^{2}-n\sigma^{2}$

is a martingale. The deterministic compensation removes predictable variance growth.

For another example, let data have density $p$ under one model and $q$ under another, and define a likelihood ratio

$L_{n}=\prod_{k=1}^{n} q(X_{k})/p(X_{k})$

under iid sampling from $p$, assuming $q$ is absolutely continuous with respect to $p$ so the ratios are well defined. Then

$\mathbb{E}_{p}[L_{n} \mid F_{n-1}]=L_{n-1}\int [q(x)/p(x)]p(x)dx=L_{n-1}$.

Thus $(L_{n})$ is a nonnegative martingale. This is the basis of sequential evidence bounds; support mismatches and integrability must be handled explicitly.

## Predictable strategies and martingale transforms

A process $H_{n}$ is **predictable** when $H_{n}$ is $F_{n-1}$-measurable: the stake for round $n$ is chosen using only information available before the next increment.

For a martingale $M$, define its transform

$(H\cdot M)_{n}=\sum_{k=1}^{n} H_{k}(M_{k}-M_{k-1})$.

If every product is integrable—for example, if $H_{k}$ is bounded—then $(H\cdot M)_{n}$ is a martingale because

$\mathbb{E}[H_{k}D_{k} \mid F_{k-1}]=H_{k}\mathbb{E}[D_{k} \mid F_{k-1}]=0$.

Predictable betting cannot create positive expected gain from fair integrable increments. This statement does not validate unbounded doubling strategies: their stakes, stopping times, or losses may violate integrability and limit-interchange conditions.

## Stopping times and stopped processes

A random time $\tau$ taking values in $\{0,1,2,...\}\cup \{\infty \}$ is a **stopping time** when

$\{\tau \le n\}\in F_{n}$

for every $n$. At time $n$, available information must reveal whether stopping has already occurred. A last future time, such as “the last return to zero,” is generally not a stopping time.

The stopped process is

$M_{n∧\tau }$.

If $M$ is a martingale, then the stopped process is a martingale under ordinary integrability. Its increment is

$M_{(n+1)∧\tau }-M_{n∧\tau }=\mathbf{1}_{\tau >n}(M_{n+1}-M_{n})$.

The indicator $\mathbf{1}_{\tau >n}$ is $F_{n}$-measurable, so the conditional mean is zero.

## Optional stopping, safely stated

**Bounded optional stopping.** If $M_{n}$ is a martingale and $\tau \le N$ almost surely for a fixed finite $N$, then

$\mathbb{E}[M_\tau ]=\mathbb{E}[M_{0}]$.

This follows because $M_{n∧\tau }$ has constant expectation and equals $M_\tau$ by time $N$.

For an unbounded stopping time, almost-sure finiteness alone is insufficient. In addition to $\tau <\infty$ almost surely, common sufficient extensions include:

- the stopped family $\{M_{n∧\tau }:n\ge 0\}$ is uniformly integrable;
- $\tau$ has finite expectation and martingale increments are uniformly bounded;
- the stopped variables are dominated by one integrable random variable—in particular, the martingale may be uniformly bounded up to $\tau$—permitting dominated convergence from $\tau ∧n$.

These are separate sufficient conditions, not interchangeable slogans. The desired conclusion may also be an inequality for a supermartingale rather than equality.

### Explicit failure

Let $S_{n}$ be a simple symmetric random walk starting at zero, and let

$\tau =\inf\{n\ge 0:S_{n}=1\}$.

The walk hits $1$ almost surely, so $\tau <\infty$ a.s., but $\mathbb{E}[\tau ]=\infty$. Since $S_\tau =1$,

$\mathbb{E}[S_\tau ]=1\ne 0=\mathbb{E}[S_{0}]$.

There is no contradiction: the stopped values $S_{n∧\tau }$ are not uniformly integrable, and the optional-stopping limit lacks a valid interchange license.

## Gambler's ruin

Let $S_{n}$ be simple symmetric random walk started at $i\in \{1,...,N-1\}$ and stopped on hitting $0$ or $N$:

$\tau =\inf\{n:S_{n}\in \{0,N\}\}$.

From any interior state there is conditional probability at least $2^{-N}$ of reaching a boundary within the next $N$ steps. Iterating over blocks shows $\tau <\infty$ almost surely. The stopped process lies in $[0,N]$. Apply bounded optional stopping to $\tau ∧m$, then use dominated convergence:

$\mathbb{E}_{i}[S_\tau]=i$.

If $p_{i}=\mathbb{P}_{i}(S_\tau =N)$, then $S_\tau$ is zero or $N$, so

$Np_{i}=i$, and therefore $p_{i}=i/N$.

The expected duration follows from $S_{n}^{2}-n$, also a martingale. At the bounded time $\tau ∧m$,

$\mathbb{E}_{i}[\tau \land m]=\mathbb{E}_{i}[S_{\tau \land m}^{2}]-i^{2}\le N^{2}$.

Monotone convergence first shows $\mathbb{E}_{i}[\tau]<\infty$. Since the stopped positions are bounded by $N$, dominated convergence then gives

$\mathbb{E}_{i}[S_\tau^{2}-\tau]=i^{2}$.

Since $\mathbb{E}_{i}[S_\tau^{2}]=N^{2}p_{i}=Ni$,

$\mathbb{E}_{i}[\tau]=i(N-i)$.

Writing $\mathbb{E}[M_\tau ]=\mathbb{E}[M_{0}]$ before establishing these bounds would be circular.

## Doob decomposition

Every integrable discrete-time submartingale $X_{n}$ has a decomposition

$X_{n}=M_{n}+A_{n}$,

where $M_{n}$ is a martingale and $A_{n}$ is predictable, integrable, nondecreasing, and starts at zero. Define

$A_{n}=\sum_{k=1}^{n} \mathbb{E}[X_{k}-X_{k-1} \mid F_{k-1}]$,

$M_{n}=X_{n}-A_{n}$.

The submartingale property makes every increment of $A$ nonnegative. Subtracting that predictable drift leaves conditionally mean-zero increments. The decomposition is unique when $A_{0}=0$ and predictability are required.

For a supermartingale, the predictable component is nonincreasing under the same sign convention. Doob decomposition is a discrete-time result here; continuous time requires additional regularity.

## Doob maximal inequalities

If $(X_{k})_{k=0}^{n}$ is a nonnegative submartingale and $\lambda >0$, then

$\lambda \mathbb{P}(\max_{0\le k\le n}X_{k}\ge \lambda )\le \mathbb{E}[X_{n}\mathbf{1}_{\max_{k\le n}X_{k}\ge \lambda }]\le \mathbb{E}[X_{n}]$.

The proof stops at the first crossing of $\lambda$ and uses the submartingale inequality on each disjoint first-crossing event. Unlike a union bound, it exploits temporal structure and pays no factor $n$.

If $M$ is a martingale and $p>1$, then $\lvert M_{k}\rvert$ is a submartingale and Doob's $L^{p}$ inequality states

$\mathbb{E}[(\max_{k\le n}\lvert M_{k}\rvert)^{p}]\le [p/(p-1)]^{p} \mathbb{E}[\lvert M_{n}\rvert^{p}]$.

The condition $p>1$ is essential for this finite constant. At $p=1$, weak-type maximal control remains available, but the displayed strong $L^{1}$ inequality does not.

For a nonnegative supermartingale $(L_{n})$, Ville's inequality gives

$\mathbb{P}(\sup_{n\ge 0}L_{n}\ge 1/\alpha )\le \alpha \mathbb{E}[L_{0}]$.

Applied to a likelihood-ratio martingale starting at one, it provides time-uniform evidence control without fixing a sample size in advance.

## Azuma–Hoeffding from conditional MGFs

Let $M_{n}$ be a martingale with differences $D_{k}=M_{k}-M_{k-1}$. Suppose, conditionally on $F_{k-1}$,

$a_{k}\le D_{k}\le b_{k}$

almost surely, where the bounds are deterministic. The conditional mean is zero, so conditional Hoeffding's lemma gives

$\mathbb{E}[e^{\lambda D_{k}} \mid F_{k-1}]\le \exp(\lambda^{2}(b_{k}-a_{k})^{2}/8)$.

Iterating conditional expectations yields

$\mathbb{E}[e^{\lambda (M_{n}-M_{0})}]\le \exp[(\lambda^{2}/8)\sum_{k}(b_{k}-a_{k})^{2}]$.

Chernoff optimisation proves **Azuma–Hoeffding**:

$\mathbb{P}(M_{n}-M_{0}\ge t)\le \exp[-2t^{2}/\sum_{k}(b_{k}-a_{k})^{2}]$.

The two-sided bound has an additional factor two.

If only $\lvert D_{k}\rvert \le c_{k}$ is stated, then the conditional range length is $2c_{k}$, giving

$\mathbb{P}(\lvert M_{n}-M_{0}\rvert \ge t)\le 2\exp[-t^{2}/(2\sum_{k}c_{k}^{2})]$.

Confusing range length with absolute increment changes the exponent by a factor four.

Azuma uses worst-case increment ranges. Variance-sensitive martingale inequalities such as Freedman's can be sharper when conditional variance is small, but they require a separate predictable-variance analysis.

## A martingale audit

Before using a martingale theorem, ask:

1. What is the filtration, and is the process adapted to it?
2. Are all process values integrable?
3. Do increments have conditional mean zero, not merely ordinary mean zero?
4. Is a strategy predictable before the next outcome?
5. Is the proposed random time actually a stopping time?
6. Is optional stopping bounded, dominated, uniformly integrable, or covered by another sufficient condition?
7. Has an unbounded-time limit been interchanged with expectation legitimately?
8. Does a maximal inequality require nonnegativity or $p>1$?
9. Are Azuma bounds conditional and are range lengths recorded correctly?
10. Would predictable variance support a sharper inequality than worst-case increments?

## Further exercises with complete solutions

### 1. Natural filtration and adaptedness

**Exercise S1.1**

<a id="martingales-stopping-and-concentration-ex-1"></a>

Let $F_{n}=\sigma (X_{1},...,X_{n})$ and $S_{n}=\sum_{k=1}^{n}X_{k}$. Prove $S_{n}$ is adapted.

<details>
<summary>Hint 1</summary>

Adaptedness is a measurability statement at each time.

</details>

<details>
<summary>Hint 2</summary>

Each summand in $S_n$ is measurable with respect to the sigma-algebra generated by observations up to $n$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each $X_{k}$ for $k\le n$ is $F_{n}$-measurable because $F_{k}\subseteq F_{n}$. A finite sum of $F_{n}$-measurable variables is $F_{n}$-measurable. Hence $S_{n}$ is adapted.

</details>

### 2. Adapted is not martingale

**Exercise S1.2**

<a id="martingales-stopping-and-concentration-ex-2"></a>

Let $X_{n}=n$ deterministically with any filtration. Is it a martingale, submartingale, or supermartingale?

<details>
<summary>Hint 1</summary>

Compute the conditional expectation of the deterministic next value.

</details>

<details>
<summary>Hint 2</summary>

Compare $n+1$ with the current value $n$ to decide the direction of the inequality.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is adapted and integrable. Since

$\mathbb{E}[X_{n+1} \mid F_{n}]=n+1\ge n=X_{n}$,

it is a submartingale. Equality fails, so it is not a martingale; the reverse inequality fails, so it is not a supermartingale.

</details>

### 3. Center an independent sum

**Exercise S1.3**

<a id="martingales-stopping-and-concentration-ex-3"></a>

Independent integrable $X_{k}$ have means $\mu_{k}$. Show $M_{n}=\sum_{k=1}^{n}(X_{k}-\mu_{k})$ is a martingale.

<details>
<summary>Hint 1</summary>

Separate the current sum from its next centred increment.

</details>

<details>
<summary>Hint 2</summary>

The next variable is independent of the current natural filtration and has the subtracted mean.

</details>

<details>
<summary>Solution</summary>

**Solution.** The process is adapted and integrable. Its next increment is $X_{n+1}-\mu_{n+1}$, independent of $F_{n}$, so

$\mathbb{E}[X_{n+1}-\mu_{n+1} \mid F_{n}]=0$.

Thus $\mathbb{E}[M_{n+1} \mid F_{n}]=M_{n}$.

</details>

### 4. The square martingale

**Exercise S1.4**

<a id="martingales-stopping-and-concentration-ex-4"></a>

Let $S_{n}$ be a sum of independent mean-zero variance-one increments. Prove $S_{n}^{2}-n$ is a martingale.

<details>
<summary>Hint 1</summary>

Expand $(S_n+X_{n+1})^2$.

</details>

<details>
<summary>Hint 2</summary>

After conditioning, the cross term has mean zero and the new squared increment has mean one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Expand

$S_{n+1}^{2}=S_{n}^{2}+2S_{n}X_{n+1}+X_{n+1}^{2}$.

Conditioning on $F_{n}$, independence and the moment assumptions make the last two conditional expectations zero and one. Hence

$\mathbb{E}[S_{n+1}^{2}-(n+1) \mid F_{n}]=S_{n}^{2}-n$.

</details>

### 5. A conditional forecast martingale

**Exercise S1.5**

<a id="martingales-stopping-and-concentration-ex-5"></a>

For integrable $Y$, prove $M_{n}=\mathbb{E}[Y \mid F_{n}]$ has constant expectation.

<details>
<summary>Hint 1</summary>

Apply the tower property to the conditional forecast.

</details>

<details>
<summary>Hint 2</summary>

The nested sigma-algebras also prove conditional fairness, which is stronger than constant ordinary expectation.

</details>

<details>
<summary>Solution</summary>

**Solution.** The tower property gives

$\mathbb{E}[M_{n}]=\mathbb{E}[\mathbb{E}[Y \mid F_{n}]]=\mathbb{E}[Y]$

for every $n$. More strongly, nested conditioning gives the martingale property. Constant expectation is a consequence here, not its proof by itself.

</details>

### 6. A negatively drifting process

**Exercise S1.6**

<a id="martingales-stopping-and-concentration-ex-6"></a>

If integrable adapted increments satisfy $\mathbb{E}[D_{n} \mid F_{n-1}]\le 0$, classify $X_{n}=X_{0}+\sum_{k=1}^{n}D_{k}$.

<details>
<summary>Hint 1</summary>

Condition the increment decomposition on the previous sigma-algebra.

</details>

<details>
<summary>Hint 2</summary>

A nonpositive conditional drift makes the next conditional expectation at most the present value.

</details>

<details>
<summary>Solution</summary>

**Solution.** Conditioning gives

$\mathbb{E}[X_{n} \mid F_{n-1}]=X_{n-1}+\mathbb{E}[D_{n} \mid F_{n-1}]\le X_{n-1}$.

Thus $X_{n}$ is a supermartingale.

</details>

### 7. Check a stopping time

**Exercise S1.7**

<a id="martingales-stopping-and-concentration-ex-7"></a>

For adapted $X_{n}$, show $\tau =\inf\{n:X_{n}\ge a\}$ is a stopping time.

<details>
<summary>Hint 1</summary>

Write the event that a hit has occurred by time $n$.

</details>

<details>
<summary>Hint 2</summary>

It is the finite union of events $\{X_k\ge a\}$ for $k\le n$, all visible at time $n$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The event

$\{\tau \le n\}=\cup_{k=0}^{n}\{X_{k}\ge a\}$.

Each event in the finite union belongs to $F_{k}\subseteq F_{n}$, so the union belongs to $F_{n}$. Hence the first hitting time is a stopping time.

</details>

### 8. A last visit is not generally a stopping time

**Exercise S1.8**

<a id="martingales-stopping-and-concentration-ex-8"></a>

Explain why $L=\max\{n\le N: X_{n}=0\}$ need not be a stopping time before horizon $N$.

<details>
<summary>Hint 1</summary>

Deciding that a visit is the last requires information about later returns.

</details>

<details>
<summary>Hint 2</summary>

At time $n<N$, future nonvisits need not be measurable in the current filtration.

</details>

<details>
<summary>Solution</summary>

**Solution.** At time $n<N$, knowing whether $L\le n$ requires knowing that the process never returns to zero at times $n+1,...,N$. That information is not generally in $F_{n}$. Thus $\{L\le n\}$ need not be observable at time $n$.

</details>

### 9. Stopped martingale increments

**Exercise S1.9**

<a id="martingales-stopping-and-concentration-ex-9"></a>

Show the increment of $M_{n∧\tau }$ equals $\mathbf{1}_{\tau \ge n}(M_{n}-M_{n-1})$ for $n\ge 1$.

<details>
<summary>Hint 1</summary>

Separate the cases $\tau<n$ and $\tau\ge n$.

</details>

<details>
<summary>Hint 2</summary>

The factor that permits the next increment is measurable one step earlier because $\{\tau\ge n\}=\{\tau\le n-1\}^c$.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $\tau <n$, both stopped values equal $M_\tau$, so the increment is zero. If $\tau \ge n$, neither value has stopped before the $n$th increment, so the increment is $M_{n}-M_{n-1}$. Combining the cases gives the formula. The indicator is $F_{n-1}$-measurable because $\{\tau \ge n\}=\{\tau \le n-1\}^{c}$.

</details>

### 10. Bounded optional stopping

**Exercise S1.10**

<a id="martingales-stopping-and-concentration-ex-10"></a>

If $\tau \le N$ and $M$ is a martingale, prove $\mathbb{E}[M_\tau ]=\mathbb{E}[M_{0}]$.

<details>
<summary>Hint 1</summary>

Use the stopped process at the deterministic horizon $N$.

</details>

<details>
<summary>Hint 2</summary>

At that horizon $N\wedge\tau=\tau$, so constant stopped-process expectation gives the result.

</details>

<details>
<summary>Solution</summary>

**Solution.** The stopped process $M_{n∧\tau }$ is a martingale and therefore has constant expectation. At $n=N$, boundedness of the stopping time gives $N∧\tau =\tau$. Hence

$\mathbb{E}[M_\tau ]=\mathbb{E}[M_{N∧\tau }]=\mathbb{E}[M_{0}]$.

</details>

### 11. Gambler's ruin probability

**Exercise S1.11**

<a id="martingales-stopping-and-concentration-ex-11"></a>

For symmetric random walk starting at $i$ and stopped at $\{0,N\}$, find the probability of hitting $N$ first.

<details>
<summary>Hint 1</summary>

Apply bounded stopped-walk expectation, justified by truncating the stopping time.

</details>

<details>
<summary>Hint 2</summary>

The terminal walk is either zero or $N$, so its expectation is $N$ times the upper-hit probability.

</details>

<details>
<summary>Solution</summary>

**Solution.** The stopped walk is bounded, so optional stopping through $\tau ∧m$ and dominated convergence gives $\mathbb{E}[S_\tau ]=i$. If $p=\mathbb{P}(S_\tau =N)$, then $S_\tau$ is $N$ with probability $p$ and zero otherwise. Thus $Np=i$, so $p=i/N$.

</details>

### 12. Gambler's ruin duration

**Exercise S1.12**

<a id="martingales-stopping-and-concentration-ex-12"></a>

Using the result above and the martingale $S_{n}^{2}-n$, find $\mathbb{E}_{i}[\tau ]$.

<details>
<summary>Hint 1</summary>

Apply the square martingale at bounded truncations of the exit time.

</details>

<details>
<summary>Hint 2</summary>

The terminal squared position has mean $N^2(i/N)$; bounded positions and monotone convergence justify the expected-duration limit.

</details>

<details>
<summary>Solution</summary>

**Solution.** Carefully stopped expectation gives

$\mathbb{E}[S_\tau^{2}-\tau ]=i^{2}$.

Since $\mathbb{P}(S_\tau =N)=i/N$,

$\mathbb{E}[S_\tau^{2}]=N^{2}(i/N)=Ni$.

Therefore $Ni-\mathbb{E}[\tau ]=i^{2}$, so $\mathbb{E}[\tau ]=i(N-i)$.

</details>

### 13. Why a.s. finite is insufficient

**Exercise S1.13**

<a id="martingales-stopping-and-concentration-ex-13"></a>

For symmetric walk from zero stopped on first hitting $1$, why can optional stopping not assert expectation zero?

<details>
<summary>Hint 1</summary>

The terminal position is deterministically one.

</details>

<details>
<summary>Hint 2</summary>

Almost-sure finiteness supplies neither finite expected duration nor uniform integrability of the stopped family.

</details>

<details>
<summary>Solution</summary>

**Solution.** Although the hitting time is finite almost surely, it has infinite expectation and the stopped family is not uniformly integrable. The terminal value equals one, so its expectation is one, not the initial zero. The failure of the hypotheses blocks the equality.

</details>

### 14. Predictable martingale transform

**Exercise S1.14**

<a id="martingales-stopping-and-concentration-ex-14"></a>

Let bounded $H_{k}$ be $F_{k-1}$-measurable and $D_{k}$ martingale differences. Prove $\sum_{k=1}^{n}H_{k}D_{k}$ is a martingale.

<details>
<summary>Hint 1</summary>

Boundedness ensures the products with integrable increments are integrable.

</details>

<details>
<summary>Hint 2</summary>

Predictability lets $H_k$ leave the conditional expectation, leaving the martingale-difference mean zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Boundedness and integrability of $D_{k}$ ensure the products are integrable. Predictability lets $H_{k}$ leave the conditional expectation:

$\mathbb{E}[H_{k}D_{k} \mid F_{k-1}]=H_{k}\mathbb{E}[D_{k} \mid F_{k-1}]=0$.

Thus the transformed increments are martingale differences.

</details>

### 15. Diagnose doubling

**Exercise S1.15**

<a id="martingales-stopping-and-concentration-ex-15"></a>

Why does the martingale-transform result not prove that an unlimited doubling strategy is safe?

<details>
<summary>Hint 1</summary>

Compare unlimited stakes and stopping with the hypotheses of the bounded theorems.

</details>

<details>
<summary>Hint 2</summary>

An unbounded strategy may fail integrability and uniform-integrability conditions needed at its terminal time.

</details>

<details>
<summary>Solution</summary>

**Solution.** Unlimited doubling uses unbounded stakes and a potentially unbounded stopping time. Product integrability, finite expected stopping, uniform integrability, and the ability to absorb arbitrarily large losses can fail. The bounded predictable-transform and bounded optional-stopping theorems therefore do not cover the strategy.

</details>

### 16. Compute a Doob decomposition

**Exercise S1.16**

<a id="martingales-stopping-and-concentration-ex-16"></a>

Let $X_{n}=S_{n}+cn$, where $S_{n}$ is a martingale and $c\ge 0$. Give its submartingale decomposition.

<details>
<summary>Hint 1</summary>

Separate the conditionally fair part from the accumulated predictable drift.

</details>

<details>
<summary>Hint 2</summary>

The deterministic process $cn$ is predictable and nondecreasing when $c\ge0$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Take $M_{n}=S_{n}$ and $A_{n}=cn$. The process $A_{n}$ is deterministic, predictable, starts at zero, and is nondecreasing. Hence $X_{n}=M_{n}+A_{n}$ is the Doob decomposition.

</details>

### 17. Use Doob's maximal inequality

**Exercise S1.17**

<a id="martingales-stopping-and-concentration-ex-17"></a>

If $X_{k}$ is a nonnegative submartingale with $\mathbb{E}[X_{n}]=5$, bound $\mathbb{P}(\max_{k\le n}X_{k}\ge 20)$.

<details>
<summary>Hint 1</summary>

Use the weak maximal inequality for a nonnegative submartingale.

</details>

<details>
<summary>Hint 2</summary>

Divide the terminal expectation five by the threshold twenty.

</details>

<details>
<summary>Solution</summary>

**Solution.** Doob's weak maximal inequality gives

$\mathbb{P}(\max_{k\le n}X_{k}\ge 20)\le \mathbb{E}[X_{n}]/20=5/20=1/4$.

</details>

### 18. Azuma with absolute increment bounds

**Exercise S1.18**

<a id="martingales-stopping-and-concentration-ex-18"></a>

Let $M_{0}=0$ and $\lvert M_{k}-M_{k-1}\rvert \le 1$ for $k=1,...,n$. Bound $\mathbb{P}(\lvert M_{n}\rvert \ge t)$.

<details>
<summary>Hint 1</summary>

The absolute increment bound is one, so its conditional range has length two.

</details>

<details>
<summary>Hint 2</summary>

Use the absolute-increment Azuma convention with $\sum c_k^2=n$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Here every $c_{k}=1$, so $\sum c_{k}^{2}=n$. The absolute-increment form of Azuma gives

$\mathbb{P}(\lvert M_{n}\rvert \ge t)\le 2\exp(-t^{2}/(2n))$.

</details>

### 19. Azuma with asymmetric ranges

**Exercise S1.19**

<a id="martingales-stopping-and-concentration-ex-19"></a>

Suppose conditionally $-1\le D_{k}\le 2$ for $k=1,...,n$. Give the Azuma upper-tail bound.

<details>
<summary>Hint 1</summary>

Use the conditional range length rather than the largest absolute endpoint.

</details>

<details>
<summary>Hint 2</summary>

The range length is three, so the squared-range sum is $9n$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each conditional range length is $b_{k}-a_{k}=3$, so the squared-range sum is $9n$. Therefore

$\mathbb{P}(M_{n}-M_{0}\ge t)\le \exp(-2t^{2}/(9n))$.

Using $c_{k}=2$ in the symmetric form would be valid but weaker.

</details>

### 20. Likelihood-ratio time-uniform control

**Exercise S1.20**

<a id="martingales-stopping-and-concentration-ex-20"></a>

Let $L_{n}$ be a nonnegative likelihood-ratio martingale with $L_{0}=1$. Bound the probability it ever reaches $1/\alpha$, where $0<\alpha <1$.

<details>
<summary>Hint 1</summary>

Apply the nonnegative-martingale maximal inequality at each finite horizon.

</details>

<details>
<summary>Hint 2</summary>

Then increase the horizon; the threshold $1/\alpha$ yields probability at most $\alpha$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Ville's inequality for a nonnegative supermartingale gives

$\mathbb{P}(\sup_{n}L_{n}\ge 1/\alpha )\le \alpha \mathbb{E}[L_{0}]=\alpha$.

Thus the crossing probability is controlled uniformly over all monitoring times, assuming the martingale model is correct.

</details>



## Sources

This chapter combines Euler's original stochastic-process and proof-based probability treatments. Specific cited theorems retain their attributions. See Rick Durrett, *Probability: Theory and Examples*, fifth edition, and the book's reference guide. Exercises retain their original semantic identifiers.

## Summary

A martingale is integrable, adapted and conditionally fair. Predictable transforms and bounded stopping preserve the appropriate mean identities. Unbounded stopping requires extra integrability conditions. Decomposition, maximal inequalities and conditional moment-generating functions convert the same conditional structure into fluctuation bounds.
