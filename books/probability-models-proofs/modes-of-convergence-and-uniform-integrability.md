
# Modes of Convergence and Uniform Integrability

Saying that random variables “approach” a limit is incomplete until the mode of convergence is named. Almost-sure convergence follows individual outcomes, convergence in probability controls the chance of a visible error, convergence in distribution controls bounded continuous observations of the law, and $L^{p}$ convergence controls average error. These notions form a useful but nonreversible implication network.

This chapter develops that network, supplies counterexamples to tempting converses, and explains why weak or probabilistic convergence alone does not pass expectations to the limit. Uniform integrability is the missing tail condition. The local prerequisites are random variables, expectation, moment inequalities, and CDFs; transform methods from the preceding chapter provide an optional route to distributional convergence.

## 1. Four definitions, four questions

Let $X,X_{1},X_{2},...$ be random variables on one probability space unless only their laws are under discussion.

We say $X_{n}$ converges **almost surely** to $X$, written $X_{n}\to X$ a.s., when

$\mathbb{P}(\{\omega :X_{n}(\omega )\to X(\omega )\})=1$.

This is pointwise convergence outside one null set. The exceptional set is chosen for the whole sequence, not separately for every $n$.

We say $X_{n}$ converges **in probability** to $X$, written $X_{n}\to_{P} X$, when for every $\varepsilon >0$,

$\mathbb{P}(\lvert X_{n}-X\rvert >\varepsilon )\to 0$.

This permits exceptional outcomes to move with $n$, provided their probability shrinks.

We say $X_{n}$ converges **in distribution** to $X$, written $X_{n}\Rightarrow X$, when

$F_{X_{n}}(x)\to F_{X}(x)$

at every continuity point $x$ of $F_{X}$. Equivalently,

$\mathbb{E}[h(X_{n})]\to \mathbb{E}[h(X)]$

for every bounded continuous $h$. Distributional convergence compares laws; the variables need not originally live on a common probability space.

For $p>0$, we say $X_{n}$ converges in **$L^{p}$** to $X$ when $X_n,X\in L^p$ and

$\mathbb{E}[\lvert X_{n}-X\rvert^{p}]\to 0$.

For $p\ge 1$, $(\mathbb{E}\lvert Y\rvert^{p})^{1/p}$ is a norm. For $0<p<1$ it is not a norm, but the convergence definition remains meaningful.

## 2. The basic implication network

The dependable implications are

$L^{p}\text{ convergence}\Rightarrow\text{convergence in probability}\Rightarrow\text{convergence in distribution}$,

and

$\text{almost-sure convergence}\Rightarrow\text{convergence in probability}$.

For the first arrow, Markov's inequality gives

$\mathbb{P}(\lvert X_{n}-X\rvert >\varepsilon )\le \mathbb{E}\lvert X_{n}-X\rvert^{p}/\varepsilon^{p}\to 0$.

For the almost-sure arrow, the indicators $\mathbf{1}_{\lvert X_{n}-X\rvert >\varepsilon }$ tend to zero almost surely and are bounded by one, so bounded convergence gives their expectations tending to zero.

To prove probability implies distribution, compare CDF events. For any $\varepsilon >0$,

$\{X_{n}\le x\}\subseteq \{X\le x+\varepsilon \}\cup \{\lvert X_{n}-X\rvert >\varepsilon \}$

and

$\{X\le x-\varepsilon \}\subseteq \{X_{n}\le x\}\cup \{\lvert X_{n}-X\rvert >\varepsilon \}$.

Taking upper and lower limits, then letting $\varepsilon \downarrow 0$ at a continuity point of $F_{X}$, yields CDF convergence.

### Higher $L^{p}$ controls lower $L^{p}$

On a probability space, if $0<p<q$ and $X_{n}\to X$ in $L^{q}$, then $X_{n}\to X$ in $L^{p}$. Lyapunov's inequality gives

$(\mathbb{E}\lvert Y\rvert^{p})^{1/p}\le (\mathbb{E}\lvert Y\rvert^{q})^{1/q}$.

This relies on total measure one. On an infinite measure space, the corresponding inclusion can fail.

## 3. Counterexamples map the missing arrows

The implication diagram is easier to remember when each absent arrow has a model.

### Almost surely does not imply $L^{1}$

On $(0,1)$ with uniform probability, let

$X_{n}=n\mathbf{1}_{(0,1/n)}$.

For every $\omega >0$, eventually $\omega \ge 1/n$, so $X_{n}(\omega )\to 0$. Yet $\mathbb{E}\lvert X_{n}\rvert =1$ for every $n$. A shrinking exceptional set can carry growing height.

### $L^{1}$ does not imply almost surely

Enumerate the dyadic intervals by levels:

$[0,1)$, then $[0,1/2),[1/2,1)$, then the four intervals of length $1/4$, and so on. Let $X_{n}$ be the indicator of the $n$th interval in this **typewriter sequence**. Interval lengths tend to zero, so $\mathbb{E}\lvert X_{n}\rvert \to 0$ and hence $X_{n}\to 0$ in $L^{1}$. But every $\omega \in [0,1)$ belongs to one interval at every level, so $X_{n}(\omega )=1$ infinitely often and $0$ infinitely often. There is no pointwise limit.

