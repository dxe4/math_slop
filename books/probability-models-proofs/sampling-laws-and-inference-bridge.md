
# Sampling Laws and the Bridge to Statistical Inference

Probability starts with a law and derives consequences. Statistical inference observes data and asks which claims about an unknown law are justified by a procedure. This bridge chapter constructs sampling distributions, pivots, likelihood, coverage, testing error, bootstrap boundaries, and Bayesian conditioning without pretending to replace a full inference course.

## 1. Experiment, parameter, and statistic

A statistical model is a family $\{\mathbb{P}_\theta :\theta \in \Theta \}$ of possible observation laws. A statistic $T=T(X_{1},...,X_{n})$ is a measurable function of data. Its **sampling law** under $\theta$ is the pushforward $\mathbb{P}_\theta ∘T^{-1}$. The observed value $t_{\mathrm{obs}}$ is not itself a distribution.

For iid Bernoulli data, $S=\sum_{i=1}^{n}X_{i}\sim \operatorname{Binomial}(n,p)$ and $\hat{p}=S/n$ has mean $p$ and variance $p(1-p)/n$. These probability facts support but do not choose an inferential procedure.

## 2. Estimation and risk

An estimator is a statistic used to estimate a target $g(\theta )$. Bias is $\mathbb{E}_\theta T-g(\theta )$, variance is centered at its own mean, and squared-error risk decomposes as

$\mathbb{E}_{\theta}[(T-g(\theta ))^{2}]=\operatorname{Var}_{\theta}(T)+\operatorname{Bias}_{\theta}(T)^{2}$.

Unbiasedness is neither necessary nor sufficient for small risk. Consistency is a sequence property, such as $T_{n}\to g(\theta )$ in probability for each fixed $\theta$; it does not state finite-sample accuracy or uniformity over $\theta$.

## 3. Likelihood is not a posterior

For observed $x$, likelihood is $L(\theta ;x)=p_\theta (x)$ viewed as a function of $\theta$. It need not integrate to one over parameter space. Multiplying it by a prior and normalizing produces a posterior under a declared Bayesian joint model. A likelihood ratio compares parameter values within one model; it is not the probability that a hypothesis is true.

For Bernoulli data, $L(p;x)∝p^{s}(1-p)^{n-s}$ and the interior maximum is $s/n$. At all-zero or all-one samples, the maximum lies on the boundary.

## 4. Pivots and confidence coverage

A pivot has a distribution not depending on the parameter. If iid normal data have known $\sigma$,

$Z=(\bar{X}-\mu )/(\sigma /\sqrt{n})\sim N(0,1)$.

Inverting $\mathbb{P}(-z\le Z\le z)=1-\alpha$ gives

$[\bar{X}-z\sigma /\sqrt{n}, \bar{X}+z\sigma /\sqrt{n}]$.

Coverage means $\mathbb{P}_\mu (\mu \in C(X))\ge 1-\alpha$ for every relevant $\mu$. After observing data, the frequentist parameter is fixed; the random-set procedure had coverage before sampling. Optional stopping or data-driven selection can alter it.

## 5. Tests and p-values

A test is a decision rule $\varphi (X)\in [0,1]$. Its size is $\sup_{\theta \in H_{0}}\mathbb{E}_\theta \varphi$; power is $\mathbb{E}_\theta \varphi$ under alternatives. A valid p-value satisfies $\mathbb{P}_\theta (p\le u)\le u$ for all null $\theta$ and $u\in [0,1]$. It is not $\mathbb{P}(H_{0} \mid \mathrm{data})$.

For a simple null and alternative, the Neyman–Pearson lemma orders outcomes by likelihood ratio for maximum power at a fixed size. Composite, two-sided, selected, or sequential problems need further structure.

## 6. Resampling and asymptotics

The nonparametric bootstrap samples from the empirical law and approximates a statistic's sampling distribution. It is not universally valid: extremes, boundary parameters, nonsmooth functionals, weak identification, and dependent data can fail. Permutation tests derive exactness from exchangeability under the null, not from large sample size.

Asymptotic normality plus Slutsky can justify approximate standard errors, but an approximation needs its limiting regime and regularity conditions. Convergence at each fixed parameter need not be uniform near a boundary.

