var e=`---
parent_id: book-probability-models-proofs
chapter_id: counterexample-atlas-and-capstones
title: "Counterexample Atlas, Synthesis Problems, and Capstones"
level: advanced-undergraduate
estimated_minutes: 300
license: CC BY-SA 4.0
---

# Counterexample Atlas, Synthesis Problems, and Capstones

A theorem is remembered more reliably when one knows what breaks without each hypothesis. Counterexamples are not mathematical trivia: they are compact model audits. A good one isolates a single missing assumption, computes the failure completely, and suggests the smallest repair.

This final chapter organizes recurring counterexamples across the book, then asks synthesis problems in which several tools compete. Its purpose is diagnostic. Before calculating, identify the probability space, information structure, integrability, dependence, stopping rule, and target mode of approximation. Only then select a theorem.

## 1. How to use an atlas

For each tempting claim, use four questions:

1. **Claim.** What conclusion is being asserted?
2. **Missing hypothesis.** Which theorem would justify it, and what does that theorem require?
3. **Witness.** Can a finite, two-point, or one-parameter model violate the conclusion?
4. **Repair.** What minimal additional condition restores a correct statement?

A witness should be as small as possible. Pairwise independence is best challenged with three bits, a convergence claim with moving indicators, and optional stopping with a one-dimensional random walk. Large simulations can illustrate failure, but an exact construction explains it.

## 2. Axioms and conditioning failures

### “Every integer is equally likely”

There is no countably additive uniform probability law on the positive integers. If each singleton had common mass $c$, then $c>0$ would make the total infinite, while $c=0$ would make the countable union have probability zero rather than one. Finite uniform models do not pass to an infinite uniform law without a new limiting construction.

### Conditioning can reverse a comparison

Conditional probabilities depend on the reference population. Suppose group $A$ succeeds on $9/10$ easy cases and $1/10$ hard cases, while group $B$ succeeds on $8/10$ easy and $0/10$ hard. Within each difficulty group, $A$ has the higher rate. If $A$ receives mostly hard cases and $B$ mostly easy cases, the aggregated rate of $B$ can be higher. This is Simpson reversal: no arithmetic contradiction occurs because the conditioning weights differ.

Conditioning on an event of probability zero is not defined by the elementary ratio $\\mathbb{P}(A\\cap B)/\\mathbb{P}(B)$. Conditional densities or regular conditional laws require additional structure and are only determined almost everywhere with respect to the conditioning variable's law.

## 3. Independence failures

Let $U,V$ be independent fair bits and define $W=U xor V$. Every pair among $U,V,W$ is independent, but the triple is not mutually independent because $W$ is determined by the first two. In particular,

$\\mathbb{P}(U=0,V=0,W=0)=1/4\\ne 1/8$.

Pairwise covariance zero is weaker still. Nonlinear dependence can remain invisible to covariance. If $X$ is uniform on $[-1,1]$ and $Y=X^{2}$, then $\\operatorname{Cov}(X,Y)=\\mathbb{E}[X^{3}]-\\mathbb{E}[X]\\mathbb{E}[X^{2}]=0$, yet $Y$ is a nonconstant deterministic function of $X$.

The repair is to name the needed level of structure: pairwise independence for variance addition, mutual independence for general product events, or joint-law information for transformations and conditioning.

## 4. Laws, densities, and transformations

A continuous CDF need not have a density. The Cantor distribution is atomless and supported on a Lebesgue-null set, so no Lebesgue density can integrate to its total mass. Differentiating its CDF almost everywhere produces zero and loses the entire singular law.

A many-to-one transformation needs all inverse branches. If $X\\sim \\operatorname{Uniform}(-1,1)$ and $Y=X^{2}$, using only $x=\\sqrt{y}$ produces half the density. The correct result is

$f_{Y}(y)=1/[2\\sqrt{y}]$, $0<y<1$,

after adding both signs.

A map can also create an atom. If $Y=\\max(X,0)$ for continuous $X\\sim \\operatorname{Uniform}(-1,1)$, the entire negative half-interval collapses to zero. The output has mass $1/2$ at zero and density $1/2$ on $(0,1)$. A Jacobian formula on smooth branches cannot see the collapsed region unless the pushforward preimage is audited first.

## 5. Expectations and transforms

Expectation is not always a finite center. A standard Cauchy variable has symmetric density, but its positive and negative parts both have infinite expectation. Writing “symmetry gives mean zero” performs the undefined subtraction $\\infty -\\infty$.

Finite moments of every integer order need not yield a moment generating function around zero or determine a law. The lognormal distribution has all positive moments but an infinite MGF for every positive argument and belongs to a family of distinct laws sharing those moments. Characteristic functions remain available because their integrands have modulus one.

Linearity does not require independence, while factorization does. The always-valid identity

$\\mathbb{E}[X+Y]=\\mathbb{E}[X]+\\mathbb{E}[Y]$

for integrable variables must not be confused with

$\\mathbb{E}[XY]=\\mathbb{E}[X]\\mathbb{E}[Y]$,

which needs an appropriate independence or conditional-mean argument.

## 6. Convergence failures

On $(0,1)$, let $X_{n}=n\\mathbf{1}_{(0,1/n)}$. Then $X_{n}\\to 0$ almost surely, but $\\mathbb{E}[X_{n}]=1$. Pointwise convergence does not pass an unbounded integral.

The dyadic typewriter indicators converge to zero in probability and in $L^{1}$, yet every point is visited infinitely often, so almost-sure convergence fails. Moving exceptional sets distinguish probability convergence from pathwise convergence.

Let $X_{n}=n$ with probability $1/n$ and zero otherwise. Then $X_{n}\\to_{P}0$, but $\\mathbb{E}[X_{n}]=1$. The missing bridge is uniform integrability. Rare tall values vanish from bounded continuous tests while retaining first-moment mass.

Finally, convergence in distribution does not prescribe a coupling. If $X$ is a symmetric sign and $X_{n}=-X$, then $X_{n} \\sim X$ for every $n$, but $\\lvert X_{n}-X\\rvert =2$ always. A law-level conclusion cannot be upgraded to convergence in probability on an arbitrary common space.

## 7. Limit theorems and concentration failures

For iid standard Cauchy variables, the sample average has the same Cauchy law as one observation. There is neither an ordinary finite-mean law of large numbers nor a square-root central limit theorem. Heavy-tail normalization belongs to a different theorem.

Dependence can destroy both averaging and concentration. If $X_{i}=Y$ for every $i$, then $\\bar{X}_{n}=Y$; repetition produces no new information. If $Y$ is sub-Gaussian with proxy $v$, the sum $nY$ has proxy $n^{2}v$, not the independent proxy $nv$.

A triangular array with one Rademacher summand per row has variance one but never approaches normality. Its Lindeberg condition fails because one term carries all row variance. Total variance normalization alone does not guarantee a CLT.

Union bounds remain valid under dependence, but they can be loose. Multiplying MGFs or probabilities generally does require independence. These two operations should never be interchanged mentally.

## 8. Martingale and stopping failures

An adapted process with constant expectation need not be a martingale; conditional fairness must hold after every current history. Enlarging the filtration can reveal the next increment and destroy conditional mean zero.

Almost-surely finite stopping is insufficient for optional stopping. A symmetric random walk started at zero hits $1$ almost surely, but the hitting time has infinite expectation and terminal value one. The stopped family is not uniformly integrable, so $\\mathbb{E}[S_\\tau ]=\\mathbb{E}[S_{0}]$ is false.

Doubling strategies hide the same defect through unbounded stakes and potentially unbounded loss. Predictability alone preserves a martingale only when the transformed increments remain integrable, and passing to a terminal stopping time needs a separate limit theorem.

## 9. Coupling and Markov-chain failures

Marginal laws do not determine joint behavior. Two standard normal variables can be coupled identically, oppositely, or independently. Their difference then has law zero, $2Z$, or $\\mathcal{N}(0,2)$, respectively. A coupling bound is a conclusion about one constructed joint law used to compare fixed marginals.

Total variation smallness controls differences of bounded event probabilities. It does not by itself control an unbounded expectation. A small amount of mass moved extremely far can have small total variation and a large or infinite effect on the mean.

A stationary distribution need not imply convergence from every start. The two-state chain that alternates deterministically between $0$ and $1$ has stationary distribution $(1/2,1/2)$, but a chain started at $0$ oscillates forever. Irreducibility without aperiodicity does not produce ordinary step-by-step mixing. Reducible chains may have many stationary distributions and retain initial-class information.

## 10. Monte Carlo and inference failures

An unbiased Monte Carlo estimator can be unusable when variance is enormous or infinite. For a rare event $A$, the crude estimator $\\mathbf{1}_{A}$ is unbiased for $p=\\mathbb{P}(A)$, but relative standard error is approximately $1/\\sqrt{np}$; estimating a tiny $p$ accurately may require far more than $1/p$ samples. Importance sampling can help only if its likelihood weights are correct and have controlled second moment.

Markov-chain Monte Carlo output is dependent. Treating $n$ correlated draws as $n$ iid draws can misstate uncertainty: positive autocorrelation typically makes the iid calculation understate error, while negative autocorrelation can make it overstate error. Burn-in does not erase all dependence, and stationarity does not imply rapid mixing.

In inference, a $95%$ confidence procedure has repeated-sampling coverage under its model; it does not assign posterior probability $0.95$ to the fixed parameter. Selecting the smallest of many p-values and reporting it as if one test were planned ignores multiplicity. Repeatedly checking a fixed-time confidence interval until it excludes a null value also changes coverage unless a time-uniform procedure is used.

## 11. A repair map

When a claim fails, the following repairs recur:

- replace symmetry by absolute integrability before asserting a mean;
- replace pairwise facts by a joint-law or mutual-independence condition;
- replace pointwise convergence by domination or uniform integrability before passing expectations;
- replace marginal limits by joint convergence before transforming several variables;
- replace total variance by Lindeberg control before a triangular-array CLT;
- replace marginal tail bounds by independence or conditional MGFs before concentrating sums;
- replace a.s. finite stopping by boundedness, uniform integrability, or another optional-stopping condition;
- replace stationarity by irreducibility, aperiodicity, and quantitative mixing control;
- replace a selected fixed-time test by multiplicity correction or a valid sequential method.

## Worked examples: diagnose, compute, and repair

### Worked example 1. A full numerical Simpson reversal

Suppose method A succeeds with probability $0.9$ on easy cases and $0.1$ on hard cases, whereas method B succeeds with probabilities $0.8$ and $0$ respectively. Method A is better within each difficulty stratum. Let A's case mix be ten percent easy and ninety percent hard. Its overall success probability is $0.1(0.9)+0.9(0.1)=0.18$. Let B's mix be ninety percent easy and ten percent hard. Its overall probability is $0.9(0.8)+0.1(0)=0.72$.

There is no contradiction: the total-probability expansions have different conditioning weights. To compare methods under a common target population with easy fraction $w$, their success probabilities become $0.9w+0.1(1-w)=0.1+0.8w$ and $0.8w$. A exceeds B by exactly $0.1$ for every $0\\le w\\le1$.

This repair is an explicit standardization under declared weights. It is not automatically a causal claim about choosing a method, because assignment to methods may itself depend on further variables. The arithmetic shows what conditioning can explain; causal identification would require another model.

### Worked example 2. A nearby law with a distant mean

Let $P=\\delta_0$ and $Q_m=(1-1/m)\\delta_0+(1/m)\\delta_{m^2}$ for integer $m\\ge2$. Their total variation distance is $1/m$: the event $\\{m^2\\}$ witnesses that discrepancy, and no event can see a larger discrepancy because only that much mass was moved. Hence every bounded test $h$ with $|h|\\le1$ has expectation discrepancy at most $2/m$.

Their means are zero and $m$, so the mean discrepancy diverges. The identity function is unbounded and is not among those tests. Their first-moment tail control also fails uniformly: for any fixed $R$, choosing $m^2>R$ gives $E_{Q_m}[|X|\\mathbf1_{|X|>R}]=m$.

A correct repair is to require uniform integrability when passing these first moments through weak limits. Another is to compare laws using a transport metric that charges the distance moved: the first Wasserstein distance here is exactly $(1/m)m^2=m$. Different notions of distributional closeness answer different questions, so replacing one by another without naming the test class changes the claim.

### Worked example 3. A rare-event estimate needs relative precision

Let an event have probability $p=10^{-6}$ and estimate it by an average of $n$ independent indicators. The estimate is unbiased with variance $p(1-p)/n$, so its relative standard deviation is $\\sqrt{(1-p)/(np)}$. Requiring this diagnostic to be at most $0.1$ needs
$n\\ge(1-p)/(0.01p)=99{,}999{,}900$.
That is a standard-deviation requirement, not yet a 95% confidence guarantee.

For a direct finite-sample guarantee of relative error less than $0.1$ with failure at most $0.05$, Chebyshev instead requires
$n\\ge(1-p)/(0.05\\cdot0.1^2p)=1{,}999{,}998{,}000$.
The larger sufficient budget reflects both the desired probability statement and the conservatism of Chebyshev. A normal approximation may suggest a smaller budget, but it would need a quantitative justification for this sparse regime.

At $n=10^6$ the expected success count is only one. The exact no-success probability is $(1-10^{-6})^{10^6}$, close to $e^{-1}$. Observing zero successes is therefore quite plausible and cannot establish that $p=0$. Importance sampling could reduce cost, but only after a verified change of measure and second-moment calculation such as those in the Monte Carlo chapter.

## 12. Exercises with complete solutions

### 1. No uniform law on the positive integers

**Exercise 20.1**

<a id="counterexample-atlas-and-capstones-ex-1"></a>

Prove there is no countably additive probability assigning the same mass to every positive integer.

<details>
<summary>Hint 1</summary>

Let every singleton have the proposed common mass $c$.

</details>

<details>
<summary>Hint 2</summary>

Positive $c$ violates finite total mass, while $c=0$ violates countable additivity on the full space.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let the common singleton mass be $c\\ge 0$. If $c>0$, the mass of the first $n$ integers is $nc$, which exceeds one for large $n$. Hence $c=0$. Countable additivity would then give total mass $\\sum_{n\\ge 1}0=0$, contradicting probability one for the whole space.

</details>

### 2. Pairwise but not mutual independence

**Exercise 20.2**

<a id="counterexample-atlas-and-capstones-ex-2"></a>

Let independent fair bits $U,V$ satisfy $W=U xor V$. Verify pairwise independence and failure of mutual independence.

<details>
<summary>Hint 1</summary>

List the four equally likely values of $(U,V)$ and compute $W$.

</details>

<details>
<summary>Hint 2</summary>

Each pair has four equally likely states, but the triple obeys a deterministic parity constraint.

</details>

<details>
<summary>Solution</summary>

**Solution.** For any fixed values of $U$ and $W$, exactly one value of $V$ produces them, so each pair $(U,W)$ has four equally likely outcomes; similarly for $(V,W)$. Thus every pair is independent. But $W$ is determined by $U,V$, and

$\\mathbb{P}(U=0,V=0,W=0)=1/4$,

where mutual independence would give $(1/2)^{3}=1/8$.

</details>

### 3. Uncorrelated but dependent

**Exercise 20.3**

<a id="counterexample-atlas-and-capstones-ex-3"></a>

Let $X$ be uniform on $[-1,1]$ and $Y=X^{2}$. Show $\\operatorname{Cov}(X,Y)=0$ but dependence is complete.

<details>
<summary>Hint 1</summary>

Use symmetry to compute the odd moments of $X$.

</details>

<details>
<summary>Hint 2</summary>

The covariance vanishes, yet $Y$ is a nonconstant measurable function of $X$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Symmetry gives $\\mathbb{E}[X]=\\mathbb{E}[X^{3}]=0$. Therefore

$\\operatorname{Cov}(X,Y)=\\mathbb{E}[X^{3}]-\\mathbb{E}[X]\\mathbb{E}[X^{2}]=0$.

Yet $Y=X^{2}$ deterministically, so knowing $X$ determines $Y$. Zero covariance does not imply independence.

</details>

### 4. Repair a one-branch transformation

**Exercise 20.4**

<a id="counterexample-atlas-and-capstones-ex-4"></a>

For $X\\sim \\operatorname{Uniform}(-1,1)$ and $Y=X^{2}$, derive the density.

<details>
<summary>Hint 1</summary>

For each $0<y<1$, the square map has two inverse branches.

</details>

<details>
<summary>Hint 2</summary>

Add the input density times the absolute inverse derivative for both signs.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $0<y<1$, inverse points are $\\pm \\sqrt{y}$. Each has input density $1/2$ and inverse derivative magnitude $1/(2\\sqrt{y})$. Adding both branches gives

$f_{Y}(y)=2(1/2)(1/(2\\sqrt{y}))=1/(2\\sqrt{y})$.

It is zero outside $(0,1)$ and integrates to one.

</details>

### 5. A collapsed interval creates an atom

**Exercise 20.5**

<a id="counterexample-atlas-and-capstones-ex-5"></a>

If $X\\sim \\operatorname{Uniform}(-1,1)$ and $Y=\\max(X,0)$, find the law of $Y$.

<details>
<summary>Hint 1</summary>

Identify the preimage of zero before applying any density formula.

</details>

<details>
<summary>Hint 2</summary>

The negative half-interval collapses to one point; positive values retain the original density.

</details>

<details>
<summary>Solution</summary>

**Solution.** The event $X\\le 0$, of probability $1/2$, maps entirely to zero. On $(0,1)$, the map is the identity and retains density $1/2$. Thus $Y$ has atom $\\mathbb{P}(Y=0)=1/2$ and continuous density $1/2$ on $(0,1)$.

</details>

### 6. Symmetry without a mean

**Exercise 20.6**

<a id="counterexample-atlas-and-capstones-ex-6"></a>

Explain why a standard Cauchy variable does not have expectation zero.

<details>
<summary>Hint 1</summary>

Check the positive-part integral, rather than a symmetric principal value.

</details>

<details>
<summary>Hint 2</summary>

Its tail behaves like $\\int_1^\\infty dx/x$, and the negative part diverges as well.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its positive-part expectation contains an integral comparable to $\\int_{1}^\\infty dx/x$, so it is infinite; the negative-part expectation is also infinite. The Lebesgue expectation would require the undefined difference $\\infty -\\infty$. Symmetric principal value zero is not an ordinary expectation.

</details>

### 7. Almost sure convergence without mean convergence

**Exercise 20.7**

<a id="counterexample-atlas-and-capstones-ex-7"></a>

For $X_{n}=n\\mathbf{1}_{(0,1/n)}$, compute the pointwise limit and expectations.

<details>
<summary>Hint 1</summary>

Fix one positive point in the underlying unit interval.

</details>

<details>
<summary>Hint 2</summary>

It eventually leaves the shrinking support, although height times support probability stays one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every fixed $\\omega >0$ eventually lies outside $(0,1/n)$, so $X_{n}(\\omega )\\to 0$. But

$\\mathbb{E}[X_{n}]=n\\cdot \\mathbb{P}((0,1/n))=1$.

There is no integrable common dominator or uniform integrability to justify exchanging limit and expectation.

</details>

### 8. Weak convergence without first-moment convergence

**Exercise 20.8**

<a id="counterexample-atlas-and-capstones-ex-8"></a>

Let $X_{n}=n$ with probability $1/n$ and zero otherwise. Prove $X_{n}\\Rightarrow 0$ but $\\mathbb{E}[X_{n}]$ does not converge to zero.

<details>
<summary>Hint 1</summary>

Compute the probability of exceeding a fixed positive tolerance.

</details>

<details>
<summary>Hint 2</summary>

That probability tends to zero, while the contribution to the first moment remains one.

</details>

<details>
<summary>Solution</summary>

**Solution.** For every $\\varepsilon >0$ and large $n$, $\\mathbb{P}(\\lvert X_{n}\\rvert >\\varepsilon )=1/n\\to 0$, so $X_{n}\\to_{P}0$ and hence converges in distribution. Yet $\\mathbb{E}[X_{n}]=n(1/n)=1$. Rare spikes violate uniform integrability.

</details>

### 9. Dependence defeats averaging

**Exercise 20.9**

<a id="counterexample-atlas-and-capstones-ex-9"></a>

Let $X_{i}=Y$ for all $i$, where $Y$ is nonconstant with finite mean $\\mu$. Does $\\bar{X}_{n}\\to_{P}\\mu$?

<details>
<summary>Hint 1</summary>

Compute the average without a limit theorem.

</details>

<details>
<summary>Hint 2</summary>

It is the same nonconstant variable for every $n$, so some positive-tolerance error probability stays positive.

</details>

<details>
<summary>Solution</summary>

**Solution.** The average equals $Y$ for every $n$. Choose $\\varepsilon >0$ for which $\\mathbb{P}(\\lvert Y-\\mu \\rvert >\\varepsilon )>0$, possible because $Y$ is nonconstant. That probability stays fixed, so convergence in probability fails.

</details>

### 10. A Lindeberg failure

**Exercise 20.10**

<a id="counterexample-atlas-and-capstones-ex-10"></a>

Each triangular-array row contains one symmetric sign of variance one. Evaluate the Lindeberg expression for $\\varepsilon =1/2$.

<details>
<summary>Hint 1</summary>

Calculate total variance and the Lindeberg cutoff in this one-term row.

</details>

<details>
<summary>Hint 2</summary>

The sole squared summand is always included, leaving normalized tail second moment one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Total row variance is one, and the sole variable has absolute value one, exceeding $\\varepsilon s_{n}=1/2$. The normalized truncated second moment is therefore one for every row. Lindeberg fails, and the row sum remains a sign rather than becoming normal.

</details>

### 11. Optional-stopping failure

**Exercise 20.11**

<a id="counterexample-atlas-and-capstones-ex-11"></a>

For symmetric random walk stopped on first hitting $1$, identify the false conclusion and missing condition.

<details>
<summary>Hint 1</summary>

Compare the terminal value with the initial expectation.

</details>

<details>
<summary>Hint 2</summary>

The stopping time is unbounded with infinite mean, and the stopped family lacks uniform integrability.

</details>

<details>
<summary>Solution</summary>

**Solution.** The terminal value is one almost surely, so $\\mathbb{E}[S_\\tau ]=1$, whereas $\\mathbb{E}[S_{0}]=0$. Almost-sure finiteness of $\\tau$ does not justify optional stopping. Here $\\mathbb{E}[\\tau ]=\\infty$ and the stopped family is not uniformly integrable.

</details>

### 12. Stationary but periodic

**Exercise 20.12**

<a id="counterexample-atlas-and-capstones-ex-12"></a>

For transition matrix $P=[[0,1],[1,0]]$, find a stationary distribution and show failure of convergence from state zero.

<details>
<summary>Hint 1</summary>

Multiply the proposed stationary row vector by the transition matrix.

</details>

<details>
<summary>Hint 2</summary>

From a point start, the distribution alternates between two point masses rather than tending to that stationary law.

</details>

<details>
<summary>Solution</summary>

**Solution.** The vector $\\pi =(1/2,1/2)$ satisfies $\\pi P=\\pi$. Starting at zero, the law is point mass at zero at even times and point mass at one at odd times. It never converges to $\\pi$; period two blocks mixing.

</details>

### 13. Total variation does not control unbounded means

**Exercise 20.13**

<a id="counterexample-atlas-and-capstones-ex-13"></a>

Let $P$ put all mass at zero and $Q_\\varepsilon$ put mass $1-\\varepsilon$ at zero and $\\varepsilon$ at $1/\\varepsilon^{2}$. Compare total variation and means.

<details>
<summary>Hint 1</summary>

The laws disagree on only the moved mass.

</details>

<details>
<summary>Hint 2</summary>

The identity test function multiplies that small mass by its very large destination.

</details>

<details>
<summary>Solution</summary>

**Solution.** The laws differ only by moving mass $\\varepsilon$, so their total variation distance is $\\varepsilon$. But

$\\mathbb{E}_{P}[X]=0$, $\\mathbb{E}_{Q_\\varepsilon}[X]=\\varepsilon (1/\\varepsilon^{2})=1/\\varepsilon$.

As $\\varepsilon \\to 0$, total variation vanishes while the mean difference diverges. Bounded-test control does not extend to an unbounded identity function.

</details>

### 14. Rare-event Monte Carlo cost

**Exercise 20.14**

<a id="counterexample-atlas-and-capstones-ex-14"></a>

For iid indicators of an event with probability $p$, compute the relative standard deviation of the sample proportion.

<details>
<summary>Hint 1</summary>

First find the variance of the independent indicator average.

</details>

<details>
<summary>Hint 2</summary>

Divide its standard deviation by $p>0$ and simplify; at $p=0$ relative error is undefined.

</details>

<details>
<summary>Solution</summary>

**Solution.** The estimator has mean $p$ and variance $p(1-p)/n$. Its standard deviation divided by its mean is

$\\sqrt{p(1-p)/n}/p=\\sqrt{(1-p)/(np)}$.

For small $p$, this is approximately $1/\\sqrt{np}$, so many more than $1/p$ samples are needed for small relative error.

</details>

### 15. Multiple testing by a union bound

**Exercise 20.15**

<a id="counterexample-atlas-and-capstones-ex-15"></a>

Suppose each of $m$ prespecified null tests has false-rejection probability at most $\\alpha /m$. Bound the chance of at least one false rejection when all nulls are true.

<details>
<summary>Hint 1</summary>

Represent each false rejection by an event.

</details>

<details>
<summary>Hint 2</summary>

Add their upper bounds using the union inequality; dependence does not obstruct it.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let $A_{j}$ be false rejection of test $j$. Regardless of dependence,

$\\mathbb{P}(\\cup_{j}A_{j})\\le \\sum_{j}\\mathbb{P}(A_{j})\\le m(\\alpha /m)=\\alpha$.

This Bonferroni control applies to the prespecified family; unrecorded adaptive expansion changes the event collection.

</details>


## 13. Capstone: audit a sequential model-selection experiment

A team has $m$ prespecified binary classifiers. For classifier $h$, loss $L(h,Z)$ lies in $[0,1]$. It collects $n$ iid validation observations, computes

$\\hat{R}_{n}(h)=n^{-1}\\sum_{i}L(h,Z_{i})$,

and selects $\\hat{h}$ minimizing empirical loss. After selection, it deploys the classifier on a stream of iid Bernoulli failure indicators with claimed failure probability $p_{0}$. Assume $0<p_0<p_1<1$. It wants both a fixed-sample selection guarantee and an anytime alarm for the alternative $p_{1}$.

Answer the following.

1. Give a simultaneous validation bound over all $m$ classifiers with failure probability $\\delta$.
2. Bound selected excess risk relative to the best classifier in the library.
3. Construct a likelihood-ratio process for sequential failures and prove its null martingale property.
4. Give a threshold with probability at most $\\alpha$ of ever producing a false alarm.
5. Diagnose what fails if the $n$ validation rows are actually $n$ copies of one random row.
6. Explain how paired evaluation of two classifiers can either reduce or increase comparison variance depending on their coupling.
7. State what the conclusions do and do not establish inferentially.

**Complete worked solution.** For fixed $h$, Hoeffding gives

$\\mathbb{P}(\\lvert \\hat{R}_{n}(h)-R(h)\\rvert >\\varepsilon )\\le 2e^{-2n\\varepsilon^{2}}$.

A union bound over the prespecified library gives

$\\mathbb{P}(\\sup_{h}\\lvert \\hat{R}_{n}(h)-R(h)\\rvert >\\varepsilon )\\le 2m e^{-2n\\varepsilon^{2}}$.

Set the right side to $\\delta$. With probability at least $1-\\delta$,

$\\sup_{h}\\lvert \\hat{R}_{n}(h)-R(h)\\rvert \\le \\varepsilon_{n}$,

where

$\\varepsilon_{n}=\\sqrt{\\log(2m/\\delta )/(2n)}$.

Let $h_{star}$ minimize true risk. On this same event,

$R(\\hat{h})\\le \\hat{R}_{n}(\\hat{h})+\\varepsilon_{n}$

$\\le \\hat{R}_{n}(h_{star})+\\varepsilon_{n}$

$\\le R(h_{star})+2\\varepsilon_{n}$.

Thus selection costs at most $2\\varepsilon_{n}$ in this finite-class guarantee. A one-classifier interval would not survive choosing the minimum from $m$ noisy values.

For deployment failures $Y_{t}\\in \\{0,1\\}$, define the likelihood ratio

$L_{t}=\\prod_{j=1}^{t} [p_{1}^{Y_{j}}(1-p_{1})^{1-Y_{j}}]/[p_{0}^{Y_{j}}(1-p_{0})^{1-Y_{j}}]$, $L_{0}=1$.

Under iid $\\operatorname{Bernoulli}(p_{0})$ sampling and filtration $F_{t}=\\sigma (Y_{1},...,Y_{t})$,

$\\mathbb{E}_{p_{0}}[L_{t} \\mid F_{t-1}]$

$=L_{t-1}[p_{0}(p_{1}/p_{0})+(1-p_{0})((1-p_{1})/(1-p_{0}))]$

$=L_{t-1}$.

So $(L_{t})$ is a nonnegative null martingale. Ville's inequality gives

$\\mathbb{P}_{p_{0}}(\\sup_{t}L_{t}\\ge 1/\\alpha )\\le \\alpha$.

Therefore alarming at the first crossing of $1/\\alpha$ controls the probability of ever alarming under the simple null. This time-uniform conclusion is not obtained by repeatedly applying a fixed-time p-value.

If all validation rows are copies of one random row, each empirical risk is just one random loss repeated $n$ times. Independence-based Hoeffding factorization is false; effective information has not grown, and the advertised $e^{-2n\\varepsilon^{2}}$ confidence is spurious.

For paired evaluation of classifiers $A,B$, estimate the risk difference using $D_{i}=L(A,Z_{i})-L(B,Z_{i})$. Its variance is

$\\operatorname{Var}(D_{i})=\\operatorname{Var}(L_{A})+\\operatorname{Var}(L_{B})-2\\operatorname{Cov}(L_{A},L_{B})$.

Positive covariance from shared difficult examples reduces variance of the paired difference; negative covariance increases it. Marginal loss rates alone do not determine this covariance, so a coupling or joint-data design must be specified.

Finally, the validation result compares only the fixed finite library under iid bounded-loss sampling. It does not prove model correctness, robustness to distribution shift, or posterior probability that $\\hat{h}$ is optimal. The sequential result controls type-I crossing probability for the specified simple null and alternative likelihood ratio; it does not guarantee rapid detection, cover arbitrary adaptive model changes, or remain valid after replacing the data-generating assumptions without a new martingale argument.


### A self-contained proof of the capstone's time-uniform bound

The crossing inequality used above can be proved directly without a process chapter as a prerequisite. Let $\\tau=\\inf\\{t\\ge0:L_t\\ge1/\\alpha\\}$ and fix an integer horizon $N$. The event $\\{\\tau\\ge t\\}$ is determined before observation $t$. Hence
$$
L_{\\tau\\wedge N}=L_0+\\sum_{t=1}^N\\mathbf1_{\\{\\tau\\ge t\\}}(L_t-L_{t-1}).
$$
Every term is integrable: at each finite time the likelihood ratio is a finite product with positive fixed denominators, and its null mean is one. Conditional expectation of each summand is zero by the displayed martingale identity and the measurability of its indicator. Therefore $\\mathbb E_{p_0}L_{\\tau\\wedge N}=1$. On $\\{\\tau\\le N\\}$ the stopped value is at least $1/\\alpha$, and on its complement it is nonnegative. Thus
$1\\ge\\alpha^{-1}P_{p_0}(\\tau\\le N)$.
The events $\\{\\tau\\le N\\}$ increase with $N$, so continuity of probability gives $P_{p_0}(\\tau<\\infty)\\le\\alpha$. No assertion about the expectation at the unbounded terminal time was used. This proof identifies precisely why nonnegativity and the finite-horizon conditional-mean identity support repeated monitoring.

## Sources

The added prose and worked calculations are original. Rick Durrett's author-hosted [*Probability: Theory and Examples*, fifth-edition version](https://services.math.duke.edu/~rtd/PTE/PTE5_011119.pdf) is a primary reference for the probability theorems used in this chapter. All theorem-level attributions and source qualifications already present in the exposition are retained; the additional examples apply those results under the hypotheses stated beside their calculations. The book's [reference guide](back-matter/references-and-attribution-guide.md) records the wider source map.


## 14. Final synthesis

Probability proofs become reliable when every operation has a license: countable additivity for infinite unions, positive conditioning mass or a regular conditional construction, joint structure for independence claims, absolute integrability for signed expectations, tail control for limit interchange, Lindeberg control for unequal summands, conditional MGFs for dependent concentration, and uniform integrability or boundedness for stopped martingales.

Counterexamples locate the missing license. Synthesis then becomes a disciplined sequence: define the model, identify information and dependence, state the target mode, verify hypotheses, compute, and audit the conclusion against a minimal witness. Return to [Probability: Models, Bounds, and Proofs](#/item/book-probability-models-proofs) to revisit any dependency exposed by that audit.

## Summary

The smallest counterexamples reveal which hypotheses carry a probability theorem. Dependence changes averages and variance, tails govern moment interchange, joint laws determine transformations, and stopping rules change the events whose errors need control. The capstone combines finite-class validation with a separately proved time-uniform likelihood-ratio bound. Its conclusions retain their declared sampling, integrability, and model assumptions; none asserts that a model is true merely because a calculated guarantee holds within it.
`;export{e as default};