### Probability does not imply almost surely

The same typewriter sequence has $\mathbb{P}(X_{n}=1)\to 0$, so it converges to zero in probability, but not almost surely.

### Distribution does not imply probability

Let $X$ be a symmetric sign, taking $\pm 1$ equally likely, and set $X_{n}=-X$ for every $n$. Each $X_{n}$ has the same law as $X$, so $X_{n}\Rightarrow X$. But $\lvert X_{n}-X\rvert =2$ always, hence there is no convergence in probability to $X$. Distributional convergence forgets the coupling.

### Distribution does not imply moment convergence

Let $X_{n}=n$ with probability $1/n$ and zero otherwise. Then $X_{n}\to 0$ in probability, hence in distribution, but $\mathbb{E}[X_{n}]=1$. Rare large values disappear from bounded observations while retaining their expected contribution.

## 4. Subsequences recover almost-sure behavior

Convergence in probability has an important subsequence characterization.

**Theorem 13.1 (Subsequence).** $X_{n}\to_{P} X$ if and only if every subsequence $(X_{n_{k}})$ has a further subsequence converging to $X$ almost surely.

For the constructive direction, choose indices $n_{k}$ so that

$\mathbb{P}(\lvert X_{n_{k}}-X\rvert >2^{-k})\le 2^{-k}$.

The sum of these probabilities is finite. The first Borel–Cantelli lemma implies that only finitely many of the displayed bad events occur, so $X_{n_{k}}\to X$ almost surely.

For the converse, if convergence in probability failed, some $\varepsilon ,\delta >0$ and a subsequence would satisfy

$\mathbb{P}(\lvert X_{n_{k}}-X\rvert >\varepsilon )\ge \delta$

for every $k$. No further subsequence could converge almost surely, because almost-sure convergence would imply convergence in probability and force these probabilities to zero.

This theorem is a proof device, not permission to replace the original sequence by a favorable subsequence in a final conclusion.

### Uniqueness of probabilistic limits

If $X_{n}\to_{P} X$ and $X_{n}\to_{P} Y$, then $X=Y$ almost surely. Indeed,

$\mathbb{P}(\lvert X-Y\rvert >\varepsilon )\le \mathbb{P}(\lvert X-X_{n}\rvert >\varepsilon /2)+\mathbb{P}(\lvert X_{n}-Y\rvert >\varepsilon /2)\to 0$.

Distributional limits are unique only in law, which is the appropriate notion when couplings may differ.

## 5. Continuous mappings and their boundary

**Theorem 13.2 (Continuous mapping).** If $X_{n}\Rightarrow X$ and $g$ is continuous at every point in a set having $\mathbb{P}(X\in \cdot )$-probability one, then

$g(X_{n})\Rightarrow g(X)$.

Global continuity is a convenient sufficient condition, but continuity almost surely under the limit law is the sharper statement. The theorem also holds with convergence in probability or almost surely, producing the corresponding mode when $g$ is continuous at the realized limit.

### Why the discontinuity set matters

Let $X_{n}=1/n$ deterministically and $X=0$. Then $X_{n}\to X$ in every usual mode. For $g(x)=\mathbf{1}_{x>0}$, however, $g(X_{n})=1$ while $g(X)=0$. The discontinuity of $g$ occurs exactly at the entire mass of the limiting law. No mapping conclusion is available.

In CDF language, indicators of half-lines are discontinuous at their endpoint. This is why distributional convergence guarantees $F_{X_{n}}(x)\to F_{X}(x)$ only at continuity points of the limiting CDF.

## 6. Slutsky's theorem and joint information

Suppose $X_{n}\Rightarrow X$ and $Y_{n}\to_{P} c$ for a constant $c$. Then

$X_{n}+Y_{n}\Rightarrow X+c$,

$X_{n}Y_{n}\Rightarrow cX$,

and, when $c\ne 0$, $X_{n}/Y_{n}\Rightarrow X/c$.

More generally, $(X_{n},Y_{n})\Rightarrow (X,c)$, after which the continuous mapping theorem applies. The fact that the second limit is constant is crucial: concentration around a constant supplies the missing joint information.

If instead $X_{n}\Rightarrow X$ and $Y_{n}\Rightarrow Y$ with random limits, the marginal statements do not determine the limiting sum. For example, standard normal marginals can be coupled as $Y_{n}=X_{n}$, producing a doubled variable, or as $Y_{n}=-X_{n}$, producing zero. Joint convergence, independence at each $n$ plus a suitable joint limit argument, or other dependence information is needed.

Division has an additional boundary. The map $(x,y)↦x/y$ is discontinuous where $y=0$, so one needs the limiting denominator to avoid zero almost surely, not merely to have a nonzero mean.

## 7. Dominated and bounded convergence as mode upgrades

