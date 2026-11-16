var e=`---
parent_id: book-probability-models-proofs
chapter_id: martingales-stopping-and-concentration
title: "Martingales, Stopping, and Dependent Concentration"
level: advanced-undergraduate
estimated_minutes: 285
license: CC BY-SA 4.0
---

# Martingales, Stopping, and Dependent Concentration

A martingale models a fair forecast relative to an evolving information set. Fairness is conditional: after every history currently visible, the next expected value equals the present value. This makes martingales useful far beyond gambling, including sequential inference, randomized algorithms, stochastic approximation, and concentration for dependent exposures.

This chapter develops filtrations, conditional increments, stopping times, predictable transforms, and bounded optional stopping. It marks the hypotheses needed to pass from bounded stopping to unbounded stopping, proves gambler's ruin identities, states Doob's decomposition and maximal inequalities in their proper scope, and derives Azuma–Hoeffding from conditional exponential moments.

## 1. Information grows through a filtration

A **filtration** is an increasing sequence of sigma-algebras

$F_{0}\\subseteq F_{1}\\subseteq F_{2}\\subseteq \\cdot \\cdot \\cdot$.

The sigma-algebra $F_{n}$ represents information available by time $n$. A process $(X_{n})$ is **adapted** when $X_{n}$ is $F_{n}$-measurable for every $n$. Adaptedness says the present value is observable now; it says nothing about fairness.

For observations $Z_{1},Z_{2},...$, the natural filtration is

$F_{n}=\\sigma (Z_{1},...,Z_{n})$,

with $F_{0}$ trivial unless initial information is supplied. Enlarging a filtration can destroy a martingale property: extra information may make a formerly fair next increment predictable.

A process $(M_{n})$ is a **martingale** relative to $(F_{n})$ when:

1. $M_{n}$ is adapted;
2. $\\mathbb{E}\\lvert M_{n}\\rvert <\\infty$;
3. $\\mathbb{E}[M_{n+1} \\mid F_{n}]=M_{n}$ almost surely.

It is a **submartingale** when the last equality is replaced by $\\ge$, and a **supermartingale** when it is replaced by $\\le$. Submartingales drift upward in conditional expectation; the names refer to the process, not to a bound above or below.

## 2. Conditional increments

Write the increment

$D_{n}=M_{n}-M_{n-1}$, $n\\ge 1$.

An adapted integrable process is a martingale exactly when

$\\mathbb{E}[D_{n} \\mid F_{n-1}]=0$

for every $n$. The sequence $(D_{n})$ is then a **martingale-difference sequence**. Its terms need not be independent. They may have history-dependent conditional variances and distributions, provided their conditional means vanish.

Taking ordinary expectations through the tower property gives $\\mathbb{E}[M_{n}]=\\mathbb{E}[M_{0}]$. Constant expectation alone is not sufficient: a process can gain conditionally after one history and lose after another in a way that cancels marginally.

### Independent centered sums

If independent integrable $X_{n}$ have $\\mathbb{E}[X_{n}]=0$ and $S_{n}=\\sum_{k=1}^{n}X_{k}$, then $S_{n}$ is a martingale for the natural filtration. Independence gives

$\\mathbb{E}[X_{n} \\mid F_{n-1}]=\\mathbb{E}[X_{n}]=0$.

If the means are $\\mu_{n}$, the compensated sum

$\\sum_{k=1}^{n}(X_{k}-\\mu_{k})$

is the martingale.

### Conditional forecasts

If $Y$ is integrable, then

$M_{n}=\\mathbb{E}[Y \\mid F_{n}]$

is a martingale. The tower property gives

$\\mathbb{E}[M_{n+1} \\mid F_{n}]=\\mathbb{E}[\\mathbb{E}[Y \\mid F_{n+1}] \\mid F_{n}]=\\mathbb{E}[Y \\mid F_{n}]$.

This **Doob martingale** tracks the best integrable forecast of a fixed terminal quantity as information arrives.

## 3. Two structural examples

Let $S_{n}=\\sum_{k=1}^{n}X_{k}$, where independent increments have mean zero and variance $\\sigma^{2}$. Since

$S_{n}^{2}=S_{n-1}^{2}+2S_{n-1}X_{n}+X_{n}^{2}$,

conditional expectation gives

$\\mathbb{E}[S_{n}^{2} \\mid F_{n-1}]=S_{n-1}^{2}+\\sigma^{2}$.

Therefore

$M_{n}=S_{n}^{2}-n\\sigma^{2}$

is a martingale. The deterministic compensation removes predictable variance growth.

For another example, let data have density $p$ under one model and $q$ under another, and define a likelihood ratio

$L_{n}=\\prod_{k=1}^{n} q(X_{k})/p(X_{k})$

under iid sampling from $p$, assuming $q$ is absolutely continuous with respect to $p$ so the ratios are well defined. Then

$\\mathbb{E}_{p}[L_{n} \\mid F_{n-1}]=L_{n-1}\\int [q(x)/p(x)]p(x)dx=L_{n-1}$.

Thus $(L_{n})$ is a nonnegative martingale. This is the basis of sequential evidence bounds; support mismatches and integrability must be handled explicitly.

## 4. Predictable strategies and martingale transforms

A process $H_{n}$ is **predictable** when $H_{n}$ is $F_{n-1}$-measurable: the stake for round $n$ is chosen using only information available before the next increment.

For a martingale $M$, define its transform

$(H\\cdot M)_{n}=\\sum_{k=1}^{n} H_{k}(M_{k}-M_{k-1})$.

If every product is integrable—for example, if $H_{k}$ is bounded—then $(H\\cdot M)_{n}$ is a martingale because

$\\mathbb{E}[H_{k}D_{k} \\mid F_{k-1}]=H_{k}\\mathbb{E}[D_{k} \\mid F_{k-1}]=0$.

Predictable betting cannot create positive expected gain from fair integrable increments. This statement does not validate unbounded doubling strategies: their stakes, stopping times, or losses may violate integrability and limit-interchange conditions.

## 5. Stopping times and stopped processes

A random time $\\tau$ taking values in $\\{0,1,2,...\\}\\cup \\{\\infty \\}$ is a **stopping time** when

$\\{\\tau \\le n\\}\\in F_{n}$

for every $n$. At time $n$, available information must reveal whether stopping has already occurred. A last future time, such as “the last return to zero,” is generally not a stopping time.

The stopped process is

$M_{n∧\\tau }$.

If $M$ is a martingale, then the stopped process is a martingale under ordinary integrability. Its increment is

$M_{(n+1)∧\\tau }-M_{n∧\\tau }=\\mathbf{1}_{\\tau >n}(M_{n+1}-M_{n})$.

The indicator $\\mathbf{1}_{\\tau >n}$ is $F_{n}$-measurable, so the conditional mean is zero.

## 6. Optional stopping, safely stated

**Bounded optional stopping.** If $M_{n}$ is a martingale and $\\tau \\le N$ almost surely for a fixed finite $N$, then

$\\mathbb{E}[M_\\tau ]=\\mathbb{E}[M_{0}]$.

This follows because $M_{n∧\\tau }$ has constant expectation and equals $M_\\tau$ by time $N$.

For an unbounded stopping time, almost-sure finiteness alone is insufficient. In addition to $\\tau <\\infty$ almost surely, common sufficient extensions include:

- the stopped family $\\{M_{n∧\\tau }:n\\ge 0\\}$ is uniformly integrable;
- $\\tau$ has finite expectation and martingale increments are uniformly bounded;
- the stopped variables are dominated by one integrable random variable—in particular, the martingale may be uniformly bounded up to $\\tau$—permitting dominated convergence from $\\tau ∧n$.

These are separate sufficient conditions, not interchangeable slogans. The desired conclusion may also be an inequality for a supermartingale rather than equality.

### Explicit failure

Let $S_{n}$ be a simple symmetric random walk starting at zero, and let

$\\tau =\\inf\\{n\\ge 0:S_{n}=1\\}$.

The walk hits $1$ almost surely, so $\\tau <\\infty$ a.s., but $\\mathbb{E}[\\tau ]=\\infty$. Since $S_\\tau =1$,

$\\mathbb{E}[S_\\tau ]=1\\ne 0=\\mathbb{E}[S_{0}]$.

There is no contradiction: the stopped values $S_{n∧\\tau }$ are not uniformly integrable, and the optional-stopping limit lacks a valid interchange license.

## 7. Gambler's ruin

Let $S_{n}$ be simple symmetric random walk started at $i\\in \\{1,...,N-1\\}$ and stopped on hitting $0$ or $N$:

$\\tau =\\inf\\{n:S_{n}\\in \\{0,N\\}\\}$.

From any interior state there is conditional probability at least $2^{-N}$ of reaching a boundary within the next $N$ steps. Iterating over blocks shows $\\tau <\\infty$ almost surely. The stopped process lies in $[0,N]$. Apply bounded optional stopping to $\\tau ∧m$, then use dominated convergence:

$\\mathbb{E}_{i}[S_\\tau]=i$.

If $p_{i}=\\mathbb{P}_{i}(S_\\tau =N)$, then $S_\\tau$ is zero or $N$, so

$Np_{i}=i$, and therefore $p_{i}=i/N$.

The expected duration follows from $S_{n}^{2}-n$, also a martingale. At the bounded time $\\tau ∧m$,

$\\mathbb{E}_{i}[\\tau \\land m]=\\mathbb{E}_{i}[S_{\\tau \\land m}^{2}]-i^{2}\\le N^{2}$.

Monotone convergence first shows $\\mathbb{E}_{i}[\\tau]<\\infty$. Since the stopped positions are bounded by $N$, dominated convergence then gives

$\\mathbb{E}_{i}[S_\\tau^{2}-\\tau]=i^{2}$.

Since $\\mathbb{E}_{i}[S_\\tau^{2}]=N^{2}p_{i}=Ni$,

$\\mathbb{E}_{i}[\\tau]=i(N-i)$.

Writing $\\mathbb{E}[M_\\tau ]=\\mathbb{E}[M_{0}]$ before establishing these bounds would be circular.

## 8. Doob decomposition

Every integrable discrete-time submartingale $X_{n}$ has a decomposition

$X_{n}=M_{n}+A_{n}$,

where $M_{n}$ is a martingale and $A_{n}$ is predictable, integrable, nondecreasing, and starts at zero. Define

$A_{n}=\\sum_{k=1}^{n} \\mathbb{E}[X_{k}-X_{k-1} \\mid F_{k-1}]$,

$M_{n}=X_{n}-A_{n}$.

The submartingale property makes every increment of $A$ nonnegative. Subtracting that predictable drift leaves conditionally mean-zero increments. The decomposition is unique when $A_{0}=0$ and predictability are required.

For a supermartingale, the predictable component is nonincreasing under the same sign convention. Doob decomposition is a discrete-time result here; continuous time requires additional regularity.

## 9. Doob maximal inequalities

If $(X_{k})_{k=0}^{n}$ is a nonnegative submartingale and $\\lambda >0$, then

$\\lambda \\mathbb{P}(\\max_{0\\le k\\le n}X_{k}\\ge \\lambda )\\le \\mathbb{E}[X_{n}\\mathbf{1}_{\\max_{k\\le n}X_{k}\\ge \\lambda }]\\le \\mathbb{E}[X_{n}]$.

The proof stops at the first crossing of $\\lambda$ and uses the submartingale inequality on each disjoint first-crossing event. Unlike a union bound, it exploits temporal structure and pays no factor $n$.

If $M$ is a martingale and $p>1$, then $\\lvert M_{k}\\rvert$ is a submartingale and Doob's $L^{p}$ inequality states

$\\mathbb{E}[(\\max_{k\\le n}\\lvert M_{k}\\rvert)^{p}]\\le [p/(p-1)]^{p} \\mathbb{E}[\\lvert M_{n}\\rvert^{p}]$.

The condition $p>1$ is essential for this finite constant. At $p=1$, weak-type maximal control remains available, but the displayed strong $L^{1}$ inequality does not.

For a nonnegative supermartingale $(L_{n})$, Ville's inequality gives

$\\mathbb{P}(\\sup_{n\\ge 0}L_{n}\\ge 1/\\alpha )\\le \\alpha \\mathbb{E}[L_{0}]$.

Applied to a likelihood-ratio martingale starting at one, it provides time-uniform evidence control without fixing a sample size in advance.

## 10. Azuma–Hoeffding from conditional MGFs

Let $M_{n}$ be a martingale with differences $D_{k}=M_{k}-M_{k-1}$. Suppose, conditionally on $F_{k-1}$,

$a_{k}\\le D_{k}\\le b_{k}$

almost surely, where the bounds are deterministic. The conditional mean is zero, so conditional Hoeffding's lemma gives

$\\mathbb{E}[e^{\\lambda D_{k}} \\mid F_{k-1}]\\le \\exp(\\lambda^{2}(b_{k}-a_{k})^{2}/8)$.

Iterating conditional expectations yields

$\\mathbb{E}[e^{\\lambda (M_{n}-M_{0})}]\\le \\exp[(\\lambda^{2}/8)\\sum_{k}(b_{k}-a_{k})^{2}]$.

Chernoff optimization proves **Azuma–Hoeffding**:

$\\mathbb{P}(M_{n}-M_{0}\\ge t)\\le \\exp[-2t^{2}/\\sum_{k}(b_{k}-a_{k})^{2}]$.

The two-sided bound has an additional factor two.

If only $\\lvert D_{k}\\rvert \\le c_{k}$ is stated, then the conditional range length is $2c_{k}$, giving

$\\mathbb{P}(\\lvert M_{n}-M_{0}\\rvert \\ge t)\\le 2\\exp[-t^{2}/(2\\sum_{k}c_{k}^{2})]$.

Confusing range length with absolute increment changes the exponent by a factor four.

Azuma uses worst-case increment ranges. Variance-sensitive martingale inequalities such as Freedman's can be sharper when conditional variance is small, but they require a separate predictable-variance analysis.

## 11. A martingale audit

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

## 12. Exercises with complete solutions

### 1. Natural filtration and adaptedness

**Exercise S1.1**

<a id="martingales-stopping-and-concentration-ex-1"></a>

Let $F_{n}=\\sigma (X_{1},...,X_{n})$ and $S_{n}=\\sum_{k=1}^{n}X_{k}$. Prove $S_{n}$ is adapted.

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

**Solution.** Each $X_{k}$ for $k\\le n$ is $F_{n}$-measurable because $F_{k}\\subseteq F_{n}$. A finite sum of $F_{n}$-measurable variables is $F_{n}$-measurable. Hence $S_{n}$ is adapted.

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

$\\mathbb{E}[X_{n+1} \\mid F_{n}]=n+1\\ge n=X_{n}$,

it is a submartingale. Equality fails, so it is not a martingale; the reverse inequality fails, so it is not a supermartingale.

</details>

### 3. Center an independent sum

**Exercise S1.3**

<a id="martingales-stopping-and-concentration-ex-3"></a>

Independent integrable $X_{k}$ have means $\\mu_{k}$. Show $M_{n}=\\sum_{k=1}^{n}(X_{k}-\\mu_{k})$ is a martingale.

<details>
<summary>Hint 1</summary>

Separate the current sum from its next centered increment.

</details>

<details>
<summary>Hint 2</summary>

The next variable is independent of the current natural filtration and has the subtracted mean.

</details>

<details>
<summary>Solution</summary>

**Solution.** The process is adapted and integrable. Its next increment is $X_{n+1}-\\mu_{n+1}$, independent of $F_{n}$, so

$\\mathbb{E}[X_{n+1}-\\mu_{n+1} \\mid F_{n}]=0$.

Thus $\\mathbb{E}[M_{n+1} \\mid F_{n}]=M_{n}$.

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

$\\mathbb{E}[S_{n+1}^{2}-(n+1) \\mid F_{n}]=S_{n}^{2}-n$.

</details>

### 5. A conditional forecast martingale

**Exercise S1.5**

<a id="martingales-stopping-and-concentration-ex-5"></a>

For integrable $Y$, prove $M_{n}=\\mathbb{E}[Y \\mid F_{n}]$ has constant expectation.

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

$\\mathbb{E}[M_{n}]=\\mathbb{E}[\\mathbb{E}[Y \\mid F_{n}]]=\\mathbb{E}[Y]$

for every $n$. More strongly, nested conditioning gives the martingale property. Constant expectation is a consequence here, not its proof by itself.

</details>

### 6. A negatively drifting process

**Exercise S1.6**

<a id="martingales-stopping-and-concentration-ex-6"></a>

If integrable adapted increments satisfy $\\mathbb{E}[D_{n} \\mid F_{n-1}]\\le 0$, classify $X_{n}=X_{0}+\\sum_{k=1}^{n}D_{k}$.

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

$\\mathbb{E}[X_{n} \\mid F_{n-1}]=X_{n-1}+\\mathbb{E}[D_{n} \\mid F_{n-1}]\\le X_{n-1}$.

Thus $X_{n}$ is a supermartingale.

</details>

### 7. Check a stopping time

**Exercise S1.7**

<a id="martingales-stopping-and-concentration-ex-7"></a>

For adapted $X_{n}$, show $\\tau =\\inf\\{n:X_{n}\\ge a\\}$ is a stopping time.

<details>
<summary>Hint 1</summary>

Write the event that a hit has occurred by time $n$.

</details>

<details>
<summary>Hint 2</summary>

It is the finite union of events $\\{X_k\\ge a\\}$ for $k\\le n$, all visible at time $n$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The event

$\\{\\tau \\le n\\}=\\cup_{k=0}^{n}\\{X_{k}\\ge a\\}$.

Each event in the finite union belongs to $F_{k}\\subseteq F_{n}$, so the union belongs to $F_{n}$. Hence the first hitting time is a stopping time.

</details>

### 8. A last visit is not generally a stopping time

**Exercise S1.8**

<a id="martingales-stopping-and-concentration-ex-8"></a>

Explain why $L=last n\\le N such that X_{n}=0$ need not be a stopping time before horizon $N$.

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

**Solution.** At time $n<N$, knowing whether $L\\le n$ requires knowing that the process never returns to zero at times $n+1,...,N$. That information is not generally in $F_{n}$. Thus $\\{L\\le n\\}$ need not be observable at time $n$.

</details>

### 9. Stopped martingale increments

**Exercise S1.9**

<a id="martingales-stopping-and-concentration-ex-9"></a>

Show the increment of $M_{n∧\\tau }$ equals $\\mathbf{1}_{\\tau \\ge n}(M_{n}-M_{n-1})$ for $n\\ge 1$.

<details>
<summary>Hint 1</summary>

Separate the cases $\\tau<n$ and $\\tau\\ge n$.

</details>

<details>
<summary>Hint 2</summary>

The factor that permits the next increment is measurable one step earlier because $\\{\\tau\\ge n\\}=\\{\\tau\\le n-1\\}^c$.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $\\tau <n$, both stopped values equal $M_\\tau$, so the increment is zero. If $\\tau \\ge n$, neither value has stopped before the $n$th increment, so the increment is $M_{n}-M_{n-1}$. Combining the cases gives the formula. The indicator is $F_{n-1}$-measurable because $\\{\\tau \\ge n\\}=\\{\\tau \\le n-1\\}^{c}$.

</details>

### 10. Bounded optional stopping

**Exercise S1.10**

<a id="martingales-stopping-and-concentration-ex-10"></a>

If $\\tau \\le N$ and $M$ is a martingale, prove $\\mathbb{E}[M_\\tau ]=\\mathbb{E}[M_{0}]$.

<details>
<summary>Hint 1</summary>

Use the stopped process at the deterministic horizon $N$.

</details>

<details>
<summary>Hint 2</summary>

At that horizon $N\\wedge\\tau=\\tau$, so constant stopped-process expectation gives the result.

</details>

<details>
<summary>Solution</summary>

**Solution.** The stopped process $M_{n∧\\tau }$ is a martingale and therefore has constant expectation. At $n=N$, boundedness of the stopping time gives $N∧\\tau =\\tau$. Hence

$\\mathbb{E}[M_\\tau ]=\\mathbb{E}[M_{N∧\\tau }]=\\mathbb{E}[M_{0}]$.

</details>

### 11. Gambler's ruin probability

**Exercise S1.11**

<a id="martingales-stopping-and-concentration-ex-11"></a>

For symmetric random walk starting at $i$ and stopped at $\\{0,N\\}$, find the probability of hitting $N$ first.

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

**Solution.** The stopped walk is bounded, so optional stopping through $\\tau ∧m$ and dominated convergence gives $\\mathbb{E}[S_\\tau ]=i$. If $p=\\mathbb{P}(S_\\tau =N)$, then $S_\\tau$ is $N$ with probability $p$ and zero otherwise. Thus $Np=i$, so $p=i/N$.

</details>

### 12. Gambler's ruin duration

**Exercise S1.12**

<a id="martingales-stopping-and-concentration-ex-12"></a>

Using the result above and the martingale $S_{n}^{2}-n$, find $\\mathbb{E}_{i}[\\tau ]$.

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

$\\mathbb{E}[S_\\tau^{2}-\\tau ]=i^{2}$.

Since $\\mathbb{P}(S_\\tau =N)=i/N$,

$\\mathbb{E}[S_\\tau^{2}]=N^{2}(i/N)=Ni$.

Therefore $Ni-\\mathbb{E}[\\tau ]=i^{2}$, so $\\mathbb{E}[\\tau ]=i(N-i)$.

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

Let bounded $H_{k}$ be $F_{k-1}$-measurable and $D_{k}$ martingale differences. Prove $\\sum_{k=1}^{n}H_{k}D_{k}$ is a martingale.

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

$\\mathbb{E}[H_{k}D_{k} \\mid F_{k-1}]=H_{k}\\mathbb{E}[D_{k} \\mid F_{k-1}]=0$.

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

Let $X_{n}=S_{n}+cn$, where $S_{n}$ is a martingale and $c\\ge 0$. Give its submartingale decomposition.

<details>
<summary>Hint 1</summary>

Separate the conditionally fair part from the accumulated predictable drift.

</details>

<details>
<summary>Hint 2</summary>

The deterministic process $cn$ is predictable and nondecreasing when $c\\ge0$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Take $M_{n}=S_{n}$ and $A_{n}=cn$. The process $A_{n}$ is deterministic, predictable, starts at zero, and is nondecreasing. Hence $X_{n}=M_{n}+A_{n}$ is the Doob decomposition.

</details>

### 17. Use Doob's maximal inequality

**Exercise S1.17**

<a id="martingales-stopping-and-concentration-ex-17"></a>

If $X_{k}$ is a nonnegative submartingale with $\\mathbb{E}[X_{n}]=5$, bound $\\mathbb{P}(\\max_{k\\le n}X_{k}\\ge 20)$.

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

$\\mathbb{P}(\\max_{k\\le n}X_{k}\\ge 20)\\le \\mathbb{E}[X_{n}]/20=5/20=1/4$.

</details>

### 18. Azuma with absolute increment bounds

**Exercise S1.18**

<a id="martingales-stopping-and-concentration-ex-18"></a>

Let $M_{0}=0$ and $\\lvert M_{k}-M_{k-1}\\rvert \\le 1$ for $k=1,...,n$. Bound $\\mathbb{P}(\\lvert M_{n}\\rvert \\ge t)$.

<details>
<summary>Hint 1</summary>

The absolute increment bound is one, so its conditional range has length two.

</details>

<details>
<summary>Hint 2</summary>

Use the absolute-increment Azuma convention with $\\sum c_k^2=n$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Here every $c_{k}=1$, so $\\sum c_{k}^{2}=n$. The absolute-increment form of Azuma gives

$\\mathbb{P}(\\lvert M_{n}\\rvert \\ge t)\\le 2\\exp(-t^{2}/(2n))$.

</details>

### 19. Azuma with asymmetric ranges

**Exercise S1.19**

<a id="martingales-stopping-and-concentration-ex-19"></a>

Suppose conditionally $-1\\le D_{k}\\le 2$ for $k=1,...,n$. Give the Azuma upper-tail bound.

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

$\\mathbb{P}(M_{n}-M_{0}\\ge t)\\le \\exp(-2t^{2}/(9n))$.

Using $c_{k}=2$ in the symmetric form would be valid but weaker.

</details>

### 20. Likelihood-ratio time-uniform control

**Exercise S1.20**

<a id="martingales-stopping-and-concentration-ex-20"></a>

Let $L_{n}$ be a nonnegative likelihood-ratio martingale with $L_{0}=1$. Bound the probability it ever reaches $1/\\alpha$, where $0<\\alpha <1$.

<details>
<summary>Hint 1</summary>

Apply the nonnegative-martingale maximal inequality at each finite horizon.

</details>

<details>
<summary>Hint 2</summary>

Then increase the horizon; the threshold $1/\\alpha$ yields probability at most $\\alpha$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Ville's inequality for a nonnegative supermartingale gives

$\\mathbb{P}(\\sup_{n}L_{n}\\ge 1/\\alpha )\\le \\alpha \\mathbb{E}[L_{0}]=\\alpha$.

Thus the crossing probability is controlled uniformly over all monitoring times, assuming the martingale model is correct.

</details>


## Sources and retained-continuation status

This chapter remains available with its original semantic chapter ID, original mathematical development, exercises, investigations, and source attributions. It is a retained continuation rather than a numbered step in the twenty-chapter main route. The added exercise hints are original. Rick Durrett's author-hosted [*Probability: Theory and Examples*](https://services.math.duke.edu/~rtd/PTE/PTE5_011119.pdf) supplies the primary probability reference; more specific imported-result and transport references remain identified where those results are used.


## 13. Summary and forward route

Martingales are integrable adapted processes with conditionally mean-zero increments. Predictable transforms preserve fairness, stopped processes remain martingales, and optional stopping preserves expectation under boundedness or another explicit limit-control condition. Gambler's ruin demonstrates both the power of stopping and the need to justify unbounded times. Doob decomposition separates innovation from predictable drift, while maximal inequalities control an entire path.

Conditional Hoeffding bounds on martingale differences yield Azuma–Hoeffding without independence of increments. The next chapter, [Coupling, Total Variation, and Comparison](#/item/book-probability-models-proofs?chapter=coupling-and-total-variation), constructs dependent pairs deliberately to compare laws and convergence rates.
`;export{e as default};