## 7. Bayesian bridge

A prior $\Pi (d\theta )$ and likelihood kernel $\mathbb{P}_\theta (dx)$ define a joint law. The posterior is a regular conditional distribution $\Pi (d\theta \mid x)$. Posterior probabilities are conditional probabilities inside that model. Calibration under repeated sampling, sensitivity to the prior, and model misspecification are separate questions, not contradictions in vocabulary.

## Developed probability contracts for inference

### Definition 1. A procedure is evaluated under a specified law

An estimator, interval, or test is a measurable rule fixed on the observation space. Its performance is computed separately under each member $\mathbb P_\theta$ of the model. If the data are iid, the observation law is a product law. If a stopping rule selects the sample size, the experiment includes that rule. If records were selected by a screening process, the law must account for the screening. Calling a statistic a “mean” does not repair a mismatch between the actual experiment and the assumed sampling law.

This perspective separates two tasks. Probability derives the distribution of a declared statistic from a declared law. Inference chooses a statistic and a performance requirement appropriate to a scientific target. A procedure can have correct mathematics under its model and still be unsuitable if the model misses dependence, censoring, or selection. No new computation is needed to recognize that logical boundary; the model's hypotheses need to remain visible in the statement of the conclusion.

For risk calculations below, fix $\theta$ and suppose $T$ has finite second moment under $\mathbb P_\theta$. Set $m_\theta=\mathbb E_\theta T$ and let $g(\theta)$ be finite. Expanding
$T-g(\theta)=(T-m_\theta)+(m_\theta-g(\theta))$
shows the cross term has expectation zero. The remaining terms give the bias–variance identity. The integrability hypothesis matters: an infinite second moment does not support algebraic cancellation of infinite quantities. Risk comparisons also require a declared loss. Squared error and absolute error need not rank estimators in the same order.

### Worked example 1. Shrinkage improves one region and worsens another

Observe one $X\sim N(\theta,1)$ and estimate $\theta$ under squared error. The unbiased rule $T_1=X$ has risk one for every $\theta$. For the fixed rule $T_a=aX$, its mean is $a\theta$, variance $a^2$, and bias $(a-1)\theta$. Its risk is therefore
$R(\theta,T_a)=a^2+(a-1)^2\theta^2$.

Take $a=1/2$. At $\theta=0$, the risk is $1/4$, substantially below one. At $\theta=3$, it is $1/4+9/4=5/2$, above one. More generally it improves on $X$ exactly when $|\theta|<\sqrt3$, ties at the two boundary points, and worsens outside. This calculation demonstrates that a bias can buy variance reduction without providing a uniform improvement. Selecting $a$ after seeing $X$ produces another procedure and requires another risk calculation; one cannot substitute the observed value into a formula derived for a fixed coefficient.

The example also prevents a frequent misuse of unbiasedness. Unbiasedness says $\mathbb E_\theta T=\theta$ for the declared parameter values. It does not claim that any one estimate is near the truth, nor that its risk is smallest. Conversely a low risk at one parameter value says nothing by itself about risk elsewhere.

### Proposition 1. Inversion proves coverage

Let $Z_\theta(X)$ be a measurable function whose distribution is the same law $Q$ under every $\mathbb P_\theta$. Choose a measurable acceptance set $A$ with $Q(A)\ge1-\alpha$, and define
$C(X)=\{\vartheta:Z_\vartheta(X)\in A\}$.
For the actual fixed $\theta$, the events $\{\theta\in C(X)\}$ and $\{Z_\theta(X)\in A\}$ coincide. Therefore
$\mathbb P_\theta(\theta\in C(X))=Q(A)\ge1-\alpha$.
This is the whole coverage proof. Finding a useful pivot and making its inverted set computable are additional mathematical tasks.

The pivot need not be a statistic: it can contain the unknown parameter, as the normal standardized mean does. The reported interval must be a function of the observed data and known quantities, so inversion removes the unknown parameter from its endpoints. A random interval's coverage is a property of its generating rule, not a distribution assigned to the fixed parameter after data arrive. Bayesian posterior probabilities require a separate joint model and can be evaluated alongside, rather than substituted for, repeated-sampling coverage.