Almost-sure convergence supplies pointwise control but not tail control. If $X_{n}\to X$ almost surely and $\lvert X_{n}\rvert \le Y$ for an integrable $Y$, dominated convergence gives

$\mathbb{E}\lvert X_{n}-X\rvert \to 0$.

Indeed $\lvert X\rvert \le Y$ almost surely by passage to the limit, and $\lvert X_{n}-X\rvert \le 2Y$. Thus dominated almost-sure convergence upgrades to $L^{1}$ convergence.

If $\lvert X_{n}\rvert \le M$ for a fixed finite constant and $X_{n}\to X$ in probability, then $X_{n}\to X$ in $L^{1}$ even without almost-sure convergence. One proof takes an almost-surely convergent subsubsequence from every subsequence and applies bounded convergence; the subsequence criterion then forces the full sequence's $L^{1}$ errors to vanish. A direct estimate is also available:

$\mathbb{E}\lvert X_{n}-X\rvert \le \varepsilon +2M \mathbb{P}(\lvert X_{n}-X\rvert >\varepsilon )$

once $\lvert X\rvert \le M$ almost surely.

These are early examples of uniform integrability: a common integrable bound prevents probability from hiding in rare, tall spikes.

## 8. Uniform integrability

A family $\mathcal{H}$ of integrable random variables is **uniformly integrable** when

$\lim_{R\to \infty } \sup_{X\in \mathcal{H}} \mathbb{E}[\lvert X\rvert \mathbf{1}_{\lvert X\rvert >R}]=0$.

For a sequence, take the supremum over all indices.

Uniform integrability means that large values make a uniformly negligible contribution to expectation. It is stronger than $\sup_{n}\mathbb{E}\lvert X_{n}\rvert <\infty$. The spike sequence $X_{n}=n\mathbf{1}_{(0,1/n)}$ has expectations all equal to one, yet for every threshold $R$, choosing $n>R$ gives

$\mathbb{E}[X_{n}\mathbf{1}_{X_{n}>R}]=1$.

So it is not uniformly integrable.

### Three useful criteria

1. **Common domination.** If $\lvert X\rvert \le Y$ for every member of the family and $Y$ is integrable, then the family is uniformly integrable. Large $\lvert X\rvert$ can occur only where $Y$ is large, and absolute continuity of the integral controls the tail.

2. **A higher-moment bound.** If for some $p>1$,

   $\sup_{n} \mathbb{E}\lvert X_{n}\rvert^{p}\le C$,

   then for $R>0$,

   $\mathbb{E}[\lvert X_{n}\rvert \mathbf{1}_{\lvert X_{n}\rvert >R}]\le \mathbb{E}\lvert X_{n}\rvert^{p}/R^{p-1}\le C/R^{p-1}$.

   Hence the sequence is uniformly integrable.

3. **de la Vallée-Poussin criterion.** A family is uniformly integrable if there is an increasing convex function $\Phi :[0,\infty )\to [0,\infty )$ with $\Phi (x)/x\to \infty$ and

   $\sup_{X} \mathbb{E}[\Phi (\lvert X\rvert )]<\infty$.

   The higher-moment test is the special case $\Phi (x)=x^{p}$.

Uniform integrability also implies uniform $L^{1}$ boundedness. Choose $R$ so that every tail expectation is at most one; then $\mathbb{E}\lvert X\rvert \le R+1$ for the whole family.

## 9. Vitali's convergence theorem

The main bridge is the following probability-space version.

**Theorem 13.3 (Vitali).** If every $X_n$ is integrable and $X_{n}\to_{P} X$, then

$X_{n}\to X$ in $L^{1}$

if and only if the family $\{X_{n}:n\ge 1\}$ is uniformly integrable.

Under the uniform-integrability hypothesis, the limit $X$ is automatically integrable. One proof first takes an almost-surely convergent subsequence, truncates all variables at height $R$, applies bounded convergence to the truncated variables, and makes the discarded tails uniformly small. The subsequence principle then upgrades the conclusion to the full sequence.

For the reverse direction, $L^{1}$ convergence makes $X$ integrable and the family $\{X_{n}\}$ uniformly integrable. Choose one nearby integrable limit $X$ and control

$\lvert X_{n}\rvert \mathbf{1}_{\lvert X_{n}\rvert >R}$

by the $L^{1}$ error plus the tail of $X$; finitely many early indices are handled separately.

Consequently, convergence in probability plus uniform integrability implies

$\mathbb{E}[X_{n}]\to \mathbb{E}[X]$.

The converse statement “expectations converge, therefore $L^{1}$ convergence” is false for signed variables without additional structure. If $X_{n}$ and $X$ are nonnegative, convergence in probability together with $\mathbb{E}[X_{n}]\to \mathbb{E}[X]<\infty$ does imply $L^{1}$ convergence; this is a Scheffé-type result.

### Distributional convergence plus tail control

If $X_{n}\Rightarrow X$ and $\{X_{n}\}$ is uniformly integrable, then $X$ is integrable and

$\mathbb{E}[X_{n}]\to \mathbb{E}[X]$.

The proof truncates with a bounded continuous approximation to $x$ and controls both tails uniformly. Distributional convergence alone cannot do this because identity is unbounded.

More generally, if $X_{n}\to_{P} X$ and the family $\{\lvert X_{n}\rvert^{p}\}$ is uniformly integrable for $p>0$, then

$\mathbb{E}\lvert X_{n}-X\rvert^{p}\to 0$.

This is the $L^{p}$ form of Vitali; tail control applies to the powered errors using standard inequalities and the integrability inherited by $\lvert X\rvert^{p}$.

## 10. A convergence audit

Before passing to a limit, ask:

1. Which mode of convergence is actually known?
2. Are all variables coupled on one probability space, or are only laws compared?
3. Is a claimed converse contradicted by spikes, typewriter intervals, or changing couplings?
4. Is the mapping continuous at the limit with probability one?
5. Does Slutsky use a constant limit, or is joint convergence available?
6. Does a denominator stay away from zero in the limiting law?
7. Which theorem licenses interchange of limit and expectation?
8. Is there a common integrable bound, a higher-moment bound, or uniform integrability?
9. Are unbounded moments being inferred from weak convergence alone?
10. If a subsequence argument is used, does it establish the claim for the full sequence?

## Worked examples: state the space, the mode, and the tail control

### Worked example 1. A disappearing spike with every finite moment controlled

On $(0,1)$ with uniform probability, let $X_n=n\mathbf1_{(0,n^{-3})}$. Every fixed positive point eventually lies outside the shrinking interval, so $X_n\to0$ pointwise, hence almost surely. Its first absolute moment is $n\cdot n^{-3}=n^{-2}\to0$, and its second moment is $n^2n^{-3}=n^{-1}\to0$. Thus convergence also holds in $L^1$ and $L^2$.

It does not hold in $L^3$: the third absolute moment is exactly one. More generally $\mathbb E|X_n|^p=n^{p-3}$, so convergence in $L^p$ holds for $0<p<3$ and fails for $p\ge3$. The family itself is uniformly integrable in first moment; for example its second moments are uniformly bounded by one, giving a uniform tail bound $1/R$. The family of cubes is not uniformly integrable, because for every threshold one can choose $n$ with $n^3$ above it and retain its full cube expectation one.

The same sequence therefore supports several valid convergence claims and one invalid moment interchange. Uniform integrability must apply to the particular transformed variables whose expectations are being passed to the limit.

### Worked example 2. Truncation repairs an unbounded test function

Let $X_n$ equal $n$ with probability $1/n$ and zero otherwise. For every fixed tolerance its nonzero probability tends to zero, proving $X_n\to_P0$ regardless of the coupling. For a fixed $R>0$, the bounded truncation $h_R(x)=\min(x,R)$ satisfies $\mathbb Eh_R(X_n)=\min(n,R)/n\to0$. This agrees with distributional convergence to zero.

However $\mathbb EX_n=1$. To see exactly where truncation fails to recover the mean, for any $n>R$ the tail expectation $\mathbb E[X_n\mathbf1_{X_n>R}]$ is one. Taking the supremum over $n$ before letting $R$ increase leaves one, whereas fixing $n$ first would eventually leave zero. Uniform integrability is the uniform order of these quantifiers.

If one instead replaced the nonzero probability by $1/n^2$, the first moment would be $1/n\to0$ and the first-moment tails would become uniformly negligible. This is not a consequence of the common pointwise limit; it is a consequence of a different tail-mass calculation. Bounded continuous tests can hide exactly the portion of an integral that this calculation tracks.

### Worked example 3. A random denominator and an event of vanishing probability

Suppose $Z_n\Rightarrow Z\sim N(0,1)$ and $V_n\to_P4$. Define $T_n=Z_n/\sqrt{V_n}$ when $V_n>0$ and $T_n=0$ otherwise. Since $P(V_n\le0)\le P(|V_n-4|\ge2)\to0$, the arbitrary extension has vanishing influence on distributional limits. Continuity at four gives $1/\sqrt{V_n}\to_P1/2$ on this extended domain. Slutsky yields $T_n\Rightarrow Z/2\sim N(0,1/4)$.

No independence between numerator and denominator was required. The denominator's constant limit is what allows Slutsky to restore joint information. If instead it converged only in distribution to a nonconstant variable, separate marginal limits would not determine the ratio. Moreover this normal limit says nothing about $\mathbb ET_n$ without additional tail control: very small positive denominators on rare events can make expectations large or undefined even while their probabilities vanish.

## 11. Exercises with complete solutions

### 1. $L^{2}$ implies probability convergence

**Exercise 13.1**

<a id="modes-of-convergence-and-uniform-integrability-ex-1"></a>

Suppose $\mathbb{E}[(X_{n}-X)^{2}]\to 0$. Prove $X_{n}\to_{P} X$.

<details>
<summary>Hint 1</summary>

Apply Markov's inequality to the squared error.

</details>

<details>
<summary>Hint 2</summary>

The probability of error exceeding $\varepsilon$ is bounded by its second moment divided by $\varepsilon^2$.