### Worked example 2. Exact normal coverage and approximate decimal endpoints

Suppose $X_1,\ldots,X_{25}$ are iid $N(\mu,4)$ and $\sigma=2$ is known. The Gaussian chapter proves that their mean is normal with variance $4/25$, so $(\bar X-\mu)/(2/5)$ is exactly standard normal. Let $z=\Phi^{-1}(0.975)$. Inverting $-z\le(\bar X-\mu)/(2/5)\le z$ gives the exact 95% coverage procedure
$C(X)=[\bar X-(2/5)z,\bar X+(2/5)z]$.

If the observed mean is ten, the endpoints are $10\pm0.4z$, numerically approximately $[9.216,10.784]$. The exact statement uses the normal quantile; replacing it by the rounded number $1.96$ changes the exact probability slightly. If $\sigma$ were unknown, inserting a sample standard deviation would produce a different pivot. Under iid normal sampling its studentized law can be derived from the independent normal mean and chi-square residual sum of squares, but it is not a standard normal law at sample size twenty-five.

Neither a visually symmetric sample nor an approximately bell-shaped histogram establishes exact normal coverage. For nonnormal iid observations with suitable moments, a CLT can support an asymptotic interval along $n\to\infty$. That is a different theorem with a limiting conclusion and, unless a quantitative error bound is supplied, no universal accuracy claim at this one sample size.

### Proposition 2. The simple Neyman–Pearson comparison

Let $P_0,P_1$ have densities $p_0,p_1$ with respect to a common measure. Let $c\ge0$ and let $\varphi^*$ take value one where $p_1>cp_0$, zero where $p_1<cp_0$, and any measurable value in $[0,1]$ on equality. Suppose $\mathbb E_0\varphi^*=\alpha$. Then $\varphi^*$ maximizes $\mathbb E_1\varphi$ among measurable tests with $\mathbb E_0\varphi\le\alpha$.

Indeed, pointwise
$(\varphi^*-\varphi)(p_1-cp_0)\ge0$:
where the density difference is positive the first factor is nonnegative, where it is negative the first factor is nonpositive, and on equality the product is zero. Integrate. All densities and test functions are integrable, giving
$\mathbb E_1(\varphi^*-\varphi)\ge c\,\mathbb E_0(\varphi^*-\varphi)\ge0$.
This proves the claim, including regions with $p_0=0$. It avoids dividing densities on zero-denominator sets. Randomization on the equality region may be needed to reach a specified size.

The theorem compares two simple, fully specified distributions. It does not automatically solve a composite-null problem, provide a posterior probability, or permit choosing the null after seeing the sample. Uniformly most powerful tests require an additional argument showing one rule works against every relevant alternative. A likelihood ratio is a way to order observations for this optimization, with size controlled under the null law.

### Worked example 3. A discrete test with boundary randomization

Observe four iid Bernoulli variables and test $p=1/2$ against $p=3/4$. Write $S$ for the number of successes. The likelihood ratio of the entire observed vector is
$(3/2)^S(1/2)^{4-S}=3^S/16$,
which is strictly increasing in $S$. Under the null, $\mathbb P_0(S=4)=1/16$ and $\mathbb P_0(S=3)=4/16$.

To attain size $\alpha=1/8$, reject always at $S=4$, reject with probability $1/4$ at $S=3$, and never reject at smaller counts. The null rejection probability is $1/16+(1/4)(4/16)=1/8$. Under the alternative, its power is
$(3/4)^4+(1/4)\binom43(3/4)^3(1/4)=81/256+27/256=27/64$.
The comparison theorem proves this is a most powerful size-$1/8$ rule for these two simple hypotheses. The randomization uses an independent auxiliary uniform draw; without recording that extra experiment, the procedure has not been specified completely.

A nonrandomized upper-tail p-value is $p_{\rm tail}(s)=\mathbb P_0(S\ge s)$. At $s=4$ it is $1/16$, and at $s=3$ it is $5/16$. There is no outcome with p-value exactly $1/8$. This discreteness explains why thresholding a valid p-value need not have rejection probability equal to the nominal threshold.

### Proposition 3. Tail p-values and exchangeability