</details>

<details>
<summary>Solution</summary>

**Solution.** For every $\varepsilon >0$, Markov's inequality applied to $(X_{n}-X)^{2}$ gives

$\mathbb{P}(\lvert X_{n}-X\rvert >\varepsilon )\le \mathbb{E}[(X_{n}-X)^{2}]/\varepsilon^{2}$.

The right side tends to zero, which is exactly convergence in probability.

</details>

### 2. Almost surely implies probability convergence

**Exercise 13.2**

<a id="modes-of-convergence-and-uniform-integrability-ex-2"></a>

Prove $X_{n}\to X$ almost surely implies $X_{n}\to_{P} X$.

<details>
<summary>Hint 1</summary>

Fix a positive tolerance and examine its bad-event indicator.

</details>

<details>
<summary>Hint 2</summary>

The indicator tends to zero almost surely and is bounded by the integrable constant one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Fix $\varepsilon >0$. The indicators

$I_{n}=\mathbf{1}_{\lvert X_{n}-X\rvert >\varepsilon }$

tend to zero almost surely and satisfy $0\le I_{n}\le 1$. Bounded convergence yields $\mathbb{E}[I_{n}]\to 0$. Since $\mathbb{E}[I_{n}]=\mathbb{P}(\lvert X_{n}-X\rvert >\varepsilon )$, convergence in probability follows.

</details>

### 3. Compare $L^{p}$ modes

**Exercise 13.3**

<a id="modes-of-convergence-and-uniform-integrability-ex-3"></a>

On a probability space, show that $X_{n}\to X$ in $L^{4}$ implies convergence in $L^{2}$.

<details>
<summary>Hint 1</summary>

Apply Cauchy–Schwarz to the square of the error and the constant one.

</details>

<details>
<summary>Hint 2</summary>

The $L^2$ error is bounded by the square root of the fourth moment of the error.

</details>

<details>
<summary>Solution</summary>

**Solution.** Apply Cauchy–Schwarz to $\lvert X_{n}-X\rvert^{2}$ and $1$:

$\mathbb{E}\lvert X_{n}-X\rvert^{2}\le (\mathbb{E}\lvert X_{n}-X\rvert^{4})^{1/2}$.

The right side tends to zero, so the $L^{2}$ error tends to zero.

</details>

### 4. Almost-sure convergence without $L^{1}$

**Exercise 13.4**

<a id="modes-of-convergence-and-uniform-integrability-ex-4"></a>

For $X_{n}=n\mathbf{1}_{(0,1/n)}$ on $(0,1)$, verify almost-sure convergence to zero and failure of $L^{1}$ convergence.

<details>
<summary>Hint 1</summary>

For a fixed positive point, determine when it leaves the shrinking interval forever.

</details>

<details>
<summary>Hint 2</summary>

The height times interval length is always one, so the $L^1$ error cannot vanish.

</details>

<details>
<summary>Solution</summary>

**Solution.** For any fixed $\omega >0$, choose $n>1/\omega$; then $\omega \notin (0,1/n)$, so all later values are zero. Thus $X_{n}(\omega )\to 0$ for every $\omega \in (0,1)$. But

$\mathbb{E}\lvert X_{n}\rvert =n\cdot (1/n)=1$,

so the $L^{1}$ distance from zero never decreases.

</details>

### 5. Probability convergence without almost sure convergence

**Exercise 13.5**

<a id="modes-of-convergence-and-uniform-integrability-ex-5"></a>

Explain why the dyadic typewriter indicators converge to zero in probability but not almost surely.

<details>
<summary>Hint 1</summary>

Separate the lengths of the current intervals from the number of times a fixed point is visited.

</details>

<details>
<summary>Hint 2</summary>

Each interval length tends to zero, but each point belongs to one interval at every dyadic level.

</details>

<details>
<summary>Solution</summary>

**Solution.** At dyadic level $k$, each indicator interval has probability $2^{-k}$, and these lengths tend to zero as the enumeration advances. Hence $\mathbb{P}(X_{n}=1)\to 0$, giving convergence in probability. Every point in $[0,1)$ lies in exactly one interval at each level, so its sequence takes value one infinitely often. It also takes value zero infinitely often, and therefore has no pointwise limit.

</details>

### 6. Distribution convergence under a bad coupling

**Exercise 13.6**

<a id="modes-of-convergence-and-uniform-integrability-ex-6"></a>

Let $X$ be equally likely $-1$ or $1$, and put $X_{n}=-X$. Show $X_{n}\Rightarrow X$ but not $X_{n}\to_{P} X$.

<details>
<summary>Hint 1</summary>

Convergence in distribution depends only on laws.

</details>

<details>
<summary>Hint 2</summary>

Symmetry preserves the law under a sign change, while the distance between the coupled variables is always two.

</details>

<details>
<summary>Solution</summary>

**Solution.** Symmetry gives $-X \sim X$, so every $X_{n}$ already has the limiting law and hence converges in distribution. But $\lvert X_{n}-X\rvert =2$ always. For $\varepsilon =1$, $\mathbb{P}(\lvert X_{n}-X\rvert >1)=1$, so probability convergence fails.

</details>

### 7. Uniqueness in probability

**Exercise 13.7**

<a id="modes-of-convergence-and-uniform-integrability-ex-7"></a>

If $X_{n}\to_{P} X$ and $X_{n}\to_{P} Y$, prove $X=Y$ almost surely.

<details>
<summary>Hint 1</summary>

Insert $X_n$ between $X$ and $Y$ in the triangle inequality.

</details>

<details>
<summary>Hint 2</summary>

Use a union bound with half the tolerance, then a countable sequence of positive tolerances.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $\varepsilon >0$, the triangle inequality implies

$\{\lvert X-Y\rvert >\varepsilon \}\subseteq \{\lvert X-X_{n}\rvert >\varepsilon /2\}\cup \{\lvert X_{n}-Y\rvert >\varepsilon /2\}$.

Taking probabilities and limits gives $\mathbb{P}(\lvert X-Y\rvert >\varepsilon )=0$. Apply this to positive rational $\varepsilon$; their union is $\{X\ne Y\}$, which therefore has probability zero.

</details>

### 8. Construct an almost-surely convergent subsequence

**Exercise 13.8**

<a id="modes-of-convergence-and-uniform-integrability-ex-8"></a>

If $X_{n}\to_{P} X$, show there are indices $n_{k}$ with $X_{n_{k}}\to X$ almost surely.

<details>
<summary>Hint 1</summary>

Choose a subsequence whose bad-event probabilities are summable.

</details>

<details>
<summary>Hint 2</summary>

For example use error thresholds $2^{-k}$ and probabilities at most $2^{-k}$, then Borel–Cantelli.

</details>

<details>
<summary>Solution</summary>

**Solution.** For each $k$, choose $n_{k}>n_{k-1}$ so that

$\mathbb{P}(\lvert X_{n_{k}}-X\rvert >2^{-k})\le 2^{-k}$.

The probabilities are summable. By the first Borel–Cantelli lemma, only finitely many bad events occur almost surely. Therefore eventually $\lvert X_{n_{k}}-X\rvert \le 2^{-k}$, which forces almost-sure convergence.

</details>

### 9. A valid continuous mapping

**Exercise 13.9**

<a id="modes-of-convergence-and-uniform-integrability-ex-9"></a>

If $X_{n}\Rightarrow X$, prove $X_{n}^{2}\Rightarrow X^{2}$.

<details>
<summary>Hint 1</summary>

Check the continuity set of the squaring map.

</details>

<details>
<summary>Hint 2</summary>

It is continuous at every real point, so the continuous mapping theorem has no exceptional-set obstacle.

</details>

<details>
<summary>Solution</summary>

**Solution.** The function $g(x)=x^{2}$ is continuous everywhere. The continuous mapping theorem therefore applies directly and gives $g(X_{n})\Rightarrow g(X)$.

</details>

### 10. A failed discontinuous mapping

**Exercise 13.10**

<a id="modes-of-convergence-and-uniform-integrability-ex-10"></a>

Let $X_{n}=1/n$ and $X=0$ deterministically. With $g(x)=\mathbf{1}_{x>0}$, compare the transformed variables.

<details>
<summary>Hint 1</summary>

Evaluate the discontinuous map at each deterministic input.

</details>

<details>
<summary>Hint 2</summary>

All positive inputs map to one, but their limit zero maps to zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** The original variables converge to zero almost surely, in probability, and in distribution. But $g(X_{n})=1$ for every $n$, whereas $g(X)=0$. Thus no transformed convergence holds. The map is discontinuous at zero, which has limiting probability one.

</details>

### 11. Slutsky for a studentized quantity

**Exercise 13.11**

<a id="modes-of-convergence-and-uniform-integrability-ex-11"></a>

Suppose $X_{n}\Rightarrow \mathcal{N}(0,1)$ and $S_{n}\to_{P} 2$. Find the limit in distribution of $X_{n}/S_{n}$.

<details>
<summary>Hint 1</summary>

The denominator converges to a nonzero constant.

</details>

<details>
<summary>Hint 2</summary>

Slutsky scales a standard normal limit by $1/2$, which scales its variance by $1/4$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The denominator limit is the nonzero constant two. Slutsky's theorem and continuity of division at denominator two give

$X_{n}/S_{n}\Rightarrow X/2$,

where $X$ is standard normal. Scaling a normal gives $\mathcal{N}(0,1/4)$.

</details>

### 12. Marginal limits do not determine a sum

**Exercise 13.12**

<a id="modes-of-convergence-and-uniform-integrability-ex-12"></a>

Give two couplings with standard normal marginals whose sums have different laws.

<details>
<summary>Hint 1</summary>

Use one standard normal variable to construct both pairs.

</details>

<details>
<summary>Hint 2</summary>