For a finite-valued statistic $T$, define $p(T)=P_0(T'\ge T)$, where $T'$ has the null sampling law. List its possible values in decreasing order. The tail sums increase down the list. For any $u$, the event $p(T)\le u$ consists of the initial values whose total null probability is the largest such tail sum at most $u$, or is empty. Thus $P_0(p(T)\le u)\le u$. Ties are included in the tail; discarding them without randomization can invalidate the proof.

A permutation procedure has a related finite justification. Let a finite group act on the data and suppose the null law is invariant under that action. On a finite orbit the conditional distribution is uniform over distinct orbit points. Ranking the statistic over the orbit and including ties gives the same tail-sum inequality conditionally on the orbit, hence unconditionally by averaging. Equal sample sizes alone do not imply invariance. If observations have unequal distributions or dependence tied to the labels, the declared permutations may alter their joint law and the argument no longer applies.

### Proposition 4. A normalized Bayesian calculation

For $a,b>0$, the beta density is $p^{a-1}(1-p)^{b-1}/B(a,b)$ on $(0,1)$, where $B(a,b)=\int_0^1p^{a-1}(1-p)^{b-1}\,dp$ is positive and finite. With $s$ successes among $n$ conditionally iid Bernoulli observations, multiplying prior and likelihood gives a positive integrable kernel proportional to $p^{a+s-1}(1-p)^{b+n-s-1}$. Its normalizing integral is $B(a+s,b+n-s)$, so the posterior is beta with those parameters.

The denominator is a marginal data probability under the joint model. Conditioning is justified because that probability is positive for every possible finite success count when $a,b>0$. The posterior mean is $(a+s)/(a+b+n)$, obtained by the beta-integral ratio, and combines prior and data through their declared assumptions. A credible interval computed from this posterior has posterior mass by construction. A claim about its frequentist coverage is another calculation under each fixed $p$; it does not follow from normalization alone.

The reader can now carry probability arguments into inference without changing their meanings. Coverage is an event probability for a random set, size is a null expectation of a test, and posterior mass is a conditional probability in a joint law. Every denominator, moment assumption, and independence claim remains part of the result. The subsequent inference book develops criteria for selecting and comparing these procedures rather than treating these probability identities as a complete theory of decision making.

## 8. Exercises with complete solutions

### 1. Sampling mean

**Exercise 19.1**

<a id="sampling-laws-and-inference-bridge-ex-1"></a>

For $S\sim \operatorname{Binomial}(n,p)$, find mean and variance of $S/n$.

<details>
<summary>Hint 1</summary>

Use the mean and variance of the binomial count $S$.

</details>

<details>
<summary>Hint 2</summary>

Multiplication by $1/n$ scales a mean by $1/n$ and a variance by $1/n^2$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Divide binomial mean $np$ and variance $np(1-p)$ by $n$ and $n^{2}$: mean $p$, variance $p(1-p)/n$.

</details>

### 2. Bias–variance identity

**Exercise 19.2**

<a id="sampling-laws-and-inference-bridge-ex-2"></a>

Prove the squared-error decomposition.

<details>
<summary>Hint 1</summary>

Add and subtract $\mathbb E_\theta T$ inside the squared error.

</details>

<details>
<summary>Hint 2</summary>

After expansion, the cross term has mean zero because $T-\mathbb E_\theta T$ is centered.

</details>

<details>
<summary>Solution</summary>

**Solution.** Write $T-g=(T-\mathbb{E}T)+(\mathbb{E}T-g)$, square, and take expectation. The cross term vanishes because $\mathbb{E}(T-\mathbb{E}T)=0$.

</details>

### 3. A biased improvement

**Exercise 19.3**

<a id="sampling-laws-and-inference-bridge-ex-3"></a>

If an unbiased estimator has variance $4$, and another has bias $1$ and variance $1$, compare squared risks.

<details>
<summary>Hint 1</summary>

Squared-error risk is variance plus squared bias.

</details>

<details>
<summary>Hint 2</summary>

Compute both totals, rather than comparing the biases alone.

</details>

<details>
<summary>Solution</summary>

**Solution.** Risks are $4$ and $1+1^{2}=2$; the biased estimator has smaller risk.

</details>

### 4. Bernoulli likelihood

**Exercise 19.4**

<a id="sampling-laws-and-inference-bridge-ex-4"></a>

Derive its maximizer for $0<s<n$.

<details>
<summary>Hint 1</summary>

Differentiate the log likelihood for $p\in(0,1)$.

</details>

<details>
<summary>Hint 2</summary>

Solve $s/p=(n-s)/(1-p)$ and check that the second derivative is negative.

</details>

<details>
<summary>Solution</summary>

**Solution.** Apart from an additive constant, the log likelihood is $s \log p+(n-s)\log(1-p)$. Its derivative $s/p-(n-s)/(1-p)=0$ gives $p=s/n$; the second derivative is negative.

</details>

### 5. Likelihood normalization

**Exercise 19.5**

<a id="sampling-laws-and-inference-bridge-ex-5"></a>

For one Bernoulli success, does $L(p)=p$ integrate to one on $[0,1]$?

<details>
<summary>Hint 1</summary>

Integrate the likelihood as an ordinary function of $p$.

</details>

<details>
<summary>Hint 2</summary>

For a single success its integral is $\int_0^1p\,dp$; normalization in data space is a different operation.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its integral is $1/2$. Likelihood has arbitrary data-dependent multiplicative scale and is not a parameter density.

</details>

### 6. Normal pivot inversion

**Exercise 19.6**

<a id="sampling-laws-and-inference-bridge-ex-6"></a>

Derive the known-variance interval.

<details>
<summary>Hint 1</summary>

Begin with a central normal-probability event.

</details>

<details>
<summary>Hint 2</summary>

Multiply through by the positive standard error and isolate $\mu$ in both inequalities.

</details>

<details>
<summary>Solution</summary>

**Solution.** Start with $-z\le (\bar{X}-\mu )/(\sigma /\sqrt{n})\le z$, multiply by the positive standard error, and solve both inequalities for $\mu$.

</details>

### 7. Coverage interpretation

**Exercise 19.7**

<a id="sampling-laws-and-inference-bridge-ex-7"></a>

What is random in $\mathbb{P}_\mu (\mu \in C(X))$?

<details>
<summary>Hint 1</summary>

Fix the model parameter before drawing repeated samples.

</details>

<details>
<summary>Hint 2</summary>

The data determine a random interval; membership of the fixed parameter is the event whose probability is evaluated.

</details>

<details>
<summary>Solution</summary>

**Solution.** Under frequentist evaluation $\mu$ is fixed and data, hence the reported set $C(X)$, are random across repetitions.

</details>

### 8. Valid p-value

**Exercise 19.8**

<a id="sampling-laws-and-inference-bridge-ex-8"></a>

If $U\sim \operatorname{Uniform}(0,1)$ under a simple null, show $U$ is valid.

<details>
<summary>Hint 1</summary>

Check the defining inequality at each $u\in[0,1]$.

</details>

<details>
<summary>Hint 2</summary>

The uniform distribution function equals $u$ on that interval.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\mathbb{P}(U\le u)=u$ for every $u\in [0,1]$, satisfying validity with equality.

</details>

### 9. Conservative p-value

**Exercise 19.9**

<a id="sampling-laws-and-inference-bridge-ex-9"></a>

Can a valid p-value have $\mathbb{P}(p\le u)<u$?

<details>
<summary>Hint 1</summary>

Validity requires an upper bound, rather than an equality.

</details>

<details>
<summary>Hint 2</summary>

A finite-valued statistic produces a p-value with jumps and can leave some significance levels unattainable.

</details>

<details>
<summary>Solution</summary>

**Solution.** Yes. Discrete tests often cannot attain every level; validity requires an upper bound, not equality.

</details>

### 10. Power versus size

**Exercise 19.10**

<a id="sampling-laws-and-inference-bridge-ex-10"></a>

Why is high rejection probability not enough to praise a test?

<details>
<summary>Hint 1</summary>

Compare an always-reject rule under the null and alternative.

</details>

<details>
<summary>Hint 2</summary>

Its alternative rejection probability is perfect, but its null rejection probability is also one.

</details>

<details>
<summary>Solution</summary>

**Solution.** A rule that always rejects has power one but size one. Power must be compared subject to controlled null error.

</details>

### 11. Permutation premise

**Exercise 19.11**

<a id="sampling-laws-and-inference-bridge-ex-11"></a>

What property makes label permutation exact?

<details>
<summary>Hint 1</summary>

Ask whether permuting the labels changes the joint null law.

</details>

<details>
<summary>Hint 2</summary>

Exactness requires invariance under the declared permutations, including their effect on dependence and distributions.

</details>

<details>
<summary>Solution</summary>

**Solution.** Under the null, the joint observation law must be invariant under the declared permutations (exchangeability). Mere equal sample sizes do not suffice.

</details>

### 12. Bootstrap extreme warning

**Exercise 19.12**

<a id="sampling-laws-and-inference-bridge-ex-12"></a>

Why can an empirical bootstrap underestimate uncertainty of a population maximum?

<details>
<summary>Hint 1</summary>

An empirical resample uses only the observed support.

</details>

<details>
<summary>Hint 2</summary>

A new population sample can exceed the observed maximum, whereas an empirical resample cannot.

</details>

<details>
<summary>Solution</summary>

**Solution.** Resamples contain no value beyond the observed maximum, whereas new population samples can. The empirical support truncates the relevant tail behavior.

</details>

### 13. Consistency scope

**Exercise 19.13**

<a id="sampling-laws-and-inference-bridge-ex-13"></a>

Does $T_{n}\to \theta$ in probability imply an accurate $n=20$ estimator?

<details>
<summary>Hint 1</summary>

Convergence in probability is a statement along $n\to\infty$.

</details>

<details>
<summary>Hint 2</summary>

Without a rate, it gives no specified numerical error at the fixed index twenty.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. It is an asymptotic statement and gives no numerical finite-$n$ error without rates or bounds.

</details>

### 14. Conjugate update

**Exercise 19.14**

<a id="sampling-laws-and-inference-bridge-ex-14"></a>

With $\operatorname{Beta}(a,b)$ prior and $s$ successes in $n$ Bernoulli trials, find posterior.

<details>
<summary>Hint 1</summary>

Multiply the beta prior kernel by the Bernoulli likelihood kernel.

</details>

<details>
<summary>Hint 2</summary>

Add the success and failure counts to the two exponents, then identify the normalizing beta integral.

</details>

<details>
<summary>Solution</summary>

**Solution.** Prior times likelihood is proportional to $p^{a+s-1}(1-p)^{b+n-s-1}$, hence $\operatorname{Beta}(a+s,b+n-s)$.

</details>

### 15. Posterior versus coverage

**Exercise 19.15**

<a id="sampling-laws-and-inference-bridge-ex-15"></a>

Why can a 95% credible set and 95% confidence set differ?

<details>
<summary>Hint 1</summary>

Identify the probability law and what is conditioned on in each claim.

</details>

<details>
<summary>Hint 2</summary>

A posterior probability conditions on data under a prior joint law; confidence coverage repeats the data under each fixed parameter.

</details>

<details>
<summary>Solution</summary>

**Solution.** The credible probability conditions on data within a prior joint model; coverage averages the random procedure under each fixed sampling parameter. They solve different probability statements.

</details>


## Sources

The prose and examples here are original. The [Berkeley Statistics 210A reader on hypothesis testing and the Neyman–Pearson lemma](https://stat210a.berkeley.edu/fall-2025/reader/hypothesis-testing.html) provides a primary university treatment of the likelihood-ratio comparison proved above. For the underlying probability language, see Rick Durrett's author-hosted [*Probability: Theory and Examples*](https://services.math.duke.edu/~rtd/PTE/PTE5_011119.pdf). The preceding [Gaussian chapter](gaussian-vectors-and-multivariate-normal.md) proves the exact normal sample facts used in the pivot calculation. Statistical procedure selection continues in [*Principles of Statistical Inference*](#/books/principles-statistical-inference).


## 9. Summary and onward route

Sampling laws turn procedures into probability objects. Bias, variance, risk, likelihood, coverage, size, power, resampling, and posterior conditioning answer different questions. Honest inference declares the experiment, target, procedure, guarantee, and limiting or model assumptions.

The final chapter stress-tests the entire volume through counterexamples and cumulative capstones; full statistical theory continues in *Principles of Statistical Inference*.