Compare the same-sign coupling with the opposite-sign coupling.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let $Z$ be standard normal. In the first coupling take $(X,Y)=(Z,Z)$; then $X+Y=2Z\sim \mathcal{N}(0,4)$. In the second take $(X,Y)=(Z,-Z)$; both marginals remain standard normal, but $X+Y=0$ almost surely. Marginal convergence cannot determine a sum without joint dependence information.

</details>

### 13. Dominated convergence upgrades to $L^{1}$

**Exercise 13.13**

<a id="modes-of-convergence-and-uniform-integrability-ex-13"></a>

Suppose $X_{n}\to X$ almost surely and $\lvert X_{n}\rvert \le Y$ with $\mathbb{E}[Y]<\infty$. Prove $X_{n}\to X$ in $L^{1}$.

<details>
<summary>Hint 1</summary>

The limit inherits the same pointwise bound as the sequence.

</details>

<details>
<summary>Hint 2</summary>

Dominate $|X_n-X|$ by $2Y$ and apply dominated convergence.

</details>

<details>
<summary>Solution</summary>

**Solution.** Taking pointwise limits gives $\lvert X\rvert \le Y$ almost surely. Hence

$\lvert X_{n}-X\rvert \le \lvert X_{n}\rvert +\lvert X\rvert \le 2Y$.

The left side tends to zero almost surely and is dominated by the integrable variable $2Y$. Dominated convergence yields $\mathbb{E}\lvert X_{n}-X\rvert \to 0$.

</details>

### 14. Uniform boundedness plus probability convergence

**Exercise 13.14**

<a id="modes-of-convergence-and-uniform-integrability-ex-14"></a>

Assume $\lvert X_{n}\rvert \le M$, $\lvert X\rvert \le M$, and $X_{n}\to_{P} X$. Prove $L^{1}$ convergence directly.

<details>
<summary>Hint 1</summary>

Split the absolute error according to whether it exceeds a chosen tolerance.

</details>

<details>
<summary>Hint 2</summary>

Bound the small-error part by the tolerance and the remaining part by $2M$ times a probability.

</details>

<details>
<summary>Solution</summary>

**Solution.** For any $\varepsilon >0$, split according to the event $\lvert X_{n}-X\rvert \le \varepsilon$:

$\mathbb{E}\lvert X_{n}-X\rvert \le \varepsilon +2M \mathbb{P}(\lvert X_{n}-X\rvert >\varepsilon )$.

The probability tends to zero, so $\limsup_{n}\mathbb{E}\lvert X_{n}-X\rvert \le \varepsilon$. Letting $\varepsilon \downarrow 0$ proves $L^{1}$ convergence.

</details>

### 15. A higher-moment UI criterion

**Exercise 13.15**

<a id="modes-of-convergence-and-uniform-integrability-ex-15"></a>

Suppose $\sup_{n}\mathbb{E}\lvert X_{n}\rvert^{3}\le C$. Prove $\{X_{n}\}$ is uniformly integrable.

<details>
<summary>Hint 1</summary>

On $|X_n|>R$, compare $|X_n|$ with $|X_n|^3/R^2$.

</details>

<details>
<summary>Hint 2</summary>

The tail expectations are uniformly at most $C/R^2$.

</details>

<details>
<summary>Solution</summary>

**Solution.** On $\{\lvert X_{n}\rvert >R\}$, one has $\lvert X_{n}\rvert \le \lvert X_{n}\rvert^{3}/R^{2}$. Therefore

$\mathbb{E}[\lvert X_{n}\rvert \mathbf{1}_{\lvert X_{n}\rvert >R}]\le \mathbb{E}\lvert X_{n}\rvert^{3}/R^{2}\le C/R^{2}$.

Taking the supremum over $n$ and then $R\to \infty$ gives uniform integrability.

</details>

### 16. $L^{1}$ boundedness is not UI

**Exercise 13.16**

<a id="modes-of-convergence-and-uniform-integrability-ex-16"></a>

Use $X_{n}=n\mathbf{1}_{(0,1/n)}$ to disprove the claim that $\sup_{n}\mathbb{E}\lvert X_{n}\rvert <\infty$ implies uniform integrability.

<details>
<summary>Hint 1</summary>

For any fixed truncation threshold, choose $n$ larger than it.

</details>

<details>
<summary>Hint 2</summary>

The whole first moment then lies beyond that threshold, so the supremum tail expectation stays one.

</details>

<details>
<summary>Solution</summary>

**Solution.** The expectations are all one, so the family is uniformly $L^{1}$ bounded. For any threshold $R$, choose an integer $n>R$. Then $X_{n}>R$ on $(0,1/n)$, and

$\mathbb{E}[X_{n}\mathbf{1}_{X_{n}>R}]=n(1/n)=1$.

The supremum tail expectation never tends to zero, so the family is not uniformly integrable.

</details>

### 17. Common domination implies UI

**Exercise 13.17**

<a id="modes-of-convergence-and-uniform-integrability-ex-17"></a>

If $\lvert X_{n}\rvert \le Y$ for all $n$ and $Y$ is integrable, prove $\{X_{n}\}$ is uniformly integrable.

<details>
<summary>Hint 1</summary>

A tail event for $|X_n|$ forces the dominating variable to exceed the same threshold.

</details>

<details>
<summary>Hint 2</summary>

Bound every tail expectation by $\mathbb E[Y\mathbf1_{Y>R}]$.

</details>

<details>
<summary>Solution</summary>

**Solution.** On $\{\lvert X_{n}\rvert >R\}$, domination implies $Y>R$. Hence

$\lvert X_{n}\rvert \mathbf{1}_{\lvert X_{n}\rvert >R}\le Y\mathbf{1}_{Y>R}$.

Taking expectations and the supremum over $n$ gives a bound $\mathbb{E}[Y\mathbf{1}_{Y>R}]$, which tends to zero by integrability of $Y$.

</details>

### 18. Apply Vitali

**Exercise 13.18**

<a id="modes-of-convergence-and-uniform-integrability-ex-18"></a>

Suppose $X_{n}\to_{P} X$ and $\sup_{n}\mathbb{E}\lvert X_{n}\rvert^{2}\le C$. Prove $X_{n}\to X$ in $L^{1}$.

<details>
<summary>Hint 1</summary>

A uniform second-moment bound gives a first-moment tail bound.

</details>

<details>
<summary>Hint 2</summary>

Combine that uniform integrability with convergence in probability using Vitali's theorem.

</details>

<details>
<summary>Solution</summary>

**Solution.** The uniform second-moment bound implies uniform integrability by the higher-moment criterion with $p=2$. Vitali's theorem then combines this tail control with convergence in probability to give $\mathbb{E}\lvert X_{n}-X\rvert \to 0$. It also ensures that $X$ is integrable.

</details>

### 19. Weak convergence with failed mean convergence

**Exercise 13.19**

<a id="modes-of-convergence-and-uniform-integrability-ex-19"></a>

Let $X_{n}=n$ with probability $1/n$ and zero otherwise. Prove $X_{n}\Rightarrow 0$, compute the means, and identify the missing hypothesis.

<details>
<summary>Hint 1</summary>

For large $n$, the positive-error event has probability $1/n$.

</details>

<details>
<summary>Hint 2</summary>

The vanishing probability proves weak convergence, but the height-probability product stays one and violates uniform integrability.

</details>

<details>
<summary>Solution</summary>

**Solution.** For any $\varepsilon >0$ and $n>\varepsilon$,

$\mathbb{P}(\lvert X_{n}\rvert >\varepsilon )=1/n\to 0$,

so $X_{n}\to_{P}0$ and therefore $X_{n}\Rightarrow 0$. Yet $\mathbb{E}[X_{n}]=1$ for every $n$, while $\mathbb{E}[0]=0$. The family is not uniformly integrable: for every $R$, choosing $n>R$ leaves tail expectation one.

</details>

### 20. $L^{1}$ convergence implies expectation convergence

**Exercise 13.20**

<a id="modes-of-convergence-and-uniform-integrability-ex-20"></a>

If $X_n,X\in L^1$ and $\mathbb{E}\lvert X_{n}-X\rvert \to 0$, prove $\mathbb{E}[X_{n}]\to \mathbb{E}[X]$.

<details>
<summary>Hint 1</summary>

Compare the difference of expectations with the expectation of the absolute difference.

</details>

<details>
<summary>Hint 2</summary>

The integral triangle inequality gives exactly the needed upper bound.

</details>

<details>
<summary>Solution</summary>

**Solution.** The stated $L^1$ membership makes every displayed expectation finite. The triangle inequality for integrals gives

$\lvert \mathbb{E}[X_{n}]-\mathbb{E}[X]\rvert =\lvert \mathbb{E}[X_{n}-X]\rvert \le \mathbb{E}\lvert X_{n}-X\rvert \to 0$.

The absolute error, rather than cancellation of signed errors, supplies the conclusion.

</details>


## Sources

The added prose and worked calculations are original. Rick Durrett's author-hosted [*Probability: Theory and Examples*, fifth-edition version](https://services.math.duke.edu/~rtd/PTE/PTE5_011119.pdf) is a primary reference for the probability theorems used in this chapter. All theorem-level attributions and source qualifications already present in the exposition are retained; the additional examples apply those results under the hypotheses stated beside their calculations. The book's [reference guide](references-and-attribution-guide.md) records the wider source map.


## 12. Summary and forward route

Almost-sure and $L^{p}$ convergence both imply convergence in probability, which implies convergence in distribution. Counterexamples show that these arrows cannot generally be reversed. The continuous mapping theorem respects discontinuities only when the limiting law avoids them, and Slutsky's theorem uses convergence to a constant to recover joint control. Passing unbounded expectations through a probabilistic or distributional limit requires a tail condition.

Uniform integrability is that condition at the $L^{1}$ level. Together with convergence in probability it is equivalent to $L^{1}$ convergence; together with weak convergence it passes first moments. The next chapter, [Weak and Strong Laws of Large Numbers](laws-of-large-numbers.md), uses truncation, variance control, and modes of convergence to explain when empirical averages stabilize.
